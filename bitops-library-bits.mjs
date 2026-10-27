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
    this.g93_1 = 1048576;
  }
}
class Final {
  static m93(isBits) {
    var $this = createThis(this);
    $this.l93_1 = isBits;
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
      result = imul(result, 31) + this.i93_1 | 0;
      result = imul(result, 31) + this.j93_1 | 0;
    } else {
      if (this instanceof Final_1) {
        result = imul(result, 31) + getBigIntHashCode(this.b94_1) | 0;
        result = imul(result, 31) + getBigIntHashCode(this.c94_1) | 0;
      }
    }
    result = imul(result, 31) + getBooleanHashCode(this.l93_1) | 0;
    return result;
  }
  toString() {
    var tmp;
    if (this instanceof Final_0) {
      tmp = 'Counter.Bit32.Final[lo=' + this.i93_1 + ', hi=' + this.j93_1 + ']';
    } else {
      if (this instanceof Final_1) {
        tmp = 'Counter.Bit64.Final[lo=' + this.b94_1.toString() + ', hi=' + this.c94_1.toString() + ']';
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
}
class Final_0 extends Final {
  constructor(lo, hi, isBits) {
    return new.target.k93(lo, hi, isBits);
  }
  static k93(lo, hi, isBits) {
    var $this = this.m93(isBits);
    $this.i93_1 = lo;
    $this.j93_1 = hi;
    return $this;
  }
  static n93(lo, hi) {
    return this.k93(lo, hi, false);
  }
  sm() {
    return this.i93_1;
  }
  tm() {
    return this.j93_1;
  }
  o93() {
    if (this.l93_1)
      return this;
    return Final_0.k93(this.i93_1 << 3, this.j93_1 << 3 | (this.i93_1 >>> 29 | 0), true);
  }
}
class Final_1 extends Final {}
class Counter {
  static v93() {
    var $this = createThis(this);
    $this.u93_1 = new Object();
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
    return 527 + hashCode(this.u93_1) | 0;
  }
  toString() {
    var tmp;
    if (this instanceof Bit32) {
      tmp = 'Bit32[lo=' + this.r93_1 + ', hi=' + this.s93_1 + ', incrementBy=' + this.q93_1 + ']';
    } else {
      if (this instanceof Bit64) {
        tmp = 'Bit64[lo=' + this.f94_1.toString() + ', hi=' + this.g94_1.toString() + ', incrementBy=' + this.e94_1.toString() + ']';
      } else {
        noWhenBranchMatchedException();
      }
    }
    // Inline function 'kotlin.let' call
    return 'Counter.' + tmp + '@' + this.hashCode();
  }
}
class Bit32 extends Counter {
  static t93(lo, hi, incrementBy) {
    var $this = this.v93();
    init_org_kotlincrypto_bitops_bits_Counter_Bit32($this);
    // Inline function 'kotlin.require' call
    if (!(incrementBy > 0)) {
      var message = 'incrementBy[' + incrementBy + '] must be greater than 0';
      throw IllegalArgumentException.b2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(incrementBy <= 1048576)) {
      var message_0 = 'incrementBy[' + incrementBy + '] must be less than or equal to 1048576';
      throw IllegalArgumentException.b2(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!((incrementBy % 8 | 0) === 0)) {
      var message_1 = 'incrementBy[' + incrementBy + '] must be a factor of 8';
      throw IllegalArgumentException.b2(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    if (!((-2147483648 % incrementBy | 0) === 0)) {
      var message_2 = 'Int.MIN_VALUE % incrementBy[' + incrementBy + '] != 0';
      throw IllegalArgumentException.b2(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    if (!((lo % incrementBy | 0) === 0)) {
      var message_3 = 'lo must be a factor of incrementBy[' + incrementBy + ']';
      throw IllegalArgumentException.b2(toString(message_3));
    }
    $this.q93_1 = incrementBy;
    $this.r93_1 = lo;
    $this.s93_1 = hi;
    return $this;
  }
  static w93(incrementBy) {
    return this.t93(0, 0, incrementBy);
  }
  x93() {
    this.r93_1 = this.r93_1 + this.q93_1 | 0;
    if (this.r93_1 === 0) {
      this.s93_1 = this.s93_1 + 1 | 0;
    }
  }
  y93(additional) {
    var lo = this.r93_1;
    var hi = this.s93_1;
    var lt0 = lo < 0;
    lo = lo + additional | 0;
    if (lt0 && lo >= 0) {
      hi = hi + 1 | 0;
    }
    return Final_0.n93(lo, hi);
  }
  z93() {
    this.r93_1 = 0;
    this.s93_1 = 0;
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
