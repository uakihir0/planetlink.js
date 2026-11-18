import {
  Unit_instance3kz1zqli6gr1r as Unit_instance,
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
  PrimitiveClasses_getInstance13wbaztpz3e2d as PrimitiveClasses_getInstance,
  isByteArray4nnzfn1x4o3w as isByteArray,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  decodeToString1x4faah2liw2p as decodeToString,
  constructCallableReference23y65rf941mch as constructCallableReference,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  isBlank1dvkhjjvox3p0 as isBlank,
  startsWith26w8qjqapeeq6 as startsWith,
  orPromise1iucc2to2udt2 as orPromise,
  RuntimeException1r3t0zl97011n as RuntimeException,
  $3l5vvh8yg0ier as $,
} from './kotlin-kotlin-stdlib.mjs';
import { toByteArray1i3ns5jnoqlv6 as toByteArray } from './ktor-ktor-io.mjs';
import {
  Text_getInstance2n0fbbag7eq4k as Text_getInstance,
  Image_getInstance2m1rm2vxrh8my as Image_getInstance,
  Video_getInstance1fh8aeg6yml64 as Video_getInstance,
  ContentType1svlpabm9v7iz as ContentType,
  Application_getInstance3vhi2qmce4cj0 as Application_getInstance,
  URLBuilder1nlnzfhn643pn as URLBuilder,
  takeFromkqlcz7c6dx2r as takeFrom,
  MultiPart_getInstance5h1nld8q49pe as MultiPart_getInstance,
  contentType1lwcfjsjo0z8g as contentType,
  Companion_getInstance72dans54qq1a as Companion_getInstance,
  HeadersBuilder3h7sn3kkvu98m as HeadersBuilder,
  append2z8giuo6jcxrf as append,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  NullBody_instance22vwyocs8eppk as NullBody_instance,
  Companion_getInstance25cbdbruarm2m as Companion_getInstance_0,
  ParametersBuilder1ry9ntvvg567r as ParametersBuilder,
  Companion_getInstance29j9s2wnmk34z as Companion_getInstance_1,
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
  ProxyBuilder_instance1fqpnkd31ded1 as ProxyBuilder_instance,
} from './ktor-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  toMap1agg4casweo9p as toMap,
} from './ktor-ktor-utils.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  CompletableDeferred2lnqvsbvx74d3 as CompletableDeferred,
  Key_instancepi2bbb0csu5f as Key_instance,
  launch1c91vkjzdi9sd as launch,
  cancel36mj9lv3a0whl as cancel,
  Dispatchers_getInstance128lm494a5r5s as Dispatchers_getInstance,
  SupervisorJobythnfxkr3jxc as SupervisorJob,
  CoroutineScopelux7s7zphw7e as CoroutineScope,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Type extends Enum {}
