import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  Comparator2b3maoeh98xtg as Comparator,
  hashCodeq5arwsb9dgti as hashCode,
  compareValues1n2ayl87ihzfk as compareValues,
  sortedWith2csnbbb21k0lg as sortedWith,
  ArrayList3it5z8td81qkl as ArrayList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  first58ocm7j58k3q as first,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  lazy2hsh8ze7j6ikd as lazy,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  KtMap140uvy3s5zad8 as KtMap,
  closeFinally1sadm0w9gt3u4 as closeFinally,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
} from './kotlin-kotlin-stdlib.mjs';
import { Default_getInstance1ig4om9cz7i76 as Default_getInstance } from './cryptography-kotlin-cryptography-random.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class CryptographyAlgorithm {}
class CryptographyAlgorithmId {
  constructor(name) {
    this.znb_1 = name;
  }
}
class Companion {
  anc() {
    return CryptographySystem_getInstance().cnc();
  }
}
class CryptographyProvider {
  enc(identifier) {
    var tmp0_elvis_lhs = this.dnc(identifier);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException.o('Algorithm not found: ' + toString(identifier));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
}
class CryptographySystem {
  constructor() {
    CryptographySystem_instance = this;
    this.bnc_1 = new CryptographySystemImpl();
    loadProviders(this);
  }
  cnc() {
    return this.bnc_1.cnc();
  }
  lnc(provider, priority) {
    return this.bnc_1.lnc(provider, priority);
  }
}
class CompositeProvider extends CryptographyProvider {
  constructor(providers) {
    super();
    this.mnc_1 = providers;
  }
  dnc(identifier) {
    var tmp0 = this.mnc_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        var result = element.dnc(identifier);
        if (!(result == null)) {
          tmp$ret$0 = result;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    return tmp$ret$0;
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.nnc_1 = function_0;
  }
  sj(a, b) {
    return this.nnc_1(a, b);
  }
  compare(a, b) {
    return this.sj(a, b);
  }
  c5() {
    return this.nnc_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.c5(), other.c5());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.c5());
  }
}
class CryptographySystemImpl {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.fnc_1 = LinkedHashMap.r5();
    var tmp_0 = this;
    tmp_0.gnc_1 = lazy(CryptographySystemImpl$lazyRegisteredProviders$lambda(this));
    this.hnc_1 = null;
    var tmp_1 = this;
    tmp_1.inc_1 = lazy(CryptographySystemImpl$lazyDefaultProvider$lambda(this));
    this.jnc_1 = null;
    var tmp_2 = this;
    tmp_2.knc_1 = lazy(CryptographySystemImpl$lazyDefaultRandom$lambda(this));
  }
  cnc() {
    return this.inc_1.d3();
  }
  lnc(provider, priority) {
    // Inline function 'kotlin.require' call
    if (!(priority >= 0)) {
      var message = 'Priority must be greater or equal to 0';
      throw IllegalArgumentException.a2(toString(message));
    }
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.fnc_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).t4(priority)) {
      var message_0 = 'Provider with priority ' + priority + ' already registered. Every registered provider should have unique priority.';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!!this.gnc_1.kw()) {
      var message_1 = 'Cannot register provider after `getRegisteredProviders` was called';
      throw IllegalStateException.o(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.fnc_1.o4(priority, provider);
  }
}
class Companion_0 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_0 = null;
    super('AES-GCM');
    Companion_instance_0 = this;
  }
}
class Companion_1 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_1 = null;
    super('AES-CTR');
    Companion_instance_1 = this;
  }
}
class Companion_2 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_2 = null;
    super('AES-CBC');
    Companion_instance_2 = this;
  }
}
class SHA256 extends CryptographyAlgorithmId {
  constructor() {
    SHA256_instance = null;
    super('SHA-256');
    SHA256_instance = this;
  }
}
class SHA1 extends CryptographyAlgorithmId {
  constructor() {
    SHA1_instance = null;
    super('SHA-1');
    SHA1_instance = this;
  }
}
class SHA384 extends CryptographyAlgorithmId {
  constructor() {
    SHA384_instance = null;
    super('SHA-384');
    SHA384_instance = this;
  }
}
class SHA512 extends CryptographyAlgorithmId {
  constructor() {
    SHA512_instance = null;
    super('SHA-512');
    SHA512_instance = this;
  }
}
class Companion_3 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_3 = null;
    super('ECDH');
    Companion_instance_3 = this;
  }
}
class Companion_4 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_4 = null;
    super('ECDSA');
    Companion_instance_4 = this;
  }
}
class Companion_5 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_5 = null;
    super('EdDSA');
    Companion_instance_5 = this;
  }
}
class Companion_6 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_6 = null;
    super('HKDF');
    Companion_instance_6 = this;
  }
}
class Companion_7 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_7 = null;
    super('HMAC');
    Companion_instance_7 = this;
  }
}
class Companion_8 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_8 = null;
    super('PBKDF2');
    Companion_instance_8 = this;
  }
}
class Companion_9 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_9 = null;
    super('RSA-OAEP');
    Companion_instance_9 = this;
  }
}
class Companion_10 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_10 = null;
    super('RSA-PSS');
    Companion_instance_10 = this;
  }
}
class Companion_11 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_11 = null;
    super('RSA-PKCS1-V1.5');
    Companion_instance_11 = this;
  }
}
class Companion_12 extends CryptographyAlgorithmId {
  constructor() {
    Companion_instance_12 = null;
    super('XDH');
    Companion_instance_12 = this;
  }
}
class Hasher {}
function hashBlocking(data) {
  var tmp0 = this.onc();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      tmp0.qnc(data);
      tmp$ret$0 = tmp0.rnc();
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
class UpdateFunction {}
function update$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.snc(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.snc.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
var CryptographySystem_instance;
function CryptographySystem_getInstance() {
  if (CryptographySystem_instance === VOID)
    new CryptographySystem();
  return CryptographySystem_instance;
}
function CryptographySystemImpl$lazyRegisteredProviders$lambda$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.c3();
  var tmp$ret$2 = b.c3();
  return compareValues(tmp, tmp$ret$2);
}
function CryptographySystemImpl$lazyRegisteredProviders$lambda(this$0) {
  return () => {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = this$0.fnc_1.b3();
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = CryptographySystemImpl$lazyRegisteredProviders$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    // Inline function 'kotlin.collections.map' call
    var this_1 = sortedWith(this_0, tmp$ret$1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.h2(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s = this_1.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$4 = item.d3().d3();
      destination.i2(tmp$ret$4);
    }
    return destination;
  };
}
function CryptographySystemImpl$lazyDefaultProvider$lambda(this$0) {
  return () => {
    var tmp0_elvis_lhs = this$0.hnc_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.let' call
      var it = this$0.gnc_1.d3();
      var tmp_0;
      switch (it.l2()) {
        case 0:
          // Inline function 'kotlin.error' call

          var message = 'No providers registered. Please provide a dependency or register provider explicitly';
          throw IllegalStateException.o(toString(message));
        case 1:
          tmp_0 = first(it);
          break;
        default:
          tmp_0 = new CompositeProvider(it);
          break;
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
}
function CryptographySystemImpl$lazyDefaultRandom$lambda(this$0) {
  return () => {
    var tmp0_elvis_lhs = this$0.jnc_1;
    return tmp0_elvis_lhs == null ? Default_getInstance() : tmp0_elvis_lhs;
  };
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 === VOID)
    new Companion_1();
  return Companion_instance_1;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 === VOID)
    new Companion_2();
  return Companion_instance_2;
}
var SHA256_instance;
function SHA256_getInstance() {
  if (SHA256_instance === VOID)
    new SHA256();
  return SHA256_instance;
}
var SHA1_instance;
function SHA1_getInstance() {
  if (SHA1_instance === VOID)
    new SHA1();
  return SHA1_instance;
}
var SHA384_instance;
function SHA384_getInstance() {
  if (SHA384_instance === VOID)
    new SHA384();
  return SHA384_instance;
}
var SHA512_instance;
function SHA512_getInstance() {
  if (SHA512_instance === VOID)
    new SHA512();
  return SHA512_instance;
}
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 === VOID)
    new Companion_3();
  return Companion_instance_3;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  if (Companion_instance_4 === VOID)
    new Companion_4();
  return Companion_instance_4;
}
var Companion_instance_5;
function Companion_getInstance_5() {
  if (Companion_instance_5 === VOID)
    new Companion_5();
  return Companion_instance_5;
}
var Companion_instance_6;
function Companion_getInstance_6() {
  if (Companion_instance_6 === VOID)
    new Companion_6();
  return Companion_instance_6;
}
var Companion_instance_7;
function Companion_getInstance_7() {
  if (Companion_instance_7 === VOID)
    new Companion_7();
  return Companion_instance_7;
}
var Companion_instance_8;
function Companion_getInstance_8() {
  if (Companion_instance_8 === VOID)
    new Companion_8();
  return Companion_instance_8;
}
var Companion_instance_9;
function Companion_getInstance_9() {
  if (Companion_instance_9 === VOID)
    new Companion_9();
  return Companion_instance_9;
}
var Companion_instance_10;
function Companion_getInstance_10() {
  if (Companion_instance_10 === VOID)
    new Companion_10();
  return Companion_instance_10;
}
var Companion_instance_11;
function Companion_getInstance_11() {
  if (Companion_instance_11 === VOID)
    new Companion_11();
  return Companion_instance_11;
}
var Companion_instance_12;
function Companion_getInstance_12() {
  if (Companion_instance_12 === VOID)
    new Companion_12();
  return Companion_instance_12;
}
function loadProviders(_this__u8e3s4) {
}
//region block: post-declaration
initMetadataForInterface(CryptographyAlgorithm, 'CryptographyAlgorithm');
initMetadataForClass(CryptographyAlgorithmId, 'CryptographyAlgorithmId');
initMetadataForCompanion(Companion);
initMetadataForClass(CryptographyProvider, 'CryptographyProvider');
initMetadataForObject(CryptographySystem, 'CryptographySystem');
initMetadataForClass(CompositeProvider, 'CompositeProvider');
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(CryptographySystemImpl, 'CryptographySystemImpl', CryptographySystemImpl);
initMetadataForCompanion(Companion_0);
initMetadataForCompanion(Companion_1);
initMetadataForCompanion(Companion_2);
initMetadataForObject(SHA256, 'SHA256');
initMetadataForObject(SHA1, 'SHA1');
initMetadataForObject(SHA384, 'SHA384');
initMetadataForObject(SHA512, 'SHA512');
initMetadataForCompanion(Companion_3);
initMetadataForCompanion(Companion_4);
initMetadataForCompanion(Companion_5);
initMetadataForCompanion(Companion_6);
initMetadataForCompanion(Companion_7);
initMetadataForCompanion(Companion_8);
initMetadataForCompanion(Companion_9);
initMetadataForCompanion(Companion_10);
initMetadataForCompanion(Companion_11);
initMetadataForCompanion(Companion_12);
initMetadataForInterface(Hasher, 'Hasher', VOID, VOID, VOID, [1]);
initMetadataForInterface(UpdateFunction, 'UpdateFunction', VOID, VOID, [AutoCloseable]);
//endregion
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  Hasher as Hashera1nteuzom60c,
  CryptographyAlgorithm as CryptographyAlgorithmhhdrgo7p9qei,
  CryptographyProvider as CryptographyProviderwgv0x40nzvjc,
  Companion_getInstance_2 as Companion_getInstance2olg9yqmpopg7,
  Companion_getInstance_1 as Companion_getInstanceorlsldn0izpv,
  Companion_getInstance_0 as Companion_getInstanceqcxmh3346puy,
  Companion_getInstance_3 as Companion_getInstance1pfiwtn2y1lvh,
  Companion_getInstance_4 as Companion_getInstance24bi247inbolg,
  Companion_getInstance_5 as Companion_getInstance35xhl05aii43n,
  Companion_getInstance_6 as Companion_getInstance1s20vyi4vqbh8,
  Companion_getInstance_7 as Companion_getInstance2jku6t2ybzz7y,
  Companion_getInstance_8 as Companion_getInstancetxt8neq0q0yr,
  Companion_getInstance_9 as Companion_getInstance229jygtcpof1t,
  Companion_getInstance_11 as Companion_getInstance248ozw6hhvlan,
  Companion_getInstance_10 as Companion_getInstance3mvpjn5dnquvf,
  SHA1_getInstance as SHA1_getInstance3e47cz2idnsay,
  SHA256_getInstance as SHA256_getInstance3vans5ihevbh4,
  SHA384_getInstance as SHA384_getInstance3s2noxsy0bbwb,
  SHA512_getInstance as SHA512_getInstance29mql8dpq9qq8,
  Companion_getInstance_12 as Companion_getInstance13zlvw8l27l08,
  Companion_instance as Companion_instance2kl1recl8zfdv,
  CryptographySystem_getInstance as CryptographySystem_getInstance2ksfmsuofgj94,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-core.mjs.map
