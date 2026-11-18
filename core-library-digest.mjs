import {
  toString1pkumu07cwy4m as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  createThis2j2avj17cvnv2 as createThis,
  isBlank1dvkhjjvox3p0 as isBlank,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  fill3lmv1pckd4inv as fill,
  arrayCopytctsywo3h7gj as arrayCopy,
} from './kotlin-kotlin-stdlib.mjs';
import { InvalidParameterException2mvcdeorw8u1i as InvalidParameterException } from './error-library-error.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Buffer {
  constructor(value) {
    this.e99_1 = value;
  }
  toString() {
    return Buffer__toString_impl_hsk2ap(this.e99_1);
  }
  hashCode() {
    return Buffer__hashCode_impl_3ylui6(this.e99_1);
  }
  equals(other) {
    return Buffer__equals_impl_4le8fi(this.e99_1, other);
  }
}
class Digest {
  static j99(algorithm, blockSize, digestLength) {
    var $this = createThis(this);
    init_org_kotlincrypto_core_digest_Digest($this);
    var tmp = $this;
    // Inline function 'org.kotlincrypto.core.digest.internal.initializeBuffer' call
    // Inline function 'kotlin.text.isNotBlank' call
    var tmp0 = !isBlank(algorithm);
    $l$block: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0) {
        break $l$block;
      }
      var message = 'algorithm cannot be blank';
      throw InvalidParameterException.d99(toString(message));
    }
    var tmp0_0 = blockSize > 0;
    $l$block_0: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_0) {
        break $l$block_0;
      }
      var message_0 = 'blockSize must be greater than 0';
      throw InvalidParameterException.d99(toString(message_0));
    }
    var tmp0_1 = (blockSize % 8 | 0) === 0;
    $l$block_1: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_1) {
        break $l$block_1;
      }
      var message_1 = 'blockSize must be a factor of 8';
      throw InvalidParameterException.d99(toString(message_1));
    }
    var tmp0_2 = digestLength >= 0;
    $l$block_2: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_2) {
        break $l$block_2;
      }
      var message_2 = 'digestLength cannot be negative';
      throw InvalidParameterException.d99(toString(message_2));
    }
    tmp.h99_1 = _Buffer___init__impl__mrnqm7(new Int8Array(blockSize));
    $this.f99_1 = algorithm;
    $this.g99_1 = digestLength;
    $this.i99_1 = 0;
    return $this;
  }
  k99() {
    return this.g99_1;
  }
  l99() {
    return this.f99_1;
  }
  m99(input) {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
    var this_0 = this.h99_1;
    // Inline function 'kotlin.contracts.contract' call
    var p2 = input.length;
    this.n99(input, 0, p2);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
    var bufPos = this.i99_1;
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(this_0), 0, bufPos);
    var p0 = _Buffer___get_value__impl__xxr8tn(this_0);
    var digest = this.o99(p0, bufPos);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonReset' call
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(this_0), 0);
    this.i99_1 = 0;
    this.p99();
    return digest;
  }
  n99(input, offset, len) {
    var tmp0 = this.h99_1;
    var tmp8 = this.i99_1;
    $l$block: {
      // Inline function 'org.kotlincrypto.core.digest.internal.commonUpdate' call
      // Inline function 'kotlin.contracts.contract' call
      var buf = _Buffer___get_value__impl__xxr8tn(tmp0);
      var blockSize = buf.length;
      var limitInput = offset + len | 0;
      var posInput = offset;
      var posBuf = tmp8;
      if (posBuf > 0) {
        if ((posBuf + len | 0) < blockSize) {
          var tmp4 = posBuf;
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = posInput;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = input;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, buf, tmp4, startIndex, limitInput);
          this.i99_1 = posBuf + len | 0;
          break $l$block;
        }
        var needed = blockSize - posBuf | 0;
        var tmp4_0 = posBuf;
        var tmp6 = posInput;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = posInput + needed | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = input;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, buf, tmp4_0, tmp6, endIndex);
        this.q99(buf, 0);
        posBuf = 0;
        posInput = posInput + needed | 0;
      }
      $l$loop: while (posInput < limitInput) {
        var posNext = posInput + blockSize | 0;
        if (posNext > limitInput) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex_0 = posInput;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = input;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_1, buf, 0, startIndex_0, limitInput);
          posBuf = limitInput - posInput | 0;
          break $l$loop;
        }
        var p1 = posInput;
        this.q99(input, p1);
        posInput = posNext;
      }
      this.i99_1 = posBuf;
    }
  }
  equals(other) {
    var tmp;
    if (other instanceof Digest) {
      tmp = equals(new Buffer(other.h99_1), new Buffer(this.h99_1));
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return Buffer__hashCode_impl_3ylui6(this.h99_1);
  }
  toString() {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonToString' call
    return 'Digest[' + this.l99() + ']@' + this.hashCode();
  }
}
//endregion
function _Buffer___init__impl__mrnqm7(value) {
  return value;
}
function _Buffer___get_value__impl__xxr8tn($this) {
  return $this;
}
function Buffer__toString_impl_hsk2ap($this) {
  return 'Buffer(value=' + toString($this) + ')';
}
function Buffer__hashCode_impl_3ylui6($this) {
  return hashCode($this);
}
function Buffer__equals_impl_4le8fi($this, other) {
  if (!(other instanceof Buffer))
    return false;
  var tmp0_other_with_cast = other.e99_1;
  if (!equals($this, tmp0_other_with_cast))
    return false;
  return true;
}
function init_org_kotlincrypto_core_digest_Digest(_this__u8e3s4) {
}
//region block: post-declaration
initMetadataForClass(Buffer, 'Buffer');
initMetadataForClass(Digest, 'Digest');
//endregion
//region block: exports
export {
  Digest as Digest1vc95ftpmqvn1,
};
//endregion

//# sourceMappingURL=core-library-digest.mjs.map
