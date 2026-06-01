import {
  VOID3gxj6tk5isa35 as VOID,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Exceptiondt2hlxn7j7vw as Exception,
  Unit_instancev9v8hjid95df as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
} from './kotlin-kotlin-stdlib.mjs';
import {
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull2dvwxt5rv9o9g as firstOrNull,
  FlowCollector26clgpmzihvke as FlowCollector,
} from './kotlinx-coroutines-core.mjs';
import {
  NullBody_instance3jaj4elqoxne0 as NullBody_instance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
} from './ktor-ktor-http.mjs';
import {
  Charsets_getInstanceqkyjyusuh1b0 as Charsets_getInstance,
  forName2faodmskqnoz5 as forName,
  isSupported2nf870ypy50et as isSupported,
} from './ktor-ktor-io.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ContentConvertException extends Exception {
  static k4g(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.ie(message, cause);
    captureStack($this, $this.j4g_1);
    return $this;
  }
}
class JsonConvertException extends ContentConvertException {
  static h4g(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.k4g(message, cause);
    captureStack($this, $this.g4g_1);
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
    this.l4g(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.l4g.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.n4g_1 = function_0;
  }
  *e2i(value, $completion) {
    return yield* this.n4g_1(value, $completion);
  }
  w4() {
    return this.n4g_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w4(), other.w4());
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
    return hashCode(this.w4());
  }
}
class deserialize$o$collect$slambda {
  constructor($$this$unsafeFlow, $charset, $typeInfo, $body) {
    this.o4g_1 = $$this$unsafeFlow;
    this.p4g_1 = $charset;
    this.q4g_1 = $typeInfo;
    this.r4g_1 = $body;
  }
  *s4g(value, $completion) {
    var $this$transform = this.o4g_1;
    var tmp$ret$1 = yield* value.t4g(this.p4g_1, this.q4g_1, this.r4g_1, $completion);
    yield* $this$transform.e2i(tmp$ret$1, $completion);
    return Unit_instance;
  }
  wd(p1, $completion) {
    return this.s4g(p1, $completion);
  }
}
class deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $body) {
    this.u4g_1 = $this;
    this.v4g_1 = $charset;
    this.w4g_1 = $typeInfo;
    this.x4g_1 = $body;
  }
  *d2i(collector, $completion) {
    var tmp = deserialize$o$collect$slambda_0(collector, this.v4g_1, this.w4g_1, this.x4g_1);
    yield* this.u4g_1.b2i(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
    return Unit_instance;
  }
  b2i(collector, $completion) {
    return this.d2i(collector, $completion);
  }
}
class deserialize$slambda {
  constructor($body) {
    this.y4g_1 = $body;
  }
  *z4g(it, $completion) {
    return !(it == null) || this.y4g_1.m3h();
  }
  wd(p1, $completion) {
    return this.z4g(p1, $completion);
  }
}
//endregion
function *deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  // Inline function 'kotlinx.coroutines.flow.map' call
  // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
  var this_0 = asFlow(_this__u8e3s4);
  // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
  var tmp = new deserialize$$inlined$map$1(this_0, charset, typeInfo, body);
  var result = yield* firstOrNull(tmp, deserialize$slambda_0(body), $completion);
  var tmp_0;
  if (!(result == null)) {
    tmp_0 = result;
  } else {
    if (!body.m3h()) {
      tmp_0 = body;
    } else {
      var tmp0_safe_receiver = typeInfo.e3r_1;
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1()) === true) {
        tmp_0 = NullBody_instance;
      } else {
        throw ContentConvertException.k4g('No suitable converter found for ' + typeInfo.toString());
      }
    }
  }
  return tmp_0;
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().s3j_1 : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().s3j_1 : defaultCharset;
  var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.pi('Accept-Charset')).l1();
  while (_iterator__ex2g4s.m1()) {
    var charset = _iterator__ex2g4s.n1().nl();
    if (charset === '*')
      return defaultCharset;
    else if (isSupported(Charsets_getInstance(), charset))
      return forName(Charsets_getInstance(), charset);
  }
  return null;
}
function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body) {
  var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body);
  var l = (value, $completion) => i.s4g(value, $completion);
  l.$arity = 1;
  return l;
}
function deserialize$slambda_0($body) {
  var i = new deserialize$slambda($body);
  var l = (it, $completion) => i.z4g(it, $completion);
  l.$arity = 1;
  return l;
}
//region block: post-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException');
initMetadataForClass(JsonConvertException, 'JsonConvertException');
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForLambda(deserialize$o$collect$slambda, VOID, VOID, [1]);
initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(deserialize$slambda, VOID, VOID, [1]);
//endregion
//region block: exports
export {
  deserialize as deserialize3m9mw3rgwyyjs,
  register$default as register$default3nfw6tn7zx41g,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization.mjs.map
