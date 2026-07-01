import {
  VOID3gxj6tk5isa35 as VOID,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Exceptiondt2hlxn7j7vw as Exception,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  constructCallableReference23y65rf941mch as constructCallableReference,
} from './kotlin-kotlin-stdlib.mjs';
import {
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull3msc896yik0f1 as firstOrNull,
  FlowCollector26clgpmzihvke as FlowCollector,
} from './kotlinx-coroutines-core.mjs';
import {
  NullBody_instanceyfq32eqie90j as NullBody_instance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
} from './ktor-ktor-http.mjs';
import {
  Charsets_getInstance3jooo7e4x0j2x as Charsets_getInstance,
  forName2faodmskqnoz5 as forName,
  isSupported2nf870ypy50et as isSupported,
} from './ktor-ktor-io.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ContentConvertException extends Exception {
  constructor(message, cause) {
    return new.target.q4g(message, cause);
  }
  static q4g(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.qe(message, cause);
    captureStack($this, $this.p4g_1);
    return $this;
  }
}
class JsonConvertException extends ContentConvertException {
  constructor(message, cause) {
    return new.target.n4g(message, cause);
  }
  static n4g(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.q4g(message, cause);
    captureStack($this, $this.m4g_1);
    return $this;
  }
}
class Configuration {}
function register$default(contentType, converter, configuration, $super) {
  var tmp;
  if (configuration === VOID) {
    tmp = Configuration$register$lambda;
  } else {
    tmp = configuration;
  }
  configuration = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.r4g(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.r4g.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.t4g_1 = function_0;
  }
  *h2m(value, $completion) {
    return yield* this.t4g_1(value, $completion);
  }
  c5() {
    return this.t4g_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.c5(), other.c5());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.c5());
  }
}
class deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $body) {
    this.v4g_1 = $this;
    this.w4g_1 = $charset;
    this.x4g_1 = $typeInfo;
    this.y4g_1 = $body;
  }
  *g2m(collector, $completion) {
    var tmp = deserialize$o$collect$slambda(collector, this.w4g_1, this.x4g_1, this.y4g_1);
    yield* this.v4g_1.e2m(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
    return Unit_instance;
  }
  e2m(collector, $completion) {
    return this.g2m(collector, $completion);
  }
}
//endregion
function *deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  // Inline function 'kotlinx.coroutines.flow.map' call
  // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
  var this_0 = asFlow(_this__u8e3s4);
  // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
  var tmp = new deserialize$$inlined$map$1(this_0, charset, typeInfo, body);
  var result = yield* firstOrNull(tmp, deserialize$slambda(body), $completion);
  var tmp_0;
  if (!(result == null)) {
    tmp_0 = result;
  } else {
    if (!body.c3j()) {
      tmp_0 = body;
    } else {
      var tmp0_safe_receiver = typeInfo.q3s_1;
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1()) === true) {
        tmp_0 = NullBody_instance;
      } else {
        throw ContentConvertException.q4g('No suitable converter found for ' + typeInfo.toString());
      }
    }
  }
  return tmp_0;
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().e3l_1 : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().e3l_1 : defaultCharset;
  var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.ui('Accept-Charset')).l1();
  while (_iterator__ex2g4s.m1()) {
    var charset = _iterator__ex2g4s.n1().sl();
    if (charset === '*')
      return defaultCharset;
    else if (isSupported(Charsets_getInstance(), charset))
      return forName(Charsets_getInstance(), charset);
  }
  return null;
}
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body) {
  return constructCallableReference(function *(value, $completion) {
    var $this$transform = $$this$unsafeFlow;
    var tmp$ret$1 = yield* value.u4g($charset, $typeInfo, $body, $completion);
    yield* $this$transform.h2m(tmp$ret$1, $completion);
    return Unit_instance;
  }, 1);
}
function deserialize$slambda($body) {
  return constructCallableReference(function *(it, $completion) {
    return !(it == null) || $body.c3j();
  }, 1);
}
//region block: post-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException');
initMetadataForClass(JsonConvertException, 'JsonConvertException');
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
//endregion
//region block: exports
export {
  deserialize as deserializedbfwk7upcilb,
  register$default as register$default1k5lce5zfzlxr,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization.mjs.map
