import {
  hashCodeq5arwsb9dgti as hashCode,
  createThis2j2avj17cvnv2 as createThis,
  isBlank1dvkhjjvox3p0 as isBlank,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  toString1pkumu07cwy4m as toString,
  fill3lmv1pckd4inv as fill,
  arrayCopytctsywo3h7gj as arrayCopy,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
import { InvalidParameterException2mvcdeorw8u1i as InvalidParameterException } from './error-library-error.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Digest {
  static v8p(algorithm, blockSize, digestLength) {
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
      throw InvalidParameterException.q8p(toString(message));
    }
    var tmp0_0 = blockSize > 0;
    $l$block_0: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_0) {
        break $l$block_0;
      }
      var message_0 = 'blockSize must be greater than 0';
      throw InvalidParameterException.q8p(toString(message_0));
    }
    var tmp0_1 = (blockSize % 8 | 0) === 0;
    $l$block_1: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_1) {
        break $l$block_1;
      }
      var message_1 = 'blockSize must be a factor of 8';
      throw InvalidParameterException.q8p(toString(message_1));
    }
    var tmp0_2 = digestLength >= 0;
    $l$block_2: {
      // Inline function 'org.kotlincrypto.error.requireParam' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_2) {
        break $l$block_2;
      }
      var message_2 = 'digestLength cannot be negative';
      throw InvalidParameterException.q8p(toString(message_2));
    }
    tmp.t8p_1 = _Buffer___init__impl__mrnqm7(new Int8Array(blockSize));
    $this.r8p_1 = algorithm;
    $this.s8p_1 = digestLength;
    $this.u8p_1 = 0;
    return $this;
  }
  w8p() {
    return this.s8p_1;
  }
  x8p() {
    return this.r8p_1;
  }
  y8p(input) {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
    var this_0 = this.t8p_1;
    // Inline function 'kotlin.contracts.contract' call
    var p2 = input.length;
    this.z8p(input, 0, p2);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
    var bufPos = this.u8p_1;
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(this_0), 0, bufPos);
    var p0 = _Buffer___get_value__impl__xxr8tn(this_0);
    var digest = this.a8q(p0, bufPos);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonReset' call
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(this_0), 0);
    this.u8p_1 = 0;
    this.b8q();
    return digest;
  }
  z8p(input, offset, len) {
    var tmp0 = this.t8p_1;
    var tmp8 = this.u8p_1;
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
          this.u8p_1 = posBuf + len | 0;
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
        this.c8q(buf, 0);
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
        this.c8q(input, p1);
        posInput = posNext;
      }
      this.u8p_1 = posBuf;
    }
  }
  equals(other) {
    var tmp;
    if (other instanceof Digest) {
      tmp = equals(other.t8p_1, this.t8p_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return Buffer__hashCode_impl_3ylui6(this.t8p_1);
  }
  toString() {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonToString' call
    return 'Digest[' + this.x8p() + ']@' + this.hashCode();
  }
}
//endregion
function _Buffer___init__impl__mrnqm7(value) {
  return value;
}
function _Buffer___get_value__impl__xxr8tn($this) {
  return $this;
}
function Buffer__hashCode_impl_3ylui6($this) {
  return hashCode($this);
}
function init_org_kotlincrypto_core_digest_Digest(_this__u8e3s4) {
}
//region block: post-declaration
initMetadataForClass(Digest, 'Digest');
//endregion
//region block: exports
export {
  Digest as Digest1vc95ftpmqvn1,
};
//endregion

//# sourceMappingURL=core-library-digest.mjs.map
