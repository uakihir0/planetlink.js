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
    this.mba_1 = $outer;
    this.lba_1 = client;
  }
  *nba(noteId, $completion) {
    yield* this.lba_1.vba(noteId, $completion);
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
    this.wba_1 = protocol + '://' + host + '/streaming?i=' + i;
    this.xba_1 = new StreamClient(this.wba_1);
  }
  a8v() {
    return this.xba_1.qba_1;
  }
  *p37($completion) {
    yield* this.xba_1.p37($completion);
    return Unit_instance;
  }
  f7() {
    this.xba_1.f7();
  }
  *yba(callback, $completion) {
    var tmp0 = this.xba_1;
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.zba();
    var request = new StreamRequest('connect', new Body(id, 'main', tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.abb(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().lb6_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.rz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.r10(tmp$ret$6, request);
    yield* tmp0.pba_1.n56(text, $completion);
    return Unit_instance;
  }
  *bbb(callback, $completion) {
    var tmp0 = this.xba_1;
    var tmp2 = 'homeTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.zba();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.abb(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().lb6_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.rz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.r10(tmp$ret$6, request);
    yield* tmp0.pba_1.n56(text, $completion);
    return Unit_instance;
  }
  *cbb(callback, $completion) {
    var tmp0 = this.xba_1;
    var tmp2 = 'localTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.zba();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.abb(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().lb6_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.rz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.r10(tmp$ret$6, request);
    yield* tmp0.pba_1.n56(text, $completion);
    return Unit_instance;
  }
  *dbb(callback, $completion) {
    var tmp0 = this.xba_1;
    var tmp2 = 'globalTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.zba();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.abb(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().lb6_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.rz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.r10(tmp$ret$6, request);
    yield* tmp0.pba_1.n56(text, $completion);
    return Unit_instance;
  }
  *ebb(noteId, callback, $completion) {
    var tmp0 = this.xba_1;
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribeToNote' call
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var callbacks = listOf(callback);
    var request = new StreamRequest('subNote', new Body(noteId, '', tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.abb(noteId, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().lb6_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.rz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.r10(tmp$ret$6, request);
    yield* tmp0.pba_1.n56(text, $completion);
    return Unit_instance;
  }
  fbb() {
    return new Unsubscribe(this, this.xba_1);
  }
}
class StreamClient {
  constructor(uri) {
    this.oba_1 = uri;
    this.pba_1 = new WebsocketRequest();
    this.qba_1 = false;
    this.rba_1 = null;
    this.sba_1 = null;
    this.tba_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.uba_1 = LinkedHashMap.r5();
    this.pba_1.l56(this.oba_1);
    var tmp_0 = this.pba_1;
    tmp_0.c56_1 = StreamClient$slambda(this);
    var tmp_1 = this.pba_1;
    tmp_1.e56_1 = StreamClient$lambda(this);
    var tmp_2 = this.pba_1;
    tmp_2.f56_1 = StreamClient$lambda_0(this);
  }
  *p37($completion) {
    yield* this.pba_1.m56($completion);
    return Unit_instance;
  }
  f7() {
    this.pba_1.f7();
  }
  abb(id, callback) {
    // Inline function 'kotlin.let' call
    var map = this.uba_1;
    var tmp0_elvis_lhs = map.v4(id);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList.j2();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    // Inline function 'kotlin.also' call
    var this_0 = tmp;
    this_0.i2(callback);
    // Inline function 'kotlin.collections.set' call
    map.o4(id, this_0);
  }
  *vba(id, $completion) {
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var type = 'unsubNote';
    // Inline function 'kotlin.collections.listOf' call
    var callbacks = emptyList();
    var request = new StreamRequest(type, new Body(id, '', ''));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      this.abb(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().lb6_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.rz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xg(), arrayOf([]), false))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.r10(tmp$ret$6, request);
    yield* this.pba_1.n56(text, $completion);
    return Unit_instance;
  }
  gbb(message) {
    // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = Internal_getInstance().lb6_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.rz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyOnlyType), arrayOf([]), false))]), false));
    var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var response = this_0.s10(tmp$ret$2, message);
    if (response.q38() === 'channel') {
      if (response.bat().nbb_1 === 'note') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_3 = Internal_getInstance().lb6_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_4 = this_3.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_5 = serializer(this_4, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$6 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
        var noteType = this_3.s10(tmp$ret$6, message);
        var tmp0 = this.uba_1;
        // Inline function 'kotlin.collections.get' call
        var key = noteType.bat().hbb_1;
        var events = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).v4(key);
        if (!(events == null) && events.l2() > 0) {
          var _iterator__ex2g4s = events.l1();
          while (_iterator__ex2g4s.m1()) {
            var event = _iterator__ex2g4s.n1();
            if (isInterface(event, TimelineCallback)) {
              var body = noteType.bat().bat();
              event.rbb(body);
            }
          }
        }
      }
      if (response.bat().nbb_1 === 'reply') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_6 = Internal_getInstance().lb6_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_7 = this_6.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_8 = serializer(this_7, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$11 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
        var noteType_0 = this_6.s10(tmp$ret$11, message);
        var tmp0_0 = this.uba_1;
        // Inline function 'kotlin.collections.get' call
        var key_0 = noteType_0.bat().hbb_1;
        var events_0 = (isInterface(tmp0_0, KtMap) ? tmp0_0 : THROW_CCE()).v4(key_0);
        if (!(events_0 == null) && events_0.l2() > 0) {
          var _iterator__ex2g4s_0 = events_0.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var event_0 = _iterator__ex2g4s_0.n1();
            if (isInterface(event_0, ReplayCallback)) {
              var body_0 = noteType_0.bat().bat();
              event_0.sbb(body_0);
            }
          }
        }
      }
      if (response.bat().nbb_1 === 'mention') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_9 = Internal_getInstance().lb6_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_10 = this_9.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_11 = serializer(this_10, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$16 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
        var noteType_1 = this_9.s10(tmp$ret$16, message);
        var tmp0_1 = this.uba_1;
        // Inline function 'kotlin.collections.get' call
        var key_1 = noteType_1.bat().hbb_1;
        var events_1 = (isInterface(tmp0_1, KtMap) ? tmp0_1 : THROW_CCE()).v4(key_1);
        if (!(events_1 == null) && events_1.l2() > 0) {
          var _iterator__ex2g4s_1 = events_1.l1();
          while (_iterator__ex2g4s_1.m1()) {
            var event_1 = _iterator__ex2g4s_1.n1();
            if (isInterface(event_1, MentionCallback)) {
              var body_1 = noteType_1.bat().bat();
              event_1.tbb(body_1);
            }
          }
        }
      }
      if (response.bat().nbb_1 === 'renote') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_12 = Internal_getInstance().lb6_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_13 = this_12.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_14 = serializer(this_13, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$21 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
        var noteType_2 = this_12.s10(tmp$ret$21, message);
        var tmp0_2 = this.uba_1;
        // Inline function 'kotlin.collections.get' call
        var key_2 = noteType_2.bat().hbb_1;
        var events_2 = (isInterface(tmp0_2, KtMap) ? tmp0_2 : THROW_CCE()).v4(key_2);
        if (!(events_2 == null) && events_2.l2() > 0) {
          var _iterator__ex2g4s_2 = events_2.l1();
          while (_iterator__ex2g4s_2.m1()) {
            var event_2 = _iterator__ex2g4s_2.n1();
            if (isInterface(event_2, RenoteCallback)) {
              var body_2 = noteType_2.bat().bat();
              event_2.ubb(body_2);
            }
          }
        }
      }
      if (response.bat().nbb_1 === 'followed') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_15 = Internal_getInstance().lb6_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_16 = this_15.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_17 = serializer(this_16, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(User), arrayOf([]), false))]), false))]), false));
        var tmp$ret$26 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
        var userType = this_15.s10(tmp$ret$26, message);
        var tmp0_3 = this.uba_1;
        // Inline function 'kotlin.collections.get' call
        var key_3 = userType.bat().hbb_1;
        var events_3 = (isInterface(tmp0_3, KtMap) ? tmp0_3 : THROW_CCE()).v4(key_3);
        if (!(events_3 == null) && events_3.l2() > 0) {
          var _iterator__ex2g4s_3 = events_3.l1();
          while (_iterator__ex2g4s_3.m1()) {
            var event_3 = _iterator__ex2g4s_3.n1();
            if (isInterface(event_3, FollowedCallback)) {
              var body_3 = userType.bat().bat();
              event_3.vbb(body_3);
            }
          }
        }
      }
      if (response.bat().nbb_1 === 'notification') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_18 = Internal_getInstance().lb6_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_19 = this_18.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_20 = serializer(this_19, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Notification), arrayOf([]), false))]), false))]), false));
        var tmp$ret$31 = isInterface(this_20, KSerializer) ? this_20 : THROW_CCE();
        var notificationType = this_18.s10(tmp$ret$31, message);
        var tmp0_4 = this.uba_1;
        // Inline function 'kotlin.collections.get' call
        var key_4 = notificationType.bat().hbb_1;
        var events_4 = (isInterface(tmp0_4, KtMap) ? tmp0_4 : THROW_CCE()).v4(key_4);
        if (!(events_4 == null) && events_4.l2() > 0) {
          var _iterator__ex2g4s_4 = events_4.l1();
          while (_iterator__ex2g4s_4.m1()) {
            var event_4 = _iterator__ex2g4s_4.n1();
            if (isInterface(event_4, NotificationCallback)) {
              var body_4 = notificationType.bat().bat();
              event_4.wbb(body_4);
            }
          }
        }
      }
    } else if (response.q38() === 'noteUpdated') {
      if (response.bat().nbb_1 === 'reacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_21 = Internal_getInstance().lb6_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_22 = this_21.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_23 = serializer(this_22, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$36 = isInterface(this_23, KSerializer) ? this_23 : THROW_CCE();
        var reactionType = this_21.s10(tmp$ret$36, message);
        var tmp0_5 = this.uba_1;
        // Inline function 'kotlin.collections.get' call
        var key_5 = reactionType.bat().hbb_1;
        var events_5 = (isInterface(tmp0_5, KtMap) ? tmp0_5 : THROW_CCE()).v4(key_5);
        if (!(events_5 == null) && events_5.l2() > 0) {
          var _iterator__ex2g4s_5 = events_5.l1();
          while (_iterator__ex2g4s_5.m1()) {
            var event_5 = _iterator__ex2g4s_5.n1();
            if (isInterface(event_5, NoteCallback)) {
              var body_5 = reactionType.bat().bat();
              body_5.fav_1 = response.bat().mbb_1;
              event_5.obb(body_5);
            }
          }
        }
      }
      if (response.bat().nbb_1 === 'unreacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_24 = Internal_getInstance().lb6_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_25 = this_24.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_26 = serializer(this_25, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$41 = isInterface(this_26, KSerializer) ? this_26 : THROW_CCE();
        var reactionType_0 = this_24.s10(tmp$ret$41, message);
        var tmp0_6 = this.uba_1;
        // Inline function 'kotlin.collections.get' call
        var key_6 = reactionType_0.bat().hbb_1;
        var events_6 = (isInterface(tmp0_6, KtMap) ? tmp0_6 : THROW_CCE()).v4(key_6);
        if (!(events_6 == null) && events_6.l2() > 0) {
          var _iterator__ex2g4s_6 = events_6.l1();
          while (_iterator__ex2g4s_6.m1()) {
            var event_6 = _iterator__ex2g4s_6.n1();
            if (isInterface(event_6, NoteCallback)) {
              var body_6 = reactionType_0.bat().bat();
              body_6.fav_1 = response.bat().mbb_1;
              event_6.pbb(body_6);
            }
          }
        }
      }
      if (response.bat().nbb_1 === 'deleted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_27 = Internal_getInstance().lb6_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_28 = this_27.rz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_29 = serializer(this_28, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(DeletedNote), arrayOf([]), false))]), false))]), false));
        var tmp$ret$46 = isInterface(this_29, KSerializer) ? this_29 : THROW_CCE();
        var deleteNoteType = this_27.s10(tmp$ret$46, message);
        var tmp0_7 = this.uba_1;
        // Inline function 'kotlin.collections.get' call
        var key_7 = deleteNoteType.bat().hbb_1;
        var events_7 = (isInterface(tmp0_7, KtMap) ? tmp0_7 : THROW_CCE()).v4(key_7);
        if (!(events_7 == null) && events_7.l2() > 0) {
          var _iterator__ex2g4s_7 = events_7.l1();
          while (_iterator__ex2g4s_7.m1()) {
            var event_7 = _iterator__ex2g4s_7.n1();
            if (isInterface(event_7, NoteCallback)) {
              var body_7 = deleteNoteType.bat().bat();
              body_7.uaj_1 = response.bat().mbb_1;
              event_7.qbb(body_7);
            }
          }
        }
      }
    }
  }
  zba() {
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
    tmp0_serialDesc.q1b('id', false);
    tmp0_serialDesc.q1b('channel', false);
    tmp0_serialDesc.q1b('params', true);
    this.xbb_1 = tmp0_serialDesc;
  }
  ybb(typeSerial0) {
    return $serializer.bbc(typeSerial0);
  }
  s1c(typeParamsSerializers) {
    return this.ybb(typeParamsSerializers[0]);
  }
}
class $serializer {
  constructor() {
    return new.target.cbc();
  }
  static cbc() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest.Body', $this, 3);
    tmp0_serialDesc.q1b('id', false);
    tmp0_serialDesc.q1b('channel', false);
    tmp0_serialDesc.q1b('params', true);
    $this.zbb_1 = tmp0_serialDesc;
    return $this;
  }
  dbc(encoder, value) {
    var tmp0_desc = this.zbb_1;
    var tmp1_output = encoder.y13(tmp0_desc);
    tmp1_output.n15(tmp0_desc, 0, value.ebc_1);
    tmp1_output.n15(tmp0_desc, 1, value.fbc_1);
    if (tmp1_output.u15(tmp0_desc, 2) ? true : !(value.gbc_1 == null)) {
      tmp1_output.q15(tmp0_desc, 2, this.abc_1, value.gbc_1);
    }
    tmp1_output.z13(tmp0_desc);
  }
  tz(encoder, value) {
    return this.dbc(encoder, value instanceof Body ? value : THROW_CCE());
  }
  uz(decoder) {
    var tmp0_desc = this.zbb_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.y13(tmp0_desc);
    if (tmp7_input.n14()) {
      tmp4_local0 = tmp7_input.i14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i14(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.m14(tmp0_desc, 2, this.abc_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.o14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.i14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.m14(tmp0_desc, 2, this.abc_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.i11(tmp2_index);
        }
      }
    tmp7_input.z13(tmp0_desc);
    return Body.hbc(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  gz() {
    return this.zbb_1;
  }
  g1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(this.abc_1)];
  }
  h1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.abc_1];
  }
  static bbc(typeSerial0) {
    var $this = this.cbc();
    $this.abc_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor(id, channel, params) {
    Companion_getInstance();
    params = params === VOID ? null : params;
    this.ebc_1 = id;
    this.fbc_1 = channel;
    this.gbc_1 = params;
  }
  static hbc(seen0, id, channel, params, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance().xbb_1);
    }
    var $this = createThis(this);
    $this.ebc_1 = id;
    $this.fbc_1 = channel;
    if (0 === (seen0 & 4))
      $this.gbc_1 = null;
    else
      $this.gbc_1 = params;
    return $this;
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', null, 2);
    tmp0_serialDesc.q1b('type', false);
    tmp0_serialDesc.q1b('body', false);
    this.ibc_1 = tmp0_serialDesc;
  }
  ybb(typeSerial0) {
    return $serializer_0.lbc(typeSerial0);
  }
  s1c(typeParamsSerializers) {
    return this.ybb(typeParamsSerializers[0]);
  }
}
class $serializer_0 {
  constructor() {
    return new.target.mbc();
  }
  static mbc() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', $this, 2);
    tmp0_serialDesc.q1b('type', false);
    tmp0_serialDesc.q1b('body', false);
    $this.jbc_1 = tmp0_serialDesc;
    return $this;
  }
  nbc(encoder, value) {
    var tmp0_desc = this.jbc_1;
    var tmp1_output = encoder.y13(tmp0_desc);
    tmp1_output.n15(tmp0_desc, 0, value.obc_1);
    tmp1_output.p15(tmp0_desc, 1, $serializer.bbc(this.kbc_1), value.pbc_1);
    tmp1_output.z13(tmp0_desc);
  }
  tz(encoder, value) {
    return this.nbc(encoder, value instanceof StreamRequest ? value : THROW_CCE());
  }
  uz(decoder) {
    var tmp0_desc = this.jbc_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.y13(tmp0_desc);
    if (tmp6_input.n14()) {
      tmp4_local0 = tmp6_input.i14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, $serializer.bbc(this.kbc_1), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.o14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, $serializer.bbc(this.kbc_1), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.i11(tmp2_index);
        }
      }
    tmp6_input.z13(tmp0_desc);
    return StreamRequest.qbc(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  gz() {
    return this.jbc_1;
  }
  g1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer.bbc(this.kbc_1)];
  }
  h1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.kbc_1];
  }
  static lbc(typeSerial0) {
    var $this = this.mbc();
    $this.kbc_1 = typeSerial0;
    return $this;
  }
}
class StreamRequest {
  constructor(type, body) {
    Companion_getInstance_0();
    this.obc_1 = type;
    this.pbc_1 = body;
  }
  static qbc(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_0().ibc_1);
    }
    var $this = createThis(this);
    $this.obc_1 = type;
    $this.pbc_1 = body;
    return $this;
  }
}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyOnlyType', this, 2);
    tmp0_serialDesc.q1b('id', true);
    tmp0_serialDesc.q1b('type', true);
    this.rbc_1 = tmp0_serialDesc;
  }
  sbc(encoder, value) {
    var tmp0_desc = this.rbc_1;
    var tmp1_output = encoder.y13(tmp0_desc);
    if (tmp1_output.u15(tmp0_desc, 0) ? true : !(value.mbb_1 == null)) {
      tmp1_output.q15(tmp0_desc, 0, StringSerializer_getInstance(), value.mbb_1);
    }
    if (tmp1_output.u15(tmp0_desc, 1) ? true : !(value.nbb_1 == null)) {
      tmp1_output.q15(tmp0_desc, 1, StringSerializer_getInstance(), value.nbb_1);
    }
    tmp1_output.z13(tmp0_desc);
  }
  tz(encoder, value) {
    return this.sbc(encoder, value instanceof BodyOnlyType ? value : THROW_CCE());
  }
  uz(decoder) {
    var tmp0_desc = this.rbc_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.y13(tmp0_desc);
    if (tmp6_input.n14()) {
      tmp4_local0 = tmp6_input.m14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.m14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.o14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.m14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.m14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.i11(tmp2_index);
        }
      }
    tmp6_input.z13(tmp0_desc);
    return BodyOnlyType.tbc(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  gz() {
    return this.rbc_1;
  }
  g1c() {
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
    tmp0_serialDesc.q1b('id', true);
    tmp0_serialDesc.q1b('type', true);
    tmp0_serialDesc.q1b('body', false);
    this.ubc_1 = tmp0_serialDesc;
  }
  vbc(typeSerial0) {
    return $serializer_2.ybc(typeSerial0);
  }
  s1c(typeParamsSerializers) {
    return this.vbc(typeParamsSerializers[0]);
  }
}
class $serializer_2 {
  constructor() {
    return new.target.zbc();
  }
  static zbc() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyWithBody', $this, 3);
    tmp0_serialDesc.q1b('id', true);
    tmp0_serialDesc.q1b('type', true);
    tmp0_serialDesc.q1b('body', false);
    $this.wbc_1 = tmp0_serialDesc;
    return $this;
  }
  abd(encoder, value) {
    var tmp0_desc = this.wbc_1;
    var tmp1_output = encoder.y13(tmp0_desc);
    if (tmp1_output.u15(tmp0_desc, 0) ? true : !(value.hbb_1 == null)) {
      tmp1_output.q15(tmp0_desc, 0, StringSerializer_getInstance(), value.hbb_1);
    }
    if (tmp1_output.u15(tmp0_desc, 1) ? true : !(value.ibb_1 == null)) {
      tmp1_output.q15(tmp0_desc, 1, StringSerializer_getInstance(), value.ibb_1);
    }
    tmp1_output.p15(tmp0_desc, 2, this.xbc_1, value.bat());
    tmp1_output.z13(tmp0_desc);
  }
  tz(encoder, value) {
    return this.abd(encoder, value instanceof BodyWithBody ? value : THROW_CCE());
  }
  uz(decoder) {
    var tmp0_desc = this.wbc_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.y13(tmp0_desc);
    if (tmp7_input.n14()) {
      tmp4_local0 = tmp7_input.m14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.m14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, this.xbc_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.o14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.m14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.m14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, this.xbc_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.i11(tmp2_index);
        }
      }
    tmp7_input.z13(tmp0_desc);
    return BodyWithBody.bbd(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  gz() {
    return this.wbc_1;
  }
  g1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), this.xbc_1];
  }
  h1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.xbc_1];
  }
  static ybc(typeSerial0) {
    var $this = this.zbc();
    $this.xbc_1 = typeSerial0;
    return $this;
  }
}
class BodyOnlyType {
  constructor() {
    this.mbb_1 = null;
    this.nbb_1 = null;
  }
  static tbc(seen0, id, type, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().rbc_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.mbb_1 = null;
    else
      $this.mbb_1 = id;
    if (0 === (seen0 & 2))
      $this.nbb_1 = null;
    else
      $this.nbb_1 = type;
    return $this;
  }
}
class BodyWithBody {
  constructor() {
    Companion_getInstance_2();
    this.hbb_1 = null;
    this.ibb_1 = null;
  }
  bat() {
    var tmp = this.jbb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static bbd(seen0, id, type, body, serializationConstructorMarker) {
    Companion_getInstance_2();
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, Companion_getInstance_2().ubc_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.hbb_1 = null;
    else
      $this.hbb_1 = id;
    if (0 === (seen0 & 2))
      $this.ibb_1 = null;
    else
      $this.ibb_1 = type;
    $this.jbb_1 = body;
    return $this;
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', null, 2);
    tmp0_serialDesc.q1b('type', false);
    tmp0_serialDesc.q1b('body', false);
    this.cbd_1 = tmp0_serialDesc;
  }
  ybb(typeSerial0) {
    return $serializer_3.fbd(typeSerial0);
  }
  s1c(typeParamsSerializers) {
    return this.ybb(typeParamsSerializers[0]);
  }
}
class $serializer_3 {
  constructor() {
    return new.target.gbd();
  }
  static gbd() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', $this, 2);
    tmp0_serialDesc.q1b('type', false);
    tmp0_serialDesc.q1b('body', false);
    $this.dbd_1 = tmp0_serialDesc;
    return $this;
  }
  hbd(encoder, value) {
    var tmp0_desc = this.dbd_1;
    var tmp1_output = encoder.y13(tmp0_desc);
    tmp1_output.n15(tmp0_desc, 0, value.q38());
    tmp1_output.p15(tmp0_desc, 1, this.ebd_1, value.bat());
    tmp1_output.z13(tmp0_desc);
  }
  tz(encoder, value) {
    return this.hbd(encoder, value instanceof StreamResponse ? value : THROW_CCE());
  }
  uz(decoder) {
    var tmp0_desc = this.dbd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.y13(tmp0_desc);
    if (tmp6_input.n14()) {
      tmp4_local0 = tmp6_input.i14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, this.ebd_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.o14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, this.ebd_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.i11(tmp2_index);
        }
      }
    tmp6_input.z13(tmp0_desc);
    return StreamResponse.ibd(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  gz() {
    return this.dbd_1;
  }
  g1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), this.ebd_1];
  }
  h1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.ebd_1];
  }
  static fbd(typeSerial0) {
    var $this = this.gbd();
    $this.ebd_1 = typeSerial0;
    return $this;
  }
}
class StreamResponse {
  constructor() {
    Companion_getInstance_3();
  }
  q38() {
    var tmp = this.kbb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('type');
    }
  }
  bat() {
    var tmp = this.lbb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static ibd(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_3().cbd_1);
    }
    var $this = createThis(this);
    $this.kbb_1 = type;
    $this.lbb_1 = body;
    return $this;
  }
}
//endregion
function StreamClient$slambda(this$0) {
  return constructCallableReference(function *(it, $completion) {
    this$0.gbb(it);
    return Unit_instance;
  }, 1);
}
function StreamClient$lambda(this$0) {
  return (it) => {
    this$0.qba_1 = true;
    var tmp0_safe_receiver = this$0.rba_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.qba_1 = false;
    var tmp0_safe_receiver = this$0.sba_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$randomId$lambda(it) {
  return toString_0(Default_getInstance().jr(0, 16), 16);
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
protoOf($serializer_1).h1c = typeParametersSerializers;
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
