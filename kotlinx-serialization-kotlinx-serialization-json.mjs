import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  SEALED_getInstance2pc3convncp73 as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  serializerOrNull294cbc318ws50 as serializerOrNull,
  KSerializerzf77vz1967fq as KSerializer,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  SerializableWithd2dap36updxd as SerializableWith,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  STRING_getInstance1ov5zayfui8fl as STRING_getInstance,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  ENUM_getInstance1f3d4zr61j5rk as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  CLASS_getInstance3ax1g1upf6nuo as CLASS_getInstance,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  LIST_getInstance2xmlsct1exo3w as LIST_getInstance,
  CONTEXTUAL_getInstance2bsxm25kydylq as CONTEXTUAL_getInstance,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MAP_getInstance173r3f2itu405 as MAP_getInstance,
  ENUMlmq49cvwy4ow as ENUM,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  findPolymorphicSerializer1nm87hvemahcj as findPolymorphicSerializer,
  missingFieldExceptionWithNewMessage2gqddjx5jxge9 as missingFieldExceptionWithNewMessage,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  OBJECT_getInstance2hwgzvvdc8p80 as OBJECT_getInstance,
  findPolymorphicSerializerk638ixyjovk5 as findPolymorphicSerializer_0,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  NamedValueDecoderzk26ztf92xbq as NamedValueDecoder,
  NamedValueEncoder1lca9edk1lf89 as NamedValueEncoder,
  getContextualDescriptor2n1gf3b895yb8 as getContextualDescriptor,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  toString30pk9tzaqopn as toString_0,
  Enum3alwj03lh1n41 as Enum,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  StringBuildermazzzhj6kkai as StringBuilder,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  KtMap140uvy3s5zad8 as KtMap,
  KtList3hktaavzmj137 as KtList,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  contains2c50nlxg7en7o as contains,
  convertToInty04h231mmjoh as convertToInt,
  NumberFormatException3bgsm2s9o4t55 as NumberFormatException,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toDouble1kn912gjoizjp as toDouble,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  StringCompanionObject_instance3btc7up7fjjpg as StringCompanionObject_instance,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstancehe6v7kxreu2f as Companion_getInstance,
  _ULong___get_data__impl__fggpzb35t7vg7og3i8u as _ULong___get_data__impl__fggpzb,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  constructCallableReference23y65rf941mch as constructCallableReference,
  lazy2hsh8ze7j6ikd as lazy,
  protoOf180f3jzyo7rfj as protoOf,
  captureStack1fzi4aczwc4hg as captureStack,
  isLettere1qnx5bysxbd as isLetter,
  Char19o2r8palgjof as Char,
  last2n4gf5az1lkn4 as last,
  toString336ienavfnzn0 as toString_1,
  charCodeAt1yspne1d8erbm as charCodeAt,
  isUpperCase16ivdixranflt as isUpperCase,
  fromInt2ii0rejb1w62w as fromInt,
  _UInt___init__impl__l7qpdl2rn8hu5x5mgv2 as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl21yokvu77tk3i9 as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k3fkiaf1q5xsf7 as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7km926x5dlwl9j as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc430zp6cgd9f0jq as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg7h00k2smi73g as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne1zu56ujvuii2n as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee309dhgco6do74 as UShort__toString_impl_edaoee,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  isBlank1dvkhjjvox3p0 as isBlank,
  Collection1k04j3hzsbod0 as Collection,
  toSet1glep2u1u9tcb as toSet,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  arrayCopytctsywo3h7gj as arrayCopy,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  getKClass3t8tygqu4lcxf as getKClass,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  substringBefore3n7kj60w69hju as substringBefore,
  removeSuffix3d61x5lsuvuho as removeSuffix,
  substringAfter1hku067gwr5ve as substringAfter,
  contains3ue2qo8xhmpf1 as contains_0,
  plus17rl43at52ays as plus,
  convertToByte2t4hntblnhq2k as convertToByte,
  convertToShortn6n5n7ruahkm as convertToShort,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  toUInt21lx0mz8wkp7c as toUInt,
  _UInt___get_data__impl__f0vqqw18g8a2o14g87q as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qryxuf3cmdpzyk as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g02451joe1vsk2vach as _UShort___get_data__impl__g0245,
  Companion_getInstance2bqk1h54tdzgh as Companion_getInstance_0,
  Companion_getInstance29en1y99grgx1 as Companion_getInstance_1,
  Companion_getInstancehpp5w6ty1u0b as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd1ka89vowck9tn as Char__toInt_impl_vasixd,
  equals2v6cggk171b6e as equals_0,
  numberToChar93r9buh19yek as numberToChar,
  toByte4i43936u611k as toByte,
  startsWith26w8qjqapeeq6 as startsWith,
  single29ec4rh52687r as single,
  emptySetcxexqki71qfa as emptySet,
  plus1ogy4liedzq5j as plus_0,
  toInt2q8uldh7sc951 as toInt,
  toList3jhuyej2anx2q as toList,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
  enumEntries20mr21zbe3az4 as enumEntries,
  toNumber2e2hj9zugjwi2 as toNumber,
  last1vo29oleiqj36 as last_0,
  removeLast3759euu1xvfa3 as removeLast,
  lastIndexOf2d52xhix5ymjr as lastIndexOf,
  Char__minus_impl_a2frrh370khreoakmi6 as Char__minus_impl_a2frrh,
  multiply2k9eolhnz1bjv as multiply,
  add2suhfggl4zvkk as add,
  subtract2orl8z9upxd9l as subtract,
  numberToLong2pakxeg38estk as numberToLong,
  negate13xrbakfwasjy as negate,
  charArray2ujmm1qusno00 as charArray,
  indexOfwa4w6635jewi as indexOf,
  indexOf1xbs558u7wr52 as indexOf_0,
  substringiqarkczpya5m as substring,
  HashMap1a0ld5kgwhmhv as HashMap,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Json {
  constructor(configuration, serializersModule) {
    Default_getInstance();
    this.n1m_1 = configuration;
    this.o1m_1 = serializersModule;
    this.p1m_1 = new DescriptorSchemaCache();
  }
  rz() {
    return this.o1m_1;
  }
  r10(serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.u1m();
    }
  }
  s10(deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.gz(), null);
    var result = input.vz(deserializer);
    lexer.i1n();
    return result;
  }
  q1m(serializer, value) {
    return writeJson(this, value, serializer);
  }
  r1m(deserializer, element) {
    return readJson(this, element, deserializer);
  }
  s1m(string) {
    return this.s10(JsonElementSerializer_getInstance(), string);
  }
}
class Default extends Json {
  constructor() {
    Default_instance = null;
    super(new JsonConfiguration(), EmptySerializersModule());
    Default_instance = this;
  }
}
class JsonBuilder {
  constructor(json) {
    this.j1n_1 = json.n1m_1.d1o_1;
    this.k1n_1 = json.n1m_1.i1o_1;
    this.l1n_1 = json.n1m_1.e1o_1;
    this.m1n_1 = json.n1m_1.f1o_1;
    this.n1n_1 = json.n1m_1.h1o_1;
    this.o1n_1 = json.n1m_1.j1o_1;
    this.p1n_1 = json.n1m_1.k1o_1;
    this.q1n_1 = json.n1m_1.m1o_1;
    this.r1n_1 = json.n1m_1.t1o_1;
    this.s1n_1 = json.n1m_1.o1o_1;
    this.t1n_1 = json.n1m_1.p1o_1;
    this.u1n_1 = json.n1m_1.q1o_1;
    this.v1n_1 = json.n1m_1.r1o_1;
    this.w1n_1 = json.n1m_1.s1o_1;
    this.x1n_1 = json.n1m_1.n1o_1;
    this.y1n_1 = json.n1m_1.g1o_1;
    this.z1n_1 = json.n1m_1.l1o_1;
    this.a1o_1 = json.rz();
    this.b1o_1 = json.n1m_1.u1o_1;
  }
  c1o() {
    if (this.z1n_1) {
      // Inline function 'kotlin.require' call
      if (!(this.q1n_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException.a2(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.r1n_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException.a2(toString(message_0));
      }
    }
    if (!this.n1n_1) {
      // Inline function 'kotlin.require' call
      if (!(this.o1n_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException.a2(toString(message_1));
      }
    } else if (!(this.o1n_1 === '    ')) {
      var tmp0 = this.o1n_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.o1n_1;
        throw IllegalArgumentException.a2(toString(message_2));
      }
    }
    return new JsonConfiguration(this.j1n_1, this.l1n_1, this.m1n_1, this.y1n_1, this.n1n_1, this.k1n_1, this.o1n_1, this.p1n_1, this.z1n_1, this.q1n_1, this.x1n_1, this.s1n_1, this.t1n_1, this.u1n_1, this.v1n_1, this.w1n_1, this.r1n_1, this.b1o_1);
  }
}
class JsonImpl extends Json {
  constructor(configuration, module_0) {
    super(configuration, module_0);
    validateConfiguration(this);
  }
}
class JsonClassDiscriminator {}
class JsonIgnoreUnknownKeys {}
class JsonNames {}
class JsonConfiguration {
  constructor(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    this.d1o_1 = encodeDefaults;
    this.e1o_1 = ignoreUnknownKeys;
    this.f1o_1 = isLenient;
    this.g1o_1 = allowStructuredMapKeys;
    this.h1o_1 = prettyPrint;
    this.i1o_1 = explicitNulls;
    this.j1o_1 = prettyPrintIndent;
    this.k1o_1 = coerceInputValues;
    this.l1o_1 = useArrayPolymorphism;
    this.m1o_1 = classDiscriminator;
    this.n1o_1 = allowSpecialFloatingPointValues;
    this.o1o_1 = useAlternativeNames;
    this.p1o_1 = namingStrategy;
    this.q1o_1 = decodeEnumsCaseInsensitive;
    this.r1o_1 = allowTrailingComma;
    this.s1o_1 = allowComments;
    this.t1o_1 = classDiscriminatorMode;
    this.u1o_1 = exceptionsWithDebugInfo;
  }
  toString() {
    return 'JsonConfiguration(encodeDefaults=' + this.d1o_1 + ', ignoreUnknownKeys=' + this.e1o_1 + ', isLenient=' + this.f1o_1 + ', ' + ('allowStructuredMapKeys=' + this.g1o_1 + ', prettyPrint=' + this.h1o_1 + ', explicitNulls=' + this.i1o_1 + ', ') + ("prettyPrintIndent='" + this.j1o_1 + "', coerceInputValues=" + this.k1o_1 + ', useArrayPolymorphism=' + this.l1o_1 + ', ') + ("classDiscriminator='" + this.m1o_1 + "', allowSpecialFloatingPointValues=" + this.n1o_1 + ', ') + ('useAlternativeNames=' + this.o1o_1 + ', namingStrategy=' + toString_0(this.p1o_1) + ', decodeEnumsCaseInsensitive=' + this.q1o_1 + ', ') + ('allowTrailingComma=' + this.r1o_1 + ', allowComments=' + this.s1o_1 + ', classDiscriminatorMode=' + this.t1o_1.toString() + ', exceptionsWithDebugInfo=' + this.u1o_1 + ')');
  }
}
class ClassDiscriminatorMode extends Enum {}
class JsonContentPolymorphicSerializer {
  constructor(baseClass) {
    this.v1o_1 = baseClass;
    this.w1o_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.v1o_1.f1() + '>', SEALED_getInstance(), []);
  }
  gz() {
    return this.w1o_1;
  }
  qz(encoder, value) {
    var tmp0_elvis_lhs = encoder.rz().w15(this.v1o_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.v1o_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).tz(encoder, value);
  }
  tz(encoder, value) {
    return this.qz(encoder, !(value == null) ? value : THROW_CCE());
  }
  uz(decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.x1o();
    var tmp = this.y1o(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.z1o().r1m(actualSerializer, tree);
  }
}
class JsonDecoder {}
class Companion {}
class JsonElement {}
class JsonObject extends JsonElement {
  constructor(content) {
    super();
    this.a1p_1 = content;
  }
  equals(other) {
    return equals(this.a1p_1, other);
  }
  hashCode() {
    return hashCode(this.a1p_1);
  }
  toString() {
    var tmp = this.a1p_1.b3();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  }
  j1() {
    return this.a1p_1.j1();
  }
  b1p(key) {
    return this.a1p_1.t4(key);
  }
  t4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.b1p((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  c1p(value) {
    return this.a1p_1.u4(value);
  }
  u4(value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.c1p(value instanceof JsonElement ? value : THROW_CCE());
  }
  dj(key) {
    return this.a1p_1.v4(key);
  }
  v4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.dj((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  asJsReadonlyMapView() {
    return this.a1p_1.asJsReadonlyMapView();
  }
  l2() {
    return this.a1p_1.l2();
  }
  r4() {
    return this.a1p_1.r4();
  }
  s4() {
    return this.a1p_1.s4();
  }
  b3() {
    return this.a1p_1.b3();
  }
}
class Companion_0 {}
class Companion_1 {}
class JsonPrimitive extends JsonElement {
  toString() {
    return this.e1p();
  }
}
class Companion_2 {}
class JsonArray extends JsonElement {
  constructor(content) {
    super();
    this.f1p_1 = content;
  }
  equals(other) {
    return equals(this.f1p_1, other);
  }
  hashCode() {
    return hashCode(this.f1p_1);
  }
  toString() {
    return joinToString(this.f1p_1, ',', '[', ']');
  }
  j1() {
    return this.f1p_1.j1();
  }
  g1p(element) {
    return this.f1p_1.o2(element);
  }
  o2(element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.g1p(element instanceof JsonElement ? element : THROW_CCE());
  }
  l1() {
    return this.f1p_1.l1();
  }
  h1p(elements) {
    return this.f1p_1.a4(elements);
  }
  a4(elements) {
    return this.h1p(elements);
  }
  n2(index) {
    return this.f1p_1.n2(index);
  }
  i1p(element) {
    return this.f1p_1.u2(element);
  }
  u2(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.i1p(element instanceof JsonElement ? element : THROW_CCE());
  }
  j1p(element) {
    return this.f1p_1.b4(element);
  }
  b4(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.j1p(element instanceof JsonElement ? element : THROW_CCE());
  }
  c4() {
    return this.f1p_1.c4();
  }
  q2(index) {
    return this.f1p_1.q2(index);
  }
  d4(fromIndex, toIndex) {
    return this.f1p_1.d4(fromIndex, toIndex);
  }
  asJsReadonlyArrayView() {
    return this.f1p_1.asJsReadonlyArrayView();
  }
  l2() {
    return this.f1p_1.l2();
  }
}
class JsonNull extends JsonPrimitive {
  constructor() {
    JsonNull_instance = null;
    super();
    JsonNull_instance = this;
    this.q1p_1 = 'null';
  }
  d1p() {
    return false;
  }
  e1p() {
    return this.q1p_1;
  }
  r1p() {
    return JsonNullSerializer_getInstance();
  }
  s1c(typeParamsSerializers) {
    return this.r1p();
  }
}
class JsonLiteral extends JsonPrimitive {
  constructor(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    super();
    this.t1p_1 = isString;
    this.u1p_1 = coerceToInlineType;
    this.v1p_1 = toString(body);
    if (!(this.u1p_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.u1p_1.i12()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException.a2(toString(message));
      }
    }
  }
  d1p() {
    return this.t1p_1;
  }
  e1p() {
    return this.v1p_1;
  }
  toString() {
    var tmp;
    if (this.t1p_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.h1();
      printQuoted(this_0, this.v1p_1);
      tmp = this_0.toString();
    } else {
      tmp = this.v1p_1;
    }
    return tmp;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.t1p_1 === other.t1p_1))
      return false;
    if (!(this.v1p_1 === other.v1p_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.t1p_1);
    result = imul(31, result) + getStringHashCode(this.v1p_1) | 0;
    return result;
  }
}
class JsonObjectBuilder {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.w1p_1 = LinkedHashMap.r5();
  }
  x1p(key, element) {
    return this.w1p_1.o4(key, element);
  }
  c1o() {
    return new JsonObject(this.w1p_1);
  }
}
class JsonArrayBuilder {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y1p_1 = ArrayList.j2();
  }
  z1p(element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.y1p_1.i2(element);
    return true;
  }
  c1o() {
    return new JsonArray(this.y1p_1);
  }
}
class JsonElementSerializer {
  constructor() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.f1q_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  gz() {
    return this.f1q_1;
  }
  g1q(encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.sz(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.sz(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.sz(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  tz(encoder, value) {
    return this.g1q(encoder, value instanceof JsonElement ? value : THROW_CCE());
  }
  uz(decoder) {
    var input = asJsonDecoder(decoder);
    return input.x1o();
  }
}
class JsonObjectDescriptor {
  constructor() {
    JsonObjectDescriptor_instance = this;
    this.h1q_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).gz();
    this.i1q_1 = 'kotlinx.serialization.json.JsonObject';
  }
  o10() {
    return this.i1q_1;
  }
  k12(index) {
    return this.h1q_1.k12(index);
  }
  l12(name) {
    return this.h1q_1.l12(name);
  }
  m12(index) {
    return this.h1q_1.m12(index);
  }
  n12(index) {
    return this.h1q_1.n12(index);
  }
  o12(index) {
    return this.h1q_1.o12(index);
  }
  h12() {
    return this.h1q_1.h12();
  }
  a12() {
    return this.h1q_1.a12();
  }
  i12() {
    return this.h1q_1.i12();
  }
  j12() {
    return this.h1q_1.j12();
  }
  hz() {
    return this.h1q_1.hz();
  }
}
class JsonObjectSerializer {
  constructor() {
    JsonObjectSerializer_instance = this;
    this.d1q_1 = JsonObjectDescriptor_getInstance();
  }
  gz() {
    return this.d1q_1;
  }
  j1q(encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).tz(encoder, value);
  }
  tz(encoder, value) {
    return this.j1q(encoder, value instanceof JsonObject ? value : THROW_CCE());
  }
  uz(decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).uz(decoder));
  }
}
class JsonPrimitiveSerializer {
  constructor() {
    JsonPrimitiveSerializer_instance = this;
    this.a1q_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  gz() {
    return this.a1q_1;
  }
  k1q(encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.sz(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.sz(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  }
  tz(encoder, value) {
    return this.k1q(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  }
  uz(decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.x1o();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.z1o().n1m_1.u1o_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  }
}
class JsonArrayDescriptor {
  constructor() {
    JsonArrayDescriptor_instance = this;
    this.y1q_1 = ListSerializer(JsonElementSerializer_getInstance()).gz();
    this.z1q_1 = 'kotlinx.serialization.json.JsonArray';
  }
  o10() {
    return this.z1q_1;
  }
  k12(index) {
    return this.y1q_1.k12(index);
  }
  l12(name) {
    return this.y1q_1.l12(name);
  }
  m12(index) {
    return this.y1q_1.m12(index);
  }
  n12(index) {
    return this.y1q_1.n12(index);
  }
  o12(index) {
    return this.y1q_1.o12(index);
  }
  h12() {
    return this.y1q_1.h12();
  }
  a12() {
    return this.y1q_1.a12();
  }
  i12() {
    return this.y1q_1.i12();
  }
  j12() {
    return this.y1q_1.j12();
  }
  hz() {
    return this.y1q_1.hz();
  }
}
class JsonArraySerializer {
  constructor() {
    JsonArraySerializer_instance = this;
    this.e1q_1 = JsonArrayDescriptor_getInstance();
  }
  gz() {
    return this.e1q_1;
  }
  a1r(encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).tz(encoder, value);
  }
  tz(encoder, value) {
    return this.a1r(encoder, value instanceof JsonArray ? value : THROW_CCE());
  }
  uz(decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).uz(decoder));
  }
}
class JsonNullSerializer {
  constructor() {
    JsonNullSerializer_instance = this;
    this.b1q_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  gz() {
    return this.b1q_1;
  }
  b1r(encoder, value) {
    verify(encoder);
    encoder.t14();
  }
  tz(encoder, value) {
    return this.b1r(encoder, value instanceof JsonNull ? value : THROW_CCE());
  }
  uz(decoder) {
    verify_0(decoder);
    if (decoder.k13()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.l13();
    return JsonNull_getInstance();
  }
}
class JsonLiteralSerializer {
  constructor() {
    JsonLiteralSerializer_instance = this;
    this.c1q_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  gz() {
    return this.c1q_1;
  }
  c1r(encoder, value) {
    verify(encoder);
    if (value.t1p_1) {
      return encoder.c15(value.v1p_1);
    }
    if (!(value.u1p_1 == null)) {
      return encoder.e15(value.u1p_1).c15(value.v1p_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.v1p_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.y14(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.v1p_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).m3_1;
      var tmp_1 = encoder.e15(serializer_0(Companion_getInstance()).gz());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.y14(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.v1p_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.a15(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.v1p_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.u14(tmp3_safe_receiver);
    }
    encoder.c15(value.v1p_1);
  }
  tz(encoder, value) {
    return this.c1r(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  }
  uz(decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.x1o();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.z1o().n1m_1.u1o_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  }
}
class defer$1 {
  constructor($deferred) {
    this.d1r_1 = lazy($deferred);
  }
  o10() {
    return _get_original__l7ku1m(this).o10();
  }
  h12() {
    return _get_original__l7ku1m(this).h12();
  }
  j12() {
    return _get_original__l7ku1m(this).j12();
  }
  k12(index) {
    return _get_original__l7ku1m(this).k12(index);
  }
  l12(name) {
    return _get_original__l7ku1m(this).l12(name);
  }
  m12(index) {
    return _get_original__l7ku1m(this).m12(index);
  }
  n12(index) {
    return _get_original__l7ku1m(this).n12(index);
  }
  o12(index) {
    return _get_original__l7ku1m(this).o12(index);
  }
}
class JsonEncoder {}
class JsonException extends SerializationException {
  static f1r(message) {
    var $this = this.h11(message);
    captureStack($this, $this.p1p_1);
    $this.o1p_1 = message;
    delete $this.message;
    return $this;
  }
  r() {
    return this.o1p_1;
  }
  get message() {
    return this.r();
  }
}
class JsonDecodingException extends JsonException {
  constructor(fullMessage, shortMessage, offset, path, input, hint) {
    return new.target.x1q(fullMessage, shortMessage, offset, path, input, hint);
  }
  static x1q(fullMessage, shortMessage, offset, path, input, hint) {
    var $this = this.f1r(fullMessage);
    captureStack($this, $this.w1q_1);
    $this.r1q_1 = shortMessage;
    $this.s1q_1 = offset;
    $this.t1q_1 = path;
    $this.u1q_1 = input;
    $this.v1q_1 = hint;
    return $this;
  }
}
class JsonEncodingException extends JsonException {
  constructor(shortMessage, classSerialName, hint) {
    return new.target.q1r(shortMessage, classSerialName, hint);
  }
  static q1r(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    var $this = this.f1r(formatEncodingException(shortMessage, hint));
    captureStack($this, $this.p1r_1);
    $this.m1r_1 = shortMessage;
    $this.n1r_1 = classSerialName;
    $this.o1r_1 = hint;
    return $this;
  }
}
class JsonNamingStrategy$Builtins$SnakeCase$1 {
  r1r(descriptor, elementIndex, serialName) {
    return convertCamelCase(Builtins_getInstance(), serialName, _Char___init__impl__6a9atx(95));
  }
  toString() {
    return 'kotlinx.serialization.json.JsonNamingStrategy.SnakeCase';
  }
}
class JsonNamingStrategy$Builtins$KebabCase$1 {
  r1r(descriptor, elementIndex, serialName) {
    return convertCamelCase(Builtins_getInstance(), serialName, _Char___init__impl__6a9atx(45));
  }
  toString() {
    return 'kotlinx.serialization.json.JsonNamingStrategy.KebabCase';
  }
}
class Builtins {
  constructor() {
    Builtins_instance = this;
    var tmp = this;
    tmp.s1r_1 = new JsonNamingStrategy$Builtins$SnakeCase$1();
    var tmp_0 = this;
    tmp_0.t1r_1 = new JsonNamingStrategy$Builtins$KebabCase$1();
  }
}
class JsonTransformingSerializer {
  constructor(tSerializer) {
    this.u1r_1 = tSerializer;
  }
  gz() {
    return this.u1r_1.gz();
  }
  tz(encoder, value) {
    var output = asJsonEncoder(encoder);
    var element = writeJson(output.z1o(), value, this.u1r_1);
    element = this.v1r(element);
    output.e1r(element);
  }
  uz(decoder) {
    var input = asJsonDecoder(decoder);
    var element = input.x1o();
    return input.z1o().r1m(this.u1r_1, this.w1r(element));
  }
  w1r(element) {
    return element;
  }
  v1r(element) {
    return element;
  }
}
class Composer {
  constructor(writer) {
    this.x1r_1 = writer;
    this.y1r_1 = true;
  }
  z1r() {
    this.y1r_1 = true;
  }
  a1s() {
    return Unit_instance;
  }
  b1s() {
    this.y1r_1 = false;
  }
  c1s() {
    this.y1r_1 = false;
  }
  d1s() {
    return Unit_instance;
  }
  e1s(v) {
    return this.x1r_1.f1s(v);
  }
  g1s(v) {
    return this.x1r_1.h1s(v);
  }
  i1s(v) {
    return this.x1r_1.h1s(v.toString());
  }
  j1s(v) {
    return this.x1r_1.h1s(v.toString());
  }
  k1s(v) {
    return this.x1r_1.l1s(fromInt(v));
  }
  m1s(v) {
    return this.x1r_1.l1s(fromInt(v));
  }
  n1s(v) {
    return this.x1r_1.l1s(fromInt(v));
  }
  o1s(v) {
    return this.x1r_1.l1s(v);
  }
  p1s(v) {
    return this.x1r_1.h1s(v.toString());
  }
  q1s(value) {
    return this.x1r_1.r1s(value);
  }
}
class ComposerForUnsignedNumbers extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.u1s_1 = forceQuoting;
  }
  n1s(v) {
    if (this.u1s_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.q1s(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.g1s(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  }
  o1s(v) {
    if (this.u1s_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.q1s(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.g1s(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  }
  k1s(v) {
    if (this.u1s_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.q1s(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.g1s(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  }
  m1s(v) {
    if (this.u1s_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.q1s(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.g1s(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  }
}
class ComposerForUnquotedLiterals extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.x1s_1 = forceQuoting;
  }
  q1s(value) {
    if (this.x1s_1) {
      super.q1s(value);
    } else {
      super.g1s(value);
    }
  }
}
class ComposerWithPrettyPrint extends Composer {
  constructor(writer, json) {
    super(writer);
    this.a1t_1 = json;
    this.b1t_1 = 0;
  }
  z1r() {
    this.y1r_1 = true;
    this.b1t_1 = this.b1t_1 + 1 | 0;
  }
  a1s() {
    this.b1t_1 = this.b1t_1 - 1 | 0;
  }
  b1s() {
    this.y1r_1 = false;
    this.g1s('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.b1t_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.g1s(this.a1t_1.n1m_1.j1o_1);
      }
       while (inductionVariable < times);
  }
  c1s() {
    if (this.y1r_1)
      this.y1r_1 = false;
    else {
      this.b1s();
    }
  }
  d1s() {
    this.e1s(_Char___init__impl__6a9atx(32));
  }
}
class JsonElementMarker {
  constructor(descriptor) {
    var tmp = this;
    tmp.c1t_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.d1t_1 = false;
  }
  e1t(index) {
    this.c1t_1.f1a(index);
  }
  f1t() {
    return this.c1t_1.g1a();
  }
}
class Tombstone {}
class RedactedKey {}
class JsonPath {
  constructor(configuration) {
    this.l1t_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.m1t_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.n1t_1 = tmp_2;
    this.o1t_1 = -1;
  }
  p1t(sd) {
    this.o1t_1 = this.o1t_1 + 1 | 0;
    var depth = this.o1t_1;
    if (depth === this.m1t_1.length) {
      resize(this);
    }
    this.m1t_1[depth] = sd;
  }
  q1t(index) {
    this.n1t_1[this.o1t_1] = index;
  }
  r1t(key) {
    var tmp;
    if (!(this.n1t_1[this.o1t_1] === -2)) {
      this.o1t_1 = this.o1t_1 + 1 | 0;
      tmp = this.o1t_1 === this.m1t_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.m1t_1[this.o1t_1] = this.l1t_1.u1o_1 ? key : RedactedKey_instance;
    this.n1t_1[this.o1t_1] = -2;
  }
  s1t() {
    if (this.n1t_1[this.o1t_1] === -2) {
      this.m1t_1[this.o1t_1] = Tombstone_instance;
    }
  }
  t1t() {
    var depth = this.o1t_1;
    if (this.n1t_1[depth] === -2) {
      this.n1t_1[depth] = -1;
      this.o1t_1 = this.o1t_1 - 1 | 0;
    }
    if (!(this.o1t_1 === -1)) {
      this.o1t_1 = this.o1t_1 - 1 | 0;
    }
  }
  u1t() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.h1();
    this_0.i1('$');
    // Inline function 'kotlin.repeat' call
    var times = this.o1t_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.m1t_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.h12(), LIST_getInstance())) {
            if (!(this.n1t_1[index] === -1)) {
              this_0.i1('[');
              this_0.ph(this.n1t_1[index]);
              this_0.i1(']');
            }
          } else {
            var idx = this.n1t_1[index];
            if (idx >= 0) {
              this_0.i1('.');
              this_0.i1(element.k12(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.i1('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.i1('[');
              this_0.i1("'");
              this_0.o1(element);
              this_0.i1("'");
              this_0.i1(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  }
  toString() {
    return this.u1t();
  }
}
class JsonSerializersModuleValidator {
  constructor(configuration) {
    this.v1t_1 = configuration.l1o_1;
    this.w1t_1 = !configuration.t1o_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  m1l(kClass, provider) {
  }
  p1l(baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.gz();
    checkKind(this, descriptor, actualClass);
  }
  q1l(baseClass, defaultSerializerProvider) {
  }
  r1l(baseClass, defaultDeserializerProvider) {
  }
}
class JsonTreeReader {
  constructor(configuration, lexer) {
    this.h1u_1 = lexer;
    this.i1u_1 = configuration.f1o_1;
    this.j1u_1 = configuration.r1o_1;
    this.k1u_1 = 0;
  }
  q1u() {
    var token = this.h1u_1.m1u();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.k1u_1 = this.k1u_1 + 1 | 0;
      if (this.k1u_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.k1u_1 = this.k1u_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.h1u_1.h1t('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  }
}
class Key {}
class DescriptorSchemaCache {
  constructor() {
    this.i1t_1 = createMapForCache(16);
  }
  t1u(descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.i1t_1;
    var value_0 = this_0.v4(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.o4(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.o4(tmp2, value_1);
  }
  j1t(descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.u1u(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.t1u(descriptor, key, value);
    return value;
  }
  u1u(descriptor, key) {
    var tmp0_safe_receiver = this.i1t_1.v4(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.v4(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  }
}
class DiscriminatorHolder {
  constructor(discriminatorToSkip) {
    this.v1u_1 = discriminatorToSkip;
  }
}
class StreamingJsonDecoder extends AbstractDecoder {
  constructor(json, mode, lexer, descriptor, discriminatorHolder) {
    super();
    this.v1m_1 = json;
    this.w1m_1 = mode;
    this.x1m_1 = lexer;
    this.y1m_1 = this.v1m_1.rz();
    this.z1m_1 = -1;
    this.a1n_1 = discriminatorHolder;
    this.b1n_1 = this.v1m_1.n1m_1;
    this.c1n_1 = this.b1n_1.i1o_1 ? null : new JsonElementMarker(descriptor);
  }
  z1o() {
    return this.v1m_1;
  }
  rz() {
    return this.y1m_1;
  }
  x1o() {
    return (new JsonTreeReader(this.v1m_1.n1m_1, this.x1m_1)).q1u();
  }
  vz(deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.v1m_1.n1m_1.l1o_1;
      }
      if (tmp) {
        return deserializer.uz(this);
      }
      var discriminator = classDiscriminator(deserializer.gz(), this.v1m_1);
      var tmp0_elvis_lhs = this.x1m_1.e1v(discriminator, this.b1n_1.f1o_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.z1o().n1m_1.l1o_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.uz(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.gz(), this.z1o());
          var tmp2_0 = this.x1o();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.gz().o10();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2_0).f1() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.x1m_1.f1n_1.u1t();
            var tmp_2;
            if (this.z1o().n1m_1.u1o_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.dj(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_3;
          try {
            tmp_3 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_4;
            if ($p instanceof SerializationException) {
              var it = $p;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var shortMessage = ensureNotNull(it.message);
              var tmp_5;
              if (this.z1o().n1m_1.u1o_1) {
                var tmp$ret$10 = jsonTree.toString();
                tmp_5 = toString(minify(tmp$ret$10));
              } else {
                tmp_5 = null;
              }
              var inputValue_0 = tmp_5;
              throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_3;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.z1o(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p_0) {
        var tmp_8;
        if ($p_0 instanceof SerializationException) {
          var it_0 = $p_0;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.x1m_1.h1t(message, VOID, hint);
        } else {
          throw $p_0;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.a1n_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.uz(this);
    } catch ($p_1) {
      if ($p_1 instanceof MissingFieldException) {
        var e = $p_1;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.x1m_1.f1n_1.u1t());
      } else {
        throw $p_1;
      }
    }
  }
  y13(descriptor) {
    var newMode = switchMode(this.v1m_1, descriptor);
    this.x1m_1.f1n_1.p1t(descriptor);
    this.x1m_1.w1u(newMode.h1v_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.s1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.v1m_1, newMode, this.x1m_1, descriptor, this.a1n_1);
        break;
      default:
        var tmp_0;
        if (this.w1m_1.equals(newMode) && this.v1m_1.n1m_1.i1o_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.v1m_1, newMode, this.x1m_1, descriptor, this.a1n_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  z13(descriptor) {
    if (descriptor.j12() === 0 && ignoreUnknownKeys(descriptor, this.v1m_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.x1m_1.x1u() && !this.v1m_1.n1m_1.r1o_1) {
      invalidTrailingComma(this.x1m_1, '');
    }
    this.x1m_1.w1u(this.w1m_1.i1v_1);
    this.x1m_1.f1n_1.t1t();
  }
  k13() {
    var tmp;
    var tmp0_safe_receiver = this.c1n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1t_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.x1m_1.j1v();
    } else {
      tmp = false;
    }
    return tmp;
  }
  l13() {
    return null;
  }
  k14(descriptor, index, deserializer, previousValue) {
    var isMapKey = this.w1m_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.x1m_1.f1n_1.s1t();
    }
    var value = super.k14(descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.x1m_1.f1n_1.r1t(value);
    }
    return value;
  }
  o14(descriptor) {
    var index;
    switch (this.w1m_1.s1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.w1m_1.equals(WriteMode_MAP_getInstance())) {
      this.x1m_1.f1n_1.q1t(index);
    }
    return index;
  }
  m13() {
    return this.x1m_1.k1v();
  }
  n13() {
    var value = this.x1m_1.l1v();
    if (!(value === fromInt(convertToByte(value)))) {
      this.x1m_1.h1t("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  }
  o13() {
    var value = this.x1m_1.l1v();
    if (!(value === fromInt(convertToShort(value)))) {
      this.x1m_1.h1t("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  }
  p13() {
    var value = this.x1m_1.l1v();
    if (!(value === fromInt(convertToInt(value)))) {
      this.x1m_1.h1t("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  }
  q13() {
    return this.x1m_1.l1v();
  }
  r13() {
    var tmp0 = this.x1m_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1u();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1t("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.v1m_1.n1m_1.n1o_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.x1m_1, result);
  }
  s13() {
    var tmp0 = this.x1m_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1u();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1t("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.v1m_1.n1m_1.n1o_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.x1m_1, result);
  }
  t13() {
    var string = this.x1m_1.p1u();
    if (!(string.length === 1)) {
      this.x1m_1.h1t("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  }
  u13() {
    var tmp;
    if (this.b1n_1.f1o_1) {
      tmp = this.x1m_1.d1v();
    } else {
      tmp = this.x1m_1.o1u();
    }
    return tmp;
  }
  w13(descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.x1m_1, this.v1m_1) : super.w13(descriptor);
  }
  v13(enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.v1m_1, this.u13(), ' at path ' + this.x1m_1.f1n_1.u1t());
  }
}
class JsonDecoderForUnsignedTypes extends AbstractDecoder {
  constructor(lexer, json) {
    super();
    this.m1v_1 = lexer;
    this.n1v_1 = json.rz();
  }
  rz() {
    return this.n1v_1;
  }
  o14(descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException.o(toString(message));
  }
  p13() {
    var tmp0 = this.m1v_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1u();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1t("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  q13() {
    var tmp0 = this.m1v_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1u();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1t("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  n13() {
    var tmp0 = this.m1v_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1u();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1t("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  o13() {
    var tmp0 = this.m1v_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.p1u();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1t("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
}
class StreamingJsonEncoder extends AbstractEncoder {
  constructor(composer, json, mode, modeReuseCache) {
    return new.target.o1v(composer, json, mode, modeReuseCache);
  }
  static o1v(composer, json, mode, modeReuseCache) {
    var $this = this.q14();
    $this.x1t_1 = composer;
    $this.y1t_1 = json;
    $this.z1t_1 = mode;
    $this.a1u_1 = modeReuseCache;
    $this.b1u_1 = $this.y1t_1.rz();
    $this.c1u_1 = $this.y1t_1.n1m_1;
    $this.d1u_1 = false;
    $this.e1u_1 = null;
    $this.f1u_1 = null;
    var i = $this.z1t_1.s1_1;
    if (!($this.a1u_1 == null)) {
      if (!($this.a1u_1[i] === null) || !($this.a1u_1[i] === $this)) {
        $this.a1u_1[i] = $this;
      }
    }
    return $this;
  }
  z1o() {
    return this.y1t_1;
  }
  static g1u(output, json, mode, modeReuseCache) {
    return this.o1v(Composer_0(output, json), json, mode, modeReuseCache);
  }
  rz() {
    return this.b1u_1;
  }
  e1r(element) {
    var tmp;
    if (!(this.e1u_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.f1u_1, element);
    }
    this.sz(JsonElementSerializer_getInstance(), element);
  }
  u15(descriptor, index) {
    return this.c1u_1.d1o_1;
  }
  sz(serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.z1o().n1m_1.l1o_1) {
        serializer.tz(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.z1o().n1m_1.t1o_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.z1o().n1m_1.t1o_1.s1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.gz().h12();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.gz(), this.z1o()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.gz()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException.a2(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        access$checkEncodingConflicts$tPolymorphicKt(this.z1o(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.gz().h12());
        var serialName = actualSerializer.gz().o10();
        this.e1u_1 = baseClassDiscriminator;
        this.f1u_1 = serialName;
      }
      actualSerializer.tz(this, value);
    }
  }
  y13(descriptor) {
    var newMode = switchMode(this.y1t_1, descriptor);
    if (!(newMode.h1v_1 === _Char___init__impl__6a9atx(0))) {
      this.x1t_1.e1s(newMode.h1v_1);
      this.x1t_1.z1r();
    }
    var discriminator = this.e1u_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.f1u_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.o10() : tmp0_elvis_lhs);
      this.e1u_1 = null;
      this.f1u_1 = null;
    }
    if (this.z1t_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.a1u_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.s1_1];
    return tmp2_elvis_lhs == null ? StreamingJsonEncoder.o1v(this.x1t_1, this.y1t_1, newMode, this.a1u_1) : tmp2_elvis_lhs;
  }
  z13(descriptor) {
    if (!(this.z1t_1.i1v_1 === _Char___init__impl__6a9atx(0))) {
      this.x1t_1.a1s();
      this.x1t_1.c1s();
      this.x1t_1.e1s(this.z1t_1.i1v_1);
    }
  }
  r14(descriptor, index) {
    switch (this.z1t_1.s1_1) {
      case 1:
        if (!this.x1t_1.y1r_1) {
          this.x1t_1.e1s(_Char___init__impl__6a9atx(44));
        }

        this.x1t_1.b1s();
        break;
      case 2:
        if (!this.x1t_1.y1r_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.x1t_1.e1s(_Char___init__impl__6a9atx(44));
            this.x1t_1.b1s();
            tmp_0 = true;
          } else {
            this.x1t_1.e1s(_Char___init__impl__6a9atx(58));
            this.x1t_1.d1s();
            tmp_0 = false;
          }
          tmp.d1u_1 = tmp_0;
        } else {
          this.d1u_1 = true;
          this.x1t_1.b1s();
        }

        break;
      case 3:
        if (index === 0)
          this.d1u_1 = true;
        if (index === 1) {
          this.x1t_1.e1s(_Char___init__impl__6a9atx(44));
          this.x1t_1.d1s();
          this.d1u_1 = false;
        }

        break;
      default:
        if (!this.x1t_1.y1r_1) {
          this.x1t_1.e1s(_Char___init__impl__6a9atx(44));
        }

        this.x1t_1.b1s();
        this.c15(getJsonElementName(descriptor, this.y1t_1, index));
        this.x1t_1.e1s(_Char___init__impl__6a9atx(58));
        this.x1t_1.d1s();
        break;
    }
    return true;
  }
  q15(descriptor, index, serializer, value) {
    if (!(value == null) || this.c1u_1.i1o_1) {
      super.q15(descriptor, index, serializer, value);
    }
  }
  e15(descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.x1t_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.x1t_1;
      } else {
        var tmp0 = this.x1t_1.x1r_1;
        var p1 = this.d1u_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = StreamingJsonEncoder.o1v(tmp$ret$0, this.y1t_1, this.z1t_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.x1t_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.x1t_1;
      } else {
        var tmp0_0 = this.x1t_1.x1r_1;
        var p1_0 = this.d1u_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = StreamingJsonEncoder.o1v(tmp$ret$2, this.y1t_1, this.z1t_1, null);
    } else if (!(this.e1u_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.f1u_1 = descriptor.o10();
      tmp = this;
    } else {
      tmp = super.e15(descriptor);
    }
    return tmp;
  }
  t14() {
    this.x1t_1.g1s('null');
  }
  u14(value) {
    if (this.d1u_1) {
      this.c15(value.toString());
    } else {
      this.x1t_1.p1s(value);
    }
  }
  v14(value) {
    if (this.d1u_1) {
      this.c15(value.toString());
    } else {
      this.x1t_1.k1s(value);
    }
  }
  w14(value) {
    if (this.d1u_1) {
      this.c15(value.toString());
    } else {
      this.x1t_1.m1s(value);
    }
  }
  x14(value) {
    if (this.d1u_1) {
      this.c15(value.toString());
    } else {
      this.x1t_1.n1s(value);
    }
  }
  y14(value) {
    if (this.d1u_1) {
      this.c15(value.toString());
    } else {
      this.x1t_1.o1s(value);
    }
  }
  z14(value) {
    if (this.d1u_1) {
      this.c15(value.toString());
    } else {
      this.x1t_1.i1s(value);
    }
    if (!this.c1u_1.n1o_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  }
  a15(value) {
    if (this.d1u_1) {
      this.c15(value.toString());
    } else {
      this.x1t_1.j1s(value);
    }
    if (!this.c1u_1.n1o_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  }
  b15(value) {
    this.c15(toString_1(value));
  }
  c15(value) {
    return this.x1t_1.q1s(value);
  }
  d15(enumDescriptor, index) {
    this.c15(enumDescriptor.k12(index));
  }
}
class AbstractJsonTreeDecoder extends NamedValueDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super();
    this.r1v_1 = json;
    this.s1v_1 = value;
    this.t1v_1 = polymorphicDiscriminator;
    this.u1v_1 = this.z1o().n1m_1;
  }
  z1o() {
    return this.r1v_1;
  }
  d3() {
    return this.s1v_1;
  }
  rz() {
    return this.z1o().rz();
  }
  w1v() {
    var tmp0_safe_receiver = this.k1i();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.x1v(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.d3() : tmp1_elvis_lhs;
  }
  v1v(currentTag) {
    return this.m1i() + ('.' + currentTag);
  }
  x1o() {
    return this.w1v();
  }
  vz(deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.z1o().n1m_1.l1o_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.uz(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.gz(), this.z1o());
      var tmp2 = this.x1o();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.gz().o10();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.m1i();
        var tmp_0;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.dj(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var shortMessage = ensureNotNull(it.message);
          var tmp_3;
          if (this.z1o().n1m_1.u1o_1) {
            var tmp$ret$10 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$10));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_1;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.z1o(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  }
  l1i(parentName, childName) {
    return childName;
  }
  y13(descriptor) {
    var currentObject = this.w1v();
    var tmp0_subject = descriptor.h12();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.z1o();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.o10();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.m1i();
        var tmp_2;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.z1o();
        var keyDescriptor = carrierDescriptor(descriptor.n12(0), this_0.rz());
        var keyKind = keyDescriptor.h12();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.z1o();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.o10();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.m1i();
            var tmp_6;
            if (this.z1o().n1m_1.u1o_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject);
        } else {
          if (this_0.n1m_1.g1o_1) {
            var tmp_7 = this.z1o();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.o10();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.m1i();
              var tmp_8;
              if (this.z1o().n1m_1.u1o_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.z1o();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.o10();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.m1i();
          var tmp_10;
          if (this.z1o().n1m_1.u1o_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.t1v_1);
      }
    }
    return tmp;
  }
  z13(descriptor) {
  }
  k13() {
    var tmp = this.w1v();
    return !(tmp instanceof JsonNull);
  }
  y1v(tag, enumDescriptor) {
    var tmp = this.z1o();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.x1v(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.o10();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.v1v(tag);
      var tmp_0;
      if (this.z1o().n1m_1.u1o_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.e1p());
  }
  y1i(tag, enumDescriptor) {
    return this.y1v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  }
  z1v(tag) {
    return !(this.x1v(tag) === JsonNull_getInstance());
  }
  o1i(tag) {
    return this.z1v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  a1w(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x1v(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.v1v(tag);
        var tmp;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  p1i(tag) {
    return this.a1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  b1w(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x1v(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.v1v(tag);
        var tmp;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  q1i(tag) {
    return this.b1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  c1w(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x1v(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.v1v(tag);
        var tmp;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  r1i(tag) {
    return this.c1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  d1w(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x1v(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.v1v(tag);
        var tmp;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  s1i(tag) {
    return this.d1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  e1w(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x1v(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.v1v(tag);
        var tmp;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  t1i(tag) {
    return this.e1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  f1w(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x1v(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.v1v(tag);
        var tmp;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.z1o().n1m_1.n1o_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.z1o().n1m_1.u1o_1) {
      var tmp$ret$13 = toString(this.w1v());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  }
  u1i(tag) {
    return this.f1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  g1w(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x1v(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.v1v(tag);
        var tmp;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.z1o().n1m_1.n1o_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.z1o().n1m_1.u1o_1) {
      var tmp$ret$13 = toString(this.w1v());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  }
  v1i(tag) {
    return this.g1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  h1w(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x1v(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.v1v(tag);
        var tmp;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.e1p()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.n3_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  w1i(tag) {
    return this.h1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  i1w(tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.x1v(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.v1v(tag);
      var tmp;
      if (this.z1o().n1m_1.u1o_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.v1v(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.z1o().n1m_1.u1o_1) {
        var tmp$ret$10 = toString(this.w1v());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.t1p_1 && !this.z1o().n1m_1.f1o_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.v1v(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.z1o().n1m_1.u1o_1) {
        var tmp$ret$14 = toString(this.w1v());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.v1p_1;
  }
  x1i(tag) {
    return this.i1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  j1w(tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.z1o();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.x1v(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.o10();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.v1v(tag);
        var tmp_1;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.e1p());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.z1o());
    } else {
      tmp = super.z1i(tag, inlineDescriptor);
    }
    return tmp;
  }
  z1i(tag, inlineDescriptor) {
    return this.j1w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  w13(descriptor) {
    return !(this.k1i() == null) ? super.w13(descriptor) : (new JsonPrimitiveDecoder(this.z1o(), this.d3(), this.t1v_1)).w13(descriptor);
  }
}
class JsonTreeDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    super(json, value, polymorphicDiscriminator);
    this.q1w_1 = value;
    this.r1w_1 = polyDescriptor;
    this.s1w_1 = 0;
    this.t1w_1 = false;
  }
  d3() {
    return this.q1w_1;
  }
  o14(descriptor) {
    $l$loop: while (this.s1w_1 < descriptor.j12()) {
      var _unary__edvuaz = this.s1w_1;
      this.s1w_1 = _unary__edvuaz + 1 | 0;
      var name = this.f1i(descriptor, _unary__edvuaz);
      var index = this.s1w_1 - 1 | 0;
      this.t1w_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.d3();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).t4(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.u1v_1.k1o_1)
          return index;
        var tmp0 = this.z1o();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.o12(index);
          var elementDescriptor = descriptor.n12(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.a12()) {
            var tmp_1 = this.u1w(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.h12(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.a12()) {
              var tmp_3 = this.u1w(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.u1w(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.n1m_1.i1o_1 && elementDescriptor.a12();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  }
  k13() {
    return !this.t1w_1 && super.k13();
  }
  g1i(descriptor, index) {
    var strategy = namingStrategy(descriptor, this.z1o());
    var baseName = descriptor.k12(index);
    if (strategy == null) {
      if (!this.u1v_1.o1o_1)
        return baseName;
      if (this.d3().r4().o2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.z1o(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.d3().r4();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (deserializationNamesMap_0.v4(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.r1r(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  }
  x1v(tag) {
    return getValue(this.d3(), tag);
  }
  u1w(tag) {
    return this.d3().dj(tag);
  }
  y13(descriptor) {
    if (descriptor === this.r1w_1) {
      var tmp = this.z1o();
      var tmp2 = this.w1v();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.r1w_1.o10();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.m1i();
        var tmp_0;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.t1v_1, this.r1w_1);
    }
    return super.y13(descriptor);
  }
  z13(descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.z1o())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.h12();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.z1o());
    var tmp_1;
    if (strategy == null && !this.u1v_1.o1o_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.z1o(), descriptor).r4();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.z1o()).u1u(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r4();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.d3().r4().l1();
    while (_iterator__ex2g4s.m1()) {
      var key = _iterator__ex2g4s.n1();
      if (!names.o2(key) && !(key === this.t1v_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.m1i();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.z1o().n1m_1.u1o_1) {
          var tmp$ret$4 = this.d3().toString();
          tmp_3 = toString(minify(tmp$ret$4));
        } else {
          tmp_3 = null;
        }
        var inputValue = tmp_3;
        throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
      }
    }
  }
}
class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.b1x_1 = value;
    this.c1x_1 = this.b1x_1.l2();
    this.d1x_1 = -1;
  }
  d3() {
    return this.b1x_1;
  }
  g1i(descriptor, index) {
    return index.toString();
  }
  x1v(tag) {
    return this.b1x_1.n2(toInt(tag));
  }
  o14(descriptor) {
    while (this.d1x_1 < (this.c1x_1 - 1 | 0)) {
      this.d1x_1 = this.d1x_1 + 1 | 0;
      return this.d1x_1;
    }
    return -1;
  }
}
class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super(json, value, polymorphicDiscriminator);
    this.k1x_1 = value;
    this.a1j('primitive');
  }
  d3() {
    return this.k1x_1;
  }
  o14(descriptor) {
    return 0;
  }
  x1v(tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException.a2(toString(message));
    }
    return this.k1x_1;
  }
}
class JsonTreeMapDecoder extends JsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.v1x_1 = value;
    this.w1x_1 = toList(this.v1x_1.r4());
    this.x1x_1 = imul(this.w1x_1.l2(), 2);
    this.y1x_1 = -1;
  }
  d3() {
    return this.v1x_1;
  }
  g1i(descriptor, index) {
    var i = index / 2 | 0;
    return this.w1x_1.n2(i);
  }
  o14(descriptor) {
    while (this.y1x_1 < (this.x1x_1 - 1 | 0)) {
      this.y1x_1 = this.y1x_1 + 1 | 0;
      return this.y1x_1;
    }
    return -1;
  }
  x1v(tag) {
    return (this.y1x_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.v1x_1, tag);
  }
  z13(descriptor) {
  }
}
class AbstractJsonTreeEncoder extends NamedValueEncoder {
  constructor(json, nodeConsumer) {
    super();
    this.a1y_1 = json;
    this.b1y_1 = nodeConsumer;
    this.c1y_1 = this.a1y_1.n1m_1;
    this.d1y_1 = null;
    this.e1y_1 = null;
  }
  z1o() {
    return this.a1y_1;
  }
  rz() {
    return this.a1y_1.rz();
  }
  g1i(descriptor, index) {
    return getJsonElementName(descriptor, this.a1y_1, index);
  }
  e1r(element) {
    var tmp;
    if (!(this.d1y_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.e1y_1, element);
    }
    this.sz(JsonElementSerializer_getInstance(), element);
  }
  u15(descriptor, index) {
    return this.c1y_1.d1o_1;
  }
  l1i(parentName, childName) {
    return childName;
  }
  s15() {
  }
  t14() {
    var tmp0_elvis_lhs = this.k1i();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.b1y_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.o1y(tag);
  }
  o1y(tag) {
    return this.m1y(tag, JsonNull_getInstance());
  }
  g1j(tag) {
    return this.o1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  p1y(tag, value) {
    return this.m1y(tag, JsonPrimitive_1(value));
  }
  h1j(tag, value) {
    return this.p1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  q1y(tag, value) {
    return this.m1y(tag, JsonPrimitive_1(value));
  }
  i1j(tag, value) {
    return this.q1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  r1y(tag, value) {
    return this.m1y(tag, JsonPrimitive_1(value));
  }
  j1j(tag, value) {
    return this.r1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  s1y(tag, value) {
    return this.m1y(tag, JsonPrimitive_1(value));
  }
  k1j(tag, value) {
    return this.s1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  t1y(tag, value) {
    this.m1y(tag, JsonPrimitive_1(value));
    if (!this.c1y_1.n1o_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  }
  l1j(tag, value) {
    return this.t1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  sz(serializer, value) {
    if (!(this.k1i() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.gz(), this.rz()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.z1o().n1m_1.l1o_1) {
          serializer.tz(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.z1o().n1m_1.t1o_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.z1o().n1m_1.t1o_1.s1_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.gz().h12();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.gz(), this.z1o()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.gz()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException.a2(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          access$checkEncodingConflicts$tPolymorphicKt(this.z1o(), serializer, actualSerializer, baseClassDiscriminator);
          checkKind_0(actualSerializer.gz().h12());
          var serialName = actualSerializer.gz().o10();
          this.d1y_1 = baseClassDiscriminator;
          this.e1y_1 = serialName;
        }
        actualSerializer.tz(this, value);
      }
    } else {
      // Inline function 'kotlin.run' call
      (new JsonPrimitiveEncoder(this.a1y_1, this.b1y_1)).sz(serializer, value);
    }
  }
  u1y(tag, value) {
    this.m1y(tag, JsonPrimitive_1(value));
    if (!this.c1y_1.n1o_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  }
  m1j(tag, value) {
    return this.u1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  v1y(tag, value) {
    return this.m1y(tag, JsonPrimitive_2(value));
  }
  n1j(tag, value) {
    return this.v1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  w1y(tag, value) {
    return this.m1y(tag, JsonPrimitive_0(toString_1(value)));
  }
  o1j(tag, value) {
    return this.w1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  x1y(tag, value) {
    return this.m1y(tag, JsonPrimitive_0(value));
  }
  p1j(tag, value) {
    return this.x1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  y1y(tag, enumDescriptor, ordinal) {
    return this.m1y(tag, JsonPrimitive_0(enumDescriptor.k12(ordinal)));
  }
  q1j(tag, enumDescriptor, ordinal) {
    return this.y1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  }
  z1y(tag, value) {
    this.m1y(tag, JsonPrimitive_0(toString(value)));
  }
  e1j(tag, value) {
    return this.z1y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  a1z(tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : super.r1j(tag, inlineDescriptor);
  }
  r1j(tag, inlineDescriptor) {
    return this.a1z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  e15(descriptor) {
    var tmp;
    if (!(this.k1i() == null)) {
      if (!(this.d1y_1 == null))
        this.e1y_1 = descriptor.o10();
      tmp = super.e15(descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.a1y_1, this.b1y_1)).e15(descriptor);
    }
    return tmp;
  }
  y13(descriptor) {
    var tmp;
    if (this.k1i() == null) {
      tmp = this.b1y_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.h12();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.a1y_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.a1y_1;
        var keyDescriptor = carrierDescriptor(descriptor.n12(0), this_0.rz());
        var keyKind = keyDescriptor.h12();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.a1y_1, consumer);
        } else {
          if (this_0.n1m_1.g1o_1) {
            tmp_2 = new JsonTreeListEncoder(this.a1y_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.a1y_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.d1y_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.m1y('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.e1y_1;
        encoder.m1y('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.o10() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.e1y_1;
        encoder.m1y(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.o10() : tmp2_elvis_lhs));
      }
      this.d1y_1 = null;
      this.e1y_1 = null;
    }
    return encoder;
  }
  s1j(descriptor) {
    this.b1y_1(this.n1y());
  }
}
class JsonTreeEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.l1y_1 = LinkedHashMap.r5();
  }
  m1y(key, element) {
    // Inline function 'kotlin.collections.set' call
    this.l1y_1.o4(key, element);
  }
  q15(descriptor, index, serializer, value) {
    if (!(value == null) || this.c1y_1.i1o_1) {
      super.q15(descriptor, index, serializer, value);
    }
  }
  n1y() {
    return new JsonObject(this.l1y_1);
  }
}
class AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1 extends AbstractEncoder {
  constructor(this$0, $tag) {
    return new.target.e1z(this$0, $tag);
  }
  static e1z(this$0, $tag, $box) {
    if ($box === VOID)
      $box = {};
    $box.c1z_1 = this$0;
    $box.d1z_1 = $tag;
    var $this = this.q14($box);
    $this.b1z_1 = this$0.a1y_1.rz();
    return $this;
  }
  rz() {
    return this.b1z_1;
  }
  j1z(s) {
    return this.c1z_1.m1y(this.d1z_1, new JsonLiteral(s, false));
  }
  x14(value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.j1z(UInt__toString_impl_dbgl21(tmp$ret$0));
  }
  y14(value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.j1z(ULong__toString_impl_f9au7k(tmp$ret$0));
  }
  v14(value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.j1z(UByte__toString_impl_v72jg(tmp$ret$0));
  }
  w14(value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.j1z(UShort__toString_impl_edaoee(tmp$ret$0));
  }
}
class AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1 extends AbstractEncoder {
  constructor(this$0, $tag, $inlineDescriptor) {
    return new.target.i1z(this$0, $tag, $inlineDescriptor);
  }
  static i1z(this$0, $tag, $inlineDescriptor, $box) {
    if ($box === VOID)
      $box = {};
    $box.f1z_1 = this$0;
    $box.g1z_1 = $tag;
    $box.h1z_1 = $inlineDescriptor;
    return this.q14($box);
  }
  rz() {
    return this.f1z_1.a1y_1.rz();
  }
  c15(value) {
    return this.f1z_1.m1y(this.g1z_1, new JsonLiteral(value, false, this.h1z_1));
  }
}
class JsonPrimitiveEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.z1z_1 = null;
    this.a1j('primitive');
  }
  m1y(key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.z1z_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    this.z1z_1 = element;
    this.b1y_1(element);
  }
  n1y() {
    var tmp0 = this.z1z_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        throw IllegalArgumentException.a2(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
}
class JsonTreeListEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.g20_1 = ArrayList.j2();
  }
  g1i(descriptor, index) {
    return index.toString();
  }
  m1y(key, element) {
    var idx = toInt(key);
    this.g20_1.l4(idx, element);
  }
  n1y() {
    return new JsonArray(this.g20_1);
  }
}
class JsonTreeMapEncoder extends JsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.s1z_1 = true;
  }
  m1y(key, element) {
    if (this.s1z_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.e1p();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().d1q_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().e1q_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.r1z_1 = tmp_0;
      this.s1z_1 = false;
    } else {
      var tmp0 = this.l1y_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.o4(key_0, element);
      this.s1z_1 = true;
    }
  }
  n1y() {
    return new JsonObject(this.l1y_1);
  }
}
class WriteMode extends Enum {
  constructor(name, ordinal, begin, end) {
    super(name, ordinal);
    this.h1v_1 = begin;
    this.i1v_1 = end;
  }
}
class AbstractJsonLexer {
  constructor(configuration) {
    this.d1n_1 = configuration;
    this.e1n_1 = 0;
    this.f1n_1 = new JsonPath(this.d1n_1);
    this.g1n_1 = null;
    this.h1n_1 = StringBuilder.h1();
  }
  k20() {
  }
  x1u() {
    var current = this.l20();
    var source = this.i20();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.e1n_1 = this.e1n_1 + 1 | 0;
      return true;
    }
    return false;
  }
  m20(c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  }
  i1n() {
    var nextToken = this.r1u();
    if (!(nextToken === 10)) {
      this.h1t('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.i20(), this.e1n_1 - 1 | 0)) + ' instead');
    }
  }
  l1u(expected) {
    var token = this.r1u();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.e1n_1 > 0 ? this.e1n_1 - 1 | 0 : this.e1n_1;
      var s = this.e1n_1 === charSequenceLength(this.i20()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.i20(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.h1t(tmp$ret$1, position);
    }
    return token;
  }
  n20(expected) {
    if (this.e1n_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.e1n_1;
        try {
          this.e1n_1 = this.e1n_1 - 1 | 0;
          tmp$ret$0 = this.p1u();
          break $l$block;
        }finally {
          this.e1n_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.g1t("Expected string literal but 'null' literal was found", this.e1n_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.e1n_1 > 0 ? this.e1n_1 - 1 | 0 : this.e1n_1;
    var s = this.e1n_1 === charSequenceLength(this.i20()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.i20(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.h1t(tmp$ret$3, position);
  }
  m1u() {
    var source = this.i20();
    var cpos = this.e1n_1;
    $l$loop_0: while (true) {
      cpos = this.j20(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.e1n_1 = cpos;
      return charToTokenClass(ch);
    }
    this.e1n_1 = cpos;
    return 10;
  }
  y1u(doConsume) {
    var current = this.l20();
    current = this.j20(current);
    var len = charSequenceLength(this.i20()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.i20(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.i20(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.e1n_1 = current + 4 | 0;
    }
    return true;
  }
  j1v(doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.y1u(doConsume) : $super.y1u.call(this, doConsume);
  }
  z1u(isLenient) {
    var token = this.m1u();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.p1u();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.o1u();
    }
    var string = tmp;
    this.g1n_1 = string;
    return string;
  }
  o20() {
    this.g1n_1 = null;
  }
  p20(startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.i20();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  }
  o1u() {
    if (!(this.g1n_1 == null)) {
      return takePeeked(this);
    }
    return this.c1v();
  }
  consumeString2(source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.j20(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.h1t('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.h20(lastPosition, currentPosition);
          currentPosition = this.j20(currentPosition);
          if (currentPosition === -1) {
            this.h1t('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.p20(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.e1n_1 = currentPosition + 1 | 0;
    return string;
  }
  d1v() {
    var result = this.p1u();
    if (result === 'null' && wasUnquotedString(this)) {
      this.h1t("Unexpected 'null' value instead of string literal");
    }
    return result;
  }
  p1u() {
    if (!(this.g1n_1 == null)) {
      return takePeeked(this);
    }
    var current = this.l20();
    if (current >= charSequenceLength(this.i20()) || current === -1) {
      this.h1t('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.i20(), current));
    if (token === 1) {
      return this.o1u();
    }
    if (!(token === 0)) {
      this.h1t('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.i20(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.i20(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.i20())) {
        usedAppend = true;
        this.h20(this.e1n_1, current);
        var eof = this.j20(current);
        if (eof === -1) {
          this.e1n_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.p20(this.e1n_1, current);
    } else {
      tmp = decodedString(this, this.e1n_1, current);
    }
    var result = tmp;
    this.e1n_1 = current;
    return result;
  }
  h20(fromIndex, toIndex) {
    this.h1n_1.mh(this.i20(), fromIndex, toIndex);
  }
  b1v(allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList.j2();
    var lastToken = this.m1u();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.p1u();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.m1u();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.p1u();
        else
          this.c1v();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.i2(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last_0(tokenStack) === 8)) {
          this.h1t('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last_0(tokenStack) === 6)) {
          this.h1t('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.h1t('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.r1u();
      if (tokenStack.l2() === 0)
        return Unit_instance;
    }
  }
  toString() {
    return "JsonReader(source='" + toString(this.i20()) + "', currentPosition=" + this.e1n_1 + ')';
  }
  a1v(key) {
    var processed = this.p20(0, this.e1n_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.g1t("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  }
  g1t(message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.f1n_1.u1t(), hint, this.i20());
  }
  h1t(message, position, hint, $super) {
    position = position === VOID ? this.e1n_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.g1t(message, position, hint) : $super.g1t.call(this, message, position, hint);
  }
  l1v() {
    var current = this.l20();
    current = this.j20(current);
    if (current >= charSequenceLength(this.i20()) || current === -1) {
      this.h1t('EOF');
    }
    var tmp;
    if (charSequenceGet(this.i20(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.i20())) {
        this.h1t('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = 0n;
    var exponentAccumulator = 0n;
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.i20()))) {
      var ch = charSequenceGet(this.i20(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.h1t("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.h1t("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.h1t("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.h1t("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.h1t("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (accumulator > 0n) {
        this.h1t('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.h1t('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.h1t('EOF');
      }
      if (!(charSequenceGet(this.i20(), current) === _Char___init__impl__6a9atx(34))) {
        this.h1t('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.e1n_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.h1t('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.h1t("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.h1t('Numeric value overflow');
    }
    return tmp_0;
  }
  s1p() {
    var result = this.l1v();
    var next = this.r1u();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.e1n_1 > 0 ? this.e1n_1 - 1 | 0 : this.e1n_1;
      var s = this.e1n_1 === charSequenceLength(this.i20()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.i20(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.h1t(tmp$ret$1, position);
    }
    return result;
  }
  k1v() {
    var current = this.l20();
    if (current === charSequenceLength(this.i20())) {
      this.h1t('EOF');
    }
    var tmp;
    if (charSequenceGet(this.i20(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.e1n_1 === charSequenceLength(this.i20())) {
        this.h1t('EOF');
      }
      if (!(charSequenceGet(this.i20(), this.e1n_1) === _Char___init__impl__6a9atx(34))) {
        this.h1t('Expected closing quotation mark');
      }
      this.e1n_1 = this.e1n_1 + 1 | 0;
    }
    return result;
  }
}
class CharMappings {
  constructor() {
    CharMappings_instance = this;
    this.q20_1 = charArray(117);
    this.r20_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
}
class StringJsonLexer extends AbstractJsonLexer {
  constructor(source, configuration) {
    super(configuration);
    this.d21_1 = source;
  }
  i20() {
    return this.d21_1;
  }
  j20(position) {
    return position < this.i20().length ? position : -1;
  }
  r1u() {
    var source = this.i20();
    var cpos = this.e1n_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.e1n_1 = cpos;
      return charToTokenClass(c);
    }
    this.e1n_1 = source.length;
    return 10;
  }
  n1u() {
    var current = this.e1n_1;
    if (current === -1)
      return false;
    var source = this.i20();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.e1n_1 = current;
      return this.m20(c);
    }
    this.e1n_1 = current;
    return false;
  }
  l20() {
    var current = this.e1n_1;
    if (current === -1)
      return current;
    var source = this.i20();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.e1n_1 = current;
    return current;
  }
  w1u(expected) {
    if (this.e1n_1 === -1) {
      this.n20(expected);
    }
    var source = this.i20();
    var cpos = this.e1n_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.e1n_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.n20(expected);
    }
    this.e1n_1 = -1;
    this.n20(expected);
  }
  c1v() {
    this.w1u(_Char___init__impl__6a9atx(34));
    var current = this.e1n_1;
    var closingQuote = indexOf_0(this.i20(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.p1u();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.e1n_1 > 0 ? this.e1n_1 - 1 | 0 : this.e1n_1;
      var s = this.e1n_1 === charSequenceLength(this.i20()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.i20(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.h1t(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.i20(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.i20(), this.e1n_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.e1n_1 = closingQuote + 1 | 0;
    return substring(this.i20(), current, closingQuote);
  }
  e1v(keyToMatch, isLenient) {
    var positionSnapshot = this.e1n_1;
    try {
      if (!(this.r1u() === 6))
        return null;
      var firstKey = this.z1u(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.o20();
      if (!(this.r1u() === 5))
        return null;
      return this.z1u(isLenient);
    }finally {
      this.e1n_1 = positionSnapshot;
      this.o20();
    }
  }
}
class StringJsonLexerWithComments extends StringJsonLexer {
  r1u() {
    var source = this.i20();
    var cpos = this.l20();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.e1n_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  n1u() {
    var current = this.l20();
    if (current >= this.i20().length || current === -1)
      return false;
    return this.m20(charCodeAt(this.i20(), current));
  }
  w1u(expected) {
    var source = this.i20();
    var current = this.l20();
    if (current >= source.length || current === -1) {
      this.e1n_1 = -1;
      this.n20(expected);
    }
    var c = charCodeAt(source, current);
    this.e1n_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.n20(expected);
    }
  }
  m1u() {
    var source = this.i20();
    var cpos = this.l20();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.e1n_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  l20() {
    var current = this.e1n_1;
    if (current === -1)
      return current;
    var source = this.i20();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.e1n_1 = source.length;
            this.h1t('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.e1n_1 = current;
    return current;
  }
}
class JsonToStringWriter {
  constructor() {
    this.t1m_1 = StringBuilder.nc(128);
  }
  l1s(value) {
    this.t1m_1.qh(value);
  }
  f1s(char) {
    this.t1m_1.k1(char);
  }
  h1s(text) {
    this.t1m_1.i1(text);
  }
  r1s(text) {
    printQuoted(this.t1m_1, text);
  }
  u1m() {
    this.t1m_1.th();
  }
  toString() {
    return this.t1m_1.toString();
  }
}
//endregion
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    new Default();
  return Default_instance;
}
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.c1o();
  return new JsonImpl(conf, builder.a1o_1);
}
function validateConfiguration($this) {
  if (equals($this.rz(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.n1m_1);
  $this.rz().d1l(collector);
}
var ClassDiscriminatorMode_NONE_instance;
var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
var ClassDiscriminatorMode_POLYMORPHIC_instance;
var ClassDiscriminatorMode_entriesInitialized;
function ClassDiscriminatorMode_initEntries() {
  if (ClassDiscriminatorMode_entriesInitialized)
    return Unit_instance;
  ClassDiscriminatorMode_entriesInitialized = true;
  ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
  ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
  ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
}
function ClassDiscriminatorMode_NONE_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_NONE_instance;
}
function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
}
function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_POLYMORPHIC_instance;
}
function throwSubtypeNotRegistered($this, subClass, baseClass) {
  var tmp0_elvis_lhs = subClass.f1();
  var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
  var scope = "in the scope of '" + baseClass.f1() + "'";
  throw SerializationException.h11("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
}
function get_jsonUnquotedLiteralDescriptor() {
  _init_properties_JsonElement_kt__7cbdc2();
  return jsonUnquotedLiteralDescriptor;
}
var jsonUnquotedLiteralDescriptor;
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
function JsonObject$toString$lambda(_destruct__k2r9zo) {
  // Inline function 'kotlin.collections.component1' call
  var k = _destruct__k2r9zo.c3();
  // Inline function 'kotlin.collections.component2' call
  var v = _destruct__k2r9zo.d3();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.h1();
  printQuoted(this_0, k);
  this_0.k1(_Char___init__impl__6a9atx(58));
  this_0.o1(v);
  return this_0.toString();
}
function get_jsonObject(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonObject');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
function get_jsonPrimitive(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonPrimitive');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function get_jsonArray(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonArray ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonArray');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.e1p();
  }
  return tmp;
}
function get_intOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNull' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      tmp_0 = null;
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  var tmp0_elvis_lhs = tmp;
  var tmp_1;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp_1 = tmp0_elvis_lhs;
  }
  var result = tmp_1;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    return null;
  return convertToInt(result);
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException.qf(e.r());
    } else {
      throw $p;
    }
  }
  var result = tmp;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    throw NumberFormatException.qf(_this__u8e3s4.e1p() + ' is not an Int');
  return convertToInt(result);
}
function get_longOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNull' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      tmp_0 = null;
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException.qf(e.r());
    } else {
      throw $p;
    }
  }
  return tmp;
}
function get_floatOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloatOrNull' call
  var this_0 = _this__u8e3s4.e1p();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDoubleOrNull(this_0);
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.e1p();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_doubleOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDoubleOrNull(_this__u8e3s4.e1p());
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.e1p());
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.e1p());
}
function get_boolean(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.e1p());
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o(_this__u8e3s4.toString() + ' does not represent a Boolean');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
function JsonPrimitive_1(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance === VOID)
    new JsonNull();
  return JsonNull_instance;
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException.a2('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
function parseLongImpl(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.e1p()).s1p();
}
function JsonPrimitive_2(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
var properties_initialized_JsonElement_kt_abxy8s;
function _init_properties_JsonElement_kt__7cbdc2() {
  if (!properties_initialized_JsonElement_kt_abxy8s) {
    properties_initialized_JsonElement_kt_abxy8s = true;
    jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
  }
}
function put(_this__u8e3s4, key, value) {
  return _this__u8e3s4.x1p(key, JsonPrimitive_1(value));
}
function put_0(_this__u8e3s4, key, value) {
  return _this__u8e3s4.x1p(key, JsonPrimitive_2(value));
}
function put_1(_this__u8e3s4, key, value) {
  return _this__u8e3s4.x1p(key, JsonPrimitive_0(value));
}
function putJsonObject(_this__u8e3s4, key, builderAction) {
  // Inline function 'kotlinx.serialization.json.buildJsonObject' call
  var builder = new JsonObjectBuilder();
  builderAction(builder);
  var tmp$ret$0 = builder.c1o();
  return _this__u8e3s4.x1p(key, tmp$ret$0);
}
function putJsonArray(_this__u8e3s4, key, builderAction) {
  // Inline function 'kotlinx.serialization.json.buildJsonArray' call
  var builder = new JsonArrayBuilder();
  builderAction(builder);
  var tmp$ret$0 = builder.c1o();
  return _this__u8e3s4.x1p(key, tmp$ret$0);
}
function add_0(_this__u8e3s4, value) {
  return _this__u8e3s4.z1p(JsonPrimitive_0(value));
}
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.wz('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.wz('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.wz('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.wz('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.wz('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().a1q_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().b1q_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().c1q_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().d1q_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().e1q_1;
}
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance === VOID)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance === VOID)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance === VOID)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function asJsonDecoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var JsonPrimitiveSerializer_instance;
function JsonPrimitiveSerializer_getInstance() {
  if (JsonPrimitiveSerializer_instance === VOID)
    new JsonPrimitiveSerializer();
  return JsonPrimitiveSerializer_instance;
}
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance === VOID)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance === VOID)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
var JsonNullSerializer_instance;
function JsonNullSerializer_getInstance() {
  if (JsonNullSerializer_instance === VOID)
    new JsonNullSerializer();
  return JsonNullSerializer_instance;
}
function defer(deferred) {
  return new defer$1(deferred);
}
var JsonLiteralSerializer_instance;
function JsonLiteralSerializer_getInstance() {
  if (JsonLiteralSerializer_instance === VOID)
    new JsonLiteralSerializer();
  return JsonLiteralSerializer_instance;
}
function verify(encoder) {
  asJsonEncoder(encoder);
}
function verify_0(decoder) {
  asJsonDecoder(decoder);
}
function asJsonEncoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function _get_original__l7ku1m($this) {
  var tmp0 = $this.d1r_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.d3();
}
function defer$o$_get_original_$ref_3cje7k() {
  return constructCallableReference((p0) => _get_original__l7ku1m(p0), 1, 0, 10);
}
function convertCamelCase($this, serialName, delimiter) {
  // Inline function 'kotlin.text.buildString' call
  var capacity = imul(serialName.length, 2);
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.nc(capacity);
  var bufferedChar = null;
  var previousUpperCharsCount = 0;
  // Inline function 'kotlin.text.forEach' call
  var inductionVariable = 0;
  while (inductionVariable < charSequenceLength(serialName)) {
    var element = charSequenceGet(serialName, inductionVariable);
    inductionVariable = inductionVariable + 1 | 0;
    if (isUpperCase(element)) {
      var tmp;
      var tmp_0;
      if (previousUpperCharsCount === 0) {
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp_0 = charSequenceLength(this_0) > 0;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = !(last(this_0) === delimiter);
      } else {
        tmp = false;
      }
      if (tmp) {
        this_0.k1(delimiter);
      }
      var tmp0_safe_receiver = bufferedChar;
      var tmp_1 = tmp0_safe_receiver;
      if ((tmp_1 == null ? null : new Char(tmp_1)) == null)
        null;
      else {
        var tmp_2 = tmp0_safe_receiver;
        // Inline function 'kotlin.let' call
        var p0 = (tmp_2 == null ? null : new Char(tmp_2)).n3_1;
        this_0.k1(p0);
      }
      previousUpperCharsCount = previousUpperCharsCount + 1 | 0;
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$9 = toString_1(element).toLowerCase();
      bufferedChar = charCodeAt(tmp$ret$9, 0);
    } else {
      var tmp_3 = bufferedChar;
      if (!((tmp_3 == null ? null : new Char(tmp_3)) == null)) {
        if (previousUpperCharsCount > 1 && isLetter(element)) {
          this_0.k1(delimiter);
        }
        this_0.k1(bufferedChar);
        previousUpperCharsCount = 0;
        bufferedChar = null;
      }
      this_0.k1(element);
    }
  }
  var tmp_4 = bufferedChar;
  if (!((tmp_4 == null ? null : new Char(tmp_4)) == null)) {
    this_0.k1(bufferedChar);
  }
  return this_0.toString();
}
var Builtins_instance;
function Builtins_getInstance() {
  if (Builtins_instance === VOID)
    new Builtins();
  return Builtins_instance;
}
function Composer_0(sb, json) {
  return json.n1m_1.h1o_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function readIfAbsent($this, descriptor, index) {
  $this.d1t_1 = (!descriptor.o12(index) && descriptor.n12(index).a12());
  return $this.d1t_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  return constructCallableReference((p0_0, p1) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, p0_0, p1);
  }, 2, 0, 11, 'readIfAbsent', [p0]);
}
function minify(_this__u8e3s4, offset) {
  offset = offset === VOID ? -1 : offset;
  if (charSequenceLength(_this__u8e3s4) < 200)
    return _this__u8e3s4;
  if (offset === -1) {
    var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
    if (start <= 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var endIndex = charSequenceLength(_this__u8e3s4);
    return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
  }
  var start_0 = offset - 30 | 0;
  var end = offset + 30 | 0;
  var prefix = start_0 <= 0 ? '' : '.....';
  var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
  var tmp2 = coerceAtLeast(start_0, 0);
  // Inline function 'kotlin.text.substring' call
  var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
  return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
}
function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
  return formatDecodingException(offset, shortMessage, path, hint, input);
}
function decodingExceptionOf(shortMessage) {
  return JsonDecodingException.x1q(formatDecodingException(-1, shortMessage, null, null, null), shortMessage, -1, null, null, null);
}
function formatDecodingException(offset, shortMessage, path, hint, input) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.h1();
  if (offset >= 0) {
    this_0.i1('Unexpected JSON token at offset ' + offset + ': ');
  }
  this_0.i1(shortMessage);
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(path == null || isBlank(path))) {
    this_0.i1(' at path: ');
    this_0.i1(path);
  }
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(hint == null || isBlank(hint))) {
    this_0.i1('\n' + hint);
  }
  if (!(input == null)) {
    this_0.i1('\nJSON input: ');
    this_0.i1(input);
  }
  return this_0.toString();
}
function invalidTrailingComma(_this__u8e3s4, entity) {
  entity = entity === VOID ? 'object' : entity;
  _this__u8e3s4.g1t('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.e1n_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.h1t(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidFloatingPointEncoded(value, key) {
  key = key === VOID ? null : key;
  return JsonEncodingException.q1r(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidKeyKindException(keyDescriptor) {
  return JsonEncodingException.q1r("Value of type '" + keyDescriptor.o10() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.h12().toString() + "'"), keyDescriptor.o10(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
  return nonFiniteFpMessage(value, key);
}
function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
  // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
  var tmp;
  if (_this__u8e3s4.d1n_1.u1o_1) {
    tmp = toString(minify(input, offset));
  } else {
    tmp = null;
  }
  var inputValue = tmp;
  return JsonDecodingException.x1q(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint);
}
function formatEncodingException(shortMessage, hint) {
  var tmp;
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (hint == null || isBlank(hint)) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  return shortMessage + tmp;
}
function nonFiniteFpMessage(value, key) {
  return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
}
function get_JsonDeserializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonDeserializationNamesKey;
}
var JsonDeserializationNamesKey;
function get_JsonSerializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonSerializationNamesKey;
}
var JsonSerializationNamesKey;
function ignoreUnknownKeys(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp;
  if (json.n1m_1.e1o_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.hz();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.j1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element instanceof JsonIgnoreUnknownKeys) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function getJsonNameIndex(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  if (decodeCaseInsensitive(json, _this__u8e3s4)) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.l12(name);
  if (!(index === -3))
    return index;
  if (!json.n1m_1.o1o_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException.h11(_this__u8e3s4.o10() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.k12(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.h12(), CLASS_getInstance()) ? json.n1m_1.p1o_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.j1t(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function getJsonEncodedNames(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.n1m_1.q1o_1 && equals(descriptor.h12(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).v4(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.j1t(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap.r5();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.j12();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.m12(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList.j2();
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element instanceof JsonNames) {
          destination.i2(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1t_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp1_safe_receiver.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = tmp1_safe_receiver[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp;
          if (useLowercaseEnums) {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = element_0.toLowerCase();
          } else {
            tmp = element_0;
          }
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
        }
      }
      var tmp_0;
      if (useLowercaseEnums) {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = _this__u8e3s4.k12(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.r1r(_this__u8e3s4, i, _this__u8e3s4.k12(i));
      } else {
        tmp_0 = null;
      }
      var nameToPut = tmp_0;
      if (nameToPut == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
      }
    }
     while (inductionVariable < last);
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_1;
  if (builder.j1()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return () => buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return () => {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var trackingSet = LinkedHashSet.p2();
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.j12();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.k12(tmp_2);
      var name = $strategy.r1r($this_serializationNamesIndices, tmp_2, baseName);
      if (!trackingSet.i2(name))
        throw JsonEncodingException.q1r("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.o10());
      tmp_1[tmp_2] = name;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.h12(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).t4(name)) {
    throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.k12(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.k12(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.o4(name, index);
}
var properties_initialized_JsonNamesMap_kt_ljpf42;
function _init_properties_JsonNamesMap_kt__cbbp0k() {
  if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
    properties_initialized_JsonNamesMap_kt_ljpf42 = true;
    JsonDeserializationNamesKey = new Key();
    JsonSerializationNamesKey = new Key();
  }
}
var Tombstone_instance;
function Tombstone_getInstance() {
  return Tombstone_instance;
}
var RedactedKey_instance;
function RedactedKey_getInstance() {
  return RedactedKey_instance;
}
function resize($this) {
  var newSize = imul($this.o1t_1, 2);
  $this.m1t_1 = copyOf($this.m1t_1, newSize);
  var tmp = 0;
  var tmp_0 = new Int32Array(newSize);
  while (tmp < newSize) {
    tmp_0[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var newIndices = tmp_0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.n1t_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
  $this.n1t_1 = newIndices;
}
function checkKind($this, descriptor, actualClass) {
  var kind = descriptor.h12();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException.a2('Serializer for ' + actualClass.f1() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.v1t_1)
    return Unit_instance;
  if (!$this.w1t_1)
    return Unit_instance;
  var tmp_0;
  var tmp_1;
  if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
    tmp_1 = true;
  } else {
    tmp_1 = kind instanceof PrimitiveKind;
  }
  if (tmp_1) {
    tmp_0 = true;
  } else {
    tmp_0 = kind instanceof ENUM;
  }
  if (tmp_0) {
    throw IllegalArgumentException.a2('Serializer for ' + actualClass.f1() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().l2();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder.g1u(writer, json, tmp, tmp$ret$0);
  encoder.sz(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.h1u_1.l1u(6);
  if ($this.h1u_1.m1u() === 4) {
    $this.h1u_1.h1t('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.r5();
  $l$loop: while ($this.h1u_1.n1u()) {
    var key = $this.i1u_1 ? $this.h1u_1.p1u() : $this.h1u_1.o1u();
    $this.h1u_1.l1u(5);
    var element = $this.q1u();
    // Inline function 'kotlin.collections.set' call
    result.o4(key, element);
    lastToken = $this.h1u_1.r1u();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.h1u_1.h1t('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.h1u_1.l1u(7);
  } else if (lastToken === 4) {
    if (!$this.j1u_1) {
      invalidTrailingComma($this.h1u_1);
    }
    $this.h1u_1.l1u(7);
  }
  return new JsonObject(result);
}
function *readObject_0($this, $receiver, $completion) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.h1u_1.l1u(6);
  if ($this.h1u_1.m1u() === 4) {
    $this.h1u_1.h1t('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.r5();
  $l$loop: while ($this.h1u_1.n1u()) {
    var key = $this.i1u_1 ? $this.h1u_1.p1u() : $this.h1u_1.o1u();
    $this.h1u_1.l1u(5);
    var element = yield* $receiver.aw(Unit_instance, $completion);
    // Inline function 'kotlin.collections.set' call
    result.o4(key, element);
    lastToken = $this.h1u_1.r1u();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.h1u_1.h1t('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.h1u_1.l1u(7);
  } else if (lastToken === 4) {
    if (!$this.j1u_1) {
      invalidTrailingComma($this.h1u_1);
    }
    $this.h1u_1.l1u(7);
  }
  return new JsonObject(result);
}
function readArray($this) {
  var lastToken = $this.h1u_1.r1u();
  if ($this.h1u_1.m1u() === 4) {
    $this.h1u_1.h1t('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList.j2();
  while ($this.h1u_1.n1u()) {
    var element = $this.q1u();
    result.i2(element);
    lastToken = $this.h1u_1.r1u();
    if (!(lastToken === 4)) {
      var tmp0 = $this.h1u_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.e1n_1;
      if (!condition) {
        var tmp$ret$2 = 'Expected end of the array or comma';
        tmp0.h1t(tmp$ret$2, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.h1u_1.l1u(9);
  } else if (lastToken === 4) {
    if (!$this.j1u_1) {
      invalidTrailingComma($this.h1u_1, 'array');
    }
    $this.h1u_1.l1u(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.i1u_1 || !isString) {
    tmp = $this.h1u_1.p1u();
  } else {
    tmp = $this.h1u_1.o1u();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda($this)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda(this$0) {
  return constructCallableReference(function *($this$DeepRecursiveFunction, it, $completion) {
    var tmp0_subject = this$0.h1u_1.m1u();
    var tmp;
    if (tmp0_subject === 1) {
      tmp = readValue(this$0, true);
    } else if (tmp0_subject === 0) {
      tmp = readValue(this$0, false);
    } else if (tmp0_subject === 6) {
      tmp = yield* /*#__NOINLINE__*/readObject_0(this$0, $this$DeepRecursiveFunction, $completion);
    } else if (tmp0_subject === 8) {
      tmp = readArray(this$0);
    } else {
      this$0.h1u_1.h1t("Can't begin reading element, unexpected token");
    }
    return tmp;
  }, 2);
}
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.hz().l1();
  while (_iterator__ex2g4s.m1()) {
    var annotation = _iterator__ex2g4s.n1();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.s1u_1;
  }
  return json.n1m_1.m1o_1;
}
function throwJsonElementPolymorphicException(serialName, element) {
  var tmp0_shortMessage = 'Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).f1() + '.';
  throw JsonEncodingException.q1r(tmp0_shortMessage, serialName, 'Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
}
function access$checkEncodingConflicts$tPolymorphicKt($receiver, serializer, actualSerializer, classDiscriminator) {
  return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
}
function checkKind_0(kind) {
  if (kind instanceof ENUM) {
    // Inline function 'kotlin.error' call
    var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.o(toString(message));
  }
  if (kind instanceof PrimitiveKind) {
    // Inline function 'kotlin.error' call
    var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.o(toString(message_0));
  }
  if (kind instanceof PolymorphicKind) {
    // Inline function 'kotlin.error' call
    var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
    throw IllegalStateException.o(toString(message_1));
  }
}
function checkEncodingConflicts(_this__u8e3s4, serializer, actualSerializer, classDiscriminator) {
  if (getJsonEncodedNames(actualSerializer.gz(), _this__u8e3s4).o2(classDiscriminator)) {
    var baseName = serializer.gz().o10();
    var actualName = actualSerializer.gz().o10();
    var text = _this__u8e3s4.n1m_1.t1o_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
    var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
    var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
    throw JsonEncodingException.q1r(tmp0_shortMessage, actualName, tmp1_hint);
  }
}
function trySkip($this, $receiver, unknownKey) {
  if ($receiver == null)
    return false;
  if ($receiver.v1u_1 === unknownKey) {
    $receiver.v1u_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.o14(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.x1m_1.m1u() === 4) {
    $this.x1m_1.h1t('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.z1m_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.z1m_1 === -1)) {
      hasComma = $this.x1m_1.x1u();
    }
  } else {
    $this.x1m_1.w1u(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.x1m_1.n1u()) {
    if (decodingKey) {
      if ($this.z1m_1 === -1) {
        var tmp0 = $this.x1m_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.e1n_1;
        if (!condition) {
          var tmp$ret$1 = 'Unexpected leading comma';
          tmp0.h1t(tmp$ret$1, position);
        }
      } else {
        var tmp0_0 = $this.x1m_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.e1n_1;
        if (!condition_0) {
          var tmp$ret$3 = 'Expected comma after the key-value pair';
          tmp0_0.h1t(tmp$ret$3, position_0);
        }
      }
    }
    $this.z1m_1 = $this.z1m_1 + 1 | 0;
    tmp = $this.z1m_1;
  } else {
    if (hasComma && !$this.v1m_1.n1m_1.r1o_1) {
      invalidTrailingComma($this.x1m_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.v1m_1;
  var tmp$ret$0;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.o12(index);
    var elementDescriptor = descriptor.n12(index);
    var tmp;
    if (isOptional && !elementDescriptor.a12()) {
      tmp = $this.x1m_1.y1u(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.h12(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.a12()) {
        tmp_0 = $this.x1m_1.y1u(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.x1m_1.z1u($this.b1n_1.f1o_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.n1m_1.i1o_1 && elementDescriptor.a12();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.x1m_1.o1u();
        tmp$ret$0 = true;
        break $l$block_2;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.x1m_1.x1u();
  while ($this.x1m_1.n1u()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.x1m_1.w1u(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.v1m_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.b1n_1.k1o_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.x1m_1.x1u();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.c1n_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.e1t(index);
        }
        return index;
      }
      tmp = tmp_0;
    } else {
      tmp = true;
    }
    var isUnknown = tmp;
    if (isUnknown) {
      hasComma = handleUnknown($this, descriptor, key);
    }
  }
  if (hasComma && !$this.v1m_1.n1m_1.r1o_1) {
    invalidTrailingComma($this.x1m_1);
  }
  var tmp1_safe_receiver = $this.c1n_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f1t();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.v1m_1) || trySkip($this, $this.a1n_1, key)) {
    $this.x1m_1.b1v($this.b1n_1.f1o_1);
  } else {
    $this.x1m_1.f1n_1.t1t();
    $this.x1m_1.a1v(key);
  }
  return $this.x1m_1.x1u();
}
function decodeListIndex($this) {
  var hasComma = $this.x1m_1.x1u();
  var tmp;
  if ($this.x1m_1.n1u()) {
    if (!($this.z1m_1 === -1) && !hasComma) {
      $this.x1m_1.h1t('Expected end of the array or comma');
    }
    $this.z1m_1 = $this.z1m_1 + 1 | 0;
    tmp = $this.z1m_1;
  } else {
    if (hasComma && !$this.v1m_1.n1m_1.r1o_1) {
      invalidTrailingComma($this.x1m_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.b1n_1.f1o_1) {
    tmp = $this.x1m_1.d1v();
  } else {
    tmp = $this.x1m_1.c1v();
  }
  return tmp;
}
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function encodeTypeInfo($this, discriminator, serialName) {
  $this.x1t_1.b1s();
  $this.c15(discriminator);
  $this.x1t_1.e1s(_Char___init__impl__6a9atx(58));
  $this.x1t_1.d1s();
  $this.c15(serialName);
}
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.i12() && get_unsignedNumberDescriptors().o2(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.i12() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).gz(), serializer_0(Companion_getInstance()).gz(), serializer_2(Companion_getInstance_1()).gz(), serializer_3(Companion_getInstance_2()).gz()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.k1(_Char___init__impl__6a9atx(34));
  var lastPos = 0;
  var inductionVariable = 0;
  var last = charSequenceLength(value) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(value, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
        _this__u8e3s4.mh(value, lastPos, i);
        _this__u8e3s4.i1(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.mh(value, lastPos, value.length);
  else
    _this__u8e3s4.i1(value);
  _this__u8e3s4.k1(_Char___init__impl__6a9atx(34));
}
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
function toHexChar(i) {
  _init_properties_StringOps_kt__fcy1db();
  var d = i & 15;
  var tmp;
  if (d < 10) {
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp = numberToChar(d + tmp$ret$0 | 0);
  } else {
    var tmp_0 = d - 10 | 0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
  }
  return tmp;
}
var properties_initialized_StringOps_kt_wzaea7;
function _init_properties_StringOps_kt__fcy1db() {
  if (!properties_initialized_StringOps_kt_wzaea7) {
    properties_initialized_StringOps_kt_wzaea7 = true;
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.apply' call
    var this_0 = Array(93);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1 = toHexChar(c >> 12);
        var c2 = toHexChar(c >> 8);
        var c3 = toHexChar(c >> 4);
        var c4 = toHexChar(c);
        this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
      }
       while (inductionVariable <= 31);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(34);
    this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(92);
    this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(9);
    this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(8);
    this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
    // Inline function 'kotlin.code' call
    var this_5 = _Char___init__impl__6a9atx(10);
    this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
    // Inline function 'kotlin.code' call
    var this_6 = _Char___init__impl__6a9atx(13);
    this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
    this_0[12] = '\\f';
    ESCAPE_STRINGS = this_0;
    // Inline function 'kotlin.apply' call
    var this_7 = new Int8Array(93);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 31)
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_7[c_0] = 1;
      }
       while (inductionVariable_0 <= 31);
    // Inline function 'kotlin.code' call
    var this_8 = _Char___init__impl__6a9atx(34);
    var tmp = Char__toInt_impl_vasixd(this_8);
    // Inline function 'kotlin.code' call
    var this_9 = _Char___init__impl__6a9atx(34);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$13);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$14);
    ESCAPE_MARKERS = this_7;
  }
}
function readJson(json, element, deserializer) {
  var tmp;
  if (element instanceof JsonObject) {
    tmp = new JsonTreeDecoder(json, element);
  } else {
    if (element instanceof JsonArray) {
      tmp = new JsonTreeListDecoder(json, element);
    } else {
      var tmp_0;
      if (element instanceof JsonLiteral) {
        tmp_0 = true;
      } else {
        tmp_0 = equals(element, JsonNull_getInstance());
      }
      if (tmp_0) {
        tmp = new JsonPrimitiveDecoder(json, element instanceof JsonPrimitive ? element : THROW_CCE());
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
  var input = tmp;
  return input.vz(deserializer);
}
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.gz())).vz(deserializer);
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
  // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
  var path = $this.v1v(tag);
  var tmp;
  if ($this.z1o().n1m_1.u1o_1) {
    var tmp$ret$3 = toString($this.w1v());
    tmp = toString(minify(tmp$ret$3));
  } else {
    tmp = null;
  }
  var inputValue = tmp;
  throw JsonDecodingException.x1q(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
}
function setForceNull($this, descriptor, index) {
  $this.t1w_1 = (!$this.z1o().n1m_1.i1o_1 && !descriptor.o12(index) && descriptor.n12(index).a12());
  return $this.t1w_1;
}
function writeJson(json, value, serializer) {
  var result = {_v: null};
  var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
  encoder.sz(serializer, value);
  var tmp;
  if (result._v == null) {
    throwUninitializedPropertyAccessException('result');
  } else {
    tmp = result._v;
  }
  return tmp;
}
function inlineUnsignedNumberEncoder($this, tag) {
  return AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1.e1z($this, tag);
}
function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
  return AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1.i1z($this, tag, inlineDescriptor);
}
function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
  return (node) => {
    this$0.m1y(this$0.t1j(), node);
    return Unit_instance;
  };
}
function get_requiresTopLevelTag(_this__u8e3s4) {
  var tmp;
  var tmp_0 = _this__u8e3s4.h12();
  if (tmp_0 instanceof PrimitiveKind) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.h12() === ENUM_getInstance();
  }
  return tmp;
}
function _get_tag__e6h4qf($this) {
  var tmp = $this.r1z_1;
  if (!(tmp == null))
    return tmp;
  else {
    throwUninitializedPropertyAccessException('tag');
  }
}
function writeJson$lambda($result) {
  return (it) => {
    $result._v = it;
    return Unit_instance;
  };
}
var WriteMode_OBJ_instance;
var WriteMode_LIST_instance;
var WriteMode_MAP_instance;
var WriteMode_POLY_OBJ_instance;
function values() {
  return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var WriteMode_entriesInitialized;
function WriteMode_initEntries() {
  if (WriteMode_entriesInitialized)
    return Unit_instance;
  WriteMode_entriesInitialized = true;
  WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
}
var $ENTRIES;
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.h12();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.n12(0), _this__u8e3s4.rz());
        var keyKind = keyDescriptor.h12();
        var tmp_0;
        var tmp_1;
        if (keyKind instanceof PrimitiveKind) {
          tmp_1 = true;
        } else {
          tmp_1 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_1) {
          tmp_0 = WriteMode_MAP_getInstance();
        } else {
          if (_this__u8e3s4.n1m_1.g1o_1) {
            tmp_0 = WriteMode_LIST_getInstance();
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_0;
      } else {
        tmp = WriteMode_OBJ_getInstance();
      }
    }
  }
  return tmp;
}
function carrierDescriptor(_this__u8e3s4, module_0) {
  var tmp;
  if (equals(_this__u8e3s4.h12(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.i12()) {
    tmp = carrierDescriptor(_this__u8e3s4.n12(0), module_0);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function WriteMode_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_OBJ_instance;
}
function WriteMode_LIST_getInstance() {
  WriteMode_initEntries();
  return WriteMode_LIST_instance;
}
function WriteMode_MAP_getInstance() {
  WriteMode_initEntries();
  return WriteMode_MAP_instance;
}
function WriteMode_POLY_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_POLY_OBJ_instance;
}
function appendEscape($this, lastPosition, current) {
  $this.h20(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.h20(lastPosition, currentPosition);
  var result = $this.h1n_1.toString();
  $this.h1n_1.sh(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.g1n_1);
  $this.g1n_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.i20(), $this.e1n_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.j20(currentPosition);
  if (currentPosition === -1) {
    $this.h1t('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.i20();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.i20(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.h1t("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.h1n_1.k1(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.e1n_1 = startPos;
    $this.k20();
    if (($this.e1n_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.h1t('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.e1n_1);
  }
  $this.h1n_1.k1(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
  return startPos + 4 | 0;
}
function fromHexChar($this, source, currentPosition) {
  var character = charSequenceGet(source, currentPosition);
  var tmp;
  if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
    // Inline function 'kotlin.code' call
    var tmp_0 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
  } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
    // Inline function 'kotlin.code' call
    var tmp_1 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
  } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
    // Inline function 'kotlin.code' call
    var tmp_2 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(65);
    tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
  } else {
    $this.h1t("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.j20(start);
  if (current >= charSequenceLength($this.i20()) || current === -1) {
    $this.h1t('EOF');
  }
  var tmp = $this.i20();
  var _unary__edvuaz = current;
  current = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = charSequenceGet(tmp, _unary__edvuaz);
  var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
  var tmp_0;
  // Inline function 'kotlin.code' call
  var this_1 = _Char___init__impl__6a9atx(116);
  if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
    consumeBooleanLiteral($this, 'rue', current);
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(102);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
      consumeBooleanLiteral($this, 'alse', current);
      tmp_0 = false;
    } else {
      $this.h1t("Expected valid boolean literal prefix, but had '" + $this.p1u() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.i20()) - current | 0) < literalSuffix.length) {
    $this.h1t('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.i20(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.h1t("Expected valid boolean literal prefix, but had '" + $this.p1u() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.e1n_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -toNumber(exponentAccumulator);
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = toNumber(exponentAccumulator);
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function tokenDescription(token) {
  return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
}
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().r20_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().q20_1[c] : _Char___init__impl__6a9atx(0);
}
function initEscape($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 31)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2ESC($this, i, _Char___init__impl__6a9atx(117));
    }
     while (inductionVariable <= 31);
  initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
  initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
  initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
  initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
  initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
  initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
  initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
  initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
}
function initCharToToken($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 32)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2TC($this, i, 127);
    }
     while (inductionVariable <= 32);
  initC2TC($this, 9, 3);
  initC2TC($this, 10, 3);
  initC2TC($this, 13, 3);
  initC2TC($this, 32, 3);
  initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
  initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
  initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
  initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
  initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
  initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
  initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
  initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
}
function initC2ESC($this, c, esc) {
  if (!(esc === _Char___init__impl__6a9atx(117))) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
    $this.q20_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.r20_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
var CharMappings_instance;
function CharMappings_getInstance() {
  if (CharMappings_instance === VOID)
    new CharMappings();
  return CharMappings_instance;
}
function StringJsonLexer_0(json, source) {
  return !json.n1m_1.s1o_1 ? new StringJsonLexer(source, json.n1m_1) : new StringJsonLexerWithComments(source, json.n1m_1);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.p1m_1;
}
function createMapForCache(initialCapacity) {
  return HashMap.s9(initialCapacity);
}
//region block: post-declaration
initMetadataForClass(Json, 'Json', VOID, VOID, [StringFormat]);
initMetadataForObject(Default, 'Default');
initMetadataForClass(JsonBuilder, 'JsonBuilder');
initMetadataForClass(JsonImpl, 'JsonImpl');
initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
initMetadataForClass(JsonNames, 'JsonNames');
initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode');
initMetadataForClass(JsonContentPolymorphicSerializer, 'JsonContentPolymorphicSerializer', VOID, VOID, [KSerializer]);
initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForCompanion(Companion);
initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
initMetadataForClass(JsonObject, 'JsonObject', VOID, VOID, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, VOID, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonArray, 'JsonArray', VOID, VOID, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, VOID, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral');
initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
initMetadataForClass(JsonArrayBuilder, 'JsonArrayBuilder');
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
protoOf(defer$1).a12 = get_isNullable;
protoOf(defer$1).i12 = get_isInline;
protoOf(defer$1).hz = get_annotations;
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(JsonException, 'JsonException');
initMetadataForClass(JsonDecodingException, 'JsonDecodingException');
initMetadataForClass(JsonEncodingException, 'JsonEncodingException');
initMetadataForClass(JsonNamingStrategy$Builtins$SnakeCase$1);
initMetadataForClass(JsonNamingStrategy$Builtins$KebabCase$1);
initMetadataForObject(Builtins, 'Builtins');
initMetadataForClass(JsonTransformingSerializer, 'JsonTransformingSerializer', VOID, VOID, [KSerializer]);
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers');
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals');
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint');
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForObject(RedactedKey, 'RedactedKey');
initMetadataForClass(JsonPath, 'JsonPath');
protoOf(JsonSerializersModuleValidator).o1l = contextual;
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, VOID, [JsonDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes');
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, VOID, [JsonEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, VOID, [JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder');
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder');
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder');
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder');
initMetadataForClass(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', VOID, VOID, [JsonEncoder]);
initMetadataForClass(JsonTreeEncoder, 'JsonTreeEncoder');
initMetadataForClass(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1);
initMetadataForClass(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1);
initMetadataForClass(JsonPrimitiveEncoder, 'JsonPrimitiveEncoder');
initMetadataForClass(JsonTreeListEncoder, 'JsonTreeListEncoder');
initMetadataForClass(JsonTreeMapEncoder, 'JsonTreeMapEncoder');
initMetadataForClass(WriteMode, 'WriteMode');
initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
initMetadataForObject(CharMappings, 'CharMappings');
initMetadataForClass(StringJsonLexer, 'StringJsonLexer');
initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments');
initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Tombstone_instance = new Tombstone();
RedactedKey_instance = new RedactedKey();
//endregion
//region block: exports
export {
  Default_getInstance as Default_getInstanceqol46f1ssq2p,
  JsonElementSerializer_getInstance as JsonElementSerializer_getInstance2gczcfqzep60g,
  Builtins_getInstance as Builtins_getInstance20rb8vlipccdc,
  JsonNull_getInstance as JsonNull_getInstance39w6eplghmtxw,
  JsonObjectSerializer_getInstance as JsonObjectSerializer_getInstance3a6q39sxcezxs,
  JsonArrayBuilder as JsonArrayBuilderu8edol6ui3pj,
  JsonArray as JsonArray2urf8ey7u44sd,
  JsonContentPolymorphicSerializer as JsonContentPolymorphicSerializer1zt3sp8asmujz,
  JsonDecoder as JsonDecoder1rijst5ne6qla,
  JsonElement as JsonElementf07o4p6p57al,
  JsonEncoder as JsonEncoder1qlse6simkfi1,
  JsonNull as JsonNull2liwjj96vm0w2,
  JsonObjectBuilder as JsonObjectBuilder2nl6rv6vdayuk,
  JsonObject as JsonObjectee06ihoeeiqj,
  JsonPrimitive_0 as JsonPrimitiveolttw629wj53,
  JsonPrimitive_1 as JsonPrimitive2fp8648nd60dn,
  JsonPrimitive as JsonPrimitive3ttzjh2ft5dnx,
  JsonTransformingSerializer as JsonTransformingSerializer2p5ygofrif00k,
  Json_0 as Jsonsmkyu9xjl7fv,
  add_0 as add2mhilexupr285,
  get_boolean as get_boolean37ml8jnzy6rg3,
  get_booleanOrNull as get_booleanOrNull376axlcpdhkmo,
  get_contentOrNull as get_contentOrNull35s97cgi8z9eo,
  get_double as get_double1785hcxaminy4,
  get_doubleOrNull as get_doubleOrNull2fo14gjg922um,
  get_float as get_float1xtaobzj8js8m,
  get_floatOrNull as get_floatOrNull2q2ov24agcvgt,
  get_int as get_int2y6jf75ftml0w,
  get_intOrNull as get_intOrNulld29i64b3udf,
  get_jsonArray as get_jsonArray18sglwhl4pclz,
  get_jsonObject as get_jsonObject2u4z2ch1uuca9,
  get_jsonPrimitive as get_jsonPrimitivez17tyd5rw1ql,
  get_long as get_long3gjrkvy7fxjbp,
  get_longOrNull as get_longOrNull1kg1ha9scz5pa,
  putJsonArray as putJsonArray1vg6msz2wcer6,
  putJsonObject as putJsonObjectaeme0yzy9zvw,
  put as puthzp5cbwyvxpw,
  put_1 as put2xyujhcf0ewjd,
  put_0 as put3nck2c3wvxqib,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
