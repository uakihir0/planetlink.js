import {
  toCharArray32huqyw9tt7kx as toCharArray,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  contentEquals1cdp6c846cfdi as contentEquals,
  contentHashCode25jw6rgkgywwr as contentHashCode,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  _UByte___init__impl__g9hnc49zztd2brjj2m as _UByte___init__impl__g9hnc4,
  _UByte___get_data__impl__jof9qr100nrznmlnqj as _UByte___get_data__impl__jof9qr,
  compareTo3ankvs086tmwq as compareTo,
  StringBuildermazzzhj6kkai as StringBuilder,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
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
    this.n23_1 = ByteString.r23(new Int8Array(0), null);
    this.o23_1 = toCharArray('0123456789abcdef');
  }
  s23(byteArray) {
    return ByteString.r23(byteArray, null);
  }
}
class ByteString {
  constructor(data, dummy) {
    return new.target.r23(data, dummy);
  }
  static r23(data, dummy) {
    Companion_getInstance();
    var $this = createThis(this);
    $this.p23_1 = data;
    $this.q23_1 = 0;
    return $this;
  }
  static t23(data, startIndex, endIndex) {
    Companion_getInstance();
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    return this.r23(copyOfRange(data, startIndex, endIndex), null);
  }
  l2() {
    return this.p23_1.length;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.p23_1.length === this.p23_1.length))
      return false;
    if (!(other.q23_1 === 0) && !(this.q23_1 === 0) && !(other.q23_1 === this.q23_1))
      return false;
    return contentEquals(this.p23_1, other.p23_1);
  }
  hashCode() {
    var hc = this.q23_1;
    if (hc === 0) {
      hc = contentHashCode(this.p23_1);
      this.q23_1 = hc;
    }
    return hc;
  }
  m2(index) {
    if (index < 0 || index >= this.l2())
      throw IndexOutOfBoundsException.a3('index (' + index + ') is out of byte string bounds: [0..' + this.l2() + ')');
    return this.p23_1[index];
  }
  y22(startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().n23_1;
    } else {
      tmp = ByteString.t23(this.p23_1, startIndex, endIndex);
    }
    return tmp;
  }
  u23(startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.l2() : endIndex;
    return $super === VOID ? this.y22(startIndex, endIndex) : $super.y22.call(this, startIndex, endIndex);
  }
  v23(other) {
    if (other === this)
      return 0;
    var localData = this.p23_1;
    var otherData = other.p23_1;
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
    return this.v23(other instanceof ByteString ? other : THROW_CCE());
  }
  toString() {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.l2().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.l2(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder.oc(len);
    $this$with.i1('ByteString(size=');
    $this$with.i1(sizeStr);
    $this$with.i1(' hex=');
    var localData = this.p23_1;
    var inductionVariable = 0;
    var last = this.l2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.k1(Companion_getInstance().o23_1[(b >>> 4 | 0) & 15]);
        $this$with.k1(Companion_getInstance().o23_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.k1(_Char___init__impl__6a9atx(41)).toString();
  }
  w23() {
    return this.p23_1;
  }
}
class UnsafeByteStringOperations {
  x23(array) {
    return Companion_getInstance().s23(array);
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
    tmp = Companion_getInstance().n23_1;
  } else {
    tmp = Companion_getInstance().s23(bytes);
  }
  return tmp;
}
function decodeToString_0(_this__u8e3s4) {
  return decodeToString(_this__u8e3s4.w23());
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
  UnsafeByteStringOperations_instance as UnsafeByteStringOperations_instance2qzwn5iz9dqfo,
  ByteString_0 as ByteString3c9fk8lsh3lvs,
  ByteString as ByteString10sanmoo66key,
  decodeToString_0 as decodeToString2ede220pr5xir,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.mjs.map
