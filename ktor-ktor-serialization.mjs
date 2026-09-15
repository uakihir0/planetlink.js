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
import { NullBody_instanceyfq32eqie90j as NullBody_instance } from './ktor-ktor-http.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ContentConvertException extends Exception {
  constructor(message, cause) {
    return new.target.i4k(message, cause);
  }
  static i4k(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.ye(message, cause);
    captureStack($this, $this.h4k_1);
    return $this;
  }
}
class JsonConvertException extends ContentConvertException {
  constructor(message, cause) {
    return new.target.f4k(message, cause);
  }
  static f4k(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.i4k(message, cause);
    captureStack($this, $this.e4k_1);
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
    this.j4k(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.j4k.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.l4k_1 = function_0;
  }
  *n2n(value, $completion) {
    return yield* this.l4k_1(value, $completion);
  }
  c5() {
    return this.l4k_1;
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
    this.n4k_1 = $this;
    this.o4k_1 = $charset;
    this.p4k_1 = $typeInfo;
    this.q4k_1 = $body;
  }
  *m2n(collector, $completion) {
    var tmp = deserialize$o$collect$slambda(collector, this.o4k_1, this.p4k_1, this.q4k_1);
    yield* this.n4k_1.k2n(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
    return Unit_instance;
  }
  k2n(collector, $completion) {
    return this.m2n(collector, $completion);
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
    if (!body.v3m()) {
      tmp_0 = body;
    } else {
      var tmp0_safe_receiver = typeInfo.i3w_1;
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1()) === true) {
        tmp_0 = NullBody_instance;
      } else {
        throw ContentConvertException.i4k('No suitable converter found for ' + typeInfo.toString());
      }
    }
  }
  return tmp_0;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body) {
  return constructCallableReference(function *(value, $completion) {
    var $this$transform = $$this$unsafeFlow;
    var tmp$ret$1 = yield* value.m4k($charset, $typeInfo, $body, $completion);
    yield* $this$transform.n2n(tmp$ret$1, $completion);
    return Unit_instance;
  }, 1);
}
function deserialize$slambda($body) {
  return constructCallableReference(function *(it, $completion) {
    return !(it == null) || $body.v3m();
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
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization.mjs.map
