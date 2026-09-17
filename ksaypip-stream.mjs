import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  constructCallableReference23y65rf941mch as constructCallableReference,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  createThis2j2avj17cvnv2 as createThis,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  Exceptiondt2hlxn7j7vw as Exception,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  UnsupportedOperationException2tkumpmhredt3 as UnsupportedOperationException,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  trimEndvvzjdhan75g as trimEnd,
  removePrefix279df90bhrqqg as removePrefix,
  startsWith26w8qjqapeeq6 as startsWith,
} from './kotlin-kotlin-stdlib.mjs';
import { WebsocketRequest38pjwt1m63ieg as WebsocketRequest } from './khttpclient.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  StringSerializer_getInstancerxlnwnlbnwri as StringSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  SerializableWithd2dap36updxd as SerializableWith,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  InternalUtility_getInstance2elhb2d5tw2hu as InternalUtility_getInstance,
  RealtimeEventdabk5uc6i3ag as RealtimeEvent,
} from './ksaypip-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class SaypipEx {
  ena(_this__u8e3s4) {
    return new StreamResourceImpl(_this__u8e3s4.uri(), _this__u8e3s4.accessToken());
  }
}
class StreamClient {
  constructor(uri, accessToken) {
    this.fna_1 = new WebsocketRequest();
    this.gna_1 = false;
    this.hna_1 = null;
    this.ina_1 = null;
    this.jna_1 = null;
    this.kna_1 = null;
    this.fna_1.l56(uri);
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(accessToken) > 0) {
      this.fna_1.b55('Authorization', 'Bearer ' + accessToken);
    }
    var tmp = this.fna_1;
    tmp.c56_1 = StreamClient$slambda(this);
    var tmp_0 = this.fna_1;
    tmp_0.e56_1 = StreamClient$lambda(this);
    var tmp_1 = this.fna_1;
    tmp_1.f56_1 = StreamClient$lambda_0(this);
    var tmp_2 = this.fna_1;
    tmp_2.g56_1 = StreamClient$lambda_1(this);
  }
  *p37($completion) {
    yield* this.fna_1.m56($completion);
    return Unit_instance;
  }
  f7() {
    this.fna_1.f7();
  }
}
class StreamResourceImpl {
  constructor(uri, accessToken) {
    this.lna_1 = uri;
    this.mna_1 = accessToken;
  }
  nna() {
    return new RoomStreamImpl(this.lna_1, this.mna_1);
  }
}
class Companion {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ksaypip.stream.internal.RealtimeEventParser.Envelope', this, 2);
    tmp0_serialDesc.q1b('type', true);
    tmp0_serialDesc.q1b('postId', true);
    this.ona_1 = tmp0_serialDesc;
  }
  pna(encoder, value) {
    var tmp0_desc = this.ona_1;
    var tmp1_output = encoder.y13(tmp0_desc);
    if (tmp1_output.u15(tmp0_desc, 0) ? true : !(value.qna_1 === '')) {
      tmp1_output.n15(tmp0_desc, 0, value.qna_1);
    }
    if (tmp1_output.u15(tmp0_desc, 1) ? true : !(value.rna_1 === '')) {
      tmp1_output.n15(tmp0_desc, 1, value.rna_1);
    }
    tmp1_output.z13(tmp0_desc);
  }
  tz(encoder, value) {
    return this.pna(encoder, value instanceof Envelope ? value : THROW_CCE());
  }
  uz(decoder) {
    var tmp0_desc = this.ona_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.y13(tmp0_desc);
    if (tmp6_input.n14()) {
      tmp4_local0 = tmp6_input.i14(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i14(tmp0_desc, 1);
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
            tmp5_local1 = tmp6_input.i14(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.i11(tmp2_index);
        }
      }
    tmp6_input.z13(tmp0_desc);
    return Envelope.sna(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  gz() {
    return this.ona_1;
  }
  g1c() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class Envelope {
  constructor() {
    this.qna_1 = '';
    this.rna_1 = '';
  }
  static sna(seen0, type, postId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().ona_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.qna_1 = '';
    else
      $this.qna_1 = type;
    if (0 === (seen0 & 2))
      $this.rna_1 = '';
    else
      $this.rna_1 = postId;
    return $this;
  }
}
class RealtimeEventParser {
  tw(message) {
    var tmp;
    try {
      // Inline function 'work.socialhub.ksaypip.internal.InternalUtility.fromJson' call
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = InternalUtility_getInstance().an8_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.rz();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Envelope), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.s10(tmp$ret$2, message);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        return null;
      } else {
        throw $p;
      }
    }
    var envelope = tmp;
    var tmp_1;
    switch (envelope.qna_1) {
      case 'post.created':
      case 'post.deleted':
        // Inline function 'kotlin.also' call

        var this_3 = new RealtimeEvent();
        this_3.type = envelope.qna_1;
        this_3.postId = envelope.rna_1;
        tmp_1 = this_3;
        break;
      default:
        tmp_1 = null;
        break;
    }
    return tmp_1;
  }
}
class RoomStreamImpl {
  constructor(uri, accessToken) {
    this.tna_1 = uri;
    this.una_1 = accessToken;
    this.vna_1 = null;
    this.wna_1 = null;
    this.xna_1 = null;
  }
  yna(listener, lifeCycle) {
    // Inline function 'kotlin.also' call
    this.vna_1 = listener;
    this.wna_1 = lifeCycle;
    return this;
  }
  *p37($completion) {
    var tmp0 = this.vna_1;
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
    var tmp0_0 = this.wna_1;
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
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.una_1;
    if (charSequenceLength(this_0) > 0) {
      tmp = !get_presentsHandshakeHeader();
    } else {
      tmp = false;
    }
    if (tmp) {
      throw UnsupportedOperationException.ua('A browser WebSocket cannot present an Authorization header: the room is visitor-only on JavaScript. Listen with an empty access token, or use a native, desktop or server-side client.');
    }
    // Inline function 'kotlin.also' call
    var this_1 = new StreamClient(StreamEndpoint_instance.zna(this.tna_1), this.una_1);
    this.xna_1 = this_1;
    var client = this_1;
    var tmp_0 = client;
    tmp_0.hna_1 = RoomStreamListener$onEvent$ref(listener);
    var tmp_1 = client;
    tmp_1.ina_1 = LifeCycleListener$onConnect$ref(lifeCycle);
    var tmp_2 = client;
    tmp_2.jna_1 = LifeCycleListener$onDisconnect$ref(lifeCycle);
    var tmp_3 = client;
    tmp_3.kna_1 = LifeCycleListener$onError$ref(lifeCycle);
    yield* client.p37($completion);
    return Unit_instance;
  }
  f7() {
    var tmp0_safe_receiver = this.xna_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f7();
    }
  }
  vco() {
    var tmp0_safe_receiver = this.xna_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gna_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
}
class StreamEndpoint {
  zna(uri) {
    var base = trimEnd(uri, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var authority = startsWith(base, 'https://') ? 'wss://' + removePrefix(base, 'https://') : startsWith(base, 'http://') ? 'ws://' + removePrefix(base, 'http://') : base;
    return authority + '/ws';
  }
}
//endregion
var SaypipEx_instance;
function SaypipEx_getInstance() {
  return SaypipEx_instance;
}
function onMessage($this, message) {
  var event = RealtimeEventParser_instance.tw(message);
  if (!(event == null)) {
    var tmp0_safe_receiver = $this.hna_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(event);
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
    this$0.gna_1 = true;
    var tmp0_safe_receiver = this$0.ina_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.gna_1 = false;
    var tmp0_safe_receiver = this$0.jna_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    return Unit_instance;
  };
}
function StreamClient$lambda_1(this$0) {
  return (it) => {
    var tmp0_safe_receiver = this$0.kna_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(it);
    return Unit_instance;
  };
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var RealtimeEventParser_instance;
function RealtimeEventParser_getInstance() {
  return RealtimeEventParser_instance;
}
var StreamEndpoint_instance;
function StreamEndpoint_getInstance() {
  return StreamEndpoint_instance;
}
function LifeCycleListener$onConnect$ref(p0) {
  return constructCallableReference(() => {
    p0.icp();
    return Unit_instance;
  }, 0, 0, 104, 'onConnect', [p0]);
}
function LifeCycleListener$onDisconnect$ref(p0) {
  return constructCallableReference(() => {
    p0.jcp();
    return Unit_instance;
  }, 0, 0, 105, 'onDisconnect', [p0]);
}
function LifeCycleListener$onError$ref(p0) {
  return constructCallableReference((p0_0) => {
    p0.z8s(p0_0);
    return Unit_instance;
  }, 1, 0, 106, 'onError', [p0]);
}
function RoomStreamListener$onEvent$ref(p0) {
  return constructCallableReference((p0_0) => {
    p0.anb(p0_0);
    return Unit_instance;
  }, 1, 0, 107, 'onEvent', [p0]);
}
function get_presentsHandshakeHeader() {
  return presentsHandshakeHeader;
}
var presentsHandshakeHeader;
//region block: post-declaration
initMetadataForObject(SaypipEx, 'SaypipEx');
initMetadataForClass(StreamClient, 'StreamClient', VOID, VOID, VOID, [0]);
initMetadataForClass(StreamResourceImpl, 'StreamResourceImpl');
initMetadataForCompanion(Companion);
protoOf($serializer).h1c = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Envelope, 'Envelope', Envelope, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForObject(RealtimeEventParser, 'RealtimeEventParser');
initMetadataForClass(RoomStreamImpl, 'RoomStreamImpl', VOID, VOID, VOID, [0]);
initMetadataForObject(StreamEndpoint, 'StreamEndpoint');
//endregion
//region block: init
SaypipEx_instance = new SaypipEx();
Companion_instance = new Companion();
RealtimeEventParser_instance = new RealtimeEventParser();
StreamEndpoint_instance = new StreamEndpoint();
presentsHandshakeHeader = false;
//endregion
//region block: exports
export {
  SaypipEx_instance as SaypipEx_instancewuofn6vdl6pl,
};
//endregion

//# sourceMappingURL=ksaypip-stream.mjs.map
