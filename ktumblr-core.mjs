import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  captureStack1fzi4aczwc4hg as captureStack,
  RuntimeException1r3t0zl97011n as RuntimeException,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  protoOf180f3jzyo7rfj as protoOf,
  to2cs3ny02qtbcb as to,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  defineProp3ur6h3slcvq4x as defineProp,
  toString30pk9tzaqopn as toString_0,
  hashCodeq5arwsb9dgti as hashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  equals2au1ep9vhcato as equals,
  getKClass3t8tygqu4lcxf as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance1vspt3xrdob1a as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  Enum3alwj03lh1n41 as Enum,
  PrimitiveClasses_getInstance6p7zmos9nw3c as PrimitiveClasses_getInstance,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  Exceptiondt2hlxn7j7vw as Exception,
  contains3ue2qo8xhmpf1 as contains,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  emptyMapr06gerzljqtm as emptyMap,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  throwIrLinkageError175icmue6aqas as throwIrLinkageError,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  IntSerializer_getInstance3pev8isxtkhc2 as IntSerializer_getInstance,
  StringSerializer_getInstance2hpyx1v3alnih as StringSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  BooleanSerializer_getInstancei6giaf3o69cd as BooleanSerializer_getInstance,
  throwArrayMissingFieldExceptionbk1mj238w44a as throwArrayMissingFieldException,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  SerializersModuleBuilderfxsfdohcdipc as SerializersModuleBuilder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import { CoroutineScopefcb5f5dwqcas as CoroutineScope } from './kotlinx-coroutines-core.mjs';
