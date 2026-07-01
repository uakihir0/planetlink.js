import {
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  toByte4i43936u611k as toByte,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  arrayCopytctsywo3h7gj as arrayCopy,
  last1x5hqf11b8kkw as last,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  getProgressionLastElement2w30kdy2w5nkt as getProgressionLastElement,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  primitiveArrayConcatwxgknw08pmlb as primitiveArrayConcat,
  copyOfwy6h3t5vzqpl as copyOf,
  _ULongArray___init__impl__twm1l33hs41a6eujp5f as _ULongArray___init__impl__twm1l3,
  UIntArray__get_impl_gp5kza1vhqxkvvk9rrv as UIntArray__get_impl_gp5kza,
  _UInt___get_data__impl__f0vqqw18g8a2o14g87q as _UInt___get_data__impl__f0vqqw,
  fromInt2ii0rejb1w62w as fromInt,
  _ULong___init__impl__c78o9k3fkiaf1q5xsf7 as _ULong___init__impl__c78o9k,
  ULongArray__set_impl_z19mvh7mby1284z6pf as ULongArray__set_impl_z19mvh,
  ULongArray__get_impl_pr71q92wbpzmu6hb05i as ULongArray__get_impl_pr71q9,
  _ULong___get_data__impl__fggpzb35t7vg7og3i8u as _ULong___get_data__impl__fggpzb,
  add2suhfggl4zvkk as add,
  multiply2k9eolhnz1bjv as multiply,
  shiftRightUnsigned1ga7wnvbv2qur as shiftRightUnsigned,
  convertToInty04h231mmjoh as convertToInt,
  _UInt___init__impl__l7qpdl2rn8hu5x5mgv2 as _UInt___init__impl__l7qpdl,
  _UIntArray___init__impl__ghjpc62t4adv3l2o8r9 as _UIntArray___init__impl__ghjpc6,
  ulongCompare29yg6v52hxi4l as ulongCompare,
  shiftLeft3tsh2sstjchzn as shiftLeft,
  _UIntArray___get_storage__impl__92a0v03tsugia02e3ye as _UIntArray___get_storage__impl__92a0v0,
  UIntArray__set_impl_7f2zu23un3gauvkblmo as UIntArray__set_impl_7f2zu2,
  _UIntArray___init__impl__ghjpc61d4fxfei6kfsc as _UIntArray___init__impl__ghjpc6_0,
  UIntArrayrp6cv44n5v4y as UIntArray,
  convertToByte2t4hntblnhq2k as convertToByte,
  encodeToByteArray1onwao0uakjfh as encodeToByteArray,
  toString336ienavfnzn0 as toString_0,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  Char__minus_impl_a2frrh370khreoakmi6 as Char__minus_impl_a2frrh,
  padStart36w1507hs626a as padStart,
  charCodeAt1yspne1d8erbm as charCodeAt,
  _UIntArray___get_size__impl__r6l8ci13q5tym30x5f8 as _UIntArray___get_size__impl__r6l8ci,
  StringBuildermazzzhj6kkai as StringBuilder,
  UIntArray__iterator_impl_tkdv7kefexunqc6mec as UIntArray__iterator_impl_tkdv7k,
  subtract2orl8z9upxd9l as subtract,
  Paire9pteg33gng7 as Pair,
  uintCompare18k97xs29243i as uintCompare,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  contentEqualsyjv9e7m9ptvn as contentEquals,
  contentHashCode1lahvqtycx55v as contentHashCode,
  Comparable198qfk8pnblz0 as Comparable,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
var clz32 = Math.clz32;
//endregion
//region block: pre-declaration
class Aes {
  constructor() {
    Aes_instance = this;
    this.uhr_1 = 16;
    this.vhr_1 = 8;
    this.whr_1 = 14;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.xhr_1 = new Int32Array([99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22]);
    var tmp_0 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_0.yhr_1 = new Int32Array([82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125]);
    var tmp_1 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_1.zhr_1 = new Int32Array([0, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, -2147483648, 452984832, 905969664, 1811939328, -671088640, -1426063360, 1291845632]);
  }
  ahs(input, key) {
    // Inline function 'kotlin.require' call
    if (!(input.length === 16)) {
      var message = 'Input must be 16 bytes';
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(key.length === 32)) {
      var message_0 = 'Key must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    var roundKeys = keyExpansion(this, key);
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(4);
    while (tmp < 4) {
      var tmp_1 = tmp;
      var tmp_2 = 0;
      var tmp_3 = new Int32Array(4);
      while (tmp_2 < 4) {
        var tmp_4 = tmp_2;
        tmp_3[tmp_4] = input[imul(tmp_4, 4) + tmp_1 | 0] & 255;
        tmp_2 = tmp_2 + 1 | 0;
      }
      tmp_0[tmp_1] = tmp_3;
      tmp = tmp + 1 | 0;
    }
    var state = tmp_0;
    addRoundKey(this, state, roundKeys, 0);
    var inductionVariable = 1;
    if (inductionVariable < 14)
      do {
        var round = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        subBytes(this, state);
        shiftRows(this, state);
        mixColumns(this, state);
        addRoundKey(this, state, roundKeys, round);
      }
       while (inductionVariable < 14);
    subBytes(this, state);
    shiftRows(this, state);
    addRoundKey(this, state, roundKeys, 14);
    var output = new Int8Array(16);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < 4)
      do {
        var c = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < 4)
          do {
            var r = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            output[imul(c, 4) + r | 0] = toByte(state[r][c]);
          }
           while (inductionVariable_1 < 4);
      }
       while (inductionVariable_0 < 4);
    return output;
  }
  bhs(input, key) {
    // Inline function 'kotlin.require' call
    if (!(input.length === 16)) {
      var message = 'Input must be 16 bytes';
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(key.length === 32)) {
      var message_0 = 'Key must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    var roundKeys = keyExpansion(this, key);
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(4);
    while (tmp < 4) {
      var tmp_1 = tmp;
      var tmp_2 = 0;
      var tmp_3 = new Int32Array(4);
      while (tmp_2 < 4) {
        var tmp_4 = tmp_2;
        tmp_3[tmp_4] = input[imul(tmp_4, 4) + tmp_1 | 0] & 255;
        tmp_2 = tmp_2 + 1 | 0;
      }
      tmp_0[tmp_1] = tmp_3;
      tmp = tmp + 1 | 0;
    }
    var state = tmp_0;
    addRoundKey(this, state, roundKeys, 14);
    var inductionVariable = 13;
    if (1 <= inductionVariable)
      do {
        var round = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        invShiftRows(this, state);
        invSubBytes(this, state);
        addRoundKey(this, state, roundKeys, round);
        invMixColumns(this, state);
      }
       while (1 <= inductionVariable);
    invShiftRows(this, state);
    invSubBytes(this, state);
    addRoundKey(this, state, roundKeys, 0);
    var output = new Int8Array(16);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < 4)
      do {
        var c = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < 4)
          do {
            var r = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            output[imul(c, 4) + r | 0] = toByte(state[r][c]);
          }
           while (inductionVariable_1 < 4);
      }
       while (inductionVariable_0 < 4);
    return output;
  }
}
class AesCbc {
  constructor() {
    this.chs_1 = 16;
  }
  dhs(plaintext, key, iv) {
    // Inline function 'kotlin.require' call
    if (!(key.length === 32)) {
      var message = 'Key must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(iv.length === 16)) {
      var message_0 = 'IV must be 16 bytes';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    var padded = pkcs7Pad(this, plaintext);
    var output = new Int8Array(padded.length);
    var prevBlock = iv;
    var nestedLast = padded.length - 1 | 0;
    var inductionVariable = 0;
    var last = getProgressionLastElement(0, nestedLast, 16);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 16 | 0;
        var block = new Int8Array(16);
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 16)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            block[j] = toByte(padded[i + j | 0] ^ prevBlock[j]);
          }
           while (inductionVariable_0 < 16);
        var encrypted = Aes_getInstance().ahs(block, key);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = i;
        var endIndex = encrypted.length;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = encrypted;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, output, destinationOffset, 0, endIndex);
        prevBlock = encrypted;
      }
       while (!(i === last));
    return output;
  }
  ehs(ciphertext, key, iv) {
    // Inline function 'kotlin.require' call
    if (!(key.length === 32)) {
      var message = 'Key must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(iv.length === 16)) {
      var message_0 = 'IV must be 16 bytes';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!((ciphertext.length % 16 | 0) === 0)) {
      var message_1 = 'Ciphertext must be multiple of 16 bytes';
      throw IllegalArgumentException.a2(toString(message_1));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'kotlin.require' call
    if (!!(ciphertext.length === 0)) {
      var message_2 = 'Ciphertext must not be empty';
      throw IllegalArgumentException.a2(toString(message_2));
    }
    var output = new Int8Array(ciphertext.length);
    var prevBlock = iv;
    var nestedLast = ciphertext.length - 1 | 0;
    var inductionVariable = 0;
    var last = getProgressionLastElement(0, nestedLast, 16);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 16 | 0;
        var block = copyOfRange(ciphertext, i, i + 16 | 0);
        var decrypted = Aes_getInstance().bhs(block, key);
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 16)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            output[i + j | 0] = toByte(decrypted[j] ^ prevBlock[j]);
          }
           while (inductionVariable_0 < 16);
        prevBlock = block;
      }
       while (!(i === last));
    return pkcs7Unpad(this, output);
  }
}
class ChaCha20 {
  fhs(data, key, nonce, counter) {
    // Inline function 'kotlin.require' call
    if (!(key.length === 32)) {
      var message = 'Key must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(nonce.length === 12)) {
      var message_0 = 'Nonce must be 12 bytes';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    var output = new Int8Array(data.length);
    var numBlocks = (data.length + 63 | 0) / 64 | 0;
    var inductionVariable = 0;
    if (inductionVariable < numBlocks)
      do {
        var blockIdx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keystream = block(this, key, counter + blockIdx | 0, nonce);
        var offset = imul(blockIdx, 64);
        // Inline function 'kotlin.comparisons.minOf' call
        var b = data.length - offset | 0;
        var len = Math.min(64, b);
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < len)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            output[offset + i | 0] = toByte(data[offset + i | 0] ^ keystream[i]);
          }
           while (inductionVariable_0 < len);
      }
       while (inductionVariable < numBlocks);
    return output;
  }
}
class ECMath {
  constructor() {
    ECMath_instance = this;
    this.ohs_1 = Secp256k1Field_getInstance();
    this.phs_1 = Secp256k1Curve_getInstance().bht_1;
    this.qhs_1 = Companion_getInstance_0().jht('0000000000000000000000000000000000000000000000000000000000000007');
    this.rhs_1 = new Affine(Secp256k1Curve_getInstance().eht_1, Secp256k1Curve_getInstance().fht_1);
  }
  kht(k, pt) {
    var tmp;
    if (k.zhs()) {
      tmp = true;
    } else {
      tmp = pt instanceof Infinity_0;
    }
    if (tmp)
      return Infinity_getInstance();
    var jp = Companion_getInstance().lht(pt);
    var result = Companion_getInstance().vhs_1;
    var bits = k.mht();
    var inductionVariable = bits - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        result = jacobianDouble(this, result);
        if (k.nht(i)) {
          result = jacobianAdd(this, result, jp);
        }
      }
       while (0 <= inductionVariable);
    return jacobianToAffine(this, result);
  }
  oht(pt) {
    return pt.qht_1.rht();
  }
  sht(x) {
    if (x.tht(this.phs_1) >= 0)
      return null;
    var x3 = this.ohs_1.uhs(this.ohs_1.uhs(x, x), x);
    var c = this.ohs_1.xhs(x3, this.qhs_1);
    var y = this.ohs_1.uht(c, Secp256k1Curve_getInstance().ght_1);
    if (!this.ohs_1.uhs(y, y).equals(c))
      return null;
    var tmp;
    if (y.rht()) {
      tmp = new Affine(x, y);
    } else {
      tmp = new Affine(x, this.ohs_1.vht(y));
    }
    return tmp;
  }
}
class ECPoint {}
class Affine extends ECPoint {
  constructor(x, y) {
    super();
    this.pht_1 = x;
    this.qht_1 = y;
  }
  toString() {
    return 'Affine(x=' + this.pht_1.toString() + ', y=' + this.qht_1.toString() + ')';
  }
  hashCode() {
    var result = this.pht_1.hashCode();
    result = imul(result, 31) + this.qht_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Affine))
      return false;
    if (!this.pht_1.equals(other.pht_1))
      return false;
    if (!this.qht_1.equals(other.qht_1))
      return false;
    return true;
  }
}
class Infinity_0 extends ECPoint {
  constructor() {
    Infinity_instance = null;
    super();
    Infinity_instance = this;
  }
  toString() {
    return 'Infinity';
  }
  hashCode() {
    return 759377281;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Infinity_0))
      return false;
    return true;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    this.vhs_1 = new JacobianPoint(Companion_getInstance_0().lhs_1, Companion_getInstance_0().lhs_1, Companion_getInstance_0().khs_1);
  }
  lht(pt) {
    var tmp;
    if (pt instanceof Affine) {
      tmp = new JacobianPoint(pt.pht_1, pt.qht_1, Companion_getInstance_0().lhs_1);
    } else {
      if (pt instanceof Infinity_0) {
        tmp = this.vhs_1;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
}
class JacobianPoint {
  constructor(x, y, z) {
    Companion_getInstance();
    this.ghs_1 = x;
    this.hhs_1 = y;
    this.ihs_1 = z;
  }
  jhs() {
    return this.ihs_1.zhs();
  }
}
class Hkdf {
  constructor() {
    this.wht_1 = 32;
  }
  xht(salt, ikm) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (salt.length === 0) {
      tmp = new Int8Array(32);
    } else {
      tmp = salt;
    }
    var actualSalt = tmp;
    return HmacSha256_instance.zht(actualSalt, ikm);
  }
  ahu(prk, info, length) {
    // Inline function 'kotlin.require' call
    if (!(length <= 8160)) {
      var message = 'Output length exceeds maximum (255 * 32)';
      throw IllegalArgumentException.a2(toString(message));
    }
    var n = ((length + 32 | 0) - 1 | 0) / 32 | 0;
    var okm = new Int8Array(length);
    var t = new Int8Array(0);
    var offset = 0;
    var inductionVariable = 1;
    if (inductionVariable <= n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = HmacSha256_instance;
        // Inline function 'kotlin.collections.plus' call
        var this_0 = t;
        var tmp0 = primitiveArrayConcat([this_0, info]);
        // Inline function 'kotlin.byteArrayOf' call
        // Inline function 'kotlin.collections.plus' call
        var elements = new Int8Array([toByte(i)]);
        var tmp$ret$4 = primitiveArrayConcat([tmp0, elements]);
        t = tmp.zht(prk, tmp$ret$4);
        // Inline function 'kotlin.comparisons.minOf' call
        var b = length - offset | 0;
        var copyLen = Math.min(32, b);
        var tmp0_0 = t;
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = offset;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp0_0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, okm, destinationOffset, 0, copyLen);
        offset = offset + copyLen | 0;
      }
       while (!(i === n));
    return okm;
  }
}
class HmacSha256 {
  constructor() {
    this.yht_1 = 64;
  }
  zht(key, data) {
    var tmp;
    if (key.length > 64) {
      tmp = copyOf(Sha256_getInstance().y8p(key), 64);
    } else if (key.length < 64) {
      tmp = copyOf(key, 64);
    } else {
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = key.slice();
    }
    var paddedKey = tmp;
    var tmp_0 = 0;
    var tmp_1 = new Int8Array(64);
    while (tmp_0 < 64) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = toByte(paddedKey[tmp_2] ^ 54);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var iPad = tmp_1;
    var tmp_3 = 0;
    var tmp_4 = new Int8Array(64);
    while (tmp_3 < 64) {
      var tmp_5 = tmp_3;
      tmp_4[tmp_5] = toByte(paddedKey[tmp_5] ^ 92);
      tmp_3 = tmp_3 + 1 | 0;
    }
    var oPad = tmp_4;
    var tmp_6 = Sha256_getInstance();
    // Inline function 'kotlin.collections.plus' call
    var tmp$ret$4 = primitiveArrayConcat([iPad, data]);
    var inner = tmp_6.y8p(tmp$ret$4);
    var tmp_7 = Sha256_getInstance();
    // Inline function 'kotlin.collections.plus' call
    var tmp$ret$5 = primitiveArrayConcat([oPad, inner]);
    return tmp_7.y8p(tmp$ret$5);
  }
}
class ModularArithmetic {
  constructor(modulus) {
    this.chu_1 = modulus;
  }
  dhu(a) {
    var tmp;
    if (a.tht(this.chu_1) >= 0) {
      tmp = a.ehu(this.chu_1).second;
    } else {
      tmp = a;
    }
    return tmp;
  }
  fhu(high, low) {
    if (high.zhs())
      return this.dhu(low);
    var remainder = Companion_getInstance_0().khs_1;
    var inductionVariable = 511;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var shifted = remainder.ghu(1);
        var carry = remainder.nht(255);
        var bit = i >= 256 ? high.nht(i - 256 | 0) : low.nht(i);
        var withBit = bit ? shifted.hhu(Companion_getInstance_0().lhs_1) : shifted;
        if (carry) {
          var sub = withBit.jhu(this.chu_1).sl();
          remainder = sub;
        } else {
          remainder = withBit.tht(this.chu_1) >= 0 ? withBit.ihu(this.chu_1) : withBit;
        }
      }
       while (0 <= inductionVariable);
    return remainder;
  }
  xhs(a, b) {
    var sum = a.khu(b);
    var overflow = sum.tht(a) < 0;
    if (!overflow) {
      return sum.tht(this.chu_1) >= 0 ? sum.ihu(this.chu_1) : sum;
    }
    var r1 = sum.jhu(this.chu_1).sl();
    if (sum.tht(this.chu_1) >= 0) {
      var r2 = r1.jhu(this.chu_1).sl();
      return r2;
    }
    return r1;
  }
  uhs(a, b) {
    var _destruct__k2r9zo = a.lhu(b);
    var high = _destruct__k2r9zo.sl();
    var low = _destruct__k2r9zo.tl();
    return this.fhu(high, low);
  }
  vht(a) {
    return a.zhs() ? Companion_getInstance_0().khs_1 : this.chu_1.ihu(a);
  }
}
class Secp256k1 {
  constructor() {
    Secp256k1_instance = this;
    this.mhu_1 = Secp256k1Curve_getInstance().iht_1;
    this.nhu_1 = Secp256k1Curve_getInstance().cht_1;
    this.ohu_1 = Secp256k1Curve_getInstance().bht_1;
  }
  phu(privateKey) {
    // Inline function 'kotlin.require' call
    if (!(privateKey.length === 32)) {
      var message = 'Private key must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message));
    }
    var d = Companion_getInstance_0().qhu(privateKey);
    // Inline function 'kotlin.require' call
    if (!(!d.zhs() && d.tht(this.nhu_1) < 0)) {
      var message_0 = 'Private key out of range';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    var point = ECMath_getInstance().kht(d, ECMath_getInstance().rhs_1);
    // Inline function 'kotlin.require' call
    if (!(point instanceof Affine)) {
      var message_1 = 'Invalid key: produces point at infinity';
      throw IllegalArgumentException.a2(toString(message_1));
    }
    var prefix = point.qht_1.rht() ? 2 : 3;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp0 = new Int8Array([prefix]);
    // Inline function 'kotlin.collections.plus' call
    var elements = point.pht_1.q8f();
    return primitiveArrayConcat([tmp0, elements]);
  }
  rhu(message, privateKey, auxRand) {
    // Inline function 'kotlin.require' call
    if (!(message.length === 32)) {
      var message_0 = 'Message must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(privateKey.length === 32)) {
      var message_1 = 'Private key must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message_1));
    }
    var dPrime = Companion_getInstance_0().qhu(privateKey);
    // Inline function 'kotlin.require' call
    if (!(!dPrime.zhs() && dPrime.tht(this.nhu_1) < 0)) {
      var message_2 = 'Private key out of range';
      throw IllegalArgumentException.a2(toString(message_2));
    }
    var pPoint = ECMath_getInstance().kht(dPrime, ECMath_getInstance().rhs_1);
    // Inline function 'kotlin.require' call
    if (!(pPoint instanceof Affine)) {
      var message_3 = 'Invalid key';
      throw IllegalArgumentException.a2(toString(message_3));
    }
    var d = ECMath_getInstance().oht(pPoint) ? dPrime : this.mhu_1.vht(dPrime);
    var aux = auxRand == null ? new Int8Array(32) : auxRand;
    // Inline function 'kotlin.require' call
    if (!(aux.length === 32)) {
      var message_4 = 'auxRand must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message_4));
    }
    var dBytes = d.q8f();
    var auxHash = TaggedHash_getInstance().vhu('BIP0340/aux', aux);
    var tmp = 0;
    var tmp_0 = new Int8Array(32);
    while (tmp < 32) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = toByte(dBytes[tmp_1] ^ auxHash[tmp_1]);
      tmp = tmp + 1 | 0;
    }
    var t = tmp_0;
    var tmp_2 = TaggedHash_getInstance();
    // Inline function 'kotlin.collections.plus' call
    var elements = pPoint.pht_1.q8f();
    // Inline function 'kotlin.collections.plus' call
    var this_0 = primitiveArrayConcat([t, elements]);
    var tmp$ret$12 = primitiveArrayConcat([this_0, message]);
    var rand = tmp_2.vhu('BIP0340/nonce', tmp$ret$12);
    var kPrime = this.mhu_1.dhu(Companion_getInstance_0().qhu(rand));
    // Inline function 'kotlin.require' call
    if (!!kPrime.zhs()) {
      var message_5 = 'Nonce is zero';
      throw IllegalArgumentException.a2(toString(message_5));
    }
    var rPoint = ECMath_getInstance().kht(kPrime, ECMath_getInstance().rhs_1);
    // Inline function 'kotlin.require' call
    if (!(rPoint instanceof Affine)) {
      var message_6 = 'Invalid nonce';
      throw IllegalArgumentException.a2(toString(message_6));
    }
    var k = ECMath_getInstance().oht(rPoint) ? kPrime : this.mhu_1.vht(kPrime);
    var tmp_3 = TaggedHash_getInstance();
    var tmp0 = rPoint.pht_1.q8f();
    // Inline function 'kotlin.collections.plus' call
    var elements_0 = pPoint.pht_1.q8f();
    // Inline function 'kotlin.collections.plus' call
    var this_1 = primitiveArrayConcat([tmp0, elements_0]);
    var tmp$ret$18 = primitiveArrayConcat([this_1, message]);
    var eHash = tmp_3.vhu('BIP0340/challenge', tmp$ret$18);
    var e = this.mhu_1.dhu(Companion_getInstance_0().qhu(eHash));
    var s = this.mhu_1.xhs(k, this.mhu_1.uhs(e, d));
    var tmp0_0 = rPoint.pht_1.q8f();
    // Inline function 'kotlin.collections.plus' call
    var elements_1 = s.q8f();
    return primitiveArrayConcat([tmp0_0, elements_1]);
  }
  whu(privateKey, publicKey) {
    // Inline function 'kotlin.require' call
    if (!(privateKey.length === 32)) {
      var message = 'Private key must be 32 bytes';
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(publicKey.length === 32)) {
      var message_0 = 'Public key must be 32 bytes (x-only)';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    var d = Companion_getInstance_0().qhu(privateKey);
    // Inline function 'kotlin.require' call
    if (!(!d.zhs() && d.tht(this.nhu_1) < 0)) {
      var message_1 = 'Private key out of range';
      throw IllegalArgumentException.a2(toString(message_1));
    }
    var tmp0_elvis_lhs = ECMath_getInstance().sht(Companion_getInstance_0().qhu(publicKey));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException.a2('Invalid public key: not on curve');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var pubPoint = tmp;
    var result = ECMath_getInstance().kht(d, pubPoint);
    // Inline function 'kotlin.require' call
    if (!(result instanceof Affine)) {
      var message_2 = 'ECDH resulted in point at infinity';
      throw IllegalArgumentException.a2(toString(message_2));
    }
    return result.pht_1.q8f();
  }
}
class Secp256k1Curve {
  constructor() {
    Secp256k1Curve_instance = this;
    this.bht_1 = Companion_getInstance_0().jht('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
    this.cht_1 = Companion_getInstance_0().jht('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
    this.dht_1 = Companion_getInstance_0().jht('0000000000000000000000000000000000000000000000000000000000000007');
    this.eht_1 = Companion_getInstance_0().jht('79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798');
    this.fht_1 = Companion_getInstance_0().jht('483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8');
    this.ght_1 = Companion_getInstance_0().jht('3fffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffff0c');
    this.hht_1 = new ModularArithmetic(this.bht_1);
    this.iht_1 = new ModularArithmetic(this.cht_1);
  }
}
class Secp256k1Field {
  constructor() {
    Secp256k1Field_instance = this;
    this.shs_1 = Secp256k1Curve_getInstance().bht_1;
  }
  dhu(a) {
    var tmp;
    if (a.tht(this.shs_1) >= 0) {
      var r = a;
      while (r.tht(this.shs_1) >= 0) {
        r = r.ihu(this.shs_1);
      }
      tmp = r;
    } else {
      tmp = a;
    }
    return tmp;
  }
  fhu(high, low) {
    if (high.zhs())
      return this.dhu(low);
    var h = high.yhs_1;
    var l = low.yhs_1;
    var acc = _ULongArray___init__impl__twm1l3(9);
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = i + 1 | 0;
        // Inline function 'kotlin.UInt.toULong' call
        var this_0 = UIntArray__get_impl_gp5kza(l, i);
        // Inline function 'kotlin.uintToULong' call
        // Inline function 'kotlin.uintToLong' call
        var value = _UInt___get_data__impl__f0vqqw(this_0);
        var tmp$ret$2 = fromInt(value) & 4294967295n;
        var tmp$ret$0 = _ULong___init__impl__c78o9k(tmp$ret$2);
        ULongArray__set_impl_z19mvh(acc, tmp, tmp$ret$0);
      }
       while (inductionVariable < 8);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < 8)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp0 = ULongArray__get_impl_pr71q9(acc, i_0);
        // Inline function 'kotlin.UInt.toULong' call
        var this_1 = UIntArray__get_impl_gp5kza(h, i_0);
        // Inline function 'kotlin.uintToULong' call
        // Inline function 'kotlin.uintToLong' call
        var value_0 = _UInt___get_data__impl__f0vqqw(this_1);
        var tmp$ret$5 = fromInt(value_0) & 4294967295n;
        // Inline function 'kotlin.ULong.plus' call
        var other = _ULong___init__impl__c78o9k(tmp$ret$5);
        var tmp$ret$6 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
        ULongArray__set_impl_z19mvh(acc, i_0, tmp$ret$6);
      }
       while (inductionVariable_0 < 8);
    var carry = _ULong___init__impl__c78o9k(0n);
    var inductionVariable_1 = 7;
    if (0 <= inductionVariable_1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + -1 | 0;
        // Inline function 'kotlin.UInt.toULong' call
        var this_2 = UIntArray__get_impl_gp5kza(h, i_1);
        // Inline function 'kotlin.uintToULong' call
        // Inline function 'kotlin.uintToLong' call
        var value_1 = _UInt___get_data__impl__f0vqqw(this_2);
        var tmp$ret$9 = fromInt(value_1) & 4294967295n;
        var tmp0_0 = _ULong___init__impl__c78o9k(tmp$ret$9);
        // Inline function 'kotlin.ULong.times' call
        var other_0 = _ULong___init__impl__c78o9k(977n);
        var tmp0_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)));
        // Inline function 'kotlin.ULong.plus' call
        var other_1 = carry;
        var prod = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)));
        var tmp_0 = i_1 + 1 | 0;
        var tmp0_2 = ULongArray__get_impl_pr71q9(acc, i_1 + 1 | 0);
        // Inline function 'kotlin.ULong.and' call
        var other_2 = _ULong___init__impl__c78o9k(4294967295n);
        // Inline function 'kotlin.ULong.plus' call
        var other_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(prod) & _ULong___get_data__impl__fggpzb(other_2));
        var tmp$ret$13 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_2), _ULong___get_data__impl__fggpzb(other_3)));
        ULongArray__set_impl_z19mvh(acc, tmp_0, tmp$ret$13);
        // Inline function 'kotlin.ULong.shr' call
        carry = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(prod), 32));
      }
       while (0 <= inductionVariable_1);
    var tmp0_3 = ULongArray__get_impl_pr71q9(acc, 0);
    // Inline function 'kotlin.ULong.plus' call
    var other_4 = carry;
    var tmp$ret$15 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_3), _ULong___get_data__impl__fggpzb(other_4)));
    ULongArray__set_impl_z19mvh(acc, 0, tmp$ret$15);
    var inductionVariable_2 = 8;
    if (1 <= inductionVariable_2)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + -1 | 0;
        var tmp_1 = i_2 - 1 | 0;
        var tmp0_4 = ULongArray__get_impl_pr71q9(acc, i_2 - 1 | 0);
        // Inline function 'kotlin.ULong.shr' call
        var this_3 = ULongArray__get_impl_pr71q9(acc, i_2);
        // Inline function 'kotlin.ULong.plus' call
        var other_5 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_3), 32));
        var tmp$ret$17 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_4), _ULong___get_data__impl__fggpzb(other_5)));
        ULongArray__set_impl_z19mvh(acc, tmp_1, tmp$ret$17);
        var tmp0_5 = ULongArray__get_impl_pr71q9(acc, i_2);
        // Inline function 'kotlin.ULong.and' call
        var other_6 = _ULong___init__impl__c78o9k(4294967295n);
        var tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_5) & _ULong___get_data__impl__fggpzb(other_6));
        ULongArray__set_impl_z19mvh(acc, i_2, tmp$ret$18);
      }
       while (1 <= inductionVariable_2);
    var overflow = ULongArray__get_impl_pr71q9(acc, 0);
    // Inline function 'kotlin.UIntArray' call
    var tmp_2 = 0;
    var tmp_3 = new Int32Array(8);
    while (tmp_2 < 8) {
      var tmp_4 = tmp_2;
      // Inline function 'kotlin.ULong.toUInt' call
      var this_4 = ULongArray__get_impl_pr71q9(acc, tmp_4 + 1 | 0);
      // Inline function 'kotlin.toUInt' call
      var this_5 = _ULong___get_data__impl__fggpzb(this_4);
      // Inline function 'kotlin.UInt.toInt' call
      var this_6 = _UInt___init__impl__l7qpdl(convertToInt(this_5));
      tmp_3[tmp_4] = _UInt___get_data__impl__f0vqqw(this_6);
      tmp_2 = tmp_2 + 1 | 0;
    }
    var words = _UIntArray___init__impl__ghjpc6(tmp_3);
    var result = new UInt256(words);
    $l$loop: while (true) {
      var tmp0_6 = overflow;
      // Inline function 'kotlin.ULong.compareTo' call
      var other_7 = _ULong___init__impl__c78o9k(0n);
      if (!(ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_6), _ULong___get_data__impl__fggpzb(other_7)) > 0)) {
        break $l$loop;
      }
      var tmp0_7 = overflow;
      // Inline function 'kotlin.ULong.times' call
      var other_8 = _ULong___init__impl__c78o9k(977n);
      var ov977 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_7), _ULong___get_data__impl__fggpzb(other_8)));
      // Inline function 'kotlin.ULong.shl' call
      var this_7 = overflow;
      var ovShift = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_7), 32));
      // Inline function 'kotlin.collections.copyOf' call
      var this_8 = result.yhs_1;
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$29 = _UIntArray___get_storage__impl__92a0v0(this_8).slice();
      var rw = _UIntArray___init__impl__ghjpc6(tmp$ret$29);
      // Inline function 'kotlin.UInt.toULong' call
      var this_9 = UIntArray__get_impl_gp5kza(rw, 7);
      // Inline function 'kotlin.uintToULong' call
      // Inline function 'kotlin.uintToLong' call
      var value_2 = _UInt___get_data__impl__f0vqqw(this_9);
      var tmp$ret$33 = fromInt(value_2) & 4294967295n;
      var tmp0_8 = _ULong___init__impl__c78o9k(tmp$ret$33);
      // Inline function 'kotlin.ULong.and' call
      var other_9 = _ULong___init__impl__c78o9k(4294967295n);
      // Inline function 'kotlin.ULong.plus' call
      var other_10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(ov977) & _ULong___get_data__impl__fggpzb(other_9));
      var c = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_8), _ULong___get_data__impl__fggpzb(other_10)));
      // Inline function 'kotlin.ULong.toUInt' call
      var this_10 = c;
      // Inline function 'kotlin.toUInt' call
      var this_11 = _ULong___get_data__impl__fggpzb(this_10);
      var tmp$ret$36 = _UInt___init__impl__l7qpdl(convertToInt(this_11));
      UIntArray__set_impl_7f2zu2(rw, 7, tmp$ret$36);
      // Inline function 'kotlin.ULong.shr' call
      var this_12 = c;
      var tmp0_9 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_12), 32));
      // Inline function 'kotlin.UInt.toULong' call
      var this_13 = UIntArray__get_impl_gp5kza(rw, 6);
      // Inline function 'kotlin.uintToULong' call
      // Inline function 'kotlin.uintToLong' call
      var value_3 = _UInt___get_data__impl__f0vqqw(this_13);
      var tmp$ret$41 = fromInt(value_3) & 4294967295n;
      // Inline function 'kotlin.ULong.plus' call
      var other_11 = _ULong___init__impl__c78o9k(tmp$ret$41);
      var tmp0_10 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_9), _ULong___get_data__impl__fggpzb(other_11)));
      // Inline function 'kotlin.ULong.shr' call
      // Inline function 'kotlin.ULong.plus' call
      var other_12 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(ov977), 32));
      var tmp0_11 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_10), _ULong___get_data__impl__fggpzb(other_12)));
      var tmp0_12 = overflow;
      // Inline function 'kotlin.ULong.and' call
      var other_13 = _ULong___init__impl__c78o9k(4294967295n);
      // Inline function 'kotlin.ULong.plus' call
      var other_14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_12) & _ULong___get_data__impl__fggpzb(other_13));
      c = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_11), _ULong___get_data__impl__fggpzb(other_14)));
      // Inline function 'kotlin.ULong.toUInt' call
      var this_14 = c;
      // Inline function 'kotlin.toUInt' call
      var this_15 = _ULong___get_data__impl__fggpzb(this_14);
      var tmp$ret$47 = _UInt___init__impl__l7qpdl(convertToInt(this_15));
      UIntArray__set_impl_7f2zu2(rw, 6, tmp$ret$47);
      // Inline function 'kotlin.ULong.shr' call
      var this_16 = c;
      var tmp0_13 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_16), 32));
      // Inline function 'kotlin.UInt.toULong' call
      var this_17 = UIntArray__get_impl_gp5kza(rw, 5);
      // Inline function 'kotlin.uintToULong' call
      // Inline function 'kotlin.uintToLong' call
      var value_4 = _UInt___get_data__impl__f0vqqw(this_17);
      var tmp$ret$52 = fromInt(value_4) & 4294967295n;
      // Inline function 'kotlin.ULong.plus' call
      var other_15 = _ULong___init__impl__c78o9k(tmp$ret$52);
      var tmp0_14 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_13), _ULong___get_data__impl__fggpzb(other_15)));
      // Inline function 'kotlin.ULong.shr' call
      var this_18 = overflow;
      // Inline function 'kotlin.ULong.plus' call
      var other_16 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_18), 32));
      c = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_14), _ULong___get_data__impl__fggpzb(other_16)));
      // Inline function 'kotlin.ULong.toUInt' call
      var this_19 = c;
      // Inline function 'kotlin.toUInt' call
      var this_20 = _ULong___get_data__impl__fggpzb(this_19);
      var tmp$ret$56 = _UInt___init__impl__l7qpdl(convertToInt(this_20));
      UIntArray__set_impl_7f2zu2(rw, 5, tmp$ret$56);
      // Inline function 'kotlin.ULong.shr' call
      var this_21 = c;
      c = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_21), 32));
      var j = 4;
      $l$loop_0: while (true) {
        var tmp_5;
        var tmp0_15 = c;
        // Inline function 'kotlin.ULong.compareTo' call
        var other_17 = _ULong___init__impl__c78o9k(0n);
        if (ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_15), _ULong___get_data__impl__fggpzb(other_17)) > 0) {
          tmp_5 = j >= 0;
        } else {
          tmp_5 = false;
        }
        if (!tmp_5) {
          break $l$loop_0;
        }
        var tmp0_16 = c;
        // Inline function 'kotlin.UInt.toULong' call
        var this_22 = UIntArray__get_impl_gp5kza(rw, j);
        // Inline function 'kotlin.uintToULong' call
        // Inline function 'kotlin.uintToLong' call
        var value_5 = _UInt___get_data__impl__f0vqqw(this_22);
        var tmp$ret$62 = fromInt(value_5) & 4294967295n;
        // Inline function 'kotlin.ULong.plus' call
        var other_18 = _ULong___init__impl__c78o9k(tmp$ret$62);
        c = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_16), _ULong___get_data__impl__fggpzb(other_18)));
        var tmp_6 = j;
        // Inline function 'kotlin.ULong.toUInt' call
        var this_23 = c;
        // Inline function 'kotlin.toUInt' call
        var this_24 = _ULong___get_data__impl__fggpzb(this_23);
        var tmp$ret$64 = _UInt___init__impl__l7qpdl(convertToInt(this_24));
        UIntArray__set_impl_7f2zu2(rw, tmp_6, tmp$ret$64);
        // Inline function 'kotlin.ULong.shr' call
        var this_25 = c;
        c = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_25), 32));
        j = j - 1 | 0;
      }
      overflow = c;
      result = new UInt256(rw);
    }
    return finalReduce(this, result);
  }
  xhs(a, b) {
    var sum = a.khu(b);
    var overflow = sum.tht(a) < 0;
    if (!overflow) {
      return sum.tht(this.shs_1) >= 0 ? sum.ihu(this.shs_1) : sum;
    }
    // Inline function 'kotlin.also' call
    var this_0 = new UIntArray(_UIntArray___init__impl__ghjpc6_0(8));
    var it = this_0.uw_1;
    UIntArray__set_impl_7f2zu2(it, 6, _UInt___init__impl__l7qpdl(1));
    UIntArray__set_impl_7f2zu2(it, 7, _UInt___init__impl__l7qpdl(977));
    var tmp$ret$0 = this_0.uw_1;
    var correction = new UInt256(tmp$ret$0);
    var corrected = sum.khu(correction);
    var tmp;
    if (corrected.tht(sum) < 0) {
      tmp = finalReduce(this, corrected.khu(correction));
    } else {
      tmp = finalReduce(this, corrected);
    }
    return tmp;
  }
  whs(a, b) {
    var _destruct__k2r9zo = a.jhu(b);
    var result = _destruct__k2r9zo.sl();
    var borrowed = _destruct__k2r9zo.tl();
    var tmp;
    if (borrowed) {
      tmp = result.khu(this.shs_1);
    } else {
      tmp = result;
    }
    return tmp;
  }
  uhs(a, b) {
    var _destruct__k2r9zo = a.lhu(b);
    var high = _destruct__k2r9zo.sl();
    var low = _destruct__k2r9zo.tl();
    return this.fhu(high, low);
  }
  vht(a) {
    return a.zhs() ? Companion_getInstance_0().khs_1 : this.shs_1.ihu(a);
  }
  ths(a) {
    // Inline function 'kotlin.require' call
    if (!!a.zhs()) {
      var message = 'Cannot invert zero';
      throw IllegalArgumentException.a2(toString(message));
    }
    var exp = this.shs_1.ihu(Companion_getInstance_0().mhs_1);
    return this.uht(a, exp);
  }
  uht(base, exp) {
    if (exp.zhs())
      return Companion_getInstance_0().lhs_1;
    var result = Companion_getInstance_0().lhs_1;
    var b = this.dhu(base);
    var bits = exp.mht();
    var inductionVariable = 0;
    if (inductionVariable < bits)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (exp.nht(i)) {
          result = this.uhs(result, b);
        }
        if (i < (bits - 1 | 0)) {
          b = this.uhs(b, b);
        }
      }
       while (inductionVariable < bits);
    return result;
  }
}
class Sha256 {
  constructor() {
    Sha256_instance = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.bhu_1 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
  }
  y8p(data) {
    var padded = pad(this, data);
    var h0 = 1779033703;
    var h1 = -1150833019;
    var h2 = 1013904242;
    var h3 = -1521486534;
    var h4 = 1359893119;
    var h5 = -1694144372;
    var h6 = 528734635;
    var h7 = 1541459225;
    var w = new Int32Array(64);
    var nestedLast = padded.length - 1 | 0;
    var inductionVariable = 0;
    var last = getProgressionLastElement(0, nestedLast, 64);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 64 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 16)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            w[j] = (padded[i + imul(j, 4) | 0] & 255) << 24 | (padded[(i + imul(j, 4) | 0) + 1 | 0] & 255) << 16 | (padded[(i + imul(j, 4) | 0) + 2 | 0] & 255) << 8 | padded[(i + imul(j, 4) | 0) + 3 | 0] & 255;
          }
           while (inductionVariable_0 < 16);
        var inductionVariable_1 = 16;
        if (inductionVariable_1 < 64)
          do {
            var j_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var s0 = rotateRight(this, w[j_0 - 15 | 0], 7) ^ rotateRight(this, w[j_0 - 15 | 0], 18) ^ (w[j_0 - 15 | 0] >>> 3 | 0);
            var s1 = rotateRight(this, w[j_0 - 2 | 0], 17) ^ rotateRight(this, w[j_0 - 2 | 0], 19) ^ (w[j_0 - 2 | 0] >>> 10 | 0);
            w[j_0] = ((w[j_0 - 16 | 0] + s0 | 0) + w[j_0 - 7 | 0] | 0) + s1 | 0;
          }
           while (inductionVariable_1 < 64);
        var a = h0;
        var b = h1;
        var c = h2;
        var d = h3;
        var e = h4;
        var f = h5;
        var g = h6;
        var h = h7;
        var inductionVariable_2 = 0;
        if (inductionVariable_2 < 64)
          do {
            var j_1 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var s1_0 = rotateRight(this, e, 6) ^ rotateRight(this, e, 11) ^ rotateRight(this, e, 25);
            var ch = e & f ^ ~e & g;
            var temp1 = (((h + s1_0 | 0) + ch | 0) + this.bhu_1[j_1] | 0) + w[j_1] | 0;
            var s0_0 = rotateRight(this, a, 2) ^ rotateRight(this, a, 13) ^ rotateRight(this, a, 22);
            var maj = a & b ^ a & c ^ b & c;
            var temp2 = s0_0 + maj | 0;
            h = g;
            g = f;
            f = e;
            e = d + temp1 | 0;
            d = c;
            c = b;
            b = a;
            a = temp1 + temp2 | 0;
          }
           while (inductionVariable_2 < 64);
        h0 = h0 + a | 0;
        h1 = h1 + b | 0;
        h2 = h2 + c | 0;
        h3 = h3 + d | 0;
        h4 = h4 + e | 0;
        h5 = h5 + f | 0;
        h6 = h6 + g | 0;
        h7 = h7 + h | 0;
      }
       while (!(i === last));
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$0 = new Int32Array([h0, h1, h2, h3, h4, h5, h6, h7]);
    return toByteArray(this, tmp$ret$0);
  }
}
class TaggedHash {
  constructor() {
    TaggedHash_instance = this;
    this.shu_1 = Sha256_getInstance().y8p(encodeToByteArray('BIP0340/aux'));
    this.thu_1 = Sha256_getInstance().y8p(encodeToByteArray('BIP0340/nonce'));
    this.uhu_1 = Sha256_getInstance().y8p(encodeToByteArray('BIP0340/challenge'));
  }
  vhu(tag, msg) {
    var tagHash;
    switch (tag) {
      case 'BIP0340/aux':
        tagHash = this.shu_1;
        break;
      case 'BIP0340/nonce':
        tagHash = this.thu_1;
        break;
      case 'BIP0340/challenge':
        tagHash = this.uhu_1;
        break;
      default:
        tagHash = Sha256_getInstance().y8p(encodeToByteArray(tag));
        break;
    }
    var tmp = Sha256_getInstance();
    var tmp0 = tagHash;
    // Inline function 'kotlin.collections.plus' call
    var elements = tagHash;
    // Inline function 'kotlin.collections.plus' call
    var this_0 = primitiveArrayConcat([tmp0, elements]);
    var tmp$ret$1 = primitiveArrayConcat([this_0, msg]);
    return tmp.y8p(tmp$ret$1);
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    this.khs_1 = new UInt256(_UIntArray___init__impl__ghjpc6_0(8));
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new UIntArray(_UIntArray___init__impl__ghjpc6_0(8));
    var it = this_0.uw_1;
    UIntArray__set_impl_7f2zu2(it, 7, _UInt___init__impl__l7qpdl(1));
    var tmp$ret$0 = this_0.uw_1;
    tmp.lhs_1 = new UInt256(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = new UIntArray(_UIntArray___init__impl__ghjpc6_0(8));
    var it_0 = this_1.uw_1;
    UIntArray__set_impl_7f2zu2(it_0, 7, _UInt___init__impl__l7qpdl(2));
    var tmp$ret$2 = this_1.uw_1;
    tmp_0.mhs_1 = new UInt256(tmp$ret$2);
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_2 = new UIntArray(_UIntArray___init__impl__ghjpc6_0(8));
    var it_1 = this_2.uw_1;
    UIntArray__set_impl_7f2zu2(it_1, 7, _UInt___init__impl__l7qpdl(3));
    var tmp$ret$4 = this_2.uw_1;
    tmp_1.nhs_1 = new UInt256(tmp$ret$4);
  }
  aht(v) {
    // Inline function 'kotlin.require' call
    if (!(v >= 0)) {
      var message = 'fromInt requires non-negative value';
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.also' call
    var this_0 = new UIntArray(_UIntArray___init__impl__ghjpc6_0(8));
    var it = this_0.uw_1;
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$4 = _UInt___init__impl__l7qpdl(v);
    UIntArray__set_impl_7f2zu2(it, 7, tmp$ret$4);
    var tmp$ret$2 = this_0.uw_1;
    return new UInt256(tmp$ret$2);
  }
  qhu(bytes) {
    // Inline function 'kotlin.require' call
    if (!(bytes.length === 32)) {
      var message = 'Expected 32 bytes, got ' + bytes.length;
      throw IllegalArgumentException.a2(toString(message));
    }
    var w = _UIntArray___init__impl__ghjpc6_0(8);
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var offset = imul(i, 4);
        // Inline function 'kotlin.toUInt' call
        var this_0 = bytes[offset] & 255;
        // Inline function 'kotlin.UInt.shl' call
        var this_1 = _UInt___init__impl__l7qpdl(this_0);
        var tmp0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) << 24);
        // Inline function 'kotlin.toUInt' call
        var this_2 = bytes[offset + 1 | 0] & 255;
        // Inline function 'kotlin.UInt.shl' call
        var this_3 = _UInt___init__impl__l7qpdl(this_2);
        // Inline function 'kotlin.UInt.or' call
        var other = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) << 16);
        var tmp0_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) | _UInt___get_data__impl__f0vqqw(other));
        // Inline function 'kotlin.toUInt' call
        var this_4 = bytes[offset + 2 | 0] & 255;
        // Inline function 'kotlin.UInt.shl' call
        var this_5 = _UInt___init__impl__l7qpdl(this_4);
        // Inline function 'kotlin.UInt.or' call
        var other_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_5) << 8);
        var tmp0_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_0) | _UInt___get_data__impl__f0vqqw(other_0));
        // Inline function 'kotlin.toUInt' call
        var this_6 = bytes[offset + 3 | 0] & 255;
        // Inline function 'kotlin.UInt.or' call
        var other_1 = _UInt___init__impl__l7qpdl(this_6);
        var tmp$ret$11 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_1) | _UInt___get_data__impl__f0vqqw(other_1));
        UIntArray__set_impl_7f2zu2(w, i, tmp$ret$11);
      }
       while (inductionVariable < 8);
    return new UInt256(w);
  }
  jht(hex) {
    var padded = padStart(hex, 64, _Char___init__impl__6a9atx(48));
    // Inline function 'kotlin.require' call
    if (!(padded.length === 64)) {
      var message = 'Hex string too long for UInt256';
      throw IllegalArgumentException.a2(toString(message));
    }
    var bytes = new Int8Array(32);
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        bytes[i] = toByte(hexDigit(this, charCodeAt(padded, imul(i, 2))) << 4 | hexDigit(this, charCodeAt(padded, imul(i, 2) + 1 | 0)));
      }
       while (inductionVariable < 32);
    return this.qhu(bytes);
  }
}
class UInt256 {
  constructor(words) {
    Companion_getInstance_0();
    this.yhs_1 = words;
    // Inline function 'kotlin.require' call
    if (!(_UIntArray___get_size__impl__r6l8ci(this.yhs_1) === 8)) {
      var message = 'UInt256 requires exactly 8 words';
      throw IllegalArgumentException.a2(toString(message));
    }
  }
  q8f() {
    var result = new Int8Array(32);
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(i, 4);
        // Inline function 'kotlin.UInt.shr' call
        var this_0 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
        // Inline function 'kotlin.UInt.toByte' call
        var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> 24 | 0);
        result[tmp] = toByte(_UInt___get_data__impl__f0vqqw(this_1));
        var tmp_0 = imul(i, 4) + 1 | 0;
        // Inline function 'kotlin.UInt.shr' call
        var this_2 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
        // Inline function 'kotlin.UInt.toByte' call
        var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) >>> 16 | 0);
        result[tmp_0] = toByte(_UInt___get_data__impl__f0vqqw(this_3));
        var tmp_1 = imul(i, 4) + 2 | 0;
        // Inline function 'kotlin.UInt.shr' call
        var this_4 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
        // Inline function 'kotlin.UInt.toByte' call
        var this_5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> 8 | 0);
        result[tmp_1] = toByte(_UInt___get_data__impl__f0vqqw(this_5));
        var tmp_2 = imul(i, 4) + 3 | 0;
        // Inline function 'kotlin.UInt.toByte' call
        var this_6 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
        result[tmp_2] = toByte(_UInt___get_data__impl__f0vqqw(this_6));
      }
       while (inductionVariable < 8);
    return result;
  }
  xhu() {
    var hexChars = '0123456789abcdef';
    var bytes = this.q8f();
    var sb = StringBuilder.kc(64);
    var inductionVariable = 0;
    var last = bytes.length;
    while (inductionVariable < last) {
      var b = bytes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var v = b & 255;
      sb.k1(charCodeAt(hexChars, v >>> 4 | 0));
      sb.k1(charCodeAt(hexChars, v & 15));
    }
    return sb.toString();
  }
  zhs() {
    var tmp0 = this.yhs_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.all' call
      var _iterator__ex2g4s = UIntArray__iterator_impl_tkdv7k(tmp0);
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1().pw_1;
        if (!(element === _UInt___init__impl__l7qpdl(0))) {
          tmp$ret$0 = false;
          break $l$block;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  rht() {
    var tmp0 = UIntArray__get_impl_gp5kza(this.yhs_1, 7);
    // Inline function 'kotlin.UInt.and' call
    var other = _UInt___init__impl__l7qpdl(1);
    return _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) & _UInt___get_data__impl__f0vqqw(other)) === _UInt___init__impl__l7qpdl(0);
  }
  nht(n) {
    if (n < 0 || n >= 256)
      return false;
    var wordIndex = 7 - (n / 32 | 0) | 0;
    var bitIndex = n % 32 | 0;
    // Inline function 'kotlin.UInt.shr' call
    var this_0 = UIntArray__get_impl_gp5kza(this.yhs_1, wordIndex);
    var tmp0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> bitIndex | 0);
    // Inline function 'kotlin.UInt.and' call
    var other = _UInt___init__impl__l7qpdl(1);
    return _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) & _UInt___get_data__impl__f0vqqw(other)) === _UInt___init__impl__l7qpdl(1);
  }
  mht() {
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(UIntArray__get_impl_gp5kza(this.yhs_1, i) === _UInt___init__impl__l7qpdl(0))) {
          // Inline function 'kotlin.countLeadingZeroBits' call
          // Inline function 'kotlin.UInt.toInt' call
          var this_0 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
          // Inline function 'kotlin.countLeadingZeroBits' call
          var this_1 = _UInt___get_data__impl__f0vqqw(this_0);
          var topBits = 32 - clz32(this_1) | 0;
          return imul(7 - i | 0, 32) + topBits | 0;
        }
      }
       while (inductionVariable < 8);
    return 0;
  }
  khu(other) {
    var result = _UIntArray___init__impl__ghjpc6_0(8);
    var carry = _ULong___init__impl__c78o9k(0n);
    var inductionVariable = 7;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        // Inline function 'kotlin.UInt.toULong' call
        var this_0 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
        // Inline function 'kotlin.uintToULong' call
        // Inline function 'kotlin.uintToLong' call
        var value = _UInt___get_data__impl__f0vqqw(this_0);
        var tmp$ret$2 = fromInt(value) & 4294967295n;
        var tmp0 = _ULong___init__impl__c78o9k(tmp$ret$2);
        // Inline function 'kotlin.UInt.toULong' call
        var this_1 = UIntArray__get_impl_gp5kza(other.yhs_1, i);
        // Inline function 'kotlin.uintToULong' call
        // Inline function 'kotlin.uintToLong' call
        var value_0 = _UInt___get_data__impl__f0vqqw(this_1);
        var tmp$ret$5 = fromInt(value_0) & 4294967295n;
        // Inline function 'kotlin.ULong.plus' call
        var other_0 = _ULong___init__impl__c78o9k(tmp$ret$5);
        var tmp0_0 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other_0)));
        // Inline function 'kotlin.ULong.plus' call
        var other_1 = carry;
        var sum = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)));
        // Inline function 'kotlin.ULong.toUInt' call
        // Inline function 'kotlin.toUInt' call
        var this_2 = _ULong___get_data__impl__fggpzb(sum);
        var tmp$ret$8 = _UInt___init__impl__l7qpdl(convertToInt(this_2));
        UIntArray__set_impl_7f2zu2(result, i, tmp$ret$8);
        // Inline function 'kotlin.ULong.shr' call
        carry = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(sum), 32));
      }
       while (0 <= inductionVariable);
    return new UInt256(result);
  }
  ihu(other) {
    var result = this.jhu(other).sl();
    return result;
  }
  jhu(other) {
    var result = _UIntArray___init__impl__ghjpc6_0(8);
    var borrow = _ULong___init__impl__c78o9k(0n);
    var inductionVariable = 7;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        // Inline function 'kotlin.UInt.toULong' call
        var this_0 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
        // Inline function 'kotlin.uintToULong' call
        // Inline function 'kotlin.uintToLong' call
        var value = _UInt___get_data__impl__f0vqqw(this_0);
        var tmp$ret$2 = fromInt(value) & 4294967295n;
        var a = _ULong___init__impl__c78o9k(tmp$ret$2);
        // Inline function 'kotlin.UInt.toULong' call
        var this_1 = UIntArray__get_impl_gp5kza(other.yhs_1, i);
        // Inline function 'kotlin.uintToULong' call
        // Inline function 'kotlin.uintToLong' call
        var value_0 = _UInt___get_data__impl__f0vqqw(this_1);
        var tmp$ret$5 = fromInt(value_0) & 4294967295n;
        var tmp0 = _ULong___init__impl__c78o9k(tmp$ret$5);
        // Inline function 'kotlin.ULong.plus' call
        var other_0 = borrow;
        var b = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other_0)));
        // Inline function 'kotlin.ULong.compareTo' call
        if (ulongCompare(_ULong___get_data__impl__fggpzb(a), _ULong___get_data__impl__fggpzb(b)) >= 0) {
          // Inline function 'kotlin.ULong.minus' call
          // Inline function 'kotlin.ULong.toUInt' call
          var this_2 = _ULong___init__impl__c78o9k(subtract(_ULong___get_data__impl__fggpzb(a), _ULong___get_data__impl__fggpzb(b)));
          // Inline function 'kotlin.toUInt' call
          var this_3 = _ULong___get_data__impl__fggpzb(this_2);
          var tmp$ret$9 = _UInt___init__impl__l7qpdl(convertToInt(this_3));
          UIntArray__set_impl_7f2zu2(result, i, tmp$ret$9);
          borrow = _ULong___init__impl__c78o9k(0n);
        } else {
          // Inline function 'kotlin.ULong.plus' call
          var other_1 = _ULong___init__impl__c78o9k(4294967296n);
          // Inline function 'kotlin.ULong.minus' call
          var this_4 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(a), _ULong___get_data__impl__fggpzb(other_1)));
          // Inline function 'kotlin.ULong.toUInt' call
          var this_5 = _ULong___init__impl__c78o9k(subtract(_ULong___get_data__impl__fggpzb(this_4), _ULong___get_data__impl__fggpzb(b)));
          // Inline function 'kotlin.toUInt' call
          var this_6 = _ULong___get_data__impl__fggpzb(this_5);
          var tmp$ret$13 = _UInt___init__impl__l7qpdl(convertToInt(this_6));
          UIntArray__set_impl_7f2zu2(result, i, tmp$ret$13);
          borrow = _ULong___init__impl__c78o9k(1n);
        }
      }
       while (0 <= inductionVariable);
    return new Pair(new UInt256(result), !(borrow === _ULong___init__impl__c78o9k(0n)));
  }
  lhu(other) {
    var result = _ULongArray___init__impl__twm1l3(16);
    var inductionVariable = 7;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var carry = _ULong___init__impl__c78o9k(0n);
        var inductionVariable_0 = 7;
        if (0 <= inductionVariable_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            // Inline function 'kotlin.UInt.toULong' call
            var this_0 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
            // Inline function 'kotlin.uintToULong' call
            // Inline function 'kotlin.uintToLong' call
            var value = _UInt___get_data__impl__f0vqqw(this_0);
            var tmp$ret$2 = fromInt(value) & 4294967295n;
            var tmp0 = _ULong___init__impl__c78o9k(tmp$ret$2);
            // Inline function 'kotlin.UInt.toULong' call
            var this_1 = UIntArray__get_impl_gp5kza(other.yhs_1, j);
            // Inline function 'kotlin.uintToULong' call
            // Inline function 'kotlin.uintToLong' call
            var value_0 = _UInt___get_data__impl__f0vqqw(this_1);
            var tmp$ret$5 = fromInt(value_0) & 4294967295n;
            // Inline function 'kotlin.ULong.times' call
            var other_0 = _ULong___init__impl__c78o9k(tmp$ret$5);
            var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other_0)));
            // Inline function 'kotlin.ULong.plus' call
            var other_1 = ULongArray__get_impl_pr71q9(result, (i + j | 0) + 1 | 0);
            var tmp0_1 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)));
            // Inline function 'kotlin.ULong.plus' call
            var other_2 = carry;
            var prod = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_2)));
            var tmp = (i + j | 0) + 1 | 0;
            // Inline function 'kotlin.ULong.and' call
            var other_3 = _ULong___init__impl__c78o9k(4294967295n);
            var tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(prod) & _ULong___get_data__impl__fggpzb(other_3));
            ULongArray__set_impl_z19mvh(result, tmp, tmp$ret$9);
            // Inline function 'kotlin.ULong.shr' call
            carry = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(prod), 32));
          }
           while (0 <= inductionVariable_0);
        var tmp0_2 = ULongArray__get_impl_pr71q9(result, i);
        // Inline function 'kotlin.ULong.plus' call
        var other_4 = carry;
        var tmp$ret$11 = _ULong___init__impl__c78o9k(add(_ULong___get_data__impl__fggpzb(tmp0_2), _ULong___get_data__impl__fggpzb(other_4)));
        ULongArray__set_impl_z19mvh(result, i, tmp$ret$11);
      }
       while (0 <= inductionVariable);
    // Inline function 'kotlin.UIntArray' call
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(8);
    while (tmp_0 < 8) {
      var tmp_2 = tmp_0;
      // Inline function 'kotlin.ULong.toUInt' call
      var this_2 = ULongArray__get_impl_pr71q9(result, tmp_2);
      // Inline function 'kotlin.toUInt' call
      var this_3 = _ULong___get_data__impl__fggpzb(this_2);
      // Inline function 'kotlin.UInt.toInt' call
      var this_4 = _UInt___init__impl__l7qpdl(convertToInt(this_3));
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_4);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var high = _UIntArray___init__impl__ghjpc6(tmp_1);
    // Inline function 'kotlin.UIntArray' call
    var tmp_3 = 0;
    var tmp_4 = new Int32Array(8);
    while (tmp_3 < 8) {
      var tmp_5 = tmp_3;
      // Inline function 'kotlin.ULong.toUInt' call
      var this_5 = ULongArray__get_impl_pr71q9(result, tmp_5 + 8 | 0);
      // Inline function 'kotlin.toUInt' call
      var this_6 = _ULong___get_data__impl__fggpzb(this_5);
      // Inline function 'kotlin.UInt.toInt' call
      var this_7 = _UInt___init__impl__l7qpdl(convertToInt(this_6));
      tmp_4[tmp_5] = _UInt___get_data__impl__f0vqqw(this_7);
      tmp_3 = tmp_3 + 1 | 0;
    }
    var low = _UIntArray___init__impl__ghjpc6(tmp_4);
    return new Pair(new UInt256(high), new UInt256(low));
  }
  ehu(divisor) {
    // Inline function 'kotlin.require' call
    if (!!divisor.zhs()) {
      var message = 'Division by zero';
      throw IllegalArgumentException.a2(toString(message));
    }
    if (this.tht(divisor) < 0)
      return new Pair(Companion_getInstance_0().khs_1, this);
    if (this.equals(divisor))
      return new Pair(Companion_getInstance_0().lhs_1, Companion_getInstance_0().khs_1);
    var quotient = _UIntArray___init__impl__ghjpc6_0(8);
    var remainder = Companion_getInstance_0().khs_1;
    var bits = this.mht();
    var inductionVariable = bits - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        remainder = remainder.ghu(1);
        if (this.nht(i)) {
          remainder = remainder.hhu(Companion_getInstance_0().lhs_1);
        }
        if (remainder.tht(divisor) >= 0) {
          var sub = remainder.jhu(divisor).sl();
          remainder = sub;
          var wordIdx = 7 - (i / 32 | 0) | 0;
          var bitIdx = i % 32 | 0;
          var tmp0 = UIntArray__get_impl_gp5kza(quotient, wordIdx);
          // Inline function 'kotlin.UInt.shl' call
          var this_0 = _UInt___init__impl__l7qpdl(1);
          // Inline function 'kotlin.UInt.or' call
          var other = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) << bitIdx);
          var tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) | _UInt___get_data__impl__f0vqqw(other));
          UIntArray__set_impl_7f2zu2(quotient, wordIdx, tmp$ret$3);
        }
      }
       while (0 <= inductionVariable);
    return new Pair(new UInt256(quotient), remainder);
  }
  ghu(n) {
    if (n === 0)
      return this;
    if (n >= 256)
      return Companion_getInstance_0().khs_1;
    var wordShift = n / 32 | 0;
    var bitShift = n % 32 | 0;
    var result = _UIntArray___init__impl__ghjpc6_0(8);
    if (bitShift === 0) {
      var inductionVariable = 0;
      var last = 8 - wordShift | 0;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          UIntArray__set_impl_7f2zu2(result, i, UIntArray__get_impl_gp5kza(this.yhs_1, i + wordShift | 0));
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = 8 - wordShift | 0;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'kotlin.UInt.shl' call
          var this_0 = UIntArray__get_impl_gp5kza(this.yhs_1, i_0 + wordShift | 0);
          var tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) << bitShift);
          UIntArray__set_impl_7f2zu2(result, i_0, tmp$ret$0);
          if (((i_0 + wordShift | 0) + 1 | 0) < 8) {
            var tmp0 = UIntArray__get_impl_gp5kza(result, i_0);
            var tmp0_0 = UIntArray__get_impl_gp5kza(this.yhs_1, (i_0 + wordShift | 0) + 1 | 0);
            // Inline function 'kotlin.UInt.shr' call
            var bitCount = 32 - bitShift | 0;
            // Inline function 'kotlin.UInt.or' call
            var other = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_0) >>> bitCount | 0);
            var tmp$ret$2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) | _UInt___get_data__impl__f0vqqw(other));
            UIntArray__set_impl_7f2zu2(result, i_0, tmp$ret$2);
          }
        }
         while (inductionVariable_0 < last_0);
    }
    return new UInt256(result);
  }
  hhu(other) {
    var result = _UIntArray___init__impl__ghjpc6_0(8);
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
        // Inline function 'kotlin.UInt.or' call
        var other_0 = UIntArray__get_impl_gp5kza(other.yhs_1, i);
        var tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) | _UInt___get_data__impl__f0vqqw(other_0));
        UIntArray__set_impl_7f2zu2(result, i, tmp$ret$0);
      }
       while (inductionVariable < 8);
    return new UInt256(result);
  }
  tht(other) {
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(UIntArray__get_impl_gp5kza(this.yhs_1, i) === UIntArray__get_impl_gp5kza(other.yhs_1, i))) {
          var tmp0 = UIntArray__get_impl_gp5kza(this.yhs_1, i);
          // Inline function 'kotlin.UInt.compareTo' call
          var other_0 = UIntArray__get_impl_gp5kza(other.yhs_1, i);
          return uintCompare(_UInt___get_data__impl__f0vqqw(tmp0), _UInt___get_data__impl__f0vqqw(other_0));
        }
      }
       while (inductionVariable < 8);
    return 0;
  }
  d(other) {
    return this.tht(other instanceof UInt256 ? other : THROW_CCE());
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof UInt256))
      return false;
    return contentEquals(this.yhs_1, other.yhs_1);
  }
  hashCode() {
    return contentHashCode(this.yhs_1);
  }
  toString() {
    return 'UInt256(0x' + this.xhu() + ')';
  }
}
//endregion
function keyExpansion($this, key) {
  var w = new Int32Array(60);
  var inductionVariable = 0;
  if (inductionVariable < 8)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      w[i] = (key[imul(4, i)] & 255) << 24 | (key[imul(4, i) + 1 | 0] & 255) << 16 | (key[imul(4, i) + 2 | 0] & 255) << 8 | key[imul(4, i) + 3 | 0] & 255;
    }
     while (inductionVariable < 8);
  var inductionVariable_0 = 8;
  if (inductionVariable_0 < 60)
    do {
      var i_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var temp = w[i_0 - 1 | 0];
      if ((i_0 % 8 | 0) === 0) {
        temp = subWord($this, rotWord($this, temp)) ^ $this.zhr_1[i_0 / 8 | 0];
      } else if ((i_0 % 8 | 0) === 4) {
        temp = subWord($this, temp);
      }
      w[i_0] = w[i_0 - 8 | 0] ^ temp;
    }
     while (inductionVariable_0 < 60);
  var tmp = 0;
  // Inline function 'kotlin.arrayOfNulls' call
  var tmp_0 = Array(15);
  while (tmp < 15) {
    var tmp_1 = tmp;
    var tmp_2 = 0;
    var tmp_3 = new Int32Array(4);
    while (tmp_2 < 4) {
      var tmp_4 = tmp_2;
      tmp_3[tmp_4] = w[imul(tmp_1, 4) + tmp_4 | 0];
      tmp_2 = tmp_2 + 1 | 0;
    }
    tmp_0[tmp_1] = tmp_3;
    tmp = tmp + 1 | 0;
  }
  return tmp_0;
}
function subWord($this, word) {
  return $this.xhr_1[(word >>> 24 | 0) & 255] << 24 | $this.xhr_1[(word >>> 16 | 0) & 255] << 16 | $this.xhr_1[(word >>> 8 | 0) & 255] << 8 | $this.xhr_1[word & 255];
}
function rotWord($this, word) {
  return word << 8 | (word >>> 24 | 0);
}
function addRoundKey($this, state, roundKeys, round) {
  var rk = roundKeys[round];
  var inductionVariable = 0;
  if (inductionVariable < 4)
    do {
      var c = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      state[0][c] = state[0][c] ^ (rk[c] >>> 24 | 0) & 255;
      state[1][c] = state[1][c] ^ (rk[c] >>> 16 | 0) & 255;
      state[2][c] = state[2][c] ^ (rk[c] >>> 8 | 0) & 255;
      state[3][c] = state[3][c] ^ rk[c] & 255;
    }
     while (inductionVariable < 4);
}
function subBytes($this, state) {
  var inductionVariable = 0;
  if (inductionVariable < 4)
    do {
      var r = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < 4)
        do {
          var c = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          state[r][c] = $this.xhr_1[state[r][c]];
        }
         while (inductionVariable_0 < 4);
    }
     while (inductionVariable < 4);
}
function invSubBytes($this, state) {
  var inductionVariable = 0;
  if (inductionVariable < 4)
    do {
      var r = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < 4)
        do {
          var c = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          state[r][c] = $this.yhr_1[state[r][c]];
        }
         while (inductionVariable_0 < 4);
    }
     while (inductionVariable < 4);
}
function shiftRows($this, state) {
  var t1 = state[1][0];
  state[1][0] = state[1][1];
  state[1][1] = state[1][2];
  state[1][2] = state[1][3];
  state[1][3] = t1;
  var t = state[2][0];
  state[2][0] = state[2][2];
  state[2][2] = t;
  t = state[2][1];
  state[2][1] = state[2][3];
  state[2][3] = t;
  var t3 = state[3][3];
  state[3][3] = state[3][2];
  state[3][2] = state[3][1];
  state[3][1] = state[3][0];
  state[3][0] = t3;
}
function invShiftRows($this, state) {
  var t1 = state[1][3];
  state[1][3] = state[1][2];
  state[1][2] = state[1][1];
  state[1][1] = state[1][0];
  state[1][0] = t1;
  var t = state[2][0];
  state[2][0] = state[2][2];
  state[2][2] = t;
  t = state[2][1];
  state[2][1] = state[2][3];
  state[2][3] = t;
  var t3 = state[3][0];
  state[3][0] = state[3][1];
  state[3][1] = state[3][2];
  state[3][2] = state[3][3];
  state[3][3] = t3;
}
function mixColumns($this, state) {
  var inductionVariable = 0;
  if (inductionVariable < 4)
    do {
      var c = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var s0 = state[0][c];
      var s1 = state[1][c];
      var s2 = state[2][c];
      var s3 = state[3][c];
      state[0][c] = gmul($this, 2, s0) ^ gmul($this, 3, s1) ^ s2 ^ s3;
      state[1][c] = s0 ^ gmul($this, 2, s1) ^ gmul($this, 3, s2) ^ s3;
      state[2][c] = s0 ^ s1 ^ gmul($this, 2, s2) ^ gmul($this, 3, s3);
      state[3][c] = gmul($this, 3, s0) ^ s1 ^ s2 ^ gmul($this, 2, s3);
    }
     while (inductionVariable < 4);
}
function invMixColumns($this, state) {
  var inductionVariable = 0;
  if (inductionVariable < 4)
    do {
      var c = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var s0 = state[0][c];
      var s1 = state[1][c];
      var s2 = state[2][c];
      var s3 = state[3][c];
      state[0][c] = gmul($this, 14, s0) ^ gmul($this, 11, s1) ^ gmul($this, 13, s2) ^ gmul($this, 9, s3);
      state[1][c] = gmul($this, 9, s0) ^ gmul($this, 14, s1) ^ gmul($this, 11, s2) ^ gmul($this, 13, s3);
      state[2][c] = gmul($this, 13, s0) ^ gmul($this, 9, s1) ^ gmul($this, 14, s2) ^ gmul($this, 11, s3);
      state[3][c] = gmul($this, 11, s0) ^ gmul($this, 13, s1) ^ gmul($this, 9, s2) ^ gmul($this, 14, s3);
    }
     while (inductionVariable < 4);
}
function gmul($this, a, b) {
  var result = 0;
  var aa = a;
  var bb = b;
  var inductionVariable = 0;
  if (inductionVariable < 8)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!((bb & 1) === 0))
        result = result ^ aa;
      var hi = aa & 128;
      aa = aa << 1 & 255;
      if (!(hi === 0))
        aa = aa ^ 27;
      bb = bb >> 1;
    }
     while (inductionVariable < 8);
  return result;
}
var Aes_instance;
function Aes_getInstance() {
  if (Aes_instance === VOID)
    new Aes();
  return Aes_instance;
}
function pkcs7Pad($this, data) {
  var padLen = 16 - (data.length % 16 | 0) | 0;
  var padded = new Int8Array(data.length + padLen | 0);
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex = data.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = data;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, padded, 0, 0, endIndex);
  var inductionVariable = data.length;
  var last = padded.length;
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      padded[i] = toByte(padLen);
    }
     while (inductionVariable < last);
  return padded;
}
function pkcs7Unpad($this, data) {
  // Inline function 'kotlin.collections.isNotEmpty' call
  // Inline function 'kotlin.collections.isEmpty' call
  // Inline function 'kotlin.require' call
  if (!!(data.length === 0)) {
    var message = 'Data must not be empty';
    throw IllegalArgumentException.a2(toString(message));
  }
  var padLen = last(data) & 255;
  // Inline function 'kotlin.require' call
  if (!(1 <= padLen ? padLen <= 16 : false)) {
    var message_0 = 'Invalid PKCS7 padding: ' + padLen;
    throw IllegalArgumentException.a2(toString(message_0));
  }
  var inductionVariable = data.length - padLen | 0;
  var last_0 = data.length;
  if (inductionVariable < last_0)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.require' call
      if (!((data[i] & 255) === padLen)) {
        var message_1 = 'Invalid PKCS7 padding';
        throw IllegalArgumentException.a2(toString(message_1));
      }
    }
     while (inductionVariable < last_0);
  return copyOfRange(data, 0, data.length - padLen | 0);
}
var AesCbc_instance;
function AesCbc_getInstance() {
  return AesCbc_instance;
}
function block($this, key, counter, nonce) {
  var state = initState($this, key, counter, nonce);
  // Inline function 'kotlin.collections.copyOf' call
  // Inline function 'kotlin.js.asDynamic' call
  var working = state.slice();
  // Inline function 'kotlin.repeat' call
  var inductionVariable = 0;
  if (inductionVariable < 10)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      quarterRound(ChaCha20_instance, working, 0, 4, 8, 12);
      quarterRound(ChaCha20_instance, working, 1, 5, 9, 13);
      quarterRound(ChaCha20_instance, working, 2, 6, 10, 14);
      quarterRound(ChaCha20_instance, working, 3, 7, 11, 15);
      quarterRound(ChaCha20_instance, working, 0, 5, 10, 15);
      quarterRound(ChaCha20_instance, working, 1, 6, 11, 12);
      quarterRound(ChaCha20_instance, working, 2, 7, 8, 13);
      quarterRound(ChaCha20_instance, working, 3, 4, 9, 14);
    }
     while (inductionVariable < 10);
  var inductionVariable_0 = 0;
  if (inductionVariable_0 < 16)
    do {
      var i = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      working[i] = working[i] + state[i] | 0;
    }
     while (inductionVariable_0 < 16);
  var result = new Int8Array(64);
  var inductionVariable_1 = 0;
  if (inductionVariable_1 < 16)
    do {
      var i_0 = inductionVariable_1;
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      result[imul(i_0, 4)] = toByte(working[i_0]);
      result[imul(i_0, 4) + 1 | 0] = toByte(working[i_0] >> 8);
      result[imul(i_0, 4) + 2 | 0] = toByte(working[i_0] >> 16);
      result[imul(i_0, 4) + 3 | 0] = toByte(working[i_0] >> 24);
    }
     while (inductionVariable_1 < 16);
  return result;
}
function initState($this, key, counter, nonce) {
  var state = new Int32Array(16);
  state[0] = 1634760805;
  state[1] = 857760878;
  state[2] = 2036477234;
  state[3] = 1797285236;
  var inductionVariable = 0;
  if (inductionVariable < 8)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      state[4 + i | 0] = littleEndianToInt($this, key, imul(i, 4));
    }
     while (inductionVariable < 8);
  state[12] = counter;
  var inductionVariable_0 = 0;
  if (inductionVariable_0 < 3)
    do {
      var i_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      state[13 + i_0 | 0] = littleEndianToInt($this, nonce, imul(i_0, 4));
    }
     while (inductionVariable_0 < 3);
  return state;
}
function quarterRound($this, state, a, b, c, d) {
  state[a] = state[a] + state[b] | 0;
  state[d] = rotateLeft($this, state[d] ^ state[a], 16);
  state[c] = state[c] + state[d] | 0;
  state[b] = rotateLeft($this, state[b] ^ state[c], 12);
  state[a] = state[a] + state[b] | 0;
  state[d] = rotateLeft($this, state[d] ^ state[a], 8);
  state[c] = state[c] + state[d] | 0;
  state[b] = rotateLeft($this, state[b] ^ state[c], 7);
}
function rotateLeft($this, $receiver, n) {
  return $receiver << n | ($receiver >>> (32 - n | 0) | 0);
}
function littleEndianToInt($this, bytes, offset) {
  return bytes[offset] & 255 | (bytes[offset + 1 | 0] & 255) << 8 | (bytes[offset + 2 | 0] & 255) << 16 | (bytes[offset + 3 | 0] & 255) << 24;
}
var ChaCha20_instance;
function ChaCha20_getInstance() {
  return ChaCha20_instance;
}
function jacobianToAffine($this, jp) {
  if (jp.jhs())
    return Infinity_getInstance();
  if (jp.ihs_1.equals(Companion_getInstance_0().lhs_1))
    return new Affine(jp.ghs_1, jp.hhs_1);
  var zInv = $this.ohs_1.ths(jp.ihs_1);
  var zInv2 = $this.ohs_1.uhs(zInv, zInv);
  var zInv3 = $this.ohs_1.uhs(zInv2, zInv);
  var ax = $this.ohs_1.uhs(jp.ghs_1, zInv2);
  var ay = $this.ohs_1.uhs(jp.hhs_1, zInv3);
  return new Affine(ax, ay);
}
function jacobianAdd($this, p1, p2) {
  if (p1.jhs())
    return p2;
  if (p2.jhs())
    return p1;
  var z1sq = $this.ohs_1.uhs(p1.ihs_1, p1.ihs_1);
  var z2sq = $this.ohs_1.uhs(p2.ihs_1, p2.ihs_1);
  var u1 = $this.ohs_1.uhs(p1.ghs_1, z2sq);
  var u2 = $this.ohs_1.uhs(p2.ghs_1, z1sq);
  var s1 = $this.ohs_1.uhs(p1.hhs_1, $this.ohs_1.uhs(z2sq, p2.ihs_1));
  var s2 = $this.ohs_1.uhs(p2.hhs_1, $this.ohs_1.uhs(z1sq, p1.ihs_1));
  if (u1.equals(u2)) {
    if (s1.equals(s2)) {
      return jacobianDouble($this, p1);
    }
    return Companion_getInstance().vhs_1;
  }
  var h = $this.ohs_1.whs(u2, u1);
  var r = $this.ohs_1.whs(s2, s1);
  var h2 = $this.ohs_1.uhs(h, h);
  var h3 = $this.ohs_1.uhs(h2, h);
  var u1h2 = $this.ohs_1.uhs(u1, h2);
  var x3 = $this.ohs_1.whs($this.ohs_1.whs($this.ohs_1.uhs(r, r), h3), $this.ohs_1.xhs(u1h2, u1h2));
  var y3 = $this.ohs_1.whs($this.ohs_1.uhs(r, $this.ohs_1.whs(u1h2, x3)), $this.ohs_1.uhs(s1, h3));
  var z3 = $this.ohs_1.uhs($this.ohs_1.uhs(h, p1.ihs_1), p2.ihs_1);
  return new JacobianPoint(x3, y3, z3);
}
function jacobianDouble($this, jp) {
  if (jp.jhs())
    return Companion_getInstance().vhs_1;
  if (jp.hhs_1.zhs())
    return Companion_getInstance().vhs_1;
  var ysq = $this.ohs_1.uhs(jp.hhs_1, jp.hhs_1);
  var fourB = $this.ohs_1.uhs($this.ohs_1.uhs(Companion_getInstance_0().aht(4), jp.ghs_1), ysq);
  var eightC = $this.ohs_1.uhs(Companion_getInstance_0().aht(8), $this.ohs_1.uhs(ysq, ysq));
  var xsq = $this.ohs_1.uhs(jp.ghs_1, jp.ghs_1);
  var d = $this.ohs_1.xhs($this.ohs_1.xhs(xsq, xsq), xsq);
  var x3 = $this.ohs_1.whs($this.ohs_1.uhs(d, d), $this.ohs_1.xhs(fourB, fourB));
  var y3 = $this.ohs_1.whs($this.ohs_1.uhs(d, $this.ohs_1.whs(fourB, x3)), eightC);
  var z3 = $this.ohs_1.uhs($this.ohs_1.xhs(jp.hhs_1, jp.hhs_1), jp.ihs_1);
  return new JacobianPoint(x3, y3, z3);
}
var ECMath_instance;
function ECMath_getInstance() {
  if (ECMath_instance === VOID)
    new ECMath();
  return ECMath_instance;
}
var Infinity_instance;
function Infinity_getInstance() {
  if (Infinity_instance === VOID)
    new Infinity_0();
  return Infinity_instance;
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var Hkdf_instance;
function Hkdf_getInstance() {
  return Hkdf_instance;
}
var HmacSha256_instance;
function HmacSha256_getInstance() {
  return HmacSha256_instance;
}
var Secp256k1_instance;
function Secp256k1_getInstance() {
  if (Secp256k1_instance === VOID)
    new Secp256k1();
  return Secp256k1_instance;
}
var Secp256k1Curve_instance;
function Secp256k1Curve_getInstance() {
  if (Secp256k1Curve_instance === VOID)
    new Secp256k1Curve();
  return Secp256k1Curve_instance;
}
function finalReduce($this, v) {
  var r = v;
  while (r.tht($this.shs_1) >= 0) {
    r = r.ihu($this.shs_1);
  }
  return r;
}
var Secp256k1Field_instance;
function Secp256k1Field_getInstance() {
  if (Secp256k1Field_instance === VOID)
    new Secp256k1Field();
  return Secp256k1Field_instance;
}
function pad($this, data) {
  // Inline function 'kotlin.Long.times' call
  var this_0 = fromInt(data.length);
  var bitLength = multiply(this_0, fromInt(8));
  var paddingLength = ((56 - ((data.length + 1 | 0) % 64 | 0) | 0) + 64 | 0) % 64 | 0;
  var padded = new Int8Array(((data.length + 1 | 0) + paddingLength | 0) + 8 | 0);
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex = data.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = data;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, padded, 0, 0, endIndex);
  padded[data.length] = -128;
  var inductionVariable = 0;
  if (inductionVariable < 8)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      padded[(padded.length - 8 | 0) + i | 0] = convertToByte(shiftRightUnsigned(bitLength, 56 - imul(i, 8) | 0));
    }
     while (inductionVariable < 8);
  return padded;
}
function rotateRight($this, $receiver, n) {
  return $receiver >>> n | 0 | $receiver << (32 - n | 0);
}
function toByteArray($this, $receiver) {
  var result = new Int8Array(imul($receiver.length, 4));
  var inductionVariable = 0;
  var last = $receiver.length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      result[imul(i, 4)] = toByte($receiver[i] >>> 24 | 0);
      result[imul(i, 4) + 1 | 0] = toByte($receiver[i] >>> 16 | 0);
      result[imul(i, 4) + 2 | 0] = toByte($receiver[i] >>> 8 | 0);
      result[imul(i, 4) + 3 | 0] = toByte($receiver[i]);
    }
     while (inductionVariable <= last);
  return result;
}
var Sha256_instance;
function Sha256_getInstance() {
  if (Sha256_instance === VOID)
    new Sha256();
  return Sha256_instance;
}
var TaggedHash_instance;
function TaggedHash_getInstance() {
  if (TaggedHash_instance === VOID)
    new TaggedHash();
  return TaggedHash_instance;
}
function hexDigit($this, c) {
  var tmp;
  if (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) {
    tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(48));
  } else if (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(102) : false) {
    tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(97)) + 10 | 0;
  } else if (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(70) : false) {
    tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(65)) + 10 | 0;
  } else {
    throw IllegalArgumentException.a2('Invalid hex char: ' + toString_0(c));
  }
  return tmp;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
