import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  createThis2j2avj17cvnv2 as createThis,
  hashCodeq5arwsb9dgti as hashCode,
  getBigIntHashCode294hi5bdhtj6e as getBigIntHashCode,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    this.x90_1 = 1048576;
  }
}
class Final {
  static d91(isBits) {
    var $this = createThis(this);
    $this.c91_1 = isBits;
    return $this;
  }
  equals(other) {
    var tmp;
    if (other instanceof Final) {
      tmp = hashCode(other) === this.hashCode();
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    var result = 17;
    if (this instanceof Final_0) {
      result = imul(result, 31) + this.z90_1 | 0;
      result = imul(result, 31) + this.a91_1 | 0;
    } else {
      if (this instanceof Final_1) {
        result = imul(result, 31) + getBigIntHashCode(this.s91_1) | 0;
        result = imul(result, 31) + getBigIntHashCode(this.t91_1) | 0;
      }
    }
    result = imul(result, 31) + getBooleanHashCode(this.c91_1) | 0;
    return result;
  }
  toString() {
    var tmp;
    if (this instanceof Final_0) {
      tmp = 'Counter.Bit32.Final[lo=' + this.z90_1 + ', hi=' + this.a91_1 + ']';
    } else {
      if (this instanceof Final_1) {
        tmp = 'Counter.Bit64.Final[lo=' + this.s91_1.toString() + ', hi=' + this.t91_1.toString() + ']';
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
}
class Final_0 extends Final {
  constructor(lo, hi, isBits) {
    return new.target.b91(lo, hi, isBits);
  }
  static b91(lo, hi, isBits) {
    var $this = this.d91(isBits);
    $this.z90_1 = lo;
    $this.a91_1 = hi;
    return $this;
  }
  static e91(lo, hi) {
    return this.b91(lo, hi, false);
  }
  pm() {
    return this.z90_1;
  }
  qm() {
    return this.a91_1;
  }
  f91() {
    if (this.c91_1)
      return this;
    return Final_0.b91(this.z90_1 << 3, this.a91_1 << 3 | (this.z90_1 >>> 29 | 0), true);
  }
}
class Final_1 extends Final {}
class Counter {
  static m91() {
    var $this = createThis(this);
    $this.l91_1 = new Object();
    return $this;
  }
  equals(other) {
    var tmp;
    if (other instanceof Counter) {
      tmp = hashCode(other) === this.hashCode();
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return 527 + hashCode(this.l91_1) | 0;
  }
  toString() {
    var tmp;
    if (this instanceof Bit32) {
      tmp = 'Bit32[lo=' + this.i91_1 + ', hi=' + this.j91_1 + ', incrementBy=' + this.h91_1 + ']';
    } else {
      if (this instanceof Bit64) {
        tmp = 'Bit64[lo=' + this.w91_1.toString() + ', hi=' + this.x91_1.toString() + ', incrementBy=' + this.v91_1.toString() + ']';
      } else {
        noWhenBranchMatchedException();
      }
    }
    // Inline function 'kotlin.let' call
    return 'Counter.' + tmp + '@' + this.hashCode();
  }
}
class Bit32 extends Counter {
  static k91(lo, hi, incrementBy) {
    var $this = this.m91();
    init_org_kotlincrypto_bitops_bits_Counter_Bit32($this);
    // Inline function 'kotlin.require' call
    if (!(incrementBy > 0)) {
      var message = 'incrementBy[' + incrementBy + '] must be greater than 0';
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(incrementBy <= 1048576)) {
      var message_0 = 'incrementBy[' + incrementBy + '] must be less than or equal to 1048576';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!((incrementBy % 8 | 0) === 0)) {
      var message_1 = 'incrementBy[' + incrementBy + '] must be a factor of 8';
      throw IllegalArgumentException.a2(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    if (!((-2147483648 % incrementBy | 0) === 0)) {
      var message_2 = 'Int.MIN_VALUE % incrementBy[' + incrementBy + '] != 0';
      throw IllegalArgumentException.a2(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    if (!((lo % incrementBy | 0) === 0)) {
      var message_3 = 'lo must be a factor of incrementBy[' + incrementBy + ']';
      throw IllegalArgumentException.a2(toString(message_3));
    }
    $this.h91_1 = incrementBy;
    $this.i91_1 = lo;
    $this.j91_1 = hi;
    return $this;
  }
  static n91(incrementBy) {
    return this.k91(0, 0, incrementBy);
  }
  o91() {
    this.i91_1 = this.i91_1 + this.h91_1 | 0;
    if (this.i91_1 === 0) {
      this.j91_1 = this.j91_1 + 1 | 0;
    }
  }
  p91(additional) {
    var lo = this.i91_1;
    var hi = this.j91_1;
    var lt0 = lo < 0;
    lo = lo + additional | 0;
    if (lt0 && lo >= 0) {
      hi = hi + 1 | 0;
    }
    return Final_0.e91(lo, hi);
  }
  q91() {
    this.i91_1 = 0;
    this.j91_1 = 0;
  }
}
class Bit64 extends Counter {}
//endregion
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function init_org_kotlincrypto_bitops_bits_Counter_Bit32(_this__u8e3s4) {
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(Final, 'Final');
initMetadataForClass(Final_0, 'Final');
initMetadataForClass(Final_1, 'Final');
initMetadataForClass(Counter, 'Counter');
initMetadataForClass(Bit32, 'Bit32');
initMetadataForClass(Bit64, 'Bit64');
//endregion
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  Bit32 as Bit3217m1n1f00xdaa,
};
//endregion

//# sourceMappingURL=bitops-library-bits.mjs.map
