import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  copyToArray2j022khrow2yi as copyToArray,
  equals2v6cggk171b6e as equals,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  enumEntries20mr21zbe3az4 as enumEntries,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  defineProp3ur6h3slcvq4x as defineProp,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  createThis2j2avj17cvnv2 as createThis,
  getKClass3t8tygqu4lcxf as getKClass,
  equals2au1ep9vhcato as equals_0,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
  PrimitiveClasses_getInstance6p7zmos9nw3c as PrimitiveClasses_getInstance,
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
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  firstOrNull1gk7vzkf4h3nq as firstOrNull_0,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstance2hpyx1v3alnih as StringSerializer_getInstance,
  IntSerializer_getInstance3pev8isxtkhc2 as IntSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  BooleanSerializer_getInstancei6giaf3o69cd as BooleanSerializer_getInstance,
  throwArrayMissingFieldExceptionbk1mj238w44a as throwArrayMissingFieldException,
  FloatSerializer_getInstancedyjoacse4hez as FloatSerializer_getInstance,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  SerializersModuleBuilderfxsfdohcdipc as SerializersModuleBuilder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { toInstant267ay1juq3sdr as toInstant } from './Kotlin-DateTime-library-kotlinx-datetime.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import {
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  delay2673xnmlkmidc as delay,
} from './kotlinx-coroutines-core.mjs';
import {
  runBlocking31cbthb8fvtpp as runBlocking,
  AnySerializer_getInstanceml5s7nlbxkd9 as AnySerializer_getInstance,
} from './kmpcommon.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  URLBuilder2mz8zkz4u9ray as URLBuilder,
  Companion_getInstancetfg6b5k18hsf as Companion_getInstance,
  Urlowwyg1lanrqp as Url,
  set_encodedPath3q0i8nsv3a7qy as set_encodedPath,
  Application_getInstanceueakgx5l255p as Application_getInstance,
} from './ktor-ktor-http.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Mastodon {}
class MastodonException extends Exception {
  static q9b(m) {
    var $this = this.me(m);
    init_work_socialhub_kmastodon_MastodonException($this);
    return $this;
  }
  static r9b(e) {
    var $this = this.oe(e);
    init_work_socialhub_kmastodon_MastodonException($this);
    return $this;
  }
  static s9b(status, body) {
    var $this = this.me('status code: ' + status + ', body: ' + body);
    init_work_socialhub_kmastodon_MastodonException($this);
    $this.n9b_1 = status;
    $this.o9b_1 = body;
    return $this;
  }
}
class MastodonFactory_0 {
  t9b(uri, accessToken, service) {
    return new MastodonImpl(uri, accessToken, service);
  }
  instance(uri, accessToken, service, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    service = service === VOID ? Service_MASTODON_getInstance() : service;
    return $super === VOID ? this.t9b(uri, accessToken, service) : $super.t9b.call(this, uri, accessToken, service);
  }
}
class AccountsResource {}
class AppsResource {}
class BlocksResource {}
class EmojisResource {}
class FavouritesResource {}
class FollowRequestsResource {}
class FollowsResource {}
class InstancesResource {}
class ListsResource {}
class MediasResource {}
class MutesResource {}
class NodesResource {}
class NotificationsResource {}
class OAuthResource {}
class PollsResource {}
class ReportsResource {}
class SearchResource {}
class StatusesResource {}
class TimelinesResource {}
class TrendsResource {}
class Page {
  constructor() {
    this.offset = null;
    this.limit = null;
  }
  r85(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
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
  u9b(_set____db54di) {
    this.maxId = _set____db54di;
  }
  v9b() {
    return this.maxId;
  }
  w9b(_set____db54di) {
    this.minId = _set____db54di;
  }
  x9b() {
    return this.minId;
  }
  r7o(_set____db54di) {
    this.sinceId = _set____db54di;
  }
  s7o() {
    return this.sinceId;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
}
class AccountsAccountRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class AccountsBlockRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class AccountsFollowRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class AccountsFollowersRequest {
  constructor() {
    this.id = null;
    this.range = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  y9b(_set____db54di) {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  y9b(_set____db54di) {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class AccountsRelationshipsRequest {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.ids = [];
  }
  z9b(_set____db54di) {
    this.ids = _set____db54di;
  }
  a9c() {
    return this.ids;
  }
  addId(id) {
    var tmp = this;
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = this.ids;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = [id];
    tmp.ids = tmp$ret$0.concat(tmp$ret$3);
  }
}
class AccountsSearchRequest {
  constructor() {
    this.query = null;
    this.limit = null;
  }
  t8a(_set____db54di) {
    this.query = _set____db54di;
  }
  u8a() {
    return this.query;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  b9c(_set____db54di) {
    this.onlyPinned = _set____db54di;
  }
  c9c() {
    return this.onlyPinned;
  }
  d9c(_set____db54di) {
    this.onlyMedia = _set____db54di;
  }
  e9c() {
    return this.onlyMedia;
  }
  f9c(_set____db54di) {
    this.excludeReplies = _set____db54di;
  }
  g9c() {
    return this.excludeReplies;
  }
  h9c(_set____db54di) {
    this.excludeReblogs = _set____db54di;
  }
  i9c() {
    return this.excludeReblogs;
  }
  y9b(_set____db54di) {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class AccountsUnfollowRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class AccountsUnmuteRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
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
  t52(_set____db54di) {
    this.displayName = _set____db54di;
  }
  u52() {
    return this.displayName;
  }
  j9c(_set____db54di) {
    this.note = _set____db54di;
  }
  a8h() {
    return this.note;
  }
  x52(_set____db54di) {
    this.avatar = _set____db54di;
  }
  y52() {
    return this.avatar;
  }
  c8z(_set____db54di) {
    this.header = _set____db54di;
  }
  d8z() {
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
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  k9c(_set____db54di) {
    this.website = _set____db54di;
  }
  l9c() {
    return this.website;
  }
  m9c(_set____db54di) {
    this.redirectUris = _set____db54di;
  }
  n9c() {
    return this.redirectUris;
  }
  o9c(_set____db54di) {
    this.scopes = _set____db54di;
  }
  p9c() {
    return this.scopes;
  }
}
class BlocksBlocksRequest {
  constructor() {
    this.range = null;
  }
  y9b(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class FavouritesFavouritesRequest {
  constructor() {
    this.range = null;
  }
  y9b(_set____db54di) {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class FollowRequestsRejectFollowRequestRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class FollowsRemoteFollowRequest {
  constructor() {
    this.uri = null;
  }
  m56(_set____db54di) {
    this.uri = _set____db54di;
  }
  z55() {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  q9c(_set____db54di) {
    this.accountIds = _set____db54di;
  }
  r9c() {
    return this.accountIds;
  }
  addAccountId(accountId) {
    var tmp = this;
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = this.accountIds;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = [accountId];
    tmp.accountIds = tmp$ret$0.concat(tmp$ret$3);
  }
}
class ListsCreateListRequest {
  constructor() {
    this.title = null;
  }
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  q9c(_set____db54di) {
    this.accountIds = _set____db54di;
  }
  r9c() {
    return this.accountIds;
  }
  addAccountId(accountId) {
    var tmp = this;
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = this.accountIds;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = [accountId];
    tmp.accountIds = tmp$ret$0.concat(tmp$ret$3);
  }
}
class ListsDeleteListRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class ListsListAccountsRequest {
  constructor() {
    this.id = null;
    this.limit = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
}
class ListsListRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class ListsListsRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class ListsUpdateListRequest {
  constructor() {
    this.id = null;
    this.title = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
    return this.title;
  }
}
class MediasPostMediaRequest {
  constructor() {
    this.bytes = null;
    this.name = null;
    this.description = null;
  }
  r7v(_set____db54di) {
    this.bytes = _set____db54di;
  }
  h5o() {
    return this.bytes;
  }
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  v52(_set____db54di) {
    this.description = _set____db54di;
  }
  w52() {
    return this.description;
  }
}
class NotificationsEditSubscriptionRequest {
  constructor() {
    this.alert = null;
  }
  s9c(_set____db54di) {
    this.alert = _set____db54di;
  }
  t9c() {
    return this.alert;
  }
}
class NotificationsNotificationRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  y9b(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
  u9c(_set____db54di) {
    this.types = _set____db54di;
  }
  v9c() {
    return this.types;
  }
  h7z(_set____db54di) {
    this.excludeTypes = _set____db54di;
  }
  i7z() {
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
  z79(_set____db54di) {
    this.endpoint = _set____db54di;
  }
  a7a() {
    return this.endpoint;
  }
  w9c(_set____db54di) {
    this.p256dh = _set____db54di;
  }
  x9c() {
    return this.p256dh;
  }
  l8c(_set____db54di) {
    this.auth = _set____db54di;
  }
  s51() {
    return this.auth;
  }
  s9c(_set____db54di) {
    this.alert = _set____db54di;
  }
  t9c() {
    return this.alert;
  }
}
class OAuthAuthorizationUrlRequest {
  constructor() {
    this.clientId = null;
    this.redirectUri = null;
    this.scopes = null;
  }
  y9c(_set____db54di) {
    this.clientId = _set____db54di;
  }
  z9c() {
    return this.clientId;
  }
  a9d(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  b9d() {
    return this.redirectUri;
  }
  o9c(_set____db54di) {
    this.scopes = _set____db54di;
  }
  p9c() {
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
  y9c(_set____db54di) {
    this.clientId = _set____db54di;
  }
  z9c() {
    return this.clientId;
  }
  c9d(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  d9d() {
    return this.clientSecret;
  }
  a9d(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  b9d() {
    return this.redirectUri;
  }
  e9d(_set____db54di) {
    this.code = _set____db54di;
  }
  f9d() {
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
  y9c(_set____db54di) {
    this.clientId = _set____db54di;
  }
  z9c() {
    return this.clientId;
  }
  c9d(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  d9d() {
    return this.clientSecret;
  }
  g9d(_set____db54di) {
    this.emailAddress = _set____db54di;
  }
  h9d() {
    return this.emailAddress;
  }
  y5u(_set____db54di) {
    this.password = _set____db54di;
  }
  n3u() {
    return this.password;
  }
  o9c(_set____db54di) {
    this.scopes = _set____db54di;
  }
  p9c() {
    return this.scopes;
  }
}
class OAuthRefreshAccessTokenRequest {
  constructor() {
    this.clientId = null;
    this.clientSecret = null;
    this.refreshToken = null;
  }
  y9c(_set____db54di) {
    this.clientId = _set____db54di;
  }
  z9c() {
    return this.clientId;
  }
  c9d(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  d9d() {
    return this.clientSecret;
  }
  i9d(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  j9d() {
    return this.refreshToken;
  }
}
class PollsVotePollRequest {
  constructor() {
    this.id = null;
    this.choices = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  k9d(_set____db54di) {
    this.choices = _set____db54di;
  }
  r7n() {
    return this.choices;
  }
}
class ReportsPostReportRequest {
  constructor() {
    this.accountId = null;
    this.statusIds = null;
    this.comment = null;
  }
  l9d(_set____db54di) {
    this.accountId = _set____db54di;
  }
  m9d() {
    return this.accountId;
  }
  n9d(_set____db54di) {
    this.statusIds = _set____db54di;
  }
  o9d() {
    return this.statusIds;
  }
  l7v(_set____db54di) {
    this.comment = _set____db54di;
  }
  m7v() {
    return this.comment;
  }
}
class SearchSearchRequest {
  constructor() {
    this.query = null;
    this.resolve = null;
    this.onlyFollowing = null;
    this.page = null;
  }
  t8a(_set____db54di) {
    this.query = _set____db54di;
  }
  u8a() {
    return this.query;
  }
  p9d(_set____db54di) {
    this.resolve = _set____db54di;
  }
  q9d() {
    return this.resolve;
  }
  r9d(_set____db54di) {
    this.onlyFollowing = _set____db54di;
  }
  s9d() {
    return this.onlyFollowing;
  }
  t9d(_set____db54di) {
    this.page = _set____db54di;
  }
  u9d() {
    return this.page;
  }
}
class StatusesCardRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class StatusesContextRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class StatusesDeleteStatusRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class StatusesFavouriteRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class StatusesFavouritedByRequest {
  constructor() {
    this.id = null;
    this.range = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  y9b(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
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
  v9d(_set____db54di) {
    this.inReplyToId = _set____db54di;
  }
  w9d() {
    return this.inReplyToId;
  }
  n7v(_set____db54di) {
    this.sensitive = _set____db54di;
  }
  o7v() {
    return this.sensitive;
  }
  x9d(_set____db54di) {
    this.spoilerText = _set____db54di;
  }
  y9d() {
    return this.spoilerText;
  }
  y85(_set____db54di) {
    this.visibility = _set____db54di;
  }
  i6b() {
    return this.visibility;
  }
  z9d(_set____db54di) {
    this.status = _set____db54di;
  }
  k48() {
    return this.status;
  }
  a9e(_set____db54di) {
    this.content = _set____db54di;
  }
  o26() {
    return this.content;
  }
  b9e(_set____db54di) {
    this.mediaIds = _set____db54di;
  }
  c9e() {
    return this.mediaIds;
  }
  d9e(_set____db54di) {
    this.pollOptions = _set____db54di;
  }
  e9e() {
    return this.pollOptions;
  }
  f9e(_set____db54di) {
    this.pollExpiresIn = _set____db54di;
  }
  g9e() {
    return this.pollExpiresIn;
  }
  h9e(_set____db54di) {
    this.pollMultiple = _set____db54di;
  }
  i9e() {
    return this.pollMultiple;
  }
  j9e(_set____db54di) {
    this.pollHideTotals = _set____db54di;
  }
  k9e() {
    return this.pollHideTotals;
  }
}
class StatusesReblogRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class StatusesRebloggedByRequest {
  constructor() {
    this.id = null;
    this.range = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  y9b(_set____db54di) {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class StatusesUnfavouriteRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class StatusesUnreblogRequest {
  constructor() {
    this.id = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
}
class TimelinesConversationsRequest {
  constructor() {
    this.range = null;
  }
  y9b(_set____db54di) {
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
  l9e(_set____db54di) {
    this.hashtag = _set____db54di;
  }
  m9e() {
    return this.hashtag;
  }
  z89(_set____db54di) {
    this.local = _set____db54di;
  }
  a8a() {
    return this.local;
  }
  d9c(_set____db54di) {
    this.onlyMedia = _set____db54di;
  }
  e9c() {
    return this.onlyMedia;
  }
  y9b(_set____db54di) {
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
  y9b(_set____db54di) {
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
  s82(_set____db54di) {
    this.listId = _set____db54di;
  }
  j82() {
    return this.listId;
  }
  y9b(_set____db54di) {
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
  z89(_set____db54di) {
    this.local = _set____db54di;
  }
  a8a() {
    return this.local;
  }
  d9c(_set____db54di) {
    this.onlyMedia = _set____db54di;
  }
  e9c() {
    return this.onlyMedia;
  }
  y9b(_set____db54di) {
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
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
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
  h94(_set____db54di) {
    this.data = _set____db54di;
  }
  t5w() {
    return this.data;
  }
  n9e(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  o9e(_set____db54di) {
    this.link = _set____db54di;
  }
  z7a() {
    return this.link;
  }
  p9e(_set____db54di) {
    this.json = _set____db54di;
  }
  m26() {
    return this.json;
  }
}
class ResponseUnit {
  constructor() {
    this.limit = null;
    this.link = null;
  }
  n9e(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  o9e(_set____db54di) {
    this.link = _set____db54di;
  }
  z7a() {
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
        if (equals(element.w1_1, value, true)) {
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
    return this.i1();
  }
  get ordinal() {
    return this.v4();
  }
}
class Companion_0 {
  z26() {
    return $serializer_getInstance();
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.AccessToken', this, 6);
    tmp0_serialDesc.f18('access_token', true);
    tmp0_serialDesc.f18('token_type', true);
    tmp0_serialDesc.f18('scope', true);
    tmp0_serialDesc.f18('created_at', true);
    tmp0_serialDesc.f18('refresh_token', true);
    tmp0_serialDesc.f18('expires_in', true);
    this.s9e_1 = tmp0_serialDesc;
  }
  t9e(encoder, value) {
    var tmp0_desc = this.s9e_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.accessToken == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.accessToken);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.tokenType == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.tokenType);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.scope == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.scope);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.createdAt === 0)) {
      tmp1_output.w11(tmp0_desc, 3, value.createdAt);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.refreshToken == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.refreshToken);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.expiresIn == null)) {
      tmp1_output.f12(tmp0_desc, 5, IntSerializer_getInstance(), value.expiresIn);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.t9e(encoder, value instanceof AccessToken ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.s9e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.l10(tmp0_desc);
    if (tmp10_input.b11()) {
      tmp4_local0 = tmp10_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.q10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.z10(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.q10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.z10(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp10_input.m10(tmp0_desc);
    return AccessToken.u9e(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  xv() {
    return this.s9e_1;
  }
  v18() {
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
  m8h(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  n8h() {
    return this.accessToken;
  }
  v9e(_set____db54di) {
    this.tokenType = _set____db54di;
  }
  w9e() {
    return this.tokenType;
  }
  x9e(_set____db54di) {
    this.scope = _set____db54di;
  }
  y9e() {
    return this.scope;
  }
  z9e(_set____db54di) {
    this.createdAt = _set____db54di;
  }
  m53() {
    return this.createdAt;
  }
  i9d(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  j9d() {
    return this.refreshToken;
  }
  a9f(_set____db54di) {
    this.expiresIn = _set____db54di;
  }
  b9f() {
    return this.expiresIn;
  }
  static u9e(seen0, accessToken, tokenType, scope, createdAt, refreshToken, expiresIn, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().s9e_1);
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
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c9f_1 = [null, null, null, null, null, null, null, null, null, null, null, new ReferenceArraySerializer(getKClass(Field), $serializer_getInstance_12()), new ReferenceArraySerializer(getKClass(Emoji), $serializer_getInstance_10()), null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  }
  z26() {
    return $serializer_getInstance_0();
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Account', this, 28);
    tmp0_serialDesc.f18('id', false);
    tmp0_serialDesc.f18('username', false);
    tmp0_serialDesc.f18('acct', false);
    tmp0_serialDesc.f18('url', false);
    tmp0_serialDesc.f18('display_name', false);
    tmp0_serialDesc.f18('note', false);
    tmp0_serialDesc.f18('avatar', false);
    tmp0_serialDesc.f18('avatar_static', true);
    tmp0_serialDesc.f18('header', false);
    tmp0_serialDesc.f18('header_static', true);
    tmp0_serialDesc.f18('locked', true);
    tmp0_serialDesc.f18('fields', true);
    tmp0_serialDesc.f18('emojis', true);
    tmp0_serialDesc.f18('bot', true);
    tmp0_serialDesc.f18('group', true);
    tmp0_serialDesc.f18('discoverable', true);
    tmp0_serialDesc.f18('noindex', true);
    tmp0_serialDesc.f18('moved', true);
    tmp0_serialDesc.f18('suspended', true);
    tmp0_serialDesc.f18('limited', true);
    tmp0_serialDesc.f18('created_at', false);
    tmp0_serialDesc.f18('last_status_at', true);
    tmp0_serialDesc.f18('statuses_count', true);
    tmp0_serialDesc.f18('followers_count', true);
    tmp0_serialDesc.f18('following_count', true);
    tmp0_serialDesc.f18('source', true);
    tmp0_serialDesc.f18('role', true);
    tmp0_serialDesc.f18('pleroma', true);
    this.d9f_1 = tmp0_serialDesc;
  }
  e9f(encoder, value) {
    var tmp0_desc = this.d9f_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().c9f_1;
    tmp1_output.b12(tmp0_desc, 0, value.id);
    tmp1_output.b12(tmp0_desc, 1, value.userName);
    tmp1_output.b12(tmp0_desc, 2, value.account);
    tmp1_output.b12(tmp0_desc, 3, value.url);
    tmp1_output.b12(tmp0_desc, 4, value.displayName);
    tmp1_output.b12(tmp0_desc, 5, value.note);
    tmp1_output.b12(tmp0_desc, 6, value.avatar);
    if (tmp1_output.j12(tmp0_desc, 7) ? true : !(value.avatarStatic == null)) {
      tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.avatarStatic);
    }
    tmp1_output.b12(tmp0_desc, 8, value.header);
    if (tmp1_output.j12(tmp0_desc, 9) ? true : !(value.headerStatic == null)) {
      tmp1_output.f12(tmp0_desc, 9, StringSerializer_getInstance(), value.headerStatic);
    }
    if (tmp1_output.j12(tmp0_desc, 10) ? true : !(value.isLocked === false)) {
      tmp1_output.t11(tmp0_desc, 10, value.isLocked);
    }
    var tmp;
    if (tmp1_output.j12(tmp0_desc, 11)) {
      tmp = true;
    } else {
      var tmp_0 = value.fields;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [];
      tmp = !equals_0(tmp_0, tmp$ret$2);
    }
    if (tmp) {
      tmp1_output.d12(tmp0_desc, 11, tmp2_cached[11], value.fields);
    }
    var tmp_1;
    if (tmp1_output.j12(tmp0_desc, 12)) {
      tmp_1 = true;
    } else {
      var tmp_2 = value.emojis;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = [];
      tmp_1 = !equals_0(tmp_2, tmp$ret$5);
    }
    if (tmp_1) {
      tmp1_output.d12(tmp0_desc, 12, tmp2_cached[12], value.emojis);
    }
    if (tmp1_output.j12(tmp0_desc, 13) ? true : !(value.isBot === false)) {
      tmp1_output.t11(tmp0_desc, 13, value.isBot);
    }
    if (tmp1_output.j12(tmp0_desc, 14) ? true : !(value.isGroup === false)) {
      tmp1_output.t11(tmp0_desc, 14, value.isGroup);
    }
    if (tmp1_output.j12(tmp0_desc, 15) ? true : !(value.isDiscoverable == null)) {
      tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isDiscoverable);
    }
    if (tmp1_output.j12(tmp0_desc, 16) ? true : !(value.isNoindex == null)) {
      tmp1_output.f12(tmp0_desc, 16, BooleanSerializer_getInstance(), value.isNoindex);
    }
    if (tmp1_output.j12(tmp0_desc, 17) ? true : !(value.moved == null)) {
      tmp1_output.f12(tmp0_desc, 17, $serializer_getInstance_0(), value.moved);
    }
    if (tmp1_output.j12(tmp0_desc, 18) ? true : !(value.isSuspended === false)) {
      tmp1_output.t11(tmp0_desc, 18, value.isSuspended);
    }
    if (tmp1_output.j12(tmp0_desc, 19) ? true : !(value.isLimited === false)) {
      tmp1_output.t11(tmp0_desc, 19, value.isLimited);
    }
    tmp1_output.b12(tmp0_desc, 20, value.createdAt);
    if (tmp1_output.j12(tmp0_desc, 21) ? true : !(value.lastStatusAt == null)) {
      tmp1_output.f12(tmp0_desc, 21, StringSerializer_getInstance(), value.lastStatusAt);
    }
    if (tmp1_output.j12(tmp0_desc, 22) ? true : !(value.statusesCount === 0)) {
      tmp1_output.w11(tmp0_desc, 22, value.statusesCount);
    }
    if (tmp1_output.j12(tmp0_desc, 23) ? true : !(value.followersCount === 0)) {
      tmp1_output.w11(tmp0_desc, 23, value.followersCount);
    }
    if (tmp1_output.j12(tmp0_desc, 24) ? true : !(value.followingCount === 0)) {
      tmp1_output.w11(tmp0_desc, 24, value.followingCount);
    }
    if (tmp1_output.j12(tmp0_desc, 25) ? true : !(value.source == null)) {
      tmp1_output.f12(tmp0_desc, 25, $serializer_getInstance_2(), value.source);
    }
    if (tmp1_output.j12(tmp0_desc, 26) ? true : !(value.role == null)) {
      tmp1_output.f12(tmp0_desc, 26, $serializer_getInstance_21(), value.role);
    }
    if (tmp1_output.j12(tmp0_desc, 27) ? true : !(value.pleroma == null)) {
      tmp1_output.f12(tmp0_desc, 27, $serializer_getInstance_63(), value.pleroma);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.e9f(encoder, value instanceof Account ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.d9f_1;
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
    var tmp32_input = decoder.l10(tmp0_desc);
    var tmp33_cached = Companion_getInstance_2().c9f_1;
    if (tmp32_input.b11()) {
      tmp4_local0 = tmp32_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp32_input.v10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp32_input.v10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp32_input.v10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp32_input.v10(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp32_input.v10(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp32_input.v10(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp32_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp32_input.v10(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp32_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp32_input.n10(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp32_input.x10(tmp0_desc, 11, tmp33_cached[11], tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp32_input.x10(tmp0_desc, 12, tmp33_cached[12], tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp32_input.n10(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp32_input.n10(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp32_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp32_input.z10(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp32_input.z10(tmp0_desc, 17, $serializer_getInstance_0(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp32_input.n10(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp32_input.n10(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp32_input.v10(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp32_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp25_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp26_local22 = tmp32_input.q10(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp27_local23 = tmp32_input.q10(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp28_local24 = tmp32_input.q10(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp29_local25 = tmp32_input.z10(tmp0_desc, 25, $serializer_getInstance_2(), tmp29_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp30_local26 = tmp32_input.z10(tmp0_desc, 26, $serializer_getInstance_21(), tmp30_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp31_local27 = tmp32_input.z10(tmp0_desc, 27, $serializer_getInstance_63(), tmp31_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp32_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp32_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp32_input.v10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp32_input.v10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp32_input.v10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp32_input.v10(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp32_input.v10(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp32_input.v10(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp32_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp32_input.v10(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp32_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp32_input.n10(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp32_input.x10(tmp0_desc, 11, tmp33_cached[11], tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp32_input.x10(tmp0_desc, 12, tmp33_cached[12], tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp32_input.n10(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp32_input.n10(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp32_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp32_input.z10(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp32_input.z10(tmp0_desc, 17, $serializer_getInstance_0(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp32_input.n10(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp32_input.n10(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp32_input.v10(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp32_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp25_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp26_local22 = tmp32_input.q10(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp27_local23 = tmp32_input.q10(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp28_local24 = tmp32_input.q10(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp29_local25 = tmp32_input.z10(tmp0_desc, 25, $serializer_getInstance_2(), tmp29_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp30_local26 = tmp32_input.z10(tmp0_desc, 26, $serializer_getInstance_21(), tmp30_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp31_local27 = tmp32_input.z10(tmp0_desc, 27, $serializer_getInstance_63(), tmp31_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp32_input.m10(tmp0_desc);
    return Account.o9f(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, tmp26_local22, tmp27_local23, tmp28_local24, tmp29_local25, tmp30_local26, tmp31_local27, null);
  }
  xv() {
    return this.d9f_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_2().c9f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), tmp0_cached[11], tmp0_cached[12], BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_0()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable($serializer_getInstance_2()), get_nullable($serializer_getInstance_21()), get_nullable($serializer_getInstance_63())];
  }
}
class Account {
  constructor() {
    Companion_getInstance_2();
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
  b72(_set____db54di) {
    this.f9f_1 = _set____db54di;
  }
  f22() {
    var tmp = this.f9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  p9f(_set____db54di) {
    this.g9f_1 = _set____db54di;
  }
  q9f() {
    var tmp = this.g9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('userName');
    }
  }
  r9f(_set____db54di) {
    this.h9f_1 = _set____db54di;
  }
  s9f() {
    var tmp = this.h9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('account');
    }
  }
  j8n(_set____db54di) {
    this.i9f_1 = _set____db54di;
  }
  d48() {
    var tmp = this.i9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('url');
    }
  }
  t9f(_set____db54di) {
    this.j9f_1 = _set____db54di;
  }
  u52() {
    var tmp = this.j9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('displayName');
    }
  }
  u9f(_set____db54di) {
    this.k9f_1 = _set____db54di;
  }
  a8h() {
    var tmp = this.k9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('note');
    }
  }
  v9f(_set____db54di) {
    this.l9f_1 = _set____db54di;
  }
  y52() {
    var tmp = this.l9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('avatar');
    }
  }
  w9f(_set____db54di) {
    this.avatarStatic = _set____db54di;
  }
  x9f() {
    return this.avatarStatic;
  }
  y9f(_set____db54di) {
    this.m9f_1 = _set____db54di;
  }
  d8z() {
    var tmp = this.m9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('header');
    }
  }
  z9f(_set____db54di) {
    this.headerStatic = _set____db54di;
  }
  a9g() {
    return this.headerStatic;
  }
  u97(_set____db54di) {
    this.isLocked = _set____db54di;
  }
  m80() {
    return this.isLocked;
  }
  b9g(_set____db54di) {
    this.fields = _set____db54di;
  }
  k80() {
    return this.fields;
  }
  c9g(_set____db54di) {
    this.emojis = _set____db54di;
  }
  s8j() {
    return this.emojis;
  }
  x99(_set____db54di) {
    this.isBot = _set____db54di;
  }
  c81() {
    return this.isBot;
  }
  d9g(_set____db54di) {
    this.isGroup = _set____db54di;
  }
  e9g() {
    return this.isGroup;
  }
  f9g(_set____db54di) {
    this.isDiscoverable = _set____db54di;
  }
  g9g() {
    return this.isDiscoverable;
  }
  h9g(_set____db54di) {
    this.isNoindex = _set____db54di;
  }
  i9g() {
    return this.isNoindex;
  }
  j9g(_set____db54di) {
    this.moved = _set____db54di;
  }
  k9g() {
    return this.moved;
  }
  z97(_set____db54di) {
    this.isSuspended = _set____db54di;
  }
  a98() {
    return this.isSuspended;
  }
  x97(_set____db54di) {
    this.isLimited = _set____db54di;
  }
  y97() {
    return this.isLimited;
  }
  m6s(_set____db54di) {
    this.n9f_1 = _set____db54di;
  }
  m53() {
    var tmp = this.n9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('createdAt');
    }
  }
  l9g(_set____db54di) {
    this.lastStatusAt = _set____db54di;
  }
  m9g() {
    return this.lastStatusAt;
  }
  n9g(_set____db54di) {
    this.statusesCount = _set____db54di;
  }
  o9g() {
    return this.statusesCount;
  }
  d98(_set____db54di) {
    this.followersCount = _set____db54di;
  }
  c53() {
    return this.followersCount;
  }
  e98(_set____db54di) {
    this.followingCount = _set____db54di;
  }
  y8h() {
    return this.followingCount;
  }
  p9g(_set____db54di) {
    this.source = _set____db54di;
  }
  l2h() {
    return this.source;
  }
  q9g(_set____db54di) {
    this.role = _set____db54di;
  }
  r9g() {
    return this.role;
  }
  s9g(_set____db54di) {
    this.pleroma = _set____db54di;
  }
  t9g() {
    return this.pleroma;
  }
  static o9f(seen0, id, userName, account, url, displayName, note, avatar, avatarStatic, header, headerStatic, isLocked, fields, emojis, isBot, isGroup, isDiscoverable, isNoindex, moved, isSuspended, isLimited, createdAt, lastStatusAt, statusesCount, followersCount, followingCount, source, role, pleroma, serializationConstructorMarker) {
    Companion_getInstance_2();
    if (!(1048959 === (1048959 & seen0))) {
      throwMissingFieldException(seen0, 1048959, $serializer_getInstance_0().d9f_1);
    }
    var $this = createThis(this);
    $this.f9f_1 = id;
    $this.g9f_1 = userName;
    $this.h9f_1 = account;
    $this.i9f_1 = url;
    $this.j9f_1 = displayName;
    $this.k9f_1 = note;
    $this.l9f_1 = avatar;
    if (0 === (seen0 & 128))
      $this.avatarStatic = null;
    else
      $this.avatarStatic = avatarStatic;
    $this.m9f_1 = header;
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
    $this.n9f_1 = createdAt;
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
    return this.f22();
  }
  set id(value) {
    this.b72(value);
  }
  get userName() {
    return this.q9f();
  }
  set userName(value) {
    this.p9f(value);
  }
  get account() {
    return this.s9f();
  }
  set account(value) {
    this.r9f(value);
  }
  get url() {
    return this.d48();
  }
  set url(value) {
    this.j8n(value);
  }
  get displayName() {
    return this.u52();
  }
  set displayName(value) {
    this.t9f(value);
  }
  get note() {
    return this.a8h();
  }
  set note(value) {
    this.u9f(value);
  }
  get avatar() {
    return this.y52();
  }
  set avatar(value) {
    this.v9f(value);
  }
  get header() {
    return this.d8z();
  }
  set header(value) {
    this.y9f(value);
  }
  get createdAt() {
    return this.m53();
  }
  set createdAt(value) {
    this.m6s(value);
  }
}
class Companion_2 {
  z26() {
    return $serializer_getInstance_1();
  }
}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.AccountList', this, 2);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('title', true);
    this.u9g_1 = tmp0_serialDesc;
  }
  v9g(encoder, value) {
    var tmp0_desc = this.u9g_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.title == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.title);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.v9g(encoder, value instanceof AccountList ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.u9g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return AccountList.w9g(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.u9g_1;
  }
  v18() {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
    return this.title;
  }
  static w9g(seen0, id, title, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().u9g_1);
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
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x9g_1 = [null, null, null, null, new ReferenceArraySerializer(getKClass(Field), $serializer_getInstance_12())];
  }
  z26() {
    return $serializer_getInstance_2();
  }
}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.AccountSource', this, 5);
    tmp0_serialDesc.f18('privacy', true);
    tmp0_serialDesc.f18('sensitive', true);
    tmp0_serialDesc.f18('language', true);
    tmp0_serialDesc.f18('note', true);
    tmp0_serialDesc.f18('fields', true);
    this.y9g_1 = tmp0_serialDesc;
  }
  z9g(encoder, value) {
    var tmp0_desc = this.y9g_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().x9g_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.privacy == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.privacy);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.sensitive == null)) {
      tmp1_output.f12(tmp0_desc, 1, BooleanSerializer_getInstance(), value.sensitive);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.language == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.language);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.note == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.note);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.fields == null)) {
      tmp1_output.f12(tmp0_desc, 4, tmp2_cached[4], value.fields);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.z9g(encoder, value instanceof AccountSource ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.y9g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.l10(tmp0_desc);
    var tmp10_cached = Companion_getInstance_4().x9g_1;
    if (tmp9_input.b11()) {
      tmp4_local0 = tmp9_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.z10(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.z10(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.z10(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.z10(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp9_input.m10(tmp0_desc);
    return AccountSource.a9h(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  xv() {
    return this.y9g_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_4().x9g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4])];
  }
}
class AccountSource {
  constructor() {
    Companion_getInstance_4();
    this.privacy = null;
    this.sensitive = null;
    this.language = null;
    this.note = null;
    this.fields = null;
  }
  b9h(_set____db54di) {
    this.privacy = _set____db54di;
  }
  c9h() {
    return this.privacy;
  }
  n7v(_set____db54di) {
    this.sensitive = _set____db54di;
  }
  o7v() {
    return this.sensitive;
  }
  d9h(_set____db54di) {
    this.language = _set____db54di;
  }
  e9h() {
    return this.language;
  }
  j9c(_set____db54di) {
    this.note = _set____db54di;
  }
  a8h() {
    return this.note;
  }
  f9h(_set____db54di) {
    this.fields = _set____db54di;
  }
  k80() {
    return this.fields;
  }
  static a9h(seen0, privacy, sensitive, language, note, fields, serializationConstructorMarker) {
    Companion_getInstance_4();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().y9g_1);
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
class Companion_4 {
  z26() {
    return $serializer_getInstance_3();
  }
}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Alert', this, 6);
    tmp0_serialDesc.f18('follow', true);
    tmp0_serialDesc.f18('favourite', true);
    tmp0_serialDesc.f18('reblog', true);
    tmp0_serialDesc.f18('mention', true);
    tmp0_serialDesc.f18('poll', true);
    tmp0_serialDesc.f18('status', true);
    this.g9h_1 = tmp0_serialDesc;
  }
  h9h(encoder, value) {
    var tmp0_desc = this.g9h_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.follow == null)) {
      tmp1_output.f12(tmp0_desc, 0, BooleanSerializer_getInstance(), value.follow);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.favourite == null)) {
      tmp1_output.f12(tmp0_desc, 1, BooleanSerializer_getInstance(), value.favourite);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.reblog == null)) {
      tmp1_output.f12(tmp0_desc, 2, BooleanSerializer_getInstance(), value.reblog);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.mention == null)) {
      tmp1_output.f12(tmp0_desc, 3, BooleanSerializer_getInstance(), value.mention);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.poll == null)) {
      tmp1_output.f12(tmp0_desc, 4, BooleanSerializer_getInstance(), value.poll);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.status == null)) {
      tmp1_output.f12(tmp0_desc, 5, BooleanSerializer_getInstance(), value.status);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.h9h(encoder, value instanceof Alert ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.g9h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.l10(tmp0_desc);
    if (tmp10_input.b11()) {
      tmp4_local0 = tmp10_input.z10(tmp0_desc, 0, BooleanSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.z10(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.z10(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.z10(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.z10(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.z10(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.z10(tmp0_desc, 0, BooleanSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.z10(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.z10(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.z10(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.z10(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.z10(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp10_input.m10(tmp0_desc);
    return Alert.i9h(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  xv() {
    return this.g9h_1;
  }
  v18() {
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
  j9h(_set____db54di) {
    this.follow = _set____db54di;
  }
  k9h() {
    return this.follow;
  }
  l9h(_set____db54di) {
    this.favourite = _set____db54di;
  }
  m9h() {
    return this.favourite;
  }
  n9h(_set____db54di) {
    this.reblog = _set____db54di;
  }
  o9h() {
    return this.reblog;
  }
  p9h(_set____db54di) {
    this.mention = _set____db54di;
  }
  q9h() {
    return this.mention;
  }
  e8a(_set____db54di) {
    this.poll = _set____db54di;
  }
  t86() {
    return this.poll;
  }
  r9h(_set____db54di) {
    this.status = _set____db54di;
  }
  k48() {
    return this.status;
  }
  static i9h(seen0, follow, favourite, reblog, mention, poll, status, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().g9h_1);
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
class Companion_5 {
  z26() {
    return $serializer_getInstance_4();
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Application', this, 2);
    tmp0_serialDesc.f18('name', false);
    tmp0_serialDesc.f18('website', true);
    this.s9h_1 = tmp0_serialDesc;
  }
  t9h(encoder, value) {
    var tmp0_desc = this.s9h_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.b12(tmp0_desc, 0, value.name);
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.website == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.website);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.t9h(encoder, value instanceof Application ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.s9h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return Application.v9h(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.s9h_1;
  }
  v18() {
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
  i5o(_set____db54di) {
    this.u9h_1 = _set____db54di;
  }
  i1() {
    var tmp = this.u9h_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  }
  k9c(_set____db54di) {
    this.website = _set____db54di;
  }
  l9c() {
    return this.website;
  }
  static v9h(seen0, name, website, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_4().s9h_1);
    }
    var $this = createThis(this);
    $this.u9h_1 = name;
    if (0 === (seen0 & 2))
      $this.website = null;
    else
      $this.website = website;
    return $this;
  }
  get name() {
    return this.i1();
  }
  set name(value) {
    this.i5o(value);
  }
}
class Companion_6 {
  z26() {
    return $serializer_getInstance_5();
  }
}
class $serializer_5 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Attachment', this, 9);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('type', true);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('remote_url', true);
    tmp0_serialDesc.f18('preview_url', true);
    tmp0_serialDesc.f18('text_url', true);
    tmp0_serialDesc.f18('optimized_url', true);
    tmp0_serialDesc.f18('meta', true);
    tmp0_serialDesc.f18('orientation', true);
    this.w9h_1 = tmp0_serialDesc;
  }
  x9h(encoder, value) {
    var tmp0_desc = this.w9h_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.remoteUrl == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.remoteUrl);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.previewUrl == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.previewUrl);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.textUrl == null)) {
      tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.textUrl);
    }
    if (tmp1_output.j12(tmp0_desc, 6) ? true : !(value.optimizedUrl == null)) {
      tmp1_output.f12(tmp0_desc, 6, StringSerializer_getInstance(), value.optimizedUrl);
    }
    if (tmp1_output.j12(tmp0_desc, 7) ? true : !(value.meta == null)) {
      tmp1_output.f12(tmp0_desc, 7, $serializer_getInstance_56(), value.meta);
    }
    if (tmp1_output.j12(tmp0_desc, 8) ? true : !(value.orientation == null)) {
      tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.orientation);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.x9h(encoder, value instanceof Attachment ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.w9h_1;
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
    var tmp13_input = decoder.l10(tmp0_desc);
    if (tmp13_input.b11()) {
      tmp4_local0 = tmp13_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.z10(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.z10(tmp0_desc, 7, $serializer_getInstance_56(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.z10(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.z10(tmp0_desc, 7, $serializer_getInstance_56(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp13_input.m10(tmp0_desc);
    return Attachment.y9h(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  xv() {
    return this.w9h_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_56()), get_nullable(StringSerializer_getInstance())];
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  w78(_set____db54di) {
    this.type = _set____db54di;
  }
  o6a() {
    return this.type;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  z9h(_set____db54di) {
    this.remoteUrl = _set____db54di;
  }
  a9i() {
    return this.remoteUrl;
  }
  b9i(_set____db54di) {
    this.previewUrl = _set____db54di;
  }
  c9i() {
    return this.previewUrl;
  }
  d9i(_set____db54di) {
    this.textUrl = _set____db54di;
  }
  e9i() {
    return this.textUrl;
  }
  f9i(_set____db54di) {
    this.optimizedUrl = _set____db54di;
  }
  g9i() {
    return this.optimizedUrl;
  }
  h9i(_set____db54di) {
    this.meta = _set____db54di;
  }
  i9i() {
    return this.meta;
  }
  j9i(_set____db54di) {
    this.orientation = _set____db54di;
  }
  u8r() {
    return this.orientation;
  }
  static y9h(seen0, id, type, url, remoteUrl, previewUrl, textUrl, optimizedUrl, meta, orientation, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().w9h_1);
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
class Companion_7 {
  z26() {
    return $serializer_getInstance_6();
  }
}
class $serializer_6 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Card', this, 4);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('title', true);
    tmp0_serialDesc.f18('description', true);
    tmp0_serialDesc.f18('image', true);
    this.k9i_1 = tmp0_serialDesc;
  }
  l9i(encoder, value) {
    var tmp0_desc = this.k9i_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.title == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.image == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.image);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.l9i(encoder, value instanceof Card ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.k9i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.l10(tmp0_desc);
    if (tmp8_input.b11()) {
      tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp8_input.m10(tmp0_desc);
    return Card.m9i(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.k9i_1;
  }
  v18() {
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
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
    return this.title;
  }
  v52(_set____db54di) {
    this.description = _set____db54di;
  }
  w52() {
    return this.description;
  }
  n9i(_set____db54di) {
    this.image = _set____db54di;
  }
  s6j() {
    return this.image;
  }
  static m9i(seen0, url, title, description, image, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().k9i_1);
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
class Companion_8 {
  z26() {
    return $serializer_getInstance_7();
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.ClientCredential', this, 4);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('redirect_uri', true);
    tmp0_serialDesc.f18('client_id', true);
    tmp0_serialDesc.f18('client_secret', true);
    this.o9i_1 = tmp0_serialDesc;
  }
  p9i(encoder, value) {
    var tmp0_desc = this.o9i_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.redirectUri == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.redirectUri);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.clientId == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.clientId);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.clientSecret == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.clientSecret);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.p9i(encoder, value instanceof ClientCredential ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.o9i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.l10(tmp0_desc);
    if (tmp8_input.b11()) {
      tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp8_input.m10(tmp0_desc);
    return ClientCredential.q9i(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.o9i_1;
  }
  v18() {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  a9d(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  b9d() {
    return this.redirectUri;
  }
  y9c(_set____db54di) {
    this.clientId = _set____db54di;
  }
  z9c() {
    return this.clientId;
  }
  c9d(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  d9d() {
    return this.clientSecret;
  }
  static q9i(seen0, id, redirectUri, clientId, clientSecret, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().o9i_1);
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
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r9i_1 = [new ReferenceArraySerializer(getKClass(Status), $serializer_getInstance_22()), new ReferenceArraySerializer(getKClass(Status), $serializer_getInstance_22())];
  }
  z26() {
    return $serializer_getInstance_8();
  }
}
class $serializer_8 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Context', this, 2);
    tmp0_serialDesc.f18('ancestors', true);
    tmp0_serialDesc.f18('descendants', true);
    this.s9i_1 = tmp0_serialDesc;
  }
  t9i(encoder, value) {
    var tmp0_desc = this.s9i_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().r9i_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.ancestors == null)) {
      tmp1_output.f12(tmp0_desc, 0, tmp2_cached[0], value.ancestors);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.descendants == null)) {
      tmp1_output.f12(tmp0_desc, 1, tmp2_cached[1], value.descendants);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.t9i(encoder, value instanceof Context ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.s9i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    var tmp7_cached = Companion_getInstance_10().r9i_1;
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return Context.u9i(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.s9i_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_10().r9i_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable(tmp0_cached[1])];
  }
}
class Context {
  constructor() {
    Companion_getInstance_10();
    this.ancestors = null;
    this.descendants = null;
  }
  v9i(_set____db54di) {
    this.ancestors = _set____db54di;
  }
  w9i() {
    return this.ancestors;
  }
  x9i(_set____db54di) {
    this.descendants = _set____db54di;
  }
  y9i() {
    return this.descendants;
  }
  static u9i(seen0, ancestors, descendants, serializationConstructorMarker) {
    Companion_getInstance_10();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().s9i_1);
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
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z9i_1 = [null, new ReferenceArraySerializer(getKClass(Account), $serializer_getInstance_0()), null, null];
  }
  z26() {
    return $serializer_getInstance_9();
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Conversation', this, 4);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('accounts', true);
    tmp0_serialDesc.f18('last_status', true);
    tmp0_serialDesc.f18('unread', true);
    this.a9j_1 = tmp0_serialDesc;
  }
  b9j(encoder, value) {
    var tmp0_desc = this.a9j_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().z9i_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.accounts == null)) {
      tmp1_output.f12(tmp0_desc, 1, tmp2_cached[1], value.accounts);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.lastStatus == null)) {
      tmp1_output.f12(tmp0_desc, 2, $serializer_getInstance_22(), value.lastStatus);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.unread == null)) {
      tmp1_output.f12(tmp0_desc, 3, BooleanSerializer_getInstance(), value.unread);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.b9j(encoder, value instanceof Conversation ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.a9j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.l10(tmp0_desc);
    var tmp9_cached = Companion_getInstance_11().z9i_1;
    if (tmp8_input.b11()) {
      tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, $serializer_getInstance_22(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, $serializer_getInstance_22(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp8_input.m10(tmp0_desc);
    return Conversation.c9j(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.a9j_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_11().z9i_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[1]), get_nullable($serializer_getInstance_22()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Conversation {
  constructor() {
    Companion_getInstance_11();
    this.id = null;
    this.accounts = null;
    this.lastStatus = null;
    this.unread = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  d9j(_set____db54di) {
    this.accounts = _set____db54di;
  }
  e9j() {
    return this.accounts;
  }
  f9j(_set____db54di) {
    this.lastStatus = _set____db54di;
  }
  g9j() {
    return this.lastStatus;
  }
  h9j(_set____db54di) {
    this.unread = _set____db54di;
  }
  i9j() {
    return this.unread;
  }
  static c9j(seen0, id, accounts, lastStatus, unread, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().a9j_1);
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
class Companion_11 {
  z26() {
    return $serializer_getInstance_10();
  }
}
class $serializer_10 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Emoji', this, 5);
    tmp0_serialDesc.f18('shortcode', true);
    tmp0_serialDesc.f18('static_url', true);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('visible_in_picker', true);
    tmp0_serialDesc.f18('category', true);
    this.j9j_1 = tmp0_serialDesc;
  }
  k9j(encoder, value) {
    var tmp0_desc = this.j9j_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.shortcode == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.shortcode);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.staticUrl == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.staticUrl);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.visibleInPicker == null)) {
      tmp1_output.f12(tmp0_desc, 3, BooleanSerializer_getInstance(), value.visibleInPicker);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.category == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.category);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.k9j(encoder, value instanceof Emoji ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.j9j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.l10(tmp0_desc);
    if (tmp9_input.b11()) {
      tmp4_local0 = tmp9_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.z10(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.z10(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp9_input.m10(tmp0_desc);
    return Emoji.l9j(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  xv() {
    return this.j9j_1;
  }
  v18() {
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
  m9j(_set____db54di) {
    this.shortcode = _set____db54di;
  }
  n9j() {
    return this.shortcode;
  }
  o9j(_set____db54di) {
    this.staticUrl = _set____db54di;
  }
  p9j() {
    return this.staticUrl;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  q9j(_set____db54di) {
    this.visibleInPicker = _set____db54di;
  }
  r9j() {
    return this.visibleInPicker;
  }
  l8q(_set____db54di) {
    this.category = _set____db54di;
  }
  m8q() {
    return this.category;
  }
  static l9j(seen0, shortcode, staticUrl, url, visibleInPicker, category, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().j9j_1);
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
class Companion_12 {
  z26() {
    return $serializer_getInstance_11();
  }
}
class $serializer_11 {
  constructor() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Error', this, 2);
    tmp0_serialDesc.f18('error', true);
    tmp0_serialDesc.f18('error_description', true);
    this.s9j_1 = tmp0_serialDesc;
  }
  t9j(encoder, value) {
    var tmp0_desc = this.s9j_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.error == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.error);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.description == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.description);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.t9j(encoder, value instanceof Error_0 ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.s9j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return Error_0.u9j(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.s9j_1;
  }
  v18() {
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
  v9j(_set____db54di) {
    this.error = _set____db54di;
  }
  c5o() {
    return this.error;
  }
  v52(_set____db54di) {
    this.description = _set____db54di;
  }
  w52() {
    return this.description;
  }
  static u9j(seen0, error, description, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().s9j_1);
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
class Companion_13 {
  z26() {
    return $serializer_getInstance_12();
  }
}
class $serializer_12 {
  constructor() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Field', this, 2);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('value', true);
    this.w9j_1 = tmp0_serialDesc;
  }
  x9j(encoder, value) {
    var tmp0_desc = this.w9j_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.value == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.value);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.x9j(encoder, value instanceof Field ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.w9j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return Field.y9j(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.w9j_1;
  }
  v18() {
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
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  v8q(_set____db54di) {
    this.value = _set____db54di;
  }
  b3() {
    return this.value;
  }
  static y9j(seen0, name, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().w9j_1);
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
class Companion_14 {
  z26() {
    return $serializer_getInstance_13();
  }
}
class $serializer_13 {
  constructor() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.History', this, 3);
    tmp0_serialDesc.f18('day', true);
    tmp0_serialDesc.f18('uses', true);
    tmp0_serialDesc.f18('accounts', true);
    this.z9j_1 = tmp0_serialDesc;
  }
  a9k(encoder, value) {
    var tmp0_desc = this.z9j_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.day == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.day);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.uses == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.uses);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.accounts == null)) {
      tmp1_output.f12(tmp0_desc, 2, IntSerializer_getInstance(), value.accounts);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.a9k(encoder, value instanceof History ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.z9j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return History.b9k(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.z9j_1;
  }
  v18() {
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
  c9k(_set____db54di) {
    this.day = _set____db54di;
  }
  r1m() {
    return this.day;
  }
  d9k(_set____db54di) {
    this.uses = _set____db54di;
  }
  e9k() {
    return this.uses;
  }
  f9k(_set____db54di) {
    this.accounts = _set____db54di;
  }
  e9j() {
    return this.accounts;
  }
  static b9k(seen0, day, uses, accounts, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().z9j_1);
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
class Companion_15 {
  z26() {
    return $serializer_getInstance_14();
  }
}
class $serializer_14 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Mention', this, 4);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('username', true);
    tmp0_serialDesc.f18('acct', true);
    this.g9k_1 = tmp0_serialDesc;
  }
  h9k(encoder, value) {
    var tmp0_desc = this.g9k_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.userName == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.userName);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.account == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.account);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.h9k(encoder, value instanceof Mention ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.g9k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.l10(tmp0_desc);
    if (tmp8_input.b11()) {
      tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp8_input.m10(tmp0_desc);
    return Mention.i9k(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.g9k_1;
  }
  v18() {
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
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  j9k(_set____db54di) {
    this.userName = _set____db54di;
  }
  q9f() {
    return this.userName;
  }
  k9k(_set____db54di) {
    this.account = _set____db54di;
  }
  s9f() {
    return this.account;
  }
  static i9k(seen0, url, id, userName, account, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().g9k_1);
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
class Companion_16 {
  z26() {
    return $serializer_getInstance_15();
  }
}
class $serializer_15 {
  constructor() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Notification', this, 5);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('type', true);
    tmp0_serialDesc.f18('created_at', true);
    tmp0_serialDesc.f18('account', true);
    tmp0_serialDesc.f18('status', true);
    this.l9k_1 = tmp0_serialDesc;
  }
  m9k(encoder, value) {
    var tmp0_desc = this.l9k_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.createdAt == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.createdAt);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.account == null)) {
      tmp1_output.f12(tmp0_desc, 3, $serializer_getInstance_0(), value.account);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.status == null)) {
      tmp1_output.f12(tmp0_desc, 4, $serializer_getInstance_22(), value.status);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.m9k(encoder, value instanceof Notification ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.l9k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.l10(tmp0_desc);
    if (tmp9_input.b11()) {
      tmp4_local0 = tmp9_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.z10(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.z10(tmp0_desc, 4, $serializer_getInstance_22(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.z10(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.z10(tmp0_desc, 4, $serializer_getInstance_22(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp9_input.m10(tmp0_desc);
    return Notification.n9k(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  xv() {
    return this.l9k_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance_22())];
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  w78(_set____db54di) {
    this.type = _set____db54di;
  }
  o6a() {
    return this.type;
  }
  l53(_set____db54di) {
    this.createdAt = _set____db54di;
  }
  m53() {
    return this.createdAt;
  }
  o9k(_set____db54di) {
    this.account = _set____db54di;
  }
  s9f() {
    return this.account;
  }
  p9k(_set____db54di) {
    this.status = _set____db54di;
  }
  k48() {
    return this.status;
  }
  static n9k(seen0, id, type, createdAt, account, status, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().l9k_1);
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
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q9k_1 = [null, null, null, null, null, new ReferenceArraySerializer(PrimitiveClasses_getInstance().ig(), IntSerializer_getInstance()), null, null, new ReferenceArraySerializer(getKClass(PollOption), $serializer_getInstance_17()), new ReferenceArraySerializer(getKClass(Emoji), $serializer_getInstance_10())];
  }
  z26() {
    return $serializer_getInstance_16();
  }
}
class $serializer_16 {
  constructor() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Poll', this, 10);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('expires_at', true);
    tmp0_serialDesc.f18('expired', true);
    tmp0_serialDesc.f18('multiple', true);
    tmp0_serialDesc.f18('voted', true);
    tmp0_serialDesc.f18('own_votes', true);
    tmp0_serialDesc.f18('votes_count', true);
    tmp0_serialDesc.f18('voters_count', true);
    tmp0_serialDesc.f18('options', true);
    tmp0_serialDesc.f18('emojis', true);
    this.r9k_1 = tmp0_serialDesc;
  }
  s9k(encoder, value) {
    var tmp0_desc = this.r9k_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().q9k_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.expiresAt == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.expiresAt);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.isExpired === false)) {
      tmp1_output.t11(tmp0_desc, 2, value.isExpired);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.isMultiple === false)) {
      tmp1_output.t11(tmp0_desc, 3, value.isMultiple);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.isVoted === false)) {
      tmp1_output.t11(tmp0_desc, 4, value.isVoted);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.ownVotes == null)) {
      tmp1_output.f12(tmp0_desc, 5, tmp2_cached[5], value.ownVotes);
    }
    if (tmp1_output.j12(tmp0_desc, 6) ? true : !(value.votesCount == null)) {
      tmp1_output.f12(tmp0_desc, 6, IntSerializer_getInstance(), value.votesCount);
    }
    if (tmp1_output.j12(tmp0_desc, 7) ? true : !(value.votersCount == null)) {
      tmp1_output.f12(tmp0_desc, 7, IntSerializer_getInstance(), value.votersCount);
    }
    if (tmp1_output.j12(tmp0_desc, 8) ? true : !(value.options == null)) {
      tmp1_output.f12(tmp0_desc, 8, tmp2_cached[8], value.options);
    }
    if (tmp1_output.j12(tmp0_desc, 9) ? true : !(value.emojis == null)) {
      tmp1_output.f12(tmp0_desc, 9, tmp2_cached[9], value.emojis);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.s9k(encoder, value instanceof Poll ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.r9k_1;
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
    var tmp14_input = decoder.l10(tmp0_desc);
    var tmp15_cached = Companion_getInstance_18().q9k_1;
    if (tmp14_input.b11()) {
      tmp4_local0 = tmp14_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.n10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.n10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.n10(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.z10(tmp0_desc, 5, tmp15_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.z10(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.z10(tmp0_desc, 8, tmp15_cached[8], tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.z10(tmp0_desc, 9, tmp15_cached[9], tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.n10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.n10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.n10(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.z10(tmp0_desc, 5, tmp15_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.z10(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.z10(tmp0_desc, 8, tmp15_cached[8], tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.z10(tmp0_desc, 9, tmp15_cached[9], tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp14_input.m10(tmp0_desc);
    return Poll.t9k(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  xv() {
    return this.r9k_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_18().q9k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(tmp0_cached[5]), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[8]), get_nullable(tmp0_cached[9])];
  }
}
class Poll {
  constructor() {
    Companion_getInstance_18();
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  a91(_set____db54di) {
    this.expiresAt = _set____db54di;
  }
  v7n() {
    return this.expiresAt;
  }
  u9k(_set____db54di) {
    this.isExpired = _set____db54di;
  }
  v9k() {
    return this.isExpired;
  }
  w9k(_set____db54di) {
    this.isMultiple = _set____db54di;
  }
  x9k() {
    return this.isMultiple;
  }
  y9k(_set____db54di) {
    this.isVoted = _set____db54di;
  }
  z9k() {
    return this.isVoted;
  }
  a9l(_set____db54di) {
    this.ownVotes = _set____db54di;
  }
  b9l() {
    return this.ownVotes;
  }
  c9l(_set____db54di) {
    this.votesCount = _set____db54di;
  }
  d9l() {
    return this.votesCount;
  }
  e9l(_set____db54di) {
    this.votersCount = _set____db54di;
  }
  f9l() {
    return this.votersCount;
  }
  g9l(_set____db54di) {
    this.options = _set____db54di;
  }
  h9l() {
    return this.options;
  }
  i9l(_set____db54di) {
    this.emojis = _set____db54di;
  }
  s8j() {
    return this.emojis;
  }
  static t9k(seen0, id, expiresAt, isExpired, isMultiple, isVoted, ownVotes, votesCount, votersCount, options, emojis, serializationConstructorMarker) {
    Companion_getInstance_18();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().r9k_1);
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
class Companion_18 {
  z26() {
    return $serializer_getInstance_17();
  }
}
class $serializer_17 {
  constructor() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.PollOption', this, 2);
    tmp0_serialDesc.f18('title', true);
    tmp0_serialDesc.f18('votes_count', true);
    this.j9l_1 = tmp0_serialDesc;
  }
  k9l(encoder, value) {
    var tmp0_desc = this.j9l_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.votesCount == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.votesCount);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.k9l(encoder, value instanceof PollOption ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.j9l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return PollOption.l9l(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.j9l_1;
  }
  v18() {
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
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
    return this.title;
  }
  c9l(_set____db54di) {
    this.votesCount = _set____db54di;
  }
  d9l() {
    return this.votesCount;
  }
  static l9l(seen0, title, votesCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().j9l_1);
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
class Companion_19 {
  z26() {
    return $serializer_getInstance_18();
  }
}
class $serializer_18 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Relationship', this, 6);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('following', true);
    tmp0_serialDesc.f18('followedBy', true);
    tmp0_serialDesc.f18('blocking', true);
    tmp0_serialDesc.f18('muting', true);
    tmp0_serialDesc.f18('requested', true);
    this.m9l_1 = tmp0_serialDesc;
  }
  n9l(encoder, value) {
    var tmp0_desc = this.m9l_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.isFollowing === false)) {
      tmp1_output.t11(tmp0_desc, 1, value.isFollowing);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.isFollowedBy === false)) {
      tmp1_output.t11(tmp0_desc, 2, value.isFollowedBy);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.isBlocking === false)) {
      tmp1_output.t11(tmp0_desc, 3, value.isBlocking);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.isMuting === false)) {
      tmp1_output.t11(tmp0_desc, 4, value.isMuting);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.isRequested === false)) {
      tmp1_output.t11(tmp0_desc, 5, value.isRequested);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.n9l(encoder, value instanceof Relationship ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.m9l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.l10(tmp0_desc);
    if (tmp10_input.b11()) {
      tmp4_local0 = tmp10_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.n10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.n10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.n10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.n10(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.n10(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.n10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.n10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.n10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.n10(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.n10(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp10_input.m10(tmp0_desc);
    return Relationship.o9l(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  xv() {
    return this.m9l_1;
  }
  v18() {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  u8o(_set____db54di) {
    this.isFollowing = _set____db54di;
  }
  v8o() {
    return this.isFollowing;
  }
  p9l(_set____db54di) {
    this.isFollowedBy = _set____db54di;
  }
  q9l() {
    return this.isFollowedBy;
  }
  l91(_set____db54di) {
    this.isBlocking = _set____db54di;
  }
  m91() {
    return this.isBlocking;
  }
  r9l(_set____db54di) {
    this.isMuting = _set____db54di;
  }
  s9l() {
    return this.isMuting;
  }
  t9l(_set____db54di) {
    this.isRequested = _set____db54di;
  }
  u9l() {
    return this.isRequested;
  }
  static o9l(seen0, id, isFollowing, isFollowedBy, isBlocking, isMuting, isRequested, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_18().m9l_1);
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
class Companion_20 {
  z26() {
    return $serializer_getInstance_19();
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Report', this, 2);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('actionTaken', true);
    this.v9l_1 = tmp0_serialDesc;
  }
  w9l(encoder, value) {
    var tmp0_desc = this.v9l_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.actionTaken == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.actionTaken);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.w9l(encoder, value instanceof Report ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.v9l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return Report.x9l(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.v9l_1;
  }
  v18() {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  y9l(_set____db54di) {
    this.actionTaken = _set____db54di;
  }
  z9l() {
    return this.actionTaken;
  }
  static x9l(seen0, id, actionTaken, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_19().v9l_1);
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
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a9m_1 = [new ReferenceArraySerializer(getKClass(Account), $serializer_getInstance_0()), new ReferenceArraySerializer(getKClass(Status), $serializer_getInstance_22()), new ReferenceArraySerializer(getKClass(Tag), $serializer_getInstance_24())];
  }
  z26() {
    return $serializer_getInstance_20();
  }
}
class $serializer_20 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Results', this, 3);
    tmp0_serialDesc.f18('accounts', true);
    tmp0_serialDesc.f18('statuses', true);
    tmp0_serialDesc.f18('hashtags', true);
    this.b9m_1 = tmp0_serialDesc;
  }
  c9m(encoder, value) {
    var tmp0_desc = this.b9m_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().a9m_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.accounts == null)) {
      tmp1_output.f12(tmp0_desc, 0, tmp2_cached[0], value.accounts);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.statuses == null)) {
      tmp1_output.f12(tmp0_desc, 1, tmp2_cached[1], value.statuses);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.hashtags == null)) {
      tmp1_output.f12(tmp0_desc, 2, tmp2_cached[2], value.hashtags);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.c9m(encoder, value instanceof Results ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.b9m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    var tmp8_cached = Companion_getInstance_22().a9m_1;
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return Results.d9m(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.b9m_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_22().a9m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable(tmp0_cached[1]), get_nullable(tmp0_cached[2])];
  }
}
class Results {
  constructor() {
    Companion_getInstance_22();
    this.accounts = null;
    this.statuses = null;
    this.hashtags = null;
  }
  d9j(_set____db54di) {
    this.accounts = _set____db54di;
  }
  e9j() {
    return this.accounts;
  }
  e9m(_set____db54di) {
    this.statuses = _set____db54di;
  }
  f9m() {
    return this.statuses;
  }
  g9m(_set____db54di) {
    this.hashtags = _set____db54di;
  }
  h9m() {
    return this.hashtags;
  }
  static d9m(seen0, accounts, statuses, hashtags, serializationConstructorMarker) {
    Companion_getInstance_22();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_20().b9m_1);
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
class Companion_22 {
  z26() {
    return $serializer_getInstance_21();
  }
}
class $serializer_21 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Role', this, 5);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('name', false);
    tmp0_serialDesc.f18('color', false);
    tmp0_serialDesc.f18('permissions', true);
    tmp0_serialDesc.f18('highlighted', true);
    this.i9m_1 = tmp0_serialDesc;
  }
  j9m(encoder, value) {
    var tmp0_desc = this.i9m_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id === -1)) {
      tmp1_output.w11(tmp0_desc, 0, value.id);
    }
    tmp1_output.b12(tmp0_desc, 1, value.name);
    tmp1_output.b12(tmp0_desc, 2, value.color);
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.permissions === -1)) {
      tmp1_output.w11(tmp0_desc, 3, value.permissions);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.isHighlighted === false)) {
      tmp1_output.t11(tmp0_desc, 4, value.isHighlighted);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.j9m(encoder, value instanceof Role ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.i9m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_local4 = false;
    var tmp9_input = decoder.l10(tmp0_desc);
    if (tmp9_input.b11()) {
      tmp4_local0 = tmp9_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.v10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.v10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.q10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.n10(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.q10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.v10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.v10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.q10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.n10(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp9_input.m10(tmp0_desc);
    return Role.m9m(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  xv() {
    return this.i9m_1;
  }
  v18() {
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
  n9m(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  i5o(_set____db54di) {
    this.k9m_1 = _set____db54di;
  }
  i1() {
    var tmp = this.k9m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  }
  m8o(_set____db54di) {
    this.l9m_1 = _set____db54di;
  }
  n8o() {
    var tmp = this.l9m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('color');
    }
  }
  o9m(_set____db54di) {
    this.permissions = _set____db54di;
  }
  p9m() {
    return this.permissions;
  }
  q9m(_set____db54di) {
    this.isHighlighted = _set____db54di;
  }
  r9m() {
    return this.isHighlighted;
  }
  static m9m(seen0, id, name, color, permissions, isHighlighted, serializationConstructorMarker) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_21().i9m_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = -1;
    else
      $this.id = id;
    $this.k9m_1 = name;
    $this.l9m_1 = color;
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
    return this.i1();
  }
  set name(value) {
    this.i5o(value);
  }
  get color() {
    return this.n8o();
  }
  set color(value) {
    this.m8o(value);
  }
}
class Companion_23 {
  constructor() {
    Companion_instance_23 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s9m_1 = [null, null, null, null, null, null, null, null, new ReferenceArraySerializer(getKClass(Attachment), $serializer_getInstance_5()), null, new ReferenceArraySerializer(getKClass(Mention), $serializer_getInstance_14()), new ReferenceArraySerializer(getKClass(Tag), $serializer_getInstance_24()), new ReferenceArraySerializer(getKClass(Emoji), $serializer_getInstance_10()), null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, new ReferenceArraySerializer(getKClass(Filter), $serializer_getInstance_27()), null];
  }
  z26() {
    return $serializer_getInstance_22();
  }
}
class $serializer_22 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Status', this, 32);
    tmp0_serialDesc.f18('id', false);
    tmp0_serialDesc.f18('uri', false);
    tmp0_serialDesc.f18('created_at', false);
    tmp0_serialDesc.f18('account', false);
    tmp0_serialDesc.f18('content', false);
    tmp0_serialDesc.f18('visibility', false);
    tmp0_serialDesc.f18('sensitive', true);
    tmp0_serialDesc.f18('spoiler_text', false);
    tmp0_serialDesc.f18('media_attachments', true);
    tmp0_serialDesc.f18('application', true);
    tmp0_serialDesc.f18('mentions', true);
    tmp0_serialDesc.f18('tags', true);
    tmp0_serialDesc.f18('emojis', true);
    tmp0_serialDesc.f18('reblogs_count', true);
    tmp0_serialDesc.f18('favourites_count', true);
    tmp0_serialDesc.f18('replies_count', true);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('in_reply_to_id', true);
    tmp0_serialDesc.f18('in_reply_to_account_id', true);
    tmp0_serialDesc.f18('reblog', true);
    tmp0_serialDesc.f18('poll', true);
    tmp0_serialDesc.f18('card', true);
    tmp0_serialDesc.f18('language', true);
    tmp0_serialDesc.f18('text', true);
    tmp0_serialDesc.f18('edited_at', true);
    tmp0_serialDesc.f18('reblogged', true);
    tmp0_serialDesc.f18('favourited', true);
    tmp0_serialDesc.f18('muted', true);
    tmp0_serialDesc.f18('bookmarked', true);
    tmp0_serialDesc.f18('pinned', true);
    tmp0_serialDesc.f18('filtered', true);
    tmp0_serialDesc.f18('pleroma', true);
    this.t9m_1 = tmp0_serialDesc;
  }
  u9m(encoder, value) {
    var tmp0_desc = this.t9m_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().s9m_1;
    tmp1_output.b12(tmp0_desc, 0, value.id);
    tmp1_output.b12(tmp0_desc, 1, value.uri);
    tmp1_output.b12(tmp0_desc, 2, value.createdAt);
    tmp1_output.d12(tmp0_desc, 3, $serializer_getInstance_0(), value.account);
    tmp1_output.b12(tmp0_desc, 4, value.content);
    tmp1_output.b12(tmp0_desc, 5, value.visibility);
    if (tmp1_output.j12(tmp0_desc, 6) ? true : !(value.isSensitive === false)) {
      tmp1_output.t11(tmp0_desc, 6, value.isSensitive);
    }
    tmp1_output.b12(tmp0_desc, 7, value.spoilerText);
    var tmp;
    if (tmp1_output.j12(tmp0_desc, 8)) {
      tmp = true;
    } else {
      var tmp_0 = value.mediaAttachments;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [];
      tmp = !equals_0(tmp_0, tmp$ret$2);
    }
    if (tmp) {
      tmp1_output.d12(tmp0_desc, 8, tmp2_cached[8], value.mediaAttachments);
    }
    if (tmp1_output.j12(tmp0_desc, 9) ? true : !(value.application == null)) {
      tmp1_output.f12(tmp0_desc, 9, $serializer_getInstance_4(), value.application);
    }
    var tmp_1;
    if (tmp1_output.j12(tmp0_desc, 10)) {
      tmp_1 = true;
    } else {
      var tmp_2 = value.mentions;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = [];
      tmp_1 = !equals_0(tmp_2, tmp$ret$5);
    }
    if (tmp_1) {
      tmp1_output.d12(tmp0_desc, 10, tmp2_cached[10], value.mentions);
    }
    var tmp_3;
    if (tmp1_output.j12(tmp0_desc, 11)) {
      tmp_3 = true;
    } else {
      var tmp_4 = value.tags;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$8 = [];
      tmp_3 = !equals_0(tmp_4, tmp$ret$8);
    }
    if (tmp_3) {
      tmp1_output.d12(tmp0_desc, 11, tmp2_cached[11], value.tags);
    }
    var tmp_5;
    if (tmp1_output.j12(tmp0_desc, 12)) {
      tmp_5 = true;
    } else {
      var tmp_6 = value.emojis;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$11 = [];
      tmp_5 = !equals_0(tmp_6, tmp$ret$11);
    }
    if (tmp_5) {
      tmp1_output.d12(tmp0_desc, 12, tmp2_cached[12], value.emojis);
    }
    if (tmp1_output.j12(tmp0_desc, 13) ? true : !(value.reblogsCount === 0)) {
      tmp1_output.w11(tmp0_desc, 13, value.reblogsCount);
    }
    if (tmp1_output.j12(tmp0_desc, 14) ? true : !(value.favouritesCount === 0)) {
      tmp1_output.w11(tmp0_desc, 14, value.favouritesCount);
    }
    if (tmp1_output.j12(tmp0_desc, 15) ? true : !(value.repliesCount === 0)) {
      tmp1_output.w11(tmp0_desc, 15, value.repliesCount);
    }
    if (tmp1_output.j12(tmp0_desc, 16) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 16, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 17) ? true : !(value.inReplyToId == null)) {
      tmp1_output.f12(tmp0_desc, 17, StringSerializer_getInstance(), value.inReplyToId);
    }
    if (tmp1_output.j12(tmp0_desc, 18) ? true : !(value.inReplyToAccountId == null)) {
      tmp1_output.f12(tmp0_desc, 18, StringSerializer_getInstance(), value.inReplyToAccountId);
    }
    if (tmp1_output.j12(tmp0_desc, 19) ? true : !(value.reblog == null)) {
      tmp1_output.f12(tmp0_desc, 19, $serializer_getInstance_22(), value.reblog);
    }
    if (tmp1_output.j12(tmp0_desc, 20) ? true : !(value.poll == null)) {
      tmp1_output.f12(tmp0_desc, 20, $serializer_getInstance_16(), value.poll);
    }
    if (tmp1_output.j12(tmp0_desc, 21) ? true : !(value.card == null)) {
      tmp1_output.f12(tmp0_desc, 21, $serializer_getInstance_6(), value.card);
    }
    if (tmp1_output.j12(tmp0_desc, 22) ? true : !(value.language == null)) {
      tmp1_output.f12(tmp0_desc, 22, StringSerializer_getInstance(), value.language);
    }
    if (tmp1_output.j12(tmp0_desc, 23) ? true : !(value.text == null)) {
      tmp1_output.f12(tmp0_desc, 23, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.j12(tmp0_desc, 24) ? true : !(value.editedAt == null)) {
      tmp1_output.f12(tmp0_desc, 24, StringSerializer_getInstance(), value.editedAt);
    }
    if (tmp1_output.j12(tmp0_desc, 25) ? true : !(value.isReblogged === false)) {
      tmp1_output.t11(tmp0_desc, 25, value.isReblogged);
    }
    if (tmp1_output.j12(tmp0_desc, 26) ? true : !(value.isFavourited === false)) {
      tmp1_output.t11(tmp0_desc, 26, value.isFavourited);
    }
    if (tmp1_output.j12(tmp0_desc, 27) ? true : !(value.isMuted === false)) {
      tmp1_output.t11(tmp0_desc, 27, value.isMuted);
    }
    if (tmp1_output.j12(tmp0_desc, 28) ? true : !(value.isBookmarked === false)) {
      tmp1_output.t11(tmp0_desc, 28, value.isBookmarked);
    }
    if (tmp1_output.j12(tmp0_desc, 29) ? true : !(value.isPinned === false)) {
      tmp1_output.t11(tmp0_desc, 29, value.isPinned);
    }
    var tmp_7;
    if (tmp1_output.j12(tmp0_desc, 30)) {
      tmp_7 = true;
    } else {
      var tmp_8 = value.filtered;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$14 = [];
      tmp_7 = !equals_0(tmp_8, tmp$ret$14);
    }
    if (tmp_7) {
      tmp1_output.d12(tmp0_desc, 30, tmp2_cached[30], value.filtered);
    }
    if (tmp1_output.j12(tmp0_desc, 31) ? true : !(value.pleroma == null)) {
      tmp1_output.f12(tmp0_desc, 31, $serializer_getInstance_66(), value.pleroma);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.u9m(encoder, value instanceof Status ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.t9m_1;
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
    var tmp37_input = decoder.l10(tmp0_desc);
    var tmp38_cached = Companion_getInstance_24().s9m_1;
    if (tmp37_input.b11()) {
      tmp5_local0 = tmp37_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp37_input.v10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp37_input.v10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp37_input.x10(tmp0_desc, 3, $serializer_getInstance_0(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp37_input.v10(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp37_input.v10(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp37_input.n10(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp37_input.v10(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp37_input.x10(tmp0_desc, 8, tmp38_cached[8], tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp37_input.z10(tmp0_desc, 9, $serializer_getInstance_4(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp37_input.x10(tmp0_desc, 10, tmp38_cached[10], tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp37_input.x10(tmp0_desc, 11, tmp38_cached[11], tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp37_input.x10(tmp0_desc, 12, tmp38_cached[12], tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp37_input.q10(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp37_input.q10(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp37_input.q10(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp37_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp37_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp37_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp37_input.z10(tmp0_desc, 19, $serializer_getInstance_22(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp37_input.z10(tmp0_desc, 20, $serializer_getInstance_16(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp37_input.z10(tmp0_desc, 21, $serializer_getInstance_6(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp37_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp37_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp37_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp37_input.n10(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp37_input.n10(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp37_input.n10(tmp0_desc, 27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp37_input.n10(tmp0_desc, 28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp37_input.n10(tmp0_desc, 29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp37_input.x10(tmp0_desc, 30, tmp38_cached[30], tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp37_input.z10(tmp0_desc, 31, $serializer_getInstance_66(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp37_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp37_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp37_input.v10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp37_input.v10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp37_input.x10(tmp0_desc, 3, $serializer_getInstance_0(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp37_input.v10(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp37_input.v10(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp37_input.n10(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp37_input.v10(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp37_input.x10(tmp0_desc, 8, tmp38_cached[8], tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp37_input.z10(tmp0_desc, 9, $serializer_getInstance_4(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp37_input.x10(tmp0_desc, 10, tmp38_cached[10], tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp37_input.x10(tmp0_desc, 11, tmp38_cached[11], tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp37_input.x10(tmp0_desc, 12, tmp38_cached[12], tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp37_input.q10(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp37_input.q10(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp37_input.q10(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp37_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp37_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp37_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp37_input.z10(tmp0_desc, 19, $serializer_getInstance_22(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp37_input.z10(tmp0_desc, 20, $serializer_getInstance_16(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp37_input.z10(tmp0_desc, 21, $serializer_getInstance_6(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp37_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp37_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp37_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp37_input.n10(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp37_input.n10(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp37_input.n10(tmp0_desc, 27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp37_input.n10(tmp0_desc, 28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp37_input.n10(tmp0_desc, 29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp37_input.x10(tmp0_desc, 30, tmp38_cached[30], tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp37_input.z10(tmp0_desc, 31, $serializer_getInstance_66(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp37_input.m10(tmp0_desc);
    return Status.c9n(tmp3_bitMask0, 0, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, null);
  }
  xv() {
    return this.t9m_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_24().s9m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_0(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[8], get_nullable($serializer_getInstance_4()), tmp0_cached[10], tmp0_cached[11], tmp0_cached[12], IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_22()), get_nullable($serializer_getInstance_16()), get_nullable($serializer_getInstance_6()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[30], get_nullable($serializer_getInstance_66())];
  }
}
class Status {
  constructor() {
    Companion_getInstance_24();
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
  b72(_set____db54di) {
    this.v9m_1 = _set____db54di;
  }
  f22() {
    var tmp = this.v9m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  y55(_set____db54di) {
    this.w9m_1 = _set____db54di;
  }
  z55() {
    var tmp = this.w9m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('uri');
    }
  }
  m6s(_set____db54di) {
    this.x9m_1 = _set____db54di;
  }
  m53() {
    var tmp = this.x9m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('createdAt');
    }
  }
  d9n(_set____db54di) {
    this.y9m_1 = _set____db54di;
  }
  s9f() {
    var tmp = this.y9m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('account');
    }
  }
  e9n(_set____db54di) {
    this.z9m_1 = _set____db54di;
  }
  o26() {
    var tmp = this.z9m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('content');
    }
  }
  h6b(_set____db54di) {
    this.a9n_1 = _set____db54di;
  }
  i6b() {
    var tmp = this.a9n_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('visibility');
    }
  }
  w7w(_set____db54di) {
    this.isSensitive = _set____db54di;
  }
  x7w() {
    return this.isSensitive;
  }
  f9n(_set____db54di) {
    this.b9n_1 = _set____db54di;
  }
  y9d() {
    var tmp = this.b9n_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('spoilerText');
    }
  }
  g9n(_set____db54di) {
    this.mediaAttachments = _set____db54di;
  }
  h9n() {
    return this.mediaAttachments;
  }
  i9n(_set____db54di) {
    this.application = _set____db54di;
  }
  j9n() {
    return this.application;
  }
  k9n(_set____db54di) {
    this.mentions = _set____db54di;
  }
  q8x() {
    return this.mentions;
  }
  l9n(_set____db54di) {
    this.tags = _set____db54di;
  }
  s8s() {
    return this.tags;
  }
  c9g(_set____db54di) {
    this.emojis = _set____db54di;
  }
  s8j() {
    return this.emojis;
  }
  m9n(_set____db54di) {
    this.reblogsCount = _set____db54di;
  }
  n9n() {
    return this.reblogsCount;
  }
  o9n(_set____db54di) {
    this.favouritesCount = _set____db54di;
  }
  p9n() {
    return this.favouritesCount;
  }
  d8y(_set____db54di) {
    this.repliesCount = _set____db54di;
  }
  e8y() {
    return this.repliesCount;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  v9d(_set____db54di) {
    this.inReplyToId = _set____db54di;
  }
  w9d() {
    return this.inReplyToId;
  }
  q9n(_set____db54di) {
    this.inReplyToAccountId = _set____db54di;
  }
  r9n() {
    return this.inReplyToAccountId;
  }
  s9n(_set____db54di) {
    this.reblog = _set____db54di;
  }
  o9h() {
    return this.reblog;
  }
  t9n(_set____db54di) {
    this.poll = _set____db54di;
  }
  t86() {
    return this.poll;
  }
  u9n(_set____db54di) {
    this.card = _set____db54di;
  }
  v9n() {
    return this.card;
  }
  d9h(_set____db54di) {
    this.language = _set____db54di;
  }
  e9h() {
    return this.language;
  }
  x6s(_set____db54di) {
    this.text = _set____db54di;
  }
  z5c() {
    return this.text;
  }
  w9n(_set____db54di) {
    this.editedAt = _set____db54di;
  }
  x9n() {
    return this.editedAt;
  }
  y9n(_set____db54di) {
    this.isReblogged = _set____db54di;
  }
  z9n() {
    return this.isReblogged;
  }
  a9o(_set____db54di) {
    this.isFavourited = _set____db54di;
  }
  b9o() {
    return this.isFavourited;
  }
  p91(_set____db54di) {
    this.isMuted = _set____db54di;
  }
  q91() {
    return this.isMuted;
  }
  c9o(_set____db54di) {
    this.isBookmarked = _set____db54di;
  }
  d9o() {
    return this.isBookmarked;
  }
  e9o(_set____db54di) {
    this.isPinned = _set____db54di;
  }
  f9o() {
    return this.isPinned;
  }
  g9o(_set____db54di) {
    this.filtered = _set____db54di;
  }
  h9o() {
    return this.filtered;
  }
  i9o(_set____db54di) {
    this.pleroma = _set____db54di;
  }
  t9g() {
    return this.pleroma;
  }
  static c9n(seen0, seen1, id, uri, createdAt, account, content, visibility, isSensitive, spoilerText, mediaAttachments, application, mentions, tags, emojis, reblogsCount, favouritesCount, repliesCount, url, inReplyToId, inReplyToAccountId, reblog, poll, card, language, text, editedAt, isReblogged, isFavourited, isMuted, isBookmarked, isPinned, filtered, pleroma, serializationConstructorMarker) {
    Companion_getInstance_24();
    if (!!(!(191 === (191 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([191, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_22().t9m_1);
    }
    var $this = createThis(this);
    $this.v9m_1 = id;
    $this.w9m_1 = uri;
    $this.x9m_1 = createdAt;
    $this.y9m_1 = account;
    $this.z9m_1 = content;
    $this.a9n_1 = visibility;
    if (0 === (seen0 & 64))
      $this.isSensitive = false;
    else
      $this.isSensitive = isSensitive;
    $this.b9n_1 = spoilerText;
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
    return this.f22();
  }
  set id(value) {
    this.b72(value);
  }
  get uri() {
    return this.z55();
  }
  set uri(value) {
    this.y55(value);
  }
  get createdAt() {
    return this.m53();
  }
  set createdAt(value) {
    this.m6s(value);
  }
  get account() {
    return this.s9f();
  }
  set account(value) {
    this.d9n(value);
  }
  get content() {
    return this.o26();
  }
  set content(value) {
    this.e9n(value);
  }
  get visibility() {
    return this.i6b();
  }
  set visibility(value) {
    this.h6b(value);
  }
  get spoilerText() {
    return this.y9d();
  }
  set spoilerText(value) {
    this.f9n(value);
  }
}
class Companion_24 {
  z26() {
    return $serializer_getInstance_23();
  }
}
class $serializer_23 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Subscription', this, 4);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('endpoint', true);
    tmp0_serialDesc.f18('alerts', true);
    tmp0_serialDesc.f18('server_key', true);
    this.j9o_1 = tmp0_serialDesc;
  }
  k9o(encoder, value) {
    var tmp0_desc = this.j9o_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, IntSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.endpoint == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.endpoint);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.alerts == null)) {
      tmp1_output.f12(tmp0_desc, 2, $serializer_getInstance_3(), value.alerts);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.serverKey == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.serverKey);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.k9o(encoder, value instanceof Subscription ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.j9o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.l10(tmp0_desc);
    if (tmp8_input.b11()) {
      tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp8_input.m10(tmp0_desc);
    return Subscription.l9o(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.j9o_1;
  }
  v18() {
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
  m9o(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  z79(_set____db54di) {
    this.endpoint = _set____db54di;
  }
  a7a() {
    return this.endpoint;
  }
  n9o(_set____db54di) {
    this.alerts = _set____db54di;
  }
  o9o() {
    return this.alerts;
  }
  p9o(_set____db54di) {
    this.serverKey = _set____db54di;
  }
  q9o() {
    return this.serverKey;
  }
  static l9o(seen0, id, endpoint, alerts, serverKey, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_23().j9o_1);
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
class Companion_25 {
  constructor() {
    Companion_instance_25 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r9o_1 = [null, null, new ReferenceArraySerializer(getKClass(History), $serializer_getInstance_13())];
  }
  z26() {
    return $serializer_getInstance_24();
  }
}
class $serializer_24 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Tag', this, 3);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('history', true);
    this.s9o_1 = tmp0_serialDesc;
  }
  t9o(encoder, value) {
    var tmp0_desc = this.s9o_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().r9o_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.history == null)) {
      tmp1_output.f12(tmp0_desc, 2, tmp2_cached[2], value.history);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.t9o(encoder, value instanceof Tag ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.s9o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    var tmp8_cached = Companion_getInstance_26().r9o_1;
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return Tag.u9o(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.s9o_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_26().r9o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2])];
  }
}
class Tag {
  constructor() {
    Companion_getInstance_26();
    this.name = null;
    this.url = null;
    this.history = null;
  }
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  v9o(_set____db54di) {
    this.history = _set____db54di;
  }
  w9o() {
    return this.history;
  }
  static u9o(seen0, name, url, history, serializationConstructorMarker) {
    Companion_getInstance_26();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().s9o_1);
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
class Companion_26 {
  constructor() {
    Companion_instance_26 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x9o_1 = [null, null, new ReferenceArraySerializer(getKClass(History), $serializer_getInstance_13())];
  }
  z26() {
    return $serializer_getInstance_25();
  }
}
class $serializer_25 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Trend', this, 3);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('history', true);
    this.y9o_1 = tmp0_serialDesc;
  }
  z9o(encoder, value) {
    var tmp0_desc = this.y9o_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().x9o_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.history == null)) {
      tmp1_output.f12(tmp0_desc, 2, tmp2_cached[2], value.history);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.z9o(encoder, value instanceof Trend ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.y9o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().x9o_1;
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return Trend.a9p(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.y9o_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_27().x9o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2])];
  }
}
class Trend {
  constructor() {
    Companion_getInstance_27();
    this.name = null;
    this.url = null;
    this.history = null;
  }
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  v9o(_set____db54di) {
    this.history = _set____db54di;
  }
  w9o() {
    return this.history;
  }
  static a9p(seen0, name, url, history, serializationConstructorMarker) {
    Companion_getInstance_27();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().y9o_1);
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
class Companion_27 {
  z26() {
    return $serializer_getInstance_26();
  }
}
class $serializer_26 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.WebPush', this, 7);
    tmp0_serialDesc.f18('title', true);
    tmp0_serialDesc.f18('notification_type', true);
    tmp0_serialDesc.f18('notification_id', true);
    tmp0_serialDesc.f18('preferred_locale', true);
    tmp0_serialDesc.f18('access_token', true);
    tmp0_serialDesc.f18('icon', true);
    tmp0_serialDesc.f18('body', true);
    this.b9p_1 = tmp0_serialDesc;
  }
  c9p(encoder, value) {
    var tmp0_desc = this.b9p_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.notificationType == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.notificationType);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.notificationId == null)) {
      tmp1_output.f12(tmp0_desc, 2, IntSerializer_getInstance(), value.notificationId);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.preferredLocale == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.preferredLocale);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.access_token == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.access_token);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.icon == null)) {
      tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.icon);
    }
    if (tmp1_output.j12(tmp0_desc, 6) ? true : !(value.body == null)) {
      tmp1_output.f12(tmp0_desc, 6, StringSerializer_getInstance(), value.body);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.c9p(encoder, value instanceof WebPush ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.b9p_1;
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
    var tmp11_input = decoder.l10(tmp0_desc);
    if (tmp11_input.b11()) {
      tmp4_local0 = tmp11_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.z10(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.z10(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.z10(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.z10(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp11_input.m10(tmp0_desc);
    return WebPush.d9p(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  xv() {
    return this.b9p_1;
  }
  v18() {
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
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
    return this.title;
  }
  e9p(_set____db54di) {
    this.notificationType = _set____db54di;
  }
  f9p() {
    return this.notificationType;
  }
  g9p(_set____db54di) {
    this.notificationId = _set____db54di;
  }
  h9p() {
    return this.notificationId;
  }
  i9p(_set____db54di) {
    this.preferredLocale = _set____db54di;
  }
  j9p() {
    return this.preferredLocale;
  }
  k9p(_set____db54di) {
    this.access_token = _set____db54di;
  }
  l9p() {
    return this.access_token;
  }
  e8z(_set____db54di) {
    this.icon = _set____db54di;
  }
  m8l() {
    return this.icon;
  }
  a8z(_set____db54di) {
    this.body = _set____db54di;
  }
  b8z() {
    return this.body;
  }
  static d9p(seen0, title, notificationType, notificationId, preferredLocale, access_token, icon, body, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().b9p_1);
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
class Companion_28 {
  constructor() {
    Companion_instance_28 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m9p_1 = [null, null, null, null, null, new ReferenceArraySerializer(getKClass(FilterKeyword), $serializer_getInstance_28()), new ReferenceArraySerializer(getKClass(FilterStatus), $serializer_getInstance_29())];
  }
  z26() {
    return $serializer_getInstance_27();
  }
}
class $serializer_27 {
  constructor() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.filter.Filter', this, 7);
    tmp0_serialDesc.f18('id', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('context', false);
    tmp0_serialDesc.f18('expires_at', true);
    tmp0_serialDesc.f18('filter_action', true);
    tmp0_serialDesc.f18('keywords', true);
    tmp0_serialDesc.f18('statuses', true);
    this.n9p_1 = tmp0_serialDesc;
  }
  o9p(encoder, value) {
    var tmp0_desc = this.n9p_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().m9p_1;
    tmp1_output.b12(tmp0_desc, 0, value.id);
    tmp1_output.b12(tmp0_desc, 1, value.title);
    tmp1_output.b12(tmp0_desc, 2, value.context);
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.expiresAt == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.expiresAt);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.filterAction == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.filterAction);
    }
    var tmp;
    if (tmp1_output.j12(tmp0_desc, 5)) {
      tmp = true;
    } else {
      var tmp_0 = value.keywords;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [];
      tmp = !equals_0(tmp_0, tmp$ret$2);
    }
    if (tmp) {
      tmp1_output.d12(tmp0_desc, 5, tmp2_cached[5], value.keywords);
    }
    var tmp_1;
    if (tmp1_output.j12(tmp0_desc, 6)) {
      tmp_1 = true;
    } else {
      var tmp_2 = value.statuses;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = [];
      tmp_1 = !equals_0(tmp_2, tmp$ret$5);
    }
    if (tmp_1) {
      tmp1_output.d12(tmp0_desc, 6, tmp2_cached[6], value.statuses);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.o9p(encoder, value instanceof Filter ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.n9p_1;
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
    var tmp11_input = decoder.l10(tmp0_desc);
    var tmp12_cached = Companion_getInstance_29().m9p_1;
    if (tmp11_input.b11()) {
      tmp4_local0 = tmp11_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.v10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.v10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.x10(tmp0_desc, 5, tmp12_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.x10(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.v10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.v10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.x10(tmp0_desc, 5, tmp12_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.x10(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp11_input.m10(tmp0_desc);
    return Filter.s9p(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  xv() {
    return this.n9p_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_29().m9p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[5], tmp0_cached[6]];
  }
}
class Filter {
  constructor() {
    Companion_getInstance_29();
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
  b72(_set____db54di) {
    this.p9p_1 = _set____db54di;
  }
  f22() {
    var tmp = this.p9p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  m6i(_set____db54di) {
    this.q9p_1 = _set____db54di;
  }
  n6i() {
    var tmp = this.q9p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('title');
    }
  }
  t9p(_set____db54di) {
    this.r9p_1 = _set____db54di;
  }
  wc() {
    var tmp = this.r9p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('context');
    }
  }
  a91(_set____db54di) {
    this.expiresAt = _set____db54di;
  }
  v7n() {
    return this.expiresAt;
  }
  u9p(_set____db54di) {
    this.filterAction = _set____db54di;
  }
  v9p() {
    return this.filterAction;
  }
  w9p(_set____db54di) {
    this.keywords = _set____db54di;
  }
  h8m() {
    return this.keywords;
  }
  x9p(_set____db54di) {
    this.statuses = _set____db54di;
  }
  f9m() {
    return this.statuses;
  }
  static s9p(seen0, id, title, context, expiresAt, filterAction, keywords, statuses, serializationConstructorMarker) {
    Companion_getInstance_29();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_27().n9p_1);
    }
    var $this = createThis(this);
    $this.p9p_1 = id;
    $this.q9p_1 = title;
    $this.r9p_1 = context;
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
    return this.f22();
  }
  set id(value) {
    this.b72(value);
  }
  get title() {
    return this.n6i();
  }
  set title(value) {
    this.m6i(value);
  }
  get context() {
    return this.wc();
  }
  set context(value) {
    this.t9p(value);
  }
}
class Companion_29 {
  z26() {
    return $serializer_getInstance_28();
  }
}
class $serializer_28 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.filter.FilterKeyword', this, 3);
    tmp0_serialDesc.f18('id', false);
    tmp0_serialDesc.f18('keyword', false);
    tmp0_serialDesc.f18('whole_word', true);
    this.y9p_1 = tmp0_serialDesc;
  }
  z9p(encoder, value) {
    var tmp0_desc = this.y9p_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.b12(tmp0_desc, 0, value.id);
    tmp1_output.b12(tmp0_desc, 1, value.keyword);
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.isWholeWord === false)) {
      tmp1_output.t11(tmp0_desc, 2, value.isWholeWord);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.z9p(encoder, value instanceof FilterKeyword ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.y9p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.v10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.n10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.v10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.n10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return FilterKeyword.c9q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.y9p_1;
  }
  v18() {
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
  b72(_set____db54di) {
    this.a9q_1 = _set____db54di;
  }
  f22() {
    var tmp = this.a9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  d9q(_set____db54di) {
    this.b9q_1 = _set____db54di;
  }
  e9q() {
    var tmp = this.b9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('keyword');
    }
  }
  f9q(_set____db54di) {
    this.isWholeWord = _set____db54di;
  }
  g9q() {
    return this.isWholeWord;
  }
  static c9q(seen0, id, keyword, isWholeWord, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_28().y9p_1);
    }
    var $this = createThis(this);
    $this.a9q_1 = id;
    $this.b9q_1 = keyword;
    if (0 === (seen0 & 4))
      $this.isWholeWord = false;
    else
      $this.isWholeWord = isWholeWord;
    return $this;
  }
  get id() {
    return this.f22();
  }
  set id(value) {
    this.b72(value);
  }
  get keyword() {
    return this.e9q();
  }
  set keyword(value) {
    this.d9q(value);
  }
}
class Companion_30 {
  z26() {
    return $serializer_getInstance_29();
  }
}
class $serializer_29 {
  constructor() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.filter.FilterStatus', this, 2);
    tmp0_serialDesc.f18('id', false);
    tmp0_serialDesc.f18('status_id', false);
    this.h9q_1 = tmp0_serialDesc;
  }
  i9q(encoder, value) {
    var tmp0_desc = this.h9q_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.b12(tmp0_desc, 0, value.id);
    tmp1_output.b12(tmp0_desc, 1, value.statusId);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.i9q(encoder, value instanceof FilterStatus ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.h9q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.v10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return FilterStatus.l9q(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.h9q_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class FilterStatus {
  b72(_set____db54di) {
    this.j9q_1 = _set____db54di;
  }
  f22() {
    var tmp = this.j9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  m9q(_set____db54di) {
    this.k9q_1 = _set____db54di;
  }
  n9q() {
    var tmp = this.k9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('statusId');
    }
  }
  static l9q(seen0, id, statusId, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_29().h9q_1);
    }
    var $this = createThis(this);
    $this.j9q_1 = id;
    $this.k9q_1 = statusId;
    return $this;
  }
  get id() {
    return this.f22();
  }
  set id(value) {
    this.b72(value);
  }
  get statusId() {
    return this.n9q();
  }
  set statusId(value) {
    this.m9q(value);
  }
}
class Companion_31 {
  constructor() {
    Companion_instance_31 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o9q_1 = [null, null, null, null, null, null, null, null, null, new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance()), null, null, null, null, null, new ReferenceArraySerializer(getKClass(InstanceV1Rules), $serializer_getInstance_35())];
  }
  z26() {
    return $serializer_getInstance_30();
  }
}
class $serializer_30 {
  constructor() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1', this, 16);
    tmp0_serialDesc.f18('uri', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('short_description', true);
    tmp0_serialDesc.f18('description', false);
    tmp0_serialDesc.f18('email', false);
    tmp0_serialDesc.f18('version', false);
    tmp0_serialDesc.f18('urls', false);
    tmp0_serialDesc.f18('stats', false);
    tmp0_serialDesc.f18('thumbnail', true);
    tmp0_serialDesc.f18('languages', true);
    tmp0_serialDesc.f18('registrations', true);
    tmp0_serialDesc.f18('approval_required', true);
    tmp0_serialDesc.f18('invites_enabled', true);
    tmp0_serialDesc.f18('configuration', true);
    tmp0_serialDesc.f18('contact_account', true);
    tmp0_serialDesc.f18('rules', true);
    this.p9q_1 = tmp0_serialDesc;
  }
  q9q(encoder, value) {
    var tmp0_desc = this.p9q_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_32().o9q_1;
    tmp1_output.b12(tmp0_desc, 0, value.uri);
    tmp1_output.b12(tmp0_desc, 1, value.title);
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.shortDescription == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.shortDescription);
    }
    tmp1_output.b12(tmp0_desc, 3, value.description);
    tmp1_output.b12(tmp0_desc, 4, value.email);
    tmp1_output.b12(tmp0_desc, 5, value.version);
    tmp1_output.d12(tmp0_desc, 6, $serializer_getInstance_38(), value.urls);
    tmp1_output.d12(tmp0_desc, 7, $serializer_getInstance_36(), value.stats);
    if (tmp1_output.j12(tmp0_desc, 8) ? true : !(value.thumbnail == null)) {
      tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.thumbnail);
    }
    if (tmp1_output.j12(tmp0_desc, 9) ? true : !(value.languages == null)) {
      tmp1_output.f12(tmp0_desc, 9, tmp2_cached[9], value.languages);
    }
    if (tmp1_output.j12(tmp0_desc, 10) ? true : !(value.registrations == null)) {
      tmp1_output.f12(tmp0_desc, 10, BooleanSerializer_getInstance(), value.registrations);
    }
    if (tmp1_output.j12(tmp0_desc, 11) ? true : !(value.approvalRequired == null)) {
      tmp1_output.f12(tmp0_desc, 11, BooleanSerializer_getInstance(), value.approvalRequired);
    }
    if (tmp1_output.j12(tmp0_desc, 12) ? true : !(value.invitesEnabled == null)) {
      tmp1_output.f12(tmp0_desc, 12, BooleanSerializer_getInstance(), value.invitesEnabled);
    }
    if (tmp1_output.j12(tmp0_desc, 13) ? true : !(value.configuration == null)) {
      tmp1_output.f12(tmp0_desc, 13, $serializer_getInstance_31(), value.configuration);
    }
    if (tmp1_output.j12(tmp0_desc, 14) ? true : !(value.contactAccount == null)) {
      tmp1_output.f12(tmp0_desc, 14, $serializer_getInstance_0(), value.contactAccount);
    }
    if (tmp1_output.j12(tmp0_desc, 15) ? true : !(value.rules == null)) {
      tmp1_output.f12(tmp0_desc, 15, tmp2_cached[15], value.rules);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.q9q(encoder, value instanceof InstanceV1 ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.p9q_1;
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
    var tmp20_input = decoder.l10(tmp0_desc);
    var tmp21_cached = Companion_getInstance_32().o9q_1;
    if (tmp20_input.b11()) {
      tmp4_local0 = tmp20_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.v10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.v10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.v10(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.v10(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.x10(tmp0_desc, 6, $serializer_getInstance_38(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.x10(tmp0_desc, 7, $serializer_getInstance_36(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.z10(tmp0_desc, 9, tmp21_cached[9], tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.z10(tmp0_desc, 10, BooleanSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.z10(tmp0_desc, 13, $serializer_getInstance_31(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.z10(tmp0_desc, 14, $serializer_getInstance_0(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.z10(tmp0_desc, 15, tmp21_cached[15], tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.v10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.v10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.v10(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.v10(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.x10(tmp0_desc, 6, $serializer_getInstance_38(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.x10(tmp0_desc, 7, $serializer_getInstance_36(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.z10(tmp0_desc, 9, tmp21_cached[9], tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.z10(tmp0_desc, 10, BooleanSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.z10(tmp0_desc, 13, $serializer_getInstance_31(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.z10(tmp0_desc, 14, $serializer_getInstance_0(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.z10(tmp0_desc, 15, tmp21_cached[15], tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp20_input.m10(tmp0_desc);
    return InstanceV1.y9q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  xv() {
    return this.p9q_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_32().o9q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_38(), $serializer_getInstance_36(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[9]), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_31()), get_nullable($serializer_getInstance_0()), get_nullable(tmp0_cached[15])];
  }
}
class InstanceV1 {
  constructor() {
    Companion_getInstance_32();
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
  y55(_set____db54di) {
    this.r9q_1 = _set____db54di;
  }
  z55() {
    var tmp = this.r9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('uri');
    }
  }
  m6i(_set____db54di) {
    this.s9q_1 = _set____db54di;
  }
  n6i() {
    var tmp = this.s9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('title');
    }
  }
  z9q(_set____db54di) {
    this.shortDescription = _set____db54di;
  }
  a9r() {
    return this.shortDescription;
  }
  o6i(_set____db54di) {
    this.t9q_1 = _set____db54di;
  }
  w52() {
    var tmp = this.t9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('description');
    }
  }
  b9r(_set____db54di) {
    this.u9q_1 = _set____db54di;
  }
  i5v() {
    var tmp = this.u9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('email');
    }
  }
  c9r(_set____db54di) {
    this.v9q_1 = _set____db54di;
  }
  l48() {
    var tmp = this.v9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('version');
    }
  }
  d9r(_set____db54di) {
    this.w9q_1 = _set____db54di;
  }
  e9r() {
    var tmp = this.w9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('urls');
    }
  }
  f9r(_set____db54di) {
    this.x9q_1 = _set____db54di;
  }
  g9r() {
    var tmp = this.x9q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('stats');
    }
  }
  q6n(_set____db54di) {
    this.thumbnail = _set____db54di;
  }
  r6n() {
    return this.thumbnail;
  }
  h9r(_set____db54di) {
    this.languages = _set____db54di;
  }
  i9r() {
    return this.languages;
  }
  j9r(_set____db54di) {
    this.registrations = _set____db54di;
  }
  k9r() {
    return this.registrations;
  }
  l9r(_set____db54di) {
    this.approvalRequired = _set____db54di;
  }
  m9r() {
    return this.approvalRequired;
  }
  n9r(_set____db54di) {
    this.invitesEnabled = _set____db54di;
  }
  o9r() {
    return this.invitesEnabled;
  }
  p9r(_set____db54di) {
    this.configuration = _set____db54di;
  }
  q9r() {
    return this.configuration;
  }
  r9r(_set____db54di) {
    this.contactAccount = _set____db54di;
  }
  s9r() {
    return this.contactAccount;
  }
  t9r(_set____db54di) {
    this.rules = _set____db54di;
  }
  u9r() {
    return this.rules;
  }
  static y9q(seen0, uri, title, shortDescription, description, email, version, urls, stats, thumbnail, languages, registrations, approvalRequired, invitesEnabled, configuration, contactAccount, rules, serializationConstructorMarker) {
    Companion_getInstance_32();
    if (!(251 === (251 & seen0))) {
      throwMissingFieldException(seen0, 251, $serializer_getInstance_30().p9q_1);
    }
    var $this = createThis(this);
    $this.r9q_1 = uri;
    $this.s9q_1 = title;
    if (0 === (seen0 & 4))
      $this.shortDescription = null;
    else
      $this.shortDescription = shortDescription;
    $this.t9q_1 = description;
    $this.u9q_1 = email;
    $this.v9q_1 = version;
    $this.w9q_1 = urls;
    $this.x9q_1 = stats;
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
    return this.z55();
  }
  set uri(value) {
    this.y55(value);
  }
  get title() {
    return this.n6i();
  }
  set title(value) {
    this.m6i(value);
  }
  get description() {
    return this.w52();
  }
  set description(value) {
    this.o6i(value);
  }
  get email() {
    return this.i5v();
  }
  set email(value) {
    this.b9r(value);
  }
  get version() {
    return this.l48();
  }
  set version(value) {
    this.c9r(value);
  }
  get urls() {
    return this.e9r();
  }
  set urls(value) {
    this.d9r(value);
  }
  get stats() {
    return this.g9r();
  }
  set stats(value) {
    this.f9r(value);
  }
}
class Companion_32 {
  z26() {
    return $serializer_getInstance_31();
  }
}
class $serializer_31 {
  constructor() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Configuration', this, 3);
    tmp0_serialDesc.f18('statuses', false);
    tmp0_serialDesc.f18('media_attachments', false);
    tmp0_serialDesc.f18('polls', false);
    this.v9r_1 = tmp0_serialDesc;
  }
  w9r(encoder, value) {
    var tmp0_desc = this.v9r_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.d12(tmp0_desc, 0, $serializer_getInstance_37(), value.statuses);
    tmp1_output.d12(tmp0_desc, 1, $serializer_getInstance_33(), value.mediaAttachments);
    tmp1_output.d12(tmp0_desc, 2, $serializer_getInstance_34(), value.polls);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.w9r(encoder, value instanceof InstanceV1Configuration ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.v9r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.x10(tmp0_desc, 0, $serializer_getInstance_37(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.x10(tmp0_desc, 1, $serializer_getInstance_33(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.x10(tmp0_desc, 2, $serializer_getInstance_34(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x10(tmp0_desc, 0, $serializer_getInstance_37(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.x10(tmp0_desc, 1, $serializer_getInstance_33(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.x10(tmp0_desc, 2, $serializer_getInstance_34(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return InstanceV1Configuration.a9s(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.v9r_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_37(), $serializer_getInstance_33(), $serializer_getInstance_34()];
  }
}
class InstanceV1Configuration {
  b9s(_set____db54di) {
    this.x9r_1 = _set____db54di;
  }
  f9m() {
    var tmp = this.x9r_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('statuses');
    }
  }
  c9s(_set____db54di) {
    this.y9r_1 = _set____db54di;
  }
  h9n() {
    var tmp = this.y9r_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('mediaAttachments');
    }
  }
  d9s(_set____db54di) {
    this.z9r_1 = _set____db54di;
  }
  e9s() {
    var tmp = this.z9r_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('polls');
    }
  }
  static a9s(seen0, statuses, mediaAttachments, polls, serializationConstructorMarker) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_31().v9r_1);
    }
    var $this = createThis(this);
    $this.x9r_1 = statuses;
    $this.y9r_1 = mediaAttachments;
    $this.z9r_1 = polls;
    return $this;
  }
  get statuses() {
    return this.f9m();
  }
  set statuses(value) {
    this.b9s(value);
  }
  get mediaAttachments() {
    return this.h9n();
  }
  set mediaAttachments(value) {
    this.c9s(value);
  }
  get polls() {
    return this.e9s();
  }
  set polls(value) {
    this.d9s(value);
  }
}
class Companion_33 {
  z26() {
    return $serializer_getInstance_32();
  }
}
class $serializer_32 {
  constructor() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Fields', this, 3);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('value', true);
    tmp0_serialDesc.f18('verified_at', true);
    this.f9s_1 = tmp0_serialDesc;
  }
  g9s(encoder, value) {
    var tmp0_desc = this.f9s_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.value == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.value);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.verifiedAt == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.verifiedAt);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.g9s(encoder, value instanceof InstanceV1Fields ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.f9s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return InstanceV1Fields.h9s(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.f9s_1;
  }
  v18() {
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
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  v8q(_set____db54di) {
    this.value = _set____db54di;
  }
  b3() {
    return this.value;
  }
  i9s(_set____db54di) {
    this.verifiedAt = _set____db54di;
  }
  j9s() {
    return this.verifiedAt;
  }
  static h9s(seen0, name, value, verifiedAt, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().f9s_1);
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
class Companion_34 {
  constructor() {
    Companion_instance_34 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k9s_1 = [new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance()), null, null, null, null, null];
  }
  z26() {
    return $serializer_getInstance_33();
  }
}
class $serializer_33 {
  constructor() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1MediaAttachments', this, 6);
    tmp0_serialDesc.f18('supported_mime_types', true);
    tmp0_serialDesc.f18('image_size_limit', true);
    tmp0_serialDesc.f18('image_matrix_limit', true);
    tmp0_serialDesc.f18('video_size_limit', true);
    tmp0_serialDesc.f18('video_frame_rate_limit', true);
    tmp0_serialDesc.f18('video_matrix_limit', true);
    this.l9s_1 = tmp0_serialDesc;
  }
  m9s(encoder, value) {
    var tmp0_desc = this.l9s_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().k9s_1;
    var tmp;
    if (tmp1_output.j12(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.supportedMimeTypes;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [];
      tmp = !equals_0(tmp_0, tmp$ret$2);
    }
    if (tmp) {
      tmp1_output.d12(tmp0_desc, 0, tmp2_cached[0], value.supportedMimeTypes);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.imageSizeLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.imageSizeLimit);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.imageMatrixLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 2, value.imageMatrixLimit);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.videoSizeLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 3, value.videoSizeLimit);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.videoFrameRateLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 4, value.videoFrameRateLimit);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.videoMatrixLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 5, value.videoMatrixLimit);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.m9s(encoder, value instanceof InstanceV1MediaAttachments ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.l9s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.l10(tmp0_desc);
    var tmp11_cached = Companion_getInstance_35().k9s_1;
    if (tmp10_input.b11()) {
      tmp4_local0 = tmp10_input.x10(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.q10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.q10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.q10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.q10(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.q10(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.x10(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.q10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.q10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.q10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.q10(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.q10(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp10_input.m10(tmp0_desc);
    return InstanceV1MediaAttachments.n9s(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  xv() {
    return this.l9s_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_35().k9s_1[0], IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class InstanceV1MediaAttachments {
  constructor() {
    Companion_getInstance_35();
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
  o9s(_set____db54di) {
    this.supportedMimeTypes = _set____db54di;
  }
  p9s() {
    return this.supportedMimeTypes;
  }
  q9s(_set____db54di) {
    this.imageSizeLimit = _set____db54di;
  }
  r9s() {
    return this.imageSizeLimit;
  }
  s9s(_set____db54di) {
    this.imageMatrixLimit = _set____db54di;
  }
  t9s() {
    return this.imageMatrixLimit;
  }
  u9s(_set____db54di) {
    this.videoSizeLimit = _set____db54di;
  }
  v9s() {
    return this.videoSizeLimit;
  }
  w9s(_set____db54di) {
    this.videoFrameRateLimit = _set____db54di;
  }
  x9s() {
    return this.videoFrameRateLimit;
  }
  y9s(_set____db54di) {
    this.videoMatrixLimit = _set____db54di;
  }
  z9s() {
    return this.videoMatrixLimit;
  }
  static n9s(seen0, supportedMimeTypes, imageSizeLimit, imageMatrixLimit, videoSizeLimit, videoFrameRateLimit, videoMatrixLimit, serializationConstructorMarker) {
    Companion_getInstance_35();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().l9s_1);
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
class Companion_35 {
  z26() {
    return $serializer_getInstance_34();
  }
}
class $serializer_34 {
  constructor() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Polls', this, 4);
    tmp0_serialDesc.f18('max_options', true);
    tmp0_serialDesc.f18('max_characters_per_option', true);
    tmp0_serialDesc.f18('min_expiration', true);
    tmp0_serialDesc.f18('max_expiration', true);
    this.a9t_1 = tmp0_serialDesc;
  }
  b9t(encoder, value) {
    var tmp0_desc = this.a9t_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.maxOptions == null)) {
      tmp1_output.f12(tmp0_desc, 0, IntSerializer_getInstance(), value.maxOptions);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.maxCharactersPerOption == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.maxCharactersPerOption);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.minExpiration == null)) {
      tmp1_output.f12(tmp0_desc, 2, IntSerializer_getInstance(), value.minExpiration);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.maxExpiration == null)) {
      tmp1_output.f12(tmp0_desc, 3, IntSerializer_getInstance(), value.maxExpiration);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.b9t(encoder, value instanceof InstanceV1Polls ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.a9t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.l10(tmp0_desc);
    if (tmp8_input.b11()) {
      tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp8_input.m10(tmp0_desc);
    return InstanceV1Polls.c9t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.a9t_1;
  }
  v18() {
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
  d9t(_set____db54di) {
    this.maxOptions = _set____db54di;
  }
  e9t() {
    return this.maxOptions;
  }
  f9t(_set____db54di) {
    this.maxCharactersPerOption = _set____db54di;
  }
  g9t() {
    return this.maxCharactersPerOption;
  }
  h9t(_set____db54di) {
    this.minExpiration = _set____db54di;
  }
  i9t() {
    return this.minExpiration;
  }
  j9t(_set____db54di) {
    this.maxExpiration = _set____db54di;
  }
  k9t() {
    return this.maxExpiration;
  }
  static c9t(seen0, maxOptions, maxCharactersPerOption, minExpiration, maxExpiration, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().a9t_1);
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
class Companion_36 {
  z26() {
    return $serializer_getInstance_35();
  }
}
class $serializer_35 {
  constructor() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Rules', this, 2);
    tmp0_serialDesc.f18('id', true);
    tmp0_serialDesc.f18('text', true);
    this.l9t_1 = tmp0_serialDesc;
  }
  m9t(encoder, value) {
    var tmp0_desc = this.l9t_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.text == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.text);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.m9t(encoder, value instanceof InstanceV1Rules ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.l9t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return InstanceV1Rules.n9t(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.l9t_1;
  }
  v18() {
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
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  x6s(_set____db54di) {
    this.text = _set____db54di;
  }
  z5c() {
    return this.text;
  }
  static n9t(seen0, id, text, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().l9t_1);
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
class Companion_37 {
  z26() {
    return $serializer_getInstance_36();
  }
}
class $serializer_36 {
  constructor() {
    $serializer_instance_36 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Stats', this, 3);
    tmp0_serialDesc.f18('user_count', true);
    tmp0_serialDesc.f18('status_count', true);
    tmp0_serialDesc.f18('domain_count', true);
    this.o9t_1 = tmp0_serialDesc;
  }
  p9t(encoder, value) {
    var tmp0_desc = this.o9t_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.userCount === 0)) {
      tmp1_output.w11(tmp0_desc, 0, value.userCount);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.statusCount === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.statusCount);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.domainCount === 0)) {
      tmp1_output.w11(tmp0_desc, 2, value.domainCount);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.p9t(encoder, value instanceof InstanceV1Stats ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.o9t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.q10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.q10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.q10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.q10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.q10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return InstanceV1Stats.q9t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.o9t_1;
  }
  v18() {
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
  r9t(_set____db54di) {
    this.userCount = _set____db54di;
  }
  s9t() {
    return this.userCount;
  }
  t9t(_set____db54di) {
    this.statusCount = _set____db54di;
  }
  u9t() {
    return this.statusCount;
  }
  v9t(_set____db54di) {
    this.domainCount = _set____db54di;
  }
  w9t() {
    return this.domainCount;
  }
  static q9t(seen0, userCount, statusCount, domainCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_36().o9t_1);
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
class Companion_38 {
  z26() {
    return $serializer_getInstance_37();
  }
}
class $serializer_37 {
  constructor() {
    $serializer_instance_37 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Statuses', this, 3);
    tmp0_serialDesc.f18('max_characters', true);
    tmp0_serialDesc.f18('max_media_attachments', true);
    tmp0_serialDesc.f18('characters_reserved_per_url', true);
    this.x9t_1 = tmp0_serialDesc;
  }
  y9t(encoder, value) {
    var tmp0_desc = this.x9t_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.maxCharacters === 0)) {
      tmp1_output.w11(tmp0_desc, 0, value.maxCharacters);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.maxMediaAttachments === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.maxMediaAttachments);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.charactersReservedPerUrl === 0)) {
      tmp1_output.w11(tmp0_desc, 2, value.charactersReservedPerUrl);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.y9t(encoder, value instanceof InstanceV1Statuses ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.x9t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.q10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.q10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.q10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.q10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.q10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return InstanceV1Statuses.z9t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.x9t_1;
  }
  v18() {
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
  a9u(_set____db54di) {
    this.maxCharacters = _set____db54di;
  }
  b9u() {
    return this.maxCharacters;
  }
  c9u(_set____db54di) {
    this.maxMediaAttachments = _set____db54di;
  }
  d9u() {
    return this.maxMediaAttachments;
  }
  e9u(_set____db54di) {
    this.charactersReservedPerUrl = _set____db54di;
  }
  f9u() {
    return this.charactersReservedPerUrl;
  }
  static z9t(seen0, maxCharacters, maxMediaAttachments, charactersReservedPerUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_37().x9t_1);
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
class Companion_39 {
  z26() {
    return $serializer_getInstance_38();
  }
}
class $serializer_38 {
  constructor() {
    $serializer_instance_38 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Urls', this, 1);
    tmp0_serialDesc.f18('streaming_api', false);
    this.g9u_1 = tmp0_serialDesc;
  }
  h9u(encoder, value) {
    var tmp0_desc = this.g9u_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.b12(tmp0_desc, 0, value.streamingApi);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.h9u(encoder, value instanceof InstanceV1Urls ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.g9u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.l10(tmp0_desc);
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return InstanceV1Urls.j9u(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.g9u_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class InstanceV1Urls {
  k9u(_set____db54di) {
    this.i9u_1 = _set____db54di;
  }
  l9u() {
    var tmp = this.i9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('streamingApi');
    }
  }
  static j9u(seen0, streamingApi, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_38().g9u_1);
    }
    var $this = createThis(this);
    $this.i9u_1 = streamingApi;
    return $this;
  }
  get streamingApi() {
    return this.l9u();
  }
  set streamingApi(value) {
    this.k9u(value);
  }
}
class Companion_40 {
  constructor() {
    Companion_instance_40 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m9u_1 = [null, null, null, null, null, null, null, new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance()), null, null, null, new ReferenceArraySerializer(getKClass(InstanceV2Rules), $serializer_getInstance_47())];
  }
  z26() {
    return $serializer_getInstance_39();
  }
}
class $serializer_39 {
  constructor() {
    $serializer_instance_39 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2', this, 12);
    tmp0_serialDesc.f18('domain', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('version', false);
    tmp0_serialDesc.f18('source_url', false);
    tmp0_serialDesc.f18('description', false);
    tmp0_serialDesc.f18('usage', false);
    tmp0_serialDesc.f18('thumbnail', false);
    tmp0_serialDesc.f18('languages', false);
    tmp0_serialDesc.f18('configuration', false);
    tmp0_serialDesc.f18('registrations', false);
    tmp0_serialDesc.f18('contact', false);
    tmp0_serialDesc.f18('rules', false);
    this.n9u_1 = tmp0_serialDesc;
  }
  o9u(encoder, value) {
    var tmp0_desc = this.n9u_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_41().m9u_1;
    tmp1_output.b12(tmp0_desc, 0, value.domain);
    tmp1_output.b12(tmp0_desc, 1, value.title);
    tmp1_output.b12(tmp0_desc, 2, value.version);
    tmp1_output.b12(tmp0_desc, 3, value.sourceUrl);
    tmp1_output.b12(tmp0_desc, 4, value.description);
    tmp1_output.d12(tmp0_desc, 5, $serializer_getInstance_52(), value.usage);
    tmp1_output.d12(tmp0_desc, 6, $serializer_getInstance_49(), value.thumbnail);
    tmp1_output.d12(tmp0_desc, 7, tmp2_cached[7], value.languages);
    tmp1_output.d12(tmp0_desc, 8, $serializer_getInstance_41(), value.configuration);
    tmp1_output.d12(tmp0_desc, 9, $serializer_getInstance_46(), value.registrations);
    tmp1_output.d12(tmp0_desc, 10, $serializer_getInstance_42(), value.contact);
    tmp1_output.d12(tmp0_desc, 11, tmp2_cached[11], value.rules);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.o9u(encoder, value instanceof InstanceV2 ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.n9u_1;
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
    var tmp16_input = decoder.l10(tmp0_desc);
    var tmp17_cached = Companion_getInstance_41().m9u_1;
    if (tmp16_input.b11()) {
      tmp4_local0 = tmp16_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.v10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.v10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.v10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.v10(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.x10(tmp0_desc, 5, $serializer_getInstance_52(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.x10(tmp0_desc, 6, $serializer_getInstance_49(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.x10(tmp0_desc, 7, tmp17_cached[7], tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.x10(tmp0_desc, 8, $serializer_getInstance_41(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.x10(tmp0_desc, 9, $serializer_getInstance_46(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.x10(tmp0_desc, 10, $serializer_getInstance_42(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp16_input.x10(tmp0_desc, 11, tmp17_cached[11], tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.v10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.v10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.v10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.v10(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.x10(tmp0_desc, 5, $serializer_getInstance_52(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.x10(tmp0_desc, 6, $serializer_getInstance_49(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.x10(tmp0_desc, 7, tmp17_cached[7], tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.x10(tmp0_desc, 8, $serializer_getInstance_41(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.x10(tmp0_desc, 9, $serializer_getInstance_46(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.x10(tmp0_desc, 10, $serializer_getInstance_42(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp16_input.x10(tmp0_desc, 11, tmp17_cached[11], tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp16_input.m10(tmp0_desc);
    return InstanceV2.b9v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  xv() {
    return this.n9u_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_41().m9u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_52(), $serializer_getInstance_49(), tmp0_cached[7], $serializer_getInstance_41(), $serializer_getInstance_46(), $serializer_getInstance_42(), tmp0_cached[11]];
  }
}
class InstanceV2 {
  constructor() {
    Companion_getInstance_41();
  }
  c9v(_set____db54di) {
    this.p9u_1 = _set____db54di;
  }
  d9v() {
    var tmp = this.p9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('domain');
    }
  }
  m6i(_set____db54di) {
    this.q9u_1 = _set____db54di;
  }
  n6i() {
    var tmp = this.q9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('title');
    }
  }
  c9r(_set____db54di) {
    this.r9u_1 = _set____db54di;
  }
  l48() {
    var tmp = this.r9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('version');
    }
  }
  e9v(_set____db54di) {
    this.s9u_1 = _set____db54di;
  }
  f9v() {
    var tmp = this.s9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('sourceUrl');
    }
  }
  o6i(_set____db54di) {
    this.t9u_1 = _set____db54di;
  }
  w52() {
    var tmp = this.t9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('description');
    }
  }
  g9v(_set____db54di) {
    this.u9u_1 = _set____db54di;
  }
  h9v() {
    var tmp = this.u9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('usage');
    }
  }
  i9v(_set____db54di) {
    this.v9u_1 = _set____db54di;
  }
  r6n() {
    var tmp = this.v9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('thumbnail');
    }
  }
  j9v(_set____db54di) {
    this.w9u_1 = _set____db54di;
  }
  i9r() {
    var tmp = this.w9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('languages');
    }
  }
  k9v(_set____db54di) {
    this.x9u_1 = _set____db54di;
  }
  q9r() {
    var tmp = this.x9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('configuration');
    }
  }
  l9v(_set____db54di) {
    this.y9u_1 = _set____db54di;
  }
  k9r() {
    var tmp = this.y9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('registrations');
    }
  }
  m9v(_set____db54di) {
    this.z9u_1 = _set____db54di;
  }
  n9v() {
    var tmp = this.z9u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('contact');
    }
  }
  o9v(_set____db54di) {
    this.a9v_1 = _set____db54di;
  }
  u9r() {
    var tmp = this.a9v_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('rules');
    }
  }
  static b9v(seen0, domain, title, version, sourceUrl, description, usage, thumbnail, languages, configuration, registrations, contact, rules, serializationConstructorMarker) {
    Companion_getInstance_41();
    if (!(4095 === (4095 & seen0))) {
      throwMissingFieldException(seen0, 4095, $serializer_getInstance_39().n9u_1);
    }
    var $this = createThis(this);
    $this.p9u_1 = domain;
    $this.q9u_1 = title;
    $this.r9u_1 = version;
    $this.s9u_1 = sourceUrl;
    $this.t9u_1 = description;
    $this.u9u_1 = usage;
    $this.v9u_1 = thumbnail;
    $this.w9u_1 = languages;
    $this.x9u_1 = configuration;
    $this.y9u_1 = registrations;
    $this.z9u_1 = contact;
    $this.a9v_1 = rules;
    return $this;
  }
  get domain() {
    return this.d9v();
  }
  set domain(value) {
    this.c9v(value);
  }
  get title() {
    return this.n6i();
  }
  set title(value) {
    this.m6i(value);
  }
  get version() {
    return this.l48();
  }
  set version(value) {
    this.c9r(value);
  }
  get sourceUrl() {
    return this.f9v();
  }
  set sourceUrl(value) {
    this.e9v(value);
  }
  get description() {
    return this.w52();
  }
  set description(value) {
    this.o6i(value);
  }
  get usage() {
    return this.h9v();
  }
  set usage(value) {
    this.g9v(value);
  }
  get thumbnail() {
    return this.r6n();
  }
  set thumbnail(value) {
    this.i9v(value);
  }
  get languages() {
    return this.i9r();
  }
  set languages(value) {
    this.j9v(value);
  }
  get configuration() {
    return this.q9r();
  }
  set configuration(value) {
    this.k9v(value);
  }
  get registrations() {
    return this.k9r();
  }
  set registrations(value) {
    this.l9v(value);
  }
  get contact() {
    return this.n9v();
  }
  set contact(value) {
    this.m9v(value);
  }
  get rules() {
    return this.u9r();
  }
  set rules(value) {
    this.o9v(value);
  }
}
class Companion_41 {
  z26() {
    return $serializer_getInstance_40();
  }
}
class $serializer_40 {
  constructor() {
    $serializer_instance_40 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Accounts', this, 2);
    tmp0_serialDesc.f18('max_featured_tags', true);
    tmp0_serialDesc.f18('max_pinned_statuses', true);
    this.p9v_1 = tmp0_serialDesc;
  }
  q9v(encoder, value) {
    var tmp0_desc = this.p9v_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.maxFeaturedTags === 0)) {
      tmp1_output.w11(tmp0_desc, 0, value.maxFeaturedTags);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.maxPinnedStatuses == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.maxPinnedStatuses);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.q9v(encoder, value instanceof InstanceV2Accounts ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.p9v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.q10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return InstanceV2Accounts.r9v(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.p9v_1;
  }
  v18() {
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
  s9v(_set____db54di) {
    this.maxFeaturedTags = _set____db54di;
  }
  t9v() {
    return this.maxFeaturedTags;
  }
  u9v(_set____db54di) {
    this.maxPinnedStatuses = _set____db54di;
  }
  v9v() {
    return this.maxPinnedStatuses;
  }
  static r9v(seen0, maxFeaturedTags, maxPinnedStatuses, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_40().p9v_1);
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
class Companion_42 {
  z26() {
    return $serializer_getInstance_41();
  }
}
class $serializer_41 {
  constructor() {
    $serializer_instance_41 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Configuration', this, 7);
    tmp0_serialDesc.f18('urls', false);
    tmp0_serialDesc.f18('vapid', true);
    tmp0_serialDesc.f18('accounts', false);
    tmp0_serialDesc.f18('statuses', false);
    tmp0_serialDesc.f18('media_attachments', false);
    tmp0_serialDesc.f18('polls', false);
    tmp0_serialDesc.f18('translation', false);
    this.w9v_1 = tmp0_serialDesc;
  }
  x9v(encoder, value) {
    var tmp0_desc = this.w9v_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.d12(tmp0_desc, 0, $serializer_getInstance_51(), value.urls);
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.vapid == null)) {
      tmp1_output.f12(tmp0_desc, 1, $serializer_getInstance_54(), value.vapid);
    }
    tmp1_output.d12(tmp0_desc, 2, $serializer_getInstance_40(), value.accounts);
    tmp1_output.d12(tmp0_desc, 3, $serializer_getInstance_48(), value.statuses);
    tmp1_output.d12(tmp0_desc, 4, $serializer_getInstance_44(), value.mediaAttachments);
    tmp1_output.d12(tmp0_desc, 5, $serializer_getInstance_45(), value.polls);
    tmp1_output.d12(tmp0_desc, 6, $serializer_getInstance_50(), value.translation);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.x9v(encoder, value instanceof InstanceV2Configuration ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.w9v_1;
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
    var tmp11_input = decoder.l10(tmp0_desc);
    if (tmp11_input.b11()) {
      tmp4_local0 = tmp11_input.x10(tmp0_desc, 0, $serializer_getInstance_51(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.z10(tmp0_desc, 1, $serializer_getInstance_54(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.x10(tmp0_desc, 2, $serializer_getInstance_40(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.x10(tmp0_desc, 3, $serializer_getInstance_48(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.x10(tmp0_desc, 4, $serializer_getInstance_44(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.x10(tmp0_desc, 5, $serializer_getInstance_45(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.x10(tmp0_desc, 6, $serializer_getInstance_50(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.x10(tmp0_desc, 0, $serializer_getInstance_51(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.z10(tmp0_desc, 1, $serializer_getInstance_54(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.x10(tmp0_desc, 2, $serializer_getInstance_40(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.x10(tmp0_desc, 3, $serializer_getInstance_48(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.x10(tmp0_desc, 4, $serializer_getInstance_44(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.x10(tmp0_desc, 5, $serializer_getInstance_45(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.x10(tmp0_desc, 6, $serializer_getInstance_50(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp11_input.m10(tmp0_desc);
    return InstanceV2Configuration.e9w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  xv() {
    return this.w9v_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_51(), get_nullable($serializer_getInstance_54()), $serializer_getInstance_40(), $serializer_getInstance_48(), $serializer_getInstance_44(), $serializer_getInstance_45(), $serializer_getInstance_50()];
  }
}
class InstanceV2Configuration {
  constructor() {
    this.vapid = null;
  }
  f9w(_set____db54di) {
    this.y9v_1 = _set____db54di;
  }
  e9r() {
    var tmp = this.y9v_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('urls');
    }
  }
  g9w(_set____db54di) {
    this.vapid = _set____db54di;
  }
  h9w() {
    return this.vapid;
  }
  i9w(_set____db54di) {
    this.z9v_1 = _set____db54di;
  }
  e9j() {
    var tmp = this.z9v_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('accounts');
    }
  }
  j9w(_set____db54di) {
    this.a9w_1 = _set____db54di;
  }
  f9m() {
    var tmp = this.a9w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('statuses');
    }
  }
  k9w(_set____db54di) {
    this.b9w_1 = _set____db54di;
  }
  h9n() {
    var tmp = this.b9w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('mediaAttachments');
    }
  }
  l9w(_set____db54di) {
    this.c9w_1 = _set____db54di;
  }
  e9s() {
    var tmp = this.c9w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('polls');
    }
  }
  m9w(_set____db54di) {
    this.d9w_1 = _set____db54di;
  }
  n9w() {
    var tmp = this.d9w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('translation');
    }
  }
  static e9w(seen0, urls, vapid, accounts, statuses, mediaAttachments, polls, translation, serializationConstructorMarker) {
    if (!(125 === (125 & seen0))) {
      throwMissingFieldException(seen0, 125, $serializer_getInstance_41().w9v_1);
    }
    var $this = createThis(this);
    $this.y9v_1 = urls;
    if (0 === (seen0 & 2))
      $this.vapid = null;
    else
      $this.vapid = vapid;
    $this.z9v_1 = accounts;
    $this.a9w_1 = statuses;
    $this.b9w_1 = mediaAttachments;
    $this.c9w_1 = polls;
    $this.d9w_1 = translation;
    return $this;
  }
  get urls() {
    return this.e9r();
  }
  set urls(value) {
    this.f9w(value);
  }
  get accounts() {
    return this.e9j();
  }
  set accounts(value) {
    this.i9w(value);
  }
  get statuses() {
    return this.f9m();
  }
  set statuses(value) {
    this.j9w(value);
  }
  get mediaAttachments() {
    return this.h9n();
  }
  set mediaAttachments(value) {
    this.k9w(value);
  }
  get polls() {
    return this.e9s();
  }
  set polls(value) {
    this.l9w(value);
  }
  get translation() {
    return this.n9w();
  }
  set translation(value) {
    this.m9w(value);
  }
}
class Companion_43 {
  z26() {
    return $serializer_getInstance_42();
  }
}
class $serializer_42 {
  constructor() {
    $serializer_instance_42 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Contact', this, 2);
    tmp0_serialDesc.f18('email', false);
    tmp0_serialDesc.f18('account', true);
    this.o9w_1 = tmp0_serialDesc;
  }
  p9w(encoder, value) {
    var tmp0_desc = this.o9w_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.b12(tmp0_desc, 0, value.email);
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.account == null)) {
      tmp1_output.f12(tmp0_desc, 1, $serializer_getInstance_0(), value.account);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.p9w(encoder, value instanceof InstanceV2Contact ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.o9w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return InstanceV2Contact.r9w(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.o9w_1;
  }
  v18() {
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
  b9r(_set____db54di) {
    this.q9w_1 = _set____db54di;
  }
  i5v() {
    var tmp = this.q9w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('email');
    }
  }
  o9k(_set____db54di) {
    this.account = _set____db54di;
  }
  s9f() {
    return this.account;
  }
  static r9w(seen0, email, account, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_42().o9w_1);
    }
    var $this = createThis(this);
    $this.q9w_1 = email;
    if (0 === (seen0 & 2))
      $this.account = null;
    else
      $this.account = account;
    return $this;
  }
  get email() {
    return this.i5v();
  }
  set email(value) {
    this.b9r(value);
  }
}
class Companion_44 {
  z26() {
    return $serializer_getInstance_43();
  }
}
class $serializer_43 {
  constructor() {
    $serializer_instance_43 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Fields', this, 3);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('value', true);
    tmp0_serialDesc.f18('verified_at', true);
    this.s9w_1 = tmp0_serialDesc;
  }
  t9w(encoder, value) {
    var tmp0_desc = this.s9w_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.value == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.value);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.verifiedAt == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.verifiedAt);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.t9w(encoder, value instanceof InstanceV2Fields ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.s9w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return InstanceV2Fields.u9w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.s9w_1;
  }
  v18() {
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
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  v8q(_set____db54di) {
    this.value = _set____db54di;
  }
  b3() {
    return this.value;
  }
  i9s(_set____db54di) {
    this.verifiedAt = _set____db54di;
  }
  j9s() {
    return this.verifiedAt;
  }
  static u9w(seen0, name, value, verifiedAt, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_43().s9w_1);
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
class Companion_45 {
  constructor() {
    Companion_instance_45 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v9w_1 = [new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance()), null, null, null, null, null];
  }
  z26() {
    return $serializer_getInstance_44();
  }
}
class $serializer_44 {
  constructor() {
    $serializer_instance_44 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2MediaAttachments', this, 6);
    tmp0_serialDesc.f18('supported_mime_types', true);
    tmp0_serialDesc.f18('image_size_limit', true);
    tmp0_serialDesc.f18('image_matrix_limit', true);
    tmp0_serialDesc.f18('video_size_limit', true);
    tmp0_serialDesc.f18('video_frame_rate_limit', true);
    tmp0_serialDesc.f18('video_matrix_limit', true);
    this.w9w_1 = tmp0_serialDesc;
  }
  x9w(encoder, value) {
    var tmp0_desc = this.w9w_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_46().v9w_1;
    var tmp;
    if (tmp1_output.j12(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.supportedMimeTypes;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [];
      tmp = !equals_0(tmp_0, tmp$ret$2);
    }
    if (tmp) {
      tmp1_output.d12(tmp0_desc, 0, tmp2_cached[0], value.supportedMimeTypes);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.imageSizeLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.imageSizeLimit);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.imageMatrixLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 2, value.imageMatrixLimit);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.videoSizeLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 3, value.videoSizeLimit);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.videoFrameRateLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 4, value.videoFrameRateLimit);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.videoMatrixLimit === 0)) {
      tmp1_output.w11(tmp0_desc, 5, value.videoMatrixLimit);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.x9w(encoder, value instanceof InstanceV2MediaAttachments ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.w9w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.l10(tmp0_desc);
    var tmp11_cached = Companion_getInstance_46().v9w_1;
    if (tmp10_input.b11()) {
      tmp4_local0 = tmp10_input.x10(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.q10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.q10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.q10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.q10(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.q10(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.x10(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.q10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.q10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.q10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.q10(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.q10(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp10_input.m10(tmp0_desc);
    return InstanceV2MediaAttachments.y9w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  xv() {
    return this.w9w_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_46().v9w_1[0], IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class InstanceV2MediaAttachments {
  constructor() {
    Companion_getInstance_46();
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
  o9s(_set____db54di) {
    this.supportedMimeTypes = _set____db54di;
  }
  p9s() {
    return this.supportedMimeTypes;
  }
  q9s(_set____db54di) {
    this.imageSizeLimit = _set____db54di;
  }
  r9s() {
    return this.imageSizeLimit;
  }
  s9s(_set____db54di) {
    this.imageMatrixLimit = _set____db54di;
  }
  t9s() {
    return this.imageMatrixLimit;
  }
  u9s(_set____db54di) {
    this.videoSizeLimit = _set____db54di;
  }
  v9s() {
    return this.videoSizeLimit;
  }
  w9s(_set____db54di) {
    this.videoFrameRateLimit = _set____db54di;
  }
  x9s() {
    return this.videoFrameRateLimit;
  }
  y9s(_set____db54di) {
    this.videoMatrixLimit = _set____db54di;
  }
  z9s() {
    return this.videoMatrixLimit;
  }
  static y9w(seen0, supportedMimeTypes, imageSizeLimit, imageMatrixLimit, videoSizeLimit, videoFrameRateLimit, videoMatrixLimit, serializationConstructorMarker) {
    Companion_getInstance_46();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_44().w9w_1);
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
class Companion_46 {
  z26() {
    return $serializer_getInstance_45();
  }
}
class $serializer_45 {
  constructor() {
    $serializer_instance_45 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Polls', this, 4);
    tmp0_serialDesc.f18('max_options', true);
    tmp0_serialDesc.f18('max_characters_per_option', true);
    tmp0_serialDesc.f18('min_expiration', true);
    tmp0_serialDesc.f18('max_expiration', true);
    this.z9w_1 = tmp0_serialDesc;
  }
  a9x(encoder, value) {
    var tmp0_desc = this.z9w_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.maxOptions === 0)) {
      tmp1_output.w11(tmp0_desc, 0, value.maxOptions);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.maxCharactersPerOption === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.maxCharactersPerOption);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.minExpiration === 0)) {
      tmp1_output.w11(tmp0_desc, 2, value.minExpiration);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.maxExpiration === 0)) {
      tmp1_output.w11(tmp0_desc, 3, value.maxExpiration);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.a9x(encoder, value instanceof InstanceV2Polls ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.z9w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_input = decoder.l10(tmp0_desc);
    if (tmp8_input.b11()) {
      tmp4_local0 = tmp8_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.q10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.q10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.q10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.q10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.q10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.q10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.q10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp8_input.m10(tmp0_desc);
    return InstanceV2Polls.b9x(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.z9w_1;
  }
  v18() {
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
  c9x(_set____db54di) {
    this.maxOptions = _set____db54di;
  }
  e9t() {
    return this.maxOptions;
  }
  d9x(_set____db54di) {
    this.maxCharactersPerOption = _set____db54di;
  }
  g9t() {
    return this.maxCharactersPerOption;
  }
  e9x(_set____db54di) {
    this.minExpiration = _set____db54di;
  }
  i9t() {
    return this.minExpiration;
  }
  f9x(_set____db54di) {
    this.maxExpiration = _set____db54di;
  }
  k9t() {
    return this.maxExpiration;
  }
  static b9x(seen0, maxOptions, maxCharactersPerOption, minExpiration, maxExpiration, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_45().z9w_1);
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
class Companion_47 {
  z26() {
    return $serializer_getInstance_46();
  }
}
class $serializer_46 {
  constructor() {
    $serializer_instance_46 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Registrations', this, 3);
    tmp0_serialDesc.f18('enabled', true);
    tmp0_serialDesc.f18('approval_required', true);
    tmp0_serialDesc.f18('message', true);
    this.g9x_1 = tmp0_serialDesc;
  }
  h9x(encoder, value) {
    var tmp0_desc = this.g9x_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.enabled === false)) {
      tmp1_output.t11(tmp0_desc, 0, value.enabled);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.approvalRequired === false)) {
      tmp1_output.t11(tmp0_desc, 1, value.approvalRequired);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.message == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.message);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.h9x(encoder, value instanceof InstanceV2Registrations ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.g9x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.n10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.n10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.n10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.n10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return InstanceV2Registrations.i9x(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.g9x_1;
  }
  v18() {
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
  p6a(_set____db54di) {
    this.enabled = _set____db54di;
  }
  q6a() {
    return this.enabled;
  }
  j9x(_set____db54di) {
    this.approvalRequired = _set____db54di;
  }
  m9r() {
    return this.approvalRequired;
  }
  k9x(_set____db54di) {
    this.message = _set____db54di;
  }
  r() {
    return this.message;
  }
  static i9x(seen0, enabled, approvalRequired, message, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_46().g9x_1);
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
class Companion_48 {
  z26() {
    return $serializer_getInstance_47();
  }
}
class $serializer_47 {
  constructor() {
    $serializer_instance_47 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Rules', this, 2);
    tmp0_serialDesc.f18('id', false);
    tmp0_serialDesc.f18('text', false);
    this.l9x_1 = tmp0_serialDesc;
  }
  m9x(encoder, value) {
    var tmp0_desc = this.l9x_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.b12(tmp0_desc, 0, value.id);
    tmp1_output.b12(tmp0_desc, 1, value.text);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.m9x(encoder, value instanceof InstanceV2Rules ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.l9x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.v10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return InstanceV2Rules.p9x(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.l9x_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class InstanceV2Rules {
  b72(_set____db54di) {
    this.n9x_1 = _set____db54di;
  }
  f22() {
    var tmp = this.n9x_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  y5c(_set____db54di) {
    this.o9x_1 = _set____db54di;
  }
  z5c() {
    var tmp = this.o9x_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('text');
    }
  }
  static p9x(seen0, id, text, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_47().l9x_1);
    }
    var $this = createThis(this);
    $this.n9x_1 = id;
    $this.o9x_1 = text;
    return $this;
  }
  get id() {
    return this.f22();
  }
  set id(value) {
    this.b72(value);
  }
  get text() {
    return this.z5c();
  }
  set text(value) {
    this.y5c(value);
  }
}
class Companion_49 {
  z26() {
    return $serializer_getInstance_48();
  }
}
class $serializer_48 {
  constructor() {
    $serializer_instance_48 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Statuses', this, 3);
    tmp0_serialDesc.f18('max_characters', true);
    tmp0_serialDesc.f18('max_media_attachments', true);
    tmp0_serialDesc.f18('characters_reserved_per_url', true);
    this.q9x_1 = tmp0_serialDesc;
  }
  r9x(encoder, value) {
    var tmp0_desc = this.q9x_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.maxCharacters === 0)) {
      tmp1_output.w11(tmp0_desc, 0, value.maxCharacters);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.maxMediaAttachments === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.maxMediaAttachments);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.charactersReservedPerUrl === 0)) {
      tmp1_output.w11(tmp0_desc, 2, value.charactersReservedPerUrl);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.r9x(encoder, value instanceof InstanceV2Statuses ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.q9x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.q10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.q10(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.q10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.q10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.q10(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return InstanceV2Statuses.s9x(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.q9x_1;
  }
  v18() {
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
  a9u(_set____db54di) {
    this.maxCharacters = _set____db54di;
  }
  b9u() {
    return this.maxCharacters;
  }
  c9u(_set____db54di) {
    this.maxMediaAttachments = _set____db54di;
  }
  d9u() {
    return this.maxMediaAttachments;
  }
  e9u(_set____db54di) {
    this.charactersReservedPerUrl = _set____db54di;
  }
  f9u() {
    return this.charactersReservedPerUrl;
  }
  static s9x(seen0, maxCharacters, maxMediaAttachments, charactersReservedPerUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_48().q9x_1);
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
class Companion_50 {
  z26() {
    return $serializer_getInstance_49();
  }
}
class $serializer_49 {
  constructor() {
    $serializer_instance_49 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Thumbnail', this, 3);
    tmp0_serialDesc.f18('url', false);
    tmp0_serialDesc.f18('blurhash', true);
    tmp0_serialDesc.f18('versions', true);
    this.t9x_1 = tmp0_serialDesc;
  }
  u9x(encoder, value) {
    var tmp0_desc = this.t9x_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.b12(tmp0_desc, 0, value.url);
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.blurhash == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.blurhash);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.versions == null)) {
      tmp1_output.f12(tmp0_desc, 2, $serializer_getInstance_55(), value.versions);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.u9x(encoder, value instanceof InstanceV2Thumbnail ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.t9x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, $serializer_getInstance_55(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, $serializer_getInstance_55(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return InstanceV2Thumbnail.w9x(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.t9x_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_55())];
  }
}
class InstanceV2Thumbnail {
  constructor() {
    this.blurhash = null;
    this.versions = null;
  }
  j8n(_set____db54di) {
    this.v9x_1 = _set____db54di;
  }
  d48() {
    var tmp = this.v9x_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('url');
    }
  }
  i8r(_set____db54di) {
    this.blurhash = _set____db54di;
  }
  j8r() {
    return this.blurhash;
  }
  x9x(_set____db54di) {
    this.versions = _set____db54di;
  }
  y9x() {
    return this.versions;
  }
  static w9x(seen0, url, blurhash, versions, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_49().t9x_1);
    }
    var $this = createThis(this);
    $this.v9x_1 = url;
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
    return this.d48();
  }
  set url(value) {
    this.j8n(value);
  }
}
class Companion_51 {
  z26() {
    return $serializer_getInstance_50();
  }
}
class $serializer_50 {
  constructor() {
    $serializer_instance_50 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Translation', this, 1);
    tmp0_serialDesc.f18('enabled', true);
    this.z9x_1 = tmp0_serialDesc;
  }
  a9y(encoder, value) {
    var tmp0_desc = this.z9x_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.enabled === false)) {
      tmp1_output.t11(tmp0_desc, 0, value.enabled);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.a9y(encoder, value instanceof InstanceV2Translation ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.z9x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.l10(tmp0_desc);
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.n10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.n10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return InstanceV2Translation.b9y(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.z9x_1;
  }
  v18() {
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
  p6a(_set____db54di) {
    this.enabled = _set____db54di;
  }
  q6a() {
    return this.enabled;
  }
  static b9y(seen0, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_50().z9x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.enabled = false;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class Companion_52 {
  z26() {
    return $serializer_getInstance_51();
  }
}
class $serializer_51 {
  constructor() {
    $serializer_instance_51 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Urls', this, 1);
    tmp0_serialDesc.f18('streaming', false);
    this.c9y_1 = tmp0_serialDesc;
  }
  d9y(encoder, value) {
    var tmp0_desc = this.c9y_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.b12(tmp0_desc, 0, value.streaming);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.d9y(encoder, value instanceof InstanceV2Urls ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.c9y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.l10(tmp0_desc);
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return InstanceV2Urls.f9y(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.c9y_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class InstanceV2Urls {
  g9y(_set____db54di) {
    this.e9y_1 = _set____db54di;
  }
  h9y() {
    var tmp = this.e9y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('streaming');
    }
  }
  static f9y(seen0, streaming, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_51().c9y_1);
    }
    var $this = createThis(this);
    $this.e9y_1 = streaming;
    return $this;
  }
  get streaming() {
    return this.h9y();
  }
  set streaming(value) {
    this.g9y(value);
  }
}
class Companion_53 {
  z26() {
    return $serializer_getInstance_52();
  }
}
class $serializer_52 {
  constructor() {
    $serializer_instance_52 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Usage', this, 1);
    tmp0_serialDesc.f18('users', false);
    this.i9y_1 = tmp0_serialDesc;
  }
  j9y(encoder, value) {
    var tmp0_desc = this.i9y_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.d12(tmp0_desc, 0, $serializer_getInstance_53(), value.users);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.j9y(encoder, value instanceof InstanceV2Usage ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.i9y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.l10(tmp0_desc);
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.x10(tmp0_desc, 0, $serializer_getInstance_53(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x10(tmp0_desc, 0, $serializer_getInstance_53(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return InstanceV2Usage.l9y(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.i9y_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_53()];
  }
}
class InstanceV2Usage {
  m9y(_set____db54di) {
    this.k9y_1 = _set____db54di;
  }
  o8m() {
    var tmp = this.k9y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('users');
    }
  }
  static l9y(seen0, users, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_52().i9y_1);
    }
    var $this = createThis(this);
    $this.k9y_1 = users;
    return $this;
  }
  get users() {
    return this.o8m();
  }
  set users(value) {
    this.m9y(value);
  }
}
class Companion_54 {
  z26() {
    return $serializer_getInstance_53();
  }
}
class $serializer_53 {
  constructor() {
    $serializer_instance_53 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Users', this, 1);
    tmp0_serialDesc.f18('active_month', true);
    this.n9y_1 = tmp0_serialDesc;
  }
  o9y(encoder, value) {
    var tmp0_desc = this.n9y_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.activeMonth === 0)) {
      tmp1_output.w11(tmp0_desc, 0, value.activeMonth);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.o9y(encoder, value instanceof InstanceV2Users ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.n9y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_input = decoder.l10(tmp0_desc);
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.q10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return InstanceV2Users.p9y(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.n9y_1;
  }
  v18() {
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
  q9y(_set____db54di) {
    this.activeMonth = _set____db54di;
  }
  r9y() {
    return this.activeMonth;
  }
  static p9y(seen0, activeMonth, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_53().n9y_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.activeMonth = 0;
    else
      $this.activeMonth = activeMonth;
    return $this;
  }
}
class Companion_55 {
  z26() {
    return $serializer_getInstance_54();
  }
}
class $serializer_54 {
  constructor() {
    $serializer_instance_54 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Vapid', this, 1);
    tmp0_serialDesc.f18('public_key', false);
    this.s9y_1 = tmp0_serialDesc;
  }
  t9y(encoder, value) {
    var tmp0_desc = this.s9y_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    tmp1_output.b12(tmp0_desc, 0, value.publicKey);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.t9y(encoder, value instanceof InstanceV2Vapid ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.s9y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.l10(tmp0_desc);
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.v10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.v10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return InstanceV2Vapid.v9y(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.s9y_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class InstanceV2Vapid {
  w9y(_set____db54di) {
    this.u9y_1 = _set____db54di;
  }
  x9y() {
    var tmp = this.u9y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('publicKey');
    }
  }
  static v9y(seen0, publicKey, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_54().s9y_1);
    }
    var $this = createThis(this);
    $this.u9y_1 = publicKey;
    return $this;
  }
  get publicKey() {
    return this.x9y();
  }
  set publicKey(value) {
    this.w9y(value);
  }
}
class Companion_56 {
  z26() {
    return $serializer_getInstance_55();
  }
}
class $serializer_55 {
  constructor() {
    $serializer_instance_55 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Versions', this, 2);
    tmp0_serialDesc.f18('@1x', true);
    tmp0_serialDesc.f18('@2x', true);
    this.y9y_1 = tmp0_serialDesc;
  }
  z9y(encoder, value) {
    var tmp0_desc = this.y9y_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.at1x == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.at1x);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.at2x == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.at2x);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.z9y(encoder, value instanceof InstanceV2Versions ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.y9y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return InstanceV2Versions.a9z(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.y9y_1;
  }
  v18() {
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
  b9z(_set____db54di) {
    this.at1x = _set____db54di;
  }
  c9z() {
    return this.at1x;
  }
  d9z(_set____db54di) {
    this.at2x = _set____db54di;
  }
  e9z() {
    return this.at2x;
  }
  static a9z(seen0, at1x, at2x, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_55().y9y_1);
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
class Companion_57 {
  z26() {
    return $serializer_getInstance_56();
  }
}
class $serializer_56 {
  constructor() {
    $serializer_instance_56 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.meta.Meta', this, 2);
    tmp0_serialDesc.f18('focus', true);
    tmp0_serialDesc.f18('original', true);
    this.f9z_1 = tmp0_serialDesc;
  }
  g9z(encoder, value) {
    var tmp0_desc = this.f9z_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.focus == null)) {
      tmp1_output.f12(tmp0_desc, 0, $serializer_getInstance_57(), value.focus);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.original == null)) {
      tmp1_output.f12(tmp0_desc, 1, $serializer_getInstance_58(), value.original);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.g9z(encoder, value instanceof Meta ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.f9z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, $serializer_getInstance_57(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, $serializer_getInstance_58(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, $serializer_getInstance_57(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, $serializer_getInstance_58(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return Meta.h9z(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.f9z_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_57()), get_nullable($serializer_getInstance_58())];
  }
}
class Meta {
  constructor() {
    this.focus = null;
    this.original = null;
  }
  i9z(_set____db54di) {
    this.focus = _set____db54di;
  }
  j9z() {
    return this.focus;
  }
  k9z(_set____db54di) {
    this.original = _set____db54di;
  }
  l9z() {
    return this.original;
  }
  static h9z(seen0, focus, original, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_56().f9z_1);
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
class Companion_58 {
  z26() {
    return $serializer_getInstance_57();
  }
}
class $serializer_57 {
  constructor() {
    $serializer_instance_57 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.meta.MetaFocus', this, 2);
    tmp0_serialDesc.f18('x', true);
    tmp0_serialDesc.f18('y', true);
    this.m9z_1 = tmp0_serialDesc;
  }
  n9z(encoder, value) {
    var tmp0_desc = this.m9z_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !equals_0(value.x, 0.0)) {
      tmp1_output.y11(tmp0_desc, 0, value.x);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !equals_0(value.y, 0.0)) {
      tmp1_output.y11(tmp0_desc, 1, value.y);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.n9z(encoder, value instanceof MetaFocus ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.m9z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.s10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.s10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.s10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.s10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return MetaFocus.o9z(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.m9z_1;
  }
  v18() {
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
  p9z(_set____db54di) {
    this.x = _set____db54di;
  }
  q9z() {
    return this.x;
  }
  r9z(_set____db54di) {
    this.y = _set____db54di;
  }
  s9z() {
    return this.y;
  }
  static o9z(seen0, x, y, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_57().m9z_1);
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
class Companion_59 {
  z26() {
    return $serializer_getInstance_58();
  }
}
class $serializer_58 {
  constructor() {
    $serializer_instance_58 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.meta.MetaOriginal', this, 4);
    tmp0_serialDesc.f18('width', true);
    tmp0_serialDesc.f18('height', true);
    tmp0_serialDesc.f18('size', true);
    tmp0_serialDesc.f18('aspect', true);
    this.t9z_1 = tmp0_serialDesc;
  }
  u9z(encoder, value) {
    var tmp0_desc = this.t9z_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.width === 0)) {
      tmp1_output.w11(tmp0_desc, 0, value.width);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.height === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.height);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.size == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.size);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !equals_0(value.aspect, 0.0)) {
      tmp1_output.y11(tmp0_desc, 3, value.aspect);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.u9z(encoder, value instanceof MetaOriginal ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.t9z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = 0.0;
    var tmp8_input = decoder.l10(tmp0_desc);
    if (tmp8_input.b11()) {
      tmp4_local0 = tmp8_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.q10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s10(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.q10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.q10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s10(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp8_input.m10(tmp0_desc);
    return MetaOriginal.v9z(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.t9z_1;
  }
  v18() {
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
  q6h(_set____db54di) {
    this.width = _set____db54di;
  }
  r6h() {
    return this.width;
  }
  s6h(_set____db54di) {
    this.height = _set____db54di;
  }
  t6h() {
    return this.height;
  }
  w9z(_set____db54di) {
    this.size = _set____db54di;
  }
  q2() {
    return this.size;
  }
  x9z(_set____db54di) {
    this.aspect = _set____db54di;
  }
  y9z() {
    return this.aspect;
  }
  static v9z(seen0, width, height, size, aspect, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_58().t9z_1);
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
class Companion_60 {
  constructor() {
    Companion_instance_60 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z9z_1 = [null, null, new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance()), null];
  }
  z26() {
    return $serializer_getInstance_59();
  }
}
class $serializer_59 {
  constructor() {
    $serializer_instance_59 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.node.Node', this, 4);
    tmp0_serialDesc.f18('version', true);
    tmp0_serialDesc.f18('software', true);
    tmp0_serialDesc.f18('protocols', true);
    tmp0_serialDesc.f18('openRegistrations', true);
    this.aa0_1 = tmp0_serialDesc;
  }
  ba0(encoder, value) {
    var tmp0_desc = this.aa0_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_61().z9z_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.version == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.version);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.software == null)) {
      tmp1_output.f12(tmp0_desc, 1, $serializer_getInstance_60(), value.software);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.protocols == null)) {
      tmp1_output.f12(tmp0_desc, 2, tmp2_cached[2], value.protocols);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.openRegistrations == null)) {
      tmp1_output.f12(tmp0_desc, 3, BooleanSerializer_getInstance(), value.openRegistrations);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.ba0(encoder, value instanceof Node ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.aa0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.l10(tmp0_desc);
    var tmp9_cached = Companion_getInstance_61().z9z_1;
    if (tmp8_input.b11()) {
      tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, $serializer_getInstance_60(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, $serializer_getInstance_60(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z10(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.z10(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp8_input.m10(tmp0_desc);
    return Node.ca0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.aa0_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_61().z9z_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_60()), get_nullable(tmp0_cached[2]), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Node {
  constructor() {
    Companion_getInstance_61();
    this.version = null;
    this.software = null;
    this.protocols = null;
    this.openRegistrations = null;
  }
  c8u(_set____db54di) {
    this.version = _set____db54di;
  }
  l48() {
    return this.version;
  }
  da0(_set____db54di) {
    this.software = _set____db54di;
  }
  ea0() {
    return this.software;
  }
  fa0(_set____db54di) {
    this.protocols = _set____db54di;
  }
  a44() {
    return this.protocols;
  }
  j8i(_set____db54di) {
    this.openRegistrations = _set____db54di;
  }
  k8i() {
    return this.openRegistrations;
  }
  static ca0(seen0, version, software, protocols, openRegistrations, serializationConstructorMarker) {
    Companion_getInstance_61();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_59().aa0_1);
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
class Companion_61 {
  z26() {
    return $serializer_getInstance_60();
  }
}
class $serializer_60 {
  constructor() {
    $serializer_instance_60 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.node.NodeSoftware', this, 2);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('version', true);
    this.ga0_1 = tmp0_serialDesc;
  }
  ha0(encoder, value) {
    var tmp0_desc = this.ga0_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.version == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.version);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.ha0(encoder, value instanceof NodeSoftware ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.ga0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return NodeSoftware.ia0(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.ga0_1;
  }
  v18() {
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
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  c8u(_set____db54di) {
    this.version = _set____db54di;
  }
  l48() {
    return this.version;
  }
  static ia0(seen0, name, version, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_60().ga0_1);
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
class Companion_62 {
  constructor() {
    Companion_instance_62 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ja0_1 = [new ReferenceArraySerializer(getKClass(NodeInfoLinks), $serializer_getInstance_62())];
  }
  z26() {
    return $serializer_getInstance_61();
  }
}
class $serializer_61 {
  constructor() {
    $serializer_instance_61 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.nodeinfo.NodeInfo', this, 1);
    tmp0_serialDesc.f18('links', true);
    this.ka0_1 = tmp0_serialDesc;
  }
  la0(encoder, value) {
    var tmp0_desc = this.ka0_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_63().ja0_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.links == null)) {
      tmp1_output.f12(tmp0_desc, 0, tmp2_cached[0], value.links);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.la0(encoder, value instanceof NodeInfo ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.ka0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.l10(tmp0_desc);
    var tmp6_cached = Companion_getInstance_63().ja0_1;
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return NodeInfo.ma0(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.ka0_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_63().ja0_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0])];
  }
}
class NodeInfo {
  constructor() {
    Companion_getInstance_63();
    this.links = null;
  }
  na0(_set____db54di) {
    this.links = _set____db54di;
  }
  oa0() {
    return this.links;
  }
  static ma0(seen0, links, serializationConstructorMarker) {
    Companion_getInstance_63();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_61().ka0_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.links = null;
    else
      $this.links = links;
    return $this;
  }
}
class Companion_63 {
  z26() {
    return $serializer_getInstance_62();
  }
}
class $serializer_62 {
  constructor() {
    $serializer_instance_62 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.nodeinfo.NodeInfoLinks', this, 2);
    tmp0_serialDesc.f18('href', true);
    tmp0_serialDesc.f18('rel', true);
    this.pa0_1 = tmp0_serialDesc;
  }
  qa0(encoder, value) {
    var tmp0_desc = this.pa0_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.href == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.href);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.rel == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.rel);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.qa0(encoder, value instanceof NodeInfoLinks ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.pa0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return NodeInfoLinks.ra0(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.pa0_1;
  }
  v18() {
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
  sa0(_set____db54di) {
    this.href = _set____db54di;
  }
  ta0() {
    return this.href;
  }
  ua0(_set____db54di) {
    this.rel = _set____db54di;
  }
  va0() {
    return this.rel;
  }
  static ra0(seen0, href, rel, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_62().pa0_1);
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
class Companion_64 {
  z26() {
    return $serializer_getInstance_63();
  }
}
class $serializer_63 {
  constructor() {
    $serializer_instance_63 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.services.pleroma.PleromaAccount', this, 16);
    tmp0_serialDesc.f18('accepts_chat_messages', true);
    tmp0_serialDesc.f18('allow_following_move', true);
    tmp0_serialDesc.f18('ap_id', true);
    tmp0_serialDesc.f18('chat_token', true);
    tmp0_serialDesc.f18('email', true);
    tmp0_serialDesc.f18('hide_favorites', true);
    tmp0_serialDesc.f18('hide_followers', true);
    tmp0_serialDesc.f18('hide_followers_count', true);
    tmp0_serialDesc.f18('hide_follows', true);
    tmp0_serialDesc.f18('hide_follows_count', true);
    tmp0_serialDesc.f18('is_admin', true);
    tmp0_serialDesc.f18('is_confirmed', true);
    tmp0_serialDesc.f18('is_moderator', true);
    tmp0_serialDesc.f18('skip_thread_containment', true);
    tmp0_serialDesc.f18('unread_conversation_count', true);
    tmp0_serialDesc.f18('unread_notifications_count', true);
    this.wa0_1 = tmp0_serialDesc;
  }
  xa0(encoder, value) {
    var tmp0_desc = this.wa0_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.isAcceptsChatMessages === false)) {
      tmp1_output.t11(tmp0_desc, 0, value.isAcceptsChatMessages);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.isAllowFollowingMove === false)) {
      tmp1_output.t11(tmp0_desc, 1, value.isAllowFollowingMove);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.apId == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.apId);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.chatToken == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.chatToken);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.email == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.email);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.isHideFavorites === false)) {
      tmp1_output.t11(tmp0_desc, 5, value.isHideFavorites);
    }
    if (tmp1_output.j12(tmp0_desc, 6) ? true : !(value.isHideFollowers === false)) {
      tmp1_output.t11(tmp0_desc, 6, value.isHideFollowers);
    }
    if (tmp1_output.j12(tmp0_desc, 7) ? true : !(value.isHideFollowersCount === false)) {
      tmp1_output.t11(tmp0_desc, 7, value.isHideFollowersCount);
    }
    if (tmp1_output.j12(tmp0_desc, 8) ? true : !(value.isHideFollows === false)) {
      tmp1_output.t11(tmp0_desc, 8, value.isHideFollows);
    }
    if (tmp1_output.j12(tmp0_desc, 9) ? true : !(value.isHideFollowsCount === false)) {
      tmp1_output.t11(tmp0_desc, 9, value.isHideFollowsCount);
    }
    if (tmp1_output.j12(tmp0_desc, 10) ? true : !(value.isAdmin === false)) {
      tmp1_output.t11(tmp0_desc, 10, value.isAdmin);
    }
    if (tmp1_output.j12(tmp0_desc, 11) ? true : !(value.isConfirmed === false)) {
      tmp1_output.t11(tmp0_desc, 11, value.isConfirmed);
    }
    if (tmp1_output.j12(tmp0_desc, 12) ? true : !(value.isModerator === false)) {
      tmp1_output.t11(tmp0_desc, 12, value.isModerator);
    }
    if (tmp1_output.j12(tmp0_desc, 13) ? true : !(value.isSkipThreadContainment === false)) {
      tmp1_output.t11(tmp0_desc, 13, value.isSkipThreadContainment);
    }
    if (tmp1_output.j12(tmp0_desc, 14) ? true : !(value.unreadConversationCount === 0)) {
      tmp1_output.w11(tmp0_desc, 14, value.unreadConversationCount);
    }
    if (tmp1_output.j12(tmp0_desc, 15) ? true : !(value.unreadNotificationsCount === 0)) {
      tmp1_output.w11(tmp0_desc, 15, value.unreadNotificationsCount);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.xa0(encoder, value instanceof PleromaAccount ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.wa0_1;
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
    var tmp20_input = decoder.l10(tmp0_desc);
    if (tmp20_input.b11()) {
      tmp4_local0 = tmp20_input.n10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.n10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.n10(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.n10(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.n10(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.n10(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.n10(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.n10(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.n10(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.n10(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.n10(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.q10(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.q10(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.n10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.n10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.n10(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.n10(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.n10(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.n10(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.n10(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.n10(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.n10(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.n10(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.n10(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.q10(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.q10(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp20_input.m10(tmp0_desc);
    return PleromaAccount.ya0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  xv() {
    return this.wa0_1;
  }
  v18() {
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
  za0(_set____db54di) {
    this.isAcceptsChatMessages = _set____db54di;
  }
  aa1() {
    return this.isAcceptsChatMessages;
  }
  ba1(_set____db54di) {
    this.isAllowFollowingMove = _set____db54di;
  }
  ca1() {
    return this.isAllowFollowingMove;
  }
  da1(_set____db54di) {
    this.apId = _set____db54di;
  }
  ea1() {
    return this.apId;
  }
  fa1(_set____db54di) {
    this.chatToken = _set____db54di;
  }
  ga1() {
    return this.chatToken;
  }
  h5v(_set____db54di) {
    this.email = _set____db54di;
  }
  i5v() {
    return this.email;
  }
  ha1(_set____db54di) {
    this.isHideFavorites = _set____db54di;
  }
  ia1() {
    return this.isHideFavorites;
  }
  ja1(_set____db54di) {
    this.isHideFollowers = _set____db54di;
  }
  ka1() {
    return this.isHideFollowers;
  }
  la1(_set____db54di) {
    this.isHideFollowersCount = _set____db54di;
  }
  ma1() {
    return this.isHideFollowersCount;
  }
  na1(_set____db54di) {
    this.isHideFollows = _set____db54di;
  }
  oa1() {
    return this.isHideFollows;
  }
  pa1(_set____db54di) {
    this.isHideFollowsCount = _set____db54di;
  }
  qa1() {
    return this.isHideFollowsCount;
  }
  x95(_set____db54di) {
    this.isAdmin = _set____db54di;
  }
  y95() {
    return this.isAdmin;
  }
  ra1(_set____db54di) {
    this.isConfirmed = _set____db54di;
  }
  sa1() {
    return this.isConfirmed;
  }
  v95(_set____db54di) {
    this.isModerator = _set____db54di;
  }
  w95() {
    return this.isModerator;
  }
  ta1(_set____db54di) {
    this.isSkipThreadContainment = _set____db54di;
  }
  ua1() {
    return this.isSkipThreadContainment;
  }
  va1(_set____db54di) {
    this.unreadConversationCount = _set____db54di;
  }
  wa1() {
    return this.unreadConversationCount;
  }
  b97(_set____db54di) {
    this.unreadNotificationsCount = _set____db54di;
  }
  c97() {
    return this.unreadNotificationsCount;
  }
  static ya0(seen0, isAcceptsChatMessages, isAllowFollowingMove, apId, chatToken, email, isHideFavorites, isHideFollowers, isHideFollowersCount, isHideFollows, isHideFollowsCount, isAdmin, isConfirmed, isModerator, isSkipThreadContainment, unreadConversationCount, unreadNotificationsCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_63().wa0_1);
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
class Companion_65 {
  z26() {
    return $serializer_getInstance_64();
  }
}
class $serializer_64 {
  constructor() {
    $serializer_instance_64 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.services.pleroma.PleromaContent', this, 1);
    tmp0_serialDesc.f18('text/plain', true);
    this.xa1_1 = tmp0_serialDesc;
  }
  ya1(encoder, value) {
    var tmp0_desc = this.xa1_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.textPlain == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.textPlain);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.ya1(encoder, value instanceof PleromaContent ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.xa1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.l10(tmp0_desc);
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return PleromaContent.za1(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.xa1_1;
  }
  v18() {
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
  aa2(_set____db54di) {
    this.textPlain = _set____db54di;
  }
  ba2() {
    return this.textPlain;
  }
  static za1(seen0, textPlain, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_64().xa1_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.textPlain = null;
    else
      $this.textPlain = textPlain;
    return $this;
  }
}
class Companion_66 {
  z26() {
    return $serializer_getInstance_65();
  }
}
class $serializer_65 {
  constructor() {
    $serializer_instance_65 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.services.pleroma.PleromaReaction', this, 3);
    tmp0_serialDesc.f18('count', true);
    tmp0_serialDesc.f18('me', true);
    tmp0_serialDesc.f18('name', true);
    this.ca2_1 = tmp0_serialDesc;
  }
  da2(encoder, value) {
    var tmp0_desc = this.ca2_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.count === 0)) {
      tmp1_output.w11(tmp0_desc, 0, value.count);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.isMe === false)) {
      tmp1_output.t11(tmp0_desc, 1, value.isMe);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.da2(encoder, value instanceof PleromaReaction ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.ca2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.n10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.q10(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.n10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return PleromaReaction.ea2(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.ca2_1;
  }
  v18() {
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
  z5l(_set____db54di) {
    this.count = _set____db54di;
  }
  a5m() {
    return this.count;
  }
  fa2(_set____db54di) {
    this.isMe = _set____db54di;
  }
  ga2() {
    return this.isMe;
  }
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  static ea2(seen0, count, isMe, name, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_65().ca2_1);
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
class Companion_67 {
  constructor() {
    Companion_instance_67 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ha2_1 = [null, null, null, new ReferenceArraySerializer(getKClass(PleromaReaction), $serializer_getInstance_65()), null, null, null, null, null, null, null];
  }
  z26() {
    return $serializer_getInstance_66();
  }
}
class $serializer_66 {
  constructor() {
    $serializer_instance_66 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.services.pleroma.PleromaStatus', this, 11);
    tmp0_serialDesc.f18('content', true);
    tmp0_serialDesc.f18('conversation_id', true);
    tmp0_serialDesc.f18('direct_conversation_id', true);
    tmp0_serialDesc.f18('emoji_reactions', true);
    tmp0_serialDesc.f18('expires_at', true);
    tmp0_serialDesc.f18('in_reply_to_account_acct', true);
    tmp0_serialDesc.f18('local', true);
    tmp0_serialDesc.f18('parent_visible', true);
    tmp0_serialDesc.f18('pinned_at', true);
    tmp0_serialDesc.f18('spoiler_text', true);
    tmp0_serialDesc.f18('thread_muted', true);
    this.ia2_1 = tmp0_serialDesc;
  }
  ja2(encoder, value) {
    var tmp0_desc = this.ia2_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_68().ha2_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.content == null)) {
      tmp1_output.f12(tmp0_desc, 0, $serializer_getInstance_64(), value.content);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.conversationId === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.conversationId);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.directConversationId == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.directConversationId);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.emojiReactions == null)) {
      tmp1_output.f12(tmp0_desc, 3, tmp2_cached[3], value.emojiReactions);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.expiresAt == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.expiresAt);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.inReplyToAccountAcct == null)) {
      tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.inReplyToAccountAcct);
    }
    if (tmp1_output.j12(tmp0_desc, 6) ? true : !(value.isLocal === false)) {
      tmp1_output.t11(tmp0_desc, 6, value.isLocal);
    }
    if (tmp1_output.j12(tmp0_desc, 7) ? true : !(value.isParentVisible === false)) {
      tmp1_output.t11(tmp0_desc, 7, value.isParentVisible);
    }
    if (tmp1_output.j12(tmp0_desc, 8) ? true : !(value.pinnedAt == null)) {
      tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.pinnedAt);
    }
    if (tmp1_output.j12(tmp0_desc, 9) ? true : !(value.spoilerText == null)) {
      tmp1_output.f12(tmp0_desc, 9, $serializer_getInstance_64(), value.spoilerText);
    }
    if (tmp1_output.j12(tmp0_desc, 10) ? true : !(value.isThreadMuted === false)) {
      tmp1_output.t11(tmp0_desc, 10, value.isThreadMuted);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.ja2(encoder, value instanceof PleromaStatus ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.ia2_1;
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
    var tmp15_input = decoder.l10(tmp0_desc);
    var tmp16_cached = Companion_getInstance_68().ha2_1;
    if (tmp15_input.b11()) {
      tmp4_local0 = tmp15_input.z10(tmp0_desc, 0, $serializer_getInstance_64(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.q10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.z10(tmp0_desc, 3, tmp16_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.n10(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.n10(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.z10(tmp0_desc, 9, $serializer_getInstance_64(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.n10(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.z10(tmp0_desc, 0, $serializer_getInstance_64(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.q10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.z10(tmp0_desc, 3, tmp16_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.n10(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.n10(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.z10(tmp0_desc, 9, $serializer_getInstance_64(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.n10(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp15_input.m10(tmp0_desc);
    return PleromaStatus.ka2(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  }
  xv() {
    return this.ia2_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_68().ha2_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_64()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3]), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_64()), BooleanSerializer_getInstance()];
  }
}
class PleromaStatus {
  constructor() {
    Companion_getInstance_68();
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
  la2(_set____db54di) {
    this.content = _set____db54di;
  }
  o26() {
    return this.content;
  }
  ma2(_set____db54di) {
    this.conversationId = _set____db54di;
  }
  na2() {
    return this.conversationId;
  }
  oa2(_set____db54di) {
    this.directConversationId = _set____db54di;
  }
  pa2() {
    return this.directConversationId;
  }
  qa2(_set____db54di) {
    this.emojiReactions = _set____db54di;
  }
  ra2() {
    return this.emojiReactions;
  }
  a91(_set____db54di) {
    this.expiresAt = _set____db54di;
  }
  v7n() {
    return this.expiresAt;
  }
  sa2(_set____db54di) {
    this.inReplyToAccountAcct = _set____db54di;
  }
  ta2() {
    return this.inReplyToAccountAcct;
  }
  ua2(_set____db54di) {
    this.isLocal = _set____db54di;
  }
  va2() {
    return this.isLocal;
  }
  wa2(_set____db54di) {
    this.isParentVisible = _set____db54di;
  }
  xa2() {
    return this.isParentVisible;
  }
  ya2(_set____db54di) {
    this.pinnedAt = _set____db54di;
  }
  za2() {
    return this.pinnedAt;
  }
  aa3(_set____db54di) {
    this.spoilerText = _set____db54di;
  }
  y9d() {
    return this.spoilerText;
  }
  ba3(_set____db54di) {
    this.isThreadMuted = _set____db54di;
  }
  ca3() {
    return this.isThreadMuted;
  }
  static ka2(seen0, content, conversationId, directConversationId, emojiReactions, expiresAt, inReplyToAccountAcct, isLocal, isParentVisible, pinnedAt, spoilerText, isThreadMuted, serializationConstructorMarker) {
    Companion_getInstance_68();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_66().ia2_1);
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
class Companion_68 {
  constructor() {
    this.da3_1 = 'link';
  }
  of(response) {
    try {
      var header = response.t4s_1.h4('link');
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      if (header == null || header.o1()) {
        return null;
      }
      var tmp0 = header.p2(0);
      // Inline function 'kotlin.text.toRegex' call
      // Inline function 'kotlin.text.split' call
      var tmp0_0 = Regex.xh(',\\s?').ji(tmp0, 0);
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.dropLastWhile' call
        if (!tmp0_0.o1()) {
          var iterator = tmp0_0.u2(tmp0_0.q2());
          while (iterator.t7()) {
            // Inline function 'kotlin.text.isEmpty' call
            var this_0 = iterator.v7();
            if (!(charSequenceLength(this_0) === 0)) {
              tmp$ret$5 = take(tmp0_0, iterator.u7() + 1 | 0);
              break $l$block;
            }
          }
        }
        tmp$ret$5 = emptyList();
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_1 = tmp$ret$5;
      var parts = copyToArray(this_1);
      var link = new Link();
      var inductionVariable = 0;
      var last = parts.length;
      while (inductionVariable < last) {
        var part = parts[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.text.toRegex' call
        // Inline function 'kotlin.text.split' call
        var tmp0_1 = Regex.xh(';\\s?').ji(part, 0);
        var tmp$ret$11;
        $l$block_0: {
          // Inline function 'kotlin.collections.dropLastWhile' call
          if (!tmp0_1.o1()) {
            var iterator_0 = tmp0_1.u2(tmp0_1.q2());
            while (iterator_0.t7()) {
              // Inline function 'kotlin.text.isEmpty' call
              var this_2 = iterator_0.v7();
              if (!(charSequenceLength(this_2) === 0)) {
                tmp$ret$11 = take(tmp0_1, iterator_0.u7() + 1 | 0);
                break $l$block_0;
              }
            }
          }
          tmp$ret$11 = emptyList();
        }
        // Inline function 'kotlin.collections.toTypedArray' call
        var this_3 = tmp$ret$11;
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
  ea3(_set____db54di) {
    this.nextUrl = _set____db54di;
  }
  fa3() {
    return this.nextUrl;
  }
  ga3(_set____db54di) {
    this.prevUrl = _set____db54di;
  }
  ha3() {
    return this.prevUrl;
  }
  ia3(_set____db54di) {
    this.nextMaxId = _set____db54di;
  }
  ja3() {
    return this.nextMaxId;
  }
  ka3(_set____db54di) {
    this.prevMinId = _set____db54di;
  }
  la3() {
    return this.prevMinId;
  }
}
class Companion_69 {
  constructor() {
    this.ma3_1 = 'X-RateLimit-Limit';
    this.na3_1 = 'X-RateLimit-Remaining';
    this.oa3_1 = 'X-RateLimit-Reset';
  }
  of(response) {
    try {
      var limit = response.t4s_1.h4('X-RateLimit-Limit');
      var remaining = response.t4s_1.h4('X-RateLimit-Remaining');
      var reset = response.t4s_1.h4('X-RateLimit-Reset');
      // Inline function 'kotlin.also' call
      var this_0 = new RateLimit();
      var tmp;
      if (limit == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp = !limit.o1();
      }
      if (tmp === true) {
        this_0.limit = toInt(limit.p2(0));
      }
      var tmp_0;
      if (remaining == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !remaining.o1();
      }
      if (tmp_0 === true) {
        this_0.remaining = toInt(remaining.p2(0));
      }
      var tmp_1;
      if (reset == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_1 = !reset.o1();
      }
      if (tmp_1 === true) {
        this_0.reset = toInstant(reset.p2(0));
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
  c94(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  d94(_set____db54di) {
    this.remaining = _set____db54di;
  }
  e94() {
    return this.remaining;
  }
  pa3(_set____db54di) {
    this.reset = _set____db54di;
  }
  g94() {
    return this.reset;
  }
}
class Companion_70 {
  constructor() {
    this.qa3_1 = 50;
  }
}
class AbstractResourceImpl {
  constructor(uri) {
    this.va3_1 = uri;
  }
  wa3(_this__u8e3s4, key, value) {
    if (!(value == null)) {
      _this__u8e3s4.k4s(key, value);
    }
    return _this__u8e3s4;
  }
  xa3(_this__u8e3s4, key, values) {
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
        _this__u8e3s4.k4s(tmp, !(element == null) ? element : THROW_CCE());
      }
    }
    return _this__u8e3s4;
  }
  ya3(_this__u8e3s4, key, value) {
    if (!(value == null)) {
      _this__u8e3s4.i4s(key, value);
    }
    return _this__u8e3s4;
  }
  za3(_this__u8e3s4, key, values) {
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
        _this__u8e3s4.i4s(tmp, !(element == null) ? element : THROW_CCE());
      }
    }
    return _this__u8e3s4;
  }
  aa4(_this__u8e3s4, range, service) {
    if (!(range == null)) {
      var tmp0_safe_receiver = range.limit;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var limit = tmp0_safe_receiver;
        if (service === Service_PIXELFED_getInstance() && limit > 50)
          limit = 50;
        _this__u8e3s4.k4s('limit', limit);
      }
      var tmp1_safe_receiver = range.sinceId;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        _this__u8e3s4.k4s('since_id', tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = range.maxId;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        _this__u8e3s4.k4s('max_id', tmp2_safe_receiver);
      }
      var tmp3_safe_receiver = range.minId;
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        _this__u8e3s4.k4s('min_id', tmp3_safe_receiver);
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
    this.sa3_1 = accessToken;
    this.ta3_1 = service;
  }
  ua3() {
    return 'Bearer ' + this.sa3_1;
  }
}
class AccountsResourceImpl$verifyCredentials$slambda {
  constructor($this, this$0) {
    this.ba4_1 = $this;
    this.ca4_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$updateCredentials$slambda {
  constructor($this, this$0, $request) {
    this.fa4_1 = $this;
    this.ga4_1 = this$0;
    this.ha4_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_0.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$account$slambda {
  constructor($this, this$0, $request) {
    this.ia4_1 = $this;
    this.ja4_1 = this$0;
    this.ka4_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_1.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$followers$slambda {
  constructor($this, this$0, $request) {
    this.la4_1 = $this;
    this.ma4_1 = this$0;
    this.na4_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_2.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$following$slambda {
  constructor($this, this$0, $request) {
    this.oa4_1 = $this;
    this.pa4_1 = this$0;
    this.qa4_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_3.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$statuses$slambda {
  constructor($this, this$0, $request) {
    this.ra4_1 = $this;
    this.sa4_1 = this$0;
    this.ta4_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_4.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$follow$slambda {
  constructor($this, this$0, $request) {
    this.ua4_1 = $this;
    this.va4_1 = this$0;
    this.wa4_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_5.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$unfollow$slambda {
  constructor($this, this$0, $request) {
    this.xa4_1 = $this;
    this.ya4_1 = this$0;
    this.za4_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_6.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$block$slambda {
  constructor($this, this$0, $request) {
    this.aa5_1 = $this;
    this.ba5_1 = this$0;
    this.ca5_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_7.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$unblock$slambda {
  constructor($this, this$0, $request) {
    this.da5_1 = $this;
    this.ea5_1 = this$0;
    this.fa5_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_8.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$mute$slambda {
  constructor($this, this$0, $request) {
    this.ga5_1 = $this;
    this.ha5_1 = this$0;
    this.ia5_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_9.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$unmute$slambda {
  constructor($this, this$0, $request) {
    this.ja5_1 = $this;
    this.ka5_1 = this$0;
    this.la5_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_10.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$relationships$slambda {
  constructor($this, this$0, $request) {
    this.ma5_1 = $this;
    this.na5_1 = this$0;
    this.oa5_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_11.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$search$slambda {
  constructor($this, this$0, $request) {
    this.pa5_1 = $this;
    this.qa5_1 = this$0;
    this.ra5_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_12.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl extends AbstractAuthResourceImpl {
  verifyCredentials() {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$verifyCredentials$slambda_0(this, this));
  }
  updateCredentials(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$updateCredentials$slambda_0(this, this, request));
  }
  account(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$account$slambda_0(this, this, request));
  }
  followers(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$followers$slambda_0(this, this, request));
  }
  following(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$following$slambda_0(this, this, request));
  }
  statuses(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$statuses$slambda_0(this, this, request));
  }
  follow(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$follow$slambda_0(this, this, request));
  }
  unfollow(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$unfollow$slambda_0(this, this, request));
  }
  block(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$block$slambda_0(this, this, request));
  }
  unblock(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$unblock$slambda_0(this, this, request));
  }
  mute(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$mute$slambda_0(this, this, request));
  }
  unmute(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$unmute$slambda_0(this, this, request));
  }
  relationships(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$relationships$slambda_0(this, this, request));
  }
  search(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AccountsResourceImpl$search$slambda_0(this, this, request));
  }
}
class AppsResourceImpl$registerApplication$slambda {
  constructor($this, this$0, $request) {
    this.sa5_1 = $this;
    this.ta5_1 = this$0;
    this.ua5_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_13.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AppsResourceImpl extends AbstractResourceImpl {
  registerApplication(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(AppsResourceImpl$registerApplication$slambda_0(this, this, request));
  }
}
class BlocksResourceImpl$blocks$slambda {
  constructor($this, this$0, $request) {
    this.va5_1 = $this;
    this.wa5_1 = this$0;
    this.xa5_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_14.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlocksResourceImpl extends AbstractAuthResourceImpl {
  blocks(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(BlocksResourceImpl$blocks$slambda_0(this, this, request));
  }
}
class EmojisResourceImpl$customEmojis$slambda {
  constructor($this, this$0) {
    this.ya5_1 = $this;
    this.za5_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_15.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class EmojisResourceImpl extends AbstractResourceImpl {
  customEmojis() {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(EmojisResourceImpl$customEmojis$slambda_0(this, this));
  }
}
class FavouritesResourceImpl$favourites$slambda {
  constructor($this, this$0, $request) {
    this.aa6_1 = $this;
    this.ba6_1 = this$0;
    this.ca6_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_16.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FavouritesResourceImpl extends AbstractAuthResourceImpl {
  favourites(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(FavouritesResourceImpl$favourites$slambda_0(this, this, request));
  }
}
class FollowRequestsResourceImpl$followRequests$slambda {
  constructor($this, this$0) {
    this.da6_1 = $this;
    this.ea6_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_17.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FollowRequestsResourceImpl$authorizeFollowRequest$slambda {
  constructor($this, this$0, $request) {
    this.fa6_1 = $this;
    this.ga6_1 = this$0;
    this.ha6_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_18.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FollowRequestsResourceImpl$rejectFollowRequest$slambda {
  constructor($this, this$0, $request) {
    this.ia6_1 = $this;
    this.ja6_1 = this$0;
    this.ka6_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_19.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FollowRequestsResourceImpl extends AbstractAuthResourceImpl {
  followRequests() {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(FollowRequestsResourceImpl$followRequests$slambda_0(this, this));
  }
  authorizeFollowRequest(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.unit' call
    return runBlocking(FollowRequestsResourceImpl$authorizeFollowRequest$slambda_0(this, this, request));
  }
  rejectFollowRequest(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.unit' call
    return runBlocking(FollowRequestsResourceImpl$rejectFollowRequest$slambda_0(this, this, request));
  }
}
class FollowsResourceImpl$remoteFollow$slambda {
  constructor($this, this$0, $request) {
    this.la6_1 = $this;
    this.ma6_1 = this$0;
    this.na6_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_20.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FollowsResourceImpl extends AbstractAuthResourceImpl {
  remoteFollow(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(FollowsResourceImpl$remoteFollow$slambda_0(this, this, request));
  }
}
class InstancesResourceImpl$instanceV1$slambda {
  constructor($this, this$0) {
    this.oa6_1 = $this;
    this.pa6_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_21.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class InstancesResourceImpl$instanceV2$slambda {
  constructor($this, this$0) {
    this.qa6_1 = $this;
    this.ra6_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_22.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class InstancesResourceImpl extends AbstractResourceImpl {
  instanceV1() {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(InstancesResourceImpl$instanceV1$slambda_0(this, this));
  }
  instanceV2() {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(InstancesResourceImpl$instanceV2$slambda_0(this, this));
  }
}
class InternalUtility {
  constructor() {
    InternalUtility_instance = this;
    var tmp = this;
    tmp.ea4_1 = Json(VOID, InternalUtility$json$lambda);
  }
}
class ListsResourceImpl$lists$slambda {
  constructor($this, this$0, $request) {
    this.sa6_1 = $this;
    this.ta6_1 = this$0;
    this.ua6_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_23.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$listAccounts$slambda {
  constructor($this, this$0, $request) {
    this.va6_1 = $this;
    this.wa6_1 = this$0;
    this.xa6_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_24.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$list$slambda {
  constructor($this, this$0, $request) {
    this.ya6_1 = $this;
    this.za6_1 = this$0;
    this.aa7_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_25.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$createList$slambda {
  constructor($this, this$0, $request) {
    this.ba7_1 = $this;
    this.ca7_1 = this$0;
    this.da7_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_26.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$updateList$slambda {
  constructor($this, this$0, $request) {
    this.ea7_1 = $this;
    this.fa7_1 = this$0;
    this.ga7_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_27.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$deleteList$slambda {
  constructor($this, this$0, $request) {
    this.ha7_1 = $this;
    this.ia7_1 = this$0;
    this.ja7_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_28.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$addAccountsToList$slambda {
  constructor($this, this$0, $request) {
    this.ka7_1 = $this;
    this.la7_1 = this$0;
    this.ma7_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_29.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$deleteAccountsToList$slambda {
  constructor($this, this$0, $request) {
    this.na7_1 = $this;
    this.oa7_1 = this$0;
    this.pa7_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_30.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl extends AbstractAuthResourceImpl {
  lists(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(ListsResourceImpl$lists$slambda_0(this, this, request));
  }
  listAccounts(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(ListsResourceImpl$listAccounts$slambda_0(this, this, request));
  }
  list(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(ListsResourceImpl$list$slambda_0(this, this, request));
  }
  createList(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(ListsResourceImpl$createList$slambda_0(this, this, request));
  }
  updateList(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(ListsResourceImpl$updateList$slambda_0(this, this, request));
  }
  deleteList(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.unit' call
    return runBlocking(ListsResourceImpl$deleteList$slambda_0(this, this, request));
  }
  addAccountsToList(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.unit' call
    return runBlocking(ListsResourceImpl$addAccountsToList$slambda_0(this, this, request));
  }
  deleteAccountsToList(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.unit' call
    return runBlocking(ListsResourceImpl$deleteAccountsToList$slambda_0(this, this, request));
  }
}
class MastodonImpl {
  constructor(uri, accessToken, service) {
    this.qa7_1 = uri;
    this.ra7_1 = accessToken;
    this.sa7_1 = service;
    this.ta7_1 = new AppsResourceImpl(this.qa7_1);
    this.ua7_1 = new OAuthResourceImpl(this.qa7_1);
    this.va7_1 = new NodesResourceImpl(this.qa7_1);
    this.wa7_1 = new EmojisResourceImpl(this.qa7_1);
    this.xa7_1 = new InstancesResourceImpl(this.qa7_1);
    this.ya7_1 = new SearchResourceImpl(this.qa7_1, this.ra7_1);
    this.za7_1 = new MediasResourceImpl(this.qa7_1, this.ra7_1);
    this.aa8_1 = new TrendsResourceImpl(this.qa7_1, this.ra7_1);
    this.ba8_1 = new ListsResourceImpl(this.qa7_1, this.ra7_1);
    this.ca8_1 = new PollsResourceImpl(this.qa7_1, this.ra7_1);
    this.da8_1 = new MutesResourceImpl(this.qa7_1, this.ra7_1);
    this.ea8_1 = new BlocksResourceImpl(this.qa7_1, this.ra7_1);
    this.fa8_1 = new ReportsResourceImpl(this.qa7_1, this.ra7_1);
    this.ga8_1 = new FollowsResourceImpl(this.qa7_1, this.ra7_1);
    this.ha8_1 = new FollowRequestsResourceImpl(this.qa7_1, this.ra7_1);
    var tmp = this;
    tmp.ia8_1 = new AccountsResourceImpl(this.qa7_1, this.ra7_1, MastodonImpl$accounts$lambda(this));
    var tmp_0 = this;
    tmp_0.ja8_1 = new StatusesResourceImpl(this.qa7_1, this.ra7_1, MastodonImpl$statuses$lambda(this));
    var tmp_1 = this;
    tmp_1.ka8_1 = new TimelinesResourceImpl(this.qa7_1, this.ra7_1, MastodonImpl$timelines$lambda(this));
    var tmp_2 = this;
    tmp_2.la8_1 = new FavouritesResourceImpl(this.qa7_1, this.ra7_1, MastodonImpl$favourites$lambda(this));
    var tmp_3 = this;
    tmp_3.ma8_1 = new NotificationsResourceImpl(this.qa7_1, this.ra7_1, MastodonImpl$notifications$lambda(this));
    this.na8_1 = this.sa7_1;
  }
  uri() {
    return this.qa7_1;
  }
  accessToken() {
    return this.ra7_1;
  }
  service() {
    var tmp0_elvis_lhs = this.na8_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      var tmp0_safe_receiver = this.va7_1.nodeInfo().data.software;
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
      this.na8_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  apps() {
    return this.ta7_1;
  }
  oauth() {
    return this.ua7_1;
  }
  nodes() {
    return this.va7_1;
  }
  emojis() {
    return this.wa7_1;
  }
  instances() {
    return this.xa7_1;
  }
  search() {
    return this.ya7_1;
  }
  medias() {
    return this.za7_1;
  }
  trends() {
    return this.aa8_1;
  }
  lists() {
    return this.ba8_1;
  }
  polls() {
    return this.ca8_1;
  }
  mutes() {
    return this.da8_1;
  }
  blocks() {
    return this.ea8_1;
  }
  reports() {
    return this.fa8_1;
  }
  follows() {
    return this.ga8_1;
  }
  followRequests() {
    return this.ha8_1;
  }
  accounts() {
    return this.ia8_1;
  }
  statuses() {
    return this.ja8_1;
  }
  timelines() {
    return this.ka8_1;
  }
  favourites() {
    return this.la8_1;
  }
  notifications() {
    return this.ma8_1;
  }
}
class MediasResourceImpl$postMedia$slambda {
  constructor($this, this$0, $request) {
    this.oa8_1 = $this;
    this.pa8_1 = this$0;
    this.qa8_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_31.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediasResourceImpl extends AbstractAuthResourceImpl {
  postMedia(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(MediasResourceImpl$postMedia$slambda_0(this, this, request));
  }
}
class MutesResourceImpl$mutes$slambda {
  constructor($this, this$0) {
    this.ra8_1 = $this;
    this.sa8_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_32.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MutesResourceImpl extends AbstractAuthResourceImpl {
  mutes() {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(MutesResourceImpl$mutes$slambda_0(this, this));
  }
}
class NodesResourceImpl$nodeInfo$slambda {
  constructor(this$0) {
    this.ta8_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_33.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NodesResourceImpl extends AbstractResourceImpl {
  nodeInfo() {
    return runBlocking(NodesResourceImpl$nodeInfo$slambda_0(this));
  }
}
class NotificationsResourceImpl$notifications$slambda {
  constructor($this, this$0, $request) {
    this.ua8_1 = $this;
    this.va8_1 = this$0;
    this.wa8_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_34.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$notification$slambda {
  constructor($this, this$0, $request) {
    this.xa8_1 = $this;
    this.ya8_1 = this$0;
    this.za8_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_35.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$clearNotifications$slambda {
  constructor($this, this$0) {
    this.aa9_1 = $this;
    this.ba9_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_36.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$subscription$slambda {
  constructor($this, this$0) {
    this.ca9_1 = $this;
    this.da9_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_37.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$pushSubscription$slambda {
  constructor($this, this$0, $request) {
    this.ea9_1 = $this;
    this.fa9_1 = this$0;
    this.ga9_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_38.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$editSubscription$slambda {
  constructor($this, this$0, $request) {
    this.ha9_1 = $this;
    this.ia9_1 = this$0;
    this.ja9_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_39.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl extends AbstractAuthResourceImpl {
  notifications(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(NotificationsResourceImpl$notifications$slambda_0(this, this, request));
  }
  notification(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(NotificationsResourceImpl$notification$slambda_0(this, this, request));
  }
  clearNotifications() {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.unit' call
    return runBlocking(NotificationsResourceImpl$clearNotifications$slambda_0(this, this));
  }
  subscription() {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(NotificationsResourceImpl$subscription$slambda_0(this, this));
  }
  pushSubscription(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(NotificationsResourceImpl$pushSubscription$slambda_0(this, this, request));
  }
  editSubscription(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(NotificationsResourceImpl$editSubscription$slambda_0(this, this, request));
  }
}
class OAuthResourceImpl$issueAccessTokenWithCredentials$slambda {
  constructor($this, this$0, $request) {
    this.ka9_1 = $this;
    this.la9_1 = this$0;
    this.ma9_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_40.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class OAuthResourceImpl$issueAccessTokenWithAuthorizationCode$slambda {
  constructor($this, this$0, $request) {
    this.na9_1 = $this;
    this.oa9_1 = this$0;
    this.pa9_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_41.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class OAuthResourceImpl$refreshAccessToken$slambda {
  constructor($this, this$0, $request) {
    this.qa9_1 = $this;
    this.ra9_1 = this$0;
    this.sa9_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_42.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class OAuthResourceImpl$authorizationUrl$slambda {
  constructor(this$0, $request) {
    this.ta9_1 = this$0;
    this.ua9_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    // Inline function 'kotlin.apply' call
    var this_0 = new URLBuilder();
    this_0.e3u(Companion_getInstance().g3u_1);
    this_0.v3s_1 = Url(this.ta9_1.va3_1).i3t_1;
    set_encodedPath(this_0, '/oauth/authorize');
    this_0.e3t_1.c3d('response_type', 'code');
    this_0.e3t_1.c3d('client_id', ensureNotNull(this.ua9_1.clientId));
    this_0.e3t_1.c3d('redirect_uri', ensureNotNull(this.ua9_1.redirectUri));
    this_0.e3t_1.c3d('scope', ensureNotNull(this.ua9_1.scopes));
    return new Response(this_0.r3u());
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class OAuthResourceImpl extends AbstractResourceImpl {
  issueAccessTokenWithCredentials(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(OAuthResourceImpl$issueAccessTokenWithCredentials$slambda_0(this, this, request));
  }
  issueAccessTokenWithAuthorizationCode(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(OAuthResourceImpl$issueAccessTokenWithAuthorizationCode$slambda_0(this, this, request));
  }
  refreshAccessToken(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(OAuthResourceImpl$refreshAccessToken$slambda_0(this, this, request));
  }
  authorizationUrl(request) {
    return runBlocking(OAuthResourceImpl$authorizationUrl$slambda_0(this, request));
  }
}
class PollsResourceImpl$votePoll$slambda {
  constructor($this, this$0, $request) {
    this.va9_1 = $this;
    this.wa9_1 = this$0;
    this.xa9_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_43.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PollsResourceImpl extends AbstractAuthResourceImpl {
  votePoll(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(PollsResourceImpl$votePoll$slambda_0(this, this, request));
  }
}
class ReportsResourceImpl$reports$slambda {
  constructor($this, this$0) {
    this.ya9_1 = $this;
    this.za9_1 = this$0;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_44.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ReportsResourceImpl$postReport$slambda {
  constructor($this, this$0, $request) {
    this.aaa_1 = $this;
    this.baa_1 = this$0;
    this.caa_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_45.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ReportsResourceImpl extends AbstractAuthResourceImpl {
  reports() {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(ReportsResourceImpl$reports$slambda_0(this, this));
  }
  postReport(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(ReportsResourceImpl$postReport$slambda_0(this, this, request));
  }
}
class SearchResourceImpl$search$slambda {
  constructor($this, this$0, $request) {
    this.daa_1 = $this;
    this.eaa_1 = this$0;
    this.faa_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_46.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class SearchResourceImpl extends AbstractAuthResourceImpl {
  search(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(SearchResourceImpl$search$slambda_0(this, this, request));
  }
}
class StatusesResourceImpl$status$slambda {
  constructor($this, this$0, $request) {
    this.gaa_1 = $this;
    this.haa_1 = this$0;
    this.iaa_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_47.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$context$slambda {
  constructor($this, this$0, $request) {
    this.jaa_1 = $this;
    this.kaa_1 = this$0;
    this.laa_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_48.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$card$slambda {
  constructor($this, this$0, $request) {
    this.maa_1 = $this;
    this.naa_1 = this$0;
    this.oaa_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_49.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$rebloggedBy$slambda {
  constructor($this, this$0, $request) {
    this.paa_1 = $this;
    this.qaa_1 = this$0;
    this.raa_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_50.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$favouritedBy$slambda {
  constructor($this, this$0, $request) {
    this.saa_1 = $this;
    this.taa_1 = this$0;
    this.uaa_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_51.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$postStatus$slambda {
  constructor($this, this$0, $request) {
    this.vaa_1 = $this;
    this.waa_1 = this$0;
    this.xaa_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_52.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$deleteStatus$slambda {
  constructor($this, this$0, $request) {
    this.yaa_1 = $this;
    this.zaa_1 = this$0;
    this.aab_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_53.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$reblog$slambda {
  constructor($this, this$0, $request) {
    this.bab_1 = $this;
    this.cab_1 = this$0;
    this.dab_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_54.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$unreblog$slambda {
  constructor($this, this$0, $request) {
    this.eab_1 = $this;
    this.fab_1 = this$0;
    this.gab_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_55.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$favourite$slambda {
  constructor($this, this$0, $request) {
    this.hab_1 = $this;
    this.iab_1 = this$0;
    this.jab_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_56.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$unfavourite$slambda {
  constructor($this, this$0, $request) {
    this.kab_1 = $this;
    this.lab_1 = this$0;
    this.mab_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_57.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl extends AbstractAuthResourceImpl {
  status(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$status$slambda_0(this, this, request));
  }
  context(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$context$slambda_0(this, this, request));
  }
  card(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$card$slambda_0(this, this, request));
  }
  rebloggedBy(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$rebloggedBy$slambda_0(this, this, request));
  }
  favouritedBy(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$favouritedBy$slambda_0(this, this, request));
  }
  postStatus(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$postStatus$slambda_0(this, this, request));
  }
  deleteStatus(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.unit' call
    return runBlocking(StatusesResourceImpl$deleteStatus$slambda_0(this, this, request));
  }
  reblog(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$reblog$slambda_0(this, this, request));
  }
  unreblog(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$unreblog$slambda_0(this, this, request));
  }
  favourite(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$favourite$slambda_0(this, this, request));
  }
  unfavourite(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(StatusesResourceImpl$unfavourite$slambda_0(this, this, request));
  }
}
class TimelinesResourceImpl$homeTimeline$slambda {
  constructor($this, this$0, $request) {
    this.nab_1 = $this;
    this.oab_1 = this$0;
    this.pab_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_58.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl$publicTimeline$slambda {
  constructor($this, this$0, $request) {
    this.qab_1 = $this;
    this.rab_1 = this$0;
    this.sab_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_59.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl$hashtagTimeline$slambda {
  constructor($this, this$0, $request) {
    this.tab_1 = $this;
    this.uab_1 = this$0;
    this.vab_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_60.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl$listTimeline$slambda {
  constructor($this, this$0, $request) {
    this.wab_1 = $this;
    this.xab_1 = this$0;
    this.yab_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_61.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl$conversations$slambda {
  constructor($this, this$0, $request) {
    this.zab_1 = $this;
    this.aac_1 = this$0;
    this.bac_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_62.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl extends AbstractAuthResourceImpl {
  homeTimeline(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(TimelinesResourceImpl$homeTimeline$slambda_0(this, this, request));
  }
  publicTimeline(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(TimelinesResourceImpl$publicTimeline$slambda_0(this, this, request));
  }
  hashtagTimeline(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(TimelinesResourceImpl$hashtagTimeline$slambda_0(this, this, request));
  }
  listTimeline(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(TimelinesResourceImpl$listTimeline$slambda_0(this, this, request));
  }
  conversations(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(TimelinesResourceImpl$conversations$slambda_0(this, this, request));
  }
}
class TrendsResourceImpl$trends$slambda {
  constructor($this, this$0, $request) {
    this.cac_1 = $this;
    this.dac_1 = this$0;
    this.eac_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_63.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TrendsResourceImpl extends AbstractAuthResourceImpl {
  trends(request) {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.exec' call
    return runBlocking(TrendsResourceImpl$trends$slambda_0(this, this, request));
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.da4_1 = Application_getInstance().i3i_1.toString();
  }
}
//endregion
function init_work_socialhub_kmastodon_MastodonException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.p9b_1);
  _this__u8e3s4.n9b_1 = null;
  _this__u8e3s4.o9b_1 = null;
}
var MastodonFactory_instance;
function MastodonFactory_getInstance() {
  return MastodonFactory_instance;
}
var Service_MASTODON_instance;
var Service_PIXELFED_instance;
var Service_PLEROMA_instance;
var Companion_instance;
function Companion_getInstance_0() {
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
function Companion_getInstance_1() {
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var Companion_instance_1;
function Companion_getInstance_2() {
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
function Companion_getInstance_3() {
  return Companion_instance_2;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
var Companion_instance_3;
function Companion_getInstance_4() {
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
function Companion_getInstance_5() {
  return Companion_instance_4;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_3();
  return $serializer_instance_3;
}
var Companion_instance_5;
function Companion_getInstance_6() {
  return Companion_instance_5;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_4();
  return $serializer_instance_4;
}
var Companion_instance_6;
function Companion_getInstance_7() {
  return Companion_instance_6;
}
var $serializer_instance_5;
function $serializer_getInstance_5() {
  if ($serializer_instance_5 === VOID)
    new $serializer_5();
  return $serializer_instance_5;
}
var Companion_instance_7;
function Companion_getInstance_8() {
  return Companion_instance_7;
}
var $serializer_instance_6;
function $serializer_getInstance_6() {
  if ($serializer_instance_6 === VOID)
    new $serializer_6();
  return $serializer_instance_6;
}
var Companion_instance_8;
function Companion_getInstance_9() {
  return Companion_instance_8;
}
var $serializer_instance_7;
function $serializer_getInstance_7() {
  if ($serializer_instance_7 === VOID)
    new $serializer_7();
  return $serializer_instance_7;
}
var Companion_instance_9;
function Companion_getInstance_10() {
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
var Companion_instance_10;
function Companion_getInstance_11() {
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
function Companion_getInstance_12() {
  return Companion_instance_11;
}
var $serializer_instance_10;
function $serializer_getInstance_10() {
  if ($serializer_instance_10 === VOID)
    new $serializer_10();
  return $serializer_instance_10;
}
var Companion_instance_12;
function Companion_getInstance_13() {
  return Companion_instance_12;
}
var $serializer_instance_11;
function $serializer_getInstance_11() {
  if ($serializer_instance_11 === VOID)
    new $serializer_11();
  return $serializer_instance_11;
}
var Companion_instance_13;
function Companion_getInstance_14() {
  return Companion_instance_13;
}
var $serializer_instance_12;
function $serializer_getInstance_12() {
  if ($serializer_instance_12 === VOID)
    new $serializer_12();
  return $serializer_instance_12;
}
var Companion_instance_14;
function Companion_getInstance_15() {
  return Companion_instance_14;
}
var $serializer_instance_13;
function $serializer_getInstance_13() {
  if ($serializer_instance_13 === VOID)
    new $serializer_13();
  return $serializer_instance_13;
}
var Companion_instance_15;
function Companion_getInstance_16() {
  return Companion_instance_15;
}
var $serializer_instance_14;
function $serializer_getInstance_14() {
  if ($serializer_instance_14 === VOID)
    new $serializer_14();
  return $serializer_instance_14;
}
var Companion_instance_16;
function Companion_getInstance_17() {
  return Companion_instance_16;
}
var $serializer_instance_15;
function $serializer_getInstance_15() {
  if ($serializer_instance_15 === VOID)
    new $serializer_15();
  return $serializer_instance_15;
}
var Companion_instance_17;
function Companion_getInstance_18() {
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
function Companion_getInstance_19() {
  return Companion_instance_18;
}
var $serializer_instance_17;
function $serializer_getInstance_17() {
  if ($serializer_instance_17 === VOID)
    new $serializer_17();
  return $serializer_instance_17;
}
var Companion_instance_19;
function Companion_getInstance_20() {
  return Companion_instance_19;
}
var $serializer_instance_18;
function $serializer_getInstance_18() {
  if ($serializer_instance_18 === VOID)
    new $serializer_18();
  return $serializer_instance_18;
}
var Companion_instance_20;
function Companion_getInstance_21() {
  return Companion_instance_20;
}
var $serializer_instance_19;
function $serializer_getInstance_19() {
  if ($serializer_instance_19 === VOID)
    new $serializer_19();
  return $serializer_instance_19;
}
var Companion_instance_21;
function Companion_getInstance_22() {
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
function Companion_getInstance_23() {
  return Companion_instance_22;
}
var $serializer_instance_21;
function $serializer_getInstance_21() {
  if ($serializer_instance_21 === VOID)
    new $serializer_21();
  return $serializer_instance_21;
}
var Companion_instance_23;
function Companion_getInstance_24() {
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
var Companion_instance_24;
function Companion_getInstance_25() {
  return Companion_instance_24;
}
var $serializer_instance_23;
function $serializer_getInstance_23() {
  if ($serializer_instance_23 === VOID)
    new $serializer_23();
  return $serializer_instance_23;
}
var Companion_instance_25;
function Companion_getInstance_26() {
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
function Companion_getInstance_27() {
  if (Companion_instance_26 === VOID)
    new Companion_26();
  return Companion_instance_26;
}
var $serializer_instance_25;
function $serializer_getInstance_25() {
  if ($serializer_instance_25 === VOID)
    new $serializer_25();
  return $serializer_instance_25;
}
var Companion_instance_27;
function Companion_getInstance_28() {
  return Companion_instance_27;
}
var $serializer_instance_26;
function $serializer_getInstance_26() {
  if ($serializer_instance_26 === VOID)
    new $serializer_26();
  return $serializer_instance_26;
}
var Companion_instance_28;
function Companion_getInstance_29() {
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
function Companion_getInstance_30() {
  return Companion_instance_29;
}
var $serializer_instance_28;
function $serializer_getInstance_28() {
  if ($serializer_instance_28 === VOID)
    new $serializer_28();
  return $serializer_instance_28;
}
var Companion_instance_30;
function Companion_getInstance_31() {
  return Companion_instance_30;
}
var $serializer_instance_29;
function $serializer_getInstance_29() {
  if ($serializer_instance_29 === VOID)
    new $serializer_29();
  return $serializer_instance_29;
}
var Companion_instance_31;
function Companion_getInstance_32() {
  if (Companion_instance_31 === VOID)
    new Companion_31();
  return Companion_instance_31;
}
var $serializer_instance_30;
function $serializer_getInstance_30() {
  if ($serializer_instance_30 === VOID)
    new $serializer_30();
  return $serializer_instance_30;
}
var Companion_instance_32;
function Companion_getInstance_33() {
  return Companion_instance_32;
}
var $serializer_instance_31;
function $serializer_getInstance_31() {
  if ($serializer_instance_31 === VOID)
    new $serializer_31();
  return $serializer_instance_31;
}
var Companion_instance_33;
function Companion_getInstance_34() {
  return Companion_instance_33;
}
var $serializer_instance_32;
function $serializer_getInstance_32() {
  if ($serializer_instance_32 === VOID)
    new $serializer_32();
  return $serializer_instance_32;
}
var Companion_instance_34;
function Companion_getInstance_35() {
  if (Companion_instance_34 === VOID)
    new Companion_34();
  return Companion_instance_34;
}
var $serializer_instance_33;
function $serializer_getInstance_33() {
  if ($serializer_instance_33 === VOID)
    new $serializer_33();
  return $serializer_instance_33;
}
var Companion_instance_35;
function Companion_getInstance_36() {
  return Companion_instance_35;
}
var $serializer_instance_34;
function $serializer_getInstance_34() {
  if ($serializer_instance_34 === VOID)
    new $serializer_34();
  return $serializer_instance_34;
}
var Companion_instance_36;
function Companion_getInstance_37() {
  return Companion_instance_36;
}
var $serializer_instance_35;
function $serializer_getInstance_35() {
  if ($serializer_instance_35 === VOID)
    new $serializer_35();
  return $serializer_instance_35;
}
var Companion_instance_37;
function Companion_getInstance_38() {
  return Companion_instance_37;
}
var $serializer_instance_36;
function $serializer_getInstance_36() {
  if ($serializer_instance_36 === VOID)
    new $serializer_36();
  return $serializer_instance_36;
}
var Companion_instance_38;
function Companion_getInstance_39() {
  return Companion_instance_38;
}
var $serializer_instance_37;
function $serializer_getInstance_37() {
  if ($serializer_instance_37 === VOID)
    new $serializer_37();
  return $serializer_instance_37;
}
var Companion_instance_39;
function Companion_getInstance_40() {
  return Companion_instance_39;
}
var $serializer_instance_38;
function $serializer_getInstance_38() {
  if ($serializer_instance_38 === VOID)
    new $serializer_38();
  return $serializer_instance_38;
}
var Companion_instance_40;
function Companion_getInstance_41() {
  if (Companion_instance_40 === VOID)
    new Companion_40();
  return Companion_instance_40;
}
var $serializer_instance_39;
function $serializer_getInstance_39() {
  if ($serializer_instance_39 === VOID)
    new $serializer_39();
  return $serializer_instance_39;
}
var Companion_instance_41;
function Companion_getInstance_42() {
  return Companion_instance_41;
}
var $serializer_instance_40;
function $serializer_getInstance_40() {
  if ($serializer_instance_40 === VOID)
    new $serializer_40();
  return $serializer_instance_40;
}
var Companion_instance_42;
function Companion_getInstance_43() {
  return Companion_instance_42;
}
var $serializer_instance_41;
function $serializer_getInstance_41() {
  if ($serializer_instance_41 === VOID)
    new $serializer_41();
  return $serializer_instance_41;
}
var Companion_instance_43;
function Companion_getInstance_44() {
  return Companion_instance_43;
}
var $serializer_instance_42;
function $serializer_getInstance_42() {
  if ($serializer_instance_42 === VOID)
    new $serializer_42();
  return $serializer_instance_42;
}
var Companion_instance_44;
function Companion_getInstance_45() {
  return Companion_instance_44;
}
var $serializer_instance_43;
function $serializer_getInstance_43() {
  if ($serializer_instance_43 === VOID)
    new $serializer_43();
  return $serializer_instance_43;
}
var Companion_instance_45;
function Companion_getInstance_46() {
  if (Companion_instance_45 === VOID)
    new Companion_45();
  return Companion_instance_45;
}
var $serializer_instance_44;
function $serializer_getInstance_44() {
  if ($serializer_instance_44 === VOID)
    new $serializer_44();
  return $serializer_instance_44;
}
var Companion_instance_46;
function Companion_getInstance_47() {
  return Companion_instance_46;
}
var $serializer_instance_45;
function $serializer_getInstance_45() {
  if ($serializer_instance_45 === VOID)
    new $serializer_45();
  return $serializer_instance_45;
}
var Companion_instance_47;
function Companion_getInstance_48() {
  return Companion_instance_47;
}
var $serializer_instance_46;
function $serializer_getInstance_46() {
  if ($serializer_instance_46 === VOID)
    new $serializer_46();
  return $serializer_instance_46;
}
var Companion_instance_48;
function Companion_getInstance_49() {
  return Companion_instance_48;
}
var $serializer_instance_47;
function $serializer_getInstance_47() {
  if ($serializer_instance_47 === VOID)
    new $serializer_47();
  return $serializer_instance_47;
}
var Companion_instance_49;
function Companion_getInstance_50() {
  return Companion_instance_49;
}
var $serializer_instance_48;
function $serializer_getInstance_48() {
  if ($serializer_instance_48 === VOID)
    new $serializer_48();
  return $serializer_instance_48;
}
var Companion_instance_50;
function Companion_getInstance_51() {
  return Companion_instance_50;
}
var $serializer_instance_49;
function $serializer_getInstance_49() {
  if ($serializer_instance_49 === VOID)
    new $serializer_49();
  return $serializer_instance_49;
}
var Companion_instance_51;
function Companion_getInstance_52() {
  return Companion_instance_51;
}
var $serializer_instance_50;
function $serializer_getInstance_50() {
  if ($serializer_instance_50 === VOID)
    new $serializer_50();
  return $serializer_instance_50;
}
var Companion_instance_52;
function Companion_getInstance_53() {
  return Companion_instance_52;
}
var $serializer_instance_51;
function $serializer_getInstance_51() {
  if ($serializer_instance_51 === VOID)
    new $serializer_51();
  return $serializer_instance_51;
}
var Companion_instance_53;
function Companion_getInstance_54() {
  return Companion_instance_53;
}
var $serializer_instance_52;
function $serializer_getInstance_52() {
  if ($serializer_instance_52 === VOID)
    new $serializer_52();
  return $serializer_instance_52;
}
var Companion_instance_54;
function Companion_getInstance_55() {
  return Companion_instance_54;
}
var $serializer_instance_53;
function $serializer_getInstance_53() {
  if ($serializer_instance_53 === VOID)
    new $serializer_53();
  return $serializer_instance_53;
}
var Companion_instance_55;
function Companion_getInstance_56() {
  return Companion_instance_55;
}
var $serializer_instance_54;
function $serializer_getInstance_54() {
  if ($serializer_instance_54 === VOID)
    new $serializer_54();
  return $serializer_instance_54;
}
var Companion_instance_56;
function Companion_getInstance_57() {
  return Companion_instance_56;
}
var $serializer_instance_55;
function $serializer_getInstance_55() {
  if ($serializer_instance_55 === VOID)
    new $serializer_55();
  return $serializer_instance_55;
}
var Companion_instance_57;
function Companion_getInstance_58() {
  return Companion_instance_57;
}
var $serializer_instance_56;
function $serializer_getInstance_56() {
  if ($serializer_instance_56 === VOID)
    new $serializer_56();
  return $serializer_instance_56;
}
var Companion_instance_58;
function Companion_getInstance_59() {
  return Companion_instance_58;
}
var $serializer_instance_57;
function $serializer_getInstance_57() {
  if ($serializer_instance_57 === VOID)
    new $serializer_57();
  return $serializer_instance_57;
}
var Companion_instance_59;
function Companion_getInstance_60() {
  return Companion_instance_59;
}
var $serializer_instance_58;
function $serializer_getInstance_58() {
  if ($serializer_instance_58 === VOID)
    new $serializer_58();
  return $serializer_instance_58;
}
var Companion_instance_60;
function Companion_getInstance_61() {
  if (Companion_instance_60 === VOID)
    new Companion_60();
  return Companion_instance_60;
}
var $serializer_instance_59;
function $serializer_getInstance_59() {
  if ($serializer_instance_59 === VOID)
    new $serializer_59();
  return $serializer_instance_59;
}
var Companion_instance_61;
function Companion_getInstance_62() {
  return Companion_instance_61;
}
var $serializer_instance_60;
function $serializer_getInstance_60() {
  if ($serializer_instance_60 === VOID)
    new $serializer_60();
  return $serializer_instance_60;
}
var Companion_instance_62;
function Companion_getInstance_63() {
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
function Companion_getInstance_64() {
  return Companion_instance_63;
}
var $serializer_instance_62;
function $serializer_getInstance_62() {
  if ($serializer_instance_62 === VOID)
    new $serializer_62();
  return $serializer_instance_62;
}
var Companion_instance_64;
function Companion_getInstance_65() {
  return Companion_instance_64;
}
var $serializer_instance_63;
function $serializer_getInstance_63() {
  if ($serializer_instance_63 === VOID)
    new $serializer_63();
  return $serializer_instance_63;
}
var Companion_instance_65;
function Companion_getInstance_66() {
  return Companion_instance_65;
}
var $serializer_instance_64;
function $serializer_getInstance_64() {
  if ($serializer_instance_64 === VOID)
    new $serializer_64();
  return $serializer_instance_64;
}
var Companion_instance_66;
function Companion_getInstance_67() {
  return Companion_instance_66;
}
var $serializer_instance_65;
function $serializer_getInstance_65() {
  if ($serializer_instance_65 === VOID)
    new $serializer_65();
  return $serializer_instance_65;
}
var Companion_instance_67;
function Companion_getInstance_68() {
  if (Companion_instance_67 === VOID)
    new Companion_67();
  return Companion_instance_67;
}
var $serializer_instance_66;
function $serializer_getInstance_66() {
  if ($serializer_instance_66 === VOID)
    new $serializer_66();
  return $serializer_instance_66;
}
function extractUrl($this, element) {
  // Inline function 'kotlin.text.toRegex' call
  var this_0 = '^\\s?<(.+)>\\s?$';
  // Inline function 'kotlin.text.replace' call
  return Regex.xh(this_0).bi(element, '$1');
}
function extractValue($this, url, key) {
  // Inline function 'kotlin.text.toRegex' call
  // Inline function 'kotlin.text.split' call
  var tmp0 = Regex.xh('\\?').ji(url, 0);
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlin.collections.dropLastWhile' call
    if (!tmp0.o1()) {
      var iterator = tmp0.u2(tmp0.q2());
      while (iterator.t7()) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = iterator.v7();
        if (!(charSequenceLength(this_0) === 0)) {
          tmp$ret$4 = take(tmp0, iterator.u7() + 1 | 0);
          break $l$block;
        }
      }
    }
    tmp$ret$4 = emptyList();
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_1 = tmp$ret$4;
  var tmp$ret$5 = copyToArray(this_1);
  var tmp0_0 = split(tmp$ret$5[1], ['&']);
  var tmp$ret$8;
  $l$block_0: {
    // Inline function 'kotlin.collections.dropLastWhile' call
    if (!tmp0_0.o1()) {
      var iterator_0 = tmp0_0.u2(tmp0_0.q2());
      while (iterator_0.t7()) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_2 = iterator_0.v7();
        if (!(charSequenceLength(this_2) === 0)) {
          tmp$ret$8 = take(tmp0_0, iterator_0.u7() + 1 | 0);
          break $l$block_0;
        }
      }
    }
    tmp$ret$8 = emptyList();
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_3 = tmp$ret$8;
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
    var tmp$ret$12;
    $l$block_1: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      if (!tmp0_1.o1()) {
        var iterator_1 = tmp0_1.u2(tmp0_1.q2());
        while (iterator_1.t7()) {
          // Inline function 'kotlin.text.isEmpty' call
          var this_4 = iterator_1.v7();
          if (!(charSequenceLength(this_4) === 0)) {
            tmp$ret$12 = take(tmp0_1, iterator_1.u7() + 1 | 0);
            break $l$block_1;
          }
        }
      }
      tmp$ret$12 = emptyList();
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_5 = tmp$ret$12;
    var tmp$ret$14 = copyToArray(this_5);
    destination.e2(tmp$ret$14);
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.s2();
  var _iterator__ex2g4s = destination.q1();
  while (_iterator__ex2g4s.r1()) {
    var element = _iterator__ex2g4s.s1();
    if (equals(element[0], key, true)) {
      destination_0.e2(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_1 = ArrayList.d2(collectionSizeOrDefault(destination_0, 10));
  var _iterator__ex2g4s_0 = destination_0.q1();
  while (_iterator__ex2g4s_0.r1()) {
    var item_0 = _iterator__ex2g4s_0.s1();
    var tmp$ret$20 = item_0[1];
    destination_1.e2(tmp$ret$20);
  }
  return firstOrNull(destination_1);
}
var Companion_instance_68;
function Companion_getInstance_69() {
  return Companion_instance_68;
}
var Companion_instance_69;
function Companion_getInstance_70() {
  return Companion_instance_69;
}
var Companion_instance_70;
function Companion_getInstance_71() {
  return Companion_instance_70;
}
function AbstractAuthResourceImpl$_init_$lambda_a1qsz() {
  return Service_MASTODON_getInstance();
}
function *_generator_invoke__zhh2q8($this, $this$runBlocking, $completion) {
  $this.ba4_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ca4_1.va3_1 + '/api/v1/accounts/verify_credentials').d4s('Authorization', $this.ca4_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Account), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_0($this, $this$runBlocking, $completion) {
  $this.fa4_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.ga4_1.wa3($this.ga4_1.wa3($this.ga4_1.wa3($this.ga4_1.wa3((new HttpRequest()).b4s($this.ga4_1.va3_1 + '/api/v1/accounts/update_credentials').d4s('Authorization', $this.ga4_1.ua3()).c4s(MediaType_getInstance().da4_1), 'display_name', $this.ha4_1.displayName), 'note', $this.ha4_1.note), 'avatar', $this.ha4_1.avatar), 'header', $this.ha4_1.header).q4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Account), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_1($this, $this$runBlocking, $completion) {
  $this.ia4_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ja4_1.va3_1 + '/api/v1/accounts/' + $this.ka4_1.id).d4s('Authorization', $this.ja4_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Account), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_2($this, $this$runBlocking, $completion) {
  $this.la4_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.ma4_1.aa4((new HttpRequest()).b4s($this.ma4_1.va3_1 + '/api/v1/accounts/' + $this.na4_1.id + '/followers').d4s('Authorization', $this.ma4_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.na4_1.range, $this.ma4_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_3($this, $this$runBlocking, $completion) {
  $this.oa4_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.pa4_1.aa4((new HttpRequest()).b4s($this.pa4_1.va3_1 + '/api/v1/accounts/' + $this.qa4_1.id + '/following').d4s('Authorization', $this.pa4_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.qa4_1.range, $this.pa4_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_4($this, $this$runBlocking, $completion) {
  $this.ra4_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.sa4_1.ya3($this.sa4_1.ya3($this.sa4_1.ya3($this.sa4_1.ya3($this.sa4_1.aa4((new HttpRequest()).b4s($this.sa4_1.va3_1 + '/api/v1/accounts/' + $this.ta4_1.id + '/statuses').d4s('Authorization', $this.sa4_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.ta4_1.range, $this.sa4_1.ta3_1()), 'only_media', $this.ta4_1.onlyMedia), 'pinned', $this.ta4_1.onlyPinned), 'exclude_replies', $this.ta4_1.excludeReplies), 'exclude_reblogs', $this.ta4_1.excludeReblogs).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_5($this, $this$runBlocking, $completion) {
  $this.ua4_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.va4_1.va3_1 + '/api/v1/accounts/' + $this.wa4_1.id + '/follow').d4s('Authorization', $this.va4_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_6($this, $this$runBlocking, $completion) {
  $this.xa4_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ya4_1.va3_1 + '/api/v1/accounts/' + $this.za4_1.id + '/unfollow').d4s('Authorization', $this.ya4_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_7($this, $this$runBlocking, $completion) {
  $this.aa5_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ba5_1.va3_1 + '/api/v1/accounts/' + $this.ca5_1.id + '/block').d4s('Authorization', $this.ba5_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_8($this, $this$runBlocking, $completion) {
  $this.da5_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ea5_1.va3_1 + '/api/v1/accounts/' + $this.fa5_1.id + '/unblock').d4s('Authorization', $this.ea5_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_9($this, $this$runBlocking, $completion) {
  $this.ga5_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ha5_1.va3_1 + '/api/v1/accounts/' + $this.ia5_1.id + '/mute').d4s('Authorization', $this.ha5_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_10($this, $this$runBlocking, $completion) {
  $this.ja5_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ka5_1.va3_1 + '/api/v1/accounts/' + $this.la5_1.id + '/unmute').d4s('Authorization', $this.ka5_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_11($this, $this$runBlocking, $completion) {
  $this.ma5_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.na5_1.za3((new HttpRequest()).b4s($this.na5_1.va3_1 + '/api/v1/accounts/relationships').d4s('Authorization', $this.na5_1.ua3()).c4s(MediaType_getInstance().da4_1), 'id', $this.oa5_1.ids).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Relationship), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_12($this, $this$runBlocking, $completion) {
  $this.pa5_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.qa5_1.ya3($this.qa5_1.ya3((new HttpRequest()).b4s($this.qa5_1.va3_1 + '/api/v1/accounts/search').d4s('Authorization', $this.qa5_1.ua3()).c4s(MediaType_getInstance().da4_1), 'q', $this.ra5_1.query), 'limit', $this.ra5_1.limit).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function AccountsResourceImpl$verifyCredentials$slambda_0($this, this$0) {
  var i = new AccountsResourceImpl$verifyCredentials$slambda($this, this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$updateCredentials$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$updateCredentials$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$account$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$account$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$followers$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$followers$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$following$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$following$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$statuses$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$statuses$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$follow$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$follow$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$unfollow$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$unfollow$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$block$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$block$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$unblock$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$unblock$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$mute$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$mute$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$unmute$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$unmute$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$relationships$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$relationships$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$search$slambda_0($this, this$0, $request) {
  var i = new AccountsResourceImpl$search$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_13($this, $this$runBlocking, $completion) {
  $this.sa5_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.ta5_1.wa3($this.ta5_1.wa3($this.ta5_1.wa3($this.ta5_1.wa3((new HttpRequest()).b4s($this.ta5_1.va3_1 + '/api/v1/apps').c4s(MediaType_getInstance().da4_1), 'client_name', $this.ua5_1.name), 'redirect_uris', $this.ua5_1.redirectUris), 'scopes', $this.ua5_1.scopes), 'website', $this.ua5_1.website).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(ClientCredential), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function AppsResourceImpl$registerApplication$slambda_0($this, this$0, $request) {
  var i = new AppsResourceImpl$registerApplication$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_14($this, $this$runBlocking, $completion) {
  $this.va5_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.wa5_1.aa4((new HttpRequest()).b4s($this.wa5_1.va3_1 + '/api/v1/blocks').d4s('Authorization', $this.wa5_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.xa5_1.range, $this.wa5_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function BlocksResourceImpl$blocks$slambda_0($this, this$0, $request) {
  var i = new BlocksResourceImpl$blocks$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_15($this, $this$runBlocking, $completion) {
  $this.ya5_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.za5_1.va3_1 + '/api/v1/custom_emojis').c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Emoji), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function EmojisResourceImpl$customEmojis$slambda_0($this, this$0) {
  var i = new EmojisResourceImpl$customEmojis$slambda($this, this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_16($this, $this$runBlocking, $completion) {
  $this.aa6_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.ba6_1.aa4((new HttpRequest()).b4s($this.ba6_1.va3_1 + '/api/v1/favourites').d4s('Authorization', $this.ba6_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.ca6_1.range, $this.ba6_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function FavouritesResourceImpl$favourites$slambda_0($this, this$0, $request) {
  var i = new FavouritesResourceImpl$favourites$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_17($this, $this$runBlocking, $completion) {
  $this.da6_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ea6_1.va3_1 + '/api/v1/follow_requests').d4s('Authorization', $this.ea6_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_18($this, $this$runBlocking, $completion) {
  $this.fa6_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ga6_1.va3_1 + '/api/v1/follow_requests/' + $this.ha6_1.id + '/authorize').d4s('Authorization', $this.ga6_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new ResponseUnit();
        this_0.limit = Companion_instance_69.of(response);
        this_0.link = Companion_instance_68.of(response);
        tmp$ret$4 = this_0;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
}
function *_generator_invoke__zhh2q8_19($this, $this$runBlocking, $completion) {
  $this.ia6_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ja6_1.va3_1 + '/api/v1/follow_requests/' + $this.ka6_1.id + '/reject').d4s('Authorization', $this.ja6_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new ResponseUnit();
        this_0.limit = Companion_instance_69.of(response);
        this_0.link = Companion_instance_68.of(response);
        tmp$ret$4 = this_0;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
}
function FollowRequestsResourceImpl$followRequests$slambda_0($this, this$0) {
  var i = new FollowRequestsResourceImpl$followRequests$slambda($this, this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FollowRequestsResourceImpl$authorizeFollowRequest$slambda_0($this, this$0, $request) {
  var i = new FollowRequestsResourceImpl$authorizeFollowRequest$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FollowRequestsResourceImpl$rejectFollowRequest$slambda_0($this, this$0, $request) {
  var i = new FollowRequestsResourceImpl$rejectFollowRequest$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_20($this, $this$runBlocking, $completion) {
  $this.la6_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.ma6_1.wa3((new HttpRequest()).b4s($this.ma6_1.va3_1 + '/api/v1/follow_requests').d4s('Authorization', $this.ma6_1.ua3()).c4s(MediaType_getInstance().da4_1), 'uri', $this.na6_1.uri).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Account), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function FollowsResourceImpl$remoteFollow$slambda_0($this, this$0, $request) {
  var i = new FollowsResourceImpl$remoteFollow$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_21($this, $this$runBlocking, $completion) {
  $this.oa6_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.pa6_1.va3_1 + '/api/v1/instance').c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(InstanceV1), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_22($this, $this$runBlocking, $completion) {
  $this.qa6_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ra6_1.va3_1 + '/api/v2/instance').c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(InstanceV2), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function InstancesResourceImpl$instanceV1$slambda_0($this, this$0) {
  var i = new InstancesResourceImpl$instanceV1$slambda($this, this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function InstancesResourceImpl$instanceV2$slambda_0($this, this$0) {
  var i = new InstancesResourceImpl$instanceV2$slambda($this, this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function InternalUtility$json$lambda($this$Json) {
  $this$Json.z24_1 = false;
  $this$Json.y24_1 = true;
  $this$Json.a25_1 = true;
  var tmp = $this$Json;
  // Inline function 'kotlinx.serialization.modules.SerializersModule' call
  var builder = new SerializersModuleBuilder();
  builder.d1i(PrimitiveClasses_getInstance().cg(), AnySerializer_getInstance());
  tmp.p25_1 = builder.f16();
  return Unit_instance;
}
var InternalUtility_instance;
function InternalUtility_getInstance() {
  if (InternalUtility_instance === VOID)
    new InternalUtility();
  return InternalUtility_instance;
}
function *_generator_invoke__zhh2q8_23($this, $this$runBlocking, $completion) {
  $this.sa6_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ta6_1.va3_1 + '/api/v1/accounts/' + $this.ua6_1.id + '/lists').d4s('Authorization', $this.ta6_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(AccountList), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_24($this, $this$runBlocking, $completion) {
  $this.va6_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.wa6_1.va3_1 + '/api/v1/lists/' + $this.xa6_1.id + '/accounts').d4s('Authorization', $this.wa6_1.ua3()).c4s(MediaType_getInstance().da4_1);
      var tmp0_elvis_lhs = $this.xa6_1.limit;
      var tmp_0 = tmp.i4s('limit', tmp0_elvis_lhs == null ? 40 : tmp0_elvis_lhs).m4s($completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      var response = tmp_0;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs_0 = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs_0 == null ? MastodonException.r9b(e) : tmp0_elvis_lhs_0;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_25($this, $this$runBlocking, $completion) {
  $this.ya6_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.za6_1.va3_1 + '/api/v1/lists/' + $this.aa7_1.id).d4s('Authorization', $this.za6_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(AccountList), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_26($this, $this$runBlocking, $completion) {
  $this.ba7_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.ca7_1.wa3((new HttpRequest()).b4s($this.ca7_1.va3_1 + '/api/v1/lists').d4s('Authorization', $this.ca7_1.ua3()).c4s(MediaType_getInstance().da4_1), 'title', $this.da7_1.title).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(AccountList), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_27($this, $this$runBlocking, $completion) {
  $this.ea7_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.fa7_1.wa3((new HttpRequest()).b4s($this.fa7_1.va3_1 + '/api/v1/lists/' + $this.ga7_1.id).d4s('Authorization', $this.fa7_1.ua3()).c4s(MediaType_getInstance().da4_1), 'title', $this.ga7_1.title).o4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(AccountList), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_28($this, $this$runBlocking, $completion) {
  $this.ha7_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ia7_1.va3_1 + '/api/v1/lists/' + $this.ja7_1.id).d4s('Authorization', $this.ia7_1.ua3()).c4s(MediaType_getInstance().da4_1).p4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new ResponseUnit();
        this_0.limit = Companion_instance_69.of(response);
        this_0.link = Companion_instance_68.of(response);
        tmp$ret$4 = this_0;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
}
function *_generator_invoke__zhh2q8_29($this, $this$runBlocking, $completion) {
  $this.ka7_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
    try {
      var tmp = $this.la7_1.xa3((new HttpRequest()).b4s($this.la7_1.va3_1 + '/api/v1/lists/' + $this.ma7_1.id + '/accounts').d4s('Authorization', $this.la7_1.ua3()).c4s(MediaType_getInstance().da4_1), 'accountIds', $this.ma7_1.accountIds).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new ResponseUnit();
        this_0.limit = Companion_instance_69.of(response);
        this_0.link = Companion_instance_68.of(response);
        tmp$ret$4 = this_0;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
}
function *_generator_invoke__zhh2q8_30($this, $this$runBlocking, $completion) {
  $this.na7_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
    try {
      var tmp = $this.oa7_1.xa3((new HttpRequest()).b4s($this.oa7_1.va3_1 + '/api/v1/lists/' + $this.pa7_1.id + '/accounts').d4s('Authorization', $this.oa7_1.ua3()).c4s(MediaType_getInstance().da4_1), 'accountIds', $this.pa7_1.accountIds).p4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new ResponseUnit();
        this_0.limit = Companion_instance_69.of(response);
        this_0.link = Companion_instance_68.of(response);
        tmp$ret$4 = this_0;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
}
function ListsResourceImpl$lists$slambda_0($this, this$0, $request) {
  var i = new ListsResourceImpl$lists$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$listAccounts$slambda_0($this, this$0, $request) {
  var i = new ListsResourceImpl$listAccounts$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$list$slambda_0($this, this$0, $request) {
  var i = new ListsResourceImpl$list$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$createList$slambda_0($this, this$0, $request) {
  var i = new ListsResourceImpl$createList$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$updateList$slambda_0($this, this$0, $request) {
  var i = new ListsResourceImpl$updateList$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$deleteList$slambda_0($this, this$0, $request) {
  var i = new ListsResourceImpl$deleteList$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$addAccountsToList$slambda_0($this, this$0, $request) {
  var i = new ListsResourceImpl$addAccountsToList$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$deleteAccountsToList$slambda_0($this, this$0, $request) {
  var i = new ListsResourceImpl$deleteAccountsToList$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
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
function *_generator_invoke__zhh2q8_31($this, $this$runBlocking, $completion) {
  $this.oa8_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.pa8_1.wa3((new HttpRequest()).b4s($this.pa8_1.va3_1 + '/api/v2/media').d4s('Authorization', $this.pa8_1.ua3()).c4s(MediaType_getInstance().da4_1).z4q('file', ensureNotNull($this.qa8_1.name), ensureNotNull($this.qa8_1.bytes)), 'description', $this.qa8_1.description).r4s(true).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Attachment), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function MediasResourceImpl$postMedia$slambda_0($this, this$0, $request) {
  var i = new MediasResourceImpl$postMedia$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_32($this, $this$runBlocking, $completion) {
  $this.ra8_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.sa8_1.va3_1 + '/api/v1/mutes').d4s('Authorization', $this.sa8_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function MutesResourceImpl$mutes$slambda_0($this, this$0) {
  var i = new MutesResourceImpl$mutes$slambda($this, this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_33($this, $this$runBlocking, $completion) {
  $this.ta8_1;
  var tmp$ret$7;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).a4s($this.ta8_1.va3_1 + '/.well-known/nodeinfo').c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(NodeInfo), arrayOf([]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$4);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$7 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  var response_0 = tmp$ret$7;
  var tmp0_safe_receiver = response_0.data.links;
  var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver);
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.href;
  var tmp_0;
  if (tmp2_elvis_lhs == null) {
    throw MastodonException.q9b('no node info links.');
  } else {
    tmp_0 = tmp2_elvis_lhs;
  }
  var link = tmp_0;
  $this.ta8_1;
  var tmp$ret$15;
  $l$block_0: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp_1 = (new HttpRequest()).a4s(link).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp_1 === get_COROUTINE_SUSPENDED())
        tmp_1 = yield tmp_1;
      var response_1 = tmp_1;
      if (response_1.s4s_1 === 200) {
        var tmp0_0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj_0 = response_1.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_4 = tmp0_0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_5 = this_4.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_6 = serializer(this_5, createKType(getKClass(Node), arrayOf([]), false));
        var tmp$ret$10 = isInterface(this_6, KSerializer) ? this_6 : THROW_CCE();
        var tmp$ret$12 = this_4.g24(tmp$ret$10, obj_0);
        // Inline function 'kotlin.also' call
        var this_7 = new Response(tmp$ret$12);
        this_7.limit = Companion_instance_69.of(response_1);
        this_7.link = Companion_instance_68.of(response_1);
        this_7.json = response_1.w4s();
        tmp$ret$15 = this_7;
        break $l$block_0;
      }
      throw MastodonException.s9b(response_1.s4s_1, response_1.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        var tmp0_elvis_lhs_0 = e_0 instanceof MastodonException ? e_0 : null;
        throw tmp0_elvis_lhs_0 == null ? MastodonException.r9b(e_0) : tmp0_elvis_lhs_0;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$15;
}
function NodesResourceImpl$nodeInfo$slambda_0(this$0) {
  var i = new NodesResourceImpl$nodeInfo$slambda(this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_34($this, $this$runBlocking, $completion) {
  $this.ua8_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.va8_1.aa4($this.va8_1.za3($this.va8_1.za3($this.va8_1.ya3((new HttpRequest()).b4s($this.va8_1.va3_1 + '/api/v1/notifications').d4s('Authorization', $this.va8_1.ua3()).c4s(MediaType_getInstance().da4_1), 'account_id', $this.wa8_1.id), 'types', $this.wa8_1.types), 'exclude_types', $this.wa8_1.excludeTypes), $this.wa8_1.range, $this.va8_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Notification), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_35($this, $this$runBlocking, $completion) {
  $this.xa8_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ya8_1.va3_1 + '/api/v1/notifications/' + $this.za8_1.id).d4s('Authorization', $this.ya8_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Notification), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_36($this, $this$runBlocking, $completion) {
  $this.aa9_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ba9_1.va3_1 + '/api/v1/notifications/clear').d4s('Authorization', $this.ba9_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new ResponseUnit();
        this_0.limit = Companion_instance_69.of(response);
        this_0.link = Companion_instance_68.of(response);
        tmp$ret$4 = this_0;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
}
function *_generator_invoke__zhh2q8_37($this, $this$runBlocking, $completion) {
  $this.ca9_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.da9_1.va3_1 + '/api/v1/push/subscription').d4s('Authorization', $this.da9_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Subscription), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_38($this, $this$runBlocking, $completion) {
  $this.ea9_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.fa9_1.wa3($this.fa9_1.wa3($this.fa9_1.wa3((new HttpRequest()).b4s($this.fa9_1.va3_1 + '/api/v1/push/subscription').d4s('Authorization', $this.fa9_1.ua3()).c4s(MediaType_getInstance().da4_1), 'subscription[endpoint]', $this.ga9_1.endpoint), 'subscription[keys][p256dh]', $this.ga9_1.p256dh), 'subscription[keys][auth]', $this.ga9_1.auth);
      var tmp0_safe_receiver = $this.ga9_1.alert;
      var tmp_0 = $this.fa9_1.wa3(tmp, 'data[alerts][follow]', tmp0_safe_receiver == null ? null : tmp0_safe_receiver.follow);
      var tmp1_safe_receiver = $this.ga9_1.alert;
      var tmp_1 = $this.fa9_1.wa3(tmp_0, 'data[alerts][favourite]', tmp1_safe_receiver == null ? null : tmp1_safe_receiver.favourite);
      var tmp2_safe_receiver = $this.ga9_1.alert;
      var tmp_2 = $this.fa9_1.wa3(tmp_1, 'data[alerts][reblog]', tmp2_safe_receiver == null ? null : tmp2_safe_receiver.reblog);
      var tmp3_safe_receiver = $this.ga9_1.alert;
      var tmp_3 = $this.fa9_1.wa3(tmp_2, 'data[alerts][mention]', tmp3_safe_receiver == null ? null : tmp3_safe_receiver.mention);
      var tmp4_safe_receiver = $this.ga9_1.alert;
      var tmp_4 = $this.fa9_1.wa3(tmp_3, 'data[alerts][poll]', tmp4_safe_receiver == null ? null : tmp4_safe_receiver.poll);
      var tmp5_safe_receiver = $this.ga9_1.alert;
      var tmp_5 = $this.fa9_1.wa3(tmp_4, 'data[alerts][status]', tmp5_safe_receiver == null ? null : tmp5_safe_receiver.status).n4s($completion);
      if (tmp_5 === get_COROUTINE_SUSPENDED())
        tmp_5 = yield tmp_5;
      var response = tmp_5;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Notification), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_39($this, $this$runBlocking, $completion) {
  $this.ha9_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.ia9_1.va3_1 + '/api/v1/push/subscription').d4s('Authorization', $this.ia9_1.ua3()).c4s(MediaType_getInstance().da4_1);
      var tmp0_safe_receiver = $this.ja9_1.alert;
      var tmp_0 = $this.ia9_1.wa3(tmp, 'data[alerts][follow]', tmp0_safe_receiver == null ? null : tmp0_safe_receiver.follow);
      var tmp1_safe_receiver = $this.ja9_1.alert;
      var tmp_1 = $this.ia9_1.wa3(tmp_0, 'data[alerts][favourite]', tmp1_safe_receiver == null ? null : tmp1_safe_receiver.favourite);
      var tmp2_safe_receiver = $this.ja9_1.alert;
      var tmp_2 = $this.ia9_1.wa3(tmp_1, 'data[alerts][reblog]', tmp2_safe_receiver == null ? null : tmp2_safe_receiver.reblog);
      var tmp3_safe_receiver = $this.ja9_1.alert;
      var tmp_3 = $this.ia9_1.wa3(tmp_2, 'data[alerts][mention]', tmp3_safe_receiver == null ? null : tmp3_safe_receiver.mention);
      var tmp4_safe_receiver = $this.ja9_1.alert;
      var tmp_4 = $this.ia9_1.wa3(tmp_3, 'data[alerts][poll]', tmp4_safe_receiver == null ? null : tmp4_safe_receiver.poll);
      var tmp5_safe_receiver = $this.ja9_1.alert;
      var tmp_5 = $this.ia9_1.wa3(tmp_4, 'data[alerts][status]', tmp5_safe_receiver == null ? null : tmp5_safe_receiver.status).o4s($completion);
      if (tmp_5 === get_COROUTINE_SUSPENDED())
        tmp_5 = yield tmp_5;
      var response = tmp_5;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Notification), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function NotificationsResourceImpl$notifications$slambda_0($this, this$0, $request) {
  var i = new NotificationsResourceImpl$notifications$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$notification$slambda_0($this, this$0, $request) {
  var i = new NotificationsResourceImpl$notification$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$clearNotifications$slambda_0($this, this$0) {
  var i = new NotificationsResourceImpl$clearNotifications$slambda($this, this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$subscription$slambda_0($this, this$0) {
  var i = new NotificationsResourceImpl$subscription$slambda($this, this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$pushSubscription$slambda_0($this, this$0, $request) {
  var i = new NotificationsResourceImpl$pushSubscription$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$editSubscription$slambda_0($this, this$0, $request) {
  var i = new NotificationsResourceImpl$editSubscription$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_40($this, $this$runBlocking, $completion) {
  $this.ka9_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.la9_1.wa3($this.la9_1.wa3($this.la9_1.wa3($this.la9_1.wa3($this.la9_1.wa3($this.la9_1.wa3((new HttpRequest()).b4s($this.la9_1.va3_1 + '/oauth/token'), 'client_id', $this.ma9_1.clientId), 'client_secret', $this.ma9_1.clientSecret), 'username', $this.ma9_1.emailAddress), 'password', $this.ma9_1.password), 'scope', $this.ma9_1.scopes), 'grant_type', 'password').c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(AccessToken), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_41($this, $this$runBlocking, $completion) {
  $this.na9_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.oa9_1.wa3($this.oa9_1.wa3($this.oa9_1.wa3($this.oa9_1.wa3($this.oa9_1.wa3((new HttpRequest()).b4s($this.oa9_1.va3_1 + '/oauth/token'), 'client_id', $this.pa9_1.clientId), 'client_secret', $this.pa9_1.clientSecret), 'redirect_uri', $this.pa9_1.redirectUri), 'code', $this.pa9_1.code), 'grant_type', 'authorization_code').c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(AccessToken), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_42($this, $this$runBlocking, $completion) {
  $this.qa9_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.ra9_1.wa3($this.ra9_1.wa3($this.ra9_1.wa3($this.ra9_1.wa3((new HttpRequest()).b4s($this.ra9_1.va3_1 + '/oauth/token'), 'client_id', $this.sa9_1.clientId), 'client_secret', $this.sa9_1.clientSecret), 'refresh_token', $this.sa9_1.refreshToken), 'grant_type', 'refresh_token').c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(AccessToken), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function OAuthResourceImpl$issueAccessTokenWithCredentials$slambda_0($this, this$0, $request) {
  var i = new OAuthResourceImpl$issueAccessTokenWithCredentials$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function OAuthResourceImpl$issueAccessTokenWithAuthorizationCode$slambda_0($this, this$0, $request) {
  var i = new OAuthResourceImpl$issueAccessTokenWithAuthorizationCode$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function OAuthResourceImpl$refreshAccessToken$slambda_0($this, this$0, $request) {
  var i = new OAuthResourceImpl$refreshAccessToken$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function OAuthResourceImpl$authorizationUrl$slambda_0(this$0, $request) {
  var i = new OAuthResourceImpl$authorizationUrl$slambda(this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_43($this, $this$runBlocking, $completion) {
  $this.va9_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.wa9_1.xa3((new HttpRequest()).b4s($this.wa9_1.va3_1 + '/api/v1/polls/' + $this.xa9_1.id + '/votes').d4s('Authorization', $this.wa9_1.ua3()).c4s(MediaType_getInstance().da4_1), 'choices', $this.xa9_1.choices).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Poll), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function PollsResourceImpl$votePoll$slambda_0($this, this$0, $request) {
  var i = new PollsResourceImpl$votePoll$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_44($this, $this$runBlocking, $completion) {
  $this.ya9_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.za9_1.va3_1 + '/api/v1/reports').d4s('Authorization', $this.za9_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Report), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_45($this, $this$runBlocking, $completion) {
  $this.aaa_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.baa_1.xa3($this.baa_1.wa3($this.baa_1.wa3((new HttpRequest()).b4s($this.baa_1.va3_1 + '/api/v1/reports').d4s('Authorization', $this.baa_1.ua3()).c4s(MediaType_getInstance().da4_1), 'comment', $this.caa_1.comment), 'account_id', $this.caa_1.accountId), 'status_ids', $this.caa_1.statusIds).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Report), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function ReportsResourceImpl$reports$slambda_0($this, this$0) {
  var i = new ReportsResourceImpl$reports$slambda($this, this$0);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ReportsResourceImpl$postReport$slambda_0($this, this$0, $request) {
  var i = new ReportsResourceImpl$postReport$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_46($this, $this$runBlocking, $completion) {
  $this.daa_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.eaa_1.ya3($this.eaa_1.ya3($this.eaa_1.ya3((new HttpRequest()).b4s($this.eaa_1.va3_1 + '/api/v2/search').d4s('Authorization', $this.eaa_1.ua3()).c4s(MediaType_getInstance().da4_1), 'q', $this.faa_1.query), 'resolve', $this.faa_1.resolve), 'following', $this.faa_1.onlyFollowing);
      var tmp0_safe_receiver = $this.faa_1.page;
      var tmp_0 = $this.eaa_1.ya3(tmp, 'limit', tmp0_safe_receiver == null ? null : tmp0_safe_receiver.limit);
      var tmp1_safe_receiver = $this.faa_1.page;
      var tmp_1 = $this.eaa_1.ya3(tmp_0, 'offset', tmp1_safe_receiver == null ? null : tmp1_safe_receiver.offset).m4s($completion);
      if (tmp_1 === get_COROUTINE_SUSPENDED())
        tmp_1 = yield tmp_1;
      var response = tmp_1;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Results), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function SearchResourceImpl$search$slambda_0($this, this$0, $request) {
  var i = new SearchResourceImpl$search$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_47($this, $this$runBlocking, $completion) {
  $this.gaa_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.haa_1.va3_1 + '/api/v1/statuses/' + $this.iaa_1.id).d4s('Authorization', $this.haa_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_48($this, $this$runBlocking, $completion) {
  $this.jaa_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.kaa_1.va3_1 + '/api/v1/statuses/' + $this.laa_1.id + '/context').d4s('Authorization', $this.kaa_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Context), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_49($this, $this$runBlocking, $completion) {
  $this.maa_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.naa_1.va3_1 + '/api/v1/statuses/' + $this.oaa_1.id + '/card').d4s('Authorization', $this.naa_1.ua3()).c4s(MediaType_getInstance().da4_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Card), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_50($this, $this$runBlocking, $completion) {
  $this.paa_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.qaa_1.aa4((new HttpRequest()).b4s($this.qaa_1.va3_1 + '/api/v1/statuses/' + $this.raa_1.id + '/reblogged_by').d4s('Authorization', $this.qaa_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.raa_1.range, $this.qaa_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_51($this, $this$runBlocking, $completion) {
  $this.saa_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.taa_1.aa4((new HttpRequest()).b4s($this.taa_1.va3_1 + '/api/v1/statuses/' + $this.uaa_1.id + '/favourited_by').d4s('Authorization', $this.taa_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.uaa_1.range, $this.taa_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_52($this, $this$runBlocking, $completion) {
  $this.vaa_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.waa_1.wa3($this.waa_1.wa3($this.waa_1.wa3($this.waa_1.xa3($this.waa_1.xa3($this.waa_1.wa3($this.waa_1.wa3($this.waa_1.wa3($this.waa_1.wa3($this.waa_1.wa3((new HttpRequest()).b4s($this.waa_1.va3_1 + '/api/v1/statuses').d4s('Authorization', $this.waa_1.ua3()).c4s(MediaType_getInstance().da4_1), 'status', $this.xaa_1.status), 'in_reply_to_id', $this.xaa_1.inReplyToId), 'sensitive', $this.xaa_1.sensitive), 'spoiler_text', $this.xaa_1.spoilerText), 'visibility', $this.xaa_1.visibility), 'media_ids', $this.xaa_1.mediaIds), 'poll[options]', $this.xaa_1.pollOptions), 'poll[expires_in]', $this.xaa_1.pollExpiresIn), 'poll[multiple]', $this.xaa_1.pollMultiple), 'poll[hide_totals]', $this.xaa_1.pollHideTotals).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_53($this, $this$runBlocking, $completion) {
  $this.yaa_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
    try {
      var tmp = (new HttpRequest()).b4s($this.zaa_1.va3_1 + '/api/v1/statuses/' + $this.aab_1.id).d4s('Authorization', $this.zaa_1.ua3()).c4s(MediaType_getInstance().da4_1).p4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new ResponseUnit();
        this_0.limit = Companion_instance_69.of(response);
        this_0.link = Companion_instance_68.of(response);
        tmp$ret$4 = this_0;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
}
function *_generator_invoke__zhh2q8_54($this, $this$runBlocking, $completion) {
  $this.bab_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.cab_1.va3_1 + '/api/v1/statuses/' + $this.dab_1.id + '/reblog').d4s('Authorization', $this.cab_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_55($this, $this$runBlocking, $completion) {
  $this.eab_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.fab_1.va3_1 + '/api/v1/statuses/' + $this.gab_1.id + '/unreblog').d4s('Authorization', $this.fab_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_56($this, $this$runBlocking, $completion) {
  $this.hab_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.iab_1.va3_1 + '/api/v1/statuses/' + $this.jab_1.id + '/favourite').d4s('Authorization', $this.iab_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_57($this, $this$runBlocking, $completion) {
  $this.kab_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s($this.lab_1.va3_1 + '/api/v1/statuses/' + $this.mab_1.id + '/unfavourite').d4s('Authorization', $this.lab_1.ua3()).c4s(MediaType_getInstance().da4_1).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function StatusesResourceImpl$status$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$status$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$context$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$context$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$card$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$card$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$rebloggedBy$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$rebloggedBy$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$favouritedBy$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$favouritedBy$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$postStatus$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$postStatus$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$deleteStatus$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$deleteStatus$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$reblog$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$reblog$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$unreblog$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$unreblog$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$favourite$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$favourite$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$unfavourite$slambda_0($this, this$0, $request) {
  var i = new StatusesResourceImpl$unfavourite$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_58($this, $this$runBlocking, $completion) {
  $this.nab_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.oab_1.aa4((new HttpRequest()).b4s($this.oab_1.va3_1 + '/api/v1/timelines/home').d4s('Authorization', $this.oab_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.pab_1.range, $this.oab_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var inductionVariable = 0;
      if (inductionVariable <= 9)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (response.s4s_1 === 206) {
            var tmp_0 = delay(5000n, $completion);
            if (tmp_0 === get_COROUTINE_SUSPENDED())
              tmp_0 = yield tmp_0;
            var tmp_1 = $this.oab_1.aa4((new HttpRequest()).b4s($this.oab_1.va3_1 + '/api/v1/timelines/home').d4s('Authorization', $this.oab_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.pab_1.range, $this.oab_1.ta3_1()).m4s($completion);
            if (tmp_1 === get_COROUTINE_SUSPENDED())
              tmp_1 = yield tmp_1;
            response = tmp_1;
          }
        }
         while (inductionVariable <= 9);
      var response_0 = response;
      if (response_0.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response_0.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response_0);
        this_3.link = Companion_instance_68.of(response_0);
        this_3.json = response_0.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response_0.s4s_1, response_0.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_59($this, $this$runBlocking, $completion) {
  $this.qab_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.rab_1.aa4($this.rab_1.wa3($this.rab_1.wa3((new HttpRequest()).b4s($this.rab_1.va3_1 + '/api/v1/timelines/public').d4s('Authorization', $this.rab_1.ua3()).c4s(MediaType_getInstance().da4_1), 'local', $this.sab_1.local), 'only_media', $this.sab_1.onlyMedia), $this.sab_1.range, $this.rab_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_60($this, $this$runBlocking, $completion) {
  $this.tab_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.uab_1.aa4($this.uab_1.wa3($this.uab_1.wa3((new HttpRequest()).b4s($this.uab_1.va3_1 + '/api/v1/timelines/tag/' + $this.vab_1.hashtag).d4s('Authorization', $this.uab_1.ua3()).c4s(MediaType_getInstance().da4_1), 'local', $this.vab_1.local), 'only_media', $this.vab_1.onlyMedia), $this.vab_1.range, $this.uab_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_61($this, $this$runBlocking, $completion) {
  $this.wab_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.xab_1.aa4((new HttpRequest()).b4s($this.xab_1.va3_1 + '/api/v1/timelines/list/' + $this.yab_1.listId).d4s('Authorization', $this.xab_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.yab_1.range, $this.xab_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function *_generator_invoke__zhh2q8_62($this, $this$runBlocking, $completion) {
  $this.zab_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.aac_1.aa4((new HttpRequest()).b4s($this.aac_1.va3_1 + '/api/v1/conversations').d4s('Authorization', $this.aac_1.ua3()).c4s(MediaType_getInstance().da4_1), $this.bac_1.range, $this.aac_1.ta3_1()).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Conversation), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function TimelinesResourceImpl$homeTimeline$slambda_0($this, this$0, $request) {
  var i = new TimelinesResourceImpl$homeTimeline$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TimelinesResourceImpl$publicTimeline$slambda_0($this, this$0, $request) {
  var i = new TimelinesResourceImpl$publicTimeline$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TimelinesResourceImpl$hashtagTimeline$slambda_0($this, this$0, $request) {
  var i = new TimelinesResourceImpl$hashtagTimeline$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TimelinesResourceImpl$listTimeline$slambda_0($this, this$0, $request) {
  var i = new TimelinesResourceImpl$listTimeline$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TimelinesResourceImpl$conversations$slambda_0($this, this$0, $request) {
  var i = new TimelinesResourceImpl$conversations$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_63($this, $this$runBlocking, $completion) {
  $this.cac_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = $this.dac_1.ya3((new HttpRequest()).b4s($this.dac_1.va3_1 + '/api/v1/trends').d4s('Authorization', $this.dac_1.ua3()).c4s(MediaType_getInstance().da4_1), 'limit', $this.eac_1.limit).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      if (response.s4s_1 === 200) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.ea4_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Trend), arrayOf([]), false))]), false));
        var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$5 = this_0.g24(tmp$ret$3, obj);
        // Inline function 'kotlin.also' call
        var this_3 = new Response(tmp$ret$5);
        this_3.limit = Companion_instance_69.of(response);
        this_3.link = Companion_instance_68.of(response);
        this_3.json = response.w4s();
        tmp$ret$8 = this_3;
        break $l$block;
      }
      throw MastodonException.s9b(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
        throw tmp0_elvis_lhs == null ? MastodonException.r9b(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function TrendsResourceImpl$trends$slambda_0($this, this$0, $request) {
  var i = new TrendsResourceImpl$trends$slambda($this, this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
var MediaType_instance;
function MediaType_getInstance() {
  if (MediaType_instance === VOID)
    new MediaType();
  return MediaType_instance;
}
//region block: post-declaration
initMetadataForInterface(Mastodon, 'Mastodon');
initMetadataForClass(MastodonException, 'MastodonException');
initMetadataForObject(MastodonFactory_0, 'MastodonFactory');
initMetadataForInterface(AccountsResource, 'AccountsResource');
initMetadataForInterface(AppsResource, 'AppsResource');
initMetadataForInterface(BlocksResource, 'BlocksResource');
initMetadataForInterface(EmojisResource, 'EmojisResource');
initMetadataForInterface(FavouritesResource, 'FavouritesResource');
initMetadataForInterface(FollowRequestsResource, 'FollowRequestsResource');
initMetadataForInterface(FollowsResource, 'FollowsResource');
initMetadataForInterface(InstancesResource, 'InstancesResource');
initMetadataForInterface(ListsResource, 'ListsResource');
initMetadataForInterface(MediasResource, 'MediasResource');
initMetadataForInterface(MutesResource, 'MutesResource');
initMetadataForInterface(NodesResource, 'NodesResource');
initMetadataForInterface(NotificationsResource, 'NotificationsResource');
initMetadataForInterface(OAuthResource, 'OAuthResource');
initMetadataForInterface(PollsResource, 'PollsResource');
initMetadataForInterface(ReportsResource, 'ReportsResource');
initMetadataForInterface(SearchResource, 'SearchResource');
initMetadataForInterface(StatusesResource, 'StatusesResource');
initMetadataForInterface(TimelinesResource, 'TimelinesResource');
initMetadataForInterface(TrendsResource, 'TrendsResource');
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
initMetadataForClass(SearchSearchRequest, 'SearchSearchRequest', SearchSearchRequest);
initMetadataForClass(StatusesCardRequest, 'StatusesCardRequest', StatusesCardRequest);
initMetadataForClass(StatusesContextRequest, 'StatusesContextRequest', StatusesContextRequest);
initMetadataForClass(StatusesDeleteStatusRequest, 'StatusesDeleteStatusRequest', StatusesDeleteStatusRequest);
initMetadataForClass(StatusesFavouriteRequest, 'StatusesFavouriteRequest', StatusesFavouriteRequest);
initMetadataForClass(StatusesFavouritedByRequest, 'StatusesFavouritedByRequest', StatusesFavouritedByRequest);
initMetadataForClass(StatusesPostStatusRequest, 'StatusesPostStatusRequest', StatusesPostStatusRequest);
initMetadataForClass(StatusesReblogRequest, 'StatusesReblogRequest', StatusesReblogRequest);
initMetadataForClass(StatusesRebloggedByRequest, 'StatusesRebloggedByRequest', StatusesRebloggedByRequest);
initMetadataForClass(StatusesStatusRequest, 'StatusesStatusRequest', StatusesStatusRequest);
initMetadataForClass(StatusesUnfavouriteRequest, 'StatusesUnfavouriteRequest', StatusesUnfavouriteRequest);
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
protoOf($serializer).w18 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AccessToken, 'AccessToken', AccessToken, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_1);
protoOf($serializer_0).w18 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Account, 'Account', Account, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_1).w18 = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AccountList, 'AccountList', AccountList, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_2).w18 = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AccountSource, 'AccountSource', AccountSource, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_3).w18 = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Alert, 'Alert', Alert, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_4).w18 = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Application, 'Application', Application, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_6);
protoOf($serializer_5).w18 = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Attachment, 'Attachment', Attachment, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_7);
protoOf($serializer_6).w18 = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Card, 'Card', Card, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_8);
protoOf($serializer_7).w18 = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ClientCredential, 'ClientCredential', ClientCredential, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_9);
protoOf($serializer_8).w18 = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Context, 'Context', Context, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_10);
protoOf($serializer_9).w18 = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Conversation, 'Conversation', Conversation, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_11);
protoOf($serializer_10).w18 = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Emoji, 'Emoji', Emoji, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_12);
protoOf($serializer_11).w18 = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Error_0, 'Error', Error_0, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForCompanion(Companion_13);
protoOf($serializer_12).w18 = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Field, 'Field', Field, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_14);
protoOf($serializer_13).w18 = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(History, 'History', History, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForCompanion(Companion_15);
protoOf($serializer_14).w18 = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Mention, 'Mention', Mention, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_16);
protoOf($serializer_15).w18 = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Notification, 'Notification', Notification, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_17);
protoOf($serializer_16).w18 = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Poll, 'Poll', Poll, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_18);
protoOf($serializer_17).w18 = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PollOption, 'PollOption', PollOption, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_19);
protoOf($serializer_18).w18 = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Relationship, 'Relationship', Relationship, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_20);
protoOf($serializer_19).w18 = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Report, 'Report', Report, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_21);
protoOf($serializer_20).w18 = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Results, 'Results', Results, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_22);
protoOf($serializer_21).w18 = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Role, 'Role', Role, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_23);
protoOf($serializer_22).w18 = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Status, 'Status', Status, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_24);
protoOf($serializer_23).w18 = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Subscription, 'Subscription', Subscription, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_25);
protoOf($serializer_24).w18 = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Tag, 'Tag', Tag, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_26);
protoOf($serializer_25).w18 = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Trend, 'Trend', Trend, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_27);
protoOf($serializer_26).w18 = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(WebPush, 'WebPush', WebPush, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForCompanion(Companion_28);
protoOf($serializer_27).w18 = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Filter, 'Filter', Filter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_29);
protoOf($serializer_28).w18 = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FilterKeyword, 'FilterKeyword', FilterKeyword, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_30);
protoOf($serializer_29).w18 = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FilterStatus, 'FilterStatus', FilterStatus, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_31);
protoOf($serializer_30).w18 = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1, 'InstanceV1', InstanceV1, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_32);
protoOf($serializer_31).w18 = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Configuration, 'InstanceV1Configuration', InstanceV1Configuration, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_33);
protoOf($serializer_32).w18 = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Fields, 'InstanceV1Fields', InstanceV1Fields, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForCompanion(Companion_34);
protoOf($serializer_33).w18 = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1MediaAttachments, 'InstanceV1MediaAttachments', InstanceV1MediaAttachments, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
initMetadataForCompanion(Companion_35);
protoOf($serializer_34).w18 = typeParametersSerializers;
initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Polls, 'InstanceV1Polls', InstanceV1Polls, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
initMetadataForCompanion(Companion_36);
protoOf($serializer_35).w18 = typeParametersSerializers;
initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Rules, 'InstanceV1Rules', InstanceV1Rules, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
initMetadataForCompanion(Companion_37);
protoOf($serializer_36).w18 = typeParametersSerializers;
initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Stats, 'InstanceV1Stats', InstanceV1Stats, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_36});
initMetadataForCompanion(Companion_38);
protoOf($serializer_37).w18 = typeParametersSerializers;
initMetadataForObject($serializer_37, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Statuses, 'InstanceV1Statuses', InstanceV1Statuses, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_37});
initMetadataForCompanion(Companion_39);
protoOf($serializer_38).w18 = typeParametersSerializers;
initMetadataForObject($serializer_38, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Urls, 'InstanceV1Urls', InstanceV1Urls, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_38});
initMetadataForCompanion(Companion_40);
protoOf($serializer_39).w18 = typeParametersSerializers;
initMetadataForObject($serializer_39, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2, 'InstanceV2', InstanceV2, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_39});
initMetadataForCompanion(Companion_41);
protoOf($serializer_40).w18 = typeParametersSerializers;
initMetadataForObject($serializer_40, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Accounts, 'InstanceV2Accounts', InstanceV2Accounts, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_40});
initMetadataForCompanion(Companion_42);
protoOf($serializer_41).w18 = typeParametersSerializers;
initMetadataForObject($serializer_41, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Configuration, 'InstanceV2Configuration', InstanceV2Configuration, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_41});
initMetadataForCompanion(Companion_43);
protoOf($serializer_42).w18 = typeParametersSerializers;
initMetadataForObject($serializer_42, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Contact, 'InstanceV2Contact', InstanceV2Contact, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_42});
initMetadataForCompanion(Companion_44);
protoOf($serializer_43).w18 = typeParametersSerializers;
initMetadataForObject($serializer_43, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Fields, 'InstanceV2Fields', InstanceV2Fields, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_43});
initMetadataForCompanion(Companion_45);
protoOf($serializer_44).w18 = typeParametersSerializers;
initMetadataForObject($serializer_44, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2MediaAttachments, 'InstanceV2MediaAttachments', InstanceV2MediaAttachments, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_44});
initMetadataForCompanion(Companion_46);
protoOf($serializer_45).w18 = typeParametersSerializers;
initMetadataForObject($serializer_45, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Polls, 'InstanceV2Polls', InstanceV2Polls, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_45});
initMetadataForCompanion(Companion_47);
protoOf($serializer_46).w18 = typeParametersSerializers;
initMetadataForObject($serializer_46, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Registrations, 'InstanceV2Registrations', InstanceV2Registrations, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_46});
initMetadataForCompanion(Companion_48);
protoOf($serializer_47).w18 = typeParametersSerializers;
initMetadataForObject($serializer_47, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Rules, 'InstanceV2Rules', InstanceV2Rules, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_47});
initMetadataForCompanion(Companion_49);
protoOf($serializer_48).w18 = typeParametersSerializers;
initMetadataForObject($serializer_48, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Statuses, 'InstanceV2Statuses', InstanceV2Statuses, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_48});
initMetadataForCompanion(Companion_50);
protoOf($serializer_49).w18 = typeParametersSerializers;
initMetadataForObject($serializer_49, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Thumbnail, 'InstanceV2Thumbnail', InstanceV2Thumbnail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_49});
initMetadataForCompanion(Companion_51);
protoOf($serializer_50).w18 = typeParametersSerializers;
initMetadataForObject($serializer_50, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Translation, 'InstanceV2Translation', InstanceV2Translation, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_50});
initMetadataForCompanion(Companion_52);
protoOf($serializer_51).w18 = typeParametersSerializers;
initMetadataForObject($serializer_51, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Urls, 'InstanceV2Urls', InstanceV2Urls, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_51});
initMetadataForCompanion(Companion_53);
protoOf($serializer_52).w18 = typeParametersSerializers;
initMetadataForObject($serializer_52, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Usage, 'InstanceV2Usage', InstanceV2Usage, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_52});
initMetadataForCompanion(Companion_54);
protoOf($serializer_53).w18 = typeParametersSerializers;
initMetadataForObject($serializer_53, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Users, 'InstanceV2Users', InstanceV2Users, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_53});
initMetadataForCompanion(Companion_55);
protoOf($serializer_54).w18 = typeParametersSerializers;
initMetadataForObject($serializer_54, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Vapid, 'InstanceV2Vapid', InstanceV2Vapid, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_54});
initMetadataForCompanion(Companion_56);
protoOf($serializer_55).w18 = typeParametersSerializers;
initMetadataForObject($serializer_55, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Versions, 'InstanceV2Versions', InstanceV2Versions, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_55});
initMetadataForCompanion(Companion_57);
protoOf($serializer_56).w18 = typeParametersSerializers;
initMetadataForObject($serializer_56, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Meta, 'Meta', Meta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_56});
initMetadataForCompanion(Companion_58);
protoOf($serializer_57).w18 = typeParametersSerializers;
initMetadataForObject($serializer_57, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MetaFocus, 'MetaFocus', MetaFocus, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_57});
initMetadataForCompanion(Companion_59);
protoOf($serializer_58).w18 = typeParametersSerializers;
initMetadataForObject($serializer_58, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MetaOriginal, 'MetaOriginal', MetaOriginal, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_58});
initMetadataForCompanion(Companion_60);
protoOf($serializer_59).w18 = typeParametersSerializers;
initMetadataForObject($serializer_59, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Node, 'Node', Node, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_59});
initMetadataForCompanion(Companion_61);
protoOf($serializer_60).w18 = typeParametersSerializers;
initMetadataForObject($serializer_60, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NodeSoftware, 'NodeSoftware', NodeSoftware, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_60});
initMetadataForCompanion(Companion_62);
protoOf($serializer_61).w18 = typeParametersSerializers;
initMetadataForObject($serializer_61, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NodeInfo, 'NodeInfo', NodeInfo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_61});
initMetadataForCompanion(Companion_63);
protoOf($serializer_62).w18 = typeParametersSerializers;
initMetadataForObject($serializer_62, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NodeInfoLinks, 'NodeInfoLinks', NodeInfoLinks, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_62});
initMetadataForCompanion(Companion_64);
protoOf($serializer_63).w18 = typeParametersSerializers;
initMetadataForObject($serializer_63, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PleromaAccount, 'PleromaAccount', PleromaAccount, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_63});
initMetadataForCompanion(Companion_65);
protoOf($serializer_64).w18 = typeParametersSerializers;
initMetadataForObject($serializer_64, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PleromaContent, 'PleromaContent', PleromaContent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_64});
initMetadataForCompanion(Companion_66);
protoOf($serializer_65).w18 = typeParametersSerializers;
initMetadataForObject($serializer_65, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PleromaReaction, 'PleromaReaction', PleromaReaction, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_65});
initMetadataForCompanion(Companion_67);
protoOf($serializer_66).w18 = typeParametersSerializers;
initMetadataForObject($serializer_66, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PleromaStatus, 'PleromaStatus', PleromaStatus, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_66});
initMetadataForCompanion(Companion_68);
initMetadataForClass(Link, 'Link', Link);
initMetadataForCompanion(Companion_69);
initMetadataForClass(RateLimit, 'RateLimit', RateLimit);
initMetadataForCompanion(Companion_70);
initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl');
initMetadataForClass(AbstractAuthResourceImpl, 'AbstractAuthResourceImpl');
initMetadataForLambda(AccountsResourceImpl$verifyCredentials$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$updateCredentials$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$account$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$followers$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$following$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$statuses$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$follow$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$unfollow$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$block$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$unblock$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$mute$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$unmute$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$relationships$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$search$slambda, VOID, VOID, [1]);
initMetadataForClass(AccountsResourceImpl, 'AccountsResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, AccountsResource]);
initMetadataForLambda(AppsResourceImpl$registerApplication$slambda, VOID, VOID, [1]);
initMetadataForClass(AppsResourceImpl, 'AppsResourceImpl', VOID, VOID, [AbstractResourceImpl, AppsResource]);
initMetadataForLambda(BlocksResourceImpl$blocks$slambda, VOID, VOID, [1]);
initMetadataForClass(BlocksResourceImpl, 'BlocksResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, BlocksResource]);
initMetadataForLambda(EmojisResourceImpl$customEmojis$slambda, VOID, VOID, [1]);
initMetadataForClass(EmojisResourceImpl, 'EmojisResourceImpl', VOID, VOID, [AbstractResourceImpl, EmojisResource]);
initMetadataForLambda(FavouritesResourceImpl$favourites$slambda, VOID, VOID, [1]);
initMetadataForClass(FavouritesResourceImpl, 'FavouritesResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, FavouritesResource]);
initMetadataForLambda(FollowRequestsResourceImpl$followRequests$slambda, VOID, VOID, [1]);
initMetadataForLambda(FollowRequestsResourceImpl$authorizeFollowRequest$slambda, VOID, VOID, [1]);
initMetadataForLambda(FollowRequestsResourceImpl$rejectFollowRequest$slambda, VOID, VOID, [1]);
initMetadataForClass(FollowRequestsResourceImpl, 'FollowRequestsResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, FollowRequestsResource]);
initMetadataForLambda(FollowsResourceImpl$remoteFollow$slambda, VOID, VOID, [1]);
initMetadataForClass(FollowsResourceImpl, 'FollowsResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, FollowsResource]);
initMetadataForLambda(InstancesResourceImpl$instanceV1$slambda, VOID, VOID, [1]);
initMetadataForLambda(InstancesResourceImpl$instanceV2$slambda, VOID, VOID, [1]);
initMetadataForClass(InstancesResourceImpl, 'InstancesResourceImpl', VOID, VOID, [AbstractResourceImpl, InstancesResource]);
initMetadataForObject(InternalUtility, 'InternalUtility');
initMetadataForLambda(ListsResourceImpl$lists$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$listAccounts$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$list$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$createList$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$updateList$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$deleteList$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$addAccountsToList$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$deleteAccountsToList$slambda, VOID, VOID, [1]);
initMetadataForClass(ListsResourceImpl, 'ListsResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, ListsResource]);
initMetadataForClass(MastodonImpl, 'MastodonImpl', VOID, VOID, [Mastodon]);
initMetadataForLambda(MediasResourceImpl$postMedia$slambda, VOID, VOID, [1]);
initMetadataForClass(MediasResourceImpl, 'MediasResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, MediasResource]);
initMetadataForLambda(MutesResourceImpl$mutes$slambda, VOID, VOID, [1]);
initMetadataForClass(MutesResourceImpl, 'MutesResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, MutesResource]);
initMetadataForLambda(NodesResourceImpl$nodeInfo$slambda, VOID, VOID, [1]);
initMetadataForClass(NodesResourceImpl, 'NodesResourceImpl', VOID, VOID, [AbstractResourceImpl, NodesResource]);
initMetadataForLambda(NotificationsResourceImpl$notifications$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$notification$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$clearNotifications$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$subscription$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$pushSubscription$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$editSubscription$slambda, VOID, VOID, [1]);
initMetadataForClass(NotificationsResourceImpl, 'NotificationsResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, NotificationsResource]);
initMetadataForLambda(OAuthResourceImpl$issueAccessTokenWithCredentials$slambda, VOID, VOID, [1]);
initMetadataForLambda(OAuthResourceImpl$issueAccessTokenWithAuthorizationCode$slambda, VOID, VOID, [1]);
initMetadataForLambda(OAuthResourceImpl$refreshAccessToken$slambda, VOID, VOID, [1]);
initMetadataForLambda(OAuthResourceImpl$authorizationUrl$slambda, VOID, VOID, [1]);
initMetadataForClass(OAuthResourceImpl, 'OAuthResourceImpl', VOID, VOID, [AbstractResourceImpl, OAuthResource]);
initMetadataForLambda(PollsResourceImpl$votePoll$slambda, VOID, VOID, [1]);
initMetadataForClass(PollsResourceImpl, 'PollsResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, PollsResource]);
initMetadataForLambda(ReportsResourceImpl$reports$slambda, VOID, VOID, [1]);
initMetadataForLambda(ReportsResourceImpl$postReport$slambda, VOID, VOID, [1]);
initMetadataForClass(ReportsResourceImpl, 'ReportsResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, ReportsResource]);
initMetadataForLambda(SearchResourceImpl$search$slambda, VOID, VOID, [1]);
initMetadataForClass(SearchResourceImpl, 'SearchResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, SearchResource]);
initMetadataForLambda(StatusesResourceImpl$status$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$context$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$card$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$rebloggedBy$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$favouritedBy$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$postStatus$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$deleteStatus$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$reblog$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$unreblog$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$favourite$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$unfavourite$slambda, VOID, VOID, [1]);
initMetadataForClass(StatusesResourceImpl, 'StatusesResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, StatusesResource]);
initMetadataForLambda(TimelinesResourceImpl$homeTimeline$slambda, VOID, VOID, [1]);
initMetadataForLambda(TimelinesResourceImpl$publicTimeline$slambda, VOID, VOID, [1]);
initMetadataForLambda(TimelinesResourceImpl$hashtagTimeline$slambda, VOID, VOID, [1]);
initMetadataForLambda(TimelinesResourceImpl$listTimeline$slambda, VOID, VOID, [1]);
initMetadataForLambda(TimelinesResourceImpl$conversations$slambda, VOID, VOID, [1]);
initMetadataForClass(TimelinesResourceImpl, 'TimelinesResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, TimelinesResource]);
initMetadataForLambda(TrendsResourceImpl$trends$slambda, VOID, VOID, [1]);
initMetadataForClass(TrendsResourceImpl, 'TrendsResourceImpl', VOID, VOID, [AbstractAuthResourceImpl, TrendsResource]);
initMetadataForObject(MediaType, 'MediaType');
//endregion
//region block: init
MastodonFactory_instance = new MastodonFactory_0();
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
Companion_instance_24 = new Companion_24();
Companion_instance_27 = new Companion_27();
Companion_instance_29 = new Companion_29();
Companion_instance_30 = new Companion_30();
Companion_instance_32 = new Companion_32();
Companion_instance_33 = new Companion_33();
Companion_instance_35 = new Companion_35();
Companion_instance_36 = new Companion_36();
Companion_instance_37 = new Companion_37();
Companion_instance_38 = new Companion_38();
Companion_instance_39 = new Companion_39();
Companion_instance_41 = new Companion_41();
Companion_instance_42 = new Companion_42();
Companion_instance_43 = new Companion_43();
Companion_instance_44 = new Companion_44();
Companion_instance_46 = new Companion_46();
Companion_instance_47 = new Companion_47();
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
Companion_instance_61 = new Companion_61();
Companion_instance_63 = new Companion_63();
Companion_instance_64 = new Companion_64();
Companion_instance_65 = new Companion_65();
Companion_instance_66 = new Companion_66();
Companion_instance_68 = new Companion_68();
Companion_instance_69 = new Companion_69();
Companion_instance_70 = new Companion_70();
//endregion
//region block: exports
var MastodonFactory = {getInstance: MastodonFactory_getInstance};
Service.values = values;
Service.valueOf = valueOf;
defineProp(Service, 'MASTODON', Service_MASTODON_getInstance, VOID, true);
defineProp(Service, 'PIXELFED', Service_PIXELFED_getInstance, VOID, true);
defineProp(Service, 'PLEROMA', Service_PLEROMA_getInstance, VOID, true);
defineProp(Service, 'Companion', Companion_getInstance_0, VOID, true);
defineProp(AccessToken, 'Companion', Companion_getInstance_1, VOID, true);
defineProp(Account, 'Companion', Companion_getInstance_2, VOID, true);
defineProp(AccountList, 'Companion', Companion_getInstance_3, VOID, true);
defineProp(AccountSource, 'Companion', Companion_getInstance_4, VOID, true);
defineProp(Alert, 'Companion', Companion_getInstance_5, VOID, true);
defineProp(Application, 'Companion', Companion_getInstance_6, VOID, true);
defineProp(Attachment, 'Companion', Companion_getInstance_7, VOID, true);
defineProp(Card, 'Companion', Companion_getInstance_8, VOID, true);
defineProp(ClientCredential, 'Companion', Companion_getInstance_9, VOID, true);
defineProp(Context, 'Companion', Companion_getInstance_10, VOID, true);
defineProp(Conversation, 'Companion', Companion_getInstance_11, VOID, true);
defineProp(Emoji, 'Companion', Companion_getInstance_12, VOID, true);
defineProp(Error_0, 'Companion', Companion_getInstance_13, VOID, true);
defineProp(Field, 'Companion', Companion_getInstance_14, VOID, true);
defineProp(History, 'Companion', Companion_getInstance_15, VOID, true);
defineProp(Mention, 'Companion', Companion_getInstance_16, VOID, true);
defineProp(Notification, 'Companion', Companion_getInstance_17, VOID, true);
defineProp(Poll, 'Companion', Companion_getInstance_18, VOID, true);
defineProp(PollOption, 'Companion', Companion_getInstance_19, VOID, true);
defineProp(Relationship, 'Companion', Companion_getInstance_20, VOID, true);
defineProp(Report, 'Companion', Companion_getInstance_21, VOID, true);
defineProp(Results, 'Companion', Companion_getInstance_22, VOID, true);
defineProp(Role, 'Companion', Companion_getInstance_23, VOID, true);
defineProp(Status, 'Companion', Companion_getInstance_24, VOID, true);
defineProp(Subscription, 'Companion', Companion_getInstance_25, VOID, true);
defineProp(Tag, 'Companion', Companion_getInstance_26, VOID, true);
defineProp(Trend, 'Companion', Companion_getInstance_27, VOID, true);
defineProp(WebPush, 'Companion', Companion_getInstance_28, VOID, true);
defineProp(Filter, 'Companion', Companion_getInstance_29, VOID, true);
defineProp(FilterKeyword, 'Companion', Companion_getInstance_30, VOID, true);
defineProp(FilterStatus, 'Companion', Companion_getInstance_31, VOID, true);
defineProp(InstanceV1, 'Companion', Companion_getInstance_32, VOID, true);
defineProp(InstanceV1Configuration, 'Companion', Companion_getInstance_33, VOID, true);
defineProp(InstanceV1Fields, 'Companion', Companion_getInstance_34, VOID, true);
defineProp(InstanceV1MediaAttachments, 'Companion', Companion_getInstance_35, VOID, true);
defineProp(InstanceV1Polls, 'Companion', Companion_getInstance_36, VOID, true);
defineProp(InstanceV1Rules, 'Companion', Companion_getInstance_37, VOID, true);
defineProp(InstanceV1Stats, 'Companion', Companion_getInstance_38, VOID, true);
defineProp(InstanceV1Statuses, 'Companion', Companion_getInstance_39, VOID, true);
defineProp(InstanceV1Urls, 'Companion', Companion_getInstance_40, VOID, true);
defineProp(InstanceV2, 'Companion', Companion_getInstance_41, VOID, true);
defineProp(InstanceV2Accounts, 'Companion', Companion_getInstance_42, VOID, true);
defineProp(InstanceV2Configuration, 'Companion', Companion_getInstance_43, VOID, true);
defineProp(InstanceV2Contact, 'Companion', Companion_getInstance_44, VOID, true);
defineProp(InstanceV2Fields, 'Companion', Companion_getInstance_45, VOID, true);
defineProp(InstanceV2MediaAttachments, 'Companion', Companion_getInstance_46, VOID, true);
defineProp(InstanceV2Polls, 'Companion', Companion_getInstance_47, VOID, true);
defineProp(InstanceV2Registrations, 'Companion', Companion_getInstance_48, VOID, true);
defineProp(InstanceV2Rules, 'Companion', Companion_getInstance_49, VOID, true);
defineProp(InstanceV2Statuses, 'Companion', Companion_getInstance_50, VOID, true);
defineProp(InstanceV2Thumbnail, 'Companion', Companion_getInstance_51, VOID, true);
defineProp(InstanceV2Translation, 'Companion', Companion_getInstance_52, VOID, true);
defineProp(InstanceV2Urls, 'Companion', Companion_getInstance_53, VOID, true);
defineProp(InstanceV2Usage, 'Companion', Companion_getInstance_54, VOID, true);
defineProp(InstanceV2Users, 'Companion', Companion_getInstance_55, VOID, true);
defineProp(InstanceV2Vapid, 'Companion', Companion_getInstance_56, VOID, true);
defineProp(InstanceV2Versions, 'Companion', Companion_getInstance_57, VOID, true);
defineProp(Meta, 'Companion', Companion_getInstance_58, VOID, true);
defineProp(MetaFocus, 'Companion', Companion_getInstance_59, VOID, true);
defineProp(MetaOriginal, 'Companion', Companion_getInstance_60, VOID, true);
defineProp(Node, 'Companion', Companion_getInstance_61, VOID, true);
defineProp(NodeSoftware, 'Companion', Companion_getInstance_62, VOID, true);
defineProp(NodeInfo, 'Companion', Companion_getInstance_63, VOID, true);
defineProp(NodeInfoLinks, 'Companion', Companion_getInstance_64, VOID, true);
defineProp(PleromaAccount, 'Companion', Companion_getInstance_65, VOID, true);
defineProp(PleromaContent, 'Companion', Companion_getInstance_66, VOID, true);
defineProp(PleromaReaction, 'Companion', Companion_getInstance_67, VOID, true);
defineProp(PleromaStatus, 'Companion', Companion_getInstance_68, VOID, true);
defineProp(Link, 'Companion', Companion_getInstance_69, VOID, true);
defineProp(RateLimit, 'Companion', Companion_getInstance_70, VOID, true);
export {
  MastodonFactory as MastodonFactory,
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
  SearchSearchRequest as SearchSearchRequest,
  StatusesCardRequest as StatusesCardRequest,
  StatusesContextRequest as StatusesContextRequest,
  StatusesDeleteStatusRequest as StatusesDeleteStatusRequest,
  StatusesFavouriteRequest as StatusesFavouriteRequest,
  StatusesFavouritedByRequest as StatusesFavouritedByRequest,
  StatusesPostStatusRequest as StatusesPostStatusRequest,
  StatusesReblogRequest as StatusesReblogRequest,
  StatusesRebloggedByRequest as StatusesRebloggedByRequest,
  StatusesStatusRequest as StatusesStatusRequest,
  StatusesUnfavouriteRequest as StatusesUnfavouriteRequest,
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
//endregion

//# sourceMappingURL=kmastodon-core.mjs.map
