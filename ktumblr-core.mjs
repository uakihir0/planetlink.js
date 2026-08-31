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
    this.fcw_1 = clientId;
    this.gcw_1 = clientSecret;
    this.hcw_1 = accessToken;
    this.icw_1 = refreshToken;
  }
  jcw() {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.hcw_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        break $l$block;
      }
    }
    return 'Bearer ' + this.hcw_1;
  }
}
class TumblrException extends RuntimeException {
  static pcw(e) {
    var $this = this.xe(e);
    init_work_socialhub_ktumblr_TumblrException($this);
    return $this;
  }
  static qcw(status, body) {
    var $this = this.kb('status code: ' + status + ', body: ' + body);
    init_work_socialhub_ktumblr_TumblrException($this);
    $this.mcw_1 = status;
    $this.ncw_1 = body;
    return $this;
  }
}
class TumblrFactory {
  rcw(clientId, clientSecret, accessToken, refreshToken) {
    return new TumblrImpl(new TumblrAuth(clientId, clientSecret, accessToken, refreshToken));
  }
  instance(clientId, clientSecret, accessToken, refreshToken, $super) {
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    return $super === VOID ? this.rcw(clientId, clientSecret, accessToken, refreshToken) : $super.rcw.call(this, clientId, clientSecret, accessToken, refreshToken);
  }
}
class TumblrImpl {
  constructor(tumblrAuth) {
    this.scw_1 = tumblrAuth;
    this.tcw_1 = new AuthResourceImpl(this.scw_1);
    this.ucw_1 = new UserResourceImpl(this.scw_1);
    this.vcw_1 = new BlogResourceImpl(this.scw_1);
    this.wcw_1 = new TaggedResourceImpl(this.scw_1);
  }
  auth() {
    return this.tcw_1;
  }
  user() {
    return this.ucw_1;
  }
  blog() {
    return this.vcw_1;
  }
  tagged() {
    return this.wcw_1;
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
  f3j() {
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
  ed0(_set____db54di) {
    this.responseType = _set____db54di;
  }
  fd0() {
    return this.responseType;
  }
  kbq(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  lbq() {
    return this.redirectUri;
  }
  cab(_set____db54di) {
    this.state = _set____db54di;
  }
  f7y() {
    return this.state;
  }
  gd0(_set____db54di) {
    this.scope = _set____db54di;
  }
  fbs() {
    return this.scope;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'response_type', this.responseType);
    this.dd0(this_0, 'redirect_uri', this.redirectUri);
    this.dd0(this_0, 'state', this.state);
    this.dd0(this_0, 'scope', this.scope);
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
  id0(_set____db54di) {
    this.grantType = _set____db54di;
  }
  jd0() {
    return this.grantType;
  }
  ybb(_set____db54di) {
    this.clientId = _set____db54di;
  }
  zbb() {
    return this.clientId;
  }
  abc(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  bbc() {
    return this.clientSecret;
  }
  pbq(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  qbq() {
    return this.refreshToken;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'grant_type', this.grantType);
    this.dd0(this_0, 'client_id', this.clientId);
    this.dd0(this_0, 'client_secret', this.clientSecret);
    this.dd0(this_0, 'refresh_token', this.refreshToken);
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
  id0(_set____db54di) {
    this.grantType = _set____db54di;
  }
  jd0() {
    return this.grantType;
  }
  mbq(_set____db54di) {
    this.code = _set____db54di;
  }
  r32() {
    return this.code;
  }
  ybb(_set____db54di) {
    this.clientId = _set____db54di;
  }
  zbb() {
    return this.clientId;
  }
  abc(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  bbc() {
    return this.clientSecret;
  }
  kbq(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  lbq() {
    return this.redirectUri;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'grant_type', this.grantType);
    this.dd0(this_0, 'code', this.code);
    this.dd0(this_0, 'client_id', this.clientId);
    this.dd0(this_0, 'client_secret', this.clientSecret);
    this.dd0(this_0, 'redirect_uri', this.redirectUri);
    return this_0;
  }
}
class BlogAvatarRequest {
  constructor() {
    this.blogName = null;
    this.size = 0;
  }
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  p8e(_set____db54di) {
    this.size = _set____db54di;
  }
  l2() {
    return this.size;
  }
}
class BlogBannerRequest {
  constructor() {
    this.blogName = null;
    this.size = null;
  }
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  rcc(_set____db54di) {
    this.size = _set____db54di;
  }
  l2() {
    return this.size;
  }
}
class BlogDraftsRequest {
  constructor() {
    this.blogName = null;
    this.beforeId = null;
    this.filter = null;
  }
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  md0(_set____db54di) {
    this.beforeId = _set____db54di;
  }
  nd0() {
    return this.beforeId;
  }
  od0(_set____db54di) {
    this.filter = _set____db54di;
  }
  a67() {
    return this.filter;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'before_id', this.beforeId);
    this.dd0(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogFollowersRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  s63(_set____db54di) {
    this.limit = _set____db54di;
  }
  h3a() {
    return this.limit;
  }
  j3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  k3h() {
    return this.offset;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'limit', this.limit);
    this.dd0(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogFollowingRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  s63(_set____db54di) {
    this.limit = _set____db54di;
  }
  h3a() {
    return this.limit;
  }
  j3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  k3h() {
    return this.offset;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'limit', this.limit);
    this.dd0(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogInfoRequest {
  constructor() {
    this.blogName = null;
  }
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
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
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  s63(_set____db54di) {
    this.limit = _set____db54di;
  }
  h3a() {
    return this.limit;
  }
  j3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  k3h() {
    return this.offset;
  }
  pd0(_set____db54di) {
    this.before = _set____db54di;
  }
  qd0() {
    return this.before;
  }
  rd0(_set____db54di) {
    this.after = _set____db54di;
  }
  sd0() {
    return this.after;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'limit', this.limit);
    this.dd0(this_0, 'offset', this.offset);
    this.dd0(this_0, 'before', this.before);
    this.dd0(this_0, 'after', this.after);
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
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  x38(_set____db54di) {
    this.type = _set____db54di;
  }
  k38() {
    return this.type;
  }
  k3k(_set____db54di) {
    this.id = _set____db54di;
  }
  j3f() {
    return this.id;
  }
  v36(_set____db54di) {
    this.tag = _set____db54di;
  }
  w36() {
    return this.tag;
  }
  s63(_set____db54di) {
    this.limit = _set____db54di;
  }
  h3a() {
    return this.limit;
  }
  j3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  k3h() {
    return this.offset;
  }
  td0(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  ud0() {
    return this.reblogInfo;
  }
  vd0(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  wd0() {
    return this.notesInfo;
  }
  od0(_set____db54di) {
    this.filter = _set____db54di;
  }
  a67() {
    return this.filter;
  }
  pd0(_set____db54di) {
    this.before = _set____db54di;
  }
  qd0() {
    return this.before;
  }
  xd0(_set____db54di) {
    this.npf = _set____db54di;
  }
  yd0() {
    return this.npf;
  }
  gbq(_set____db54di) {
    this.types = _set____db54di;
  }
  hbq() {
    return this.types;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'id', this.id);
    this.dd0(this_0, 'tag', this.tag);
    this.dd0(this_0, 'limit', this.limit);
    this.dd0(this_0, 'offset', this.offset);
    this.dd0(this_0, 'reblog_info', this.reblogInfo);
    this.dd0(this_0, 'notes_info', this.notesInfo);
    this.dd0(this_0, 'filter', this.filter);
    this.dd0(this_0, 'before', this.before);
    this.dd0(this_0, 'npf', this.npf);
    var tmp0_safe_receiver = this.types;
    this.dd0(this_0, 'types', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
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
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  s63(_set____db54di) {
    this.limit = _set____db54di;
  }
  h3a() {
    return this.limit;
  }
  j3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  k3h() {
    return this.offset;
  }
  od0(_set____db54di) {
    this.filter = _set____db54di;
  }
  a67() {
    return this.filter;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'limit', this.limit);
    this.dd0(this_0, 'offset', this.offset);
    this.dd0(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogSubmissionsRequest {
  constructor() {
    this.blogName = null;
    this.offset = null;
    this.filter = null;
  }
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  zd0(_set____db54di) {
    this.offset = _set____db54di;
  }
  k3h() {
    return this.offset;
  }
  od0(_set____db54di) {
    this.filter = _set____db54di;
  }
  a67() {
    return this.filter;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'offset', this.offset);
    this.dd0(this_0, 'filter', this.filter);
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
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  y36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  daj(_set____db54di) {
    this.title = _set____db54di;
  }
  a3j() {
    return this.title;
  }
  c37(_set____db54di) {
    this.description = _set____db54di;
  }
  m36() {
    return this.description;
  }
  ad1(_set____db54di) {
    this.ask = _set____db54di;
  }
  bd1() {
    return this.ask;
  }
  cd1(_set____db54di) {
    this.submit = _set____db54di;
  }
  dd1() {
    return this.submit;
  }
  ed1(_set____db54di) {
    this.isDescriptionIndexable = _set____db54di;
  }
  fd1() {
    return this.isDescriptionIndexable;
  }
  gd1(_set____db54di) {
    this.isIndexFollowed = _set____db54di;
  }
  hd1() {
    return this.isIndexFollowed;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'name', this.name);
    this.dd0(this_0, 'title', this.title);
    this.dd0(this_0, 'description', this.description);
    this.dd0(this_0, 'ask', this.ask);
    this.dd0(this_0, 'submit', this.submit);
    this.dd0(this_0, 'is_description_indexable', this.isDescriptionIndexable);
    this.dd0(this_0, 'is_index_followed', this.isIndexFollowed);
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
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  j8c(_set____db54di) {
    this.id = _set____db54di;
  }
  j3f() {
    return this.id;
  }
  x38(_set____db54di) {
    this.type = _set____db54di;
  }
  k38() {
    return this.type;
  }
  cab(_set____db54di) {
    this.state = _set____db54di;
  }
  f7y() {
    return this.state;
  }
  od1(_set____db54di) {
    this.tags = _set____db54di;
  }
  haj() {
    return this.tags;
  }
  pd1(_set____db54di) {
    this.tweet = _set____db54di;
  }
  qd1() {
    return this.tweet;
  }
  rd1(_set____db54di) {
    this.date = _set____db54di;
  }
  sd1() {
    return this.date;
  }
  td1(_set____db54di) {
    this.format = _set____db54di;
  }
  ud1() {
    return this.format;
  }
  vd1(_set____db54di) {
    this.slug = _set____db54di;
  }
  wd1() {
    return this.slug;
  }
  xd1(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  yd1() {
    return this.nativeInlineImages;
  }
  nd1() {
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
  id1(_set____db54di) {
    this.caption = _set____db54di;
  }
  jd1() {
    return this.caption;
  }
  kd1(_set____db54di) {
    this.externalUrl = _set____db54di;
  }
  ld1() {
    return this.externalUrl;
  }
  md1(_set____db54di) {
    this.data = _set____db54di;
  }
  f3j() {
    return this.data;
  }
  hd0() {
    // Inline function 'kotlin.also' call
    var this_0 = this.nd1();
    this.dd0(this_0, 'caption', this.caption);
    this.dd0(this_0, 'external_url', this.externalUrl);
    this.dd0(this_0, 'data', this.data);
    return this_0;
  }
}
class BlogChatPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.conversation = null;
  }
  daj(_set____db54di) {
    this.title = _set____db54di;
  }
  a3j() {
    return this.title;
  }
  zd1(_set____db54di) {
    this.conversation = _set____db54di;
  }
  ad2() {
    return this.conversation;
  }
  hd0() {
    // Inline function 'kotlin.also' call
    var this_0 = this.nd1();
    this.dd0(this_0, 'title', this.title);
    this.dd0(this_0, 'conversation', this.conversation);
    return this_0;
  }
}
class BlogDeleteRequest {
  constructor() {
    this.blogName = null;
    this.id = null;
  }
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  j8c(_set____db54di) {
    this.id = _set____db54di;
  }
  j3f() {
    return this.id;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'id', this.id);
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
  daj(_set____db54di) {
    this.title = _set____db54di;
  }
  a3j() {
    return this.title;
  }
  a9l(_set____db54di) {
    this.url = _set____db54di;
  }
  m4n() {
    return this.url;
  }
  c37(_set____db54di) {
    this.description = _set____db54di;
  }
  m36() {
    return this.description;
  }
  i7l(_set____db54di) {
    this.thumbnail = _set____db54di;
  }
  d3j() {
    return this.thumbnail;
  }
  bd2(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  cd2() {
    return this.excerpt;
  }
  dd2(_set____db54di) {
    this.author = _set____db54di;
  }
  n7j() {
    return this.author;
  }
  hd0() {
    // Inline function 'kotlin.also' call
    var this_0 = this.nd1();
    this.dd0(this_0, 'title', this.title);
    this.dd0(this_0, 'url', this.url);
    this.dd0(this_0, 'description', this.description);
    this.dd0(this_0, 'thumbnail', this.thumbnail);
    this.dd0(this_0, 'excerpt', this.excerpt);
    this.dd0(this_0, 'author', this.author);
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
  id1(_set____db54di) {
    this.caption = _set____db54di;
  }
  jd1() {
    return this.caption;
  }
  u8e(_set____db54di) {
    this.link = _set____db54di;
  }
  c32() {
    return this.link;
  }
  ed2(_set____db54di) {
    this.source = _set____db54di;
  }
  g20() {
    return this.source;
  }
  fd2(_set____db54di) {
    this.data = _set____db54di;
  }
  f3j() {
    return this.data;
  }
  gd2(_set____db54di) {
    this.data64 = _set____db54di;
  }
  hd2() {
    return this.data64;
  }
  hd0() {
    // Inline function 'kotlin.also' call
    var this_0 = this.nd1();
    this.dd0(this_0, 'caption', this.caption);
    this.dd0(this_0, 'link', this.link);
    this.dd0(this_0, 'source', this.source);
    this.dd0(this_0, 'data64', this.data64);
    return this_0;
  }
  id2() {
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
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  j8c(_set____db54di) {
    this.id = _set____db54di;
  }
  j3f() {
    return this.id;
  }
  mao(_set____db54di) {
    this.tags = _set____db54di;
  }
  haj() {
    return this.tags;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'id', this.id);
    var tmp0_safe_receiver = this.tags;
    this.dd0(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
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
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  j8c(_set____db54di) {
    this.id = _set____db54di;
  }
  j3f() {
    return this.id;
  }
  x38(_set____db54di) {
    this.type = _set____db54di;
  }
  k38() {
    return this.type;
  }
  daj(_set____db54di) {
    this.title = _set____db54di;
  }
  a3j() {
    return this.title;
  }
  uap(_set____db54di) {
    this.body = _set____db54di;
  }
  vap() {
    return this.body;
  }
  vd1(_set____db54di) {
    this.slug = _set____db54di;
  }
  wd1() {
    return this.slug;
  }
  jd2(_set____db54di) {
    this.startDate = _set____db54di;
  }
  kd2() {
    return this.startDate;
  }
  ld2(_set____db54di) {
    this.tzAddress = _set____db54di;
  }
  md2() {
    return this.tzAddress;
  }
  nd2(_set____db54di) {
    this.replyKey = _set____db54di;
  }
  od2() {
    return this.replyKey;
  }
  mao(_set____db54di) {
    this.tags = _set____db54di;
  }
  haj() {
    return this.tags;
  }
  fd2(_set____db54di) {
    this.data = _set____db54di;
  }
  f3j() {
    return this.data;
  }
  id1(_set____db54di) {
    this.caption = _set____db54di;
  }
  jd1() {
    return this.caption;
  }
  u8e(_set____db54di) {
    this.link = _set____db54di;
  }
  c32() {
    return this.link;
  }
  pd2(_set____db54di) {
    this.quoteText = _set____db54di;
  }
  qd2() {
    return this.quoteText;
  }
  rd2(_set____db54di) {
    this.quoteSource = _set____db54di;
  }
  sd2() {
    return this.quoteSource;
  }
  td2(_set____db54di) {
    this.linkUrl = _set____db54di;
  }
  ud2() {
    return this.linkUrl;
  }
  vd2(_set____db54di) {
    this.linkTitle = _set____db54di;
  }
  wd2() {
    return this.linkTitle;
  }
  xd2(_set____db54di) {
    this.linkDescription = _set____db54di;
  }
  yd2() {
    return this.linkDescription;
  }
  zd2(_set____db54di) {
    this.chatTitle = _set____db54di;
  }
  ad3() {
    return this.chatTitle;
  }
  bd3(_set____db54di) {
    this.chatLabel = _set____db54di;
  }
  cd3() {
    return this.chatLabel;
  }
  dd3(_set____db54di) {
    this.chatDialogue = _set____db54di;
  }
  ed3() {
    return this.chatDialogue;
  }
  kd1(_set____db54di) {
    this.externalUrl = _set____db54di;
  }
  ld1() {
    return this.externalUrl;
  }
  fd3(_set____db54di) {
    this.embed = _set____db54di;
  }
  p6c() {
    return this.embed;
  }
  gd3(_set____db54di) {
    this.answer = _set____db54di;
  }
  hd3() {
    return this.answer;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'id', this.id);
    this.dd0(this_0, 'type', this.type);
    this.dd0(this_0, 'title', this.title);
    this.dd0(this_0, 'body', this.body);
    this.dd0(this_0, 'slug', this.slug);
    this.dd0(this_0, 'start_date', this.startDate);
    this.dd0(this_0, 'tz_address', this.tzAddress);
    this.dd0(this_0, 'reply_key', this.replyKey);
    var tmp0_safe_receiver = this.tags;
    this.dd0(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
    this.dd0(this_0, 'caption', this.caption);
    this.dd0(this_0, 'link', this.link);
    this.dd0(this_0, 'quote_text', this.quoteText);
    this.dd0(this_0, 'quote_source', this.quoteSource);
    this.dd0(this_0, 'link_url', this.linkUrl);
    this.dd0(this_0, 'link_title', this.linkTitle);
    this.dd0(this_0, 'link_description', this.linkDescription);
    this.dd0(this_0, 'chat_title', this.chatTitle);
    this.dd0(this_0, 'chat_label', this.chatLabel);
    this.dd0(this_0, 'chat_dialogue', this.chatDialogue);
    this.dd0(this_0, 'external_url', this.externalUrl);
    this.dd0(this_0, 'embed', this.embed);
    this.dd0(this_0, 'answer', this.answer);
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
  id3(_set____db54di) {
    this.quote = _set____db54di;
  }
  jd3() {
    return this.quote;
  }
  ed2(_set____db54di) {
    this.source = _set____db54di;
  }
  g20() {
    return this.source;
  }
  hd0() {
    // Inline function 'kotlin.also' call
    var this_0 = this.nd1();
    this.dd0(this_0, 'quote', this.quote);
    this.dd0(this_0, 'source', this.source);
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
  kd0(_set____db54di) {
    this.blogName = _set____db54di;
  }
  ld0() {
    return this.blogName;
  }
  j8c(_set____db54di) {
    this.id = _set____db54di;
  }
  j3f() {
    return this.id;
  }
  kd3(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  ld3() {
    return this.reblogKey;
  }
  y9l(_set____db54di) {
    this.comment = _set____db54di;
  }
  h3f() {
    return this.comment;
  }
  xd1(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  yd1() {
    return this.nativeInlineImages;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'id', this.id);
    this.dd0(this_0, 'reblog_key', this.reblogKey);
    this.dd0(this_0, 'comment', this.comment);
    this.dd0(this_0, 'native_inline_images', this.nativeInlineImages);
    return this_0;
  }
}
class BlogTextPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.body = null;
  }
  daj(_set____db54di) {
    this.title = _set____db54di;
  }
  a3j() {
    return this.title;
  }
  uap(_set____db54di) {
    this.body = _set____db54di;
  }
  vap() {
    return this.body;
  }
  hd0() {
    // Inline function 'kotlin.also' call
    var this_0 = this.nd1();
    this.dd0(this_0, 'title', this.title);
    this.dd0(this_0, 'body', this.body);
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
  id1(_set____db54di) {
    this.caption = _set____db54di;
  }
  jd1() {
    return this.caption;
  }
  fd3(_set____db54di) {
    this.embed = _set____db54di;
  }
  p6c() {
    return this.embed;
  }
  md1(_set____db54di) {
    this.data = _set____db54di;
  }
  f3j() {
    return this.data;
  }
  hd0() {
    // Inline function 'kotlin.also' call
    var this_0 = this.nd1();
    this.dd0(this_0, 'caption', this.caption);
    this.dd0(this_0, 'embed', this.embed);
    this.dd0(this_0, 'data', this.data);
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
  v36(_set____db54di) {
    this.tag = _set____db54di;
  }
  w36() {
    return this.tag;
  }
  pd0(_set____db54di) {
    this.before = _set____db54di;
  }
  qd0() {
    return this.before;
  }
  s63(_set____db54di) {
    this.limit = _set____db54di;
  }
  h3a() {
    return this.limit;
  }
  od0(_set____db54di) {
    this.filter = _set____db54di;
  }
  a67() {
    return this.filter;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'tag', this.tag);
    this.dd0(this_0, 'before', this.before);
    this.dd0(this_0, 'limit', this.limit);
    this.dd0(this_0, 'filter', this.filter);
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
  s63(_set____db54di) {
    this.limit = _set____db54di;
  }
  h3a() {
    return this.limit;
  }
  j3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  k3h() {
    return this.offset;
  }
  x38(_set____db54di) {
    this.type = _set____db54di;
  }
  k38() {
    return this.type;
  }
  md3(_set____db54di) {
    this.sinceId = _set____db54di;
  }
  o3g() {
    return this.sinceId;
  }
  td0(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  ud0() {
    return this.reblogInfo;
  }
  vd0(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  wd0() {
    return this.notesInfo;
  }
  xd0(_set____db54di) {
    this.npf = _set____db54di;
  }
  yd0() {
    return this.npf;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'limit', this.limit);
    this.dd0(this_0, 'offset', this.offset);
    this.dd0(this_0, 'type', this.type);
    this.dd0(this_0, 'since_id', this.sinceId);
    this.dd0(this_0, 'reblog_info', this.reblogInfo);
    this.dd0(this_0, 'notes_info', this.notesInfo);
    this.dd0(this_0, 'npf', this.npf);
    return this_0;
  }
}
class UserFollowRequest {
  constructor() {
    this.url = null;
    this.email = null;
  }
  a9l(_set____db54di) {
    this.url = _set____db54di;
  }
  m4n() {
    return this.url;
  }
  f73(_set____db54di) {
    this.email = _set____db54di;
  }
  d32() {
    return this.email;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'url', this.url);
    this.dd0(this_0, 'email', this.email);
    return this_0;
  }
}
class UserFollowingRequest {
  constructor() {
    this.limit = null;
    this.offset = null;
  }
  s63(_set____db54di) {
    this.limit = _set____db54di;
  }
  h3a() {
    return this.limit;
  }
  j3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  k3h() {
    return this.offset;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'limit', this.limit);
    this.dd0(this_0, 'offset', this.offset);
    return this_0;
  }
}
class UserLikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  j8c(_set____db54di) {
    this.id = _set____db54di;
  }
  j3f() {
    return this.id;
  }
  kd3(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  ld3() {
    return this.reblogKey;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'id', this.id);
    this.dd0(this_0, 'reblog_key', this.reblogKey);
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
  s63(_set____db54di) {
    this.limit = _set____db54di;
  }
  h3a() {
    return this.limit;
  }
  j3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  k3h() {
    return this.offset;
  }
  pd0(_set____db54di) {
    this.before = _set____db54di;
  }
  qd0() {
    return this.before;
  }
  rd0(_set____db54di) {
    this.after = _set____db54di;
  }
  sd0() {
    return this.after;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'limit', this.limit);
    this.dd0(this_0, 'offset', this.offset);
    this.dd0(this_0, 'before', this.before);
    this.dd0(this_0, 'after', this.after);
    return this_0;
  }
}
class UserUnfollowRequest {
  constructor() {
    this.url = null;
  }
  a9l(_set____db54di) {
    this.url = _set____db54di;
  }
  m4n() {
    return this.url;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'url', this.url);
    return this_0;
  }
}
class UserUnlikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  j8c(_set____db54di) {
    this.id = _set____db54di;
  }
  j3f() {
    return this.id;
  }
  kd3(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  ld3() {
    return this.reblogKey;
  }
  hd0() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.dd0(this_0, 'id', this.id);
    this.dd0(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', null, 2);
    tmp0_serialDesc.o1b('meta', true);
    tmp0_serialDesc.o1b('response', true);
    this.nd3_1 = tmp0_serialDesc;
  }
  sb8(typeSerial0) {
    return $serializer.qd3(typeSerial0);
  }
  q1c(typeParamsSerializers) {
    return this.sb8(typeParamsSerializers[0]);
  }
}
class $serializer {
  constructor() {
    return new.target.rd3();
  }
  static rd3() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', $this, 2);
    tmp0_serialDesc.o1b('meta', true);
    tmp0_serialDesc.o1b('response', true);
    $this.od3_1 = tmp0_serialDesc;
    return $this;
  }
  sd3(encoder, value) {
    var tmp0_desc = this.od3_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.meta == null)) {
      tmp1_output.o15(tmp0_desc, 0, $serializer_getInstance(), value.meta);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.response == null)) {
      tmp1_output.o15(tmp0_desc, 1, this.pd3_1, value.response);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.sd3(encoder, value instanceof Body ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.od3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, this.pd3_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, this.pd3_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return Body.td3(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.od3_1;
  }
  e1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance()), get_nullable(this.pd3_1)];
  }
  f1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.pd3_1];
  }
  static qd3(typeSerial0) {
    var $this = this.rd3();
    $this.pd3_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor() {
    Companion_getInstance_0();
    this.meta = null;
    this.response = null;
  }
  ud3(_set____db54di) {
    this.meta = _set____db54di;
  }
  fbv() {
    return this.meta;
  }
  vd3(_set____db54di) {
    this.response = _set____db54di;
  }
  j4l() {
    return this.response;
  }
  static td3(seen0, meta, response, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, Companion_getInstance_0().nd3_1);
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
    tmp0_serialDesc.o1b('status', true);
    tmp0_serialDesc.o1b('msg', true);
    this.wd3_1 = tmp0_serialDesc;
  }
  xd3(encoder, value) {
    var tmp0_desc = this.wd3_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.status == null)) {
      tmp1_output.o15(tmp0_desc, 0, IntSerializer_getInstance(), value.status);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.msg == null)) {
      tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.msg);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.xd3(encoder, value instanceof Meta ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.wd3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return Meta.yd3(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.wd3_1;
  }
  e1c() {
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
  zd3(_set____db54di) {
    this.status = _set____db54di;
  }
  t4n() {
    return this.status;
  }
  ad4(_set____db54di) {
    this.msg = _set____db54di;
  }
  bd4() {
    return this.msg;
  }
  static yd3(seen0, status, msg, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().wd3_1);
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
  law(_set____db54di) {
    this.data = _set____db54di;
  }
  f3j() {
    return this.data;
  }
  maw(_set____db54di) {
    this.json = _set____db54di;
  }
  x1o() {
    return this.json;
  }
  t4n() {
    return this.status;
  }
  r() {
    return this.message;
  }
  nm() {
    return this.data;
  }
  om() {
    return this.json;
  }
  qw() {
    return this.status;
  }
  v63() {
    return this.message;
  }
  cd4(data, json, status, message) {
    return new Response(data, json, status, message);
  }
  copy(data, json, status, message, $super) {
    data = data === VOID ? this.data : data;
    json = json === VOID ? this.json : json;
    status = status === VOID ? this.status : status;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.cd4(data, json, status, message) : $super.cd4.call(this, data, json, status, message);
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
  maw(_set____db54di) {
    this.json = _set____db54di;
  }
  x1o() {
    return this.json;
  }
  t4n() {
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
    tmp0_serialDesc.o1b('access_token', true);
    tmp0_serialDesc.o1b('expires_in', true);
    tmp0_serialDesc.o1b('token_type', true);
    tmp0_serialDesc.o1b('scope', true);
    tmp0_serialDesc.o1b('refresh_token', true);
    this.dd4_1 = tmp0_serialDesc;
  }
  ed4(encoder, value) {
    var tmp0_desc = this.dd4_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.accessToken == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.accessToken);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.expiresIn == null)) {
      tmp1_output.o15(tmp0_desc, 1, IntSerializer_getInstance(), value.expiresIn);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.tokenType == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.tokenType);
    }
    if (tmp1_output.s15(tmp0_desc, 3) ? true : !(value.scope == null)) {
      tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.scope);
    }
    if (tmp1_output.s15(tmp0_desc, 4) ? true : !(value.refreshToken == null)) {
      tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.refreshToken);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.ed4(encoder, value instanceof AuthOAuth2TokenResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.dd4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.w13(tmp0_desc);
    if (tmp9_input.l14()) {
      tmp4_local0 = tmp9_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp9_input.x13(tmp0_desc);
    return AuthOAuth2TokenResponse.fd4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  ez() {
    return this.dd4_1;
  }
  e1c() {
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
  ia8(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  ja8() {
    return this.accessToken;
  }
  hbs(_set____db54di) {
    this.expiresIn = _set____db54di;
  }
  j3j() {
    return this.expiresIn;
  }
  cbs(_set____db54di) {
    this.tokenType = _set____db54di;
  }
  dbs() {
    return this.tokenType;
  }
  ebs(_set____db54di) {
    this.scope = _set____db54di;
  }
  fbs() {
    return this.scope;
  }
  pbq(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  qbq() {
    return this.refreshToken;
  }
  static fd4(seen0, accessToken, expiresIn, tokenType, scope, refreshToken, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().dd4_1);
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
    tmp0_serialDesc.o1b('banner', true);
    tmp0_serialDesc.o1b('height', true);
    tmp0_serialDesc.o1b('width', true);
    this.gd4_1 = tmp0_serialDesc;
  }
  hd4(encoder, value) {
    var tmp0_desc = this.gd4_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.banner == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.banner);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.o15(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.width == null)) {
      tmp1_output.o15(tmp0_desc, 2, IntSerializer_getInstance(), value.width);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.hd4(encoder, value instanceof BlogBannerResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.gd4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.w13(tmp0_desc);
    if (tmp7_input.l14()) {
      tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp7_input.x13(tmp0_desc);
    return BlogBannerResponse.id4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  ez() {
    return this.gd4_1;
  }
  e1c() {
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
  h62(_set____db54di) {
    this.banner = _set____db54di;
  }
  t3j() {
    return this.banner;
  }
  r38(_set____db54di) {
    this.height = _set____db54di;
  }
  s38() {
    return this.height;
  }
  p38(_set____db54di) {
    this.width = _set____db54di;
  }
  q38() {
    return this.width;
  }
  static id4(seen0, banner, height, width, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().gd4_1);
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
    tmp.jd4_1 = [null, lazy(tmp_0, BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a)];
  }
}
class $serializer_3 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowersResponse', this, 2);
    tmp0_serialDesc.o1b('total_users', true);
    tmp0_serialDesc.o1b('users', true);
    this.kd4_1 = tmp0_serialDesc;
  }
  ld4(encoder, value) {
    var tmp0_desc = this.kd4_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().jd4_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.totalUsers == null)) {
      tmp1_output.o15(tmp0_desc, 0, IntSerializer_getInstance(), value.totalUsers);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.users == null)) {
      tmp1_output.o15(tmp0_desc, 1, tmp2_cached[1].d3(), value.users);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.ld4(encoder, value instanceof BlogFollowersResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.kd4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().jd4_1;
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return BlogFollowersResponse.md4(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.kd4_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_4().jd4_1;
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
  nd4(_set____db54di) {
    this.totalUsers = _set____db54di;
  }
  od4() {
    return this.totalUsers;
  }
  pd4(_set____db54di) {
    this.users = _set____db54di;
  }
  a39() {
    return this.users;
  }
  static md4(seen0, totalUsers, users, serializationConstructorMarker) {
    Companion_getInstance_4();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().kd4_1);
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
    tmp.qd4_1 = [lazy(tmp_0, BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi), null];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowingResponse', this, 2);
    tmp0_serialDesc.o1b('blogs', true);
    tmp0_serialDesc.o1b('total_blogs', true);
    this.rd4_1 = tmp0_serialDesc;
  }
  sd4(encoder, value) {
    var tmp0_desc = this.rd4_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().qd4_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.blogs == null)) {
      tmp1_output.o15(tmp0_desc, 0, tmp2_cached[0].d3(), value.blogs);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.totalBlogs == null)) {
      tmp1_output.o15(tmp0_desc, 1, IntSerializer_getInstance(), value.totalBlogs);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.sd4(encoder, value instanceof BlogFollowingResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.rd4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().qd4_1;
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return BlogFollowingResponse.td4(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.rd4_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_5().qd4_1;
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
  ud4(_set____db54di) {
    this.blogs = _set____db54di;
  }
  vd4() {
    return this.blogs;
  }
  wd4(_set____db54di) {
    this.totalBlogs = _set____db54di;
  }
  xd4() {
    return this.totalBlogs;
  }
  static td4(seen0, blogs, totalBlogs, serializationConstructorMarker) {
    Companion_getInstance_5();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().rd4_1);
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
    tmp0_serialDesc.o1b('blog', true);
    this.yd4_1 = tmp0_serialDesc;
  }
  zd4(encoder, value) {
    var tmp0_desc = this.yd4_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.o15(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.zd4(encoder, value instanceof BlogInfoResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.yd4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.w13(tmp0_desc);
    if (tmp5_input.l14()) {
      tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp5_input.x13(tmp0_desc);
    return BlogInfoResponse.ad5(tmp3_bitMask0, tmp4_local0, null);
  }
  ez() {
    return this.yd4_1;
  }
  e1c() {
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
  bd5(_set____db54di) {
    this.blog = _set____db54di;
  }
  cd5() {
    return this.blog;
  }
  static ad5(seen0, blog, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().yd4_1);
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
    tmp.dd5_1 = [lazy(tmp_0, BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9), null];
  }
}
class $serializer_6 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogLikesResponse', this, 2);
    tmp0_serialDesc.o1b('liked_posts', true);
    tmp0_serialDesc.o1b('liked_count', true);
    this.ed5_1 = tmp0_serialDesc;
  }
  fd5(encoder, value) {
    var tmp0_desc = this.ed5_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().dd5_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.o15(tmp0_desc, 0, tmp2_cached[0].d3(), value.likedPosts);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.o15(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.fd5(encoder, value instanceof BlogLikesResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.ed5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().dd5_1;
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return BlogLikesResponse.gd5(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.ed5_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_7().dd5_1;
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
  hd5(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  id5() {
    return this.likedPosts;
  }
  jaj(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  kaj() {
    return this.likedCount;
  }
  static gd5(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_7();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().ed5_1);
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
    tmp.jd5_1 = [null, lazy(tmp_0, BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0), null];
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogPostsResponse', this, 3);
    tmp0_serialDesc.o1b('blog', true);
    tmp0_serialDesc.o1b('posts', true);
    tmp0_serialDesc.o1b('total_posts', true);
    this.kd5_1 = tmp0_serialDesc;
  }
  ld5(encoder, value) {
    var tmp0_desc = this.kd5_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().jd5_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.o15(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.posts == null)) {
      tmp1_output.o15(tmp0_desc, 1, tmp2_cached[1].d3(), value.posts);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.totalPosts == null)) {
      tmp1_output.o15(tmp0_desc, 2, IntSerializer_getInstance(), value.totalPosts);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.ld5(encoder, value instanceof BlogPostsResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.kd5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.w13(tmp0_desc);
    var tmp8_cached = Companion_getInstance_8().jd5_1;
    if (tmp7_input.l14()) {
      tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, tmp8_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, tmp8_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp7_input.x13(tmp0_desc);
    return BlogPostsResponse.nd5(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  ez() {
    return this.kd5_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_8().jd5_1;
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
  bd5(_set____db54di) {
    this.blog = _set____db54di;
  }
  cd5() {
    return this.blog;
  }
  od5(_set____db54di) {
    this.posts = _set____db54di;
  }
  e6a() {
    return this.posts;
  }
  pd5(_set____db54di) {
    this.totalPosts = _set____db54di;
  }
  qd5() {
    return this.totalPosts;
  }
  static nd5(seen0, blog, posts, totalPosts, serializationConstructorMarker) {
    Companion_getInstance_8();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().kd5_1);
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
    tmp0_serialDesc.o1b('blog', true);
    this.rd5_1 = tmp0_serialDesc;
  }
  sd5(encoder, value) {
    var tmp0_desc = this.rd5_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.o15(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.sd5(encoder, value instanceof BlogUpdatedInfoResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.rd5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.w13(tmp0_desc);
    if (tmp5_input.l14()) {
      tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp5_input.x13(tmp0_desc);
    return BlogUpdatedInfoResponse.td5(tmp3_bitMask0, tmp4_local0, null);
  }
  ez() {
    return this.rd5_1;
  }
  e1c() {
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
  bd5(_set____db54di) {
    this.blog = _set____db54di;
  }
  cd5() {
    return this.blog;
  }
  static td5(seen0, blog, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().rd5_1);
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
    tmp.ud5_1 = [lazy(tmp_0, UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w)];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserDashboardResponse', this, 1);
    tmp0_serialDesc.o1b('posts', true);
    this.vd5_1 = tmp0_serialDesc;
  }
  wd5(encoder, value) {
    var tmp0_desc = this.vd5_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().ud5_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.posts == null)) {
      tmp1_output.o15(tmp0_desc, 0, tmp2_cached[0].d3(), value.posts);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.wd5(encoder, value instanceof UserDashboardResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.vd5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.w13(tmp0_desc);
    var tmp6_cached = Companion_getInstance_10().ud5_1;
    if (tmp5_input.l14()) {
      tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, tmp6_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, tmp6_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp5_input.x13(tmp0_desc);
    return UserDashboardResponse.xd5(tmp3_bitMask0, tmp4_local0, null);
  }
  ez() {
    return this.vd5_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_10().ud5_1;
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
  od5(_set____db54di) {
    this.posts = _set____db54di;
  }
  e6a() {
    return this.posts;
  }
  static xd5(seen0, posts, serializationConstructorMarker) {
    Companion_getInstance_10();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().vd5_1);
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
    tmp.yd5_1 = [null, lazy(tmp_0, UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5)];
  }
}
class $serializer_10 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserFollowingResponse', this, 2);
    tmp0_serialDesc.o1b('total_blogs', true);
    tmp0_serialDesc.o1b('blogs', true);
    this.zd5_1 = tmp0_serialDesc;
  }
  ad6(encoder, value) {
    var tmp0_desc = this.zd5_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().yd5_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.totalBlog == null)) {
      tmp1_output.o15(tmp0_desc, 0, IntSerializer_getInstance(), value.totalBlog);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.blogs == null)) {
      tmp1_output.o15(tmp0_desc, 1, tmp2_cached[1].d3(), value.blogs);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.ad6(encoder, value instanceof UserFollowingResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.zd5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_11().yd5_1;
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return UserFollowingResponse.bd6(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.zd5_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_11().yd5_1;
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
  cd6(_set____db54di) {
    this.totalBlog = _set____db54di;
  }
  dd6() {
    return this.totalBlog;
  }
  ud4(_set____db54di) {
    this.blogs = _set____db54di;
  }
  vd4() {
    return this.blogs;
  }
  static bd6(seen0, totalBlog, blogs, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().zd5_1);
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
    tmp.ed6_1 = [lazy(tmp_0, UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0), null];
  }
}
class $serializer_11 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserLikesResponse', this, 2);
    tmp0_serialDesc.o1b('liked_posts', true);
    tmp0_serialDesc.o1b('liked_count', true);
    this.fd6_1 = tmp0_serialDesc;
  }
  gd6(encoder, value) {
    var tmp0_desc = this.fd6_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().ed6_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.o15(tmp0_desc, 0, tmp2_cached[0].d3(), value.likedPosts);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.o15(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.gd6(encoder, value instanceof UserLikesResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.fd6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().ed6_1;
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return UserLikesResponse.hd6(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.fd6_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_12().ed6_1;
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
  hd5(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  id5() {
    return this.likedPosts;
  }
  jaj(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  kaj() {
    return this.likedCount;
  }
  static hd6(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().fd6_1);
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
    tmp0_serialDesc.o1b('user', true);
    this.id6_1 = tmp0_serialDesc;
  }
  jd6(encoder, value) {
    var tmp0_desc = this.id6_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.o15(tmp0_desc, 0, $serializer_getInstance_35(), value.user);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.jd6(encoder, value instanceof UserResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.id6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.w13(tmp0_desc);
    if (tmp5_input.l14()) {
      tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp5_input.x13(tmp0_desc);
    return UserResponse.kd6(tmp3_bitMask0, tmp4_local0, null);
  }
  ez() {
    return this.id6_1;
  }
  e1c() {
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
  ld6(_set____db54di) {
    this.user = _set____db54di;
  }
  s34() {
    return this.user;
  }
  static kd6(seen0, user, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().id6_1);
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
  od6() {
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
    tmp0_serialDesc.o1b('type', true);
    tmp0_serialDesc.o1b('timestamp', true);
    tmp0_serialDesc.o1b('blog_name', true);
    tmp0_serialDesc.o1b('blog_uuid', true);
    tmp0_serialDesc.o1b('blog_url', true);
    tmp0_serialDesc.o1b('followed', true);
    tmp0_serialDesc.o1b('avatar_shape', true);
    tmp0_serialDesc.o1b('post_id', true);
    tmp0_serialDesc.o1b('reblog_parent_blog_name', true);
    this.rd6_1 = tmp0_serialDesc;
  }
  sd6(encoder, value) {
    var tmp0_desc = this.rd6_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.type == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.timestamp == null)) {
      tmp1_output.o15(tmp0_desc, 1, IntSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.blogName == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.blogName);
    }
    if (tmp1_output.s15(tmp0_desc, 3) ? true : !(value.blogUuid == null)) {
      tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.blogUuid);
    }
    if (tmp1_output.s15(tmp0_desc, 4) ? true : !(value.blogUrl == null)) {
      tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.blogUrl);
    }
    if (tmp1_output.s15(tmp0_desc, 5) ? true : !(value.isFollowed == null)) {
      tmp1_output.o15(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.s15(tmp0_desc, 6) ? true : !(value.avatarShape == null)) {
      tmp1_output.o15(tmp0_desc, 6, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.s15(tmp0_desc, 7) ? true : !(value.postId == null)) {
      tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.postId);
    }
    if (tmp1_output.s15(tmp0_desc, 8) ? true : !(value.reblogParentBlogName == null)) {
      tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.reblogParentBlogName);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.sd6(encoder, value instanceof Note ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.rd6_1;
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
    var tmp13_input = decoder.w13(tmp0_desc);
    if (tmp13_input.l14()) {
      tmp4_local0 = tmp13_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.k14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.k14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.k14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.k14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp13_input.x13(tmp0_desc);
    return Note.td6(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  ez() {
    return this.rd6_1;
  }
  e1c() {
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
  k38() {
    return this.type;
  }
  ud6() {
    return this.timestamp;
  }
  ld0() {
    return this.blogName;
  }
  vd6() {
    return this.blogUuid;
  }
  wd6() {
    return this.blogUrl;
  }
  las() {
    return this.isFollowed;
  }
  xd6() {
    return this.avatarShape;
  }
  n9n() {
    return this.postId;
  }
  yd6() {
    return this.reblogParentBlogName;
  }
  static td6(seen0, type, timestamp, blogName, blogUuid, blogUrl, isFollowed, avatarShape, postId, reblogParentBlogName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().rd6_1);
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
    tmp0_serialDesc.o1b('64', true);
    tmp0_serialDesc.o1b('128', true);
    this.zd6_1 = tmp0_serialDesc;
  }
  ad7(encoder, value) {
    var tmp0_desc = this.zd6_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.size64 == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.size64);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.size128 == null)) {
      tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.size128);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.ad7(encoder, value instanceof NoteAvatar ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.zd6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return NoteAvatar.bd7(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.zd6_1;
  }
  e1c() {
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
  cd7(_set____db54di) {
    this.size64 = _set____db54di;
  }
  dd7() {
    return this.size64;
  }
  ed7(_set____db54di) {
    this.size128 = _set____db54di;
  }
  fd7() {
    return this.size128;
  }
  static bd7(seen0, size64, size128, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().zd6_1);
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
  static gd7() {
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
    tmp.hd7_1 = [null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Blog$Companion$$childSerializers$_anonymous__tmgjug), null, null, null, null, null, null, null];
  }
}
class $serializer_15 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Blog', this, 18);
    tmp0_serialDesc.o1b('title', true);
    tmp0_serialDesc.o1b('posts', true);
    tmp0_serialDesc.o1b('name', true);
    tmp0_serialDesc.o1b('updated', true);
    tmp0_serialDesc.o1b('description', true);
    tmp0_serialDesc.o1b('ask', true);
    tmp0_serialDesc.o1b('ask_anon', true);
    tmp0_serialDesc.o1b('followed', true);
    tmp0_serialDesc.o1b('likes', true);
    tmp0_serialDesc.o1b('is_blocked_from_primary', true);
    tmp0_serialDesc.o1b('avatar', true);
    tmp0_serialDesc.o1b('url', true);
    tmp0_serialDesc.o1b('theme', true);
    tmp0_serialDesc.o1b('admin', true);
    tmp0_serialDesc.o1b('ask_page_title', true);
    tmp0_serialDesc.o1b('is_nsfw', true);
    tmp0_serialDesc.o1b('primary', true);
    tmp0_serialDesc.o1b('followers', true);
    this.id7_1 = tmp0_serialDesc;
  }
  jd7(encoder, value) {
    var tmp0_desc = this.id7_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().hd7_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.postCount === 0)) {
      tmp1_output.g15(tmp0_desc, 1, value.postCount);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.s15(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.o15(tmp0_desc, 3, IntSerializer_getInstance(), value.updated);
    }
    if (tmp1_output.s15(tmp0_desc, 4) ? true : !(value.description == null)) {
      tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.s15(tmp0_desc, 5) ? true : !(value.isAsk == null)) {
      tmp1_output.o15(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isAsk);
    }
    if (tmp1_output.s15(tmp0_desc, 6) ? true : !(value.isAskAnon == null)) {
      tmp1_output.o15(tmp0_desc, 6, BooleanSerializer_getInstance(), value.isAskAnon);
    }
    if (tmp1_output.s15(tmp0_desc, 7) ? true : !(value.isFollowed == null)) {
      tmp1_output.o15(tmp0_desc, 7, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.s15(tmp0_desc, 8) ? true : !(value.likeCount == null)) {
      tmp1_output.o15(tmp0_desc, 8, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.s15(tmp0_desc, 9) ? true : !(value.isBlockedFromPrimary == null)) {
      tmp1_output.o15(tmp0_desc, 9, BooleanSerializer_getInstance(), value.isBlockedFromPrimary);
    }
    if (tmp1_output.s15(tmp0_desc, 10) ? true : !(value.avatar == null)) {
      tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.avatar);
    }
    if (tmp1_output.s15(tmp0_desc, 11) ? true : !(value.url == null)) {
      tmp1_output.o15(tmp0_desc, 11, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.s15(tmp0_desc, 12) ? true : !(value.theme == null)) {
      tmp1_output.o15(tmp0_desc, 12, $serializer_getInstance_16(), value.theme);
    }
    if (tmp1_output.s15(tmp0_desc, 13) ? true : !(value.isAdmin == null)) {
      tmp1_output.o15(tmp0_desc, 13, BooleanSerializer_getInstance(), value.isAdmin);
    }
    if (tmp1_output.s15(tmp0_desc, 14) ? true : !(value.askPageTitle == null)) {
      tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.askPageTitle);
    }
    if (tmp1_output.s15(tmp0_desc, 15) ? true : !(value.isNSFW == null)) {
      tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isNSFW);
    }
    if (tmp1_output.s15(tmp0_desc, 16) ? true : !(value.isPrimary == null)) {
      tmp1_output.o15(tmp0_desc, 16, BooleanSerializer_getInstance(), value.isPrimary);
    }
    if (tmp1_output.s15(tmp0_desc, 17) ? true : !(value.followerCount == null)) {
      tmp1_output.o15(tmp0_desc, 17, IntSerializer_getInstance(), value.followerCount);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.jd7(encoder, value instanceof Blog ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.id7_1;
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
    var tmp22_input = decoder.w13(tmp0_desc);
    var tmp23_cached = Companion_getInstance_16().hd7_1;
    if (tmp22_input.l14()) {
      tmp4_local0 = tmp22_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.b14(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.k14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.k14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.k14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.k14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.k14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.k14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.k14(tmp0_desc, 10, tmp23_cached[10].d3(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.k14(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.k14(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.k14(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.k14(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.k14(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.b14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.k14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.k14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.k14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.k14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.k14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.k14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.k14(tmp0_desc, 10, tmp23_cached[10].d3(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.k14(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.k14(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.k14(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.k14(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.k14(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp22_input.x13(tmp0_desc);
    return Blog.kd7(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  }
  ez() {
    return this.id7_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_16().hd7_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_16()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class Blog extends Resource {
  constructor() {
    return new.target.ld7();
  }
  static ld7() {
    Companion_getInstance_16();
    var $this = this.gd7();
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
  daj(_set____db54di) {
    this.title = _set____db54di;
  }
  a3j() {
    return this.title;
  }
  md7(_set____db54di) {
    this.postCount = _set____db54di;
  }
  nd7() {
    return this.postCount;
  }
  y36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  od7(_set____db54di) {
    this.updated = _set____db54di;
  }
  pd7() {
    return this.updated;
  }
  c37(_set____db54di) {
    this.description = _set____db54di;
  }
  m36() {
    return this.description;
  }
  qd7(_set____db54di) {
    this.isAsk = _set____db54di;
  }
  rd7() {
    return this.isAsk;
  }
  sd7(_set____db54di) {
    this.isAskAnon = _set____db54di;
  }
  td7() {
    return this.isAskAnon;
  }
  ud7(_set____db54di) {
    this.isFollowed = _set____db54di;
  }
  las() {
    return this.isFollowed;
  }
  i34() {
    return this.likeCount;
  }
  vd7() {
    return this.isBlockedFromPrimary;
  }
  p3j() {
    return this.avatar;
  }
  m4n() {
    return this.url;
  }
  wd7() {
    return this.theme;
  }
  day() {
    return this.isAdmin;
  }
  xd7() {
    return this.askPageTitle;
  }
  yd7() {
    return this.isNSFW;
  }
  zd7() {
    return this.isPrimary;
  }
  ad8() {
    return this.followerCount;
  }
  static kd7(seen0, title, postCount, name, updated, description, isAsk, isAskAnon, isFollowed, likeCount, isBlockedFromPrimary, avatar, url, theme, isAdmin, askPageTitle, isNSFW, isPrimary, followerCount, serializationConstructorMarker) {
    Companion_getInstance_16();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().id7_1);
    }
    var $this = this.gd7();
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
    tmp0_serialDesc.o1b('width', true);
    tmp0_serialDesc.o1b('height', true);
    tmp0_serialDesc.o1b('url', true);
    this.bd8_1 = tmp0_serialDesc;
  }
  cd8(encoder, value) {
    var tmp0_desc = this.bd8_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.o15(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.o15(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.cd8(encoder, value instanceof BlogAvatar ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.bd8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.w13(tmp0_desc);
    if (tmp7_input.l14()) {
      tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp7_input.x13(tmp0_desc);
    return BlogAvatar.dd8(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  ez() {
    return this.bd8_1;
  }
  e1c() {
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
  p38(_set____db54di) {
    this.width = _set____db54di;
  }
  q38() {
    return this.width;
  }
  r38(_set____db54di) {
    this.height = _set____db54di;
  }
  s38() {
    return this.height;
  }
  a9l(_set____db54di) {
    this.url = _set____db54di;
  }
  m4n() {
    return this.url;
  }
  static dd8(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().bd8_1);
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
    tmp0_serialDesc.o1b('avatar_shape', true);
    tmp0_serialDesc.o1b('background_color', true);
    tmp0_serialDesc.o1b('body_font', true);
    tmp0_serialDesc.o1b('header_image', true);
    tmp0_serialDesc.o1b('header_image_focused', true);
    tmp0_serialDesc.o1b('header_image_poster', true);
    tmp0_serialDesc.o1b('header_image_scaled', true);
    tmp0_serialDesc.o1b('header_stretch', true);
    tmp0_serialDesc.o1b('link_color', true);
    tmp0_serialDesc.o1b('show_avatar', true);
    tmp0_serialDesc.o1b('show_description', true);
    tmp0_serialDesc.o1b('show_header_image', true);
    tmp0_serialDesc.o1b('show_title', true);
    tmp0_serialDesc.o1b('title_color', true);
    tmp0_serialDesc.o1b('title_font', true);
    tmp0_serialDesc.o1b('title_font_weight', true);
    this.ed8_1 = tmp0_serialDesc;
  }
  fd8(encoder, value) {
    var tmp0_desc = this.ed8_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.avatarShape == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.backgroundColor == null)) {
      tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.backgroundColor);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.bodyFont == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.bodyFont);
    }
    if (tmp1_output.s15(tmp0_desc, 3) ? true : !(value.headerImage == null)) {
      tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.headerImage);
    }
    if (tmp1_output.s15(tmp0_desc, 4) ? true : !(value.headerImageFocused == null)) {
      tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.headerImageFocused);
    }
    if (tmp1_output.s15(tmp0_desc, 5) ? true : !(value.headerImagePoster == null)) {
      tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.headerImagePoster);
    }
    if (tmp1_output.s15(tmp0_desc, 6) ? true : !(value.headerImageScaled == null)) {
      tmp1_output.o15(tmp0_desc, 6, StringSerializer_getInstance(), value.headerImageScaled);
    }
    if (tmp1_output.s15(tmp0_desc, 7) ? true : !(value.isHeaderStretch === false)) {
      tmp1_output.d15(tmp0_desc, 7, value.isHeaderStretch);
    }
    if (tmp1_output.s15(tmp0_desc, 8) ? true : !(value.linkColor == null)) {
      tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.linkColor);
    }
    if (tmp1_output.s15(tmp0_desc, 9) ? true : !(value.isShowAvatar === false)) {
      tmp1_output.d15(tmp0_desc, 9, value.isShowAvatar);
    }
    if (tmp1_output.s15(tmp0_desc, 10) ? true : !(value.isShowDescription === false)) {
      tmp1_output.d15(tmp0_desc, 10, value.isShowDescription);
    }
    if (tmp1_output.s15(tmp0_desc, 11) ? true : !(value.isShowHeaderImage === false)) {
      tmp1_output.d15(tmp0_desc, 11, value.isShowHeaderImage);
    }
    if (tmp1_output.s15(tmp0_desc, 12) ? true : !(value.isShowTitle === false)) {
      tmp1_output.d15(tmp0_desc, 12, value.isShowTitle);
    }
    if (tmp1_output.s15(tmp0_desc, 13) ? true : !(value.titleColor == null)) {
      tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.titleColor);
    }
    if (tmp1_output.s15(tmp0_desc, 14) ? true : !(value.titleFont == null)) {
      tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.titleFont);
    }
    if (tmp1_output.s15(tmp0_desc, 15) ? true : !(value.titleFontWeight == null)) {
      tmp1_output.o15(tmp0_desc, 15, StringSerializer_getInstance(), value.titleFontWeight);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.fd8(encoder, value instanceof BlogTheme ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.ed8_1;
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
    var tmp20_input = decoder.w13(tmp0_desc);
    if (tmp20_input.l14()) {
      tmp4_local0 = tmp20_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.k14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.y13(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.y13(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.y13(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.y13(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.y13(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.k14(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.k14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.y13(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.y13(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.y13(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.y13(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.y13(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.k14(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp20_input.x13(tmp0_desc);
    return BlogTheme.gd8(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  ez() {
    return this.ed8_1;
  }
  e1c() {
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
  hd8(_set____db54di) {
    this.avatarShape = _set____db54di;
  }
  xd6() {
    return this.avatarShape;
  }
  id8(_set____db54di) {
    this.backgroundColor = _set____db54di;
  }
  jd8() {
    return this.backgroundColor;
  }
  kd8(_set____db54di) {
    this.bodyFont = _set____db54di;
  }
  ld8() {
    return this.bodyFont;
  }
  md8(_set____db54di) {
    this.headerImage = _set____db54di;
  }
  nd8() {
    return this.headerImage;
  }
  od8(_set____db54di) {
    this.headerImageFocused = _set____db54di;
  }
  pd8() {
    return this.headerImageFocused;
  }
  qd8(_set____db54di) {
    this.headerImagePoster = _set____db54di;
  }
  rd8() {
    return this.headerImagePoster;
  }
  sd8(_set____db54di) {
    this.headerImageScaled = _set____db54di;
  }
  td8() {
    return this.headerImageScaled;
  }
  ud8(_set____db54di) {
    this.isHeaderStretch = _set____db54di;
  }
  vd8() {
    return this.isHeaderStretch;
  }
  wd8() {
    return this.linkColor;
  }
  xd8() {
    return this.isShowAvatar;
  }
  yd8() {
    return this.isShowDescription;
  }
  zd8() {
    return this.isShowHeaderImage;
  }
  ad9() {
    return this.isShowTitle;
  }
  bd9() {
    return this.titleColor;
  }
  cd9() {
    return this.titleFont;
  }
  dd9() {
    return this.titleFontWeight;
  }
  static gd8(seen0, avatarShape, backgroundColor, bodyFont, headerImage, headerImageFocused, headerImagePoster, headerImageScaled, isHeaderStretch, linkColor, isShowAvatar, isShowDescription, isShowHeaderImage, isShowTitle, titleColor, titleFont, titleFontWeight, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().ed8_1);
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
    tmp0_serialDesc.o1b('comment', true);
    tmp0_serialDesc.o1b('tree_html', true);
    this.ed9_1 = tmp0_serialDesc;
  }
  fd9(encoder, value) {
    var tmp0_desc = this.ed9_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.comment == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.comment);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.treeHtml == null)) {
      tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.treeHtml);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.fd9(encoder, value instanceof Reblog ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.ed9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return Reblog.gd9(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.ed9_1;
  }
  e1c() {
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
  y9l(_set____db54di) {
    this.comment = _set____db54di;
  }
  h3f() {
    return this.comment;
  }
  hd9(_set____db54di) {
    this.treeHtml = _set____db54di;
  }
  id9() {
    return this.treeHtml;
  }
  static gd9(seen0, comment, treeHtml, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().ed9_1);
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
  p1p() {
    return PostSerializer_getInstance();
  }
}
class Post {
  constructor() {
    return new.target.jd9();
  }
  static jd9() {
    return createThis(this);
  }
  kd9() {
    return this instanceof LegacyTextPost ? this : null;
  }
  ld9() {
    return this instanceof LegacyPhotoPost ? this : null;
  }
  md9() {
    return this instanceof LegacyQuotePost ? this : null;
  }
  nd9() {
    return this instanceof LegacyLinkPost ? this : null;
  }
  od9() {
    return this instanceof LegacyVideoPost ? this : null;
  }
  pd9() {
    return this instanceof LegacyAudioPost ? this : null;
  }
  qd9() {
    return this instanceof LegacyChatPost ? this : null;
  }
  rd9() {
    return this instanceof LegacyAnswerPost ? this : null;
  }
  sd9() {
    return this instanceof LegacyPostcardPost ? this : null;
  }
  get asLegacyTextPost() {
    return this.kd9();
  }
  get asLegacyPhotoPost() {
    return this.ld9();
  }
  get asLegacyQuotePost() {
    return this.md9();
  }
  get asLegacyLinkPost() {
    return this.nd9();
  }
  get asLegacyVideoPost() {
    return this.od9();
  }
  get asLegacyAudioPost() {
    return this.pd9();
  }
  get asLegacyChatPost() {
    return this.qd9();
  }
  get asLegacyAnswerPost() {
    return this.rd9();
  }
  get asLegacyPostcardPost() {
    return this.sd9();
  }
  get blogName() {
    return this.ld0();
  }
  set blogName(value) {
    this.kd0(value);
  }
  get idString() {
    return this.ud9();
  }
  set idString(value) {
    this.td9(value);
  }
  get genesisPostId() {
    return this.wd9();
  }
  set genesisPostId(value) {
    this.vd9(value);
  }
  get postUrl() {
    return this.yd9();
  }
  set postUrl(value) {
    this.xd9(value);
  }
  get parentPostUrl() {
    return this.ada();
  }
  set parentPostUrl(value) {
    this.zd9(value);
  }
  get type() {
    return this.k38();
  }
  set type(value) {
    this.x38(value);
  }
  get timestamp() {
    return this.ud6();
  }
  set timestamp(value) {
    this.bda(value);
  }
  get date() {
    return this.sd1();
  }
  set date(value) {
    this.rd1(value);
  }
  get format() {
    return this.ud1();
  }
  set format(value) {
    this.td1(value);
  }
  get reblogKey() {
    return this.ld3();
  }
  set reblogKey(value) {
    this.kd3(value);
  }
  get tags() {
    return this.haj();
  }
  set tags(value) {
    this.mao(value);
  }
  get isBookmarklet() {
    return this.dda();
  }
  set isBookmarklet(value) {
    this.cda(value);
  }
  get isMobile() {
    return this.fda();
  }
  set isMobile(value) {
    this.eda(value);
  }
  get sourceUrl() {
    return this.m38();
  }
  set sourceUrl(value) {
    this.l38(value);
  }
  get sourceTitle() {
    return this.hda();
  }
  set sourceTitle(value) {
    this.gda(value);
  }
  get isLiked() {
    return this.dar();
  }
  set isLiked(value) {
    this.ida(value);
  }
  get state() {
    return this.f7y();
  }
  set state(value) {
    this.cab(value);
  }
  get title() {
    return this.a3j();
  }
  set title(value) {
    this.daj(value);
  }
  get body() {
    return this.vap();
  }
  set body(value) {
    this.uap(value);
  }
  get noteCount() {
    return this.kda();
  }
  set noteCount(value) {
    this.jda(value);
  }
  get summary() {
    return this.qaq();
  }
  set summary(value) {
    this.paq(value);
  }
  get slug() {
    return this.wd1();
  }
  set slug(value) {
    this.vd1(value);
  }
  get rebloggedFromId() {
    return this.mda();
  }
  set rebloggedFromId(value) {
    this.lda(value);
  }
  get rebloggedFromUrl() {
    return this.oda();
  }
  set rebloggedFromUrl(value) {
    this.nda(value);
  }
  get rebloggedFromName() {
    return this.qda();
  }
  set rebloggedFromName(value) {
    this.pda(value);
  }
  get rebloggedFromTitle() {
    return this.sda();
  }
  set rebloggedFromTitle(value) {
    this.rda(value);
  }
  get rebloggedFromUuid() {
    return this.uda();
  }
  set rebloggedFromUuid(value) {
    this.tda(value);
  }
  get rebloggedFromCanMessage() {
    return this.wda();
  }
  set rebloggedFromCanMessage(value) {
    this.vda(value);
  }
  get rebloggedFromFollowing() {
    return this.yda();
  }
  set rebloggedFromFollowing(value) {
    this.xda(value);
  }
  get rebloggedRootId() {
    return this.adb();
  }
  set rebloggedRootId(value) {
    this.zda(value);
  }
  get rebloggedRootUrl() {
    return this.cdb();
  }
  set rebloggedRootUrl(value) {
    this.bdb(value);
  }
  get rebloggedRootName() {
    return this.edb();
  }
  set rebloggedRootName(value) {
    this.ddb(value);
  }
  get rebloggedRootTitle() {
    return this.gdb();
  }
  set rebloggedRootTitle(value) {
    this.fdb(value);
  }
  get rebloggedRootUuid() {
    return this.idb();
  }
  set rebloggedRootUuid(value) {
    this.hdb(value);
  }
  get rebloggedRootCanMessage() {
    return this.kdb();
  }
  set rebloggedRootCanMessage(value) {
    this.jdb(value);
  }
  get rebloggedRootFollowing() {
    return this.mdb();
  }
  set rebloggedRootFollowing(value) {
    this.ldb(value);
  }
  get notes() {
    return this.odb();
  }
  set notes(value) {
    this.ndb(value);
  }
  get blog() {
    return this.cd5();
  }
  set blog(value) {
    this.bd5(value);
  }
  get reblog() {
    return this.nbu();
  }
  set reblog(value) {
    this.pdb(value);
  }
  get trail() {
    return this.rdb();
  }
  set trail(value) {
    this.qdb(value);
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
    tmp.sdb_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1), null, null, null, null];
  }
  p1p() {
    return $serializer_getInstance_18();
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAnswerPost', this, 44);
    tmp0_serialDesc.o1b('blog_name', false);
    tmp0_serialDesc.o1b('id_string', false);
    tmp0_serialDesc.o1b('genesis_post_id', false);
    tmp0_serialDesc.o1b('post_url', false);
    tmp0_serialDesc.o1b('parent_post_url', false);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('timestamp', false);
    tmp0_serialDesc.o1b('date', false);
    tmp0_serialDesc.o1b('format', false);
    tmp0_serialDesc.o1b('reblog_key', false);
    tmp0_serialDesc.o1b('tags', false);
    tmp0_serialDesc.o1b('bookmarklet', false);
    tmp0_serialDesc.o1b('mobile', false);
    tmp0_serialDesc.o1b('source_url', false);
    tmp0_serialDesc.o1b('source_title', false);
    tmp0_serialDesc.o1b('liked', false);
    tmp0_serialDesc.o1b('state', false);
    tmp0_serialDesc.o1b('title', false);
    tmp0_serialDesc.o1b('body', false);
    tmp0_serialDesc.o1b('note_count', false);
    tmp0_serialDesc.o1b('summary', false);
    tmp0_serialDesc.o1b('slug', false);
    tmp0_serialDesc.o1b('reblogged_from_id', false);
    tmp0_serialDesc.o1b('reblogged_from_url', false);
    tmp0_serialDesc.o1b('reblogged_from_name', false);
    tmp0_serialDesc.o1b('reblogged_from_title', false);
    tmp0_serialDesc.o1b('reblogged_from_uuid', false);
    tmp0_serialDesc.o1b('reblogged_from_can_message', false);
    tmp0_serialDesc.o1b('reblogged_from_following', false);
    tmp0_serialDesc.o1b('reblogged_root_id', false);
    tmp0_serialDesc.o1b('reblogged_root_url', false);
    tmp0_serialDesc.o1b('reblogged_root_name', false);
    tmp0_serialDesc.o1b('reblogged_root_title', false);
    tmp0_serialDesc.o1b('reblogged_root_uuid', false);
    tmp0_serialDesc.o1b('reblogged_root_can_message', false);
    tmp0_serialDesc.o1b('reblogged_root_following', false);
    tmp0_serialDesc.o1b('notes', false);
    tmp0_serialDesc.o1b('blog', false);
    tmp0_serialDesc.o1b('reblog', false);
    tmp0_serialDesc.o1b('trail', false);
    tmp0_serialDesc.o1b('asking_name', true);
    tmp0_serialDesc.o1b('asking_url', true);
    tmp0_serialDesc.o1b('question', true);
    tmp0_serialDesc.o1b('answer', true);
    this.tdb_1 = tmp0_serialDesc;
  }
  udb(encoder, value) {
    var tmp0_desc = this.tdb_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().sdb_1;
    tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.vdb_1);
    tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.wdb_1);
    tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.xdb_1);
    tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.ydb_1);
    tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.zdb_1);
    tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.adc_1);
    tmp1_output.o15(tmp0_desc, 6, IntSerializer_getInstance(), value.bdc_1);
    tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.cdc_1);
    tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.ddc_1);
    tmp1_output.o15(tmp0_desc, 9, StringSerializer_getInstance(), value.edc_1);
    tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.fdc_1);
    tmp1_output.o15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.gdc_1);
    tmp1_output.o15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.hdc_1);
    tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.idc_1);
    tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.jdc_1);
    tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.kdc_1);
    tmp1_output.o15(tmp0_desc, 16, StringSerializer_getInstance(), value.ldc_1);
    tmp1_output.o15(tmp0_desc, 17, StringSerializer_getInstance(), value.mdc_1);
    tmp1_output.o15(tmp0_desc, 18, StringSerializer_getInstance(), value.ndc_1);
    tmp1_output.o15(tmp0_desc, 19, IntSerializer_getInstance(), value.odc_1);
    tmp1_output.o15(tmp0_desc, 20, StringSerializer_getInstance(), value.pdc_1);
    tmp1_output.o15(tmp0_desc, 21, StringSerializer_getInstance(), value.qdc_1);
    tmp1_output.o15(tmp0_desc, 22, StringSerializer_getInstance(), value.rdc_1);
    tmp1_output.o15(tmp0_desc, 23, StringSerializer_getInstance(), value.sdc_1);
    tmp1_output.o15(tmp0_desc, 24, StringSerializer_getInstance(), value.tdc_1);
    tmp1_output.o15(tmp0_desc, 25, StringSerializer_getInstance(), value.udc_1);
    tmp1_output.o15(tmp0_desc, 26, StringSerializer_getInstance(), value.vdc_1);
    tmp1_output.o15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.wdc_1);
    tmp1_output.o15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.xdc_1);
    tmp1_output.o15(tmp0_desc, 29, StringSerializer_getInstance(), value.ydc_1);
    tmp1_output.o15(tmp0_desc, 30, StringSerializer_getInstance(), value.zdc_1);
    tmp1_output.o15(tmp0_desc, 31, StringSerializer_getInstance(), value.bdd_1);
    tmp1_output.o15(tmp0_desc, 32, StringSerializer_getInstance(), value.cdd_1);
    tmp1_output.o15(tmp0_desc, 33, StringSerializer_getInstance(), value.ddd_1);
    tmp1_output.o15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.edd_1);
    tmp1_output.o15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.fdd_1);
    tmp1_output.o15(tmp0_desc, 36, tmp2_cached[36].d3(), value.gdd_1);
    tmp1_output.o15(tmp0_desc, 37, $serializer_getInstance_14(), value.hdd_1);
    tmp1_output.o15(tmp0_desc, 38, $serializer_getInstance_17(), value.idd_1);
    tmp1_output.o15(tmp0_desc, 39, tmp2_cached[39].d3(), value.jdd_1);
    if (tmp1_output.s15(tmp0_desc, 40) ? true : !(value.askingName == null)) {
      tmp1_output.o15(tmp0_desc, 40, StringSerializer_getInstance(), value.askingName);
    }
    if (tmp1_output.s15(tmp0_desc, 41) ? true : !(value.askingUrl == null)) {
      tmp1_output.o15(tmp0_desc, 41, StringSerializer_getInstance(), value.askingUrl);
    }
    if (tmp1_output.s15(tmp0_desc, 42) ? true : !(value.question == null)) {
      tmp1_output.o15(tmp0_desc, 42, StringSerializer_getInstance(), value.question);
    }
    if (tmp1_output.s15(tmp0_desc, 43) ? true : !(value.answer == null)) {
      tmp1_output.o15(tmp0_desc, 43, StringSerializer_getInstance(), value.answer);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.udb(encoder, value instanceof LegacyAnswerPost ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.tdb_1;
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
    var tmp49_input = decoder.w13(tmp0_desc);
    var tmp50_cached = Companion_getInstance_21().sdb_1;
    if (tmp49_input.l14()) {
      tmp5_local0 = tmp49_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.k14(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.k14(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.k14(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.k14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.k14(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.k14(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.k14(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.k14(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.k14(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.k14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.k14(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.k14(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp49_input.x13(tmp0_desc);
    return LegacyAnswerPost.kdd(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  ez() {
    return this.tdb_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_21().sdb_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAnswerPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ldd(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ldd(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_21();
    var $this = this.jd9();
    $this.vdb_1 = blogName;
    $this.wdb_1 = idString;
    $this.xdb_1 = genesisPostId;
    $this.ydb_1 = postUrl;
    $this.zdb_1 = parentPostUrl;
    $this.adc_1 = type;
    $this.bdc_1 = timestamp;
    $this.cdc_1 = date;
    $this.ddc_1 = format;
    $this.edc_1 = reblogKey;
    $this.fdc_1 = tags;
    $this.gdc_1 = isBookmarklet;
    $this.hdc_1 = isMobile;
    $this.idc_1 = sourceUrl;
    $this.jdc_1 = sourceTitle;
    $this.kdc_1 = isLiked;
    $this.ldc_1 = state;
    $this.mdc_1 = title;
    $this.ndc_1 = body;
    $this.odc_1 = noteCount;
    $this.pdc_1 = summary;
    $this.qdc_1 = slug;
    $this.rdc_1 = rebloggedFromId;
    $this.sdc_1 = rebloggedFromUrl;
    $this.tdc_1 = rebloggedFromName;
    $this.udc_1 = rebloggedFromTitle;
    $this.vdc_1 = rebloggedFromUuid;
    $this.wdc_1 = rebloggedFromCanMessage;
    $this.xdc_1 = rebloggedFromFollowing;
    $this.ydc_1 = rebloggedRootId;
    $this.zdc_1 = rebloggedRootUrl;
    $this.bdd_1 = rebloggedRootName;
    $this.cdd_1 = rebloggedRootTitle;
    $this.ddd_1 = rebloggedRootUuid;
    $this.edd_1 = rebloggedRootCanMessage;
    $this.fdd_1 = rebloggedRootFollowing;
    $this.gdd_1 = notes;
    $this.hdd_1 = blog;
    $this.idd_1 = reblog;
    $this.jdd_1 = trail;
    $this.askingName = null;
    $this.askingUrl = null;
    $this.question = null;
    $this.answer = null;
    return $this;
  }
  kd0(_set____db54di) {
    this.vdb_1 = _set____db54di;
  }
  ld0() {
    return this.vdb_1;
  }
  td9(_set____db54di) {
    this.wdb_1 = _set____db54di;
  }
  ud9() {
    return this.wdb_1;
  }
  vd9(_set____db54di) {
    this.xdb_1 = _set____db54di;
  }
  wd9() {
    return this.xdb_1;
  }
  xd9(_set____db54di) {
    this.ydb_1 = _set____db54di;
  }
  yd9() {
    return this.ydb_1;
  }
  zd9(_set____db54di) {
    this.zdb_1 = _set____db54di;
  }
  ada() {
    return this.zdb_1;
  }
  x38(_set____db54di) {
    this.adc_1 = _set____db54di;
  }
  k38() {
    return this.adc_1;
  }
  bda(_set____db54di) {
    this.bdc_1 = _set____db54di;
  }
  ud6() {
    return this.bdc_1;
  }
  rd1(_set____db54di) {
    this.cdc_1 = _set____db54di;
  }
  sd1() {
    return this.cdc_1;
  }
  td1(_set____db54di) {
    this.ddc_1 = _set____db54di;
  }
  ud1() {
    return this.ddc_1;
  }
  kd3(_set____db54di) {
    this.edc_1 = _set____db54di;
  }
  ld3() {
    return this.edc_1;
  }
  mao(_set____db54di) {
    this.fdc_1 = _set____db54di;
  }
  haj() {
    return this.fdc_1;
  }
  cda(_set____db54di) {
    this.gdc_1 = _set____db54di;
  }
  dda() {
    return this.gdc_1;
  }
  eda(_set____db54di) {
    this.hdc_1 = _set____db54di;
  }
  fda() {
    return this.hdc_1;
  }
  l38(_set____db54di) {
    this.idc_1 = _set____db54di;
  }
  m38() {
    return this.idc_1;
  }
  gda(_set____db54di) {
    this.jdc_1 = _set____db54di;
  }
  hda() {
    return this.jdc_1;
  }
  ida(_set____db54di) {
    this.kdc_1 = _set____db54di;
  }
  dar() {
    return this.kdc_1;
  }
  cab(_set____db54di) {
    this.ldc_1 = _set____db54di;
  }
  f7y() {
    return this.ldc_1;
  }
  daj(_set____db54di) {
    this.mdc_1 = _set____db54di;
  }
  a3j() {
    return this.mdc_1;
  }
  uap(_set____db54di) {
    this.ndc_1 = _set____db54di;
  }
  vap() {
    return this.ndc_1;
  }
  jda(_set____db54di) {
    this.odc_1 = _set____db54di;
  }
  kda() {
    return this.odc_1;
  }
  paq(_set____db54di) {
    this.pdc_1 = _set____db54di;
  }
  qaq() {
    return this.pdc_1;
  }
  vd1(_set____db54di) {
    this.qdc_1 = _set____db54di;
  }
  wd1() {
    return this.qdc_1;
  }
  lda(_set____db54di) {
    this.rdc_1 = _set____db54di;
  }
  mda() {
    return this.rdc_1;
  }
  nda(_set____db54di) {
    this.sdc_1 = _set____db54di;
  }
  oda() {
    return this.sdc_1;
  }
  pda(_set____db54di) {
    this.tdc_1 = _set____db54di;
  }
  qda() {
    return this.tdc_1;
  }
  rda(_set____db54di) {
    this.udc_1 = _set____db54di;
  }
  sda() {
    return this.udc_1;
  }
  tda(_set____db54di) {
    this.vdc_1 = _set____db54di;
  }
  uda() {
    return this.vdc_1;
  }
  vda(_set____db54di) {
    this.wdc_1 = _set____db54di;
  }
  wda() {
    return this.wdc_1;
  }
  xda(_set____db54di) {
    this.xdc_1 = _set____db54di;
  }
  yda() {
    return this.xdc_1;
  }
  zda(_set____db54di) {
    this.ydc_1 = _set____db54di;
  }
  adb() {
    return this.ydc_1;
  }
  bdb(_set____db54di) {
    this.zdc_1 = _set____db54di;
  }
  cdb() {
    return this.zdc_1;
  }
  ddb(_set____db54di) {
    this.bdd_1 = _set____db54di;
  }
  edb() {
    return this.bdd_1;
  }
  fdb(_set____db54di) {
    this.cdd_1 = _set____db54di;
  }
  gdb() {
    return this.cdd_1;
  }
  hdb(_set____db54di) {
    this.ddd_1 = _set____db54di;
  }
  idb() {
    return this.ddd_1;
  }
  jdb(_set____db54di) {
    this.edd_1 = _set____db54di;
  }
  kdb() {
    return this.edd_1;
  }
  ldb(_set____db54di) {
    this.fdd_1 = _set____db54di;
  }
  mdb() {
    return this.fdd_1;
  }
  ndb(_set____db54di) {
    this.gdd_1 = _set____db54di;
  }
  odb() {
    return this.gdd_1;
  }
  bd5(_set____db54di) {
    this.hdd_1 = _set____db54di;
  }
  cd5() {
    return this.hdd_1;
  }
  pdb(_set____db54di) {
    this.idd_1 = _set____db54di;
  }
  nbu() {
    return this.idd_1;
  }
  qdb(_set____db54di) {
    this.jdd_1 = _set____db54di;
  }
  rdb() {
    return this.jdd_1;
  }
  mdd() {
    return this.askingName;
  }
  ndd() {
    return this.askingUrl;
  }
  odd() {
    return this.question;
  }
  hd3() {
    return this.answer;
  }
  static kdd(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, askingName, askingUrl, question, answer, serializationConstructorMarker) {
    Companion_getInstance_21();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_18().tdb_1);
    }
    var $this = this.jd9();
    $this.vdb_1 = blogName;
    $this.wdb_1 = idString;
    $this.xdb_1 = genesisPostId;
    $this.ydb_1 = postUrl;
    $this.zdb_1 = parentPostUrl;
    $this.adc_1 = type;
    $this.bdc_1 = timestamp;
    $this.cdc_1 = date;
    $this.ddc_1 = format;
    $this.edc_1 = reblogKey;
    $this.fdc_1 = tags;
    $this.gdc_1 = isBookmarklet;
    $this.hdc_1 = isMobile;
    $this.idc_1 = sourceUrl;
    $this.jdc_1 = sourceTitle;
    $this.kdc_1 = isLiked;
    $this.ldc_1 = state;
    $this.mdc_1 = title;
    $this.ndc_1 = body;
    $this.odc_1 = noteCount;
    $this.pdc_1 = summary;
    $this.qdc_1 = slug;
    $this.rdc_1 = rebloggedFromId;
    $this.sdc_1 = rebloggedFromUrl;
    $this.tdc_1 = rebloggedFromName;
    $this.udc_1 = rebloggedFromTitle;
    $this.vdc_1 = rebloggedFromUuid;
    $this.wdc_1 = rebloggedFromCanMessage;
    $this.xdc_1 = rebloggedFromFollowing;
    $this.ydc_1 = rebloggedRootId;
    $this.zdc_1 = rebloggedRootUrl;
    $this.bdd_1 = rebloggedRootName;
    $this.cdd_1 = rebloggedRootTitle;
    $this.ddd_1 = rebloggedRootUuid;
    $this.edd_1 = rebloggedRootCanMessage;
    $this.fdd_1 = rebloggedRootFollowing;
    $this.gdd_1 = notes;
    $this.hdd_1 = blog;
    $this.idd_1 = reblog;
    $this.jdd_1 = trail;
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
    tmp.pdd_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1), null];
  }
  p1p() {
    return $serializer_getInstance_19();
  }
}
class $serializer_20 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAudioPost', this, 41);
    tmp0_serialDesc.o1b('blog_name', false);
    tmp0_serialDesc.o1b('id_string', false);
    tmp0_serialDesc.o1b('genesis_post_id', false);
    tmp0_serialDesc.o1b('post_url', false);
    tmp0_serialDesc.o1b('parent_post_url', false);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('timestamp', false);
    tmp0_serialDesc.o1b('date', false);
    tmp0_serialDesc.o1b('format', false);
    tmp0_serialDesc.o1b('reblog_key', false);
    tmp0_serialDesc.o1b('tags', false);
    tmp0_serialDesc.o1b('bookmarklet', false);
    tmp0_serialDesc.o1b('mobile', false);
    tmp0_serialDesc.o1b('source_url', false);
    tmp0_serialDesc.o1b('source_title', false);
    tmp0_serialDesc.o1b('liked', false);
    tmp0_serialDesc.o1b('state', false);
    tmp0_serialDesc.o1b('title', false);
    tmp0_serialDesc.o1b('body', false);
    tmp0_serialDesc.o1b('note_count', false);
    tmp0_serialDesc.o1b('summary', false);
    tmp0_serialDesc.o1b('slug', false);
    tmp0_serialDesc.o1b('reblogged_from_id', false);
    tmp0_serialDesc.o1b('reblogged_from_url', false);
    tmp0_serialDesc.o1b('reblogged_from_name', false);
    tmp0_serialDesc.o1b('reblogged_from_title', false);
    tmp0_serialDesc.o1b('reblogged_from_uuid', false);
    tmp0_serialDesc.o1b('reblogged_from_can_message', false);
    tmp0_serialDesc.o1b('reblogged_from_following', false);
    tmp0_serialDesc.o1b('reblogged_root_id', false);
    tmp0_serialDesc.o1b('reblogged_root_url', false);
    tmp0_serialDesc.o1b('reblogged_root_name', false);
    tmp0_serialDesc.o1b('reblogged_root_title', false);
    tmp0_serialDesc.o1b('reblogged_root_uuid', false);
    tmp0_serialDesc.o1b('reblogged_root_can_message', false);
    tmp0_serialDesc.o1b('reblogged_root_following', false);
    tmp0_serialDesc.o1b('notes', false);
    tmp0_serialDesc.o1b('blog', false);
    tmp0_serialDesc.o1b('reblog', false);
    tmp0_serialDesc.o1b('trail', false);
    tmp0_serialDesc.o1b('caption', true);
    this.qdd_1 = tmp0_serialDesc;
  }
  rdd(encoder, value) {
    var tmp0_desc = this.qdd_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().pdd_1;
    tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.sdd_1);
    tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.tdd_1);
    tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.udd_1);
    tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.vdd_1);
    tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.wdd_1);
    tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.xdd_1);
    tmp1_output.o15(tmp0_desc, 6, IntSerializer_getInstance(), value.ydd_1);
    tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.zdd_1);
    tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.ade_1);
    tmp1_output.o15(tmp0_desc, 9, StringSerializer_getInstance(), value.bde_1);
    tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.cde_1);
    tmp1_output.o15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.dde_1);
    tmp1_output.o15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ede_1);
    tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.fde_1);
    tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.gde_1);
    tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.hde_1);
    tmp1_output.o15(tmp0_desc, 16, StringSerializer_getInstance(), value.ide_1);
    tmp1_output.o15(tmp0_desc, 17, StringSerializer_getInstance(), value.jde_1);
    tmp1_output.o15(tmp0_desc, 18, StringSerializer_getInstance(), value.kde_1);
    tmp1_output.o15(tmp0_desc, 19, IntSerializer_getInstance(), value.lde_1);
    tmp1_output.o15(tmp0_desc, 20, StringSerializer_getInstance(), value.mde_1);
    tmp1_output.o15(tmp0_desc, 21, StringSerializer_getInstance(), value.nde_1);
    tmp1_output.o15(tmp0_desc, 22, StringSerializer_getInstance(), value.ode_1);
    tmp1_output.o15(tmp0_desc, 23, StringSerializer_getInstance(), value.pde_1);
    tmp1_output.o15(tmp0_desc, 24, StringSerializer_getInstance(), value.qde_1);
    tmp1_output.o15(tmp0_desc, 25, StringSerializer_getInstance(), value.rde_1);
    tmp1_output.o15(tmp0_desc, 26, StringSerializer_getInstance(), value.sde_1);
    tmp1_output.o15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.tde_1);
    tmp1_output.o15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.ude_1);
    tmp1_output.o15(tmp0_desc, 29, StringSerializer_getInstance(), value.vde_1);
    tmp1_output.o15(tmp0_desc, 30, StringSerializer_getInstance(), value.wde_1);
    tmp1_output.o15(tmp0_desc, 31, StringSerializer_getInstance(), value.xde_1);
    tmp1_output.o15(tmp0_desc, 32, StringSerializer_getInstance(), value.yde_1);
    tmp1_output.o15(tmp0_desc, 33, StringSerializer_getInstance(), value.zde_1);
    tmp1_output.o15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.adf_1);
    tmp1_output.o15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.bdf_1);
    tmp1_output.o15(tmp0_desc, 36, tmp2_cached[36].d3(), value.cdf_1);
    tmp1_output.o15(tmp0_desc, 37, $serializer_getInstance_14(), value.ddf_1);
    tmp1_output.o15(tmp0_desc, 38, $serializer_getInstance_17(), value.edf_1);
    tmp1_output.o15(tmp0_desc, 39, tmp2_cached[39].d3(), value.fdf_1);
    if (tmp1_output.s15(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.o15(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.rdd(encoder, value instanceof LegacyAudioPost ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.qdd_1;
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
    var tmp46_input = decoder.w13(tmp0_desc);
    var tmp47_cached = Companion_getInstance_22().pdd_1;
    if (tmp46_input.l14()) {
      tmp5_local0 = tmp46_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.k14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.k14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.k14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.k14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.k14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.k14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp46_input.x13(tmp0_desc);
    return LegacyAudioPost.gdf(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  ez() {
    return this.qdd_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_22().pdd_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAudioPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.hdf(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static hdf(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_22();
    var $this = this.jd9();
    $this.sdd_1 = blogName;
    $this.tdd_1 = idString;
    $this.udd_1 = genesisPostId;
    $this.vdd_1 = postUrl;
    $this.wdd_1 = parentPostUrl;
    $this.xdd_1 = type;
    $this.ydd_1 = timestamp;
    $this.zdd_1 = date;
    $this.ade_1 = format;
    $this.bde_1 = reblogKey;
    $this.cde_1 = tags;
    $this.dde_1 = isBookmarklet;
    $this.ede_1 = isMobile;
    $this.fde_1 = sourceUrl;
    $this.gde_1 = sourceTitle;
    $this.hde_1 = isLiked;
    $this.ide_1 = state;
    $this.jde_1 = title;
    $this.kde_1 = body;
    $this.lde_1 = noteCount;
    $this.mde_1 = summary;
    $this.nde_1 = slug;
    $this.ode_1 = rebloggedFromId;
    $this.pde_1 = rebloggedFromUrl;
    $this.qde_1 = rebloggedFromName;
    $this.rde_1 = rebloggedFromTitle;
    $this.sde_1 = rebloggedFromUuid;
    $this.tde_1 = rebloggedFromCanMessage;
    $this.ude_1 = rebloggedFromFollowing;
    $this.vde_1 = rebloggedRootId;
    $this.wde_1 = rebloggedRootUrl;
    $this.xde_1 = rebloggedRootName;
    $this.yde_1 = rebloggedRootTitle;
    $this.zde_1 = rebloggedRootUuid;
    $this.adf_1 = rebloggedRootCanMessage;
    $this.bdf_1 = rebloggedRootFollowing;
    $this.cdf_1 = notes;
    $this.ddf_1 = blog;
    $this.edf_1 = reblog;
    $this.fdf_1 = trail;
    $this.caption = null;
    return $this;
  }
  kd0(_set____db54di) {
    this.sdd_1 = _set____db54di;
  }
  ld0() {
    return this.sdd_1;
  }
  td9(_set____db54di) {
    this.tdd_1 = _set____db54di;
  }
  ud9() {
    return this.tdd_1;
  }
  vd9(_set____db54di) {
    this.udd_1 = _set____db54di;
  }
  wd9() {
    return this.udd_1;
  }
  xd9(_set____db54di) {
    this.vdd_1 = _set____db54di;
  }
  yd9() {
    return this.vdd_1;
  }
  zd9(_set____db54di) {
    this.wdd_1 = _set____db54di;
  }
  ada() {
    return this.wdd_1;
  }
  x38(_set____db54di) {
    this.xdd_1 = _set____db54di;
  }
  k38() {
    return this.xdd_1;
  }
  bda(_set____db54di) {
    this.ydd_1 = _set____db54di;
  }
  ud6() {
    return this.ydd_1;
  }
  rd1(_set____db54di) {
    this.zdd_1 = _set____db54di;
  }
  sd1() {
    return this.zdd_1;
  }
  td1(_set____db54di) {
    this.ade_1 = _set____db54di;
  }
  ud1() {
    return this.ade_1;
  }
  kd3(_set____db54di) {
    this.bde_1 = _set____db54di;
  }
  ld3() {
    return this.bde_1;
  }
  mao(_set____db54di) {
    this.cde_1 = _set____db54di;
  }
  haj() {
    return this.cde_1;
  }
  cda(_set____db54di) {
    this.dde_1 = _set____db54di;
  }
  dda() {
    return this.dde_1;
  }
  eda(_set____db54di) {
    this.ede_1 = _set____db54di;
  }
  fda() {
    return this.ede_1;
  }
  l38(_set____db54di) {
    this.fde_1 = _set____db54di;
  }
  m38() {
    return this.fde_1;
  }
  gda(_set____db54di) {
    this.gde_1 = _set____db54di;
  }
  hda() {
    return this.gde_1;
  }
  ida(_set____db54di) {
    this.hde_1 = _set____db54di;
  }
  dar() {
    return this.hde_1;
  }
  cab(_set____db54di) {
    this.ide_1 = _set____db54di;
  }
  f7y() {
    return this.ide_1;
  }
  daj(_set____db54di) {
    this.jde_1 = _set____db54di;
  }
  a3j() {
    return this.jde_1;
  }
  uap(_set____db54di) {
    this.kde_1 = _set____db54di;
  }
  vap() {
    return this.kde_1;
  }
  jda(_set____db54di) {
    this.lde_1 = _set____db54di;
  }
  kda() {
    return this.lde_1;
  }
  paq(_set____db54di) {
    this.mde_1 = _set____db54di;
  }
  qaq() {
    return this.mde_1;
  }
  vd1(_set____db54di) {
    this.nde_1 = _set____db54di;
  }
  wd1() {
    return this.nde_1;
  }
  lda(_set____db54di) {
    this.ode_1 = _set____db54di;
  }
  mda() {
    return this.ode_1;
  }
  nda(_set____db54di) {
    this.pde_1 = _set____db54di;
  }
  oda() {
    return this.pde_1;
  }
  pda(_set____db54di) {
    this.qde_1 = _set____db54di;
  }
  qda() {
    return this.qde_1;
  }
  rda(_set____db54di) {
    this.rde_1 = _set____db54di;
  }
  sda() {
    return this.rde_1;
  }
  tda(_set____db54di) {
    this.sde_1 = _set____db54di;
  }
  uda() {
    return this.sde_1;
  }
  vda(_set____db54di) {
    this.tde_1 = _set____db54di;
  }
  wda() {
    return this.tde_1;
  }
  xda(_set____db54di) {
    this.ude_1 = _set____db54di;
  }
  yda() {
    return this.ude_1;
  }
  zda(_set____db54di) {
    this.vde_1 = _set____db54di;
  }
  adb() {
    return this.vde_1;
  }
  bdb(_set____db54di) {
    this.wde_1 = _set____db54di;
  }
  cdb() {
    return this.wde_1;
  }
  ddb(_set____db54di) {
    this.xde_1 = _set____db54di;
  }
  edb() {
    return this.xde_1;
  }
  fdb(_set____db54di) {
    this.yde_1 = _set____db54di;
  }
  gdb() {
    return this.yde_1;
  }
  hdb(_set____db54di) {
    this.zde_1 = _set____db54di;
  }
  idb() {
    return this.zde_1;
  }
  jdb(_set____db54di) {
    this.adf_1 = _set____db54di;
  }
  kdb() {
    return this.adf_1;
  }
  ldb(_set____db54di) {
    this.bdf_1 = _set____db54di;
  }
  mdb() {
    return this.bdf_1;
  }
  ndb(_set____db54di) {
    this.cdf_1 = _set____db54di;
  }
  odb() {
    return this.cdf_1;
  }
  bd5(_set____db54di) {
    this.ddf_1 = _set____db54di;
  }
  cd5() {
    return this.ddf_1;
  }
  pdb(_set____db54di) {
    this.edf_1 = _set____db54di;
  }
  nbu() {
    return this.edf_1;
  }
  qdb(_set____db54di) {
    this.fdf_1 = _set____db54di;
  }
  rdb() {
    return this.fdf_1;
  }
  id1(_set____db54di) {
    this.caption = _set____db54di;
  }
  jd1() {
    return this.caption;
  }
  static gdf(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, serializationConstructorMarker) {
    Companion_getInstance_22();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_19().qdd_1);
    }
    var $this = this.jd9();
    $this.sdd_1 = blogName;
    $this.tdd_1 = idString;
    $this.udd_1 = genesisPostId;
    $this.vdd_1 = postUrl;
    $this.wdd_1 = parentPostUrl;
    $this.xdd_1 = type;
    $this.ydd_1 = timestamp;
    $this.zdd_1 = date;
    $this.ade_1 = format;
    $this.bde_1 = reblogKey;
    $this.cde_1 = tags;
    $this.dde_1 = isBookmarklet;
    $this.ede_1 = isMobile;
    $this.fde_1 = sourceUrl;
    $this.gde_1 = sourceTitle;
    $this.hde_1 = isLiked;
    $this.ide_1 = state;
    $this.jde_1 = title;
    $this.kde_1 = body;
    $this.lde_1 = noteCount;
    $this.mde_1 = summary;
    $this.nde_1 = slug;
    $this.ode_1 = rebloggedFromId;
    $this.pde_1 = rebloggedFromUrl;
    $this.qde_1 = rebloggedFromName;
    $this.rde_1 = rebloggedFromTitle;
    $this.sde_1 = rebloggedFromUuid;
    $this.tde_1 = rebloggedFromCanMessage;
    $this.ude_1 = rebloggedFromFollowing;
    $this.vde_1 = rebloggedRootId;
    $this.wde_1 = rebloggedRootUrl;
    $this.xde_1 = rebloggedRootName;
    $this.yde_1 = rebloggedRootTitle;
    $this.zde_1 = rebloggedRootUuid;
    $this.adf_1 = rebloggedRootCanMessage;
    $this.bdf_1 = rebloggedRootFollowing;
    $this.cdf_1 = notes;
    $this.ddf_1 = blog;
    $this.edf_1 = reblog;
    $this.fdf_1 = trail;
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
    tmp.idf_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, lazy(tmp_6, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2)];
  }
  p1p() {
    return $serializer_getInstance_20();
  }
}
class $serializer_21 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyChatPost', this, 41);
    tmp0_serialDesc.o1b('blog_name', false);
    tmp0_serialDesc.o1b('id_string', false);
    tmp0_serialDesc.o1b('genesis_post_id', false);
    tmp0_serialDesc.o1b('post_url', false);
    tmp0_serialDesc.o1b('parent_post_url', false);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('timestamp', false);
    tmp0_serialDesc.o1b('date', false);
    tmp0_serialDesc.o1b('format', false);
    tmp0_serialDesc.o1b('reblog_key', false);
    tmp0_serialDesc.o1b('tags', false);
    tmp0_serialDesc.o1b('bookmarklet', false);
    tmp0_serialDesc.o1b('mobile', false);
    tmp0_serialDesc.o1b('source_url', false);
    tmp0_serialDesc.o1b('source_title', false);
    tmp0_serialDesc.o1b('liked', false);
    tmp0_serialDesc.o1b('state', false);
    tmp0_serialDesc.o1b('title', false);
    tmp0_serialDesc.o1b('body', false);
    tmp0_serialDesc.o1b('note_count', false);
    tmp0_serialDesc.o1b('summary', false);
    tmp0_serialDesc.o1b('slug', false);
    tmp0_serialDesc.o1b('reblogged_from_id', false);
    tmp0_serialDesc.o1b('reblogged_from_url', false);
    tmp0_serialDesc.o1b('reblogged_from_name', false);
    tmp0_serialDesc.o1b('reblogged_from_title', false);
    tmp0_serialDesc.o1b('reblogged_from_uuid', false);
    tmp0_serialDesc.o1b('reblogged_from_can_message', false);
    tmp0_serialDesc.o1b('reblogged_from_following', false);
    tmp0_serialDesc.o1b('reblogged_root_id', false);
    tmp0_serialDesc.o1b('reblogged_root_url', false);
    tmp0_serialDesc.o1b('reblogged_root_name', false);
    tmp0_serialDesc.o1b('reblogged_root_title', false);
    tmp0_serialDesc.o1b('reblogged_root_uuid', false);
    tmp0_serialDesc.o1b('reblogged_root_can_message', false);
    tmp0_serialDesc.o1b('reblogged_root_following', false);
    tmp0_serialDesc.o1b('notes', false);
    tmp0_serialDesc.o1b('blog', false);
    tmp0_serialDesc.o1b('reblog', false);
    tmp0_serialDesc.o1b('trail', false);
    tmp0_serialDesc.o1b('dialogue', true);
    this.jdf_1 = tmp0_serialDesc;
  }
  kdf(encoder, value) {
    var tmp0_desc = this.jdf_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().idf_1;
    tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.ldf_1);
    tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.mdf_1);
    tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.ndf_1);
    tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.odf_1);
    tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.pdf_1);
    tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.qdf_1);
    tmp1_output.o15(tmp0_desc, 6, IntSerializer_getInstance(), value.rdf_1);
    tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.sdf_1);
    tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.tdf_1);
    tmp1_output.o15(tmp0_desc, 9, StringSerializer_getInstance(), value.udf_1);
    tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.vdf_1);
    tmp1_output.o15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.wdf_1);
    tmp1_output.o15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.xdf_1);
    tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.ydf_1);
    tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.zdf_1);
    tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.adg_1);
    tmp1_output.o15(tmp0_desc, 16, StringSerializer_getInstance(), value.bdg_1);
    tmp1_output.o15(tmp0_desc, 17, StringSerializer_getInstance(), value.cdg_1);
    tmp1_output.o15(tmp0_desc, 18, StringSerializer_getInstance(), value.ddg_1);
    tmp1_output.o15(tmp0_desc, 19, IntSerializer_getInstance(), value.edg_1);
    tmp1_output.o15(tmp0_desc, 20, StringSerializer_getInstance(), value.fdg_1);
    tmp1_output.o15(tmp0_desc, 21, StringSerializer_getInstance(), value.gdg_1);
    tmp1_output.o15(tmp0_desc, 22, StringSerializer_getInstance(), value.hdg_1);
    tmp1_output.o15(tmp0_desc, 23, StringSerializer_getInstance(), value.idg_1);
    tmp1_output.o15(tmp0_desc, 24, StringSerializer_getInstance(), value.jdg_1);
    tmp1_output.o15(tmp0_desc, 25, StringSerializer_getInstance(), value.kdg_1);
    tmp1_output.o15(tmp0_desc, 26, StringSerializer_getInstance(), value.ldg_1);
    tmp1_output.o15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.mdg_1);
    tmp1_output.o15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.ndg_1);
    tmp1_output.o15(tmp0_desc, 29, StringSerializer_getInstance(), value.odg_1);
    tmp1_output.o15(tmp0_desc, 30, StringSerializer_getInstance(), value.pdg_1);
    tmp1_output.o15(tmp0_desc, 31, StringSerializer_getInstance(), value.qdg_1);
    tmp1_output.o15(tmp0_desc, 32, StringSerializer_getInstance(), value.rdg_1);
    tmp1_output.o15(tmp0_desc, 33, StringSerializer_getInstance(), value.sdg_1);
    tmp1_output.o15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.tdg_1);
    tmp1_output.o15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.udg_1);
    tmp1_output.o15(tmp0_desc, 36, tmp2_cached[36].d3(), value.vdg_1);
    tmp1_output.o15(tmp0_desc, 37, $serializer_getInstance_14(), value.wdg_1);
    tmp1_output.o15(tmp0_desc, 38, $serializer_getInstance_17(), value.xdg_1);
    tmp1_output.o15(tmp0_desc, 39, tmp2_cached[39].d3(), value.ydg_1);
    if (tmp1_output.s15(tmp0_desc, 40) ? true : !(value.dialogue == null)) {
      tmp1_output.o15(tmp0_desc, 40, tmp2_cached[40].d3(), value.dialogue);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.kdf(encoder, value instanceof LegacyChatPost ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.jdf_1;
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
    var tmp46_input = decoder.w13(tmp0_desc);
    var tmp47_cached = Companion_getInstance_23().idf_1;
    if (tmp46_input.l14()) {
      tmp5_local0 = tmp46_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.k14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.k14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.k14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.k14(tmp0_desc, 40, tmp47_cached[40].d3(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.k14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.k14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.k14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.k14(tmp0_desc, 40, tmp47_cached[40].d3(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp46_input.x13(tmp0_desc);
    return LegacyChatPost.zdg(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  ez() {
    return this.jdf_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_23().idf_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(tmp0_cached[40].d3())];
  }
}
class LegacyChatPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.adh(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static adh(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_23();
    var $this = this.jd9();
    $this.ldf_1 = blogName;
    $this.mdf_1 = idString;
    $this.ndf_1 = genesisPostId;
    $this.odf_1 = postUrl;
    $this.pdf_1 = parentPostUrl;
    $this.qdf_1 = type;
    $this.rdf_1 = timestamp;
    $this.sdf_1 = date;
    $this.tdf_1 = format;
    $this.udf_1 = reblogKey;
    $this.vdf_1 = tags;
    $this.wdf_1 = isBookmarklet;
    $this.xdf_1 = isMobile;
    $this.ydf_1 = sourceUrl;
    $this.zdf_1 = sourceTitle;
    $this.adg_1 = isLiked;
    $this.bdg_1 = state;
    $this.cdg_1 = title;
    $this.ddg_1 = body;
    $this.edg_1 = noteCount;
    $this.fdg_1 = summary;
    $this.gdg_1 = slug;
    $this.hdg_1 = rebloggedFromId;
    $this.idg_1 = rebloggedFromUrl;
    $this.jdg_1 = rebloggedFromName;
    $this.kdg_1 = rebloggedFromTitle;
    $this.ldg_1 = rebloggedFromUuid;
    $this.mdg_1 = rebloggedFromCanMessage;
    $this.ndg_1 = rebloggedFromFollowing;
    $this.odg_1 = rebloggedRootId;
    $this.pdg_1 = rebloggedRootUrl;
    $this.qdg_1 = rebloggedRootName;
    $this.rdg_1 = rebloggedRootTitle;
    $this.sdg_1 = rebloggedRootUuid;
    $this.tdg_1 = rebloggedRootCanMessage;
    $this.udg_1 = rebloggedRootFollowing;
    $this.vdg_1 = notes;
    $this.wdg_1 = blog;
    $this.xdg_1 = reblog;
    $this.ydg_1 = trail;
    $this.dialogue = null;
    return $this;
  }
  kd0(_set____db54di) {
    this.ldf_1 = _set____db54di;
  }
  ld0() {
    return this.ldf_1;
  }
  td9(_set____db54di) {
    this.mdf_1 = _set____db54di;
  }
  ud9() {
    return this.mdf_1;
  }
  vd9(_set____db54di) {
    this.ndf_1 = _set____db54di;
  }
  wd9() {
    return this.ndf_1;
  }
  xd9(_set____db54di) {
    this.odf_1 = _set____db54di;
  }
  yd9() {
    return this.odf_1;
  }
  zd9(_set____db54di) {
    this.pdf_1 = _set____db54di;
  }
  ada() {
    return this.pdf_1;
  }
  x38(_set____db54di) {
    this.qdf_1 = _set____db54di;
  }
  k38() {
    return this.qdf_1;
  }
  bda(_set____db54di) {
    this.rdf_1 = _set____db54di;
  }
  ud6() {
    return this.rdf_1;
  }
  rd1(_set____db54di) {
    this.sdf_1 = _set____db54di;
  }
  sd1() {
    return this.sdf_1;
  }
  td1(_set____db54di) {
    this.tdf_1 = _set____db54di;
  }
  ud1() {
    return this.tdf_1;
  }
  kd3(_set____db54di) {
    this.udf_1 = _set____db54di;
  }
  ld3() {
    return this.udf_1;
  }
  mao(_set____db54di) {
    this.vdf_1 = _set____db54di;
  }
  haj() {
    return this.vdf_1;
  }
  cda(_set____db54di) {
    this.wdf_1 = _set____db54di;
  }
  dda() {
    return this.wdf_1;
  }
  eda(_set____db54di) {
    this.xdf_1 = _set____db54di;
  }
  fda() {
    return this.xdf_1;
  }
  l38(_set____db54di) {
    this.ydf_1 = _set____db54di;
  }
  m38() {
    return this.ydf_1;
  }
  gda(_set____db54di) {
    this.zdf_1 = _set____db54di;
  }
  hda() {
    return this.zdf_1;
  }
  ida(_set____db54di) {
    this.adg_1 = _set____db54di;
  }
  dar() {
    return this.adg_1;
  }
  cab(_set____db54di) {
    this.bdg_1 = _set____db54di;
  }
  f7y() {
    return this.bdg_1;
  }
  daj(_set____db54di) {
    this.cdg_1 = _set____db54di;
  }
  a3j() {
    return this.cdg_1;
  }
  uap(_set____db54di) {
    this.ddg_1 = _set____db54di;
  }
  vap() {
    return this.ddg_1;
  }
  jda(_set____db54di) {
    this.edg_1 = _set____db54di;
  }
  kda() {
    return this.edg_1;
  }
  paq(_set____db54di) {
    this.fdg_1 = _set____db54di;
  }
  qaq() {
    return this.fdg_1;
  }
  vd1(_set____db54di) {
    this.gdg_1 = _set____db54di;
  }
  wd1() {
    return this.gdg_1;
  }
  lda(_set____db54di) {
    this.hdg_1 = _set____db54di;
  }
  mda() {
    return this.hdg_1;
  }
  nda(_set____db54di) {
    this.idg_1 = _set____db54di;
  }
  oda() {
    return this.idg_1;
  }
  pda(_set____db54di) {
    this.jdg_1 = _set____db54di;
  }
  qda() {
    return this.jdg_1;
  }
  rda(_set____db54di) {
    this.kdg_1 = _set____db54di;
  }
  sda() {
    return this.kdg_1;
  }
  tda(_set____db54di) {
    this.ldg_1 = _set____db54di;
  }
  uda() {
    return this.ldg_1;
  }
  vda(_set____db54di) {
    this.mdg_1 = _set____db54di;
  }
  wda() {
    return this.mdg_1;
  }
  xda(_set____db54di) {
    this.ndg_1 = _set____db54di;
  }
  yda() {
    return this.ndg_1;
  }
  zda(_set____db54di) {
    this.odg_1 = _set____db54di;
  }
  adb() {
    return this.odg_1;
  }
  bdb(_set____db54di) {
    this.pdg_1 = _set____db54di;
  }
  cdb() {
    return this.pdg_1;
  }
  ddb(_set____db54di) {
    this.qdg_1 = _set____db54di;
  }
  edb() {
    return this.qdg_1;
  }
  fdb(_set____db54di) {
    this.rdg_1 = _set____db54di;
  }
  gdb() {
    return this.rdg_1;
  }
  hdb(_set____db54di) {
    this.sdg_1 = _set____db54di;
  }
  idb() {
    return this.sdg_1;
  }
  jdb(_set____db54di) {
    this.tdg_1 = _set____db54di;
  }
  kdb() {
    return this.tdg_1;
  }
  ldb(_set____db54di) {
    this.udg_1 = _set____db54di;
  }
  mdb() {
    return this.udg_1;
  }
  ndb(_set____db54di) {
    this.vdg_1 = _set____db54di;
  }
  odb() {
    return this.vdg_1;
  }
  bd5(_set____db54di) {
    this.wdg_1 = _set____db54di;
  }
  cd5() {
    return this.wdg_1;
  }
  pdb(_set____db54di) {
    this.xdg_1 = _set____db54di;
  }
  nbu() {
    return this.xdg_1;
  }
  qdb(_set____db54di) {
    this.ydg_1 = _set____db54di;
  }
  rdb() {
    return this.ydg_1;
  }
  bdh() {
    return this.dialogue;
  }
  static zdg(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, dialogue, serializationConstructorMarker) {
    Companion_getInstance_23();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_20().jdf_1);
    }
    var $this = this.jd9();
    $this.ldf_1 = blogName;
    $this.mdf_1 = idString;
    $this.ndf_1 = genesisPostId;
    $this.odf_1 = postUrl;
    $this.pdf_1 = parentPostUrl;
    $this.qdf_1 = type;
    $this.rdf_1 = timestamp;
    $this.sdf_1 = date;
    $this.tdf_1 = format;
    $this.udf_1 = reblogKey;
    $this.vdf_1 = tags;
    $this.wdf_1 = isBookmarklet;
    $this.xdf_1 = isMobile;
    $this.ydf_1 = sourceUrl;
    $this.zdf_1 = sourceTitle;
    $this.adg_1 = isLiked;
    $this.bdg_1 = state;
    $this.cdg_1 = title;
    $this.ddg_1 = body;
    $this.edg_1 = noteCount;
    $this.fdg_1 = summary;
    $this.gdg_1 = slug;
    $this.hdg_1 = rebloggedFromId;
    $this.idg_1 = rebloggedFromUrl;
    $this.jdg_1 = rebloggedFromName;
    $this.kdg_1 = rebloggedFromTitle;
    $this.ldg_1 = rebloggedFromUuid;
    $this.mdg_1 = rebloggedFromCanMessage;
    $this.ndg_1 = rebloggedFromFollowing;
    $this.odg_1 = rebloggedRootId;
    $this.pdg_1 = rebloggedRootUrl;
    $this.qdg_1 = rebloggedRootName;
    $this.rdg_1 = rebloggedRootTitle;
    $this.sdg_1 = rebloggedRootUuid;
    $this.tdg_1 = rebloggedRootCanMessage;
    $this.udg_1 = rebloggedRootFollowing;
    $this.vdg_1 = notes;
    $this.wdg_1 = blog;
    $this.xdg_1 = reblog;
    $this.ydg_1 = trail;
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
    tmp.cdh_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1), null, null, null, null, null];
  }
  p1p() {
    return $serializer_getInstance_21();
  }
}
class $serializer_22 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyLinkPost', this, 45);
    tmp0_serialDesc.o1b('blog_name', false);
    tmp0_serialDesc.o1b('id_string', false);
    tmp0_serialDesc.o1b('genesis_post_id', false);
    tmp0_serialDesc.o1b('post_url', false);
    tmp0_serialDesc.o1b('parent_post_url', false);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('timestamp', false);
    tmp0_serialDesc.o1b('date', false);
    tmp0_serialDesc.o1b('format', false);
    tmp0_serialDesc.o1b('reblog_key', false);
    tmp0_serialDesc.o1b('tags', false);
    tmp0_serialDesc.o1b('bookmarklet', false);
    tmp0_serialDesc.o1b('mobile', false);
    tmp0_serialDesc.o1b('source_url', false);
    tmp0_serialDesc.o1b('source_title', false);
    tmp0_serialDesc.o1b('liked', false);
    tmp0_serialDesc.o1b('state', false);
    tmp0_serialDesc.o1b('title', false);
    tmp0_serialDesc.o1b('body', false);
    tmp0_serialDesc.o1b('note_count', false);
    tmp0_serialDesc.o1b('summary', false);
    tmp0_serialDesc.o1b('slug', false);
    tmp0_serialDesc.o1b('reblogged_from_id', false);
    tmp0_serialDesc.o1b('reblogged_from_url', false);
    tmp0_serialDesc.o1b('reblogged_from_name', false);
    tmp0_serialDesc.o1b('reblogged_from_title', false);
    tmp0_serialDesc.o1b('reblogged_from_uuid', false);
    tmp0_serialDesc.o1b('reblogged_from_can_message', false);
    tmp0_serialDesc.o1b('reblogged_from_following', false);
    tmp0_serialDesc.o1b('reblogged_root_id', false);
    tmp0_serialDesc.o1b('reblogged_root_url', false);
    tmp0_serialDesc.o1b('reblogged_root_name', false);
    tmp0_serialDesc.o1b('reblogged_root_title', false);
    tmp0_serialDesc.o1b('reblogged_root_uuid', false);
    tmp0_serialDesc.o1b('reblogged_root_can_message', false);
    tmp0_serialDesc.o1b('reblogged_root_following', false);
    tmp0_serialDesc.o1b('notes', false);
    tmp0_serialDesc.o1b('blog', false);
    tmp0_serialDesc.o1b('reblog', false);
    tmp0_serialDesc.o1b('trail', false);
    tmp0_serialDesc.o1b('description', true);
    tmp0_serialDesc.o1b('url', true);
    tmp0_serialDesc.o1b('link_author', true);
    tmp0_serialDesc.o1b('excerpt', true);
    tmp0_serialDesc.o1b('publisher', true);
    this.ddh_1 = tmp0_serialDesc;
  }
  edh(encoder, value) {
    var tmp0_desc = this.ddh_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().cdh_1;
    tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.fdh_1);
    tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.gdh_1);
    tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.hdh_1);
    tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.idh_1);
    tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.jdh_1);
    tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.kdh_1);
    tmp1_output.o15(tmp0_desc, 6, IntSerializer_getInstance(), value.ldh_1);
    tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.mdh_1);
    tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.ndh_1);
    tmp1_output.o15(tmp0_desc, 9, StringSerializer_getInstance(), value.odh_1);
    tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.pdh_1);
    tmp1_output.o15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.qdh_1);
    tmp1_output.o15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.rdh_1);
    tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.sdh_1);
    tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.tdh_1);
    tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.udh_1);
    tmp1_output.o15(tmp0_desc, 16, StringSerializer_getInstance(), value.vdh_1);
    tmp1_output.o15(tmp0_desc, 17, StringSerializer_getInstance(), value.wdh_1);
    tmp1_output.o15(tmp0_desc, 18, StringSerializer_getInstance(), value.xdh_1);
    tmp1_output.o15(tmp0_desc, 19, IntSerializer_getInstance(), value.ydh_1);
    tmp1_output.o15(tmp0_desc, 20, StringSerializer_getInstance(), value.zdh_1);
    tmp1_output.o15(tmp0_desc, 21, StringSerializer_getInstance(), value.adi_1);
    tmp1_output.o15(tmp0_desc, 22, StringSerializer_getInstance(), value.bdi_1);
    tmp1_output.o15(tmp0_desc, 23, StringSerializer_getInstance(), value.cdi_1);
    tmp1_output.o15(tmp0_desc, 24, StringSerializer_getInstance(), value.ddi_1);
    tmp1_output.o15(tmp0_desc, 25, StringSerializer_getInstance(), value.edi_1);
    tmp1_output.o15(tmp0_desc, 26, StringSerializer_getInstance(), value.fdi_1);
    tmp1_output.o15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.gdi_1);
    tmp1_output.o15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.hdi_1);
    tmp1_output.o15(tmp0_desc, 29, StringSerializer_getInstance(), value.idi_1);
    tmp1_output.o15(tmp0_desc, 30, StringSerializer_getInstance(), value.jdi_1);
    tmp1_output.o15(tmp0_desc, 31, StringSerializer_getInstance(), value.kdi_1);
    tmp1_output.o15(tmp0_desc, 32, StringSerializer_getInstance(), value.ldi_1);
    tmp1_output.o15(tmp0_desc, 33, StringSerializer_getInstance(), value.mdi_1);
    tmp1_output.o15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.ndi_1);
    tmp1_output.o15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.odi_1);
    tmp1_output.o15(tmp0_desc, 36, tmp2_cached[36].d3(), value.pdi_1);
    tmp1_output.o15(tmp0_desc, 37, $serializer_getInstance_14(), value.qdi_1);
    tmp1_output.o15(tmp0_desc, 38, $serializer_getInstance_17(), value.rdi_1);
    tmp1_output.o15(tmp0_desc, 39, tmp2_cached[39].d3(), value.sdi_1);
    if (tmp1_output.s15(tmp0_desc, 40) ? true : !(value.description == null)) {
      tmp1_output.o15(tmp0_desc, 40, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.s15(tmp0_desc, 41) ? true : !(value.url == null)) {
      tmp1_output.o15(tmp0_desc, 41, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.s15(tmp0_desc, 42) ? true : !(value.linkAuthor == null)) {
      tmp1_output.o15(tmp0_desc, 42, StringSerializer_getInstance(), value.linkAuthor);
    }
    if (tmp1_output.s15(tmp0_desc, 43) ? true : !(value.excerpt == null)) {
      tmp1_output.o15(tmp0_desc, 43, StringSerializer_getInstance(), value.excerpt);
    }
    if (tmp1_output.s15(tmp0_desc, 44) ? true : !(value.publisher == null)) {
      tmp1_output.o15(tmp0_desc, 44, StringSerializer_getInstance(), value.publisher);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.edh(encoder, value instanceof LegacyLinkPost ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.ddh_1;
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
    var tmp50_input = decoder.w13(tmp0_desc);
    var tmp51_cached = Companion_getInstance_24().cdh_1;
    if (tmp50_input.l14()) {
      tmp5_local0 = tmp50_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp50_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp50_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp50_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp50_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp50_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp50_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp50_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp50_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp50_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp50_input.k14(tmp0_desc, 10, tmp51_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp50_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp50_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp50_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp50_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp50_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp50_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp50_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp50_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp50_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp50_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp50_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp50_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp50_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp50_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp50_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp50_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp50_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp50_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp50_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp50_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp50_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp50_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp50_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp50_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp50_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp50_input.k14(tmp0_desc, 36, tmp51_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp50_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp50_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp50_input.k14(tmp0_desc, 39, tmp51_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp50_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp50_input.k14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp50_input.k14(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp50_input.k14(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp50_input.k14(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp50_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp50_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp50_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp50_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp50_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp50_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp50_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp50_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp50_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp50_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp50_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp50_input.k14(tmp0_desc, 10, tmp51_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp50_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp50_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp50_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp50_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp50_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp50_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp50_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp50_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp50_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp50_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp50_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp50_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp50_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp50_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp50_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp50_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp50_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp50_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp50_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp50_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp50_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp50_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp50_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp50_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp50_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp50_input.k14(tmp0_desc, 36, tmp51_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp50_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp50_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp50_input.k14(tmp0_desc, 39, tmp51_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp50_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp50_input.k14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp50_input.k14(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp50_input.k14(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp50_input.k14(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp50_input.x13(tmp0_desc);
    return LegacyLinkPost.tdi(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, null);
  }
  ez() {
    return this.ddh_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_24().cdh_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyLinkPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.udi(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static udi(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_24();
    var $this = this.jd9();
    $this.fdh_1 = blogName;
    $this.gdh_1 = idString;
    $this.hdh_1 = genesisPostId;
    $this.idh_1 = postUrl;
    $this.jdh_1 = parentPostUrl;
    $this.kdh_1 = type;
    $this.ldh_1 = timestamp;
    $this.mdh_1 = date;
    $this.ndh_1 = format;
    $this.odh_1 = reblogKey;
    $this.pdh_1 = tags;
    $this.qdh_1 = isBookmarklet;
    $this.rdh_1 = isMobile;
    $this.sdh_1 = sourceUrl;
    $this.tdh_1 = sourceTitle;
    $this.udh_1 = isLiked;
    $this.vdh_1 = state;
    $this.wdh_1 = title;
    $this.xdh_1 = body;
    $this.ydh_1 = noteCount;
    $this.zdh_1 = summary;
    $this.adi_1 = slug;
    $this.bdi_1 = rebloggedFromId;
    $this.cdi_1 = rebloggedFromUrl;
    $this.ddi_1 = rebloggedFromName;
    $this.edi_1 = rebloggedFromTitle;
    $this.fdi_1 = rebloggedFromUuid;
    $this.gdi_1 = rebloggedFromCanMessage;
    $this.hdi_1 = rebloggedFromFollowing;
    $this.idi_1 = rebloggedRootId;
    $this.jdi_1 = rebloggedRootUrl;
    $this.kdi_1 = rebloggedRootName;
    $this.ldi_1 = rebloggedRootTitle;
    $this.mdi_1 = rebloggedRootUuid;
    $this.ndi_1 = rebloggedRootCanMessage;
    $this.odi_1 = rebloggedRootFollowing;
    $this.pdi_1 = notes;
    $this.qdi_1 = blog;
    $this.rdi_1 = reblog;
    $this.sdi_1 = trail;
    $this.description = null;
    $this.url = null;
    $this.linkAuthor = null;
    $this.excerpt = null;
    $this.publisher = null;
    return $this;
  }
  kd0(_set____db54di) {
    this.fdh_1 = _set____db54di;
  }
  ld0() {
    return this.fdh_1;
  }
  td9(_set____db54di) {
    this.gdh_1 = _set____db54di;
  }
  ud9() {
    return this.gdh_1;
  }
  vd9(_set____db54di) {
    this.hdh_1 = _set____db54di;
  }
  wd9() {
    return this.hdh_1;
  }
  xd9(_set____db54di) {
    this.idh_1 = _set____db54di;
  }
  yd9() {
    return this.idh_1;
  }
  zd9(_set____db54di) {
    this.jdh_1 = _set____db54di;
  }
  ada() {
    return this.jdh_1;
  }
  x38(_set____db54di) {
    this.kdh_1 = _set____db54di;
  }
  k38() {
    return this.kdh_1;
  }
  bda(_set____db54di) {
    this.ldh_1 = _set____db54di;
  }
  ud6() {
    return this.ldh_1;
  }
  rd1(_set____db54di) {
    this.mdh_1 = _set____db54di;
  }
  sd1() {
    return this.mdh_1;
  }
  td1(_set____db54di) {
    this.ndh_1 = _set____db54di;
  }
  ud1() {
    return this.ndh_1;
  }
  kd3(_set____db54di) {
    this.odh_1 = _set____db54di;
  }
  ld3() {
    return this.odh_1;
  }
  mao(_set____db54di) {
    this.pdh_1 = _set____db54di;
  }
  haj() {
    return this.pdh_1;
  }
  cda(_set____db54di) {
    this.qdh_1 = _set____db54di;
  }
  dda() {
    return this.qdh_1;
  }
  eda(_set____db54di) {
    this.rdh_1 = _set____db54di;
  }
  fda() {
    return this.rdh_1;
  }
  l38(_set____db54di) {
    this.sdh_1 = _set____db54di;
  }
  m38() {
    return this.sdh_1;
  }
  gda(_set____db54di) {
    this.tdh_1 = _set____db54di;
  }
  hda() {
    return this.tdh_1;
  }
  ida(_set____db54di) {
    this.udh_1 = _set____db54di;
  }
  dar() {
    return this.udh_1;
  }
  cab(_set____db54di) {
    this.vdh_1 = _set____db54di;
  }
  f7y() {
    return this.vdh_1;
  }
  daj(_set____db54di) {
    this.wdh_1 = _set____db54di;
  }
  a3j() {
    return this.wdh_1;
  }
  uap(_set____db54di) {
    this.xdh_1 = _set____db54di;
  }
  vap() {
    return this.xdh_1;
  }
  jda(_set____db54di) {
    this.ydh_1 = _set____db54di;
  }
  kda() {
    return this.ydh_1;
  }
  paq(_set____db54di) {
    this.zdh_1 = _set____db54di;
  }
  qaq() {
    return this.zdh_1;
  }
  vd1(_set____db54di) {
    this.adi_1 = _set____db54di;
  }
  wd1() {
    return this.adi_1;
  }
  lda(_set____db54di) {
    this.bdi_1 = _set____db54di;
  }
  mda() {
    return this.bdi_1;
  }
  nda(_set____db54di) {
    this.cdi_1 = _set____db54di;
  }
  oda() {
    return this.cdi_1;
  }
  pda(_set____db54di) {
    this.ddi_1 = _set____db54di;
  }
  qda() {
    return this.ddi_1;
  }
  rda(_set____db54di) {
    this.edi_1 = _set____db54di;
  }
  sda() {
    return this.edi_1;
  }
  tda(_set____db54di) {
    this.fdi_1 = _set____db54di;
  }
  uda() {
    return this.fdi_1;
  }
  vda(_set____db54di) {
    this.gdi_1 = _set____db54di;
  }
  wda() {
    return this.gdi_1;
  }
  xda(_set____db54di) {
    this.hdi_1 = _set____db54di;
  }
  yda() {
    return this.hdi_1;
  }
  zda(_set____db54di) {
    this.idi_1 = _set____db54di;
  }
  adb() {
    return this.idi_1;
  }
  bdb(_set____db54di) {
    this.jdi_1 = _set____db54di;
  }
  cdb() {
    return this.jdi_1;
  }
  ddb(_set____db54di) {
    this.kdi_1 = _set____db54di;
  }
  edb() {
    return this.kdi_1;
  }
  fdb(_set____db54di) {
    this.ldi_1 = _set____db54di;
  }
  gdb() {
    return this.ldi_1;
  }
  hdb(_set____db54di) {
    this.mdi_1 = _set____db54di;
  }
  idb() {
    return this.mdi_1;
  }
  jdb(_set____db54di) {
    this.ndi_1 = _set____db54di;
  }
  kdb() {
    return this.ndi_1;
  }
  ldb(_set____db54di) {
    this.odi_1 = _set____db54di;
  }
  mdb() {
    return this.odi_1;
  }
  ndb(_set____db54di) {
    this.pdi_1 = _set____db54di;
  }
  odb() {
    return this.pdi_1;
  }
  bd5(_set____db54di) {
    this.qdi_1 = _set____db54di;
  }
  cd5() {
    return this.qdi_1;
  }
  pdb(_set____db54di) {
    this.rdi_1 = _set____db54di;
  }
  nbu() {
    return this.rdi_1;
  }
  qdb(_set____db54di) {
    this.sdi_1 = _set____db54di;
  }
  rdb() {
    return this.sdi_1;
  }
  c37(_set____db54di) {
    this.description = _set____db54di;
  }
  m36() {
    return this.description;
  }
  a9l(_set____db54di) {
    this.url = _set____db54di;
  }
  m4n() {
    return this.url;
  }
  vdi(_set____db54di) {
    this.linkAuthor = _set____db54di;
  }
  wdi() {
    return this.linkAuthor;
  }
  bd2(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  cd2() {
    return this.excerpt;
  }
  xdi(_set____db54di) {
    this.publisher = _set____db54di;
  }
  ydi() {
    return this.publisher;
  }
  static tdi(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, description, url, linkAuthor, excerpt, publisher, serializationConstructorMarker) {
    Companion_getInstance_24();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_21().ddh_1);
    }
    var $this = this.jd9();
    $this.fdh_1 = blogName;
    $this.gdh_1 = idString;
    $this.hdh_1 = genesisPostId;
    $this.idh_1 = postUrl;
    $this.jdh_1 = parentPostUrl;
    $this.kdh_1 = type;
    $this.ldh_1 = timestamp;
    $this.mdh_1 = date;
    $this.ndh_1 = format;
    $this.odh_1 = reblogKey;
    $this.pdh_1 = tags;
    $this.qdh_1 = isBookmarklet;
    $this.rdh_1 = isMobile;
    $this.sdh_1 = sourceUrl;
    $this.tdh_1 = sourceTitle;
    $this.udh_1 = isLiked;
    $this.vdh_1 = state;
    $this.wdh_1 = title;
    $this.xdh_1 = body;
    $this.ydh_1 = noteCount;
    $this.zdh_1 = summary;
    $this.adi_1 = slug;
    $this.bdi_1 = rebloggedFromId;
    $this.cdi_1 = rebloggedFromUrl;
    $this.ddi_1 = rebloggedFromName;
    $this.edi_1 = rebloggedFromTitle;
    $this.fdi_1 = rebloggedFromUuid;
    $this.gdi_1 = rebloggedFromCanMessage;
    $this.hdi_1 = rebloggedFromFollowing;
    $this.idi_1 = rebloggedRootId;
    $this.jdi_1 = rebloggedRootUrl;
    $this.kdi_1 = rebloggedRootName;
    $this.ldi_1 = rebloggedRootTitle;
    $this.mdi_1 = rebloggedRootUuid;
    $this.ndi_1 = rebloggedRootCanMessage;
    $this.odi_1 = rebloggedRootFollowing;
    $this.pdi_1 = notes;
    $this.qdi_1 = blog;
    $this.rdi_1 = reblog;
    $this.sdi_1 = trail;
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
    tmp.zdi_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, null, null, lazy(tmp_6, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2)];
  }
  p1p() {
    return $serializer_getInstance_22();
  }
}
class $serializer_23 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPhotoPost', this, 44);
    tmp0_serialDesc.o1b('blog_name', false);
    tmp0_serialDesc.o1b('id_string', false);
    tmp0_serialDesc.o1b('genesis_post_id', false);
    tmp0_serialDesc.o1b('post_url', false);
    tmp0_serialDesc.o1b('parent_post_url', false);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('timestamp', false);
    tmp0_serialDesc.o1b('date', false);
    tmp0_serialDesc.o1b('format', false);
    tmp0_serialDesc.o1b('reblog_key', false);
    tmp0_serialDesc.o1b('tags', false);
    tmp0_serialDesc.o1b('bookmarklet', false);
    tmp0_serialDesc.o1b('mobile', false);
    tmp0_serialDesc.o1b('source_url', false);
    tmp0_serialDesc.o1b('source_title', false);
    tmp0_serialDesc.o1b('liked', false);
    tmp0_serialDesc.o1b('state', false);
    tmp0_serialDesc.o1b('title', false);
    tmp0_serialDesc.o1b('body', false);
    tmp0_serialDesc.o1b('note_count', false);
    tmp0_serialDesc.o1b('summary', false);
    tmp0_serialDesc.o1b('slug', false);
    tmp0_serialDesc.o1b('reblogged_from_id', false);
    tmp0_serialDesc.o1b('reblogged_from_url', false);
    tmp0_serialDesc.o1b('reblogged_from_name', false);
    tmp0_serialDesc.o1b('reblogged_from_title', false);
    tmp0_serialDesc.o1b('reblogged_from_uuid', false);
    tmp0_serialDesc.o1b('reblogged_from_can_message', false);
    tmp0_serialDesc.o1b('reblogged_from_following', false);
    tmp0_serialDesc.o1b('reblogged_root_id', false);
    tmp0_serialDesc.o1b('reblogged_root_url', false);
    tmp0_serialDesc.o1b('reblogged_root_name', false);
    tmp0_serialDesc.o1b('reblogged_root_title', false);
    tmp0_serialDesc.o1b('reblogged_root_uuid', false);
    tmp0_serialDesc.o1b('reblogged_root_can_message', false);
    tmp0_serialDesc.o1b('reblogged_root_following', false);
    tmp0_serialDesc.o1b('notes', false);
    tmp0_serialDesc.o1b('blog', false);
    tmp0_serialDesc.o1b('reblog', false);
    tmp0_serialDesc.o1b('trail', false);
    tmp0_serialDesc.o1b('caption', true);
    tmp0_serialDesc.o1b('width', true);
    tmp0_serialDesc.o1b('height', true);
    tmp0_serialDesc.o1b('photos', true);
    this.adj_1 = tmp0_serialDesc;
  }
  bdj(encoder, value) {
    var tmp0_desc = this.adj_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().zdi_1;
    tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.cdj_1);
    tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.ddj_1);
    tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.edj_1);
    tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.fdj_1);
    tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.gdj_1);
    tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.hdj_1);
    tmp1_output.o15(tmp0_desc, 6, IntSerializer_getInstance(), value.idj_1);
    tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.jdj_1);
    tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.kdj_1);
    tmp1_output.o15(tmp0_desc, 9, StringSerializer_getInstance(), value.ldj_1);
    tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.mdj_1);
    tmp1_output.o15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.ndj_1);
    tmp1_output.o15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.odj_1);
    tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.pdj_1);
    tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.qdj_1);
    tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.rdj_1);
    tmp1_output.o15(tmp0_desc, 16, StringSerializer_getInstance(), value.sdj_1);
    tmp1_output.o15(tmp0_desc, 17, StringSerializer_getInstance(), value.tdj_1);
    tmp1_output.o15(tmp0_desc, 18, StringSerializer_getInstance(), value.udj_1);
    tmp1_output.o15(tmp0_desc, 19, IntSerializer_getInstance(), value.vdj_1);
    tmp1_output.o15(tmp0_desc, 20, StringSerializer_getInstance(), value.wdj_1);
    tmp1_output.o15(tmp0_desc, 21, StringSerializer_getInstance(), value.xdj_1);
    tmp1_output.o15(tmp0_desc, 22, StringSerializer_getInstance(), value.ydj_1);
    tmp1_output.o15(tmp0_desc, 23, StringSerializer_getInstance(), value.zdj_1);
    tmp1_output.o15(tmp0_desc, 24, StringSerializer_getInstance(), value.adk_1);
    tmp1_output.o15(tmp0_desc, 25, StringSerializer_getInstance(), value.bdk_1);
    tmp1_output.o15(tmp0_desc, 26, StringSerializer_getInstance(), value.cdk_1);
    tmp1_output.o15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ddk_1);
    tmp1_output.o15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.edk_1);
    tmp1_output.o15(tmp0_desc, 29, StringSerializer_getInstance(), value.fdk_1);
    tmp1_output.o15(tmp0_desc, 30, StringSerializer_getInstance(), value.gdk_1);
    tmp1_output.o15(tmp0_desc, 31, StringSerializer_getInstance(), value.hdk_1);
    tmp1_output.o15(tmp0_desc, 32, StringSerializer_getInstance(), value.idk_1);
    tmp1_output.o15(tmp0_desc, 33, StringSerializer_getInstance(), value.jdk_1);
    tmp1_output.o15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.kdk_1);
    tmp1_output.o15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ldk_1);
    tmp1_output.o15(tmp0_desc, 36, tmp2_cached[36].d3(), value.mdk_1);
    tmp1_output.o15(tmp0_desc, 37, $serializer_getInstance_14(), value.ndk_1);
    tmp1_output.o15(tmp0_desc, 38, $serializer_getInstance_17(), value.odk_1);
    tmp1_output.o15(tmp0_desc, 39, tmp2_cached[39].d3(), value.pdk_1);
    if (tmp1_output.s15(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.o15(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.s15(tmp0_desc, 41) ? true : !(value.width == null)) {
      tmp1_output.o15(tmp0_desc, 41, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.s15(tmp0_desc, 42) ? true : !(value.height == null)) {
      tmp1_output.o15(tmp0_desc, 42, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.s15(tmp0_desc, 43) ? true : !(value.photos == null)) {
      tmp1_output.o15(tmp0_desc, 43, tmp2_cached[43].d3(), value.photos);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.bdj(encoder, value instanceof LegacyPhotoPost ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.adj_1;
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
    var tmp49_input = decoder.w13(tmp0_desc);
    var tmp50_cached = Companion_getInstance_25().zdi_1;
    if (tmp49_input.l14()) {
      tmp5_local0 = tmp49_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.k14(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.k14(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.k14(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.k14(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.k14(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.k14(tmp0_desc, 43, tmp50_cached[43].d3(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.k14(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.k14(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.k14(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.k14(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.k14(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.k14(tmp0_desc, 43, tmp50_cached[43].d3(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp49_input.x13(tmp0_desc);
    return LegacyPhotoPost.qdk(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  ez() {
    return this.adj_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_25().zdi_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[43].d3())];
  }
}
class LegacyPhotoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.rdk(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static rdk(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_25();
    var $this = this.jd9();
    $this.cdj_1 = blogName;
    $this.ddj_1 = idString;
    $this.edj_1 = genesisPostId;
    $this.fdj_1 = postUrl;
    $this.gdj_1 = parentPostUrl;
    $this.hdj_1 = type;
    $this.idj_1 = timestamp;
    $this.jdj_1 = date;
    $this.kdj_1 = format;
    $this.ldj_1 = reblogKey;
    $this.mdj_1 = tags;
    $this.ndj_1 = isBookmarklet;
    $this.odj_1 = isMobile;
    $this.pdj_1 = sourceUrl;
    $this.qdj_1 = sourceTitle;
    $this.rdj_1 = isLiked;
    $this.sdj_1 = state;
    $this.tdj_1 = title;
    $this.udj_1 = body;
    $this.vdj_1 = noteCount;
    $this.wdj_1 = summary;
    $this.xdj_1 = slug;
    $this.ydj_1 = rebloggedFromId;
    $this.zdj_1 = rebloggedFromUrl;
    $this.adk_1 = rebloggedFromName;
    $this.bdk_1 = rebloggedFromTitle;
    $this.cdk_1 = rebloggedFromUuid;
    $this.ddk_1 = rebloggedFromCanMessage;
    $this.edk_1 = rebloggedFromFollowing;
    $this.fdk_1 = rebloggedRootId;
    $this.gdk_1 = rebloggedRootUrl;
    $this.hdk_1 = rebloggedRootName;
    $this.idk_1 = rebloggedRootTitle;
    $this.jdk_1 = rebloggedRootUuid;
    $this.kdk_1 = rebloggedRootCanMessage;
    $this.ldk_1 = rebloggedRootFollowing;
    $this.mdk_1 = notes;
    $this.ndk_1 = blog;
    $this.odk_1 = reblog;
    $this.pdk_1 = trail;
    $this.caption = null;
    $this.width = null;
    $this.height = null;
    $this.photos = null;
    return $this;
  }
  kd0(_set____db54di) {
    this.cdj_1 = _set____db54di;
  }
  ld0() {
    return this.cdj_1;
  }
  td9(_set____db54di) {
    this.ddj_1 = _set____db54di;
  }
  ud9() {
    return this.ddj_1;
  }
  vd9(_set____db54di) {
    this.edj_1 = _set____db54di;
  }
  wd9() {
    return this.edj_1;
  }
  xd9(_set____db54di) {
    this.fdj_1 = _set____db54di;
  }
  yd9() {
    return this.fdj_1;
  }
  zd9(_set____db54di) {
    this.gdj_1 = _set____db54di;
  }
  ada() {
    return this.gdj_1;
  }
  x38(_set____db54di) {
    this.hdj_1 = _set____db54di;
  }
  k38() {
    return this.hdj_1;
  }
  bda(_set____db54di) {
    this.idj_1 = _set____db54di;
  }
  ud6() {
    return this.idj_1;
  }
  rd1(_set____db54di) {
    this.jdj_1 = _set____db54di;
  }
  sd1() {
    return this.jdj_1;
  }
  td1(_set____db54di) {
    this.kdj_1 = _set____db54di;
  }
  ud1() {
    return this.kdj_1;
  }
  kd3(_set____db54di) {
    this.ldj_1 = _set____db54di;
  }
  ld3() {
    return this.ldj_1;
  }
  mao(_set____db54di) {
    this.mdj_1 = _set____db54di;
  }
  haj() {
    return this.mdj_1;
  }
  cda(_set____db54di) {
    this.ndj_1 = _set____db54di;
  }
  dda() {
    return this.ndj_1;
  }
  eda(_set____db54di) {
    this.odj_1 = _set____db54di;
  }
  fda() {
    return this.odj_1;
  }
  l38(_set____db54di) {
    this.pdj_1 = _set____db54di;
  }
  m38() {
    return this.pdj_1;
  }
  gda(_set____db54di) {
    this.qdj_1 = _set____db54di;
  }
  hda() {
    return this.qdj_1;
  }
  ida(_set____db54di) {
    this.rdj_1 = _set____db54di;
  }
  dar() {
    return this.rdj_1;
  }
  cab(_set____db54di) {
    this.sdj_1 = _set____db54di;
  }
  f7y() {
    return this.sdj_1;
  }
  daj(_set____db54di) {
    this.tdj_1 = _set____db54di;
  }
  a3j() {
    return this.tdj_1;
  }
  uap(_set____db54di) {
    this.udj_1 = _set____db54di;
  }
  vap() {
    return this.udj_1;
  }
  jda(_set____db54di) {
    this.vdj_1 = _set____db54di;
  }
  kda() {
    return this.vdj_1;
  }
  paq(_set____db54di) {
    this.wdj_1 = _set____db54di;
  }
  qaq() {
    return this.wdj_1;
  }
  vd1(_set____db54di) {
    this.xdj_1 = _set____db54di;
  }
  wd1() {
    return this.xdj_1;
  }
  lda(_set____db54di) {
    this.ydj_1 = _set____db54di;
  }
  mda() {
    return this.ydj_1;
  }
  nda(_set____db54di) {
    this.zdj_1 = _set____db54di;
  }
  oda() {
    return this.zdj_1;
  }
  pda(_set____db54di) {
    this.adk_1 = _set____db54di;
  }
  qda() {
    return this.adk_1;
  }
  rda(_set____db54di) {
    this.bdk_1 = _set____db54di;
  }
  sda() {
    return this.bdk_1;
  }
  tda(_set____db54di) {
    this.cdk_1 = _set____db54di;
  }
  uda() {
    return this.cdk_1;
  }
  vda(_set____db54di) {
    this.ddk_1 = _set____db54di;
  }
  wda() {
    return this.ddk_1;
  }
  xda(_set____db54di) {
    this.edk_1 = _set____db54di;
  }
  yda() {
    return this.edk_1;
  }
  zda(_set____db54di) {
    this.fdk_1 = _set____db54di;
  }
  adb() {
    return this.fdk_1;
  }
  bdb(_set____db54di) {
    this.gdk_1 = _set____db54di;
  }
  cdb() {
    return this.gdk_1;
  }
  ddb(_set____db54di) {
    this.hdk_1 = _set____db54di;
  }
  edb() {
    return this.hdk_1;
  }
  fdb(_set____db54di) {
    this.idk_1 = _set____db54di;
  }
  gdb() {
    return this.idk_1;
  }
  hdb(_set____db54di) {
    this.jdk_1 = _set____db54di;
  }
  idb() {
    return this.jdk_1;
  }
  jdb(_set____db54di) {
    this.kdk_1 = _set____db54di;
  }
  kdb() {
    return this.kdk_1;
  }
  ldb(_set____db54di) {
    this.ldk_1 = _set____db54di;
  }
  mdb() {
    return this.ldk_1;
  }
  ndb(_set____db54di) {
    this.mdk_1 = _set____db54di;
  }
  odb() {
    return this.mdk_1;
  }
  bd5(_set____db54di) {
    this.ndk_1 = _set____db54di;
  }
  cd5() {
    return this.ndk_1;
  }
  pdb(_set____db54di) {
    this.odk_1 = _set____db54di;
  }
  nbu() {
    return this.odk_1;
  }
  qdb(_set____db54di) {
    this.pdk_1 = _set____db54di;
  }
  rdb() {
    return this.pdk_1;
  }
  id1(_set____db54di) {
    this.caption = _set____db54di;
  }
  jd1() {
    return this.caption;
  }
  p38(_set____db54di) {
    this.width = _set____db54di;
  }
  q38() {
    return this.width;
  }
  r38(_set____db54di) {
    this.height = _set____db54di;
  }
  s38() {
    return this.height;
  }
  sdk(_set____db54di) {
    this.photos = _set____db54di;
  }
  tdk() {
    return this.photos;
  }
  static qdk(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, width, height, photos, serializationConstructorMarker) {
    Companion_getInstance_25();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_22().adj_1);
    }
    var $this = this.jd9();
    $this.cdj_1 = blogName;
    $this.ddj_1 = idString;
    $this.edj_1 = genesisPostId;
    $this.fdj_1 = postUrl;
    $this.gdj_1 = parentPostUrl;
    $this.hdj_1 = type;
    $this.idj_1 = timestamp;
    $this.jdj_1 = date;
    $this.kdj_1 = format;
    $this.ldj_1 = reblogKey;
    $this.mdj_1 = tags;
    $this.ndj_1 = isBookmarklet;
    $this.odj_1 = isMobile;
    $this.pdj_1 = sourceUrl;
    $this.qdj_1 = sourceTitle;
    $this.rdj_1 = isLiked;
    $this.sdj_1 = state;
    $this.tdj_1 = title;
    $this.udj_1 = body;
    $this.vdj_1 = noteCount;
    $this.wdj_1 = summary;
    $this.xdj_1 = slug;
    $this.ydj_1 = rebloggedFromId;
    $this.zdj_1 = rebloggedFromUrl;
    $this.adk_1 = rebloggedFromName;
    $this.bdk_1 = rebloggedFromTitle;
    $this.cdk_1 = rebloggedFromUuid;
    $this.ddk_1 = rebloggedFromCanMessage;
    $this.edk_1 = rebloggedFromFollowing;
    $this.fdk_1 = rebloggedRootId;
    $this.gdk_1 = rebloggedRootUrl;
    $this.hdk_1 = rebloggedRootName;
    $this.idk_1 = rebloggedRootTitle;
    $this.jdk_1 = rebloggedRootUuid;
    $this.kdk_1 = rebloggedRootCanMessage;
    $this.ldk_1 = rebloggedRootFollowing;
    $this.mdk_1 = notes;
    $this.ndk_1 = blog;
    $this.odk_1 = reblog;
    $this.pdk_1 = trail;
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
    tmp.udk_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_1), null];
  }
  p1p() {
    return $serializer_getInstance_23();
  }
}
class $serializer_24 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPostcardPost', this, 41);
    tmp0_serialDesc.o1b('blog_name', false);
    tmp0_serialDesc.o1b('id_string', false);
    tmp0_serialDesc.o1b('genesis_post_id', false);
    tmp0_serialDesc.o1b('post_url', false);
    tmp0_serialDesc.o1b('parent_post_url', false);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('timestamp', false);
    tmp0_serialDesc.o1b('date', false);
    tmp0_serialDesc.o1b('format', false);
    tmp0_serialDesc.o1b('reblog_key', false);
    tmp0_serialDesc.o1b('tags', false);
    tmp0_serialDesc.o1b('bookmarklet', false);
    tmp0_serialDesc.o1b('mobile', false);
    tmp0_serialDesc.o1b('source_url', false);
    tmp0_serialDesc.o1b('source_title', false);
    tmp0_serialDesc.o1b('liked', false);
    tmp0_serialDesc.o1b('state', false);
    tmp0_serialDesc.o1b('title', false);
    tmp0_serialDesc.o1b('body', false);
    tmp0_serialDesc.o1b('note_count', false);
    tmp0_serialDesc.o1b('summary', false);
    tmp0_serialDesc.o1b('slug', false);
    tmp0_serialDesc.o1b('reblogged_from_id', false);
    tmp0_serialDesc.o1b('reblogged_from_url', false);
    tmp0_serialDesc.o1b('reblogged_from_name', false);
    tmp0_serialDesc.o1b('reblogged_from_title', false);
    tmp0_serialDesc.o1b('reblogged_from_uuid', false);
    tmp0_serialDesc.o1b('reblogged_from_can_message', false);
    tmp0_serialDesc.o1b('reblogged_from_following', false);
    tmp0_serialDesc.o1b('reblogged_root_id', false);
    tmp0_serialDesc.o1b('reblogged_root_url', false);
    tmp0_serialDesc.o1b('reblogged_root_name', false);
    tmp0_serialDesc.o1b('reblogged_root_title', false);
    tmp0_serialDesc.o1b('reblogged_root_uuid', false);
    tmp0_serialDesc.o1b('reblogged_root_can_message', false);
    tmp0_serialDesc.o1b('reblogged_root_following', false);
    tmp0_serialDesc.o1b('notes', false);
    tmp0_serialDesc.o1b('blog', false);
    tmp0_serialDesc.o1b('reblog', false);
    tmp0_serialDesc.o1b('trail', false);
    tmp0_serialDesc.o1b('url', true);
    this.vdk_1 = tmp0_serialDesc;
  }
  wdk(encoder, value) {
    var tmp0_desc = this.vdk_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().udk_1;
    tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.xdk_1);
    tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.ydk_1);
    tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.zdk_1);
    tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.adl_1);
    tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.bdl_1);
    tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.cdl_1);
    tmp1_output.o15(tmp0_desc, 6, IntSerializer_getInstance(), value.ddl_1);
    tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.edl_1);
    tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.fdl_1);
    tmp1_output.o15(tmp0_desc, 9, StringSerializer_getInstance(), value.gdl_1);
    tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.hdl_1);
    tmp1_output.o15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.idl_1);
    tmp1_output.o15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.jdl_1);
    tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.kdl_1);
    tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.ldl_1);
    tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.mdl_1);
    tmp1_output.o15(tmp0_desc, 16, StringSerializer_getInstance(), value.ndl_1);
    tmp1_output.o15(tmp0_desc, 17, StringSerializer_getInstance(), value.odl_1);
    tmp1_output.o15(tmp0_desc, 18, StringSerializer_getInstance(), value.pdl_1);
    tmp1_output.o15(tmp0_desc, 19, IntSerializer_getInstance(), value.qdl_1);
    tmp1_output.o15(tmp0_desc, 20, StringSerializer_getInstance(), value.rdl_1);
    tmp1_output.o15(tmp0_desc, 21, StringSerializer_getInstance(), value.sdl_1);
    tmp1_output.o15(tmp0_desc, 22, StringSerializer_getInstance(), value.tdl_1);
    tmp1_output.o15(tmp0_desc, 23, StringSerializer_getInstance(), value.udl_1);
    tmp1_output.o15(tmp0_desc, 24, StringSerializer_getInstance(), value.vdl_1);
    tmp1_output.o15(tmp0_desc, 25, StringSerializer_getInstance(), value.wdl_1);
    tmp1_output.o15(tmp0_desc, 26, StringSerializer_getInstance(), value.xdl_1);
    tmp1_output.o15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ydl_1);
    tmp1_output.o15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.zdl_1);
    tmp1_output.o15(tmp0_desc, 29, StringSerializer_getInstance(), value.adm_1);
    tmp1_output.o15(tmp0_desc, 30, StringSerializer_getInstance(), value.bdm_1);
    tmp1_output.o15(tmp0_desc, 31, StringSerializer_getInstance(), value.cdm_1);
    tmp1_output.o15(tmp0_desc, 32, StringSerializer_getInstance(), value.ddm_1);
    tmp1_output.o15(tmp0_desc, 33, StringSerializer_getInstance(), value.edm_1);
    tmp1_output.o15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.fdm_1);
    tmp1_output.o15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.gdm_1);
    tmp1_output.o15(tmp0_desc, 36, tmp2_cached[36].d3(), value.hdm_1);
    tmp1_output.o15(tmp0_desc, 37, $serializer_getInstance_14(), value.idm_1);
    tmp1_output.o15(tmp0_desc, 38, $serializer_getInstance_17(), value.jdm_1);
    tmp1_output.o15(tmp0_desc, 39, tmp2_cached[39].d3(), value.kdm_1);
    if (tmp1_output.s15(tmp0_desc, 40) ? true : !(value.url == null)) {
      tmp1_output.o15(tmp0_desc, 40, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.wdk(encoder, value instanceof LegacyPostcardPost ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.vdk_1;
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
    var tmp46_input = decoder.w13(tmp0_desc);
    var tmp47_cached = Companion_getInstance_26().udk_1;
    if (tmp46_input.l14()) {
      tmp5_local0 = tmp46_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.k14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.k14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.k14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.k14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.k14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.k14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp46_input.x13(tmp0_desc);
    return LegacyPostcardPost.ldm(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  ez() {
    return this.vdk_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_26().udk_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyPostcardPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.mdm(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static mdm(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_26();
    var $this = this.jd9();
    $this.xdk_1 = blogName;
    $this.ydk_1 = idString;
    $this.zdk_1 = genesisPostId;
    $this.adl_1 = postUrl;
    $this.bdl_1 = parentPostUrl;
    $this.cdl_1 = type;
    $this.ddl_1 = timestamp;
    $this.edl_1 = date;
    $this.fdl_1 = format;
    $this.gdl_1 = reblogKey;
    $this.hdl_1 = tags;
    $this.idl_1 = isBookmarklet;
    $this.jdl_1 = isMobile;
    $this.kdl_1 = sourceUrl;
    $this.ldl_1 = sourceTitle;
    $this.mdl_1 = isLiked;
    $this.ndl_1 = state;
    $this.odl_1 = title;
    $this.pdl_1 = body;
    $this.qdl_1 = noteCount;
    $this.rdl_1 = summary;
    $this.sdl_1 = slug;
    $this.tdl_1 = rebloggedFromId;
    $this.udl_1 = rebloggedFromUrl;
    $this.vdl_1 = rebloggedFromName;
    $this.wdl_1 = rebloggedFromTitle;
    $this.xdl_1 = rebloggedFromUuid;
    $this.ydl_1 = rebloggedFromCanMessage;
    $this.zdl_1 = rebloggedFromFollowing;
    $this.adm_1 = rebloggedRootId;
    $this.bdm_1 = rebloggedRootUrl;
    $this.cdm_1 = rebloggedRootName;
    $this.ddm_1 = rebloggedRootTitle;
    $this.edm_1 = rebloggedRootUuid;
    $this.fdm_1 = rebloggedRootCanMessage;
    $this.gdm_1 = rebloggedRootFollowing;
    $this.hdm_1 = notes;
    $this.idm_1 = blog;
    $this.jdm_1 = reblog;
    $this.kdm_1 = trail;
    $this.url = null;
    return $this;
  }
  kd0(_set____db54di) {
    this.xdk_1 = _set____db54di;
  }
  ld0() {
    return this.xdk_1;
  }
  td9(_set____db54di) {
    this.ydk_1 = _set____db54di;
  }
  ud9() {
    return this.ydk_1;
  }
  vd9(_set____db54di) {
    this.zdk_1 = _set____db54di;
  }
  wd9() {
    return this.zdk_1;
  }
  xd9(_set____db54di) {
    this.adl_1 = _set____db54di;
  }
  yd9() {
    return this.adl_1;
  }
  zd9(_set____db54di) {
    this.bdl_1 = _set____db54di;
  }
  ada() {
    return this.bdl_1;
  }
  x38(_set____db54di) {
    this.cdl_1 = _set____db54di;
  }
  k38() {
    return this.cdl_1;
  }
  bda(_set____db54di) {
    this.ddl_1 = _set____db54di;
  }
  ud6() {
    return this.ddl_1;
  }
  rd1(_set____db54di) {
    this.edl_1 = _set____db54di;
  }
  sd1() {
    return this.edl_1;
  }
  td1(_set____db54di) {
    this.fdl_1 = _set____db54di;
  }
  ud1() {
    return this.fdl_1;
  }
  kd3(_set____db54di) {
    this.gdl_1 = _set____db54di;
  }
  ld3() {
    return this.gdl_1;
  }
  mao(_set____db54di) {
    this.hdl_1 = _set____db54di;
  }
  haj() {
    return this.hdl_1;
  }
  cda(_set____db54di) {
    this.idl_1 = _set____db54di;
  }
  dda() {
    return this.idl_1;
  }
  eda(_set____db54di) {
    this.jdl_1 = _set____db54di;
  }
  fda() {
    return this.jdl_1;
  }
  l38(_set____db54di) {
    this.kdl_1 = _set____db54di;
  }
  m38() {
    return this.kdl_1;
  }
  gda(_set____db54di) {
    this.ldl_1 = _set____db54di;
  }
  hda() {
    return this.ldl_1;
  }
  ida(_set____db54di) {
    this.mdl_1 = _set____db54di;
  }
  dar() {
    return this.mdl_1;
  }
  cab(_set____db54di) {
    this.ndl_1 = _set____db54di;
  }
  f7y() {
    return this.ndl_1;
  }
  daj(_set____db54di) {
    this.odl_1 = _set____db54di;
  }
  a3j() {
    return this.odl_1;
  }
  uap(_set____db54di) {
    this.pdl_1 = _set____db54di;
  }
  vap() {
    return this.pdl_1;
  }
  jda(_set____db54di) {
    this.qdl_1 = _set____db54di;
  }
  kda() {
    return this.qdl_1;
  }
  paq(_set____db54di) {
    this.rdl_1 = _set____db54di;
  }
  qaq() {
    return this.rdl_1;
  }
  vd1(_set____db54di) {
    this.sdl_1 = _set____db54di;
  }
  wd1() {
    return this.sdl_1;
  }
  lda(_set____db54di) {
    this.tdl_1 = _set____db54di;
  }
  mda() {
    return this.tdl_1;
  }
  nda(_set____db54di) {
    this.udl_1 = _set____db54di;
  }
  oda() {
    return this.udl_1;
  }
  pda(_set____db54di) {
    this.vdl_1 = _set____db54di;
  }
  qda() {
    return this.vdl_1;
  }
  rda(_set____db54di) {
    this.wdl_1 = _set____db54di;
  }
  sda() {
    return this.wdl_1;
  }
  tda(_set____db54di) {
    this.xdl_1 = _set____db54di;
  }
  uda() {
    return this.xdl_1;
  }
  vda(_set____db54di) {
    this.ydl_1 = _set____db54di;
  }
  wda() {
    return this.ydl_1;
  }
  xda(_set____db54di) {
    this.zdl_1 = _set____db54di;
  }
  yda() {
    return this.zdl_1;
  }
  zda(_set____db54di) {
    this.adm_1 = _set____db54di;
  }
  adb() {
    return this.adm_1;
  }
  bdb(_set____db54di) {
    this.bdm_1 = _set____db54di;
  }
  cdb() {
    return this.bdm_1;
  }
  ddb(_set____db54di) {
    this.cdm_1 = _set____db54di;
  }
  edb() {
    return this.cdm_1;
  }
  fdb(_set____db54di) {
    this.ddm_1 = _set____db54di;
  }
  gdb() {
    return this.ddm_1;
  }
  hdb(_set____db54di) {
    this.edm_1 = _set____db54di;
  }
  idb() {
    return this.edm_1;
  }
  jdb(_set____db54di) {
    this.fdm_1 = _set____db54di;
  }
  kdb() {
    return this.fdm_1;
  }
  ldb(_set____db54di) {
    this.gdm_1 = _set____db54di;
  }
  mdb() {
    return this.gdm_1;
  }
  ndb(_set____db54di) {
    this.hdm_1 = _set____db54di;
  }
  odb() {
    return this.hdm_1;
  }
  bd5(_set____db54di) {
    this.idm_1 = _set____db54di;
  }
  cd5() {
    return this.idm_1;
  }
  pdb(_set____db54di) {
    this.jdm_1 = _set____db54di;
  }
  nbu() {
    return this.jdm_1;
  }
  qdb(_set____db54di) {
    this.kdm_1 = _set____db54di;
  }
  rdb() {
    return this.kdm_1;
  }
  a9l(_set____db54di) {
    this.url = _set____db54di;
  }
  m4n() {
    return this.url;
  }
  static ldm(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, url, serializationConstructorMarker) {
    Companion_getInstance_26();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_23().vdk_1);
    }
    var $this = this.jd9();
    $this.xdk_1 = blogName;
    $this.ydk_1 = idString;
    $this.zdk_1 = genesisPostId;
    $this.adl_1 = postUrl;
    $this.bdl_1 = parentPostUrl;
    $this.cdl_1 = type;
    $this.ddl_1 = timestamp;
    $this.edl_1 = date;
    $this.fdl_1 = format;
    $this.gdl_1 = reblogKey;
    $this.hdl_1 = tags;
    $this.idl_1 = isBookmarklet;
    $this.jdl_1 = isMobile;
    $this.kdl_1 = sourceUrl;
    $this.ldl_1 = sourceTitle;
    $this.mdl_1 = isLiked;
    $this.ndl_1 = state;
    $this.odl_1 = title;
    $this.pdl_1 = body;
    $this.qdl_1 = noteCount;
    $this.rdl_1 = summary;
    $this.sdl_1 = slug;
    $this.tdl_1 = rebloggedFromId;
    $this.udl_1 = rebloggedFromUrl;
    $this.vdl_1 = rebloggedFromName;
    $this.wdl_1 = rebloggedFromTitle;
    $this.xdl_1 = rebloggedFromUuid;
    $this.ydl_1 = rebloggedFromCanMessage;
    $this.zdl_1 = rebloggedFromFollowing;
    $this.adm_1 = rebloggedRootId;
    $this.bdm_1 = rebloggedRootUrl;
    $this.cdm_1 = rebloggedRootName;
    $this.ddm_1 = rebloggedRootTitle;
    $this.edm_1 = rebloggedRootUuid;
    $this.fdm_1 = rebloggedRootCanMessage;
    $this.gdm_1 = rebloggedRootFollowing;
    $this.hdm_1 = notes;
    $this.idm_1 = blog;
    $this.jdm_1 = reblog;
    $this.kdm_1 = trail;
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
    tmp.ndm_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1), null, null];
  }
  p1p() {
    return $serializer_getInstance_24();
  }
}
class $serializer_25 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyQuotePost', this, 42);
    tmp0_serialDesc.o1b('blog_name', false);
    tmp0_serialDesc.o1b('id_string', false);
    tmp0_serialDesc.o1b('genesis_post_id', false);
    tmp0_serialDesc.o1b('post_url', false);
    tmp0_serialDesc.o1b('parent_post_url', false);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('timestamp', false);
    tmp0_serialDesc.o1b('date', false);
    tmp0_serialDesc.o1b('format', false);
    tmp0_serialDesc.o1b('reblog_key', false);
    tmp0_serialDesc.o1b('tags', false);
    tmp0_serialDesc.o1b('bookmarklet', false);
    tmp0_serialDesc.o1b('mobile', false);
    tmp0_serialDesc.o1b('source_url', false);
    tmp0_serialDesc.o1b('source_title', false);
    tmp0_serialDesc.o1b('liked', false);
    tmp0_serialDesc.o1b('state', false);
    tmp0_serialDesc.o1b('title', false);
    tmp0_serialDesc.o1b('body', false);
    tmp0_serialDesc.o1b('note_count', false);
    tmp0_serialDesc.o1b('summary', false);
    tmp0_serialDesc.o1b('slug', false);
    tmp0_serialDesc.o1b('reblogged_from_id', false);
    tmp0_serialDesc.o1b('reblogged_from_url', false);
    tmp0_serialDesc.o1b('reblogged_from_name', false);
    tmp0_serialDesc.o1b('reblogged_from_title', false);
    tmp0_serialDesc.o1b('reblogged_from_uuid', false);
    tmp0_serialDesc.o1b('reblogged_from_can_message', false);
    tmp0_serialDesc.o1b('reblogged_from_following', false);
    tmp0_serialDesc.o1b('reblogged_root_id', false);
    tmp0_serialDesc.o1b('reblogged_root_url', false);
    tmp0_serialDesc.o1b('reblogged_root_name', false);
    tmp0_serialDesc.o1b('reblogged_root_title', false);
    tmp0_serialDesc.o1b('reblogged_root_uuid', false);
    tmp0_serialDesc.o1b('reblogged_root_can_message', false);
    tmp0_serialDesc.o1b('reblogged_root_following', false);
    tmp0_serialDesc.o1b('notes', false);
    tmp0_serialDesc.o1b('blog', false);
    tmp0_serialDesc.o1b('reblog', false);
    tmp0_serialDesc.o1b('trail', false);
    tmp0_serialDesc.o1b('text', true);
    tmp0_serialDesc.o1b('source', true);
    this.odm_1 = tmp0_serialDesc;
  }
  pdm(encoder, value) {
    var tmp0_desc = this.odm_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().ndm_1;
    tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.qdm_1);
    tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.rdm_1);
    tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.sdm_1);
    tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.tdm_1);
    tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.udm_1);
    tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.vdm_1);
    tmp1_output.o15(tmp0_desc, 6, IntSerializer_getInstance(), value.wdm_1);
    tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.xdm_1);
    tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.ydm_1);
    tmp1_output.o15(tmp0_desc, 9, StringSerializer_getInstance(), value.zdm_1);
    tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.adn_1);
    tmp1_output.o15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.bdn_1);
    tmp1_output.o15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.cdn_1);
    tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.ddn_1);
    tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.edn_1);
    tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.fdn_1);
    tmp1_output.o15(tmp0_desc, 16, StringSerializer_getInstance(), value.gdn_1);
    tmp1_output.o15(tmp0_desc, 17, StringSerializer_getInstance(), value.hdn_1);
    tmp1_output.o15(tmp0_desc, 18, StringSerializer_getInstance(), value.idn_1);
    tmp1_output.o15(tmp0_desc, 19, IntSerializer_getInstance(), value.jdn_1);
    tmp1_output.o15(tmp0_desc, 20, StringSerializer_getInstance(), value.kdn_1);
    tmp1_output.o15(tmp0_desc, 21, StringSerializer_getInstance(), value.ldn_1);
    tmp1_output.o15(tmp0_desc, 22, StringSerializer_getInstance(), value.mdn_1);
    tmp1_output.o15(tmp0_desc, 23, StringSerializer_getInstance(), value.ndn_1);
    tmp1_output.o15(tmp0_desc, 24, StringSerializer_getInstance(), value.odn_1);
    tmp1_output.o15(tmp0_desc, 25, StringSerializer_getInstance(), value.pdn_1);
    tmp1_output.o15(tmp0_desc, 26, StringSerializer_getInstance(), value.qdn_1);
    tmp1_output.o15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rdn_1);
    tmp1_output.o15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.sdn_1);
    tmp1_output.o15(tmp0_desc, 29, StringSerializer_getInstance(), value.tdn_1);
    tmp1_output.o15(tmp0_desc, 30, StringSerializer_getInstance(), value.udn_1);
    tmp1_output.o15(tmp0_desc, 31, StringSerializer_getInstance(), value.vdn_1);
    tmp1_output.o15(tmp0_desc, 32, StringSerializer_getInstance(), value.wdn_1);
    tmp1_output.o15(tmp0_desc, 33, StringSerializer_getInstance(), value.xdn_1);
    tmp1_output.o15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.ydn_1);
    tmp1_output.o15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.zdn_1);
    tmp1_output.o15(tmp0_desc, 36, tmp2_cached[36].d3(), value.ado_1);
    tmp1_output.o15(tmp0_desc, 37, $serializer_getInstance_14(), value.bdo_1);
    tmp1_output.o15(tmp0_desc, 38, $serializer_getInstance_17(), value.cdo_1);
    tmp1_output.o15(tmp0_desc, 39, tmp2_cached[39].d3(), value.ddo_1);
    if (tmp1_output.s15(tmp0_desc, 40) ? true : !(value.text == null)) {
      tmp1_output.o15(tmp0_desc, 40, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.s15(tmp0_desc, 41) ? true : !(value.source == null)) {
      tmp1_output.o15(tmp0_desc, 41, StringSerializer_getInstance(), value.source);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.pdm(encoder, value instanceof LegacyQuotePost ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.odm_1;
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
    var tmp47_input = decoder.w13(tmp0_desc);
    var tmp48_cached = Companion_getInstance_27().ndm_1;
    if (tmp47_input.l14()) {
      tmp5_local0 = tmp47_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.k14(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.k14(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.k14(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.k14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.k14(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.k14(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.k14(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.k14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp47_input.x13(tmp0_desc);
    return LegacyQuotePost.edo(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  ez() {
    return this.odm_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_27().ndm_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyQuotePost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.fdo(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static fdo(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_27();
    var $this = this.jd9();
    $this.qdm_1 = blogName;
    $this.rdm_1 = idString;
    $this.sdm_1 = genesisPostId;
    $this.tdm_1 = postUrl;
    $this.udm_1 = parentPostUrl;
    $this.vdm_1 = type;
    $this.wdm_1 = timestamp;
    $this.xdm_1 = date;
    $this.ydm_1 = format;
    $this.zdm_1 = reblogKey;
    $this.adn_1 = tags;
    $this.bdn_1 = isBookmarklet;
    $this.cdn_1 = isMobile;
    $this.ddn_1 = sourceUrl;
    $this.edn_1 = sourceTitle;
    $this.fdn_1 = isLiked;
    $this.gdn_1 = state;
    $this.hdn_1 = title;
    $this.idn_1 = body;
    $this.jdn_1 = noteCount;
    $this.kdn_1 = summary;
    $this.ldn_1 = slug;
    $this.mdn_1 = rebloggedFromId;
    $this.ndn_1 = rebloggedFromUrl;
    $this.odn_1 = rebloggedFromName;
    $this.pdn_1 = rebloggedFromTitle;
    $this.qdn_1 = rebloggedFromUuid;
    $this.rdn_1 = rebloggedFromCanMessage;
    $this.sdn_1 = rebloggedFromFollowing;
    $this.tdn_1 = rebloggedRootId;
    $this.udn_1 = rebloggedRootUrl;
    $this.vdn_1 = rebloggedRootName;
    $this.wdn_1 = rebloggedRootTitle;
    $this.xdn_1 = rebloggedRootUuid;
    $this.ydn_1 = rebloggedRootCanMessage;
    $this.zdn_1 = rebloggedRootFollowing;
    $this.ado_1 = notes;
    $this.bdo_1 = blog;
    $this.cdo_1 = reblog;
    $this.ddo_1 = trail;
    $this.text = null;
    $this.source = null;
    return $this;
  }
  kd0(_set____db54di) {
    this.qdm_1 = _set____db54di;
  }
  ld0() {
    return this.qdm_1;
  }
  td9(_set____db54di) {
    this.rdm_1 = _set____db54di;
  }
  ud9() {
    return this.rdm_1;
  }
  vd9(_set____db54di) {
    this.sdm_1 = _set____db54di;
  }
  wd9() {
    return this.sdm_1;
  }
  xd9(_set____db54di) {
    this.tdm_1 = _set____db54di;
  }
  yd9() {
    return this.tdm_1;
  }
  zd9(_set____db54di) {
    this.udm_1 = _set____db54di;
  }
  ada() {
    return this.udm_1;
  }
  x38(_set____db54di) {
    this.vdm_1 = _set____db54di;
  }
  k38() {
    return this.vdm_1;
  }
  bda(_set____db54di) {
    this.wdm_1 = _set____db54di;
  }
  ud6() {
    return this.wdm_1;
  }
  rd1(_set____db54di) {
    this.xdm_1 = _set____db54di;
  }
  sd1() {
    return this.xdm_1;
  }
  td1(_set____db54di) {
    this.ydm_1 = _set____db54di;
  }
  ud1() {
    return this.ydm_1;
  }
  kd3(_set____db54di) {
    this.zdm_1 = _set____db54di;
  }
  ld3() {
    return this.zdm_1;
  }
  mao(_set____db54di) {
    this.adn_1 = _set____db54di;
  }
  haj() {
    return this.adn_1;
  }
  cda(_set____db54di) {
    this.bdn_1 = _set____db54di;
  }
  dda() {
    return this.bdn_1;
  }
  eda(_set____db54di) {
    this.cdn_1 = _set____db54di;
  }
  fda() {
    return this.cdn_1;
  }
  l38(_set____db54di) {
    this.ddn_1 = _set____db54di;
  }
  m38() {
    return this.ddn_1;
  }
  gda(_set____db54di) {
    this.edn_1 = _set____db54di;
  }
  hda() {
    return this.edn_1;
  }
  ida(_set____db54di) {
    this.fdn_1 = _set____db54di;
  }
  dar() {
    return this.fdn_1;
  }
  cab(_set____db54di) {
    this.gdn_1 = _set____db54di;
  }
  f7y() {
    return this.gdn_1;
  }
  daj(_set____db54di) {
    this.hdn_1 = _set____db54di;
  }
  a3j() {
    return this.hdn_1;
  }
  uap(_set____db54di) {
    this.idn_1 = _set____db54di;
  }
  vap() {
    return this.idn_1;
  }
  jda(_set____db54di) {
    this.jdn_1 = _set____db54di;
  }
  kda() {
    return this.jdn_1;
  }
  paq(_set____db54di) {
    this.kdn_1 = _set____db54di;
  }
  qaq() {
    return this.kdn_1;
  }
  vd1(_set____db54di) {
    this.ldn_1 = _set____db54di;
  }
  wd1() {
    return this.ldn_1;
  }
  lda(_set____db54di) {
    this.mdn_1 = _set____db54di;
  }
  mda() {
    return this.mdn_1;
  }
  nda(_set____db54di) {
    this.ndn_1 = _set____db54di;
  }
  oda() {
    return this.ndn_1;
  }
  pda(_set____db54di) {
    this.odn_1 = _set____db54di;
  }
  qda() {
    return this.odn_1;
  }
  rda(_set____db54di) {
    this.pdn_1 = _set____db54di;
  }
  sda() {
    return this.pdn_1;
  }
  tda(_set____db54di) {
    this.qdn_1 = _set____db54di;
  }
  uda() {
    return this.qdn_1;
  }
  vda(_set____db54di) {
    this.rdn_1 = _set____db54di;
  }
  wda() {
    return this.rdn_1;
  }
  xda(_set____db54di) {
    this.sdn_1 = _set____db54di;
  }
  yda() {
    return this.sdn_1;
  }
  zda(_set____db54di) {
    this.tdn_1 = _set____db54di;
  }
  adb() {
    return this.tdn_1;
  }
  bdb(_set____db54di) {
    this.udn_1 = _set____db54di;
  }
  cdb() {
    return this.udn_1;
  }
  ddb(_set____db54di) {
    this.vdn_1 = _set____db54di;
  }
  edb() {
    return this.vdn_1;
  }
  fdb(_set____db54di) {
    this.wdn_1 = _set____db54di;
  }
  gdb() {
    return this.wdn_1;
  }
  hdb(_set____db54di) {
    this.xdn_1 = _set____db54di;
  }
  idb() {
    return this.xdn_1;
  }
  jdb(_set____db54di) {
    this.ydn_1 = _set____db54di;
  }
  kdb() {
    return this.ydn_1;
  }
  ldb(_set____db54di) {
    this.zdn_1 = _set____db54di;
  }
  mdb() {
    return this.zdn_1;
  }
  ndb(_set____db54di) {
    this.ado_1 = _set____db54di;
  }
  odb() {
    return this.ado_1;
  }
  bd5(_set____db54di) {
    this.bdo_1 = _set____db54di;
  }
  cd5() {
    return this.bdo_1;
  }
  pdb(_set____db54di) {
    this.cdo_1 = _set____db54di;
  }
  nbu() {
    return this.cdo_1;
  }
  qdb(_set____db54di) {
    this.ddo_1 = _set____db54di;
  }
  rdb() {
    return this.ddo_1;
  }
  t3h(_set____db54di) {
    this.text = _set____db54di;
  }
  o34() {
    return this.text;
  }
  ed2(_set____db54di) {
    this.source = _set____db54di;
  }
  g20() {
    return this.source;
  }
  static edo(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, text, source, serializationConstructorMarker) {
    Companion_getInstance_27();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_24().odm_1);
    }
    var $this = this.jd9();
    $this.qdm_1 = blogName;
    $this.rdm_1 = idString;
    $this.sdm_1 = genesisPostId;
    $this.tdm_1 = postUrl;
    $this.udm_1 = parentPostUrl;
    $this.vdm_1 = type;
    $this.wdm_1 = timestamp;
    $this.xdm_1 = date;
    $this.ydm_1 = format;
    $this.zdm_1 = reblogKey;
    $this.adn_1 = tags;
    $this.bdn_1 = isBookmarklet;
    $this.cdn_1 = isMobile;
    $this.ddn_1 = sourceUrl;
    $this.edn_1 = sourceTitle;
    $this.fdn_1 = isLiked;
    $this.gdn_1 = state;
    $this.hdn_1 = title;
    $this.idn_1 = body;
    $this.jdn_1 = noteCount;
    $this.kdn_1 = summary;
    $this.ldn_1 = slug;
    $this.mdn_1 = rebloggedFromId;
    $this.ndn_1 = rebloggedFromUrl;
    $this.odn_1 = rebloggedFromName;
    $this.pdn_1 = rebloggedFromTitle;
    $this.qdn_1 = rebloggedFromUuid;
    $this.rdn_1 = rebloggedFromCanMessage;
    $this.sdn_1 = rebloggedFromFollowing;
    $this.tdn_1 = rebloggedRootId;
    $this.udn_1 = rebloggedRootUrl;
    $this.vdn_1 = rebloggedRootName;
    $this.wdn_1 = rebloggedRootTitle;
    $this.xdn_1 = rebloggedRootUuid;
    $this.ydn_1 = rebloggedRootCanMessage;
    $this.zdn_1 = rebloggedRootFollowing;
    $this.ado_1 = notes;
    $this.bdo_1 = blog;
    $this.cdo_1 = reblog;
    $this.ddo_1 = trail;
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
    tmp.gdo_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1)];
  }
  p1p() {
    return $serializer_getInstance_25();
  }
}
class $serializer_26 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyTextPost', this, 40);
    tmp0_serialDesc.o1b('blog_name', false);
    tmp0_serialDesc.o1b('id_string', false);
    tmp0_serialDesc.o1b('genesis_post_id', false);
    tmp0_serialDesc.o1b('post_url', false);
    tmp0_serialDesc.o1b('parent_post_url', false);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('timestamp', false);
    tmp0_serialDesc.o1b('date', false);
    tmp0_serialDesc.o1b('format', false);
    tmp0_serialDesc.o1b('reblog_key', false);
    tmp0_serialDesc.o1b('tags', false);
    tmp0_serialDesc.o1b('bookmarklet', false);
    tmp0_serialDesc.o1b('mobile', false);
    tmp0_serialDesc.o1b('source_url', false);
    tmp0_serialDesc.o1b('source_title', false);
    tmp0_serialDesc.o1b('liked', false);
    tmp0_serialDesc.o1b('state', false);
    tmp0_serialDesc.o1b('title', false);
    tmp0_serialDesc.o1b('body', false);
    tmp0_serialDesc.o1b('note_count', false);
    tmp0_serialDesc.o1b('summary', false);
    tmp0_serialDesc.o1b('slug', false);
    tmp0_serialDesc.o1b('reblogged_from_id', false);
    tmp0_serialDesc.o1b('reblogged_from_url', false);
    tmp0_serialDesc.o1b('reblogged_from_name', false);
    tmp0_serialDesc.o1b('reblogged_from_title', false);
    tmp0_serialDesc.o1b('reblogged_from_uuid', false);
    tmp0_serialDesc.o1b('reblogged_from_can_message', false);
    tmp0_serialDesc.o1b('reblogged_from_following', false);
    tmp0_serialDesc.o1b('reblogged_root_id', false);
    tmp0_serialDesc.o1b('reblogged_root_url', false);
    tmp0_serialDesc.o1b('reblogged_root_name', false);
    tmp0_serialDesc.o1b('reblogged_root_title', false);
    tmp0_serialDesc.o1b('reblogged_root_uuid', false);
    tmp0_serialDesc.o1b('reblogged_root_can_message', false);
    tmp0_serialDesc.o1b('reblogged_root_following', false);
    tmp0_serialDesc.o1b('notes', false);
    tmp0_serialDesc.o1b('blog', false);
    tmp0_serialDesc.o1b('reblog', false);
    tmp0_serialDesc.o1b('trail', false);
    this.hdo_1 = tmp0_serialDesc;
  }
  ido(encoder, value) {
    var tmp0_desc = this.hdo_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().gdo_1;
    tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.jdo_1);
    tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.kdo_1);
    tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.ldo_1);
    tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.mdo_1);
    tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.ndo_1);
    tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.odo_1);
    tmp1_output.o15(tmp0_desc, 6, IntSerializer_getInstance(), value.pdo_1);
    tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.qdo_1);
    tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.rdo_1);
    tmp1_output.o15(tmp0_desc, 9, StringSerializer_getInstance(), value.sdo_1);
    tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.tdo_1);
    tmp1_output.o15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.udo_1);
    tmp1_output.o15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.vdo_1);
    tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.wdo_1);
    tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.xdo_1);
    tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ydo_1);
    tmp1_output.o15(tmp0_desc, 16, StringSerializer_getInstance(), value.zdo_1);
    tmp1_output.o15(tmp0_desc, 17, StringSerializer_getInstance(), value.adp_1);
    tmp1_output.o15(tmp0_desc, 18, StringSerializer_getInstance(), value.bdp_1);
    tmp1_output.o15(tmp0_desc, 19, IntSerializer_getInstance(), value.cdp_1);
    tmp1_output.o15(tmp0_desc, 20, StringSerializer_getInstance(), value.ddp_1);
    tmp1_output.o15(tmp0_desc, 21, StringSerializer_getInstance(), value.edp_1);
    tmp1_output.o15(tmp0_desc, 22, StringSerializer_getInstance(), value.fdp_1);
    tmp1_output.o15(tmp0_desc, 23, StringSerializer_getInstance(), value.gdp_1);
    tmp1_output.o15(tmp0_desc, 24, StringSerializer_getInstance(), value.hdp_1);
    tmp1_output.o15(tmp0_desc, 25, StringSerializer_getInstance(), value.idp_1);
    tmp1_output.o15(tmp0_desc, 26, StringSerializer_getInstance(), value.jdp_1);
    tmp1_output.o15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.kdp_1);
    tmp1_output.o15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.ldp_1);
    tmp1_output.o15(tmp0_desc, 29, StringSerializer_getInstance(), value.mdp_1);
    tmp1_output.o15(tmp0_desc, 30, StringSerializer_getInstance(), value.ndp_1);
    tmp1_output.o15(tmp0_desc, 31, StringSerializer_getInstance(), value.odp_1);
    tmp1_output.o15(tmp0_desc, 32, StringSerializer_getInstance(), value.pdp_1);
    tmp1_output.o15(tmp0_desc, 33, StringSerializer_getInstance(), value.qdp_1);
    tmp1_output.o15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.rdp_1);
    tmp1_output.o15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.sdp_1);
    tmp1_output.o15(tmp0_desc, 36, tmp2_cached[36].d3(), value.tdp_1);
    tmp1_output.o15(tmp0_desc, 37, $serializer_getInstance_14(), value.udp_1);
    tmp1_output.o15(tmp0_desc, 38, $serializer_getInstance_17(), value.vdp_1);
    tmp1_output.o15(tmp0_desc, 39, tmp2_cached[39].d3(), value.wdp_1);
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.ido(encoder, value instanceof LegacyTextPost ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.hdo_1;
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
    var tmp45_input = decoder.w13(tmp0_desc);
    var tmp46_cached = Companion_getInstance_28().gdo_1;
    if (tmp45_input.l14()) {
      tmp5_local0 = tmp45_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp45_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp45_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp45_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp45_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp45_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp45_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp45_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp45_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp45_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp45_input.k14(tmp0_desc, 10, tmp46_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp45_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp45_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp45_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp45_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp45_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp45_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp45_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp45_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp45_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp45_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp45_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp45_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp45_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp45_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp45_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp45_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp45_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp45_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp45_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp45_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp45_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp45_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp45_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp45_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp45_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp45_input.k14(tmp0_desc, 36, tmp46_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp45_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp45_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp45_input.k14(tmp0_desc, 39, tmp46_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp45_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp45_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp45_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp45_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp45_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp45_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp45_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp45_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp45_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp45_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp45_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp45_input.k14(tmp0_desc, 10, tmp46_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp45_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp45_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp45_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp45_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp45_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp45_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp45_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp45_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp45_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp45_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp45_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp45_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp45_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp45_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp45_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp45_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp45_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp45_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp45_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp45_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp45_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp45_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp45_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp45_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp45_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp45_input.k14(tmp0_desc, 36, tmp46_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp45_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp45_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp45_input.k14(tmp0_desc, 39, tmp46_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp45_input.x13(tmp0_desc);
    return LegacyTextPost.xdp(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, null);
  }
  ez() {
    return this.hdo_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_28().gdo_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3())];
  }
}
class LegacyTextPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ydp(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ydp(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_28();
    var $this = this.jd9();
    $this.jdo_1 = blogName;
    $this.kdo_1 = idString;
    $this.ldo_1 = genesisPostId;
    $this.mdo_1 = postUrl;
    $this.ndo_1 = parentPostUrl;
    $this.odo_1 = type;
    $this.pdo_1 = timestamp;
    $this.qdo_1 = date;
    $this.rdo_1 = format;
    $this.sdo_1 = reblogKey;
    $this.tdo_1 = tags;
    $this.udo_1 = isBookmarklet;
    $this.vdo_1 = isMobile;
    $this.wdo_1 = sourceUrl;
    $this.xdo_1 = sourceTitle;
    $this.ydo_1 = isLiked;
    $this.zdo_1 = state;
    $this.adp_1 = title;
    $this.bdp_1 = body;
    $this.cdp_1 = noteCount;
    $this.ddp_1 = summary;
    $this.edp_1 = slug;
    $this.fdp_1 = rebloggedFromId;
    $this.gdp_1 = rebloggedFromUrl;
    $this.hdp_1 = rebloggedFromName;
    $this.idp_1 = rebloggedFromTitle;
    $this.jdp_1 = rebloggedFromUuid;
    $this.kdp_1 = rebloggedFromCanMessage;
    $this.ldp_1 = rebloggedFromFollowing;
    $this.mdp_1 = rebloggedRootId;
    $this.ndp_1 = rebloggedRootUrl;
    $this.odp_1 = rebloggedRootName;
    $this.pdp_1 = rebloggedRootTitle;
    $this.qdp_1 = rebloggedRootUuid;
    $this.rdp_1 = rebloggedRootCanMessage;
    $this.sdp_1 = rebloggedRootFollowing;
    $this.tdp_1 = notes;
    $this.udp_1 = blog;
    $this.vdp_1 = reblog;
    $this.wdp_1 = trail;
    return $this;
  }
  kd0(_set____db54di) {
    this.jdo_1 = _set____db54di;
  }
  ld0() {
    return this.jdo_1;
  }
  td9(_set____db54di) {
    this.kdo_1 = _set____db54di;
  }
  ud9() {
    return this.kdo_1;
  }
  vd9(_set____db54di) {
    this.ldo_1 = _set____db54di;
  }
  wd9() {
    return this.ldo_1;
  }
  xd9(_set____db54di) {
    this.mdo_1 = _set____db54di;
  }
  yd9() {
    return this.mdo_1;
  }
  zd9(_set____db54di) {
    this.ndo_1 = _set____db54di;
  }
  ada() {
    return this.ndo_1;
  }
  x38(_set____db54di) {
    this.odo_1 = _set____db54di;
  }
  k38() {
    return this.odo_1;
  }
  bda(_set____db54di) {
    this.pdo_1 = _set____db54di;
  }
  ud6() {
    return this.pdo_1;
  }
  rd1(_set____db54di) {
    this.qdo_1 = _set____db54di;
  }
  sd1() {
    return this.qdo_1;
  }
  td1(_set____db54di) {
    this.rdo_1 = _set____db54di;
  }
  ud1() {
    return this.rdo_1;
  }
  kd3(_set____db54di) {
    this.sdo_1 = _set____db54di;
  }
  ld3() {
    return this.sdo_1;
  }
  mao(_set____db54di) {
    this.tdo_1 = _set____db54di;
  }
  haj() {
    return this.tdo_1;
  }
  cda(_set____db54di) {
    this.udo_1 = _set____db54di;
  }
  dda() {
    return this.udo_1;
  }
  eda(_set____db54di) {
    this.vdo_1 = _set____db54di;
  }
  fda() {
    return this.vdo_1;
  }
  l38(_set____db54di) {
    this.wdo_1 = _set____db54di;
  }
  m38() {
    return this.wdo_1;
  }
  gda(_set____db54di) {
    this.xdo_1 = _set____db54di;
  }
  hda() {
    return this.xdo_1;
  }
  ida(_set____db54di) {
    this.ydo_1 = _set____db54di;
  }
  dar() {
    return this.ydo_1;
  }
  cab(_set____db54di) {
    this.zdo_1 = _set____db54di;
  }
  f7y() {
    return this.zdo_1;
  }
  daj(_set____db54di) {
    this.adp_1 = _set____db54di;
  }
  a3j() {
    return this.adp_1;
  }
  uap(_set____db54di) {
    this.bdp_1 = _set____db54di;
  }
  vap() {
    return this.bdp_1;
  }
  jda(_set____db54di) {
    this.cdp_1 = _set____db54di;
  }
  kda() {
    return this.cdp_1;
  }
  paq(_set____db54di) {
    this.ddp_1 = _set____db54di;
  }
  qaq() {
    return this.ddp_1;
  }
  vd1(_set____db54di) {
    this.edp_1 = _set____db54di;
  }
  wd1() {
    return this.edp_1;
  }
  lda(_set____db54di) {
    this.fdp_1 = _set____db54di;
  }
  mda() {
    return this.fdp_1;
  }
  nda(_set____db54di) {
    this.gdp_1 = _set____db54di;
  }
  oda() {
    return this.gdp_1;
  }
  pda(_set____db54di) {
    this.hdp_1 = _set____db54di;
  }
  qda() {
    return this.hdp_1;
  }
  rda(_set____db54di) {
    this.idp_1 = _set____db54di;
  }
  sda() {
    return this.idp_1;
  }
  tda(_set____db54di) {
    this.jdp_1 = _set____db54di;
  }
  uda() {
    return this.jdp_1;
  }
  vda(_set____db54di) {
    this.kdp_1 = _set____db54di;
  }
  wda() {
    return this.kdp_1;
  }
  xda(_set____db54di) {
    this.ldp_1 = _set____db54di;
  }
  yda() {
    return this.ldp_1;
  }
  zda(_set____db54di) {
    this.mdp_1 = _set____db54di;
  }
  adb() {
    return this.mdp_1;
  }
  bdb(_set____db54di) {
    this.ndp_1 = _set____db54di;
  }
  cdb() {
    return this.ndp_1;
  }
  ddb(_set____db54di) {
    this.odp_1 = _set____db54di;
  }
  edb() {
    return this.odp_1;
  }
  fdb(_set____db54di) {
    this.pdp_1 = _set____db54di;
  }
  gdb() {
    return this.pdp_1;
  }
  hdb(_set____db54di) {
    this.qdp_1 = _set____db54di;
  }
  idb() {
    return this.qdp_1;
  }
  jdb(_set____db54di) {
    this.rdp_1 = _set____db54di;
  }
  kdb() {
    return this.rdp_1;
  }
  ldb(_set____db54di) {
    this.sdp_1 = _set____db54di;
  }
  mdb() {
    return this.sdp_1;
  }
  ndb(_set____db54di) {
    this.tdp_1 = _set____db54di;
  }
  odb() {
    return this.tdp_1;
  }
  bd5(_set____db54di) {
    this.udp_1 = _set____db54di;
  }
  cd5() {
    return this.udp_1;
  }
  pdb(_set____db54di) {
    this.vdp_1 = _set____db54di;
  }
  nbu() {
    return this.vdp_1;
  }
  qdb(_set____db54di) {
    this.wdp_1 = _set____db54di;
  }
  rdb() {
    return this.wdp_1;
  }
  static xdp(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker) {
    Companion_getInstance_28();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_25().hdo_1);
    }
    var $this = this.jd9();
    $this.jdo_1 = blogName;
    $this.kdo_1 = idString;
    $this.ldo_1 = genesisPostId;
    $this.mdo_1 = postUrl;
    $this.ndo_1 = parentPostUrl;
    $this.odo_1 = type;
    $this.pdo_1 = timestamp;
    $this.qdo_1 = date;
    $this.rdo_1 = format;
    $this.sdo_1 = reblogKey;
    $this.tdo_1 = tags;
    $this.udo_1 = isBookmarklet;
    $this.vdo_1 = isMobile;
    $this.wdo_1 = sourceUrl;
    $this.xdo_1 = sourceTitle;
    $this.ydo_1 = isLiked;
    $this.zdo_1 = state;
    $this.adp_1 = title;
    $this.bdp_1 = body;
    $this.cdp_1 = noteCount;
    $this.ddp_1 = summary;
    $this.edp_1 = slug;
    $this.fdp_1 = rebloggedFromId;
    $this.gdp_1 = rebloggedFromUrl;
    $this.hdp_1 = rebloggedFromName;
    $this.idp_1 = rebloggedFromTitle;
    $this.jdp_1 = rebloggedFromUuid;
    $this.kdp_1 = rebloggedFromCanMessage;
    $this.ldp_1 = rebloggedFromFollowing;
    $this.mdp_1 = rebloggedRootId;
    $this.ndp_1 = rebloggedRootUrl;
    $this.odp_1 = rebloggedRootName;
    $this.pdp_1 = rebloggedRootTitle;
    $this.qdp_1 = rebloggedRootUuid;
    $this.rdp_1 = rebloggedRootCanMessage;
    $this.sdp_1 = rebloggedRootFollowing;
    $this.tdp_1 = notes;
    $this.udp_1 = blog;
    $this.vdp_1 = reblog;
    $this.wdp_1 = trail;
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
    tmp.zdp_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, lazy(tmp_6, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2)];
  }
  p1p() {
    return $serializer_getInstance_26();
  }
}
class $serializer_27 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyVideoPost', this, 42);
    tmp0_serialDesc.o1b('blog_name', false);
    tmp0_serialDesc.o1b('id_string', false);
    tmp0_serialDesc.o1b('genesis_post_id', false);
    tmp0_serialDesc.o1b('post_url', false);
    tmp0_serialDesc.o1b('parent_post_url', false);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('timestamp', false);
    tmp0_serialDesc.o1b('date', false);
    tmp0_serialDesc.o1b('format', false);
    tmp0_serialDesc.o1b('reblog_key', false);
    tmp0_serialDesc.o1b('tags', false);
    tmp0_serialDesc.o1b('bookmarklet', false);
    tmp0_serialDesc.o1b('mobile', false);
    tmp0_serialDesc.o1b('source_url', false);
    tmp0_serialDesc.o1b('source_title', false);
    tmp0_serialDesc.o1b('liked', false);
    tmp0_serialDesc.o1b('state', false);
    tmp0_serialDesc.o1b('title', false);
    tmp0_serialDesc.o1b('body', false);
    tmp0_serialDesc.o1b('note_count', false);
    tmp0_serialDesc.o1b('summary', false);
    tmp0_serialDesc.o1b('slug', false);
    tmp0_serialDesc.o1b('reblogged_from_id', false);
    tmp0_serialDesc.o1b('reblogged_from_url', false);
    tmp0_serialDesc.o1b('reblogged_from_name', false);
    tmp0_serialDesc.o1b('reblogged_from_title', false);
    tmp0_serialDesc.o1b('reblogged_from_uuid', false);
    tmp0_serialDesc.o1b('reblogged_from_can_message', false);
    tmp0_serialDesc.o1b('reblogged_from_following', false);
    tmp0_serialDesc.o1b('reblogged_root_id', false);
    tmp0_serialDesc.o1b('reblogged_root_url', false);
    tmp0_serialDesc.o1b('reblogged_root_name', false);
    tmp0_serialDesc.o1b('reblogged_root_title', false);
    tmp0_serialDesc.o1b('reblogged_root_uuid', false);
    tmp0_serialDesc.o1b('reblogged_root_can_message', false);
    tmp0_serialDesc.o1b('reblogged_root_following', false);
    tmp0_serialDesc.o1b('notes', false);
    tmp0_serialDesc.o1b('blog', false);
    tmp0_serialDesc.o1b('reblog', false);
    tmp0_serialDesc.o1b('trail', false);
    tmp0_serialDesc.o1b('caption', true);
    tmp0_serialDesc.o1b('player', true);
    this.adq_1 = tmp0_serialDesc;
  }
  bdq(encoder, value) {
    var tmp0_desc = this.adq_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().zdp_1;
    tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.cdq_1);
    tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.ddq_1);
    tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.edq_1);
    tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.fdq_1);
    tmp1_output.o15(tmp0_desc, 4, StringSerializer_getInstance(), value.gdq_1);
    tmp1_output.o15(tmp0_desc, 5, StringSerializer_getInstance(), value.hdq_1);
    tmp1_output.o15(tmp0_desc, 6, IntSerializer_getInstance(), value.idq_1);
    tmp1_output.o15(tmp0_desc, 7, StringSerializer_getInstance(), value.jdq_1);
    tmp1_output.o15(tmp0_desc, 8, StringSerializer_getInstance(), value.kdq_1);
    tmp1_output.o15(tmp0_desc, 9, StringSerializer_getInstance(), value.ldq_1);
    tmp1_output.o15(tmp0_desc, 10, tmp2_cached[10].d3(), value.mdq_1);
    tmp1_output.o15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.ndq_1);
    tmp1_output.o15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.odq_1);
    tmp1_output.o15(tmp0_desc, 13, StringSerializer_getInstance(), value.pdq_1);
    tmp1_output.o15(tmp0_desc, 14, StringSerializer_getInstance(), value.qdq_1);
    tmp1_output.o15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.rdq_1);
    tmp1_output.o15(tmp0_desc, 16, StringSerializer_getInstance(), value.sdq_1);
    tmp1_output.o15(tmp0_desc, 17, StringSerializer_getInstance(), value.tdq_1);
    tmp1_output.o15(tmp0_desc, 18, StringSerializer_getInstance(), value.udq_1);
    tmp1_output.o15(tmp0_desc, 19, IntSerializer_getInstance(), value.vdq_1);
    tmp1_output.o15(tmp0_desc, 20, StringSerializer_getInstance(), value.wdq_1);
    tmp1_output.o15(tmp0_desc, 21, StringSerializer_getInstance(), value.xdq_1);
    tmp1_output.o15(tmp0_desc, 22, StringSerializer_getInstance(), value.ydq_1);
    tmp1_output.o15(tmp0_desc, 23, StringSerializer_getInstance(), value.zdq_1);
    tmp1_output.o15(tmp0_desc, 24, StringSerializer_getInstance(), value.adr_1);
    tmp1_output.o15(tmp0_desc, 25, StringSerializer_getInstance(), value.bdr_1);
    tmp1_output.o15(tmp0_desc, 26, StringSerializer_getInstance(), value.cdr_1);
    tmp1_output.o15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ddr_1);
    tmp1_output.o15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.edr_1);
    tmp1_output.o15(tmp0_desc, 29, StringSerializer_getInstance(), value.fdr_1);
    tmp1_output.o15(tmp0_desc, 30, StringSerializer_getInstance(), value.gdr_1);
    tmp1_output.o15(tmp0_desc, 31, StringSerializer_getInstance(), value.hdr_1);
    tmp1_output.o15(tmp0_desc, 32, StringSerializer_getInstance(), value.idr_1);
    tmp1_output.o15(tmp0_desc, 33, StringSerializer_getInstance(), value.jdr_1);
    tmp1_output.o15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.kdr_1);
    tmp1_output.o15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ldr_1);
    tmp1_output.o15(tmp0_desc, 36, tmp2_cached[36].d3(), value.mdr_1);
    tmp1_output.o15(tmp0_desc, 37, $serializer_getInstance_14(), value.ndr_1);
    tmp1_output.o15(tmp0_desc, 38, $serializer_getInstance_17(), value.odr_1);
    tmp1_output.o15(tmp0_desc, 39, tmp2_cached[39].d3(), value.pdr_1);
    if (tmp1_output.s15(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.o15(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.s15(tmp0_desc, 41) ? true : !(value.player == null)) {
      tmp1_output.o15(tmp0_desc, 41, tmp2_cached[41].d3(), value.player);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.bdq(encoder, value instanceof LegacyVideoPost ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.adq_1;
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
    var tmp47_input = decoder.w13(tmp0_desc);
    var tmp48_cached = Companion_getInstance_29().zdp_1;
    if (tmp47_input.l14()) {
      tmp5_local0 = tmp47_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.k14(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.k14(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.k14(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.k14(tmp0_desc, 41, tmp48_cached[41].d3(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.k14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.k14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.k14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.k14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.k14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.k14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.k14(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.k14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.k14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.k14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.k14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.k14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.k14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.k14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.k14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.k14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.k14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.k14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.k14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.k14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.k14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.k14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.k14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.k14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.k14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.k14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.k14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.k14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.k14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.k14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.k14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.k14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.k14(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.k14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.k14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.k14(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.k14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.k14(tmp0_desc, 41, tmp48_cached[41].d3(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp47_input.x13(tmp0_desc);
    return LegacyVideoPost.qdr(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  ez() {
    return this.adq_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_29().zdp_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[41].d3())];
  }
}
class LegacyVideoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.rdr(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static rdr(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_29();
    var $this = this.jd9();
    $this.cdq_1 = blogName;
    $this.ddq_1 = idString;
    $this.edq_1 = genesisPostId;
    $this.fdq_1 = postUrl;
    $this.gdq_1 = parentPostUrl;
    $this.hdq_1 = type;
    $this.idq_1 = timestamp;
    $this.jdq_1 = date;
    $this.kdq_1 = format;
    $this.ldq_1 = reblogKey;
    $this.mdq_1 = tags;
    $this.ndq_1 = isBookmarklet;
    $this.odq_1 = isMobile;
    $this.pdq_1 = sourceUrl;
    $this.qdq_1 = sourceTitle;
    $this.rdq_1 = isLiked;
    $this.sdq_1 = state;
    $this.tdq_1 = title;
    $this.udq_1 = body;
    $this.vdq_1 = noteCount;
    $this.wdq_1 = summary;
    $this.xdq_1 = slug;
    $this.ydq_1 = rebloggedFromId;
    $this.zdq_1 = rebloggedFromUrl;
    $this.adr_1 = rebloggedFromName;
    $this.bdr_1 = rebloggedFromTitle;
    $this.cdr_1 = rebloggedFromUuid;
    $this.ddr_1 = rebloggedFromCanMessage;
    $this.edr_1 = rebloggedFromFollowing;
    $this.fdr_1 = rebloggedRootId;
    $this.gdr_1 = rebloggedRootUrl;
    $this.hdr_1 = rebloggedRootName;
    $this.idr_1 = rebloggedRootTitle;
    $this.jdr_1 = rebloggedRootUuid;
    $this.kdr_1 = rebloggedRootCanMessage;
    $this.ldr_1 = rebloggedRootFollowing;
    $this.mdr_1 = notes;
    $this.ndr_1 = blog;
    $this.odr_1 = reblog;
    $this.pdr_1 = trail;
    $this.caption = null;
    $this.player = null;
    return $this;
  }
  kd0(_set____db54di) {
    this.cdq_1 = _set____db54di;
  }
  ld0() {
    return this.cdq_1;
  }
  td9(_set____db54di) {
    this.ddq_1 = _set____db54di;
  }
  ud9() {
    return this.ddq_1;
  }
  vd9(_set____db54di) {
    this.edq_1 = _set____db54di;
  }
  wd9() {
    return this.edq_1;
  }
  xd9(_set____db54di) {
    this.fdq_1 = _set____db54di;
  }
  yd9() {
    return this.fdq_1;
  }
  zd9(_set____db54di) {
    this.gdq_1 = _set____db54di;
  }
  ada() {
    return this.gdq_1;
  }
  x38(_set____db54di) {
    this.hdq_1 = _set____db54di;
  }
  k38() {
    return this.hdq_1;
  }
  bda(_set____db54di) {
    this.idq_1 = _set____db54di;
  }
  ud6() {
    return this.idq_1;
  }
  rd1(_set____db54di) {
    this.jdq_1 = _set____db54di;
  }
  sd1() {
    return this.jdq_1;
  }
  td1(_set____db54di) {
    this.kdq_1 = _set____db54di;
  }
  ud1() {
    return this.kdq_1;
  }
  kd3(_set____db54di) {
    this.ldq_1 = _set____db54di;
  }
  ld3() {
    return this.ldq_1;
  }
  mao(_set____db54di) {
    this.mdq_1 = _set____db54di;
  }
  haj() {
    return this.mdq_1;
  }
  cda(_set____db54di) {
    this.ndq_1 = _set____db54di;
  }
  dda() {
    return this.ndq_1;
  }
  eda(_set____db54di) {
    this.odq_1 = _set____db54di;
  }
  fda() {
    return this.odq_1;
  }
  l38(_set____db54di) {
    this.pdq_1 = _set____db54di;
  }
  m38() {
    return this.pdq_1;
  }
  gda(_set____db54di) {
    this.qdq_1 = _set____db54di;
  }
  hda() {
    return this.qdq_1;
  }
  ida(_set____db54di) {
    this.rdq_1 = _set____db54di;
  }
  dar() {
    return this.rdq_1;
  }
  cab(_set____db54di) {
    this.sdq_1 = _set____db54di;
  }
  f7y() {
    return this.sdq_1;
  }
  daj(_set____db54di) {
    this.tdq_1 = _set____db54di;
  }
  a3j() {
    return this.tdq_1;
  }
  uap(_set____db54di) {
    this.udq_1 = _set____db54di;
  }
  vap() {
    return this.udq_1;
  }
  jda(_set____db54di) {
    this.vdq_1 = _set____db54di;
  }
  kda() {
    return this.vdq_1;
  }
  paq(_set____db54di) {
    this.wdq_1 = _set____db54di;
  }
  qaq() {
    return this.wdq_1;
  }
  vd1(_set____db54di) {
    this.xdq_1 = _set____db54di;
  }
  wd1() {
    return this.xdq_1;
  }
  lda(_set____db54di) {
    this.ydq_1 = _set____db54di;
  }
  mda() {
    return this.ydq_1;
  }
  nda(_set____db54di) {
    this.zdq_1 = _set____db54di;
  }
  oda() {
    return this.zdq_1;
  }
  pda(_set____db54di) {
    this.adr_1 = _set____db54di;
  }
  qda() {
    return this.adr_1;
  }
  rda(_set____db54di) {
    this.bdr_1 = _set____db54di;
  }
  sda() {
    return this.bdr_1;
  }
  tda(_set____db54di) {
    this.cdr_1 = _set____db54di;
  }
  uda() {
    return this.cdr_1;
  }
  vda(_set____db54di) {
    this.ddr_1 = _set____db54di;
  }
  wda() {
    return this.ddr_1;
  }
  xda(_set____db54di) {
    this.edr_1 = _set____db54di;
  }
  yda() {
    return this.edr_1;
  }
  zda(_set____db54di) {
    this.fdr_1 = _set____db54di;
  }
  adb() {
    return this.fdr_1;
  }
  bdb(_set____db54di) {
    this.gdr_1 = _set____db54di;
  }
  cdb() {
    return this.gdr_1;
  }
  ddb(_set____db54di) {
    this.hdr_1 = _set____db54di;
  }
  edb() {
    return this.hdr_1;
  }
  fdb(_set____db54di) {
    this.idr_1 = _set____db54di;
  }
  gdb() {
    return this.idr_1;
  }
  hdb(_set____db54di) {
    this.jdr_1 = _set____db54di;
  }
  idb() {
    return this.jdr_1;
  }
  jdb(_set____db54di) {
    this.kdr_1 = _set____db54di;
  }
  kdb() {
    return this.kdr_1;
  }
  ldb(_set____db54di) {
    this.ldr_1 = _set____db54di;
  }
  mdb() {
    return this.ldr_1;
  }
  ndb(_set____db54di) {
    this.mdr_1 = _set____db54di;
  }
  odb() {
    return this.mdr_1;
  }
  bd5(_set____db54di) {
    this.ndr_1 = _set____db54di;
  }
  cd5() {
    return this.ndr_1;
  }
  pdb(_set____db54di) {
    this.odr_1 = _set____db54di;
  }
  nbu() {
    return this.odr_1;
  }
  qdb(_set____db54di) {
    this.pdr_1 = _set____db54di;
  }
  rdb() {
    return this.pdr_1;
  }
  id1(_set____db54di) {
    this.caption = _set____db54di;
  }
  jd1() {
    return this.caption;
  }
  sdr() {
    return this.player;
  }
  static qdr(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, player, serializationConstructorMarker) {
    Companion_getInstance_29();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_26().adq_1);
    }
    var $this = this.jd9();
    $this.cdq_1 = blogName;
    $this.ddq_1 = idString;
    $this.edq_1 = genesisPostId;
    $this.fdq_1 = postUrl;
    $this.gdq_1 = parentPostUrl;
    $this.hdq_1 = type;
    $this.idq_1 = timestamp;
    $this.jdq_1 = date;
    $this.kdq_1 = format;
    $this.ldq_1 = reblogKey;
    $this.mdq_1 = tags;
    $this.ndq_1 = isBookmarklet;
    $this.odq_1 = isMobile;
    $this.pdq_1 = sourceUrl;
    $this.qdq_1 = sourceTitle;
    $this.rdq_1 = isLiked;
    $this.sdq_1 = state;
    $this.tdq_1 = title;
    $this.udq_1 = body;
    $this.vdq_1 = noteCount;
    $this.wdq_1 = summary;
    $this.xdq_1 = slug;
    $this.ydq_1 = rebloggedFromId;
    $this.zdq_1 = rebloggedFromUrl;
    $this.adr_1 = rebloggedFromName;
    $this.bdr_1 = rebloggedFromTitle;
    $this.cdr_1 = rebloggedFromUuid;
    $this.ddr_1 = rebloggedFromCanMessage;
    $this.edr_1 = rebloggedFromFollowing;
    $this.fdr_1 = rebloggedRootId;
    $this.gdr_1 = rebloggedRootUrl;
    $this.hdr_1 = rebloggedRootName;
    $this.idr_1 = rebloggedRootTitle;
    $this.jdr_1 = rebloggedRootUuid;
    $this.kdr_1 = rebloggedRootCanMessage;
    $this.ldr_1 = rebloggedRootFollowing;
    $this.mdr_1 = notes;
    $this.ndr_1 = blog;
    $this.odr_1 = reblog;
    $this.pdr_1 = trail;
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
    tmp0_serialDesc.o1b('name', true);
    tmp0_serialDesc.o1b('label', true);
    tmp0_serialDesc.o1b('phrase', true);
    this.tdr_1 = tmp0_serialDesc;
  }
  udr(encoder, value) {
    var tmp0_desc = this.tdr_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.label == null)) {
      tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.phrase == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.phrase);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.udr(encoder, value instanceof Dialogue ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.tdr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.w13(tmp0_desc);
    if (tmp7_input.l14()) {
      tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp7_input.x13(tmp0_desc);
    return Dialogue.vdr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  ez() {
    return this.tdr_1;
  }
  e1c() {
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
  y77() {
    return this.label;
  }
  wdr() {
    return this.phrase;
  }
  static vdr(seen0, name, label, phrase, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().tdr_1);
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
    tmp.xdr_1 = [null, null, lazy(tmp_0, Photo$Companion$$childSerializers$_anonymous__7997i0)];
  }
}
class $serializer_29 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Photo', this, 3);
    tmp0_serialDesc.o1b('caption', true);
    tmp0_serialDesc.o1b('original_size', true);
    tmp0_serialDesc.o1b('alt_sizes', true);
    this.ydr_1 = tmp0_serialDesc;
  }
  zdr(encoder, value) {
    var tmp0_desc = this.ydr_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().xdr_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.caption == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.originalSize == null)) {
      tmp1_output.o15(tmp0_desc, 1, $serializer_getInstance_29(), value.originalSize);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.altSizes == null)) {
      tmp1_output.o15(tmp0_desc, 2, tmp2_cached[2].d3(), value.altSizes);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.zdr(encoder, value instanceof Photo ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.ydr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.w13(tmp0_desc);
    var tmp8_cached = Companion_getInstance_31().xdr_1;
    if (tmp7_input.l14()) {
      tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp7_input.x13(tmp0_desc);
    return Photo.ads(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  ez() {
    return this.ydr_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_31().xdr_1;
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
  jd1() {
    return this.caption;
  }
  bds() {
    return this.originalSize;
  }
  cds() {
    return this.altSizes;
  }
  static ads(seen0, caption, originalSize, altSizes, serializationConstructorMarker) {
    Companion_getInstance_31();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().ydr_1);
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
    tmp0_serialDesc.o1b('width', true);
    tmp0_serialDesc.o1b('height', true);
    tmp0_serialDesc.o1b('url', true);
    this.dds_1 = tmp0_serialDesc;
  }
  eds(encoder, value) {
    var tmp0_desc = this.dds_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.width === 0)) {
      tmp1_output.g15(tmp0_desc, 0, value.width);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.height === 0)) {
      tmp1_output.g15(tmp0_desc, 1, value.height);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.eds(encoder, value instanceof PhotoSize ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.dds_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.w13(tmp0_desc);
    if (tmp7_input.l14()) {
      tmp4_local0 = tmp7_input.b14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b14(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.b14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp7_input.x13(tmp0_desc);
    return PhotoSize.fds(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  ez() {
    return this.dds_1;
  }
  e1c() {
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
  q38() {
    return this.width;
  }
  s38() {
    return this.height;
  }
  m4n() {
    return this.url;
  }
  static fds(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().dds_1);
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
    tmp0_serialDesc.o1b('width', true);
    tmp0_serialDesc.o1b('embedCode', true);
    this.gds_1 = tmp0_serialDesc;
  }
  hds(encoder, value) {
    var tmp0_desc = this.gds_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.o15(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.embedCode == null)) {
      tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.embedCode);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.hds(encoder, value instanceof Video ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.gds_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return Video.jds(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.gds_1;
  }
  e1c() {
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
  q38() {
    return this.width;
  }
  kds() {
    return this.embedCode;
  }
  static jds(seen0, width, embedCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().gds_1);
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
    tmp0_serialDesc.o1b('name', true);
    tmp0_serialDesc.o1b('active', true);
    tmp0_serialDesc.o1b('theme', true);
    tmp0_serialDesc.o1b('share_likes', true);
    tmp0_serialDesc.o1b('share_following', true);
    tmp0_serialDesc.o1b('can_be_followed', true);
    this.lds_1 = tmp0_serialDesc;
  }
  mds(encoder, value) {
    var tmp0_desc = this.lds_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.isActive === false)) {
      tmp1_output.d15(tmp0_desc, 1, value.isActive);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.theme == null)) {
      tmp1_output.o15(tmp0_desc, 2, $serializer_getInstance_16(), value.theme);
    }
    if (tmp1_output.s15(tmp0_desc, 3) ? true : !(value.isShareLikes === false)) {
      tmp1_output.d15(tmp0_desc, 3, value.isShareLikes);
    }
    if (tmp1_output.s15(tmp0_desc, 4) ? true : !(value.isShareFollowing === false)) {
      tmp1_output.d15(tmp0_desc, 4, value.isShareFollowing);
    }
    if (tmp1_output.s15(tmp0_desc, 5) ? true : !(value.isCanBeFollowed === false)) {
      tmp1_output.d15(tmp0_desc, 5, value.isCanBeFollowed);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.mds(encoder, value instanceof BlogInTrail ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.lds_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.w13(tmp0_desc);
    if (tmp10_input.l14()) {
      tmp4_local0 = tmp10_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.y13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.k14(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.y13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.y13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.y13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.y13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.k14(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.y13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.y13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.y13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp10_input.x13(tmp0_desc);
    return BlogInTrail.nds(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  ez() {
    return this.lds_1;
  }
  e1c() {
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
  p25() {
    return this.isActive;
  }
  wd7() {
    return this.theme;
  }
  ods() {
    return this.isShareLikes;
  }
  pds() {
    return this.isShareFollowing;
  }
  qds() {
    return this.isCanBeFollowed;
  }
  static nds(seen0, name, isActive, theme, isShareLikes, isShareFollowing, isCanBeFollowed, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().lds_1);
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
    tmp0_serialDesc.o1b('id', true);
    this.rds_1 = tmp0_serialDesc;
  }
  sds(encoder, value) {
    var tmp0_desc = this.rds_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.sds(encoder, value instanceof IdInTrail ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.rds_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.w13(tmp0_desc);
    if (tmp5_input.l14()) {
      tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp5_input.x13(tmp0_desc);
    return IdInTrail.tds(tmp3_bitMask0, tmp4_local0, null);
  }
  ez() {
    return this.rds_1;
  }
  e1c() {
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
  j3f() {
    return this.id;
  }
  static tds(seen0, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().rds_1);
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
    tmp0_serialDesc.o1b('blog', true);
    tmp0_serialDesc.o1b('post', true);
    tmp0_serialDesc.o1b('content_raw', true);
    tmp0_serialDesc.o1b('content', true);
    tmp0_serialDesc.o1b('current_item', true);
    tmp0_serialDesc.o1b('root_item', true);
    this.uds_1 = tmp0_serialDesc;
  }
  vds(encoder, value) {
    var tmp0_desc = this.uds_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.o15(tmp0_desc, 0, $serializer_getInstance_31(), value.blog);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.post == null)) {
      tmp1_output.o15(tmp0_desc, 1, $serializer_getInstance_32(), value.post);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.contentRaw == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.contentRaw);
    }
    if (tmp1_output.s15(tmp0_desc, 3) ? true : !(value.content == null)) {
      tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.content);
    }
    if (tmp1_output.s15(tmp0_desc, 4) ? true : !(value.isCurrentItem === false)) {
      tmp1_output.d15(tmp0_desc, 4, value.isCurrentItem);
    }
    if (tmp1_output.s15(tmp0_desc, 5) ? true : !(value.isRootItem === false)) {
      tmp1_output.d15(tmp0_desc, 5, value.isRootItem);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.vds(encoder, value instanceof Trail ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.uds_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.w13(tmp0_desc);
    if (tmp10_input.l14()) {
      tmp4_local0 = tmp10_input.k14(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.k14(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.y13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.y13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.k14(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.k14(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.y13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.y13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp10_input.x13(tmp0_desc);
    return Trail.wds(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  ez() {
    return this.uds_1;
  }
  e1c() {
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
  cd5() {
    return this.blog;
  }
  e6d() {
    return this.post;
  }
  xds() {
    return this.contentRaw;
  }
  c1p() {
    return this.content;
  }
  yds() {
    return this.isCurrentItem;
  }
  zds() {
    return this.isRootItem;
  }
  static wds(seen0, blog, post, contentRaw, content, isCurrentItem, isRootItem, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().uds_1);
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
    tmp0_serialDesc.o1b('name', true);
    tmp0_serialDesc.o1b('following', true);
    tmp0_serialDesc.o1b('url', true);
    tmp0_serialDesc.o1b('updated', true);
    this.adt_1 = tmp0_serialDesc;
  }
  bdt(encoder, value) {
    var tmp0_desc = this.adt_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.following == null)) {
      tmp1_output.o15(tmp0_desc, 1, BooleanSerializer_getInstance(), value.following);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.s15(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.o15(tmp0_desc, 3, StringSerializer_getInstance(), value.updated);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.bdt(encoder, value instanceof FollowerUser ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.adt_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.w13(tmp0_desc);
    if (tmp8_input.l14()) {
      tmp4_local0 = tmp8_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.k14(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.k14(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.k14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp8_input.x13(tmp0_desc);
    return FollowerUser.cdt(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  ez() {
    return this.adt_1;
  }
  e1c() {
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
  y36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  j6g(_set____db54di) {
    this.following = _set____db54di;
  }
  t3a() {
    return this.following;
  }
  a9l(_set____db54di) {
    this.url = _set____db54di;
  }
  m4n() {
    return this.url;
  }
  ddt(_set____db54di) {
    this.updated = _set____db54di;
  }
  pd7() {
    return this.updated;
  }
  static cdt(seen0, name, following, url, updated, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().adt_1);
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
    tmp.edt_1 = [null, null, null, null, lazy(tmp_0, User$Companion$$childSerializers$_anonymous__6nf9sv)];
  }
}
class $serializer_36 {
  constructor() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.User', this, 5);
    tmp0_serialDesc.o1b('following', true);
    tmp0_serialDesc.o1b('default_post_format', true);
    tmp0_serialDesc.o1b('name', true);
    tmp0_serialDesc.o1b('likes', true);
    tmp0_serialDesc.o1b('blogs', true);
    this.fdt_1 = tmp0_serialDesc;
  }
  gdt(encoder, value) {
    var tmp0_desc = this.fdt_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_38().edt_1;
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.followingCount == null)) {
      tmp1_output.o15(tmp0_desc, 0, IntSerializer_getInstance(), value.followingCount);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.defaultPostFormat == null)) {
      tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.defaultPostFormat);
    }
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.o15(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.s15(tmp0_desc, 3) ? true : !(value.likeCount == null)) {
      tmp1_output.o15(tmp0_desc, 3, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.s15(tmp0_desc, 4) ? true : !(value.blogs == null)) {
      tmp1_output.o15(tmp0_desc, 4, tmp2_cached[4].d3(), value.blogs);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.gdt(encoder, value instanceof User ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.fdt_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.w13(tmp0_desc);
    var tmp10_cached = Companion_getInstance_38().edt_1;
    if (tmp9_input.l14()) {
      tmp4_local0 = tmp9_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.k14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.k14(tmp0_desc, 4, tmp10_cached[4].d3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.k14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.k14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.k14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.k14(tmp0_desc, 4, tmp10_cached[4].d3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp9_input.x13(tmp0_desc);
    return User.hdt(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  ez() {
    return this.fdt_1;
  }
  e1c() {
    var tmp0_cached = Companion_getInstance_38().edt_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[4].d3())];
  }
}
class User extends Resource {
  constructor() {
    return new.target.idt();
  }
  static idt() {
    Companion_getInstance_38();
    var $this = this.gd7();
    $this.followingCount = null;
    $this.defaultPostFormat = null;
    $this.name = null;
    $this.likeCount = null;
    $this.blogs = null;
    return $this;
  }
  g36() {
    return this.followingCount;
  }
  jdt() {
    return this.defaultPostFormat;
  }
  d1() {
    return this.name;
  }
  i34() {
    return this.likeCount;
  }
  vd4() {
    return this.blogs;
  }
  static hdt(seen0, followingCount, defaultPostFormat, name, likeCount, blogs, serializationConstructorMarker) {
    Companion_getInstance_38();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().fdt_1);
    }
    var $this = this.gd7();
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
    this.kdt_1 = auth;
  }
  *mdt(path, params, files, $completion) {
    return yield* /*#__NOINLINE__*/proceedUnit(this, AbstractResourceImpl$oauthPostUnit$slambda(path, this, params, files), $completion);
  }
  ndt(path, params, files, $completion, $super) {
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
    return $super === VOID ? this.mdt(path, params, files, $completion) : $super.mdt.call(this, path, params, files, $completion);
  }
  *odt(path, params, $completion) {
    return yield* /*#__NOINLINE__*/proceedUnit(this, AbstractResourceImpl$oauthPutUnit$slambda(path, this, params), $completion);
  }
  pdt(blogName, extPath) {
    return '/blog/' + blogUrl(this, blogName) + extPath;
  }
}
class AuthResourceImpl extends AbstractResourceImpl {
  authorizeUrl(request) {
    // Inline function 'kotlin.apply' call
    var this_0 = new URLBuilder();
    this_0.v49(Companion_getInstance().x49_1);
    this_0.m48_1 = 'www.tumblr.com';
    set_encodedPath(this_0, '/oauth2/authorize');
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.v48_1;
    this_1.k3s('client_id', this.kdt_1.fcw_1);
    this_1.k3s('response_type', request.responseType);
    this_1.k3s('state', ensureNotNull(request.state));
    this_1.k3s('scope', request.scope);
    var tmp0_safe_receiver = request.redirectUri;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_1.k3s('redirect_uri', tmp0_safe_receiver);
    }
    return this_0.l40().toString();
  }
  *zcw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2/oauth2/token').d55(request.hd0()).f55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.q10(tmp$ret$4, obj);
          tmp$ret$0 = new Response(tmp$ret$2, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oAuth2Token(request) {
    return promisify(($completion) => this.zcw(request, $completion));
  }
  *xcw(request, $completion) {
    return this.oAuth2Token === protoOf(AuthResourceImpl).oAuth2Token ? (yield* this.zcw(request, $completion)) : (yield* await_0(this.oAuth2Token(request), $completion));
  }
  acx(request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenBlocking$slambda(this, request));
  }
  *bcx(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2/oauth2/token').d55(request.hd0()).f55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.q10(tmp$ret$4, obj);
          tmp$ret$0 = new Response(tmp$ret$2, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oAuth2TokenRefresh(request) {
    return promisify(($completion) => this.bcx(request, $completion));
  }
  *ycw(request, $completion) {
    return this.oAuth2TokenRefresh === protoOf(AuthResourceImpl).oAuth2TokenRefresh ? (yield* this.bcx(request, $completion)) : (yield* await_0(this.oAuth2TokenRefresh(request), $completion));
  }
  ccx(request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this, request));
  }
}
class BlogResourceImpl extends AbstractResourceImpl {
  *lcx(request, $completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.pdt(ensureNotNull(request.blogName), '/info');
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + path).u54(MediaType_getInstance().ldt_1).b55(params).a55('api_key', this.kdt_1.fcw_1).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogInfoResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.q10(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  blogInfo(request) {
    return promisify(($completion) => this.lcx(request, $completion));
  }
  *dcx(request, $completion) {
    return this.blogInfo === protoOf(BlogResourceImpl).blogInfo ? (yield* this.lcx(request, $completion)) : (yield* await_0(this.blogInfo(request), $completion));
  }
  mcx(request) {
    return toBlocking(BlogResourceImpl$blogInfoBlocking$slambda(this, request));
  }
  *ncx(request, $completion) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    var path = this.pdt(ensureNotNull(request.blogName), '/avatar' + ext);
    var r = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + path).y54(false).e55($completion);
    var tmp0 = r.k55_1.v4('location');
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
    return new Response(url.n2(0), url.n2(0));
  }
  blogAvatar(request) {
    return promisify(($completion) => this.ncx(request, $completion));
  }
  *ocx(request, $completion) {
    return this.blogAvatar === protoOf(BlogResourceImpl).blogAvatar ? (yield* this.ncx(request, $completion)) : (yield* await_0(this.blogAvatar(request), $completion));
  }
  pcx(request) {
    return toBlocking(BlogResourceImpl$blogAvatarBlocking$slambda(this, request));
  }
  *qcx(request, $completion) {
    var tmp2 = this.pdt(ensureNotNull(request.blogName), '/likes');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).u54(MediaType_getInstance().ldt_1).b55(params).a55('api_key', this.kdt_1.fcw_1).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogLikesResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogLikes(request) {
    return promisify(($completion) => this.qcx(request, $completion));
  }
  *ecx(request, $completion) {
    return this.blogLikes === protoOf(BlogResourceImpl).blogLikes ? (yield* this.qcx(request, $completion)) : (yield* await_0(this.blogLikes(request), $completion));
  }
  rcx(request) {
    return toBlocking(BlogResourceImpl$blogLikesBlocking$slambda(this, request));
  }
  *scx(request, $completion) {
    var tmp2 = this.pdt(ensureNotNull(request.blogName), '/following');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowingResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogFollowing(request) {
    return promisify(($completion) => this.scx(request, $completion));
  }
  *tcx(request, $completion) {
    return this.blogFollowing === protoOf(BlogResourceImpl).blogFollowing ? (yield* this.scx(request, $completion)) : (yield* await_0(this.blogFollowing(request), $completion));
  }
  ucx(request) {
    return toBlocking(BlogResourceImpl$blogFollowingBlocking$slambda(this, request));
  }
  *vcx(request, $completion) {
    var tmp2 = this.pdt(ensureNotNull(request.blogName), '/followers');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowersResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogFollowers(request) {
    return promisify(($completion) => this.vcx(request, $completion));
  }
  *fcx(request, $completion) {
    return this.blogFollowers === protoOf(BlogResourceImpl).blogFollowers ? (yield* this.vcx(request, $completion)) : (yield* await_0(this.blogFollowers(request), $completion));
  }
  wcx(request) {
    return toBlocking(BlogResourceImpl$blogFollowersBlocking$slambda(this, request));
  }
  *xcx(request, $completion) {
    var ext = request.type == null ? '' : '/' + ensureNotNull(request.type);
    var tmp2 = this.pdt(ensureNotNull(request.blogName), '/posts' + ext);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogPosts(request) {
    return promisify(($completion) => this.xcx(request, $completion));
  }
  *gcx(request, $completion) {
    return this.blogPosts === protoOf(BlogResourceImpl).blogPosts ? (yield* this.xcx(request, $completion)) : (yield* await_0(this.blogPosts(request), $completion));
  }
  ycx(request) {
    return toBlocking(BlogResourceImpl$blogPostsBlocking$slambda(this, request));
  }
  *zcx(request, $completion) {
    var tmp2 = this.pdt(ensureNotNull(request.blogName), '/posts/queue');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogQueuedPosts(request) {
    return promisify(($completion) => this.zcx(request, $completion));
  }
  *acy(request, $completion) {
    return this.blogQueuedPosts === protoOf(BlogResourceImpl).blogQueuedPosts ? (yield* this.zcx(request, $completion)) : (yield* await_0(this.blogQueuedPosts(request), $completion));
  }
  bcy(request) {
    return toBlocking(BlogResourceImpl$blogQueuedPostsBlocking$slambda(this, request));
  }
  *ccy(request, $completion) {
    var tmp2 = this.pdt(ensureNotNull(request.blogName), '/posts/draft');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogDraftPosts(request) {
    return promisify(($completion) => this.ccy(request, $completion));
  }
  *dcy(request, $completion) {
    return this.blogDraftPosts === protoOf(BlogResourceImpl).blogDraftPosts ? (yield* this.ccy(request, $completion)) : (yield* await_0(this.blogDraftPosts(request), $completion));
  }
  ecy(request) {
    return toBlocking(BlogResourceImpl$blogDraftPostsBlocking$slambda(this, request));
  }
  *fcy(request, $completion) {
    var tmp2 = this.pdt(ensureNotNull(request.blogName), '/posts/submission');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogSubmissions(request) {
    return promisify(($completion) => this.fcy(request, $completion));
  }
  *gcy(request, $completion) {
    return this.blogSubmissions === protoOf(BlogResourceImpl).blogSubmissions ? (yield* this.fcy(request, $completion)) : (yield* await_0(this.blogSubmissions(request), $completion));
  }
  hcy(request) {
    return toBlocking(BlogResourceImpl$blogSubmissionsBlocking$slambda(this, request));
  }
  *icy(request, $completion) {
    var tmp = this.pdt(ensureNotNull(request.blogName), '/post');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.hd0();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.hd0();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.hd0();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.hd0();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.hd0();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.hd0();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.hd0();
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
      tmp_2 = request.id2();
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_2 = emptyMap();
    }
    return yield* this.mdt(tmp, tmp_1, tmp_2, $completion);
  }
  postCreate(request) {
    return promisify(($completion) => this.icy(request, $completion));
  }
  *hcx(request, $completion) {
    return this.postCreate === protoOf(BlogResourceImpl).postCreate ? (yield* this.icy(request, $completion)) : (yield* await_0(this.postCreate(request), $completion));
  }
  jcy(request) {
    return toBlocking(BlogResourceImpl$postCreateBlocking$slambda(this, request));
  }
  *kcy(request, $completion) {
    var tmp = this.pdt(ensureNotNull(request.blogName), '/post/edit');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.hd0();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.hd0();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.hd0();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.hd0();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.hd0();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.hd0();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.hd0();
                } else {
                  throw IllegalArgumentException.a2('Unknown post type.');
                }
              }
            }
          }
        }
      }
    }
    return yield* this.ndt(tmp, tmp_0, VOID, $completion);
  }
  postEdit(request) {
    return promisify(($completion) => this.kcy(request, $completion));
  }
  *icx(request, $completion) {
    return this.postEdit === protoOf(BlogResourceImpl).postEdit ? (yield* this.kcy(request, $completion)) : (yield* await_0(this.postEdit(request), $completion));
  }
  lcy(request) {
    return toBlocking(BlogResourceImpl$postEditBlocking$slambda(this, request));
  }
  *mcy(request, $completion) {
    return yield* this.ndt(this.pdt(ensureNotNull(request.blogName), '/post/reblog'), request.hd0(), VOID, $completion);
  }
  postReblog(request) {
    return promisify(($completion) => this.mcy(request, $completion));
  }
  *jcx(request, $completion) {
    return this.postReblog === protoOf(BlogResourceImpl).postReblog ? (yield* this.mcy(request, $completion)) : (yield* await_0(this.postReblog(request), $completion));
  }
  ncy(request) {
    return toBlocking(BlogResourceImpl$postReblogBlocking$slambda(this, request));
  }
  *ocy(request, $completion) {
    return yield* this.ndt(this.pdt(ensureNotNull(request.blogName), '/post/delete'), request.hd0(), VOID, $completion);
  }
  postDelete(request) {
    return promisify(($completion) => this.ocy(request, $completion));
  }
  *kcx(request, $completion) {
    return this.postDelete === protoOf(BlogResourceImpl).postDelete ? (yield* this.ocy(request, $completion)) : (yield* await_0(this.postDelete(request), $completion));
  }
  pcy(request) {
    return toBlocking(BlogResourceImpl$postDeleteBlocking$slambda(this, request));
  }
  *qcy(request, $completion) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.pdt(ensureNotNull(request.blogName), '/banner' + ext);
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + path).u54(MediaType_getInstance().ldt_1).b55(params).a55('api_key', this.kdt_1.fcw_1).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogBannerResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.q10(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  blogBanner(request) {
    return promisify(($completion) => this.qcy(request, $completion));
  }
  *rcy(request, $completion) {
    return this.blogBanner === protoOf(BlogResourceImpl).blogBanner ? (yield* this.qcy(request, $completion)) : (yield* await_0(this.blogBanner(request), $completion));
  }
  scy(request) {
    return toBlocking(BlogResourceImpl$blogBannerBlocking$slambda(this, request));
  }
  *tcy(request, $completion) {
    return yield* this.odt(this.pdt(ensureNotNull(request.blogName), '/info'), request.hd0(), $completion);
  }
  blogUpdateInfo(request) {
    return promisify(($completion) => this.tcy(request, $completion));
  }
  *ucy(request, $completion) {
    return this.blogUpdateInfo === protoOf(BlogResourceImpl).blogUpdateInfo ? (yield* this.tcy(request, $completion)) : (yield* await_0(this.blogUpdateInfo(request), $completion));
  }
  vcy(request) {
    return toBlocking(BlogResourceImpl$blogUpdateInfoBlocking$slambda(this, request));
  }
  *wcy(request, $completion) {
    return yield* this.ndt(this.pdt(ensureNotNull(request.blogName), '/post/edit/tags'), request.hd0(), VOID, $completion);
  }
  postEditTags(request) {
    return promisify(($completion) => this.wcy(request, $completion));
  }
  *xcy(request, $completion) {
    return this.postEditTags === protoOf(BlogResourceImpl).postEditTags ? (yield* this.wcy(request, $completion)) : (yield* await_0(this.postEditTags(request), $completion));
  }
  ycy(request) {
    return toBlocking(BlogResourceImpl$postEditTagsBlocking$slambda(this, request));
  }
  *zcy(request, $completion) {
    return yield* this.mdt(this.pdt(ensureNotNull(request.blogName), '/post/edit'), request.hd0(), request.toFileMap(), $completion);
  }
  postUpdate(request) {
    return promisify(($completion) => this.zcy(request, $completion));
  }
  *acz(request, $completion) {
    return this.postUpdate === protoOf(BlogResourceImpl).postUpdate ? (yield* this.zcy(request, $completion)) : (yield* await_0(this.postUpdate(request), $completion));
  }
  bcz(request) {
    return toBlocking(BlogResourceImpl$postUpdateBlocking$slambda(this, request));
  }
}
class TaggedResourceImpl extends AbstractResourceImpl {
  *dcz(request, $completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + '/tagged').u54(MediaType_getInstance().ldt_1).b55(params).a55('api_key', this.kdt_1.fcw_1).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ug(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Post), arrayOf([]), false))]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  tagged(request) {
    return promisify(($completion) => this.dcz(request, $completion));
  }
  *ccz(request, $completion) {
    return this.tagged === protoOf(TaggedResourceImpl).tagged ? (yield* this.dcz(request, $completion)) : (yield* await_0(this.tagged(request), $completion));
  }
  ecz(request) {
    return toBlocking(TaggedResourceImpl$taggedBlocking$slambda(this, request));
  }
}
class UserResourceImpl extends AbstractResourceImpl {
  *mcz($completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var path = '/user/info';
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + path).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.q10(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  user() {
    return promisify(($completion) => this.mcz($completion));
  }
  *fcz($completion) {
    return this.user === protoOf(UserResourceImpl).user ? (yield* this.mcz($completion)) : (yield* await_0(this.user(), $completion));
  }
  ncz() {
    return toBlocking(UserResourceImpl$userBlocking$slambda(this));
  }
  *ocz(request, $completion) {
    var tmp2 = '/user/dashboard';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserDashboardResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userDashboard(request) {
    return promisify(($completion) => this.ocz(request, $completion));
  }
  *gcz(request, $completion) {
    return this.userDashboard === protoOf(UserResourceImpl).userDashboard ? (yield* this.ocz(request, $completion)) : (yield* await_0(this.userDashboard(request), $completion));
  }
  pcz(request) {
    return toBlocking(UserResourceImpl$userDashboardBlocking$slambda(this, request));
  }
  *qcz(request, $completion) {
    var tmp2 = '/user/following';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserFollowingResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userFollowing(request) {
    return promisify(($completion) => this.qcz(request, $completion));
  }
  *hcz(request, $completion) {
    return this.userFollowing === protoOf(UserResourceImpl).userFollowing ? (yield* this.qcz(request, $completion)) : (yield* await_0(this.userFollowing(request), $completion));
  }
  rcz(request) {
    return toBlocking(UserResourceImpl$userFollowingBlocking$slambda(this, request));
  }
  *scz(request, $completion) {
    var tmp2 = '/user/likes';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.hd0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + tmp2).v54('Authorization', this.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).b55(params).e55($completion);
        var containsArg = response.j55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.n55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.rdt_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.pz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserLikesResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.q10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.n55());
          break $l$block;
        }
        throw TumblrException.qcw(response.j55_1, response.n55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userLikes(request) {
    return promisify(($completion) => this.scz(request, $completion));
  }
  *tcz(request, $completion) {
    return this.userLikes === protoOf(UserResourceImpl).userLikes ? (yield* this.scz(request, $completion)) : (yield* await_0(this.userLikes(request), $completion));
  }
  ucz(request) {
    return toBlocking(UserResourceImpl$userLikesBlocking$slambda(this, request));
  }
  *vcz(request, $completion) {
    return yield* this.ndt('/user/like', request.hd0(), VOID, $completion);
  }
  like(request) {
    return promisify(($completion) => this.vcz(request, $completion));
  }
  *icz(request, $completion) {
    return this.like === protoOf(UserResourceImpl).like ? (yield* this.vcz(request, $completion)) : (yield* await_0(this.like(request), $completion));
  }
  wcz(request) {
    return toBlocking(UserResourceImpl$likeBlocking$slambda(this, request));
  }
  *xcz(request, $completion) {
    return yield* this.ndt('/user/unlike', request.hd0(), VOID, $completion);
  }
  unlike(request) {
    return promisify(($completion) => this.xcz(request, $completion));
  }
  *jcz(request, $completion) {
    return this.unlike === protoOf(UserResourceImpl).unlike ? (yield* this.xcz(request, $completion)) : (yield* await_0(this.unlike(request), $completion));
  }
  ycz(request) {
    return toBlocking(UserResourceImpl$unlikeBlocking$slambda(this, request));
  }
  *zcz(request, $completion) {
    return yield* this.ndt('/user/follow', request.hd0(), VOID, $completion);
  }
  follow(request) {
    return promisify(($completion) => this.zcz(request, $completion));
  }
  *kcz(request, $completion) {
    return this.follow === protoOf(UserResourceImpl).follow ? (yield* this.zcz(request, $completion)) : (yield* await_0(this.follow(request), $completion));
  }
  ad0(request) {
    return toBlocking(UserResourceImpl$followBlocking$slambda(this, request));
  }
  *bd0(request, $completion) {
    return yield* this.ndt('/user/unfollow', request.hd0(), VOID, $completion);
  }
  unfollow(request) {
    return promisify(($completion) => this.bd0(request, $completion));
  }
  *lcz(request, $completion) {
    return this.unfollow === protoOf(UserResourceImpl).unfollow ? (yield* this.bd0(request, $completion)) : (yield* await_0(this.unfollow(request), $completion));
  }
  cd0(request) {
    return toBlocking(UserResourceImpl$unfollowBlocking$slambda(this, request));
  }
}
class AnySerializer {
  constructor() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.vdt_1 = AnySerializer$additionalSerializer$lambda;
    this.wdt_1 = buildClassSerialDescriptor('Any', []);
  }
  ez() {
    return this.wdt_1;
  }
  sz(decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException.a2(toString(message));
    }
    var element = decoder.v1o();
    return toAny(this, element);
  }
  q8f(encoder, value) {
    if (typeof value === 'number') {
      encoder.v14(value);
    } else {
      if (typeof value === 'bigint') {
        encoder.w14(value);
      } else {
        if (typeof value === 'number') {
          encoder.u14(value);
        } else {
          if (typeof value === 'number') {
            encoder.x14(value);
          } else {
            if (typeof value === 'number') {
              encoder.y14(value);
            } else {
              if (typeof value === 'string') {
                encoder.a15(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.s14(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.a15(toString(this));
                  } else {
                    if (!this.vdt_1(encoder, value)) {
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
  rz(encoder, value) {
    return this.q8f(encoder, !(value == null) ? value : THROW_CCE());
  }
}
class Json_0 {
  constructor() {
    Json_instance = this;
    var tmp = this;
    tmp.rdt_1 = Json(VOID, Json$json$lambda);
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.ldt_1 = Application_getInstance().v3x_1.toString();
  }
}
class PostSerializer extends JsonContentPolymorphicSerializer {
  constructor() {
    PostSerializer_instance = null;
    super(getKClass(Post));
    PostSerializer_instance = this;
  }
  w1o(element) {
    var type = get_jsonObject(element).bj('type');
    var tmp;
    var tmp_0;
    if (type instanceof JsonPrimitive) {
      tmp_0 = type.b1p();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      switch (type.c1p()) {
        case 'text':
          tmp = Companion_getInstance_28().p1p();
          break;
        case 'photo':
          tmp = Companion_getInstance_25().p1p();
          break;
        case 'quote':
          tmp = Companion_getInstance_27().p1p();
          break;
        case 'link':
          tmp = Companion_getInstance_24().p1p();
          break;
        case 'video':
          tmp = Companion_getInstance_29().p1p();
          break;
        case 'audio':
          tmp = Companion_getInstance_22().p1p();
          break;
        case 'chat':
          tmp = Companion_getInstance_23().p1p();
          break;
        case 'answer':
          tmp = Companion_getInstance_21().p1p();
          break;
        case 'postcard':
          tmp = Companion_getInstance_26().p1p();
          break;
        default:
          tmp = Companion_instance_19.p1p();
          break;
      }
    } else {
      tmp = Companion_instance_19.p1p();
    }
    return tmp;
  }
}
//endregion
function init_work_socialhub_ktumblr_TumblrException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.ocw_1);
  _this__u8e3s4.mcw_1 = null;
  _this__u8e3s4.ncw_1 = null;
}
var TumblrFactory_instance;
function TumblrFactory_getInstance() {
  return TumblrFactory_instance;
}
function *oAuth2Token$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.xcw) ? (yield* $this.xcw(request, $completion)) : (yield* await_0($this.oAuth2Token(request), $completion));
}
function *oAuth2TokenRefresh$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.ycw) ? (yield* $this.ycw(request, $completion)) : (yield* await_0($this.oAuth2TokenRefresh(request), $completion));
}
function *blogInfo$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.dcx) ? (yield* $this.dcx(request, $completion)) : (yield* await_0($this.blogInfo(request), $completion));
}
function *blogLikes$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.ecx) ? (yield* $this.ecx(request, $completion)) : (yield* await_0($this.blogLikes(request), $completion));
}
function *blogFollowers$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.fcx) ? (yield* $this.fcx(request, $completion)) : (yield* await_0($this.blogFollowers(request), $completion));
}
function *blogPosts$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.gcx) ? (yield* $this.gcx(request, $completion)) : (yield* await_0($this.blogPosts(request), $completion));
}
function *postCreate$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.hcx) ? (yield* $this.hcx(request, $completion)) : (yield* await_0($this.postCreate(request), $completion));
}
function *postEdit$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.icx) ? (yield* $this.icx(request, $completion)) : (yield* await_0($this.postEdit(request), $completion));
}
function *postReblog$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.jcx) ? (yield* $this.jcx(request, $completion)) : (yield* await_0($this.postReblog(request), $completion));
}
function *postDelete$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.kcx) ? (yield* $this.kcx(request, $completion)) : (yield* await_0($this.postDelete(request), $completion));
}
function *tagged$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.ccz) ? (yield* $this.ccz(request, $completion)) : (yield* await_0($this.tagged(request), $completion));
}
function *user$virtualSuspendBridge($this, $completion) {
  return jsIsFunction($this.fcz) ? (yield* $this.fcz($completion)) : (yield* await_0($this.user(), $completion));
}
function *userDashboard$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.gcz) ? (yield* $this.gcz(request, $completion)) : (yield* await_0($this.userDashboard(request), $completion));
}
function *userFollowing$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.hcz) ? (yield* $this.hcz(request, $completion)) : (yield* await_0($this.userFollowing(request), $completion));
}
function *like$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.icz) ? (yield* $this.icz(request, $completion)) : (yield* await_0($this.like(request), $completion));
}
function *unlike$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.jcz) ? (yield* $this.jcz(request, $completion)) : (yield* await_0($this.unlike(request), $completion));
}
function *follow$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.kcz) ? (yield* $this.kcz(request, $completion)) : (yield* await_0($this.follow(request), $completion));
}
function *unfollow$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.lcz) ? (yield* $this.lcz(request, $completion)) : (yield* await_0($this.unfollow(request), $completion));
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
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
    var containsArg = response.j55_1;
    if (200 <= containsArg ? containsArg <= 299 : false) {
      return new ResponseUnit(response.n55());
    }
    throw TumblrException.qcw(response.j55_1, response.n55());
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
      throw tmp0_elvis_lhs == null ? TumblrException.pcw(e) : tmp0_elvis_lhs;
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
    var this_0 = (new HttpRequest()).t54('https://api.tumblr.com/v2' + $path).v54('Authorization', this$0.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).d55($params);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $files.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var key = element.c3();
      // Inline function 'kotlin.collections.component2' call
      var pair = element.d3();
      this_0.r53(key, pair.first, pair.second);
    }
    return yield* this_0.f55($completion);
  }, 0);
}
function AbstractResourceImpl$oauthPutUnit$slambda($path, this$0, $params) {
  return constructCallableReference(function *($completion) {
    return yield* (new HttpRequest()).t54('https://api.tumblr.com/v2' + $path).v54('Authorization', this$0.kdt_1.jcw()).u54(MediaType_getInstance().ldt_1).d55($params).g55($completion);
  }, 0);
}
function AuthResourceImpl$oAuth2TokenBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.xcw($request, $completion);
  }, 1);
}
function AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ycw($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogInfoBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.dcx($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogAvatarBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ocx($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogLikesBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ecx($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogFollowingBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.tcx($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogFollowersBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.fcx($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogPostsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.gcx($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogQueuedPostsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.acy($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogDraftPostsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.dcy($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogSubmissionsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.gcy($request, $completion);
  }, 1);
}
function BlogResourceImpl$postCreateBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.hcx($request, $completion);
  }, 1);
}
function BlogResourceImpl$postEditBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.icx($request, $completion);
  }, 1);
}
function BlogResourceImpl$postReblogBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.jcx($request, $completion);
  }, 1);
}
function BlogResourceImpl$postDeleteBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.kcx($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogBannerBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.rcy($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogUpdateInfoBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ucy($request, $completion);
  }, 1);
}
function BlogResourceImpl$postEditTagsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.xcy($request, $completion);
  }, 1);
}
function BlogResourceImpl$postUpdateBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.acz($request, $completion);
  }, 1);
}
function TaggedResourceImpl$taggedBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ccz($request, $completion);
  }, 1);
}
function UserResourceImpl$userBlocking$slambda(this$0) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.fcz($completion);
  }, 1);
}
function UserResourceImpl$userDashboardBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.gcz($request, $completion);
  }, 1);
}
function UserResourceImpl$userFollowingBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.hcz($request, $completion);
  }, 1);
}
function UserResourceImpl$userLikesBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.tcz($request, $completion);
  }, 1);
}
function UserResourceImpl$likeBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.icz($request, $completion);
  }, 1);
}
function UserResourceImpl$unlikeBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.jcz($request, $completion);
  }, 1);
}
function UserResourceImpl$followBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.kcz($request, $completion);
  }, 1);
}
function UserResourceImpl$unfollowBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.lcz($request, $completion);
  }, 1);
}
function toAny($this, $receiver) {
  if ($receiver instanceof JsonPrimitive) {
    var tmp;
    if ($receiver.b1p()) {
      tmp = $receiver.c1p();
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
        var destination_0 = ArrayList.d2($receiver.l2());
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
  $this$Json.i1n_1 = false;
  $this$Json.h1n_1 = true;
  $this$Json.j1n_1 = true;
  var tmp = $this$Json;
  // Inline function 'kotlinx.serialization.modules.SerializersModule' call
  var builder = new SerializersModuleBuilder();
  builder.m1l(PrimitiveClasses_getInstance().kg(), AnySerializer_getInstance());
  builder.m1l(getKClass(Post), PostSerializer_getInstance());
  tmp.y1n_1 = builder.o19();
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
  throw UnsupportedOperationException.ua('Blocking operations are not supported in JavaScript. Please use suspend functions or Promise-based APIs instead.');
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
protoOf(AuthAuthorizeUrlRequest).dd0 = addParam;
initMetadataForClass(AuthAuthorizeUrlRequest, 'AuthAuthorizeUrlRequest', AuthAuthorizeUrlRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRefreshRequest).dd0 = addParam;
initMetadataForClass(AuthOAuth2TokenRefreshRequest, 'AuthOAuth2TokenRefreshRequest', AuthOAuth2TokenRefreshRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRequest).dd0 = addParam;
initMetadataForClass(AuthOAuth2TokenRequest, 'AuthOAuth2TokenRequest', AuthOAuth2TokenRequest, VOID, [MapRequest]);
initMetadataForClass(BlogAvatarRequest, 'BlogAvatarRequest', BlogAvatarRequest);
initMetadataForClass(BlogBannerRequest, 'BlogBannerRequest', BlogBannerRequest);
protoOf(BlogDraftsRequest).dd0 = addParam;
initMetadataForClass(BlogDraftsRequest, 'BlogDraftsRequest', BlogDraftsRequest, VOID, [MapRequest]);
protoOf(BlogFollowersRequest).dd0 = addParam;
initMetadataForClass(BlogFollowersRequest, 'BlogFollowersRequest', BlogFollowersRequest, VOID, [MapRequest]);
protoOf(BlogFollowingRequest).dd0 = addParam;
initMetadataForClass(BlogFollowingRequest, 'BlogFollowingRequest', BlogFollowingRequest, VOID, [MapRequest]);
initMetadataForClass(BlogInfoRequest, 'BlogInfoRequest', BlogInfoRequest);
protoOf(BlogLikesRequest).dd0 = addParam;
initMetadataForClass(BlogLikesRequest, 'BlogLikesRequest', BlogLikesRequest, VOID, [MapRequest]);
protoOf(BlogPostsRequest).dd0 = addParam;
initMetadataForClass(BlogPostsRequest, 'BlogPostsRequest', BlogPostsRequest, VOID, [MapRequest]);
protoOf(BlogQueueRequest).dd0 = addParam;
initMetadataForClass(BlogQueueRequest, 'BlogQueueRequest', BlogQueueRequest, VOID, [MapRequest]);
protoOf(BlogSubmissionsRequest).dd0 = addParam;
initMetadataForClass(BlogSubmissionsRequest, 'BlogSubmissionsRequest', BlogSubmissionsRequest, VOID, [MapRequest]);
protoOf(BlogUpdateInfoRequest).dd0 = addParam;
initMetadataForClass(BlogUpdateInfoRequest, 'BlogUpdateInfoRequest', BlogUpdateInfoRequest, VOID, [MapRequest]);
initMetadataForClass(BlogPostRequest, 'BlogPostRequest', BlogPostRequest);
protoOf(BlogAudioPostRequest).dd0 = addParam;
initMetadataForClass(BlogAudioPostRequest, 'BlogAudioPostRequest', BlogAudioPostRequest, VOID, [MapRequest]);
protoOf(BlogChatPostRequest).dd0 = addParam;
initMetadataForClass(BlogChatPostRequest, 'BlogChatPostRequest', BlogChatPostRequest, VOID, [MapRequest]);
protoOf(BlogDeleteRequest).dd0 = addParam;
initMetadataForClass(BlogDeleteRequest, 'BlogDeleteRequest', BlogDeleteRequest, VOID, [MapRequest]);
protoOf(BlogLinkPostRequest).dd0 = addParam;
initMetadataForClass(BlogLinkPostRequest, 'BlogLinkPostRequest', BlogLinkPostRequest, VOID, [MapRequest]);
protoOf(BlogPhotoPostRequest).dd0 = addParam;
initMetadataForClass(BlogPhotoPostRequest, 'BlogPhotoPostRequest', BlogPhotoPostRequest, VOID, [MapRequest]);
protoOf(BlogPostEditTagsRequest).dd0 = addParam;
initMetadataForClass(BlogPostEditTagsRequest, 'BlogPostEditTagsRequest', BlogPostEditTagsRequest, VOID, [MapRequest]);
protoOf(BlogPostUpdateRequest).dd0 = addParam;
initMetadataForClass(BlogPostUpdateRequest, 'BlogPostUpdateRequest', BlogPostUpdateRequest, VOID, [MapRequest]);
protoOf(BlogQuotePostRequest).dd0 = addParam;
initMetadataForClass(BlogQuotePostRequest, 'BlogQuotePostRequest', BlogQuotePostRequest, VOID, [MapRequest]);
protoOf(BlogReblogRequest).dd0 = addParam;
initMetadataForClass(BlogReblogRequest, 'BlogReblogRequest', BlogReblogRequest, VOID, [MapRequest]);
protoOf(BlogTextPostRequest).dd0 = addParam;
initMetadataForClass(BlogTextPostRequest, 'BlogTextPostRequest', BlogTextPostRequest, VOID, [MapRequest]);
protoOf(BlogVideoPostRequest).dd0 = addParam;
initMetadataForClass(BlogVideoPostRequest, 'BlogVideoPostRequest', BlogVideoPostRequest, VOID, [MapRequest]);
protoOf(TaggedRequest).dd0 = addParam;
initMetadataForClass(TaggedRequest, 'TaggedRequest', TaggedRequest, VOID, [MapRequest]);
protoOf(UserDashboardRequest).dd0 = addParam;
initMetadataForClass(UserDashboardRequest, 'UserDashboardRequest', UserDashboardRequest, VOID, [MapRequest]);
protoOf(UserFollowRequest).dd0 = addParam;
initMetadataForClass(UserFollowRequest, 'UserFollowRequest', UserFollowRequest, VOID, [MapRequest]);
protoOf(UserFollowingRequest).dd0 = addParam;
initMetadataForClass(UserFollowingRequest, 'UserFollowingRequest', UserFollowingRequest, VOID, [MapRequest]);
protoOf(UserLikeRequest).dd0 = addParam;
initMetadataForClass(UserLikeRequest, 'UserLikeRequest', UserLikeRequest, VOID, [MapRequest]);
protoOf(UserLikesRequest).dd0 = addParam;
initMetadataForClass(UserLikesRequest, 'UserLikesRequest', UserLikesRequest, VOID, [MapRequest]);
protoOf(UserUnfollowRequest).dd0 = addParam;
initMetadataForClass(UserUnfollowRequest, 'UserUnfollowRequest', UserUnfollowRequest, VOID, [MapRequest]);
protoOf(UserUnlikeRequest).dd0 = addParam;
initMetadataForClass(UserUnlikeRequest, 'UserUnlikeRequest', UserUnlikeRequest, VOID, [MapRequest]);
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForClass($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Body, 'Body', Body, VOID, VOID, VOID, VOID, {0: Companion_getInstance_0});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).f1c = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Meta, 'Meta', Meta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(Response, 'Response');
initMetadataForClass(ResponseUnit, 'ResponseUnit');
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).f1c = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AuthOAuth2TokenResponse, 'AuthOAuth2TokenResponse', AuthOAuth2TokenResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).f1c = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogBannerResponse, 'BlogBannerResponse', BlogBannerResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).f1c = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowersResponse, 'BlogFollowersResponse', BlogFollowersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_4).f1c = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowingResponse, 'BlogFollowingResponse', BlogFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_5).f1c = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInfoResponse, 'BlogInfoResponse', BlogInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_6);
protoOf($serializer_6).f1c = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogLikesResponse, 'BlogLikesResponse', BlogLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_7);
protoOf($serializer_7).f1c = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogPostsResponse, 'BlogPostsResponse', BlogPostsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_8);
protoOf($serializer_8).f1c = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogUpdatedInfoResponse, 'BlogUpdatedInfoResponse', BlogUpdatedInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_9);
protoOf($serializer_9).f1c = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserDashboardResponse, 'UserDashboardResponse', UserDashboardResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_10);
protoOf($serializer_10).f1c = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserFollowingResponse, 'UserFollowingResponse', UserFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_11);
protoOf($serializer_11).f1c = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserLikesResponse, 'UserLikesResponse', UserLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_12);
protoOf($serializer_12).f1c = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserResponse, 'UserResponse', UserResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForClass(PhotoType, 'PhotoType');
initMetadataForClass(PostType, 'PostType');
initMetadataForCompanion(Companion_13);
protoOf($serializer_13).f1c = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Note, 'Note', Note, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_14);
protoOf($serializer_14).f1c = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NoteAvatar, 'NoteAvatar', NoteAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForClass(Resource, 'Resource', Resource.gd7);
initMetadataForCompanion(Companion_15);
protoOf($serializer_15).f1c = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Blog, 'Blog', Blog.ld7, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_16);
protoOf($serializer_16).f1c = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogAvatar, 'BlogAvatar', BlogAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_17);
protoOf($serializer_17).f1c = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogTheme, 'BlogTheme', BlogTheme, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_18);
protoOf($serializer_18).f1c = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Reblog, 'Reblog', Reblog, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_19);
initMetadataForClass(Post, 'Post', VOID, VOID, VOID, VOID, VOID, {0: PostSerializer_getInstance});
initMetadataForCompanion(Companion_20);
protoOf($serializer_19).f1c = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAnswerPost, 'LegacyAnswerPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_21);
protoOf($serializer_20).f1c = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAudioPost, 'LegacyAudioPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_22);
protoOf($serializer_21).f1c = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyChatPost, 'LegacyChatPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_23);
protoOf($serializer_22).f1c = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyLinkPost, 'LegacyLinkPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_24);
protoOf($serializer_23).f1c = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyPhotoPost, 'LegacyPhotoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_25);
protoOf($serializer_24).f1c = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyPostcardPost, 'LegacyPostcardPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_26);
protoOf($serializer_25).f1c = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyQuotePost, 'LegacyQuotePost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_27);
protoOf($serializer_26).f1c = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyTextPost, 'LegacyTextPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_28);
protoOf($serializer_27).f1c = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyVideoPost, 'LegacyVideoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForCompanion(Companion_29);
protoOf($serializer_28).f1c = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Dialogue, 'Dialogue', Dialogue, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_30);
protoOf($serializer_29).f1c = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Photo, 'Photo', Photo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_31);
protoOf($serializer_30).f1c = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PhotoSize, 'PhotoSize', PhotoSize, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_32);
protoOf($serializer_31).f1c = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Video, 'Video', Video, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_33);
protoOf($serializer_32).f1c = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInTrail, 'BlogInTrail', BlogInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_34);
protoOf($serializer_33).f1c = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(IdInTrail, 'IdInTrail', IdInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForCompanion(Companion_35);
protoOf($serializer_34).f1c = typeParametersSerializers;
initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Trail, 'Trail', Trail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
initMetadataForCompanion(Companion_36);
protoOf($serializer_35).f1c = typeParametersSerializers;
initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FollowerUser, 'FollowerUser', FollowerUser, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
initMetadataForCompanion(Companion_37);
protoOf($serializer_36).f1c = typeParametersSerializers;
initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(User, 'User', User.idt, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
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
  postEdit$virtualSuspendBridge as postEdit$virtualSuspendBridge49uq5mjoa7iv,
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
