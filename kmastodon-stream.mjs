import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  constructCallableReference23y65rf941mch as constructCallableReference,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  to2cs3ny02qtbcb as to,
  mapOf1xd03cq9cnmy8 as mapOf,
  PrimitiveClasses_getInstance143761yrsca9q as PrimitiveClasses_getInstance,
  LazyThreadSafetyMode_PUBLICATION_getInstance20ynwq7b0awd8 as LazyThreadSafetyMode_PUBLICATION_getInstance,
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
  InternalUtility_getInstance2bphglwqblmqe as InternalUtility_getInstance,
  MastodonFactory_instance1k8tao0duxcie as MastodonFactory_instance,
  instanceV1$virtualSuspendBridge2q1yn3mu4r55r as instanceV1$virtualSuspendBridge,
  Status35n2t50a43r3h as Status,
  Notificationa10f1ufmxcmw as Notification,
} from './kmastodon-core.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  StringSerializer_getInstancerxlnwnlbnwri as StringSerializer_getInstance,
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
  wc9(_this__u8e3s4) {
    return new StreamResourceImpl(_this__u8e3s4.uri(), _this__u8e3s4.accessToken());
  }
}
class StreamClient {
  constructor(uri) {
    this.xc9_1 = uri;
    this.yc9_1 = new WebsocketRequest();
    this.zc9_1 = false;
    this.aca_1 = null;
    this.bca_1 = null;
    this.cca_1 = null;
    this.dca_1 = null;
    this.yc9_1.t52(this.xc9_1);
    var tmp = this.yc9_1;
    tmp.k52_1 = StreamClient$slambda(this);
    var tmp_0 = this.yc9_1;
    tmp_0.m52_1 = StreamClient$lambda(this);
    var tmp_1 = this.yc9_1;
    tmp_1.n52_1 = StreamClient$lambda_0(this);
  }
  *l38($completion) {
    yield* this.yc9_1.u52($completion);
    return Unit_instance;
  }
  f7() {
    this.yc9_1.f7();
  }
}
class StreamResourceImpl {
  constructor(uri, accessToken) {
    this.eca_1 = uri;
    this.fca_1 = accessToken;
  }
  gca() {
    return new UserStreamImpl(this.eca_1, mapOf([to('access_token', accessToken(this)), to('stream', Companion_instance_2.hca())]));
  }
  ica(type) {
    return new PublicStreamImpl(this.eca_1, mapOf([to('access_token', accessToken(this)), to('stream', Companion_instance_1.jca(type))]));
  }
  kca() {
    return new DirectStreamImpl(this.eca_1, mapOf([to('access_token', accessToken(this)), to('stream', Companion_instance_0.hca())]));
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
    tmp.lca_1 = [null, null, lazy(tmp_0, StreamResponse$Companion$$childSerializers$_anonymous__eplt4n)];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.stream.StreamResponse', this, 3);
    tmp0_serialDesc.s1a('event', true);
    tmp0_serialDesc.s1a('payload', true);
    tmp0_serialDesc.s1a('stream', true);
    this.mca_1 = tmp0_serialDesc;
  }
  nca(encoder, value) {
    var tmp0_desc = this.mca_1;
    var tmp1_output = encoder.a13(tmp0_desc);
    var tmp2_cached = Companion_getInstance().lca_1;
    if (tmp1_output.w14(tmp0_desc, 0) ? true : !(value.oca_1 == null)) {
      tmp1_output.s14(tmp0_desc, 0, StringSerializer_getInstance(), value.oca_1);
    }
    if (tmp1_output.w14(tmp0_desc, 1) ? true : !(value.pca_1 == null)) {
      tmp1_output.s14(tmp0_desc, 1, StringSerializer_getInstance(), value.pca_1);
    }
    if (tmp1_output.w14(tmp0_desc, 2) ? true : !(value.qca_1 == null)) {
      tmp1_output.s14(tmp0_desc, 2, tmp2_cached[2].d3(), value.qca_1);
    }
    tmp1_output.b13(tmp0_desc);
  }
  vy(encoder, value) {
    return this.nca(encoder, value instanceof StreamResponse ? value : THROW_CCE());
  }
  wy(decoder) {
    var tmp0_desc = this.mca_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.a13(tmp0_desc);
    var tmp8_cached = Companion_getInstance().lca_1;
    if (tmp7_input.p13()) {
      tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.q13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.o13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o13(tmp0_desc, 2, tmp8_cached[2].d3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.k10(tmp2_index);
        }
      }
    tmp7_input.b13(tmp0_desc);
    return StreamResponse.rca(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  iy() {
    return this.mca_1;
  }
  i1b() {
    var tmp0_cached = Companion_getInstance().lca_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].d3())];
  }
}
class StreamResponse {
  constructor() {
    Companion_getInstance();
    this.oca_1 = null;
    this.pca_1 = null;
    this.qca_1 = null;
  }
  static rca(seen0, event, payload, stream, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().mca_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.oca_1 = null;
    else
      $this.oca_1 = event;
    if (0 === (seen0 & 2))
      $this.pca_1 = null;
    else
      $this.pca_1 = payload;
    if (0 === (seen0 & 4))
      $this.qca_1 = null;
    else
      $this.qca_1 = stream;
    return $this;
  }
}
class PublicType extends Enum {}
class BaseStreamImpl {
  constructor(uri, query) {
    this.sca_1 = uri;
    this.tca_1 = query;
    this.uca_1 = null;
  }
  *vca($completion) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.tca_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d2(this_0.k2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.b3().l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$3 = item.c3() + '=' + item.d3();
      destination.e2(tmp$ret$3);
    }
    var queryString = joinToString(destination, '&');
    var streamUrl = (yield* instanceV1$virtualSuspendBridge(MastodonFactory_instance.instance(this.sca_1).instances(), $completion)).data.urls.streamingApi + '/api/v1/streaming?' + queryString;
    // Inline function 'kotlin.also' call
    var this_1 = new StreamClient(streamUrl);
    this.uca_1 = this_1;
    return this_1;
  }
}
class Companion_0 {
  hca() {
    return 'direct';
  }
}
class DirectStreamImpl extends BaseStreamImpl {
  constructor(uri, query) {
    super(uri, query);
    this.acb_1 = null;
    this.bcb_1 = null;
  }
  ccb(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.acb_1 = listener;
    this.bcb_1 = lifeCycle;
    return this;
  }
  *l38($completion) {
    var tmp0 = this.acb_1;
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
    var tmp0_0 = this.bcb_1;
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
    var client = yield* this.vca($completion);
    var tmp = client;
    tmp.aca_1 = DirectStreamImpl$open$lambda(listener);
    var tmp_0 = client;
    tmp_0.bca_1 = LifeCycleListener$onConnect$ref(lifeCycle);
    var tmp_1 = client;
    tmp_1.cca_1 = LifeCycleListener$onDisconnect$ref(lifeCycle);
    var tmp_2 = client;
    tmp_2.dca_1 = LifeCycleListener$onError$ref(lifeCycle);
    yield* client.l38($completion);
    return Unit_instance;
  }
  f7() {
    var tmp0_safe_receiver = this.uca_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f7();
    }
  }
  dcb() {
    var tmp0_safe_receiver = this.uca_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zc9_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
class Companion_1 {
  jca(type) {
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
    this.hcb_1 = null;
    this.icb_1 = null;
  }
  ccb(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.hcb_1 = listener;
    this.icb_1 = lifeCycle;
    return this;
  }
  *l38($completion) {
    var tmp0 = this.hcb_1;
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
    var tmp0_0 = this.icb_1;
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
    var client = yield* this.vca($completion);
    var tmp = client;
    tmp.aca_1 = PublicStreamImpl$open$lambda(listener);
    var tmp_0 = client;
    tmp_0.bca_1 = LifeCycleListener$onConnect$ref(lifeCycle);
    var tmp_1 = client;
    tmp_1.cca_1 = LifeCycleListener$onDisconnect$ref(lifeCycle);
    var tmp_2 = client;
    tmp_2.dca_1 = LifeCycleListener$onError$ref(lifeCycle);
    yield* client.l38($completion);
    return Unit_instance;
  }
  f7() {
    var tmp0_safe_receiver = this.uca_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f7();
    }
  }
  dcb() {
    var tmp0_safe_receiver = this.uca_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zc9_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
class Companion_2 {
  hca() {
    return 'user';
  }
}
class UserStreamImpl extends BaseStreamImpl {
  constructor(uri, query) {
    super(uri, query);
    this.ncb_1 = null;
    this.ocb_1 = null;
  }
  pcb(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.ncb_1 = listener;
    this.ocb_1 = lifeCycle;
    return this;
  }
  *l38($completion) {
    var tmp0 = this.ncb_1;
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
    var tmp0_0 = this.ocb_1;
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
    var client = yield* this.vca($completion);
    var tmp = client;
    tmp.aca_1 = UserStreamImpl$open$lambda(listener);
    var tmp_0 = client;
    tmp_0.bca_1 = LifeCycleListener$onConnect$ref(lifeCycle);
    var tmp_1 = client;
    tmp_1.cca_1 = LifeCycleListener$onDisconnect$ref(lifeCycle);
    var tmp_2 = client;
    tmp_2.dca_1 = LifeCycleListener$onError$ref(lifeCycle);
    yield* client.l38($completion);
    return Unit_instance;
  }
  f7() {
    var tmp0_safe_receiver = this.uca_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f7();
    }
  }
  dcb() {
    var tmp0_safe_receiver = this.uca_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zc9_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
//endregion
var MastodonEx_instance;
function MastodonEx_getInstance() {
  return MastodonEx_instance;
}
function onMessage($this, message) {
  var tmp0_safe_receiver = $this.aca_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = InternalUtility_getInstance().oc6_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.ty();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamResponse), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    tmp0_safe_receiver(this_0.uz(tmp$ret$4, message));
  }
}
function StreamClient$slambda(this$0) {
  return constructCallableReference(function *(it, $completion) {
    onMessage(this$0, it);
    return Unit_instance;
  }, 1);
}
function StreamClient$lambda(this$0) {
  return (it) => {
    this$0.zc9_1 = true;
    var tmp0_safe_receiver = this$0.bca_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.zc9_1 = false;
    var tmp0_safe_receiver = this$0.cca_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function accessToken($this) {
  var tmp0 = $this.fca_1;
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pg(), StringSerializer_getInstance());
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
var PublicType_LOCAL_instance;
var PublicType_REMOTE_instance;
var PublicType_ALL_instance;
var PublicType_entriesInitialized;
function PublicType_initEntries() {
  if (PublicType_entriesInitialized)
    return Unit_instance;
  PublicType_entriesInitialized = true;
  PublicType_LOCAL_instance = new PublicType('LOCAL', 0);
  PublicType_REMOTE_instance = new PublicType('REMOTE', 1);
  PublicType_ALL_instance = new PublicType('ALL', 2);
}
function PublicType_LOCAL_getInstance() {
  PublicType_initEntries();
  return PublicType_LOCAL_instance;
}
function PublicType_ALL_getInstance() {
  PublicType_initEntries();
  return PublicType_ALL_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
function DirectStreamImpl$open$lambda($listener) {
  return (it) => {
    var tmp;
    if (it.oca_1 === 'update' && !(it.pca_1 == null)) {
      var tmp0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj = ensureNotNull(it.pca_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = tmp0.oc6_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.ty();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_3 = this_0.uz(tmp$ret$2, obj);
      $listener.wca(this_3);
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
    if (it.oca_1 === 'update') {
      var tmp0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj = ensureNotNull(it.pca_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = tmp0.oc6_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.ty();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_3 = this_0.uz(tmp$ret$2, obj);
      $listener.wca(this_3);
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
    if (it.oca_1 === 'update') {
      var tmp0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj = ensureNotNull(it.pca_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = tmp0.oc6_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.ty();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_3 = this_0.uz(tmp$ret$2, obj);
      $listener.wca(this_3);
      tmp = Unit_instance;
    }
    var tmp_0;
    if (it.oca_1 === 'notification') {
      var tmp0_0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj_0 = ensureNotNull(it.pca_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_4 = tmp0_0.oc6_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_5 = this_4.ty();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_6 = serializer(this_5, createKType(getKClass(Notification), arrayOf([]), false));
      var tmp$ret$8 = isInterface(this_6, KSerializer) ? this_6 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_7 = this_4.uz(tmp$ret$8, obj_0);
      $listener.jcb(this_7);
      tmp_0 = Unit_instance;
    }
    return Unit_instance;
  };
}
function LifeCycleListener$onConnect$ref(p0) {
  return constructCallableReference(() => {
    p0.qcb();
    return Unit_instance;
  }, 0, 0, 93, 'onConnect', [p0]);
}
function LifeCycleListener$onDisconnect$ref(p0) {
  return constructCallableReference(() => {
    p0.rcb();
    return Unit_instance;
  }, 0, 0, 94, 'onDisconnect', [p0]);
}
function LifeCycleListener$onError$ref(p0) {
  return constructCallableReference((p0_0) => {
    p0.e8j(p0_0);
    return Unit_instance;
  }, 1, 0, 95, 'onError', [p0]);
}
//region block: post-declaration
initMetadataForObject(MastodonEx, 'MastodonEx');
initMetadataForClass(StreamClient, 'StreamClient', VOID, VOID, VOID, [0]);
initMetadataForClass(StreamResourceImpl, 'StreamResourceImpl');
initMetadataForCompanion(Companion);
protoOf($serializer).j1b = typeParametersSerializers;
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
  MastodonEx_instance as MastodonEx_instance20sc4lcttag7x,
  PublicType_ALL_getInstance as PublicType_ALL_getInstance3qad9xbquiai2,
  PublicType_LOCAL_getInstance as PublicType_LOCAL_getInstancep6qfaaryd9kp,
};
//endregion

//# sourceMappingURL=kmastodon-stream.mjs.map
