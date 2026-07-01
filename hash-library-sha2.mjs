import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  fill3lmv1pckd4inv as fill,
  fill2542d4m9l93pn as fill_0,
  arrayCopytctsywo3h7gj as arrayCopy,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
import { Digest1vc95ftpmqvn1 as Digest } from './core-library-digest.mjs';
import { Bit3217m1n1f00xdaa as Bit32 } from './bitops-library-bits.mjs';
import { Big_getInstance3jr7zuihhfkkl as Big_getInstance } from './bitops-library-endian.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    this.h8r_1 = 64;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.i8r_1 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
  }
}
class Bit32Digest extends Digest {
  static r8r(bitStrength, h) {
    Companion_getInstance();
    var $this = this.v8p('SHA-' + bitStrength, 64, bitStrength / 8 | 0);
    init_org_kotlincrypto_hash_sha2_Bit32Digest($this);
    $this.n8r_1 = h;
    $this.o8r_1 = new Int32Array(64);
    var tmp = $this;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p8r_1 = h.slice();
    $this.q8r_1 = Bit32.t8q(64);
    return $this;
  }
  c8q(input, offset) {
    var x = this.o8r_1;
    Big_getInstance();
    // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
    var sourceIndexEnd = offset + 64 | 0;
    Big_getInstance().g8r(input, x, 0, offset, sourceIndexEnd);
    var inductionVariable = 16;
    if (inductionVariable < 64)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var x15 = x[i - 15 | 0];
        var s0 = (x15 >>> 7 | 0 | x15 << 25) ^ (x15 >>> 18 | 0 | x15 << 14) ^ (x15 >>> 3 | 0);
        var x2 = x[i - 2 | 0];
        var s1 = (x2 >>> 17 | 0 | x2 << 15) ^ (x2 >>> 19 | 0 | x2 << 13) ^ (x2 >>> 10 | 0);
        var x16 = x[i - 16 | 0];
        var x7 = x[i - 7 | 0];
        x[i] = ((x16 + s0 | 0) + x7 | 0) + s1 | 0;
      }
       while (inductionVariable < 64);
    var k = Companion_getInstance().i8r_1;
    var state = this.p8r_1;
    var a = state[0];
    var b = state[1];
    var c = state[2];
    var d = state[3];
    var e = state[4];
    var f = state[5];
    var g = state[6];
    var h = state[7];
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < 64)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var s0_0 = (a >>> 2 | 0 | a << 30) ^ (a >>> 13 | 0 | a << 19) ^ (a >>> 22 | 0 | a << 10);
        var s1_0 = (e >>> 6 | 0 | e << 26) ^ (e >>> 11 | 0 | e << 21) ^ (e >>> 25 | 0 | e << 7);
        var ch = e & f ^ ~e & g;
        var maj = a & b ^ a & c ^ b & c;
        var t1 = (((h + s1_0 | 0) + ch | 0) + k[i_0] | 0) + x[i_0] | 0;
        var t2 = s0_0 + maj | 0;
        h = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }
       while (inductionVariable_0 < 64);
    state[0] = state[0] + a | 0;
    state[1] = state[1] + b | 0;
    state[2] = state[2] + c | 0;
    state[3] = state[3] + d | 0;
    state[4] = state[4] + e | 0;
    state[5] = state[5] + f | 0;
    state[6] = state[6] + g | 0;
    state[7] = state[7] + h | 0;
    this.q8r_1.u8q();
  }
  a8q(buf, bufPos) {
    var digest = new Int8Array(this.w8p());
    this.s8r(digest, 0, buf, bufPos);
    return digest;
  }
  s8r(dest, destOffset, buf, bufPos) {
    var tmp0_container = this.q8r_1.v8q(bufPos).l8q();
    var bitsLo = tmp0_container.sl();
    var bitsHi = tmp0_container.tl();
    buf[bufPos] = -128;
    if ((bufPos + 1 | 0) > 56) {
      this.c8q(buf, 0);
      fill(buf, 0, 0, 56);
    }
    // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
    Big_getInstance();
    Big_getInstance().e8r(bitsHi, buf, 56);
    // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
    Big_getInstance();
    Big_getInstance().e8r(bitsLo, buf, 60);
    this.c8q(buf, 0);
    Big_getInstance();
    var tmp2 = this.p8r_1;
    // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
    var sourceIndexEnd = this.w8p() / 4 | 0;
    Big_getInstance().f8r(tmp2, dest, destOffset, 0, sourceIndexEnd);
  }
  b8q() {
    fill_0(this.o8r_1, 0);
    var tmp0 = this.n8r_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destination = this.p8r_1;
    var endIndex = tmp0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
    this.q8r_1.w8q();
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.t8r_1 = new Int32Array([1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]);
  }
}
class SHA256 extends Bit32Digest {
  static c8s() {
    Companion_getInstance_0();
    var $this = this.r8r(256, Companion_getInstance_0().t8r_1);
    init_org_kotlincrypto_hash_sha2_SHA256($this);
    return $this;
  }
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function init_org_kotlincrypto_hash_sha2_Bit32Digest(_this__u8e3s4) {
  Companion_getInstance();
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function init_org_kotlincrypto_hash_sha2_SHA256(_this__u8e3s4) {
  Companion_getInstance_0();
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(Bit32Digest, 'Bit32Digest');
initMetadataForCompanion(Companion_0);
initMetadataForClass(SHA256, 'SHA256', SHA256.c8s);
//endregion
//region block: exports
export {
  SHA256 as SHA256nymudvmltc47,
};
//endregion

//# sourceMappingURL=hash-library-sha2.mjs.map
