import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  listOf1jh22dvmctj1r as listOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  emptyList1g2z5xcrvp2zy as emptyList,
  toString1pkumu07cwy4m as toString,
  toString30pk9tzaqopn as toString_0,
  hashCodeq5arwsb9dgti as hashCode,
  getBigIntHashCode294hi5bdhtj6e as getBigIntHashCode,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  equals2au1ep9vhcato as equals,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  protoOf180f3jzyo7rfj as protoOf,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  Exceptiondt2hlxn7j7vw as Exception,
  constructCallableReference23y65rf941mch as constructCallableReference,
  createThis2j2avj17cvnv2 as createThis,
  toHexString5bhtjxqec7ow as toHexString,
  ArrayList3it5z8td81qkl as ArrayList,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char19o2r8palgjof as Char,
  to2cs3ny02qtbcb as to,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  until1jbpn0z3f8lbg as until,
  substring2pnd9wgs9hwtx as substring,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  split2bvyvnrlcifjv as split,
  take3onnpy6q7ctcz as take,
  copyToArray2j022khrow2yi as copyToArray,
  println2shhhgwwt4c61 as println,
  printStackTrace18lnx7a39cni as printStackTrace,
  promisify1z0ncraq1ipzh as promisify,
  await335x4cz7ixnm4 as await_0,
  LazyThreadSafetyMode_PUBLICATION_getInstance20ynwq7b0awd8 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  Default_getInstance3u7accvuecmtb as Default_getInstance,
  random234odtwlu7lq2 as random,
} from './kotlin-kotlin-stdlib.mjs';
import {
  ATProtocolConfig30bbb1gj7trou as ATProtocolConfig,
  Service_BSKY_NETWORK_getInstance1bnjibikplwin as Service_BSKY_NETWORK_getInstance,
  BlueskyConfig1k1or0gufya7z as BlueskyConfig,
  toMappedJsondipekar19jef as toMappedJson,
  addParam376b888wfin4l as addParam,
  MapRequest2vm46zr2igv5e as MapRequest,
  InternalUtility_getInstance2cw6y47u34z9g as InternalUtility_getInstance,
  RecordPolymorphicSerializer_getInstance3a0zayc99qtt1 as RecordPolymorphicSerializer_getInstance,
  RepoGetRecordRequest12sssrl1p80cm as RepoGetRecordRequest,
  BlueskyImpl3faw3fgd6w8tl as BlueskyImpl,
  ATProtocolImpl2hdun0rm126ks as ATProtocolImpl,
} from './kbsky-core.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  BooleanSerializer_getInstance3sa31xxwvx0ks as BooleanSerializer_getInstance,
  StringSerializer_getInstancerxlnwnlbnwri as StringSerializer_getInstance,
  LongSerializer_getInstance1q1voa3zes72d as LongSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  get_nullable197rfua9r7fsz as get_nullable,
  decodeFromHexStringteg6eww8pz9e as decodeFromHexString,
  ArrayListSerializer7k5wnrulb3y6 as ArrayListSerializer,
  IntSerializer_getInstance3hkg1llvt1c0z as IntSerializer_getInstance,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { WebsocketRequest38pjwt1m63ieg as WebsocketRequest } from './khttpclient.mjs';