import {
  runBlocking31cbthb8fvtpp as runBlocking,
  AnySerializer_getInstanceml5s7nlbxkd9 as AnySerializer_getInstance,
} from './kmpcommon.mjs';
import {
  Jsonsmkyu9xjl7fv as Json,
  JsonContentPolymorphicSerializer1zt3sp8asmujz as JsonContentPolymorphicSerializer,
  get_jsonObject2u4z2ch1uuca9 as get_jsonObject,
  JsonPrimitive3ttzjh2ft5dnx as JsonPrimitive,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import { Application_getInstanceueakgx5l255p as Application_getInstance } from './ktor-ktor-http.mjs';
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
    this.zag_1 = clientId;
    this.aah_1 = clientSecret;
    this.bah_1 = accessToken;
    this.cah_1 = refreshToken;
  }
  dah() {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.bah_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        break $l$block;
      }
    }
    return 'Bearer ' + this.bah_1;
  }
}
class TumblrException extends RuntimeException {
  static jah(e) {
    var $this = this.je(e);
    init_work_socialhub_ktumblr_TumblrException($this);
    return $this;
  }
  static kah(status, body) {
    var $this = this.fb('status code: ' + status + ', body: ' + body);
    init_work_socialhub_ktumblr_TumblrException($this);
    $this.gah_1 = status;
    $this.hah_1 = body;
    return $this;
  }
}
class TumblrFactory_0 {
  lah(clientId, clientSecret, accessToken, refreshToken) {
    return new TumblrImpl(new TumblrAuth(clientId, clientSecret, accessToken, refreshToken));
  }
  instance(clientId, clientSecret, accessToken, refreshToken, $super) {
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    return $super === VOID ? this.lah(clientId, clientSecret, accessToken, refreshToken) : $super.lah.call(this, clientId, clientSecret, accessToken, refreshToken);
  }
}
class TumblrImpl {
  constructor(tumblrAuth) {
    this.mah_1 = tumblrAuth;
    this.nah_1 = new AuthResourceImpl(this.mah_1);
    this.oah_1 = new UserResourceImpl(this.mah_1);
    this.pah_1 = new BlogResourceImpl(this.mah_1);
    this.qah_1 = new TaggedResourceImpl(this.mah_1);
  }
  auth() {
    return this.nah_1;
  }
  user() {
    return this.oah_1;
  }
  blog() {
    return this.pah_1;
  }
  tagged() {
    return this.qah_1;
  }
}
class AuthResource {}
class BlogResource {}
class TaggedResource {}
class UserResource {}
class FileRequest {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }
  i1() {
    return this.name;
  }
  t5w() {
    return this.data;
  }
}
class MapRequest {}
function addParam(_this__u8e3s4, key, value) {
  if (value == null)
    return Unit_instance;
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.k4(key, value);
}
class AuthAuthorizeUrlRequest {
  constructor() {
    this.responseType = 'code';
    this.redirectUri = null;
    this.state = null;
    this.scope = 'write offline_access';
  }
  sah(_set____db54di) {
    this.responseType = _set____db54di;
  }
  tah() {
    return this.responseType;
  }
  a9d(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  b9d() {
    return this.redirectUri;
  }
  m8k(_set____db54di) {
    this.state = _set____db54di;
  }
  d71() {
    return this.state;
  }
  uah(_set____db54di) {
    this.scope = _set____db54di;
  }
  y9e() {
    return this.scope;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'response_type', this.responseType);
    this.rah(this_0, 'redirect_uri', this.redirectUri);
    this.rah(this_0, 'state', this.state);
    this.rah(this_0, 'scope', this.scope);
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
  wah(_set____db54di) {
    this.grantType = _set____db54di;
  }
  xah() {
    return this.grantType;
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
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'grant_type', this.grantType);
    this.rah(this_0, 'client_id', this.clientId);
    this.rah(this_0, 'client_secret', this.clientSecret);
    this.rah(this_0, 'refresh_token', this.refreshToken);
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
  wah(_set____db54di) {
    this.grantType = _set____db54di;
  }
  xah() {
    return this.grantType;
  }
  e9d(_set____db54di) {
    this.code = _set____db54di;
  }
  f9d() {
    return this.code;
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
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'grant_type', this.grantType);
    this.rah(this_0, 'code', this.code);
    this.rah(this_0, 'client_id', this.clientId);
    this.rah(this_0, 'client_secret', this.clientSecret);
    this.rah(this_0, 'redirect_uri', this.redirectUri);
    return this_0;
  }
}
class BlogAvatarRequest {
  constructor() {
    this.blogName = null;
    this.size = 0;
  }
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  t7a(_set____db54di) {
    this.size = _set____db54di;
  }
  q2() {
    return this.size;
  }
}
class BlogDraftsRequest {
  constructor() {
    this.blogName = null;
    this.beforeId = null;
    this.filter = null;
  }
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  aai(_set____db54di) {
    this.beforeId = _set____db54di;
  }
  bai() {
    return this.beforeId;
  }
  cai(_set____db54di) {
    this.filter = _set____db54di;
  }
  y57() {
    return this.filter;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'before_id', this.beforeId);
    this.rah(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogFollowersRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  r85(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'limit', this.limit);
    this.rah(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogFollowingRequest {
  constructor() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  r85(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'limit', this.limit);
    this.rah(this_0, 'offset', this.offset);
    return this_0;
  }
}
class BlogInfoRequest {
  constructor() {
    this.blogName = null;
  }
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
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
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  r85(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  dai(_set____db54di) {
    this.before = _set____db54di;
  }
  eai() {
    return this.before;
  }
  fai(_set____db54di) {
    this.after = _set____db54di;
  }
  gai() {
    return this.after;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'limit', this.limit);
    this.rah(this_0, 'offset', this.offset);
    this.rah(this_0, 'before', this.before);
    this.rah(this_0, 'after', this.after);
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
  }
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  w78(_set____db54di) {
    this.type = _set____db54di;
  }
  o6a() {
    return this.type;
  }
  m9o(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  k92(_set____db54di) {
    this.tag = _set____db54di;
  }
  r70() {
    return this.tag;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  r85(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  hai(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  iai() {
    return this.reblogInfo;
  }
  jai(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  kai() {
    return this.notesInfo;
  }
  cai(_set____db54di) {
    this.filter = _set____db54di;
  }
  y57() {
    return this.filter;
  }
  dai(_set____db54di) {
    this.before = _set____db54di;
  }
  eai() {
    return this.before;
  }
  lai(_set____db54di) {
    this.npf = _set____db54di;
  }
  mai() {
    return this.npf;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'id', this.id);
    this.rah(this_0, 'tag', this.tag);
    this.rah(this_0, 'limit', this.limit);
    this.rah(this_0, 'offset', this.offset);
    this.rah(this_0, 'reblog_info', this.reblogInfo);
    this.rah(this_0, 'notes_info', this.notesInfo);
    this.rah(this_0, 'filter', this.filter);
    this.rah(this_0, 'before', this.before);
    this.rah(this_0, 'npf', this.npf);
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
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  r85(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  cai(_set____db54di) {
    this.filter = _set____db54di;
  }
  y57() {
    return this.filter;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'limit', this.limit);
    this.rah(this_0, 'offset', this.offset);
    this.rah(this_0, 'filter', this.filter);
    return this_0;
  }
}
class BlogSubmissionsRequest {
  constructor() {
    this.blogName = null;
    this.offset = null;
    this.filter = null;
  }
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  nai(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  cai(_set____db54di) {
    this.filter = _set____db54di;
  }
  y57() {
    return this.filter;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'offset', this.offset);
    this.rah(this_0, 'filter', this.filter);
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
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
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
  m8k(_set____db54di) {
    this.state = _set____db54di;
  }
  d71() {
    return this.state;
  }
  uai(_set____db54di) {
    this.tags = _set____db54di;
  }
  s8s() {
    return this.tags;
  }
  vai(_set____db54di) {
    this.tweet = _set____db54di;
  }
  wai() {
    return this.tweet;
  }
  xai(_set____db54di) {
    this.date = _set____db54di;
  }
  yai() {
    return this.date;
  }
  zai(_set____db54di) {
    this.format = _set____db54di;
  }
  aaj() {
    return this.format;
  }
  baj(_set____db54di) {
    this.slug = _set____db54di;
  }
  caj() {
    return this.slug;
  }
  daj(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  eaj() {
    return this.nativeInlineImages;
  }
  tai() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
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
  oai(_set____db54di) {
    this.caption = _set____db54di;
  }
  pai() {
    return this.caption;
  }
  qai(_set____db54di) {
    this.externalUrl = _set____db54di;
  }
  rai() {
    return this.externalUrl;
  }
  sai(_set____db54di) {
    this.data = _set____db54di;
  }
  t5w() {
    return this.data;
  }
  vah() {
    // Inline function 'kotlin.also' call
    var this_0 = this.tai();
    this.rah(this_0, 'caption', this.caption);
    this.rah(this_0, 'external_url', this.externalUrl);
    this.rah(this_0, 'data', this.data);
    return this_0;
  }
}
class BlogChatPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.conversation = null;
  }
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
    return this.title;
  }
  faj(_set____db54di) {
    this.conversation = _set____db54di;
  }
  gaj() {
    return this.conversation;
  }
  vah() {
    // Inline function 'kotlin.also' call
    var this_0 = this.tai();
    this.rah(this_0, 'title', this.title);
    this.rah(this_0, 'conversation', this.conversation);
    return this_0;
  }
}
class BlogDeleteRequest {
  constructor() {
    this.blogName = null;
    this.id = null;
  }
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'id', this.id);
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
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
    return this.title;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  v52(_set____db54di) {
    this.description = _set____db54di;
  }
  w52() {
    return this.description;
  }
  q6n(_set____db54di) {
    this.thumbnail = _set____db54di;
  }
  r6n() {
    return this.thumbnail;
  }
  haj(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  iaj() {
    return this.excerpt;
  }
  jaj(_set____db54di) {
    this.author = _set____db54di;
  }
  f6m() {
    return this.author;
  }
  vah() {
    // Inline function 'kotlin.also' call
    var this_0 = this.tai();
    this.rah(this_0, 'title', this.title);
    this.rah(this_0, 'url', this.url);
    this.rah(this_0, 'description', this.description);
    this.rah(this_0, 'thumbnail', this.thumbnail);
    this.rah(this_0, 'excerpt', this.excerpt);
    this.rah(this_0, 'author', this.author);
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
  oai(_set____db54di) {
    this.caption = _set____db54di;
  }
  pai() {
    return this.caption;
  }
  y7a(_set____db54di) {
    this.link = _set____db54di;
  }
  z7a() {
    return this.link;
  }
  kaj(_set____db54di) {
    this.source = _set____db54di;
  }
  l2h() {
    return this.source;
  }
  laj(_set____db54di) {
    this.data = _set____db54di;
  }
  t5w() {
    return this.data;
  }
  maj(_set____db54di) {
    this.data64 = _set____db54di;
  }
  naj() {
    return this.data64;
  }
  vah() {
    // Inline function 'kotlin.also' call
    var this_0 = this.tai();
    this.rah(this_0, 'caption', this.caption);
    this.rah(this_0, 'link', this.link);
    this.rah(this_0, 'source', this.source);
    this.rah(this_0, 'data64', this.data64);
    return this_0;
  }
  oaj() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
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
        this_0.k4(tmp2, value);
      }
    }
    return this_0;
  }
}
class BlogQuotePostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.quote = null;
    this.source = null;
  }
  paj(_set____db54di) {
    this.quote = _set____db54di;
  }
  qaj() {
    return this.quote;
  }
  kaj(_set____db54di) {
    this.source = _set____db54di;
  }
  l2h() {
    return this.source;
  }
  vah() {
    // Inline function 'kotlin.also' call
    var this_0 = this.tai();
    this.rah(this_0, 'quote', this.quote);
    this.rah(this_0, 'source', this.source);
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
  yah(_set____db54di) {
    this.blogName = _set____db54di;
  }
  zah() {
    return this.blogName;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  raj(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  saj() {
    return this.reblogKey;
  }
  l7v(_set____db54di) {
    this.comment = _set____db54di;
  }
  m7v() {
    return this.comment;
  }
  daj(_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  }
  eaj() {
    return this.nativeInlineImages;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'id', this.id);
    this.rah(this_0, 'reblog_key', this.reblogKey);
    this.rah(this_0, 'comment', this.comment);
    this.rah(this_0, 'native_inline_images', this.nativeInlineImages);
    return this_0;
  }
}
class BlogTextPostRequest extends BlogPostRequest {
  constructor() {
    super();
    this.title = null;
    this.body = null;
  }
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
    return this.title;
  }
  a8z(_set____db54di) {
    this.body = _set____db54di;
  }
  b8z() {
    return this.body;
  }
  vah() {
    // Inline function 'kotlin.also' call
    var this_0 = this.tai();
    this.rah(this_0, 'title', this.title);
    this.rah(this_0, 'body', this.body);
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
  oai(_set____db54di) {
    this.caption = _set____db54di;
  }
  pai() {
    return this.caption;
  }
  taj(_set____db54di) {
    this.embed = _set____db54di;
  }
  i5d() {
    return this.embed;
  }
  sai(_set____db54di) {
    this.data = _set____db54di;
  }
  t5w() {
    return this.data;
  }
  vah() {
    // Inline function 'kotlin.also' call
    var this_0 = this.tai();
    this.rah(this_0, 'caption', this.caption);
    this.rah(this_0, 'embed', this.embed);
    this.rah(this_0, 'data', this.data);
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
  k92(_set____db54di) {
    this.tag = _set____db54di;
  }
  r70() {
    return this.tag;
  }
  dai(_set____db54di) {
    this.before = _set____db54di;
  }
  eai() {
    return this.before;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  cai(_set____db54di) {
    this.filter = _set____db54di;
  }
  y57() {
    return this.filter;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'tag', this.tag);
    this.rah(this_0, 'before', this.before);
    this.rah(this_0, 'limit', this.limit);
    this.rah(this_0, 'filter', this.filter);
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
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  r85(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  w78(_set____db54di) {
    this.type = _set____db54di;
  }
  o6a() {
    return this.type;
  }
  uaj(_set____db54di) {
    this.sinceId = _set____db54di;
  }
  s7o() {
    return this.sinceId;
  }
  hai(_set____db54di) {
    this.reblogInfo = _set____db54di;
  }
  iai() {
    return this.reblogInfo;
  }
  jai(_set____db54di) {
    this.notesInfo = _set____db54di;
  }
  kai() {
    return this.notesInfo;
  }
  lai(_set____db54di) {
    this.npf = _set____db54di;
  }
  mai() {
    return this.npf;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'limit', this.limit);
    this.rah(this_0, 'offset', this.offset);
    this.rah(this_0, 'type', this.type);
    this.rah(this_0, 'since_id', this.sinceId);
    this.rah(this_0, 'reblog_info', this.reblogInfo);
    this.rah(this_0, 'notes_info', this.notesInfo);
    this.rah(this_0, 'npf', this.npf);
    return this_0;
  }
}
class UserFollowRequest {
  constructor() {
    this.url = null;
    this.email = null;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  h5v(_set____db54di) {
    this.email = _set____db54di;
  }
  i5v() {
    return this.email;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'url', this.url);
    this.rah(this_0, 'email', this.email);
    return this_0;
  }
}
class UserFollowingRequest {
  constructor() {
    this.limit = null;
    this.offset = null;
  }
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  r85(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'limit', this.limit);
    this.rah(this_0, 'offset', this.offset);
    return this_0;
  }
}
class UserLikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  raj(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  saj() {
    return this.reblogKey;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'id', this.id);
    this.rah(this_0, 'reblog_key', this.reblogKey);
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
  n54(_set____db54di) {
    this.limit = _set____db54di;
  }
  o54() {
    return this.limit;
  }
  r85(_set____db54di) {
    this.offset = _set____db54di;
  }
  s85() {
    return this.offset;
  }
  dai(_set____db54di) {
    this.before = _set____db54di;
  }
  eai() {
    return this.before;
  }
  fai(_set____db54di) {
    this.after = _set____db54di;
  }
  gai() {
    return this.after;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'limit', this.limit);
    this.rah(this_0, 'offset', this.offset);
    this.rah(this_0, 'before', this.before);
    this.rah(this_0, 'after', this.after);
    return this_0;
  }
}
class UserUnfollowRequest {
  constructor() {
    this.url = null;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'url', this.url);
    return this_0;
  }
}
class UserUnlikeRequest {
  constructor() {
    this.id = null;
    this.reblogKey = null;
  }
  l78(_set____db54di) {
    this.id = _set____db54di;
  }
  f22() {
    return this.id;
  }
  raj(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  saj() {
    return this.reblogKey;
  }
  vah() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.q5();
    this.rah(this_0, 'id', this.id);
    this.rah(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', null, 2);
    tmp0_serialDesc.f18('meta', true);
    tmp0_serialDesc.f18('response', true);
    this.vaj_1 = tmp0_serialDesc;
  }
  waj(typeSerial0) {
    return $serializer.zaj(typeSerial0);
  }
  h19(typeParamsSerializers) {
    return this.waj(typeParamsSerializers[0]);
  }
  aak() {
    return this.vaj_1;
  }
  get $cachedDescriptor() {
    return this.aak();
  }
}
class $serializer {
  static bak() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', $this, 2);
    tmp0_serialDesc.f18('meta', true);
    tmp0_serialDesc.f18('response', true);
    $this.xaj_1 = tmp0_serialDesc;
    return $this;
  }
  cak(encoder, value) {
    var tmp0_desc = this.xaj_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.meta == null)) {
      tmp1_output.f12(tmp0_desc, 0, $serializer_getInstance(), value.meta);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.response == null)) {
      tmp1_output.f12(tmp0_desc, 1, this.yaj_1, value.response);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.cak(encoder, value instanceof Body ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.xaj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, this.yaj_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, this.yaj_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return Body.dak(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.xaj_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance()), get_nullable(this.yaj_1)];
  }
  w18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.yaj_1];
  }
  static zaj(typeSerial0) {
    var $this = this.bak();
    $this.yaj_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor() {
    Companion_getInstance();
    this.meta = null;
    this.response = null;
  }
  eak(_set____db54di) {
    this.meta = _set____db54di;
  }
  i9i() {
    return this.meta;
  }
  fak(_set____db54di) {
    this.response = _set____db54di;
  }
  x45() {
    return this.response;
  }
  static dak(seen0, meta, response, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, Companion_getInstance().vaj_1);
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
class Companion_0 {
  z26() {
    return $serializer_getInstance();
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Meta', this, 2);
    tmp0_serialDesc.f18('status', true);
    tmp0_serialDesc.f18('msg', true);
    this.gak_1 = tmp0_serialDesc;
  }
  hak(encoder, value) {
    var tmp0_desc = this.gak_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.status == null)) {
      tmp1_output.f12(tmp0_desc, 0, IntSerializer_getInstance(), value.status);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.msg == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.msg);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.hak(encoder, value instanceof Meta ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.gak_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
    return Meta.iak(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.gak_1;
  }
  v18() {
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
  jak(_set____db54di) {
    this.status = _set____db54di;
  }
  k48() {
    return this.status;
  }
  kak(_set____db54di) {
    this.msg = _set____db54di;
  }
  lak() {
    return this.msg;
  }
  static iak(seen0, status, msg, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().gak_1);
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
  h94(_set____db54di) {
    this.data = _set____db54di;
  }
  t5w() {
    return this.data;
  }
  i94(_set____db54di) {
    this.json = _set____db54di;
  }
  m26() {
    return this.json;
  }
  k48() {
    return this.status;
  }
  r() {
    return this.message;
  }
  pl() {
    return this.data;
  }
  ql() {
    return this.json;
  }
  xt() {
    return this.status;
  }
  r54() {
    return this.message;
  }
  mak(data, json, status, message) {
    return new Response(data, json, status, message);
  }
  copy(data, json, status, message, $super) {
    data = data === VOID ? this.data : data;
    json = json === VOID ? this.json : json;
    status = status === VOID ? this.status : status;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.mak(data, json, status, message) : $super.mak.call(this, data, json, status, message);
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
  i94(_set____db54di) {
    this.json = _set____db54di;
  }
  m26() {
    return this.json;
  }
  k48() {
    return this.status;
  }
  r() {
    return this.message;
  }
}
class Companion_1 {
  z26() {
    return $serializer_getInstance_0();
  }
}
class $serializer_1 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.auth.AuthOAuth2TokenResponse', this, 5);
    tmp0_serialDesc.f18('access_token', true);
    tmp0_serialDesc.f18('expires_in', true);
    tmp0_serialDesc.f18('token_type', true);
    tmp0_serialDesc.f18('scope', true);
    tmp0_serialDesc.f18('refresh_token', true);
    this.nak_1 = tmp0_serialDesc;
  }
  oak(encoder, value) {
    var tmp0_desc = this.nak_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.accessToken == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.accessToken);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.expiresIn == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.expiresIn);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.tokenType == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.tokenType);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.scope == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.scope);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.refreshToken == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.refreshToken);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.oak(encoder, value instanceof AuthOAuth2TokenResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.nak_1;
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
      tmp5_local1 = tmp9_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
            tmp5_local1 = tmp9_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp8_local4 = tmp9_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp9_input.m10(tmp0_desc);
    return AuthOAuth2TokenResponse.pak(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  xv() {
    return this.nak_1;
  }
  v18() {
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
  m8h(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  n8h() {
    return this.accessToken;
  }
  a9f(_set____db54di) {
    this.expiresIn = _set____db54di;
  }
  b9f() {
    return this.expiresIn;
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
  i9d(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  j9d() {
    return this.refreshToken;
  }
  static pak(seen0, accessToken, expiresIn, tokenType, scope, refreshToken, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().nak_1);
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
class Companion_2 {
  constructor() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qak_1 = [null, lazy(tmp_0, BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a)];
  }
  z26() {
    return $serializer_getInstance_1();
  }
}
class $serializer_2 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowersResponse', this, 2);
    tmp0_serialDesc.f18('total_users', true);
    tmp0_serialDesc.f18('users', true);
    this.rak_1 = tmp0_serialDesc;
  }
  sak(encoder, value) {
    var tmp0_desc = this.rak_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().qak_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.totalUsers == null)) {
      tmp1_output.f12(tmp0_desc, 0, IntSerializer_getInstance(), value.totalUsers);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.users == null)) {
      tmp1_output.f12(tmp0_desc, 1, tmp2_cached[1].b3(), value.users);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.sak(encoder, value instanceof BlogFollowersResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.rak_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    var tmp7_cached = Companion_getInstance_2().qak_1;
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, tmp7_cached[1].b3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, tmp7_cached[1].b3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return BlogFollowersResponse.tak(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.rak_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_2().qak_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].b3())];
  }
}
class BlogFollowersResponse {
  constructor() {
    Companion_getInstance_2();
    this.totalUsers = null;
    this.users = null;
  }
  uak(_set____db54di) {
    this.totalUsers = _set____db54di;
  }
  vak() {
    return this.totalUsers;
  }
  wak(_set____db54di) {
    this.users = _set____db54di;
  }
  o8m() {
    return this.users;
  }
  static tak(seen0, totalUsers, users, serializationConstructorMarker) {
    Companion_getInstance_2();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().rak_1);
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
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xak_1 = [lazy(tmp_0, BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi), null];
  }
  z26() {
    return $serializer_getInstance_2();
  }
}
class $serializer_3 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowingResponse', this, 2);
    tmp0_serialDesc.f18('blogs', true);
    tmp0_serialDesc.f18('total_blogs', true);
    this.yak_1 = tmp0_serialDesc;
  }
  zak(encoder, value) {
    var tmp0_desc = this.yak_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().xak_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.blogs == null)) {
      tmp1_output.f12(tmp0_desc, 0, tmp2_cached[0].b3(), value.blogs);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.totalBlogs == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.totalBlogs);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.zak(encoder, value instanceof BlogFollowingResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.yak_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    var tmp7_cached = Companion_getInstance_3().xak_1;
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, tmp7_cached[0].b3(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, tmp7_cached[0].b3(), tmp4_local0);
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
    return BlogFollowingResponse.aal(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.yak_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_3().xak_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].b3()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogFollowingResponse {
  constructor() {
    Companion_getInstance_3();
    this.blogs = null;
    this.totalBlogs = null;
  }
  bal(_set____db54di) {
    this.blogs = _set____db54di;
  }
  cal() {
    return this.blogs;
  }
  dal(_set____db54di) {
    this.totalBlogs = _set____db54di;
  }
  eal() {
    return this.totalBlogs;
  }
  static aal(seen0, blogs, totalBlogs, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().yak_1);
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
class Companion_4 {
  z26() {
    return $serializer_getInstance_3();
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogInfoResponse', this, 1);
    tmp0_serialDesc.f18('blog', true);
    this.fal_1 = tmp0_serialDesc;
  }
  gal(encoder, value) {
    var tmp0_desc = this.fal_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.f12(tmp0_desc, 0, $serializer_getInstance_12(), value.blog);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.gal(encoder, value instanceof BlogInfoResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.fal_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.l10(tmp0_desc);
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, $serializer_getInstance_12(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, $serializer_getInstance_12(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return BlogInfoResponse.hal(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.fal_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_12())];
  }
}
class BlogInfoResponse {
  constructor() {
    this.blog = null;
  }
  ial(_set____db54di) {
    this.blog = _set____db54di;
  }
  jal() {
    return this.blog;
  }
  static hal(seen0, blog, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().fal_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.blog = null;
    else
      $this.blog = blog;
    return $this;
  }
}
class Companion_5 {
  constructor() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.kal_1 = [lazy(tmp_0, BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9), null];
  }
  z26() {
    return $serializer_getInstance_4();
  }
}
class $serializer_5 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogLikesResponse', this, 2);
    tmp0_serialDesc.f18('liked_posts', true);
    tmp0_serialDesc.f18('liked_count', true);
    this.lal_1 = tmp0_serialDesc;
  }
  mal(encoder, value) {
    var tmp0_desc = this.lal_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().kal_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.f12(tmp0_desc, 0, tmp2_cached[0].b3(), value.likedPosts);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.mal(encoder, value instanceof BlogLikesResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.lal_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().kal_1;
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, tmp7_cached[0].b3(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, tmp7_cached[0].b3(), tmp4_local0);
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
    return BlogLikesResponse.nal(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.lal_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_5().kal_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].b3()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogLikesResponse {
  constructor() {
    Companion_getInstance_5();
    this.likedPosts = null;
    this.likedCount = null;
  }
  oal(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  pal() {
    return this.likedPosts;
  }
  w8s(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  x8s() {
    return this.likedCount;
  }
  static nal(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_5();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().lal_1);
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
class Companion_6 {
  constructor() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qal_1 = [null, lazy(tmp_0, BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0), null];
  }
  z26() {
    return $serializer_getInstance_5();
  }
}
class $serializer_6 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogPostsResponse', this, 3);
    tmp0_serialDesc.f18('blog', true);
    tmp0_serialDesc.f18('posts', true);
    tmp0_serialDesc.f18('total_posts', true);
    this.ral_1 = tmp0_serialDesc;
  }
  sal(encoder, value) {
    var tmp0_desc = this.ral_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().qal_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.f12(tmp0_desc, 0, $serializer_getInstance_12(), value.blog);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.posts == null)) {
      tmp1_output.f12(tmp0_desc, 1, tmp2_cached[1].b3(), value.posts);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.totalPosts == null)) {
      tmp1_output.f12(tmp0_desc, 2, IntSerializer_getInstance(), value.totalPosts);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.sal(encoder, value instanceof BlogPostsResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.ral_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    var tmp8_cached = Companion_getInstance_6().qal_1;
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, $serializer_getInstance_12(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, tmp8_cached[1].b3(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, $serializer_getInstance_12(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, tmp8_cached[1].b3(), tmp5_local1);
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
    return BlogPostsResponse.tal(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.ral_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_6().qal_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_12()), get_nullable(tmp0_cached[1].b3()), get_nullable(IntSerializer_getInstance())];
  }
}
class BlogPostsResponse {
  constructor() {
    Companion_getInstance_6();
    this.blog = null;
    this.posts = null;
    this.totalPosts = null;
  }
  ial(_set____db54di) {
    this.blog = _set____db54di;
  }
  jal() {
    return this.blog;
  }
  ual(_set____db54di) {
    this.posts = _set____db54di;
  }
  c5b() {
    return this.posts;
  }
  wal(_set____db54di) {
    this.totalPosts = _set____db54di;
  }
  xal() {
    return this.totalPosts;
  }
  static tal(seen0, blog, posts, totalPosts, serializationConstructorMarker) {
    Companion_getInstance_6();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().ral_1);
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
class Companion_7 {
  constructor() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.yal_1 = [lazy(tmp_0, UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w)];
  }
  z26() {
    return $serializer_getInstance_6();
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserDashboardResponse', this, 1);
    tmp0_serialDesc.f18('posts', true);
    this.zal_1 = tmp0_serialDesc;
  }
  aam(encoder, value) {
    var tmp0_desc = this.zal_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().yal_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.posts == null)) {
      tmp1_output.f12(tmp0_desc, 0, tmp2_cached[0].b3(), value.posts);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.aam(encoder, value instanceof UserDashboardResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.zal_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.l10(tmp0_desc);
    var tmp6_cached = Companion_getInstance_7().yal_1;
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, tmp6_cached[0].b3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, tmp6_cached[0].b3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return UserDashboardResponse.bam(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.zal_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_7().yal_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].b3())];
  }
}
class UserDashboardResponse {
  constructor() {
    Companion_getInstance_7();
    this.posts = null;
  }
  ual(_set____db54di) {
    this.posts = _set____db54di;
  }
  c5b() {
    return this.posts;
  }
  static bam(seen0, posts, serializationConstructorMarker) {
    Companion_getInstance_7();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().zal_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.posts = null;
    else
      $this.posts = posts;
    return $this;
  }
}
class Companion_8 {
  constructor() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.cam_1 = [null, lazy(tmp_0, UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5)];
  }
  z26() {
    return $serializer_getInstance_7();
  }
}
class $serializer_8 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserFollowingResponse', this, 2);
    tmp0_serialDesc.f18('total_blogs', true);
    tmp0_serialDesc.f18('blogs', true);
    this.dam_1 = tmp0_serialDesc;
  }
  eam(encoder, value) {
    var tmp0_desc = this.dam_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().cam_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.totalBlog == null)) {
      tmp1_output.f12(tmp0_desc, 0, IntSerializer_getInstance(), value.totalBlog);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.blogs == null)) {
      tmp1_output.f12(tmp0_desc, 1, tmp2_cached[1].b3(), value.blogs);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.eam(encoder, value instanceof UserFollowingResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.dam_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    var tmp7_cached = Companion_getInstance_8().cam_1;
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, tmp7_cached[1].b3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z10(tmp0_desc, 1, tmp7_cached[1].b3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp6_input.m10(tmp0_desc);
    return UserFollowingResponse.fam(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.dam_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_8().cam_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].b3())];
  }
}
class UserFollowingResponse {
  constructor() {
    Companion_getInstance_8();
    this.totalBlog = null;
    this.blogs = null;
  }
  gam(_set____db54di) {
    this.totalBlog = _set____db54di;
  }
  ham() {
    return this.totalBlog;
  }
  bal(_set____db54di) {
    this.blogs = _set____db54di;
  }
  cal() {
    return this.blogs;
  }
  static fam(seen0, totalBlog, blogs, serializationConstructorMarker) {
    Companion_getInstance_8();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().dam_1);
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
class Companion_9 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.iam_1 = [lazy(tmp_0, UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0), null];
  }
  z26() {
    return $serializer_getInstance_8();
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserLikesResponse', this, 2);
    tmp0_serialDesc.f18('liked_posts', true);
    tmp0_serialDesc.f18('liked_count', true);
    this.jam_1 = tmp0_serialDesc;
  }
  kam(encoder, value) {
    var tmp0_desc = this.jam_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().iam_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.f12(tmp0_desc, 0, tmp2_cached[0].b3(), value.likedPosts);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.kam(encoder, value instanceof UserLikesResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.jam_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    var tmp7_cached = Companion_getInstance_9().iam_1;
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, tmp7_cached[0].b3(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, tmp7_cached[0].b3(), tmp4_local0);
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
    return UserLikesResponse.lam(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.jam_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_9().iam_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].b3()), get_nullable(IntSerializer_getInstance())];
  }
}
class UserLikesResponse {
  constructor() {
    Companion_getInstance_9();
    this.likedPosts = null;
    this.likedCount = null;
  }
  oal(_set____db54di) {
    this.likedPosts = _set____db54di;
  }
  pal() {
    return this.likedPosts;
  }
  w8s(_set____db54di) {
    this.likedCount = _set____db54di;
  }
  x8s() {
    return this.likedCount;
  }
  static lam(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    Companion_getInstance_9();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().jam_1);
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
class Companion_10 {
  z26() {
    return $serializer_getInstance_9();
  }
}
class $serializer_10 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserResponse', this, 1);
    tmp0_serialDesc.f18('user', true);
    this.mam_1 = tmp0_serialDesc;
  }
  nam(encoder, value) {
    var tmp0_desc = this.mam_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.f12(tmp0_desc, 0, $serializer_getInstance_32(), value.user);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.nam(encoder, value instanceof UserResponse ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.mam_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.l10(tmp0_desc);
    if (tmp5_input.b11()) {
      tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, $serializer_getInstance_32(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z10(tmp0_desc, 0, $serializer_getInstance_32(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp5_input.m10(tmp0_desc);
    return UserResponse.oam(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.mam_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_32())];
  }
}
class UserResponse {
  constructor() {
    this.user = null;
  }
  pam(_set____db54di) {
    this.user = _set____db54di;
  }
  m3u() {
    return this.user;
  }
  static oam(seen0, user, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().mam_1);
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
  sam() {
    return this.prefix;
  }
  get name() {
    return this.i1();
  }
  get ordinal() {
    return this.v4();
  }
}
class PostType extends Enum {
  constructor(name, ordinal, value) {
    super(name, ordinal);
    this.value = value;
  }
  b3() {
    return this.value;
  }
  get name() {
    return this.i1();
  }
  get ordinal() {
    return this.v4();
  }
}
class Companion_11 {
  z26() {
    return $serializer_getInstance_10();
  }
}
class $serializer_11 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.Note', this, 9);
    tmp0_serialDesc.f18('type', true);
    tmp0_serialDesc.f18('timestamp', true);
    tmp0_serialDesc.f18('blog_name', true);
    tmp0_serialDesc.f18('blog_uuid', true);
    tmp0_serialDesc.f18('blog_url', true);
    tmp0_serialDesc.f18('followed', true);
    tmp0_serialDesc.f18('avatar_shape', true);
    tmp0_serialDesc.f18('post_id', true);
    tmp0_serialDesc.f18('reblog_parent_blog_name', true);
    this.vam_1 = tmp0_serialDesc;
  }
  wam(encoder, value) {
    var tmp0_desc = this.vam_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.type == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.timestamp == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.blogName == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.blogName);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.blogUuid == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.blogUuid);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.blogUrl == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.blogUrl);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.isFollowed == null)) {
      tmp1_output.f12(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.j12(tmp0_desc, 6) ? true : !(value.avatarShape == null)) {
      tmp1_output.f12(tmp0_desc, 6, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.j12(tmp0_desc, 7) ? true : !(value.postId == null)) {
      tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.postId);
    }
    if (tmp1_output.j12(tmp0_desc, 8) ? true : !(value.reblogParentBlogName == null)) {
      tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.reblogParentBlogName);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.wam(encoder, value instanceof Note ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.vam_1;
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
      tmp5_local1 = tmp13_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.z10(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.z10(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
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
            tmp5_local1 = tmp13_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp9_local5 = tmp13_input.z10(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.z10(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
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
    return Note.xam(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  xv() {
    return this.vam_1;
  }
  v18() {
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
  o6a() {
    return this.type;
  }
  yam() {
    return this.timestamp;
  }
  zah() {
    return this.blogName;
  }
  zam() {
    return this.blogUuid;
  }
  aan() {
    return this.blogUrl;
  }
  k91() {
    return this.isFollowed;
  }
  ban() {
    return this.avatarShape;
  }
  d7x() {
    return this.postId;
  }
  can() {
    return this.reblogParentBlogName;
  }
  static xam(seen0, type, timestamp, blogName, blogUuid, blogUrl, isFollowed, avatarShape, postId, reblogParentBlogName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().vam_1);
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
class Companion_12 {
  z26() {
    return $serializer_getInstance_11();
  }
}
class $serializer_12 {
  constructor() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.NoteAvatar', this, 2);
    tmp0_serialDesc.f18('64', true);
    tmp0_serialDesc.f18('128', true);
    this.dan_1 = tmp0_serialDesc;
  }
  ean(encoder, value) {
    var tmp0_desc = this.dan_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.size64 == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.size64);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.size128 == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.size128);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.ean(encoder, value instanceof NoteAvatar ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.dan_1;
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
    return NoteAvatar.fan(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.dan_1;
  }
  v18() {
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
  gan(_set____db54di) {
    this.size64 = _set____db54di;
  }
  han() {
    return this.size64;
  }
  ian(_set____db54di) {
    this.size128 = _set____db54di;
  }
  jan() {
    return this.size128;
  }
  static fan(seen0, size64, size128, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().dan_1);
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
  static kan() {
    return createThis(this);
  }
}
class Companion_13 {
  constructor() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.lan_1 = [null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Blog$Companion$$childSerializers$_anonymous__tmgjug), null, null, null, null, null, null, null];
  }
  z26() {
    return $serializer_getInstance_12();
  }
}
class $serializer_13 {
  constructor() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Blog', this, 18);
    tmp0_serialDesc.f18('title', true);
    tmp0_serialDesc.f18('posts', true);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('updated', true);
    tmp0_serialDesc.f18('description', true);
    tmp0_serialDesc.f18('ask', true);
    tmp0_serialDesc.f18('ask_anon', true);
    tmp0_serialDesc.f18('followed', true);
    tmp0_serialDesc.f18('likes', true);
    tmp0_serialDesc.f18('is_blocked_from_primary', true);
    tmp0_serialDesc.f18('avatar', true);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('theme', true);
    tmp0_serialDesc.f18('admin', true);
    tmp0_serialDesc.f18('ask_page_title', true);
    tmp0_serialDesc.f18('is_nsfw', true);
    tmp0_serialDesc.f18('primary', true);
    tmp0_serialDesc.f18('followers', true);
    this.man_1 = tmp0_serialDesc;
  }
  nan(encoder, value) {
    var tmp0_desc = this.man_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().lan_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.postCount === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.postCount);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.f12(tmp0_desc, 3, IntSerializer_getInstance(), value.updated);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.description == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.isAsk == null)) {
      tmp1_output.f12(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isAsk);
    }
    if (tmp1_output.j12(tmp0_desc, 6) ? true : !(value.isAskAnon == null)) {
      tmp1_output.f12(tmp0_desc, 6, BooleanSerializer_getInstance(), value.isAskAnon);
    }
    if (tmp1_output.j12(tmp0_desc, 7) ? true : !(value.isFollowed == null)) {
      tmp1_output.f12(tmp0_desc, 7, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.j12(tmp0_desc, 8) ? true : !(value.likeCount == null)) {
      tmp1_output.f12(tmp0_desc, 8, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.j12(tmp0_desc, 9) ? true : !(value.isBlockedFromPrimary == null)) {
      tmp1_output.f12(tmp0_desc, 9, BooleanSerializer_getInstance(), value.isBlockedFromPrimary);
    }
    if (tmp1_output.j12(tmp0_desc, 10) ? true : !(value.avatar == null)) {
      tmp1_output.f12(tmp0_desc, 10, tmp2_cached[10].b3(), value.avatar);
    }
    if (tmp1_output.j12(tmp0_desc, 11) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 11, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 12) ? true : !(value.theme == null)) {
      tmp1_output.f12(tmp0_desc, 12, $serializer_getInstance_14(), value.theme);
    }
    if (tmp1_output.j12(tmp0_desc, 13) ? true : !(value.isAdmin == null)) {
      tmp1_output.f12(tmp0_desc, 13, BooleanSerializer_getInstance(), value.isAdmin);
    }
    if (tmp1_output.j12(tmp0_desc, 14) ? true : !(value.askPageTitle == null)) {
      tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.askPageTitle);
    }
    if (tmp1_output.j12(tmp0_desc, 15) ? true : !(value.isNSFW == null)) {
      tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isNSFW);
    }
    if (tmp1_output.j12(tmp0_desc, 16) ? true : !(value.isPrimary == null)) {
      tmp1_output.f12(tmp0_desc, 16, BooleanSerializer_getInstance(), value.isPrimary);
    }
    if (tmp1_output.j12(tmp0_desc, 17) ? true : !(value.followerCount == null)) {
      tmp1_output.f12(tmp0_desc, 17, IntSerializer_getInstance(), value.followerCount);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.nan(encoder, value instanceof Blog ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.man_1;
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
    var tmp22_input = decoder.l10(tmp0_desc);
    var tmp23_cached = Companion_getInstance_13().lan_1;
    if (tmp22_input.b11()) {
      tmp4_local0 = tmp22_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.q10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.z10(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.z10(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.z10(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.z10(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.z10(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.z10(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.z10(tmp0_desc, 10, tmp23_cached[10].b3(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.z10(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.z10(tmp0_desc, 12, $serializer_getInstance_14(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.z10(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.z10(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.z10(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.q10(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.z10(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.z10(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.z10(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.z10(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.z10(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.z10(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.z10(tmp0_desc, 10, tmp23_cached[10].b3(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.z10(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.z10(tmp0_desc, 12, $serializer_getInstance_14(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.z10(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.z10(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.z10(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp22_input.m10(tmp0_desc);
    return Blog.oan(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  }
  xv() {
    return this.man_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_13().lan_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[10].b3()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_14()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class Blog extends Resource {
  constructor() {
    return new.target.pan();
  }
  static pan() {
    Companion_getInstance_13();
    var $this = this.kan();
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
  o8s(_set____db54di) {
    this.title = _set____db54di;
  }
  n6i() {
    return this.title;
  }
  qan(_set____db54di) {
    this.postCount = _set____db54di;
  }
  ran() {
    return this.postCount;
  }
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  san(_set____db54di) {
    this.updated = _set____db54di;
  }
  tan() {
    return this.updated;
  }
  v52(_set____db54di) {
    this.description = _set____db54di;
  }
  w52() {
    return this.description;
  }
  uan(_set____db54di) {
    this.isAsk = _set____db54di;
  }
  van() {
    return this.isAsk;
  }
  wan(_set____db54di) {
    this.isAskAnon = _set____db54di;
  }
  xan() {
    return this.isAskAnon;
  }
  yan(_set____db54di) {
    this.isFollowed = _set____db54di;
  }
  k91() {
    return this.isFollowed;
  }
  q6o() {
    return this.likeCount;
  }
  zan() {
    return this.isBlockedFromPrimary;
  }
  y52() {
    return this.avatar;
  }
  d48() {
    return this.url;
  }
  aao() {
    return this.theme;
  }
  y95() {
    return this.isAdmin;
  }
  bao() {
    return this.askPageTitle;
  }
  cao() {
    return this.isNSFW;
  }
  dao() {
    return this.isPrimary;
  }
  eao() {
    return this.followerCount;
  }
  static oan(seen0, title, postCount, name, updated, description, isAsk, isAskAnon, isFollowed, likeCount, isBlockedFromPrimary, avatar, url, theme, isAdmin, askPageTitle, isNSFW, isPrimary, followerCount, serializationConstructorMarker) {
    Companion_getInstance_13();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().man_1);
    }
    var $this = this.kan();
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
class Companion_14 {
  z26() {
    return $serializer_getInstance_13();
  }
}
class $serializer_14 {
  constructor() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.BlogAvatar', this, 3);
    tmp0_serialDesc.f18('width', true);
    tmp0_serialDesc.f18('height', true);
    tmp0_serialDesc.f18('url', true);
    this.fao_1 = tmp0_serialDesc;
  }
  gao(encoder, value) {
    var tmp0_desc = this.fao_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.f12(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.f12(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.gao(encoder, value instanceof BlogAvatar ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.fao_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
    return BlogAvatar.hao(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.fao_1;
  }
  v18() {
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
  p8q(_set____db54di) {
    this.width = _set____db54di;
  }
  r6h() {
    return this.width;
  }
  q8q(_set____db54di) {
    this.height = _set____db54di;
  }
  t6h() {
    return this.height;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  static hao(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().fao_1);
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
class Companion_15 {
  z26() {
    return $serializer_getInstance_14();
  }
}
class $serializer_15 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.BlogTheme', this, 16);
    tmp0_serialDesc.f18('avatar_shape', true);
    tmp0_serialDesc.f18('background_color', true);
    tmp0_serialDesc.f18('body_font', true);
    tmp0_serialDesc.f18('header_image', true);
    tmp0_serialDesc.f18('header_image_focused', true);
    tmp0_serialDesc.f18('header_image_poster', true);
    tmp0_serialDesc.f18('header_image_scaled', true);
    tmp0_serialDesc.f18('header_stretch', true);
    tmp0_serialDesc.f18('link_color', true);
    tmp0_serialDesc.f18('show_avatar', true);
    tmp0_serialDesc.f18('show_description', true);
    tmp0_serialDesc.f18('show_header_image', true);
    tmp0_serialDesc.f18('show_title', true);
    tmp0_serialDesc.f18('title_color', true);
    tmp0_serialDesc.f18('title_font', true);
    tmp0_serialDesc.f18('title_font_weight', true);
    this.iao_1 = tmp0_serialDesc;
  }
  jao(encoder, value) {
    var tmp0_desc = this.iao_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.avatarShape == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.backgroundColor == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.backgroundColor);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.bodyFont == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.bodyFont);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.headerImage == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.headerImage);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.headerImageFocused == null)) {
      tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.headerImageFocused);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.headerImagePoster == null)) {
      tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.headerImagePoster);
    }
    if (tmp1_output.j12(tmp0_desc, 6) ? true : !(value.headerImageScaled == null)) {
      tmp1_output.f12(tmp0_desc, 6, StringSerializer_getInstance(), value.headerImageScaled);
    }
    if (tmp1_output.j12(tmp0_desc, 7) ? true : !(value.isHeaderStretch === false)) {
      tmp1_output.t11(tmp0_desc, 7, value.isHeaderStretch);
    }
    if (tmp1_output.j12(tmp0_desc, 8) ? true : !(value.linkColor == null)) {
      tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.linkColor);
    }
    if (tmp1_output.j12(tmp0_desc, 9) ? true : !(value.isShowAvatar === false)) {
      tmp1_output.t11(tmp0_desc, 9, value.isShowAvatar);
    }
    if (tmp1_output.j12(tmp0_desc, 10) ? true : !(value.isShowDescription === false)) {
      tmp1_output.t11(tmp0_desc, 10, value.isShowDescription);
    }
    if (tmp1_output.j12(tmp0_desc, 11) ? true : !(value.isShowHeaderImage === false)) {
      tmp1_output.t11(tmp0_desc, 11, value.isShowHeaderImage);
    }
    if (tmp1_output.j12(tmp0_desc, 12) ? true : !(value.isShowTitle === false)) {
      tmp1_output.t11(tmp0_desc, 12, value.isShowTitle);
    }
    if (tmp1_output.j12(tmp0_desc, 13) ? true : !(value.titleColor == null)) {
      tmp1_output.f12(tmp0_desc, 13, StringSerializer_getInstance(), value.titleColor);
    }
    if (tmp1_output.j12(tmp0_desc, 14) ? true : !(value.titleFont == null)) {
      tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.titleFont);
    }
    if (tmp1_output.j12(tmp0_desc, 15) ? true : !(value.titleFontWeight == null)) {
      tmp1_output.f12(tmp0_desc, 15, StringSerializer_getInstance(), value.titleFontWeight);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.jao(encoder, value instanceof BlogTheme ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.iao_1;
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
    var tmp20_input = decoder.l10(tmp0_desc);
    if (tmp20_input.b11()) {
      tmp4_local0 = tmp20_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.z10(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.n10(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.n10(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.n10(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.n10(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.n10(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.z10(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
            tmp9_local5 = tmp20_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.z10(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.n10(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
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
            tmp17_local13 = tmp20_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.z10(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp20_input.m10(tmp0_desc);
    return BlogTheme.kao(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  xv() {
    return this.iao_1;
  }
  v18() {
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
  lao(_set____db54di) {
    this.avatarShape = _set____db54di;
  }
  ban() {
    return this.avatarShape;
  }
  mao(_set____db54di) {
    this.backgroundColor = _set____db54di;
  }
  nao() {
    return this.backgroundColor;
  }
  oao(_set____db54di) {
    this.bodyFont = _set____db54di;
  }
  pao() {
    return this.bodyFont;
  }
  qao(_set____db54di) {
    this.headerImage = _set____db54di;
  }
  rao() {
    return this.headerImage;
  }
  sao(_set____db54di) {
    this.headerImageFocused = _set____db54di;
  }
  tao() {
    return this.headerImageFocused;
  }
  uao(_set____db54di) {
    this.headerImagePoster = _set____db54di;
  }
  vao() {
    return this.headerImagePoster;
  }
  wao(_set____db54di) {
    this.headerImageScaled = _set____db54di;
  }
  xao() {
    return this.headerImageScaled;
  }
  yao(_set____db54di) {
    this.isHeaderStretch = _set____db54di;
  }
  zao() {
    return this.isHeaderStretch;
  }
  aap() {
    return this.linkColor;
  }
  bap() {
    return this.isShowAvatar;
  }
  cap() {
    return this.isShowDescription;
  }
  dap() {
    return this.isShowHeaderImage;
  }
  eap() {
    return this.isShowTitle;
  }
  fap() {
    return this.titleColor;
  }
  gap() {
    return this.titleFont;
  }
  hap() {
    return this.titleFontWeight;
  }
  static kao(seen0, avatarShape, backgroundColor, bodyFont, headerImage, headerImageFocused, headerImagePoster, headerImageScaled, isHeaderStretch, linkColor, isShowAvatar, isShowDescription, isShowHeaderImage, isShowTitle, titleColor, titleFont, titleFontWeight, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().iao_1);
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
class Companion_16 {
  z26() {
    return $serializer_getInstance_15();
  }
}
class $serializer_16 {
  constructor() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Reblog', this, 2);
    tmp0_serialDesc.f18('comment', true);
    tmp0_serialDesc.f18('tree_html', true);
    this.iap_1 = tmp0_serialDesc;
  }
  jap(encoder, value) {
    var tmp0_desc = this.iap_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.comment == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.comment);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.treeHtml == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.treeHtml);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.jap(encoder, value instanceof Reblog ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.iap_1;
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
    return Reblog.kap(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.iap_1;
  }
  v18() {
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
  l7v(_set____db54di) {
    this.comment = _set____db54di;
  }
  m7v() {
    return this.comment;
  }
  lap(_set____db54di) {
    this.treeHtml = _set____db54di;
  }
  map() {
    return this.treeHtml;
  }
  static kap(seen0, comment, treeHtml, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().iap_1);
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
class Companion_17 {
  z26() {
    return PostSerializer_getInstance();
  }
}
class Post {
  constructor() {
    return new.target.nap();
  }
  static nap() {
    return createThis(this);
  }
  oap() {
    return this instanceof LegacyTextPost ? this : null;
  }
  pap() {
    return this instanceof LegacyPhotoPost ? this : null;
  }
  qap() {
    return this instanceof LegacyQuotePost ? this : null;
  }
  rap() {
    return this instanceof LegacyLinkPost ? this : null;
  }
  sap() {
    return this instanceof LegacyVideoPost ? this : null;
  }
  tap() {
    return this instanceof LegacyAnswerPost ? this : null;
  }
  get asLegacyTextPost() {
    return this.oap();
  }
  get asLegacyPhotoPost() {
    return this.pap();
  }
  get asLegacyQuotePost() {
    return this.qap();
  }
  get asLegacyLinkPost() {
    return this.rap();
  }
  get asLegacyVideoPost() {
    return this.sap();
  }
  get asLegacyAnswerPost() {
    return this.tap();
  }
  get blogName() {
    return this.zah();
  }
  set blogName(value) {
    this.yah(value);
  }
  get idString() {
    return this.vap();
  }
  set idString(value) {
    this.uap(value);
  }
  get genesisPostId() {
    return this.xap();
  }
  set genesisPostId(value) {
    this.wap(value);
  }
  get postUrl() {
    return this.zap();
  }
  set postUrl(value) {
    this.yap(value);
  }
  get parentPostUrl() {
    return this.baq();
  }
  set parentPostUrl(value) {
    this.aaq(value);
  }
  get type() {
    return this.o6a();
  }
  set type(value) {
    this.w78(value);
  }
  get timestamp() {
    return this.yam();
  }
  set timestamp(value) {
    this.caq(value);
  }
  get date() {
    return this.yai();
  }
  set date(value) {
    this.xai(value);
  }
  get format() {
    return this.aaj();
  }
  set format(value) {
    this.zai(value);
  }
  get reblogKey() {
    return this.saj();
  }
  set reblogKey(value) {
    this.raj(value);
  }
  get tags() {
    return this.s8s();
  }
  set tags(value) {
    this.s8x(value);
  }
  get isBookmarklet() {
    return this.eaq();
  }
  set isBookmarklet(value) {
    this.daq(value);
  }
  get isMobile() {
    return this.gaq();
  }
  set isMobile(value) {
    this.faq(value);
  }
  get sourceUrl() {
    return this.f9v();
  }
  set sourceUrl(value) {
    this.haq(value);
  }
  get sourceTitle() {
    return this.jaq();
  }
  set sourceTitle(value) {
    this.iaq(value);
  }
  get isLiked() {
    return this.j90();
  }
  set isLiked(value) {
    this.kaq(value);
  }
  get state() {
    return this.d71();
  }
  set state(value) {
    this.m8k(value);
  }
  get title() {
    return this.n6i();
  }
  set title(value) {
    this.o8s(value);
  }
  get body() {
    return this.b8z();
  }
  set body(value) {
    this.a8z(value);
  }
  get noteCount() {
    return this.maq();
  }
  set noteCount(value) {
    this.laq(value);
  }
  get summary() {
    return this.w8z();
  }
  set summary(value) {
    this.v8z(value);
  }
  get slug() {
    return this.caj();
  }
  set slug(value) {
    this.baj(value);
  }
  get rebloggedFromId() {
    return this.oaq();
  }
  set rebloggedFromId(value) {
    this.naq(value);
  }
  get rebloggedFromUrl() {
    return this.qaq();
  }
  set rebloggedFromUrl(value) {
    this.paq(value);
  }
  get rebloggedFromName() {
    return this.saq();
  }
  set rebloggedFromName(value) {
    this.raq(value);
  }
  get rebloggedFromTitle() {
    return this.uaq();
  }
  set rebloggedFromTitle(value) {
    this.taq(value);
  }
  get rebloggedFromUuid() {
    return this.waq();
  }
  set rebloggedFromUuid(value) {
    this.vaq(value);
  }
  get rebloggedFromCanMessage() {
    return this.yaq();
  }
  set rebloggedFromCanMessage(value) {
    this.xaq(value);
  }
  get rebloggedFromFollowing() {
    return this.aar();
  }
  set rebloggedFromFollowing(value) {
    this.zaq(value);
  }
  get rebloggedRootId() {
    return this.car();
  }
  set rebloggedRootId(value) {
    this.bar(value);
  }
  get rebloggedRootUrl() {
    return this.ear();
  }
  set rebloggedRootUrl(value) {
    this.dar(value);
  }
  get rebloggedRootName() {
    return this.gar();
  }
  set rebloggedRootName(value) {
    this.far(value);
  }
  get rebloggedRootTitle() {
    return this.iar();
  }
  set rebloggedRootTitle(value) {
    this.har(value);
  }
  get rebloggedRootUuid() {
    return this.kar();
  }
  set rebloggedRootUuid(value) {
    this.jar(value);
  }
  get rebloggedRootCanMessage() {
    return this.mar();
  }
  set rebloggedRootCanMessage(value) {
    this.lar(value);
  }
  get rebloggedRootFollowing() {
    return this.oar();
  }
  set rebloggedRootFollowing(value) {
    this.nar(value);
  }
  get notes() {
    return this.qar();
  }
  set notes(value) {
    this.par(value);
  }
  get blog() {
    return this.jal();
  }
  set blog(value) {
    this.ial(value);
  }
  get reblog() {
    return this.o9h();
  }
  set reblog(value) {
    this.rar(value);
  }
  get trail() {
    return this.tar();
  }
  set trail(value) {
    this.sar(value);
  }
}
class Companion_18 {
  constructor() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.uar_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1), null, null, null, null];
  }
  z26() {
    return $serializer_getInstance_16();
  }
}
class $serializer_17 {
  constructor() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAnswerPost', this, 44);
    tmp0_serialDesc.f18('blog_name', false);
    tmp0_serialDesc.f18('id_string', false);
    tmp0_serialDesc.f18('genesis_post_id', false);
    tmp0_serialDesc.f18('post_url', false);
    tmp0_serialDesc.f18('parent_post_url', false);
    tmp0_serialDesc.f18('type', false);
    tmp0_serialDesc.f18('timestamp', false);
    tmp0_serialDesc.f18('date', false);
    tmp0_serialDesc.f18('format', false);
    tmp0_serialDesc.f18('reblog_key', false);
    tmp0_serialDesc.f18('tags', false);
    tmp0_serialDesc.f18('bookmarklet', false);
    tmp0_serialDesc.f18('mobile', false);
    tmp0_serialDesc.f18('source_url', false);
    tmp0_serialDesc.f18('source_title', false);
    tmp0_serialDesc.f18('liked', false);
    tmp0_serialDesc.f18('state', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('body', false);
    tmp0_serialDesc.f18('note_count', false);
    tmp0_serialDesc.f18('summary', false);
    tmp0_serialDesc.f18('slug', false);
    tmp0_serialDesc.f18('reblogged_from_id', false);
    tmp0_serialDesc.f18('reblogged_from_url', false);
    tmp0_serialDesc.f18('reblogged_from_name', false);
    tmp0_serialDesc.f18('reblogged_from_title', false);
    tmp0_serialDesc.f18('reblogged_from_uuid', false);
    tmp0_serialDesc.f18('reblogged_from_can_message', false);
    tmp0_serialDesc.f18('reblogged_from_following', false);
    tmp0_serialDesc.f18('reblogged_root_id', false);
    tmp0_serialDesc.f18('reblogged_root_url', false);
    tmp0_serialDesc.f18('reblogged_root_name', false);
    tmp0_serialDesc.f18('reblogged_root_title', false);
    tmp0_serialDesc.f18('reblogged_root_uuid', false);
    tmp0_serialDesc.f18('reblogged_root_can_message', false);
    tmp0_serialDesc.f18('reblogged_root_following', false);
    tmp0_serialDesc.f18('notes', false);
    tmp0_serialDesc.f18('blog', false);
    tmp0_serialDesc.f18('reblog', false);
    tmp0_serialDesc.f18('trail', false);
    tmp0_serialDesc.f18('asking_name', true);
    tmp0_serialDesc.f18('asking_url', true);
    tmp0_serialDesc.f18('question', true);
    tmp0_serialDesc.f18('answer', true);
    this.var_1 = tmp0_serialDesc;
  }
  war(encoder, value) {
    var tmp0_desc = this.var_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().uar_1;
    tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.xar_1);
    tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.yar_1);
    tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.zar_1);
    tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.aas_1);
    tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.bas_1);
    tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.cas_1);
    tmp1_output.f12(tmp0_desc, 6, IntSerializer_getInstance(), value.das_1);
    tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.eas_1);
    tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.fas_1);
    tmp1_output.f12(tmp0_desc, 9, StringSerializer_getInstance(), value.gas_1);
    tmp1_output.f12(tmp0_desc, 10, tmp2_cached[10].b3(), value.has_1);
    tmp1_output.f12(tmp0_desc, 11, BooleanSerializer_getInstance(), value.ias_1);
    tmp1_output.f12(tmp0_desc, 12, BooleanSerializer_getInstance(), value.jas_1);
    tmp1_output.f12(tmp0_desc, 13, StringSerializer_getInstance(), value.kas_1);
    tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.las_1);
    tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.mas_1);
    tmp1_output.f12(tmp0_desc, 16, StringSerializer_getInstance(), value.nas_1);
    tmp1_output.f12(tmp0_desc, 17, StringSerializer_getInstance(), value.oas_1);
    tmp1_output.f12(tmp0_desc, 18, StringSerializer_getInstance(), value.pas_1);
    tmp1_output.f12(tmp0_desc, 19, IntSerializer_getInstance(), value.qas_1);
    tmp1_output.f12(tmp0_desc, 20, StringSerializer_getInstance(), value.ras_1);
    tmp1_output.f12(tmp0_desc, 21, StringSerializer_getInstance(), value.sas_1);
    tmp1_output.f12(tmp0_desc, 22, StringSerializer_getInstance(), value.tas_1);
    tmp1_output.f12(tmp0_desc, 23, StringSerializer_getInstance(), value.uas_1);
    tmp1_output.f12(tmp0_desc, 24, StringSerializer_getInstance(), value.vas_1);
    tmp1_output.f12(tmp0_desc, 25, StringSerializer_getInstance(), value.was_1);
    tmp1_output.f12(tmp0_desc, 26, StringSerializer_getInstance(), value.xas_1);
    tmp1_output.f12(tmp0_desc, 27, BooleanSerializer_getInstance(), value.yas_1);
    tmp1_output.f12(tmp0_desc, 28, BooleanSerializer_getInstance(), value.zas_1);
    tmp1_output.f12(tmp0_desc, 29, StringSerializer_getInstance(), value.aat_1);
    tmp1_output.f12(tmp0_desc, 30, StringSerializer_getInstance(), value.bat_1);
    tmp1_output.f12(tmp0_desc, 31, StringSerializer_getInstance(), value.cat_1);
    tmp1_output.f12(tmp0_desc, 32, StringSerializer_getInstance(), value.dat_1);
    tmp1_output.f12(tmp0_desc, 33, StringSerializer_getInstance(), value.eat_1);
    tmp1_output.f12(tmp0_desc, 34, BooleanSerializer_getInstance(), value.fat_1);
    tmp1_output.f12(tmp0_desc, 35, BooleanSerializer_getInstance(), value.gat_1);
    tmp1_output.f12(tmp0_desc, 36, tmp2_cached[36].b3(), value.hat_1);
    tmp1_output.f12(tmp0_desc, 37, $serializer_getInstance_12(), value.iat_1);
    tmp1_output.f12(tmp0_desc, 38, $serializer_getInstance_15(), value.jat_1);
    tmp1_output.f12(tmp0_desc, 39, tmp2_cached[39].b3(), value.kat_1);
    if (tmp1_output.j12(tmp0_desc, 40) ? true : !(value.askingName == null)) {
      tmp1_output.f12(tmp0_desc, 40, StringSerializer_getInstance(), value.askingName);
    }
    if (tmp1_output.j12(tmp0_desc, 41) ? true : !(value.askingUrl == null)) {
      tmp1_output.f12(tmp0_desc, 41, StringSerializer_getInstance(), value.askingUrl);
    }
    if (tmp1_output.j12(tmp0_desc, 42) ? true : !(value.question == null)) {
      tmp1_output.f12(tmp0_desc, 42, StringSerializer_getInstance(), value.question);
    }
    if (tmp1_output.j12(tmp0_desc, 43) ? true : !(value.answer == null)) {
      tmp1_output.f12(tmp0_desc, 43, StringSerializer_getInstance(), value.answer);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.war(encoder, value instanceof LegacyAnswerPost ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.var_1;
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
    var tmp49_input = decoder.l10(tmp0_desc);
    var tmp50_cached = Companion_getInstance_18().uar_1;
    if (tmp49_input.b11()) {
      tmp5_local0 = tmp49_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.z10(tmp0_desc, 10, tmp50_cached[10].b3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.z10(tmp0_desc, 36, tmp50_cached[36].b3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.z10(tmp0_desc, 39, tmp50_cached[39].b3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.z10(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.z10(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.z10(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.z10(tmp0_desc, 10, tmp50_cached[10].b3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.z10(tmp0_desc, 36, tmp50_cached[36].b3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.z10(tmp0_desc, 39, tmp50_cached[39].b3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.z10(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.z10(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.z10(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp49_input.m10(tmp0_desc);
    return LegacyAnswerPost.lat(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  xv() {
    return this.var_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_18().uar_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].b3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].b3()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].b3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAnswerPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.mat(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static mat(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_18();
    var $this = this.nap();
    $this.xar_1 = blogName;
    $this.yar_1 = idString;
    $this.zar_1 = genesisPostId;
    $this.aas_1 = postUrl;
    $this.bas_1 = parentPostUrl;
    $this.cas_1 = type;
    $this.das_1 = timestamp;
    $this.eas_1 = date;
    $this.fas_1 = format;
    $this.gas_1 = reblogKey;
    $this.has_1 = tags;
    $this.ias_1 = isBookmarklet;
    $this.jas_1 = isMobile;
    $this.kas_1 = sourceUrl;
    $this.las_1 = sourceTitle;
    $this.mas_1 = isLiked;
    $this.nas_1 = state;
    $this.oas_1 = title;
    $this.pas_1 = body;
    $this.qas_1 = noteCount;
    $this.ras_1 = summary;
    $this.sas_1 = slug;
    $this.tas_1 = rebloggedFromId;
    $this.uas_1 = rebloggedFromUrl;
    $this.vas_1 = rebloggedFromName;
    $this.was_1 = rebloggedFromTitle;
    $this.xas_1 = rebloggedFromUuid;
    $this.yas_1 = rebloggedFromCanMessage;
    $this.zas_1 = rebloggedFromFollowing;
    $this.aat_1 = rebloggedRootId;
    $this.bat_1 = rebloggedRootUrl;
    $this.cat_1 = rebloggedRootName;
    $this.dat_1 = rebloggedRootTitle;
    $this.eat_1 = rebloggedRootUuid;
    $this.fat_1 = rebloggedRootCanMessage;
    $this.gat_1 = rebloggedRootFollowing;
    $this.hat_1 = notes;
    $this.iat_1 = blog;
    $this.jat_1 = reblog;
    $this.kat_1 = trail;
    $this.askingName = null;
    $this.askingUrl = null;
    $this.question = null;
    $this.answer = null;
    return $this;
  }
  yah(_set____db54di) {
    this.xar_1 = _set____db54di;
  }
  zah() {
    return this.xar_1;
  }
  uap(_set____db54di) {
    this.yar_1 = _set____db54di;
  }
  vap() {
    return this.yar_1;
  }
  wap(_set____db54di) {
    this.zar_1 = _set____db54di;
  }
  xap() {
    return this.zar_1;
  }
  yap(_set____db54di) {
    this.aas_1 = _set____db54di;
  }
  zap() {
    return this.aas_1;
  }
  aaq(_set____db54di) {
    this.bas_1 = _set____db54di;
  }
  baq() {
    return this.bas_1;
  }
  w78(_set____db54di) {
    this.cas_1 = _set____db54di;
  }
  o6a() {
    return this.cas_1;
  }
  caq(_set____db54di) {
    this.das_1 = _set____db54di;
  }
  yam() {
    return this.das_1;
  }
  xai(_set____db54di) {
    this.eas_1 = _set____db54di;
  }
  yai() {
    return this.eas_1;
  }
  zai(_set____db54di) {
    this.fas_1 = _set____db54di;
  }
  aaj() {
    return this.fas_1;
  }
  raj(_set____db54di) {
    this.gas_1 = _set____db54di;
  }
  saj() {
    return this.gas_1;
  }
  s8x(_set____db54di) {
    this.has_1 = _set____db54di;
  }
  s8s() {
    return this.has_1;
  }
  daq(_set____db54di) {
    this.ias_1 = _set____db54di;
  }
  eaq() {
    return this.ias_1;
  }
  faq(_set____db54di) {
    this.jas_1 = _set____db54di;
  }
  gaq() {
    return this.jas_1;
  }
  haq(_set____db54di) {
    this.kas_1 = _set____db54di;
  }
  f9v() {
    return this.kas_1;
  }
  iaq(_set____db54di) {
    this.las_1 = _set____db54di;
  }
  jaq() {
    return this.las_1;
  }
  kaq(_set____db54di) {
    this.mas_1 = _set____db54di;
  }
  j90() {
    return this.mas_1;
  }
  m8k(_set____db54di) {
    this.nas_1 = _set____db54di;
  }
  d71() {
    return this.nas_1;
  }
  o8s(_set____db54di) {
    this.oas_1 = _set____db54di;
  }
  n6i() {
    return this.oas_1;
  }
  a8z(_set____db54di) {
    this.pas_1 = _set____db54di;
  }
  b8z() {
    return this.pas_1;
  }
  laq(_set____db54di) {
    this.qas_1 = _set____db54di;
  }
  maq() {
    return this.qas_1;
  }
  v8z(_set____db54di) {
    this.ras_1 = _set____db54di;
  }
  w8z() {
    return this.ras_1;
  }
  baj(_set____db54di) {
    this.sas_1 = _set____db54di;
  }
  caj() {
    return this.sas_1;
  }
  naq(_set____db54di) {
    this.tas_1 = _set____db54di;
  }
  oaq() {
    return this.tas_1;
  }
  paq(_set____db54di) {
    this.uas_1 = _set____db54di;
  }
  qaq() {
    return this.uas_1;
  }
  raq(_set____db54di) {
    this.vas_1 = _set____db54di;
  }
  saq() {
    return this.vas_1;
  }
  taq(_set____db54di) {
    this.was_1 = _set____db54di;
  }
  uaq() {
    return this.was_1;
  }
  vaq(_set____db54di) {
    this.xas_1 = _set____db54di;
  }
  waq() {
    return this.xas_1;
  }
  xaq(_set____db54di) {
    this.yas_1 = _set____db54di;
  }
  yaq() {
    return this.yas_1;
  }
  zaq(_set____db54di) {
    this.zas_1 = _set____db54di;
  }
  aar() {
    return this.zas_1;
  }
  bar(_set____db54di) {
    this.aat_1 = _set____db54di;
  }
  car() {
    return this.aat_1;
  }
  dar(_set____db54di) {
    this.bat_1 = _set____db54di;
  }
  ear() {
    return this.bat_1;
  }
  far(_set____db54di) {
    this.cat_1 = _set____db54di;
  }
  gar() {
    return this.cat_1;
  }
  har(_set____db54di) {
    this.dat_1 = _set____db54di;
  }
  iar() {
    return this.dat_1;
  }
  jar(_set____db54di) {
    this.eat_1 = _set____db54di;
  }
  kar() {
    return this.eat_1;
  }
  lar(_set____db54di) {
    this.fat_1 = _set____db54di;
  }
  mar() {
    return this.fat_1;
  }
  nar(_set____db54di) {
    this.gat_1 = _set____db54di;
  }
  oar() {
    return this.gat_1;
  }
  par(_set____db54di) {
    this.hat_1 = _set____db54di;
  }
  qar() {
    return this.hat_1;
  }
  ial(_set____db54di) {
    this.iat_1 = _set____db54di;
  }
  jal() {
    return this.iat_1;
  }
  rar(_set____db54di) {
    this.jat_1 = _set____db54di;
  }
  o9h() {
    return this.jat_1;
  }
  sar(_set____db54di) {
    this.kat_1 = _set____db54di;
  }
  tar() {
    return this.kat_1;
  }
  nat() {
    return this.askingName;
  }
  oat() {
    return this.askingUrl;
  }
  pat() {
    return this.question;
  }
  qat() {
    return this.answer;
  }
  static lat(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, askingName, askingUrl, question, answer, serializationConstructorMarker) {
    Companion_getInstance_18();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_16().var_1);
    }
    var $this = this.nap();
    $this.xar_1 = blogName;
    $this.yar_1 = idString;
    $this.zar_1 = genesisPostId;
    $this.aas_1 = postUrl;
    $this.bas_1 = parentPostUrl;
    $this.cas_1 = type;
    $this.das_1 = timestamp;
    $this.eas_1 = date;
    $this.fas_1 = format;
    $this.gas_1 = reblogKey;
    $this.has_1 = tags;
    $this.ias_1 = isBookmarklet;
    $this.jas_1 = isMobile;
    $this.kas_1 = sourceUrl;
    $this.las_1 = sourceTitle;
    $this.mas_1 = isLiked;
    $this.nas_1 = state;
    $this.oas_1 = title;
    $this.pas_1 = body;
    $this.qas_1 = noteCount;
    $this.ras_1 = summary;
    $this.sas_1 = slug;
    $this.tas_1 = rebloggedFromId;
    $this.uas_1 = rebloggedFromUrl;
    $this.vas_1 = rebloggedFromName;
    $this.was_1 = rebloggedFromTitle;
    $this.xas_1 = rebloggedFromUuid;
    $this.yas_1 = rebloggedFromCanMessage;
    $this.zas_1 = rebloggedFromFollowing;
    $this.aat_1 = rebloggedRootId;
    $this.bat_1 = rebloggedRootUrl;
    $this.cat_1 = rebloggedRootName;
    $this.dat_1 = rebloggedRootTitle;
    $this.eat_1 = rebloggedRootUuid;
    $this.fat_1 = rebloggedRootCanMessage;
    $this.gat_1 = rebloggedRootFollowing;
    $this.hat_1 = notes;
    $this.iat_1 = blog;
    $this.jat_1 = reblog;
    $this.kat_1 = trail;
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
class Companion_19 {
  constructor() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.rat_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1), null];
  }
  z26() {
    return $serializer_getInstance_17();
  }
}
class $serializer_18 {
  constructor() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAudioPost', this, 41);
    tmp0_serialDesc.f18('blog_name', false);
    tmp0_serialDesc.f18('id_string', false);
    tmp0_serialDesc.f18('genesis_post_id', false);
    tmp0_serialDesc.f18('post_url', false);
    tmp0_serialDesc.f18('parent_post_url', false);
    tmp0_serialDesc.f18('type', false);
    tmp0_serialDesc.f18('timestamp', false);
    tmp0_serialDesc.f18('date', false);
    tmp0_serialDesc.f18('format', false);
    tmp0_serialDesc.f18('reblog_key', false);
    tmp0_serialDesc.f18('tags', false);
    tmp0_serialDesc.f18('bookmarklet', false);
    tmp0_serialDesc.f18('mobile', false);
    tmp0_serialDesc.f18('source_url', false);
    tmp0_serialDesc.f18('source_title', false);
    tmp0_serialDesc.f18('liked', false);
    tmp0_serialDesc.f18('state', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('body', false);
    tmp0_serialDesc.f18('note_count', false);
    tmp0_serialDesc.f18('summary', false);
    tmp0_serialDesc.f18('slug', false);
    tmp0_serialDesc.f18('reblogged_from_id', false);
    tmp0_serialDesc.f18('reblogged_from_url', false);
    tmp0_serialDesc.f18('reblogged_from_name', false);
    tmp0_serialDesc.f18('reblogged_from_title', false);
    tmp0_serialDesc.f18('reblogged_from_uuid', false);
    tmp0_serialDesc.f18('reblogged_from_can_message', false);
    tmp0_serialDesc.f18('reblogged_from_following', false);
    tmp0_serialDesc.f18('reblogged_root_id', false);
    tmp0_serialDesc.f18('reblogged_root_url', false);
    tmp0_serialDesc.f18('reblogged_root_name', false);
    tmp0_serialDesc.f18('reblogged_root_title', false);
    tmp0_serialDesc.f18('reblogged_root_uuid', false);
    tmp0_serialDesc.f18('reblogged_root_can_message', false);
    tmp0_serialDesc.f18('reblogged_root_following', false);
    tmp0_serialDesc.f18('notes', false);
    tmp0_serialDesc.f18('blog', false);
    tmp0_serialDesc.f18('reblog', false);
    tmp0_serialDesc.f18('trail', false);
    tmp0_serialDesc.f18('caption', true);
    this.sat_1 = tmp0_serialDesc;
  }
  tat(encoder, value) {
    var tmp0_desc = this.sat_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().rat_1;
    tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.uat_1);
    tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.vat_1);
    tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.wat_1);
    tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.xat_1);
    tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.yat_1);
    tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.zat_1);
    tmp1_output.f12(tmp0_desc, 6, IntSerializer_getInstance(), value.aau_1);
    tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.bau_1);
    tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.cau_1);
    tmp1_output.f12(tmp0_desc, 9, StringSerializer_getInstance(), value.dau_1);
    tmp1_output.f12(tmp0_desc, 10, tmp2_cached[10].b3(), value.eau_1);
    tmp1_output.f12(tmp0_desc, 11, BooleanSerializer_getInstance(), value.fau_1);
    tmp1_output.f12(tmp0_desc, 12, BooleanSerializer_getInstance(), value.gau_1);
    tmp1_output.f12(tmp0_desc, 13, StringSerializer_getInstance(), value.hau_1);
    tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.iau_1);
    tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.jau_1);
    tmp1_output.f12(tmp0_desc, 16, StringSerializer_getInstance(), value.kau_1);
    tmp1_output.f12(tmp0_desc, 17, StringSerializer_getInstance(), value.lau_1);
    tmp1_output.f12(tmp0_desc, 18, StringSerializer_getInstance(), value.mau_1);
    tmp1_output.f12(tmp0_desc, 19, IntSerializer_getInstance(), value.nau_1);
    tmp1_output.f12(tmp0_desc, 20, StringSerializer_getInstance(), value.oau_1);
    tmp1_output.f12(tmp0_desc, 21, StringSerializer_getInstance(), value.pau_1);
    tmp1_output.f12(tmp0_desc, 22, StringSerializer_getInstance(), value.qau_1);
    tmp1_output.f12(tmp0_desc, 23, StringSerializer_getInstance(), value.rau_1);
    tmp1_output.f12(tmp0_desc, 24, StringSerializer_getInstance(), value.sau_1);
    tmp1_output.f12(tmp0_desc, 25, StringSerializer_getInstance(), value.tau_1);
    tmp1_output.f12(tmp0_desc, 26, StringSerializer_getInstance(), value.uau_1);
    tmp1_output.f12(tmp0_desc, 27, BooleanSerializer_getInstance(), value.vau_1);
    tmp1_output.f12(tmp0_desc, 28, BooleanSerializer_getInstance(), value.wau_1);
    tmp1_output.f12(tmp0_desc, 29, StringSerializer_getInstance(), value.xau_1);
    tmp1_output.f12(tmp0_desc, 30, StringSerializer_getInstance(), value.yau_1);
    tmp1_output.f12(tmp0_desc, 31, StringSerializer_getInstance(), value.zau_1);
    tmp1_output.f12(tmp0_desc, 32, StringSerializer_getInstance(), value.aav_1);
    tmp1_output.f12(tmp0_desc, 33, StringSerializer_getInstance(), value.bav_1);
    tmp1_output.f12(tmp0_desc, 34, BooleanSerializer_getInstance(), value.cav_1);
    tmp1_output.f12(tmp0_desc, 35, BooleanSerializer_getInstance(), value.dav_1);
    tmp1_output.f12(tmp0_desc, 36, tmp2_cached[36].b3(), value.eav_1);
    tmp1_output.f12(tmp0_desc, 37, $serializer_getInstance_12(), value.fav_1);
    tmp1_output.f12(tmp0_desc, 38, $serializer_getInstance_15(), value.gav_1);
    tmp1_output.f12(tmp0_desc, 39, tmp2_cached[39].b3(), value.hav_1);
    if (tmp1_output.j12(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.f12(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.tat(encoder, value instanceof LegacyAudioPost ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.sat_1;
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
    var tmp46_input = decoder.l10(tmp0_desc);
    var tmp47_cached = Companion_getInstance_19().rat_1;
    if (tmp46_input.b11()) {
      tmp5_local0 = tmp46_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.z10(tmp0_desc, 10, tmp47_cached[10].b3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.z10(tmp0_desc, 36, tmp47_cached[36].b3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.z10(tmp0_desc, 39, tmp47_cached[39].b3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.z10(tmp0_desc, 10, tmp47_cached[10].b3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.z10(tmp0_desc, 36, tmp47_cached[36].b3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.z10(tmp0_desc, 39, tmp47_cached[39].b3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp46_input.m10(tmp0_desc);
    return LegacyAudioPost.iav(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  xv() {
    return this.sat_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_19().rat_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].b3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].b3()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].b3()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyAudioPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.jav(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static jav(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_19();
    var $this = this.nap();
    $this.uat_1 = blogName;
    $this.vat_1 = idString;
    $this.wat_1 = genesisPostId;
    $this.xat_1 = postUrl;
    $this.yat_1 = parentPostUrl;
    $this.zat_1 = type;
    $this.aau_1 = timestamp;
    $this.bau_1 = date;
    $this.cau_1 = format;
    $this.dau_1 = reblogKey;
    $this.eau_1 = tags;
    $this.fau_1 = isBookmarklet;
    $this.gau_1 = isMobile;
    $this.hau_1 = sourceUrl;
    $this.iau_1 = sourceTitle;
    $this.jau_1 = isLiked;
    $this.kau_1 = state;
    $this.lau_1 = title;
    $this.mau_1 = body;
    $this.nau_1 = noteCount;
    $this.oau_1 = summary;
    $this.pau_1 = slug;
    $this.qau_1 = rebloggedFromId;
    $this.rau_1 = rebloggedFromUrl;
    $this.sau_1 = rebloggedFromName;
    $this.tau_1 = rebloggedFromTitle;
    $this.uau_1 = rebloggedFromUuid;
    $this.vau_1 = rebloggedFromCanMessage;
    $this.wau_1 = rebloggedFromFollowing;
    $this.xau_1 = rebloggedRootId;
    $this.yau_1 = rebloggedRootUrl;
    $this.zau_1 = rebloggedRootName;
    $this.aav_1 = rebloggedRootTitle;
    $this.bav_1 = rebloggedRootUuid;
    $this.cav_1 = rebloggedRootCanMessage;
    $this.dav_1 = rebloggedRootFollowing;
    $this.eav_1 = notes;
    $this.fav_1 = blog;
    $this.gav_1 = reblog;
    $this.hav_1 = trail;
    $this.caption = null;
    return $this;
  }
  yah(_set____db54di) {
    this.uat_1 = _set____db54di;
  }
  zah() {
    return this.uat_1;
  }
  uap(_set____db54di) {
    this.vat_1 = _set____db54di;
  }
  vap() {
    return this.vat_1;
  }
  wap(_set____db54di) {
    this.wat_1 = _set____db54di;
  }
  xap() {
    return this.wat_1;
  }
  yap(_set____db54di) {
    this.xat_1 = _set____db54di;
  }
  zap() {
    return this.xat_1;
  }
  aaq(_set____db54di) {
    this.yat_1 = _set____db54di;
  }
  baq() {
    return this.yat_1;
  }
  w78(_set____db54di) {
    this.zat_1 = _set____db54di;
  }
  o6a() {
    return this.zat_1;
  }
  caq(_set____db54di) {
    this.aau_1 = _set____db54di;
  }
  yam() {
    return this.aau_1;
  }
  xai(_set____db54di) {
    this.bau_1 = _set____db54di;
  }
  yai() {
    return this.bau_1;
  }
  zai(_set____db54di) {
    this.cau_1 = _set____db54di;
  }
  aaj() {
    return this.cau_1;
  }
  raj(_set____db54di) {
    this.dau_1 = _set____db54di;
  }
  saj() {
    return this.dau_1;
  }
  s8x(_set____db54di) {
    this.eau_1 = _set____db54di;
  }
  s8s() {
    return this.eau_1;
  }
  daq(_set____db54di) {
    this.fau_1 = _set____db54di;
  }
  eaq() {
    return this.fau_1;
  }
  faq(_set____db54di) {
    this.gau_1 = _set____db54di;
  }
  gaq() {
    return this.gau_1;
  }
  haq(_set____db54di) {
    this.hau_1 = _set____db54di;
  }
  f9v() {
    return this.hau_1;
  }
  iaq(_set____db54di) {
    this.iau_1 = _set____db54di;
  }
  jaq() {
    return this.iau_1;
  }
  kaq(_set____db54di) {
    this.jau_1 = _set____db54di;
  }
  j90() {
    return this.jau_1;
  }
  m8k(_set____db54di) {
    this.kau_1 = _set____db54di;
  }
  d71() {
    return this.kau_1;
  }
  o8s(_set____db54di) {
    this.lau_1 = _set____db54di;
  }
  n6i() {
    return this.lau_1;
  }
  a8z(_set____db54di) {
    this.mau_1 = _set____db54di;
  }
  b8z() {
    return this.mau_1;
  }
  laq(_set____db54di) {
    this.nau_1 = _set____db54di;
  }
  maq() {
    return this.nau_1;
  }
  v8z(_set____db54di) {
    this.oau_1 = _set____db54di;
  }
  w8z() {
    return this.oau_1;
  }
  baj(_set____db54di) {
    this.pau_1 = _set____db54di;
  }
  caj() {
    return this.pau_1;
  }
  naq(_set____db54di) {
    this.qau_1 = _set____db54di;
  }
  oaq() {
    return this.qau_1;
  }
  paq(_set____db54di) {
    this.rau_1 = _set____db54di;
  }
  qaq() {
    return this.rau_1;
  }
  raq(_set____db54di) {
    this.sau_1 = _set____db54di;
  }
  saq() {
    return this.sau_1;
  }
  taq(_set____db54di) {
    this.tau_1 = _set____db54di;
  }
  uaq() {
    return this.tau_1;
  }
  vaq(_set____db54di) {
    this.uau_1 = _set____db54di;
  }
  waq() {
    return this.uau_1;
  }
  xaq(_set____db54di) {
    this.vau_1 = _set____db54di;
  }
  yaq() {
    return this.vau_1;
  }
  zaq(_set____db54di) {
    this.wau_1 = _set____db54di;
  }
  aar() {
    return this.wau_1;
  }
  bar(_set____db54di) {
    this.xau_1 = _set____db54di;
  }
  car() {
    return this.xau_1;
  }
  dar(_set____db54di) {
    this.yau_1 = _set____db54di;
  }
  ear() {
    return this.yau_1;
  }
  far(_set____db54di) {
    this.zau_1 = _set____db54di;
  }
  gar() {
    return this.zau_1;
  }
  har(_set____db54di) {
    this.aav_1 = _set____db54di;
  }
  iar() {
    return this.aav_1;
  }
  jar(_set____db54di) {
    this.bav_1 = _set____db54di;
  }
  kar() {
    return this.bav_1;
  }
  lar(_set____db54di) {
    this.cav_1 = _set____db54di;
  }
  mar() {
    return this.cav_1;
  }
  nar(_set____db54di) {
    this.dav_1 = _set____db54di;
  }
  oar() {
    return this.dav_1;
  }
  par(_set____db54di) {
    this.eav_1 = _set____db54di;
  }
  qar() {
    return this.eav_1;
  }
  ial(_set____db54di) {
    this.fav_1 = _set____db54di;
  }
  jal() {
    return this.fav_1;
  }
  rar(_set____db54di) {
    this.gav_1 = _set____db54di;
  }
  o9h() {
    return this.gav_1;
  }
  sar(_set____db54di) {
    this.hav_1 = _set____db54di;
  }
  tar() {
    return this.hav_1;
  }
  oai(_set____db54di) {
    this.caption = _set____db54di;
  }
  pai() {
    return this.caption;
  }
  static iav(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, serializationConstructorMarker) {
    Companion_getInstance_19();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_17().sat_1);
    }
    var $this = this.nap();
    $this.uat_1 = blogName;
    $this.vat_1 = idString;
    $this.wat_1 = genesisPostId;
    $this.xat_1 = postUrl;
    $this.yat_1 = parentPostUrl;
    $this.zat_1 = type;
    $this.aau_1 = timestamp;
    $this.bau_1 = date;
    $this.cau_1 = format;
    $this.dau_1 = reblogKey;
    $this.eau_1 = tags;
    $this.fau_1 = isBookmarklet;
    $this.gau_1 = isMobile;
    $this.hau_1 = sourceUrl;
    $this.iau_1 = sourceTitle;
    $this.jau_1 = isLiked;
    $this.kau_1 = state;
    $this.lau_1 = title;
    $this.mau_1 = body;
    $this.nau_1 = noteCount;
    $this.oau_1 = summary;
    $this.pau_1 = slug;
    $this.qau_1 = rebloggedFromId;
    $this.rau_1 = rebloggedFromUrl;
    $this.sau_1 = rebloggedFromName;
    $this.tau_1 = rebloggedFromTitle;
    $this.uau_1 = rebloggedFromUuid;
    $this.vau_1 = rebloggedFromCanMessage;
    $this.wau_1 = rebloggedFromFollowing;
    $this.xau_1 = rebloggedRootId;
    $this.yau_1 = rebloggedRootUrl;
    $this.zau_1 = rebloggedRootName;
    $this.aav_1 = rebloggedRootTitle;
    $this.bav_1 = rebloggedRootUuid;
    $this.cav_1 = rebloggedRootCanMessage;
    $this.dav_1 = rebloggedRootFollowing;
    $this.eav_1 = notes;
    $this.fav_1 = blog;
    $this.gav_1 = reblog;
    $this.hav_1 = trail;
    if (0 === (seen1 & 256))
      $this.caption = null;
    else
      $this.caption = caption;
    return $this;
  }
}
class Companion_20 {
  constructor() {
    Companion_instance_20 = this;
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
    tmp.kav_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, lazy(tmp_6, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2)];
  }
  z26() {
    return $serializer_getInstance_18();
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyChatPost', this, 41);
    tmp0_serialDesc.f18('blog_name', false);
    tmp0_serialDesc.f18('id_string', false);
    tmp0_serialDesc.f18('genesis_post_id', false);
    tmp0_serialDesc.f18('post_url', false);
    tmp0_serialDesc.f18('parent_post_url', false);
    tmp0_serialDesc.f18('type', false);
    tmp0_serialDesc.f18('timestamp', false);
    tmp0_serialDesc.f18('date', false);
    tmp0_serialDesc.f18('format', false);
    tmp0_serialDesc.f18('reblog_key', false);
    tmp0_serialDesc.f18('tags', false);
    tmp0_serialDesc.f18('bookmarklet', false);
    tmp0_serialDesc.f18('mobile', false);
    tmp0_serialDesc.f18('source_url', false);
    tmp0_serialDesc.f18('source_title', false);
    tmp0_serialDesc.f18('liked', false);
    tmp0_serialDesc.f18('state', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('body', false);
    tmp0_serialDesc.f18('note_count', false);
    tmp0_serialDesc.f18('summary', false);
    tmp0_serialDesc.f18('slug', false);
    tmp0_serialDesc.f18('reblogged_from_id', false);
    tmp0_serialDesc.f18('reblogged_from_url', false);
    tmp0_serialDesc.f18('reblogged_from_name', false);
    tmp0_serialDesc.f18('reblogged_from_title', false);
    tmp0_serialDesc.f18('reblogged_from_uuid', false);
    tmp0_serialDesc.f18('reblogged_from_can_message', false);
    tmp0_serialDesc.f18('reblogged_from_following', false);
    tmp0_serialDesc.f18('reblogged_root_id', false);
    tmp0_serialDesc.f18('reblogged_root_url', false);
    tmp0_serialDesc.f18('reblogged_root_name', false);
    tmp0_serialDesc.f18('reblogged_root_title', false);
    tmp0_serialDesc.f18('reblogged_root_uuid', false);
    tmp0_serialDesc.f18('reblogged_root_can_message', false);
    tmp0_serialDesc.f18('reblogged_root_following', false);
    tmp0_serialDesc.f18('notes', false);
    tmp0_serialDesc.f18('blog', false);
    tmp0_serialDesc.f18('reblog', false);
    tmp0_serialDesc.f18('trail', false);
    tmp0_serialDesc.f18('dialogue', true);
    this.lav_1 = tmp0_serialDesc;
  }
  mav(encoder, value) {
    var tmp0_desc = this.lav_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().kav_1;
    tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.nav_1);
    tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.oav_1);
    tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.pav_1);
    tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.qav_1);
    tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.rav_1);
    tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.sav_1);
    tmp1_output.f12(tmp0_desc, 6, IntSerializer_getInstance(), value.tav_1);
    tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.uav_1);
    tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.vav_1);
    tmp1_output.f12(tmp0_desc, 9, StringSerializer_getInstance(), value.wav_1);
    tmp1_output.f12(tmp0_desc, 10, tmp2_cached[10].b3(), value.xav_1);
    tmp1_output.f12(tmp0_desc, 11, BooleanSerializer_getInstance(), value.yav_1);
    tmp1_output.f12(tmp0_desc, 12, BooleanSerializer_getInstance(), value.zav_1);
    tmp1_output.f12(tmp0_desc, 13, StringSerializer_getInstance(), value.aaw_1);
    tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.baw_1);
    tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.caw_1);
    tmp1_output.f12(tmp0_desc, 16, StringSerializer_getInstance(), value.daw_1);
    tmp1_output.f12(tmp0_desc, 17, StringSerializer_getInstance(), value.eaw_1);
    tmp1_output.f12(tmp0_desc, 18, StringSerializer_getInstance(), value.faw_1);
    tmp1_output.f12(tmp0_desc, 19, IntSerializer_getInstance(), value.gaw_1);
    tmp1_output.f12(tmp0_desc, 20, StringSerializer_getInstance(), value.haw_1);
    tmp1_output.f12(tmp0_desc, 21, StringSerializer_getInstance(), value.iaw_1);
    tmp1_output.f12(tmp0_desc, 22, StringSerializer_getInstance(), value.jaw_1);
    tmp1_output.f12(tmp0_desc, 23, StringSerializer_getInstance(), value.kaw_1);
    tmp1_output.f12(tmp0_desc, 24, StringSerializer_getInstance(), value.law_1);
    tmp1_output.f12(tmp0_desc, 25, StringSerializer_getInstance(), value.maw_1);
    tmp1_output.f12(tmp0_desc, 26, StringSerializer_getInstance(), value.naw_1);
    tmp1_output.f12(tmp0_desc, 27, BooleanSerializer_getInstance(), value.oaw_1);
    tmp1_output.f12(tmp0_desc, 28, BooleanSerializer_getInstance(), value.paw_1);
    tmp1_output.f12(tmp0_desc, 29, StringSerializer_getInstance(), value.qaw_1);
    tmp1_output.f12(tmp0_desc, 30, StringSerializer_getInstance(), value.raw_1);
    tmp1_output.f12(tmp0_desc, 31, StringSerializer_getInstance(), value.saw_1);
    tmp1_output.f12(tmp0_desc, 32, StringSerializer_getInstance(), value.taw_1);
    tmp1_output.f12(tmp0_desc, 33, StringSerializer_getInstance(), value.uaw_1);
    tmp1_output.f12(tmp0_desc, 34, BooleanSerializer_getInstance(), value.vaw_1);
    tmp1_output.f12(tmp0_desc, 35, BooleanSerializer_getInstance(), value.waw_1);
    tmp1_output.f12(tmp0_desc, 36, tmp2_cached[36].b3(), value.xaw_1);
    tmp1_output.f12(tmp0_desc, 37, $serializer_getInstance_12(), value.yaw_1);
    tmp1_output.f12(tmp0_desc, 38, $serializer_getInstance_15(), value.zaw_1);
    tmp1_output.f12(tmp0_desc, 39, tmp2_cached[39].b3(), value.aax_1);
    if (tmp1_output.j12(tmp0_desc, 40) ? true : !(value.dialogue == null)) {
      tmp1_output.f12(tmp0_desc, 40, tmp2_cached[40].b3(), value.dialogue);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.mav(encoder, value instanceof LegacyChatPost ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.lav_1;
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
    var tmp46_input = decoder.l10(tmp0_desc);
    var tmp47_cached = Companion_getInstance_20().kav_1;
    if (tmp46_input.b11()) {
      tmp5_local0 = tmp46_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.z10(tmp0_desc, 10, tmp47_cached[10].b3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.z10(tmp0_desc, 36, tmp47_cached[36].b3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.z10(tmp0_desc, 39, tmp47_cached[39].b3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.z10(tmp0_desc, 40, tmp47_cached[40].b3(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.z10(tmp0_desc, 10, tmp47_cached[10].b3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.z10(tmp0_desc, 36, tmp47_cached[36].b3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.z10(tmp0_desc, 39, tmp47_cached[39].b3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.z10(tmp0_desc, 40, tmp47_cached[40].b3(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp46_input.m10(tmp0_desc);
    return LegacyChatPost.bax(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  xv() {
    return this.lav_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_20().kav_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].b3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].b3()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].b3()), get_nullable(tmp0_cached[40].b3())];
  }
}
class LegacyChatPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.cax(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static cax(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_20();
    var $this = this.nap();
    $this.nav_1 = blogName;
    $this.oav_1 = idString;
    $this.pav_1 = genesisPostId;
    $this.qav_1 = postUrl;
    $this.rav_1 = parentPostUrl;
    $this.sav_1 = type;
    $this.tav_1 = timestamp;
    $this.uav_1 = date;
    $this.vav_1 = format;
    $this.wav_1 = reblogKey;
    $this.xav_1 = tags;
    $this.yav_1 = isBookmarklet;
    $this.zav_1 = isMobile;
    $this.aaw_1 = sourceUrl;
    $this.baw_1 = sourceTitle;
    $this.caw_1 = isLiked;
    $this.daw_1 = state;
    $this.eaw_1 = title;
    $this.faw_1 = body;
    $this.gaw_1 = noteCount;
    $this.haw_1 = summary;
    $this.iaw_1 = slug;
    $this.jaw_1 = rebloggedFromId;
    $this.kaw_1 = rebloggedFromUrl;
    $this.law_1 = rebloggedFromName;
    $this.maw_1 = rebloggedFromTitle;
    $this.naw_1 = rebloggedFromUuid;
    $this.oaw_1 = rebloggedFromCanMessage;
    $this.paw_1 = rebloggedFromFollowing;
    $this.qaw_1 = rebloggedRootId;
    $this.raw_1 = rebloggedRootUrl;
    $this.saw_1 = rebloggedRootName;
    $this.taw_1 = rebloggedRootTitle;
    $this.uaw_1 = rebloggedRootUuid;
    $this.vaw_1 = rebloggedRootCanMessage;
    $this.waw_1 = rebloggedRootFollowing;
    $this.xaw_1 = notes;
    $this.yaw_1 = blog;
    $this.zaw_1 = reblog;
    $this.aax_1 = trail;
    $this.dialogue = null;
    return $this;
  }
  yah(_set____db54di) {
    this.nav_1 = _set____db54di;
  }
  zah() {
    return this.nav_1;
  }
  uap(_set____db54di) {
    this.oav_1 = _set____db54di;
  }
  vap() {
    return this.oav_1;
  }
  wap(_set____db54di) {
    this.pav_1 = _set____db54di;
  }
  xap() {
    return this.pav_1;
  }
  yap(_set____db54di) {
    this.qav_1 = _set____db54di;
  }
  zap() {
    return this.qav_1;
  }
  aaq(_set____db54di) {
    this.rav_1 = _set____db54di;
  }
  baq() {
    return this.rav_1;
  }
  w78(_set____db54di) {
    this.sav_1 = _set____db54di;
  }
  o6a() {
    return this.sav_1;
  }
  caq(_set____db54di) {
    this.tav_1 = _set____db54di;
  }
  yam() {
    return this.tav_1;
  }
  xai(_set____db54di) {
    this.uav_1 = _set____db54di;
  }
  yai() {
    return this.uav_1;
  }
  zai(_set____db54di) {
    this.vav_1 = _set____db54di;
  }
  aaj() {
    return this.vav_1;
  }
  raj(_set____db54di) {
    this.wav_1 = _set____db54di;
  }
  saj() {
    return this.wav_1;
  }
  s8x(_set____db54di) {
    this.xav_1 = _set____db54di;
  }
  s8s() {
    return this.xav_1;
  }
  daq(_set____db54di) {
    this.yav_1 = _set____db54di;
  }
  eaq() {
    return this.yav_1;
  }
  faq(_set____db54di) {
    this.zav_1 = _set____db54di;
  }
  gaq() {
    return this.zav_1;
  }
  haq(_set____db54di) {
    this.aaw_1 = _set____db54di;
  }
  f9v() {
    return this.aaw_1;
  }
  iaq(_set____db54di) {
    this.baw_1 = _set____db54di;
  }
  jaq() {
    return this.baw_1;
  }
  kaq(_set____db54di) {
    this.caw_1 = _set____db54di;
  }
  j90() {
    return this.caw_1;
  }
  m8k(_set____db54di) {
    this.daw_1 = _set____db54di;
  }
  d71() {
    return this.daw_1;
  }
  o8s(_set____db54di) {
    this.eaw_1 = _set____db54di;
  }
  n6i() {
    return this.eaw_1;
  }
  a8z(_set____db54di) {
    this.faw_1 = _set____db54di;
  }
  b8z() {
    return this.faw_1;
  }
  laq(_set____db54di) {
    this.gaw_1 = _set____db54di;
  }
  maq() {
    return this.gaw_1;
  }
  v8z(_set____db54di) {
    this.haw_1 = _set____db54di;
  }
  w8z() {
    return this.haw_1;
  }
  baj(_set____db54di) {
    this.iaw_1 = _set____db54di;
  }
  caj() {
    return this.iaw_1;
  }
  naq(_set____db54di) {
    this.jaw_1 = _set____db54di;
  }
  oaq() {
    return this.jaw_1;
  }
  paq(_set____db54di) {
    this.kaw_1 = _set____db54di;
  }
  qaq() {
    return this.kaw_1;
  }
  raq(_set____db54di) {
    this.law_1 = _set____db54di;
  }
  saq() {
    return this.law_1;
  }
  taq(_set____db54di) {
    this.maw_1 = _set____db54di;
  }
  uaq() {
    return this.maw_1;
  }
  vaq(_set____db54di) {
    this.naw_1 = _set____db54di;
  }
  waq() {
    return this.naw_1;
  }
  xaq(_set____db54di) {
    this.oaw_1 = _set____db54di;
  }
  yaq() {
    return this.oaw_1;
  }
  zaq(_set____db54di) {
    this.paw_1 = _set____db54di;
  }
  aar() {
    return this.paw_1;
  }
  bar(_set____db54di) {
    this.qaw_1 = _set____db54di;
  }
  car() {
    return this.qaw_1;
  }
  dar(_set____db54di) {
    this.raw_1 = _set____db54di;
  }
  ear() {
    return this.raw_1;
  }
  far(_set____db54di) {
    this.saw_1 = _set____db54di;
  }
  gar() {
    return this.saw_1;
  }
  har(_set____db54di) {
    this.taw_1 = _set____db54di;
  }
  iar() {
    return this.taw_1;
  }
  jar(_set____db54di) {
    this.uaw_1 = _set____db54di;
  }
  kar() {
    return this.uaw_1;
  }
  lar(_set____db54di) {
    this.vaw_1 = _set____db54di;
  }
  mar() {
    return this.vaw_1;
  }
  nar(_set____db54di) {
    this.waw_1 = _set____db54di;
  }
  oar() {
    return this.waw_1;
  }
  par(_set____db54di) {
    this.xaw_1 = _set____db54di;
  }
  qar() {
    return this.xaw_1;
  }
  ial(_set____db54di) {
    this.yaw_1 = _set____db54di;
  }
  jal() {
    return this.yaw_1;
  }
  rar(_set____db54di) {
    this.zaw_1 = _set____db54di;
  }
  o9h() {
    return this.zaw_1;
  }
  sar(_set____db54di) {
    this.aax_1 = _set____db54di;
  }
  tar() {
    return this.aax_1;
  }
  dax() {
    return this.dialogue;
  }
  static bax(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, dialogue, serializationConstructorMarker) {
    Companion_getInstance_20();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_18().lav_1);
    }
    var $this = this.nap();
    $this.nav_1 = blogName;
    $this.oav_1 = idString;
    $this.pav_1 = genesisPostId;
    $this.qav_1 = postUrl;
    $this.rav_1 = parentPostUrl;
    $this.sav_1 = type;
    $this.tav_1 = timestamp;
    $this.uav_1 = date;
    $this.vav_1 = format;
    $this.wav_1 = reblogKey;
    $this.xav_1 = tags;
    $this.yav_1 = isBookmarklet;
    $this.zav_1 = isMobile;
    $this.aaw_1 = sourceUrl;
    $this.baw_1 = sourceTitle;
    $this.caw_1 = isLiked;
    $this.daw_1 = state;
    $this.eaw_1 = title;
    $this.faw_1 = body;
    $this.gaw_1 = noteCount;
    $this.haw_1 = summary;
    $this.iaw_1 = slug;
    $this.jaw_1 = rebloggedFromId;
    $this.kaw_1 = rebloggedFromUrl;
    $this.law_1 = rebloggedFromName;
    $this.maw_1 = rebloggedFromTitle;
    $this.naw_1 = rebloggedFromUuid;
    $this.oaw_1 = rebloggedFromCanMessage;
    $this.paw_1 = rebloggedFromFollowing;
    $this.qaw_1 = rebloggedRootId;
    $this.raw_1 = rebloggedRootUrl;
    $this.saw_1 = rebloggedRootName;
    $this.taw_1 = rebloggedRootTitle;
    $this.uaw_1 = rebloggedRootUuid;
    $this.vaw_1 = rebloggedRootCanMessage;
    $this.waw_1 = rebloggedRootFollowing;
    $this.xaw_1 = notes;
    $this.yaw_1 = blog;
    $this.zaw_1 = reblog;
    $this.aax_1 = trail;
    if (0 === (seen1 & 256))
      $this.dialogue = null;
    else
      $this.dialogue = dialogue;
    return $this;
  }
}
class Companion_21 {
  constructor() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.eax_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1), null, null, null, null, null];
  }
  z26() {
    return $serializer_getInstance_19();
  }
}
class $serializer_20 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyLinkPost', this, 45);
    tmp0_serialDesc.f18('blog_name', false);
    tmp0_serialDesc.f18('id_string', false);
    tmp0_serialDesc.f18('genesis_post_id', false);
    tmp0_serialDesc.f18('post_url', false);
    tmp0_serialDesc.f18('parent_post_url', false);
    tmp0_serialDesc.f18('type', false);
    tmp0_serialDesc.f18('timestamp', false);
    tmp0_serialDesc.f18('date', false);
    tmp0_serialDesc.f18('format', false);
    tmp0_serialDesc.f18('reblog_key', false);
    tmp0_serialDesc.f18('tags', false);
    tmp0_serialDesc.f18('bookmarklet', false);
    tmp0_serialDesc.f18('mobile', false);
    tmp0_serialDesc.f18('source_url', false);
    tmp0_serialDesc.f18('source_title', false);
    tmp0_serialDesc.f18('liked', false);
    tmp0_serialDesc.f18('state', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('body', false);
    tmp0_serialDesc.f18('note_count', false);
    tmp0_serialDesc.f18('summary', false);
    tmp0_serialDesc.f18('slug', false);
    tmp0_serialDesc.f18('reblogged_from_id', false);
    tmp0_serialDesc.f18('reblogged_from_url', false);
    tmp0_serialDesc.f18('reblogged_from_name', false);
    tmp0_serialDesc.f18('reblogged_from_title', false);
    tmp0_serialDesc.f18('reblogged_from_uuid', false);
    tmp0_serialDesc.f18('reblogged_from_can_message', false);
    tmp0_serialDesc.f18('reblogged_from_following', false);
    tmp0_serialDesc.f18('reblogged_root_id', false);
    tmp0_serialDesc.f18('reblogged_root_url', false);
    tmp0_serialDesc.f18('reblogged_root_name', false);
    tmp0_serialDesc.f18('reblogged_root_title', false);
    tmp0_serialDesc.f18('reblogged_root_uuid', false);
    tmp0_serialDesc.f18('reblogged_root_can_message', false);
    tmp0_serialDesc.f18('reblogged_root_following', false);
    tmp0_serialDesc.f18('notes', false);
    tmp0_serialDesc.f18('blog', false);
    tmp0_serialDesc.f18('reblog', false);
    tmp0_serialDesc.f18('trail', false);
    tmp0_serialDesc.f18('description', true);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('link_author', true);
    tmp0_serialDesc.f18('excerpt', true);
    tmp0_serialDesc.f18('publisher', true);
    this.fax_1 = tmp0_serialDesc;
  }
  gax(encoder, value) {
    var tmp0_desc = this.fax_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().eax_1;
    tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.hax_1);
    tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.iax_1);
    tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.jax_1);
    tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.kax_1);
    tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.lax_1);
    tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.max_1);
    tmp1_output.f12(tmp0_desc, 6, IntSerializer_getInstance(), value.nax_1);
    tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.oax_1);
    tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.pax_1);
    tmp1_output.f12(tmp0_desc, 9, StringSerializer_getInstance(), value.qax_1);
    tmp1_output.f12(tmp0_desc, 10, tmp2_cached[10].b3(), value.rax_1);
    tmp1_output.f12(tmp0_desc, 11, BooleanSerializer_getInstance(), value.sax_1);
    tmp1_output.f12(tmp0_desc, 12, BooleanSerializer_getInstance(), value.tax_1);
    tmp1_output.f12(tmp0_desc, 13, StringSerializer_getInstance(), value.uax_1);
    tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.vax_1);
    tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.wax_1);
    tmp1_output.f12(tmp0_desc, 16, StringSerializer_getInstance(), value.xax_1);
    tmp1_output.f12(tmp0_desc, 17, StringSerializer_getInstance(), value.yax_1);
    tmp1_output.f12(tmp0_desc, 18, StringSerializer_getInstance(), value.zax_1);
    tmp1_output.f12(tmp0_desc, 19, IntSerializer_getInstance(), value.aay_1);
    tmp1_output.f12(tmp0_desc, 20, StringSerializer_getInstance(), value.bay_1);
    tmp1_output.f12(tmp0_desc, 21, StringSerializer_getInstance(), value.cay_1);
    tmp1_output.f12(tmp0_desc, 22, StringSerializer_getInstance(), value.eay_1);
    tmp1_output.f12(tmp0_desc, 23, StringSerializer_getInstance(), value.fay_1);
    tmp1_output.f12(tmp0_desc, 24, StringSerializer_getInstance(), value.gay_1);
    tmp1_output.f12(tmp0_desc, 25, StringSerializer_getInstance(), value.hay_1);
    tmp1_output.f12(tmp0_desc, 26, StringSerializer_getInstance(), value.iay_1);
    tmp1_output.f12(tmp0_desc, 27, BooleanSerializer_getInstance(), value.jay_1);
    tmp1_output.f12(tmp0_desc, 28, BooleanSerializer_getInstance(), value.kay_1);
    tmp1_output.f12(tmp0_desc, 29, StringSerializer_getInstance(), value.lay_1);
    tmp1_output.f12(tmp0_desc, 30, StringSerializer_getInstance(), value.may_1);
    tmp1_output.f12(tmp0_desc, 31, StringSerializer_getInstance(), value.nay_1);
    tmp1_output.f12(tmp0_desc, 32, StringSerializer_getInstance(), value.oay_1);
    tmp1_output.f12(tmp0_desc, 33, StringSerializer_getInstance(), value.pay_1);
    tmp1_output.f12(tmp0_desc, 34, BooleanSerializer_getInstance(), value.qay_1);
    tmp1_output.f12(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ray_1);
    tmp1_output.f12(tmp0_desc, 36, tmp2_cached[36].b3(), value.say_1);
    tmp1_output.f12(tmp0_desc, 37, $serializer_getInstance_12(), value.tay_1);
    tmp1_output.f12(tmp0_desc, 38, $serializer_getInstance_15(), value.uay_1);
    tmp1_output.f12(tmp0_desc, 39, tmp2_cached[39].b3(), value.vay_1);
    if (tmp1_output.j12(tmp0_desc, 40) ? true : !(value.description == null)) {
      tmp1_output.f12(tmp0_desc, 40, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.j12(tmp0_desc, 41) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 41, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 42) ? true : !(value.linkAuthor == null)) {
      tmp1_output.f12(tmp0_desc, 42, StringSerializer_getInstance(), value.linkAuthor);
    }
    if (tmp1_output.j12(tmp0_desc, 43) ? true : !(value.excerpt == null)) {
      tmp1_output.f12(tmp0_desc, 43, StringSerializer_getInstance(), value.excerpt);
    }
    if (tmp1_output.j12(tmp0_desc, 44) ? true : !(value.publisher == null)) {
      tmp1_output.f12(tmp0_desc, 44, StringSerializer_getInstance(), value.publisher);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.gax(encoder, value instanceof LegacyLinkPost ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.fax_1;
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
    var tmp50_input = decoder.l10(tmp0_desc);
    var tmp51_cached = Companion_getInstance_21().eax_1;
    if (tmp50_input.b11()) {
      tmp5_local0 = tmp50_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp50_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp50_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp50_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp50_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp50_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp50_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp50_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp50_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp50_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp50_input.z10(tmp0_desc, 10, tmp51_cached[10].b3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp50_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp50_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp50_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp50_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp50_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp50_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp50_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp50_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp50_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp50_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp50_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp50_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp50_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp50_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp50_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp50_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp50_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp50_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp50_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp50_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp50_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp50_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp50_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp50_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp50_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp50_input.z10(tmp0_desc, 36, tmp51_cached[36].b3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp50_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp50_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp50_input.z10(tmp0_desc, 39, tmp51_cached[39].b3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp50_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp50_input.z10(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp50_input.z10(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp50_input.z10(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp50_input.z10(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp50_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp50_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp50_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp50_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp50_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp50_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp50_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp50_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp50_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp50_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp50_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp50_input.z10(tmp0_desc, 10, tmp51_cached[10].b3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp50_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp50_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp50_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp50_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp50_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp50_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp50_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp50_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp50_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp50_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp50_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp50_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp50_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp50_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp50_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp50_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp50_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp50_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp50_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp50_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp50_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp50_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp50_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp50_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp50_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp50_input.z10(tmp0_desc, 36, tmp51_cached[36].b3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp50_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp50_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp50_input.z10(tmp0_desc, 39, tmp51_cached[39].b3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp50_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp50_input.z10(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp50_input.z10(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp50_input.z10(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp50_input.z10(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp50_input.m10(tmp0_desc);
    return LegacyLinkPost.way(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, null);
  }
  xv() {
    return this.fax_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_21().eax_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].b3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].b3()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].b3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyLinkPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.xay(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static xay(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_21();
    var $this = this.nap();
    $this.hax_1 = blogName;
    $this.iax_1 = idString;
    $this.jax_1 = genesisPostId;
    $this.kax_1 = postUrl;
    $this.lax_1 = parentPostUrl;
    $this.max_1 = type;
    $this.nax_1 = timestamp;
    $this.oax_1 = date;
    $this.pax_1 = format;
    $this.qax_1 = reblogKey;
    $this.rax_1 = tags;
    $this.sax_1 = isBookmarklet;
    $this.tax_1 = isMobile;
    $this.uax_1 = sourceUrl;
    $this.vax_1 = sourceTitle;
    $this.wax_1 = isLiked;
    $this.xax_1 = state;
    $this.yax_1 = title;
    $this.zax_1 = body;
    $this.aay_1 = noteCount;
    $this.bay_1 = summary;
    $this.cay_1 = slug;
    $this.eay_1 = rebloggedFromId;
    $this.fay_1 = rebloggedFromUrl;
    $this.gay_1 = rebloggedFromName;
    $this.hay_1 = rebloggedFromTitle;
    $this.iay_1 = rebloggedFromUuid;
    $this.jay_1 = rebloggedFromCanMessage;
    $this.kay_1 = rebloggedFromFollowing;
    $this.lay_1 = rebloggedRootId;
    $this.may_1 = rebloggedRootUrl;
    $this.nay_1 = rebloggedRootName;
    $this.oay_1 = rebloggedRootTitle;
    $this.pay_1 = rebloggedRootUuid;
    $this.qay_1 = rebloggedRootCanMessage;
    $this.ray_1 = rebloggedRootFollowing;
    $this.say_1 = notes;
    $this.tay_1 = blog;
    $this.uay_1 = reblog;
    $this.vay_1 = trail;
    $this.description = null;
    $this.url = null;
    $this.linkAuthor = null;
    $this.excerpt = null;
    $this.publisher = null;
    return $this;
  }
  yah(_set____db54di) {
    this.hax_1 = _set____db54di;
  }
  zah() {
    return this.hax_1;
  }
  uap(_set____db54di) {
    this.iax_1 = _set____db54di;
  }
  vap() {
    return this.iax_1;
  }
  wap(_set____db54di) {
    this.jax_1 = _set____db54di;
  }
  xap() {
    return this.jax_1;
  }
  yap(_set____db54di) {
    this.kax_1 = _set____db54di;
  }
  zap() {
    return this.kax_1;
  }
  aaq(_set____db54di) {
    this.lax_1 = _set____db54di;
  }
  baq() {
    return this.lax_1;
  }
  w78(_set____db54di) {
    this.max_1 = _set____db54di;
  }
  o6a() {
    return this.max_1;
  }
  caq(_set____db54di) {
    this.nax_1 = _set____db54di;
  }
  yam() {
    return this.nax_1;
  }
  xai(_set____db54di) {
    this.oax_1 = _set____db54di;
  }
  yai() {
    return this.oax_1;
  }
  zai(_set____db54di) {
    this.pax_1 = _set____db54di;
  }
  aaj() {
    return this.pax_1;
  }
  raj(_set____db54di) {
    this.qax_1 = _set____db54di;
  }
  saj() {
    return this.qax_1;
  }
  s8x(_set____db54di) {
    this.rax_1 = _set____db54di;
  }
  s8s() {
    return this.rax_1;
  }
  daq(_set____db54di) {
    this.sax_1 = _set____db54di;
  }
  eaq() {
    return this.sax_1;
  }
  faq(_set____db54di) {
    this.tax_1 = _set____db54di;
  }
  gaq() {
    return this.tax_1;
  }
  haq(_set____db54di) {
    this.uax_1 = _set____db54di;
  }
  f9v() {
    return this.uax_1;
  }
  iaq(_set____db54di) {
    this.vax_1 = _set____db54di;
  }
  jaq() {
    return this.vax_1;
  }
  kaq(_set____db54di) {
    this.wax_1 = _set____db54di;
  }
  j90() {
    return this.wax_1;
  }
  m8k(_set____db54di) {
    this.xax_1 = _set____db54di;
  }
  d71() {
    return this.xax_1;
  }
  o8s(_set____db54di) {
    this.yax_1 = _set____db54di;
  }
  n6i() {
    return this.yax_1;
  }
  a8z(_set____db54di) {
    this.zax_1 = _set____db54di;
  }
  b8z() {
    return this.zax_1;
  }
  laq(_set____db54di) {
    this.aay_1 = _set____db54di;
  }
  maq() {
    return this.aay_1;
  }
  v8z(_set____db54di) {
    this.bay_1 = _set____db54di;
  }
  w8z() {
    return this.bay_1;
  }
  baj(_set____db54di) {
    this.cay_1 = _set____db54di;
  }
  caj() {
    return this.cay_1;
  }
  naq(_set____db54di) {
    this.eay_1 = _set____db54di;
  }
  oaq() {
    return this.eay_1;
  }
  paq(_set____db54di) {
    this.fay_1 = _set____db54di;
  }
  qaq() {
    return this.fay_1;
  }
  raq(_set____db54di) {
    this.gay_1 = _set____db54di;
  }
  saq() {
    return this.gay_1;
  }
  taq(_set____db54di) {
    this.hay_1 = _set____db54di;
  }
  uaq() {
    return this.hay_1;
  }
  vaq(_set____db54di) {
    this.iay_1 = _set____db54di;
  }
  waq() {
    return this.iay_1;
  }
  xaq(_set____db54di) {
    this.jay_1 = _set____db54di;
  }
  yaq() {
    return this.jay_1;
  }
  zaq(_set____db54di) {
    this.kay_1 = _set____db54di;
  }
  aar() {
    return this.kay_1;
  }
  bar(_set____db54di) {
    this.lay_1 = _set____db54di;
  }
  car() {
    return this.lay_1;
  }
  dar(_set____db54di) {
    this.may_1 = _set____db54di;
  }
  ear() {
    return this.may_1;
  }
  far(_set____db54di) {
    this.nay_1 = _set____db54di;
  }
  gar() {
    return this.nay_1;
  }
  har(_set____db54di) {
    this.oay_1 = _set____db54di;
  }
  iar() {
    return this.oay_1;
  }
  jar(_set____db54di) {
    this.pay_1 = _set____db54di;
  }
  kar() {
    return this.pay_1;
  }
  lar(_set____db54di) {
    this.qay_1 = _set____db54di;
  }
  mar() {
    return this.qay_1;
  }
  nar(_set____db54di) {
    this.ray_1 = _set____db54di;
  }
  oar() {
    return this.ray_1;
  }
  par(_set____db54di) {
    this.say_1 = _set____db54di;
  }
  qar() {
    return this.say_1;
  }
  ial(_set____db54di) {
    this.tay_1 = _set____db54di;
  }
  jal() {
    return this.tay_1;
  }
  rar(_set____db54di) {
    this.uay_1 = _set____db54di;
  }
  o9h() {
    return this.uay_1;
  }
  sar(_set____db54di) {
    this.vay_1 = _set____db54di;
  }
  tar() {
    return this.vay_1;
  }
  v52(_set____db54di) {
    this.description = _set____db54di;
  }
  w52() {
    return this.description;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  yay(_set____db54di) {
    this.linkAuthor = _set____db54di;
  }
  zay() {
    return this.linkAuthor;
  }
  haj(_set____db54di) {
    this.excerpt = _set____db54di;
  }
  iaj() {
    return this.excerpt;
  }
  aaz(_set____db54di) {
    this.publisher = _set____db54di;
  }
  baz() {
    return this.publisher;
  }
  static way(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, description, url, linkAuthor, excerpt, publisher, serializationConstructorMarker) {
    Companion_getInstance_21();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_19().fax_1);
    }
    var $this = this.nap();
    $this.hax_1 = blogName;
    $this.iax_1 = idString;
    $this.jax_1 = genesisPostId;
    $this.kax_1 = postUrl;
    $this.lax_1 = parentPostUrl;
    $this.max_1 = type;
    $this.nax_1 = timestamp;
    $this.oax_1 = date;
    $this.pax_1 = format;
    $this.qax_1 = reblogKey;
    $this.rax_1 = tags;
    $this.sax_1 = isBookmarklet;
    $this.tax_1 = isMobile;
    $this.uax_1 = sourceUrl;
    $this.vax_1 = sourceTitle;
    $this.wax_1 = isLiked;
    $this.xax_1 = state;
    $this.yax_1 = title;
    $this.zax_1 = body;
    $this.aay_1 = noteCount;
    $this.bay_1 = summary;
    $this.cay_1 = slug;
    $this.eay_1 = rebloggedFromId;
    $this.fay_1 = rebloggedFromUrl;
    $this.gay_1 = rebloggedFromName;
    $this.hay_1 = rebloggedFromTitle;
    $this.iay_1 = rebloggedFromUuid;
    $this.jay_1 = rebloggedFromCanMessage;
    $this.kay_1 = rebloggedFromFollowing;
    $this.lay_1 = rebloggedRootId;
    $this.may_1 = rebloggedRootUrl;
    $this.nay_1 = rebloggedRootName;
    $this.oay_1 = rebloggedRootTitle;
    $this.pay_1 = rebloggedRootUuid;
    $this.qay_1 = rebloggedRootCanMessage;
    $this.ray_1 = rebloggedRootFollowing;
    $this.say_1 = notes;
    $this.tay_1 = blog;
    $this.uay_1 = reblog;
    $this.vay_1 = trail;
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
class Companion_22 {
  constructor() {
    Companion_instance_22 = this;
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
    tmp.caz_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, null, null, lazy(tmp_6, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2)];
  }
  z26() {
    return $serializer_getInstance_20();
  }
}
class $serializer_21 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPhotoPost', this, 44);
    tmp0_serialDesc.f18('blog_name', false);
    tmp0_serialDesc.f18('id_string', false);
    tmp0_serialDesc.f18('genesis_post_id', false);
    tmp0_serialDesc.f18('post_url', false);
    tmp0_serialDesc.f18('parent_post_url', false);
    tmp0_serialDesc.f18('type', false);
    tmp0_serialDesc.f18('timestamp', false);
    tmp0_serialDesc.f18('date', false);
    tmp0_serialDesc.f18('format', false);
    tmp0_serialDesc.f18('reblog_key', false);
    tmp0_serialDesc.f18('tags', false);
    tmp0_serialDesc.f18('bookmarklet', false);
    tmp0_serialDesc.f18('mobile', false);
    tmp0_serialDesc.f18('source_url', false);
    tmp0_serialDesc.f18('source_title', false);
    tmp0_serialDesc.f18('liked', false);
    tmp0_serialDesc.f18('state', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('body', false);
    tmp0_serialDesc.f18('note_count', false);
    tmp0_serialDesc.f18('summary', false);
    tmp0_serialDesc.f18('slug', false);
    tmp0_serialDesc.f18('reblogged_from_id', false);
    tmp0_serialDesc.f18('reblogged_from_url', false);
    tmp0_serialDesc.f18('reblogged_from_name', false);
    tmp0_serialDesc.f18('reblogged_from_title', false);
    tmp0_serialDesc.f18('reblogged_from_uuid', false);
    tmp0_serialDesc.f18('reblogged_from_can_message', false);
    tmp0_serialDesc.f18('reblogged_from_following', false);
    tmp0_serialDesc.f18('reblogged_root_id', false);
    tmp0_serialDesc.f18('reblogged_root_url', false);
    tmp0_serialDesc.f18('reblogged_root_name', false);
    tmp0_serialDesc.f18('reblogged_root_title', false);
    tmp0_serialDesc.f18('reblogged_root_uuid', false);
    tmp0_serialDesc.f18('reblogged_root_can_message', false);
    tmp0_serialDesc.f18('reblogged_root_following', false);
    tmp0_serialDesc.f18('notes', false);
    tmp0_serialDesc.f18('blog', false);
    tmp0_serialDesc.f18('reblog', false);
    tmp0_serialDesc.f18('trail', false);
    tmp0_serialDesc.f18('caption', true);
    tmp0_serialDesc.f18('width', true);
    tmp0_serialDesc.f18('height', true);
    tmp0_serialDesc.f18('photos', true);
    this.daz_1 = tmp0_serialDesc;
  }
  eaz(encoder, value) {
    var tmp0_desc = this.daz_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().caz_1;
    tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.faz_1);
    tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.gaz_1);
    tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.haz_1);
    tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.iaz_1);
    tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.jaz_1);
    tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.kaz_1);
    tmp1_output.f12(tmp0_desc, 6, IntSerializer_getInstance(), value.laz_1);
    tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.maz_1);
    tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.naz_1);
    tmp1_output.f12(tmp0_desc, 9, StringSerializer_getInstance(), value.oaz_1);
    tmp1_output.f12(tmp0_desc, 10, tmp2_cached[10].b3(), value.paz_1);
    tmp1_output.f12(tmp0_desc, 11, BooleanSerializer_getInstance(), value.qaz_1);
    tmp1_output.f12(tmp0_desc, 12, BooleanSerializer_getInstance(), value.raz_1);
    tmp1_output.f12(tmp0_desc, 13, StringSerializer_getInstance(), value.saz_1);
    tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.taz_1);
    tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.uaz_1);
    tmp1_output.f12(tmp0_desc, 16, StringSerializer_getInstance(), value.vaz_1);
    tmp1_output.f12(tmp0_desc, 17, StringSerializer_getInstance(), value.waz_1);
    tmp1_output.f12(tmp0_desc, 18, StringSerializer_getInstance(), value.xaz_1);
    tmp1_output.f12(tmp0_desc, 19, IntSerializer_getInstance(), value.yaz_1);
    tmp1_output.f12(tmp0_desc, 20, StringSerializer_getInstance(), value.zaz_1);
    tmp1_output.f12(tmp0_desc, 21, StringSerializer_getInstance(), value.ab0_1);
    tmp1_output.f12(tmp0_desc, 22, StringSerializer_getInstance(), value.bb0_1);
    tmp1_output.f12(tmp0_desc, 23, StringSerializer_getInstance(), value.cb0_1);
    tmp1_output.f12(tmp0_desc, 24, StringSerializer_getInstance(), value.db0_1);
    tmp1_output.f12(tmp0_desc, 25, StringSerializer_getInstance(), value.eb0_1);
    tmp1_output.f12(tmp0_desc, 26, StringSerializer_getInstance(), value.fb0_1);
    tmp1_output.f12(tmp0_desc, 27, BooleanSerializer_getInstance(), value.gb0_1);
    tmp1_output.f12(tmp0_desc, 28, BooleanSerializer_getInstance(), value.hb0_1);
    tmp1_output.f12(tmp0_desc, 29, StringSerializer_getInstance(), value.ib0_1);
    tmp1_output.f12(tmp0_desc, 30, StringSerializer_getInstance(), value.jb0_1);
    tmp1_output.f12(tmp0_desc, 31, StringSerializer_getInstance(), value.kb0_1);
    tmp1_output.f12(tmp0_desc, 32, StringSerializer_getInstance(), value.lb0_1);
    tmp1_output.f12(tmp0_desc, 33, StringSerializer_getInstance(), value.mb0_1);
    tmp1_output.f12(tmp0_desc, 34, BooleanSerializer_getInstance(), value.nb0_1);
    tmp1_output.f12(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ob0_1);
    tmp1_output.f12(tmp0_desc, 36, tmp2_cached[36].b3(), value.pb0_1);
    tmp1_output.f12(tmp0_desc, 37, $serializer_getInstance_12(), value.qb0_1);
    tmp1_output.f12(tmp0_desc, 38, $serializer_getInstance_15(), value.rb0_1);
    tmp1_output.f12(tmp0_desc, 39, tmp2_cached[39].b3(), value.sb0_1);
    if (tmp1_output.j12(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.f12(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.j12(tmp0_desc, 41) ? true : !(value.width == null)) {
      tmp1_output.f12(tmp0_desc, 41, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.j12(tmp0_desc, 42) ? true : !(value.height == null)) {
      tmp1_output.f12(tmp0_desc, 42, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.j12(tmp0_desc, 43) ? true : !(value.photos == null)) {
      tmp1_output.f12(tmp0_desc, 43, tmp2_cached[43].b3(), value.photos);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.eaz(encoder, value instanceof LegacyPhotoPost ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.daz_1;
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
    var tmp49_input = decoder.l10(tmp0_desc);
    var tmp50_cached = Companion_getInstance_22().caz_1;
    if (tmp49_input.b11()) {
      tmp5_local0 = tmp49_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.z10(tmp0_desc, 10, tmp50_cached[10].b3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.z10(tmp0_desc, 36, tmp50_cached[36].b3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.z10(tmp0_desc, 39, tmp50_cached[39].b3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.z10(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.z10(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.z10(tmp0_desc, 43, tmp50_cached[43].b3(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.z10(tmp0_desc, 10, tmp50_cached[10].b3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.z10(tmp0_desc, 36, tmp50_cached[36].b3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.z10(tmp0_desc, 39, tmp50_cached[39].b3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.z10(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.z10(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.z10(tmp0_desc, 43, tmp50_cached[43].b3(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp49_input.m10(tmp0_desc);
    return LegacyPhotoPost.tb0(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  }
  xv() {
    return this.daz_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_22().caz_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].b3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].b3()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].b3()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[43].b3())];
  }
}
class LegacyPhotoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ub0(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ub0(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_22();
    var $this = this.nap();
    $this.faz_1 = blogName;
    $this.gaz_1 = idString;
    $this.haz_1 = genesisPostId;
    $this.iaz_1 = postUrl;
    $this.jaz_1 = parentPostUrl;
    $this.kaz_1 = type;
    $this.laz_1 = timestamp;
    $this.maz_1 = date;
    $this.naz_1 = format;
    $this.oaz_1 = reblogKey;
    $this.paz_1 = tags;
    $this.qaz_1 = isBookmarklet;
    $this.raz_1 = isMobile;
    $this.saz_1 = sourceUrl;
    $this.taz_1 = sourceTitle;
    $this.uaz_1 = isLiked;
    $this.vaz_1 = state;
    $this.waz_1 = title;
    $this.xaz_1 = body;
    $this.yaz_1 = noteCount;
    $this.zaz_1 = summary;
    $this.ab0_1 = slug;
    $this.bb0_1 = rebloggedFromId;
    $this.cb0_1 = rebloggedFromUrl;
    $this.db0_1 = rebloggedFromName;
    $this.eb0_1 = rebloggedFromTitle;
    $this.fb0_1 = rebloggedFromUuid;
    $this.gb0_1 = rebloggedFromCanMessage;
    $this.hb0_1 = rebloggedFromFollowing;
    $this.ib0_1 = rebloggedRootId;
    $this.jb0_1 = rebloggedRootUrl;
    $this.kb0_1 = rebloggedRootName;
    $this.lb0_1 = rebloggedRootTitle;
    $this.mb0_1 = rebloggedRootUuid;
    $this.nb0_1 = rebloggedRootCanMessage;
    $this.ob0_1 = rebloggedRootFollowing;
    $this.pb0_1 = notes;
    $this.qb0_1 = blog;
    $this.rb0_1 = reblog;
    $this.sb0_1 = trail;
    $this.caption = null;
    $this.width = null;
    $this.height = null;
    $this.photos = null;
    return $this;
  }
  yah(_set____db54di) {
    this.faz_1 = _set____db54di;
  }
  zah() {
    return this.faz_1;
  }
  uap(_set____db54di) {
    this.gaz_1 = _set____db54di;
  }
  vap() {
    return this.gaz_1;
  }
  wap(_set____db54di) {
    this.haz_1 = _set____db54di;
  }
  xap() {
    return this.haz_1;
  }
  yap(_set____db54di) {
    this.iaz_1 = _set____db54di;
  }
  zap() {
    return this.iaz_1;
  }
  aaq(_set____db54di) {
    this.jaz_1 = _set____db54di;
  }
  baq() {
    return this.jaz_1;
  }
  w78(_set____db54di) {
    this.kaz_1 = _set____db54di;
  }
  o6a() {
    return this.kaz_1;
  }
  caq(_set____db54di) {
    this.laz_1 = _set____db54di;
  }
  yam() {
    return this.laz_1;
  }
  xai(_set____db54di) {
    this.maz_1 = _set____db54di;
  }
  yai() {
    return this.maz_1;
  }
  zai(_set____db54di) {
    this.naz_1 = _set____db54di;
  }
  aaj() {
    return this.naz_1;
  }
  raj(_set____db54di) {
    this.oaz_1 = _set____db54di;
  }
  saj() {
    return this.oaz_1;
  }
  s8x(_set____db54di) {
    this.paz_1 = _set____db54di;
  }
  s8s() {
    return this.paz_1;
  }
  daq(_set____db54di) {
    this.qaz_1 = _set____db54di;
  }
  eaq() {
    return this.qaz_1;
  }
  faq(_set____db54di) {
    this.raz_1 = _set____db54di;
  }
  gaq() {
    return this.raz_1;
  }
  haq(_set____db54di) {
    this.saz_1 = _set____db54di;
  }
  f9v() {
    return this.saz_1;
  }
  iaq(_set____db54di) {
    this.taz_1 = _set____db54di;
  }
  jaq() {
    return this.taz_1;
  }
  kaq(_set____db54di) {
    this.uaz_1 = _set____db54di;
  }
  j90() {
    return this.uaz_1;
  }
  m8k(_set____db54di) {
    this.vaz_1 = _set____db54di;
  }
  d71() {
    return this.vaz_1;
  }
  o8s(_set____db54di) {
    this.waz_1 = _set____db54di;
  }
  n6i() {
    return this.waz_1;
  }
  a8z(_set____db54di) {
    this.xaz_1 = _set____db54di;
  }
  b8z() {
    return this.xaz_1;
  }
  laq(_set____db54di) {
    this.yaz_1 = _set____db54di;
  }
  maq() {
    return this.yaz_1;
  }
  v8z(_set____db54di) {
    this.zaz_1 = _set____db54di;
  }
  w8z() {
    return this.zaz_1;
  }
  baj(_set____db54di) {
    this.ab0_1 = _set____db54di;
  }
  caj() {
    return this.ab0_1;
  }
  naq(_set____db54di) {
    this.bb0_1 = _set____db54di;
  }
  oaq() {
    return this.bb0_1;
  }
  paq(_set____db54di) {
    this.cb0_1 = _set____db54di;
  }
  qaq() {
    return this.cb0_1;
  }
  raq(_set____db54di) {
    this.db0_1 = _set____db54di;
  }
  saq() {
    return this.db0_1;
  }
  taq(_set____db54di) {
    this.eb0_1 = _set____db54di;
  }
  uaq() {
    return this.eb0_1;
  }
  vaq(_set____db54di) {
    this.fb0_1 = _set____db54di;
  }
  waq() {
    return this.fb0_1;
  }
  xaq(_set____db54di) {
    this.gb0_1 = _set____db54di;
  }
  yaq() {
    return this.gb0_1;
  }
  zaq(_set____db54di) {
    this.hb0_1 = _set____db54di;
  }
  aar() {
    return this.hb0_1;
  }
  bar(_set____db54di) {
    this.ib0_1 = _set____db54di;
  }
  car() {
    return this.ib0_1;
  }
  dar(_set____db54di) {
    this.jb0_1 = _set____db54di;
  }
  ear() {
    return this.jb0_1;
  }
  far(_set____db54di) {
    this.kb0_1 = _set____db54di;
  }
  gar() {
    return this.kb0_1;
  }
  har(_set____db54di) {
    this.lb0_1 = _set____db54di;
  }
  iar() {
    return this.lb0_1;
  }
  jar(_set____db54di) {
    this.mb0_1 = _set____db54di;
  }
  kar() {
    return this.mb0_1;
  }
  lar(_set____db54di) {
    this.nb0_1 = _set____db54di;
  }
  mar() {
    return this.nb0_1;
  }
  nar(_set____db54di) {
    this.ob0_1 = _set____db54di;
  }
  oar() {
    return this.ob0_1;
  }
  par(_set____db54di) {
    this.pb0_1 = _set____db54di;
  }
  qar() {
    return this.pb0_1;
  }
  ial(_set____db54di) {
    this.qb0_1 = _set____db54di;
  }
  jal() {
    return this.qb0_1;
  }
  rar(_set____db54di) {
    this.rb0_1 = _set____db54di;
  }
  o9h() {
    return this.rb0_1;
  }
  sar(_set____db54di) {
    this.sb0_1 = _set____db54di;
  }
  tar() {
    return this.sb0_1;
  }
  oai(_set____db54di) {
    this.caption = _set____db54di;
  }
  pai() {
    return this.caption;
  }
  p8q(_set____db54di) {
    this.width = _set____db54di;
  }
  r6h() {
    return this.width;
  }
  q8q(_set____db54di) {
    this.height = _set____db54di;
  }
  t6h() {
    return this.height;
  }
  vb0(_set____db54di) {
    this.photos = _set____db54di;
  }
  wb0() {
    return this.photos;
  }
  static tb0(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, width, height, photos, serializationConstructorMarker) {
    Companion_getInstance_22();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_20().daz_1);
    }
    var $this = this.nap();
    $this.faz_1 = blogName;
    $this.gaz_1 = idString;
    $this.haz_1 = genesisPostId;
    $this.iaz_1 = postUrl;
    $this.jaz_1 = parentPostUrl;
    $this.kaz_1 = type;
    $this.laz_1 = timestamp;
    $this.maz_1 = date;
    $this.naz_1 = format;
    $this.oaz_1 = reblogKey;
    $this.paz_1 = tags;
    $this.qaz_1 = isBookmarklet;
    $this.raz_1 = isMobile;
    $this.saz_1 = sourceUrl;
    $this.taz_1 = sourceTitle;
    $this.uaz_1 = isLiked;
    $this.vaz_1 = state;
    $this.waz_1 = title;
    $this.xaz_1 = body;
    $this.yaz_1 = noteCount;
    $this.zaz_1 = summary;
    $this.ab0_1 = slug;
    $this.bb0_1 = rebloggedFromId;
    $this.cb0_1 = rebloggedFromUrl;
    $this.db0_1 = rebloggedFromName;
    $this.eb0_1 = rebloggedFromTitle;
    $this.fb0_1 = rebloggedFromUuid;
    $this.gb0_1 = rebloggedFromCanMessage;
    $this.hb0_1 = rebloggedFromFollowing;
    $this.ib0_1 = rebloggedRootId;
    $this.jb0_1 = rebloggedRootUrl;
    $this.kb0_1 = rebloggedRootName;
    $this.lb0_1 = rebloggedRootTitle;
    $this.mb0_1 = rebloggedRootUuid;
    $this.nb0_1 = rebloggedRootCanMessage;
    $this.ob0_1 = rebloggedRootFollowing;
    $this.pb0_1 = notes;
    $this.qb0_1 = blog;
    $this.rb0_1 = reblog;
    $this.sb0_1 = trail;
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
class Companion_23 {
  constructor() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xb0_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1), null, null];
  }
  z26() {
    return $serializer_getInstance_21();
  }
}
class $serializer_22 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyQuotePost', this, 42);
    tmp0_serialDesc.f18('blog_name', false);
    tmp0_serialDesc.f18('id_string', false);
    tmp0_serialDesc.f18('genesis_post_id', false);
    tmp0_serialDesc.f18('post_url', false);
    tmp0_serialDesc.f18('parent_post_url', false);
    tmp0_serialDesc.f18('type', false);
    tmp0_serialDesc.f18('timestamp', false);
    tmp0_serialDesc.f18('date', false);
    tmp0_serialDesc.f18('format', false);
    tmp0_serialDesc.f18('reblog_key', false);
    tmp0_serialDesc.f18('tags', false);
    tmp0_serialDesc.f18('bookmarklet', false);
    tmp0_serialDesc.f18('mobile', false);
    tmp0_serialDesc.f18('source_url', false);
    tmp0_serialDesc.f18('source_title', false);
    tmp0_serialDesc.f18('liked', false);
    tmp0_serialDesc.f18('state', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('body', false);
    tmp0_serialDesc.f18('note_count', false);
    tmp0_serialDesc.f18('summary', false);
    tmp0_serialDesc.f18('slug', false);
    tmp0_serialDesc.f18('reblogged_from_id', false);
    tmp0_serialDesc.f18('reblogged_from_url', false);
    tmp0_serialDesc.f18('reblogged_from_name', false);
    tmp0_serialDesc.f18('reblogged_from_title', false);
    tmp0_serialDesc.f18('reblogged_from_uuid', false);
    tmp0_serialDesc.f18('reblogged_from_can_message', false);
    tmp0_serialDesc.f18('reblogged_from_following', false);
    tmp0_serialDesc.f18('reblogged_root_id', false);
    tmp0_serialDesc.f18('reblogged_root_url', false);
    tmp0_serialDesc.f18('reblogged_root_name', false);
    tmp0_serialDesc.f18('reblogged_root_title', false);
    tmp0_serialDesc.f18('reblogged_root_uuid', false);
    tmp0_serialDesc.f18('reblogged_root_can_message', false);
    tmp0_serialDesc.f18('reblogged_root_following', false);
    tmp0_serialDesc.f18('notes', false);
    tmp0_serialDesc.f18('blog', false);
    tmp0_serialDesc.f18('reblog', false);
    tmp0_serialDesc.f18('trail', false);
    tmp0_serialDesc.f18('text', true);
    tmp0_serialDesc.f18('source', true);
    this.yb0_1 = tmp0_serialDesc;
  }
  zb0(encoder, value) {
    var tmp0_desc = this.yb0_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().xb0_1;
    tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.ab1_1);
    tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.bb1_1);
    tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.cb1_1);
    tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.db1_1);
    tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.eb1_1);
    tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.fb1_1);
    tmp1_output.f12(tmp0_desc, 6, IntSerializer_getInstance(), value.gb1_1);
    tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.hb1_1);
    tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.ib1_1);
    tmp1_output.f12(tmp0_desc, 9, StringSerializer_getInstance(), value.jb1_1);
    tmp1_output.f12(tmp0_desc, 10, tmp2_cached[10].b3(), value.kb1_1);
    tmp1_output.f12(tmp0_desc, 11, BooleanSerializer_getInstance(), value.lb1_1);
    tmp1_output.f12(tmp0_desc, 12, BooleanSerializer_getInstance(), value.mb1_1);
    tmp1_output.f12(tmp0_desc, 13, StringSerializer_getInstance(), value.nb1_1);
    tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.ob1_1);
    tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.pb1_1);
    tmp1_output.f12(tmp0_desc, 16, StringSerializer_getInstance(), value.qb1_1);
    tmp1_output.f12(tmp0_desc, 17, StringSerializer_getInstance(), value.rb1_1);
    tmp1_output.f12(tmp0_desc, 18, StringSerializer_getInstance(), value.sb1_1);
    tmp1_output.f12(tmp0_desc, 19, IntSerializer_getInstance(), value.tb1_1);
    tmp1_output.f12(tmp0_desc, 20, StringSerializer_getInstance(), value.ub1_1);
    tmp1_output.f12(tmp0_desc, 21, StringSerializer_getInstance(), value.vb1_1);
    tmp1_output.f12(tmp0_desc, 22, StringSerializer_getInstance(), value.wb1_1);
    tmp1_output.f12(tmp0_desc, 23, StringSerializer_getInstance(), value.xb1_1);
    tmp1_output.f12(tmp0_desc, 24, StringSerializer_getInstance(), value.yb1_1);
    tmp1_output.f12(tmp0_desc, 25, StringSerializer_getInstance(), value.zb1_1);
    tmp1_output.f12(tmp0_desc, 26, StringSerializer_getInstance(), value.ab2_1);
    tmp1_output.f12(tmp0_desc, 27, BooleanSerializer_getInstance(), value.bb2_1);
    tmp1_output.f12(tmp0_desc, 28, BooleanSerializer_getInstance(), value.cb2_1);
    tmp1_output.f12(tmp0_desc, 29, StringSerializer_getInstance(), value.db2_1);
    tmp1_output.f12(tmp0_desc, 30, StringSerializer_getInstance(), value.eb2_1);
    tmp1_output.f12(tmp0_desc, 31, StringSerializer_getInstance(), value.fb2_1);
    tmp1_output.f12(tmp0_desc, 32, StringSerializer_getInstance(), value.gb2_1);
    tmp1_output.f12(tmp0_desc, 33, StringSerializer_getInstance(), value.hb2_1);
    tmp1_output.f12(tmp0_desc, 34, BooleanSerializer_getInstance(), value.ib2_1);
    tmp1_output.f12(tmp0_desc, 35, BooleanSerializer_getInstance(), value.jb2_1);
    tmp1_output.f12(tmp0_desc, 36, tmp2_cached[36].b3(), value.kb2_1);
    tmp1_output.f12(tmp0_desc, 37, $serializer_getInstance_12(), value.lb2_1);
    tmp1_output.f12(tmp0_desc, 38, $serializer_getInstance_15(), value.mb2_1);
    tmp1_output.f12(tmp0_desc, 39, tmp2_cached[39].b3(), value.nb2_1);
    if (tmp1_output.j12(tmp0_desc, 40) ? true : !(value.text == null)) {
      tmp1_output.f12(tmp0_desc, 40, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.j12(tmp0_desc, 41) ? true : !(value.source == null)) {
      tmp1_output.f12(tmp0_desc, 41, StringSerializer_getInstance(), value.source);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.zb0(encoder, value instanceof LegacyQuotePost ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.yb0_1;
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
    var tmp47_input = decoder.l10(tmp0_desc);
    var tmp48_cached = Companion_getInstance_23().xb0_1;
    if (tmp47_input.b11()) {
      tmp5_local0 = tmp47_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.z10(tmp0_desc, 10, tmp48_cached[10].b3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.z10(tmp0_desc, 36, tmp48_cached[36].b3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.z10(tmp0_desc, 39, tmp48_cached[39].b3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.z10(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.z10(tmp0_desc, 10, tmp48_cached[10].b3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.z10(tmp0_desc, 36, tmp48_cached[36].b3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.z10(tmp0_desc, 39, tmp48_cached[39].b3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.z10(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp47_input.m10(tmp0_desc);
    return LegacyQuotePost.ob2(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  xv() {
    return this.yb0_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_23().xb0_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].b3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].b3()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].b3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LegacyQuotePost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.pb2(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static pb2(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_23();
    var $this = this.nap();
    $this.ab1_1 = blogName;
    $this.bb1_1 = idString;
    $this.cb1_1 = genesisPostId;
    $this.db1_1 = postUrl;
    $this.eb1_1 = parentPostUrl;
    $this.fb1_1 = type;
    $this.gb1_1 = timestamp;
    $this.hb1_1 = date;
    $this.ib1_1 = format;
    $this.jb1_1 = reblogKey;
    $this.kb1_1 = tags;
    $this.lb1_1 = isBookmarklet;
    $this.mb1_1 = isMobile;
    $this.nb1_1 = sourceUrl;
    $this.ob1_1 = sourceTitle;
    $this.pb1_1 = isLiked;
    $this.qb1_1 = state;
    $this.rb1_1 = title;
    $this.sb1_1 = body;
    $this.tb1_1 = noteCount;
    $this.ub1_1 = summary;
    $this.vb1_1 = slug;
    $this.wb1_1 = rebloggedFromId;
    $this.xb1_1 = rebloggedFromUrl;
    $this.yb1_1 = rebloggedFromName;
    $this.zb1_1 = rebloggedFromTitle;
    $this.ab2_1 = rebloggedFromUuid;
    $this.bb2_1 = rebloggedFromCanMessage;
    $this.cb2_1 = rebloggedFromFollowing;
    $this.db2_1 = rebloggedRootId;
    $this.eb2_1 = rebloggedRootUrl;
    $this.fb2_1 = rebloggedRootName;
    $this.gb2_1 = rebloggedRootTitle;
    $this.hb2_1 = rebloggedRootUuid;
    $this.ib2_1 = rebloggedRootCanMessage;
    $this.jb2_1 = rebloggedRootFollowing;
    $this.kb2_1 = notes;
    $this.lb2_1 = blog;
    $this.mb2_1 = reblog;
    $this.nb2_1 = trail;
    $this.text = null;
    $this.source = null;
    return $this;
  }
  yah(_set____db54di) {
    this.ab1_1 = _set____db54di;
  }
  zah() {
    return this.ab1_1;
  }
  uap(_set____db54di) {
    this.bb1_1 = _set____db54di;
  }
  vap() {
    return this.bb1_1;
  }
  wap(_set____db54di) {
    this.cb1_1 = _set____db54di;
  }
  xap() {
    return this.cb1_1;
  }
  yap(_set____db54di) {
    this.db1_1 = _set____db54di;
  }
  zap() {
    return this.db1_1;
  }
  aaq(_set____db54di) {
    this.eb1_1 = _set____db54di;
  }
  baq() {
    return this.eb1_1;
  }
  w78(_set____db54di) {
    this.fb1_1 = _set____db54di;
  }
  o6a() {
    return this.fb1_1;
  }
  caq(_set____db54di) {
    this.gb1_1 = _set____db54di;
  }
  yam() {
    return this.gb1_1;
  }
  xai(_set____db54di) {
    this.hb1_1 = _set____db54di;
  }
  yai() {
    return this.hb1_1;
  }
  zai(_set____db54di) {
    this.ib1_1 = _set____db54di;
  }
  aaj() {
    return this.ib1_1;
  }
  raj(_set____db54di) {
    this.jb1_1 = _set____db54di;
  }
  saj() {
    return this.jb1_1;
  }
  s8x(_set____db54di) {
    this.kb1_1 = _set____db54di;
  }
  s8s() {
    return this.kb1_1;
  }
  daq(_set____db54di) {
    this.lb1_1 = _set____db54di;
  }
  eaq() {
    return this.lb1_1;
  }
  faq(_set____db54di) {
    this.mb1_1 = _set____db54di;
  }
  gaq() {
    return this.mb1_1;
  }
  haq(_set____db54di) {
    this.nb1_1 = _set____db54di;
  }
  f9v() {
    return this.nb1_1;
  }
  iaq(_set____db54di) {
    this.ob1_1 = _set____db54di;
  }
  jaq() {
    return this.ob1_1;
  }
  kaq(_set____db54di) {
    this.pb1_1 = _set____db54di;
  }
  j90() {
    return this.pb1_1;
  }
  m8k(_set____db54di) {
    this.qb1_1 = _set____db54di;
  }
  d71() {
    return this.qb1_1;
  }
  o8s(_set____db54di) {
    this.rb1_1 = _set____db54di;
  }
  n6i() {
    return this.rb1_1;
  }
  a8z(_set____db54di) {
    this.sb1_1 = _set____db54di;
  }
  b8z() {
    return this.sb1_1;
  }
  laq(_set____db54di) {
    this.tb1_1 = _set____db54di;
  }
  maq() {
    return this.tb1_1;
  }
  v8z(_set____db54di) {
    this.ub1_1 = _set____db54di;
  }
  w8z() {
    return this.ub1_1;
  }
  baj(_set____db54di) {
    this.vb1_1 = _set____db54di;
  }
  caj() {
    return this.vb1_1;
  }
  naq(_set____db54di) {
    this.wb1_1 = _set____db54di;
  }
  oaq() {
    return this.wb1_1;
  }
  paq(_set____db54di) {
    this.xb1_1 = _set____db54di;
  }
  qaq() {
    return this.xb1_1;
  }
  raq(_set____db54di) {
    this.yb1_1 = _set____db54di;
  }
  saq() {
    return this.yb1_1;
  }
  taq(_set____db54di) {
    this.zb1_1 = _set____db54di;
  }
  uaq() {
    return this.zb1_1;
  }
  vaq(_set____db54di) {
    this.ab2_1 = _set____db54di;
  }
  waq() {
    return this.ab2_1;
  }
  xaq(_set____db54di) {
    this.bb2_1 = _set____db54di;
  }
  yaq() {
    return this.bb2_1;
  }
  zaq(_set____db54di) {
    this.cb2_1 = _set____db54di;
  }
  aar() {
    return this.cb2_1;
  }
  bar(_set____db54di) {
    this.db2_1 = _set____db54di;
  }
  car() {
    return this.db2_1;
  }
  dar(_set____db54di) {
    this.eb2_1 = _set____db54di;
  }
  ear() {
    return this.eb2_1;
  }
  far(_set____db54di) {
    this.fb2_1 = _set____db54di;
  }
  gar() {
    return this.fb2_1;
  }
  har(_set____db54di) {
    this.gb2_1 = _set____db54di;
  }
  iar() {
    return this.gb2_1;
  }
  jar(_set____db54di) {
    this.hb2_1 = _set____db54di;
  }
  kar() {
    return this.hb2_1;
  }
  lar(_set____db54di) {
    this.ib2_1 = _set____db54di;
  }
  mar() {
    return this.ib2_1;
  }
  nar(_set____db54di) {
    this.jb2_1 = _set____db54di;
  }
  oar() {
    return this.jb2_1;
  }
  par(_set____db54di) {
    this.kb2_1 = _set____db54di;
  }
  qar() {
    return this.kb2_1;
  }
  ial(_set____db54di) {
    this.lb2_1 = _set____db54di;
  }
  jal() {
    return this.lb2_1;
  }
  rar(_set____db54di) {
    this.mb2_1 = _set____db54di;
  }
  o9h() {
    return this.mb2_1;
  }
  sar(_set____db54di) {
    this.nb2_1 = _set____db54di;
  }
  tar() {
    return this.nb2_1;
  }
  x6s(_set____db54di) {
    this.text = _set____db54di;
  }
  z5c() {
    return this.text;
  }
  kaj(_set____db54di) {
    this.source = _set____db54di;
  }
  l2h() {
    return this.source;
  }
  static ob2(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, text, source, serializationConstructorMarker) {
    Companion_getInstance_23();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_21().yb0_1);
    }
    var $this = this.nap();
    $this.ab1_1 = blogName;
    $this.bb1_1 = idString;
    $this.cb1_1 = genesisPostId;
    $this.db1_1 = postUrl;
    $this.eb1_1 = parentPostUrl;
    $this.fb1_1 = type;
    $this.gb1_1 = timestamp;
    $this.hb1_1 = date;
    $this.ib1_1 = format;
    $this.jb1_1 = reblogKey;
    $this.kb1_1 = tags;
    $this.lb1_1 = isBookmarklet;
    $this.mb1_1 = isMobile;
    $this.nb1_1 = sourceUrl;
    $this.ob1_1 = sourceTitle;
    $this.pb1_1 = isLiked;
    $this.qb1_1 = state;
    $this.rb1_1 = title;
    $this.sb1_1 = body;
    $this.tb1_1 = noteCount;
    $this.ub1_1 = summary;
    $this.vb1_1 = slug;
    $this.wb1_1 = rebloggedFromId;
    $this.xb1_1 = rebloggedFromUrl;
    $this.yb1_1 = rebloggedFromName;
    $this.zb1_1 = rebloggedFromTitle;
    $this.ab2_1 = rebloggedFromUuid;
    $this.bb2_1 = rebloggedFromCanMessage;
    $this.cb2_1 = rebloggedFromFollowing;
    $this.db2_1 = rebloggedRootId;
    $this.eb2_1 = rebloggedRootUrl;
    $this.fb2_1 = rebloggedRootName;
    $this.gb2_1 = rebloggedRootTitle;
    $this.hb2_1 = rebloggedRootUuid;
    $this.ib2_1 = rebloggedRootCanMessage;
    $this.jb2_1 = rebloggedRootFollowing;
    $this.kb2_1 = notes;
    $this.lb2_1 = blog;
    $this.mb2_1 = reblog;
    $this.nb2_1 = trail;
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
class Companion_24 {
  constructor() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qb2_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1)];
  }
  z26() {
    return $serializer_getInstance_22();
  }
}
class $serializer_23 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyTextPost', this, 40);
    tmp0_serialDesc.f18('blog_name', false);
    tmp0_serialDesc.f18('id_string', false);
    tmp0_serialDesc.f18('genesis_post_id', false);
    tmp0_serialDesc.f18('post_url', false);
    tmp0_serialDesc.f18('parent_post_url', false);
    tmp0_serialDesc.f18('type', false);
    tmp0_serialDesc.f18('timestamp', false);
    tmp0_serialDesc.f18('date', false);
    tmp0_serialDesc.f18('format', false);
    tmp0_serialDesc.f18('reblog_key', false);
    tmp0_serialDesc.f18('tags', false);
    tmp0_serialDesc.f18('bookmarklet', false);
    tmp0_serialDesc.f18('mobile', false);
    tmp0_serialDesc.f18('source_url', false);
    tmp0_serialDesc.f18('source_title', false);
    tmp0_serialDesc.f18('liked', false);
    tmp0_serialDesc.f18('state', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('body', false);
    tmp0_serialDesc.f18('note_count', false);
    tmp0_serialDesc.f18('summary', false);
    tmp0_serialDesc.f18('slug', false);
    tmp0_serialDesc.f18('reblogged_from_id', false);
    tmp0_serialDesc.f18('reblogged_from_url', false);
    tmp0_serialDesc.f18('reblogged_from_name', false);
    tmp0_serialDesc.f18('reblogged_from_title', false);
    tmp0_serialDesc.f18('reblogged_from_uuid', false);
    tmp0_serialDesc.f18('reblogged_from_can_message', false);
    tmp0_serialDesc.f18('reblogged_from_following', false);
    tmp0_serialDesc.f18('reblogged_root_id', false);
    tmp0_serialDesc.f18('reblogged_root_url', false);
    tmp0_serialDesc.f18('reblogged_root_name', false);
    tmp0_serialDesc.f18('reblogged_root_title', false);
    tmp0_serialDesc.f18('reblogged_root_uuid', false);
    tmp0_serialDesc.f18('reblogged_root_can_message', false);
    tmp0_serialDesc.f18('reblogged_root_following', false);
    tmp0_serialDesc.f18('notes', false);
    tmp0_serialDesc.f18('blog', false);
    tmp0_serialDesc.f18('reblog', false);
    tmp0_serialDesc.f18('trail', false);
    this.rb2_1 = tmp0_serialDesc;
  }
  sb2(encoder, value) {
    var tmp0_desc = this.rb2_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().qb2_1;
    tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.tb2_1);
    tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.ub2_1);
    tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.vb2_1);
    tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.wb2_1);
    tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.xb2_1);
    tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.yb2_1);
    tmp1_output.f12(tmp0_desc, 6, IntSerializer_getInstance(), value.zb2_1);
    tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.ab3_1);
    tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.bb3_1);
    tmp1_output.f12(tmp0_desc, 9, StringSerializer_getInstance(), value.cb3_1);
    tmp1_output.f12(tmp0_desc, 10, tmp2_cached[10].b3(), value.db3_1);
    tmp1_output.f12(tmp0_desc, 11, BooleanSerializer_getInstance(), value.eb3_1);
    tmp1_output.f12(tmp0_desc, 12, BooleanSerializer_getInstance(), value.fb3_1);
    tmp1_output.f12(tmp0_desc, 13, StringSerializer_getInstance(), value.gb3_1);
    tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.hb3_1);
    tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ib3_1);
    tmp1_output.f12(tmp0_desc, 16, StringSerializer_getInstance(), value.jb3_1);
    tmp1_output.f12(tmp0_desc, 17, StringSerializer_getInstance(), value.kb3_1);
    tmp1_output.f12(tmp0_desc, 18, StringSerializer_getInstance(), value.lb3_1);
    tmp1_output.f12(tmp0_desc, 19, IntSerializer_getInstance(), value.mb3_1);
    tmp1_output.f12(tmp0_desc, 20, StringSerializer_getInstance(), value.nb3_1);
    tmp1_output.f12(tmp0_desc, 21, StringSerializer_getInstance(), value.ob3_1);
    tmp1_output.f12(tmp0_desc, 22, StringSerializer_getInstance(), value.pb3_1);
    tmp1_output.f12(tmp0_desc, 23, StringSerializer_getInstance(), value.qb3_1);
    tmp1_output.f12(tmp0_desc, 24, StringSerializer_getInstance(), value.rb3_1);
    tmp1_output.f12(tmp0_desc, 25, StringSerializer_getInstance(), value.sb3_1);
    tmp1_output.f12(tmp0_desc, 26, StringSerializer_getInstance(), value.tb3_1);
    tmp1_output.f12(tmp0_desc, 27, BooleanSerializer_getInstance(), value.ub3_1);
    tmp1_output.f12(tmp0_desc, 28, BooleanSerializer_getInstance(), value.vb3_1);
    tmp1_output.f12(tmp0_desc, 29, StringSerializer_getInstance(), value.wb3_1);
    tmp1_output.f12(tmp0_desc, 30, StringSerializer_getInstance(), value.xb3_1);
    tmp1_output.f12(tmp0_desc, 31, StringSerializer_getInstance(), value.yb3_1);
    tmp1_output.f12(tmp0_desc, 32, StringSerializer_getInstance(), value.zb3_1);
    tmp1_output.f12(tmp0_desc, 33, StringSerializer_getInstance(), value.ab4_1);
    tmp1_output.f12(tmp0_desc, 34, BooleanSerializer_getInstance(), value.bb4_1);
    tmp1_output.f12(tmp0_desc, 35, BooleanSerializer_getInstance(), value.cb4_1);
    tmp1_output.f12(tmp0_desc, 36, tmp2_cached[36].b3(), value.db4_1);
    tmp1_output.f12(tmp0_desc, 37, $serializer_getInstance_12(), value.eb4_1);
    tmp1_output.f12(tmp0_desc, 38, $serializer_getInstance_15(), value.fb4_1);
    tmp1_output.f12(tmp0_desc, 39, tmp2_cached[39].b3(), value.gb4_1);
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.sb2(encoder, value instanceof LegacyTextPost ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.rb2_1;
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
    var tmp45_input = decoder.l10(tmp0_desc);
    var tmp46_cached = Companion_getInstance_24().qb2_1;
    if (tmp45_input.b11()) {
      tmp5_local0 = tmp45_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp45_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp45_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp45_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp45_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp45_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp45_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp45_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp45_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp45_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp45_input.z10(tmp0_desc, 10, tmp46_cached[10].b3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp45_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp45_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp45_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp45_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp45_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp45_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp45_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp45_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp45_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp45_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp45_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp45_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp45_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp45_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp45_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp45_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp45_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp45_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp45_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp45_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp45_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp45_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp45_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp45_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp45_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp45_input.z10(tmp0_desc, 36, tmp46_cached[36].b3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp45_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp45_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp45_input.z10(tmp0_desc, 39, tmp46_cached[39].b3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp45_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp45_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp45_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp45_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp45_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp45_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp45_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp45_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp45_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp45_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp45_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp45_input.z10(tmp0_desc, 10, tmp46_cached[10].b3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp45_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp45_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp45_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp45_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp45_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp45_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp45_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp45_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp45_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp45_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp45_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp45_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp45_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp45_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp45_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp45_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp45_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp45_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp45_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp45_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp45_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp45_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp45_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp45_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp45_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp45_input.z10(tmp0_desc, 36, tmp46_cached[36].b3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp45_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp45_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp45_input.z10(tmp0_desc, 39, tmp46_cached[39].b3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp45_input.m10(tmp0_desc);
    return LegacyTextPost.hb4(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, null);
  }
  xv() {
    return this.rb2_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_24().qb2_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].b3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].b3()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].b3())];
  }
}
class LegacyTextPost extends Post {
  yah(_set____db54di) {
    this.tb2_1 = _set____db54di;
  }
  zah() {
    return this.tb2_1;
  }
  uap(_set____db54di) {
    this.ub2_1 = _set____db54di;
  }
  vap() {
    return this.ub2_1;
  }
  wap(_set____db54di) {
    this.vb2_1 = _set____db54di;
  }
  xap() {
    return this.vb2_1;
  }
  yap(_set____db54di) {
    this.wb2_1 = _set____db54di;
  }
  zap() {
    return this.wb2_1;
  }
  aaq(_set____db54di) {
    this.xb2_1 = _set____db54di;
  }
  baq() {
    return this.xb2_1;
  }
  w78(_set____db54di) {
    this.yb2_1 = _set____db54di;
  }
  o6a() {
    return this.yb2_1;
  }
  caq(_set____db54di) {
    this.zb2_1 = _set____db54di;
  }
  yam() {
    return this.zb2_1;
  }
  xai(_set____db54di) {
    this.ab3_1 = _set____db54di;
  }
  yai() {
    return this.ab3_1;
  }
  zai(_set____db54di) {
    this.bb3_1 = _set____db54di;
  }
  aaj() {
    return this.bb3_1;
  }
  raj(_set____db54di) {
    this.cb3_1 = _set____db54di;
  }
  saj() {
    return this.cb3_1;
  }
  s8x(_set____db54di) {
    this.db3_1 = _set____db54di;
  }
  s8s() {
    return this.db3_1;
  }
  daq(_set____db54di) {
    this.eb3_1 = _set____db54di;
  }
  eaq() {
    return this.eb3_1;
  }
  faq(_set____db54di) {
    this.fb3_1 = _set____db54di;
  }
  gaq() {
    return this.fb3_1;
  }
  haq(_set____db54di) {
    this.gb3_1 = _set____db54di;
  }
  f9v() {
    return this.gb3_1;
  }
  iaq(_set____db54di) {
    this.hb3_1 = _set____db54di;
  }
  jaq() {
    return this.hb3_1;
  }
  kaq(_set____db54di) {
    this.ib3_1 = _set____db54di;
  }
  j90() {
    return this.ib3_1;
  }
  m8k(_set____db54di) {
    this.jb3_1 = _set____db54di;
  }
  d71() {
    return this.jb3_1;
  }
  o8s(_set____db54di) {
    this.kb3_1 = _set____db54di;
  }
  n6i() {
    return this.kb3_1;
  }
  a8z(_set____db54di) {
    this.lb3_1 = _set____db54di;
  }
  b8z() {
    return this.lb3_1;
  }
  laq(_set____db54di) {
    this.mb3_1 = _set____db54di;
  }
  maq() {
    return this.mb3_1;
  }
  v8z(_set____db54di) {
    this.nb3_1 = _set____db54di;
  }
  w8z() {
    return this.nb3_1;
  }
  baj(_set____db54di) {
    this.ob3_1 = _set____db54di;
  }
  caj() {
    return this.ob3_1;
  }
  naq(_set____db54di) {
    this.pb3_1 = _set____db54di;
  }
  oaq() {
    return this.pb3_1;
  }
  paq(_set____db54di) {
    this.qb3_1 = _set____db54di;
  }
  qaq() {
    return this.qb3_1;
  }
  raq(_set____db54di) {
    this.rb3_1 = _set____db54di;
  }
  saq() {
    return this.rb3_1;
  }
  taq(_set____db54di) {
    this.sb3_1 = _set____db54di;
  }
  uaq() {
    return this.sb3_1;
  }
  vaq(_set____db54di) {
    this.tb3_1 = _set____db54di;
  }
  waq() {
    return this.tb3_1;
  }
  xaq(_set____db54di) {
    this.ub3_1 = _set____db54di;
  }
  yaq() {
    return this.ub3_1;
  }
  zaq(_set____db54di) {
    this.vb3_1 = _set____db54di;
  }
  aar() {
    return this.vb3_1;
  }
  bar(_set____db54di) {
    this.wb3_1 = _set____db54di;
  }
  car() {
    return this.wb3_1;
  }
  dar(_set____db54di) {
    this.xb3_1 = _set____db54di;
  }
  ear() {
    return this.xb3_1;
  }
  far(_set____db54di) {
    this.yb3_1 = _set____db54di;
  }
  gar() {
    return this.yb3_1;
  }
  har(_set____db54di) {
    this.zb3_1 = _set____db54di;
  }
  iar() {
    return this.zb3_1;
  }
  jar(_set____db54di) {
    this.ab4_1 = _set____db54di;
  }
  kar() {
    return this.ab4_1;
  }
  lar(_set____db54di) {
    this.bb4_1 = _set____db54di;
  }
  mar() {
    return this.bb4_1;
  }
  nar(_set____db54di) {
    this.cb4_1 = _set____db54di;
  }
  oar() {
    return this.cb4_1;
  }
  par(_set____db54di) {
    this.db4_1 = _set____db54di;
  }
  qar() {
    return this.db4_1;
  }
  ial(_set____db54di) {
    this.eb4_1 = _set____db54di;
  }
  jal() {
    return this.eb4_1;
  }
  rar(_set____db54di) {
    this.fb4_1 = _set____db54di;
  }
  o9h() {
    return this.fb4_1;
  }
  sar(_set____db54di) {
    this.gb4_1 = _set____db54di;
  }
  tar() {
    return this.gb4_1;
  }
  static hb4(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker) {
    Companion_getInstance_24();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_22().rb2_1);
    }
    var $this = this.nap();
    $this.tb2_1 = blogName;
    $this.ub2_1 = idString;
    $this.vb2_1 = genesisPostId;
    $this.wb2_1 = postUrl;
    $this.xb2_1 = parentPostUrl;
    $this.yb2_1 = type;
    $this.zb2_1 = timestamp;
    $this.ab3_1 = date;
    $this.bb3_1 = format;
    $this.cb3_1 = reblogKey;
    $this.db3_1 = tags;
    $this.eb3_1 = isBookmarklet;
    $this.fb3_1 = isMobile;
    $this.gb3_1 = sourceUrl;
    $this.hb3_1 = sourceTitle;
    $this.ib3_1 = isLiked;
    $this.jb3_1 = state;
    $this.kb3_1 = title;
    $this.lb3_1 = body;
    $this.mb3_1 = noteCount;
    $this.nb3_1 = summary;
    $this.ob3_1 = slug;
    $this.pb3_1 = rebloggedFromId;
    $this.qb3_1 = rebloggedFromUrl;
    $this.rb3_1 = rebloggedFromName;
    $this.sb3_1 = rebloggedFromTitle;
    $this.tb3_1 = rebloggedFromUuid;
    $this.ub3_1 = rebloggedFromCanMessage;
    $this.vb3_1 = rebloggedFromFollowing;
    $this.wb3_1 = rebloggedRootId;
    $this.xb3_1 = rebloggedRootUrl;
    $this.yb3_1 = rebloggedRootName;
    $this.zb3_1 = rebloggedRootTitle;
    $this.ab4_1 = rebloggedRootUuid;
    $this.bb4_1 = rebloggedRootCanMessage;
    $this.cb4_1 = rebloggedRootFollowing;
    $this.db4_1 = notes;
    $this.eb4_1 = blog;
    $this.fb4_1 = reblog;
    $this.gb4_1 = trail;
    return $this;
  }
}
class Companion_25 {
  constructor() {
    Companion_instance_25 = this;
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
    tmp.ib4_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, lazy(tmp_6, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2)];
  }
  z26() {
    return $serializer_getInstance_23();
  }
}
class $serializer_24 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyVideoPost', this, 42);
    tmp0_serialDesc.f18('blog_name', false);
    tmp0_serialDesc.f18('id_string', false);
    tmp0_serialDesc.f18('genesis_post_id', false);
    tmp0_serialDesc.f18('post_url', false);
    tmp0_serialDesc.f18('parent_post_url', false);
    tmp0_serialDesc.f18('type', false);
    tmp0_serialDesc.f18('timestamp', false);
    tmp0_serialDesc.f18('date', false);
    tmp0_serialDesc.f18('format', false);
    tmp0_serialDesc.f18('reblog_key', false);
    tmp0_serialDesc.f18('tags', false);
    tmp0_serialDesc.f18('bookmarklet', false);
    tmp0_serialDesc.f18('mobile', false);
    tmp0_serialDesc.f18('source_url', false);
    tmp0_serialDesc.f18('source_title', false);
    tmp0_serialDesc.f18('liked', false);
    tmp0_serialDesc.f18('state', false);
    tmp0_serialDesc.f18('title', false);
    tmp0_serialDesc.f18('body', false);
    tmp0_serialDesc.f18('note_count', false);
    tmp0_serialDesc.f18('summary', false);
    tmp0_serialDesc.f18('slug', false);
    tmp0_serialDesc.f18('reblogged_from_id', false);
    tmp0_serialDesc.f18('reblogged_from_url', false);
    tmp0_serialDesc.f18('reblogged_from_name', false);
    tmp0_serialDesc.f18('reblogged_from_title', false);
    tmp0_serialDesc.f18('reblogged_from_uuid', false);
    tmp0_serialDesc.f18('reblogged_from_can_message', false);
    tmp0_serialDesc.f18('reblogged_from_following', false);
    tmp0_serialDesc.f18('reblogged_root_id', false);
    tmp0_serialDesc.f18('reblogged_root_url', false);
    tmp0_serialDesc.f18('reblogged_root_name', false);
    tmp0_serialDesc.f18('reblogged_root_title', false);
    tmp0_serialDesc.f18('reblogged_root_uuid', false);
    tmp0_serialDesc.f18('reblogged_root_can_message', false);
    tmp0_serialDesc.f18('reblogged_root_following', false);
    tmp0_serialDesc.f18('notes', false);
    tmp0_serialDesc.f18('blog', false);
    tmp0_serialDesc.f18('reblog', false);
    tmp0_serialDesc.f18('trail', false);
    tmp0_serialDesc.f18('caption', true);
    tmp0_serialDesc.f18('player', true);
    this.jb4_1 = tmp0_serialDesc;
  }
  kb4(encoder, value) {
    var tmp0_desc = this.jb4_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().ib4_1;
    tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.lb4_1);
    tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.mb4_1);
    tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.nb4_1);
    tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.ob4_1);
    tmp1_output.f12(tmp0_desc, 4, StringSerializer_getInstance(), value.pb4_1);
    tmp1_output.f12(tmp0_desc, 5, StringSerializer_getInstance(), value.qb4_1);
    tmp1_output.f12(tmp0_desc, 6, IntSerializer_getInstance(), value.rb4_1);
    tmp1_output.f12(tmp0_desc, 7, StringSerializer_getInstance(), value.sb4_1);
    tmp1_output.f12(tmp0_desc, 8, StringSerializer_getInstance(), value.tb4_1);
    tmp1_output.f12(tmp0_desc, 9, StringSerializer_getInstance(), value.ub4_1);
    tmp1_output.f12(tmp0_desc, 10, tmp2_cached[10].b3(), value.vb4_1);
    tmp1_output.f12(tmp0_desc, 11, BooleanSerializer_getInstance(), value.wb4_1);
    tmp1_output.f12(tmp0_desc, 12, BooleanSerializer_getInstance(), value.xb4_1);
    tmp1_output.f12(tmp0_desc, 13, StringSerializer_getInstance(), value.yb4_1);
    tmp1_output.f12(tmp0_desc, 14, StringSerializer_getInstance(), value.zb4_1);
    tmp1_output.f12(tmp0_desc, 15, BooleanSerializer_getInstance(), value.ab5_1);
    tmp1_output.f12(tmp0_desc, 16, StringSerializer_getInstance(), value.bb5_1);
    tmp1_output.f12(tmp0_desc, 17, StringSerializer_getInstance(), value.cb5_1);
    tmp1_output.f12(tmp0_desc, 18, StringSerializer_getInstance(), value.db5_1);
    tmp1_output.f12(tmp0_desc, 19, IntSerializer_getInstance(), value.eb5_1);
    tmp1_output.f12(tmp0_desc, 20, StringSerializer_getInstance(), value.fb5_1);
    tmp1_output.f12(tmp0_desc, 21, StringSerializer_getInstance(), value.gb5_1);
    tmp1_output.f12(tmp0_desc, 22, StringSerializer_getInstance(), value.hb5_1);
    tmp1_output.f12(tmp0_desc, 23, StringSerializer_getInstance(), value.ib5_1);
    tmp1_output.f12(tmp0_desc, 24, StringSerializer_getInstance(), value.jb5_1);
    tmp1_output.f12(tmp0_desc, 25, StringSerializer_getInstance(), value.kb5_1);
    tmp1_output.f12(tmp0_desc, 26, StringSerializer_getInstance(), value.lb5_1);
    tmp1_output.f12(tmp0_desc, 27, BooleanSerializer_getInstance(), value.mb5_1);
    tmp1_output.f12(tmp0_desc, 28, BooleanSerializer_getInstance(), value.nb5_1);
    tmp1_output.f12(tmp0_desc, 29, StringSerializer_getInstance(), value.ob5_1);
    tmp1_output.f12(tmp0_desc, 30, StringSerializer_getInstance(), value.pb5_1);
    tmp1_output.f12(tmp0_desc, 31, StringSerializer_getInstance(), value.qb5_1);
    tmp1_output.f12(tmp0_desc, 32, StringSerializer_getInstance(), value.rb5_1);
    tmp1_output.f12(tmp0_desc, 33, StringSerializer_getInstance(), value.sb5_1);
    tmp1_output.f12(tmp0_desc, 34, BooleanSerializer_getInstance(), value.tb5_1);
    tmp1_output.f12(tmp0_desc, 35, BooleanSerializer_getInstance(), value.ub5_1);
    tmp1_output.f12(tmp0_desc, 36, tmp2_cached[36].b3(), value.vb5_1);
    tmp1_output.f12(tmp0_desc, 37, $serializer_getInstance_12(), value.wb5_1);
    tmp1_output.f12(tmp0_desc, 38, $serializer_getInstance_15(), value.xb5_1);
    tmp1_output.f12(tmp0_desc, 39, tmp2_cached[39].b3(), value.yb5_1);
    if (tmp1_output.j12(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.f12(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.j12(tmp0_desc, 41) ? true : !(value.player == null)) {
      tmp1_output.f12(tmp0_desc, 41, tmp2_cached[41].b3(), value.player);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.kb4(encoder, value instanceof LegacyVideoPost ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.jb4_1;
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
    var tmp47_input = decoder.l10(tmp0_desc);
    var tmp48_cached = Companion_getInstance_25().ib4_1;
    if (tmp47_input.b11()) {
      tmp5_local0 = tmp47_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.z10(tmp0_desc, 10, tmp48_cached[10].b3(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.z10(tmp0_desc, 36, tmp48_cached[36].b3(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.z10(tmp0_desc, 39, tmp48_cached[39].b3(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.z10(tmp0_desc, 41, tmp48_cached[41].b3(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.z10(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.z10(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.z10(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.z10(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.z10(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.z10(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.z10(tmp0_desc, 10, tmp48_cached[10].b3(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.z10(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.z10(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.z10(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.z10(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.z10(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.z10(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.z10(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.z10(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.z10(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.z10(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.z10(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.z10(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.z10(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.z10(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.z10(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.z10(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.z10(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.z10(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.z10(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.z10(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.z10(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.z10(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.z10(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.z10(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.z10(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.z10(tmp0_desc, 36, tmp48_cached[36].b3(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.z10(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.z10(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.z10(tmp0_desc, 39, tmp48_cached[39].b3(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.z10(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.z10(tmp0_desc, 41, tmp48_cached[41].b3(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp47_input.m10(tmp0_desc);
    return LegacyVideoPost.zb5(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  }
  xv() {
    return this.jb4_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_25().ib4_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].b3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].b3()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].b3()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[41].b3())];
  }
}
class LegacyVideoPost extends Post {
  constructor(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    return new.target.ab6(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail);
  }
  static ab6(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_25();
    var $this = this.nap();
    $this.lb4_1 = blogName;
    $this.mb4_1 = idString;
    $this.nb4_1 = genesisPostId;
    $this.ob4_1 = postUrl;
    $this.pb4_1 = parentPostUrl;
    $this.qb4_1 = type;
    $this.rb4_1 = timestamp;
    $this.sb4_1 = date;
    $this.tb4_1 = format;
    $this.ub4_1 = reblogKey;
    $this.vb4_1 = tags;
    $this.wb4_1 = isBookmarklet;
    $this.xb4_1 = isMobile;
    $this.yb4_1 = sourceUrl;
    $this.zb4_1 = sourceTitle;
    $this.ab5_1 = isLiked;
    $this.bb5_1 = state;
    $this.cb5_1 = title;
    $this.db5_1 = body;
    $this.eb5_1 = noteCount;
    $this.fb5_1 = summary;
    $this.gb5_1 = slug;
    $this.hb5_1 = rebloggedFromId;
    $this.ib5_1 = rebloggedFromUrl;
    $this.jb5_1 = rebloggedFromName;
    $this.kb5_1 = rebloggedFromTitle;
    $this.lb5_1 = rebloggedFromUuid;
    $this.mb5_1 = rebloggedFromCanMessage;
    $this.nb5_1 = rebloggedFromFollowing;
    $this.ob5_1 = rebloggedRootId;
    $this.pb5_1 = rebloggedRootUrl;
    $this.qb5_1 = rebloggedRootName;
    $this.rb5_1 = rebloggedRootTitle;
    $this.sb5_1 = rebloggedRootUuid;
    $this.tb5_1 = rebloggedRootCanMessage;
    $this.ub5_1 = rebloggedRootFollowing;
    $this.vb5_1 = notes;
    $this.wb5_1 = blog;
    $this.xb5_1 = reblog;
    $this.yb5_1 = trail;
    $this.caption = null;
    $this.player = null;
    return $this;
  }
  yah(_set____db54di) {
    this.lb4_1 = _set____db54di;
  }
  zah() {
    return this.lb4_1;
  }
  uap(_set____db54di) {
    this.mb4_1 = _set____db54di;
  }
  vap() {
    return this.mb4_1;
  }
  wap(_set____db54di) {
    this.nb4_1 = _set____db54di;
  }
  xap() {
    return this.nb4_1;
  }
  yap(_set____db54di) {
    this.ob4_1 = _set____db54di;
  }
  zap() {
    return this.ob4_1;
  }
  aaq(_set____db54di) {
    this.pb4_1 = _set____db54di;
  }
  baq() {
    return this.pb4_1;
  }
  w78(_set____db54di) {
    this.qb4_1 = _set____db54di;
  }
  o6a() {
    return this.qb4_1;
  }
  caq(_set____db54di) {
    this.rb4_1 = _set____db54di;
  }
  yam() {
    return this.rb4_1;
  }
  xai(_set____db54di) {
    this.sb4_1 = _set____db54di;
  }
  yai() {
    return this.sb4_1;
  }
  zai(_set____db54di) {
    this.tb4_1 = _set____db54di;
  }
  aaj() {
    return this.tb4_1;
  }
  raj(_set____db54di) {
    this.ub4_1 = _set____db54di;
  }
  saj() {
    return this.ub4_1;
  }
  s8x(_set____db54di) {
    this.vb4_1 = _set____db54di;
  }
  s8s() {
    return this.vb4_1;
  }
  daq(_set____db54di) {
    this.wb4_1 = _set____db54di;
  }
  eaq() {
    return this.wb4_1;
  }
  faq(_set____db54di) {
    this.xb4_1 = _set____db54di;
  }
  gaq() {
    return this.xb4_1;
  }
  haq(_set____db54di) {
    this.yb4_1 = _set____db54di;
  }
  f9v() {
    return this.yb4_1;
  }
  iaq(_set____db54di) {
    this.zb4_1 = _set____db54di;
  }
  jaq() {
    return this.zb4_1;
  }
  kaq(_set____db54di) {
    this.ab5_1 = _set____db54di;
  }
  j90() {
    return this.ab5_1;
  }
  m8k(_set____db54di) {
    this.bb5_1 = _set____db54di;
  }
  d71() {
    return this.bb5_1;
  }
  o8s(_set____db54di) {
    this.cb5_1 = _set____db54di;
  }
  n6i() {
    return this.cb5_1;
  }
  a8z(_set____db54di) {
    this.db5_1 = _set____db54di;
  }
  b8z() {
    return this.db5_1;
  }
  laq(_set____db54di) {
    this.eb5_1 = _set____db54di;
  }
  maq() {
    return this.eb5_1;
  }
  v8z(_set____db54di) {
    this.fb5_1 = _set____db54di;
  }
  w8z() {
    return this.fb5_1;
  }
  baj(_set____db54di) {
    this.gb5_1 = _set____db54di;
  }
  caj() {
    return this.gb5_1;
  }
  naq(_set____db54di) {
    this.hb5_1 = _set____db54di;
  }
  oaq() {
    return this.hb5_1;
  }
  paq(_set____db54di) {
    this.ib5_1 = _set____db54di;
  }
  qaq() {
    return this.ib5_1;
  }
  raq(_set____db54di) {
    this.jb5_1 = _set____db54di;
  }
  saq() {
    return this.jb5_1;
  }
  taq(_set____db54di) {
    this.kb5_1 = _set____db54di;
  }
  uaq() {
    return this.kb5_1;
  }
  vaq(_set____db54di) {
    this.lb5_1 = _set____db54di;
  }
  waq() {
    return this.lb5_1;
  }
  xaq(_set____db54di) {
    this.mb5_1 = _set____db54di;
  }
  yaq() {
    return this.mb5_1;
  }
  zaq(_set____db54di) {
    this.nb5_1 = _set____db54di;
  }
  aar() {
    return this.nb5_1;
  }
  bar(_set____db54di) {
    this.ob5_1 = _set____db54di;
  }
  car() {
    return this.ob5_1;
  }
  dar(_set____db54di) {
    this.pb5_1 = _set____db54di;
  }
  ear() {
    return this.pb5_1;
  }
  far(_set____db54di) {
    this.qb5_1 = _set____db54di;
  }
  gar() {
    return this.qb5_1;
  }
  har(_set____db54di) {
    this.rb5_1 = _set____db54di;
  }
  iar() {
    return this.rb5_1;
  }
  jar(_set____db54di) {
    this.sb5_1 = _set____db54di;
  }
  kar() {
    return this.sb5_1;
  }
  lar(_set____db54di) {
    this.tb5_1 = _set____db54di;
  }
  mar() {
    return this.tb5_1;
  }
  nar(_set____db54di) {
    this.ub5_1 = _set____db54di;
  }
  oar() {
    return this.ub5_1;
  }
  par(_set____db54di) {
    this.vb5_1 = _set____db54di;
  }
  qar() {
    return this.vb5_1;
  }
  ial(_set____db54di) {
    this.wb5_1 = _set____db54di;
  }
  jal() {
    return this.wb5_1;
  }
  rar(_set____db54di) {
    this.xb5_1 = _set____db54di;
  }
  o9h() {
    return this.xb5_1;
  }
  sar(_set____db54di) {
    this.yb5_1 = _set____db54di;
  }
  tar() {
    return this.yb5_1;
  }
  oai(_set____db54di) {
    this.caption = _set____db54di;
  }
  pai() {
    return this.caption;
  }
  bb6() {
    return this.player;
  }
  static zb5(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, player, serializationConstructorMarker) {
    Companion_getInstance_25();
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_23().jb4_1);
    }
    var $this = this.nap();
    $this.lb4_1 = blogName;
    $this.mb4_1 = idString;
    $this.nb4_1 = genesisPostId;
    $this.ob4_1 = postUrl;
    $this.pb4_1 = parentPostUrl;
    $this.qb4_1 = type;
    $this.rb4_1 = timestamp;
    $this.sb4_1 = date;
    $this.tb4_1 = format;
    $this.ub4_1 = reblogKey;
    $this.vb4_1 = tags;
    $this.wb4_1 = isBookmarklet;
    $this.xb4_1 = isMobile;
    $this.yb4_1 = sourceUrl;
    $this.zb4_1 = sourceTitle;
    $this.ab5_1 = isLiked;
    $this.bb5_1 = state;
    $this.cb5_1 = title;
    $this.db5_1 = body;
    $this.eb5_1 = noteCount;
    $this.fb5_1 = summary;
    $this.gb5_1 = slug;
    $this.hb5_1 = rebloggedFromId;
    $this.ib5_1 = rebloggedFromUrl;
    $this.jb5_1 = rebloggedFromName;
    $this.kb5_1 = rebloggedFromTitle;
    $this.lb5_1 = rebloggedFromUuid;
    $this.mb5_1 = rebloggedFromCanMessage;
    $this.nb5_1 = rebloggedFromFollowing;
    $this.ob5_1 = rebloggedRootId;
    $this.pb5_1 = rebloggedRootUrl;
    $this.qb5_1 = rebloggedRootName;
    $this.rb5_1 = rebloggedRootTitle;
    $this.sb5_1 = rebloggedRootUuid;
    $this.tb5_1 = rebloggedRootCanMessage;
    $this.ub5_1 = rebloggedRootFollowing;
    $this.vb5_1 = notes;
    $this.wb5_1 = blog;
    $this.xb5_1 = reblog;
    $this.yb5_1 = trail;
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
class Companion_26 {
  z26() {
    return $serializer_getInstance_24();
  }
}
class $serializer_25 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Dialogue', this, 3);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('label', true);
    tmp0_serialDesc.f18('phrase', true);
    this.cb6_1 = tmp0_serialDesc;
  }
  db6(encoder, value) {
    var tmp0_desc = this.cb6_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.label == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.phrase == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.phrase);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.db6(encoder, value instanceof Dialogue ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.cb6_1;
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
    return Dialogue.eb6(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.cb6_1;
  }
  v18() {
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
  i1() {
    return this.name;
  }
  g6b() {
    return this.label;
  }
  fb6() {
    return this.phrase;
  }
  static eb6(seen0, name, label, phrase, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().cb6_1);
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
class Companion_27 {
  constructor() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.gb6_1 = [null, null, lazy(tmp_0, Photo$Companion$$childSerializers$_anonymous__7997i0)];
  }
  z26() {
    return $serializer_getInstance_25();
  }
}
class $serializer_26 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Photo', this, 3);
    tmp0_serialDesc.f18('caption', true);
    tmp0_serialDesc.f18('original_size', true);
    tmp0_serialDesc.f18('alt_sizes', true);
    this.hb6_1 = tmp0_serialDesc;
  }
  ib6(encoder, value) {
    var tmp0_desc = this.hb6_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().gb6_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.caption == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.originalSize == null)) {
      tmp1_output.f12(tmp0_desc, 1, $serializer_getInstance_26(), value.originalSize);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.altSizes == null)) {
      tmp1_output.f12(tmp0_desc, 2, tmp2_cached[2].b3(), value.altSizes);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.ib6(encoder, value instanceof Photo ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.hb6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().gb6_1;
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, $serializer_getInstance_26(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, tmp8_cached[2].b3(), tmp6_local2);
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
            tmp5_local1 = tmp7_input.z10(tmp0_desc, 1, $serializer_getInstance_26(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z10(tmp0_desc, 2, tmp8_cached[2].b3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp7_input.m10(tmp0_desc);
    return Photo.jb6(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.hb6_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_27().gb6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_26()), get_nullable(tmp0_cached[2].b3())];
  }
}
class Photo {
  constructor() {
    Companion_getInstance_27();
    this.caption = null;
    this.originalSize = null;
    this.altSizes = null;
  }
  pai() {
    return this.caption;
  }
  kb6() {
    return this.originalSize;
  }
  lb6() {
    return this.altSizes;
  }
  static jb6(seen0, caption, originalSize, altSizes, serializationConstructorMarker) {
    Companion_getInstance_27();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().hb6_1);
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
class Companion_28 {
  z26() {
    return $serializer_getInstance_26();
  }
}
class $serializer_27 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.PhotoSize', this, 3);
    tmp0_serialDesc.f18('width', true);
    tmp0_serialDesc.f18('height', true);
    tmp0_serialDesc.f18('url', true);
    this.mb6_1 = tmp0_serialDesc;
  }
  nb6(encoder, value) {
    var tmp0_desc = this.mb6_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.width === 0)) {
      tmp1_output.w11(tmp0_desc, 0, value.width);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.height === 0)) {
      tmp1_output.w11(tmp0_desc, 1, value.height);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.nb6(encoder, value instanceof PhotoSize ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.mb6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.l10(tmp0_desc);
    if (tmp7_input.b11()) {
      tmp4_local0 = tmp7_input.q10(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.q10(tmp0_desc, 1);
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
            tmp5_local1 = tmp7_input.q10(tmp0_desc, 1);
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
    return PhotoSize.ob6(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  xv() {
    return this.mb6_1;
  }
  v18() {
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
  r6h() {
    return this.width;
  }
  t6h() {
    return this.height;
  }
  d48() {
    return this.url;
  }
  static ob6(seen0, width, height, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().mb6_1);
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
class Companion_29 {
  z26() {
    return $serializer_getInstance_27();
  }
}
class $serializer_28 {
  constructor() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Video', this, 2);
    tmp0_serialDesc.f18('width', true);
    tmp0_serialDesc.f18('embedCode', true);
    this.pb6_1 = tmp0_serialDesc;
  }
  qb6(encoder, value) {
    var tmp0_desc = this.pb6_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.f12(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.embedCode == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.embedCode);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.qb6(encoder, value instanceof Video ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.pb6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.l10(tmp0_desc);
    if (tmp6_input.b11()) {
      tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
    return Video.rb6(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  xv() {
    return this.pb6_1;
  }
  v18() {
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
  r6h() {
    return this.width;
  }
  sb6() {
    return this.embedCode;
  }
  static rb6(seen0, width, embedCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().pb6_1);
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
class Companion_30 {
  z26() {
    return $serializer_getInstance_28();
  }
}
class $serializer_29 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.BlogInTrail', this, 6);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('active', true);
    tmp0_serialDesc.f18('theme', true);
    tmp0_serialDesc.f18('share_likes', true);
    tmp0_serialDesc.f18('share_following', true);
    tmp0_serialDesc.f18('can_be_followed', true);
    this.tb6_1 = tmp0_serialDesc;
  }
  ub6(encoder, value) {
    var tmp0_desc = this.tb6_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.isActive === false)) {
      tmp1_output.t11(tmp0_desc, 1, value.isActive);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.theme == null)) {
      tmp1_output.f12(tmp0_desc, 2, $serializer_getInstance_14(), value.theme);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.isShareLikes === false)) {
      tmp1_output.t11(tmp0_desc, 3, value.isShareLikes);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.isShareFollowing === false)) {
      tmp1_output.t11(tmp0_desc, 4, value.isShareFollowing);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.isCanBeFollowed === false)) {
      tmp1_output.t11(tmp0_desc, 5, value.isCanBeFollowed);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.ub6(encoder, value instanceof BlogInTrail ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.tb6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.l10(tmp0_desc);
    if (tmp10_input.b11()) {
      tmp4_local0 = tmp10_input.z10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.n10(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.z10(tmp0_desc, 2, $serializer_getInstance_14(), tmp6_local2);
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
            tmp6_local2 = tmp10_input.z10(tmp0_desc, 2, $serializer_getInstance_14(), tmp6_local2);
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
    return BlogInTrail.vb6(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  xv() {
    return this.tb6_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable($serializer_getInstance_14()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
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
  i1() {
    return this.name;
  }
  t2i() {
    return this.isActive;
  }
  aao() {
    return this.theme;
  }
  wb6() {
    return this.isShareLikes;
  }
  xb6() {
    return this.isShareFollowing;
  }
  yb6() {
    return this.isCanBeFollowed;
  }
  static vb6(seen0, name, isActive, theme, isShareLikes, isShareFollowing, isCanBeFollowed, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().tb6_1);
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
class Companion_31 {
  z26() {
    return $serializer_getInstance_29();
  }
}
class $serializer_30 {
  constructor() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.IdInTrail', this, 1);
    tmp0_serialDesc.f18('id', true);
    this.zb6_1 = tmp0_serialDesc;
  }
  ab7(encoder, value) {
    var tmp0_desc = this.zb6_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.ab7(encoder, value instanceof IdInTrail ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.zb6_1;
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
    return IdInTrail.bb7(tmp3_bitMask0, tmp4_local0, null);
  }
  xv() {
    return this.zb6_1;
  }
  v18() {
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
  f22() {
    return this.id;
  }
  static bb7(seen0, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().zb6_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    return $this;
  }
}
class Companion_32 {
  z26() {
    return $serializer_getInstance_30();
  }
}
class $serializer_31 {
  constructor() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.Trail', this, 6);
    tmp0_serialDesc.f18('blog', true);
    tmp0_serialDesc.f18('post', true);
    tmp0_serialDesc.f18('content_raw', true);
    tmp0_serialDesc.f18('content', true);
    tmp0_serialDesc.f18('current_item', true);
    tmp0_serialDesc.f18('root_item', true);
    this.cb7_1 = tmp0_serialDesc;
  }
  db7(encoder, value) {
    var tmp0_desc = this.cb7_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.f12(tmp0_desc, 0, $serializer_getInstance_28(), value.blog);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.post == null)) {
      tmp1_output.f12(tmp0_desc, 1, $serializer_getInstance_29(), value.post);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.contentRaw == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.contentRaw);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.content == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.content);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.isCurrentItem === false)) {
      tmp1_output.t11(tmp0_desc, 4, value.isCurrentItem);
    }
    if (tmp1_output.j12(tmp0_desc, 5) ? true : !(value.isRootItem === false)) {
      tmp1_output.t11(tmp0_desc, 5, value.isRootItem);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.db7(encoder, value instanceof Trail ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.cb7_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.l10(tmp0_desc);
    if (tmp10_input.b11()) {
      tmp4_local0 = tmp10_input.z10(tmp0_desc, 0, $serializer_getInstance_28(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.z10(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
            tmp4_local0 = tmp10_input.z10(tmp0_desc, 0, $serializer_getInstance_28(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.z10(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.z10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
    return Trail.eb7(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  xv() {
    return this.cb7_1;
  }
  v18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_28()), get_nullable($serializer_getInstance_29()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
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
  jal() {
    return this.blog;
  }
  x5d() {
    return this.post;
  }
  fb7() {
    return this.contentRaw;
  }
  o26() {
    return this.content;
  }
  gb7() {
    return this.isCurrentItem;
  }
  hb7() {
    return this.isRootItem;
  }
  static eb7(seen0, blog, post, contentRaw, content, isCurrentItem, isRootItem, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().cb7_1);
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
class Companion_33 {
  z26() {
    return $serializer_getInstance_31();
  }
}
class $serializer_32 {
  constructor() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.FollowerUser', this, 4);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('following', true);
    tmp0_serialDesc.f18('url', true);
    tmp0_serialDesc.f18('updated', true);
    this.ib7_1 = tmp0_serialDesc;
  }
  jb7(encoder, value) {
    var tmp0_desc = this.ib7_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.following == null)) {
      tmp1_output.f12(tmp0_desc, 1, BooleanSerializer_getInstance(), value.following);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.f12(tmp0_desc, 3, StringSerializer_getInstance(), value.updated);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.jb7(encoder, value instanceof FollowerUser ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.ib7_1;
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
      tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp8_input.z10(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
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
    return FollowerUser.kb7(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  xv() {
    return this.ib7_1;
  }
  v18() {
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
  p6v(_set____db54di) {
    this.name = _set____db54di;
  }
  i1() {
    return this.name;
  }
  c7z(_set____db54di) {
    this.following = _set____db54di;
  }
  s6g() {
    return this.following;
  }
  b8g(_set____db54di) {
    this.url = _set____db54di;
  }
  d48() {
    return this.url;
  }
  lb7(_set____db54di) {
    this.updated = _set____db54di;
  }
  tan() {
    return this.updated;
  }
  static kb7(seen0, name, following, url, updated, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().ib7_1);
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
class Companion_34 {
  constructor() {
    Companion_instance_34 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.mb7_1 = [null, null, null, null, lazy(tmp_0, User$Companion$$childSerializers$_anonymous__6nf9sv)];
  }
  z26() {
    return $serializer_getInstance_32();
  }
}
class $serializer_33 {
  constructor() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.User', this, 5);
    tmp0_serialDesc.f18('following', true);
    tmp0_serialDesc.f18('default_post_format', true);
    tmp0_serialDesc.f18('name', true);
    tmp0_serialDesc.f18('likes', true);
    tmp0_serialDesc.f18('blogs', true);
    this.nb7_1 = tmp0_serialDesc;
  }
  ob7(encoder, value) {
    var tmp0_desc = this.nb7_1;
    var tmp1_output = encoder.l10(tmp0_desc);
    var tmp2_cached = Companion_getInstance_34().mb7_1;
    if (tmp1_output.j12(tmp0_desc, 0) ? true : !(value.followingCount == null)) {
      tmp1_output.f12(tmp0_desc, 0, IntSerializer_getInstance(), value.followingCount);
    }
    if (tmp1_output.j12(tmp0_desc, 1) ? true : !(value.defaultPostFormat == null)) {
      tmp1_output.f12(tmp0_desc, 1, StringSerializer_getInstance(), value.defaultPostFormat);
    }
    if (tmp1_output.j12(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.f12(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j12(tmp0_desc, 3) ? true : !(value.likeCount == null)) {
      tmp1_output.f12(tmp0_desc, 3, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.j12(tmp0_desc, 4) ? true : !(value.blogs == null)) {
      tmp1_output.f12(tmp0_desc, 4, tmp2_cached[4].b3(), value.blogs);
    }
    tmp1_output.m10(tmp0_desc);
  }
  yv(encoder, value) {
    return this.ob7(encoder, value instanceof User ? value : THROW_CCE());
  }
  zv(decoder) {
    var tmp0_desc = this.nb7_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.l10(tmp0_desc);
    var tmp10_cached = Companion_getInstance_34().mb7_1;
    if (tmp9_input.b11()) {
      tmp4_local0 = tmp9_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.z10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.z10(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.z10(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.z10(tmp0_desc, 4, tmp10_cached[4].b3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.c11(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.z10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
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
            tmp7_local3 = tmp9_input.z10(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.z10(tmp0_desc, 4, tmp10_cached[4].b3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.sx(tmp2_index);
        }
      }
    tmp9_input.m10(tmp0_desc);
    return User.pb7(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  xv() {
    return this.nb7_1;
  }
  v18() {
    var tmp0_cached = Companion_getInstance_34().mb7_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[4].b3())];
  }
}
class User extends Resource {
  constructor() {
    return new.target.qb7();
  }
  static qb7() {
    Companion_getInstance_34();
    var $this = this.kan();
    $this.followingCount = null;
    $this.defaultPostFormat = null;
    $this.name = null;
    $this.likeCount = null;
    $this.blogs = null;
    return $this;
  }
  y8h() {
    return this.followingCount;
  }
  rb7() {
    return this.defaultPostFormat;
  }
  i1() {
    return this.name;
  }
  q6o() {
    return this.likeCount;
  }
  cal() {
    return this.blogs;
  }
  static pb7(seen0, followingCount, defaultPostFormat, name, likeCount, blogs, serializationConstructorMarker) {
    Companion_getInstance_34();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().nb7_1);
    }
    var $this = this.kan();
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
  constructor(this$0, $path, $params, $files) {
    this.sb7_1 = this$0;
    this.tb7_1 = $path;
    this.ub7_1 = $params;
    this.vb7_1 = $files;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AbstractResourceImpl {
  constructor(auth) {
    this.wb7_1 = auth;
  }
  yb7(path, params, files) {
    return runBlocking(AbstractResourceImpl$oauthPostUnit$slambda_0(this, path, params, files));
  }
  zb7(path, params, files, $super) {
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
    return $super === VOID ? this.yb7(path, params, files) : $super.yb7.call(this, path, params, files);
  }
  ab8(blogName, extPath) {
    return '/blog/' + blogUrl(this, blogName) + extPath;
  }
}
class AuthResourceImpl$oAuth2Token$slambda {
  constructor(this$0, $request) {
    this.bb8_1 = this$0;
    this.cb8_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_0.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AuthResourceImpl$oAuth2TokenRefresh$slambda {
  constructor(this$0, $request) {
    this.eb8_1 = this$0;
    this.fb8_1 = $request;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_1.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AuthResourceImpl extends AbstractResourceImpl {
  authorizeUrl(request) {
    throwIrLinkageError("Constructor 'URLBuilder.<init>' can not be called: No constructor found for symbol 'io.ktor.http/URLBuilder.<init>|<init>(io.ktor.http.URLProtocol;kotlin.String;kotlin.Int;kotlin.String?;kotlin.String?;kotlin.collections.List<kotlin.String>;io.ktor.http.Parameters;kotlin.String;kotlin.Boolean){}[0]'");
  }
  oAuth2Token(request) {
    return runBlocking(AuthResourceImpl$oAuth2Token$slambda_0(this, request));
  }
  oAuth2TokenRefresh(request) {
    return runBlocking(AuthResourceImpl$oAuth2TokenRefresh$slambda_0(this, request));
  }
}
class BlogResourceImpl$blogInfo$slambda {
  constructor($this, $path, $params) {
    this.gb8_1 = $this;
    this.hb8_1 = $path;
    this.ib8_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_2.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogAvatar$slambda {
  constructor($path) {
    this.jb8_1 = $path;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_3.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogLikes$slambda {
  constructor($this, $path, $params) {
    this.kb8_1 = $this;
    this.lb8_1 = $path;
    this.mb8_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_4.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogFollowing$slambda {
  constructor($this, $path, $params) {
    this.nb8_1 = $this;
    this.ob8_1 = $path;
    this.pb8_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_5.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogFollowers$slambda {
  constructor($this, $path, $params) {
    this.qb8_1 = $this;
    this.rb8_1 = $path;
    this.sb8_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_6.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogPosts$slambda {
  constructor($this, $path, $params) {
    this.tb8_1 = $this;
    this.ub8_1 = $path;
    this.vb8_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_7.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogQueuedPosts$slambda {
  constructor($this, $path, $params) {
    this.wb8_1 = $this;
    this.xb8_1 = $path;
    this.yb8_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_8.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogDraftPosts$slambda {
  constructor($this, $path, $params) {
    this.zb8_1 = $this;
    this.ab9_1 = $path;
    this.bb9_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_9.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl$blogSubmissions$slambda {
  constructor($this, $path, $params) {
    this.cb9_1 = $this;
    this.db9_1 = $path;
    this.eb9_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_10.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlogResourceImpl extends AbstractResourceImpl {
  blogInfo(request) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.ab8(ensureNotNull(request.blogName), '/info');
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    return runBlocking(BlogResourceImpl$blogInfo$slambda_0(this, path, params));
  }
  blogAvatar(request) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    var path = this.ab8(ensureNotNull(request.blogName), '/avatar' + ext);
    return runBlocking(BlogResourceImpl$blogAvatar$slambda_0(path));
  }
  blogLikes(request) {
    var tmp2 = this.ab8(ensureNotNull(request.blogName), '/likes');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.vah();
    return runBlocking(BlogResourceImpl$blogLikes$slambda_0(this, tmp2, params));
  }
  blogFollowing(request) {
    var tmp2 = this.ab8(ensureNotNull(request.blogName), '/following');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.vah();
    return runBlocking(BlogResourceImpl$blogFollowing$slambda_0(this, tmp2, params));
  }
  blogFollowers(request) {
    var tmp2 = this.ab8(ensureNotNull(request.blogName), '/followers');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.vah();
    return runBlocking(BlogResourceImpl$blogFollowers$slambda_0(this, tmp2, params));
  }
  blogPosts(request) {
    var ext = request.type == null ? '' : '/' + ensureNotNull(request.type);
    var tmp2 = this.ab8(ensureNotNull(request.blogName), '/posts' + ext);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.vah();
    return runBlocking(BlogResourceImpl$blogPosts$slambda_0(this, tmp2, params));
  }
  blogQueuedPosts(request) {
    var tmp2 = this.ab8(ensureNotNull(request.blogName), '/posts/queue');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.vah();
    return runBlocking(BlogResourceImpl$blogQueuedPosts$slambda_0(this, tmp2, params));
  }
  blogDraftPosts(request) {
    var tmp2 = this.ab8(ensureNotNull(request.blogName), '/posts/draft');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.vah();
    return runBlocking(BlogResourceImpl$blogDraftPosts$slambda_0(this, tmp2, params));
  }
  blogSubmissions(request) {
    var tmp2 = this.ab8(ensureNotNull(request.blogName), '/posts/submission');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.vah();
    return runBlocking(BlogResourceImpl$blogSubmissions$slambda_0(this, tmp2, params));
  }
  postCreate(request) {
    var tmp = this.ab8(ensureNotNull(request.blogName), '/post');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.vah();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.vah();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.vah();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.vah();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.vah();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.vah();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.vah();
                } else {
                  throw IllegalArgumentException.m2('Unknown post type.');
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
      tmp_2 = request.oaj();
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_2 = emptyMap();
    }
    return this.yb7(tmp, tmp_1, tmp_2);
  }
  postEdit(request) {
    var tmp = this.ab8(ensureNotNull(request.blogName), '/post/edit');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.vah();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.vah();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.vah();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.vah();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.vah();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.vah();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.vah();
                } else {
                  throw IllegalArgumentException.m2('Unknown post type.');
                }
              }
            }
          }
        }
      }
    }
    return this.zb7(tmp, tmp_0);
  }
  postReblog(request) {
    return this.zb7(this.ab8(ensureNotNull(request.blogName), '/post/reblog'), request.vah());
  }
  postDelete(request) {
    return this.zb7(this.ab8(ensureNotNull(request.blogName), '/post/delete'), request.vah());
  }
}
class TaggedResourceImpl$tagged$slambda {
  constructor($this, $path, $params) {
    this.fb9_1 = $this;
    this.gb9_1 = $path;
    this.hb9_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_11.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TaggedResourceImpl extends AbstractResourceImpl {
  tagged(request) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.vah();
    return runBlocking(TaggedResourceImpl$tagged$slambda_0(this, '/tagged', params));
  }
}
class UserResourceImpl$user$slambda {
  constructor($this, $path, $params) {
    this.ib9_1 = $this;
    this.jb9_1 = $path;
    this.kb9_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_12.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$userDashboard$slambda {
  constructor($this, $path, $params) {
    this.lb9_1 = $this;
    this.mb9_1 = $path;
    this.nb9_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_13.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$userFollowing$slambda {
  constructor($this, $path, $params) {
    this.ob9_1 = $this;
    this.pb9_1 = $path;
    this.qb9_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_14.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl$userLikes$slambda {
  constructor($this, $path, $params) {
    this.rb9_1 = $this;
    this.sb9_1 = $path;
    this.tb9_1 = $params;
  }
  d39($this$runBlocking, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_15.bind(VOID, this, $this$runBlocking), $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserResourceImpl extends AbstractResourceImpl {
  user() {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var path = '/user/info';
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    return runBlocking(UserResourceImpl$user$slambda_0(this, path, params));
  }
  userDashboard(request) {
    var tmp2 = '/user/dashboard';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.vah();
    return runBlocking(UserResourceImpl$userDashboard$slambda_0(this, tmp2, params));
  }
  userFollowing(request) {
    var tmp2 = '/user/following';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.vah();
    return runBlocking(UserResourceImpl$userFollowing$slambda_0(this, tmp2, params));
  }
  userLikes(request) {
    var tmp2 = '/user/likes';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.vah();
    return runBlocking(UserResourceImpl$userLikes$slambda_0(this, tmp2, params));
  }
  like(request) {
    return this.zb7('/user/like', request.vah());
  }
  unlike(request) {
    return this.zb7('/user/unlike', request.vah());
  }
  follow(request) {
    return this.zb7('/user/follow', request.vah());
  }
  unfollow(request) {
    return this.zb7('/user/unfollow', request.vah());
  }
}
class Json_0 {
  constructor() {
    Json_instance = this;
    var tmp = this;
    tmp.db8_1 = Json(VOID, Json$json$lambda);
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.xb7_1 = Application_getInstance().i3i_1.toString();
  }
}
class PostSerializer extends JsonContentPolymorphicSerializer {
  constructor() {
    PostSerializer_instance = null;
    super(getKClass(Post));
    PostSerializer_instance = this;
  }
  l26(element) {
    var type = get_jsonObject(element).mi('type');
    var tmp;
    var tmp_0;
    if (type instanceof JsonPrimitive) {
      tmp_0 = type.n26();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      switch (type.o26()) {
        case 'text':
          tmp = Companion_getInstance_24().z26();
          break;
        case 'photo':
          tmp = Companion_getInstance_22().z26();
          break;
        case 'quote':
          tmp = Companion_getInstance_23().z26();
          break;
        case 'link':
          tmp = Companion_getInstance_21().z26();
          break;
        case 'video':
          tmp = Companion_getInstance_25().z26();
          break;
        case 'answer':
          tmp = Companion_getInstance_18().z26();
          break;
        default:
          tmp = Companion_instance_17.z26();
          break;
      }
    } else {
      tmp = Companion_instance_17.z26();
    }
    return tmp;
  }
}
//endregion
function init_work_socialhub_ktumblr_TumblrException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.iah_1);
  _this__u8e3s4.gah_1 = null;
  _this__u8e3s4.hah_1 = null;
}
var TumblrFactory_instance;
function TumblrFactory_getInstance() {
  return TumblrFactory_instance;
}
function addParam_0(_this__u8e3s4, key, value) {
  if (value == null)
    return Unit_instance;
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.k4(key, value);
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer_0();
  return $serializer_instance;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_1();
  return $serializer_instance_0;
}
function BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a() {
  return new ReferenceArraySerializer(getKClass(FollowerUser), $serializer_getInstance_31());
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 === VOID)
    new Companion_2();
  return Companion_instance_2;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_2();
  return $serializer_instance_1;
}
function BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi() {
  return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_12());
}
var Companion_instance_3;
function Companion_getInstance_3() {
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
var Companion_instance_4;
function Companion_getInstance_4() {
  return Companion_instance_4;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_4();
  return $serializer_instance_3;
}
function BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9() {
  return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
}
var Companion_instance_5;
function Companion_getInstance_5() {
  if (Companion_instance_5 === VOID)
    new Companion_5();
  return Companion_instance_5;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_5();
  return $serializer_instance_4;
}
function BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0() {
  return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
}
var Companion_instance_6;
function Companion_getInstance_6() {
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
function UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w() {
  return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
}
var Companion_instance_7;
function Companion_getInstance_7() {
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
function UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5() {
  return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_12());
}
var Companion_instance_8;
function Companion_getInstance_8() {
  if (Companion_instance_8 === VOID)
    new Companion_8();
  return Companion_instance_8;
}
var $serializer_instance_7;
function $serializer_getInstance_7() {
  if ($serializer_instance_7 === VOID)
    new $serializer_8();
  return $serializer_instance_7;
}
function UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0() {
  return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
}
var Companion_instance_9;
function Companion_getInstance_9() {
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
var Companion_instance_10;
function Companion_getInstance_10() {
  return Companion_instance_10;
}
var $serializer_instance_9;
function $serializer_getInstance_9() {
  if ($serializer_instance_9 === VOID)
    new $serializer_10();
  return $serializer_instance_9;
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
var Companion_instance_11;
function Companion_getInstance_11() {
  return Companion_instance_11;
}
var $serializer_instance_10;
function $serializer_getInstance_10() {
  if ($serializer_instance_10 === VOID)
    new $serializer_11();
  return $serializer_instance_10;
}
var Companion_instance_12;
function Companion_getInstance_12() {
  return Companion_instance_12;
}
var $serializer_instance_11;
function $serializer_getInstance_11() {
  if ($serializer_instance_11 === VOID)
    new $serializer_12();
  return $serializer_instance_11;
}
function Blog$Companion$$childSerializers$_anonymous__tmgjug() {
  return new ReferenceArraySerializer(getKClass(BlogAvatar), $serializer_getInstance_13());
}
var Companion_instance_13;
function Companion_getInstance_13() {
  if (Companion_instance_13 === VOID)
    new Companion_13();
  return Companion_instance_13;
}
var $serializer_instance_12;
function $serializer_getInstance_12() {
  if ($serializer_instance_12 === VOID)
    new $serializer_13();
  return $serializer_instance_12;
}
var Companion_instance_14;
function Companion_getInstance_14() {
  return Companion_instance_14;
}
var $serializer_instance_13;
function $serializer_getInstance_13() {
  if ($serializer_instance_13 === VOID)
    new $serializer_14();
  return $serializer_instance_13;
}
var Companion_instance_15;
function Companion_getInstance_15() {
  return Companion_instance_15;
}
var $serializer_instance_14;
function $serializer_getInstance_14() {
  if ($serializer_instance_14 === VOID)
    new $serializer_15();
  return $serializer_instance_14;
}
var Companion_instance_16;
function Companion_getInstance_16() {
  return Companion_instance_16;
}
var $serializer_instance_15;
function $serializer_getInstance_15() {
  if ($serializer_instance_15 === VOID)
    new $serializer_16();
  return $serializer_instance_15;
}
var Companion_instance_17;
function Companion_getInstance_17() {
  return Companion_instance_17;
}
function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance());
}
function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
}
function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
}
var Companion_instance_18;
function Companion_getInstance_18() {
  if (Companion_instance_18 === VOID)
    new Companion_18();
  return Companion_instance_18;
}
var $serializer_instance_16;
function $serializer_getInstance_16() {
  if ($serializer_instance_16 === VOID)
    new $serializer_17();
  return $serializer_instance_16;
}
function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance());
}
function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
}
function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
}
var Companion_instance_19;
function Companion_getInstance_19() {
  if (Companion_instance_19 === VOID)
    new Companion_19();
  return Companion_instance_19;
}
var $serializer_instance_17;
function $serializer_getInstance_17() {
  if ($serializer_instance_17 === VOID)
    new $serializer_18();
  return $serializer_instance_17;
}
function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance());
}
function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
}
function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
}
function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2() {
  return new ReferenceArraySerializer(getKClass(Dialogue), $serializer_getInstance_24());
}
var Companion_instance_20;
function Companion_getInstance_20() {
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
function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance());
}
function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
}
function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
}
var Companion_instance_21;
function Companion_getInstance_21() {
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
function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance());
}
function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
}
function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
}
function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2() {
  return new ReferenceArraySerializer(getKClass(Photo), $serializer_getInstance_25());
}
var Companion_instance_22;
function Companion_getInstance_22() {
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
function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance());
}
function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
}
function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
}
var Companion_instance_23;
function Companion_getInstance_23() {
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
function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance());
}
function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
}
function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
}
var Companion_instance_24;
function Companion_getInstance_24() {
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
function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ng(), StringSerializer_getInstance());
}
function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_0() {
  return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
}
function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_1() {
  return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
}
function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2() {
  return new ReferenceArraySerializer(getKClass(Video), $serializer_getInstance_27());
}
var Companion_instance_25;
function Companion_getInstance_25() {
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
var Companion_instance_26;
function Companion_getInstance_26() {
  return Companion_instance_26;
}
var $serializer_instance_24;
function $serializer_getInstance_24() {
  if ($serializer_instance_24 === VOID)
    new $serializer_25();
  return $serializer_instance_24;
}
function Photo$Companion$$childSerializers$_anonymous__7997i0() {
  return new ReferenceArraySerializer(getKClass(PhotoSize), $serializer_getInstance_26());
}
var Companion_instance_27;
function Companion_getInstance_27() {
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
var Companion_instance_28;
function Companion_getInstance_28() {
  return Companion_instance_28;
}
var $serializer_instance_26;
function $serializer_getInstance_26() {
  if ($serializer_instance_26 === VOID)
    new $serializer_27();
  return $serializer_instance_26;
}
var Companion_instance_29;
function Companion_getInstance_29() {
  return Companion_instance_29;
}
var $serializer_instance_27;
function $serializer_getInstance_27() {
  if ($serializer_instance_27 === VOID)
    new $serializer_28();
  return $serializer_instance_27;
}
var Companion_instance_30;
function Companion_getInstance_30() {
  return Companion_instance_30;
}
var $serializer_instance_28;
function $serializer_getInstance_28() {
  if ($serializer_instance_28 === VOID)
    new $serializer_29();
  return $serializer_instance_28;
}
var Companion_instance_31;
function Companion_getInstance_31() {
  return Companion_instance_31;
}
var $serializer_instance_29;
function $serializer_getInstance_29() {
  if ($serializer_instance_29 === VOID)
    new $serializer_30();
  return $serializer_instance_29;
}
var Companion_instance_32;
function Companion_getInstance_32() {
  return Companion_instance_32;
}
var $serializer_instance_30;
function $serializer_getInstance_30() {
  if ($serializer_instance_30 === VOID)
    new $serializer_31();
  return $serializer_instance_30;
}
var Companion_instance_33;
function Companion_getInstance_33() {
  return Companion_instance_33;
}
var $serializer_instance_31;
function $serializer_getInstance_31() {
  if ($serializer_instance_31 === VOID)
    new $serializer_32();
  return $serializer_instance_31;
}
function User$Companion$$childSerializers$_anonymous__6nf9sv() {
  return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_12());
}
var Companion_instance_34;
function Companion_getInstance_34() {
  if (Companion_instance_34 === VOID)
    new Companion_34();
  return Companion_instance_34;
}
var $serializer_instance_32;
function $serializer_getInstance_32() {
  if ($serializer_instance_32 === VOID)
    new $serializer_33();
  return $serializer_instance_32;
}
function *_generator_invoke__zhh2q8($this, $this$runBlocking, $completion) {
  $this.sb7_1;
  var tmp$ret$8;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceedUnit' call
    try {
      // Inline function 'kotlin.also' call
      var this_0 = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.tb7_1).d4s('Authorization', $this.sb7_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).l4s($this.ub7_1);
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $this.vb7_1.z2().q1();
      while (_iterator__ex2g4s.r1()) {
        var element = _iterator__ex2g4s.s1();
        // Inline function 'kotlin.collections.component1' call
        var key = element.a3();
        // Inline function 'kotlin.collections.component2' call
        var pair = element.b3();
        this_0.z4q(key, pair.nl_1, pair.ol_1);
      }
      var tmp = this_0.n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        tmp$ret$8 = new ResponseUnit(response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$8;
}
function blogUrl($this, blogName) {
  return contains(blogName, '.') ? blogName : blogName + '.tumblr.com';
}
function AbstractResourceImpl$oauthPostUnit$slambda_0(this$0, $path, $params, $files) {
  var i = new AbstractResourceImpl$oauthPostUnit$slambda(this$0, $path, $params, $files);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_0($this, $this$runBlocking, $completion) {
  $this.bb8_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2/oauth2/token').l4s($this.cb8_1.vah()).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_1($this, $this$runBlocking, $completion) {
  $this.eb8_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2/oauth2/token').l4s($this.fb8_1.vah()).n4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function AuthResourceImpl$oAuth2Token$slambda_0(this$0, $request) {
  var i = new AuthResourceImpl$oAuth2Token$slambda(this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AuthResourceImpl$oAuth2TokenRefresh$slambda_0(this$0, $request) {
  var i = new AuthResourceImpl$oAuth2TokenRefresh$slambda(this$0, $request);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_2($this, $this$runBlocking, $completion) {
  $this.gb8_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.hb8_1).c4s(MediaType_getInstance().xb7_1).j4s($this.ib8_1).i4s('api_key', $this.gb8_1.wb7_1.zag_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogInfoResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_3($this, $this$runBlocking, $completion) {
  var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.jb8_1).g4s(false).m4s($completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  var r = tmp;
  var tmp0 = r.t4s_1.h4('location');
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.checkNotNull' call
    if (tmp0 == null) {
      var message = 'Location header is not found.';
      throw IllegalStateException.o(toString(message));
    } else {
      tmp$ret$1 = tmp0;
      break $l$block;
    }
  }
  var url = tmp$ret$1;
  return new Response(url.p2(0), url.p2(0));
}
function *_generator_invoke__zhh2q8_4($this, $this$runBlocking, $completion) {
  $this.kb8_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.lb8_1).c4s(MediaType_getInstance().xb7_1).j4s($this.mb8_1).i4s('api_key', $this.kb8_1.wb7_1.zag_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogLikesResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_5($this, $this$runBlocking, $completion) {
  $this.nb8_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.ob8_1).d4s('Authorization', $this.nb8_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.pb8_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowingResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_6($this, $this$runBlocking, $completion) {
  $this.qb8_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.rb8_1).d4s('Authorization', $this.qb8_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.sb8_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowersResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_7($this, $this$runBlocking, $completion) {
  $this.tb8_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.ub8_1).d4s('Authorization', $this.tb8_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.vb8_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_8($this, $this$runBlocking, $completion) {
  $this.wb8_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.xb8_1).d4s('Authorization', $this.wb8_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.yb8_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_9($this, $this$runBlocking, $completion) {
  $this.zb8_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.ab9_1).d4s('Authorization', $this.zb8_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.bb9_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_10($this, $this$runBlocking, $completion) {
  $this.cb9_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.db9_1).d4s('Authorization', $this.cb9_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.eb9_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function BlogResourceImpl$blogInfo$slambda_0($this, $path, $params) {
  var i = new BlogResourceImpl$blogInfo$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogAvatar$slambda_0($path) {
  var i = new BlogResourceImpl$blogAvatar$slambda($path);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogLikes$slambda_0($this, $path, $params) {
  var i = new BlogResourceImpl$blogLikes$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogFollowing$slambda_0($this, $path, $params) {
  var i = new BlogResourceImpl$blogFollowing$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogFollowers$slambda_0($this, $path, $params) {
  var i = new BlogResourceImpl$blogFollowers$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogPosts$slambda_0($this, $path, $params) {
  var i = new BlogResourceImpl$blogPosts$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogQueuedPosts$slambda_0($this, $path, $params) {
  var i = new BlogResourceImpl$blogQueuedPosts$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogDraftPosts$slambda_0($this, $path, $params) {
  var i = new BlogResourceImpl$blogDraftPosts$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlogResourceImpl$blogSubmissions$slambda_0($this, $path, $params) {
  var i = new BlogResourceImpl$blogSubmissions$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_11($this, $this$runBlocking, $completion) {
  $this.fb9_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.gb9_1).c4s(MediaType_getInstance().xb7_1).j4s($this.hb9_1).i4s('api_key', $this.fb9_1.wb7_1.zag_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().mg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Post), arrayOf([]), false))]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function TaggedResourceImpl$tagged$slambda_0($this, $path, $params) {
  var i = new TaggedResourceImpl$tagged$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_12($this, $this$runBlocking, $completion) {
  $this.ib9_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.jb9_1).d4s('Authorization', $this.ib9_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.kb9_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_13($this, $this$runBlocking, $completion) {
  $this.lb9_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.mb9_1).d4s('Authorization', $this.lb9_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.nb9_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserDashboardResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_14($this, $this$runBlocking, $completion) {
  $this.ob9_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.pb9_1).d4s('Authorization', $this.ob9_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.qb9_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserFollowingResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function *_generator_invoke__zhh2q8_15($this, $this$runBlocking, $completion) {
  $this.rb9_1;
  var tmp$ret$5;
  $l$block: {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.proceed' call
    try {
      var tmp = (new HttpRequest()).b4s('https://api.tumblr.com/v2' + $this.sb9_1).d4s('Authorization', $this.rb9_1.wb7_1.dah()).c4s(MediaType_getInstance().xb7_1).j4s($this.tb9_1).m4s($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var response = tmp;
      var containsArg = response.s4s_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = Json_getInstance();
        // Inline function 'work.socialhub.ktumblr.util.Json.fromJson' call
        var obj = response.w4s();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = tmp0.db8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.a11();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserLikesResponse), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var tmp$ret$4 = this_0.g24(tmp$ret$2, obj);
        tmp$ret$5 = new Response(tmp$ret$4, response.w4s());
        break $l$block;
      }
      throw TumblrException.kah(response.s4s_1, response.w4s());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException.jah(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
}
function UserResourceImpl$user$slambda_0($this, $path, $params) {
  var i = new UserResourceImpl$user$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$userDashboard$slambda_0($this, $path, $params) {
  var i = new UserResourceImpl$userDashboard$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$userFollowing$slambda_0($this, $path, $params) {
  var i = new UserResourceImpl$userFollowing$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function UserResourceImpl$userLikes$slambda_0($this, $path, $params) {
  var i = new UserResourceImpl$userLikes$slambda($this, $path, $params);
  var l = ($this$runBlocking, $completion) => i.d39($this$runBlocking, $completion);
  l.$arity = 1;
  return l;
}
function Json$json$lambda($this$Json) {
  $this$Json.z24_1 = false;
  $this$Json.y24_1 = true;
  $this$Json.a25_1 = true;
  var tmp = $this$Json;
  // Inline function 'kotlinx.serialization.modules.SerializersModule' call
  var builder = new SerializersModuleBuilder();
  builder.d1i(PrimitiveClasses_getInstance().cg(), AnySerializer_getInstance());
  builder.d1i(getKClass(Post), PostSerializer_getInstance());
  tmp.p25_1 = builder.f16();
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
//region block: post-declaration
initMetadataForInterface(Tumblr, 'Tumblr');
initMetadataForClass(TumblrAuth, 'TumblrAuth');
initMetadataForClass(TumblrException, 'TumblrException');
initMetadataForObject(TumblrFactory_0, 'TumblrFactory');
initMetadataForClass(TumblrImpl, 'TumblrImpl', VOID, VOID, [Tumblr]);
initMetadataForInterface(AuthResource, 'AuthResource');
initMetadataForInterface(BlogResource, 'BlogResource');
initMetadataForInterface(TaggedResource, 'TaggedResource');
initMetadataForInterface(UserResource, 'UserResource');
initMetadataForClass(FileRequest, 'FileRequest');
initMetadataForInterface(MapRequest, 'MapRequest');
protoOf(AuthAuthorizeUrlRequest).rah = addParam;
initMetadataForClass(AuthAuthorizeUrlRequest, 'AuthAuthorizeUrlRequest', AuthAuthorizeUrlRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRefreshRequest).rah = addParam;
initMetadataForClass(AuthOAuth2TokenRefreshRequest, 'AuthOAuth2TokenRefreshRequest', AuthOAuth2TokenRefreshRequest, VOID, [MapRequest]);
protoOf(AuthOAuth2TokenRequest).rah = addParam;
initMetadataForClass(AuthOAuth2TokenRequest, 'AuthOAuth2TokenRequest', AuthOAuth2TokenRequest, VOID, [MapRequest]);
initMetadataForClass(BlogAvatarRequest, 'BlogAvatarRequest', BlogAvatarRequest);
protoOf(BlogDraftsRequest).rah = addParam;
initMetadataForClass(BlogDraftsRequest, 'BlogDraftsRequest', BlogDraftsRequest, VOID, [MapRequest]);
protoOf(BlogFollowersRequest).rah = addParam;
initMetadataForClass(BlogFollowersRequest, 'BlogFollowersRequest', BlogFollowersRequest, VOID, [MapRequest]);
protoOf(BlogFollowingRequest).rah = addParam;
initMetadataForClass(BlogFollowingRequest, 'BlogFollowingRequest', BlogFollowingRequest, VOID, [MapRequest]);
initMetadataForClass(BlogInfoRequest, 'BlogInfoRequest', BlogInfoRequest);
protoOf(BlogLikesRequest).rah = addParam;
initMetadataForClass(BlogLikesRequest, 'BlogLikesRequest', BlogLikesRequest, VOID, [MapRequest]);
protoOf(BlogPostsRequest).rah = addParam;
initMetadataForClass(BlogPostsRequest, 'BlogPostsRequest', BlogPostsRequest, VOID, [MapRequest]);
protoOf(BlogQueueRequest).rah = addParam;
initMetadataForClass(BlogQueueRequest, 'BlogQueueRequest', BlogQueueRequest, VOID, [MapRequest]);
protoOf(BlogSubmissionsRequest).rah = addParam;
initMetadataForClass(BlogSubmissionsRequest, 'BlogSubmissionsRequest', BlogSubmissionsRequest, VOID, [MapRequest]);
initMetadataForClass(BlogPostRequest, 'BlogPostRequest', BlogPostRequest);
protoOf(BlogAudioPostRequest).rah = addParam;
initMetadataForClass(BlogAudioPostRequest, 'BlogAudioPostRequest', BlogAudioPostRequest, VOID, [MapRequest, BlogPostRequest]);
protoOf(BlogChatPostRequest).rah = addParam;
initMetadataForClass(BlogChatPostRequest, 'BlogChatPostRequest', BlogChatPostRequest, VOID, [MapRequest, BlogPostRequest]);
protoOf(BlogDeleteRequest).rah = addParam;
initMetadataForClass(BlogDeleteRequest, 'BlogDeleteRequest', BlogDeleteRequest, VOID, [MapRequest]);
protoOf(BlogLinkPostRequest).rah = addParam;
initMetadataForClass(BlogLinkPostRequest, 'BlogLinkPostRequest', BlogLinkPostRequest, VOID, [MapRequest, BlogPostRequest]);
protoOf(BlogPhotoPostRequest).rah = addParam;
initMetadataForClass(BlogPhotoPostRequest, 'BlogPhotoPostRequest', BlogPhotoPostRequest, VOID, [MapRequest, BlogPostRequest]);
protoOf(BlogQuotePostRequest).rah = addParam;
initMetadataForClass(BlogQuotePostRequest, 'BlogQuotePostRequest', BlogQuotePostRequest, VOID, [MapRequest, BlogPostRequest]);
protoOf(BlogReblogRequest).rah = addParam;
initMetadataForClass(BlogReblogRequest, 'BlogReblogRequest', BlogReblogRequest, VOID, [MapRequest]);
protoOf(BlogTextPostRequest).rah = addParam;
initMetadataForClass(BlogTextPostRequest, 'BlogTextPostRequest', BlogTextPostRequest, VOID, [MapRequest, BlogPostRequest]);
protoOf(BlogVideoPostRequest).rah = addParam;
initMetadataForClass(BlogVideoPostRequest, 'BlogVideoPostRequest', BlogVideoPostRequest, VOID, [MapRequest, BlogPostRequest]);
protoOf(TaggedRequest).rah = addParam;
initMetadataForClass(TaggedRequest, 'TaggedRequest', TaggedRequest, VOID, [MapRequest]);
protoOf(UserDashboardRequest).rah = addParam;
initMetadataForClass(UserDashboardRequest, 'UserDashboardRequest', UserDashboardRequest, VOID, [MapRequest]);
protoOf(UserFollowRequest).rah = addParam;
initMetadataForClass(UserFollowRequest, 'UserFollowRequest', UserFollowRequest, VOID, [MapRequest]);
protoOf(UserFollowingRequest).rah = addParam;
initMetadataForClass(UserFollowingRequest, 'UserFollowingRequest', UserFollowingRequest, VOID, [MapRequest]);
protoOf(UserLikeRequest).rah = addParam;
initMetadataForClass(UserLikeRequest, 'UserLikeRequest', UserLikeRequest, VOID, [MapRequest]);
protoOf(UserLikesRequest).rah = addParam;
initMetadataForClass(UserLikesRequest, 'UserLikesRequest', UserLikesRequest, VOID, [MapRequest]);
protoOf(UserUnfollowRequest).rah = addParam;
initMetadataForClass(UserUnfollowRequest, 'UserUnfollowRequest', UserUnfollowRequest, VOID, [MapRequest]);
protoOf(UserUnlikeRequest).rah = addParam;
initMetadataForClass(UserUnlikeRequest, 'UserUnlikeRequest', UserUnlikeRequest, VOID, [MapRequest]);
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForClass($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Body, 'Body', Body, VOID, VOID, VOID, VOID, {0: Companion_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).w18 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Meta, 'Meta', Meta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(Response, 'Response');
initMetadataForClass(ResponseUnit, 'ResponseUnit');
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).w18 = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AuthOAuth2TokenResponse, 'AuthOAuth2TokenResponse', AuthOAuth2TokenResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).w18 = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowersResponse, 'BlogFollowersResponse', BlogFollowersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).w18 = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogFollowingResponse, 'BlogFollowingResponse', BlogFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_4).w18 = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInfoResponse, 'BlogInfoResponse', BlogInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_5).w18 = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogLikesResponse, 'BlogLikesResponse', BlogLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_6);
protoOf($serializer_6).w18 = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogPostsResponse, 'BlogPostsResponse', BlogPostsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_7);
protoOf($serializer_7).w18 = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserDashboardResponse, 'UserDashboardResponse', UserDashboardResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_8);
protoOf($serializer_8).w18 = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserFollowingResponse, 'UserFollowingResponse', UserFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_9);
protoOf($serializer_9).w18 = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserLikesResponse, 'UserLikesResponse', UserLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_10);
protoOf($serializer_10).w18 = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserResponse, 'UserResponse', UserResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForClass(PhotoType, 'PhotoType');
initMetadataForClass(PostType, 'PostType');
initMetadataForCompanion(Companion_11);
protoOf($serializer_11).w18 = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Note, 'Note', Note, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_12);
protoOf($serializer_12).w18 = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NoteAvatar, 'NoteAvatar', NoteAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForClass(Resource, 'Resource', Resource.kan);
initMetadataForCompanion(Companion_13);
protoOf($serializer_13).w18 = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Blog, 'Blog', Blog.pan, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_14);
protoOf($serializer_14).w18 = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogAvatar, 'BlogAvatar', BlogAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForCompanion(Companion_15);
protoOf($serializer_15).w18 = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogTheme, 'BlogTheme', BlogTheme, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_16);
protoOf($serializer_16).w18 = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Reblog, 'Reblog', Reblog, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_17);
initMetadataForClass(Post, 'Post', VOID, VOID, VOID, VOID, VOID, {0: PostSerializer_getInstance});
initMetadataForCompanion(Companion_18);
protoOf($serializer_17).w18 = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAnswerPost, 'LegacyAnswerPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_19);
protoOf($serializer_18).w18 = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyAudioPost, 'LegacyAudioPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_20);
protoOf($serializer_19).w18 = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyChatPost, 'LegacyChatPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_21);
protoOf($serializer_20).w18 = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyLinkPost, 'LegacyLinkPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_22);
protoOf($serializer_21).w18 = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyPhotoPost, 'LegacyPhotoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_23);
protoOf($serializer_22).w18 = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyQuotePost, 'LegacyQuotePost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_24);
protoOf($serializer_23).w18 = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyTextPost, 'LegacyTextPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_25);
protoOf($serializer_24).w18 = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LegacyVideoPost, 'LegacyVideoPost', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_26);
protoOf($serializer_25).w18 = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Dialogue, 'Dialogue', Dialogue, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_27);
protoOf($serializer_26).w18 = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Photo, 'Photo', Photo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_28);
protoOf($serializer_27).w18 = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PhotoSize, 'PhotoSize', PhotoSize, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForCompanion(Companion_29);
protoOf($serializer_28).w18 = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Video, 'Video', Video, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_30);
protoOf($serializer_29).w18 = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BlogInTrail, 'BlogInTrail', BlogInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_31);
protoOf($serializer_30).w18 = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(IdInTrail, 'IdInTrail', IdInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_32);
protoOf($serializer_31).w18 = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Trail, 'Trail', Trail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_33);
protoOf($serializer_32).w18 = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FollowerUser, 'FollowerUser', FollowerUser, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_34);
protoOf($serializer_33).w18 = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(User, 'User', User.qb7, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForLambda(AbstractResourceImpl$oauthPostUnit$slambda, VOID, VOID, [1]);
initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl');
initMetadataForLambda(AuthResourceImpl$oAuth2Token$slambda, VOID, VOID, [1]);
initMetadataForLambda(AuthResourceImpl$oAuth2TokenRefresh$slambda, VOID, VOID, [1]);
initMetadataForClass(AuthResourceImpl, 'AuthResourceImpl', VOID, VOID, [AuthResource, AbstractResourceImpl]);
initMetadataForLambda(BlogResourceImpl$blogInfo$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogAvatar$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogLikes$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogFollowing$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogFollowers$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogPosts$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogQueuedPosts$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogDraftPosts$slambda, VOID, VOID, [1]);
initMetadataForLambda(BlogResourceImpl$blogSubmissions$slambda, VOID, VOID, [1]);
initMetadataForClass(BlogResourceImpl, 'BlogResourceImpl', VOID, VOID, [BlogResource, AbstractResourceImpl]);
initMetadataForLambda(TaggedResourceImpl$tagged$slambda, VOID, VOID, [1]);
initMetadataForClass(TaggedResourceImpl, 'TaggedResourceImpl', VOID, VOID, [TaggedResource, AbstractResourceImpl]);
initMetadataForLambda(UserResourceImpl$user$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$userDashboard$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$userFollowing$slambda, VOID, VOID, [1]);
initMetadataForLambda(UserResourceImpl$userLikes$slambda, VOID, VOID, [1]);
initMetadataForClass(UserResourceImpl, 'UserResourceImpl', VOID, VOID, [UserResource, AbstractResourceImpl]);
initMetadataForObject(Json_0, 'Json');
initMetadataForObject(MediaType, 'MediaType');
initMetadataForObject(PostSerializer, 'PostSerializer');
//endregion
//region block: init
TumblrFactory_instance = new TumblrFactory_0();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_4 = new Companion_4();
Companion_instance_10 = new Companion_10();
Companion_instance_11 = new Companion_11();
Companion_instance_12 = new Companion_12();
Companion_instance_14 = new Companion_14();
Companion_instance_15 = new Companion_15();
Companion_instance_16 = new Companion_16();
Companion_instance_17 = new Companion_17();
Companion_instance_26 = new Companion_26();
Companion_instance_28 = new Companion_28();
Companion_instance_29 = new Companion_29();
Companion_instance_30 = new Companion_30();
Companion_instance_31 = new Companion_31();
Companion_instance_32 = new Companion_32();
Companion_instance_33 = new Companion_33();
//endregion
//region block: exports
var TumblrFactory = {getInstance: TumblrFactory_getInstance};
defineProp(Body, 'Companion', Companion_getInstance, VOID, true);
defineProp(Meta, 'Companion', Companion_getInstance_0, VOID, true);
defineProp(AuthOAuth2TokenResponse, 'Companion', Companion_getInstance_1, VOID, true);
defineProp(BlogFollowersResponse, 'Companion', Companion_getInstance_2, VOID, true);
defineProp(BlogFollowingResponse, 'Companion', Companion_getInstance_3, VOID, true);
defineProp(BlogInfoResponse, 'Companion', Companion_getInstance_4, VOID, true);
defineProp(BlogLikesResponse, 'Companion', Companion_getInstance_5, VOID, true);
defineProp(BlogPostsResponse, 'Companion', Companion_getInstance_6, VOID, true);
defineProp(UserDashboardResponse, 'Companion', Companion_getInstance_7, VOID, true);
defineProp(UserFollowingResponse, 'Companion', Companion_getInstance_8, VOID, true);
defineProp(UserLikesResponse, 'Companion', Companion_getInstance_9, VOID, true);
defineProp(UserResponse, 'Companion', Companion_getInstance_10, VOID, true);
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
defineProp(Note, 'Companion', Companion_getInstance_11, VOID, true);
defineProp(NoteAvatar, 'Companion', Companion_getInstance_12, VOID, true);
defineProp(Blog, 'Companion', Companion_getInstance_13, VOID, true);
defineProp(BlogAvatar, 'Companion', Companion_getInstance_14, VOID, true);
defineProp(BlogTheme, 'Companion', Companion_getInstance_15, VOID, true);
defineProp(Reblog, 'Companion', Companion_getInstance_16, VOID, true);
defineProp(Post, 'Companion', Companion_getInstance_17, VOID, true);
defineProp(LegacyAnswerPost, 'Companion', Companion_getInstance_18, VOID, true);
defineProp(LegacyAudioPost, 'Companion', Companion_getInstance_19, VOID, true);
defineProp(LegacyChatPost, 'Companion', Companion_getInstance_20, VOID, true);
defineProp(LegacyLinkPost, 'Companion', Companion_getInstance_21, VOID, true);
defineProp(LegacyPhotoPost, 'Companion', Companion_getInstance_22, VOID, true);
defineProp(LegacyQuotePost, 'Companion', Companion_getInstance_23, VOID, true);
defineProp(LegacyVideoPost, 'Companion', Companion_getInstance_25, VOID, true);
defineProp(Dialogue, 'Companion', Companion_getInstance_26, VOID, true);
defineProp(Photo, 'Companion', Companion_getInstance_27, VOID, true);
defineProp(PhotoSize, 'Companion', Companion_getInstance_28, VOID, true);
defineProp(Video, 'Companion', Companion_getInstance_29, VOID, true);
defineProp(BlogInTrail, 'Companion', Companion_getInstance_30, VOID, true);
defineProp(IdInTrail, 'Companion', Companion_getInstance_31, VOID, true);
defineProp(Trail, 'Companion', Companion_getInstance_32, VOID, true);
defineProp(FollowerUser, 'Companion', Companion_getInstance_33, VOID, true);
defineProp(User, 'Companion', Companion_getInstance_34, VOID, true);
export {
  TumblrFactory as TumblrFactory,
  FileRequest as FileRequest,
  AuthAuthorizeUrlRequest as AuthAuthorizeUrlRequest,
  AuthOAuth2TokenRefreshRequest as AuthOAuth2TokenRefreshRequest,
  AuthOAuth2TokenRequest as AuthOAuth2TokenRequest,
  BlogAvatarRequest as BlogAvatarRequest,
  BlogDraftsRequest as BlogDraftsRequest,
  BlogFollowersRequest as BlogFollowersRequest,
  BlogFollowingRequest as BlogFollowingRequest,
  BlogInfoRequest as BlogInfoRequest,
  BlogLikesRequest as BlogLikesRequest,
  BlogPostsRequest as BlogPostsRequest,
  BlogQueueRequest as BlogQueueRequest,
  BlogSubmissionsRequest as BlogSubmissionsRequest,
  BlogAudioPostRequest as BlogAudioPostRequest,
  BlogChatPostRequest as BlogChatPostRequest,
  BlogDeleteRequest as BlogDeleteRequest,
  BlogLinkPostRequest as BlogLinkPostRequest,
  BlogPhotoPostRequest as BlogPhotoPostRequest,
  BlogPostRequest as BlogPostRequest,
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
  BlogFollowersResponse as BlogFollowersResponse,
  BlogFollowingResponse as BlogFollowingResponse,
  BlogInfoResponse as BlogInfoResponse,
  BlogLikesResponse as BlogLikesResponse,
  BlogPostsResponse as BlogPostsResponse,
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
//endregion

//# sourceMappingURL=ktumblr-core.mjs.map
