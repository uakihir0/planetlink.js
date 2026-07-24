import {
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  split2bvyvnrlcifjv as split,
  lastOrNull1aq5oz189qoe1 as lastOrNull,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  ArrayList3it5z8td81qkl as ArrayList,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  copyToArray2j022khrow2yi as copyToArray,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  first58ocm7j58k3q as first,
  closeFinally1sadm0w9gt3u4 as closeFinally,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  PrimitiveClasses_getInstance143761yrsca9q as PrimitiveClasses_getInstance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isByteArray4nnzfn1x4o3w as isByteArray,
  decodeToString1x4faah2liw2p as decodeToString,
  constructCallableReference23y65rf941mch as constructCallableReference,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  isBlank1dvkhjjvox3p0 as isBlank,
  startsWith26w8qjqapeeq6 as startsWith,
  RuntimeException1r3t0zl97011n as RuntimeException,
} from './kotlin-kotlin-stdlib.mjs';
import { toByteArray1i3ns5jnoqlv6 as toByteArray } from './ktor-ktor-io.mjs';
import {
  Text_getInstancecnzpw4phsgym as Text_getInstance,
  Image_getInstance2xqhwmysw0llt as Image_getInstance,
  Video_getInstance26ibngctwhrg7 as Video_getInstance,
  ContentType1svlpabm9v7iz as ContentType,
  Application_getInstance17ubdrb0i0ohu as Application_getInstance,
  URLBuilder1nlnzfhn643pn as URLBuilder,
  takeFromkqlcz7c6dx2r as takeFrom,
  MultiPart_getInstance1k6b6wx1k1sjr as MultiPart_getInstance,
  contentType1lwcfjsjo0z8g as contentType,
  Companion_getInstance37paccmlttr9s as Companion_getInstance,
  HeadersBuilder3h7sn3kkvu98m as HeadersBuilder,
  append2z8giuo6jcxrf as append,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  NullBody_instanceyfq32eqie90j as NullBody_instance,
  Companion_getInstance2z7k6aavckkrm as Companion_getInstance_0,
  ParametersBuilder1ry9ntvvg567r as ParametersBuilder,
  Companion_getInstance1pptfj8vjmgsz as Companion_getInstance_1,
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  Urlowwyg1lanrqp as Url,
} from './ktor-ktor-http.mjs';
import {
  HttpClient3584jcajl7sef as HttpClient,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  url1ln4fngdmzeq5 as url,
  headers24pki7ce1busg as headers,
  timeout39ggydbhmf7b9 as timeout,
  FormBuilder2h86ly8mj760k as FormBuilder,
  formData16t43gxqji6d8 as formData,
  MultiPartFormDataContent67pixgga9hu4 as MultiPartFormDataContent,
  FormDataContent25s3w8cik3m7q as FormDataContent,
  HttpStatement3zxb33q8lku as HttpStatement,
  ProxyBuilder_instance368ierra1kpcs as ProxyBuilder_instance,
} from './ktor-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  toMap1agg4casweo9p as toMap,
} from './ktor-ktor-utils.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  CompletableDeferred2lnqvsbvx74d3 as CompletableDeferred,
  Key_instancebefxze3q9f64 as Key_instance,
  launch1c91vkjzdi9sd as launch,
  cancel36mj9lv3a0whl as cancel,
  Dispatchers_getInstance20p7pyqnrepag as Dispatchers_getInstance,
  SupervisorJobythnfxkr3jxc as SupervisorJob,
  CoroutineScopelux7s7zphw7e as CoroutineScope,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Type extends Enum {}
