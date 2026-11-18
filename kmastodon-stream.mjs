import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  to2cs3ny02qtbcb as to,
  mapOf1xd03cq9cnmy8 as mapOf,
  PrimitiveClasses_getInstance13wbaztpz3e2d as PrimitiveClasses_getInstance,
  LazyThreadSafetyMode_PUBLICATION_getInstance23f213579at67 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  protoOf180f3jzyo7rfj as protoOf,
  createThis2j2avj17cvnv2 as createThis,
  Enum3alwj03lh1n41 as Enum,
  ArrayList3it5z8td81qkl as ArrayList,
  joinToString1cxrrlmo0chqs as joinToString,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  InternalUtility_getInstanceomhd3c3w9r6c as InternalUtility_getInstance,
  MastodonFactory_instance2b0vm1j3dgzb9 as MastodonFactory_instance,
  instanceV1$virtualSuspendBridge25iex3pcwlg13 as instanceV1$virtualSuspendBridge,
  Status35n2t50a43r3h as Status,
  Notificationa10f1ufmxcmw as Notification,
} from './kmastodon-core.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  StringSerializer_getInstance1p9zda6r6kb23 as StringSerializer_getInstance,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { WebsocketRequest38pjwt1m63ieg as WebsocketRequest } from './khttpclient.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class MastodonEx {
  ycv(_this__u8e3s4) {
    return new StreamResourceImpl(_this__u8e3s4.uri(), _this__u8e3s4.accessToken());
  }
}
class StreamClient {
  constructor(uri) {
    this.zcv_1 = uri;
    this.acw_1 = new WebsocketRequest();
    this.bcw_1 = false;
    this.ccw_1 = null;
    this.dcw_1 = null;
    this.ecw_1 = null;
    this.fcw_1 = null;
    this.acw_1.m59(this.zcv_1);
    var tmp = this.acw_1;
    tmp.d59_1 = StreamClient$slambda(this);
    var tmp_0 = this.acw_1;
    tmp_0.f59_1 = StreamClient$lambda(this);
    var tmp_1 = this.acw_1;
    tmp_1.g59_1 = StreamClient$lambda_0(this);
  }
  *w39($completion) {
    yield* this.acw_1.n59($completion);
    return Unit_instance;
  }
  g7() {
    this.acw_1.g7();
  }
}
class StreamResourceImpl {
  constructor(uri, accessToken) {
    this.gcw_1 = uri;
    this.hcw_1 = accessToken;
  }
  icw() {
    return new UserStreamImpl(this.gcw_1, mapOf([to('access_token', accessToken(this)), to('stream', Companion_instance_2.jcw())]));
  }
  kcw(type) {
    return new PublicStreamImpl(this.gcw_1, mapOf([to('access_token', accessToken(this)), to('stream', Companion_instance_1.lcw(type))]));
  }
  mcw() {
    return new DirectStreamImpl(this.gcw_1, mapOf([to('access_token', accessToken(this)), to('stream', Companion_instance_0.jcw())]));
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ncw_1 = [null, null, lazy(tmp_0, StreamResponse$Companion$$childSerializers$_anonymous__eplt4n)];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.stream.StreamResponse', this, 3);
    tmp0_serialDesc.g1c('event', true);
    tmp0_serialDesc.g1c('payload', true);
    tmp0_serialDesc.g1c('stream', true);
    this.ocw_1 = tmp0_serialDesc;
  }
  pcw(encoder, value) {
    var tmp0_desc = this.ocw_1;
    var tmp1_output = encoder.u14(tmp0_desc);
    var tmp2_cached = Companion_getInstance().ncw_1;
    if (tmp1_output.q16(tmp0_desc, 0) ? true : !(value.qcw_1 == null)) {
      tmp1_output.m16(tmp0_desc, 0, StringSerializer_getInstance(), value.qcw_1);
    }
    if (tmp1_output.q16(tmp0_desc, 1) ? true : !(value.rcw_1 == null)) {
      tmp1_output.m16(tmp0_desc, 1, StringSerializer_getInstance(), value.rcw_1);
    }
    if (tmp1_output.q16(tmp0_desc, 2) ? true : !(value.scw_1 == null)) {
      tmp1_output.m16(tmp0_desc, 2, tmp2_cached[2].d3(), value.scw_1);
    }
    tmp1_output.v14(tmp0_desc);
  }
  h10(encoder, value) {
    return this.pcw(encoder, value instanceof StreamResponse ? value : THROW_CCE());
  }
  i10(decoder) {
    var tmp0_desc = this.ocw_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u14(tmp0_desc);
    var tmp8_cached = Companion_getInstance().ncw_1;
    if (tmp7_input.j15()) {
      tmp4_local0 = tmp7_input.i15(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i15(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i15(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
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
            tmp6_local2 = tmp7_input.i15(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.w11(tmp2_index);
        }
      }
    tmp7_input.v14(tmp0_desc);
    return StreamResponse.tcw(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  uz() {
    return this.ocw_1;
  }
  w1c() {
    var tmp0_cached = Companion_getInstance().ncw_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].d3())];
  }
}
class StreamResponse {
  constructor() {
    Companion_getInstance();
    this.qcw_1 = null;
    this.rcw_1 = null;
    this.scw_1 = null;
  }
  static tcw(seen0, event, payload, stream, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().ocw_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.qcw_1 = null;
    else
      $this.qcw_1 = event;
    if (0 === (seen0 & 2))
      $this.rcw_1 = null;
    else
      $this.rcw_1 = payload;
    if (0 === (seen0 & 4))
      $this.scw_1 = null;
    else
      $this.scw_1 = stream;
    return $this;
  }
}
class PublicType extends Enum {}
class BaseStreamImpl {
  constructor(uri, query) {
    this.ucw_1 = uri;
    this.vcw_1 = query;
    this.wcw_1 = null;
  }
  *xcw($completion) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.vcw_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.i2(this_0.l2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$3 = item.c3() + '=' + item.d3();
      destination.j2(tmp$ret$3);
    }
    var queryString = joinToString(destination, '&');
    var streamUrl = (yield* instanceV1$virtualSuspendBridge(MastodonFactory_instance.instance(this.ucw_1).instances(), $completion)).data.urls.streamingApi + '/api/v1/streaming?' + queryString;
    // Inline function 'kotlin.also' call
    var this_1 = new StreamClient(streamUrl);
    this.wcw_1 = this_1;
    return this_1;
  }
}
class Companion_0 {
  jcw() {
    return 'direct';
  }
}
class DirectStreamImpl extends BaseStreamImpl {
  constructor(uri, query) {
    super(uri, query);
    this.ccx_1 = null;
    this.dcx_1 = null;
  }
  ecx(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.ccx_1 = listener;
    this.dcx_1 = lifeCycle;
    return this;
  }
  *w39($completion) {
    var tmp0 = this.ccx_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'listener is required';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var listener = tmp$ret$0;
    var tmp0_0 = this.dcx_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_0 == null) {
        var message_0 = 'lifeCycle is required';
        throw IllegalStateException.o(toString(message_0));
      } else {
        tmp$ret$2 = tmp0_0;
        break $l$block_0;
      }
    }
    var lifeCycle = tmp$ret$2;
    var client = yield* this.xcw($completion);
    var tmp = client;
    tmp.ccw_1 = DirectStreamImpl$open$lambda(listener);
    var tmp_0 = client;
    tmp_0.dcw_1 = LifeCycleListener$onConnect$ref(lifeCycle);
    var tmp_1 = client;
    tmp_1.ecw_1 = LifeCycleListener$onDisconnect$ref(lifeCycle);
    var tmp_2 = client;
    tmp_2.fcw_1 = LifeCycleListener$onError$ref(lifeCycle);
    yield* client.w39($completion);
    return Unit_instance;
  }
  g7() {
    var tmp0_safe_receiver = this.wcw_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g7();
    }
  }
  fcx() {
    var tmp0_safe_receiver = this.wcw_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bcw_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
class Companion_1 {
  lcw(type) {
    var tmp;
    switch (type.s1_1) {
      case 0:
        tmp = 'public:local';
        break;
      case 1:
        tmp = 'public:remote';
        break;
      case 2:
        tmp = 'public';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
}
class PublicStreamImpl extends BaseStreamImpl {
  constructor(uri, query) {
    super(uri, query);
    this.jcx_1 = null;
    this.kcx_1 = null;
  }
  ecx(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.jcx_1 = listener;
    this.kcx_1 = lifeCycle;
    return this;
  }
  *w39($completion) {
    var tmp0 = this.jcx_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'listener is required';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var listener = tmp$ret$0;
    var tmp0_0 = this.kcx_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_0 == null) {
        var message_0 = 'lifeCycle is required';
        throw IllegalStateException.o(toString(message_0));
      } else {
        tmp$ret$2 = tmp0_0;
        break $l$block_0;
      }
    }
    var lifeCycle = tmp$ret$2;
    var client = yield* this.xcw($completion);
    var tmp = client;
    tmp.ccw_1 = PublicStreamImpl$open$lambda(listener);
    var tmp_0 = client;
    tmp_0.dcw_1 = LifeCycleListener$onConnect$ref(lifeCycle);
    var tmp_1 = client;
    tmp_1.ecw_1 = LifeCycleListener$onDisconnect$ref(lifeCycle);
    var tmp_2 = client;
    tmp_2.fcw_1 = LifeCycleListener$onError$ref(lifeCycle);
    yield* client.w39($completion);
    return Unit_instance;
  }
  g7() {
    var tmp0_safe_receiver = this.wcw_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g7();
    }
  }
  fcx() {
    var tmp0_safe_receiver = this.wcw_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bcw_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
class Companion_2 {
  jcw() {
    return 'user';
  }
}
class UserStreamImpl extends BaseStreamImpl {
  constructor(uri, query) {
    super(uri, query);
    this.pcx_1 = null;
    this.qcx_1 = null;
  }
  rcx(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.pcx_1 = listener;
    this.qcx_1 = lifeCycle;
    return this;
  }
  *w39($completion) {
    var tmp0 = this.pcx_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'listener is required';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var listener = tmp$ret$0;
    var tmp0_0 = this.qcx_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_0 == null) {
        var message_0 = 'lifeCycle is required';
        throw IllegalStateException.o(toString(message_0));
      } else {
        tmp$ret$2 = tmp0_0;
        break $l$block_0;
      }
    }
    var lifeCycle = tmp$ret$2;
    var client = yield* this.xcw($completion);
    var tmp = client;
    tmp.ccw_1 = UserStreamImpl$open$lambda(listener);
    var tmp_0 = client;
    tmp_0.dcw_1 = LifeCycleListener$onConnect$ref(lifeCycle);
    var tmp_1 = client;
    tmp_1.ecw_1 = LifeCycleListener$onDisconnect$ref(lifeCycle);
    var tmp_2 = client;
    tmp_2.fcw_1 = LifeCycleListener$onError$ref(lifeCycle);
    yield* client.w39($completion);
    return Unit_instance;
  }
  g7() {
    var tmp0_safe_receiver = this.wcw_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g7();
    }
  }
  fcx() {
    var tmp0_safe_receiver = this.wcw_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bcw_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
//endregion
var MastodonEx_instance;
function MastodonEx_getInstance() {
  return MastodonEx_instance;
}
function onMessage($this, message) {
  var tmp0_safe_receiver = $this.ccw_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = InternalUtility_getInstance().qcs_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.f10();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamResponse), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    tmp0_safe_receiver(this_0.g11(tmp$ret$4, message));
  }
}
function StreamClient$slambda(this$0) {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    onMessage(this$0, it);
    return Unit_instance;
  }), 1);
}
function StreamClient$lambda(this$0) {
  return (it) => {
    this$0.bcw_1 = true;
    var tmp0_safe_receiver = this$0.dcw_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.bcw_1 = false;
    var tmp0_safe_receiver = this$0.ecw_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function accessToken($this) {
  var tmp0 = $this.hcw_1;
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.checkNotNull' call
    if (tmp0 == null) {
      var message = 'needs access token';
      throw IllegalStateException.o(toString(message));
    } else {
      tmp$ret$0 = tmp0;
      break $l$block;
    }
  }
  return tmp$ret$0;
}
function StreamResponse$Companion$$childSerializers$_anonymous__eplt4n() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().yg(), StringSerializer_getInstance());
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_instance;
  static_init_called = true;
  PublicType_LOCAL_instance = new PublicType('LOCAL', 0);
  PublicType_REMOTE_instance = new PublicType('REMOTE', 1);
  PublicType_ALL_instance = new PublicType('ALL', 2);
}
var PublicType_LOCAL_instance;
var PublicType_REMOTE_instance;
var PublicType_ALL_instance;
function PublicType_LOCAL_getInstance() {
  static_init();
  return PublicType_LOCAL_instance;
}
function PublicType_ALL_getInstance() {
  static_init();
  return PublicType_ALL_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
function DirectStreamImpl$open$lambda($listener) {
  return (it) => {
    var tmp;
    if (it.qcw_1 === 'update' && !(it.rcw_1 == null)) {
      var tmp0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj = ensureNotNull(it.rcw_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = tmp0.qcs_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.f10();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_3 = this_0.g11(tmp$ret$2, obj);
      $listener.ycw(this_3);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
function PublicStreamImpl$open$lambda($listener) {
  return (it) => {
    var tmp;
    if (it.qcw_1 === 'update') {
      var tmp0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj = ensureNotNull(it.rcw_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = tmp0.qcs_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.f10();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_3 = this_0.g11(tmp$ret$2, obj);
      $listener.ycw(this_3);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
function UserStreamImpl$open$lambda($listener) {
  return (it) => {
    var tmp;
    if (it.qcw_1 === 'update') {
      var tmp0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj = ensureNotNull(it.rcw_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = tmp0.qcs_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.f10();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_3 = this_0.g11(tmp$ret$2, obj);
      $listener.ycw(this_3);
      tmp = Unit_instance;
    }
    var tmp_0;
    if (it.qcw_1 === 'notification') {
      var tmp0_0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj_0 = ensureNotNull(it.rcw_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_4 = tmp0_0.qcs_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_5 = this_4.f10();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_6 = serializer(this_5, createKType(getKClass(Notification), arrayOf([]), false));
      var tmp$ret$8 = isInterface(this_6, KSerializer) ? this_6 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_7 = this_4.g11(tmp$ret$8, obj_0);
      $listener.lcx(this_7);
      tmp_0 = Unit_instance;
    }
    return Unit_instance;
  };
}
function LifeCycleListener$onConnect$ref(p0) {
  return constructCallableReference(() => {
    p0.scx();
    return Unit_instance;
  }, 0, 0, 97, 'onConnect', [p0]);
}
function LifeCycleListener$onDisconnect$ref(p0) {
  return constructCallableReference(() => {
    p0.tcx();
    return Unit_instance;
  }, 0, 0, 98, 'onDisconnect', [p0]);
}
function LifeCycleListener$onError$ref(p0) {
  return constructCallableReference((p0_0) => {
    p0.p91(p0_0);
    return Unit_instance;
  }, 1, 0, 99, 'onError', [p0]);
}
//region block: post-declaration
initMetadataForObject(MastodonEx, 'MastodonEx');
initMetadataForClass(StreamClient, 'StreamClient', VOID, VOID, VOID, [0]);
initMetadataForClass(StreamResourceImpl, 'StreamResourceImpl');
initMetadataForCompanion(Companion);
protoOf($serializer).x1c = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamResponse, 'StreamResponse', StreamResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(PublicType, 'PublicType');
initMetadataForClass(BaseStreamImpl, 'BaseStreamImpl', VOID, VOID, VOID, [0]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(DirectStreamImpl, 'DirectStreamImpl', VOID, VOID, VOID, [0]);
initMetadataForCompanion(Companion_1);
initMetadataForClass(PublicStreamImpl, 'PublicStreamImpl', VOID, VOID, VOID, [0]);
initMetadataForCompanion(Companion_2);
initMetadataForClass(UserStreamImpl, 'UserStreamImpl', VOID, VOID, VOID, [0]);
//endregion
//region block: init
MastodonEx_instance = new MastodonEx();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
//endregion
//region block: exports
export {
  PublicType_ALL_getInstance as PublicType_ALL_getInstanceceupgsyo8vt,
  PublicType_LOCAL_getInstance as PublicType_LOCAL_getInstance16qde27ym4zsw,
  MastodonEx_instance as MastodonEx_instancedxijlpzpaugc,
};
//endregion

//# sourceMappingURL=kmastodon-stream.mjs.map
