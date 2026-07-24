import {
  toCharArray32huqyw9tt7kx as toCharArray,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  contentEquals1cdp6c846cfdi as contentEquals,
  contentHashCode25jw6rgkgywwr as contentHashCode,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  _UByte___init__impl__g9hnc430zp6cgd9f0jq as _UByte___init__impl__g9hnc4,
  _UByte___get_data__impl__jof9qryxuf3cmdpzyk as _UByte___get_data__impl__jof9qr,
  compareTo3ankvs086tmwq as compareTo,
  StringBuildermazzzhj6kkai as StringBuilder,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  Comparable198qfk8pnblz0 as Comparable,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  decodeToString1x4faah2liw2p as decodeToString,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    this.b21_1 = ByteString.f21(new Int8Array(0), null);
    this.c21_1 = toCharArray('0123456789abcdef');
  }
  g21(byteArray) {
    return ByteString.f21(byteArray, null);
  }
}
class ByteString {
  constructor(data, dummy) {
    return new.target.f21(data, dummy);
  }
  static f21(data, dummy) {
    Companion_getInstance();
    var $this = createThis(this);
    $this.d21_1 = data;
    $this.e21_1 = 0;
    return $this;
  }
  static h21(data, startIndex, endIndex) {
    Companion_getInstance();
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    return this.f21(copyOfRange(data, startIndex, endIndex), null);
  }
  l2() {
    return this.d21_1.length;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.d21_1.length === this.d21_1.length))
      return false;
    if (!(other.e21_1 === 0) && !(this.e21_1 === 0) && !(other.e21_1 === this.e21_1))
      return false;
    return contentEquals(this.d21_1, other.d21_1);
  }
  hashCode() {
    var hc = this.e21_1;
    if (hc === 0) {
      hc = contentHashCode(this.d21_1);
      this.e21_1 = hc;
    }
    return hc;
  }
  n2(index) {
    if (index < 0 || index >= this.l2())
      throw IndexOutOfBoundsException.a3('index (' + index + ') is out of byte string bounds: [0..' + this.l2() + ')');
    return this.d21_1[index];
  }
  m20(startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().b21_1;
    } else {
      tmp = ByteString.h21(this.d21_1, startIndex, endIndex);
    }
    return tmp;
  }
  i21(startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.l2() : endIndex;
    return $super === VOID ? this.m20(startIndex, endIndex) : $super.m20.call(this, startIndex, endIndex);
  }
  j21(other) {
    if (other === this)
      return 0;
    var localData = this.d21_1;
    var otherData = other.d21_1;
    var inductionVariable = 0;
    var tmp0 = this.l2();
    // Inline function 'kotlin.math.min' call
    var b = other.l2();
    var last = Math.min(tmp0, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.toUByte' call
        var this_0 = localData[i];
        var tmp0_0 = _UByte___init__impl__g9hnc4(this_0);
        // Inline function 'kotlin.toUByte' call
        var this_1 = otherData[i];
        // Inline function 'kotlin.UByte.compareTo' call
        var other_0 = _UByte___init__impl__g9hnc4(this_1);
        // Inline function 'kotlin.UByte.toInt' call
        var tmp = _UByte___get_data__impl__jof9qr(tmp0_0) & 255;
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$5 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$5);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.l2(), other.l2());
  }
  d(other) {
    return this.j21(other instanceof ByteString ? other : THROW_CCE());
  }
  toString() {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.l2().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.l2(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder.nc(len);
    $this$with.i1('ByteString(size=');
    $this$with.i1(sizeStr);
    $this$with.i1(' hex=');
    var localData = this.d21_1;
    var inductionVariable = 0;
    var last = this.l2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.k1(Companion_getInstance().c21_1[(b >>> 4 | 0) & 15]);
        $this$with.k1(Companion_getInstance().c21_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.k1(_Char___init__impl__6a9atx(41)).toString();
  }
  k21() {
    return this.d21_1;
  }
}
class UnsafeByteStringOperations {
  l21(array) {
    return Companion_getInstance().g21(array);
  }
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function ByteString_0(bytes) {
  var tmp;
  // Inline function 'kotlin.collections.isEmpty' call
  if (bytes.length === 0) {
    tmp = Companion_getInstance().b21_1;
  } else {
    tmp = Companion_getInstance().g21(bytes);
  }
  return tmp;
}
function decodeToString_0(_this__u8e3s4) {
  return decodeToString(_this__u8e3s4.k21());
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.l2() === 0;
}
var UnsafeByteStringOperations_instance;
function UnsafeByteStringOperations_getInstance() {
  return UnsafeByteStringOperations_instance;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
//endregion
//region block: init
UnsafeByteStringOperations_instance = new UnsafeByteStringOperations();
//endregion
//region block: exports
export {
  UnsafeByteStringOperations_instance as UnsafeByteStringOperations_instance32go50d8u0bll,
  ByteString_0 as ByteString3c9fk8lsh3lvs,
  ByteString as ByteString10sanmoo66key,
  decodeToString_0 as decodeToString2ede220pr5xir,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.mjs.map