class Companion {
  l53(key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  }
  m53(key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  }
  n53(key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  }
  o53(json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  }
}
class HttpParameter {
  constructor(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.p53_1 = type;
    this.q53_1 = key;
    this.r53_1 = value;
    this.s53_1 = fileName;
    this.t53_1 = fileBody;
  }
  u53() {
    var tmp0_safe_receiver = this.s53_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  }
  v53() {
    switch (this.u53()) {
      case 'txt':
        return Text_getInstance().m3z_1;
      case 'html':
        return Text_getInstance().p3z_1;
      case 'css':
        return Text_getInstance().n3z_1;
      case 'csv':
        return Text_getInstance().o3z_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().u3y_1;
      case 'png':
        return Image_getInstance().w3y_1;
      case 'gif':
        return Image_getInstance().r3y_1;
      case 'svg':
        return Image_getInstance().x3y_1;
      case 'mpeg':
        return Video_getInstance().w3z_1;
      case 'mp4':
        return Video_getInstance().x3z_1;
      case 'mov':
        return Video_getInstance().z3z_1;
      case 'webm':
        return ContentType.j3x('video', 'webm');
      case 'json':
        return Application_getInstance().r3x_1;
      case 'xml':
        return Application_getInstance().x3x_1;
      case 'zip':
        return Application_getInstance().a3y_1;
      case 'pdf':
        return Application_getInstance().d3y_1;
    }
    return Application_getInstance().u3x_1;
  }
}
class HttpRequest {
  constructor() {
    this.w53_1 = 'https';
    this.x53_1 = null;
    this.y53_1 = null;
    this.z53_1 = null;
    this.a54_1 = null;
    this.b54_1 = null;
    this.c54_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d54_1 = ArrayList.j2();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.e54_1 = LinkedHashMap.r5();
    this.f54_1 = false;
    this.g54_1 = false;
    this.h54_1 = true;
    this.i54_1 = false;
    this.j54_1 = null;
    this.k54_1 = null;
    this.l54_1 = null;
  }
  o54(path) {
    // Inline function 'kotlin.also' call
    this.y53_1 = path;
    return this;
  }
  p54(url) {
    // Inline function 'kotlin.also' call
    this.a54_1 = url;
    return this;
  }
  q54(accept) {
    // Inline function 'kotlin.also' call
    this.b54_1 = accept;
    return this;
  }
  r54(key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.e54_1.o4(key, value);
    return this;
  }
  s54(forceMultipartFormData) {
    // Inline function 'kotlin.also' call
    this.f54_1 = forceMultipartFormData;
    return this;
  }
  t54(forceApplicationFormUrlEncoded) {
    // Inline function 'kotlin.also' call
    this.g54_1 = forceApplicationFormUrlEncoded;
    return this;
  }
  u54(followRedirect) {
    // Inline function 'kotlin.also' call
    this.h54_1 = followRedirect;
    return this;
  }
  v54(skipSSLValidation) {
    // Inline function 'kotlin.also' call
    this.i54_1 = skipSSLValidation;
    return this;
  }
  w54(key, value) {
    // Inline function 'kotlin.also' call
    this.d54_1.e2(Companion_instance.l53(key, toString(value)));
    return this;
  }
  x54(queries) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = queries.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.c3();
      // Inline function 'kotlin.collections.component2' call
      var v = element.d3();
      this.w54(k, v);
    }
    return this;
  }
  y54(key, value) {
    // Inline function 'kotlin.also' call
    this.d54_1.e2(Companion_instance.m53(key, toString(value)));
    return this;
  }
  z54(params) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = params.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.c3();
      // Inline function 'kotlin.collections.component2' call
      var v = element.d3();
      this.y54(k, v);
    }
    return this;
  }
  n53(key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.d54_1.e2(Companion_instance.n53(key, fileName, fileBody));
    return this;
  }
  o53(json) {
    // Inline function 'kotlin.also' call
    this.d54_1.e2(Companion_instance.o53(json));
    return this;
  }
  *a55($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().f45_1, $completion);
  }
  *b55($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().g45_1, $completion);
  }
  *c55($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().h45_1, $completion);
  }
  *d55($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().j45_1, $completion);
  }
  *e55($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().i45_1, $completion);
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.m54_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  *n54(response, $completion) {
    var tmp = response.p4n().c48_1;
    var tmp_0 = toMap(response.e45());
    // Inline function 'io.ktor.client.call.body' call
    var tmp_1 = response.g4n();
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_2 = PrimitiveClasses_getInstance().zg();
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_3;
    try {
      tmp_3 = createKType(PrimitiveClasses_getInstance().zg(), arrayOf([]), false);
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_4 = null;
      } else {
        throw $p;
      }
      tmp_3 = tmp_4;
    }
    var tmp$ret$2 = tmp_3;
    var tmp$ret$1 = new TypeInfo(tmp_2, tmp$ret$2);
    var tmp_5 = yield* tmp_1.d4n(tmp$ret$1, $completion);
    var tmp$ret$0 = (!(tmp_5 == null) ? isByteArray(tmp_5) : false) ? tmp_5 : THROW_CCE();
    return new HttpResponse(tmp, tmp_0, tmp$ret$0);
  }
}
class HttpResponse {
  constructor(status, headers, body) {
    Companion_getInstance_3();
    this.f55_1 = status;
    this.g55_1 = headers;
    this.h55_1 = body;
    var tmp = this;
    tmp.i55_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  j55() {
    var tmp0 = this.i55_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.d3();
  }
}
class WebsocketRequest {
  constructor() {
    this.k55_1 = 'ws';
    this.l55_1 = null;
    this.m55_1 = null;
    this.n55_1 = null;
    this.o55_1 = null;
    this.p55_1 = null;
    this.q55_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r55_1 = LinkedHashMap.r5();
    var tmp_0 = this;
    tmp_0.s55_1 = WebsocketRequest$textListener$slambda();
    var tmp_1 = this;
    tmp_1.t55_1 = WebsocketRequest$bytesListener$slambda();
    var tmp_2 = this;
    tmp_2.u55_1 = WebsocketRequest$onOpenListener$lambda;
    var tmp_3 = this;
    tmp_3.v55_1 = WebsocketRequest$onCloseListener$lambda;
    var tmp_4 = this;
    tmp_4.w55_1 = WebsocketRequest$onErrorListener$lambda;
    this.x55_1 = null;
    this.y55_1 = CompletableDeferred();
    this.z55_1 = false;
    this.a56_1 = CoroutineScope(Dispatchers_getInstance().g2h_1.jp(SupervisorJob()));
  }
  b56(url) {
    // Inline function 'kotlin.also' call
    this.o55_1 = url;
    return this;
  }
  *c56($completion) {
    return yield* /*#__NOINLINE__*/start(this, $completion);
  }
  f7() {
    if (!this.z55_1) {
      this.z55_1 = true;
      this.v55_1(this);
    }
    var tmp0_safe_receiver = this.x55_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close();
    }
    this.x55_1 = null;
    this.y55_1.v2c(Unit_instance);
    cancel(this.a56_1);
  }
  *d56(text, $completion) {
    var tmp0_elvis_lhs = this.x55_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException.o('WebSocket is not connected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var socket = tmp;
    socket.send(text);
    return Unit_instance;
  }
}
//endregion
var Type_QUERY_instance;
var Type_PARAM_instance;
var Type_FILE_instance;
var Type_JSON_instance;
var Type_entriesInitialized;
function Type_initEntries() {
  if (Type_entriesInitialized)
    return Unit_instance;
  Type_entriesInitialized = true;
  Type_QUERY_instance = new Type('QUERY', 0);
  Type_PARAM_instance = new Type('PARAM', 1);
  Type_FILE_instance = new Type('FILE', 2);
  Type_JSON_instance = new Type('JSON', 3);
}
var Companion_instance;
function Companion_getInstance_2() {
  return Companion_instance;
}
function Type_QUERY_getInstance() {
  Type_initEntries();
  return Type_QUERY_instance;
}
function Type_PARAM_getInstance() {
  Type_initEntries();
  return Type_PARAM_instance;
}
function Type_FILE_getInstance() {
  Type_initEntries();
  return Type_FILE_instance;
}
function Type_JSON_getInstance() {
  Type_initEntries();
  return Type_JSON_instance;
}
function *proceed($this, method, $completion) {
  var req = $this;
  var tmp0 = HttpClient(HttpRequest$proceed$lambda(req));
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      var tmp0_safe_receiver = $this.b54_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.set' call
        $this.e54_1.o4('Accept', tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $this.c54_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp0_0 = $this.e54_1;
        // Inline function 'kotlin.collections.set' call
        var key = 'User-Agent';
        tmp0_0.o4(key, tmp1_safe_receiver);
      }
      var tmp = Companion_getInstance_3();
      // Inline function 'io.ktor.client.request.request' call
      // Inline function 'kotlin.apply' call
      var this_0 = new HttpRequestBuilder();
      this_0.i4m_1 = method;
      if (!(req.a54_1 == null)) {
        // Inline function 'kotlin.checkNotNull' call
        var tmp0_1 = req.a54_1;
        var tmp$ret$12;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0_1 == null) {
            var message = 'Required value was null.';
            throw IllegalStateException.o(toString(message));
          } else {
            tmp$ret$12 = tmp0_1;
            break $l$block;
          }
        }
        var tmp_0 = tmp$ret$12;
        takeFrom(this_0.h4m_1, URLBuilder(tmp_0));
      } else {
        url(this_0, req.w53_1, req.x53_1, req.z53_1, req.y53_1);
      }
      headers(this_0, HttpRequest$proceed$lambda_0(req));
      timeout(this_0, HttpRequest$proceed$lambda_1(req));
      if (!$this.f54_1 && !$this.g54_1 && req.d54_1.l2() === 1 && canSendOnly($this, first(req.d54_1))) {
        var param = first(req.d54_1);
        // Inline function 'io.ktor.client.request.setBody' call
        var body = new ByteArrayContent(ensureNotNull(param.t53_1), param.v53());
        if (body == null) {
          this_0.k4m_1 = NullBody_instance;
          // Inline function 'io.ktor.util.reflect.typeInfo' call
          var tmp_1 = getKClass(ByteArrayContent);
          // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
          var tmp_2;
          try {
            tmp_2 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
          } catch ($p) {
            var tmp_3;
            if ($p instanceof Error) {
              var _unused_var__etf5q3 = $p;
              tmp_3 = null;
            } else {
              throw $p;
            }
            tmp_2 = tmp_3;
          }
          var tmp$ret$16 = tmp_2;
          var tmp$ret$15 = new TypeInfo(tmp_1, tmp$ret$16);
          this_0.b4q(tmp$ret$15);
        } else {
          if (body instanceof OutgoingContent) {
            this_0.k4m_1 = body;
            this_0.b4q(null);
          } else {
            this_0.k4m_1 = body;
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_4 = getKClass(ByteArrayContent);
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
            } catch ($p_0) {
              var tmp_6;
              if ($p_0 instanceof Error) {
                var _unused_var__etf5q3_0 = $p_0;
                tmp_6 = null;
              } else {
                throw $p_0;
              }
              tmp_5 = tmp_6;
            }
            var tmp$ret$18 = tmp_5;
            var tmp$ret$17 = new TypeInfo(tmp_4, tmp$ret$18);
            this_0.b4q(tmp$ret$17);
          }
        }
      } else {
        if (method.equals(Companion_getInstance_1().f45_1)) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = req.d54_1.l1();
          while (_iterator__ex2g4s.m1()) {
            var element = _iterator__ex2g4s.n1();
            if (element.p53_1.s1_1 === 0) {
              this_0.h4m_1.r48_1.g3s(element.q53_1, ensureNotNull(element.r53_1));
            } else {
              throw IllegalStateException.o('Request Body is not supported in the GET method.');
            }
          }
        } else {
          // Inline function 'kotlin.collections.filter' call
          var tmp0_2 = req.d54_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination = ArrayList.j2();
          var _iterator__ex2g4s_0 = tmp0_2.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var element_0 = _iterator__ex2g4s_0.n1();
            if (element_0.p53_1.equals(Type_QUERY_getInstance())) {
              destination.e2(element_0);
            }
          }
          var queries = destination;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_3 = req.d54_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_0 = ArrayList.j2();
          var _iterator__ex2g4s_1 = tmp0_3.l1();
          while (_iterator__ex2g4s_1.m1()) {
            var element_1 = _iterator__ex2g4s_1.n1();
            if (element_1.p53_1.equals(Type_PARAM_getInstance())) {
              destination_0.e2(element_1);
            }
          }
          var params = destination_0;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_4 = req.d54_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_1 = ArrayList.j2();
          var _iterator__ex2g4s_2 = tmp0_4.l1();
          while (_iterator__ex2g4s_2.m1()) {
            var element_2 = _iterator__ex2g4s_2.n1();
            if (element_2.p53_1.equals(Type_FILE_getInstance())) {
              destination_1.e2(element_2);
            }
          }
          var files = destination_1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!queries.j1()) {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_3 = queries.l1();
            while (_iterator__ex2g4s_3.m1()) {
              var element_3 = _iterator__ex2g4s_3.n1();
              this_0.h4m_1.r48_1.g3s(element_3.q53_1, ensureNotNull(element_3.r53_1));
            }
          }
          var tmp_7;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!params.j1()) {
            tmp_7 = true;
          } else {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_7 = !files.j1();
          }
          if (tmp_7) {
            if ($this.g54_1) {
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!files.j1()) {
                throw IllegalStateException.o('ApplicationFormUrlEncoded cannot send files.');
              }
              contentType(this_0, Application_getInstance().c3y_1);
              // Inline function 'io.ktor.http.Companion.build' call
              Companion_getInstance_0();
              // Inline function 'kotlin.apply' call
              var this_1 = ParametersBuilder();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_4 = params.l1();
              while (_iterator__ex2g4s_4.m1()) {
                var element_4 = _iterator__ex2g4s_4.n1();
                this_1.g3s(element_4.q53_1, ensureNotNull(element_4.r53_1));
              }
              var tmp$ret$36 = this_1.h40();
              // Inline function 'io.ktor.client.request.setBody' call
              var body_0 = new FormDataContent(tmp$ret$36);
              if (body_0 == null) {
                this_0.k4m_1 = NullBody_instance;
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_8 = getKClass(FormDataContent);
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                } catch ($p_1) {
                  var tmp_10;
                  if ($p_1 instanceof Error) {
                    var _unused_var__etf5q3_1 = $p_1;
                    tmp_10 = null;
                  } else {
                    throw $p_1;
                  }
                  tmp_9 = tmp_10;
                }
                var tmp$ret$43 = tmp_9;
                var tmp$ret$42 = new TypeInfo(tmp_8, tmp$ret$43);
                this_0.b4q(tmp$ret$42);
              } else {
                if (body_0 instanceof OutgoingContent) {
                  this_0.k4m_1 = body_0;
                  this_0.b4q(null);
                } else {
                  this_0.k4m_1 = body_0;
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_11 = getKClass(FormDataContent);
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_12;
                  try {
                    tmp_12 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                  } catch ($p_2) {
                    var tmp_13;
                    if ($p_2 instanceof Error) {
                      var _unused_var__etf5q3_2 = $p_2;
                      tmp_13 = null;
                    } else {
                      throw $p_2;
                    }
                    tmp_12 = tmp_13;
                  }
                  var tmp$ret$45 = tmp_12;
                  var tmp$ret$44 = new TypeInfo(tmp_11, tmp$ret$45);
                  this_0.b4q(tmp$ret$44);
                }
              }
            } else {
              contentType(this_0, MultiPart_getInstance().g3z_1);
              // Inline function 'io.ktor.client.request.forms.formData' call
              // Inline function 'kotlin.apply' call
              var this_2 = new FormBuilder();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_5 = params.l1();
              while (_iterator__ex2g4s_5.m1()) {
                var element_5 = _iterator__ex2g4s_5.n1();
                this_2.o50(element_5.q53_1, ensureNotNull(element_5.r53_1));
              }
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_6 = files.l1();
              while (_iterator__ex2g4s_6.m1()) {
                var element_6 = _iterator__ex2g4s_6.n1();
                var tmp_14 = ensureNotNull(element_6.t53_1);
                // Inline function 'io.ktor.http.Companion.build' call
                Companion_getInstance();
                // Inline function 'kotlin.apply' call
                var this_3 = new HeadersBuilder();
                append(this_3, 'Content-Type', element_6.v53());
                this_3.g3s('Content-Disposition', 'filename=' + element_6.s53_1);
                var tmp$ret$53 = this_3.h40();
                this_2.p50(element_6.q53_1, tmp_14, tmp$ret$53);
              }
              // Inline function 'kotlin.collections.toTypedArray' call
              var this_4 = this_2.q50();
              var tmp$ret$56 = copyToArray(this_4);
              var tmp$ret$46 = formData(tmp$ret$56.slice());
              // Inline function 'io.ktor.client.request.setBody' call
              var body_1 = new MultiPartFormDataContent(tmp$ret$46);
              if (body_1 == null) {
                this_0.k4m_1 = NullBody_instance;
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_15 = getKClass(MultiPartFormDataContent);
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_16;
                try {
                  tmp_16 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                } catch ($p_3) {
                  var tmp_17;
                  if ($p_3 instanceof Error) {
                    var _unused_var__etf5q3_3 = $p_3;
                    tmp_17 = null;
                  } else {
                    throw $p_3;
                  }
                  tmp_16 = tmp_17;
                }
                var tmp$ret$59 = tmp_16;
                var tmp$ret$58 = new TypeInfo(tmp_15, tmp$ret$59);
                this_0.b4q(tmp$ret$58);
              } else {
                if (body_1 instanceof OutgoingContent) {
                  this_0.k4m_1 = body_1;
                  this_0.b4q(null);
                } else {
                  this_0.k4m_1 = body_1;
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_18 = getKClass(MultiPartFormDataContent);
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_19;
                  try {
                    tmp_19 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                  } catch ($p_4) {
                    var tmp_20;
                    if ($p_4 instanceof Error) {
                      var _unused_var__etf5q3_4 = $p_4;
                      tmp_20 = null;
                    } else {
                      throw $p_4;
                    }
                    tmp_19 = tmp_20;
                  }
                  var tmp$ret$61 = tmp_19;
                  var tmp$ret$60 = new TypeInfo(tmp_18, tmp$ret$61);
                  this_0.b4q(tmp$ret$60);
                }
              }
            }
          }
        }
      }
      // Inline function 'io.ktor.client.request.request' call
      var tmp$ret$8 = yield* (new HttpStatement(this_0, tmp0)).y51($completion);
      tmp$ret$0 = yield* tmp.n54(tmp$ret$8, $completion);
      break $l$block_0;
    } catch ($p_5) {
      if ($p_5 instanceof Error) {
        var e = $p_5;
        exception = e;
        throw e;
      } else {
        throw $p_5;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
function canSendOnly($this, param) {
  if (param.p53_1.equals(Type_JSON_getInstance()))
    return true;
  var tmp0_subject = param.v53();
  return tmp0_subject.equals(Application_getInstance().r3x_1) ? true : tmp0_subject.equals(Image_getInstance().u3y_1) ? true : tmp0_subject.equals(Image_getInstance().w3y_1) ? true : tmp0_subject.equals(Image_getInstance().r3y_1) ? true : tmp0_subject.equals(Video_getInstance().w3z_1) ? true : tmp0_subject.equals(Video_getInstance().x3z_1) ? true : tmp0_subject.equals(Video_getInstance().z3z_1) ? true : tmp0_subject.equals(ContentType.j3x('video', 'webm')) ? true : false;
}
function HttpRequest$proceed$lambda($req) {
  return ($this$HttpClient) => {
    applySystemProxy($this$HttpClient);
    var tmp;
    if ($req.i54_1) {
      applySkipSSLValidation($this$HttpClient);
      tmp = Unit_instance;
    }
    $this$HttpClient.t4l_1 = $req.h54_1;
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_0($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.e54_1.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.c3();
      // Inline function 'kotlin.collections.component2' call
      var v = element.d3();
      $this$headers.g3s(k, v);
    }
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_1($req) {
  return ($this$timeout) => {
    $this$timeout.w4v($req.j54_1);
    $this$timeout.x4v($req.k54_1);
    $this$timeout.y4v($req.l54_1);
    return Unit_instance;
  };
}
function HttpResponse$Companion$mapper$lambda($this$Json) {
  $this$Json.i1n_1 = true;
  return Unit_instance;
}
var Companion_instance_0;
function Companion_getInstance_3() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function HttpResponse$stringBody$delegate$lambda(this$0) {
  return () => decodeToString(this$0.h55_1);
}
function HttpResponse$_get_stringBody_$ref_nmyr7m() {
  return constructCallableReference((p0) => p0.j55(), 1, 0, 38);
}
function applySystemProxy(_this__u8e3s4) {
  var proxyUrl = proxyUrlFromEnv();
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(proxyUrl == null || isBlank(proxyUrl))) {
    _this__u8e3s4.q4m(applySystemProxy$lambda(proxyUrl));
  }
}
function applySystemProxy$lambda($proxyUrl) {
  return ($this$engine) => {
    $this$engine.m4q_1 = ProxyBuilder_instance.k53(Url($proxyUrl));
    return Unit_instance;
  };
}
function applySkipSSLValidation(_this__u8e3s4) {
  throw IllegalStateException.o('Skip SSL Validation is not supported on JS target.');
}
function proxyUrlFromEnv() {
  return null;
}
function *start($this, $completion) {
  var wsUrl = buildUrl($this);
  var opened = CompletableDeferred();
  $this.y55_1 = CompletableDeferred();
  $this.z55_1 = false;
  var socket = new WebSocket(wsUrl);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  socket.binaryType = 'arraybuffer';
  $this.x55_1 = socket;
  socket.onopen = WebsocketRequest$start$lambda(opened, $this);
  socket.onclose = WebsocketRequest$start$lambda_0($this, opened);
  socket.onerror = WebsocketRequest$start$lambda_1($this, opened);
  socket.onmessage = WebsocketRequest$start$lambda_2($this);
  // Inline function 'kotlin.js.getCoroutineContext' call
  var tmp0_safe_receiver = $completion.ld().xd(Key_instance);
  if (tmp0_safe_receiver == null)
    null;
  else {
    tmp0_safe_receiver.q26(WebsocketRequest$start$lambda_3($this));
  }
  yield* opened.o29($completion);
  yield* $this.y55_1.o29($completion);
  return $this;
}
function buildUrl($this) {
  var tmp0_safe_receiver = $this.o55_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var s = $this.k55_1 === 'ws' || $this.k55_1 === 'wss' ? $this.k55_1 : 'wss';
  var tmp0 = $this.l55_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlin.checkNotNull' call
    if (tmp0 == null) {
      var message = 'host must be set';
      throw IllegalStateException.o(toString(message));
    } else {
      tmp$ret$2 = tmp0;
      break $l$block;
    }
  }
  var h = tmp$ret$2;
  var tmp1_safe_receiver = $this.n55_1;
  var tmp;
  if (tmp1_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = ':' + tmp1_safe_receiver;
  }
  var tmp2_elvis_lhs = tmp;
  var p = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  var tmp3_safe_receiver = $this.m55_1;
  var tmp_0;
  if (tmp3_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = startsWith(tmp3_safe_receiver, '/') ? tmp3_safe_receiver : '/' + tmp3_safe_receiver;
  }
  var tmp4_elvis_lhs = tmp_0;
  var pathPart = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
  return s + '://' + h + p + pathPart;
}
function WebsocketRequest$textListener$slambda() {
  return constructCallableReference(function *(it, $completion) {
    return Unit_instance;
  }, 1);
}
function WebsocketRequest$bytesListener$slambda() {
  return constructCallableReference(function *(it, $completion) {
    return Unit_instance;
  }, 1);
}
function WebsocketRequest$onOpenListener$lambda(it) {
  return Unit_instance;
}
function WebsocketRequest$onCloseListener$lambda(it) {
  return Unit_instance;
}
function WebsocketRequest$onErrorListener$lambda(it) {
  return Unit_instance;
}
function WebsocketRequest$start$lambda($opened, this$0) {
  return (it) => {
    $opened.v2c(Unit_instance);
    var tmp;
    try {
      this$0.u55_1(this$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        this$0.w55_1(RuntimeException.qe('onOpenListener failed', e));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
}
function WebsocketRequest$start$lambda_0(this$0, $opened) {
  return (it) => {
    this$0.x55_1 = null;
    var tmp;
    if (!$opened.j26()) {
      $opened.w2c(RuntimeException.kb('WebSocket closed before open'));
      tmp = Unit_instance;
    }
    var tmp_0;
    if (!this$0.z55_1) {
      this$0.z55_1 = true;
      tmp_0 = this$0.v55_1(this$0);
    }
    return this$0.y55_1.v2c(Unit_instance);
  };
}
function WebsocketRequest$start$lambda_1(this$0, $opened) {
  return (_unused_var__etf5q3) => {
    var ex = RuntimeException.kb('WebSocket error');
    this$0.w55_1(ex);
    var tmp;
    if (!$opened.j26()) {
      $opened.w2c(ex);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function WebsocketRequest$start$lambda$slambda(this$0, $data) {
  return constructCallableReference(function *($this$launch, $completion) {
    yield* this$0.s55_1($data, $completion);
    return Unit_instance;
  }, 1);
}
function WebsocketRequest$start$lambda$slambda_0(this$0, $bytes) {
  return constructCallableReference(function *($this$launch, $completion) {
    yield* this$0.t55_1($bytes, $completion);
    return Unit_instance;
  }, 1);
}
function WebsocketRequest$start$lambda_2(this$0) {
  return (event) => {
    var data = event.data;
    var tmp;
    if (!(data == null) ? typeof data === 'string' : false) {
      launch(this$0.a56_1, VOID, VOID, WebsocketRequest$start$lambda$slambda(this$0, data));
      tmp = Unit_instance;
    } else {
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var bytes = new Int8Array(data);
        launch(this$0.a56_1, VOID, VOID, WebsocketRequest$start$lambda$slambda_0(this$0, bytes));
        tmp = Unit_instance;
      }
    }
    return Unit_instance;
  };
}
function WebsocketRequest$start$lambda_3(this$0) {
  return (it) => {
    var tmp0_safe_receiver = this$0.x55_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close();
    }
    cancel(this$0.a56_1);
    return Unit_instance;
  };
}
//region block: post-declaration
initMetadataForClass(Type, 'Type');
initMetadataForCompanion(Companion);
initMetadataForClass(HttpParameter, 'HttpParameter');
initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
initMetadataForClass(HttpResponse, 'HttpResponse');
initMetadataForClass(WebsocketRequest, 'WebsocketRequest', WebsocketRequest, VOID, VOID, [0, 1]);
//endregion
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  Companion_instance as Companion_instance1khxdx9lnrmci,
  WebsocketRequest as WebsocketRequest38pjwt1m63ieg,
  HttpRequest as HttpRequest3gg7t5d9j2hk9,
};
//endregion

//# sourceMappingURL=khttpclient.mjs.map
