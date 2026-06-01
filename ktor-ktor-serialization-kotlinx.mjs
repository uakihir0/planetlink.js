import {
  ArrayList3it5z8td81qkl as ArrayList,
  Unit_instancev9v8hjid95df as Unit_instance,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID3gxj6tk5isa35 as VOID,
  toString1pkumu07cwy4m as toString,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  KtMap140uvy3s5zad8 as KtMap,
  KtSetjrjc7fhfd6b9 as KtSet,
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  StringCompanionObject_instance1v0ht40fz3tq0 as StringCompanionObject_instance,
  isArray1hxjqtqy632bc as isArray,
  KtList3hktaavzmj137 as KtList,
  Exceptiondt2hlxn7j7vw as Exception,
  joinToString1cxrrlmo0chqs as joinToString,
  to2cs3ny02qtbcb as to,
  filterNotNull3qfgcwmxhwfxe as filterNotNull,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  HashSet2dzve9y63nf0v as HashSet,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Collection1k04j3hzsbod0 as Collection,
  KClass1cc9rfeybg8hs as KClass,
  emptyList1g2z5xcrvp2zy as emptyList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  KSerializerzf77vz1967fq as KSerializer,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  serializerOrNull31x2b6nu6gruj as serializerOrNull,
  serializer1rka18p0rjk4x as serializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  serializer1x79l67jvwntn as serializer_0,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_nullable197rfua9r7fsz as get_nullable,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  withCharsetIfNeeded3sz33ys0x9vfx as withCharsetIfNeeded,
  TextContent1rb6ftlpvl1d2 as TextContent,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull2dvwxt5rv9o9g as firstOrNull_0,
} from './kotlinx-coroutines-core.mjs';
import {
  readRemaining1u8soafhjma7y as readRemaining,
  discard3ugntd47xyll6 as discard,
  readText27783kyxjxi1g as readText,
} from './ktor-ktor-io.mjs';
import { readByteArray1ri21h2rciakw as readByteArray } from './kotlinx-io-kotlinx-io-core.mjs';
import { JsonConvertExceptiongnc5x6xwaf77 as JsonConvertException } from './ktor-ktor-serialization.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class KotlinxSerializationConverter$serialize$o$collect$slambda {
  constructor($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value) {
    this.nmg_1 = $$this$unsafeFlow;
    this.omg_1 = $contentType;
    this.pmg_1 = $charset;
    this.qmg_1 = $typeInfo;
    this.rmg_1 = $value;
  }
  *s4g(value, $completion) {
    var $this$transform = this.nmg_1;
    var tmp$ret$1 = yield* value.emg(this.omg_1, this.pmg_1, this.qmg_1, this.rmg_1, $completion);
    yield* $this$transform.e2i(tmp$ret$1, $completion);
    return Unit_instance;
  }
  wd(p1, $completion) {
    return this.s4g(p1, $completion);
  }
}
class KotlinxSerializationConverter$deserialize$o$collect$slambda {
  constructor($$this$unsafeFlow, $charset, $typeInfo, $content) {
    this.smg_1 = $$this$unsafeFlow;
    this.tmg_1 = $charset;
    this.umg_1 = $typeInfo;
    this.vmg_1 = $content;
  }
  *s4g(value, $completion) {
    var $this$transform = this.smg_1;
    var tmp$ret$1 = yield* value.t4g(this.tmg_1, this.umg_1, this.vmg_1, $completion);
    yield* $this$transform.e2i(tmp$ret$1, $completion);
    return Unit_instance;
  }
  wd(p1, $completion) {
    return this.s4g(p1, $completion);
  }
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.wmg_1 = function_0;
  }
  *e2i(value, $completion) {
    return yield* this.wmg_1(value, $completion);
  }
  w4() {
    return this.wmg_1;
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
class sam$kotlinx_coroutines_flow_FlowCollector$0_0 {
  constructor(function_0) {
    this.xmg_1 = function_0;
  }
  *e2i(value, $completion) {
    return yield* this.xmg_1(value, $completion);
  }
  w4() {
    return this.xmg_1;
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
class KotlinxSerializationConverter$serialize$$inlined$map$1 {
  constructor($this, $contentType, $charset, $typeInfo, $value) {
    this.ymg_1 = $this;
    this.zmg_1 = $contentType;
    this.amh_1 = $charset;
    this.bmh_1 = $typeInfo;
    this.cmh_1 = $value;
  }
  *d2i(collector, $completion) {
    var tmp = KotlinxSerializationConverter$serialize$o$collect$slambda_0(collector, this.zmg_1, this.amh_1, this.bmh_1, this.cmh_1);
    yield* this.ymg_1.b2i(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
    return Unit_instance;
  }
  b2i(collector, $completion) {
    return this.d2i(collector, $completion);
  }
}
class KotlinxSerializationConverter$serialize$slambda {
  *dmh(it, $completion) {
    return !(it == null);
  }
  wd(p1, $completion) {
    return this.dmh((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  }
}
class KotlinxSerializationConverter$deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $content) {
    this.emh_1 = $this;
    this.fmh_1 = $charset;
    this.gmh_1 = $typeInfo;
    this.hmh_1 = $content;
  }
  *d2i(collector, $completion) {
    var tmp = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(collector, this.fmh_1, this.gmh_1, this.hmh_1);
    yield* this.emh_1.b2i(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp), $completion);
    return Unit_instance;
  }
  b2i(collector, $completion) {
    return this.d2i(collector, $completion);
  }
}
class KotlinxSerializationConverter$deserialize$slambda {
  constructor($content) {
    this.imh_1 = $content;
  }
  *z4g(it, $completion) {
    return !(it == null) || this.imh_1.m3h();
  }
  wd(p1, $completion) {
    return this.z4g(p1, $completion);
  }
}
class KotlinxSerializationConverter {
  constructor(format) {
    this.jmh_1 = format;
    this.kmh_1 = extensions(this.jmh_1);
    var tmp;
    var tmp_0 = this.jmh_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.jmh_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Only binary and string formats are supported, ' + toString(this.jmh_1) + ' is not supported.';
      throw IllegalArgumentException.a2(toString(message));
    }
  }
  *lmh(contentType, charset, typeInfo, value, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = asFlow(this.kmh_1);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp = new KotlinxSerializationConverter$serialize$$inlined$map$1(this_0, contentType, charset, typeInfo, value);
    var fromExtension = yield* firstOrNull_0(tmp, KotlinxSerializationConverter$serialize$slambda_0(), $completion);
    if (!(fromExtension == null))
      return fromExtension;
    var tmp_0;
    try {
      tmp_0 = serializerForTypeInfo(this.jmh_1.ny(), typeInfo);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof SerializationException) {
        var cause = $p;
        tmp_1 = guessSerializer(value, this.jmh_1.ny());
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var serializer = tmp_0;
    return serializeContent(this, serializer, this.jmh_1, value, contentType, charset);
  }
  emg(contentType, charset, typeInfo, value, $completion) {
    return this.lmh(contentType, charset, typeInfo, value, $completion);
  }
  *t4g(charset, typeInfo, content, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = asFlow(this.kmh_1);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp = new KotlinxSerializationConverter$deserialize$$inlined$map$1(this_0, charset, typeInfo, content);
    var fromExtension = yield* firstOrNull_0(tmp, KotlinxSerializationConverter$deserialize$slambda_0(content), $completion);
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.kmh_1.j1()) {
      tmp_0 = !(fromExtension == null) || content.m3h();
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return fromExtension;
    var serializer = serializerForTypeInfo(this.jmh_1.ny(), typeInfo);
    var contentPacket = yield* readRemaining(content, $completion);
    try {
      var tmp0_subject = this.jmh_1;
      var tmp_1;
      if (isInterface(tmp0_subject, StringFormat)) {
        tmp_1 = this.jmh_1.oz(serializer, readText(contentPacket, charset));
      } else {
        if (isInterface(tmp0_subject, BinaryFormat)) {
          tmp_1 = this.jmh_1.qz(serializer, readByteArray(contentPacket));
        } else {
          discard(contentPacket);
          // Inline function 'kotlin.error' call
          var message = 'Unsupported format ' + toString(this.jmh_1);
          throw IllegalStateException.o(toString(message));
        }
      }
      return tmp_1;
    } catch ($p) {
      if ($p instanceof Error) {
        var cause = $p;
        throw JsonConvertException.h4g('Illegal input: ' + cause.message, cause);
      } else {
        throw $p;
      }
    }
  }
}
//endregion
function extensions(format) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = get_providers();
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList.o2();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var tmp0_safe_receiver = element.mmg(format);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.e2(tmp0_safe_receiver);
    }
  }
  return destination;
}
function serialization(_this__u8e3s4, contentType, format) {
  _this__u8e3s4.m4g(contentType, new KotlinxSerializationConverter(format));
}
function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value);
  var l = (value, $completion) => i.s4g(value, $completion);
  l.$arity = 1;
  return l;
}
function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content);
  var l = (value, $completion) => i.s4g(value, $completion);
  l.$arity = 1;
  return l;
}
function serializeContent($this, serializer, format, value, contentType, charset) {
  var tmp;
  if (isInterface(format, StringFormat)) {
    var content = format.nz(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
    tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
  } else {
    if (isInterface(format, BinaryFormat)) {
      var content_0 = format.pz(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new ByteArrayContent(content_0, contentType);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Unsupported format ' + toString(format);
      throw IllegalStateException.o(toString(message));
    }
  }
  return tmp;
}
function KotlinxSerializationConverter$serialize$slambda_0() {
  var i = new KotlinxSerializationConverter$serialize$slambda();
  var l = (it, $completion) => i.dmh(it, $completion);
  l.$arity = 1;
  return l;
}
function KotlinxSerializationConverter$deserialize$slambda_0($content) {
  var i = new KotlinxSerializationConverter$deserialize$slambda($content);
  var l = (it, $completion) => i.z4g(it, $completion);
  l.$arity = 1;
  return l;
}
function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
  var module_0 = _this__u8e3s4;
  var tmp0_safe_receiver = typeInfo.e3r_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    var tmp_0;
    if (tmp0_safe_receiver.b1().j1()) {
      tmp_0 = null;
    } else {
      var tmp0_elvis_lhs = serializerOrNull(module_0, tmp0_safe_receiver);
      tmp_0 = tmp0_elvis_lhs == null ? checkTypeParameters(tmp0_safe_receiver, typeInfo, module_0) : tmp0_elvis_lhs;
    }
    tmp = tmp_0;
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_1;
  if (tmp1_elvis_lhs == null) {
    var tmp2_safe_receiver = module_0.t10(typeInfo.d3r_1);
    tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
  } else {
    tmp_1 = tmp1_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_1;
  return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.d3r_1), typeInfo) : tmp3_elvis_lhs;
}
function guessSerializer(value, module_0) {
  var tmp;
  if (value == null) {
    tmp = get_nullable(serializer_0(StringCompanionObject_instance));
  } else {
    if (isInterface(value, KtList)) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (isArray(value)) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
      } else {
        if (isInterface(value, KtSet)) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (isInterface(value, KtMap)) {
            var keySerializer = elementSerializer(value.l4(), module_0);
            var valueSerializer = elementSerializer(value.m4(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp3_elvis_lhs = module_0.t10(getKClassFromExpression(value));
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
  }
  var tmp_1 = tmp;
  return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
}
function checkTypeParameters(type, typeInfo, module_0) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = type.b1();
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList.o2();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var tmp;
    try {
      var tmp0_safe_receiver = element.or_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_1;
        if (serializerOrNull(module_0, tmp0_safe_receiver) == null) {
          tmp_1 = tmp0_safe_receiver;
        } else {
          tmp_1 = null;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var _unused_var__etf5q3 = $p;
        return null;
      } else {
        throw $p;
      }
    }
    if (tmp == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.e2(tmp);
    }
  }
  var nonSerializableArgs = destination;
  if (nonSerializableArgs.j1())
    return null;
  var argNames = joinToString(nonSerializableArgs, VOID, VOID, VOID, VOID, VOID, checkTypeParameters$lambda);
  var tmp_3;
  if (nonSerializableArgs.k2() === 1) {
    tmp_3 = to('', 'is');
  } else {
    tmp_3 = to('s', 'are');
  }
  var _destruct__k2r9zo = tmp_3;
  var s = _destruct__k2r9zo.nl();
  var be = _destruct__k2r9zo.ol();
  throw SerializationException.d10('Serializer for type argument' + s + ' ' + argNames + ' ' + be + " not found for '" + typeInfo.d3r_1.f1() + "'. " + ('Ensure that the listed type' + s + ' ' + be + " marked as '@Serializable'."));
}
function maybeNullable(_this__u8e3s4, typeInfo) {
  var tmp;
  var tmp0_safe_receiver = typeInfo.e3r_1;
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1()) === true) {
    tmp = get_nullable(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function elementSerializer(_this__u8e3s4, module_0) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = filterNotNull(_this__u8e3s4);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.d2(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.l1();
  while (_iterator__ex2g4s.m1()) {
    var item = _iterator__ex2g4s.n1();
    var tmp$ret$2 = guessSerializer(item, module_0);
    destination.e2(tmp$ret$2);
  }
  // Inline function 'kotlin.collections.distinctBy' call
  var set = HashSet.oa();
  var list = ArrayList.o2();
  var _iterator__ex2g4s_0 = destination.l1();
  while (_iterator__ex2g4s_0.m1()) {
    var e = _iterator__ex2g4s_0.n1();
    var key = e.cy().kz();
    if (set.e2(key)) {
      list.e2(e);
    }
  }
  var serializers = list;
  if (serializers.k2() > 1) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.d2(collectionSizeOrDefault(serializers, 10));
    var _iterator__ex2g4s_1 = serializers.l1();
    while (_iterator__ex2g4s_1.m1()) {
      var item_0 = _iterator__ex2g4s_1.n1();
      var tmp$ret$7 = item_0.cy().kz();
      destination_0.e2(tmp$ret$7);
    }
    // Inline function 'kotlin.error' call
    var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
    throw IllegalStateException.o(toString(message));
  }
  var tmp0_elvis_lhs = singleOrNull(serializers);
  var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
  if (selected.cy().w10()) {
    return selected;
  }
  if (!isInterface(selected, KSerializer))
    THROW_CCE();
  var tmp$ret$9;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.j1();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$9 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s_2 = _this__u8e3s4.l1();
    while (_iterator__ex2g4s_2.m1()) {
      var element = _iterator__ex2g4s_2.n1();
      if (element == null) {
        tmp$ret$9 = true;
        break $l$block_0;
      }
    }
    tmp$ret$9 = false;
  }
  if (tmp$ret$9) {
    return get_nullable(selected);
  }
  return selected;
}
function checkTypeParameters$lambda(it) {
  var clz = it.a1();
  var tmp;
  if (!(clz == null) ? isInterface(clz, KClass) : false) {
    tmp = "'" + clz.f1() + "'";
  } else {
    tmp = "'" + toString(it) + "'";
  }
  return tmp;
}
function get_providers() {
  return emptyList();
}
//region block: post-declaration
initMetadataForLambda(KotlinxSerializationConverter$serialize$o$collect$slambda, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$o$collect$slambda, VOID, VOID, [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(KotlinxSerializationConverter$serialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$serialize$slambda, VOID, VOID, [1]);
initMetadataForClass(KotlinxSerializationConverter$deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$slambda, VOID, VOID, [1]);
initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, VOID, [4, 3]);
//endregion
//region block: exports
export {
  serialization as serialization1fpeds7cruos4,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization-kotlinx.mjs.map