class Companion {
  w56(key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  }
  x56(key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  }
  y56(key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  }
  z56(json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  }
}
class HttpParameter {
  constructor(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.a57_1 = type;
    this.b57_1 = key;
    this.c57_1 = value;
    this.d57_1 = fileName;
    this.e57_1 = fileBody;
  }
  f57() {
    var tmp0_safe_receiver = this.d57_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  }
  g57() {
    switch (this.f57()) {
      case 'txt':
        return Text_getInstance().o42_1;
      case 'html':
        return Text_getInstance().r42_1;
      case 'css':
        return Text_getInstance().p42_1;
      case 'csv':
        return Text_getInstance().q42_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().v41_1;
      case 'png':
        return Image_getInstance().x41_1;
      case 'gif':
        return Image_getInstance().s41_1;
      case 'svg':
        return Image_getInstance().y41_1;
      case 'mpeg':
        return Video_getInstance().z42_1;
      case 'mp4':
        return Video_getInstance().a43_1;
      case 'mov':
        return Video_getInstance().c43_1;
      case 'webm':
        return ContentType.l40('video', 'webm');
      case 'json':
        return Application_getInstance().t40_1;
      case 'xml':
        return Application_getInstance().z40_1;
      case 'zip':
        return Application_getInstance().c41_1;
      case 'pdf':
        return Application_getInstance().f41_1;
    }
    return Application_getInstance().w40_1;
  }
}
class HttpRequest {
  constructor() {
    this.h57_1 = 'https';
    this.i57_1 = null;
    this.j57_1 = null;
    this.k57_1 = null;
    this.l57_1 = null;
    this.m57_1 = null;
    this.n57_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o57_1 = ArrayList.k2();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.p57_1 = LinkedHashMap.o5();
    this.q57_1 = false;
    this.r57_1 = false;
    this.s57_1 = true;
    this.t57_1 = false;
    this.u57_1 = null;
    this.v57_1 = null;
    this.w57_1 = null;
  }
  z57(path) {
    // Inline function 'kotlin.also' call
    this.j57_1 = path;
    return this;
  }
  a58(url) {
    // Inline function 'kotlin.also' call
    this.l57_1 = url;
    return this;
  }
  b58(accept) {
    // Inline function 'kotlin.also' call
    this.m57_1 = accept;
    return this;
  }
  c58(key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.p57_1.u4(key, value);
    return this;
  }
  d58(forceMultipartFormData) {
    // Inline function 'kotlin.also' call
    this.q57_1 = forceMultipartFormData;
    return this;
  }
  e58(forceApplicationFormUrlEncoded) {
    // Inline function 'kotlin.also' call
    this.r57_1 = forceApplicationFormUrlEncoded;
    return this;
  }
  f58(followRedirect) {
    // Inline function 'kotlin.also' call
    this.s57_1 = followRedirect;
    return this;
  }
  g58(skipSSLValidation) {
    // Inline function 'kotlin.also' call
    this.t57_1 = skipSSLValidation;
    return this;
  }
  h58(key, value) {
    // Inline function 'kotlin.also' call
    this.o57_1.j2(Companion_instance.w56(key, toString(value)));
    return this;
  }
  i58(queries) {
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
      this.h58(k, v);
    }
    return this;
  }
  j58(key, value) {
    // Inline function 'kotlin.also' call
    this.o57_1.j2(Companion_instance.x56(key, toString(value)));
    return this;
  }
  k58(params) {
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
      this.j58(k, v);
    }
    return this;
  }
  y56(key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.o57_1.j2(Companion_instance.y56(key, fileName, fileBody));
    return this;
  }
  z56(json) {
    // Inline function 'kotlin.also' call
    this.o57_1.j2(Companion_instance.z56(json));
    return this;
  }
  *l58($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().i48_1, $completion);
  }
  *m58($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().j48_1, $completion);
  }
  *n58($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().k48_1, $completion);
  }
  *o58($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().m48_1, $completion);
  }
  *p58($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().l48_1, $completion);
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.x57_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  *y57(response, $completion) {
    var tmp = response.p4q().g4b_1;
    var tmp_0 = toMap(response.h48());
    // Inline function 'io.ktor.client.call.body' call
    var tmp_1 = response.n4q();
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_2 = PrimitiveClasses_getInstance().ch();
    var tmp_3 = !(null == null) ? isByteArray(null) : false;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_4;
    try {
      tmp_4 = createKType(PrimitiveClasses_getInstance().ch(), arrayOf([]), false);
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_5 = null;
      } else {
        throw $p;
      }
      tmp_4 = tmp_5;
    }
    var tmp$ret$2 = tmp_4;
    var tmp$ret$1 = new TypeInfo(tmp_2, tmp_3, tmp$ret$2);
    var tmp_6 = yield* tmp_1.m4q(tmp$ret$1, $completion);
    var tmp$ret$0 = (!(tmp_6 == null) ? isByteArray(tmp_6) : false) ? tmp_6 : THROW_CCE();
    return new HttpResponse(tmp, tmp_0, tmp$ret$0);
  }
}
class HttpResponse {
  constructor(status, headers, body) {
    Companion_getInstance_3();
    this.q58_1 = status;
    this.r58_1 = headers;
    this.s58_1 = body;
    var tmp = this;
    tmp.t58_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  u58() {
    var tmp0 = this.t58_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.d3();
  }
}
class WebsocketRequest {
  constructor() {
    this.v58_1 = 'ws';
    this.w58_1 = null;
    this.x58_1 = null;
    this.y58_1 = null;
    this.z58_1 = null;
    this.a59_1 = null;
    this.b59_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.c59_1 = LinkedHashMap.o5();
    var tmp_0 = this;
    tmp_0.d59_1 = WebsocketRequest$textListener$slambda();
    var tmp_1 = this;
    tmp_1.e59_1 = WebsocketRequest$bytesListener$slambda();
    var tmp_2 = this;
    tmp_2.f59_1 = WebsocketRequest$onOpenListener$lambda;
    var tmp_3 = this;
    tmp_3.g59_1 = WebsocketRequest$onCloseListener$lambda;
    var tmp_4 = this;
    tmp_4.h59_1 = WebsocketRequest$onErrorListener$lambda;
    this.i59_1 = null;
    this.j59_1 = CompletableDeferred();
    this.k59_1 = false;
    this.l59_1 = CoroutineScope(Dispatchers_getInstance().t2j_1.xp(SupervisorJob()));
  }
  m59(url) {
    // Inline function 'kotlin.also' call
    this.z58_1 = url;
    return this;
  }
  c58(key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.c59_1.u4(key, value);
    return this;
  }
  *n59($completion) {
    return yield* /*#__NOINLINE__*/start(this, $completion);
  }
  g7() {
    if (!this.k59_1) {
      this.k59_1 = true;
      this.g59_1(this);
    }
    var tmp0_safe_receiver = this.i59_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close();
    }
    this.i59_1 = null;
    this.j59_1.h2f(Unit_instance);
    cancel(this.l59_1);
  }
  *o59(text, $completion) {
    var tmp0_elvis_lhs = this.i59_1;
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
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_instance;
  static_init_called = true;
  Type_QUERY_instance = new Type('QUERY', 0);
  Type_PARAM_instance = new Type('PARAM', 1);
  Type_FILE_instance = new Type('FILE', 2);
  Type_JSON_instance = new Type('JSON', 3);
}
var Type_QUERY_instance;
var Type_PARAM_instance;
var Type_FILE_instance;
var Type_JSON_instance;
var Companion_instance;
function Companion_getInstance_2() {
  return Companion_instance;
}
function Type_QUERY_getInstance() {
  static_init();
  return Type_QUERY_instance;
}
function Type_PARAM_getInstance() {
  static_init();
  return Type_PARAM_instance;
}
function Type_FILE_getInstance() {
  static_init();
  return Type_FILE_instance;
}
function Type_JSON_getInstance() {
  static_init();
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
      var tmp0_safe_receiver = $this.m57_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.set' call
        $this.p57_1.u4('Accept', tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $this.n57_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp0_0 = $this.p57_1;
        // Inline function 'kotlin.collections.set' call
        var key = 'User-Agent';
        tmp0_0.u4(key, tmp1_safe_receiver);
      }
      var tmp = Companion_getInstance_3();
      // Inline function 'io.ktor.client.request.request' call
      // Inline function 'kotlin.apply' call
      var this_0 = new HttpRequestBuilder();
      this_0.m4p_1 = method;
      if (!(req.l57_1 == null)) {
        // Inline function 'kotlin.checkNotNull' call
        var tmp0_1 = req.l57_1;
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
        takeFrom(this_0.l4p_1, URLBuilder(tmp_0));
      } else {
        url(this_0, req.h57_1, req.i57_1, req.k57_1, req.j57_1);
      }
      headers(this_0, HttpRequest$proceed$lambda_0(req));
      timeout(this_0, HttpRequest$proceed$lambda_1(req));
      if (!$this.q57_1 && !$this.r57_1 && req.o57_1.l2() === 1 && canSendOnly($this, first(req.o57_1))) {
        var param = first(req.o57_1);
        // Inline function 'io.ktor.client.request.setBody' call
        var body = new ByteArrayContent(ensureNotNull(param.e57_1), param.g57());
        if (body == null) {
          this_0.o4p_1 = NullBody_instance;
          // Inline function 'io.ktor.util.reflect.typeInfo' call
          var tmp_1 = getKClass(ByteArrayContent);
          var tmp_2 = null instanceof ByteArrayContent;
          // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
          var tmp_3;
          try {
            tmp_3 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
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
          var tmp$ret$16 = tmp_3;
          var tmp$ret$15 = new TypeInfo(tmp_1, tmp_2, tmp$ret$16);
          this_0.f4t(tmp$ret$15);
        } else {
          if (body instanceof OutgoingContent) {
            this_0.o4p_1 = body;
            this_0.f4t(null);
          } else {
            this_0.o4p_1 = body;
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_5 = getKClass(ByteArrayContent);
            var tmp_6 = null instanceof ByteArrayContent;
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_7;
            try {
              tmp_7 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
            } catch ($p_0) {
              var tmp_8;
              if ($p_0 instanceof Error) {
                var _unused_var__etf5q3_0 = $p_0;
                tmp_8 = null;
              } else {
                throw $p_0;
              }
              tmp_7 = tmp_8;
            }
            var tmp$ret$18 = tmp_7;
            var tmp$ret$17 = new TypeInfo(tmp_5, tmp_6, tmp$ret$18);
            this_0.f4t(tmp$ret$17);
          }
        }
      } else {
        if (method.equals(Companion_getInstance_1().i48_1)) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = req.o57_1.l1();
          while (_iterator__ex2g4s.m1()) {
            var element = _iterator__ex2g4s.n1();
            if (element.a57_1.s1_1 === 0) {
              this_0.l4p_1.v4b_1.b3v(element.b57_1, ensureNotNull(element.c57_1));
            } else {
              throw IllegalStateException.o('Request Body is not supported in the GET method.');
            }
          }
        } else {
          // Inline function 'kotlin.collections.filter' call
          var tmp0_2 = req.o57_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination = ArrayList.k2();
          var _iterator__ex2g4s_0 = tmp0_2.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var element_0 = _iterator__ex2g4s_0.n1();
            if (element_0.a57_1.equals(Type_QUERY_getInstance())) {
              destination.j2(element_0);
            }
          }
          var queries = destination;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_3 = req.o57_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_0 = ArrayList.k2();
          var _iterator__ex2g4s_1 = tmp0_3.l1();
          while (_iterator__ex2g4s_1.m1()) {
            var element_1 = _iterator__ex2g4s_1.n1();
            if (element_1.a57_1.equals(Type_PARAM_getInstance())) {
              destination_0.j2(element_1);
            }
          }
          var params = destination_0;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_4 = req.o57_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_1 = ArrayList.k2();
          var _iterator__ex2g4s_2 = tmp0_4.l1();
          while (_iterator__ex2g4s_2.m1()) {
            var element_2 = _iterator__ex2g4s_2.n1();
            if (element_2.a57_1.equals(Type_FILE_getInstance())) {
              destination_1.j2(element_2);
            }
          }
          var files = destination_1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!queries.j1()) {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_3 = queries.l1();
            while (_iterator__ex2g4s_3.m1()) {
              var element_3 = _iterator__ex2g4s_3.n1();
              this_0.l4p_1.v4b_1.b3v(element_3.b57_1, ensureNotNull(element_3.c57_1));
            }
          }
          var tmp_9;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!params.j1()) {
            tmp_9 = true;
          } else {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_9 = !files.j1();
          }
          if (tmp_9) {
            if ($this.r57_1) {
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!files.j1()) {
                throw IllegalStateException.o('ApplicationFormUrlEncoded cannot send files.');
              }
              contentType(this_0, Application_getInstance().e41_1);
              // Inline function 'io.ktor.http.Companion.build' call
              Companion_getInstance_0();
              // Inline function 'kotlin.apply' call
              var this_1 = ParametersBuilder();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_4 = params.l1();
              while (_iterator__ex2g4s_4.m1()) {
                var element_4 = _iterator__ex2g4s_4.n1();
                this_1.b3v(element_4.b57_1, ensureNotNull(element_4.c57_1));
              }
              var tmp$ret$36 = this_1.l43();
              // Inline function 'io.ktor.client.request.setBody' call
              var body_0 = new FormDataContent(tmp$ret$36);
              if (body_0 == null) {
                this_0.o4p_1 = NullBody_instance;
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_10 = getKClass(FormDataContent);
                var tmp_11 = null instanceof FormDataContent;
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_12;
                try {
                  tmp_12 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                } catch ($p_1) {
                  var tmp_13;
                  if ($p_1 instanceof Error) {
                    var _unused_var__etf5q3_1 = $p_1;
                    tmp_13 = null;
                  } else {
                    throw $p_1;
                  }
                  tmp_12 = tmp_13;
                }
                var tmp$ret$43 = tmp_12;
                var tmp$ret$42 = new TypeInfo(tmp_10, tmp_11, tmp$ret$43);
                this_0.f4t(tmp$ret$42);
              } else {
                if (body_0 instanceof OutgoingContent) {
                  this_0.o4p_1 = body_0;
                  this_0.f4t(null);
                } else {
                  this_0.o4p_1 = body_0;
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_14 = getKClass(FormDataContent);
                  var tmp_15 = null instanceof FormDataContent;
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_16;
                  try {
                    tmp_16 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                  } catch ($p_2) {
                    var tmp_17;
                    if ($p_2 instanceof Error) {
                      var _unused_var__etf5q3_2 = $p_2;
                      tmp_17 = null;
                    } else {
                      throw $p_2;
                    }
                    tmp_16 = tmp_17;
                  }
                  var tmp$ret$45 = tmp_16;
                  var tmp$ret$44 = new TypeInfo(tmp_14, tmp_15, tmp$ret$45);
                  this_0.f4t(tmp$ret$44);
                }
              }
            } else {
              contentType(this_0, MultiPart_getInstance().h42_1);
              // Inline function 'io.ktor.client.request.forms.formData' call
              // Inline function 'kotlin.apply' call
              var this_2 = new FormBuilder();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_5 = params.l1();
              while (_iterator__ex2g4s_5.m1()) {
                var element_5 = _iterator__ex2g4s_5.n1();
                this_2.s53(element_5.b57_1, ensureNotNull(element_5.c57_1));
              }
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_6 = files.l1();
              while (_iterator__ex2g4s_6.m1()) {
                var element_6 = _iterator__ex2g4s_6.n1();
                var tmp_18 = ensureNotNull(element_6.e57_1);
                // Inline function 'io.ktor.http.Companion.build' call
                Companion_getInstance();
                // Inline function 'kotlin.apply' call
                var this_3 = new HeadersBuilder();
                append(this_3, 'Content-Type', element_6.g57());
                this_3.b3v('Content-Disposition', 'filename=' + element_6.d57_1);
                var tmp$ret$53 = this_3.l43();
                this_2.t53(element_6.b57_1, tmp_18, tmp$ret$53);
              }
              // Inline function 'kotlin.collections.toTypedArray' call
              var this_4 = this_2.u53();
              var tmp$ret$56 = copyToArray(this_4);
              var tmp$ret$46 = formData(tmp$ret$56.slice());
              // Inline function 'io.ktor.client.request.setBody' call
              var body_1 = new MultiPartFormDataContent(tmp$ret$46);
              if (body_1 == null) {
                this_0.o4p_1 = NullBody_instance;
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_19 = getKClass(MultiPartFormDataContent);
                var tmp_20 = null instanceof MultiPartFormDataContent;
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_21;
                try {
                  tmp_21 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                } catch ($p_3) {
                  var tmp_22;
                  if ($p_3 instanceof Error) {
                    var _unused_var__etf5q3_3 = $p_3;
                    tmp_22 = null;
                  } else {
                    throw $p_3;
                  }
                  tmp_21 = tmp_22;
                }
                var tmp$ret$59 = tmp_21;
                var tmp$ret$58 = new TypeInfo(tmp_19, tmp_20, tmp$ret$59);
                this_0.f4t(tmp$ret$58);
              } else {
                if (body_1 instanceof OutgoingContent) {
                  this_0.o4p_1 = body_1;
                  this_0.f4t(null);
                } else {
                  this_0.o4p_1 = body_1;
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_23 = getKClass(MultiPartFormDataContent);
                  var tmp_24 = null instanceof MultiPartFormDataContent;
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_25;
                  try {
                    tmp_25 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                  } catch ($p_4) {
                    var tmp_26;
                    if ($p_4 instanceof Error) {
                      var _unused_var__etf5q3_4 = $p_4;
                      tmp_26 = null;
                    } else {
                      throw $p_4;
                    }
                    tmp_25 = tmp_26;
                  }
                  var tmp$ret$61 = tmp_25;
                  var tmp$ret$60 = new TypeInfo(tmp_23, tmp_24, tmp$ret$61);
                  this_0.f4t(tmp$ret$60);
                }
              }
            }
          }
        }
      }
      // Inline function 'io.ktor.client.request.request' call
      var tmp$ret$8 = yield* (new HttpStatement(this_0, tmp0)).c55($completion);
      tmp$ret$0 = yield* tmp.y57(tmp$ret$8, $completion);
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
  if (param.a57_1.equals(Type_JSON_getInstance()))
    return true;
  var tmp0_subject = param.g57();
  return tmp0_subject.equals(Application_getInstance().t40_1) ? true : tmp0_subject.equals(Image_getInstance().v41_1) ? true : tmp0_subject.equals(Image_getInstance().x41_1) ? true : tmp0_subject.equals(Image_getInstance().s41_1) ? true : tmp0_subject.equals(Video_getInstance().z42_1) ? true : tmp0_subject.equals(Video_getInstance().a43_1) ? true : tmp0_subject.equals(Video_getInstance().c43_1) ? true : tmp0_subject.equals(ContentType.l40('video', 'webm')) ? true : false;
}
function HttpRequest$proceed$lambda($req) {
  return ($this$HttpClient) => {
    applySystemProxy($this$HttpClient);
    var tmp;
    if ($req.t57_1) {
      applySkipSSLValidation($this$HttpClient);
      tmp = Unit_instance;
    }
    $this$HttpClient.x4o_1 = $req.s57_1;
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_0($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.p57_1.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.c3();
      // Inline function 'kotlin.collections.component2' call
      var v = element.d3();
      $this$headers.b3v(k, v);
    }
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_1($req) {
  return ($this$timeout) => {
    $this$timeout.a4z($req.u57_1);
    $this$timeout.b4z($req.v57_1);
    $this$timeout.c4z($req.w57_1);
    return Unit_instance;
  };
}
function HttpResponse$Companion$mapper$lambda($this$Json) {
  $this$Json.n1p_1 = true;
  return Unit_instance;
}
var Companion_instance_0;
function Companion_getInstance_3() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function HttpResponse$stringBody$delegate$lambda(this$0) {
  return () => decodeToString(this$0.s58_1);
}
function HttpResponse$_get_stringBody_$ref_nmyr7m() {
  return constructCallableReference((p0) => p0.u58(), 1, 0, 40);
}
function applySystemProxy(_this__u8e3s4) {
  var proxyUrl = proxyUrlFromEnv();
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(proxyUrl == null || isBlank(proxyUrl))) {
    _this__u8e3s4.u4p(applySystemProxy$lambda(proxyUrl));
  }
}
function applySystemProxy$lambda($proxyUrl) {
  return ($this$engine) => {
    $this$engine.q4t_1 = ProxyBuilder_instance.v56(Url($proxyUrl));
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
  $this.j59_1 = CompletableDeferred();
  $this.k59_1 = false;
  var socket = new WebSocket(wsUrl);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  socket.binaryType = 'arraybuffer';
  $this.i59_1 = socket;
  socket.onopen = WebsocketRequest$start$lambda(opened, $this);
  socket.onclose = WebsocketRequest$start$lambda_0($this, opened);
  socket.onerror = WebsocketRequest$start$lambda_1($this, opened);
  socket.onmessage = WebsocketRequest$start$lambda_2($this);
  // Inline function 'kotlin.js.getCoroutineContext' call
  var tmp0_safe_receiver = $completion.od().ae(Key_instance);
  if (tmp0_safe_receiver == null)
    null;
  else {
    tmp0_safe_receiver.c29(WebsocketRequest$start$lambda_3($this));
  }
  yield* opened.a2c($completion);
  yield* $this.j59_1.a2c($completion);
  return $this;
}
function buildUrl($this) {
  var tmp0_safe_receiver = $this.z58_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var s = $this.v58_1 === 'ws' || $this.v58_1 === 'wss' ? $this.v58_1 : 'wss';
  var tmp0 = $this.w58_1;
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
  var tmp1_safe_receiver = $this.y58_1;
  var tmp;
  if (tmp1_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = ':' + tmp1_safe_receiver;
  }
  var tmp2_elvis_lhs = tmp;
  var p = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  var tmp3_safe_receiver = $this.x58_1;
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
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    return Unit_instance;
  }), 1);
}
function WebsocketRequest$bytesListener$slambda() {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    return Unit_instance;
  }), 1);
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
    $opened.h2f(Unit_instance);
    var tmp;
    try {
      this$0.f59_1(this$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        this$0.h59_1(RuntimeException.ve('onOpenListener failed', e));
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
    this$0.i59_1 = null;
    var tmp;
    if (!$opened.v28()) {
      $opened.i2f(RuntimeException.lb('WebSocket closed before open'));
      tmp = Unit_instance;
    }
    var tmp_0;
    if (!this$0.k59_1) {
      this$0.k59_1 = true;
      tmp_0 = this$0.g59_1(this$0);
    }
    return this$0.j59_1.h2f(Unit_instance);
  };
}
function WebsocketRequest$start$lambda_1(this$0, $opened) {
  return (_unused_var__etf5q3) => {
    var ex = RuntimeException.lb('WebSocket error');
    this$0.h59_1(ex);
    var tmp;
    if (!$opened.v28()) {
      $opened.i2f(ex);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function WebsocketRequest$start$lambda$slambda(this$0, $data) {
  return constructCallableReference(($this$launch, $completion) => orPromise($completion, function *($completion) {
    yield* $(this$0.d59_1($data, $completion), $completion);
    return Unit_instance;
  }), 1);
}
function WebsocketRequest$start$lambda$slambda_0(this$0, $bytes) {
  return constructCallableReference(($this$launch, $completion) => orPromise($completion, function *($completion) {
    yield* $(this$0.e59_1($bytes, $completion), $completion);
    return Unit_instance;
  }), 1);
}
function WebsocketRequest$start$lambda_2(this$0) {
  return (event) => {
    var data = event.data;
    var tmp;
    if (!(data == null) ? typeof data === 'string' : false) {
      launch(this$0.l59_1, VOID, VOID, WebsocketRequest$start$lambda$slambda(this$0, data));
      tmp = Unit_instance;
    } else {
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var bytes = new Int8Array(data);
        launch(this$0.l59_1, VOID, VOID, WebsocketRequest$start$lambda$slambda_0(this$0, bytes));
        tmp = Unit_instance;
      }
    }
    return Unit_instance;
  };
}
function WebsocketRequest$start$lambda_3(this$0) {
  return (it) => {
    var tmp0_safe_receiver = this$0.i59_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close();
    }
    cancel(this$0.l59_1);
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
  Companion_instance as Companion_instance1tih863w0hhd0,
  WebsocketRequest as WebsocketRequest38pjwt1m63ieg,
  HttpRequest as HttpRequest3gg7t5d9j2hk9,
  HttpResponse as HttpResponsexhe02ouh4cl4,
};
//endregion

//# sourceMappingURL=khttpclient.mjs.map
