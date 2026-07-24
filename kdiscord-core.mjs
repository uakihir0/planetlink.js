import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  defineProp3ur6h3slcvq4x as defineProp,
  VOID3gxj6tk5isa35 as VOID,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  await335x4cz7ixnm4 as await_0,
  jsIsFunction2h24qpa0gp5p3 as jsIsFunction,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  createThis2j2avj17cvnv2 as createThis,
  getKClass3t8tygqu4lcxf as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance20ynwq7b0awd8 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  PrimitiveClasses_getInstance143761yrsca9q as PrimitiveClasses_getInstance,
  toInt2q8uldh7sc951 as toInt,
  Companion_getInstance10dt578q09swj as Companion_getInstance,
  toDouble1kn912gjoizjp as toDouble,
  numberToLong2pakxeg38estk as numberToLong,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  ArrayList3it5z8td81qkl as ArrayList,
  to2cs3ny02qtbcb as to,
  toMap1vec9topfei08 as toMap,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  println2shhhgwwt4c61 as println,
  Enum3alwj03lh1n41 as Enum,
  constructCallableReference23y65rf941mch as constructCallableReference,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  promisify1z0ncraq1ipzh as promisify,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  copyToArray2j022khrow2yi as copyToArray,
  UnsupportedOperationException2tkumpmhredt3 as UnsupportedOperationException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstancerxlnwnlbnwri as StringSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  IntSerializer_getInstance3hkg1llvt1c0z as IntSerializer_getInstance,
  BooleanSerializer_getInstance3sa31xxwvx0ks as BooleanSerializer_getInstance,
  DoubleSerializer_getInstance266heg1fkw2px as DoubleSerializer_getInstance,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  buildClassSerialDescriptors2a6xdp6mrtw as buildClassSerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  SerializersModuleBuilderfxsfdohcdipc as SerializersModuleBuilder,
  serializer1i4e9ym37oxmo as serializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  JsonObjectee06ihoeeiqj as JsonObject,
  JsonArray2urf8ey7u44sd as JsonArray,
  get_boolean37ml8jnzy6rg3 as get_boolean,
  get_booleanOrNull376axlcpdhkmo as get_booleanOrNull,
  get_double1785hcxaminy4 as get_double,
  get_doubleOrNull2fo14gjg922um as get_doubleOrNull,
  get_float1xtaobzj8js8m as get_float,
  get_floatOrNull2q2ov24agcvgt as get_floatOrNull,
  get_long3gjrkvy7fxjbp as get_long,
  get_longOrNull1kg1ha9scz5pa as get_longOrNull,
  get_int2y6jf75ftml0w as get_int,
  get_intOrNulld29i64b3udf as get_intOrNull,
  JsonPrimitive3ttzjh2ft5dnx as JsonPrimitive,
  JsonDecoder1rijst5ne6qla as JsonDecoder,
  Builtins_getInstance20rb8vlipccdc as Builtins_getInstance,
  Jsonsmkyu9xjl7fv as Json,
  get_jsonObject2u4z2ch1uuca9 as get_jsonObject,
  get_jsonPrimitivez17tyd5rw1ql as get_jsonPrimitive,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import {
  Dispatchers_getInstance20p7pyqnrepag as Dispatchers_getInstance,
  withContextqz5k6d9p9xx5 as withContext,
} from './kotlinx-coroutines-core.mjs';
import {
  encodeURLPathPart6y0hlser8v0t as encodeURLPathPart,
  Application_getInstance17ubdrb0i0ohu as Application_getInstance,
} from './ktor-ktor-http.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    this.DEFAULT_API_HOST = 'https://discord.com/api/v10';
  }
  wkl() {
    return this.DEFAULT_API_HOST;
  }
}
class Discord {}
class DiscordException extends Exception {
  static ckm(e) {
    var $this = this.ye(e);
    init_work_socialhub_kdiscord_DiscordException($this);
    return $this;
  }
  static dkm(status, body) {
    var $this = this.ve('status code: ' + status + ', body: ' + body);
    init_work_socialhub_kdiscord_DiscordException($this);
    $this.ykl_1 = status;
    $this.zkl_1 = body;
    return $this;
  }
}
class DiscordFactory {
  instance(token) {
    return new DiscordImpl('https://discord.com/api/v10', token);
  }
  instanceWithApiHost(token, apiHost) {
    return new DiscordImpl(apiHost, token);
  }
}
class ChannelsResource {}
function *getChannel$suspendBridge(channelId, $completion) {
}
function *listDmChannels$suspendBridge($completion) {
}
function *createDm$suspendBridge(request, $completion) {
}
class GatewayResource {}
function *getGateway$suspendBridge($completion) {
}
class GuildsResource {}
function *getCurrentUserGuilds$suspendBridge(request, $completion) {
}
function *getGuild$suspendBridge(guildId, $completion) {
}
function *listGuildChannels$suspendBridge(guildId, $completion) {
}
class MessagesResource {}
function *list$suspendBridge(request, $completion) {
}
function *get$suspendBridge(channelId, messageId, $completion) {
}
function *create$suspendBridge(request, $completion) {
}
function *edit$suspendBridge(request, $completion) {
}
function *delete$suspendBridge(channelId, messageId, $completion) {
}
class ReactionsResource {}
function *createReaction$suspendBridge(channelId, messageId, emoji, $completion) {
}
function *deleteOwnReaction$suspendBridge(channelId, messageId, emoji, $completion) {
}
function *getReactions$suspendBridge(channelId, messageId, emoji, $completion) {
}
function *deleteAllReactions$suspendBridge(channelId, messageId, $completion) {
}
class UsersResource {}
function *getMe$suspendBridge($completion) {
}
function *getUser$suspendBridge(userId, $completion) {
}
class ChannelsCreateDmRequest {
  constructor(recipientId) {
    this.recipientId = recipientId;
  }
  eko(_set____db54di) {
    this.recipientId = _set____db54di;
  }
  tah() {
    return this.recipientId;
  }
}
class GuildsListRequest {
  constructor() {
    this.before = null;
    this.after = null;
    this.limit = null;
    this.withCounts = null;
  }
  fko(_set____db54di) {
    this.before = _set____db54di;
  }
  ncx() {
    return this.before;
  }
  gko(_set____db54di) {
    this.after = _set____db54di;
  }
  pcx() {
    return this.after;
  }
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  hko(_set____db54di) {
    this.withCounts = _set____db54di;
  }
  iko() {
    return this.withCounts;
  }
}
class MessagesCreateRequest {
  constructor(channelId) {
    this.channelId = channelId;
    this.content = null;
    this.tts = null;
    this.replyMessageId = null;
    this.files = null;
  }
  vem(_set____db54di) {
    this.channelId = _set____db54di;
  }
  p9g() {
    return this.channelId;
  }
  qbo(_set____db54di) {
    this.content = _set____db54di;
  }
  y1o() {
    return this.content;
  }
  jko(_set____db54di) {
    this.tts = _set____db54di;
  }
  kko() {
    return this.tts;
  }
  lko(_set____db54di) {
    this.replyMessageId = _set____db54di;
  }
  mko() {
    return this.replyMessageId;
  }
  nko(_set____db54di) {
    this.files = _set____db54di;
  }
  vag() {
    return this.files;
  }
}
class MessagesEditRequest {
  constructor(channelId, messageId) {
    this.channelId = channelId;
    this.messageId = messageId;
    this.content = null;
  }
  vem(_set____db54di) {
    this.channelId = _set____db54di;
  }
  p9g() {
    return this.channelId;
  }
  n6r(_set____db54di) {
    this.messageId = _set____db54di;
  }
  f6r() {
    return this.messageId;
  }
  qbo(_set____db54di) {
    this.content = _set____db54di;
  }
  y1o() {
    return this.content;
  }
}
class MessagesListRequest {
  constructor(channelId) {
    this.channelId = channelId;
    this.limit = null;
    this.around = null;
    this.before = null;
    this.after = null;
  }
  vem(_set____db54di) {
    this.channelId = _set____db54di;
  }
  p9g() {
    return this.channelId;
  }
  o63(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  oko(_set____db54di) {
    this.around = _set____db54di;
  }
  pko() {
    return this.around;
  }
  fko(_set____db54di) {
    this.before = _set____db54di;
  }
  ncx() {
    return this.before;
  }
  gko(_set____db54di) {
    this.after = _set____db54di;
  }
  pcx() {
    return this.after;
  }
}
class Companion_0 {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.api.response.gateway.GatewayResponse', this, 1);
    tmp0_serialDesc.n1b('url', true);
    this.qko_1 = tmp0_serialDesc;
  }
  rko(encoder, value) {
    var tmp0_desc = this.qko_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.rko(encoder, value instanceof GatewayResponse ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.qko_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.v13(tmp0_desc);
    if (tmp5_input.k14()) {
      tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp5_input.w13(tmp0_desc);
    return GatewayResponse.sko(tmp3_bitMask0, tmp4_local0, null);
  }
  dz() {
    return this.qko_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class GatewayResponse {
  constructor() {
    this.url = null;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  static sko(seen0, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().qko_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
}
class Companion_1 {}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Attachment', this, 12);
    tmp0_serialDesc.n1b('id', true);
    tmp0_serialDesc.n1b('filename', true);
    tmp0_serialDesc.n1b('description', true);
    tmp0_serialDesc.n1b('contentType', true);
    tmp0_serialDesc.n1b('size', true);
    tmp0_serialDesc.n1b('url', true);
    tmp0_serialDesc.n1b('proxyUrl', true);
    tmp0_serialDesc.n1b('height', true);
    tmp0_serialDesc.n1b('width', true);
    tmp0_serialDesc.n1b('ephemeral', true);
    tmp0_serialDesc.n1b('durationSecs', true);
    tmp0_serialDesc.n1b('waveform', true);
    this.tko_1 = tmp0_serialDesc;
  }
  uko(encoder, value) {
    var tmp0_desc = this.tko_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.filename == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.filename);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.contentType == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.contentType);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.size == null)) {
      tmp1_output.n15(tmp0_desc, 4, IntSerializer_getInstance(), value.size);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.proxyUrl == null)) {
      tmp1_output.n15(tmp0_desc, 6, StringSerializer_getInstance(), value.proxyUrl);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.height == null)) {
      tmp1_output.n15(tmp0_desc, 7, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.width == null)) {
      tmp1_output.n15(tmp0_desc, 8, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.ephemeral == null)) {
      tmp1_output.n15(tmp0_desc, 9, BooleanSerializer_getInstance(), value.ephemeral);
    }
    if (tmp1_output.r15(tmp0_desc, 10) ? true : !(value.durationSecs == null)) {
      tmp1_output.n15(tmp0_desc, 10, DoubleSerializer_getInstance(), value.durationSecs);
    }
    if (tmp1_output.r15(tmp0_desc, 11) ? true : !(value.waveform == null)) {
      tmp1_output.n15(tmp0_desc, 11, StringSerializer_getInstance(), value.waveform);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.uko(encoder, value instanceof Attachment ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.tko_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_input = decoder.v13(tmp0_desc);
    if (tmp16_input.k14()) {
      tmp4_local0 = tmp16_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.j14(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.j14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.j14(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.j14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.j14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.j14(tmp0_desc, 10, DoubleSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp16_input.j14(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.j14(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.j14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.j14(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.j14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.j14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.j14(tmp0_desc, 10, DoubleSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp16_input.j14(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp16_input.w13(tmp0_desc);
    return Attachment.vko(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  dz() {
    return this.tko_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Attachment {
  constructor() {
    this.id = null;
    this.filename = null;
    this.description = null;
    this.contentType = null;
    this.size = null;
    this.url = null;
    this.proxyUrl = null;
    this.height = null;
    this.width = null;
    this.ephemeral = null;
    this.durationSecs = null;
    this.waveform = null;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  oex(_set____db54di) {
    this.filename = _set____db54di;
  }
  pex() {
    return this.filename;
  }
  z36(_set____db54di) {
    this.description = _set____db54di;
  }
  j36() {
    return this.description;
  }
  kjh(_set____db54di) {
    this.contentType = _set____db54di;
  }
  y4a() {
    return this.contentType;
  }
  c8e(_set____db54di) {
    this.size = _set____db54di;
  }
  l2() {
    return this.size;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  wko(_set____db54di) {
    this.proxyUrl = _set____db54di;
  }
  xko() {
    return this.proxyUrl;
  }
  o38(_set____db54di) {
    this.height = _set____db54di;
  }
  p38() {
    return this.height;
  }
  m38(_set____db54di) {
    this.width = _set____db54di;
  }
  n38() {
    return this.width;
  }
  yko(_set____db54di) {
    this.ephemeral = _set____db54di;
  }
  vjq() {
    return this.ephemeral;
  }
  zko(_set____db54di) {
    this.durationSecs = _set____db54di;
  }
  akp() {
    return this.durationSecs;
  }
  bkp(_set____db54di) {
    this.waveform = _set____db54di;
  }
  ckp() {
    return this.waveform;
  }
  static vko(seen0, id, filename, description, contentType, size, url, proxyUrl, height, width, ephemeral, durationSecs, waveform, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().tko_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.filename = null;
    else
      $this.filename = filename;
    if (0 === (seen0 & 4))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 8))
      $this.contentType = null;
    else
      $this.contentType = contentType;
    if (0 === (seen0 & 16))
      $this.size = null;
    else
      $this.size = size;
    if (0 === (seen0 & 32))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 64))
      $this.proxyUrl = null;
    else
      $this.proxyUrl = proxyUrl;
    if (0 === (seen0 & 128))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen0 & 256))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen0 & 512))
      $this.ephemeral = null;
    else
      $this.ephemeral = ephemeral;
    if (0 === (seen0 & 1024))
      $this.durationSecs = null;
    else
      $this.durationSecs = durationSecs;
    if (0 === (seen0 & 2048))
      $this.waveform = null;
    else
      $this.waveform = waveform;
    return $this;
  }
}
class Companion_2 {
  constructor() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.dkp_1 = [null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Channel$Companion$$childSerializers$_anonymous__ao7gx3), null, null, null, null];
  }
}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Channel', this, 16);
    tmp0_serialDesc.n1b('id', true);
    tmp0_serialDesc.n1b('type', true);
    tmp0_serialDesc.n1b('guildId', true);
    tmp0_serialDesc.n1b('position', true);
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('topic', true);
    tmp0_serialDesc.n1b('nsfw', true);
    tmp0_serialDesc.n1b('lastMessageId', true);
    tmp0_serialDesc.n1b('bitrate', true);
    tmp0_serialDesc.n1b('userLimit', true);
    tmp0_serialDesc.n1b('rateLimitPerUser', true);
    tmp0_serialDesc.n1b('recipients', true);
    tmp0_serialDesc.n1b('icon', true);
    tmp0_serialDesc.n1b('ownerId', true);
    tmp0_serialDesc.n1b('parentId', true);
    tmp0_serialDesc.n1b('lastPinTimestamp', true);
    this.ekp_1 = tmp0_serialDesc;
  }
  fkp(encoder, value) {
    var tmp0_desc = this.ekp_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().dkp_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.n15(tmp0_desc, 1, IntSerializer_getInstance(), value.type);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.guildId == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.guildId);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.position == null)) {
      tmp1_output.n15(tmp0_desc, 3, IntSerializer_getInstance(), value.position);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.topic == null)) {
      tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.topic);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.nsfw == null)) {
      tmp1_output.n15(tmp0_desc, 6, BooleanSerializer_getInstance(), value.nsfw);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.lastMessageId == null)) {
      tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.lastMessageId);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.bitrate == null)) {
      tmp1_output.n15(tmp0_desc, 8, IntSerializer_getInstance(), value.bitrate);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.userLimit == null)) {
      tmp1_output.n15(tmp0_desc, 9, IntSerializer_getInstance(), value.userLimit);
    }
    if (tmp1_output.r15(tmp0_desc, 10) ? true : !(value.rateLimitPerUser == null)) {
      tmp1_output.n15(tmp0_desc, 10, IntSerializer_getInstance(), value.rateLimitPerUser);
    }
    if (tmp1_output.r15(tmp0_desc, 11) ? true : !(value.recipients == null)) {
      tmp1_output.n15(tmp0_desc, 11, tmp2_cached[11].d3(), value.recipients);
    }
    if (tmp1_output.r15(tmp0_desc, 12) ? true : !(value.icon == null)) {
      tmp1_output.n15(tmp0_desc, 12, StringSerializer_getInstance(), value.icon);
    }
    if (tmp1_output.r15(tmp0_desc, 13) ? true : !(value.ownerId == null)) {
      tmp1_output.n15(tmp0_desc, 13, StringSerializer_getInstance(), value.ownerId);
    }
    if (tmp1_output.r15(tmp0_desc, 14) ? true : !(value.parentId == null)) {
      tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.parentId);
    }
    if (tmp1_output.r15(tmp0_desc, 15) ? true : !(value.lastPinTimestamp == null)) {
      tmp1_output.n15(tmp0_desc, 15, StringSerializer_getInstance(), value.lastPinTimestamp);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.fkp(encoder, value instanceof Channel ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ekp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.v13(tmp0_desc);
    var tmp21_cached = Companion_getInstance_3().dkp_1;
    if (tmp20_input.k14()) {
      tmp4_local0 = tmp20_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.j14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.j14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.j14(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.j14(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.j14(tmp0_desc, 11, tmp21_cached[11].d3(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.j14(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.j14(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.j14(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.j14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.j14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.j14(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.j14(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.j14(tmp0_desc, 11, tmp21_cached[11].d3(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.j14(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.j14(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.j14(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp20_input.w13(tmp0_desc);
    return Channel.gkp(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  dz() {
    return this.ekp_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_3().dkp_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[11].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Channel {
  constructor() {
    Companion_getInstance_3();
    this.id = null;
    this.type = null;
    this.guildId = null;
    this.position = null;
    this.name = null;
    this.topic = null;
    this.nsfw = null;
    this.lastMessageId = null;
    this.bitrate = null;
    this.userLimit = null;
    this.rateLimitPerUser = null;
    this.recipients = null;
    this.icon = null;
    this.ownerId = null;
    this.parentId = null;
    this.lastPinTimestamp = null;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  hkp(_set____db54di) {
    this.type = _set____db54di;
  }
  h38() {
    return this.type;
  }
  ikp(_set____db54di) {
    this.guildId = _set____db54di;
  }
  jkp() {
    return this.guildId;
  }
  kkp(_set____db54di) {
    this.position = _set____db54di;
  }
  lkp() {
    return this.position;
  }
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  pew(_set____db54di) {
    this.topic = _set____db54di;
  }
  qew() {
    return this.topic;
  }
  mkp(_set____db54di) {
    this.nsfw = _set____db54di;
  }
  nkp() {
    return this.nsfw;
  }
  okp(_set____db54di) {
    this.lastMessageId = _set____db54di;
  }
  pkp() {
    return this.lastMessageId;
  }
  qkp(_set____db54di) {
    this.bitrate = _set____db54di;
  }
  rkp() {
    return this.bitrate;
  }
  skp(_set____db54di) {
    this.userLimit = _set____db54di;
  }
  tkp() {
    return this.userLimit;
  }
  ukp(_set____db54di) {
    this.rateLimitPerUser = _set____db54di;
  }
  vkp() {
    return this.rateLimitPerUser;
  }
  wkp(_set____db54di) {
    this.recipients = _set____db54di;
  }
  xkp() {
    return this.recipients;
  }
  oan(_set____db54di) {
    this.icon = _set____db54di;
  }
  qa9() {
    return this.icon;
  }
  fah(_set____db54di) {
    this.ownerId = _set____db54di;
  }
  gah() {
    return this.ownerId;
  }
  yaf(_set____db54di) {
    this.parentId = _set____db54di;
  }
  zaf() {
    return this.parentId;
  }
  ykp(_set____db54di) {
    this.lastPinTimestamp = _set____db54di;
  }
  zkp() {
    return this.lastPinTimestamp;
  }
  static gkp(seen0, id, type, guildId, position, name, topic, nsfw, lastMessageId, bitrate, userLimit, rateLimitPerUser, recipients, icon, ownerId, parentId, lastPinTimestamp, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().ekp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 4))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    if (0 === (seen0 & 8))
      $this.position = null;
    else
      $this.position = position;
    if (0 === (seen0 & 16))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 32))
      $this.topic = null;
    else
      $this.topic = topic;
    if (0 === (seen0 & 64))
      $this.nsfw = null;
    else
      $this.nsfw = nsfw;
    if (0 === (seen0 & 128))
      $this.lastMessageId = null;
    else
      $this.lastMessageId = lastMessageId;
    if (0 === (seen0 & 256))
      $this.bitrate = null;
    else
      $this.bitrate = bitrate;
    if (0 === (seen0 & 512))
      $this.userLimit = null;
    else
      $this.userLimit = userLimit;
    if (0 === (seen0 & 1024))
      $this.rateLimitPerUser = null;
    else
      $this.rateLimitPerUser = rateLimitPerUser;
    if (0 === (seen0 & 2048))
      $this.recipients = null;
    else
      $this.recipients = recipients;
    if (0 === (seen0 & 4096))
      $this.icon = null;
    else
      $this.icon = icon;
    if (0 === (seen0 & 8192))
      $this.ownerId = null;
    else
      $this.ownerId = ownerId;
    if (0 === (seen0 & 16384))
      $this.parentId = null;
    else
      $this.parentId = parentId;
    if (0 === (seen0 & 32768))
      $this.lastPinTimestamp = null;
    else
      $this.lastPinTimestamp = lastPinTimestamp;
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
    tmp.akq_1 = [null, null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Embed$Companion$$childSerializers$_anonymous__41n0y9)];
  }
}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Embed', this, 13);
    tmp0_serialDesc.n1b('title', true);
    tmp0_serialDesc.n1b('type', true);
    tmp0_serialDesc.n1b('description', true);
    tmp0_serialDesc.n1b('url', true);
    tmp0_serialDesc.n1b('timestamp', true);
    tmp0_serialDesc.n1b('color', true);
    tmp0_serialDesc.n1b('footer', true);
    tmp0_serialDesc.n1b('image', true);
    tmp0_serialDesc.n1b('thumbnail', true);
    tmp0_serialDesc.n1b('video', true);
    tmp0_serialDesc.n1b('provider', true);
    tmp0_serialDesc.n1b('author', true);
    tmp0_serialDesc.n1b('fields', true);
    this.bkq_1 = tmp0_serialDesc;
  }
  ckq(encoder, value) {
    var tmp0_desc = this.bkq_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().akq_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.timestamp == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.color == null)) {
      tmp1_output.n15(tmp0_desc, 5, IntSerializer_getInstance(), value.color);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.footer == null)) {
      tmp1_output.n15(tmp0_desc, 6, $serializer_getInstance_3(), value.footer);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.image == null)) {
      tmp1_output.n15(tmp0_desc, 7, $serializer_getInstance_4(), value.image);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.thumbnail == null)) {
      tmp1_output.n15(tmp0_desc, 8, $serializer_getInstance_4(), value.thumbnail);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.video == null)) {
      tmp1_output.n15(tmp0_desc, 9, $serializer_getInstance_4(), value.video);
    }
    if (tmp1_output.r15(tmp0_desc, 10) ? true : !(value.provider == null)) {
      tmp1_output.n15(tmp0_desc, 10, $serializer_getInstance_5(), value.provider);
    }
    if (tmp1_output.r15(tmp0_desc, 11) ? true : !(value.author == null)) {
      tmp1_output.n15(tmp0_desc, 11, $serializer_getInstance_6(), value.author);
    }
    if (tmp1_output.r15(tmp0_desc, 12) ? true : !(value.fields == null)) {
      tmp1_output.n15(tmp0_desc, 12, tmp2_cached[12].d3(), value.fields);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.ckq(encoder, value instanceof Embed ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.bkq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_input = decoder.v13(tmp0_desc);
    var tmp18_cached = Companion_getInstance_4().akq_1;
    if (tmp17_input.k14()) {
      tmp4_local0 = tmp17_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp17_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp17_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp17_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp17_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp17_input.j14(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp17_input.j14(tmp0_desc, 6, $serializer_getInstance_3(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp17_input.j14(tmp0_desc, 7, $serializer_getInstance_4(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp17_input.j14(tmp0_desc, 8, $serializer_getInstance_4(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp17_input.j14(tmp0_desc, 9, $serializer_getInstance_4(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp17_input.j14(tmp0_desc, 10, $serializer_getInstance_5(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp17_input.j14(tmp0_desc, 11, $serializer_getInstance_6(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp17_input.j14(tmp0_desc, 12, tmp18_cached[12].d3(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp17_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp17_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp17_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp17_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp17_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp17_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp17_input.j14(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp17_input.j14(tmp0_desc, 6, $serializer_getInstance_3(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp17_input.j14(tmp0_desc, 7, $serializer_getInstance_4(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp17_input.j14(tmp0_desc, 8, $serializer_getInstance_4(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp17_input.j14(tmp0_desc, 9, $serializer_getInstance_4(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp17_input.j14(tmp0_desc, 10, $serializer_getInstance_5(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp17_input.j14(tmp0_desc, 11, $serializer_getInstance_6(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp17_input.j14(tmp0_desc, 12, tmp18_cached[12].d3(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp17_input.w13(tmp0_desc);
    return Embed.dkq(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, null);
  }
  dz() {
    return this.bkq_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_4().akq_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance_3()), get_nullable($serializer_getInstance_4()), get_nullable($serializer_getInstance_4()), get_nullable($serializer_getInstance_4()), get_nullable($serializer_getInstance_5()), get_nullable($serializer_getInstance_6()), get_nullable(tmp0_cached[12].d3())];
  }
}
class Embed {
  constructor() {
    Companion_getInstance_4();
    this.title = null;
    this.type = null;
    this.description = null;
    this.url = null;
    this.timestamp = null;
    this.color = null;
    this.footer = null;
    this.image = null;
    this.thumbnail = null;
    this.video = null;
    this.provider = null;
    this.author = null;
    this.fields = null;
  }
  sag(_set____db54di) {
    this.title = _set____db54di;
  }
  x3i() {
    return this.title;
  }
  u38(_set____db54di) {
    this.type = _set____db54di;
  }
  h38() {
    return this.type;
  }
  z36(_set____db54di) {
    this.description = _set____db54di;
  }
  j36() {
    return this.description;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  mez(_set____db54di) {
    this.timestamp = _set____db54di;
  }
  qd3() {
    return this.timestamp;
  }
  ekq(_set____db54di) {
    this.color = _set____db54di;
  }
  qac() {
    return this.color;
  }
  fkq(_set____db54di) {
    this.footer = _set____db54di;
  }
  eg5() {
    return this.footer;
  }
  gkq(_set____db54di) {
    this.image = _set____db54di;
  }
  p7f() {
    return this.image;
  }
  hkq(_set____db54di) {
    this.thumbnail = _set____db54di;
  }
  a3j() {
    return this.thumbnail;
  }
  ikq(_set____db54di) {
    this.video = _set____db54di;
  }
  k7k() {
    return this.video;
  }
  jkq(_set____db54di) {
    this.provider = _set____db54di;
  }
  kkq() {
    return this.provider;
  }
  lkq(_set____db54di) {
    this.author = _set____db54di;
  }
  a7j() {
    return this.author;
  }
  mkq(_set____db54di) {
    this.fields = _set____db54di;
  }
  y9o() {
    return this.fields;
  }
  static dkq(seen0, title, type, description, url, timestamp, color, footer, image, thumbnail, video, provider, author, fields, serializationConstructorMarker) {
    Companion_getInstance_4();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().bkq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.title = null;
    else
      $this.title = title;
    if (0 === (seen0 & 2))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 4))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 8))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 16))
      $this.timestamp = null;
    else
      $this.timestamp = timestamp;
    if (0 === (seen0 & 32))
      $this.color = null;
    else
      $this.color = color;
    if (0 === (seen0 & 64))
      $this.footer = null;
    else
      $this.footer = footer;
    if (0 === (seen0 & 128))
      $this.image = null;
    else
      $this.image = image;
    if (0 === (seen0 & 256))
      $this.thumbnail = null;
    else
      $this.thumbnail = thumbnail;
    if (0 === (seen0 & 512))
      $this.video = null;
    else
      $this.video = video;
    if (0 === (seen0 & 1024))
      $this.provider = null;
    else
      $this.provider = provider;
    if (0 === (seen0 & 2048))
      $this.author = null;
    else
      $this.author = author;
    if (0 === (seen0 & 4096))
      $this.fields = null;
    else
      $this.fields = fields;
    return $this;
  }
}
class Companion_4 {}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedFooter', this, 3);
    tmp0_serialDesc.n1b('text', true);
    tmp0_serialDesc.n1b('iconUrl', true);
    tmp0_serialDesc.n1b('proxyIconUrl', true);
    this.nkq_1 = tmp0_serialDesc;
  }
  okq(encoder, value) {
    var tmp0_desc = this.nkq_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.text == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.iconUrl == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.iconUrl);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.proxyIconUrl == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.proxyIconUrl);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.okq(encoder, value instanceof EmbedFooter ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.nkq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return EmbedFooter.pkq(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.nkq_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class EmbedFooter {
  constructor() {
    this.text = null;
    this.iconUrl = null;
    this.proxyIconUrl = null;
  }
  q3h(_set____db54di) {
    this.text = _set____db54di;
  }
  l34() {
    return this.text;
  }
  j3a(_set____db54di) {
    this.iconUrl = _set____db54di;
  }
  k3a() {
    return this.iconUrl;
  }
  qkq(_set____db54di) {
    this.proxyIconUrl = _set____db54di;
  }
  rkq() {
    return this.proxyIconUrl;
  }
  static pkq(seen0, text, iconUrl, proxyIconUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().nkq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.text = null;
    else
      $this.text = text;
    if (0 === (seen0 & 2))
      $this.iconUrl = null;
    else
      $this.iconUrl = iconUrl;
    if (0 === (seen0 & 4))
      $this.proxyIconUrl = null;
    else
      $this.proxyIconUrl = proxyIconUrl;
    return $this;
  }
}
class Companion_5 {}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedMedia', this, 4);
    tmp0_serialDesc.n1b('url', true);
    tmp0_serialDesc.n1b('proxyUrl', true);
    tmp0_serialDesc.n1b('height', true);
    tmp0_serialDesc.n1b('width', true);
    this.skq_1 = tmp0_serialDesc;
  }
  tkq(encoder, value) {
    var tmp0_desc = this.skq_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.proxyUrl == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.proxyUrl);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.height == null)) {
      tmp1_output.n15(tmp0_desc, 2, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.width == null)) {
      tmp1_output.n15(tmp0_desc, 3, IntSerializer_getInstance(), value.width);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.tkq(encoder, value instanceof EmbedMedia ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.skq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.v13(tmp0_desc);
    if (tmp8_input.k14()) {
      tmp4_local0 = tmp8_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.j14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.j14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.j14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.j14(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp8_input.w13(tmp0_desc);
    return EmbedMedia.ukq(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  dz() {
    return this.skq_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class EmbedMedia {
  constructor() {
    this.url = null;
    this.proxyUrl = null;
    this.height = null;
    this.width = null;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  wko(_set____db54di) {
    this.proxyUrl = _set____db54di;
  }
  xko() {
    return this.proxyUrl;
  }
  o38(_set____db54di) {
    this.height = _set____db54di;
  }
  p38() {
    return this.height;
  }
  m38(_set____db54di) {
    this.width = _set____db54di;
  }
  n38() {
    return this.width;
  }
  static ukq(seen0, url, proxyUrl, height, width, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().skq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 2))
      $this.proxyUrl = null;
    else
      $this.proxyUrl = proxyUrl;
    if (0 === (seen0 & 4))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen0 & 8))
      $this.width = null;
    else
      $this.width = width;
    return $this;
  }
}
class Companion_6 {}
class $serializer_5 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedProvider', this, 2);
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('url', true);
    this.vkq_1 = tmp0_serialDesc;
  }
  wkq(encoder, value) {
    var tmp0_desc = this.vkq_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.wkq(encoder, value instanceof EmbedProvider ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.vkq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.v13(tmp0_desc);
    if (tmp6_input.k14()) {
      tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp6_input.w13(tmp0_desc);
    return EmbedProvider.xkq(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dz() {
    return this.vkq_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class EmbedProvider {
  constructor() {
    this.name = null;
    this.url = null;
  }
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  static xkq(seen0, name, url, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().vkq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
}
class Companion_7 {}
class $serializer_6 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedAuthor', this, 4);
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('url', true);
    tmp0_serialDesc.n1b('iconUrl', true);
    tmp0_serialDesc.n1b('proxyIconUrl', true);
    this.ykq_1 = tmp0_serialDesc;
  }
  zkq(encoder, value) {
    var tmp0_desc = this.ykq_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.url == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.iconUrl == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.iconUrl);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.proxyIconUrl == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.proxyIconUrl);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.zkq(encoder, value instanceof EmbedAuthor ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ykq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.v13(tmp0_desc);
    if (tmp8_input.k14()) {
      tmp4_local0 = tmp8_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp8_input.w13(tmp0_desc);
    return EmbedAuthor.akr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  dz() {
    return this.ykq_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class EmbedAuthor {
  constructor() {
    this.name = null;
    this.url = null;
    this.iconUrl = null;
    this.proxyIconUrl = null;
  }
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  f9j(_set____db54di) {
    this.url = _set____db54di;
  }
  i4n() {
    return this.url;
  }
  j3a(_set____db54di) {
    this.iconUrl = _set____db54di;
  }
  k3a() {
    return this.iconUrl;
  }
  qkq(_set____db54di) {
    this.proxyIconUrl = _set____db54di;
  }
  rkq() {
    return this.proxyIconUrl;
  }
  static akr(seen0, name, url, iconUrl, proxyIconUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().ykq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 4))
      $this.iconUrl = null;
    else
      $this.iconUrl = iconUrl;
    if (0 === (seen0 & 8))
      $this.proxyIconUrl = null;
    else
      $this.proxyIconUrl = proxyIconUrl;
    return $this;
  }
}
class Companion_8 {}
class $serializer_7 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedField', this, 3);
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('value', true);
    tmp0_serialDesc.n1b('inline', true);
    this.bkr_1 = tmp0_serialDesc;
  }
  ckr(encoder, value) {
    var tmp0_desc = this.bkr_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.value == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.value);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.inline == null)) {
      tmp1_output.n15(tmp0_desc, 2, BooleanSerializer_getInstance(), value.inline);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.ckr(encoder, value instanceof EmbedField ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.bkr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return EmbedField.dkr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.bkr_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class EmbedField {
  constructor() {
    this.name = null;
    this.value = null;
    this.inline = null;
  }
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  sae(_set____db54di) {
    this.value = _set____db54di;
  }
  d3() {
    return this.value;
  }
  ekr(_set____db54di) {
    this.inline = _set____db54di;
  }
  fkr() {
    return this.inline;
  }
  static dkr(seen0, name, value, inline, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().bkr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.value = null;
    else
      $this.value = value;
    if (0 === (seen0 & 4))
      $this.inline = null;
    else
      $this.inline = inline;
    return $this;
  }
}
class Companion_9 {}
class $serializer_8 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Emoji', this, 6);
    tmp0_serialDesc.n1b('id', true);
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('animated', true);
    tmp0_serialDesc.n1b('requireColons', true);
    tmp0_serialDesc.n1b('managed', true);
    tmp0_serialDesc.n1b('available', true);
    this.gkr_1 = tmp0_serialDesc;
  }
  hkr(encoder, value) {
    var tmp0_desc = this.gkr_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.animated == null)) {
      tmp1_output.n15(tmp0_desc, 2, BooleanSerializer_getInstance(), value.animated);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.requireColons == null)) {
      tmp1_output.n15(tmp0_desc, 3, BooleanSerializer_getInstance(), value.requireColons);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.managed == null)) {
      tmp1_output.n15(tmp0_desc, 4, BooleanSerializer_getInstance(), value.managed);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.available == null)) {
      tmp1_output.n15(tmp0_desc, 5, BooleanSerializer_getInstance(), value.available);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.hkr(encoder, value instanceof Emoji ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.gkr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.v13(tmp0_desc);
    if (tmp10_input.k14()) {
      tmp4_local0 = tmp10_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.j14(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.j14(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.j14(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.j14(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.j14(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.j14(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp10_input.w13(tmp0_desc);
    return Emoji.ikr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  dz() {
    return this.gkr_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Emoji {
  constructor() {
    this.id = null;
    this.name = null;
    this.animated = null;
    this.requireColons = null;
    this.managed = null;
    this.available = null;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  jkr(_set____db54di) {
    this.animated = _set____db54di;
  }
  kkr() {
    return this.animated;
  }
  lkr(_set____db54di) {
    this.requireColons = _set____db54di;
  }
  mkr() {
    return this.requireColons;
  }
  nkr(_set____db54di) {
    this.managed = _set____db54di;
  }
  okr() {
    return this.managed;
  }
  pkr(_set____db54di) {
    this.available = _set____db54di;
  }
  sjm() {
    return this.available;
  }
  static ikr(seen0, id, name, animated, requireColons, managed, available, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().gkr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.animated = null;
    else
      $this.animated = animated;
    if (0 === (seen0 & 8))
      $this.requireColons = null;
    else
      $this.requireColons = requireColons;
    if (0 === (seen0 & 16))
      $this.managed = null;
    else
      $this.managed = managed;
    if (0 === (seen0 & 32))
      $this.available = null;
    else
      $this.available = available;
    return $this;
  }
}
class Companion_10 {
  constructor() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Guild$Companion$$childSerializers$_anonymous__kcz0qf);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, Guild$Companion$$childSerializers$_anonymous__kcz0qf_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qkr_1 = [null, null, null, null, null, null, null, null, null, null, null, tmp_1, tmp_3, lazy(tmp_4, Guild$Companion$$childSerializers$_anonymous__kcz0qf_1), null, null, null, null, null, null, null];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Guild', this, 21);
    tmp0_serialDesc.n1b('id', true);
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('icon', true);
    tmp0_serialDesc.n1b('splash', true);
    tmp0_serialDesc.n1b('discoverySplash', true);
    tmp0_serialDesc.n1b('owner', true);
    tmp0_serialDesc.n1b('ownerId', true);
    tmp0_serialDesc.n1b('permissions', true);
    tmp0_serialDesc.n1b('afkChannelId', true);
    tmp0_serialDesc.n1b('afkTimeout', true);
    tmp0_serialDesc.n1b('verificationLevel', true);
    tmp0_serialDesc.n1b('roles', true);
    tmp0_serialDesc.n1b('emojis', true);
    tmp0_serialDesc.n1b('features', true);
    tmp0_serialDesc.n1b('description', true);
    tmp0_serialDesc.n1b('banner', true);
    tmp0_serialDesc.n1b('premiumTier', true);
    tmp0_serialDesc.n1b('premiumSubscriptionCount', true);
    tmp0_serialDesc.n1b('preferredLocale', true);
    tmp0_serialDesc.n1b('approximateMemberCount', true);
    tmp0_serialDesc.n1b('approximatePresenceCount', true);
    this.rkr_1 = tmp0_serialDesc;
  }
  skr(encoder, value) {
    var tmp0_desc = this.rkr_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().qkr_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.icon == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.icon);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.splash == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.splash);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.discoverySplash == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.discoverySplash);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.owner == null)) {
      tmp1_output.n15(tmp0_desc, 5, BooleanSerializer_getInstance(), value.owner);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.ownerId == null)) {
      tmp1_output.n15(tmp0_desc, 6, StringSerializer_getInstance(), value.ownerId);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.permissions == null)) {
      tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.permissions);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.afkChannelId == null)) {
      tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.afkChannelId);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.afkTimeout == null)) {
      tmp1_output.n15(tmp0_desc, 9, IntSerializer_getInstance(), value.afkTimeout);
    }
    if (tmp1_output.r15(tmp0_desc, 10) ? true : !(value.verificationLevel == null)) {
      tmp1_output.n15(tmp0_desc, 10, IntSerializer_getInstance(), value.verificationLevel);
    }
    if (tmp1_output.r15(tmp0_desc, 11) ? true : !(value.roles == null)) {
      tmp1_output.n15(tmp0_desc, 11, tmp2_cached[11].d3(), value.roles);
    }
    if (tmp1_output.r15(tmp0_desc, 12) ? true : !(value.emojis == null)) {
      tmp1_output.n15(tmp0_desc, 12, tmp2_cached[12].d3(), value.emojis);
    }
    if (tmp1_output.r15(tmp0_desc, 13) ? true : !(value.features == null)) {
      tmp1_output.n15(tmp0_desc, 13, tmp2_cached[13].d3(), value.features);
    }
    if (tmp1_output.r15(tmp0_desc, 14) ? true : !(value.description == null)) {
      tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.r15(tmp0_desc, 15) ? true : !(value.banner == null)) {
      tmp1_output.n15(tmp0_desc, 15, StringSerializer_getInstance(), value.banner);
    }
    if (tmp1_output.r15(tmp0_desc, 16) ? true : !(value.premiumTier == null)) {
      tmp1_output.n15(tmp0_desc, 16, IntSerializer_getInstance(), value.premiumTier);
    }
    if (tmp1_output.r15(tmp0_desc, 17) ? true : !(value.premiumSubscriptionCount == null)) {
      tmp1_output.n15(tmp0_desc, 17, IntSerializer_getInstance(), value.premiumSubscriptionCount);
    }
    if (tmp1_output.r15(tmp0_desc, 18) ? true : !(value.preferredLocale == null)) {
      tmp1_output.n15(tmp0_desc, 18, StringSerializer_getInstance(), value.preferredLocale);
    }
    if (tmp1_output.r15(tmp0_desc, 19) ? true : !(value.approximateMemberCount == null)) {
      tmp1_output.n15(tmp0_desc, 19, IntSerializer_getInstance(), value.approximateMemberCount);
    }
    if (tmp1_output.r15(tmp0_desc, 20) ? true : !(value.approximatePresenceCount == null)) {
      tmp1_output.n15(tmp0_desc, 20, IntSerializer_getInstance(), value.approximatePresenceCount);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.skr(encoder, value instanceof Guild ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.rkr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_local18 = null;
    var tmp23_local19 = null;
    var tmp24_local20 = null;
    var tmp25_input = decoder.v13(tmp0_desc);
    var tmp26_cached = Companion_getInstance_11().qkr_1;
    if (tmp25_input.k14()) {
      tmp4_local0 = tmp25_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp25_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp25_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp25_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp25_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp25_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp25_input.j14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp25_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp25_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp25_input.j14(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp25_input.j14(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp25_input.j14(tmp0_desc, 11, tmp26_cached[11].d3(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp25_input.j14(tmp0_desc, 12, tmp26_cached[12].d3(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp25_input.j14(tmp0_desc, 13, tmp26_cached[13].d3(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp25_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp25_input.j14(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp25_input.j14(tmp0_desc, 16, IntSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp25_input.j14(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp25_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp25_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp25_input.j14(tmp0_desc, 20, IntSerializer_getInstance(), tmp24_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp25_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp25_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp25_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp25_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp25_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp25_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp25_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp25_input.j14(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp25_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp25_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp25_input.j14(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp25_input.j14(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp25_input.j14(tmp0_desc, 11, tmp26_cached[11].d3(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp25_input.j14(tmp0_desc, 12, tmp26_cached[12].d3(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp25_input.j14(tmp0_desc, 13, tmp26_cached[13].d3(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp25_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp25_input.j14(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp25_input.j14(tmp0_desc, 16, IntSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp25_input.j14(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp25_input.j14(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp25_input.j14(tmp0_desc, 19, IntSerializer_getInstance(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp25_input.j14(tmp0_desc, 20, IntSerializer_getInstance(), tmp24_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp25_input.w13(tmp0_desc);
    return Guild.tkr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, null);
  }
  dz() {
    return this.rkr_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_11().qkr_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[11].d3()), get_nullable(tmp0_cached[12].d3()), get_nullable(tmp0_cached[13].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class Guild {
  constructor() {
    Companion_getInstance_11();
    this.id = null;
    this.name = null;
    this.icon = null;
    this.splash = null;
    this.discoverySplash = null;
    this.owner = null;
    this.ownerId = null;
    this.permissions = null;
    this.afkChannelId = null;
    this.afkTimeout = null;
    this.verificationLevel = null;
    this.roles = null;
    this.emojis = null;
    this.features = null;
    this.description = null;
    this.banner = null;
    this.premiumTier = null;
    this.premiumSubscriptionCount = null;
    this.preferredLocale = null;
    this.approximateMemberCount = null;
    this.approximatePresenceCount = null;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  oan(_set____db54di) {
    this.icon = _set____db54di;
  }
  qa9() {
    return this.icon;
  }
  ukr(_set____db54di) {
    this.splash = _set____db54di;
  }
  vkr() {
    return this.splash;
  }
  wkr(_set____db54di) {
    this.discoverySplash = _set____db54di;
  }
  xkr() {
    return this.discoverySplash;
  }
  ykr(_set____db54di) {
    this.owner = _set____db54di;
  }
  w87() {
    return this.owner;
  }
  fah(_set____db54di) {
    this.ownerId = _set____db54di;
  }
  gah() {
    return this.ownerId;
  }
  zkr(_set____db54di) {
    this.permissions = _set____db54di;
  }
  wbv() {
    return this.permissions;
  }
  aks(_set____db54di) {
    this.afkChannelId = _set____db54di;
  }
  bks() {
    return this.afkChannelId;
  }
  cks(_set____db54di) {
    this.afkTimeout = _set____db54di;
  }
  dks() {
    return this.afkTimeout;
  }
  eks(_set____db54di) {
    this.verificationLevel = _set____db54di;
  }
  fks() {
    return this.verificationLevel;
  }
  gks(_set____db54di) {
    this.roles = _set____db54di;
  }
  saz() {
    return this.roles;
  }
  hks(_set____db54di) {
    this.emojis = _set____db54di;
  }
  za7() {
    return this.emojis;
  }
  iks(_set____db54di) {
    this.features = _set____db54di;
  }
  d7w() {
    return this.features;
  }
  z36(_set____db54di) {
    this.description = _set____db54di;
  }
  j36() {
    return this.description;
  }
  d62(_set____db54di) {
    this.banner = _set____db54di;
  }
  q3j() {
    return this.banner;
  }
  jks(_set____db54di) {
    this.premiumTier = _set____db54di;
  }
  kks() {
    return this.premiumTier;
  }
  lks(_set____db54di) {
    this.premiumSubscriptionCount = _set____db54di;
  }
  mks() {
    return this.premiumSubscriptionCount;
  }
  gbz(_set____db54di) {
    this.preferredLocale = _set____db54di;
  }
  hbz() {
    return this.preferredLocale;
  }
  nks(_set____db54di) {
    this.approximateMemberCount = _set____db54di;
  }
  oks() {
    return this.approximateMemberCount;
  }
  pks(_set____db54di) {
    this.approximatePresenceCount = _set____db54di;
  }
  qks() {
    return this.approximatePresenceCount;
  }
  static tkr(seen0, id, name, icon, splash, discoverySplash, owner, ownerId, permissions, afkChannelId, afkTimeout, verificationLevel, roles, emojis, features, description, banner, premiumTier, premiumSubscriptionCount, preferredLocale, approximateMemberCount, approximatePresenceCount, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().rkr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.icon = null;
    else
      $this.icon = icon;
    if (0 === (seen0 & 8))
      $this.splash = null;
    else
      $this.splash = splash;
    if (0 === (seen0 & 16))
      $this.discoverySplash = null;
    else
      $this.discoverySplash = discoverySplash;
    if (0 === (seen0 & 32))
      $this.owner = null;
    else
      $this.owner = owner;
    if (0 === (seen0 & 64))
      $this.ownerId = null;
    else
      $this.ownerId = ownerId;
    if (0 === (seen0 & 128))
      $this.permissions = null;
    else
      $this.permissions = permissions;
    if (0 === (seen0 & 256))
      $this.afkChannelId = null;
    else
      $this.afkChannelId = afkChannelId;
    if (0 === (seen0 & 512))
      $this.afkTimeout = null;
    else
      $this.afkTimeout = afkTimeout;
    if (0 === (seen0 & 1024))
      $this.verificationLevel = null;
    else
      $this.verificationLevel = verificationLevel;
    if (0 === (seen0 & 2048))
      $this.roles = null;
    else
      $this.roles = roles;
    if (0 === (seen0 & 4096))
      $this.emojis = null;
    else
      $this.emojis = emojis;
    if (0 === (seen0 & 8192))
      $this.features = null;
    else
      $this.features = features;
    if (0 === (seen0 & 16384))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 32768))
      $this.banner = null;
    else
      $this.banner = banner;
    if (0 === (seen0 & 65536))
      $this.premiumTier = null;
    else
      $this.premiumTier = premiumTier;
    if (0 === (seen0 & 131072))
      $this.premiumSubscriptionCount = null;
    else
      $this.premiumSubscriptionCount = premiumSubscriptionCount;
    if (0 === (seen0 & 262144))
      $this.preferredLocale = null;
    else
      $this.preferredLocale = preferredLocale;
    if (0 === (seen0 & 524288))
      $this.approximateMemberCount = null;
    else
      $this.approximateMemberCount = approximateMemberCount;
    if (0 === (seen0 & 1048576))
      $this.approximatePresenceCount = null;
    else
      $this.approximatePresenceCount = approximatePresenceCount;
    return $this;
  }
}
class Companion_11 {
  constructor() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.rks_1 = [null, null, null, lazy(tmp_0, GuildMember$Companion$$childSerializers$_anonymous__jvbpf), null, null, null, null, null, null, null];
  }
}
class $serializer_10 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.GuildMember', this, 11);
    tmp0_serialDesc.n1b('user', true);
    tmp0_serialDesc.n1b('nick', true);
    tmp0_serialDesc.n1b('avatar', true);
    tmp0_serialDesc.n1b('roles', true);
    tmp0_serialDesc.n1b('joinedAt', true);
    tmp0_serialDesc.n1b('premiumSince', true);
    tmp0_serialDesc.n1b('deaf', true);
    tmp0_serialDesc.n1b('mute', true);
    tmp0_serialDesc.n1b('flags', true);
    tmp0_serialDesc.n1b('pending', true);
    tmp0_serialDesc.n1b('communicationDisabledUntil', true);
    this.sks_1 = tmp0_serialDesc;
  }
  tks(encoder, value) {
    var tmp0_desc = this.sks_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().rks_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.n15(tmp0_desc, 0, $serializer_getInstance_15(), value.user);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.nick == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.nick);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.avatar == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.avatar);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.roles == null)) {
      tmp1_output.n15(tmp0_desc, 3, tmp2_cached[3].d3(), value.roles);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.joinedAt == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.joinedAt);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.premiumSince == null)) {
      tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.premiumSince);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.deaf == null)) {
      tmp1_output.n15(tmp0_desc, 6, BooleanSerializer_getInstance(), value.deaf);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.mute == null)) {
      tmp1_output.n15(tmp0_desc, 7, BooleanSerializer_getInstance(), value.mute);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.flags == null)) {
      tmp1_output.n15(tmp0_desc, 8, IntSerializer_getInstance(), value.flags);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.pending == null)) {
      tmp1_output.n15(tmp0_desc, 9, BooleanSerializer_getInstance(), value.pending);
    }
    if (tmp1_output.r15(tmp0_desc, 10) ? true : !(value.communicationDisabledUntil == null)) {
      tmp1_output.n15(tmp0_desc, 10, StringSerializer_getInstance(), value.communicationDisabledUntil);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.tks(encoder, value instanceof GuildMember ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.sks_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_input = decoder.v13(tmp0_desc);
    var tmp16_cached = Companion_getInstance_12().rks_1;
    if (tmp15_input.k14()) {
      tmp4_local0 = tmp15_input.j14(tmp0_desc, 0, $serializer_getInstance_15(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.j14(tmp0_desc, 3, tmp16_cached[3].d3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.j14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.j14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.j14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.j14(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.j14(tmp0_desc, 0, $serializer_getInstance_15(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.j14(tmp0_desc, 3, tmp16_cached[3].d3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.j14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.j14(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.j14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.j14(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp15_input.w13(tmp0_desc);
    return GuildMember.uks(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  }
  dz() {
    return this.sks_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_12().rks_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_15()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].d3()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class GuildMember {
  constructor() {
    Companion_getInstance_12();
    this.user = null;
    this.nick = null;
    this.avatar = null;
    this.roles = null;
    this.joinedAt = null;
    this.premiumSince = null;
    this.deaf = null;
    this.mute = null;
    this.flags = null;
    this.pending = null;
    this.communicationDisabledUntil = null;
  }
  vks(_set____db54di) {
    this.user = _set____db54di;
  }
  p34() {
    return this.user;
  }
  wks(_set____db54di) {
    this.nick = _set____db54di;
  }
  xks() {
    return this.nick;
  }
  c62(_set____db54di) {
    this.avatar = _set____db54di;
  }
  m3j() {
    return this.avatar;
  }
  yks(_set____db54di) {
    this.roles = _set____db54di;
  }
  saz() {
    return this.roles;
  }
  zks(_set____db54di) {
    this.joinedAt = _set____db54di;
  }
  akt() {
    return this.joinedAt;
  }
  bkt(_set____db54di) {
    this.premiumSince = _set____db54di;
  }
  ckt() {
    return this.premiumSince;
  }
  dkt(_set____db54di) {
    this.deaf = _set____db54di;
  }
  ekt() {
    return this.deaf;
  }
  fkt(_set____db54di) {
    this.mute = _set____db54di;
  }
  gkt() {
    return this.mute;
  }
  hkt(_set____db54di) {
    this.flags = _set____db54di;
  }
  ikt() {
    return this.flags;
  }
  jkt(_set____db54di) {
    this.pending = _set____db54di;
  }
  kkt() {
    return this.pending;
  }
  lkt(_set____db54di) {
    this.communicationDisabledUntil = _set____db54di;
  }
  mkt() {
    return this.communicationDisabledUntil;
  }
  static uks(seen0, user, nick, avatar, roles, joinedAt, premiumSince, deaf, mute, flags, pending, communicationDisabledUntil, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().sks_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.user = null;
    else
      $this.user = user;
    if (0 === (seen0 & 2))
      $this.nick = null;
    else
      $this.nick = nick;
    if (0 === (seen0 & 4))
      $this.avatar = null;
    else
      $this.avatar = avatar;
    if (0 === (seen0 & 8))
      $this.roles = null;
    else
      $this.roles = roles;
    if (0 === (seen0 & 16))
      $this.joinedAt = null;
    else
      $this.joinedAt = joinedAt;
    if (0 === (seen0 & 32))
      $this.premiumSince = null;
    else
      $this.premiumSince = premiumSince;
    if (0 === (seen0 & 64))
      $this.deaf = null;
    else
      $this.deaf = deaf;
    if (0 === (seen0 & 128))
      $this.mute = null;
    else
      $this.mute = mute;
    if (0 === (seen0 & 256))
      $this.flags = null;
    else
      $this.flags = flags;
    if (0 === (seen0 & 512))
      $this.pending = null;
    else
      $this.pending = pending;
    if (0 === (seen0 & 1024))
      $this.communicationDisabledUntil = null;
    else
      $this.communicationDisabledUntil = communicationDisabledUntil;
    return $this;
  }
}
class Companion_12 {
  constructor() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Message$Companion$$childSerializers$_anonymous__yfg1gj);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, Message$Companion$$childSerializers$_anonymous__yfg1gj_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, Message$Companion$$childSerializers$_anonymous__yfg1gj_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, Message$Companion$$childSerializers$_anonymous__yfg1gj_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.nkt_1 = [null, null, null, null, null, null, null, null, tmp_1, tmp_3, tmp_5, tmp_7, lazy(tmp_8, Message$Companion$$childSerializers$_anonymous__yfg1gj_3), null, null, null, null, null, null, null, null];
  }
}
class $serializer_11 {
  constructor() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Message', this, 21);
    tmp0_serialDesc.n1b('id', true);
    tmp0_serialDesc.n1b('channelId', true);
    tmp0_serialDesc.n1b('author', true);
    tmp0_serialDesc.n1b('content', true);
    tmp0_serialDesc.n1b('timestamp', true);
    tmp0_serialDesc.n1b('editedTimestamp', true);
    tmp0_serialDesc.n1b('tts', true);
    tmp0_serialDesc.n1b('mentionEveryone', true);
    tmp0_serialDesc.n1b('mentions', true);
    tmp0_serialDesc.n1b('mentionRoles', true);
    tmp0_serialDesc.n1b('attachments', true);
    tmp0_serialDesc.n1b('embeds', true);
    tmp0_serialDesc.n1b('reactions', true);
    tmp0_serialDesc.n1b('pinned', true);
    tmp0_serialDesc.n1b('webhookId', true);
    tmp0_serialDesc.n1b('type', true);
    tmp0_serialDesc.n1b('guildId', true);
    tmp0_serialDesc.n1b('member', true);
    tmp0_serialDesc.n1b('messageReference', true);
    tmp0_serialDesc.n1b('referencedMessage', true);
    tmp0_serialDesc.n1b('position', true);
    this.okt_1 = tmp0_serialDesc;
  }
  pkt(encoder, value) {
    var tmp0_desc = this.okt_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().nkt_1;
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.channelId == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.channelId);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.author == null)) {
      tmp1_output.n15(tmp0_desc, 2, $serializer_getInstance_15(), value.author);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.content == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.content);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.timestamp == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.editedTimestamp == null)) {
      tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.editedTimestamp);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.tts == null)) {
      tmp1_output.n15(tmp0_desc, 6, BooleanSerializer_getInstance(), value.tts);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.mentionEveryone == null)) {
      tmp1_output.n15(tmp0_desc, 7, BooleanSerializer_getInstance(), value.mentionEveryone);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.mentions == null)) {
      tmp1_output.n15(tmp0_desc, 8, tmp2_cached[8].d3(), value.mentions);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.mentionRoles == null)) {
      tmp1_output.n15(tmp0_desc, 9, tmp2_cached[9].d3(), value.mentionRoles);
    }
    if (tmp1_output.r15(tmp0_desc, 10) ? true : !(value.attachments == null)) {
      tmp1_output.n15(tmp0_desc, 10, tmp2_cached[10].d3(), value.attachments);
    }
    if (tmp1_output.r15(tmp0_desc, 11) ? true : !(value.embeds == null)) {
      tmp1_output.n15(tmp0_desc, 11, tmp2_cached[11].d3(), value.embeds);
    }
    if (tmp1_output.r15(tmp0_desc, 12) ? true : !(value.reactions == null)) {
      tmp1_output.n15(tmp0_desc, 12, tmp2_cached[12].d3(), value.reactions);
    }
    if (tmp1_output.r15(tmp0_desc, 13) ? true : !(value.pinned == null)) {
      tmp1_output.n15(tmp0_desc, 13, BooleanSerializer_getInstance(), value.pinned);
    }
    if (tmp1_output.r15(tmp0_desc, 14) ? true : !(value.webhookId == null)) {
      tmp1_output.n15(tmp0_desc, 14, StringSerializer_getInstance(), value.webhookId);
    }
    if (tmp1_output.r15(tmp0_desc, 15) ? true : !(value.type == null)) {
      tmp1_output.n15(tmp0_desc, 15, IntSerializer_getInstance(), value.type);
    }
    if (tmp1_output.r15(tmp0_desc, 16) ? true : !(value.guildId == null)) {
      tmp1_output.n15(tmp0_desc, 16, StringSerializer_getInstance(), value.guildId);
    }
    if (tmp1_output.r15(tmp0_desc, 17) ? true : !(value.member == null)) {
      tmp1_output.n15(tmp0_desc, 17, $serializer_getInstance_10(), value.member);
    }
    if (tmp1_output.r15(tmp0_desc, 18) ? true : !(value.messageReference == null)) {
      tmp1_output.n15(tmp0_desc, 18, $serializer_getInstance_12(), value.messageReference);
    }
    if (tmp1_output.r15(tmp0_desc, 19) ? true : !(value.referencedMessage == null)) {
      tmp1_output.n15(tmp0_desc, 19, $serializer_getInstance_11(), value.referencedMessage);
    }
    if (tmp1_output.r15(tmp0_desc, 20) ? true : !(value.position == null)) {
      tmp1_output.n15(tmp0_desc, 20, IntSerializer_getInstance(), value.position);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.pkt(encoder, value instanceof Message ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.okt_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_local18 = null;
    var tmp23_local19 = null;
    var tmp24_local20 = null;
    var tmp25_input = decoder.v13(tmp0_desc);
    var tmp26_cached = Companion_getInstance_13().nkt_1;
    if (tmp25_input.k14()) {
      tmp4_local0 = tmp25_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp25_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp25_input.j14(tmp0_desc, 2, $serializer_getInstance_15(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp25_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp25_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp25_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp25_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp25_input.j14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp25_input.j14(tmp0_desc, 8, tmp26_cached[8].d3(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp25_input.j14(tmp0_desc, 9, tmp26_cached[9].d3(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp25_input.j14(tmp0_desc, 10, tmp26_cached[10].d3(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp25_input.j14(tmp0_desc, 11, tmp26_cached[11].d3(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp25_input.j14(tmp0_desc, 12, tmp26_cached[12].d3(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp25_input.j14(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp25_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp25_input.j14(tmp0_desc, 15, IntSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp25_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp25_input.j14(tmp0_desc, 17, $serializer_getInstance_10(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp25_input.j14(tmp0_desc, 18, $serializer_getInstance_12(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp25_input.j14(tmp0_desc, 19, $serializer_getInstance_11(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp25_input.j14(tmp0_desc, 20, IntSerializer_getInstance(), tmp24_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp25_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp25_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp25_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp25_input.j14(tmp0_desc, 2, $serializer_getInstance_15(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp25_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp25_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp25_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp25_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp25_input.j14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp25_input.j14(tmp0_desc, 8, tmp26_cached[8].d3(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp25_input.j14(tmp0_desc, 9, tmp26_cached[9].d3(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp25_input.j14(tmp0_desc, 10, tmp26_cached[10].d3(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp25_input.j14(tmp0_desc, 11, tmp26_cached[11].d3(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp25_input.j14(tmp0_desc, 12, tmp26_cached[12].d3(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp25_input.j14(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp25_input.j14(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp25_input.j14(tmp0_desc, 15, IntSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp25_input.j14(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp25_input.j14(tmp0_desc, 17, $serializer_getInstance_10(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp25_input.j14(tmp0_desc, 18, $serializer_getInstance_12(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp25_input.j14(tmp0_desc, 19, $serializer_getInstance_11(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp25_input.j14(tmp0_desc, 20, IntSerializer_getInstance(), tmp24_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp25_input.w13(tmp0_desc);
    return Message.qkt(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, null);
  }
  dz() {
    return this.okt_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_13().nkt_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_15()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[8].d3()), get_nullable(tmp0_cached[9].d3()), get_nullable(tmp0_cached[10].d3()), get_nullable(tmp0_cached[11].d3()), get_nullable(tmp0_cached[12].d3()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_10()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_11()), get_nullable(IntSerializer_getInstance())];
  }
}
class Message {
  constructor() {
    Companion_getInstance_13();
    this.id = null;
    this.channelId = null;
    this.author = null;
    this.content = null;
    this.timestamp = null;
    this.editedTimestamp = null;
    this.tts = null;
    this.mentionEveryone = null;
    this.mentions = null;
    this.mentionRoles = null;
    this.attachments = null;
    this.embeds = null;
    this.reactions = null;
    this.pinned = null;
    this.webhookId = null;
    this.type = null;
    this.guildId = null;
    this.member = null;
    this.messageReference = null;
    this.referencedMessage = null;
    this.position = null;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  o9g(_set____db54di) {
    this.channelId = _set____db54di;
  }
  p9g() {
    return this.channelId;
  }
  rkt(_set____db54di) {
    this.author = _set____db54di;
  }
  a7j() {
    return this.author;
  }
  qbo(_set____db54di) {
    this.content = _set____db54di;
  }
  y1o() {
    return this.content;
  }
  mez(_set____db54di) {
    this.timestamp = _set____db54di;
  }
  qd3() {
    return this.timestamp;
  }
  skt(_set____db54di) {
    this.editedTimestamp = _set____db54di;
  }
  tkt() {
    return this.editedTimestamp;
  }
  jko(_set____db54di) {
    this.tts = _set____db54di;
  }
  kko() {
    return this.tts;
  }
  ukt(_set____db54di) {
    this.mentionEveryone = _set____db54di;
  }
  vkt() {
    return this.mentionEveryone;
  }
  wkt(_set____db54di) {
    this.mentions = _set____db54di;
  }
  o6e() {
    return this.mentions;
  }
  xkt(_set____db54di) {
    this.mentionRoles = _set____db54di;
  }
  ykt() {
    return this.mentionRoles;
  }
  zkt(_set____db54di) {
    this.attachments = _set____db54di;
  }
  nes() {
    return this.attachments;
  }
  aku(_set____db54di) {
    this.embeds = _set____db54di;
  }
  l7j() {
    return this.embeds;
  }
  bku(_set____db54di) {
    this.reactions = _set____db54di;
  }
  b35() {
    return this.reactions;
  }
  v7o(_set____db54di) {
    this.pinned = _set____db54di;
  }
  t7a() {
    return this.pinned;
  }
  wa4(_set____db54di) {
    this.webhookId = _set____db54di;
  }
  xa4() {
    return this.webhookId;
  }
  hkp(_set____db54di) {
    this.type = _set____db54di;
  }
  h38() {
    return this.type;
  }
  ikp(_set____db54di) {
    this.guildId = _set____db54di;
  }
  jkp() {
    return this.guildId;
  }
  cku(_set____db54di) {
    this.member = _set____db54di;
  }
  a6w() {
    return this.member;
  }
  dku(_set____db54di) {
    this.messageReference = _set____db54di;
  }
  eku() {
    return this.messageReference;
  }
  fku(_set____db54di) {
    this.referencedMessage = _set____db54di;
  }
  gku() {
    return this.referencedMessage;
  }
  kkp(_set____db54di) {
    this.position = _set____db54di;
  }
  lkp() {
    return this.position;
  }
  static qkt(seen0, id, channelId, author, content, timestamp, editedTimestamp, tts, mentionEveryone, mentions, mentionRoles, attachments, embeds, reactions, pinned, webhookId, type, guildId, member, messageReference, referencedMessage, position, serializationConstructorMarker) {
    Companion_getInstance_13();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().okt_1);
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
      $this.author = null;
    else
      $this.author = author;
    if (0 === (seen0 & 8))
      $this.content = null;
    else
      $this.content = content;
    if (0 === (seen0 & 16))
      $this.timestamp = null;
    else
      $this.timestamp = timestamp;
    if (0 === (seen0 & 32))
      $this.editedTimestamp = null;
    else
      $this.editedTimestamp = editedTimestamp;
    if (0 === (seen0 & 64))
      $this.tts = null;
    else
      $this.tts = tts;
    if (0 === (seen0 & 128))
      $this.mentionEveryone = null;
    else
      $this.mentionEveryone = mentionEveryone;
    if (0 === (seen0 & 256))
      $this.mentions = null;
    else
      $this.mentions = mentions;
    if (0 === (seen0 & 512))
      $this.mentionRoles = null;
    else
      $this.mentionRoles = mentionRoles;
    if (0 === (seen0 & 1024))
      $this.attachments = null;
    else
      $this.attachments = attachments;
    if (0 === (seen0 & 2048))
      $this.embeds = null;
    else
      $this.embeds = embeds;
    if (0 === (seen0 & 4096))
      $this.reactions = null;
    else
      $this.reactions = reactions;
    if (0 === (seen0 & 8192))
      $this.pinned = null;
    else
      $this.pinned = pinned;
    if (0 === (seen0 & 16384))
      $this.webhookId = null;
    else
      $this.webhookId = webhookId;
    if (0 === (seen0 & 32768))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 65536))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    if (0 === (seen0 & 131072))
      $this.member = null;
    else
      $this.member = member;
    if (0 === (seen0 & 262144))
      $this.messageReference = null;
    else
      $this.messageReference = messageReference;
    if (0 === (seen0 & 524288))
      $this.referencedMessage = null;
    else
      $this.referencedMessage = referencedMessage;
    if (0 === (seen0 & 1048576))
      $this.position = null;
    else
      $this.position = position;
    return $this;
  }
}
class Companion_13 {}
class $serializer_12 {
  constructor() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.MessageReference', this, 5);
    tmp0_serialDesc.n1b('type', true);
    tmp0_serialDesc.n1b('messageId', true);
    tmp0_serialDesc.n1b('channelId', true);
    tmp0_serialDesc.n1b('guildId', true);
    tmp0_serialDesc.n1b('failIfNotExists', true);
    this.hku_1 = tmp0_serialDesc;
  }
  iku(encoder, value) {
    var tmp0_desc = this.hku_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.type == null)) {
      tmp1_output.n15(tmp0_desc, 0, IntSerializer_getInstance(), value.type);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.messageId == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.messageId);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.channelId == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.channelId);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.guildId == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.guildId);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.failIfNotExists == null)) {
      tmp1_output.n15(tmp0_desc, 4, BooleanSerializer_getInstance(), value.failIfNotExists);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.iku(encoder, value instanceof MessageReference ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.hku_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.v13(tmp0_desc);
    if (tmp9_input.k14()) {
      tmp4_local0 = tmp9_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.j14(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.j14(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp9_input.w13(tmp0_desc);
    return MessageReference.jku(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  dz() {
    return this.hku_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class MessageReference {
  constructor() {
    this.type = null;
    this.messageId = null;
    this.channelId = null;
    this.guildId = null;
    this.failIfNotExists = null;
  }
  hkp(_set____db54di) {
    this.type = _set____db54di;
  }
  h38() {
    return this.type;
  }
  i9s(_set____db54di) {
    this.messageId = _set____db54di;
  }
  f6r() {
    return this.messageId;
  }
  o9g(_set____db54di) {
    this.channelId = _set____db54di;
  }
  p9g() {
    return this.channelId;
  }
  ikp(_set____db54di) {
    this.guildId = _set____db54di;
  }
  jkp() {
    return this.guildId;
  }
  kku(_set____db54di) {
    this.failIfNotExists = _set____db54di;
  }
  lku() {
    return this.failIfNotExists;
  }
  static jku(seen0, type, messageId, channelId, guildId, failIfNotExists, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().hku_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 2))
      $this.messageId = null;
    else
      $this.messageId = messageId;
    if (0 === (seen0 & 4))
      $this.channelId = null;
    else
      $this.channelId = channelId;
    if (0 === (seen0 & 8))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    if (0 === (seen0 & 16))
      $this.failIfNotExists = null;
    else
      $this.failIfNotExists = failIfNotExists;
    return $this;
  }
}
class Companion_14 {}
class $serializer_13 {
  constructor() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Reaction', this, 3);
    tmp0_serialDesc.n1b('count', true);
    tmp0_serialDesc.n1b('me', true);
    tmp0_serialDesc.n1b('emoji', true);
    this.mku_1 = tmp0_serialDesc;
  }
  nku(encoder, value) {
    var tmp0_desc = this.mku_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.count == null)) {
      tmp1_output.n15(tmp0_desc, 0, IntSerializer_getInstance(), value.count);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.me == null)) {
      tmp1_output.n15(tmp0_desc, 1, BooleanSerializer_getInstance(), value.me);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.emoji == null)) {
      tmp1_output.n15(tmp0_desc, 2, $serializer_getInstance_8(), value.emoji);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.nku(encoder, value instanceof Reaction ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.mku_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, $serializer_getInstance_8(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.j14(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.j14(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, $serializer_getInstance_8(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return Reaction.oku(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.mku_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_8())];
  }
}
class Reaction {
  constructor() {
    this.count = null;
    this.me = null;
    this.emoji = null;
  }
  j39(_set____db54di) {
    this.count = _set____db54di;
  }
  k39() {
    return this.count;
  }
  pku(_set____db54di) {
    this.me = _set____db54di;
  }
  v2w() {
    return this.me;
  }
  qku(_set____db54di) {
    this.emoji = _set____db54di;
  }
  o33() {
    return this.emoji;
  }
  static oku(seen0, count, me, emoji, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().mku_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.count = null;
    else
      $this.count = count;
    if (0 === (seen0 & 2))
      $this.me = null;
    else
      $this.me = me;
    if (0 === (seen0 & 4))
      $this.emoji = null;
    else
      $this.emoji = emoji;
    return $this;
  }
}
class Companion_15 {}
class $serializer_14 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Role', this, 10);
    tmp0_serialDesc.n1b('id', true);
    tmp0_serialDesc.n1b('name', true);
    tmp0_serialDesc.n1b('color', true);
    tmp0_serialDesc.n1b('hoist', true);
    tmp0_serialDesc.n1b('icon', true);
    tmp0_serialDesc.n1b('unicodeEmoji', true);
    tmp0_serialDesc.n1b('position', true);
    tmp0_serialDesc.n1b('permissions', true);
    tmp0_serialDesc.n1b('managed', true);
    tmp0_serialDesc.n1b('mentionable', true);
    this.rku_1 = tmp0_serialDesc;
  }
  sku(encoder, value) {
    var tmp0_desc = this.rku_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.color == null)) {
      tmp1_output.n15(tmp0_desc, 2, IntSerializer_getInstance(), value.color);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.hoist == null)) {
      tmp1_output.n15(tmp0_desc, 3, BooleanSerializer_getInstance(), value.hoist);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.icon == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.icon);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.unicodeEmoji == null)) {
      tmp1_output.n15(tmp0_desc, 5, StringSerializer_getInstance(), value.unicodeEmoji);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.position == null)) {
      tmp1_output.n15(tmp0_desc, 6, IntSerializer_getInstance(), value.position);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.permissions == null)) {
      tmp1_output.n15(tmp0_desc, 7, StringSerializer_getInstance(), value.permissions);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.managed == null)) {
      tmp1_output.n15(tmp0_desc, 8, BooleanSerializer_getInstance(), value.managed);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.mentionable == null)) {
      tmp1_output.n15(tmp0_desc, 9, BooleanSerializer_getInstance(), value.mentionable);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.sku(encoder, value instanceof Role ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.rku_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.v13(tmp0_desc);
    if (tmp14_input.k14()) {
      tmp4_local0 = tmp14_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.j14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.j14(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.j14(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.j14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.j14(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.j14(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.j14(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.j14(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.j14(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.j14(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.j14(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp14_input.w13(tmp0_desc);
    return Role.tku(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  dz() {
    return this.rku_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Role {
  constructor() {
    this.id = null;
    this.name = null;
    this.color = null;
    this.hoist = null;
    this.icon = null;
    this.unicodeEmoji = null;
    this.position = null;
    this.permissions = null;
    this.managed = null;
    this.mentionable = null;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  v36(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  ekq(_set____db54di) {
    this.color = _set____db54di;
  }
  qac() {
    return this.color;
  }
  uku(_set____db54di) {
    this.hoist = _set____db54di;
  }
  vku() {
    return this.hoist;
  }
  oan(_set____db54di) {
    this.icon = _set____db54di;
  }
  qa9() {
    return this.icon;
  }
  wku(_set____db54di) {
    this.unicodeEmoji = _set____db54di;
  }
  xku() {
    return this.unicodeEmoji;
  }
  kkp(_set____db54di) {
    this.position = _set____db54di;
  }
  lkp() {
    return this.position;
  }
  zkr(_set____db54di) {
    this.permissions = _set____db54di;
  }
  wbv() {
    return this.permissions;
  }
  nkr(_set____db54di) {
    this.managed = _set____db54di;
  }
  okr() {
    return this.managed;
  }
  yku(_set____db54di) {
    this.mentionable = _set____db54di;
  }
  zku() {
    return this.mentionable;
  }
  static tku(seen0, id, name, color, hoist, icon, unicodeEmoji, position, permissions, managed, mentionable, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().rku_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.color = null;
    else
      $this.color = color;
    if (0 === (seen0 & 8))
      $this.hoist = null;
    else
      $this.hoist = hoist;
    if (0 === (seen0 & 16))
      $this.icon = null;
    else
      $this.icon = icon;
    if (0 === (seen0 & 32))
      $this.unicodeEmoji = null;
    else
      $this.unicodeEmoji = unicodeEmoji;
    if (0 === (seen0 & 64))
      $this.position = null;
    else
      $this.position = position;
    if (0 === (seen0 & 128))
      $this.permissions = null;
    else
      $this.permissions = permissions;
    if (0 === (seen0 & 256))
      $this.managed = null;
    else
      $this.managed = managed;
    if (0 === (seen0 & 512))
      $this.mentionable = null;
    else
      $this.mentionable = mentionable;
    return $this;
  }
}
class Companion_16 {}
class $serializer_15 {
  constructor() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.User', this, 16);
    tmp0_serialDesc.n1b('id', true);
    tmp0_serialDesc.n1b('username', true);
    tmp0_serialDesc.n1b('discriminator', true);
    tmp0_serialDesc.n1b('globalName', true);
    tmp0_serialDesc.n1b('avatar', true);
    tmp0_serialDesc.n1b('bot', true);
    tmp0_serialDesc.n1b('system', true);
    tmp0_serialDesc.n1b('mfaEnabled', true);
    tmp0_serialDesc.n1b('banner', true);
    tmp0_serialDesc.n1b('accentColor', true);
    tmp0_serialDesc.n1b('locale', true);
    tmp0_serialDesc.n1b('verified', true);
    tmp0_serialDesc.n1b('email', true);
    tmp0_serialDesc.n1b('flags', true);
    tmp0_serialDesc.n1b('premiumType', true);
    tmp0_serialDesc.n1b('publicFlags', true);
    this.akv_1 = tmp0_serialDesc;
  }
  bkv(encoder, value) {
    var tmp0_desc = this.akv_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    if (tmp1_output.r15(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.r15(tmp0_desc, 1) ? true : !(value.username == null)) {
      tmp1_output.n15(tmp0_desc, 1, StringSerializer_getInstance(), value.username);
    }
    if (tmp1_output.r15(tmp0_desc, 2) ? true : !(value.discriminator == null)) {
      tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.discriminator);
    }
    if (tmp1_output.r15(tmp0_desc, 3) ? true : !(value.globalName == null)) {
      tmp1_output.n15(tmp0_desc, 3, StringSerializer_getInstance(), value.globalName);
    }
    if (tmp1_output.r15(tmp0_desc, 4) ? true : !(value.avatar == null)) {
      tmp1_output.n15(tmp0_desc, 4, StringSerializer_getInstance(), value.avatar);
    }
    if (tmp1_output.r15(tmp0_desc, 5) ? true : !(value.bot == null)) {
      tmp1_output.n15(tmp0_desc, 5, BooleanSerializer_getInstance(), value.bot);
    }
    if (tmp1_output.r15(tmp0_desc, 6) ? true : !(value.system == null)) {
      tmp1_output.n15(tmp0_desc, 6, BooleanSerializer_getInstance(), value.system);
    }
    if (tmp1_output.r15(tmp0_desc, 7) ? true : !(value.mfaEnabled == null)) {
      tmp1_output.n15(tmp0_desc, 7, BooleanSerializer_getInstance(), value.mfaEnabled);
    }
    if (tmp1_output.r15(tmp0_desc, 8) ? true : !(value.banner == null)) {
      tmp1_output.n15(tmp0_desc, 8, StringSerializer_getInstance(), value.banner);
    }
    if (tmp1_output.r15(tmp0_desc, 9) ? true : !(value.accentColor == null)) {
      tmp1_output.n15(tmp0_desc, 9, IntSerializer_getInstance(), value.accentColor);
    }
    if (tmp1_output.r15(tmp0_desc, 10) ? true : !(value.locale == null)) {
      tmp1_output.n15(tmp0_desc, 10, StringSerializer_getInstance(), value.locale);
    }
    if (tmp1_output.r15(tmp0_desc, 11) ? true : !(value.verified == null)) {
      tmp1_output.n15(tmp0_desc, 11, BooleanSerializer_getInstance(), value.verified);
    }
    if (tmp1_output.r15(tmp0_desc, 12) ? true : !(value.email == null)) {
      tmp1_output.n15(tmp0_desc, 12, StringSerializer_getInstance(), value.email);
    }
    if (tmp1_output.r15(tmp0_desc, 13) ? true : !(value.flags == null)) {
      tmp1_output.n15(tmp0_desc, 13, IntSerializer_getInstance(), value.flags);
    }
    if (tmp1_output.r15(tmp0_desc, 14) ? true : !(value.premiumType == null)) {
      tmp1_output.n15(tmp0_desc, 14, IntSerializer_getInstance(), value.premiumType);
    }
    if (tmp1_output.r15(tmp0_desc, 15) ? true : !(value.publicFlags == null)) {
      tmp1_output.n15(tmp0_desc, 15, IntSerializer_getInstance(), value.publicFlags);
    }
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.bkv(encoder, value instanceof User ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.akv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.v13(tmp0_desc);
    if (tmp20_input.k14()) {
      tmp4_local0 = tmp20_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.j14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.j14(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.j14(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.j14(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.j14(tmp0_desc, 13, IntSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.j14(tmp0_desc, 14, IntSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.j14(tmp0_desc, 15, IntSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.j14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.j14(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.j14(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.j14(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.j14(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.j14(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.j14(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.j14(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.j14(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.j14(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.j14(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.j14(tmp0_desc, 13, IntSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.j14(tmp0_desc, 14, IntSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.j14(tmp0_desc, 15, IntSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp20_input.w13(tmp0_desc);
    return User.ckv(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  dz() {
    return this.akv_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class User {
  constructor() {
    this.id = null;
    this.username = null;
    this.discriminator = null;
    this.globalName = null;
    this.avatar = null;
    this.bot = null;
    this.system = null;
    this.mfaEnabled = null;
    this.banner = null;
    this.accentColor = null;
    this.locale = null;
    this.verified = null;
    this.email = null;
    this.flags = null;
    this.premiumType = null;
    this.publicFlags = null;
  }
  w8b(_set____db54di) {
    this.id = _set____db54di;
  }
  g3f() {
    return this.id;
  }
  ka2(_set____db54di) {
    this.username = _set____db54di;
  }
  la2() {
    return this.username;
  }
  dkv(_set____db54di) {
    this.discriminator = _set____db54di;
  }
  ekv() {
    return this.discriminator;
  }
  fkv(_set____db54di) {
    this.globalName = _set____db54di;
  }
  gkv() {
    return this.globalName;
  }
  c62(_set____db54di) {
    this.avatar = _set____db54di;
  }
  m3j() {
    return this.avatar;
  }
  hkv(_set____db54di) {
    this.bot = _set____db54di;
  }
  veq() {
    return this.bot;
  }
  ikv(_set____db54di) {
    this.system = _set____db54di;
  }
  jkv() {
    return this.system;
  }
  kkv(_set____db54di) {
    this.mfaEnabled = _set____db54di;
  }
  lkv() {
    return this.mfaEnabled;
  }
  d62(_set____db54di) {
    this.banner = _set____db54di;
  }
  q3j() {
    return this.banner;
  }
  mkv(_set____db54di) {
    this.accentColor = _set____db54di;
  }
  nkv() {
    return this.accentColor;
  }
  kfr(_set____db54di) {
    this.locale = _set____db54di;
  }
  lfr() {
    return this.locale;
  }
  okv(_set____db54di) {
    this.verified = _set____db54di;
  }
  pkv() {
    return this.verified;
  }
  w72(_set____db54di) {
    this.email = _set____db54di;
  }
  a32() {
    return this.email;
  }
  hkt(_set____db54di) {
    this.flags = _set____db54di;
  }
  ikt() {
    return this.flags;
  }
  qkv(_set____db54di) {
    this.premiumType = _set____db54di;
  }
  rkv() {
    return this.premiumType;
  }
  skv(_set____db54di) {
    this.publicFlags = _set____db54di;
  }
  tkv() {
    return this.publicFlags;
  }
  static ckv(seen0, id, username, discriminator, globalName, avatar, bot, system, mfaEnabled, banner, accentColor, locale, verified, email, flags, premiumType, publicFlags, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().akv_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.username = null;
    else
      $this.username = username;
    if (0 === (seen0 & 4))
      $this.discriminator = null;
    else
      $this.discriminator = discriminator;
    if (0 === (seen0 & 8))
      $this.globalName = null;
    else
      $this.globalName = globalName;
    if (0 === (seen0 & 16))
      $this.avatar = null;
    else
      $this.avatar = avatar;
    if (0 === (seen0 & 32))
      $this.bot = null;
    else
      $this.bot = bot;
    if (0 === (seen0 & 64))
      $this.system = null;
    else
      $this.system = system;
    if (0 === (seen0 & 128))
      $this.mfaEnabled = null;
    else
      $this.mfaEnabled = mfaEnabled;
    if (0 === (seen0 & 256))
      $this.banner = null;
    else
      $this.banner = banner;
    if (0 === (seen0 & 512))
      $this.accentColor = null;
    else
      $this.accentColor = accentColor;
    if (0 === (seen0 & 1024))
      $this.locale = null;
    else
      $this.locale = locale;
    if (0 === (seen0 & 2048))
      $this.verified = null;
    else
      $this.verified = verified;
    if (0 === (seen0 & 4096))
      $this.email = null;
    else
      $this.email = email;
    if (0 === (seen0 & 8192))
      $this.flags = null;
    else
      $this.flags = flags;
    if (0 === (seen0 & 16384))
      $this.premiumType = null;
    else
      $this.premiumType = premiumType;
    if (0 === (seen0 & 32768))
      $this.publicFlags = null;
    else
      $this.publicFlags = publicFlags;
    return $this;
  }
}
class FileContent {
  constructor(filename, bytes) {
    this.filename = filename;
    this.bytes = bytes;
    this.description = null;
  }
  ukv(_set____db54di) {
    this.filename = _set____db54di;
  }
  pex() {
    return this.filename;
  }
  q6q(_set____db54di) {
    this.bytes = _set____db54di;
  }
  r6q() {
    return this.bytes;
  }
  z36(_set____db54di) {
    this.description = _set____db54di;
  }
  j36() {
    return this.description;
  }
}
class Companion_17 {
  constructor() {
    this.vkv_1 = 'X-RateLimit-Limit';
    this.wkv_1 = 'X-RateLimit-Remaining';
    this.xkv_1 = 'X-RateLimit-Reset';
    this.ykv_1 = 'X-RateLimit-Bucket';
  }
  of(response) {
    try {
      var limit = response.g55_1.v4('X-RateLimit-Limit');
      var remaining = response.g55_1.v4('X-RateLimit-Remaining');
      var reset = response.g55_1.v4('X-RateLimit-Reset');
      var bucket = response.g55_1.v4('X-RateLimit-Bucket');
      // Inline function 'kotlin.also' call
      var this_0 = new RateLimit();
      var tmp;
      if (limit == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp = !limit.j1();
      }
      if (tmp === true) {
        this_0.limit = toInt(limit.n2(0));
      }
      var tmp_0;
      if (remaining == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !remaining.j1();
      }
      if (tmp_0 === true) {
        this_0.remaining = toInt(remaining.n2(0));
      }
      var tmp_1;
      if (reset == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_1 = !reset.j1();
      }
      if (tmp_1 === true) {
        this_0.reset = Companion_getInstance().vu(numberToLong(toDouble(reset.n2(0))));
      }
      var tmp_2;
      if (bucket == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_2 = !bucket.j1();
      }
      if (tmp_2 === true) {
        this_0.bucket = bucket.n2(0);
      }
      return this_0;
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        return null;
      } else {
        throw $p;
      }
    }
  }
}
class RateLimit {
  constructor() {
    this.limit = 0;
    this.remaining = 0;
    this.reset = null;
    this.bucket = null;
  }
  pat(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  qat(_set____db54di) {
    this.remaining = _set____db54di;
  }
  f3a() {
    return this.remaining;
  }
  jcd(_set____db54di) {
    this.reset = _set____db54di;
  }
  g3a() {
    return this.reset;
  }
  zkv(_set____db54di) {
    this.bucket = _set____db54di;
  }
  akw() {
    return this.bucket;
  }
}
class Response {
  constructor(data) {
    this.data = data;
    this.limit = null;
    this.json = null;
  }
  sat(_set____db54di) {
    this.data = _set____db54di;
  }
  c3j() {
    return this.data;
  }
  bkw(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
  vbo(_set____db54di) {
    this.json = _set____db54di;
  }
  w1o() {
    return this.json;
  }
}
class ResponseUnit {
  constructor() {
    this.limit = null;
  }
  bkw(_set____db54di) {
    this.limit = _set____db54di;
  }
  e3a() {
    return this.limit;
  }
}
class AnySerializer {
  constructor() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.ckw_1 = AnySerializer$additionalSerializer$lambda;
    this.dkw_1 = buildClassSerialDescriptor('Any', []);
  }
  dz() {
    return this.dkw_1;
  }
  rz(decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException.a2(toString(message));
    }
    var element = decoder.u1o();
    return toAny(this, element);
  }
  d8f(encoder, value) {
    if (typeof value === 'number') {
      encoder.u14(value);
    } else {
      if (typeof value === 'bigint') {
        encoder.v14(value);
      } else {
        if (typeof value === 'number') {
          encoder.t14(value);
        } else {
          if (typeof value === 'number') {
            encoder.w14(value);
          } else {
            if (typeof value === 'number') {
              encoder.x14(value);
            } else {
              if (typeof value === 'string') {
                encoder.z14(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.r14(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.z14(toString(this));
                  } else {
                    if (!this.ckw_1(encoder, value)) {
                      println("Can't serialize unknown type: " + toString(getKClassFromExpression(value)));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  qz(encoder, value) {
    return this.d8f(encoder, !(value == null) ? value : THROW_CCE());
  }
}
class DiscordImpl {
  constructor(apiHost, token) {
    this.ekw_1 = apiHost;
    this.fkw_1 = token;
    this.gkw_1 = new UsersResourceImpl(this.ekw_1, this.fkw_1);
    this.hkw_1 = new ChannelsResourceImpl(this.ekw_1, this.fkw_1);
    this.ikw_1 = new MessagesResourceImpl(this.ekw_1, this.fkw_1);
    this.jkw_1 = new ReactionsResourceImpl(this.ekw_1, this.fkw_1);
    this.kkw_1 = new GuildsResourceImpl(this.ekw_1, this.fkw_1);
    this.lkw_1 = new GatewayResourceImpl(this.ekw_1, this.fkw_1);
  }
  z3a() {
    return this.ekw_1;
  }
  p73() {
    return this.fkw_1;
  }
  users() {
    return this.gkw_1;
  }
  channels() {
    return this.hkw_1;
  }
  messages() {
    return this.ikw_1;
  }
  reactions() {
    return this.jkw_1;
  }
  guilds() {
    return this.kkw_1;
  }
  gateway() {
    return this.lkw_1;
  }
  get apiHost() {
    return this.z3a();
  }
  get token() {
    return this.p73();
  }
}
class InternalUtility {
  constructor() {
    InternalUtility_instance = this;
    var tmp = this;
    tmp.mkw_1 = Json(VOID, InternalUtility$json$lambda);
  }
}
class Companion_18 {
  constructor() {
    this.nkw_1 = 'kdiscord (https://github.com/uakihir0/kdiscord, 0.0.1)';
  }
}
class AbstractResourceImpl {
  constructor(uri, token) {
    this.okw_1 = uri;
    this.pkw_1 = token;
  }
  qkw(_this__u8e3s4) {
    return _this__u8e3s4.r54('Authorization', this.pkw_1).r54('User-Agent', 'kdiscord (https://github.com/uakihir0/kdiscord, 0.0.1)');
  }
  rkw(response) {
    var exception = DiscordException.dkm(response.f55_1, response.j55());
    if (response.f55_1 === 429) {
      try {
        var body = get_jsonObject(InternalUtility_getInstance().mkw_1.p1m(response.j55()));
        var tmp = exception;
        var tmp0_safe_receiver = body.aj('retry_after');
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        tmp.akm_1 = tmp1_safe_receiver == null ? null : get_doubleOrNull(tmp1_safe_receiver);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
        } else {
          throw $p;
        }
      }
    }
    return exception;
  }
  scd(_this__u8e3s4, key, value) {
    if (!(value == null)) {
      _this__u8e3s4.w54(key, value);
    }
    return _this__u8e3s4;
  }
}
class Companion_19 {}
class $serializer_16 {
  constructor() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.ChannelsResourceImpl.CreateDmBody', this, 1);
    tmp0_serialDesc.n1b('recipientId', false);
    this.skw_1 = tmp0_serialDesc;
  }
  tkw(encoder, value) {
    var tmp0_desc = this.skw_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    tmp1_output.k15(tmp0_desc, 0, value.ukw_1);
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.tkw(encoder, value instanceof CreateDmBody ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.skw_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.v13(tmp0_desc);
    if (tmp5_input.k14()) {
      tmp4_local0 = tmp5_input.f14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.f14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp5_input.w13(tmp0_desc);
    return CreateDmBody.vkw(tmp3_bitMask0, tmp4_local0, null);
  }
  dz() {
    return this.skw_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class CreateDmBody {
  constructor(recipientId) {
    this.ukw_1 = recipientId;
  }
  static vkw(seen0, recipientId, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_16().skw_1);
    }
    var $this = createThis(this);
    $this.ukw_1 = recipientId;
    return $this;
  }
}
class ChannelsResourceImpl extends AbstractResourceImpl {
  *gkm(channelId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, ChannelsResourceImpl$getChannel$slambda(this, channelId), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Channel), arrayOf([]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getChannel(channelId) {
    return promisify(($completion) => this.gkm(channelId, $completion));
  }
  *hkm(channelId, $completion) {
    return this.getChannel === protoOf(ChannelsResourceImpl).getChannel ? (yield* this.gkm(channelId, $completion)) : (yield* await_0(this.getChannel(channelId), $completion));
  }
  xif(channelId) {
    return toBlocking(ChannelsResourceImpl$getChannelBlocking$slambda(this, channelId));
  }
  *ikm($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, ChannelsResourceImpl$listDmChannels$slambda(this), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ug(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Channel), arrayOf([]), false))]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  listDmChannels() {
    return promisify(($completion) => this.ikm($completion));
  }
  *ekm($completion) {
    return this.listDmChannels === protoOf(ChannelsResourceImpl).listDmChannels ? (yield* this.ikm($completion)) : (yield* await_0(this.listDmChannels(), $completion));
  }
  jkm() {
    return toBlocking(ChannelsResourceImpl$listDmChannelsBlocking$slambda(this));
  }
  *kkm(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, ChannelsResourceImpl$createDm$slambda(this, request), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Channel), arrayOf([]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  createDm(request) {
    return promisify(($completion) => this.kkm(request, $completion));
  }
  *fkm(request, $completion) {
    return this.createDm === protoOf(ChannelsResourceImpl).createDm ? (yield* this.kkm(request, $completion)) : (yield* await_0(this.createDm(request), $completion));
  }
  lkm(request) {
    return toBlocking(ChannelsResourceImpl$createDmBlocking$slambda(this, request));
  }
}
class GatewayResourceImpl extends AbstractResourceImpl {
  *nkm($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, GatewayResourceImpl$getGateway$slambda(this), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(GatewayResponse), arrayOf([]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getGateway() {
    return promisify(($completion) => this.nkm($completion));
  }
  *mkm($completion) {
    return this.getGateway === protoOf(GatewayResourceImpl).getGateway ? (yield* this.nkm($completion)) : (yield* await_0(this.getGateway(), $completion));
  }
  okm() {
    return toBlocking(GatewayResourceImpl$getGatewayBlocking$slambda(this));
  }
}
class GuildsResourceImpl extends AbstractResourceImpl {
  *rkm(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, GuildsResourceImpl$getCurrentUserGuilds$slambda(this, request), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ug(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Guild), arrayOf([]), false))]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getCurrentUserGuilds(request) {
    return promisify(($completion) => this.rkm(request, $completion));
  }
  *pkm(request, $completion) {
    return this.getCurrentUserGuilds === protoOf(GuildsResourceImpl).getCurrentUserGuilds ? (yield* this.rkm(request, $completion)) : (yield* await_0(this.getCurrentUserGuilds(request), $completion));
  }
  skm(request) {
    return toBlocking(GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda(this, request));
  }
  *tkm(guildId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, GuildsResourceImpl$getGuild$slambda(this, guildId), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Guild), arrayOf([]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getGuild(guildId) {
    return promisify(($completion) => this.tkm(guildId, $completion));
  }
  *ukm(guildId, $completion) {
    return this.getGuild === protoOf(GuildsResourceImpl).getGuild ? (yield* this.tkm(guildId, $completion)) : (yield* await_0(this.getGuild(guildId), $completion));
  }
  vkm(guildId) {
    return toBlocking(GuildsResourceImpl$getGuildBlocking$slambda(this, guildId));
  }
  *wkm(guildId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, GuildsResourceImpl$listGuildChannels$slambda(this, guildId), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ug(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Channel), arrayOf([]), false))]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  listGuildChannels(guildId) {
    return promisify(($completion) => this.wkm(guildId, $completion));
  }
  *qkm(guildId, $completion) {
    return this.listGuildChannels === protoOf(GuildsResourceImpl).listGuildChannels ? (yield* this.wkm(guildId, $completion)) : (yield* await_0(this.listGuildChannels(guildId), $completion));
  }
  xkm(guildId) {
    return toBlocking(GuildsResourceImpl$listGuildChannelsBlocking$slambda(this, guildId));
  }
}
class Companion_20 {
  constructor() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.dkx_1 = [null, null, null, lazy(tmp_0, MessagesResourceImpl$CreateMessageBody$Companion$$childSerializers$_anonymous__vkyigp)];
  }
}
class $serializer_17 {
  constructor() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.MessagesResourceImpl.CreateMessageBody', this, 4);
    tmp0_serialDesc.n1b('content', false);
    tmp0_serialDesc.n1b('tts', false);
    tmp0_serialDesc.n1b('messageReference', false);
    tmp0_serialDesc.n1b('attachments', false);
    this.ekx_1 = tmp0_serialDesc;
  }
  fkx(encoder, value) {
    var tmp0_desc = this.ekx_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().dkx_1;
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.gkx_1);
    tmp1_output.n15(tmp0_desc, 1, BooleanSerializer_getInstance(), value.hkx_1);
    tmp1_output.n15(tmp0_desc, 2, $serializer_getInstance_18(), value.ikx_1);
    tmp1_output.n15(tmp0_desc, 3, tmp2_cached[3].d3(), value.jkx_1);
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.fkx(encoder, value instanceof CreateMessageBody ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.ekx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.v13(tmp0_desc);
    var tmp9_cached = Companion_getInstance_21().dkx_1;
    if (tmp8_input.k14()) {
      tmp4_local0 = tmp8_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.j14(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.j14(tmp0_desc, 2, $serializer_getInstance_18(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.j14(tmp0_desc, 3, tmp9_cached[3].d3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.j14(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.j14(tmp0_desc, 2, $serializer_getInstance_18(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.j14(tmp0_desc, 3, tmp9_cached[3].d3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp8_input.w13(tmp0_desc);
    return CreateMessageBody.kkx(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  dz() {
    return this.ekx_1;
  }
  d1c() {
    var tmp0_cached = Companion_getInstance_21().dkx_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_18()), get_nullable(tmp0_cached[3].d3())];
  }
}
class Companion_21 {}
class $serializer_18 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.MessagesResourceImpl.MessageReferenceBody', this, 1);
    tmp0_serialDesc.n1b('messageId', false);
    this.lkx_1 = tmp0_serialDesc;
  }
  mkx(encoder, value) {
    var tmp0_desc = this.lkx_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    tmp1_output.k15(tmp0_desc, 0, value.nkx_1);
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.mkx(encoder, value instanceof MessageReferenceBody ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.lkx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.v13(tmp0_desc);
    if (tmp5_input.k14()) {
      tmp4_local0 = tmp5_input.f14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.f14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp5_input.w13(tmp0_desc);
    return MessageReferenceBody.okx(tmp3_bitMask0, tmp4_local0, null);
  }
  dz() {
    return this.lkx_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class Companion_22 {}
class $serializer_19 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.MessagesResourceImpl.AttachmentBody', this, 3);
    tmp0_serialDesc.n1b('id', false);
    tmp0_serialDesc.n1b('filename', false);
    tmp0_serialDesc.n1b('description', false);
    this.pkx_1 = tmp0_serialDesc;
  }
  qkx(encoder, value) {
    var tmp0_desc = this.pkx_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    tmp1_output.f15(tmp0_desc, 0, value.rkx_1);
    tmp1_output.k15(tmp0_desc, 1, value.skx_1);
    tmp1_output.n15(tmp0_desc, 2, StringSerializer_getInstance(), value.tkx_1);
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.qkx(encoder, value instanceof AttachmentBody ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.pkx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.v13(tmp0_desc);
    if (tmp7_input.k14()) {
      tmp4_local0 = tmp7_input.a14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.f14(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.a14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.f14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.j14(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp7_input.w13(tmp0_desc);
    return AttachmentBody.ukx(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  dz() {
    return this.pkx_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_23 {}
class $serializer_20 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.MessagesResourceImpl.EditMessageBody', this, 1);
    tmp0_serialDesc.n1b('content', false);
    this.vkx_1 = tmp0_serialDesc;
  }
  wkx(encoder, value) {
    var tmp0_desc = this.vkx_1;
    var tmp1_output = encoder.v13(tmp0_desc);
    tmp1_output.n15(tmp0_desc, 0, StringSerializer_getInstance(), value.xkx_1);
    tmp1_output.w13(tmp0_desc);
  }
  qz(encoder, value) {
    return this.wkx(encoder, value instanceof EditMessageBody ? value : THROW_CCE());
  }
  rz(decoder) {
    var tmp0_desc = this.vkx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.v13(tmp0_desc);
    if (tmp5_input.k14()) {
      tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.j14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.f11(tmp2_index);
        }
      }
    tmp5_input.w13(tmp0_desc);
    return EditMessageBody.ykx(tmp3_bitMask0, tmp4_local0, null);
  }
  dz() {
    return this.vkx_1;
  }
  d1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class CreateMessageBody {
  constructor(content, tts, messageReference, attachments) {
    Companion_getInstance_21();
    this.gkx_1 = content;
    this.hkx_1 = tts;
    this.ikx_1 = messageReference;
    this.jkx_1 = attachments;
  }
  static kkx(seen0, content, tts, messageReference, attachments, serializationConstructorMarker) {
    Companion_getInstance_21();
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_17().ekx_1);
    }
    var $this = createThis(this);
    $this.gkx_1 = content;
    $this.hkx_1 = tts;
    $this.ikx_1 = messageReference;
    $this.jkx_1 = attachments;
    return $this;
  }
}
class MessageReferenceBody {
  constructor(messageId) {
    this.nkx_1 = messageId;
  }
  static okx(seen0, messageId, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_18().lkx_1);
    }
    var $this = createThis(this);
    $this.nkx_1 = messageId;
    return $this;
  }
}
class AttachmentBody {
  constructor(id, filename, description) {
    this.rkx_1 = id;
    this.skx_1 = filename;
    this.tkx_1 = description;
  }
  static ukx(seen0, id, filename, description, serializationConstructorMarker) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_19().pkx_1);
    }
    var $this = createThis(this);
    $this.rkx_1 = id;
    $this.skx_1 = filename;
    $this.tkx_1 = description;
    return $this;
  }
}
class EditMessageBody {
  constructor(content) {
    this.xkx_1 = content;
  }
  static ykx(seen0, content, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_20().vkx_1);
    }
    var $this = createThis(this);
    $this.xkx_1 = content;
    return $this;
  }
}
class MessagesResourceImpl extends AbstractResourceImpl {
  *ckn(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, MessagesResourceImpl$list$slambda(this, request), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ug(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Message), arrayOf([]), false))]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  list(request) {
    return promisify(($completion) => this.ckn(request, $completion));
  }
  *ykm(request, $completion) {
    return this.list === protoOf(MessagesResourceImpl).list ? (yield* this.ckn(request, $completion)) : (yield* await_0(this.list(request), $completion));
  }
  dkn(request) {
    return toBlocking(MessagesResourceImpl$listBlocking$slambda(this, request));
  }
  *ekn(channelId, messageId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, MessagesResourceImpl$get$slambda(this, channelId, messageId), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Message), arrayOf([]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  get(channelId, messageId) {
    return promisify(($completion) => this.ekn(channelId, messageId, $completion));
  }
  *zkm(channelId, messageId, $completion) {
    return this.get === protoOf(MessagesResourceImpl).get ? (yield* this.ekn(channelId, messageId, $completion)) : (yield* await_0(this.get(channelId, messageId), $completion));
  }
  fkn(channelId, messageId) {
    return toBlocking(MessagesResourceImpl$getBlocking$slambda(this, channelId, messageId));
  }
  *gkn(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, MessagesResourceImpl$create$slambda(request, this), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Message), arrayOf([]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  create(request) {
    return promisify(($completion) => this.gkn(request, $completion));
  }
  *akn(request, $completion) {
    return this.create === protoOf(MessagesResourceImpl).create ? (yield* this.gkn(request, $completion)) : (yield* await_0(this.create(request), $completion));
  }
  hkn(request) {
    return toBlocking(MessagesResourceImpl$createBlocking$slambda(this, request));
  }
  *ikn(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, MessagesResourceImpl$edit$slambda(this, request), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Message), arrayOf([]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  edit(request) {
    return promisify(($completion) => this.ikn(request, $completion));
  }
  *jkn(request, $completion) {
    return this.edit === protoOf(MessagesResourceImpl).edit ? (yield* this.ikn(request, $completion)) : (yield* await_0(this.edit(request), $completion));
  }
  kkn(request) {
    return toBlocking(MessagesResourceImpl$editBlocking$slambda(this, request));
  }
  *lkn(channelId, messageId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, MessagesResourceImpl$delete$slambda(this, channelId, messageId), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_17.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  delete(channelId, messageId) {
    return promisify(($completion) => this.lkn(channelId, messageId, $completion));
  }
  *bkn(channelId, messageId, $completion) {
    return this.delete === protoOf(MessagesResourceImpl).delete ? (yield* this.lkn(channelId, messageId, $completion)) : (yield* await_0(this.delete(channelId, messageId), $completion));
  }
  iii(channelId, messageId) {
    return toBlocking(MessagesResourceImpl$deleteBlocking$slambda(this, channelId, messageId));
  }
}
class ReactionsResourceImpl extends AbstractResourceImpl {
  *okn(channelId, messageId, emoji, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, ReactionsResourceImpl$createReaction$slambda(this, channelId, messageId, emoji), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_17.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  createReaction(channelId, messageId, emoji) {
    return promisify(($completion) => this.okn(channelId, messageId, emoji, $completion));
  }
  *mkn(channelId, messageId, emoji, $completion) {
    return this.createReaction === protoOf(ReactionsResourceImpl).createReaction ? (yield* this.okn(channelId, messageId, emoji, $completion)) : (yield* await_0(this.createReaction(channelId, messageId, emoji), $completion));
  }
  pkn(channelId, messageId, emoji) {
    return toBlocking(ReactionsResourceImpl$createReactionBlocking$slambda(this, channelId, messageId, emoji));
  }
  *qkn(channelId, messageId, emoji, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, ReactionsResourceImpl$deleteOwnReaction$slambda(this, channelId, messageId, emoji), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_17.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteOwnReaction(channelId, messageId, emoji) {
    return promisify(($completion) => this.qkn(channelId, messageId, emoji, $completion));
  }
  *nkn(channelId, messageId, emoji, $completion) {
    return this.deleteOwnReaction === protoOf(ReactionsResourceImpl).deleteOwnReaction ? (yield* this.qkn(channelId, messageId, emoji, $completion)) : (yield* await_0(this.deleteOwnReaction(channelId, messageId, emoji), $completion));
  }
  rkn(channelId, messageId, emoji) {
    return toBlocking(ReactionsResourceImpl$deleteOwnReactionBlocking$slambda(this, channelId, messageId, emoji));
  }
  *skn(channelId, messageId, emoji, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, ReactionsResourceImpl$getReactions$slambda(this, channelId, messageId, emoji), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ug(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(User), arrayOf([]), false))]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getReactions(channelId, messageId, emoji) {
    return promisify(($completion) => this.skn(channelId, messageId, emoji, $completion));
  }
  *tkn(channelId, messageId, emoji, $completion) {
    return this.getReactions === protoOf(ReactionsResourceImpl).getReactions ? (yield* this.skn(channelId, messageId, emoji, $completion)) : (yield* await_0(this.getReactions(channelId, messageId, emoji), $completion));
  }
  ukn(channelId, messageId, emoji) {
    return toBlocking(ReactionsResourceImpl$getReactionsBlocking$slambda(this, channelId, messageId, emoji));
  }
  *vkn(channelId, messageId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, ReactionsResourceImpl$deleteAllReactions$slambda(this, channelId, messageId), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_17.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteAllReactions(channelId, messageId) {
    return promisify(($completion) => this.vkn(channelId, messageId, $completion));
  }
  *wkn(channelId, messageId, $completion) {
    return this.deleteAllReactions === protoOf(ReactionsResourceImpl).deleteAllReactions ? (yield* this.vkn(channelId, messageId, $completion)) : (yield* await_0(this.deleteAllReactions(channelId, messageId), $completion));
  }
  xkn(channelId, messageId) {
    return toBlocking(ReactionsResourceImpl$deleteAllReactionsBlocking$slambda(this, channelId, messageId));
  }
}
class UsersResourceImpl extends AbstractResourceImpl {
  *ako($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, UsersResourceImpl$getMe$slambda(this), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(User), arrayOf([]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getMe() {
    return promisify(($completion) => this.ako($completion));
  }
  *ykn($completion) {
    return this.getMe === protoOf(UsersResourceImpl).getMe ? (yield* this.ako($completion)) : (yield* await_0(this.getMe(), $completion));
  }
  bko() {
    return toBlocking(UsersResourceImpl$getMeBlocking$slambda(this));
  }
  *cko(userId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kdiscord.internal.api.AbstractResourceImpl.proceed' call
      try {
        var tmp = Dispatchers_getInstance().g2h_1;
        var response = yield* withContext(tmp, UsersResourceImpl$getUser$slambda(this, userId), $completion);
        var containsArg = response.f55_1;
        if (200 <= containsArg ? containsArg <= 299 : false) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.fromJson' call
          var obj = response.j55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.mkw_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.oz();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(User), arrayOf([]), false));
          var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$1 = this_0.p10(tmp$ret$3, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$1);
          this_3.limit = Companion_instance_17.of(response);
          this_3.json = response.j55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw this.rkw(response);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
          throw tmp0_elvis_lhs == null ? DiscordException.ckm(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getUser(userId) {
    return promisify(($completion) => this.cko(userId, $completion));
  }
  *zkn(userId, $completion) {
    return this.getUser === protoOf(UsersResourceImpl).getUser ? (yield* this.cko(userId, $completion)) : (yield* await_0(this.getUser(userId), $completion));
  }
  dko(userId) {
    return toBlocking(UsersResourceImpl$getUserBlocking$slambda(this, userId));
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.wkw_1 = Application_getInstance().r3x_1.toString();
  }
}
//endregion
var Companion_instance;
function Companion_getInstance_0() {
  return Companion_instance;
}
function init_work_socialhub_kdiscord_DiscordException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.bkm_1);
  _this__u8e3s4.ykl_1 = null;
  _this__u8e3s4.zkl_1 = null;
  _this__u8e3s4.akm_1 = null;
}
var DiscordFactory_instance;
function DiscordFactory_getInstance() {
  return DiscordFactory_instance;
}
function *listDmChannels$virtualSuspendBridge($this, $completion) {
  return jsIsFunction($this.ekm) ? (yield* $this.ekm($completion)) : (yield* await_0($this.listDmChannels(), $completion));
}
function *createDm$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.fkm) ? (yield* $this.fkm(request, $completion)) : (yield* await_0($this.createDm(request), $completion));
}
function *getGateway$virtualSuspendBridge($this, $completion) {
  return jsIsFunction($this.mkm) ? (yield* $this.mkm($completion)) : (yield* await_0($this.getGateway(), $completion));
}
function *getCurrentUserGuilds$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.pkm) ? (yield* $this.pkm(request, $completion)) : (yield* await_0($this.getCurrentUserGuilds(request), $completion));
}
function *listGuildChannels$virtualSuspendBridge($this, guildId, $completion) {
  return jsIsFunction($this.qkm) ? (yield* $this.qkm(guildId, $completion)) : (yield* await_0($this.listGuildChannels(guildId), $completion));
}
function *list$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.ykm) ? (yield* $this.ykm(request, $completion)) : (yield* await_0($this.list(request), $completion));
}
function *get$virtualSuspendBridge($this, channelId, messageId, $completion) {
  return jsIsFunction($this.zkm) ? (yield* $this.zkm(channelId, messageId, $completion)) : (yield* await_0($this.get(channelId, messageId), $completion));
}
function *create$virtualSuspendBridge($this, request, $completion) {
  return jsIsFunction($this.akn) ? (yield* $this.akn(request, $completion)) : (yield* await_0($this.create(request), $completion));
}
function *delete$virtualSuspendBridge($this, channelId, messageId, $completion) {
  return jsIsFunction($this.bkn) ? (yield* $this.bkn(channelId, messageId, $completion)) : (yield* await_0($this.delete(channelId, messageId), $completion));
}
function *createReaction$virtualSuspendBridge($this, channelId, messageId, emoji, $completion) {
  return jsIsFunction($this.mkn) ? (yield* $this.mkn(channelId, messageId, emoji, $completion)) : (yield* await_0($this.createReaction(channelId, messageId, emoji), $completion));
}
function *deleteOwnReaction$virtualSuspendBridge($this, channelId, messageId, emoji, $completion) {
  return jsIsFunction($this.nkn) ? (yield* $this.nkn(channelId, messageId, emoji, $completion)) : (yield* await_0($this.deleteOwnReaction(channelId, messageId, emoji), $completion));
}
function *getMe$virtualSuspendBridge($this, $completion) {
  return jsIsFunction($this.ykn) ? (yield* $this.ykn($completion)) : (yield* await_0($this.getMe(), $completion));
}
function *getUser$virtualSuspendBridge($this, userId, $completion) {
  return jsIsFunction($this.zkn) ? (yield* $this.zkn(userId, $completion)) : (yield* await_0($this.getUser(userId), $completion));
}
var Companion_instance_0;
function Companion_getInstance_1() {
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var Companion_instance_1;
function Companion_getInstance_2() {
  return Companion_instance_1;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
function Channel$Companion$$childSerializers$_anonymous__ao7gx3() {
  return new ReferenceArraySerializer(getKClass(User), $serializer_getInstance_15());
}
var Companion_instance_2;
function Companion_getInstance_3() {
  if (Companion_instance_2 === VOID)
    new Companion_2();
  return Companion_instance_2;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
function Embed$Companion$$childSerializers$_anonymous__41n0y9() {
  return new ReferenceArraySerializer(getKClass(EmbedField), $serializer_getInstance_7());
}
var Companion_instance_3;
function Companion_getInstance_4() {
  if (Companion_instance_3 === VOID)
    new Companion_3();
  return Companion_instance_3;
}
var $serializer_instance_2;
function $serializer_getInstance_2() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
var Companion_instance_4;
function Companion_getInstance_5() {
  return Companion_instance_4;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_3();
  return $serializer_instance_3;
}
var Companion_instance_5;
function Companion_getInstance_6() {
  return Companion_instance_5;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_4();
  return $serializer_instance_4;
}
var Companion_instance_6;
function Companion_getInstance_7() {
  return Companion_instance_6;
}
var $serializer_instance_5;
function $serializer_getInstance_5() {
  if ($serializer_instance_5 === VOID)
    new $serializer_5();
  return $serializer_instance_5;
}
var Companion_instance_7;
function Companion_getInstance_8() {
  return Companion_instance_7;
}
var $serializer_instance_6;
function $serializer_getInstance_6() {
  if ($serializer_instance_6 === VOID)
    new $serializer_6();
  return $serializer_instance_6;
}
var Companion_instance_8;
function Companion_getInstance_9() {
  return Companion_instance_8;
}
var $serializer_instance_7;
function $serializer_getInstance_7() {
  if ($serializer_instance_7 === VOID)
    new $serializer_7();
  return $serializer_instance_7;
}
var Companion_instance_9;
function Companion_getInstance_10() {
  return Companion_instance_9;
}
var $serializer_instance_8;
function $serializer_getInstance_8() {
  if ($serializer_instance_8 === VOID)
    new $serializer_8();
  return $serializer_instance_8;
}
function Guild$Companion$$childSerializers$_anonymous__kcz0qf() {
  return new ReferenceArraySerializer(getKClass(Role), $serializer_getInstance_14());
}
function Guild$Companion$$childSerializers$_anonymous__kcz0qf_0() {
  return new ReferenceArraySerializer(getKClass(Emoji), $serializer_getInstance_8());
}
function Guild$Companion$$childSerializers$_anonymous__kcz0qf_1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
}
var Companion_instance_10;
function Companion_getInstance_11() {
  if (Companion_instance_10 === VOID)
    new Companion_10();
  return Companion_instance_10;
}
var $serializer_instance_9;
function $serializer_getInstance_9() {
  if ($serializer_instance_9 === VOID)
    new $serializer_9();
  return $serializer_instance_9;
}
function GuildMember$Companion$$childSerializers$_anonymous__jvbpf() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
}
var Companion_instance_11;
function Companion_getInstance_12() {
  if (Companion_instance_11 === VOID)
    new Companion_11();
  return Companion_instance_11;
}
var $serializer_instance_10;
function $serializer_getInstance_10() {
  if ($serializer_instance_10 === VOID)
    new $serializer_10();
  return $serializer_instance_10;
}
function Message$Companion$$childSerializers$_anonymous__yfg1gj() {
  return new ReferenceArraySerializer(getKClass(User), $serializer_getInstance_15());
}
function Message$Companion$$childSerializers$_anonymous__yfg1gj_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().vg(), StringSerializer_getInstance());
}
function Message$Companion$$childSerializers$_anonymous__yfg1gj_1() {
  return new ReferenceArraySerializer(getKClass(Attachment), $serializer_getInstance_0());
}
function Message$Companion$$childSerializers$_anonymous__yfg1gj_2() {
  return new ReferenceArraySerializer(getKClass(Embed), $serializer_getInstance_2());
}
function Message$Companion$$childSerializers$_anonymous__yfg1gj_3() {
  return new ReferenceArraySerializer(getKClass(Reaction), $serializer_getInstance_13());
}
var Companion_instance_12;
function Companion_getInstance_13() {
  if (Companion_instance_12 === VOID)
    new Companion_12();
  return Companion_instance_12;
}
var $serializer_instance_11;
function $serializer_getInstance_11() {
  if ($serializer_instance_11 === VOID)
    new $serializer_11();
  return $serializer_instance_11;
}
var Companion_instance_13;
function Companion_getInstance_14() {
  return Companion_instance_13;
}
var $serializer_instance_12;
function $serializer_getInstance_12() {
  if ($serializer_instance_12 === VOID)
    new $serializer_12();
  return $serializer_instance_12;
}
var Companion_instance_14;
function Companion_getInstance_15() {
  return Companion_instance_14;
}
var $serializer_instance_13;
function $serializer_getInstance_13() {
  if ($serializer_instance_13 === VOID)
    new $serializer_13();
  return $serializer_instance_13;
}
var Companion_instance_15;
function Companion_getInstance_16() {
  return Companion_instance_15;
}
var $serializer_instance_14;
function $serializer_getInstance_14() {
  if ($serializer_instance_14 === VOID)
    new $serializer_14();
  return $serializer_instance_14;
}
var Companion_instance_16;
function Companion_getInstance_17() {
  return Companion_instance_16;
}
var $serializer_instance_15;
function $serializer_getInstance_15() {
  if ($serializer_instance_15 === VOID)
    new $serializer_15();
  return $serializer_instance_15;
}
var Companion_instance_17;
function Companion_getInstance_18() {
  return Companion_instance_17;
}
function toAny($this, $receiver) {
  if ($receiver instanceof JsonPrimitive) {
    var tmp;
    if ($receiver.x1o()) {
      tmp = $receiver.y1o();
    } else if (!(get_intOrNull($receiver) == null)) {
      tmp = get_int($receiver);
    } else if (!(get_longOrNull($receiver) == null)) {
      tmp = get_long($receiver);
    } else if (!(get_floatOrNull($receiver) == null)) {
      tmp = get_float($receiver);
    } else if (!(get_doubleOrNull($receiver) == null)) {
      tmp = get_double($receiver);
    } else if (!(get_booleanOrNull($receiver) == null)) {
      tmp = get_boolean($receiver);
    } else {
      throw IllegalStateException.o("Can't deserialize unknown type: " + $receiver.toString());
    }
    return tmp;
  } else {
    if ($receiver instanceof JsonArray) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d2(collectionSizeOrDefault($receiver, 10));
      var _iterator__ex2g4s = $receiver.l1();
      while (_iterator__ex2g4s.m1()) {
        var item = _iterator__ex2g4s.n1();
        var tmp$ret$2 = toAny(AnySerializer_getInstance(), item);
        destination.e2(tmp$ret$2);
      }
      return destination;
    } else {
      if ($receiver instanceof JsonObject) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList.d2($receiver.l2());
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s_0 = $receiver.b3().l1();
        while (_iterator__ex2g4s_0.m1()) {
          var item_0 = _iterator__ex2g4s_0.n1();
          var tmp$ret$6 = to(item_0.c3(), toAny(AnySerializer_getInstance(), item_0.d3()));
          destination_0.e2(tmp$ret$6);
        }
        return toMap(destination_0);
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
}
function AnySerializer$additionalSerializer$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
  return false;
}
var AnySerializer_instance;
function AnySerializer_getInstance() {
  if (AnySerializer_instance === VOID)
    new AnySerializer();
  return AnySerializer_instance;
}
function InternalUtility$json$lambda($this$Json) {
  $this$Json.h1n_1 = false;
  $this$Json.g1n_1 = true;
  $this$Json.i1n_1 = true;
  $this$Json.q1n_1 = Builtins_getInstance().p1r_1;
  var tmp = $this$Json;
  // Inline function 'kotlinx.serialization.modules.SerializersModule' call
  var builder = new SerializersModuleBuilder();
  builder.l1l(PrimitiveClasses_getInstance().kg(), AnySerializer_getInstance());
  tmp.x1n_1 = builder.n19();
  return Unit_instance;
}
var InternalUtility_instance;
function InternalUtility_getInstance() {
  if (InternalUtility_instance === VOID)
    new InternalUtility();
  return InternalUtility_instance;
}
var Companion_instance_18;
function Companion_getInstance_19() {
  return Companion_instance_18;
}
var Companion_instance_19;
function Companion_getInstance_20() {
  return Companion_instance_19;
}
var $serializer_instance_16;
function $serializer_getInstance_16() {
  if ($serializer_instance_16 === VOID)
    new $serializer_16();
  return $serializer_instance_16;
}
function ChannelsResourceImpl$getChannel$slambda(this$0, $channelId) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $channelId)).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function ChannelsResourceImpl$getChannelBlocking$slambda(this$0, $channelId) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.hkm($channelId, $completion);
  }, 1);
}
function ChannelsResourceImpl$listDmChannels$slambda(this$0) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/users/@me/channels')).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function ChannelsResourceImpl$listDmChannelsBlocking$slambda(this$0) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ekm($completion);
  }, 1);
}
function ChannelsResourceImpl$createDm$slambda(this$0, $request) {
  return constructCallableReference(function *($this$withContext, $completion) {
    var tmp = this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/users/@me/channels')).q54(MediaType_getInstance().wkw_1);
    var tmp0 = InternalUtility_getInstance();
    // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.toJson' call
    var obj = new CreateDmBody($request.recipientId);
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = tmp0.mkw_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.oz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(CreateDmBody), arrayOf([]), false));
    var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$1 = this_0.o10(tmp$ret$3, obj);
    return yield* tmp.o53(tmp$ret$1).b55($completion);
  }, 1);
}
function ChannelsResourceImpl$createDmBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.fkm($request, $completion);
  }, 1);
}
function GatewayResourceImpl$getGateway$slambda(this$0) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/gateway')).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function GatewayResourceImpl$getGatewayBlocking$slambda(this$0) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.mkm($completion);
  }, 1);
}
function GuildsResourceImpl$getCurrentUserGuilds$slambda(this$0, $request) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw(this$0.scd(this$0.scd(this$0.scd(this$0.scd((new HttpRequest()).p54(this$0.okw_1 + '/users/@me/guilds'), 'before', $request.before), 'after', $request.after), 'limit', $request.limit), 'with_counts', $request.withCounts)).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.pkm($request, $completion);
  }, 1);
}
function GuildsResourceImpl$getGuild$slambda(this$0, $guildId) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/guilds/' + $guildId)).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function GuildsResourceImpl$getGuildBlocking$slambda(this$0, $guildId) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ukm($guildId, $completion);
  }, 1);
}
function GuildsResourceImpl$listGuildChannels$slambda(this$0, $guildId) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/guilds/' + $guildId + '/channels')).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function GuildsResourceImpl$listGuildChannelsBlocking$slambda(this$0, $guildId) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.qkm($guildId, $completion);
  }, 1);
}
function MessagesResourceImpl$CreateMessageBody$Companion$$childSerializers$_anonymous__vkyigp() {
  return new ReferenceArraySerializer(getKClass(AttachmentBody), $serializer_getInstance_19());
}
var Companion_instance_20;
function Companion_getInstance_21() {
  if (Companion_instance_20 === VOID)
    new Companion_20();
  return Companion_instance_20;
}
var $serializer_instance_17;
function $serializer_getInstance_17() {
  if ($serializer_instance_17 === VOID)
    new $serializer_17();
  return $serializer_instance_17;
}
var Companion_instance_21;
function Companion_getInstance_22() {
  return Companion_instance_21;
}
var $serializer_instance_18;
function $serializer_getInstance_18() {
  if ($serializer_instance_18 === VOID)
    new $serializer_18();
  return $serializer_instance_18;
}
var Companion_instance_22;
function Companion_getInstance_23() {
  return Companion_instance_22;
}
var $serializer_instance_19;
function $serializer_getInstance_19() {
  if ($serializer_instance_19 === VOID)
    new $serializer_19();
  return $serializer_instance_19;
}
var Companion_instance_23;
function Companion_getInstance_24() {
  return Companion_instance_23;
}
var $serializer_instance_20;
function $serializer_getInstance_20() {
  if ($serializer_instance_20 === VOID)
    new $serializer_20();
  return $serializer_instance_20;
}
function MessagesResourceImpl$list$slambda(this$0, $request) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw(this$0.scd(this$0.scd(this$0.scd(this$0.scd((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $request.channelId + '/messages'), 'limit', $request.limit), 'around', $request.around), 'before', $request.before), 'after', $request.after)).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function MessagesResourceImpl$listBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ykm($request, $completion);
  }, 1);
}
function MessagesResourceImpl$get$slambda(this$0, $channelId, $messageId) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $channelId + '/messages/' + $messageId)).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function MessagesResourceImpl$getBlocking$slambda(this$0, $channelId, $messageId) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.zkm($channelId, $messageId, $completion);
  }, 1);
}
function MessagesResourceImpl$create$slambda($request, this$0) {
  return constructCallableReference(function *($this$withContext, $completion) {
    var files = $request.files;
    var tmp;
    if (files == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.mapIndexed' call
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList.d2(files.length);
      var index = 0;
      var inductionVariable = 0;
      var last = files.length;
      while (inductionVariable < last) {
        var item = files[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var tmp$ret$3 = new AttachmentBody(_unary__edvuaz, item.filename, item.description);
        destination.e2(tmp$ret$3);
      }
      tmp = destination;
    }
    var tmp1_safe_receiver = tmp;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp1_safe_receiver);
    }
    var attachments = tmp_0;
    var tmp_1 = $request.content;
    var tmp_2 = $request.tts;
    var tmp2_safe_receiver = $request.replyMessageId;
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = new MessageReferenceBody(tmp2_safe_receiver);
    }
    var body = new CreateMessageBody(tmp_1, tmp_2, tmp_3, attachments);
    var http = this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $request.channelId + '/messages')).q54(MediaType_getInstance().wkw_1);
    var tmp_4;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp_5;
    if (files == null) {
      tmp_5 = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_5 = files.length === 0;
    }
    if (tmp_5) {
      // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.toJson' call
      // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
      var this_0 = InternalUtility_getInstance().mkw_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.oz();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(CreateMessageBody), arrayOf([]), false));
      var tmp$ret$11 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var tmp$ret$9 = this_0.o10(tmp$ret$11, body);
      tmp_4 = yield* http.o53(tmp$ret$9).b55($completion);
    } else {
      // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.toJson' call
      // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
      var this_3 = InternalUtility_getInstance().mkw_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_4 = this_3.oz();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_5 = serializer(this_4, createKType(getKClass(CreateMessageBody), arrayOf([]), false));
      var tmp$ret$15 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
      var tmp$ret$13 = this_3.o10(tmp$ret$15, body);
      http.y54('payload_json', tmp$ret$13);
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index_0 = 0;
      var inductionVariable_0 = 0;
      var last_0 = files.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = files[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz_0 = index_0;
        index_0 = _unary__edvuaz_0 + 1 | 0;
        http.n53('files[' + _unary__edvuaz_0 + ']', item_0.filename, item_0.bytes);
      }
      tmp_4 = yield* http.b55($completion);
    }
    return tmp_4;
  }, 1);
}
function MessagesResourceImpl$createBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.akn($request, $completion);
  }, 1);
}
function MessagesResourceImpl$edit$slambda(this$0, $request) {
  return constructCallableReference(function *($this$withContext, $completion) {
    var tmp = this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $request.channelId + '/messages/' + $request.messageId)).q54(MediaType_getInstance().wkw_1);
    var tmp0 = InternalUtility_getInstance();
    // Inline function 'work.socialhub.kdiscord.internal.InternalUtility.toJson' call
    var obj = new EditMessageBody($request.content);
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = tmp0.mkw_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.oz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(EditMessageBody), arrayOf([]), false));
    var tmp$ret$3 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$1 = this_0.o10(tmp$ret$3, obj);
    return yield* tmp.o53(tmp$ret$1).e55($completion);
  }, 1);
}
function MessagesResourceImpl$editBlocking$slambda(this$0, $request) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.jkn($request, $completion);
  }, 1);
}
function MessagesResourceImpl$delete$slambda(this$0, $channelId, $messageId) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $channelId + '/messages/' + $messageId)).q54(MediaType_getInstance().wkw_1).d55($completion);
  }, 1);
}
function MessagesResourceImpl$deleteBlocking$slambda(this$0, $channelId, $messageId) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.bkn($channelId, $messageId, $completion);
  }, 1);
}
function ReactionsResourceImpl$createReaction$slambda(this$0, $channelId, $messageId, $emoji) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $channelId + '/messages/' + $messageId + '/reactions/' + encodeURLPathPart($emoji) + '/@me')).q54(MediaType_getInstance().wkw_1).c55($completion);
  }, 1);
}
function ReactionsResourceImpl$createReactionBlocking$slambda(this$0, $channelId, $messageId, $emoji) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.mkn($channelId, $messageId, $emoji, $completion);
  }, 1);
}
function ReactionsResourceImpl$deleteOwnReaction$slambda(this$0, $channelId, $messageId, $emoji) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $channelId + '/messages/' + $messageId + '/reactions/' + encodeURLPathPart($emoji) + '/@me')).q54(MediaType_getInstance().wkw_1).d55($completion);
  }, 1);
}
function ReactionsResourceImpl$deleteOwnReactionBlocking$slambda(this$0, $channelId, $messageId, $emoji) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.nkn($channelId, $messageId, $emoji, $completion);
  }, 1);
}
function ReactionsResourceImpl$getReactions$slambda(this$0, $channelId, $messageId, $emoji) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $channelId + '/messages/' + $messageId + '/reactions/' + encodeURLPathPart($emoji))).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function ReactionsResourceImpl$getReactionsBlocking$slambda(this$0, $channelId, $messageId, $emoji) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.tkn($channelId, $messageId, $emoji, $completion);
  }, 1);
}
function ReactionsResourceImpl$deleteAllReactions$slambda(this$0, $channelId, $messageId) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/channels/' + $channelId + '/messages/' + $messageId + '/reactions')).q54(MediaType_getInstance().wkw_1).d55($completion);
  }, 1);
}
function ReactionsResourceImpl$deleteAllReactionsBlocking$slambda(this$0, $channelId, $messageId) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.wkn($channelId, $messageId, $completion);
  }, 1);
}
function UsersResourceImpl$getMe$slambda(this$0) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/users/@me')).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function UsersResourceImpl$getMeBlocking$slambda(this$0) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.ykn($completion);
  }, 1);
}
function UsersResourceImpl$getUser$slambda(this$0, $userId) {
  return constructCallableReference(function *($this$withContext, $completion) {
    return yield* this$0.qkw((new HttpRequest()).p54(this$0.okw_1 + '/users/' + $userId)).q54(MediaType_getInstance().wkw_1).a55($completion);
  }, 1);
}
function UsersResourceImpl$getUserBlocking$slambda(this$0, $userId) {
  return constructCallableReference(function *($this$toBlocking, $completion) {
    return yield* this$0.zkn($userId, $completion);
  }, 1);
}
var MediaType_instance;
function MediaType_getInstance() {
  if (MediaType_instance === VOID)
    new MediaType();
  return MediaType_instance;
}
function toBlocking(block) {
  throw UnsupportedOperationException.ua('Blocking operations are not supported in JavaScript. Please use suspend functions or Promise-based APIs instead.');
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForInterface(Discord, 'Discord');
initMetadataForClass(DiscordException, 'DiscordException');
initMetadataForObject(DiscordFactory, 'DiscordFactory');
initMetadataForInterface(ChannelsResource, 'ChannelsResource', VOID, VOID, VOID, [1, 2, 0]);
initMetadataForInterface(GatewayResource, 'GatewayResource', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(GuildsResource, 'GuildsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(MessagesResource, 'MessagesResource', VOID, VOID, VOID, [1, 2, 3]);
initMetadataForInterface(ReactionsResource, 'ReactionsResource', VOID, VOID, VOID, [3, 4, 2]);
initMetadataForInterface(UsersResource, 'UsersResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForClass(ChannelsCreateDmRequest, 'ChannelsCreateDmRequest');
initMetadataForClass(GuildsListRequest, 'GuildsListRequest', GuildsListRequest);
initMetadataForClass(MessagesCreateRequest, 'MessagesCreateRequest');
initMetadataForClass(MessagesEditRequest, 'MessagesEditRequest');
initMetadataForClass(MessagesListRequest, 'MessagesListRequest');
initMetadataForCompanion(Companion_0);
protoOf($serializer).e1c = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(GatewayResponse, 'GatewayResponse', GatewayResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_1);
protoOf($serializer_0).e1c = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Attachment, 'Attachment', Attachment, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_1).e1c = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Channel, 'Channel', Channel, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_2).e1c = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Embed, 'Embed', Embed, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_3).e1c = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EmbedFooter, 'EmbedFooter', EmbedFooter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_4).e1c = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EmbedMedia, 'EmbedMedia', EmbedMedia, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_6);
protoOf($serializer_5).e1c = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EmbedProvider, 'EmbedProvider', EmbedProvider, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_7);
protoOf($serializer_6).e1c = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EmbedAuthor, 'EmbedAuthor', EmbedAuthor, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_8);
protoOf($serializer_7).e1c = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EmbedField, 'EmbedField', EmbedField, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_9);
protoOf($serializer_8).e1c = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Emoji, 'Emoji', Emoji, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_10);
protoOf($serializer_9).e1c = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Guild, 'Guild', Guild, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_11);
protoOf($serializer_10).e1c = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(GuildMember, 'GuildMember', GuildMember, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_12);
protoOf($serializer_11).e1c = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Message, 'Message', Message, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForCompanion(Companion_13);
protoOf($serializer_12).e1c = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MessageReference, 'MessageReference', MessageReference, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_14);
protoOf($serializer_13).e1c = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Reaction, 'Reaction', Reaction, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForCompanion(Companion_15);
protoOf($serializer_14).e1c = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Role, 'Role', Role, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_16);
protoOf($serializer_15).e1c = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(User, 'User', User, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForClass(FileContent, 'FileContent');
initMetadataForCompanion(Companion_17);
initMetadataForClass(RateLimit, 'RateLimit', RateLimit);
initMetadataForClass(Response, 'Response');
initMetadataForClass(ResponseUnit, 'ResponseUnit', ResponseUnit);
initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
initMetadataForClass(DiscordImpl, 'DiscordImpl', VOID, VOID, [Discord]);
initMetadataForObject(InternalUtility, 'InternalUtility');
initMetadataForCompanion(Companion_18);
initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl', VOID, VOID, VOID, [1]);
initMetadataForCompanion(Companion_19);
protoOf($serializer_16).e1c = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CreateDmBody, 'CreateDmBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForClass(ChannelsResourceImpl, 'ChannelsResourceImpl', VOID, VOID, [ChannelsResource], [1, 0]);
initMetadataForClass(GatewayResourceImpl, 'GatewayResourceImpl', VOID, VOID, [GatewayResource], [0, 1]);
initMetadataForClass(GuildsResourceImpl, 'GuildsResourceImpl', VOID, VOID, [GuildsResource], [1]);
initMetadataForCompanion(Companion_20);
protoOf($serializer_17).e1c = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_21);
protoOf($serializer_18).e1c = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_22);
protoOf($serializer_19).e1c = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_23);
protoOf($serializer_20).e1c = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CreateMessageBody, 'CreateMessageBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForClass(MessageReferenceBody, 'MessageReferenceBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForClass(AttachmentBody, 'AttachmentBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForClass(EditMessageBody, 'EditMessageBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForClass(MessagesResourceImpl, 'MessagesResourceImpl', VOID, VOID, [MessagesResource], [1, 2]);
initMetadataForClass(ReactionsResourceImpl, 'ReactionsResourceImpl', VOID, VOID, [ReactionsResource], [3, 2, 1]);
initMetadataForClass(UsersResourceImpl, 'UsersResourceImpl', VOID, VOID, [UsersResource], [0, 1]);
initMetadataForObject(MediaType, 'MediaType');
//endregion
//region block: init
Companion_instance = new Companion();
DiscordFactory_instance = new DiscordFactory();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_4 = new Companion_4();
Companion_instance_5 = new Companion_5();
Companion_instance_6 = new Companion_6();
Companion_instance_7 = new Companion_7();
Companion_instance_8 = new Companion_8();
Companion_instance_9 = new Companion_9();
Companion_instance_13 = new Companion_13();
Companion_instance_14 = new Companion_14();
Companion_instance_15 = new Companion_15();
Companion_instance_16 = new Companion_16();
Companion_instance_17 = new Companion_17();
Companion_instance_18 = new Companion_18();
Companion_instance_19 = new Companion_19();
Companion_instance_21 = new Companion_21();
Companion_instance_22 = new Companion_22();
Companion_instance_23 = new Companion_23();
//endregion
//region block: exports
defineProp(Discord, 'Companion', Companion_getInstance_0, VOID, true);
var DiscordFactory_0 = {getInstance: DiscordFactory_getInstance};
defineProp(RateLimit, 'Companion', Companion_getInstance_18, VOID, true);
export {
  Discord as Discord,
  DiscordFactory_0 as DiscordFactory,
  ChannelsResource as ChannelsResource,
  GatewayResource as GatewayResource,
  GuildsResource as GuildsResource,
  MessagesResource as MessagesResource,
  ReactionsResource as ReactionsResource,
  UsersResource as UsersResource,
  ChannelsCreateDmRequest as ChannelsCreateDmRequest,
  GuildsListRequest as GuildsListRequest,
  MessagesCreateRequest as MessagesCreateRequest,
  MessagesEditRequest as MessagesEditRequest,
  MessagesListRequest as MessagesListRequest,
  GatewayResponse as GatewayResponse,
  Attachment as Attachment,
  Channel as Channel,
  Embed as Embed,
  EmbedFooter as EmbedFooter,
  EmbedMedia as EmbedMedia,
  EmbedProvider as EmbedProvider,
  EmbedAuthor as EmbedAuthor,
  EmbedField as EmbedField,
  Emoji as Emoji,
  Guild as Guild,
  GuildMember as GuildMember,
  Message as Message,
  MessageReference as MessageReference,
  Reaction as Reaction,
  Role as Role,
  User as User,
  FileContent as FileContent,
  RateLimit as RateLimit,
  Response as Response,
  ResponseUnit as ResponseUnit,
};
export {
  $serializer_getInstance_15 as $serializer_getInstancesq3w7vpl5c4o,
  InternalUtility_getInstance as InternalUtility_getInstance3fpx2plgus0pu,
  DiscordFactory_instance as DiscordFactory_instance3p8nhgq0sugqp,
  createDm$virtualSuspendBridge as createDm$virtualSuspendBridge3tro1elem6a02,
  listDmChannels$virtualSuspendBridge as listDmChannels$virtualSuspendBridgetjaorqljryvn,
  getGateway$virtualSuspendBridge as getGateway$virtualSuspendBridgemrcjkkf4zs01,
  getCurrentUserGuilds$virtualSuspendBridge as getCurrentUserGuilds$virtualSuspendBridge3eea9sbzd46bu,
  listGuildChannels$virtualSuspendBridge as listGuildChannels$virtualSuspendBridge9md0f7raa08n,
  create$virtualSuspendBridge as create$virtualSuspendBridge2j43c2u5h6luz,
  delete$virtualSuspendBridge as delete$virtualSuspendBridgea5radto9zeh9,
  get$virtualSuspendBridge as get$virtualSuspendBridge2k7sxco6u9ti3,
  list$virtualSuspendBridge as list$virtualSuspendBridge3pl57unwu269e,
  createReaction$virtualSuspendBridge as createReaction$virtualSuspendBridge12q3t5sxl0aau,
  deleteOwnReaction$virtualSuspendBridge as deleteOwnReaction$virtualSuspendBridge2wp2bu1ajsloa,
  getMe$virtualSuspendBridge as getMe$virtualSuspendBridge27cl7ii7ck11p,
  getUser$virtualSuspendBridge as getUser$virtualSuspendBridgegwrypqw6mq8u,
  ChannelsCreateDmRequest as ChannelsCreateDmRequest2p716amj9fgu3,
  GuildsListRequest as GuildsListRequest178d5rb6mab99,
  MessagesCreateRequest as MessagesCreateRequest1fhrrw0zx8m3i,
  MessagesListRequest as MessagesListRequest38ydn8r2soy24,
  FileContent as FileContent1tuydl9ecixp,
  Guild as Guild3reqjjyk6x66v,
  Message as Message1t83w71f3d5fy,
  DiscordException as DiscordExceptionnp2qbxqrxo3j,
};
//endregion

//# sourceMappingURL=kdiscord-core.mjs.map
