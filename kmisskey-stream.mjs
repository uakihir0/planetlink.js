import {
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  trimEndvvzjdhan75g as trimEnd,
  split2bvyvnrlcifjv as split,
  contains3ue2qo8xhmpf1 as contains,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  listOfvhqybd2zx248 as listOf,
  getKClass3t8tygqu4lcxf as getKClass,
  PrimitiveClasses_getInstance143761yrsca9q as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  isInterface3d6p8outrmvmk as isInterface,
  constructCallableReference23y65rf941mch as constructCallableReference,
  Default_getInstance3u7accvuecmtb as Default_getInstance,
  toString1h6jjoch8cjt8 as toString_0,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  emptyList1g2z5xcrvp2zy as emptyList,
  KtMap140uvy3s5zad8 as KtMap,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  joinToString1cxrrlmo0chqs as joinToString,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Internal_getInstanceixagipn0z7jk as Internal_getInstance,
  Reaction2rwc7a1hn6dzc as Reaction,
  DeletedNote3kovbbbay6puc as DeletedNote,
  Note1xzq7easd89vs as Note,
  User1vf417zyi6an4 as User,
  Notification1mozucm3whmk3 as Notification,
} from './kmisskey-core.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  StringSerializer_getInstancerxlnwnlbnwri as StringSerializer_getInstance,
  get_nullable197rfua9r7fsz as get_nullable,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { WebsocketRequest38pjwt1m63ieg as WebsocketRequest } from './khttpclient.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Unsubscribe {
  constructor($outer, client) {
    this.nbc_1 = $outer;
    this.mbc_1 = client;
  }
  *obc(noteId, $completion) {
    yield* this.mbc_1.wbc(noteId, $completion);
    return Unit_instance;
  }
}
class MisskeyStream {
  constructor(misskey, streamHost) {
    streamHost = streamHost === VOID ? null : streamHost;
    var raw = streamHost == null ? misskey.host : streamHost;
    var protocol;
    var host;
    if (contains(raw, '://')) {
      var parts = split(raw, ['://'], VOID, 2);
      switch (parts.n2(0)) {
        case 'ws':
        case 'wss':
          protocol = parts.n2(0);
          break;
        case 'http':
          protocol = 'ws';
          break;
        case 'https':
          protocol = 'wss';
          break;
        default:
          protocol = 'wss';
          break;
      }
      host = trimEnd(parts.n2(1), charArrayOf([_Char___init__impl__6a9atx(47)]));
    } else {
      protocol = 'wss';
      host = trimEnd(raw, charArrayOf([_Char___init__impl__6a9atx(47)]));
    }
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = misskey.i;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var i = tmp$ret$1;
    this.xbc_1 = protocol + '://' + host + '/streaming?i=' + i;
    this.ybc_1 = new StreamClient(this.xbc_1);
  }
  j8x() {
    return this.ybc_1.rbc_1;
  }
  *r37($completion) {
    yield* this.ybc_1.r37($completion);
    return Unit_instance;
  }
  f7() {
    this.ybc_1.f7();
  }
  *zbc(callback, $completion) {
    var tmp0 = this.ybc_1;
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.abd();
    var request = new StreamRequest('connect', new Body(id, 'main', tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.bbd(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().mb8_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.vz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.v10(tmp$ret$6, request);
    yield* tmp0.qbc_1.p56(text, $completion);
    return Unit_instance;
  }
  *cbd(callback, $completion) {
    var tmp0 = this.ybc_1;
    var tmp2 = 'homeTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.abd();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.bbd(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().mb8_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.vz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.v10(tmp$ret$6, request);
    yield* tmp0.qbc_1.p56(text, $completion);
    return Unit_instance;
  }
  *dbd(callback, $completion) {
    var tmp0 = this.ybc_1;
    var tmp2 = 'localTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.abd();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.bbd(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().mb8_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.vz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.v10(tmp$ret$6, request);
    yield* tmp0.qbc_1.p56(text, $completion);
    return Unit_instance;
  }
  *ebd(callback, $completion) {
    var tmp0 = this.ybc_1;
    var tmp2 = 'globalTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.abd();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.bbd(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().mb8_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.vz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.v10(tmp$ret$6, request);
    yield* tmp0.qbc_1.p56(text, $completion);
    return Unit_instance;
  }
  *fbd(noteId, callback, $completion) {
    var tmp0 = this.ybc_1;
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribeToNote' call
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var callbacks = listOf(callback);
    var request = new StreamRequest('subNote', new Body(noteId, '', tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.bbd(noteId, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().mb8_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.vz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.v10(tmp$ret$6, request);
    yield* tmp0.qbc_1.p56(text, $completion);
    return Unit_instance;
  }
  gbd() {
    return new Unsubscribe(this, this.ybc_1);
  }
}
class StreamClient {
  constructor(uri) {
    this.pbc_1 = uri;
    this.qbc_1 = new WebsocketRequest();
    this.rbc_1 = false;
    this.sbc_1 = null;
    this.tbc_1 = null;
    this.ubc_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.vbc_1 = LinkedHashMap.r5();
    this.qbc_1.n56(this.pbc_1);
    var tmp_0 = this.qbc_1;
    tmp_0.e56_1 = StreamClient$slambda(this);
    var tmp_1 = this.qbc_1;
    tmp_1.g56_1 = StreamClient$lambda(this);
    var tmp_2 = this.qbc_1;
    tmp_2.h56_1 = StreamClient$lambda_0(this);
  }
  *r37($completion) {
    yield* this.qbc_1.o56($completion);
    return Unit_instance;
  }
  f7() {
    this.qbc_1.f7();
  }
  bbd(id, callback) {
    // Inline function 'kotlin.let' call
    var map = this.vbc_1;
    var tmp0_elvis_lhs = map.v4(id);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList.k2();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    // Inline function 'kotlin.also' call
    var this_0 = tmp;
    this_0.j2(callback);
    // Inline function 'kotlin.collections.set' call
    map.o4(id, this_0);
  }
  *wbc(id, $completion) {
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var type = 'unsubNote';
    // Inline function 'kotlin.collections.listOf' call
    var callbacks = emptyList();
    var request = new StreamRequest(type, new Body(id, '', ''));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      this.bbd(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().mb8_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.vz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), false))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.v10(tmp$ret$6, request);
    yield* this.qbc_1.p56(text, $completion);
    return Unit_instance;
  }
  hbd(message) {
    // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = Internal_getInstance().mb8_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.vz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyOnlyType), arrayOf([]), false))]), false));
    var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var response = this_0.w10(tmp$ret$2, message);
    if (response.s38() === 'channel') {
      if (response.eav().obd_1 === 'note') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_3 = Internal_getInstance().mb8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_4 = this_3.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_5 = serializer(this_4, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$6 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
        var noteType = this_3.w10(tmp$ret$6, message);
        var tmp0 = this.vbc_1;
        // Inline function 'kotlin.collections.get' call
        var key = noteType.eav().ibd_1;
        var events = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).v4(key);
        if (!(events == null) && events.l2() > 0) {
          var _iterator__ex2g4s = events.l1();
          while (_iterator__ex2g4s.m1()) {
            var event = _iterator__ex2g4s.n1();
            if (isInterface(event, TimelineCallback)) {
              var body = noteType.eav().eav();
              event.sbd(body);
            }
          }
        }
      }
      if (response.eav().obd_1 === 'reply') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_6 = Internal_getInstance().mb8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_7 = this_6.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_8 = serializer(this_7, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$11 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
        var noteType_0 = this_6.w10(tmp$ret$11, message);
        var tmp0_0 = this.vbc_1;
        // Inline function 'kotlin.collections.get' call
        var key_0 = noteType_0.eav().ibd_1;
        var events_0 = (isInterface(tmp0_0, KtMap) ? tmp0_0 : THROW_CCE()).v4(key_0);
        if (!(events_0 == null) && events_0.l2() > 0) {
          var _iterator__ex2g4s_0 = events_0.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var event_0 = _iterator__ex2g4s_0.n1();
            if (isInterface(event_0, ReplayCallback)) {
              var body_0 = noteType_0.eav().eav();
              event_0.tbd(body_0);
            }
          }
        }
      }
      if (response.eav().obd_1 === 'mention') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_9 = Internal_getInstance().mb8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_10 = this_9.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_11 = serializer(this_10, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$16 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
        var noteType_1 = this_9.w10(tmp$ret$16, message);
        var tmp0_1 = this.vbc_1;
        // Inline function 'kotlin.collections.get' call
        var key_1 = noteType_1.eav().ibd_1;
        var events_1 = (isInterface(tmp0_1, KtMap) ? tmp0_1 : THROW_CCE()).v4(key_1);
        if (!(events_1 == null) && events_1.l2() > 0) {
          var _iterator__ex2g4s_1 = events_1.l1();
          while (_iterator__ex2g4s_1.m1()) {
            var event_1 = _iterator__ex2g4s_1.n1();
            if (isInterface(event_1, MentionCallback)) {
              var body_1 = noteType_1.eav().eav();
              event_1.ubd(body_1);
            }
          }
        }
      }
      if (response.eav().obd_1 === 'renote') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_12 = Internal_getInstance().mb8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_13 = this_12.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_14 = serializer(this_13, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$21 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
        var noteType_2 = this_12.w10(tmp$ret$21, message);
        var tmp0_2 = this.vbc_1;
        // Inline function 'kotlin.collections.get' call
        var key_2 = noteType_2.eav().ibd_1;
        var events_2 = (isInterface(tmp0_2, KtMap) ? tmp0_2 : THROW_CCE()).v4(key_2);
        if (!(events_2 == null) && events_2.l2() > 0) {
          var _iterator__ex2g4s_2 = events_2.l1();
          while (_iterator__ex2g4s_2.m1()) {
            var event_2 = _iterator__ex2g4s_2.n1();
            if (isInterface(event_2, RenoteCallback)) {
              var body_2 = noteType_2.eav().eav();
              event_2.vbd(body_2);
            }
          }
        }
      }
      if (response.eav().obd_1 === 'followed') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_15 = Internal_getInstance().mb8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_16 = this_15.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_17 = serializer(this_16, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(User), arrayOf([]), false))]), false))]), false));
        var tmp$ret$26 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
        var userType = this_15.w10(tmp$ret$26, message);
        var tmp0_3 = this.vbc_1;
        // Inline function 'kotlin.collections.get' call
        var key_3 = userType.eav().ibd_1;
        var events_3 = (isInterface(tmp0_3, KtMap) ? tmp0_3 : THROW_CCE()).v4(key_3);
        if (!(events_3 == null) && events_3.l2() > 0) {
          var _iterator__ex2g4s_3 = events_3.l1();
          while (_iterator__ex2g4s_3.m1()) {
            var event_3 = _iterator__ex2g4s_3.n1();
            if (isInterface(event_3, FollowedCallback)) {
              var body_3 = userType.eav().eav();
              event_3.wbd(body_3);
            }
          }
        }
      }
      if (response.eav().obd_1 === 'notification') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_18 = Internal_getInstance().mb8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_19 = this_18.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_20 = serializer(this_19, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Notification), arrayOf([]), false))]), false))]), false));
        var tmp$ret$31 = isInterface(this_20, KSerializer) ? this_20 : THROW_CCE();
        var notificationType = this_18.w10(tmp$ret$31, message);
        var tmp0_4 = this.vbc_1;
        // Inline function 'kotlin.collections.get' call
        var key_4 = notificationType.eav().ibd_1;
        var events_4 = (isInterface(tmp0_4, KtMap) ? tmp0_4 : THROW_CCE()).v4(key_4);
        if (!(events_4 == null) && events_4.l2() > 0) {
          var _iterator__ex2g4s_4 = events_4.l1();
          while (_iterator__ex2g4s_4.m1()) {
            var event_4 = _iterator__ex2g4s_4.n1();
            if (isInterface(event_4, NotificationCallback)) {
              var body_4 = notificationType.eav().eav();
              event_4.xbd(body_4);
            }
          }
        }
      }
    } else if (response.s38() === 'noteUpdated') {
      if (response.eav().obd_1 === 'reacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_21 = Internal_getInstance().mb8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_22 = this_21.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_23 = serializer(this_22, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$36 = isInterface(this_23, KSerializer) ? this_23 : THROW_CCE();
        var reactionType = this_21.w10(tmp$ret$36, message);
        var tmp0_5 = this.vbc_1;
        // Inline function 'kotlin.collections.get' call
        var key_5 = reactionType.eav().ibd_1;
        var events_5 = (isInterface(tmp0_5, KtMap) ? tmp0_5 : THROW_CCE()).v4(key_5);
        if (!(events_5 == null) && events_5.l2() > 0) {
          var _iterator__ex2g4s_5 = events_5.l1();
          while (_iterator__ex2g4s_5.m1()) {
            var event_5 = _iterator__ex2g4s_5.n1();
            if (isInterface(event_5, NoteCallback)) {
              var body_5 = reactionType.eav().eav();
              body_5.hax_1 = response.eav().nbd_1;
              event_5.pbd(body_5);
            }
          }
        }
      }
      if (response.eav().obd_1 === 'unreacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_24 = Internal_getInstance().mb8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_25 = this_24.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_26 = serializer(this_25, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$41 = isInterface(this_26, KSerializer) ? this_26 : THROW_CCE();
        var reactionType_0 = this_24.w10(tmp$ret$41, message);
        var tmp0_6 = this.vbc_1;
        // Inline function 'kotlin.collections.get' call
        var key_6 = reactionType_0.eav().ibd_1;
        var events_6 = (isInterface(tmp0_6, KtMap) ? tmp0_6 : THROW_CCE()).v4(key_6);
        if (!(events_6 == null) && events_6.l2() > 0) {
          var _iterator__ex2g4s_6 = events_6.l1();
          while (_iterator__ex2g4s_6.m1()) {
            var event_6 = _iterator__ex2g4s_6.n1();
            if (isInterface(event_6, NoteCallback)) {
              var body_6 = reactionType_0.eav().eav();
              body_6.hax_1 = response.eav().nbd_1;
              event_6.qbd(body_6);
            }
          }
        }
      }
      if (response.eav().obd_1 === 'deleted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_27 = Internal_getInstance().mb8_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_28 = this_27.vz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_29 = serializer(this_28, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(DeletedNote), arrayOf([]), false))]), false))]), false));
        var tmp$ret$46 = isInterface(this_29, KSerializer) ? this_29 : THROW_CCE();
        var deleteNoteType = this_27.w10(tmp$ret$46, message);
        var tmp0_7 = this.vbc_1;
        // Inline function 'kotlin.collections.get' call
        var key_7 = deleteNoteType.eav().ibd_1;
        var events_7 = (isInterface(tmp0_7, KtMap) ? tmp0_7 : THROW_CCE()).v4(key_7);
        if (!(events_7 == null) && events_7.l2() > 0) {
          var _iterator__ex2g4s_7 = events_7.l1();
          while (_iterator__ex2g4s_7.m1()) {
            var event_7 = _iterator__ex2g4s_7.n1();
            if (isInterface(event_7, NoteCallback)) {
              var body_7 = deleteNoteType.eav().eav();
              body_7.zal_1 = response.eav().nbd_1;
              event_7.rbd(body_7);
            }
          }
        }
      }
    }
  }
  abd() {
    var tmp = numberRangeToNumber(1, 16);
    return joinToString(tmp, '', VOID, VOID, VOID, VOID, StreamClient$randomId$lambda);
  }
}
class FollowedCallback {}
class MentionCallback {}
class NoteCallback {}
class NotificationCallback {}
class RenoteCallback {}
class ReplayCallback {}
class TimelineCallback {}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest.Body', null, 3);
    tmp0_serialDesc.a1c('id', false);
    tmp0_serialDesc.a1c('channel', false);
    tmp0_serialDesc.a1c('params', true);
    this.ybd_1 = tmp0_serialDesc;
  }
  zbd(typeSerial0) {
    return $serializer.cbe(typeSerial0);
  }
  c1d(typeParamsSerializers) {
    return this.zbd(typeParamsSerializers[0]);
  }
}
class $serializer {
  constructor() {
    return new.target.dbe();
  }
  static dbe() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest.Body', $this, 3);
    tmp0_serialDesc.a1c('id', false);
    tmp0_serialDesc.a1c('channel', false);
    tmp0_serialDesc.a1c('params', true);
    $this.abe_1 = tmp0_serialDesc;
    return $this;
  }
  ebe(encoder, value) {
    var tmp0_desc = this.abe_1;
    var tmp1_output = encoder.i14(tmp0_desc);
    tmp1_output.x15(tmp0_desc, 0, value.fbe_1);
    tmp1_output.x15(tmp0_desc, 1, value.gbe_1);
    if (tmp1_output.e16(tmp0_desc, 2) ? true : !(value.hbe_1 == null)) {
      tmp1_output.a16(tmp0_desc, 2, this.bbe_1, value.hbe_1);
    }
    tmp1_output.j14(tmp0_desc);
  }
  xz(encoder, value) {
    return this.ebe(encoder, value instanceof Body ? value : THROW_CCE());
  }
  yz(decoder) {
    var tmp0_desc = this.abe_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.i14(tmp0_desc);
    if (tmp7_input.x14()) {
      tmp4_local0 = tmp7_input.s14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.s14(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.w14(tmp0_desc, 2, this.bbe_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.s14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.s14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.w14(tmp0_desc, 2, this.bbe_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.m11(tmp2_index);
        }
      }
    tmp7_input.j14(tmp0_desc);
    return Body.ibe(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  kz() {
    return this.abe_1;
  }
  q1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(this.bbe_1)];
  }
  r1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.bbe_1];
  }
  static cbe(typeSerial0) {
    var $this = this.dbe();
    $this.bbe_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor(id, channel, params) {
    Companion_getInstance();
    params = params === VOID ? null : params;
    this.fbe_1 = id;
    this.gbe_1 = channel;
    this.hbe_1 = params;
  }
  static ibe(seen0, id, channel, params, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance().ybd_1);
    }
    var $this = createThis(this);
    $this.fbe_1 = id;
    $this.gbe_1 = channel;
    if (0 === (seen0 & 4))
      $this.hbe_1 = null;
    else
      $this.hbe_1 = params;
    return $this;
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', null, 2);
    tmp0_serialDesc.a1c('type', false);
    tmp0_serialDesc.a1c('body', false);
    this.jbe_1 = tmp0_serialDesc;
  }
  zbd(typeSerial0) {
    return $serializer_0.mbe(typeSerial0);
  }
  c1d(typeParamsSerializers) {
    return this.zbd(typeParamsSerializers[0]);
  }
}
class $serializer_0 {
  constructor() {
    return new.target.nbe();
  }
  static nbe() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', $this, 2);
    tmp0_serialDesc.a1c('type', false);
    tmp0_serialDesc.a1c('body', false);
    $this.kbe_1 = tmp0_serialDesc;
    return $this;
  }
  obe(encoder, value) {
    var tmp0_desc = this.kbe_1;
    var tmp1_output = encoder.i14(tmp0_desc);
    tmp1_output.x15(tmp0_desc, 0, value.pbe_1);
    tmp1_output.z15(tmp0_desc, 1, $serializer.cbe(this.lbe_1), value.qbe_1);
    tmp1_output.j14(tmp0_desc);
  }
  xz(encoder, value) {
    return this.obe(encoder, value instanceof StreamRequest ? value : THROW_CCE());
  }
  yz(decoder) {
    var tmp0_desc = this.kbe_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.i14(tmp0_desc);
    if (tmp6_input.x14()) {
      tmp4_local0 = tmp6_input.s14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.u14(tmp0_desc, 1, $serializer.cbe(this.lbe_1), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.s14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.u14(tmp0_desc, 1, $serializer.cbe(this.lbe_1), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.m11(tmp2_index);
        }
      }
    tmp6_input.j14(tmp0_desc);
    return StreamRequest.rbe(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  kz() {
    return this.kbe_1;
  }
  q1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer.cbe(this.lbe_1)];
  }
  r1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.lbe_1];
  }
  static mbe(typeSerial0) {
    var $this = this.nbe();
    $this.lbe_1 = typeSerial0;
    return $this;
  }
}
class StreamRequest {
  constructor(type, body) {
    Companion_getInstance_0();
    this.pbe_1 = type;
    this.qbe_1 = body;
  }
  static rbe(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_0().jbe_1);
    }
    var $this = createThis(this);
    $this.pbe_1 = type;
    $this.qbe_1 = body;
    return $this;
  }
}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyOnlyType', this, 2);
    tmp0_serialDesc.a1c('id', true);
    tmp0_serialDesc.a1c('type', true);
    this.sbe_1 = tmp0_serialDesc;
  }
  tbe(encoder, value) {
    var tmp0_desc = this.sbe_1;
    var tmp1_output = encoder.i14(tmp0_desc);
    if (tmp1_output.e16(tmp0_desc, 0) ? true : !(value.nbd_1 == null)) {
      tmp1_output.a16(tmp0_desc, 0, StringSerializer_getInstance(), value.nbd_1);
    }
    if (tmp1_output.e16(tmp0_desc, 1) ? true : !(value.obd_1 == null)) {
      tmp1_output.a16(tmp0_desc, 1, StringSerializer_getInstance(), value.obd_1);
    }
    tmp1_output.j14(tmp0_desc);
  }
  xz(encoder, value) {
    return this.tbe(encoder, value instanceof BodyOnlyType ? value : THROW_CCE());
  }
  yz(decoder) {
    var tmp0_desc = this.sbe_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.i14(tmp0_desc);
    if (tmp6_input.x14()) {
      tmp4_local0 = tmp6_input.w14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.w14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.w14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.w14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.m11(tmp2_index);
        }
      }
    tmp6_input.j14(tmp0_desc);
    return BodyOnlyType.ube(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  kz() {
    return this.sbe_1;
  }
  q1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_2 {
  constructor() {
    Companion_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyWithBody', null, 3);
    tmp0_serialDesc.a1c('id', true);
    tmp0_serialDesc.a1c('type', true);
    tmp0_serialDesc.a1c('body', false);
    this.vbe_1 = tmp0_serialDesc;
  }
  wbe(typeSerial0) {
    return $serializer_2.zbe(typeSerial0);
  }
  c1d(typeParamsSerializers) {
    return this.wbe(typeParamsSerializers[0]);
  }
}
class $serializer_2 {
  constructor() {
    return new.target.abf();
  }
  static abf() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyWithBody', $this, 3);
    tmp0_serialDesc.a1c('id', true);
    tmp0_serialDesc.a1c('type', true);
    tmp0_serialDesc.a1c('body', false);
    $this.xbe_1 = tmp0_serialDesc;
    return $this;
  }
  bbf(encoder, value) {
    var tmp0_desc = this.xbe_1;
    var tmp1_output = encoder.i14(tmp0_desc);
    if (tmp1_output.e16(tmp0_desc, 0) ? true : !(value.ibd_1 == null)) {
      tmp1_output.a16(tmp0_desc, 0, StringSerializer_getInstance(), value.ibd_1);
    }
    if (tmp1_output.e16(tmp0_desc, 1) ? true : !(value.jbd_1 == null)) {
      tmp1_output.a16(tmp0_desc, 1, StringSerializer_getInstance(), value.jbd_1);
    }
    tmp1_output.z15(tmp0_desc, 2, this.ybe_1, value.eav());
    tmp1_output.j14(tmp0_desc);
  }
  xz(encoder, value) {
    return this.bbf(encoder, value instanceof BodyWithBody ? value : THROW_CCE());
  }
  yz(decoder) {
    var tmp0_desc = this.xbe_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.i14(tmp0_desc);
    if (tmp7_input.x14()) {
      tmp4_local0 = tmp7_input.w14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.w14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.u14(tmp0_desc, 2, this.ybe_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.w14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.w14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.u14(tmp0_desc, 2, this.ybe_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.m11(tmp2_index);
        }
      }
    tmp7_input.j14(tmp0_desc);
    return BodyWithBody.cbf(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  kz() {
    return this.xbe_1;
  }
  q1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), this.ybe_1];
  }
  r1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.ybe_1];
  }
  static zbe(typeSerial0) {
    var $this = this.abf();
    $this.ybe_1 = typeSerial0;
    return $this;
  }
}
class BodyOnlyType {
  constructor() {
    this.nbd_1 = null;
    this.obd_1 = null;
  }
  static ube(seen0, id, type, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().sbe_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.nbd_1 = null;
    else
      $this.nbd_1 = id;
    if (0 === (seen0 & 2))
      $this.obd_1 = null;
    else
      $this.obd_1 = type;
    return $this;
  }
}
class BodyWithBody {
  constructor() {
    Companion_getInstance_2();
    this.ibd_1 = null;
    this.jbd_1 = null;
  }
  eav() {
    var tmp = this.kbd_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static cbf(seen0, id, type, body, serializationConstructorMarker) {
    Companion_getInstance_2();
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, Companion_getInstance_2().vbe_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.ibd_1 = null;
    else
      $this.ibd_1 = id;
    if (0 === (seen0 & 2))
      $this.jbd_1 = null;
    else
      $this.jbd_1 = type;
    $this.kbd_1 = body;
    return $this;
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', null, 2);
    tmp0_serialDesc.a1c('type', false);
    tmp0_serialDesc.a1c('body', false);
    this.dbf_1 = tmp0_serialDesc;
  }
  zbd(typeSerial0) {
    return $serializer_3.gbf(typeSerial0);
  }
  c1d(typeParamsSerializers) {
    return this.zbd(typeParamsSerializers[0]);
  }
}
class $serializer_3 {
  constructor() {
    return new.target.hbf();
  }
  static hbf() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', $this, 2);
    tmp0_serialDesc.a1c('type', false);
    tmp0_serialDesc.a1c('body', false);
    $this.ebf_1 = tmp0_serialDesc;
    return $this;
  }
  ibf(encoder, value) {
    var tmp0_desc = this.ebf_1;
    var tmp1_output = encoder.i14(tmp0_desc);
    tmp1_output.x15(tmp0_desc, 0, value.s38());
    tmp1_output.z15(tmp0_desc, 1, this.fbf_1, value.eav());
    tmp1_output.j14(tmp0_desc);
  }
  xz(encoder, value) {
    return this.ibf(encoder, value instanceof StreamResponse ? value : THROW_CCE());
  }
  yz(decoder) {
    var tmp0_desc = this.ebf_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.i14(tmp0_desc);
    if (tmp6_input.x14()) {
      tmp4_local0 = tmp6_input.s14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.u14(tmp0_desc, 1, this.fbf_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.s14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.u14(tmp0_desc, 1, this.fbf_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.m11(tmp2_index);
        }
      }
    tmp6_input.j14(tmp0_desc);
    return StreamResponse.jbf(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  kz() {
    return this.ebf_1;
  }
  q1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), this.fbf_1];
  }
  r1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.fbf_1];
  }
  static gbf(typeSerial0) {
    var $this = this.hbf();
    $this.fbf_1 = typeSerial0;
    return $this;
  }
}
class StreamResponse {
  constructor() {
    Companion_getInstance_3();
  }
  s38() {
    var tmp = this.lbd_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('type');
    }
  }
  eav() {
    var tmp = this.mbd_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static jbf(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_3().dbf_1);
    }
    var $this = createThis(this);
    $this.lbd_1 = type;
    $this.mbd_1 = body;
    return $this;
  }
}
//endregion
function StreamClient$slambda(this$0) {
  return constructCallableReference(function *(it, $completion) {
    this$0.hbd(it);
    return Unit_instance;
  }, 1);
}
function StreamClient$lambda(this$0) {
  return (it) => {
    this$0.rbc_1 = true;
    var tmp0_safe_receiver = this$0.sbc_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.rbc_1 = false;
    var tmp0_safe_receiver = this$0.tbc_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$randomId$lambda(it) {
  return toString_0(Default_getInstance().mr(0, 16), 16);
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer_1();
  return $serializer_instance;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 === VOID)
    new Companion_2();
  return Companion_instance_2;
}
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 === VOID)
    new Companion_3();
  return Companion_instance_3;
}
//region block: post-declaration
initMetadataForClass(Unsubscribe, 'Unsubscribe', VOID, VOID, VOID, [0, 1]);
initMetadataForClass(MisskeyStream, 'MisskeyStream', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForClass(StreamClient, 'StreamClient', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(FollowedCallback, 'FollowedCallback');
initMetadataForInterface(MentionCallback, 'MentionCallback');
initMetadataForInterface(NoteCallback, 'NoteCallback');
initMetadataForInterface(NotificationCallback, 'NotificationCallback');
initMetadataForInterface(RenoteCallback, 'RenoteCallback');
initMetadataForInterface(ReplayCallback, 'ReplayCallback');
initMetadataForInterface(TimelineCallback, 'TimelineCallback');
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForClass($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Body, 'Body', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance});
initMetadataForCompanion(Companion_0, VOID, [SerializerFactory]);
initMetadataForClass($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamRequest, 'StreamRequest', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_0});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).r1c = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_2, VOID, [SerializerFactory]);
initMetadataForClass($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BodyOnlyType, 'BodyOnlyType', BodyOnlyType, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(BodyWithBody, 'BodyWithBody', BodyWithBody, VOID, VOID, VOID, VOID, {0: Companion_getInstance_2});
initMetadataForCompanion(Companion_3, VOID, [SerializerFactory]);
initMetadataForClass($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamResponse, 'StreamResponse', StreamResponse, VOID, VOID, VOID, VOID, {0: Companion_getInstance_3});
//endregion
//region block: init
Companion_instance_1 = new Companion_1();
//endregion
//region block: exports
export {
  FollowedCallback as FollowedCallbackxfh6i2mailr1,
  MentionCallback as MentionCallback336uk7avkaz7s,
  NoteCallback as NoteCallback22ng444g2mtny,
  NotificationCallback as NotificationCallback269dmfu382ukl,
  RenoteCallback as RenoteCallbackfhq7o9n7653c,
  ReplayCallback as ReplayCallback28v5qhcl80pj5,
  TimelineCallback as TimelineCallback1twaem29l4nd,
  Body as Body3r1jl1su96kjc,
  StreamRequest as StreamRequest17xlyeyhi3si7,
  MisskeyStream as MisskeyStream2uo41hjrnn5mm,
};
//endregion

//# sourceMappingURL=kmisskey-stream.mjs.map