import { Cbor2f4m7hu7pld6l as Cbor } from './kotlinx-serialization-kotlinx-serialization-cbor.mjs';
import {
  URLBuilder2mz8zkz4u9ray as URLBuilder,
  Companion_getInstancehe53gw4v5mqu as Companion_getInstance,
  path4k5mr8826y5 as path,
  Urlowwyg1lanrqp as Url,
} from './ktor-ktor-http.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class ATProtocolStream {}
class ATProtocolStreamConfig extends ATProtocolConfig {
  constructor(firehoseUri) {
    firehoseUri = firehoseUri === VOID ? Service_BSKY_NETWORK_getInstance().v5j_1 : firehoseUri;
    super();
    this.firehoseUri = firehoseUri;
  }
  h8i(_set____db54di) {
    this.firehoseUri = _set____db54di;
  }
  i8i() {
    return this.firehoseUri;
  }
  sl() {
    return this.firehoseUri;
  }
  c6t(firehoseUri) {
    return new ATProtocolStreamConfig(firehoseUri);
  }
  copy(firehoseUri, $super) {
    firehoseUri = firehoseUri === VOID ? this.firehoseUri : firehoseUri;
    return $super === VOID ? this.c6t(firehoseUri) : $super.c6t.call(this, firehoseUri);
  }
  toString() {
    return 'ATProtocolStreamConfig(firehoseUri=' + this.firehoseUri + ')';
  }
  hashCode() {
    return getStringHashCode(this.firehoseUri);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ATProtocolStreamConfig))
      return false;
    if (!(this.firehoseUri === other.firehoseUri))
      return false;
    return true;
  }
}
class ATProtocolStreamFactory {
  instanceFromUri(pdsUri, firehoseUri) {
    // Inline function 'kotlin.also' call
    var this_0 = new ATProtocolStreamConfig();
    this_0.pdsUri = pdsUri;
    this_0.firehoseUri = firehoseUri;
    return new ATProtocolStreamImpl(this_0);
  }
  j8i(config) {
    return new ATProtocolStreamImpl(config);
  }
  instanceFromConfig(config, $super) {
    config = config === VOID ? new ATProtocolStreamConfig() : config;
    return $super === VOID ? this.j8i(config) : $super.j8i.call(this, config);
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    this.k8i_1 = listOf(['jetstream1.us-east.bsky.network', 'jetstream2.us-east.bsky.network', 'jetstream1.us-west.bsky.network', 'jetstream2.us-west.bsky.network']);
  }
}
class BlueskyStreamConfig extends BlueskyConfig {
  constructor(jetStreamHost) {
    Companion_getInstance_0();
    jetStreamHost = jetStreamHost === VOID ? null : jetStreamHost;
    super();
    this.l8i_1 = jetStreamHost;
  }
  toString() {
    return 'BlueskyStreamConfig(jetStreamHost=' + this.l8i_1 + ')';
  }
  hashCode() {
    return this.l8i_1 == null ? 0 : getStringHashCode(this.l8i_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof BlueskyStreamConfig))
      return false;
    if (!(this.l8i_1 == other.l8i_1))
      return false;
    return true;
  }
}
class BlueskyStreamFactory {
  m8i(config) {
    return new BlueskyStreamImpl(config);
  }
  n8i(config, $super) {
    config = config === VOID ? new BlueskyStreamConfig() : config;
    return $super === VOID ? this.m8i(config) : $super.m8i.call(this, config);
  }
}
class SyncResource {}
class JetStreamSubscribeRequest {
  constructor(host, wantedCollections, wantedDids, maxMessageSizeBytes, cursor, requireHello) {
    host = host === VOID ? null : host;
    var tmp;
    if (wantedCollections === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = wantedCollections;
    }
    wantedCollections = tmp;
    var tmp_0;
    if (wantedDids === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = wantedDids;
    }
    wantedDids = tmp_0;
    maxMessageSizeBytes = maxMessageSizeBytes === VOID ? null : maxMessageSizeBytes;
    cursor = cursor === VOID ? null : cursor;
    requireHello = requireHello === VOID ? null : requireHello;
    this.o8i_1 = host;
    this.p8i_1 = wantedCollections;
    this.q8i_1 = wantedDids;
    this.r8i_1 = maxMessageSizeBytes;
    this.s8i_1 = cursor;
    this.t8i_1 = requireHello;
  }
  toString() {
    return 'JetStreamSubscribeRequest(host=' + this.o8i_1 + ', wantedCollections=' + toString(this.p8i_1) + ', wantedDids=' + toString(this.q8i_1) + ', maxMessageSizeBytes=' + toString_0(this.r8i_1) + ', cursor=' + toString_0(this.s8i_1) + ', requireHello=' + this.t8i_1 + ')';
  }
  hashCode() {
    var result = this.o8i_1 == null ? 0 : getStringHashCode(this.o8i_1);
    result = imul(result, 31) + hashCode(this.p8i_1) | 0;
    result = imul(result, 31) + hashCode(this.q8i_1) | 0;
    result = imul(result, 31) + (this.r8i_1 == null ? 0 : getBigIntHashCode(this.r8i_1)) | 0;
    result = imul(result, 31) + (this.s8i_1 == null ? 0 : getBigIntHashCode(this.s8i_1)) | 0;
    result = imul(result, 31) + (this.t8i_1 == null ? 0 : getBooleanHashCode(this.t8i_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JetStreamSubscribeRequest))
      return false;
    if (!(this.o8i_1 == other.o8i_1))
      return false;
    if (!equals(this.p8i_1, other.p8i_1))
      return false;
    if (!equals(this.q8i_1, other.q8i_1))
      return false;
    if (!(this.r8i_1 == other.r8i_1))
      return false;
    if (!(this.s8i_1 == other.s8i_1))
      return false;
    if (!(this.t8i_1 == other.t8i_1))
      return false;
    return true;
  }
}
class SyncSubscribeReposRequest {
  constructor(cursor, filter) {
    cursor = cursor === VOID ? null : cursor;
    var tmp;
    if (filter === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = filter;
    }
    filter = tmp;
    this.cursor = cursor;
    this.filter = filter;
  }
  d60(_set____db54di) {
    this.cursor = _set____db54di;
  }
  e60() {
    return this.cursor;
  }
  u8i(_set____db54di) {
    this.filter = _set____db54di;
  }
  m63() {
    return this.filter;
  }
  toMap() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.r5();
    this.addParam(this_0, 'cursor', this.cursor);
    return this_0;
  }
  sl() {
    return this.cursor;
  }
  tl() {
    return this.filter;
  }
  v8i(cursor, filter) {
    return new SyncSubscribeReposRequest(cursor, filter);
  }
  copy(cursor, filter, $super) {
    cursor = cursor === VOID ? this.cursor : cursor;
    filter = filter === VOID ? this.filter : filter;
    return $super === VOID ? this.v8i(cursor, filter) : $super.v8i.call(this, cursor, filter);
  }
  toString() {
    return 'SyncSubscribeReposRequest(cursor=' + this.cursor + ', filter=' + toString(this.filter) + ')';
  }
  hashCode() {
    var result = this.cursor == null ? 0 : getStringHashCode(this.cursor);
    result = imul(result, 31) + hashCode(this.filter) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SyncSubscribeReposRequest))
      return false;
    if (!(this.cursor == other.cursor))
      return false;
    if (!equals(this.filter, other.filter))
      return false;
    return true;
  }
}
class JetStreamClient {
  constructor(uri) {
    this.w8i_1 = uri;
    this.x8i_1 = new WebsocketRequest();
    this.y8i_1 = false;
    this.z8i_1 = null;
    this.a8j_1 = null;
    this.b8j_1 = null;
    this.c8j_1 = null;
    this.x8i_1.t52(this.w8i_1);
    var tmp = this.x8i_1;
    tmp.l52_1 = JetStreamClient$slambda(this);
    var tmp_0 = this.x8i_1;
    tmp_0.k52_1 = JetStreamClient$slambda_0(this);
    var tmp_1 = this.x8i_1;
    tmp_1.m52_1 = JetStreamClient$lambda(this);
    var tmp_2 = this.x8i_1;
    tmp_2.n52_1 = JetStreamClient$lambda_0(this);
  }
  h8j(callback) {
    // Inline function 'kotlin.also' call
    this.z8i_1 = callback;
    return this;
  }
  i8j(callback) {
    // Inline function 'kotlin.also' call
    this.a8j_1 = callback;
    return this;
  }
  j8j(callback) {
    // Inline function 'kotlin.also' call
    this.b8j_1 = callback;
    return this;
  }
  k8j(callback) {
    // Inline function 'kotlin.also' call
    this.c8j_1 = callback;
    return this;
  }
  *l38($completion) {
    yield* this.x8i_1.u52($completion);
    return Unit_instance;
  }
  f7() {
    this.x8i_1.f7();
  }
}
class Companion_0 {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.app.bsky.model.Account', this, 4);
    tmp0_serialDesc.s1a('active', true);
    tmp0_serialDesc.s1a('did', true);
    tmp0_serialDesc.s1a('sec', true);
    tmp0_serialDesc.s1a('time', true);
    this.l8j_1 = tmp0_serialDesc;
  }
  m8j(encoder, value) {
    var tmp0_desc = this.l8j_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.n8j_1 === true)) {
      tmp1_output.h14(tmp0_desc, 0, value.n8j_1);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.o8j_1 === '')) {
      tmp1_output.p14(tmp0_desc, 1, value.o8j_1);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.p8j_1 === 0n)) {
      tmp1_output.l14(tmp0_desc, 2, value.p8j_1);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.q8j_1 === '')) {
      tmp1_output.p14(tmp0_desc, 3, value.q8j_1);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.m8j(encoder, value instanceof Account ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.l8j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_input = decoder.a13(tmp0_desc);
    if (tmp8_input.p13()) {
      tmp4_local0 = tmp8_input.c13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.k13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.g13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.k13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.c13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.k13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.g13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.k13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp8_input.b13(tmp0_desc);
    return Account.r8j(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  iy() {
    return this.l8j_1;
  }
  i1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class Account {
  constructor(active, did, sec, time) {
    active = active === VOID ? true : active;
    did = did === VOID ? '' : did;
    sec = sec === VOID ? 0n : sec;
    time = time === VOID ? '' : time;
    this.n8j_1 = active;
    this.o8j_1 = did;
    this.p8j_1 = sec;
    this.q8j_1 = time;
  }
  toString() {
    return 'Account(active=' + this.n8j_1 + ', did=' + this.o8j_1 + ', sec=' + this.p8j_1.toString() + ', time=' + this.q8j_1 + ')';
  }
  hashCode() {
    var result = getBooleanHashCode(this.n8j_1);
    result = imul(result, 31) + getStringHashCode(this.o8j_1) | 0;
    result = imul(result, 31) + getBigIntHashCode(this.p8j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q8j_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Account))
      return false;
    if (!(this.n8j_1 === other.n8j_1))
      return false;
    if (!(this.o8j_1 === other.o8j_1))
      return false;
    if (!(this.p8j_1 === other.p8j_1))
      return false;
    if (!(this.q8j_1 === other.q8j_1))
      return false;
    return true;
  }
  static r8j(seen0, active, did, sec, time, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().l8j_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.n8j_1 = true;
    else
      $this.n8j_1 = active;
    if (0 === (seen0 & 2))
      $this.o8j_1 = '';
    else
      $this.o8j_1 = did;
    if (0 === (seen0 & 4))
      $this.p8j_1 = 0n;
    else
      $this.p8j_1 = sec;
    if (0 === (seen0 & 8))
      $this.q8j_1 = '';
    else
      $this.q8j_1 = time;
    return $this;
  }
}
class Companion_1 {}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.app.bsky.model.Commit', this, 6);
    tmp0_serialDesc.s1a('rev', true);
    tmp0_serialDesc.s1a('operation', true);
    tmp0_serialDesc.s1a('collection', true);
    tmp0_serialDesc.s1a('rkey', true);
    tmp0_serialDesc.s1a('record', true);
    tmp0_serialDesc.s1a('cid', true);
    this.s8j_1 = tmp0_serialDesc;
  }
  t8j(encoder, value) {
    var tmp0_desc = this.s8j_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.u8j_1 === '')) {
      tmp1_output.p14(tmp0_desc, 0, value.u8j_1);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.v8j_1 === '')) {
      tmp1_output.p14(tmp0_desc, 1, value.v8j_1);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.w8j_1 === '')) {
      tmp1_output.p14(tmp0_desc, 2, value.w8j_1);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.x8j_1 === '')) {
      tmp1_output.p14(tmp0_desc, 3, value.x8j_1);
    }
    if (tmp1_output.w14(tmp0_desc, 4) ? true : !(value.y8j_1 == null)) {
      tmp1_output.s14(tmp0_desc, 4, RecordPolymorphicSerializer_getInstance(), value.y8j_1);
    }
    if (tmp1_output.w14(tmp0_desc, 5) ? true : !(value.z8j_1 == null)) {
      tmp1_output.s14(tmp0_desc, 5, StringSerializer_getInstance(), value.z8j_1);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.t8j(encoder, value instanceof Commit ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.s8j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.a13(tmp0_desc);
    if (tmp10_input.p13()) {
      tmp4_local0 = tmp10_input.k13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.k13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.k13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.k13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.o13(tmp0_desc, 4, RecordPolymorphicSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.k13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.k13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.k13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.k13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.o13(tmp0_desc, 4, RecordPolymorphicSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.o13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp10_input.b13(tmp0_desc);
    return Commit.a8k(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  iy() {
    return this.s8j_1;
  }
  i1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(RecordPolymorphicSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Commit {
  constructor(rev, operation, collection, rkey, record, cid) {
    rev = rev === VOID ? '' : rev;
    operation = operation === VOID ? '' : operation;
    collection = collection === VOID ? '' : collection;
    rkey = rkey === VOID ? '' : rkey;
    record = record === VOID ? null : record;
    cid = cid === VOID ? null : cid;
    this.u8j_1 = rev;
    this.v8j_1 = operation;
    this.w8j_1 = collection;
    this.x8j_1 = rkey;
    this.y8j_1 = record;
    this.z8j_1 = cid;
  }
  toString() {
    return 'Commit(rev=' + this.u8j_1 + ', operation=' + this.v8j_1 + ', collection=' + this.w8j_1 + ', rkey=' + this.x8j_1 + ', record=' + toString_0(this.y8j_1) + ', cid=' + this.z8j_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.u8j_1);
    result = imul(result, 31) + getStringHashCode(this.v8j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w8j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x8j_1) | 0;
    result = imul(result, 31) + (this.y8j_1 == null ? 0 : hashCode(this.y8j_1)) | 0;
    result = imul(result, 31) + (this.z8j_1 == null ? 0 : getStringHashCode(this.z8j_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Commit))
      return false;
    if (!(this.u8j_1 === other.u8j_1))
      return false;
    if (!(this.v8j_1 === other.v8j_1))
      return false;
    if (!(this.w8j_1 === other.w8j_1))
      return false;
    if (!(this.x8j_1 === other.x8j_1))
      return false;
    if (!equals(this.y8j_1, other.y8j_1))
      return false;
    if (!(this.z8j_1 == other.z8j_1))
      return false;
    return true;
  }
  static a8k(seen0, rev, operation, collection, rkey, record, cid, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().s8j_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.u8j_1 = '';
    else
      $this.u8j_1 = rev;
    if (0 === (seen0 & 2))
      $this.v8j_1 = '';
    else
      $this.v8j_1 = operation;
    if (0 === (seen0 & 4))
      $this.w8j_1 = '';
    else
      $this.w8j_1 = collection;
    if (0 === (seen0 & 8))
      $this.x8j_1 = '';
    else
      $this.x8j_1 = rkey;
    if (0 === (seen0 & 16))
      $this.y8j_1 = null;
    else
      $this.y8j_1 = record;
    if (0 === (seen0 & 32))
      $this.z8j_1 = null;
    else
      $this.z8j_1 = cid;
    return $this;
  }
}
class Companion_2 {}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.app.bsky.model.Event', this, 6);
    tmp0_serialDesc.s1a('did', true);
    tmp0_serialDesc.s1a('time_us', true);
    tmp0_serialDesc.s1a('kind', true);
    tmp0_serialDesc.s1a('commit', true);
    tmp0_serialDesc.s1a('identity', true);
    tmp0_serialDesc.s1a('account', true);
    this.b8k_1 = tmp0_serialDesc;
  }
  c8k(encoder, value) {
    var tmp0_desc = this.b8k_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.d8k_1 === '')) {
      tmp1_output.p14(tmp0_desc, 0, value.d8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.e8k_1 === 0n)) {
      tmp1_output.l14(tmp0_desc, 1, value.e8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.f8k_1 === '')) {
      tmp1_output.p14(tmp0_desc, 2, value.f8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.g8k_1 == null)) {
      tmp1_output.s14(tmp0_desc, 3, $serializer_getInstance_0(), value.g8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 4) ? true : !(value.h8k_1 == null)) {
      tmp1_output.s14(tmp0_desc, 4, $serializer_getInstance_2(), value.h8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 5) ? true : !(value.i8k_1 == null)) {
      tmp1_output.s14(tmp0_desc, 5, $serializer_getInstance(), value.i8k_1);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.c8k(encoder, value instanceof Event ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.b8k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0n;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.a13(tmp0_desc);
    if (tmp10_input.p13()) {
      tmp4_local0 = tmp10_input.k13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.g13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.k13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.o13(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.o13(tmp0_desc, 4, $serializer_getInstance_2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.o13(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.k13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.g13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.k13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.o13(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.o13(tmp0_desc, 4, $serializer_getInstance_2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.o13(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp10_input.b13(tmp0_desc);
    return Event.j8k(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  iy() {
    return this.b8k_1;
  }
  i1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance_2()), get_nullable($serializer_getInstance())];
  }
}
class Event {
  constructor(did, timeUs, kind, commit, identity, account) {
    did = did === VOID ? '' : did;
    timeUs = timeUs === VOID ? 0n : timeUs;
    kind = kind === VOID ? '' : kind;
    commit = commit === VOID ? null : commit;
    identity = identity === VOID ? null : identity;
    account = account === VOID ? null : account;
    this.d8k_1 = did;
    this.e8k_1 = timeUs;
    this.f8k_1 = kind;
    this.g8k_1 = commit;
    this.h8k_1 = identity;
    this.i8k_1 = account;
  }
  toString() {
    return 'Event(did=' + this.d8k_1 + ', timeUs=' + this.e8k_1.toString() + ', kind=' + this.f8k_1 + ', commit=' + toString_0(this.g8k_1) + ', identity=' + toString_0(this.h8k_1) + ', account=' + toString_0(this.i8k_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.d8k_1);
    result = imul(result, 31) + getBigIntHashCode(this.e8k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f8k_1) | 0;
    result = imul(result, 31) + (this.g8k_1 == null ? 0 : this.g8k_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h8k_1 == null ? 0 : this.h8k_1.hashCode()) | 0;
    result = imul(result, 31) + (this.i8k_1 == null ? 0 : this.i8k_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Event))
      return false;
    if (!(this.d8k_1 === other.d8k_1))
      return false;
    if (!(this.e8k_1 === other.e8k_1))
      return false;
    if (!(this.f8k_1 === other.f8k_1))
      return false;
    if (!equals(this.g8k_1, other.g8k_1))
      return false;
    if (!equals(this.h8k_1, other.h8k_1))
      return false;
    if (!equals(this.i8k_1, other.i8k_1))
      return false;
    return true;
  }
  static j8k(seen0, did, timeUs, kind, commit, identity, account, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().b8k_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.d8k_1 = '';
    else
      $this.d8k_1 = did;
    if (0 === (seen0 & 2))
      $this.e8k_1 = 0n;
    else
      $this.e8k_1 = timeUs;
    if (0 === (seen0 & 4))
      $this.f8k_1 = '';
    else
      $this.f8k_1 = kind;
    if (0 === (seen0 & 8))
      $this.g8k_1 = null;
    else
      $this.g8k_1 = commit;
    if (0 === (seen0 & 16))
      $this.h8k_1 = null;
    else
      $this.h8k_1 = identity;
    if (0 === (seen0 & 32))
      $this.i8k_1 = null;
    else
      $this.i8k_1 = account;
    return $this;
  }
}
class Companion_3 {}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.app.bsky.model.Identity', this, 4);
    tmp0_serialDesc.s1a('did', true);
    tmp0_serialDesc.s1a('handle', true);
    tmp0_serialDesc.s1a('sec', true);
    tmp0_serialDesc.s1a('time', true);
    this.k8k_1 = tmp0_serialDesc;
  }
  l8k(encoder, value) {
    var tmp0_desc = this.k8k_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.m8k_1 === '')) {
      tmp1_output.p14(tmp0_desc, 0, value.m8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.n8k_1 === '')) {
      tmp1_output.p14(tmp0_desc, 1, value.n8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.o8k_1 === 0n)) {
      tmp1_output.l14(tmp0_desc, 2, value.o8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.p8k_1 === '')) {
      tmp1_output.p14(tmp0_desc, 3, value.p8k_1);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.l8k(encoder, value instanceof Identity ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.k8k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_input = decoder.a13(tmp0_desc);
    if (tmp8_input.p13()) {
      tmp4_local0 = tmp8_input.k13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.k13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.g13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.k13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.k13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.k13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.g13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.k13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp8_input.b13(tmp0_desc);
    return Identity.q8k(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  iy() {
    return this.k8k_1;
  }
  i1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class Identity {
  constructor(did, handle, sec, time) {
    did = did === VOID ? '' : did;
    handle = handle === VOID ? '' : handle;
    sec = sec === VOID ? 0n : sec;
    time = time === VOID ? '' : time;
    this.m8k_1 = did;
    this.n8k_1 = handle;
    this.o8k_1 = sec;
    this.p8k_1 = time;
  }
  toString() {
    return 'Identity(did=' + this.m8k_1 + ', handle=' + this.n8k_1 + ', sec=' + this.o8k_1.toString() + ', time=' + this.p8k_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.m8k_1);
    result = imul(result, 31) + getStringHashCode(this.n8k_1) | 0;
    result = imul(result, 31) + getBigIntHashCode(this.o8k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p8k_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Identity))
      return false;
    if (!(this.m8k_1 === other.m8k_1))
      return false;
    if (!(this.n8k_1 === other.n8k_1))
      return false;
    if (!(this.o8k_1 === other.o8k_1))
      return false;
    if (!(this.p8k_1 === other.p8k_1))
      return false;
    return true;
  }
  static q8k(seen0, did, handle, sec, time, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().k8k_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.m8k_1 = '';
    else
      $this.m8k_1 = did;
    if (0 === (seen0 & 2))
      $this.n8k_1 = '';
    else
      $this.n8k_1 = handle;
    if (0 === (seen0 & 4))
      $this.o8k_1 = 0n;
    else
      $this.o8k_1 = sec;
    if (0 === (seen0 & 8))
      $this.p8k_1 = '';
    else
      $this.p8k_1 = time;
    return $this;
  }
}
class SyncStreamClient {
  constructor(atproto, uri, filter) {
    var tmp;
    if (filter === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = filter;
    }
    filter = tmp;
    this.atproto = atproto;
    this.uri = uri;
    this.filter = filter;
    this.client = new WebsocketRequest();
    this.isOpen = false;
    this.x8k_1 = null;
    this.y8k_1 = null;
    this.z8k_1 = null;
    this.a8l_1 = null;
    this.client.t52(this.uri);
    var tmp_0 = this.client;
    tmp_0.l52_1 = SyncStreamClient$slambda(this);
    var tmp_1 = this.client;
    tmp_1.m52_1 = SyncStreamClient$lambda(this);
    var tmp_2 = this.client;
    tmp_2.n52_1 = SyncStreamClient$lambda_0(this);
  }
  s87() {
    return this.atproto;
  }
  n61() {
    return this.uri;
  }
  m63() {
    return this.filter;
  }
  c8l(_set____db54di) {
    this.client = _set____db54di;
  }
  d8l() {
    return this.client;
  }
  e8l(_set____db54di) {
    this.isOpen = _set____db54di;
  }
  f8l() {
    return this.isOpen;
  }
  eventCallback(callback) {
    // Inline function 'kotlin.also' call
    this.x8k_1 = callback;
    return this;
  }
  openedCallback(callback) {
    // Inline function 'kotlin.also' call
    this.y8k_1 = callback;
    return this;
  }
  closedCallback(callback) {
    // Inline function 'kotlin.also' call
    this.z8k_1 = callback;
    return this;
  }
  errorCallback(callback) {
    // Inline function 'kotlin.also' call
    this.a8l_1 = callback;
    return this;
  }
  *l38($completion) {
    yield* this.client.u52($completion);
    return Unit_instance;
  }
  open() {
    return promisify(($completion) => this.l38($completion));
  }
  *m38($completion) {
    if (this.open === protoOf(SyncStreamClient).open)
      yield* this.l38($completion);
    else
      yield* await_0(this.open(), $completion);
    return Unit_instance;
  }
  close() {
    this.client.f7();
  }
}
class Companion_4 {}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.com.atproto.model.StreamOp', this, 2);
    tmp0_serialDesc.s1a('action', true);
    tmp0_serialDesc.s1a('path', true);
    this.g8l_1 = tmp0_serialDesc;
  }
  h8l(encoder, value) {
    var tmp0_desc = this.g8l_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.v8k_1 == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.v8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.w8k_1 == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.w8k_1);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.h8l(encoder, value instanceof StreamOp ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.g8l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.a13(tmp0_desc);
    if (tmp6_input.p13()) {
      tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp6_input.b13(tmp0_desc);
    return StreamOp.i8l(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  iy() {
    return this.g8l_1;
  }
  i1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class StreamOp {
  constructor(action, path) {
    action = action === VOID ? null : action;
    path = path === VOID ? null : path;
    this.v8k_1 = action;
    this.w8k_1 = path;
  }
  toString() {
    return 'StreamOp(action=' + this.v8k_1 + ', path=' + this.w8k_1 + ')';
  }
  hashCode() {
    var result = this.v8k_1 == null ? 0 : getStringHashCode(this.v8k_1);
    result = imul(result, 31) + (this.w8k_1 == null ? 0 : getStringHashCode(this.w8k_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof StreamOp))
      return false;
    if (!(this.v8k_1 == other.v8k_1))
      return false;
    if (!(this.w8k_1 == other.w8k_1))
      return false;
    return true;
  }
  static i8l(seen0, action, path, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().g8l_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.v8k_1 = null;
    else
      $this.v8k_1 = action;
    if (0 === (seen0 & 2))
      $this.w8k_1 = null;
    else
      $this.w8k_1 = path;
    return $this;
  }
}
class Companion_5 {
  constructor() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j8l_1 = [null, null, lazy(tmp_0, StreamRoot$Companion$$childSerializers$_anonymous__gnm36w), null];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.com.atproto.model.StreamRoot', this, 4);
    tmp0_serialDesc.s1a('op', true);
    tmp0_serialDesc.s1a('repo', true);
    tmp0_serialDesc.s1a('ops', true);
    tmp0_serialDesc.s1a('t', true);
    this.k8l_1 = tmp0_serialDesc;
  }
  l8l(encoder, value) {
    var tmp0_desc = this.k8l_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().j8l_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.r8k_1 == null)) {
      tmp1_output.s14(tmp0_desc, 0, IntSerializer_getInstance(), value.r8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.s8k_1 == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.s8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.t8k_1 == null)) {
      tmp1_output.s14(tmp0_desc, 2, tmp2_cached[2].d3(), value.t8k_1);
    }
    if (tmp1_output.w14(tmp0_desc, 3) ? true : !(value.u8k_1 == null)) {
      tmp1_output.s14(tmp0_desc, 3, StringSerializer_getInstance(), value.u8k_1);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.l8l(encoder, value instanceof StreamRoot ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.k8l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.a13(tmp0_desc);
    var tmp9_cached = Companion_getInstance_6().j8l_1;
    if (tmp8_input.p13()) {
      tmp4_local0 = tmp8_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.o13(tmp0_desc, 2, tmp9_cached[2].d3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.o13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.o13(tmp0_desc, 2, tmp9_cached[2].d3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.o13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp8_input.b13(tmp0_desc);
    return StreamRoot.m8l(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  iy() {
    return this.k8l_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance_6().j8l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].d3()), get_nullable(StringSerializer_getInstance())];
  }
}
class StreamRoot {
  constructor(op, repo, ops, t) {
    Companion_getInstance_6();
    op = op === VOID ? null : op;
    repo = repo === VOID ? null : repo;
    ops = ops === VOID ? null : ops;
    t = t === VOID ? null : t;
    this.r8k_1 = op;
    this.s8k_1 = repo;
    this.t8k_1 = ops;
    this.u8k_1 = t;
  }
  toString() {
    return 'StreamRoot(op=' + this.r8k_1 + ', repo=' + this.s8k_1 + ', ops=' + toString_0(this.t8k_1) + ', t=' + this.u8k_1 + ')';
  }
  hashCode() {
    var result = this.r8k_1 == null ? 0 : this.r8k_1;
    result = imul(result, 31) + (this.s8k_1 == null ? 0 : getStringHashCode(this.s8k_1)) | 0;
    result = imul(result, 31) + (this.t8k_1 == null ? 0 : hashCode(this.t8k_1)) | 0;
    result = imul(result, 31) + (this.u8k_1 == null ? 0 : getStringHashCode(this.u8k_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof StreamRoot))
      return false;
    if (!(this.r8k_1 == other.r8k_1))
      return false;
    if (!(this.s8k_1 == other.s8k_1))
      return false;
    if (!equals(this.t8k_1, other.t8k_1))
      return false;
    if (!(this.u8k_1 == other.u8k_1))
      return false;
    return true;
  }
  static m8l(seen0, op, repo, ops, t, serializationConstructorMarker) {
    Companion_getInstance_6();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().k8l_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.r8k_1 = null;
    else
      $this.r8k_1 = op;
    if (0 === (seen0 & 2))
      $this.s8k_1 = null;
    else
      $this.s8k_1 = repo;
    if (0 === (seen0 & 4))
      $this.t8k_1 = null;
    else
      $this.t8k_1 = ops;
    if (0 === (seen0 & 8))
      $this.u8k_1 = null;
    else
      $this.u8k_1 = t;
    return $this;
  }
}
class BlueskyStreamImpl {
  constructor(config) {
    this.n8l_1 = new BlueskyImpl(config);
    this.o8l_1 = new JetStreamResourceImpl(this.n8l_1, config);
  }
  p8l() {
    return this.o8l_1;
  }
}
class JetStreamResourceImpl {
  constructor(bluesky, config) {
    this.q8l_1 = bluesky;
    this.r8l_1 = config;
  }
  s8l(request) {
    // Inline function 'kotlin.also' call
    var this_0 = new URLBuilder();
    this_0.k46(Companion_getInstance().o46_1);
    var tmp = this_0;
    var tmp0_elvis_lhs = request.o8i_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this.r8l_1.l8i_1 : tmp0_elvis_lhs;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.random' call
      var this_1 = Companion_getInstance_0().k8i_1;
      tmp_0 = random(this_1, Default_getInstance());
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp.b45_1 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!request.p8i_1.j1()) {
      var _iterator__ex2g4s = request.p8i_1.l1();
      while (_iterator__ex2g4s.m1()) {
        var wantedCollection = _iterator__ex2g4s.n1();
        this_0.k45_1.y3o('wantedCollections', wantedCollection);
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!request.q8i_1.j1()) {
      var _iterator__ex2g4s_0 = request.q8i_1.l1();
      while (_iterator__ex2g4s_0.m1()) {
        var wantedDid = _iterator__ex2g4s_0.n1();
        this_0.k45_1.y3o('wantedDids', wantedDid);
      }
    }
    var tmp2_safe_receiver = request.s8i_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.k45_1.y3o('cursor', tmp2_safe_receiver.toString());
    }
    var tmp3_safe_receiver = request.r8i_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.k45_1.y3o('maxMessageSizeBytes', tmp3_safe_receiver.toString());
    }
    var tmp4_safe_receiver = request.t8i_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.k45_1.y3o('requireHello', tmp4_safe_receiver.toString());
    }
    path(this_0, ['subscribe']);
    var builder = this_0;
    return new JetStreamClient(builder.w46());
  }
}
class ATProtocolStreamImpl {
  constructor(config) {
    this.t8l_1 = new ATProtocolImpl(config);
    this.u8l_1 = new SyncResourceImpl(this.t8l_1, config);
  }
  sync() {
    return this.u8l_1;
  }
}
class SyncResourceImpl {
  constructor(atproto, config) {
    this.v8l_1 = atproto;
    this.w8l_1 = config;
  }
  subscribeRepos(request) {
    var url = 'wss://' + Url(this.w8l_1.firehoseUri).o45_1 + '/xrpc/' + 'com.atproto.sync.subscribeRepos';
    return new SyncStreamClient(this.v8l_1, url, request.filter);
  }
}
//endregion
var ATProtocolStreamFactory_instance;
function ATProtocolStreamFactory_getInstance() {
  return ATProtocolStreamFactory_instance;
}
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var BlueskyStreamFactory_instance;
function BlueskyStreamFactory_getInstance() {
  return BlueskyStreamFactory_instance;
}
function onMessage($this, text) {
  try {
    var tmp0_safe_receiver = $this.z8i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'work.socialhub.kbsky.internal.share.InternalUtility.fromJson' call
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = InternalUtility_getInstance().b68_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.ty();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Event), arrayOf([]), false));
      var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var event = this_0.uz(tmp$ret$4, text);
      tmp0_safe_receiver.d8j(event);
    }
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var tmp1_safe_receiver = $this.c8j_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.e8j(e);
      }
    } else {
      throw $p;
    }
  }
}
function onMessage_0($this, data) {
}
function JetStreamClient$slambda(this$0) {
  return constructCallableReference(function *(it, $completion) {
    onMessage_0(this$0, it);
    return Unit_instance;
  }, 1);
}
function JetStreamClient$slambda_0(this$0) {
  return constructCallableReference(function *(it, $completion) {
    onMessage(this$0, it);
    return Unit_instance;
  }, 1);
}
function JetStreamClient$lambda(this$0) {
  return (it) => {
    this$0.y8i_1 = true;
    var tmp0_safe_receiver = this$0.a8j_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f8j();
    }
    return Unit_instance;
  };
}
function JetStreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.y8i_1 = false;
    var tmp0_safe_receiver = this$0.b8j_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g8j();
    }
    return Unit_instance;
  };
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
var Companion_instance_2;
function Companion_getInstance_3() {
  return Companion_instance_2;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
var Companion_instance_3;
function Companion_getInstance_4() {
  return Companion_instance_3;
}
var $serializer_instance_2;
function $serializer_getInstance_2() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
function onMessage_1($this, data) {
  var cbor = Cbor(VOID, SyncStreamClient$onMessage$lambda);
  var hex = toHexString(data);
  // Inline function 'kotlin.text.mapIndexed' call
  // Inline function 'kotlin.text.mapIndexedTo' call
  var destination = ArrayList.d2(charSequenceLength(hex));
  var index = 0;
  var inductionVariable = 0;
  while (inductionVariable < charSequenceLength(hex)) {
    var item = charSequenceGet(hex, inductionVariable);
    inductionVariable = inductionVariable + 1 | 0;
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    var tmp$ret$2 = to(_unary__edvuaz, new Char(item));
    destination.e2(tmp$ret$2);
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.p2();
  var _iterator__ex2g4s = destination.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    if (equals(element.second, new Char(_Char___init__impl__6a9atx(97)))) {
      destination_0.e2(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_1 = ArrayList.d2(collectionSizeOrDefault(destination_0, 10));
  var _iterator__ex2g4s_0 = destination_0.l1();
  while (_iterator__ex2g4s_0.m1()) {
    var item_0 = _iterator__ex2g4s_0.n1();
    var tmp$ret$8 = item_0.first;
    destination_1.e2(tmp$ret$8);
  }
  var indexes = destination_1;
  var _iterator__ex2g4s_1 = indexes.l1();
  $l$loop_1: while (_iterator__ex2g4s_1.m1()) {
    var ind = _iterator__ex2g4s_1.n1();
    try {
      var sub = substring(hex, until(ind, hex.length));
      // Inline function 'kotlinx.serialization.decodeFromHexString' call
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = cbor.ty();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(StreamRoot), arrayOf([]), false));
      var tmp$ret$10 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      var item_1 = decodeFromHexString(cbor, tmp$ret$10, sub);
      if (item_1.t8k_1 == null) {
        continue $l$loop_1;
      }
      // Inline function 'kotlin.checkNotNull' call
      var tmp0 = item_1.t8k_1;
      var tmp$ret$13;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          var message = 'Required value was null.';
          throw IllegalStateException.o(toString(message));
        } else {
          tmp$ret$13 = tmp0;
          break $l$block;
        }
      }
      var _iterator__ex2g4s_2 = tmp$ret$13.l1();
      $l$loop_0: while (_iterator__ex2g4s_2.m1()) {
        var op = _iterator__ex2g4s_2.n1();
        if (!(op.v8k_1 === 'create')) {
          continue $l$loop_0;
        }
        var path = op.w8k_1;
        var repo = item_1.s8k_1;
        var tmp0_0 = split(ensureNotNull(path), ['/']);
        var tmp$ret$15;
        $l$block_0: {
          // Inline function 'kotlin.collections.dropLastWhile' call
          if (!tmp0_0.j1()) {
            var iterator = tmp0_0.q2(tmp0_0.k2());
            while (iterator.u7()) {
              // Inline function 'kotlin.text.isEmpty' call
              var this_2 = iterator.w7();
              if (!(charSequenceLength(this_2) === 0)) {
                tmp$ret$15 = take(tmp0_0, iterator.v7() + 1 | 0);
                break $l$block_0;
              }
            }
          }
          tmp$ret$15 = emptyList();
        }
        // Inline function 'kotlin.collections.toTypedArray' call
        var this_3 = tmp$ret$15;
        var elements = copyToArray(this_3);
        try {
          var tmp;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$this.filter.j1()) {
            tmp = !$this.filter.n2(elements[0]);
          } else {
            tmp = false;
          }
          if (tmp) {
            return Unit_instance;
          }
          var response = $this.atproto.repo().n5w(new RepoGetRecordRequest(ensureNotNull(repo), elements[0], elements[1]));
          var tmp0_safe_receiver = $this.x8k_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.b8l(response.data.cid, response.data.uri, response.data.value);
          }
        } catch ($p) {
          if ($p instanceof Exception) {
            var e = $p;
            println('[Record Deleted?] repo: ' + repo + ' path: ' + path);
          } else {
            throw $p;
          }
        }
      }
      return Unit_instance;
    } catch ($p_0) {
      if ($p_0 instanceof Exception) {
        var e_0 = $p_0;
        printStackTrace(e_0);
        continue $l$loop_1;
      } else {
        throw $p_0;
      }
    }
  }
}
function SyncStreamClient$slambda(this$0) {
  return constructCallableReference(function *(it, $completion) {
    onMessage_1(this$0, it);
    return Unit_instance;
  }, 1);
}
function SyncStreamClient$lambda(this$0) {
  return (it) => {
    this$0.isOpen = true;
    var tmp0_safe_receiver = this$0.y8k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f8j();
    }
    return Unit_instance;
  };
}
function SyncStreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.isOpen = false;
    var tmp0_safe_receiver = this$0.z8k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g8j();
    }
    return Unit_instance;
  };
}
function SyncStreamClient$onMessage$lambda($this$Cbor) {
  $this$Cbor.y8d_1 = true;
  return Unit_instance;
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
function StreamRoot$Companion$$childSerializers$_anonymous__gnm36w() {
  return new ArrayListSerializer($serializer_getInstance_3());
}
var Companion_instance_5;
function Companion_getInstance_6() {
  if (Companion_instance_5 === VOID)
    new Companion_5();
  return Companion_instance_5;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_4();
  return $serializer_instance_4;
}
//region block: post-declaration
initMetadataForInterface(ATProtocolStream, 'ATProtocolStream');
initMetadataForClass(ATProtocolStreamConfig, 'ATProtocolStreamConfig', ATProtocolStreamConfig);
initMetadataForObject(ATProtocolStreamFactory, 'ATProtocolStreamFactory');
initMetadataForCompanion(Companion);
initMetadataForClass(BlueskyStreamConfig, 'BlueskyStreamConfig', BlueskyStreamConfig);
initMetadataForObject(BlueskyStreamFactory, 'BlueskyStreamFactory');
initMetadataForInterface(SyncResource, 'SyncResource');
initMetadataForClass(JetStreamSubscribeRequest, 'JetStreamSubscribeRequest', JetStreamSubscribeRequest);
protoOf(SyncSubscribeReposRequest).toMappedJson = toMappedJson;
protoOf(SyncSubscribeReposRequest).addParam = addParam;
initMetadataForClass(SyncSubscribeReposRequest, 'SyncSubscribeReposRequest', SyncSubscribeReposRequest, VOID, [MapRequest]);
initMetadataForClass(JetStreamClient, 'JetStreamClient', VOID, VOID, VOID, [0]);
initMetadataForCompanion(Companion_0);
protoOf($serializer).j1b = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Account, 'Account', Account, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_1);
protoOf($serializer_0).j1b = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Commit, 'Commit', Commit, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_1).j1b = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Event, 'Event', Event, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_2).j1b = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Identity, 'Identity', Identity, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForClass(SyncStreamClient, 'SyncStreamClient', VOID, VOID, VOID, [0]);
initMetadataForCompanion(Companion_4);
protoOf($serializer_3).j1b = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamOp, 'StreamOp', StreamOp, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_4).j1b = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamRoot, 'StreamRoot', StreamRoot, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForClass(BlueskyStreamImpl, 'BlueskyStreamImpl');
initMetadataForClass(JetStreamResourceImpl, 'JetStreamResourceImpl');
initMetadataForClass(ATProtocolStreamImpl, 'ATProtocolStreamImpl', VOID, VOID, [ATProtocolStream]);
initMetadataForClass(SyncResourceImpl, 'SyncResourceImpl', VOID, VOID, [SyncResource]);
//endregion
//region block: init
ATProtocolStreamFactory_instance = new ATProtocolStreamFactory();
BlueskyStreamFactory_instance = new BlueskyStreamFactory();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Companion_instance_3 = new Companion_3();
Companion_instance_4 = new Companion_4();
//endregion
//region block: exports
var ATProtocolStreamFactory_0 = {getInstance: ATProtocolStreamFactory_getInstance};
export {
  ATProtocolStream as ATProtocolStream,
  ATProtocolStreamConfig as ATProtocolStreamConfig,
  ATProtocolStreamFactory_0 as ATProtocolStreamFactory,
  SyncResource as SyncResource,
  SyncSubscribeReposRequest as SyncSubscribeReposRequest,
  SyncStreamClient as SyncStreamClient,
};
export {
  BlueskyStreamFactory_instance as BlueskyStreamFactory_instance3j77di8grdhxy,
  JetStreamSubscribeRequest as JetStreamSubscribeRequestfw1ls23fthco,
};
//endregion

//# sourceMappingURL=kbsky-stream.mjs.map
