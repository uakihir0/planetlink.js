import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
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
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
  createThis2j2avj17cvnv2 as createThis,
  toHexString5bhtjxqec7ow as toHexString,
  ArrayList3it5z8td81qkl as ArrayList,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char19o2r8palgjof as Char,
  to2cs3ny02qtbcb as to,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
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
  await3n7kedgocftsv as await_0,
  LazyThreadSafetyMode_PUBLICATION_getInstance23f213579at67 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  Default_getInstancee1f46otjvolq as Default_getInstance,
  random234odtwlu7lq2 as random,
} from './kotlin-kotlin-stdlib.mjs';
import {
  ATProtocolConfig30bbb1gj7trou as ATProtocolConfig,
  Service_BSKY_NETWORK_getInstanceezz65pj0es88 as Service_BSKY_NETWORK_getInstance,
  BlueskyConfig1k1or0gufya7z as BlueskyConfig,
  toMappedJsondipekar19jef as toMappedJson,
  addParam376b888wfin4l as addParam,
  MapRequest2vm46zr2igv5e as MapRequest,
  InternalUtility_getInstance1nt88yyqoq3mo as InternalUtility_getInstance,
  RecordPolymorphicSerializer_getInstancei498y7dfzov7 as RecordPolymorphicSerializer_getInstance,
  RepoGetRecordRequest12sssrl1p80cm as RepoGetRecordRequest,
  BlueskyImpl3faw3fgd6w8tl as BlueskyImpl,
  ATProtocolImpl2hdun0rm126ks as ATProtocolImpl,
} from './kbsky-core.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  BooleanSerializer_getInstance22aja3hu17sxf as BooleanSerializer_getInstance,
  StringSerializer_getInstance1p9zda6r6kb23 as StringSerializer_getInstance,
  LongSerializer_getInstancepwtz4tlewrfw as LongSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  get_nullable197rfua9r7fsz as get_nullable,
  decodeFromHexStringteg6eww8pz9e as decodeFromHexString,
  ArrayListSerializer7k5wnrulb3y6 as ArrayListSerializer,
  IntSerializer_getInstance3jyhns9ue706g as IntSerializer_getInstance,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { WebsocketRequest38pjwt1m63ieg as WebsocketRequest } from './khttpclient.mjs';
