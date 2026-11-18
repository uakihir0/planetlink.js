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
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  createThis2j2avj17cvnv2 as createThis,
  Default_getInstancee1f46otjvolq as Default_getInstance,
  Default_getInstance3483fw4bkmewo as Default_getInstance_0,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  trimEndvvzjdhan75g as trimEnd,
  encodeToByteArray1onwao0uakjfh as encodeToByteArray,
  Char__rangeTo_impl_tkncvpnglpnjmwahwh as Char__rangeTo_impl_tkncvp,
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
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
  isBlank1dvkhjjvox3p0 as isBlank,
  to2cs3ny02qtbcb as to,
  mapOf1xd03cq9cnmy8 as mapOf,
} from './kotlin-kotlin-stdlib.mjs';
import {
  OAuthScope_getInstance2i8l5gg1wrwt5 as OAuthScope_getInstance,
  toBlockingpaklkkul8wtf as toBlocking,
  MediaType_getInstancef6plvf9ipjur as MediaType_getInstance,
  InternalUtility_getInstance2p88xjzl2fz4f as InternalUtility_getInstance,
  Response3jjoetub7ly67 as Response,
  SaypipException3omb2x4ct86rn as SaypipException,
} from './ksaypip-core.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstance1p9zda6r6kb23 as StringSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  IntSerializer_getInstance3jyhns9ue706g as IntSerializer_getInstance,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  Companion_instance3n246glqc666k as Companion_instance,
  SHA256_getInstance2a5z243btaw78 as SHA256_getInstance,
} from './cryptography-kotlin-cryptography-core.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import { URLBuilder1nlnzfhn643pn as URLBuilder } from './ktor-ktor-http.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class OAuthContext {
  constructor() {
    this.hpl_1 = null;
    this.ipl_1 = null;
    this.jpl_1 = null;
    this.kpl_1 = null;
    this.lpl_1 = null;
  }
}
class SaypipAuthConfig {
  constructor(baseUrl, clientId, clientSecret, redirectUri, scopes, authorizationEndpoint, tokenEndpoint, revokeEndpoint) {
    baseUrl = baseUrl === VOID ? 'https://saypip.app' : baseUrl;
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    redirectUri = redirectUri === VOID ? null : redirectUri;
    scopes = scopes === VOID ? toList(OAuthScope_getInstance().wp3_1) : scopes;
    authorizationEndpoint = authorizationEndpoint === VOID ? null : authorizationEndpoint;
    tokenEndpoint = tokenEndpoint === VOID ? null : tokenEndpoint;
    revokeEndpoint = revokeEndpoint === VOID ? null : revokeEndpoint;
    this.mpl_1 = baseUrl;
    this.npl_1 = clientId;
    this.opl_1 = clientSecret;
    this.ppl_1 = redirectUri;
    this.qpl_1 = scopes;
    this.rpl_1 = authorizationEndpoint;
    this.spl_1 = tokenEndpoint;
    this.tpl_1 = revokeEndpoint;
  }
  upl() {
    var tmp0_elvis_lhs = this.rpl_1;
    return tmp0_elvis_lhs == null ? this.mpl_1 + '/api/auth/oauth2/authorize' : tmp0_elvis_lhs;
  }
  vpl() {
    var tmp0_elvis_lhs = this.spl_1;
    return tmp0_elvis_lhs == null ? this.mpl_1 + '/api/auth/oauth2/token' : tmp0_elvis_lhs;
  }
  toString() {
    return 'SaypipAuthConfig(baseUrl=' + this.mpl_1 + ', clientId=' + this.npl_1 + ', clientSecret=' + this.opl_1 + ', redirectUri=' + this.ppl_1 + ', scopes=' + toString(this.qpl_1) + ', authorizationEndpoint=' + this.rpl_1 + ', tokenEndpoint=' + this.spl_1 + ', revokeEndpoint=' + this.tpl_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.mpl_1);
    result = imul(result, 31) + getStringHashCode(this.npl_1) | 0;
    result = imul(result, 31) + (this.opl_1 == null ? 0 : getStringHashCode(this.opl_1)) | 0;
    result = imul(result, 31) + (this.ppl_1 == null ? 0 : getStringHashCode(this.ppl_1)) | 0;
    result = imul(result, 31) + hashCode(this.qpl_1) | 0;
    result = imul(result, 31) + (this.rpl_1 == null ? 0 : getStringHashCode(this.rpl_1)) | 0;
    result = imul(result, 31) + (this.spl_1 == null ? 0 : getStringHashCode(this.spl_1)) | 0;
    result = imul(result, 31) + (this.tpl_1 == null ? 0 : getStringHashCode(this.tpl_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SaypipAuthConfig))
      return false;
    if (!(this.mpl_1 === other.mpl_1))
      return false;
    if (!(this.npl_1 === other.npl_1))
      return false;
    if (!(this.opl_1 == other.opl_1))
      return false;
    if (!(this.ppl_1 == other.ppl_1))
      return false;
    if (!equals(this.qpl_1, other.qpl_1))
      return false;
    if (!(this.rpl_1 == other.rpl_1))
      return false;
    if (!(this.spl_1 == other.spl_1))
      return false;
    if (!(this.tpl_1 == other.tpl_1))
      return false;
    return true;
  }
}
class SaypipAuthFactory {
  wpl(config) {
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
  pbn(_set____db54di) {
    this.clientId = _set____db54di;
  }
  qbn() {
    return this.clientId;
  }
  bc2(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  cc2() {
    return this.redirectUri;
  }
  rgu(_set____db54di) {
    this.scopes = _set____db54di;
  }
  qc1() {
    return this.scopes;
  }
  can(_set____db54di) {
    this.state = _set____db54di;
  }
  o89() {
    return this.state;
  }
}
class OAuthAuthorizationCodeTokenRequest {
  constructor() {
    this.code = null;
  }
  dc2(_set____db54di) {
    this.code = _set____db54di;
  }
  g35() {
    return this.code;
  }
}
class OAuthRefreshTokenRequest {
  constructor() {
    this.refreshToken = null;
  }
  gc2(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  hc2() {
    return this.refreshToken;
  }
}
class OAuthRevokeRequest {
  constructor() {
    this.token = null;
    this.tokenTypeHint = null;
  }
  v9r(_set____db54di) {
    this.token = _set____db54di;
  }
  k7a() {
    return this.token;
  }
  xpl(_set____db54di) {
    this.tokenTypeHint = _set____db54di;
  }
  ypl() {
    return this.tokenTypeHint;
  }
}
class Companion {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ksaypip.auth.api.entity.oauth.OAuthTokenResponse', this, 5);
    tmp0_serialDesc.g1c('access_token', true);
    tmp0_serialDesc.g1c('token_type', true);
    tmp0_serialDesc.g1c('expires_in', true);
    tmp0_serialDesc.g1c('refresh_token', true);
    tmp0_serialDesc.g1c('scope', true);
    this.zpl_1 = tmp0_serialDesc;
  }
  apm(encoder, value) {
    var tmp0_desc = this.zpl_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.accessToken === '')) {
      tmp1_output.j16(tmp0_desc, 0, value.accessToken);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.tokenType === '')) {
      tmp1_output.j16(tmp0_desc, 1, value.tokenType);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.expiresIn === -1)) {
      tmp1_output.e16(tmp0_desc, 2, value.expiresIn);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !(value.refreshToken == null)) {
      tmp1_output.m16(tmp0_desc, 3, StringSerializer_getInstance(), value.refreshToken);
    }
    if (tmp1_output.q16(tmp0_desc, 4) ? true : !(value.scope == null)) {
      tmp1_output.m16(tmp0_desc, 4, StringSerializer_getInstance(), value.scope);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.apm(encoder, value instanceof OAuthTokenResponse ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.zpl_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.u14(tmp0_desc);
    if (tmp9_input.j15()) {
      tmp4_local0 = tmp9_input.e15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.e15(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.z14(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i15(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.i15(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.e15(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.e15(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.z14(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i15(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.i15(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp9_input.v14(tmp0_desc);
    return OAuthTokenResponse.bpm(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  uz() {
    return this.zpl_1;
  }
  w1c() {
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
  pkb(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  iak() {
    return this.accessToken;
  }
  cpm(_set____db54di) {
    this.tokenType = _set____db54di;
  }
  uc3() {
    return this.tokenType;
  }
  v3l(_set____db54di) {
    this.expiresIn = _set____db54di;
  }
  w3l() {
    return this.expiresIn;
  }
  gc2(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  hc2() {
    return this.refreshToken;
  }
  vc3(_set____db54di) {
    this.scope = _set____db54di;
  }
  wc3() {
    return this.scope;
  }
  static bpm(seen0, accessToken, tokenType, expiresIn, refreshToken, scope, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().zpl_1);
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
  dpm() {
    var bytes = new Int8Array(32);
    Default_getInstance().zr(bytes);
    return trimEnd(Default_getInstance_0().zq_1.er(bytes), charArrayOf([_Char___init__impl__6a9atx(61)]));
  }
  epm(codeVerifier) {
    var hasher = Companion_instance.opk().spk(SHA256_getInstance()).fpm();
    var digest = hasher.dpl(encodeToByteArray(codeVerifier));
    return trimEnd(Default_getInstance_0().zq_1.er(digest), charArrayOf([_Char___init__impl__6a9atx(61)]));
  }
}
class RandomHelper {
  gpm(len) {
    var lists = plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
    // Inline function 'kotlin.collections.map' call
    var this_0 = numberRangeToNumber(1, len);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.i2(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.g3_1;
    var last = this_0.h3_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.random' call
        var tmp$ret$3 = random(lists, Default_getInstance()).o3_1;
        var tmp$ret$2 = new Char(tmp$ret$3);
        destination.j2(tmp$ret$2);
      }
       while (!(item === last));
    return joinToString(destination, '');
  }
}
class OAuthResourceImpl {
  constructor(config) {
    this.hpm_1 = config;
  }
  ipm(context, request) {
    var tmp0_elvis_lhs = request.clientId;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? context.hpl_1 : tmp0_elvis_lhs;
    var clientId = tmp1_elvis_lhs == null ? this.hpm_1.npl_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = request.redirectUri;
    var tmp3_elvis_lhs = tmp2_elvis_lhs == null ? context.ipl_1 : tmp2_elvis_lhs;
    var redirectUri = tmp3_elvis_lhs == null ? this.hpm_1.ppl_1 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = request.scopes;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : toList(tmp4_safe_receiver);
    var tmp6_elvis_lhs = tmp5_elvis_lhs == null ? context.jpl_1 : tmp5_elvis_lhs;
    var scopes = tmp6_elvis_lhs == null ? this.hpm_1.qpl_1 : tmp6_elvis_lhs;
    if (isBlank(clientId))
      throw SaypipException.yot('clientId is required.');
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (redirectUri == null || isBlank(redirectUri))
      throw SaypipException.yot('redirectUri is required.');
    var tmp7_elvis_lhs = context.lpl_1;
    var tmp;
    if (tmp7_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = PkceHelper_instance.dpm();
      context.lpl_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp7_elvis_lhs;
    }
    var codeVerifier = tmp;
    var tmp8_elvis_lhs = request.state;
    var tmp9_elvis_lhs = tmp8_elvis_lhs == null ? context.kpl_1 : tmp8_elvis_lhs;
    var tmp_0;
    if (tmp9_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_1 = RandomHelper_instance.gpm(32);
      context.kpl_1 = this_1;
      tmp_0 = this_1;
    } else {
      tmp_0 = tmp9_elvis_lhs;
    }
    var state = tmp_0;
    context.hpl_1 = clientId;
    context.ipl_1 = redirectUri;
    context.jpl_1 = scopes;
    context.kpl_1 = state;
    // Inline function 'kotlin.apply' call
    var this_2 = URLBuilder(this.hpm_1.upl());
    this_2.v4b_1.b3v('response_type', 'code');
    this_2.v4b_1.b3v('client_id', clientId);
    this_2.v4b_1.b3v('redirect_uri', redirectUri);
    this_2.v4b_1.b3v('scope', joinToString(scopes, ' '));
    this_2.v4b_1.b3v('state', state);
    this_2.v4b_1.b3v('code_challenge', PkceHelper_instance.epm(codeVerifier));
    this_2.v4b_1.b3v('code_challenge_method', 'S256');
    return this_2.h4d();
  }
  jpm(context, request) {
    var tmp0_elvis_lhs = request.code;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SaypipException.yot('code is required.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var code = tmp;
    var tmp1_elvis_lhs = context.ipl_1;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? this.hpm_1.ppl_1 : tmp1_elvis_lhs;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throw SaypipException.yot('redirectUri is required.');
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var redirectUri = tmp_0;
    var tmp3_elvis_lhs = context.lpl_1;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      throw SaypipException.yot('codeVerifier is missing: build the authorization URL first.');
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var codeVerifier = tmp_1;
    return tokenRequest(this, context, mapOf([to('grant_type', 'authorization_code'), to('code', code), to('redirect_uri', redirectUri), to('code_verifier', codeVerifier)]));
  }
  kpm(context, request) {
    var tmp0_elvis_lhs = request.refreshToken;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SaypipException.yot('refreshToken is required.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var refreshToken = tmp;
    return tokenRequest(this, context, mapOf([to('grant_type', 'refresh_token'), to('refresh_token', refreshToken)]));
  }
}
class SaypipAuthImpl {
  constructor(config) {
    this.lpm_1 = config;
    this.mpm_1 = new OAuthContext();
    this.npm_1 = new OAuthResourceImpl(this.lpm_1);
  }
  opm() {
    return this.npm_1;
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
  var tmp0_elvis_lhs = context.hpl_1;
  var clientId = tmp0_elvis_lhs == null ? $this.hpm_1.npl_1 : tmp0_elvis_lhs;
  return toBlocking(OAuthResourceImpl$tokenRequest$slambda($this, clientId, fields));
}
function *tokenCall($this, clientId, fields, basic, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'work.socialhub.ksaypip.auth.internal.OAuthResourceImpl.proceed' call
    try {
      // Inline function 'kotlin.also' call
      var this_0 = pwn($this, (new HttpRequest()).a58($this.hpm_1.vpl()).b58(MediaType_getInstance().spg_1), 'client_id', clientId);
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
      var response = yield* this_0.e58(true).m58($completion);
      var containsArg = response.q58_1;
      if (200 <= containsArg ? containsArg <= 299 : false) {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.ksaypip.internal.InternalUtility.fromJson' call
        var obj = response.u58();
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_1 = tmp0.upg_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_2 = this_1.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_3 = serializer(this_2, createKType(getKClass(OAuthTokenResponse), arrayOf([]), false));
        var tmp$ret$11 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
        var tmp$ret$9 = this_1.g11(tmp$ret$11, obj);
        // Inline function 'kotlin.also' call
        var this_4 = new Response(tmp$ret$9);
        this_4.json = response.u58();
        this_4.status = response.q58_1;
        tmp$ret$0 = this_4;
        break $l$block;
      }
      throw InternalUtility_getInstance().wpg(response.q58_1, response.u58());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof SaypipException ? e : null;
        throw tmp0_elvis_lhs == null ? SaypipException.zot(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$0;
}
function clientAuth($this, $receiver, clientId, basic) {
  var tmp0_elvis_lhs = $this.hpm_1.opl_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return $receiver;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var secret = tmp;
  if (basic) {
    var credentials = Default_getInstance_0().er(encodeToByteArray(clientId + ':' + secret));
    return $receiver.c58('Authorization', 'Basic ' + credentials);
  }
  return pwn($this, $receiver, 'client_secret', secret);
}
function isClientAuthMethodMismatch($this, e) {
  var tmp;
  if (e.tot_1 === 400 || e.tot_1 === 401) {
    var tmp0_safe_receiver = e.uot_1;
    tmp = (tmp0_safe_receiver == null ? null : contains(tmp0_safe_receiver, 'client_secret')) === true;
  } else {
    tmp = false;
  }
  return tmp;
}
function pwn($this, $receiver, key, value) {
  if (!(value == null)) {
    $receiver.j58(key, value);
  }
  return $receiver;
}
function OAuthResourceImpl$tokenRequest$slambda(this$0, $clientId, $fields) {
  return constructCallableReference(($this$toBlocking, $completion) => orPromise($completion, function *($completion) {
    var tmp;
    try {
      tmp = yield* /*#__NOINLINE__*/tokenCall(this$0, $clientId, $fields, !(this$0.hpm_1.opl_1 == null), $completion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof SaypipException) {
        var e = $p;
        var tmp_1;
        if (!(this$0.hpm_1.opl_1 == null) && isClientAuthMethodMismatch(this$0, e)) {
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
  }), 1);
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
protoOf($serializer).x1c = typeParametersSerializers;
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
  SaypipAuthFactory_instance as SaypipAuthFactory_instance3f305eq4g0d65,
  BuildAuthorizationUrlRequest as BuildAuthorizationUrlRequeststfawd1odi2w,
  OAuthAuthorizationCodeTokenRequest as OAuthAuthorizationCodeTokenRequest3unfol2wshqcl,
  OAuthRefreshTokenRequest as OAuthRefreshTokenRequest2sccoxuvfmfdg,
  OAuthContext as OAuthContext2vea97ied6fox,
  SaypipAuthConfig as SaypipAuthConfig1dcal6r0zs1kt,
};
//endregion

//# sourceMappingURL=ksaypip-auth.mjs.map
