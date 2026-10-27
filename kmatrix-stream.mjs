import {
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  ArrayList3it5z8td81qkl as ArrayList,
  joinToString1cxrrlmo0chqs as joinToString,
  PrimitiveClasses_getInstance143761yrsca9q as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  closeFinally1sadm0w9gt3u4 as closeFinally,
  getKClass3t8tygqu4lcxf as getKClass,
  isInterface3d6p8outrmvmk as isInterface,
  fromInt2ii0rejb1w62w as fromInt,
  multiply2k9eolhnz1bjv as multiply,
  Exceptiondt2hlxn7j7vw as Exception,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  shiftLeft3tsh2sstjchzn as shiftLeft,
  Default_getInstance3u7accvuecmtb as Default_getInstance,
  add2suhfggl4zvkk as add,
  constructCallableReference23y65rf941mch as constructCallableReference,
  protoOf180f3jzyo7rfj as protoOf,
  RuntimeException1r3t0zl97011n as RuntimeException,
  captureStack1fzi4aczwc4hg as captureStack,
} from './kotlin-kotlin-stdlib.mjs';
import {
  flow3tazazxj2t7g4 as flow,
  delay3e2ei0hoxjoud as delay,
} from './kotlinx-coroutines-core.mjs';
import {
  encodeURLParameter1u3y18ab0iker as encodeURLParameter,
  Application_getInstance17ubdrb0i0ohu as Application_getInstance,
  Companion_getInstance1pptfj8vjmgsz as Companion_getInstance,
} from './ktor-ktor-http.mjs';
import {
  HttpClient3584jcajl7sef as HttpClient,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  url2l6iw5ri21nxb as url,
  header3kx6g3yb4df1r as header,
  HttpStatement3zxb33q8lku as HttpStatement,
  get_HttpTimeout3mcrbvfnvmyx2 as get_HttpTimeout,
} from './ktor-ktor-client-core.mjs';
import { TypeInfo2nbxsuf4v8os2 as TypeInfo } from './ktor-ktor-utils.mjs';
import { SyncResponse9w6o34sib0b5 as SyncResponse } from './kmatrix-core.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { IOException1wyutdmfe71nu as IOException } from './kotlinx-io-kotlinx-io-core.mjs';
import { jsonu6qnfo3b405p as json } from './ktor-ktor-serialization-kotlinx-json.mjs';
import { get_ContentNegotiationcp59ye9rorjc as get_ContentNegotiation } from './ktor-ktor-client-content-negotiation.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class MatrixStream {}
function syncStreamWithTimeout(timeout, maxRetry, $super) {
  timeout = timeout === VOID ? 30000n : timeout;
  maxRetry = maxRetry === VOID ? 5 : maxRetry;
  return $super === VOID ? this.hkv(timeout, maxRetry) : $super.hkv.call(this, timeout, maxRetry);
}
function syncStreamWithRequest(request, maxRetry, $super) {
  maxRetry = maxRetry === VOID ? 5 : maxRetry;
  return $super === VOID ? this.ikv(request, maxRetry) : $super.ikv.call(this, request, maxRetry);
}
class MatrixStreamFactory {
  u95(uri, accessToken) {
    return new MatrixStreamImpl(uri, accessToken);
  }
  instance(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.u95(uri, accessToken) : $super.u95.call(this, uri, accessToken);
  }
}
class MatrixStreamImpl$defaultConfig$1 {
  constructor() {
    this.vkv_1 = 30000n;
    this.wkv_1 = 5;
    this.xkv_1 = 1000n;
    this.ykv_1 = 30000n;
    this.zkv_1 = true;
  }
  akw(_set____db54di) {
    this.vkv_1 = _set____db54di;
  }
  ujx() {
    return this.vkv_1;
  }
  bkw(_set____db54di) {
    this.wkv_1 = _set____db54di;
  }
  skv() {
    return this.wkv_1;
  }
  tkv() {
    return this.xkv_1;
  }
  ukv() {
    return this.ykv_1;
  }
  p78() {
    return this.zkv_1;
  }
}
class MatrixStreamImpl$copy$1 {
  constructor(this$0) {
    this.nkv_1 = this$0.mkv_1.vkv_1;
    this.okv_1 = this$0.mkv_1.wkv_1;
    this.pkv_1 = this$0.mkv_1.xkv_1;
    this.qkv_1 = this$0.mkv_1.ykv_1;
    this.rkv_1 = this$0.mkv_1.zkv_1;
  }
  akw(_set____db54di) {
    this.nkv_1 = _set____db54di;
  }
  ujx() {
    return this.nkv_1;
  }
  bkw(_set____db54di) {
    this.okv_1 = _set____db54di;
  }
  skv() {
    return this.okv_1;
  }
  tkv() {
    return this.pkv_1;
  }
  ukv() {
    return this.qkv_1;
  }
  p78() {
    return this.rkv_1;
  }
}
class MatrixStreamImpl {
  constructor(uri, accessToken) {
    this.jkv_1 = uri;
    this.kkv_1 = accessToken;
    var tmp = this;
    tmp.lkv_1 = Json(VOID, MatrixStreamImpl$json$lambda);
    var tmp_0 = this;
    tmp_0.mkv_1 = new MatrixStreamImpl$defaultConfig$1();
  }
  uri() {
    return this.jkv_1;
  }
  accessToken() {
    return this.kkv_1;
  }
  hkv(timeout, maxRetry) {
    var config = copy(this, this.mkv_1);
    if (timeout == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      config.akw(timeout);
    }
    // Inline function 'kotlin.let' call
    config.bkw(maxRetry);
    return syncStreamInternal(this, null, config);
  }
  ikv(request, maxRetry) {
    var config = copy(this, this.mkv_1);
    // Inline function 'kotlin.let' call
    config.bkw(maxRetry);
    return syncStreamInternal(this, request, config);
  }
}
class MatrixStreamException extends RuntimeException {
  constructor(message, cause) {
    return new.target.fkw(message, cause);
  }
  static fkw(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.se(message, cause);
    captureStack($this, $this.ekw_1);
    return $this;
  }
}
//endregion
var MatrixStreamFactory_instance;
function MatrixStreamFactory_getInstance() {
  return MatrixStreamFactory_instance;
}
function syncStreamInternal($this, request, config) {
  return flow(MatrixStreamImpl$syncStreamInternal$slambda(request, config, $this));
}
function *fetchSync($this, uri, accessToken, since, request, timeout, $completion) {
  // Inline function 'kotlin.collections.buildMap' call
  // Inline function 'kotlin.collections.buildMapInternal' call
  // Inline function 'kotlin.apply' call
  var this_0 = LinkedHashMap.r5();
  if (!(since == null)) {
    this_0.o4('since', since);
  }
  if (timeout > 0n) {
    this_0.o4('timeout', timeout.toString());
  }
  var tmp1_safe_receiver = request == null ? null : request.filter;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.o4('filter', tmp1_safe_receiver);
  }
  var tmp3_safe_receiver = request == null ? null : request.fullState;
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.o4('full_state', tmp3_safe_receiver.toString());
  }
  var tmp5_safe_receiver = request == null ? null : request.setPresence;
  if (tmp5_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.o4('set_presence', tmp5_safe_receiver);
  }
  var queryParams = this_0.g5();
  var tmp;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!queryParams.j1()) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.i2(queryParams.l2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = queryParams.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$14 = item.c3() + '=' + encodeURLParameter(item.d3());
      destination.j2(tmp$ret$14);
    }
    var params = joinToString(destination, '&');
    tmp = uri + '/_matrix/client/v3/sync?' + params;
  } else {
    tmp = uri + '/_matrix/client/v3/sync?timeout=' + timeout.toString();
  }
  var url_0 = tmp;
  var lastException = null;
  // Inline function 'kotlin.repeat' call
  var inductionVariable = 0;
  if (inductionVariable < 3)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      try {
        var tmp0 = HttpClient(MatrixStreamImpl$fetchSync$lambda(timeout, $this));
        var tmp$ret$17;
        $l$block: {
          // Inline function 'kotlin.use' call
          var exception = null;
          try {
            // Inline function 'io.ktor.client.request.get' call
            // Inline function 'io.ktor.client.request.get' call
            // Inline function 'kotlin.apply' call
            var this_1 = new HttpRequestBuilder();
            url(this_1, url_0);
            header(this_1, 'Authorization', 'Bearer ' + accessToken);
            header(this_1, 'Accept', Application_getInstance().d3y_1.toString());
            // Inline function 'io.ktor.client.request.get' call
            this_1.u4m_1 = Companion_getInstance().r45_1;
            // Inline function 'io.ktor.client.request.request' call
            // Inline function 'io.ktor.client.call.body' call
            var tmp_0 = (yield* (new HttpStatement(this_1, tmp0)).k52($completion)).s4n();
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_1 = PrimitiveClasses_getInstance().xg();
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_2;
            try {
              tmp_2 = createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), false);
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
            var tmp$ret$28 = tmp_2;
            var tmp$ret$27 = new TypeInfo(tmp_1, tmp$ret$28);
            var tmp_4 = yield* tmp_0.p4n(tmp$ret$27, $completion);
            tmp$ret$17 = (!(tmp_4 == null) ? typeof tmp_4 === 'string' : false) ? tmp_4 : THROW_CCE();
            break $l$block;
          } catch ($p_0) {
            if ($p_0 instanceof Error) {
              var e = $p_0;
              exception = e;
              throw e;
            } else {
              throw $p_0;
            }
          }
          finally {
            closeFinally(tmp0, exception);
          }
        }
        var body = tmp$ret$17;
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_2 = $this.lkv_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_3 = this_2.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_4 = serializer(this_3, createKType(getKClass(SyncResponse), arrayOf([]), false));
        var tmp$ret$30 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
        return this_2.w10(tmp$ret$30, body);
      } catch ($p_1) {
        if ($p_1 instanceof Exception) {
          var e_0 = $p_1;
          lastException = e_0;
          if (e_0 instanceof IOException) {
            // Inline function 'kotlin.Long.times' call
            var other = index + 1 | 0;
            var tmp$ret$32 = multiply(1000n, fromInt(other));
            yield* delay(tmp$ret$32, $completion);
          } else {
            throw e_0;
          }
        } else {
          throw $p_1;
        }
      }
    }
     while (inductionVariable < 3);
  var tmp0_elvis_lhs = lastException;
  throw tmp0_elvis_lhs == null ? IOException.e25('Unknown error fetching sync') : tmp0_elvis_lhs;
}
function copy($this, $receiver) {
  // Inline function 'kotlin.apply' call
  var this_0 = new MatrixStreamImpl$copy$1($this);
  this_0.nkv_1 = $receiver.ujx();
  this_0.okv_1 = $receiver.skv();
  this_0.pkv_1 = $receiver.tkv();
  this_0.qkv_1 = $receiver.ukv();
  this_0.rkv_1 = $receiver.p78();
  return this_0;
}
function MatrixStreamImpl$json$lambda($this$Json) {
  $this$Json.p1n_1 = true;
  $this$Json.n1n_1 = true;
  return Unit_instance;
}
function MatrixStreamImpl$syncStreamInternal$slambda($request, $config, this$0) {
  return constructCallableReference(function *($this$flow, $completion) {
    var tmp0_safe_receiver = $request;
    var since = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.since;
    var retryCount = 0;
    while ($config.p78()) {
      try {
        var response = yield* /*#__NOINLINE__*/fetchSync(this$0, this$0.jkv_1, this$0.kkv_1, since, $request, $config.ujx(), $completion);
        since = response.nextBatch;
        retryCount = 0;
        yield* $this$flow.r2n(response, $completion);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          if (retryCount >= $config.skv()) {
            throw MatrixStreamException.fkw('Max retry count reached: ' + retryCount, e);
          }
          var tmp0 = multiply($config.tkv(), shiftLeft(1n, retryCount));
          // Inline function 'kotlin.comparisons.minOf' call
          var b = $config.ukv();
          var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
          var backoff = add(tmp$ret$0, Default_getInstance().or(1000n));
          yield* delay(backoff, $completion);
          retryCount = retryCount + 1 | 0;
        } else {
          throw $p;
        }
      }
    }
    return Unit_instance;
  }, 1);
}
function MatrixStreamImpl$fetchSync$lambda$lambda($timeout) {
  return ($this$install) => {
    $this$install.i4w(add($timeout, 5000n));
    return Unit_instance;
  };
}
function MatrixStreamImpl$fetchSync$lambda$lambda_0(this$0) {
  return ($this$install) => {
    json($this$install, this$0.lkv_1);
    return Unit_instance;
  };
}
function MatrixStreamImpl$fetchSync$lambda($timeout, this$0) {
  return ($this$HttpClient) => {
    var tmp = get_HttpTimeout();
    $this$HttpClient.d4n(tmp, MatrixStreamImpl$fetchSync$lambda$lambda($timeout));
    var tmp_0 = get_ContentNegotiation();
    $this$HttpClient.d4n(tmp_0, MatrixStreamImpl$fetchSync$lambda$lambda_0(this$0));
    return Unit_instance;
  };
}
//region block: post-declaration
initMetadataForInterface(MatrixStream, 'MatrixStream');
initMetadataForObject(MatrixStreamFactory, 'MatrixStreamFactory');
initMetadataForClass(MatrixStreamImpl$defaultConfig$1);
initMetadataForClass(MatrixStreamImpl$copy$1);
protoOf(MatrixStreamImpl).syncStreamWithTimeout = syncStreamWithTimeout;
protoOf(MatrixStreamImpl).syncStreamWithRequest = syncStreamWithRequest;
initMetadataForClass(MatrixStreamImpl, 'MatrixStreamImpl', VOID, VOID, [MatrixStream], [5]);
initMetadataForClass(MatrixStreamException, 'MatrixStreamException');
//endregion
//region block: init
MatrixStreamFactory_instance = new MatrixStreamFactory();
//endregion
//region block: exports
var MatrixStreamFactory_0 = {getInstance: MatrixStreamFactory_getInstance};
export {
  MatrixStream as MatrixStream,
  MatrixStreamFactory_0 as MatrixStreamFactory,
  MatrixStreamImpl as MatrixStreamImpl,
};
export {
  MatrixStreamFactory_instance as MatrixStreamFactory_instance3c7ri61dpc3l3,
};
//endregion

//# sourceMappingURL=kmatrix-stream.mjs.map
