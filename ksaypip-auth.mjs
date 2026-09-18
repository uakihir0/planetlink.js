import {
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  toList383f556t1dixk as toList,
  toString1pkumu07cwy4m as toString,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  createThis2j2avj17cvnv2 as createThis,
  Default_getInstance3u7accvuecmtb as Default_getInstance,
  Default_getInstance2btmaxiazehss as Default_getInstance_0,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  trimEndvvzjdhan75g as trimEnd,
  encodeToByteArray1onwao0uakjfh as encodeToByteArray,
  Char__rangeTo_impl_tkncvp39f1k6qse2e6h as Char__rangeTo_impl_tkncvp,
  plus39kp8wyage607 as plus,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ArrayList3it5z8td81qkl as ArrayList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  random234odtwlu7lq2 as random,
  Char19o2r8palgjof as Char,
  joinToString1cxrrlmo0chqs as joinToString,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  Exceptiondt2hlxn7j7vw as Exception,
  contains3ue2qo8xhmpf1 as contains,
  constructCallableReference23y65rf941mch as constructCallableReference,
  isBlank1dvkhjjvox3p0 as isBlank,
  to2cs3ny02qtbcb as to,
  mapOf1xd03cq9cnmy8 as mapOf,
} from './kotlin-kotlin-stdlib.mjs';
import {
  OAuthScope_getInstance1hhqceovjg04w as OAuthScope_getInstance,
  toBlockingpaklkkul8wtf as toBlocking,
  MediaType_getInstance3jvyua262tttj as MediaType_getInstance,
  InternalUtility_getInstance2elhb2d5tw2hu as InternalUtility_getInstance,
  Response3jjoetub7ly67 as Response,
  SaypipException3omb2x4ct86rn as SaypipException,
} from './ksaypip-core.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstancerxlnwnlbnwri as StringSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  IntSerializer_getInstance3hkg1llvt1c0z as IntSerializer_getInstance,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  Companion_instance2kl1recl8zfdv as Companion_instance,
  SHA256_getInstance3vans5ihevbh4 as SHA256_getInstance,
} from './cryptography-kotlin-cryptography-core.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import { URLBuilder1nlnzfhn643pn as URLBuilder } from './ktor-ktor-http.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class OAuthContext {
  constructor() {
    this.tnc_1 = null;
    this.unc_1 = null;
    this.vnc_1 = null;
    this.wnc_1 = null;
    this.xnc_1 = null;
  }
}
class SaypipAuthConfig {
  constructor(baseUrl, clientId, clientSecret, redirectUri, scopes, authorizationEndpoint, tokenEndpoint, revokeEndpoint) {
    baseUrl = baseUrl === VOID ? 'https://saypip.app' : baseUrl;
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    redirectUri = redirectUri === VOID ? null : redirectUri;
    scopes = scopes === VOID ? toList(OAuthScope_getInstance().gmx_1) : scopes;
    authorizationEndpoint = authorizationEndpoint === VOID ? null : authorizationEndpoint;
    tokenEndpoint = tokenEndpoint === VOID ? null : tokenEndpoint;
    revokeEndpoint = revokeEndpoint === VOID ? null : revokeEndpoint;
    this.ync_1 = baseUrl;
    this.znc_1 = clientId;
    this.and_1 = clientSecret;
    this.bnd_1 = redirectUri;
    this.cnd_1 = scopes;
    this.fnd_1 = authorizationEndpoint;
    this.gnd_1 = tokenEndpoint;
    this.hnd_1 = revokeEndpoint;
  }
  ind() {
    var tmp0_elvis_lhs = this.fnd_1;
    return tmp0_elvis_lhs == null ? this.ync_1 + '/api/auth/oauth2/authorize' : tmp0_elvis_lhs;
  }
  jnd() {
    var tmp0_elvis_lhs = this.gnd_1;
    return tmp0_elvis_lhs == null ? this.ync_1 + '/api/auth/oauth2/token' : tmp0_elvis_lhs;
  }
  toString() {
    return 'SaypipAuthConfig(baseUrl=' + this.ync_1 + ', clientId=' + this.znc_1 + ', clientSecret=' + this.and_1 + ', redirectUri=' + this.bnd_1 + ', scopes=' + toString(this.cnd_1) + ', authorizationEndpoint=' + this.fnd_1 + ', tokenEndpoint=' + this.gnd_1 + ', revokeEndpoint=' + this.hnd_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.ync_1);
    result = imul(result, 31) + getStringHashCode(this.znc_1) | 0;
    result = imul(result, 31) + (this.and_1 == null ? 0 : getStringHashCode(this.and_1)) | 0;
    result = imul(result, 31) + (this.bnd_1 == null ? 0 : getStringHashCode(this.bnd_1)) | 0;
    result = imul(result, 31) + hashCode(this.cnd_1) | 0;
    result = imul(result, 31) + (this.fnd_1 == null ? 0 : getStringHashCode(this.fnd_1)) | 0;
    result = imul(result, 31) + (this.gnd_1 == null ? 0 : getStringHashCode(this.gnd_1)) | 0;
    result = imul(result, 31) + (this.hnd_1 == null ? 0 : getStringHashCode(this.hnd_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SaypipAuthConfig))
      return false;
    if (!(this.ync_1 === other.ync_1))
      return false;
    if (!(this.znc_1 === other.znc_1))
      return false;
    if (!(this.and_1 == other.and_1))
      return false;
    if (!(this.bnd_1 == other.bnd_1))
      return false;
    if (!equals(this.cnd_1, other.cnd_1))
      return false;
    if (!(this.fnd_1 == other.fnd_1))
      return false;
    if (!(this.gnd_1 == other.gnd_1))
      return false;
    if (!(this.hnd_1 == other.hnd_1))
      return false;
    return true;
  }
}
class SaypipAuthFactory {
  knd(config) {
    return new SaypipAuthImpl(config);
  }
}
class BuildAuthorizationUrlRequest {
  constructor() {
    this.clientId = null;
    this.redirectUri = null;
    this.scopes = null;
    this.state = null;
  }
  ebf(_set____db54di) {
    this.clientId = _set____db54di;
  }
  fbf() {
    return this.clientId;
  }
  qbt(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  rbt() {
    return this.redirectUri;
  }
  dgm(_set____db54di) {
    this.scopes = _set____db54di;
  }
  fbt() {
    return this.scopes;
  }
  iae(_set____db54di) {
    this.state = _set____db54di;
  }
  e81() {
    return this.state;
  }
}
class OAuthAuthorizationCodeTokenRequest {
  constructor() {
    this.code = null;
  }
  sbt(_set____db54di) {
    this.code = _set____db54di;
  }
  x32() {
    return this.code;
  }
}
class OAuthRefreshTokenRequest {
  constructor() {
    this.refreshToken = null;
  }
  vbt(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  wbt() {
    return this.refreshToken;
  }
}
class OAuthRevokeRequest {
  constructor() {
    this.token = null;
    this.tokenTypeHint = null;
  }
  c9j(_set____db54di) {
    this.token = _set____db54di;
  }
  b75() {
    return this.token;
  }
  lnd(_set____db54di) {
    this.tokenTypeHint = _set____db54di;
  }
  mnd() {
    return this.tokenTypeHint;
  }
}
class Companion {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ksaypip.auth.api.entity.oauth.OAuthTokenResponse', this, 5);
    tmp0_serialDesc.q1b('access_token', true);
    tmp0_serialDesc.q1b('token_type', true);
    tmp0_serialDesc.q1b('expires_in', true);
    tmp0_serialDesc.q1b('refresh_token', true);
    tmp0_serialDesc.q1b('scope', true);
    this.nnd_1 = tmp0_serialDesc;
  }
  ond(encoder, value) {
    var tmp0_desc = this.nnd_1;
    var tmp1_output = encoder.y13(tmp0_desc);
    if (tmp1_output.u15(tmp0_desc, 0) ? true : !(value.accessToken === '')) {
      tmp1_output.n15(tmp0_desc, 0, value.accessToken);
    }
    if (tmp1_output.u15(tmp0_desc, 1) ? true : !(value.tokenType === '')) {
      tmp1_output.n15(tmp0_desc, 1, value.tokenType);
    }
    if (tmp1_output.u15(tmp0_desc, 2) ? true : !(value.expiresIn === -1)) {
      tmp1_output.i15(tmp0_desc, 2, value.expiresIn);
    }
    if (tmp1_output.u15(tmp0_desc, 3) ? true : !(value.refreshToken == null)) {
      tmp1_output.q15(tmp0_desc, 3, StringSerializer_getInstance(), value.refreshToken);
    }
    if (tmp1_output.u15(tmp0_desc, 4) ? true : !(value.scope == null)) {
      tmp1_output.q15(tmp0_desc, 4, StringSerializer_getInstance(), value.scope);
    }
    tmp1_output.z13(tmp0_desc);
  }
  tz(encoder, value) {
    return this.ond(encoder, value instanceof OAuthTokenResponse ? value : THROW_CCE());
  }
  uz(decoder) {
    var tmp0_desc = this.nnd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.y13(tmp0_desc);
    if (tmp9_input.n14()) {
      tmp4_local0 = tmp9_input.i14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i14(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.d14(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.m14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.m14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.o14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.i14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.d14(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.m14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.m14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.i11(tmp2_index);
        }
      }
    tmp9_input.z13(tmp0_desc);
    return OAuthTokenResponse.pnd(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  gz() {
    return this.nnd_1;
  }
  g1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class OAuthTokenResponse {
  constructor() {
    this.accessToken = '';
    this.tokenType = '';
    this.expiresIn = -1;
    this.refreshToken = null;
    this.scope = null;
  }
  ck3(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  pab() {
    return this.accessToken;
  }
  qnd(_set____db54di) {
    this.tokenType = _set____db54di;
  }
  jbv() {
    return this.tokenType;
  }
  o3j(_set____db54di) {
    this.expiresIn = _set____db54di;
  }
  p3j() {
    return this.expiresIn;
  }
  vbt(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  wbt() {
    return this.refreshToken;
  }
  kbv(_set____db54di) {
    this.scope = _set____db54di;
  }
  lbv() {
    return this.scope;
  }
  static pnd(seen0, accessToken, tokenType, expiresIn, refreshToken, scope, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().nnd_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.accessToken = '';
    else
      $this.accessToken = accessToken;
    if (0 === (seen0 & 2))
      $this.tokenType = '';
    else
      $this.tokenType = tokenType;
    if (0 === (seen0 & 4))
      $this.expiresIn = -1;
    else
      $this.expiresIn = expiresIn;
    if (0 === (seen0 & 8))
      $this.refreshToken = null;
    else
      $this.refreshToken = refreshToken;
    if (0 === (seen0 & 16))
      $this.scope = null;
    else
      $this.scope = scope;
    return $this;
  }
}
class PkceHelper {
  rnd() {
    var bytes = new Int8Array(32);
    Default_getInstance().or(bytes);
    return trimEnd(Default_getInstance_0().oq_1.tq(bytes), charArrayOf([_Char___init__impl__6a9atx(61)]));
  }
  snd(codeVerifier) {
    var hasher = Companion_instance.anc().enc(SHA256_getInstance()).tnd();
    var digest = hasher.pnc(encodeToByteArray(codeVerifier));
    return trimEnd(Default_getInstance_0().oq_1.tq(digest), charArrayOf([_Char___init__impl__6a9atx(61)]));
  }
}
class RandomHelper {
  und(len) {
    var lists = plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
    // Inline function 'kotlin.collections.map' call
    var this_0 = numberRangeToNumber(1, len);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.h2(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.f3_1;
    var last = this_0.g3_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.random' call
        var tmp$ret$3 = random(lists, Default_getInstance()).n3_1;
        var tmp$ret$2 = new Char(tmp$ret$3);
        destination.i2(tmp$ret$2);
      }
       while (!(item === last));
    return joinToString(destination, '');
  }
}
class OAuthResourceImpl {
  constructor(config) {
    this.vnd_1 = config;
  }
  wnd(context, request) {
    var tmp0_elvis_lhs = request.clientId;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? context.tnc_1 : tmp0_elvis_lhs;
    var clientId = tmp1_elvis_lhs == null ? this.vnd_1.znc_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = request.redirectUri;
    var tmp3_elvis_lhs = tmp2_elvis_lhs == null ? context.unc_1 : tmp2_elvis_lhs;
    var redirectUri = tmp3_elvis_lhs == null ? this.vnd_1.bnd_1 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = request.scopes;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : toList(tmp4_safe_receiver);
    var tmp6_elvis_lhs = tmp5_elvis_lhs == null ? context.vnc_1 : tmp5_elvis_lhs;
    var scopes = tmp6_elvis_lhs == null ? this.vnd_1.cnd_1 : tmp6_elvis_lhs;
    if (isBlank(clientId))
      throw SaypipException.omo('clientId is required.');
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (redirectUri == null || isBlank(redirectUri))
      throw SaypipException.omo('redirectUri is required.');
    var tmp7_elvis_lhs = context.xnc_1;
    var tmp;
    if (tmp7_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = PkceHelper_instance.rnd();
      context.xnc_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp7_elvis_lhs;
    }
    var codeVerifier = tmp;
    var tmp8_elvis_lhs = request.state;
    var tmp9_elvis_lhs = tmp8_elvis_lhs == null ? context.wnc_1 : tmp8_elvis_lhs;
    var tmp_0;
    if (tmp9_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_1 = RandomHelper_instance.und(32);
      context.wnc_1 = this_1;
      tmp_0 = this_1;
    } else {
      tmp_0 = tmp9_elvis_lhs;
    }
    var state = tmp_0;
    context.tnc_1 = clientId;
    context.unc_1 = redirectUri;
    context.vnc_1 = scopes;
    context.wnc_1 = state;
    // Inline function 'kotlin.apply' call
    var this_2 = URLBuilder(this.vnd_1.ind());
    this_2.b49_1.r3s('response_type', 'code');
    this_2.b49_1.r3s('client_id', clientId);
    this_2.b49_1.r3s('redirect_uri', redirectUri);
    this_2.b49_1.r3s('scope', joinToString(scopes, ' '));
    this_2.b49_1.r3s('state', state);
    this_2.b49_1.r3s('code_challenge', PkceHelper_instance.snd(codeVerifier));
    this_2.b49_1.r3s('code_challenge_method', 'S256');
    return this_2.n4a();
  }
  xnd(context, request) {
    var tmp0_elvis_lhs = request.code;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SaypipException.omo('code is required.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var code = tmp;
    var tmp1_elvis_lhs = context.unc_1;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.vnd_1.bnd_1 : tmp1_elvis_lhs;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throw SaypipException.omo('redirectUri is required.');
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var redirectUri = tmp_0;
    var tmp3_elvis_lhs = context.xnc_1;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      throw SaypipException.omo('codeVerifier is missing: build the authorization URL first.');
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var codeVerifier = tmp_1;
    return tokenRequest(this, context, mapOf([to('grant_type', 'authorization_code'), to('code', code), to('redirect_uri', redirectUri), to('code_verifier', codeVerifier)]));
  }
  ynd(context, request) {
    var tmp0_elvis_lhs = request.refreshToken;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SaypipException.omo('refreshToken is required.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var refreshToken = tmp;
    return tokenRequest(this, context, mapOf([to('grant_type', 'refresh_token'), to('refresh_token', refreshToken)]));
  }
}
class SaypipAuthImpl {
  constructor(config) {
    this.znd_1 = config;
    this.ane_1 = new OAuthContext();
    this.bne_1 = new OAuthResourceImpl(this.znd_1);
  }
  cne() {
    return this.bne_1;
  }
}
//endregion
var SaypipAuthFactory_instance;
function SaypipAuthFactory_getInstance() {
  return SaypipAuthFactory_instance;
}
var Companion_instance_0;
function Companion_getInstance() {
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var PkceHelper_instance;
function PkceHelper_getInstance() {
  return PkceHelper_instance;
}
var RandomHelper_instance;
function RandomHelper_getInstance() {
  return RandomHelper_instance;
}
function tokenRequest($this, context, fields) {
  var tmp0_elvis_lhs = context.tnc_1;
  var clientId = tmp0_elvis_lhs == null ? $this.vnd_1.znc_1 : tmp0_elvis_lhs;
  return toBlocking(OAuthResourceImpl$tokenRequest$slambda($this, clientId, fields));
}
function *tokenCall($this, clientId, fields, basic, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'work.socialhub.ksaypip.auth.internal.OAuthResourceImpl.proceed' call
    try {
      // Inline function 'kotlin.also' call
      var this_0 = pwn($this, (new HttpRequest()).z54($this.vnd_1.jnd()).a55(MediaType_getInstance().on8_1), 'client_id', clientId);
      clientAuth($this, this_0, clientId, basic);
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = fields.b3().l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        // Inline function 'kotlin.collections.component1' call
        var key = element.c3();
        // Inline function 'kotlin.collections.component2' call
        var value = element.d3();
        pwn($this, this_0, key, value);
      }
      var response = yield* this_0.d55(true).l55($completion);
      var containsArg = response.p55_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.ksaypip.internal.InternalUtility.fromJson' call
        var obj = response.t55();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_1 = tmp0.qn8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_2 = this_1.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_3 = serializer(this_2, createKType(getKClass(OAuthTokenResponse), arrayOf([]), false));
        var tmp$ret$11 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
        var tmp$ret$9 = this_1.s10(tmp$ret$11, obj);
        // Inline function 'kotlin.also' call
        var this_4 = new Response(tmp$ret$9);
        this_4.json = response.t55();
        this_4.status = response.p55_1;
        tmp$ret$0 = this_4;
        break $l$block;
      }
      throw InternalUtility_getInstance().sn8(response.p55_1, response.t55());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof SaypipException ? e : null;
        throw tmp0_elvis_lhs == null ? SaypipException.pmo(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$0;
}
function clientAuth($this, $receiver, clientId, basic) {
  var tmp0_elvis_lhs = $this.vnd_1.and_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return $receiver;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var secret = tmp;
  if (basic) {
    var credentials = Default_getInstance_0().tq(encodeToByteArray(clientId + ':' + secret));
    return $receiver.b55('Authorization', 'Basic ' + credentials);
  }
  return pwn($this, $receiver, 'client_secret', secret);
}
function isClientAuthMethodMismatch($this, e) {
  var tmp;
  if (e.jmo_1 === 400 || e.jmo_1 === 401) {
    var tmp0_safe_receiver = e.kmo_1;
    tmp = (tmp0_safe_receiver == null ? null : contains(tmp0_safe_receiver, 'client_secret')) === true;
  } else {
    tmp = false;
  }
  return tmp;
}
function pwn($this, $receiver, key, value) {
  if (!(value == null)) {
    $receiver.i55(key, value);
  }
  return $receiver;
}
function OAuthResourceImpl$tokenRequest$slambda(this$0, $clientId, $fields) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    var tmp;
    try {
      tmp = yield* /*#__NOINLINE__*/tokenCall(this$0, $clientId, $fields, !(this$0.vnd_1.and_1 == null), $completion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof SaypipException) {
        var e = $p;
        var tmp_1;
        if (!(this$0.vnd_1.and_1 == null) && isClientAuthMethodMismatch(this$0, e)) {
          tmp_1 = yield* /*#__NOINLINE__*/tokenCall(this$0, $clientId, $fields, false, $completion);
        } else {
          throw e;
        }
        tmp_0 = tmp_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }, 1);
}
//region block: post-declaration
initMetadataForClass(OAuthContext, 'OAuthContext', OAuthContext);
initMetadataForClass(SaypipAuthConfig, 'SaypipAuthConfig', SaypipAuthConfig);
initMetadataForObject(SaypipAuthFactory, 'SaypipAuthFactory');
initMetadataForClass(BuildAuthorizationUrlRequest, 'BuildAuthorizationUrlRequest', BuildAuthorizationUrlRequest);
initMetadataForClass(OAuthAuthorizationCodeTokenRequest, 'OAuthAuthorizationCodeTokenRequest', OAuthAuthorizationCodeTokenRequest);
initMetadataForClass(OAuthRefreshTokenRequest, 'OAuthRefreshTokenRequest', OAuthRefreshTokenRequest);
initMetadataForClass(OAuthRevokeRequest, 'OAuthRevokeRequest', OAuthRevokeRequest);
initMetadataForCompanion(Companion);
protoOf($serializer).h1c = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OAuthTokenResponse, 'OAuthTokenResponse', OAuthTokenResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForObject(PkceHelper, 'PkceHelper');
initMetadataForObject(RandomHelper, 'RandomHelper');
initMetadataForClass(OAuthResourceImpl, 'OAuthResourceImpl', VOID, VOID, VOID, [3, 1]);
initMetadataForClass(SaypipAuthImpl, 'SaypipAuthImpl');
//endregion
//region block: init
SaypipAuthFactory_instance = new SaypipAuthFactory();
Companion_instance_0 = new Companion();
PkceHelper_instance = new PkceHelper();
RandomHelper_instance = new RandomHelper();
//endregion
//region block: exports
export {
  BuildAuthorizationUrlRequest as BuildAuthorizationUrlRequest,
  OAuthAuthorizationCodeTokenRequest as OAuthAuthorizationCodeTokenRequest,
  OAuthRefreshTokenRequest as OAuthRefreshTokenRequest,
  OAuthRevokeRequest as OAuthRevokeRequest,
  OAuthTokenResponse as OAuthTokenResponse,
};
export {
  SaypipAuthFactory_instance as SaypipAuthFactory_instanceestao751qpa7,
  BuildAuthorizationUrlRequest as BuildAuthorizationUrlRequeststfawd1odi2w,
  OAuthAuthorizationCodeTokenRequest as OAuthAuthorizationCodeTokenRequest3unfol2wshqcl,
  OAuthRefreshTokenRequest as OAuthRefreshTokenRequest2sccoxuvfmfdg,
  OAuthContext as OAuthContext2vea97ied6fox,
  SaypipAuthConfig as SaypipAuthConfig1dcal6r0zs1kt,
};
//endregion

//# sourceMappingURL=ksaypip-auth.mjs.map
