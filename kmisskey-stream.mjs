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
    this.gb7_1 = $outer;
    this.fb7_1 = client;
  }
  *hb7(noteId, $completion) {
    yield* this.fb7_1.pb7(noteId, $completion);
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
    this.qb7_1 = protocol + '://' + host + '/streaming?i=' + i;
    this.rb7_1 = new StreamClient(this.qb7_1);
  }
  u8r() {
    return this.rb7_1.kb7_1;
  }
  *j37($completion) {
    yield* this.rb7_1.j37($completion);
    return Unit_instance;
  }
  f7() {
    this.rb7_1.f7();
  }
  *sb7(callback, $completion) {
    var tmp0 = this.rb7_1;
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.tb7();
    var request = new StreamRequest('connect', new Body(id, 'main', tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.ub7(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().fb3_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.pz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().vg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.p10(tmp$ret$6, request);
    yield* tmp0.jb7_1.h56(text, $completion);
    return Unit_instance;
  }
  *vb7(callback, $completion) {
    var tmp0 = this.rb7_1;
    var tmp2 = 'homeTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.tb7();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.ub7(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().fb3_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.pz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().vg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.p10(tmp$ret$6, request);
    yield* tmp0.jb7_1.h56(text, $completion);
    return Unit_instance;
  }
  *wb7(callback, $completion) {
    var tmp0 = this.rb7_1;
    var tmp2 = 'localTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.tb7();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.ub7(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().fb3_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.pz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().vg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.p10(tmp$ret$6, request);
    yield* tmp0.jb7_1.h56(text, $completion);
    return Unit_instance;
  }
  *xb7(callback, $completion) {
    var tmp0 = this.rb7_1;
    var tmp2 = 'globalTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.tb7();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.ub7(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().fb3_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.pz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().vg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.p10(tmp$ret$6, request);
    yield* tmp0.jb7_1.h56(text, $completion);
    return Unit_instance;
  }
  *yb7(noteId, callback, $completion) {
    var tmp0 = this.rb7_1;
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribeToNote' call
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var callbacks = listOf(callback);
    var request = new StreamRequest('subNote', new Body(noteId, '', tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.ub7(noteId, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().fb3_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.pz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().vg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.p10(tmp$ret$6, request);
    yield* tmp0.jb7_1.h56(text, $completion);
    return Unit_instance;
  }
  zb7() {
    return new Unsubscribe(this, this.rb7_1);
  }
}
class StreamClient {
  constructor(uri) {
    this.ib7_1 = uri;
    this.jb7_1 = new WebsocketRequest();
    this.kb7_1 = false;
    this.lb7_1 = null;
    this.mb7_1 = null;
    this.nb7_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ob7_1 = LinkedHashMap.r5();
    this.jb7_1.f56(this.ib7_1);
    var tmp_0 = this.jb7_1;
    tmp_0.w55_1 = StreamClient$slambda(this);
    var tmp_1 = this.jb7_1;
    tmp_1.y55_1 = StreamClient$lambda(this);
    var tmp_2 = this.jb7_1;
    tmp_2.z55_1 = StreamClient$lambda_0(this);
  }
  *j37($completion) {
    yield* this.jb7_1.g56($completion);
    return Unit_instance;
  }
  f7() {
    this.jb7_1.f7();
  }
  ub7(id, callback) {
    // Inline function 'kotlin.let' call
    var map = this.ob7_1;
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
    this_0.e2(callback);
    // Inline function 'kotlin.collections.set' call
    map.o4(id, this_0);
  }
  *pb7(id, $completion) {
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var type = 'unsubNote';
    // Inline function 'kotlin.collections.listOf' call
    var callbacks = emptyList();
    var request = new StreamRequest(type, new Body(id, '', ''));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      this.ub7(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().fb3_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.pz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().vg(), arrayOf([]), false))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.p10(tmp$ret$6, request);
    yield* this.jb7_1.h56(text, $completion);
    return Unit_instance;
  }
  ab8(message) {
    // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = Internal_getInstance().fb3_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.pz();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyOnlyType), arrayOf([]), false))]), false));
    var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var response = this_0.q10(tmp$ret$2, message);
    if (response.k38() === 'channel') {
      if (response.vap().hb8_1 === 'note') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_3 = Internal_getInstance().fb3_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_4 = this_3.pz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_5 = serializer(this_4, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$6 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
        var noteType = this_3.q10(tmp$ret$6, message);
        var tmp0 = this.ob7_1;
        // Inline function 'kotlin.collections.get' call
        var key = noteType.vap().bb8_1;
        var events = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).v4(key);
        if (!(events == null) && events.l2() > 0) {
          var _iterator__ex2g4s = events.l1();
          while (_iterator__ex2g4s.m1()) {
            var event = _iterator__ex2g4s.n1();
            if (isInterface(event, TimelineCallback)) {
              var body = noteType.vap().vap();
              event.lb8(body);
            }
          }
        }
      }
      if (response.vap().hb8_1 === 'reply') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_6 = Internal_getInstance().fb3_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_7 = this_6.pz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_8 = serializer(this_7, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$11 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
        var noteType_0 = this_6.q10(tmp$ret$11, message);
        var tmp0_0 = this.ob7_1;
        // Inline function 'kotlin.collections.get' call
        var key_0 = noteType_0.vap().bb8_1;
        var events_0 = (isInterface(tmp0_0, KtMap) ? tmp0_0 : THROW_CCE()).v4(key_0);
        if (!(events_0 == null) && events_0.l2() > 0) {
          var _iterator__ex2g4s_0 = events_0.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var event_0 = _iterator__ex2g4s_0.n1();
            if (isInterface(event_0, ReplayCallback)) {
              var body_0 = noteType_0.vap().vap();
              event_0.mb8(body_0);
            }
          }
        }
      }
      if (response.vap().hb8_1 === 'mention') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_9 = Internal_getInstance().fb3_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_10 = this_9.pz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_11 = serializer(this_10, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$16 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
        var noteType_1 = this_9.q10(tmp$ret$16, message);
        var tmp0_1 = this.ob7_1;
        // Inline function 'kotlin.collections.get' call
        var key_1 = noteType_1.vap().bb8_1;
        var events_1 = (isInterface(tmp0_1, KtMap) ? tmp0_1 : THROW_CCE()).v4(key_1);
        if (!(events_1 == null) && events_1.l2() > 0) {
          var _iterator__ex2g4s_1 = events_1.l1();
          while (_iterator__ex2g4s_1.m1()) {
            var event_1 = _iterator__ex2g4s_1.n1();
            if (isInterface(event_1, MentionCallback)) {
              var body_1 = noteType_1.vap().vap();
              event_1.nb8(body_1);
            }
          }
        }
      }
      if (response.vap().hb8_1 === 'renote') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_12 = Internal_getInstance().fb3_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_13 = this_12.pz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_14 = serializer(this_13, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$21 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
        var noteType_2 = this_12.q10(tmp$ret$21, message);
        var tmp0_2 = this.ob7_1;
        // Inline function 'kotlin.collections.get' call
        var key_2 = noteType_2.vap().bb8_1;
        var events_2 = (isInterface(tmp0_2, KtMap) ? tmp0_2 : THROW_CCE()).v4(key_2);
        if (!(events_2 == null) && events_2.l2() > 0) {
          var _iterator__ex2g4s_2 = events_2.l1();
          while (_iterator__ex2g4s_2.m1()) {
            var event_2 = _iterator__ex2g4s_2.n1();
            if (isInterface(event_2, RenoteCallback)) {
              var body_2 = noteType_2.vap().vap();
              event_2.ob8(body_2);
            }
          }
        }
      }
      if (response.vap().hb8_1 === 'followed') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_15 = Internal_getInstance().fb3_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_16 = this_15.pz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_17 = serializer(this_16, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(User), arrayOf([]), false))]), false))]), false));
        var tmp$ret$26 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
        var userType = this_15.q10(tmp$ret$26, message);
        var tmp0_3 = this.ob7_1;
        // Inline function 'kotlin.collections.get' call
        var key_3 = userType.vap().bb8_1;
        var events_3 = (isInterface(tmp0_3, KtMap) ? tmp0_3 : THROW_CCE()).v4(key_3);
        if (!(events_3 == null) && events_3.l2() > 0) {
          var _iterator__ex2g4s_3 = events_3.l1();
          while (_iterator__ex2g4s_3.m1()) {
            var event_3 = _iterator__ex2g4s_3.n1();
            if (isInterface(event_3, FollowedCallback)) {
              var body_3 = userType.vap().vap();
              event_3.pb8(body_3);
            }
          }
        }
      }
      if (response.vap().hb8_1 === 'notification') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_18 = Internal_getInstance().fb3_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_19 = this_18.pz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_20 = serializer(this_19, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Notification), arrayOf([]), false))]), false))]), false));
        var tmp$ret$31 = isInterface(this_20, KSerializer) ? this_20 : THROW_CCE();
        var notificationType = this_18.q10(tmp$ret$31, message);
        var tmp0_4 = this.ob7_1;
        // Inline function 'kotlin.collections.get' call
        var key_4 = notificationType.vap().bb8_1;
        var events_4 = (isInterface(tmp0_4, KtMap) ? tmp0_4 : THROW_CCE()).v4(key_4);
        if (!(events_4 == null) && events_4.l2() > 0) {
          var _iterator__ex2g4s_4 = events_4.l1();
          while (_iterator__ex2g4s_4.m1()) {
            var event_4 = _iterator__ex2g4s_4.n1();
            if (isInterface(event_4, NotificationCallback)) {
              var body_4 = notificationType.vap().vap();
              event_4.qb8(body_4);
            }
          }
        }
      }
    } else if (response.k38() === 'noteUpdated') {
      if (response.vap().hb8_1 === 'reacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_21 = Internal_getInstance().fb3_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_22 = this_21.pz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_23 = serializer(this_22, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$36 = isInterface(this_23, KSerializer) ? this_23 : THROW_CCE();
        var reactionType = this_21.q10(tmp$ret$36, message);
        var tmp0_5 = this.ob7_1;
        // Inline function 'kotlin.collections.get' call
        var key_5 = reactionType.vap().bb8_1;
        var events_5 = (isInterface(tmp0_5, KtMap) ? tmp0_5 : THROW_CCE()).v4(key_5);
        if (!(events_5 == null) && events_5.l2() > 0) {
          var _iterator__ex2g4s_5 = events_5.l1();
          while (_iterator__ex2g4s_5.m1()) {
            var event_5 = _iterator__ex2g4s_5.n1();
            if (isInterface(event_5, NoteCallback)) {
              var body_5 = reactionType.vap().vap();
              body_5.zar_1 = response.vap().gb8_1;
              event_5.ib8(body_5);
            }
          }
        }
      }
      if (response.vap().hb8_1 === 'unreacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_24 = Internal_getInstance().fb3_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_25 = this_24.pz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_26 = serializer(this_25, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$41 = isInterface(this_26, KSerializer) ? this_26 : THROW_CCE();
        var reactionType_0 = this_24.q10(tmp$ret$41, message);
        var tmp0_6 = this.ob7_1;
        // Inline function 'kotlin.collections.get' call
        var key_6 = reactionType_0.vap().bb8_1;
        var events_6 = (isInterface(tmp0_6, KtMap) ? tmp0_6 : THROW_CCE()).v4(key_6);
        if (!(events_6 == null) && events_6.l2() > 0) {
          var _iterator__ex2g4s_6 = events_6.l1();
          while (_iterator__ex2g4s_6.m1()) {
            var event_6 = _iterator__ex2g4s_6.n1();
            if (isInterface(event_6, NoteCallback)) {
              var body_6 = reactionType_0.vap().vap();
              body_6.zar_1 = response.vap().gb8_1;
              event_6.jb8(body_6);
            }
          }
        }
      }
      if (response.vap().hb8_1 === 'deleted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_27 = Internal_getInstance().fb3_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_28 = this_27.pz();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_29 = serializer(this_28, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(DeletedNote), arrayOf([]), false))]), false))]), false));
        var tmp$ret$46 = isInterface(this_29, KSerializer) ? this_29 : THROW_CCE();
        var deleteNoteType = this_27.q10(tmp$ret$46, message);
        var tmp0_7 = this.ob7_1;
        // Inline function 'kotlin.collections.get' call
        var key_7 = deleteNoteType.vap().bb8_1;
        var events_7 = (isInterface(tmp0_7, KtMap) ? tmp0_7 : THROW_CCE()).v4(key_7);
        if (!(events_7 == null) && events_7.l2() > 0) {
          var _iterator__ex2g4s_7 = events_7.l1();
          while (_iterator__ex2g4s_7.m1()) {
            var event_7 = _iterator__ex2g4s_7.n1();
            if (isInterface(event_7, NoteCallback)) {
              var body_7 = deleteNoteType.vap().vap();
              body_7.nag_1 = response.vap().gb8_1;
              event_7.kb8(body_7);
            }
          }
        }
      }
    }
  }
  tb7() {
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
    tmp0_serialDesc.o1b('id', false);
    tmp0_serialDesc.o1b('channel', false);
    tmp0_serialDesc.o1b('params', true);
    this.rb8_1 = tmp0_serialDesc;
  }
  sb8(typeSerial0) {
    return $serializer.vb8(typeSerial0);
  }
  q1c(typeParamsSerializers) {
    return this.sb8(typeParamsSerializers[0]);
  }
}
class $serializer {
  constructor() {
    return new.target.wb8();
  }
  static wb8() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest.Body', $this, 3);
    tmp0_serialDesc.o1b('id', false);
    tmp0_serialDesc.o1b('channel', false);
    tmp0_serialDesc.o1b('params', true);
    $this.tb8_1 = tmp0_serialDesc;
    return $this;
  }
  xb8(encoder, value) {
    var tmp0_desc = this.tb8_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    tmp1_output.l15(tmp0_desc, 0, value.yb8_1);
    tmp1_output.l15(tmp0_desc, 1, value.zb8_1);
    if (tmp1_output.s15(tmp0_desc, 2) ? true : !(value.ab9_1 == null)) {
      tmp1_output.o15(tmp0_desc, 2, this.ub8_1, value.ab9_1);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.xb8(encoder, value instanceof Body ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.tb8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.w13(tmp0_desc);
    if (tmp7_input.l14()) {
      tmp4_local0 = tmp7_input.g14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.g14(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, this.ub8_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.g14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.g14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.k14(tmp0_desc, 2, this.ub8_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp7_input.x13(tmp0_desc);
    return Body.bb9(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  ez() {
    return this.tb8_1;
  }
  e1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(this.ub8_1)];
  }
  f1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.ub8_1];
  }
  static vb8(typeSerial0) {
    var $this = this.wb8();
    $this.ub8_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor(id, channel, params) {
    Companion_getInstance();
    params = params === VOID ? null : params;
    this.yb8_1 = id;
    this.zb8_1 = channel;
    this.ab9_1 = params;
  }
  static bb9(seen0, id, channel, params, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance().rb8_1);
    }
    var $this = createThis(this);
    $this.yb8_1 = id;
    $this.zb8_1 = channel;
    if (0 === (seen0 & 4))
      $this.ab9_1 = null;
    else
      $this.ab9_1 = params;
    return $this;
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', null, 2);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('body', false);
    this.cb9_1 = tmp0_serialDesc;
  }
  sb8(typeSerial0) {
    return $serializer_0.fb9(typeSerial0);
  }
  q1c(typeParamsSerializers) {
    return this.sb8(typeParamsSerializers[0]);
  }
}
class $serializer_0 {
  constructor() {
    return new.target.gb9();
  }
  static gb9() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', $this, 2);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('body', false);
    $this.db9_1 = tmp0_serialDesc;
    return $this;
  }
  hb9(encoder, value) {
    var tmp0_desc = this.db9_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    tmp1_output.l15(tmp0_desc, 0, value.ib9_1);
    tmp1_output.n15(tmp0_desc, 1, $serializer.vb8(this.eb9_1), value.jb9_1);
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.hb9(encoder, value instanceof StreamRequest ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.db9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.g14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i14(tmp0_desc, 1, $serializer.vb8(this.eb9_1), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.g14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i14(tmp0_desc, 1, $serializer.vb8(this.eb9_1), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return StreamRequest.kb9(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.db9_1;
  }
  e1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer.vb8(this.eb9_1)];
  }
  f1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.eb9_1];
  }
  static fb9(typeSerial0) {
    var $this = this.gb9();
    $this.eb9_1 = typeSerial0;
    return $this;
  }
}
class StreamRequest {
  constructor(type, body) {
    Companion_getInstance_0();
    this.ib9_1 = type;
    this.jb9_1 = body;
  }
  static kb9(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_0().cb9_1);
    }
    var $this = createThis(this);
    $this.ib9_1 = type;
    $this.jb9_1 = body;
    return $this;
  }
}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyOnlyType', this, 2);
    tmp0_serialDesc.o1b('id', true);
    tmp0_serialDesc.o1b('type', true);
    this.lb9_1 = tmp0_serialDesc;
  }
  mb9(encoder, value) {
    var tmp0_desc = this.lb9_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.gb8_1 == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.gb8_1);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.hb8_1 == null)) {
      tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.hb8_1);
    }
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.mb9(encoder, value instanceof BodyOnlyType ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.lb9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return BodyOnlyType.nb9(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.lb9_1;
  }
  e1c() {
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
    tmp0_serialDesc.o1b('id', true);
    tmp0_serialDesc.o1b('type', true);
    tmp0_serialDesc.o1b('body', false);
    this.ob9_1 = tmp0_serialDesc;
  }
  pb9(typeSerial0) {
    return $serializer_2.sb9(typeSerial0);
  }
  q1c(typeParamsSerializers) {
    return this.pb9(typeParamsSerializers[0]);
  }
}
class $serializer_2 {
  constructor() {
    return new.target.tb9();
  }
  static tb9() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyWithBody', $this, 3);
    tmp0_serialDesc.o1b('id', true);
    tmp0_serialDesc.o1b('type', true);
    tmp0_serialDesc.o1b('body', false);
    $this.qb9_1 = tmp0_serialDesc;
    return $this;
  }
  ub9(encoder, value) {
    var tmp0_desc = this.qb9_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    if (tmp1_output.s15(tmp0_desc, 0) ? true : !(value.bb8_1 == null)) {
      tmp1_output.o15(tmp0_desc, 0, StringSerializer_getInstance(), value.bb8_1);
    }
    if (tmp1_output.s15(tmp0_desc, 1) ? true : !(value.cb8_1 == null)) {
      tmp1_output.o15(tmp0_desc, 1, StringSerializer_getInstance(), value.cb8_1);
    }
    tmp1_output.n15(tmp0_desc, 2, this.rb9_1, value.vap());
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.ub9(encoder, value instanceof BodyWithBody ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.qb9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.w13(tmp0_desc);
    if (tmp7_input.l14()) {
      tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i14(tmp0_desc, 2, this.rb9_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.k14(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.k14(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i14(tmp0_desc, 2, this.rb9_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp7_input.x13(tmp0_desc);
    return BodyWithBody.vb9(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  ez() {
    return this.qb9_1;
  }
  e1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), this.rb9_1];
  }
  f1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.rb9_1];
  }
  static sb9(typeSerial0) {
    var $this = this.tb9();
    $this.rb9_1 = typeSerial0;
    return $this;
  }
}
class BodyOnlyType {
  constructor() {
    this.gb8_1 = null;
    this.hb8_1 = null;
  }
  static nb9(seen0, id, type, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().lb9_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.gb8_1 = null;
    else
      $this.gb8_1 = id;
    if (0 === (seen0 & 2))
      $this.hb8_1 = null;
    else
      $this.hb8_1 = type;
    return $this;
  }
}
class BodyWithBody {
  constructor() {
    Companion_getInstance_2();
    this.bb8_1 = null;
    this.cb8_1 = null;
  }
  vap() {
    var tmp = this.db8_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static vb9(seen0, id, type, body, serializationConstructorMarker) {
    Companion_getInstance_2();
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, Companion_getInstance_2().ob9_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.bb8_1 = null;
    else
      $this.bb8_1 = id;
    if (0 === (seen0 & 2))
      $this.cb8_1 = null;
    else
      $this.cb8_1 = type;
    $this.db8_1 = body;
    return $this;
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', null, 2);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('body', false);
    this.wb9_1 = tmp0_serialDesc;
  }
  sb8(typeSerial0) {
    return $serializer_3.zb9(typeSerial0);
  }
  q1c(typeParamsSerializers) {
    return this.sb8(typeParamsSerializers[0]);
  }
}
class $serializer_3 {
  constructor() {
    return new.target.aba();
  }
  static aba() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', $this, 2);
    tmp0_serialDesc.o1b('type', false);
    tmp0_serialDesc.o1b('body', false);
    $this.xb9_1 = tmp0_serialDesc;
    return $this;
  }
  bba(encoder, value) {
    var tmp0_desc = this.xb9_1;
    var tmp1_output = encoder.w13(tmp0_desc);
    tmp1_output.l15(tmp0_desc, 0, value.k38());
    tmp1_output.n15(tmp0_desc, 1, this.yb9_1, value.vap());
    tmp1_output.x13(tmp0_desc);
  }
  rz(encoder, value) {
    return this.bba(encoder, value instanceof StreamResponse ? value : THROW_CCE());
  }
  sz(decoder) {
    var tmp0_desc = this.xb9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.w13(tmp0_desc);
    if (tmp6_input.l14()) {
      tmp4_local0 = tmp6_input.g14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i14(tmp0_desc, 1, this.yb9_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.m14(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.g14(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i14(tmp0_desc, 1, this.yb9_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.g11(tmp2_index);
        }
      }
    tmp6_input.x13(tmp0_desc);
    return StreamResponse.cba(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  ez() {
    return this.xb9_1;
  }
  e1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), this.yb9_1];
  }
  f1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.yb9_1];
  }
  static zb9(typeSerial0) {
    var $this = this.aba();
    $this.yb9_1 = typeSerial0;
    return $this;
  }
}
class StreamResponse {
  constructor() {
    Companion_getInstance_3();
  }
  k38() {
    var tmp = this.eb8_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('type');
    }
  }
  vap() {
    var tmp = this.fb8_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static cba(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_3().wb9_1);
    }
    var $this = createThis(this);
    $this.eb8_1 = type;
    $this.fb8_1 = body;
    return $this;
  }
}
//endregion
function StreamClient$slambda(this$0) {
  return constructCallableReference(function *(it, $completion) {
    this$0.ab8(it);
    return Unit_instance;
  }, 1);
}
function StreamClient$lambda(this$0) {
  return (it) => {
    this$0.kb7_1 = true;
    var tmp0_safe_receiver = this$0.lb7_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.kb7_1 = false;
    var tmp0_safe_receiver = this$0.mb7_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$randomId$lambda(it) {
  return toString_0(Default_getInstance().hr(0, 16), 16);
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
protoOf($serializer_1).f1c = typeParametersSerializers;
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
