import {
  CryptographyProviderwgv0x40nzvjc as CryptographyProvider,
  Companion_getInstance1s20vyi4vqbh8 as Companion_getInstance,
  Companion_getInstancetxt8neq0q0yr as Companion_getInstance_0,
  Companion_getInstance13zlvw8l27l08 as Companion_getInstance_1,
  Companion_getInstance1pfiwtn2y1lvh as Companion_getInstance_2,
  Companion_getInstance35xhl05aii43n as Companion_getInstance_3,
  Companion_getInstance24bi247inbolg as Companion_getInstance_4,
  Companion_getInstance248ozw6hhvlan as Companion_getInstance_5,
  Companion_getInstance3mvpjn5dnquvf as Companion_getInstance_6,
  Companion_getInstance229jygtcpof1t as Companion_getInstance_7,
  Companion_getInstanceqcxmh3346puy as Companion_getInstance_8,
  Companion_getInstanceorlsldn0izpv as Companion_getInstance_9,
  Companion_getInstance2olg9yqmpopg7 as Companion_getInstance_10,
  Companion_getInstance2jku6t2ybzz7y as Companion_getInstance_11,
  SHA512_getInstance29mql8dpq9qq8 as SHA512_getInstance,
  SHA384_getInstance3s2noxsy0bbwb as SHA384_getInstance,
  SHA256_getInstance3vans5ihevbh4 as SHA256_getInstance,
  SHA1_getInstance3e47cz2idnsay as SHA1_getInstance,
  CryptographyAlgorithmhhdrgo7p9qei as CryptographyAlgorithm,
  Hashera1nteuzom60c as Hasher,
  CryptographySystem_getInstance2ksfmsuofgj94 as CryptographySystem_getInstance,
} from './cryptography-kotlin-cryptography-core.mjs';
import {
  equals2au1ep9vhcato as equals,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  lazy2hsh8ze7j6ikd as lazy,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  constructCallableReference23y65rf941mch as constructCallableReference,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  boxApply1qmzdb3dh90hg as boxApply,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class WebCryptoCryptographyProvider extends CryptographyProvider {
  constructor() {
    WebCryptoCryptographyProvider_instance = null;
    super();
    WebCryptoCryptographyProvider_instance = this;
  }
  dnc(identifier) {
    var tmp = equals(identifier, SHA1_getInstance()) ? Companion_getInstance_12().lng_1 : equals(identifier, SHA256_getInstance()) ? Companion_getInstance_12().mng_1 : equals(identifier, SHA384_getInstance()) ? Companion_getInstance_12().nng_1 : equals(identifier, SHA512_getInstance()) ? Companion_getInstance_12().ong_1 : equals(identifier, Companion_getInstance_11()) ? WebCryptoHmac_getInstance() : equals(identifier, Companion_getInstance_10()) ? WebCryptoAesCbc_getInstance() : equals(identifier, Companion_getInstance_9()) ? WebCryptoAesCtr_getInstance() : equals(identifier, Companion_getInstance_8()) ? WebCryptoAesGcm_getInstance() : equals(identifier, Companion_getInstance_7()) ? WebCryptoRsaOaep_getInstance() : equals(identifier, Companion_getInstance_6()) ? WebCryptoRsaPss_getInstance() : equals(identifier, Companion_getInstance_5()) ? WebCryptoRsaPkcs1_getInstance() : equals(identifier, Companion_getInstance_4()) ? WebCryptoEcdsa_getInstance() : equals(identifier, Companion_getInstance_3()) ? WebCryptoEdDsa_getInstance() : equals(identifier, Companion_getInstance_2()) ? WebCryptoEcdh_getInstance() : equals(identifier, Companion_getInstance_1()) ? WebCryptoXdh_getInstance() : equals(identifier, Companion_getInstance_0()) ? WebCryptoPbkdf2_instance : equals(identifier, Companion_getInstance()) ? WebCryptoHkdf_instance : null;
    return (tmp == null ? true : isInterface(tmp, CryptographyAlgorithm)) ? tmp : THROW_CCE();
  }
}
class WebCryptoEncodableKey {
  constructor(key, keyProcessor, $box) {
    boxApply(this, $box);
    this.inj_1 = key;
    this.jnj_1 = keyProcessor;
  }
}
class AesKey extends WebCryptoEncodableKey {
  constructor(key) {
    super(key, AesKeyProcessor_getInstance());
    this.rng_1 = key;
  }
}
class WebCryptoAes {
  constructor(algorithmName, keyWrapper) {
    this.sng_1 = algorithmName;
    this.tng_1 = keyWrapper;
  }
}
class WebCryptoKeyProcessor {}
class AesKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    AesKeyProcessor_instance = null;
    super();
    AesKeyProcessor_instance = this;
  }
}
class AesCbcKey extends AesKey {}
class WebCryptoAesCbc extends WebCryptoAes {
  constructor() {
    WebCryptoAesCbc_instance = null;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = ['encrypt', 'decrypt'];
    super('AES-CBC', new WebCryptoKeyWrapper(tmp, WebCryptoAesCbc$AesCbcKey$_init_$ref_lop2vf()));
    WebCryptoAesCbc_instance = this;
  }
}
class AesCtrKey extends AesKey {}
class WebCryptoAesCtr extends WebCryptoAes {
  constructor() {
    WebCryptoAesCtr_instance = null;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = ['encrypt', 'decrypt'];
    super('AES-CTR', new WebCryptoKeyWrapper(tmp, WebCryptoAesCtr$AesCtrKey$_init_$ref_5qzjvv()));
    WebCryptoAesCtr_instance = this;
  }
}
class AesGcmKey extends AesKey {}
class WebCryptoAesGcm extends WebCryptoAes {
  constructor() {
    WebCryptoAesGcm_instance = null;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = ['encrypt', 'decrypt'];
    super('AES-GCM', new WebCryptoKeyWrapper(tmp, WebCryptoAesGcm$AesGcmKey$_init_$ref_c6pr3f()));
    WebCryptoAesGcm_instance = this;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    this.lng_1 = new WebCryptoDigest('SHA-1', SHA1_getInstance());
    this.mng_1 = new WebCryptoDigest('SHA-256', SHA256_getInstance());
    this.nng_1 = new WebCryptoDigest('SHA-384', SHA384_getInstance());
    this.ong_1 = new WebCryptoDigest('SHA-512', SHA512_getInstance());
  }
}
class WebCryptoDigest {
  constructor(algorithm, id) {
    Companion_getInstance_12();
    this.ung_1 = algorithm;
    this.vng_1 = id;
  }
  tnd() {
    return this;
  }
  onc() {
    nonBlocking();
  }
  pnc(data) {
    nonBlocking();
  }
}
class EcPublicKey extends WebCryptoEncodableKey {
  constructor(publicKey) {
    super(publicKey, EcPublicKeyProcessor_getInstance());
    this.yng_1 = publicKey;
  }
}
class EcPrivateKey extends WebCryptoEncodableKey {
  constructor($outer, privateKey, $box) {
    if ($box === VOID)
      $box = {};
    $box.cnh_1 = $outer;
    super(privateKey, EcPrivateKeyProcessor_getInstance(), $box);
    this.bnh_1 = privateKey;
  }
}
class WebCryptoEc {
  constructor(algorithmName, publicKeyWrapper, privateKeyWrapper, keyPairWrapper) {
    this.fnh_1 = algorithmName;
    this.gnh_1 = publicKeyWrapper;
    this.hnh_1 = privateKeyWrapper;
    var tmp = this;
    var tmp0 = this.gnh_1.dnh_1;
    // Inline function 'kotlin.collections.plus' call
    var elements = this.hnh_1.dnh_1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.inh_1 = tmp0.concat(elements);
    var tmp_0 = this;
    tmp_0.jnh_1 = WebCryptoEc$keyPairWrapper$lambda(keyPairWrapper, this);
  }
}
class EcPublicKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    EcPublicKeyProcessor_instance = null;
    super();
    EcPublicKeyProcessor_instance = this;
  }
}
class EcPrivateKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    EcPrivateKeyProcessor_instance = null;
    super();
    EcPrivateKeyProcessor_instance = this;
  }
}
class EcdhKeyPair {
  constructor(publicKey, privateKey) {
    this.knh_1 = publicKey;
    this.lnh_1 = privateKey;
  }
}
class EcdhPublicKey extends EcPublicKey {}
class EcdhPrivateKey extends EcPrivateKey {
  constructor(privateKey) {
    super(WebCryptoEcdh_getInstance(), privateKey);
  }
}
class WebCryptoEcdh extends WebCryptoEc {
  constructor() {
    WebCryptoEcdh_instance = null;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [];
    var tmp_0 = new WebCryptoKeyWrapper(tmp, WebCryptoEcdh$EcdhPublicKey$_init_$ref_x8kjxe());
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = ['deriveBits'];
    var tmp_2 = new WebCryptoKeyWrapper(tmp_1, WebCryptoEcdh$EcdhPrivateKey$_init_$ref_1xgfie());
    super('ECDH', tmp_0, tmp_2, WebCryptoEcdh$EcdhKeyPair$_init_$ref_fqllqz());
    WebCryptoEcdh_instance = this;
  }
}
class EcdsaKeyPair {
  constructor(publicKey, privateKey) {
    this.mnh_1 = publicKey;
    this.nnh_1 = privateKey;
  }
}
class EcdsaPublicKey extends EcPublicKey {}
class EcdsaPrivateKey extends EcPrivateKey {
  constructor(privateKey) {
    super(WebCryptoEcdsa_getInstance(), privateKey);
  }
}
class WebCryptoEcdsa extends WebCryptoEc {
  constructor() {
    WebCryptoEcdsa_instance = null;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = ['verify'];
    var tmp_0 = new WebCryptoKeyWrapper(tmp, WebCryptoEcdsa$EcdsaPublicKey$_init_$ref_5egfgi());
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = ['sign'];
    var tmp_2 = new WebCryptoKeyWrapper(tmp_1, WebCryptoEcdsa$EcdsaPrivateKey$_init_$ref_8mqrbu());
    super('ECDSA', tmp_0, tmp_2, WebCryptoEcdsa$EcdsaKeyPair$_init_$ref_l5vyez());
    WebCryptoEcdsa_instance = this;
  }
}
class EdDsaKeyPair {
  constructor(publicKey, privateKey) {
    this.onh_1 = publicKey;
    this.pnh_1 = privateKey;
  }
}
class EdDsaPublicKey extends WebCryptoEncodableKey {
  constructor(publicKey) {
    super(publicKey, EdPublicKeyProcessor_getInstance());
    this.snh_1 = publicKey;
  }
}
class EdDsaPrivateKey extends WebCryptoEncodableKey {
  constructor(privateKey) {
    super(privateKey, EdPrivateKeyProcessor_getInstance());
    this.vnh_1 = privateKey;
  }
}
class WebCryptoEdDsa {
  constructor() {
    WebCryptoEdDsa_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = ['verify'];
    tmp.wnh_1 = new WebCryptoKeyWrapper(tmp_0, WebCryptoEdDsa$EdDsaPublicKey$_init_$ref_xkwfek());
    var tmp_1 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = ['sign'];
    tmp_1.xnh_1 = new WebCryptoKeyWrapper(tmp_2, WebCryptoEdDsa$EdDsaPrivateKey$_init_$ref_9jweho());
    var tmp_3 = this;
    var tmp0 = this.wnh_1.dnh_1;
    // Inline function 'kotlin.collections.plus' call
    var elements = this.xnh_1.dnh_1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp_3.ynh_1 = tmp0.concat(elements);
    var tmp_4 = this;
    tmp_4.znh_1 = WebCryptoEdDsa$keyPairWrapper$lambda;
  }
}
class EdPublicKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    EdPublicKeyProcessor_instance = null;
    super();
    EdPublicKeyProcessor_instance = this;
  }
}
class EdPrivateKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    EdPrivateKeyProcessor_instance = null;
    super();
    EdPrivateKeyProcessor_instance = this;
  }
}
class WebCryptoHkdf {}
class HmacKey extends WebCryptoEncodableKey {
  constructor(key) {
    super(key, HmacKeyProcessor_getInstance());
    this.cni_1 = key;
  }
}
class WebCryptoHmac {
  constructor() {
    WebCryptoHmac_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = ['sign', 'verify'];
    tmp.dni_1 = new WebCryptoKeyWrapper(tmp_0, WebCryptoHmac$HmacKey$_init_$ref_enwl2t());
  }
}
class HmacKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    HmacKeyProcessor_instance = null;
    super();
    HmacKeyProcessor_instance = this;
  }
}
class WebCryptoPbkdf2 {}
class RsaPublicKey extends WebCryptoEncodableKey {
  constructor(publicKey) {
    super(publicKey, RsaPublicKeyProcessor_getInstance());
    this.gni_1 = publicKey;
  }
}
class RsaPrivateKey extends WebCryptoEncodableKey {
  constructor($outer, privateKey, $box) {
    if ($box === VOID)
      $box = {};
    $box.kni_1 = $outer;
    super(privateKey, RsaPrivateKeyProcessor_getInstance(), $box);
    this.jni_1 = privateKey;
  }
}
class WebCryptoRsa {
  constructor(algorithmName, publicKeyWrapper, privateKeyWrapper, keyPairWrapper) {
    this.lni_1 = algorithmName;
    this.mni_1 = publicKeyWrapper;
    this.nni_1 = privateKeyWrapper;
    var tmp = this;
    var tmp0 = this.mni_1.dnh_1;
    // Inline function 'kotlin.collections.plus' call
    var elements = this.nni_1.dnh_1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.oni_1 = tmp0.concat(elements);
    var tmp_0 = this;
    tmp_0.pni_1 = WebCryptoRsa$keyPairWrapper$lambda(keyPairWrapper, this);
  }
}
class RsaPublicKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    RsaPublicKeyProcessor_instance = null;
    super();
    RsaPublicKeyProcessor_instance = this;
  }
}
class RsaPrivateKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    RsaPrivateKeyProcessor_instance = null;
    super();
    RsaPrivateKeyProcessor_instance = this;
  }
}
class RsaOaepKeyPair {
  constructor(publicKey, privateKey) {
    this.qni_1 = publicKey;
    this.rni_1 = privateKey;
  }
}
class RsaOaepPublicKey extends RsaPublicKey {}
class RsaOaepPrivateKey extends RsaPrivateKey {
  constructor(privateKey) {
    super(WebCryptoRsaOaep_getInstance(), privateKey);
  }
}
class WebCryptoRsaOaep extends WebCryptoRsa {
  constructor() {
    WebCryptoRsaOaep_instance = null;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = ['encrypt'];
    var tmp_0 = new WebCryptoKeyWrapper(tmp, WebCryptoRsaOaep$RsaOaepPublicKey$_init_$ref_2xzkj4());
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = ['decrypt'];
    var tmp_2 = new WebCryptoKeyWrapper(tmp_1, WebCryptoRsaOaep$RsaOaepPrivateKey$_init_$ref_ds5c3s());
    super('RSA-OAEP', tmp_0, tmp_2, WebCryptoRsaOaep$RsaOaepKeyPair$_init_$ref_whtofn());
    WebCryptoRsaOaep_instance = this;
  }
}
class RsaPkcs1KeyPair {
  constructor(publicKey, privateKey) {
    this.sni_1 = publicKey;
    this.tni_1 = privateKey;
  }
}
class RsaPkcs1PublicKey extends RsaPublicKey {}
class RsaPkcs1PrivateKey extends RsaPrivateKey {
  constructor(privateKey) {
    super(WebCryptoRsaPkcs1_getInstance(), privateKey);
  }
}
class WebCryptoRsaPkcs1 extends WebCryptoRsa {
  constructor() {
    WebCryptoRsaPkcs1_instance = null;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = ['verify'];
    var tmp_0 = new WebCryptoKeyWrapper(tmp, WebCryptoRsaPkcs1$RsaPkcs1PublicKey$_init_$ref_kiwvhe());
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = ['sign'];
    var tmp_2 = new WebCryptoKeyWrapper(tmp_1, WebCryptoRsaPkcs1$RsaPkcs1PrivateKey$_init_$ref_y0qpl2());
    super('RSASSA-PKCS1-v1_5', tmp_0, tmp_2, WebCryptoRsaPkcs1$RsaPkcs1KeyPair$_init_$ref_s062w5());
    WebCryptoRsaPkcs1_instance = this;
  }
}
class RsaPssKeyPair {
  constructor(publicKey, privateKey) {
    this.uni_1 = publicKey;
    this.vni_1 = privateKey;
  }
}
class RsaPssPublicKey extends RsaPublicKey {}
class RsaPssPrivateKey extends RsaPrivateKey {
  constructor(privateKey) {
    super(WebCryptoRsaPss_getInstance(), privateKey);
  }
}
class WebCryptoRsaPss extends WebCryptoRsa {
  constructor() {
    WebCryptoRsaPss_instance = null;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = ['verify'];
    var tmp_0 = new WebCryptoKeyWrapper(tmp, WebCryptoRsaPss$RsaPssPublicKey$_init_$ref_o813fm());
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = ['sign'];
    var tmp_2 = new WebCryptoKeyWrapper(tmp_1, WebCryptoRsaPss$RsaPssPrivateKey$_init_$ref_6l5g3q());
    super('RSA-PSS', tmp_0, tmp_2, WebCryptoRsaPss$RsaPssKeyPair$_init_$ref_3h8asb());
    WebCryptoRsaPss_instance = this;
  }
}
class XdhKeyPair {
  constructor(publicKey, privateKey) {
    this.wni_1 = publicKey;
    this.xni_1 = privateKey;
  }
}
class XdhPublicKey extends WebCryptoEncodableKey {
  constructor(publicKey) {
    super(publicKey, XdhPublicKeyProcessor_getInstance());
    this.anj_1 = publicKey;
  }
}
class XdhPrivateKey extends WebCryptoEncodableKey {
  constructor(privateKey) {
    super(privateKey, XdhPrivateKeyProcessor_getInstance());
    this.dnj_1 = privateKey;
  }
}
class WebCryptoXdh {
  constructor() {
    WebCryptoXdh_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [];
    tmp.enj_1 = new WebCryptoKeyWrapper(tmp_0, WebCryptoXdh$XdhPublicKey$_init_$ref_58foni());
    var tmp_1 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = ['deriveBits'];
    tmp_1.fnj_1 = new WebCryptoKeyWrapper(tmp_2, WebCryptoXdh$XdhPrivateKey$_init_$ref_gt5z3q());
    var tmp_3 = this;
    var tmp0 = this.enj_1.dnh_1;
    // Inline function 'kotlin.collections.plus' call
    var elements = this.fnj_1.dnh_1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp_3.gnj_1 = tmp0.concat(elements);
    var tmp_4 = this;
    tmp_4.hnj_1 = WebCryptoXdh$keyPairWrapper$lambda;
  }
}
class XdhPublicKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    XdhPublicKeyProcessor_instance = null;
    super();
    XdhPublicKeyProcessor_instance = this;
  }
}
class XdhPrivateKeyProcessor extends WebCryptoKeyProcessor {
  constructor() {
    XdhPrivateKeyProcessor_instance = null;
    super();
    XdhPrivateKeyProcessor_instance = this;
  }
}
class WebCryptoKeyWrapper {
  constructor(usages, wrap) {
    this.dnh_1 = usages;
    this.enh_1 = wrap;
  }
}
//endregion
function get_defaultProvider() {
  _init_properties_WebCryptoCryptographyProvider_kt__i22tls();
  return defaultProvider;
}
var defaultProvider;
var WebCrypto$delegate;
var WebCryptoCryptographyProvider_instance;
function WebCryptoCryptographyProvider_getInstance() {
  if (WebCryptoCryptographyProvider_instance === VOID)
    new WebCryptoCryptographyProvider();
  return WebCryptoCryptographyProvider_instance;
}
function defaultProvider$lambda() {
  _init_properties_WebCryptoCryptographyProvider_kt__i22tls();
  return WebCryptoCryptographyProvider_getInstance();
}
var properties_initialized_WebCryptoCryptographyProvider_kt_n89q9u;
function _init_properties_WebCryptoCryptographyProvider_kt__i22tls() {
  if (!properties_initialized_WebCryptoCryptographyProvider_kt_n89q9u) {
    properties_initialized_WebCryptoCryptographyProvider_kt_n89q9u = true;
    defaultProvider = lazy(defaultProvider$lambda);
    WebCrypto$delegate = get_defaultProvider();
  }
}
var AesKeyProcessor_instance;
function AesKeyProcessor_getInstance() {
  if (AesKeyProcessor_instance === VOID)
    new AesKeyProcessor();
  return AesKeyProcessor_instance;
}
function WebCryptoAesCbc$AesCbcKey$_init_$ref_lop2vf() {
  return constructCallableReference((p0) => new AesCbcKey(p0), 1, 0, 108, '<init>');
}
var WebCryptoAesCbc_instance;
function WebCryptoAesCbc_getInstance() {
  if (WebCryptoAesCbc_instance === VOID)
    new WebCryptoAesCbc();
  return WebCryptoAesCbc_instance;
}
function WebCryptoAesCtr$AesCtrKey$_init_$ref_5qzjvv() {
  return constructCallableReference((p0) => new AesCtrKey(p0), 1, 0, 109, '<init>');
}
var WebCryptoAesCtr_instance;
function WebCryptoAesCtr_getInstance() {
  if (WebCryptoAesCtr_instance === VOID)
    new WebCryptoAesCtr();
  return WebCryptoAesCtr_instance;
}
function WebCryptoAesGcm$AesGcmKey$_init_$ref_c6pr3f() {
  return constructCallableReference((p0) => new AesGcmKey(p0), 1, 0, 110, '<init>');
}
var WebCryptoAesGcm_instance;
function WebCryptoAesGcm_getInstance() {
  if (WebCryptoAesGcm_instance === VOID)
    new WebCryptoAesGcm();
  return WebCryptoAesGcm_instance;
}
var Companion_instance;
function Companion_getInstance_12() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function WebCryptoEc$keyPairWrapper$lambda($keyPairWrapper, this$0) {
  return (it) => $keyPairWrapper(this$0.gnh_1.enh_1(it.publicKey), this$0.hnh_1.enh_1(it.privateKey));
}
var EcPublicKeyProcessor_instance;
function EcPublicKeyProcessor_getInstance() {
  if (EcPublicKeyProcessor_instance === VOID)
    new EcPublicKeyProcessor();
  return EcPublicKeyProcessor_instance;
}
var EcPrivateKeyProcessor_instance;
function EcPrivateKeyProcessor_getInstance() {
  if (EcPrivateKeyProcessor_instance === VOID)
    new EcPrivateKeyProcessor();
  return EcPrivateKeyProcessor_instance;
}
function WebCryptoEcdh$EcdhPublicKey$_init_$ref_x8kjxe() {
  return constructCallableReference((p0) => new EcdhPublicKey(p0), 1, 0, 111, '<init>');
}
function WebCryptoEcdh$EcdhPrivateKey$_init_$ref_1xgfie() {
  return constructCallableReference((p0) => new EcdhPrivateKey(p0), 1, 0, 112, '<init>');
}
function WebCryptoEcdh$EcdhKeyPair$_init_$ref_fqllqz() {
  return constructCallableReference((p0, p1) => new EcdhKeyPair(p0, p1), 2, 0, 113, '<init>');
}
var WebCryptoEcdh_instance;
function WebCryptoEcdh_getInstance() {
  if (WebCryptoEcdh_instance === VOID)
    new WebCryptoEcdh();
  return WebCryptoEcdh_instance;
}
function WebCryptoEcdsa$EcdsaPublicKey$_init_$ref_5egfgi() {
  return constructCallableReference((p0) => new EcdsaPublicKey(p0), 1, 0, 114, '<init>');
}
function WebCryptoEcdsa$EcdsaPrivateKey$_init_$ref_8mqrbu() {
  return constructCallableReference((p0) => new EcdsaPrivateKey(p0), 1, 0, 115, '<init>');
}
function WebCryptoEcdsa$EcdsaKeyPair$_init_$ref_l5vyez() {
  return constructCallableReference((p0, p1) => new EcdsaKeyPair(p0, p1), 2, 0, 116, '<init>');
}
var WebCryptoEcdsa_instance;
function WebCryptoEcdsa_getInstance() {
  if (WebCryptoEcdsa_instance === VOID)
    new WebCryptoEcdsa();
  return WebCryptoEcdsa_instance;
}
function WebCryptoEdDsa$EdDsaPublicKey$_init_$ref_xkwfek() {
  return constructCallableReference((p0) => new EdDsaPublicKey(p0), 1, 0, 117, '<init>');
}
function WebCryptoEdDsa$EdDsaPrivateKey$_init_$ref_9jweho() {
  return constructCallableReference((p0) => new EdDsaPrivateKey(p0), 1, 0, 118, '<init>');
}
function WebCryptoEdDsa$keyPairWrapper$lambda(it) {
  return new EdDsaKeyPair(new EdDsaPublicKey(it.publicKey), new EdDsaPrivateKey(it.privateKey));
}
var WebCryptoEdDsa_instance;
function WebCryptoEdDsa_getInstance() {
  if (WebCryptoEdDsa_instance === VOID)
    new WebCryptoEdDsa();
  return WebCryptoEdDsa_instance;
}
var EdPublicKeyProcessor_instance;
function EdPublicKeyProcessor_getInstance() {
  if (EdPublicKeyProcessor_instance === VOID)
    new EdPublicKeyProcessor();
  return EdPublicKeyProcessor_instance;
}
var EdPrivateKeyProcessor_instance;
function EdPrivateKeyProcessor_getInstance() {
  if (EdPrivateKeyProcessor_instance === VOID)
    new EdPrivateKeyProcessor();
  return EdPrivateKeyProcessor_instance;
}
var WebCryptoHkdf_instance;
function WebCryptoHkdf_getInstance() {
  return WebCryptoHkdf_instance;
}
function WebCryptoHmac$HmacKey$_init_$ref_enwl2t() {
  return constructCallableReference((p0) => new HmacKey(p0), 1, 0, 119, '<init>');
}
var WebCryptoHmac_instance;
function WebCryptoHmac_getInstance() {
  if (WebCryptoHmac_instance === VOID)
    new WebCryptoHmac();
  return WebCryptoHmac_instance;
}
var HmacKeyProcessor_instance;
function HmacKeyProcessor_getInstance() {
  if (HmacKeyProcessor_instance === VOID)
    new HmacKeyProcessor();
  return HmacKeyProcessor_instance;
}
var WebCryptoPbkdf2_instance;
function WebCryptoPbkdf2_getInstance() {
  return WebCryptoPbkdf2_instance;
}
function WebCryptoRsa$keyPairWrapper$lambda($keyPairWrapper, this$0) {
  return (it) => $keyPairWrapper(this$0.mni_1.enh_1(it.publicKey), this$0.nni_1.enh_1(it.privateKey));
}
var RsaPublicKeyProcessor_instance;
function RsaPublicKeyProcessor_getInstance() {
  if (RsaPublicKeyProcessor_instance === VOID)
    new RsaPublicKeyProcessor();
  return RsaPublicKeyProcessor_instance;
}
var RsaPrivateKeyProcessor_instance;
function RsaPrivateKeyProcessor_getInstance() {
  if (RsaPrivateKeyProcessor_instance === VOID)
    new RsaPrivateKeyProcessor();
  return RsaPrivateKeyProcessor_instance;
}
function WebCryptoRsaOaep$RsaOaepPublicKey$_init_$ref_2xzkj4() {
  return constructCallableReference((p0) => new RsaOaepPublicKey(p0), 1, 0, 120, '<init>');
}
function WebCryptoRsaOaep$RsaOaepPrivateKey$_init_$ref_ds5c3s() {
  return constructCallableReference((p0) => new RsaOaepPrivateKey(p0), 1, 0, 121, '<init>');
}
function WebCryptoRsaOaep$RsaOaepKeyPair$_init_$ref_whtofn() {
  return constructCallableReference((p0, p1) => new RsaOaepKeyPair(p0, p1), 2, 0, 122, '<init>');
}
var WebCryptoRsaOaep_instance;
function WebCryptoRsaOaep_getInstance() {
  if (WebCryptoRsaOaep_instance === VOID)
    new WebCryptoRsaOaep();
  return WebCryptoRsaOaep_instance;
}
function WebCryptoRsaPkcs1$RsaPkcs1PublicKey$_init_$ref_kiwvhe() {
  return constructCallableReference((p0) => new RsaPkcs1PublicKey(p0), 1, 0, 123, '<init>');
}
function WebCryptoRsaPkcs1$RsaPkcs1PrivateKey$_init_$ref_y0qpl2() {
  return constructCallableReference((p0) => new RsaPkcs1PrivateKey(p0), 1, 0, 124, '<init>');
}
function WebCryptoRsaPkcs1$RsaPkcs1KeyPair$_init_$ref_s062w5() {
  return constructCallableReference((p0, p1) => new RsaPkcs1KeyPair(p0, p1), 2, 0, 125, '<init>');
}
var WebCryptoRsaPkcs1_instance;
function WebCryptoRsaPkcs1_getInstance() {
  if (WebCryptoRsaPkcs1_instance === VOID)
    new WebCryptoRsaPkcs1();
  return WebCryptoRsaPkcs1_instance;
}
function WebCryptoRsaPss$RsaPssPublicKey$_init_$ref_o813fm() {
  return constructCallableReference((p0) => new RsaPssPublicKey(p0), 1, 0, 126, '<init>');
}
function WebCryptoRsaPss$RsaPssPrivateKey$_init_$ref_6l5g3q() {
  return constructCallableReference((p0) => new RsaPssPrivateKey(p0), 1, 0, 127, '<init>');
}
function WebCryptoRsaPss$RsaPssKeyPair$_init_$ref_3h8asb() {
  return constructCallableReference((p0, p1) => new RsaPssKeyPair(p0, p1), 2, 0, 128, '<init>');
}
var WebCryptoRsaPss_instance;
function WebCryptoRsaPss_getInstance() {
  if (WebCryptoRsaPss_instance === VOID)
    new WebCryptoRsaPss();
  return WebCryptoRsaPss_instance;
}
function WebCryptoXdh$XdhPublicKey$_init_$ref_58foni() {
  return constructCallableReference((p0) => new XdhPublicKey(p0), 1, 0, 129, '<init>');
}
function WebCryptoXdh$XdhPrivateKey$_init_$ref_gt5z3q() {
  return constructCallableReference((p0) => new XdhPrivateKey(p0), 1, 0, 130, '<init>');
}
function WebCryptoXdh$keyPairWrapper$lambda(it) {
  return new XdhKeyPair(new XdhPublicKey(it.publicKey), new XdhPrivateKey(it.privateKey));
}
var WebCryptoXdh_instance;
function WebCryptoXdh_getInstance() {
  if (WebCryptoXdh_instance === VOID)
    new WebCryptoXdh();
  return WebCryptoXdh_instance;
}
var XdhPublicKeyProcessor_instance;
function XdhPublicKeyProcessor_getInstance() {
  if (XdhPublicKeyProcessor_instance === VOID)
    new XdhPublicKeyProcessor();
  return XdhPublicKeyProcessor_instance;
}
var XdhPrivateKeyProcessor_instance;
function XdhPrivateKeyProcessor_getInstance() {
  if (XdhPrivateKeyProcessor_instance === VOID)
    new XdhPrivateKeyProcessor();
  return XdhPrivateKeyProcessor_instance;
}
function nonBlocking() {
  throw IllegalStateException.o('Only non-blocking(suspend) calls are supported in WebCrypto');
}
function get_initHook() {
  return initHook;
}
var initHook;
function initHook$init$() {
  CryptographySystem_getInstance().lnc(get_defaultProvider(), 100);
  return Unit_instance;
}
//region block: post-declaration
initMetadataForObject(WebCryptoCryptographyProvider, 'WebCryptoCryptographyProvider');
initMetadataForClass(WebCryptoEncodableKey, 'WebCryptoEncodableKey', VOID, VOID, VOID, [1]);
initMetadataForClass(AesKey, 'AesKey', VOID, VOID, VOID, [1]);
initMetadataForClass(WebCryptoAes, 'WebCryptoAes', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(WebCryptoKeyProcessor, 'WebCryptoKeyProcessor');
initMetadataForObject(AesKeyProcessor, 'AesKeyProcessor');
initMetadataForClass(AesCbcKey, 'AesCbcKey', VOID, VOID, VOID, [1]);
initMetadataForObject(WebCryptoAesCbc, 'WebCryptoAesCbc', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(AesCtrKey, 'AesCtrKey', VOID, VOID, VOID, [1]);
initMetadataForObject(WebCryptoAesCtr, 'WebCryptoAesCtr', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(AesGcmKey, 'AesGcmKey', VOID, VOID, VOID, [1]);
initMetadataForObject(WebCryptoAesGcm, 'WebCryptoAesGcm', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForCompanion(Companion);
initMetadataForClass(WebCryptoDigest, 'WebCryptoDigest', VOID, VOID, [CryptographyAlgorithm, Hasher], [1]);
initMetadataForClass(EcPublicKey, 'EcPublicKey', VOID, VOID, VOID, [1]);
initMetadataForClass(EcPrivateKey, 'EcPrivateKey', VOID, VOID, VOID, [0, 1]);
initMetadataForClass(WebCryptoEc, 'WebCryptoEc', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForObject(EcPublicKeyProcessor, 'EcPublicKeyProcessor');
initMetadataForObject(EcPrivateKeyProcessor, 'EcPrivateKeyProcessor');
initMetadataForClass(EcdhKeyPair, 'EcdhKeyPair');
initMetadataForClass(EcdhPublicKey, 'EcdhPublicKey', VOID, VOID, VOID, [1]);
initMetadataForClass(EcdhPrivateKey, 'EcdhPrivateKey', VOID, VOID, VOID, [1, 0]);
initMetadataForObject(WebCryptoEcdh, 'WebCryptoEcdh', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(EcdsaKeyPair, 'EcdsaKeyPair');
initMetadataForClass(EcdsaPublicKey, 'EcdsaPublicKey', VOID, VOID, VOID, [1]);
initMetadataForClass(EcdsaPrivateKey, 'EcdsaPrivateKey', VOID, VOID, VOID, [0, 1]);
initMetadataForObject(WebCryptoEcdsa, 'WebCryptoEcdsa', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(EdDsaKeyPair, 'EdDsaKeyPair');
initMetadataForClass(EdDsaPublicKey, 'EdDsaPublicKey', VOID, VOID, VOID, [1]);
initMetadataForClass(EdDsaPrivateKey, 'EdDsaPrivateKey', VOID, VOID, VOID, [0, 1]);
initMetadataForObject(WebCryptoEdDsa, 'WebCryptoEdDsa', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForObject(EdPublicKeyProcessor, 'EdPublicKeyProcessor');
initMetadataForObject(EdPrivateKeyProcessor, 'EdPrivateKeyProcessor');
initMetadataForObject(WebCryptoHkdf, 'WebCryptoHkdf', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(HmacKey, 'HmacKey', VOID, VOID, VOID, [1]);
initMetadataForObject(WebCryptoHmac, 'WebCryptoHmac', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForObject(HmacKeyProcessor, 'HmacKeyProcessor');
initMetadataForObject(WebCryptoPbkdf2, 'WebCryptoPbkdf2', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(RsaPublicKey, 'RsaPublicKey', VOID, VOID, VOID, [1]);
initMetadataForClass(RsaPrivateKey, 'RsaPrivateKey', VOID, VOID, VOID, [0, 1]);
initMetadataForClass(WebCryptoRsa, 'WebCryptoRsa', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForObject(RsaPublicKeyProcessor, 'RsaPublicKeyProcessor');
initMetadataForObject(RsaPrivateKeyProcessor, 'RsaPrivateKeyProcessor');
initMetadataForClass(RsaOaepKeyPair, 'RsaOaepKeyPair');
initMetadataForClass(RsaOaepPublicKey, 'RsaOaepPublicKey', VOID, VOID, VOID, [1]);
initMetadataForClass(RsaOaepPrivateKey, 'RsaOaepPrivateKey', VOID, VOID, VOID, [0, 1]);
initMetadataForObject(WebCryptoRsaOaep, 'WebCryptoRsaOaep', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(RsaPkcs1KeyPair, 'RsaPkcs1KeyPair');
initMetadataForClass(RsaPkcs1PublicKey, 'RsaPkcs1PublicKey', VOID, VOID, VOID, [1]);
initMetadataForClass(RsaPkcs1PrivateKey, 'RsaPkcs1PrivateKey', VOID, VOID, VOID, [0, 1]);
initMetadataForObject(WebCryptoRsaPkcs1, 'WebCryptoRsaPkcs1', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(RsaPssKeyPair, 'RsaPssKeyPair');
initMetadataForClass(RsaPssPublicKey, 'RsaPssPublicKey', VOID, VOID, VOID, [1]);
initMetadataForClass(RsaPssPrivateKey, 'RsaPssPrivateKey', VOID, VOID, VOID, [0, 1]);
initMetadataForObject(WebCryptoRsaPss, 'WebCryptoRsaPss', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(XdhKeyPair, 'XdhKeyPair');
initMetadataForClass(XdhPublicKey, 'XdhPublicKey', VOID, VOID, VOID, [1]);
initMetadataForClass(XdhPrivateKey, 'XdhPrivateKey', VOID, VOID, VOID, [0, 1]);
initMetadataForObject(WebCryptoXdh, 'WebCryptoXdh', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForObject(XdhPublicKeyProcessor, 'XdhPublicKeyProcessor');
initMetadataForObject(XdhPrivateKeyProcessor, 'XdhPrivateKeyProcessor');
initMetadataForClass(WebCryptoKeyWrapper, 'WebCryptoKeyWrapper');
//endregion
//region block: init
WebCryptoHkdf_instance = new WebCryptoHkdf();
WebCryptoPbkdf2_instance = new WebCryptoPbkdf2();
//endregion
//region block: eager init
initHook = initHook$init$();
//endregion
//region block: exports
var initHook_0 = {get: get_initHook};
export {
  initHook_0 as initHook,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-provider-webcrypto.mjs.map
