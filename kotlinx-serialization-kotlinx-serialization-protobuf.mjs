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
    this.zmp_1 = encodeDefaults;
    this.amq_1 = serializersModule;
  }
  sz() {
    return this.amq_1;
  }
  u10(serializer, value) {
    var output = new ByteArrayOutput();
    var encoder = new ProtobufEncoder(this, new ProtobufWriter(output), serializer.hz());
    encoder.tz(serializer, value);
    return output.j8r();
  }
  v10(deserializer, bytes) {
    var input = new ByteArrayInput(bytes);
    var decoder = new ProtobufDecoder(this, new ProtobufReader(input), deserializer.hz());
    return decoder.wz(deserializer);
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
    this.tmq_1 = proto.zmp_1;
    this.umq_1 = proto.sz();
  }
}
class ProtoBufImpl extends ProtoBuf {}
class ProtoNumber {
  constructor(number) {
    this.vmq_1 = number;
  }
  equals(other) {
    if (!(other instanceof ProtoNumber))
      return false;
    var tmp0_other_with_cast = other instanceof ProtoNumber ? other : THROW_CCE();
    if (!(this.vmq_1 === tmp0_other_with_cast.vmq_1))
      return false;
    return true;
  }
  hashCode() {
    return imul(getStringHashCode('number'), 127) ^ this.vmq_1;
  }
  toString() {
    return '@kotlinx.serialization.protobuf.ProtoNumber(' + 'number=' + this.vmq_1 + ')';
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
    this.ymq_1 = signature;
  }
}
class ProtoOneOf {}
class ProtoType {}
class ProtobufDecodingException extends SerializationException {
  constructor(message, e) {
    return new.target.fmr(message, e);
  }
  static fmr(message, e) {
    e = e === VOID ? null : e;
    var $this = this.l11(message, e);
    captureStack($this, $this.emr_1);
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
          if (element.imr_1 === tmp_2) {
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
    tmp.jmr_1 = tmp_1;
  }
  kmr(value) {
    return this.jmr_1[value & 7];
  }
}
class ProtoWireType extends Enum {
  constructor(name, ordinal, typeId) {
    super(name, ordinal);
    this.imr_1 = typeId;
  }
  lmr(tag) {
    return tag << 3 | this.imr_1;
  }
  toString() {
    return this.r1_1 + '(' + this.imr_1 + ')';
  }
}
class ProtobufTaggedBase {
  constructor() {
    this.sms_1 = new BigInt64Array(8);
    this.tms_1 = -1;
  }
  a1k() {
    return this.sms_1[this.tms_1];
  }
  ums() {
    return this.tms_1 === -1 ? 19500n : this.sms_1[this.tms_1];
  }
  vms() {
    var tmp;
    if (this.tms_1 === -1) {
      tmp = 19500n;
    } else {
      var tmp_0 = this.sms_1;
      var _unary__edvuaz = this.tms_1;
      this.tms_1 = _unary__edvuaz - 1 | 0;
      tmp = tmp_0[_unary__edvuaz];
    }
    return tmp;
  }
  wms(tag) {
    if (tag === 19500n)
      return Unit_instance;
    this.tms_1 = this.tms_1 + 1 | 0;
    var idx = this.tms_1;
    if (this.tms_1 >= this.sms_1.length) {
      expand(this);
    }
    this.sms_1[idx] = tag;
  }
  i1j() {
    if (this.tms_1 >= 0) {
      var tmp = this.sms_1;
      var _unary__edvuaz = this.tms_1;
      this.tms_1 = _unary__edvuaz - 1 | 0;
      return tmp[_unary__edvuaz];
    }
    throw SerializationException.i11('No tag in stack for requested element');
  }
}
class ProtobufTaggedDecoder extends ProtobufTaggedBase {
  rms(tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.wms(tag);
    return this;
  }
  r13() {
    return true;
  }
  s13() {
    return null;
  }
  t13() {
    return this.fms(this.vms());
  }
  u13() {
    return this.gms(this.vms());
  }
  v13() {
    return this.hms(this.vms());
  }
  w13() {
    return this.jms(this.vms());
  }
  x13() {
    return this.kms(this.vms());
  }
  y13() {
    return this.lms(this.vms());
  }
  z13() {
    return this.mms(this.vms());
  }
  a14() {
    return this.nms(this.vms());
  }
  b14() {
    return this.dms(this.vms());
  }
  c14(enumDescriptor) {
    return this.oms(this.vms(), enumDescriptor);
  }
  f14(descriptor) {
    return this;
  }
  g14(descriptor) {
  }
  h14(descriptor, index) {
    return this.fms(this.m1i(descriptor, index));
  }
  i14(descriptor, index) {
    return this.gms(this.m1i(descriptor, index));
  }
  j14(descriptor, index) {
    return this.hms(this.m1i(descriptor, index));
  }
  k14(descriptor, index) {
    return this.jms(this.m1i(descriptor, index));
  }
  l14(descriptor, index) {
    return this.kms(this.m1i(descriptor, index));
  }
  m14(descriptor, index) {
    return this.lms(this.m1i(descriptor, index));
  }
  n14(descriptor, index) {
    return this.mms(this.m1i(descriptor, index));
  }
  o14(descriptor, index) {
    return this.nms(this.m1i(descriptor, index));
  }
  p14(descriptor, index) {
    return this.dms(this.m1i(descriptor, index));
  }
  r14(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.m1i(descriptor, index);
    this.wms(tag);
    return this.e14(deserializer, previousValue);
  }
  t14(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.m1i(descriptor, index);
    this.wms(tag);
    var tmp;
    if (this.r13()) {
      tmp = this.e14(deserializer, previousValue);
    } else {
      tmp = this.s13();
    }
    return tmp;
  }
  d14(descriptor) {
    return this.rms(this.vms(), descriptor);
  }
  q14(descriptor, index) {
    return this.rms(this.m1i(descriptor, index), descriptor.u12(index));
  }
}
class ProtobufDecoder extends ProtobufTaggedDecoder {
  constructor(proto, reader, descriptor) {
    super();
    this.lmq_1 = proto;
    this.mmq_1 = reader;
    this.nmq_1 = descriptor;
    this.omq_1 = null;
    this.pmq_1 = null;
    this.qmq_1 = null;
    this.rmq_1 = false;
    var tmp = this;
    tmp.smq_1 = new ElementMarker(this.nmq_1, ProtobufDecoder$readIfAbsent$ref(this));
    this.ems(this.nmq_1);
  }
  sz() {
    return this.lmq_1.sz();
  }
  ems(descriptor) {
    var elements = descriptor.q12();
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
      this.omq_1 = cache;
    } else {
      populateCacheMap(this, descriptor, elements);
    }
  }
  f14(descriptor) {
    var tmp;
    try {
      var tmp0_subject = descriptor.o12();
      var tmp_0;
      if (equals(tmp0_subject, LIST_getInstance())) {
        var tag = this.ums();
        var tmp_1;
        if (equals(this.nmq_1.o12(), LIST_getInstance()) && !(tag === 19500n) && !equals(this.nmq_1, descriptor)) {
          var reader = makeDelimited(this.mmq_1, tag);
          reader.hmu();
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
          var packedBits = false ? 4294967296n : 0n;
          var oneOfBits = false ? 68719476736n : 0n;
          var tmp$ret$0 = packedBits | oneOfBits | ProtoIntegerType_DEFAULT_getInstance().ymq_1 | fromInt(1);
          tmp_1 = new RepeatedDecoder(this.lmq_1, reader, tmp$ret$0, descriptor);
        } else if (this.mmq_1.zmr_1.equals(ProtoWireType_SIZE_DELIMITED_getInstance()) && get_isPackable(descriptor.u12(0))) {
          var sliceReader = new ProtobufReader(this.mmq_1.gmu());
          tmp_1 = new PackedArrayDecoder(this.lmq_1, sliceReader, descriptor);
        } else {
          tmp_1 = new RepeatedDecoder(this.lmq_1, this.mmq_1, tag, descriptor);
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
          var tag_0 = this.ums();
          if (tag_0 === 19500n && equals(this.nmq_1, descriptor))
            return this;
          if (get_isOneOf(tag_0)) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            var rawIndex = convertToInt(tag_0 & 2147483647n) - 1 | 0;
            var tmp1_safe_receiver = this.qmq_1;
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
            return new OneOfPolymorphicReader(this.lmq_1, this.mmq_1, restoredTag, descriptor);
          }
          return new ProtobufDecoder(this.lmq_1, makeDelimited(this.mmq_1, tag_0), descriptor);
        } else {
          if (equals(tmp0_subject, MAP_getInstance())) {
            tmp_0 = new MapEntryReader(this.lmq_1, makeDelimitedForced(this.mmq_1, this.ums()), this.ums(), descriptor);
          } else {
            throw SerializationException.i11('Primitives are not supported at top-level');
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var tmp_6 = descriptor.p10();
        var tmp_7 = this.nmq_1.p10();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_0 = this.ums();
        var tmp$ret$4 = convertToInt(this_0 & 2147483647n);
        throw ProtobufDecodingException.fmr('Fail to begin structure for ' + tmp_6 + ' in ' + tmp_7 + ' at proto number ' + tmp$ret$4, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  g14(descriptor) {
  }
  fms(tag) {
    var value = this.jms(tag);
    var tmp;
    switch (value) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = true;
        break;
      default:
        throw SerializationException.i11('Unexpected boolean value: ' + value);
    }
    return tmp;
  }
  gms(tag) {
    return toByte(this.jms(tag));
  }
  hms(tag) {
    return toShort(this.jms(tag));
  }
  jms(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.mmq_1.jmu();
        } else {
          tmp = this.mmq_1.imu(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.fmr('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.nmq_1.p10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  kms(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.mmq_1.lmu();
        } else {
          tmp = this.mmq_1.kmu(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.fmr('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.nmq_1.p10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  lms(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.mmq_1.nmu();
        } else {
          tmp = this.mmq_1.mmu();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.fmr('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.nmq_1.p10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  mms(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.mmq_1.pmu();
        } else {
          tmp = this.mmq_1.omu();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.fmr('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.nmq_1.p10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  nms(tag) {
    return numberToChar(this.jms(tag));
  }
  dms(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.mmq_1.rmu();
        } else {
          tmp = this.mmq_1.qmu();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.fmr('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.nmq_1.p10(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  oms(tag, enumDescription) {
    return findIndexByTag(this, enumDescription, this.jms(tag));
  }
  wz(deserializer) {
    return this.e14(deserializer, null);
  }
  e14(deserializer, previousValue) {
    var tmp;
    try {
      var tmp_0;
      if (deserializer instanceof MapLikeSerializer) {
        tmp_0 = deserializeMap(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE(), previousValue);
      } else {
        if (equals(deserializer.hz(), ByteArraySerializer().hz())) {
          tmp_0 = deserializeByteArray(this, (previousValue == null ? true : isByteArray(previousValue)) ? previousValue : THROW_CCE());
        } else {
          if (equals(deserializer.hz(), UByteArraySerializer().hz())) {
            var tmp_1;
            if (previousValue == null ? true : previousValue instanceof UByteArray) {
              var tmp_2 = previousValue;
              tmp_1 = tmp_2 == null ? null : tmp_2.ix_1;
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
              tmp_0 = (deserializer instanceof AbstractCollectionSerializer ? deserializer : THROW_CCE()).a18(this, previousValue);
            } else {
              tmp_0 = deserializer.vz(this);
            }
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var currentTag = this.ums();
        var tmp_6;
        if (!equals(this.nmq_1, deserializer.hz())) {
          var tmp_7;
          if (equals(this.nmq_1.o12(), LIST_getInstance()) && !equals(deserializer.hz().o12(), MAP_getInstance())) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding index ' + (convertToInt(currentTag & 2147483647n) - 1 | 0) + ' in repeated field of ' + deserializer.hz().p10();
          } else if (equals(this.nmq_1.o12(), MAP_getInstance())) {
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
            tmp_7 = 'Error while decoding ' + field + ' of index ' + index + ' in map field of ' + deserializer.hz().p10();
          } else {
            var tmp_9 = deserializer.hz().p10();
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding ' + tmp_9 + ' at proto number ' + convertToInt(currentTag & 2147483647n) + ' of ' + this.nmq_1.p10();
          }
          tmp_6 = tmp_7;
        } else {
          tmp_6 = 'Error while decoding ' + this.nmq_1.p10();
        }
        var msg = tmp_6;
        throw ProtobufDecodingException.fmr(msg, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  m1i(_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  }
  v14(descriptor) {
    try {
      while (true) {
        var protoId = this.mmq_1.hmu();
        if (protoId === -1) {
          return this.smq_1.n1a();
        }
        if (protoId === 0) {
          throw SerializationException.i11('0 is not allowed as the protobuf field number in ' + descriptor.p10() + ', the input bytes may have been corrupted');
        }
        var index = getIndexByNum(this, protoId);
        if (index === -1) {
          this.mmq_1.smu();
        } else {
          if (get_isOneOf(extractParameters(descriptor, index))) {
            var tmp0_safe_receiver = this.qmq_1;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver.o4(index, protoId);
          }
          this.smq_1.m1a(index);
          return index;
        }
      }
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        throw ProtobufDecodingException.fmr('Fail to get element index for ' + descriptor.p10() + ' in ' + this.nmq_1.p10(), e);
      } else {
        throw $p;
      }
    }
  }
  r13() {
    return !this.rmq_1;
  }
}
class PackedArrayDecoder extends ProtobufDecoder {
  constructor(proto, reader, descriptor) {
    super(proto, reader, descriptor);
    this.wmr_1 = 0;
  }
  m1i(_this__u8e3s4, index) {
    return 19500n;
  }
  f14(descriptor) {
    throw SerializationException.i11('Packing only supports primitive number types. The input type however was a struct: ' + toString(descriptor));
  }
  v14(descriptor) {
    if (this.mmq_1.cms())
      return -1;
    var _unary__edvuaz = this.wmr_1;
    this.wmr_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  }
  dms(tag) {
    throw SerializationException.i11('Packing only supports primitive number types. The actual reading is for string.');
  }
}
class ProtobufTaggedEncoder extends ProtobufTaggedBase {
  constructor() {
    super();
    this.cmu_1 = NullableMode_NOT_NULL_getInstance();
  }
  dmu(tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.wms(tag);
    return this;
  }
  a15() {
    if (!this.cmu_1.equals(NullableMode_ACCEPTABLE_getInstance())) {
      var message;
      switch (this.cmu_1.s1_1) {
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
      throw SerializationException.i11(message);
    }
  }
  b15(value) {
    this.umt(this.vms(), value);
  }
  c15(value) {
    this.smt(this.vms(), value);
  }
  d15(value) {
    this.tmt(this.vms(), value);
  }
  e15(value) {
    this.rmt(this.vms(), value);
  }
  f15(value) {
    this.wmt(this.vms(), value);
  }
  g15(value) {
    this.xmt(this.vms(), value);
  }
  h15(value) {
    this.ymt(this.vms(), value);
  }
  i15(value) {
    this.vmt(this.vms(), value);
  }
  j15(value) {
    this.qmt(this.vms(), value);
  }
  k15(enumDescriptor, index) {
    return this.zmt(this.vms(), enumDescriptor, index);
  }
  g14(descriptor) {
    if (this.tms_1 >= 0) {
      this.i1j();
    }
    this.z1j(descriptor);
  }
  z1j(descriptor) {
  }
  m15(descriptor, index, value) {
    return this.umt(this.m1i(descriptor, index), value);
  }
  n15(descriptor, index, value) {
    return this.smt(this.m1i(descriptor, index), value);
  }
  o15(descriptor, index, value) {
    return this.tmt(this.m1i(descriptor, index), value);
  }
  p15(descriptor, index, value) {
    return this.rmt(this.m1i(descriptor, index), value);
  }
  q15(descriptor, index, value) {
    return this.wmt(this.m1i(descriptor, index), value);
  }
  r15(descriptor, index, value) {
    return this.xmt(this.m1i(descriptor, index), value);
  }
  s15(descriptor, index, value) {
    return this.ymt(this.m1i(descriptor, index), value);
  }
  t15(descriptor, index, value) {
    return this.vmt(this.m1i(descriptor, index), value);
  }
  u15(descriptor, index, value) {
    return this.qmt(this.m1i(descriptor, index), value);
  }
  w15(descriptor, index, serializer, value) {
    var tmp = this;
    var tmp_0;
    if (descriptor.v12(index)) {
      tmp_0 = NullableMode_OPTIONAL_getInstance();
    } else {
      var elementDescriptor = descriptor.u12(index);
      tmp_0 = !elementDescriptor.b12() ? NullableMode_NOT_NULL_getInstance() : isMapOrList(this, elementDescriptor.o12()) ? NullableMode_COLLECTION_getInstance() : equals(descriptor.o12(), LIST_getInstance()) ? NullableMode_LIST_ELEMENT_getInstance() : NullableMode_ACCEPTABLE_getInstance();
    }
    tmp.cmu_1 = tmp_0;
    this.wms(this.m1i(descriptor, index));
    this.tz(serializer, value);
  }
  x15(descriptor, index, serializer, value) {
    var tmp = this;
    var tmp_0;
    if (descriptor.v12(index)) {
      tmp_0 = NullableMode_OPTIONAL_getInstance();
    } else {
      var elementDescriptor = descriptor.u12(index);
      tmp_0 = isMapOrList(this, elementDescriptor.o12()) ? NullableMode_COLLECTION_getInstance() : equals(descriptor.o12(), LIST_getInstance()) ? NullableMode_LIST_ELEMENT_getInstance() : NullableMode_ACCEPTABLE_getInstance();
    }
    tmp.cmu_1 = tmp_0;
    this.wms(this.m1i(descriptor, index));
    this.y15(serializer, value);
  }
  l15(descriptor) {
    return this.dmu(this.vms(), descriptor);
  }
  v15(descriptor, index) {
    return this.dmu(this.m1i(descriptor, index), descriptor.u12(index));
  }
}
class ProtobufEncoder extends ProtobufTaggedEncoder {
  constructor(proto, writer, descriptor) {
    super();
    this.emq_1 = proto;
    this.fmq_1 = writer;
    this.gmq_1 = descriptor;
  }
  sz() {
    return this.emq_1.sz();
  }
  b16(descriptor, index) {
    return this.emq_1.zmp_1;
  }
  a16(descriptor, collectionSize) {
    var tmp0_subject = descriptor.o12();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tag = this.ums();
      var tmp_0;
      if (get_isPacked(tag) && get_isPackable(descriptor.u12(0))) {
        tmp_0 = new PackedArrayEncoder(this.emq_1, this.fmq_1, this.ums(), descriptor);
      } else {
        if (tag === 19500n) {
          this.fmq_1.umw(collectionSize);
        }
        var tmp_1;
        if (equals(this.gmq_1.o12(), LIST_getInstance()) && !(tag === 19500n) && !equals(this.gmq_1, descriptor)) {
          tmp_1 = new NestedRepeatedEncoder(this.emq_1, this.fmq_1, tag, descriptor);
        } else {
          tmp_1 = new RepeatedEncoder(this.emq_1, this.fmq_1, tag, descriptor);
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (equals(tmp0_subject, MAP_getInstance())) {
      tmp = new MapRepeatedEncoder(this.emq_1, this.a1k(), this.fmq_1, descriptor);
    } else {
      throw SerializationException.i11('This serial kind is not supported as collection: ' + toString(descriptor));
    }
    return tmp;
  }
  f14(descriptor) {
    var tmp0_subject = descriptor.o12();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tmp_0;
      if (get_isPackable(descriptor.u12(0)) && get_isPacked(this.ums())) {
        tmp_0 = new PackedArrayEncoder(this.emq_1, this.fmq_1, this.ums(), descriptor);
      } else {
        tmp_0 = new RepeatedEncoder(this.emq_1, this.fmq_1, this.ums(), descriptor);
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
        var tag = this.ums();
        var tmp_3;
        if (tag === 19500n && equals(descriptor, this.gmq_1)) {
          tmp_3 = this;
        } else if (get_isOneOf(tag)) {
          tmp_3 = new OneOfPolymorphicEncoder(this.emq_1, this.fmq_1, descriptor);
        } else {
          tmp_3 = new ObjectEncoder(this.emq_1, this.ums(), this.fmq_1, VOID, descriptor);
        }
        tmp = tmp_3;
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp = new MapRepeatedEncoder(this.emq_1, this.ums(), this.fmq_1, descriptor);
        } else {
          throw SerializationException.i11('This serial kind is not supported as structure: ' + toString(descriptor));
        }
      }
    }
    return tmp;
  }
  rmt(tag, value) {
    if (tag === 19500n) {
      this.fmq_1.umw(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.fmq_1.vmw(value, tmp$ret$0, get_integerType(tag));
    }
  }
  smt(tag, value) {
    return this.rmt(tag, value);
  }
  tmt(tag, value) {
    return this.rmt(tag, value);
  }
  umt(tag, value) {
    return this.rmt(tag, value ? 1 : 0);
  }
  vmt(tag, value) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(value);
    return this.rmt(tag, tmp$ret$0);
  }
  wmt(tag, value) {
    if (tag === 19500n) {
      this.fmq_1.m1s(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.fmq_1.wmw(value, tmp$ret$0, get_integerType(tag));
    }
  }
  xmt(tag, value) {
    if (tag === 19500n) {
      this.fmq_1.ymw(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.fmq_1.xmw(value, tmp$ret$0);
    }
  }
  ymt(tag, value) {
    if (tag === 19500n) {
      this.fmq_1.amx(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.fmq_1.zmw(value, tmp$ret$0);
    }
  }
  qmt(tag, value) {
    if (tag === 19500n) {
      this.fmq_1.cmx(value);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.fmq_1.bmx(value, tmp$ret$0);
    }
  }
  zmt(tag, enumDescriptor, ordinal) {
    var id = extractProtoId(enumDescriptor, ordinal, true);
    if (tag === 19500n) {
      this.fmq_1.umw(id);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp$ret$0 = convertToInt(tag & 2147483647n);
      this.fmq_1.vmw(id, tmp$ret$0, ProtoIntegerType_DEFAULT_getInstance());
    }
  }
  m1i(_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  }
  tz(serializer, value) {
    var tmp;
    if (serializer instanceof MapLikeSerializer) {
      serializeMap(this, isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
      tmp = Unit_instance;
    } else {
      if (equals(serializer.hz(), ByteArraySerializer().hz())) {
        serializeByteArray(this, (!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE());
        tmp = Unit_instance;
      } else {
        if (equals(serializer.hz(), UByteArraySerializer().hz())) {
          // Inline function 'kotlin.collections.asByteArray' call
          var this_0 = value instanceof UByteArray ? value.ix_1 : THROW_CCE();
          var tmp$ret$0 = _UByteArray___get_storage__impl__d4kctt(this_0);
          serializeByteArray(this, tmp$ret$0);
          tmp = Unit_instance;
        } else {
          serializer.uz(this, value);
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
    this.mmt_1 = writer;
    this.nmt_1 = curTag;
    this.omt_1 = stream;
  }
  m1i(_this__u8e3s4, index) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
    var packedBits = false ? 4294967296n : 0n;
    var oneOfBits = false ? 68719476736n : 0n;
    return packedBits | oneOfBits | ProtoIntegerType_DEFAULT_getInstance().ymq_1 | fromInt(1);
  }
  z1j(descriptor) {
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var this_0 = this.nmt_1;
    var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
    this.mmt_1.dmx(this.omt_1, tmp$ret$0);
  }
}
class PackedArrayEncoder extends NestedRepeatedEncoder {
  constructor(proto, writer, curTag, descriptor, stream) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    super(proto, writer, curTag, descriptor, stream);
  }
  m1i(_this__u8e3s4, index) {
    return 19500n;
  }
  a16(descriptor, collectionSize) {
    throw SerializationException.i11('Packing only supports primitive number types');
  }
  f14(descriptor) {
    throw SerializationException.i11('Packing only supports primitive number types');
  }
  z1j(descriptor) {
    if (this.omt_1.pmt() > 0) {
      super.z1j(descriptor);
    }
  }
  qmt(tag, value) {
    throw SerializationException.i11('Packing only supports primitive number types');
  }
}
class MapEntryReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.dmv_1 = parentTag;
  }
  m1i(_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits = false ? 4294967296n : 0n;
      var oneOfBits = false ? 68719476736n : 0n;
      tmp = packedBits | oneOfBits | get_integerType(this.dmv_1).ymq_1 | fromInt(1);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits_0 = false ? 4294967296n : 0n;
      var oneOfBits_0 = false ? 68719476736n : 0n;
      tmp = packedBits_0 | oneOfBits_0 | get_integerType(this.dmv_1).ymq_1 | fromInt(2);
    }
    return tmp;
  }
}
class RepeatedDecoder extends ProtobufDecoder {
  constructor(proto, decoder, currentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.omv_1 = -1;
    var tmp = this;
    var tmp_0;
    if (currentTag === 19500n) {
      var length = this.mmq_1.jmu();
      // Inline function 'kotlin.require' call
      if (!(length >= 0)) {
        var message = 'Expected positive length for ' + toString(descriptor) + ', but got ' + length;
        throw IllegalArgumentException.b2(toString(message));
      }
      tmp_0 = negate(fromInt(length));
    } else {
      tmp_0 = currentTag;
    }
    tmp.pmv_1 = tmp_0;
  }
  v14(descriptor) {
    if (this.pmv_1 > 0n) {
      return decodeTaggedListIndex(this);
    }
    return decodeListIndexNoTag(this);
  }
  m1i(_this__u8e3s4, index) {
    if (this.pmv_1 > 0n)
      return this.pmv_1;
    return 19500n;
  }
}
class OneOfPolymorphicReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.cmw_1 = parentTag;
    this.dmw_1 = false;
    this.emw_1 = false;
  }
  m1i(_this__u8e3s4, index) {
    var tmp;
    if (index === 0) {
      tmp = 19501n;
    } else {
      tmp = extractParameters(_this__u8e3s4, 0);
    }
    return tmp;
  }
  f14(descriptor) {
    var tmp;
    if (equals(descriptor, this.nmq_1)) {
      tmp = this;
    } else {
      tmp = new OneOfElementReader(this.lmq_1, this.mmq_1, descriptor);
    }
    return tmp;
  }
  v14(descriptor) {
    if (!this.dmw_1) {
      this.dmw_1 = true;
      return 0;
    } else if (!this.emw_1) {
      this.emw_1 = true;
      return 1;
    } else {
      return -1;
    }
  }
  dms(tag) {
    var tmp;
    if (tag === 19501n) {
      var tmp_0 = this.sz();
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = this.cmw_1;
      var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
      var tmp0_safe_receiver = getActualOneOfSerializer(this.nmq_1, tmp_0, tmp$ret$0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p10();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var tmp_2 = this.nmq_1.p10();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_1 = this.cmw_1;
        var tmp$ret$1 = convertToInt(this_1 & 2147483647n);
        throw SerializationException.i11('Cannot find a subclass of ' + tmp_2 + ' annotated with @ProtoNumber(' + tmp$ret$1 + ').');
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = super.dms(tag);
    }
    return tmp;
  }
}
class OneOfElementReader extends ProtobufDecoder {
  constructor(proto, decoder, descriptor) {
    super(proto, decoder, descriptor);
    // Inline function 'kotlin.require' call
    if (!(descriptor.q12() === 1)) {
      var message = 'Implementation of oneOf type ' + descriptor.p10() + ' should contain only 1 element, but get ' + descriptor.q12();
      throw IllegalArgumentException.b2(toString(message));
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = descriptor.t12(0);
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
      var message_0 = 'Implementation of oneOf type ' + descriptor.p10() + ' should have @ProtoNumber annotation';
      throw IllegalArgumentException.b2(toString(message_0));
    }
    this.pmw_1 = protoNumber.vmq_1;
    this.qmw_1 = false;
  }
  f14(descriptor) {
    var tmp0_subject = descriptor.o12();
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
      var tag = this.ums();
      if (tag === 19500n && equals(this.nmq_1, descriptor))
        return this;
      if (get_isOneOf(tag))
        throw SerializationException.i11('An oneof element cannot be directly child of another oneof element');
      tmp = new ProtobufDecoder(this.lmq_1, makeDelimited(this.mmq_1, tag), descriptor);
    } else {
      throw SerializationException.i11('Type ' + descriptor.o12().toString() + ' cannot be directly child of oneof element');
    }
    return tmp;
  }
  v14(descriptor) {
    var tmp;
    if (this.qmw_1) {
      tmp = -1;
    } else {
      this.qmw_1 = true;
      tmp = 0;
    }
    return tmp;
  }
}
class RepeatedEncoder extends ProtobufEncoder {
  constructor(proto, writer, curTag, descriptor) {
    super(proto, writer, descriptor);
    this.kmx_1 = curTag;
  }
  m1i(_this__u8e3s4, index) {
    return this.kmx_1;
  }
}
class ObjectEncoder extends ProtobufEncoder {
  constructor(proto, parentTag, parentWriter, stream, descriptor) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    super(proto, new ProtobufWriter(stream), descriptor);
    this.amy_1 = parentTag;
    this.bmy_1 = parentWriter;
    this.cmy_1 = stream;
  }
  z1j(descriptor) {
    if (!(this.amy_1 === 19500n)) {
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = this.amy_1;
      var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
      this.bmy_1.dmx(this.cmy_1, tmp$ret$0);
    } else {
      this.bmy_1.kmy(this.cmy_1);
    }
  }
}
class MapRepeatedEncoder extends ObjectEncoder {
  constructor(proto, parentTag, parentWriter, descriptor) {
    super(proto, parentTag, parentWriter, VOID, descriptor);
  }
  m1i(_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits = false ? 4294967296n : 0n;
      var oneOfBits = false ? 68719476736n : 0n;
      tmp = packedBits | oneOfBits | get_integerType(this.amy_1).ymq_1 | fromInt(1);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits_0 = false ? 4294967296n : 0n;
      var oneOfBits_0 = false ? 68719476736n : 0n;
      tmp = packedBits_0 | oneOfBits_0 | get_integerType(this.amy_1).ymq_1 | fromInt(2);
    }
    return tmp;
  }
}
class OneOfPolymorphicEncoder extends ProtobufEncoder {
  constructor(proto, parentWriter, descriptor) {
    super(proto, parentWriter, descriptor);
    this.jmy_1 = parentWriter;
    var tmp = descriptor.o12();
    // Inline function 'kotlin.require' call
    if (!(tmp instanceof PolymorphicKind)) {
      var message = 'The serializer of one of type ' + descriptor.p10() + ' should be using generic polymorphic serializer, but got ' + descriptor.o12().toString() + '.';
      throw IllegalArgumentException.b2(toString(message));
    }
  }
  f14(descriptor) {
    var tmp;
    if (equals(descriptor, this.gmq_1)) {
      tmp = this;
    } else {
      tmp = new OneOfElementEncoder(this.emq_1, this.jmy_1, descriptor);
    }
    return tmp;
  }
  l15(descriptor) {
    var tmp = this.i1j();
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var this_0 = extractParameters(descriptor, 0);
    var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
    return this.dmu(overrideId(tmp, tmp$ret$0), descriptor);
  }
  qmt(tag, value) {
    if (!(tag === 19501n)) {
      super.qmt(tag, value);
    }
  }
  m1i(_this__u8e3s4, index) {
    var tmp;
    switch (index) {
      case 0:
        tmp = 19501n;
        break;
      case 1:
        tmp = extractParameters(_this__u8e3s4, index);
        break;
      default:
        throw SerializationException.i11('Unsupported index: ' + index + ' in a oneOf type ' + _this__u8e3s4.p10() + ', which should be using generic polymorphic serializer');
    }
    return tmp;
  }
}
class OneOfElementEncoder extends ProtobufEncoder {
  constructor(proto, parentWriter, descriptor) {
    super(proto, parentWriter, descriptor);
    // Inline function 'kotlin.require' call
    if (!(descriptor.q12() === 1)) {
      var message = 'Implementation of oneOf type ' + descriptor.p10() + ' should contain only 1 element, but get ' + descriptor.q12();
      throw IllegalArgumentException.b2(toString(message));
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = descriptor.t12(0);
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
      var message_0 = 'Implementation of oneOf type ' + descriptor.p10() + ' should have @ProtoNumber annotation';
      throw IllegalArgumentException.b2(toString(message_0));
    }
  }
}
class ProtobufReader {
  constructor(input) {
    this.xmr_1 = input;
    this.ymr_1 = -1;
    this.zmr_1 = ProtoWireType_INVALID_getInstance();
    this.ams_1 = false;
    this.bms_1 = 0;
  }
  cms() {
    return !this.ams_1 && this.xmr_1.t8r() === 0;
  }
  hmu() {
    if (this.ams_1) {
      this.ams_1 = false;
      var previousHeader = this.ymr_1 << 3 | this.zmr_1.imr_1;
      // Inline function 'kotlin.also' call
      var this_0 = updateIdAndType(this, this.bms_1);
      this.bms_1 = previousHeader;
      return this_0;
    }
    this.bms_1 = this.ymr_1 << 3 | this.zmr_1.imr_1;
    var header = convertToInt(this.xmr_1.omy(true));
    return updateIdAndType(this, header);
  }
  qmv() {
    this.ams_1 = true;
    var nextHeader = this.ymr_1 << 3 | this.zmr_1.imr_1;
    updateIdAndType(this, this.bms_1);
    this.bms_1 = nextHeader;
  }
  smu() {
    switch (this.zmr_1.s1_1) {
      case 1:
        this.imu(ProtoIntegerType_DEFAULT_getInstance());
        break;
      case 2:
        this.kmu(ProtoIntegerType_FIXED_getInstance());
        break;
      case 3:
        this.qmy();
        break;
      case 4:
        this.imu(ProtoIntegerType_FIXED_getInstance());
        break;
      default:
        throw ProtobufDecodingException.fmr('Unsupported start group or end group wire type: ' + this.zmr_1.toString());
    }
  }
  emu() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.zmr_1.equals(expected))
      throw ProtobufDecodingException.fmr('Expected wire type ' + expected.toString() + ', but found ' + this.zmr_1.toString());
    return this.fmu();
  }
  qmy() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.zmr_1.equals(expected))
      throw ProtobufDecodingException.fmr('Expected wire type ' + expected.toString() + ', but found ' + this.zmr_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    this.xmr_1.rmy(length);
  }
  fmu() {
    var length = decode32(this);
    checkLength(this, length);
    return this.xmr_1.smy(length);
  }
  gmu() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.zmr_1.equals(expected))
      throw ProtobufDecodingException.fmr('Expected wire type ' + expected.toString() + ', but found ' + this.zmr_1.toString());
    return this.rmv();
  }
  rmv() {
    var length = decode32(this);
    checkLength(this, length);
    return this.xmr_1.tmy(length);
  }
  imu(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i32_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.zmr_1.equals(wireType))
      throw ProtobufDecodingException.fmr('Expected wire type ' + wireType.toString() + ', but found ' + this.zmr_1.toString());
    return decode32(this, format);
  }
  jmu() {
    return decode32(this);
  }
  kmu(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i64_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.zmr_1.equals(wireType))
      throw ProtobufDecodingException.fmr('Expected wire type ' + wireType.toString() + ', but found ' + this.zmr_1.toString());
    return decode64(this, format);
  }
  lmu() {
    return decode64(this, ProtoIntegerType_DEFAULT_getInstance());
  }
  mmu() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i32_getInstance();
    if (!this.zmr_1.equals(expected))
      throw ProtobufDecodingException.fmr('Expected wire type ' + expected.toString() + ', but found ' + this.zmr_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  nmu() {
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  omu() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i64_getInstance();
    if (!this.zmr_1.equals(expected))
      throw ProtobufDecodingException.fmr('Expected wire type ' + expected.toString() + ', but found ' + this.zmr_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  pmu() {
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  qmu() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.zmr_1.equals(expected))
      throw ProtobufDecodingException.fmr('Expected wire type ' + expected.toString() + ', but found ' + this.zmr_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    return this.xmr_1.umy(length);
  }
  rmu() {
    var length = decode32(this);
    checkLength(this, length);
    return this.xmr_1.umy(length);
  }
}
class NullableMode extends Enum {}
class ProtobufWriter {
  constructor(out) {
    this.rmw_1 = out;
  }
  smw(bytes, tag) {
    encode32(this, this.rmw_1, ProtoWireType_SIZE_DELIMITED_getInstance().lmr(tag));
    this.tmw(bytes);
  }
  tmw(bytes) {
    encode32(this, this.rmw_1, bytes.length);
    this.rmw_1.xmy(bytes);
  }
  dmx(output, tag) {
    encode32(this, this.rmw_1, ProtoWireType_SIZE_DELIMITED_getInstance().lmr(tag));
    this.kmy(output);
  }
  kmy(output) {
    encode32(this, this.rmw_1, output.pmt());
    this.rmw_1.ymy(output);
  }
  vmw(value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i32_getInstance() : ProtoWireType_VARINT_getInstance();
    encode32(this, this.rmw_1, wireType.lmr(tag));
    encode32(this, this.rmw_1, value, format);
  }
  umw(value) {
    encode32(this, this.rmw_1, value);
  }
  wmw(value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i64_getInstance() : ProtoWireType_VARINT_getInstance();
    encode32(this, this.rmw_1, wireType.lmr(tag));
    encode64(this, this.rmw_1, value, format);
  }
  m1s(value) {
    encode64(this, this.rmw_1, value);
  }
  bmx(value, tag) {
    var bytes = encodeToByteArray(value);
    this.smw(bytes, tag);
  }
  cmx(value) {
    var bytes = encodeToByteArray(value);
    this.tmw(bytes);
  }
  zmw(value, tag) {
    encode32(this, this.rmw_1, ProtoWireType_i64_getInstance().lmr(tag));
    this.rmw_1.m1s(reverseBytes_0(this, value));
  }
  amx(value) {
    this.rmw_1.m1s(reverseBytes_0(this, value));
  }
  xmw(value, tag) {
    encode32(this, this.rmw_1, ProtoWireType_i32_getInstance().lmr(tag));
    this.rmw_1.umw(reverseBytes(this, value));
  }
  ymw(value) {
    this.rmw_1.umw(reverseBytes(this, value));
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
    tmp.zmy_1 = tmp_1;
  }
}
class ByteArrayOutput {
  constructor() {
    Companion_getInstance_0();
    this.hmq_1 = new Int8Array(32);
    this.imq_1 = 0;
  }
  pmt() {
    return this.imq_1;
  }
  j8r() {
    var newArray = new Int8Array(this.imq_1);
    var tmp0 = this.hmq_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.imq_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newArray, 0, 0, endIndex);
    return newArray;
  }
  xmy(buffer) {
    var count = buffer.length;
    if (count === 0) {
      return Unit_instance;
    }
    ensureCapacity(this, count);
    var tmp2 = this.hmq_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.imq_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = buffer;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, 0, count);
    this.imq_1 = this.imq_1 + count | 0;
  }
  ymy(output) {
    var count = output.pmt();
    ensureCapacity(this, count);
    var tmp0 = output.hmq_1;
    var tmp2 = this.hmq_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.imq_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, 0, count);
    this.imq_1 = this.imq_1 + count | 0;
  }
  umw(intValue) {
    ensureCapacity(this, 4);
    var inductionVariable = 3;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.hmq_1;
        var _unary__edvuaz = this.imq_1;
        this.imq_1 = _unary__edvuaz + 1 | 0;
        tmp[_unary__edvuaz] = toByte(intValue >> imul(i, 8));
      }
       while (0 <= inductionVariable);
  }
  m1s(longValue) {
    ensureCapacity(this, 8);
    var inductionVariable = 7;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.hmq_1;
        var _unary__edvuaz = this.imq_1;
        this.imq_1 = _unary__edvuaz + 1 | 0;
        tmp[_unary__edvuaz] = convertToByte(shiftRight(longValue, imul(i, 8)));
      }
       while (0 <= inductionVariable);
  }
  wmy(value) {
    ensureCapacity(this, 5);
    if ((value & -128) === 0) {
      var tmp = this.hmq_1;
      var _unary__edvuaz = this.imq_1;
      this.imq_1 = _unary__edvuaz + 1 | 0;
      tmp[_unary__edvuaz] = toByte(value);
      return Unit_instance;
    }
    var length = varIntLength(this, fromInt(value));
    encodeVarint(this, fromInt(value), length);
  }
  vmy(value) {
    var length = varIntLength(this, value);
    ensureCapacity(this, length + 1 | 0);
    encodeVarint(this, value, length);
  }
}
class ByteArrayInput {
  constructor(array, endIndex) {
    endIndex = endIndex === VOID ? array.length : endIndex;
    this.lmy_1 = array;
    this.mmy_1 = endIndex;
    this.nmy_1 = 0;
  }
  t8r() {
    return this.mmy_1 - this.nmy_1 | 0;
  }
  tmy(size) {
    ensureEnoughBytes(this, size);
    var result = new ByteArrayInput(this.lmy_1, this.nmy_1 + size | 0);
    result.nmy_1 = this.nmy_1;
    this.nmy_1 = this.nmy_1 + size | 0;
    return result;
  }
  r1u() {
    var tmp;
    if (this.nmy_1 < this.mmy_1) {
      var tmp_0 = this.lmy_1;
      var _unary__edvuaz = this.nmy_1;
      this.nmy_1 = _unary__edvuaz + 1 | 0;
      tmp = tmp_0[_unary__edvuaz] & 255;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  smy(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    var b = new Int8Array(bytesCount);
    var length = b.length;
    var copied = (this.mmy_1 - this.nmy_1 | 0) < length ? this.mmy_1 - this.nmy_1 | 0 : length;
    var tmp0 = this.lmy_1;
    var tmp6 = this.nmy_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.nmy_1 + copied | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, b, 0, tmp6, endIndex);
    this.nmy_1 = this.nmy_1 + copied | 0;
    return b;
  }
  rmy(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    this.nmy_1 = this.nmy_1 + bytesCount | 0;
  }
  umy(length) {
    var result = decodeToString(this.lmy_1, this.nmy_1, this.nmy_1 + length | 0);
    this.nmy_1 = this.nmy_1 + length | 0;
    return result;
  }
  pmy() {
    if (this.nmy_1 === this.mmy_1) {
      eof(this);
    }
    var currentPosition = this.nmy_1;
    var tmp = this.lmy_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = tmp[_unary__edvuaz];
    if (result >= 0) {
      this.nmy_1 = currentPosition;
      return result;
    } else if ((this.mmy_1 - this.nmy_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.lmy_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ tmp_1[_unary__edvuaz_0] << 7;
      if (result < 0) {
        this.nmy_1 = currentPosition;
        return result ^ -128;
      }
    }
    return readVarint32SlowPath(this);
  }
  omy(eofAllowed) {
    if (this.nmy_1 === this.mmy_1) {
      if (eofAllowed)
        return -1n;
      else {
        eof(this);
      }
    }
    var currentPosition = this.nmy_1;
    var tmp = this.lmy_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = fromInt(tmp[_unary__edvuaz]);
    if (result >= 0n) {
      this.nmy_1 = currentPosition;
      return result;
    } else if ((this.mmy_1 - this.nmy_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.lmy_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ shiftLeft(fromInt(tmp_1[_unary__edvuaz_0]), 7);
      if (result < 0n) {
        this.nmy_1 = currentPosition;
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
  return new ProtoBufImpl(b.tmq_1, b.umq_1);
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
  var annotations = descriptor.t12(index);
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
          result = annotation.vmq_1;
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
  var tmp0_subject = _this__u8e3s4.o12();
  var tmp;
  if (equals(tmp0_subject, OPEN_getInstance())) {
    tmp = getPolymorphicDescriptors(serializersModule, _this__u8e3s4);
  } else if (equals(tmp0_subject, SEALED_getInstance())) {
    tmp = toList(get_elementDescriptors(_this__u8e3s4.u12(1)));
  } else {
    throw IllegalArgumentException.b2('Class ' + _this__u8e3s4.p10() + ' should be abstract or sealed or interface to be used as @ProtoOneOf property.');
  }
  // Inline function 'kotlin.collections.onEach' call
  // Inline function 'kotlin.apply' call
  var this_0 = tmp;
  var _iterator__ex2g4s = this_0.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var tmp0 = element.t12(0);
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
      throw IllegalArgumentException.b2(element.p10() + ' implementing oneOf type ' + _this__u8e3s4.p10() + ' should have @ProtoNumber annotation in its single property.');
    }
  }
  return this_0;
}
function extractParameters(_this__u8e3s4, index) {
  var annotations = _this__u8e3s4.t12(index);
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
        protoId = annotation.vmq_1;
        checkFieldNumber(protoId, i, _this__u8e3s4);
      } else {
        if (annotation instanceof ProtoType) {
          format = annotation.zmq_1;
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
  return packedBits | oneOfBits | format.ymq_1 | fromInt(tmp0);
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
  if (_this__u8e3s4.p12()) {
    tmp = (_this__u8e3s4.q12() === 1 && get_isPackable(_this__u8e3s4.u12(0)));
  } else {
    var tmp_0 = _this__u8e3s4.o12();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = !equals(_this__u8e3s4.o12(), STRING_getInstance());
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
  return tmp0_subject === ProtoIntegerType_DEFAULT_getInstance().ymq_1 ? ProtoIntegerType_DEFAULT_getInstance() : tmp0_subject === ProtoIntegerType_SIGNED_getInstance().ymq_1 ? ProtoIntegerType_SIGNED_getInstance() : ProtoIntegerType_FIXED_getInstance();
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
    throw SerializationException.i11('' + fieldNumber + " is not allowed in ProtoNumber for property '" + descriptor.r12(propertyIndex) + "' of '" + descriptor.p10() + "', because protobuf supports field numbers in range 1..2147483647");
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
        var this_0 = getAllOneOfSerializerOfField(descriptor.u12(i), $this.sz());
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
    $this.qmq_1 = HashMap.q9(oneOfCount, 1.0);
  }
  $this.pmq_1 = map;
}
function putProtoId($this, $receiver, protoId, index) {
  $receiver.o4(protoId, index);
}
function getIndexByNum($this, protoNum) {
  var array = $this.omq_1;
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
  var tmp0_elvis_lhs = ensureNotNull($this.pmq_1).v4(protoTag);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    tmp = -1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function findIndexByTag($this, descriptor, protoTag) {
  if (protoTag < descriptor.q12() && protoTag >= 0) {
    var protoId = extractProtoId(descriptor, protoTag, true);
    if (protoId === protoTag)
      return protoTag;
  }
  return findIndexByTagSlowPath($this, descriptor, protoTag);
}
function findIndexByTagSlowPath($this, desc, protoTag) {
  var inductionVariable = 0;
  var last = desc.q12();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var protoId = extractProtoId(desc, i, true);
      if (protoId === protoTag)
        return i;
    }
     while (inductionVariable < last);
  throw ProtobufDecodingException.fmr('' + protoTag + ' is not among valid ' + $this.nmq_1.p10() + ' enum proto numbers');
}
function deserializeByteArray($this, previousValue) {
  var tag = $this.ums();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
    try {
      var tmp;
      if (tag === 19500n) {
        tmp = $this.mmq_1.fmu();
      } else {
        tmp = $this.mmq_1.emu();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var tmp$ret$3 = convertToInt(tag & 2147483647n);
        throw ProtobufDecodingException.fmr('Error while decoding proto number ' + tmp$ret$3 + ' of ' + $this.nmq_1.p10(), e);
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
  var mapEntrySerial = MapEntrySerializer(serializer.u17_1, serializer.v17_1);
  var tmp0_safe_receiver = (!(previousValue == null) ? isInterface(previousValue, KtMap) : false) ? previousValue : null;
  var oldSet = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3();
  var tmp = SetSerializer(mapEntrySerial);
  var setOfEntries = (tmp instanceof AbstractCollectionSerializer ? tmp : THROW_CCE()).a18($this, oldSet);
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
  if (!descriptor.v12(index)) {
    var elementDescriptor = descriptor.u12(index);
    var kind = elementDescriptor.o12();
    if (equals(kind, MAP_getInstance()) || equals(kind, LIST_getInstance())) {
      $this.rmq_1 = false;
      return true;
    } else if (elementDescriptor.b12()) {
      $this.rmq_1 = true;
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
  var size = negate($this.pmv_1);
  $this.omv_1 = $this.omv_1 + 1 | 0;
  var idx = $this.omv_1;
  if (fromInt(idx) === size || $this.mmq_1.cms())
    return -1;
  return idx;
}
function decodeTaggedListIndex($this) {
  var tmp;
  if ($this.omv_1 === -1) {
    tmp = $this.mmq_1.ymr_1;
  } else {
    tmp = $this.mmq_1.hmu();
  }
  var protoId = tmp;
  var tmp_0;
  // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
  var this_0 = $this.pmv_1;
  if (protoId === convertToInt(this_0 & 2147483647n)) {
    $this.omv_1 = $this.omv_1 + 1 | 0;
    tmp_0 = $this.omv_1;
  } else {
    $this.mmq_1.qmv();
    tmp_0 = -1;
  }
  return tmp_0;
}
function makeDelimited(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.rmv() : decoder.gmu();
  return new ProtobufReader(input);
}
function makeDelimitedForced(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.rmv() : decoder.gmu();
  return new ProtobufReader(input);
}
function serializeByteArray($this, value) {
  var tag = $this.vms();
  if (tag === 19500n) {
    $this.fmq_1.tmw(value);
  } else {
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var tmp$ret$0 = convertToInt(tag & 2147483647n);
    $this.fmq_1.smw(value, tmp$ret$0);
  }
}
function serializeMap($this, serializer, value) {
  var casted = serializer instanceof MapLikeSerializer ? serializer : THROW_CCE();
  var mapEntrySerial = MapEntrySerializer(casted.u17_1, casted.v17_1);
  var tmp = SetSerializer(mapEntrySerial);
  tmp.uz($this, ((!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE()).b3());
}
function updateIdAndType($this, header) {
  var tmp;
  if (header === -1) {
    $this.ymr_1 = -1;
    $this.zmr_1 = ProtoWireType_INVALID_getInstance();
    tmp = -1;
  } else {
    $this.ymr_1 = header >>> 3 | 0;
    $this.zmr_1 = Companion_getInstance().kmr(header);
    tmp = $this.ymr_1;
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
      var byte = $this.xmr_1.r1u() & 255;
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
      var byte = fromInt($this.xmr_1.r1u() & 255);
      result = result | shiftLeft(byte, imul(i, 8));
    }
     while (inductionVariable <= 7);
  return result;
}
function checkLength($this, length) {
  if (length < 0) {
    throw ProtobufDecodingException.fmr('Unexpected negative length: ' + length);
  }
}
function decode32($this, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  var tmp;
  switch (format.s1_1) {
    case 0:
      tmp = convertToInt($this.xmr_1.omy(false));
      break;
    case 1:
      tmp = decodeSignedVarintInt($this, $this.xmr_1);
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
      tmp = $this.xmr_1.omy(false);
      break;
    case 1:
      tmp = decodeSignedVarintLong($this, $this.xmr_1);
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
  var raw = input.pmy();
  var temp = (raw << 31 >> 31 ^ raw) >> 1;
  return temp ^ raw & -2147483648;
}
function decodeSignedVarintLong($this, input) {
  var raw = input.omy(false);
  var temp = shiftRight(shiftRight(shiftLeft(raw, 63), 63) ^ raw, 1);
  return temp ^ raw & -9223372036854775808n;
}
function expand($this) {
  $this.sms_1 = copyOf($this.sms_1, imul($this.sms_1.length, 2));
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
      $this.rmw_1.umw(reverseBytes_1(number));
      break;
    case 0:
      $receiver.vmy(fromInt(number));
      break;
    case 1:
      $receiver.wmy(number << 1 ^ number >> 31);
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
      $this.rmw_1.m1s(reverseBytes_2(number));
      break;
    case 0:
      $receiver.vmy(number);
      break;
    case 1:
      $receiver.vmy(shiftLeft(number, 1) ^ shiftRight(number, 63));
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
  if (($this.imq_1 + elementsToAppend | 0) <= $this.hmq_1.length) {
    return Unit_instance;
  }
  var newArray = new Int8Array(takeHighestOneBit($this.imq_1 + elementsToAppend | 0) << 1);
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.hmq_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, newArray, 0, 0, endIndex);
  $this.hmq_1 = newArray;
}
function encodeVarint($this, value, length) {
  var current = value;
  var inductionVariable = 0;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      $this.hmq_1[$this.imq_1 + i | 0] = convertToByte(current & 127n | 128n);
      current = shiftRightUnsigned(current, 7);
    }
     while (inductionVariable < length);
  $this.hmq_1[$this.imq_1 + length | 0] = convertToByte(current);
  $this.imq_1 = $this.imq_1 + (length + 1 | 0) | 0;
}
function varIntLength($this, value) {
  return Companion_getInstance_0().zmy_1[countLeadingZeroBits(value)];
}
function ensureEnoughBytes($this, bytesCount) {
  if (bytesCount > $this.t8r()) {
    throw SerializationException.i11('Unexpected EOF, available ' + $this.t8r() + ' bytes, requested: ' + bytesCount);
  }
}
function eof($this) {
  throw SerializationException.i11('Unexpected EOF');
}
function readVarint64SlowPath($this) {
  var result = 0n;
  var shift = 0;
  while (shift < 64) {
    var byte = $this.r1u();
    result = result | shiftLeft(fromInt(byte & 127), shift);
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.i11('Input stream is malformed: Varint too long (exceeded 64 bits)');
}
function readVarint32SlowPath($this) {
  var result = 0;
  var shift = 0;
  while (shift < 32) {
    var byte = $this.r1u();
    result = result | (byte & 127) << shift;
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.i11('Input stream is malformed: Varint too long (exceeded 32 bits)');
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
protoOf(ProtobufTaggedDecoder).s14 = decodeSerializableElement$default;
protoOf(ProtobufTaggedDecoder).wz = decodeSerializableValue;
protoOf(ProtobufTaggedDecoder).u14 = decodeSequentially;
protoOf(ProtobufTaggedDecoder).w14 = decodeCollectionSize;
initMetadataForClass(ProtobufTaggedDecoder, 'ProtobufTaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForClass(ProtobufDecoder, 'ProtobufDecoder');
initMetadataForClass(PackedArrayDecoder, 'PackedArrayDecoder');
protoOf(ProtobufTaggedEncoder).z15 = encodeNotNullMark;
protoOf(ProtobufTaggedEncoder).a16 = beginCollection;
protoOf(ProtobufTaggedEncoder).tz = encodeSerializableValue;
protoOf(ProtobufTaggedEncoder).y15 = encodeNullableSerializableValue;
protoOf(ProtobufTaggedEncoder).b16 = shouldEncodeElementDefault;
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
