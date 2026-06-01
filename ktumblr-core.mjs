import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  Unit_instancev9v8hjid95df as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  captureStack1fzi4aczwc4hg as captureStack,
  RuntimeException1r3t0zl97011n as RuntimeException,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  await2s6xyuld384ut as await_0,
  jsIsFunction2h24qpa0gp5p3 as jsIsFunction,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  protoOf180f3jzyo7rfj as protoOf,
  joinToStringxqcavsxcmh4q as joinToString,
  to2cs3ny02qtbcb as to,
  emptyMapr06gerzljqtm as emptyMap,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  ArrayList3it5z8td81qkl as ArrayList,
  toMap1vec9topfei08 as toMap,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  toString30pk9tzaqopn as toString_0,
  hashCodeq5arwsb9dgti as hashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  equals2au1ep9vhcato as equals,
  getKClass3t8tygqu4lcxf as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  Enum3alwj03lh1n41 as Enum,
  defineProp3ur6h3slcvq4x as defineProp,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  Exceptiondt2hlxn7j7vw as Exception,
  contains3ue2qo8xhmpf1 as contains,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  isInterface3d6p8outrmvmk as isInterface,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  promisify1z0ncraq1ipzh as promisify,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  UnsupportedOperationException2tkumpmhredt3 as UnsupportedOperationException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  BooleanSerializer_getInstance2fsi2wywr82nt as BooleanSerializer_getInstance,
  throwArrayMissingFieldExceptionbk1mj238w44a as throwArrayMissingFieldException,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  SerializersModuleBuilderfxsfdohcdipc as SerializersModuleBuilder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import { CoroutineScopefcb5f5dwqcas as CoroutineScope } from './kotlinx-coroutines-core.mjs';
