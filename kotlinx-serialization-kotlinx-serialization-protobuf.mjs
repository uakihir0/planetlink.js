import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  get_elementDescriptors13xxljc24xo44 as get_elementDescriptors,
  SEALED_getInstance2pc3convncp73 as SEALED_getInstance,
  getPolymorphicDescriptors28tu404k84a43 as getPolymorphicDescriptors,
  OPEN_getInstance3kjh67htd04td as OPEN_getInstance,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  STRING_getInstance1ov5zayfui8fl as STRING_getInstance,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MapLikeSerializer39txwolqjdcc2 as MapLikeSerializer,
  MapEntrySerializer3oe1sx5ozvw2u as MapEntrySerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  AbstractCollectionSerializer32faixtbm1vtg as AbstractCollectionSerializer,
  MAP_getInstance173r3f2itu405 as MAP_getInstance,
  LIST_getInstance2xmlsct1exo3w as LIST_getInstance,
  ElementMarker33ojvsajwmzts as ElementMarker,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  OBJECT_getInstance2hwgzvvdc8p80 as OBJECT_getInstance,
  CLASS_getInstance3ax1g1upf6nuo as CLASS_getInstance,
  UByteArraySerializer1sccfecbzq55o as UByteArraySerializer,
  ByteArraySerializersn06x87bo7h0 as ByteArraySerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  decodeSerializableElement$default1corlrzxybh7b as decodeSerializableElement$default,
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
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toList3jhuyej2anx2q as toList,
  equals2au1ep9vhcato as equals,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  fromInt2ii0rejb1w62w as fromInt,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  enumEntries20mr21zbe3az4 as enumEntries,
  convertToInty04h231mmjoh as convertToInt,
  toString1pkumu07cwy4m as toString,
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
  _UByteArray___get_storage__impl__d4kcttp6btvbau0f8b as _UByteArray___get_storage__impl__d4kctt,
  _UByteArray___init__impl__ip4y9n15i9if485vlfd as _UByteArray___init__impl__ip4y9n,
  isByteArray4nnzfn1x4o3w as isByteArray,
  negate13xrbakfwasjy as negate,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Char__toInt_impl_vasixd1ka89vowck9tn as Char__toInt_impl_vasixd,
  shiftLeft3tsh2sstjchzn as shiftLeft,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  shiftRight2gqph14wydb8s as shiftRight,
  FloatCompanionObject_instance1ya67s5frsek3 as FloatCompanionObject_instance,
  floatFromBits1n9d03e2m5i5s as floatFromBits,
  DoubleCompanionObject_instance2owjtjg73ep4r as DoubleCompanionObject_instance,
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
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class ProtoBuf {
  constructor(encodeDefaults, serializersModule) {
    Default_getInstance();
    this.ymq_1 = encodeDefaults;
    this.zmq_1 = serializersModule;
  }
  vz() {
    return this.zmq_1;
  }
  x10(serializer, value) {
    var output = new ByteArrayOutput();
    var encoder = new ProtobufEncoder(this, new ProtobufWriter(output), serializer.kz());
    encoder.wz(serializer, value);
    return output.u8r();
  }
  y10(deserializer, bytes) {
    var input = new ByteArrayInput(bytes);
    var decoder = new ProtobufDecoder(this, new ProtobufReader(input), deserializer.kz());
    return decoder.zz(deserializer);
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
    this.smr_1 = proto.ymq_1;
    this.tmr_1 = proto.vz();
  }
}
class ProtoBufImpl extends ProtoBuf {}
class ProtoNumber {
  constructor(number) {
    this.umr_1 = number;
  }
  equals(other) {
    if (!(other instanceof ProtoNumber))
      return false;
    var tmp0_other_with_cast = other instanceof ProtoNumber ? other : THROW_CCE();
    if (!(this.umr_1 === tmp0_other_with_cast.umr_1))
      return false;
    return true;
  }
  hashCode() {
    return imul(getStringHashCode('number'), 127) ^ this.umr_1;
  }
  toString() {
    return '@kotlinx.serialization.protobuf.ProtoNumber(' + 'number=' + this.umr_1 + ')';
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
    this.xmr_1 = signature;
  }
}
class ProtoOneOf {}
class ProtoType {}
class ProtobufDecodingException extends SerializationException {
  constructor(message, e) {
    return new.target.ems(message, e);
  }
  static ems(message, e) {
    e = e === VOID ? null : e;
    var $this = this.o11(message, e);
    captureStack($this, $this.dms_1);
    return $this;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
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
          if (element.hms_1 === tmp_2) {
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
    tmp.jms_1 = tmp_1;
  }
  kms(value) {
    return this.jms_1[value & 7];
  }
}
class ProtoWireType extends Enum {
  constructor(name, ordinal, typeId) {
    super(name, ordinal);
    this.hms_1 = typeId;
  }
  lms(tag) {
    return tag << 3 | this.hms_1;
  }
  toString() {
    return this.r1_1 + '(' + this.hms_1 + ')';
  }
}
class ProtobufTaggedBase {
  constructor() {
    this.rmt_1 = new BigInt64Array(8);
    this.smt_1 = -1;
  }
  d1k() {
    return this.rmt_1[this.smt_1];
  }
  tmt() {
    return this.smt_1 === -1 ? 19500n : this.rmt_1[this.smt_1];
  }
  umt() {
    var tmp;
    if (this.smt_1 === -1) {
      tmp = 19500n;
    } else {
      var tmp_0 = this.rmt_1;
      var _unary__edvuaz = this.smt_1;
      this.smt_1 = _unary__edvuaz - 1 | 0;
      tmp = tmp_0[_unary__edvuaz];
    }
    return tmp;
  }
  vmt(tag) {
    if (tag === 19500n)
      return Unit_instance;
    this.smt_1 = this.smt_1 + 1 | 0;
    var idx = this.smt_1;
    if (this.smt_1 >= this.rmt_1.length) {
      expand(this);
    }
    this.rmt_1[idx] = tag;
  }
  l1j() {
    if (this.smt_1 >= 0) {
      var tmp = this.rmt_1;
      var _unary__edvuaz = this.smt_1;
      this.smt_1 = _unary__edvuaz - 1 | 0;
      return tmp[_unary__edvuaz];
    }
    throw SerializationException.l11('No tag in stack for requested element');
  }
}
class ProtobufTaggedDecoder extends ProtobufTaggedBase {
  qmt(tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.vmt(tag);
    return this;
  }
  u13() {
    return true;
  }
  v13() {
    return null;
  }
  w13() {
    return this.fmt(this.umt());
  }
  x13() {
    return this.gmt(this.umt());
  }
  y13() {
    return this.hmt(this.umt());
  }
  z13() {
    return this.imt(this.umt());
  }
  a14() {
    return this.jmt(this.umt());
  }
  b14() {
    return this.kmt(this.umt());
  }
  c14() {
    return this.lmt(this.umt());
  }
  d14() {
    return this.mmt(this.umt());
  }
  e14() {
    return this.dmt(this.umt());
  }
  f14(enumDescriptor) {
    return this.nmt(this.umt(), enumDescriptor);
  }
  i14(descriptor) {
    return this;
  }
  j14(descriptor) {
  }
  k14(descriptor, index) {
    return this.fmt(this.p1i(descriptor, index));
  }
  l14(descriptor, index) {
    return this.gmt(this.p1i(descriptor, index));
  }
  m14(descriptor, index) {
    return this.hmt(this.p1i(descriptor, index));
  }
  n14(descriptor, index) {
    return this.imt(this.p1i(descriptor, index));
  }
  o14(descriptor, index) {
    return this.jmt(this.p1i(descriptor, index));
  }
  p14(descriptor, index) {
    return this.kmt(this.p1i(descriptor, index));
  }
  q14(descriptor, index) {
    return this.lmt(this.p1i(descriptor, index));
  }
  r14(descriptor, index) {
    return this.mmt(this.p1i(descriptor, index));
  }
  s14(descriptor, index) {
    return this.dmt(this.p1i(descriptor, index));
  }
  u14(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.p1i(descriptor, index);
    this.vmt(tag);
    return this.h14(deserializer, previousValue);
  }
  w14(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.p1i(descriptor, index);
    this.vmt(tag);
    var tmp;
    if (this.u13()) {
      tmp = this.h14(deserializer, previousValue);
    } else {
      tmp = this.v13();
    }
    return tmp;
  }
  g14(descriptor) {
    return this.qmt(this.umt(), descriptor);
  }
  t14(descriptor, index) {
    return this.qmt(this.p1i(descriptor, index), descriptor.x12(index));
  }
}
class ProtobufDecoder extends ProtobufTaggedDecoder {
  constructor(proto, reader, descriptor) {
    super();
    this.kmr_1 = proto;
    this.lmr_1 = reader;
    this.mmr_1 = descriptor;
    this.nmr_1 = null;
    this.omr_1 = null;
    this.pmr_1 = null;
    this.qmr_1 = false;
    var tmp = this;
    tmp.rmr_1 = new ElementMarker(this.mmr_1, ProtobufDecoder$readIfAbsent$ref(this));
    this.emt(this.mmr_1);
  }
  vz() {
    return this.kmr_1.vz();
  }
  emt(descriptor) {
    var elements = descriptor.t12();
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
          if (protoId <= elements && !(protoId === -2)) {
            cache[protoId] = i;
          } else {
            return populateCacheMap(this, descriptor, elements);
          }
        }
         while (inductionVariable < elements);
      this.nmr_1 = cache;
    } else {
      populateCacheMap(this, descriptor, elements);
    }
  }
  i14(descriptor) {
    var tmp;
    try {
      var tmp0_subject = descriptor.r12();
      var tmp_0;
      if (equals(tmp0_subject, LIST_getInstance())) {
        var tag = this.tmt();
        var tmp_1;
        if (equals(this.mmr_1.r12(), LIST_getInstance()) && !(tag === 19500n) && !equals(this.mmr_1, descriptor)) {
          var reader = makeDelimited(this.lmr_1, tag);
          reader.gmv();
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
          var packedBits = false ? 4294967296n : 0n;
          var oneOfBits = false ? 68719476736n : 0n;
          var tmp$ret$0 = packedBits | oneOfBits | ProtoIntegerType_DEFAULT_getInstance().xmr_1 | fromInt(1);
          tmp_1 = new RepeatedDecoder(this.kmr_1, reader, tmp$ret$0, descriptor);
        } else if (this.lmr_1.zms_1.equals(ProtoWireType_SIZE_DELIMITED_getInstance()) && get_isPackable(descriptor.x12(0))) {
          var sliceReader = new ProtobufReader(this.lmr_1.fmv());
          tmp_1 = new PackedArrayDecoder(this.kmr_1, sliceReader, descriptor);
        } else {
          tmp_1 = new RepeatedDecoder(this.kmr_1, this.lmr_1, tag, descriptor);
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
          var tag_0 = this.tmt();
          if (tag_0 === 19500n && equals(this.mmr_1, descriptor))
            return this;
          if (get_isOneOf(tag_0)) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            var rawIndex = convertToInt(tag_0 & 2147483647n) - 1 | 0;
            var tmp1_safe_receiver = this.pmr_1;
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4(rawIndex);
            var tmp_4;
            if (tmp2_safe_receiver == null) {
              tmp_4 = null;
            } else {
              // Inline function 'kotlin.let' call
              tmp_4 = overrideId(tag_0, tmp2_safe_receiver);
            }
            var tmp3_elvis_lhs = tmp_4;
            var restoredTag = tmp3_elvis_lhs == null ? tag_0 : tmp3_elvis_lhs;
            return new OneOfPolymorphicReader(this.kmr_1, this.lmr_1, restoredTag, descriptor);
          }
          return new ProtobufDecoder(this.kmr_1, makeDelimited(this.lmr_1, tag_0), descriptor);
        } else {
          if (equals(tmp0_subject, MAP_getInstance())) {
            tmp_0 = new MapEntryReader(this.kmr_1, makeDelimitedForced(this.lmr_1, this.tmt()), this.tmt(), descriptor);
          } else {
            throw SerializationException.l11('Primitives are not supported at top-level');
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var tmp_6 = descriptor.s10();
        var tmp_7 = this.mmr_1.s10();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_0 = this.tmt();
        var tmp$ret$4 = convertToInt(this_0 & 2147483647n);
        throw ProtobufDecodingException.ems('Fail to begin structure for ' + tmp_6 + ' in ' + tmp_7 + ' at proto number ' + tmp$ret$4, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  j14(descriptor) {
  }
  fmt(tag) {
    var value = this.imt(tag);
    var tmp;
    switch (value) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = true;
        break;
      default:
        throw SerializationException.l11('Unexpected boolean value: ' + value);
    }
    return tmp;
  }
  gmt(tag) {
    return toByte(this.imt(tag));
  }
  hmt(tag) {
    return toShort(this.imt(tag));
  }
  imt(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.lmr_1.imv();
        } else {
          tmp = this.lmr_1.hmv(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.ems('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.mmr_1.s10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  jmt(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.lmr_1.kmv();
        } else {
          tmp = this.lmr_1.jmv(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.ems('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.mmr_1.s10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  kmt(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.lmr_1.mmv();
        } else {
          tmp = this.lmr_1.lmv();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.ems('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.mmr_1.s10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  lmt(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.lmr_1.omv();
        } else {
          tmp = this.lmr_1.nmv();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.ems('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.mmr_1.s10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  mmt(tag) {
    return numberToChar(this.imt(tag));
  }
  dmt(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.lmr_1.qmv();
        } else {
          tmp = this.lmr_1.pmv();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.ems('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.mmr_1.s10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  nmt(tag, enumDescription) {
    return findIndexByTag(this, enumDescription, this.imt(tag));
  }
  zz(deserializer) {
    return this.h14(deserializer, null);
  }
  h14(deserializer, previousValue) {
    var tmp;
    try {
      var tmp_0;
      if (deserializer instanceof MapLikeSerializer) {
        tmp_0 = deserializeMap(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE(), previousValue);
      } else {
        if (equals(deserializer.kz(), ByteArraySerializer().kz())) {
          tmp_0 = deserializeByteArray(this, (previousValue == null ? true : isByteArray(previousValue)) ? previousValue : THROW_CCE());
        } else {
          if (equals(deserializer.kz(), UByteArraySerializer().kz())) {
            var tmp_1;
            if (previousValue == null ? true : previousValue instanceof UByteArray) {
              var tmp_2 = previousValue;
              tmp_1 = tmp_2 == null ? null : tmp_2.lx_1;
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
              tmp_0 = (deserializer instanceof AbstractCollectionSerializer ? deserializer : THROW_CCE()).d18(this, previousValue);
            } else {
              tmp_0 = deserializer.yz(this);
            }
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var currentTag = this.tmt();
        var tmp_6;
        if (!equals(this.mmr_1, deserializer.kz())) {
          var tmp_7;
          if (equals(this.mmr_1.r12(), LIST_getInstance()) && !equals(deserializer.kz().r12(), MAP_getInstance())) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding index ' + (convertToInt(currentTag & 2147483647n) - 1 | 0) + ' in repeated field of ' + deserializer.kz().s10();
          } else if (equals(this.mmr_1.r12(), MAP_getInstance())) {
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
            tmp_7 = 'Error while decoding ' + field + ' of index ' + index + ' in map field of ' + deserializer.kz().s10();
          } else {
            var tmp_9 = deserializer.kz().s10();
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding ' + tmp_9 + ' at proto number ' + convertToInt(currentTag & 2147483647n) + ' of ' + this.mmr_1.s10();
          }
          tmp_6 = tmp_7;
        } else {
          tmp_6 = 'Error while decoding ' + this.mmr_1.s10();
        }
        var msg = tmp_6;
        throw ProtobufDecodingException.ems(msg, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  p1i(_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  }
  y14(descriptor) {
    try {
      while (true) {
        var protoId = this.lmr_1.gmv();
        if (protoId === -1) {
          return this.rmr_1.q1a();
        }
        if (protoId === 0) {
          throw SerializationException.l11('0 is not allowed as the protobuf field number in ' + descriptor.s10() + ', the input bytes may have been corrupted');
        }
        var index = getIndexByNum(this, protoId);
        if (index === -1) {
          this.lmr_1.rmv();
        } else {
          if (get_isOneOf(extractParameters(descriptor, index))) {
            var tmp0_safe_receiver = this.pmr_1;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver.o4(index, protoId);
          }
          this.rmr_1.p1a(index);
          return index;
        }
      }
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        throw ProtobufDecodingException.ems('Fail to get element index for ' + descriptor.s10() + ' in ' + this.mmr_1.s10(), e);
      } else {
        throw $p;
      }
    }
  }
  u13() {
    return !this.qmr_1;
  }
}
class PackedArrayDecoder extends ProtobufDecoder {
  constructor(proto, reader, descriptor) {
    super(proto, reader, descriptor);
    this.wms_1 = 0;
  }
  p1i(_this__u8e3s4, index) {
    return 19500n;
  }
  i14(descriptor) {
    throw SerializationException.l11('Packing only supports primitive number types. The input type however was a struct: ' + toString(descriptor));
  }
  y14(descriptor) {
    if (this.lmr_1.cmt())
      return -1;
    var _unary__edvuaz = this.wms_1;
    this.wms_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  }
  dmt(tag) {
    throw SerializationException.l11('Packing only supports primitive number types. The actual reading is for string.');
  }
}
class ProtobufTaggedEncoder extends ProtobufTaggedBase {
  constructor() {
    super();
    this.bmv_1 = NullableMode_NOT_NULL_getInstance();
  }
  cmv(tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.vmt(tag);
    return this;
  }
  d15() {
    if (!this.bmv_1.equals(NullableMode_ACCEPTABLE_getInstance())) {
      var message;
      switch (this.bmv_1.s1_1) {
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
      throw SerializationException.l11(message);
    }
  }
  e15(value) {
    this.tmu(this.umt(), value);
  }
  f15(value) {
    this.rmu(this.umt(), value);
  }
  g15(value) {
    this.smu(this.umt(), value);
  }
  h15(value) {
    this.qmu(this.umt(), value);
  }
  i15(value) {
    this.vmu(this.umt(), value);
  }
  j15(value) {
    this.wmu(this.umt(), value);
  }
  k15(value) {
    this.xmu(this.umt(), value);
  }
  l15(value) {
    this.umu(this.umt(), value);
  }
  m15(value) {
    this.pmu(this.umt(), value);
  }
  n15(enumDescriptor, index) {
    return this.ymu(this.umt(), enumDescriptor, index);
  }
  j14(descriptor) {
    if (this.smt_1 >= 0) {
      this.l1j();
    }
    this.c1k(descriptor);
  }
  c1k(descriptor) {
  }
  p15(descriptor, index, value) {
    return this.tmu(this.p1i(descriptor, index), value);
  }
  q15(descriptor, index, value) {
    return this.rmu(this.p1i(descriptor, index), value);
  }
  r15(descriptor, index, value) {
    return this.smu(this.p1i(descriptor, index), value);
  }
  s15(descriptor, index, value) {
    return this.qmu(this.p1i(descriptor, index), value);
  }
  t15(descriptor, index, value) {
    return this.vmu(this.p1i(descriptor, index), value);
  }
  u15(descriptor, index, value) {
    return this.wmu(this.p1i(descriptor, index), value);
  }
  v15(descriptor, index, value) {
    return this.xmu(this.p1i(descriptor, index), value);
  }
  w15(descriptor, index, value) {
    return this.umu(this.p1i(descriptor, index), value);
  }
  x15(descriptor, index, value) {
    return this.pmu(this.p1i(descriptor, index), value);
  }
  z15(descriptor, index, serializer, value) {
    var tmp = this;
    var tmp_0;
    if (descriptor.y12(index)) {
      tmp_0 = NullableMode_OPTIONAL_getInstance();
    } else {
      var elementDescriptor = descriptor.x12(index);
      tmp_0 = !elementDescriptor.e12() ? NullableMode_NOT_NULL_getInstance() : isMapOrList(this, elementDescriptor.r12()) ? NullableMode_COLLECTION_getInstance() : equals(descriptor.r12(), LIST_getInstance()) ? NullableMode_LIST_ELEMENT_getInstance() : NullableMode_ACCEPTABLE_getInstance();
    }
    tmp.bmv_1 = tmp_0;
    this.vmt(this.p1i(descriptor, index));
    this.wz(serializer, value);
  }
  a16(descriptor, index, serializer, value) {
    var tmp = this;
    var tmp_0;
    if (descriptor.y12(index)) {
      tmp_0 = NullableMode_OPTIONAL_getInstance();
    } else {
      var elementDescriptor = descriptor.x12(index);
      tmp_0 = isMapOrList(this, elementDescriptor.r12()) ? NullableMode_COLLECTION_getInstance() : equals(descriptor.r12(), LIST_getInstance()) ? NullableMode_LIST_ELEMENT_getInstance() : NullableMode_ACCEPTABLE_getInstance();
    }
    tmp.bmv_1 = tmp_0;
    this.vmt(this.p1i(descriptor, index));
    this.b16(serializer, value);
  }
  o15(descriptor) {
    return this.cmv(this.umt(), descriptor);
  }
  y15(descriptor, index) {
    return this.cmv(this.p1i(descriptor, index), descriptor.x12(index));
  }
}
class ProtobufEncoder extends ProtobufTaggedEncoder {
  constructor(proto, writer, descriptor) {
    super();
    this.dmr_1 = proto;
    this.emr_1 = writer;
    this.fmr_1 = descriptor;
  }
  vz() {
    return this.dmr_1.vz();
  }
  e16(descriptor, index) {
    return this.dmr_1.ymq_1;
  }
  d16(descriptor, collectionSize) {
    var tmp0_subject = descriptor.r12();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tag = this.tmt();
      var tmp_0;
      if (get_isPacked(tag) && get_isPackable(descriptor.x12(0))) {
        tmp_0 = new PackedArrayEncoder(this.dmr_1, this.emr_1, this.tmt(), descriptor);
      } else {
        if (tag === 19500n) {
          this.emr_1.tmx(collectionSize);
        }
        var tmp_1;
        if (equals(this.fmr_1.r12(), LIST_getInstance()) && !(tag === 19500n) && !equals(this.fmr_1, descriptor)) {
          tmp_1 = new NestedRepeatedEncoder(this.dmr_1, this.emr_1, tag, descriptor);
        } else {
          tmp_1 = new RepeatedEncoder(this.dmr_1, this.emr_1, tag, descriptor);
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (equals(tmp0_subject, MAP_getInstance())) {
      tmp = new MapRepeatedEncoder(this.dmr_1, this.d1k(), this.emr_1, descriptor);
    } else {
      throw SerializationException.l11('This serial kind is not supported as collection: ' + toString(descriptor));
    }
    return tmp;
  }
  i14(descriptor) {
    var tmp0_subject = descriptor.r12();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tmp_0;
      if (get_isPackable(descriptor.x12(0)) && get_isPacked(this.tmt())) {
        tmp_0 = new PackedArrayEncoder(this.dmr_1, this.emr_1, this.tmt(), descriptor);
      } else {
        tmp_0 = new RepeatedEncoder(this.dmr_1, this.emr_1, this.tmt(), descriptor);
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
        var tag = this.tmt();
        var tmp_3;
        if (tag === 19500n && equals(descriptor, this.fmr_1)) {
          tmp_3 = this;
        } else if (get_isOneOf(tag)) {
          tmp_3 = new OneOfPolymorphicEncoder(this.dmr_1, this.emr_1, descriptor);
        } else {
          tmp_3 = new ObjectEncoder(this.dmr_1, this.tmt(), this.emr_1, VOID, descriptor);
        }
        tmp = tmp_3;
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp = new MapRepeatedEncoder(this.dmr_1, this.tmt(), this.emr_1, descriptor);
        } else {
          throw SerializationException.l11('This serial kind is not supported as structure: ' + toString(descriptor));
        }
      }
    }
    return tmp;
  }
  qmu(tag, value) {
    if (tag === 19500n) {
      this.emr_1.tmx(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.emr_1.umx(value, tmp$ret$0, get_integerType(tag));
    }
  }
  rmu(tag, value) {
    return this.qmu(tag, value);
  }
  smu(tag, value) {
    return this.qmu(tag, value);
  }
  tmu(tag, value) {
    return this.qmu(tag, value ? 1 : 0);
  }
  umu(tag, value) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(value);
    return this.qmu(tag, tmp$ret$0);
  }
  vmu(tag, value) {
    if (tag === 19500n) {
      this.emr_1.p1s(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.emr_1.vmx(value, tmp$ret$0, get_integerType(tag));
    }
  }
  wmu(tag, value) {
    if (tag === 19500n) {
      this.emr_1.xmx(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.emr_1.wmx(value, tmp$ret$0);
    }
  }
  xmu(tag, value) {
    if (tag === 19500n) {
      this.emr_1.zmx(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.emr_1.ymx(value, tmp$ret$0);
    }
  }
  pmu(tag, value) {
    if (tag === 19500n) {
      this.emr_1.bmy(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.emr_1.amy(value, tmp$ret$0);
    }
  }
  ymu(tag, enumDescriptor, ordinal) {
    var id = extractProtoId(enumDescriptor, ordinal, true);
    if (tag === 19500n) {
      this.emr_1.tmx(id);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.emr_1.umx(id, tmp$ret$0, ProtoIntegerType_DEFAULT_getInstance());
    }
  }
  p1i(_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  }
  wz(serializer, value) {
    var tmp;
    if (serializer instanceof MapLikeSerializer) {
      serializeMap(this, isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
      tmp = Unit_instance;
    } else {
      if (equals(serializer.kz(), ByteArraySerializer().kz())) {
        serializeByteArray(this, (!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE());
        tmp = Unit_instance;
      } else {
        if (equals(serializer.kz(), UByteArraySerializer().kz())) {
          // Inline function 'kotlin.collections.asByteArray' call
          var this_0 = value instanceof UByteArray ? value.lx_1 : THROW_CCE();
          var tmp$ret$0 = _UByteArray___get_storage__impl__d4kctt(this_0);
          serializeByteArray(this, tmp$ret$0);
          tmp = Unit_instance;
        } else {
          serializer.xz(this, value);
          tmp = Unit_instance;
        }
      }
    }
    return tmp;
  }
}
class NestedRepeatedEncoder extends ProtobufEncoder {
  constructor(proto, writer, curTag, descriptor, stream) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    super(proto, new ProtobufWriter(stream), descriptor);
    this.lmu_1 = writer;
    this.mmu_1 = curTag;
    this.nmu_1 = stream;
  }
  p1i(_this__u8e3s4, index) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
    var packedBits = false ? 4294967296n : 0n;
    var oneOfBits = false ? 68719476736n : 0n;
    return packedBits | oneOfBits | ProtoIntegerType_DEFAULT_getInstance().xmr_1 | fromInt(1);
  }
  c1k(descriptor) {
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var this_0 = this.mmu_1;
    var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
    this.lmu_1.cmy(this.nmu_1, tmp$ret$0);
  }
}
class PackedArrayEncoder extends NestedRepeatedEncoder {
  constructor(proto, writer, curTag, descriptor, stream) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    super(proto, writer, curTag, descriptor, stream);
  }
  p1i(_this__u8e3s4, index) {
    return 19500n;
  }
  d16(descriptor, collectionSize) {
    throw SerializationException.l11('Packing only supports primitive number types');
  }
  i14(descriptor) {
    throw SerializationException.l11('Packing only supports primitive number types');
  }
  c1k(descriptor) {
    if (this.nmu_1.omu() > 0) {
      super.c1k(descriptor);
    }
  }
  pmu(tag, value) {
    throw SerializationException.l11('Packing only supports primitive number types');
  }
}
class MapEntryReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.cmw_1 = parentTag;
  }
  p1i(_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits = false ? 4294967296n : 0n;
      var oneOfBits = false ? 68719476736n : 0n;
      tmp = packedBits | oneOfBits | get_integerType(this.cmw_1).xmr_1 | fromInt(1);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits_0 = false ? 4294967296n : 0n;
      var oneOfBits_0 = false ? 68719476736n : 0n;
      tmp = packedBits_0 | oneOfBits_0 | get_integerType(this.cmw_1).xmr_1 | fromInt(2);
    }
    return tmp;
  }
}
class RepeatedDecoder extends ProtobufDecoder {
  constructor(proto, decoder, currentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.nmw_1 = -1;
    var tmp = this;
    var tmp_0;
    if (currentTag === 19500n) {
      var length = this.lmr_1.imv();
      // Inline function 'kotlin.require' call
      if (!(length >= 0)) {
        var message = 'Expected positive length for ' + toString(descriptor) + ', but got ' + length;
        throw IllegalArgumentException.b2(toString(message));
      }
      tmp_0 = negate(fromInt(length));
    } else {
      tmp_0 = currentTag;
    }
    tmp.omw_1 = tmp_0;
  }
  y14(descriptor) {
    if (this.omw_1 > 0n) {
      return decodeTaggedListIndex(this);
    }
    return decodeListIndexNoTag(this);
  }
  p1i(_this__u8e3s4, index) {
    if (this.omw_1 > 0n)
      return this.omw_1;
    return 19500n;
  }
}
class OneOfPolymorphicReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.bmx_1 = parentTag;
    this.cmx_1 = false;
    this.dmx_1 = false;
  }
  p1i(_this__u8e3s4, index) {
    var tmp;
    if (index === 0) {
      tmp = 19501n;
    } else {
      tmp = extractParameters(_this__u8e3s4, 0);
    }
    return tmp;
  }
  i14(descriptor) {
    var tmp;
    if (equals(descriptor, this.mmr_1)) {
      tmp = this;
    } else {
      tmp = new OneOfElementReader(this.kmr_1, this.lmr_1, descriptor);
    }
    return tmp;
  }
  y14(descriptor) {
    if (!this.cmx_1) {
      this.cmx_1 = true;
      return 0;
    } else if (!this.dmx_1) {
      this.dmx_1 = true;
      return 1;
    } else {
      return -1;
    }
  }
  dmt(tag) {
    var tmp;
    if (tag === 19501n) {
      var tmp_0 = this.vz();
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = this.bmx_1;
      var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
      var tmp0_safe_receiver = getActualOneOfSerializer(this.mmr_1, tmp_0, tmp$ret$0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s10();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var tmp_2 = this.mmr_1.s10();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_1 = this.bmx_1;
        var tmp$ret$1 = convertToInt(this_1 & 2147483647n);
        throw SerializationException.l11('Cannot find a subclass of ' + tmp_2 + ' annotated with @ProtoNumber(' + tmp$ret$1 + ').');
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = super.dmt(tag);
    }
    return tmp;
  }
}
class OneOfElementReader extends ProtobufDecoder {
  constructor(proto, decoder, descriptor) {
    super(proto, decoder, descriptor);
    // Inline function 'kotlin.require' call
    if (!(descriptor.t12() === 1)) {
      var message = 'Implementation of oneOf type ' + descriptor.s10() + ' should contain only 1 element, but get ' + descriptor.t12();
      throw IllegalArgumentException.b2(toString(message));
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = descriptor.w12(0);
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
      var message_0 = 'Implementation of oneOf type ' + descriptor.s10() + ' should have @ProtoNumber annotation';
      throw IllegalArgumentException.b2(toString(message_0));
    }
    this.omx_1 = protoNumber.umr_1;
    this.pmx_1 = false;
  }
  i14(descriptor) {
    var tmp0_subject = descriptor.r12();
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
      var tag = this.tmt();
      if (tag === 19500n && equals(this.mmr_1, descriptor))
        return this;
      if (get_isOneOf(tag))
        throw SerializationException.l11('An oneof element cannot be directly child of another oneof element');
      tmp = new ProtobufDecoder(this.kmr_1, makeDelimited(this.lmr_1, tag), descriptor);
    } else {
      throw SerializationException.l11('Type ' + descriptor.r12().toString() + ' cannot be directly child of oneof element');
    }
    return tmp;
  }
  y14(descriptor) {
    var tmp;
    if (this.pmx_1) {
      tmp = -1;
    } else {
      this.pmx_1 = true;
      tmp = 0;
    }
    return tmp;
  }
}
class RepeatedEncoder extends ProtobufEncoder {
  constructor(proto, writer, curTag, descriptor) {
    super(proto, writer, descriptor);
    this.jmy_1 = curTag;
  }
  p1i(_this__u8e3s4, index) {
    return this.jmy_1;
  }
}
class ObjectEncoder extends ProtobufEncoder {
  constructor(proto, parentTag, parentWriter, stream, descriptor) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    super(proto, new ProtobufWriter(stream), descriptor);
    this.zmy_1 = parentTag;
    this.amz_1 = parentWriter;
    this.bmz_1 = stream;
  }
  c1k(descriptor) {
    if (!(this.zmy_1 === 19500n)) {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = this.zmy_1;
      var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
      this.amz_1.cmy(this.bmz_1, tmp$ret$0);
    } else {
      this.amz_1.jmz(this.bmz_1);
    }
  }
}
class MapRepeatedEncoder extends ObjectEncoder {
  constructor(proto, parentTag, parentWriter, descriptor) {
    super(proto, parentTag, parentWriter, VOID, descriptor);
  }
  p1i(_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits = false ? 4294967296n : 0n;
      var oneOfBits = false ? 68719476736n : 0n;
      tmp = packedBits | oneOfBits | get_integerType(this.zmy_1).xmr_1 | fromInt(1);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits_0 = false ? 4294967296n : 0n;
      var oneOfBits_0 = false ? 68719476736n : 0n;
      tmp = packedBits_0 | oneOfBits_0 | get_integerType(this.zmy_1).xmr_1 | fromInt(2);
    }
    return tmp;
  }
}
class OneOfPolymorphicEncoder extends ProtobufEncoder {
  constructor(proto, parentWriter, descriptor) {
    super(proto, parentWriter, descriptor);
    this.imz_1 = parentWriter;
    var tmp = descriptor.r12();
    // Inline function 'kotlin.require' call
    if (!(tmp instanceof PolymorphicKind)) {
      var message = 'The serializer of one of type ' + descriptor.s10() + ' should be using generic polymorphic serializer, but got ' + descriptor.r12().toString() + '.';
      throw IllegalArgumentException.b2(toString(message));
    }
  }
  i14(descriptor) {
    var tmp;
    if (equals(descriptor, this.fmr_1)) {
      tmp = this;
    } else {
      tmp = new OneOfElementEncoder(this.dmr_1, this.imz_1, descriptor);
    }
    return tmp;
  }
  o15(descriptor) {
    var tmp = this.l1j();
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var this_0 = extractParameters(descriptor, 0);
    var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
    return this.cmv(overrideId(tmp, tmp$ret$0), descriptor);
  }
  pmu(tag, value) {
    if (!(tag === 19501n)) {
      super.pmu(tag, value);
    }
  }
  p1i(_this__u8e3s4, index) {
    var tmp;
    switch (index) {
      case 0:
        tmp = 19501n;
        break;
      case 1:
        tmp = extractParameters(_this__u8e3s4, index);
        break;
      default:
        throw SerializationException.l11('Unsupported index: ' + index + ' in a oneOf type ' + _this__u8e3s4.s10() + ', which should be using generic polymorphic serializer');
    }
    return tmp;
  }
}
class OneOfElementEncoder extends ProtobufEncoder {
  constructor(proto, parentWriter, descriptor) {
    super(proto, parentWriter, descriptor);
    // Inline function 'kotlin.require' call
    if (!(descriptor.t12() === 1)) {
      var message = 'Implementation of oneOf type ' + descriptor.s10() + ' should contain only 1 element, but get ' + descriptor.t12();
      throw IllegalArgumentException.b2(toString(message));
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = descriptor.w12(0);
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
      var message_0 = 'Implementation of oneOf type ' + descriptor.s10() + ' should have @ProtoNumber annotation';
      throw IllegalArgumentException.b2(toString(message_0));
    }
  }
}
class ProtobufReader {
  constructor(input) {
    this.xms_1 = input;
    this.yms_1 = -1;
    this.zms_1 = ProtoWireType_INVALID_getInstance();
    this.amt_1 = false;
    this.bmt_1 = 0;
  }
  cmt() {
    return !this.amt_1 && this.xms_1.e8s() === 0;
  }
  gmv() {
    if (this.amt_1) {
      this.amt_1 = false;
      var previousHeader = this.yms_1 << 3 | this.zms_1.hms_1;
      // Inline function 'kotlin.also' call
      var this_0 = updateIdAndType(this, this.bmt_1);
      this.bmt_1 = previousHeader;
      return this_0;
    }
    this.bmt_1 = this.yms_1 << 3 | this.zms_1.hms_1;
    var header = convertToInt(this.xms_1.nmz(true));
    return updateIdAndType(this, header);
  }
  pmw() {
    this.amt_1 = true;
    var nextHeader = this.yms_1 << 3 | this.zms_1.hms_1;
    updateIdAndType(this, this.bmt_1);
    this.bmt_1 = nextHeader;
  }
  rmv() {
    switch (this.zms_1.s1_1) {
      case 1:
        this.hmv(ProtoIntegerType_DEFAULT_getInstance());
        break;
      case 2:
        this.jmv(ProtoIntegerType_FIXED_getInstance());
        break;
      case 3:
        this.pmz();
        break;
      case 4:
        this.hmv(ProtoIntegerType_FIXED_getInstance());
        break;
      default:
        throw ProtobufDecodingException.ems('Unsupported start group or end group wire type: ' + this.zms_1.toString());
    }
  }
  dmv() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.zms_1.equals(expected))
      throw ProtobufDecodingException.ems('Expected wire type ' + expected.toString() + ', but found ' + this.zms_1.toString());
    return this.emv();
  }
  pmz() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.zms_1.equals(expected))
      throw ProtobufDecodingException.ems('Expected wire type ' + expected.toString() + ', but found ' + this.zms_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    this.xms_1.qmz(length);
  }
  emv() {
    var length = decode32(this);
    checkLength(this, length);
    return this.xms_1.rmz(length);
  }
  fmv() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.zms_1.equals(expected))
      throw ProtobufDecodingException.ems('Expected wire type ' + expected.toString() + ', but found ' + this.zms_1.toString());
    return this.qmw();
  }
  qmw() {
    var length = decode32(this);
    checkLength(this, length);
    return this.xms_1.smz(length);
  }
  hmv(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i32_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.zms_1.equals(wireType))
      throw ProtobufDecodingException.ems('Expected wire type ' + wireType.toString() + ', but found ' + this.zms_1.toString());
    return decode32(this, format);
  }
  imv() {
    return decode32(this);
  }
  jmv(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i64_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.zms_1.equals(wireType))
      throw ProtobufDecodingException.ems('Expected wire type ' + wireType.toString() + ', but found ' + this.zms_1.toString());
    return decode64(this, format);
  }
  kmv() {
    return decode64(this, ProtoIntegerType_DEFAULT_getInstance());
  }
  lmv() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i32_getInstance();
    if (!this.zms_1.equals(expected))
      throw ProtobufDecodingException.ems('Expected wire type ' + expected.toString() + ', but found ' + this.zms_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  mmv() {
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  nmv() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i64_getInstance();
    if (!this.zms_1.equals(expected))
      throw ProtobufDecodingException.ems('Expected wire type ' + expected.toString() + ', but found ' + this.zms_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  omv() {
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  pmv() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.zms_1.equals(expected))
      throw ProtobufDecodingException.ems('Expected wire type ' + expected.toString() + ', but found ' + this.zms_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    return this.xms_1.tmz(length);
  }
  qmv() {
    var length = decode32(this);
    checkLength(this, length);
    return this.xms_1.tmz(length);
  }
}
class NullableMode extends Enum {}
class ProtobufWriter {
  constructor(out) {
    this.qmx_1 = out;
  }
  rmx(bytes, tag) {
    encode32(this, this.qmx_1, ProtoWireType_SIZE_DELIMITED_getInstance().lms(tag));
    this.smx(bytes);
  }
  smx(bytes) {
    encode32(this, this.qmx_1, bytes.length);
    this.qmx_1.wmz(bytes);
  }
  cmy(output, tag) {
    encode32(this, this.qmx_1, ProtoWireType_SIZE_DELIMITED_getInstance().lms(tag));
    this.jmz(output);
  }
  jmz(output) {
    encode32(this, this.qmx_1, output.omu());
    this.qmx_1.xmz(output);
  }
  umx(value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i32_getInstance() : ProtoWireType_VARINT_getInstance();
    encode32(this, this.qmx_1, wireType.lms(tag));
    encode32(this, this.qmx_1, value, format);
  }
  tmx(value) {
    encode32(this, this.qmx_1, value);
  }
  vmx(value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i64_getInstance() : ProtoWireType_VARINT_getInstance();
    encode32(this, this.qmx_1, wireType.lms(tag));
    encode64(this, this.qmx_1, value, format);
  }
  p1s(value) {
    encode64(this, this.qmx_1, value);
  }
  amy(value, tag) {
    var bytes = encodeToByteArray(value);
    this.rmx(bytes, tag);
  }
  bmy(value) {
    var bytes = encodeToByteArray(value);
    this.smx(bytes);
  }
  ymx(value, tag) {
    encode32(this, this.qmx_1, ProtoWireType_i64_getInstance().lms(tag));
    this.qmx_1.p1s(reverseBytes_0(this, value));
  }
  zmx(value) {
    this.qmx_1.p1s(reverseBytes_0(this, value));
  }
  wmx(value, tag) {
    encode32(this, this.qmx_1, ProtoWireType_i32_getInstance().lms(tag));
    this.qmx_1.tmx(reverseBytes(this, value));
  }
  xmx(value) {
    this.qmx_1.tmx(reverseBytes(this, value));
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(65);
    while (tmp_0 < 65) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = (63 - tmp_2 | 0) / 7 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ymz_1 = tmp_1;
  }
}
class ByteArrayOutput {
  constructor() {
    Companion_getInstance_0();
    this.gmr_1 = new Int8Array(32);
    this.hmr_1 = 0;
  }
  omu() {
    return this.hmr_1;
  }
  u8r() {
    var newArray = new Int8Array(this.hmr_1);
    var tmp0 = this.gmr_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.hmr_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newArray, 0, 0, endIndex);
    return newArray;
  }
  wmz(buffer) {
    var count = buffer.length;
    if (count === 0) {
      return Unit_instance;
    }
    ensureCapacity(this, count);
    var tmp2 = this.gmr_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.hmr_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = buffer;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, 0, count);
    this.hmr_1 = this.hmr_1 + count | 0;
  }
  xmz(output) {
    var count = output.omu();
    ensureCapacity(this, count);
    var tmp0 = output.gmr_1;
    var tmp2 = this.gmr_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.hmr_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, 0, count);
    this.hmr_1 = this.hmr_1 + count | 0;
  }
  tmx(intValue) {
    ensureCapacity(this, 4);
    var inductionVariable = 3;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.gmr_1;
        var _unary__edvuaz = this.hmr_1;
        this.hmr_1 = _unary__edvuaz + 1 | 0;
        tmp[_unary__edvuaz] = toByte(intValue >> imul(i, 8));
      }
       while (0 <= inductionVariable);
  }
  p1s(longValue) {
    ensureCapacity(this, 8);
    var inductionVariable = 7;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.gmr_1;
        var _unary__edvuaz = this.hmr_1;
        this.hmr_1 = _unary__edvuaz + 1 | 0;
        tmp[_unary__edvuaz] = convertToByte(shiftRight(longValue, imul(i, 8)));
      }
       while (0 <= inductionVariable);
  }
  vmz(value) {
    ensureCapacity(this, 5);
    if ((value & -128) === 0) {
      var tmp = this.gmr_1;
      var _unary__edvuaz = this.hmr_1;
      this.hmr_1 = _unary__edvuaz + 1 | 0;
      tmp[_unary__edvuaz] = toByte(value);
      return Unit_instance;
    }
    var length = varIntLength(this, fromInt(value));
    encodeVarint(this, fromInt(value), length);
  }
  umz(value) {
    var length = varIntLength(this, value);
    ensureCapacity(this, length + 1 | 0);
    encodeVarint(this, value, length);
  }
}
class ByteArrayInput {
  constructor(array, endIndex) {
    endIndex = endIndex === VOID ? array.length : endIndex;
    this.kmz_1 = array;
    this.lmz_1 = endIndex;
    this.mmz_1 = 0;
  }
  e8s() {
    return this.lmz_1 - this.mmz_1 | 0;
  }
  smz(size) {
    ensureEnoughBytes(this, size);
    var result = new ByteArrayInput(this.kmz_1, this.mmz_1 + size | 0);
    result.mmz_1 = this.mmz_1;
    this.mmz_1 = this.mmz_1 + size | 0;
    return result;
  }
  u1u() {
    var tmp;
    if (this.mmz_1 < this.lmz_1) {
      var tmp_0 = this.kmz_1;
      var _unary__edvuaz = this.mmz_1;
      this.mmz_1 = _unary__edvuaz + 1 | 0;
      tmp = tmp_0[_unary__edvuaz] & 255;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  rmz(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    var b = new Int8Array(bytesCount);
    var length = b.length;
    var copied = (this.lmz_1 - this.mmz_1 | 0) < length ? this.lmz_1 - this.mmz_1 | 0 : length;
    var tmp0 = this.kmz_1;
    var tmp6 = this.mmz_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.mmz_1 + copied | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, b, 0, tmp6, endIndex);
    this.mmz_1 = this.mmz_1 + copied | 0;
    return b;
  }
  qmz(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    this.mmz_1 = this.mmz_1 + bytesCount | 0;
  }
  tmz(length) {
    var result = decodeToString(this.kmz_1, this.mmz_1, this.mmz_1 + length | 0);
    this.mmz_1 = this.mmz_1 + length | 0;
    return result;
  }
  omz() {
    if (this.mmz_1 === this.lmz_1) {
      eof(this);
    }
    var currentPosition = this.mmz_1;
    var tmp = this.kmz_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = tmp[_unary__edvuaz];
    if (result >= 0) {
      this.mmz_1 = currentPosition;
      return result;
    } else if ((this.lmz_1 - this.mmz_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.kmz_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ tmp_1[_unary__edvuaz_0] << 7;
      if (result < 0) {
        this.mmz_1 = currentPosition;
        return result ^ -128;
      }
    }
    return readVarint32SlowPath(this);
  }
  nmz(eofAllowed) {
    if (this.mmz_1 === this.lmz_1) {
      if (eofAllowed)
        return -1n;
      else {
        eof(this);
      }
    }
    var currentPosition = this.mmz_1;
    var tmp = this.kmz_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = fromInt(tmp[_unary__edvuaz]);
    if (result >= 0n) {
      this.mmz_1 = currentPosition;
      return result;
    } else if ((this.lmz_1 - this.mmz_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.kmz_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ shiftLeft(fromInt(tmp_1[_unary__edvuaz_0]), 7);
      if (result < 0n) {
        this.mmz_1 = currentPosition;
        return result ^ -128n;
      }
    }
    return readVarint64SlowPath(this);
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
  return new ProtoBufImpl(b.smr_1, b.tmr_1);
}
var ProtoIntegerType_DEFAULT_instance;
var ProtoIntegerType_SIGNED_instance;
var ProtoIntegerType_FIXED_instance;
var ProtoIntegerType_entriesInitialized;
function ProtoIntegerType_initEntries() {
  if (ProtoIntegerType_entriesInitialized)
    return Unit_instance;
  ProtoIntegerType_entriesInitialized = true;
  ProtoIntegerType_DEFAULT_instance = new ProtoIntegerType('DEFAULT', 0, 0n);
  ProtoIntegerType_SIGNED_instance = new ProtoIntegerType('SIGNED', 1, 8589934592n);
  ProtoIntegerType_FIXED_instance = new ProtoIntegerType('FIXED', 2, 17179869184n);
}
function ProtoIntegerType_DEFAULT_getInstance() {
  ProtoIntegerType_initEntries();
  return ProtoIntegerType_DEFAULT_instance;
}
function ProtoIntegerType_SIGNED_getInstance() {
  ProtoIntegerType_initEntries();
  return ProtoIntegerType_SIGNED_instance;
}
function ProtoIntegerType_FIXED_getInstance() {
  ProtoIntegerType_initEntries();
  return ProtoIntegerType_FIXED_instance;
}
function extractProtoId(descriptor, index, zeroBasedDefault) {
  var annotations = descriptor.w12(index);
  var result = zeroBasedDefault ? index : index + 1 | 0;
  var inductionVariable = 0;
  var last = annotations.l2() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var annotation = annotations.n2(i);
      if (annotation instanceof ProtoOneOf) {
        return -2;
      } else {
        if (annotation instanceof ProtoNumber) {
          result = annotation.umr_1;
          if (!zeroBasedDefault) {
            checkFieldNumber(result, i, descriptor);
          }
        }
      }
    }
     while (inductionVariable <= last);
  return result;
}
function getAllOneOfSerializerOfField(_this__u8e3s4, serializersModule) {
  var tmp0_subject = _this__u8e3s4.r12();
  var tmp;
  if (equals(tmp0_subject, OPEN_getInstance())) {
    tmp = getPolymorphicDescriptors(serializersModule, _this__u8e3s4);
  } else if (equals(tmp0_subject, SEALED_getInstance())) {
    tmp = toList(get_elementDescriptors(_this__u8e3s4.x12(1)));
  } else {
    throw IllegalArgumentException.b2('Class ' + _this__u8e3s4.s10() + ' should be abstract or sealed or interface to be used as @ProtoOneOf property.');
  }
  // Inline function 'kotlin.collections.onEach' call
  // Inline function 'kotlin.apply' call
  var this_0 = tmp;
  var _iterator__ex2g4s = this_0.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var tmp0 = element.w12(0);
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
      throw IllegalArgumentException.b2(element.s10() + ' implementing oneOf type ' + _this__u8e3s4.s10() + ' should have @ProtoNumber annotation in its single property.');
    }
  }
  return this_0;
}
function extractParameters(_this__u8e3s4, index) {
  var annotations = _this__u8e3s4.w12(index);
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
      var annotation = annotations.n2(i);
      if (annotation instanceof ProtoNumber) {
        protoId = annotation.umr_1;
        checkFieldNumber(protoId, i, _this__u8e3s4);
      } else {
        if (annotation instanceof ProtoType) {
          format = annotation.ymr_1;
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
  // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
  var packedBits = protoPacked ? 4294967296n : 0n;
  var oneOfBits = isOneOf ? 68719476736n : 0n;
  return packedBits | oneOfBits | format.xmr_1 | fromInt(tmp0);
}
var ProtoWireType_INVALID_instance;
var ProtoWireType_VARINT_instance;
var ProtoWireType_i64_instance;
var ProtoWireType_SIZE_DELIMITED_instance;
var ProtoWireType_i32_instance;
var Companion_instance;
function Companion_getInstance() {
  ProtoWireType_initEntries();
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function values() {
  return [ProtoWireType_INVALID_getInstance(), ProtoWireType_VARINT_getInstance(), ProtoWireType_i64_getInstance(), ProtoWireType_SIZE_DELIMITED_getInstance(), ProtoWireType_i32_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var ProtoWireType_entriesInitialized;
function ProtoWireType_initEntries() {
  if (ProtoWireType_entriesInitialized)
    return Unit_instance;
  ProtoWireType_entriesInitialized = true;
  ProtoWireType_INVALID_instance = new ProtoWireType('INVALID', 0, -1);
  ProtoWireType_VARINT_instance = new ProtoWireType('VARINT', 1, 0);
  ProtoWireType_i64_instance = new ProtoWireType('i64', 2, 1);
  ProtoWireType_SIZE_DELIMITED_instance = new ProtoWireType('SIZE_DELIMITED', 3, 2);
  ProtoWireType_i32_instance = new ProtoWireType('i32', 4, 5);
  Companion_getInstance();
}
var $ENTRIES;
function get_isPackable(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4.s12()) {
    tmp = (_this__u8e3s4.t12() === 1 && get_isPackable(_this__u8e3s4.x12(0)));
  } else {
    var tmp_0 = _this__u8e3s4.r12();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = !equals(_this__u8e3s4.r12(), STRING_getInstance());
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
  return tmp0_subject === ProtoIntegerType_DEFAULT_getInstance().xmr_1 ? ProtoIntegerType_DEFAULT_getInstance() : tmp0_subject === ProtoIntegerType_SIGNED_getInstance().xmr_1 ? ProtoIntegerType_SIGNED_getInstance() : ProtoIntegerType_FIXED_getInstance();
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
    throw SerializationException.l11('' + fieldNumber + " is not allowed in ProtoNumber for property '" + descriptor.u12(propertyIndex) + "' of '" + descriptor.s10() + "', because protobuf supports field numbers in range 1..2147483647");
  }
}
function ProtoWireType_INVALID_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_INVALID_instance;
}
function ProtoWireType_VARINT_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_VARINT_instance;
}
function ProtoWireType_i64_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_i64_instance;
}
function ProtoWireType_SIZE_DELIMITED_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_SIZE_DELIMITED_instance;
}
function ProtoWireType_i32_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_i32_instance;
}
function populateCacheMap($this, descriptor, elements) {
  var map = HashMap.q9(elements, 1.0);
  var oneOfCount = 0;
  var inductionVariable = 0;
  if (inductionVariable < elements)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var id = extractProtoId(descriptor, i, false);
      if (id === -2) {
        // Inline function 'kotlin.collections.map' call
        var this_0 = getAllOneOfSerializerOfField(descriptor.x12(i), $this.vz());
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
        oneOfCount = oneOfCount + 1 | 0;
      } else {
        putProtoId($this, map, extractProtoId(descriptor, i, false), i);
      }
    }
     while (inductionVariable < elements);
  if (oneOfCount > 0) {
    $this.pmr_1 = HashMap.q9(oneOfCount, 1.0);
  }
  $this.omr_1 = map;
}
function putProtoId($this, $receiver, protoId, index) {
  $receiver.o4(protoId, index);
}
function getIndexByNum($this, protoNum) {
  var array = $this.nmr_1;
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
  var tmp0_elvis_lhs = ensureNotNull($this.omr_1).v4(protoTag);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    tmp = -1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function findIndexByTag($this, descriptor, protoTag) {
  if (protoTag < descriptor.t12() && protoTag >= 0) {
    var protoId = extractProtoId(descriptor, protoTag, true);
    if (protoId === protoTag)
      return protoTag;
  }
  return findIndexByTagSlowPath($this, descriptor, protoTag);
}
function findIndexByTagSlowPath($this, desc, protoTag) {
  var inductionVariable = 0;
  var last = desc.t12();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var protoId = extractProtoId(desc, i, true);
      if (protoId === protoTag)
        return i;
    }
     while (inductionVariable < last);
  throw ProtobufDecodingException.ems('' + protoTag + ' is not among valid ' + $this.mmr_1.s10() + ' enum proto numbers');
}
function deserializeByteArray($this, previousValue) {
  var tag = $this.tmt();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
    try {
      var tmp;
      if (tag === 19500n) {
        tmp = $this.lmr_1.emv();
      } else {
        tmp = $this.lmr_1.dmv();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var tmp$ret$3 = convertToInt(tag & 2147483647n);
        throw ProtobufDecodingException.ems('Error while decoding proto number ' + tmp$ret$3 + ' of ' + $this.mmr_1.s10(), e);
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
  var mapEntrySerial = MapEntrySerializer(serializer.x17_1, serializer.y17_1);
  var tmp0_safe_receiver = (!(previousValue == null) ? isInterface(previousValue, KtMap) : false) ? previousValue : null;
  var oldSet = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3();
  var tmp = SetSerializer(mapEntrySerial);
  var setOfEntries = (tmp instanceof AbstractCollectionSerializer ? tmp : THROW_CCE()).d18($this, oldSet);
  // Inline function 'kotlin.collections.associateBy' call
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(setOfEntries, 10)), 16);
  // Inline function 'kotlin.collections.associateByTo' call
  var destination = LinkedHashMap.rc(capacity);
  var _iterator__ex2g4s = setOfEntries.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var tmp_0 = element.c3();
    var tmp$ret$3 = element.d3();
    destination.o4(tmp_0, tmp$ret$3);
  }
  return destination;
}
function readIfAbsent($this, descriptor, index) {
  if (!descriptor.y12(index)) {
    var elementDescriptor = descriptor.x12(index);
    var kind = elementDescriptor.r12();
    if (equals(kind, MAP_getInstance()) || equals(kind, LIST_getInstance())) {
      $this.qmr_1 = false;
      return true;
    } else if (elementDescriptor.e12()) {
      $this.qmr_1 = true;
      return true;
    }
  }
  return false;
}
function ProtobufDecoder$readIfAbsent$ref(p0) {
  return constructCallableReference((p0_0, p1) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, p0_0, p1);
  }, 2, 0, 104, 'readIfAbsent', [p0]);
}
function decodeListIndexNoTag($this) {
  var size = negate($this.omw_1);
  $this.nmw_1 = $this.nmw_1 + 1 | 0;
  var idx = $this.nmw_1;
  if (fromInt(idx) === size || $this.lmr_1.cmt())
    return -1;
  return idx;
}
function decodeTaggedListIndex($this) {
  var tmp;
  if ($this.nmw_1 === -1) {
    tmp = $this.lmr_1.yms_1;
  } else {
    tmp = $this.lmr_1.gmv();
  }
  var protoId = tmp;
  var tmp_0;
  // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
  var this_0 = $this.omw_1;
  if (protoId === convertToInt(this_0 & 2147483647n)) {
    $this.nmw_1 = $this.nmw_1 + 1 | 0;
    tmp_0 = $this.nmw_1;
  } else {
    $this.lmr_1.pmw();
    tmp_0 = -1;
  }
  return tmp_0;
}
function makeDelimited(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.qmw() : decoder.fmv();
  return new ProtobufReader(input);
}
function makeDelimitedForced(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.qmw() : decoder.fmv();
  return new ProtobufReader(input);
}
function serializeByteArray($this, value) {
  var tag = $this.umt();
  if (tag === 19500n) {
    $this.emr_1.smx(value);
  } else {
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var tmp$ret$0 = convertToInt(tag & 2147483647n);
    $this.emr_1.rmx(value, tmp$ret$0);
  }
}
function serializeMap($this, serializer, value) {
  var casted = serializer instanceof MapLikeSerializer ? serializer : THROW_CCE();
  var mapEntrySerial = MapEntrySerializer(casted.x17_1, casted.y17_1);
  var tmp = SetSerializer(mapEntrySerial);
  tmp.xz($this, ((!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE()).b3());
}
function updateIdAndType($this, header) {
  var tmp;
  if (header === -1) {
    $this.yms_1 = -1;
    $this.zms_1 = ProtoWireType_INVALID_getInstance();
    tmp = -1;
  } else {
    $this.yms_1 = header >>> 3 | 0;
    $this.zms_1 = Companion_getInstance().kms(header);
    tmp = $this.yms_1;
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
      var byte = $this.xms_1.u1u() & 255;
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
      var byte = fromInt($this.xms_1.u1u() & 255);
      result = result | shiftLeft(byte, imul(i, 8));
    }
     while (inductionVariable <= 7);
  return result;
}
function checkLength($this, length) {
  if (length < 0) {
    throw ProtobufDecodingException.ems('Unexpected negative length: ' + length);
  }
}
function decode32($this, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  var tmp;
  switch (format.s1_1) {
    case 0:
      tmp = convertToInt($this.xms_1.nmz(false));
      break;
    case 1:
      tmp = decodeSignedVarintInt($this, $this.xms_1);
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
      tmp = $this.xms_1.nmz(false);
      break;
    case 1:
      tmp = decodeSignedVarintLong($this, $this.xms_1);
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
  var raw = input.omz();
  var temp = (raw << 31 >> 31 ^ raw) >> 1;
  return temp ^ raw & -2147483648;
}
function decodeSignedVarintLong($this, input) {
  var raw = input.nmz(false);
  var temp = shiftRight(shiftRight(shiftLeft(raw, 63), 63) ^ raw, 1);
  return temp ^ raw & -9223372036854775808n;
}
function expand($this) {
  $this.rmt_1 = copyOf($this.rmt_1, imul($this.rmt_1.length, 2));
}
var NullableMode_ACCEPTABLE_instance;
var NullableMode_OPTIONAL_instance;
var NullableMode_COLLECTION_instance;
var NullableMode_LIST_ELEMENT_instance;
var NullableMode_NOT_NULL_instance;
var NullableMode_entriesInitialized;
function NullableMode_initEntries() {
  if (NullableMode_entriesInitialized)
    return Unit_instance;
  NullableMode_entriesInitialized = true;
  NullableMode_ACCEPTABLE_instance = new NullableMode('ACCEPTABLE', 0);
  NullableMode_OPTIONAL_instance = new NullableMode('OPTIONAL', 1);
  NullableMode_COLLECTION_instance = new NullableMode('COLLECTION', 2);
  NullableMode_LIST_ELEMENT_instance = new NullableMode('LIST_ELEMENT', 3);
  NullableMode_NOT_NULL_instance = new NullableMode('NOT_NULL', 4);
}
function isMapOrList($this, $receiver) {
  return equals($receiver, MAP_getInstance()) || equals($receiver, LIST_getInstance());
}
function NullableMode_ACCEPTABLE_getInstance() {
  NullableMode_initEntries();
  return NullableMode_ACCEPTABLE_instance;
}
function NullableMode_OPTIONAL_getInstance() {
  NullableMode_initEntries();
  return NullableMode_OPTIONAL_instance;
}
function NullableMode_COLLECTION_getInstance() {
  NullableMode_initEntries();
  return NullableMode_COLLECTION_instance;
}
function NullableMode_LIST_ELEMENT_getInstance() {
  NullableMode_initEntries();
  return NullableMode_LIST_ELEMENT_instance;
}
function NullableMode_NOT_NULL_getInstance() {
  NullableMode_initEntries();
  return NullableMode_NOT_NULL_instance;
}
function encode32($this, $receiver, number, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  switch (format.s1_1) {
    case 2:
      $this.qmx_1.tmx(reverseBytes_1(number));
      break;
    case 0:
      $receiver.umz(fromInt(number));
      break;
    case 1:
      $receiver.vmz(number << 1 ^ number >> 31);
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
      $this.qmx_1.p1s(reverseBytes_2(number));
      break;
    case 0:
      $receiver.umz(number);
      break;
    case 1:
      $receiver.umz(shiftLeft(number, 1) ^ shiftRight(number, 63));
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
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function ensureCapacity($this, elementsToAppend) {
  if (($this.hmr_1 + elementsToAppend | 0) <= $this.gmr_1.length) {
    return Unit_instance;
  }
  var newArray = new Int8Array(takeHighestOneBit($this.hmr_1 + elementsToAppend | 0) << 1);
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.gmr_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, newArray, 0, 0, endIndex);
  $this.gmr_1 = newArray;
}
function encodeVarint($this, value, length) {
  var current = value;
  var inductionVariable = 0;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      $this.gmr_1[$this.hmr_1 + i | 0] = convertToByte(current & 127n | 128n);
      current = shiftRightUnsigned(current, 7);
    }
     while (inductionVariable < length);
  $this.gmr_1[$this.hmr_1 + length | 0] = convertToByte(current);
  $this.hmr_1 = $this.hmr_1 + (length + 1 | 0) | 0;
}
function varIntLength($this, value) {
  return Companion_getInstance_0().ymz_1[countLeadingZeroBits(value)];
}
function ensureEnoughBytes($this, bytesCount) {
  if (bytesCount > $this.e8s()) {
    throw SerializationException.l11('Unexpected EOF, available ' + $this.e8s() + ' bytes, requested: ' + bytesCount);
  }
}
function eof($this) {
  throw SerializationException.l11('Unexpected EOF');
}
function readVarint64SlowPath($this) {
  var result = 0n;
  var shift = 0;
  while (shift < 64) {
    var byte = $this.u1u();
    result = result | shiftLeft(fromInt(byte & 127), shift);
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.l11('Input stream is malformed: Varint too long (exceeded 64 bits)');
}
function readVarint32SlowPath($this) {
  var result = 0;
  var shift = 0;
  while (shift < 32) {
    var byte = $this.u1u();
    result = result | (byte & 127) << shift;
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.l11('Input stream is malformed: Varint too long (exceeded 32 bits)');
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
initMetadataForClass(ProtobufDecodingException, 'ProtobufDecodingException');
initMetadataForCompanion(Companion);
initMetadataForClass(ProtoWireType, 'ProtoWireType');
initMetadataForClass(ProtobufTaggedBase, 'ProtobufTaggedBase');
protoOf(ProtobufTaggedDecoder).v14 = decodeSerializableElement$default;
protoOf(ProtobufTaggedDecoder).zz = decodeSerializableValue;
protoOf(ProtobufTaggedDecoder).x14 = decodeSequentially;
protoOf(ProtobufTaggedDecoder).z14 = decodeCollectionSize;
initMetadataForClass(ProtobufTaggedDecoder, 'ProtobufTaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForClass(ProtobufDecoder, 'ProtobufDecoder');
initMetadataForClass(PackedArrayDecoder, 'PackedArrayDecoder');
protoOf(ProtobufTaggedEncoder).c16 = encodeNotNullMark;
protoOf(ProtobufTaggedEncoder).d16 = beginCollection;
protoOf(ProtobufTaggedEncoder).wz = encodeSerializableValue;
protoOf(ProtobufTaggedEncoder).b16 = encodeNullableSerializableValue;
protoOf(ProtobufTaggedEncoder).e16 = shouldEncodeElementDefault;
initMetadataForClass(ProtobufTaggedEncoder, 'ProtobufTaggedEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(ProtobufEncoder, 'ProtobufEncoder');
initMetadataForClass(NestedRepeatedEncoder, 'NestedRepeatedEncoder');
initMetadataForClass(PackedArrayEncoder, 'PackedArrayEncoder');
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
initMetadataForCompanion(Companion_0);
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
