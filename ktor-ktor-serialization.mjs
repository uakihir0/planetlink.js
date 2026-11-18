import {
  VOID3gxj6tk5isa35 as VOID,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Exceptiondt2hlxn7j7vw as Exception,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  $3l5vvh8yg0ier as $,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
} from './kotlin-kotlin-stdlib.mjs';
import {
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull1sz36fdcyca21 as firstOrNull,
  FlowCollector26clgpmzihvke as FlowCollector,
} from './kotlinx-coroutines-core.mjs';
import { NullBody_instance22vwyocs8eppk as NullBody_instance } from './ktor-ktor-http.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ContentConvertException extends Exception {
  constructor(message, cause) {
    return new.target.c4n(message, cause);
  }
  static c4n(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.ze(message, cause);
    captureStack($this, $this.b4n_1);
    return $this;
  }
}
class JsonConvertException extends ContentConvertException {
  constructor(message, cause) {
    return new.target.z4m(message, cause);
  }
  static z4m(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.c4n(message, cause);
    captureStack($this, $this.y4m_1);
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
    this.d4n(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.d4n.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.f4n_1 = function_0;
  }
  *w2p(value, $completion) {
    return yield* $(this.f4n_1(value, $completion), $completion);
  }
  d5() {
    return this.f4n_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.d5(), other.d5());
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
    return hashCode(this.d5());
  }
}
class deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $body) {
    this.h4n_1 = $this;
    this.i4n_1 = $charset;
    this.j4n_1 = $typeInfo;
    this.k4n_1 = $body;
  }
  *v2p(collector, $completion) {
    var tmp = deserialize$o$collect$slambda(collector, this.i4n_1, this.j4n_1, this.k4n_1);
    yield* this.h4n_1.t2p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
    return Unit_instance;
  }
  t2p(collector, $completion) {
    return this.v2p(collector, $completion);
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
  } else if (!body.e3p()) {
    tmp_0 = body;
  } else if (typeInfo.s3y_1) {
    tmp_0 = NullBody_instance;
  } else {
    throw ContentConvertException.c4n('No suitable converter found for ' + typeInfo.toString());
  }
  return tmp_0;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body) {
  return constructCallableReference((value, $completion) => orPromise($completion, function *($completion) {
    var tmp0 = $$this$unsafeFlow;
    var tmp$ret$1 = yield* value.g4n($charset, $typeInfo, $body, $completion);
    yield* tmp0.w2p(tmp$ret$1, $completion);
    return Unit_instance;
  }), 1);
}
function deserialize$slambda($body) {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    return !(it == null) || $body.e3p();
  }), 1);
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
  deserialize as deserialize3e6u4ptep3aeu,
  register$default as register$default2ko31hm484mcz,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization.mjs.map
