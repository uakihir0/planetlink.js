import {
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  ArrayList3it5z8td81qkl as ArrayList,
  joinToString1cxrrlmo0chqs as joinToString,
  PrimitiveClasses_getInstance13wbaztpz3e2d as PrimitiveClasses_getInstance,
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
  Default_getInstancee1f46otjvolq as Default_getInstance,
  add2suhfggl4zvkk as add,
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
  protoOf180f3jzyo7rfj as protoOf,
  RuntimeException1r3t0zl97011n as RuntimeException,
  captureStack1fzi4aczwc4hg as captureStack,
} from './kotlin-kotlin-stdlib.mjs';
import {
  flow3tazazxj2t7g4 as flow,
  delayp0o4nsccwai as delay,
} from './kotlinx-coroutines-core.mjs';
import {
  encodeURLParameter1u3y18ab0iker as encodeURLParameter,
  Application_getInstance3vhi2qmce4cj0 as Application_getInstance,
  Companion_getInstance29j9s2wnmk34z as Companion_getInstance,
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
  return $super === VOID ? this.al2(timeout, maxRetry) : $super.al2.call(this, timeout, maxRetry);
}
function syncStreamWithRequest(request, maxRetry, $super) {
  maxRetry = maxRetry === VOID ? 5 : maxRetry;
  return $super === VOID ? this.bl2(request, maxRetry) : $super.bl2.call(this, request, maxRetry);
}
class MatrixStreamFactory {
  f9c(uri, accessToken) {
    return new MatrixStreamImpl(uri, accessToken);
  }
  instance(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.f9c(uri, accessToken) : $super.f9c.call(this, uri, accessToken);
  }
}
class MatrixStreamImpl$defaultConfig$1 {
  constructor() {
    this.ol2_1 = 30000n;
    this.pl2_1 = 5;
    this.ql2_1 = 1000n;
    this.rl2_1 = 30000n;
    this.sl2_1 = true;
  }
  tl2(_set____db54di) {
    this.ol2_1 = _set____db54di;
  }
  ck4() {
    return this.ol2_1;
  }
  ul2(_set____db54di) {
    this.pl2_1 = _set____db54di;
  }
  ll2() {
    return this.pl2_1;
  }
  ml2() {
    return this.ql2_1;
  }
  nl2() {
    return this.rl2_1;
  }
  e7e() {
    return this.sl2_1;
  }
}
class MatrixStreamImpl$copy$1 {
  constructor(this$0) {
    this.gl2_1 = this$0.fl2_1.ol2_1;
    this.hl2_1 = this$0.fl2_1.pl2_1;
    this.il2_1 = this$0.fl2_1.ql2_1;
    this.jl2_1 = this$0.fl2_1.rl2_1;
    this.kl2_1 = this$0.fl2_1.sl2_1;
  }
  tl2(_set____db54di) {
    this.gl2_1 = _set____db54di;
  }
  ck4() {
    return this.gl2_1;
  }
  ul2(_set____db54di) {
    this.hl2_1 = _set____db54di;
  }
  ll2() {
    return this.hl2_1;
  }
  ml2() {
    return this.il2_1;
  }
  nl2() {
    return this.jl2_1;
  }
  e7e() {
    return this.kl2_1;
  }
}
class MatrixStreamImpl {
  constructor(uri, accessToken) {
    this.cl2_1 = uri;
    this.dl2_1 = accessToken;
    var tmp = this;
    tmp.el2_1 = Json(VOID, MatrixStreamImpl$json$lambda);
    var tmp_0 = this;
    tmp_0.fl2_1 = new MatrixStreamImpl$defaultConfig$1();
  }
  uri() {
    return this.cl2_1;
  }
  accessToken() {
    return this.dl2_1;
  }
  al2(timeout, maxRetry) {
    var config = copy(this, this.fl2_1);
    if (timeout == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      config.tl2(timeout);
    }
    // Inline function 'kotlin.let' call
    config.ul2(maxRetry);
    return syncStreamInternal(this, null, config);
  }
  bl2(request, maxRetry) {
    var config = copy(this, this.fl2_1);
    // Inline function 'kotlin.let' call
    config.ul2(maxRetry);
    return syncStreamInternal(this, request, config);
  }
}
class MatrixStreamException extends RuntimeException {
  constructor(message, cause) {
    return new.target.yl2(message, cause);
  }
  static yl2(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.ve(message, cause);
    captureStack($this, $this.xl2_1);
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
  var this_0 = LinkedHashMap.o5();
  if (!(since == null)) {
    this_0.u4('since', since);
  }
  if (timeout > 0n) {
    this_0.u4('timeout', timeout.toString());
  }
  var tmp1_safe_receiver = request == null ? null : request.filter;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.u4('filter', tmp1_safe_receiver);
  }
  var tmp3_safe_receiver = request == null ? null : request.fullState;
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.u4('full_state', tmp3_safe_receiver.toString());
  }
  var tmp5_safe_receiver = request == null ? null : request.setPresence;
  if (tmp5_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.u4('set_presence', tmp5_safe_receiver);
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
            header(this_1, 'Accept', Application_getInstance().t40_1.toString());
            // Inline function 'io.ktor.client.request.get' call
            this_1.m4p_1 = Companion_getInstance().i48_1;
            // Inline function 'io.ktor.client.request.request' call
            // Inline function 'io.ktor.client.call.body' call
            var tmp_0 = (yield* (new HttpStatement(this_1, tmp0)).c55($completion)).n4q();
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_1 = PrimitiveClasses_getInstance().yg();
            var tmp_2 = !(null == null) ? typeof null === 'string' : false;
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_3;
            try {
              tmp_3 = createKType(PrimitiveClasses_getInstance().yg(), arrayOf([]), false);
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
            var tmp$ret$28 = tmp_3;
            var tmp$ret$27 = new TypeInfo(tmp_1, tmp_2, tmp$ret$28);
            var tmp_5 = yield* tmp_0.m4q(tmp$ret$27, $completion);
            tmp$ret$17 = (!(tmp_5 == null) ? typeof tmp_5 === 'string' : false) ? tmp_5 : THROW_CCE();
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
        var this_2 = $this.el2_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_3 = this_2.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_4 = serializer(this_3, createKType(getKClass(SyncResponse), arrayOf([]), false));
        var tmp$ret$30 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
        return this_2.g11(tmp$ret$30, body);
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
  throw tmp0_elvis_lhs == null ? IOException.j27('Unknown error fetching sync') : tmp0_elvis_lhs;
}
function copy($this, $receiver) {
  // Inline function 'kotlin.apply' call
  var this_0 = new MatrixStreamImpl$copy$1($this);
  this_0.gl2_1 = $receiver.ck4();
  this_0.hl2_1 = $receiver.ll2();
  this_0.il2_1 = $receiver.ml2();
  this_0.jl2_1 = $receiver.nl2();
  this_0.kl2_1 = $receiver.e7e();
  return this_0;
}
function MatrixStreamImpl$json$lambda($this$Json) {
  $this$Json.n1p_1 = true;
  $this$Json.l1p_1 = true;
  return Unit_instance;
}
function MatrixStreamImpl$syncStreamInternal$slambda($request, $config, this$0) {
  return constructCallableReference(($this$flow, $completion) => orPromise($completion, function *($completion) {
    var tmp0_safe_receiver = $request;
    var since = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.since;
    var retryCount = 0;
    while ($config.e7e()) {
      try {
        var response = yield* /*#__NOINLINE__*/fetchSync(this$0, this$0.cl2_1, this$0.dl2_1, since, $request, $config.ck4(), $completion);
        since = response.nextBatch;
        retryCount = 0;
        yield* $this$flow.w2p(response, $completion);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          if (retryCount >= $config.ll2()) {
            throw MatrixStreamException.yl2('Max retry count reached: ' + retryCount, e);
          }
          var tmp0 = multiply($config.ml2(), shiftLeft(1n, retryCount));
          // Inline function 'kotlin.comparisons.minOf' call
          var b = $config.nl2();
          var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
          var backoff = add(tmp$ret$0, Default_getInstance().wr(1000n));
          yield* delay(backoff, $completion);
          retryCount = retryCount + 1 | 0;
        } else {
          throw $p;
        }
      }
    }
    return Unit_instance;
  }), 1);
}
function MatrixStreamImpl$fetchSync$lambda$lambda($timeout) {
  return ($this$install) => {
    $this$install.a4z(add($timeout, 5000n));
    return Unit_instance;
  };
}
function MatrixStreamImpl$fetchSync$lambda$lambda_0(this$0) {
  return ($this$install) => {
    json($this$install, this$0.el2_1);
    return Unit_instance;
  };
}
function MatrixStreamImpl$fetchSync$lambda($timeout, this$0) {
  return ($this$HttpClient) => {
    var tmp = get_HttpTimeout();
    $this$HttpClient.v4p(tmp, MatrixStreamImpl$fetchSync$lambda$lambda($timeout));
    var tmp_0 = get_ContentNegotiation();
    $this$HttpClient.v4p(tmp_0, MatrixStreamImpl$fetchSync$lambda$lambda_0(this$0));
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
MatrixStreamFactory.getInstance = MatrixStreamFactory_getInstance;
export {
  MatrixStream as MatrixStream,
  MatrixStreamFactory as MatrixStreamFactory,
  MatrixStreamImpl as MatrixStreamImpl,
};
export {
  MatrixStreamFactory_instance as MatrixStreamFactory_instance2xjsc51m3shti,
};
//endregion

//# sourceMappingURL=kmatrix-stream.mjs.map
