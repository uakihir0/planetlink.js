import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  Unit_instancev9v8hjid95df as Unit_instance,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  to2cs3ny02qtbcb as to,
  mapOf1xd03cq9cnmy8 as mapOf,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
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
  InternalUtility_getInstance3h89e0a5dc6eb as InternalUtility_getInstance,
  MastodonFactory_instance2u9vsvt4i09j7 as MastodonFactory_instance,
  Status35n2t50a43r3h as Status,
  Notificationa10f1ufmxcmw as Notification,
} from './kmastodon-core.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
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
  ycy(_this__u8e3s4) {
    return new StreamResourceImpl(_this__u8e3s4.uri(), _this__u8e3s4.accessToken());
  }
}
class StreamClient$slambda {
  constructor(this$0) {
    this.gcz_1 = this$0;
  }
  *b56(it, $completion) {
    onMessage(this.gcz_1, it);
    return Unit_instance;
  }
  wd(p1, $completion) {
    return this.b56((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StreamClient {
  constructor(uri) {
    this.zcy_1 = uri;
    this.acz_1 = new WebsocketRequest();
    this.bcz_1 = false;
    this.ccz_1 = null;
    this.dcz_1 = null;
    this.ecz_1 = null;
    this.fcz_1 = null;
    this.acz_1.g56(this.zcy_1);
    var tmp = this.acz_1;
    tmp.s55_1 = StreamClient$slambda_0(this);
    var tmp_0 = this.acz_1;
    tmp_0.u55_1 = StreamClient$lambda(this);
    var tmp_1 = this.acz_1;
    tmp_1.v55_1 = StreamClient$lambda_0(this);
  }
  *m35($completion) {
    yield* this.acz_1.h56($completion);
    return Unit_instance;
  }
  z6() {
    this.acz_1.z6();
  }
}
class StreamResourceImpl {
  constructor(uri, accessToken) {
    this.hcz_1 = uri;
    this.icz_1 = accessToken;
  }
  jcz() {
    return new UserStreamImpl(this.hcz_1, mapOf([to('access_token', accessToken(this)), to('stream', Companion_instance_2.kcz())]));
  }
  lcz(type) {
    return new PublicStreamImpl(this.hcz_1, mapOf([to('access_token', accessToken(this)), to('stream', Companion_instance_1.mcz(type))]));
  }
  ncz() {
    return new DirectStreamImpl(this.hcz_1, mapOf([to('access_token', accessToken(this)), to('stream', Companion_instance_0.kcz())]));
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
    tmp.ocz_1 = [null, null, lazy(tmp_0, StreamResponse$Companion$$childSerializers$_anonymous__eplt4n)];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.stream.StreamResponse', this, 3);
    tmp0_serialDesc.m1a('event', true);
    tmp0_serialDesc.m1a('payload', true);
    tmp0_serialDesc.m1a('stream', true);
    this.pcz_1 = tmp0_serialDesc;
  }
  qcz(encoder, value) {
    var tmp0_desc = this.pcz_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance().ocz_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.rcz_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.rcz_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.scz_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.scz_1);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.tcz_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.tcz_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qcz(encoder, value instanceof StreamResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.pcz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance().ocz_1;
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, tmp8_cached[2].y2(), tmp6_local2);
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
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, tmp8_cached[2].y2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return StreamResponse.ucz(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.pcz_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance().ocz_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].y2())];
  }
}
class StreamResponse {
  constructor() {
    Companion_getInstance();
    this.rcz_1 = null;
    this.scz_1 = null;
    this.tcz_1 = null;
  }
  static ucz(seen0, event, payload, stream, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().pcz_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.rcz_1 = null;
    else
      $this.rcz_1 = event;
    if (0 === (seen0 & 2))
      $this.scz_1 = null;
    else
      $this.scz_1 = payload;
    if (0 === (seen0 & 4))
      $this.tcz_1 = null;
    else
      $this.tcz_1 = stream;
    return $this;
  }
}
class PublicType extends Enum {}
class BaseStreamImpl {
  constructor(uri, query) {
    this.vcz_1 = uri;
    this.wcz_1 = query;
    this.xcz_1 = null;
  }
  ycz() {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.wcz_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d2(this_0.k2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.w2().l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$3 = item.x2() + '=' + item.y2();
      destination.e2(tmp$ret$3);
    }
    var queryString = joinToString(destination, '&');
    var streamUrl = MastodonFactory_instance.instance(this.vcz_1).instances().ibr().data.urls.streamingApi + '/api/v1/streaming?' + queryString;
    // Inline function 'kotlin.also' call
    var this_1 = new StreamClient(streamUrl);
    this.xcz_1 = this_1;
    return this_1;
  }
}
class Companion_0 {
  kcz() {
    return 'direct';
  }
}
class DirectStreamImpl extends BaseStreamImpl {
  constructor(uri, query) {
    super(uri, query);
    this.fd0_1 = null;
    this.gd0_1 = null;
  }
  hd0(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.fd0_1 = listener;
    this.gd0_1 = lifeCycle;
    return this;
  }
  *m35($completion) {
    var tmp0 = this.fd0_1;
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
    var tmp0_0 = this.gd0_1;
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
    var client = this.ycz();
    var tmp = client;
    tmp.ccz_1 = DirectStreamImpl$open$lambda(listener);
    var tmp_0 = client;
    tmp_0.dcz_1 = LifeCycleListener$onConnect$ref(lifeCycle);
    var tmp_1 = client;
    tmp_1.ecz_1 = LifeCycleListener$onDisconnect$ref(lifeCycle);
    var tmp_2 = client;
    tmp_2.fcz_1 = LifeCycleListener$onError$ref(lifeCycle);
    yield* client.m35($completion);
    return Unit_instance;
  }
  z6() {
    var tmp0_safe_receiver = this.xcz_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z6();
    }
  }
  id0() {
    var tmp0_safe_receiver = this.xcz_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bcz_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
class Companion_1 {
  mcz(type) {
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
    this.md0_1 = null;
    this.nd0_1 = null;
  }
  hd0(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.md0_1 = listener;
    this.nd0_1 = lifeCycle;
    return this;
  }
  *m35($completion) {
    var tmp0 = this.md0_1;
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
    var tmp0_0 = this.nd0_1;
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
    var client = this.ycz();
    var tmp = client;
    tmp.ccz_1 = PublicStreamImpl$open$lambda(listener);
    var tmp_0 = client;
    tmp_0.dcz_1 = LifeCycleListener$onConnect$ref_0(lifeCycle);
    var tmp_1 = client;
    tmp_1.ecz_1 = LifeCycleListener$onDisconnect$ref_0(lifeCycle);
    var tmp_2 = client;
    tmp_2.fcz_1 = LifeCycleListener$onError$ref_0(lifeCycle);
    yield* client.m35($completion);
    return Unit_instance;
  }
  z6() {
    var tmp0_safe_receiver = this.xcz_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z6();
    }
  }
  id0() {
    var tmp0_safe_receiver = this.xcz_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bcz_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
class Companion_2 {
  kcz() {
    return 'user';
  }
}
class UserStreamImpl extends BaseStreamImpl {
  constructor(uri, query) {
    super(uri, query);
    this.sd0_1 = null;
    this.td0_1 = null;
  }
  ud0(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.sd0_1 = listener;
    this.td0_1 = lifeCycle;
    return this;
  }
  *m35($completion) {
    var tmp0 = this.sd0_1;
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
    var tmp0_0 = this.td0_1;
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
    var client = this.ycz();
    var tmp = client;
    tmp.ccz_1 = UserStreamImpl$open$lambda(listener);
    var tmp_0 = client;
    tmp_0.dcz_1 = LifeCycleListener$onConnect$ref_1(lifeCycle);
    var tmp_1 = client;
    tmp_1.ecz_1 = LifeCycleListener$onDisconnect$ref_1(lifeCycle);
    var tmp_2 = client;
    tmp_2.fcz_1 = LifeCycleListener$onError$ref_1(lifeCycle);
    yield* client.m35($completion);
    return Unit_instance;
  }
  z6() {
    var tmp0_safe_receiver = this.xcz_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z6();
    }
  }
  id0() {
    var tmp0_safe_receiver = this.xcz_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bcz_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
//endregion
var MastodonEx_instance;
function MastodonEx_getInstance() {
  return MastodonEx_instance;
}
function onMessage($this, message) {
  var tmp0_safe_receiver = $this.ccz_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = InternalUtility_getInstance().fcq_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.ny();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(StreamResponse), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    tmp0_safe_receiver(this_0.oz(tmp$ret$4, message));
  }
}
function StreamClient$slambda_0(this$0) {
  var i = new StreamClient$slambda(this$0);
  var l = (it, $completion) => i.b56(it, $completion);
  l.$arity = 1;
  return l;
}
function StreamClient$lambda(this$0) {
  return (it) => {
    this$0.bcz_1 = true;
    var tmp0_safe_receiver = this$0.dcz_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.bcz_1 = false;
    var tmp0_safe_receiver = this$0.ecz_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function accessToken($this) {
  var tmp0 = $this.icz_1;
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
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
    if (it.rcz_1 === 'update' && !(it.scz_1 == null)) {
      var tmp0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj = ensureNotNull(it.scz_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = tmp0.fcq_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.ny();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_3 = this_0.oz(tmp$ret$2, obj);
      $listener.zcz(this_3);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function LifeCycleListener$onConnect$ref(p0) {
  var l = () => {
    p0.ad0();
    return Unit_instance;
  };
  l.callableName = 'onConnect';
  return l;
}
function LifeCycleListener$onDisconnect$ref(p0) {
  var l = () => {
    p0.bd0();
    return Unit_instance;
  };
  l.callableName = 'onDisconnect';
  return l;
}
function LifeCycleListener$onError$ref(p0) {
  var l = (_this__u8e3s4) => {
    p0.rbc(_this__u8e3s4);
    return Unit_instance;
  };
  l.callableName = 'onError';
  return l;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
function PublicStreamImpl$open$lambda($listener) {
  return (it) => {
    var tmp;
    if (it.rcz_1 === 'update') {
      var tmp0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj = ensureNotNull(it.scz_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = tmp0.fcq_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.ny();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_3 = this_0.oz(tmp$ret$2, obj);
      $listener.zcz(this_3);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function LifeCycleListener$onConnect$ref_0(p0) {
  var l = () => {
    p0.ad0();
    return Unit_instance;
  };
  l.callableName = 'onConnect';
  return l;
}
function LifeCycleListener$onDisconnect$ref_0(p0) {
  var l = () => {
    p0.bd0();
    return Unit_instance;
  };
  l.callableName = 'onDisconnect';
  return l;
}
function LifeCycleListener$onError$ref_0(p0) {
  var l = (_this__u8e3s4) => {
    p0.rbc(_this__u8e3s4);
    return Unit_instance;
  };
  l.callableName = 'onError';
  return l;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
function UserStreamImpl$open$lambda($listener) {
  return (it) => {
    var tmp;
    if (it.rcz_1 === 'update') {
      var tmp0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj = ensureNotNull(it.scz_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = tmp0.fcq_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.ny();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_3 = this_0.oz(tmp$ret$2, obj);
      $listener.zcz(this_3);
      tmp = Unit_instance;
    }
    var tmp_0;
    if (it.rcz_1 === 'notification') {
      var tmp0_0 = InternalUtility_getInstance();
      // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
      var obj_0 = ensureNotNull(it.scz_1);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_4 = tmp0_0.fcq_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_5 = this_4.ny();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_6 = serializer(this_5, createKType(getKClass(Notification), arrayOf([]), false));
      var tmp$ret$8 = isInterface(this_6, KSerializer) ? this_6 : THROW_CCE();
      // Inline function 'kotlin.let' call
      var this_7 = this_4.oz(tmp$ret$8, obj_0);
      $listener.od0(this_7);
      tmp_0 = Unit_instance;
    }
    return Unit_instance;
  };
}
function LifeCycleListener$onConnect$ref_1(p0) {
  var l = () => {
    p0.ad0();
    return Unit_instance;
  };
  l.callableName = 'onConnect';
  return l;
}
function LifeCycleListener$onDisconnect$ref_1(p0) {
  var l = () => {
    p0.bd0();
    return Unit_instance;
  };
  l.callableName = 'onDisconnect';
  return l;
}
function LifeCycleListener$onError$ref_1(p0) {
  var l = (_this__u8e3s4) => {
    p0.rbc(_this__u8e3s4);
    return Unit_instance;
  };
  l.callableName = 'onError';
  return l;
}
//region block: post-declaration
initMetadataForObject(MastodonEx, 'MastodonEx');
initMetadataForLambda(StreamClient$slambda, VOID, VOID, [1]);
initMetadataForClass(StreamClient, 'StreamClient', VOID, VOID, VOID, [0]);
initMetadataForClass(StreamResourceImpl, 'StreamResourceImpl');
initMetadataForCompanion(Companion);
protoOf($serializer).d1b = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamResponse, 'StreamResponse', StreamResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(PublicType, 'PublicType');
initMetadataForClass(BaseStreamImpl, 'BaseStreamImpl');
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
  MastodonEx_instance as MastodonEx_instancemdn4mw6vdt5r,
  PublicType_ALL_getInstance as PublicType_ALL_getInstance29lcd4tb467nl,
  PublicType_LOCAL_getInstance as PublicType_LOCAL_getInstance38ba0olcagtdi,
};
//endregion

//# sourceMappingURL=kmastodon-stream.mjs.map
