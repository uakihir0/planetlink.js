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
    this.cct_1 = clientId;
    this.dct_1 = clientSecret;
    this.ect_1 = accessToken;
    this.fct_1 = refreshToken;
  }
  gct() {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.ect_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        break $l$block;
      }
    }
    return 'Bearer ' + this.ect_1;
  }
}
class TumblrException extends RuntimeException {
  static mct(e) {
    var $this = this.xe(e);
    init_work_socialhub_ktumblr_TumblrException($this);
    return $this;
  }
  static nct(status, body) {
    var $this = this.kb('status code: ' + status + ', body: ' + body);
    init_work_socialhub_ktumblr_TumblrException($this);
    $this.jct_1 = status;
    $this.kct_1 = body;
    return $this;
  }
}
class TumblrFactory {
  oct(clientId, clientSecret, accessToken, refreshToken) {
    return new TumblrImpl(new TumblrAuth(clientId, clientSecret, accessToken, refreshToken));
  }
  instance(clientId, clientSecret, accessToken, refreshToken, $super) {
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    return $super === VOID ? this.oct(clientId, clientSecret, accessToken, refreshToken) : $super.oct.call(this, clientId, clientSecret, accessToken, refreshToken);
  }
}
class TumblrImpl {
  constructor(tumblrAuth) {
    this.pct_1 = tumblrAuth;
    this.qct_1 = new AuthResourceImpl(this.pct_1);
    this.rct_1 = new UserResourceImpl(this.pct_1);
    this.sct_1 = new BlogResourceImpl(this.pct_1);
    this.tct_1 = new TaggedResourceImpl(this.pct_1);
  }
  auth() {
    return this.qct_1;
  }
  user() {
    return this.rct_1;
  }
  blog() {
    return this.sct_1;
  }
  tagged() {
    return this.tct_1;
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
  c3j() {
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
  bcx(_set____db54di) {
    this.responseType = _set____db54di;
  }
  ccx() {
    return this.responseType;
  }
  jbn(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  kbn() {
    return this.redirectUri;
  }
  sa8(_set____db54di) {
    this.state = _set____db54di;
  }
  s7x() {
    return this.state;
  }
  dcx(_set____db54di) {
    this.scope = _set____db54di;
  }
  ebp() {
    return this.scope;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'response_type', this.responseType);
    this.acx(this_0, 'redirect_uri', this.redirectUri);
    this.acx(this_0, 'state', this.state);
    this.acx(this_0, 'scope', this.scope);
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
  fcx(_set____db54di) {
    this.grantType = _set____db54di;
  }
  gcx() {
    return this.grantType;
  }
  bb9(_set____db54di) {
    this.clientId = _set____db54di;
  }
  cb9() {
    return this.clientId;
  }
  db9(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  eb9() {
    return this.clientSecret;
  }
  obn(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  pbn() {
    return this.refreshToken;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'grant_type', this.grantType);
    this.acx(this_0, 'client_id', this.clientId);
    this.acx(this_0, 'client_secret', this.clientSecret);
    this.acx(this_0, 'refresh_token', this.refreshToken);
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
  fcx(_set____db54di) {
    this.grantType = _set____db54di;
  }
  gcx() {
    return this.grantType;
  }
  lbn(_set____db54di) {
    this.code = _set____db54di;
  }
  o32() {
    return this.code;
  }
  bb9(_set____db54di) {
    this.clientId = _set____db54di;
  }
  cb9() {
    return this.clientId;
  }
  db9(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  eb9() {
    return this.clientSecret;
  }
  jbn(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  kbn() {
    return this.redirectUri;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'grant_type', this.grantType);
    this.acx(this_0, 'code', this.code);
    this.acx(this_0, 'client_id', this.clientId);
    this.acx(this_0, 'client_secret', this.clientSecret);
    this.acx(this_0, 'redirect_uri', this.redirectUri);
    return this_0;
  }
}
class BlogAvatarRequest {
  constructor() {
    this.blogName = null;
    this.size = 0;
  }
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  c8e(_set____db54di) {
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  qc9(_set____db54di) {
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  jcx(_set____db54di) {
    this.beforeId = _set____db54di;
  }
  kcx() {
    return this.beforeId;
  }
  lcx(_set____db54di) {
    this.filter = _set____db54di;
  }
  w66() {
    return this.filter;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'before_id', this.beforeId);
    this.acx(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogFollowersRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  g3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  h3h() {
    return this.offset;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'limit', this.limit);
    this.acx(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogFollowingRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  g3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  h3h() {
    return this.offset;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'limit', this.limit);
    this.acx(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogInfoRequest {
  constructor() {
    this.blogName = null;
  }
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  g3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  h3h() {
    return this.offset;
  }
  mcx(_set____db54di) {
    this.before = _set____db54di;
  }
  ncx() {
    return this.before;
  }
  ocx(_set____db54di) {
    this.after = _set____db54di;
  }
  pcx() {
    return this.after;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'limit', this.limit);
    this.acx(this_0, 'offset', this.offset);
    this.acx(this_0, 'before', this.before);
    this.acx(this_0, 'after', this.after);
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  u38(_set____db54di) {
    this.type = _set____db54di;
  }
  h38() {
    return this.type;
  }
  h3k(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  s36(_set____db54di) {
    this.tag = _set____db54di;
  }
  t36() {
    return this.tag;
  }
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  g3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  h3h() {
    return this.offset;
  }
  qcx(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  rcx() {
    return this.reblogInfo;
  }
  scx(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  tcx() {
    return this.notesInfo;
  }
  lcx(_set____db54di) {
    this.filter = _set____db54di;
  }
  w66() {
    return this.filter;
  }
  mcx(_set____db54di) {
    this.before = _set____db54di;
  }
  ncx() {
    return this.before;
  }
  ucx(_set____db54di) {
    this.npf = _set____db54di;
  }
  vcx() {
    return this.npf;
  }
  fbn(_set____db54di) {
    this.types = _set____db54di;
  }
  gbn() {
    return this.types;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'id', this.id);
    this.acx(this_0, 'tag', this.tag);
    this.acx(this_0, 'limit', this.limit);
    this.acx(this_0, 'offset', this.offset);
    this.acx(this_0, 'reblog_info', this.reblogInfo);
    this.acx(this_0, 'notes_info', this.notesInfo);
    this.acx(this_0, 'filter', this.filter);
    this.acx(this_0, 'before', this.before);
    this.acx(this_0, 'npf', this.npf);
    var tmp0_safe_receiver = this.types;
    this.acx(this_0, 'types', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  g3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  h3h() {
    return this.offset;
  }
  lcx(_set____db54di) {
    this.filter = _set____db54di;
  }
  w66() {
    return this.filter;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'limit', this.limit);
    this.acx(this_0, 'offset', this.offset);
    this.acx(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogSubmissionsRequest {
  constructor() {
    this.blogName = null;
    this.offset = null;
    this.filter = null;
  }
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  wcx(_set____db54di) {
    this.offset = _set____db54di;
  }
  h3h() {
    return this.offset;
  }
  lcx(_set____db54di) {
    this.filter = _set____db54di;
  }
  w66() {
    return this.filter;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'offset', this.offset);
    this.acx(this_0, 'filter', this.filter);
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  sag(_set____db54di) {
    this.title = _set____db54di;
  }
  x3i() {
    return this.title;
  }
  z36(_set____db54di) {
    this.description = _set____db54di;
  }
  j36() {
    return this.description;
  }
  xcx(_set____db54di) {
    this.ask = _set____db54di;
  }
  ycx() {
    return this.ask;
  }
  zcx(_set____db54di) {
    this.submit = _set____db54di;
  }
  acy() {
    return this.submit;
  }
  bcy(_set____db54di) {
    this.isDescriptionIndexable = _set____db54di;
  }
  ccy() {
    return this.isDescriptionIndexable;
  }
  dcy(_set____db54di) {
    this.isIndexFollowed = _set____db54di;
  }
  ecy() {
    return this.isIndexFollowed;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'name', this.name);
    this.acx(this_0, 'title', this.title);
    this.acx(this_0, 'description', this.description);
    this.acx(this_0, 'ask', this.ask);
    this.acx(this_0, 'submit', this.submit);
    this.acx(this_0, 'is_description_indexable', this.isDescriptionIndexable);
    this.acx(this_0, 'is_index_followed', this.isIndexFollowed);
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  u38(_set____db54di) {
    this.type = _set____db54di;
  }
  h38() {
    return this.type;
  }
  sa8(_set____db54di) {
    this.state = _set____db54di;
  }
  s7x() {
    return this.state;
  }
  lcy(_set____db54di) {
    this.tags = _set____db54di;
  }
  xag() {
    return this.tags;
  }
  mcy(_set____db54di) {
    this.tweet = _set____db54di;
  }
  ncy() {
    return this.tweet;
  }
  ocy(_set____db54di) {
    this.date = _set____db54di;
  }
  pcy() {
    return this.date;
  }
  qcy(_set____db54di) {
    this.format = _set____db54di;
  }
  rcy() {
    return this.format;
  }
  scy(_set____db54di) {
    this.slug = _set____db54di;
  }
  tcy() {
    return this.slug;
  }
  ucy(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  vcy() {
    return this.nativeInlineImages;
  }
  kcy() {
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
  fcy(_set____db54di) {
    this.caption = _set____db54di;
  }
  gcy() {
    return this.caption;
  }
  hcy(_set____db54di) {
    this.externalUrl = _set____db54di;
  }
  icy() {
    return this.externalUrl;
  }
  jcy(_set____db54di) {
    this.data = _set____db54di;
  }
  c3j() {
    return this.data;
  }
  ecx() {
    // Inline function 'kotlin.also' call
    var this_0 = this.kcy();
    this.acx(this_0, 'caption', this.caption);
    this.acx(this_0, 'external_url', this.externalUrl);
    this.acx(this_0, 'data', this.data);
    return this_0;
  }
}
class BlogChatPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.conversation = null;
  }
  sag(_set____db54di) {
    this.title = _set____db54di;
  }
  x3i() {
    return this.title;
  }
  wcy(_set____db54di) {
    this.conversation = _set____db54di;
  }
  xcy() {
    return this.conversation;
  }
  ecx() {
    // Inline function 'kotlin.also' call
    var this_0 = this.kcy();
    this.acx(this_0, 'title', this.title);
    this.acx(this_0, 'conversation', this.conversation);
    return this_0;
  }
}
class BlogDeleteRequest {
  constructor() {
    this.blogName = null;
    this.id = null;
  }
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'id', this.id);
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
  sag(_set____db54di) {
    this.title = _set____db54di;
  }
  x3i() {
    return this.title;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  z36(_set____db54di) {
    this.description = _set____db54di;
  }
  j36() {
    return this.description;
  }
  v7k(_set____db54di) {
    this.thumbnail = _set____db54di;
  }
  a3j() {
    return this.thumbnail;
  }
  ycy(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  zcy() {
    return this.excerpt;
  }
  acz(_set____db54di) {
    this.author = _set____db54di;
  }
  a7j() {
    return this.author;
  }
  ecx() {
    // Inline function 'kotlin.also' call
    var this_0 = this.kcy();
    this.acx(this_0, 'title', this.title);
    this.acx(this_0, 'url', this.url);
    this.acx(this_0, 'description', this.description);
    this.acx(this_0, 'thumbnail', this.thumbnail);
    this.acx(this_0, 'excerpt', this.excerpt);
    this.acx(this_0, 'author', this.author);
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
  fcy(_set____db54di) {
    this.caption = _set____db54di;
  }
  gcy() {
    return this.caption;
  }
  h8e(_set____db54di) {
    this.link = _set____db54di;
  }
  z31() {
    return this.link;
  }
  bcz(_set____db54di) {
    this.source = _set____db54di;
  }
  f20() {
    return this.source;
  }
  ccz(_set____db54di) {
    this.data = _set____db54di;
  }
  c3j() {
    return this.data;
  }
  dcz(_set____db54di) {
    this.data64 = _set____db54di;
  }
  ecz() {
    return this.data64;
  }
  ecx() {
    // Inline function 'kotlin.also' call
    var this_0 = this.kcy();
    this.acx(this_0, 'caption', this.caption);
    this.acx(this_0, 'link', this.link);
    this.acx(this_0, 'source', this.source);
    this.acx(this_0, 'data64', this.data64);
    return this_0;
  }
  fcz() {
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  cam(_set____db54di) {
    this.tags = _set____db54di;
  }
  xag() {
    return this.tags;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'id', this.id);
    var tmp0_safe_receiver = this.tags;
    this.acx(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  u38(_set____db54di) {
    this.type = _set____db54di;
  }
  h38() {
    return this.type;
  }
  sag(_set____db54di) {
    this.title = _set____db54di;
  }
  x3i() {
    return this.title;
  }
  kan(_set____db54di) {
    this.body = _set____db54di;
  }
  lan() {
    return this.body;
  }
  scy(_set____db54di) {
    this.slug = _set____db54di;
  }
  tcy() {
    return this.slug;
  }
  gcz(_set____db54di) {
    this.startDate = _set____db54di;
  }
  hcz() {
    return this.startDate;
  }
  icz(_set____db54di) {
    this.tzAddress = _set____db54di;
  }
  jcz() {
    return this.tzAddress;
  }
  kcz(_set____db54di) {
    this.replyKey = _set____db54di;
  }
  lcz() {
    return this.replyKey;
  }
  cam(_set____db54di) {
    this.tags = _set____db54di;
  }
  xag() {
    return this.tags;
  }
  ccz(_set____db54di) {
    this.data = _set____db54di;
  }
  c3j() {
    return this.data;
  }
  fcy(_set____db54di) {
    this.caption = _set____db54di;
  }
  gcy() {
    return this.caption;
  }
  h8e(_set____db54di) {
    this.link = _set____db54di;
  }
  z31() {
    return this.link;
  }
  mcz(_set____db54di) {
    this.quoteText = _set____db54di;
  }
  ncz() {
    return this.quoteText;
  }
  ocz(_set____db54di) {
    this.quoteSource = _set____db54di;
  }
  pcz() {
    return this.quoteSource;
  }
  qcz(_set____db54di) {
    this.linkUrl = _set____db54di;
  }
  rcz() {
    return this.linkUrl;
  }
  scz(_set____db54di) {
    this.linkTitle = _set____db54di;
  }
  tcz() {
    return this.linkTitle;
  }
  ucz(_set____db54di) {
    this.linkDescription = _set____db54di;
  }
  vcz() {
    return this.linkDescription;
  }
  wcz(_set____db54di) {
    this.chatTitle = _set____db54di;
  }
  xcz() {
    return this.chatTitle;
  }
  ycz(_set____db54di) {
    this.chatLabel = _set____db54di;
  }
  zcz() {
    return this.chatLabel;
  }
  ad0(_set____db54di) {
    this.chatDialogue = _set____db54di;
  }
  bd0() {
    return this.chatDialogue;
  }
  hcy(_set____db54di) {
    this.externalUrl = _set____db54di;
  }
  icy() {
    return this.externalUrl;
  }
  cd0(_set____db54di) {
    this.embed = _set____db54di;
  }
  l6c() {
    return this.embed;
  }
  dd0(_set____db54di) {
    this.answer = _set____db54di;
  }
  ed0() {
    return this.answer;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'id', this.id);
    this.acx(this_0, 'type', this.type);
    this.acx(this_0, 'title', this.title);
    this.acx(this_0, 'body', this.body);
    this.acx(this_0, 'slug', this.slug);
    this.acx(this_0, 'start_date', this.startDate);
    this.acx(this_0, 'tz_address', this.tzAddress);
    this.acx(this_0, 'reply_key', this.replyKey);
    var tmp0_safe_receiver = this.tags;
    this.acx(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
    this.acx(this_0, 'caption', this.caption);
    this.acx(this_0, 'link', this.link);
    this.acx(this_0, 'quote_text', this.quoteText);
    this.acx(this_0, 'quote_source', this.quoteSource);
    this.acx(this_0, 'link_url', this.linkUrl);
    this.acx(this_0, 'link_title', this.linkTitle);
    this.acx(this_0, 'link_description', this.linkDescription);
    this.acx(this_0, 'chat_title', this.chatTitle);
    this.acx(this_0, 'chat_label', this.chatLabel);
    this.acx(this_0, 'chat_dialogue', this.chatDialogue);
    this.acx(this_0, 'external_url', this.externalUrl);
    this.acx(this_0, 'embed', this.embed);
    this.acx(this_0, 'answer', this.answer);
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
  fd0(_set____db54di) {
    this.quote = _set____db54di;
  }
  gd0() {
    return this.quote;
  }
  bcz(_set____db54di) {
    this.source = _set____db54di;
  }
  f20() {
    return this.source;
  }
  ecx() {
    // Inline function 'kotlin.also' call
    var this_0 = this.kcy();
    this.acx(this_0, 'quote', this.quote);
    this.acx(this_0, 'source', this.source);
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
  hcx(_set____db54di) {
    this.blogName = _set____db54di;
  }
  icx() {
    return this.blogName;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  hd0(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  id0() {
    return this.reblogKey;
  }
  d9k(_set____db54di) {
    this.comment = _set____db54di;
  }
  e3f() {
    return this.comment;
  }
  ucy(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  vcy() {
    return this.nativeInlineImages;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'id', this.id);
    this.acx(this_0, 'reblog_key', this.reblogKey);
    this.acx(this_0, 'comment', this.comment);
    this.acx(this_0, 'native_inline_images', this.nativeInlineImages);
    return this_0;
  }
}
class BlogTextPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.body = null;
  }
  sag(_set____db54di) {
    this.title = _set____db54di;
  }
  x3i() {
    return this.title;
  }
  kan(_set____db54di) {
    this.body = _set____db54di;
  }
  lan() {
    return this.body;
  }
  ecx() {
    // Inline function 'kotlin.also' call
    var this_0 = this.kcy();
    this.acx(this_0, 'title', this.title);
    this.acx(this_0, 'body', this.body);
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
  fcy(_set____db54di) {
    this.caption = _set____db54di;
  }
  gcy() {
    return this.caption;
  }
  cd0(_set____db54di) {
    this.embed = _set____db54di;
  }
  l6c() {
    return this.embed;
  }
  jcy(_set____db54di) {
    this.data = _set____db54di;
  }
  c3j() {
    return this.data;
  }
  ecx() {
    // Inline function 'kotlin.also' call
    var this_0 = this.kcy();
    this.acx(this_0, 'caption', this.caption);
    this.acx(this_0, 'embed', this.embed);
    this.acx(this_0, 'data', this.data);
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
  s36(_set____db54di) {
    this.tag = _set____db54di;
  }
  t36() {
    return this.tag;
  }
  mcx(_set____db54di) {
    this.before = _set____db54di;
  }
  ncx() {
    return this.before;
  }
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  lcx(_set____db54di) {
    this.filter = _set____db54di;
  }
  w66() {
    return this.filter;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'tag', this.tag);
    this.acx(this_0, 'before', this.before);
    this.acx(this_0, 'limit', this.limit);
    this.acx(this_0, 'filter', this.filter);
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
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  g3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  h3h() {
    return this.offset;
  }
  u38(_set____db54di) {
    this.type = _set____db54di;
  }
  h38() {
    return this.type;
  }
  jd0(_set____db54di) {
    this.sinceId = _set____db54di;
  }
  l3g() {
    return this.sinceId;
  }
  qcx(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  rcx() {
    return this.reblogInfo;
  }
  scx(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  tcx() {
    return this.notesInfo;
  }
  ucx(_set____db54di) {
    this.npf = _set____db54di;
  }
  vcx() {
    return this.npf;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'limit', this.limit);
    this.acx(this_0, 'offset', this.offset);
    this.acx(this_0, 'type', this.type);
    this.acx(this_0, 'since_id', this.sinceId);
    this.acx(this_0, 'reblog_info', this.reblogInfo);
    this.acx(this_0, 'notes_info', this.notesInfo);
    this.acx(this_0, 'npf', this.npf);
    return this_0;
  }
}
class UserFollowRequest {
  constructor() {
    this.url = null;
    this.email = null;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  w72(_set____db54di) {
    this.email = _set____db54di;
  }
  a32() {
    return this.email;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'url', this.url);
    this.acx(this_0, 'email', this.email);
    return this_0;
  }
}
class UserFollowingRequest {
  constructor() {
    this.limit = null;
    this.offset = null;
  }
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  g3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  h3h() {
    return this.offset;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'limit', this.limit);
    this.acx(this_0, 'offset', this.offset);
    return this_0;
  }
}
class UserLikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  hd0(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  id0() {
    return this.reblogKey;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'id', this.id);
    this.acx(this_0, 'reblog_key', this.reblogKey);
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
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  g3h(_set____db54di) {
    this.offset = _set____db54di;
  }
  h3h() {
    return this.offset;
  }
  mcx(_set____db54di) {
    this.before = _set____db54di;
  }
  ncx() {
    return this.before;
  }
  ocx(_set____db54di) {
    this.after = _set____db54di;
  }
  pcx() {
    return this.after;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'limit', this.limit);
    this.acx(this_0, 'offset', this.offset);
    this.acx(this_0, 'before', this.before);
    this.acx(this_0, 'after', this.after);
    return this_0;
  }
}
class UserUnfollowRequest {
  constructor() {
    this.url = null;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'url', this.url);
    return this_0;
  }
}
class UserUnlikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  hd0(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  id0() {
    return this.reblogKey;
  }
  ecx() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.acx(this_0, 'id', this.id);
    this.acx(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', null, 2);
    tmp0_serialDesc.n1b('meta', true);
    tmp0_serialDesc.n1b('response', true);
    this.kd0_1 = tmp0_serialDesc;
  }
  yb5(typeSerial0) {
    return $serializer.nd0(typeSerial0);
  }
  p1c(typeParamsSerializers) {
    return this.yb5(typeParamsSerializers[0]);
  }
}
class $serializer {
  constructor() {
    return new.target.od0();
  }
  static od0() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', $this, 2);
    tmp0_serialDesc.n1b('meta', true);
    tmp0_serialDesc.n1b('response', true);
    $this.ld0_1 = tmp0_serialDesc;
    return $this;
  }
  pd0(encoder, value) {
    var tmp0_desc = this.ld0_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.meta == null)) {
      tmp1_output.n15(tmp0_desc, 0, $serializer_getInstance(), value.meta);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.response == null)) {
      tmp1_output.n15(tmp0_desc, 1, this.md0_1, value.response);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.pd0(encoder, value instanceof Body ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ld0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, this.md0_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, this.md0_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return Body.qd0(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.ld0_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance()), get_nullable(this.md0_1)];
  }
  e1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.md0_1];
  }
  static nd0(typeSerial0) {
    var $this = this.od0();
    $this.md0_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor() {
    Companion_getInstance_0();
    this.meta = null;
    this.response = null;
  }
  rd0(_set____db54di) {
    this.meta = _set____db54di;
  }
  ebs() {
    return this.meta;
  }
  sd0(_set____db54di) {
    this.response = _set____db54di;
  }
  f4l() {
    return this.response;
  }
  static qd0(seen0, meta, response, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, Companion_getInstance_0().kd0_1);
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
    tmp0_serialDesc.n1b('status', true);
    tmp0_serialDesc.n1b('msg', true);
    this.td0_1 = tmp0_serialDesc;
  }
  ud0(encoder, value) {
    var tmp0_desc = this.td0_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.status == null)) {
      tmp1_output.n15(tmp0_desc, 0, IntSerializer_getInstance(), value.status);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.msg == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.msg);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.ud0(encoder, value instanceof Meta ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.td0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return Meta.vd0(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.td0_1;
  }
  d1c() {
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
  wd0(_set____db54di) {
    this.status = _set____db54di;
  }
  p4n() {
    return this.status;
  }
  xd0(_set____db54di) {
    this.msg = _set____db54di;
  }
  yd0() {
    return this.msg;
  }
  static vd0(seen0, status, msg, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().td0_1);
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
  sat(_set____db54di) {
    this.data = _set____db54di;
  }
  c3j() {
    return this.data;
  }
  tat(_set____db54di) {
    this.json = _set____db54di;
  }
  w1o() {
    return this.json;
  }
  p4n() {
    return this.status;
  }
  r() {
    return this.message;
  }
  mm() {
    return this.data;
  }
  nm() {
    return this.json;
  }
  pw() {
    return this.status;
  }
  r63() {
    return this.message;
  }
  zd0(data, json, status, message) {
    return new Response(data, json, status, message);
  }
  copy(data, json, status, message, $super) {
    data = data === VOID ? this.data : data;
    json = json === VOID ? this.json : json;
    status = status === VOID ? this.status : status;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.zd0(data, json, status, message) : $super.zd0.call(this, data, json, status, message);
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
  tat(_set____db54di) {
    this.json = _set____db54di;
  }
  w1o() {
    return this.json;
  }
  p4n() {
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
    tmp0_serialDesc.n1b('access_token', true);
    tmp0_serialDesc.n1b('expires_in', true);
    tmp0_serialDesc.n1b('token_type', true);
    tmp0_serialDesc.n1b('scope', true);
    tmp0_serialDesc.n1b('refresh_token', true);
    this.ad1_1 = tmp0_serialDesc;
  }
  bd1(encoder, value) {
    var tmp0_desc = this.ad1_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.accessToken == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.accessToken);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.expiresIn == null)) {
      tmp1_output.n15(tmp0_desc, 1, IntSerializer_getInstance(), value.expiresIn);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.tokenType == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.tokenType);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.scope == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.scope);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.refreshToken == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.refreshToken);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.bd1(encoder, value instanceof AuthOAuth2TokenResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ad1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.v13(tmp0_desc);
    if (tmp9_input.k14()) {
      tmp4_local0 = tmp9_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp9_input.w13(tmp0_desc);
    return AuthOAuth2TokenResponse.cd1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  dz() {
    return this.ad1_1;
  }
  d1c() {
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
  ya5(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  za5() {
    return this.accessToken;
  }
  gbp(_set____db54di) {
    this.expiresIn = _set____db54di;
  }
  g3j() {
    return this.expiresIn;
  }
  bbp(_set____db54di) {
    this.tokenType = _set____db54di;
  }
  cbp() {
    return this.tokenType;
  }
  dbp(_set____db54di) {
    this.scope = _set____db54di;
  }
  ebp() {
    return this.scope;
  }
  obn(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  pbn() {
    return this.refreshToken;
  }
  static cd1(seen0, accessToken, expiresIn, tokenType, scope, refreshToken, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().ad1_1);
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
    tmp0_serialDesc.n1b('banner', true);
    tmp0_serialDesc.n1b('height', true);
    tmp0_serialDesc.n1b('width', true);
    this.dd1_1 = tmp0_serialDesc;
  }
  ed1(encoder, value) {
    var tmp0_desc = this.dd1_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.banner == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.banner);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.n15(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.width == null)) {
      tmp1_output.n15(tmp0_desc, 2, IntSerializer_getInstance(), value.width);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.ed1(encoder, value instanceof BlogBannerResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.dd1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return BlogBannerResponse.fd1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.dd1_1;
  }
  d1c() {
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
  d62(_set____db54di) {
    this.banner = _set____db54di;
  }
  q3j() {
    return this.banner;
  }
  o38(_set____db54di) {
    this.height = _set____db54di;
  }
  p38() {
    return this.height;
  }
  m38(_set____db54di) {
    this.width = _set____db54di;
  }
  n38() {
    return this.width;
  }
  static fd1(seen0, banner, height, width, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().dd1_1);
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
    tmp.gd1_1 = [null, lazy(tmp_0, BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a)];
  }
}
class $serializer_3 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowersResponse', this, 2);
    tmp0_serialDesc.n1b('total_users', true);
    tmp0_serialDesc.n1b('users', true);
    this.hd1_1 = tmp0_serialDesc;
  }
  id1(encoder, value) {
    var tmp0_desc = this.hd1_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().gd1_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.totalUsers == null)) {
      tmp1_output.n15(tmp0_desc, 0, IntSerializer_getInstance(), value.totalUsers);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.users == null)) {
      tmp1_output.n15(tmp0_desc, 1, tmp2_cached[1].d3(), value.users);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.id1(encoder, value instanceof BlogFollowersResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.hd1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().gd1_1;
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return BlogFollowersResponse.jd1(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.hd1_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_4().gd1_1;
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
  kd1(_set____db54di) {
    this.totalUsers = _set____db54di;
  }
  ld1() {
    return this.totalUsers;
  }
  md1(_set____db54di) {
    this.users = _set____db54di;
  }
  x38() {
    return this.users;
  }
  static jd1(seen0, totalUsers, users, serializationConstructorMarker) {
    Companion_getInstance_4();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().hd1_1);
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
    tmp.nd1_1 = [lazy(tmp_0, BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi), null];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowingResponse', this, 2);
    tmp0_serialDesc.n1b('blogs', true);
    tmp0_serialDesc.n1b('total_blogs', true);
    this.od1_1 = tmp0_serialDesc;
  }
  pd1(encoder, value) {
    var tmp0_desc = this.od1_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().nd1_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.blogs == null)) {
      tmp1_output.n15(tmp0_desc, 0, tmp2_cached[0].d3(), value.blogs);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.totalBlogs == null)) {
      tmp1_output.n15(tmp0_desc, 1, IntSerializer_getInstance(), value.totalBlogs);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.pd1(encoder, value instanceof BlogFollowingResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.od1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().nd1_1;
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return BlogFollowingResponse.qd1(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.od1_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_5().nd1_1;
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
  rd1(_set____db54di) {
    this.blogs = _set____db54di;
  }
  sd1() {
    return this.blogs;
  }
  td1(_set____db54di) {
    this.totalBlogs = _set____db54di;
  }
  ud1() {
    return this.totalBlogs;
  }
  static qd1(seen0, blogs, totalBlogs, serializationConstructorMarker) {
    Companion_getInstance_5();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().od1_1);
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
    tmp0_serialDesc.n1b('blog', true);
    this.vd1_1 = tmp0_serialDesc;
  }
  wd1(encoder, value) {
    var tmp0_desc = this.vd1_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.n15(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.wd1(encoder, value instanceof BlogInfoResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.vd1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.v13(tmp0_desc);
    if (tmp5_input.k14()) {
      tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp5_input.w13(tmp0_desc);
    return BlogInfoResponse.xd1(tmp3_bitMask0, tmp4_local0, null);
  }
  dz() {
    return this.vd1_1;
  }
  d1c() {
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
  yd1(_set____db54di) {
    this.blog = _set____db54di;
  }
  zd1() {
    return this.blog;
  }
  static xd1(seen0, blog, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().vd1_1);
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
    tmp.ad2_1 = [lazy(tmp_0, BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9), null];
  }
}
class $serializer_6 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogLikesResponse', this, 2);
    tmp0_serialDesc.n1b('liked_posts', true);
    tmp0_serialDesc.n1b('liked_count', true);
    this.bd2_1 = tmp0_serialDesc;
  }
  cd2(encoder, value) {
    var tmp0_desc = this.bd2_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().ad2_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.n15(tmp0_desc, 0, tmp2_cached[0].d3(), value.likedPosts);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.n15(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.cd2(encoder, value instanceof BlogLikesResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.bd2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().ad2_1;
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return BlogLikesResponse.dd2(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.bd2_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_7().ad2_1;
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
  ed2(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  fd2() {
    return this.likedPosts;
  }
  zag(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  aah() {
    return this.likedCount;
  }
  static dd2(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_7();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().bd2_1);
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
    tmp.gd2_1 = [null, lazy(tmp_0, BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0), null];
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogPostsResponse', this, 3);
    tmp0_serialDesc.n1b('blog', true);
    tmp0_serialDesc.n1b('posts', true);
    tmp0_serialDesc.n1b('total_posts', true);
    this.hd2_1 = tmp0_serialDesc;
  }
  id2(encoder, value) {
    var tmp0_desc = this.hd2_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().gd2_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.n15(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.posts == null)) {
      tmp1_output.n15(tmp0_desc, 1, tmp2_cached[1].d3(), value.posts);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.totalPosts == null)) {
      tmp1_output.n15(tmp0_desc, 2, IntSerializer_getInstance(), value.totalPosts);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.id2(encoder, value instanceof BlogPostsResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.hd2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    var tmp8_cached = Companion_getInstance_8().gd2_1;
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, tmp8_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, tmp8_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return BlogPostsResponse.jd2(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.hd2_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_8().gd2_1;
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
  yd1(_set____db54di) {
    this.blog = _set____db54di;
  }
  zd1() {
    return this.blog;
  }
  kd2(_set____db54di) {
    this.posts = _set____db54di;
  }
  a6a() {
    return this.posts;
  }
  ld2(_set____db54di) {
    this.totalPosts = _set____db54di;
  }
  md2() {
    return this.totalPosts;
  }
  static jd2(seen0, blog, posts, totalPosts, serializationConstructorMarker) {
    Companion_getInstance_8();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().hd2_1);
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
    tmp0_serialDesc.n1b('blog', true);
    this.nd2_1 = tmp0_serialDesc;
  }
  od2(encoder, value) {
    var tmp0_desc = this.nd2_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.n15(tmp0_desc, 0, $serializer_getInstance_14(), value.blog);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.od2(encoder, value instanceof BlogUpdatedInfoResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.nd2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.v13(tmp0_desc);
    if (tmp5_input.k14()) {
      tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp5_input.w13(tmp0_desc);
    return BlogUpdatedInfoResponse.pd2(tmp3_bitMask0, tmp4_local0, null);
  }
  dz() {
    return this.nd2_1;
  }
  d1c() {
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
  yd1(_set____db54di) {
    this.blog = _set____db54di;
  }
  zd1() {
    return this.blog;
  }
  static pd2(seen0, blog, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().nd2_1);
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
    tmp.qd2_1 = [lazy(tmp_0, UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w)];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserDashboardResponse', this, 1);
    tmp0_serialDesc.n1b('posts', true);
    this.rd2_1 = tmp0_serialDesc;
  }
  sd2(encoder, value) {
    var tmp0_desc = this.rd2_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().qd2_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.posts == null)) {
      tmp1_output.n15(tmp0_desc, 0, tmp2_cached[0].d3(), value.posts);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.sd2(encoder, value instanceof UserDashboardResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.rd2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.v13(tmp0_desc);
    var tmp6_cached = Companion_getInstance_10().qd2_1;
    if (tmp5_input.k14()) {
      tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, tmp6_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, tmp6_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp5_input.w13(tmp0_desc);
    return UserDashboardResponse.td2(tmp3_bitMask0, tmp4_local0, null);
  }
  dz() {
    return this.rd2_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_10().qd2_1;
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
  kd2(_set____db54di) {
    this.posts = _set____db54di;
  }
  a6a() {
    return this.posts;
  }
  static td2(seen0, posts, serializationConstructorMarker) {
    Companion_getInstance_10();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().rd2_1);
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
    tmp.ud2_1 = [null, lazy(tmp_0, UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5)];
  }
}
class $serializer_10 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserFollowingResponse', this, 2);
    tmp0_serialDesc.n1b('total_blogs', true);
    tmp0_serialDesc.n1b('blogs', true);
    this.vd2_1 = tmp0_serialDesc;
  }
  wd2(encoder, value) {
    var tmp0_desc = this.vd2_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().ud2_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.totalBlog == null)) {
      tmp1_output.n15(tmp0_desc, 0, IntSerializer_getInstance(), value.totalBlog);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.blogs == null)) {
      tmp1_output.n15(tmp0_desc, 1, tmp2_cached[1].d3(), value.blogs);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.wd2(encoder, value instanceof UserFollowingResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.vd2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_11().ud2_1;
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, tmp7_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return UserFollowingResponse.xd2(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.vd2_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_11().ud2_1;
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
  yd2(_set____db54di) {
    this.totalBlog = _set____db54di;
  }
  zd2() {
    return this.totalBlog;
  }
  rd1(_set____db54di) {
    this.blogs = _set____db54di;
  }
  sd1() {
    return this.blogs;
  }
  static xd2(seen0, totalBlog, blogs, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().vd2_1);
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
    tmp.ad3_1 = [lazy(tmp_0, UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0), null];
  }
}
class $serializer_11 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserLikesResponse', this, 2);
    tmp0_serialDesc.n1b('liked_posts', true);
    tmp0_serialDesc.n1b('liked_count', true);
    this.bd3_1 = tmp0_serialDesc;
  }
  cd3(encoder, value) {
    var tmp0_desc = this.bd3_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().ad3_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.n15(tmp0_desc, 0, tmp2_cached[0].d3(), value.likedPosts);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.n15(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.cd3(encoder, value instanceof UserLikesResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.bd3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().ad3_1;
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, tmp7_cached[0].d3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return UserLikesResponse.dd3(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.bd3_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_12().ad3_1;
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
  ed2(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  fd2() {
    return this.likedPosts;
  }
  zag(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  aah() {
    return this.likedCount;
  }
  static dd3(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().bd3_1);
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
    tmp0_serialDesc.n1b('user', true);
    this.ed3_1 = tmp0_serialDesc;
  }
  fd3(encoder, value) {
    var tmp0_desc = this.ed3_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.n15(tmp0_desc, 0, $serializer_getInstance_35(), value.user);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.fd3(encoder, value instanceof UserResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ed3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.v13(tmp0_desc);
    if (tmp5_input.k14()) {
      tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp5_input.w13(tmp0_desc);
    return UserResponse.gd3(tmp3_bitMask0, tmp4_local0, null);
  }
  dz() {
    return this.ed3_1;
  }
  d1c() {
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
  hd3(_set____db54di) {
    this.user = _set____db54di;
  }
  p34() {
    return this.user;
  }
  static gd3(seen0, user, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().ed3_1);
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
  kd3() {
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
    tmp0_serialDesc.n1b('type', true);
    tmp0_serialDesc.n1b('timestamp', true);
    tmp0_serialDesc.n1b('blog_name', true);
    tmp0_serialDesc.n1b('blog_uuid', true);
    tmp0_serialDesc.n1b('blog_url', true);
    tmp0_serialDesc.n1b('followed', true);
    tmp0_serialDesc.n1b('avatar_shape', true);
    tmp0_serialDesc.n1b('post_id', true);
    tmp0_serialDesc.n1b('reblog_parent_blog_name', true);
    this.nd3_1 = tmp0_serialDesc;
  }
  od3(encoder, value) {
    var tmp0_desc = this.nd3_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.type == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.timestamp == null)) {
      tmp1_output.n15(tmp0_desc, 1, IntSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.blogName == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.blogName);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.blogUuid == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.blogUuid);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.blogUrl == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.blogUrl);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.isFollowed == null)) {
      tmp1_output.n15(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.avatarShape == null)) {
      tmp1_output.n15(tmp0_desc, 6, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.postId == null)) {
      tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.postId);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.reblogParentBlogName == null)) {
      tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.reblogParentBlogName);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.od3(encoder, value instanceof Note ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.nd3_1;
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
    var tmp13_input = decoder.v13(tmp0_desc);
    if (tmp13_input.k14()) {
      tmp4_local0 = tmp13_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.j14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.j14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp13_input.w13(tmp0_desc);
    return Note.pd3(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  dz() {
    return this.nd3_1;
  }
  d1c() {
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
  h38() {
    return this.type;
  }
  qd3() {
    return this.timestamp;
  }
  icx() {
    return this.blogName;
  }
  rd3() {
    return this.blogUuid;
  }
  sd3() {
    return this.blogUrl;
  }
  baq() {
    return this.isFollowed;
  }
  td3() {
    return this.avatarShape;
  }
  s9l() {
    return this.postId;
  }
  ud3() {
    return this.reblogParentBlogName;
  }
  static pd3(seen0, type, timestamp, blogName, blogUuid, blogUrl, isFollowed, avatarShape, postId, reblogParentBlogName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().nd3_1);
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
    tmp0_serialDesc.n1b('64', true);
    tmp0_serialDesc.n1b('128', true);
    this.vd3_1 = tmp0_serialDesc;
  }
  wd3(encoder, value) {
    var tmp0_desc = this.vd3_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.size64 == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.size64);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.size128 == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.size128);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.wd3(encoder, value instanceof NoteAvatar ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.vd3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return NoteAvatar.xd3(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.vd3_1;
  }
  d1c() {
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
  yd3(_set____db54di) {
    this.size64 = _set____db54di;
  }
  zd3() {
    return this.size64;
  }
  ad4(_set____db54di) {
    this.size128 = _set____db54di;
  }
  bd4() {
    return this.size128;
  }
  static xd3(seen0, size64, size128, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().vd3_1);
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
  static cd4() {
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
    tmp.dd4_1 = [null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Blog$Companion$$childSerializers$_anonymous__tmgjug), null, null, null, null, null, null, null];
  }
}
class $serializer_15 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Blog', this, 18);
    tmp0_serialDesc.n1b('title', true);
    tmp0_serialDesc.n1b('posts', true);
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('updated', true);
    tmp0_serialDesc.n1b('description', true);
    tmp0_serialDesc.n1b('ask', true);
    tmp0_serialDesc.n1b('ask_anon', true);
    tmp0_serialDesc.n1b('followed', true);
    tmp0_serialDesc.n1b('likes', true);
    tmp0_serialDesc.n1b('is_blocked_from_primary', true);
    tmp0_serialDesc.n1b('avatar', true);
    tmp0_serialDesc.n1b('url', true);
    tmp0_serialDesc.n1b('theme', true);
    tmp0_serialDesc.n1b('admin', true);
    tmp0_serialDesc.n1b('ask_page_title', true);
    tmp0_serialDesc.n1b('is_nsfw', true);
    tmp0_serialDesc.n1b('primary', true);
    tmp0_serialDesc.n1b('followers', true);
    this.ed4_1 = tmp0_serialDesc;
  }
  fd4(encoder, value) {
    var tmp0_desc = this.ed4_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().dd4_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.postCount === 0)) {
      tmp1_output.f15(tmp0_desc, 1, value.postCount);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.n15(tmp0_desc, 3, IntSerializer_getInstance(), value.updated);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.description == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.isAsk == null)) {
      tmp1_output.n15(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isAsk);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.isAskAnon == null)) {
      tmp1_output.n15(tmp0_desc, 6, BooleanSerializer_getInstance(), value.isAskAnon);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.isFollowed == null)) {
      tmp1_output.n15(tmp0_desc, 7, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.likeCount == null)) {
      tmp1_output.n15(tmp0_desc, 8, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.isBlockedFromPrimary == null)) {
      tmp1_output.n15(tmp0_desc, 9, BooleanSerializer_getInstance(), value.isBlockedFromPrimary);
    }
    if (tmp1_output.r15(tmp0_desc, 10) ? true : !(value.avatar == null)) {
      tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.avatar);
    }
    if (tmp1_output.r15(tmp0_desc, 11) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 11, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.r15(tmp0_desc, 12) ? true : !(value.theme == null)) {
      tmp1_output.n15(tmp0_desc, 12, $serializer_getInstance_16(), value.theme);
    }
    if (tmp1_output.r15(tmp0_desc, 13) ? true : !(value.isAdmin == null)) {
      tmp1_output.n15(tmp0_desc, 13, BooleanSerializer_getInstance(), value.isAdmin);
    }
    if (tmp1_output.r15(tmp0_desc, 14) ? true : !(value.askPageTitle == null)) {
      tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.askPageTitle);
    }
    if (tmp1_output.r15(tmp0_desc, 15) ? true : !(value.isNSFW == null)) {
      tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isNSFW);
    }
    if (tmp1_output.r15(tmp0_desc, 16) ? true : !(value.isPrimary == null)) {
      tmp1_output.n15(tmp0_desc, 16, BooleanSerializer_getInstance(), value.isPrimary);
    }
    if (tmp1_output.r15(tmp0_desc, 17) ? true : !(value.followerCount == null)) {
      tmp1_output.n15(tmp0_desc, 17, IntSerializer_getInstance(), value.followerCount);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.fd4(encoder, value instanceof Blog ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ed4_1;
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
    var tmp22_input = decoder.v13(tmp0_desc);
    var tmp23_cached = Companion_getInstance_16().dd4_1;
    if (tmp22_input.k14()) {
      tmp4_local0 = tmp22_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.a14(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.j14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.j14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.j14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.j14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.j14(tmp0_desc, 10, tmp23_cached[10].d3(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.j14(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.j14(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.j14(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.j14(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.j14(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.a14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.j14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.j14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.j14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.j14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.j14(tmp0_desc, 10, tmp23_cached[10].d3(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.j14(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.j14(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.j14(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.j14(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.j14(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp22_input.w13(tmp0_desc);
    return Blog.gd4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  }
  dz() {
    return this.ed4_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_16().dd4_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_16()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class Blog extends Resource {
  constructor() {
    return new.target.hd4();
  }
  static hd4() {
    Companion_getInstance_16();
    var $this = this.cd4();
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
  sag(_set____db54di) {
    this.title = _set____db54di;
  }
  x3i() {
    return this.title;
  }
  id4(_set____db54di) {
    this.postCount = _set____db54di;
  }
  jd4() {
    return this.postCount;
  }
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  kd4(_set____db54di) {
    this.updated = _set____db54di;
  }
  ld4() {
    return this.updated;
  }
  z36(_set____db54di) {
    this.description = _set____db54di;
  }
  j36() {
    return this.description;
  }
  md4(_set____db54di) {
    this.isAsk = _set____db54di;
  }
  nd4() {
    return this.isAsk;
  }
  od4(_set____db54di) {
    this.isAskAnon = _set____db54di;
  }
  pd4() {
    return this.isAskAnon;
  }
  qd4(_set____db54di) {
    this.isFollowed = _set____db54di;
  }
  baq() {
    return this.isFollowed;
  }
  f34() {
    return this.likeCount;
  }
  rd4() {
    return this.isBlockedFromPrimary;
  }
  m3j() {
    return this.avatar;
  }
  i4n() {
    return this.url;
  }
  sd4() {
    return this.theme;
  }
  jav() {
    return this.isAdmin;
  }
  td4() {
    return this.askPageTitle;
  }
  ud4() {
    return this.isNSFW;
  }
  vd4() {
    return this.isPrimary;
  }
  wd4() {
    return this.followerCount;
  }
  static gd4(seen0, title, postCount, name, updated, description, isAsk, isAskAnon, isFollowed, likeCount, isBlockedFromPrimary, avatar, url, theme, isAdmin, askPageTitle, isNSFW, isPrimary, followerCount, serializationConstructorMarker) {
    Companion_getInstance_16();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().ed4_1);
    }
    var $this = this.cd4();
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
    tmp0_serialDesc.n1b('width', true);
    tmp0_serialDesc.n1b('height', true);
    tmp0_serialDesc.n1b('url', true);
    this.xd4_1 = tmp0_serialDesc;
  }
  yd4(encoder, value) {
    var tmp0_desc = this.xd4_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.n15(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.n15(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.yd4(encoder, value instanceof BlogAvatar ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.xd4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return BlogAvatar.zd4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.xd4_1;
  }
  d1c() {
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
  m38(_set____db54di) {
    this.width = _set____db54di;
  }
  n38() {
    return this.width;
  }
  o38(_set____db54di) {
    this.height = _set____db54di;
  }
  p38() {
    return this.height;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  static zd4(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().xd4_1);
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
    tmp0_serialDesc.n1b('avatar_shape', true);
    tmp0_serialDesc.n1b('background_color', true);
    tmp0_serialDesc.n1b('body_font', true);
    tmp0_serialDesc.n1b('header_image', true);
    tmp0_serialDesc.n1b('header_image_focused', true);
    tmp0_serialDesc.n1b('header_image_poster', true);
    tmp0_serialDesc.n1b('header_image_scaled', true);
    tmp0_serialDesc.n1b('header_stretch', true);
    tmp0_serialDesc.n1b('link_color', true);
    tmp0_serialDesc.n1b('show_avatar', true);
    tmp0_serialDesc.n1b('show_description', true);
    tmp0_serialDesc.n1b('show_header_image', true);
    tmp0_serialDesc.n1b('show_title', true);
    tmp0_serialDesc.n1b('title_color', true);
    tmp0_serialDesc.n1b('title_font', true);
    tmp0_serialDesc.n1b('title_font_weight', true);
    this.ad5_1 = tmp0_serialDesc;
  }
  bd5(encoder, value) {
    var tmp0_desc = this.ad5_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.avatarShape == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.backgroundColor == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.backgroundColor);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.bodyFont == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.bodyFont);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.headerImage == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.headerImage);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.headerImageFocused == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.headerImageFocused);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.headerImagePoster == null)) {
      tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.headerImagePoster);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.headerImageScaled == null)) {
      tmp1_output.n15(tmp0_desc, 6, StringSerializer_getInstance(), value.headerImageScaled);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.isHeaderStretch === false)) {
      tmp1_output.c15(tmp0_desc, 7, value.isHeaderStretch);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.linkColor == null)) {
      tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.linkColor);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.isShowAvatar === false)) {
      tmp1_output.c15(tmp0_desc, 9, value.isShowAvatar);
    }
    if (tmp1_output.r15(tmp0_desc, 10) ? true : !(value.isShowDescription === false)) {
      tmp1_output.c15(tmp0_desc, 10, value.isShowDescription);
    }
    if (tmp1_output.r15(tmp0_desc, 11) ? true : !(value.isShowHeaderImage === false)) {
      tmp1_output.c15(tmp0_desc, 11, value.isShowHeaderImage);
    }
    if (tmp1_output.r15(tmp0_desc, 12) ? true : !(value.isShowTitle === false)) {
      tmp1_output.c15(tmp0_desc, 12, value.isShowTitle);
    }
    if (tmp1_output.r15(tmp0_desc, 13) ? true : !(value.titleColor == null)) {
      tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.titleColor);
    }
    if (tmp1_output.r15(tmp0_desc, 14) ? true : !(value.titleFont == null)) {
      tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.titleFont);
    }
    if (tmp1_output.r15(tmp0_desc, 15) ? true : !(value.titleFontWeight == null)) {
      tmp1_output.n15(tmp0_desc, 15, StringSerializer_getInstance(), value.titleFontWeight);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.bd5(encoder, value instanceof BlogTheme ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ad5_1;
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
    var tmp20_input = decoder.v13(tmp0_desc);
    if (tmp20_input.k14()) {
      tmp4_local0 = tmp20_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.j14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.x13(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.x13(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.x13(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.x13(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.x13(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.j14(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.j14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.x13(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.x13(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.x13(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.x13(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.x13(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.j14(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp20_input.w13(tmp0_desc);
    return BlogTheme.cd5(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  dz() {
    return this.ad5_1;
  }
  d1c() {
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
  dd5(_set____db54di) {
    this.avatarShape = _set____db54di;
  }
  td3() {
    return this.avatarShape;
  }
  ed5(_set____db54di) {
    this.backgroundColor = _set____db54di;
  }
  fd5() {
    return this.backgroundColor;
  }
  gd5(_set____db54di) {
    this.bodyFont = _set____db54di;
  }
  hd5() {
    return this.bodyFont;
  }
  id5(_set____db54di) {
    this.headerImage = _set____db54di;
  }
  jd5() {
    return this.headerImage;
  }
  kd5(_set____db54di) {
    this.headerImageFocused = _set____db54di;
  }
  ld5() {
    return this.headerImageFocused;
  }
  nd5(_set____db54di) {
    this.headerImagePoster = _set____db54di;
  }
  od5() {
    return this.headerImagePoster;
  }
  pd5(_set____db54di) {
    this.headerImageScaled = _set____db54di;
  }
  qd5() {
    return this.headerImageScaled;
  }
  rd5(_set____db54di) {
    this.isHeaderStretch = _set____db54di;
  }
  sd5() {
    return this.isHeaderStretch;
  }
  td5() {
    return this.linkColor;
  }
  ud5() {
    return this.isShowAvatar;
  }
  vd5() {
    return this.isShowDescription;
  }
  wd5() {
    return this.isShowHeaderImage;
  }
  xd5() {
    return this.isShowTitle;
  }
  yd5() {
    return this.titleColor;
  }
  zd5() {
    return this.titleFont;
  }
  ad6() {
    return this.titleFontWeight;
  }
  static cd5(seen0, avatarShape, backgroundColor, bodyFont, headerImage, headerImageFocused, headerImagePoster, headerImageScaled, isHeaderStretch, linkColor, isShowAvatar, isShowDescription, isShowHeaderImage, isShowTitle, titleColor, titleFont, titleFontWeight, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().ad5_1);
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
    tmp0_serialDesc.n1b('comment', true);
    tmp0_serialDesc.n1b('tree_html', true);
    this.bd6_1 = tmp0_serialDesc;
  }
  cd6(encoder, value) {
    var tmp0_desc = this.bd6_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.comment == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.comment);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.treeHtml == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.treeHtml);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.cd6(encoder, value instanceof Reblog ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.bd6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return Reblog.dd6(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.bd6_1;
  }
  d1c() {
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
  d9k(_set____db54di) {
    this.comment = _set____db54di;
  }
  e3f() {
    return this.comment;
  }
  ed6(_set____db54di) {
    this.treeHtml = _set____db54di;
  }
  fd6() {
    return this.treeHtml;
  }
  static dd6(seen0, comment, treeHtml, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().bd6_1);
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
  o1p() {
    return PostSerializer_getInstance();
  }
}
class Post {
  constructor() {
    return new.target.gd6();
  }
  static gd6() {
    return createThis(this);
  }
  hd6() {
    return this instanceof LegacyTextPost ? this : null;
  }
  id6() {
    return this instanceof LegacyPhotoPost ? this : null;
  }
  jd6() {
    return this instanceof LegacyQuotePost ? this : null;
  }
  kd6() {
    return this instanceof LegacyLinkPost ? this : null;
  }
  ld6() {
    return this instanceof LegacyVideoPost ? this : null;
  }
  md6() {
    return this instanceof LegacyAudioPost ? this : null;
  }
  nd6() {
    return this instanceof LegacyChatPost ? this : null;
  }
  od6() {
    return this instanceof LegacyAnswerPost ? this : null;
  }
  pd6() {
    return this instanceof LegacyPostcardPost ? this : null;
  }
  get asLegacyTextPost() {
    return this.hd6();
  }
  get asLegacyPhotoPost() {
    return this.id6();
  }
  get asLegacyQuotePost() {
    return this.jd6();
  }
  get asLegacyLinkPost() {
    return this.kd6();
  }
  get asLegacyVideoPost() {
    return this.ld6();
  }
  get asLegacyAudioPost() {
    return this.md6();
  }
  get asLegacyChatPost() {
    return this.nd6();
  }
  get asLegacyAnswerPost() {
    return this.od6();
  }
  get asLegacyPostcardPost() {
    return this.pd6();
  }
  get blogName() {
    return this.icx();
  }
  set blogName(value) {
    this.hcx(value);
  }
  get idString() {
    return this.rd6();
  }
  set idString(value) {
    this.qd6(value);
  }
  get genesisPostId() {
    return this.td6();
  }
  set genesisPostId(value) {
    this.sd6(value);
  }
  get postUrl() {
    return this.vd6();
  }
  set postUrl(value) {
    this.ud6(value);
  }
  get parentPostUrl() {
    return this.xd6();
  }
  set parentPostUrl(value) {
    this.wd6(value);
  }
  get type() {
    return this.h38();
  }
  set type(value) {
    this.u38(value);
  }
  get timestamp() {
    return this.qd3();
  }
  set timestamp(value) {
    this.yd6(value);
  }
  get date() {
    return this.pcy();
  }
  set date(value) {
    this.ocy(value);
  }
  get format() {
    return this.rcy();
  }
  set format(value) {
    this.qcy(value);
  }
  get reblogKey() {
    return this.id0();
  }
  set reblogKey(value) {
    this.hd0(value);
  }
  get tags() {
    return this.xag();
  }
  set tags(value) {
    this.cam(value);
  }
  get isBookmarklet() {
    return this.ad7();
  }
  set isBookmarklet(value) {
    this.zd6(value);
  }
  get isMobile() {
    return this.cd7();
  }
  set isMobile(value) {
    this.bd7(value);
  }
  get sourceUrl() {
    return this.j38();
  }
  set sourceUrl(value) {
    this.i38(value);
  }
  get sourceTitle() {
    return this.ed7();
  }
  set sourceTitle(value) {
    this.dd7(value);
  }
  get isLiked() {
    return this.tao();
  }
  set isLiked(value) {
    this.fd7(value);
  }
  get state() {
    return this.s7x();
  }
  set state(value) {
    this.sa8(value);
  }
  get title() {
    return this.x3i();
  }
  set title(value) {
    this.sag(value);
  }
  get body() {
    return this.lan();
  }
  set body(value) {
    this.kan(value);
  }
  get noteCount() {
    return this.hd7();
  }
  set noteCount(value) {
    this.gd7(value);
  }
  get summary() {
    return this.gao();
  }
  set summary(value) {
    this.fao(value);
  }
  get slug() {
    return this.tcy();
  }
  set slug(value) {
    this.scy(value);
  }
  get rebloggedFromId() {
    return this.jd7();
  }
  set rebloggedFromId(value) {
    this.id7(value);
  }
  get rebloggedFromUrl() {
    return this.ld7();
  }
  set rebloggedFromUrl(value) {
    this.kd7(value);
  }
  get rebloggedFromName() {
    return this.nd7();
  }
  set rebloggedFromName(value) {
    this.md7(value);
  }
  get rebloggedFromTitle() {
    return this.pd7();
  }
  set rebloggedFromTitle(value) {
    this.od7(value);
  }
  get rebloggedFromUuid() {
    return this.rd7();
  }
  set rebloggedFromUuid(value) {
    this.qd7(value);
  }
  get rebloggedFromCanMessage() {
    return this.td7();
  }
  set rebloggedFromCanMessage(value) {
    this.sd7(value);
  }
  get rebloggedFromFollowing() {
    return this.vd7();
  }
  set rebloggedFromFollowing(value) {
    this.ud7(value);
  }
  get rebloggedRootId() {
    return this.xd7();
  }
  set rebloggedRootId(value) {
    this.wd7(value);
  }
  get rebloggedRootUrl() {
    return this.zd7();
  }
  set rebloggedRootUrl(value) {
    this.yd7(value);
  }
  get rebloggedRootName() {
    return this.bd8();
  }
  set rebloggedRootName(value) {
    this.ad8(value);
  }
  get rebloggedRootTitle() {
    return this.dd8();
  }
  set rebloggedRootTitle(value) {
    this.cd8(value);
  }
  get rebloggedRootUuid() {
    return this.fd8();
  }
  set rebloggedRootUuid(value) {
    this.ed8(value);
  }
  get rebloggedRootCanMessage() {
    return this.hd8();
  }
  set rebloggedRootCanMessage(value) {
    this.gd8(value);
  }
  get rebloggedRootFollowing() {
    return this.jd8();
  }
  set rebloggedRootFollowing(value) {
    this.id8(value);
  }
  get notes() {
    return this.ld8();
  }
  set notes(value) {
    this.kd8(value);
  }
  get blog() {
    return this.zd1();
  }
  set blog(value) {
    this.yd1(value);
  }
  get reblog() {
    return this.mbr();
  }
  set reblog(value) {
    this.md8(value);
  }
  get trail() {
    return this.od8();
  }
  set trail(value) {
    this.nd8(value);
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
    tmp.pd8_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1), null, null, null, null];
  }
  o1p() {
    return $serializer_getInstance_18();
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAnswerPost', this, 44);
    tmp0_serialDesc.n1b('blog_name', false);
    tmp0_serialDesc.n1b('id_string', false);
    tmp0_serialDesc.n1b('genesis_post_id', false);
    tmp0_serialDesc.n1b('post_url', false);
    tmp0_serialDesc.n1b('parent_post_url', false);
    tmp0_serialDesc.n1b('type', false);
    tmp0_serialDesc.n1b('timestamp', false);
    tmp0_serialDesc.n1b('date', false);
    tmp0_serialDesc.n1b('format', false);
    tmp0_serialDesc.n1b('reblog_key', false);
    tmp0_serialDesc.n1b('tags', false);
    tmp0_serialDesc.n1b('bookmarklet', false);
    tmp0_serialDesc.n1b('mobile', false);
    tmp0_serialDesc.n1b('source_url', false);
    tmp0_serialDesc.n1b('source_title', false);
    tmp0_serialDesc.n1b('liked', false);
    tmp0_serialDesc.n1b('state', false);
    tmp0_serialDesc.n1b('title', false);
    tmp0_serialDesc.n1b('body', false);
    tmp0_serialDesc.n1b('note_count', false);
    tmp0_serialDesc.n1b('summary', false);
    tmp0_serialDesc.n1b('slug', false);
    tmp0_serialDesc.n1b('reblogged_from_id', false);
    tmp0_serialDesc.n1b('reblogged_from_url', false);
    tmp0_serialDesc.n1b('reblogged_from_name', false);
    tmp0_serialDesc.n1b('reblogged_from_title', false);
    tmp0_serialDesc.n1b('reblogged_from_uuid', false);
    tmp0_serialDesc.n1b('reblogged_from_can_message', false);
    tmp0_serialDesc.n1b('reblogged_from_following', false);
    tmp0_serialDesc.n1b('reblogged_root_id', false);
    tmp0_serialDesc.n1b('reblogged_root_url', false);
    tmp0_serialDesc.n1b('reblogged_root_name', false);
    tmp0_serialDesc.n1b('reblogged_root_title', false);
    tmp0_serialDesc.n1b('reblogged_root_uuid', false);
    tmp0_serialDesc.n1b('reblogged_root_can_message', false);
    tmp0_serialDesc.n1b('reblogged_root_following', false);
    tmp0_serialDesc.n1b('notes', false);
    tmp0_serialDesc.n1b('blog', false);
    tmp0_serialDesc.n1b('reblog', false);
    tmp0_serialDesc.n1b('trail', false);
    tmp0_serialDesc.n1b('asking_name', true);
    tmp0_serialDesc.n1b('asking_url', true);
    tmp0_serialDesc.n1b('question', true);
    tmp0_serialDesc.n1b('answer', true);
    this.qd8_1 = tmp0_serialDesc;
  }
  rd8(encoder, value) {
    var tmp0_desc = this.qd8_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().pd8_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.sd8_1);
    tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.td8_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.ud8_1);
    tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.vd8_1);
    tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.wd8_1);
    tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.xd8_1);
    tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.yd8_1);
    tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.zd8_1);
    tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.ad9_1);
    tmp1_output.n15(tmp0_desc, 9, StringSerializer_getInstance(), value.bd9_1);
    tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.cd9_1);
    tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.dd9_1);
    tmp1_output.n15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ed9_1);
    tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.fd9_1);
    tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.gd9_1);
    tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.hd9_1);
    tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.id9_1);
    tmp1_output.n15(tmp0_desc, 17, StringSerializer_getInstance(), value.jd9_1);
    tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.kd9_1);
    tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.ld9_1);
    tmp1_output.n15(tmp0_desc, 20, StringSerializer_getInstance(), value.md9_1);
    tmp1_output.n15(tmp0_desc, 21, StringSerializer_getInstance(), value.nd9_1);
    tmp1_output.n15(tmp0_desc, 22, StringSerializer_getInstance(), value.od9_1);
    tmp1_output.n15(tmp0_desc, 23, StringSerializer_getInstance(), value.pd9_1);
    tmp1_output.n15(tmp0_desc, 24, StringSerializer_getInstance(), value.qd9_1);
    tmp1_output.n15(tmp0_desc, 25, StringSerializer_getInstance(), value.rd9_1);
    tmp1_output.n15(tmp0_desc, 26, StringSerializer_getInstance(), value.sd9_1);
    tmp1_output.n15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.td9_1);
    tmp1_output.n15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.ud9_1);
    tmp1_output.n15(tmp0_desc, 29, StringSerializer_getInstance(), value.vd9_1);
    tmp1_output.n15(tmp0_desc, 30, StringSerializer_getInstance(), value.wd9_1);
    tmp1_output.n15(tmp0_desc, 31, StringSerializer_getInstance(), value.xd9_1);
    tmp1_output.n15(tmp0_desc, 32, StringSerializer_getInstance(), value.yd9_1);
    tmp1_output.n15(tmp0_desc, 33, StringSerializer_getInstance(), value.zd9_1);
    tmp1_output.n15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.ada_1);
    tmp1_output.n15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.bda_1);
    tmp1_output.n15(tmp0_desc, 36, tmp2_cached[36].d3(), value.cda_1);
    tmp1_output.n15(tmp0_desc, 37, $serializer_getInstance_14(), value.dda_1);
    tmp1_output.n15(tmp0_desc, 38, $serializer_getInstance_17(), value.eda_1);
    tmp1_output.n15(tmp0_desc, 39, tmp2_cached[39].d3(), value.fda_1);
    if (tmp1_output.r15(tmp0_desc, 40) ? true : !(value.askingName == null)) {
      tmp1_output.n15(tmp0_desc, 40, StringSerializer_getInstance(), value.askingName);
    }
    if (tmp1_output.r15(tmp0_desc, 41) ? true : !(value.askingUrl == null)) {
      tmp1_output.n15(tmp0_desc, 41, StringSerializer_getInstance(), value.askingUrl);
    }
    if (tmp1_output.r15(tmp0_desc, 42) ? true : !(value.question == null)) {
      tmp1_output.n15(tmp0_desc, 42, StringSerializer_getInstance(), value.question);
    }
    if (tmp1_output.r15(tmp0_desc, 43) ? true : !(value.answer == null)) {
      tmp1_output.n15(tmp0_desc, 43, StringSerializer_getInstance(), value.answer);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.rd8(encoder, value instanceof LegacyAnswerPost ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.qd8_1;
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
    var tmp49_input = decoder.v13(tmp0_desc);
    var tmp50_cached = Companion_getInstance_21().pd8_1;
    if (tmp49_input.k14()) {
      tmp5_local0 = tmp49_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.j14(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.j14(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.j14(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.j14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.j14(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.j14(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.j14(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.j14(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.j14(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.j14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.j14(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.j14(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp49_input.w13(tmp0_desc);
    return LegacyAnswerPost.gda(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  dz() {
    return this.qd8_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_21().pd8_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAnswerPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.hda(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static hda(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_21();
    var $this = this.gd6();
    $this.sd8_1 = blogName;
    $this.td8_1 = idString;
    $this.ud8_1 = genesisPostId;
    $this.vd8_1 = postUrl;
    $this.wd8_1 = parentPostUrl;
    $this.xd8_1 = type;
    $this.yd8_1 = timestamp;
    $this.zd8_1 = date;
    $this.ad9_1 = format;
    $this.bd9_1 = reblogKey;
    $this.cd9_1 = tags;
    $this.dd9_1 = isBookmarklet;
    $this.ed9_1 = isMobile;
    $this.fd9_1 = sourceUrl;
    $this.gd9_1 = sourceTitle;
    $this.hd9_1 = isLiked;
    $this.id9_1 = state;
    $this.jd9_1 = title;
    $this.kd9_1 = body;
    $this.ld9_1 = noteCount;
    $this.md9_1 = summary;
    $this.nd9_1 = slug;
    $this.od9_1 = rebloggedFromId;
    $this.pd9_1 = rebloggedFromUrl;
    $this.qd9_1 = rebloggedFromName;
    $this.rd9_1 = rebloggedFromTitle;
    $this.sd9_1 = rebloggedFromUuid;
    $this.td9_1 = rebloggedFromCanMessage;
    $this.ud9_1 = rebloggedFromFollowing;
    $this.vd9_1 = rebloggedRootId;
    $this.wd9_1 = rebloggedRootUrl;
    $this.xd9_1 = rebloggedRootName;
    $this.yd9_1 = rebloggedRootTitle;
    $this.zd9_1 = rebloggedRootUuid;
    $this.ada_1 = rebloggedRootCanMessage;
    $this.bda_1 = rebloggedRootFollowing;
    $this.cda_1 = notes;
    $this.dda_1 = blog;
    $this.eda_1 = reblog;
    $this.fda_1 = trail;
    $this.askingName = null;
    $this.askingUrl = null;
    $this.question = null;
    $this.answer = null;
    return $this;
  }
  hcx(_set____db54di) {
    this.sd8_1 = _set____db54di;
  }
  icx() {
    return this.sd8_1;
  }
  qd6(_set____db54di) {
    this.td8_1 = _set____db54di;
  }
  rd6() {
    return this.td8_1;
  }
  sd6(_set____db54di) {
    this.ud8_1 = _set____db54di;
  }
  td6() {
    return this.ud8_1;
  }
  ud6(_set____db54di) {
    this.vd8_1 = _set____db54di;
  }
  vd6() {
    return this.vd8_1;
  }
  wd6(_set____db54di) {
    this.wd8_1 = _set____db54di;
  }
  xd6() {
    return this.wd8_1;
  }
  u38(_set____db54di) {
    this.xd8_1 = _set____db54di;
  }
  h38() {
    return this.xd8_1;
  }
  yd6(_set____db54di) {
    this.yd8_1 = _set____db54di;
  }
  qd3() {
    return this.yd8_1;
  }
  ocy(_set____db54di) {
    this.zd8_1 = _set____db54di;
  }
  pcy() {
    return this.zd8_1;
  }
  qcy(_set____db54di) {
    this.ad9_1 = _set____db54di;
  }
  rcy() {
    return this.ad9_1;
  }
  hd0(_set____db54di) {
    this.bd9_1 = _set____db54di;
  }
  id0() {
    return this.bd9_1;
  }
  cam(_set____db54di) {
    this.cd9_1 = _set____db54di;
  }
  xag() {
    return this.cd9_1;
  }
  zd6(_set____db54di) {
    this.dd9_1 = _set____db54di;
  }
  ad7() {
    return this.dd9_1;
  }
  bd7(_set____db54di) {
    this.ed9_1 = _set____db54di;
  }
  cd7() {
    return this.ed9_1;
  }
  i38(_set____db54di) {
    this.fd9_1 = _set____db54di;
  }
  j38() {
    return this.fd9_1;
  }
  dd7(_set____db54di) {
    this.gd9_1 = _set____db54di;
  }
  ed7() {
    return this.gd9_1;
  }
  fd7(_set____db54di) {
    this.hd9_1 = _set____db54di;
  }
  tao() {
    return this.hd9_1;
  }
  sa8(_set____db54di) {
    this.id9_1 = _set____db54di;
  }
  s7x() {
    return this.id9_1;
  }
  sag(_set____db54di) {
    this.jd9_1 = _set____db54di;
  }
  x3i() {
    return this.jd9_1;
  }
  kan(_set____db54di) {
    this.kd9_1 = _set____db54di;
  }
  lan() {
    return this.kd9_1;
  }
  gd7(_set____db54di) {
    this.ld9_1 = _set____db54di;
  }
  hd7() {
    return this.ld9_1;
  }
  fao(_set____db54di) {
    this.md9_1 = _set____db54di;
  }
  gao() {
    return this.md9_1;
  }
  scy(_set____db54di) {
    this.nd9_1 = _set____db54di;
  }
  tcy() {
    return this.nd9_1;
  }
  id7(_set____db54di) {
    this.od9_1 = _set____db54di;
  }
  jd7() {
    return this.od9_1;
  }
  kd7(_set____db54di) {
    this.pd9_1 = _set____db54di;
  }
  ld7() {
    return this.pd9_1;
  }
  md7(_set____db54di) {
    this.qd9_1 = _set____db54di;
  }
  nd7() {
    return this.qd9_1;
  }
  od7(_set____db54di) {
    this.rd9_1 = _set____db54di;
  }
  pd7() {
    return this.rd9_1;
  }
  qd7(_set____db54di) {
    this.sd9_1 = _set____db54di;
  }
  rd7() {
    return this.sd9_1;
  }
  sd7(_set____db54di) {
    this.td9_1 = _set____db54di;
  }
  td7() {
    return this.td9_1;
  }
  ud7(_set____db54di) {
    this.ud9_1 = _set____db54di;
  }
  vd7() {
    return this.ud9_1;
  }
  wd7(_set____db54di) {
    this.vd9_1 = _set____db54di;
  }
  xd7() {
    return this.vd9_1;
  }
  yd7(_set____db54di) {
    this.wd9_1 = _set____db54di;
  }
  zd7() {
    return this.wd9_1;
  }
  ad8(_set____db54di) {
    this.xd9_1 = _set____db54di;
  }
  bd8() {
    return this.xd9_1;
  }
  cd8(_set____db54di) {
    this.yd9_1 = _set____db54di;
  }
  dd8() {
    return this.yd9_1;
  }
  ed8(_set____db54di) {
    this.zd9_1 = _set____db54di;
  }
  fd8() {
    return this.zd9_1;
  }
  gd8(_set____db54di) {
    this.ada_1 = _set____db54di;
  }
  hd8() {
    return this.ada_1;
  }
  id8(_set____db54di) {
    this.bda_1 = _set____db54di;
  }
  jd8() {
    return this.bda_1;
  }
  kd8(_set____db54di) {
    this.cda_1 = _set____db54di;
  }
  ld8() {
    return this.cda_1;
  }
  yd1(_set____db54di) {
    this.dda_1 = _set____db54di;
  }
  zd1() {
    return this.dda_1;
  }
  md8(_set____db54di) {
    this.eda_1 = _set____db54di;
  }
  mbr() {
    return this.eda_1;
  }
  nd8(_set____db54di) {
    this.fda_1 = _set____db54di;
  }
  od8() {
    return this.fda_1;
  }
  ida() {
    return this.askingName;
  }
  jda() {
    return this.askingUrl;
  }
  kda() {
    return this.question;
  }
  ed0() {
    return this.answer;
  }
  static gda(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, askingName, askingUrl, question, answer, serializationConstructorMarker) {
    Companion_getInstance_21();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_18().qd8_1);
    }
    var $this = this.gd6();
    $this.sd8_1 = blogName;
    $this.td8_1 = idString;
    $this.ud8_1 = genesisPostId;
    $this.vd8_1 = postUrl;
    $this.wd8_1 = parentPostUrl;
    $this.xd8_1 = type;
    $this.yd8_1 = timestamp;
    $this.zd8_1 = date;
    $this.ad9_1 = format;
    $this.bd9_1 = reblogKey;
    $this.cd9_1 = tags;
    $this.dd9_1 = isBookmarklet;
    $this.ed9_1 = isMobile;
    $this.fd9_1 = sourceUrl;
    $this.gd9_1 = sourceTitle;
    $this.hd9_1 = isLiked;
    $this.id9_1 = state;
    $this.jd9_1 = title;
    $this.kd9_1 = body;
    $this.ld9_1 = noteCount;
    $this.md9_1 = summary;
    $this.nd9_1 = slug;
    $this.od9_1 = rebloggedFromId;
    $this.pd9_1 = rebloggedFromUrl;
    $this.qd9_1 = rebloggedFromName;
    $this.rd9_1 = rebloggedFromTitle;
    $this.sd9_1 = rebloggedFromUuid;
    $this.td9_1 = rebloggedFromCanMessage;
    $this.ud9_1 = rebloggedFromFollowing;
    $this.vd9_1 = rebloggedRootId;
    $this.wd9_1 = rebloggedRootUrl;
    $this.xd9_1 = rebloggedRootName;
    $this.yd9_1 = rebloggedRootTitle;
    $this.zd9_1 = rebloggedRootUuid;
    $this.ada_1 = rebloggedRootCanMessage;
    $this.bda_1 = rebloggedRootFollowing;
    $this.cda_1 = notes;
    $this.dda_1 = blog;
    $this.eda_1 = reblog;
    $this.fda_1 = trail;
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
    tmp.lda_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1), null];
  }
  o1p() {
    return $serializer_getInstance_19();
  }
}
class $serializer_20 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAudioPost', this, 41);
    tmp0_serialDesc.n1b('blog_name', false);
    tmp0_serialDesc.n1b('id_string', false);
    tmp0_serialDesc.n1b('genesis_post_id', false);
    tmp0_serialDesc.n1b('post_url', false);
    tmp0_serialDesc.n1b('parent_post_url', false);
    tmp0_serialDesc.n1b('type', false);
    tmp0_serialDesc.n1b('timestamp', false);
    tmp0_serialDesc.n1b('date', false);
    tmp0_serialDesc.n1b('format', false);
    tmp0_serialDesc.n1b('reblog_key', false);
    tmp0_serialDesc.n1b('tags', false);
    tmp0_serialDesc.n1b('bookmarklet', false);
    tmp0_serialDesc.n1b('mobile', false);
    tmp0_serialDesc.n1b('source_url', false);
    tmp0_serialDesc.n1b('source_title', false);
    tmp0_serialDesc.n1b('liked', false);
    tmp0_serialDesc.n1b('state', false);
    tmp0_serialDesc.n1b('title', false);
    tmp0_serialDesc.n1b('body', false);
    tmp0_serialDesc.n1b('note_count', false);
    tmp0_serialDesc.n1b('summary', false);
    tmp0_serialDesc.n1b('slug', false);
    tmp0_serialDesc.n1b('reblogged_from_id', false);
    tmp0_serialDesc.n1b('reblogged_from_url', false);
    tmp0_serialDesc.n1b('reblogged_from_name', false);
    tmp0_serialDesc.n1b('reblogged_from_title', false);
    tmp0_serialDesc.n1b('reblogged_from_uuid', false);
    tmp0_serialDesc.n1b('reblogged_from_can_message', false);
    tmp0_serialDesc.n1b('reblogged_from_following', false);
    tmp0_serialDesc.n1b('reblogged_root_id', false);
    tmp0_serialDesc.n1b('reblogged_root_url', false);
    tmp0_serialDesc.n1b('reblogged_root_name', false);
    tmp0_serialDesc.n1b('reblogged_root_title', false);
    tmp0_serialDesc.n1b('reblogged_root_uuid', false);
    tmp0_serialDesc.n1b('reblogged_root_can_message', false);
    tmp0_serialDesc.n1b('reblogged_root_following', false);
    tmp0_serialDesc.n1b('notes', false);
    tmp0_serialDesc.n1b('blog', false);
    tmp0_serialDesc.n1b('reblog', false);
    tmp0_serialDesc.n1b('trail', false);
    tmp0_serialDesc.n1b('caption', true);
    this.mda_1 = tmp0_serialDesc;
  }
  nda(encoder, value) {
    var tmp0_desc = this.mda_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().lda_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.oda_1);
    tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.pda_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.qda_1);
    tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.rda_1);
    tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.sda_1);
    tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.tda_1);
    tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.uda_1);
    tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.vda_1);
    tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.wda_1);
    tmp1_output.n15(tmp0_desc, 9, StringSerializer_getInstance(), value.xda_1);
    tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.yda_1);
    tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.zda_1);
    tmp1_output.n15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.adb_1);
    tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.bdb_1);
    tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.cdb_1);
    tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ddb_1);
    tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.edb_1);
    tmp1_output.n15(tmp0_desc, 17, StringSerializer_getInstance(), value.fdb_1);
    tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.gdb_1);
    tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.hdb_1);
    tmp1_output.n15(tmp0_desc, 20, StringSerializer_getInstance(), value.idb_1);
    tmp1_output.n15(tmp0_desc, 21, StringSerializer_getInstance(), value.jdb_1);
    tmp1_output.n15(tmp0_desc, 22, StringSerializer_getInstance(), value.kdb_1);
    tmp1_output.n15(tmp0_desc, 23, StringSerializer_getInstance(), value.ldb_1);
    tmp1_output.n15(tmp0_desc, 24, StringSerializer_getInstance(), value.mdb_1);
    tmp1_output.n15(tmp0_desc, 25, StringSerializer_getInstance(), value.ndb_1);
    tmp1_output.n15(tmp0_desc, 26, StringSerializer_getInstance(), value.odb_1);
    tmp1_output.n15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.pdb_1);
    tmp1_output.n15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.qdb_1);
    tmp1_output.n15(tmp0_desc, 29, StringSerializer_getInstance(), value.rdb_1);
    tmp1_output.n15(tmp0_desc, 30, StringSerializer_getInstance(), value.sdb_1);
    tmp1_output.n15(tmp0_desc, 31, StringSerializer_getInstance(), value.tdb_1);
    tmp1_output.n15(tmp0_desc, 32, StringSerializer_getInstance(), value.udb_1);
    tmp1_output.n15(tmp0_desc, 33, StringSerializer_getInstance(), value.vdb_1);
    tmp1_output.n15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.wdb_1);
    tmp1_output.n15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.xdb_1);
    tmp1_output.n15(tmp0_desc, 36, tmp2_cached[36].d3(), value.ydb_1);
    tmp1_output.n15(tmp0_desc, 37, $serializer_getInstance_14(), value.zdb_1);
    tmp1_output.n15(tmp0_desc, 38, $serializer_getInstance_17(), value.adc_1);
    tmp1_output.n15(tmp0_desc, 39, tmp2_cached[39].d3(), value.bdc_1);
    if (tmp1_output.r15(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.n15(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.nda(encoder, value instanceof LegacyAudioPost ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.mda_1;
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
    var tmp46_input = decoder.v13(tmp0_desc);
    var tmp47_cached = Companion_getInstance_22().lda_1;
    if (tmp46_input.k14()) {
      tmp5_local0 = tmp46_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.j14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.j14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.j14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.j14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.j14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.j14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp46_input.w13(tmp0_desc);
    return LegacyAudioPost.cdc(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  dz() {
    return this.mda_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_22().lda_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAudioPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ddc(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ddc(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_22();
    var $this = this.gd6();
    $this.oda_1 = blogName;
    $this.pda_1 = idString;
    $this.qda_1 = genesisPostId;
    $this.rda_1 = postUrl;
    $this.sda_1 = parentPostUrl;
    $this.tda_1 = type;
    $this.uda_1 = timestamp;
    $this.vda_1 = date;
    $this.wda_1 = format;
    $this.xda_1 = reblogKey;
    $this.yda_1 = tags;
    $this.zda_1 = isBookmarklet;
    $this.adb_1 = isMobile;
    $this.bdb_1 = sourceUrl;
    $this.cdb_1 = sourceTitle;
    $this.ddb_1 = isLiked;
    $this.edb_1 = state;
    $this.fdb_1 = title;
    $this.gdb_1 = body;
    $this.hdb_1 = noteCount;
    $this.idb_1 = summary;
    $this.jdb_1 = slug;
    $this.kdb_1 = rebloggedFromId;
    $this.ldb_1 = rebloggedFromUrl;
    $this.mdb_1 = rebloggedFromName;
    $this.ndb_1 = rebloggedFromTitle;
    $this.odb_1 = rebloggedFromUuid;
    $this.pdb_1 = rebloggedFromCanMessage;
    $this.qdb_1 = rebloggedFromFollowing;
    $this.rdb_1 = rebloggedRootId;
    $this.sdb_1 = rebloggedRootUrl;
    $this.tdb_1 = rebloggedRootName;
    $this.udb_1 = rebloggedRootTitle;
    $this.vdb_1 = rebloggedRootUuid;
    $this.wdb_1 = rebloggedRootCanMessage;
    $this.xdb_1 = rebloggedRootFollowing;
    $this.ydb_1 = notes;
    $this.zdb_1 = blog;
    $this.adc_1 = reblog;
    $this.bdc_1 = trail;
    $this.caption = null;
    return $this;
  }
  hcx(_set____db54di) {
    this.oda_1 = _set____db54di;
  }
  icx() {
    return this.oda_1;
  }
  qd6(_set____db54di) {
    this.pda_1 = _set____db54di;
  }
  rd6() {
    return this.pda_1;
  }
  sd6(_set____db54di) {
    this.qda_1 = _set____db54di;
  }
  td6() {
    return this.qda_1;
  }
  ud6(_set____db54di) {
    this.rda_1 = _set____db54di;
  }
  vd6() {
    return this.rda_1;
  }
  wd6(_set____db54di) {
    this.sda_1 = _set____db54di;
  }
  xd6() {
    return this.sda_1;
  }
  u38(_set____db54di) {
    this.tda_1 = _set____db54di;
  }
  h38() {
    return this.tda_1;
  }
  yd6(_set____db54di) {
    this.uda_1 = _set____db54di;
  }
  qd3() {
    return this.uda_1;
  }
  ocy(_set____db54di) {
    this.vda_1 = _set____db54di;
  }
  pcy() {
    return this.vda_1;
  }
  qcy(_set____db54di) {
    this.wda_1 = _set____db54di;
  }
  rcy() {
    return this.wda_1;
  }
  hd0(_set____db54di) {
    this.xda_1 = _set____db54di;
  }
  id0() {
    return this.xda_1;
  }
  cam(_set____db54di) {
    this.yda_1 = _set____db54di;
  }
  xag() {
    return this.yda_1;
  }
  zd6(_set____db54di) {
    this.zda_1 = _set____db54di;
  }
  ad7() {
    return this.zda_1;
  }
  bd7(_set____db54di) {
    this.adb_1 = _set____db54di;
  }
  cd7() {
    return this.adb_1;
  }
  i38(_set____db54di) {
    this.bdb_1 = _set____db54di;
  }
  j38() {
    return this.bdb_1;
  }
  dd7(_set____db54di) {
    this.cdb_1 = _set____db54di;
  }
  ed7() {
    return this.cdb_1;
  }
  fd7(_set____db54di) {
    this.ddb_1 = _set____db54di;
  }
  tao() {
    return this.ddb_1;
  }
  sa8(_set____db54di) {
    this.edb_1 = _set____db54di;
  }
  s7x() {
    return this.edb_1;
  }
  sag(_set____db54di) {
    this.fdb_1 = _set____db54di;
  }
  x3i() {
    return this.fdb_1;
  }
  kan(_set____db54di) {
    this.gdb_1 = _set____db54di;
  }
  lan() {
    return this.gdb_1;
  }
  gd7(_set____db54di) {
    this.hdb_1 = _set____db54di;
  }
  hd7() {
    return this.hdb_1;
  }
  fao(_set____db54di) {
    this.idb_1 = _set____db54di;
  }
  gao() {
    return this.idb_1;
  }
  scy(_set____db54di) {
    this.jdb_1 = _set____db54di;
  }
  tcy() {
    return this.jdb_1;
  }
  id7(_set____db54di) {
    this.kdb_1 = _set____db54di;
  }
  jd7() {
    return this.kdb_1;
  }
  kd7(_set____db54di) {
    this.ldb_1 = _set____db54di;
  }
  ld7() {
    return this.ldb_1;
  }
  md7(_set____db54di) {
    this.mdb_1 = _set____db54di;
  }
  nd7() {
    return this.mdb_1;
  }
  od7(_set____db54di) {
    this.ndb_1 = _set____db54di;
  }
  pd7() {
    return this.ndb_1;
  }
  qd7(_set____db54di) {
    this.odb_1 = _set____db54di;
  }
  rd7() {
    return this.odb_1;
  }
  sd7(_set____db54di) {
    this.pdb_1 = _set____db54di;
  }
  td7() {
    return this.pdb_1;
  }
  ud7(_set____db54di) {
    this.qdb_1 = _set____db54di;
  }
  vd7() {
    return this.qdb_1;
  }
  wd7(_set____db54di) {
    this.rdb_1 = _set____db54di;
  }
  xd7() {
    return this.rdb_1;
  }
  yd7(_set____db54di) {
    this.sdb_1 = _set____db54di;
  }
  zd7() {
    return this.sdb_1;
  }
  ad8(_set____db54di) {
    this.tdb_1 = _set____db54di;
  }
  bd8() {
    return this.tdb_1;
  }
  cd8(_set____db54di) {
    this.udb_1 = _set____db54di;
  }
  dd8() {
    return this.udb_1;
  }
  ed8(_set____db54di) {
    this.vdb_1 = _set____db54di;
  }
  fd8() {
    return this.vdb_1;
  }
  gd8(_set____db54di) {
    this.wdb_1 = _set____db54di;
  }
  hd8() {
    return this.wdb_1;
  }
  id8(_set____db54di) {
    this.xdb_1 = _set____db54di;
  }
  jd8() {
    return this.xdb_1;
  }
  kd8(_set____db54di) {
    this.ydb_1 = _set____db54di;
  }
  ld8() {
    return this.ydb_1;
  }
  yd1(_set____db54di) {
    this.zdb_1 = _set____db54di;
  }
  zd1() {
    return this.zdb_1;
  }
  md8(_set____db54di) {
    this.adc_1 = _set____db54di;
  }
  mbr() {
    return this.adc_1;
  }
  nd8(_set____db54di) {
    this.bdc_1 = _set____db54di;
  }
  od8() {
    return this.bdc_1;
  }
  fcy(_set____db54di) {
    this.caption = _set____db54di;
  }
  gcy() {
    return this.caption;
  }
  static cdc(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, serializationConstructorMarker) {
    Companion_getInstance_22();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_19().mda_1);
    }
    var $this = this.gd6();
    $this.oda_1 = blogName;
    $this.pda_1 = idString;
    $this.qda_1 = genesisPostId;
    $this.rda_1 = postUrl;
    $this.sda_1 = parentPostUrl;
    $this.tda_1 = type;
    $this.uda_1 = timestamp;
    $this.vda_1 = date;
    $this.wda_1 = format;
    $this.xda_1 = reblogKey;
    $this.yda_1 = tags;
    $this.zda_1 = isBookmarklet;
    $this.adb_1 = isMobile;
    $this.bdb_1 = sourceUrl;
    $this.cdb_1 = sourceTitle;
    $this.ddb_1 = isLiked;
    $this.edb_1 = state;
    $this.fdb_1 = title;
    $this.gdb_1 = body;
    $this.hdb_1 = noteCount;
    $this.idb_1 = summary;
    $this.jdb_1 = slug;
    $this.kdb_1 = rebloggedFromId;
    $this.ldb_1 = rebloggedFromUrl;
    $this.mdb_1 = rebloggedFromName;
    $this.ndb_1 = rebloggedFromTitle;
    $this.odb_1 = rebloggedFromUuid;
    $this.pdb_1 = rebloggedFromCanMessage;
    $this.qdb_1 = rebloggedFromFollowing;
    $this.rdb_1 = rebloggedRootId;
    $this.sdb_1 = rebloggedRootUrl;
    $this.tdb_1 = rebloggedRootName;
    $this.udb_1 = rebloggedRootTitle;
    $this.vdb_1 = rebloggedRootUuid;
    $this.wdb_1 = rebloggedRootCanMessage;
    $this.xdb_1 = rebloggedRootFollowing;
    $this.ydb_1 = notes;
    $this.zdb_1 = blog;
    $this.adc_1 = reblog;
    $this.bdc_1 = trail;
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
    tmp.edc_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, lazy(tmp_6, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2)];
  }
  o1p() {
    return $serializer_getInstance_20();
  }
}
class $serializer_21 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyChatPost', this, 41);
    tmp0_serialDesc.n1b('blog_name', false);
    tmp0_serialDesc.n1b('id_string', false);
    tmp0_serialDesc.n1b('genesis_post_id', false);
    tmp0_serialDesc.n1b('post_url', false);
    tmp0_serialDesc.n1b('parent_post_url', false);
    tmp0_serialDesc.n1b('type', false);
    tmp0_serialDesc.n1b('timestamp', false);
    tmp0_serialDesc.n1b('date', false);
    tmp0_serialDesc.n1b('format', false);
    tmp0_serialDesc.n1b('reblog_key', false);
    tmp0_serialDesc.n1b('tags', false);
    tmp0_serialDesc.n1b('bookmarklet', false);
    tmp0_serialDesc.n1b('mobile', false);
    tmp0_serialDesc.n1b('source_url', false);
    tmp0_serialDesc.n1b('source_title', false);
    tmp0_serialDesc.n1b('liked', false);
    tmp0_serialDesc.n1b('state', false);
    tmp0_serialDesc.n1b('title', false);
    tmp0_serialDesc.n1b('body', false);
    tmp0_serialDesc.n1b('note_count', false);
    tmp0_serialDesc.n1b('summary', false);
    tmp0_serialDesc.n1b('slug', false);
    tmp0_serialDesc.n1b('reblogged_from_id', false);
    tmp0_serialDesc.n1b('reblogged_from_url', false);
    tmp0_serialDesc.n1b('reblogged_from_name', false);
    tmp0_serialDesc.n1b('reblogged_from_title', false);
    tmp0_serialDesc.n1b('reblogged_from_uuid', false);
    tmp0_serialDesc.n1b('reblogged_from_can_message', false);
    tmp0_serialDesc.n1b('reblogged_from_following', false);
    tmp0_serialDesc.n1b('reblogged_root_id', false);
    tmp0_serialDesc.n1b('reblogged_root_url', false);
    tmp0_serialDesc.n1b('reblogged_root_name', false);
    tmp0_serialDesc.n1b('reblogged_root_title', false);
    tmp0_serialDesc.n1b('reblogged_root_uuid', false);
    tmp0_serialDesc.n1b('reblogged_root_can_message', false);
    tmp0_serialDesc.n1b('reblogged_root_following', false);
    tmp0_serialDesc.n1b('notes', false);
    tmp0_serialDesc.n1b('blog', false);
    tmp0_serialDesc.n1b('reblog', false);
    tmp0_serialDesc.n1b('trail', false);
    tmp0_serialDesc.n1b('dialogue', true);
    this.fdc_1 = tmp0_serialDesc;
  }
  gdc(encoder, value) {
    var tmp0_desc = this.fdc_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().edc_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.hdc_1);
    tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.idc_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.jdc_1);
    tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.kdc_1);
    tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.ldc_1);
    tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.mdc_1);
    tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.ndc_1);
    tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.odc_1);
    tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.pdc_1);
    tmp1_output.n15(tmp0_desc, 9, StringSerializer_getInstance(), value.qdc_1);
    tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.rdc_1);
    tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.sdc_1);
    tmp1_output.n15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.tdc_1);
    tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.udc_1);
    tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.vdc_1);
    tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.wdc_1);
    tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.xdc_1);
    tmp1_output.n15(tmp0_desc, 17, StringSerializer_getInstance(), value.ydc_1);
    tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.zdc_1);
    tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.bdd_1);
    tmp1_output.n15(tmp0_desc, 20, StringSerializer_getInstance(), value.cdd_1);
    tmp1_output.n15(tmp0_desc, 21, StringSerializer_getInstance(), value.ddd_1);
    tmp1_output.n15(tmp0_desc, 22, StringSerializer_getInstance(), value.edd_1);
    tmp1_output.n15(tmp0_desc, 23, StringSerializer_getInstance(), value.fdd_1);
    tmp1_output.n15(tmp0_desc, 24, StringSerializer_getInstance(), value.gdd_1);
    tmp1_output.n15(tmp0_desc, 25, StringSerializer_getInstance(), value.hdd_1);
    tmp1_output.n15(tmp0_desc, 26, StringSerializer_getInstance(), value.idd_1);
    tmp1_output.n15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.jdd_1);
    tmp1_output.n15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.kdd_1);
    tmp1_output.n15(tmp0_desc, 29, StringSerializer_getInstance(), value.ldd_1);
    tmp1_output.n15(tmp0_desc, 30, StringSerializer_getInstance(), value.mdd_1);
    tmp1_output.n15(tmp0_desc, 31, StringSerializer_getInstance(), value.ndd_1);
    tmp1_output.n15(tmp0_desc, 32, StringSerializer_getInstance(), value.odd_1);
    tmp1_output.n15(tmp0_desc, 33, StringSerializer_getInstance(), value.pdd_1);
    tmp1_output.n15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.qdd_1);
    tmp1_output.n15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rdd_1);
    tmp1_output.n15(tmp0_desc, 36, tmp2_cached[36].d3(), value.sdd_1);
    tmp1_output.n15(tmp0_desc, 37, $serializer_getInstance_14(), value.tdd_1);
    tmp1_output.n15(tmp0_desc, 38, $serializer_getInstance_17(), value.udd_1);
    tmp1_output.n15(tmp0_desc, 39, tmp2_cached[39].d3(), value.vdd_1);
    if (tmp1_output.r15(tmp0_desc, 40) ? true : !(value.dialogue == null)) {
      tmp1_output.n15(tmp0_desc, 40, tmp2_cached[40].d3(), value.dialogue);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.gdc(encoder, value instanceof LegacyChatPost ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.fdc_1;
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
    var tmp46_input = decoder.v13(tmp0_desc);
    var tmp47_cached = Companion_getInstance_23().edc_1;
    if (tmp46_input.k14()) {
      tmp5_local0 = tmp46_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.j14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.j14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.j14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.j14(tmp0_desc, 40, tmp47_cached[40].d3(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.j14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.j14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.j14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.j14(tmp0_desc, 40, tmp47_cached[40].d3(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp46_input.w13(tmp0_desc);
    return LegacyChatPost.wdd(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  dz() {
    return this.fdc_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_23().edc_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(tmp0_cached[40].d3())];
  }
}
class LegacyChatPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.xdd(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static xdd(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_23();
    var $this = this.gd6();
    $this.hdc_1 = blogName;
    $this.idc_1 = idString;
    $this.jdc_1 = genesisPostId;
    $this.kdc_1 = postUrl;
    $this.ldc_1 = parentPostUrl;
    $this.mdc_1 = type;
    $this.ndc_1 = timestamp;
    $this.odc_1 = date;
    $this.pdc_1 = format;
    $this.qdc_1 = reblogKey;
    $this.rdc_1 = tags;
    $this.sdc_1 = isBookmarklet;
    $this.tdc_1 = isMobile;
    $this.udc_1 = sourceUrl;
    $this.vdc_1 = sourceTitle;
    $this.wdc_1 = isLiked;
    $this.xdc_1 = state;
    $this.ydc_1 = title;
    $this.zdc_1 = body;
    $this.bdd_1 = noteCount;
    $this.cdd_1 = summary;
    $this.ddd_1 = slug;
    $this.edd_1 = rebloggedFromId;
    $this.fdd_1 = rebloggedFromUrl;
    $this.gdd_1 = rebloggedFromName;
    $this.hdd_1 = rebloggedFromTitle;
    $this.idd_1 = rebloggedFromUuid;
    $this.jdd_1 = rebloggedFromCanMessage;
    $this.kdd_1 = rebloggedFromFollowing;
    $this.ldd_1 = rebloggedRootId;
    $this.mdd_1 = rebloggedRootUrl;
    $this.ndd_1 = rebloggedRootName;
    $this.odd_1 = rebloggedRootTitle;
    $this.pdd_1 = rebloggedRootUuid;
    $this.qdd_1 = rebloggedRootCanMessage;
    $this.rdd_1 = rebloggedRootFollowing;
    $this.sdd_1 = notes;
    $this.tdd_1 = blog;
    $this.udd_1 = reblog;
    $this.vdd_1 = trail;
    $this.dialogue = null;
    return $this;
  }
  hcx(_set____db54di) {
    this.hdc_1 = _set____db54di;
  }
  icx() {
    return this.hdc_1;
  }
  qd6(_set____db54di) {
    this.idc_1 = _set____db54di;
  }
  rd6() {
    return this.idc_1;
  }
  sd6(_set____db54di) {
    this.jdc_1 = _set____db54di;
  }
  td6() {
    return this.jdc_1;
  }
  ud6(_set____db54di) {
    this.kdc_1 = _set____db54di;
  }
  vd6() {
    return this.kdc_1;
  }
  wd6(_set____db54di) {
    this.ldc_1 = _set____db54di;
  }
  xd6() {
    return this.ldc_1;
  }
  u38(_set____db54di) {
    this.mdc_1 = _set____db54di;
  }
  h38() {
    return this.mdc_1;
  }
  yd6(_set____db54di) {
    this.ndc_1 = _set____db54di;
  }
  qd3() {
    return this.ndc_1;
  }
  ocy(_set____db54di) {
    this.odc_1 = _set____db54di;
  }
  pcy() {
    return this.odc_1;
  }
  qcy(_set____db54di) {
    this.pdc_1 = _set____db54di;
  }
  rcy() {
    return this.pdc_1;
  }
  hd0(_set____db54di) {
    this.qdc_1 = _set____db54di;
  }
  id0() {
    return this.qdc_1;
  }
  cam(_set____db54di) {
    this.rdc_1 = _set____db54di;
  }
  xag() {
    return this.rdc_1;
  }
  zd6(_set____db54di) {
    this.sdc_1 = _set____db54di;
  }
  ad7() {
    return this.sdc_1;
  }
  bd7(_set____db54di) {
    this.tdc_1 = _set____db54di;
  }
  cd7() {
    return this.tdc_1;
  }
  i38(_set____db54di) {
    this.udc_1 = _set____db54di;
  }
  j38() {
    return this.udc_1;
  }
  dd7(_set____db54di) {
    this.vdc_1 = _set____db54di;
  }
  ed7() {
    return this.vdc_1;
  }
  fd7(_set____db54di) {
    this.wdc_1 = _set____db54di;
  }
  tao() {
    return this.wdc_1;
  }
  sa8(_set____db54di) {
    this.xdc_1 = _set____db54di;
  }
  s7x() {
    return this.xdc_1;
  }
  sag(_set____db54di) {
    this.ydc_1 = _set____db54di;
  }
  x3i() {
    return this.ydc_1;
  }
  kan(_set____db54di) {
    this.zdc_1 = _set____db54di;
  }
  lan() {
    return this.zdc_1;
  }
  gd7(_set____db54di) {
    this.bdd_1 = _set____db54di;
  }
  hd7() {
    return this.bdd_1;
  }
  fao(_set____db54di) {
    this.cdd_1 = _set____db54di;
  }
  gao() {
    return this.cdd_1;
  }
  scy(_set____db54di) {
    this.ddd_1 = _set____db54di;
  }
  tcy() {
    return this.ddd_1;
  }
  id7(_set____db54di) {
    this.edd_1 = _set____db54di;
  }
  jd7() {
    return this.edd_1;
  }
  kd7(_set____db54di) {
    this.fdd_1 = _set____db54di;
  }
  ld7() {
    return this.fdd_1;
  }
  md7(_set____db54di) {
    this.gdd_1 = _set____db54di;
  }
  nd7() {
    return this.gdd_1;
  }
  od7(_set____db54di) {
    this.hdd_1 = _set____db54di;
  }
  pd7() {
    return this.hdd_1;
  }
  qd7(_set____db54di) {
    this.idd_1 = _set____db54di;
  }
  rd7() {
    return this.idd_1;
  }
  sd7(_set____db54di) {
    this.jdd_1 = _set____db54di;
  }
  td7() {
    return this.jdd_1;
  }
  ud7(_set____db54di) {
    this.kdd_1 = _set____db54di;
  }
  vd7() {
    return this.kdd_1;
  }
  wd7(_set____db54di) {
    this.ldd_1 = _set____db54di;
  }
  xd7() {
    return this.ldd_1;
  }
  yd7(_set____db54di) {
    this.mdd_1 = _set____db54di;
  }
  zd7() {
    return this.mdd_1;
  }
  ad8(_set____db54di) {
    this.ndd_1 = _set____db54di;
  }
  bd8() {
    return this.ndd_1;
  }
  cd8(_set____db54di) {
    this.odd_1 = _set____db54di;
  }
  dd8() {
    return this.odd_1;
  }
  ed8(_set____db54di) {
    this.pdd_1 = _set____db54di;
  }
  fd8() {
    return this.pdd_1;
  }
  gd8(_set____db54di) {
    this.qdd_1 = _set____db54di;
  }
  hd8() {
    return this.qdd_1;
  }
  id8(_set____db54di) {
    this.rdd_1 = _set____db54di;
  }
  jd8() {
    return this.rdd_1;
  }
  kd8(_set____db54di) {
    this.sdd_1 = _set____db54di;
  }
  ld8() {
    return this.sdd_1;
  }
  yd1(_set____db54di) {
    this.tdd_1 = _set____db54di;
  }
  zd1() {
    return this.tdd_1;
  }
  md8(_set____db54di) {
    this.udd_1 = _set____db54di;
  }
  mbr() {
    return this.udd_1;
  }
  nd8(_set____db54di) {
    this.vdd_1 = _set____db54di;
  }
  od8() {
    return this.vdd_1;
  }
  ydd() {
    return this.dialogue;
  }
  static wdd(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, dialogue, serializationConstructorMarker) {
    Companion_getInstance_23();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_20().fdc_1);
    }
    var $this = this.gd6();
    $this.hdc_1 = blogName;
    $this.idc_1 = idString;
    $this.jdc_1 = genesisPostId;
    $this.kdc_1 = postUrl;
    $this.ldc_1 = parentPostUrl;
    $this.mdc_1 = type;
    $this.ndc_1 = timestamp;
    $this.odc_1 = date;
    $this.pdc_1 = format;
    $this.qdc_1 = reblogKey;
    $this.rdc_1 = tags;
    $this.sdc_1 = isBookmarklet;
    $this.tdc_1 = isMobile;
    $this.udc_1 = sourceUrl;
    $this.vdc_1 = sourceTitle;
    $this.wdc_1 = isLiked;
    $this.xdc_1 = state;
    $this.ydc_1 = title;
    $this.zdc_1 = body;
    $this.bdd_1 = noteCount;
    $this.cdd_1 = summary;
    $this.ddd_1 = slug;
    $this.edd_1 = rebloggedFromId;
    $this.fdd_1 = rebloggedFromUrl;
    $this.gdd_1 = rebloggedFromName;
    $this.hdd_1 = rebloggedFromTitle;
    $this.idd_1 = rebloggedFromUuid;
    $this.jdd_1 = rebloggedFromCanMessage;
    $this.kdd_1 = rebloggedFromFollowing;
    $this.ldd_1 = rebloggedRootId;
    $this.mdd_1 = rebloggedRootUrl;
    $this.ndd_1 = rebloggedRootName;
    $this.odd_1 = rebloggedRootTitle;
    $this.pdd_1 = rebloggedRootUuid;
    $this.qdd_1 = rebloggedRootCanMessage;
    $this.rdd_1 = rebloggedRootFollowing;
    $this.sdd_1 = notes;
    $this.tdd_1 = blog;
    $this.udd_1 = reblog;
    $this.vdd_1 = trail;
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
    tmp.zdd_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1), null, null, null, null, null];
  }
  o1p() {
    return $serializer_getInstance_21();
  }
}
class $serializer_22 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyLinkPost', this, 45);
    tmp0_serialDesc.n1b('blog_name', false);
    tmp0_serialDesc.n1b('id_string', false);
    tmp0_serialDesc.n1b('genesis_post_id', false);
    tmp0_serialDesc.n1b('post_url', false);
    tmp0_serialDesc.n1b('parent_post_url', false);
    tmp0_serialDesc.n1b('type', false);
    tmp0_serialDesc.n1b('timestamp', false);
    tmp0_serialDesc.n1b('date', false);
    tmp0_serialDesc.n1b('format', false);
    tmp0_serialDesc.n1b('reblog_key', false);
    tmp0_serialDesc.n1b('tags', false);
    tmp0_serialDesc.n1b('bookmarklet', false);
    tmp0_serialDesc.n1b('mobile', false);
    tmp0_serialDesc.n1b('source_url', false);
    tmp0_serialDesc.n1b('source_title', false);
    tmp0_serialDesc.n1b('liked', false);
    tmp0_serialDesc.n1b('state', false);
    tmp0_serialDesc.n1b('title', false);
    tmp0_serialDesc.n1b('body', false);
    tmp0_serialDesc.n1b('note_count', false);
    tmp0_serialDesc.n1b('summary', false);
    tmp0_serialDesc.n1b('slug', false);
    tmp0_serialDesc.n1b('reblogged_from_id', false);
    tmp0_serialDesc.n1b('reblogged_from_url', false);
    tmp0_serialDesc.n1b('reblogged_from_name', false);
    tmp0_serialDesc.n1b('reblogged_from_title', false);
    tmp0_serialDesc.n1b('reblogged_from_uuid', false);
    tmp0_serialDesc.n1b('reblogged_from_can_message', false);
    tmp0_serialDesc.n1b('reblogged_from_following', false);
    tmp0_serialDesc.n1b('reblogged_root_id', false);
    tmp0_serialDesc.n1b('reblogged_root_url', false);
    tmp0_serialDesc.n1b('reblogged_root_name', false);
    tmp0_serialDesc.n1b('reblogged_root_title', false);
    tmp0_serialDesc.n1b('reblogged_root_uuid', false);
    tmp0_serialDesc.n1b('reblogged_root_can_message', false);
    tmp0_serialDesc.n1b('reblogged_root_following', false);
    tmp0_serialDesc.n1b('notes', false);
    tmp0_serialDesc.n1b('blog', false);
    tmp0_serialDesc.n1b('reblog', false);
    tmp0_serialDesc.n1b('trail', false);
    tmp0_serialDesc.n1b('description', true);
    tmp0_serialDesc.n1b('url', true);
    tmp0_serialDesc.n1b('link_author', true);
    tmp0_serialDesc.n1b('excerpt', true);
    tmp0_serialDesc.n1b('publisher', true);
    this.ade_1 = tmp0_serialDesc;
  }
  bde(encoder, value) {
    var tmp0_desc = this.ade_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().zdd_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.cde_1);
    tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.dde_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.ede_1);
    tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.fde_1);
    tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.gde_1);
    tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.hde_1);
    tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.ide_1);
    tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.jde_1);
    tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.kde_1);
    tmp1_output.n15(tmp0_desc, 9, StringSerializer_getInstance(), value.lde_1);
    tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.mde_1);
    tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.nde_1);
    tmp1_output.n15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ode_1);
    tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.pde_1);
    tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.qde_1);
    tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.rde_1);
    tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.sde_1);
    tmp1_output.n15(tmp0_desc, 17, StringSerializer_getInstance(), value.tde_1);
    tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.ude_1);
    tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.vde_1);
    tmp1_output.n15(tmp0_desc, 20, StringSerializer_getInstance(), value.wde_1);
    tmp1_output.n15(tmp0_desc, 21, StringSerializer_getInstance(), value.xde_1);
    tmp1_output.n15(tmp0_desc, 22, StringSerializer_getInstance(), value.yde_1);
    tmp1_output.n15(tmp0_desc, 23, StringSerializer_getInstance(), value.zde_1);
    tmp1_output.n15(tmp0_desc, 24, StringSerializer_getInstance(), value.adf_1);
    tmp1_output.n15(tmp0_desc, 25, StringSerializer_getInstance(), value.bdf_1);
    tmp1_output.n15(tmp0_desc, 26, StringSerializer_getInstance(), value.cdf_1);
    tmp1_output.n15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ddf_1);
    tmp1_output.n15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.edf_1);
    tmp1_output.n15(tmp0_desc, 29, StringSerializer_getInstance(), value.fdf_1);
    tmp1_output.n15(tmp0_desc, 30, StringSerializer_getInstance(), value.gdf_1);
    tmp1_output.n15(tmp0_desc, 31, StringSerializer_getInstance(), value.hdf_1);
    tmp1_output.n15(tmp0_desc, 32, StringSerializer_getInstance(), value.idf_1);
    tmp1_output.n15(tmp0_desc, 33, StringSerializer_getInstance(), value.jdf_1);
    tmp1_output.n15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.kdf_1);
    tmp1_output.n15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ldf_1);
    tmp1_output.n15(tmp0_desc, 36, tmp2_cached[36].d3(), value.mdf_1);
    tmp1_output.n15(tmp0_desc, 37, $serializer_getInstance_14(), value.ndf_1);
    tmp1_output.n15(tmp0_desc, 38, $serializer_getInstance_17(), value.odf_1);
    tmp1_output.n15(tmp0_desc, 39, tmp2_cached[39].d3(), value.pdf_1);
    if (tmp1_output.r15(tmp0_desc, 40) ? true : !(value.description == null)) {
      tmp1_output.n15(tmp0_desc, 40, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.r15(tmp0_desc, 41) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 41, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.r15(tmp0_desc, 42) ? true : !(value.linkAuthor == null)) {
      tmp1_output.n15(tmp0_desc, 42, StringSerializer_getInstance(), value.linkAuthor);
    }
    if (tmp1_output.r15(tmp0_desc, 43) ? true : !(value.excerpt == null)) {
      tmp1_output.n15(tmp0_desc, 43, StringSerializer_getInstance(), value.excerpt);
    }
    if (tmp1_output.r15(tmp0_desc, 44) ? true : !(value.publisher == null)) {
      tmp1_output.n15(tmp0_desc, 44, StringSerializer_getInstance(), value.publisher);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.bde(encoder, value instanceof LegacyLinkPost ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ade_1;
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
    var tmp50_input = decoder.v13(tmp0_desc);
    var tmp51_cached = Companion_getInstance_24().zdd_1;
    if (tmp50_input.k14()) {
      tmp5_local0 = tmp50_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp50_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp50_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp50_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp50_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp50_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp50_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp50_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp50_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp50_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp50_input.j14(tmp0_desc, 10, tmp51_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp50_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp50_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp50_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp50_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp50_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp50_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp50_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp50_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp50_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp50_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp50_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp50_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp50_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp50_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp50_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp50_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp50_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp50_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp50_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp50_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp50_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp50_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp50_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp50_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp50_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp50_input.j14(tmp0_desc, 36, tmp51_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp50_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp50_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp50_input.j14(tmp0_desc, 39, tmp51_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp50_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp50_input.j14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp50_input.j14(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp50_input.j14(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp50_input.j14(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp50_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp50_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp50_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp50_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp50_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp50_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp50_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp50_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp50_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp50_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp50_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp50_input.j14(tmp0_desc, 10, tmp51_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp50_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp50_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp50_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp50_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp50_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp50_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp50_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp50_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp50_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp50_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp50_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp50_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp50_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp50_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp50_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp50_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp50_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp50_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp50_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp50_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp50_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp50_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp50_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp50_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp50_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp50_input.j14(tmp0_desc, 36, tmp51_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp50_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp50_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp50_input.j14(tmp0_desc, 39, tmp51_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp50_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp50_input.j14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp50_input.j14(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp50_input.j14(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp50_input.j14(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp50_input.w13(tmp0_desc);
    return LegacyLinkPost.qdf(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, null);
  }
  dz() {
    return this.ade_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_24().zdd_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyLinkPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.rdf(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static rdf(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_24();
    var $this = this.gd6();
    $this.cde_1 = blogName;
    $this.dde_1 = idString;
    $this.ede_1 = genesisPostId;
    $this.fde_1 = postUrl;
    $this.gde_1 = parentPostUrl;
    $this.hde_1 = type;
    $this.ide_1 = timestamp;
    $this.jde_1 = date;
    $this.kde_1 = format;
    $this.lde_1 = reblogKey;
    $this.mde_1 = tags;
    $this.nde_1 = isBookmarklet;
    $this.ode_1 = isMobile;
    $this.pde_1 = sourceUrl;
    $this.qde_1 = sourceTitle;
    $this.rde_1 = isLiked;
    $this.sde_1 = state;
    $this.tde_1 = title;
    $this.ude_1 = body;
    $this.vde_1 = noteCount;
    $this.wde_1 = summary;
    $this.xde_1 = slug;
    $this.yde_1 = rebloggedFromId;
    $this.zde_1 = rebloggedFromUrl;
    $this.adf_1 = rebloggedFromName;
    $this.bdf_1 = rebloggedFromTitle;
    $this.cdf_1 = rebloggedFromUuid;
    $this.ddf_1 = rebloggedFromCanMessage;
    $this.edf_1 = rebloggedFromFollowing;
    $this.fdf_1 = rebloggedRootId;
    $this.gdf_1 = rebloggedRootUrl;
    $this.hdf_1 = rebloggedRootName;
    $this.idf_1 = rebloggedRootTitle;
    $this.jdf_1 = rebloggedRootUuid;
    $this.kdf_1 = rebloggedRootCanMessage;
    $this.ldf_1 = rebloggedRootFollowing;
    $this.mdf_1 = notes;
    $this.ndf_1 = blog;
    $this.odf_1 = reblog;
    $this.pdf_1 = trail;
    $this.description = null;
    $this.url = null;
    $this.linkAuthor = null;
    $this.excerpt = null;
    $this.publisher = null;
    return $this;
  }
  hcx(_set____db54di) {
    this.cde_1 = _set____db54di;
  }
  icx() {
    return this.cde_1;
  }
  qd6(_set____db54di) {
    this.dde_1 = _set____db54di;
  }
  rd6() {
    return this.dde_1;
  }
  sd6(_set____db54di) {
    this.ede_1 = _set____db54di;
  }
  td6() {
    return this.ede_1;
  }
  ud6(_set____db54di) {
    this.fde_1 = _set____db54di;
  }
  vd6() {
    return this.fde_1;
  }
  wd6(_set____db54di) {
    this.gde_1 = _set____db54di;
  }
  xd6() {
    return this.gde_1;
  }
  u38(_set____db54di) {
    this.hde_1 = _set____db54di;
  }
  h38() {
    return this.hde_1;
  }
  yd6(_set____db54di) {
    this.ide_1 = _set____db54di;
  }
  qd3() {
    return this.ide_1;
  }
  ocy(_set____db54di) {
    this.jde_1 = _set____db54di;
  }
  pcy() {
    return this.jde_1;
  }
  qcy(_set____db54di) {
    this.kde_1 = _set____db54di;
  }
  rcy() {
    return this.kde_1;
  }
  hd0(_set____db54di) {
    this.lde_1 = _set____db54di;
  }
  id0() {
    return this.lde_1;
  }
  cam(_set____db54di) {
    this.mde_1 = _set____db54di;
  }
  xag() {
    return this.mde_1;
  }
  zd6(_set____db54di) {
    this.nde_1 = _set____db54di;
  }
  ad7() {
    return this.nde_1;
  }
  bd7(_set____db54di) {
    this.ode_1 = _set____db54di;
  }
  cd7() {
    return this.ode_1;
  }
  i38(_set____db54di) {
    this.pde_1 = _set____db54di;
  }
  j38() {
    return this.pde_1;
  }
  dd7(_set____db54di) {
    this.qde_1 = _set____db54di;
  }
  ed7() {
    return this.qde_1;
  }
  fd7(_set____db54di) {
    this.rde_1 = _set____db54di;
  }
  tao() {
    return this.rde_1;
  }
  sa8(_set____db54di) {
    this.sde_1 = _set____db54di;
  }
  s7x() {
    return this.sde_1;
  }
  sag(_set____db54di) {
    this.tde_1 = _set____db54di;
  }
  x3i() {
    return this.tde_1;
  }
  kan(_set____db54di) {
    this.ude_1 = _set____db54di;
  }
  lan() {
    return this.ude_1;
  }
  gd7(_set____db54di) {
    this.vde_1 = _set____db54di;
  }
  hd7() {
    return this.vde_1;
  }
  fao(_set____db54di) {
    this.wde_1 = _set____db54di;
  }
  gao() {
    return this.wde_1;
  }
  scy(_set____db54di) {
    this.xde_1 = _set____db54di;
  }
  tcy() {
    return this.xde_1;
  }
  id7(_set____db54di) {
    this.yde_1 = _set____db54di;
  }
  jd7() {
    return this.yde_1;
  }
  kd7(_set____db54di) {
    this.zde_1 = _set____db54di;
  }
  ld7() {
    return this.zde_1;
  }
  md7(_set____db54di) {
    this.adf_1 = _set____db54di;
  }
  nd7() {
    return this.adf_1;
  }
  od7(_set____db54di) {
    this.bdf_1 = _set____db54di;
  }
  pd7() {
    return this.bdf_1;
  }
  qd7(_set____db54di) {
    this.cdf_1 = _set____db54di;
  }
  rd7() {
    return this.cdf_1;
  }
  sd7(_set____db54di) {
    this.ddf_1 = _set____db54di;
  }
  td7() {
    return this.ddf_1;
  }
  ud7(_set____db54di) {
    this.edf_1 = _set____db54di;
  }
  vd7() {
    return this.edf_1;
  }
  wd7(_set____db54di) {
    this.fdf_1 = _set____db54di;
  }
  xd7() {
    return this.fdf_1;
  }
  yd7(_set____db54di) {
    this.gdf_1 = _set____db54di;
  }
  zd7() {
    return this.gdf_1;
  }
  ad8(_set____db54di) {
    this.hdf_1 = _set____db54di;
  }
  bd8() {
    return this.hdf_1;
  }
  cd8(_set____db54di) {
    this.idf_1 = _set____db54di;
  }
  dd8() {
    return this.idf_1;
  }
  ed8(_set____db54di) {
    this.jdf_1 = _set____db54di;
  }
  fd8() {
    return this.jdf_1;
  }
  gd8(_set____db54di) {
    this.kdf_1 = _set____db54di;
  }
  hd8() {
    return this.kdf_1;
  }
  id8(_set____db54di) {
    this.ldf_1 = _set____db54di;
  }
  jd8() {
    return this.ldf_1;
  }
  kd8(_set____db54di) {
    this.mdf_1 = _set____db54di;
  }
  ld8() {
    return this.mdf_1;
  }
  yd1(_set____db54di) {
    this.ndf_1 = _set____db54di;
  }
  zd1() {
    return this.ndf_1;
  }
  md8(_set____db54di) {
    this.odf_1 = _set____db54di;
  }
  mbr() {
    return this.odf_1;
  }
  nd8(_set____db54di) {
    this.pdf_1 = _set____db54di;
  }
  od8() {
    return this.pdf_1;
  }
  z36(_set____db54di) {
    this.description = _set____db54di;
  }
  j36() {
    return this.description;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  sdf(_set____db54di) {
    this.linkAuthor = _set____db54di;
  }
  tdf() {
    return this.linkAuthor;
  }
  ycy(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  zcy() {
    return this.excerpt;
  }
  udf(_set____db54di) {
    this.publisher = _set____db54di;
  }
  vdf() {
    return this.publisher;
  }
  static qdf(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, description, url, linkAuthor, excerpt, publisher, serializationConstructorMarker) {
    Companion_getInstance_24();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_21().ade_1);
    }
    var $this = this.gd6();
    $this.cde_1 = blogName;
    $this.dde_1 = idString;
    $this.ede_1 = genesisPostId;
    $this.fde_1 = postUrl;
    $this.gde_1 = parentPostUrl;
    $this.hde_1 = type;
    $this.ide_1 = timestamp;
    $this.jde_1 = date;
    $this.kde_1 = format;
    $this.lde_1 = reblogKey;
    $this.mde_1 = tags;
    $this.nde_1 = isBookmarklet;
    $this.ode_1 = isMobile;
    $this.pde_1 = sourceUrl;
    $this.qde_1 = sourceTitle;
    $this.rde_1 = isLiked;
    $this.sde_1 = state;
    $this.tde_1 = title;
    $this.ude_1 = body;
    $this.vde_1 = noteCount;
    $this.wde_1 = summary;
    $this.xde_1 = slug;
    $this.yde_1 = rebloggedFromId;
    $this.zde_1 = rebloggedFromUrl;
    $this.adf_1 = rebloggedFromName;
    $this.bdf_1 = rebloggedFromTitle;
    $this.cdf_1 = rebloggedFromUuid;
    $this.ddf_1 = rebloggedFromCanMessage;
    $this.edf_1 = rebloggedFromFollowing;
    $this.fdf_1 = rebloggedRootId;
    $this.gdf_1 = rebloggedRootUrl;
    $this.hdf_1 = rebloggedRootName;
    $this.idf_1 = rebloggedRootTitle;
    $this.jdf_1 = rebloggedRootUuid;
    $this.kdf_1 = rebloggedRootCanMessage;
    $this.ldf_1 = rebloggedRootFollowing;
    $this.mdf_1 = notes;
    $this.ndf_1 = blog;
    $this.odf_1 = reblog;
    $this.pdf_1 = trail;
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
    tmp.wdf_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, null, null, lazy(tmp_6, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2)];
  }
  o1p() {
    return $serializer_getInstance_22();
  }
}
class $serializer_23 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPhotoPost', this, 44);
    tmp0_serialDesc.n1b('blog_name', false);
    tmp0_serialDesc.n1b('id_string', false);
    tmp0_serialDesc.n1b('genesis_post_id', false);
    tmp0_serialDesc.n1b('post_url', false);
    tmp0_serialDesc.n1b('parent_post_url', false);
    tmp0_serialDesc.n1b('type', false);
    tmp0_serialDesc.n1b('timestamp', false);
    tmp0_serialDesc.n1b('date', false);
    tmp0_serialDesc.n1b('format', false);
    tmp0_serialDesc.n1b('reblog_key', false);
    tmp0_serialDesc.n1b('tags', false);
    tmp0_serialDesc.n1b('bookmarklet', false);
    tmp0_serialDesc.n1b('mobile', false);
    tmp0_serialDesc.n1b('source_url', false);
    tmp0_serialDesc.n1b('source_title', false);
    tmp0_serialDesc.n1b('liked', false);
    tmp0_serialDesc.n1b('state', false);
    tmp0_serialDesc.n1b('title', false);
    tmp0_serialDesc.n1b('body', false);
    tmp0_serialDesc.n1b('note_count', false);
    tmp0_serialDesc.n1b('summary', false);
    tmp0_serialDesc.n1b('slug', false);
    tmp0_serialDesc.n1b('reblogged_from_id', false);
    tmp0_serialDesc.n1b('reblogged_from_url', false);
    tmp0_serialDesc.n1b('reblogged_from_name', false);
    tmp0_serialDesc.n1b('reblogged_from_title', false);
    tmp0_serialDesc.n1b('reblogged_from_uuid', false);
    tmp0_serialDesc.n1b('reblogged_from_can_message', false);
    tmp0_serialDesc.n1b('reblogged_from_following', false);
    tmp0_serialDesc.n1b('reblogged_root_id', false);
    tmp0_serialDesc.n1b('reblogged_root_url', false);
    tmp0_serialDesc.n1b('reblogged_root_name', false);
    tmp0_serialDesc.n1b('reblogged_root_title', false);
    tmp0_serialDesc.n1b('reblogged_root_uuid', false);
    tmp0_serialDesc.n1b('reblogged_root_can_message', false);
    tmp0_serialDesc.n1b('reblogged_root_following', false);
    tmp0_serialDesc.n1b('notes', false);
    tmp0_serialDesc.n1b('blog', false);
    tmp0_serialDesc.n1b('reblog', false);
    tmp0_serialDesc.n1b('trail', false);
    tmp0_serialDesc.n1b('caption', true);
    tmp0_serialDesc.n1b('width', true);
    tmp0_serialDesc.n1b('height', true);
    tmp0_serialDesc.n1b('photos', true);
    this.xdf_1 = tmp0_serialDesc;
  }
  ydf(encoder, value) {
    var tmp0_desc = this.xdf_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().wdf_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.zdf_1);
    tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.adg_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.bdg_1);
    tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.cdg_1);
    tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.ddg_1);
    tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.edg_1);
    tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.fdg_1);
    tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.gdg_1);
    tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.hdg_1);
    tmp1_output.n15(tmp0_desc, 9, StringSerializer_getInstance(), value.idg_1);
    tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.jdg_1);
    tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.kdg_1);
    tmp1_output.n15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ldg_1);
    tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.mdg_1);
    tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.ndg_1);
    tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.odg_1);
    tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.pdg_1);
    tmp1_output.n15(tmp0_desc, 17, StringSerializer_getInstance(), value.qdg_1);
    tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.rdg_1);
    tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.sdg_1);
    tmp1_output.n15(tmp0_desc, 20, StringSerializer_getInstance(), value.tdg_1);
    tmp1_output.n15(tmp0_desc, 21, StringSerializer_getInstance(), value.udg_1);
    tmp1_output.n15(tmp0_desc, 22, StringSerializer_getInstance(), value.vdg_1);
    tmp1_output.n15(tmp0_desc, 23, StringSerializer_getInstance(), value.wdg_1);
    tmp1_output.n15(tmp0_desc, 24, StringSerializer_getInstance(), value.xdg_1);
    tmp1_output.n15(tmp0_desc, 25, StringSerializer_getInstance(), value.ydg_1);
    tmp1_output.n15(tmp0_desc, 26, StringSerializer_getInstance(), value.zdg_1);
    tmp1_output.n15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.adh_1);
    tmp1_output.n15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.bdh_1);
    tmp1_output.n15(tmp0_desc, 29, StringSerializer_getInstance(), value.cdh_1);
    tmp1_output.n15(tmp0_desc, 30, StringSerializer_getInstance(), value.ddh_1);
    tmp1_output.n15(tmp0_desc, 31, StringSerializer_getInstance(), value.edh_1);
    tmp1_output.n15(tmp0_desc, 32, StringSerializer_getInstance(), value.fdh_1);
    tmp1_output.n15(tmp0_desc, 33, StringSerializer_getInstance(), value.gdh_1);
    tmp1_output.n15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.hdh_1);
    tmp1_output.n15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.idh_1);
    tmp1_output.n15(tmp0_desc, 36, tmp2_cached[36].d3(), value.jdh_1);
    tmp1_output.n15(tmp0_desc, 37, $serializer_getInstance_14(), value.kdh_1);
    tmp1_output.n15(tmp0_desc, 38, $serializer_getInstance_17(), value.ldh_1);
    tmp1_output.n15(tmp0_desc, 39, tmp2_cached[39].d3(), value.mdh_1);
    if (tmp1_output.r15(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.n15(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.r15(tmp0_desc, 41) ? true : !(value.width == null)) {
      tmp1_output.n15(tmp0_desc, 41, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.r15(tmp0_desc, 42) ? true : !(value.height == null)) {
      tmp1_output.n15(tmp0_desc, 42, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.r15(tmp0_desc, 43) ? true : !(value.photos == null)) {
      tmp1_output.n15(tmp0_desc, 43, tmp2_cached[43].d3(), value.photos);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.ydf(encoder, value instanceof LegacyPhotoPost ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.xdf_1;
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
    var tmp49_input = decoder.v13(tmp0_desc);
    var tmp50_cached = Companion_getInstance_25().wdf_1;
    if (tmp49_input.k14()) {
      tmp5_local0 = tmp49_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.j14(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.j14(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.j14(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.j14(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.j14(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.j14(tmp0_desc, 43, tmp50_cached[43].d3(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.j14(tmp0_desc, 10, tmp50_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.j14(tmp0_desc, 36, tmp50_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.j14(tmp0_desc, 39, tmp50_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.j14(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.j14(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.j14(tmp0_desc, 43, tmp50_cached[43].d3(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp49_input.w13(tmp0_desc);
    return LegacyPhotoPost.ndh(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  dz() {
    return this.xdf_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_25().wdf_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[43].d3())];
  }
}
class LegacyPhotoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.odh(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static odh(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_25();
    var $this = this.gd6();
    $this.zdf_1 = blogName;
    $this.adg_1 = idString;
    $this.bdg_1 = genesisPostId;
    $this.cdg_1 = postUrl;
    $this.ddg_1 = parentPostUrl;
    $this.edg_1 = type;
    $this.fdg_1 = timestamp;
    $this.gdg_1 = date;
    $this.hdg_1 = format;
    $this.idg_1 = reblogKey;
    $this.jdg_1 = tags;
    $this.kdg_1 = isBookmarklet;
    $this.ldg_1 = isMobile;
    $this.mdg_1 = sourceUrl;
    $this.ndg_1 = sourceTitle;
    $this.odg_1 = isLiked;
    $this.pdg_1 = state;
    $this.qdg_1 = title;
    $this.rdg_1 = body;
    $this.sdg_1 = noteCount;
    $this.tdg_1 = summary;
    $this.udg_1 = slug;
    $this.vdg_1 = rebloggedFromId;
    $this.wdg_1 = rebloggedFromUrl;
    $this.xdg_1 = rebloggedFromName;
    $this.ydg_1 = rebloggedFromTitle;
    $this.zdg_1 = rebloggedFromUuid;
    $this.adh_1 = rebloggedFromCanMessage;
    $this.bdh_1 = rebloggedFromFollowing;
    $this.cdh_1 = rebloggedRootId;
    $this.ddh_1 = rebloggedRootUrl;
    $this.edh_1 = rebloggedRootName;
    $this.fdh_1 = rebloggedRootTitle;
    $this.gdh_1 = rebloggedRootUuid;
    $this.hdh_1 = rebloggedRootCanMessage;
    $this.idh_1 = rebloggedRootFollowing;
    $this.jdh_1 = notes;
    $this.kdh_1 = blog;
    $this.ldh_1 = reblog;
    $this.mdh_1 = trail;
    $this.caption = null;
    $this.width = null;
    $this.height = null;
    $this.photos = null;
    return $this;
  }
  hcx(_set____db54di) {
    this.zdf_1 = _set____db54di;
  }
  icx() {
    return this.zdf_1;
  }
  qd6(_set____db54di) {
    this.adg_1 = _set____db54di;
  }
  rd6() {
    return this.adg_1;
  }
  sd6(_set____db54di) {
    this.bdg_1 = _set____db54di;
  }
  td6() {
    return this.bdg_1;
  }
  ud6(_set____db54di) {
    this.cdg_1 = _set____db54di;
  }
  vd6() {
    return this.cdg_1;
  }
  wd6(_set____db54di) {
    this.ddg_1 = _set____db54di;
  }
  xd6() {
    return this.ddg_1;
  }
  u38(_set____db54di) {
    this.edg_1 = _set____db54di;
  }
  h38() {
    return this.edg_1;
  }
  yd6(_set____db54di) {
    this.fdg_1 = _set____db54di;
  }
  qd3() {
    return this.fdg_1;
  }
  ocy(_set____db54di) {
    this.gdg_1 = _set____db54di;
  }
  pcy() {
    return this.gdg_1;
  }
  qcy(_set____db54di) {
    this.hdg_1 = _set____db54di;
  }
  rcy() {
    return this.hdg_1;
  }
  hd0(_set____db54di) {
    this.idg_1 = _set____db54di;
  }
  id0() {
    return this.idg_1;
  }
  cam(_set____db54di) {
    this.jdg_1 = _set____db54di;
  }
  xag() {
    return this.jdg_1;
  }
  zd6(_set____db54di) {
    this.kdg_1 = _set____db54di;
  }
  ad7() {
    return this.kdg_1;
  }
  bd7(_set____db54di) {
    this.ldg_1 = _set____db54di;
  }
  cd7() {
    return this.ldg_1;
  }
  i38(_set____db54di) {
    this.mdg_1 = _set____db54di;
  }
  j38() {
    return this.mdg_1;
  }
  dd7(_set____db54di) {
    this.ndg_1 = _set____db54di;
  }
  ed7() {
    return this.ndg_1;
  }
  fd7(_set____db54di) {
    this.odg_1 = _set____db54di;
  }
  tao() {
    return this.odg_1;
  }
  sa8(_set____db54di) {
    this.pdg_1 = _set____db54di;
  }
  s7x() {
    return this.pdg_1;
  }
  sag(_set____db54di) {
    this.qdg_1 = _set____db54di;
  }
  x3i() {
    return this.qdg_1;
  }
  kan(_set____db54di) {
    this.rdg_1 = _set____db54di;
  }
  lan() {
    return this.rdg_1;
  }
  gd7(_set____db54di) {
    this.sdg_1 = _set____db54di;
  }
  hd7() {
    return this.sdg_1;
  }
  fao(_set____db54di) {
    this.tdg_1 = _set____db54di;
  }
  gao() {
    return this.tdg_1;
  }
  scy(_set____db54di) {
    this.udg_1 = _set____db54di;
  }
  tcy() {
    return this.udg_1;
  }
  id7(_set____db54di) {
    this.vdg_1 = _set____db54di;
  }
  jd7() {
    return this.vdg_1;
  }
  kd7(_set____db54di) {
    this.wdg_1 = _set____db54di;
  }
  ld7() {
    return this.wdg_1;
  }
  md7(_set____db54di) {
    this.xdg_1 = _set____db54di;
  }
  nd7() {
    return this.xdg_1;
  }
  od7(_set____db54di) {
    this.ydg_1 = _set____db54di;
  }
  pd7() {
    return this.ydg_1;
  }
  qd7(_set____db54di) {
    this.zdg_1 = _set____db54di;
  }
  rd7() {
    return this.zdg_1;
  }
  sd7(_set____db54di) {
    this.adh_1 = _set____db54di;
  }
  td7() {
    return this.adh_1;
  }
  ud7(_set____db54di) {
    this.bdh_1 = _set____db54di;
  }
  vd7() {
    return this.bdh_1;
  }
  wd7(_set____db54di) {
    this.cdh_1 = _set____db54di;
  }
  xd7() {
    return this.cdh_1;
  }
  yd7(_set____db54di) {
    this.ddh_1 = _set____db54di;
  }
  zd7() {
    return this.ddh_1;
  }
  ad8(_set____db54di) {
    this.edh_1 = _set____db54di;
  }
  bd8() {
    return this.edh_1;
  }
  cd8(_set____db54di) {
    this.fdh_1 = _set____db54di;
  }
  dd8() {
    return this.fdh_1;
  }
  ed8(_set____db54di) {
    this.gdh_1 = _set____db54di;
  }
  fd8() {
    return this.gdh_1;
  }
  gd8(_set____db54di) {
    this.hdh_1 = _set____db54di;
  }
  hd8() {
    return this.hdh_1;
  }
  id8(_set____db54di) {
    this.idh_1 = _set____db54di;
  }
  jd8() {
    return this.idh_1;
  }
  kd8(_set____db54di) {
    this.jdh_1 = _set____db54di;
  }
  ld8() {
    return this.jdh_1;
  }
  yd1(_set____db54di) {
    this.kdh_1 = _set____db54di;
  }
  zd1() {
    return this.kdh_1;
  }
  md8(_set____db54di) {
    this.ldh_1 = _set____db54di;
  }
  mbr() {
    return this.ldh_1;
  }
  nd8(_set____db54di) {
    this.mdh_1 = _set____db54di;
  }
  od8() {
    return this.mdh_1;
  }
  fcy(_set____db54di) {
    this.caption = _set____db54di;
  }
  gcy() {
    return this.caption;
  }
  m38(_set____db54di) {
    this.width = _set____db54di;
  }
  n38() {
    return this.width;
  }
  o38(_set____db54di) {
    this.height = _set____db54di;
  }
  p38() {
    return this.height;
  }
  pdh(_set____db54di) {
    this.photos = _set____db54di;
  }
  qdh() {
    return this.photos;
  }
  static ndh(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, width, height, photos, serializationConstructorMarker) {
    Companion_getInstance_25();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_22().xdf_1);
    }
    var $this = this.gd6();
    $this.zdf_1 = blogName;
    $this.adg_1 = idString;
    $this.bdg_1 = genesisPostId;
    $this.cdg_1 = postUrl;
    $this.ddg_1 = parentPostUrl;
    $this.edg_1 = type;
    $this.fdg_1 = timestamp;
    $this.gdg_1 = date;
    $this.hdg_1 = format;
    $this.idg_1 = reblogKey;
    $this.jdg_1 = tags;
    $this.kdg_1 = isBookmarklet;
    $this.ldg_1 = isMobile;
    $this.mdg_1 = sourceUrl;
    $this.ndg_1 = sourceTitle;
    $this.odg_1 = isLiked;
    $this.pdg_1 = state;
    $this.qdg_1 = title;
    $this.rdg_1 = body;
    $this.sdg_1 = noteCount;
    $this.tdg_1 = summary;
    $this.udg_1 = slug;
    $this.vdg_1 = rebloggedFromId;
    $this.wdg_1 = rebloggedFromUrl;
    $this.xdg_1 = rebloggedFromName;
    $this.ydg_1 = rebloggedFromTitle;
    $this.zdg_1 = rebloggedFromUuid;
    $this.adh_1 = rebloggedFromCanMessage;
    $this.bdh_1 = rebloggedFromFollowing;
    $this.cdh_1 = rebloggedRootId;
    $this.ddh_1 = rebloggedRootUrl;
    $this.edh_1 = rebloggedRootName;
    $this.fdh_1 = rebloggedRootTitle;
    $this.gdh_1 = rebloggedRootUuid;
    $this.hdh_1 = rebloggedRootCanMessage;
    $this.idh_1 = rebloggedRootFollowing;
    $this.jdh_1 = notes;
    $this.kdh_1 = blog;
    $this.ldh_1 = reblog;
    $this.mdh_1 = trail;
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
    tmp.rdh_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_1), null];
  }
  o1p() {
    return $serializer_getInstance_23();
  }
}
class $serializer_24 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPostcardPost', this, 41);
    tmp0_serialDesc.n1b('blog_name', false);
    tmp0_serialDesc.n1b('id_string', false);
    tmp0_serialDesc.n1b('genesis_post_id', false);
    tmp0_serialDesc.n1b('post_url', false);
    tmp0_serialDesc.n1b('parent_post_url', false);
    tmp0_serialDesc.n1b('type', false);
    tmp0_serialDesc.n1b('timestamp', false);
    tmp0_serialDesc.n1b('date', false);
    tmp0_serialDesc.n1b('format', false);
    tmp0_serialDesc.n1b('reblog_key', false);
    tmp0_serialDesc.n1b('tags', false);
    tmp0_serialDesc.n1b('bookmarklet', false);
    tmp0_serialDesc.n1b('mobile', false);
    tmp0_serialDesc.n1b('source_url', false);
    tmp0_serialDesc.n1b('source_title', false);
    tmp0_serialDesc.n1b('liked', false);
    tmp0_serialDesc.n1b('state', false);
    tmp0_serialDesc.n1b('title', false);
    tmp0_serialDesc.n1b('body', false);
    tmp0_serialDesc.n1b('note_count', false);
    tmp0_serialDesc.n1b('summary', false);
    tmp0_serialDesc.n1b('slug', false);
    tmp0_serialDesc.n1b('reblogged_from_id', false);
    tmp0_serialDesc.n1b('reblogged_from_url', false);
    tmp0_serialDesc.n1b('reblogged_from_name', false);
    tmp0_serialDesc.n1b('reblogged_from_title', false);
    tmp0_serialDesc.n1b('reblogged_from_uuid', false);
    tmp0_serialDesc.n1b('reblogged_from_can_message', false);
    tmp0_serialDesc.n1b('reblogged_from_following', false);
    tmp0_serialDesc.n1b('reblogged_root_id', false);
    tmp0_serialDesc.n1b('reblogged_root_url', false);
    tmp0_serialDesc.n1b('reblogged_root_name', false);
    tmp0_serialDesc.n1b('reblogged_root_title', false);
    tmp0_serialDesc.n1b('reblogged_root_uuid', false);
    tmp0_serialDesc.n1b('reblogged_root_can_message', false);
    tmp0_serialDesc.n1b('reblogged_root_following', false);
    tmp0_serialDesc.n1b('notes', false);
    tmp0_serialDesc.n1b('blog', false);
    tmp0_serialDesc.n1b('reblog', false);
    tmp0_serialDesc.n1b('trail', false);
    tmp0_serialDesc.n1b('url', true);
    this.sdh_1 = tmp0_serialDesc;
  }
  tdh(encoder, value) {
    var tmp0_desc = this.sdh_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().rdh_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.udh_1);
    tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.vdh_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.wdh_1);
    tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.xdh_1);
    tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.ydh_1);
    tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.zdh_1);
    tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.adi_1);
    tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.bdi_1);
    tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.cdi_1);
    tmp1_output.n15(tmp0_desc, 9, StringSerializer_getInstance(), value.ddi_1);
    tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.edi_1);
    tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.fdi_1);
    tmp1_output.n15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.gdi_1);
    tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.hdi_1);
    tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.idi_1);
    tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.jdi_1);
    tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.kdi_1);
    tmp1_output.n15(tmp0_desc, 17, StringSerializer_getInstance(), value.ldi_1);
    tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.mdi_1);
    tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.ndi_1);
    tmp1_output.n15(tmp0_desc, 20, StringSerializer_getInstance(), value.odi_1);
    tmp1_output.n15(tmp0_desc, 21, StringSerializer_getInstance(), value.pdi_1);
    tmp1_output.n15(tmp0_desc, 22, StringSerializer_getInstance(), value.qdi_1);
    tmp1_output.n15(tmp0_desc, 23, StringSerializer_getInstance(), value.rdi_1);
    tmp1_output.n15(tmp0_desc, 24, StringSerializer_getInstance(), value.sdi_1);
    tmp1_output.n15(tmp0_desc, 25, StringSerializer_getInstance(), value.tdi_1);
    tmp1_output.n15(tmp0_desc, 26, StringSerializer_getInstance(), value.udi_1);
    tmp1_output.n15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.vdi_1);
    tmp1_output.n15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.wdi_1);
    tmp1_output.n15(tmp0_desc, 29, StringSerializer_getInstance(), value.xdi_1);
    tmp1_output.n15(tmp0_desc, 30, StringSerializer_getInstance(), value.ydi_1);
    tmp1_output.n15(tmp0_desc, 31, StringSerializer_getInstance(), value.zdi_1);
    tmp1_output.n15(tmp0_desc, 32, StringSerializer_getInstance(), value.adj_1);
    tmp1_output.n15(tmp0_desc, 33, StringSerializer_getInstance(), value.bdj_1);
    tmp1_output.n15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.cdj_1);
    tmp1_output.n15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ddj_1);
    tmp1_output.n15(tmp0_desc, 36, tmp2_cached[36].d3(), value.edj_1);
    tmp1_output.n15(tmp0_desc, 37, $serializer_getInstance_14(), value.fdj_1);
    tmp1_output.n15(tmp0_desc, 38, $serializer_getInstance_17(), value.gdj_1);
    tmp1_output.n15(tmp0_desc, 39, tmp2_cached[39].d3(), value.hdj_1);
    if (tmp1_output.r15(tmp0_desc, 40) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 40, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.tdh(encoder, value instanceof LegacyPostcardPost ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.sdh_1;
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
    var tmp46_input = decoder.v13(tmp0_desc);
    var tmp47_cached = Companion_getInstance_26().rdh_1;
    if (tmp46_input.k14()) {
      tmp5_local0 = tmp46_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.j14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.j14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.j14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.j14(tmp0_desc, 10, tmp47_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.j14(tmp0_desc, 36, tmp47_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.j14(tmp0_desc, 39, tmp47_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp46_input.w13(tmp0_desc);
    return LegacyPostcardPost.idj(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  dz() {
    return this.sdh_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_26().rdh_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyPostcardPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.jdj(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static jdj(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_26();
    var $this = this.gd6();
    $this.udh_1 = blogName;
    $this.vdh_1 = idString;
    $this.wdh_1 = genesisPostId;
    $this.xdh_1 = postUrl;
    $this.ydh_1 = parentPostUrl;
    $this.zdh_1 = type;
    $this.adi_1 = timestamp;
    $this.bdi_1 = date;
    $this.cdi_1 = format;
    $this.ddi_1 = reblogKey;
    $this.edi_1 = tags;
    $this.fdi_1 = isBookmarklet;
    $this.gdi_1 = isMobile;
    $this.hdi_1 = sourceUrl;
    $this.idi_1 = sourceTitle;
    $this.jdi_1 = isLiked;
    $this.kdi_1 = state;
    $this.ldi_1 = title;
    $this.mdi_1 = body;
    $this.ndi_1 = noteCount;
    $this.odi_1 = summary;
    $this.pdi_1 = slug;
    $this.qdi_1 = rebloggedFromId;
    $this.rdi_1 = rebloggedFromUrl;
    $this.sdi_1 = rebloggedFromName;
    $this.tdi_1 = rebloggedFromTitle;
    $this.udi_1 = rebloggedFromUuid;
    $this.vdi_1 = rebloggedFromCanMessage;
    $this.wdi_1 = rebloggedFromFollowing;
    $this.xdi_1 = rebloggedRootId;
    $this.ydi_1 = rebloggedRootUrl;
    $this.zdi_1 = rebloggedRootName;
    $this.adj_1 = rebloggedRootTitle;
    $this.bdj_1 = rebloggedRootUuid;
    $this.cdj_1 = rebloggedRootCanMessage;
    $this.ddj_1 = rebloggedRootFollowing;
    $this.edj_1 = notes;
    $this.fdj_1 = blog;
    $this.gdj_1 = reblog;
    $this.hdj_1 = trail;
    $this.url = null;
    return $this;
  }
  hcx(_set____db54di) {
    this.udh_1 = _set____db54di;
  }
  icx() {
    return this.udh_1;
  }
  qd6(_set____db54di) {
    this.vdh_1 = _set____db54di;
  }
  rd6() {
    return this.vdh_1;
  }
  sd6(_set____db54di) {
    this.wdh_1 = _set____db54di;
  }
  td6() {
    return this.wdh_1;
  }
  ud6(_set____db54di) {
    this.xdh_1 = _set____db54di;
  }
  vd6() {
    return this.xdh_1;
  }
  wd6(_set____db54di) {
    this.ydh_1 = _set____db54di;
  }
  xd6() {
    return this.ydh_1;
  }
  u38(_set____db54di) {
    this.zdh_1 = _set____db54di;
  }
  h38() {
    return this.zdh_1;
  }
  yd6(_set____db54di) {
    this.adi_1 = _set____db54di;
  }
  qd3() {
    return this.adi_1;
  }
  ocy(_set____db54di) {
    this.bdi_1 = _set____db54di;
  }
  pcy() {
    return this.bdi_1;
  }
  qcy(_set____db54di) {
    this.cdi_1 = _set____db54di;
  }
  rcy() {
    return this.cdi_1;
  }
  hd0(_set____db54di) {
    this.ddi_1 = _set____db54di;
  }
  id0() {
    return this.ddi_1;
  }
  cam(_set____db54di) {
    this.edi_1 = _set____db54di;
  }
  xag() {
    return this.edi_1;
  }
  zd6(_set____db54di) {
    this.fdi_1 = _set____db54di;
  }
  ad7() {
    return this.fdi_1;
  }
  bd7(_set____db54di) {
    this.gdi_1 = _set____db54di;
  }
  cd7() {
    return this.gdi_1;
  }
  i38(_set____db54di) {
    this.hdi_1 = _set____db54di;
  }
  j38() {
    return this.hdi_1;
  }
  dd7(_set____db54di) {
    this.idi_1 = _set____db54di;
  }
  ed7() {
    return this.idi_1;
  }
  fd7(_set____db54di) {
    this.jdi_1 = _set____db54di;
  }
  tao() {
    return this.jdi_1;
  }
  sa8(_set____db54di) {
    this.kdi_1 = _set____db54di;
  }
  s7x() {
    return this.kdi_1;
  }
  sag(_set____db54di) {
    this.ldi_1 = _set____db54di;
  }
  x3i() {
    return this.ldi_1;
  }
  kan(_set____db54di) {
    this.mdi_1 = _set____db54di;
  }
  lan() {
    return this.mdi_1;
  }
  gd7(_set____db54di) {
    this.ndi_1 = _set____db54di;
  }
  hd7() {
    return this.ndi_1;
  }
  fao(_set____db54di) {
    this.odi_1 = _set____db54di;
  }
  gao() {
    return this.odi_1;
  }
  scy(_set____db54di) {
    this.pdi_1 = _set____db54di;
  }
  tcy() {
    return this.pdi_1;
  }
  id7(_set____db54di) {
    this.qdi_1 = _set____db54di;
  }
  jd7() {
    return this.qdi_1;
  }
  kd7(_set____db54di) {
    this.rdi_1 = _set____db54di;
  }
  ld7() {
    return this.rdi_1;
  }
  md7(_set____db54di) {
    this.sdi_1 = _set____db54di;
  }
  nd7() {
    return this.sdi_1;
  }
  od7(_set____db54di) {
    this.tdi_1 = _set____db54di;
  }
  pd7() {
    return this.tdi_1;
  }
  qd7(_set____db54di) {
    this.udi_1 = _set____db54di;
  }
  rd7() {
    return this.udi_1;
  }
  sd7(_set____db54di) {
    this.vdi_1 = _set____db54di;
  }
  td7() {
    return this.vdi_1;
  }
  ud7(_set____db54di) {
    this.wdi_1 = _set____db54di;
  }
  vd7() {
    return this.wdi_1;
  }
  wd7(_set____db54di) {
    this.xdi_1 = _set____db54di;
  }
  xd7() {
    return this.xdi_1;
  }
  yd7(_set____db54di) {
    this.ydi_1 = _set____db54di;
  }
  zd7() {
    return this.ydi_1;
  }
  ad8(_set____db54di) {
    this.zdi_1 = _set____db54di;
  }
  bd8() {
    return this.zdi_1;
  }
  cd8(_set____db54di) {
    this.adj_1 = _set____db54di;
  }
  dd8() {
    return this.adj_1;
  }
  ed8(_set____db54di) {
    this.bdj_1 = _set____db54di;
  }
  fd8() {
    return this.bdj_1;
  }
  gd8(_set____db54di) {
    this.cdj_1 = _set____db54di;
  }
  hd8() {
    return this.cdj_1;
  }
  id8(_set____db54di) {
    this.ddj_1 = _set____db54di;
  }
  jd8() {
    return this.ddj_1;
  }
  kd8(_set____db54di) {
    this.edj_1 = _set____db54di;
  }
  ld8() {
    return this.edj_1;
  }
  yd1(_set____db54di) {
    this.fdj_1 = _set____db54di;
  }
  zd1() {
    return this.fdj_1;
  }
  md8(_set____db54di) {
    this.gdj_1 = _set____db54di;
  }
  mbr() {
    return this.gdj_1;
  }
  nd8(_set____db54di) {
    this.hdj_1 = _set____db54di;
  }
  od8() {
    return this.hdj_1;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  static idj(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, url, serializationConstructorMarker) {
    Companion_getInstance_26();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_23().sdh_1);
    }
    var $this = this.gd6();
    $this.udh_1 = blogName;
    $this.vdh_1 = idString;
    $this.wdh_1 = genesisPostId;
    $this.xdh_1 = postUrl;
    $this.ydh_1 = parentPostUrl;
    $this.zdh_1 = type;
    $this.adi_1 = timestamp;
    $this.bdi_1 = date;
    $this.cdi_1 = format;
    $this.ddi_1 = reblogKey;
    $this.edi_1 = tags;
    $this.fdi_1 = isBookmarklet;
    $this.gdi_1 = isMobile;
    $this.hdi_1 = sourceUrl;
    $this.idi_1 = sourceTitle;
    $this.jdi_1 = isLiked;
    $this.kdi_1 = state;
    $this.ldi_1 = title;
    $this.mdi_1 = body;
    $this.ndi_1 = noteCount;
    $this.odi_1 = summary;
    $this.pdi_1 = slug;
    $this.qdi_1 = rebloggedFromId;
    $this.rdi_1 = rebloggedFromUrl;
    $this.sdi_1 = rebloggedFromName;
    $this.tdi_1 = rebloggedFromTitle;
    $this.udi_1 = rebloggedFromUuid;
    $this.vdi_1 = rebloggedFromCanMessage;
    $this.wdi_1 = rebloggedFromFollowing;
    $this.xdi_1 = rebloggedRootId;
    $this.ydi_1 = rebloggedRootUrl;
    $this.zdi_1 = rebloggedRootName;
    $this.adj_1 = rebloggedRootTitle;
    $this.bdj_1 = rebloggedRootUuid;
    $this.cdj_1 = rebloggedRootCanMessage;
    $this.ddj_1 = rebloggedRootFollowing;
    $this.edj_1 = notes;
    $this.fdj_1 = blog;
    $this.gdj_1 = reblog;
    $this.hdj_1 = trail;
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
    tmp.kdj_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1), null, null];
  }
  o1p() {
    return $serializer_getInstance_24();
  }
}
class $serializer_25 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyQuotePost', this, 42);
    tmp0_serialDesc.n1b('blog_name', false);
    tmp0_serialDesc.n1b('id_string', false);
    tmp0_serialDesc.n1b('genesis_post_id', false);
    tmp0_serialDesc.n1b('post_url', false);
    tmp0_serialDesc.n1b('parent_post_url', false);
    tmp0_serialDesc.n1b('type', false);
    tmp0_serialDesc.n1b('timestamp', false);
    tmp0_serialDesc.n1b('date', false);
    tmp0_serialDesc.n1b('format', false);
    tmp0_serialDesc.n1b('reblog_key', false);
    tmp0_serialDesc.n1b('tags', false);
    tmp0_serialDesc.n1b('bookmarklet', false);
    tmp0_serialDesc.n1b('mobile', false);
    tmp0_serialDesc.n1b('source_url', false);
    tmp0_serialDesc.n1b('source_title', false);
    tmp0_serialDesc.n1b('liked', false);
    tmp0_serialDesc.n1b('state', false);
    tmp0_serialDesc.n1b('title', false);
    tmp0_serialDesc.n1b('body', false);
    tmp0_serialDesc.n1b('note_count', false);
    tmp0_serialDesc.n1b('summary', false);
    tmp0_serialDesc.n1b('slug', false);
    tmp0_serialDesc.n1b('reblogged_from_id', false);
    tmp0_serialDesc.n1b('reblogged_from_url', false);
    tmp0_serialDesc.n1b('reblogged_from_name', false);
    tmp0_serialDesc.n1b('reblogged_from_title', false);
    tmp0_serialDesc.n1b('reblogged_from_uuid', false);
    tmp0_serialDesc.n1b('reblogged_from_can_message', false);
    tmp0_serialDesc.n1b('reblogged_from_following', false);
    tmp0_serialDesc.n1b('reblogged_root_id', false);
    tmp0_serialDesc.n1b('reblogged_root_url', false);
    tmp0_serialDesc.n1b('reblogged_root_name', false);
    tmp0_serialDesc.n1b('reblogged_root_title', false);
    tmp0_serialDesc.n1b('reblogged_root_uuid', false);
    tmp0_serialDesc.n1b('reblogged_root_can_message', false);
    tmp0_serialDesc.n1b('reblogged_root_following', false);
    tmp0_serialDesc.n1b('notes', false);
    tmp0_serialDesc.n1b('blog', false);
    tmp0_serialDesc.n1b('reblog', false);
    tmp0_serialDesc.n1b('trail', false);
    tmp0_serialDesc.n1b('text', true);
    tmp0_serialDesc.n1b('source', true);
    this.ldj_1 = tmp0_serialDesc;
  }
  mdj(encoder, value) {
    var tmp0_desc = this.ldj_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().kdj_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.ndj_1);
    tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.odj_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.pdj_1);
    tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.qdj_1);
    tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.rdj_1);
    tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.sdj_1);
    tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.tdj_1);
    tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.udj_1);
    tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.vdj_1);
    tmp1_output.n15(tmp0_desc, 9, StringSerializer_getInstance(), value.wdj_1);
    tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.xdj_1);
    tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.ydj_1);
    tmp1_output.n15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.zdj_1);
    tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.adk_1);
    tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.bdk_1);
    tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.cdk_1);
    tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.ddk_1);
    tmp1_output.n15(tmp0_desc, 17, StringSerializer_getInstance(), value.edk_1);
    tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.fdk_1);
    tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.gdk_1);
    tmp1_output.n15(tmp0_desc, 20, StringSerializer_getInstance(), value.hdk_1);
    tmp1_output.n15(tmp0_desc, 21, StringSerializer_getInstance(), value.idk_1);
    tmp1_output.n15(tmp0_desc, 22, StringSerializer_getInstance(), value.jdk_1);
    tmp1_output.n15(tmp0_desc, 23, StringSerializer_getInstance(), value.kdk_1);
    tmp1_output.n15(tmp0_desc, 24, StringSerializer_getInstance(), value.ldk_1);
    tmp1_output.n15(tmp0_desc, 25, StringSerializer_getInstance(), value.mdk_1);
    tmp1_output.n15(tmp0_desc, 26, StringSerializer_getInstance(), value.ndk_1);
    tmp1_output.n15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.odk_1);
    tmp1_output.n15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.pdk_1);
    tmp1_output.n15(tmp0_desc, 29, StringSerializer_getInstance(), value.qdk_1);
    tmp1_output.n15(tmp0_desc, 30, StringSerializer_getInstance(), value.rdk_1);
    tmp1_output.n15(tmp0_desc, 31, StringSerializer_getInstance(), value.sdk_1);
    tmp1_output.n15(tmp0_desc, 32, StringSerializer_getInstance(), value.tdk_1);
    tmp1_output.n15(tmp0_desc, 33, StringSerializer_getInstance(), value.udk_1);
    tmp1_output.n15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.vdk_1);
    tmp1_output.n15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.wdk_1);
    tmp1_output.n15(tmp0_desc, 36, tmp2_cached[36].d3(), value.xdk_1);
    tmp1_output.n15(tmp0_desc, 37, $serializer_getInstance_14(), value.ydk_1);
    tmp1_output.n15(tmp0_desc, 38, $serializer_getInstance_17(), value.zdk_1);
    tmp1_output.n15(tmp0_desc, 39, tmp2_cached[39].d3(), value.adl_1);
    if (tmp1_output.r15(tmp0_desc, 40) ? true : !(value.text == null)) {
      tmp1_output.n15(tmp0_desc, 40, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.r15(tmp0_desc, 41) ? true : !(value.source == null)) {
      tmp1_output.n15(tmp0_desc, 41, StringSerializer_getInstance(), value.source);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.mdj(encoder, value instanceof LegacyQuotePost ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ldj_1;
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
    var tmp47_input = decoder.v13(tmp0_desc);
    var tmp48_cached = Companion_getInstance_27().kdj_1;
    if (tmp47_input.k14()) {
      tmp5_local0 = tmp47_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.j14(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.j14(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.j14(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.j14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.j14(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.j14(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.j14(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.j14(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp47_input.w13(tmp0_desc);
    return LegacyQuotePost.bdl(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  dz() {
    return this.ldj_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_27().kdj_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyQuotePost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.cdl(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static cdl(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_27();
    var $this = this.gd6();
    $this.ndj_1 = blogName;
    $this.odj_1 = idString;
    $this.pdj_1 = genesisPostId;
    $this.qdj_1 = postUrl;
    $this.rdj_1 = parentPostUrl;
    $this.sdj_1 = type;
    $this.tdj_1 = timestamp;
    $this.udj_1 = date;
    $this.vdj_1 = format;
    $this.wdj_1 = reblogKey;
    $this.xdj_1 = tags;
    $this.ydj_1 = isBookmarklet;
    $this.zdj_1 = isMobile;
    $this.adk_1 = sourceUrl;
    $this.bdk_1 = sourceTitle;
    $this.cdk_1 = isLiked;
    $this.ddk_1 = state;
    $this.edk_1 = title;
    $this.fdk_1 = body;
    $this.gdk_1 = noteCount;
    $this.hdk_1 = summary;
    $this.idk_1 = slug;
    $this.jdk_1 = rebloggedFromId;
    $this.kdk_1 = rebloggedFromUrl;
    $this.ldk_1 = rebloggedFromName;
    $this.mdk_1 = rebloggedFromTitle;
    $this.ndk_1 = rebloggedFromUuid;
    $this.odk_1 = rebloggedFromCanMessage;
    $this.pdk_1 = rebloggedFromFollowing;
    $this.qdk_1 = rebloggedRootId;
    $this.rdk_1 = rebloggedRootUrl;
    $this.sdk_1 = rebloggedRootName;
    $this.tdk_1 = rebloggedRootTitle;
    $this.udk_1 = rebloggedRootUuid;
    $this.vdk_1 = rebloggedRootCanMessage;
    $this.wdk_1 = rebloggedRootFollowing;
    $this.xdk_1 = notes;
    $this.ydk_1 = blog;
    $this.zdk_1 = reblog;
    $this.adl_1 = trail;
    $this.text = null;
    $this.source = null;
    return $this;
  }
  hcx(_set____db54di) {
    this.ndj_1 = _set____db54di;
  }
  icx() {
    return this.ndj_1;
  }
  qd6(_set____db54di) {
    this.odj_1 = _set____db54di;
  }
  rd6() {
    return this.odj_1;
  }
  sd6(_set____db54di) {
    this.pdj_1 = _set____db54di;
  }
  td6() {
    return this.pdj_1;
  }
  ud6(_set____db54di) {
    this.qdj_1 = _set____db54di;
  }
  vd6() {
    return this.qdj_1;
  }
  wd6(_set____db54di) {
    this.rdj_1 = _set____db54di;
  }
  xd6() {
    return this.rdj_1;
  }
  u38(_set____db54di) {
    this.sdj_1 = _set____db54di;
  }
  h38() {
    return this.sdj_1;
  }
  yd6(_set____db54di) {
    this.tdj_1 = _set____db54di;
  }
  qd3() {
    return this.tdj_1;
  }
  ocy(_set____db54di) {
    this.udj_1 = _set____db54di;
  }
  pcy() {
    return this.udj_1;
  }
  qcy(_set____db54di) {
    this.vdj_1 = _set____db54di;
  }
  rcy() {
    return this.vdj_1;
  }
  hd0(_set____db54di) {
    this.wdj_1 = _set____db54di;
  }
  id0() {
    return this.wdj_1;
  }
  cam(_set____db54di) {
    this.xdj_1 = _set____db54di;
  }
  xag() {
    return this.xdj_1;
  }
  zd6(_set____db54di) {
    this.ydj_1 = _set____db54di;
  }
  ad7() {
    return this.ydj_1;
  }
  bd7(_set____db54di) {
    this.zdj_1 = _set____db54di;
  }
  cd7() {
    return this.zdj_1;
  }
  i38(_set____db54di) {
    this.adk_1 = _set____db54di;
  }
  j38() {
    return this.adk_1;
  }
  dd7(_set____db54di) {
    this.bdk_1 = _set____db54di;
  }
  ed7() {
    return this.bdk_1;
  }
  fd7(_set____db54di) {
    this.cdk_1 = _set____db54di;
  }
  tao() {
    return this.cdk_1;
  }
  sa8(_set____db54di) {
    this.ddk_1 = _set____db54di;
  }
  s7x() {
    return this.ddk_1;
  }
  sag(_set____db54di) {
    this.edk_1 = _set____db54di;
  }
  x3i() {
    return this.edk_1;
  }
  kan(_set____db54di) {
    this.fdk_1 = _set____db54di;
  }
  lan() {
    return this.fdk_1;
  }
  gd7(_set____db54di) {
    this.gdk_1 = _set____db54di;
  }
  hd7() {
    return this.gdk_1;
  }
  fao(_set____db54di) {
    this.hdk_1 = _set____db54di;
  }
  gao() {
    return this.hdk_1;
  }
  scy(_set____db54di) {
    this.idk_1 = _set____db54di;
  }
  tcy() {
    return this.idk_1;
  }
  id7(_set____db54di) {
    this.jdk_1 = _set____db54di;
  }
  jd7() {
    return this.jdk_1;
  }
  kd7(_set____db54di) {
    this.kdk_1 = _set____db54di;
  }
  ld7() {
    return this.kdk_1;
  }
  md7(_set____db54di) {
    this.ldk_1 = _set____db54di;
  }
  nd7() {
    return this.ldk_1;
  }
  od7(_set____db54di) {
    this.mdk_1 = _set____db54di;
  }
  pd7() {
    return this.mdk_1;
  }
  qd7(_set____db54di) {
    this.ndk_1 = _set____db54di;
  }
  rd7() {
    return this.ndk_1;
  }
  sd7(_set____db54di) {
    this.odk_1 = _set____db54di;
  }
  td7() {
    return this.odk_1;
  }
  ud7(_set____db54di) {
    this.pdk_1 = _set____db54di;
  }
  vd7() {
    return this.pdk_1;
  }
  wd7(_set____db54di) {
    this.qdk_1 = _set____db54di;
  }
  xd7() {
    return this.qdk_1;
  }
  yd7(_set____db54di) {
    this.rdk_1 = _set____db54di;
  }
  zd7() {
    return this.rdk_1;
  }
  ad8(_set____db54di) {
    this.sdk_1 = _set____db54di;
  }
  bd8() {
    return this.sdk_1;
  }
  cd8(_set____db54di) {
    this.tdk_1 = _set____db54di;
  }
  dd8() {
    return this.tdk_1;
  }
  ed8(_set____db54di) {
    this.udk_1 = _set____db54di;
  }
  fd8() {
    return this.udk_1;
  }
  gd8(_set____db54di) {
    this.vdk_1 = _set____db54di;
  }
  hd8() {
    return this.vdk_1;
  }
  id8(_set____db54di) {
    this.wdk_1 = _set____db54di;
  }
  jd8() {
    return this.wdk_1;
  }
  kd8(_set____db54di) {
    this.xdk_1 = _set____db54di;
  }
  ld8() {
    return this.xdk_1;
  }
  yd1(_set____db54di) {
    this.ydk_1 = _set____db54di;
  }
  zd1() {
    return this.ydk_1;
  }
  md8(_set____db54di) {
    this.zdk_1 = _set____db54di;
  }
  mbr() {
    return this.zdk_1;
  }
  nd8(_set____db54di) {
    this.adl_1 = _set____db54di;
  }
  od8() {
    return this.adl_1;
  }
  q3h(_set____db54di) {
    this.text = _set____db54di;
  }
  l34() {
    return this.text;
  }
  bcz(_set____db54di) {
    this.source = _set____db54di;
  }
  f20() {
    return this.source;
  }
  static bdl(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, text, source, serializationConstructorMarker) {
    Companion_getInstance_27();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_24().ldj_1);
    }
    var $this = this.gd6();
    $this.ndj_1 = blogName;
    $this.odj_1 = idString;
    $this.pdj_1 = genesisPostId;
    $this.qdj_1 = postUrl;
    $this.rdj_1 = parentPostUrl;
    $this.sdj_1 = type;
    $this.tdj_1 = timestamp;
    $this.udj_1 = date;
    $this.vdj_1 = format;
    $this.wdj_1 = reblogKey;
    $this.xdj_1 = tags;
    $this.ydj_1 = isBookmarklet;
    $this.zdj_1 = isMobile;
    $this.adk_1 = sourceUrl;
    $this.bdk_1 = sourceTitle;
    $this.cdk_1 = isLiked;
    $this.ddk_1 = state;
    $this.edk_1 = title;
    $this.fdk_1 = body;
    $this.gdk_1 = noteCount;
    $this.hdk_1 = summary;
    $this.idk_1 = slug;
    $this.jdk_1 = rebloggedFromId;
    $this.kdk_1 = rebloggedFromUrl;
    $this.ldk_1 = rebloggedFromName;
    $this.mdk_1 = rebloggedFromTitle;
    $this.ndk_1 = rebloggedFromUuid;
    $this.odk_1 = rebloggedFromCanMessage;
    $this.pdk_1 = rebloggedFromFollowing;
    $this.qdk_1 = rebloggedRootId;
    $this.rdk_1 = rebloggedRootUrl;
    $this.sdk_1 = rebloggedRootName;
    $this.tdk_1 = rebloggedRootTitle;
    $this.udk_1 = rebloggedRootUuid;
    $this.vdk_1 = rebloggedRootCanMessage;
    $this.wdk_1 = rebloggedRootFollowing;
    $this.xdk_1 = notes;
    $this.ydk_1 = blog;
    $this.zdk_1 = reblog;
    $this.adl_1 = trail;
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
    tmp.ddl_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1)];
  }
  o1p() {
    return $serializer_getInstance_25();
  }
}
class $serializer_26 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyTextPost', this, 40);
    tmp0_serialDesc.n1b('blog_name', false);
    tmp0_serialDesc.n1b('id_string', false);
    tmp0_serialDesc.n1b('genesis_post_id', false);
    tmp0_serialDesc.n1b('post_url', false);
    tmp0_serialDesc.n1b('parent_post_url', false);
    tmp0_serialDesc.n1b('type', false);
    tmp0_serialDesc.n1b('timestamp', false);
    tmp0_serialDesc.n1b('date', false);
    tmp0_serialDesc.n1b('format', false);
    tmp0_serialDesc.n1b('reblog_key', false);
    tmp0_serialDesc.n1b('tags', false);
    tmp0_serialDesc.n1b('bookmarklet', false);
    tmp0_serialDesc.n1b('mobile', false);
    tmp0_serialDesc.n1b('source_url', false);
    tmp0_serialDesc.n1b('source_title', false);
    tmp0_serialDesc.n1b('liked', false);
    tmp0_serialDesc.n1b('state', false);
    tmp0_serialDesc.n1b('title', false);
    tmp0_serialDesc.n1b('body', false);
    tmp0_serialDesc.n1b('note_count', false);
    tmp0_serialDesc.n1b('summary', false);
    tmp0_serialDesc.n1b('slug', false);
    tmp0_serialDesc.n1b('reblogged_from_id', false);
    tmp0_serialDesc.n1b('reblogged_from_url', false);
    tmp0_serialDesc.n1b('reblogged_from_name', false);
    tmp0_serialDesc.n1b('reblogged_from_title', false);
    tmp0_serialDesc.n1b('reblogged_from_uuid', false);
    tmp0_serialDesc.n1b('reblogged_from_can_message', false);
    tmp0_serialDesc.n1b('reblogged_from_following', false);
    tmp0_serialDesc.n1b('reblogged_root_id', false);
    tmp0_serialDesc.n1b('reblogged_root_url', false);
    tmp0_serialDesc.n1b('reblogged_root_name', false);
    tmp0_serialDesc.n1b('reblogged_root_title', false);
    tmp0_serialDesc.n1b('reblogged_root_uuid', false);
    tmp0_serialDesc.n1b('reblogged_root_can_message', false);
    tmp0_serialDesc.n1b('reblogged_root_following', false);
    tmp0_serialDesc.n1b('notes', false);
    tmp0_serialDesc.n1b('blog', false);
    tmp0_serialDesc.n1b('reblog', false);
    tmp0_serialDesc.n1b('trail', false);
    this.edl_1 = tmp0_serialDesc;
  }
  fdl(encoder, value) {
    var tmp0_desc = this.edl_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().ddl_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.gdl_1);
    tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.hdl_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.idl_1);
    tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.jdl_1);
    tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.kdl_1);
    tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.ldl_1);
    tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.mdl_1);
    tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.ndl_1);
    tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.odl_1);
    tmp1_output.n15(tmp0_desc, 9, StringSerializer_getInstance(), value.pdl_1);
    tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.qdl_1);
    tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.rdl_1);
    tmp1_output.n15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.sdl_1);
    tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.tdl_1);
    tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.udl_1);
    tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.vdl_1);
    tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.wdl_1);
    tmp1_output.n15(tmp0_desc, 17, StringSerializer_getInstance(), value.xdl_1);
    tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.ydl_1);
    tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.zdl_1);
    tmp1_output.n15(tmp0_desc, 20, StringSerializer_getInstance(), value.adm_1);
    tmp1_output.n15(tmp0_desc, 21, StringSerializer_getInstance(), value.bdm_1);
    tmp1_output.n15(tmp0_desc, 22, StringSerializer_getInstance(), value.cdm_1);
    tmp1_output.n15(tmp0_desc, 23, StringSerializer_getInstance(), value.ddm_1);
    tmp1_output.n15(tmp0_desc, 24, StringSerializer_getInstance(), value.edm_1);
    tmp1_output.n15(tmp0_desc, 25, StringSerializer_getInstance(), value.fdm_1);
    tmp1_output.n15(tmp0_desc, 26, StringSerializer_getInstance(), value.gdm_1);
    tmp1_output.n15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.hdm_1);
    tmp1_output.n15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.idm_1);
    tmp1_output.n15(tmp0_desc, 29, StringSerializer_getInstance(), value.jdm_1);
    tmp1_output.n15(tmp0_desc, 30, StringSerializer_getInstance(), value.kdm_1);
    tmp1_output.n15(tmp0_desc, 31, StringSerializer_getInstance(), value.ldm_1);
    tmp1_output.n15(tmp0_desc, 32, StringSerializer_getInstance(), value.mdm_1);
    tmp1_output.n15(tmp0_desc, 33, StringSerializer_getInstance(), value.ndm_1);
    tmp1_output.n15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.odm_1);
    tmp1_output.n15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.pdm_1);
    tmp1_output.n15(tmp0_desc, 36, tmp2_cached[36].d3(), value.qdm_1);
    tmp1_output.n15(tmp0_desc, 37, $serializer_getInstance_14(), value.rdm_1);
    tmp1_output.n15(tmp0_desc, 38, $serializer_getInstance_17(), value.sdm_1);
    tmp1_output.n15(tmp0_desc, 39, tmp2_cached[39].d3(), value.tdm_1);
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.fdl(encoder, value instanceof LegacyTextPost ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.edl_1;
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
    var tmp45_input = decoder.v13(tmp0_desc);
    var tmp46_cached = Companion_getInstance_28().ddl_1;
    if (tmp45_input.k14()) {
      tmp5_local0 = tmp45_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp45_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp45_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp45_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp45_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp45_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp45_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp45_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp45_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp45_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp45_input.j14(tmp0_desc, 10, tmp46_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp45_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp45_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp45_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp45_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp45_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp45_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp45_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp45_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp45_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp45_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp45_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp45_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp45_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp45_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp45_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp45_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp45_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp45_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp45_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp45_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp45_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp45_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp45_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp45_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp45_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp45_input.j14(tmp0_desc, 36, tmp46_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp45_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp45_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp45_input.j14(tmp0_desc, 39, tmp46_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp45_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp45_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp45_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp45_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp45_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp45_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp45_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp45_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp45_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp45_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp45_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp45_input.j14(tmp0_desc, 10, tmp46_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp45_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp45_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp45_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp45_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp45_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp45_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp45_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp45_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp45_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp45_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp45_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp45_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp45_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp45_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp45_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp45_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp45_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp45_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp45_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp45_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp45_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp45_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp45_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp45_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp45_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp45_input.j14(tmp0_desc, 36, tmp46_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp45_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp45_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp45_input.j14(tmp0_desc, 39, tmp46_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp45_input.w13(tmp0_desc);
    return LegacyTextPost.udm(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, null);
  }
  dz() {
    return this.edl_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_28().ddl_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3())];
  }
}
class LegacyTextPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.vdm(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static vdm(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_28();
    var $this = this.gd6();
    $this.gdl_1 = blogName;
    $this.hdl_1 = idString;
    $this.idl_1 = genesisPostId;
    $this.jdl_1 = postUrl;
    $this.kdl_1 = parentPostUrl;
    $this.ldl_1 = type;
    $this.mdl_1 = timestamp;
    $this.ndl_1 = date;
    $this.odl_1 = format;
    $this.pdl_1 = reblogKey;
    $this.qdl_1 = tags;
    $this.rdl_1 = isBookmarklet;
    $this.sdl_1 = isMobile;
    $this.tdl_1 = sourceUrl;
    $this.udl_1 = sourceTitle;
    $this.vdl_1 = isLiked;
    $this.wdl_1 = state;
    $this.xdl_1 = title;
    $this.ydl_1 = body;
    $this.zdl_1 = noteCount;
    $this.adm_1 = summary;
    $this.bdm_1 = slug;
    $this.cdm_1 = rebloggedFromId;
    $this.ddm_1 = rebloggedFromUrl;
    $this.edm_1 = rebloggedFromName;
    $this.fdm_1 = rebloggedFromTitle;
    $this.gdm_1 = rebloggedFromUuid;
    $this.hdm_1 = rebloggedFromCanMessage;
    $this.idm_1 = rebloggedFromFollowing;
    $this.jdm_1 = rebloggedRootId;
    $this.kdm_1 = rebloggedRootUrl;
    $this.ldm_1 = rebloggedRootName;
    $this.mdm_1 = rebloggedRootTitle;
    $this.ndm_1 = rebloggedRootUuid;
    $this.odm_1 = rebloggedRootCanMessage;
    $this.pdm_1 = rebloggedRootFollowing;
    $this.qdm_1 = notes;
    $this.rdm_1 = blog;
    $this.sdm_1 = reblog;
    $this.tdm_1 = trail;
    return $this;
  }
  hcx(_set____db54di) {
    this.gdl_1 = _set____db54di;
  }
  icx() {
    return this.gdl_1;
  }
  qd6(_set____db54di) {
    this.hdl_1 = _set____db54di;
  }
  rd6() {
    return this.hdl_1;
  }
  sd6(_set____db54di) {
    this.idl_1 = _set____db54di;
  }
  td6() {
    return this.idl_1;
  }
  ud6(_set____db54di) {
    this.jdl_1 = _set____db54di;
  }
  vd6() {
    return this.jdl_1;
  }
  wd6(_set____db54di) {
    this.kdl_1 = _set____db54di;
  }
  xd6() {
    return this.kdl_1;
  }
  u38(_set____db54di) {
    this.ldl_1 = _set____db54di;
  }
  h38() {
    return this.ldl_1;
  }
  yd6(_set____db54di) {
    this.mdl_1 = _set____db54di;
  }
  qd3() {
    return this.mdl_1;
  }
  ocy(_set____db54di) {
    this.ndl_1 = _set____db54di;
  }
  pcy() {
    return this.ndl_1;
  }
  qcy(_set____db54di) {
    this.odl_1 = _set____db54di;
  }
  rcy() {
    return this.odl_1;
  }
  hd0(_set____db54di) {
    this.pdl_1 = _set____db54di;
  }
  id0() {
    return this.pdl_1;
  }
  cam(_set____db54di) {
    this.qdl_1 = _set____db54di;
  }
  xag() {
    return this.qdl_1;
  }
  zd6(_set____db54di) {
    this.rdl_1 = _set____db54di;
  }
  ad7() {
    return this.rdl_1;
  }
  bd7(_set____db54di) {
    this.sdl_1 = _set____db54di;
  }
  cd7() {
    return this.sdl_1;
  }
  i38(_set____db54di) {
    this.tdl_1 = _set____db54di;
  }
  j38() {
    return this.tdl_1;
  }
  dd7(_set____db54di) {
    this.udl_1 = _set____db54di;
  }
  ed7() {
    return this.udl_1;
  }
  fd7(_set____db54di) {
    this.vdl_1 = _set____db54di;
  }
  tao() {
    return this.vdl_1;
  }
  sa8(_set____db54di) {
    this.wdl_1 = _set____db54di;
  }
  s7x() {
    return this.wdl_1;
  }
  sag(_set____db54di) {
    this.xdl_1 = _set____db54di;
  }
  x3i() {
    return this.xdl_1;
  }
  kan(_set____db54di) {
    this.ydl_1 = _set____db54di;
  }
  lan() {
    return this.ydl_1;
  }
  gd7(_set____db54di) {
    this.zdl_1 = _set____db54di;
  }
  hd7() {
    return this.zdl_1;
  }
  fao(_set____db54di) {
    this.adm_1 = _set____db54di;
  }
  gao() {
    return this.adm_1;
  }
  scy(_set____db54di) {
    this.bdm_1 = _set____db54di;
  }
  tcy() {
    return this.bdm_1;
  }
  id7(_set____db54di) {
    this.cdm_1 = _set____db54di;
  }
  jd7() {
    return this.cdm_1;
  }
  kd7(_set____db54di) {
    this.ddm_1 = _set____db54di;
  }
  ld7() {
    return this.ddm_1;
  }
  md7(_set____db54di) {
    this.edm_1 = _set____db54di;
  }
  nd7() {
    return this.edm_1;
  }
  od7(_set____db54di) {
    this.fdm_1 = _set____db54di;
  }
  pd7() {
    return this.fdm_1;
  }
  qd7(_set____db54di) {
    this.gdm_1 = _set____db54di;
  }
  rd7() {
    return this.gdm_1;
  }
  sd7(_set____db54di) {
    this.hdm_1 = _set____db54di;
  }
  td7() {
    return this.hdm_1;
  }
  ud7(_set____db54di) {
    this.idm_1 = _set____db54di;
  }
  vd7() {
    return this.idm_1;
  }
  wd7(_set____db54di) {
    this.jdm_1 = _set____db54di;
  }
  xd7() {
    return this.jdm_1;
  }
  yd7(_set____db54di) {
    this.kdm_1 = _set____db54di;
  }
  zd7() {
    return this.kdm_1;
  }
  ad8(_set____db54di) {
    this.ldm_1 = _set____db54di;
  }
  bd8() {
    return this.ldm_1;
  }
  cd8(_set____db54di) {
    this.mdm_1 = _set____db54di;
  }
  dd8() {
    return this.mdm_1;
  }
  ed8(_set____db54di) {
    this.ndm_1 = _set____db54di;
  }
  fd8() {
    return this.ndm_1;
  }
  gd8(_set____db54di) {
    this.odm_1 = _set____db54di;
  }
  hd8() {
    return this.odm_1;
  }
  id8(_set____db54di) {
    this.pdm_1 = _set____db54di;
  }
  jd8() {
    return this.pdm_1;
  }
  kd8(_set____db54di) {
    this.qdm_1 = _set____db54di;
  }
  ld8() {
    return this.qdm_1;
  }
  yd1(_set____db54di) {
    this.rdm_1 = _set____db54di;
  }
  zd1() {
    return this.rdm_1;
  }
  md8(_set____db54di) {
    this.sdm_1 = _set____db54di;
  }
  mbr() {
    return this.sdm_1;
  }
  nd8(_set____db54di) {
    this.tdm_1 = _set____db54di;
  }
  od8() {
    return this.tdm_1;
  }
  static udm(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker) {
    Companion_getInstance_28();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_25().edl_1);
    }
    var $this = this.gd6();
    $this.gdl_1 = blogName;
    $this.hdl_1 = idString;
    $this.idl_1 = genesisPostId;
    $this.jdl_1 = postUrl;
    $this.kdl_1 = parentPostUrl;
    $this.ldl_1 = type;
    $this.mdl_1 = timestamp;
    $this.ndl_1 = date;
    $this.odl_1 = format;
    $this.pdl_1 = reblogKey;
    $this.qdl_1 = tags;
    $this.rdl_1 = isBookmarklet;
    $this.sdl_1 = isMobile;
    $this.tdl_1 = sourceUrl;
    $this.udl_1 = sourceTitle;
    $this.vdl_1 = isLiked;
    $this.wdl_1 = state;
    $this.xdl_1 = title;
    $this.ydl_1 = body;
    $this.zdl_1 = noteCount;
    $this.adm_1 = summary;
    $this.bdm_1 = slug;
    $this.cdm_1 = rebloggedFromId;
    $this.ddm_1 = rebloggedFromUrl;
    $this.edm_1 = rebloggedFromName;
    $this.fdm_1 = rebloggedFromTitle;
    $this.gdm_1 = rebloggedFromUuid;
    $this.hdm_1 = rebloggedFromCanMessage;
    $this.idm_1 = rebloggedFromFollowing;
    $this.jdm_1 = rebloggedRootId;
    $this.kdm_1 = rebloggedRootUrl;
    $this.ldm_1 = rebloggedRootName;
    $this.mdm_1 = rebloggedRootTitle;
    $this.ndm_1 = rebloggedRootUuid;
    $this.odm_1 = rebloggedRootCanMessage;
    $this.pdm_1 = rebloggedRootFollowing;
    $this.qdm_1 = notes;
    $this.rdm_1 = blog;
    $this.sdm_1 = reblog;
    $this.tdm_1 = trail;
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
    tmp.wdm_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, lazy(tmp_6, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2)];
  }
  o1p() {
    return $serializer_getInstance_26();
  }
}
class $serializer_27 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyVideoPost', this, 42);
    tmp0_serialDesc.n1b('blog_name', false);
    tmp0_serialDesc.n1b('id_string', false);
    tmp0_serialDesc.n1b('genesis_post_id', false);
    tmp0_serialDesc.n1b('post_url', false);
    tmp0_serialDesc.n1b('parent_post_url', false);
    tmp0_serialDesc.n1b('type', false);
    tmp0_serialDesc.n1b('timestamp', false);
    tmp0_serialDesc.n1b('date', false);
    tmp0_serialDesc.n1b('format', false);
    tmp0_serialDesc.n1b('reblog_key', false);
    tmp0_serialDesc.n1b('tags', false);
    tmp0_serialDesc.n1b('bookmarklet', false);
    tmp0_serialDesc.n1b('mobile', false);
    tmp0_serialDesc.n1b('source_url', false);
    tmp0_serialDesc.n1b('source_title', false);
    tmp0_serialDesc.n1b('liked', false);
    tmp0_serialDesc.n1b('state', false);
    tmp0_serialDesc.n1b('title', false);
    tmp0_serialDesc.n1b('body', false);
    tmp0_serialDesc.n1b('note_count', false);
    tmp0_serialDesc.n1b('summary', false);
    tmp0_serialDesc.n1b('slug', false);
    tmp0_serialDesc.n1b('reblogged_from_id', false);
    tmp0_serialDesc.n1b('reblogged_from_url', false);
    tmp0_serialDesc.n1b('reblogged_from_name', false);
    tmp0_serialDesc.n1b('reblogged_from_title', false);
    tmp0_serialDesc.n1b('reblogged_from_uuid', false);
    tmp0_serialDesc.n1b('reblogged_from_can_message', false);
    tmp0_serialDesc.n1b('reblogged_from_following', false);
    tmp0_serialDesc.n1b('reblogged_root_id', false);
    tmp0_serialDesc.n1b('reblogged_root_url', false);
    tmp0_serialDesc.n1b('reblogged_root_name', false);
    tmp0_serialDesc.n1b('reblogged_root_title', false);
    tmp0_serialDesc.n1b('reblogged_root_uuid', false);
    tmp0_serialDesc.n1b('reblogged_root_can_message', false);
    tmp0_serialDesc.n1b('reblogged_root_following', false);
    tmp0_serialDesc.n1b('notes', false);
    tmp0_serialDesc.n1b('blog', false);
    tmp0_serialDesc.n1b('reblog', false);
    tmp0_serialDesc.n1b('trail', false);
    tmp0_serialDesc.n1b('caption', true);
    tmp0_serialDesc.n1b('player', true);
    this.xdm_1 = tmp0_serialDesc;
  }
  ydm(encoder, value) {
    var tmp0_desc = this.xdm_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().wdm_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.zdm_1);
    tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.adn_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.bdn_1);
    tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.cdn_1);
    tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.ddn_1);
    tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.edn_1);
    tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.fdn_1);
    tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.gdn_1);
    tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.hdn_1);
    tmp1_output.n15(tmp0_desc, 9, StringSerializer_getInstance(), value.idn_1);
    tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.jdn_1);
    tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.kdn_1);
    tmp1_output.n15(tmp0_desc, 12, BooleanSerializer_getInstance(), value.ldn_1);
    tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.mdn_1);
    tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.ndn_1);
    tmp1_output.n15(tmp0_desc, 15, BooleanSerializer_getInstance(), value.odn_1);
    tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.pdn_1);
    tmp1_output.n15(tmp0_desc, 17, StringSerializer_getInstance(), value.qdn_1);
    tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.rdn_1);
    tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.sdn_1);
    tmp1_output.n15(tmp0_desc, 20, StringSerializer_getInstance(), value.tdn_1);
    tmp1_output.n15(tmp0_desc, 21, StringSerializer_getInstance(), value.udn_1);
    tmp1_output.n15(tmp0_desc, 22, StringSerializer_getInstance(), value.vdn_1);
    tmp1_output.n15(tmp0_desc, 23, StringSerializer_getInstance(), value.wdn_1);
    tmp1_output.n15(tmp0_desc, 24, StringSerializer_getInstance(), value.xdn_1);
    tmp1_output.n15(tmp0_desc, 25, StringSerializer_getInstance(), value.ydn_1);
    tmp1_output.n15(tmp0_desc, 26, StringSerializer_getInstance(), value.zdn_1);
    tmp1_output.n15(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ado_1);
    tmp1_output.n15(tmp0_desc, 28, BooleanSerializer_getInstance(), value.bdo_1);
    tmp1_output.n15(tmp0_desc, 29, StringSerializer_getInstance(), value.cdo_1);
    tmp1_output.n15(tmp0_desc, 30, StringSerializer_getInstance(), value.ddo_1);
    tmp1_output.n15(tmp0_desc, 31, StringSerializer_getInstance(), value.edo_1);
    tmp1_output.n15(tmp0_desc, 32, StringSerializer_getInstance(), value.fdo_1);
    tmp1_output.n15(tmp0_desc, 33, StringSerializer_getInstance(), value.gdo_1);
    tmp1_output.n15(tmp0_desc, 34, BooleanSerializer_getInstance(), value.hdo_1);
    tmp1_output.n15(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ido_1);
    tmp1_output.n15(tmp0_desc, 36, tmp2_cached[36].d3(), value.jdo_1);
    tmp1_output.n15(tmp0_desc, 37, $serializer_getInstance_14(), value.kdo_1);
    tmp1_output.n15(tmp0_desc, 38, $serializer_getInstance_17(), value.ldo_1);
    tmp1_output.n15(tmp0_desc, 39, tmp2_cached[39].d3(), value.mdo_1);
    if (tmp1_output.r15(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.n15(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.r15(tmp0_desc, 41) ? true : !(value.player == null)) {
      tmp1_output.n15(tmp0_desc, 41, tmp2_cached[41].d3(), value.player);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.ydm(encoder, value instanceof LegacyVideoPost ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.xdm_1;
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
    var tmp47_input = decoder.v13(tmp0_desc);
    var tmp48_cached = Companion_getInstance_29().wdm_1;
    if (tmp47_input.k14()) {
      tmp5_local0 = tmp47_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.j14(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.j14(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.j14(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.j14(tmp0_desc, 41, tmp48_cached[41].d3(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.j14(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.j14(tmp0_desc, 10, tmp48_cached[10].d3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.j14(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.j14(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.j14(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.j14(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.j14(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.j14(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.j14(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.j14(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.j14(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.j14(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.j14(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.j14(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.j14(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.j14(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.j14(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.j14(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.j14(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.j14(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.j14(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.j14(tmp0_desc, 36, tmp48_cached[36].d3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.j14(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.j14(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.j14(tmp0_desc, 39, tmp48_cached[39].d3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.j14(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.j14(tmp0_desc, 41, tmp48_cached[41].d3(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp47_input.w13(tmp0_desc);
    return LegacyVideoPost.ndo(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  dz() {
    return this.xdm_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_29().wdm_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].d3()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[41].d3())];
  }
}
class LegacyVideoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.odo(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static odo(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_29();
    var $this = this.gd6();
    $this.zdm_1 = blogName;
    $this.adn_1 = idString;
    $this.bdn_1 = genesisPostId;
    $this.cdn_1 = postUrl;
    $this.ddn_1 = parentPostUrl;
    $this.edn_1 = type;
    $this.fdn_1 = timestamp;
    $this.gdn_1 = date;
    $this.hdn_1 = format;
    $this.idn_1 = reblogKey;
    $this.jdn_1 = tags;
    $this.kdn_1 = isBookmarklet;
    $this.ldn_1 = isMobile;
    $this.mdn_1 = sourceUrl;
    $this.ndn_1 = sourceTitle;
    $this.odn_1 = isLiked;
    $this.pdn_1 = state;
    $this.qdn_1 = title;
    $this.rdn_1 = body;
    $this.sdn_1 = noteCount;
    $this.tdn_1 = summary;
    $this.udn_1 = slug;
    $this.vdn_1 = rebloggedFromId;
    $this.wdn_1 = rebloggedFromUrl;
    $this.xdn_1 = rebloggedFromName;
    $this.ydn_1 = rebloggedFromTitle;
    $this.zdn_1 = rebloggedFromUuid;
    $this.ado_1 = rebloggedFromCanMessage;
    $this.bdo_1 = rebloggedFromFollowing;
    $this.cdo_1 = rebloggedRootId;
    $this.ddo_1 = rebloggedRootUrl;
    $this.edo_1 = rebloggedRootName;
    $this.fdo_1 = rebloggedRootTitle;
    $this.gdo_1 = rebloggedRootUuid;
    $this.hdo_1 = rebloggedRootCanMessage;
    $this.ido_1 = rebloggedRootFollowing;
    $this.jdo_1 = notes;
    $this.kdo_1 = blog;
    $this.ldo_1 = reblog;
    $this.mdo_1 = trail;
    $this.caption = null;
    $this.player = null;
    return $this;
  }
  hcx(_set____db54di) {
    this.zdm_1 = _set____db54di;
  }
  icx() {
    return this.zdm_1;
  }
  qd6(_set____db54di) {
    this.adn_1 = _set____db54di;
  }
  rd6() {
    return this.adn_1;
  }
  sd6(_set____db54di) {
    this.bdn_1 = _set____db54di;
  }
  td6() {
    return this.bdn_1;
  }
  ud6(_set____db54di) {
    this.cdn_1 = _set____db54di;
  }
  vd6() {
    return this.cdn_1;
  }
  wd6(_set____db54di) {
    this.ddn_1 = _set____db54di;
  }
  xd6() {
    return this.ddn_1;
  }
  u38(_set____db54di) {
    this.edn_1 = _set____db54di;
  }
  h38() {
    return this.edn_1;
  }
  yd6(_set____db54di) {
    this.fdn_1 = _set____db54di;
  }
  qd3() {
    return this.fdn_1;
  }
  ocy(_set____db54di) {
    this.gdn_1 = _set____db54di;
  }
  pcy() {
    return this.gdn_1;
  }
  qcy(_set____db54di) {
    this.hdn_1 = _set____db54di;
  }
  rcy() {
    return this.hdn_1;
  }
  hd0(_set____db54di) {
    this.idn_1 = _set____db54di;
  }
  id0() {
    return this.idn_1;
  }
  cam(_set____db54di) {
    this.jdn_1 = _set____db54di;
  }
  xag() {
    return this.jdn_1;
  }
  zd6(_set____db54di) {
    this.kdn_1 = _set____db54di;
  }
  ad7() {
    return this.kdn_1;
  }
  bd7(_set____db54di) {
    this.ldn_1 = _set____db54di;
  }
  cd7() {
    return this.ldn_1;
  }
  i38(_set____db54di) {
    this.mdn_1 = _set____db54di;
  }
  j38() {
    return this.mdn_1;
  }
  dd7(_set____db54di) {
    this.ndn_1 = _set____db54di;
  }
  ed7() {
    return this.ndn_1;
  }
  fd7(_set____db54di) {
    this.odn_1 = _set____db54di;
  }
  tao() {
    return this.odn_1;
  }
  sa8(_set____db54di) {
    this.pdn_1 = _set____db54di;
  }
  s7x() {
    return this.pdn_1;
  }
  sag(_set____db54di) {
    this.qdn_1 = _set____db54di;
  }
  x3i() {
    return this.qdn_1;
  }
  kan(_set____db54di) {
    this.rdn_1 = _set____db54di;
  }
  lan() {
    return this.rdn_1;
  }
  gd7(_set____db54di) {
    this.sdn_1 = _set____db54di;
  }
  hd7() {
    return this.sdn_1;
  }
  fao(_set____db54di) {
    this.tdn_1 = _set____db54di;
  }
  gao() {
    return this.tdn_1;
  }
  scy(_set____db54di) {
    this.udn_1 = _set____db54di;
  }
  tcy() {
    return this.udn_1;
  }
  id7(_set____db54di) {
    this.vdn_1 = _set____db54di;
  }
  jd7() {
    return this.vdn_1;
  }
  kd7(_set____db54di) {
    this.wdn_1 = _set____db54di;
  }
  ld7() {
    return this.wdn_1;
  }
  md7(_set____db54di) {
    this.xdn_1 = _set____db54di;
  }
  nd7() {
    return this.xdn_1;
  }
  od7(_set____db54di) {
    this.ydn_1 = _set____db54di;
  }
  pd7() {
    return this.ydn_1;
  }
  qd7(_set____db54di) {
    this.zdn_1 = _set____db54di;
  }
  rd7() {
    return this.zdn_1;
  }
  sd7(_set____db54di) {
    this.ado_1 = _set____db54di;
  }
  td7() {
    return this.ado_1;
  }
  ud7(_set____db54di) {
    this.bdo_1 = _set____db54di;
  }
  vd7() {
    return this.bdo_1;
  }
  wd7(_set____db54di) {
    this.cdo_1 = _set____db54di;
  }
  xd7() {
    return this.cdo_1;
  }
  yd7(_set____db54di) {
    this.ddo_1 = _set____db54di;
  }
  zd7() {
    return this.ddo_1;
  }
  ad8(_set____db54di) {
    this.edo_1 = _set____db54di;
  }
  bd8() {
    return this.edo_1;
  }
  cd8(_set____db54di) {
    this.fdo_1 = _set____db54di;
  }
  dd8() {
    return this.fdo_1;
  }
  ed8(_set____db54di) {
    this.gdo_1 = _set____db54di;
  }
  fd8() {
    return this.gdo_1;
  }
  gd8(_set____db54di) {
    this.hdo_1 = _set____db54di;
  }
  hd8() {
    return this.hdo_1;
  }
  id8(_set____db54di) {
    this.ido_1 = _set____db54di;
  }
  jd8() {
    return this.ido_1;
  }
  kd8(_set____db54di) {
    this.jdo_1 = _set____db54di;
  }
  ld8() {
    return this.jdo_1;
  }
  yd1(_set____db54di) {
    this.kdo_1 = _set____db54di;
  }
  zd1() {
    return this.kdo_1;
  }
  md8(_set____db54di) {
    this.ldo_1 = _set____db54di;
  }
  mbr() {
    return this.ldo_1;
  }
  nd8(_set____db54di) {
    this.mdo_1 = _set____db54di;
  }
  od8() {
    return this.mdo_1;
  }
  fcy(_set____db54di) {
    this.caption = _set____db54di;
  }
  gcy() {
    return this.caption;
  }
  pdo() {
    return this.player;
  }
  static ndo(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, player, serializationConstructorMarker) {
    Companion_getInstance_29();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_26().xdm_1);
    }
    var $this = this.gd6();
    $this.zdm_1 = blogName;
    $this.adn_1 = idString;
    $this.bdn_1 = genesisPostId;
    $this.cdn_1 = postUrl;
    $this.ddn_1 = parentPostUrl;
    $this.edn_1 = type;
    $this.fdn_1 = timestamp;
    $this.gdn_1 = date;
    $this.hdn_1 = format;
    $this.idn_1 = reblogKey;
    $this.jdn_1 = tags;
    $this.kdn_1 = isBookmarklet;
    $this.ldn_1 = isMobile;
    $this.mdn_1 = sourceUrl;
    $this.ndn_1 = sourceTitle;
    $this.odn_1 = isLiked;
    $this.pdn_1 = state;
    $this.qdn_1 = title;
    $this.rdn_1 = body;
    $this.sdn_1 = noteCount;
    $this.tdn_1 = summary;
    $this.udn_1 = slug;
    $this.vdn_1 = rebloggedFromId;
    $this.wdn_1 = rebloggedFromUrl;
    $this.xdn_1 = rebloggedFromName;
    $this.ydn_1 = rebloggedFromTitle;
    $this.zdn_1 = rebloggedFromUuid;
    $this.ado_1 = rebloggedFromCanMessage;
    $this.bdo_1 = rebloggedFromFollowing;
    $this.cdo_1 = rebloggedRootId;
    $this.ddo_1 = rebloggedRootUrl;
    $this.edo_1 = rebloggedRootName;
    $this.fdo_1 = rebloggedRootTitle;
    $this.gdo_1 = rebloggedRootUuid;
    $this.hdo_1 = rebloggedRootCanMessage;
    $this.ido_1 = rebloggedRootFollowing;
    $this.jdo_1 = notes;
    $this.kdo_1 = blog;
    $this.ldo_1 = reblog;
    $this.mdo_1 = trail;
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
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('label', true);
    tmp0_serialDesc.n1b('phrase', true);
    this.qdo_1 = tmp0_serialDesc;
  }
  rdo(encoder, value) {
    var tmp0_desc = this.qdo_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.label == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.phrase == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.phrase);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.rdo(encoder, value instanceof Dialogue ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.qdo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return Dialogue.sdo(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.qdo_1;
  }
  d1c() {
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
  p77() {
    return this.label;
  }
  tdo() {
    return this.phrase;
  }
  static sdo(seen0, name, label, phrase, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().qdo_1);
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
    tmp.udo_1 = [null, null, lazy(tmp_0, Photo$Companion$$childSerializers$_anonymous__7997i0)];
  }
}
class $serializer_29 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Photo', this, 3);
    tmp0_serialDesc.n1b('caption', true);
    tmp0_serialDesc.n1b('original_size', true);
    tmp0_serialDesc.n1b('alt_sizes', true);
    this.vdo_1 = tmp0_serialDesc;
  }
  wdo(encoder, value) {
    var tmp0_desc = this.vdo_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().udo_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.caption == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.originalSize == null)) {
      tmp1_output.n15(tmp0_desc, 1, $serializer_getInstance_29(), value.originalSize);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.altSizes == null)) {
      tmp1_output.n15(tmp0_desc, 2, tmp2_cached[2].d3(), value.altSizes);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.wdo(encoder, value instanceof Photo ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.vdo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    var tmp8_cached = Companion_getInstance_31().udo_1;
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return Photo.xdo(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.vdo_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_31().udo_1;
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
  gcy() {
    return this.caption;
  }
  ydo() {
    return this.originalSize;
  }
  zdo() {
    return this.altSizes;
  }
  static xdo(seen0, caption, originalSize, altSizes, serializationConstructorMarker) {
    Companion_getInstance_31();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().vdo_1);
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
    tmp0_serialDesc.n1b('width', true);
    tmp0_serialDesc.n1b('height', true);
    tmp0_serialDesc.n1b('url', true);
    this.adp_1 = tmp0_serialDesc;
  }
  bdp(encoder, value) {
    var tmp0_desc = this.adp_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.width === 0)) {
      tmp1_output.f15(tmp0_desc, 0, value.width);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.height === 0)) {
      tmp1_output.f15(tmp0_desc, 1, value.height);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.bdp(encoder, value instanceof PhotoSize ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.adp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.a14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.a14(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.a14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.a14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return PhotoSize.cdp(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.adp_1;
  }
  d1c() {
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
  n38() {
    return this.width;
  }
  p38() {
    return this.height;
  }
  i4n() {
    return this.url;
  }
  static cdp(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().adp_1);
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
    tmp0_serialDesc.n1b('width', true);
    tmp0_serialDesc.n1b('embedCode', true);
    this.ddp_1 = tmp0_serialDesc;
  }
  edp(encoder, value) {
    var tmp0_desc = this.ddp_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.n15(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.embedCode == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.embedCode);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.edp(encoder, value instanceof Video ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ddp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return Video.fdp(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.ddp_1;
  }
  d1c() {
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
  n38() {
    return this.width;
  }
  gdp() {
    return this.embedCode;
  }
  static fdp(seen0, width, embedCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().ddp_1);
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
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('active', true);
    tmp0_serialDesc.n1b('theme', true);
    tmp0_serialDesc.n1b('share_likes', true);
    tmp0_serialDesc.n1b('share_following', true);
    tmp0_serialDesc.n1b('can_be_followed', true);
    this.hdp_1 = tmp0_serialDesc;
  }
  idp(encoder, value) {
    var tmp0_desc = this.hdp_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.isActive === false)) {
      tmp1_output.c15(tmp0_desc, 1, value.isActive);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.theme == null)) {
      tmp1_output.n15(tmp0_desc, 2, $serializer_getInstance_16(), value.theme);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.isShareLikes === false)) {
      tmp1_output.c15(tmp0_desc, 3, value.isShareLikes);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.isShareFollowing === false)) {
      tmp1_output.c15(tmp0_desc, 4, value.isShareFollowing);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.isCanBeFollowed === false)) {
      tmp1_output.c15(tmp0_desc, 5, value.isCanBeFollowed);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.idp(encoder, value instanceof BlogInTrail ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.hdp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.v13(tmp0_desc);
    if (tmp10_input.k14()) {
      tmp4_local0 = tmp10_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.x13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.j14(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.x13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.x13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.x13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.x13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.j14(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.x13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.x13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.x13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp10_input.w13(tmp0_desc);
    return BlogInTrail.jdp(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  dz() {
    return this.hdp_1;
  }
  d1c() {
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
  o25() {
    return this.isActive;
  }
  sd4() {
    return this.theme;
  }
  kdp() {
    return this.isShareLikes;
  }
  ldp() {
    return this.isShareFollowing;
  }
  mdp() {
    return this.isCanBeFollowed;
  }
  static jdp(seen0, name, isActive, theme, isShareLikes, isShareFollowing, isCanBeFollowed, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().hdp_1);
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
    tmp0_serialDesc.n1b('id', true);
    this.ndp_1 = tmp0_serialDesc;
  }
  odp(encoder, value) {
    var tmp0_desc = this.ndp_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.odp(encoder, value instanceof IdInTrail ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ndp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.v13(tmp0_desc);
    if (tmp5_input.k14()) {
      tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp5_input.w13(tmp0_desc);
    return IdInTrail.pdp(tmp3_bitMask0, tmp4_local0, null);
  }
  dz() {
    return this.ndp_1;
  }
  d1c() {
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
  g3f() {
    return this.id;
  }
  static pdp(seen0, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().ndp_1);
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
    tmp0_serialDesc.n1b('blog', true);
    tmp0_serialDesc.n1b('post', true);
    tmp0_serialDesc.n1b('content_raw', true);
    tmp0_serialDesc.n1b('content', true);
    tmp0_serialDesc.n1b('current_item', true);
    tmp0_serialDesc.n1b('root_item', true);
    this.qdp_1 = tmp0_serialDesc;
  }
  rdp(encoder, value) {
    var tmp0_desc = this.qdp_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.n15(tmp0_desc, 0, $serializer_getInstance_31(), value.blog);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.post == null)) {
      tmp1_output.n15(tmp0_desc, 1, $serializer_getInstance_32(), value.post);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.contentRaw == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.contentRaw);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.content == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.content);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.isCurrentItem === false)) {
      tmp1_output.c15(tmp0_desc, 4, value.isCurrentItem);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.isRootItem === false)) {
      tmp1_output.c15(tmp0_desc, 5, value.isRootItem);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.rdp(encoder, value instanceof Trail ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.qdp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.v13(tmp0_desc);
    if (tmp10_input.k14()) {
      tmp4_local0 = tmp10_input.j14(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.j14(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.x13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.x13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.j14(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.j14(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.x13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.x13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp10_input.w13(tmp0_desc);
    return Trail.sdp(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  dz() {
    return this.qdp_1;
  }
  d1c() {
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
  zd1() {
    return this.blog;
  }
  a6d() {
    return this.post;
  }
  tdp() {
    return this.contentRaw;
  }
  y1o() {
    return this.content;
  }
  udp() {
    return this.isCurrentItem;
  }
  vdp() {
    return this.isRootItem;
  }
  static sdp(seen0, blog, post, contentRaw, content, isCurrentItem, isRootItem, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().qdp_1);
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
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('following', true);
    tmp0_serialDesc.n1b('url', true);
    tmp0_serialDesc.n1b('updated', true);
    this.wdp_1 = tmp0_serialDesc;
  }
  xdp(encoder, value) {
    var tmp0_desc = this.wdp_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.following == null)) {
      tmp1_output.n15(tmp0_desc, 1, BooleanSerializer_getInstance(), value.following);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.updated);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.xdp(encoder, value instanceof FollowerUser ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.wdp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.v13(tmp0_desc);
    if (tmp8_input.k14()) {
      tmp4_local0 = tmp8_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.j14(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.j14(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp8_input.w13(tmp0_desc);
    return FollowerUser.ydp(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  dz() {
    return this.wdp_1;
  }
  d1c() {
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
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  f6g(_set____db54di) {
    this.following = _set____db54di;
  }
  q3a() {
    return this.following;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  zdp(_set____db54di) {
    this.updated = _set____db54di;
  }
  ld4() {
    return this.updated;
  }
  static ydp(seen0, name, following, url, updated, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().wdp_1);
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
    tmp.adq_1 = [null, null, null, null, lazy(tmp_0, User$Companion$$childSerializers$_anonymous__6nf9sv)];
  }
}
class $serializer_36 {
  constructor() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.User', this, 5);
    tmp0_serialDesc.n1b('following', true);
    tmp0_serialDesc.n1b('default_post_format', true);
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('likes', true);
    tmp0_serialDesc.n1b('blogs', true);
    this.bdq_1 = tmp0_serialDesc;
  }
  cdq(encoder, value) {
    var tmp0_desc = this.bdq_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_38().adq_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.followingCount == null)) {
      tmp1_output.n15(tmp0_desc, 0, IntSerializer_getInstance(), value.followingCount);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.defaultPostFormat == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.defaultPostFormat);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.likeCount == null)) {
      tmp1_output.n15(tmp0_desc, 3, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.blogs == null)) {
      tmp1_output.n15(tmp0_desc, 4, tmp2_cached[4].d3(), value.blogs);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.cdq(encoder, value instanceof User ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.bdq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.v13(tmp0_desc);
    var tmp10_cached = Companion_getInstance_38().adq_1;
    if (tmp9_input.k14()) {
      tmp4_local0 = tmp9_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.j14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.j14(tmp0_desc, 4, tmp10_cached[4].d3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.j14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.j14(tmp0_desc, 4, tmp10_cached[4].d3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp9_input.w13(tmp0_desc);
    return User.ddq(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  dz() {
    return this.bdq_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_38().adq_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[4].d3())];
  }
}
class User extends Resource {
  constructor() {
    return new.target.edq();
  }
  static edq() {
    Companion_getInstance_38();
    var $this = this.cd4();
    $this.followingCount = null;
    $this.defaultPostFormat = null;
    $this.name = null;
    $this.likeCount = null;
    $this.blogs = null;
    return $this;
  }
  d36() {
    return this.followingCount;
  }
  fdq() {
    return this.defaultPostFormat;
  }
  d1() {
    return this.name;
  }
  f34() {
    return this.likeCount;
  }
  sd1() {
    return this.blogs;
  }
  static ddq(seen0, followingCount, defaultPostFormat, name, likeCount, blogs, serializationConstructorMarker) {
    Companion_getInstance_38();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().bdq_1);
    }
    var $this = this.cd4();
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
    this.gdq_1 = auth;
  }
  *idq(path, params, files, $completion) {
    return yield* /*#__NOINLINE__*/proceedUnit(this, AbstractResourceImpl$oauthPostUnit$slambda(path, this, params, files), $completion);
  }
  jdq(path, params, files, $completion, $super) {
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
    return $super === VOID ? this.idq(path, params, files, $completion) : $super.idq.call(this, path, params, files, $completion);
  }
  *kdq(path, params, $completion) {
    return yield* /*#__NOINLINE__*/proceedUnit(this, AbstractResourceImpl$oauthPutUnit$slambda(path, this, params), $completion);
  }
  ldq(blogName, extPath) {
    return '/blog/' + blogUrl(this, blogName) + extPath;
  }
}
class AuthResourceImpl extends AbstractResourceImpl {
  authorizeUrl(request) {
    // Inline function 'kotlin.apply' call
    var this_0 = new URLBuilder();
    this_0.r49(Companion_getInstance().t49_1);
    this_0.i48_1 = 'www.tumblr.com';
    set_encodedPath(this_0, '/oauth2/authorize');
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.r48_1;
    this_1.g3s('client_id', this.gdq_1.cct_1);
    this_1.g3s('response_type', request.responseType);
    this_1.g3s('state', ensureNotNull(request.state));
    this_1.g3s('scope', request.scope);
    var tmp0_safe_receiver = request.redirectUri;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_1.g3s('redirect_uri', tmp0_safe_receiver);
    }
    return this_0.h40().toString();
  }
  *wct(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2/oauth2/token').z54(request.ecx()).b55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.p10(tmp$ret$4, obj);
          tmp$ret$0 = new Response(tmp$ret$2, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oAuth2Token(request) {
    return promisify(($completion) => this.wct(request, $completion));
  }
  *uct(request, $completion) {
    return this.oAuth2Token === protoOf(AuthResourceImpl).oAuth2Token ? (yield* this.wct(request, $completion)) : (yield* await_0(this.oAuth2Token(request), $completion));
  }
  xct(request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenBlocking$slambda(this, request));
  }
  *yct(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2/oauth2/token').z54(request.ecx()).b55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.p10(tmp$ret$4, obj);
          tmp$ret$0 = new Response(tmp$ret$2, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oAuth2TokenRefresh(request) {
    return promisify(($completion) => this.yct(request, $completion));
  }
  *vct(request, $completion) {
    return this.oAuth2TokenRefresh === protoOf(AuthResourceImpl).oAuth2TokenRefresh ? (yield* this.yct(request, $completion)) : (yield* await_0(this.oAuth2TokenRefresh(request), $completion));
  }
  zct(request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this, request));
  }
}
class BlogResourceImpl extends AbstractResourceImpl {
  *icu(request, $completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.ldq(ensureNotNull(request.blogName), '/info');
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + path).q54(MediaType_getInstance().hdq_1).x54(params).w54('api_key', this.gdq_1.cct_1).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogInfoResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.p10(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  blogInfo(request) {
    return promisify(($completion) => this.icu(request, $completion));
  }
  *acu(request, $completion) {
    return this.blogInfo === protoOf(BlogResourceImpl).blogInfo ? (yield* this.icu(request, $completion)) : (yield* await_0(this.blogInfo(request), $completion));
  }
  jcu(request) {
    return toBlocking(BlogResourceImpl$blogInfoBlocking$slambda(this, request));
  }
  *kcu(request, $completion) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    var path = this.ldq(ensureNotNull(request.blogName), '/avatar' + ext);
    var r = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + path).u54(false).a55($completion);
    var tmp0 = r.g55_1.v4('location');
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
    return promisify(($completion) => this.kcu(request, $completion));
  }
  *lcu(request, $completion) {
    return this.blogAvatar === protoOf(BlogResourceImpl).blogAvatar ? (yield* this.kcu(request, $completion)) : (yield* await_0(this.blogAvatar(request), $completion));
  }
  mcu(request) {
    return toBlocking(BlogResourceImpl$blogAvatarBlocking$slambda(this, request));
  }
  *ncu(request, $completion) {
    var tmp2 = this.ldq(ensureNotNull(request.blogName), '/likes');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).q54(MediaType_getInstance().hdq_1).x54(params).w54('api_key', this.gdq_1.cct_1).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogLikesResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogLikes(request) {
    return promisify(($completion) => this.ncu(request, $completion));
  }
  *bcu(request, $completion) {
    return this.blogLikes === protoOf(BlogResourceImpl).blogLikes ? (yield* this.ncu(request, $completion)) : (yield* await_0(this.blogLikes(request), $completion));
  }
  ocu(request) {
    return toBlocking(BlogResourceImpl$blogLikesBlocking$slambda(this, request));
  }
  *pcu(request, $completion) {
    var tmp2 = this.ldq(ensureNotNull(request.blogName), '/following');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowingResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogFollowing(request) {
    return promisify(($completion) => this.pcu(request, $completion));
  }
  *qcu(request, $completion) {
    return this.blogFollowing === protoOf(BlogResourceImpl).blogFollowing ? (yield* this.pcu(request, $completion)) : (yield* await_0(this.blogFollowing(request), $completion));
  }
  rcu(request) {
    return toBlocking(BlogResourceImpl$blogFollowingBlocking$slambda(this, request));
  }
  *scu(request, $completion) {
    var tmp2 = this.ldq(ensureNotNull(request.blogName), '/followers');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowersResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogFollowers(request) {
    return promisify(($completion) => this.scu(request, $completion));
  }
  *ccu(request, $completion) {
    return this.blogFollowers === protoOf(BlogResourceImpl).blogFollowers ? (yield* this.scu(request, $completion)) : (yield* await_0(this.blogFollowers(request), $completion));
  }
  tcu(request) {
    return toBlocking(BlogResourceImpl$blogFollowersBlocking$slambda(this, request));
  }
  *ucu(request, $completion) {
    var ext = request.type == null ? '' : '/' + ensureNotNull(request.type);
    var tmp2 = this.ldq(ensureNotNull(request.blogName), '/posts' + ext);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogPosts(request) {
    return promisify(($completion) => this.ucu(request, $completion));
  }
  *dcu(request, $completion) {
    return this.blogPosts === protoOf(BlogResourceImpl).blogPosts ? (yield* this.ucu(request, $completion)) : (yield* await_0(this.blogPosts(request), $completion));
  }
  vcu(request) {
    return toBlocking(BlogResourceImpl$blogPostsBlocking$slambda(this, request));
  }
  *wcu(request, $completion) {
    var tmp2 = this.ldq(ensureNotNull(request.blogName), '/posts/queue');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogQueuedPosts(request) {
    return promisify(($completion) => this.wcu(request, $completion));
  }
  *xcu(request, $completion) {
    return this.blogQueuedPosts === protoOf(BlogResourceImpl).blogQueuedPosts ? (yield* this.wcu(request, $completion)) : (yield* await_0(this.blogQueuedPosts(request), $completion));
  }
  ycu(request) {
    return toBlocking(BlogResourceImpl$blogQueuedPostsBlocking$slambda(this, request));
  }
  *zcu(request, $completion) {
    var tmp2 = this.ldq(ensureNotNull(request.blogName), '/posts/draft');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogDraftPosts(request) {
    return promisify(($completion) => this.zcu(request, $completion));
  }
  *acv(request, $completion) {
    return this.blogDraftPosts === protoOf(BlogResourceImpl).blogDraftPosts ? (yield* this.zcu(request, $completion)) : (yield* await_0(this.blogDraftPosts(request), $completion));
  }
  bcv(request) {
    return toBlocking(BlogResourceImpl$blogDraftPostsBlocking$slambda(this, request));
  }
  *ccv(request, $completion) {
    var tmp2 = this.ldq(ensureNotNull(request.blogName), '/posts/submission');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  blogSubmissions(request) {
    return promisify(($completion) => this.ccv(request, $completion));
  }
  *dcv(request, $completion) {
    return this.blogSubmissions === protoOf(BlogResourceImpl).blogSubmissions ? (yield* this.ccv(request, $completion)) : (yield* await_0(this.blogSubmissions(request), $completion));
  }
  ecv(request) {
    return toBlocking(BlogResourceImpl$blogSubmissionsBlocking$slambda(this, request));
  }
  *fcv(request, $completion) {
    var tmp = this.ldq(ensureNotNull(request.blogName), '/post');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.ecx();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.ecx();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.ecx();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.ecx();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.ecx();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.ecx();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.ecx();
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
      tmp_2 = request.fcz();
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_2 = emptyMap();
    }
    return yield* this.idq(tmp, tmp_1, tmp_2, $completion);
  }
  postCreate(request) {
    return promisify(($completion) => this.fcv(request, $completion));
  }
  *ecu(request, $completion) {
    return this.postCreate === protoOf(BlogResourceImpl).postCreate ? (yield* this.fcv(request, $completion)) : (yield* await_0(this.postCreate(request), $completion));
  }
  gcv(request) {
    return toBlocking(BlogResourceImpl$postCreateBlocking$slambda(this, request));
  }
  *hcv(request, $completion) {
    var tmp = this.ldq(ensureNotNull(request.blogName), '/post/edit');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.ecx();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.ecx();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.ecx();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.ecx();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.ecx();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.ecx();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.ecx();
                } else {
                  throw IllegalArgumentException.a2('Unknown post type.');
                }
              }
            }
          }
        }
      }
    }
    return yield* this.jdq(tmp, tmp_0, VOID, $completion);
  }
  postEdit(request) {
    return promisify(($completion) => this.hcv(request, $completion));
  }
  *fcu(request, $completion) {
    return this.postEdit === protoOf(BlogResourceImpl).postEdit ? (yield* this.hcv(request, $completion)) : (yield* await_0(this.postEdit(request), $completion));
  }
  icv(request) {
    return toBlocking(BlogResourceImpl$postEditBlocking$slambda(this, request));
  }
  *jcv(request, $completion) {
    return yield* this.jdq(this.ldq(ensureNotNull(request.blogName), '/post/reblog'), request.ecx(), VOID, $completion);
  }
  postReblog(request) {
    return promisify(($completion) => this.jcv(request, $completion));
  }
  *gcu(request, $completion) {
    return this.postReblog === protoOf(BlogResourceImpl).postReblog ? (yield* this.jcv(request, $completion)) : (yield* await_0(this.postReblog(request), $completion));
  }
  kcv(request) {
    return toBlocking(BlogResourceImpl$postReblogBlocking$slambda(this, request));
  }
  *lcv(request, $completion) {
    return yield* this.jdq(this.ldq(ensureNotNull(request.blogName), '/post/delete'), request.ecx(), VOID, $completion);
  }
  postDelete(request) {
    return promisify(($completion) => this.lcv(request, $completion));
  }
  *hcu(request, $completion) {
    return this.postDelete === protoOf(BlogResourceImpl).postDelete ? (yield* this.lcv(request, $completion)) : (yield* await_0(this.postDelete(request), $completion));
  }
  mcv(request) {
    return toBlocking(BlogResourceImpl$postDeleteBlocking$slambda(this, request));
  }
  *ncv(request, $completion) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.ldq(ensureNotNull(request.blogName), '/banner' + ext);
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + path).q54(MediaType_getInstance().hdq_1).x54(params).w54('api_key', this.gdq_1.cct_1).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogBannerResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.p10(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  blogBanner(request) {
    return promisify(($completion) => this.ncv(request, $completion));
  }
  *ocv(request, $completion) {
    return this.blogBanner === protoOf(BlogResourceImpl).blogBanner ? (yield* this.ncv(request, $completion)) : (yield* await_0(this.blogBanner(request), $completion));
  }
  pcv(request) {
    return toBlocking(BlogResourceImpl$blogBannerBlocking$slambda(this, request));
  }
  *qcv(request, $completion) {
    return yield* this.kdq(this.ldq(ensureNotNull(request.blogName), '/info'), request.ecx(), $completion);
  }
  blogUpdateInfo(request) {
    return promisify(($completion) => this.qcv(request, $completion));
  }
  *rcv(request, $completion) {
    return this.blogUpdateInfo === protoOf(BlogResourceImpl).blogUpdateInfo ? (yield* this.qcv(request, $completion)) : (yield* await_0(this.blogUpdateInfo(request), $completion));
  }
  scv(request) {
    return toBlocking(BlogResourceImpl$blogUpdateInfoBlocking$slambda(this, request));
  }
  *tcv(request, $completion) {
    return yield* this.jdq(this.ldq(ensureNotNull(request.blogName), '/post/edit/tags'), request.ecx(), VOID, $completion);
  }
  postEditTags(request) {
    return promisify(($completion) => this.tcv(request, $completion));
  }
  *ucv(request, $completion) {
    return this.postEditTags === protoOf(BlogResourceImpl).postEditTags ? (yield* this.tcv(request, $completion)) : (yield* await_0(this.postEditTags(request), $completion));
  }
  vcv(request) {
    return toBlocking(BlogResourceImpl$postEditTagsBlocking$slambda(this, request));
  }
  *wcv(request, $completion) {
    return yield* this.idq(this.ldq(ensureNotNull(request.blogName), '/post/edit'), request.ecx(), request.toFileMap(), $completion);
  }
  postUpdate(request) {
    return promisify(($completion) => this.wcv(request, $completion));
  }
  *xcv(request, $completion) {
    return this.postUpdate === protoOf(BlogResourceImpl).postUpdate ? (yield* this.wcv(request, $completion)) : (yield* await_0(this.postUpdate(request), $completion));
  }
  ycv(request) {
    return toBlocking(BlogResourceImpl$postUpdateBlocking$slambda(this, request));
  }
}
class TaggedResourceImpl extends AbstractResourceImpl {
  *acw(request, $completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + '/tagged').q54(MediaType_getInstance().hdq_1).x54(params).w54('api_key', this.gdq_1.cct_1).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ug(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Post), arrayOf([]), false))]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  tagged(request) {
    return promisify(($completion) => this.acw(request, $completion));
  }
  *zcv(request, $completion) {
    return this.tagged === protoOf(TaggedResourceImpl).tagged ? (yield* this.acw(request, $completion)) : (yield* await_0(this.tagged(request), $completion));
  }
  bcw(request) {
    return toBlocking(TaggedResourceImpl$taggedBlocking$slambda(this, request));
  }
}
class UserResourceImpl extends AbstractResourceImpl {
  *jcw($completion) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var path = '/user/info';
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + path).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserResponse), arrayOf([]), false))]), false));
          var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$4 = this_0.p10(tmp$ret$6, obj);
          tmp$ret$2 = new Response(tmp$ret$4, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  user() {
    return promisify(($completion) => this.jcw($completion));
  }
  *ccw($completion) {
    return this.user === protoOf(UserResourceImpl).user ? (yield* this.jcw($completion)) : (yield* await_0(this.user(), $completion));
  }
  kcw() {
    return toBlocking(UserResourceImpl$userBlocking$slambda(this));
  }
  *lcw(request, $completion) {
    var tmp2 = '/user/dashboard';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserDashboardResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userDashboard(request) {
    return promisify(($completion) => this.lcw(request, $completion));
  }
  *dcw(request, $completion) {
    return this.userDashboard === protoOf(UserResourceImpl).userDashboard ? (yield* this.lcw(request, $completion)) : (yield* await_0(this.userDashboard(request), $completion));
  }
  mcw(request) {
    return toBlocking(UserResourceImpl$userDashboardBlocking$slambda(this, request));
  }
  *ncw(request, $completion) {
    var tmp2 = '/user/following';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserFollowingResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userFollowing(request) {
    return promisify(($completion) => this.ncw(request, $completion));
  }
  *ecw(request, $completion) {
    return this.userFollowing === protoOf(UserResourceImpl).userFollowing ? (yield* this.ncw(request, $completion)) : (yield* await_0(this.userFollowing(request), $completion));
  }
  ocw(request) {
    return toBlocking(UserResourceImpl$userFollowingBlocking$slambda(this, request));
  }
  *pcw(request, $completion) {
    var tmp2 = '/user/likes';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.ecx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + tmp2).r54('Authorization', this.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).x54(params).a55($completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = Json_getInstance();
          // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.ndq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserLikesResponse), arrayOf([]), false))]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.p10(tmp$ret$5, obj);
          tmp$ret$1 = new Response(tmp$ret$3, response.j55());
          break $l$block;
        }
        throw TumblrException.nct(response.f55_1, response.j55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
          throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  }
  userLikes(request) {
    return promisify(($completion) => this.pcw(request, $completion));
  }
  *qcw(request, $completion) {
    return this.userLikes === protoOf(UserResourceImpl).userLikes ? (yield* this.pcw(request, $completion)) : (yield* await_0(this.userLikes(request), $completion));
  }
  rcw(request) {
    return toBlocking(UserResourceImpl$userLikesBlocking$slambda(this, request));
  }
  *scw(request, $completion) {
    return yield* this.jdq('/user/like', request.ecx(), VOID, $completion);
  }
  like(request) {
    return promisify(($completion) => this.scw(request, $completion));
  }
  *fcw(request, $completion) {
    return this.like === protoOf(UserResourceImpl).like ? (yield* this.scw(request, $completion)) : (yield* await_0(this.like(request), $completion));
  }
  tcw(request) {
    return toBlocking(UserResourceImpl$likeBlocking$slambda(this, request));
  }
  *ucw(request, $completion) {
    return yield* this.jdq('/user/unlike', request.ecx(), VOID, $completion);
  }
  unlike(request) {
    return promisify(($completion) => this.ucw(request, $completion));
  }
  *gcw(request, $completion) {
    return this.unlike === protoOf(UserResourceImpl).unlike ? (yield* this.ucw(request, $completion)) : (yield* await_0(this.unlike(request), $completion));
  }
  vcw(request) {
    return toBlocking(UserResourceImpl$unlikeBlocking$slambda(this, request));
  }
  *wcw(request, $completion) {
    return yield* this.jdq('/user/follow', request.ecx(), VOID, $completion);
  }
  follow(request) {
    return promisify(($completion) => this.wcw(request, $completion));
  }
  *hcw(request, $completion) {
    return this.follow === protoOf(UserResourceImpl).follow ? (yield* this.wcw(request, $completion)) : (yield* await_0(this.follow(request), $completion));
  }
  xcw(request) {
    return toBlocking(UserResourceImpl$followBlocking$slambda(this, request));
  }
  *ycw(request, $completion) {
    return yield* this.jdq('/user/unfollow', request.ecx(), VOID, $completion);
  }
  unfollow(request) {
    return promisify(($completion) => this.ycw(request, $completion));
  }
  *icw(request, $completion) {
    return this.unfollow === protoOf(UserResourceImpl).unfollow ? (yield* this.ycw(request, $completion)) : (yield* await_0(this.unfollow(request), $completion));
  }
  zcw(request) {
    return toBlocking(UserResourceImpl$unfollowBlocking$slambda(this, request));
  }
}
class AnySerializer {
  constructor() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.rdq_1 = AnySerializer$additionalSerializer$lambda;
    this.sdq_1 = buildClassSerialDescriptor('Any', []);
  }
  dz() {
    return this.sdq_1;
  }
  rz(decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException.a2(toString(message));
    }
    var element = decoder.u1o();
    return toAny(this, element);
  }
  d8f(encoder, value) {
    if (typeof value === 'number') {
      encoder.u14(value);
    } else {
      if (typeof value === 'bigint') {
        encoder.v14(value);
      } else {
        if (typeof value === 'number') {
          encoder.t14(value);
        } else {
          if (typeof value === 'number') {
            encoder.w14(value);
          } else {
            if (typeof value === 'number') {
              encoder.x14(value);
            } else {
              if (typeof value === 'string') {
                encoder.z14(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.r14(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.z14(toString(this));
                  } else {
                    if (!this.rdq_1(encoder, value)) {
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
  qz(encoder, value) {
    return this.d8f(encoder, !(value == null) ? value : THROW_CCE());
  }
}
class Json_0 {
  constructor() {
    Json_instance = this;
    var tmp = this;
    tmp.ndq_1 = Json(VOID, Json$json$lambda);
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.hdq_1 = Application_getInstance().r3x_1.toString();
  }
}
class PostSerializer extends JsonContentPolymorphicSerializer {
  constructor() {
    PostSerializer_instance = null;
    super(getKClass(Post));
    PostSerializer_instance = this;
  }
  v1o(element) {
    var type = get_jsonObject(element).aj('type');
    var tmp;
    var tmp_0;
    if (type instanceof JsonPrimitive) {
      tmp_0 = type.x1o();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      switch (type.y1o()) {
        case 'text':
          tmp = Companion_getInstance_28().o1p();
          break;
        case 'photo':
          tmp = Companion_getInstance_25().o1p();
          break;
        case 'quote':
          tmp = Companion_getInstance_27().o1p();
          break;
        case 'link':
          tmp = Companion_getInstance_24().o1p();
          break;
        case 'video':
          tmp = Companion_getInstance_29().o1p();
          break;
        case 'audio':
          tmp = Companion_getInstance_22().o1p();
          break;
        case 'chat':
          tmp = Companion_getInstance_23().o1p();
          break;
        case 'answer':
          tmp = Companion_getInstance_21().o1p();
          break;
        case 'postcard':
          tmp = Companion_getInstance_26().o1p();
          break;
        default:
          tmp = Companion_instance_19.o1p();
          break;
      }
    } else {
      tmp = Companion_instance_19.o1p();
    }
    return tmp;
  }
}
//endregion
function init_work_socialhub_ktumblr_TumblrException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.lct_1);
  _this__u8e3s4.jct_1 = null;
  _this__u8e3s4.kct_1 = null;
}
var TumblrFactory_instance;
function TumblrFactory_getInstance() {
  return TumblrFactory_instance;
}
function *oAuth2Token$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.uct) ? (yield* $this.uct(request, $completion)) : (yield* await_0($this.oAuth2Token(request), $completion));
}
function *oAuth2TokenRefresh$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.vct) ? (yield* $this.vct(request, $completion)) : (yield* await_0($this.oAuth2TokenRefresh(request), $completion));
}
function *blogInfo$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.acu) ? (yield* $this.acu(request, $completion)) : (yield* await_0($this.blogInfo(request), $completion));
}
function *blogLikes$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.bcu) ? (yield* $this.bcu(request, $completion)) : (yield* await_0($this.blogLikes(request), $completion));
}
function *blogFollowers$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.ccu) ? (yield* $this.ccu(request, $completion)) : (yield* await_0($this.blogFollowers(request), $completion));
}
function *blogPosts$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.dcu) ? (yield* $this.dcu(request, $completion)) : (yield* await_0($this.blogPosts(request), $completion));
}
function *postCreate$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.ecu) ? (yield* $this.ecu(request, $completion)) : (yield* await_0($this.postCreate(request), $completion));
}
function *postEdit$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.fcu) ? (yield* $this.fcu(request, $completion)) : (yield* await_0($this.postEdit(request), $completion));
}
function *postReblog$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.gcu) ? (yield* $this.gcu(request, $completion)) : (yield* await_0($this.postReblog(request), $completion));
}
function *postDelete$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.hcu) ? (yield* $this.hcu(request, $completion)) : (yield* await_0($this.postDelete(request), $completion));
}
function *tagged$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.zcv) ? (yield* $this.zcv(request, $completion)) : (yield* await_0($this.tagged(request), $completion));
}
function *user$virtualSuspendBridge($this, $completion) {
  return jsIsFunction($this.ccw) ? (yield* $this.ccw($completion)) : (yield* await_0($this.user(), $completion));
}
function *userDashboard$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.dcw) ? (yield* $this.dcw(request, $completion)) : (yield* await_0($this.userDashboard(request), $completion));
}
function *userFollowing$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.ecw) ? (yield* $this.ecw(request, $completion)) : (yield* await_0($this.userFollowing(request), $completion));
}
function *like$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.fcw) ? (yield* $this.fcw(request, $completion)) : (yield* await_0($this.like(request), $completion));
}
function *unlike$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.gcw) ? (yield* $this.gcw(request, $completion)) : (yield* await_0($this.unlike(request), $completion));
}
function *follow$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.hcw) ? (yield* $this.hcw(request, $completion)) : (yield* await_0($this.follow(request), $completion));
}
function *unfollow$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.icw) ? (yield* $this.icw(request, $completion)) : (yield* await_0($this.unfollow(request), $completion));
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
    var containsArg = response.f55_1;
    if (200 <= containsArg ? containsArg <= 299 : false) {
      return new ResponseUnit(response.j55());
    }
    throw TumblrException.nct(response.f55_1, response.j55());
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
      throw tmp0_elvis_lhs == null ? TumblrException.mct(e) : tmp0_elvis_lhs;
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
    var this_0 = (new HttpRequest()).p54('https://api.tumblr.com/v2' + $path).r54('Authorization', this$0.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).z54($params);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $files.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var key = element.c3();
      // Inline function 'kotlin.collections.component2' call
      var pair = element.d3();
      this_0.n53(key, pair.first, pair.second);
    }
    return yield* this_0.b55($completion);
  }, 0);
}
function AbstractResourceImpl$oauthPutUnit$slambda($path, this$0, $params) {
  return constructCallableReference(function *($completion) {
    return yield* (new HttpRequest()).p54('https://api.tumblr.com/v2' + $path).r54('Authorization', this$0.gdq_1.gct()).q54(MediaType_getInstance().hdq_1).z54($params).c55($completion);
  }, 0);
}
function AuthResourceImpl$oAuth2TokenBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.uct($request, $completion);
  }, 1);
}
function AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.vct($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogInfoBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.acu($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogAvatarBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.lcu($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogLikesBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.bcu($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogFollowingBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.qcu($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogFollowersBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ccu($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogPostsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.dcu($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogQueuedPostsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.xcu($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogDraftPostsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.acv($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogSubmissionsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.dcv($request, $completion);
  }, 1);
}
function BlogResourceImpl$postCreateBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ecu($request, $completion);
  }, 1);
}
function BlogResourceImpl$postEditBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.fcu($request, $completion);
  }, 1);
}
function BlogResourceImpl$postReblogBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.gcu($request, $completion);
  }, 1);
}
function BlogResourceImpl$postDeleteBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.hcu($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogBannerBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ocv($request, $completion);
  }, 1);
}
function BlogResourceImpl$blogUpdateInfoBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.rcv($request, $completion);
  }, 1);
}
function BlogResourceImpl$postEditTagsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ucv($request, $completion);
  }, 1);
}
function BlogResourceImpl$postUpdateBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.xcv($request, $completion);
  }, 1);
}
function TaggedResourceImpl$taggedBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.zcv($request, $completion);
  }, 1);
}
function UserResourceImpl$userBlocking$slambda(this$0) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ccw($completion);
  }, 1);
}
function UserResourceImpl$userDashboardBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.dcw($request, $completion);
  }, 1);
}
function UserResourceImpl$userFollowingBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ecw($request, $completion);
  }, 1);
}
function UserResourceImpl$userLikesBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.qcw($request, $completion);
  }, 1);
}
function UserResourceImpl$likeBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.fcw($request, $completion);
  }, 1);
}
function UserResourceImpl$unlikeBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.gcw($request, $completion);
  }, 1);
}
function UserResourceImpl$followBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.hcw($request, $completion);
  }, 1);
}
function UserResourceImpl$unfollowBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.icw($request, $completion);
  }, 1);
}
function toAny($this, $receiver) {
  if ($receiver instanceof JsonPrimitive) {
    var tmp;
    if ($receiver.x1o()) {
      tmp = $receiver.y1o();
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
  $this$Json.h1n_1 = false;
  $this$Json.g1n_1 = true;
  $this$Json.i1n_1 = true;
  var tmp = $this$Json;
  // Inline function 'kotlinx.serialization.modules.SerializersModule' call
  var builder = new SerializersModuleBuilder();
  builder.l1l(PrimitiveClasses_getInstance().kg(), AnySerializer_getInstance());
  builder.l1l(getKClass(Post), PostSerializer_getInstance());
  tmp.x1n_1 = builder.n19();
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
protoOf(AuthAuthorizeUrlRequest).acx = addParam;
initMetadataForClass(AuthAuthorizeUrlRequest, 'AuthAuthorizeUrlRequest', AuthAuthorizeUrlRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRefreshRequest).acx = addParam;
initMetadataForClass(AuthOAuth2TokenRefreshRequest, 'AuthOAuth2TokenRefreshRequest', AuthOAuth2TokenRefreshRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRequest).acx = addParam;
initMetadataForClass(AuthOAuth2TokenRequest, 'AuthOAuth2TokenRequest', AuthOAuth2TokenRequest, VOID, [MapRequest]);
initMetadataForClass(BlogAvatarRequest, 'BlogAvatarRequest', BlogAvatarRequest);
initMetadataForClass(BlogBannerRequest, 'BlogBannerRequest', BlogBannerRequest);
protoOf(BlogDraftsRequest).acx = addParam;
initMetadataForClass(BlogDraftsRequest, 'BlogDraftsRequest', BlogDraftsRequest, VOID, [MapRequest]);
protoOf(BlogFollowersRequest).acx = addParam;
initMetadataForClass(BlogFollowersRequest, 'BlogFollowersRequest', BlogFollowersRequest, VOID, [MapRequest]);
protoOf(BlogFollowingRequest).acx = addParam;
initMetadataForClass(BlogFollowingRequest, 'BlogFollowingRequest', BlogFollowingRequest, VOID, [MapRequest]);
initMetadataForClass(BlogInfoRequest, 'BlogInfoRequest', BlogInfoRequest);
protoOf(BlogLikesRequest).acx = addParam;
initMetadataForClass(BlogLikesRequest, 'BlogLikesRequest', BlogLikesRequest, VOID, [MapRequest]);
protoOf(BlogPostsRequest).acx = addParam;
initMetadataForClass(BlogPostsRequest, 'BlogPostsRequest', BlogPostsRequest, VOID, [MapRequest]);
protoOf(BlogQueueRequest).acx = addParam;
initMetadataForClass(BlogQueueRequest, 'BlogQueueRequest', BlogQueueRequest, VOID, [MapRequest]);
protoOf(BlogSubmissionsRequest).acx = addParam;
initMetadataForClass(BlogSubmissionsRequest, 'BlogSubmissionsRequest', BlogSubmissionsRequest, VOID, [MapRequest]);
protoOf(BlogUpdateInfoRequest).acx = addParam;
initMetadataForClass(BlogUpdateInfoRequest, 'BlogUpdateInfoRequest', BlogUpdateInfoRequest, VOID, [MapRequest]);
initMetadataForClass(BlogPostRequest, 'BlogPostRequest', BlogPostRequest);
protoOf(BlogAudioPostRequest).acx = addParam;
initMetadataForClass(BlogAudioPostRequest, 'BlogAudioPostRequest', BlogAudioPostRequest, VOID, [MapRequest]);
protoOf(BlogChatPostRequest).acx = addParam;
initMetadataForClass(BlogChatPostRequest, 'BlogChatPostRequest', BlogChatPostRequest, VOID, [MapRequest]);
protoOf(BlogDeleteRequest).acx = addParam;
initMetadataForClass(BlogDeleteRequest, 'BlogDeleteRequest', BlogDeleteRequest, VOID, [MapRequest]);
protoOf(BlogLinkPostRequest).acx = addParam;
initMetadataForClass(BlogLinkPostRequest, 'BlogLinkPostRequest', BlogLinkPostRequest, VOID, [MapRequest]);
protoOf(BlogPhotoPostRequest).acx = addParam;
initMetadataForClass(BlogPhotoPostRequest, 'BlogPhotoPostRequest', BlogPhotoPostRequest, VOID, [MapRequest]);
protoOf(BlogPostEditTagsRequest).acx = addParam;
initMetadataForClass(BlogPostEditTagsRequest, 'BlogPostEditTagsRequest', BlogPostEditTagsRequest, VOID, [MapRequest]);
protoOf(BlogPostUpdateRequest).acx = addParam;
initMetadataForClass(BlogPostUpdateRequest, 'BlogPostUpdateRequest', BlogPostUpdateRequest, VOID, [MapRequest]);
protoOf(BlogQuotePostRequest).acx = addParam;
initMetadataForClass(BlogQuotePostRequest, 'BlogQuotePostRequest', BlogQuotePostRequest, VOID, [MapRequest]);
protoOf(BlogReblogRequest).acx = addParam;
initMetadataForClass(BlogReblogRequest, 'BlogReblogRequest', BlogReblogRequest, VOID, [MapRequest]);
protoOf(BlogTextPostRequest).acx = addParam;
initMetadataForClass(BlogTextPostRequest, 'BlogTextPostRequest', BlogTextPostRequest, VOID, [MapRequest]);
protoOf(BlogVideoPostRequest).acx = addParam;
initMetadataForClass(BlogVideoPostRequest, 'BlogVideoPostRequest', BlogVideoPostRequest, VOID, [MapRequest]);
protoOf(TaggedRequest).acx = addParam;
initMetadataForClass(TaggedRequest, 'TaggedRequest', TaggedRequest, VOID, [MapRequest]);
protoOf(UserDashboardRequest).acx = addParam;
initMetadataForClass(UserDashboardRequest, 'UserDashboardRequest', UserDashboardRequest, VOID, [MapRequest]);
protoOf(UserFollowRequest).acx = addParam;
initMetadataForClass(UserFollowRequest, 'UserFollowRequest', UserFollowRequest, VOID, [MapRequest]);
protoOf(UserFollowingRequest).acx = addParam;
initMetadataForClass(UserFollowingRequest, 'UserFollowingRequest', UserFollowingRequest, VOID, [MapRequest]);
protoOf(UserLikeRequest).acx = addParam;
initMetadataForClass(UserLikeRequest, 'UserLikeRequest', UserLikeRequest, VOID, [MapRequest]);
protoOf(UserLikesRequest).acx = addParam;
initMetadataForClass(UserLikesRequest, 'UserLikesRequest', UserLikesRequest, VOID, [MapRequest]);
protoOf(UserUnfollowRequest).acx = addParam;
initMetadataForClass(UserUnfollowRequest, 'UserUnfollowRequest', UserUnfollowRequest, VOID, [MapRequest]);
protoOf(UserUnlikeRequest).acx = addParam;
initMetadataForClass(UserUnlikeRequest, 'UserUnlikeRequest', UserUnlikeRequest, VOID, [MapRequest]);
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForClass($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Body, 'Body', Body, VOID, VOID, VOID, VOID, {0: Companion_getInstance_0});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).e1c = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Meta, 'Meta', Meta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(Response, 'Response');
initMetadataForClass(ResponseUnit, 'ResponseUnit');
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).e1c = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AuthOAuth2TokenResponse, 'AuthOAuth2TokenResponse', AuthOAuth2TokenResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).e1c = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogBannerResponse, 'BlogBannerResponse', BlogBannerResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).e1c = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowersResponse, 'BlogFollowersResponse', BlogFollowersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_4).e1c = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowingResponse, 'BlogFollowingResponse', BlogFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_5).e1c = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInfoResponse, 'BlogInfoResponse', BlogInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_6);
protoOf($serializer_6).e1c = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogLikesResponse, 'BlogLikesResponse', BlogLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_7);
protoOf($serializer_7).e1c = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogPostsResponse, 'BlogPostsResponse', BlogPostsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_8);
protoOf($serializer_8).e1c = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogUpdatedInfoResponse, 'BlogUpdatedInfoResponse', BlogUpdatedInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_9);
protoOf($serializer_9).e1c = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserDashboardResponse, 'UserDashboardResponse', UserDashboardResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_10);
protoOf($serializer_10).e1c = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserFollowingResponse, 'UserFollowingResponse', UserFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_11);
protoOf($serializer_11).e1c = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserLikesResponse, 'UserLikesResponse', UserLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_12);
protoOf($serializer_12).e1c = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserResponse, 'UserResponse', UserResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForClass(PhotoType, 'PhotoType');
initMetadataForClass(PostType, 'PostType');
initMetadataForCompanion(Companion_13);
protoOf($serializer_13).e1c = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Note, 'Note', Note, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_14);
protoOf($serializer_14).e1c = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NoteAvatar, 'NoteAvatar', NoteAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForClass(Resource, 'Resource', Resource.cd4);
initMetadataForCompanion(Companion_15);
protoOf($serializer_15).e1c = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Blog, 'Blog', Blog.hd4, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_16);
protoOf($serializer_16).e1c = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogAvatar, 'BlogAvatar', BlogAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_17);
protoOf($serializer_17).e1c = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogTheme, 'BlogTheme', BlogTheme, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_18);
protoOf($serializer_18).e1c = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Reblog, 'Reblog', Reblog, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_19);
initMetadataForClass(Post, 'Post', VOID, VOID, VOID, VOID, VOID, {0: PostSerializer_getInstance});
initMetadataForCompanion(Companion_20);
protoOf($serializer_19).e1c = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAnswerPost, 'LegacyAnswerPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_21);
protoOf($serializer_20).e1c = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAudioPost, 'LegacyAudioPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_22);
protoOf($serializer_21).e1c = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyChatPost, 'LegacyChatPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_23);
protoOf($serializer_22).e1c = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyLinkPost, 'LegacyLinkPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_24);
protoOf($serializer_23).e1c = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyPhotoPost, 'LegacyPhotoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_25);
protoOf($serializer_24).e1c = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyPostcardPost, 'LegacyPostcardPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_26);
protoOf($serializer_25).e1c = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyQuotePost, 'LegacyQuotePost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_27);
protoOf($serializer_26).e1c = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyTextPost, 'LegacyTextPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_28);
protoOf($serializer_27).e1c = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyVideoPost, 'LegacyVideoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForCompanion(Companion_29);
protoOf($serializer_28).e1c = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Dialogue, 'Dialogue', Dialogue, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_30);
protoOf($serializer_29).e1c = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Photo, 'Photo', Photo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_31);
protoOf($serializer_30).e1c = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PhotoSize, 'PhotoSize', PhotoSize, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_32);
protoOf($serializer_31).e1c = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Video, 'Video', Video, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_33);
protoOf($serializer_32).e1c = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInTrail, 'BlogInTrail', BlogInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_34);
protoOf($serializer_33).e1c = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(IdInTrail, 'IdInTrail', IdInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForCompanion(Companion_35);
protoOf($serializer_34).e1c = typeParametersSerializers;
initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Trail, 'Trail', Trail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
initMetadataForCompanion(Companion_36);
protoOf($serializer_35).e1c = typeParametersSerializers;
initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FollowerUser, 'FollowerUser', FollowerUser, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
initMetadataForCompanion(Companion_37);
protoOf($serializer_36).e1c = typeParametersSerializers;
initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(User, 'User', User.edq, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
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