import {
  URLBuilder2mz8zkz4u9ray as URLBuilder,
  Companion_getInstancek1529r0btmjl as Companion_getInstance,
  set_encodedPath3q0i8nsv3a7qy as set_encodedPath,
  Application_getInstance2wn6cl3kv21f0 as Application_getInstance,
} from './ktor-ktor-http.mjs';
import { AnySerializer_getInstance32lcggytvsxb8 as AnySerializer_getInstance } from './kmpcommon.mjs';
import {
  Jsonsmkyu9xjl7fv as Json,
  JsonContentPolymorphicSerializer1zt3sp8asmujz as JsonContentPolymorphicSerializer,
  get_jsonObject2u4z2ch1uuca9 as get_jsonObject,
  JsonPrimitive3ttzjh2ft5dnx as JsonPrimitive,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Tumblr {}
class TumblrAuth {
  constructor(clientId, clientSecret, accessToken, refreshToken) {
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    this.kdg_1 = clientId;
    this.ldg_1 = clientSecret;
    this.mdg_1 = accessToken;
    this.ndg_1 = refreshToken;
  }
  odg() {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.mdg_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        break $l$block;
      }
    }
    return 'Bearer ' + this.mdg_1;
  }
}
class TumblrException extends RuntimeException {
  static udg(e) {
    var $this = this.je(e);
    init_work_socialhub_ktumblr_TumblrException($this);
    return $this;
  }
  static vdg(status, body) {
    var $this = this.bb('status code: ' + status + ', body: ' + body);
    init_work_socialhub_ktumblr_TumblrException($this);
    $this.rdg_1 = status;
    $this.sdg_1 = body;
    return $this;
  }
}
class TumblrFactory {
  wdg(clientId, clientSecret, accessToken, refreshToken) {
    return new TumblrImpl(new TumblrAuth(clientId, clientSecret, accessToken, refreshToken));
  }
  instance(clientId, clientSecret, accessToken, refreshToken, $super) {
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    return $super === VOID ? this.wdg(clientId, clientSecret, accessToken, refreshToken) : $super.wdg.call(this, clientId, clientSecret, accessToken, refreshToken);
  }
}
class TumblrImpl {
  constructor(tumblrAuth) {
    this.xdg_1 = tumblrAuth;
    this.ydg_1 = new AuthResourceImpl(this.xdg_1);
    this.zdg_1 = new UserResourceImpl(this.xdg_1);
    this.adh_1 = new BlogResourceImpl(this.xdg_1);
    this.bdh_1 = new TaggedResourceImpl(this.xdg_1);
  }
  auth() {
    return this.ydg_1;
  }
  user() {
    return this.zdg_1;
  }
  blog() {
    return this.adh_1;
  }
  tagged() {
    return this.bdh_1;
  }
}
class AuthResource {}
function *oAuth2Token$suspendBridge(request, $completion) {
}
function *oAuth2TokenRefresh$suspendBridge(request, $completion) {
}
class BlogResource {}
function *blogInfo$suspendBridge(request, $completion) {
}
function *blogAvatar$suspendBridge(request, $completion) {
}
function *blogLikes$suspendBridge(request, $completion) {
}
function *blogFollowing$suspendBridge(request, $completion) {
}
function *blogFollowers$suspendBridge(request, $completion) {
}
function *blogPosts$suspendBridge(request, $completion) {
}
function *blogQueuedPosts$suspendBridge(request, $completion) {
}
function *blogDraftPosts$suspendBridge(request, $completion) {
}
function *blogSubmissions$suspendBridge(request, $completion) {
}
function *postCreate$suspendBridge(request, $completion) {
}
function *postEdit$suspendBridge(request, $completion) {
}
function *postReblog$suspendBridge(request, $completion) {
}
function *postDelete$suspendBridge(request, $completion) {
}
function *blogBanner$suspendBridge(request, $completion) {
}
function *blogUpdateInfo$suspendBridge(request, $completion) {
}
function *postEditTags$suspendBridge(request, $completion) {
}
function *postUpdate$suspendBridge(request, $completion) {
}
class TaggedResource {}
function *tagged$suspendBridge(request, $completion) {
}
class UserResource {}
function *user$suspendBridge($completion) {
}
function *userDashboard$suspendBridge(request, $completion) {
}
function *userFollowing$suspendBridge(request, $completion) {
}
function *userLikes$suspendBridge(request, $completion) {
}
function *like$suspendBridge(request, $completion) {
}
function *unlike$suspendBridge(request, $completion) {
}
function *follow$suspendBridge(request, $completion) {
}
function *unfollow$suspendBridge(request, $completion) {
}
class FileRequest {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }
  d1() {
    return this.name;
  }
  u3a() {
    return this.data;
  }
}
class MapRequest {}
function addParam(_this__u8e3s4, key, value) {
  if (value == null)
    return Unit_instance;
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.i4(key, value);
}
class AuthAuthorizeUrlRequest {
  constructor() {
    this.responseType = 'code';
    this.redirectUri = null;
    this.state = null;
    this.scope = 'write offline_access';
  }
  jdk(_set____db54di) {
    this.responseType = _set____db54di;
  }
  kdk() {
    return this.responseType;
  }
  dby(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  eby() {
    return this.redirectUri;
  }
  y9t(_set____db54di) {
    this.state = _set____db54di;
  }
  g7x() {
    return this.state;
  }
  ldk(_set____db54di) {
    this.scope = _set____db54di;
  }
  ybz() {
    return this.scope;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'response_type', this.responseType);
    this.idk(this_0, 'redirect_uri', this.redirectUri);
    this.idk(this_0, 'state', this.state);
    this.idk(this_0, 'scope', this.scope);
    return this_0;
  }
}
class AuthOAuth2TokenRefreshRequest {
  constructor() {
    this.grantType = 'refresh_token';
    this.clientId = null;
    this.clientSecret = null;
    this.refreshToken = null;
  }
  ndk(_set____db54di) {
    this.grantType = _set____db54di;
  }
  odk() {
    return this.grantType;
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
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'grant_type', this.grantType);
    this.idk(this_0, 'client_id', this.clientId);
    this.idk(this_0, 'client_secret', this.clientSecret);
    this.idk(this_0, 'refresh_token', this.refreshToken);
    return this_0;
  }
}
class AuthOAuth2TokenRequest {
  constructor() {
    this.grantType = 'authorization_code';
    this.code = null;
    this.clientId = null;
    this.clientSecret = null;
    this.redirectUri = null;
  }
  ndk(_set____db54di) {
    this.grantType = _set____db54di;
  }
  odk() {
    return this.grantType;
  }
  fby(_set____db54di) {
    this.code = _set____db54di;
  }
  p2x() {
    return this.code;
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
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'grant_type', this.grantType);
    this.idk(this_0, 'code', this.code);
    this.idk(this_0, 'client_id', this.clientId);
    this.idk(this_0, 'client_secret', this.clientSecret);
    this.idk(this_0, 'redirect_uri', this.redirectUri);
    return this_0;
  }
}
class BlogAvatarRequest {
  constructor() {
    this.blogName = null;
    this.size = 0;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  t86(_set____db54di) {
    this.size = _set____db54di;
  }
  k2() {
    return this.size;
  }
}
class BlogBannerRequest {
  constructor() {
    this.blogName = null;
    this.size = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  qck(_set____db54di) {
    this.size = _set____db54di;
  }
  k2() {
    return this.size;
  }
}
class BlogDraftsRequest {
  constructor() {
    this.blogName = null;
    this.beforeId = null;
    this.filter = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  rdk(_set____db54di) {
    this.beforeId = _set____db54di;
  }
  sdk() {
    return this.beforeId;
  }
  tdk(_set____db54di) {
    this.filter = _set____db54di;
  }
  p64() {
    return this.filter;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'before_id', this.beforeId);
    this.idk(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogFollowersRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  j39(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'limit', this.limit);
    this.idk(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogFollowingRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  j39(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'limit', this.limit);
    this.idk(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogInfoRequest {
  constructor() {
    this.blogName = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
}
class BlogLikesRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
    this.before = null;
    this.after = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  j39(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  udk(_set____db54di) {
    this.before = _set____db54di;
  }
  vdk() {
    return this.before;
  }
  wdk(_set____db54di) {
    this.after = _set____db54di;
  }
  xdk() {
    return this.after;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'limit', this.limit);
    this.idk(this_0, 'offset', this.offset);
    this.idk(this_0, 'before', this.before);
    this.idk(this_0, 'after', this.after);
    return this_0;
  }
}
class BlogPostsRequest {
  constructor() {
    this.blogName = null;
    this.type = null;
    this.id = null;
    this.tag = null;
    this.limit = null;
    this.offset = null;
    this.reblogInfo = null;
    this.notesInfo = null;
    this.filter = null;
    this.before = null;
    this.npf = null;
    this.types = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  e33(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  r3b(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  o31(_set____db54di) {
    this.tag = _set____db54di;
  }
  p31() {
    return this.tag;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  j39(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  ydk(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  zdk() {
    return this.reblogInfo;
  }
  adl(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  bdl() {
    return this.notesInfo;
  }
  tdk(_set____db54di) {
    this.filter = _set____db54di;
  }
  p64() {
    return this.filter;
  }
  udk(_set____db54di) {
    this.before = _set____db54di;
  }
  vdk() {
    return this.before;
  }
  cdl(_set____db54di) {
    this.npf = _set____db54di;
  }
  ddl() {
    return this.npf;
  }
  zbx(_set____db54di) {
    this.types = _set____db54di;
  }
  aby() {
    return this.types;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'id', this.id);
    this.idk(this_0, 'tag', this.tag);
    this.idk(this_0, 'limit', this.limit);
    this.idk(this_0, 'offset', this.offset);
    this.idk(this_0, 'reblog_info', this.reblogInfo);
    this.idk(this_0, 'notes_info', this.notesInfo);
    this.idk(this_0, 'filter', this.filter);
    this.idk(this_0, 'before', this.before);
    this.idk(this_0, 'npf', this.npf);
    var tmp0_safe_receiver = this.types;
    this.idk(this_0, 'types', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
    return this_0;
  }
}
class BlogQueueRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
    this.filter = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  j39(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  tdk(_set____db54di) {
    this.filter = _set____db54di;
  }
  p64() {
    return this.filter;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'limit', this.limit);
    this.idk(this_0, 'offset', this.offset);
    this.idk(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogSubmissionsRequest {
  constructor() {
    this.blogName = null;
    this.offset = null;
    this.filter = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  edl(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  tdk(_set____db54di) {
    this.filter = _set____db54di;
  }
  p64() {
    return this.filter;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'offset', this.offset);
    this.idk(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogUpdateInfoRequest {
  constructor() {
    this.blogName = null;
    this.name = null;
    this.title = null;
    this.description = null;
    this.ask = null;
    this.submit = null;
    this.isDescriptionIndexable = null;
    this.isIndexFollowed = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
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
  fdl(_set____db54di) {
    this.ask = _set____db54di;
  }
  gdl() {
    return this.ask;
  }
  hdl(_set____db54di) {
    this.submit = _set____db54di;
  }
  idl() {
    return this.submit;
  }
  jdl(_set____db54di) {
    this.isDescriptionIndexable = _set____db54di;
  }
  kdl() {
    return this.isDescriptionIndexable;
  }
  ldl(_set____db54di) {
    this.isIndexFollowed = _set____db54di;
  }
  mdl() {
    return this.isIndexFollowed;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'name', this.name);
    this.idk(this_0, 'title', this.title);
    this.idk(this_0, 'description', this.description);
    this.idk(this_0, 'ask', this.ask);
    this.idk(this_0, 'submit', this.submit);
    this.idk(this_0, 'is_description_indexable', this.isDescriptionIndexable);
    this.idk(this_0, 'is_index_followed', this.isIndexFollowed);
    return this_0;
  }
}
class BlogPostRequest {
  constructor() {
    this.blogName = null;
    this.id = null;
    this.type = null;
    this.state = null;
    this.tags = null;
    this.tweet = null;
    this.date = null;
    this.format = null;
    this.slug = null;
    this.nativeInlineImages = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
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
  y9t(_set____db54di) {
    this.state = _set____db54di;
  }
  g7x() {
    return this.state;
  }
  tdl(_set____db54di) {
    this.tags = _set____db54di;
  }
  ga2() {
    return this.tags;
  }
  udl(_set____db54di) {
    this.tweet = _set____db54di;
  }
  vdl() {
    return this.tweet;
  }
  wdl(_set____db54di) {
    this.date = _set____db54di;
  }
  xdl() {
    return this.date;
  }
  ydl(_set____db54di) {
    this.format = _set____db54di;
  }
  zdl() {
    return this.format;
  }
  adm(_set____db54di) {
    this.slug = _set____db54di;
  }
  bdm() {
    return this.slug;
  }
  cdm(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  ddm() {
    return this.nativeInlineImages;
  }
  sdl() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    addParam_0(this_0, 'id', this.id);
    addParam_0(this_0, 'type', this.type);
    addParam_0(this_0, 'state', this.state);
    addParam_0(this_0, 'tags', this.tags);
    addParam_0(this_0, 'tweet', this.tweet);
    addParam_0(this_0, 'date', this.date);
    addParam_0(this_0, 'format', this.format);
    addParam_0(this_0, 'slug', this.slug);
    addParam_0(this_0, 'native_inline_images', this.nativeInlineImages);
    return this_0;
  }
}
class BlogAudioPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.caption = null;
    this.externalUrl = null;
    this.data = null;
  }
  ndl(_set____db54di) {
    this.caption = _set____db54di;
  }
  odl() {
    return this.caption;
  }
  pdl(_set____db54di) {
    this.externalUrl = _set____db54di;
  }
  qdl() {
    return this.externalUrl;
  }
  rdl(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
  mdk() {
    // Inline function 'kotlin.also' call
    var this_0 = this.sdl();
    this.idk(this_0, 'caption', this.caption);
    this.idk(this_0, 'external_url', this.externalUrl);
    this.idk(this_0, 'data', this.data);
    return this_0;
  }
}
class BlogChatPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.conversation = null;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
  edm(_set____db54di) {
    this.conversation = _set____db54di;
  }
  fdm() {
    return this.conversation;
  }
  mdk() {
    // Inline function 'kotlin.also' call
    var this_0 = this.sdl();
    this.idk(this_0, 'title', this.title);
    this.idk(this_0, 'conversation', this.conversation);
    return this_0;
  }
}
class BlogDeleteRequest {
  constructor() {
    this.blogName = null;
    this.id = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'id', this.id);
    return this_0;
  }
}
class BlogLinkPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.url = null;
    this.description = null;
    this.thumbnail = null;
    this.excerpt = null;
    this.author = null;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  v31(_set____db54di) {
    this.description = _set____db54di;
  }
  f31() {
    return this.description;
  }
  g7k(_set____db54di) {
    this.thumbnail = _set____db54di;
  }
  h7k() {
    return this.thumbnail;
  }
  gdm(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  hdm() {
    return this.excerpt;
  }
  idm(_set____db54di) {
    this.author = _set____db54di;
  }
  l7i() {
    return this.author;
  }
  mdk() {
    // Inline function 'kotlin.also' call
    var this_0 = this.sdl();
    this.idk(this_0, 'title', this.title);
    this.idk(this_0, 'url', this.url);
    this.idk(this_0, 'description', this.description);
    this.idk(this_0, 'thumbnail', this.thumbnail);
    this.idk(this_0, 'excerpt', this.excerpt);
    this.idk(this_0, 'author', this.author);
    return this_0;
  }
}
class BlogPhotoPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.caption = null;
    this.link = null;
    this.source = null;
    this.data = null;
    this.data64 = null;
  }
  ndl(_set____db54di) {
    this.caption = _set____db54di;
  }
  odl() {
    return this.caption;
  }
  y86(_set____db54di) {
    this.link = _set____db54di;
  }
  a2x() {
    return this.link;
  }
  jdm(_set____db54di) {
    this.source = _set____db54di;
  }
  g1z() {
    return this.source;
  }
  kdm(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
  ldm(_set____db54di) {
    this.data64 = _set____db54di;
  }
  mdm() {
    return this.data64;
  }
  mdk() {
    // Inline function 'kotlin.also' call
    var this_0 = this.sdl();
    this.idk(this_0, 'caption', this.caption);
    this.idk(this_0, 'link', this.link);
    this.idk(this_0, 'source', this.source);
    this.idk(this_0, 'data64', this.data64);
    return this_0;
  }
  ndm() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    var tmp0_safe_receiver = this.data;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.length;
      while (inductionVariable < last) {
        var item = tmp0_safe_receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var tmp2 = 'data[' + _unary__edvuaz + ']';
        // Inline function 'kotlin.collections.set' call
        var value = to(item.name, item.data);
        this_0.i4(tmp2, value);
      }
    }
    return this_0;
  }
}
class BlogPostEditTagsRequest {
  constructor() {
    this.blogName = null;
    this.id = null;
    this.tags = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  la7(_set____db54di) {
    this.tags = _set____db54di;
  }
  ga2() {
    return this.tags;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'id', this.id);
    var tmp0_safe_receiver = this.tags;
    this.idk(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
    return this_0;
  }
}
class BlogPostUpdateRequest {
  constructor() {
    this.blogName = null;
    this.id = null;
    this.type = null;
    this.title = null;
    this.body = null;
    this.slug = null;
    this.startDate = null;
    this.tzAddress = null;
    this.replyKey = null;
    this.tags = null;
    this.data = null;
    this.caption = null;
    this.link = null;
    this.quoteText = null;
    this.quoteSource = null;
    this.linkUrl = null;
    this.linkTitle = null;
    this.linkDescription = null;
    this.chatTitle = null;
    this.chatLabel = null;
    this.chatDialogue = null;
    this.externalUrl = null;
    this.embed = null;
    this.answer = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
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
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
  ta8(_set____db54di) {
    this.body = _set____db54di;
  }
  ua8() {
    return this.body;
  }
  adm(_set____db54di) {
    this.slug = _set____db54di;
  }
  bdm() {
    return this.slug;
  }
  odm(_set____db54di) {
    this.startDate = _set____db54di;
  }
  pdm() {
    return this.startDate;
  }
  qdm(_set____db54di) {
    this.tzAddress = _set____db54di;
  }
  rdm() {
    return this.tzAddress;
  }
  sdm(_set____db54di) {
    this.replyKey = _set____db54di;
  }
  tdm() {
    return this.replyKey;
  }
  la7(_set____db54di) {
    this.tags = _set____db54di;
  }
  ga2() {
    return this.tags;
  }
  kdm(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
  ndl(_set____db54di) {
    this.caption = _set____db54di;
  }
  odl() {
    return this.caption;
  }
  y86(_set____db54di) {
    this.link = _set____db54di;
  }
  a2x() {
    return this.link;
  }
  udm(_set____db54di) {
    this.quoteText = _set____db54di;
  }
  vdm() {
    return this.quoteText;
  }
  wdm(_set____db54di) {
    this.quoteSource = _set____db54di;
  }
  xdm() {
    return this.quoteSource;
  }
  ydm(_set____db54di) {
    this.linkUrl = _set____db54di;
  }
  zdm() {
    return this.linkUrl;
  }
  adn(_set____db54di) {
    this.linkTitle = _set____db54di;
  }
  bdn() {
    return this.linkTitle;
  }
  cdn(_set____db54di) {
    this.linkDescription = _set____db54di;
  }
  ddn() {
    return this.linkDescription;
  }
  edn(_set____db54di) {
    this.chatTitle = _set____db54di;
  }
  fdn() {
    return this.chatTitle;
  }
  gdn(_set____db54di) {
    this.chatLabel = _set____db54di;
  }
  hdn() {
    return this.chatLabel;
  }
  idn(_set____db54di) {
    this.chatDialogue = _set____db54di;
  }
  jdn() {
    return this.chatDialogue;
  }
  pdl(_set____db54di) {
    this.externalUrl = _set____db54di;
  }
  qdl() {
    return this.externalUrl;
  }
  kdn(_set____db54di) {
    this.embed = _set____db54di;
  }
  e6a() {
    return this.embed;
  }
  ldn(_set____db54di) {
    this.answer = _set____db54di;
  }
  mdn() {
    return this.answer;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'id', this.id);
    this.idk(this_0, 'type', this.type);
    this.idk(this_0, 'title', this.title);
    this.idk(this_0, 'body', this.body);
    this.idk(this_0, 'slug', this.slug);
    this.idk(this_0, 'start_date', this.startDate);
    this.idk(this_0, 'tz_address', this.tzAddress);
    this.idk(this_0, 'reply_key', this.replyKey);
    var tmp0_safe_receiver = this.tags;
    this.idk(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
    this.idk(this_0, 'caption', this.caption);
    this.idk(this_0, 'link', this.link);
    this.idk(this_0, 'quote_text', this.quoteText);
    this.idk(this_0, 'quote_source', this.quoteSource);
    this.idk(this_0, 'link_url', this.linkUrl);
    this.idk(this_0, 'link_title', this.linkTitle);
    this.idk(this_0, 'link_description', this.linkDescription);
    this.idk(this_0, 'chat_title', this.chatTitle);
    this.idk(this_0, 'chat_label', this.chatLabel);
    this.idk(this_0, 'chat_dialogue', this.chatDialogue);
    this.idk(this_0, 'external_url', this.externalUrl);
    this.idk(this_0, 'embed', this.embed);
    this.idk(this_0, 'answer', this.answer);
    return this_0;
  }
  toFileMap() {
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = this.data;
    var tmp;
    if (this_0 == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = this_0.length === 0;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.mapOf' call
      return emptyMap();
    }
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_1 = ensureNotNull(this.data);
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList.d2(this_1.length);
    var index = 0;
    var inductionVariable = 0;
    var last = this_1.length;
    while (inductionVariable < last) {
      var item = this_1[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var tmp$ret$5 = to('data[' + _unary__edvuaz + ']', to(item.name, item.data));
      destination.e2(tmp$ret$5);
    }
    return toMap(destination);
  }
}
class BlogQuotePostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.quote = null;
    this.source = null;
  }
  ndn(_set____db54di) {
    this.quote = _set____db54di;
  }
  odn() {
    return this.quote;
  }
  jdm(_set____db54di) {
    this.source = _set____db54di;
  }
  g1z() {
    return this.source;
  }
  mdk() {
    // Inline function 'kotlin.also' call
    var this_0 = this.sdl();
    this.idk(this_0, 'quote', this.quote);
    this.idk(this_0, 'source', this.source);
    return this_0;
  }
}
class BlogReblogRequest {
  constructor() {
    this.blogName = null;
    this.id = null;
    this.reblogKey = null;
    this.comment = null;
    this.nativeInlineImages = null;
  }
  pdk(_set____db54di) {
    this.blogName = _set____db54di;
  }
  qdk() {
    return this.blogName;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  pdn(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  qdn() {
    return this.reblogKey;
  }
  n95(_set____db54di) {
    this.comment = _set____db54di;
  }
  h37() {
    return this.comment;
  }
  cdm(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  ddm() {
    return this.nativeInlineImages;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'id', this.id);
    this.idk(this_0, 'reblog_key', this.reblogKey);
    this.idk(this_0, 'comment', this.comment);
    this.idk(this_0, 'native_inline_images', this.nativeInlineImages);
    return this_0;
  }
}
class BlogTextPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.body = null;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
  ta8(_set____db54di) {
    this.body = _set____db54di;
  }
  ua8() {
    return this.body;
  }
  mdk() {
    // Inline function 'kotlin.also' call
    var this_0 = this.sdl();
    this.idk(this_0, 'title', this.title);
    this.idk(this_0, 'body', this.body);
    return this_0;
  }
}
class BlogVideoPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.caption = null;
    this.embed = null;
    this.data = null;
  }
  ndl(_set____db54di) {
    this.caption = _set____db54di;
  }
  odl() {
    return this.caption;
  }
  kdn(_set____db54di) {
    this.embed = _set____db54di;
  }
  e6a() {
    return this.embed;
  }
  rdl(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
  mdk() {
    // Inline function 'kotlin.also' call
    var this_0 = this.sdl();
    this.idk(this_0, 'caption', this.caption);
    this.idk(this_0, 'embed', this.embed);
    this.idk(this_0, 'data', this.data);
    return this_0;
  }
}
class TaggedRequest {
  constructor() {
    this.tag = null;
    this.before = null;
    this.limit = null;
    this.filter = null;
  }
  o31(_set____db54di) {
    this.tag = _set____db54di;
  }
  p31() {
    return this.tag;
  }
  udk(_set____db54di) {
    this.before = _set____db54di;
  }
  vdk() {
    return this.before;
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
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'tag', this.tag);
    this.idk(this_0, 'before', this.before);
    this.idk(this_0, 'limit', this.limit);
    this.idk(this_0, 'filter', this.filter);
    return this_0;
  }
}
class UserDashboardRequest {
  constructor() {
    this.limit = null;
    this.offset = null;
    this.type = null;
    this.sinceId = null;
    this.reblogInfo = null;
    this.notesInfo = null;
    this.npf = null;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  j39(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  e33(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  rdn(_set____db54di) {
    this.sinceId = _set____db54di;
  }
  o38() {
    return this.sinceId;
  }
  ydk(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  zdk() {
    return this.reblogInfo;
  }
  adl(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  bdl() {
    return this.notesInfo;
  }
  cdl(_set____db54di) {
    this.npf = _set____db54di;
  }
  ddl() {
    return this.npf;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'limit', this.limit);
    this.idk(this_0, 'offset', this.offset);
    this.idk(this_0, 'type', this.type);
    this.idk(this_0, 'since_id', this.sinceId);
    this.idk(this_0, 'reblog_info', this.reblogInfo);
    this.idk(this_0, 'notes_info', this.notesInfo);
    this.idk(this_0, 'npf', this.npf);
    return this_0;
  }
}
class UserFollowRequest {
  constructor() {
    this.url = null;
    this.email = null;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  g6s(_set____db54di) {
    this.email = _set____db54di;
  }
  b2x() {
    return this.email;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'url', this.url);
    this.idk(this_0, 'email', this.email);
    return this_0;
  }
}
class UserFollowingRequest {
  constructor() {
    this.limit = null;
    this.offset = null;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  j39(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'limit', this.limit);
    this.idk(this_0, 'offset', this.offset);
    return this_0;
  }
}
class UserLikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  pdn(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  qdn() {
    return this.reblogKey;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'id', this.id);
    this.idk(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  }
}
class UserLikesRequest {
  constructor() {
    this.limit = null;
    this.offset = null;
    this.before = null;
    this.after = null;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  j39(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  udk(_set____db54di) {
    this.before = _set____db54di;
  }
  vdk() {
    return this.before;
  }
  wdk(_set____db54di) {
    this.after = _set____db54di;
  }
  xdk() {
    return this.after;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'limit', this.limit);
    this.idk(this_0, 'offset', this.offset);
    this.idk(this_0, 'before', this.before);
    this.idk(this_0, 'after', this.after);
    return this_0;
  }
}
class UserUnfollowRequest {
  constructor() {
    this.url = null;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'url', this.url);
    return this_0;
  }
}
class UserUnlikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  pdn(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  qdn() {
    return this.reblogKey;
  }
  mdk() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.idk(this_0, 'id', this.id);
    this.idk(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', null, 2);
    tmp0_serialDesc.m1a('meta', true);
    tmp0_serialDesc.m1a('response', true);
    this.sdn_1 = tmp0_serialDesc;
  }
  tbc(typeSerial0) {
    return $serializer.vdn(typeSerial0);
  }
  o1b(typeParamsSerializers) {
    return this.tbc(typeParamsSerializers[0]);
  }
}
class $serializer {
  static wdn() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', $this, 2);
    tmp0_serialDesc.m1a('meta', true);
    tmp0_serialDesc.m1a('response', true);
    $this.tdn_1 = tmp0_serialDesc;
    return $this;
  }
  xdn(encoder, value) {
    var tmp0_desc = this.tdn_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.meta == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance(), value.meta);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.response == null)) {
      tmp1_output.m14(tmp0_desc, 1, this.udn_1, value.response);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xdn(encoder, value instanceof Body ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tdn_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, this.udn_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, this.udn_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return Body.ydn(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.tdn_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance()), get_nullable(this.udn_1)];
  }
  d1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.udn_1];
  }
  static vdn(typeSerial0) {
    var $this = this.wdn();
    $this.udn_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor() {
    Companion_getInstance_0();
    this.meta = null;
    this.response = null;
  }
  zdn(_set____db54di) {
    this.meta = _set____db54di;
  }
  bc3() {
    return this.meta;
  }
  ado(_set____db54di) {
    this.response = _set____db54di;
  }
  a4i() {
    return this.response;
  }
  static ydn(seen0, meta, response, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, Companion_getInstance_0().sdn_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.meta = null;
    else
      $this.meta = meta;
    if (0 === (seen0 & 2))
      $this.response = null;
    else
      $this.response = response;
    return $this;
  }
}
class Companion_0 {}
class $serializer_0 {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Meta', this, 2);
    tmp0_serialDesc.m1a('status', true);
    tmp0_serialDesc.m1a('msg', true);
    this.bdo_1 = tmp0_serialDesc;
  }
  cdo(encoder, value) {
    var tmp0_desc = this.bdo_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.status == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.status);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.msg == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.msg);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.cdo(encoder, value instanceof Meta ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.bdo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
    return Meta.ddo(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.bdo_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Meta {
  constructor() {
    this.status = null;
    this.msg = null;
  }
  edo(_set____db54di) {
    this.status = _set____db54di;
  }
  m4k() {
    return this.status;
  }
  fdo(_set____db54di) {
    this.msg = _set____db54di;
  }
  gdo() {
    return this.msg;
  }
  static ddo(seen0, status, msg, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().bdo_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.status = null;
    else
      $this.status = status;
    if (0 === (seen0 & 2))
      $this.msg = null;
    else
      $this.msg = msg;
    return $this;
  }
}
class Response {
  constructor(data, json, status, message) {
    status = status === VOID ? null : status;
    message = message === VOID ? null : message;
    this.data = data;
    this.json = json;
    this.status = status;
    this.message = message;
  }
  baf(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
  caf(_set____db54di) {
    this.json = _set____db54di;
  }
  v1n() {
    return this.json;
  }
  m4k() {
    return this.status;
  }
  r() {
    return this.message;
  }
  nl() {
    return this.data;
  }
  ol() {
    return this.json;
  }
  ov() {
    return this.status;
  }
  i61() {
    return this.message;
  }
  hdo(data, json, status, message) {
    return new Response(data, json, status, message);
  }
  copy(data, json, status, message, $super) {
    data = data === VOID ? this.data : data;
    json = json === VOID ? this.json : json;
    status = status === VOID ? this.status : status;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.hdo(data, json, status, message) : $super.hdo.call(this, data, json, status, message);
  }
  toString() {
    return 'Response(data=' + toString_0(this.data) + ', json=' + this.json + ', status=' + this.status + ', message=' + this.message + ')';
  }
  hashCode() {
    var result = this.data == null ? 0 : hashCode(this.data);
    result = imul(result, 31) + getStringHashCode(this.json) | 0;
    result = imul(result, 31) + (this.status == null ? 0 : this.status) | 0;
    result = imul(result, 31) + (this.message == null ? 0 : getStringHashCode(this.message)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Response))
      return false;
    if (!equals(this.data, other.data))
      return false;
    if (!(this.json === other.json))
      return false;
    if (!(this.status == other.status))
      return false;
    if (!(this.message == other.message))
      return false;
    return true;
  }
}
class ResponseUnit {
  constructor(json, status, message) {
    status = status === VOID ? null : status;
    message = message === VOID ? null : message;
    this.json = json;
    this.status = status;
    this.message = message;
  }
  caf(_set____db54di) {
    this.json = _set____db54di;
  }
  v1n() {
    return this.json;
  }
  m4k() {
    return this.status;
  }
  r() {
    return this.message;
  }
}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.auth.AuthOAuth2TokenResponse', this, 5);
    tmp0_serialDesc.m1a('access_token', true);
    tmp0_serialDesc.m1a('expires_in', true);
    tmp0_serialDesc.m1a('token_type', true);
    tmp0_serialDesc.m1a('scope', true);
    tmp0_serialDesc.m1a('refresh_token', true);
    this.ido_1 = tmp0_serialDesc;
  }
  jdo(encoder, value) {
    var tmp0_desc = this.ido_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.accessToken == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.accessToken);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.expiresIn == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.expiresIn);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.tokenType == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.tokenType);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.scope == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.scope);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.refreshToken == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.refreshToken);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.jdo(encoder, value instanceof AuthOAuth2TokenResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ido_1;
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
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return AuthOAuth2TokenResponse.kdo(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.ido_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class AuthOAuth2TokenResponse {
  constructor() {
    this.accessToken = null;
    this.expiresIn = null;
    this.tokenType = null;
    this.scope = null;
    this.refreshToken = null;
  }
  e9r(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  f9r() {
    return this.accessToken;
  }
  ac0(_set____db54di) {
    this.expiresIn = _set____db54di;
  }
  y3a() {
    return this.expiresIn;
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
  iby(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  jby() {
    return this.refreshToken;
  }
  static kdo(seen0, accessToken, expiresIn, tokenType, scope, refreshToken, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().ido_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.accessToken = null;
    else
      $this.accessToken = accessToken;
    if (0 === (seen0 & 2))
      $this.expiresIn = null;
    else
      $this.expiresIn = expiresIn;
    if (0 === (seen0 & 4))
      $this.tokenType = null;
    else
      $this.tokenType = tokenType;
    if (0 === (seen0 & 8))
      $this.scope = null;
    else
      $this.scope = scope;
    if (0 === (seen0 & 16))
      $this.refreshToken = null;
    else
      $this.refreshToken = refreshToken;
    return $this;
  }
}
class Companion_2 {}
class $serializer_2 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogBannerResponse', this, 3);
    tmp0_serialDesc.m1a('banner', true);
    tmp0_serialDesc.m1a('height', true);
    tmp0_serialDesc.m1a('width', true);
    this.ldo_1 = tmp0_serialDesc;
  }
  mdo(encoder, value) {
    var tmp0_desc = this.ldo_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.banner == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.banner);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.width == null)) {
      tmp1_output.m14(tmp0_desc, 2, IntSerializer_getInstance(), value.width);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.mdo(encoder, value instanceof BlogBannerResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ldo_1;
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
    return BlogBannerResponse.ndo(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.ldo_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogBannerResponse {
  constructor() {
    this.banner = null;
    this.height = null;
    this.width = null;
  }
  t5z(_set____db54di) {
    this.banner = _set____db54di;
  }
  u5z() {
    return this.banner;
  }
  v9z(_set____db54di) {
    this.height = _set____db54di;
  }
  c7e() {
    return this.height;
  }
  u9z(_set____db54di) {
    this.width = _set____db54di;
  }
  a7e() {
    return this.width;
  }
  static ndo(seen0, banner, height, width, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().ldo_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.banner = null;
    else
      $this.banner = banner;
    if (0 === (seen0 & 2))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen0 & 4))
      $this.width = null;
    else
      $this.width = width;
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
    tmp.odo_1 = [null, lazy(tmp_0, BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a)];
  }
}
class $serializer_3 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowersResponse', this, 2);
    tmp0_serialDesc.m1a('total_users', true);
    tmp0_serialDesc.m1a('users', true);
    this.pdo_1 = tmp0_serialDesc;
  }
  qdo(encoder, value) {
    var tmp0_desc = this.pdo_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().odo_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.totalUsers == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.totalUsers);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.users == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.users);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qdo(encoder, value instanceof BlogFollowersResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.pdo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().odo_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
    return BlogFollowersResponse.rdo(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.pdo_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_4().odo_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].y2())];
  }
}
class BlogFollowersResponse {
  constructor() {
    Companion_getInstance_4();
    this.totalUsers = null;
    this.users = null;
  }
  sdo(_set____db54di) {
    this.totalUsers = _set____db54di;
  }
  tdo() {
    return this.totalUsers;
  }
  udo(_set____db54di) {
    this.users = _set____db54di;
  }
  h33() {
    return this.users;
  }
  static rdo(seen0, totalUsers, users, serializationConstructorMarker) {
    Companion_getInstance_4();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().pdo_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.totalUsers = null;
    else
      $this.totalUsers = totalUsers;
    if (0 === (seen0 & 2))
      $this.users = null;
    else
      $this.users = users;
    return $this;
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
    tmp.vdo_1 = [lazy(tmp_0, BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi), null];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowingResponse', this, 2);
    tmp0_serialDesc.m1a('blogs', true);
    tmp0_serialDesc.m1a('total_blogs', true);
    this.wdo_1 = tmp0_serialDesc;
  }
  xdo(encoder, value) {
    var tmp0_desc = this.wdo_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().vdo_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.blogs == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.blogs);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.totalBlogs == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.totalBlogs);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xdo(encoder, value instanceof BlogFollowingResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wdo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().vdo_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
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
    return BlogFollowingResponse.ydo(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.wdo_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_5().vdo_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogFollowingResponse {
  constructor() {
    Companion_getInstance_5();
    this.blogs = null;
    this.totalBlogs = null;
  }
  zdo(_set____db54di) {
    this.blogs = _set____db54di;
  }
  adp() {
    return this.blogs;
  }
  bdp(_set____db54di) {
    this.totalBlogs = _set____db54di;
  }
  cdp() {
    return this.totalBlogs;
  }
  static ydo(seen0, blogs, totalBlogs, serializationConstructorMarker) {
    Companion_getInstance_5();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().wdo_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.blogs = null;
    else
      $this.blogs = blogs;
    if (0 === (seen0 & 2))
      $this.totalBlogs = null;
    else
      $this.totalBlogs = totalBlogs;
    return $this;
  }
}
class Companion_5 {}
class $serializer_5 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogInfoResponse', this, 1);
    tmp0_serialDesc.m1a('blog', true);
    this.ddp_1 = tmp0_serialDesc;
  }
  edp(encoder, value) {
    var tmp0_desc = this.ddp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.edp(encoder, value instanceof BlogInfoResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ddp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return BlogInfoResponse.fdp(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ddp_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_14())];
  }
}
class BlogInfoResponse {
  constructor() {
    this.blog = null;
  }
  gdp(_set____db54di) {
    this.blog = _set____db54di;
  }
  hdp() {
    return this.blog;
  }
  static fdp(seen0, blog, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().ddp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.blog = null;
    else
      $this.blog = blog;
    return $this;
  }
}
class Companion_6 {
  constructor() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.idp_1 = [lazy(tmp_0, BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9), null];
  }
}
class $serializer_6 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogLikesResponse', this, 2);
    tmp0_serialDesc.m1a('liked_posts', true);
    tmp0_serialDesc.m1a('liked_count', true);
    this.jdp_1 = tmp0_serialDesc;
  }
  kdp(encoder, value) {
    var tmp0_desc = this.jdp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().idp_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.likedPosts);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kdp(encoder, value instanceof BlogLikesResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jdp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().idp_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
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
    return BlogLikesResponse.ldp(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.jdp_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_7().idp_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogLikesResponse {
  constructor() {
    Companion_getInstance_7();
    this.likedPosts = null;
    this.likedCount = null;
  }
  mdp(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  ndp() {
    return this.likedPosts;
  }
  ia2(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  ja2() {
    return this.likedCount;
  }
  static ldp(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_7();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().jdp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.likedPosts = null;
    else
      $this.likedPosts = likedPosts;
    if (0 === (seen0 & 2))
      $this.likedCount = null;
    else
      $this.likedCount = likedCount;
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
    tmp.odp_1 = [null, lazy(tmp_0, BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0), null];
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogPostsResponse', this, 3);
    tmp0_serialDesc.m1a('blog', true);
    tmp0_serialDesc.m1a('posts', true);
    tmp0_serialDesc.m1a('total_posts', true);
    this.pdp_1 = tmp0_serialDesc;
  }
  qdp(encoder, value) {
    var tmp0_desc = this.pdp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().odp_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.posts == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.posts);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.totalPosts == null)) {
      tmp1_output.m14(tmp0_desc, 2, IntSerializer_getInstance(), value.totalPosts);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qdp(encoder, value instanceof BlogPostsResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.pdp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance_8().odp_1;
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, tmp8_cached[1].y2(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, tmp8_cached[1].y2(), tmp5_local1);
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
    return BlogPostsResponse.rdp(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.pdp_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_8().odp_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_14()), get_nullable(tmp0_cached[1].y2()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogPostsResponse {
  constructor() {
    Companion_getInstance_8();
    this.blog = null;
    this.posts = null;
    this.totalPosts = null;
  }
  gdp(_set____db54di) {
    this.blog = _set____db54di;
  }
  hdp() {
    return this.blog;
  }
  sdp(_set____db54di) {
    this.posts = _set____db54di;
  }
  t67() {
    return this.posts;
  }
  tdp(_set____db54di) {
    this.totalPosts = _set____db54di;
  }
  udp() {
    return this.totalPosts;
  }
  static rdp(seen0, blog, posts, totalPosts, serializationConstructorMarker) {
    Companion_getInstance_8();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().pdp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.blog = null;
    else
      $this.blog = blog;
    if (0 === (seen0 & 2))
      $this.posts = null;
    else
      $this.posts = posts;
    if (0 === (seen0 & 4))
      $this.totalPosts = null;
    else
      $this.totalPosts = totalPosts;
    return $this;
  }
}
class Companion_8 {}
class $serializer_8 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogUpdatedInfoResponse', this, 1);
    tmp0_serialDesc.m1a('blog', true);
    this.vdp_1 = tmp0_serialDesc;
  }
  wdp(encoder, value) {
    var tmp0_desc = this.vdp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.wdp(encoder, value instanceof BlogUpdatedInfoResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.vdp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return BlogUpdatedInfoResponse.xdp(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.vdp_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_14())];
  }
}
class BlogUpdatedInfoResponse {
  constructor() {
    this.blog = null;
  }
  gdp(_set____db54di) {
    this.blog = _set____db54di;
  }
  hdp() {
    return this.blog;
  }
  static xdp(seen0, blog, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().vdp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.blog = null;
    else
      $this.blog = blog;
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
    tmp.ydp_1 = [lazy(tmp_0, UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w)];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserDashboardResponse', this, 1);
    tmp0_serialDesc.m1a('posts', true);
    this.zdp_1 = tmp0_serialDesc;
  }
  adq(encoder, value) {
    var tmp0_desc = this.zdp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().ydp_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.posts == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.posts);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.adq(encoder, value instanceof UserDashboardResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.zdp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_10().ydp_1;
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
    return UserDashboardResponse.bdq(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.zdp_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_10().ydp_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2())];
  }
}
class UserDashboardResponse {
  constructor() {
    Companion_getInstance_10();
    this.posts = null;
  }
  sdp(_set____db54di) {
    this.posts = _set____db54di;
  }
  t67() {
    return this.posts;
  }
  static bdq(seen0, posts, serializationConstructorMarker) {
    Companion_getInstance_10();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().zdp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.posts = null;
    else
      $this.posts = posts;
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
    tmp.cdq_1 = [null, lazy(tmp_0, UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5)];
  }
}
class $serializer_10 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserFollowingResponse', this, 2);
    tmp0_serialDesc.m1a('total_blogs', true);
    tmp0_serialDesc.m1a('blogs', true);
    this.ddq_1 = tmp0_serialDesc;
  }
  edq(encoder, value) {
    var tmp0_desc = this.ddq_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().cdq_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.totalBlog == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.totalBlog);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.blogs == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.blogs);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.edq(encoder, value instanceof UserFollowingResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ddq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_11().cdq_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
    return UserFollowingResponse.fdq(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ddq_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_11().cdq_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].y2())];
  }
}
class UserFollowingResponse {
  constructor() {
    Companion_getInstance_11();
    this.totalBlog = null;
    this.blogs = null;
  }
  gdq(_set____db54di) {
    this.totalBlog = _set____db54di;
  }
  hdq() {
    return this.totalBlog;
  }
  zdo(_set____db54di) {
    this.blogs = _set____db54di;
  }
  adp() {
    return this.blogs;
  }
  static fdq(seen0, totalBlog, blogs, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().ddq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.totalBlog = null;
    else
      $this.totalBlog = totalBlog;
    if (0 === (seen0 & 2))
      $this.blogs = null;
    else
      $this.blogs = blogs;
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
    tmp.idq_1 = [lazy(tmp_0, UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0), null];
  }
}
class $serializer_11 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserLikesResponse', this, 2);
    tmp0_serialDesc.m1a('liked_posts', true);
    tmp0_serialDesc.m1a('liked_count', true);
    this.jdq_1 = tmp0_serialDesc;
  }
  kdq(encoder, value) {
    var tmp0_desc = this.jdq_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().idq_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.likedPosts);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kdq(encoder, value instanceof UserLikesResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jdq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().idq_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
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
    return UserLikesResponse.ldq(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.jdq_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_12().idq_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(IntSerializer_getInstance())];
  }
}
class UserLikesResponse {
  constructor() {
    Companion_getInstance_12();
    this.likedPosts = null;
    this.likedCount = null;
  }
  mdp(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  ndp() {
    return this.likedPosts;
  }
  ia2(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  ja2() {
    return this.likedCount;
  }
  static ldq(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().jdq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.likedPosts = null;
    else
      $this.likedPosts = likedPosts;
    if (0 === (seen0 & 2))
      $this.likedCount = null;
    else
      $this.likedCount = likedCount;
    return $this;
  }
}
class Companion_12 {}
class $serializer_12 {
  constructor() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserResponse', this, 1);
    tmp0_serialDesc.m1a('user', true);
    this.mdq_1 = tmp0_serialDesc;
  }
  ndq(encoder, value) {
    var tmp0_desc = this.mdq_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_35(), value.user);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ndq(encoder, value instanceof UserResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mdq_1;
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
    return UserResponse.odq(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.mdq_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_35())];
  }
}
class UserResponse {
  constructor() {
    this.user = null;
  }
  pdq(_set____db54di) {
    this.user = _set____db54di;
  }
  l2z() {
    return this.user;
  }
  static odq(seen0, user, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().mdq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.user = null;
    else
      $this.user = user;
    return $this;
  }
}
class PhotoType extends Enum {
  constructor(name, ordinal, prefix) {
    super(name, ordinal);
    this.prefix = prefix;
  }
  sdq() {
    return this.prefix;
  }
  get name() {
    return this.d1();
  }
  get ordinal() {
    return this.q4();
  }
}
class PostType extends Enum {
  constructor(name, ordinal, value) {
    super(name, ordinal);
    this.value = value;
  }
  y2() {
    return this.value;
  }
  get name() {
    return this.d1();
  }
  get ordinal() {
    return this.q4();
  }
}
class Companion_13 {}
class $serializer_13 {
  constructor() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.Note', this, 9);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('timestamp', true);
    tmp0_serialDesc.m1a('blog_name', true);
    tmp0_serialDesc.m1a('blog_uuid', true);
    tmp0_serialDesc.m1a('blog_url', true);
    tmp0_serialDesc.m1a('followed', true);
    tmp0_serialDesc.m1a('avatar_shape', true);
    tmp0_serialDesc.m1a('post_id', true);
    tmp0_serialDesc.m1a('reblog_parent_blog_name', true);
    this.vdq_1 = tmp0_serialDesc;
  }
  wdq(encoder, value) {
    var tmp0_desc = this.vdq_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.type == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.timestamp == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.blogName == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.blogName);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.blogUuid == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.blogUuid);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.blogUrl == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.blogUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.isFollowed == null)) {
      tmp1_output.m14(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.avatarShape == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.postId == null)) {
      tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.postId);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.reblogParentBlogName == null)) {
      tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.reblogParentBlogName);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.wdq(encoder, value instanceof Note ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.vdq_1;
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
      tmp5_local1 = tmp13_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.i13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
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
            tmp5_local1 = tmp13_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp9_local5 = tmp13_input.i13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
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
    return Note.xdq(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  cy() {
    return this.vdq_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Note {
  constructor() {
    this.type = null;
    this.timestamp = null;
    this.blogName = null;
    this.blogUuid = null;
    this.blogUrl = null;
    this.isFollowed = null;
    this.avatarShape = null;
    this.postId = null;
    this.reblogParentBlogName = null;
  }
  x32() {
    return this.type;
  }
  ydq() {
    return this.timestamp;
  }
  qdk() {
    return this.blogName;
  }
  zdq() {
    return this.blogUuid;
  }
  adr() {
    return this.blogUrl;
  }
  kab() {
    return this.isFollowed;
  }
  bdr() {
    return this.avatarShape;
  }
  c97() {
    return this.postId;
  }
  cdr() {
    return this.reblogParentBlogName;
  }
  static xdq(seen0, type, timestamp, blogName, blogUuid, blogUrl, isFollowed, avatarShape, postId, reblogParentBlogName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().vdq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 2))
      $this.timestamp = null;
    else
      $this.timestamp = timestamp;
    if (0 === (seen0 & 4))
      $this.blogName = null;
    else
      $this.blogName = blogName;
    if (0 === (seen0 & 8))
      $this.blogUuid = null;
    else
      $this.blogUuid = blogUuid;
    if (0 === (seen0 & 16))
      $this.blogUrl = null;
    else
      $this.blogUrl = blogUrl;
    if (0 === (seen0 & 32))
      $this.isFollowed = null;
    else
      $this.isFollowed = isFollowed;
    if (0 === (seen0 & 64))
      $this.avatarShape = null;
    else
      $this.avatarShape = avatarShape;
    if (0 === (seen0 & 128))
      $this.postId = null;
    else
      $this.postId = postId;
    if (0 === (seen0 & 256))
      $this.reblogParentBlogName = null;
    else
      $this.reblogParentBlogName = reblogParentBlogName;
    return $this;
  }
}
class Companion_14 {}
class $serializer_14 {
  constructor() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.NoteAvatar', this, 2);
    tmp0_serialDesc.m1a('64', true);
    tmp0_serialDesc.m1a('128', true);
    this.ddr_1 = tmp0_serialDesc;
  }
  edr(encoder, value) {
    var tmp0_desc = this.ddr_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.size64 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.size64);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.size128 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.size128);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.edr(encoder, value instanceof NoteAvatar ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ddr_1;
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
    return NoteAvatar.fdr(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ddr_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class NoteAvatar {
  constructor() {
    this.size64 = null;
    this.size128 = null;
  }
  gdr(_set____db54di) {
    this.size64 = _set____db54di;
  }
  hdr() {
    return this.size64;
  }
  idr(_set____db54di) {
    this.size128 = _set____db54di;
  }
  jdr() {
    return this.size128;
  }
  static fdr(seen0, size64, size128, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().ddr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.size64 = null;
    else
      $this.size64 = size64;
    if (0 === (seen0 & 2))
      $this.size128 = null;
    else
      $this.size128 = size128;
    return $this;
  }
}
class Resource {
  static kdr() {
    return createThis(this);
  }
}
class Companion_15 {
  constructor() {
    Companion_instance_15 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ldr_1 = [null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Blog$Companion$$childSerializers$_anonymous__tmgjug), null, null, null, null, null, null, null];
  }
}
class $serializer_15 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Blog', this, 18);
    tmp0_serialDesc.m1a('title', true);
    tmp0_serialDesc.m1a('posts', true);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('updated', true);
    tmp0_serialDesc.m1a('description', true);
    tmp0_serialDesc.m1a('ask', true);
    tmp0_serialDesc.m1a('ask_anon', true);
    tmp0_serialDesc.m1a('followed', true);
    tmp0_serialDesc.m1a('likes', true);
    tmp0_serialDesc.m1a('is_blocked_from_primary', true);
    tmp0_serialDesc.m1a('avatar', true);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('theme', true);
    tmp0_serialDesc.m1a('admin', true);
    tmp0_serialDesc.m1a('ask_page_title', true);
    tmp0_serialDesc.m1a('is_nsfw', true);
    tmp0_serialDesc.m1a('primary', true);
    tmp0_serialDesc.m1a('followers', true);
    this.mdr_1 = tmp0_serialDesc;
  }
  ndr(encoder, value) {
    var tmp0_desc = this.mdr_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().ldr_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.postCount === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.postCount);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.m14(tmp0_desc, 3, IntSerializer_getInstance(), value.updated);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.description == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.isAsk == null)) {
      tmp1_output.m14(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isAsk);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.isAskAnon == null)) {
      tmp1_output.m14(tmp0_desc, 6, BooleanSerializer_getInstance(), value.isAskAnon);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.isFollowed == null)) {
      tmp1_output.m14(tmp0_desc, 7, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.likeCount == null)) {
      tmp1_output.m14(tmp0_desc, 8, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.isBlockedFromPrimary == null)) {
      tmp1_output.m14(tmp0_desc, 9, BooleanSerializer_getInstance(), value.isBlockedFromPrimary);
    }
    if (tmp1_output.q14(tmp0_desc, 10) ? true : !(value.avatar == null)) {
      tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.avatar);
    }
    if (tmp1_output.q14(tmp0_desc, 11) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 11, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 12) ? true : !(value.theme == null)) {
      tmp1_output.m14(tmp0_desc, 12, $serializer_getInstance_16(), value.theme);
    }
    if (tmp1_output.q14(tmp0_desc, 13) ? true : !(value.isAdmin == null)) {
      tmp1_output.m14(tmp0_desc, 13, BooleanSerializer_getInstance(), value.isAdmin);
    }
    if (tmp1_output.q14(tmp0_desc, 14) ? true : !(value.askPageTitle == null)) {
      tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.askPageTitle);
    }
    if (tmp1_output.q14(tmp0_desc, 15) ? true : !(value.isNSFW == null)) {
      tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isNSFW);
    }
    if (tmp1_output.q14(tmp0_desc, 16) ? true : !(value.isPrimary == null)) {
      tmp1_output.m14(tmp0_desc, 16, BooleanSerializer_getInstance(), value.isPrimary);
    }
    if (tmp1_output.q14(tmp0_desc, 17) ? true : !(value.followerCount == null)) {
      tmp1_output.m14(tmp0_desc, 17, IntSerializer_getInstance(), value.followerCount);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ndr(encoder, value instanceof Blog ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mdr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
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
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_input = decoder.u12(tmp0_desc);
    var tmp23_cached = Companion_getInstance_16().ldr_1;
    if (tmp22_input.j13()) {
      tmp4_local0 = tmp22_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.z12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.i13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.i13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.i13(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.i13(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.i13(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.i13(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.i13(tmp0_desc, 10, tmp23_cached[10].y2(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.i13(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.i13(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.i13(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.i13(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.i13(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.z12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.i13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.i13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.i13(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.i13(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.i13(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.i13(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.i13(tmp0_desc, 10, tmp23_cached[10].y2(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.i13(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.i13(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.i13(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.i13(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.i13(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp22_input.v12(tmp0_desc);
    return Blog.odr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  }
  cy() {
    return this.mdr_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_16().ldr_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_16()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class Blog extends Resource {
  constructor() {
    return new.target.pdr();
  }
  static pdr() {
    Companion_getInstance_16();
    var $this = this.kdr();
    $this.title = null;
    $this.postCount = 0;
    $this.name = null;
    $this.updated = null;
    $this.description = null;
    $this.isAsk = null;
    $this.isAskAnon = null;
    $this.isFollowed = null;
    $this.likeCount = null;
    $this.isBlockedFromPrimary = null;
    $this.avatar = null;
    $this.url = null;
    $this.theme = null;
    $this.isAdmin = null;
    $this.askPageTitle = null;
    $this.isNSFW = null;
    $this.isPrimary = null;
    $this.followerCount = null;
    return $this;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
  qdr(_set____db54di) {
    this.postCount = _set____db54di;
  }
  rdr() {
    return this.postCount;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  sdr(_set____db54di) {
    this.updated = _set____db54di;
  }
  tdr() {
    return this.updated;
  }
  v31(_set____db54di) {
    this.description = _set____db54di;
  }
  f31() {
    return this.description;
  }
  udr(_set____db54di) {
    this.isAsk = _set____db54di;
  }
  vdr() {
    return this.isAsk;
  }
  wdr(_set____db54di) {
    this.isAskAnon = _set____db54di;
  }
  xdr() {
    return this.isAskAnon;
  }
  ydr(_set____db54di) {
    this.isFollowed = _set____db54di;
  }
  kab() {
    return this.isFollowed;
  }
  b2z() {
    return this.likeCount;
  }
  zdr() {
    return this.isBlockedFromPrimary;
  }
  s5z() {
    return this.avatar;
  }
  f4k() {
    return this.url;
  }
  ads() {
    return this.theme;
  }
  sag() {
    return this.isAdmin;
  }
  bds() {
    return this.askPageTitle;
  }
  cds() {
    return this.isNSFW;
  }
  dds() {
    return this.isPrimary;
  }
  eds() {
    return this.followerCount;
  }
  static odr(seen0, title, postCount, name, updated, description, isAsk, isAskAnon, isFollowed, likeCount, isBlockedFromPrimary, avatar, url, theme, isAdmin, askPageTitle, isNSFW, isPrimary, followerCount, serializationConstructorMarker) {
    Companion_getInstance_16();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().mdr_1);
    }
    var $this = this.kdr();
    if (0 === (seen0 & 1))
      $this.title = null;
    else
      $this.title = title;
    if (0 === (seen0 & 2))
      $this.postCount = 0;
    else
      $this.postCount = postCount;
    if (0 === (seen0 & 4))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 8))
      $this.updated = null;
    else
      $this.updated = updated;
    if (0 === (seen0 & 16))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 32))
      $this.isAsk = null;
    else
      $this.isAsk = isAsk;
    if (0 === (seen0 & 64))
      $this.isAskAnon = null;
    else
      $this.isAskAnon = isAskAnon;
    if (0 === (seen0 & 128))
      $this.isFollowed = null;
    else
      $this.isFollowed = isFollowed;
    if (0 === (seen0 & 256))
      $this.likeCount = null;
    else
      $this.likeCount = likeCount;
    if (0 === (seen0 & 512))
      $this.isBlockedFromPrimary = null;
    else
      $this.isBlockedFromPrimary = isBlockedFromPrimary;
    if (0 === (seen0 & 1024))
      $this.avatar = null;
    else
      $this.avatar = avatar;
    if (0 === (seen0 & 2048))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 4096))
      $this.theme = null;
    else
      $this.theme = theme;
    if (0 === (seen0 & 8192))
      $this.isAdmin = null;
    else
      $this.isAdmin = isAdmin;
    if (0 === (seen0 & 16384))
      $this.askPageTitle = null;
    else
      $this.askPageTitle = askPageTitle;
    if (0 === (seen0 & 32768))
      $this.isNSFW = null;
    else
      $this.isNSFW = isNSFW;
    if (0 === (seen0 & 65536))
      $this.isPrimary = null;
    else
      $this.isPrimary = isPrimary;
    if (0 === (seen0 & 131072))
      $this.followerCount = null;
    else
      $this.followerCount = followerCount;
    return $this;
  }
}
class Companion_16 {}
class $serializer_16 {
  constructor() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.BlogAvatar', this, 3);
    tmp0_serialDesc.m1a('width', true);
    tmp0_serialDesc.m1a('height', true);
    tmp0_serialDesc.m1a('url', true);
    this.fds_1 = tmp0_serialDesc;
  }
  gds(encoder, value) {
    var tmp0_desc = this.fds_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.gds(encoder, value instanceof BlogAvatar ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.fds_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
    return BlogAvatar.hds(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.fds_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class BlogAvatar {
  constructor() {
    this.width = null;
    this.height = null;
    this.url = null;
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
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  static hds(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().fds_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen0 & 2))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen0 & 4))
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
}
class Companion_17 {}
class $serializer_17 {
  constructor() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.BlogTheme', this, 16);
    tmp0_serialDesc.m1a('avatar_shape', true);
    tmp0_serialDesc.m1a('background_color', true);
    tmp0_serialDesc.m1a('body_font', true);
    tmp0_serialDesc.m1a('header_image', true);
    tmp0_serialDesc.m1a('header_image_focused', true);
    tmp0_serialDesc.m1a('header_image_poster', true);
    tmp0_serialDesc.m1a('header_image_scaled', true);
    tmp0_serialDesc.m1a('header_stretch', true);
    tmp0_serialDesc.m1a('link_color', true);
    tmp0_serialDesc.m1a('show_avatar', true);
    tmp0_serialDesc.m1a('show_description', true);
    tmp0_serialDesc.m1a('show_header_image', true);
    tmp0_serialDesc.m1a('show_title', true);
    tmp0_serialDesc.m1a('title_color', true);
    tmp0_serialDesc.m1a('title_font', true);
    tmp0_serialDesc.m1a('title_font_weight', true);
    this.jds_1 = tmp0_serialDesc;
  }
  kds(encoder, value) {
    var tmp0_desc = this.jds_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.avatarShape == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.backgroundColor == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.backgroundColor);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.bodyFont == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.bodyFont);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.headerImage == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.headerImage);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.headerImageFocused == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.headerImageFocused);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.headerImagePoster == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.headerImagePoster);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.headerImageScaled == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.headerImageScaled);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.isHeaderStretch === false)) {
      tmp1_output.b14(tmp0_desc, 7, value.isHeaderStretch);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.linkColor == null)) {
      tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.linkColor);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.isShowAvatar === false)) {
      tmp1_output.b14(tmp0_desc, 9, value.isShowAvatar);
    }
    if (tmp1_output.q14(tmp0_desc, 10) ? true : !(value.isShowDescription === false)) {
      tmp1_output.b14(tmp0_desc, 10, value.isShowDescription);
    }
    if (tmp1_output.q14(tmp0_desc, 11) ? true : !(value.isShowHeaderImage === false)) {
      tmp1_output.b14(tmp0_desc, 11, value.isShowHeaderImage);
    }
    if (tmp1_output.q14(tmp0_desc, 12) ? true : !(value.isShowTitle === false)) {
      tmp1_output.b14(tmp0_desc, 12, value.isShowTitle);
    }
    if (tmp1_output.q14(tmp0_desc, 13) ? true : !(value.titleColor == null)) {
      tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.titleColor);
    }
    if (tmp1_output.q14(tmp0_desc, 14) ? true : !(value.titleFont == null)) {
      tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.titleFont);
    }
    if (tmp1_output.q14(tmp0_desc, 15) ? true : !(value.titleFontWeight == null)) {
      tmp1_output.m14(tmp0_desc, 15, StringSerializer_getInstance(), value.titleFontWeight);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kds(encoder, value instanceof BlogTheme ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jds_1;
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
    var tmp11_local7 = false;
    var tmp12_local8 = null;
    var tmp13_local9 = false;
    var tmp14_local10 = false;
    var tmp15_local11 = false;
    var tmp16_local12 = false;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.u12(tmp0_desc);
    if (tmp20_input.j13()) {
      tmp4_local0 = tmp20_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
      tmp11_local7 = tmp20_input.w12(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.w12(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.w12(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.w12(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.w12(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.i13(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
            tmp11_local7 = tmp20_input.w12(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
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
            tmp17_local13 = tmp20_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.i13(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp20_input.v12(tmp0_desc);
    return BlogTheme.lds(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  cy() {
    return this.jds_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class BlogTheme {
  constructor() {
    this.avatarShape = null;
    this.backgroundColor = null;
    this.bodyFont = null;
    this.headerImage = null;
    this.headerImageFocused = null;
    this.headerImagePoster = null;
    this.headerImageScaled = null;
    this.isHeaderStretch = false;
    this.linkColor = null;
    this.isShowAvatar = false;
    this.isShowDescription = false;
    this.isShowHeaderImage = false;
    this.isShowTitle = false;
    this.titleColor = null;
    this.titleFont = null;
    this.titleFontWeight = null;
  }
  mds(_set____db54di) {
    this.avatarShape = _set____db54di;
  }
  bdr() {
    return this.avatarShape;
  }
  nds(_set____db54di) {
    this.backgroundColor = _set____db54di;
  }
  ods() {
    return this.backgroundColor;
  }
  pds(_set____db54di) {
    this.bodyFont = _set____db54di;
  }
  qds() {
    return this.bodyFont;
  }
  rds(_set____db54di) {
    this.headerImage = _set____db54di;
  }
  sds() {
    return this.headerImage;
  }
  tds(_set____db54di) {
    this.headerImageFocused = _set____db54di;
  }
  uds() {
    return this.headerImageFocused;
  }
  vds(_set____db54di) {
    this.headerImagePoster = _set____db54di;
  }
  wds() {
    return this.headerImagePoster;
  }
  xds(_set____db54di) {
    this.headerImageScaled = _set____db54di;
  }
  yds() {
    return this.headerImageScaled;
  }
  zds(_set____db54di) {
    this.isHeaderStretch = _set____db54di;
  }
  adt() {
    return this.isHeaderStretch;
  }
  bdt() {
    return this.linkColor;
  }
  cdt() {
    return this.isShowAvatar;
  }
  ddt() {
    return this.isShowDescription;
  }
  edt() {
    return this.isShowHeaderImage;
  }
  fdt() {
    return this.isShowTitle;
  }
  gdt() {
    return this.titleColor;
  }
  hdt() {
    return this.titleFont;
  }
  idt() {
    return this.titleFontWeight;
  }
  static lds(seen0, avatarShape, backgroundColor, bodyFont, headerImage, headerImageFocused, headerImagePoster, headerImageScaled, isHeaderStretch, linkColor, isShowAvatar, isShowDescription, isShowHeaderImage, isShowTitle, titleColor, titleFont, titleFontWeight, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().jds_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.avatarShape = null;
    else
      $this.avatarShape = avatarShape;
    if (0 === (seen0 & 2))
      $this.backgroundColor = null;
    else
      $this.backgroundColor = backgroundColor;
    if (0 === (seen0 & 4))
      $this.bodyFont = null;
    else
      $this.bodyFont = bodyFont;
    if (0 === (seen0 & 8))
      $this.headerImage = null;
    else
      $this.headerImage = headerImage;
    if (0 === (seen0 & 16))
      $this.headerImageFocused = null;
    else
      $this.headerImageFocused = headerImageFocused;
    if (0 === (seen0 & 32))
      $this.headerImagePoster = null;
    else
      $this.headerImagePoster = headerImagePoster;
    if (0 === (seen0 & 64))
      $this.headerImageScaled = null;
    else
      $this.headerImageScaled = headerImageScaled;
    if (0 === (seen0 & 128))
      $this.isHeaderStretch = false;
    else
      $this.isHeaderStretch = isHeaderStretch;
    if (0 === (seen0 & 256))
      $this.linkColor = null;
    else
      $this.linkColor = linkColor;
    if (0 === (seen0 & 512))
      $this.isShowAvatar = false;
    else
      $this.isShowAvatar = isShowAvatar;
    if (0 === (seen0 & 1024))
      $this.isShowDescription = false;
    else
      $this.isShowDescription = isShowDescription;
    if (0 === (seen0 & 2048))
      $this.isShowHeaderImage = false;
    else
      $this.isShowHeaderImage = isShowHeaderImage;
    if (0 === (seen0 & 4096))
      $this.isShowTitle = false;
    else
      $this.isShowTitle = isShowTitle;
    if (0 === (seen0 & 8192))
      $this.titleColor = null;
    else
      $this.titleColor = titleColor;
    if (0 === (seen0 & 16384))
      $this.titleFont = null;
    else
      $this.titleFont = titleFont;
    if (0 === (seen0 & 32768))
      $this.titleFontWeight = null;
    else
      $this.titleFontWeight = titleFontWeight;
    return $this;
  }
}
class Companion_18 {}
class $serializer_18 {
  constructor() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Reblog', this, 2);
    tmp0_serialDesc.m1a('comment', true);
    tmp0_serialDesc.m1a('tree_html', true);
    this.jdt_1 = tmp0_serialDesc;
  }
  kdt(encoder, value) {
    var tmp0_desc = this.jdt_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.comment == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.comment);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.treeHtml == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.treeHtml);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kdt(encoder, value instanceof Reblog ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jdt_1;
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
    return Reblog.ldt(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.jdt_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Reblog {
  constructor() {
    this.comment = null;
    this.treeHtml = null;
  }
  n95(_set____db54di) {
    this.comment = _set____db54di;
  }
  h37() {
    return this.comment;
  }
  mdt(_set____db54di) {
    this.treeHtml = _set____db54di;
  }
  ndt() {
    return this.treeHtml;
  }
  static ldt(seen0, comment, treeHtml, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().jdt_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.comment = null;
    else
      $this.comment = comment;
    if (0 === (seen0 & 2))
      $this.treeHtml = null;
    else
      $this.treeHtml = treeHtml;
    return $this;
  }
}
class Companion_19 {
  n1o() {
    return PostSerializer_getInstance();
  }
}
class Post {
  constructor() {
    return new.target.odt();
  }
  static odt() {
    return createThis(this);
  }
  pdt() {
    return this instanceof LegacyTextPost ? this : null;
  }
  qdt() {
    return this instanceof LegacyPhotoPost ? this : null;
  }
  rdt() {
    return this instanceof LegacyQuotePost ? this : null;
  }
  sdt() {
    return this instanceof LegacyLinkPost ? this : null;
  }
  tdt() {
    return this instanceof LegacyVideoPost ? this : null;
  }
  udt() {
    return this instanceof LegacyAudioPost ? this : null;
  }
  vdt() {
    return this instanceof LegacyChatPost ? this : null;
  }
  wdt() {
    return this instanceof LegacyAnswerPost ? this : null;
  }
  xdt() {
    return this instanceof LegacyPostcardPost ? this : null;
  }
  get asLegacyTextPost() {
    return this.pdt();
  }
  get asLegacyPhotoPost() {
    return this.qdt();
  }
  get asLegacyQuotePost() {
    return this.rdt();
  }
  get asLegacyLinkPost() {
    return this.sdt();
  }
  get asLegacyVideoPost() {
    return this.tdt();
  }
  get asLegacyAudioPost() {
    return this.udt();
  }
  get asLegacyChatPost() {
    return this.vdt();
  }
  get asLegacyAnswerPost() {
    return this.wdt();
  }
  get asLegacyPostcardPost() {
    return this.xdt();
  }
  get blogName() {
    return this.qdk();
  }
  set blogName(value) {
    this.pdk(value);
  }
  get idString() {
    return this.zdt();
  }
  set idString(value) {
    this.ydt(value);
  }
  get genesisPostId() {
    return this.bdu();
  }
  set genesisPostId(value) {
    this.adu(value);
  }
  get postUrl() {
    return this.ddu();
  }
  set postUrl(value) {
    this.cdu(value);
  }
  get parentPostUrl() {
    return this.fdu();
  }
  set parentPostUrl(value) {
    this.edu(value);
  }
  get type() {
    return this.x32();
  }
  set type(value) {
    this.e33(value);
  }
  get timestamp() {
    return this.ydq();
  }
  set timestamp(value) {
    this.gdu(value);
  }
  get date() {
    return this.xdl();
  }
  set date(value) {
    this.wdl(value);
  }
  get format() {
    return this.zdl();
  }
  set format(value) {
    this.ydl(value);
  }
  get reblogKey() {
    return this.qdn();
  }
  set reblogKey(value) {
    this.pdn(value);
  }
  get tags() {
    return this.ga2();
  }
  set tags(value) {
    this.la7(value);
  }
  get isBookmarklet() {
    return this.idu();
  }
  set isBookmarklet(value) {
    this.hdu(value);
  }
  get isMobile() {
    return this.kdu();
  }
  set isMobile(value) {
    this.jdu(value);
  }
  get sourceUrl() {
    return this.z32();
  }
  set sourceUrl(value) {
    this.y32(value);
  }
  get sourceTitle() {
    return this.mdu();
  }
  set sourceTitle(value) {
    this.ldu(value);
  }
  get isLiked() {
    return this.caa();
  }
  set isLiked(value) {
    this.ndu(value);
  }
  get state() {
    return this.g7x();
  }
  set state(value) {
    this.y9t(value);
  }
  get title() {
    return this.m3b();
  }
  set title(value) {
    this.ca2(value);
  }
  get body() {
    return this.ua8();
  }
  set body(value) {
    this.ta8(value);
  }
  get noteCount() {
    return this.pdu();
  }
  set noteCount(value) {
    this.odu(value);
  }
  get summary() {
    return this.pa9();
  }
  set summary(value) {
    this.oa9(value);
  }
  get slug() {
    return this.bdm();
  }
  set slug(value) {
    this.adm(value);
  }
  get rebloggedFromId() {
    return this.rdu();
  }
  set rebloggedFromId(value) {
    this.qdu(value);
  }
  get rebloggedFromUrl() {
    return this.tdu();
  }
  set rebloggedFromUrl(value) {
    this.sdu(value);
  }
  get rebloggedFromName() {
    return this.vdu();
  }
  set rebloggedFromName(value) {
    this.udu(value);
  }
  get rebloggedFromTitle() {
    return this.xdu();
  }
  set rebloggedFromTitle(value) {
    this.wdu(value);
  }
  get rebloggedFromUuid() {
    return this.zdu();
  }
  set rebloggedFromUuid(value) {
    this.ydu(value);
  }
  get rebloggedFromCanMessage() {
    return this.bdv();
  }
  set rebloggedFromCanMessage(value) {
    this.adv(value);
  }
  get rebloggedFromFollowing() {
    return this.ddv();
  }
  set rebloggedFromFollowing(value) {
    this.cdv(value);
  }
  get rebloggedRootId() {
    return this.fdv();
  }
  set rebloggedRootId(value) {
    this.edv(value);
  }
  get rebloggedRootUrl() {
    return this.hdv();
  }
  set rebloggedRootUrl(value) {
    this.gdv(value);
  }
  get rebloggedRootName() {
    return this.jdv();
  }
  set rebloggedRootName(value) {
    this.idv(value);
  }
  get rebloggedRootTitle() {
    return this.ldv();
  }
  set rebloggedRootTitle(value) {
    this.kdv(value);
  }
  get rebloggedRootUuid() {
    return this.ndv();
  }
  set rebloggedRootUuid(value) {
    this.mdv(value);
  }
  get rebloggedRootCanMessage() {
    return this.pdv();
  }
  set rebloggedRootCanMessage(value) {
    this.odv(value);
  }
  get rebloggedRootFollowing() {
    return this.rdv();
  }
  set rebloggedRootFollowing(value) {
    this.qdv(value);
  }
  get notes() {
    return this.tdv();
  }
  set notes(value) {
    this.sdv(value);
  }
  get blog() {
    return this.hdp();
  }
  set blog(value) {
    this.gdp(value);
  }
  get reblog() {
    return this.jc2();
  }
  set reblog(value) {
    this.udv(value);
  }
  get trail() {
    return this.wdv();
  }
  set trail(value) {
    this.vdv(value);
  }
}
class Companion_20 {
  constructor() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xdv_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1), null, null, null, null];
  }
  n1o() {
    return $serializer_getInstance_18();
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAnswerPost', this, 44);
    tmp0_serialDesc.m1a('blog_name', false);
    tmp0_serialDesc.m1a('id_string', false);
    tmp0_serialDesc.m1a('genesis_post_id', false);
    tmp0_serialDesc.m1a('post_url', false);
    tmp0_serialDesc.m1a('parent_post_url', false);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('timestamp', false);
    tmp0_serialDesc.m1a('date', false);
    tmp0_serialDesc.m1a('format', false);
    tmp0_serialDesc.m1a('reblog_key', false);
    tmp0_serialDesc.m1a('tags', false);
    tmp0_serialDesc.m1a('bookmarklet', false);
    tmp0_serialDesc.m1a('mobile', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('source_title', false);
    tmp0_serialDesc.m1a('liked', false);
    tmp0_serialDesc.m1a('state', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('note_count', false);
    tmp0_serialDesc.m1a('summary', false);
    tmp0_serialDesc.m1a('slug', false);
    tmp0_serialDesc.m1a('reblogged_from_id', false);
    tmp0_serialDesc.m1a('reblogged_from_url', false);
    tmp0_serialDesc.m1a('reblogged_from_name', false);
    tmp0_serialDesc.m1a('reblogged_from_title', false);
    tmp0_serialDesc.m1a('reblogged_from_uuid', false);
    tmp0_serialDesc.m1a('reblogged_from_can_message', false);
    tmp0_serialDesc.m1a('reblogged_from_following', false);
    tmp0_serialDesc.m1a('reblogged_root_id', false);
    tmp0_serialDesc.m1a('reblogged_root_url', false);
    tmp0_serialDesc.m1a('reblogged_root_name', false);
    tmp0_serialDesc.m1a('reblogged_root_title', false);
    tmp0_serialDesc.m1a('reblogged_root_uuid', false);
    tmp0_serialDesc.m1a('reblogged_root_can_message', false);
    tmp0_serialDesc.m1a('reblogged_root_following', false);
    tmp0_serialDesc.m1a('notes', false);
    tmp0_serialDesc.m1a('blog', false);
    tmp0_serialDesc.m1a('reblog', false);
    tmp0_serialDesc.m1a('trail', false);
    tmp0_serialDesc.m1a('asking_name', true);
    tmp0_serialDesc.m1a('asking_url', true);
    tmp0_serialDesc.m1a('question', true);
    tmp0_serialDesc.m1a('answer', true);
    this.ydv_1 = tmp0_serialDesc;
  }
  zdv(encoder, value) {
    var tmp0_desc = this.ydv_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().xdv_1;
    tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.adw_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.bdw_1);
    tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.cdw_1);
    tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.ddw_1);
    tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.edw_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.fdw_1);
    tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.gdw_1);
    tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.hdw_1);
    tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.idw_1);
    tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.jdw_1);
    tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.kdw_1);
    tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.ldw_1);
    tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.mdw_1);
    tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.ndw_1);
    tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.odw_1);
    tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.pdw_1);
    tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.qdw_1);
    tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.rdw_1);
    tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.sdw_1);
    tmp1_output.m14(tmp0_desc, 19, IntSerializer_getInstance(), value.tdw_1);
    tmp1_output.m14(tmp0_desc, 20, StringSerializer_getInstance(), value.udw_1);
    tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.vdw_1);
    tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.wdw_1);
    tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.xdw_1);
    tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.ydw_1);
    tmp1_output.m14(tmp0_desc, 25, StringSerializer_getInstance(), value.zdw_1);
    tmp1_output.m14(tmp0_desc, 26, StringSerializer_getInstance(), value.adx_1);
    tmp1_output.m14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.bdx_1);
    tmp1_output.m14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.cdx_1);
    tmp1_output.m14(tmp0_desc, 29, StringSerializer_getInstance(), value.ddx_1);
    tmp1_output.m14(tmp0_desc, 30, StringSerializer_getInstance(), value.edx_1);
    tmp1_output.m14(tmp0_desc, 31, StringSerializer_getInstance(), value.fdx_1);
    tmp1_output.m14(tmp0_desc, 32, StringSerializer_getInstance(), value.gdx_1);
    tmp1_output.m14(tmp0_desc, 33, StringSerializer_getInstance(), value.hdx_1);
    tmp1_output.m14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.idx_1);
    tmp1_output.m14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.jdx_1);
    tmp1_output.m14(tmp0_desc, 36, tmp2_cached[36].y2(), value.kdx_1);
    tmp1_output.m14(tmp0_desc, 37, $serializer_getInstance_14(), value.ldx_1);
    tmp1_output.m14(tmp0_desc, 38, $serializer_getInstance_17(), value.mdx_1);
    tmp1_output.m14(tmp0_desc, 39, tmp2_cached[39].y2(), value.ndx_1);
    if (tmp1_output.q14(tmp0_desc, 40) ? true : !(value.askingName == null)) {
      tmp1_output.m14(tmp0_desc, 40, StringSerializer_getInstance(), value.askingName);
    }
    if (tmp1_output.q14(tmp0_desc, 41) ? true : !(value.askingUrl == null)) {
      tmp1_output.m14(tmp0_desc, 41, StringSerializer_getInstance(), value.askingUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 42) ? true : !(value.question == null)) {
      tmp1_output.m14(tmp0_desc, 42, StringSerializer_getInstance(), value.question);
    }
    if (tmp1_output.q14(tmp0_desc, 43) ? true : !(value.answer == null)) {
      tmp1_output.m14(tmp0_desc, 43, StringSerializer_getInstance(), value.answer);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zdv(encoder, value instanceof LegacyAnswerPost ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ydv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_local43 = null;
    var tmp49_input = decoder.u12(tmp0_desc);
    var tmp50_cached = Companion_getInstance_21().xdv_1;
    if (tmp49_input.j13()) {
      tmp5_local0 = tmp49_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.i13(tmp0_desc, 10, tmp50_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.i13(tmp0_desc, 36, tmp50_cached[36].y2(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.i13(tmp0_desc, 39, tmp50_cached[39].y2(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.i13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.i13(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.i13(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.i13(tmp0_desc, 10, tmp50_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.i13(tmp0_desc, 36, tmp50_cached[36].y2(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.i13(tmp0_desc, 39, tmp50_cached[39].y2(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.i13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.i13(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.i13(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp49_input.v12(tmp0_desc);
    return LegacyAnswerPost.odx(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  cy() {
    return this.ydv_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_21().xdv_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].y2()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].y2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAnswerPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.pdx(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static pdx(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_21();
    var $this = this.odt();
    $this.adw_1 = blogName;
    $this.bdw_1 = idString;
    $this.cdw_1 = genesisPostId;
    $this.ddw_1 = postUrl;
    $this.edw_1 = parentPostUrl;
    $this.fdw_1 = type;
    $this.gdw_1 = timestamp;
    $this.hdw_1 = date;
    $this.idw_1 = format;
    $this.jdw_1 = reblogKey;
    $this.kdw_1 = tags;
    $this.ldw_1 = isBookmarklet;
    $this.mdw_1 = isMobile;
    $this.ndw_1 = sourceUrl;
    $this.odw_1 = sourceTitle;
    $this.pdw_1 = isLiked;
    $this.qdw_1 = state;
    $this.rdw_1 = title;
    $this.sdw_1 = body;
    $this.tdw_1 = noteCount;
    $this.udw_1 = summary;
    $this.vdw_1 = slug;
    $this.wdw_1 = rebloggedFromId;
    $this.xdw_1 = rebloggedFromUrl;
    $this.ydw_1 = rebloggedFromName;
    $this.zdw_1 = rebloggedFromTitle;
    $this.adx_1 = rebloggedFromUuid;
    $this.bdx_1 = rebloggedFromCanMessage;
    $this.cdx_1 = rebloggedFromFollowing;
    $this.ddx_1 = rebloggedRootId;
    $this.edx_1 = rebloggedRootUrl;
    $this.fdx_1 = rebloggedRootName;
    $this.gdx_1 = rebloggedRootTitle;
    $this.hdx_1 = rebloggedRootUuid;
    $this.idx_1 = rebloggedRootCanMessage;
    $this.jdx_1 = rebloggedRootFollowing;
    $this.kdx_1 = notes;
    $this.ldx_1 = blog;
    $this.mdx_1 = reblog;
    $this.ndx_1 = trail;
    $this.askingName = null;
    $this.askingUrl = null;
    $this.question = null;
    $this.answer = null;
    return $this;
  }
  pdk(_set____db54di) {
    this.adw_1 = _set____db54di;
  }
  qdk() {
    return this.adw_1;
  }
  ydt(_set____db54di) {
    this.bdw_1 = _set____db54di;
  }
  zdt() {
    return this.bdw_1;
  }
  adu(_set____db54di) {
    this.cdw_1 = _set____db54di;
  }
  bdu() {
    return this.cdw_1;
  }
  cdu(_set____db54di) {
    this.ddw_1 = _set____db54di;
  }
  ddu() {
    return this.ddw_1;
  }
  edu(_set____db54di) {
    this.edw_1 = _set____db54di;
  }
  fdu() {
    return this.edw_1;
  }
  e33(_set____db54di) {
    this.fdw_1 = _set____db54di;
  }
  x32() {
    return this.fdw_1;
  }
  gdu(_set____db54di) {
    this.gdw_1 = _set____db54di;
  }
  ydq() {
    return this.gdw_1;
  }
  wdl(_set____db54di) {
    this.hdw_1 = _set____db54di;
  }
  xdl() {
    return this.hdw_1;
  }
  ydl(_set____db54di) {
    this.idw_1 = _set____db54di;
  }
  zdl() {
    return this.idw_1;
  }
  pdn(_set____db54di) {
    this.jdw_1 = _set____db54di;
  }
  qdn() {
    return this.jdw_1;
  }
  la7(_set____db54di) {
    this.kdw_1 = _set____db54di;
  }
  ga2() {
    return this.kdw_1;
  }
  hdu(_set____db54di) {
    this.ldw_1 = _set____db54di;
  }
  idu() {
    return this.ldw_1;
  }
  jdu(_set____db54di) {
    this.mdw_1 = _set____db54di;
  }
  kdu() {
    return this.mdw_1;
  }
  y32(_set____db54di) {
    this.ndw_1 = _set____db54di;
  }
  z32() {
    return this.ndw_1;
  }
  ldu(_set____db54di) {
    this.odw_1 = _set____db54di;
  }
  mdu() {
    return this.odw_1;
  }
  ndu(_set____db54di) {
    this.pdw_1 = _set____db54di;
  }
  caa() {
    return this.pdw_1;
  }
  y9t(_set____db54di) {
    this.qdw_1 = _set____db54di;
  }
  g7x() {
    return this.qdw_1;
  }
  ca2(_set____db54di) {
    this.rdw_1 = _set____db54di;
  }
  m3b() {
    return this.rdw_1;
  }
  ta8(_set____db54di) {
    this.sdw_1 = _set____db54di;
  }
  ua8() {
    return this.sdw_1;
  }
  odu(_set____db54di) {
    this.tdw_1 = _set____db54di;
  }
  pdu() {
    return this.tdw_1;
  }
  oa9(_set____db54di) {
    this.udw_1 = _set____db54di;
  }
  pa9() {
    return this.udw_1;
  }
  adm(_set____db54di) {
    this.vdw_1 = _set____db54di;
  }
  bdm() {
    return this.vdw_1;
  }
  qdu(_set____db54di) {
    this.wdw_1 = _set____db54di;
  }
  rdu() {
    return this.wdw_1;
  }
  sdu(_set____db54di) {
    this.xdw_1 = _set____db54di;
  }
  tdu() {
    return this.xdw_1;
  }
  udu(_set____db54di) {
    this.ydw_1 = _set____db54di;
  }
  vdu() {
    return this.ydw_1;
  }
  wdu(_set____db54di) {
    this.zdw_1 = _set____db54di;
  }
  xdu() {
    return this.zdw_1;
  }
  ydu(_set____db54di) {
    this.adx_1 = _set____db54di;
  }
  zdu() {
    return this.adx_1;
  }
  adv(_set____db54di) {
    this.bdx_1 = _set____db54di;
  }
  bdv() {
    return this.bdx_1;
  }
  cdv(_set____db54di) {
    this.cdx_1 = _set____db54di;
  }
  ddv() {
    return this.cdx_1;
  }
  edv(_set____db54di) {
    this.ddx_1 = _set____db54di;
  }
  fdv() {
    return this.ddx_1;
  }
  gdv(_set____db54di) {
    this.edx_1 = _set____db54di;
  }
  hdv() {
    return this.edx_1;
  }
  idv(_set____db54di) {
    this.fdx_1 = _set____db54di;
  }
  jdv() {
    return this.fdx_1;
  }
  kdv(_set____db54di) {
    this.gdx_1 = _set____db54di;
  }
  ldv() {
    return this.gdx_1;
  }
  mdv(_set____db54di) {
    this.hdx_1 = _set____db54di;
  }
  ndv() {
    return this.hdx_1;
  }
  odv(_set____db54di) {
    this.idx_1 = _set____db54di;
  }
  pdv() {
    return this.idx_1;
  }
  qdv(_set____db54di) {
    this.jdx_1 = _set____db54di;
  }
  rdv() {
    return this.jdx_1;
  }
  sdv(_set____db54di) {
    this.kdx_1 = _set____db54di;
  }
  tdv() {
    return this.kdx_1;
  }
  gdp(_set____db54di) {
    this.ldx_1 = _set____db54di;
  }
  hdp() {
    return this.ldx_1;
  }
  udv(_set____db54di) {
    this.mdx_1 = _set____db54di;
  }
  jc2() {
    return this.mdx_1;
  }
  vdv(_set____db54di) {
    this.ndx_1 = _set____db54di;
  }
  wdv() {
    return this.ndx_1;
  }
  qdx() {
    return this.askingName;
  }
  rdx() {
    return this.askingUrl;
  }
  sdx() {
    return this.question;
  }
  mdn() {
    return this.answer;
  }
  static odx(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, askingName, askingUrl, question, answer, serializationConstructorMarker) {
    Companion_getInstance_21();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_18().ydv_1);
    }
    var $this = this.odt();
    $this.adw_1 = blogName;
    $this.bdw_1 = idString;
    $this.cdw_1 = genesisPostId;
    $this.ddw_1 = postUrl;
    $this.edw_1 = parentPostUrl;
    $this.fdw_1 = type;
    $this.gdw_1 = timestamp;
    $this.hdw_1 = date;
    $this.idw_1 = format;
    $this.jdw_1 = reblogKey;
    $this.kdw_1 = tags;
    $this.ldw_1 = isBookmarklet;
    $this.mdw_1 = isMobile;
    $this.ndw_1 = sourceUrl;
    $this.odw_1 = sourceTitle;
    $this.pdw_1 = isLiked;
    $this.qdw_1 = state;
    $this.rdw_1 = title;
    $this.sdw_1 = body;
    $this.tdw_1 = noteCount;
    $this.udw_1 = summary;
    $this.vdw_1 = slug;
    $this.wdw_1 = rebloggedFromId;
    $this.xdw_1 = rebloggedFromUrl;
    $this.ydw_1 = rebloggedFromName;
    $this.zdw_1 = rebloggedFromTitle;
    $this.adx_1 = rebloggedFromUuid;
    $this.bdx_1 = rebloggedFromCanMessage;
    $this.cdx_1 = rebloggedFromFollowing;
    $this.ddx_1 = rebloggedRootId;
    $this.edx_1 = rebloggedRootUrl;
    $this.fdx_1 = rebloggedRootName;
    $this.gdx_1 = rebloggedRootTitle;
    $this.hdx_1 = rebloggedRootUuid;
    $this.idx_1 = rebloggedRootCanMessage;
    $this.jdx_1 = rebloggedRootFollowing;
    $this.kdx_1 = notes;
    $this.ldx_1 = blog;
    $this.mdx_1 = reblog;
    $this.ndx_1 = trail;
    if (0 === (seen1 & 256))
      $this.askingName = null;
    else
      $this.askingName = askingName;
    if (0 === (seen1 & 512))
      $this.askingUrl = null;
    else
      $this.askingUrl = askingUrl;
    if (0 === (seen1 & 1024))
      $this.question = null;
    else
      $this.question = question;
    if (0 === (seen1 & 2048))
      $this.answer = null;
    else
      $this.answer = answer;
    return $this;
  }
}
class Companion_21 {
  constructor() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.tdx_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1), null];
  }
  n1o() {
    return $serializer_getInstance_19();
  }
}
class $serializer_20 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAudioPost', this, 41);
    tmp0_serialDesc.m1a('blog_name', false);
    tmp0_serialDesc.m1a('id_string', false);
    tmp0_serialDesc.m1a('genesis_post_id', false);
    tmp0_serialDesc.m1a('post_url', false);
    tmp0_serialDesc.m1a('parent_post_url', false);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('timestamp', false);
    tmp0_serialDesc.m1a('date', false);
    tmp0_serialDesc.m1a('format', false);
    tmp0_serialDesc.m1a('reblog_key', false);
    tmp0_serialDesc.m1a('tags', false);
    tmp0_serialDesc.m1a('bookmarklet', false);
    tmp0_serialDesc.m1a('mobile', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('source_title', false);
    tmp0_serialDesc.m1a('liked', false);
    tmp0_serialDesc.m1a('state', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('note_count', false);
    tmp0_serialDesc.m1a('summary', false);
    tmp0_serialDesc.m1a('slug', false);
    tmp0_serialDesc.m1a('reblogged_from_id', false);
    tmp0_serialDesc.m1a('reblogged_from_url', false);
    tmp0_serialDesc.m1a('reblogged_from_name', false);
    tmp0_serialDesc.m1a('reblogged_from_title', false);
    tmp0_serialDesc.m1a('reblogged_from_uuid', false);
    tmp0_serialDesc.m1a('reblogged_from_can_message', false);
    tmp0_serialDesc.m1a('reblogged_from_following', false);
    tmp0_serialDesc.m1a('reblogged_root_id', false);
    tmp0_serialDesc.m1a('reblogged_root_url', false);
    tmp0_serialDesc.m1a('reblogged_root_name', false);
    tmp0_serialDesc.m1a('reblogged_root_title', false);
    tmp0_serialDesc.m1a('reblogged_root_uuid', false);
    tmp0_serialDesc.m1a('reblogged_root_can_message', false);
    tmp0_serialDesc.m1a('reblogged_root_following', false);
    tmp0_serialDesc.m1a('notes', false);
    tmp0_serialDesc.m1a('blog', false);
    tmp0_serialDesc.m1a('reblog', false);
    tmp0_serialDesc.m1a('trail', false);
    tmp0_serialDesc.m1a('caption', true);
    this.udx_1 = tmp0_serialDesc;
  }
  vdx(encoder, value) {
    var tmp0_desc = this.udx_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().tdx_1;
    tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.wdx_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.xdx_1);
    tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.ydx_1);
    tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.zdx_1);
    tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.ady_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.bdy_1);
    tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.cdy_1);
    tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.ddy_1);
    tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.edy_1);
    tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.fdy_1);
    tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.gdy_1);
    tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.hdy_1);
    tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.idy_1);
    tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.jdy_1);
    tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.kdy_1);
    tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ldy_1);
    tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.mdy_1);
    tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.ndy_1);
    tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.ody_1);
    tmp1_output.m14(tmp0_desc, 19, IntSerializer_getInstance(), value.pdy_1);
    tmp1_output.m14(tmp0_desc, 20, StringSerializer_getInstance(), value.qdy_1);
    tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.rdy_1);
    tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.sdy_1);
    tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.tdy_1);
    tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.udy_1);
    tmp1_output.m14(tmp0_desc, 25, StringSerializer_getInstance(), value.vdy_1);
    tmp1_output.m14(tmp0_desc, 26, StringSerializer_getInstance(), value.wdy_1);
    tmp1_output.m14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.xdy_1);
    tmp1_output.m14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.ydy_1);
    tmp1_output.m14(tmp0_desc, 29, StringSerializer_getInstance(), value.zdy_1);
    tmp1_output.m14(tmp0_desc, 30, StringSerializer_getInstance(), value.adz_1);
    tmp1_output.m14(tmp0_desc, 31, StringSerializer_getInstance(), value.bdz_1);
    tmp1_output.m14(tmp0_desc, 32, StringSerializer_getInstance(), value.cdz_1);
    tmp1_output.m14(tmp0_desc, 33, StringSerializer_getInstance(), value.ddz_1);
    tmp1_output.m14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.edz_1);
    tmp1_output.m14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.fdz_1);
    tmp1_output.m14(tmp0_desc, 36, tmp2_cached[36].y2(), value.gdz_1);
    tmp1_output.m14(tmp0_desc, 37, $serializer_getInstance_14(), value.hdz_1);
    tmp1_output.m14(tmp0_desc, 38, $serializer_getInstance_17(), value.idz_1);
    tmp1_output.m14(tmp0_desc, 39, tmp2_cached[39].y2(), value.jdz_1);
    if (tmp1_output.q14(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.m14(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vdx(encoder, value instanceof LegacyAudioPost ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.udx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_input = decoder.u12(tmp0_desc);
    var tmp47_cached = Companion_getInstance_22().tdx_1;
    if (tmp46_input.j13()) {
      tmp5_local0 = tmp46_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.i13(tmp0_desc, 10, tmp47_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.i13(tmp0_desc, 36, tmp47_cached[36].y2(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.i13(tmp0_desc, 39, tmp47_cached[39].y2(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.i13(tmp0_desc, 10, tmp47_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.i13(tmp0_desc, 36, tmp47_cached[36].y2(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.i13(tmp0_desc, 39, tmp47_cached[39].y2(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp46_input.v12(tmp0_desc);
    return LegacyAudioPost.kdz(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  cy() {
    return this.udx_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_22().tdx_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].y2()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].y2()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAudioPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ldz(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ldz(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_22();
    var $this = this.odt();
    $this.wdx_1 = blogName;
    $this.xdx_1 = idString;
    $this.ydx_1 = genesisPostId;
    $this.zdx_1 = postUrl;
    $this.ady_1 = parentPostUrl;
    $this.bdy_1 = type;
    $this.cdy_1 = timestamp;
    $this.ddy_1 = date;
    $this.edy_1 = format;
    $this.fdy_1 = reblogKey;
    $this.gdy_1 = tags;
    $this.hdy_1 = isBookmarklet;
    $this.idy_1 = isMobile;
    $this.jdy_1 = sourceUrl;
    $this.kdy_1 = sourceTitle;
    $this.ldy_1 = isLiked;
    $this.mdy_1 = state;
    $this.ndy_1 = title;
    $this.ody_1 = body;
    $this.pdy_1 = noteCount;
    $this.qdy_1 = summary;
    $this.rdy_1 = slug;
    $this.sdy_1 = rebloggedFromId;
    $this.tdy_1 = rebloggedFromUrl;
    $this.udy_1 = rebloggedFromName;
    $this.vdy_1 = rebloggedFromTitle;
    $this.wdy_1 = rebloggedFromUuid;
    $this.xdy_1 = rebloggedFromCanMessage;
    $this.ydy_1 = rebloggedFromFollowing;
    $this.zdy_1 = rebloggedRootId;
    $this.adz_1 = rebloggedRootUrl;
    $this.bdz_1 = rebloggedRootName;
    $this.cdz_1 = rebloggedRootTitle;
    $this.ddz_1 = rebloggedRootUuid;
    $this.edz_1 = rebloggedRootCanMessage;
    $this.fdz_1 = rebloggedRootFollowing;
    $this.gdz_1 = notes;
    $this.hdz_1 = blog;
    $this.idz_1 = reblog;
    $this.jdz_1 = trail;
    $this.caption = null;
    return $this;
  }
  pdk(_set____db54di) {
    this.wdx_1 = _set____db54di;
  }
  qdk() {
    return this.wdx_1;
  }
  ydt(_set____db54di) {
    this.xdx_1 = _set____db54di;
  }
  zdt() {
    return this.xdx_1;
  }
  adu(_set____db54di) {
    this.ydx_1 = _set____db54di;
  }
  bdu() {
    return this.ydx_1;
  }
  cdu(_set____db54di) {
    this.zdx_1 = _set____db54di;
  }
  ddu() {
    return this.zdx_1;
  }
  edu(_set____db54di) {
    this.ady_1 = _set____db54di;
  }
  fdu() {
    return this.ady_1;
  }
  e33(_set____db54di) {
    this.bdy_1 = _set____db54di;
  }
  x32() {
    return this.bdy_1;
  }
  gdu(_set____db54di) {
    this.cdy_1 = _set____db54di;
  }
  ydq() {
    return this.cdy_1;
  }
  wdl(_set____db54di) {
    this.ddy_1 = _set____db54di;
  }
  xdl() {
    return this.ddy_1;
  }
  ydl(_set____db54di) {
    this.edy_1 = _set____db54di;
  }
  zdl() {
    return this.edy_1;
  }
  pdn(_set____db54di) {
    this.fdy_1 = _set____db54di;
  }
  qdn() {
    return this.fdy_1;
  }
  la7(_set____db54di) {
    this.gdy_1 = _set____db54di;
  }
  ga2() {
    return this.gdy_1;
  }
  hdu(_set____db54di) {
    this.hdy_1 = _set____db54di;
  }
  idu() {
    return this.hdy_1;
  }
  jdu(_set____db54di) {
    this.idy_1 = _set____db54di;
  }
  kdu() {
    return this.idy_1;
  }
  y32(_set____db54di) {
    this.jdy_1 = _set____db54di;
  }
  z32() {
    return this.jdy_1;
  }
  ldu(_set____db54di) {
    this.kdy_1 = _set____db54di;
  }
  mdu() {
    return this.kdy_1;
  }
  ndu(_set____db54di) {
    this.ldy_1 = _set____db54di;
  }
  caa() {
    return this.ldy_1;
  }
  y9t(_set____db54di) {
    this.mdy_1 = _set____db54di;
  }
  g7x() {
    return this.mdy_1;
  }
  ca2(_set____db54di) {
    this.ndy_1 = _set____db54di;
  }
  m3b() {
    return this.ndy_1;
  }
  ta8(_set____db54di) {
    this.ody_1 = _set____db54di;
  }
  ua8() {
    return this.ody_1;
  }
  odu(_set____db54di) {
    this.pdy_1 = _set____db54di;
  }
  pdu() {
    return this.pdy_1;
  }
  oa9(_set____db54di) {
    this.qdy_1 = _set____db54di;
  }
  pa9() {
    return this.qdy_1;
  }
  adm(_set____db54di) {
    this.rdy_1 = _set____db54di;
  }
  bdm() {
    return this.rdy_1;
  }
  qdu(_set____db54di) {
    this.sdy_1 = _set____db54di;
  }
  rdu() {
    return this.sdy_1;
  }
  sdu(_set____db54di) {
    this.tdy_1 = _set____db54di;
  }
  tdu() {
    return this.tdy_1;
  }
  udu(_set____db54di) {
    this.udy_1 = _set____db54di;
  }
  vdu() {
    return this.udy_1;
  }
  wdu(_set____db54di) {
    this.vdy_1 = _set____db54di;
  }
  xdu() {
    return this.vdy_1;
  }
  ydu(_set____db54di) {
    this.wdy_1 = _set____db54di;
  }
  zdu() {
    return this.wdy_1;
  }
  adv(_set____db54di) {
    this.xdy_1 = _set____db54di;
  }
  bdv() {
    return this.xdy_1;
  }
  cdv(_set____db54di) {
    this.ydy_1 = _set____db54di;
  }
  ddv() {
    return this.ydy_1;
  }
  edv(_set____db54di) {
    this.zdy_1 = _set____db54di;
  }
  fdv() {
    return this.zdy_1;
  }
  gdv(_set____db54di) {
    this.adz_1 = _set____db54di;
  }
  hdv() {
    return this.adz_1;
  }
  idv(_set____db54di) {
    this.bdz_1 = _set____db54di;
  }
  jdv() {
    return this.bdz_1;
  }
  kdv(_set____db54di) {
    this.cdz_1 = _set____db54di;
  }
  ldv() {
    return this.cdz_1;
  }
  mdv(_set____db54di) {
    this.ddz_1 = _set____db54di;
  }
  ndv() {
    return this.ddz_1;
  }
  odv(_set____db54di) {
    this.edz_1 = _set____db54di;
  }
  pdv() {
    return this.edz_1;
  }
  qdv(_set____db54di) {
    this.fdz_1 = _set____db54di;
  }
  rdv() {
    return this.fdz_1;
  }
  sdv(_set____db54di) {
    this.gdz_1 = _set____db54di;
  }
  tdv() {
    return this.gdz_1;
  }
  gdp(_set____db54di) {
    this.hdz_1 = _set____db54di;
  }
  hdp() {
    return this.hdz_1;
  }
  udv(_set____db54di) {
    this.idz_1 = _set____db54di;
  }
  jc2() {
    return this.idz_1;
  }
  vdv(_set____db54di) {
    this.jdz_1 = _set____db54di;
  }
  wdv() {
    return this.jdz_1;
  }
  ndl(_set____db54di) {
    this.caption = _set____db54di;
  }
  odl() {
    return this.caption;
  }
  static kdz(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, serializationConstructorMarker) {
    Companion_getInstance_22();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_19().udx_1);
    }
    var $this = this.odt();
    $this.wdx_1 = blogName;
    $this.xdx_1 = idString;
    $this.ydx_1 = genesisPostId;
    $this.zdx_1 = postUrl;
    $this.ady_1 = parentPostUrl;
    $this.bdy_1 = type;
    $this.cdy_1 = timestamp;
    $this.ddy_1 = date;
    $this.edy_1 = format;
    $this.fdy_1 = reblogKey;
    $this.gdy_1 = tags;
    $this.hdy_1 = isBookmarklet;
    $this.idy_1 = isMobile;
    $this.jdy_1 = sourceUrl;
    $this.kdy_1 = sourceTitle;
    $this.ldy_1 = isLiked;
    $this.mdy_1 = state;
    $this.ndy_1 = title;
    $this.ody_1 = body;
    $this.pdy_1 = noteCount;
    $this.qdy_1 = summary;
    $this.rdy_1 = slug;
    $this.sdy_1 = rebloggedFromId;
    $this.tdy_1 = rebloggedFromUrl;
    $this.udy_1 = rebloggedFromName;
    $this.vdy_1 = rebloggedFromTitle;
    $this.wdy_1 = rebloggedFromUuid;
    $this.xdy_1 = rebloggedFromCanMessage;
    $this.ydy_1 = rebloggedFromFollowing;
    $this.zdy_1 = rebloggedRootId;
    $this.adz_1 = rebloggedRootUrl;
    $this.bdz_1 = rebloggedRootName;
    $this.cdz_1 = rebloggedRootTitle;
    $this.ddz_1 = rebloggedRootUuid;
    $this.edz_1 = rebloggedRootCanMessage;
    $this.fdz_1 = rebloggedRootFollowing;
    $this.gdz_1 = notes;
    $this.hdz_1 = blog;
    $this.idz_1 = reblog;
    $this.jdz_1 = trail;
    if (0 === (seen1 & 256))
      $this.caption = null;
    else
      $this.caption = caption;
    return $this;
  }
}
class Companion_22 {
  constructor() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.mdz_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, lazy(tmp_6, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2)];
  }
  n1o() {
    return $serializer_getInstance_20();
  }
}
class $serializer_21 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyChatPost', this, 41);
    tmp0_serialDesc.m1a('blog_name', false);
    tmp0_serialDesc.m1a('id_string', false);
    tmp0_serialDesc.m1a('genesis_post_id', false);
    tmp0_serialDesc.m1a('post_url', false);
    tmp0_serialDesc.m1a('parent_post_url', false);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('timestamp', false);
    tmp0_serialDesc.m1a('date', false);
    tmp0_serialDesc.m1a('format', false);
    tmp0_serialDesc.m1a('reblog_key', false);
    tmp0_serialDesc.m1a('tags', false);
    tmp0_serialDesc.m1a('bookmarklet', false);
    tmp0_serialDesc.m1a('mobile', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('source_title', false);
    tmp0_serialDesc.m1a('liked', false);
    tmp0_serialDesc.m1a('state', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('note_count', false);
    tmp0_serialDesc.m1a('summary', false);
    tmp0_serialDesc.m1a('slug', false);
    tmp0_serialDesc.m1a('reblogged_from_id', false);
    tmp0_serialDesc.m1a('reblogged_from_url', false);
    tmp0_serialDesc.m1a('reblogged_from_name', false);
    tmp0_serialDesc.m1a('reblogged_from_title', false);
    tmp0_serialDesc.m1a('reblogged_from_uuid', false);
    tmp0_serialDesc.m1a('reblogged_from_can_message', false);
    tmp0_serialDesc.m1a('reblogged_from_following', false);
    tmp0_serialDesc.m1a('reblogged_root_id', false);
    tmp0_serialDesc.m1a('reblogged_root_url', false);
    tmp0_serialDesc.m1a('reblogged_root_name', false);
    tmp0_serialDesc.m1a('reblogged_root_title', false);
    tmp0_serialDesc.m1a('reblogged_root_uuid', false);
    tmp0_serialDesc.m1a('reblogged_root_can_message', false);
    tmp0_serialDesc.m1a('reblogged_root_following', false);
    tmp0_serialDesc.m1a('notes', false);
    tmp0_serialDesc.m1a('blog', false);
    tmp0_serialDesc.m1a('reblog', false);
    tmp0_serialDesc.m1a('trail', false);
    tmp0_serialDesc.m1a('dialogue', true);
    this.ndz_1 = tmp0_serialDesc;
  }
  odz(encoder, value) {
    var tmp0_desc = this.ndz_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().mdz_1;
    tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.pdz_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.qdz_1);
    tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.rdz_1);
    tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.sdz_1);
    tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.tdz_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.udz_1);
    tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.vdz_1);
    tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.wdz_1);
    tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.xdz_1);
    tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.ydz_1);
    tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.zdz_1);
    tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.ae0_1);
    tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.be0_1);
    tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.ce0_1);
    tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.de0_1);
    tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ee0_1);
    tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.fe0_1);
    tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.ge0_1);
    tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.he0_1);
    tmp1_output.m14(tmp0_desc, 19, IntSerializer_getInstance(), value.ie0_1);
    tmp1_output.m14(tmp0_desc, 20, StringSerializer_getInstance(), value.je0_1);
    tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.ke0_1);
    tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.le0_1);
    tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.me0_1);
    tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.ne0_1);
    tmp1_output.m14(tmp0_desc, 25, StringSerializer_getInstance(), value.oe0_1);
    tmp1_output.m14(tmp0_desc, 26, StringSerializer_getInstance(), value.pe0_1);
    tmp1_output.m14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.qe0_1);
    tmp1_output.m14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.re0_1);
    tmp1_output.m14(tmp0_desc, 29, StringSerializer_getInstance(), value.se0_1);
    tmp1_output.m14(tmp0_desc, 30, StringSerializer_getInstance(), value.te0_1);
    tmp1_output.m14(tmp0_desc, 31, StringSerializer_getInstance(), value.ue0_1);
    tmp1_output.m14(tmp0_desc, 32, StringSerializer_getInstance(), value.ve0_1);
    tmp1_output.m14(tmp0_desc, 33, StringSerializer_getInstance(), value.we0_1);
    tmp1_output.m14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.xe0_1);
    tmp1_output.m14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ye0_1);
    tmp1_output.m14(tmp0_desc, 36, tmp2_cached[36].y2(), value.ze0_1);
    tmp1_output.m14(tmp0_desc, 37, $serializer_getInstance_14(), value.ae1_1);
    tmp1_output.m14(tmp0_desc, 38, $serializer_getInstance_17(), value.be1_1);
    tmp1_output.m14(tmp0_desc, 39, tmp2_cached[39].y2(), value.ce1_1);
    if (tmp1_output.q14(tmp0_desc, 40) ? true : !(value.dialogue == null)) {
      tmp1_output.m14(tmp0_desc, 40, tmp2_cached[40].y2(), value.dialogue);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.odz(encoder, value instanceof LegacyChatPost ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ndz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_input = decoder.u12(tmp0_desc);
    var tmp47_cached = Companion_getInstance_23().mdz_1;
    if (tmp46_input.j13()) {
      tmp5_local0 = tmp46_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.i13(tmp0_desc, 10, tmp47_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.i13(tmp0_desc, 36, tmp47_cached[36].y2(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.i13(tmp0_desc, 39, tmp47_cached[39].y2(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.i13(tmp0_desc, 40, tmp47_cached[40].y2(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.i13(tmp0_desc, 10, tmp47_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.i13(tmp0_desc, 36, tmp47_cached[36].y2(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.i13(tmp0_desc, 39, tmp47_cached[39].y2(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.i13(tmp0_desc, 40, tmp47_cached[40].y2(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp46_input.v12(tmp0_desc);
    return LegacyChatPost.de1(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  cy() {
    return this.ndz_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_23().mdz_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].y2()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].y2()), get_nullable(tmp0_cached[40].y2())];
  }
}
class LegacyChatPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ee1(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ee1(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_23();
    var $this = this.odt();
    $this.pdz_1 = blogName;
    $this.qdz_1 = idString;
    $this.rdz_1 = genesisPostId;
    $this.sdz_1 = postUrl;
    $this.tdz_1 = parentPostUrl;
    $this.udz_1 = type;
    $this.vdz_1 = timestamp;
    $this.wdz_1 = date;
    $this.xdz_1 = format;
    $this.ydz_1 = reblogKey;
    $this.zdz_1 = tags;
    $this.ae0_1 = isBookmarklet;
    $this.be0_1 = isMobile;
    $this.ce0_1 = sourceUrl;
    $this.de0_1 = sourceTitle;
    $this.ee0_1 = isLiked;
    $this.fe0_1 = state;
    $this.ge0_1 = title;
    $this.he0_1 = body;
    $this.ie0_1 = noteCount;
    $this.je0_1 = summary;
    $this.ke0_1 = slug;
    $this.le0_1 = rebloggedFromId;
    $this.me0_1 = rebloggedFromUrl;
    $this.ne0_1 = rebloggedFromName;
    $this.oe0_1 = rebloggedFromTitle;
    $this.pe0_1 = rebloggedFromUuid;
    $this.qe0_1 = rebloggedFromCanMessage;
    $this.re0_1 = rebloggedFromFollowing;
    $this.se0_1 = rebloggedRootId;
    $this.te0_1 = rebloggedRootUrl;
    $this.ue0_1 = rebloggedRootName;
    $this.ve0_1 = rebloggedRootTitle;
    $this.we0_1 = rebloggedRootUuid;
    $this.xe0_1 = rebloggedRootCanMessage;
    $this.ye0_1 = rebloggedRootFollowing;
    $this.ze0_1 = notes;
    $this.ae1_1 = blog;
    $this.be1_1 = reblog;
    $this.ce1_1 = trail;
    $this.dialogue = null;
    return $this;
  }
  pdk(_set____db54di) {
    this.pdz_1 = _set____db54di;
  }
  qdk() {
    return this.pdz_1;
  }
  ydt(_set____db54di) {
    this.qdz_1 = _set____db54di;
  }
  zdt() {
    return this.qdz_1;
  }
  adu(_set____db54di) {
    this.rdz_1 = _set____db54di;
  }
  bdu() {
    return this.rdz_1;
  }
  cdu(_set____db54di) {
    this.sdz_1 = _set____db54di;
  }
  ddu() {
    return this.sdz_1;
  }
  edu(_set____db54di) {
    this.tdz_1 = _set____db54di;
  }
  fdu() {
    return this.tdz_1;
  }
  e33(_set____db54di) {
    this.udz_1 = _set____db54di;
  }
  x32() {
    return this.udz_1;
  }
  gdu(_set____db54di) {
    this.vdz_1 = _set____db54di;
  }
  ydq() {
    return this.vdz_1;
  }
  wdl(_set____db54di) {
    this.wdz_1 = _set____db54di;
  }
  xdl() {
    return this.wdz_1;
  }
  ydl(_set____db54di) {
    this.xdz_1 = _set____db54di;
  }
  zdl() {
    return this.xdz_1;
  }
  pdn(_set____db54di) {
    this.ydz_1 = _set____db54di;
  }
  qdn() {
    return this.ydz_1;
  }
  la7(_set____db54di) {
    this.zdz_1 = _set____db54di;
  }
  ga2() {
    return this.zdz_1;
  }
  hdu(_set____db54di) {
    this.ae0_1 = _set____db54di;
  }
  idu() {
    return this.ae0_1;
  }
  jdu(_set____db54di) {
    this.be0_1 = _set____db54di;
  }
  kdu() {
    return this.be0_1;
  }
  y32(_set____db54di) {
    this.ce0_1 = _set____db54di;
  }
  z32() {
    return this.ce0_1;
  }
  ldu(_set____db54di) {
    this.de0_1 = _set____db54di;
  }
  mdu() {
    return this.de0_1;
  }
  ndu(_set____db54di) {
    this.ee0_1 = _set____db54di;
  }
  caa() {
    return this.ee0_1;
  }
  y9t(_set____db54di) {
    this.fe0_1 = _set____db54di;
  }
  g7x() {
    return this.fe0_1;
  }
  ca2(_set____db54di) {
    this.ge0_1 = _set____db54di;
  }
  m3b() {
    return this.ge0_1;
  }
  ta8(_set____db54di) {
    this.he0_1 = _set____db54di;
  }
  ua8() {
    return this.he0_1;
  }
  odu(_set____db54di) {
    this.ie0_1 = _set____db54di;
  }
  pdu() {
    return this.ie0_1;
  }
  oa9(_set____db54di) {
    this.je0_1 = _set____db54di;
  }
  pa9() {
    return this.je0_1;
  }
  adm(_set____db54di) {
    this.ke0_1 = _set____db54di;
  }
  bdm() {
    return this.ke0_1;
  }
  qdu(_set____db54di) {
    this.le0_1 = _set____db54di;
  }
  rdu() {
    return this.le0_1;
  }
  sdu(_set____db54di) {
    this.me0_1 = _set____db54di;
  }
  tdu() {
    return this.me0_1;
  }
  udu(_set____db54di) {
    this.ne0_1 = _set____db54di;
  }
  vdu() {
    return this.ne0_1;
  }
  wdu(_set____db54di) {
    this.oe0_1 = _set____db54di;
  }
  xdu() {
    return this.oe0_1;
  }
  ydu(_set____db54di) {
    this.pe0_1 = _set____db54di;
  }
  zdu() {
    return this.pe0_1;
  }
  adv(_set____db54di) {
    this.qe0_1 = _set____db54di;
  }
  bdv() {
    return this.qe0_1;
  }
  cdv(_set____db54di) {
    this.re0_1 = _set____db54di;
  }
  ddv() {
    return this.re0_1;
  }
  edv(_set____db54di) {
    this.se0_1 = _set____db54di;
  }
  fdv() {
    return this.se0_1;
  }
  gdv(_set____db54di) {
    this.te0_1 = _set____db54di;
  }
  hdv() {
    return this.te0_1;
  }
  idv(_set____db54di) {
    this.ue0_1 = _set____db54di;
  }
  jdv() {
    return this.ue0_1;
  }
  kdv(_set____db54di) {
    this.ve0_1 = _set____db54di;
  }
  ldv() {
    return this.ve0_1;
  }
  mdv(_set____db54di) {
    this.we0_1 = _set____db54di;
  }
  ndv() {
    return this.we0_1;
  }
  odv(_set____db54di) {
    this.xe0_1 = _set____db54di;
  }
  pdv() {
    return this.xe0_1;
  }
  qdv(_set____db54di) {
    this.ye0_1 = _set____db54di;
  }
  rdv() {
    return this.ye0_1;
  }
  sdv(_set____db54di) {
    this.ze0_1 = _set____db54di;
  }
  tdv() {
    return this.ze0_1;
  }
  gdp(_set____db54di) {
    this.ae1_1 = _set____db54di;
  }
  hdp() {
    return this.ae1_1;
  }
  udv(_set____db54di) {
    this.be1_1 = _set____db54di;
  }
  jc2() {
    return this.be1_1;
  }
  vdv(_set____db54di) {
    this.ce1_1 = _set____db54di;
  }
  wdv() {
    return this.ce1_1;
  }
  fe1() {
    return this.dialogue;
  }
  static de1(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, dialogue, serializationConstructorMarker) {
    Companion_getInstance_23();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_20().ndz_1);
    }
    var $this = this.odt();
    $this.pdz_1 = blogName;
    $this.qdz_1 = idString;
    $this.rdz_1 = genesisPostId;
    $this.sdz_1 = postUrl;
    $this.tdz_1 = parentPostUrl;
    $this.udz_1 = type;
    $this.vdz_1 = timestamp;
    $this.wdz_1 = date;
    $this.xdz_1 = format;
    $this.ydz_1 = reblogKey;
    $this.zdz_1 = tags;
    $this.ae0_1 = isBookmarklet;
    $this.be0_1 = isMobile;
    $this.ce0_1 = sourceUrl;
    $this.de0_1 = sourceTitle;
    $this.ee0_1 = isLiked;
    $this.fe0_1 = state;
    $this.ge0_1 = title;
    $this.he0_1 = body;
    $this.ie0_1 = noteCount;
    $this.je0_1 = summary;
    $this.ke0_1 = slug;
    $this.le0_1 = rebloggedFromId;
    $this.me0_1 = rebloggedFromUrl;
    $this.ne0_1 = rebloggedFromName;
    $this.oe0_1 = rebloggedFromTitle;
    $this.pe0_1 = rebloggedFromUuid;
    $this.qe0_1 = rebloggedFromCanMessage;
    $this.re0_1 = rebloggedFromFollowing;
    $this.se0_1 = rebloggedRootId;
    $this.te0_1 = rebloggedRootUrl;
    $this.ue0_1 = rebloggedRootName;
    $this.ve0_1 = rebloggedRootTitle;
    $this.we0_1 = rebloggedRootUuid;
    $this.xe0_1 = rebloggedRootCanMessage;
    $this.ye0_1 = rebloggedRootFollowing;
    $this.ze0_1 = notes;
    $this.ae1_1 = blog;
    $this.be1_1 = reblog;
    $this.ce1_1 = trail;
    if (0 === (seen1 & 256))
      $this.dialogue = null;
    else
      $this.dialogue = dialogue;
    return $this;
  }
}
class Companion_23 {
  constructor() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ge1_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1), null, null, null, null, null];
  }
  n1o() {
    return $serializer_getInstance_21();
  }
}
class $serializer_22 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyLinkPost', this, 45);
    tmp0_serialDesc.m1a('blog_name', false);
    tmp0_serialDesc.m1a('id_string', false);
    tmp0_serialDesc.m1a('genesis_post_id', false);
    tmp0_serialDesc.m1a('post_url', false);
    tmp0_serialDesc.m1a('parent_post_url', false);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('timestamp', false);
    tmp0_serialDesc.m1a('date', false);
    tmp0_serialDesc.m1a('format', false);
    tmp0_serialDesc.m1a('reblog_key', false);
    tmp0_serialDesc.m1a('tags', false);
    tmp0_serialDesc.m1a('bookmarklet', false);
    tmp0_serialDesc.m1a('mobile', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('source_title', false);
    tmp0_serialDesc.m1a('liked', false);
    tmp0_serialDesc.m1a('state', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('note_count', false);
    tmp0_serialDesc.m1a('summary', false);
    tmp0_serialDesc.m1a('slug', false);
    tmp0_serialDesc.m1a('reblogged_from_id', false);
    tmp0_serialDesc.m1a('reblogged_from_url', false);
    tmp0_serialDesc.m1a('reblogged_from_name', false);
    tmp0_serialDesc.m1a('reblogged_from_title', false);
    tmp0_serialDesc.m1a('reblogged_from_uuid', false);
    tmp0_serialDesc.m1a('reblogged_from_can_message', false);
    tmp0_serialDesc.m1a('reblogged_from_following', false);
    tmp0_serialDesc.m1a('reblogged_root_id', false);
    tmp0_serialDesc.m1a('reblogged_root_url', false);
    tmp0_serialDesc.m1a('reblogged_root_name', false);
    tmp0_serialDesc.m1a('reblogged_root_title', false);
    tmp0_serialDesc.m1a('reblogged_root_uuid', false);
    tmp0_serialDesc.m1a('reblogged_root_can_message', false);
    tmp0_serialDesc.m1a('reblogged_root_following', false);
    tmp0_serialDesc.m1a('notes', false);
    tmp0_serialDesc.m1a('blog', false);
    tmp0_serialDesc.m1a('reblog', false);
    tmp0_serialDesc.m1a('trail', false);
    tmp0_serialDesc.m1a('description', true);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('link_author', true);
    tmp0_serialDesc.m1a('excerpt', true);
    tmp0_serialDesc.m1a('publisher', true);
    this.he1_1 = tmp0_serialDesc;
  }
  ie1(encoder, value) {
    var tmp0_desc = this.he1_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().ge1_1;
    tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.je1_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.ke1_1);
    tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.le1_1);
    tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.me1_1);
    tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.ne1_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.oe1_1);
    tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.pe1_1);
    tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.qe1_1);
    tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.re1_1);
    tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.se1_1);
    tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.te1_1);
    tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.ue1_1);
    tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ve1_1);
    tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.we1_1);
    tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.xe1_1);
    tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ye1_1);
    tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.ze1_1);
    tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.ae2_1);
    tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.be2_1);
    tmp1_output.m14(tmp0_desc, 19, IntSerializer_getInstance(), value.ce2_1);
    tmp1_output.m14(tmp0_desc, 20, StringSerializer_getInstance(), value.de2_1);
    tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.ee2_1);
    tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.fe2_1);
    tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.ge2_1);
    tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.he2_1);
    tmp1_output.m14(tmp0_desc, 25, StringSerializer_getInstance(), value.ie2_1);
    tmp1_output.m14(tmp0_desc, 26, StringSerializer_getInstance(), value.je2_1);
    tmp1_output.m14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ke2_1);
    tmp1_output.m14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.le2_1);
    tmp1_output.m14(tmp0_desc, 29, StringSerializer_getInstance(), value.me2_1);
    tmp1_output.m14(tmp0_desc, 30, StringSerializer_getInstance(), value.ne2_1);
    tmp1_output.m14(tmp0_desc, 31, StringSerializer_getInstance(), value.oe2_1);
    tmp1_output.m14(tmp0_desc, 32, StringSerializer_getInstance(), value.pe2_1);
    tmp1_output.m14(tmp0_desc, 33, StringSerializer_getInstance(), value.qe2_1);
    tmp1_output.m14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.re2_1);
    tmp1_output.m14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.se2_1);
    tmp1_output.m14(tmp0_desc, 36, tmp2_cached[36].y2(), value.te2_1);
    tmp1_output.m14(tmp0_desc, 37, $serializer_getInstance_14(), value.ue2_1);
    tmp1_output.m14(tmp0_desc, 38, $serializer_getInstance_17(), value.ve2_1);
    tmp1_output.m14(tmp0_desc, 39, tmp2_cached[39].y2(), value.we2_1);
    if (tmp1_output.q14(tmp0_desc, 40) ? true : !(value.description == null)) {
      tmp1_output.m14(tmp0_desc, 40, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.q14(tmp0_desc, 41) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 41, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 42) ? true : !(value.linkAuthor == null)) {
      tmp1_output.m14(tmp0_desc, 42, StringSerializer_getInstance(), value.linkAuthor);
    }
    if (tmp1_output.q14(tmp0_desc, 43) ? true : !(value.excerpt == null)) {
      tmp1_output.m14(tmp0_desc, 43, StringSerializer_getInstance(), value.excerpt);
    }
    if (tmp1_output.q14(tmp0_desc, 44) ? true : !(value.publisher == null)) {
      tmp1_output.m14(tmp0_desc, 44, StringSerializer_getInstance(), value.publisher);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ie1(encoder, value instanceof LegacyLinkPost ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.he1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_local43 = null;
    var tmp49_local44 = null;
    var tmp50_input = decoder.u12(tmp0_desc);
    var tmp51_cached = Companion_getInstance_24().ge1_1;
    if (tmp50_input.j13()) {
      tmp5_local0 = tmp50_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp50_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp50_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp50_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp50_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp50_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp50_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp50_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp50_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp50_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp50_input.i13(tmp0_desc, 10, tmp51_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp50_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp50_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp50_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp50_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp50_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp50_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp50_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp50_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp50_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp50_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp50_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp50_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp50_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp50_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp50_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp50_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp50_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp50_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp50_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp50_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp50_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp50_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp50_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp50_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp50_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp50_input.i13(tmp0_desc, 36, tmp51_cached[36].y2(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp50_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp50_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp50_input.i13(tmp0_desc, 39, tmp51_cached[39].y2(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp50_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp50_input.i13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp50_input.i13(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp50_input.i13(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp50_input.i13(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp50_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp50_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp50_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp50_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp50_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp50_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp50_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp50_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp50_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp50_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp50_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp50_input.i13(tmp0_desc, 10, tmp51_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp50_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp50_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp50_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp50_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp50_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp50_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp50_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp50_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp50_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp50_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp50_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp50_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp50_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp50_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp50_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp50_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp50_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp50_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp50_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp50_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp50_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp50_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp50_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp50_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp50_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp50_input.i13(tmp0_desc, 36, tmp51_cached[36].y2(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp50_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp50_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp50_input.i13(tmp0_desc, 39, tmp51_cached[39].y2(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp50_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp50_input.i13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp50_input.i13(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp50_input.i13(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp50_input.i13(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp50_input.v12(tmp0_desc);
    return LegacyLinkPost.xe2(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, null);
  }
  cy() {
    return this.he1_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_24().ge1_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].y2()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].y2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyLinkPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ye2(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ye2(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_24();
    var $this = this.odt();
    $this.je1_1 = blogName;
    $this.ke1_1 = idString;
    $this.le1_1 = genesisPostId;
    $this.me1_1 = postUrl;
    $this.ne1_1 = parentPostUrl;
    $this.oe1_1 = type;
    $this.pe1_1 = timestamp;
    $this.qe1_1 = date;
    $this.re1_1 = format;
    $this.se1_1 = reblogKey;
    $this.te1_1 = tags;
    $this.ue1_1 = isBookmarklet;
    $this.ve1_1 = isMobile;
    $this.we1_1 = sourceUrl;
    $this.xe1_1 = sourceTitle;
    $this.ye1_1 = isLiked;
    $this.ze1_1 = state;
    $this.ae2_1 = title;
    $this.be2_1 = body;
    $this.ce2_1 = noteCount;
    $this.de2_1 = summary;
    $this.ee2_1 = slug;
    $this.fe2_1 = rebloggedFromId;
    $this.ge2_1 = rebloggedFromUrl;
    $this.he2_1 = rebloggedFromName;
    $this.ie2_1 = rebloggedFromTitle;
    $this.je2_1 = rebloggedFromUuid;
    $this.ke2_1 = rebloggedFromCanMessage;
    $this.le2_1 = rebloggedFromFollowing;
    $this.me2_1 = rebloggedRootId;
    $this.ne2_1 = rebloggedRootUrl;
    $this.oe2_1 = rebloggedRootName;
    $this.pe2_1 = rebloggedRootTitle;
    $this.qe2_1 = rebloggedRootUuid;
    $this.re2_1 = rebloggedRootCanMessage;
    $this.se2_1 = rebloggedRootFollowing;
    $this.te2_1 = notes;
    $this.ue2_1 = blog;
    $this.ve2_1 = reblog;
    $this.we2_1 = trail;
    $this.description = null;
    $this.url = null;
    $this.linkAuthor = null;
    $this.excerpt = null;
    $this.publisher = null;
    return $this;
  }
  pdk(_set____db54di) {
    this.je1_1 = _set____db54di;
  }
  qdk() {
    return this.je1_1;
  }
  ydt(_set____db54di) {
    this.ke1_1 = _set____db54di;
  }
  zdt() {
    return this.ke1_1;
  }
  adu(_set____db54di) {
    this.le1_1 = _set____db54di;
  }
  bdu() {
    return this.le1_1;
  }
  cdu(_set____db54di) {
    this.me1_1 = _set____db54di;
  }
  ddu() {
    return this.me1_1;
  }
  edu(_set____db54di) {
    this.ne1_1 = _set____db54di;
  }
  fdu() {
    return this.ne1_1;
  }
  e33(_set____db54di) {
    this.oe1_1 = _set____db54di;
  }
  x32() {
    return this.oe1_1;
  }
  gdu(_set____db54di) {
    this.pe1_1 = _set____db54di;
  }
  ydq() {
    return this.pe1_1;
  }
  wdl(_set____db54di) {
    this.qe1_1 = _set____db54di;
  }
  xdl() {
    return this.qe1_1;
  }
  ydl(_set____db54di) {
    this.re1_1 = _set____db54di;
  }
  zdl() {
    return this.re1_1;
  }
  pdn(_set____db54di) {
    this.se1_1 = _set____db54di;
  }
  qdn() {
    return this.se1_1;
  }
  la7(_set____db54di) {
    this.te1_1 = _set____db54di;
  }
  ga2() {
    return this.te1_1;
  }
  hdu(_set____db54di) {
    this.ue1_1 = _set____db54di;
  }
  idu() {
    return this.ue1_1;
  }
  jdu(_set____db54di) {
    this.ve1_1 = _set____db54di;
  }
  kdu() {
    return this.ve1_1;
  }
  y32(_set____db54di) {
    this.we1_1 = _set____db54di;
  }
  z32() {
    return this.we1_1;
  }
  ldu(_set____db54di) {
    this.xe1_1 = _set____db54di;
  }
  mdu() {
    return this.xe1_1;
  }
  ndu(_set____db54di) {
    this.ye1_1 = _set____db54di;
  }
  caa() {
    return this.ye1_1;
  }
  y9t(_set____db54di) {
    this.ze1_1 = _set____db54di;
  }
  g7x() {
    return this.ze1_1;
  }
  ca2(_set____db54di) {
    this.ae2_1 = _set____db54di;
  }
  m3b() {
    return this.ae2_1;
  }
  ta8(_set____db54di) {
    this.be2_1 = _set____db54di;
  }
  ua8() {
    return this.be2_1;
  }
  odu(_set____db54di) {
    this.ce2_1 = _set____db54di;
  }
  pdu() {
    return this.ce2_1;
  }
  oa9(_set____db54di) {
    this.de2_1 = _set____db54di;
  }
  pa9() {
    return this.de2_1;
  }
  adm(_set____db54di) {
    this.ee2_1 = _set____db54di;
  }
  bdm() {
    return this.ee2_1;
  }
  qdu(_set____db54di) {
    this.fe2_1 = _set____db54di;
  }
  rdu() {
    return this.fe2_1;
  }
  sdu(_set____db54di) {
    this.ge2_1 = _set____db54di;
  }
  tdu() {
    return this.ge2_1;
  }
  udu(_set____db54di) {
    this.he2_1 = _set____db54di;
  }
  vdu() {
    return this.he2_1;
  }
  wdu(_set____db54di) {
    this.ie2_1 = _set____db54di;
  }
  xdu() {
    return this.ie2_1;
  }
  ydu(_set____db54di) {
    this.je2_1 = _set____db54di;
  }
  zdu() {
    return this.je2_1;
  }
  adv(_set____db54di) {
    this.ke2_1 = _set____db54di;
  }
  bdv() {
    return this.ke2_1;
  }
  cdv(_set____db54di) {
    this.le2_1 = _set____db54di;
  }
  ddv() {
    return this.le2_1;
  }
  edv(_set____db54di) {
    this.me2_1 = _set____db54di;
  }
  fdv() {
    return this.me2_1;
  }
  gdv(_set____db54di) {
    this.ne2_1 = _set____db54di;
  }
  hdv() {
    return this.ne2_1;
  }
  idv(_set____db54di) {
    this.oe2_1 = _set____db54di;
  }
  jdv() {
    return this.oe2_1;
  }
  kdv(_set____db54di) {
    this.pe2_1 = _set____db54di;
  }
  ldv() {
    return this.pe2_1;
  }
  mdv(_set____db54di) {
    this.qe2_1 = _set____db54di;
  }
  ndv() {
    return this.qe2_1;
  }
  odv(_set____db54di) {
    this.re2_1 = _set____db54di;
  }
  pdv() {
    return this.re2_1;
  }
  qdv(_set____db54di) {
    this.se2_1 = _set____db54di;
  }
  rdv() {
    return this.se2_1;
  }
  sdv(_set____db54di) {
    this.te2_1 = _set____db54di;
  }
  tdv() {
    return this.te2_1;
  }
  gdp(_set____db54di) {
    this.ue2_1 = _set____db54di;
  }
  hdp() {
    return this.ue2_1;
  }
  udv(_set____db54di) {
    this.ve2_1 = _set____db54di;
  }
  jc2() {
    return this.ve2_1;
  }
  vdv(_set____db54di) {
    this.we2_1 = _set____db54di;
  }
  wdv() {
    return this.we2_1;
  }
  v31(_set____db54di) {
    this.description = _set____db54di;
  }
  f31() {
    return this.description;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  ze2(_set____db54di) {
    this.linkAuthor = _set____db54di;
  }
  ae3() {
    return this.linkAuthor;
  }
  gdm(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  hdm() {
    return this.excerpt;
  }
  be3(_set____db54di) {
    this.publisher = _set____db54di;
  }
  ce3() {
    return this.publisher;
  }
  static xe2(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, description, url, linkAuthor, excerpt, publisher, serializationConstructorMarker) {
    Companion_getInstance_24();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_21().he1_1);
    }
    var $this = this.odt();
    $this.je1_1 = blogName;
    $this.ke1_1 = idString;
    $this.le1_1 = genesisPostId;
    $this.me1_1 = postUrl;
    $this.ne1_1 = parentPostUrl;
    $this.oe1_1 = type;
    $this.pe1_1 = timestamp;
    $this.qe1_1 = date;
    $this.re1_1 = format;
    $this.se1_1 = reblogKey;
    $this.te1_1 = tags;
    $this.ue1_1 = isBookmarklet;
    $this.ve1_1 = isMobile;
    $this.we1_1 = sourceUrl;
    $this.xe1_1 = sourceTitle;
    $this.ye1_1 = isLiked;
    $this.ze1_1 = state;
    $this.ae2_1 = title;
    $this.be2_1 = body;
    $this.ce2_1 = noteCount;
    $this.de2_1 = summary;
    $this.ee2_1 = slug;
    $this.fe2_1 = rebloggedFromId;
    $this.ge2_1 = rebloggedFromUrl;
    $this.he2_1 = rebloggedFromName;
    $this.ie2_1 = rebloggedFromTitle;
    $this.je2_1 = rebloggedFromUuid;
    $this.ke2_1 = rebloggedFromCanMessage;
    $this.le2_1 = rebloggedFromFollowing;
    $this.me2_1 = rebloggedRootId;
    $this.ne2_1 = rebloggedRootUrl;
    $this.oe2_1 = rebloggedRootName;
    $this.pe2_1 = rebloggedRootTitle;
    $this.qe2_1 = rebloggedRootUuid;
    $this.re2_1 = rebloggedRootCanMessage;
    $this.se2_1 = rebloggedRootFollowing;
    $this.te2_1 = notes;
    $this.ue2_1 = blog;
    $this.ve2_1 = reblog;
    $this.we2_1 = trail;
    if (0 === (seen1 & 256))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen1 & 512))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen1 & 1024))
      $this.linkAuthor = null;
    else
      $this.linkAuthor = linkAuthor;
    if (0 === (seen1 & 2048))
      $this.excerpt = null;
    else
      $this.excerpt = excerpt;
    if (0 === (seen1 & 4096))
      $this.publisher = null;
    else
      $this.publisher = publisher;
    return $this;
  }
}
class Companion_24 {
  constructor() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.de3_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, null, null, lazy(tmp_6, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2)];
  }
  n1o() {
    return $serializer_getInstance_22();
  }
}
class $serializer_23 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPhotoPost', this, 44);
    tmp0_serialDesc.m1a('blog_name', false);
    tmp0_serialDesc.m1a('id_string', false);
    tmp0_serialDesc.m1a('genesis_post_id', false);
    tmp0_serialDesc.m1a('post_url', false);
    tmp0_serialDesc.m1a('parent_post_url', false);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('timestamp', false);
    tmp0_serialDesc.m1a('date', false);
    tmp0_serialDesc.m1a('format', false);
    tmp0_serialDesc.m1a('reblog_key', false);
    tmp0_serialDesc.m1a('tags', false);
    tmp0_serialDesc.m1a('bookmarklet', false);
    tmp0_serialDesc.m1a('mobile', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('source_title', false);
    tmp0_serialDesc.m1a('liked', false);
    tmp0_serialDesc.m1a('state', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('note_count', false);
    tmp0_serialDesc.m1a('summary', false);
    tmp0_serialDesc.m1a('slug', false);
    tmp0_serialDesc.m1a('reblogged_from_id', false);
    tmp0_serialDesc.m1a('reblogged_from_url', false);
    tmp0_serialDesc.m1a('reblogged_from_name', false);
    tmp0_serialDesc.m1a('reblogged_from_title', false);
    tmp0_serialDesc.m1a('reblogged_from_uuid', false);
    tmp0_serialDesc.m1a('reblogged_from_can_message', false);
    tmp0_serialDesc.m1a('reblogged_from_following', false);
    tmp0_serialDesc.m1a('reblogged_root_id', false);
    tmp0_serialDesc.m1a('reblogged_root_url', false);
    tmp0_serialDesc.m1a('reblogged_root_name', false);
    tmp0_serialDesc.m1a('reblogged_root_title', false);
    tmp0_serialDesc.m1a('reblogged_root_uuid', false);
    tmp0_serialDesc.m1a('reblogged_root_can_message', false);
    tmp0_serialDesc.m1a('reblogged_root_following', false);
    tmp0_serialDesc.m1a('notes', false);
    tmp0_serialDesc.m1a('blog', false);
    tmp0_serialDesc.m1a('reblog', false);
    tmp0_serialDesc.m1a('trail', false);
    tmp0_serialDesc.m1a('caption', true);
    tmp0_serialDesc.m1a('width', true);
    tmp0_serialDesc.m1a('height', true);
    tmp0_serialDesc.m1a('photos', true);
    this.ee3_1 = tmp0_serialDesc;
  }
  fe3(encoder, value) {
    var tmp0_desc = this.ee3_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().de3_1;
    tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.ge3_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.he3_1);
    tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.ie3_1);
    tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.je3_1);
    tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.ke3_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.le3_1);
    tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.me3_1);
    tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.ne3_1);
    tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.oe3_1);
    tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.pe3_1);
    tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.qe3_1);
    tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.re3_1);
    tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.se3_1);
    tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.te3_1);
    tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.ue3_1);
    tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ve3_1);
    tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.we3_1);
    tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.xe3_1);
    tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.ye3_1);
    tmp1_output.m14(tmp0_desc, 19, IntSerializer_getInstance(), value.ze3_1);
    tmp1_output.m14(tmp0_desc, 20, StringSerializer_getInstance(), value.ae4_1);
    tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.be4_1);
    tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.ce4_1);
    tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.de4_1);
    tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.ee4_1);
    tmp1_output.m14(tmp0_desc, 25, StringSerializer_getInstance(), value.fe4_1);
    tmp1_output.m14(tmp0_desc, 26, StringSerializer_getInstance(), value.ge4_1);
    tmp1_output.m14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.he4_1);
    tmp1_output.m14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.ie4_1);
    tmp1_output.m14(tmp0_desc, 29, StringSerializer_getInstance(), value.je4_1);
    tmp1_output.m14(tmp0_desc, 30, StringSerializer_getInstance(), value.ke4_1);
    tmp1_output.m14(tmp0_desc, 31, StringSerializer_getInstance(), value.le4_1);
    tmp1_output.m14(tmp0_desc, 32, StringSerializer_getInstance(), value.me4_1);
    tmp1_output.m14(tmp0_desc, 33, StringSerializer_getInstance(), value.ne4_1);
    tmp1_output.m14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.oe4_1);
    tmp1_output.m14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.pe4_1);
    tmp1_output.m14(tmp0_desc, 36, tmp2_cached[36].y2(), value.qe4_1);
    tmp1_output.m14(tmp0_desc, 37, $serializer_getInstance_14(), value.re4_1);
    tmp1_output.m14(tmp0_desc, 38, $serializer_getInstance_17(), value.se4_1);
    tmp1_output.m14(tmp0_desc, 39, tmp2_cached[39].y2(), value.te4_1);
    if (tmp1_output.q14(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.m14(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.q14(tmp0_desc, 41) ? true : !(value.width == null)) {
      tmp1_output.m14(tmp0_desc, 41, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.q14(tmp0_desc, 42) ? true : !(value.height == null)) {
      tmp1_output.m14(tmp0_desc, 42, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.q14(tmp0_desc, 43) ? true : !(value.photos == null)) {
      tmp1_output.m14(tmp0_desc, 43, tmp2_cached[43].y2(), value.photos);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.fe3(encoder, value instanceof LegacyPhotoPost ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ee3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_local43 = null;
    var tmp49_input = decoder.u12(tmp0_desc);
    var tmp50_cached = Companion_getInstance_25().de3_1;
    if (tmp49_input.j13()) {
      tmp5_local0 = tmp49_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.i13(tmp0_desc, 10, tmp50_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.i13(tmp0_desc, 36, tmp50_cached[36].y2(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.i13(tmp0_desc, 39, tmp50_cached[39].y2(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.i13(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.i13(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.i13(tmp0_desc, 43, tmp50_cached[43].y2(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.i13(tmp0_desc, 10, tmp50_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.i13(tmp0_desc, 36, tmp50_cached[36].y2(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.i13(tmp0_desc, 39, tmp50_cached[39].y2(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.i13(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.i13(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.i13(tmp0_desc, 43, tmp50_cached[43].y2(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp49_input.v12(tmp0_desc);
    return LegacyPhotoPost.ue4(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  cy() {
    return this.ee3_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_25().de3_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].y2()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].y2()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[43].y2())];
  }
}
class LegacyPhotoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ve4(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ve4(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_25();
    var $this = this.odt();
    $this.ge3_1 = blogName;
    $this.he3_1 = idString;
    $this.ie3_1 = genesisPostId;
    $this.je3_1 = postUrl;
    $this.ke3_1 = parentPostUrl;
    $this.le3_1 = type;
    $this.me3_1 = timestamp;
    $this.ne3_1 = date;
    $this.oe3_1 = format;
    $this.pe3_1 = reblogKey;
    $this.qe3_1 = tags;
    $this.re3_1 = isBookmarklet;
    $this.se3_1 = isMobile;
    $this.te3_1 = sourceUrl;
    $this.ue3_1 = sourceTitle;
    $this.ve3_1 = isLiked;
    $this.we3_1 = state;
    $this.xe3_1 = title;
    $this.ye3_1 = body;
    $this.ze3_1 = noteCount;
    $this.ae4_1 = summary;
    $this.be4_1 = slug;
    $this.ce4_1 = rebloggedFromId;
    $this.de4_1 = rebloggedFromUrl;
    $this.ee4_1 = rebloggedFromName;
    $this.fe4_1 = rebloggedFromTitle;
    $this.ge4_1 = rebloggedFromUuid;
    $this.he4_1 = rebloggedFromCanMessage;
    $this.ie4_1 = rebloggedFromFollowing;
    $this.je4_1 = rebloggedRootId;
    $this.ke4_1 = rebloggedRootUrl;
    $this.le4_1 = rebloggedRootName;
    $this.me4_1 = rebloggedRootTitle;
    $this.ne4_1 = rebloggedRootUuid;
    $this.oe4_1 = rebloggedRootCanMessage;
    $this.pe4_1 = rebloggedRootFollowing;
    $this.qe4_1 = notes;
    $this.re4_1 = blog;
    $this.se4_1 = reblog;
    $this.te4_1 = trail;
    $this.caption = null;
    $this.width = null;
    $this.height = null;
    $this.photos = null;
    return $this;
  }
  pdk(_set____db54di) {
    this.ge3_1 = _set____db54di;
  }
  qdk() {
    return this.ge3_1;
  }
  ydt(_set____db54di) {
    this.he3_1 = _set____db54di;
  }
  zdt() {
    return this.he3_1;
  }
  adu(_set____db54di) {
    this.ie3_1 = _set____db54di;
  }
  bdu() {
    return this.ie3_1;
  }
  cdu(_set____db54di) {
    this.je3_1 = _set____db54di;
  }
  ddu() {
    return this.je3_1;
  }
  edu(_set____db54di) {
    this.ke3_1 = _set____db54di;
  }
  fdu() {
    return this.ke3_1;
  }
  e33(_set____db54di) {
    this.le3_1 = _set____db54di;
  }
  x32() {
    return this.le3_1;
  }
  gdu(_set____db54di) {
    this.me3_1 = _set____db54di;
  }
  ydq() {
    return this.me3_1;
  }
  wdl(_set____db54di) {
    this.ne3_1 = _set____db54di;
  }
  xdl() {
    return this.ne3_1;
  }
  ydl(_set____db54di) {
    this.oe3_1 = _set____db54di;
  }
  zdl() {
    return this.oe3_1;
  }
  pdn(_set____db54di) {
    this.pe3_1 = _set____db54di;
  }
  qdn() {
    return this.pe3_1;
  }
  la7(_set____db54di) {
    this.qe3_1 = _set____db54di;
  }
  ga2() {
    return this.qe3_1;
  }
  hdu(_set____db54di) {
    this.re3_1 = _set____db54di;
  }
  idu() {
    return this.re3_1;
  }
  jdu(_set____db54di) {
    this.se3_1 = _set____db54di;
  }
  kdu() {
    return this.se3_1;
  }
  y32(_set____db54di) {
    this.te3_1 = _set____db54di;
  }
  z32() {
    return this.te3_1;
  }
  ldu(_set____db54di) {
    this.ue3_1 = _set____db54di;
  }
  mdu() {
    return this.ue3_1;
  }
  ndu(_set____db54di) {
    this.ve3_1 = _set____db54di;
  }
  caa() {
    return this.ve3_1;
  }
  y9t(_set____db54di) {
    this.we3_1 = _set____db54di;
  }
  g7x() {
    return this.we3_1;
  }
  ca2(_set____db54di) {
    this.xe3_1 = _set____db54di;
  }
  m3b() {
    return this.xe3_1;
  }
  ta8(_set____db54di) {
    this.ye3_1 = _set____db54di;
  }
  ua8() {
    return this.ye3_1;
  }
  odu(_set____db54di) {
    this.ze3_1 = _set____db54di;
  }
  pdu() {
    return this.ze3_1;
  }
  oa9(_set____db54di) {
    this.ae4_1 = _set____db54di;
  }
  pa9() {
    return this.ae4_1;
  }
  adm(_set____db54di) {
    this.be4_1 = _set____db54di;
  }
  bdm() {
    return this.be4_1;
  }
  qdu(_set____db54di) {
    this.ce4_1 = _set____db54di;
  }
  rdu() {
    return this.ce4_1;
  }
  sdu(_set____db54di) {
    this.de4_1 = _set____db54di;
  }
  tdu() {
    return this.de4_1;
  }
  udu(_set____db54di) {
    this.ee4_1 = _set____db54di;
  }
  vdu() {
    return this.ee4_1;
  }
  wdu(_set____db54di) {
    this.fe4_1 = _set____db54di;
  }
  xdu() {
    return this.fe4_1;
  }
  ydu(_set____db54di) {
    this.ge4_1 = _set____db54di;
  }
  zdu() {
    return this.ge4_1;
  }
  adv(_set____db54di) {
    this.he4_1 = _set____db54di;
  }
  bdv() {
    return this.he4_1;
  }
  cdv(_set____db54di) {
    this.ie4_1 = _set____db54di;
  }
  ddv() {
    return this.ie4_1;
  }
  edv(_set____db54di) {
    this.je4_1 = _set____db54di;
  }
  fdv() {
    return this.je4_1;
  }
  gdv(_set____db54di) {
    this.ke4_1 = _set____db54di;
  }
  hdv() {
    return this.ke4_1;
  }
  idv(_set____db54di) {
    this.le4_1 = _set____db54di;
  }
  jdv() {
    return this.le4_1;
  }
  kdv(_set____db54di) {
    this.me4_1 = _set____db54di;
  }
  ldv() {
    return this.me4_1;
  }
  mdv(_set____db54di) {
    this.ne4_1 = _set____db54di;
  }
  ndv() {
    return this.ne4_1;
  }
  odv(_set____db54di) {
    this.oe4_1 = _set____db54di;
  }
  pdv() {
    return this.oe4_1;
  }
  qdv(_set____db54di) {
    this.pe4_1 = _set____db54di;
  }
  rdv() {
    return this.pe4_1;
  }
  sdv(_set____db54di) {
    this.qe4_1 = _set____db54di;
  }
  tdv() {
    return this.qe4_1;
  }
  gdp(_set____db54di) {
    this.re4_1 = _set____db54di;
  }
  hdp() {
    return this.re4_1;
  }
  udv(_set____db54di) {
    this.se4_1 = _set____db54di;
  }
  jc2() {
    return this.se4_1;
  }
  vdv(_set____db54di) {
    this.te4_1 = _set____db54di;
  }
  wdv() {
    return this.te4_1;
  }
  ndl(_set____db54di) {
    this.caption = _set____db54di;
  }
  odl() {
    return this.caption;
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
  we4(_set____db54di) {
    this.photos = _set____db54di;
  }
  xe4() {
    return this.photos;
  }
  static ue4(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, width, height, photos, serializationConstructorMarker) {
    Companion_getInstance_25();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_22().ee3_1);
    }
    var $this = this.odt();
    $this.ge3_1 = blogName;
    $this.he3_1 = idString;
    $this.ie3_1 = genesisPostId;
    $this.je3_1 = postUrl;
    $this.ke3_1 = parentPostUrl;
    $this.le3_1 = type;
    $this.me3_1 = timestamp;
    $this.ne3_1 = date;
    $this.oe3_1 = format;
    $this.pe3_1 = reblogKey;
    $this.qe3_1 = tags;
    $this.re3_1 = isBookmarklet;
    $this.se3_1 = isMobile;
    $this.te3_1 = sourceUrl;
    $this.ue3_1 = sourceTitle;
    $this.ve3_1 = isLiked;
    $this.we3_1 = state;
    $this.xe3_1 = title;
    $this.ye3_1 = body;
    $this.ze3_1 = noteCount;
    $this.ae4_1 = summary;
    $this.be4_1 = slug;
    $this.ce4_1 = rebloggedFromId;
    $this.de4_1 = rebloggedFromUrl;
    $this.ee4_1 = rebloggedFromName;
    $this.fe4_1 = rebloggedFromTitle;
    $this.ge4_1 = rebloggedFromUuid;
    $this.he4_1 = rebloggedFromCanMessage;
    $this.ie4_1 = rebloggedFromFollowing;
    $this.je4_1 = rebloggedRootId;
    $this.ke4_1 = rebloggedRootUrl;
    $this.le4_1 = rebloggedRootName;
    $this.me4_1 = rebloggedRootTitle;
    $this.ne4_1 = rebloggedRootUuid;
    $this.oe4_1 = rebloggedRootCanMessage;
    $this.pe4_1 = rebloggedRootFollowing;
    $this.qe4_1 = notes;
    $this.re4_1 = blog;
    $this.se4_1 = reblog;
    $this.te4_1 = trail;
    if (0 === (seen1 & 256))
      $this.caption = null;
    else
      $this.caption = caption;
    if (0 === (seen1 & 512))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen1 & 1024))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen1 & 2048))
      $this.photos = null;
    else
      $this.photos = photos;
    return $this;
  }
}
class Companion_25 {
  constructor() {
    Companion_instance_25 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ye4_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_1), null];
  }
  n1o() {
    return $serializer_getInstance_23();
  }
}
class $serializer_24 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPostcardPost', this, 41);
    tmp0_serialDesc.m1a('blog_name', false);
    tmp0_serialDesc.m1a('id_string', false);
    tmp0_serialDesc.m1a('genesis_post_id', false);
    tmp0_serialDesc.m1a('post_url', false);
    tmp0_serialDesc.m1a('parent_post_url', false);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('timestamp', false);
    tmp0_serialDesc.m1a('date', false);
    tmp0_serialDesc.m1a('format', false);
    tmp0_serialDesc.m1a('reblog_key', false);
    tmp0_serialDesc.m1a('tags', false);
    tmp0_serialDesc.m1a('bookmarklet', false);
    tmp0_serialDesc.m1a('mobile', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('source_title', false);
    tmp0_serialDesc.m1a('liked', false);
    tmp0_serialDesc.m1a('state', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('note_count', false);
    tmp0_serialDesc.m1a('summary', false);
    tmp0_serialDesc.m1a('slug', false);
    tmp0_serialDesc.m1a('reblogged_from_id', false);
    tmp0_serialDesc.m1a('reblogged_from_url', false);
    tmp0_serialDesc.m1a('reblogged_from_name', false);
    tmp0_serialDesc.m1a('reblogged_from_title', false);
    tmp0_serialDesc.m1a('reblogged_from_uuid', false);
    tmp0_serialDesc.m1a('reblogged_from_can_message', false);
    tmp0_serialDesc.m1a('reblogged_from_following', false);
    tmp0_serialDesc.m1a('reblogged_root_id', false);
    tmp0_serialDesc.m1a('reblogged_root_url', false);
    tmp0_serialDesc.m1a('reblogged_root_name', false);
    tmp0_serialDesc.m1a('reblogged_root_title', false);
    tmp0_serialDesc.m1a('reblogged_root_uuid', false);
    tmp0_serialDesc.m1a('reblogged_root_can_message', false);
    tmp0_serialDesc.m1a('reblogged_root_following', false);
    tmp0_serialDesc.m1a('notes', false);
    tmp0_serialDesc.m1a('blog', false);
    tmp0_serialDesc.m1a('reblog', false);
    tmp0_serialDesc.m1a('trail', false);
    tmp0_serialDesc.m1a('url', true);
    this.ze4_1 = tmp0_serialDesc;
  }
  ae5(encoder, value) {
    var tmp0_desc = this.ze4_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().ye4_1;
    tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.be5_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.ce5_1);
    tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.de5_1);
    tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.ee5_1);
    tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.fe5_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.ge5_1);
    tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.he5_1);
    tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.ie5_1);
    tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.je5_1);
    tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.ke5_1);
    tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.le5_1);
    tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.me5_1);
    tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ne5_1);
    tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.oe5_1);
    tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.pe5_1);
    tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.qe5_1);
    tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.re5_1);
    tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.se5_1);
    tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.te5_1);
    tmp1_output.m14(tmp0_desc, 19, IntSerializer_getInstance(), value.ue5_1);
    tmp1_output.m14(tmp0_desc, 20, StringSerializer_getInstance(), value.ve5_1);
    tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.we5_1);
    tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.xe5_1);
    tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.ye5_1);
    tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.ze5_1);
    tmp1_output.m14(tmp0_desc, 25, StringSerializer_getInstance(), value.ae6_1);
    tmp1_output.m14(tmp0_desc, 26, StringSerializer_getInstance(), value.be6_1);
    tmp1_output.m14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ce6_1);
    tmp1_output.m14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.de6_1);
    tmp1_output.m14(tmp0_desc, 29, StringSerializer_getInstance(), value.ee6_1);
    tmp1_output.m14(tmp0_desc, 30, StringSerializer_getInstance(), value.fe6_1);
    tmp1_output.m14(tmp0_desc, 31, StringSerializer_getInstance(), value.ge6_1);
    tmp1_output.m14(tmp0_desc, 32, StringSerializer_getInstance(), value.he6_1);
    tmp1_output.m14(tmp0_desc, 33, StringSerializer_getInstance(), value.ie6_1);
    tmp1_output.m14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.je6_1);
    tmp1_output.m14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ke6_1);
    tmp1_output.m14(tmp0_desc, 36, tmp2_cached[36].y2(), value.le6_1);
    tmp1_output.m14(tmp0_desc, 37, $serializer_getInstance_14(), value.me6_1);
    tmp1_output.m14(tmp0_desc, 38, $serializer_getInstance_17(), value.ne6_1);
    tmp1_output.m14(tmp0_desc, 39, tmp2_cached[39].y2(), value.oe6_1);
    if (tmp1_output.q14(tmp0_desc, 40) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 40, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ae5(encoder, value instanceof LegacyPostcardPost ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ze4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_input = decoder.u12(tmp0_desc);
    var tmp47_cached = Companion_getInstance_26().ye4_1;
    if (tmp46_input.j13()) {
      tmp5_local0 = tmp46_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.i13(tmp0_desc, 10, tmp47_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.i13(tmp0_desc, 36, tmp47_cached[36].y2(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.i13(tmp0_desc, 39, tmp47_cached[39].y2(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.i13(tmp0_desc, 10, tmp47_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.i13(tmp0_desc, 36, tmp47_cached[36].y2(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.i13(tmp0_desc, 39, tmp47_cached[39].y2(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp46_input.v12(tmp0_desc);
    return LegacyPostcardPost.pe6(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  cy() {
    return this.ze4_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_26().ye4_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].y2()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].y2()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyPostcardPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.qe6(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static qe6(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_26();
    var $this = this.odt();
    $this.be5_1 = blogName;
    $this.ce5_1 = idString;
    $this.de5_1 = genesisPostId;
    $this.ee5_1 = postUrl;
    $this.fe5_1 = parentPostUrl;
    $this.ge5_1 = type;
    $this.he5_1 = timestamp;
    $this.ie5_1 = date;
    $this.je5_1 = format;
    $this.ke5_1 = reblogKey;
    $this.le5_1 = tags;
    $this.me5_1 = isBookmarklet;
    $this.ne5_1 = isMobile;
    $this.oe5_1 = sourceUrl;
    $this.pe5_1 = sourceTitle;
    $this.qe5_1 = isLiked;
    $this.re5_1 = state;
    $this.se5_1 = title;
    $this.te5_1 = body;
    $this.ue5_1 = noteCount;
    $this.ve5_1 = summary;
    $this.we5_1 = slug;
    $this.xe5_1 = rebloggedFromId;
    $this.ye5_1 = rebloggedFromUrl;
    $this.ze5_1 = rebloggedFromName;
    $this.ae6_1 = rebloggedFromTitle;
    $this.be6_1 = rebloggedFromUuid;
    $this.ce6_1 = rebloggedFromCanMessage;
    $this.de6_1 = rebloggedFromFollowing;
    $this.ee6_1 = rebloggedRootId;
    $this.fe6_1 = rebloggedRootUrl;
    $this.ge6_1 = rebloggedRootName;
    $this.he6_1 = rebloggedRootTitle;
    $this.ie6_1 = rebloggedRootUuid;
    $this.je6_1 = rebloggedRootCanMessage;
    $this.ke6_1 = rebloggedRootFollowing;
    $this.le6_1 = notes;
    $this.me6_1 = blog;
    $this.ne6_1 = reblog;
    $this.oe6_1 = trail;
    $this.url = null;
    return $this;
  }
  pdk(_set____db54di) {
    this.be5_1 = _set____db54di;
  }
  qdk() {
    return this.be5_1;
  }
  ydt(_set____db54di) {
    this.ce5_1 = _set____db54di;
  }
  zdt() {
    return this.ce5_1;
  }
  adu(_set____db54di) {
    this.de5_1 = _set____db54di;
  }
  bdu() {
    return this.de5_1;
  }
  cdu(_set____db54di) {
    this.ee5_1 = _set____db54di;
  }
  ddu() {
    return this.ee5_1;
  }
  edu(_set____db54di) {
    this.fe5_1 = _set____db54di;
  }
  fdu() {
    return this.fe5_1;
  }
  e33(_set____db54di) {
    this.ge5_1 = _set____db54di;
  }
  x32() {
    return this.ge5_1;
  }
  gdu(_set____db54di) {
    this.he5_1 = _set____db54di;
  }
  ydq() {
    return this.he5_1;
  }
  wdl(_set____db54di) {
    this.ie5_1 = _set____db54di;
  }
  xdl() {
    return this.ie5_1;
  }
  ydl(_set____db54di) {
    this.je5_1 = _set____db54di;
  }
  zdl() {
    return this.je5_1;
  }
  pdn(_set____db54di) {
    this.ke5_1 = _set____db54di;
  }
  qdn() {
    return this.ke5_1;
  }
  la7(_set____db54di) {
    this.le5_1 = _set____db54di;
  }
  ga2() {
    return this.le5_1;
  }
  hdu(_set____db54di) {
    this.me5_1 = _set____db54di;
  }
  idu() {
    return this.me5_1;
  }
  jdu(_set____db54di) {
    this.ne5_1 = _set____db54di;
  }
  kdu() {
    return this.ne5_1;
  }
  y32(_set____db54di) {
    this.oe5_1 = _set____db54di;
  }
  z32() {
    return this.oe5_1;
  }
  ldu(_set____db54di) {
    this.pe5_1 = _set____db54di;
  }
  mdu() {
    return this.pe5_1;
  }
  ndu(_set____db54di) {
    this.qe5_1 = _set____db54di;
  }
  caa() {
    return this.qe5_1;
  }
  y9t(_set____db54di) {
    this.re5_1 = _set____db54di;
  }
  g7x() {
    return this.re5_1;
  }
  ca2(_set____db54di) {
    this.se5_1 = _set____db54di;
  }
  m3b() {
    return this.se5_1;
  }
  ta8(_set____db54di) {
    this.te5_1 = _set____db54di;
  }
  ua8() {
    return this.te5_1;
  }
  odu(_set____db54di) {
    this.ue5_1 = _set____db54di;
  }
  pdu() {
    return this.ue5_1;
  }
  oa9(_set____db54di) {
    this.ve5_1 = _set____db54di;
  }
  pa9() {
    return this.ve5_1;
  }
  adm(_set____db54di) {
    this.we5_1 = _set____db54di;
  }
  bdm() {
    return this.we5_1;
  }
  qdu(_set____db54di) {
    this.xe5_1 = _set____db54di;
  }
  rdu() {
    return this.xe5_1;
  }
  sdu(_set____db54di) {
    this.ye5_1 = _set____db54di;
  }
  tdu() {
    return this.ye5_1;
  }
  udu(_set____db54di) {
    this.ze5_1 = _set____db54di;
  }
  vdu() {
    return this.ze5_1;
  }
  wdu(_set____db54di) {
    this.ae6_1 = _set____db54di;
  }
  xdu() {
    return this.ae6_1;
  }
  ydu(_set____db54di) {
    this.be6_1 = _set____db54di;
  }
  zdu() {
    return this.be6_1;
  }
  adv(_set____db54di) {
    this.ce6_1 = _set____db54di;
  }
  bdv() {
    return this.ce6_1;
  }
  cdv(_set____db54di) {
    this.de6_1 = _set____db54di;
  }
  ddv() {
    return this.de6_1;
  }
  edv(_set____db54di) {
    this.ee6_1 = _set____db54di;
  }
  fdv() {
    return this.ee6_1;
  }
  gdv(_set____db54di) {
    this.fe6_1 = _set____db54di;
  }
  hdv() {
    return this.fe6_1;
  }
  idv(_set____db54di) {
    this.ge6_1 = _set____db54di;
  }
  jdv() {
    return this.ge6_1;
  }
  kdv(_set____db54di) {
    this.he6_1 = _set____db54di;
  }
  ldv() {
    return this.he6_1;
  }
  mdv(_set____db54di) {
    this.ie6_1 = _set____db54di;
  }
  ndv() {
    return this.ie6_1;
  }
  odv(_set____db54di) {
    this.je6_1 = _set____db54di;
  }
  pdv() {
    return this.je6_1;
  }
  qdv(_set____db54di) {
    this.ke6_1 = _set____db54di;
  }
  rdv() {
    return this.ke6_1;
  }
  sdv(_set____db54di) {
    this.le6_1 = _set____db54di;
  }
  tdv() {
    return this.le6_1;
  }
  gdp(_set____db54di) {
    this.me6_1 = _set____db54di;
  }
  hdp() {
    return this.me6_1;
  }
  udv(_set____db54di) {
    this.ne6_1 = _set____db54di;
  }
  jc2() {
    return this.ne6_1;
  }
  vdv(_set____db54di) {
    this.oe6_1 = _set____db54di;
  }
  wdv() {
    return this.oe6_1;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  static pe6(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, url, serializationConstructorMarker) {
    Companion_getInstance_26();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_23().ze4_1);
    }
    var $this = this.odt();
    $this.be5_1 = blogName;
    $this.ce5_1 = idString;
    $this.de5_1 = genesisPostId;
    $this.ee5_1 = postUrl;
    $this.fe5_1 = parentPostUrl;
    $this.ge5_1 = type;
    $this.he5_1 = timestamp;
    $this.ie5_1 = date;
    $this.je5_1 = format;
    $this.ke5_1 = reblogKey;
    $this.le5_1 = tags;
    $this.me5_1 = isBookmarklet;
    $this.ne5_1 = isMobile;
    $this.oe5_1 = sourceUrl;
    $this.pe5_1 = sourceTitle;
    $this.qe5_1 = isLiked;
    $this.re5_1 = state;
    $this.se5_1 = title;
    $this.te5_1 = body;
    $this.ue5_1 = noteCount;
    $this.ve5_1 = summary;
    $this.we5_1 = slug;
    $this.xe5_1 = rebloggedFromId;
    $this.ye5_1 = rebloggedFromUrl;
    $this.ze5_1 = rebloggedFromName;
    $this.ae6_1 = rebloggedFromTitle;
    $this.be6_1 = rebloggedFromUuid;
    $this.ce6_1 = rebloggedFromCanMessage;
    $this.de6_1 = rebloggedFromFollowing;
    $this.ee6_1 = rebloggedRootId;
    $this.fe6_1 = rebloggedRootUrl;
    $this.ge6_1 = rebloggedRootName;
    $this.he6_1 = rebloggedRootTitle;
    $this.ie6_1 = rebloggedRootUuid;
    $this.je6_1 = rebloggedRootCanMessage;
    $this.ke6_1 = rebloggedRootFollowing;
    $this.le6_1 = notes;
    $this.me6_1 = blog;
    $this.ne6_1 = reblog;
    $this.oe6_1 = trail;
    if (0 === (seen1 & 256))
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
}
class Companion_26 {
  constructor() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.re6_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1), null, null];
  }
  n1o() {
    return $serializer_getInstance_24();
  }
}
class $serializer_25 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyQuotePost', this, 42);
    tmp0_serialDesc.m1a('blog_name', false);
    tmp0_serialDesc.m1a('id_string', false);
    tmp0_serialDesc.m1a('genesis_post_id', false);
    tmp0_serialDesc.m1a('post_url', false);
    tmp0_serialDesc.m1a('parent_post_url', false);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('timestamp', false);
    tmp0_serialDesc.m1a('date', false);
    tmp0_serialDesc.m1a('format', false);
    tmp0_serialDesc.m1a('reblog_key', false);
    tmp0_serialDesc.m1a('tags', false);
    tmp0_serialDesc.m1a('bookmarklet', false);
    tmp0_serialDesc.m1a('mobile', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('source_title', false);
    tmp0_serialDesc.m1a('liked', false);
    tmp0_serialDesc.m1a('state', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('note_count', false);
    tmp0_serialDesc.m1a('summary', false);
    tmp0_serialDesc.m1a('slug', false);
    tmp0_serialDesc.m1a('reblogged_from_id', false);
    tmp0_serialDesc.m1a('reblogged_from_url', false);
    tmp0_serialDesc.m1a('reblogged_from_name', false);
    tmp0_serialDesc.m1a('reblogged_from_title', false);
    tmp0_serialDesc.m1a('reblogged_from_uuid', false);
    tmp0_serialDesc.m1a('reblogged_from_can_message', false);
    tmp0_serialDesc.m1a('reblogged_from_following', false);
    tmp0_serialDesc.m1a('reblogged_root_id', false);
    tmp0_serialDesc.m1a('reblogged_root_url', false);
    tmp0_serialDesc.m1a('reblogged_root_name', false);
    tmp0_serialDesc.m1a('reblogged_root_title', false);
    tmp0_serialDesc.m1a('reblogged_root_uuid', false);
    tmp0_serialDesc.m1a('reblogged_root_can_message', false);
    tmp0_serialDesc.m1a('reblogged_root_following', false);
    tmp0_serialDesc.m1a('notes', false);
    tmp0_serialDesc.m1a('blog', false);
    tmp0_serialDesc.m1a('reblog', false);
    tmp0_serialDesc.m1a('trail', false);
    tmp0_serialDesc.m1a('text', true);
    tmp0_serialDesc.m1a('source', true);
    this.se6_1 = tmp0_serialDesc;
  }
  te6(encoder, value) {
    var tmp0_desc = this.se6_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().re6_1;
    tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.ue6_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.ve6_1);
    tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.we6_1);
    tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.xe6_1);
    tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.ye6_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.ze6_1);
    tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.ae7_1);
    tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.be7_1);
    tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.ce7_1);
    tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.de7_1);
    tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.ee7_1);
    tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.fe7_1);
    tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ge7_1);
    tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.he7_1);
    tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.ie7_1);
    tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.je7_1);
    tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.ke7_1);
    tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.le7_1);
    tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.me7_1);
    tmp1_output.m14(tmp0_desc, 19, IntSerializer_getInstance(), value.ne7_1);
    tmp1_output.m14(tmp0_desc, 20, StringSerializer_getInstance(), value.oe7_1);
    tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.pe7_1);
    tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.qe7_1);
    tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.re7_1);
    tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.se7_1);
    tmp1_output.m14(tmp0_desc, 25, StringSerializer_getInstance(), value.te7_1);
    tmp1_output.m14(tmp0_desc, 26, StringSerializer_getInstance(), value.ue7_1);
    tmp1_output.m14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ve7_1);
    tmp1_output.m14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.we7_1);
    tmp1_output.m14(tmp0_desc, 29, StringSerializer_getInstance(), value.xe7_1);
    tmp1_output.m14(tmp0_desc, 30, StringSerializer_getInstance(), value.ye7_1);
    tmp1_output.m14(tmp0_desc, 31, StringSerializer_getInstance(), value.ze7_1);
    tmp1_output.m14(tmp0_desc, 32, StringSerializer_getInstance(), value.ae8_1);
    tmp1_output.m14(tmp0_desc, 33, StringSerializer_getInstance(), value.be8_1);
    tmp1_output.m14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.ce8_1);
    tmp1_output.m14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.de8_1);
    tmp1_output.m14(tmp0_desc, 36, tmp2_cached[36].y2(), value.ee8_1);
    tmp1_output.m14(tmp0_desc, 37, $serializer_getInstance_14(), value.fe8_1);
    tmp1_output.m14(tmp0_desc, 38, $serializer_getInstance_17(), value.ge8_1);
    tmp1_output.m14(tmp0_desc, 39, tmp2_cached[39].y2(), value.he8_1);
    if (tmp1_output.q14(tmp0_desc, 40) ? true : !(value.text == null)) {
      tmp1_output.m14(tmp0_desc, 40, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.q14(tmp0_desc, 41) ? true : !(value.source == null)) {
      tmp1_output.m14(tmp0_desc, 41, StringSerializer_getInstance(), value.source);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.te6(encoder, value instanceof LegacyQuotePost ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.se6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_input = decoder.u12(tmp0_desc);
    var tmp48_cached = Companion_getInstance_27().re6_1;
    if (tmp47_input.j13()) {
      tmp5_local0 = tmp47_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.i13(tmp0_desc, 10, tmp48_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.i13(tmp0_desc, 36, tmp48_cached[36].y2(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.i13(tmp0_desc, 39, tmp48_cached[39].y2(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.i13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.i13(tmp0_desc, 10, tmp48_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.i13(tmp0_desc, 36, tmp48_cached[36].y2(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.i13(tmp0_desc, 39, tmp48_cached[39].y2(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.i13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp47_input.v12(tmp0_desc);
    return LegacyQuotePost.ie8(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  cy() {
    return this.se6_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_27().re6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].y2()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].y2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyQuotePost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.je8(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static je8(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_27();
    var $this = this.odt();
    $this.ue6_1 = blogName;
    $this.ve6_1 = idString;
    $this.we6_1 = genesisPostId;
    $this.xe6_1 = postUrl;
    $this.ye6_1 = parentPostUrl;
    $this.ze6_1 = type;
    $this.ae7_1 = timestamp;
    $this.be7_1 = date;
    $this.ce7_1 = format;
    $this.de7_1 = reblogKey;
    $this.ee7_1 = tags;
    $this.fe7_1 = isBookmarklet;
    $this.ge7_1 = isMobile;
    $this.he7_1 = sourceUrl;
    $this.ie7_1 = sourceTitle;
    $this.je7_1 = isLiked;
    $this.ke7_1 = state;
    $this.le7_1 = title;
    $this.me7_1 = body;
    $this.ne7_1 = noteCount;
    $this.oe7_1 = summary;
    $this.pe7_1 = slug;
    $this.qe7_1 = rebloggedFromId;
    $this.re7_1 = rebloggedFromUrl;
    $this.se7_1 = rebloggedFromName;
    $this.te7_1 = rebloggedFromTitle;
    $this.ue7_1 = rebloggedFromUuid;
    $this.ve7_1 = rebloggedFromCanMessage;
    $this.we7_1 = rebloggedFromFollowing;
    $this.xe7_1 = rebloggedRootId;
    $this.ye7_1 = rebloggedRootUrl;
    $this.ze7_1 = rebloggedRootName;
    $this.ae8_1 = rebloggedRootTitle;
    $this.be8_1 = rebloggedRootUuid;
    $this.ce8_1 = rebloggedRootCanMessage;
    $this.de8_1 = rebloggedRootFollowing;
    $this.ee8_1 = notes;
    $this.fe8_1 = blog;
    $this.ge8_1 = reblog;
    $this.he8_1 = trail;
    $this.text = null;
    $this.source = null;
    return $this;
  }
  pdk(_set____db54di) {
    this.ue6_1 = _set____db54di;
  }
  qdk() {
    return this.ue6_1;
  }
  ydt(_set____db54di) {
    this.ve6_1 = _set____db54di;
  }
  zdt() {
    return this.ve6_1;
  }
  adu(_set____db54di) {
    this.we6_1 = _set____db54di;
  }
  bdu() {
    return this.we6_1;
  }
  cdu(_set____db54di) {
    this.xe6_1 = _set____db54di;
  }
  ddu() {
    return this.xe6_1;
  }
  edu(_set____db54di) {
    this.ye6_1 = _set____db54di;
  }
  fdu() {
    return this.ye6_1;
  }
  e33(_set____db54di) {
    this.ze6_1 = _set____db54di;
  }
  x32() {
    return this.ze6_1;
  }
  gdu(_set____db54di) {
    this.ae7_1 = _set____db54di;
  }
  ydq() {
    return this.ae7_1;
  }
  wdl(_set____db54di) {
    this.be7_1 = _set____db54di;
  }
  xdl() {
    return this.be7_1;
  }
  ydl(_set____db54di) {
    this.ce7_1 = _set____db54di;
  }
  zdl() {
    return this.ce7_1;
  }
  pdn(_set____db54di) {
    this.de7_1 = _set____db54di;
  }
  qdn() {
    return this.de7_1;
  }
  la7(_set____db54di) {
    this.ee7_1 = _set____db54di;
  }
  ga2() {
    return this.ee7_1;
  }
  hdu(_set____db54di) {
    this.fe7_1 = _set____db54di;
  }
  idu() {
    return this.fe7_1;
  }
  jdu(_set____db54di) {
    this.ge7_1 = _set____db54di;
  }
  kdu() {
    return this.ge7_1;
  }
  y32(_set____db54di) {
    this.he7_1 = _set____db54di;
  }
  z32() {
    return this.he7_1;
  }
  ldu(_set____db54di) {
    this.ie7_1 = _set____db54di;
  }
  mdu() {
    return this.ie7_1;
  }
  ndu(_set____db54di) {
    this.je7_1 = _set____db54di;
  }
  caa() {
    return this.je7_1;
  }
  y9t(_set____db54di) {
    this.ke7_1 = _set____db54di;
  }
  g7x() {
    return this.ke7_1;
  }
  ca2(_set____db54di) {
    this.le7_1 = _set____db54di;
  }
  m3b() {
    return this.le7_1;
  }
  ta8(_set____db54di) {
    this.me7_1 = _set____db54di;
  }
  ua8() {
    return this.me7_1;
  }
  odu(_set____db54di) {
    this.ne7_1 = _set____db54di;
  }
  pdu() {
    return this.ne7_1;
  }
  oa9(_set____db54di) {
    this.oe7_1 = _set____db54di;
  }
  pa9() {
    return this.oe7_1;
  }
  adm(_set____db54di) {
    this.pe7_1 = _set____db54di;
  }
  bdm() {
    return this.pe7_1;
  }
  qdu(_set____db54di) {
    this.qe7_1 = _set____db54di;
  }
  rdu() {
    return this.qe7_1;
  }
  sdu(_set____db54di) {
    this.re7_1 = _set____db54di;
  }
  tdu() {
    return this.re7_1;
  }
  udu(_set____db54di) {
    this.se7_1 = _set____db54di;
  }
  vdu() {
    return this.se7_1;
  }
  wdu(_set____db54di) {
    this.te7_1 = _set____db54di;
  }
  xdu() {
    return this.te7_1;
  }
  ydu(_set____db54di) {
    this.ue7_1 = _set____db54di;
  }
  zdu() {
    return this.ue7_1;
  }
  adv(_set____db54di) {
    this.ve7_1 = _set____db54di;
  }
  bdv() {
    return this.ve7_1;
  }
  cdv(_set____db54di) {
    this.we7_1 = _set____db54di;
  }
  ddv() {
    return this.we7_1;
  }
  edv(_set____db54di) {
    this.xe7_1 = _set____db54di;
  }
  fdv() {
    return this.xe7_1;
  }
  gdv(_set____db54di) {
    this.ye7_1 = _set____db54di;
  }
  hdv() {
    return this.ye7_1;
  }
  idv(_set____db54di) {
    this.ze7_1 = _set____db54di;
  }
  jdv() {
    return this.ze7_1;
  }
  kdv(_set____db54di) {
    this.ae8_1 = _set____db54di;
  }
  ldv() {
    return this.ae8_1;
  }
  mdv(_set____db54di) {
    this.be8_1 = _set____db54di;
  }
  ndv() {
    return this.be8_1;
  }
  odv(_set____db54di) {
    this.ce8_1 = _set____db54di;
  }
  pdv() {
    return this.ce8_1;
  }
  qdv(_set____db54di) {
    this.de8_1 = _set____db54di;
  }
  rdv() {
    return this.de8_1;
  }
  sdv(_set____db54di) {
    this.ee8_1 = _set____db54di;
  }
  tdv() {
    return this.ee8_1;
  }
  gdp(_set____db54di) {
    this.fe8_1 = _set____db54di;
  }
  hdp() {
    return this.fe8_1;
  }
  udv(_set____db54di) {
    this.ge8_1 = _set____db54di;
  }
  jc2() {
    return this.ge8_1;
  }
  vdv(_set____db54di) {
    this.he8_1 = _set____db54di;
  }
  wdv() {
    return this.he8_1;
  }
  t39(_set____db54di) {
    this.text = _set____db54di;
  }
  h2z() {
    return this.text;
  }
  jdm(_set____db54di) {
    this.source = _set____db54di;
  }
  g1z() {
    return this.source;
  }
  static ie8(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, text, source, serializationConstructorMarker) {
    Companion_getInstance_27();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_24().se6_1);
    }
    var $this = this.odt();
    $this.ue6_1 = blogName;
    $this.ve6_1 = idString;
    $this.we6_1 = genesisPostId;
    $this.xe6_1 = postUrl;
    $this.ye6_1 = parentPostUrl;
    $this.ze6_1 = type;
    $this.ae7_1 = timestamp;
    $this.be7_1 = date;
    $this.ce7_1 = format;
    $this.de7_1 = reblogKey;
    $this.ee7_1 = tags;
    $this.fe7_1 = isBookmarklet;
    $this.ge7_1 = isMobile;
    $this.he7_1 = sourceUrl;
    $this.ie7_1 = sourceTitle;
    $this.je7_1 = isLiked;
    $this.ke7_1 = state;
    $this.le7_1 = title;
    $this.me7_1 = body;
    $this.ne7_1 = noteCount;
    $this.oe7_1 = summary;
    $this.pe7_1 = slug;
    $this.qe7_1 = rebloggedFromId;
    $this.re7_1 = rebloggedFromUrl;
    $this.se7_1 = rebloggedFromName;
    $this.te7_1 = rebloggedFromTitle;
    $this.ue7_1 = rebloggedFromUuid;
    $this.ve7_1 = rebloggedFromCanMessage;
    $this.we7_1 = rebloggedFromFollowing;
    $this.xe7_1 = rebloggedRootId;
    $this.ye7_1 = rebloggedRootUrl;
    $this.ze7_1 = rebloggedRootName;
    $this.ae8_1 = rebloggedRootTitle;
    $this.be8_1 = rebloggedRootUuid;
    $this.ce8_1 = rebloggedRootCanMessage;
    $this.de8_1 = rebloggedRootFollowing;
    $this.ee8_1 = notes;
    $this.fe8_1 = blog;
    $this.ge8_1 = reblog;
    $this.he8_1 = trail;
    if (0 === (seen1 & 256))
      $this.text = null;
    else
      $this.text = text;
    if (0 === (seen1 & 512))
      $this.source = null;
    else
      $this.source = source;
    return $this;
  }
}
class Companion_27 {
  constructor() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ke8_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1)];
  }
  n1o() {
    return $serializer_getInstance_25();
  }
}
class $serializer_26 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyTextPost', this, 40);
    tmp0_serialDesc.m1a('blog_name', false);
    tmp0_serialDesc.m1a('id_string', false);
    tmp0_serialDesc.m1a('genesis_post_id', false);
    tmp0_serialDesc.m1a('post_url', false);
    tmp0_serialDesc.m1a('parent_post_url', false);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('timestamp', false);
    tmp0_serialDesc.m1a('date', false);
    tmp0_serialDesc.m1a('format', false);
    tmp0_serialDesc.m1a('reblog_key', false);
    tmp0_serialDesc.m1a('tags', false);
    tmp0_serialDesc.m1a('bookmarklet', false);
    tmp0_serialDesc.m1a('mobile', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('source_title', false);
    tmp0_serialDesc.m1a('liked', false);
    tmp0_serialDesc.m1a('state', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('note_count', false);
    tmp0_serialDesc.m1a('summary', false);
    tmp0_serialDesc.m1a('slug', false);
    tmp0_serialDesc.m1a('reblogged_from_id', false);
    tmp0_serialDesc.m1a('reblogged_from_url', false);
    tmp0_serialDesc.m1a('reblogged_from_name', false);
    tmp0_serialDesc.m1a('reblogged_from_title', false);
    tmp0_serialDesc.m1a('reblogged_from_uuid', false);
    tmp0_serialDesc.m1a('reblogged_from_can_message', false);
    tmp0_serialDesc.m1a('reblogged_from_following', false);
    tmp0_serialDesc.m1a('reblogged_root_id', false);
    tmp0_serialDesc.m1a('reblogged_root_url', false);
    tmp0_serialDesc.m1a('reblogged_root_name', false);
    tmp0_serialDesc.m1a('reblogged_root_title', false);
    tmp0_serialDesc.m1a('reblogged_root_uuid', false);
    tmp0_serialDesc.m1a('reblogged_root_can_message', false);
    tmp0_serialDesc.m1a('reblogged_root_following', false);
    tmp0_serialDesc.m1a('notes', false);
    tmp0_serialDesc.m1a('blog', false);
    tmp0_serialDesc.m1a('reblog', false);
    tmp0_serialDesc.m1a('trail', false);
    this.le8_1 = tmp0_serialDesc;
  }
  me8(encoder, value) {
    var tmp0_desc = this.le8_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().ke8_1;
    tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.ne8_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.oe8_1);
    tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.pe8_1);
    tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.qe8_1);
    tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.re8_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.se8_1);
    tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.te8_1);
    tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.ue8_1);
    tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.ve8_1);
    tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.we8_1);
    tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.xe8_1);
    tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.ye8_1);
    tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ze8_1);
    tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.ae9_1);
    tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.be9_1);
    tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ce9_1);
    tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.de9_1);
    tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.ee9_1);
    tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.fe9_1);
    tmp1_output.m14(tmp0_desc, 19, IntSerializer_getInstance(), value.ge9_1);
    tmp1_output.m14(tmp0_desc, 20, StringSerializer_getInstance(), value.he9_1);
    tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.ie9_1);
    tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.je9_1);
    tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.ke9_1);
    tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.le9_1);
    tmp1_output.m14(tmp0_desc, 25, StringSerializer_getInstance(), value.me9_1);
    tmp1_output.m14(tmp0_desc, 26, StringSerializer_getInstance(), value.ne9_1);
    tmp1_output.m14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.oe9_1);
    tmp1_output.m14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.pe9_1);
    tmp1_output.m14(tmp0_desc, 29, StringSerializer_getInstance(), value.qe9_1);
    tmp1_output.m14(tmp0_desc, 30, StringSerializer_getInstance(), value.re9_1);
    tmp1_output.m14(tmp0_desc, 31, StringSerializer_getInstance(), value.se9_1);
    tmp1_output.m14(tmp0_desc, 32, StringSerializer_getInstance(), value.te9_1);
    tmp1_output.m14(tmp0_desc, 33, StringSerializer_getInstance(), value.ue9_1);
    tmp1_output.m14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.ve9_1);
    tmp1_output.m14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.we9_1);
    tmp1_output.m14(tmp0_desc, 36, tmp2_cached[36].y2(), value.xe9_1);
    tmp1_output.m14(tmp0_desc, 37, $serializer_getInstance_14(), value.ye9_1);
    tmp1_output.m14(tmp0_desc, 38, $serializer_getInstance_17(), value.ze9_1);
    tmp1_output.m14(tmp0_desc, 39, tmp2_cached[39].y2(), value.aea_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.me8(encoder, value instanceof LegacyTextPost ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.le8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_input = decoder.u12(tmp0_desc);
    var tmp46_cached = Companion_getInstance_28().ke8_1;
    if (tmp45_input.j13()) {
      tmp5_local0 = tmp45_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp45_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp45_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp45_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp45_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp45_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp45_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp45_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp45_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp45_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp45_input.i13(tmp0_desc, 10, tmp46_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp45_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp45_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp45_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp45_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp45_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp45_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp45_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp45_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp45_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp45_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp45_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp45_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp45_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp45_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp45_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp45_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp45_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp45_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp45_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp45_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp45_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp45_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp45_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp45_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp45_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp45_input.i13(tmp0_desc, 36, tmp46_cached[36].y2(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp45_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp45_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp45_input.i13(tmp0_desc, 39, tmp46_cached[39].y2(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp45_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp45_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp45_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp45_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp45_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp45_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp45_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp45_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp45_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp45_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp45_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp45_input.i13(tmp0_desc, 10, tmp46_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp45_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp45_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp45_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp45_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp45_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp45_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp45_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp45_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp45_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp45_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp45_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp45_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp45_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp45_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp45_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp45_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp45_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp45_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp45_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp45_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp45_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp45_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp45_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp45_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp45_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp45_input.i13(tmp0_desc, 36, tmp46_cached[36].y2(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp45_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp45_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp45_input.i13(tmp0_desc, 39, tmp46_cached[39].y2(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp45_input.v12(tmp0_desc);
    return LegacyTextPost.bea(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, null);
  }
  cy() {
    return this.le8_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_28().ke8_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].y2()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].y2())];
  }
}
class LegacyTextPost extends Post {
  static cea(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_28();
    var $this = this.odt();
    $this.ne8_1 = blogName;
    $this.oe8_1 = idString;
    $this.pe8_1 = genesisPostId;
    $this.qe8_1 = postUrl;
    $this.re8_1 = parentPostUrl;
    $this.se8_1 = type;
    $this.te8_1 = timestamp;
    $this.ue8_1 = date;
    $this.ve8_1 = format;
    $this.we8_1 = reblogKey;
    $this.xe8_1 = tags;
    $this.ye8_1 = isBookmarklet;
    $this.ze8_1 = isMobile;
    $this.ae9_1 = sourceUrl;
    $this.be9_1 = sourceTitle;
    $this.ce9_1 = isLiked;
    $this.de9_1 = state;
    $this.ee9_1 = title;
    $this.fe9_1 = body;
    $this.ge9_1 = noteCount;
    $this.he9_1 = summary;
    $this.ie9_1 = slug;
    $this.je9_1 = rebloggedFromId;
    $this.ke9_1 = rebloggedFromUrl;
    $this.le9_1 = rebloggedFromName;
    $this.me9_1 = rebloggedFromTitle;
    $this.ne9_1 = rebloggedFromUuid;
    $this.oe9_1 = rebloggedFromCanMessage;
    $this.pe9_1 = rebloggedFromFollowing;
    $this.qe9_1 = rebloggedRootId;
    $this.re9_1 = rebloggedRootUrl;
    $this.se9_1 = rebloggedRootName;
    $this.te9_1 = rebloggedRootTitle;
    $this.ue9_1 = rebloggedRootUuid;
    $this.ve9_1 = rebloggedRootCanMessage;
    $this.we9_1 = rebloggedRootFollowing;
    $this.xe9_1 = notes;
    $this.ye9_1 = blog;
    $this.ze9_1 = reblog;
    $this.aea_1 = trail;
    return $this;
  }
  pdk(_set____db54di) {
    this.ne8_1 = _set____db54di;
  }
  qdk() {
    return this.ne8_1;
  }
  ydt(_set____db54di) {
    this.oe8_1 = _set____db54di;
  }
  zdt() {
    return this.oe8_1;
  }
  adu(_set____db54di) {
    this.pe8_1 = _set____db54di;
  }
  bdu() {
    return this.pe8_1;
  }
  cdu(_set____db54di) {
    this.qe8_1 = _set____db54di;
  }
  ddu() {
    return this.qe8_1;
  }
  edu(_set____db54di) {
    this.re8_1 = _set____db54di;
  }
  fdu() {
    return this.re8_1;
  }
  e33(_set____db54di) {
    this.se8_1 = _set____db54di;
  }
  x32() {
    return this.se8_1;
  }
  gdu(_set____db54di) {
    this.te8_1 = _set____db54di;
  }
  ydq() {
    return this.te8_1;
  }
  wdl(_set____db54di) {
    this.ue8_1 = _set____db54di;
  }
  xdl() {
    return this.ue8_1;
  }
  ydl(_set____db54di) {
    this.ve8_1 = _set____db54di;
  }
  zdl() {
    return this.ve8_1;
  }
  pdn(_set____db54di) {
    this.we8_1 = _set____db54di;
  }
  qdn() {
    return this.we8_1;
  }
  la7(_set____db54di) {
    this.xe8_1 = _set____db54di;
  }
  ga2() {
    return this.xe8_1;
  }
  hdu(_set____db54di) {
    this.ye8_1 = _set____db54di;
  }
  idu() {
    return this.ye8_1;
  }
  jdu(_set____db54di) {
    this.ze8_1 = _set____db54di;
  }
  kdu() {
    return this.ze8_1;
  }
  y32(_set____db54di) {
    this.ae9_1 = _set____db54di;
  }
  z32() {
    return this.ae9_1;
  }
  ldu(_set____db54di) {
    this.be9_1 = _set____db54di;
  }
  mdu() {
    return this.be9_1;
  }
  ndu(_set____db54di) {
    this.ce9_1 = _set____db54di;
  }
  caa() {
    return this.ce9_1;
  }
  y9t(_set____db54di) {
    this.de9_1 = _set____db54di;
  }
  g7x() {
    return this.de9_1;
  }
  ca2(_set____db54di) {
    this.ee9_1 = _set____db54di;
  }
  m3b() {
    return this.ee9_1;
  }
  ta8(_set____db54di) {
    this.fe9_1 = _set____db54di;
  }
  ua8() {
    return this.fe9_1;
  }
  odu(_set____db54di) {
    this.ge9_1 = _set____db54di;
  }
  pdu() {
    return this.ge9_1;
  }
  oa9(_set____db54di) {
    this.he9_1 = _set____db54di;
  }
  pa9() {
    return this.he9_1;
  }
  adm(_set____db54di) {
    this.ie9_1 = _set____db54di;
  }
  bdm() {
    return this.ie9_1;
  }
  qdu(_set____db54di) {
    this.je9_1 = _set____db54di;
  }
  rdu() {
    return this.je9_1;
  }
  sdu(_set____db54di) {
    this.ke9_1 = _set____db54di;
  }
  tdu() {
    return this.ke9_1;
  }
  udu(_set____db54di) {
    this.le9_1 = _set____db54di;
  }
  vdu() {
    return this.le9_1;
  }
  wdu(_set____db54di) {
    this.me9_1 = _set____db54di;
  }
  xdu() {
    return this.me9_1;
  }
  ydu(_set____db54di) {
    this.ne9_1 = _set____db54di;
  }
  zdu() {
    return this.ne9_1;
  }
  adv(_set____db54di) {
    this.oe9_1 = _set____db54di;
  }
  bdv() {
    return this.oe9_1;
  }
  cdv(_set____db54di) {
    this.pe9_1 = _set____db54di;
  }
  ddv() {
    return this.pe9_1;
  }
  edv(_set____db54di) {
    this.qe9_1 = _set____db54di;
  }
  fdv() {
    return this.qe9_1;
  }
  gdv(_set____db54di) {
    this.re9_1 = _set____db54di;
  }
  hdv() {
    return this.re9_1;
  }
  idv(_set____db54di) {
    this.se9_1 = _set____db54di;
  }
  jdv() {
    return this.se9_1;
  }
  kdv(_set____db54di) {
    this.te9_1 = _set____db54di;
  }
  ldv() {
    return this.te9_1;
  }
  mdv(_set____db54di) {
    this.ue9_1 = _set____db54di;
  }
  ndv() {
    return this.ue9_1;
  }
  odv(_set____db54di) {
    this.ve9_1 = _set____db54di;
  }
  pdv() {
    return this.ve9_1;
  }
  qdv(_set____db54di) {
    this.we9_1 = _set____db54di;
  }
  rdv() {
    return this.we9_1;
  }
  sdv(_set____db54di) {
    this.xe9_1 = _set____db54di;
  }
  tdv() {
    return this.xe9_1;
  }
  gdp(_set____db54di) {
    this.ye9_1 = _set____db54di;
  }
  hdp() {
    return this.ye9_1;
  }
  udv(_set____db54di) {
    this.ze9_1 = _set____db54di;
  }
  jc2() {
    return this.ze9_1;
  }
  vdv(_set____db54di) {
    this.aea_1 = _set____db54di;
  }
  wdv() {
    return this.aea_1;
  }
  static bea(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker) {
    Companion_getInstance_28();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_25().le8_1);
    }
    var $this = this.odt();
    $this.ne8_1 = blogName;
    $this.oe8_1 = idString;
    $this.pe8_1 = genesisPostId;
    $this.qe8_1 = postUrl;
    $this.re8_1 = parentPostUrl;
    $this.se8_1 = type;
    $this.te8_1 = timestamp;
    $this.ue8_1 = date;
    $this.ve8_1 = format;
    $this.we8_1 = reblogKey;
    $this.xe8_1 = tags;
    $this.ye8_1 = isBookmarklet;
    $this.ze8_1 = isMobile;
    $this.ae9_1 = sourceUrl;
    $this.be9_1 = sourceTitle;
    $this.ce9_1 = isLiked;
    $this.de9_1 = state;
    $this.ee9_1 = title;
    $this.fe9_1 = body;
    $this.ge9_1 = noteCount;
    $this.he9_1 = summary;
    $this.ie9_1 = slug;
    $this.je9_1 = rebloggedFromId;
    $this.ke9_1 = rebloggedFromUrl;
    $this.le9_1 = rebloggedFromName;
    $this.me9_1 = rebloggedFromTitle;
    $this.ne9_1 = rebloggedFromUuid;
    $this.oe9_1 = rebloggedFromCanMessage;
    $this.pe9_1 = rebloggedFromFollowing;
    $this.qe9_1 = rebloggedRootId;
    $this.re9_1 = rebloggedRootUrl;
    $this.se9_1 = rebloggedRootName;
    $this.te9_1 = rebloggedRootTitle;
    $this.ue9_1 = rebloggedRootUuid;
    $this.ve9_1 = rebloggedRootCanMessage;
    $this.we9_1 = rebloggedRootFollowing;
    $this.xe9_1 = notes;
    $this.ye9_1 = blog;
    $this.ze9_1 = reblog;
    $this.aea_1 = trail;
    return $this;
  }
}
class Companion_28 {
  constructor() {
    Companion_instance_28 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.dea_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, lazy(tmp_6, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2)];
  }
  n1o() {
    return $serializer_getInstance_26();
  }
}
class $serializer_27 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyVideoPost', this, 42);
    tmp0_serialDesc.m1a('blog_name', false);
    tmp0_serialDesc.m1a('id_string', false);
    tmp0_serialDesc.m1a('genesis_post_id', false);
    tmp0_serialDesc.m1a('post_url', false);
    tmp0_serialDesc.m1a('parent_post_url', false);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('timestamp', false);
    tmp0_serialDesc.m1a('date', false);
    tmp0_serialDesc.m1a('format', false);
    tmp0_serialDesc.m1a('reblog_key', false);
    tmp0_serialDesc.m1a('tags', false);
    tmp0_serialDesc.m1a('bookmarklet', false);
    tmp0_serialDesc.m1a('mobile', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('source_title', false);
    tmp0_serialDesc.m1a('liked', false);
    tmp0_serialDesc.m1a('state', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('note_count', false);
    tmp0_serialDesc.m1a('summary', false);
    tmp0_serialDesc.m1a('slug', false);
    tmp0_serialDesc.m1a('reblogged_from_id', false);
    tmp0_serialDesc.m1a('reblogged_from_url', false);
    tmp0_serialDesc.m1a('reblogged_from_name', false);
    tmp0_serialDesc.m1a('reblogged_from_title', false);
    tmp0_serialDesc.m1a('reblogged_from_uuid', false);
    tmp0_serialDesc.m1a('reblogged_from_can_message', false);
    tmp0_serialDesc.m1a('reblogged_from_following', false);
    tmp0_serialDesc.m1a('reblogged_root_id', false);
    tmp0_serialDesc.m1a('reblogged_root_url', false);
    tmp0_serialDesc.m1a('reblogged_root_name', false);
    tmp0_serialDesc.m1a('reblogged_root_title', false);
    tmp0_serialDesc.m1a('reblogged_root_uuid', false);
    tmp0_serialDesc.m1a('reblogged_root_can_message', false);
    tmp0_serialDesc.m1a('reblogged_root_following', false);
    tmp0_serialDesc.m1a('notes', false);
    tmp0_serialDesc.m1a('blog', false);
    tmp0_serialDesc.m1a('reblog', false);
    tmp0_serialDesc.m1a('trail', false);
    tmp0_serialDesc.m1a('caption', true);
    tmp0_serialDesc.m1a('player', true);
    this.eea_1 = tmp0_serialDesc;
  }
  fea(encoder, value) {
    var tmp0_desc = this.eea_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().dea_1;
    tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.gea_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.hea_1);
    tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.iea_1);
    tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.jea_1);
    tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.kea_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.lea_1);
    tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.mea_1);
    tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.nea_1);
    tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.oea_1);
    tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.pea_1);
    tmp1_output.m14(tmp0_desc, 10, tmp2_cached[10].y2(), value.qea_1);
    tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.rea_1);
    tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.sea_1);
    tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.tea_1);
    tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.uea_1);
    tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.vea_1);
    tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.wea_1);
    tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.xea_1);
    tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.yea_1);
    tmp1_output.m14(tmp0_desc, 19, IntSerializer_getInstance(), value.zea_1);
    tmp1_output.m14(tmp0_desc, 20, StringSerializer_getInstance(), value.aeb_1);
    tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.beb_1);
    tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.ceb_1);
    tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.deb_1);
    tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.eeb_1);
    tmp1_output.m14(tmp0_desc, 25, StringSerializer_getInstance(), value.feb_1);
    tmp1_output.m14(tmp0_desc, 26, StringSerializer_getInstance(), value.geb_1);
    tmp1_output.m14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.heb_1);
    tmp1_output.m14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.ieb_1);
    tmp1_output.m14(tmp0_desc, 29, StringSerializer_getInstance(), value.jeb_1);
    tmp1_output.m14(tmp0_desc, 30, StringSerializer_getInstance(), value.keb_1);
    tmp1_output.m14(tmp0_desc, 31, StringSerializer_getInstance(), value.leb_1);
    tmp1_output.m14(tmp0_desc, 32, StringSerializer_getInstance(), value.meb_1);
    tmp1_output.m14(tmp0_desc, 33, StringSerializer_getInstance(), value.neb_1);
    tmp1_output.m14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.oeb_1);
    tmp1_output.m14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.peb_1);
    tmp1_output.m14(tmp0_desc, 36, tmp2_cached[36].y2(), value.qeb_1);
    tmp1_output.m14(tmp0_desc, 37, $serializer_getInstance_14(), value.reb_1);
    tmp1_output.m14(tmp0_desc, 38, $serializer_getInstance_17(), value.seb_1);
    tmp1_output.m14(tmp0_desc, 39, tmp2_cached[39].y2(), value.teb_1);
    if (tmp1_output.q14(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.m14(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.q14(tmp0_desc, 41) ? true : !(value.player == null)) {
      tmp1_output.m14(tmp0_desc, 41, tmp2_cached[41].y2(), value.player);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.fea(encoder, value instanceof LegacyVideoPost ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.eea_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_input = decoder.u12(tmp0_desc);
    var tmp48_cached = Companion_getInstance_29().dea_1;
    if (tmp47_input.j13()) {
      tmp5_local0 = tmp47_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.i13(tmp0_desc, 10, tmp48_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.i13(tmp0_desc, 36, tmp48_cached[36].y2(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.i13(tmp0_desc, 39, tmp48_cached[39].y2(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.i13(tmp0_desc, 41, tmp48_cached[41].y2(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.i13(tmp0_desc, 10, tmp48_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.i13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.i13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.i13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.i13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.i13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.i13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.i13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.i13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.i13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.i13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.i13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.i13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.i13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.i13(tmp0_desc, 36, tmp48_cached[36].y2(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.i13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.i13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.i13(tmp0_desc, 39, tmp48_cached[39].y2(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.i13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.i13(tmp0_desc, 41, tmp48_cached[41].y2(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp47_input.v12(tmp0_desc);
    return LegacyVideoPost.ueb(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  cy() {
    return this.eea_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_29().dea_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].y2()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].y2()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[41].y2())];
  }
}
class LegacyVideoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.veb(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static veb(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_29();
    var $this = this.odt();
    $this.gea_1 = blogName;
    $this.hea_1 = idString;
    $this.iea_1 = genesisPostId;
    $this.jea_1 = postUrl;
    $this.kea_1 = parentPostUrl;
    $this.lea_1 = type;
    $this.mea_1 = timestamp;
    $this.nea_1 = date;
    $this.oea_1 = format;
    $this.pea_1 = reblogKey;
    $this.qea_1 = tags;
    $this.rea_1 = isBookmarklet;
    $this.sea_1 = isMobile;
    $this.tea_1 = sourceUrl;
    $this.uea_1 = sourceTitle;
    $this.vea_1 = isLiked;
    $this.wea_1 = state;
    $this.xea_1 = title;
    $this.yea_1 = body;
    $this.zea_1 = noteCount;
    $this.aeb_1 = summary;
    $this.beb_1 = slug;
    $this.ceb_1 = rebloggedFromId;
    $this.deb_1 = rebloggedFromUrl;
    $this.eeb_1 = rebloggedFromName;
    $this.feb_1 = rebloggedFromTitle;
    $this.geb_1 = rebloggedFromUuid;
    $this.heb_1 = rebloggedFromCanMessage;
    $this.ieb_1 = rebloggedFromFollowing;
    $this.jeb_1 = rebloggedRootId;
    $this.keb_1 = rebloggedRootUrl;
    $this.leb_1 = rebloggedRootName;
    $this.meb_1 = rebloggedRootTitle;
    $this.neb_1 = rebloggedRootUuid;
    $this.oeb_1 = rebloggedRootCanMessage;
    $this.peb_1 = rebloggedRootFollowing;
    $this.qeb_1 = notes;
    $this.reb_1 = blog;
    $this.seb_1 = reblog;
    $this.teb_1 = trail;
    $this.caption = null;
    $this.player = null;
    return $this;
  }
  pdk(_set____db54di) {
    this.gea_1 = _set____db54di;
  }
  qdk() {
    return this.gea_1;
  }
  ydt(_set____db54di) {
    this.hea_1 = _set____db54di;
  }
  zdt() {
    return this.hea_1;
  }
  adu(_set____db54di) {
    this.iea_1 = _set____db54di;
  }
  bdu() {
    return this.iea_1;
  }
  cdu(_set____db54di) {
    this.jea_1 = _set____db54di;
  }
  ddu() {
    return this.jea_1;
  }
  edu(_set____db54di) {
    this.kea_1 = _set____db54di;
  }
  fdu() {
    return this.kea_1;
  }
  e33(_set____db54di) {
    this.lea_1 = _set____db54di;
  }
  x32() {
    return this.lea_1;
  }
  gdu(_set____db54di) {
    this.mea_1 = _set____db54di;
  }
  ydq() {
    return this.mea_1;
  }
  wdl(_set____db54di) {
    this.nea_1 = _set____db54di;
  }
  xdl() {
    return this.nea_1;
  }
  ydl(_set____db54di) {
    this.oea_1 = _set____db54di;
  }
  zdl() {
    return this.oea_1;
  }
  pdn(_set____db54di) {
    this.pea_1 = _set____db54di;
  }
  qdn() {
    return this.pea_1;
  }
  la7(_set____db54di) {
    this.qea_1 = _set____db54di;
  }
  ga2() {
    return this.qea_1;
  }
  hdu(_set____db54di) {
    this.rea_1 = _set____db54di;
  }
  idu() {
    return this.rea_1;
  }
  jdu(_set____db54di) {
    this.sea_1 = _set____db54di;
  }
  kdu() {
    return this.sea_1;
  }
  y32(_set____db54di) {
    this.tea_1 = _set____db54di;
  }
  z32() {
    return this.tea_1;
  }
  ldu(_set____db54di) {
    this.uea_1 = _set____db54di;
  }
  mdu() {
    return this.uea_1;
  }
  ndu(_set____db54di) {
    this.vea_1 = _set____db54di;
  }
  caa() {
    return this.vea_1;
  }
  y9t(_set____db54di) {
    this.wea_1 = _set____db54di;
  }
  g7x() {
    return this.wea_1;
  }
  ca2(_set____db54di) {
    this.xea_1 = _set____db54di;
  }
  m3b() {
    return this.xea_1;
  }
  ta8(_set____db54di) {
    this.yea_1 = _set____db54di;
  }
  ua8() {
    return this.yea_1;
  }
  odu(_set____db54di) {
    this.zea_1 = _set____db54di;
  }
  pdu() {
    return this.zea_1;
  }
  oa9(_set____db54di) {
    this.aeb_1 = _set____db54di;
  }
  pa9() {
    return this.aeb_1;
  }
  adm(_set____db54di) {
    this.beb_1 = _set____db54di;
  }
  bdm() {
    return this.beb_1;
  }
  qdu(_set____db54di) {
    this.ceb_1 = _set____db54di;
  }
  rdu() {
    return this.ceb_1;
  }
  sdu(_set____db54di) {
    this.deb_1 = _set____db54di;
  }
  tdu() {
    return this.deb_1;
  }
  udu(_set____db54di) {
    this.eeb_1 = _set____db54di;
  }
  vdu() {
    return this.eeb_1;
  }
  wdu(_set____db54di) {
    this.feb_1 = _set____db54di;
  }
  xdu() {
    return this.feb_1;
  }
  ydu(_set____db54di) {
    this.geb_1 = _set____db54di;
  }
  zdu() {
    return this.geb_1;
  }
  adv(_set____db54di) {
    this.heb_1 = _set____db54di;
  }
  bdv() {
    return this.heb_1;
  }
  cdv(_set____db54di) {
    this.ieb_1 = _set____db54di;
  }
  ddv() {
    return this.ieb_1;
  }
  edv(_set____db54di) {
    this.jeb_1 = _set____db54di;
  }
  fdv() {
    return this.jeb_1;
  }
  gdv(_set____db54di) {
    this.keb_1 = _set____db54di;
  }
  hdv() {
    return this.keb_1;
  }
  idv(_set____db54di) {
    this.leb_1 = _set____db54di;
  }
  jdv() {
    return this.leb_1;
  }
  kdv(_set____db54di) {
    this.meb_1 = _set____db54di;
  }
  ldv() {
    return this.meb_1;
  }
  mdv(_set____db54di) {
    this.neb_1 = _set____db54di;
  }
  ndv() {
    return this.neb_1;
  }
  odv(_set____db54di) {
    this.oeb_1 = _set____db54di;
  }
  pdv() {
    return this.oeb_1;
  }
  qdv(_set____db54di) {
    this.peb_1 = _set____db54di;
  }
  rdv() {
    return this.peb_1;
  }
  sdv(_set____db54di) {
    this.qeb_1 = _set____db54di;
  }
  tdv() {
    return this.qeb_1;
  }
  gdp(_set____db54di) {
    this.reb_1 = _set____db54di;
  }
  hdp() {
    return this.reb_1;
  }
  udv(_set____db54di) {
    this.seb_1 = _set____db54di;
  }
  jc2() {
    return this.seb_1;
  }
  vdv(_set____db54di) {
    this.teb_1 = _set____db54di;
  }
  wdv() {
    return this.teb_1;
  }
  ndl(_set____db54di) {
    this.caption = _set____db54di;
  }
  odl() {
    return this.caption;
  }
  web() {
    return this.player;
  }
  static ueb(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, player, serializationConstructorMarker) {
    Companion_getInstance_29();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_26().eea_1);
    }
    var $this = this.odt();
    $this.gea_1 = blogName;
    $this.hea_1 = idString;
    $this.iea_1 = genesisPostId;
    $this.jea_1 = postUrl;
    $this.kea_1 = parentPostUrl;
    $this.lea_1 = type;
    $this.mea_1 = timestamp;
    $this.nea_1 = date;
    $this.oea_1 = format;
    $this.pea_1 = reblogKey;
    $this.qea_1 = tags;
    $this.rea_1 = isBookmarklet;
    $this.sea_1 = isMobile;
    $this.tea_1 = sourceUrl;
    $this.uea_1 = sourceTitle;
    $this.vea_1 = isLiked;
    $this.wea_1 = state;
    $this.xea_1 = title;
    $this.yea_1 = body;
    $this.zea_1 = noteCount;
    $this.aeb_1 = summary;
    $this.beb_1 = slug;
    $this.ceb_1 = rebloggedFromId;
    $this.deb_1 = rebloggedFromUrl;
    $this.eeb_1 = rebloggedFromName;
    $this.feb_1 = rebloggedFromTitle;
    $this.geb_1 = rebloggedFromUuid;
    $this.heb_1 = rebloggedFromCanMessage;
    $this.ieb_1 = rebloggedFromFollowing;
    $this.jeb_1 = rebloggedRootId;
    $this.keb_1 = rebloggedRootUrl;
    $this.leb_1 = rebloggedRootName;
    $this.meb_1 = rebloggedRootTitle;
    $this.neb_1 = rebloggedRootUuid;
    $this.oeb_1 = rebloggedRootCanMessage;
    $this.peb_1 = rebloggedRootFollowing;
    $this.qeb_1 = notes;
    $this.reb_1 = blog;
    $this.seb_1 = reblog;
    $this.teb_1 = trail;
    if (0 === (seen1 & 256))
      $this.caption = null;
    else
      $this.caption = caption;
    if (0 === (seen1 & 512))
      $this.player = null;
    else
      $this.player = player;
    return $this;
  }
}
class Companion_29 {}
class $serializer_28 {
  constructor() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Dialogue', this, 3);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('label', true);
    tmp0_serialDesc.m1a('phrase', true);
    this.xeb_1 = tmp0_serialDesc;
  }
  yeb(encoder, value) {
    var tmp0_desc = this.xeb_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.label == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.phrase == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.phrase);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.yeb(encoder, value instanceof Dialogue ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.xeb_1;
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
    return Dialogue.zeb(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.xeb_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Dialogue {
  constructor() {
    this.name = null;
    this.label = null;
    this.phrase = null;
  }
  d1() {
    return this.name;
  }
  s77() {
    return this.label;
  }
  aec() {
    return this.phrase;
  }
  static zeb(seen0, name, label, phrase, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().xeb_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.label = null;
    else
      $this.label = label;
    if (0 === (seen0 & 4))
      $this.phrase = null;
    else
      $this.phrase = phrase;
    return $this;
  }
}
class Companion_30 {
  constructor() {
    Companion_instance_30 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.bec_1 = [null, null, lazy(tmp_0, Photo$Companion$$childSerializers$_anonymous__7997i0)];
  }
}
class $serializer_29 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Photo', this, 3);
    tmp0_serialDesc.m1a('caption', true);
    tmp0_serialDesc.m1a('original_size', true);
    tmp0_serialDesc.m1a('alt_sizes', true);
    this.cec_1 = tmp0_serialDesc;
  }
  dec(encoder, value) {
    var tmp0_desc = this.cec_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().bec_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.caption == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.originalSize == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_29(), value.originalSize);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.altSizes == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.altSizes);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dec(encoder, value instanceof Photo ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.cec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance_31().bec_1;
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
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
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
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
    return Photo.eec(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.cec_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_31().bec_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_29()), get_nullable(tmp0_cached[2].y2())];
  }
}
class Photo {
  constructor() {
    Companion_getInstance_31();
    this.caption = null;
    this.originalSize = null;
    this.altSizes = null;
  }
  odl() {
    return this.caption;
  }
  fec() {
    return this.originalSize;
  }
  gec() {
    return this.altSizes;
  }
  static eec(seen0, caption, originalSize, altSizes, serializationConstructorMarker) {
    Companion_getInstance_31();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().cec_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.caption = null;
    else
      $this.caption = caption;
    if (0 === (seen0 & 2))
      $this.originalSize = null;
    else
      $this.originalSize = originalSize;
    if (0 === (seen0 & 4))
      $this.altSizes = null;
    else
      $this.altSizes = altSizes;
    return $this;
  }
}
class Companion_31 {}
class $serializer_30 {
  constructor() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.PhotoSize', this, 3);
    tmp0_serialDesc.m1a('width', true);
    tmp0_serialDesc.m1a('height', true);
    tmp0_serialDesc.m1a('url', true);
    this.hec_1 = tmp0_serialDesc;
  }
  iec(encoder, value) {
    var tmp0_desc = this.hec_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.width === 0)) {
      tmp1_output.e14(tmp0_desc, 0, value.width);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.height === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.height);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.iec(encoder, value instanceof PhotoSize ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.hec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.z12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z12(tmp0_desc, 1);
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
            tmp5_local1 = tmp7_input.z12(tmp0_desc, 1);
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
    return PhotoSize.jec(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.hec_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class PhotoSize {
  constructor() {
    this.width = 0;
    this.height = 0;
    this.url = null;
  }
  a7e() {
    return this.width;
  }
  c7e() {
    return this.height;
  }
  f4k() {
    return this.url;
  }
  static jec(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().hec_1);
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
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
}
class Companion_32 {}
class $serializer_31 {
  constructor() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Video', this, 2);
    tmp0_serialDesc.m1a('width', true);
    tmp0_serialDesc.m1a('embedCode', true);
    this.kec_1 = tmp0_serialDesc;
  }
  lec(encoder, value) {
    var tmp0_desc = this.kec_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.embedCode == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.embedCode);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.lec(encoder, value instanceof Video ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.kec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
    return Video.mec(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.kec_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Video {
  constructor() {
    this.width = null;
    this.embedCode = null;
  }
  a7e() {
    return this.width;
  }
  nec() {
    return this.embedCode;
  }
  static mec(seen0, width, embedCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().kec_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen0 & 2))
      $this.embedCode = null;
    else
      $this.embedCode = embedCode;
    return $this;
  }
}
class Companion_33 {}
class $serializer_32 {
  constructor() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.BlogInTrail', this, 6);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('active', true);
    tmp0_serialDesc.m1a('theme', true);
    tmp0_serialDesc.m1a('share_likes', true);
    tmp0_serialDesc.m1a('share_following', true);
    tmp0_serialDesc.m1a('can_be_followed', true);
    this.oec_1 = tmp0_serialDesc;
  }
  pec(encoder, value) {
    var tmp0_desc = this.oec_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.isActive === false)) {
      tmp1_output.b14(tmp0_desc, 1, value.isActive);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.theme == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_16(), value.theme);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.isShareLikes === false)) {
      tmp1_output.b14(tmp0_desc, 3, value.isShareLikes);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.isShareFollowing === false)) {
      tmp1_output.b14(tmp0_desc, 4, value.isShareFollowing);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.isCanBeFollowed === false)) {
      tmp1_output.b14(tmp0_desc, 5, value.isCanBeFollowed);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.pec(encoder, value instanceof BlogInTrail ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.oec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.u12(tmp0_desc);
    if (tmp10_input.j13()) {
      tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.w12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
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
            tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
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
    return BlogInTrail.qec(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.oec_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable($serializer_getInstance_16()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  }
}
class BlogInTrail {
  constructor() {
    this.name = null;
    this.isActive = false;
    this.theme = null;
    this.isShareLikes = false;
    this.isShareFollowing = false;
    this.isCanBeFollowed = false;
  }
  d1() {
    return this.name;
  }
  q20() {
    return this.isActive;
  }
  ads() {
    return this.theme;
  }
  rec() {
    return this.isShareLikes;
  }
  sec() {
    return this.isShareFollowing;
  }
  tec() {
    return this.isCanBeFollowed;
  }
  static qec(seen0, name, isActive, theme, isShareLikes, isShareFollowing, isCanBeFollowed, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().oec_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.isActive = false;
    else
      $this.isActive = isActive;
    if (0 === (seen0 & 4))
      $this.theme = null;
    else
      $this.theme = theme;
    if (0 === (seen0 & 8))
      $this.isShareLikes = false;
    else
      $this.isShareLikes = isShareLikes;
    if (0 === (seen0 & 16))
      $this.isShareFollowing = false;
    else
      $this.isShareFollowing = isShareFollowing;
    if (0 === (seen0 & 32))
      $this.isCanBeFollowed = false;
    else
      $this.isCanBeFollowed = isCanBeFollowed;
    return $this;
  }
}
class Companion_34 {}
class $serializer_33 {
  constructor() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.IdInTrail', this, 1);
    tmp0_serialDesc.m1a('id', true);
    this.uec_1 = tmp0_serialDesc;
  }
  vec(encoder, value) {
    var tmp0_desc = this.uec_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vec(encoder, value instanceof IdInTrail ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.uec_1;
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
    return IdInTrail.wec(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.uec_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class IdInTrail {
  constructor() {
    this.id = null;
  }
  j37() {
    return this.id;
  }
  static wec(seen0, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().uec_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    return $this;
  }
}
class Companion_35 {}
class $serializer_34 {
  constructor() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.Trail', this, 6);
    tmp0_serialDesc.m1a('blog', true);
    tmp0_serialDesc.m1a('post', true);
    tmp0_serialDesc.m1a('content_raw', true);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('current_item', true);
    tmp0_serialDesc.m1a('root_item', true);
    this.xec_1 = tmp0_serialDesc;
  }
  yec(encoder, value) {
    var tmp0_desc = this.xec_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_31(), value.blog);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.post == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_32(), value.post);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.contentRaw == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.contentRaw);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.content == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.isCurrentItem === false)) {
      tmp1_output.b14(tmp0_desc, 4, value.isCurrentItem);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.isRootItem === false)) {
      tmp1_output.b14(tmp0_desc, 5, value.isRootItem);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.yec(encoder, value instanceof Trail ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.xec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.u12(tmp0_desc);
    if (tmp10_input.j13()) {
      tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.i13(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
            tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.i13(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
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
    return Trail.zec(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.xec_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_31()), get_nullable($serializer_getInstance_32()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  }
}
class Trail {
  constructor() {
    this.blog = null;
    this.post = null;
    this.contentRaw = null;
    this.content = null;
    this.isCurrentItem = false;
    this.isRootItem = false;
  }
  hdp() {
    return this.blog;
  }
  t6a() {
    return this.post;
  }
  aed() {
    return this.contentRaw;
  }
  x1n() {
    return this.content;
  }
  bed() {
    return this.isCurrentItem;
  }
  ced() {
    return this.isRootItem;
  }
  static zec(seen0, blog, post, contentRaw, content, isCurrentItem, isRootItem, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().xec_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.blog = null;
    else
      $this.blog = blog;
    if (0 === (seen0 & 2))
      $this.post = null;
    else
      $this.post = post;
    if (0 === (seen0 & 4))
      $this.contentRaw = null;
    else
      $this.contentRaw = contentRaw;
    if (0 === (seen0 & 8))
      $this.content = null;
    else
      $this.content = content;
    if (0 === (seen0 & 16))
      $this.isCurrentItem = false;
    else
      $this.isCurrentItem = isCurrentItem;
    if (0 === (seen0 & 32))
      $this.isRootItem = false;
    else
      $this.isRootItem = isRootItem;
    return $this;
  }
}
class Companion_36 {}
class $serializer_35 {
  constructor() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.FollowerUser', this, 4);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('following', true);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('updated', true);
    this.ded_1 = tmp0_serialDesc;
  }
  eed(encoder, value) {
    var tmp0_desc = this.ded_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.following == null)) {
      tmp1_output.m14(tmp0_desc, 1, BooleanSerializer_getInstance(), value.following);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.updated);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.eed(encoder, value instanceof FollowerUser ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ded_1;
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
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
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
    return FollowerUser.fed(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.ded_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class FollowerUser {
  constructor() {
    this.name = null;
    this.following = null;
    this.url = null;
    this.updated = null;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  b99(_set____db54di) {
    this.following = _set____db54di;
  }
  a35() {
    return this.following;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  ged(_set____db54di) {
    this.updated = _set____db54di;
  }
  tdr() {
    return this.updated;
  }
  static fed(seen0, name, following, url, updated, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().ded_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.following = null;
    else
      $this.following = following;
    if (0 === (seen0 & 4))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 8))
      $this.updated = null;
    else
      $this.updated = updated;
    return $this;
  }
}
class Companion_37 {
  constructor() {
    Companion_instance_37 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.hed_1 = [null, null, null, null, lazy(tmp_0, User$Companion$$childSerializers$_anonymous__6nf9sv)];
  }
}
class $serializer_36 {
  constructor() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.User', this, 5);
    tmp0_serialDesc.m1a('following', true);
    tmp0_serialDesc.m1a('default_post_format', true);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('likes', true);
    tmp0_serialDesc.m1a('blogs', true);
    this.ied_1 = tmp0_serialDesc;
  }
  jed(encoder, value) {
    var tmp0_desc = this.ied_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_38().hed_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.followingCount == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.followingCount);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.defaultPostFormat == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.defaultPostFormat);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.likeCount == null)) {
      tmp1_output.m14(tmp0_desc, 3, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.blogs == null)) {
      tmp1_output.m14(tmp0_desc, 4, tmp2_cached[4].y2(), value.blogs);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.jed(encoder, value instanceof User ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ied_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.u12(tmp0_desc);
    var tmp10_cached = Companion_getInstance_38().hed_1;
    if (tmp9_input.j13()) {
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
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
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
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
    return User.ked(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.ied_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_38().hed_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[4].y2())];
  }
}
class User extends Resource {
  constructor() {
    return new.target.led();
  }
  static led() {
    Companion_getInstance_38();
    var $this = this.kdr();
    $this.followingCount = null;
    $this.defaultPostFormat = null;
    $this.name = null;
    $this.likeCount = null;
    $this.blogs = null;
    return $this;
  }
  z30() {
    return this.followingCount;
  }
  med() {
    return this.defaultPostFormat;
  }
  d1() {
    return this.name;
  }
  b2z() {
    return this.likeCount;
  }
  adp() {
    return this.blogs;
  }
  static ked(seen0, followingCount, defaultPostFormat, name, likeCount, blogs, serializationConstructorMarker) {
    Companion_getInstance_38();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().ied_1);
    }
    var $this = this.kdr();
    if (0 === (seen0 & 1))
      $this.followingCount = null;
    else
      $this.followingCount = followingCount;
    if (0 === (seen0 & 2))
      $this.defaultPostFormat = null;
    else
      $this.defaultPostFormat = defaultPostFormat;
    if (0 === (seen0 & 4))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 8))
      $this.likeCount = null;
    else
      $this.likeCount = likeCount;
    if (0 === (seen0 & 16))
      $this.blogs = null;
    else
      $this.blogs = blogs;
    return $this;
  }
}
class AbstractResourceImpl$oauthPostUnit$slambda {
  constructor($path, this$0, $params, $files) {
    this.ned_1 = $path;
    this.oed_1 = this$0;
    this.ped_1 = $params;
    this.qed_1 = $files;
  }
  *h6y($completion) {
    // Inline function 'kotlin.also' call
    var this_0 = (new HttpRequest()).n54('https://api.tumblr.com/v2' + this.ned_1).p54('Authorization', this.oed_1.red_1.odg()).o54(MediaType_getInstance().sed_1).x54(this.ped_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.qed_1.w2().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var key = element.x2();
      // Inline function 'kotlin.collections.component2' call
      var pair = element.y2();
      this_0.l53(key, pair.first, pair.second);
    }
    return yield* this_0.z54($completion);
  }
  vd($completion) {
    return this.h6y($completion);
  }
}
class AbstractResourceImpl$oauthPutUnit$slambda {
  constructor($path, this$0, $params) {
    this.ted_1 = $path;
    this.ued_1 = this$0;
    this.ved_1 = $params;
  }
  *h6y($completion) {
    return yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + this.ted_1).p54('Authorization', this.ued_1.red_1.odg()).o54(MediaType_getInstance().sed_1).x54(this.ved_1).a55($completion);
  }
  vd($completion) {
    return this.h6y($completion);
  }
}
class AbstractResourceImpl {
  constructor(auth) {
    this.red_1 = auth;
  }
  *wed(path, params, files, $completion) {
    return yield* /*#__NOINLINE__*/proceedUnit(this, AbstractResourceImpl$oauthPostUnit$slambda_0(path, this, params, files), $completion);
  }
  xed(path, params, files, $completion, $super) {
    var tmp;
    if (params === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = params;
    }
    params = tmp;
    var tmp_0;
    if (files === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_0 = emptyMap();
    } else {
      tmp_0 = files;
    }
    files = tmp_0;
    return $super === VOID ? this.wed(path, params, files, $completion) : $super.wed.call(this, path, params, files, $completion);
  }
  *yed(path, params, $completion) {
    return yield* /*#__NOINLINE__*/proceedUnit(this, AbstractResourceImpl$oauthPutUnit$slambda_0(path, this, params), $completion);
  }
  zed(blogName, extPath) {
    return '/blog/' + blogUrl(this, blogName) + extPath;
  }
}
class AuthResourceImpl$oAuth2TokenBlocking$slambda {
  constructor(this$0, $request) {
    this.aee_1 = this$0;
    this.bee_1 = $request;
  }
  *cee($this$toBlocking, $completion) {
    return yield* this.aee_1.cdh(this.bee_1, $completion);
  }
  wd(p1, $completion) {
    return this.cee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda {
  constructor(this$0, $request) {
    this.dee_1 = this$0;
    this.eee_1 = $request;
  }
  *cee($this$toBlocking, $completion) {
    return yield* this.dee_1.ddh(this.eee_1, $completion);
  }
  wd(p1, $completion) {
    return this.cee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AuthResourceImpl extends AbstractResourceImpl {
  authorizeUrl(request) {
    // Inline function 'kotlin.apply' call
    var this_0 = new URLBuilder();
    this_0.b45(Companion_getInstance().d45_1);
    this_0.s43_1 = 'www.tumblr.com';
    set_encodedPath(this_0, '/oauth2/authorize');
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.b44_1;
    this_1.m3n('client_id', this.red_1.kdg_1);
    this_1.m3n('response_type', request.responseType);
    this_1.m3n('state', ensureNotNull(request.state));
    this_1.m3n('scope', request.scope);
    var tmp0_safe_receiver = request.redirectUri;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_1.m3n('redirect_uri', tmp0_safe_receiver);
    }
    return this_0.q3v().toString();
  }
  *edh(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2/oauth2/token').x54(request.mdk()).z54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          tmp$ret$0 = new Response(tmp$ret$2, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oAuth2Token(request) {
    return promisify(($completion) => this.edh(request, $completion));
  }
  *cdh(request, $completion) {
    return this.oAuth2Token === protoOf(AuthResourceImpl).oAuth2Token ? (yield* this.edh(request, $completion)) : (yield* await_0(this.oAuth2Token(request), $completion));
  }
  fdh(request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenBlocking$slambda_0(this, request));
  }
  *gdh(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2/oauth2/token').x54(request.mdk()).z54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          tmp$ret$0 = new Response(tmp$ret$2, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oAuth2TokenRefresh(request) {
    return promisify(($completion) => this.gdh(request, $completion));
  }
  *ddh(request, $completion) {
    return this.oAuth2TokenRefresh === protoOf(AuthResourceImpl).oAuth2TokenRefresh ? (yield* this.gdh(request, $completion)) : (yield* await_0(this.oAuth2TokenRefresh(request), $completion));
  }
  hdh(request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda_0(this, request));
  }
}
class BlogResourceImpl$blogInfoBlocking$slambda {
  constructor(this$0, $request) {
    this.hee_1 = this$0;
    this.iee_1 = $request;
  }
  *jee($this$toBlocking, $completion) {
    return yield* this.hee_1.idh(this.iee_1, $completion);
  }
  wd(p1, $completion) {
    return this.jee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogAvatarBlocking$slambda {
  constructor(this$0, $request) {
    this.kee_1 = this$0;
    this.lee_1 = $request;
  }
  *mee($this$toBlocking, $completion) {
    return yield* this.kee_1.sdh(this.lee_1, $completion);
  }
  wd(p1, $completion) {
    return this.mee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogLikesBlocking$slambda {
  constructor(this$0, $request) {
    this.nee_1 = this$0;
    this.oee_1 = $request;
  }
  *pee($this$toBlocking, $completion) {
    return yield* this.nee_1.jdh(this.oee_1, $completion);
  }
  wd(p1, $completion) {
    return this.pee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogFollowingBlocking$slambda {
  constructor(this$0, $request) {
    this.qee_1 = this$0;
    this.ree_1 = $request;
  }
  *see($this$toBlocking, $completion) {
    return yield* this.qee_1.xdh(this.ree_1, $completion);
  }
  wd(p1, $completion) {
    return this.see((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogFollowersBlocking$slambda {
  constructor(this$0, $request) {
    this.tee_1 = this$0;
    this.uee_1 = $request;
  }
  *vee($this$toBlocking, $completion) {
    return yield* this.tee_1.kdh(this.uee_1, $completion);
  }
  wd(p1, $completion) {
    return this.vee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogPostsBlocking$slambda {
  constructor(this$0, $request) {
    this.wee_1 = this$0;
    this.xee_1 = $request;
  }
  *yee($this$toBlocking, $completion) {
    return yield* this.wee_1.ldh(this.xee_1, $completion);
  }
  wd(p1, $completion) {
    return this.yee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogQueuedPostsBlocking$slambda {
  constructor(this$0, $request) {
    this.zee_1 = this$0;
    this.aef_1 = $request;
  }
  *yee($this$toBlocking, $completion) {
    return yield* this.zee_1.edi(this.aef_1, $completion);
  }
  wd(p1, $completion) {
    return this.yee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogDraftPostsBlocking$slambda {
  constructor(this$0, $request) {
    this.bef_1 = this$0;
    this.cef_1 = $request;
  }
  *yee($this$toBlocking, $completion) {
    return yield* this.bef_1.hdi(this.cef_1, $completion);
  }
  wd(p1, $completion) {
    return this.yee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogSubmissionsBlocking$slambda {
  constructor(this$0, $request) {
    this.def_1 = this$0;
    this.eef_1 = $request;
  }
  *yee($this$toBlocking, $completion) {
    return yield* this.def_1.kdi(this.eef_1, $completion);
  }
  wd(p1, $completion) {
    return this.yee((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$postCreateBlocking$slambda {
  constructor(this$0, $request) {
    this.fef_1 = this$0;
    this.gef_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.fef_1.mdh(this.gef_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$postEditBlocking$slambda {
  constructor(this$0, $request) {
    this.ief_1 = this$0;
    this.jef_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.ief_1.pdi(this.jef_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$postReblogBlocking$slambda {
  constructor(this$0, $request) {
    this.kef_1 = this$0;
    this.lef_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.kef_1.ndh(this.lef_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$postDeleteBlocking$slambda {
  constructor(this$0, $request) {
    this.mef_1 = this$0;
    this.nef_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.mef_1.odh(this.nef_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogBannerBlocking$slambda {
  constructor(this$0, $request) {
    this.oef_1 = this$0;
    this.pef_1 = $request;
  }
  *qef($this$toBlocking, $completion) {
    return yield* this.oef_1.wdi(this.pef_1, $completion);
  }
  wd(p1, $completion) {
    return this.qef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogUpdateInfoBlocking$slambda {
  constructor(this$0, $request) {
    this.sef_1 = this$0;
    this.tef_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.sef_1.zdi(this.tef_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$postEditTagsBlocking$slambda {
  constructor(this$0, $request) {
    this.uef_1 = this$0;
    this.vef_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.uef_1.cdj(this.vef_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$postUpdateBlocking$slambda {
  constructor(this$0, $request) {
    this.wef_1 = this$0;
    this.xef_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.wef_1.fdj(this.xef_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl extends AbstractResourceImpl {
  *pdh(request, $completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.zed(ensureNotNull(request.blogName), '/info');
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + path).o54(MediaType_getInstance().sed_1).v54(params).u54('api_key', this.red_1.kdg_1).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogInfoResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.oz(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  blogInfo(request) {
    return promisify(($completion) => this.pdh(request, $completion));
  }
  *idh(request, $completion) {
    return this.blogInfo === protoOf(BlogResourceImpl).blogInfo ? (yield* this.pdh(request, $completion)) : (yield* await_0(this.blogInfo(request), $completion));
  }
  qdh(request) {
    return toBlocking(BlogResourceImpl$blogInfoBlocking$slambda_0(this, request));
  }
  *rdh(request, $completion) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    var path = this.zed(ensureNotNull(request.blogName), '/avatar' + ext);
    var r = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + path).s54(false).y54($completion);
    var tmp0 = r.e55_1.p4('location');
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Location header is not found.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var url = tmp$ret$0;
    return new Response(url.m2(0), url.m2(0));
  }
  blogAvatar(request) {
    return promisify(($completion) => this.rdh(request, $completion));
  }
  *sdh(request, $completion) {
    return this.blogAvatar === protoOf(BlogResourceImpl).blogAvatar ? (yield* this.rdh(request, $completion)) : (yield* await_0(this.blogAvatar(request), $completion));
  }
  tdh(request) {
    return toBlocking(BlogResourceImpl$blogAvatarBlocking$slambda_0(this, request));
  }
  *udh(request, $completion) {
    var tmp2 = this.zed(ensureNotNull(request.blogName), '/likes');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).o54(MediaType_getInstance().sed_1).v54(params).u54('api_key', this.red_1.kdg_1).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogLikesResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogLikes(request) {
    return promisify(($completion) => this.udh(request, $completion));
  }
  *jdh(request, $completion) {
    return this.blogLikes === protoOf(BlogResourceImpl).blogLikes ? (yield* this.udh(request, $completion)) : (yield* await_0(this.blogLikes(request), $completion));
  }
  vdh(request) {
    return toBlocking(BlogResourceImpl$blogLikesBlocking$slambda_0(this, request));
  }
  *wdh(request, $completion) {
    var tmp2 = this.zed(ensureNotNull(request.blogName), '/following');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowingResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogFollowing(request) {
    return promisify(($completion) => this.wdh(request, $completion));
  }
  *xdh(request, $completion) {
    return this.blogFollowing === protoOf(BlogResourceImpl).blogFollowing ? (yield* this.wdh(request, $completion)) : (yield* await_0(this.blogFollowing(request), $completion));
  }
  ydh(request) {
    return toBlocking(BlogResourceImpl$blogFollowingBlocking$slambda_0(this, request));
  }
  *zdh(request, $completion) {
    var tmp2 = this.zed(ensureNotNull(request.blogName), '/followers');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowersResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogFollowers(request) {
    return promisify(($completion) => this.zdh(request, $completion));
  }
  *kdh(request, $completion) {
    return this.blogFollowers === protoOf(BlogResourceImpl).blogFollowers ? (yield* this.zdh(request, $completion)) : (yield* await_0(this.blogFollowers(request), $completion));
  }
  adi(request) {
    return toBlocking(BlogResourceImpl$blogFollowersBlocking$slambda_0(this, request));
  }
  *bdi(request, $completion) {
    var ext = request.type == null ? '' : '/' + ensureNotNull(request.type);
    var tmp2 = this.zed(ensureNotNull(request.blogName), '/posts' + ext);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogPosts(request) {
    return promisify(($completion) => this.bdi(request, $completion));
  }
  *ldh(request, $completion) {
    return this.blogPosts === protoOf(BlogResourceImpl).blogPosts ? (yield* this.bdi(request, $completion)) : (yield* await_0(this.blogPosts(request), $completion));
  }
  cdi(request) {
    return toBlocking(BlogResourceImpl$blogPostsBlocking$slambda_0(this, request));
  }
  *ddi(request, $completion) {
    var tmp2 = this.zed(ensureNotNull(request.blogName), '/posts/queue');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogQueuedPosts(request) {
    return promisify(($completion) => this.ddi(request, $completion));
  }
  *edi(request, $completion) {
    return this.blogQueuedPosts === protoOf(BlogResourceImpl).blogQueuedPosts ? (yield* this.ddi(request, $completion)) : (yield* await_0(this.blogQueuedPosts(request), $completion));
  }
  fdi(request) {
    return toBlocking(BlogResourceImpl$blogQueuedPostsBlocking$slambda_0(this, request));
  }
  *gdi(request, $completion) {
    var tmp2 = this.zed(ensureNotNull(request.blogName), '/posts/draft');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogDraftPosts(request) {
    return promisify(($completion) => this.gdi(request, $completion));
  }
  *hdi(request, $completion) {
    return this.blogDraftPosts === protoOf(BlogResourceImpl).blogDraftPosts ? (yield* this.gdi(request, $completion)) : (yield* await_0(this.blogDraftPosts(request), $completion));
  }
  idi(request) {
    return toBlocking(BlogResourceImpl$blogDraftPostsBlocking$slambda_0(this, request));
  }
  *jdi(request, $completion) {
    var tmp2 = this.zed(ensureNotNull(request.blogName), '/posts/submission');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogSubmissions(request) {
    return promisify(($completion) => this.jdi(request, $completion));
  }
  *kdi(request, $completion) {
    return this.blogSubmissions === protoOf(BlogResourceImpl).blogSubmissions ? (yield* this.jdi(request, $completion)) : (yield* await_0(this.blogSubmissions(request), $completion));
  }
  ldi(request) {
    return toBlocking(BlogResourceImpl$blogSubmissionsBlocking$slambda_0(this, request));
  }
  *mdi(request, $completion) {
    var tmp = this.zed(ensureNotNull(request.blogName), '/post');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.mdk();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.mdk();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.mdk();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.mdk();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.mdk();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.mdk();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.mdk();
                } else {
                  throw IllegalArgumentException.a2('Unknown post type.');
                }
              }
            }
          }
        }
      }
    }
    var tmp_1 = tmp_0;
    var tmp_2;
    if (request instanceof BlogPhotoPostRequest) {
      tmp_2 = request.ndm();
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_2 = emptyMap();
    }
    return yield* this.wed(tmp, tmp_1, tmp_2, $completion);
  }
  postCreate(request) {
    return promisify(($completion) => this.mdi(request, $completion));
  }
  *mdh(request, $completion) {
    return this.postCreate === protoOf(BlogResourceImpl).postCreate ? (yield* this.mdi(request, $completion)) : (yield* await_0(this.postCreate(request), $completion));
  }
  ndi(request) {
    return toBlocking(BlogResourceImpl$postCreateBlocking$slambda_0(this, request));
  }
  *odi(request, $completion) {
    var tmp = this.zed(ensureNotNull(request.blogName), '/post/edit');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.mdk();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.mdk();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.mdk();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.mdk();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.mdk();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.mdk();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.mdk();
                } else {
                  throw IllegalArgumentException.a2('Unknown post type.');
                }
              }
            }
          }
        }
      }
    }
    return yield* this.xed(tmp, tmp_0, VOID, $completion);
  }
  postEdit(request) {
    return promisify(($completion) => this.odi(request, $completion));
  }
  *pdi(request, $completion) {
    return this.postEdit === protoOf(BlogResourceImpl).postEdit ? (yield* this.odi(request, $completion)) : (yield* await_0(this.postEdit(request), $completion));
  }
  qdi(request) {
    return toBlocking(BlogResourceImpl$postEditBlocking$slambda_0(this, request));
  }
  *rdi(request, $completion) {
    return yield* this.xed(this.zed(ensureNotNull(request.blogName), '/post/reblog'), request.mdk(), VOID, $completion);
  }
  postReblog(request) {
    return promisify(($completion) => this.rdi(request, $completion));
  }
  *ndh(request, $completion) {
    return this.postReblog === protoOf(BlogResourceImpl).postReblog ? (yield* this.rdi(request, $completion)) : (yield* await_0(this.postReblog(request), $completion));
  }
  sdi(request) {
    return toBlocking(BlogResourceImpl$postReblogBlocking$slambda_0(this, request));
  }
  *tdi(request, $completion) {
    return yield* this.xed(this.zed(ensureNotNull(request.blogName), '/post/delete'), request.mdk(), VOID, $completion);
  }
  postDelete(request) {
    return promisify(($completion) => this.tdi(request, $completion));
  }
  *odh(request, $completion) {
    return this.postDelete === protoOf(BlogResourceImpl).postDelete ? (yield* this.tdi(request, $completion)) : (yield* await_0(this.postDelete(request), $completion));
  }
  udi(request) {
    return toBlocking(BlogResourceImpl$postDeleteBlocking$slambda_0(this, request));
  }
  *vdi(request, $completion) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.zed(ensureNotNull(request.blogName), '/banner' + ext);
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + path).o54(MediaType_getInstance().sed_1).v54(params).u54('api_key', this.red_1.kdg_1).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogBannerResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.oz(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  blogBanner(request) {
    return promisify(($completion) => this.vdi(request, $completion));
  }
  *wdi(request, $completion) {
    return this.blogBanner === protoOf(BlogResourceImpl).blogBanner ? (yield* this.vdi(request, $completion)) : (yield* await_0(this.blogBanner(request), $completion));
  }
  xdi(request) {
    return toBlocking(BlogResourceImpl$blogBannerBlocking$slambda_0(this, request));
  }
  *ydi(request, $completion) {
    return yield* this.yed(this.zed(ensureNotNull(request.blogName), '/info'), request.mdk(), $completion);
  }
  blogUpdateInfo(request) {
    return promisify(($completion) => this.ydi(request, $completion));
  }
  *zdi(request, $completion) {
    return this.blogUpdateInfo === protoOf(BlogResourceImpl).blogUpdateInfo ? (yield* this.ydi(request, $completion)) : (yield* await_0(this.blogUpdateInfo(request), $completion));
  }
  adj(request) {
    return toBlocking(BlogResourceImpl$blogUpdateInfoBlocking$slambda_0(this, request));
  }
  *bdj(request, $completion) {
    return yield* this.xed(this.zed(ensureNotNull(request.blogName), '/post/edit/tags'), request.mdk(), VOID, $completion);
  }
  postEditTags(request) {
    return promisify(($completion) => this.bdj(request, $completion));
  }
  *cdj(request, $completion) {
    return this.postEditTags === protoOf(BlogResourceImpl).postEditTags ? (yield* this.bdj(request, $completion)) : (yield* await_0(this.postEditTags(request), $completion));
  }
  ddj(request) {
    return toBlocking(BlogResourceImpl$postEditTagsBlocking$slambda_0(this, request));
  }
  *edj(request, $completion) {
    return yield* this.wed(this.zed(ensureNotNull(request.blogName), '/post/edit'), request.mdk(), request.toFileMap(), $completion);
  }
  postUpdate(request) {
    return promisify(($completion) => this.edj(request, $completion));
  }
  *fdj(request, $completion) {
    return this.postUpdate === protoOf(BlogResourceImpl).postUpdate ? (yield* this.edj(request, $completion)) : (yield* await_0(this.postUpdate(request), $completion));
  }
  gdj(request) {
    return toBlocking(BlogResourceImpl$postUpdateBlocking$slambda_0(this, request));
  }
}
class TaggedResourceImpl$taggedBlocking$slambda {
  constructor(this$0, $request) {
    this.zef_1 = this$0;
    this.aeg_1 = $request;
  }
  *beg($this$toBlocking, $completion) {
    return yield* this.zef_1.hdj(this.aeg_1, $completion);
  }
  wd(p1, $completion) {
    return this.beg((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TaggedResourceImpl extends AbstractResourceImpl {
  *idj(request, $completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + '/tagged').o54(MediaType_getInstance().sed_1).v54(params).u54('api_key', this.red_1.kdg_1).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Post), arrayOf([]), false))]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  tagged(request) {
    return promisify(($completion) => this.idj(request, $completion));
  }
  *hdj(request, $completion) {
    return this.tagged === protoOf(TaggedResourceImpl).tagged ? (yield* this.idj(request, $completion)) : (yield* await_0(this.tagged(request), $completion));
  }
  jdj(request) {
    return toBlocking(TaggedResourceImpl$taggedBlocking$slambda_0(this, request));
  }
}
class UserResourceImpl$userBlocking$slambda {
  constructor(this$0) {
    this.deg_1 = this$0;
  }
  *eeg($this$toBlocking, $completion) {
    return yield* this.deg_1.kdj($completion);
  }
  wd(p1, $completion) {
    return this.eeg((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$userDashboardBlocking$slambda {
  constructor(this$0, $request) {
    this.feg_1 = this$0;
    this.geg_1 = $request;
  }
  *heg($this$toBlocking, $completion) {
    return yield* this.feg_1.ldj(this.geg_1, $completion);
  }
  wd(p1, $completion) {
    return this.heg((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$userFollowingBlocking$slambda {
  constructor(this$0, $request) {
    this.ieg_1 = this$0;
    this.jeg_1 = $request;
  }
  *keg($this$toBlocking, $completion) {
    return yield* this.ieg_1.mdj(this.jeg_1, $completion);
  }
  wd(p1, $completion) {
    return this.keg((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$userLikesBlocking$slambda {
  constructor(this$0, $request) {
    this.leg_1 = this$0;
    this.meg_1 = $request;
  }
  *oeg($this$toBlocking, $completion) {
    return yield* this.leg_1.ydj(this.meg_1, $completion);
  }
  wd(p1, $completion) {
    return this.oeg((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$likeBlocking$slambda {
  constructor(this$0, $request) {
    this.peg_1 = this$0;
    this.qeg_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.peg_1.ndj(this.qeg_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$unlikeBlocking$slambda {
  constructor(this$0, $request) {
    this.reg_1 = this$0;
    this.seg_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.reg_1.odj(this.seg_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$followBlocking$slambda {
  constructor(this$0, $request) {
    this.teg_1 = this$0;
    this.ueg_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.teg_1.pdj(this.ueg_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$unfollowBlocking$slambda {
  constructor(this$0, $request) {
    this.veg_1 = this$0;
    this.weg_1 = $request;
  }
  *hef($this$toBlocking, $completion) {
    return yield* this.veg_1.qdj(this.weg_1, $completion);
  }
  wd(p1, $completion) {
    return this.hef((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl extends AbstractResourceImpl {
  *rdj($completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var path = '/user/info';
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + path).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.oz(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  user() {
    return promisify(($completion) => this.rdj($completion));
  }
  *kdj($completion) {
    return this.user === protoOf(UserResourceImpl).user ? (yield* this.rdj($completion)) : (yield* await_0(this.user(), $completion));
  }
  sdj() {
    return toBlocking(UserResourceImpl$userBlocking$slambda_0(this));
  }
  *tdj(request, $completion) {
    var tmp2 = '/user/dashboard';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserDashboardResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userDashboard(request) {
    return promisify(($completion) => this.tdj(request, $completion));
  }
  *ldj(request, $completion) {
    return this.userDashboard === protoOf(UserResourceImpl).userDashboard ? (yield* this.tdj(request, $completion)) : (yield* await_0(this.userDashboard(request), $completion));
  }
  udj(request) {
    return toBlocking(UserResourceImpl$userDashboardBlocking$slambda_0(this, request));
  }
  *vdj(request, $completion) {
    var tmp2 = '/user/following';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserFollowingResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userFollowing(request) {
    return promisify(($completion) => this.vdj(request, $completion));
  }
  *mdj(request, $completion) {
    return this.userFollowing === protoOf(UserResourceImpl).userFollowing ? (yield* this.vdj(request, $completion)) : (yield* await_0(this.userFollowing(request), $completion));
  }
  wdj(request) {
    return toBlocking(UserResourceImpl$userFollowingBlocking$slambda_0(this, request));
  }
  *xdj(request, $completion) {
    var tmp2 = '/user/likes';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.mdk();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54('https://api.tumblr.com/v2' + tmp2).p54('Authorization', this.red_1.odg()).o54(MediaType_getInstance().sed_1).v54(params).y54($completion);
        var containsArg = response.d55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.gee_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserLikesResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.h55());
          break $l$block;
        }
        throw TumblrException.vdg(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userLikes(request) {
    return promisify(($completion) => this.xdj(request, $completion));
  }
  *ydj(request, $completion) {
    return this.userLikes === protoOf(UserResourceImpl).userLikes ? (yield* this.xdj(request, $completion)) : (yield* await_0(this.userLikes(request), $completion));
  }
  zdj(request) {
    return toBlocking(UserResourceImpl$userLikesBlocking$slambda_0(this, request));
  }
  *adk(request, $completion) {
    return yield* this.xed('/user/like', request.mdk(), VOID, $completion);
  }
  like(request) {
    return promisify(($completion) => this.adk(request, $completion));
  }
  *ndj(request, $completion) {
    return this.like === protoOf(UserResourceImpl).like ? (yield* this.adk(request, $completion)) : (yield* await_0(this.like(request), $completion));
  }
  bdk(request) {
    return toBlocking(UserResourceImpl$likeBlocking$slambda_0(this, request));
  }
  *cdk(request, $completion) {
    return yield* this.xed('/user/unlike', request.mdk(), VOID, $completion);
  }
  unlike(request) {
    return promisify(($completion) => this.cdk(request, $completion));
  }
  *odj(request, $completion) {
    return this.unlike === protoOf(UserResourceImpl).unlike ? (yield* this.cdk(request, $completion)) : (yield* await_0(this.unlike(request), $completion));
  }
  ddk(request) {
    return toBlocking(UserResourceImpl$unlikeBlocking$slambda_0(this, request));
  }
  *edk(request, $completion) {
    return yield* this.xed('/user/follow', request.mdk(), VOID, $completion);
  }
  follow(request) {
    return promisify(($completion) => this.edk(request, $completion));
  }
  *pdj(request, $completion) {
    return this.follow === protoOf(UserResourceImpl).follow ? (yield* this.edk(request, $completion)) : (yield* await_0(this.follow(request), $completion));
  }
  fdk(request) {
    return toBlocking(UserResourceImpl$followBlocking$slambda_0(this, request));
  }
  *gdk(request, $completion) {
    return yield* this.xed('/user/unfollow', request.mdk(), VOID, $completion);
  }
  unfollow(request) {
    return promisify(($completion) => this.gdk(request, $completion));
  }
  *qdj(request, $completion) {
    return this.unfollow === protoOf(UserResourceImpl).unfollow ? (yield* this.gdk(request, $completion)) : (yield* await_0(this.unfollow(request), $completion));
  }
  hdk(request) {
    return toBlocking(UserResourceImpl$unfollowBlocking$slambda_0(this, request));
  }
}
class Json_0 {
  constructor() {
    Json_instance = this;
    var tmp = this;
    tmp.gee_1 = Json(VOID, Json$json$lambda);
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.sed_1 = Application_getInstance().a3t_1.toString();
  }
}
class PostSerializer extends JsonContentPolymorphicSerializer {
  constructor() {
    PostSerializer_instance = null;
    super(getKClass(Post));
    PostSerializer_instance = this;
  }
  u1n(element) {
    var type = get_jsonObject(element).pi('type');
    var tmp;
    var tmp_0;
    if (type instanceof JsonPrimitive) {
      tmp_0 = type.w1n();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      switch (type.x1n()) {
        case 'text':
          tmp = Companion_getInstance_28().n1o();
          break;
        case 'photo':
          tmp = Companion_getInstance_25().n1o();
          break;
        case 'quote':
          tmp = Companion_getInstance_27().n1o();
          break;
        case 'link':
          tmp = Companion_getInstance_24().n1o();
          break;
        case 'video':
          tmp = Companion_getInstance_29().n1o();
          break;
        case 'audio':
          tmp = Companion_getInstance_22().n1o();
          break;
        case 'chat':
          tmp = Companion_getInstance_23().n1o();
          break;
        case 'answer':
          tmp = Companion_getInstance_21().n1o();
          break;
        case 'postcard':
          tmp = Companion_getInstance_26().n1o();
          break;
        default:
          tmp = Companion_instance_19.n1o();
          break;
      }
    } else {
      tmp = Companion_instance_19.n1o();
    }
    return tmp;
  }
}
//endregion
function init_work_socialhub_ktumblr_TumblrException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.tdg_1);
  _this__u8e3s4.rdg_1 = null;
  _this__u8e3s4.sdg_1 = null;
}
var TumblrFactory_instance;
function TumblrFactory_getInstance() {
  return TumblrFactory_instance;
}
function *oAuth2Token$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.cdh) ? (yield* _this__u8e3s4.cdh(request, $completion)) : (yield* await_0(_this__u8e3s4.oAuth2Token(request), $completion));
}
function *oAuth2TokenRefresh$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ddh) ? (yield* _this__u8e3s4.ddh(request, $completion)) : (yield* await_0(_this__u8e3s4.oAuth2TokenRefresh(request), $completion));
}
function *blogInfo$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.idh) ? (yield* _this__u8e3s4.idh(request, $completion)) : (yield* await_0(_this__u8e3s4.blogInfo(request), $completion));
}
function *blogLikes$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.jdh) ? (yield* _this__u8e3s4.jdh(request, $completion)) : (yield* await_0(_this__u8e3s4.blogLikes(request), $completion));
}
function *blogFollowers$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.kdh) ? (yield* _this__u8e3s4.kdh(request, $completion)) : (yield* await_0(_this__u8e3s4.blogFollowers(request), $completion));
}
function *blogPosts$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ldh) ? (yield* _this__u8e3s4.ldh(request, $completion)) : (yield* await_0(_this__u8e3s4.blogPosts(request), $completion));
}
function *postCreate$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.mdh) ? (yield* _this__u8e3s4.mdh(request, $completion)) : (yield* await_0(_this__u8e3s4.postCreate(request), $completion));
}
function *postReblog$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ndh) ? (yield* _this__u8e3s4.ndh(request, $completion)) : (yield* await_0(_this__u8e3s4.postReblog(request), $completion));
}
function *postDelete$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.odh) ? (yield* _this__u8e3s4.odh(request, $completion)) : (yield* await_0(_this__u8e3s4.postDelete(request), $completion));
}
function *tagged$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.hdj) ? (yield* _this__u8e3s4.hdj(request, $completion)) : (yield* await_0(_this__u8e3s4.tagged(request), $completion));
}
function *user$virtualSuspendBridge(_this__u8e3s4, $completion) {
  return jsIsFunction(_this__u8e3s4.kdj) ? (yield* _this__u8e3s4.kdj($completion)) : (yield* await_0(_this__u8e3s4.user(), $completion));
}
function *userDashboard$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ldj) ? (yield* _this__u8e3s4.ldj(request, $completion)) : (yield* await_0(_this__u8e3s4.userDashboard(request), $completion));
}
function *userFollowing$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.mdj) ? (yield* _this__u8e3s4.mdj(request, $completion)) : (yield* await_0(_this__u8e3s4.userFollowing(request), $completion));
}
function *like$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ndj) ? (yield* _this__u8e3s4.ndj(request, $completion)) : (yield* await_0(_this__u8e3s4.like(request), $completion));
}
function *unlike$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.odj) ? (yield* _this__u8e3s4.odj(request, $completion)) : (yield* await_0(_this__u8e3s4.unlike(request), $completion));
}
function *follow$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.pdj) ? (yield* _this__u8e3s4.pdj(request, $completion)) : (yield* await_0(_this__u8e3s4.follow(request), $completion));
}
function *unfollow$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.qdj) ? (yield* _this__u8e3s4.qdj(request, $completion)) : (yield* await_0(_this__u8e3s4.unfollow(request), $completion));
}
function addParam_0(_this__u8e3s4, key, value) {
  if (value == null)
    return Unit_instance;
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.i4(key, value);
}
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var Companion_instance_0;
function Companion_getInstance_1() {
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer_0();
  return $serializer_instance;
}
var Companion_instance_1;
function Companion_getInstance_2() {
  return Companion_instance_1;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_1();
  return $serializer_instance_0;
}
var Companion_instance_2;
function Companion_getInstance_3() {
  return Companion_instance_2;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_2();
  return $serializer_instance_1;
}
function BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a() {
  return new ReferenceArraySerializer(getKClass(FollowerUser), $serializer_getInstance_34());
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
    new $serializer_3();
  return $serializer_instance_2;
}
function BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi() {
  return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_14());
}
var Companion_instance_4;
function Companion_getInstance_5() {
  if (Companion_instance_4 === VOID)
    new Companion_4();
  return Companion_instance_4;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_4();
  return $serializer_instance_3;
}
var Companion_instance_5;
function Companion_getInstance_6() {
  return Companion_instance_5;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_5();
  return $serializer_instance_4;
}
function BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9() {
  return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
}
var Companion_instance_6;
function Companion_getInstance_7() {
  if (Companion_instance_6 === VOID)
    new Companion_6();
  return Companion_instance_6;
}
var $serializer_instance_5;
function $serializer_getInstance_5() {
  if ($serializer_instance_5 === VOID)
    new $serializer_6();
  return $serializer_instance_5;
}
function BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0() {
  return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
}
var Companion_instance_7;
function Companion_getInstance_8() {
  if (Companion_instance_7 === VOID)
    new Companion_7();
  return Companion_instance_7;
}
var $serializer_instance_6;
function $serializer_getInstance_6() {
  if ($serializer_instance_6 === VOID)
    new $serializer_7();
  return $serializer_instance_6;
}
var Companion_instance_8;
function Companion_getInstance_9() {
  return Companion_instance_8;
}
var $serializer_instance_7;
function $serializer_getInstance_7() {
  if ($serializer_instance_7 === VOID)
    new $serializer_8();
  return $serializer_instance_7;
}
function UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w() {
  return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
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
    new $serializer_9();
  return $serializer_instance_8;
}
function UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5() {
  return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_14());
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
    new $serializer_10();
  return $serializer_instance_9;
}
function UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0() {
  return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
}
var Companion_instance_11;
function Companion_getInstance_12() {
  if (Companion_instance_11 === VOID)
    new Companion_11();
  return Companion_instance_11;
}
var $serializer_instance_10;
function $serializer_getInstance_10() {
  if ($serializer_instance_10 === VOID)
    new $serializer_11();
  return $serializer_instance_10;
}
var Companion_instance_12;
function Companion_getInstance_13() {
  return Companion_instance_12;
}
var $serializer_instance_11;
function $serializer_getInstance_11() {
  if ($serializer_instance_11 === VOID)
    new $serializer_12();
  return $serializer_instance_11;
}
var PhotoType_SOURCE_instance;
var PhotoType_FILE_instance;
function values() {
  return [PhotoType_SOURCE_getInstance(), PhotoType_FILE_getInstance()];
}
function valueOf(value) {
  switch (value) {
    case 'SOURCE':
      return PhotoType_SOURCE_getInstance();
    case 'FILE':
      return PhotoType_FILE_getInstance();
    default:
      PhotoType_initEntries();
      THROW_IAE('No enum constant work.socialhub.ktumblr.define.PhotoType.' + value);
      break;
  }
}
var PhotoType_entriesInitialized;
function PhotoType_initEntries() {
  if (PhotoType_entriesInitialized)
    return Unit_instance;
  PhotoType_entriesInitialized = true;
  PhotoType_SOURCE_instance = new PhotoType('SOURCE', 0, 'source');
  PhotoType_FILE_instance = new PhotoType('FILE', 1, 'data');
}
function PhotoType_SOURCE_getInstance() {
  PhotoType_initEntries();
  return PhotoType_SOURCE_instance;
}
function PhotoType_FILE_getInstance() {
  PhotoType_initEntries();
  return PhotoType_FILE_instance;
}
var PostType_TEXT_instance;
var PostType_PHOTO_instance;
var PostType_QUOTE_instance;
var PostType_LINK_instance;
var PostType_CHAT_instance;
var PostType_AUDIO_instance;
var PostType_VIDEO_instance;
var PostType_ANSWER_instance;
var PostType_POSTCARD_instance;
var PostType_UNKNOWN_instance;
function values_0() {
  return [PostType_TEXT_getInstance(), PostType_PHOTO_getInstance(), PostType_QUOTE_getInstance(), PostType_LINK_getInstance(), PostType_CHAT_getInstance(), PostType_AUDIO_getInstance(), PostType_VIDEO_getInstance(), PostType_ANSWER_getInstance(), PostType_POSTCARD_getInstance(), PostType_UNKNOWN_getInstance()];
}
function valueOf_0(value) {
  switch (value) {
    case 'TEXT':
      return PostType_TEXT_getInstance();
    case 'PHOTO':
      return PostType_PHOTO_getInstance();
    case 'QUOTE':
      return PostType_QUOTE_getInstance();
    case 'LINK':
      return PostType_LINK_getInstance();
    case 'CHAT':
      return PostType_CHAT_getInstance();
    case 'AUDIO':
      return PostType_AUDIO_getInstance();
    case 'VIDEO':
      return PostType_VIDEO_getInstance();
    case 'ANSWER':
      return PostType_ANSWER_getInstance();
    case 'POSTCARD':
      return PostType_POSTCARD_getInstance();
    case 'UNKNOWN':
      return PostType_UNKNOWN_getInstance();
    default:
      PostType_initEntries();
      THROW_IAE('No enum constant work.socialhub.ktumblr.define.PostType.' + value);
      break;
  }
}
var PostType_entriesInitialized;
function PostType_initEntries() {
  if (PostType_entriesInitialized)
    return Unit_instance;
  PostType_entriesInitialized = true;
  PostType_TEXT_instance = new PostType('TEXT', 0, 'text');
  PostType_PHOTO_instance = new PostType('PHOTO', 1, 'photo');
  PostType_QUOTE_instance = new PostType('QUOTE', 2, 'quote');
  PostType_LINK_instance = new PostType('LINK', 3, 'link');
  PostType_CHAT_instance = new PostType('CHAT', 4, 'chat');
  PostType_AUDIO_instance = new PostType('AUDIO', 5, 'audio');
  PostType_VIDEO_instance = new PostType('VIDEO', 6, 'video');
  PostType_ANSWER_instance = new PostType('ANSWER', 7, 'answer');
  PostType_POSTCARD_instance = new PostType('POSTCARD', 8, 'postcard');
  PostType_UNKNOWN_instance = new PostType('UNKNOWN', 9, 'unknown');
}
function PostType_TEXT_getInstance() {
  PostType_initEntries();
  return PostType_TEXT_instance;
}
function PostType_PHOTO_getInstance() {
  PostType_initEntries();
  return PostType_PHOTO_instance;
}
function PostType_QUOTE_getInstance() {
  PostType_initEntries();
  return PostType_QUOTE_instance;
}
function PostType_LINK_getInstance() {
  PostType_initEntries();
  return PostType_LINK_instance;
}
function PostType_CHAT_getInstance() {
  PostType_initEntries();
  return PostType_CHAT_instance;
}
function PostType_AUDIO_getInstance() {
  PostType_initEntries();
  return PostType_AUDIO_instance;
}
function PostType_VIDEO_getInstance() {
  PostType_initEntries();
  return PostType_VIDEO_instance;
}
function PostType_ANSWER_getInstance() {
  PostType_initEntries();
  return PostType_ANSWER_instance;
}
function PostType_POSTCARD_getInstance() {
  PostType_initEntries();
  return PostType_POSTCARD_instance;
}
function PostType_UNKNOWN_getInstance() {
  PostType_initEntries();
  return PostType_UNKNOWN_instance;
}
var Companion_instance_13;
function Companion_getInstance_14() {
  return Companion_instance_13;
}
var $serializer_instance_12;
function $serializer_getInstance_12() {
  if ($serializer_instance_12 === VOID)
    new $serializer_13();
  return $serializer_instance_12;
}
var Companion_instance_14;
function Companion_getInstance_15() {
  return Companion_instance_14;
}
var $serializer_instance_13;
function $serializer_getInstance_13() {
  if ($serializer_instance_13 === VOID)
    new $serializer_14();
  return $serializer_instance_13;
}
function Blog$Companion$$childSerializers$_anonymous__tmgjug() {
  return new ReferenceArraySerializer(getKClass(BlogAvatar), $serializer_getInstance_15());
}
var Companion_instance_15;
function Companion_getInstance_16() {
  if (Companion_instance_15 === VOID)
    new Companion_15();
  return Companion_instance_15;
}
var $serializer_instance_14;
function $serializer_getInstance_14() {
  if ($serializer_instance_14 === VOID)
    new $serializer_15();
  return $serializer_instance_14;
}
var Companion_instance_16;
function Companion_getInstance_17() {
  return Companion_instance_16;
}
var $serializer_instance_15;
function $serializer_getInstance_15() {
  if ($serializer_instance_15 === VOID)
    new $serializer_16();
  return $serializer_instance_15;
}
var Companion_instance_17;
function Companion_getInstance_18() {
  return Companion_instance_17;
}
var $serializer_instance_16;
function $serializer_getInstance_16() {
  if ($serializer_instance_16 === VOID)
    new $serializer_17();
  return $serializer_instance_16;
}
var Companion_instance_18;
function Companion_getInstance_19() {
  return Companion_instance_18;
}
var $serializer_instance_17;
function $serializer_getInstance_17() {
  if ($serializer_instance_17 === VOID)
    new $serializer_18();
  return $serializer_instance_17;
}
var Companion_instance_19;
function Companion_getInstance_20() {
  return Companion_instance_19;
}
function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
}
function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
}
var Companion_instance_20;
function Companion_getInstance_21() {
  if (Companion_instance_20 === VOID)
    new Companion_20();
  return Companion_instance_20;
}
var $serializer_instance_18;
function $serializer_getInstance_18() {
  if ($serializer_instance_18 === VOID)
    new $serializer_19();
  return $serializer_instance_18;
}
function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
}
function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
}
var Companion_instance_21;
function Companion_getInstance_22() {
  if (Companion_instance_21 === VOID)
    new Companion_21();
  return Companion_instance_21;
}
var $serializer_instance_19;
function $serializer_getInstance_19() {
  if ($serializer_instance_19 === VOID)
    new $serializer_20();
  return $serializer_instance_19;
}
function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
}
function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
}
function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2() {
  return new ReferenceArraySerializer(getKClass(Dialogue), $serializer_getInstance_27());
}
var Companion_instance_22;
function Companion_getInstance_23() {
  if (Companion_instance_22 === VOID)
    new Companion_22();
  return Companion_instance_22;
}
var $serializer_instance_20;
function $serializer_getInstance_20() {
  if ($serializer_instance_20 === VOID)
    new $serializer_21();
  return $serializer_instance_20;
}
function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
}
function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
}
var Companion_instance_23;
function Companion_getInstance_24() {
  if (Companion_instance_23 === VOID)
    new Companion_23();
  return Companion_instance_23;
}
var $serializer_instance_21;
function $serializer_getInstance_21() {
  if ($serializer_instance_21 === VOID)
    new $serializer_22();
  return $serializer_instance_21;
}
function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
}
function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
}
function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2() {
  return new ReferenceArraySerializer(getKClass(Photo), $serializer_getInstance_28());
}
var Companion_instance_24;
function Companion_getInstance_25() {
  if (Companion_instance_24 === VOID)
    new Companion_24();
  return Companion_instance_24;
}
var $serializer_instance_22;
function $serializer_getInstance_22() {
  if ($serializer_instance_22 === VOID)
    new $serializer_23();
  return $serializer_instance_22;
}
function LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
}
function LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
}
var Companion_instance_25;
function Companion_getInstance_26() {
  if (Companion_instance_25 === VOID)
    new Companion_25();
  return Companion_instance_25;
}
var $serializer_instance_23;
function $serializer_getInstance_23() {
  if ($serializer_instance_23 === VOID)
    new $serializer_24();
  return $serializer_instance_23;
}
function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
}
function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
}
var Companion_instance_26;
function Companion_getInstance_27() {
  if (Companion_instance_26 === VOID)
    new Companion_26();
  return Companion_instance_26;
}
var $serializer_instance_24;
function $serializer_getInstance_24() {
  if ($serializer_instance_24 === VOID)
    new $serializer_25();
  return $serializer_instance_24;
}
function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
}
function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
}
var Companion_instance_27;
function Companion_getInstance_28() {
  if (Companion_instance_27 === VOID)
    new Companion_27();
  return Companion_instance_27;
}
var $serializer_instance_25;
function $serializer_getInstance_25() {
  if ($serializer_instance_25 === VOID)
    new $serializer_26();
  return $serializer_instance_25;
}
function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
}
function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
}
function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2() {
  return new ReferenceArraySerializer(getKClass(Video), $serializer_getInstance_30());
}
var Companion_instance_28;
function Companion_getInstance_29() {
  if (Companion_instance_28 === VOID)
    new Companion_28();
  return Companion_instance_28;
}
var $serializer_instance_26;
function $serializer_getInstance_26() {
  if ($serializer_instance_26 === VOID)
    new $serializer_27();
  return $serializer_instance_26;
}
var Companion_instance_29;
function Companion_getInstance_30() {
  return Companion_instance_29;
}
var $serializer_instance_27;
function $serializer_getInstance_27() {
  if ($serializer_instance_27 === VOID)
    new $serializer_28();
  return $serializer_instance_27;
}
function Photo$Companion$$childSerializers$_anonymous__7997i0() {
  return new ReferenceArraySerializer(getKClass(PhotoSize), $serializer_getInstance_29());
}
var Companion_instance_30;
function Companion_getInstance_31() {
  if (Companion_instance_30 === VOID)
    new Companion_30();
  return Companion_instance_30;
}
var $serializer_instance_28;
function $serializer_getInstance_28() {
  if ($serializer_instance_28 === VOID)
    new $serializer_29();
  return $serializer_instance_28;
}
var Companion_instance_31;
function Companion_getInstance_32() {
  return Companion_instance_31;
}
var $serializer_instance_29;
function $serializer_getInstance_29() {
  if ($serializer_instance_29 === VOID)
    new $serializer_30();
  return $serializer_instance_29;
}
var Companion_instance_32;
function Companion_getInstance_33() {
  return Companion_instance_32;
}
var $serializer_instance_30;
function $serializer_getInstance_30() {
  if ($serializer_instance_30 === VOID)
    new $serializer_31();
  return $serializer_instance_30;
}
var Companion_instance_33;
function Companion_getInstance_34() {
  return Companion_instance_33;
}
var $serializer_instance_31;
function $serializer_getInstance_31() {
  if ($serializer_instance_31 === VOID)
    new $serializer_32();
  return $serializer_instance_31;
}
var Companion_instance_34;
function Companion_getInstance_35() {
  return Companion_instance_34;
}
var $serializer_instance_32;
function $serializer_getInstance_32() {
  if ($serializer_instance_32 === VOID)
    new $serializer_33();
  return $serializer_instance_32;
}
var Companion_instance_35;
function Companion_getInstance_36() {
  return Companion_instance_35;
}
var $serializer_instance_33;
function $serializer_getInstance_33() {
  if ($serializer_instance_33 === VOID)
    new $serializer_34();
  return $serializer_instance_33;
}
var Companion_instance_36;
function Companion_getInstance_37() {
  return Companion_instance_36;
}
var $serializer_instance_34;
function $serializer_getInstance_34() {
  if ($serializer_instance_34 === VOID)
    new $serializer_35();
  return $serializer_instance_34;
}
function User$Companion$$childSerializers$_anonymous__6nf9sv() {
  return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_14());
}
var Companion_instance_37;
function Companion_getInstance_38() {
  if (Companion_instance_37 === VOID)
    new Companion_37();
  return Companion_instance_37;
}
var $serializer_instance_35;
function $serializer_getInstance_35() {
  if ($serializer_instance_35 === VOID)
    new $serializer_36();
  return $serializer_instance_35;
}
function *proceedUnit($this, body, $completion) {
  try {
    var response = yield* body($completion);
    var containsArg = response.d55_1;
    if (200 <= containsArg ? containsArg <= 299 : false) {
      return new ResponseUnit(response.h55());
    }
    throw TumblrException.vdg(response.d55_1, response.h55());
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
      throw tmp0_elvis_lhs == null ? TumblrException.udg(e) : tmp0_elvis_lhs;
    } else {
      throw $p;
    }
  }
}
function blogUrl($this, blogName) {
  return contains(blogName, '.') ? blogName : blogName + '.tumblr.com';
}
function AbstractResourceImpl$oauthPostUnit$slambda_0($path, this$0, $params, $files) {
  var i = new AbstractResourceImpl$oauthPostUnit$slambda($path, this$0, $params, $files);
  var l = ($completion) => i.h6y($completion);
  l.$arity = 0;
  return l;
}
function AbstractResourceImpl$oauthPutUnit$slambda_0($path, this$0, $params) {
  var i = new AbstractResourceImpl$oauthPutUnit$slambda($path, this$0, $params);
  var l = ($completion) => i.h6y($completion);
  l.$arity = 0;
  return l;
}
function AuthResourceImpl$oAuth2TokenBlocking$slambda_0(this$0, $request) {
  var i = new AuthResourceImpl$oAuth2TokenBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.cee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda_0(this$0, $request) {
  var i = new AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.cee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogInfoBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogInfoBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.jee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogAvatarBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogAvatarBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.mee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogLikesBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogLikesBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.pee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogFollowingBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogFollowingBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.see($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogFollowersBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogFollowersBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.vee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogPostsBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogPostsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.yee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogQueuedPostsBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogQueuedPostsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.yee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogDraftPostsBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogDraftPostsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.yee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogSubmissionsBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogSubmissionsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.yee($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$postCreateBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$postCreateBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$postEditBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$postEditBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$postReblogBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$postReblogBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$postDeleteBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$postDeleteBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogBannerBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogBannerBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.qef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogUpdateInfoBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$blogUpdateInfoBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$postEditTagsBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$postEditTagsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$postUpdateBlocking$slambda_0(this$0, $request) {
  var i = new BlogResourceImpl$postUpdateBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TaggedResourceImpl$taggedBlocking$slambda_0(this$0, $request) {
  var i = new TaggedResourceImpl$taggedBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.beg($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$userBlocking$slambda_0(this$0) {
  var i = new UserResourceImpl$userBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.eeg($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$userDashboardBlocking$slambda_0(this$0, $request) {
  var i = new UserResourceImpl$userDashboardBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.heg($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$userFollowingBlocking$slambda_0(this$0, $request) {
  var i = new UserResourceImpl$userFollowingBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.keg($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$userLikesBlocking$slambda_0(this$0, $request) {
  var i = new UserResourceImpl$userLikesBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.oeg($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$likeBlocking$slambda_0(this$0, $request) {
  var i = new UserResourceImpl$likeBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$unlikeBlocking$slambda_0(this$0, $request) {
  var i = new UserResourceImpl$unlikeBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$followBlocking$slambda_0(this$0, $request) {
  var i = new UserResourceImpl$followBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$unfollowBlocking$slambda_0(this$0, $request) {
  var i = new UserResourceImpl$unfollowBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hef($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function Json$json$lambda($this$Json) {
  $this$Json.g1m_1 = false;
  $this$Json.f1m_1 = true;
  $this$Json.h1m_1 = true;
  var tmp = $this$Json;
  // Inline function 'kotlinx.serialization.modules.SerializersModule' call
  var builder = new SerializersModuleBuilder();
  builder.k1k(PrimitiveClasses_getInstance().ag(), AnySerializer_getInstance());
  builder.k1k(getKClass(Post), PostSerializer_getInstance());
  tmp.w1m_1 = builder.m18();
  return Unit_instance;
}
var Json_instance;
function Json_getInstance() {
  if (Json_instance === VOID)
    new Json_0();
  return Json_instance;
}
var MediaType_instance;
function MediaType_getInstance() {
  if (MediaType_instance === VOID)
    new MediaType();
  return MediaType_instance;
}
var PostSerializer_instance;
function PostSerializer_getInstance() {
  if (PostSerializer_instance === VOID)
    new PostSerializer();
  return PostSerializer_instance;
}
function toBlocking(block) {
  throw UnsupportedOperationException.la('Blocking operations are not supported in JavaScript. Please use suspend functions or Promise-based APIs instead.');
}
//region block: post-declaration
initMetadataForInterface(Tumblr, 'Tumblr');
initMetadataForClass(TumblrAuth, 'TumblrAuth');
initMetadataForClass(TumblrException, 'TumblrException');
initMetadataForObject(TumblrFactory, 'TumblrFactory');
initMetadataForClass(TumblrImpl, 'TumblrImpl', VOID, VOID, [Tumblr]);
initMetadataForInterface(AuthResource, 'AuthResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(BlogResource, 'BlogResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(TaggedResource, 'TaggedResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(UserResource, 'UserResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForClass(FileRequest, 'FileRequest');
initMetadataForInterface(MapRequest, 'MapRequest');
protoOf(AuthAuthorizeUrlRequest).idk = addParam;
initMetadataForClass(AuthAuthorizeUrlRequest, 'AuthAuthorizeUrlRequest', AuthAuthorizeUrlRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRefreshRequest).idk = addParam;
initMetadataForClass(AuthOAuth2TokenRefreshRequest, 'AuthOAuth2TokenRefreshRequest', AuthOAuth2TokenRefreshRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRequest).idk = addParam;
initMetadataForClass(AuthOAuth2TokenRequest, 'AuthOAuth2TokenRequest', AuthOAuth2TokenRequest, VOID, [MapRequest]);
initMetadataForClass(BlogAvatarRequest, 'BlogAvatarRequest', BlogAvatarRequest);
initMetadataForClass(BlogBannerRequest, 'BlogBannerRequest', BlogBannerRequest);
protoOf(BlogDraftsRequest).idk = addParam;
initMetadataForClass(BlogDraftsRequest, 'BlogDraftsRequest', BlogDraftsRequest, VOID, [MapRequest]);
protoOf(BlogFollowersRequest).idk = addParam;
initMetadataForClass(BlogFollowersRequest, 'BlogFollowersRequest', BlogFollowersRequest, VOID, [MapRequest]);
protoOf(BlogFollowingRequest).idk = addParam;
initMetadataForClass(BlogFollowingRequest, 'BlogFollowingRequest', BlogFollowingRequest, VOID, [MapRequest]);
initMetadataForClass(BlogInfoRequest, 'BlogInfoRequest', BlogInfoRequest);
protoOf(BlogLikesRequest).idk = addParam;
initMetadataForClass(BlogLikesRequest, 'BlogLikesRequest', BlogLikesRequest, VOID, [MapRequest]);
protoOf(BlogPostsRequest).idk = addParam;
initMetadataForClass(BlogPostsRequest, 'BlogPostsRequest', BlogPostsRequest, VOID, [MapRequest]);
protoOf(BlogQueueRequest).idk = addParam;
initMetadataForClass(BlogQueueRequest, 'BlogQueueRequest', BlogQueueRequest, VOID, [MapRequest]);
protoOf(BlogSubmissionsRequest).idk = addParam;
initMetadataForClass(BlogSubmissionsRequest, 'BlogSubmissionsRequest', BlogSubmissionsRequest, VOID, [MapRequest]);
protoOf(BlogUpdateInfoRequest).idk = addParam;
initMetadataForClass(BlogUpdateInfoRequest, 'BlogUpdateInfoRequest', BlogUpdateInfoRequest, VOID, [MapRequest]);
initMetadataForClass(BlogPostRequest, 'BlogPostRequest', BlogPostRequest);
protoOf(BlogAudioPostRequest).idk = addParam;
initMetadataForClass(BlogAudioPostRequest, 'BlogAudioPostRequest', BlogAudioPostRequest, VOID, [MapRequest]);
protoOf(BlogChatPostRequest).idk = addParam;
initMetadataForClass(BlogChatPostRequest, 'BlogChatPostRequest', BlogChatPostRequest, VOID, [MapRequest]);
protoOf(BlogDeleteRequest).idk = addParam;
initMetadataForClass(BlogDeleteRequest, 'BlogDeleteRequest', BlogDeleteRequest, VOID, [MapRequest]);
protoOf(BlogLinkPostRequest).idk = addParam;
initMetadataForClass(BlogLinkPostRequest, 'BlogLinkPostRequest', BlogLinkPostRequest, VOID, [MapRequest]);
protoOf(BlogPhotoPostRequest).idk = addParam;
initMetadataForClass(BlogPhotoPostRequest, 'BlogPhotoPostRequest', BlogPhotoPostRequest, VOID, [MapRequest]);
protoOf(BlogPostEditTagsRequest).idk = addParam;
initMetadataForClass(BlogPostEditTagsRequest, 'BlogPostEditTagsRequest', BlogPostEditTagsRequest, VOID, [MapRequest]);
protoOf(BlogPostUpdateRequest).idk = addParam;
initMetadataForClass(BlogPostUpdateRequest, 'BlogPostUpdateRequest', BlogPostUpdateRequest, VOID, [MapRequest]);
protoOf(BlogQuotePostRequest).idk = addParam;
initMetadataForClass(BlogQuotePostRequest, 'BlogQuotePostRequest', BlogQuotePostRequest, VOID, [MapRequest]);
protoOf(BlogReblogRequest).idk = addParam;
initMetadataForClass(BlogReblogRequest, 'BlogReblogRequest', BlogReblogRequest, VOID, [MapRequest]);
protoOf(BlogTextPostRequest).idk = addParam;
initMetadataForClass(BlogTextPostRequest, 'BlogTextPostRequest', BlogTextPostRequest, VOID, [MapRequest]);
protoOf(BlogVideoPostRequest).idk = addParam;
initMetadataForClass(BlogVideoPostRequest, 'BlogVideoPostRequest', BlogVideoPostRequest, VOID, [MapRequest]);
protoOf(TaggedRequest).idk = addParam;
initMetadataForClass(TaggedRequest, 'TaggedRequest', TaggedRequest, VOID, [MapRequest]);
protoOf(UserDashboardRequest).idk = addParam;
initMetadataForClass(UserDashboardRequest, 'UserDashboardRequest', UserDashboardRequest, VOID, [MapRequest]);
protoOf(UserFollowRequest).idk = addParam;
initMetadataForClass(UserFollowRequest, 'UserFollowRequest', UserFollowRequest, VOID, [MapRequest]);
protoOf(UserFollowingRequest).idk = addParam;
initMetadataForClass(UserFollowingRequest, 'UserFollowingRequest', UserFollowingRequest, VOID, [MapRequest]);
protoOf(UserLikeRequest).idk = addParam;
initMetadataForClass(UserLikeRequest, 'UserLikeRequest', UserLikeRequest, VOID, [MapRequest]);
protoOf(UserLikesRequest).idk = addParam;
initMetadataForClass(UserLikesRequest, 'UserLikesRequest', UserLikesRequest, VOID, [MapRequest]);
protoOf(UserUnfollowRequest).idk = addParam;
initMetadataForClass(UserUnfollowRequest, 'UserUnfollowRequest', UserUnfollowRequest, VOID, [MapRequest]);
protoOf(UserUnlikeRequest).idk = addParam;
initMetadataForClass(UserUnlikeRequest, 'UserUnlikeRequest', UserUnlikeRequest, VOID, [MapRequest]);
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForClass($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Body, 'Body', Body, VOID, VOID, VOID, VOID, {0: Companion_getInstance_0});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).d1b = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Meta, 'Meta', Meta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(Response, 'Response');
initMetadataForClass(ResponseUnit, 'ResponseUnit');
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).d1b = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AuthOAuth2TokenResponse, 'AuthOAuth2TokenResponse', AuthOAuth2TokenResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).d1b = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogBannerResponse, 'BlogBannerResponse', BlogBannerResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).d1b = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowersResponse, 'BlogFollowersResponse', BlogFollowersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_4).d1b = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowingResponse, 'BlogFollowingResponse', BlogFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_5).d1b = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInfoResponse, 'BlogInfoResponse', BlogInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_6);
protoOf($serializer_6).d1b = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogLikesResponse, 'BlogLikesResponse', BlogLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_7);
protoOf($serializer_7).d1b = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogPostsResponse, 'BlogPostsResponse', BlogPostsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_8);
protoOf($serializer_8).d1b = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogUpdatedInfoResponse, 'BlogUpdatedInfoResponse', BlogUpdatedInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_9);
protoOf($serializer_9).d1b = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserDashboardResponse, 'UserDashboardResponse', UserDashboardResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_10);
protoOf($serializer_10).d1b = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserFollowingResponse, 'UserFollowingResponse', UserFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_11);
protoOf($serializer_11).d1b = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserLikesResponse, 'UserLikesResponse', UserLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_12);
protoOf($serializer_12).d1b = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserResponse, 'UserResponse', UserResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForClass(PhotoType, 'PhotoType');
initMetadataForClass(PostType, 'PostType');
initMetadataForCompanion(Companion_13);
protoOf($serializer_13).d1b = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Note, 'Note', Note, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_14);
protoOf($serializer_14).d1b = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NoteAvatar, 'NoteAvatar', NoteAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForClass(Resource, 'Resource', Resource.kdr);
initMetadataForCompanion(Companion_15);
protoOf($serializer_15).d1b = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Blog, 'Blog', Blog.pdr, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_16);
protoOf($serializer_16).d1b = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogAvatar, 'BlogAvatar', BlogAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_17);
protoOf($serializer_17).d1b = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogTheme, 'BlogTheme', BlogTheme, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_18);
protoOf($serializer_18).d1b = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Reblog, 'Reblog', Reblog, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_19);
initMetadataForClass(Post, 'Post', VOID, VOID, VOID, VOID, VOID, {0: PostSerializer_getInstance});
initMetadataForCompanion(Companion_20);
protoOf($serializer_19).d1b = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAnswerPost, 'LegacyAnswerPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_21);
protoOf($serializer_20).d1b = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAudioPost, 'LegacyAudioPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_22);
protoOf($serializer_21).d1b = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyChatPost, 'LegacyChatPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_23);
protoOf($serializer_22).d1b = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyLinkPost, 'LegacyLinkPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_24);
protoOf($serializer_23).d1b = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyPhotoPost, 'LegacyPhotoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_25);
protoOf($serializer_24).d1b = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyPostcardPost, 'LegacyPostcardPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_26);
protoOf($serializer_25).d1b = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyQuotePost, 'LegacyQuotePost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_27);
protoOf($serializer_26).d1b = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyTextPost, 'LegacyTextPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_28);
protoOf($serializer_27).d1b = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyVideoPost, 'LegacyVideoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForCompanion(Companion_29);
protoOf($serializer_28).d1b = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Dialogue, 'Dialogue', Dialogue, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_30);
protoOf($serializer_29).d1b = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Photo, 'Photo', Photo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_31);
protoOf($serializer_30).d1b = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PhotoSize, 'PhotoSize', PhotoSize, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_32);
protoOf($serializer_31).d1b = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Video, 'Video', Video, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_33);
protoOf($serializer_32).d1b = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInTrail, 'BlogInTrail', BlogInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_34);
protoOf($serializer_33).d1b = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(IdInTrail, 'IdInTrail', IdInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForCompanion(Companion_35);
protoOf($serializer_34).d1b = typeParametersSerializers;
initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Trail, 'Trail', Trail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
initMetadataForCompanion(Companion_36);
protoOf($serializer_35).d1b = typeParametersSerializers;
initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FollowerUser, 'FollowerUser', FollowerUser, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
initMetadataForCompanion(Companion_37);
protoOf($serializer_36).d1b = typeParametersSerializers;
initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(User, 'User', User.led, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
initMetadataForLambda(AbstractResourceImpl$oauthPostUnit$slambda, VOID, VOID, [0]);
initMetadataForLambda(AbstractResourceImpl$oauthPutUnit$slambda, VOID, VOID, [0]);
initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl', VOID, VOID, VOID, [3, 2, 1]);
initMetadataForLambda(AuthResourceImpl$oAuth2TokenBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(AuthResourceImpl, 'AuthResourceImpl', VOID, VOID, [AuthResource], [1, 3, 2]);
initMetadataForLambda(BlogResourceImpl$blogInfoBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogAvatarBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogLikesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogFollowingBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogFollowersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogPostsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogQueuedPostsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogDraftPostsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogSubmissionsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$postCreateBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$postEditBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$postReblogBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$postDeleteBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogBannerBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogUpdateInfoBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$postEditTagsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$postUpdateBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(BlogResourceImpl, 'BlogResourceImpl', VOID, VOID, [BlogResource], [1, 3, 2]);
initMetadataForLambda(TaggedResourceImpl$taggedBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(TaggedResourceImpl, 'TaggedResourceImpl', VOID, VOID, [TaggedResource], [1, 3, 2]);
initMetadataForLambda(UserResourceImpl$userBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$userDashboardBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$userFollowingBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$userLikesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$likeBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$unlikeBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$followBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$unfollowBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(UserResourceImpl, 'UserResourceImpl', VOID, VOID, [UserResource], [0, 1, 3, 2]);
initMetadataForObject(Json_0, 'Json');
initMetadataForObject(MediaType, 'MediaType');
initMetadataForObject(PostSerializer, 'PostSerializer');
//endregion
//region block: init
TumblrFactory_instance = new TumblrFactory();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Companion_instance_5 = new Companion_5();
Companion_instance_8 = new Companion_8();
Companion_instance_12 = new Companion_12();
Companion_instance_13 = new Companion_13();
Companion_instance_14 = new Companion_14();
Companion_instance_16 = new Companion_16();
Companion_instance_17 = new Companion_17();
Companion_instance_18 = new Companion_18();
Companion_instance_19 = new Companion_19();
Companion_instance_29 = new Companion_29();
Companion_instance_31 = new Companion_31();
Companion_instance_32 = new Companion_32();
Companion_instance_33 = new Companion_33();
Companion_instance_34 = new Companion_34();
Companion_instance_35 = new Companion_35();
Companion_instance_36 = new Companion_36();
//endregion
//region block: exports
var TumblrFactory_0 = {getInstance: TumblrFactory_getInstance};
PhotoType.values = values;
PhotoType.valueOf = valueOf;
defineProp(PhotoType, 'SOURCE', PhotoType_SOURCE_getInstance, VOID, true);
defineProp(PhotoType, 'FILE', PhotoType_FILE_getInstance, VOID, true);
PostType.values = values_0;
PostType.valueOf = valueOf_0;
defineProp(PostType, 'TEXT', PostType_TEXT_getInstance, VOID, true);
defineProp(PostType, 'PHOTO', PostType_PHOTO_getInstance, VOID, true);
defineProp(PostType, 'QUOTE', PostType_QUOTE_getInstance, VOID, true);
defineProp(PostType, 'LINK', PostType_LINK_getInstance, VOID, true);
defineProp(PostType, 'CHAT', PostType_CHAT_getInstance, VOID, true);
defineProp(PostType, 'AUDIO', PostType_AUDIO_getInstance, VOID, true);
defineProp(PostType, 'VIDEO', PostType_VIDEO_getInstance, VOID, true);
defineProp(PostType, 'ANSWER', PostType_ANSWER_getInstance, VOID, true);
defineProp(PostType, 'POSTCARD', PostType_POSTCARD_getInstance, VOID, true);
defineProp(PostType, 'UNKNOWN', PostType_UNKNOWN_getInstance, VOID, true);
export {
  TumblrFactory_0 as TumblrFactory,
  FileRequest as FileRequest,
  AuthAuthorizeUrlRequest as AuthAuthorizeUrlRequest,
  AuthOAuth2TokenRefreshRequest as AuthOAuth2TokenRefreshRequest,
  AuthOAuth2TokenRequest as AuthOAuth2TokenRequest,
  BlogAvatarRequest as BlogAvatarRequest,
  BlogBannerRequest as BlogBannerRequest,
  BlogDraftsRequest as BlogDraftsRequest,
  BlogFollowersRequest as BlogFollowersRequest,
  BlogFollowingRequest as BlogFollowingRequest,
  BlogInfoRequest as BlogInfoRequest,
  BlogLikesRequest as BlogLikesRequest,
  BlogPostsRequest as BlogPostsRequest,
  BlogQueueRequest as BlogQueueRequest,
  BlogSubmissionsRequest as BlogSubmissionsRequest,
  BlogUpdateInfoRequest as BlogUpdateInfoRequest,
  BlogAudioPostRequest as BlogAudioPostRequest,
  BlogChatPostRequest as BlogChatPostRequest,
  BlogDeleteRequest as BlogDeleteRequest,
  BlogLinkPostRequest as BlogLinkPostRequest,
  BlogPhotoPostRequest as BlogPhotoPostRequest,
  BlogPostEditTagsRequest as BlogPostEditTagsRequest,
  BlogPostRequest as BlogPostRequest,
  BlogPostUpdateRequest as BlogPostUpdateRequest,
  BlogQuotePostRequest as BlogQuotePostRequest,
  BlogReblogRequest as BlogReblogRequest,
  BlogTextPostRequest as BlogTextPostRequest,
  BlogVideoPostRequest as BlogVideoPostRequest,
  TaggedRequest as TaggedRequest,
  UserDashboardRequest as UserDashboardRequest,
  UserFollowRequest as UserFollowRequest,
  UserFollowingRequest as UserFollowingRequest,
  UserLikeRequest as UserLikeRequest,
  UserLikesRequest as UserLikesRequest,
  UserUnfollowRequest as UserUnfollowRequest,
  UserUnlikeRequest as UserUnlikeRequest,
  Body as Body,
  Meta as Meta,
  Response as Response,
  ResponseUnit as ResponseUnit,
  AuthOAuth2TokenResponse as AuthOAuth2TokenResponse,
  BlogBannerResponse as BlogBannerResponse,
  BlogFollowersResponse as BlogFollowersResponse,
  BlogFollowingResponse as BlogFollowingResponse,
  BlogInfoResponse as BlogInfoResponse,
  BlogLikesResponse as BlogLikesResponse,
  BlogPostsResponse as BlogPostsResponse,
  BlogUpdatedInfoResponse as BlogUpdatedInfoResponse,
  UserDashboardResponse as UserDashboardResponse,
  UserFollowingResponse as UserFollowingResponse,
  UserLikesResponse as UserLikesResponse,
  UserResponse as UserResponse,
  PhotoType as PhotoType,
  PostType as PostType,
  Note as Note,
  NoteAvatar as NoteAvatar,
  Blog as Blog,
  BlogAvatar as BlogAvatar,
  BlogTheme as BlogTheme,
  Reblog as Reblog,
  Post as Post,
  LegacyAnswerPost as LegacyAnswerPost,
  LegacyAudioPost as LegacyAudioPost,
  LegacyChatPost as LegacyChatPost,
  LegacyLinkPost as LegacyLinkPost,
  LegacyPhotoPost as LegacyPhotoPost,
  LegacyPostcardPost as LegacyPostcardPost,
  LegacyQuotePost as LegacyQuotePost,
  LegacyVideoPost as LegacyVideoPost,
  Dialogue as Dialogue,
  Photo as Photo,
  PhotoSize as PhotoSize,
  Video as Video,
  BlogInTrail as BlogInTrail,
  IdInTrail as IdInTrail,
  Trail as Trail,
  FollowerUser as FollowerUser,
  User as User,
};
export {
  TumblrFactory_instance as TumblrFactory_instanceeuot8fn3hq6j,
  oAuth2TokenRefresh$virtualSuspendBridge as oAuth2TokenRefresh$virtualSuspendBridge33717nun118to,
  oAuth2Token$virtualSuspendBridge as oAuth2Token$virtualSuspendBridge2bmvdt962dh36,
  blogFollowers$virtualSuspendBridge as blogFollowers$virtualSuspendBridge1atq7i8nxt2ju,
  blogInfo$virtualSuspendBridge as blogInfo$virtualSuspendBridge2anu8a0kmvn6k,
  blogLikes$virtualSuspendBridge as blogLikes$virtualSuspendBridge3ekn4lggqv90m,
  blogPosts$virtualSuspendBridge as blogPosts$virtualSuspendBridge23tgxogvazkz6,
  postCreate$virtualSuspendBridge as postCreate$virtualSuspendBridge1km616qknqe7i,
  postDelete$virtualSuspendBridge as postDelete$virtualSuspendBridge1cajsqqdzh7nc,
  postReblog$virtualSuspendBridge as postReblog$virtualSuspendBridge1y8xfdmwlxd9f,
  tagged$virtualSuspendBridge as tagged$virtualSuspendBridge3vtafw3jhnb8o,
  follow$virtualSuspendBridge as follow$virtualSuspendBridge3rrshvwmj9lca,
  like$virtualSuspendBridge as like$virtualSuspendBridge2luinseytfrjb,
  unfollow$virtualSuspendBridge as unfollow$virtualSuspendBridge4q5647lpst92,
  unlike$virtualSuspendBridge as unlike$virtualSuspendBridge1zepa0u2nswdv,
  userDashboard$virtualSuspendBridge as userDashboard$virtualSuspendBridge12dzce5ac5rwz,
  userFollowing$virtualSuspendBridge as userFollowing$virtualSuspendBridgeape9xmbn9yme,
  user$virtualSuspendBridge as user$virtualSuspendBridge1t9dsb9cfwpfc,
  AuthAuthorizeUrlRequest as AuthAuthorizeUrlRequest1r499joy9rgke,
  AuthOAuth2TokenRefreshRequest as AuthOAuth2TokenRefreshRequest2qkm0i4hhwrle,
  AuthOAuth2TokenRequest as AuthOAuth2TokenRequest2r5ifxtwyt8sb,
  BlogDeleteRequest as BlogDeleteRequesth1yokpnvc6hc,
  BlogPhotoPostRequest as BlogPhotoPostRequestbqwgjxfjmyxo,
  BlogReblogRequest as BlogReblogRequest16kn2cac1qx3o,
  BlogTextPostRequest as BlogTextPostRequest19de3zr0xnjkp,
  BlogFollowersRequest as BlogFollowersRequest35ktshkj1hdms,
  BlogInfoRequest as BlogInfoRequest3j5lfprbe03pd,
  BlogLikesRequest as BlogLikesRequest6deohx2mui3s,
  BlogPostsRequest as BlogPostsRequest3p17qdnwdy8zd,
  TaggedRequest as TaggedRequest2yd9lu1fdhwah,
  UserDashboardRequest as UserDashboardRequest3u1m2pwubj7je,
  UserFollowRequest as UserFollowRequest3nm4aazxmh8cv,
  UserFollowingRequest as UserFollowingRequest2pg9sclin02zh,
  UserLikeRequest as UserLikeRequest246u0oa6fnv1n,
  UserUnfollowRequest as UserUnfollowRequest3faqsber48sdc,
  UserUnlikeRequest as UserUnlikeRequest1e96djb7a7g8n,
  FileRequest as FileRequest181pf3wogsxtb,
  LegacyPhotoPost as LegacyPhotoPost16fr30eel9njf,
  LegacyQuotePost as LegacyQuotePosty2a4ox4vvfy3,
  LegacyTextPost as LegacyTextPostkhli59c5h1p5,
  LegacyVideoPost as LegacyVideoPost28kswhagpgbf8,
  TumblrException as TumblrException2t7bqi0w6h7db,
};
//endregion

//# sourceMappingURL=ktumblr-core.mjs.map
