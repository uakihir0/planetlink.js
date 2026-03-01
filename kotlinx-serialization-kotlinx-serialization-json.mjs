import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  SEALED_getInstance1vxvpfzfxmg5m as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  serializerOrNull294cbc318ws50 as serializerOrNull,
  KSerializerzf77vz1967fq as KSerializer,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  STRING_getInstance2dgfp43qdvxn4 as STRING_getInstance,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  ENUM_getInstance2btpo8dvnibj3 as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  CLASS_getInstance3v12utpo53nyi as CLASS_getInstance,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  LIST_getInstance1utapkkkw66ts as LIST_getInstance,
  CONTEXTUAL_getInstancelbs8qycmp7lg as CONTEXTUAL_getInstance,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MAP_getInstanceoecfbvb4e1b6 as MAP_getInstance,
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
  OBJECT_getInstance1yzfkijr6copj as OBJECT_getInstance,
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
  Unit_instance28fytmsmm6r23 as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx1csff5kwtduxl as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  toString30pk9tzaqopn as toString_0,
  Enum3alwj03lh1n41 as Enum,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  contains2c50nlxg7en7o as contains,
  convertToInty04h231mmjoh as convertToInt,
  NumberFormatException3bgsm2s9o4t55 as NumberFormatException,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toDouble1kn912gjoizjp as toDouble,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  KtList3hktaavzmj137 as KtList,
  StringBuildermazzzhj6kkai as StringBuilder,
  KtMap140uvy3s5zad8 as KtMap,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  StringCompanionObject_instance3sox3h548pjra as StringCompanionObject_instance,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance3sq3iu5mj6qnr as Companion_getInstance,
  _ULong___get_data__impl__fggpzb3nuonax14svlz as _ULong___get_data__impl__fggpzb,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy,
  protoOf180f3jzyo7rfj as protoOf,
  isLettere1qnx5bysxbd as isLetter,
  Char19o2r8palgjof as Char,
  last2n4gf5az1lkn4 as last,
  toString3dhdjl9yf50de as toString_1,
  charCodeAt1yspne1d8erbm as charCodeAt,
  isUpperCase16ivdixranflt as isUpperCase,
  fromInt2ii0rejb1w62w as fromInt,
  _UInt___init__impl__l7qpdl3eewek7byy9h9 as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl211y5918yopqyzq as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k2ace6d5rqjy3k as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7k2d1ziqe8sg5kj as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc418b8pq346rvu4 as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg29gpkfdk52uly as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne3qim87o3qpsbl as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee770kqykt9las as UShort__toString_impl_edaoee,
  captureStack1fzi4aczwc4hg as captureStack,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  Collection1k04j3hzsbod0 as Collection,
  toSet1glep2u1u9tcb as toSet,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  arrayCopytctsywo3h7gj as arrayCopy,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  DeepRecursiveScope1pqaydvh4vdcu as DeepRecursiveScope,
  Unitkvevlwgzwiuc as Unit,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
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
  _UInt___get_data__impl__f0vqqw3lsr2hwtcnhrf as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qrfg5oujomrowy as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g02451ec7jdumy4xob as _UShort___get_data__impl__g0245,
  Companion_getInstance18m03xf6clkk8 as Companion_getInstance_0,
  Companion_getInstance3jsnccejczksw as Companion_getInstance_1,
  Companion_getInstance29d4047m08ot as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  equals2v6cggk171b6e as equals_0,
  Char__toInt_impl_vasixd3jl92hthlhyn7 as Char__toInt_impl_vasixd,
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
  Char__minus_impl_a2frrh1dka2ec6zg6dk as Char__minus_impl_a2frrh,
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
    this.c24_1 = configuration;
    this.d24_1 = serializersModule;
    this.e24_1 = new DescriptorSchemaCache();
  }
  a11() {
    return this.d24_1;
  }
  f24(serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.k24();
    }
  }
  g24(deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.xv(), null);
    var result = input.k10(deserializer);
    lexer.x24();
    return result;
  }
  h24(serializer, value) {
    return writeJson(this, value, serializer);
  }
  i24(deserializer, element) {
    return readJson(this, element, deserializer);
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
    this.y24_1 = json.c24_1.r25_1;
    this.z24_1 = json.c24_1.w25_1;
    this.a25_1 = json.c24_1.s25_1;
    this.b25_1 = json.c24_1.t25_1;
    this.c25_1 = json.c24_1.v25_1;
    this.d25_1 = json.c24_1.x25_1;
    this.e25_1 = json.c24_1.y25_1;
    this.f25_1 = json.c24_1.a26_1;
    this.g25_1 = json.c24_1.h26_1;
    this.h25_1 = json.c24_1.c26_1;
    this.i25_1 = json.c24_1.d26_1;
    this.j25_1 = json.c24_1.e26_1;
    this.k25_1 = json.c24_1.f26_1;
    this.l25_1 = json.c24_1.g26_1;
    this.m25_1 = json.c24_1.b26_1;
    this.n25_1 = json.c24_1.u25_1;
    this.o25_1 = json.c24_1.z25_1;
    this.p25_1 = json.a11();
  }
  q25() {
    if (this.o25_1) {
      // Inline function 'kotlin.require' call
      if (!(this.f25_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException.m2(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.g25_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException.m2(toString(message_0));
      }
    }
    if (!this.c25_1) {
      // Inline function 'kotlin.require' call
      if (!(this.d25_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException.m2(toString(message_1));
      }
    } else if (!(this.d25_1 === '    ')) {
      var tmp0 = this.d25_1;
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$7 = false;
            break $l$block;
          }
        }
        tmp$ret$7 = true;
      }
      var allWhitespaces = tmp$ret$7;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.d25_1;
        throw IllegalArgumentException.m2(toString(message_2));
      }
    }
    return new JsonConfiguration(this.y24_1, this.a25_1, this.b25_1, this.n25_1, this.c25_1, this.z24_1, this.d25_1, this.e25_1, this.o25_1, this.f25_1, this.m25_1, this.h25_1, this.i25_1, this.j25_1, this.k25_1, this.l25_1, this.g25_1);
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
  constructor(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
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
    this.r25_1 = encodeDefaults;
    this.s25_1 = ignoreUnknownKeys;
    this.t25_1 = isLenient;
    this.u25_1 = allowStructuredMapKeys;
    this.v25_1 = prettyPrint;
    this.w25_1 = explicitNulls;
    this.x25_1 = prettyPrintIndent;
    this.y25_1 = coerceInputValues;
    this.z25_1 = useArrayPolymorphism;
    this.a26_1 = classDiscriminator;
    this.b26_1 = allowSpecialFloatingPointValues;
    this.c26_1 = useAlternativeNames;
    this.d26_1 = namingStrategy;
    this.e26_1 = decodeEnumsCaseInsensitive;
    this.f26_1 = allowTrailingComma;
    this.g26_1 = allowComments;
    this.h26_1 = classDiscriminatorMode;
  }
  toString() {
    return 'JsonConfiguration(encodeDefaults=' + this.r25_1 + ', ignoreUnknownKeys=' + this.s25_1 + ', isLenient=' + this.t25_1 + ', ' + ('allowStructuredMapKeys=' + this.u25_1 + ', prettyPrint=' + this.v25_1 + ', explicitNulls=' + this.w25_1 + ', ') + ("prettyPrintIndent='" + this.x25_1 + "', coerceInputValues=" + this.y25_1 + ', useArrayPolymorphism=' + this.z25_1 + ', ') + ("classDiscriminator='" + this.a26_1 + "', allowSpecialFloatingPointValues=" + this.b26_1 + ', ') + ('useAlternativeNames=' + this.c26_1 + ', namingStrategy=' + toString_0(this.d26_1) + ', decodeEnumsCaseInsensitive=' + this.e26_1 + ', ') + ('allowTrailingComma=' + this.f26_1 + ', allowComments=' + this.g26_1 + ', classDiscriminatorMode=' + this.h26_1.toString() + ')');
  }
}
class ClassDiscriminatorMode extends Enum {}
class JsonContentPolymorphicSerializer {
  constructor(baseClass) {
    this.i26_1 = baseClass;
    this.j26_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.i26_1.k1() + '>', SEALED_getInstance(), []);
  }
  xv() {
    return this.j26_1;
  }
  qw(encoder, value) {
    var tmp0_elvis_lhs = encoder.a11().l12(this.i26_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.i26_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).yv(encoder, value);
  }
  yv(encoder, value) {
    return this.qw(encoder, !(value == null) ? value : THROW_CCE());
  }
  zv(decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.k26();
    var tmp = this.l26(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.m26().i24(actualSerializer, tree);
  }
}
class JsonDecoder {}
class Companion {}
class JsonElement {}
class Companion_0 {}
class JsonPrimitive extends JsonElement {
  toString() {
    return this.o26();
  }
}
class Companion_1 {}
class JsonArray extends JsonElement {
  constructor(content) {
    super();
    this.p26_1 = content;
  }
  equals(other) {
    return equals(this.p26_1, other);
  }
  hashCode() {
    return hashCode(this.p26_1);
  }
  toString() {
    return joinToString(this.p26_1, ',', '[', ']');
  }
  o1() {
    return this.p26_1.o1();
  }
  q26(element) {
    return this.p26_1.y3(element);
  }
  y3(element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.q26(element instanceof JsonElement ? element : THROW_CCE());
  }
  q1() {
    return this.p26_1.q1();
  }
  r26(elements) {
    return this.p26_1.z3(elements);
  }
  z3(elements) {
    return this.r26(elements);
  }
  p2(index) {
    return this.p26_1.p2(index);
  }
  s26(element) {
    return this.p26_1.a4(element);
  }
  a4(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.s26(element instanceof JsonElement ? element : THROW_CCE());
  }
  t26(element) {
    return this.p26_1.b4(element);
  }
  b4(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.t26(element instanceof JsonElement ? element : THROW_CCE());
  }
  c4() {
    return this.p26_1.c4();
  }
  u2(index) {
    return this.p26_1.u2(index);
  }
  d4(fromIndex, toIndex) {
    return this.p26_1.d4(fromIndex, toIndex);
  }
  asJsReadonlyArrayView() {
    return this.p26_1.asJsReadonlyArrayView();
  }
  q2() {
    return this.p26_1.q2();
  }
}
class Companion_2 {}
class JsonObject extends JsonElement {
  constructor(content) {
    super();
    this.u26_1 = content;
  }
  equals(other) {
    return equals(this.u26_1, other);
  }
  hashCode() {
    return hashCode(this.u26_1);
  }
  toString() {
    var tmp = this.u26_1.z2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  }
  o1() {
    return this.u26_1.o1();
  }
  v26(key) {
    return this.u26_1.f4(key);
  }
  f4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.v26((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  w26(value) {
    return this.u26_1.g4(value);
  }
  g4(value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.w26(value instanceof JsonElement ? value : THROW_CCE());
  }
  mi(key) {
    return this.u26_1.h4(key);
  }
  h4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.mi((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  asJsReadonlyMapView() {
    return this.u26_1.asJsReadonlyMapView();
  }
  q2() {
    return this.u26_1.q2();
  }
  i4() {
    return this.u26_1.i4();
  }
  j4() {
    return this.u26_1.j4();
  }
  z2() {
    return this.u26_1.z2();
  }
}
class JsonNull extends JsonPrimitive {
  constructor() {
    JsonNull_instance = null;
    super();
    JsonNull_instance = this;
    this.y26_1 = 'null';
  }
  n26() {
    return false;
  }
  o26() {
    return this.y26_1;
  }
  z26() {
    return JsonNullSerializer_getInstance();
  }
  h19(typeParamsSerializers) {
    return this.z26();
  }
}
class JsonLiteral extends JsonPrimitive {
  constructor(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    super();
    this.a27_1 = isString;
    this.b27_1 = coerceToInlineType;
    this.c27_1 = toString(body);
    if (!(this.b27_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.b27_1.ty()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException.m2(toString(message));
      }
    }
  }
  n26() {
    return this.a27_1;
  }
  o26() {
    return this.c27_1;
  }
  toString() {
    var tmp;
    if (this.a27_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.m1();
      printQuoted(this_0, this.c27_1);
      tmp = this_0.toString();
    } else {
      tmp = this.c27_1;
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
    if (!(this.a27_1 === other.a27_1))
      return false;
    if (!(this.c27_1 === other.c27_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.a27_1);
    result = imul(31, result) + getStringHashCode(this.c27_1) | 0;
    return result;
  }
}
class JsonObjectBuilder {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.d27_1 = LinkedHashMap.q5();
  }
  e27(key, element) {
    return this.d27_1.k4(key, element);
  }
  q25() {
    return new JsonObject(this.d27_1);
  }
}
class JsonArrayBuilder {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f27_1 = ArrayList.s2();
  }
  g27(element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.f27_1.e2(element);
    return true;
  }
  q25() {
    return new JsonArray(this.f27_1);
  }
}
class JsonElementSerializer {
  constructor() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.m27_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  xv() {
    return this.m27_1;
  }
  n27(encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.e12(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.e12(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.e12(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  yv(encoder, value) {
    return this.n27(encoder, value instanceof JsonElement ? value : THROW_CCE());
  }
  zv(decoder) {
    var input = asJsonDecoder(decoder);
    return input.k26();
  }
}
class JsonPrimitiveSerializer {
  constructor() {
    JsonPrimitiveSerializer_instance = this;
    this.h27_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  xv() {
    return this.h27_1;
  }
  o27(encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.e12(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.e12(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  }
  yv(encoder, value) {
    return this.o27(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  }
  zv(decoder) {
    var result = asJsonDecoder(decoder).k26();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class JsonArrayDescriptor {
  constructor() {
    JsonArrayDescriptor_instance = this;
    this.p27_1 = ListSerializer(JsonElementSerializer_getInstance()).xv();
    this.q27_1 = 'kotlinx.serialization.json.JsonArray';
  }
  bx() {
    return this.q27_1;
  }
  wy(index) {
    return this.p27_1.wy(index);
  }
  xy(name) {
    return this.p27_1.xy(name);
  }
  yy(index) {
    return this.p27_1.yy(index);
  }
  zy(index) {
    return this.p27_1.zy(index);
  }
  az(index) {
    return this.p27_1.az(index);
  }
  sy() {
    return this.p27_1.sy();
  }
  ly() {
    return this.p27_1.ly();
  }
  ty() {
    return this.p27_1.ty();
  }
  uy() {
    return this.p27_1.uy();
  }
  vy() {
    return this.p27_1.vy();
  }
}
class JsonArraySerializer {
  constructor() {
    JsonArraySerializer_instance = this;
    this.l27_1 = JsonArrayDescriptor_getInstance();
  }
  xv() {
    return this.l27_1;
  }
  r27(encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).yv(encoder, value);
  }
  yv(encoder, value) {
    return this.r27(encoder, value instanceof JsonArray ? value : THROW_CCE());
  }
  zv(decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).zv(decoder));
  }
}
class JsonObjectDescriptor {
  constructor() {
    JsonObjectDescriptor_instance = this;
    this.s27_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).xv();
    this.t27_1 = 'kotlinx.serialization.json.JsonObject';
  }
  bx() {
    return this.t27_1;
  }
  wy(index) {
    return this.s27_1.wy(index);
  }
  xy(name) {
    return this.s27_1.xy(name);
  }
  yy(index) {
    return this.s27_1.yy(index);
  }
  zy(index) {
    return this.s27_1.zy(index);
  }
  az(index) {
    return this.s27_1.az(index);
  }
  sy() {
    return this.s27_1.sy();
  }
  ly() {
    return this.s27_1.ly();
  }
  ty() {
    return this.s27_1.ty();
  }
  uy() {
    return this.s27_1.uy();
  }
  vy() {
    return this.s27_1.vy();
  }
}
class JsonObjectSerializer {
  constructor() {
    JsonObjectSerializer_instance = this;
    this.k27_1 = JsonObjectDescriptor_getInstance();
  }
  xv() {
    return this.k27_1;
  }
  u27(encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).yv(encoder, value);
  }
  yv(encoder, value) {
    return this.u27(encoder, value instanceof JsonObject ? value : THROW_CCE());
  }
  zv(decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).zv(decoder));
  }
}
class JsonNullSerializer {
  constructor() {
    JsonNullSerializer_instance = this;
    this.i27_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  xv() {
    return this.i27_1;
  }
  v27(encoder, value) {
    verify(encoder);
    encoder.h11();
  }
  yv(encoder, value) {
    return this.v27(encoder, value instanceof JsonNull ? value : THROW_CCE());
  }
  zv(decoder) {
    verify_0(decoder);
    if (decoder.wz()) {
      throw JsonDecodingException.c28("Expected 'null' literal");
    }
    decoder.xz();
    return JsonNull_getInstance();
  }
}
class JsonLiteralSerializer {
  constructor() {
    JsonLiteralSerializer_instance = this;
    this.j27_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  xv() {
    return this.j27_1;
  }
  d28(encoder, value) {
    verify(encoder);
    if (value.a27_1) {
      return encoder.q11(value.c27_1);
    }
    if (!(value.b27_1 == null)) {
      return encoder.s11(value.b27_1).q11(value.c27_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.c27_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.m11(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.c27_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).k3_1;
      var tmp_1 = encoder.s11(serializer_0(Companion_getInstance()).xv());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.m11(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.c27_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.o11(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.c27_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.i11(tmp3_safe_receiver);
    }
    encoder.q11(value.c27_1);
  }
  yv(encoder, value) {
    return this.d28(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  }
  zv(decoder) {
    var result = asJsonDecoder(decoder).k26();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class defer$1 {
  constructor($deferred) {
    this.e28_1 = lazy($deferred);
  }
  bx() {
    return _get_original__l7ku1m(this).bx();
  }
  sy() {
    return _get_original__l7ku1m(this).sy();
  }
  uy() {
    return _get_original__l7ku1m(this).uy();
  }
  wy(index) {
    return _get_original__l7ku1m(this).wy(index);
  }
  xy(name) {
    return _get_original__l7ku1m(this).xy(name);
  }
  yy(index) {
    return _get_original__l7ku1m(this).yy(index);
  }
  zy(index) {
    return _get_original__l7ku1m(this).zy(index);
  }
  az(index) {
    return _get_original__l7ku1m(this).az(index);
  }
}
class JsonEncoder {}
class JsonNamingStrategy$Builtins$SnakeCase$1 {
  g28(descriptor, elementIndex, serialName) {
    return convertCamelCase(Builtins_getInstance(), serialName, _Char___init__impl__6a9atx(95));
  }
  toString() {
    return 'kotlinx.serialization.json.JsonNamingStrategy.SnakeCase';
  }
}
class JsonNamingStrategy$Builtins$KebabCase$1 {
  g28(descriptor, elementIndex, serialName) {
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
    tmp.h28_1 = new JsonNamingStrategy$Builtins$SnakeCase$1();
    var tmp_0 = this;
    tmp_0.i28_1 = new JsonNamingStrategy$Builtins$KebabCase$1();
  }
}
class JsonTransformingSerializer {
  constructor(tSerializer) {
    this.j28_1 = tSerializer;
  }
  xv() {
    return this.j28_1.xv();
  }
  yv(encoder, value) {
    var output = asJsonEncoder(encoder);
    var element = writeJson(output.m26(), value, this.j28_1);
    element = this.k28(element);
    output.f28(element);
  }
  zv(decoder) {
    var input = asJsonDecoder(decoder);
    var element = input.k26();
    return input.m26().i24(this.j28_1, this.l28(element));
  }
  l28(element) {
    return element;
  }
  k28(element) {
    return element;
  }
}
class Composer {
  constructor(writer) {
    this.m28_1 = writer;
    this.n28_1 = true;
  }
  o28() {
    this.n28_1 = true;
  }
  p28() {
    return Unit_instance;
  }
  q28() {
    this.n28_1 = false;
  }
  r28() {
    this.n28_1 = false;
  }
  s28() {
    return Unit_instance;
  }
  t28(v) {
    return this.m28_1.u28(v);
  }
  v28(v) {
    return this.m28_1.w28(v);
  }
  x28(v) {
    return this.m28_1.w28(v.toString());
  }
  y28(v) {
    return this.m28_1.w28(v.toString());
  }
  z28(v) {
    return this.m28_1.a29(fromInt(v));
  }
  b29(v) {
    return this.m28_1.a29(fromInt(v));
  }
  c29(v) {
    return this.m28_1.a29(fromInt(v));
  }
  d29(v) {
    return this.m28_1.a29(v);
  }
  e29(v) {
    return this.m28_1.w28(v.toString());
  }
  f29(value) {
    return this.m28_1.g29(value);
  }
}
class ComposerForUnsignedNumbers extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.j29_1 = forceQuoting;
  }
  c29(v) {
    if (this.j29_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.f29(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.v28(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  }
  d29(v) {
    if (this.j29_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.f29(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.v28(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  }
  z28(v) {
    if (this.j29_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.f29(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.v28(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  }
  b29(v) {
    if (this.j29_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.f29(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.v28(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  }
}
class ComposerForUnquotedLiterals extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.m29_1 = forceQuoting;
  }
  f29(value) {
    if (this.m29_1) {
      super.f29(value);
    } else {
      super.v28(value);
    }
  }
}
class ComposerWithPrettyPrint extends Composer {
  constructor(writer, json) {
    super(writer);
    this.p29_1 = json;
    this.q29_1 = 0;
  }
  o28() {
    this.n28_1 = true;
    this.q29_1 = this.q29_1 + 1 | 0;
  }
  p28() {
    this.q29_1 = this.q29_1 - 1 | 0;
  }
  q28() {
    this.n28_1 = false;
    this.v28('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.q29_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.v28(this.p29_1.c24_1.x25_1);
      }
       while (inductionVariable < times);
  }
  r28() {
    if (this.n28_1)
      this.n28_1 = false;
    else {
      this.q28();
    }
  }
  s28() {
    this.t28(_Char___init__impl__6a9atx(32));
  }
}
class JsonElementMarker {
  constructor(descriptor) {
    var tmp = this;
    tmp.r29_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.s29_1 = false;
  }
  t29(index) {
    this.r29_1.u16(index);
  }
  u29() {
    return this.r29_1.v16();
  }
}
class JsonException extends SerializationException {
  static a2a(message) {
    var $this = this.rx(message);
    captureStack($this, $this.z29_1);
    return $this;
  }
}
class JsonDecodingException extends JsonException {
  static c28(message) {
    var $this = this.a2a(message);
    captureStack($this, $this.b28_1);
    return $this;
  }
}
class JsonEncodingException extends JsonException {
  static j2a(message) {
    var $this = this.a2a(message);
    captureStack($this, $this.i2a_1);
    return $this;
  }
}
class Tombstone {}
class JsonPath {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.n2a_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.o2a_1 = tmp_2;
    this.p2a_1 = -1;
  }
  q2a(sd) {
    this.p2a_1 = this.p2a_1 + 1 | 0;
    var depth = this.p2a_1;
    if (depth === this.n2a_1.length) {
      resize(this);
    }
    this.n2a_1[depth] = sd;
  }
  r2a(index) {
    this.o2a_1[this.p2a_1] = index;
  }
  s2a(key) {
    var tmp;
    if (!(this.o2a_1[this.p2a_1] === -2)) {
      this.p2a_1 = this.p2a_1 + 1 | 0;
      tmp = this.p2a_1 === this.n2a_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.n2a_1[this.p2a_1] = key;
    this.o2a_1[this.p2a_1] = -2;
  }
  t2a() {
    if (this.o2a_1[this.p2a_1] === -2) {
      this.n2a_1[this.p2a_1] = Tombstone_instance;
    }
  }
  u2a() {
    var depth = this.p2a_1;
    if (this.o2a_1[depth] === -2) {
      this.o2a_1[depth] = -1;
      this.p2a_1 = this.p2a_1 - 1 | 0;
    }
    if (!(this.p2a_1 === -1)) {
      this.p2a_1 = this.p2a_1 - 1 | 0;
    }
  }
  v2a() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.m1();
    this_0.n1('$');
    // Inline function 'kotlin.repeat' call
    var times = this.p2a_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.n2a_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.sy(), LIST_getInstance())) {
            if (!(this.o2a_1[index] === -1)) {
              this_0.n1('[');
              this_0.eh(this.o2a_1[index]);
              this_0.n1(']');
            }
          } else {
            var idx = this.o2a_1[index];
            if (idx >= 0) {
              this_0.n1('.');
              this_0.n1(element.wy(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.n1('[');
            this_0.n1("'");
            this_0.t1(element);
            this_0.n1("'");
            this_0.n1(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  }
  toString() {
    return this.v2a();
  }
}
class JsonSerializersModuleValidator {
  constructor(configuration) {
    this.w2a_1 = configuration.z25_1;
    this.x2a_1 = !configuration.h26_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  b1i(kClass, provider) {
  }
  e1i(baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.xv();
    checkKind(this, descriptor, actualClass);
  }
  f1i(baseClass, defaultSerializerProvider) {
  }
  g1i(baseClass, defaultDeserializerProvider) {
  }
}
class JsonTreeReader$readDeepRecursive$slambda {
  constructor(this$0) {
    this.m2b_1 = this$0;
  }
  u2b($this$DeepRecursiveFunction, it, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$DeepRecursiveFunction, it), $completion);
  }
  zd(p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.u2b(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  }
}
class JsonTreeReader {
  constructor(configuration, lexer) {
    this.i2b_1 = lexer;
    this.j2b_1 = configuration.t25_1;
    this.k2b_1 = configuration.f26_1;
    this.l2b_1 = 0;
  }
  s2b() {
    var token = this.i2b_1.n2b();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.l2b_1 = this.l2b_1 + 1 | 0;
      if (this.l2b_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.l2b_1 = this.l2b_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.i2b_1.c2a('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  }
}
class Key {}
class DescriptorSchemaCache {
  constructor() {
    this.k2a_1 = createMapForCache(16);
  }
  w2b(descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.k2a_1;
    var value_0 = this_0.h4(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.k4(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.k4(tmp2, value_1);
  }
  l2a(descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.x2b(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.w2b(descriptor, key, value);
    return value;
  }
  x2b(descriptor, key) {
    var tmp0_safe_receiver = this.k2a_1.h4(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.h4(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  }
}
class DiscriminatorHolder {
  constructor(discriminatorToSkip) {
    this.y2b_1 = discriminatorToSkip;
  }
}
class StreamingJsonDecoder extends AbstractDecoder {
  constructor(json, mode, lexer, descriptor, discriminatorHolder) {
    super();
    this.l24_1 = json;
    this.m24_1 = mode;
    this.n24_1 = lexer;
    this.o24_1 = this.l24_1.a11();
    this.p24_1 = -1;
    this.q24_1 = discriminatorHolder;
    this.r24_1 = this.l24_1.c24_1;
    this.s24_1 = this.r24_1.w25_1 ? null : new JsonElementMarker(descriptor);
  }
  m26() {
    return this.l24_1;
  }
  a11() {
    return this.o24_1;
  }
  k26() {
    return (new JsonTreeReader(this.l24_1.c24_1, this.n24_1)).s2b();
  }
  k10(deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.l24_1.c24_1.z25_1;
      }
      if (tmp) {
        return deserializer.zv(this);
      }
      var discriminator = classDiscriminator(deserializer.xv(), this.l24_1);
      var tmp0_elvis_lhs = this.n24_1.h2c(discriminator, this.r24_1.t25_1);
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
            tmp_1 = this.m26().c24_1.z25_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.zv(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.xv(), this.m26());
          var tmp0 = this.k26();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.xv().bx();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).k1();
            var tmp_3 = getKClassFromExpression(tmp0).k1();
            var tmp$ret$1 = this.n24_1.u24_1.v2a();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.mi(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.m26(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.n24_1.c2a(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.q24_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.zv(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.n24_1.u24_1.v2a());
      } else {
        throw $p;
      }
    }
  }
  l10(descriptor) {
    var newMode = switchMode(this.l24_1, descriptor);
    this.n24_1.u24_1.q2a(descriptor);
    this.n24_1.z2b(newMode.k2c_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.x1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.l24_1, newMode, this.n24_1, descriptor, this.q24_1);
        break;
      default:
        var tmp_0;
        if (this.m24_1.equals(newMode) && this.l24_1.c24_1.w25_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.l24_1, newMode, this.n24_1, descriptor, this.q24_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  m10(descriptor) {
    if (descriptor.uy() === 0 && ignoreUnknownKeys(descriptor, this.l24_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.n24_1.a2c() && !this.l24_1.c24_1.f26_1) {
      invalidTrailingComma(this.n24_1, '');
    }
    this.n24_1.z2b(this.m24_1.l2c_1);
    this.n24_1.u24_1.u2a();
  }
  wz() {
    var tmp;
    var tmp0_safe_receiver = this.s24_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s29_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.n24_1.m2c();
    } else {
      tmp = false;
    }
    return tmp;
  }
  xz() {
    return null;
  }
  x10(descriptor, index, deserializer, previousValue) {
    var isMapKey = this.m24_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.n24_1.u24_1.t2a();
    }
    var value = super.x10(descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.n24_1.u24_1.s2a(value);
    }
    return value;
  }
  c11(descriptor) {
    var index;
    switch (this.m24_1.x1_1) {
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
    if (!this.m24_1.equals(WriteMode_MAP_getInstance())) {
      this.n24_1.u24_1.r2a(index);
    }
    return index;
  }
  yz() {
    return this.n24_1.n2c();
  }
  zz() {
    var value = this.n24_1.o2c();
    if (!(value === fromInt(convertToByte(value)))) {
      this.n24_1.c2a("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  }
  a10() {
    var value = this.n24_1.o2c();
    if (!(value === fromInt(convertToShort(value)))) {
      this.n24_1.c2a("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  }
  b10() {
    var value = this.n24_1.o2c();
    if (!(value === fromInt(convertToInt(value)))) {
      this.n24_1.c2a("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  }
  c10() {
    return this.n24_1.o2c();
  }
  d10() {
    var tmp0 = this.n24_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r2b();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c2a("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.l24_1.c24_1.b26_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.n24_1, result);
  }
  e10() {
    var tmp0 = this.n24_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r2b();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c2a("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.l24_1.c24_1.b26_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.n24_1, result);
  }
  f10() {
    var string = this.n24_1.r2b();
    if (!(string.length === 1)) {
      this.n24_1.c2a("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  }
  g10() {
    var tmp;
    if (this.r24_1.t25_1) {
      tmp = this.n24_1.g2c();
    } else {
      tmp = this.n24_1.q2b();
    }
    return tmp;
  }
  i10(descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.n24_1, this.l24_1) : super.i10(descriptor);
  }
  h10(enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.l24_1, this.g10(), ' at path ' + this.n24_1.u24_1.v2a());
  }
}
class JsonDecoderForUnsignedTypes extends AbstractDecoder {
  constructor(lexer, json) {
    super();
    this.p2c_1 = lexer;
    this.q2c_1 = json.a11();
  }
  a11() {
    return this.q2c_1;
  }
  c11(descriptor) {
    var message = 'unsupported';
    throw IllegalStateException.o(toString(message));
  }
  b10() {
    var tmp0 = this.p2c_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r2b();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c2a("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  c10() {
    var tmp0 = this.p2c_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r2b();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c2a("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  zz() {
    var tmp0 = this.p2c_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r2b();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c2a("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  a10() {
    var tmp0 = this.p2c_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r2b();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c2a("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
}
class StreamingJsonEncoder extends AbstractEncoder {
  static r2c(composer, json, mode, modeReuseCache) {
    var $this = this.e11();
    $this.y2a_1 = composer;
    $this.z2a_1 = json;
    $this.a2b_1 = mode;
    $this.b2b_1 = modeReuseCache;
    $this.c2b_1 = $this.z2a_1.a11();
    $this.d2b_1 = $this.z2a_1.c24_1;
    $this.e2b_1 = false;
    $this.f2b_1 = null;
    $this.g2b_1 = null;
    var i = $this.a2b_1.x1_1;
    if (!($this.b2b_1 == null)) {
      if (!($this.b2b_1[i] === null) || !($this.b2b_1[i] === $this)) {
        $this.b2b_1[i] = $this;
      }
    }
    return $this;
  }
  m26() {
    return this.z2a_1;
  }
  static h2b(output, json, mode, modeReuseCache) {
    return this.r2c(Composer_0(output, json), json, mode, modeReuseCache);
  }
  a11() {
    return this.c2b_1;
  }
  f28(element) {
    var tmp;
    if (!(this.f2b_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.g2b_1, element);
    }
    this.e12(JsonElementSerializer_getInstance(), element);
  }
  j12(descriptor, index) {
    return this.d2b_1.r25_1;
  }
  e12(serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.m26().c24_1.z25_1) {
        serializer.yv(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.m26().c24_1.h26_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.m26().c24_1.h26_1.x1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.xv().sy();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.xv(), this.m26()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.xv()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException.m2(toString(message));
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
        access$checkEncodingConflicts$tPolymorphicKt(this.m26(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.xv().sy());
        var serialName = actualSerializer.xv().bx();
        this.f2b_1 = baseClassDiscriminator;
        this.g2b_1 = serialName;
      }
      actualSerializer.yv(this, value);
    }
  }
  l10(descriptor) {
    var newMode = switchMode(this.z2a_1, descriptor);
    if (!(newMode.k2c_1 === _Char___init__impl__6a9atx(0))) {
      this.y2a_1.t28(newMode.k2c_1);
      this.y2a_1.o28();
    }
    var discriminator = this.f2b_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.g2b_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.bx() : tmp0_elvis_lhs);
      this.f2b_1 = null;
      this.g2b_1 = null;
    }
    if (this.a2b_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.b2b_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.x1_1];
    return tmp2_elvis_lhs == null ? StreamingJsonEncoder.r2c(this.y2a_1, this.z2a_1, newMode, this.b2b_1) : tmp2_elvis_lhs;
  }
  m10(descriptor) {
    if (!(this.a2b_1.l2c_1 === _Char___init__impl__6a9atx(0))) {
      this.y2a_1.p28();
      this.y2a_1.r28();
      this.y2a_1.t28(this.a2b_1.l2c_1);
    }
  }
  f11(descriptor, index) {
    switch (this.a2b_1.x1_1) {
      case 1:
        if (!this.y2a_1.n28_1) {
          this.y2a_1.t28(_Char___init__impl__6a9atx(44));
        }

        this.y2a_1.q28();
        break;
      case 2:
        if (!this.y2a_1.n28_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.y2a_1.t28(_Char___init__impl__6a9atx(44));
            this.y2a_1.q28();
            tmp_0 = true;
          } else {
            this.y2a_1.t28(_Char___init__impl__6a9atx(58));
            this.y2a_1.s28();
            tmp_0 = false;
          }
          tmp.e2b_1 = tmp_0;
        } else {
          this.e2b_1 = true;
          this.y2a_1.q28();
        }

        break;
      case 3:
        if (index === 0)
          this.e2b_1 = true;
        if (index === 1) {
          this.y2a_1.t28(_Char___init__impl__6a9atx(44));
          this.y2a_1.s28();
          this.e2b_1 = false;
        }

        break;
      default:
        if (!this.y2a_1.n28_1) {
          this.y2a_1.t28(_Char___init__impl__6a9atx(44));
        }

        this.y2a_1.q28();
        this.q11(getJsonElementName(descriptor, this.z2a_1, index));
        this.y2a_1.t28(_Char___init__impl__6a9atx(58));
        this.y2a_1.s28();
        break;
    }
    return true;
  }
  f12(descriptor, index, serializer, value) {
    if (!(value == null) || this.d2b_1.w25_1) {
      super.f12(descriptor, index, serializer, value);
    }
  }
  s11(descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.y2a_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.y2a_1;
      } else {
        var tmp0 = this.y2a_1.m28_1;
        var p1 = this.e2b_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = StreamingJsonEncoder.r2c(tmp$ret$1, this.z2a_1, this.a2b_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.y2a_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.y2a_1;
      } else {
        var tmp0_0 = this.y2a_1.m28_1;
        var p1_0 = this.e2b_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = StreamingJsonEncoder.r2c(tmp$ret$3, this.z2a_1, this.a2b_1, null);
    } else if (!(this.f2b_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.g2b_1 = descriptor.bx();
      tmp = this;
    } else {
      tmp = super.s11(descriptor);
    }
    return tmp;
  }
  h11() {
    this.y2a_1.v28('null');
  }
  i11(value) {
    if (this.e2b_1) {
      this.q11(value.toString());
    } else {
      this.y2a_1.e29(value);
    }
  }
  j11(value) {
    if (this.e2b_1) {
      this.q11(value.toString());
    } else {
      this.y2a_1.z28(value);
    }
  }
  k11(value) {
    if (this.e2b_1) {
      this.q11(value.toString());
    } else {
      this.y2a_1.b29(value);
    }
  }
  l11(value) {
    if (this.e2b_1) {
      this.q11(value.toString());
    } else {
      this.y2a_1.c29(value);
    }
  }
  m11(value) {
    if (this.e2b_1) {
      this.q11(value.toString());
    } else {
      this.y2a_1.d29(value);
    }
  }
  n11(value) {
    if (this.e2b_1) {
      this.q11(value.toString());
    } else {
      this.y2a_1.x28(value);
    }
    if (!this.d2b_1.b26_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.y2a_1.m28_1));
    }
  }
  o11(value) {
    if (this.e2b_1) {
      this.q11(value.toString());
    } else {
      this.y2a_1.y28(value);
    }
    if (!this.d2b_1.b26_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.y2a_1.m28_1));
    }
  }
  p11(value) {
    this.q11(toString_1(value));
  }
  q11(value) {
    return this.y2a_1.f29(value);
  }
  r11(enumDescriptor, index) {
    this.q11(enumDescriptor.wy(index));
  }
}
class AbstractJsonTreeDecoder extends NamedValueDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super();
    this.u2c_1 = json;
    this.v2c_1 = value;
    this.w2c_1 = polymorphicDiscriminator;
    this.x2c_1 = this.m26().c24_1;
  }
  m26() {
    return this.u2c_1;
  }
  b3() {
    return this.v2c_1;
  }
  a11() {
    return this.m26().a11();
  }
  z2c() {
    var tmp0_safe_receiver = this.z1e();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.a2d(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.b3() : tmp1_elvis_lhs;
  }
  y2c(currentTag) {
    return this.b1f() + ('.' + currentTag);
  }
  k26() {
    return this.z2c();
  }
  k10(deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.m26().c24_1.z25_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.zv(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.xv(), this.m26());
      var tmp0 = this.k26();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.xv().bx();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).k1();
        var tmp_1 = getKClassFromExpression(tmp0).k1();
        var tmp$ret$1 = this.b1f();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.mi(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.m26(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  }
  a1f(parentName, childName) {
    return childName;
  }
  l10(descriptor) {
    var currentObject = this.z2c();
    var tmp0_subject = descriptor.sy();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.m26();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.bx();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).k1();
        var tmp_3 = getKClassFromExpression(currentObject).k1();
        var tmp$ret$0 = this.b1f();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.m26();
        var keyDescriptor = carrierDescriptor(descriptor.zy(0), this_0.a11());
        var keyKind = keyDescriptor.sy();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.m26();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.bx();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).k1();
            var tmp_8 = getKClassFromExpression(currentObject).k1();
            var tmp$ret$3 = this.b1f();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.c24_1.u25_1) {
            var tmp_9 = this.m26();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.bx();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).k1();
              var tmp_11 = getKClassFromExpression(currentObject).k1();
              var tmp$ret$7 = this.b1f();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.m26();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.bx();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).k1();
          var tmp_14 = getKClassFromExpression(currentObject).k1();
          var tmp$ret$12 = this.b1f();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.w2c_1);
      }
    }
    return tmp;
  }
  m10(descriptor) {
  }
  wz() {
    var tmp = this.z2c();
    return !(tmp instanceof JsonNull);
  }
  b2d(tag, enumDescriptor) {
    var tmp = this.m26();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.a2d(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.bx();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).k1();
      var tmp_1 = getKClassFromExpression(tmp2).k1();
      var tmp$ret$0 = this.y2c(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.o26());
  }
  n1f(tag, enumDescriptor) {
    return this.b2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  }
  c2d(tag) {
    return !(this.a2d(tag) === JsonNull_getInstance());
  }
  d1f(tag) {
    return this.c2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  d2d(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.a2d(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.y2c(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    return tmp$ret$4;
  }
  e1f(tag) {
    return this.d2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  e2d(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.a2d(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.y2c(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToByte(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  }
  f1f(tag) {
    return this.e2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  f2d(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.a2d(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.y2c(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToShort(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  }
  g1f(tag) {
    return this.f2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  g2d(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.a2d(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.y2c(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToInt(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  }
  h1f(tag) {
    return this.g2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  h2d(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.a2d(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.y2c(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    return tmp$ret$4;
  }
  i1f(tag) {
    return this.h2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  i2d(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.a2d(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.y2c(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    var result = tmp$ret$4;
    var specialFp = this.m26().c24_1.b26_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.z2c()));
  }
  j1f(tag) {
    return this.i2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  j2d(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.a2d(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.y2c(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    var result = tmp$ret$4;
    var specialFp = this.m26().c24_1.b26_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.z2c()));
  }
  k1f(tag) {
    return this.j2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  k2d(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.a2d(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.y2c(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.o26()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.l3_1;
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
    return tmp$ret$4;
  }
  l1f(tag) {
    return this.k2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  l2d(tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.a2d(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).k1();
      var tmp_0 = getKClassFromExpression(value).k1();
      var tmp$ret$0 = this.y2c(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.y2c(tag), toString(this.z2c()));
    if (!value_0.a27_1 && !this.m26().c24_1.t25_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.y2c(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.z2c()));
    }
    return value_0.c27_1;
  }
  m1f(tag) {
    return this.l2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  m2d(tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.m26();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.a2d(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.bx();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).k1();
        var tmp_2 = getKClassFromExpression(tmp2).k1();
        var tmp$ret$0 = this.y2c(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.o26());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.m26());
    } else {
      tmp = super.o1f(tag, inlineDescriptor);
    }
    return tmp;
  }
  o1f(tag, inlineDescriptor) {
    return this.m2d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  i10(descriptor) {
    return !(this.z1e() == null) ? super.i10(descriptor) : (new JsonPrimitiveDecoder(this.m26(), this.b3(), this.w2c_1)).i10(descriptor);
  }
}
class JsonTreeDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    super(json, value, polymorphicDiscriminator);
    this.t2d_1 = value;
    this.u2d_1 = polyDescriptor;
    this.v2d_1 = 0;
    this.w2d_1 = false;
  }
  b3() {
    return this.t2d_1;
  }
  c11(descriptor) {
    $l$loop: while (this.v2d_1 < descriptor.uy()) {
      var _unary__edvuaz = this.v2d_1;
      this.v2d_1 = _unary__edvuaz + 1 | 0;
      var name = this.u1e(descriptor, _unary__edvuaz);
      var index = this.v2d_1 - 1 | 0;
      this.w2d_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.b3();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).f4(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.x2c_1.y25_1)
          return index;
        var tmp0 = this.m26();
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.az(index);
          var elementDescriptor = descriptor.zy(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.ly()) {
            var tmp_1 = this.x2d(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.sy(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.ly()) {
              var tmp_3 = this.x2d(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$3 = false;
              break $l$block_2;
            }
            var tmp_4 = this.x2d(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$3 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.c24_1.w25_1 && elementDescriptor.ly();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$3 = true;
              break $l$block_2;
            }
          }
          tmp$ret$3 = false;
        }
        if (tmp$ret$3)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  }
  wz() {
    return !this.w2d_1 && super.wz();
  }
  v1e(descriptor, index) {
    var strategy = namingStrategy(descriptor, this.m26());
    var baseName = descriptor.wy(index);
    if (strategy == null) {
      if (!this.x2c_1.c26_1)
        return baseName;
      if (this.b3().i4().y3(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.m26(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.b3().i4();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.q1();
      while (_iterator__ex2g4s.r1()) {
        var element = _iterator__ex2g4s.s1();
        if (deserializationNamesMap_0.h4(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.g28(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  }
  a2d(tag) {
    return getValue(this.b3(), tag);
  }
  x2d(tag) {
    return this.b3().mi(tag);
  }
  l10(descriptor) {
    if (descriptor === this.u2d_1) {
      var tmp = this.m26();
      var tmp2 = this.z2c();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.u2d_1.bx();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).k1();
        var tmp_1 = getKClassFromExpression(tmp2).k1();
        var tmp$ret$0 = this.b1f();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.w2c_1, this.u2d_1);
    }
    return super.l10(descriptor);
  }
  m10(descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.m26())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.sy();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.m26());
    var tmp_1;
    if (strategy == null && !this.x2c_1.c26_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.m26(), descriptor).i4();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.m26()).x2b(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i4();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.b3().i4().q1();
    while (_iterator__ex2g4s.r1()) {
      var key = _iterator__ex2g4s.s1();
      if (!names.y3(key) && !(key === this.w2c_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.b1f() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.b3().toString()))));
      }
    }
  }
}
class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.e2e_1 = value;
    this.f2e_1 = this.e2e_1.q2();
    this.g2e_1 = -1;
  }
  b3() {
    return this.e2e_1;
  }
  v1e(descriptor, index) {
    return index.toString();
  }
  a2d(tag) {
    return this.e2e_1.p2(toInt(tag));
  }
  c11(descriptor) {
    while (this.g2e_1 < (this.f2e_1 - 1 | 0)) {
      this.g2e_1 = this.g2e_1 + 1 | 0;
      return this.g2e_1;
    }
    return -1;
  }
}
class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super(json, value, polymorphicDiscriminator);
    this.n2e_1 = value;
    this.p1f('primitive');
  }
  b3() {
    return this.n2e_1;
  }
  c11(descriptor) {
    return 0;
  }
  a2d(tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException.m2(toString(message));
    }
    return this.n2e_1;
  }
}
class JsonTreeMapDecoder extends JsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.y2e_1 = value;
    this.z2e_1 = toList(this.y2e_1.i4());
    this.a2f_1 = imul(this.z2e_1.q2(), 2);
    this.b2f_1 = -1;
  }
  b3() {
    return this.y2e_1;
  }
  v1e(descriptor, index) {
    var i = index / 2 | 0;
    return this.z2e_1.p2(i);
  }
  c11(descriptor) {
    while (this.b2f_1 < (this.a2f_1 - 1 | 0)) {
      this.b2f_1 = this.b2f_1 + 1 | 0;
      return this.b2f_1;
    }
    return -1;
  }
  a2d(tag) {
    return (this.b2f_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.y2e_1, tag);
  }
  m10(descriptor) {
  }
}
class AbstractJsonTreeEncoder extends NamedValueEncoder {
  constructor(json, nodeConsumer) {
    super();
    this.d2f_1 = json;
    this.e2f_1 = nodeConsumer;
    this.f2f_1 = this.d2f_1.c24_1;
    this.g2f_1 = null;
    this.h2f_1 = null;
  }
  m26() {
    return this.d2f_1;
  }
  a11() {
    return this.d2f_1.a11();
  }
  v1e(descriptor, index) {
    return getJsonElementName(descriptor, this.d2f_1, index);
  }
  f28(element) {
    var tmp;
    if (!(this.g2f_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.h2f_1, element);
    }
    this.e12(JsonElementSerializer_getInstance(), element);
  }
  j12(descriptor, index) {
    return this.f2f_1.r25_1;
  }
  a1f(parentName, childName) {
    return childName;
  }
  h12() {
  }
  h11() {
    var tmp0_elvis_lhs = this.z1e();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.e2f_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.r2f(tag);
  }
  r2f(tag) {
    return this.p2f(tag, JsonNull_getInstance());
  }
  v1f(tag) {
    return this.r2f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  s2f(tag, value) {
    return this.p2f(tag, JsonPrimitive_1(value));
  }
  w1f(tag, value) {
    return this.s2f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  t2f(tag, value) {
    return this.p2f(tag, JsonPrimitive_1(value));
  }
  x1f(tag, value) {
    return this.t2f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  u2f(tag, value) {
    return this.p2f(tag, JsonPrimitive_1(value));
  }
  y1f(tag, value) {
    return this.u2f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  v2f(tag, value) {
    return this.p2f(tag, JsonPrimitive_1(value));
  }
  z1f(tag, value) {
    return this.v2f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  w2f(tag, value) {
    this.p2f(tag, JsonPrimitive_1(value));
    if (!this.f2f_1.b26_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.q2f()));
    }
  }
  a1g(tag, value) {
    return this.w2f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  e12(serializer, value) {
    if (!(this.z1e() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.xv(), this.a11()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.m26().c24_1.z25_1) {
          serializer.yv(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.m26().c24_1.h26_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.m26().c24_1.h26_1.x1_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.xv().sy();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.xv(), this.m26()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.xv()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException.m2(toString(message));
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
          access$checkEncodingConflicts$tPolymorphicKt(this.m26(), serializer, actualSerializer, baseClassDiscriminator);
          checkKind_0(actualSerializer.xv().sy());
          var serialName = actualSerializer.xv().bx();
          this.g2f_1 = baseClassDiscriminator;
          this.h2f_1 = serialName;
        }
        actualSerializer.yv(this, value);
      }
    } else {
      // Inline function 'kotlin.run' call
      (new JsonPrimitiveEncoder(this.d2f_1, this.e2f_1)).e12(serializer, value);
    }
  }
  x2f(tag, value) {
    this.p2f(tag, JsonPrimitive_1(value));
    if (!this.f2f_1.b26_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.q2f()));
    }
  }
  b1g(tag, value) {
    return this.x2f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  y2f(tag, value) {
    return this.p2f(tag, JsonPrimitive_2(value));
  }
  c1g(tag, value) {
    return this.y2f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  z2f(tag, value) {
    return this.p2f(tag, JsonPrimitive_0(toString_1(value)));
  }
  d1g(tag, value) {
    return this.z2f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  a2g(tag, value) {
    return this.p2f(tag, JsonPrimitive_0(value));
  }
  e1g(tag, value) {
    return this.a2g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  b2g(tag, enumDescriptor, ordinal) {
    return this.p2f(tag, JsonPrimitive_0(enumDescriptor.wy(ordinal)));
  }
  f1g(tag, enumDescriptor, ordinal) {
    return this.b2g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  }
  c2g(tag, value) {
    this.p2f(tag, JsonPrimitive_0(toString(value)));
  }
  t1f(tag, value) {
    return this.c2g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  d2g(tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : super.g1g(tag, inlineDescriptor);
  }
  g1g(tag, inlineDescriptor) {
    return this.d2g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  s11(descriptor) {
    var tmp;
    if (!(this.z1e() == null)) {
      if (!(this.g2f_1 == null))
        this.h2f_1 = descriptor.bx();
      tmp = super.s11(descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.d2f_1, this.e2f_1)).s11(descriptor);
    }
    return tmp;
  }
  l10(descriptor) {
    var tmp;
    if (this.z1e() == null) {
      tmp = this.e2f_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.sy();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.d2f_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.d2f_1;
        var keyDescriptor = carrierDescriptor(descriptor.zy(0), this_0.a11());
        var keyKind = keyDescriptor.sy();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.d2f_1, consumer);
        } else {
          if (this_0.c24_1.u25_1) {
            tmp_2 = new JsonTreeListEncoder(this.d2f_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.d2f_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.g2f_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.p2f('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.h2f_1;
        encoder.p2f('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.bx() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.h2f_1;
        encoder.p2f(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.bx() : tmp2_elvis_lhs));
      }
      this.g2f_1 = null;
      this.h2f_1 = null;
    }
    return encoder;
  }
  h1g(descriptor) {
    this.e2f_1(this.q2f());
  }
}
class JsonTreeEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.o2f_1 = LinkedHashMap.q5();
  }
  p2f(key, element) {
    // Inline function 'kotlin.collections.set' call
    this.o2f_1.k4(key, element);
  }
  f12(descriptor, index, serializer, value) {
    if (!(value == null) || this.f2f_1.w25_1) {
      super.f12(descriptor, index, serializer, value);
    }
  }
  q2f() {
    return new JsonObject(this.o2f_1);
  }
}
class AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1 extends AbstractEncoder {
  static h2g(this$0, $tag, $box) {
    if ($box === VOID)
      $box = {};
    $box.f2g_1 = this$0;
    $box.g2g_1 = $tag;
    var $this = this.e11($box);
    $this.e2g_1 = this$0.d2f_1.a11();
    return $this;
  }
  a11() {
    return this.e2g_1;
  }
  m2g(s) {
    return this.f2g_1.p2f(this.g2g_1, new JsonLiteral(s, false));
  }
  l11(value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.m2g(UInt__toString_impl_dbgl21(tmp$ret$0));
  }
  m11(value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.m2g(ULong__toString_impl_f9au7k(tmp$ret$0));
  }
  j11(value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.m2g(UByte__toString_impl_v72jg(tmp$ret$0));
  }
  k11(value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.m2g(UShort__toString_impl_edaoee(tmp$ret$0));
  }
}
class AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1 extends AbstractEncoder {
  static l2g(this$0, $tag, $inlineDescriptor, $box) {
    if ($box === VOID)
      $box = {};
    $box.i2g_1 = this$0;
    $box.j2g_1 = $tag;
    $box.k2g_1 = $inlineDescriptor;
    return this.e11($box);
  }
  a11() {
    return this.i2g_1.d2f_1.a11();
  }
  q11(value) {
    return this.i2g_1.p2f(this.j2g_1, new JsonLiteral(value, false, this.k2g_1));
  }
}
class JsonPrimitiveEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.c2h_1 = null;
    this.p1f('primitive');
  }
  p2f(key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException.m2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.c2h_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException.m2(toString(message_0));
    }
    this.c2h_1 = element;
    this.e2f_1(element);
  }
  q2f() {
    var tmp0 = this.c2h_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        throw IllegalArgumentException.m2(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
}
class JsonTreeListEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.j2h_1 = ArrayList.s2();
  }
  v1e(descriptor, index) {
    return index.toString();
  }
  p2f(key, element) {
    var idx = toInt(key);
    this.j2h_1.t4(idx, element);
  }
  q2f() {
    return new JsonArray(this.j2h_1);
  }
}
class JsonTreeMapEncoder extends JsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.v2g_1 = true;
  }
  p2f(key, element) {
    if (this.v2g_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.o26();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().k27_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().l27_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.u2g_1 = tmp_0;
      this.v2g_1 = false;
    } else {
      var tmp0 = this.o2f_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.k4(key_0, element);
      this.v2g_1 = true;
    }
  }
  q2f() {
    return new JsonObject(this.o2f_1);
  }
}
class WriteMode extends Enum {
  constructor(name, ordinal, begin, end) {
    super(name, ordinal);
    this.k2c_1 = begin;
    this.l2c_1 = end;
  }
}
class AbstractJsonLexer {
  constructor() {
    this.t24_1 = 0;
    this.u24_1 = new JsonPath();
    this.v24_1 = null;
    this.w24_1 = StringBuilder.m1();
  }
  n2h() {
  }
  a2c() {
    var current = this.o2h();
    var source = this.l2h();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.t24_1 = this.t24_1 + 1 | 0;
      return true;
    }
    return false;
  }
  p2h(c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  }
  x24() {
    var nextToken = this.t2b();
    if (!(nextToken === 10)) {
      this.c2a('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.l2h(), this.t24_1 - 1 | 0)) + ' instead');
    }
  }
  o2b(expected) {
    var token = this.t2b();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.t24_1 - 1 | 0 : this.t24_1;
      var s = this.t24_1 === charSequenceLength(this.l2h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.l2h(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.c2a(tmp$ret$0, position);
    }
    return token;
  }
  q2h(expected) {
    if (this.t24_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.t24_1;
        try {
          this.t24_1 = this.t24_1 - 1 | 0;
          tmp$ret$1 = this.r2b();
          break $l$block;
        }finally {
          this.t24_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.b2a("Expected string literal but 'null' literal was found", this.t24_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.t24_1 - 1 | 0 : this.t24_1;
    var s = this.t24_1 === charSequenceLength(this.l2h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.l2h(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.c2a(tmp$ret$2, position);
  }
  n2b() {
    var source = this.l2h();
    var cpos = this.t24_1;
    $l$loop_0: while (true) {
      cpos = this.m2h(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.t24_1 = cpos;
      return charToTokenClass(ch);
    }
    this.t24_1 = cpos;
    return 10;
  }
  b2c(doConsume) {
    var current = this.o2h();
    current = this.m2h(current);
    var len = charSequenceLength(this.l2h()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.l2h(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.l2h(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.t24_1 = current + 4 | 0;
    }
    return true;
  }
  m2c(doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.b2c(doConsume) : $super.b2c.call(this, doConsume);
  }
  c2c(isLenient) {
    var token = this.n2b();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.r2b();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.q2b();
    }
    var string = tmp;
    this.v24_1 = string;
    return string;
  }
  r2h() {
    this.v24_1 = null;
  }
  s2h(startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.l2h();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  }
  q2b() {
    if (!(this.v24_1 == null)) {
      return takePeeked(this);
    }
    return this.f2c();
  }
  consumeString2(source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.m2h(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.c2a('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.k2h(lastPosition, currentPosition);
          currentPosition = this.m2h(currentPosition);
          if (currentPosition === -1) {
            this.c2a('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.s2h(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.t24_1 = currentPosition + 1 | 0;
    return string;
  }
  g2c() {
    var result = this.r2b();
    if (result === 'null' && wasUnquotedString(this)) {
      this.c2a("Unexpected 'null' value instead of string literal");
    }
    return result;
  }
  r2b() {
    if (!(this.v24_1 == null)) {
      return takePeeked(this);
    }
    var current = this.o2h();
    if (current >= charSequenceLength(this.l2h()) || current === -1) {
      this.c2a('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.l2h(), current));
    if (token === 1) {
      return this.q2b();
    }
    if (!(token === 0)) {
      this.c2a('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.l2h(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.l2h(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.l2h())) {
        usedAppend = true;
        this.k2h(this.t24_1, current);
        var eof = this.m2h(current);
        if (eof === -1) {
          this.t24_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.s2h(this.t24_1, current);
    } else {
      tmp = decodedString(this, this.t24_1, current);
    }
    var result = tmp;
    this.t24_1 = current;
    return result;
  }
  k2h(fromIndex, toIndex) {
    this.w24_1.bh(this.l2h(), fromIndex, toIndex);
  }
  e2c(allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList.s2();
    var lastToken = this.n2b();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.r2b();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.n2b();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.r2b();
        else
          this.f2c();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e2(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last_0(tokenStack) === 8))
          throw JsonDecodingException_0(this.t24_1, 'found ] instead of } at path: ' + this.u24_1.toString(), this.l2h());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last_0(tokenStack) === 6))
          throw JsonDecodingException_0(this.t24_1, 'found } instead of ] at path: ' + this.u24_1.toString(), this.l2h());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.c2a('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.t2b();
      if (tokenStack.q2() === 0)
        return Unit_instance;
    }
  }
  toString() {
    return "JsonReader(source='" + toString(this.l2h()) + "', currentPosition=" + this.t24_1 + ')';
  }
  d2c(key) {
    var processed = this.s2h(0, this.t24_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw JsonDecodingException.c28("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.u24_1.v2a() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.l2h(), lastIndexOf_0))));
  }
  b2a(message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.u24_1.v2a() + hintMessage, this.l2h());
  }
  c2a(message, position, hint, $super) {
    position = position === VOID ? this.t24_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.b2a(message, position, hint) : $super.b2a.call(this, message, position, hint);
  }
  o2c() {
    var current = this.o2h();
    current = this.m2h(current);
    if (current >= charSequenceLength(this.l2h()) || current === -1) {
      this.c2a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.l2h(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.l2h())) {
        this.c2a('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.l2h()))) {
      var ch = charSequenceGet(this.l2h(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.c2a('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.c2a("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.c2a("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.c2a("Unexpected symbol '-' in numeric literal");
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
        this.c2a("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.c2a('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.c2a('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.c2a('EOF');
      }
      if (!(charSequenceGet(this.l2h(), current) === _Char___init__impl__6a9atx(34))) {
        this.c2a('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.t24_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.c2a('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.c2a("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.c2a('Numeric value overflow');
    }
    return tmp_0;
  }
  x26() {
    var result = this.o2c();
    var next = this.t2b();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.t24_1 - 1 | 0 : this.t24_1;
      var s = this.t24_1 === charSequenceLength(this.l2h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.l2h(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.c2a(tmp$ret$0, position);
    }
    return result;
  }
  n2c() {
    var current = this.o2h();
    if (current === charSequenceLength(this.l2h())) {
      this.c2a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.l2h(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.t24_1 === charSequenceLength(this.l2h())) {
        this.c2a('EOF');
      }
      if (!(charSequenceGet(this.l2h(), this.t24_1) === _Char___init__impl__6a9atx(34))) {
        this.c2a('Expected closing quotation mark');
      }
      this.t24_1 = this.t24_1 + 1 | 0;
    }
    return result;
  }
}
class CharMappings {
  constructor() {
    CharMappings_instance = this;
    this.t2h_1 = charArray(117);
    this.u2h_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
}
class StringJsonLexer extends AbstractJsonLexer {
  constructor(source) {
    super();
    this.e2i_1 = source;
  }
  l2h() {
    return this.e2i_1;
  }
  m2h(position) {
    return position < this.l2h().length ? position : -1;
  }
  t2b() {
    var source = this.l2h();
    var cpos = this.t24_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.t24_1 = cpos;
      return charToTokenClass(c);
    }
    this.t24_1 = source.length;
    return 10;
  }
  p2b() {
    var current = this.t24_1;
    if (current === -1)
      return false;
    var source = this.l2h();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.t24_1 = current;
      return this.p2h(c);
    }
    this.t24_1 = current;
    return false;
  }
  o2h() {
    var current = this.t24_1;
    if (current === -1)
      return current;
    var source = this.l2h();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.t24_1 = current;
    return current;
  }
  z2b(expected) {
    if (this.t24_1 === -1) {
      this.q2h(expected);
    }
    var source = this.l2h();
    var cpos = this.t24_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.t24_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.q2h(expected);
    }
    this.t24_1 = -1;
    this.q2h(expected);
  }
  f2c() {
    this.z2b(_Char___init__impl__6a9atx(34));
    var current = this.t24_1;
    var closingQuote = indexOf_0(this.l2h(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.r2b();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.t24_1 - 1 | 0 : this.t24_1;
      var s = this.t24_1 === charSequenceLength(this.l2h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.l2h(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.c2a(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.l2h(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.l2h(), this.t24_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.t24_1 = closingQuote + 1 | 0;
    return substring(this.l2h(), current, closingQuote);
  }
  h2c(keyToMatch, isLenient) {
    var positionSnapshot = this.t24_1;
    try {
      if (!(this.t2b() === 6))
        return null;
      var firstKey = this.c2c(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.r2h();
      if (!(this.t2b() === 5))
        return null;
      return this.c2c(isLenient);
    }finally {
      this.t24_1 = positionSnapshot;
      this.r2h();
    }
  }
}
class StringJsonLexerWithComments extends StringJsonLexer {
  t2b() {
    var source = this.l2h();
    var cpos = this.o2h();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.t24_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  p2b() {
    var current = this.o2h();
    if (current >= this.l2h().length || current === -1)
      return false;
    return this.p2h(charCodeAt(this.l2h(), current));
  }
  z2b(expected) {
    var source = this.l2h();
    var current = this.o2h();
    if (current >= source.length || current === -1) {
      this.t24_1 = -1;
      this.q2h(expected);
    }
    var c = charCodeAt(source, current);
    this.t24_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.q2h(expected);
    }
  }
  n2b() {
    var source = this.l2h();
    var cpos = this.o2h();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.t24_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  o2h() {
    var current = this.t24_1;
    if (current === -1)
      return current;
    var source = this.l2h();
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
            this.t24_1 = source.length;
            this.c2a('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.t24_1 = current;
    return current;
  }
}
class JsonToStringWriter {
  constructor() {
    this.j24_1 = StringBuilder.ic(128);
  }
  a29(value) {
    this.j24_1.fh(value);
  }
  u28(char) {
    this.j24_1.p1(char);
  }
  w28(text) {
    this.j24_1.n1(text);
  }
  g29(text) {
    printQuoted(this.j24_1, text);
  }
  k24() {
    this.j24_1.ih();
  }
  toString() {
    return this.j24_1.toString();
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
  var conf = builder.q25();
  return new JsonImpl(conf, builder.p25_1);
}
function validateConfiguration($this) {
  if (equals($this.a11(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.c24_1);
  $this.a11().s1h(collector);
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
  var tmp0_elvis_lhs = subClass.k1();
  var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
  var scope = "in the scope of '" + baseClass.k1() + "'";
  throw SerializationException.rx("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
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
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
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
      throw NumberFormatException.gf(e.message);
    } else {
      throw $p;
    }
  }
  var result = tmp;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    throw NumberFormatException.gf(_this__u8e3s4.o26() + ' is not an Int');
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
      throw NumberFormatException.gf(e.message);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function get_floatOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloatOrNull' call
  var this_0 = _this__u8e3s4.o26();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDoubleOrNull(this_0);
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.o26();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_doubleOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDoubleOrNull(_this__u8e3s4.o26());
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.o26());
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.o26());
}
function get_boolean(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.o26());
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o(_this__u8e3s4.toString() + ' does not represent a Boolean');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function JsonObject$toString$lambda(_destruct__k2r9zo) {
  // Inline function 'kotlin.collections.component1' call
  var k = _destruct__k2r9zo.a3();
  // Inline function 'kotlin.collections.component2' call
  var v = _destruct__k2r9zo.b3();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.m1();
  printQuoted(this_0, k);
  this_0.p1(_Char___init__impl__6a9atx(58));
  this_0.t1(v);
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
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
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
    tmp = _this__u8e3s4.o26();
  }
  return tmp;
}
function parseLongImpl(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return (new StringJsonLexer(_this__u8e3s4.o26())).x26();
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException.m2('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance === VOID)
    new JsonNull();
  return JsonNull_instance;
}
function JsonPrimitive_1(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
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
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.iw('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.iw('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.iw('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.iw('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.iw('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().h27_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().i27_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().j27_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().k27_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().l27_1;
}
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance === VOID)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
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
  var tmp0 = $this.e28_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.b3();
}
function defer$o$_get_original_$ref_3cje7k() {
  return (p0) => _get_original__l7ku1m(p0);
}
function convertCamelCase($this, serialName, delimiter) {
  // Inline function 'kotlin.text.buildString' call
  var capacity = imul(serialName.length, 2);
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.ic(capacity);
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
        this_0.p1(delimiter);
      }
      var tmp0_safe_receiver = bufferedChar;
      var tmp_1 = tmp0_safe_receiver;
      if ((tmp_1 == null ? null : new Char(tmp_1)) == null)
        null;
      else {
        var tmp_2 = tmp0_safe_receiver;
        // Inline function 'kotlin.let' call
        var p0 = (tmp_2 == null ? null : new Char(tmp_2)).l3_1;
        this_0.p1(p0);
      }
      previousUpperCharsCount = previousUpperCharsCount + 1 | 0;
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$5 = toString_1(element).toLowerCase();
      bufferedChar = charCodeAt(tmp$ret$5, 0);
    } else {
      var tmp_3 = bufferedChar;
      if (!((tmp_3 == null ? null : new Char(tmp_3)) == null)) {
        if (previousUpperCharsCount > 1 && isLetter(element)) {
          this_0.p1(delimiter);
        }
        this_0.p1(bufferedChar);
        previousUpperCharsCount = 0;
        bufferedChar = null;
      }
      this_0.p1(element);
    }
  }
  var tmp_4 = bufferedChar;
  if (!((tmp_4 == null ? null : new Char(tmp_4)) == null)) {
    this_0.p1(bufferedChar);
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
  return json.c24_1.v25_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function readIfAbsent($this, descriptor, index) {
  $this.s29_1 = (!descriptor.az(index) && descriptor.zy(index).ly());
  return $this.s29_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  var l = (_this__u8e3s4, p0_0) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
  };
  l.callableName = 'readIfAbsent';
  return l;
}
function JsonDecodingException_0(offset, message, input) {
  return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
}
function JsonDecodingException_1(offset, message) {
  return JsonDecodingException.c28(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
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
function invalidTrailingComma(_this__u8e3s4, entity) {
  entity = entity === VOID ? 'object' : entity;
  _this__u8e3s4.b2a('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.t24_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.c2a('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidFloatingPointEncoded(value, output) {
  return JsonEncodingException.j2a('Unexpected special floating-point value ' + toString(value) + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
}
function InvalidKeyKindException(keyDescriptor) {
  return JsonEncodingException.j2a("Value of type '" + keyDescriptor.bx() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.sy().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function InvalidFloatingPointDecoded(value, key, output) {
  return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
}
function InvalidFloatingPointEncoded_0(value, key, output) {
  return JsonEncodingException.j2a(unexpectedFpErrorMessage(value, key, output));
}
function unexpectedFpErrorMessage(value, key, output) {
  return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
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
  if (json.c24_1.s25_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.vy();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.o1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.q1();
      while (_iterator__ex2g4s.r1()) {
        var element = _iterator__ex2g4s.s1();
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
    var tmp$ret$1 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.xy(name);
  if (!(index === -3))
    return index;
  if (!json.c24_1.c26_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException.rx(_this__u8e3s4.bx() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.wy(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.sy(), CLASS_getInstance()) ? json.c24_1.d26_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.l2a(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function getJsonEncodedNames(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.c24_1.e26_1 && equals(descriptor.sy(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).h4(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.l2a(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap.q5();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.uy();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.yy(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList.s2();
      var _iterator__ex2g4s = tmp0.q1();
      while (_iterator__ex2g4s.r1()) {
        var element = _iterator__ex2g4s.s1();
        if (element instanceof JsonNames) {
          destination.e2(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2a_1;
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
        tmp_0 = _this__u8e3s4.wy(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.g28(_this__u8e3s4, i, _this__u8e3s4.wy(i));
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
  if (builder.o1()) {
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
    var trackingSet = LinkedHashSet.t2();
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.uy();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.wy(tmp_2);
      var name = $strategy.g28($this_serializationNamesIndices, tmp_2, baseName);
      if (!trackingSet.e2(name))
        throw JsonEncodingException.j2a("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)));
      tmp_1[tmp_2] = name;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.sy(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).f4(name)) {
    throw JsonDecodingException.c28("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.wy(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.wy(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.k4(name, index);
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
function resize($this) {
  var newSize = imul($this.p2a_1, 2);
  $this.n2a_1 = copyOf($this.n2a_1, newSize);
  var tmp = 0;
  var tmp_0 = new Int32Array(newSize);
  while (tmp < newSize) {
    tmp_0[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var newIndices = tmp_0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.o2a_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
  $this.o2a_1 = newIndices;
}
function checkKind($this, descriptor, actualClass) {
  var kind = descriptor.sy();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException.m2('Serializer for ' + actualClass.k1() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.w2a_1)
    return Unit_instance;
  if (!$this.x2a_1)
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
    throw IllegalArgumentException.m2('Serializer for ' + actualClass.k1() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().q2();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder.h2b(writer, json, tmp, tmp$ret$0);
  encoder.e12(serializer, value);
}
function *_generator_invoke__zhh2q8($this, $this$DeepRecursiveFunction, it, $completion) {
  var tmp0_subject = $this.m2b_1.i2b_1.n2b();
  var tmp;
  if (tmp0_subject === 1) {
    tmp = readValue($this.m2b_1, true);
  } else if (tmp0_subject === 0) {
    tmp = readValue($this.m2b_1, false);
  } else if (tmp0_subject === 6) {
    var tmp_0 = readObject_0($this.m2b_1, $this$DeepRecursiveFunction, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    tmp = tmp_0;
  } else if (tmp0_subject === 8) {
    tmp = readArray($this.m2b_1);
  } else {
    $this.m2b_1.i2b_1.c2a("Can't begin reading element, unexpected token");
  }
  return tmp;
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.i2b_1.o2b(6);
  if ($this.i2b_1.n2b() === 4) {
    $this.i2b_1.c2a('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.q5();
  $l$loop: while ($this.i2b_1.p2b()) {
    var key = $this.j2b_1 ? $this.i2b_1.r2b() : $this.i2b_1.q2b();
    $this.i2b_1.o2b(5);
    var element = $this.s2b();
    // Inline function 'kotlin.collections.set' call
    result.k4(key, element);
    lastToken = $this.i2b_1.t2b();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.i2b_1.c2a('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.i2b_1.o2b(7);
  } else if (lastToken === 4) {
    if (!$this.k2b_1) {
      invalidTrailingComma($this.i2b_1);
    }
    $this.i2b_1.o2b(7);
  }
  return new JsonObject(result);
}
function *_generator_readObject__361wel($this, _this__u8e3s4, $completion) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.i2b_1.o2b(6);
  if ($this.i2b_1.n2b() === 4) {
    $this.i2b_1.c2a('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.q5();
  $l$loop: while ($this.i2b_1.p2b()) {
    var key = $this.j2b_1 ? $this.i2b_1.r2b() : $this.i2b_1.q2b();
    $this.i2b_1.o2b(5);
    var tmp = _this__u8e3s4.it(Unit_instance, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
    var element = tmp;
    // Inline function 'kotlin.collections.set' call
    result.k4(key, element);
    lastToken = $this.i2b_1.t2b();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.i2b_1.c2a('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.i2b_1.o2b(7);
  } else if (lastToken === 4) {
    if (!$this.k2b_1) {
      invalidTrailingComma($this.i2b_1);
    }
    $this.i2b_1.o2b(7);
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readObject__361wel.bind(VOID, $this, _this__u8e3s4), $completion);
}
function readArray($this) {
  var lastToken = $this.i2b_1.t2b();
  if ($this.i2b_1.n2b() === 4) {
    $this.i2b_1.c2a('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList.s2();
  while ($this.i2b_1.p2b()) {
    var element = $this.s2b();
    result.e2(element);
    lastToken = $this.i2b_1.t2b();
    if (!(lastToken === 4)) {
      var tmp0 = $this.i2b_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.t24_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.c2a(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.i2b_1.o2b(9);
  } else if (lastToken === 4) {
    if (!$this.k2b_1) {
      invalidTrailingComma($this.i2b_1, 'array');
    }
    $this.i2b_1.o2b(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.j2b_1 || !isString) {
    tmp = $this.i2b_1.r2b();
  } else {
    tmp = $this.i2b_1.q2b();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda_0(this$0) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0);
  var l = ($this$DeepRecursiveFunction, it, $completion) => i.u2b($this$DeepRecursiveFunction, it, $completion);
  l.$arity = 2;
  return l;
}
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.vy().q1();
  while (_iterator__ex2g4s.r1()) {
    var annotation = _iterator__ex2g4s.s1();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.v2b_1;
  }
  return json.c24_1.a26_1;
}
function throwJsonElementPolymorphicException(serialName, element) {
  throw JsonEncodingException.j2a('Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).k1() + '. Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
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
  if (getJsonEncodedNames(actualSerializer.xv(), _this__u8e3s4).y3(classDiscriminator)) {
    var baseName = serializer.xv().bx();
    var actualName = actualSerializer.xv().bx();
    var text = _this__u8e3s4.c24_1.h26_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
    throw JsonEncodingException.j2a("Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.');
  }
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.y2b_1 === unknownKey) {
    _this__u8e3s4.y2b_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.c11(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.n24_1.n2b() === 4) {
    $this.n24_1.c2a('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.p24_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.p24_1 === -1)) {
      hasComma = $this.n24_1.a2c();
    }
  } else {
    $this.n24_1.z2b(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.n24_1.p2b()) {
    if (decodingKey) {
      if ($this.p24_1 === -1) {
        var tmp0 = $this.n24_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.t24_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected leading comma';
          tmp0.c2a(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.n24_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.t24_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.c2a(tmp$ret$2, position_0);
        }
      }
    }
    $this.p24_1 = $this.p24_1 + 1 | 0;
    tmp = $this.p24_1;
  } else {
    if (hasComma && !$this.l24_1.c24_1.f26_1) {
      invalidTrailingComma($this.n24_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.l24_1;
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.az(index);
    var elementDescriptor = descriptor.zy(index);
    var tmp;
    if (isOptional && !elementDescriptor.ly()) {
      tmp = $this.n24_1.b2c(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.sy(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.ly()) {
        tmp_0 = $this.n24_1.b2c(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.n24_1.c2c($this.r24_1.t25_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.c24_1.w25_1 && elementDescriptor.ly();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.n24_1.q2b();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.n24_1.a2c();
  while ($this.n24_1.p2b()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.n24_1.z2b(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.l24_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.r24_1.y25_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.n24_1.a2c();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.s24_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.t29(index);
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
  if (hasComma && !$this.l24_1.c24_1.f26_1) {
    invalidTrailingComma($this.n24_1);
  }
  var tmp1_safe_receiver = $this.s24_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u29();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.l24_1) || trySkip($this, $this.q24_1, key)) {
    $this.n24_1.e2c($this.r24_1.t25_1);
  } else {
    $this.n24_1.u24_1.u2a();
    $this.n24_1.d2c(key);
  }
  return $this.n24_1.a2c();
}
function decodeListIndex($this) {
  var hasComma = $this.n24_1.a2c();
  var tmp;
  if ($this.n24_1.p2b()) {
    if (!($this.p24_1 === -1) && !hasComma) {
      $this.n24_1.c2a('Expected end of the array or comma');
    }
    $this.p24_1 = $this.p24_1 + 1 | 0;
    tmp = $this.p24_1;
  } else {
    if (hasComma && !$this.l24_1.c24_1.f26_1) {
      invalidTrailingComma($this.n24_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.r24_1.t25_1) {
    tmp = $this.n24_1.g2c();
  } else {
    tmp = $this.n24_1.f2c();
  }
  return tmp;
}
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function encodeTypeInfo($this, discriminator, serialName) {
  $this.y2a_1.q28();
  $this.q11(discriminator);
  $this.y2a_1.t28(_Char___init__impl__6a9atx(58));
  $this.y2a_1.s28();
  $this.q11(serialName);
}
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ty() && get_unsignedNumberDescriptors().y3(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ty() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).xv(), serializer_0(Companion_getInstance()).xv(), serializer_2(Companion_getInstance_1()).xv(), serializer_3(Companion_getInstance_2()).xv()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.p1(_Char___init__impl__6a9atx(34));
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
        _this__u8e3s4.bh(value, lastPos, i);
        _this__u8e3s4.n1(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.bh(value, lastPos, value.length);
  else
    _this__u8e3s4.n1(value);
  _this__u8e3s4.p1(_Char___init__impl__6a9atx(34));
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
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$1);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$12);
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
  return input.k10(deserializer);
}
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.xv())).k10(deserializer);
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.y2c(tag), toString($this.z2c()));
}
function setForceNull($this, descriptor, index) {
  $this.w2d_1 = (!$this.m26().c24_1.w25_1 && !descriptor.az(index) && descriptor.zy(index).ly());
  return $this.w2d_1;
}
function writeJson(json, value, serializer) {
  var result = {_v: null};
  var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
  encoder.e12(serializer, value);
  var tmp;
  if (result._v == null) {
    throwUninitializedPropertyAccessException('result');
  } else {
    tmp = result._v;
  }
  return tmp;
}
function inlineUnsignedNumberEncoder($this, tag) {
  return AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1.h2g($this, tag);
}
function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
  return AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1.l2g($this, tag, inlineDescriptor);
}
function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
  return (node) => {
    this$0.p2f(this$0.i1g(), node);
    return Unit_instance;
  };
}
function get_requiresTopLevelTag(_this__u8e3s4) {
  var tmp;
  var tmp_0 = _this__u8e3s4.sy();
  if (tmp_0 instanceof PrimitiveKind) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.sy() === ENUM_getInstance();
  }
  return tmp;
}
function _get_tag__e6h4qf($this) {
  var tmp = $this.u2g_1;
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
  var tmp0_subject = desc.sy();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.zy(0), _this__u8e3s4.a11());
        var keyKind = keyDescriptor.sy();
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
          if (_this__u8e3s4.c24_1.u25_1) {
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
  if (equals(_this__u8e3s4.sy(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.ty()) {
    tmp = carrierDescriptor(_this__u8e3s4.zy(0), module_0);
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
  $this.k2h(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.k2h(lastPosition, currentPosition);
  var result = $this.w24_1.toString();
  $this.w24_1.hh(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.v24_1);
  $this.v24_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.l2h(), $this.t24_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.m2h(currentPosition);
  if (currentPosition === -1) {
    $this.c2a('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.l2h();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.l2h(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.c2a("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.w24_1.p1(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.t24_1 = startPos;
    $this.n2h();
    if (($this.t24_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.c2a('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.t24_1);
  }
  $this.w24_1.p1(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    $this.c2a("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.m2h(start);
  if (current >= charSequenceLength($this.l2h()) || current === -1) {
    $this.c2a('EOF');
  }
  var tmp = $this.l2h();
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
      $this.c2a("Expected valid boolean literal prefix, but had '" + $this.r2b() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.l2h()) - current | 0) < literalSuffix.length) {
    $this.c2a('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.l2h(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.c2a("Expected valid boolean literal prefix, but had '" + $this.r2b() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.t24_1 = current + literalSuffix.length | 0;
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
    var tmp_0 = CharMappings_getInstance().u2h_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().t2h_1[c] : _Char___init__impl__6a9atx(0);
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
    $this.t2h_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.u2h_1[c] = cl;
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
  return !json.c24_1.g26_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.e24_1;
}
function createMapForCache(initialCapacity) {
  return HashMap.q9(initialCapacity);
}
//region block: post-declaration
initMetadataForClass(Json, 'Json');
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
initMetadataForCompanion(Companion_0);
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, VOID, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonArray, 'JsonArray', VOID, VOID, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonObject, 'JsonObject', VOID, VOID, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, VOID, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral');
initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
initMetadataForClass(JsonArrayBuilder, 'JsonArrayBuilder');
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
protoOf(defer$1).ly = get_isNullable;
protoOf(defer$1).ty = get_isInline;
protoOf(defer$1).vy = get_annotations;
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(JsonNamingStrategy$Builtins$SnakeCase$1);
initMetadataForClass(JsonNamingStrategy$Builtins$KebabCase$1);
initMetadataForObject(Builtins, 'Builtins');
initMetadataForClass(JsonTransformingSerializer, 'JsonTransformingSerializer', VOID, VOID, [KSerializer]);
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers');
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals');
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint');
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForClass(JsonException, 'JsonException');
initMetadataForClass(JsonDecodingException, 'JsonDecodingException');
initMetadataForClass(JsonEncodingException, 'JsonEncodingException');
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
protoOf(JsonSerializersModuleValidator).d1i = contextual;
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, VOID, VOID, [2]);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, VOID, [JsonDecoder, AbstractDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes');
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, VOID, [JsonEncoder, AbstractEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, VOID, [NamedValueDecoder, JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder');
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder');
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder');
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder');
initMetadataForClass(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', VOID, VOID, [NamedValueEncoder, JsonEncoder]);
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
//endregion
//region block: exports
export {
  JsonElementSerializer_getInstance as JsonElementSerializer_getInstanceiquifkyyjet4,
  Builtins_getInstance as Builtins_getInstance339r6ym7cofgs,
  JsonArrayBuilder as JsonArrayBuilderu8edol6ui3pj,
  JsonArray as JsonArray2urf8ey7u44sd,
  JsonContentPolymorphicSerializer as JsonContentPolymorphicSerializer1zt3sp8asmujz,
  JsonDecoder as JsonDecoder1rijst5ne6qla,
  JsonEncoder as JsonEncoder1qlse6simkfi1,
  JsonObjectBuilder as JsonObjectBuilder2nl6rv6vdayuk,
  JsonObject as JsonObjectee06ihoeeiqj,
  JsonPrimitive_0 as JsonPrimitiveolttw629wj53,
  JsonPrimitive as JsonPrimitive3ttzjh2ft5dnx,
  JsonTransformingSerializer as JsonTransformingSerializer2p5ygofrif00k,
  Json_0 as Jsonsmkyu9xjl7fv,
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
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
