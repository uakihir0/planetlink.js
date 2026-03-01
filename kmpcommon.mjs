import {
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  ArrayList3it5z8td81qkl as ArrayList,
  to2cs3ny02qtbcb as to,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  toMap1vec9topfei08 as toMap,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  println2shhhgwwt4c61 as println,
  Enum3alwj03lh1n41 as Enum,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
} from './kotlin-kotlin-stdlib.mjs';
import {
  JsonObjectee06ihoeeiqj as JsonObject,
  JsonArray2urf8ey7u44sd as JsonArray,
  get_boolean37ml8jnzy6rg3 as get_boolean,
  get_booleanOrNull376axlcpdhkmo as get_booleanOrNull,
  get_double1785hcxaminy4 as get_double,
  get_doubleOrNull2fo14gjg922um as get_doubleOrNull,
  get_float1xtaobzj8js8m as get_float,
  get_floatOrNull2q2ov24agcvgt as get_floatOrNull,
  get_long3gjrkvy7fxjbp as get_long,
  get_longOrNull1kg1ha9scz5pa as get_longOrNull,
  get_int2y6jf75ftml0w as get_int,
  get_intOrNulld29i64b3udf as get_intOrNull,
  JsonPrimitive3ttzjh2ft5dnx as JsonPrimitive,
  JsonDecoder1rijst5ne6qla as JsonDecoder,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  buildClassSerialDescriptors2a6xdp6mrtw as buildClassSerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  GlobalScope_instance1goye8260az8c as GlobalScope_instance,
  promise1ky6tawqaxbt4 as promise,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class AnySerializer {
  constructor() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.j9b_1 = AnySerializer$additionalSerializer$lambda;
    this.k9b_1 = buildClassSerialDescriptor('Any', []);
  }
  xv() {
    return this.k9b_1;
  }
  zv(decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException.m2(toString(message));
    }
    var element = decoder.k26();
    return toAny(this, element);
  }
  o7b(encoder, value) {
    if (typeof value === 'number') {
      encoder.l11(value);
    } else {
      if (typeof value === 'bigint') {
        encoder.m11(value);
      } else {
        if (typeof value === 'number') {
          encoder.k11(value);
        } else {
          if (typeof value === 'number') {
            encoder.n11(value);
          } else {
            if (typeof value === 'number') {
              encoder.o11(value);
            } else {
              if (typeof value === 'string') {
                encoder.q11(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.i11(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.q11(toString(this));
                  } else {
                    if (!this.j9b_1(encoder, value)) {
                      println("Can't serialize unknown type: " + toString(getKClassFromExpression(value)));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  yv(encoder, value) {
    return this.o7b(encoder, !(value == null) ? value : THROW_CCE());
  }
}
class runBlocking$slambda {
  constructor($block) {
    this.l9b_1 = $block;
  }
  d39($this$promise, $completion) {
    return this.l9b_1($this$promise, $completion);
  }
  yd(p1, $completion) {
    return this.d39((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
//endregion
function toAny($this, _this__u8e3s4) {
  if (_this__u8e3s4 instanceof JsonPrimitive) {
    var tmp;
    if (_this__u8e3s4.n26()) {
      tmp = _this__u8e3s4.o26();
    } else if (!(get_intOrNull(_this__u8e3s4) == null)) {
      tmp = get_int(_this__u8e3s4);
    } else if (!(get_longOrNull(_this__u8e3s4) == null)) {
      tmp = get_long(_this__u8e3s4);
    } else if (!(get_floatOrNull(_this__u8e3s4) == null)) {
      tmp = get_float(_this__u8e3s4);
    } else if (!(get_doubleOrNull(_this__u8e3s4) == null)) {
      tmp = get_double(_this__u8e3s4);
    } else if (!(get_booleanOrNull(_this__u8e3s4) == null)) {
      tmp = get_boolean(_this__u8e3s4);
    } else {
      throw IllegalStateException.o("Can't deserialize unknown type: " + toString(_this__u8e3s4));
    }
    return tmp;
  } else {
    if (_this__u8e3s4 instanceof JsonArray) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d2(collectionSizeOrDefault(_this__u8e3s4, 10));
      var _iterator__ex2g4s = _this__u8e3s4.q1();
      while (_iterator__ex2g4s.r1()) {
        var item = _iterator__ex2g4s.s1();
        var tmp$ret$0 = toAny(AnySerializer_getInstance(), item);
        destination.e2(tmp$ret$0);
      }
      return destination;
    } else {
      if (_this__u8e3s4 instanceof JsonObject) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList.d2(_this__u8e3s4.q2());
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s_0 = _this__u8e3s4.z2().q1();
        while (_iterator__ex2g4s_0.r1()) {
          var item_0 = _iterator__ex2g4s_0.s1();
          var tmp$ret$4 = to(item_0.a3(), toAny(AnySerializer_getInstance(), item_0.b3()));
          destination_0.e2(tmp$ret$4);
        }
        return toMap(destination_0);
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
}
function AnySerializer$additionalSerializer$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
  return false;
}
var AnySerializer_instance;
function AnySerializer_getInstance() {
  if (AnySerializer_instance === VOID)
    new AnySerializer();
  return AnySerializer_instance;
}
function runBlocking(block) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, runBlocking$slambda_0(block));
}
function runBlocking$slambda_0($block) {
  var i = new runBlocking$slambda($block);
  var l = ($this$promise, $completion) => i.d39($this$promise, $completion);
  l.$arity = 1;
  return l;
}
//region block: post-declaration
initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
initMetadataForLambda(runBlocking$slambda, VOID, VOID, [1]);
//endregion
//region block: exports
export {
  AnySerializer_getInstance as AnySerializer_getInstanceml5s7nlbxkd9,
  runBlocking as runBlocking31cbthb8fvtpp,
};
//endregion

//# sourceMappingURL=kmpcommon.mjs.map