//region block: post-declaration
initMetadataForObject(Aes, 'Aes');
initMetadataForObject(AesCbc, 'AesCbc');
initMetadataForObject(ChaCha20, 'ChaCha20');
initMetadataForObject(ECMath, 'ECMath');
initMetadataForClass(ECPoint, 'ECPoint');
initMetadataForClass(Affine, 'Affine');
initMetadataForObject(Infinity_0, 'Infinity');
initMetadataForCompanion(Companion);
initMetadataForClass(JacobianPoint, 'JacobianPoint');
initMetadataForObject(Hkdf, 'Hkdf');
initMetadataForObject(HmacSha256, 'HmacSha256');
initMetadataForClass(ModularArithmetic, 'ModularArithmetic');
initMetadataForObject(Secp256k1, 'Secp256k1');
initMetadataForObject(Secp256k1Curve, 'Secp256k1Curve');
initMetadataForObject(Secp256k1Field, 'Secp256k1Field');
initMetadataForObject(Sha256, 'Sha256');
initMetadataForObject(TaggedHash, 'TaggedHash');
initMetadataForCompanion(Companion_0);
initMetadataForClass(UInt256, 'UInt256', VOID, VOID, [Comparable]);
//endregion
//region block: init
AesCbc_instance = new AesCbc();
ChaCha20_instance = new ChaCha20();
Hkdf_instance = new Hkdf();
HmacSha256_instance = new HmacSha256();
//endregion
//region block: exports
export {
  AesCbc_instance as AesCbc_instance2jafjv8uxl9dy,
  ChaCha20_instance as ChaCha20_instance1bzaqh233njh7,
  Hkdf_instance as Hkdf_instance1s4hnpucpfxf2,
  HmacSha256_instance as HmacSha256_instance1bsdlftzidg3f,
  Secp256k1_getInstance as Secp256k1_getInstance2hypogeh9sua7,
};
//endregion

//# sourceMappingURL=knostr-cipher.mjs.map
