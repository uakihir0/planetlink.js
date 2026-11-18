import {
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  trimEndvvzjdhan75g as trimEnd,
  split2bvyvnrlcifjv as split,
  contains3ue2qo8xhmpf1 as contains,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  listOfvhqybd2zx248 as listOf,
  getKClass3t8tygqu4lcxf as getKClass,
  PrimitiveClasses_getInstance13wbaztpz3e2d as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  isInterface3d6p8outrmvmk as isInterface,
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
  Default_getInstancee1f46otjvolq as Default_getInstance,
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
  Internal_getInstanceim9on2l4bi7d as Internal_getInstance,
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
  StringSerializer_getInstance1p9zda6r6kb23 as StringSerializer_getInstance,
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
    this.xbi_1 = $outer;
    this.wbi_1 = client;
  }
  *ybi(noteId, $completion) {
    yield* this.wbi_1.gbj(noteId, $completion);
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
      switch (parts.m2(0)) {
        case 'ws':
        case 'wss':
          protocol = parts.m2(0);
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
      host = trimEnd(parts.m2(1), charArrayOf([_Char___init__impl__6a9atx(47)]));
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
    this.hbj_1 = protocol + '://' + host + '/streaming?i=' + i;
    this.ibj_1 = new StreamClient(this.hbj_1);
  }
  q93() {
    return this.ibj_1.bbj_1;
  }
  *w39($completion) {
    yield* this.ibj_1.w39($completion);
    return Unit_instance;
  }
  g7() {
    this.ibj_1.g7();
  }
  *jbj(callback, $completion) {
    var tmp0 = this.ibj_1;
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.kbj();
    var request = new StreamRequest('connect', new Body(id, 'main', tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.lbj(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().wbe_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.f10();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().yg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.f11(tmp$ret$6, request);
    yield* tmp0.abj_1.o59(text, $completion);
    return Unit_instance;
  }
  *mbj(callback, $completion) {
    var tmp0 = this.ibj_1;
    var tmp2 = 'homeTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.kbj();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.lbj(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().wbe_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.f10();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().yg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.f11(tmp$ret$6, request);
    yield* tmp0.abj_1.o59(text, $completion);
    return Unit_instance;
  }
  *nbj(callback, $completion) {
    var tmp0 = this.ibj_1;
    var tmp2 = 'localTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.kbj();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.lbj(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().wbe_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.f10();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().yg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.f11(tmp$ret$6, request);
    yield* tmp0.abj_1.o59(text, $completion);
    return Unit_instance;
  }
  *obj(callback, $completion) {
    var tmp0 = this.ibj_1;
    var tmp2 = 'globalTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.kbj();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.lbj(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().wbe_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.f10();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().yg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.f11(tmp$ret$6, request);
    yield* tmp0.abj_1.o59(text, $completion);
    return Unit_instance;
  }
  *pbj(noteId, callback, $completion) {
    var tmp0 = this.ibj_1;
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribeToNote' call
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var callbacks = listOf(callback);
    var request = new StreamRequest('subNote', new Body(noteId, '', tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.lbj(noteId, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().wbe_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.f10();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().yg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.f11(tmp$ret$6, request);
    yield* tmp0.abj_1.o59(text, $completion);
    return Unit_instance;
  }
  qbj() {
    return new Unsubscribe(this, this.ibj_1);
  }
}
class StreamClient {
  constructor(uri) {
    this.zbi_1 = uri;
    this.abj_1 = new WebsocketRequest();
    this.bbj_1 = false;
    this.cbj_1 = null;
    this.dbj_1 = null;
    this.ebj_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.fbj_1 = LinkedHashMap.o5();
    this.abj_1.m59(this.zbi_1);
    var tmp_0 = this.abj_1;
    tmp_0.d59_1 = StreamClient$slambda(this);
    var tmp_1 = this.abj_1;
    tmp_1.f59_1 = StreamClient$lambda(this);
    var tmp_2 = this.abj_1;
    tmp_2.g59_1 = StreamClient$lambda_0(this);
  }
  *w39($completion) {
    yield* this.abj_1.n59($completion);
    return Unit_instance;
  }
  g7() {
    this.abj_1.g7();
  }
  lbj(id, callback) {
    // Inline function 'kotlin.let' call
    var map = this.fbj_1;
    var tmp0_elvis_lhs = map.j4(id);
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
    map.u4(id, this_0);
  }
  *gbj(id, $completion) {
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var type = 'unsubNote';
    // Inline function 'kotlin.collections.listOf' call
    var callbacks = emptyList();
    var request = new StreamRequest(type, new Body(id, '', ''));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      this.lbj(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().wbe_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.f10();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().yg(), arrayOf([]), false))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.f11(tmp$ret$6, request);
    yield* this.abj_1.o59(text, $completion);
    return Unit_instance;
  }
  rbj(message) {
    // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = Internal_getInstance().wbe_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.f10();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyOnlyType), arrayOf([]), false))]), false));
    var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var response = this_0.g11(tmp$ret$2, message);
    if (response.x3a() === 'channel') {
      if (response.pb1().ybj_1 === 'note') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_3 = Internal_getInstance().wbe_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_4 = this_3.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_5 = serializer(this_4, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$6 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
        var noteType = this_3.g11(tmp$ret$6, message);
        var tmp0 = this.fbj_1;
        // Inline function 'kotlin.collections.get' call
        var key = noteType.pb1().sbj_1;
        var events = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).j4(key);
        if (!(events == null) && events.l2() > 0) {
          var _iterator__ex2g4s = events.l1();
          while (_iterator__ex2g4s.m1()) {
            var event = _iterator__ex2g4s.n1();
            if (isInterface(event, TimelineCallback)) {
              var body = noteType.pb1().pb1();
              event.cbk(body);
            }
          }
        }
      }
      if (response.pb1().ybj_1 === 'reply') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_6 = Internal_getInstance().wbe_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_7 = this_6.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_8 = serializer(this_7, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$11 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
        var noteType_0 = this_6.g11(tmp$ret$11, message);
        var tmp0_0 = this.fbj_1;
        // Inline function 'kotlin.collections.get' call
        var key_0 = noteType_0.pb1().sbj_1;
        var events_0 = (isInterface(tmp0_0, KtMap) ? tmp0_0 : THROW_CCE()).j4(key_0);
        if (!(events_0 == null) && events_0.l2() > 0) {
          var _iterator__ex2g4s_0 = events_0.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var event_0 = _iterator__ex2g4s_0.n1();
            if (isInterface(event_0, ReplayCallback)) {
              var body_0 = noteType_0.pb1().pb1();
              event_0.dbk(body_0);
            }
          }
        }
      }
      if (response.pb1().ybj_1 === 'mention') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_9 = Internal_getInstance().wbe_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_10 = this_9.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_11 = serializer(this_10, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$16 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
        var noteType_1 = this_9.g11(tmp$ret$16, message);
        var tmp0_1 = this.fbj_1;
        // Inline function 'kotlin.collections.get' call
        var key_1 = noteType_1.pb1().sbj_1;
        var events_1 = (isInterface(tmp0_1, KtMap) ? tmp0_1 : THROW_CCE()).j4(key_1);
        if (!(events_1 == null) && events_1.l2() > 0) {
          var _iterator__ex2g4s_1 = events_1.l1();
          while (_iterator__ex2g4s_1.m1()) {
            var event_1 = _iterator__ex2g4s_1.n1();
            if (isInterface(event_1, MentionCallback)) {
              var body_1 = noteType_1.pb1().pb1();
              event_1.ebk(body_1);
            }
          }
        }
      }
      if (response.pb1().ybj_1 === 'renote') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_12 = Internal_getInstance().wbe_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_13 = this_12.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_14 = serializer(this_13, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$21 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
        var noteType_2 = this_12.g11(tmp$ret$21, message);
        var tmp0_2 = this.fbj_1;
        // Inline function 'kotlin.collections.get' call
        var key_2 = noteType_2.pb1().sbj_1;
        var events_2 = (isInterface(tmp0_2, KtMap) ? tmp0_2 : THROW_CCE()).j4(key_2);
        if (!(events_2 == null) && events_2.l2() > 0) {
          var _iterator__ex2g4s_2 = events_2.l1();
          while (_iterator__ex2g4s_2.m1()) {
            var event_2 = _iterator__ex2g4s_2.n1();
            if (isInterface(event_2, RenoteCallback)) {
              var body_2 = noteType_2.pb1().pb1();
              event_2.fbk(body_2);
            }
          }
        }
      }
      if (response.pb1().ybj_1 === 'followed') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_15 = Internal_getInstance().wbe_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_16 = this_15.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_17 = serializer(this_16, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(User), arrayOf([]), false))]), false))]), false));
        var tmp$ret$26 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
        var userType = this_15.g11(tmp$ret$26, message);
        var tmp0_3 = this.fbj_1;
        // Inline function 'kotlin.collections.get' call
        var key_3 = userType.pb1().sbj_1;
        var events_3 = (isInterface(tmp0_3, KtMap) ? tmp0_3 : THROW_CCE()).j4(key_3);
        if (!(events_3 == null) && events_3.l2() > 0) {
          var _iterator__ex2g4s_3 = events_3.l1();
          while (_iterator__ex2g4s_3.m1()) {
            var event_3 = _iterator__ex2g4s_3.n1();
            if (isInterface(event_3, FollowedCallback)) {
              var body_3 = userType.pb1().pb1();
              event_3.gbk(body_3);
            }
          }
        }
      }
      if (response.pb1().ybj_1 === 'notification') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_18 = Internal_getInstance().wbe_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_19 = this_18.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_20 = serializer(this_19, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Notification), arrayOf([]), false))]), false))]), false));
        var tmp$ret$31 = isInterface(this_20, KSerializer) ? this_20 : THROW_CCE();
        var notificationType = this_18.g11(tmp$ret$31, message);
        var tmp0_4 = this.fbj_1;
        // Inline function 'kotlin.collections.get' call
        var key_4 = notificationType.pb1().sbj_1;
        var events_4 = (isInterface(tmp0_4, KtMap) ? tmp0_4 : THROW_CCE()).j4(key_4);
        if (!(events_4 == null) && events_4.l2() > 0) {
          var _iterator__ex2g4s_4 = events_4.l1();
          while (_iterator__ex2g4s_4.m1()) {
            var event_4 = _iterator__ex2g4s_4.n1();
            if (isInterface(event_4, NotificationCallback)) {
              var body_4 = notificationType.pb1().pb1();
              event_4.hbk(body_4);
            }
          }
        }
      }
    } else if (response.x3a() === 'noteUpdated') {
      if (response.pb1().ybj_1 === 'reacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_21 = Internal_getInstance().wbe_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_22 = this_21.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_23 = serializer(this_22, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$36 = isInterface(this_23, KSerializer) ? this_23 : THROW_CCE();
        var reactionType = this_21.g11(tmp$ret$36, message);
        var tmp0_5 = this.fbj_1;
        // Inline function 'kotlin.collections.get' call
        var key_5 = reactionType.pb1().sbj_1;
        var events_5 = (isInterface(tmp0_5, KtMap) ? tmp0_5 : THROW_CCE()).j4(key_5);
        if (!(events_5 == null) && events_5.l2() > 0) {
          var _iterator__ex2g4s_5 = events_5.l1();
          while (_iterator__ex2g4s_5.m1()) {
            var event_5 = _iterator__ex2g4s_5.n1();
            if (isInterface(event_5, NoteCallback)) {
              var body_5 = reactionType.pb1().pb1();
              body_5.rb3_1 = response.pb1().xbj_1;
              event_5.zbj(body_5);
            }
          }
        }
      }
      if (response.pb1().ybj_1 === 'unreacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_24 = Internal_getInstance().wbe_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_25 = this_24.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_26 = serializer(this_25, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$41 = isInterface(this_26, KSerializer) ? this_26 : THROW_CCE();
        var reactionType_0 = this_24.g11(tmp$ret$41, message);
        var tmp0_6 = this.fbj_1;
        // Inline function 'kotlin.collections.get' call
        var key_6 = reactionType_0.pb1().sbj_1;
        var events_6 = (isInterface(tmp0_6, KtMap) ? tmp0_6 : THROW_CCE()).j4(key_6);
        if (!(events_6 == null) && events_6.l2() > 0) {
          var _iterator__ex2g4s_6 = events_6.l1();
          while (_iterator__ex2g4s_6.m1()) {
            var event_6 = _iterator__ex2g4s_6.n1();
            if (isInterface(event_6, NoteCallback)) {
              var body_6 = reactionType_0.pb1().pb1();
              body_6.rb3_1 = response.pb1().xbj_1;
              event_6.abk(body_6);
            }
          }
        }
      }
      if (response.pb1().ybj_1 === 'deleted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_27 = Internal_getInstance().wbe_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_28 = this_27.f10();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_29 = serializer(this_28, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(DeletedNote), arrayOf([]), false))]), false))]), false));
        var tmp$ret$46 = isInterface(this_29, KSerializer) ? this_29 : THROW_CCE();
        var deleteNoteType = this_27.g11(tmp$ret$46, message);
        var tmp0_7 = this.fbj_1;
        // Inline function 'kotlin.collections.get' call
        var key_7 = deleteNoteType.pb1().sbj_1;
        var events_7 = (isInterface(tmp0_7, KtMap) ? tmp0_7 : THROW_CCE()).j4(key_7);
        if (!(events_7 == null) && events_7.l2() > 0) {
          var _iterator__ex2g4s_7 = events_7.l1();
          while (_iterator__ex2g4s_7.m1()) {
            var event_7 = _iterator__ex2g4s_7.n1();
            if (isInterface(event_7, NoteCallback)) {
              var body_7 = deleteNoteType.pb1().pb1();
              body_7.jas_1 = response.pb1().xbj_1;
              event_7.bbk(body_7);
            }
          }
        }
      }
    }
  }
  kbj() {
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
    tmp0_serialDesc.g1c('id', false);
    tmp0_serialDesc.g1c('channel', false);
    tmp0_serialDesc.g1c('params', true);
    this.ibk_1 = tmp0_serialDesc;
  }
  jbk(typeSerial0) {
    return $serializer.mbk(typeSerial0);
  }
  i1d(typeParamsSerializers) {
    return this.jbk(typeParamsSerializers[0]);
  }
}
class $serializer {
  constructor() {
    return new.target.nbk();
  }
  static nbk() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest.Body', $this, 3);
    tmp0_serialDesc.g1c('id', false);
    tmp0_serialDesc.g1c('channel', false);
    tmp0_serialDesc.g1c('params', true);
    $this.kbk_1 = tmp0_serialDesc;
    return $this;
  }
  obk(encoder, value) {
    var tmp0_desc = this.kbk_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    tmp1_output.j16(tmp0_desc, 0, value.pbk_1);
    tmp1_output.j16(tmp0_desc, 1, value.qbk_1);
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.rbk_1 == null)) {
      tmp1_output.m16(tmp0_desc, 2, this.lbk_1, value.rbk_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.obk(encoder, value instanceof Body ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.kbk_1;
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
      tmp6_local2 = tmp7_input.i15(tmp0_desc, 2, this.lbk_1, tmp6_local2);
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
            tmp6_local2 = tmp7_input.i15(tmp0_desc, 2, this.lbk_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp7_input.v14(tmp0_desc);
    return Body.sbk(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  uz() {
    return this.kbk_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(this.lbk_1)];
  }
  x1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.lbk_1];
  }
  static mbk(typeSerial0) {
    var $this = this.nbk();
    $this.lbk_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor(id, channel, params) {
    Companion_getInstance();
    params = params === VOID ? null : params;
    this.pbk_1 = id;
    this.qbk_1 = channel;
    this.rbk_1 = params;
  }
  static sbk(seen0, id, channel, params, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance().ibk_1);
    }
    var $this = createThis(this);
    $this.pbk_1 = id;
    $this.qbk_1 = channel;
    if (0 === (seen0 & 4))
      $this.rbk_1 = null;
    else
      $this.rbk_1 = params;
    return $this;
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', null, 2);
    tmp0_serialDesc.g1c('type', false);
    tmp0_serialDesc.g1c('body', false);
    this.tbk_1 = tmp0_serialDesc;
  }
  jbk(typeSerial0) {
    return $serializer_0.wbk(typeSerial0);
  }
  i1d(typeParamsSerializers) {
    return this.jbk(typeParamsSerializers[0]);
  }
}
class $serializer_0 {
  constructor() {
    return new.target.xbk();
  }
  static xbk() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', $this, 2);
    tmp0_serialDesc.g1c('type', false);
    tmp0_serialDesc.g1c('body', false);
    $this.ubk_1 = tmp0_serialDesc;
    return $this;
  }
  ybk(encoder, value) {
    var tmp0_desc = this.ubk_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    tmp1_output.j16(tmp0_desc, 0, value.zbk_1);
    tmp1_output.l16(tmp0_desc, 1, $serializer.mbk(this.vbk_1), value.abl_1);
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.ybk(encoder, value instanceof StreamRequest ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.ubk_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u14(tmp0_desc);
    if (tmp6_input.j15()) {
      tmp4_local0 = tmp6_input.e15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.g15(tmp0_desc, 1, $serializer.mbk(this.vbk_1), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e15(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.g15(tmp0_desc, 1, $serializer.mbk(this.vbk_1), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp6_input.v14(tmp0_desc);
    return StreamRequest.bbl(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  uz() {
    return this.ubk_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer.mbk(this.vbk_1)];
  }
  x1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.vbk_1];
  }
  static wbk(typeSerial0) {
    var $this = this.xbk();
    $this.vbk_1 = typeSerial0;
    return $this;
  }
}
class StreamRequest {
  constructor(type, body) {
    Companion_getInstance_0();
    this.zbk_1 = type;
    this.abl_1 = body;
  }
  static bbl(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_0().tbk_1);
    }
    var $this = createThis(this);
    $this.zbk_1 = type;
    $this.abl_1 = body;
    return $this;
  }
}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyOnlyType', this, 2);
    tmp0_serialDesc.g1c('id', true);
    tmp0_serialDesc.g1c('type', true);
    this.cbl_1 = tmp0_serialDesc;
  }
  dbl(encoder, value) {
    var tmp0_desc = this.cbl_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.xbj_1 == null)) {
      tmp1_output.m16(tmp0_desc, 0, StringSerializer_getInstance(), value.xbj_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.ybj_1 == null)) {
      tmp1_output.m16(tmp0_desc, 1, StringSerializer_getInstance(), value.ybj_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.dbl(encoder, value instanceof BodyOnlyType ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.cbl_1;
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
    return BodyOnlyType.ebl(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  uz() {
    return this.cbl_1;
  }
  w1c() {
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
    tmp0_serialDesc.g1c('id', true);
    tmp0_serialDesc.g1c('type', true);
    tmp0_serialDesc.g1c('body', false);
    this.fbl_1 = tmp0_serialDesc;
  }
  gbl(typeSerial0) {
    return $serializer_2.jbl(typeSerial0);
  }
  i1d(typeParamsSerializers) {
    return this.gbl(typeParamsSerializers[0]);
  }
}
class $serializer_2 {
  constructor() {
    return new.target.kbl();
  }
  static kbl() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyWithBody', $this, 3);
    tmp0_serialDesc.g1c('id', true);
    tmp0_serialDesc.g1c('type', true);
    tmp0_serialDesc.g1c('body', false);
    $this.hbl_1 = tmp0_serialDesc;
    return $this;
  }
  lbl(encoder, value) {
    var tmp0_desc = this.hbl_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.sbj_1 == null)) {
      tmp1_output.m16(tmp0_desc, 0, StringSerializer_getInstance(), value.sbj_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.tbj_1 == null)) {
      tmp1_output.m16(tmp0_desc, 1, StringSerializer_getInstance(), value.tbj_1);
    }
    tmp1_output.l16(tmp0_desc, 2, this.ibl_1, value.pb1());
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.lbl(encoder, value instanceof BodyWithBody ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.hbl_1;
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
      tmp6_local2 = tmp7_input.g15(tmp0_desc, 2, this.ibl_1, tmp6_local2);
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
            tmp6_local2 = tmp7_input.g15(tmp0_desc, 2, this.ibl_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp7_input.v14(tmp0_desc);
    return BodyWithBody.mbl(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  uz() {
    return this.hbl_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), this.ibl_1];
  }
  x1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.ibl_1];
  }
  static jbl(typeSerial0) {
    var $this = this.kbl();
    $this.ibl_1 = typeSerial0;
    return $this;
  }
}
class BodyOnlyType {
  constructor() {
    this.xbj_1 = null;
    this.ybj_1 = null;
  }
  static ebl(seen0, id, type, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().cbl_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.xbj_1 = null;
    else
      $this.xbj_1 = id;
    if (0 === (seen0 & 2))
      $this.ybj_1 = null;
    else
      $this.ybj_1 = type;
    return $this;
  }
}
class BodyWithBody {
  constructor() {
    Companion_getInstance_2();
    this.sbj_1 = null;
    this.tbj_1 = null;
  }
  pb1() {
    var tmp = this.ubj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static mbl(seen0, id, type, body, serializationConstructorMarker) {
    Companion_getInstance_2();
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, Companion_getInstance_2().fbl_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.sbj_1 = null;
    else
      $this.sbj_1 = id;
    if (0 === (seen0 & 2))
      $this.tbj_1 = null;
    else
      $this.tbj_1 = type;
    $this.ubj_1 = body;
    return $this;
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', null, 2);
    tmp0_serialDesc.g1c('type', false);
    tmp0_serialDesc.g1c('body', false);
    this.nbl_1 = tmp0_serialDesc;
  }
  jbk(typeSerial0) {
    return $serializer_3.qbl(typeSerial0);
  }
  i1d(typeParamsSerializers) {
    return this.jbk(typeParamsSerializers[0]);
  }
}
class $serializer_3 {
  constructor() {
    return new.target.rbl();
  }
  static rbl() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', $this, 2);
    tmp0_serialDesc.g1c('type', false);
    tmp0_serialDesc.g1c('body', false);
    $this.obl_1 = tmp0_serialDesc;
    return $this;
  }
  sbl(encoder, value) {
    var tmp0_desc = this.obl_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    tmp1_output.j16(tmp0_desc, 0, value.x3a());
    tmp1_output.l16(tmp0_desc, 1, this.pbl_1, value.pb1());
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.sbl(encoder, value instanceof StreamResponse ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.obl_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u14(tmp0_desc);
    if (tmp6_input.j15()) {
      tmp4_local0 = tmp6_input.e15(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.g15(tmp0_desc, 1, this.pbl_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k15(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e15(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.g15(tmp0_desc, 1, this.pbl_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp6_input.v14(tmp0_desc);
    return StreamResponse.tbl(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  uz() {
    return this.obl_1;
  }
  w1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), this.pbl_1];
  }
  x1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.pbl_1];
  }
  static qbl(typeSerial0) {
    var $this = this.rbl();
    $this.pbl_1 = typeSerial0;
    return $this;
  }
}
class StreamResponse {
  constructor() {
    Companion_getInstance_3();
  }
  x3a() {
    var tmp = this.vbj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('type');
    }
  }
  pb1() {
    var tmp = this.wbj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static tbl(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_3().nbl_1);
    }
    var $this = createThis(this);
    $this.vbj_1 = type;
    $this.wbj_1 = body;
    return $this;
  }
}
//endregion
function StreamClient$slambda(this$0) {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    this$0.rbj(it);
    return Unit_instance;
  }), 1);
}
function StreamClient$lambda(this$0) {
  return (it) => {
    this$0.bbj_1 = true;
    var tmp0_safe_receiver = this$0.cbj_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.bbj_1 = false;
    var tmp0_safe_receiver = this$0.dbj_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$randomId$lambda(it) {
  return toString_0(Default_getInstance().ur(0, 16), 16);
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
protoOf($serializer_1).x1c = typeParametersSerializers;
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
