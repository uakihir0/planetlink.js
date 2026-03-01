import {
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  captureStack1fzi4aczwc4hg as captureStack,
  StringBuildermazzzhj6kkai as StringBuilder,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toString1pkumu07cwy4m as toString,
  ULongArray3nd0d80mdwjj8 as ULongArray,
  to2cs3ny02qtbcb as to,
  equals2au1ep9vhcato as equals,
  primitiveArrayConcatwxgknw08pmlb as primitiveArrayConcat,
  _ULongArray___init__impl__twm1l3177xx31ho2ogr as _ULongArray___init__impl__twm1l3,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  convertToByte2t4hntblnhq2k as convertToByte,
  convertToShortn6n5n7ruahkm as convertToShort,
  _Char___init__impl__6a9atx1csff5kwtduxl as _Char___init__impl__6a9atx,
  Char__toInt_impl_vasixd3jl92hthlhyn7 as Char__toInt_impl_vasixd,
  fromInt2ii0rejb1w62w as fromInt,
  convertToInty04h231mmjoh as convertToInt,
  numberToChar93r9buh19yek as numberToChar,
  decodeToString1x4faah2liw2p as decodeToString,
  ArrayList3it5z8td81qkl as ArrayList,
  _ULong___init__impl__c78o9k2ace6d5rqjy3k as _ULong___init__impl__c78o9k,
  ULong3f9k7s38t3rfp as ULong,
  _ULongArray___get_size__impl__ju6dtr2nah336epvy32 as _ULongArray___get_size__impl__ju6dtr,
  toULongArray1o349t9kws2pb as toULongArray,
  ULongArray__toString_impl_wqk1p53k1ktpm1nidvw as ULongArray__toString_impl_wqk1p5,
  asList2qatwfkvahohi as asList,
  add2suhfggl4zvkk as add,
  negate13xrbakfwasjy as negate,
  shiftLeft3tsh2sstjchzn as shiftLeft,
  toShort36kaw0zjdq3ex as toShort,
  get_lastIndex1yw0x4k50k51w as get_lastIndex,
  toHexString22imn3z7nuei9 as toHexString,
  contentToString15oa15xiqsgux as contentToString,
  contentEqualscr5rim4sjoga as contentEquals,
  Triple1vhi3d0dgpnjb as Triple,
  FloatCompanionObject_instance3t6i70y0gcqkd as FloatCompanionObject_instance,
  floatFromBits1n9d03e2m5i5s as floatFromBits,
  DoubleCompanionObject_instance1ylw2yrid1slz as DoubleCompanionObject_instance,
  doubleFromBits153kwgwnt8ety as doubleFromBits,
  removeLastOrNull3odnlbetbttd4 as removeLastOrNull,
  arrayCopytctsywo3h7gj as arrayCopy,
  toBits279h5gq970cl4 as toBits,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  firstOrNull1982767dljvdy as firstOrNull,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  LIST_getInstance1utapkkkw66ts as LIST_getInstance,
  MAP_getInstanceoecfbvb4e1b6 as MAP_getInstance,
  ByteArraySerializersn06x87bo7h0 as ByteArraySerializer,
  Decoder23nde051s631g as Decoder,
  get_elementNamesl5b6t976dltd as get_elementNames,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class ByteString {}
class Cbor {
  constructor(configuration, serializersModule) {
    Default_getInstance();
    this.uac_1 = configuration;
    this.vac_1 = serializersModule;
  }
  a11() {
    return this.vac_1;
  }
  gx(deserializer, bytes) {
    var stream = new ByteArrayInput(bytes);
    var reader = new CborReader(this, new CborParser(stream, this.uac_1.dad_1));
    var result = reader.k10(deserializer);
    if (stream.qad() > 0) {
      throw CborDecodingException.wad('Input contains ' + stream.qad() + ' unprocessed bytes left after decoding a value.');
    }
    return result;
  }
}
class Default extends Cbor {
  constructor() {
    Default_instance = null;
    super(new CborConfiguration(false, false, false, false, false, false, false, false, false, false, false), EmptySerializersModule());
    Default_instance = this;
    var tmp = this;
    tmp.tac_1 = Cbor_0(VOID, Cbor$Default$CoseCompliant$lambda);
  }
}
class CborBuilder {
  constructor(cbor) {
    this.fac_1 = cbor.uac_1.wac_1;
    this.gac_1 = cbor.uac_1.xac_1;
    this.hac_1 = cbor.uac_1.yac_1;
    this.iac_1 = cbor.uac_1.zac_1;
    this.jac_1 = cbor.uac_1.aad_1;
    this.kac_1 = cbor.uac_1.bad_1;
    this.lac_1 = cbor.uac_1.cad_1;
    this.mac_1 = cbor.uac_1.dad_1;
    this.nac_1 = cbor.uac_1.ead_1;
    this.oac_1 = cbor.uac_1.fad_1;
    this.pac_1 = cbor.uac_1.gad_1;
    this.qac_1 = cbor.a11();
  }
}
class CborImpl extends Cbor {}
class CborArray {}
class CborConfiguration {
  constructor(encodeDefaults, ignoreUnknownKeys, encodeKeyTags, encodeValueTags, encodeObjectTags, verifyKeyTags, verifyValueTags, verifyObjectTags, useDefiniteLengthEncoding, preferCborLabelsOverNames, alwaysUseByteString) {
    this.wac_1 = encodeDefaults;
    this.xac_1 = ignoreUnknownKeys;
    this.yac_1 = encodeKeyTags;
    this.zac_1 = encodeValueTags;
    this.aad_1 = encodeObjectTags;
    this.bad_1 = verifyKeyTags;
    this.cad_1 = verifyValueTags;
    this.dad_1 = verifyObjectTags;
    this.ead_1 = useDefiniteLengthEncoding;
    this.fad_1 = preferCborLabelsOverNames;
    this.gad_1 = alwaysUseByteString;
  }
  toString() {
    return 'CborConfiguration(encodeDefaults=' + this.wac_1 + ', ignoreUnknownKeys=' + this.xac_1 + ', ' + ('encodeKeyTags=' + this.yac_1 + ', encodeValueTags=' + this.zac_1 + ', encodeObjectTags=' + this.aad_1 + ', ') + ('verifyKeyTags=' + this.bad_1 + ', verifyValueTags=' + this.cad_1 + ', verifyObjectTags=' + this.dad_1 + ', ') + ('useDefiniteLengthEncoding=' + this.ead_1 + ', ') + ('preferCborLabelsOverNames=' + this.fad_1 + ', alwaysUseByteString=' + this.gad_1 + ')');
  }
}
class CborLabel {}
class ObjectTags {}
class ValueTags {}
class KeyTags {}
class CborDecodingException extends SerializationException {
  static wad(message) {
    var $this = this.rx(message);
    captureStack($this, $this.vad_1);
    return $this;
  }
}
class CborReader extends AbstractDecoder {
  constructor(cbor, parser) {
    super();
    this.had_1 = cbor;
    this.iad_1 = parser;
    this.jad_1 = -1;
    this.kad_1 = false;
    this.lad_1 = 0;
    this.mad_1 = false;
    this.nad_1 = null;
  }
  dae() {
    return this.had_1;
  }
  eae(size) {
    if (size >= 0) {
      this.kad_1 = true;
      this.jad_1 = size;
    }
  }
  a11() {
    return this.dae().a11();
  }
  fae(objectTags) {
    return this.eae(this.iad_1.gae(objectTags));
  }
  l10(descriptor) {
    var tmp;
    if (hasArrayTag(descriptor)) {
      tmp = new CborListReader(this.dae(), this.iad_1);
    } else {
      var tmp0_subject = descriptor.sy();
      var tmp_0;
      var tmp_1;
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp_1 = true;
      } else {
        tmp_1 = tmp0_subject instanceof PolymorphicKind;
      }
      if (tmp_1) {
        tmp_0 = new CborListReader(this.dae(), this.iad_1);
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp_0 = new CborMapReader(this.dae(), this.iad_1);
        } else {
          tmp_0 = new CborReader(this.dae(), this.iad_1);
        }
      }
      tmp = tmp_0;
    }
    var re = tmp;
    var objectTags = this.dae().uac_1.dad_1 ? getObjectTags(descriptor) : null;
    var tmp1_safe_receiver = this.nad_1;
    var tmp_2;
    var tmp_3 = tmp1_safe_receiver;
    if ((tmp_3 == null ? null : new ULongArray(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      var tmp_4 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_4 == null ? null : new ULongArray(tmp_4)).jv_1;
      var tmp_5;
      var tmp_6 = objectTags;
      if ((tmp_6 == null ? null : new ULongArray(tmp_6)) == null) {
        tmp_5 = it;
      } else {
        // Inline function 'kotlin.ulongArrayOf' call
        tmp_5 = _ULongArray___init__impl__twm1l3(primitiveArrayConcat([it, objectTags]));
      }
      tmp_2 = tmp_5;
    }
    var tmp2_elvis_lhs = tmp_2;
    var tmp_7;
    var tmp_8 = tmp2_elvis_lhs;
    if ((tmp_8 == null ? null : new ULongArray(tmp_8)) == null) {
      tmp_7 = objectTags;
    } else {
      tmp_7 = tmp2_elvis_lhs;
    }
    re.fae(tmp_7);
    return re;
  }
  m10(descriptor) {
    if (!this.kad_1) {
      this.iad_1.hae();
    }
  }
  c11(descriptor) {
    var tmp;
    if (this.dae().uac_1.xac_1) {
      var knownIndex;
      $l$loop: while (true) {
        if (isDone(this))
          return -1;
        var _destruct__k2r9zo = decodeElementNameWithTagsLenient(this, descriptor);
        var elemName = _destruct__k2r9zo.pl();
        var tmp_0 = _destruct__k2r9zo.ql();
        var tags = tmp_0 == null ? null : tmp_0.jv_1;
        this.lad_1 = this.lad_1 + 1 | 0;
        var tmp_1;
        if (elemName == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_1 = descriptor.xy(elemName);
        }
        var tmp1_elvis_lhs = tmp_1;
        var index = tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
        if (index === -3) {
          this.iad_1.iae(tags);
        } else {
          verifyKeyTags(this, descriptor, index, tags);
          knownIndex = index;
          break $l$loop;
        }
      }
      tmp = knownIndex;
    } else {
      if (isDone(this))
        return -1;
      var _destruct__k2r9zo_0 = decodeElementNameWithTags(this, descriptor);
      var elemName_0 = _destruct__k2r9zo_0.pl();
      var tmp_2 = _destruct__k2r9zo_0.ql();
      var tags_0 = tmp_2 == null ? null : tmp_2.jv_1;
      this.lad_1 = this.lad_1 + 1 | 0;
      // Inline function 'kotlin.also' call
      var this_0 = getElementIndexOrThrow(descriptor, elemName_0);
      verifyKeyTags(this, descriptor, this_0, tags_0);
      tmp = this_0;
    }
    var index_0 = tmp;
    this.mad_1 = isByteString(descriptor, index_0);
    this.nad_1 = this.dae().uac_1.cad_1 ? getValueTags(descriptor, index_0) : null;
    return index_0;
  }
  k10(deserializer) {
    var tmp;
    if ((this.mad_1 || this.dae().uac_1.gad_1) && equals(deserializer.xv(), ByteArraySerializer().xv())) {
      var tmp_0 = this.iad_1.jae(this.nad_1);
      tmp = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    } else {
      this.mad_1 = this.mad_1 || isInlineByteString(deserializer.xv());
      tmp = super.k10(deserializer);
    }
    return tmp;
  }
  g10() {
    return this.iad_1.kae(this.nad_1);
  }
  wz() {
    return !this.iad_1.lae();
  }
  e10() {
    return this.iad_1.mae(this.nad_1);
  }
  d10() {
    return this.iad_1.nae(this.nad_1);
  }
  yz() {
    return this.iad_1.oae(this.nad_1);
  }
  zz() {
    return convertToByte(this.iad_1.pae(this.nad_1, -128n, 127n, 'Byte'));
  }
  a10() {
    return convertToShort(this.iad_1.pae(this.nad_1, -32768n, 32767n, 'Short'));
  }
  f10() {
    var tmp = this.nad_1;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(0);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    var tmp_0 = fromInt(tmp$ret$0);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(65535);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    return numberToChar(convertToInt(this.iad_1.pae(tmp, tmp_0, fromInt(tmp$ret$1), 'Char')));
  }
  b10() {
    return convertToInt(this.iad_1.pae(this.nad_1, -2147483648n, 2147483647n, 'Int'));
  }
  c10() {
    return this.iad_1.qae(this.nad_1);
  }
  xz() {
    return this.iad_1.rae(this.nad_1);
  }
  h10(enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.iad_1.kae(this.nad_1));
  }
}
class CborParser {
  constructor(input, verifyObjectTags) {
    this.xad_1 = input;
    this.yad_1 = verifyObjectTags;
    this.zad_1 = -1;
    readByte(this);
  }
  lae() {
    // Inline function 'kotlin.with' call
    var $this$with = peekCurByteOrFail(this);
    return $this$with === 246 || $this$with === 160;
  }
  rae(tags) {
    processTags(this, tags);
    if (this.lae()) {
      readByte(this);
      return null;
    }
    throw CborDecodingException_0('null value (' + toHexString(246) + ') or empty map (' + toHexString(160) + ')', peekCurByteOrFail(this));
  }
  oae(tags) {
    processTags(this, tags);
    var byte = peekCurByteOrFail(this);
    var tmp;
    switch (byte) {
      case 245:
        tmp = true;
        break;
      case 244:
        tmp = false;
        break;
      default:
        throw CborDecodingException_0('boolean value', byte);
    }
    var ans = tmp;
    readByte(this);
    return ans;
  }
  tae(tags) {
    return startSized(this, tags, 159, 128, 'array');
  }
  gae(tags) {
    return startSized(this, tags, 191, 160, 'map');
  }
  bae() {
    return peekCurByteOrFail(this) === 255;
  }
  hae() {
    return skipByte(this, 255);
  }
  jae(tags) {
    processTags(this, tags);
    var header = peekCurByteOrFail(this);
    if (!((header & 224) === 64)) {
      if ((header & 224) === 128) {
        throw CborDecodingException.wad('Expected a start of a byte string, ' + ('but found ' + printByte(header) + ', which corresponds to the start of an array. ') + "Make sure you correctly set 'alwaysUseByteString' setting and/or 'kotlinx.serialization.cbor.ByteString' annotation.");
      }
      throw CborDecodingException_0('start of byte string', header);
    }
    var arr = readBytes(this);
    readByte(this);
    return arr;
  }
  kae(tags) {
    return nextTaggedString(this, tags).nl_1;
  }
  cae(expected, actual) {
    if (!contentEquals(expected, actual)) {
      var tmp;
      var tmp_0 = actual;
      if ((tmp_0 == null ? null : new ULongArray(tmp_0)) == null) {
        tmp = null;
      } else {
        tmp = contentToString(actual);
      }
      throw CborDecodingException.wad('CBOR tags ' + tmp + ' do not match expected tags ' + contentToString(expected));
    }
  }
  aae() {
    var collectedTags = processTags(this, null);
    var majorType = peekCurByteOrFail(this);
    if ((majorType & 224) === 96) {
      var arr = readBytes(this);
      var ans = decodeToString(arr);
      readByte(this);
      var tmp = collectedTags;
      return new Triple(ans, null, tmp == null ? null : new ULongArray(tmp));
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.cbor.internal.CborParser.readUnsignedIntegerIgnoringMajorType' call
        var additionalInfo = peekCurByteOrFail(this) & 31;
        if (additionalInfo <= 23) {
          tmp$ret$0 = fromInt(additionalInfo);
          break $l$block;
        }
        var tmp_0;
        switch (additionalInfo) {
          case 24:
            tmp_0 = 1;
            break;
          case 25:
            tmp_0 = 2;
            break;
          case 26:
            tmp_0 = 4;
            break;
          case 27:
            tmp_0 = 8;
            break;
          default:
            var tmp$ret$1 = get_majorTypeName(majorType);
            throw CborDecodingException.wad('Unexpected value encoding when reading ' + tmp$ret$1 + '. ' + ('Expected addition info value < 28, got ' + additionalInfo + ' ') + ('(decoded from ' + printByte(peekCurByteOrFail(this)) + ')'));
        }
        var bytesToRead = tmp_0;
        tmp$ret$0 = readExact(this, this.xad_1, bytesToRead);
      }
      var res = tmp$ret$0;
      readByte(this);
      var tmp_1 = collectedTags;
      return new Triple(null, res, tmp_1 == null ? null : new ULongArray(tmp_1));
    }
  }
  pae(tags, from, to, type) {
    var number = this.qae(tags);
    if (!(from <= number ? number <= to : false)) {
      throw CborDecodingException.wad('Decoded number ' + number.toString() + ' is not within the range for type ' + type + ' ([' + from.toString() + '..' + to.toString() + '])');
    }
    return number;
  }
  qae(tags) {
    processTags(this, tags);
    var res = readNumber(this);
    readByte(this);
    return res;
  }
  nae(tags) {
    processTags(this, tags);
    var headerByte = peekCurByteOrFail(this);
    var tmp;
    switch (headerByte) {
      case 250:
        // Inline function 'kotlin.fromBits' call

        var bits = readInt(this);
        tmp = floatFromBits(bits);
        break;
      case 249:
        tmp = floatFromHalfBits(readShort(this));
        break;
      default:
        throw CborDecodingException_0('float header', headerByte);
    }
    var res = tmp;
    readByte(this);
    return res;
  }
  mae(tags) {
    processTags(this, tags);
    var headerByte = peekCurByteOrFail(this);
    var tmp;
    switch (headerByte) {
      case 251:
        // Inline function 'kotlin.fromBits' call

        var bits = readLong(this);
        tmp = doubleFromBits(bits);
        break;
      case 250:
        // Inline function 'kotlin.fromBits' call

        var bits_0 = readInt(this);
        tmp = floatFromBits(bits_0);
        break;
      case 249:
        tmp = floatFromHalfBits(readShort(this));
        break;
      default:
        throw CborDecodingException_0('double header', headerByte);
    }
    var res = tmp;
    readByte(this);
    return res;
  }
  iae(tags) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var lengthStack = ArrayList.s2();
    processTags(this, tags);
    $l$1: do {
      $l$0: do {
        if (isIndefinite(this)) {
          lengthStack.e2(-1);
        } else if (this.bae()) {
          if (!(removeLastOrNull(lengthStack) === -1))
            throw CborDecodingException_0('next data item', peekCurByteOrFail(this));
          prune(this, lengthStack);
        } else {
          var header = peekCurByteOrFail(this) & 224;
          var length = elementLength(this);
          switch (header) {
            case 192:
              $l$block: {
                // Inline function 'kotlinx.serialization.cbor.internal.CborParser.readUnsignedIntegerIgnoringMajorType' call
                var additionalInfo = peekCurByteOrFail(this) & 31;
                if (additionalInfo <= 23) {
                  fromInt(additionalInfo);
                  break $l$block;
                }
                var tmp;
                switch (additionalInfo) {
                  case 24:
                    tmp = 1;
                    break;
                  case 25:
                    tmp = 2;
                    break;
                  case 26:
                    tmp = 4;
                    break;
                  case 27:
                    tmp = 8;
                    break;
                  default:
                    throw CborDecodingException.wad('Unexpected value encoding when reading ' + 'tag' + '. ' + ('Expected addition info value < 28, got ' + additionalInfo + ' ') + ('(decoded from ' + printByte(peekCurByteOrFail(this)) + ')'));
                }
                var bytesToRead = tmp;
                readExact(this, this.xad_1, bytesToRead);
              }

              break;
            case 128:
            case 160:
              if (length > 0)
                lengthStack.e2(length);
              else {
                prune(this, lengthStack);
              }

              break;
            default:
              this.xad_1.uae(length);
              prune(this, lengthStack);
              break;
          }
        }
        readByte(this);
      }
       while (false);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$3 = !lengthStack.o1();
    }
     while (tmp$ret$3);
  }
}
class CborListReader extends CborReader {
  constructor(cbor, decoder) {
    super(cbor, decoder);
    this.caf_1 = 0;
  }
  fae(objectTags) {
    var tmp0_safe_receiver = this.nad_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new ULongArray(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp_1 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_1 == null ? null : new ULongArray(tmp_1)).jv_1;
      var tmp_2;
      var tmp_3 = objectTags;
      if ((tmp_3 == null ? null : new ULongArray(tmp_3)) == null) {
        tmp_2 = it;
      } else {
        // Inline function 'kotlin.ulongArrayOf' call
        tmp_2 = _ULongArray___init__impl__twm1l3(primitiveArrayConcat([it, objectTags]));
      }
      tmp = tmp_2;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_4;
    var tmp_5 = tmp1_elvis_lhs;
    if ((tmp_5 == null ? null : new ULongArray(tmp_5)) == null) {
      tmp_4 = objectTags;
    } else {
      tmp_4 = tmp1_elvis_lhs;
    }
    return this.eae(this.iad_1.tae(tmp_4));
  }
  c11(descriptor) {
    var tmp;
    if (!this.kad_1 && this.iad_1.bae() || (this.kad_1 && this.caf_1 >= this.jad_1)) {
      tmp = -1;
    } else {
      var _unary__edvuaz = this.caf_1;
      this.caf_1 = _unary__edvuaz + 1 | 0;
      // Inline function 'kotlin.also' call
      this.mad_1 = isByteString(descriptor, _unary__edvuaz);
      tmp = _unary__edvuaz;
    }
    return tmp;
  }
}
class CborMapReader extends CborListReader {
  fae(objectTags) {
    var tmp0_safe_receiver = this.nad_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new ULongArray(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp_1 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_1 == null ? null : new ULongArray(tmp_1)).jv_1;
      var tmp_2;
      var tmp_3 = objectTags;
      if ((tmp_3 == null ? null : new ULongArray(tmp_3)) == null) {
        tmp_2 = it;
      } else {
        // Inline function 'kotlin.ulongArrayOf' call
        tmp_2 = _ULongArray___init__impl__twm1l3(primitiveArrayConcat([it, objectTags]));
      }
      tmp = tmp_2;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_4;
    var tmp_5 = tmp1_elvis_lhs;
    if ((tmp_5 == null ? null : new ULongArray(tmp_5)) == null) {
      tmp_4 = objectTags;
    } else {
      tmp_4 = tmp1_elvis_lhs;
    }
    return this.eae(imul(this.iad_1.gae(tmp_4), 2));
  }
}
class ByteArrayInput {
  constructor(array) {
    this.oad_1 = array;
    this.pad_1 = 0;
  }
  qad() {
    return this.oad_1.length - this.pad_1 | 0;
  }
  s2b() {
    var tmp;
    if (this.pad_1 < this.oad_1.length) {
      var tmp_0 = this.oad_1;
      var _unary__edvuaz = this.pad_1;
      this.pad_1 = _unary__edvuaz + 1 | 0;
      tmp = tmp_0[_unary__edvuaz] & 255;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  sae(b, offset, length) {
    if (offset < 0 || offset > b.length || length < 0 || length > (b.length - offset | 0)) {
      throw IndexOutOfBoundsException.se();
    }
    if (this.pad_1 >= this.oad_1.length) {
      return -1;
    }
    if (length === 0) {
      return 0;
    }
    var copied = (this.oad_1.length - this.pad_1 | 0) < length ? this.oad_1.length - this.pad_1 | 0 : length;
    var tmp0 = this.oad_1;
    var tmp6 = this.pad_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.pad_1 + copied | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, b, offset, tmp6, endIndex);
    this.pad_1 = this.pad_1 + copied | 0;
    return copied;
  }
  uae(length) {
    this.pad_1 = this.pad_1 + length | 0;
  }
}
//endregion
function Cbor$Default$CoseCompliant$lambda($this$Cbor) {
  $this$Cbor.fac_1 = false;
  $this$Cbor.gac_1 = false;
  $this$Cbor.hac_1 = true;
  $this$Cbor.iac_1 = true;
  $this$Cbor.jac_1 = true;
  $this$Cbor.kac_1 = true;
  $this$Cbor.lac_1 = true;
  $this$Cbor.mac_1 = true;
  $this$Cbor.nac_1 = true;
  $this$Cbor.oac_1 = true;
  $this$Cbor.pac_1 = false;
  $this$Cbor.qac_1 = EmptySerializersModule();
  return Unit_instance;
}
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    new Default();
  return Default_instance;
}
function Cbor_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new CborBuilder(from);
  builderAction(builder);
  return new CborImpl(new CborConfiguration(builder.fac_1, builder.gac_1, builder.hac_1, builder.iac_1, builder.jac_1, builder.kac_1, builder.lac_1, builder.mac_1, builder.nac_1, builder.oac_1, builder.pac_1), builder.qac_1);
}
function CborDecodingException_0(expected, foundByte) {
  return CborDecodingException.wad('Expected ' + expected + ', but found ' + printByte(foundByte));
}
function printByte(b) {
  var hexCode = '0123456789ABCDEF';
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.m1();
  this_0.p1(charCodeAt(hexCode, b >> 4 & 15));
  this_0.p1(charCodeAt(hexCode, b & 15));
  return this_0.toString();
}
function get_normalizeBaseBits() {
  _init_properties_Decoder_kt__j583ji();
  return normalizeBaseBits;
}
var normalizeBaseBits;
function decodeElementNameWithTags($this, descriptor) {
  var _destruct__k2r9zo = $this.iad_1.aae();
  var elemName = _destruct__k2r9zo.pl();
  var cborLabel = _destruct__k2r9zo.ql();
  var tmp = _destruct__k2r9zo.xt();
  var tags = tmp == null ? null : tmp.jv_1;
  if (elemName == null && !(cborLabel == null)) {
    var tmp0_elvis_lhs = getElementNameForCborLabel(descriptor, cborLabel);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw CborDecodingException.wad('CborLabel unknown: ' + cborLabel.toString() + ' for ' + toString(descriptor));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    elemName = tmp_0;
  }
  if (elemName == null) {
    throw CborDecodingException.wad('Expected (tagged) string or number, got nothing for ' + toString(descriptor));
  }
  var tmp_1 = elemName;
  var tmp_2 = tags;
  return to(tmp_1, tmp_2 == null ? null : new ULongArray(tmp_2));
}
function decodeElementNameWithTagsLenient($this, descriptor) {
  var _destruct__k2r9zo = $this.iad_1.aae();
  var elemName = _destruct__k2r9zo.pl();
  var cborLabel = _destruct__k2r9zo.ql();
  var tmp = _destruct__k2r9zo.xt();
  var tags = tmp == null ? null : tmp.jv_1;
  if (elemName == null && !(cborLabel == null)) {
    elemName = getElementNameForCborLabel(descriptor, cborLabel);
  }
  var tmp_0 = elemName;
  var tmp_1 = tags;
  return to(tmp_0, tmp_1 == null ? null : new ULongArray(tmp_1));
}
function isDone($this) {
  return !$this.kad_1 && $this.iad_1.bae() || ($this.kad_1 && $this.lad_1 >= $this.jad_1);
}
function verifyKeyTags($this, descriptor, index, tags) {
  if ($this.dae().uac_1.bad_1) {
    var tmp0_safe_receiver = getKeyTags(descriptor, index);
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new ULongArray(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var keyTags = (tmp_0 == null ? null : new ULongArray(tmp_0)).jv_1;
      $this.iad_1.cae(keyTags, tags);
    }
  }
}
function peekCurByteOrFail($this) {
  if ($this.zad_1 === -1)
    throw CborDecodingException.wad('Unexpected end of encoded CBOR document');
  return $this.zad_1;
}
function readByte($this) {
  $this.zad_1 = $this.xad_1.s2b();
  return $this.zad_1;
}
function skipByte($this, expected) {
  var byte = peekCurByteOrFail($this);
  if (!(byte === expected))
    throw CborDecodingException_0('byte ' + printByte(expected), byte);
  readByte($this);
}
function startSized($this, tags, unboundedHeader, boundedHeaderMask, collectionType) {
  processTags($this, tags);
  var header = peekCurByteOrFail($this);
  if (header === unboundedHeader) {
    skipByte($this, unboundedHeader);
    return -1;
  }
  if (!((header & 224) === boundedHeaderMask)) {
    if (boundedHeaderMask === 128 && (header & 224) === 64) {
      throw CborDecodingException.wad('Expected a start of array, ' + ('but found ' + printByte(header) + ', which corresponds to the start of a byte string. ') + "Make sure you correctly set 'alwaysUseByteString' setting and/or 'kotlinx.serialization.cbor.ByteString' annotation.");
    }
    throw CborDecodingException_0('start of ' + collectionType, header);
  }
  var majorType = header & 224;
  var sizeLimit = majorType === 160 ? 1073741823 : 2147483647;
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.cbor.internal.CborParser.readUnsignedIntegerIgnoringMajorType' call
    var additionalInfo = peekCurByteOrFail($this) & 31;
    if (additionalInfo <= 23) {
      tmp$ret$0 = fromInt(additionalInfo);
      break $l$block;
    }
    var tmp;
    switch (additionalInfo) {
      case 24:
        tmp = 1;
        break;
      case 25:
        tmp = 2;
        break;
      case 26:
        tmp = 4;
        break;
      case 27:
        tmp = 8;
        break;
      default:
        var tmp$ret$1 = collectionType + ' length';
        throw CborDecodingException.wad('Unexpected value encoding when reading ' + tmp$ret$1 + '. ' + ('Expected addition info value < 28, got ' + additionalInfo + ' ') + ('(decoded from ' + printByte(peekCurByteOrFail($this)) + ')'));
    }
    var bytesToRead = tmp;
    tmp$ret$0 = readExact($this, $this.xad_1, bytesToRead);
  }
  var size = asSizedElementLength($this, tmp$ret$0, majorType, sizeLimit);
  readByte($this);
  return size;
}
function nextTaggedString($this, tags) {
  var collectedTags = processTags($this, tags);
  var headerByte = peekCurByteOrFail($this);
  if (!((headerByte & 224) === 96))
    throw CborDecodingException_0('start of string', headerByte);
  var arr = readBytes($this);
  var ans = decodeToString(arr);
  readByte($this);
  var tmp = collectedTags;
  return to(ans, tmp == null ? null : new ULongArray(tmp));
}
function readBytes($this) {
  var headerByte = peekCurByteOrFail($this);
  var tmp;
  if ((headerByte & 31) === 31) {
    var majorType = headerByte & 224;
    readByte($this);
    tmp = readIndefiniteLengthStringChunks($this, majorType);
  } else {
    var majorType_0 = headerByte & 224;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.cbor.internal.CborParser.readUnsignedIntegerIgnoringMajorType' call
      var additionalInfo = peekCurByteOrFail($this) & 31;
      if (additionalInfo <= 23) {
        tmp$ret$0 = fromInt(additionalInfo);
        break $l$block;
      }
      var tmp_0;
      switch (additionalInfo) {
        case 24:
          tmp_0 = 1;
          break;
        case 25:
          tmp_0 = 2;
          break;
        case 26:
          tmp_0 = 4;
          break;
        case 27:
          tmp_0 = 8;
          break;
        default:
          throw CborDecodingException.wad('Unexpected value encoding when reading ' + 'length' + '. ' + ('Expected addition info value < 28, got ' + additionalInfo + ' ') + ('(decoded from ' + printByte(peekCurByteOrFail($this)) + ')'));
      }
      var bytesToRead = tmp_0;
      tmp$ret$0 = readExact($this, $this.xad_1, bytesToRead);
    }
    var strLen = asSizedElementLength$default($this, tmp$ret$0, majorType_0);
    tmp = readExactNBytes($this, $this.xad_1, strLen);
  }
  return tmp;
}
function processTags($this, tags) {
  var index = 0;
  // Inline function 'kotlin.collections.mutableListOf' call
  var collectedTags = ArrayList.s2();
  while ((peekCurByteOrFail($this) & 224) === 192) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.cbor.internal.CborParser.readUnsignedIntegerIgnoringMajorType' call
      var additionalInfo = peekCurByteOrFail($this) & 31;
      if (additionalInfo <= 23) {
        tmp$ret$1 = fromInt(additionalInfo);
        break $l$block;
      }
      var tmp;
      switch (additionalInfo) {
        case 24:
          tmp = 1;
          break;
        case 25:
          tmp = 2;
          break;
        case 26:
          tmp = 4;
          break;
        case 27:
          tmp = 8;
          break;
        default:
          throw CborDecodingException.wad('Unexpected value encoding when reading ' + 'tag' + '. ' + ('Expected addition info value < 28, got ' + additionalInfo + ' ') + ('(decoded from ' + printByte(peekCurByteOrFail($this)) + ')'));
      }
      var bytesToRead = tmp;
      tmp$ret$1 = readExact($this, $this.xad_1, bytesToRead);
    }
    // Inline function 'kotlin.toULong' call
    var this_0 = tmp$ret$1;
    var readTag = _ULong___init__impl__c78o9k(this_0);
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new ULong(readTag);
    collectedTags.e2(element);
    if ($this.yad_1) {
      var tmp_0 = tags;
      if ((tmp_0 == null ? null : new ULongArray(tmp_0)) == null)
        null;
      else {
        var tmp_1 = tags;
        // Inline function 'kotlin.let' call
        var it = (tmp_1 == null ? null : new ULongArray(tmp_1)).jv_1;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        if (_unary__edvuaz >= _ULongArray___get_size__impl__ju6dtr(it))
          throw CborDecodingException.wad('More tags found than the ' + _ULongArray___get_size__impl__ju6dtr(it) + ' tags specified');
      }
    }
    readByte($this);
  }
  var tmp_2 = collectedTags.o1() ? null : toULongArray(collectedTags);
  // Inline function 'kotlin.also' call
  var this_1 = tmp_2 == null ? null : new ULongArray(tmp_2);
  var tmp_3 = this_1;
  var collected = tmp_3 == null ? null : tmp_3.jv_1;
  var tmp_4 = tags;
  if ((tmp_4 == null ? null : new ULongArray(tmp_4)) == null)
    null;
  else {
    var tmp_5 = tags;
    // Inline function 'kotlin.let' call
    var it_0 = (tmp_5 == null ? null : new ULongArray(tmp_5)).jv_1;
    if ($this.yad_1) {
      $this.cae(it_0, collected);
    } else {
      if (collectedTags.q2() < _ULongArray___get_size__impl__ju6dtr(it_0) || !equals(collectedTags.d4(0, _ULongArray___get_size__impl__ju6dtr(it_0)), asList(it_0)))
        throw CborDecodingException.wad('CBOR tags ' + toString(collectedTags) + ' do not start with specified tags ' + ULongArray__toString_impl_wqk1p5(it_0));
    }
  }
  var tmp_6 = this_1;
  return tmp_6 == null ? null : tmp_6.jv_1;
}
function readNumber($this) {
  var headerByte = peekCurByteOrFail($this);
  var majorType = headerByte & 224;
  if (!(majorType === 32) && !(majorType === 0)) {
    throw CborDecodingException_0('an unsigned or negative integer', headerByte);
  }
  var negative = majorType === 32;
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.cbor.internal.CborParser.readUnsignedIntegerIgnoringMajorType' call
    var additionalInfo = peekCurByteOrFail($this) & 31;
    if (additionalInfo <= 23) {
      tmp$ret$0 = fromInt(additionalInfo);
      break $l$block;
    }
    var tmp;
    switch (additionalInfo) {
      case 24:
        tmp = 1;
        break;
      case 25:
        tmp = 2;
        break;
      case 26:
        tmp = 4;
        break;
      case 27:
        tmp = 8;
        break;
      default:
        var tmp$ret$1 = get_majorTypeName(majorType);
        throw CborDecodingException.wad('Unexpected value encoding when reading ' + tmp$ret$1 + '. ' + ('Expected addition info value < 28, got ' + additionalInfo + ' ') + ('(decoded from ' + printByte(peekCurByteOrFail($this)) + ')'));
    }
    var bytesToRead = tmp;
    tmp$ret$0 = readExact($this, $this.xad_1, bytesToRead);
  }
  var unsignedValue = tmp$ret$0;
  var tmp_0;
  if (negative) {
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$2 = add(unsignedValue, fromInt(1));
    tmp_0 = negate(tmp$ret$2);
  } else {
    tmp_0 = unsignedValue;
  }
  return tmp_0;
}
function readExact($this, _this__u8e3s4, bytes) {
  var arr = readExactNBytes($this, _this__u8e3s4, bytes);
  var result = 0n;
  var inductionVariable = 0;
  if (inductionVariable < bytes)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      result = shiftLeft(result, 8) | fromInt(arr[i] & 255);
    }
     while (inductionVariable < bytes);
  return result;
}
function ensureEnoughBytes($this, _this__u8e3s4, bytesCount) {
  if (bytesCount > _this__u8e3s4.qad()) {
    throw CborDecodingException.wad('Unexpected EOF, available ' + _this__u8e3s4.qad() + ' bytes, requested: ' + bytesCount);
  }
}
function readExactNBytes($this, _this__u8e3s4, bytesCount) {
  ensureEnoughBytes($this, _this__u8e3s4, bytesCount);
  var array = new Int8Array(bytesCount);
  _this__u8e3s4.sae(array, 0, bytesCount);
  return array;
}
function readLong($this) {
  ensureEnoughBytes($this, $this.xad_1, 8);
  var result = 0n;
  // Inline function 'kotlin.repeat' call
  var inductionVariable = 0;
  if (inductionVariable < 8)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var byte = $this.xad_1.s2b();
      result = shiftLeft(result, 8) | fromInt(byte);
    }
     while (inductionVariable < 8);
  return result;
}
function readShort($this) {
  ensureEnoughBytes($this, $this.xad_1, 2);
  var highByte = $this.xad_1.s2b();
  var lowByte = $this.xad_1.s2b();
  return toShort(highByte << 8 | lowByte);
}
function readInt($this) {
  ensureEnoughBytes($this, $this.xad_1, 4);
  var result = 0;
  // Inline function 'kotlin.repeat' call
  var inductionVariable = 0;
  if (inductionVariable < 4)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var byte = $this.xad_1.s2b();
      result = result << 8 | byte;
    }
     while (inductionVariable < 4);
  return result;
}
function prune($this, lengthStack) {
  var inductionVariable = get_lastIndex(lengthStack);
  if (0 <= inductionVariable)
    $l$loop_0: do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + -1 | 0;
      switch (lengthStack.p2(i)) {
        case -1:
          break $l$loop_0;
        case 1:
          lengthStack.u4(i);
          break;
        default:
          lengthStack.s4(i, lengthStack.p2(i) - 1 | 0);
          break $l$loop_0;
      }
    }
     while (0 <= inductionVariable);
}
function isIndefinite($this) {
  var curByte = peekCurByteOrFail($this);
  var majorType = curByte & 224;
  var value = curByte & 31;
  return value === 31 && (majorType === 128 || majorType === 160 || majorType === 64 || majorType === 96);
}
function elementLength($this) {
  var curByte = peekCurByteOrFail($this);
  var majorType = curByte & 224;
  var additionalInformation = curByte & 31;
  var tmp;
  switch (majorType) {
    case 64:
    case 96:
    case 128:
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.cbor.internal.CborParser.readUnsignedIntegerIgnoringMajorType' call
        var additionalInfo = peekCurByteOrFail($this) & 31;
        if (additionalInfo <= 23) {
          tmp$ret$0 = fromInt(additionalInfo);
          break $l$block;
        }
        var tmp_0;
        switch (additionalInfo) {
          case 24:
            tmp_0 = 1;
            break;
          case 25:
            tmp_0 = 2;
            break;
          case 26:
            tmp_0 = 4;
            break;
          case 27:
            tmp_0 = 8;
            break;
          default:
            var tmp$ret$1 = get_majorTypeName(majorType) + ' length';
            throw CborDecodingException.wad('Unexpected value encoding when reading ' + tmp$ret$1 + '. ' + ('Expected addition info value < 28, got ' + additionalInfo + ' ') + ('(decoded from ' + printByte(peekCurByteOrFail($this)) + ')'));
        }
        var bytesToRead = tmp_0;
        tmp$ret$0 = readExact($this, $this.xad_1, bytesToRead);
      }

      tmp = asSizedElementLength$default($this, tmp$ret$0, majorType);
      break;
    case 160:
      var tmp$ret$2;
      $l$block_0: {
        // Inline function 'kotlinx.serialization.cbor.internal.CborParser.readUnsignedIntegerIgnoringMajorType' call
        var additionalInfo_0 = peekCurByteOrFail($this) & 31;
        if (additionalInfo_0 <= 23) {
          tmp$ret$2 = fromInt(additionalInfo_0);
          break $l$block_0;
        }
        var tmp_1;
        switch (additionalInfo_0) {
          case 24:
            tmp_1 = 1;
            break;
          case 25:
            tmp_1 = 2;
            break;
          case 26:
            tmp_1 = 4;
            break;
          case 27:
            tmp_1 = 8;
            break;
          default:
            var tmp$ret$3 = 'map length';
            throw CborDecodingException.wad('Unexpected value encoding when reading ' + tmp$ret$3 + '. ' + ('Expected addition info value < 28, got ' + additionalInfo_0 + ' ') + ('(decoded from ' + printByte(peekCurByteOrFail($this)) + ')'));
        }
        var bytesToRead_0 = tmp_1;
        tmp$ret$2 = readExact($this, $this.xad_1, bytesToRead_0);
      }

      tmp = imul(asSizedElementLength($this, tmp$ret$2, majorType, 1073741823), 2);
      break;
    default:
      switch (additionalInformation) {
        case 24:
          tmp = 1;
          break;
        case 25:
          tmp = 2;
          break;
        case 26:
          tmp = 4;
          break;
        case 27:
          tmp = 8;
          break;
        default:
          tmp = 0;
          break;
      }

      break;
  }
  return tmp;
}
function readIndefiniteLengthStringChunks($this, majorType) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var byteStrings = ArrayList.s2();
  do {
    var header = peekCurByteOrFail($this);
    if (!((header & 224) === majorType)) {
      throw CborDecodingException_0('a header of a chunk with a major type bits matching ' + majorType, header);
    }
    if ((header & 31) === 31) {
      throw CborDecodingException_0('a fixed-length chunk', header);
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.cbor.internal.CborParser.readUnsignedIntegerIgnoringMajorType' call
      var additionalInfo = peekCurByteOrFail($this) & 31;
      if (additionalInfo <= 23) {
        tmp$ret$1 = fromInt(additionalInfo);
        break $l$block;
      }
      var tmp;
      switch (additionalInfo) {
        case 24:
          tmp = 1;
          break;
        case 25:
          tmp = 2;
          break;
        case 26:
          tmp = 4;
          break;
        case 27:
          tmp = 8;
          break;
        default:
          var tmp$ret$2 = 'length of a fixed-length chunk';
          throw CborDecodingException.wad('Unexpected value encoding when reading ' + tmp$ret$2 + '. ' + ('Expected addition info value < 28, got ' + additionalInfo + ' ') + ('(decoded from ' + printByte(peekCurByteOrFail($this)) + ')'));
      }
      var bytesToRead = tmp;
      tmp$ret$1 = readExact($this, $this.xad_1, bytesToRead);
    }
    var length = asSizedElementLength$default($this, tmp$ret$1, majorType);
    byteStrings.e2(readExactNBytes($this, $this.xad_1, length));
    readByte($this);
  }
   while (!$this.bae());
  return flatten(byteStrings);
}
function asSizedElementLength($this, _this__u8e3s4, majorType, sizeLimit) {
  if (0n <= _this__u8e3s4 ? _this__u8e3s4 <= fromInt(sizeLimit) : false)
    return convertToInt(_this__u8e3s4);
  var typeName = get_majorTypeName(majorType);
  if (_this__u8e3s4 < 0n) {
    throw CborDecodingException.wad('negative length value was decoded for ' + typeName + ': ' + _this__u8e3s4.toString());
  }
  throw CborDecodingException.wad('length for ' + typeName + ' is too large: ' + _this__u8e3s4.toString());
}
function asSizedElementLength$default($this, _this__u8e3s4, majorType, sizeLimit, $super) {
  sizeLimit = sizeLimit === VOID ? 2147483647 : sizeLimit;
  return asSizedElementLength($this, _this__u8e3s4, majorType, sizeLimit);
}
function getElementIndexOrThrow(_this__u8e3s4, name) {
  _init_properties_Decoder_kt__j583ji();
  var index = _this__u8e3s4.xy(name);
  if (index === -3)
    throw SerializationException.rx(_this__u8e3s4.bx() + " does not contain element with name '" + name + '.' + " You can enable 'CborBuilder.ignoreUnknownKeys' property to ignore unknown keys");
  return index;
}
function getElementNameForCborLabel(_this__u8e3s4, label) {
  _init_properties_Decoder_kt__j583ji();
  var tmp0 = get_elementNames(_this__u8e3s4);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (getCborLabel(_this__u8e3s4, _this__u8e3s4.xy(element)) === label) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  return tmp$ret$1;
}
function get_majorTypeName(_this__u8e3s4) {
  _init_properties_Decoder_kt__j583ji();
  switch (_this__u8e3s4 & 224) {
    case 64:
      return 'byte string';
    case 96:
      return 'string';
    case 128:
      return 'array';
    case 160:
      return 'map';
    case 192:
      return 'tag';
    case 0:
      return 'unsigned integer';
    case 32:
      return 'negative integer';
    default:
      return '<unknown>';
  }
}
function floatFromHalfBits(bits) {
  _init_properties_Decoder_kt__j583ji();
  var intBits = bits;
  var negative = !((intBits & 32768) === 0);
  var halfExp = intBits >> 10 & 31;
  var halfMant = intBits & 1023;
  var exp;
  var mant;
  switch (halfExp) {
    case 31:
      exp = 255;
      mant = halfMant;
      break;
    case 0:
      if (halfMant === 0) {
        mant = 0;
        exp = 0;
      } else {
        // Inline function 'kotlin.fromBits' call
        var bits_0 = get_normalizeBaseBits() + halfMant | 0;
        var res = floatFromBits(bits_0);
        res = res - 0.5;
        return negative ? -res : res;
      }

      break;
    default:
      exp = halfExp + 112 | 0;
      mant = halfMant;
      break;
  }
  // Inline function 'kotlin.fromBits' call
  var bits_1 = exp << 23 | mant << 13;
  var res_0 = floatFromBits(bits_1);
  return negative ? -res_0 : res_0;
}
function flatten(_this__u8e3s4) {
  _init_properties_Decoder_kt__j583ji();
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = _this__u8e3s4.q1();
  while (_iterator__ex2g4s.r1()) {
    var element = _iterator__ex2g4s.s1();
    var tmp = sum;
    sum = tmp + element.length | 0;
  }
  var tmp$ret$1 = sum;
  var output = new Int8Array(tmp$ret$1);
  var position = 0;
  var _iterator__ex2g4s_0 = _this__u8e3s4.q1();
  while (_iterator__ex2g4s_0.r1()) {
    var chunk = _iterator__ex2g4s_0.s1();
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = position;
    var endIndex = chunk.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = chunk;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, output, destinationOffset, 0, endIndex);
    position = position + chunk.length | 0;
  }
  return output;
}
var properties_initialized_Decoder_kt_z73zkc;
function _init_properties_Decoder_kt__j583ji() {
  if (!properties_initialized_Decoder_kt_z73zkc) {
    properties_initialized_Decoder_kt_z73zkc = true;
    normalizeBaseBits = toBits(0.5);
  }
}
function hasArrayTag(_this__u8e3s4) {
  var tmp0 = _this__u8e3s4.vy();
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(tmp0, Collection)) {
      tmp = tmp0.o1();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof CborArray) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function getObjectTags(_this__u8e3s4) {
  // Inline function 'kotlin.collections.filterIsInstance' call
  var tmp0 = _this__u8e3s4.vy();
  // Inline function 'kotlin.collections.filterIsInstanceTo' call
  var destination = ArrayList.s2();
  var _iterator__ex2g4s = tmp0.q1();
  while (_iterator__ex2g4s.r1()) {
    var element = _iterator__ex2g4s.s1();
    if (element instanceof ObjectTags) {
      destination.e2(element);
    }
  }
  var tmp0_safe_receiver = firstOrNull(destination);
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.laf_1;
}
function isByteString(_this__u8e3s4, index) {
  // Inline function 'kotlin.collections.find' call
  var tmp0 = _this__u8e3s4.yy(index);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof ByteString) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  return !(tmp$ret$1 == null);
}
function getValueTags(_this__u8e3s4, index) {
  // Inline function 'kotlinx.serialization.cbor.internal.findAnnotation' call
  var tmp0 = _this__u8e3s4.yy(index);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof ValueTags) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp = tmp$ret$1;
  var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof ValueTags) ? tmp : THROW_CCE();
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.maf_1;
}
function isInlineByteString(_this__u8e3s4) {
  return _this__u8e3s4.ty() && isByteString(_this__u8e3s4, 0);
}
function getKeyTags(_this__u8e3s4, index) {
  // Inline function 'kotlinx.serialization.cbor.internal.findAnnotation' call
  var tmp0 = _this__u8e3s4.yy(index);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof KeyTags) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp = tmp$ret$1;
  var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof KeyTags) ? tmp : THROW_CCE();
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.naf_1;
}
function getCborLabel(_this__u8e3s4, index) {
  // Inline function 'kotlinx.serialization.cbor.internal.findAnnotation' call
  var tmp0 = _this__u8e3s4.yy(index);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof CborLabel) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp = tmp$ret$1;
  var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof CborLabel) ? tmp : THROW_CCE();
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.oaf_1;
}
//region block: post-declaration
initMetadataForClass(ByteString, 'ByteString');
initMetadataForClass(Cbor, 'Cbor');
initMetadataForObject(Default, 'Default');
initMetadataForClass(CborBuilder, 'CborBuilder');
initMetadataForClass(CborImpl, 'CborImpl');
initMetadataForClass(CborArray, 'CborArray');
initMetadataForClass(CborConfiguration, 'CborConfiguration');
initMetadataForClass(CborLabel, 'CborLabel');
initMetadataForClass(ObjectTags, 'ObjectTags');
initMetadataForClass(ValueTags, 'ValueTags');
initMetadataForClass(KeyTags, 'KeyTags');
initMetadataForClass(CborDecodingException, 'CborDecodingException');
initMetadataForClass(CborReader, 'CborReader', VOID, VOID, [AbstractDecoder, Decoder]);
initMetadataForClass(CborParser, 'CborParser');
initMetadataForClass(CborListReader, 'CborListReader');
initMetadataForClass(CborMapReader, 'CborMapReader');
initMetadataForClass(ByteArrayInput, 'ByteArrayInput');
//endregion
//region block: exports
export {
  Cbor_0 as Cbor2f4m7hu7pld6l,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-cbor.mjs.map
