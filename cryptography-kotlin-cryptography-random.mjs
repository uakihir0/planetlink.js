import {
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Default_getInstancee1f46otjvolq as Default_getInstance,
  VOID3gxj6tk5isa35 as VOID,
  Random24dxadk52mliy as Random,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class CryptographyRandom extends Random {
  static gpk() {
    Default_getInstance_0();
    return this.sr();
  }
}
class AbstractRandom extends CryptographyRandom {
  static fpk() {
    return this.gpk();
  }
  tr(bitCount) {
    var numBytes = (bitCount + 7 | 0) / 8 | 0;
    var b = this.as(numBytes);
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
  zr(array) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(array.length === 0)) {
      this.hpk(array);
    }
    return array;
  }
}
class Default extends CryptographyRandom {
  constructor() {
    return new.target.jpk();
  }
  static jpk() {
    Default_instance = null;
    var $this = this.gpk();
    Default_instance = $this;
    $this.ipk_1 = defaultCryptographyRandom();
    return $this;
  }
  tr(bitCount) {
    return this.ipk_1.tr(bitCount);
  }
  fn() {
    return this.ipk_1.fn();
  }
  v2(until) {
    return this.ipk_1.v2(until);
  }
  ur(from, until) {
    return this.ipk_1.ur(from, until);
  }
  vr() {
    return this.ipk_1.vr();
  }
  wr(until) {
    return this.ipk_1.wr(until);
  }
  xr(from, until) {
    return this.ipk_1.xr(from, until);
  }
  yr() {
    return this.ipk_1.yr();
  }
  zr(array) {
    return this.ipk_1.zr(array);
  }
  as(size) {
    return this.ipk_1.as(size);
  }
  bs(array, fromIndex, toIndex) {
    return this.ipk_1.bs(array, fromIndex, toIndex);
  }
}
class WebCryptoCryptographyRandom extends AbstractRandom {
  constructor() {
    return new.target.mpk();
  }
  static mpk() {
    WebCryptoCryptographyRandom_instance = null;
    var $this = this.fpk();
    WebCryptoCryptographyRandom_instance = $this;
    $this.kpk_1 = 65536;
    $this.lpk_1 = getCrypto();
    return $this;
  }
  hpk(array) {
    // Inline function 'dev.whyoleg.cryptography.random.useAsInt8Array' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    fillBytes(this, array);
    return Unit_instance;
  }
}
//endregion
var Default_instance;
function Default_getInstance_0() {
  if (Default_instance === VOID) {
    Default_getInstance();
    Default.jpk();
  }
  return Default_instance;
}
function defaultCryptographyRandom() {
  return WebCryptoCryptographyRandom_getInstance();
}
function fillBytes($this, jsArray) {
  var size = jsArray.length;
  if (size <= 65536) {
    $this.lpk_1.getRandomValues(jsArray);
  } else {
    var filled = 0;
    do {
      // Inline function 'kotlin.comparisons.minOf' call
      var b = size - filled | 0;
      var chunkSize = Math.min(65536, b);
      $this.lpk_1.getRandomValues(jsArray.subarray(filled, filled + chunkSize | 0));
      filled = filled + chunkSize | 0;
    }
     while (filled < size);
  }
}
var WebCryptoCryptographyRandom_instance;
function WebCryptoCryptographyRandom_getInstance() {
  if (WebCryptoCryptographyRandom_instance === VOID)
    WebCryptoCryptographyRandom.mpk();
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
  Default_getInstance_0 as Default_getInstance1zramwb175hhz,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-random.mjs.map
