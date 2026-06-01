import {
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  Unit_instancev9v8hjid95df as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  listOfvhqybd2zx248 as listOf,
  getKClass3t8tygqu4lcxf as getKClass,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  isInterface3d6p8outrmvmk as isInterface,
  println2shhhgwwt4c61 as println,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  Default_getInstance2tudkf86ziur0 as Default_getInstance,
  toString1h6jjoch8cjt8 as toString_0,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
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
  Internal_getInstance24198pvf301vd as Internal_getInstance,
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
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
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
class MisskeyStream {
  constructor(misskey) {
    var host = misskey.host;
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
    this.jbb_1 = 'wss://' + host + '/streaming?i=' + i;
    this.kbb_1 = new StreamClient(this.jbb_1);
  }
  lbb() {
    return this.kbb_1.obb_1;
  }
  *m35($completion) {
    yield* this.kbb_1.m35($completion);
    return Unit_instance;
  }
  z6() {
    this.kbb_1.z6();
  }
  *tbb(callback, $completion) {
    var tmp0 = this.kbb_1;
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.ubb();
    var request = new StreamRequest('connect', new Body(id, 'main', tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.vbb(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().yal_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.ny();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().lg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.nz(tmp$ret$6, request);
    println(text);
    yield* tmp0.nbb_1.j56(text, $completion);
    return Unit_instance;
  }
  *wbb(callback, $completion) {
    var tmp0 = this.kbb_1;
    var tmp2 = 'homeTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.ubb();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.vbb(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().yal_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.ny();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().lg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.nz(tmp$ret$6, request);
    println(text);
    yield* tmp0.nbb_1.j56(text, $completion);
    return Unit_instance;
  }
  *xbb(callback, $completion) {
    var tmp0 = this.kbb_1;
    var tmp2 = 'localTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.ubb();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.vbb(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().yal_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.ny();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().lg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.nz(tmp$ret$6, request);
    println(text);
    yield* tmp0.nbb_1.j56(text, $completion);
    return Unit_instance;
  }
  *ybb(callback, $completion) {
    var tmp0 = this.kbb_1;
    var tmp2 = 'globalTimeline';
    var tmp4 = (null == null ? true : typeof null === 'string') ? null : THROW_CCE();
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.connect' call
    var callbacks = listOf(callback);
    // Inline function 'work.socialhub.kmisskey.stream.StreamClient.subscribe' call
    var id = tmp0.ubb();
    var request = new StreamRequest('connect', new Body(id, tmp2, tmp4));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = callbacks.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      tmp0.vbb(id, element);
    }
    // Inline function 'work.socialhub.kmisskey.internal.Internal.toJson' call
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Internal_getInstance().yal_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.ny();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamRequest), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().lg(), arrayOf([]), true))]), false));
    var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var text = this_0.nz(tmp$ret$6, request);
    println(text);
    yield* tmp0.nbb_1.j56(text, $completion);
    return Unit_instance;
  }
}
class StreamClient$slambda {
  constructor(this$0) {
    this.zbb_1 = this$0;
  }
  *b56(it, $completion) {
    this.zbb_1.abc(it);
    return Unit_instance;
  }
  wd(p1, $completion) {
    return this.b56((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StreamClient {
  constructor(uri) {
    this.mbb_1 = uri;
    this.nbb_1 = new WebsocketRequest();
    this.obb_1 = false;
    this.pbb_1 = null;
    this.qbb_1 = null;
    this.rbb_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.sbb_1 = LinkedHashMap.l5();
    this.nbb_1.g56(this.mbb_1);
    var tmp_0 = this.nbb_1;
    tmp_0.s55_1 = StreamClient$slambda_0(this);
    var tmp_1 = this.nbb_1;
    tmp_1.u55_1 = StreamClient$lambda(this);
    var tmp_2 = this.nbb_1;
    tmp_2.v55_1 = StreamClient$lambda_0(this);
  }
  *m35($completion) {
    yield* this.nbb_1.h56($completion);
    return Unit_instance;
  }
  z6() {
    this.nbb_1.z6();
  }
  vbb(id, callback) {
    // Inline function 'kotlin.let' call
    var map = this.sbb_1;
    var tmp0_elvis_lhs = map.p4(id);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList.o2();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    // Inline function 'kotlin.also' call
    var this_0 = tmp;
    this_0.e2(callback);
    // Inline function 'kotlin.collections.set' call
    map.i4(id, this_0);
  }
  abc(message) {
    // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = Internal_getInstance().yal_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.ny();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyOnlyType), arrayOf([]), false))]), false));
    var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var response = this_0.oz(tmp$ret$2, message);
    if (response.x32() === 'channel') {
      if (response.ua8().hbc_1 === 'note') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_3 = Internal_getInstance().yal_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_4 = this_3.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_5 = serializer(this_4, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$6 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
        var noteType = this_3.oz(tmp$ret$6, message);
        var tmp0 = this.sbb_1;
        // Inline function 'kotlin.collections.get' call
        var key = noteType.ua8().bbc_1;
        var events = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).p4(key);
        if (!(events == null) && events.k2() > 0) {
          var _iterator__ex2g4s = events.l1();
          while (_iterator__ex2g4s.m1()) {
            var event = _iterator__ex2g4s.n1();
            if (isInterface(event, TimelineCallback)) {
              var body = noteType.ua8().ua8();
              event.lbc(body);
            }
          }
        }
      }
      if (response.ua8().hbc_1 === 'reply') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_6 = Internal_getInstance().yal_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_7 = this_6.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_8 = serializer(this_7, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$11 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
        var noteType_0 = this_6.oz(tmp$ret$11, message);
        var tmp0_0 = this.sbb_1;
        // Inline function 'kotlin.collections.get' call
        var key_0 = noteType_0.ua8().bbc_1;
        var events_0 = (isInterface(tmp0_0, KtMap) ? tmp0_0 : THROW_CCE()).p4(key_0);
        if (!(events_0 == null) && events_0.k2() > 0) {
          var _iterator__ex2g4s_0 = events_0.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var event_0 = _iterator__ex2g4s_0.n1();
            if (isInterface(event_0, ReplayCallback)) {
              var body_0 = noteType_0.ua8().ua8();
              event_0.mbc(body_0);
            }
          }
        }
      }
      if (response.ua8().hbc_1 === 'mention') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_9 = Internal_getInstance().yal_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_10 = this_9.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_11 = serializer(this_10, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$16 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
        var noteType_1 = this_9.oz(tmp$ret$16, message);
        var tmp0_1 = this.sbb_1;
        // Inline function 'kotlin.collections.get' call
        var key_1 = noteType_1.ua8().bbc_1;
        var events_1 = (isInterface(tmp0_1, KtMap) ? tmp0_1 : THROW_CCE()).p4(key_1);
        if (!(events_1 == null) && events_1.k2() > 0) {
          var _iterator__ex2g4s_1 = events_1.l1();
          while (_iterator__ex2g4s_1.m1()) {
            var event_1 = _iterator__ex2g4s_1.n1();
            if (isInterface(event_1, MentionCallback)) {
              var body_1 = noteType_1.ua8().ua8();
              event_1.nbc(body_1);
            }
          }
        }
      }
      if (response.ua8().hbc_1 === 'renote') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_12 = Internal_getInstance().yal_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_13 = this_12.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_14 = serializer(this_13, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Note), arrayOf([]), false))]), false))]), false));
        var tmp$ret$21 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
        var noteType_2 = this_12.oz(tmp$ret$21, message);
        var tmp0_2 = this.sbb_1;
        // Inline function 'kotlin.collections.get' call
        var key_2 = noteType_2.ua8().bbc_1;
        var events_2 = (isInterface(tmp0_2, KtMap) ? tmp0_2 : THROW_CCE()).p4(key_2);
        if (!(events_2 == null) && events_2.k2() > 0) {
          var _iterator__ex2g4s_2 = events_2.l1();
          while (_iterator__ex2g4s_2.m1()) {
            var event_2 = _iterator__ex2g4s_2.n1();
            if (isInterface(event_2, RenoteCallback)) {
              var body_2 = noteType_2.ua8().ua8();
              event_2.obc(body_2);
            }
          }
        }
      }
      if (response.ua8().hbc_1 === 'followed') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_15 = Internal_getInstance().yal_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_16 = this_15.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_17 = serializer(this_16, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(User), arrayOf([]), false))]), false))]), false));
        var tmp$ret$26 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
        var userType = this_15.oz(tmp$ret$26, message);
        var tmp0_3 = this.sbb_1;
        // Inline function 'kotlin.collections.get' call
        var key_3 = userType.ua8().bbc_1;
        var events_3 = (isInterface(tmp0_3, KtMap) ? tmp0_3 : THROW_CCE()).p4(key_3);
        if (!(events_3 == null) && events_3.k2() > 0) {
          var _iterator__ex2g4s_3 = events_3.l1();
          while (_iterator__ex2g4s_3.m1()) {
            var event_3 = _iterator__ex2g4s_3.n1();
            if (isInterface(event_3, FollowedCallback)) {
              var body_3 = userType.ua8().ua8();
              event_3.pbc(body_3);
            }
          }
        }
      }
      if (response.ua8().hbc_1 === 'notification') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_18 = Internal_getInstance().yal_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_19 = this_18.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_20 = serializer(this_19, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Notification), arrayOf([]), false))]), false))]), false));
        var tmp$ret$31 = isInterface(this_20, KSerializer) ? this_20 : THROW_CCE();
        var notificationType = this_18.oz(tmp$ret$31, message);
        var tmp0_4 = this.sbb_1;
        // Inline function 'kotlin.collections.get' call
        var key_4 = notificationType.ua8().bbc_1;
        var events_4 = (isInterface(tmp0_4, KtMap) ? tmp0_4 : THROW_CCE()).p4(key_4);
        if (!(events_4 == null) && events_4.k2() > 0) {
          var _iterator__ex2g4s_4 = events_4.l1();
          while (_iterator__ex2g4s_4.m1()) {
            var event_4 = _iterator__ex2g4s_4.n1();
            if (isInterface(event_4, NotificationCallback)) {
              var body_4 = notificationType.ua8().ua8();
              event_4.qbc(body_4);
            }
          }
        }
      }
    } else if (response.x32() === 'noteUpdated') {
      if (response.ua8().hbc_1 === 'reacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_21 = Internal_getInstance().yal_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_22 = this_21.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_23 = serializer(this_22, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$36 = isInterface(this_23, KSerializer) ? this_23 : THROW_CCE();
        var reactionType = this_21.oz(tmp$ret$36, message);
        var tmp0_5 = this.sbb_1;
        // Inline function 'kotlin.collections.get' call
        var key_5 = reactionType.ua8().bbc_1;
        var events_5 = (isInterface(tmp0_5, KtMap) ? tmp0_5 : THROW_CCE()).p4(key_5);
        if (!(events_5 == null) && events_5.k2() > 0) {
          var _iterator__ex2g4s_5 = events_5.l1();
          while (_iterator__ex2g4s_5.m1()) {
            var event_5 = _iterator__ex2g4s_5.n1();
            if (isInterface(event_5, NoteCallback)) {
              var body_5 = reactionType.ua8().ua8();
              body_5.yaa_1 = response.ua8().gbc_1;
              event_5.ibc(body_5);
            }
          }
        }
      }
      if (response.ua8().hbc_1 === 'unreacted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_24 = Internal_getInstance().yal_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_25 = this_24.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_26 = serializer(this_25, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Reaction), arrayOf([]), false))]), false))]), false));
        var tmp$ret$41 = isInterface(this_26, KSerializer) ? this_26 : THROW_CCE();
        var reactionType_0 = this_24.oz(tmp$ret$41, message);
        var tmp0_6 = this.sbb_1;
        // Inline function 'kotlin.collections.get' call
        var key_6 = reactionType_0.ua8().bbc_1;
        var events_6 = (isInterface(tmp0_6, KtMap) ? tmp0_6 : THROW_CCE()).p4(key_6);
        if (!(events_6 == null) && events_6.k2() > 0) {
          var _iterator__ex2g4s_6 = events_6.l1();
          while (_iterator__ex2g4s_6.m1()) {
            var event_6 = _iterator__ex2g4s_6.n1();
            if (isInterface(event_6, NoteCallback)) {
              var body_6 = reactionType_0.ua8().ua8();
              body_6.yaa_1 = response.ua8().gbc_1;
              event_6.jbc(body_6);
            }
          }
        }
      }
      if (response.ua8().hbc_1 === 'deleted') {
        // Inline function 'work.socialhub.kmisskey.internal.Internal.fromJson' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_27 = Internal_getInstance().yal_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_28 = this_27.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_29 = serializer(this_28, createKType(getKClass(StreamResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BodyWithBody), arrayOf([createInvariantKTypeProjection(createKType(getKClass(DeletedNote), arrayOf([]), false))]), false))]), false));
        var tmp$ret$46 = isInterface(this_29, KSerializer) ? this_29 : THROW_CCE();
        var deleteNoteType = this_27.oz(tmp$ret$46, message);
        var tmp0_7 = this.sbb_1;
        // Inline function 'kotlin.collections.get' call
        var key_7 = deleteNoteType.ua8().bbc_1;
        var events_7 = (isInterface(tmp0_7, KtMap) ? tmp0_7 : THROW_CCE()).p4(key_7);
        if (!(events_7 == null) && events_7.k2() > 0) {
          var _iterator__ex2g4s_7 = events_7.l1();
          while (_iterator__ex2g4s_7.m1()) {
            var event_7 = _iterator__ex2g4s_7.n1();
            if (isInterface(event_7, NoteCallback)) {
              var body_7 = deleteNoteType.ua8().ua8();
              body_7.j9z_1 = response.ua8().gbc_1;
              event_7.kbc(body_7);
            }
          }
        }
      }
    }
  }
  ubb() {
    var tmp = numberRangeToNumber(1, 16);
    return joinToString(tmp, '', VOID, VOID, VOID, VOID, StreamClient$randomId$lambda);
  }
}
class ErrorCallback {}
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
    tmp0_serialDesc.m1a('id', false);
    tmp0_serialDesc.m1a('channel', false);
    tmp0_serialDesc.m1a('params', true);
    this.sbc_1 = tmp0_serialDesc;
  }
  tbc(typeSerial0) {
    return $serializer.wbc(typeSerial0);
  }
  o1b(typeParamsSerializers) {
    return this.tbc(typeParamsSerializers[0]);
  }
}
class $serializer {
  static xbc() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest.Body', $this, 3);
    tmp0_serialDesc.m1a('id', false);
    tmp0_serialDesc.m1a('channel', false);
    tmp0_serialDesc.m1a('params', true);
    $this.ubc_1 = tmp0_serialDesc;
    return $this;
  }
  ybc(encoder, value) {
    var tmp0_desc = this.ubc_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.zbc_1);
    tmp1_output.j14(tmp0_desc, 1, value.abd_1);
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.bbd_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, this.vbc_1, value.bbd_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ybc(encoder, value instanceof Body ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ubc_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, this.vbc_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, this.vbc_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return Body.cbd(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.ubc_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(this.vbc_1)];
  }
  d1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.vbc_1];
  }
  static wbc(typeSerial0) {
    var $this = this.xbc();
    $this.vbc_1 = typeSerial0;
    return $this;
  }
}
class Body {
  constructor(id, channel, params) {
    Companion_getInstance();
    params = params === VOID ? null : params;
    this.zbc_1 = id;
    this.abd_1 = channel;
    this.bbd_1 = params;
  }
  static cbd(seen0, id, channel, params, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance().sbc_1);
    }
    var $this = createThis(this);
    $this.zbc_1 = id;
    $this.abd_1 = channel;
    if (0 === (seen0 & 4))
      $this.bbd_1 = null;
    else
      $this.bbd_1 = params;
    return $this;
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', null, 2);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('body', false);
    this.dbd_1 = tmp0_serialDesc;
  }
  tbc(typeSerial0) {
    return $serializer_0.gbd(typeSerial0);
  }
  o1b(typeParamsSerializers) {
    return this.tbc(typeParamsSerializers[0]);
  }
}
class $serializer_0 {
  static hbd() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamRequest', $this, 2);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('body', false);
    $this.ebd_1 = tmp0_serialDesc;
    return $this;
  }
  ibd(encoder, value) {
    var tmp0_desc = this.ebd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.jbd_1);
    tmp1_output.l14(tmp0_desc, 1, $serializer.wbc(this.fbd_1), value.kbd_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ibd(encoder, value instanceof StreamRequest ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ebd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, $serializer.wbc(this.fbd_1), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, $serializer.wbc(this.fbd_1), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return StreamRequest.lbd(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ebd_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer.wbc(this.fbd_1)];
  }
  d1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.fbd_1];
  }
  static gbd(typeSerial0) {
    var $this = this.hbd();
    $this.fbd_1 = typeSerial0;
    return $this;
  }
}
class StreamRequest {
  constructor(type, body) {
    Companion_getInstance_0();
    this.jbd_1 = type;
    this.kbd_1 = body;
  }
  static lbd(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_0().dbd_1);
    }
    var $this = createThis(this);
    $this.jbd_1 = type;
    $this.kbd_1 = body;
    return $this;
  }
}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyOnlyType', this, 2);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('type', true);
    this.mbd_1 = tmp0_serialDesc;
  }
  nbd(encoder, value) {
    var tmp0_desc = this.mbd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.gbc_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.gbc_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.hbc_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.hbc_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nbd(encoder, value instanceof BodyOnlyType ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mbd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return BodyOnlyType.obd(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.mbd_1;
  }
  c1b() {
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
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('body', false);
    this.pbd_1 = tmp0_serialDesc;
  }
  qbd(typeSerial0) {
    return $serializer_2.tbd(typeSerial0);
  }
  o1b(typeParamsSerializers) {
    return this.qbd(typeParamsSerializers[0]);
  }
}
class $serializer_2 {
  static ubd() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse.BodyWithBody', $this, 3);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('body', false);
    $this.rbd_1 = tmp0_serialDesc;
    return $this;
  }
  vbd(encoder, value) {
    var tmp0_desc = this.rbd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.bbc_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.bbc_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.cbc_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.cbc_1);
    }
    tmp1_output.l14(tmp0_desc, 2, this.sbd_1, value.ua8());
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vbd(encoder, value instanceof BodyWithBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rbd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.g13(tmp0_desc, 2, this.sbd_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.g13(tmp0_desc, 2, this.sbd_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return BodyWithBody.wbd(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.rbd_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), this.sbd_1];
  }
  d1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.sbd_1];
  }
  static tbd(typeSerial0) {
    var $this = this.ubd();
    $this.sbd_1 = typeSerial0;
    return $this;
  }
}
class BodyOnlyType {
  constructor() {
    this.gbc_1 = null;
    this.hbc_1 = null;
  }
  static obd(seen0, id, type, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().mbd_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.gbc_1 = null;
    else
      $this.gbc_1 = id;
    if (0 === (seen0 & 2))
      $this.hbc_1 = null;
    else
      $this.hbc_1 = type;
    return $this;
  }
}
class BodyWithBody {
  constructor() {
    Companion_getInstance_2();
    this.bbc_1 = null;
    this.cbc_1 = null;
  }
  ua8() {
    var tmp = this.dbc_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static wbd(seen0, id, type, body, serializationConstructorMarker) {
    Companion_getInstance_2();
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, Companion_getInstance_2().pbd_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.bbc_1 = null;
    else
      $this.bbc_1 = id;
    if (0 === (seen0 & 2))
      $this.cbc_1 = null;
    else
      $this.cbc_1 = type;
    $this.dbc_1 = body;
    return $this;
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', null, 2);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('body', false);
    this.xbd_1 = tmp0_serialDesc;
  }
  tbc(typeSerial0) {
    return $serializer_3.abe(typeSerial0);
  }
  o1b(typeParamsSerializers) {
    return this.tbc(typeParamsSerializers[0]);
  }
}
class $serializer_3 {
  static bbe() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmisskey.stream.model.StreamResponse', $this, 2);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('body', false);
    $this.ybd_1 = tmp0_serialDesc;
    return $this;
  }
  cbe(encoder, value) {
    var tmp0_desc = this.ybd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.x32());
    tmp1_output.l14(tmp0_desc, 1, this.zbd_1, value.ua8());
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.cbe(encoder, value instanceof StreamResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ybd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, this.zbd_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, this.zbd_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return StreamResponse.dbe(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ybd_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), this.zbd_1];
  }
  d1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.zbd_1];
  }
  static abe(typeSerial0) {
    var $this = this.bbe();
    $this.zbd_1 = typeSerial0;
    return $this;
  }
}
class StreamResponse {
  constructor() {
    Companion_getInstance_3();
  }
  x32() {
    var tmp = this.ebc_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('type');
    }
  }
  ua8() {
    var tmp = this.fbc_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('body');
    }
  }
  static dbe(seen0, type, body, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_3().xbd_1);
    }
    var $this = createThis(this);
    $this.ebc_1 = type;
    $this.fbc_1 = body;
    return $this;
  }
}
//endregion
function StreamClient$slambda_0(this$0) {
  var i = new StreamClient$slambda(this$0);
  var l = (it, $completion) => i.b56(it, $completion);
  l.$arity = 1;
  return l;
}
function StreamClient$lambda(this$0) {
  return (it) => {
    this$0.obb_1 = true;
    var tmp0_safe_receiver = this$0.pbb_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.obb_1 = false;
    var tmp0_safe_receiver = this$0.qbb_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$randomId$lambda(it) {
  return toString_0(Default_getInstance().fq(0, 16), 16);
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
initMetadataForClass(MisskeyStream, 'MisskeyStream', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForLambda(StreamClient$slambda, VOID, VOID, [1]);
initMetadataForClass(StreamClient, 'StreamClient', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(ErrorCallback, 'ErrorCallback');
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
protoOf($serializer_1).d1b = typeParametersSerializers;
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
  ErrorCallback as ErrorCallback519bx6yvlhsm,
  FollowedCallback as FollowedCallbackxfh6i2mailr1,
  MentionCallback as MentionCallback336uk7avkaz7s,
  NotificationCallback as NotificationCallback269dmfu382ukl,
  RenoteCallback as RenoteCallbackfhq7o9n7653c,
  ReplayCallback as ReplayCallback28v5qhcl80pj5,
  TimelineCallback as TimelineCallback1twaem29l4nd,
  MisskeyStream as MisskeyStream2uo41hjrnn5mm,
};
//endregion

//# sourceMappingURL=kmisskey-stream.mjs.map