import { Cbor2f4m7hu7pld6l as Cbor } from './kotlinx-serialization-kotlinx-serialization-cbor.mjs';
import {
  URLBuilder2mz8zkz4u9ray as URLBuilder,
  Companion_getInstanceudl2ftapa8hy as Companion_getInstance,
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
    firehoseUri = firehoseUri === VOID ? Service_BSKY_NETWORK_getInstance().t5q_1 : firehoseUri;
    super();
    this.firehoseUri = firehoseUri;
  }
  s90(_set____db54di) {
    this.firehoseUri = _set____db54di;
  }
  t90() {
    return this.firehoseUri;
  }
  tm() {
    return this.firehoseUri;
  }
  y74(firehoseUri) {
    return new ATProtocolStreamConfig(firehoseUri);
  }
  copy(firehoseUri, $super) {
    firehoseUri = firehoseUri === VOID ? this.firehoseUri : firehoseUri;
    return $super === VOID ? this.y74(firehoseUri) : $super.y74.call(this, firehoseUri);
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
  u90(config) {
    return new ATProtocolStreamImpl(config);
  }
  instanceFromConfig(config, $super) {
    config = config === VOID ? new ATProtocolStreamConfig() : config;
    return $super === VOID ? this.u90(config) : $super.u90.call(this, config);
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    this.v90_1 = listOf(['jetstream1.us-east.bsky.network', 'jetstream2.us-east.bsky.network', 'jetstream1.us-west.bsky.network', 'jetstream2.us-west.bsky.network']);
  }
}
class BlueskyStreamConfig extends BlueskyConfig {
  constructor(jetStreamHost) {
    Companion_getInstance_0();
    jetStreamHost = jetStreamHost === VOID ? null : jetStreamHost;
    super();
    this.w90_1 = jetStreamHost;
  }
  toString() {
    return 'BlueskyStreamConfig(jetStreamHost=' + this.w90_1 + ')';
  }
  hashCode() {
    return this.w90_1 == null ? 0 : getStringHashCode(this.w90_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof BlueskyStreamConfig))
      return false;
    if (!(this.w90_1 == other.w90_1))
      return false;
    return true;
  }
}
class BlueskyStreamFactory {
  x90(config) {
    return new BlueskyStreamImpl(config);
  }
  y90(config, $super) {
    config = config === VOID ? new BlueskyStreamConfig() : config;
    return $super === VOID ? this.x90(config) : $super.x90.call(this, config);
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
    this.z90_1 = host;
    this.a91_1 = wantedCollections;
    this.b91_1 = wantedDids;
    this.c91_1 = maxMessageSizeBytes;
    this.d91_1 = cursor;
    this.e91_1 = requireHello;
  }
  toString() {
    return 'JetStreamSubscribeRequest(host=' + this.z90_1 + ', wantedCollections=' + toString(this.a91_1) + ', wantedDids=' + toString(this.b91_1) + ', maxMessageSizeBytes=' + toString_0(this.c91_1) + ', cursor=' + toString_0(this.d91_1) + ', requireHello=' + this.e91_1 + ')';
  }
  hashCode() {
    var result = this.z90_1 == null ? 0 : getStringHashCode(this.z90_1);
    result = imul(result, 31) + hashCode(this.a91_1) | 0;
    result = imul(result, 31) + hashCode(this.b91_1) | 0;
    result = imul(result, 31) + (this.c91_1 == null ? 0 : getBigIntHashCode(this.c91_1)) | 0;
    result = imul(result, 31) + (this.d91_1 == null ? 0 : getBigIntHashCode(this.d91_1)) | 0;
    result = imul(result, 31) + (this.e91_1 == null ? 0 : getBooleanHashCode(this.e91_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JetStreamSubscribeRequest))
      return false;
    if (!(this.z90_1 == other.z90_1))
      return false;
    if (!equals(this.a91_1, other.a91_1))
      return false;
    if (!equals(this.b91_1, other.b91_1))
      return false;
    if (!(this.c91_1 == other.c91_1))
      return false;
    if (!(this.d91_1 == other.d91_1))
      return false;
    if (!(this.e91_1 == other.e91_1))
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
  r67(_set____db54di) {
    this.cursor = _set____db54di;
  }
  s67() {
    return this.cursor;
  }
  f91(_set____db54di) {
    this.filter = _set____db54di;
  }
  a6b() {
    return this.filter;
  }
  toMap() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.o5();
    this.addParam(this_0, 'cursor', this.cursor);
    return this_0;
  }
  tm() {
    return this.cursor;
  }
  um() {
    return this.filter;
  }
  g91(cursor, filter) {
    return new SyncSubscribeReposRequest(cursor, filter);
  }
  copy(cursor, filter, $super) {
    cursor = cursor === VOID ? this.cursor : cursor;
    filter = filter === VOID ? this.filter : filter;
    return $super === VOID ? this.g91(cursor, filter) : $super.g91.call(this, cursor, filter);
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
    this.h91_1 = uri;
    this.i91_1 = new WebsocketRequest();
    this.j91_1 = false;
    this.k91_1 = null;
    this.l91_1 = null;
    this.m91_1 = null;
    this.n91_1 = null;
    this.i91_1.m59(this.h91_1);
    var tmp = this.i91_1;
    tmp.e59_1 = JetStreamClient$slambda(this);
    var tmp_0 = this.i91_1;
    tmp_0.d59_1 = JetStreamClient$slambda_0(this);
    var tmp_1 = this.i91_1;
    tmp_1.f59_1 = JetStreamClient$lambda(this);
    var tmp_2 = this.i91_1;
    tmp_2.g59_1 = JetStreamClient$lambda_0(this);
  }
  s91(callback) {
    // Inline function 'kotlin.also' call
    this.k91_1 = callback;
    return this;
  }
  t91(callback) {
    // Inline function 'kotlin.also' call
    this.l91_1 = callback;
    return this;
  }
  u91(callback) {
    // Inline function 'kotlin.also' call
    this.m91_1 = callback;
    return this;
  }
  v91(callback) {
    // Inline function 'kotlin.also' call
    this.n91_1 = callback;
    return this;
  }
  *w39($completion) {
    yield* this.i91_1.n59($completion);
    return Unit_instance;
  }
  g7() {
    this.i91_1.g7();
  }
}
class Companion_0 {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.app.bsky.model.Account', this, 4);
    tmp0_serialDesc.g1c('active', true);
    tmp0_serialDesc.g1c('did', true);
    tmp0_serialDesc.g1c('sec', true);
    tmp0_serialDesc.g1c('time', true);
    this.w91_1 = tmp0_serialDesc;
  }
  x91(encoder, value) {
    var tmp0_desc = this.w91_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.y91_1 === true)) {
      tmp1_output.b16(tmp0_desc, 0, value.y91_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.z91_1 === '')) {
      tmp1_output.j16(tmp0_desc, 1, value.z91_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.a92_1 === 0n)) {
      tmp1_output.f16(tmp0_desc, 2, value.a92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !(value.b92_1 === '')) {
      tmp1_output.j16(tmp0_desc, 3, value.b92_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.x91(encoder, value instanceof Account ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.w91_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u14(tmp0_desc);
    if (tmp8_input.j15()) {
      tmp4_local0 = tmp8_input.w14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.e15(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.a15(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.e15(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.w14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.e15(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.a15(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.e15(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp8_input.v14(tmp0_desc);
    return Account.c92(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  uz() {
    return this.w91_1;
  }
  w1c() {
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
    this.y91_1 = active;
    this.z91_1 = did;
    this.a92_1 = sec;
    this.b92_1 = time;
  }
  toString() {
    return 'Account(active=' + this.y91_1 + ', did=' + this.z91_1 + ', sec=' + this.a92_1.toString() + ', time=' + this.b92_1 + ')';
  }
  hashCode() {
    var result = getBooleanHashCode(this.y91_1);
    result = imul(result, 31) + getStringHashCode(this.z91_1) | 0;
    result = imul(result, 31) + getBigIntHashCode(this.a92_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b92_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Account))
      return false;
    if (!(this.y91_1 === other.y91_1))
      return false;
    if (!(this.z91_1 === other.z91_1))
      return false;
    if (!(this.a92_1 === other.a92_1))
      return false;
    if (!(this.b92_1 === other.b92_1))
      return false;
    return true;
  }
  static c92(seen0, active, did, sec, time, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().w91_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.y91_1 = true;
    else
      $this.y91_1 = active;
    if (0 === (seen0 & 2))
      $this.z91_1 = '';
    else
      $this.z91_1 = did;
    if (0 === (seen0 & 4))
      $this.a92_1 = 0n;
    else
      $this.a92_1 = sec;
    if (0 === (seen0 & 8))
      $this.b92_1 = '';
    else
      $this.b92_1 = time;
    return $this;
  }
}
class Companion_1 {}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.app.bsky.model.Commit', this, 6);
    tmp0_serialDesc.g1c('rev', true);
    tmp0_serialDesc.g1c('operation', true);
    tmp0_serialDesc.g1c('collection', true);
    tmp0_serialDesc.g1c('rkey', true);
    tmp0_serialDesc.g1c('record', true);
    tmp0_serialDesc.g1c('cid', true);
    this.d92_1 = tmp0_serialDesc;
  }
  e92(encoder, value) {
    var tmp0_desc = this.d92_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.f92_1 === '')) {
      tmp1_output.j16(tmp0_desc, 0, value.f92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.g92_1 === '')) {
      tmp1_output.j16(tmp0_desc, 1, value.g92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.h92_1 === '')) {
      tmp1_output.j16(tmp0_desc, 2, value.h92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !(value.i92_1 === '')) {
      tmp1_output.j16(tmp0_desc, 3, value.i92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 4) ? true : !(value.j92_1 == null)) {
      tmp1_output.m16(tmp0_desc, 4, RecordPolymorphicSerializer_getInstance(), value.j92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 5) ? true : !(value.k92_1 == null)) {
      tmp1_output.m16(tmp0_desc, 5, StringSerializer_getInstance(), value.k92_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.e92(encoder, value instanceof Commit ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.d92_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.u14(tmp0_desc);
    if (tmp10_input.j15()) {
      tmp4_local0 = tmp10_input.e15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.e15(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.e15(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.e15(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.i15(tmp0_desc, 4, RecordPolymorphicSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.i15(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.e15(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.e15(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.e15(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.e15(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.i15(tmp0_desc, 4, RecordPolymorphicSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.i15(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp10_input.v14(tmp0_desc);
    return Commit.l92(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  uz() {
    return this.d92_1;
  }
  w1c() {
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
    this.f92_1 = rev;
    this.g92_1 = operation;
    this.h92_1 = collection;
    this.i92_1 = rkey;
    this.j92_1 = record;
    this.k92_1 = cid;
  }
  toString() {
    return 'Commit(rev=' + this.f92_1 + ', operation=' + this.g92_1 + ', collection=' + this.h92_1 + ', rkey=' + this.i92_1 + ', record=' + toString_0(this.j92_1) + ', cid=' + this.k92_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.f92_1);
    result = imul(result, 31) + getStringHashCode(this.g92_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h92_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i92_1) | 0;
    result = imul(result, 31) + (this.j92_1 == null ? 0 : hashCode(this.j92_1)) | 0;
    result = imul(result, 31) + (this.k92_1 == null ? 0 : getStringHashCode(this.k92_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Commit))
      return false;
    if (!(this.f92_1 === other.f92_1))
      return false;
    if (!(this.g92_1 === other.g92_1))
      return false;
    if (!(this.h92_1 === other.h92_1))
      return false;
    if (!(this.i92_1 === other.i92_1))
      return false;
    if (!equals(this.j92_1, other.j92_1))
      return false;
    if (!(this.k92_1 == other.k92_1))
      return false;
    return true;
  }
  static l92(seen0, rev, operation, collection, rkey, record, cid, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().d92_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.f92_1 = '';
    else
      $this.f92_1 = rev;
    if (0 === (seen0 & 2))
      $this.g92_1 = '';
    else
      $this.g92_1 = operation;
    if (0 === (seen0 & 4))
      $this.h92_1 = '';
    else
      $this.h92_1 = collection;
    if (0 === (seen0 & 8))
      $this.i92_1 = '';
    else
      $this.i92_1 = rkey;
    if (0 === (seen0 & 16))
      $this.j92_1 = null;
    else
      $this.j92_1 = record;
    if (0 === (seen0 & 32))
      $this.k92_1 = null;
    else
      $this.k92_1 = cid;
    return $this;
  }
}
class Companion_2 {}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.app.bsky.model.Event', this, 6);
    tmp0_serialDesc.g1c('did', true);
    tmp0_serialDesc.g1c('time_us', true);
    tmp0_serialDesc.g1c('kind', true);
    tmp0_serialDesc.g1c('commit', true);
    tmp0_serialDesc.g1c('identity', true);
    tmp0_serialDesc.g1c('account', true);
    this.m92_1 = tmp0_serialDesc;
  }
  n92(encoder, value) {
    var tmp0_desc = this.m92_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.o92_1 === '')) {
      tmp1_output.j16(tmp0_desc, 0, value.o92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.p92_1 === 0n)) {
      tmp1_output.f16(tmp0_desc, 1, value.p92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.q92_1 === '')) {
      tmp1_output.j16(tmp0_desc, 2, value.q92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !(value.r92_1 == null)) {
      tmp1_output.m16(tmp0_desc, 3, $serializer_getInstance_0(), value.r92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 4) ? true : !(value.s92_1 == null)) {
      tmp1_output.m16(tmp0_desc, 4, $serializer_getInstance_2(), value.s92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 5) ? true : !(value.t92_1 == null)) {
      tmp1_output.m16(tmp0_desc, 5, $serializer_getInstance(), value.t92_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.n92(encoder, value instanceof Event ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.m92_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0n;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.u14(tmp0_desc);
    if (tmp10_input.j15()) {
      tmp4_local0 = tmp10_input.e15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.a15(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.e15(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.i15(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.i15(tmp0_desc, 4, $serializer_getInstance_2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.i15(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.e15(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.a15(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.e15(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.i15(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.i15(tmp0_desc, 4, $serializer_getInstance_2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.i15(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp10_input.v14(tmp0_desc);
    return Event.u92(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  uz() {
    return this.m92_1;
  }
  w1c() {
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
    this.o92_1 = did;
    this.p92_1 = timeUs;
    this.q92_1 = kind;
    this.r92_1 = commit;
    this.s92_1 = identity;
    this.t92_1 = account;
  }
  toString() {
    return 'Event(did=' + this.o92_1 + ', timeUs=' + this.p92_1.toString() + ', kind=' + this.q92_1 + ', commit=' + toString_0(this.r92_1) + ', identity=' + toString_0(this.s92_1) + ', account=' + toString_0(this.t92_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.o92_1);
    result = imul(result, 31) + getBigIntHashCode(this.p92_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q92_1) | 0;
    result = imul(result, 31) + (this.r92_1 == null ? 0 : this.r92_1.hashCode()) | 0;
    result = imul(result, 31) + (this.s92_1 == null ? 0 : this.s92_1.hashCode()) | 0;
    result = imul(result, 31) + (this.t92_1 == null ? 0 : this.t92_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Event))
      return false;
    if (!(this.o92_1 === other.o92_1))
      return false;
    if (!(this.p92_1 === other.p92_1))
      return false;
    if (!(this.q92_1 === other.q92_1))
      return false;
    if (!equals(this.r92_1, other.r92_1))
      return false;
    if (!equals(this.s92_1, other.s92_1))
      return false;
    if (!equals(this.t92_1, other.t92_1))
      return false;
    return true;
  }
  static u92(seen0, did, timeUs, kind, commit, identity, account, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().m92_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.o92_1 = '';
    else
      $this.o92_1 = did;
    if (0 === (seen0 & 2))
      $this.p92_1 = 0n;
    else
      $this.p92_1 = timeUs;
    if (0 === (seen0 & 4))
      $this.q92_1 = '';
    else
      $this.q92_1 = kind;
    if (0 === (seen0 & 8))
      $this.r92_1 = null;
    else
      $this.r92_1 = commit;
    if (0 === (seen0 & 16))
      $this.s92_1 = null;
    else
      $this.s92_1 = identity;
    if (0 === (seen0 & 32))
      $this.t92_1 = null;
    else
      $this.t92_1 = account;
    return $this;
  }
}
class Companion_3 {}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.app.bsky.model.Identity', this, 4);
    tmp0_serialDesc.g1c('did', true);
    tmp0_serialDesc.g1c('handle', true);
    tmp0_serialDesc.g1c('sec', true);
    tmp0_serialDesc.g1c('time', true);
    this.v92_1 = tmp0_serialDesc;
  }
  w92(encoder, value) {
    var tmp0_desc = this.v92_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.x92_1 === '')) {
      tmp1_output.j16(tmp0_desc, 0, value.x92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.y92_1 === '')) {
      tmp1_output.j16(tmp0_desc, 1, value.y92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.z92_1 === 0n)) {
      tmp1_output.f16(tmp0_desc, 2, value.z92_1);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !(value.a93_1 === '')) {
      tmp1_output.j16(tmp0_desc, 3, value.a93_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.w92(encoder, value instanceof Identity ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.v92_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u14(tmp0_desc);
    if (tmp8_input.j15()) {
      tmp4_local0 = tmp8_input.e15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.e15(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.a15(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.e15(tmp0_desc, 3);
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
            tmp5_local1 = tmp8_input.e15(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.a15(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.e15(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp8_input.v14(tmp0_desc);
    return Identity.b93(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  uz() {
    return this.v92_1;
  }
  w1c() {
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
    this.x92_1 = did;
    this.y92_1 = handle;
    this.z92_1 = sec;
    this.a93_1 = time;
  }
  toString() {
    return 'Identity(did=' + this.x92_1 + ', handle=' + this.y92_1 + ', sec=' + this.z92_1.toString() + ', time=' + this.a93_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.x92_1);
    result = imul(result, 31) + getStringHashCode(this.y92_1) | 0;
    result = imul(result, 31) + getBigIntHashCode(this.z92_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a93_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Identity))
      return false;
    if (!(this.x92_1 === other.x92_1))
      return false;
    if (!(this.y92_1 === other.y92_1))
      return false;
    if (!(this.z92_1 === other.z92_1))
      return false;
    if (!(this.a93_1 === other.a93_1))
      return false;
    return true;
  }
  static b93(seen0, did, handle, sec, time, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().v92_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.x92_1 = '';
    else
      $this.x92_1 = did;
    if (0 === (seen0 & 2))
      $this.y92_1 = '';
    else
      $this.y92_1 = handle;
    if (0 === (seen0 & 4))
      $this.z92_1 = 0n;
    else
      $this.z92_1 = sec;
    if (0 === (seen0 & 8))
      $this.a93_1 = '';
    else
      $this.a93_1 = time;
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
    this.i93_1 = null;
    this.j93_1 = null;
    this.k93_1 = null;
    this.l93_1 = null;
    this.client.m59(this.uri);
    var tmp_0 = this.client;
    tmp_0.e59_1 = SyncStreamClient$slambda(this);
    var tmp_1 = this.client;
    tmp_1.f59_1 = SyncStreamClient$lambda(this);
    var tmp_2 = this.client;
    tmp_2.g59_1 = SyncStreamClient$lambda_0(this);
  }
  t8p() {
    return this.atproto;
  }
  l3l() {
    return this.uri;
  }
  a6b() {
    return this.filter;
  }
  n93(_set____db54di) {
    this.client = _set____db54di;
  }
  o93() {
    return this.client;
  }
  p93(_set____db54di) {
    this.isOpen = _set____db54di;
  }
  q93() {
    return this.isOpen;
  }
  eventCallback(callback) {
    // Inline function 'kotlin.also' call
    this.i93_1 = callback;
    return this;
  }
  openedCallback(callback) {
    // Inline function 'kotlin.also' call
    this.j93_1 = callback;
    return this;
  }
  closedCallback(callback) {
    // Inline function 'kotlin.also' call
    this.k93_1 = callback;
    return this;
  }
  errorCallback(callback) {
    // Inline function 'kotlin.also' call
    this.l93_1 = callback;
    return this;
  }
  *w39($completion) {
    yield* this.client.n59($completion);
    return Unit_instance;
  }
  open() {
    return promisify(($completion) => this.w39($completion));
  }
  *t3d($completion) {
    if (this.open === protoOf(SyncStreamClient).open)
      yield* this.w39($completion);
    else
      yield* await_0(this.open(), $completion);
    return Unit_instance;
  }
  close() {
    this.client.g7();
  }
}
class Companion_4 {}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.com.atproto.model.StreamOp', this, 2);
    tmp0_serialDesc.g1c('action', true);
    tmp0_serialDesc.g1c('path', true);
    this.r93_1 = tmp0_serialDesc;
  }
  s93(encoder, value) {
    var tmp0_desc = this.r93_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.g93_1 == null)) {
      tmp1_output.m16(tmp0_desc, 0, StringSerializer_getInstance(), value.g93_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.h93_1 == null)) {
      tmp1_output.m16(tmp0_desc, 1, StringSerializer_getInstance(), value.h93_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.s93(encoder, value instanceof StreamOp ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.r93_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u14(tmp0_desc);
    if (tmp6_input.j15()) {
      tmp4_local0 = tmp6_input.i15(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i15(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i15(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i15(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp6_input.v14(tmp0_desc);
    return StreamOp.t93(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  uz() {
    return this.r93_1;
  }
  w1c() {
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
    this.g93_1 = action;
    this.h93_1 = path;
  }
  toString() {
    return 'StreamOp(action=' + this.g93_1 + ', path=' + this.h93_1 + ')';
  }
  hashCode() {
    var result = this.g93_1 == null ? 0 : getStringHashCode(this.g93_1);
    result = imul(result, 31) + (this.h93_1 == null ? 0 : getStringHashCode(this.h93_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof StreamOp))
      return false;
    if (!(this.g93_1 == other.g93_1))
      return false;
    if (!(this.h93_1 == other.h93_1))
      return false;
    return true;
  }
  static t93(seen0, action, path, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().r93_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.g93_1 = null;
    else
      $this.g93_1 = action;
    if (0 === (seen0 & 2))
      $this.h93_1 = null;
    else
      $this.h93_1 = path;
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
    tmp.u93_1 = [null, null, lazy(tmp_0, StreamRoot$Companion$$childSerializers$_anonymous__gnm36w), null];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.com.atproto.model.StreamRoot', this, 4);
    tmp0_serialDesc.g1c('op', true);
    tmp0_serialDesc.g1c('repo', true);
    tmp0_serialDesc.g1c('ops', true);
    tmp0_serialDesc.g1c('t', true);
    this.v93_1 = tmp0_serialDesc;
  }
  w93(encoder, value) {
    var tmp0_desc = this.v93_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().u93_1;
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.c93_1 == null)) {
      tmp1_output.m16(tmp0_desc, 0, IntSerializer_getInstance(), value.c93_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.d93_1 == null)) {
      tmp1_output.m16(tmp0_desc, 1, StringSerializer_getInstance(), value.d93_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.e93_1 == null)) {
      tmp1_output.m16(tmp0_desc, 2, tmp2_cached[2].d3(), value.e93_1);
    }
    if (tmp1_output.q16(tmp0_desc, 3) ? true : !(value.f93_1 == null)) {
      tmp1_output.m16(tmp0_desc, 3, StringSerializer_getInstance(), value.f93_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.w93(encoder, value instanceof StreamRoot ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.v93_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u14(tmp0_desc);
    var tmp9_cached = Companion_getInstance_6().u93_1;
    if (tmp8_input.j15()) {
      tmp4_local0 = tmp8_input.i15(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i15(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i15(tmp0_desc, 2, tmp9_cached[2].d3(), tmp6_local2);
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
            tmp5_local1 = tmp8_input.i15(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i15(tmp0_desc, 2, tmp9_cached[2].d3(), tmp6_local2);
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
    return StreamRoot.x93(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  uz() {
    return this.v93_1;
  }
  w1c() {
    var tmp0_cached = Companion_getInstance_6().u93_1;
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
    this.c93_1 = op;
    this.d93_1 = repo;
    this.e93_1 = ops;
    this.f93_1 = t;
  }
  toString() {
    return 'StreamRoot(op=' + this.c93_1 + ', repo=' + this.d93_1 + ', ops=' + toString_0(this.e93_1) + ', t=' + this.f93_1 + ')';
  }
  hashCode() {
    var result = this.c93_1 == null ? 0 : this.c93_1;
    result = imul(result, 31) + (this.d93_1 == null ? 0 : getStringHashCode(this.d93_1)) | 0;
    result = imul(result, 31) + (this.e93_1 == null ? 0 : hashCode(this.e93_1)) | 0;
    result = imul(result, 31) + (this.f93_1 == null ? 0 : getStringHashCode(this.f93_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof StreamRoot))
      return false;
    if (!(this.c93_1 == other.c93_1))
      return false;
    if (!(this.d93_1 == other.d93_1))
      return false;
    if (!equals(this.e93_1, other.e93_1))
      return false;
    if (!(this.f93_1 == other.f93_1))
      return false;
    return true;
  }
  static x93(seen0, op, repo, ops, t, serializationConstructorMarker) {
    Companion_getInstance_6();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().v93_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.c93_1 = null;
    else
      $this.c93_1 = op;
    if (0 === (seen0 & 2))
      $this.d93_1 = null;
    else
      $this.d93_1 = repo;
    if (0 === (seen0 & 4))
      $this.e93_1 = null;
    else
      $this.e93_1 = ops;
    if (0 === (seen0 & 8))
      $this.f93_1 = null;
    else
      $this.f93_1 = t;
    return $this;
  }
}
class BlueskyStreamImpl {
  constructor(config) {
    this.y93_1 = new BlueskyImpl(config);
    this.z93_1 = new JetStreamResourceImpl(this.y93_1, config);
  }
  a94() {
    return this.z93_1;
  }
}
class JetStreamResourceImpl {
  constructor(bluesky, config) {
    this.b94_1 = bluesky;
    this.c94_1 = config;
  }
  d94(request) {
    // Inline function 'kotlin.also' call
    var this_0 = new URLBuilder();
    this_0.v4c(Companion_getInstance().z4c_1);
    var tmp = this_0;
    var tmp0_elvis_lhs = request.z90_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this.c94_1.w90_1 : tmp0_elvis_lhs;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.random' call
      var this_1 = Companion_getInstance_0().v90_1;
      tmp_0 = random(this_1, Default_getInstance());
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp.m4b_1 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!request.a91_1.j1()) {
      var _iterator__ex2g4s = request.a91_1.l1();
      while (_iterator__ex2g4s.m1()) {
        var wantedCollection = _iterator__ex2g4s.n1();
        this_0.v4b_1.b3v('wantedCollections', wantedCollection);
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!request.b91_1.j1()) {
      var _iterator__ex2g4s_0 = request.b91_1.l1();
      while (_iterator__ex2g4s_0.m1()) {
        var wantedDid = _iterator__ex2g4s_0.n1();
        this_0.v4b_1.b3v('wantedDids', wantedDid);
      }
    }
    var tmp2_safe_receiver = request.d91_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.v4b_1.b3v('cursor', tmp2_safe_receiver.toString());
    }
    var tmp3_safe_receiver = request.c91_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.v4b_1.b3v('maxMessageSizeBytes', tmp3_safe_receiver.toString());
    }
    var tmp4_safe_receiver = request.e91_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.v4b_1.b3v('requireHello', tmp4_safe_receiver.toString());
    }
    path(this_0, ['subscribe']);
    var builder = this_0;
    return new JetStreamClient(builder.h4d());
  }
}
class ATProtocolStreamImpl {
  constructor(config) {
    this.e94_1 = new ATProtocolImpl(config);
    this.f94_1 = new SyncResourceImpl(this.e94_1, config);
  }
  sync() {
    return this.f94_1;
  }
}
class SyncResourceImpl {
  constructor(atproto, config) {
    this.g94_1 = atproto;
    this.h94_1 = config;
  }
  subscribeRepos(request) {
    var url = 'wss://' + Url(this.h94_1.firehoseUri).z4b_1 + '/xrpc/' + 'com.atproto.sync.subscribeRepos';
    return new SyncStreamClient(this.g94_1, url, request.filter);
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
    var tmp0_safe_receiver = $this.k91_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'work.socialhub.kbsky.internal.share.InternalUtility.fromJson' call
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = InternalUtility_getInstance().s6f_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.f10();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Event), arrayOf([]), false));
      var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var event = this_0.g11(tmp$ret$4, text);
      tmp0_safe_receiver.o91(event);
    }
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var tmp1_safe_receiver = $this.n91_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.p91(e);
      }
    } else {
      throw $p;
    }
  }
}
function onMessage_0($this, data) {
}
function JetStreamClient$slambda(this$0) {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    onMessage_0(this$0, it);
    return Unit_instance;
  }), 1);
}
function JetStreamClient$slambda_0(this$0) {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    onMessage(this$0, it);
    return Unit_instance;
  }), 1);
}
function JetStreamClient$lambda(this$0) {
  return (it) => {
    this$0.j91_1 = true;
    var tmp0_safe_receiver = this$0.l91_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q91();
    }
    return Unit_instance;
  };
}
function JetStreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.j91_1 = false;
    var tmp0_safe_receiver = this$0.m91_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r91();
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
  var destination = ArrayList.i2(charSequenceLength(hex));
  var index = 0;
  var inductionVariable = 0;
  while (inductionVariable < charSequenceLength(hex)) {
    var item = charSequenceGet(hex, inductionVariable);
    inductionVariable = inductionVariable + 1 | 0;
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    var tmp$ret$2 = to(_unary__edvuaz, new Char(item));
    destination.j2(tmp$ret$2);
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.k2();
  var _iterator__ex2g4s = destination.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    if (equals(element.second, new Char(_Char___init__impl__6a9atx(97)))) {
      destination_0.j2(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_1 = ArrayList.i2(collectionSizeOrDefault(destination_0, 10));
  var _iterator__ex2g4s_0 = destination_0.l1();
  while (_iterator__ex2g4s_0.m1()) {
    var item_0 = _iterator__ex2g4s_0.n1();
    var tmp$ret$8 = item_0.first;
    destination_1.j2(tmp$ret$8);
  }
  var indexes = destination_1;
  var _iterator__ex2g4s_1 = indexes.l1();
  $l$loop_1: while (_iterator__ex2g4s_1.m1()) {
    var ind = _iterator__ex2g4s_1.n1();
    try {
      var sub = substring(hex, until(ind, hex.length));
      // Inline function 'kotlinx.serialization.decodeFromHexString' call
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = cbor.f10();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(StreamRoot), arrayOf([]), false));
      var tmp$ret$10 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      var item_1 = decodeFromHexString(cbor, tmp$ret$10, sub);
      if (item_1.e93_1 == null) {
        continue $l$loop_1;
      }
      // Inline function 'kotlin.checkNotNull' call
      var tmp0 = item_1.e93_1;
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
        if (!(op.g93_1 === 'create')) {
          continue $l$loop_0;
        }
        var path = op.h93_1;
        var repo = item_1.d93_1;
        var tmp0_0 = split(ensureNotNull(path), ['/']);
        var tmp$ret$15;
        $l$block_0: {
          // Inline function 'kotlin.collections.dropLastWhile' call
          if (!tmp0_0.j1()) {
            var iterator = tmp0_0.q2(tmp0_0.l2());
            while (iterator.v7()) {
              // Inline function 'kotlin.text.isEmpty' call
              var this_2 = iterator.x7();
              if (!(charSequenceLength(this_2) === 0)) {
                tmp$ret$15 = take(tmp0_0, iterator.w7() + 1 | 0);
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
            tmp = !$this.filter.o2(elements[0]);
          } else {
            tmp = false;
          }
          if (tmp) {
            return Unit_instance;
          }
          var response = $this.atproto.repo().z63(new RepoGetRecordRequest(ensureNotNull(repo), elements[0], elements[1]));
          var tmp0_safe_receiver = $this.i93_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.m93(response.data.cid, response.data.uri, response.data.value);
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
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    onMessage_1(this$0, it);
    return Unit_instance;
  }), 1);
}
function SyncStreamClient$lambda(this$0) {
  return (it) => {
    this$0.isOpen = true;
    var tmp0_safe_receiver = this$0.j93_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q91();
    }
    return Unit_instance;
  };
}
function SyncStreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.isOpen = false;
    var tmp0_safe_receiver = this$0.k93_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r91();
    }
    return Unit_instance;
  };
}
function SyncStreamClient$onMessage$lambda($this$Cbor) {
  $this$Cbor.g8w_1 = true;
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
protoOf($serializer).x1c = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Account, 'Account', Account, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_1);
protoOf($serializer_0).x1c = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Commit, 'Commit', Commit, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_1).x1c = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Event, 'Event', Event, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_2).x1c = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Identity, 'Identity', Identity, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForClass(SyncStreamClient, 'SyncStreamClient', VOID, VOID, VOID, [0]);
initMetadataForCompanion(Companion_4);
protoOf($serializer_3).x1c = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamOp, 'StreamOp', StreamOp, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_4).x1c = typeParametersSerializers;
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
ATProtocolStreamFactory.getInstance = ATProtocolStreamFactory_getInstance;
export {
  ATProtocolStream as ATProtocolStream,
  ATProtocolStreamConfig as ATProtocolStreamConfig,
  ATProtocolStreamFactory as ATProtocolStreamFactory,
  SyncResource as SyncResource,
  SyncSubscribeReposRequest as SyncSubscribeReposRequest,
  SyncStreamClient as SyncStreamClient,
};
export {
  BlueskyStreamFactory_instance as BlueskyStreamFactory_instance12v3r6c9jy0ql,
  JetStreamSubscribeRequest as JetStreamSubscribeRequestfw1ls23fthco,
};
//endregion

//# sourceMappingURL=kbsky-stream.mjs.map
