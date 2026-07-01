import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  captureStack1fzi4aczwc4hg as captureStack,
  RuntimeException1r3t0zl97011n as RuntimeException,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  await335x4cz7ixnm4 as await_0,
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
  LazyThreadSafetyMode_PUBLICATION_getInstance20ynwq7b0awd8 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  Enum3alwj03lh1n41 as Enum,
  defineProp3ur6h3slcvq4x as defineProp,
  PrimitiveClasses_getInstance143761yrsca9q as PrimitiveClasses_getInstance,
  Exceptiondt2hlxn7j7vw as Exception,
  contains3ue2qo8xhmpf1 as contains,
  constructCallableReference23y65rf941mch as constructCallableReference,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  promisify1z0ncraq1ipzh as promisify,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  println2shhhgwwt4c61 as println,
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
  IntSerializer_getInstance3hkg1llvt1c0z as IntSerializer_getInstance,
  StringSerializer_getInstancerxlnwnlbnwri as StringSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  BooleanSerializer_getInstance3sa31xxwvx0ks as BooleanSerializer_getInstance,
  throwArrayMissingFieldExceptionbk1mj238w44a as throwArrayMissingFieldException,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  buildClassSerialDescriptors2a6xdp6mrtw as buildClassSerialDescriptor,
  SerializersModuleBuilderfxsfdohcdipc as SerializersModuleBuilder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import {
  URLBuilder2mz8zkz4u9ray as URLBuilder,
  Companion_getInstancehe53gw4v5mqu as Companion_getInstance,
  set_encodedPath3q0i8nsv3a7qy as set_encodedPath,
  Application_getInstance17ubdrb0i0ohu as Application_getInstance,
} from './ktor-ktor-http.mjs';
import {
  JsonObjectee06ihoeeiqj as JsonObject,
  JsonArray2urf8ey7u44sd as JsonArray,
  get_boolean37ml8jnzy6rg3 as get_boolean,
  get_booleanOrNull376axlcpdhkmo as get_booleanOrNull,
  get_double1785hcxaminy4 as get_double,
  get_doubleOrNull2fo14gjg922um as get_doubleOrNull,
  get_float1xtaobzj8js8m as get_float,
  get_floatOrNull2q2ov24agcvgt as get_floatOrNull,
  get_long3gjrkvy7fxjbp as get_long,
  get_longOrNull1kg1ha9scz5pa as get_longOrNull,
  get_int2y6jf75ftml0w as get_int,
  get_intOrNulld29i64b3udf as get_intOrNull,
  JsonPrimitive3ttzjh2ft5dnx as JsonPrimitive,
  JsonDecoder1rijst5ne6qla as JsonDecoder,
  Jsonsmkyu9xjl7fv as Json,
  JsonContentPolymorphicSerializer1zt3sp8asmujz as JsonContentPolymorphicSerializer,
  get_jsonObject2u4z2ch1uuca9 as get_jsonObject,
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
    this.rcl_1 = clientId;
    this.scl_1 = clientSecret;
    this.tcl_1 = accessToken;
    this.ucl_1 = refreshToken;
  }
  vcl() {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.tcl_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        break $l$block;
      }
    }
    return 'Bearer ' + this.tcl_1;
  }
}
class TumblrException extends RuntimeException {
  static bcm(e) {
    var $this = this.re(e);
    init_work_socialhub_ktumblr_TumblrException($this);
    return $this;
  }
  static ccm(status, body) {
    var $this = this.hb('status code: ' + status + ', body: ' + body);
    init_work_socialhub_ktumblr_TumblrException($this);
    $this.ycl_1 = status;
    $this.zcl_1 = body;
    return $this;
  }
}
class TumblrFactory {
  dcm(clientId, clientSecret, accessToken, refreshToken) {
    return new TumblrImpl(new TumblrAuth(clientId, clientSecret, accessToken, refreshToken));
  }
  instance(clientId, clientSecret, accessToken, refreshToken, $super) {
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    return $super === VOID ? this.dcm(clientId, clientSecret, accessToken, refreshToken) : $super.dcm.call(this, clientId, clientSecret, accessToken, refreshToken);
  }
}
class TumblrImpl {
  constructor(tumblrAuth) {
    this.ecm_1 = tumblrAuth;
    this.fcm_1 = new AuthResourceImpl(this.ecm_1);
    this.gcm_1 = new UserResourceImpl(this.ecm_1);
    this.hcm_1 = new BlogResourceImpl(this.ecm_1);
    this.icm_1 = new TaggedResourceImpl(this.ecm_1);
  }
  auth() {
    return this.fcm_1;
  }
  user() {
    return this.gcm_1;
  }
  blog() {
    return this.hcm_1;
  }
  tagged() {
    return this.icm_1;
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
  c3g() {
    return this.data;
  }
}
class MapRequest {}
function addParam(_this__u8e3s4, key, value) {
  if (value == null)
    return Unit_instance;
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.o4(key, value);
}
class AuthAuthorizeUrlRequest {
  constructor() {
    this.responseType = 'code';
    this.redirectUri = null;
    this.state = null;
    this.scope = 'write offline_access';
  }
  qcp(_set____db54di) {
    this.responseType = _set____db54di;
  }
  rcp() {
    return this.responseType;
  }
  vbf(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  wbf() {
    return this.redirectUri;
  }
  da2(_set____db54di) {
    this.state = _set____db54di;
  }
  q7r() {
    return this.state;
  }
  scp(_set____db54di) {
    this.scope = _set____db54di;
  }
  obh() {
    return this.scope;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'response_type', this.responseType);
    this.pcp(this_0, 'redirect_uri', this.redirectUri);
    this.pcp(this_0, 'state', this.state);
    this.pcp(this_0, 'scope', this.scope);
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
  ucp(_set____db54di) {
    this.grantType = _set____db54di;
  }
  vcp() {
    return this.grantType;
  }
  kb2(_set____db54di) {
    this.clientId = _set____db54di;
  }
  lb2() {
    return this.clientId;
  }
  mb2(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  nb2() {
    return this.clientSecret;
  }
  abg(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  bbg() {
    return this.refreshToken;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'grant_type', this.grantType);
    this.pcp(this_0, 'client_id', this.clientId);
    this.pcp(this_0, 'client_secret', this.clientSecret);
    this.pcp(this_0, 'refresh_token', this.refreshToken);
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
  ucp(_set____db54di) {
    this.grantType = _set____db54di;
  }
  vcp() {
    return this.grantType;
  }
  xbf(_set____db54di) {
    this.code = _set____db54di;
  }
  j30() {
    return this.code;
  }
  kb2(_set____db54di) {
    this.clientId = _set____db54di;
  }
  lb2() {
    return this.clientId;
  }
  mb2(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  nb2() {
    return this.clientSecret;
  }
  vbf(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  wbf() {
    return this.redirectUri;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'grant_type', this.grantType);
    this.pcp(this_0, 'code', this.code);
    this.pcp(this_0, 'client_id', this.clientId);
    this.pcp(this_0, 'client_secret', this.clientSecret);
    this.pcp(this_0, 'redirect_uri', this.redirectUri);
    return this_0;
  }
}
class BlogAvatarRequest {
  constructor() {
    this.blogName = null;
    this.size = 0;
  }
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  a88(_set____db54di) {
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  fc2(_set____db54di) {
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  ycp(_set____db54di) {
    this.beforeId = _set____db54di;
  }
  zcp() {
    return this.beforeId;
  }
  acq(_set____db54di) {
    this.filter = _set____db54di;
  }
  m63() {
    return this.filter;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'before_id', this.beforeId);
    this.pcp(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogFollowersRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  c60(_set____db54di) {
    this.limit = _set____db54di;
  }
  n37() {
    return this.limit;
  }
  p3e(_set____db54di) {
    this.offset = _set____db54di;
  }
  q3e() {
    return this.offset;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'limit', this.limit);
    this.pcp(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogFollowingRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  c60(_set____db54di) {
    this.limit = _set____db54di;
  }
  n37() {
    return this.limit;
  }
  p3e(_set____db54di) {
    this.offset = _set____db54di;
  }
  q3e() {
    return this.offset;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'limit', this.limit);
    this.pcp(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogInfoRequest {
  constructor() {
    this.blogName = null;
  }
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  c60(_set____db54di) {
    this.limit = _set____db54di;
  }
  n37() {
    return this.limit;
  }
  p3e(_set____db54di) {
    this.offset = _set____db54di;
  }
  q3e() {
    return this.offset;
  }
  bcq(_set____db54di) {
    this.before = _set____db54di;
  }
  ccq() {
    return this.before;
  }
  dcq(_set____db54di) {
    this.after = _set____db54di;
  }
  ecq() {
    return this.after;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'limit', this.limit);
    this.pcp(this_0, 'offset', this.offset);
    this.pcp(this_0, 'before', this.before);
    this.pcp(this_0, 'after', this.after);
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  d36(_set____db54di) {
    this.type = _set____db54di;
  }
  w35() {
    return this.type;
  }
  z3g(_set____db54di) {
    this.id = _set____db54di;
  }
  p3c() {
    return this.id;
  }
  n34(_set____db54di) {
    this.tag = _set____db54di;
  }
  o34() {
    return this.tag;
  }
  c60(_set____db54di) {
    this.limit = _set____db54di;
  }
  n37() {
    return this.limit;
  }
  p3e(_set____db54di) {
    this.offset = _set____db54di;
  }
  q3e() {
    return this.offset;
  }
  fcq(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  gcq() {
    return this.reblogInfo;
  }
  hcq(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  icq() {
    return this.notesInfo;
  }
  acq(_set____db54di) {
    this.filter = _set____db54di;
  }
  m63() {
    return this.filter;
  }
  bcq(_set____db54di) {
    this.before = _set____db54di;
  }
  ccq() {
    return this.before;
  }
  jcq(_set____db54di) {
    this.npf = _set____db54di;
  }
  kcq() {
    return this.npf;
  }
  rbf(_set____db54di) {
    this.types = _set____db54di;
  }
  sbf() {
    return this.types;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'id', this.id);
    this.pcp(this_0, 'tag', this.tag);
    this.pcp(this_0, 'limit', this.limit);
    this.pcp(this_0, 'offset', this.offset);
    this.pcp(this_0, 'reblog_info', this.reblogInfo);
    this.pcp(this_0, 'notes_info', this.notesInfo);
    this.pcp(this_0, 'filter', this.filter);
    this.pcp(this_0, 'before', this.before);
    this.pcp(this_0, 'npf', this.npf);
    var tmp0_safe_receiver = this.types;
    this.pcp(this_0, 'types', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  c60(_set____db54di) {
    this.limit = _set____db54di;
  }
  n37() {
    return this.limit;
  }
  p3e(_set____db54di) {
    this.offset = _set____db54di;
  }
  q3e() {
    return this.offset;
  }
  acq(_set____db54di) {
    this.filter = _set____db54di;
  }
  m63() {
    return this.filter;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'limit', this.limit);
    this.pcp(this_0, 'offset', this.offset);
    this.pcp(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogSubmissionsRequest {
  constructor() {
    this.blogName = null;
    this.offset = null;
    this.filter = null;
  }
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  lcq(_set____db54di) {
    this.offset = _set____db54di;
  }
  q3e() {
    return this.offset;
  }
  acq(_set____db54di) {
    this.filter = _set____db54di;
  }
  m63() {
    return this.filter;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'offset', this.offset);
    this.pcp(this_0, 'filter', this.filter);
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  q34(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  haa(_set____db54di) {
    this.title = _set____db54di;
  }
  u3g() {
    return this.title;
  }
  u34(_set____db54di) {
    this.description = _set____db54di;
  }
  e34() {
    return this.description;
  }
  mcq(_set____db54di) {
    this.ask = _set____db54di;
  }
  ncq() {
    return this.ask;
  }
  ocq(_set____db54di) {
    this.submit = _set____db54di;
  }
  pcq() {
    return this.submit;
  }
  qcq(_set____db54di) {
    this.isDescriptionIndexable = _set____db54di;
  }
  rcq() {
    return this.isDescriptionIndexable;
  }
  scq(_set____db54di) {
    this.isIndexFollowed = _set____db54di;
  }
  tcq() {
    return this.isIndexFollowed;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'name', this.name);
    this.pcp(this_0, 'title', this.title);
    this.pcp(this_0, 'description', this.description);
    this.pcp(this_0, 'ask', this.ask);
    this.pcp(this_0, 'submit', this.submit);
    this.pcp(this_0, 'is_description_indexable', this.isDescriptionIndexable);
    this.pcp(this_0, 'is_index_followed', this.isIndexFollowed);
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  u85(_set____db54di) {
    this.id = _set____db54di;
  }
  p3c() {
    return this.id;
  }
  d36(_set____db54di) {
    this.type = _set____db54di;
  }
  w35() {
    return this.type;
  }
  da2(_set____db54di) {
    this.state = _set____db54di;
  }
  q7r() {
    return this.state;
  }
  acr(_set____db54di) {
    this.tags = _set____db54di;
  }
  laa() {
    return this.tags;
  }
  bcr(_set____db54di) {
    this.tweet = _set____db54di;
  }
  ccr() {
    return this.tweet;
  }
  dcr(_set____db54di) {
    this.date = _set____db54di;
  }
  ecr() {
    return this.date;
  }
  fcr(_set____db54di) {
    this.format = _set____db54di;
  }
  gcr() {
    return this.format;
  }
  hcr(_set____db54di) {
    this.slug = _set____db54di;
  }
  icr() {
    return this.slug;
  }
  jcr(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  kcr() {
    return this.nativeInlineImages;
  }
  zcq() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
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
  ucq(_set____db54di) {
    this.caption = _set____db54di;
  }
  vcq() {
    return this.caption;
  }
  wcq(_set____db54di) {
    this.externalUrl = _set____db54di;
  }
  xcq() {
    return this.externalUrl;
  }
  ycq(_set____db54di) {
    this.data = _set____db54di;
  }
  c3g() {
    return this.data;
  }
  tcp() {
    // Inline function 'kotlin.also' call
    var this_0 = this.zcq();
    this.pcp(this_0, 'caption', this.caption);
    this.pcp(this_0, 'external_url', this.externalUrl);
    this.pcp(this_0, 'data', this.data);
    return this_0;
  }
}
class BlogChatPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.conversation = null;
  }
  haa(_set____db54di) {
    this.title = _set____db54di;
  }
  u3g() {
    return this.title;
  }
  lcr(_set____db54di) {
    this.conversation = _set____db54di;
  }
  mcr() {
    return this.conversation;
  }
  tcp() {
    // Inline function 'kotlin.also' call
    var this_0 = this.zcq();
    this.pcp(this_0, 'title', this.title);
    this.pcp(this_0, 'conversation', this.conversation);
    return this_0;
  }
}
class BlogDeleteRequest {
  constructor() {
    this.blogName = null;
    this.id = null;
  }
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  u85(_set____db54di) {
    this.id = _set____db54di;
  }
  p3c() {
    return this.id;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'id', this.id);
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
  haa(_set____db54di) {
    this.title = _set____db54di;
  }
  u3g() {
    return this.title;
  }
  x9c(_set____db54di) {
    this.url = _set____db54di;
  }
  a4k() {
    return this.url;
  }
  u34(_set____db54di) {
    this.description = _set____db54di;
  }
  e34() {
    return this.description;
  }
  r7e(_set____db54di) {
    this.thumbnail = _set____db54di;
  }
  z79() {
    return this.thumbnail;
  }
  ncr(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  ocr() {
    return this.excerpt;
  }
  pcr(_set____db54di) {
    this.author = _set____db54di;
  }
  u7c() {
    return this.author;
  }
  tcp() {
    // Inline function 'kotlin.also' call
    var this_0 = this.zcq();
    this.pcp(this_0, 'title', this.title);
    this.pcp(this_0, 'url', this.url);
    this.pcp(this_0, 'description', this.description);
    this.pcp(this_0, 'thumbnail', this.thumbnail);
    this.pcp(this_0, 'excerpt', this.excerpt);
    this.pcp(this_0, 'author', this.author);
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
  ucq(_set____db54di) {
    this.caption = _set____db54di;
  }
  vcq() {
    return this.caption;
  }
  f88(_set____db54di) {
    this.link = _set____db54di;
  }
  u2z() {
    return this.link;
  }
  qcr(_set____db54di) {
    this.source = _set____db54di;
  }
  k1z() {
    return this.source;
  }
  rcr(_set____db54di) {
    this.data = _set____db54di;
  }
  c3g() {
    return this.data;
  }
  scr(_set____db54di) {
    this.data64 = _set____db54di;
  }
  tcr() {
    return this.data64;
  }
  tcp() {
    // Inline function 'kotlin.also' call
    var this_0 = this.zcq();
    this.pcp(this_0, 'caption', this.caption);
    this.pcp(this_0, 'link', this.link);
    this.pcp(this_0, 'source', this.source);
    this.pcp(this_0, 'data64', this.data64);
    return this_0;
  }
  ucr() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
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
        this_0.o4(tmp2, value);
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  u85(_set____db54di) {
    this.id = _set____db54di;
  }
  p3c() {
    return this.id;
  }
  qaf(_set____db54di) {
    this.tags = _set____db54di;
  }
  laa() {
    return this.tags;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'id', this.id);
    var tmp0_safe_receiver = this.tags;
    this.pcp(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  u85(_set____db54di) {
    this.id = _set____db54di;
  }
  p3c() {
    return this.id;
  }
  d36(_set____db54di) {
    this.type = _set____db54di;
  }
  w35() {
    return this.type;
  }
  haa(_set____db54di) {
    this.title = _set____db54di;
  }
  u3g() {
    return this.title;
  }
  zag(_set____db54di) {
    this.body = _set____db54di;
  }
  aah() {
    return this.body;
  }
  hcr(_set____db54di) {
    this.slug = _set____db54di;
  }
  icr() {
    return this.slug;
  }
  vcr(_set____db54di) {
    this.startDate = _set____db54di;
  }
  wcr() {
    return this.startDate;
  }
  xcr(_set____db54di) {
    this.tzAddress = _set____db54di;
  }
  ycr() {
    return this.tzAddress;
  }
  zcr(_set____db54di) {
    this.replyKey = _set____db54di;
  }
  acs() {
    return this.replyKey;
  }
  qaf(_set____db54di) {
    this.tags = _set____db54di;
  }
  laa() {
    return this.tags;
  }
  rcr(_set____db54di) {
    this.data = _set____db54di;
  }
  c3g() {
    return this.data;
  }
  ucq(_set____db54di) {
    this.caption = _set____db54di;
  }
  vcq() {
    return this.caption;
  }
  f88(_set____db54di) {
    this.link = _set____db54di;
  }
  u2z() {
    return this.link;
  }
  bcs(_set____db54di) {
    this.quoteText = _set____db54di;
  }
  ccs() {
    return this.quoteText;
  }
  dcs(_set____db54di) {
    this.quoteSource = _set____db54di;
  }
  ecs() {
    return this.quoteSource;
  }
  fcs(_set____db54di) {
    this.linkUrl = _set____db54di;
  }
  gcs() {
    return this.linkUrl;
  }
  hcs(_set____db54di) {
    this.linkTitle = _set____db54di;
  }
  ics() {
    return this.linkTitle;
  }
  jcs(_set____db54di) {
    this.linkDescription = _set____db54di;
  }
  kcs() {
    return this.linkDescription;
  }
  lcs(_set____db54di) {
    this.chatTitle = _set____db54di;
  }
  mcs() {
    return this.chatTitle;
  }
  ncs(_set____db54di) {
    this.chatLabel = _set____db54di;
  }
  ocs() {
    return this.chatLabel;
  }
  pcs(_set____db54di) {
    this.chatDialogue = _set____db54di;
  }
  qcs() {
    return this.chatDialogue;
  }
  wcq(_set____db54di) {
    this.externalUrl = _set____db54di;
  }
  xcq() {
    return this.externalUrl;
  }
  rcs(_set____db54di) {
    this.embed = _set____db54di;
  }
  b69() {
    return this.embed;
  }
  scs(_set____db54di) {
    this.answer = _set____db54di;
  }
  tcs() {
    return this.answer;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'id', this.id);
    this.pcp(this_0, 'type', this.type);
    this.pcp(this_0, 'title', this.title);
    this.pcp(this_0, 'body', this.body);
    this.pcp(this_0, 'slug', this.slug);
    this.pcp(this_0, 'start_date', this.startDate);
    this.pcp(this_0, 'tz_address', this.tzAddress);
    this.pcp(this_0, 'reply_key', this.replyKey);
    var tmp0_safe_receiver = this.tags;
    this.pcp(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
    this.pcp(this_0, 'caption', this.caption);
    this.pcp(this_0, 'link', this.link);
    this.pcp(this_0, 'quote_text', this.quoteText);
    this.pcp(this_0, 'quote_source', this.quoteSource);
    this.pcp(this_0, 'link_url', this.linkUrl);
    this.pcp(this_0, 'link_title', this.linkTitle);
    this.pcp(this_0, 'link_description', this.linkDescription);
    this.pcp(this_0, 'chat_title', this.chatTitle);
    this.pcp(this_0, 'chat_label', this.chatLabel);
    this.pcp(this_0, 'chat_dialogue', this.chatDialogue);
    this.pcp(this_0, 'external_url', this.externalUrl);
    this.pcp(this_0, 'embed', this.embed);
    this.pcp(this_0, 'answer', this.answer);
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
  ucs(_set____db54di) {
    this.quote = _set____db54di;
  }
  vcs() {
    return this.quote;
  }
  qcr(_set____db54di) {
    this.source = _set____db54di;
  }
  k1z() {
    return this.source;
  }
  tcp() {
    // Inline function 'kotlin.also' call
    var this_0 = this.zcq();
    this.pcp(this_0, 'quote', this.quote);
    this.pcp(this_0, 'source', this.source);
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
  wcp(_set____db54di) {
    this.blogName = _set____db54di;
  }
  xcp() {
    return this.blogName;
  }
  u85(_set____db54di) {
    this.id = _set____db54di;
  }
  p3c() {
    return this.id;
  }
  wcs(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  xcs() {
    return this.reblogKey;
  }
  v9d(_set____db54di) {
    this.comment = _set____db54di;
  }
  n3c() {
    return this.comment;
  }
  jcr(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  kcr() {
    return this.nativeInlineImages;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'id', this.id);
    this.pcp(this_0, 'reblog_key', this.reblogKey);
    this.pcp(this_0, 'comment', this.comment);
    this.pcp(this_0, 'native_inline_images', this.nativeInlineImages);
    return this_0;
  }
}
class BlogTextPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.body = null;
  }
  haa(_set____db54di) {
    this.title = _set____db54di;
  }
  u3g() {
    return this.title;
  }
  zag(_set____db54di) {
    this.body = _set____db54di;
  }
  aah() {
    return this.body;
  }
  tcp() {
    // Inline function 'kotlin.also' call
    var this_0 = this.zcq();
    this.pcp(this_0, 'title', this.title);
    this.pcp(this_0, 'body', this.body);
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
  ucq(_set____db54di) {
    this.caption = _set____db54di;
  }
  vcq() {
    return this.caption;
  }
  rcs(_set____db54di) {
    this.embed = _set____db54di;
  }
  b69() {
    return this.embed;
  }
  ycq(_set____db54di) {
    this.data = _set____db54di;
  }
  c3g() {
    return this.data;
  }
  tcp() {
    // Inline function 'kotlin.also' call
    var this_0 = this.zcq();
    this.pcp(this_0, 'caption', this.caption);
    this.pcp(this_0, 'embed', this.embed);
    this.pcp(this_0, 'data', this.data);
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
  n34(_set____db54di) {
    this.tag = _set____db54di;
  }
  o34() {
    return this.tag;
  }
  bcq(_set____db54di) {
    this.before = _set____db54di;
  }
  ccq() {
    return this.before;
  }
  c60(_set____db54di) {
    this.limit = _set____db54di;
  }
  n37() {
    return this.limit;
  }
  acq(_set____db54di) {
    this.filter = _set____db54di;
  }
  m63() {
    return this.filter;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'tag', this.tag);
    this.pcp(this_0, 'before', this.before);
    this.pcp(this_0, 'limit', this.limit);
    this.pcp(this_0, 'filter', this.filter);
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
  c60(_set____db54di) {
    this.limit = _set____db54di;
  }
  n37() {
    return this.limit;
  }
  p3e(_set____db54di) {
    this.offset = _set____db54di;
  }
  q3e() {
    return this.offset;
  }
  d36(_set____db54di) {
    this.type = _set____db54di;
  }
  w35() {
    return this.type;
  }
  ycs(_set____db54di) {
    this.sinceId = _set____db54di;
  }
  u3d() {
    return this.sinceId;
  }
  fcq(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  gcq() {
    return this.reblogInfo;
  }
  hcq(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  icq() {
    return this.notesInfo;
  }
  jcq(_set____db54di) {
    this.npf = _set____db54di;
  }
  kcq() {
    return this.npf;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'limit', this.limit);
    this.pcp(this_0, 'offset', this.offset);
    this.pcp(this_0, 'type', this.type);
    this.pcp(this_0, 'since_id', this.sinceId);
    this.pcp(this_0, 'reblog_info', this.reblogInfo);
    this.pcp(this_0, 'notes_info', this.notesInfo);
    this.pcp(this_0, 'npf', this.npf);
    return this_0;
  }
}
class UserFollowRequest {
  constructor() {
    this.url = null;
    this.email = null;
  }
  x9c(_set____db54di) {
    this.url = _set____db54di;
  }
  a4k() {
    return this.url;
  }
  i6w(_set____db54di) {
    this.email = _set____db54di;
  }
  v2z() {
    return this.email;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'url', this.url);
    this.pcp(this_0, 'email', this.email);
    return this_0;
  }
}
class UserFollowingRequest {
  constructor() {
    this.limit = null;
    this.offset = null;
  }
  c60(_set____db54di) {
    this.limit = _set____db54di;
  }
  n37() {
    return this.limit;
  }
  p3e(_set____db54di) {
    this.offset = _set____db54di;
  }
  q3e() {
    return this.offset;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'limit', this.limit);
    this.pcp(this_0, 'offset', this.offset);
    return this_0;
  }
}
class UserLikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  u85(_set____db54di) {
    this.id = _set____db54di;
  }
  p3c() {
    return this.id;
  }
  wcs(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  xcs() {
    return this.reblogKey;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'id', this.id);
    this.pcp(this_0, 'reblog_key', this.reblogKey);
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
  c60(_set____db54di) {
    this.limit = _set____db54di;
  }
  n37() {
    return this.limit;
  }
  p3e(_set____db54di) {
    this.offset = _set____db54di;
  }
  q3e() {
    return this.offset;
  }
  bcq(_set____db54di) {
    this.before = _set____db54di;
  }
  ccq() {
    return this.before;
  }
  dcq(_set____db54di) {
    this.after = _set____db54di;
  }
  ecq() {
    return this.after;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'limit', this.limit);
    this.pcp(this_0, 'offset', this.offset);
    this.pcp(this_0, 'before', this.before);
    this.pcp(this_0, 'after', this.after);
    return this_0;
  }
}
class UserUnfollowRequest {
  constructor() {
    this.url = null;
  }
  x9c(_set____db54di) {
    this.url = _set____db54di;
  }
  a4k() {
    return this.url;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'url', this.url);
    return this_0;
  }
}
class UserUnlikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  u85(_set____db54di) {
    this.id = _set____db54di;
  }
  p3c() {
    return this.id;
  }
  wcs(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  xcs() {
    return this.reblogKey;
  }
  tcp() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.pcp(this_0, 'id', this.id);
    this.pcp(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', null, 2);
    tmp0_serialDesc.s1a('meta', true);
    tmp0_serialDesc.s1a('response', true);
    this.zcs_1 = tmp0_serialDesc;
  }
  iaz(typeSerial0) {
    return $serializer.cct(typeSerial0);
  }
  u1b(typeParamsSerializers) {
    return this.iaz(typeParamsSerializers[0]);
  }
}
class $serializer {
  constructor() {
    return new.target.dct();
  }
  static dct() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', $this, 2);
    tmp0_serialDesc.s1a('meta', true);
    tmp0_serialDesc.s1a('response', true);
    $this.act_1 = tmp0_serialDesc;
    return $this;
  }
  ect(encoder, value) {
    var tmp0_desc = this.act_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.meta == null)) {
      tmp1_output.s14(tmp0_desc, 0, $serializer_getInstance(), value.meta);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.response == null)) {
      tmp1_output.s14(tmp0_desc, 1, this.bct_1, value.response);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.ect(encoder, value instanceof Body ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.act_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, this.bct_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, this.bct_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return Body.fct(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.act_1;
  }
  i1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance()), get_nullable(this.bct_1)];
  }
  j1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.bct_1];
  }
  static cct(typeSerial0) {
    var $this = this.dct();
    $this.bct_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor() {
    Companion_getInstance_0();
    this.meta = null;
    this.response = null;
  }
  gct(_set____db54di) {
    this.meta = _set____db54di;
  }
  qbk() {
    return this.meta;
  }
  hct(_set____db54di) {
    this.response = _set____db54di;
  }
  x4h() {
    return this.response;
  }
  static fct(seen0, meta, response, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, Companion_getInstance_0().zcs_1);
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
    tmp0_serialDesc.s1a('status', true);
    tmp0_serialDesc.s1a('msg', true);
    this.ict_1 = tmp0_serialDesc;
  }
  jct(encoder, value) {
    var tmp0_desc = this.ict_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.status == null)) {
      tmp1_output.s14(tmp0_desc, 0, IntSerializer_getInstance(), value.status);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.msg == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.msg);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.jct(encoder, value instanceof Meta ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.ict_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return Meta.kct(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.ict_1;
  }
  i1b() {
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
  lct(_set____db54di) {
    this.status = _set____db54di;
  }
  h4k() {
    return this.status;
  }
  mct(_set____db54di) {
    this.msg = _set____db54di;
  }
  nct() {
    return this.msg;
  }
  static kct(seen0, status, msg, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().ict_1);
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
  ian(_set____db54di) {
    this.data = _set____db54di;
  }
  c3g() {
    return this.data;
  }
  jan(_set____db54di) {
    this.json = _set____db54di;
  }
  b1o() {
    return this.json;
  }
  h4k() {
    return this.status;
  }
  r() {
    return this.message;
  }
  sl() {
    return this.data;
  }
  tl() {
    return this.json;
  }
  uv() {
    return this.status;
  }
  f60() {
    return this.message;
  }
  oct(data, json, status, message) {
    return new Response(data, json, status, message);
  }
  copy(data, json, status, message, $super) {
    data = data === VOID ? this.data : data;
    json = json === VOID ? this.json : json;
    status = status === VOID ? this.status : status;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.oct(data, json, status, message) : $super.oct.call(this, data, json, status, message);
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
  jan(_set____db54di) {
    this.json = _set____db54di;
  }
  b1o() {
    return this.json;
  }
  h4k() {
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
    tmp0_serialDesc.s1a('access_token', true);
    tmp0_serialDesc.s1a('expires_in', true);
    tmp0_serialDesc.s1a('token_type', true);
    tmp0_serialDesc.s1a('scope', true);
    tmp0_serialDesc.s1a('refresh_token', true);
    this.pct_1 = tmp0_serialDesc;
  }
  qct(encoder, value) {
    var tmp0_desc = this.pct_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.accessToken == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.accessToken);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.expiresIn == null)) {
      tmp1_output.s14(tmp0_desc, 1, IntSerializer_getInstance(), value.expiresIn);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.tokenType == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.tokenType);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.scope == null)) {
      tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.scope);
    }
    if (tmp1_output.w14(tmp0_desc, 4) ? true : !(value.refreshToken == null)) {
      tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.refreshToken);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.qct(encoder, value instanceof AuthOAuth2TokenResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.pct_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.a13(tmp0_desc);
    if (tmp9_input.p13()) {
      tmp4_local0 = tmp9_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp9_input.b13(tmp0_desc);
    return AuthOAuth2TokenResponse.rct(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  iy() {
    return this.pct_1;
  }
  i1b() {
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
  j9z(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  k9z() {
    return this.accessToken;
  }
  qbh(_set____db54di) {
    this.expiresIn = _set____db54di;
  }
  g3g() {
    return this.expiresIn;
  }
  lbh(_set____db54di) {
    this.tokenType = _set____db54di;
  }
  mbh() {
    return this.tokenType;
  }
  nbh(_set____db54di) {
    this.scope = _set____db54di;
  }
  obh() {
    return this.scope;
  }
  abg(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  bbg() {
    return this.refreshToken;
  }
  static rct(seen0, accessToken, expiresIn, tokenType, scope, refreshToken, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().pct_1);
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
    tmp0_serialDesc.s1a('banner', true);
    tmp0_serialDesc.s1a('height', true);
    tmp0_serialDesc.s1a('width', true);
    this.sct_1 = tmp0_serialDesc;
  }
  tct(encoder, value) {
    var tmp0_desc = this.sct_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.banner == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.banner);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.s14(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.width == null)) {
      tmp1_output.s14(tmp0_desc, 2, IntSerializer_getInstance(), value.width);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.tct(encoder, value instanceof BlogBannerResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.sct_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.a13(tmp0_desc);
    if (tmp7_input.p13()) {
      tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp7_input.b13(tmp0_desc);
    return BlogBannerResponse.uct(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  iy() {
    return this.sct_1;
  }
  i1b() {
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
  q5y(_set____db54di) {
    this.banner = _set____db54di;
  }
  r5y() {
    return this.banner;
  }
  aa8(_set____db54di) {
    this.height = _set____db54di;
  }
  l77() {
    return this.height;
  }
  za7(_set____db54di) {
    this.width = _set____db54di;
  }
  j77() {
    return this.width;
  }
  static uct(seen0, banner, height, width, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().sct_1);
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
    tmp.vct_1 = [null, lazy(tmp_0, BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a)];
  }
}
class $serializer_3 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowersResponse', this, 2);
    tmp0_serialDesc.s1a('total_users', true);
    tmp0_serialDesc.s1a('users', true);
    this.wct_1 = tmp0_serialDesc;
  }
  xct(encoder, value) {
    var tmp0_desc = this.wct_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().vct_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.totalUsers == null)) {
      tmp1_output.s14(tmp0_desc, 0, IntSerializer_getInstance(), value.totalUsers);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.users == null)) {
      tmp1_output.s14(tmp0_desc, 1, tmp2_cached[1].d3(), value.users);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.xct(encoder, value instanceof BlogFollowersResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.wct_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().vct_1;
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return BlogFollowersResponse.yct(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.wct_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_4().vct_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].d3())];
  }
}
class BlogFollowersResponse {
  constructor() {
    Companion_getInstance_4();
    this.totalUsers = null;
    this.users = null;
  }
  zct(_set____db54di) {
    this.totalUsers = _set____db54di;
  }
  acu() {
    return this.totalUsers;
  }
  bcu(_set____db54di) {
    this.users = _set____db54di;
  }
  g36() {
    return this.users;
  }
  static yct(seen0, totalUsers, users, serializationConstructorMarker) {
    Companion_getInstance_4();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().wct_1);
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
    tmp.ccu_1 = [lazy(tmp_0, BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi), null];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowingResponse', this, 2);
    tmp0_serialDesc.s1a('blogs', true);
    tmp0_serialDesc.s1a('total_blogs', true);
    this.dcu_1 = tmp0_serialDesc;
  }
  ecu(encoder, value) {
    var tmp0_desc = this.dcu_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().ccu_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.blogs == null)) {
      tmp1_output.s14(tmp0_desc, 0, tmp2_cached[0].d3(), value.blogs);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.totalBlogs == null)) {
      tmp1_output.s14(tmp0_desc, 1, IntSerializer_getInstance(), value.totalBlogs);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.ecu(encoder, value instanceof BlogFollowingResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.dcu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().ccu_1;
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return BlogFollowingResponse.fcu(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.dcu_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_5().ccu_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].d3()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogFollowingResponse {
  constructor() {
    Companion_getInstance_5();
    this.blogs = null;
    this.totalBlogs = null;
  }
  gcu(_set____db54di) {
    this.blogs = _set____db54di;
  }
  hcu() {
    return this.blogs;
  }
  icu(_set____db54di) {
    this.totalBlogs = _set____db54di;
  }
  jcu() {
    return this.totalBlogs;
  }
  static fcu(seen0, blogs, totalBlogs, serializationConstructorMarker) {
    Companion_getInstance_5();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().dcu_1);
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
    tmp0_serialDesc.s1a('blog', true);
    this.kcu_1 = tmp0_serialDesc;
  }
  lcu(encoder, value) {
    var tmp0_desc = this.kcu_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.s14(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.lcu(encoder, value instanceof BlogInfoResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.kcu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.a13(tmp0_desc);
    if (tmp5_input.p13()) {
      tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp5_input.b13(tmp0_desc);
    return BlogInfoResponse.mcu(tmp3_bitMask0, tmp4_local0, null);
  }
  iy() {
    return this.kcu_1;
  }
  i1b() {
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
  ncu(_set____db54di) {
    this.blog = _set____db54di;
  }
  ocu() {
    return this.blog;
  }
  static mcu(seen0, blog, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().kcu_1);
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
    tmp.pcu_1 = [lazy(tmp_0, BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9), null];
  }
}
class $serializer_6 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogLikesResponse', this, 2);
    tmp0_serialDesc.s1a('liked_posts', true);
    tmp0_serialDesc.s1a('liked_count', true);
    this.qcu_1 = tmp0_serialDesc;
  }
  rcu(encoder, value) {
    var tmp0_desc = this.qcu_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().pcu_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.s14(tmp0_desc, 0, tmp2_cached[0].d3(), value.likedPosts);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.s14(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.rcu(encoder, value instanceof BlogLikesResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.qcu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().pcu_1;
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return BlogLikesResponse.scu(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.qcu_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_7().pcu_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].d3()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogLikesResponse {
  constructor() {
    Companion_getInstance_7();
    this.likedPosts = null;
    this.likedCount = null;
  }
  tcu(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  ucu() {
    return this.likedPosts;
  }
  naa(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  oaa() {
    return this.likedCount;
  }
  static scu(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_7();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().qcu_1);
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
    tmp.vcu_1 = [null, lazy(tmp_0, BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0), null];
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogPostsResponse', this, 3);
    tmp0_serialDesc.s1a('blog', true);
    tmp0_serialDesc.s1a('posts', true);
    tmp0_serialDesc.s1a('total_posts', true);
    this.wcu_1 = tmp0_serialDesc;
  }
  xcu(encoder, value) {
    var tmp0_desc = this.wcu_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().vcu_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.s14(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.posts == null)) {
      tmp1_output.s14(tmp0_desc, 1, tmp2_cached[1].d3(), value.posts);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.totalPosts == null)) {
      tmp1_output.s14(tmp0_desc, 2, IntSerializer_getInstance(), value.totalPosts);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.xcu(encoder, value instanceof BlogPostsResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.wcu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.a13(tmp0_desc);
    var tmp8_cached = Companion_getInstance_8().vcu_1;
    if (tmp7_input.p13()) {
      tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, tmp8_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, tmp8_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp7_input.b13(tmp0_desc);
    return BlogPostsResponse.ycu(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  iy() {
    return this.wcu_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_8().vcu_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_14()), get_nullable(tmp0_cached[1].d3()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogPostsResponse {
  constructor() {
    Companion_getInstance_8();
    this.blog = null;
    this.posts = null;
    this.totalPosts = null;
  }
  ncu(_set____db54di) {
    this.blog = _set____db54di;
  }
  ocu() {
    return this.blog;
  }
  zcu(_set____db54di) {
    this.posts = _set____db54di;
  }
  q66() {
    return this.posts;
  }
  acv(_set____db54di) {
    this.totalPosts = _set____db54di;
  }
  bcv() {
    return this.totalPosts;
  }
  static ycu(seen0, blog, posts, totalPosts, serializationConstructorMarker) {
    Companion_getInstance_8();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().wcu_1);
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
    tmp0_serialDesc.s1a('blog', true);
    this.ccv_1 = tmp0_serialDesc;
  }
  dcv(encoder, value) {
    var tmp0_desc = this.ccv_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.s14(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.dcv(encoder, value instanceof BlogUpdatedInfoResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.ccv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.a13(tmp0_desc);
    if (tmp5_input.p13()) {
      tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp5_input.b13(tmp0_desc);
    return BlogUpdatedInfoResponse.ecv(tmp3_bitMask0, tmp4_local0, null);
  }
  iy() {
    return this.ccv_1;
  }
  i1b() {
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
  ncu(_set____db54di) {
    this.blog = _set____db54di;
  }
  ocu() {
    return this.blog;
  }
  static ecv(seen0, blog, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().ccv_1);
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
    tmp.fcv_1 = [lazy(tmp_0, UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w)];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserDashboardResponse', this, 1);
    tmp0_serialDesc.s1a('posts', true);
    this.gcv_1 = tmp0_serialDesc;
  }
  hcv(encoder, value) {
    var tmp0_desc = this.gcv_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().fcv_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.posts == null)) {
      tmp1_output.s14(tmp0_desc, 0, tmp2_cached[0].d3(), value.posts);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.hcv(encoder, value instanceof UserDashboardResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.gcv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.a13(tmp0_desc);
    var tmp6_cached = Companion_getInstance_10().fcv_1;
    if (tmp5_input.p13()) {
      tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, tmp6_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, tmp6_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp5_input.b13(tmp0_desc);
    return UserDashboardResponse.icv(tmp3_bitMask0, tmp4_local0, null);
  }
  iy() {
    return this.gcv_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_10().fcv_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].d3())];
  }
}
class UserDashboardResponse {
  constructor() {
    Companion_getInstance_10();
    this.posts = null;
  }
  zcu(_set____db54di) {
    this.posts = _set____db54di;
  }
  q66() {
    return this.posts;
  }
  static icv(seen0, posts, serializationConstructorMarker) {
    Companion_getInstance_10();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().gcv_1);
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
    tmp.jcv_1 = [null, lazy(tmp_0, UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5)];
  }
}
class $serializer_10 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserFollowingResponse', this, 2);
    tmp0_serialDesc.s1a('total_blogs', true);
    tmp0_serialDesc.s1a('blogs', true);
    this.kcv_1 = tmp0_serialDesc;
  }
  lcv(encoder, value) {
    var tmp0_desc = this.kcv_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().jcv_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.totalBlog == null)) {
      tmp1_output.s14(tmp0_desc, 0, IntSerializer_getInstance(), value.totalBlog);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.blogs == null)) {
      tmp1_output.s14(tmp0_desc, 1, tmp2_cached[1].d3(), value.blogs);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.lcv(encoder, value instanceof UserFollowingResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.kcv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_11().jcv_1;
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return UserFollowingResponse.mcv(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.kcv_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_11().jcv_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].d3())];
  }
}
class UserFollowingResponse {
  constructor() {
    Companion_getInstance_11();
    this.totalBlog = null;
    this.blogs = null;
  }
  ncv(_set____db54di) {
    this.totalBlog = _set____db54di;
  }
  ocv() {
    return this.totalBlog;
  }
  gcu(_set____db54di) {
    this.blogs = _set____db54di;
  }
  hcu() {
    return this.blogs;
  }
  static mcv(seen0, totalBlog, blogs, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().kcv_1);
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
    tmp.pcv_1 = [lazy(tmp_0, UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0), null];
  }
}
class $serializer_11 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserLikesResponse', this, 2);
    tmp0_serialDesc.s1a('liked_posts', true);
    tmp0_serialDesc.s1a('liked_count', true);
    this.qcv_1 = tmp0_serialDesc;
  }
  rcv(encoder, value) {
    var tmp0_desc = this.qcv_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().pcv_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.s14(tmp0_desc, 0, tmp2_cached[0].d3(), value.likedPosts);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.s14(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.rcv(encoder, value instanceof UserLikesResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.qcv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().pcv_1;
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return UserLikesResponse.scv(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.qcv_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_12().pcv_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].d3()), get_nullable(IntSerializer_getInstance())];
  }
}
class UserLikesResponse {
  constructor() {
    Companion_getInstance_12();
    this.likedPosts = null;
    this.likedCount = null;
  }
  tcu(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  ucu() {
    return this.likedPosts;
  }
  naa(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  oaa() {
    return this.likedCount;
  }
  static scv(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().qcv_1);
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
    tmp0_serialDesc.s1a('user', true);
    this.tcv_1 = tmp0_serialDesc;
  }
  ucv(encoder, value) {
    var tmp0_desc = this.tcv_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.s14(tmp0_desc, 0, $serializer_getInstance_35(), value.user);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.ucv(encoder, value instanceof UserResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.tcv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.a13(tmp0_desc);
    if (tmp5_input.p13()) {
      tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp5_input.b13(tmp0_desc);
    return UserResponse.vcv(tmp3_bitMask0, tmp4_local0, null);
  }
  iy() {
    return this.tcv_1;
  }
  i1b() {
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
  wcv(_set____db54di) {
    this.user = _set____db54di;
  }
  k32() {
    return this.user;
  }
  static vcv(seen0, user, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().tcv_1);
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
  zcv() {
    return this.prefix;
  }
  get name() {
    return this.d1();
  }
  get ordinal() {
    return this.w4();
  }
}
class PostType extends Enum {
  constructor(name, ordinal, value) {
    super(name, ordinal);
    this.value = value;
  }
  d3() {
    return this.value;
  }
  get name() {
    return this.d1();
  }
  get ordinal() {
    return this.w4();
  }
}
class Companion_13 {}
class $serializer_13 {
  constructor() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.Note', this, 9);
    tmp0_serialDesc.s1a('type', true);
    tmp0_serialDesc.s1a('timestamp', true);
    tmp0_serialDesc.s1a('blog_name', true);
    tmp0_serialDesc.s1a('blog_uuid', true);
    tmp0_serialDesc.s1a('blog_url', true);
    tmp0_serialDesc.s1a('followed', true);
    tmp0_serialDesc.s1a('avatar_shape', true);
    tmp0_serialDesc.s1a('post_id', true);
    tmp0_serialDesc.s1a('reblog_parent_blog_name', true);
    this.ccw_1 = tmp0_serialDesc;
  }
  dcw(encoder, value) {
    var tmp0_desc = this.ccw_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.type == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.timestamp == null)) {
      tmp1_output.s14(tmp0_desc, 1, IntSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.blogName == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.blogName);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.blogUuid == null)) {
      tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.blogUuid);
    }
    if (tmp1_output.w14(tmp0_desc, 4) ? true : !(value.blogUrl == null)) {
      tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.blogUrl);
    }
    if (tmp1_output.w14(tmp0_desc, 5) ? true : !(value.isFollowed == null)) {
      tmp1_output.s14(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.w14(tmp0_desc, 6) ? true : !(value.avatarShape == null)) {
      tmp1_output.s14(tmp0_desc, 6, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.w14(tmp0_desc, 7) ? true : !(value.postId == null)) {
      tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.postId);
    }
    if (tmp1_output.w14(tmp0_desc, 8) ? true : !(value.reblogParentBlogName == null)) {
      tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.reblogParentBlogName);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.dcw(encoder, value instanceof Note ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.ccw_1;
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
    var tmp13_input = decoder.a13(tmp0_desc);
    if (tmp13_input.p13()) {
      tmp4_local0 = tmp13_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.o13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.o13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.o13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.o13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp13_input.b13(tmp0_desc);
    return Note.ecw(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  iy() {
    return this.ccw_1;
  }
  i1b() {
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
  w35() {
    return this.type;
  }
  fcw() {
    return this.timestamp;
  }
  xcp() {
    return this.blogName;
  }
  gcw() {
    return this.blogUuid;
  }
  hcw() {
    return this.blogUrl;
  }
  qaj() {
    return this.isFollowed;
  }
  icw() {
    return this.avatarShape;
  }
  k9f() {
    return this.postId;
  }
  jcw() {
    return this.reblogParentBlogName;
  }
  static ecw(seen0, type, timestamp, blogName, blogUuid, blogUrl, isFollowed, avatarShape, postId, reblogParentBlogName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().ccw_1);
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
    tmp0_serialDesc.s1a('64', true);
    tmp0_serialDesc.s1a('128', true);
    this.kcw_1 = tmp0_serialDesc;
  }
  lcw(encoder, value) {
    var tmp0_desc = this.kcw_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.size64 == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.size64);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.size128 == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.size128);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.lcw(encoder, value instanceof NoteAvatar ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.kcw_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return NoteAvatar.mcw(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.kcw_1;
  }
  i1b() {
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
  ncw(_set____db54di) {
    this.size64 = _set____db54di;
  }
  ocw() {
    return this.size64;
  }
  pcw(_set____db54di) {
    this.size128 = _set____db54di;
  }
  qcw() {
    return this.size128;
  }
  static mcw(seen0, size64, size128, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().kcw_1);
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
  static rcw() {
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
    tmp.scw_1 = [null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Blog$Companion$$childSerializers$_anonymous__tmgjug), null, null, null, null, null, null, null];
  }
}
class $serializer_15 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Blog', this, 18);
    tmp0_serialDesc.s1a('title', true);
    tmp0_serialDesc.s1a('posts', true);
    tmp0_serialDesc.s1a('name', true);
    tmp0_serialDesc.s1a('updated', true);
    tmp0_serialDesc.s1a('description', true);
    tmp0_serialDesc.s1a('ask', true);
    tmp0_serialDesc.s1a('ask_anon', true);
    tmp0_serialDesc.s1a('followed', true);
    tmp0_serialDesc.s1a('likes', true);
    tmp0_serialDesc.s1a('is_blocked_from_primary', true);
    tmp0_serialDesc.s1a('avatar', true);
    tmp0_serialDesc.s1a('url', true);
    tmp0_serialDesc.s1a('theme', true);
    tmp0_serialDesc.s1a('admin', true);
    tmp0_serialDesc.s1a('ask_page_title', true);
    tmp0_serialDesc.s1a('is_nsfw', true);
    tmp0_serialDesc.s1a('primary', true);
    tmp0_serialDesc.s1a('followers', true);
    this.tcw_1 = tmp0_serialDesc;
  }
  ucw(encoder, value) {
    var tmp0_desc = this.tcw_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().scw_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.postCount === 0)) {
      tmp1_output.k14(tmp0_desc, 1, value.postCount);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.s14(tmp0_desc, 3, IntSerializer_getInstance(), value.updated);
    }
    if (tmp1_output.w14(tmp0_desc, 4) ? true : !(value.description == null)) {
      tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.w14(tmp0_desc, 5) ? true : !(value.isAsk == null)) {
      tmp1_output.s14(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isAsk);
    }
    if (tmp1_output.w14(tmp0_desc, 6) ? true : !(value.isAskAnon == null)) {
      tmp1_output.s14(tmp0_desc, 6, BooleanSerializer_getInstance(), value.isAskAnon);
    }
    if (tmp1_output.w14(tmp0_desc, 7) ? true : !(value.isFollowed == null)) {
      tmp1_output.s14(tmp0_desc, 7, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.w14(tmp0_desc, 8) ? true : !(value.likeCount == null)) {
      tmp1_output.s14(tmp0_desc, 8, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.w14(tmp0_desc, 9) ? true : !(value.isBlockedFromPrimary == null)) {
      tmp1_output.s14(tmp0_desc, 9, BooleanSerializer_getInstance(), value.isBlockedFromPrimary);
    }
    if (tmp1_output.w14(tmp0_desc, 10) ? true : !(value.avatar == null)) {
      tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.avatar);
    }
    if (tmp1_output.w14(tmp0_desc, 11) ? true : !(value.url == null)) {
      tmp1_output.s14(tmp0_desc, 11, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.w14(tmp0_desc, 12) ? true : !(value.theme == null)) {
      tmp1_output.s14(tmp0_desc, 12, $serializer_getInstance_16(), value.theme);
    }
    if (tmp1_output.w14(tmp0_desc, 13) ? true : !(value.isAdmin == null)) {
      tmp1_output.s14(tmp0_desc, 13, BooleanSerializer_getInstance(), value.isAdmin);
    }
    if (tmp1_output.w14(tmp0_desc, 14) ? true : !(value.askPageTitle == null)) {
      tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.askPageTitle);
    }
    if (tmp1_output.w14(tmp0_desc, 15) ? true : !(value.isNSFW == null)) {
      tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isNSFW);
    }
    if (tmp1_output.w14(tmp0_desc, 16) ? true : !(value.isPrimary == null)) {
      tmp1_output.s14(tmp0_desc, 16, BooleanSerializer_getInstance(), value.isPrimary);
    }
    if (tmp1_output.w14(tmp0_desc, 17) ? true : !(value.followerCount == null)) {
      tmp1_output.s14(tmp0_desc, 17, IntSerializer_getInstance(), value.followerCount);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.ucw(encoder, value instanceof Blog ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.tcw_1;
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
    var tmp22_input = decoder.a13(tmp0_desc);
    var tmp23_cached = Companion_getInstance_16().scw_1;
    if (tmp22_input.p13()) {
      tmp4_local0 = tmp22_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.f13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.o13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.o13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.o13(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.o13(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.o13(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.o13(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.o13(tmp0_desc, 10, tmp23_cached[10].d3(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.o13(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.o13(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.o13(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.o13(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.o13(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.f13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.o13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.o13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.o13(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.o13(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.o13(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.o13(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.o13(tmp0_desc, 10, tmp23_cached[10].d3(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.o13(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.o13(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.o13(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.o13(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.o13(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp22_input.b13(tmp0_desc);
    return Blog.vcw(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  }
  iy() {
    return this.tcw_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_16().scw_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_16()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class Blog extends Resource {
  constructor() {
    return new.target.wcw();
  }
  static wcw() {
    Companion_getInstance_16();
    var $this = this.rcw();
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
  haa(_set____db54di) {
    this.title = _set____db54di;
  }
  u3g() {
    return this.title;
  }
  xcw(_set____db54di) {
    this.postCount = _set____db54di;
  }
  ycw() {
    return this.postCount;
  }
  q34(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  zcw(_set____db54di) {
    this.updated = _set____db54di;
  }
  acx() {
    return this.updated;
  }
  u34(_set____db54di) {
    this.description = _set____db54di;
  }
  e34() {
    return this.description;
  }
  bcx(_set____db54di) {
    this.isAsk = _set____db54di;
  }
  ccx() {
    return this.isAsk;
  }
  dcx(_set____db54di) {
    this.isAskAnon = _set____db54di;
  }
  ecx() {
    return this.isAskAnon;
  }
  fcx(_set____db54di) {
    this.isFollowed = _set____db54di;
  }
  qaj() {
    return this.isFollowed;
  }
  a32() {
    return this.likeCount;
  }
  gcx() {
    return this.isBlockedFromPrimary;
  }
  p5y() {
    return this.avatar;
  }
  a4k() {
    return this.url;
  }
  hcx() {
    return this.theme;
  }
  zao() {
    return this.isAdmin;
  }
  icx() {
    return this.askPageTitle;
  }
  jcx() {
    return this.isNSFW;
  }
  kcx() {
    return this.isPrimary;
  }
  lcx() {
    return this.followerCount;
  }
  static vcw(seen0, title, postCount, name, updated, description, isAsk, isAskAnon, isFollowed, likeCount, isBlockedFromPrimary, avatar, url, theme, isAdmin, askPageTitle, isNSFW, isPrimary, followerCount, serializationConstructorMarker) {
    Companion_getInstance_16();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().tcw_1);
    }
    var $this = this.rcw();
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
    tmp0_serialDesc.s1a('width', true);
    tmp0_serialDesc.s1a('height', true);
    tmp0_serialDesc.s1a('url', true);
    this.mcx_1 = tmp0_serialDesc;
  }
  ncx(encoder, value) {
    var tmp0_desc = this.mcx_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.s14(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.s14(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.ncx(encoder, value instanceof BlogAvatar ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.mcx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.a13(tmp0_desc);
    if (tmp7_input.p13()) {
      tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp7_input.b13(tmp0_desc);
    return BlogAvatar.ocx(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  iy() {
    return this.mcx_1;
  }
  i1b() {
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
  za7(_set____db54di) {
    this.width = _set____db54di;
  }
  j77() {
    return this.width;
  }
  aa8(_set____db54di) {
    this.height = _set____db54di;
  }
  l77() {
    return this.height;
  }
  x9c(_set____db54di) {
    this.url = _set____db54di;
  }
  a4k() {
    return this.url;
  }
  static ocx(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().mcx_1);
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
    tmp0_serialDesc.s1a('avatar_shape', true);
    tmp0_serialDesc.s1a('background_color', true);
    tmp0_serialDesc.s1a('body_font', true);
    tmp0_serialDesc.s1a('header_image', true);
    tmp0_serialDesc.s1a('header_image_focused', true);
    tmp0_serialDesc.s1a('header_image_poster', true);
    tmp0_serialDesc.s1a('header_image_scaled', true);
    tmp0_serialDesc.s1a('header_stretch', true);
    tmp0_serialDesc.s1a('link_color', true);
    tmp0_serialDesc.s1a('show_avatar', true);
    tmp0_serialDesc.s1a('show_description', true);
    tmp0_serialDesc.s1a('show_header_image', true);
    tmp0_serialDesc.s1a('show_title', true);
    tmp0_serialDesc.s1a('title_color', true);
    tmp0_serialDesc.s1a('title_font', true);
    tmp0_serialDesc.s1a('title_font_weight', true);
    this.pcx_1 = tmp0_serialDesc;
  }
  qcx(encoder, value) {
    var tmp0_desc = this.pcx_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.avatarShape == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.backgroundColor == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.backgroundColor);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.bodyFont == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.bodyFont);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.headerImage == null)) {
      tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.headerImage);
    }
    if (tmp1_output.w14(tmp0_desc, 4) ? true : !(value.headerImageFocused == null)) {
      tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.headerImageFocused);
    }
    if (tmp1_output.w14(tmp0_desc, 5) ? true : !(value.headerImagePoster == null)) {
      tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.headerImagePoster);
    }
    if (tmp1_output.w14(tmp0_desc, 6) ? true : !(value.headerImageScaled == null)) {
      tmp1_output.s14(tmp0_desc, 6, StringSerializer_getInstance(), value.headerImageScaled);
    }
    if (tmp1_output.w14(tmp0_desc, 7) ? true : !(value.isHeaderStretch === false)) {
      tmp1_output.h14(tmp0_desc, 7, value.isHeaderStretch);
    }
    if (tmp1_output.w14(tmp0_desc, 8) ? true : !(value.linkColor == null)) {
      tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.linkColor);
    }
    if (tmp1_output.w14(tmp0_desc, 9) ? true : !(value.isShowAvatar === false)) {
      tmp1_output.h14(tmp0_desc, 9, value.isShowAvatar);
    }
    if (tmp1_output.w14(tmp0_desc, 10) ? true : !(value.isShowDescription === false)) {
      tmp1_output.h14(tmp0_desc, 10, value.isShowDescription);
    }
    if (tmp1_output.w14(tmp0_desc, 11) ? true : !(value.isShowHeaderImage === false)) {
      tmp1_output.h14(tmp0_desc, 11, value.isShowHeaderImage);
    }
    if (tmp1_output.w14(tmp0_desc, 12) ? true : !(value.isShowTitle === false)) {
      tmp1_output.h14(tmp0_desc, 12, value.isShowTitle);
    }
    if (tmp1_output.w14(tmp0_desc, 13) ? true : !(value.titleColor == null)) {
      tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.titleColor);
    }
    if (tmp1_output.w14(tmp0_desc, 14) ? true : !(value.titleFont == null)) {
      tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.titleFont);
    }
    if (tmp1_output.w14(tmp0_desc, 15) ? true : !(value.titleFontWeight == null)) {
      tmp1_output.s14(tmp0_desc, 15, StringSerializer_getInstance(), value.titleFontWeight);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.qcx(encoder, value instanceof BlogTheme ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.pcx_1;
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
    var tmp20_input = decoder.a13(tmp0_desc);
    if (tmp20_input.p13()) {
      tmp4_local0 = tmp20_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.o13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.c13(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.c13(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.c13(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.c13(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.c13(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.o13(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.o13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.c13(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.c13(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.c13(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.c13(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.c13(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.o13(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp20_input.b13(tmp0_desc);
    return BlogTheme.rcx(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  iy() {
    return this.pcx_1;
  }
  i1b() {
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
  scx(_set____db54di) {
    this.avatarShape = _set____db54di;
  }
  icw() {
    return this.avatarShape;
  }
  tcx(_set____db54di) {
    this.backgroundColor = _set____db54di;
  }
  ucx() {
    return this.backgroundColor;
  }
  vcx(_set____db54di) {
    this.bodyFont = _set____db54di;
  }
  wcx() {
    return this.bodyFont;
  }
  xcx(_set____db54di) {
    this.headerImage = _set____db54di;
  }
  ycx() {
    return this.headerImage;
  }
  zcx(_set____db54di) {
    this.headerImageFocused = _set____db54di;
  }
  acy() {
    return this.headerImageFocused;
  }
  bcy(_set____db54di) {
    this.headerImagePoster = _set____db54di;
  }
  ccy() {
    return this.headerImagePoster;
  }
  dcy(_set____db54di) {
    this.headerImageScaled = _set____db54di;
  }
  ecy() {
    return this.headerImageScaled;
  }
  fcy(_set____db54di) {
    this.isHeaderStretch = _set____db54di;
  }
  gcy() {
    return this.isHeaderStretch;
  }
  hcy() {
    return this.linkColor;
  }
  icy() {
    return this.isShowAvatar;
  }
  jcy() {
    return this.isShowDescription;
  }
  kcy() {
    return this.isShowHeaderImage;
  }
  lcy() {
    return this.isShowTitle;
  }
  mcy() {
    return this.titleColor;
  }
  ncy() {
    return this.titleFont;
  }
  ocy() {
    return this.titleFontWeight;
  }
  static rcx(seen0, avatarShape, backgroundColor, bodyFont, headerImage, headerImageFocused, headerImagePoster, headerImageScaled, isHeaderStretch, linkColor, isShowAvatar, isShowDescription, isShowHeaderImage, isShowTitle, titleColor, titleFont, titleFontWeight, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().pcx_1);
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
    tmp0_serialDesc.s1a('comment', true);
    tmp0_serialDesc.s1a('tree_html', true);
    this.pcy_1 = tmp0_serialDesc;
  }
  qcy(encoder, value) {
    var tmp0_desc = this.pcy_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.comment == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.comment);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.treeHtml == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.treeHtml);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.qcy(encoder, value instanceof Reblog ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.pcy_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return Reblog.rcy(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.pcy_1;
  }
  i1b() {
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
  v9d(_set____db54di) {
    this.comment = _set____db54di;
  }
  n3c() {
    return this.comment;
  }
  scy(_set____db54di) {
    this.treeHtml = _set____db54di;
  }
  tcy() {
    return this.treeHtml;
  }
  static rcy(seen0, comment, treeHtml, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().pcy_1);
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
  t1o() {
    return PostSerializer_getInstance();
  }
}
class Post {
  constructor() {
    return new.target.ucy();
  }
  static ucy() {
    return createThis(this);
  }
  vcy() {
    return this instanceof LegacyTextPost ? this : null;
  }
  wcy() {
    return this instanceof LegacyPhotoPost ? this : null;
  }
  xcy() {
    return this instanceof LegacyQuotePost ? this : null;
  }
  ycy() {
    return this instanceof LegacyLinkPost ? this : null;
  }
  zcy() {
    return this instanceof LegacyVideoPost ? this : null;
  }
  acz() {
    return this instanceof LegacyAudioPost ? this : null;
  }
  bcz() {
    return this instanceof LegacyChatPost ? this : null;
  }
  ccz() {
    return this instanceof LegacyAnswerPost ? this : null;
  }
  dcz() {
    return this instanceof LegacyPostcardPost ? this : null;
  }
  get asLegacyTextPost() {
    return this.vcy();
  }
  get asLegacyPhotoPost() {
    return this.wcy();
  }
  get asLegacyQuotePost() {
    return this.xcy();
  }
  get asLegacyLinkPost() {
    return this.ycy();
  }
  get asLegacyVideoPost() {
    return this.zcy();
  }
  get asLegacyAudioPost() {
    return this.acz();
  }
  get asLegacyChatPost() {
    return this.bcz();
  }
  get asLegacyAnswerPost() {
    return this.ccz();
  }
  get asLegacyPostcardPost() {
    return this.dcz();
  }
  get blogName() {
    return this.xcp();
  }
  set blogName(value) {
    this.wcp(value);
  }
  get idString() {
    return this.fcz();
  }
  set idString(value) {
    this.ecz(value);
  }
  get genesisPostId() {
    return this.hcz();
  }
  set genesisPostId(value) {
    this.gcz(value);
  }
  get postUrl() {
    return this.jcz();
  }
  set postUrl(value) {
    this.icz(value);
  }
  get parentPostUrl() {
    return this.lcz();
  }
  set parentPostUrl(value) {
    this.kcz(value);
  }
  get type() {
    return this.w35();
  }
  set type(value) {
    this.d36(value);
  }
  get timestamp() {
    return this.fcw();
  }
  set timestamp(value) {
    this.mcz(value);
  }
  get date() {
    return this.ecr();
  }
  set date(value) {
    this.dcr(value);
  }
  get format() {
    return this.gcr();
  }
  set format(value) {
    this.fcr(value);
  }
  get reblogKey() {
    return this.xcs();
  }
  set reblogKey(value) {
    this.wcs(value);
  }
  get tags() {
    return this.laa();
  }
  set tags(value) {
    this.qaf(value);
  }
  get isBookmarklet() {
    return this.ocz();
  }
  set isBookmarklet(value) {
    this.ncz(value);
  }
  get isMobile() {
    return this.qcz();
  }
  set isMobile(value) {
    this.pcz(value);
  }
  get sourceUrl() {
    return this.y35();
  }
  set sourceUrl(value) {
    this.x35(value);
  }
  get sourceTitle() {
    return this.scz();
  }
  set sourceTitle(value) {
    this.rcz(value);
  }
  get isLiked() {
    return this.iai();
  }
  set isLiked(value) {
    this.tcz(value);
  }
  get state() {
    return this.q7r();
  }
  set state(value) {
    this.da2(value);
  }
  get title() {
    return this.u3g();
  }
  set title(value) {
    this.haa(value);
  }
  get body() {
    return this.aah();
  }
  set body(value) {
    this.zag(value);
  }
  get noteCount() {
    return this.vcz();
  }
  set noteCount(value) {
    this.ucz(value);
  }
  get summary() {
    return this.vah();
  }
  set summary(value) {
    this.uah(value);
  }
  get slug() {
    return this.icr();
  }
  set slug(value) {
    this.hcr(value);
  }
  get rebloggedFromId() {
    return this.xcz();
  }
  set rebloggedFromId(value) {
    this.wcz(value);
  }
  get rebloggedFromUrl() {
    return this.zcz();
  }
  set rebloggedFromUrl(value) {
    this.ycz(value);
  }
  get rebloggedFromName() {
    return this.bd0();
  }
  set rebloggedFromName(value) {
    this.ad0(value);
  }
  get rebloggedFromTitle() {
    return this.dd0();
  }
  set rebloggedFromTitle(value) {
    this.cd0(value);
  }
  get rebloggedFromUuid() {
    return this.fd0();
  }
  set rebloggedFromUuid(value) {
    this.ed0(value);
  }
  get rebloggedFromCanMessage() {
    return this.hd0();
  }
  set rebloggedFromCanMessage(value) {
    this.gd0(value);
  }
  get rebloggedFromFollowing() {
    return this.jd0();
  }
  set rebloggedFromFollowing(value) {
    this.id0(value);
  }
  get rebloggedRootId() {
    return this.ld0();
  }
  set rebloggedRootId(value) {
    this.kd0(value);
  }
  get rebloggedRootUrl() {
    return this.nd0();
  }
  set rebloggedRootUrl(value) {
    this.md0(value);
  }
  get rebloggedRootName() {
    return this.pd0();
  }
  set rebloggedRootName(value) {
    this.od0(value);
  }
  get rebloggedRootTitle() {
    return this.rd0();
  }
  set rebloggedRootTitle(value) {
    this.qd0(value);
  }
  get rebloggedRootUuid() {
    return this.td0();
  }
  set rebloggedRootUuid(value) {
    this.sd0(value);
  }
  get rebloggedRootCanMessage() {
    return this.vd0();
  }
  set rebloggedRootCanMessage(value) {
    this.ud0(value);
  }
  get rebloggedRootFollowing() {
    return this.xd0();
  }
  set rebloggedRootFollowing(value) {
    this.wd0(value);
  }
  get notes() {
    return this.zd0();
  }
  set notes(value) {
    this.yd0(value);
  }
  get blog() {
    return this.ocu();
  }
  set blog(value) {
    this.ncu(value);
  }
  get reblog() {
    return this.ybj();
  }
  set reblog(value) {
    this.ad1(value);
  }
  get trail() {
    return this.cd1();
  }
  set trail(value) {
    this.bd1(value);
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
    tmp.dd1_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1), null, null, null, null];
  }
  t1o() {
    return $serializer_getInstance_18();
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAnswerPost', this, 44);
    tmp0_serialDesc.s1a('blog_name', false);
    tmp0_serialDesc.s1a('id_string', false);
    tmp0_serialDesc.s1a('genesis_post_id', false);
    tmp0_serialDesc.s1a('post_url', false);
    tmp0_serialDesc.s1a('parent_post_url', false);
    tmp0_serialDesc.s1a('type', false);
    tmp0_serialDesc.s1a('timestamp', false);
    tmp0_serialDesc.s1a('date', false);
    tmp0_serialDesc.s1a('format', false);
    tmp0_serialDesc.s1a('reblog_key', false);
    tmp0_serialDesc.s1a('tags', false);
    tmp0_serialDesc.s1a('bookmarklet', false);
    tmp0_serialDesc.s1a('mobile', false);
    tmp0_serialDesc.s1a('source_url', false);
    tmp0_serialDesc.s1a('source_title', false);
    tmp0_serialDesc.s1a('liked', false);
    tmp0_serialDesc.s1a('state', false);
    tmp0_serialDesc.s1a('title', false);
    tmp0_serialDesc.s1a('body', false);
    tmp0_serialDesc.s1a('note_count', false);
    tmp0_serialDesc.s1a('summary', false);
    tmp0_serialDesc.s1a('slug', false);
    tmp0_serialDesc.s1a('reblogged_from_id', false);
    tmp0_serialDesc.s1a('reblogged_from_url', false);
    tmp0_serialDesc.s1a('reblogged_from_name', false);
    tmp0_serialDesc.s1a('reblogged_from_title', false);
    tmp0_serialDesc.s1a('reblogged_from_uuid', false);
    tmp0_serialDesc.s1a('reblogged_from_can_message', false);
    tmp0_serialDesc.s1a('reblogged_from_following', false);
    tmp0_serialDesc.s1a('reblogged_root_id', false);
    tmp0_serialDesc.s1a('reblogged_root_url', false);
    tmp0_serialDesc.s1a('reblogged_root_name', false);
    tmp0_serialDesc.s1a('reblogged_root_title', false);
    tmp0_serialDesc.s1a('reblogged_root_uuid', false);
    tmp0_serialDesc.s1a('reblogged_root_can_message', false);
    tmp0_serialDesc.s1a('reblogged_root_following', false);
    tmp0_serialDesc.s1a('notes', false);
    tmp0_serialDesc.s1a('blog', false);
    tmp0_serialDesc.s1a('reblog', false);
    tmp0_serialDesc.s1a('trail', false);
    tmp0_serialDesc.s1a('asking_name', true);
    tmp0_serialDesc.s1a('asking_url', true);
    tmp0_serialDesc.s1a('question', true);
    tmp0_serialDesc.s1a('answer', true);
    this.ed1_1 = tmp0_serialDesc;
  }
  fd1(encoder, value) {
    var tmp0_desc = this.ed1_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().dd1_1;
    tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.gd1_1);
    tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.hd1_1);
    tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.id1_1);
    tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.jd1_1);
    tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.kd1_1);
    tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.ld1_1);
    tmp1_output.s14(tmp0_desc, 6, IntSerializer_getInstance(), value.md1_1);
    tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.nd1_1);
    tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.od1_1);
    tmp1_output.s14(tmp0_desc, 9, StringSerializer_getInstance(), value.pd1_1);
    tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.qd1_1);
    tmp1_output.s14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.rd1_1);
    tmp1_output.s14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.sd1_1);
    tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.td1_1);
    tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.ud1_1);
    tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.vd1_1);
    tmp1_output.s14(tmp0_desc, 16, StringSerializer_getInstance(), value.wd1_1);
    tmp1_output.s14(tmp0_desc, 17, StringSerializer_getInstance(), value.xd1_1);
    tmp1_output.s14(tmp0_desc, 18, StringSerializer_getInstance(), value.yd1_1);
    tmp1_output.s14(tmp0_desc, 19, IntSerializer_getInstance(), value.zd1_1);
    tmp1_output.s14(tmp0_desc, 20, StringSerializer_getInstance(), value.ad2_1);
    tmp1_output.s14(tmp0_desc, 21, StringSerializer_getInstance(), value.bd2_1);
    tmp1_output.s14(tmp0_desc, 22, StringSerializer_getInstance(), value.cd2_1);
    tmp1_output.s14(tmp0_desc, 23, StringSerializer_getInstance(), value.dd2_1);
    tmp1_output.s14(tmp0_desc, 24, StringSerializer_getInstance(), value.ed2_1);
    tmp1_output.s14(tmp0_desc, 25, StringSerializer_getInstance(), value.fd2_1);
    tmp1_output.s14(tmp0_desc, 26, StringSerializer_getInstance(), value.gd2_1);
    tmp1_output.s14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.hd2_1);
    tmp1_output.s14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.id2_1);
    tmp1_output.s14(tmp0_desc, 29, StringSerializer_getInstance(), value.jd2_1);
    tmp1_output.s14(tmp0_desc, 30, StringSerializer_getInstance(), value.kd2_1);
    tmp1_output.s14(tmp0_desc, 31, StringSerializer_getInstance(), value.ld2_1);
    tmp1_output.s14(tmp0_desc, 32, StringSerializer_getInstance(), value.md2_1);
    tmp1_output.s14(tmp0_desc, 33, StringSerializer_getInstance(), value.nd2_1);
    tmp1_output.s14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.od2_1);
    tmp1_output.s14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.pd2_1);
    tmp1_output.s14(tmp0_desc, 36, tmp2_cached[36].d3(), value.qd2_1);
    tmp1_output.s14(tmp0_desc, 37, $serializer_getInstance_14(), value.rd2_1);
    tmp1_output.s14(tmp0_desc, 38, $serializer_getInstance_17(), value.sd2_1);
    tmp1_output.s14(tmp0_desc, 39, tmp2_cached[39].d3(), value.td2_1);
    if (tmp1_output.w14(tmp0_desc, 40) ? true : !(value.askingName == null)) {
      tmp1_output.s14(tmp0_desc, 40, StringSerializer_getInstance(), value.askingName);
    }
    if (tmp1_output.w14(tmp0_desc, 41) ? true : !(value.askingUrl == null)) {
      tmp1_output.s14(tmp0_desc, 41, StringSerializer_getInstance(), value.askingUrl);
    }
    if (tmp1_output.w14(tmp0_desc, 42) ? true : !(value.question == null)) {
      tmp1_output.s14(tmp0_desc, 42, StringSerializer_getInstance(), value.question);
    }
    if (tmp1_output.w14(tmp0_desc, 43) ? true : !(value.answer == null)) {
      tmp1_output.s14(tmp0_desc, 43, StringSerializer_getInstance(), value.answer);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.fd1(encoder, value instanceof LegacyAnswerPost ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.ed1_1;
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
    var tmp49_input = decoder.a13(tmp0_desc);
    var tmp50_cached = Companion_getInstance_21().dd1_1;
    if (tmp49_input.p13()) {
      tmp5_local0 = tmp49_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.o13(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.o13(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.o13(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.o13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.o13(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.o13(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.o13(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.o13(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.o13(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.o13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.o13(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.o13(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp49_input.b13(tmp0_desc);
    return LegacyAnswerPost.ud2(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  iy() {
    return this.ed1_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_21().dd1_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAnswerPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.vd2(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static vd2(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_21();
    var $this = this.ucy();
    $this.gd1_1 = blogName;
    $this.hd1_1 = idString;
    $this.id1_1 = genesisPostId;
    $this.jd1_1 = postUrl;
    $this.kd1_1 = parentPostUrl;
    $this.ld1_1 = type;
    $this.md1_1 = timestamp;
    $this.nd1_1 = date;
    $this.od1_1 = format;
    $this.pd1_1 = reblogKey;
    $this.qd1_1 = tags;
    $this.rd1_1 = isBookmarklet;
    $this.sd1_1 = isMobile;
    $this.td1_1 = sourceUrl;
    $this.ud1_1 = sourceTitle;
    $this.vd1_1 = isLiked;
    $this.wd1_1 = state;
    $this.xd1_1 = title;
    $this.yd1_1 = body;
    $this.zd1_1 = noteCount;
    $this.ad2_1 = summary;
    $this.bd2_1 = slug;
    $this.cd2_1 = rebloggedFromId;
    $this.dd2_1 = rebloggedFromUrl;
    $this.ed2_1 = rebloggedFromName;
    $this.fd2_1 = rebloggedFromTitle;
    $this.gd2_1 = rebloggedFromUuid;
    $this.hd2_1 = rebloggedFromCanMessage;
    $this.id2_1 = rebloggedFromFollowing;
    $this.jd2_1 = rebloggedRootId;
    $this.kd2_1 = rebloggedRootUrl;
    $this.ld2_1 = rebloggedRootName;
    $this.md2_1 = rebloggedRootTitle;
    $this.nd2_1 = rebloggedRootUuid;
    $this.od2_1 = rebloggedRootCanMessage;
    $this.pd2_1 = rebloggedRootFollowing;
    $this.qd2_1 = notes;
    $this.rd2_1 = blog;
    $this.sd2_1 = reblog;
    $this.td2_1 = trail;
    $this.askingName = null;
    $this.askingUrl = null;
    $this.question = null;
    $this.answer = null;
    return $this;
  }
  wcp(_set____db54di) {
    this.gd1_1 = _set____db54di;
  }
  xcp() {
    return this.gd1_1;
  }
  ecz(_set____db54di) {
    this.hd1_1 = _set____db54di;
  }
  fcz() {
    return this.hd1_1;
  }
  gcz(_set____db54di) {
    this.id1_1 = _set____db54di;
  }
  hcz() {
    return this.id1_1;
  }
  icz(_set____db54di) {
    this.jd1_1 = _set____db54di;
  }
  jcz() {
    return this.jd1_1;
  }
  kcz(_set____db54di) {
    this.kd1_1 = _set____db54di;
  }
  lcz() {
    return this.kd1_1;
  }
  d36(_set____db54di) {
    this.ld1_1 = _set____db54di;
  }
  w35() {
    return this.ld1_1;
  }
  mcz(_set____db54di) {
    this.md1_1 = _set____db54di;
  }
  fcw() {
    return this.md1_1;
  }
  dcr(_set____db54di) {
    this.nd1_1 = _set____db54di;
  }
  ecr() {
    return this.nd1_1;
  }
  fcr(_set____db54di) {
    this.od1_1 = _set____db54di;
  }
  gcr() {
    return this.od1_1;
  }
  wcs(_set____db54di) {
    this.pd1_1 = _set____db54di;
  }
  xcs() {
    return this.pd1_1;
  }
  qaf(_set____db54di) {
    this.qd1_1 = _set____db54di;
  }
  laa() {
    return this.qd1_1;
  }
  ncz(_set____db54di) {
    this.rd1_1 = _set____db54di;
  }
  ocz() {
    return this.rd1_1;
  }
  pcz(_set____db54di) {
    this.sd1_1 = _set____db54di;
  }
  qcz() {
    return this.sd1_1;
  }
  x35(_set____db54di) {
    this.td1_1 = _set____db54di;
  }
  y35() {
    return this.td1_1;
  }
  rcz(_set____db54di) {
    this.ud1_1 = _set____db54di;
  }
  scz() {
    return this.ud1_1;
  }
  tcz(_set____db54di) {
    this.vd1_1 = _set____db54di;
  }
  iai() {
    return this.vd1_1;
  }
  da2(_set____db54di) {
    this.wd1_1 = _set____db54di;
  }
  q7r() {
    return this.wd1_1;
  }
  haa(_set____db54di) {
    this.xd1_1 = _set____db54di;
  }
  u3g() {
    return this.xd1_1;
  }
  zag(_set____db54di) {
    this.yd1_1 = _set____db54di;
  }
  aah() {
    return this.yd1_1;
  }
  ucz(_set____db54di) {
    this.zd1_1 = _set____db54di;
  }
  vcz() {
    return this.zd1_1;
  }
  uah(_set____db54di) {
    this.ad2_1 = _set____db54di;
  }
  vah() {
    return this.ad2_1;
  }
  hcr(_set____db54di) {
    this.bd2_1 = _set____db54di;
  }
  icr() {
    return this.bd2_1;
  }
  wcz(_set____db54di) {
    this.cd2_1 = _set____db54di;
  }
  xcz() {
    return this.cd2_1;
  }
  ycz(_set____db54di) {
    this.dd2_1 = _set____db54di;
  }
  zcz() {
    return this.dd2_1;
  }
  ad0(_set____db54di) {
    this.ed2_1 = _set____db54di;
  }
  bd0() {
    return this.ed2_1;
  }
  cd0(_set____db54di) {
    this.fd2_1 = _set____db54di;
  }
  dd0() {
    return this.fd2_1;
  }
  ed0(_set____db54di) {
    this.gd2_1 = _set____db54di;
  }
  fd0() {
    return this.gd2_1;
  }
  gd0(_set____db54di) {
    this.hd2_1 = _set____db54di;
  }
  hd0() {
    return this.hd2_1;
  }
  id0(_set____db54di) {
    this.id2_1 = _set____db54di;
  }
  jd0() {
    return this.id2_1;
  }
  kd0(_set____db54di) {
    this.jd2_1 = _set____db54di;
  }
  ld0() {
    return this.jd2_1;
  }
  md0(_set____db54di) {
    this.kd2_1 = _set____db54di;
  }
  nd0() {
    return this.kd2_1;
  }
  od0(_set____db54di) {
    this.ld2_1 = _set____db54di;
  }
  pd0() {
    return this.ld2_1;
  }
  qd0(_set____db54di) {
    this.md2_1 = _set____db54di;
  }
  rd0() {
    return this.md2_1;
  }
  sd0(_set____db54di) {
    this.nd2_1 = _set____db54di;
  }
  td0() {
    return this.nd2_1;
  }
  ud0(_set____db54di) {
    this.od2_1 = _set____db54di;
  }
  vd0() {
    return this.od2_1;
  }
  wd0(_set____db54di) {
    this.pd2_1 = _set____db54di;
  }
  xd0() {
    return this.pd2_1;
  }
  yd0(_set____db54di) {
    this.qd2_1 = _set____db54di;
  }
  zd0() {
    return this.qd2_1;
  }
  ncu(_set____db54di) {
    this.rd2_1 = _set____db54di;
  }
  ocu() {
    return this.rd2_1;
  }
  ad1(_set____db54di) {
    this.sd2_1 = _set____db54di;
  }
  ybj() {
    return this.sd2_1;
  }
  bd1(_set____db54di) {
    this.td2_1 = _set____db54di;
  }
  cd1() {
    return this.td2_1;
  }
  wd2() {
    return this.askingName;
  }
  xd2() {
    return this.askingUrl;
  }
  yd2() {
    return this.question;
  }
  tcs() {
    return this.answer;
  }
  static ud2(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, askingName, askingUrl, question, answer, serializationConstructorMarker) {
    Companion_getInstance_21();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_18().ed1_1);
    }
    var $this = this.ucy();
    $this.gd1_1 = blogName;
    $this.hd1_1 = idString;
    $this.id1_1 = genesisPostId;
    $this.jd1_1 = postUrl;
    $this.kd1_1 = parentPostUrl;
    $this.ld1_1 = type;
    $this.md1_1 = timestamp;
    $this.nd1_1 = date;
    $this.od1_1 = format;
    $this.pd1_1 = reblogKey;
    $this.qd1_1 = tags;
    $this.rd1_1 = isBookmarklet;
    $this.sd1_1 = isMobile;
    $this.td1_1 = sourceUrl;
    $this.ud1_1 = sourceTitle;
    $this.vd1_1 = isLiked;
    $this.wd1_1 = state;
    $this.xd1_1 = title;
    $this.yd1_1 = body;
    $this.zd1_1 = noteCount;
    $this.ad2_1 = summary;
    $this.bd2_1 = slug;
    $this.cd2_1 = rebloggedFromId;
    $this.dd2_1 = rebloggedFromUrl;
    $this.ed2_1 = rebloggedFromName;
    $this.fd2_1 = rebloggedFromTitle;
    $this.gd2_1 = rebloggedFromUuid;
    $this.hd2_1 = rebloggedFromCanMessage;
    $this.id2_1 = rebloggedFromFollowing;
    $this.jd2_1 = rebloggedRootId;
    $this.kd2_1 = rebloggedRootUrl;
    $this.ld2_1 = rebloggedRootName;
    $this.md2_1 = rebloggedRootTitle;
    $this.nd2_1 = rebloggedRootUuid;
    $this.od2_1 = rebloggedRootCanMessage;
    $this.pd2_1 = rebloggedRootFollowing;
    $this.qd2_1 = notes;
    $this.rd2_1 = blog;
    $this.sd2_1 = reblog;
    $this.td2_1 = trail;
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
    tmp.zd2_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1), null];
  }
  t1o() {
    return $serializer_getInstance_19();
  }
}
class $serializer_20 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAudioPost', this, 41);
    tmp0_serialDesc.s1a('blog_name', false);
    tmp0_serialDesc.s1a('id_string', false);
    tmp0_serialDesc.s1a('genesis_post_id', false);
    tmp0_serialDesc.s1a('post_url', false);
    tmp0_serialDesc.s1a('parent_post_url', false);
    tmp0_serialDesc.s1a('type', false);
    tmp0_serialDesc.s1a('timestamp', false);
    tmp0_serialDesc.s1a('date', false);
    tmp0_serialDesc.s1a('format', false);
    tmp0_serialDesc.s1a('reblog_key', false);
    tmp0_serialDesc.s1a('tags', false);
    tmp0_serialDesc.s1a('bookmarklet', false);
    tmp0_serialDesc.s1a('mobile', false);
    tmp0_serialDesc.s1a('source_url', false);
    tmp0_serialDesc.s1a('source_title', false);
    tmp0_serialDesc.s1a('liked', false);
    tmp0_serialDesc.s1a('state', false);
    tmp0_serialDesc.s1a('title', false);
    tmp0_serialDesc.s1a('body', false);
    tmp0_serialDesc.s1a('note_count', false);
    tmp0_serialDesc.s1a('summary', false);
    tmp0_serialDesc.s1a('slug', false);
    tmp0_serialDesc.s1a('reblogged_from_id', false);
    tmp0_serialDesc.s1a('reblogged_from_url', false);
    tmp0_serialDesc.s1a('reblogged_from_name', false);
    tmp0_serialDesc.s1a('reblogged_from_title', false);
    tmp0_serialDesc.s1a('reblogged_from_uuid', false);
    tmp0_serialDesc.s1a('reblogged_from_can_message', false);
    tmp0_serialDesc.s1a('reblogged_from_following', false);
    tmp0_serialDesc.s1a('reblogged_root_id', false);
    tmp0_serialDesc.s1a('reblogged_root_url', false);
    tmp0_serialDesc.s1a('reblogged_root_name', false);
    tmp0_serialDesc.s1a('reblogged_root_title', false);
    tmp0_serialDesc.s1a('reblogged_root_uuid', false);
    tmp0_serialDesc.s1a('reblogged_root_can_message', false);
    tmp0_serialDesc.s1a('reblogged_root_following', false);
    tmp0_serialDesc.s1a('notes', false);
    tmp0_serialDesc.s1a('blog', false);
    tmp0_serialDesc.s1a('reblog', false);
    tmp0_serialDesc.s1a('trail', false);
    tmp0_serialDesc.s1a('caption', true);
    this.ad3_1 = tmp0_serialDesc;
  }
  bd3(encoder, value) {
    var tmp0_desc = this.ad3_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().zd2_1;
    tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.cd3_1);
    tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.dd3_1);
    tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.ed3_1);
    tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.fd3_1);
    tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.gd3_1);
    tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.hd3_1);
    tmp1_output.s14(tmp0_desc, 6, IntSerializer_getInstance(), value.id3_1);
    tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.jd3_1);
    tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.kd3_1);
    tmp1_output.s14(tmp0_desc, 9, StringSerializer_getInstance(), value.ld3_1);
    tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.md3_1);
    tmp1_output.s14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.nd3_1);
    tmp1_output.s14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.od3_1);
    tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.pd3_1);
    tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.qd3_1);
    tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.rd3_1);
    tmp1_output.s14(tmp0_desc, 16, StringSerializer_getInstance(), value.sd3_1);
    tmp1_output.s14(tmp0_desc, 17, StringSerializer_getInstance(), value.td3_1);
    tmp1_output.s14(tmp0_desc, 18, StringSerializer_getInstance(), value.ud3_1);
    tmp1_output.s14(tmp0_desc, 19, IntSerializer_getInstance(), value.vd3_1);
    tmp1_output.s14(tmp0_desc, 20, StringSerializer_getInstance(), value.wd3_1);
    tmp1_output.s14(tmp0_desc, 21, StringSerializer_getInstance(), value.xd3_1);
    tmp1_output.s14(tmp0_desc, 22, StringSerializer_getInstance(), value.yd3_1);
    tmp1_output.s14(tmp0_desc, 23, StringSerializer_getInstance(), value.zd3_1);
    tmp1_output.s14(tmp0_desc, 24, StringSerializer_getInstance(), value.ad4_1);
    tmp1_output.s14(tmp0_desc, 25, StringSerializer_getInstance(), value.bd4_1);
    tmp1_output.s14(tmp0_desc, 26, StringSerializer_getInstance(), value.cd4_1);
    tmp1_output.s14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.dd4_1);
    tmp1_output.s14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.ed4_1);
    tmp1_output.s14(tmp0_desc, 29, StringSerializer_getInstance(), value.fd4_1);
    tmp1_output.s14(tmp0_desc, 30, StringSerializer_getInstance(), value.gd4_1);
    tmp1_output.s14(tmp0_desc, 31, StringSerializer_getInstance(), value.hd4_1);
    tmp1_output.s14(tmp0_desc, 32, StringSerializer_getInstance(), value.id4_1);
    tmp1_output.s14(tmp0_desc, 33, StringSerializer_getInstance(), value.jd4_1);
    tmp1_output.s14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.kd4_1);
    tmp1_output.s14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ld4_1);
    tmp1_output.s14(tmp0_desc, 36, tmp2_cached[36].d3(), value.md4_1);
    tmp1_output.s14(tmp0_desc, 37, $serializer_getInstance_14(), value.nd4_1);
    tmp1_output.s14(tmp0_desc, 38, $serializer_getInstance_17(), value.od4_1);
    tmp1_output.s14(tmp0_desc, 39, tmp2_cached[39].d3(), value.pd4_1);
    if (tmp1_output.w14(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.s14(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.bd3(encoder, value instanceof LegacyAudioPost ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.ad3_1;
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
    var tmp46_input = decoder.a13(tmp0_desc);
    var tmp47_cached = Companion_getInstance_22().zd2_1;
    if (tmp46_input.p13()) {
      tmp5_local0 = tmp46_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.o13(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.o13(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.o13(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.o13(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.o13(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.o13(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp46_input.b13(tmp0_desc);
    return LegacyAudioPost.qd4(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  iy() {
    return this.ad3_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_22().zd2_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAudioPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.rd4(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static rd4(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_22();
    var $this = this.ucy();
    $this.cd3_1 = blogName;
    $this.dd3_1 = idString;
    $this.ed3_1 = genesisPostId;
    $this.fd3_1 = postUrl;
    $this.gd3_1 = parentPostUrl;
    $this.hd3_1 = type;
    $this.id3_1 = timestamp;
    $this.jd3_1 = date;
    $this.kd3_1 = format;
    $this.ld3_1 = reblogKey;
    $this.md3_1 = tags;
    $this.nd3_1 = isBookmarklet;
    $this.od3_1 = isMobile;
    $this.pd3_1 = sourceUrl;
    $this.qd3_1 = sourceTitle;
    $this.rd3_1 = isLiked;
    $this.sd3_1 = state;
    $this.td3_1 = title;
    $this.ud3_1 = body;
    $this.vd3_1 = noteCount;
    $this.wd3_1 = summary;
    $this.xd3_1 = slug;
    $this.yd3_1 = rebloggedFromId;
    $this.zd3_1 = rebloggedFromUrl;
    $this.ad4_1 = rebloggedFromName;
    $this.bd4_1 = rebloggedFromTitle;
    $this.cd4_1 = rebloggedFromUuid;
    $this.dd4_1 = rebloggedFromCanMessage;
    $this.ed4_1 = rebloggedFromFollowing;
    $this.fd4_1 = rebloggedRootId;
    $this.gd4_1 = rebloggedRootUrl;
    $this.hd4_1 = rebloggedRootName;
    $this.id4_1 = rebloggedRootTitle;
    $this.jd4_1 = rebloggedRootUuid;
    $this.kd4_1 = rebloggedRootCanMessage;
    $this.ld4_1 = rebloggedRootFollowing;
    $this.md4_1 = notes;
    $this.nd4_1 = blog;
    $this.od4_1 = reblog;
    $this.pd4_1 = trail;
    $this.caption = null;
    return $this;
  }
  wcp(_set____db54di) {
    this.cd3_1 = _set____db54di;
  }
  xcp() {
    return this.cd3_1;
  }
  ecz(_set____db54di) {
    this.dd3_1 = _set____db54di;
  }
  fcz() {
    return this.dd3_1;
  }
  gcz(_set____db54di) {
    this.ed3_1 = _set____db54di;
  }
  hcz() {
    return this.ed3_1;
  }
  icz(_set____db54di) {
    this.fd3_1 = _set____db54di;
  }
  jcz() {
    return this.fd3_1;
  }
  kcz(_set____db54di) {
    this.gd3_1 = _set____db54di;
  }
  lcz() {
    return this.gd3_1;
  }
  d36(_set____db54di) {
    this.hd3_1 = _set____db54di;
  }
  w35() {
    return this.hd3_1;
  }
  mcz(_set____db54di) {
    this.id3_1 = _set____db54di;
  }
  fcw() {
    return this.id3_1;
  }
  dcr(_set____db54di) {
    this.jd3_1 = _set____db54di;
  }
  ecr() {
    return this.jd3_1;
  }
  fcr(_set____db54di) {
    this.kd3_1 = _set____db54di;
  }
  gcr() {
    return this.kd3_1;
  }
  wcs(_set____db54di) {
    this.ld3_1 = _set____db54di;
  }
  xcs() {
    return this.ld3_1;
  }
  qaf(_set____db54di) {
    this.md3_1 = _set____db54di;
  }
  laa() {
    return this.md3_1;
  }
  ncz(_set____db54di) {
    this.nd3_1 = _set____db54di;
  }
  ocz() {
    return this.nd3_1;
  }
  pcz(_set____db54di) {
    this.od3_1 = _set____db54di;
  }
  qcz() {
    return this.od3_1;
  }
  x35(_set____db54di) {
    this.pd3_1 = _set____db54di;
  }
  y35() {
    return this.pd3_1;
  }
  rcz(_set____db54di) {
    this.qd3_1 = _set____db54di;
  }
  scz() {
    return this.qd3_1;
  }
  tcz(_set____db54di) {
    this.rd3_1 = _set____db54di;
  }
  iai() {
    return this.rd3_1;
  }
  da2(_set____db54di) {
    this.sd3_1 = _set____db54di;
  }
  q7r() {
    return this.sd3_1;
  }
  haa(_set____db54di) {
    this.td3_1 = _set____db54di;
  }
  u3g() {
    return this.td3_1;
  }
  zag(_set____db54di) {
    this.ud3_1 = _set____db54di;
  }
  aah() {
    return this.ud3_1;
  }
  ucz(_set____db54di) {
    this.vd3_1 = _set____db54di;
  }
  vcz() {
    return this.vd3_1;
  }
  uah(_set____db54di) {
    this.wd3_1 = _set____db54di;
  }
  vah() {
    return this.wd3_1;
  }
  hcr(_set____db54di) {
    this.xd3_1 = _set____db54di;
  }
  icr() {
    return this.xd3_1;
  }
  wcz(_set____db54di) {
    this.yd3_1 = _set____db54di;
  }
  xcz() {
    return this.yd3_1;
  }
  ycz(_set____db54di) {
    this.zd3_1 = _set____db54di;
  }
  zcz() {
    return this.zd3_1;
  }
  ad0(_set____db54di) {
    this.ad4_1 = _set____db54di;
  }
  bd0() {
    return this.ad4_1;
  }
  cd0(_set____db54di) {
    this.bd4_1 = _set____db54di;
  }
  dd0() {
    return this.bd4_1;
  }
  ed0(_set____db54di) {
    this.cd4_1 = _set____db54di;
  }
  fd0() {
    return this.cd4_1;
  }
  gd0(_set____db54di) {
    this.dd4_1 = _set____db54di;
  }
  hd0() {
    return this.dd4_1;
  }
  id0(_set____db54di) {
    this.ed4_1 = _set____db54di;
  }
  jd0() {
    return this.ed4_1;
  }
  kd0(_set____db54di) {
    this.fd4_1 = _set____db54di;
  }
  ld0() {
    return this.fd4_1;
  }
  md0(_set____db54di) {
    this.gd4_1 = _set____db54di;
  }
  nd0() {
    return this.gd4_1;
  }
  od0(_set____db54di) {
    this.hd4_1 = _set____db54di;
  }
  pd0() {
    return this.hd4_1;
  }
  qd0(_set____db54di) {
    this.id4_1 = _set____db54di;
  }
  rd0() {
    return this.id4_1;
  }
  sd0(_set____db54di) {
    this.jd4_1 = _set____db54di;
  }
  td0() {
    return this.jd4_1;
  }
  ud0(_set____db54di) {
    this.kd4_1 = _set____db54di;
  }
  vd0() {
    return this.kd4_1;
  }
  wd0(_set____db54di) {
    this.ld4_1 = _set____db54di;
  }
  xd0() {
    return this.ld4_1;
  }
  yd0(_set____db54di) {
    this.md4_1 = _set____db54di;
  }
  zd0() {
    return this.md4_1;
  }
  ncu(_set____db54di) {
    this.nd4_1 = _set____db54di;
  }
  ocu() {
    return this.nd4_1;
  }
  ad1(_set____db54di) {
    this.od4_1 = _set____db54di;
  }
  ybj() {
    return this.od4_1;
  }
  bd1(_set____db54di) {
    this.pd4_1 = _set____db54di;
  }
  cd1() {
    return this.pd4_1;
  }
  ucq(_set____db54di) {
    this.caption = _set____db54di;
  }
  vcq() {
    return this.caption;
  }
  static qd4(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, serializationConstructorMarker) {
    Companion_getInstance_22();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_19().ad3_1);
    }
    var $this = this.ucy();
    $this.cd3_1 = blogName;
    $this.dd3_1 = idString;
    $this.ed3_1 = genesisPostId;
    $this.fd3_1 = postUrl;
    $this.gd3_1 = parentPostUrl;
    $this.hd3_1 = type;
    $this.id3_1 = timestamp;
    $this.jd3_1 = date;
    $this.kd3_1 = format;
    $this.ld3_1 = reblogKey;
    $this.md3_1 = tags;
    $this.nd3_1 = isBookmarklet;
    $this.od3_1 = isMobile;
    $this.pd3_1 = sourceUrl;
    $this.qd3_1 = sourceTitle;
    $this.rd3_1 = isLiked;
    $this.sd3_1 = state;
    $this.td3_1 = title;
    $this.ud3_1 = body;
    $this.vd3_1 = noteCount;
    $this.wd3_1 = summary;
    $this.xd3_1 = slug;
    $this.yd3_1 = rebloggedFromId;
    $this.zd3_1 = rebloggedFromUrl;
    $this.ad4_1 = rebloggedFromName;
    $this.bd4_1 = rebloggedFromTitle;
    $this.cd4_1 = rebloggedFromUuid;
    $this.dd4_1 = rebloggedFromCanMessage;
    $this.ed4_1 = rebloggedFromFollowing;
    $this.fd4_1 = rebloggedRootId;
    $this.gd4_1 = rebloggedRootUrl;
    $this.hd4_1 = rebloggedRootName;
    $this.id4_1 = rebloggedRootTitle;
    $this.jd4_1 = rebloggedRootUuid;
    $this.kd4_1 = rebloggedRootCanMessage;
    $this.ld4_1 = rebloggedRootFollowing;
    $this.md4_1 = notes;
    $this.nd4_1 = blog;
    $this.od4_1 = reblog;
    $this.pd4_1 = trail;
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
    tmp.sd4_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, lazy(tmp_6, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2)];
  }
  t1o() {
    return $serializer_getInstance_20();
  }
}
class $serializer_21 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyChatPost', this, 41);
    tmp0_serialDesc.s1a('blog_name', false);
    tmp0_serialDesc.s1a('id_string', false);
    tmp0_serialDesc.s1a('genesis_post_id', false);
    tmp0_serialDesc.s1a('post_url', false);
    tmp0_serialDesc.s1a('parent_post_url', false);
    tmp0_serialDesc.s1a('type', false);
    tmp0_serialDesc.s1a('timestamp', false);
    tmp0_serialDesc.s1a('date', false);
    tmp0_serialDesc.s1a('format', false);
    tmp0_serialDesc.s1a('reblog_key', false);
    tmp0_serialDesc.s1a('tags', false);
    tmp0_serialDesc.s1a('bookmarklet', false);
    tmp0_serialDesc.s1a('mobile', false);
    tmp0_serialDesc.s1a('source_url', false);
    tmp0_serialDesc.s1a('source_title', false);
    tmp0_serialDesc.s1a('liked', false);
    tmp0_serialDesc.s1a('state', false);
    tmp0_serialDesc.s1a('title', false);
    tmp0_serialDesc.s1a('body', false);
    tmp0_serialDesc.s1a('note_count', false);
    tmp0_serialDesc.s1a('summary', false);
    tmp0_serialDesc.s1a('slug', false);
    tmp0_serialDesc.s1a('reblogged_from_id', false);
    tmp0_serialDesc.s1a('reblogged_from_url', false);
    tmp0_serialDesc.s1a('reblogged_from_name', false);
    tmp0_serialDesc.s1a('reblogged_from_title', false);
    tmp0_serialDesc.s1a('reblogged_from_uuid', false);
    tmp0_serialDesc.s1a('reblogged_from_can_message', false);
    tmp0_serialDesc.s1a('reblogged_from_following', false);
    tmp0_serialDesc.s1a('reblogged_root_id', false);
    tmp0_serialDesc.s1a('reblogged_root_url', false);
    tmp0_serialDesc.s1a('reblogged_root_name', false);
    tmp0_serialDesc.s1a('reblogged_root_title', false);
    tmp0_serialDesc.s1a('reblogged_root_uuid', false);
    tmp0_serialDesc.s1a('reblogged_root_can_message', false);
    tmp0_serialDesc.s1a('reblogged_root_following', false);
    tmp0_serialDesc.s1a('notes', false);
    tmp0_serialDesc.s1a('blog', false);
    tmp0_serialDesc.s1a('reblog', false);
    tmp0_serialDesc.s1a('trail', false);
    tmp0_serialDesc.s1a('dialogue', true);
    this.td4_1 = tmp0_serialDesc;
  }
  ud4(encoder, value) {
    var tmp0_desc = this.td4_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().sd4_1;
    tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.vd4_1);
    tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.wd4_1);
    tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.xd4_1);
    tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.yd4_1);
    tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.zd4_1);
    tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.ad5_1);
    tmp1_output.s14(tmp0_desc, 6, IntSerializer_getInstance(), value.bd5_1);
    tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.cd5_1);
    tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.dd5_1);
    tmp1_output.s14(tmp0_desc, 9, StringSerializer_getInstance(), value.ed5_1);
    tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.fd5_1);
    tmp1_output.s14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.gd5_1);
    tmp1_output.s14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.hd5_1);
    tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.id5_1);
    tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.jd5_1);
    tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.kd5_1);
    tmp1_output.s14(tmp0_desc, 16, StringSerializer_getInstance(), value.ld5_1);
    tmp1_output.s14(tmp0_desc, 17, StringSerializer_getInstance(), value.nd5_1);
    tmp1_output.s14(tmp0_desc, 18, StringSerializer_getInstance(), value.od5_1);
    tmp1_output.s14(tmp0_desc, 19, IntSerializer_getInstance(), value.pd5_1);
    tmp1_output.s14(tmp0_desc, 20, StringSerializer_getInstance(), value.qd5_1);
    tmp1_output.s14(tmp0_desc, 21, StringSerializer_getInstance(), value.rd5_1);
    tmp1_output.s14(tmp0_desc, 22, StringSerializer_getInstance(), value.sd5_1);
    tmp1_output.s14(tmp0_desc, 23, StringSerializer_getInstance(), value.td5_1);
    tmp1_output.s14(tmp0_desc, 24, StringSerializer_getInstance(), value.ud5_1);
    tmp1_output.s14(tmp0_desc, 25, StringSerializer_getInstance(), value.vd5_1);
    tmp1_output.s14(tmp0_desc, 26, StringSerializer_getInstance(), value.wd5_1);
    tmp1_output.s14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.xd5_1);
    tmp1_output.s14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.yd5_1);
    tmp1_output.s14(tmp0_desc, 29, StringSerializer_getInstance(), value.zd5_1);
    tmp1_output.s14(tmp0_desc, 30, StringSerializer_getInstance(), value.ad6_1);
    tmp1_output.s14(tmp0_desc, 31, StringSerializer_getInstance(), value.bd6_1);
    tmp1_output.s14(tmp0_desc, 32, StringSerializer_getInstance(), value.cd6_1);
    tmp1_output.s14(tmp0_desc, 33, StringSerializer_getInstance(), value.dd6_1);
    tmp1_output.s14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.ed6_1);
    tmp1_output.s14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.fd6_1);
    tmp1_output.s14(tmp0_desc, 36, tmp2_cached[36].d3(), value.gd6_1);
    tmp1_output.s14(tmp0_desc, 37, $serializer_getInstance_14(), value.hd6_1);
    tmp1_output.s14(tmp0_desc, 38, $serializer_getInstance_17(), value.id6_1);
    tmp1_output.s14(tmp0_desc, 39, tmp2_cached[39].d3(), value.jd6_1);
    if (tmp1_output.w14(tmp0_desc, 40) ? true : !(value.dialogue == null)) {
      tmp1_output.s14(tmp0_desc, 40, tmp2_cached[40].d3(), value.dialogue);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.ud4(encoder, value instanceof LegacyChatPost ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.td4_1;
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
    var tmp46_input = decoder.a13(tmp0_desc);
    var tmp47_cached = Companion_getInstance_23().sd4_1;
    if (tmp46_input.p13()) {
      tmp5_local0 = tmp46_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.o13(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.o13(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.o13(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.o13(tmp0_desc, 40, tmp47_cached[40].d3(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.o13(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.o13(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.o13(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.o13(tmp0_desc, 40, tmp47_cached[40].d3(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp46_input.b13(tmp0_desc);
    return LegacyChatPost.kd6(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  iy() {
    return this.td4_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_23().sd4_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(tmp0_cached[40].d3())];
  }
}
class LegacyChatPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ld6(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ld6(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_23();
    var $this = this.ucy();
    $this.vd4_1 = blogName;
    $this.wd4_1 = idString;
    $this.xd4_1 = genesisPostId;
    $this.yd4_1 = postUrl;
    $this.zd4_1 = parentPostUrl;
    $this.ad5_1 = type;
    $this.bd5_1 = timestamp;
    $this.cd5_1 = date;
    $this.dd5_1 = format;
    $this.ed5_1 = reblogKey;
    $this.fd5_1 = tags;
    $this.gd5_1 = isBookmarklet;
    $this.hd5_1 = isMobile;
    $this.id5_1 = sourceUrl;
    $this.jd5_1 = sourceTitle;
    $this.kd5_1 = isLiked;
    $this.ld5_1 = state;
    $this.nd5_1 = title;
    $this.od5_1 = body;
    $this.pd5_1 = noteCount;
    $this.qd5_1 = summary;
    $this.rd5_1 = slug;
    $this.sd5_1 = rebloggedFromId;
    $this.td5_1 = rebloggedFromUrl;
    $this.ud5_1 = rebloggedFromName;
    $this.vd5_1 = rebloggedFromTitle;
    $this.wd5_1 = rebloggedFromUuid;
    $this.xd5_1 = rebloggedFromCanMessage;
    $this.yd5_1 = rebloggedFromFollowing;
    $this.zd5_1 = rebloggedRootId;
    $this.ad6_1 = rebloggedRootUrl;
    $this.bd6_1 = rebloggedRootName;
    $this.cd6_1 = rebloggedRootTitle;
    $this.dd6_1 = rebloggedRootUuid;
    $this.ed6_1 = rebloggedRootCanMessage;
    $this.fd6_1 = rebloggedRootFollowing;
    $this.gd6_1 = notes;
    $this.hd6_1 = blog;
    $this.id6_1 = reblog;
    $this.jd6_1 = trail;
    $this.dialogue = null;
    return $this;
  }
  wcp(_set____db54di) {
    this.vd4_1 = _set____db54di;
  }
  xcp() {
    return this.vd4_1;
  }
  ecz(_set____db54di) {
    this.wd4_1 = _set____db54di;
  }
  fcz() {
    return this.wd4_1;
  }
  gcz(_set____db54di) {
    this.xd4_1 = _set____db54di;
  }
  hcz() {
    return this.xd4_1;
  }
  icz(_set____db54di) {
    this.yd4_1 = _set____db54di;
  }
  jcz() {
    return this.yd4_1;
  }
  kcz(_set____db54di) {
    this.zd4_1 = _set____db54di;
  }
  lcz() {
    return this.zd4_1;
  }
  d36(_set____db54di) {
    this.ad5_1 = _set____db54di;
  }
  w35() {
    return this.ad5_1;
  }
  mcz(_set____db54di) {
    this.bd5_1 = _set____db54di;
  }
  fcw() {
    return this.bd5_1;
  }
  dcr(_set____db54di) {
    this.cd5_1 = _set____db54di;
  }
  ecr() {
    return this.cd5_1;
  }
  fcr(_set____db54di) {
    this.dd5_1 = _set____db54di;
  }
  gcr() {
    return this.dd5_1;
  }
  wcs(_set____db54di) {
    this.ed5_1 = _set____db54di;
  }
  xcs() {
    return this.ed5_1;
  }
  qaf(_set____db54di) {
    this.fd5_1 = _set____db54di;
  }
  laa() {
    return this.fd5_1;
  }
  ncz(_set____db54di) {
    this.gd5_1 = _set____db54di;
  }
  ocz() {
    return this.gd5_1;
  }
  pcz(_set____db54di) {
    this.hd5_1 = _set____db54di;
  }
  qcz() {
    return this.hd5_1;
  }
  x35(_set____db54di) {
    this.id5_1 = _set____db54di;
  }
  y35() {
    return this.id5_1;
  }
  rcz(_set____db54di) {
    this.jd5_1 = _set____db54di;
  }
  scz() {
    return this.jd5_1;
  }
  tcz(_set____db54di) {
    this.kd5_1 = _set____db54di;
  }
  iai() {
    return this.kd5_1;
  }
  da2(_set____db54di) {
    this.ld5_1 = _set____db54di;
  }
  q7r() {
    return this.ld5_1;
  }
  haa(_set____db54di) {
    this.nd5_1 = _set____db54di;
  }
  u3g() {
    return this.nd5_1;
  }
  zag(_set____db54di) {
    this.od5_1 = _set____db54di;
  }
  aah() {
    return this.od5_1;
  }
  ucz(_set____db54di) {
    this.pd5_1 = _set____db54di;
  }
  vcz() {
    return this.pd5_1;
  }
  uah(_set____db54di) {
    this.qd5_1 = _set____db54di;
  }
  vah() {
    return this.qd5_1;
  }
  hcr(_set____db54di) {
    this.rd5_1 = _set____db54di;
  }
  icr() {
    return this.rd5_1;
  }
  wcz(_set____db54di) {
    this.sd5_1 = _set____db54di;
  }
  xcz() {
    return this.sd5_1;
  }
  ycz(_set____db54di) {
    this.td5_1 = _set____db54di;
  }
  zcz() {
    return this.td5_1;
  }
  ad0(_set____db54di) {
    this.ud5_1 = _set____db54di;
  }
  bd0() {
    return this.ud5_1;
  }
  cd0(_set____db54di) {
    this.vd5_1 = _set____db54di;
  }
  dd0() {
    return this.vd5_1;
  }
  ed0(_set____db54di) {
    this.wd5_1 = _set____db54di;
  }
  fd0() {
    return this.wd5_1;
  }
  gd0(_set____db54di) {
    this.xd5_1 = _set____db54di;
  }
  hd0() {
    return this.xd5_1;
  }
  id0(_set____db54di) {
    this.yd5_1 = _set____db54di;
  }
  jd0() {
    return this.yd5_1;
  }
  kd0(_set____db54di) {
    this.zd5_1 = _set____db54di;
  }
  ld0() {
    return this.zd5_1;
  }
  md0(_set____db54di) {
    this.ad6_1 = _set____db54di;
  }
  nd0() {
    return this.ad6_1;
  }
  od0(_set____db54di) {
    this.bd6_1 = _set____db54di;
  }
  pd0() {
    return this.bd6_1;
  }
  qd0(_set____db54di) {
    this.cd6_1 = _set____db54di;
  }
  rd0() {
    return this.cd6_1;
  }
  sd0(_set____db54di) {
    this.dd6_1 = _set____db54di;
  }
  td0() {
    return this.dd6_1;
  }
  ud0(_set____db54di) {
    this.ed6_1 = _set____db54di;
  }
  vd0() {
    return this.ed6_1;
  }
  wd0(_set____db54di) {
    this.fd6_1 = _set____db54di;
  }
  xd0() {
    return this.fd6_1;
  }
  yd0(_set____db54di) {
    this.gd6_1 = _set____db54di;
  }
  zd0() {
    return this.gd6_1;
  }
  ncu(_set____db54di) {
    this.hd6_1 = _set____db54di;
  }
  ocu() {
    return this.hd6_1;
  }
  ad1(_set____db54di) {
    this.id6_1 = _set____db54di;
  }
  ybj() {
    return this.id6_1;
  }
  bd1(_set____db54di) {
    this.jd6_1 = _set____db54di;
  }
  cd1() {
    return this.jd6_1;
  }
  md6() {
    return this.dialogue;
  }
  static kd6(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, dialogue, serializationConstructorMarker) {
    Companion_getInstance_23();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_20().td4_1);
    }
    var $this = this.ucy();
    $this.vd4_1 = blogName;
    $this.wd4_1 = idString;
    $this.xd4_1 = genesisPostId;
    $this.yd4_1 = postUrl;
    $this.zd4_1 = parentPostUrl;
    $this.ad5_1 = type;
    $this.bd5_1 = timestamp;
    $this.cd5_1 = date;
    $this.dd5_1 = format;
    $this.ed5_1 = reblogKey;
    $this.fd5_1 = tags;
    $this.gd5_1 = isBookmarklet;
    $this.hd5_1 = isMobile;
    $this.id5_1 = sourceUrl;
    $this.jd5_1 = sourceTitle;
    $this.kd5_1 = isLiked;
    $this.ld5_1 = state;
    $this.nd5_1 = title;
    $this.od5_1 = body;
    $this.pd5_1 = noteCount;
    $this.qd5_1 = summary;
    $this.rd5_1 = slug;
    $this.sd5_1 = rebloggedFromId;
    $this.td5_1 = rebloggedFromUrl;
    $this.ud5_1 = rebloggedFromName;
    $this.vd5_1 = rebloggedFromTitle;
    $this.wd5_1 = rebloggedFromUuid;
    $this.xd5_1 = rebloggedFromCanMessage;
    $this.yd5_1 = rebloggedFromFollowing;
    $this.zd5_1 = rebloggedRootId;
    $this.ad6_1 = rebloggedRootUrl;
    $this.bd6_1 = rebloggedRootName;
    $this.cd6_1 = rebloggedRootTitle;
    $this.dd6_1 = rebloggedRootUuid;
    $this.ed6_1 = rebloggedRootCanMessage;
    $this.fd6_1 = rebloggedRootFollowing;
    $this.gd6_1 = notes;
    $this.hd6_1 = blog;
    $this.id6_1 = reblog;
    $this.jd6_1 = trail;
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
    tmp.nd6_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1), null, null, null, null, null];
  }
  t1o() {
    return $serializer_getInstance_21();
  }
}
class $serializer_22 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyLinkPost', this, 45);
    tmp0_serialDesc.s1a('blog_name', false);
    tmp0_serialDesc.s1a('id_string', false);
    tmp0_serialDesc.s1a('genesis_post_id', false);
    tmp0_serialDesc.s1a('post_url', false);
    tmp0_serialDesc.s1a('parent_post_url', false);
    tmp0_serialDesc.s1a('type', false);
    tmp0_serialDesc.s1a('timestamp', false);
    tmp0_serialDesc.s1a('date', false);
    tmp0_serialDesc.s1a('format', false);
    tmp0_serialDesc.s1a('reblog_key', false);
    tmp0_serialDesc.s1a('tags', false);
    tmp0_serialDesc.s1a('bookmarklet', false);
    tmp0_serialDesc.s1a('mobile', false);
    tmp0_serialDesc.s1a('source_url', false);
    tmp0_serialDesc.s1a('source_title', false);
    tmp0_serialDesc.s1a('liked', false);
    tmp0_serialDesc.s1a('state', false);
    tmp0_serialDesc.s1a('title', false);
    tmp0_serialDesc.s1a('body', false);
    tmp0_serialDesc.s1a('note_count', false);
    tmp0_serialDesc.s1a('summary', false);
    tmp0_serialDesc.s1a('slug', false);
    tmp0_serialDesc.s1a('reblogged_from_id', false);
    tmp0_serialDesc.s1a('reblogged_from_url', false);
    tmp0_serialDesc.s1a('reblogged_from_name', false);
    tmp0_serialDesc.s1a('reblogged_from_title', false);
    tmp0_serialDesc.s1a('reblogged_from_uuid', false);
    tmp0_serialDesc.s1a('reblogged_from_can_message', false);
    tmp0_serialDesc.s1a('reblogged_from_following', false);
    tmp0_serialDesc.s1a('reblogged_root_id', false);
    tmp0_serialDesc.s1a('reblogged_root_url', false);
    tmp0_serialDesc.s1a('reblogged_root_name', false);
    tmp0_serialDesc.s1a('reblogged_root_title', false);
    tmp0_serialDesc.s1a('reblogged_root_uuid', false);
    tmp0_serialDesc.s1a('reblogged_root_can_message', false);
    tmp0_serialDesc.s1a('reblogged_root_following', false);
    tmp0_serialDesc.s1a('notes', false);
    tmp0_serialDesc.s1a('blog', false);
    tmp0_serialDesc.s1a('reblog', false);
    tmp0_serialDesc.s1a('trail', false);
    tmp0_serialDesc.s1a('description', true);
    tmp0_serialDesc.s1a('url', true);
    tmp0_serialDesc.s1a('link_author', true);
    tmp0_serialDesc.s1a('excerpt', true);
    tmp0_serialDesc.s1a('publisher', true);
    this.od6_1 = tmp0_serialDesc;
  }
  pd6(encoder, value) {
    var tmp0_desc = this.od6_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().nd6_1;
    tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.qd6_1);
    tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.rd6_1);
    tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.sd6_1);
    tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.td6_1);
    tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.ud6_1);
    tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.vd6_1);
    tmp1_output.s14(tmp0_desc, 6, IntSerializer_getInstance(), value.wd6_1);
    tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.xd6_1);
    tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.yd6_1);
    tmp1_output.s14(tmp0_desc, 9, StringSerializer_getInstance(), value.zd6_1);
    tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.ad7_1);
    tmp1_output.s14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.bd7_1);
    tmp1_output.s14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.cd7_1);
    tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.dd7_1);
    tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.ed7_1);
    tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.fd7_1);
    tmp1_output.s14(tmp0_desc, 16, StringSerializer_getInstance(), value.gd7_1);
    tmp1_output.s14(tmp0_desc, 17, StringSerializer_getInstance(), value.hd7_1);
    tmp1_output.s14(tmp0_desc, 18, StringSerializer_getInstance(), value.id7_1);
    tmp1_output.s14(tmp0_desc, 19, IntSerializer_getInstance(), value.jd7_1);
    tmp1_output.s14(tmp0_desc, 20, StringSerializer_getInstance(), value.kd7_1);
    tmp1_output.s14(tmp0_desc, 21, StringSerializer_getInstance(), value.ld7_1);
    tmp1_output.s14(tmp0_desc, 22, StringSerializer_getInstance(), value.md7_1);
    tmp1_output.s14(tmp0_desc, 23, StringSerializer_getInstance(), value.nd7_1);
    tmp1_output.s14(tmp0_desc, 24, StringSerializer_getInstance(), value.od7_1);
    tmp1_output.s14(tmp0_desc, 25, StringSerializer_getInstance(), value.pd7_1);
    tmp1_output.s14(tmp0_desc, 26, StringSerializer_getInstance(), value.qd7_1);
    tmp1_output.s14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rd7_1);
    tmp1_output.s14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.sd7_1);
    tmp1_output.s14(tmp0_desc, 29, StringSerializer_getInstance(), value.td7_1);
    tmp1_output.s14(tmp0_desc, 30, StringSerializer_getInstance(), value.ud7_1);
    tmp1_output.s14(tmp0_desc, 31, StringSerializer_getInstance(), value.vd7_1);
    tmp1_output.s14(tmp0_desc, 32, StringSerializer_getInstance(), value.wd7_1);
    tmp1_output.s14(tmp0_desc, 33, StringSerializer_getInstance(), value.xd7_1);
    tmp1_output.s14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.yd7_1);
    tmp1_output.s14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.zd7_1);
    tmp1_output.s14(tmp0_desc, 36, tmp2_cached[36].d3(), value.ad8_1);
    tmp1_output.s14(tmp0_desc, 37, $serializer_getInstance_14(), value.bd8_1);
    tmp1_output.s14(tmp0_desc, 38, $serializer_getInstance_17(), value.cd8_1);
    tmp1_output.s14(tmp0_desc, 39, tmp2_cached[39].d3(), value.dd8_1);
    if (tmp1_output.w14(tmp0_desc, 40) ? true : !(value.description == null)) {
      tmp1_output.s14(tmp0_desc, 40, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.w14(tmp0_desc, 41) ? true : !(value.url == null)) {
      tmp1_output.s14(tmp0_desc, 41, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.w14(tmp0_desc, 42) ? true : !(value.linkAuthor == null)) {
      tmp1_output.s14(tmp0_desc, 42, StringSerializer_getInstance(), value.linkAuthor);
    }
    if (tmp1_output.w14(tmp0_desc, 43) ? true : !(value.excerpt == null)) {
      tmp1_output.s14(tmp0_desc, 43, StringSerializer_getInstance(), value.excerpt);
    }
    if (tmp1_output.w14(tmp0_desc, 44) ? true : !(value.publisher == null)) {
      tmp1_output.s14(tmp0_desc, 44, StringSerializer_getInstance(), value.publisher);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.pd6(encoder, value instanceof LegacyLinkPost ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.od6_1;
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
    var tmp50_input = decoder.a13(tmp0_desc);
    var tmp51_cached = Companion_getInstance_24().nd6_1;
    if (tmp50_input.p13()) {
      tmp5_local0 = tmp50_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp50_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp50_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp50_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp50_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp50_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp50_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp50_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp50_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp50_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp50_input.o13(tmp0_desc, 10, tmp51_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp50_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp50_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp50_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp50_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp50_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp50_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp50_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp50_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp50_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp50_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp50_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp50_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp50_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp50_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp50_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp50_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp50_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp50_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp50_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp50_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp50_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp50_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp50_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp50_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp50_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp50_input.o13(tmp0_desc, 36, tmp51_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp50_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp50_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp50_input.o13(tmp0_desc, 39, tmp51_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp50_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp50_input.o13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp50_input.o13(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp50_input.o13(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp50_input.o13(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp50_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp50_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp50_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp50_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp50_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp50_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp50_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp50_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp50_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp50_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp50_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp50_input.o13(tmp0_desc, 10, tmp51_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp50_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp50_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp50_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp50_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp50_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp50_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp50_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp50_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp50_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp50_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp50_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp50_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp50_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp50_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp50_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp50_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp50_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp50_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp50_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp50_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp50_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp50_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp50_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp50_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp50_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp50_input.o13(tmp0_desc, 36, tmp51_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp50_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp50_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp50_input.o13(tmp0_desc, 39, tmp51_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp50_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp50_input.o13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp50_input.o13(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp50_input.o13(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp50_input.o13(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp50_input.b13(tmp0_desc);
    return LegacyLinkPost.ed8(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, null);
  }
  iy() {
    return this.od6_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_24().nd6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyLinkPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.fd8(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static fd8(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_24();
    var $this = this.ucy();
    $this.qd6_1 = blogName;
    $this.rd6_1 = idString;
    $this.sd6_1 = genesisPostId;
    $this.td6_1 = postUrl;
    $this.ud6_1 = parentPostUrl;
    $this.vd6_1 = type;
    $this.wd6_1 = timestamp;
    $this.xd6_1 = date;
    $this.yd6_1 = format;
    $this.zd6_1 = reblogKey;
    $this.ad7_1 = tags;
    $this.bd7_1 = isBookmarklet;
    $this.cd7_1 = isMobile;
    $this.dd7_1 = sourceUrl;
    $this.ed7_1 = sourceTitle;
    $this.fd7_1 = isLiked;
    $this.gd7_1 = state;
    $this.hd7_1 = title;
    $this.id7_1 = body;
    $this.jd7_1 = noteCount;
    $this.kd7_1 = summary;
    $this.ld7_1 = slug;
    $this.md7_1 = rebloggedFromId;
    $this.nd7_1 = rebloggedFromUrl;
    $this.od7_1 = rebloggedFromName;
    $this.pd7_1 = rebloggedFromTitle;
    $this.qd7_1 = rebloggedFromUuid;
    $this.rd7_1 = rebloggedFromCanMessage;
    $this.sd7_1 = rebloggedFromFollowing;
    $this.td7_1 = rebloggedRootId;
    $this.ud7_1 = rebloggedRootUrl;
    $this.vd7_1 = rebloggedRootName;
    $this.wd7_1 = rebloggedRootTitle;
    $this.xd7_1 = rebloggedRootUuid;
    $this.yd7_1 = rebloggedRootCanMessage;
    $this.zd7_1 = rebloggedRootFollowing;
    $this.ad8_1 = notes;
    $this.bd8_1 = blog;
    $this.cd8_1 = reblog;
    $this.dd8_1 = trail;
    $this.description = null;
    $this.url = null;
    $this.linkAuthor = null;
    $this.excerpt = null;
    $this.publisher = null;
    return $this;
  }
  wcp(_set____db54di) {
    this.qd6_1 = _set____db54di;
  }
  xcp() {
    return this.qd6_1;
  }
  ecz(_set____db54di) {
    this.rd6_1 = _set____db54di;
  }
  fcz() {
    return this.rd6_1;
  }
  gcz(_set____db54di) {
    this.sd6_1 = _set____db54di;
  }
  hcz() {
    return this.sd6_1;
  }
  icz(_set____db54di) {
    this.td6_1 = _set____db54di;
  }
  jcz() {
    return this.td6_1;
  }
  kcz(_set____db54di) {
    this.ud6_1 = _set____db54di;
  }
  lcz() {
    return this.ud6_1;
  }
  d36(_set____db54di) {
    this.vd6_1 = _set____db54di;
  }
  w35() {
    return this.vd6_1;
  }
  mcz(_set____db54di) {
    this.wd6_1 = _set____db54di;
  }
  fcw() {
    return this.wd6_1;
  }
  dcr(_set____db54di) {
    this.xd6_1 = _set____db54di;
  }
  ecr() {
    return this.xd6_1;
  }
  fcr(_set____db54di) {
    this.yd6_1 = _set____db54di;
  }
  gcr() {
    return this.yd6_1;
  }
  wcs(_set____db54di) {
    this.zd6_1 = _set____db54di;
  }
  xcs() {
    return this.zd6_1;
  }
  qaf(_set____db54di) {
    this.ad7_1 = _set____db54di;
  }
  laa() {
    return this.ad7_1;
  }
  ncz(_set____db54di) {
    this.bd7_1 = _set____db54di;
  }
  ocz() {
    return this.bd7_1;
  }
  pcz(_set____db54di) {
    this.cd7_1 = _set____db54di;
  }
  qcz() {
    return this.cd7_1;
  }
  x35(_set____db54di) {
    this.dd7_1 = _set____db54di;
  }
  y35() {
    return this.dd7_1;
  }
  rcz(_set____db54di) {
    this.ed7_1 = _set____db54di;
  }
  scz() {
    return this.ed7_1;
  }
  tcz(_set____db54di) {
    this.fd7_1 = _set____db54di;
  }
  iai() {
    return this.fd7_1;
  }
  da2(_set____db54di) {
    this.gd7_1 = _set____db54di;
  }
  q7r() {
    return this.gd7_1;
  }
  haa(_set____db54di) {
    this.hd7_1 = _set____db54di;
  }
  u3g() {
    return this.hd7_1;
  }
  zag(_set____db54di) {
    this.id7_1 = _set____db54di;
  }
  aah() {
    return this.id7_1;
  }
  ucz(_set____db54di) {
    this.jd7_1 = _set____db54di;
  }
  vcz() {
    return this.jd7_1;
  }
  uah(_set____db54di) {
    this.kd7_1 = _set____db54di;
  }
  vah() {
    return this.kd7_1;
  }
  hcr(_set____db54di) {
    this.ld7_1 = _set____db54di;
  }
  icr() {
    return this.ld7_1;
  }
  wcz(_set____db54di) {
    this.md7_1 = _set____db54di;
  }
  xcz() {
    return this.md7_1;
  }
  ycz(_set____db54di) {
    this.nd7_1 = _set____db54di;
  }
  zcz() {
    return this.nd7_1;
  }
  ad0(_set____db54di) {
    this.od7_1 = _set____db54di;
  }
  bd0() {
    return this.od7_1;
  }
  cd0(_set____db54di) {
    this.pd7_1 = _set____db54di;
  }
  dd0() {
    return this.pd7_1;
  }
  ed0(_set____db54di) {
    this.qd7_1 = _set____db54di;
  }
  fd0() {
    return this.qd7_1;
  }
  gd0(_set____db54di) {
    this.rd7_1 = _set____db54di;
  }
  hd0() {
    return this.rd7_1;
  }
  id0(_set____db54di) {
    this.sd7_1 = _set____db54di;
  }
  jd0() {
    return this.sd7_1;
  }
  kd0(_set____db54di) {
    this.td7_1 = _set____db54di;
  }
  ld0() {
    return this.td7_1;
  }
  md0(_set____db54di) {
    this.ud7_1 = _set____db54di;
  }
  nd0() {
    return this.ud7_1;
  }
  od0(_set____db54di) {
    this.vd7_1 = _set____db54di;
  }
  pd0() {
    return this.vd7_1;
  }
  qd0(_set____db54di) {
    this.wd7_1 = _set____db54di;
  }
  rd0() {
    return this.wd7_1;
  }
  sd0(_set____db54di) {
    this.xd7_1 = _set____db54di;
  }
  td0() {
    return this.xd7_1;
  }
  ud0(_set____db54di) {
    this.yd7_1 = _set____db54di;
  }
  vd0() {
    return this.yd7_1;
  }
  wd0(_set____db54di) {
    this.zd7_1 = _set____db54di;
  }
  xd0() {
    return this.zd7_1;
  }
  yd0(_set____db54di) {
    this.ad8_1 = _set____db54di;
  }
  zd0() {
    return this.ad8_1;
  }
  ncu(_set____db54di) {
    this.bd8_1 = _set____db54di;
  }
  ocu() {
    return this.bd8_1;
  }
  ad1(_set____db54di) {
    this.cd8_1 = _set____db54di;
  }
  ybj() {
    return this.cd8_1;
  }
  bd1(_set____db54di) {
    this.dd8_1 = _set____db54di;
  }
  cd1() {
    return this.dd8_1;
  }
  u34(_set____db54di) {
    this.description = _set____db54di;
  }
  e34() {
    return this.description;
  }
  x9c(_set____db54di) {
    this.url = _set____db54di;
  }
  a4k() {
    return this.url;
  }
  gd8(_set____db54di) {
    this.linkAuthor = _set____db54di;
  }
  hd8() {
    return this.linkAuthor;
  }
  ncr(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  ocr() {
    return this.excerpt;
  }
  id8(_set____db54di) {
    this.publisher = _set____db54di;
  }
  jd8() {
    return this.publisher;
  }
  static ed8(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, description, url, linkAuthor, excerpt, publisher, serializationConstructorMarker) {
    Companion_getInstance_24();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_21().od6_1);
    }
    var $this = this.ucy();
    $this.qd6_1 = blogName;
    $this.rd6_1 = idString;
    $this.sd6_1 = genesisPostId;
    $this.td6_1 = postUrl;
    $this.ud6_1 = parentPostUrl;
    $this.vd6_1 = type;
    $this.wd6_1 = timestamp;
    $this.xd6_1 = date;
    $this.yd6_1 = format;
    $this.zd6_1 = reblogKey;
    $this.ad7_1 = tags;
    $this.bd7_1 = isBookmarklet;
    $this.cd7_1 = isMobile;
    $this.dd7_1 = sourceUrl;
    $this.ed7_1 = sourceTitle;
    $this.fd7_1 = isLiked;
    $this.gd7_1 = state;
    $this.hd7_1 = title;
    $this.id7_1 = body;
    $this.jd7_1 = noteCount;
    $this.kd7_1 = summary;
    $this.ld7_1 = slug;
    $this.md7_1 = rebloggedFromId;
    $this.nd7_1 = rebloggedFromUrl;
    $this.od7_1 = rebloggedFromName;
    $this.pd7_1 = rebloggedFromTitle;
    $this.qd7_1 = rebloggedFromUuid;
    $this.rd7_1 = rebloggedFromCanMessage;
    $this.sd7_1 = rebloggedFromFollowing;
    $this.td7_1 = rebloggedRootId;
    $this.ud7_1 = rebloggedRootUrl;
    $this.vd7_1 = rebloggedRootName;
    $this.wd7_1 = rebloggedRootTitle;
    $this.xd7_1 = rebloggedRootUuid;
    $this.yd7_1 = rebloggedRootCanMessage;
    $this.zd7_1 = rebloggedRootFollowing;
    $this.ad8_1 = notes;
    $this.bd8_1 = blog;
    $this.cd8_1 = reblog;
    $this.dd8_1 = trail;
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
    tmp.kd8_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, null, null, lazy(tmp_6, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2)];
  }
  t1o() {
    return $serializer_getInstance_22();
  }
}
class $serializer_23 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPhotoPost', this, 44);
    tmp0_serialDesc.s1a('blog_name', false);
    tmp0_serialDesc.s1a('id_string', false);
    tmp0_serialDesc.s1a('genesis_post_id', false);
    tmp0_serialDesc.s1a('post_url', false);
    tmp0_serialDesc.s1a('parent_post_url', false);
    tmp0_serialDesc.s1a('type', false);
    tmp0_serialDesc.s1a('timestamp', false);
    tmp0_serialDesc.s1a('date', false);
    tmp0_serialDesc.s1a('format', false);
    tmp0_serialDesc.s1a('reblog_key', false);
    tmp0_serialDesc.s1a('tags', false);
    tmp0_serialDesc.s1a('bookmarklet', false);
    tmp0_serialDesc.s1a('mobile', false);
    tmp0_serialDesc.s1a('source_url', false);
    tmp0_serialDesc.s1a('source_title', false);
    tmp0_serialDesc.s1a('liked', false);
    tmp0_serialDesc.s1a('state', false);
    tmp0_serialDesc.s1a('title', false);
    tmp0_serialDesc.s1a('body', false);
    tmp0_serialDesc.s1a('note_count', false);
    tmp0_serialDesc.s1a('summary', false);
    tmp0_serialDesc.s1a('slug', false);
    tmp0_serialDesc.s1a('reblogged_from_id', false);
    tmp0_serialDesc.s1a('reblogged_from_url', false);
    tmp0_serialDesc.s1a('reblogged_from_name', false);
    tmp0_serialDesc.s1a('reblogged_from_title', false);
    tmp0_serialDesc.s1a('reblogged_from_uuid', false);
    tmp0_serialDesc.s1a('reblogged_from_can_message', false);
    tmp0_serialDesc.s1a('reblogged_from_following', false);
    tmp0_serialDesc.s1a('reblogged_root_id', false);
    tmp0_serialDesc.s1a('reblogged_root_url', false);
    tmp0_serialDesc.s1a('reblogged_root_name', false);
    tmp0_serialDesc.s1a('reblogged_root_title', false);
    tmp0_serialDesc.s1a('reblogged_root_uuid', false);
    tmp0_serialDesc.s1a('reblogged_root_can_message', false);
    tmp0_serialDesc.s1a('reblogged_root_following', false);
    tmp0_serialDesc.s1a('notes', false);
    tmp0_serialDesc.s1a('blog', false);
    tmp0_serialDesc.s1a('reblog', false);
    tmp0_serialDesc.s1a('trail', false);
    tmp0_serialDesc.s1a('caption', true);
    tmp0_serialDesc.s1a('width', true);
    tmp0_serialDesc.s1a('height', true);
    tmp0_serialDesc.s1a('photos', true);
    this.ld8_1 = tmp0_serialDesc;
  }
  md8(encoder, value) {
    var tmp0_desc = this.ld8_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().kd8_1;
    tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.nd8_1);
    tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.od8_1);
    tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.pd8_1);
    tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.qd8_1);
    tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.rd8_1);
    tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.sd8_1);
    tmp1_output.s14(tmp0_desc, 6, IntSerializer_getInstance(), value.td8_1);
    tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.ud8_1);
    tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.vd8_1);
    tmp1_output.s14(tmp0_desc, 9, StringSerializer_getInstance(), value.wd8_1);
    tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.xd8_1);
    tmp1_output.s14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.yd8_1);
    tmp1_output.s14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.zd8_1);
    tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.ad9_1);
    tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.bd9_1);
    tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.cd9_1);
    tmp1_output.s14(tmp0_desc, 16, StringSerializer_getInstance(), value.dd9_1);
    tmp1_output.s14(tmp0_desc, 17, StringSerializer_getInstance(), value.ed9_1);
    tmp1_output.s14(tmp0_desc, 18, StringSerializer_getInstance(), value.fd9_1);
    tmp1_output.s14(tmp0_desc, 19, IntSerializer_getInstance(), value.gd9_1);
    tmp1_output.s14(tmp0_desc, 20, StringSerializer_getInstance(), value.hd9_1);
    tmp1_output.s14(tmp0_desc, 21, StringSerializer_getInstance(), value.id9_1);
    tmp1_output.s14(tmp0_desc, 22, StringSerializer_getInstance(), value.jd9_1);
    tmp1_output.s14(tmp0_desc, 23, StringSerializer_getInstance(), value.kd9_1);
    tmp1_output.s14(tmp0_desc, 24, StringSerializer_getInstance(), value.ld9_1);
    tmp1_output.s14(tmp0_desc, 25, StringSerializer_getInstance(), value.md9_1);
    tmp1_output.s14(tmp0_desc, 26, StringSerializer_getInstance(), value.nd9_1);
    tmp1_output.s14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.od9_1);
    tmp1_output.s14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.pd9_1);
    tmp1_output.s14(tmp0_desc, 29, StringSerializer_getInstance(), value.qd9_1);
    tmp1_output.s14(tmp0_desc, 30, StringSerializer_getInstance(), value.rd9_1);
    tmp1_output.s14(tmp0_desc, 31, StringSerializer_getInstance(), value.sd9_1);
    tmp1_output.s14(tmp0_desc, 32, StringSerializer_getInstance(), value.td9_1);
    tmp1_output.s14(tmp0_desc, 33, StringSerializer_getInstance(), value.ud9_1);
    tmp1_output.s14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.vd9_1);
    tmp1_output.s14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.wd9_1);
    tmp1_output.s14(tmp0_desc, 36, tmp2_cached[36].d3(), value.xd9_1);
    tmp1_output.s14(tmp0_desc, 37, $serializer_getInstance_14(), value.yd9_1);
    tmp1_output.s14(tmp0_desc, 38, $serializer_getInstance_17(), value.zd9_1);
    tmp1_output.s14(tmp0_desc, 39, tmp2_cached[39].d3(), value.ada_1);
    if (tmp1_output.w14(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.s14(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.w14(tmp0_desc, 41) ? true : !(value.width == null)) {
      tmp1_output.s14(tmp0_desc, 41, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.w14(tmp0_desc, 42) ? true : !(value.height == null)) {
      tmp1_output.s14(tmp0_desc, 42, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.w14(tmp0_desc, 43) ? true : !(value.photos == null)) {
      tmp1_output.s14(tmp0_desc, 43, tmp2_cached[43].d3(), value.photos);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.md8(encoder, value instanceof LegacyPhotoPost ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.ld8_1;
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
    var tmp49_input = decoder.a13(tmp0_desc);
    var tmp50_cached = Companion_getInstance_25().kd8_1;
    if (tmp49_input.p13()) {
      tmp5_local0 = tmp49_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.o13(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.o13(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.o13(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.o13(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.o13(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.o13(tmp0_desc, 43, tmp50_cached[43].d3(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.o13(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.o13(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.o13(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.o13(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.o13(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.o13(tmp0_desc, 43, tmp50_cached[43].d3(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp49_input.b13(tmp0_desc);
    return LegacyPhotoPost.bda(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  iy() {
    return this.ld8_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_25().kd8_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[43].d3())];
  }
}
class LegacyPhotoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.cda(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static cda(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_25();
    var $this = this.ucy();
    $this.nd8_1 = blogName;
    $this.od8_1 = idString;
    $this.pd8_1 = genesisPostId;
    $this.qd8_1 = postUrl;
    $this.rd8_1 = parentPostUrl;
    $this.sd8_1 = type;
    $this.td8_1 = timestamp;
    $this.ud8_1 = date;
    $this.vd8_1 = format;
    $this.wd8_1 = reblogKey;
    $this.xd8_1 = tags;
    $this.yd8_1 = isBookmarklet;
    $this.zd8_1 = isMobile;
    $this.ad9_1 = sourceUrl;
    $this.bd9_1 = sourceTitle;
    $this.cd9_1 = isLiked;
    $this.dd9_1 = state;
    $this.ed9_1 = title;
    $this.fd9_1 = body;
    $this.gd9_1 = noteCount;
    $this.hd9_1 = summary;
    $this.id9_1 = slug;
    $this.jd9_1 = rebloggedFromId;
    $this.kd9_1 = rebloggedFromUrl;
    $this.ld9_1 = rebloggedFromName;
    $this.md9_1 = rebloggedFromTitle;
    $this.nd9_1 = rebloggedFromUuid;
    $this.od9_1 = rebloggedFromCanMessage;
    $this.pd9_1 = rebloggedFromFollowing;
    $this.qd9_1 = rebloggedRootId;
    $this.rd9_1 = rebloggedRootUrl;
    $this.sd9_1 = rebloggedRootName;
    $this.td9_1 = rebloggedRootTitle;
    $this.ud9_1 = rebloggedRootUuid;
    $this.vd9_1 = rebloggedRootCanMessage;
    $this.wd9_1 = rebloggedRootFollowing;
    $this.xd9_1 = notes;
    $this.yd9_1 = blog;
    $this.zd9_1 = reblog;
    $this.ada_1 = trail;
    $this.caption = null;
    $this.width = null;
    $this.height = null;
    $this.photos = null;
    return $this;
  }
  wcp(_set____db54di) {
    this.nd8_1 = _set____db54di;
  }
  xcp() {
    return this.nd8_1;
  }
  ecz(_set____db54di) {
    this.od8_1 = _set____db54di;
  }
  fcz() {
    return this.od8_1;
  }
  gcz(_set____db54di) {
    this.pd8_1 = _set____db54di;
  }
  hcz() {
    return this.pd8_1;
  }
  icz(_set____db54di) {
    this.qd8_1 = _set____db54di;
  }
  jcz() {
    return this.qd8_1;
  }
  kcz(_set____db54di) {
    this.rd8_1 = _set____db54di;
  }
  lcz() {
    return this.rd8_1;
  }
  d36(_set____db54di) {
    this.sd8_1 = _set____db54di;
  }
  w35() {
    return this.sd8_1;
  }
  mcz(_set____db54di) {
    this.td8_1 = _set____db54di;
  }
  fcw() {
    return this.td8_1;
  }
  dcr(_set____db54di) {
    this.ud8_1 = _set____db54di;
  }
  ecr() {
    return this.ud8_1;
  }
  fcr(_set____db54di) {
    this.vd8_1 = _set____db54di;
  }
  gcr() {
    return this.vd8_1;
  }
  wcs(_set____db54di) {
    this.wd8_1 = _set____db54di;
  }
  xcs() {
    return this.wd8_1;
  }
  qaf(_set____db54di) {
    this.xd8_1 = _set____db54di;
  }
  laa() {
    return this.xd8_1;
  }
  ncz(_set____db54di) {
    this.yd8_1 = _set____db54di;
  }
  ocz() {
    return this.yd8_1;
  }
  pcz(_set____db54di) {
    this.zd8_1 = _set____db54di;
  }
  qcz() {
    return this.zd8_1;
  }
  x35(_set____db54di) {
    this.ad9_1 = _set____db54di;
  }
  y35() {
    return this.ad9_1;
  }
  rcz(_set____db54di) {
    this.bd9_1 = _set____db54di;
  }
  scz() {
    return this.bd9_1;
  }
  tcz(_set____db54di) {
    this.cd9_1 = _set____db54di;
  }
  iai() {
    return this.cd9_1;
  }
  da2(_set____db54di) {
    this.dd9_1 = _set____db54di;
  }
  q7r() {
    return this.dd9_1;
  }
  haa(_set____db54di) {
    this.ed9_1 = _set____db54di;
  }
  u3g() {
    return this.ed9_1;
  }
  zag(_set____db54di) {
    this.fd9_1 = _set____db54di;
  }
  aah() {
    return this.fd9_1;
  }
  ucz(_set____db54di) {
    this.gd9_1 = _set____db54di;
  }
  vcz() {
    return this.gd9_1;
  }
  uah(_set____db54di) {
    this.hd9_1 = _set____db54di;
  }
  vah() {
    return this.hd9_1;
  }
  hcr(_set____db54di) {
    this.id9_1 = _set____db54di;
  }
  icr() {
    return this.id9_1;
  }
  wcz(_set____db54di) {
    this.jd9_1 = _set____db54di;
  }
  xcz() {
    return this.jd9_1;
  }
  ycz(_set____db54di) {
    this.kd9_1 = _set____db54di;
  }
  zcz() {
    return this.kd9_1;
  }
  ad0(_set____db54di) {
    this.ld9_1 = _set____db54di;
  }
  bd0() {
    return this.ld9_1;
  }
  cd0(_set____db54di) {
    this.md9_1 = _set____db54di;
  }
  dd0() {
    return this.md9_1;
  }
  ed0(_set____db54di) {
    this.nd9_1 = _set____db54di;
  }
  fd0() {
    return this.nd9_1;
  }
  gd0(_set____db54di) {
    this.od9_1 = _set____db54di;
  }
  hd0() {
    return this.od9_1;
  }
  id0(_set____db54di) {
    this.pd9_1 = _set____db54di;
  }
  jd0() {
    return this.pd9_1;
  }
  kd0(_set____db54di) {
    this.qd9_1 = _set____db54di;
  }
  ld0() {
    return this.qd9_1;
  }
  md0(_set____db54di) {
    this.rd9_1 = _set____db54di;
  }
  nd0() {
    return this.rd9_1;
  }
  od0(_set____db54di) {
    this.sd9_1 = _set____db54di;
  }
  pd0() {
    return this.sd9_1;
  }
  qd0(_set____db54di) {
    this.td9_1 = _set____db54di;
  }
  rd0() {
    return this.td9_1;
  }
  sd0(_set____db54di) {
    this.ud9_1 = _set____db54di;
  }
  td0() {
    return this.ud9_1;
  }
  ud0(_set____db54di) {
    this.vd9_1 = _set____db54di;
  }
  vd0() {
    return this.vd9_1;
  }
  wd0(_set____db54di) {
    this.wd9_1 = _set____db54di;
  }
  xd0() {
    return this.wd9_1;
  }
  yd0(_set____db54di) {
    this.xd9_1 = _set____db54di;
  }
  zd0() {
    return this.xd9_1;
  }
  ncu(_set____db54di) {
    this.yd9_1 = _set____db54di;
  }
  ocu() {
    return this.yd9_1;
  }
  ad1(_set____db54di) {
    this.zd9_1 = _set____db54di;
  }
  ybj() {
    return this.zd9_1;
  }
  bd1(_set____db54di) {
    this.ada_1 = _set____db54di;
  }
  cd1() {
    return this.ada_1;
  }
  ucq(_set____db54di) {
    this.caption = _set____db54di;
  }
  vcq() {
    return this.caption;
  }
  za7(_set____db54di) {
    this.width = _set____db54di;
  }
  j77() {
    return this.width;
  }
  aa8(_set____db54di) {
    this.height = _set____db54di;
  }
  l77() {
    return this.height;
  }
  dda(_set____db54di) {
    this.photos = _set____db54di;
  }
  eda() {
    return this.photos;
  }
  static bda(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, width, height, photos, serializationConstructorMarker) {
    Companion_getInstance_25();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_22().ld8_1);
    }
    var $this = this.ucy();
    $this.nd8_1 = blogName;
    $this.od8_1 = idString;
    $this.pd8_1 = genesisPostId;
    $this.qd8_1 = postUrl;
    $this.rd8_1 = parentPostUrl;
    $this.sd8_1 = type;
    $this.td8_1 = timestamp;
    $this.ud8_1 = date;
    $this.vd8_1 = format;
    $this.wd8_1 = reblogKey;
    $this.xd8_1 = tags;
    $this.yd8_1 = isBookmarklet;
    $this.zd8_1 = isMobile;
    $this.ad9_1 = sourceUrl;
    $this.bd9_1 = sourceTitle;
    $this.cd9_1 = isLiked;
    $this.dd9_1 = state;
    $this.ed9_1 = title;
    $this.fd9_1 = body;
    $this.gd9_1 = noteCount;
    $this.hd9_1 = summary;
    $this.id9_1 = slug;
    $this.jd9_1 = rebloggedFromId;
    $this.kd9_1 = rebloggedFromUrl;
    $this.ld9_1 = rebloggedFromName;
    $this.md9_1 = rebloggedFromTitle;
    $this.nd9_1 = rebloggedFromUuid;
    $this.od9_1 = rebloggedFromCanMessage;
    $this.pd9_1 = rebloggedFromFollowing;
    $this.qd9_1 = rebloggedRootId;
    $this.rd9_1 = rebloggedRootUrl;
    $this.sd9_1 = rebloggedRootName;
    $this.td9_1 = rebloggedRootTitle;
    $this.ud9_1 = rebloggedRootUuid;
    $this.vd9_1 = rebloggedRootCanMessage;
    $this.wd9_1 = rebloggedRootFollowing;
    $this.xd9_1 = notes;
    $this.yd9_1 = blog;
    $this.zd9_1 = reblog;
    $this.ada_1 = trail;
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
    tmp.fda_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_1), null];
  }
  t1o() {
    return $serializer_getInstance_23();
  }
}
class $serializer_24 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPostcardPost', this, 41);
    tmp0_serialDesc.s1a('blog_name', false);
    tmp0_serialDesc.s1a('id_string', false);
    tmp0_serialDesc.s1a('genesis_post_id', false);
    tmp0_serialDesc.s1a('post_url', false);
    tmp0_serialDesc.s1a('parent_post_url', false);
    tmp0_serialDesc.s1a('type', false);
    tmp0_serialDesc.s1a('timestamp', false);
    tmp0_serialDesc.s1a('date', false);
    tmp0_serialDesc.s1a('format', false);
    tmp0_serialDesc.s1a('reblog_key', false);
    tmp0_serialDesc.s1a('tags', false);
    tmp0_serialDesc.s1a('bookmarklet', false);
    tmp0_serialDesc.s1a('mobile', false);
    tmp0_serialDesc.s1a('source_url', false);
    tmp0_serialDesc.s1a('source_title', false);
    tmp0_serialDesc.s1a('liked', false);
    tmp0_serialDesc.s1a('state', false);
    tmp0_serialDesc.s1a('title', false);
    tmp0_serialDesc.s1a('body', false);
    tmp0_serialDesc.s1a('note_count', false);
    tmp0_serialDesc.s1a('summary', false);
    tmp0_serialDesc.s1a('slug', false);
    tmp0_serialDesc.s1a('reblogged_from_id', false);
    tmp0_serialDesc.s1a('reblogged_from_url', false);
    tmp0_serialDesc.s1a('reblogged_from_name', false);
    tmp0_serialDesc.s1a('reblogged_from_title', false);
    tmp0_serialDesc.s1a('reblogged_from_uuid', false);
    tmp0_serialDesc.s1a('reblogged_from_can_message', false);
    tmp0_serialDesc.s1a('reblogged_from_following', false);
    tmp0_serialDesc.s1a('reblogged_root_id', false);
    tmp0_serialDesc.s1a('reblogged_root_url', false);
    tmp0_serialDesc.s1a('reblogged_root_name', false);
    tmp0_serialDesc.s1a('reblogged_root_title', false);
    tmp0_serialDesc.s1a('reblogged_root_uuid', false);
    tmp0_serialDesc.s1a('reblogged_root_can_message', false);
    tmp0_serialDesc.s1a('reblogged_root_following', false);
    tmp0_serialDesc.s1a('notes', false);
    tmp0_serialDesc.s1a('blog', false);
    tmp0_serialDesc.s1a('reblog', false);
    tmp0_serialDesc.s1a('trail', false);
    tmp0_serialDesc.s1a('url', true);
    this.gda_1 = tmp0_serialDesc;
  }
  hda(encoder, value) {
    var tmp0_desc = this.gda_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().fda_1;
    tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.ida_1);
    tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.jda_1);
    tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.kda_1);
    tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.lda_1);
    tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.mda_1);
    tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.nda_1);
    tmp1_output.s14(tmp0_desc, 6, IntSerializer_getInstance(), value.oda_1);
    tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.pda_1);
    tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.qda_1);
    tmp1_output.s14(tmp0_desc, 9, StringSerializer_getInstance(), value.rda_1);
    tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.sda_1);
    tmp1_output.s14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.tda_1);
    tmp1_output.s14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.uda_1);
    tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.vda_1);
    tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.wda_1);
    tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.xda_1);
    tmp1_output.s14(tmp0_desc, 16, StringSerializer_getInstance(), value.yda_1);
    tmp1_output.s14(tmp0_desc, 17, StringSerializer_getInstance(), value.zda_1);
    tmp1_output.s14(tmp0_desc, 18, StringSerializer_getInstance(), value.adb_1);
    tmp1_output.s14(tmp0_desc, 19, IntSerializer_getInstance(), value.bdb_1);
    tmp1_output.s14(tmp0_desc, 20, StringSerializer_getInstance(), value.cdb_1);
    tmp1_output.s14(tmp0_desc, 21, StringSerializer_getInstance(), value.ddb_1);
    tmp1_output.s14(tmp0_desc, 22, StringSerializer_getInstance(), value.edb_1);
    tmp1_output.s14(tmp0_desc, 23, StringSerializer_getInstance(), value.fdb_1);
    tmp1_output.s14(tmp0_desc, 24, StringSerializer_getInstance(), value.gdb_1);
    tmp1_output.s14(tmp0_desc, 25, StringSerializer_getInstance(), value.hdb_1);
    tmp1_output.s14(tmp0_desc, 26, StringSerializer_getInstance(), value.idb_1);
    tmp1_output.s14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.jdb_1);
    tmp1_output.s14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.kdb_1);
    tmp1_output.s14(tmp0_desc, 29, StringSerializer_getInstance(), value.ldb_1);
    tmp1_output.s14(tmp0_desc, 30, StringSerializer_getInstance(), value.mdb_1);
    tmp1_output.s14(tmp0_desc, 31, StringSerializer_getInstance(), value.ndb_1);
    tmp1_output.s14(tmp0_desc, 32, StringSerializer_getInstance(), value.odb_1);
    tmp1_output.s14(tmp0_desc, 33, StringSerializer_getInstance(), value.pdb_1);
    tmp1_output.s14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.qdb_1);
    tmp1_output.s14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rdb_1);
    tmp1_output.s14(tmp0_desc, 36, tmp2_cached[36].d3(), value.sdb_1);
    tmp1_output.s14(tmp0_desc, 37, $serializer_getInstance_14(), value.tdb_1);
    tmp1_output.s14(tmp0_desc, 38, $serializer_getInstance_17(), value.udb_1);
    tmp1_output.s14(tmp0_desc, 39, tmp2_cached[39].d3(), value.vdb_1);
    if (tmp1_output.w14(tmp0_desc, 40) ? true : !(value.url == null)) {
      tmp1_output.s14(tmp0_desc, 40, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.hda(encoder, value instanceof LegacyPostcardPost ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.gda_1;
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
    var tmp46_input = decoder.a13(tmp0_desc);
    var tmp47_cached = Companion_getInstance_26().fda_1;
    if (tmp46_input.p13()) {
      tmp5_local0 = tmp46_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.o13(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.o13(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.o13(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.o13(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.o13(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.o13(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp46_input.b13(tmp0_desc);
    return LegacyPostcardPost.wdb(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  iy() {
    return this.gda_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_26().fda_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyPostcardPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.xdb(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static xdb(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_26();
    var $this = this.ucy();
    $this.ida_1 = blogName;
    $this.jda_1 = idString;
    $this.kda_1 = genesisPostId;
    $this.lda_1 = postUrl;
    $this.mda_1 = parentPostUrl;
    $this.nda_1 = type;
    $this.oda_1 = timestamp;
    $this.pda_1 = date;
    $this.qda_1 = format;
    $this.rda_1 = reblogKey;
    $this.sda_1 = tags;
    $this.tda_1 = isBookmarklet;
    $this.uda_1 = isMobile;
    $this.vda_1 = sourceUrl;
    $this.wda_1 = sourceTitle;
    $this.xda_1 = isLiked;
    $this.yda_1 = state;
    $this.zda_1 = title;
    $this.adb_1 = body;
    $this.bdb_1 = noteCount;
    $this.cdb_1 = summary;
    $this.ddb_1 = slug;
    $this.edb_1 = rebloggedFromId;
    $this.fdb_1 = rebloggedFromUrl;
    $this.gdb_1 = rebloggedFromName;
    $this.hdb_1 = rebloggedFromTitle;
    $this.idb_1 = rebloggedFromUuid;
    $this.jdb_1 = rebloggedFromCanMessage;
    $this.kdb_1 = rebloggedFromFollowing;
    $this.ldb_1 = rebloggedRootId;
    $this.mdb_1 = rebloggedRootUrl;
    $this.ndb_1 = rebloggedRootName;
    $this.odb_1 = rebloggedRootTitle;
    $this.pdb_1 = rebloggedRootUuid;
    $this.qdb_1 = rebloggedRootCanMessage;
    $this.rdb_1 = rebloggedRootFollowing;
    $this.sdb_1 = notes;
    $this.tdb_1 = blog;
    $this.udb_1 = reblog;
    $this.vdb_1 = trail;
    $this.url = null;
    return $this;
  }
  wcp(_set____db54di) {
    this.ida_1 = _set____db54di;
  }
  xcp() {
    return this.ida_1;
  }
  ecz(_set____db54di) {
    this.jda_1 = _set____db54di;
  }
  fcz() {
    return this.jda_1;
  }
  gcz(_set____db54di) {
    this.kda_1 = _set____db54di;
  }
  hcz() {
    return this.kda_1;
  }
  icz(_set____db54di) {
    this.lda_1 = _set____db54di;
  }
  jcz() {
    return this.lda_1;
  }
  kcz(_set____db54di) {
    this.mda_1 = _set____db54di;
  }
  lcz() {
    return this.mda_1;
  }
  d36(_set____db54di) {
    this.nda_1 = _set____db54di;
  }
  w35() {
    return this.nda_1;
  }
  mcz(_set____db54di) {
    this.oda_1 = _set____db54di;
  }
  fcw() {
    return this.oda_1;
  }
  dcr(_set____db54di) {
    this.pda_1 = _set____db54di;
  }
  ecr() {
    return this.pda_1;
  }
  fcr(_set____db54di) {
    this.qda_1 = _set____db54di;
  }
  gcr() {
    return this.qda_1;
  }
  wcs(_set____db54di) {
    this.rda_1 = _set____db54di;
  }
  xcs() {
    return this.rda_1;
  }
  qaf(_set____db54di) {
    this.sda_1 = _set____db54di;
  }
  laa() {
    return this.sda_1;
  }
  ncz(_set____db54di) {
    this.tda_1 = _set____db54di;
  }
  ocz() {
    return this.tda_1;
  }
  pcz(_set____db54di) {
    this.uda_1 = _set____db54di;
  }
  qcz() {
    return this.uda_1;
  }
  x35(_set____db54di) {
    this.vda_1 = _set____db54di;
  }
  y35() {
    return this.vda_1;
  }
  rcz(_set____db54di) {
    this.wda_1 = _set____db54di;
  }
  scz() {
    return this.wda_1;
  }
  tcz(_set____db54di) {
    this.xda_1 = _set____db54di;
  }
  iai() {
    return this.xda_1;
  }
  da2(_set____db54di) {
    this.yda_1 = _set____db54di;
  }
  q7r() {
    return this.yda_1;
  }
  haa(_set____db54di) {
    this.zda_1 = _set____db54di;
  }
  u3g() {
    return this.zda_1;
  }
  zag(_set____db54di) {
    this.adb_1 = _set____db54di;
  }
  aah() {
    return this.adb_1;
  }
  ucz(_set____db54di) {
    this.bdb_1 = _set____db54di;
  }
  vcz() {
    return this.bdb_1;
  }
  uah(_set____db54di) {
    this.cdb_1 = _set____db54di;
  }
  vah() {
    return this.cdb_1;
  }
  hcr(_set____db54di) {
    this.ddb_1 = _set____db54di;
  }
  icr() {
    return this.ddb_1;
  }
  wcz(_set____db54di) {
    this.edb_1 = _set____db54di;
  }
  xcz() {
    return this.edb_1;
  }
  ycz(_set____db54di) {
    this.fdb_1 = _set____db54di;
  }
  zcz() {
    return this.fdb_1;
  }
  ad0(_set____db54di) {
    this.gdb_1 = _set____db54di;
  }
  bd0() {
    return this.gdb_1;
  }
  cd0(_set____db54di) {
    this.hdb_1 = _set____db54di;
  }
  dd0() {
    return this.hdb_1;
  }
  ed0(_set____db54di) {
    this.idb_1 = _set____db54di;
  }
  fd0() {
    return this.idb_1;
  }
  gd0(_set____db54di) {
    this.jdb_1 = _set____db54di;
  }
  hd0() {
    return this.jdb_1;
  }
  id0(_set____db54di) {
    this.kdb_1 = _set____db54di;
  }
  jd0() {
    return this.kdb_1;
  }
  kd0(_set____db54di) {
    this.ldb_1 = _set____db54di;
  }
  ld0() {
    return this.ldb_1;
  }
  md0(_set____db54di) {
    this.mdb_1 = _set____db54di;
  }
  nd0() {
    return this.mdb_1;
  }
  od0(_set____db54di) {
    this.ndb_1 = _set____db54di;
  }
  pd0() {
    return this.ndb_1;
  }
  qd0(_set____db54di) {
    this.odb_1 = _set____db54di;
  }
  rd0() {
    return this.odb_1;
  }
  sd0(_set____db54di) {
    this.pdb_1 = _set____db54di;
  }
  td0() {
    return this.pdb_1;
  }
  ud0(_set____db54di) {
    this.qdb_1 = _set____db54di;
  }
  vd0() {
    return this.qdb_1;
  }
  wd0(_set____db54di) {
    this.rdb_1 = _set____db54di;
  }
  xd0() {
    return this.rdb_1;
  }
  yd0(_set____db54di) {
    this.sdb_1 = _set____db54di;
  }
  zd0() {
    return this.sdb_1;
  }
  ncu(_set____db54di) {
    this.tdb_1 = _set____db54di;
  }
  ocu() {
    return this.tdb_1;
  }
  ad1(_set____db54di) {
    this.udb_1 = _set____db54di;
  }
  ybj() {
    return this.udb_1;
  }
  bd1(_set____db54di) {
    this.vdb_1 = _set____db54di;
  }
  cd1() {
    return this.vdb_1;
  }
  x9c(_set____db54di) {
    this.url = _set____db54di;
  }
  a4k() {
    return this.url;
  }
  static wdb(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, url, serializationConstructorMarker) {
    Companion_getInstance_26();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_23().gda_1);
    }
    var $this = this.ucy();
    $this.ida_1 = blogName;
    $this.jda_1 = idString;
    $this.kda_1 = genesisPostId;
    $this.lda_1 = postUrl;
    $this.mda_1 = parentPostUrl;
    $this.nda_1 = type;
    $this.oda_1 = timestamp;
    $this.pda_1 = date;
    $this.qda_1 = format;
    $this.rda_1 = reblogKey;
    $this.sda_1 = tags;
    $this.tda_1 = isBookmarklet;
    $this.uda_1 = isMobile;
    $this.vda_1 = sourceUrl;
    $this.wda_1 = sourceTitle;
    $this.xda_1 = isLiked;
    $this.yda_1 = state;
    $this.zda_1 = title;
    $this.adb_1 = body;
    $this.bdb_1 = noteCount;
    $this.cdb_1 = summary;
    $this.ddb_1 = slug;
    $this.edb_1 = rebloggedFromId;
    $this.fdb_1 = rebloggedFromUrl;
    $this.gdb_1 = rebloggedFromName;
    $this.hdb_1 = rebloggedFromTitle;
    $this.idb_1 = rebloggedFromUuid;
    $this.jdb_1 = rebloggedFromCanMessage;
    $this.kdb_1 = rebloggedFromFollowing;
    $this.ldb_1 = rebloggedRootId;
    $this.mdb_1 = rebloggedRootUrl;
    $this.ndb_1 = rebloggedRootName;
    $this.odb_1 = rebloggedRootTitle;
    $this.pdb_1 = rebloggedRootUuid;
    $this.qdb_1 = rebloggedRootCanMessage;
    $this.rdb_1 = rebloggedRootFollowing;
    $this.sdb_1 = notes;
    $this.tdb_1 = blog;
    $this.udb_1 = reblog;
    $this.vdb_1 = trail;
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
    tmp.ydb_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1), null, null];
  }
  t1o() {
    return $serializer_getInstance_24();
  }
}
class $serializer_25 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyQuotePost', this, 42);
    tmp0_serialDesc.s1a('blog_name', false);
    tmp0_serialDesc.s1a('id_string', false);
    tmp0_serialDesc.s1a('genesis_post_id', false);
    tmp0_serialDesc.s1a('post_url', false);
    tmp0_serialDesc.s1a('parent_post_url', false);
    tmp0_serialDesc.s1a('type', false);
    tmp0_serialDesc.s1a('timestamp', false);
    tmp0_serialDesc.s1a('date', false);
    tmp0_serialDesc.s1a('format', false);
    tmp0_serialDesc.s1a('reblog_key', false);
    tmp0_serialDesc.s1a('tags', false);
    tmp0_serialDesc.s1a('bookmarklet', false);
    tmp0_serialDesc.s1a('mobile', false);
    tmp0_serialDesc.s1a('source_url', false);
    tmp0_serialDesc.s1a('source_title', false);
    tmp0_serialDesc.s1a('liked', false);
    tmp0_serialDesc.s1a('state', false);
    tmp0_serialDesc.s1a('title', false);
    tmp0_serialDesc.s1a('body', false);
    tmp0_serialDesc.s1a('note_count', false);
    tmp0_serialDesc.s1a('summary', false);
    tmp0_serialDesc.s1a('slug', false);
    tmp0_serialDesc.s1a('reblogged_from_id', false);
    tmp0_serialDesc.s1a('reblogged_from_url', false);
    tmp0_serialDesc.s1a('reblogged_from_name', false);
    tmp0_serialDesc.s1a('reblogged_from_title', false);
    tmp0_serialDesc.s1a('reblogged_from_uuid', false);
    tmp0_serialDesc.s1a('reblogged_from_can_message', false);
    tmp0_serialDesc.s1a('reblogged_from_following', false);
    tmp0_serialDesc.s1a('reblogged_root_id', false);
    tmp0_serialDesc.s1a('reblogged_root_url', false);
    tmp0_serialDesc.s1a('reblogged_root_name', false);
    tmp0_serialDesc.s1a('reblogged_root_title', false);
    tmp0_serialDesc.s1a('reblogged_root_uuid', false);
    tmp0_serialDesc.s1a('reblogged_root_can_message', false);
    tmp0_serialDesc.s1a('reblogged_root_following', false);
    tmp0_serialDesc.s1a('notes', false);
    tmp0_serialDesc.s1a('blog', false);
    tmp0_serialDesc.s1a('reblog', false);
    tmp0_serialDesc.s1a('trail', false);
    tmp0_serialDesc.s1a('text', true);
    tmp0_serialDesc.s1a('source', true);
    this.zdb_1 = tmp0_serialDesc;
  }
  adc(encoder, value) {
    var tmp0_desc = this.zdb_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().ydb_1;
    tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.bdc_1);
    tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.cdc_1);
    tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.ddc_1);
    tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.edc_1);
    tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.fdc_1);
    tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.gdc_1);
    tmp1_output.s14(tmp0_desc, 6, IntSerializer_getInstance(), value.hdc_1);
    tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.idc_1);
    tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.jdc_1);
    tmp1_output.s14(tmp0_desc, 9, StringSerializer_getInstance(), value.kdc_1);
    tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.ldc_1);
    tmp1_output.s14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.mdc_1);
    tmp1_output.s14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ndc_1);
    tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.odc_1);
    tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.pdc_1);
    tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.qdc_1);
    tmp1_output.s14(tmp0_desc, 16, StringSerializer_getInstance(), value.rdc_1);
    tmp1_output.s14(tmp0_desc, 17, StringSerializer_getInstance(), value.sdc_1);
    tmp1_output.s14(tmp0_desc, 18, StringSerializer_getInstance(), value.tdc_1);
    tmp1_output.s14(tmp0_desc, 19, IntSerializer_getInstance(), value.udc_1);
    tmp1_output.s14(tmp0_desc, 20, StringSerializer_getInstance(), value.vdc_1);
    tmp1_output.s14(tmp0_desc, 21, StringSerializer_getInstance(), value.wdc_1);
    tmp1_output.s14(tmp0_desc, 22, StringSerializer_getInstance(), value.xdc_1);
    tmp1_output.s14(tmp0_desc, 23, StringSerializer_getInstance(), value.ydc_1);
    tmp1_output.s14(tmp0_desc, 24, StringSerializer_getInstance(), value.zdc_1);
    tmp1_output.s14(tmp0_desc, 25, StringSerializer_getInstance(), value.bdd_1);
    tmp1_output.s14(tmp0_desc, 26, StringSerializer_getInstance(), value.cdd_1);
    tmp1_output.s14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ddd_1);
    tmp1_output.s14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.edd_1);
    tmp1_output.s14(tmp0_desc, 29, StringSerializer_getInstance(), value.fdd_1);
    tmp1_output.s14(tmp0_desc, 30, StringSerializer_getInstance(), value.gdd_1);
    tmp1_output.s14(tmp0_desc, 31, StringSerializer_getInstance(), value.hdd_1);
    tmp1_output.s14(tmp0_desc, 32, StringSerializer_getInstance(), value.idd_1);
    tmp1_output.s14(tmp0_desc, 33, StringSerializer_getInstance(), value.jdd_1);
    tmp1_output.s14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.kdd_1);
    tmp1_output.s14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ldd_1);
    tmp1_output.s14(tmp0_desc, 36, tmp2_cached[36].d3(), value.mdd_1);
    tmp1_output.s14(tmp0_desc, 37, $serializer_getInstance_14(), value.ndd_1);
    tmp1_output.s14(tmp0_desc, 38, $serializer_getInstance_17(), value.odd_1);
    tmp1_output.s14(tmp0_desc, 39, tmp2_cached[39].d3(), value.pdd_1);
    if (tmp1_output.w14(tmp0_desc, 40) ? true : !(value.text == null)) {
      tmp1_output.s14(tmp0_desc, 40, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.w14(tmp0_desc, 41) ? true : !(value.source == null)) {
      tmp1_output.s14(tmp0_desc, 41, StringSerializer_getInstance(), value.source);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.adc(encoder, value instanceof LegacyQuotePost ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.zdb_1;
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
    var tmp47_input = decoder.a13(tmp0_desc);
    var tmp48_cached = Companion_getInstance_27().ydb_1;
    if (tmp47_input.p13()) {
      tmp5_local0 = tmp47_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.o13(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.o13(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.o13(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.o13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.o13(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.o13(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.o13(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.o13(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp47_input.b13(tmp0_desc);
    return LegacyQuotePost.qdd(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  iy() {
    return this.zdb_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_27().ydb_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyQuotePost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.rdd(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static rdd(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_27();
    var $this = this.ucy();
    $this.bdc_1 = blogName;
    $this.cdc_1 = idString;
    $this.ddc_1 = genesisPostId;
    $this.edc_1 = postUrl;
    $this.fdc_1 = parentPostUrl;
    $this.gdc_1 = type;
    $this.hdc_1 = timestamp;
    $this.idc_1 = date;
    $this.jdc_1 = format;
    $this.kdc_1 = reblogKey;
    $this.ldc_1 = tags;
    $this.mdc_1 = isBookmarklet;
    $this.ndc_1 = isMobile;
    $this.odc_1 = sourceUrl;
    $this.pdc_1 = sourceTitle;
    $this.qdc_1 = isLiked;
    $this.rdc_1 = state;
    $this.sdc_1 = title;
    $this.tdc_1 = body;
    $this.udc_1 = noteCount;
    $this.vdc_1 = summary;
    $this.wdc_1 = slug;
    $this.xdc_1 = rebloggedFromId;
    $this.ydc_1 = rebloggedFromUrl;
    $this.zdc_1 = rebloggedFromName;
    $this.bdd_1 = rebloggedFromTitle;
    $this.cdd_1 = rebloggedFromUuid;
    $this.ddd_1 = rebloggedFromCanMessage;
    $this.edd_1 = rebloggedFromFollowing;
    $this.fdd_1 = rebloggedRootId;
    $this.gdd_1 = rebloggedRootUrl;
    $this.hdd_1 = rebloggedRootName;
    $this.idd_1 = rebloggedRootTitle;
    $this.jdd_1 = rebloggedRootUuid;
    $this.kdd_1 = rebloggedRootCanMessage;
    $this.ldd_1 = rebloggedRootFollowing;
    $this.mdd_1 = notes;
    $this.ndd_1 = blog;
    $this.odd_1 = reblog;
    $this.pdd_1 = trail;
    $this.text = null;
    $this.source = null;
    return $this;
  }
  wcp(_set____db54di) {
    this.bdc_1 = _set____db54di;
  }
  xcp() {
    return this.bdc_1;
  }
  ecz(_set____db54di) {
    this.cdc_1 = _set____db54di;
  }
  fcz() {
    return this.cdc_1;
  }
  gcz(_set____db54di) {
    this.ddc_1 = _set____db54di;
  }
  hcz() {
    return this.ddc_1;
  }
  icz(_set____db54di) {
    this.edc_1 = _set____db54di;
  }
  jcz() {
    return this.edc_1;
  }
  kcz(_set____db54di) {
    this.fdc_1 = _set____db54di;
  }
  lcz() {
    return this.fdc_1;
  }
  d36(_set____db54di) {
    this.gdc_1 = _set____db54di;
  }
  w35() {
    return this.gdc_1;
  }
  mcz(_set____db54di) {
    this.hdc_1 = _set____db54di;
  }
  fcw() {
    return this.hdc_1;
  }
  dcr(_set____db54di) {
    this.idc_1 = _set____db54di;
  }
  ecr() {
    return this.idc_1;
  }
  fcr(_set____db54di) {
    this.jdc_1 = _set____db54di;
  }
  gcr() {
    return this.jdc_1;
  }
  wcs(_set____db54di) {
    this.kdc_1 = _set____db54di;
  }
  xcs() {
    return this.kdc_1;
  }
  qaf(_set____db54di) {
    this.ldc_1 = _set____db54di;
  }
  laa() {
    return this.ldc_1;
  }
  ncz(_set____db54di) {
    this.mdc_1 = _set____db54di;
  }
  ocz() {
    return this.mdc_1;
  }
  pcz(_set____db54di) {
    this.ndc_1 = _set____db54di;
  }
  qcz() {
    return this.ndc_1;
  }
  x35(_set____db54di) {
    this.odc_1 = _set____db54di;
  }
  y35() {
    return this.odc_1;
  }
  rcz(_set____db54di) {
    this.pdc_1 = _set____db54di;
  }
  scz() {
    return this.pdc_1;
  }
  tcz(_set____db54di) {
    this.qdc_1 = _set____db54di;
  }
  iai() {
    return this.qdc_1;
  }
  da2(_set____db54di) {
    this.rdc_1 = _set____db54di;
  }
  q7r() {
    return this.rdc_1;
  }
  haa(_set____db54di) {
    this.sdc_1 = _set____db54di;
  }
  u3g() {
    return this.sdc_1;
  }
  zag(_set____db54di) {
    this.tdc_1 = _set____db54di;
  }
  aah() {
    return this.tdc_1;
  }
  ucz(_set____db54di) {
    this.udc_1 = _set____db54di;
  }
  vcz() {
    return this.udc_1;
  }
  uah(_set____db54di) {
    this.vdc_1 = _set____db54di;
  }
  vah() {
    return this.vdc_1;
  }
  hcr(_set____db54di) {
    this.wdc_1 = _set____db54di;
  }
  icr() {
    return this.wdc_1;
  }
  wcz(_set____db54di) {
    this.xdc_1 = _set____db54di;
  }
  xcz() {
    return this.xdc_1;
  }
  ycz(_set____db54di) {
    this.ydc_1 = _set____db54di;
  }
  zcz() {
    return this.ydc_1;
  }
  ad0(_set____db54di) {
    this.zdc_1 = _set____db54di;
  }
  bd0() {
    return this.zdc_1;
  }
  cd0(_set____db54di) {
    this.bdd_1 = _set____db54di;
  }
  dd0() {
    return this.bdd_1;
  }
  ed0(_set____db54di) {
    this.cdd_1 = _set____db54di;
  }
  fd0() {
    return this.cdd_1;
  }
  gd0(_set____db54di) {
    this.ddd_1 = _set____db54di;
  }
  hd0() {
    return this.ddd_1;
  }
  id0(_set____db54di) {
    this.edd_1 = _set____db54di;
  }
  jd0() {
    return this.edd_1;
  }
  kd0(_set____db54di) {
    this.fdd_1 = _set____db54di;
  }
  ld0() {
    return this.fdd_1;
  }
  md0(_set____db54di) {
    this.gdd_1 = _set____db54di;
  }
  nd0() {
    return this.gdd_1;
  }
  od0(_set____db54di) {
    this.hdd_1 = _set____db54di;
  }
  pd0() {
    return this.hdd_1;
  }
  qd0(_set____db54di) {
    this.idd_1 = _set____db54di;
  }
  rd0() {
    return this.idd_1;
  }
  sd0(_set____db54di) {
    this.jdd_1 = _set____db54di;
  }
  td0() {
    return this.jdd_1;
  }
  ud0(_set____db54di) {
    this.kdd_1 = _set____db54di;
  }
  vd0() {
    return this.kdd_1;
  }
  wd0(_set____db54di) {
    this.ldd_1 = _set____db54di;
  }
  xd0() {
    return this.ldd_1;
  }
  yd0(_set____db54di) {
    this.mdd_1 = _set____db54di;
  }
  zd0() {
    return this.mdd_1;
  }
  ncu(_set____db54di) {
    this.ndd_1 = _set____db54di;
  }
  ocu() {
    return this.ndd_1;
  }
  ad1(_set____db54di) {
    this.odd_1 = _set____db54di;
  }
  ybj() {
    return this.odd_1;
  }
  bd1(_set____db54di) {
    this.pdd_1 = _set____db54di;
  }
  cd1() {
    return this.pdd_1;
  }
  z3e(_set____db54di) {
    this.text = _set____db54di;
  }
  g32() {
    return this.text;
  }
  qcr(_set____db54di) {
    this.source = _set____db54di;
  }
  k1z() {
    return this.source;
  }
  static qdd(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, text, source, serializationConstructorMarker) {
    Companion_getInstance_27();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_24().zdb_1);
    }
    var $this = this.ucy();
    $this.bdc_1 = blogName;
    $this.cdc_1 = idString;
    $this.ddc_1 = genesisPostId;
    $this.edc_1 = postUrl;
    $this.fdc_1 = parentPostUrl;
    $this.gdc_1 = type;
    $this.hdc_1 = timestamp;
    $this.idc_1 = date;
    $this.jdc_1 = format;
    $this.kdc_1 = reblogKey;
    $this.ldc_1 = tags;
    $this.mdc_1 = isBookmarklet;
    $this.ndc_1 = isMobile;
    $this.odc_1 = sourceUrl;
    $this.pdc_1 = sourceTitle;
    $this.qdc_1 = isLiked;
    $this.rdc_1 = state;
    $this.sdc_1 = title;
    $this.tdc_1 = body;
    $this.udc_1 = noteCount;
    $this.vdc_1 = summary;
    $this.wdc_1 = slug;
    $this.xdc_1 = rebloggedFromId;
    $this.ydc_1 = rebloggedFromUrl;
    $this.zdc_1 = rebloggedFromName;
    $this.bdd_1 = rebloggedFromTitle;
    $this.cdd_1 = rebloggedFromUuid;
    $this.ddd_1 = rebloggedFromCanMessage;
    $this.edd_1 = rebloggedFromFollowing;
    $this.fdd_1 = rebloggedRootId;
    $this.gdd_1 = rebloggedRootUrl;
    $this.hdd_1 = rebloggedRootName;
    $this.idd_1 = rebloggedRootTitle;
    $this.jdd_1 = rebloggedRootUuid;
    $this.kdd_1 = rebloggedRootCanMessage;
    $this.ldd_1 = rebloggedRootFollowing;
    $this.mdd_1 = notes;
    $this.ndd_1 = blog;
    $this.odd_1 = reblog;
    $this.pdd_1 = trail;
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
    tmp.sdd_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1)];
  }
  t1o() {
    return $serializer_getInstance_25();
  }
}
class $serializer_26 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyTextPost', this, 40);
    tmp0_serialDesc.s1a('blog_name', false);
    tmp0_serialDesc.s1a('id_string', false);
    tmp0_serialDesc.s1a('genesis_post_id', false);
    tmp0_serialDesc.s1a('post_url', false);
    tmp0_serialDesc.s1a('parent_post_url', false);
    tmp0_serialDesc.s1a('type', false);
    tmp0_serialDesc.s1a('timestamp', false);
    tmp0_serialDesc.s1a('date', false);
    tmp0_serialDesc.s1a('format', false);
    tmp0_serialDesc.s1a('reblog_key', false);
    tmp0_serialDesc.s1a('tags', false);
    tmp0_serialDesc.s1a('bookmarklet', false);
    tmp0_serialDesc.s1a('mobile', false);
    tmp0_serialDesc.s1a('source_url', false);
    tmp0_serialDesc.s1a('source_title', false);
    tmp0_serialDesc.s1a('liked', false);
    tmp0_serialDesc.s1a('state', false);
    tmp0_serialDesc.s1a('title', false);
    tmp0_serialDesc.s1a('body', false);
    tmp0_serialDesc.s1a('note_count', false);
    tmp0_serialDesc.s1a('summary', false);
    tmp0_serialDesc.s1a('slug', false);
    tmp0_serialDesc.s1a('reblogged_from_id', false);
    tmp0_serialDesc.s1a('reblogged_from_url', false);
    tmp0_serialDesc.s1a('reblogged_from_name', false);
    tmp0_serialDesc.s1a('reblogged_from_title', false);
    tmp0_serialDesc.s1a('reblogged_from_uuid', false);
    tmp0_serialDesc.s1a('reblogged_from_can_message', false);
    tmp0_serialDesc.s1a('reblogged_from_following', false);
    tmp0_serialDesc.s1a('reblogged_root_id', false);
    tmp0_serialDesc.s1a('reblogged_root_url', false);
    tmp0_serialDesc.s1a('reblogged_root_name', false);
    tmp0_serialDesc.s1a('reblogged_root_title', false);
    tmp0_serialDesc.s1a('reblogged_root_uuid', false);
    tmp0_serialDesc.s1a('reblogged_root_can_message', false);
    tmp0_serialDesc.s1a('reblogged_root_following', false);
    tmp0_serialDesc.s1a('notes', false);
    tmp0_serialDesc.s1a('blog', false);
    tmp0_serialDesc.s1a('reblog', false);
    tmp0_serialDesc.s1a('trail', false);
    this.tdd_1 = tmp0_serialDesc;
  }
  udd(encoder, value) {
    var tmp0_desc = this.tdd_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().sdd_1;
    tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.vdd_1);
    tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.wdd_1);
    tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.xdd_1);
    tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.ydd_1);
    tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.zdd_1);
    tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.ade_1);
    tmp1_output.s14(tmp0_desc, 6, IntSerializer_getInstance(), value.bde_1);
    tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.cde_1);
    tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.dde_1);
    tmp1_output.s14(tmp0_desc, 9, StringSerializer_getInstance(), value.ede_1);
    tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.fde_1);
    tmp1_output.s14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.gde_1);
    tmp1_output.s14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.hde_1);
    tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.ide_1);
    tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.jde_1);
    tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.kde_1);
    tmp1_output.s14(tmp0_desc, 16, StringSerializer_getInstance(), value.lde_1);
    tmp1_output.s14(tmp0_desc, 17, StringSerializer_getInstance(), value.mde_1);
    tmp1_output.s14(tmp0_desc, 18, StringSerializer_getInstance(), value.nde_1);
    tmp1_output.s14(tmp0_desc, 19, IntSerializer_getInstance(), value.ode_1);
    tmp1_output.s14(tmp0_desc, 20, StringSerializer_getInstance(), value.pde_1);
    tmp1_output.s14(tmp0_desc, 21, StringSerializer_getInstance(), value.qde_1);
    tmp1_output.s14(tmp0_desc, 22, StringSerializer_getInstance(), value.rde_1);
    tmp1_output.s14(tmp0_desc, 23, StringSerializer_getInstance(), value.sde_1);
    tmp1_output.s14(tmp0_desc, 24, StringSerializer_getInstance(), value.tde_1);
    tmp1_output.s14(tmp0_desc, 25, StringSerializer_getInstance(), value.ude_1);
    tmp1_output.s14(tmp0_desc, 26, StringSerializer_getInstance(), value.vde_1);
    tmp1_output.s14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.wde_1);
    tmp1_output.s14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.xde_1);
    tmp1_output.s14(tmp0_desc, 29, StringSerializer_getInstance(), value.yde_1);
    tmp1_output.s14(tmp0_desc, 30, StringSerializer_getInstance(), value.zde_1);
    tmp1_output.s14(tmp0_desc, 31, StringSerializer_getInstance(), value.adf_1);
    tmp1_output.s14(tmp0_desc, 32, StringSerializer_getInstance(), value.bdf_1);
    tmp1_output.s14(tmp0_desc, 33, StringSerializer_getInstance(), value.cdf_1);
    tmp1_output.s14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.ddf_1);
    tmp1_output.s14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.edf_1);
    tmp1_output.s14(tmp0_desc, 36, tmp2_cached[36].d3(), value.fdf_1);
    tmp1_output.s14(tmp0_desc, 37, $serializer_getInstance_14(), value.gdf_1);
    tmp1_output.s14(tmp0_desc, 38, $serializer_getInstance_17(), value.hdf_1);
    tmp1_output.s14(tmp0_desc, 39, tmp2_cached[39].d3(), value.idf_1);
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.udd(encoder, value instanceof LegacyTextPost ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.tdd_1;
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
    var tmp45_input = decoder.a13(tmp0_desc);
    var tmp46_cached = Companion_getInstance_28().sdd_1;
    if (tmp45_input.p13()) {
      tmp5_local0 = tmp45_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp45_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp45_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp45_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp45_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp45_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp45_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp45_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp45_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp45_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp45_input.o13(tmp0_desc, 10, tmp46_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp45_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp45_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp45_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp45_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp45_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp45_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp45_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp45_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp45_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp45_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp45_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp45_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp45_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp45_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp45_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp45_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp45_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp45_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp45_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp45_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp45_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp45_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp45_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp45_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp45_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp45_input.o13(tmp0_desc, 36, tmp46_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp45_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp45_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp45_input.o13(tmp0_desc, 39, tmp46_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp45_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp45_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp45_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp45_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp45_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp45_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp45_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp45_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp45_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp45_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp45_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp45_input.o13(tmp0_desc, 10, tmp46_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp45_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp45_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp45_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp45_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp45_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp45_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp45_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp45_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp45_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp45_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp45_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp45_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp45_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp45_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp45_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp45_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp45_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp45_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp45_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp45_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp45_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp45_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp45_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp45_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp45_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp45_input.o13(tmp0_desc, 36, tmp46_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp45_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp45_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp45_input.o13(tmp0_desc, 39, tmp46_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp45_input.b13(tmp0_desc);
    return LegacyTextPost.jdf(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, null);
  }
  iy() {
    return this.tdd_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_28().sdd_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3())];
  }
}
class LegacyTextPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.kdf(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static kdf(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_28();
    var $this = this.ucy();
    $this.vdd_1 = blogName;
    $this.wdd_1 = idString;
    $this.xdd_1 = genesisPostId;
    $this.ydd_1 = postUrl;
    $this.zdd_1 = parentPostUrl;
    $this.ade_1 = type;
    $this.bde_1 = timestamp;
    $this.cde_1 = date;
    $this.dde_1 = format;
    $this.ede_1 = reblogKey;
    $this.fde_1 = tags;
    $this.gde_1 = isBookmarklet;
    $this.hde_1 = isMobile;
    $this.ide_1 = sourceUrl;
    $this.jde_1 = sourceTitle;
    $this.kde_1 = isLiked;
    $this.lde_1 = state;
    $this.mde_1 = title;
    $this.nde_1 = body;
    $this.ode_1 = noteCount;
    $this.pde_1 = summary;
    $this.qde_1 = slug;
    $this.rde_1 = rebloggedFromId;
    $this.sde_1 = rebloggedFromUrl;
    $this.tde_1 = rebloggedFromName;
    $this.ude_1 = rebloggedFromTitle;
    $this.vde_1 = rebloggedFromUuid;
    $this.wde_1 = rebloggedFromCanMessage;
    $this.xde_1 = rebloggedFromFollowing;
    $this.yde_1 = rebloggedRootId;
    $this.zde_1 = rebloggedRootUrl;
    $this.adf_1 = rebloggedRootName;
    $this.bdf_1 = rebloggedRootTitle;
    $this.cdf_1 = rebloggedRootUuid;
    $this.ddf_1 = rebloggedRootCanMessage;
    $this.edf_1 = rebloggedRootFollowing;
    $this.fdf_1 = notes;
    $this.gdf_1 = blog;
    $this.hdf_1 = reblog;
    $this.idf_1 = trail;
    return $this;
  }
  wcp(_set____db54di) {
    this.vdd_1 = _set____db54di;
  }
  xcp() {
    return this.vdd_1;
  }
  ecz(_set____db54di) {
    this.wdd_1 = _set____db54di;
  }
  fcz() {
    return this.wdd_1;
  }
  gcz(_set____db54di) {
    this.xdd_1 = _set____db54di;
  }
  hcz() {
    return this.xdd_1;
  }
  icz(_set____db54di) {
    this.ydd_1 = _set____db54di;
  }
  jcz() {
    return this.ydd_1;
  }
  kcz(_set____db54di) {
    this.zdd_1 = _set____db54di;
  }
  lcz() {
    return this.zdd_1;
  }
  d36(_set____db54di) {
    this.ade_1 = _set____db54di;
  }
  w35() {
    return this.ade_1;
  }
  mcz(_set____db54di) {
    this.bde_1 = _set____db54di;
  }
  fcw() {
    return this.bde_1;
  }
  dcr(_set____db54di) {
    this.cde_1 = _set____db54di;
  }
  ecr() {
    return this.cde_1;
  }
  fcr(_set____db54di) {
    this.dde_1 = _set____db54di;
  }
  gcr() {
    return this.dde_1;
  }
  wcs(_set____db54di) {
    this.ede_1 = _set____db54di;
  }
  xcs() {
    return this.ede_1;
  }
  qaf(_set____db54di) {
    this.fde_1 = _set____db54di;
  }
  laa() {
    return this.fde_1;
  }
  ncz(_set____db54di) {
    this.gde_1 = _set____db54di;
  }
  ocz() {
    return this.gde_1;
  }
  pcz(_set____db54di) {
    this.hde_1 = _set____db54di;
  }
  qcz() {
    return this.hde_1;
  }
  x35(_set____db54di) {
    this.ide_1 = _set____db54di;
  }
  y35() {
    return this.ide_1;
  }
  rcz(_set____db54di) {
    this.jde_1 = _set____db54di;
  }
  scz() {
    return this.jde_1;
  }
  tcz(_set____db54di) {
    this.kde_1 = _set____db54di;
  }
  iai() {
    return this.kde_1;
  }
  da2(_set____db54di) {
    this.lde_1 = _set____db54di;
  }
  q7r() {
    return this.lde_1;
  }
  haa(_set____db54di) {
    this.mde_1 = _set____db54di;
  }
  u3g() {
    return this.mde_1;
  }
  zag(_set____db54di) {
    this.nde_1 = _set____db54di;
  }
  aah() {
    return this.nde_1;
  }
  ucz(_set____db54di) {
    this.ode_1 = _set____db54di;
  }
  vcz() {
    return this.ode_1;
  }
  uah(_set____db54di) {
    this.pde_1 = _set____db54di;
  }
  vah() {
    return this.pde_1;
  }
  hcr(_set____db54di) {
    this.qde_1 = _set____db54di;
  }
  icr() {
    return this.qde_1;
  }
  wcz(_set____db54di) {
    this.rde_1 = _set____db54di;
  }
  xcz() {
    return this.rde_1;
  }
  ycz(_set____db54di) {
    this.sde_1 = _set____db54di;
  }
  zcz() {
    return this.sde_1;
  }
  ad0(_set____db54di) {
    this.tde_1 = _set____db54di;
  }
  bd0() {
    return this.tde_1;
  }
  cd0(_set____db54di) {
    this.ude_1 = _set____db54di;
  }
  dd0() {
    return this.ude_1;
  }
  ed0(_set____db54di) {
    this.vde_1 = _set____db54di;
  }
  fd0() {
    return this.vde_1;
  }
  gd0(_set____db54di) {
    this.wde_1 = _set____db54di;
  }
  hd0() {
    return this.wde_1;
  }
  id0(_set____db54di) {
    this.xde_1 = _set____db54di;
  }
  jd0() {
    return this.xde_1;
  }
  kd0(_set____db54di) {
    this.yde_1 = _set____db54di;
  }
  ld0() {
    return this.yde_1;
  }
  md0(_set____db54di) {
    this.zde_1 = _set____db54di;
  }
  nd0() {
    return this.zde_1;
  }
  od0(_set____db54di) {
    this.adf_1 = _set____db54di;
  }
  pd0() {
    return this.adf_1;
  }
  qd0(_set____db54di) {
    this.bdf_1 = _set____db54di;
  }
  rd0() {
    return this.bdf_1;
  }
  sd0(_set____db54di) {
    this.cdf_1 = _set____db54di;
  }
  td0() {
    return this.cdf_1;
  }
  ud0(_set____db54di) {
    this.ddf_1 = _set____db54di;
  }
  vd0() {
    return this.ddf_1;
  }
  wd0(_set____db54di) {
    this.edf_1 = _set____db54di;
  }
  xd0() {
    return this.edf_1;
  }
  yd0(_set____db54di) {
    this.fdf_1 = _set____db54di;
  }
  zd0() {
    return this.fdf_1;
  }
  ncu(_set____db54di) {
    this.gdf_1 = _set____db54di;
  }
  ocu() {
    return this.gdf_1;
  }
  ad1(_set____db54di) {
    this.hdf_1 = _set____db54di;
  }
  ybj() {
    return this.hdf_1;
  }
  bd1(_set____db54di) {
    this.idf_1 = _set____db54di;
  }
  cd1() {
    return this.idf_1;
  }
  static jdf(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker) {
    Companion_getInstance_28();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_25().tdd_1);
    }
    var $this = this.ucy();
    $this.vdd_1 = blogName;
    $this.wdd_1 = idString;
    $this.xdd_1 = genesisPostId;
    $this.ydd_1 = postUrl;
    $this.zdd_1 = parentPostUrl;
    $this.ade_1 = type;
    $this.bde_1 = timestamp;
    $this.cde_1 = date;
    $this.dde_1 = format;
    $this.ede_1 = reblogKey;
    $this.fde_1 = tags;
    $this.gde_1 = isBookmarklet;
    $this.hde_1 = isMobile;
    $this.ide_1 = sourceUrl;
    $this.jde_1 = sourceTitle;
    $this.kde_1 = isLiked;
    $this.lde_1 = state;
    $this.mde_1 = title;
    $this.nde_1 = body;
    $this.ode_1 = noteCount;
    $this.pde_1 = summary;
    $this.qde_1 = slug;
    $this.rde_1 = rebloggedFromId;
    $this.sde_1 = rebloggedFromUrl;
    $this.tde_1 = rebloggedFromName;
    $this.ude_1 = rebloggedFromTitle;
    $this.vde_1 = rebloggedFromUuid;
    $this.wde_1 = rebloggedFromCanMessage;
    $this.xde_1 = rebloggedFromFollowing;
    $this.yde_1 = rebloggedRootId;
    $this.zde_1 = rebloggedRootUrl;
    $this.adf_1 = rebloggedRootName;
    $this.bdf_1 = rebloggedRootTitle;
    $this.cdf_1 = rebloggedRootUuid;
    $this.ddf_1 = rebloggedRootCanMessage;
    $this.edf_1 = rebloggedRootFollowing;
    $this.fdf_1 = notes;
    $this.gdf_1 = blog;
    $this.hdf_1 = reblog;
    $this.idf_1 = trail;
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
    tmp.ldf_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, lazy(tmp_6, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2)];
  }
  t1o() {
    return $serializer_getInstance_26();
  }
}
class $serializer_27 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyVideoPost', this, 42);
    tmp0_serialDesc.s1a('blog_name', false);
    tmp0_serialDesc.s1a('id_string', false);
    tmp0_serialDesc.s1a('genesis_post_id', false);
    tmp0_serialDesc.s1a('post_url', false);
    tmp0_serialDesc.s1a('parent_post_url', false);
    tmp0_serialDesc.s1a('type', false);
    tmp0_serialDesc.s1a('timestamp', false);
    tmp0_serialDesc.s1a('date', false);
    tmp0_serialDesc.s1a('format', false);
    tmp0_serialDesc.s1a('reblog_key', false);
    tmp0_serialDesc.s1a('tags', false);
    tmp0_serialDesc.s1a('bookmarklet', false);
    tmp0_serialDesc.s1a('mobile', false);
    tmp0_serialDesc.s1a('source_url', false);
    tmp0_serialDesc.s1a('source_title', false);
    tmp0_serialDesc.s1a('liked', false);
    tmp0_serialDesc.s1a('state', false);
    tmp0_serialDesc.s1a('title', false);
    tmp0_serialDesc.s1a('body', false);
    tmp0_serialDesc.s1a('note_count', false);
    tmp0_serialDesc.s1a('summary', false);
    tmp0_serialDesc.s1a('slug', false);
    tmp0_serialDesc.s1a('reblogged_from_id', false);
    tmp0_serialDesc.s1a('reblogged_from_url', false);
    tmp0_serialDesc.s1a('reblogged_from_name', false);
    tmp0_serialDesc.s1a('reblogged_from_title', false);
    tmp0_serialDesc.s1a('reblogged_from_uuid', false);
    tmp0_serialDesc.s1a('reblogged_from_can_message', false);
    tmp0_serialDesc.s1a('reblogged_from_following', false);
    tmp0_serialDesc.s1a('reblogged_root_id', false);
    tmp0_serialDesc.s1a('reblogged_root_url', false);
    tmp0_serialDesc.s1a('reblogged_root_name', false);
    tmp0_serialDesc.s1a('reblogged_root_title', false);
    tmp0_serialDesc.s1a('reblogged_root_uuid', false);
    tmp0_serialDesc.s1a('reblogged_root_can_message', false);
    tmp0_serialDesc.s1a('reblogged_root_following', false);
    tmp0_serialDesc.s1a('notes', false);
    tmp0_serialDesc.s1a('blog', false);
    tmp0_serialDesc.s1a('reblog', false);
    tmp0_serialDesc.s1a('trail', false);
    tmp0_serialDesc.s1a('caption', true);
    tmp0_serialDesc.s1a('player', true);
    this.mdf_1 = tmp0_serialDesc;
  }
  ndf(encoder, value) {
    var tmp0_desc = this.mdf_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().ldf_1;
    tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.odf_1);
    tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.pdf_1);
    tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.qdf_1);
    tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.rdf_1);
    tmp1_output.s14(tmp0_desc, 4, StringSerializer_getInstance(), value.sdf_1);
    tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.tdf_1);
    tmp1_output.s14(tmp0_desc, 6, IntSerializer_getInstance(), value.udf_1);
    tmp1_output.s14(tmp0_desc, 7, StringSerializer_getInstance(), value.vdf_1);
    tmp1_output.s14(tmp0_desc, 8, StringSerializer_getInstance(), value.wdf_1);
    tmp1_output.s14(tmp0_desc, 9, StringSerializer_getInstance(), value.xdf_1);
    tmp1_output.s14(tmp0_desc, 10, tmp2_cached[10].d3(), value.ydf_1);
    tmp1_output.s14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.zdf_1);
    tmp1_output.s14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.adg_1);
    tmp1_output.s14(tmp0_desc, 13, StringSerializer_getInstance(), value.bdg_1);
    tmp1_output.s14(tmp0_desc, 14, StringSerializer_getInstance(), value.cdg_1);
    tmp1_output.s14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ddg_1);
    tmp1_output.s14(tmp0_desc, 16, StringSerializer_getInstance(), value.edg_1);
    tmp1_output.s14(tmp0_desc, 17, StringSerializer_getInstance(), value.fdg_1);
    tmp1_output.s14(tmp0_desc, 18, StringSerializer_getInstance(), value.gdg_1);
    tmp1_output.s14(tmp0_desc, 19, IntSerializer_getInstance(), value.hdg_1);
    tmp1_output.s14(tmp0_desc, 20, StringSerializer_getInstance(), value.idg_1);
    tmp1_output.s14(tmp0_desc, 21, StringSerializer_getInstance(), value.jdg_1);
    tmp1_output.s14(tmp0_desc, 22, StringSerializer_getInstance(), value.kdg_1);
    tmp1_output.s14(tmp0_desc, 23, StringSerializer_getInstance(), value.ldg_1);
    tmp1_output.s14(tmp0_desc, 24, StringSerializer_getInstance(), value.mdg_1);
    tmp1_output.s14(tmp0_desc, 25, StringSerializer_getInstance(), value.ndg_1);
    tmp1_output.s14(tmp0_desc, 26, StringSerializer_getInstance(), value.odg_1);
    tmp1_output.s14(tmp0_desc, 27, BooleanSerializer_getInstance(), value.pdg_1);
    tmp1_output.s14(tmp0_desc, 28, BooleanSerializer_getInstance(), value.qdg_1);
    tmp1_output.s14(tmp0_desc, 29, StringSerializer_getInstance(), value.rdg_1);
    tmp1_output.s14(tmp0_desc, 30, StringSerializer_getInstance(), value.sdg_1);
    tmp1_output.s14(tmp0_desc, 31, StringSerializer_getInstance(), value.tdg_1);
    tmp1_output.s14(tmp0_desc, 32, StringSerializer_getInstance(), value.udg_1);
    tmp1_output.s14(tmp0_desc, 33, StringSerializer_getInstance(), value.vdg_1);
    tmp1_output.s14(tmp0_desc, 34, BooleanSerializer_getInstance(), value.wdg_1);
    tmp1_output.s14(tmp0_desc, 35, BooleanSerializer_getInstance(), value.xdg_1);
    tmp1_output.s14(tmp0_desc, 36, tmp2_cached[36].d3(), value.ydg_1);
    tmp1_output.s14(tmp0_desc, 37, $serializer_getInstance_14(), value.zdg_1);
    tmp1_output.s14(tmp0_desc, 38, $serializer_getInstance_17(), value.adh_1);
    tmp1_output.s14(tmp0_desc, 39, tmp2_cached[39].d3(), value.bdh_1);
    if (tmp1_output.w14(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.s14(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.w14(tmp0_desc, 41) ? true : !(value.player == null)) {
      tmp1_output.s14(tmp0_desc, 41, tmp2_cached[41].d3(), value.player);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.ndf(encoder, value instanceof LegacyVideoPost ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.mdf_1;
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
    var tmp47_input = decoder.a13(tmp0_desc);
    var tmp48_cached = Companion_getInstance_29().ldf_1;
    if (tmp47_input.p13()) {
      tmp5_local0 = tmp47_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.o13(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.o13(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.o13(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.o13(tmp0_desc, 41, tmp48_cached[41].d3(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.o13(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.o13(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.o13(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.o13(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.o13(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.o13(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.o13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.o13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.o13(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.o13(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.o13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.o13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.o13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.o13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.o13(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.o13(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.o13(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.o13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.o13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.o13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.o13(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.o13(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.o13(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.o13(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.o13(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.o13(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.o13(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.o13(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.o13(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.o13(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.o13(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.o13(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.o13(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.o13(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.o13(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.o13(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.o13(tmp0_desc, 41, tmp48_cached[41].d3(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp47_input.b13(tmp0_desc);
    return LegacyVideoPost.cdh(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  iy() {
    return this.mdf_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_29().ldf_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[41].d3())];
  }
}
class LegacyVideoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ddh(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ddh(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_29();
    var $this = this.ucy();
    $this.odf_1 = blogName;
    $this.pdf_1 = idString;
    $this.qdf_1 = genesisPostId;
    $this.rdf_1 = postUrl;
    $this.sdf_1 = parentPostUrl;
    $this.tdf_1 = type;
    $this.udf_1 = timestamp;
    $this.vdf_1 = date;
    $this.wdf_1 = format;
    $this.xdf_1 = reblogKey;
    $this.ydf_1 = tags;
    $this.zdf_1 = isBookmarklet;
    $this.adg_1 = isMobile;
    $this.bdg_1 = sourceUrl;
    $this.cdg_1 = sourceTitle;
    $this.ddg_1 = isLiked;
    $this.edg_1 = state;
    $this.fdg_1 = title;
    $this.gdg_1 = body;
    $this.hdg_1 = noteCount;
    $this.idg_1 = summary;
    $this.jdg_1 = slug;
    $this.kdg_1 = rebloggedFromId;
    $this.ldg_1 = rebloggedFromUrl;
    $this.mdg_1 = rebloggedFromName;
    $this.ndg_1 = rebloggedFromTitle;
    $this.odg_1 = rebloggedFromUuid;
    $this.pdg_1 = rebloggedFromCanMessage;
    $this.qdg_1 = rebloggedFromFollowing;
    $this.rdg_1 = rebloggedRootId;
    $this.sdg_1 = rebloggedRootUrl;
    $this.tdg_1 = rebloggedRootName;
    $this.udg_1 = rebloggedRootTitle;
    $this.vdg_1 = rebloggedRootUuid;
    $this.wdg_1 = rebloggedRootCanMessage;
    $this.xdg_1 = rebloggedRootFollowing;
    $this.ydg_1 = notes;
    $this.zdg_1 = blog;
    $this.adh_1 = reblog;
    $this.bdh_1 = trail;
    $this.caption = null;
    $this.player = null;
    return $this;
  }
  wcp(_set____db54di) {
    this.odf_1 = _set____db54di;
  }
  xcp() {
    return this.odf_1;
  }
  ecz(_set____db54di) {
    this.pdf_1 = _set____db54di;
  }
  fcz() {
    return this.pdf_1;
  }
  gcz(_set____db54di) {
    this.qdf_1 = _set____db54di;
  }
  hcz() {
    return this.qdf_1;
  }
  icz(_set____db54di) {
    this.rdf_1 = _set____db54di;
  }
  jcz() {
    return this.rdf_1;
  }
  kcz(_set____db54di) {
    this.sdf_1 = _set____db54di;
  }
  lcz() {
    return this.sdf_1;
  }
  d36(_set____db54di) {
    this.tdf_1 = _set____db54di;
  }
  w35() {
    return this.tdf_1;
  }
  mcz(_set____db54di) {
    this.udf_1 = _set____db54di;
  }
  fcw() {
    return this.udf_1;
  }
  dcr(_set____db54di) {
    this.vdf_1 = _set____db54di;
  }
  ecr() {
    return this.vdf_1;
  }
  fcr(_set____db54di) {
    this.wdf_1 = _set____db54di;
  }
  gcr() {
    return this.wdf_1;
  }
  wcs(_set____db54di) {
    this.xdf_1 = _set____db54di;
  }
  xcs() {
    return this.xdf_1;
  }
  qaf(_set____db54di) {
    this.ydf_1 = _set____db54di;
  }
  laa() {
    return this.ydf_1;
  }
  ncz(_set____db54di) {
    this.zdf_1 = _set____db54di;
  }
  ocz() {
    return this.zdf_1;
  }
  pcz(_set____db54di) {
    this.adg_1 = _set____db54di;
  }
  qcz() {
    return this.adg_1;
  }
  x35(_set____db54di) {
    this.bdg_1 = _set____db54di;
  }
  y35() {
    return this.bdg_1;
  }
  rcz(_set____db54di) {
    this.cdg_1 = _set____db54di;
  }
  scz() {
    return this.cdg_1;
  }
  tcz(_set____db54di) {
    this.ddg_1 = _set____db54di;
  }
  iai() {
    return this.ddg_1;
  }
  da2(_set____db54di) {
    this.edg_1 = _set____db54di;
  }
  q7r() {
    return this.edg_1;
  }
  haa(_set____db54di) {
    this.fdg_1 = _set____db54di;
  }
  u3g() {
    return this.fdg_1;
  }
  zag(_set____db54di) {
    this.gdg_1 = _set____db54di;
  }
  aah() {
    return this.gdg_1;
  }
  ucz(_set____db54di) {
    this.hdg_1 = _set____db54di;
  }
  vcz() {
    return this.hdg_1;
  }
  uah(_set____db54di) {
    this.idg_1 = _set____db54di;
  }
  vah() {
    return this.idg_1;
  }
  hcr(_set____db54di) {
    this.jdg_1 = _set____db54di;
  }
  icr() {
    return this.jdg_1;
  }
  wcz(_set____db54di) {
    this.kdg_1 = _set____db54di;
  }
  xcz() {
    return this.kdg_1;
  }
  ycz(_set____db54di) {
    this.ldg_1 = _set____db54di;
  }
  zcz() {
    return this.ldg_1;
  }
  ad0(_set____db54di) {
    this.mdg_1 = _set____db54di;
  }
  bd0() {
    return this.mdg_1;
  }
  cd0(_set____db54di) {
    this.ndg_1 = _set____db54di;
  }
  dd0() {
    return this.ndg_1;
  }
  ed0(_set____db54di) {
    this.odg_1 = _set____db54di;
  }
  fd0() {
    return this.odg_1;
  }
  gd0(_set____db54di) {
    this.pdg_1 = _set____db54di;
  }
  hd0() {
    return this.pdg_1;
  }
  id0(_set____db54di) {
    this.qdg_1 = _set____db54di;
  }
  jd0() {
    return this.qdg_1;
  }
  kd0(_set____db54di) {
    this.rdg_1 = _set____db54di;
  }
  ld0() {
    return this.rdg_1;
  }
  md0(_set____db54di) {
    this.sdg_1 = _set____db54di;
  }
  nd0() {
    return this.sdg_1;
  }
  od0(_set____db54di) {
    this.tdg_1 = _set____db54di;
  }
  pd0() {
    return this.tdg_1;
  }
  qd0(_set____db54di) {
    this.udg_1 = _set____db54di;
  }
  rd0() {
    return this.udg_1;
  }
  sd0(_set____db54di) {
    this.vdg_1 = _set____db54di;
  }
  td0() {
    return this.vdg_1;
  }
  ud0(_set____db54di) {
    this.wdg_1 = _set____db54di;
  }
  vd0() {
    return this.wdg_1;
  }
  wd0(_set____db54di) {
    this.xdg_1 = _set____db54di;
  }
  xd0() {
    return this.xdg_1;
  }
  yd0(_set____db54di) {
    this.ydg_1 = _set____db54di;
  }
  zd0() {
    return this.ydg_1;
  }
  ncu(_set____db54di) {
    this.zdg_1 = _set____db54di;
  }
  ocu() {
    return this.zdg_1;
  }
  ad1(_set____db54di) {
    this.adh_1 = _set____db54di;
  }
  ybj() {
    return this.adh_1;
  }
  bd1(_set____db54di) {
    this.bdh_1 = _set____db54di;
  }
  cd1() {
    return this.bdh_1;
  }
  ucq(_set____db54di) {
    this.caption = _set____db54di;
  }
  vcq() {
    return this.caption;
  }
  edh() {
    return this.player;
  }
  static cdh(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, player, serializationConstructorMarker) {
    Companion_getInstance_29();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_26().mdf_1);
    }
    var $this = this.ucy();
    $this.odf_1 = blogName;
    $this.pdf_1 = idString;
    $this.qdf_1 = genesisPostId;
    $this.rdf_1 = postUrl;
    $this.sdf_1 = parentPostUrl;
    $this.tdf_1 = type;
    $this.udf_1 = timestamp;
    $this.vdf_1 = date;
    $this.wdf_1 = format;
    $this.xdf_1 = reblogKey;
    $this.ydf_1 = tags;
    $this.zdf_1 = isBookmarklet;
    $this.adg_1 = isMobile;
    $this.bdg_1 = sourceUrl;
    $this.cdg_1 = sourceTitle;
    $this.ddg_1 = isLiked;
    $this.edg_1 = state;
    $this.fdg_1 = title;
    $this.gdg_1 = body;
    $this.hdg_1 = noteCount;
    $this.idg_1 = summary;
    $this.jdg_1 = slug;
    $this.kdg_1 = rebloggedFromId;
    $this.ldg_1 = rebloggedFromUrl;
    $this.mdg_1 = rebloggedFromName;
    $this.ndg_1 = rebloggedFromTitle;
    $this.odg_1 = rebloggedFromUuid;
    $this.pdg_1 = rebloggedFromCanMessage;
    $this.qdg_1 = rebloggedFromFollowing;
    $this.rdg_1 = rebloggedRootId;
    $this.sdg_1 = rebloggedRootUrl;
    $this.tdg_1 = rebloggedRootName;
    $this.udg_1 = rebloggedRootTitle;
    $this.vdg_1 = rebloggedRootUuid;
    $this.wdg_1 = rebloggedRootCanMessage;
    $this.xdg_1 = rebloggedRootFollowing;
    $this.ydg_1 = notes;
    $this.zdg_1 = blog;
    $this.adh_1 = reblog;
    $this.bdh_1 = trail;
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
    tmp0_serialDesc.s1a('name', true);
    tmp0_serialDesc.s1a('label', true);
    tmp0_serialDesc.s1a('phrase', true);
    this.fdh_1 = tmp0_serialDesc;
  }
  gdh(encoder, value) {
    var tmp0_desc = this.fdh_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.label == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.phrase == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.phrase);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.gdh(encoder, value instanceof Dialogue ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.fdh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.a13(tmp0_desc);
    if (tmp7_input.p13()) {
      tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp7_input.b13(tmp0_desc);
    return Dialogue.hdh(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  iy() {
    return this.fdh_1;
  }
  i1b() {
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
  b71() {
    return this.label;
  }
  idh() {
    return this.phrase;
  }
  static hdh(seen0, name, label, phrase, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().fdh_1);
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
    tmp.jdh_1 = [null, null, lazy(tmp_0, Photo$Companion$$childSerializers$_anonymous__7997i0)];
  }
}
class $serializer_29 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Photo', this, 3);
    tmp0_serialDesc.s1a('caption', true);
    tmp0_serialDesc.s1a('original_size', true);
    tmp0_serialDesc.s1a('alt_sizes', true);
    this.kdh_1 = tmp0_serialDesc;
  }
  ldh(encoder, value) {
    var tmp0_desc = this.kdh_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().jdh_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.caption == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.originalSize == null)) {
      tmp1_output.s14(tmp0_desc, 1, $serializer_getInstance_29(), value.originalSize);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.altSizes == null)) {
      tmp1_output.s14(tmp0_desc, 2, tmp2_cached[2].d3(), value.altSizes);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.ldh(encoder, value instanceof Photo ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.kdh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.a13(tmp0_desc);
    var tmp8_cached = Companion_getInstance_31().jdh_1;
    if (tmp7_input.p13()) {
      tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp7_input.b13(tmp0_desc);
    return Photo.mdh(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  iy() {
    return this.kdh_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_31().jdh_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_29()), get_nullable(tmp0_cached[2].d3())];
  }
}
class Photo {
  constructor() {
    Companion_getInstance_31();
    this.caption = null;
    this.originalSize = null;
    this.altSizes = null;
  }
  vcq() {
    return this.caption;
  }
  ndh() {
    return this.originalSize;
  }
  odh() {
    return this.altSizes;
  }
  static mdh(seen0, caption, originalSize, altSizes, serializationConstructorMarker) {
    Companion_getInstance_31();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().kdh_1);
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
    tmp0_serialDesc.s1a('width', true);
    tmp0_serialDesc.s1a('height', true);
    tmp0_serialDesc.s1a('url', true);
    this.pdh_1 = tmp0_serialDesc;
  }
  qdh(encoder, value) {
    var tmp0_desc = this.pdh_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.width === 0)) {
      tmp1_output.k14(tmp0_desc, 0, value.width);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.height === 0)) {
      tmp1_output.k14(tmp0_desc, 1, value.height);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.qdh(encoder, value instanceof PhotoSize ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.pdh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.a13(tmp0_desc);
    if (tmp7_input.p13()) {
      tmp4_local0 = tmp7_input.f13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.f13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.f13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.f13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp7_input.b13(tmp0_desc);
    return PhotoSize.rdh(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  iy() {
    return this.pdh_1;
  }
  i1b() {
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
  j77() {
    return this.width;
  }
  l77() {
    return this.height;
  }
  a4k() {
    return this.url;
  }
  static rdh(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().pdh_1);
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
    tmp0_serialDesc.s1a('width', true);
    tmp0_serialDesc.s1a('embedCode', true);
    this.sdh_1 = tmp0_serialDesc;
  }
  tdh(encoder, value) {
    var tmp0_desc = this.sdh_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.s14(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.embedCode == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.embedCode);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.tdh(encoder, value instanceof Video ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.sdh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return Video.udh(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.sdh_1;
  }
  i1b() {
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
  j77() {
    return this.width;
  }
  vdh() {
    return this.embedCode;
  }
  static udh(seen0, width, embedCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().sdh_1);
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
    tmp0_serialDesc.s1a('name', true);
    tmp0_serialDesc.s1a('active', true);
    tmp0_serialDesc.s1a('theme', true);
    tmp0_serialDesc.s1a('share_likes', true);
    tmp0_serialDesc.s1a('share_following', true);
    tmp0_serialDesc.s1a('can_be_followed', true);
    this.wdh_1 = tmp0_serialDesc;
  }
  xdh(encoder, value) {
    var tmp0_desc = this.wdh_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.isActive === false)) {
      tmp1_output.h14(tmp0_desc, 1, value.isActive);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.theme == null)) {
      tmp1_output.s14(tmp0_desc, 2, $serializer_getInstance_16(), value.theme);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.isShareLikes === false)) {
      tmp1_output.h14(tmp0_desc, 3, value.isShareLikes);
    }
    if (tmp1_output.w14(tmp0_desc, 4) ? true : !(value.isShareFollowing === false)) {
      tmp1_output.h14(tmp0_desc, 4, value.isShareFollowing);
    }
    if (tmp1_output.w14(tmp0_desc, 5) ? true : !(value.isCanBeFollowed === false)) {
      tmp1_output.h14(tmp0_desc, 5, value.isCanBeFollowed);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.xdh(encoder, value instanceof BlogInTrail ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.wdh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.a13(tmp0_desc);
    if (tmp10_input.p13()) {
      tmp4_local0 = tmp10_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.c13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.o13(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.c13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.c13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.c13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.c13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.o13(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.c13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.c13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.c13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp10_input.b13(tmp0_desc);
    return BlogInTrail.ydh(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  iy() {
    return this.wdh_1;
  }
  i1b() {
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
  t24() {
    return this.isActive;
  }
  hcx() {
    return this.theme;
  }
  zdh() {
    return this.isShareLikes;
  }
  adi() {
    return this.isShareFollowing;
  }
  bdi() {
    return this.isCanBeFollowed;
  }
  static ydh(seen0, name, isActive, theme, isShareLikes, isShareFollowing, isCanBeFollowed, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().wdh_1);
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
    tmp0_serialDesc.s1a('id', true);
    this.cdi_1 = tmp0_serialDesc;
  }
  ddi(encoder, value) {
    var tmp0_desc = this.cdi_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.ddi(encoder, value instanceof IdInTrail ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.cdi_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.a13(tmp0_desc);
    if (tmp5_input.p13()) {
      tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp5_input.b13(tmp0_desc);
    return IdInTrail.edi(tmp3_bitMask0, tmp4_local0, null);
  }
  iy() {
    return this.cdi_1;
  }
  i1b() {
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
  p3c() {
    return this.id;
  }
  static edi(seen0, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().cdi_1);
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
    tmp0_serialDesc.s1a('blog', true);
    tmp0_serialDesc.s1a('post', true);
    tmp0_serialDesc.s1a('content_raw', true);
    tmp0_serialDesc.s1a('content', true);
    tmp0_serialDesc.s1a('current_item', true);
    tmp0_serialDesc.s1a('root_item', true);
    this.fdi_1 = tmp0_serialDesc;
  }
  gdi(encoder, value) {
    var tmp0_desc = this.fdi_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.s14(tmp0_desc, 0, $serializer_getInstance_31(), value.blog);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.post == null)) {
      tmp1_output.s14(tmp0_desc, 1, $serializer_getInstance_32(), value.post);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.contentRaw == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.contentRaw);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.content == null)) {
      tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.content);
    }
    if (tmp1_output.w14(tmp0_desc, 4) ? true : !(value.isCurrentItem === false)) {
      tmp1_output.h14(tmp0_desc, 4, value.isCurrentItem);
    }
    if (tmp1_output.w14(tmp0_desc, 5) ? true : !(value.isRootItem === false)) {
      tmp1_output.h14(tmp0_desc, 5, value.isRootItem);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.gdi(encoder, value instanceof Trail ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.fdi_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.a13(tmp0_desc);
    if (tmp10_input.p13()) {
      tmp4_local0 = tmp10_input.o13(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.o13(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.c13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.c13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.o13(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.o13(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.c13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.c13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp10_input.b13(tmp0_desc);
    return Trail.hdi(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  iy() {
    return this.fdi_1;
  }
  i1b() {
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
  ocu() {
    return this.blog;
  }
  q69() {
    return this.post;
  }
  idi() {
    return this.contentRaw;
  }
  d1o() {
    return this.content;
  }
  jdi() {
    return this.isCurrentItem;
  }
  kdi() {
    return this.isRootItem;
  }
  static hdi(seen0, blog, post, contentRaw, content, isCurrentItem, isRootItem, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().fdi_1);
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
    tmp0_serialDesc.s1a('name', true);
    tmp0_serialDesc.s1a('following', true);
    tmp0_serialDesc.s1a('url', true);
    tmp0_serialDesc.s1a('updated', true);
    this.ldi_1 = tmp0_serialDesc;
  }
  mdi(encoder, value) {
    var tmp0_desc = this.ldi_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.following == null)) {
      tmp1_output.s14(tmp0_desc, 1, BooleanSerializer_getInstance(), value.following);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.updated);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.mdi(encoder, value instanceof FollowerUser ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.ldi_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.a13(tmp0_desc);
    if (tmp8_input.p13()) {
      tmp4_local0 = tmp8_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.o13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.o13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp8_input.b13(tmp0_desc);
    return FollowerUser.ndi(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  iy() {
    return this.ldi_1;
  }
  i1b() {
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
  q34(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  j9h(_set____db54di) {
    this.following = _set____db54di;
  }
  z37() {
    return this.following;
  }
  x9c(_set____db54di) {
    this.url = _set____db54di;
  }
  a4k() {
    return this.url;
  }
  odi(_set____db54di) {
    this.updated = _set____db54di;
  }
  acx() {
    return this.updated;
  }
  static ndi(seen0, name, following, url, updated, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().ldi_1);
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
    tmp.pdi_1 = [null, null, null, null, lazy(tmp_0, User$Companion$$childSerializers$_anonymous__6nf9sv)];
  }
}
class $serializer_36 {
  constructor() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.User', this, 5);
    tmp0_serialDesc.s1a('following', true);
    tmp0_serialDesc.s1a('default_post_format', true);
    tmp0_serialDesc.s1a('name', true);
    tmp0_serialDesc.s1a('likes', true);
    tmp0_serialDesc.s1a('blogs', true);
    this.qdi_1 = tmp0_serialDesc;
  }
  rdi(encoder, value) {
    var tmp0_desc = this.qdi_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_38().pdi_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.followingCount == null)) {
      tmp1_output.s14(tmp0_desc, 0, IntSerializer_getInstance(), value.followingCount);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.defaultPostFormat == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.defaultPostFormat);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.s14(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.likeCount == null)) {
      tmp1_output.s14(tmp0_desc, 3, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.w14(tmp0_desc, 4) ? true : !(value.blogs == null)) {
      tmp1_output.s14(tmp0_desc, 4, tmp2_cached[4].d3(), value.blogs);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.rdi(encoder, value instanceof User ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.qdi_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.a13(tmp0_desc);
    var tmp10_cached = Companion_getInstance_38().pdi_1;
    if (tmp9_input.p13()) {
      tmp4_local0 = tmp9_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.o13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.o13(tmp0_desc, 4, tmp10_cached[4].d3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.o13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.o13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.o13(tmp0_desc, 4, tmp10_cached[4].d3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp9_input.b13(tmp0_desc);
    return User.sdi(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  iy() {
    return this.qdi_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_38().pdi_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[4].d3())];
  }
}
class User extends Resource {
  constructor() {
    return new.target.tdi();
  }
  static tdi() {
    Companion_getInstance_38();
    var $this = this.rcw();
    $this.followingCount = null;
    $this.defaultPostFormat = null;
    $this.name = null;
    $this.likeCount = null;
    $this.blogs = null;
    return $this;
  }
  y33() {
    return this.followingCount;
  }
  udi() {
    return this.defaultPostFormat;
  }
  d1() {
    return this.name;
  }
  a32() {
    return this.likeCount;
  }
  hcu() {
    return this.blogs;
  }
  static sdi(seen0, followingCount, defaultPostFormat, name, likeCount, blogs, serializationConstructorMarker) {
    Companion_getInstance_38();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().qdi_1);
    }
    var $this = this.rcw();
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
class AbstractResourceImpl {
  constructor(auth) {
    this.vdi_1 = auth;
  }
  *xdi(path, params, files, $completion) {
    return yield* /*#__NOINLINE__*/proceedUnit(this, AbstractResourceImpl$oauthPostUnit$slambda(path, this, params, files), $completion);
  }
  ydi(path, params, files, $completion, $super) {
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
    return $super === VOID ? this.xdi(path, params, files, $completion) : $super.xdi.call(this, path, params, files, $completion);
  }
  *zdi(path, params, $completion) {
    return yield* /*#__NOINLINE__*/proceedUnit(this, AbstractResourceImpl$oauthPutUnit$slambda(path, this, params), $completion);
  }
  adj(blogName, extPath) {
    return '/blog/' + blogUrl(this, blogName) + extPath;
  }
}
class AuthResourceImpl extends AbstractResourceImpl {
  authorizeUrl(request) {
    // Inline function 'kotlin.apply' call
    var this_0 = new URLBuilder();
    this_0.k46(Companion_getInstance().m46_1);
    this_0.b45_1 = 'www.tumblr.com';
    set_encodedPath(this_0, '/oauth2/authorize');
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.k45_1;
    this_1.y3o('client_id', this.vdi_1.rcl_1);
    this_1.y3o('response_type', request.responseType);
    this_1.y3o('state', ensureNotNull(request.state));
    this_1.y3o('scope', request.scope);
    var tmp0_safe_receiver = request.redirectUri;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_1.y3o('redirect_uri', tmp0_safe_receiver);
    }
    return this_0.z3w().toString();
  }
  *lcm(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2/oauth2/token').r51(request.tcp()).t51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.uz(tmp$ret$4, obj);
          tmp$ret$0 = new Response(tmp$ret$2, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oAuth2Token(request) {
    return promisify(($completion) => this.lcm(request, $completion));
  }
  *jcm(request, $completion) {
    return this.oAuth2Token === protoOf(AuthResourceImpl).oAuth2Token ? (yield* this.lcm(request, $completion)) : (yield* await_0(this.oAuth2Token(request), $completion));
  }
  mcm(request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenBlocking$slambda(this, request));
  }
  *ncm(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2/oauth2/token').r51(request.tcp()).t51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.uz(tmp$ret$4, obj);
          tmp$ret$0 = new Response(tmp$ret$2, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oAuth2TokenRefresh(request) {
    return promisify(($completion) => this.ncm(request, $completion));
  }
  *kcm(request, $completion) {
    return this.oAuth2TokenRefresh === protoOf(AuthResourceImpl).oAuth2TokenRefresh ? (yield* this.ncm(request, $completion)) : (yield* await_0(this.oAuth2TokenRefresh(request), $completion));
  }
  ocm(request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this, request));
  }
}
class BlogResourceImpl extends AbstractResourceImpl {
  *wcm(request, $completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.adj(ensureNotNull(request.blogName), '/info');
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + path).i51(MediaType_getInstance().wdi_1).p51(params).o51('api_key', this.vdi_1.rcl_1).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogInfoResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.uz(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  blogInfo(request) {
    return promisify(($completion) => this.wcm(request, $completion));
  }
  *pcm(request, $completion) {
    return this.blogInfo === protoOf(BlogResourceImpl).blogInfo ? (yield* this.wcm(request, $completion)) : (yield* await_0(this.blogInfo(request), $completion));
  }
  xcm(request) {
    return toBlocking(BlogResourceImpl$blogInfoBlocking$slambda(this, request));
  }
  *ycm(request, $completion) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    var path = this.adj(ensureNotNull(request.blogName), '/avatar' + ext);
    var r = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + path).m51(false).s51($completion);
    var tmp0 = r.y51_1.v4('location');
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
    return promisify(($completion) => this.ycm(request, $completion));
  }
  *zcm(request, $completion) {
    return this.blogAvatar === protoOf(BlogResourceImpl).blogAvatar ? (yield* this.ycm(request, $completion)) : (yield* await_0(this.blogAvatar(request), $completion));
  }
  acn(request) {
    return toBlocking(BlogResourceImpl$blogAvatarBlocking$slambda(this, request));
  }
  *bcn(request, $completion) {
    var tmp2 = this.adj(ensureNotNull(request.blogName), '/likes');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).i51(MediaType_getInstance().wdi_1).p51(params).o51('api_key', this.vdi_1.rcl_1).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogLikesResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogLikes(request) {
    return promisify(($completion) => this.bcn(request, $completion));
  }
  *qcm(request, $completion) {
    return this.blogLikes === protoOf(BlogResourceImpl).blogLikes ? (yield* this.bcn(request, $completion)) : (yield* await_0(this.blogLikes(request), $completion));
  }
  ccn(request) {
    return toBlocking(BlogResourceImpl$blogLikesBlocking$slambda(this, request));
  }
  *dcn(request, $completion) {
    var tmp2 = this.adj(ensureNotNull(request.blogName), '/following');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowingResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogFollowing(request) {
    return promisify(($completion) => this.dcn(request, $completion));
  }
  *ecn(request, $completion) {
    return this.blogFollowing === protoOf(BlogResourceImpl).blogFollowing ? (yield* this.dcn(request, $completion)) : (yield* await_0(this.blogFollowing(request), $completion));
  }
  fcn(request) {
    return toBlocking(BlogResourceImpl$blogFollowingBlocking$slambda(this, request));
  }
  *gcn(request, $completion) {
    var tmp2 = this.adj(ensureNotNull(request.blogName), '/followers');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowersResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogFollowers(request) {
    return promisify(($completion) => this.gcn(request, $completion));
  }
  *rcm(request, $completion) {
    return this.blogFollowers === protoOf(BlogResourceImpl).blogFollowers ? (yield* this.gcn(request, $completion)) : (yield* await_0(this.blogFollowers(request), $completion));
  }
  hcn(request) {
    return toBlocking(BlogResourceImpl$blogFollowersBlocking$slambda(this, request));
  }
  *icn(request, $completion) {
    var ext = request.type == null ? '' : '/' + ensureNotNull(request.type);
    var tmp2 = this.adj(ensureNotNull(request.blogName), '/posts' + ext);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogPosts(request) {
    return promisify(($completion) => this.icn(request, $completion));
  }
  *scm(request, $completion) {
    return this.blogPosts === protoOf(BlogResourceImpl).blogPosts ? (yield* this.icn(request, $completion)) : (yield* await_0(this.blogPosts(request), $completion));
  }
  jcn(request) {
    return toBlocking(BlogResourceImpl$blogPostsBlocking$slambda(this, request));
  }
  *kcn(request, $completion) {
    var tmp2 = this.adj(ensureNotNull(request.blogName), '/posts/queue');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogQueuedPosts(request) {
    return promisify(($completion) => this.kcn(request, $completion));
  }
  *lcn(request, $completion) {
    return this.blogQueuedPosts === protoOf(BlogResourceImpl).blogQueuedPosts ? (yield* this.kcn(request, $completion)) : (yield* await_0(this.blogQueuedPosts(request), $completion));
  }
  mcn(request) {
    return toBlocking(BlogResourceImpl$blogQueuedPostsBlocking$slambda(this, request));
  }
  *ncn(request, $completion) {
    var tmp2 = this.adj(ensureNotNull(request.blogName), '/posts/draft');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogDraftPosts(request) {
    return promisify(($completion) => this.ncn(request, $completion));
  }
  *ocn(request, $completion) {
    return this.blogDraftPosts === protoOf(BlogResourceImpl).blogDraftPosts ? (yield* this.ncn(request, $completion)) : (yield* await_0(this.blogDraftPosts(request), $completion));
  }
  pcn(request) {
    return toBlocking(BlogResourceImpl$blogDraftPostsBlocking$slambda(this, request));
  }
  *qcn(request, $completion) {
    var tmp2 = this.adj(ensureNotNull(request.blogName), '/posts/submission');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogSubmissions(request) {
    return promisify(($completion) => this.qcn(request, $completion));
  }
  *rcn(request, $completion) {
    return this.blogSubmissions === protoOf(BlogResourceImpl).blogSubmissions ? (yield* this.qcn(request, $completion)) : (yield* await_0(this.blogSubmissions(request), $completion));
  }
  scn(request) {
    return toBlocking(BlogResourceImpl$blogSubmissionsBlocking$slambda(this, request));
  }
  *tcn(request, $completion) {
    var tmp = this.adj(ensureNotNull(request.blogName), '/post');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.tcp();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.tcp();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.tcp();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.tcp();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.tcp();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.tcp();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.tcp();
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
      tmp_2 = request.ucr();
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_2 = emptyMap();
    }
    return yield* this.xdi(tmp, tmp_1, tmp_2, $completion);
  }
  postCreate(request) {
    return promisify(($completion) => this.tcn(request, $completion));
  }
  *tcm(request, $completion) {
    return this.postCreate === protoOf(BlogResourceImpl).postCreate ? (yield* this.tcn(request, $completion)) : (yield* await_0(this.postCreate(request), $completion));
  }
  ucn(request) {
    return toBlocking(BlogResourceImpl$postCreateBlocking$slambda(this, request));
  }
  *vcn(request, $completion) {
    var tmp = this.adj(ensureNotNull(request.blogName), '/post/edit');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.tcp();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.tcp();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.tcp();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.tcp();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.tcp();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.tcp();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.tcp();
                } else {
                  throw IllegalArgumentException.a2('Unknown post type.');
                }
              }
            }
          }
        }
      }
    }
    return yield* this.ydi(tmp, tmp_0, VOID, $completion);
  }
  postEdit(request) {
    return promisify(($completion) => this.vcn(request, $completion));
  }
  *wcn(request, $completion) {
    return this.postEdit === protoOf(BlogResourceImpl).postEdit ? (yield* this.vcn(request, $completion)) : (yield* await_0(this.postEdit(request), $completion));
  }
  xcn(request) {
    return toBlocking(BlogResourceImpl$postEditBlocking$slambda(this, request));
  }
  *ycn(request, $completion) {
    return yield* this.ydi(this.adj(ensureNotNull(request.blogName), '/post/reblog'), request.tcp(), VOID, $completion);
  }
  postReblog(request) {
    return promisify(($completion) => this.ycn(request, $completion));
  }
  *ucm(request, $completion) {
    return this.postReblog === protoOf(BlogResourceImpl).postReblog ? (yield* this.ycn(request, $completion)) : (yield* await_0(this.postReblog(request), $completion));
  }
  zcn(request) {
    return toBlocking(BlogResourceImpl$postReblogBlocking$slambda(this, request));
  }
  *aco(request, $completion) {
    return yield* this.ydi(this.adj(ensureNotNull(request.blogName), '/post/delete'), request.tcp(), VOID, $completion);
  }
  postDelete(request) {
    return promisify(($completion) => this.aco(request, $completion));
  }
  *vcm(request, $completion) {
    return this.postDelete === protoOf(BlogResourceImpl).postDelete ? (yield* this.aco(request, $completion)) : (yield* await_0(this.postDelete(request), $completion));
  }
  bco(request) {
    return toBlocking(BlogResourceImpl$postDeleteBlocking$slambda(this, request));
  }
  *cco(request, $completion) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.adj(ensureNotNull(request.blogName), '/banner' + ext);
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + path).i51(MediaType_getInstance().wdi_1).p51(params).o51('api_key', this.vdi_1.rcl_1).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogBannerResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.uz(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  blogBanner(request) {
    return promisify(($completion) => this.cco(request, $completion));
  }
  *dco(request, $completion) {
    return this.blogBanner === protoOf(BlogResourceImpl).blogBanner ? (yield* this.cco(request, $completion)) : (yield* await_0(this.blogBanner(request), $completion));
  }
  eco(request) {
    return toBlocking(BlogResourceImpl$blogBannerBlocking$slambda(this, request));
  }
  *fco(request, $completion) {
    return yield* this.zdi(this.adj(ensureNotNull(request.blogName), '/info'), request.tcp(), $completion);
  }
  blogUpdateInfo(request) {
    return promisify(($completion) => this.fco(request, $completion));
  }
  *gco(request, $completion) {
    return this.blogUpdateInfo === protoOf(BlogResourceImpl).blogUpdateInfo ? (yield* this.fco(request, $completion)) : (yield* await_0(this.blogUpdateInfo(request), $completion));
  }
  hco(request) {
    return toBlocking(BlogResourceImpl$blogUpdateInfoBlocking$slambda(this, request));
  }
  *ico(request, $completion) {
    return yield* this.ydi(this.adj(ensureNotNull(request.blogName), '/post/edit/tags'), request.tcp(), VOID, $completion);
  }
  postEditTags(request) {
    return promisify(($completion) => this.ico(request, $completion));
  }
  *jco(request, $completion) {
    return this.postEditTags === protoOf(BlogResourceImpl).postEditTags ? (yield* this.ico(request, $completion)) : (yield* await_0(this.postEditTags(request), $completion));
  }
  kco(request) {
    return toBlocking(BlogResourceImpl$postEditTagsBlocking$slambda(this, request));
  }
  *lco(request, $completion) {
    return yield* this.xdi(this.adj(ensureNotNull(request.blogName), '/post/edit'), request.tcp(), request.toFileMap(), $completion);
  }
  postUpdate(request) {
    return promisify(($completion) => this.lco(request, $completion));
  }
  *mco(request, $completion) {
    return this.postUpdate === protoOf(BlogResourceImpl).postUpdate ? (yield* this.lco(request, $completion)) : (yield* await_0(this.postUpdate(request), $completion));
  }
  nco(request) {
    return toBlocking(BlogResourceImpl$postUpdateBlocking$slambda(this, request));
  }
}
class TaggedResourceImpl extends AbstractResourceImpl {
  *pco(request, $completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + '/tagged').i51(MediaType_getInstance().wdi_1).p51(params).o51('api_key', this.vdi_1.rcl_1).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().og(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Post), arrayOf([]), false))]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  tagged(request) {
    return promisify(($completion) => this.pco(request, $completion));
  }
  *oco(request, $completion) {
    return this.tagged === protoOf(TaggedResourceImpl).tagged ? (yield* this.pco(request, $completion)) : (yield* await_0(this.tagged(request), $completion));
  }
  qco(request) {
    return toBlocking(TaggedResourceImpl$taggedBlocking$slambda(this, request));
  }
}
class UserResourceImpl extends AbstractResourceImpl {
  *yco($completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var path = '/user/info';
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + path).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.uz(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  user() {
    return promisify(($completion) => this.yco($completion));
  }
  *rco($completion) {
    return this.user === protoOf(UserResourceImpl).user ? (yield* this.yco($completion)) : (yield* await_0(this.user(), $completion));
  }
  zco() {
    return toBlocking(UserResourceImpl$userBlocking$slambda(this));
  }
  *acp(request, $completion) {
    var tmp2 = '/user/dashboard';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserDashboardResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userDashboard(request) {
    return promisify(($completion) => this.acp(request, $completion));
  }
  *sco(request, $completion) {
    return this.userDashboard === protoOf(UserResourceImpl).userDashboard ? (yield* this.acp(request, $completion)) : (yield* await_0(this.userDashboard(request), $completion));
  }
  bcp(request) {
    return toBlocking(UserResourceImpl$userDashboardBlocking$slambda(this, request));
  }
  *ccp(request, $completion) {
    var tmp2 = '/user/following';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserFollowingResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userFollowing(request) {
    return promisify(($completion) => this.ccp(request, $completion));
  }
  *tco(request, $completion) {
    return this.userFollowing === protoOf(UserResourceImpl).userFollowing ? (yield* this.ccp(request, $completion)) : (yield* await_0(this.userFollowing(request), $completion));
  }
  dcp(request) {
    return toBlocking(UserResourceImpl$userFollowingBlocking$slambda(this, request));
  }
  *ecp(request, $completion) {
    var tmp2 = '/user/likes';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.tcp();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + tmp2).j51('Authorization', this.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).p51(params).s51($completion);
        var containsArg = response.x51_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.b52();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.cdj_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ty();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserLikesResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.uz(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.b52());
          break $l$block;
        }
        throw TumblrException.ccm(response.x51_1, response.b52());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userLikes(request) {
    return promisify(($completion) => this.ecp(request, $completion));
  }
  *fcp(request, $completion) {
    return this.userLikes === protoOf(UserResourceImpl).userLikes ? (yield* this.ecp(request, $completion)) : (yield* await_0(this.userLikes(request), $completion));
  }
  gcp(request) {
    return toBlocking(UserResourceImpl$userLikesBlocking$slambda(this, request));
  }
  *hcp(request, $completion) {
    return yield* this.ydi('/user/like', request.tcp(), VOID, $completion);
  }
  like(request) {
    return promisify(($completion) => this.hcp(request, $completion));
  }
  *uco(request, $completion) {
    return this.like === protoOf(UserResourceImpl).like ? (yield* this.hcp(request, $completion)) : (yield* await_0(this.like(request), $completion));
  }
  icp(request) {
    return toBlocking(UserResourceImpl$likeBlocking$slambda(this, request));
  }
  *jcp(request, $completion) {
    return yield* this.ydi('/user/unlike', request.tcp(), VOID, $completion);
  }
  unlike(request) {
    return promisify(($completion) => this.jcp(request, $completion));
  }
  *vco(request, $completion) {
    return this.unlike === protoOf(UserResourceImpl).unlike ? (yield* this.jcp(request, $completion)) : (yield* await_0(this.unlike(request), $completion));
  }
  kcp(request) {
    return toBlocking(UserResourceImpl$unlikeBlocking$slambda(this, request));
  }
  *lcp(request, $completion) {
    return yield* this.ydi('/user/follow', request.tcp(), VOID, $completion);
  }
  follow(request) {
    return promisify(($completion) => this.lcp(request, $completion));
  }
  *wco(request, $completion) {
    return this.follow === protoOf(UserResourceImpl).follow ? (yield* this.lcp(request, $completion)) : (yield* await_0(this.follow(request), $completion));
  }
  mcp(request) {
    return toBlocking(UserResourceImpl$followBlocking$slambda(this, request));
  }
  *ncp(request, $completion) {
    return yield* this.ydi('/user/unfollow', request.tcp(), VOID, $completion);
  }
  unfollow(request) {
    return promisify(($completion) => this.ncp(request, $completion));
  }
  *xco(request, $completion) {
    return this.unfollow === protoOf(UserResourceImpl).unfollow ? (yield* this.ncp(request, $completion)) : (yield* await_0(this.unfollow(request), $completion));
  }
  ocp(request) {
    return toBlocking(UserResourceImpl$unfollowBlocking$slambda(this, request));
  }
}
class AnySerializer {
  constructor() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.gdj_1 = AnySerializer$additionalSerializer$lambda;
    this.hdj_1 = buildClassSerialDescriptor('Any', []);
  }
  iy() {
    return this.hdj_1;
  }
  wy(decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException.a2(toString(message));
    }
    var element = decoder.z1n();
    return toAny(this, element);
  }
  b89(encoder, value) {
    if (typeof value === 'number') {
      encoder.z13(value);
    } else {
      if (typeof value === 'bigint') {
        encoder.a14(value);
      } else {
        if (typeof value === 'number') {
          encoder.y13(value);
        } else {
          if (typeof value === 'number') {
            encoder.b14(value);
          } else {
            if (typeof value === 'number') {
              encoder.c14(value);
            } else {
              if (typeof value === 'string') {
                encoder.e14(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.w13(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.e14(toString(this));
                  } else {
                    if (!this.gdj_1(encoder, value)) {
                      println("Can't serialize unknown type: " + toString(getKClassFromExpression(value)));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  vy(encoder, value) {
    return this.b89(encoder, !(value == null) ? value : THROW_CCE());
  }
}
class Json_0 {
  constructor() {
    Json_instance = this;
    var tmp = this;
    tmp.cdj_1 = Json(VOID, Json$json$lambda);
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.wdi_1 = Application_getInstance().j3u_1.toString();
  }
}
class PostSerializer extends JsonContentPolymorphicSerializer {
  constructor() {
    PostSerializer_instance = null;
    super(getKClass(Post));
    PostSerializer_instance = this;
  }
  a1o(element) {
    var type = get_jsonObject(element).ui('type');
    var tmp;
    var tmp_0;
    if (type instanceof JsonPrimitive) {
      tmp_0 = type.c1o();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      switch (type.d1o()) {
        case 'text':
          tmp = Companion_getInstance_28().t1o();
          break;
        case 'photo':
          tmp = Companion_getInstance_25().t1o();
          break;
        case 'quote':
          tmp = Companion_getInstance_27().t1o();
          break;
        case 'link':
          tmp = Companion_getInstance_24().t1o();
          break;
        case 'video':
          tmp = Companion_getInstance_29().t1o();
          break;
        case 'audio':
          tmp = Companion_getInstance_22().t1o();
          break;
        case 'chat':
          tmp = Companion_getInstance_23().t1o();
          break;
        case 'answer':
          tmp = Companion_getInstance_21().t1o();
          break;
        case 'postcard':
          tmp = Companion_getInstance_26().t1o();
          break;
        default:
          tmp = Companion_instance_19.t1o();
          break;
      }
    } else {
      tmp = Companion_instance_19.t1o();
    }
    return tmp;
  }
}
//endregion
function init_work_socialhub_ktumblr_TumblrException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.acm_1);
  _this__u8e3s4.ycl_1 = null;
  _this__u8e3s4.zcl_1 = null;
}
var TumblrFactory_instance;
function TumblrFactory_getInstance() {
  return TumblrFactory_instance;
}
function *oAuth2Token$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.jcm) ? (yield* $this.jcm(request, $completion)) : (yield* await_0($this.oAuth2Token(request), $completion));
}
function *oAuth2TokenRefresh$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.kcm) ? (yield* $this.kcm(request, $completion)) : (yield* await_0($this.oAuth2TokenRefresh(request), $completion));
}
function *blogInfo$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.pcm) ? (yield* $this.pcm(request, $completion)) : (yield* await_0($this.blogInfo(request), $completion));
}
function *blogLikes$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.qcm) ? (yield* $this.qcm(request, $completion)) : (yield* await_0($this.blogLikes(request), $completion));
}
function *blogFollowers$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.rcm) ? (yield* $this.rcm(request, $completion)) : (yield* await_0($this.blogFollowers(request), $completion));
}
function *blogPosts$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.scm) ? (yield* $this.scm(request, $completion)) : (yield* await_0($this.blogPosts(request), $completion));
}
function *postCreate$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.tcm) ? (yield* $this.tcm(request, $completion)) : (yield* await_0($this.postCreate(request), $completion));
}
function *postReblog$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.ucm) ? (yield* $this.ucm(request, $completion)) : (yield* await_0($this.postReblog(request), $completion));
}
function *postDelete$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.vcm) ? (yield* $this.vcm(request, $completion)) : (yield* await_0($this.postDelete(request), $completion));
}
function *tagged$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.oco) ? (yield* $this.oco(request, $completion)) : (yield* await_0($this.tagged(request), $completion));
}
function *user$virtualSuspendBridge($this, $completion) {
  return jsIsFunction($this.rco) ? (yield* $this.rco($completion)) : (yield* await_0($this.user(), $completion));
}
function *userDashboard$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.sco) ? (yield* $this.sco(request, $completion)) : (yield* await_0($this.userDashboard(request), $completion));
}
function *userFollowing$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.tco) ? (yield* $this.tco(request, $completion)) : (yield* await_0($this.userFollowing(request), $completion));
}
function *like$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.uco) ? (yield* $this.uco(request, $completion)) : (yield* await_0($this.like(request), $completion));
}
function *unlike$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.vco) ? (yield* $this.vco(request, $completion)) : (yield* await_0($this.unlike(request), $completion));
}
function *follow$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.wco) ? (yield* $this.wco(request, $completion)) : (yield* await_0($this.follow(request), $completion));
}
function *unfollow$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.xco) ? (yield* $this.xco(request, $completion)) : (yield* await_0($this.unfollow(request), $completion));
}
function addParam_0(_this__u8e3s4, key, value) {
  if (value == null)
    return Unit_instance;
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.o4(key, value);
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
    var containsArg = response.x51_1;
    if (200 <= containsArg ? containsArg <= 299 : false) {
      return new ResponseUnit(response.b52());
    }
    throw TumblrException.ccm(response.x51_1, response.b52());
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
      throw tmp0_elvis_lhs == null ? TumblrException.bcm(e) : tmp0_elvis_lhs;
    } else {
      throw $p;
    }
  }
}
function blogUrl($this, blogName) {
  return contains(blogName, '.') ? blogName : blogName + '.tumblr.com';
}
function AbstractResourceImpl$oauthPostUnit$slambda($path, this$0, $params, $files) {
  return constructCallableReference(function *($completion) {
    // Inline function 'kotlin.also' call
    var this_0 = (new HttpRequest()).h51('https://api.tumblr.com/v2' + $path).j51('Authorization', this$0.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).r51($params);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $files.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var key = element.c3();
      // Inline function 'kotlin.collections.component2' call
      var pair = element.d3();
      this_0.f50(key, pair.first, pair.second);
    }
    return yield* this_0.t51($completion);
  }, 0);
}
function AbstractResourceImpl$oauthPutUnit$slambda($path, this$0, $params) {
  return constructCallableReference(function *($completion) {
    return yield* (new HttpRequest()).h51('https://api.tumblr.com/v2' + $path).j51('Authorization', this$0.vdi_1.vcl()).i51(MediaType_getInstance().wdi_1).r51($params).u51($completion);
  }, 0);
}
function AuthResourceImpl$oAuth2TokenBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.jcm($request, $completion);
  }, 1);
}
function AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.kcm($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogInfoBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.pcm($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogAvatarBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.zcm($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogLikesBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.qcm($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogFollowingBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ecn($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogFollowersBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.rcm($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogPostsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.scm($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogQueuedPostsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.lcn($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogDraftPostsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ocn($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogSubmissionsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.rcn($request, $completion);
  }, 1);
}
function BlogResourceImpl$postCreateBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.tcm($request, $completion);
  }, 1);
}
function BlogResourceImpl$postEditBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.wcn($request, $completion);
  }, 1);
}
function BlogResourceImpl$postReblogBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ucm($request, $completion);
  }, 1);
}
function BlogResourceImpl$postDeleteBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.vcm($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogBannerBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.dco($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogUpdateInfoBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.gco($request, $completion);
  }, 1);
}
function BlogResourceImpl$postEditTagsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.jco($request, $completion);
  }, 1);
}
function BlogResourceImpl$postUpdateBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.mco($request, $completion);
  }, 1);
}
function TaggedResourceImpl$taggedBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.oco($request, $completion);
  }, 1);
}
function UserResourceImpl$userBlocking$slambda(this$0) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.rco($completion);
  }, 1);
}
function UserResourceImpl$userDashboardBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.sco($request, $completion);
  }, 1);
}
function UserResourceImpl$userFollowingBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.tco($request, $completion);
  }, 1);
}
function UserResourceImpl$userLikesBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.fcp($request, $completion);
  }, 1);
}
function UserResourceImpl$likeBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.uco($request, $completion);
  }, 1);
}
function UserResourceImpl$unlikeBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.vco($request, $completion);
  }, 1);
}
function UserResourceImpl$followBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.wco($request, $completion);
  }, 1);
}
function UserResourceImpl$unfollowBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.xco($request, $completion);
  }, 1);
}
function toAny($this, $receiver) {
  if ($receiver instanceof JsonPrimitive) {
    var tmp;
    if ($receiver.c1o()) {
      tmp = $receiver.d1o();
    } else if (!(get_intOrNull($receiver) == null)) {
      tmp = get_int($receiver);
    } else if (!(get_longOrNull($receiver) == null)) {
      tmp = get_long($receiver);
    } else if (!(get_floatOrNull($receiver) == null)) {
      tmp = get_float($receiver);
    } else if (!(get_doubleOrNull($receiver) == null)) {
      tmp = get_double($receiver);
    } else if (!(get_booleanOrNull($receiver) == null)) {
      tmp = get_boolean($receiver);
    } else {
      throw IllegalStateException.o("Can't deserialize unknown type: " + $receiver.toString());
    }
    return tmp;
  } else {
    if ($receiver instanceof JsonArray) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d2(collectionSizeOrDefault($receiver, 10));
      var _iterator__ex2g4s = $receiver.l1();
      while (_iterator__ex2g4s.m1()) {
        var item = _iterator__ex2g4s.n1();
        var tmp$ret$2 = toAny(AnySerializer_getInstance(), item);
        destination.e2(tmp$ret$2);
      }
      return destination;
    } else {
      if ($receiver instanceof JsonObject) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList.d2($receiver.k2());
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s_0 = $receiver.b3().l1();
        while (_iterator__ex2g4s_0.m1()) {
          var item_0 = _iterator__ex2g4s_0.n1();
          var tmp$ret$6 = to(item_0.c3(), toAny(AnySerializer_getInstance(), item_0.d3()));
          destination_0.e2(tmp$ret$6);
        }
        return toMap(destination_0);
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
}
function AnySerializer$additionalSerializer$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
  return false;
}
var AnySerializer_instance;
function AnySerializer_getInstance() {
  if (AnySerializer_instance === VOID)
    new AnySerializer();
  return AnySerializer_instance;
}
function Json$json$lambda($this$Json) {
  $this$Json.m1m_1 = false;
  $this$Json.l1m_1 = true;
  $this$Json.n1m_1 = true;
  var tmp = $this$Json;
  // Inline function 'kotlinx.serialization.modules.SerializersModule' call
  var builder = new SerializersModuleBuilder();
  builder.q1k(PrimitiveClasses_getInstance().eg(), AnySerializer_getInstance());
  builder.q1k(getKClass(Post), PostSerializer_getInstance());
  tmp.c1n_1 = builder.s18();
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
  throw UnsupportedOperationException.ra('Blocking operations are not supported in JavaScript. Please use suspend functions or Promise-based APIs instead.');
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
protoOf(AuthAuthorizeUrlRequest).pcp = addParam;
initMetadataForClass(AuthAuthorizeUrlRequest, 'AuthAuthorizeUrlRequest', AuthAuthorizeUrlRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRefreshRequest).pcp = addParam;
initMetadataForClass(AuthOAuth2TokenRefreshRequest, 'AuthOAuth2TokenRefreshRequest', AuthOAuth2TokenRefreshRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRequest).pcp = addParam;
initMetadataForClass(AuthOAuth2TokenRequest, 'AuthOAuth2TokenRequest', AuthOAuth2TokenRequest, VOID, [MapRequest]);
initMetadataForClass(BlogAvatarRequest, 'BlogAvatarRequest', BlogAvatarRequest);
initMetadataForClass(BlogBannerRequest, 'BlogBannerRequest', BlogBannerRequest);
protoOf(BlogDraftsRequest).pcp = addParam;
initMetadataForClass(BlogDraftsRequest, 'BlogDraftsRequest', BlogDraftsRequest, VOID, [MapRequest]);
protoOf(BlogFollowersRequest).pcp = addParam;
initMetadataForClass(BlogFollowersRequest, 'BlogFollowersRequest', BlogFollowersRequest, VOID, [MapRequest]);
protoOf(BlogFollowingRequest).pcp = addParam;
initMetadataForClass(BlogFollowingRequest, 'BlogFollowingRequest', BlogFollowingRequest, VOID, [MapRequest]);
initMetadataForClass(BlogInfoRequest, 'BlogInfoRequest', BlogInfoRequest);
protoOf(BlogLikesRequest).pcp = addParam;
initMetadataForClass(BlogLikesRequest, 'BlogLikesRequest', BlogLikesRequest, VOID, [MapRequest]);
protoOf(BlogPostsRequest).pcp = addParam;
initMetadataForClass(BlogPostsRequest, 'BlogPostsRequest', BlogPostsRequest, VOID, [MapRequest]);
protoOf(BlogQueueRequest).pcp = addParam;
initMetadataForClass(BlogQueueRequest, 'BlogQueueRequest', BlogQueueRequest, VOID, [MapRequest]);
protoOf(BlogSubmissionsRequest).pcp = addParam;
initMetadataForClass(BlogSubmissionsRequest, 'BlogSubmissionsRequest', BlogSubmissionsRequest, VOID, [MapRequest]);
protoOf(BlogUpdateInfoRequest).pcp = addParam;
initMetadataForClass(BlogUpdateInfoRequest, 'BlogUpdateInfoRequest', BlogUpdateInfoRequest, VOID, [MapRequest]);
initMetadataForClass(BlogPostRequest, 'BlogPostRequest', BlogPostRequest);
protoOf(BlogAudioPostRequest).pcp = addParam;
initMetadataForClass(BlogAudioPostRequest, 'BlogAudioPostRequest', BlogAudioPostRequest, VOID, [MapRequest]);
protoOf(BlogChatPostRequest).pcp = addParam;
initMetadataForClass(BlogChatPostRequest, 'BlogChatPostRequest', BlogChatPostRequest, VOID, [MapRequest]);
protoOf(BlogDeleteRequest).pcp = addParam;
initMetadataForClass(BlogDeleteRequest, 'BlogDeleteRequest', BlogDeleteRequest, VOID, [MapRequest]);
protoOf(BlogLinkPostRequest).pcp = addParam;
initMetadataForClass(BlogLinkPostRequest, 'BlogLinkPostRequest', BlogLinkPostRequest, VOID, [MapRequest]);
protoOf(BlogPhotoPostRequest).pcp = addParam;
initMetadataForClass(BlogPhotoPostRequest, 'BlogPhotoPostRequest', BlogPhotoPostRequest, VOID, [MapRequest]);
protoOf(BlogPostEditTagsRequest).pcp = addParam;
initMetadataForClass(BlogPostEditTagsRequest, 'BlogPostEditTagsRequest', BlogPostEditTagsRequest, VOID, [MapRequest]);
protoOf(BlogPostUpdateRequest).pcp = addParam;
initMetadataForClass(BlogPostUpdateRequest, 'BlogPostUpdateRequest', BlogPostUpdateRequest, VOID, [MapRequest]);
protoOf(BlogQuotePostRequest).pcp = addParam;
initMetadataForClass(BlogQuotePostRequest, 'BlogQuotePostRequest', BlogQuotePostRequest, VOID, [MapRequest]);
protoOf(BlogReblogRequest).pcp = addParam;
initMetadataForClass(BlogReblogRequest, 'BlogReblogRequest', BlogReblogRequest, VOID, [MapRequest]);
protoOf(BlogTextPostRequest).pcp = addParam;
initMetadataForClass(BlogTextPostRequest, 'BlogTextPostRequest', BlogTextPostRequest, VOID, [MapRequest]);
protoOf(BlogVideoPostRequest).pcp = addParam;
initMetadataForClass(BlogVideoPostRequest, 'BlogVideoPostRequest', BlogVideoPostRequest, VOID, [MapRequest]);
protoOf(TaggedRequest).pcp = addParam;
initMetadataForClass(TaggedRequest, 'TaggedRequest', TaggedRequest, VOID, [MapRequest]);
protoOf(UserDashboardRequest).pcp = addParam;
initMetadataForClass(UserDashboardRequest, 'UserDashboardRequest', UserDashboardRequest, VOID, [MapRequest]);
protoOf(UserFollowRequest).pcp = addParam;
initMetadataForClass(UserFollowRequest, 'UserFollowRequest', UserFollowRequest, VOID, [MapRequest]);
protoOf(UserFollowingRequest).pcp = addParam;
initMetadataForClass(UserFollowingRequest, 'UserFollowingRequest', UserFollowingRequest, VOID, [MapRequest]);
protoOf(UserLikeRequest).pcp = addParam;
initMetadataForClass(UserLikeRequest, 'UserLikeRequest', UserLikeRequest, VOID, [MapRequest]);
protoOf(UserLikesRequest).pcp = addParam;
initMetadataForClass(UserLikesRequest, 'UserLikesRequest', UserLikesRequest, VOID, [MapRequest]);
protoOf(UserUnfollowRequest).pcp = addParam;
initMetadataForClass(UserUnfollowRequest, 'UserUnfollowRequest', UserUnfollowRequest, VOID, [MapRequest]);
protoOf(UserUnlikeRequest).pcp = addParam;
initMetadataForClass(UserUnlikeRequest, 'UserUnlikeRequest', UserUnlikeRequest, VOID, [MapRequest]);
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForClass($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Body, 'Body', Body, VOID, VOID, VOID, VOID, {0: Companion_getInstance_0});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).j1b = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Meta, 'Meta', Meta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(Response, 'Response');
initMetadataForClass(ResponseUnit, 'ResponseUnit');
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).j1b = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AuthOAuth2TokenResponse, 'AuthOAuth2TokenResponse', AuthOAuth2TokenResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).j1b = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogBannerResponse, 'BlogBannerResponse', BlogBannerResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).j1b = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowersResponse, 'BlogFollowersResponse', BlogFollowersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_4).j1b = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowingResponse, 'BlogFollowingResponse', BlogFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_5).j1b = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInfoResponse, 'BlogInfoResponse', BlogInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_6);
protoOf($serializer_6).j1b = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogLikesResponse, 'BlogLikesResponse', BlogLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_7);
protoOf($serializer_7).j1b = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogPostsResponse, 'BlogPostsResponse', BlogPostsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_8);
protoOf($serializer_8).j1b = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogUpdatedInfoResponse, 'BlogUpdatedInfoResponse', BlogUpdatedInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_9);
protoOf($serializer_9).j1b = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserDashboardResponse, 'UserDashboardResponse', UserDashboardResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_10);
protoOf($serializer_10).j1b = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserFollowingResponse, 'UserFollowingResponse', UserFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_11);
protoOf($serializer_11).j1b = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserLikesResponse, 'UserLikesResponse', UserLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_12);
protoOf($serializer_12).j1b = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserResponse, 'UserResponse', UserResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForClass(PhotoType, 'PhotoType');
initMetadataForClass(PostType, 'PostType');
initMetadataForCompanion(Companion_13);
protoOf($serializer_13).j1b = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Note, 'Note', Note, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_14);
protoOf($serializer_14).j1b = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NoteAvatar, 'NoteAvatar', NoteAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForClass(Resource, 'Resource', Resource.rcw);
initMetadataForCompanion(Companion_15);
protoOf($serializer_15).j1b = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Blog, 'Blog', Blog.wcw, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_16);
protoOf($serializer_16).j1b = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogAvatar, 'BlogAvatar', BlogAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_17);
protoOf($serializer_17).j1b = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogTheme, 'BlogTheme', BlogTheme, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_18);
protoOf($serializer_18).j1b = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Reblog, 'Reblog', Reblog, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_19);
initMetadataForClass(Post, 'Post', VOID, VOID, VOID, VOID, VOID, {0: PostSerializer_getInstance});
initMetadataForCompanion(Companion_20);
protoOf($serializer_19).j1b = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAnswerPost, 'LegacyAnswerPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_21);
protoOf($serializer_20).j1b = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAudioPost, 'LegacyAudioPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_22);
protoOf($serializer_21).j1b = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyChatPost, 'LegacyChatPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_23);
protoOf($serializer_22).j1b = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyLinkPost, 'LegacyLinkPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_24);
protoOf($serializer_23).j1b = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyPhotoPost, 'LegacyPhotoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_25);
protoOf($serializer_24).j1b = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyPostcardPost, 'LegacyPostcardPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_26);
protoOf($serializer_25).j1b = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyQuotePost, 'LegacyQuotePost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_27);
protoOf($serializer_26).j1b = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyTextPost, 'LegacyTextPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_28);
protoOf($serializer_27).j1b = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyVideoPost, 'LegacyVideoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForCompanion(Companion_29);
protoOf($serializer_28).j1b = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Dialogue, 'Dialogue', Dialogue, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_30);
protoOf($serializer_29).j1b = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Photo, 'Photo', Photo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_31);
protoOf($serializer_30).j1b = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PhotoSize, 'PhotoSize', PhotoSize, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_32);
protoOf($serializer_31).j1b = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Video, 'Video', Video, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_33);
protoOf($serializer_32).j1b = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInTrail, 'BlogInTrail', BlogInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_34);
protoOf($serializer_33).j1b = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(IdInTrail, 'IdInTrail', IdInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForCompanion(Companion_35);
protoOf($serializer_34).j1b = typeParametersSerializers;
initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Trail, 'Trail', Trail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
initMetadataForCompanion(Companion_36);
protoOf($serializer_35).j1b = typeParametersSerializers;
initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FollowerUser, 'FollowerUser', FollowerUser, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
initMetadataForCompanion(Companion_37);
protoOf($serializer_36).j1b = typeParametersSerializers;
initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(User, 'User', User.tdi, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl', VOID, VOID, VOID, [3, 2, 1]);
initMetadataForClass(AuthResourceImpl, 'AuthResourceImpl', VOID, VOID, [AuthResource], [1, 3, 2]);
initMetadataForClass(BlogResourceImpl, 'BlogResourceImpl', VOID, VOID, [BlogResource], [1, 3, 2]);
initMetadataForClass(TaggedResourceImpl, 'TaggedResourceImpl', VOID, VOID, [TaggedResource], [1, 3, 2]);
initMetadataForClass(UserResourceImpl, 'UserResourceImpl', VOID, VOID, [UserResource], [0, 1, 3, 2]);
initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
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
  Tumblr as Tumblr,
  TumblrFactory_0 as TumblrFactory,
  AuthResource as AuthResource,
  BlogResource as BlogResource,
  TaggedResource as TaggedResource,
  UserResource as UserResource,
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
  TumblrFactory_instance as TumblrFactory_instance32zsqgjohpeqi,
  oAuth2TokenRefresh$virtualSuspendBridge as oAuth2TokenRefresh$virtualSuspendBridge1v8b24xw02w3f,
  oAuth2Token$virtualSuspendBridge as oAuth2Token$virtualSuspendBridge1i3750ncqogw,
  blogFollowers$virtualSuspendBridge as blogFollowers$virtualSuspendBridge3eg5m5i0nez41,
  blogInfo$virtualSuspendBridge as blogInfo$virtualSuspendBridge222l5iucf5vj6,
  blogLikes$virtualSuspendBridge as blogLikes$virtualSuspendBridge2352gj2icrobc,
  blogPosts$virtualSuspendBridge as blogPosts$virtualSuspendBridge2r9zfvsxqfxu7,
  postCreate$virtualSuspendBridge as postCreate$virtualSuspendBridgee1j7pwmao9n8,
  postDelete$virtualSuspendBridge as postDelete$virtualSuspendBridge3qxgi94cmjxxa,
  postReblog$virtualSuspendBridge as postReblog$virtualSuspendBridge297ch8qs09omh,
  tagged$virtualSuspendBridge as tagged$virtualSuspendBridge2xhwzz0ie6z11,
  follow$virtualSuspendBridge as follow$virtualSuspendBridge3jh7zs2g9qhys,
  like$virtualSuspendBridge as like$virtualSuspendBridgex2glp1cxvgjd,
  unfollow$virtualSuspendBridge as unfollow$virtualSuspendBridge1rb0tcphehou2,
  unlike$virtualSuspendBridge as unlike$virtualSuspendBridgehjqwg6gigdyh,
  userDashboard$virtualSuspendBridge as userDashboard$virtualSuspendBridgezohy99lsej5i,
  userFollowing$virtualSuspendBridge as userFollowing$virtualSuspendBridge3hagiav4k2lyh,
  user$virtualSuspendBridge as user$virtualSuspendBridge2kii4ej2hob68,
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
