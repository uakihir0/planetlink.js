import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  SerializableWithd2dap36updxd as SerializableWith,
  get_elementDescriptors13xxljc24xo44 as get_elementDescriptors,
  SEALED_getInstance19i1cdv1u9v1e as SEALED_getInstance,
  getPolymorphicDescriptors28tu404k84a43 as getPolymorphicDescriptors,
  OPEN_getInstance3fojhnrvzj4l0 as OPEN_getInstance,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  STRING_getInstance7xungxdjbzv as STRING_getInstance,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  get_nullable1xmxlk8ba6b4f as get_nullable,
  ByteArraySerializersn06x87bo7h0 as ByteArraySerializer,
  SerialDescriptorbzxbhtn690r4 as SerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  MapLikeSerializer39txwolqjdcc2 as MapLikeSerializer,
  MapEntrySerializer3oe1sx5ozvw2u as MapEntrySerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  AbstractCollectionSerializer32faixtbm1vtg as AbstractCollectionSerializer,
  MAP_getInstance3e78m6vf98i66 as MAP_getInstance,
  LIST_getInstance2vniy0f7mmb29 as LIST_getInstance,
  ElementMarker33ojvsajwmzts as ElementMarker,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  OBJECT_getInstancerq52wx6ymebx as OBJECT_getInstance,
  CLASS_getInstance3jy3ydw5832xx as CLASS_getInstance,
  UByteArraySerializer1sccfecbzq55o as UByteArraySerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  decodeSerializableElement$defaulthisepbk9rprr as decodeSerializableElement$default,
  decodeSerializableValue3h7ajfesxzjda as decodeSerializableValue,
  decodeSequentially27kmi8jnnsnbc as decodeSequentially,
  decodeCollectionSize3l4gjp9ef5h8u as decodeCollectionSize,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  encodeNotNullMark352dnk5r97tvq as encodeNotNullMark,
  beginCollection27i47rk9upjw4 as beginCollection,
  encodeSerializableValue1mu7jsn2oheqi as encodeSerializableValue,
  encodeNullableSerializableValue22qo2euy9x1r4 as encodeNullableSerializableValue,
  shouldEncodeElementDefault1vy568gzcy4z0 as shouldEncodeElementDefault,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  contentHashCode25jw6rgkgywwr as contentHashCode,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  contentEquals1cdp6c846cfdi as contentEquals,
  Companion_instance13way2il9a8jt as Companion_instance,
  enumEntries20mr21zbe3az4 as enumEntries,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toList3jhuyej2anx2q as toList,
  equals2au1ep9vhcato as equals,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  fromInt2ii0rejb1w62w as fromInt,
  captureStack1fzi4aczwc4hg as captureStack,
  convertToInty04h231mmjoh as convertToInt,
  toString1pkumu07cwy4m as toString,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  HashMap1a0ld5kgwhmhv as HashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  primitiveArrayConcatwxgknw08pmlb as primitiveArrayConcat,
  KtMap140uvy3s5zad8 as KtMap,
  mapCapacity1h45rc3eh9p2l as mapCapacity,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  constructCallableReference23y65rf941mch as constructCallableReference,
  toByte4i43936u611k as toByte,
  toShort36kaw0zjdq3ex as toShort,
  numberToChar93r9buh19yek as numberToChar,
  UByteArray2qu4d6gwssdf9 as UByteArray,
  _UByteArray___get_storage__impl__d4kctt1j62rlq0o4l4a as _UByteArray___get_storage__impl__d4kctt,
  _UByteArray___init__impl__ip4y9n1laeec2dn8xeh as _UByteArray___init__impl__ip4y9n,
  isByteArray4nnzfn1x4o3w as isByteArray,
  negate13xrbakfwasjy as negate,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Char__toInt_impl_vasixd28v1p2u6jau5g as Char__toInt_impl_vasixd,
  shiftLeft3tsh2sstjchzn as shiftLeft,
  shiftRight2gqph14wydb8s as shiftRight,
  FloatCompanionObject_instanceokgc3apyetrg as FloatCompanionObject_instance,
  floatFromBits1n9d03e2m5i5s as floatFromBits,
  DoubleCompanionObject_instance43opzxl97v4p as DoubleCompanionObject_instance,
  doubleFromBits153kwgwnt8ety as doubleFromBits,
  copyOf9mbsebmgnw4t as copyOf,
  protoOf180f3jzyo7rfj as protoOf,
  toRawBits2035dtuolth0v as toRawBits,
  toRawBits3bthuu8natj5y as toRawBits_0,
  encodeToByteArray1onwao0uakjfh as encodeToByteArray,
  takeHighestOneBit9p7rdtda63bc as takeHighestOneBit,
  arrayCopytctsywo3h7gj as arrayCopy,
  convertToByte2t4hntblnhq2k as convertToByte,
  shiftRightUnsigned1ga7wnvbv2qur as shiftRightUnsigned,
  countLeadingZeroBits1tnrq8lk0emwh as countLeadingZeroBits,
  decodeToString1dbzcjd620q25 as decodeToString,
  copyOfRange3alro60z4hhf8 as copyOfRange,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class ProtoBuf {
  constructor(encodeDefaults, serializersModule) {
    Default_getInstance();
    this.rmx_1 = encodeDefaults;
    this.smx_1 = serializersModule;
  }
  f10() {
    return this.smx_1;
  }
  h11(serializer, value) {
    var output = new ByteArrayOutput();
    var encoder = new ProtobufEncoder(this, new ProtobufWriter(output), serializer.uz());
    encoder.g10(serializer, value);
    return output.b8y();
  }
  i11(deserializer, bytes) {
    var input = new ByteArrayInput(bytes);
    var decoder = new ProtobufDecoder(this, new ProtobufReader(input), deserializer.uz());
    return decoder.j10(deserializer);
  }
}
class Default extends ProtoBuf {
  constructor() {
    Default_instance = null;
    super(false, EmptySerializersModule());
    Default_instance = this;
  }
}
class ProtoBufBuilder {
  constructor(proto) {
    this.mmy_1 = proto.rmx_1;
    this.nmy_1 = proto.f10();
  }
}
class ProtoBufImpl extends ProtoBuf {}
class ProtoNumber {
  constructor(number) {
    this.omy_1 = number;
  }
  equals(other) {
    if (!(other instanceof ProtoNumber))
      return false;
    var tmp0_other_with_cast = other instanceof ProtoNumber ? other : THROW_CCE();
    if (!(this.omy_1 === tmp0_other_with_cast.omy_1))
      return false;
    return true;
  }
  hashCode() {
    return imul(getStringHashCode('number'), 127) ^ this.omy_1;
  }
  toString() {
    return '@kotlinx.serialization.protobuf.ProtoNumber(' + 'number=' + this.omy_1 + ')';
  }
}
class ProtoPacked {
  equals(other) {
    if (!(other instanceof ProtoPacked))
      return false;
    other instanceof ProtoPacked || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@kotlinx.serialization.protobuf.ProtoPacked(' + ')';
  }
}
class ProtoIntegerType extends Enum {
  constructor(name, ordinal, signature) {
    super(name, ordinal);
    this.rmy_1 = signature;
  }
}
class ProtoOneOf {}
class ProtoType {}
class Companion {
  constructor() {
    Companion_instance_0 = this;
    this.smy_1 = new ProtoUnknownFieldHolder(new Int8Array(0));
  }
}
class ProtoUnknownFieldHolder {
  constructor(fields) {
    Companion_getInstance();
    this.tmy_1 = fields;
  }
  l2() {
    return this.tmy_1.length;
  }
  hashCode() {
    return contentHashCode(this.tmy_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ProtoUnknownFieldHolder))
      THROW_CCE();
    return contentEquals(this.tmy_1, other.tmy_1);
  }
  toString() {
    return 'ProtoUnknownFieldHolder(size=' + this.l2() + ')';
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(8);
    while (tmp_0 < 8) {
      var tmp_2 = tmp_0;
      // Inline function 'kotlin.collections.find' call
      var tmp0 = get_entries();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.l1();
        while (_iterator__ex2g4s.m1()) {
          var element = _iterator__ex2g4s.n1();
          if (element.wmy_1 === tmp_2) {
            tmp$ret$3 = element;
            break $l$block;
          }
        }
        tmp$ret$3 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$3;
      tmp_1[tmp_2] = tmp0_elvis_lhs == null ? ProtoWireType_INVALID_getInstance() : tmp0_elvis_lhs;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.xmy_1 = tmp_1;
  }
  ymy(value) {
    return this.xmy_1[value & 7];
  }
}
class ProtoWireType extends Enum {
  constructor(name, ordinal, typeId) {
    super(name, ordinal);
    this.wmy_1 = typeId;
  }
  zmy(tag) {
    return tag << 3 | this.wmy_1;
  }
  toString() {
    return this.r1_1 + '(' + this.wmy_1 + ')';
  }
}
class ProtobufDecodingException extends SerializationException {
  constructor(message, e) {
    return new.target.gmz(message, e);
  }
  static gmz(message, e) {
    e = e === VOID ? null : e;
    var $this = this.y11(message, e);
    captureStack($this, $this.fmz_1);
    return $this;
  }
}
class ProtobufTaggedBase {
  constructor() {
    this.qn0_1 = new BigInt64Array(8);
    this.rn0_1 = -1;
  }
  sn0() {
    return this.qn0_1[this.rn0_1];
  }
  tn0() {
    return this.rn0_1 === -1 ? 19500n : this.qn0_1[this.rn0_1];
  }
  un0() {
    var tmp;
    if (this.rn0_1 === -1) {
      tmp = 19500n;
    } else {
      var tmp_0 = this.qn0_1;
      var _unary__edvuaz = this.rn0_1;
      this.rn0_1 = _unary__edvuaz - 1 | 0;
      tmp = tmp_0[_unary__edvuaz];
    }
    return tmp;
  }
  vn0(tag) {
    if (tag === 19500n)
      return Unit_instance;
    this.rn0_1 = this.rn0_1 + 1 | 0;
    var idx = this.rn0_1;
    if (this.rn0_1 >= this.qn0_1.length) {
      expand(this);
    }
    this.qn0_1[idx] = tag;
  }
  j1l() {
    if (this.rn0_1 >= 0) {
      var tmp = this.qn0_1;
      var _unary__edvuaz = this.rn0_1;
      this.rn0_1 = _unary__edvuaz - 1 | 0;
      return tmp[_unary__edvuaz];
    }
    throw SerializationException.v11('No tag in stack for requested element');
  }
}
class ProtobufTaggedDecoder extends ProtobufTaggedBase {
  pn0(tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.vn0(tag);
    return this;
  }
  g14() {
    return true;
  }
  h14() {
    return null;
  }
  i14() {
    return this.dn0(this.un0());
  }
  j14() {
    return this.en0(this.un0());
  }
  k14() {
    return this.fn0(this.un0());
  }
  l14() {
    return this.gn0(this.un0());
  }
  m14() {
    return this.hn0(this.un0());
  }
  n14() {
    return this.in0(this.un0());
  }
  o14() {
    return this.jn0(this.un0());
  }
  p14() {
    return this.kn0(this.un0());
  }
  q14() {
    return this.an0(this.un0());
  }
  r14(enumDescriptor) {
    return this.ln0(this.un0(), enumDescriptor);
  }
  u14(descriptor) {
    return this;
  }
  v14(descriptor) {
  }
  w14(descriptor, index) {
    return this.dn0(this.n1k(descriptor, index));
  }
  x14(descriptor, index) {
    return this.en0(this.n1k(descriptor, index));
  }
  y14(descriptor, index) {
    return this.fn0(this.n1k(descriptor, index));
  }
  z14(descriptor, index) {
    return this.gn0(this.n1k(descriptor, index));
  }
  a15(descriptor, index) {
    return this.hn0(this.n1k(descriptor, index));
  }
  b15(descriptor, index) {
    return this.in0(this.n1k(descriptor, index));
  }
  c15(descriptor, index) {
    return this.jn0(this.n1k(descriptor, index));
  }
  d15(descriptor, index) {
    return this.kn0(this.n1k(descriptor, index));
  }
  e15(descriptor, index) {
    return this.an0(this.n1k(descriptor, index));
  }
  g15(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.n1k(descriptor, index);
    this.vn0(tag);
    return this.t14(deserializer, previousValue);
  }
  i15(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.n1k(descriptor, index);
    this.vn0(tag);
    var tmp;
    if (this.g14()) {
      tmp = this.t14(deserializer, previousValue);
    } else {
      tmp = this.h14();
    }
    return tmp;
  }
  s14(descriptor) {
    return this.pn0(this.un0(), descriptor);
  }
  f15(descriptor, index) {
    return this.pn0(this.n1k(descriptor, index), descriptor.h13(index));
  }
}
class ProtobufDecoder extends ProtobufTaggedDecoder {
  constructor(proto, reader, descriptor) {
    super();
    this.dmy_1 = proto;
    this.emy_1 = reader;
    this.fmy_1 = descriptor;
    this.gmy_1 = null;
    this.hmy_1 = null;
    this.imy_1 = null;
    this.jmy_1 = -1;
    this.kmy_1 = false;
    var tmp = this;
    tmp.lmy_1 = new ElementMarker(this.fmy_1, ProtobufDecoder$readIfAbsent$ref(this));
    this.cn0(this.fmy_1);
  }
  f10() {
    return this.dmy_1.f10();
  }
  bn0() {
    return this.emy_1.wmz_1;
  }
  cn0(descriptor) {
    var elements = descriptor.d13();
    if (elements < 32) {
      var tmp = 0;
      var tmp_0 = elements + 1 | 0;
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        tmp_1[tmp] = -1;
        tmp = tmp + 1 | 0;
      }
      var cache = tmp_1;
      var inductionVariable = 0;
      if (inductionVariable < elements)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var protoId = extractProtoId(descriptor, i, false);
          if (0 <= protoId ? protoId <= elements : false) {
            cache[protoId] = i;
          } else {
            return populateCacheMap(this, descriptor, elements);
          }
        }
         while (inductionVariable < elements);
      this.gmy_1 = cache;
    } else {
      populateCacheMap(this, descriptor, elements);
    }
  }
  u14(descriptor) {
    var tmp;
    try {
      var tmp0_subject = descriptor.b13();
      var tmp_0;
      if (equals(tmp0_subject, LIST_getInstance())) {
        var tag = this.tn0();
        var tmp_1;
        if (equals(this.fmy_1.b13(), LIST_getInstance()) && !(tag === 19500n) && !equals(this.fmy_1, descriptor)) {
          var reader = makeDelimited(this.emy_1, tag);
          reader.ln2();
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
          var packedBits = false ? 4294967296n : 0n;
          var oneOfBits = false ? 68719476736n : 0n;
          var unknownBits = false ? 137438953472n : 0n;
          var tmp$ret$0 = packedBits | oneOfBits | ProtoIntegerType_DEFAULT_getInstance().rmy_1 | fromInt(1) | unknownBits;
          tmp_1 = new RepeatedDecoder(this.dmy_1, reader, tmp$ret$0, descriptor);
        } else if (this.emy_1.wmz_1.equals(ProtoWireType_SIZE_DELIMITED_getInstance()) && get_isPackable(descriptor.h13(0))) {
          var sliceReader = new ProtobufReader(this.emy_1.kn2());
          tmp_1 = new PackedArrayDecoder(this.dmy_1, sliceReader, descriptor);
        } else {
          tmp_1 = new RepeatedDecoder(this.dmy_1, this.emy_1, tag, descriptor);
        }
        return tmp_1;
      } else {
        var tmp_2;
        if (equals(tmp0_subject, CLASS_getInstance())) {
          tmp_2 = true;
        } else {
          var tmp_3;
          if (equals(tmp0_subject, OBJECT_getInstance())) {
            tmp_3 = true;
          } else {
            tmp_3 = tmp0_subject instanceof PolymorphicKind;
          }
          tmp_2 = tmp_3;
        }
        if (tmp_2) {
          var tag_0 = this.tn0();
          if (tag_0 === 19500n && equals(this.fmy_1, descriptor))
            return this;
          if (get_isOneOf(tag_0)) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            var rawIndex = convertToInt(tag_0 & 2147483647n) - 1 | 0;
            var tmp1_safe_receiver = this.imy_1;
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j4(rawIndex);
            var tmp_4;
            if (tmp2_safe_receiver == null) {
              tmp_4 = null;
            } else {
              // Inline function 'kotlin.let' call
              tmp_4 = overrideId(tag_0, tmp2_safe_receiver);
            }
            var tmp3_elvis_lhs = tmp_4;
            var restoredTag = tmp3_elvis_lhs == null ? tag_0 : tmp3_elvis_lhs;
            return new OneOfPolymorphicReader(this.dmy_1, this.emy_1, restoredTag, descriptor);
          }
          return new ProtobufDecoder(this.dmy_1, makeDelimited(this.emy_1, tag_0), descriptor);
        } else {
          if (equals(tmp0_subject, MAP_getInstance())) {
            tmp_0 = new MapEntryReader(this.dmy_1, makeDelimitedForced(this.emy_1, this.tn0()), this.tn0(), descriptor);
          } else {
            throw SerializationException.v11('Primitives are not supported at top-level');
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var tmp_6 = descriptor.c11();
        var tmp_7 = this.fmy_1.c11();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_0 = this.tn0();
        var tmp$ret$4 = convertToInt(this_0 & 2147483647n);
        throw ProtobufDecodingException.gmz('Fail to begin structure for ' + tmp_6 + ' in ' + tmp_7 + ' at proto number ' + tmp$ret$4, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  v14(descriptor) {
  }
  dn0(tag) {
    var value = this.gn0(tag);
    var tmp;
    switch (value) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = true;
        break;
      default:
        throw SerializationException.v11('Unexpected boolean value: ' + value);
    }
    return tmp;
  }
  en0(tag) {
    return toByte(this.gn0(tag));
  }
  fn0(tag) {
    return toShort(this.gn0(tag));
  }
  gn0(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.emy_1.nn2();
        } else {
          tmp = this.emy_1.mn2(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.gmz('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.fmy_1.c11(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  hn0(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.emy_1.pn2();
        } else {
          tmp = this.emy_1.on2(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.gmz('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.fmy_1.c11(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  in0(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.emy_1.rn2();
        } else {
          tmp = this.emy_1.qn2();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.gmz('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.fmy_1.c11(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  jn0(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.emy_1.tn2();
        } else {
          tmp = this.emy_1.sn2();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.gmz('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.fmy_1.c11(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  kn0(tag) {
    return numberToChar(this.gn0(tag));
  }
  an0(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.emy_1.vn2();
        } else {
          tmp = this.emy_1.un2();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.gmz('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.fmy_1.c11(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  ln0(tag, enumDescription) {
    return findIndexByTag(this, enumDescription, this.gn0(tag));
  }
  j10(deserializer) {
    return this.t14(deserializer, null);
  }
  t14(deserializer, previousValue) {
    var tmp;
    try {
      var tmp_0;
      if (deserializer instanceof MapLikeSerializer) {
        tmp_0 = deserializeMap(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE(), previousValue);
      } else {
        if (equals(deserializer.uz(), ByteArraySerializer().uz())) {
          tmp_0 = deserializeByteArray(this, (previousValue == null ? true : isByteArray(previousValue)) ? previousValue : THROW_CCE());
        } else {
          if (equals(deserializer.uz(), UByteArraySerializer().uz())) {
            var tmp_1;
            if (previousValue == null ? true : previousValue instanceof UByteArray) {
              var tmp_2 = previousValue;
              tmp_1 = tmp_2 == null ? null : tmp_2.vx_1;
            } else {
              tmp_1 = THROW_CCE();
            }
            var tmp0_safe_receiver = tmp_1;
            var tmp_3;
            var tmp_4 = tmp0_safe_receiver;
            if ((tmp_4 == null ? null : new UByteArray(tmp_4)) == null) {
              tmp_3 = null;
            } else {
              // Inline function 'kotlin.collections.asByteArray' call
              tmp_3 = _UByteArray___get_storage__impl__d4kctt(tmp0_safe_receiver);
            }
            // Inline function 'kotlin.collections.asUByteArray' call
            var this_0 = deserializeByteArray(this, tmp_3);
            var tmp$ret$1 = _UByteArray___init__impl__ip4y9n(this_0);
            tmp_0 = new UByteArray(tmp$ret$1);
          } else {
            if (deserializer instanceof AbstractCollectionSerializer) {
              tmp_0 = (deserializer instanceof AbstractCollectionSerializer ? deserializer : THROW_CCE()).n18(this, previousValue);
            } else {
              if (equals(deserializer.uz(), ProtoUnknownFieldHolderSerializer_getInstance().hmz_1)) {
                tmp_0 = decodeUnknownFields(this, previousValue instanceof ProtoUnknownFieldHolder ? previousValue : null);
              } else {
                tmp_0 = deserializer.i10(this);
              }
            }
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var currentTag = this.tn0();
        var tmp_6;
        if (!equals(this.fmy_1, deserializer.uz())) {
          var tmp_7;
          if (equals(this.fmy_1.b13(), LIST_getInstance()) && !equals(deserializer.uz().b13(), MAP_getInstance())) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding index ' + (convertToInt(currentTag & 2147483647n) - 1 | 0) + ' in repeated field of ' + deserializer.uz().c11();
          } else if (equals(this.fmy_1.b13(), MAP_getInstance())) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            var index = (convertToInt(currentTag & 2147483647n) - 1 | 0) / 2 | 0;
            var tmp_8;
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            if (((convertToInt(currentTag & 2147483647n) - 1 | 0) % 2 | 0) === 0) {
              tmp_8 = 'key';
            } else {
              tmp_8 = 'value';
            }
            var field = tmp_8;
            tmp_7 = 'Error while decoding ' + field + ' of index ' + index + ' in map field of ' + deserializer.uz().c11();
          } else {
            var tmp_9 = deserializer.uz().c11();
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding ' + tmp_9 + ' at proto number ' + convertToInt(currentTag & 2147483647n) + ' of ' + this.fmy_1.c11();
          }
          tmp_6 = tmp_7;
        } else {
          tmp_6 = 'Error while decoding ' + this.fmy_1.c11();
        }
        var msg = tmp_6;
        throw ProtobufDecodingException.gmz(msg, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  n1k(_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  }
  k15(descriptor) {
    try {
      while (true) {
        var protoId = this.emy_1.ln2();
        if (protoId === -1) {
          return this.lmy_1.w1a();
        }
        if (protoId === 0) {
          throw SerializationException.v11('0 is not allowed as the protobuf field number in ' + descriptor.c11() + ', the input bytes may have been corrupted');
        }
        var index = getIndexByNum(this, protoId);
        if (index === -1) {
          this.emy_1.wn2();
        } else {
          var tag = extractParameters(descriptor, index);
          if (get_isOneOf(tag) || get_isUnknown(tag)) {
            var tmp0_safe_receiver = this.imy_1;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver.u4(index, protoId);
          }
          this.lmy_1.v1a(index);
          return index;
        }
      }
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        throw ProtobufDecodingException.gmz('Fail to get element index for ' + descriptor.c11() + ' in ' + this.fmy_1.c11(), e);
      } else {
        throw $p;
      }
    }
  }
  g14() {
    return !this.kmy_1;
  }
  mn0() {
    return this.emy_1.xn2();
  }
}
class PackedArrayDecoder extends ProtobufDecoder {
  constructor(proto, reader, descriptor) {
    super(proto, reader, descriptor);
    this.tmz_1 = 0;
  }
  n1k(_this__u8e3s4, index) {
    return 19500n;
  }
  u14(descriptor) {
    throw SerializationException.v11('Packing only supports primitive number types. The input type however was a struct: ' + toString(descriptor));
  }
  k15(descriptor) {
    if (this.emy_1.zmz())
      return -1;
    var _unary__edvuaz = this.tmz_1;
    this.tmz_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  }
  an0(tag) {
    throw SerializationException.v11('Packing only supports primitive number types. The actual reading is for string.');
  }
}
class ProtobufTaggedEncoder extends ProtobufTaggedBase {
  constructor() {
    super();
    this.cn2_1 = NullableMode_NOT_NULL_getInstance();
  }
  dn2(tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.vn0(tag);
    return this;
  }
  p15() {
    if (!this.cn2_1.equals(NullableMode_ACCEPTABLE_getInstance())) {
      var message;
      switch (this.cn2_1.s1_1) {
        case 1:
          message = "'null' is not supported for optional properties in ProtoBuf";
          break;
        case 2:
          message = "'null' is not supported as the value of collection types in ProtoBuf";
          break;
        case 3:
          message = "'null' is not supported as the value of a list element in ProtoBuf";
          break;
        case 4:
          message = "'null' is not allowed for not-null properties";
          break;
        default:
          message = "'null' is not supported in ProtoBuf";
          break;
      }
      throw SerializationException.v11(message);
    }
  }
  q15(value) {
    this.tn1(this.un0(), value);
  }
  r15(value) {
    this.rn1(this.un0(), value);
  }
  s15(value) {
    this.sn1(this.un0(), value);
  }
  t15(value) {
    this.qn1(this.un0(), value);
  }
  u15(value) {
    this.vn1(this.un0(), value);
  }
  v15(value) {
    this.wn1(this.un0(), value);
  }
  w15(value) {
    this.xn1(this.un0(), value);
  }
  x15(value) {
    this.un1(this.un0(), value);
  }
  y15(value) {
    this.pn1(this.un0(), value);
  }
  z15(enumDescriptor, index) {
    return this.yn1(this.un0(), enumDescriptor, index);
  }
  v14(descriptor) {
    if (this.rn0_1 >= 0) {
      this.j1l();
    }
    this.a1m(descriptor);
  }
  a1m(descriptor) {
  }
  b16(descriptor, index, value) {
    return this.tn1(this.n1k(descriptor, index), value);
  }
  c16(descriptor, index, value) {
    return this.rn1(this.n1k(descriptor, index), value);
  }
  d16(descriptor, index, value) {
    return this.sn1(this.n1k(descriptor, index), value);
  }
  e16(descriptor, index, value) {
    return this.qn1(this.n1k(descriptor, index), value);
  }
  f16(descriptor, index, value) {
    return this.vn1(this.n1k(descriptor, index), value);
  }
  g16(descriptor, index, value) {
    return this.wn1(this.n1k(descriptor, index), value);
  }
  h16(descriptor, index, value) {
    return this.xn1(this.n1k(descriptor, index), value);
  }
  i16(descriptor, index, value) {
    return this.un1(this.n1k(descriptor, index), value);
  }
  j16(descriptor, index, value) {
    return this.pn1(this.n1k(descriptor, index), value);
  }
  l16(descriptor, index, serializer, value) {
    var tmp = this;
    var tmp_0;
    if (descriptor.i13(index)) {
      tmp_0 = NullableMode_OPTIONAL_getInstance();
    } else {
      var elementDescriptor = descriptor.h13(index);
      tmp_0 = !elementDescriptor.o12() ? NullableMode_NOT_NULL_getInstance() : isMapOrList(this, elementDescriptor.b13()) ? NullableMode_COLLECTION_getInstance() : equals(descriptor.b13(), LIST_getInstance()) ? NullableMode_LIST_ELEMENT_getInstance() : NullableMode_ACCEPTABLE_getInstance();
    }
    tmp.cn2_1 = tmp_0;
    this.vn0(this.n1k(descriptor, index));
    this.g10(serializer, value);
  }
  m16(descriptor, index, serializer, value) {
    var tmp = this;
    var tmp_0;
    if (descriptor.i13(index)) {
      tmp_0 = NullableMode_OPTIONAL_getInstance();
    } else {
      var elementDescriptor = descriptor.h13(index);
      tmp_0 = isMapOrList(this, elementDescriptor.b13()) ? NullableMode_COLLECTION_getInstance() : equals(descriptor.b13(), LIST_getInstance()) ? NullableMode_LIST_ELEMENT_getInstance() : NullableMode_ACCEPTABLE_getInstance();
    }
    tmp.cn2_1 = tmp_0;
    this.vn0(this.n1k(descriptor, index));
    this.n16(serializer, value);
  }
  a16(descriptor) {
    return this.dn2(this.un0(), descriptor);
  }
  k16(descriptor, index) {
    return this.dn2(this.n1k(descriptor, index), descriptor.h13(index));
  }
}
class ProtobufEncoder extends ProtobufTaggedEncoder {
  constructor(proto, writer, descriptor) {
    super();
    this.wmx_1 = proto;
    this.xmx_1 = writer;
    this.ymx_1 = descriptor;
  }
  f10() {
    return this.wmx_1.f10();
  }
  q16(descriptor, index) {
    return this.wmx_1.rmx_1;
  }
  p16(descriptor, collectionSize) {
    var tmp0_subject = descriptor.b13();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tag = this.tn0();
      var tmp_0;
      if (get_isPacked(tag) && get_isPackable(descriptor.h13(0))) {
        tmp_0 = new PackedArrayEncoder(this.wmx_1, this.xmx_1, this.tn0(), descriptor);
      } else {
        if (tag === 19500n) {
          this.xmx_1.bn5(collectionSize);
        }
        var tmp_1;
        if (equals(this.ymx_1.b13(), LIST_getInstance()) && !(tag === 19500n) && !equals(this.ymx_1, descriptor)) {
          tmp_1 = new NestedRepeatedEncoder(this.wmx_1, this.xmx_1, tag, descriptor);
        } else {
          tmp_1 = new RepeatedEncoder(this.wmx_1, this.xmx_1, tag, descriptor);
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (equals(tmp0_subject, MAP_getInstance())) {
      tmp = new MapRepeatedEncoder(this.wmx_1, this.sn0(), this.xmx_1, descriptor);
    } else {
      throw SerializationException.v11('This serial kind is not supported as collection: ' + toString(descriptor));
    }
    return tmp;
  }
  u14(descriptor) {
    var tmp0_subject = descriptor.b13();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tmp_0;
      if (get_isPackable(descriptor.h13(0)) && get_isPacked(this.tn0())) {
        tmp_0 = new PackedArrayEncoder(this.wmx_1, this.xmx_1, this.tn0(), descriptor);
      } else {
        tmp_0 = new RepeatedEncoder(this.wmx_1, this.xmx_1, this.tn0(), descriptor);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (equals(tmp0_subject, CLASS_getInstance())) {
        tmp_1 = true;
      } else {
        var tmp_2;
        if (equals(tmp0_subject, OBJECT_getInstance())) {
          tmp_2 = true;
        } else {
          tmp_2 = tmp0_subject instanceof PolymorphicKind;
        }
        tmp_1 = tmp_2;
      }
      if (tmp_1) {
        var tag = this.tn0();
        var tmp_3;
        if (tag === 19500n && equals(descriptor, this.ymx_1)) {
          tmp_3 = this;
        } else if (get_isOneOf(tag)) {
          tmp_3 = new OneOfPolymorphicEncoder(this.wmx_1, this.xmx_1, descriptor);
        } else {
          tmp_3 = new ObjectEncoder(this.wmx_1, this.tn0(), this.xmx_1, VOID, descriptor);
        }
        tmp = tmp_3;
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp = new MapRepeatedEncoder(this.wmx_1, this.tn0(), this.xmx_1, descriptor);
        } else {
          throw SerializationException.v11('This serial kind is not supported as structure: ' + toString(descriptor));
        }
      }
    }
    return tmp;
  }
  qn1(tag, value) {
    if (tag === 19500n) {
      this.xmx_1.bn5(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.xmx_1.cn5(value, tmp$ret$0, get_integerType(tag));
    }
  }
  rn1(tag, value) {
    return this.qn1(tag, value);
  }
  sn1(tag, value) {
    return this.qn1(tag, value);
  }
  tn1(tag, value) {
    return this.qn1(tag, value ? 1 : 0);
  }
  un1(tag, value) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(value);
    return this.qn1(tag, tmp$ret$0);
  }
  vn1(tag, value) {
    if (tag === 19500n) {
      this.xmx_1.p1u(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.xmx_1.dn5(value, tmp$ret$0, get_integerType(tag));
    }
  }
  wn1(tag, value) {
    if (tag === 19500n) {
      this.xmx_1.fn5(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.xmx_1.en5(value, tmp$ret$0);
    }
  }
  xn1(tag, value) {
    if (tag === 19500n) {
      this.xmx_1.hn5(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.xmx_1.gn5(value, tmp$ret$0);
    }
  }
  pn1(tag, value) {
    if (tag === 19500n) {
      this.xmx_1.jn5(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.xmx_1.in5(value, tmp$ret$0);
    }
  }
  yn1(tag, enumDescriptor, ordinal) {
    var id = extractProtoId(enumDescriptor, ordinal, true);
    if (tag === 19500n) {
      this.xmx_1.bn5(id);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.xmx_1.cn5(id, tmp$ret$0, ProtoIntegerType_DEFAULT_getInstance());
    }
  }
  n1k(_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  }
  g10(serializer, value) {
    var tmp;
    if (serializer instanceof MapLikeSerializer) {
      serializeMap(this, isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
      tmp = Unit_instance;
    } else {
      if (equals(serializer.uz(), ProtoUnknownFieldHolderSerializer_getInstance().hmz_1)) {
        var tmp_0 = serializer instanceof ProtoUnknownFieldHolderSerializer ? serializer : THROW_CCE();
        serializeUnknownFields(this, tmp_0, value instanceof ProtoUnknownFieldHolder ? value : THROW_CCE());
        tmp = Unit_instance;
      } else {
        if (equals(serializer.uz(), ByteArraySerializer().uz())) {
          serializeByteArray(this, (!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE());
          tmp = Unit_instance;
        } else {
          if (equals(serializer.uz(), UByteArraySerializer().uz())) {
            // Inline function 'kotlin.collections.asByteArray' call
            var this_0 = value instanceof UByteArray ? value.vx_1 : THROW_CCE();
            var tmp$ret$0 = _UByteArray___get_storage__impl__d4kctt(this_0);
            serializeByteArray(this, tmp$ret$0);
            tmp = Unit_instance;
          } else {
            serializer.h10(this, value);
            tmp = Unit_instance;
          }
        }
      }
    }
    return tmp;
  }
  zn1(bytes) {
    this.xmx_1.kn5(bytes);
  }
}
class NestedRepeatedEncoder extends ProtobufEncoder {
  constructor(proto, writer, curTag, descriptor, stream) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    super(proto, new ProtobufWriter(stream), descriptor);
    this.ln1_1 = writer;
    this.mn1_1 = curTag;
    this.nn1_1 = stream;
  }
  n1k(_this__u8e3s4, index) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
    var packedBits = false ? 4294967296n : 0n;
    var oneOfBits = false ? 68719476736n : 0n;
    var unknownBits = false ? 137438953472n : 0n;
    return packedBits | oneOfBits | ProtoIntegerType_DEFAULT_getInstance().rmy_1 | fromInt(1) | unknownBits;
  }
  a1m(descriptor) {
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var this_0 = this.mn1_1;
    var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
    this.ln1_1.ln5(this.nn1_1, tmp$ret$0);
  }
}
class PackedArrayEncoder extends NestedRepeatedEncoder {
  constructor(proto, writer, curTag, descriptor, stream) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    super(proto, writer, curTag, descriptor, stream);
  }
  n1k(_this__u8e3s4, index) {
    return 19500n;
  }
  p16(descriptor, collectionSize) {
    throw SerializationException.v11('Packing only supports primitive number types');
  }
  u14(descriptor) {
    throw SerializationException.v11('Packing only supports primitive number types');
  }
  a1m(descriptor) {
    if (this.nn1_1.on1() > 0) {
      super.a1m(descriptor);
    }
  }
  pn1(tag, value) {
    throw SerializationException.v11('Packing only supports primitive number types');
  }
}
class ProtoUnknownFieldHolderSerializer {
  constructor() {
    ProtoUnknownFieldHolderSerializer_instance = this;
    this.hmz_1 = SerialDescriptor('kotlinx.serialization.protobuf.ProtoUnknownFieldHolder', ByteArraySerializer().uz());
  }
  uz() {
    return this.hmz_1;
  }
  i10(decoder) {
    var tmp0 = asProtobufDecoder(decoder);
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.hmz_1;
    var composite = tmp0.u14(descriptor);
    // Inline function 'kotlin.let' call
    var it = asProtobufDecoder_0(composite);
    var result = new ProtoUnknownFieldHolder(readRawFieldBytes(it, it.sn0()));
    composite.v14(descriptor);
    return result;
  }
  en2(encoder, value) {
    asProtobufEncoder(encoder).zn1(value.tmy_1);
  }
  h10(encoder, value) {
    return this.en2(encoder, value instanceof ProtoUnknownFieldHolder ? value : THROW_CCE());
  }
}
class MapEntryReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.jn3_1 = parentTag;
  }
  n1k(_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits = false ? 4294967296n : 0n;
      var oneOfBits = false ? 68719476736n : 0n;
      var unknownBits = false ? 137438953472n : 0n;
      tmp = packedBits | oneOfBits | get_integerType(this.jn3_1).rmy_1 | fromInt(1) | unknownBits;
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits_0 = false ? 4294967296n : 0n;
      var oneOfBits_0 = false ? 68719476736n : 0n;
      var unknownBits_0 = false ? 137438953472n : 0n;
      tmp = packedBits_0 | oneOfBits_0 | get_integerType(this.jn3_1).rmy_1 | fromInt(2) | unknownBits_0;
    }
    return tmp;
  }
}
class RepeatedDecoder extends ProtobufDecoder {
  constructor(proto, decoder, currentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.vn3_1 = -1;
    var tmp = this;
    var tmp_0;
    if (currentTag === 19500n) {
      var length = this.emy_1.nn2();
      // Inline function 'kotlin.require' call
      if (!(length >= 0)) {
        var message = 'Expected positive length for ' + toString(descriptor) + ', but got ' + length;
        throw IllegalArgumentException.b2(toString(message));
      }
      tmp_0 = negate(fromInt(length));
    } else {
      tmp_0 = currentTag;
    }
    tmp.wn3_1 = tmp_0;
  }
  k15(descriptor) {
    if (this.wn3_1 > 0n) {
      return decodeTaggedListIndex(this);
    }
    return decodeListIndexNoTag(this);
  }
  n1k(_this__u8e3s4, index) {
    if (this.wn3_1 > 0n)
      return this.wn3_1;
    return 19500n;
  }
}
class OneOfPolymorphicReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.kn4_1 = parentTag;
    this.ln4_1 = false;
    this.mn4_1 = false;
  }
  n1k(_this__u8e3s4, index) {
    var tmp;
    if (index === 0) {
      tmp = 19501n;
    } else {
      tmp = extractParameters(_this__u8e3s4, 0);
    }
    return tmp;
  }
  u14(descriptor) {
    var tmp;
    if (equals(descriptor, this.fmy_1)) {
      tmp = this;
    } else {
      tmp = new OneOfElementReader(this.dmy_1, this.emy_1, descriptor);
    }
    return tmp;
  }
  k15(descriptor) {
    if (!this.ln4_1) {
      this.ln4_1 = true;
      return 0;
    } else if (!this.mn4_1) {
      this.mn4_1 = true;
      return 1;
    } else {
      return -1;
    }
  }
  an0(tag) {
    var tmp;
    if (tag === 19501n) {
      var tmp_0 = this.f10();
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = this.kn4_1;
      var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
      var tmp0_safe_receiver = getActualOneOfSerializer(this.fmy_1, tmp_0, tmp$ret$0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c11();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var tmp_2 = this.fmy_1.c11();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_1 = this.kn4_1;
        var tmp$ret$1 = convertToInt(this_1 & 2147483647n);
        throw SerializationException.v11('Cannot find a subclass of ' + tmp_2 + ' annotated with @ProtoNumber(' + tmp$ret$1 + ').');
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = super.an0(tag);
    }
    return tmp;
  }
}
class OneOfElementReader extends ProtobufDecoder {
  constructor(proto, decoder, descriptor) {
    super(proto, decoder, descriptor);
    // Inline function 'kotlin.require' call
    if (!(descriptor.d13() === 1)) {
      var message = 'Implementation of oneOf type ' + descriptor.c11() + ' should contain only 1 element, but get ' + descriptor.d13();
      throw IllegalArgumentException.b2(toString(message));
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = descriptor.g13(0);
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList.k2();
    var _iterator__ex2g4s = tmp0.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      if (element instanceof ProtoNumber) {
        destination.j2(element);
      }
    }
    var protoNumber = singleOrNull(destination);
    // Inline function 'kotlin.require' call
    if (!!(protoNumber == null)) {
      var message_0 = 'Implementation of oneOf type ' + descriptor.c11() + ' should have @ProtoNumber annotation';
      throw IllegalArgumentException.b2(toString(message_0));
    }
    this.yn4_1 = protoNumber.omy_1;
    this.zn4_1 = false;
  }
  u14(descriptor) {
    var tmp0_subject = descriptor.b13();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, CLASS_getInstance())) {
      tmp_0 = true;
    } else {
      var tmp_1;
      if (equals(tmp0_subject, OBJECT_getInstance())) {
        tmp_1 = true;
      } else {
        tmp_1 = tmp0_subject instanceof PolymorphicKind;
      }
      tmp_0 = tmp_1;
    }
    if (tmp_0) {
      var tag = this.tn0();
      if (tag === 19500n && equals(this.fmy_1, descriptor))
        return this;
      if (get_isOneOf(tag))
        throw SerializationException.v11('An oneof element cannot be directly child of another oneof element');
      tmp = new ProtobufDecoder(this.dmy_1, makeDelimited(this.emy_1, tag), descriptor);
    } else {
      throw SerializationException.v11('Type ' + descriptor.b13().toString() + ' cannot be directly child of oneof element');
    }
    return tmp;
  }
  k15(descriptor) {
    var tmp;
    if (this.zn4_1) {
      tmp = -1;
    } else {
      this.zn4_1 = true;
      tmp = 0;
    }
    return tmp;
  }
}
class RepeatedEncoder extends ProtobufEncoder {
  constructor(proto, writer, curTag, descriptor) {
    super(proto, writer, descriptor);
    this.sn5_1 = curTag;
  }
  n1k(_this__u8e3s4, index) {
    return this.sn5_1;
  }
}
class ObjectEncoder extends ProtobufEncoder {
  constructor(proto, parentTag, parentWriter, stream, descriptor) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    super(proto, new ProtobufWriter(stream), descriptor);
    this.in6_1 = parentTag;
    this.jn6_1 = parentWriter;
    this.kn6_1 = stream;
  }
  a1m(descriptor) {
    if (!(this.in6_1 === 19500n)) {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = this.in6_1;
      var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
      this.jn6_1.ln5(this.kn6_1, tmp$ret$0);
    } else {
      this.jn6_1.sn6(this.kn6_1);
    }
  }
}
class MapRepeatedEncoder extends ObjectEncoder {
  constructor(proto, parentTag, parentWriter, descriptor) {
    super(proto, parentTag, parentWriter, VOID, descriptor);
  }
  n1k(_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits = false ? 4294967296n : 0n;
      var oneOfBits = false ? 68719476736n : 0n;
      var unknownBits = false ? 137438953472n : 0n;
      tmp = packedBits | oneOfBits | get_integerType(this.in6_1).rmy_1 | fromInt(1) | unknownBits;
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits_0 = false ? 4294967296n : 0n;
      var oneOfBits_0 = false ? 68719476736n : 0n;
      var unknownBits_0 = false ? 137438953472n : 0n;
      tmp = packedBits_0 | oneOfBits_0 | get_integerType(this.in6_1).rmy_1 | fromInt(2) | unknownBits_0;
    }
    return tmp;
  }
}
class OneOfPolymorphicEncoder extends ProtobufEncoder {
  constructor(proto, parentWriter, descriptor) {
    super(proto, parentWriter, descriptor);
    this.rn6_1 = parentWriter;
    var tmp = descriptor.b13();
    // Inline function 'kotlin.require' call
    if (!(tmp instanceof PolymorphicKind)) {
      var message = 'The serializer of one of type ' + descriptor.c11() + ' should be using generic polymorphic serializer, but got ' + descriptor.b13().toString() + '.';
      throw IllegalArgumentException.b2(toString(message));
    }
  }
  u14(descriptor) {
    var tmp;
    if (equals(descriptor, this.ymx_1)) {
      tmp = this;
    } else {
      tmp = new OneOfElementEncoder(this.wmx_1, this.rn6_1, descriptor);
    }
    return tmp;
  }
  a16(descriptor) {
    var tmp = this.j1l();
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var this_0 = extractParameters(descriptor, 0);
    var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
    return this.dn2(overrideId(tmp, tmp$ret$0), descriptor);
  }
  pn1(tag, value) {
    if (!(tag === 19501n)) {
      super.pn1(tag, value);
    }
  }
  n1k(_this__u8e3s4, index) {
    var tmp;
    switch (index) {
      case 0:
        tmp = 19501n;
        break;
      case 1:
        tmp = extractParameters(_this__u8e3s4, index);
        break;
      default:
        throw SerializationException.v11('Unsupported index: ' + index + ' in a oneOf type ' + _this__u8e3s4.c11() + ', which should be using generic polymorphic serializer');
    }
    return tmp;
  }
}
class OneOfElementEncoder extends ProtobufEncoder {
  constructor(proto, parentWriter, descriptor) {
    super(proto, parentWriter, descriptor);
    // Inline function 'kotlin.require' call
    if (!(descriptor.d13() === 1)) {
      var message = 'Implementation of oneOf type ' + descriptor.c11() + ' should contain only 1 element, but get ' + descriptor.d13();
      throw IllegalArgumentException.b2(toString(message));
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = descriptor.g13(0);
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList.k2();
    var _iterator__ex2g4s = tmp0.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      if (element instanceof ProtoNumber) {
        destination.j2(element);
      }
    }
    var protoNumber = singleOrNull(destination);
    // Inline function 'kotlin.require' call
    if (!!(protoNumber == null)) {
      var message_0 = 'Implementation of oneOf type ' + descriptor.c11() + ' should have @ProtoNumber annotation';
      throw IllegalArgumentException.b2(toString(message_0));
    }
  }
  q16(descriptor, index) {
    return true;
  }
}
class ProtobufReader {
  constructor(input) {
    this.umz_1 = input;
    this.vmz_1 = -1;
    this.wmz_1 = ProtoWireType_INVALID_getInstance();
    this.xmz_1 = false;
    this.ymz_1 = 0;
  }
  zmz() {
    return !this.xmz_1 && this.umz_1.l8y() === 0;
  }
  ln2() {
    if (this.xmz_1) {
      this.xmz_1 = false;
      var previousHeader = this.vmz_1 << 3 | this.wmz_1.wmy_1;
      // Inline function 'kotlin.also' call
      var this_0 = updateIdAndType(this, this.ymz_1);
      this.ymz_1 = previousHeader;
      return this_0;
    }
    this.ymz_1 = this.vmz_1 << 3 | this.wmz_1.wmy_1;
    var header = convertToInt(this.umz_1.cn7(true));
    return updateIdAndType(this, header);
  }
  xn3() {
    this.xmz_1 = true;
    var nextHeader = this.vmz_1 << 3 | this.wmz_1.wmy_1;
    updateIdAndType(this, this.ymz_1);
    this.ymz_1 = nextHeader;
  }
  wn2() {
    switch (this.wmz_1.s1_1) {
      case 1:
        this.mn2(ProtoIntegerType_DEFAULT_getInstance());
        break;
      case 2:
        this.on2(ProtoIntegerType_FIXED_getInstance());
        break;
      case 3:
        this.en7();
        break;
      case 4:
        this.mn2(ProtoIntegerType_FIXED_getInstance());
        break;
      default:
        throw ProtobufDecodingException.gmz('Unsupported start group or end group wire type: ' + this.wmz_1.toString());
    }
  }
  xn2() {
    var tmp;
    switch (this.wmz_1.s1_1) {
      case 1:
        tmp = this.umz_1.fn7();
        break;
      case 2:
        tmp = this.umz_1.gn7(8);
        break;
      case 3:
        tmp = this.jn2();
        break;
      case 4:
        tmp = this.umz_1.gn7(4);
        break;
      default:
        throw ProtobufDecodingException.gmz('Unsupported start group or end group wire type: ' + this.wmz_1.toString());
    }
    return tmp;
  }
  in2() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.wmz_1.equals(expected))
      throw ProtobufDecodingException.gmz('Expected wire type ' + expected.toString() + ', but found ' + this.wmz_1.toString());
    return this.jn2();
  }
  en7() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.wmz_1.equals(expected))
      throw ProtobufDecodingException.gmz('Expected wire type ' + expected.toString() + ', but found ' + this.wmz_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    this.umz_1.hn7(length);
  }
  jn2() {
    var length = decode32(this);
    checkLength(this, length);
    return this.umz_1.gn7(length);
  }
  kn2() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.wmz_1.equals(expected))
      throw ProtobufDecodingException.gmz('Expected wire type ' + expected.toString() + ', but found ' + this.wmz_1.toString());
    return this.yn3();
  }
  yn3() {
    var length = decode32(this);
    checkLength(this, length);
    return this.umz_1.in7(length);
  }
  mn2(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i32_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.wmz_1.equals(wireType))
      throw ProtobufDecodingException.gmz('Expected wire type ' + wireType.toString() + ', but found ' + this.wmz_1.toString());
    return decode32(this, format);
  }
  nn2() {
    return decode32(this);
  }
  on2(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i64_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.wmz_1.equals(wireType))
      throw ProtobufDecodingException.gmz('Expected wire type ' + wireType.toString() + ', but found ' + this.wmz_1.toString());
    return decode64(this, format);
  }
  pn2() {
    return decode64(this, ProtoIntegerType_DEFAULT_getInstance());
  }
  qn2() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i32_getInstance();
    if (!this.wmz_1.equals(expected))
      throw ProtobufDecodingException.gmz('Expected wire type ' + expected.toString() + ', but found ' + this.wmz_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  rn2() {
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  sn2() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i64_getInstance();
    if (!this.wmz_1.equals(expected))
      throw ProtobufDecodingException.gmz('Expected wire type ' + expected.toString() + ', but found ' + this.wmz_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  tn2() {
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  un2() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.wmz_1.equals(expected))
      throw ProtobufDecodingException.gmz('Expected wire type ' + expected.toString() + ', but found ' + this.wmz_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    return this.umz_1.jn7(length);
  }
  vn2() {
    var length = decode32(this);
    checkLength(this, length);
    return this.umz_1.jn7(length);
  }
}
class NullableMode extends Enum {}
class ProtobufWriter {
  constructor(out) {
    this.fn2_1 = out;
  }
  hn2(bytes, tag) {
    encode32(this, this.fn2_1, ProtoWireType_SIZE_DELIMITED_getInstance().zmy(tag));
    this.an5(bytes);
  }
  an5(bytes) {
    encode32(this, this.fn2_1, bytes.length);
    this.fn2_1.mn7(bytes);
  }
  ln5(output, tag) {
    encode32(this, this.fn2_1, ProtoWireType_SIZE_DELIMITED_getInstance().zmy(tag));
    this.sn6(output);
  }
  sn6(output) {
    encode32(this, this.fn2_1, output.on1());
    this.fn2_1.nn7(output);
  }
  cn5(value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i32_getInstance() : ProtoWireType_VARINT_getInstance();
    encode32(this, this.fn2_1, wireType.zmy(tag));
    encode32(this, this.fn2_1, value, format);
  }
  bn5(value) {
    encode32(this, this.fn2_1, value);
  }
  dn5(value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i64_getInstance() : ProtoWireType_VARINT_getInstance();
    encode32(this, this.fn2_1, wireType.zmy(tag));
    encode64(this, this.fn2_1, value, format);
  }
  p1u(value) {
    encode64(this, this.fn2_1, value);
  }
  in5(value, tag) {
    var bytes = encodeToByteArray(value);
    this.hn2(bytes, tag);
  }
  jn5(value) {
    var bytes = encodeToByteArray(value);
    this.an5(bytes);
  }
  gn5(value, tag) {
    encode32(this, this.fn2_1, ProtoWireType_i64_getInstance().zmy(tag));
    this.fn2_1.p1u(reverseBytes_0(this, value));
  }
  hn5(value) {
    this.fn2_1.p1u(reverseBytes_0(this, value));
  }
  en5(value, tag) {
    encode32(this, this.fn2_1, ProtoWireType_i32_getInstance().zmy(tag));
    this.fn2_1.bn5(reverseBytes(this, value));
  }
  fn5(value) {
    this.fn2_1.bn5(reverseBytes(this, value));
  }
  gn2(data, tag) {
    this.fn2_1.ln7(tag);
    this.fn2_1.mn7(data);
  }
  kn5(bytes) {
    this.fn2_1.mn7(bytes);
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(65);
    while (tmp_0 < 65) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = (63 - tmp_2 | 0) / 7 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.on7_1 = tmp_1;
  }
}
class ByteArrayOutput {
  constructor() {
    Companion_getInstance_1();
    this.zmx_1 = new Int8Array(32);
    this.amy_1 = 0;
  }
  on1() {
    return this.amy_1;
  }
  b8y() {
    var newArray = new Int8Array(this.amy_1);
    var tmp0 = this.zmx_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.amy_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newArray, 0, 0, endIndex);
    return newArray;
  }
  mn7(buffer) {
    var count = buffer.length;
    if (count === 0) {
      return Unit_instance;
    }
    ensureCapacity(this, count);
    var tmp2 = this.zmx_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.amy_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = buffer;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, 0, count);
    this.amy_1 = this.amy_1 + count | 0;
  }
  nn7(output) {
    var count = output.on1();
    ensureCapacity(this, count);
    var tmp0 = output.zmx_1;
    var tmp2 = this.zmx_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.amy_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, 0, count);
    this.amy_1 = this.amy_1 + count | 0;
  }
  bn5(intValue) {
    ensureCapacity(this, 4);
    var inductionVariable = 3;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.zmx_1;
        var _unary__edvuaz = this.amy_1;
        this.amy_1 = _unary__edvuaz + 1 | 0;
        tmp[_unary__edvuaz] = toByte(intValue >> imul(i, 8));
      }
       while (0 <= inductionVariable);
  }
  p1u(longValue) {
    ensureCapacity(this, 8);
    var inductionVariable = 7;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.zmx_1;
        var _unary__edvuaz = this.amy_1;
        this.amy_1 = _unary__edvuaz + 1 | 0;
        tmp[_unary__edvuaz] = convertToByte(shiftRight(longValue, imul(i, 8)));
      }
       while (0 <= inductionVariable);
  }
  ln7(value) {
    ensureCapacity(this, 5);
    if ((value & -128) === 0) {
      var tmp = this.zmx_1;
      var _unary__edvuaz = this.amy_1;
      this.amy_1 = _unary__edvuaz + 1 | 0;
      tmp[_unary__edvuaz] = toByte(value);
      return Unit_instance;
    }
    var length = varIntLength(this, fromInt(value));
    encodeVarint(this, fromInt(value), length);
  }
  kn7(value) {
    var length = varIntLength(this, value);
    ensureCapacity(this, length + 1 | 0);
    encodeVarint(this, value, length);
  }
}
class ByteArrayInput {
  constructor(array, endIndex) {
    endIndex = endIndex === VOID ? array.length : endIndex;
    this.zn6_1 = array;
    this.an7_1 = endIndex;
    this.bn7_1 = 0;
  }
  l8y() {
    return this.an7_1 - this.bn7_1 | 0;
  }
  in7(size) {
    ensureEnoughBytes(this, size);
    var result = new ByteArrayInput(this.zn6_1, this.bn7_1 + size | 0);
    result.bn7_1 = this.bn7_1;
    this.bn7_1 = this.bn7_1 + size | 0;
    return result;
  }
  x1w() {
    var tmp;
    if (this.bn7_1 < this.an7_1) {
      var tmp_0 = this.zn6_1;
      var _unary__edvuaz = this.bn7_1;
      this.bn7_1 = _unary__edvuaz + 1 | 0;
      tmp = tmp_0[_unary__edvuaz] & 255;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  gn7(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    var b = new Int8Array(bytesCount);
    var length = b.length;
    var copied = (this.an7_1 - this.bn7_1 | 0) < length ? this.an7_1 - this.bn7_1 | 0 : length;
    var tmp0 = this.zn6_1;
    var tmp6 = this.bn7_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.bn7_1 + copied | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, b, 0, tmp6, endIndex);
    this.bn7_1 = this.bn7_1 + copied | 0;
    return b;
  }
  hn7(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    this.bn7_1 = this.bn7_1 + bytesCount | 0;
  }
  jn7(length) {
    var result = decodeToString(this.zn6_1, this.bn7_1, this.bn7_1 + length | 0);
    this.bn7_1 = this.bn7_1 + length | 0;
    return result;
  }
  dn7() {
    if (this.bn7_1 === this.an7_1) {
      eof(this);
    }
    var currentPosition = this.bn7_1;
    var tmp = this.zn6_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = tmp[_unary__edvuaz];
    if (result >= 0) {
      this.bn7_1 = currentPosition;
      return result;
    } else if ((this.an7_1 - this.bn7_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.zn6_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ tmp_1[_unary__edvuaz_0] << 7;
      if (result < 0) {
        this.bn7_1 = currentPosition;
        return result ^ -128;
      }
    }
    return readVarint32SlowPath(this);
  }
  cn7(eofAllowed) {
    if (this.bn7_1 === this.an7_1) {
      if (eofAllowed)
        return -1n;
      else {
        eof(this);
      }
    }
    var currentPosition = this.bn7_1;
    var tmp = this.zn6_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = fromInt(tmp[_unary__edvuaz]);
    if (result >= 0n) {
      this.bn7_1 = currentPosition;
      return result;
    } else if ((this.an7_1 - this.bn7_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.zn6_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ shiftLeft(fromInt(tmp_1[_unary__edvuaz_0]), 7);
      if (result < 0n) {
        this.bn7_1 = currentPosition;
        return result ^ -128n;
      }
    }
    return readVarint64SlowPath(this);
  }
  fn7() {
    var start = this.bn7_1;
    while (this.bn7_1 < this.an7_1) {
      var tmp = this.zn6_1;
      var _unary__edvuaz = this.bn7_1;
      this.bn7_1 = _unary__edvuaz + 1 | 0;
      if ((tmp[_unary__edvuaz] & 128) === 0) {
        return copyOfRange(this.zn6_1, start, this.bn7_1);
      }
    }
    throw SerializationException.v11('Input stream is malformed: Varint too long or unexpected EOF');
  }
}
//endregion
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    new Default();
  return Default_instance;
}
function ProtoBuf_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var b = new ProtoBufBuilder(from);
  builderAction(b);
  return new ProtoBufImpl(b.mmy_1, b.nmy_1);
}
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_instance;
  static_init_called = true;
  ProtoIntegerType_DEFAULT_instance = new ProtoIntegerType('DEFAULT', 0, 0n);
  ProtoIntegerType_SIGNED_instance = new ProtoIntegerType('SIGNED', 1, 8589934592n);
  ProtoIntegerType_FIXED_instance = new ProtoIntegerType('FIXED', 2, 17179869184n);
}
var ProtoIntegerType_DEFAULT_instance;
var ProtoIntegerType_SIGNED_instance;
var ProtoIntegerType_FIXED_instance;
function ProtoIntegerType_DEFAULT_getInstance() {
  static_init();
  return ProtoIntegerType_DEFAULT_instance;
}
function ProtoIntegerType_SIGNED_getInstance() {
  static_init();
  return ProtoIntegerType_SIGNED_instance;
}
function ProtoIntegerType_FIXED_getInstance() {
  static_init();
  return ProtoIntegerType_FIXED_instance;
}
var Companion_instance_0;
function Companion_getInstance() {
  if (Companion_instance_0 === VOID)
    new Companion();
  return Companion_instance_0;
}
var static_init_called_0;
function static_init_0() {
  if (static_init_called_0)
    return Unit_instance;
  static_init_called_0 = true;
  ProtoWireType_INVALID_instance = new ProtoWireType('INVALID', 0, -1);
  ProtoWireType_VARINT_instance = new ProtoWireType('VARINT', 1, 0);
  ProtoWireType_i64_instance = new ProtoWireType('i64', 2, 1);
  ProtoWireType_SIZE_DELIMITED_instance = new ProtoWireType('SIZE_DELIMITED', 3, 2);
  ProtoWireType_i32_instance = new ProtoWireType('i32', 4, 5);
  if (Companion_instance_1 === VOID) {
    Companion_instance;
    new Companion_0();
  }
}
var ProtoWireType_INVALID_instance;
var ProtoWireType_VARINT_instance;
var ProtoWireType_i64_instance;
var ProtoWireType_SIZE_DELIMITED_instance;
var ProtoWireType_i32_instance;
var Companion_instance_1;
function Companion_getInstance_0() {
  static_init_0();
  return Companion_instance_1;
}
function values() {
  static_init_0();
  return [ProtoWireType_INVALID_getInstance(), ProtoWireType_VARINT_getInstance(), ProtoWireType_i64_getInstance(), ProtoWireType_SIZE_DELIMITED_getInstance(), ProtoWireType_i32_getInstance()];
}
function get_entries() {
  static_init_0();
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var $ENTRIES;
function extractProtoId(descriptor, index, zeroBasedDefault) {
  var annotations = descriptor.g13(index);
  var result = zeroBasedDefault ? index : index + 1 | 0;
  var inductionVariable = 0;
  var last = annotations.l2() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var annotation = annotations.m2(i);
      if (annotation instanceof ProtoOneOf) {
        return -2;
      } else {
        if (annotation instanceof ProtoNumber) {
          result = annotation.omy_1;
          if (!zeroBasedDefault) {
            checkFieldNumber(result, i, descriptor);
          }
        }
      }
    }
     while (inductionVariable <= last);
  if (get_isUnknownFieldsDescriptor(descriptor.h13(index))) {
    return -3;
  }
  return result;
}
function getAllOneOfSerializerOfField(_this__u8e3s4, serializersModule) {
  var tmp0_subject = _this__u8e3s4.b13();
  var tmp;
  if (equals(tmp0_subject, OPEN_getInstance())) {
    tmp = getPolymorphicDescriptors(serializersModule, _this__u8e3s4);
  } else if (equals(tmp0_subject, SEALED_getInstance())) {
    tmp = toList(get_elementDescriptors(_this__u8e3s4.h13(1)));
  } else {
    throw IllegalArgumentException.b2('Class ' + _this__u8e3s4.c11() + ' should be abstract or sealed or interface to be used as @ProtoOneOf property.');
  }
  // Inline function 'kotlin.collections.onEach' call
  // Inline function 'kotlin.apply' call
  var this_0 = tmp;
  var _iterator__ex2g4s = this_0.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var tmp0 = element.g13(0);
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.j1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$4 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.l1();
      while (_iterator__ex2g4s_0.m1()) {
        var element_0 = _iterator__ex2g4s_0.n1();
        if (element_0 instanceof ProtoNumber) {
          tmp$ret$4 = false;
          break $l$block_0;
        }
      }
      tmp$ret$4 = true;
    }
    if (tmp$ret$4) {
      throw IllegalArgumentException.b2(element.c11() + ' implementing oneOf type ' + _this__u8e3s4.c11() + ' should have @ProtoNumber annotation in its single property.');
    }
  }
  return this_0;
}
function extractParameters(_this__u8e3s4, index) {
  var annotations = _this__u8e3s4.g13(index);
  var protoId = index + 1 | 0;
  var format = ProtoIntegerType_DEFAULT_getInstance();
  var protoPacked = false;
  var isOneOf = false;
  var inductionVariable = 0;
  var last = annotations.l2() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var annotation = annotations.m2(i);
      if (annotation instanceof ProtoNumber) {
        protoId = annotation.omy_1;
        checkFieldNumber(protoId, i, _this__u8e3s4);
      } else {
        if (annotation instanceof ProtoType) {
          format = annotation.amz_1;
        } else {
          if (annotation instanceof ProtoPacked) {
            protoPacked = true;
          } else {
            if (annotation instanceof ProtoOneOf) {
              isOneOf = true;
            }
          }
        }
      }
    }
     while (inductionVariable <= last);
  if (isOneOf) {
    protoId = index + 1 | 0;
  }
  var tmp0 = protoId;
  var tmp2 = format;
  // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
  var packedBits = protoPacked ? 4294967296n : 0n;
  var oneOfBits = isOneOf ? 68719476736n : 0n;
  var unknownBits = get_isUnknownFieldsDescriptor(_this__u8e3s4.h13(index)) ? 137438953472n : 0n;
  return packedBits | oneOfBits | tmp2.rmy_1 | fromInt(tmp0) | unknownBits;
}
function get_isPackable(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4.c13()) {
    tmp = (_this__u8e3s4.d13() === 1 && get_isPackable(_this__u8e3s4.h13(0)));
  } else {
    var tmp_0 = _this__u8e3s4.b13();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = !equals(_this__u8e3s4.b13(), STRING_getInstance());
    } else {
      tmp = false;
    }
  }
  return tmp;
}
function get_isOneOf(_this__u8e3s4) {
  return !((_this__u8e3s4 & 68719476736n) === 0n);
}
function overrideId(_this__u8e3s4, protoId) {
  return _this__u8e3s4 & 1152921500311879680n | fromInt(protoId);
}
function get_integerType(_this__u8e3s4) {
  var tmp0_subject = _this__u8e3s4 & 25769803776n;
  return tmp0_subject === ProtoIntegerType_DEFAULT_getInstance().rmy_1 ? ProtoIntegerType_DEFAULT_getInstance() : tmp0_subject === ProtoIntegerType_SIGNED_getInstance().rmy_1 ? ProtoIntegerType_SIGNED_getInstance() : ProtoIntegerType_FIXED_getInstance();
}
function get_isUnknown(_this__u8e3s4) {
  return !((_this__u8e3s4 & 137438953472n) === 0n);
}
function getActualOneOfSerializer(_this__u8e3s4, serializersModule, protoId) {
  // Inline function 'kotlin.collections.find' call
  var tmp0 = getAllOneOfSerializerOfField(_this__u8e3s4, serializersModule);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = extractParameters(element, 0);
      if (convertToInt(this_0 & 2147483647n) === protoId) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  return tmp$ret$1;
}
function get_isPacked(_this__u8e3s4) {
  return !((_this__u8e3s4 & 4294967296n) === 0n);
}
function checkFieldNumber(fieldNumber, propertyIndex, descriptor) {
  if (fieldNumber <= 0) {
    throw SerializationException.v11('' + fieldNumber + " is not allowed in ProtoNumber for property '" + descriptor.e13(propertyIndex) + "' of '" + descriptor.c11() + "', because protobuf supports field numbers in range 1..2147483647");
  }
}
function get_isUnknownFieldsDescriptor(_this__u8e3s4) {
  return equals(get_nullable(_this__u8e3s4), get_nullable(ProtoUnknownFieldHolderSerializer_getInstance().hmz_1));
}
function ProtoWireType_INVALID_getInstance() {
  static_init_0();
  return ProtoWireType_INVALID_instance;
}
function ProtoWireType_VARINT_getInstance() {
  static_init_0();
  return ProtoWireType_VARINT_instance;
}
function ProtoWireType_i64_getInstance() {
  static_init_0();
  return ProtoWireType_i64_instance;
}
function ProtoWireType_SIZE_DELIMITED_getInstance() {
  static_init_0();
  return ProtoWireType_SIZE_DELIMITED_instance;
}
function ProtoWireType_i32_getInstance() {
  static_init_0();
  return ProtoWireType_i32_instance;
}
var ProtoUnknownFieldHolderSerializer_instance;
function ProtoUnknownFieldHolderSerializer_getInstance() {
  if (ProtoUnknownFieldHolderSerializer_instance === VOID)
    new ProtoUnknownFieldHolderSerializer();
  return ProtoUnknownFieldHolderSerializer_instance;
}
function readRawFieldBytes(decoder, currentTag) {
  if (currentTag === 19500n)
    throw IllegalStateException.o('No valid proto tag while reading raw field bytes.');
  // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
  var id = convertToInt(currentTag & 2147483647n);
  var wireType = decoder.bn0();
  var valueBytes = decoder.mn0();
  var output = new ByteArrayOutput();
  var writer = new ProtobufWriter(output);
  switch (wireType.s1_1) {
    case 1:
    case 2:
    case 4:
      writer.gn2(valueBytes, wireType.zmy(id));
      break;
    case 3:
      writer.hn2(valueBytes, id);
      break;
    case 0:
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return output.b8y();
}
function asProtobufDecoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof ProtobufDecoder ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('This serializer can be used only with Protobuf format.' + ('Expected Decoder to be ProtobufDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function asProtobufDecoder_0(_this__u8e3s4) {
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof ProtobufDecoder ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('This serializer can be used only with Protobuf format.' + ('Expected Decoder to be ProtobufDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function asProtobufEncoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof ProtobufEncoder ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('This serializer can be used only with Protobuf format.' + ('Expected Encoder to be ProtobufEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function populateCacheMap($this, descriptor, elements) {
  var map = HashMap.r9(elements, 1.0);
  var mapSize = 0;
  var inductionVariable = 0;
  if (inductionVariable < elements)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var id = extractProtoId(descriptor, i, false);
      switch (id) {
        case -2:
          // Inline function 'kotlin.collections.map' call

          var this_0 = getAllOneOfSerializerOfField(descriptor.h13(i), $this.f10());
          // Inline function 'kotlin.collections.mapTo' call

          var destination = ArrayList.i2(collectionSizeOrDefault(this_0, 10));
          var _iterator__ex2g4s = this_0.l1();
          while (_iterator__ex2g4s.m1()) {
            var item = _iterator__ex2g4s.n1();
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            var this_1 = extractParameters(item, 0);
            var tmp$ret$2 = convertToInt(this_1 & 2147483647n);
            destination.j2(tmp$ret$2);
          }

          // Inline function 'kotlin.collections.forEach' call

          var _iterator__ex2g4s_0 = destination.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var element = _iterator__ex2g4s_0.n1();
            putProtoId($this, map, element, i);
          }

          mapSize = mapSize + 1 | 0;
          break;
        case -3:
          // Inline function 'kotlin.require' call

          if (!($this.jmy_1 === -1)) {
            var message = 'Only one unknown fields holder is allowed in a message, but two properties have ProtoUnknownFieldHolder type: ' + descriptor.e13(i) + ' and ' + descriptor.e13($this.jmy_1);
            throw IllegalArgumentException.b2(toString(message));
          }

          mapSize = mapSize + 1 | 0;
          $this.jmy_1 = i;
          break;
        default:
          putProtoId($this, map, id, i);
          break;
      }
    }
     while (inductionVariable < elements);
  if (mapSize > 0) {
    $this.imy_1 = HashMap.r9(mapSize, 1.0);
  }
  $this.hmy_1 = map;
}
function putProtoId($this, $receiver, protoId, index) {
  $receiver.u4(protoId, index);
}
function getIndexByNum($this, protoNum) {
  var array = $this.gmy_1;
  if (!(array == null)) {
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 <= protoNum ? protoNum <= (array.length - 1 | 0) : false) {
      tmp = array[protoNum];
    } else {
      tmp = -1;
    }
    return tmp;
  }
  return getIndexByNumSlowPath($this, protoNum);
}
function getIndexByNumSlowPath($this, protoTag) {
  // Inline function 'kotlin.collections.getOrElse' call
  var tmp0_elvis_lhs = ensureNotNull($this.hmy_1).j4(protoTag);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    tmp = $this.jmy_1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function findIndexByTag($this, descriptor, protoTag) {
  if (protoTag < descriptor.d13() && protoTag >= 0) {
    var protoId = extractProtoId(descriptor, protoTag, true);
    if (protoId === protoTag)
      return protoTag;
  }
  return findIndexByTagSlowPath($this, descriptor, protoTag);
}
function findIndexByTagSlowPath($this, desc, protoTag) {
  var inductionVariable = 0;
  var last = desc.d13();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var protoId = extractProtoId(desc, i, true);
      if (protoId === protoTag)
        return i;
    }
     while (inductionVariable < last);
  throw ProtobufDecodingException.gmz('' + protoTag + ' is not among valid ' + $this.fmy_1.c11() + ' enum proto numbers');
}
function deserializeByteArray($this, previousValue) {
  var tag = $this.tn0();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
    try {
      var tmp;
      if (tag === 19500n) {
        tmp = $this.emy_1.jn2();
      } else {
        tmp = $this.emy_1.in2();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var tmp$ret$3 = convertToInt(tag & 2147483647n);
        throw ProtobufDecodingException.gmz('Error while decoding proto number ' + tmp$ret$3 + ' of ' + $this.fmy_1.c11(), e);
      } else {
        throw $p;
      }
    }
  }
  var array = tmp$ret$0;
  var tmp_0;
  if (previousValue == null) {
    tmp_0 = array;
  } else {
    // Inline function 'kotlin.collections.plus' call
    tmp_0 = primitiveArrayConcat([previousValue, array]);
  }
  return tmp_0;
}
function deserializeMap($this, deserializer, previousValue) {
  var serializer = deserializer instanceof MapLikeSerializer ? deserializer : THROW_CCE();
  var mapEntrySerial = MapEntrySerializer(serializer.h18_1, serializer.i18_1);
  var tmp0_safe_receiver = (!(previousValue == null) ? isInterface(previousValue, KtMap) : false) ? previousValue : null;
  var oldSet = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3();
  var tmp = SetSerializer(mapEntrySerial);
  var setOfEntries = (tmp instanceof AbstractCollectionSerializer ? tmp : THROW_CCE()).n18($this, oldSet);
  // Inline function 'kotlin.collections.associateBy' call
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(setOfEntries, 10)), 16);
  // Inline function 'kotlin.collections.associateByTo' call
  var destination = LinkedHashMap.sc(capacity);
  var _iterator__ex2g4s = setOfEntries.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var tmp_0 = element.c3();
    var tmp$ret$3 = element.d3();
    destination.u4(tmp_0, tmp$ret$3);
  }
  return destination;
}
function readIfAbsent($this, descriptor, index) {
  if (!descriptor.i13(index)) {
    var elementDescriptor = descriptor.h13(index);
    var kind = elementDescriptor.b13();
    if (equals(kind, MAP_getInstance()) || equals(kind, LIST_getInstance())) {
      $this.kmy_1 = false;
      return true;
    } else if (elementDescriptor.o12()) {
      $this.kmy_1 = true;
      return true;
    }
  }
  return false;
}
function decodeUnknownFields($this, previous) {
  // Inline function 'kotlin.require' call
  if (!!($this.tn0() === 19500n)) {
    var message = 'Cannot deserialize directly to kotlinx.serialization.protobuf.ProtoUnknownFieldHolder.';
    throw IllegalArgumentException.b2(toString(message));
  }
  var tmp0_safe_receiver = $this.imy_1;
  var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j4($this.jmy_1);
  var tmp;
  if (tmp1_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = overrideId($this.sn0(), tmp1_safe_receiver);
  }
  var tmp2_elvis_lhs = tmp;
  var restoredTag = tmp2_elvis_lhs == null ? $this.sn0() : tmp2_elvis_lhs;
  var rawFieldBytes = readRawFieldBytes($this, restoredTag);
  var tmp4_safe_receiver = previous == null ? null : previous.tmy_1;
  var tmp_0;
  if (tmp4_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.plus' call
    tmp_0 = primitiveArrayConcat([tmp4_safe_receiver, rawFieldBytes]);
  }
  var tmp5_elvis_lhs = tmp_0;
  var newBytes = tmp5_elvis_lhs == null ? rawFieldBytes : tmp5_elvis_lhs;
  return new ProtoUnknownFieldHolder(newBytes);
}
function ProtobufDecoder$readIfAbsent$ref(p0) {
  return constructCallableReference((p0_0, p1) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, p0_0, p1);
  }, 2, 0, 107, 'readIfAbsent', [p0]);
}
function decodeListIndexNoTag($this) {
  var size = negate($this.wn3_1);
  $this.vn3_1 = $this.vn3_1 + 1 | 0;
  var idx = $this.vn3_1;
  if (fromInt(idx) === size || $this.emy_1.zmz())
    return -1;
  return idx;
}
function decodeTaggedListIndex($this) {
  var tmp;
  if ($this.vn3_1 === -1) {
    tmp = $this.emy_1.vmz_1;
  } else {
    tmp = $this.emy_1.ln2();
  }
  var protoId = tmp;
  var tmp_0;
  // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
  var this_0 = $this.wn3_1;
  if (protoId === convertToInt(this_0 & 2147483647n)) {
    $this.vn3_1 = $this.vn3_1 + 1 | 0;
    tmp_0 = $this.vn3_1;
  } else {
    $this.emy_1.xn3();
    tmp_0 = -1;
  }
  return tmp_0;
}
function makeDelimited(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.yn3() : decoder.kn2();
  return new ProtobufReader(input);
}
function makeDelimitedForced(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.yn3() : decoder.kn2();
  return new ProtobufReader(input);
}
function serializeByteArray($this, value) {
  var tag = $this.un0();
  if (tag === 19500n) {
    $this.xmx_1.an5(value);
  } else {
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var tmp$ret$0 = convertToInt(tag & 2147483647n);
    $this.xmx_1.hn2(value, tmp$ret$0);
  }
}
function serializeUnknownFields($this, serializer, protoUnknownFieldHolder) {
  // Inline function 'kotlin.require' call
  if (!!($this.tn0() === 19500n)) {
    var message = 'Cannot serialize directly from kotlinx.serialization.protobuf.ProtoUnknownFieldHolder.';
    throw IllegalArgumentException.b2(toString(message));
  }
  serializer.h10($this, protoUnknownFieldHolder);
}
function serializeMap($this, serializer, value) {
  var casted = serializer instanceof MapLikeSerializer ? serializer : THROW_CCE();
  var mapEntrySerial = MapEntrySerializer(casted.h18_1, casted.i18_1);
  var tmp = SetSerializer(mapEntrySerial);
  tmp.h10($this, ((!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE()).b3());
}
function updateIdAndType($this, header) {
  var tmp;
  if (header === -1) {
    $this.vmz_1 = -1;
    $this.wmz_1 = ProtoWireType_INVALID_getInstance();
    tmp = -1;
  } else {
    $this.vmz_1 = header >>> 3 | 0;
    $this.wmz_1 = Companion_getInstance_0().ymy(header);
    tmp = $this.vmz_1;
  }
  return tmp;
}
function readIntLittleEndian($this) {
  var result = 0;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var byte = $this.umz_1.x1w() & 255;
      result = result | byte << imul(i, 8);
    }
     while (inductionVariable <= 3);
  return result;
}
function readLongLittleEndian($this) {
  var result = 0n;
  var inductionVariable = 0;
  if (inductionVariable <= 7)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var byte = fromInt($this.umz_1.x1w() & 255);
      result = result | shiftLeft(byte, imul(i, 8));
    }
     while (inductionVariable <= 7);
  return result;
}
function checkLength($this, length) {
  if (length < 0) {
    throw ProtobufDecodingException.gmz('Unexpected negative length: ' + length);
  }
}
function decode32($this, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  var tmp;
  switch (format.s1_1) {
    case 0:
      tmp = convertToInt($this.umz_1.cn7(false));
      break;
    case 1:
      tmp = decodeSignedVarintInt($this, $this.umz_1);
      break;
    case 2:
      tmp = readIntLittleEndian($this);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function decode64($this, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  var tmp;
  switch (format.s1_1) {
    case 0:
      tmp = $this.umz_1.cn7(false);
      break;
    case 1:
      tmp = decodeSignedVarintLong($this, $this.umz_1);
      break;
    case 2:
      tmp = readLongLittleEndian($this);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function decodeSignedVarintInt($this, input) {
  var raw = input.dn7();
  var temp = (raw << 31 >> 31 ^ raw) >> 1;
  return temp ^ raw & -2147483648;
}
function decodeSignedVarintLong($this, input) {
  var raw = input.cn7(false);
  var temp = shiftRight(shiftRight(shiftLeft(raw, 63), 63) ^ raw, 1);
  return temp ^ raw & -9223372036854775808n;
}
function expand($this) {
  $this.qn0_1 = copyOf($this.qn0_1, imul($this.qn0_1.length, 2));
}
var static_init_called_1;
function static_init_1() {
  if (static_init_called_1)
    return Unit_instance;
  static_init_called_1 = true;
  NullableMode_ACCEPTABLE_instance = new NullableMode('ACCEPTABLE', 0);
  NullableMode_OPTIONAL_instance = new NullableMode('OPTIONAL', 1);
  NullableMode_COLLECTION_instance = new NullableMode('COLLECTION', 2);
  NullableMode_LIST_ELEMENT_instance = new NullableMode('LIST_ELEMENT', 3);
  NullableMode_NOT_NULL_instance = new NullableMode('NOT_NULL', 4);
}
var NullableMode_ACCEPTABLE_instance;
var NullableMode_OPTIONAL_instance;
var NullableMode_COLLECTION_instance;
var NullableMode_LIST_ELEMENT_instance;
var NullableMode_NOT_NULL_instance;
function isMapOrList($this, $receiver) {
  return equals($receiver, MAP_getInstance()) || equals($receiver, LIST_getInstance());
}
function NullableMode_ACCEPTABLE_getInstance() {
  static_init_1();
  return NullableMode_ACCEPTABLE_instance;
}
function NullableMode_OPTIONAL_getInstance() {
  static_init_1();
  return NullableMode_OPTIONAL_instance;
}
function NullableMode_COLLECTION_getInstance() {
  static_init_1();
  return NullableMode_COLLECTION_instance;
}
function NullableMode_LIST_ELEMENT_getInstance() {
  static_init_1();
  return NullableMode_LIST_ELEMENT_instance;
}
function NullableMode_NOT_NULL_getInstance() {
  static_init_1();
  return NullableMode_NOT_NULL_instance;
}
function encode32($this, $receiver, number, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  switch (format.s1_1) {
    case 2:
      $this.fn2_1.bn5(reverseBytes_1(number));
      break;
    case 0:
      $receiver.kn7(fromInt(number));
      break;
    case 1:
      $receiver.ln7(number << 1 ^ number >> 31);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
}
function encode64($this, $receiver, number, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  switch (format.s1_1) {
    case 2:
      $this.fn2_1.p1u(reverseBytes_2(number));
      break;
    case 0:
      $receiver.kn7(number);
      break;
    case 1:
      $receiver.kn7(shiftLeft(number, 1) ^ shiftRight(number, 63));
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
}
function reverseBytes($this, $receiver) {
  return reverseBytes_1(toRawBits($receiver));
}
function reverseBytes_0($this, $receiver) {
  return reverseBytes_2(toRawBits_0($receiver));
}
var Companion_instance_2;
function Companion_getInstance_1() {
  if (Companion_instance_2 === VOID)
    new Companion_1();
  return Companion_instance_2;
}
function ensureCapacity($this, elementsToAppend) {
  if (($this.amy_1 + elementsToAppend | 0) <= $this.zmx_1.length) {
    return Unit_instance;
  }
  var newArray = new Int8Array(takeHighestOneBit($this.amy_1 + elementsToAppend | 0) << 1);
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.zmx_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, newArray, 0, 0, endIndex);
  $this.zmx_1 = newArray;
}
function encodeVarint($this, value, length) {
  var current = value;
  var inductionVariable = 0;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      $this.zmx_1[$this.amy_1 + i | 0] = convertToByte(current & 127n | 128n);
      current = shiftRightUnsigned(current, 7);
    }
     while (inductionVariable < length);
  $this.zmx_1[$this.amy_1 + length | 0] = convertToByte(current);
  $this.amy_1 = $this.amy_1 + (length + 1 | 0) | 0;
}
function varIntLength($this, value) {
  return Companion_getInstance_1().on7_1[countLeadingZeroBits(value)];
}
function ensureEnoughBytes($this, bytesCount) {
  if (bytesCount > $this.l8y()) {
    throw SerializationException.v11('Unexpected EOF, available ' + $this.l8y() + ' bytes, requested: ' + bytesCount);
  }
}
function eof($this) {
  throw SerializationException.v11('Unexpected EOF');
}
function readVarint64SlowPath($this) {
  var result = 0n;
  var shift = 0;
  while (shift < 64) {
    var byte = $this.x1w();
    result = result | shiftLeft(fromInt(byte & 127), shift);
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.v11('Input stream is malformed: Varint too long (exceeded 64 bits)');
}
function readVarint32SlowPath($this) {
  var result = 0;
  var shift = 0;
  while (shift < 32) {
    var byte = $this.x1w();
    result = result | (byte & 127) << shift;
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.v11('Input stream is malformed: Varint too long (exceeded 32 bits)');
}
function reverseBytes_1(_this__u8e3s4) {
  return reverseBytes_3(toShort(_this__u8e3s4 & 65535)) << 16 | reverseBytes_3(toShort(_this__u8e3s4 >>> 16 | 0)) & 65535;
}
function reverseBytes_2(_this__u8e3s4) {
  return shiftLeft(fromInt(reverseBytes_1(convertToInt(_this__u8e3s4 & 4294967295n))), 32) | fromInt(reverseBytes_1(convertToInt(shiftRightUnsigned(_this__u8e3s4, 32)))) & 4294967295n;
}
function reverseBytes_3(_this__u8e3s4) {
  return toShort((_this__u8e3s4 & 255) << 8 | ((_this__u8e3s4 & 65535) >>> 8 | 0));
}
//region block: post-declaration
initMetadataForClass(ProtoBuf, 'ProtoBuf', VOID, VOID, [BinaryFormat]);
initMetadataForObject(Default, 'Default');
initMetadataForClass(ProtoBufBuilder, 'ProtoBufBuilder');
initMetadataForClass(ProtoBufImpl, 'ProtoBufImpl');
initMetadataForClass(ProtoNumber, 'ProtoNumber');
initMetadataForClass(ProtoPacked, 'ProtoPacked');
initMetadataForClass(ProtoIntegerType, 'ProtoIntegerType');
initMetadataForClass(ProtoOneOf, 'ProtoOneOf');
initMetadataForClass(ProtoType, 'ProtoType');
initMetadataForCompanion(Companion);
initMetadataForClass(ProtoUnknownFieldHolder, 'ProtoUnknownFieldHolder', VOID, VOID, VOID, VOID, VOID, {0: ProtoUnknownFieldHolderSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForClass(ProtoWireType, 'ProtoWireType');
initMetadataForClass(ProtobufDecodingException, 'ProtobufDecodingException');
initMetadataForClass(ProtobufTaggedBase, 'ProtobufTaggedBase');
protoOf(ProtobufTaggedDecoder).h15 = decodeSerializableElement$default;
protoOf(ProtobufTaggedDecoder).j10 = decodeSerializableValue;
protoOf(ProtobufTaggedDecoder).j15 = decodeSequentially;
protoOf(ProtobufTaggedDecoder).l15 = decodeCollectionSize;
initMetadataForClass(ProtobufTaggedDecoder, 'ProtobufTaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForClass(ProtobufDecoder, 'ProtobufDecoder');
initMetadataForClass(PackedArrayDecoder, 'PackedArrayDecoder');
protoOf(ProtobufTaggedEncoder).o16 = encodeNotNullMark;
protoOf(ProtobufTaggedEncoder).p16 = beginCollection;
protoOf(ProtobufTaggedEncoder).g10 = encodeSerializableValue;
protoOf(ProtobufTaggedEncoder).n16 = encodeNullableSerializableValue;
protoOf(ProtobufTaggedEncoder).q16 = shouldEncodeElementDefault;
initMetadataForClass(ProtobufTaggedEncoder, 'ProtobufTaggedEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(ProtobufEncoder, 'ProtobufEncoder');
initMetadataForClass(NestedRepeatedEncoder, 'NestedRepeatedEncoder');
initMetadataForClass(PackedArrayEncoder, 'PackedArrayEncoder');
initMetadataForObject(ProtoUnknownFieldHolderSerializer, 'ProtoUnknownFieldHolderSerializer', VOID, VOID, [KSerializer]);
initMetadataForClass(MapEntryReader, 'MapEntryReader');
initMetadataForClass(RepeatedDecoder, 'RepeatedDecoder');
initMetadataForClass(OneOfPolymorphicReader, 'OneOfPolymorphicReader');
initMetadataForClass(OneOfElementReader, 'OneOfElementReader');
initMetadataForClass(RepeatedEncoder, 'RepeatedEncoder');
initMetadataForClass(ObjectEncoder, 'ObjectEncoder');
initMetadataForClass(MapRepeatedEncoder, 'MapRepeatedEncoder');
initMetadataForClass(OneOfPolymorphicEncoder, 'OneOfPolymorphicEncoder');
initMetadataForClass(OneOfElementEncoder, 'OneOfElementEncoder');
initMetadataForClass(ProtobufReader, 'ProtobufReader');
initMetadataForClass(NullableMode, 'NullableMode');
initMetadataForClass(ProtobufWriter, 'ProtobufWriter');
initMetadataForCompanion(Companion_1);
initMetadataForClass(ByteArrayOutput, 'ByteArrayOutput', ByteArrayOutput);
initMetadataForClass(ByteArrayInput, 'ByteArrayInput');
//endregion
//region block: exports
export {
  ProtoBuf_0 as ProtoBuf1o4kfvnhqrnyf,
  ProtoNumber as ProtoNumber3ejuegvjqu86s,
  ProtoPacked as ProtoPacked2as0odujpnufd,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-protobuf.mjs.map
