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
  static snb() {
    Default_getInstance();
    return this.hr();
  }
}
class AbstractRandom extends CryptographyRandom {
  static rnb() {
    return this.snb();
  }
  ir(bitCount) {
    var numBytes = (bitCount + 7 | 0) / 8 | 0;
    var b = this.pr(numBytes);
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
  or(array) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(array.length === 0)) {
      this.tnb(array);
    }
    return array;
  }
}
class Default extends CryptographyRandom {
  constructor() {
    return new.target.vnb();
  }
  static vnb() {
    Default_instance = null;
    var $this = this.snb();
    Default_instance = $this;
    $this.unb_1 = defaultCryptographyRandom();
    return $this;
  }
  ir(bitCount) {
    return this.unb_1.ir(bitCount);
  }
  zm() {
    return this.unb_1.zm();
  }
  v2(until) {
    return this.unb_1.v2(until);
  }
  jr(from, until) {
    return this.unb_1.jr(from, until);
  }
  kr() {
    return this.unb_1.kr();
  }
  lr(until) {
    return this.unb_1.lr(until);
  }
  mr(from, until) {
    return this.unb_1.mr(from, until);
  }
  nr() {
    return this.unb_1.nr();
  }
  or(array) {
    return this.unb_1.or(array);
  }
  pr(size) {
    return this.unb_1.pr(size);
  }
  qr(array, fromIndex, toIndex) {
    return this.unb_1.qr(array, fromIndex, toIndex);
  }
}
class WebCryptoCryptographyRandom extends AbstractRandom {
  constructor() {
    return new.target.ynb();
  }
  static ynb() {
    WebCryptoCryptographyRandom_instance = null;
    var $this = this.rnb();
    WebCryptoCryptographyRandom_instance = $this;
    $this.wnb_1 = 65536;
    $this.xnb_1 = getCrypto();
    return $this;
  }
  tnb(array) {
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
    Default.vnb();
  return Default_instance;
}
function defaultCryptographyRandom() {
  return WebCryptoCryptographyRandom_getInstance();
}
function fillBytes($this, jsArray) {
  var size = jsArray.length;
  if (size <= 65536) {
    $this.xnb_1.getRandomValues(jsArray);
  } else {
    var filled = 0;
    do {
      // Inline function 'kotlin.comparisons.minOf' call
      var b = size - filled | 0;
      var chunkSize = Math.min(65536, b);
      $this.xnb_1.getRandomValues(jsArray.subarray(filled, filled + chunkSize | 0));
      filled = filled + chunkSize | 0;
    }
     while (filled < size);
  }
}
var WebCryptoCryptographyRandom_instance;
function WebCryptoCryptographyRandom_getInstance() {
  if (WebCryptoCryptographyRandom_instance === VOID)
    WebCryptoCryptographyRandom.ynb();
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
