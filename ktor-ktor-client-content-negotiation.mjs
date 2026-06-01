import {
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  plus1ogy4liedzq5j as plus,
  toMutableSetjdpdbr9jsqq8 as toMutableSet,
  ArrayList3it5z8td81qkl as ArrayList,
  protoOf180f3jzyo7rfj as protoOf,
  Unit_instancev9v8hjid95df as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  Exceptiondt2hlxn7j7vw as Exception,
  captureStack1fzi4aczwc4hg as captureStack,
  toString1pkumu07cwy4m as toString,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  emptyList1g2z5xcrvp2zy as emptyList,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  Unitkvevlwgzwiuc as Unit,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  equals2au1ep9vhcato as equals,
  joinToString1cxrrlmo0chqs as joinToString,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  getKClass3t8tygqu4lcxf as getKClass,
  setOf45ia9pnfhe90 as setOf,
  KtList3hktaavzmj137 as KtList,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  endsWith3cq61xxngobwh as endsWith,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Application_getInstance2wn6cl3kv21f0 as Application_getInstance,
  Companion_getInstance1co6rysm0hsdc as Companion_getInstance,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  contentType2zzm38yxo3syt as contentType,
  charset1dribv3ku48b1 as charset,
  NullBody_instance3jaj4elqoxne0 as NullBody_instance,
  contentType317fn4f991q9a as contentType_0,
  HttpStatusCode3o1wkms10pg4k as HttpStatusCode,
  ContentType1svlpabm9v7iz as ContentType,
} from './ktor-ktor-http.mjs';
import {
  register$default3nfw6tn7zx41g as register$default,
  Configuration20xgygxdzhlk5 as Configuration,
  deserialize3m9mw3rgwyyjs as deserialize,
  suitableCharset1jgdcpdzbzgzn as suitableCharset,
} from './ktor-ktor-serialization.mjs';
import {
  accept2gi3b7wj4jds9 as accept,
  EmptyContent_getInstance3cnuw24sjv05w as EmptyContent_getInstance,
  TransformRequestBodyContext3ll40opqaho0d as TransformRequestBodyContext,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  get_request3dwcif5y0fvf1 as get_request,
  TransformResponseBodyContext1axf7xx6ifwbj as TransformResponseBodyContext,
  HttpResponse1532ob1hsse1y as HttpResponse,
  ClientSSESession332rusa1q4gim as ClientSSESession,
  ClientSSESessionWithDeserialization37nab8162l18r as ClientSSESessionWithDeserialization,
  createClientPluginjwpvufjows5r as createClientPlugin,
} from './ktor-ktor-client-core.mjs';
import {
  Charsets_getInstanceqkyjyusuh1b0 as Charsets_getInstance,
  ByteReadChannel2wzou76jce72d as ByteReadChannel,
} from './ktor-ktor-io.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
  AttributeKey3aq8ytwgx54f7 as AttributeKey,
} from './ktor-ktor-utils.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ConverterRegistration {
  constructor(converter, contentTypeToSend, contentTypeMatcher) {
    this.smf_1 = converter;
    this.tmf_1 = contentTypeToSend;
    this.umf_1 = contentTypeMatcher;
  }
}
class ContentNegotiationConfig$defaultMatcher$1 {
  constructor($pattern) {
    this.vmf_1 = $pattern;
  }
  wmf(contentType) {
    return contentType.n3v(this.vmf_1);
  }
}
class ContentNegotiationConfig {
  constructor() {
    this.xmf_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ymf_1 = ArrayList.o2();
    this.zmf_1 = null;
  }
  l4g(contentType, converter, configuration) {
    var matcher = contentType.n3v(Application_getInstance().a3t_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
    this.amg(contentType, converter, matcher, configuration);
  }
  amg(contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.ymf_1.e2(registration);
  }
}
class ContentConverterException extends Exception {
  static dmg(message) {
    var $this = this.he(message);
    captureStack($this, $this.cmg_1);
    return $this;
  }
}
class ContentNegotiation$lambda$slambda {
  constructor($registrations, $this_createClientPlugin, $ignoredTypes) {
    this.fmg_1 = $registrations;
    this.gmg_1 = $this_createClientPlugin;
    this.hmg_1 = $ignoredTypes;
  }
  *img($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    return yield* /*#__NOINLINE__*/invoke$convertRequest(this.fmg_1, this.gmg_1, this.hmg_1, request, body, $completion);
  }
  p4r(p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
    return this.img(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
  }
}
class ContentNegotiation$lambda$slambda_0 {
  constructor($ignoredTypes, $registrations, $this_createClientPlugin) {
    this.jmg_1 = $ignoredTypes;
    this.kmg_1 = $registrations;
    this.lmg_1 = $this_createClientPlugin;
  }
  *o4r($this$transformResponseBody, response, body, info, $completion) {
    var tmp0_elvis_lhs = contentType_0(response);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var contentType = tmp;
    var charset = suitableCharset(get_request(response).o40());
    return yield* /*#__NOINLINE__*/invoke$convertResponse(this.jmg_1, this.kmg_1, this.lmg_1, get_request(response).f4k(), info, body, contentType, charset, $completion);
  }
  p4r(p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.o4r(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  }
}
class JsonContentTypeMatcher {
  wmf(contentType) {
    if (contentType.n3v(Application_getInstance().a3t_1)) {
      return true;
    }
    var value = contentType.m3v().toString();
    return Application_getInstance().u3t(value) && endsWith(value, '+json', true);
  }
}
//endregion
function get_LOGGER() {
  _init_properties_ContentNegotiation_kt__o183go();
  return LOGGER;
}
var LOGGER;
function get_DefaultCommonIgnoredTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return DefaultCommonIgnoredTypes;
}
var DefaultCommonIgnoredTypes;
function get_ExcludedContentTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ExcludedContentTypes;
}
var ExcludedContentTypes;
function get_ContentNegotiation() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ContentNegotiation;
}
var ContentNegotiation;
function defaultMatcher($this, pattern) {
  return new ContentNegotiationConfig$defaultMatcher$1(pattern);
}
function ContentNegotiationConfig$_init_$ref_1ne3ob() {
  var l = () => new ContentNegotiationConfig();
  l.callableName = '<init>';
  return l;
}
function ContentNegotiation$lambda($this$createClientPlugin) {
  _init_properties_ContentNegotiation_kt__o183go();
  var registrations = $this$createClientPlugin.i4o_1.ymf_1;
  var ignoredTypes = $this$createClientPlugin.i4o_1.xmf_1;
  $this$createClientPlugin.q4v(ContentNegotiation$lambda$slambda_1(registrations, $this$createClientPlugin, ignoredTypes));
  $this$createClientPlugin.i4r(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin));
  return Unit_instance;
}
function ContentNegotiation$lambda$convertRequest$lambda(it) {
  _init_properties_ContentNegotiation_kt__o183go();
  return toString(it.smf_1);
}
function *invoke$convertRequest(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
  var tmp;
  if (request.j4j_1.z3k(get_ExcludedContentTypes())) {
    var excluded = request.j4j_1.x3k(get_ExcludedContentTypes());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.o2();
    var _iterator__ex2g4s = registrations.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(excluded, Collection)) {
          tmp_0 = excluded.j1();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$3 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = excluded.l1();
        while (_iterator__ex2g4s_0.m1()) {
          var element_0 = _iterator__ex2g4s_0.n1();
          if (element.tmf_1.n3v(element_0)) {
            tmp$ret$3 = false;
            break $l$block_0;
          }
        }
        tmp$ret$3 = true;
      }
      if (tmp$ret$3) {
        destination.e2(element);
      }
    }
    tmp = destination;
  } else {
    tmp = registrations;
  }
  var requestRegistrations = tmp;
  // Inline function 'kotlin.collections.orEmpty' call
  var tmp0_elvis_lhs = request.g4j_1.i3n('Accept');
  var acceptHeaders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s_1 = requestRegistrations.l1();
  while (_iterator__ex2g4s_1.m1()) {
    var element_1 = _iterator__ex2g4s_1.n1();
    var tmp$ret$8;
    $l$block_2: {
      // Inline function 'kotlin.collections.none' call
      var tmp_1;
      if (isInterface(acceptHeaders, Collection)) {
        tmp_1 = acceptHeaders.j1();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$8 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s_2 = acceptHeaders.l1();
      while (_iterator__ex2g4s_2.m1()) {
        var element_2 = _iterator__ex2g4s_2.n1();
        if (Companion_getInstance().pv(element_2).n3v(element_1.tmf_1)) {
          tmp$ret$8 = false;
          break $l$block_2;
        }
      }
      tmp$ret$8 = true;
    }
    if (tmp$ret$8) {
      var qValue = $this_createClientPlugin.i4o_1.zmf_1;
      var contentTypeToSend = qValue == null ? element_1.tmf_1 : element_1.tmf_1.k3v('q', qValue.toString());
      get_LOGGER().o3r('Adding Accept=' + contentTypeToSend.toString() + ' header for ' + request.e4j_1.toString());
      accept(request, contentTypeToSend);
    }
  }
  var tmp_2;
  if (body instanceof OutgoingContent) {
    tmp_2 = true;
  } else {
    var tmp$ret$10;
    $l$block_4: {
      // Inline function 'kotlin.collections.any' call
      var tmp_3;
      if (isInterface(ignoredTypes, Collection)) {
        tmp_3 = ignoredTypes.j1();
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$10 = false;
        break $l$block_4;
      }
      var _iterator__ex2g4s_3 = ignoredTypes.l1();
      while (_iterator__ex2g4s_3.m1()) {
        var element_3 = _iterator__ex2g4s_3.n1();
        if (element_3.lf(body)) {
          tmp$ret$10 = true;
          break $l$block_4;
        }
      }
      tmp$ret$10 = false;
    }
    tmp_2 = tmp$ret$10;
  }
  if (tmp_2) {
    get_LOGGER().o3r('Body type ' + toString(getKClassFromExpression(body)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + request.e4j_1.toString() + '.'));
    return null;
  }
  var tmp0_elvis_lhs_0 = contentType(request);
  var tmp_4;
  if (tmp0_elvis_lhs_0 == null) {
    // Inline function 'kotlin.run' call
    get_LOGGER().o3r("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + request.e4j_1.toString() + '.');
    return null;
  } else {
    tmp_4 = tmp0_elvis_lhs_0;
  }
  var contentType_0 = tmp_4;
  if (body instanceof Unit) {
    get_LOGGER().o3r('Sending empty body for ' + request.e4j_1.toString());
    request.g4j_1.p3n('Content-Type');
    return EmptyContent_getInstance();
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.o2();
  var _iterator__ex2g4s_4 = registrations.l1();
  while (_iterator__ex2g4s_4.m1()) {
    var element_4 = _iterator__ex2g4s_4.n1();
    if (element_4.umf_1.wmf(contentType_0)) {
      destination_0.e2(element_4);
    }
  }
  // Inline function 'kotlin.takeIf' call
  var tmp_5;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!destination_0.j1()) {
    tmp_5 = destination_0;
  } else {
    tmp_5 = null;
  }
  var tmp1_elvis_lhs = tmp_5;
  var tmp_6;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    get_LOGGER().o3r('None of the registered converters match request Content-Type=' + contentType_0.toString() + '. ' + ('Skipping ContentNegotiation for ' + request.e4j_1.toString() + '.'));
    return null;
  } else {
    tmp_6 = tmp1_elvis_lhs;
  }
  var matchingRegistrations = tmp_6;
  if (request.j4w() == null) {
    get_LOGGER().o3r('Request has unknown body type. Skipping ContentNegotiation for ' + request.e4j_1.toString() + '.');
    return null;
  }
  request.g4j_1.p3n('Content-Type');
  var tmp$ret$22;
  $l$block_5: {
    // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
    var _iterator__ex2g4s_5 = matchingRegistrations.l1();
    while (_iterator__ex2g4s_5.m1()) {
      var element_5 = _iterator__ex2g4s_5.n1();
      var tmp0_elvis_lhs_1 = charset(contentType_0);
      var tmp_7 = tmp0_elvis_lhs_1 == null ? Charsets_getInstance().s3j_1 : tmp0_elvis_lhs_1;
      var tmp_8 = ensureNotNull(request.j4w());
      // Inline function 'kotlin.takeIf' call
      var tmp_9;
      if (!equals(body, NullBody_instance)) {
        tmp_9 = body;
      } else {
        tmp_9 = null;
      }
      var tmp$ret$24 = tmp_9;
      var result = yield* element_5.smf_1.emg(contentType_0, tmp_7, tmp_8, tmp$ret$24, $completion);
      if (!(result == null)) {
        get_LOGGER().o3r('Converted request body using ' + toString(element_5.smf_1) + ' for ' + request.e4j_1.toString());
      }
      var result_0 = result;
      if (!(result_0 == null)) {
        tmp$ret$22 = result_0;
        break $l$block_5;
      }
    }
    tmp$ret$22 = null;
  }
  var tmp2_elvis_lhs = tmp$ret$22;
  var tmp_10;
  if (tmp2_elvis_lhs == null) {
    var tmp_11 = "Can't convert " + toString(body) + ' with contentType ' + contentType_0.toString() + ' using converters ';
    throw ContentConverterException.dmg(tmp_11 + joinToString(matchingRegistrations, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
  } else {
    tmp_10 = tmp2_elvis_lhs;
  }
  var serializedContent = tmp_10;
  return serializedContent;
}
function *invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
  charset = charset === VOID ? Charsets_getInstance().s3j_1 : charset;
  if (!isInterface(body, ByteReadChannel)) {
    get_LOGGER().o3r('Response body is already transformed. Skipping ContentNegotiation for ' + requestUrl.toString() + '.');
    return null;
  }
  if (ignoredTypes.n2(info.d3r_1)) {
    get_LOGGER().o3r('Response body type ' + toString(info.d3r_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + requestUrl.toString() + '.'));
    return null;
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList.o2();
  var _iterator__ex2g4s = registrations.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    if (element.umf_1.wmf(responseContentType)) {
      destination.e2(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList.d2(collectionSizeOrDefault(destination, 10));
  var _iterator__ex2g4s_0 = destination.l1();
  while (_iterator__ex2g4s_0.m1()) {
    var item = _iterator__ex2g4s_0.n1();
    var tmp$ret$5 = item.smf_1;
    destination_0.e2(tmp$ret$5);
  }
  // Inline function 'kotlin.takeIf' call
  var tmp;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!destination_0.j1()) {
    tmp = destination_0;
  } else {
    tmp = null;
  }
  var tmp0_elvis_lhs = tmp;
  var tmp_0;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    get_LOGGER().o3r('None of the registered converters match response with Content-Type=' + responseContentType.toString() + '. ' + ('Skipping ContentNegotiation for ' + requestUrl.toString() + '.'));
    return null;
  } else {
    tmp_0 = tmp0_elvis_lhs;
  }
  var suitableConverters = tmp_0;
  var result = yield* deserialize(suitableConverters, body, info, charset, $completion);
  if (!isInterface(result, ByteReadChannel)) {
    get_LOGGER().o3r('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + requestUrl.toString() + '.');
  }
  return result;
}
function ContentNegotiation$lambda$slambda_1($registrations, $this_createClientPlugin, $ignoredTypes) {
  var i = new ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes);
  var l = ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) => i.img($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin) {
  var i = new ContentNegotiation$lambda$slambda_0($ignoredTypes, $registrations, $this_createClientPlugin);
  var l = ($this$transformResponseBody, response, body, info, $completion) => i.o4r($this$transformResponseBody, response, body, info, $completion);
  l.$arity = 4;
  return l;
}
var properties_initialized_ContentNegotiation_kt_1ayduy;
function _init_properties_ContentNegotiation_kt__o183go() {
  if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
    properties_initialized_ContentNegotiation_kt_1ayduy = true;
    LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
    DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().pg(), PrimitiveClasses_getInstance().lg(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent), getKClass(ClientSSESession), getKClass(ClientSSESessionWithDeserialization)]);
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'ExcludedContentTypesAttr';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp = getKClass(KtList);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_0;
    try {
      tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ContentType), arrayOf([]), false))]), false);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var tmp$ret$2 = tmp_0;
    var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
    ExcludedContentTypes = new AttributeKey(name, tmp$ret$1);
    var tmp_2 = ContentNegotiationConfig$_init_$ref_1ne3ob();
    ContentNegotiation = createClientPlugin('ContentNegotiation', tmp_2, ContentNegotiation$lambda);
  }
}
var JsonContentTypeMatcher_instance;
function JsonContentTypeMatcher_getInstance() {
  return JsonContentTypeMatcher_instance;
}
function get_DefaultIgnoredTypes() {
  _init_properties_DefaultIgnoredTypes_web_kt__6eddjw();
  return DefaultIgnoredTypes;
}
var DefaultIgnoredTypes;
var properties_initialized_DefaultIgnoredTypes_web_kt_23uj7m;
function _init_properties_DefaultIgnoredTypes_web_kt__6eddjw() {
  if (!properties_initialized_DefaultIgnoredTypes_web_kt_23uj7m) {
    properties_initialized_DefaultIgnoredTypes_web_kt_23uj7m = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    DefaultIgnoredTypes = LinkedHashSet.q2();
  }
}
//region block: post-declaration
initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
initMetadataForClass(ContentNegotiationConfig$defaultMatcher$1);
protoOf(ContentNegotiationConfig).m4g = register$default;
initMetadataForClass(ContentNegotiationConfig, 'ContentNegotiationConfig', ContentNegotiationConfig, VOID, [Configuration]);
initMetadataForClass(ContentConverterException, 'ContentConverterException');
initMetadataForLambda(ContentNegotiation$lambda$slambda, VOID, VOID, [4]);
initMetadataForLambda(ContentNegotiation$lambda$slambda_0, VOID, VOID, [4]);
initMetadataForObject(JsonContentTypeMatcher, 'JsonContentTypeMatcher');
//endregion
//region block: init
JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
//endregion
//region block: exports
export {
  get_ContentNegotiation as get_ContentNegotiationcp59ye9rorjc,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-content-negotiation.mjs.map
