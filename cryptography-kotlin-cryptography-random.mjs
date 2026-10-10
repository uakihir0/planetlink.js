import {
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Random24dxadk52mliy as Random,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class CryptographyRandom extends Random {
  static xp8() {
    Default_getInstance();
    return this.ir();
  }
}
class AbstractRandom extends CryptographyRandom {
  static wp8() {
    return this.xp8();
  }
  jr(bitCount) {
    var numBytes = (bitCount + 7 | 0) / 8 | 0;
    var b = this.qr(numBytes);
    var next = 0;
    var inductionVariable = 0;
    if (inductionVariable < numBytes)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        next = (next << 8) + (b[i] & 255) | 0;
      }
       while (inductionVariable < numBytes);
    return next >>> (imul(numBytes, 8) - bitCount | 0) | 0;
  }
  pr(array) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(array.length === 0)) {
      this.yp8(array);
    }
    return array;
  }
}
class Default extends CryptographyRandom {
  constructor() {
    return new.target.ap9();
  }
  static ap9() {
    Default_instance = null;
    var $this = this.xp8();
    Default_instance = $this;
    $this.zp8_1 = defaultCryptographyRandom();
    return $this;
  }
  jr(bitCount) {
    return this.zp8_1.jr(bitCount);
  }
  an() {
    return this.zp8_1.an();
  }
  v2(until) {
    return this.zp8_1.v2(until);
  }
  kr(from, until) {
    return this.zp8_1.kr(from, until);
  }
  lr() {
    return this.zp8_1.lr();
  }
  mr(until) {
    return this.zp8_1.mr(until);
  }
  nr(from, until) {
    return this.zp8_1.nr(from, until);
  }
  or() {
    return this.zp8_1.or();
  }
  pr(array) {
    return this.zp8_1.pr(array);
  }
  qr(size) {
    return this.zp8_1.qr(size);
  }
  rr(array, fromIndex, toIndex) {
    return this.zp8_1.rr(array, fromIndex, toIndex);
  }
}
class WebCryptoCryptographyRandom extends AbstractRandom {
  constructor() {
    return new.target.dp9();
  }
  static dp9() {
    WebCryptoCryptographyRandom_instance = null;
    var $this = this.wp8();
    WebCryptoCryptographyRandom_instance = $this;
    $this.bp9_1 = 65536;
    $this.cp9_1 = getCrypto();
    return $this;
  }
  yp8(array) {
    // Inline function 'dev.whyoleg.cryptography.random.useAsInt8Array' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    fillBytes(this, array);
    return Unit_instance;
  }
}
//endregion
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    Default.ap9();
  return Default_instance;
}
function defaultCryptographyRandom() {
  return WebCryptoCryptographyRandom_getInstance();
}
function fillBytes($this, jsArray) {
  var size = jsArray.length;
  if (size <= 65536) {
    $this.cp9_1.getRandomValues(jsArray);
  } else {
    var filled = 0;
    do {
      // Inline function 'kotlin.comparisons.minOf' call
      var b = size - filled | 0;
      var chunkSize = Math.min(65536, b);
      $this.cp9_1.getRandomValues(jsArray.subarray(filled, filled + chunkSize | 0));
      filled = filled + chunkSize | 0;
    }
     while (filled < size);
  }
}
var WebCryptoCryptographyRandom_instance;
function WebCryptoCryptographyRandom_getInstance() {
  if (WebCryptoCryptographyRandom_instance === VOID)
    WebCryptoCryptographyRandom.dp9();
  return WebCryptoCryptographyRandom_instance;
}
function getCrypto() {
  return globalThis ? globalThis.crypto : window.crypto || window.msCrypto;
}
//region block: post-declaration
initMetadataForClass(CryptographyRandom, 'CryptographyRandom');
initMetadataForClass(AbstractRandom, 'AbstractRandom');
initMetadataForObject(Default, 'Default');
initMetadataForObject(WebCryptoCryptographyRandom, 'WebCryptoCryptographyRandom');
//endregion
//region block: exports
export {
  Default_getInstance as Default_getInstance1ig4om9cz7i76,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-random.mjs.map
