import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  equals2au1ep9vhcato as equals,
  PrimitiveClasses_getInstance13wbaztpz3e2d as PrimitiveClasses_getInstance,
  LazyThreadSafetyMode_PUBLICATION_getInstance23f213579at67 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  await3n7kedgocftsv as await_0,
  jsIsFunction2h24qpa0gp5p3 as jsIsFunction,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  Exceptiondt2hlxn7j7vw as Exception,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  trimEndvvzjdhan75g as trimEnd,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  toBoolean2azvnq2ukl7b3 as toBoolean,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
  Default_getInstancee1f46otjvolq as Default_getInstance,
  toNumber2e2hj9zugjwi2 as toNumber,
  numberToLong2pakxeg38estk as numberToLong,
  fromInt2ii0rejb1w62w as fromInt,
  multiply2k9eolhnz1bjv as multiply,
  ArrayList3it5z8td81qkl as ArrayList,
  promisify1z0ncraq1ipzh as promisify,
  toString1pkumu07cwy4m as toString,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  IntSerializer_getInstance3jyhns9ue706g as IntSerializer_getInstance,
  StringSerializer_getInstance1p9zda6r6kb23 as StringSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  LongSerializer_getInstancepwtz4tlewrfw as LongSerializer_getInstance,
  BooleanSerializer_getInstance22aja3hu17sxf as BooleanSerializer_getInstance,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  JsonElementSerializer_getInstanceqpm5aw7w4cej as JsonElementSerializer_getInstance,
  JsonPrimitive3ttzjh2ft5dnx as JsonPrimitive,
  JsonPrimitive2fp8648nd60dn as JsonPrimitive_0,
  JsonNull_getInstance1i1hv1sbjynto as JsonNull_getInstance,
  JsonObjectBuilder2nl6rv6vdayuk as JsonObjectBuilder,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  $serializer_getInstanceqerrc8r9dxew as $serializer_getInstance,
  getGateway$virtualSuspendBridge5f8gi92ubus as getGateway$virtualSuspendBridge,
  InternalUtility_getInstance3059itx5zexoi as InternalUtility_getInstance,
  DiscordFactory_instance3p84voaa4pkyv as DiscordFactory_instance,
  Message1t83w71f3d5fy as Message,
  Guild3reqjjyk6x66v as Guild,
} from './kdiscord-core.mjs';
import { WebsocketRequest38pjwt1m63ieg as WebsocketRequest } from './khttpclient.mjs';
import {
  launch1c91vkjzdi9sd as launch,
  delayp0o4nsccwai as delay,
  get_isActivehakov5bm97hw as get_isActive,
  Dispatchers_getInstance128lm494a5r5s as Dispatchers_getInstance,
  SupervisorJobythnfxkr3jxc as SupervisorJob,
  CoroutineScopelux7s7zphw7e as CoroutineScope,
  Channel3r72atmcithql as Channel,
  cancel36mj9lv3a0whl as cancel,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.GatewayPayload', this, 4);
    tmp0_serialDesc.g1c('op', true);
    tmp0_serialDesc.g1c('d', true);
    tmp0_serialDesc.g1c('s', true);
    tmp0_serialDesc.g1c('t', true);
    this.qlq_1 = tmp0_serialDesc;
  }
  rlq(encoder, value) {
    var tmp0_desc = this.qlq_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.slq_1 === 0)) {
      tmp1_output.e16(tmp0_desc, 0, value.slq_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.tlq_1 == null)) {
      tmp1_output.m16(tmp0_desc, 1, JsonElementSerializer_getInstance(), value.tlq_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.ulq_1 == null)) {
      tmp1_output.m16(tmp0_desc, 2, IntSerializer_getInstance(), value.ulq_1);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !(value.vlq_1 == null)) {
      tmp1_output.m16(tmp0_desc, 3, StringSerializer_getInstance(), value.vlq_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.rlq(encoder, value instanceof GatewayPayload ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.qlq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u14(tmp0_desc);
    if (tmp8_input.j15()) {
      tmp4_local0 = tmp8_input.z14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i15(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i15(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i15(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i15(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i15(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i15(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp8_input.v14(tmp0_desc);
    return GatewayPayload.wlq(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  uz() {
    return this.qlq_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), get_nullable(JsonElementSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class GatewayPayload {
  constructor() {
    this.slq_1 = 0;
    this.tlq_1 = null;
    this.ulq_1 = null;
    this.vlq_1 = null;
  }
  static wlq(seen0, op, d, s, t, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().qlq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.slq_1 = 0;
    else
      $this.slq_1 = op;
    if (0 === (seen0 & 2))
      $this.tlq_1 = null;
    else
      $this.tlq_1 = d;
    if (0 === (seen0 & 4))
      $this.ulq_1 = null;
    else
      $this.ulq_1 = s;
    if (0 === (seen0 & 8))
      $this.vlq_1 = null;
    else
      $this.vlq_1 = t;
    return $this;
  }
}
class Companion_0 {}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.HelloData', this, 1);
    tmp0_serialDesc.g1c('heartbeatInterval', true);
    this.xlq_1 = tmp0_serialDesc;
  }
  ylq(encoder, value) {
    var tmp0_desc = this.xlq_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.zlq_1 === 0n)) {
      tmp1_output.f16(tmp0_desc, 0, value.zlq_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.ylq(encoder, value instanceof HelloData ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.xlq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0n;
    var tmp5_input = decoder.u14(tmp0_desc);
    if (tmp5_input.j15()) {
      tmp4_local0 = tmp5_input.a15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.a15(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp5_input.v14(tmp0_desc);
    return HelloData.alr(tmp3_bitMask0, tmp4_local0, null);
  }
  uz() {
    return this.xlq_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance()];
  }
}
class HelloData {
  constructor() {
    this.zlq_1 = 0n;
  }
  static alr(seen0, heartbeatInterval, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().xlq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.zlq_1 = 0n;
    else
      $this.zlq_1 = heartbeatInterval;
    return $this;
  }
}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.IdentifyPayload', this, 4);
    tmp0_serialDesc.g1c('token', false);
    tmp0_serialDesc.g1c('properties', true);
    tmp0_serialDesc.g1c('compress', true);
    tmp0_serialDesc.g1c('presence', true);
    this.blr_1 = tmp0_serialDesc;
  }
  clr(encoder, value) {
    var tmp0_desc = this.blr_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    tmp1_output.j16(tmp0_desc, 0, value.dlr_1);
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !equals(value.elr_1, new IdentifyProperties())) {
      tmp1_output.l16(tmp0_desc, 1, $serializer_getInstance_3(), value.elr_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.flr_1 === false)) {
      tmp1_output.b16(tmp0_desc, 2, value.flr_1);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !equals(value.glr_1, new PresenceData())) {
      tmp1_output.l16(tmp0_desc, 3, $serializer_getInstance_4(), value.glr_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.clr(encoder, value instanceof IdentifyPayload ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.blr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u14(tmp0_desc);
    if (tmp8_input.j15()) {
      tmp4_local0 = tmp8_input.e15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.g15(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.w14(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.g15(tmp0_desc, 3, $serializer_getInstance_4(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e15(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.g15(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.w14(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.g15(tmp0_desc, 3, $serializer_getInstance_4(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp8_input.v14(tmp0_desc);
    return IdentifyPayload.hlr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  uz() {
    return this.blr_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_3(), BooleanSerializer_getInstance(), $serializer_getInstance_4()];
  }
}
class IdentifyPayload {
  constructor(token, properties, compress, presence) {
    properties = properties === VOID ? new IdentifyProperties() : properties;
    compress = compress === VOID ? false : compress;
    presence = presence === VOID ? new PresenceData() : presence;
    this.dlr_1 = token;
    this.elr_1 = properties;
    this.flr_1 = compress;
    this.glr_1 = presence;
  }
  static hlr(seen0, token, properties, compress, presence, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_2().blr_1);
    }
    var $this = createThis(this);
    $this.dlr_1 = token;
    if (0 === (seen0 & 2))
      $this.elr_1 = new IdentifyProperties();
    else
      $this.elr_1 = properties;
    if (0 === (seen0 & 4))
      $this.flr_1 = false;
    else
      $this.flr_1 = compress;
    if (0 === (seen0 & 8))
      $this.glr_1 = new PresenceData();
    else
      $this.glr_1 = presence;
    return $this;
  }
}
class Companion_2 {}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.IdentifyProperties', this, 3);
    tmp0_serialDesc.g1c('os', true);
    tmp0_serialDesc.g1c('browser', true);
    tmp0_serialDesc.g1c('device', true);
    this.ilr_1 = tmp0_serialDesc;
  }
  jlr(encoder, value) {
    var tmp0_desc = this.ilr_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.klr_1 === 'Windows')) {
      tmp1_output.j16(tmp0_desc, 0, value.klr_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.llr_1 === 'Chrome')) {
      tmp1_output.j16(tmp0_desc, 1, value.llr_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.mlr_1 === '')) {
      tmp1_output.j16(tmp0_desc, 2, value.mlr_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.jlr(encoder, value instanceof IdentifyProperties ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.ilr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u14(tmp0_desc);
    if (tmp7_input.j15()) {
      tmp4_local0 = tmp7_input.e15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e15(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.e15(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e15(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e15(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.e15(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp7_input.v14(tmp0_desc);
    return IdentifyProperties.nlr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  uz() {
    return this.ilr_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class IdentifyProperties {
  constructor(os, browser, device) {
    os = os === VOID ? 'Windows' : os;
    browser = browser === VOID ? 'Chrome' : browser;
    device = device === VOID ? '' : device;
    this.klr_1 = os;
    this.llr_1 = browser;
    this.mlr_1 = device;
  }
  static nlr(seen0, os, browser, device, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().ilr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.klr_1 = 'Windows';
    else
      $this.klr_1 = os;
    if (0 === (seen0 & 2))
      $this.llr_1 = 'Chrome';
    else
      $this.llr_1 = browser;
    if (0 === (seen0 & 4))
      $this.mlr_1 = '';
    else
      $this.mlr_1 = device;
    return $this;
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.olr_1 = [null, lazy(tmp_0, PresenceData$Companion$$childSerializers$_anonymous__yjkh7f), null, null];
  }
}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.PresenceData', this, 4);
    tmp0_serialDesc.g1c('since', true);
    tmp0_serialDesc.g1c('activities', true);
    tmp0_serialDesc.g1c('status', true);
    tmp0_serialDesc.g1c('afk', true);
    this.plr_1 = tmp0_serialDesc;
  }
  qlr(encoder, value) {
    var tmp0_desc = this.plr_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().olr_1;
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.rlr_1 == null)) {
      tmp1_output.m16(tmp0_desc, 0, LongSerializer_getInstance(), value.rlr_1);
    }
    var tmp;
    if (tmp1_output.q16(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.slr_1;
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l16(tmp0_desc, 1, tmp2_cached[1].d3(), value.slr_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.tlr_1 === 'online')) {
      tmp1_output.j16(tmp0_desc, 2, value.tlr_1);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !(value.ulr_1 === false)) {
      tmp1_output.b16(tmp0_desc, 3, value.ulr_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.qlr(encoder, value instanceof PresenceData ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.plr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_input = decoder.u14(tmp0_desc);
    var tmp9_cached = Companion_getInstance_3().olr_1;
    if (tmp8_input.j15()) {
      tmp4_local0 = tmp8_input.i15(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.g15(tmp0_desc, 1, tmp9_cached[1].d3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.e15(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.w14(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.i15(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.g15(tmp0_desc, 1, tmp9_cached[1].d3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.e15(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.w14(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp8_input.v14(tmp0_desc);
    return PresenceData.vlr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  uz() {
    return this.plr_1;
  }
  w1c() {
    var tmp0_cached = Companion_getInstance_3().olr_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(LongSerializer_getInstance()), tmp0_cached[1].d3(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  }
}
class PresenceData {
  constructor(since, activities, status, afk) {
    Companion_getInstance_3();
    since = since === VOID ? null : since;
    var tmp;
    if (activities === VOID) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = activities;
    }
    activities = tmp;
    status = status === VOID ? 'online' : status;
    afk = afk === VOID ? false : afk;
    this.rlr_1 = since;
    this.slr_1 = activities;
    this.tlr_1 = status;
    this.ulr_1 = afk;
  }
  static vlr(seen0, since, activities, status, afk, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().plr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.rlr_1 = null;
    else
      $this.rlr_1 = since;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.emptyArray' call
      tmp.slr_1 = [];
    } else
      $this.slr_1 = activities;
    if (0 === (seen0 & 4))
      $this.tlr_1 = 'online';
    else
      $this.tlr_1 = status;
    if (0 === (seen0 & 8))
      $this.ulr_1 = false;
    else
      $this.ulr_1 = afk;
    return $this;
  }
}
class Companion_4 {}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.ReadyData', this, 4);
    tmp0_serialDesc.g1c('v', true);
    tmp0_serialDesc.g1c('user', true);
    tmp0_serialDesc.g1c('sessionId', true);
    tmp0_serialDesc.g1c('resumeGatewayUrl', true);
    this.wlr_1 = tmp0_serialDesc;
  }
  xlr(encoder, value) {
    var tmp0_desc = this.wlr_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.v == null)) {
      tmp1_output.m16(tmp0_desc, 0, IntSerializer_getInstance(), value.v);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.user == null)) {
      tmp1_output.m16(tmp0_desc, 1, $serializer_getInstance(), value.user);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.sessionId == null)) {
      tmp1_output.m16(tmp0_desc, 2, StringSerializer_getInstance(), value.sessionId);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !(value.resumeGatewayUrl == null)) {
      tmp1_output.m16(tmp0_desc, 3, StringSerializer_getInstance(), value.resumeGatewayUrl);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.xlr(encoder, value instanceof ReadyData ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.wlr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u14(tmp0_desc);
    if (tmp8_input.j15()) {
      tmp4_local0 = tmp8_input.i15(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i15(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i15(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i15(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.i15(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i15(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i15(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i15(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp8_input.v14(tmp0_desc);
    return ReadyData.ylr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  uz() {
    return this.wlr_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class ReadyData {
  constructor() {
    this.v = null;
    this.user = null;
    this.sessionId = null;
    this.resumeGatewayUrl = null;
  }
  zlr(_set____db54di) {
    this.v = _set____db54di;
  }
  als() {
    return this.v;
  }
  ild(_set____db54di) {
    this.user = _set____db54di;
  }
  h37() {
    return this.user;
  }
  j9r(_set____db54di) {
    this.sessionId = _set____db54di;
  }
  k9r() {
    return this.sessionId;
  }
  bls(_set____db54di) {
    this.resumeGatewayUrl = _set____db54di;
  }
  cls() {
    return this.resumeGatewayUrl;
  }
  static ylr(seen0, v, user, sessionId, resumeGatewayUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().wlr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.v = null;
    else
      $this.v = v;
    if (0 === (seen0 & 2))
      $this.user = null;
    else
      $this.user = user;
    if (0 === (seen0 & 4))
      $this.sessionId = null;
    else
      $this.sessionId = sessionId;
    if (0 === (seen0 & 8))
      $this.resumeGatewayUrl = null;
    else
      $this.resumeGatewayUrl = resumeGatewayUrl;
    return $this;
  }
}
class Companion_5 {}
class $serializer_5 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.ResumePayload', this, 3);
    tmp0_serialDesc.g1c('token', false);
    tmp0_serialDesc.g1c('sessionId', false);
    tmp0_serialDesc.g1c('seq', false);
    this.dls_1 = tmp0_serialDesc;
  }
  els(encoder, value) {
    var tmp0_desc = this.dls_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    tmp1_output.j16(tmp0_desc, 0, value.fls_1);
    tmp1_output.j16(tmp0_desc, 1, value.gls_1);
    tmp1_output.e16(tmp0_desc, 2, value.hls_1);
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.els(encoder, value instanceof ResumePayload ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.dls_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.u14(tmp0_desc);
    if (tmp7_input.j15()) {
      tmp4_local0 = tmp7_input.e15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e15(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z14(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e15(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e15(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z14(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp7_input.v14(tmp0_desc);
    return ResumePayload.ils(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  uz() {
    return this.dls_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class ResumePayload {
  constructor(token, sessionId, seq) {
    this.fls_1 = token;
    this.gls_1 = sessionId;
    this.hls_1 = seq;
  }
  static ils(seen0, token, sessionId, seq, serializationConstructorMarker) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_6().dls_1);
    }
    var $this = createThis(this);
    $this.fls_1 = token;
    $this.gls_1 = sessionId;
    $this.hls_1 = seq;
    return $this;
  }
}
class ReadyEvent {
  constructor(data) {
    this.jls_1 = data;
    this.kls_1 = 'READY';
  }
}
class MessageCreateEvent {
  constructor(message) {
    this.lls_1 = message;
    this.mls_1 = 'MESSAGE_CREATE';
  }
}
class MessageUpdateEvent {
  constructor(message) {
    this.nls_1 = message;
    this.ols_1 = 'MESSAGE_UPDATE';
  }
}
class MessageDeleteGatewayEvent {
  constructor(data) {
    this.pls_1 = data;
    this.qls_1 = 'MESSAGE_DELETE';
  }
}
class GuildCreateEvent {
  constructor(guild) {
    this.rls_1 = guild;
    this.sls_1 = 'GUILD_CREATE';
  }
}
class PresenceUpdateGatewayEvent {
  constructor(data) {
    this.tls_1 = data;
    this.uls_1 = 'PRESENCE_UPDATE';
  }
}
class UnknownEvent {
  constructor(type, raw) {
    this.vls_1 = type;
    this.wls_1 = raw;
  }
}
class Companion_6 {}
class $serializer_6 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.event.MessageDeleteEvent', this, 3);
    tmp0_serialDesc.g1c('id', true);
    tmp0_serialDesc.g1c('channelId', true);
    tmp0_serialDesc.g1c('guildId', true);
    this.xls_1 = tmp0_serialDesc;
  }
  yls(encoder, value) {
    var tmp0_desc = this.xls_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m16(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.channelId == null)) {
      tmp1_output.m16(tmp0_desc, 1, StringSerializer_getInstance(), value.channelId);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.guildId == null)) {
      tmp1_output.m16(tmp0_desc, 2, StringSerializer_getInstance(), value.guildId);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.yls(encoder, value instanceof MessageDeleteEvent ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.xls_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u14(tmp0_desc);
    if (tmp7_input.j15()) {
      tmp4_local0 = tmp7_input.i15(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i15(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i15(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.i15(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i15(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i15(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp7_input.v14(tmp0_desc);
    return MessageDeleteEvent.zls(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  uz() {
    return this.xls_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class MessageDeleteEvent {
  constructor() {
    this.id = null;
    this.channelId = null;
    this.guildId = null;
  }
  v8n(_set____db54di) {
    this.id = _set____db54di;
  }
  w3h() {
    return this.id;
  }
  i9u(_set____db54di) {
    this.channelId = _set____db54di;
  }
  j9u() {
    return this.channelId;
  }
  rl9(_set____db54di) {
    this.guildId = _set____db54di;
  }
  sl9() {
    return this.guildId;
  }
  static zls(seen0, id, channelId, guildId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().xls_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.channelId = null;
    else
      $this.channelId = channelId;
    if (0 === (seen0 & 4))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    return $this;
  }
}
class Companion_7 {}
class $serializer_7 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.event.PresenceUpdateEvent', this, 3);
    tmp0_serialDesc.g1c('user', true);
    tmp0_serialDesc.g1c('guildId', true);
    tmp0_serialDesc.g1c('status', true);
    this.blt_1 = tmp0_serialDesc;
  }
  clt(encoder, value) {
    var tmp0_desc = this.blt_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.m16(tmp0_desc, 0, $serializer_getInstance(), value.user);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.guildId == null)) {
      tmp1_output.m16(tmp0_desc, 1, StringSerializer_getInstance(), value.guildId);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.status == null)) {
      tmp1_output.m16(tmp0_desc, 2, StringSerializer_getInstance(), value.status);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.clt(encoder, value instanceof PresenceUpdateEvent ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.blt_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u14(tmp0_desc);
    if (tmp7_input.j15()) {
      tmp4_local0 = tmp7_input.i15(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i15(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i15(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.i15(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i15(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i15(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp7_input.v14(tmp0_desc);
    return PresenceUpdateEvent.dlt(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  uz() {
    return this.blt_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PresenceUpdateEvent {
  constructor() {
    this.user = null;
    this.guildId = null;
    this.status = null;
  }
  ild(_set____db54di) {
    this.user = _set____db54di;
  }
  h37() {
    return this.user;
  }
  rl9(_set____db54di) {
    this.guildId = _set____db54di;
  }
  sl9() {
    return this.guildId;
  }
  sc2(_set____db54di) {
    this.status = _set____db54di;
  }
  p4q() {
    return this.status;
  }
  static dlt(seen0, user, guildId, status, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().blt_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.user = null;
    else
      $this.user = user;
    if (0 === (seen0 & 2))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    if (0 === (seen0 & 4))
      $this.status = null;
    else
      $this.status = status;
    return $this;
  }
}
class DiscordStream {}
function *start$suspendBridge($completion) {
  return Unit_instance;
}
class DiscordStreamFactory {
  instance(token) {
    return new GatewayClient('https://discord.com/api/v10', token);
  }
  instanceWithApiHost(token, apiHost) {
    return new GatewayClient(apiHost, token);
  }
}
class DiscordStreamListener {}
function onReady(data) {
  return onReady_0(this, data);
}
function onMessageCreate(message) {
  return onMessageCreate_0(this, message);
}
function onMessageUpdate(message) {
  return onMessageUpdate_0(this, message);
}
function onMessageDelete(event) {
  return onMessageDelete_0(this, event);
}
function onGuildCreate(guild) {
  return onGuildCreate_0(this, guild);
}
function onPresenceUpdate(event) {
  return onPresenceUpdate_0(this, event);
}
function onUnknownEvent(type, raw) {
  return onUnknownEvent_0(this, type, raw);
}
function onOpen() {
  return onOpen_0(this);
}
function onClose() {
  return onClose_0(this);
}
function onError(error) {
  return onError_0(this, error);
}
class Companion_8 {
  constructor() {
    this.elt_1 = '10';
    this.flt_1 = 1000n;
    this.glt_1 = 30000n;
  }
}
class GatewayClient {
  constructor(apiHost, token) {
    this.hlt_1 = apiHost;
    this.ilt_1 = token;
    this.jlt_1 = DiscordFactory_instance.instanceWithApiHost(this.ilt_1, this.hlt_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.klt_1 = ArrayList.k2();
    this.llt_1 = null;
    this.mlt_1 = false;
    this.nlt_1 = false;
    this.olt_1 = 0n;
    this.plt_1 = null;
    this.qlt_1 = null;
    this.rlt_1 = null;
    this.slt_1 = true;
    this.tlt_1 = null;
    this.ult_1 = null;
    this.vlt_1 = null;
    this.wlt_1 = 1000n;
    this.xlt_1 = CoroutineScope(Dispatchers_getInstance().t2j_1.xp(SupervisorJob()));
    this.ylt_1 = Channel(2147483647);
    this.zlt_1 = false;
  }
  addEventListener(listener) {
    this.klt_1.j2(listener);
  }
  removeEventListener(listener) {
    this.klt_1.m4(listener);
  }
  isConnected() {
    return this.mlt_1;
  }
  *oia($completion) {
    if (this.mlt_1)
      return Unit_instance;
    this.nlt_1 = false;
    this.xlt_1 = CoroutineScope(Dispatchers_getInstance().t2j_1.xp(SupervisorJob()));
    this.ylt_1 = Channel(2147483647);
    this.wlt_1 = 1000n;
    var tmp = this;
    var tmp_0 = this.xlt_1;
    tmp.vlt_1 = launch(tmp_0, VOID, VOID, GatewayClient$start$slambda(this));
    yield* /*#__NOINLINE__*/connect(this, false, $completion);
    return Unit_instance;
  }
  start() {
    return promisify(($completion) => this.oia($completion));
  }
  *pia($completion) {
    if (this.start === protoOf(GatewayClient).start)
      yield* this.oia($completion);
    else
      yield* await_0(this.start(), $completion);
    return Unit_instance;
  }
  stop() {
    this.nlt_1 = true;
    var tmp0_safe_receiver = this.ult_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k29();
    }
    var tmp1_safe_receiver = this.tlt_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.k29();
    }
    var tmp2_safe_receiver = this.vlt_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.k29();
    }
    try {
      var tmp3_safe_receiver = this.llt_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.g7();
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    cancel(this.xlt_1);
    this.mlt_1 = false;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.klt_1.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      element.onClose();
    }
  }
}
class GatewayEventSerializer {
  alu(type, data) {
    if (data == null) {
      return new UnknownEvent(type, 'null');
    }
    var tmp;
    try {
      var tmp_0;
      switch (type) {
        case 'READY':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_0 = InternalUtility_getInstance().xlo_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_1 = this_0.f10();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_2 = serializer(this_1, createKType(getKClass(ReadyData), arrayOf([]), false));
          var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$0 = this_0.t1o(tmp$ret$2, data);
          tmp_0 = new ReadyEvent(tmp$ret$0);
          break;
        case 'MESSAGE_CREATE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_3 = InternalUtility_getInstance().xlo_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_4 = this_3.f10();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_5 = serializer(this_4, createKType(getKClass(Message), arrayOf([]), false));
          var tmp$ret$6 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$4 = this_3.t1o(tmp$ret$6, data);
          tmp_0 = new MessageCreateEvent(tmp$ret$4);
          break;
        case 'MESSAGE_UPDATE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_6 = InternalUtility_getInstance().xlo_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_7 = this_6.f10();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_8 = serializer(this_7, createKType(getKClass(Message), arrayOf([]), false));
          var tmp$ret$10 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
          var tmp$ret$8 = this_6.t1o(tmp$ret$10, data);
          tmp_0 = new MessageUpdateEvent(tmp$ret$8);
          break;
        case 'MESSAGE_DELETE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_9 = InternalUtility_getInstance().xlo_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_10 = this_9.f10();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_11 = serializer(this_10, createKType(getKClass(MessageDeleteEvent), arrayOf([]), false));
          var tmp$ret$14 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
          var tmp$ret$12 = this_9.t1o(tmp$ret$14, data);
          tmp_0 = new MessageDeleteGatewayEvent(tmp$ret$12);
          break;
        case 'GUILD_CREATE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_12 = InternalUtility_getInstance().xlo_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_13 = this_12.f10();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_14 = serializer(this_13, createKType(getKClass(Guild), arrayOf([]), false));
          var tmp$ret$18 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
          var tmp$ret$16 = this_12.t1o(tmp$ret$18, data);
          tmp_0 = new GuildCreateEvent(tmp$ret$16);
          break;
        case 'PRESENCE_UPDATE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_15 = InternalUtility_getInstance().xlo_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_16 = this_15.f10();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_17 = serializer(this_16, createKType(getKClass(PresenceUpdateEvent), arrayOf([]), false));
          var tmp$ret$22 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
          var tmp$ret$20 = this_15.t1o(tmp$ret$22, data);
          tmp_0 = new PresenceUpdateGatewayEvent(tmp$ret$20);
          break;
        default:
          tmp_0 = new UnknownEvent(type, toString(data));
          break;
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_1 = new UnknownEvent(type, toString(data));
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance_0() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
var $serializer_instance_0;
function $serializer_getInstance_1() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
var $serializer_instance_1;
function $serializer_getInstance_2() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
var $serializer_instance_2;
function $serializer_getInstance_3() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
function PresenceData$Companion$$childSerializers$_anonymous__yjkh7f() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().yg(), StringSerializer_getInstance());
}
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 === VOID)
    new Companion_3();
  return Companion_instance_3;
}
var $serializer_instance_3;
function $serializer_getInstance_4() {
  if ($serializer_instance_3 === VOID)
    new $serializer_3();
  return $serializer_instance_3;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  return Companion_instance_4;
}
var $serializer_instance_4;
function $serializer_getInstance_5() {
  if ($serializer_instance_4 === VOID)
    new $serializer_4();
  return $serializer_instance_4;
}
var Companion_instance_5;
function Companion_getInstance_5() {
  return Companion_instance_5;
}
var $serializer_instance_5;
function $serializer_getInstance_6() {
  if ($serializer_instance_5 === VOID)
    new $serializer_5();
  return $serializer_instance_5;
}
var Companion_instance_6;
function Companion_getInstance_6() {
  return Companion_instance_6;
}
var $serializer_instance_6;
function $serializer_getInstance_7() {
  if ($serializer_instance_6 === VOID)
    new $serializer_6();
  return $serializer_instance_6;
}
var Companion_instance_7;
function Companion_getInstance_7() {
  return Companion_instance_7;
}
var $serializer_instance_7;
function $serializer_getInstance_8() {
  if ($serializer_instance_7 === VOID)
    new $serializer_7();
  return $serializer_instance_7;
}
function *start$virtualSuspendBridge($this, $completion) {
  if (jsIsFunction($this.pia))
    yield* $this.pia($completion);
  else
    yield* await_0($this.start(), $completion);
  return Unit_instance;
}
var DiscordStreamFactory_instance;
function DiscordStreamFactory_getInstance() {
  return DiscordStreamFactory_instance;
}
function onReady_0($this, data) {
}
function onMessageCreate_0($this, message) {
}
function onMessageUpdate_0($this, message) {
}
function onMessageDelete_0($this, event) {
}
function onGuildCreate_0($this, guild) {
}
function onPresenceUpdate_0($this, event) {
}
function onUnknownEvent_0($this, type, raw) {
}
function onOpen_0($this) {
}
function onClose_0($this) {
}
function onError_0($this, error) {
}
var Companion_instance_8;
function Companion_getInstance_8() {
  return Companion_instance_8;
}
function *connect($this, resume, $completion) {
  if ($this.nlt_1)
    return Unit_instance;
  try {
    var tmp;
    if (resume) {
      var tmp0_elvis_lhs = $this.rlt_1;
      tmp = tmp0_elvis_lhs == null ? (yield* fetchGatewayUrl($this, $completion)) : tmp0_elvis_lhs;
    } else {
      tmp = yield* fetchGatewayUrl($this, $completion);
    }
    var base = tmp;
    openWebSocket($this, withQuery($this, base), resume);
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      dispatchError($this, e);
      scheduleReconnect($this, resume);
    } else {
      throw $p;
    }
  }
  return Unit_instance;
}
function *fetchGatewayUrl($this, $completion) {
  var response = yield* getGateway$virtualSuspendBridge($this.jlt_1.gateway(), $completion);
  var tmp0_elvis_lhs = response.data.url;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('Gateway URL is null in response');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function withQuery($this, base) {
  var trimmed = trimEnd(base, charArrayOf([_Char___init__impl__6a9atx(47)]));
  return trimmed + '/?v=10&encoding=json';
}
function openWebSocket($this, wsUrl, resume) {
  var ws = new WebsocketRequest();
  ws.m59(wsUrl);
  var tmp = ws;
  tmp.d59_1 = GatewayClient$openWebSocket$slambda($this);
  var tmp_0 = ws;
  tmp_0.f59_1 = GatewayClient$openWebSocket$lambda($this, resume);
  var tmp_1 = ws;
  tmp_1.g59_1 = GatewayClient$openWebSocket$lambda_0($this);
  var tmp_2 = ws;
  tmp_2.h59_1 = GatewayClient$openWebSocket$lambda_1($this);
  $this.llt_1 = ws;
  var tmp_3 = $this.xlt_1;
  launch(tmp_3, VOID, VOID, GatewayClient$openWebSocket$slambda_0(ws, $this));
}
function *handleFrame($this, raw, $completion) {
  // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
  var this_0 = InternalUtility_getInstance().xlo_1;
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.f10();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(GatewayPayload), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  var payload = this_0.g11(tmp$ret$1, raw);
  var tmp0_safe_receiver = payload.ulq_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    $this.plt_1 = tmp0_safe_receiver;
  }
  switch (payload.slq_1) {
    case 10:
      var tmp2 = payload.tlq_1;
      var tmp$ret$5;
      $l$block: {
        // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayClient.decodeData' call
        if (tmp2 == null) {
          tmp$ret$5 = null;
          break $l$block;
        }
        var tmp;
        try {
          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
          var this_3 = InternalUtility_getInstance().xlo_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.f10();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(HelloData), arrayOf([]), false));
          var tmp$ret$7 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          tmp = this_3.t1o(tmp$ret$7, tmp2);
        } catch ($p) {
          var tmp_0;
          if ($p instanceof Exception) {
            var e = $p;
            tmp_0 = null;
          } else {
            throw $p;
          }
          tmp = tmp_0;
        }
        tmp$ret$5 = tmp;
      }

      var hello = tmp$ret$5;
      var tmp_1 = $this;
      var tmp3_elvis_lhs = hello == null ? null : hello.zlq_1;
      tmp_1.olt_1 = tmp3_elvis_lhs == null ? 0n : tmp3_elvis_lhs;
      startHeartbeat($this);
      if ($this.zlt_1 && !($this.qlt_1 == null) && !($this.plt_1 == null)) {
        yield* sendResume($this, $completion);
      } else {
        yield* sendIdentify($this, $completion);
      }

      break;
    case 1:
      yield* sendHeartbeat($this, $completion);
      break;
    case 11:
      $this.slt_1 = true;
      break;
    case 7:
      closeSocketForReconnect($this);
      scheduleReconnect($this, true);
      break;
    case 9:
      var tmp_2 = payload.tlq_1;
      var tmp4_safe_receiver = tmp_2 instanceof JsonPrimitive ? tmp_2 : null;
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.j1r();
      var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : toBoolean(tmp5_safe_receiver);
      var resumable = tmp6_elvis_lhs == null ? false : tmp6_elvis_lhs;
      if (!resumable) {
        $this.qlt_1 = null;
        $this.plt_1 = null;
      }

      closeSocketForReconnect($this);
      scheduleReconnect($this, resumable);
      break;
    case 0:
      dispatch($this, payload);
      break;
    default:
      break;
  }
  return Unit_instance;
}
function dispatch($this, payload) {
  var tmp0_elvis_lhs = payload.vlq_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return Unit_instance;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var type = tmp;
  if (type === 'READY') {
    var tmp2 = payload.tlq_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayClient.decodeData' call
      if (tmp2 == null) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      try {
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
        var this_0 = InternalUtility_getInstance().xlo_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(ReadyData), arrayOf([]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        tmp_0 = this_0.t1o(tmp$ret$2, tmp2);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Exception) {
          var e = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var ready = tmp$ret$0;
    if (!(ready == null)) {
      $this.qlt_1 = ready.sessionId;
      $this.rlt_1 = ready.resumeGatewayUrl;
      $this.mlt_1 = true;
      $this.wlt_1 = 1000n;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $this.klt_1.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        element.onReady(ready);
      }
    }
    return Unit_instance;
  }
  if (type === 'RESUMED') {
    $this.mlt_1 = true;
    $this.wlt_1 = 1000n;
    return Unit_instance;
  }
  var event = GatewayEventSerializer_instance.alu(type, payload.tlq_1);
  if (event instanceof ReadyEvent) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = $this.klt_1.l1();
    while (_iterator__ex2g4s_0.m1()) {
      var element_0 = _iterator__ex2g4s_0.n1();
      element_0.onReady(event.jls_1);
    }
  } else {
    if (event instanceof MessageCreateEvent) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = $this.klt_1.l1();
      while (_iterator__ex2g4s_1.m1()) {
        var element_1 = _iterator__ex2g4s_1.n1();
        element_1.onMessageCreate(event.lls_1);
      }
    } else {
      if (event instanceof MessageUpdateEvent) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_2 = $this.klt_1.l1();
        while (_iterator__ex2g4s_2.m1()) {
          var element_2 = _iterator__ex2g4s_2.n1();
          element_2.onMessageUpdate(event.nls_1);
        }
      } else {
        if (event instanceof MessageDeleteGatewayEvent) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_3 = $this.klt_1.l1();
          while (_iterator__ex2g4s_3.m1()) {
            var element_3 = _iterator__ex2g4s_3.n1();
            element_3.onMessageDelete(event.pls_1);
          }
        } else {
          if (event instanceof GuildCreateEvent) {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_4 = $this.klt_1.l1();
            while (_iterator__ex2g4s_4.m1()) {
              var element_4 = _iterator__ex2g4s_4.n1();
              element_4.onGuildCreate(event.rls_1);
            }
          } else {
            if (event instanceof PresenceUpdateGatewayEvent) {
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_5 = $this.klt_1.l1();
              while (_iterator__ex2g4s_5.m1()) {
                var element_5 = _iterator__ex2g4s_5.n1();
                element_5.onPresenceUpdate(event.tls_1);
              }
            } else {
              if (event instanceof UnknownEvent) {
                // Inline function 'kotlin.collections.forEach' call
                var _iterator__ex2g4s_6 = $this.klt_1.l1();
                while (_iterator__ex2g4s_6.m1()) {
                  var element_6 = _iterator__ex2g4s_6.n1();
                  element_6.onUnknownEvent(event.vls_1, event.wls_1);
                }
              }
            }
          }
        }
      }
    }
  }
}
function startHeartbeat($this) {
  var tmp0_safe_receiver = $this.tlt_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    tmp0_safe_receiver.k29();
  }
  $this.slt_1 = true;
  var tmp = $this;
  var tmp_0 = $this.xlt_1;
  tmp.tlt_1 = launch(tmp_0, VOID, VOID, GatewayClient$startHeartbeat$slambda($this));
}
function *sendHeartbeat($this, $completion) {
  var tmp0_safe_receiver = $this.plt_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = JsonPrimitive_0(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  var seq = tmp1_elvis_lhs == null ? JsonNull_getInstance() : tmp1_elvis_lhs;
  // Inline function 'kotlinx.serialization.json.buildJsonObject' call
  var builder = new JsonObjectBuilder();
  builder.b1s('op', JsonPrimitive_0(1));
  builder.b1s('d', seq);
  var json = builder.f1q();
  var tmp2_safe_receiver = $this.llt_1;
  if (tmp2_safe_receiver == null)
    null;
  else
    yield* tmp2_safe_receiver.o59(json.toString(), $completion);
  return Unit_instance;
}
function *sendIdentify($this, $completion) {
  var identify = new IdentifyPayload($this.ilt_1);
  // Inline function 'kotlinx.serialization.json.buildJsonObject' call
  var builder = new JsonObjectBuilder();
  builder.b1s('op', JsonPrimitive_0(2));
  // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
  var this_0 = InternalUtility_getInstance().xlo_1;
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.f10();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(IdentifyPayload), arrayOf([]), false));
  var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  var tmp$ret$2 = this_0.s1o(tmp$ret$3, identify);
  builder.b1s('d', tmp$ret$2);
  var json = builder.f1q();
  var tmp0_safe_receiver = $this.llt_1;
  if (tmp0_safe_receiver == null)
    null;
  else
    yield* tmp0_safe_receiver.o59(json.toString(), $completion);
  return Unit_instance;
}
function *sendResume($this, $completion) {
  var resume = new ResumePayload($this.ilt_1, ensureNotNull($this.qlt_1), ensureNotNull($this.plt_1));
  // Inline function 'kotlinx.serialization.json.buildJsonObject' call
  var builder = new JsonObjectBuilder();
  builder.b1s('op', JsonPrimitive_0(6));
  // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
  var this_0 = InternalUtility_getInstance().xlo_1;
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.f10();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(ResumePayload), arrayOf([]), false));
  var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  var tmp$ret$2 = this_0.s1o(tmp$ret$3, resume);
  builder.b1s('d', tmp$ret$2);
  var json = builder.f1q();
  var tmp0_safe_receiver = $this.llt_1;
  if (tmp0_safe_receiver == null)
    null;
  else
    yield* tmp0_safe_receiver.o59(json.toString(), $completion);
  return Unit_instance;
}
function closeSocketForReconnect($this) {
  $this.mlt_1 = false;
  var tmp0_safe_receiver = $this.tlt_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    tmp0_safe_receiver.k29();
  }
  try {
    var tmp1_safe_receiver = $this.llt_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.g7();
    }
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
    } else {
      throw $p;
    }
  }
}
function scheduleReconnect($this, resume) {
  if ($this.nlt_1)
    return Unit_instance;
  var tmp0_safe_receiver = $this.ult_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    tmp0_safe_receiver.k29();
  }
  var tmp = $this;
  var tmp_0 = $this.xlt_1;
  tmp.ult_1 = launch(tmp_0, VOID, VOID, GatewayClient$scheduleReconnect$slambda($this, resume));
}
function dispatchError($this, e) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = $this.klt_1.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    element.onError(e);
  }
}
function GatewayClient$start$slambda(this$0) {
  return constructCallableReference(($this$launch, $completion) => orPromise($completion, function *($completion) {
    var _iterator__ex2g4s = this$0.ylt_1.l1();
    while (yield* _iterator__ex2g4s.j2n($completion)) {
      var raw = _iterator__ex2g4s.n1();
      try {
        yield* /*#__NOINLINE__*/handleFrame(this$0, raw, $completion);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          dispatchError(this$0, e);
        } else {
          throw $p;
        }
      }
    }
    return Unit_instance;
  }), 1);
}
function GatewayClient$openWebSocket$slambda(this$0) {
  return constructCallableReference((message, $completion) => orPromise($completion, function *($completion) {
    this$0.ylt_1.y2n(message);
    return Unit_instance;
  }), 1);
}
function GatewayClient$openWebSocket$lambda(this$0, $resume) {
  return (it) => {
    this$0.zlt_1 = $resume;
    return Unit_instance;
  };
}
function GatewayClient$openWebSocket$lambda_0(this$0) {
  return (it) => {
    this$0.mlt_1 = false;
    var tmp0_safe_receiver = this$0.tlt_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k29();
    }
    var tmp;
    if (!this$0.nlt_1) {
      scheduleReconnect(this$0, !(this$0.qlt_1 == null));
      tmp = Unit_instance;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this$0.klt_1.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        element.onClose();
      }
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function GatewayClient$openWebSocket$lambda_1(this$0) {
  return (error) => {
    dispatchError(this$0, error);
    return Unit_instance;
  };
}
function GatewayClient$openWebSocket$slambda_0($ws, this$0) {
  return constructCallableReference(($this$launch, $completion) => orPromise($completion, function *($completion) {
    try {
      yield* $ws.n59($completion);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        dispatchError(this$0, e);
        if (!this$0.nlt_1) {
          scheduleReconnect(this$0, !(this$0.qlt_1 == null));
        }
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }), 1);
}
function GatewayClient$startHeartbeat$slambda(this$0) {
  return constructCallableReference(($this$launch, $completion) => orPromise($completion, function *($completion) {
    var tmp0 = this$0.olt_1;
    // Inline function 'kotlin.Long.times' call
    var other = Default_getInstance().yr();
    var tmp$ret$0 = toNumber(tmp0) * other;
    yield* delay(numberToLong(tmp$ret$0), $completion);
    $l$loop: while (get_isActive($this$launch)) {
      if (!this$0.slt_1) {
        closeSocketForReconnect(this$0);
        scheduleReconnect(this$0, true);
        break $l$loop;
      }
      this$0.slt_1 = false;
      yield* /*#__NOINLINE__*/sendHeartbeat(this$0, $completion);
      yield* delay(this$0.olt_1, $completion);
    }
    return Unit_instance;
  }), 1);
}
function GatewayClient$scheduleReconnect$slambda(this$0, $resume) {
  return constructCallableReference(($this$launch, $completion) => orPromise($completion, function *($completion) {
    yield* delay(this$0.wlt_1, $completion);
    var tmp = this$0;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this$0.wlt_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = multiply(this_0, fromInt(2));
    tmp.wlt_1 = a <= 30000n ? a : 30000n;
    var tmp_0;
    if (this$0.nlt_1) {
      return Unit_instance;
    }
    yield* /*#__NOINLINE__*/connect(this$0, $resume, $completion);
    return Unit_instance;
  }), 1);
}
var GatewayEventSerializer_instance;
function GatewayEventSerializer_getInstance() {
  return GatewayEventSerializer_instance;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).x1c = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(GatewayPayload, 'GatewayPayload', GatewayPayload, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).x1c = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(HelloData, 'HelloData', HelloData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).x1c = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(IdentifyPayload, 'IdentifyPayload', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).x1c = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(IdentifyProperties, 'IdentifyProperties', IdentifyProperties, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).x1c = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PresenceData, 'PresenceData', PresenceData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_4);
protoOf($serializer_4).x1c = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ReadyData, 'ReadyData', ReadyData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_5);
protoOf($serializer_5).x1c = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ResumePayload, 'ResumePayload', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForClass(ReadyEvent, 'ReadyEvent');
initMetadataForClass(MessageCreateEvent, 'MessageCreateEvent');
initMetadataForClass(MessageUpdateEvent, 'MessageUpdateEvent');
initMetadataForClass(MessageDeleteGatewayEvent, 'MessageDeleteGatewayEvent');
initMetadataForClass(GuildCreateEvent, 'GuildCreateEvent');
initMetadataForClass(PresenceUpdateGatewayEvent, 'PresenceUpdateGatewayEvent');
initMetadataForClass(UnknownEvent, 'UnknownEvent');
initMetadataForCompanion(Companion_6);
protoOf($serializer_6).x1c = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MessageDeleteEvent, 'MessageDeleteEvent', MessageDeleteEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_7);
protoOf($serializer_7).x1c = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PresenceUpdateEvent, 'PresenceUpdateEvent', PresenceUpdateEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForInterface(DiscordStream, 'DiscordStream', VOID, VOID, VOID, [0, 1]);
initMetadataForObject(DiscordStreamFactory, 'DiscordStreamFactory');
initMetadataForInterface(DiscordStreamListener, 'DiscordStreamListener');
initMetadataForCompanion(Companion_8);
initMetadataForClass(GatewayClient, 'GatewayClient', VOID, VOID, [DiscordStream], [0, 1]);
initMetadataForObject(GatewayEventSerializer, 'GatewayEventSerializer');
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Companion_instance_4 = new Companion_4();
Companion_instance_5 = new Companion_5();
Companion_instance_6 = new Companion_6();
Companion_instance_7 = new Companion_7();
DiscordStreamFactory_instance = new DiscordStreamFactory();
Companion_instance_8 = new Companion_8();
GatewayEventSerializer_instance = new GatewayEventSerializer();
//endregion
//region block: exports
DiscordStreamFactory.getInstance = DiscordStreamFactory_getInstance;
var DefaultImpls = DiscordStreamListener.DefaultImpls || (DiscordStreamListener.DefaultImpls = {});
DefaultImpls.onReady = onReady_0;
DefaultImpls.onMessageCreate = onMessageCreate_0;
DefaultImpls.onMessageUpdate = onMessageUpdate_0;
DefaultImpls.onMessageDelete = onMessageDelete_0;
DefaultImpls.onGuildCreate = onGuildCreate_0;
DefaultImpls.onPresenceUpdate = onPresenceUpdate_0;
DefaultImpls.onUnknownEvent = onUnknownEvent_0;
DefaultImpls.onOpen = onOpen_0;
DefaultImpls.onClose = onClose_0;
DefaultImpls.onError = onError_0;
export {
  ReadyData as ReadyData,
  MessageDeleteEvent as MessageDeleteEvent,
  PresenceUpdateEvent as PresenceUpdateEvent,
  DiscordStream as DiscordStream,
  DiscordStreamFactory as DiscordStreamFactory,
  DiscordStreamListener as DiscordStreamListener,
};
export {
  DiscordStreamFactory_instance as DiscordStreamFactory_instance3epwc3nvdimf2,
  start$virtualSuspendBridge as start$virtualSuspendBridge3dhh89ntkmou,
  onGuildCreate as onGuildCreate2agim3jta719d,
  onPresenceUpdate as onPresenceUpdate2oawvv64c70ck,
  onReady as onReady2foukhp3y1p9x,
  onUnknownEvent as onUnknownEvent3tjmjxhxdg9a0,
  DiscordStreamListener as DiscordStreamListener170eqfdcih9sr,
};
//endregion

//# sourceMappingURL=kdiscord-stream.mjs.map
