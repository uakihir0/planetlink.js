import {
  SocialActionType_GetUserMe_getInstancem5qnhu6wsc9l as SocialActionType_GetUserMe_getInstance,
  SocialActionType_GetUser_getInstance1eqtztoofvbn2 as SocialActionType_GetUser_getInstance,
  SocialActionType_GetComment_getInstance1mrz3s6061ic1 as SocialActionType_GetComment_getInstance,
  SocialActionType_PostComment_getInstance2jy368igvis59 as SocialActionType_PostComment_getInstance,
  SocialActionType_DeleteComment_getInstance3d7iaqed9ut5e as SocialActionType_DeleteComment_getInstance,
  SocialActionType_ReactionComment_getInstanceelb2ed78wb2s as SocialActionType_ReactionComment_getInstance,
  SocialActionType_UnreactionComment_getInstance3htv22d4doymt as SocialActionType_UnreactionComment_getInstance,
  SocialActionType_GetSpaces_getInstance370lqnr90k4ey as SocialActionType_GetSpaces_getInstance,
  SocialActionType_GetChannels_getInstance1zma4hgyr9xsm as SocialActionType_GetChannels_getInstance,
  TimeLineActionType_ChannelTimeLine_getInstance3qqy20s6cbpv8 as TimeLineActionType_ChannelTimeLine_getInstance,
  TimeLineActionType_MessageTimeLine_getInstancejme2rkhk4786 as TimeLineActionType_MessageTimeLine_getInstance,
  MessageActionType_GetMessageThread_getInstance2iq3yy02dnrb9 as MessageActionType_GetMessageThread_getInstance,
  MessageActionType_GetMessageTimeLine_getInstance31st3vvbc1ow4 as MessageActionType_GetMessageTimeLine_getInstance,
  MessageActionType_PostMessage_getInstancekv5z26pzjs65 as MessageActionType_PostMessage_getInstance,
  StreamActionType_HomeTimeLineStream_getInstance30nrs939d5l98 as StreamActionType_HomeTimeLineStream_getInstance,
  Capabilities2qd6jvjbzaj20 as Capabilities,
  AccountActionImpl361xdkwunj7o0 as AccountActionImpl,
  ID2o215ga1eida7 as ID,
  _ID___get_value__impl__eg5m2ie3lcyxr57g8x as _ID___get_value__impl__eg5m2i,
  NotSupportedExceptiong4ra4o05t757 as NotSupportedException,
  ExceptionHandler_instance11ejr1nu1he7w as ExceptionHandler_instance,
  ServiceType_Discord_getInstance73qzkromqbva as ServiceType_Discord_getInstance,
  SocialHubException1w6p5p0bvs9y4 as SocialHubException,
  Account19jxpwhhxxgsp as Account,
  Service2pf3oiz7nlfqt as Service,
  ServiceAuth24ibq9p2skqjm as ServiceAuth,
  _ID___init__impl__k1lb7e2ybobxhrzu1tp as _ID___init__impl__k1lb7e,
  Companion_instance2kww6ys1v6sky as Companion_instance,
  Pageable147sowwoeu4a1 as Pageable,
  Reactionbm6xc9haqokj as Reaction,
  Media11pnq4fncxvn3 as Media,
  MediaType_File_getInstance2zofgndt6e3ed as MediaType_File_getInstance,
  MediaType_Movie_getInstance1vsdwle8hngyn as MediaType_Movie_getInstance,
  MediaType_Image_getInstancej88zv1kosoy2 as MediaType_Image_getInstance,
  channelTimeLine$virtualSuspendBridge13o1ma58z8nfn as channelTimeLine$virtualSuspendBridge,
  messageTimeLine$virtualSuspendBridge1pt482np1wmvj as messageTimeLine$virtualSuspendBridge,
  RequestActionImpl3vvk9se0dtdby as RequestActionImpl,
  SerializedRequest315o241dfn885 as SerializedRequest,
  ID__toSerializedString_impl_rjdote3jdko22uish85 as ID__toSerializedString_impl_rjdote,
  CommentEvent2z13iradg9jkp as CommentEvent,
  UpdateCommentCallbackaq9d9fr7itqh as UpdateCommentCallback,
  IdentifyEvent1b6sya2yikwny as IdentifyEvent,
  DeleteCommentCallback2qbqiwxmroni5 as DeleteCommentCallback,
  ConnectCallback3747c0yh46i6w as ConnectCallback,
  DisconnectCallback2yv2bh7qqk0b9 as DisconnectCallback,
  ErrorCallbackuio9665cyarl as ErrorCallback,
  Channel3lcalgv7e2x9t as Channel,
  Comment15eejp77e2skt as Comment,
  CommentForm1j82mm6reaclz as CommentForm,
  Identify2wbv914ui5ljs as Identify,
  Pagingql9fhm2916f9 as Paging,
  Space1yqme66rtd0mp as Space,
  Stream347b07srqls21 as Stream,
  Thread2c16iw5axgbd0 as Thread,
  User6vplfeiqsy4v as User,
} from './planetlink-core.mjs';
import {
  setOf45ia9pnfhe90 as setOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  defineProp3ur6h3slcvq4x as defineProp,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  constructCallableReference23y65rf941mch as constructCallableReference,
  toList383f556t1dixk as toList,
  ArrayList3it5z8td81qkl as ArrayList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  copyToArray2j022khrow2yi as copyToArray,
  coerceAtMost322komnqp70ag as coerceAtMost,
  toString1pkumu07cwy4m as toString,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  Comparator2b3maoeh98xtg as Comparator,
  hashCodeq5arwsb9dgti as hashCode,
  compareValues1n2ayl87ihzfk as compareValues,
  sortedWith2csnbbb21k0lg as sortedWith,
  reversed22y3au42jl32b as reversed,
  joinToString1cxrrlmo0chqs as joinToString,
  emptyList1g2z5xcrvp2zy as emptyList,
  startsWith26w8qjqapeeq6 as startsWith,
  Companion_getInstance10dt578q09swj as Companion_getInstance,
  Exceptiondt2hlxn7j7vw as Exception,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  protoOf180f3jzyo7rfj as protoOf,
  toMutableList20rdgwi7d3cwi as toMutableList,
  mutableListOf6oorvk2mtdmp as mutableListOf,
  first58ocm7j58k3q as first,
  last1vo29oleiqj36 as last,
  promisify1z0ncraq1ipzh as promisify,
  await335x4cz7ixnm4 as await_0,
} from './kotlin-kotlin-stdlib.mjs';
import {
  DiscordExceptionnp2qbxqrxo3j as DiscordException,
  getMe$virtualSuspendBridge27cl7ii7ck11p as getMe$virtualSuspendBridge,
  getUser$virtualSuspendBridgegwrypqw6mq8u as getUser$virtualSuspendBridge,
  MessagesListRequest38ydn8r2soy24 as MessagesListRequest,
  list$virtualSuspendBridge3pl57unwu269e as list$virtualSuspendBridge,
  get$virtualSuspendBridge2k7sxco6u9ti3 as get$virtualSuspendBridge,
  MessagesCreateRequest1fhrrw0zx8m3i as MessagesCreateRequest,
  FileContent1tuydl9ecixp as FileContent,
  create$virtualSuspendBridge2j43c2u5h6luz as create$virtualSuspendBridge,
  delete$virtualSuspendBridgea5radto9zeh9 as delete$virtualSuspendBridge,
  createReaction$virtualSuspendBridge12q3t5sxl0aau as createReaction$virtualSuspendBridge,
  deleteOwnReaction$virtualSuspendBridge2wp2bu1ajsloa as deleteOwnReaction$virtualSuspendBridge,
  GuildsListRequest178d5rb6mab99 as GuildsListRequest,
  getCurrentUserGuilds$virtualSuspendBridge3eea9sbzd46bu as getCurrentUserGuilds$virtualSuspendBridge,
  listGuildChannels$virtualSuspendBridge9md0f7raa08n as listGuildChannels$virtualSuspendBridge,
  listDmChannels$virtualSuspendBridgetjaorqljryvn as listDmChannels$virtualSuspendBridge,
  ChannelsCreateDmRequest2p716amj9fgu3 as ChannelsCreateDmRequest,
  createDm$virtualSuspendBridge3tro1elem6a02 as createDm$virtualSuspendBridge,
  DiscordFactory_instance3p8nhgq0sugqp as DiscordFactory_instance,
} from './kdiscord-core.mjs';
import {
  DiscordStreamFactory_instancef2itty9l1ska as DiscordStreamFactory_instance,
  onReady2foukhp3y1p9x as onReady,
  onGuildCreate2agim3jta719d as onGuildCreate,
  onPresenceUpdate2oawvv64c70ck as onPresenceUpdate,
  onUnknownEvent3tjmjxhxdg9a0 as onUnknownEvent,
  DiscordStreamListener170eqfdcih9sr as DiscordStreamListener,
  start$virtualSuspendBridge389d218087btr as start$virtualSuspendBridge,
} from './kdiscord-stream.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance_0 = this;
    this.CAPABILITIES = new Capabilities(setOf([SocialActionType_GetUserMe_getInstance(), SocialActionType_GetUser_getInstance(), SocialActionType_GetComment_getInstance(), SocialActionType_PostComment_getInstance(), SocialActionType_DeleteComment_getInstance(), SocialActionType_ReactionComment_getInstance(), SocialActionType_UnreactionComment_getInstance(), SocialActionType_GetSpaces_getInstance(), SocialActionType_GetChannels_getInstance(), TimeLineActionType_ChannelTimeLine_getInstance(), TimeLineActionType_MessageTimeLine_getInstance(), MessageActionType_GetMessageThread_getInstance(), MessageActionType_GetMessageTimeLine_getInstance(), MessageActionType_PostMessage_getInstance(), StreamActionType_HomeTimeLineStream_getInstance()]));
  }
  a8s() {
    return this.CAPABILITIES;
  }
}
class DiscordAction extends AccountActionImpl {
  constructor(account, auth) {
    Companion_getInstance_0();
    super(account);
    this.auth = auth;
    this.pl1_1 = new DiscordActionHelper(this);
  }
  c61() {
    return this.auth;
  }
  ql1() {
    return this.pl1_1;
  }
  *o2t($completion) {
    return yield* this.pl1_1.sl1($completion);
  }
  *w2w($completion) {
    var tmp0_elvis_lhs = this.me;
    return tmp0_elvis_lhs == null ? (yield* this.pl1_1.sl1($completion)) : tmp0_elvis_lhs;
  }
  *p2t(id, $completion) {
    return yield* this.pl1_1.tl1(id, $completion);
  }
  *x2v(id, paging, $completion) {
    var tmp = id.id;
    var tmp0 = ensureNotNull(tmp == null ? null : new ID(tmp)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_0 = _ID___get_value__impl__eg5m2i(tmp0);
      if (typeof tmp_0 === 'string') {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    return yield* this.pl1_1.hhx(tmp$ret$0, paging, $completion);
  }
  *j2w(id, paging, $completion) {
    var tmp = id.id;
    var tmp0 = ensureNotNull(tmp == null ? null : new ID(tmp)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_0 = _ID___get_value__impl__eg5m2i(tmp0);
      if (typeof tmp_0 === 'string') {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    return yield* this.pl1_1.hhx(tmp$ret$0, paging, $completion);
  }
  *y2u(id, $completion) {
    return yield* this.pl1_1.ul1(id, $completion);
  }
  *w2u(req, $completion) {
    yield* this.pl1_1.w2u(req, $completion);
    return Unit_instance;
  }
  *k2w(req, $completion) {
    yield* this.pl1_1.w2u(req, $completion);
    return Unit_instance;
  }
  *g2v(id, $completion) {
    yield* this.pl1_1.g2v(id, $completion);
    return Unit_instance;
  }
  *a2v(id, $completion) {
    yield* this.pl1_1.a2v(id, $completion);
    return Unit_instance;
  }
  *b2v(id, $completion) {
    yield* this.pl1_1.b2v(id, $completion);
    return Unit_instance;
  }
  *e2v(id, reaction, $completion) {
    yield* this.pl1_1.e2v(id, reaction, $completion);
    return Unit_instance;
  }
  *f2v(id, reaction, $completion) {
    yield* this.pl1_1.f2v(id, reaction, $completion);
    return Unit_instance;
  }
  *t2v(paging, $completion) {
    return yield* this.pl1_1.vl1(paging, $completion);
  }
  *v2v(id, paging, $completion) {
    var tmp = id.id;
    var tmp0 = ensureNotNull(tmp == null ? null : new ID(tmp)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_0 = _ID___get_value__impl__eg5m2i(tmp0);
      if (typeof tmp_0 === 'string') {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    return yield* this.pl1_1.wl1(tmp$ret$0, paging, $completion);
  }
  *h2w(paging, $completion) {
    return yield* this.pl1_1.h2w(paging, $completion);
  }
  *m2w(callback, $completion) {
    return this.pl1_1.xl1(callback);
  }
  *o2w(callback, $completion) {
    throw NotSupportedException.k3e('Discord has no REST/Gateway notification stream.');
  }
  capabilities() {
    return Companion_getInstance_0().CAPABILITIES;
  }
  request() {
    return new DiscordRequest(this.account);
  }
  yl1(user) {
    this.me = user;
  }
  *zl1(runner, $completion) {
    var tmp = ExceptionHandler_instance;
    var tmp_0 = ServiceType_Discord_getInstance();
    var tmp_1 = DiscordAction$proceed$lambda;
    return yield* tmp.r3k(tmp_0, tmp_1, DiscordAction$proceed$lambda_0, runner, $completion);
  }
  *al2(runner, $completion) {
    var tmp = ExceptionHandler_instance;
    var tmp_0 = ServiceType_Discord_getInstance();
    var tmp_1 = DiscordAction$proceedUnit$lambda;
    yield* tmp.t3k(tmp_0, tmp_1, DiscordAction$proceedUnit$lambda_0, runner, $completion);
    return Unit_instance;
  }
}
class Companion_0 {
  constructor() {
    this.el2_1 = '\uD83D\uDC4D';
    this.fl2_1 = 200;
  }
}
class DiscordActionHelper {
  constructor(action) {
    this.rl1_1 = action;
  }
  *sl1($completion) {
    return yield* this.rl1_1.zl1(DiscordActionHelper$fetchUserMe$slambda(this), $completion);
  }
  *tl1(id, $completion) {
    return yield* this.rl1_1.zl1(DiscordActionHelper$getUser$slambda(this, id), $completion);
  }
  *hhx(channelId, paging, $completion) {
    var userMe = yield* this.rl1_1.x2w($completion);
    return yield* this.rl1_1.zl1(DiscordActionHelper$getChannelTimeLine$slambda(paging, this, channelId, userMe), $completion);
  }
  *ul1(id, $completion) {
    var channelId = getChannelId(this, id);
    var userMe = yield* this.rl1_1.x2w($completion);
    return yield* this.rl1_1.zl1(DiscordActionHelper$getComment$slambda(this, channelId, id, userMe), $completion);
  }
  *w2u(req, $completion) {
    var channelId = yield* /*#__NOINLINE__*/resolveChannelId(this, req, $completion);
    yield* this.rl1_1.al2(DiscordActionHelper$postComment$slambda(this, channelId, req), $completion);
    return Unit_instance;
  }
  *g2v(id, $completion) {
    var channelId = getChannelId(this, id);
    yield* this.rl1_1.al2(DiscordActionHelper$deleteComment$slambda(this, channelId, id), $completion);
    return Unit_instance;
  }
  *a2v(id, $completion) {
    yield* this.e2v(id, '\uD83D\uDC4D', $completion);
    return Unit_instance;
  }
  *b2v(id, $completion) {
    yield* this.f2v(id, '\uD83D\uDC4D', $completion);
    return Unit_instance;
  }
  *e2v(id, reaction, $completion) {
    var channelId = getChannelId(this, id);
    yield* this.rl1_1.al2(DiscordActionHelper$reactionComment$slambda(this, channelId, id, reaction), $completion);
    return Unit_instance;
  }
  *f2v(id, reaction, $completion) {
    var channelId = getChannelId(this, id);
    yield* this.rl1_1.al2(DiscordActionHelper$unreactionComment$slambda(this, channelId, id, reaction), $completion);
    return Unit_instance;
  }
  *vl1(paging, $completion) {
    return yield* this.rl1_1.zl1(DiscordActionHelper$fetchSpaces$slambda(paging, this), $completion);
  }
  *wl1(guildId, paging, $completion) {
    return yield* this.rl1_1.zl1(DiscordActionHelper$channels$slambda(this, guildId, paging), $completion);
  }
  *h2w(paging, $completion) {
    return yield* this.rl1_1.zl1(DiscordActionHelper$messageThread$slambda(this, paging), $completion);
  }
  xl1(callback) {
    var tmp0_safe_receiver = _get_auth__d3zq1v(this).apiHost;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = DiscordStreamFactory_instance.instanceWithApiHost(_get_auth__d3zq1v(this).accessor.token, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var kStream = tmp1_elvis_lhs == null ? DiscordStreamFactory_instance.instance(_get_auth__d3zq1v(this).accessor.token) : tmp1_elvis_lhs;
    kStream.addEventListener(new DiscordStreamListenerImpl(callback, _get_service__d270n8(this)));
    return new DiscordStream(kStream);
  }
}
class DiscordAccessor {
  constructor(discord, token) {
    this.discord = discord;
    this.token = token;
  }
  nl2() {
    return this.discord;
  }
  p73() {
    return this.token;
  }
}
class DiscordAuth {
  constructor(apiHost) {
    apiHost = apiHost === VOID ? null : apiHost;
    this.apiHost = apiHost;
    this.accessToken = null;
    this.ml2_1 = null;
  }
  y3a(_set____db54di) {
    this.apiHost = _set____db54di;
  }
  z3a() {
    return this.apiHost;
  }
  ya5(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  za5() {
    return this.accessToken;
  }
  getAccountWithToken(token) {
    this.accessToken = token;
    var tmp = this;
    var tmp0_safe_receiver = this.apiHost;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = DiscordFactory_instance.instanceWithApiHost(token, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.ml2_1 = new DiscordAccessor(tmp1_elvis_lhs == null ? DiscordFactory_instance.instance(token) : tmp1_elvis_lhs, token);
    // Inline function 'kotlin.also' call
    var this_0 = new Account();
    this_0.r36_1 = new DiscordAction(this_0, this);
    var tmp_1 = this_0;
    // Inline function 'kotlin.also' call
    var this_1 = new Service('discord', this_0);
    this_1.host = 'https://discord.com/';
    var tmp_2 = this_1;
    var tmp0_elvis_lhs = this.apiHost;
    tmp_2.apiHost = tmp0_elvis_lhs == null ? 'https://discord.com/api/v10' : tmp0_elvis_lhs;
    tmp_1.q36_1 = this_1;
    return this_0;
  }
  t2y() {
    var tmp0 = this.ml2_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Discord accessor is not initialized.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  get accessor() {
    return this.t2y();
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.ol2_1 = function_0;
  }
  pj(a, b) {
    return this.ol2_1(a, b);
  }
  compare(a, b) {
    return this.pj(a, b);
  }
  c5() {
    return this.ol2_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.c5(), other.c5());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.c5());
  }
}
class DiscordMapper {
  gl2(user, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordUser.tl2(service);
    var tmp = this_0;
    var tmp0_elvis_lhs = user.id;
    tmp.id = _ID___init__impl__k1lb7e(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = user.globalName;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? user.username : tmp1_elvis_lhs;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp3_elvis_lhs = user.id;
      tmp_0 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    this_0.g36(tmp_0);
    this_0.username = user.username;
    this_0.discriminator = user.discriminator;
    var tmp_1 = this_0;
    var tmp4_elvis_lhs = user.bot;
    tmp_1.isBot = tmp4_elvis_lhs == null ? false : tmp4_elvis_lhs;
    var tmp5_safe_receiver = user.avatar;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver = user.id;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this_0.iconImageUrl = 'https://cdn.discordapp.com/avatars/' + tmp0_safe_receiver + '/' + tmp5_safe_receiver + '.png';
      }
    }
    return this_0;
  }
  il2(message, userMe, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordComment.ul2(service);
    var tmp = this_0;
    var tmp0_elvis_lhs = message.id;
    tmp.id = _ID___init__impl__k1lb7e(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    this_0.channelId = message.channelId;
    this_0.guildId = message.guildId;
    this_0.createAt = DiscordMapper_instance.vl2(message.timestamp);
    var tmp_0 = this_0;
    var tmp1_safe_receiver = message.author;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = DiscordMapper_instance.gl2(tmp1_safe_receiver, service);
    }
    tmp_0.user = tmp_1;
    var tmp_2 = this_0;
    var tmp_3 = Companion_instance;
    var tmp2_elvis_lhs = message.content;
    tmp_2.text = tmp_3.x3b(tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs);
    this_0.directMessage = message.guildId == null;
    this_0.medias = DiscordMapper_instance.wl2(message);
    this_0.a35(DiscordMapper_instance.xl2(message.reactions, userMe));
    return this_0;
  }
  hl2(messages, userMe, service, paging) {
    var model = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d2(collectionSizeOrDefault(messages, 10));
    var _iterator__ex2g4s = messages.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$2 = DiscordMapper_instance.il2(item, userMe, service);
      destination.e2(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = DiscordMapper$timeLine$lambda;
    var tmp$ret$4 = new sam$kotlin_Comparator$0(tmp);
    var tmp$ret$3 = sortedWith(destination, tmp$ret$4);
    model.e39(tmp$ret$3);
    model.c39(Companion_instance_3.fromPaging(paging));
    return model;
  }
  yl2(guild, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordSpace.zl2(service);
    var tmp = this_0;
    var tmp0_elvis_lhs = guild.id;
    tmp.id = _ID___init__impl__k1lb7e(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    this_0.name = guild.name;
    this_0.description = guild.description;
    this_0.owner = guild.owner;
    this_0.approximateMemberCount = guild.approximateMemberCount;
    var tmp1_safe_receiver = guild.icon;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver = guild.id;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this_0.iconUrl = 'https://cdn.discordapp.com/icons/' + tmp0_safe_receiver + '/' + tmp1_safe_receiver + '.png';
      }
    }
    return this_0;
  }
  jl2(guilds, service, paging) {
    var model = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d2(collectionSizeOrDefault(guilds, 10));
    var _iterator__ex2g4s = guilds.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$2 = DiscordMapper_instance.yl2(item, service);
      destination.e2(tmp$ret$2);
    }
    model.e39(reversed(destination));
    model.c39(Companion_instance_3.fromPaging(paging));
    return model;
  }
  al3(channel, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordChannel.bl3(service);
    var tmp = this_0;
    var tmp0_elvis_lhs = channel.id;
    tmp.id = _ID___init__impl__k1lb7e(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    this_0.name = channel.name;
    this_0.description = channel.topic;
    this_0.topic = channel.topic;
    this_0.guildId = channel.guildId;
    this_0.type = channel.type;
    this_0.position = channel.position;
    this_0.isPublic = channel.type === 0;
    return this_0;
  }
  kl2(channels, service, paging) {
    var model = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d2(collectionSizeOrDefault(channels, 10));
    var _iterator__ex2g4s = channels.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$2 = DiscordMapper_instance.al3(item, service);
      destination.e2(tmp$ret$2);
    }
    model.e39(destination);
    model.c39(Companion_instance_3.fromPaging(paging));
    return model;
  }
  cl3(channel, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordThread.dl3(service);
    var tmp = this_0;
    var tmp0_elvis_lhs = channel.id;
    tmp.id = _ID___init__impl__k1lb7e(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    this_0.channelId = channel.id;
    var tmp_0 = this_0;
    var tmp1_elvis_lhs = channel.name;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = channel.recipients;
      var tmp_2;
      if (tmp2_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.collections.mapNotNull' call
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var destination = ArrayList.j2();
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp2_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp2_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs_0 = element.globalName;
          var tmp0_safe_receiver = tmp0_elvis_lhs_0 == null ? element.username : tmp0_elvis_lhs_0;
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            destination.e2(tmp0_safe_receiver);
          }
        }
        tmp_2 = destination;
      }
      var tmp3_safe_receiver = tmp_2;
      tmp_1 = tmp3_safe_receiver == null ? null : joinToString(tmp3_safe_receiver, ', ');
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    tmp_0.description = tmp_1;
    var tmp_3 = this_0;
    var tmp4_safe_receiver = channel.recipients;
    var tmp_4;
    if (tmp4_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList.d2(tmp4_safe_receiver.length);
      var inductionVariable_0 = 0;
      var last_0 = tmp4_safe_receiver.length;
      while (inductionVariable_0 < last_0) {
        var item = tmp4_safe_receiver[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$11 = DiscordMapper_instance.gl2(item, service);
        destination_0.e2(tmp$ret$11);
      }
      tmp_4 = destination_0;
    }
    tmp_3.users = tmp_4;
    return this_0;
  }
  ll2(channels, service, paging) {
    var model = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d2(collectionSizeOrDefault(channels, 10));
    var _iterator__ex2g4s = channels.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$2 = DiscordMapper_instance.cl3(item, service);
      destination.e2(tmp$ret$2);
    }
    model.e39(destination);
    model.c39(Companion_instance_3.fromPaging(paging));
    return model;
  }
  xl2(reactions, userMe) {
    var tmp;
    if (reactions == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d2(reactions.length);
      var inductionVariable = 0;
      var last = reactions.length;
      while (inductionVariable < last) {
        var item = reactions[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.also' call
        var this_0 = new Reaction();
        var emoji = item.emoji;
        var tmp_0 = this_0;
        tmp_0.name = emoji == null ? null : emoji.name;
        this_0.count = item.count;
        var tmp_1 = this_0;
        var tmp1_elvis_lhs = item.me;
        tmp_1.reacting = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        if (!((emoji == null ? null : emoji.id) == null)) {
          var ext = emoji.animated === true ? 'gif' : 'png';
          this_0.iconUrl = 'https://cdn.discordapp.com/emojis/' + emoji.id + '.' + ext;
        } else {
          var tmp_2 = this_0;
          tmp_2.emoji = emoji == null ? null : emoji.name;
        }
        destination.e2(this_0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs_0 = tmp;
    return tmp1_elvis_lhs_0 == null ? emptyList() : tmp1_elvis_lhs_0;
  }
  wl2(message) {
    var tmp0_safe_receiver = message.attachments;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d2(tmp0_safe_receiver.length);
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.length;
      while (inductionVariable < last) {
        var item = tmp0_safe_receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$2 = DiscordMapper_instance.el3(item);
        destination.e2(tmp$ret$2);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  }
  el3(attachment) {
    // Inline function 'kotlin.also' call
    var this_0 = new Media();
    this_0.sourceUrl = attachment.url;
    var tmp = this_0;
    var tmp0_elvis_lhs = attachment.proxyUrl;
    tmp.previewUrl = tmp0_elvis_lhs == null ? attachment.url : tmp0_elvis_lhs;
    var tmp_0 = this_0;
    var tmp_1;
    var tmp1_safe_receiver = attachment.contentType;
    if ((tmp1_safe_receiver == null ? null : startsWith(tmp1_safe_receiver, 'image/')) === true) {
      tmp_1 = MediaType_Image_getInstance();
    } else {
      var tmp2_safe_receiver = attachment.contentType;
      if ((tmp2_safe_receiver == null ? null : startsWith(tmp2_safe_receiver, 'video/')) === true) {
        tmp_1 = MediaType_Movie_getInstance();
      } else {
        tmp_1 = MediaType_File_getInstance();
      }
    }
    tmp_0.type = tmp_1;
    return this_0;
  }
  vl2(timestamp) {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (timestamp == null || charSequenceLength(timestamp) === 0)
      return null;
    var tmp;
    try {
      tmp = Companion_getInstance().wu(timestamp);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
}
class DiscordRequest extends RequestActionImpl {
  channelTimeLine(id) {
    var tmp = TimeLineActionType_ChannelTimeLine_getInstance();
    var tmp_0 = DiscordRequest$channelTimeLine$slambda(this, id);
    var tmp_1 = SerializedRequest.u2x(TimeLineActionType_ChannelTimeLine_getInstance());
    var tmp_2 = id.id;
    var request = this.x2x(tmp, tmp_0, tmp_1.add('id', ID__toSerializedString_impl_rjdote(ensureNotNull(tmp_2 == null ? null : new ID(tmp_2)).w2x_1)));
    var tmp_3 = request.commentFrom();
    var tmp_4 = id.id;
    var tmp0 = ensureNotNull(tmp_4 == null ? null : new ID(tmp_4)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_5 = _ID___get_value__impl__eg5m2i(tmp0);
      if (!(tmp_5 == null)) {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_3.addParam('channel', tmp$ret$0);
    return request;
  }
  messageTimeLine(id) {
    var tmp = TimeLineActionType_MessageTimeLine_getInstance();
    var tmp_0 = DiscordRequest$messageTimeLine$slambda(this, id);
    var tmp_1 = SerializedRequest.u2x(TimeLineActionType_MessageTimeLine_getInstance());
    var tmp_2 = id.id;
    var request = this.x2x(tmp, tmp_0, tmp_1.add('id', ID__toSerializedString_impl_rjdote(ensureNotNull(tmp_2 == null ? null : new ID(tmp_2)).w2x_1)));
    var tmp_3 = request.commentFrom();
    var tmp_4 = id.id;
    var tmp0 = ensureNotNull(tmp_4 == null ? null : new ID(tmp_4)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_5 = _ID___get_value__impl__eg5m2i(tmp0);
      if (!(tmp_5 == null)) {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_3.addParam('channel', tmp$ret$0).y2x(true);
    return request;
  }
}
class DiscordStreamListenerImpl {
  constructor(callback, service) {
    this.fl3_1 = callback;
    this.gl3_1 = service;
  }
  onMessageCreate(message) {
    var tmp = this.fl3_1;
    if (isInterface(tmp, UpdateCommentCallback)) {
      var comment = DiscordMapper_instance.il2(message, null, this.gl3_1);
      this.fl3_1.onUpdate(new CommentEvent(comment));
    }
  }
  onMessageUpdate(message) {
    var tmp = this.fl3_1;
    if (isInterface(tmp, UpdateCommentCallback)) {
      var comment = DiscordMapper_instance.il2(message, null, this.gl3_1);
      this.fl3_1.onUpdate(new CommentEvent(comment));
    }
  }
  onMessageDelete(event) {
    var tmp = this.fl3_1;
    if (isInterface(tmp, DeleteCommentCallback)) {
      var tmp0_safe_receiver = event.id;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this.fl3_1.onDelete(new IdentifyEvent(tmp0_safe_receiver));
      }
    }
  }
  onOpen() {
    var tmp = this.fl3_1;
    if (isInterface(tmp, ConnectCallback)) {
      this.fl3_1.onConnect();
    }
  }
  onClose() {
    var tmp = this.fl3_1;
    if (isInterface(tmp, DisconnectCallback)) {
      this.fl3_1.onDisconnect();
    }
  }
  onError(error) {
    var tmp = this.fl3_1;
    if (isInterface(tmp, ErrorCallback)) {
      this.fl3_1.onError(ExceptionHandler_instance.q3k(error, ServiceType_Discord_getInstance()));
    }
  }
}
class PlanetLinkEx {
  hl3(_this__u8e3s4, apiHost) {
    return new DiscordAuth(apiHost);
  }
  discord(_this__u8e3s4, apiHost, $super) {
    apiHost = apiHost === VOID ? null : apiHost;
    return $super === VOID ? this.hl3(_this__u8e3s4, apiHost) : $super.hl3.call(this, _this__u8e3s4, apiHost);
  }
}
class ServiceEx {
  il3(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'discord' === _this__u8e3s4.type.toLowerCase();
  }
}
class DiscordChannel extends Channel {
  constructor(service) {
    return new.target.bl3(service);
  }
  static bl3(service) {
    var $this = this.y36(service);
    $this.guildId = null;
    $this.type = null;
    $this.topic = null;
    $this.position = null;
    return $this;
  }
  ikp(_set____db54di) {
    this.guildId = _set____db54di;
  }
  jkp() {
    return this.guildId;
  }
  hkp(_set____db54di) {
    this.type = _set____db54di;
  }
  h38() {
    return this.type;
  }
  pew(_set____db54di) {
    this.topic = _set____db54di;
  }
  qew() {
    return this.topic;
  }
  kkp(_set____db54di) {
    this.position = _set____db54di;
  }
  lkp() {
    return this.position;
  }
}
class Companion_1 {
  constructor() {
    this.CHANNEL_KEY = 'channel';
  }
  xhy() {
    return this.CHANNEL_KEY;
  }
}
class DiscordComment extends Comment {
  constructor(service) {
    return new.target.ul2(service);
  }
  static ul2(service) {
    var $this = this.a34(service);
    $this.channelId = null;
    $this.guildId = null;
    $this.dl2_1 = null;
    return $this;
  }
  o9g(_set____db54di) {
    this.channelId = _set____db54di;
  }
  p9g() {
    return this.channelId;
  }
  ikp(_set____db54di) {
    this.guildId = _set____db54di;
  }
  jkp() {
    return this.guildId;
  }
  f35(_) {
  }
  g35() {
    var tmp0_elvis_lhs = this.channelId;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return '';
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ch = tmp;
    var tmp1_safe_receiver = this.id;
    var tmp_0;
    var tmp_1 = tmp1_safe_receiver;
    if ((tmp_1 == null ? null : new ID(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_2 = _ID___get_value__impl__eg5m2i(tmp1_safe_receiver);
        if (typeof tmp_2 === 'string') {
          tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp1_safe_receiver);
          break $l$block;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp_0 = tmp$ret$0;
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      return '';
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var msg = tmp_3;
    var tmp3_elvis_lhs = this.guildId;
    var guild = tmp3_elvis_lhs == null ? '@me' : tmp3_elvis_lhs;
    return 'https://discord.com/channels/' + guild + '/' + ch + '/' + msg;
  }
  a35(value) {
    this.dl2_1 = toMutableList(value);
  }
  b35() {
    var tmp0_elvis_lhs = this.dl2_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  }
  applyReaction(reaction) {
    if (this.dl2_1 == null) {
      this.dl2_1 = mutableListOf([reaction]);
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.find' call
    var tmp0 = ensureNotNull(this.dl2_1);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element.name == reaction.name) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var exist = tmp$ret$1;
    if (!(exist == null)) {
      if (reaction.reacting && !exist.reacting) {
        var tmp = exist;
        var tmp0_elvis_lhs = exist.count;
        tmp.count = (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) + 1 | 0;
        exist.reacting = true;
      }
      if (!reaction.reacting && exist.reacting) {
        var tmp_0 = exist;
        var tmp1_elvis_lhs = exist.count;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) - 1 | 0;
        tmp_0.count = Math.max(a, 0);
        exist.reacting = false;
      }
      return Unit_instance;
    }
    ensureNotNull(this.dl2_1).e2(reaction);
  }
  d35() {
    // Inline function 'kotlin.also' call
    var this_0 = new CommentForm();
    var tmp0_elvis_lhs = this.channelId;
    this_0.addParam('channel', tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    this_0.y2x(this.directMessage);
    this_0.z2x(this.id);
    return this_0;
  }
}
class DiscordIdentify extends Identify {
  constructor(service) {
    return new.target.jl3(service);
  }
  static jl3(service) {
    var $this = this.b2y(service);
    $this.channelId = null;
    return $this;
  }
  o9g(_set____db54di) {
    this.channelId = _set____db54di;
  }
  p9g() {
    return this.channelId;
  }
}
class Companion_2 {
  fromPaging(paging) {
    if (paging instanceof DiscordPaging) {
      return paging.copy();
    }
    var p = new DiscordPaging();
    if (!(paging == null)) {
      paging.copyTo(p);
    }
    return p;
  }
}
class DiscordPaging extends Paging {
  constructor() {
    super();
    this.before = null;
    this.after = null;
  }
  fko(_set____db54di) {
    this.before = _set____db54di;
  }
  ncx() {
    return this.before;
  }
  gko(_set____db54di) {
    this.after = _set____db54di;
  }
  pcx() {
    return this.after;
  }
  newPage(entities) {
    var newPage = new DiscordPaging();
    newPage.count = this.count;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!entities.j1()) {
      var tmp = newPage;
      var tmp0_safe_receiver = first(entities).id;
      var tmp_0;
      var tmp_1 = tmp0_safe_receiver;
      if ((tmp_1 == null ? null : new ID(tmp_1)) == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'work.socialhub.planetlink.model.ID.value' call
          var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
          if (typeof tmp_2 === 'string') {
            tmp$ret$1 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
            break $l$block;
          }
          throw IllegalStateException.o('Not supported type.');
        }
        tmp_0 = tmp$ret$1;
      }
      tmp.after = tmp_0;
    }
    return newPage;
  }
  pastPage(entities) {
    var pastPage = new DiscordPaging();
    pastPage.count = this.count;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!entities.j1()) {
      var tmp = pastPage;
      var tmp0_safe_receiver = last(entities).id;
      var tmp_0;
      var tmp_1 = tmp0_safe_receiver;
      if ((tmp_1 == null ? null : new ID(tmp_1)) == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'work.socialhub.planetlink.model.ID.value' call
          var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
          if (typeof tmp_2 === 'string') {
            tmp$ret$1 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
            break $l$block;
          }
          throw IllegalStateException.o('Not supported type.');
        }
        tmp_0 = tmp$ret$1;
      }
      tmp.before = tmp_0;
    }
    return pastPage;
  }
  setMarkPagingEnd(entities) {
    var tmp0_elvis_lhs = this.count;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var pageSize = tmp;
    if (this.isHasPast && pageSize > 0 && entities.l2() < pageSize && this.after == null) {
      this.isHasPast = false;
    }
  }
  copy() {
    var p = new DiscordPaging();
    this.copyTo(p);
    p.before = this.before;
    p.after = this.after;
    return p;
  }
}
class DiscordSpace extends Space {
  constructor(service) {
    return new.target.zl2(service);
  }
  static zl2(service) {
    var $this = this.c3b(service);
    $this.owner = null;
    $this.approximateMemberCount = null;
    return $this;
  }
  ykr(_set____db54di) {
    this.owner = _set____db54di;
  }
  w87() {
    return this.owner;
  }
  nks(_set____db54di) {
    this.approximateMemberCount = _set____db54di;
  }
  oks() {
    return this.approximateMemberCount;
  }
}
class DiscordStream {
  constructor(stream) {
    this.stream = stream;
    this.kl3_1 = false;
  }
  hbc() {
    return this.stream;
  }
  *g37($completion) {
    this.kl3_1 = true;
    yield* start$virtualSuspendBridge(this.stream, $completion);
    return Unit_instance;
  }
  open() {
    return promisify(($completion) => this.g37($completion));
  }
  *d3b($completion) {
    if (this.open === protoOf(DiscordStream).open)
      yield* this.g37($completion);
    else
      yield* await_0(this.open(), $completion);
    return Unit_instance;
  }
  close() {
    this.kl3_1 = false;
    this.stream.stop();
  }
  h37() {
    return this.stream.isConnected();
  }
  get isOpened() {
    return this.h37();
  }
}
class DiscordThread extends Thread {
  constructor(service) {
    return new.target.dl3(service);
  }
  static dl3(service) {
    var $this = this.e3b(service);
    $this.channelId = null;
    return $this;
  }
  o9g(_set____db54di) {
    this.channelId = _set____db54di;
  }
  p9g() {
    return this.channelId;
  }
}
class Companion_3 {
  constructor() {
    this.RECIPIENT_KEY = 'recipient';
  }
  ll3() {
    return this.RECIPIENT_KEY;
  }
}
class DiscordUser extends User {
  constructor(service) {
    return new.target.tl2(service);
  }
  static tl2(service) {
    var $this = this.v35(service);
    $this.username = null;
    $this.discriminator = null;
    $this.isBot = false;
    return $this;
  }
  ka2(_set____db54di) {
    this.username = _set____db54di;
  }
  la2() {
    return this.username;
  }
  dkv(_set____db54di) {
    this.discriminator = _set____db54di;
  }
  ekv() {
    return this.discriminator;
  }
  jaz(_set____db54di) {
    this.isBot = _set____db54di;
  }
  p9p() {
    return this.isBot;
  }
  f35(_) {
  }
  g35() {
    var tmp0_safe_receiver = this.id;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new ID(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_1 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
        if (typeof tmp_1 === 'string') {
          tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
          break $l$block;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      return '';
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var userId = tmp_2;
    return 'https://discord.com/users/' + userId;
  }
  h36() {
    var tmp0_elvis_lhs = this.username;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_safe_receiver = this.id;
      var tmp_0;
      var tmp_1 = tmp1_safe_receiver;
      if ((tmp_1 == null ? null : new ID(tmp_1)) == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'work.socialhub.planetlink.model.ID.value' call
          var tmp_2 = _ID___get_value__impl__eg5m2i(tmp1_safe_receiver);
          if (typeof tmp_2 === 'string') {
            tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp1_safe_receiver);
            break $l$block;
          }
          throw IllegalStateException.o('Not supported type.');
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  p36() {
    // Inline function 'kotlin.also' call
    var this_0 = new CommentForm();
    this_0.y2x(true);
    var tmp0_safe_receiver = this.id;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new ID(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_1 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
        if (typeof tmp_1 === 'string') {
          tmp$ret$2 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
          break $l$block;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp = tmp$ret$2;
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.addParam('recipient', tmp1_safe_receiver);
    }
    return this_0;
  }
}
//endregion
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion();
  return Companion_instance_0;
}
function DiscordAction$proceed$lambda(e) {
  var tmp0_safe_receiver = e instanceof DiscordException ? e : null;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ykl_1;
}
function DiscordAction$proceed$lambda_0(e) {
  var tmp0_safe_receiver = e instanceof DiscordException ? e : null;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zkl_1;
}
function DiscordAction$proceedUnit$lambda(e) {
  var tmp0_safe_receiver = e instanceof DiscordException ? e : null;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ykl_1;
}
function DiscordAction$proceedUnit$lambda_0(e) {
  var tmp0_safe_receiver = e instanceof DiscordException ? e : null;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zkl_1;
}
function _get_auth__d3zq1v($this) {
  return $this.rl1_1.auth;
}
function _get_service__d270n8($this) {
  return $this.rl1_1.account.service;
}
function getChannelId($this, id) {
  var tmp;
  if (id instanceof DiscordComment) {
    tmp = id.channelId;
  } else {
    if (id instanceof DiscordIdentify) {
      tmp = id.channelId;
    } else {
      tmp = null;
    }
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    throw SocialHubException.l3e('Channel id is required. Pass a DiscordComment or DiscordIdentify carrying channelId.');
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  return tmp_0;
}
function *resolveChannelId($this, req, $completion) {
  var tmp = req.params.v4('channel');
  var channelId = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
  // Inline function 'kotlin.text.isNullOrEmpty' call
  if (!(channelId == null || charSequenceLength(channelId) === 0))
    return channelId;
  var tmp_0 = req.params.v4('recipient');
  var recipientId = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : null;
  // Inline function 'kotlin.text.isNullOrEmpty' call
  if (!(recipientId == null || charSequenceLength(recipientId) === 0)) {
    return yield* $this.rl1_1.zl1(DiscordActionHelper$resolveChannelId$slambda($this, recipientId), $completion);
  }
  throw SocialHubException.l3e('Channel id is required. Provide params["channel"] or a recipient via User.messageForm.');
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
function DiscordActionHelper$fetchUserMe$slambda(this$0) {
  return constructCallableReference(function *($completion) {
    var response = yield* getMe$virtualSuspendBridge(_get_auth__d3zq1v(this$0).accessor.discord.users(), $completion);
    var user = DiscordMapper_instance.gl2(response.data, _get_service__d270n8(this$0));
    this$0.rl1_1.yl1(user);
    return user;
  }, 0);
}
function DiscordActionHelper$getUser$slambda(this$0, $id) {
  return constructCallableReference(function *($completion) {
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.users();
    var tmp_0 = $id.id;
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_1 = _ID___get_value__impl__eg5m2i(tmp0);
      if (typeof tmp_1 === 'string') {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    var response = yield* getUser$virtualSuspendBridge(tmp, tmp$ret$0, $completion);
    return DiscordMapper_instance.gl2(response.data, _get_service__d270n8(this$0));
  }, 0);
}
function DiscordActionHelper$getChannelTimeLine$slambda($paging, this$0, $channelId, $userMe) {
  return constructCallableReference(function *($completion) {
    var dp = Companion_instance_3.fromPaging($paging);
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.messages();
    // Inline function 'kotlin.also' call
    var this_0 = new MessagesListRequest($channelId);
    var tmp_0 = this_0;
    var tmp0_elvis_lhs = $paging.count;
    tmp_0.limit = tmp0_elvis_lhs == null ? 50 : tmp0_elvis_lhs;
    this_0.before = dp.before;
    this_0.after = dp.after;
    var response = yield* list$virtualSuspendBridge(tmp, this_0, $completion);
    return DiscordMapper_instance.hl2(toList(response.data), $userMe, _get_service__d270n8(this$0), $paging);
  }, 0);
}
function DiscordActionHelper$getComment$slambda(this$0, $channelId, $id, $userMe) {
  return constructCallableReference(function *($completion) {
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.messages();
    var tmp_0 = $id.id;
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_1 = _ID___get_value__impl__eg5m2i(tmp0);
      if (typeof tmp_1 === 'string') {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    var response = yield* get$virtualSuspendBridge(tmp, $channelId, tmp$ret$0, $completion);
    return DiscordMapper_instance.il2(response.data, $userMe, _get_service__d270n8(this$0));
  }, 0);
}
function DiscordActionHelper$postComment$slambda(this$0, $channelId, $req) {
  return constructCallableReference(function *($completion) {
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.messages();
    // Inline function 'kotlin.also' call
    var this_0 = new MessagesCreateRequest($channelId);
    this_0.content = $req.text;
    var tmp_0 = this_0;
    var tmp0_safe_receiver = $req.replyId;
    var tmp_1;
    var tmp_2 = tmp0_safe_receiver;
    if ((tmp_2 == null ? null : new ID(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_3 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
        if (typeof tmp_3 === 'string') {
          tmp$ret$2 = _ID___get_value__impl__eg5m2i(tmp0_safe_receiver);
          break $l$block;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp_1 = tmp$ret$2;
    }
    tmp_0.replyMessageId = tmp_1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$req.images.j1()) {
      var tmp_4 = this_0;
      // Inline function 'kotlin.collections.map' call
      var this_1 = $req.images;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d2(collectionSizeOrDefault(this_1, 10));
      var _iterator__ex2g4s = this_1.l1();
      while (_iterator__ex2g4s.m1()) {
        var item = _iterator__ex2g4s.n1();
        // Inline function 'kotlin.also' call
        var this_2 = new FileContent(item.name, item.data);
        this_2.description = item.description;
        destination.e2(this_2);
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_4.files = copyToArray(destination);
    }
    yield* create$virtualSuspendBridge(tmp, this_0, $completion);
    return Unit_instance;
  }, 0);
}
function DiscordActionHelper$deleteComment$slambda(this$0, $channelId, $id) {
  return constructCallableReference(function *($completion) {
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.messages();
    var tmp_0 = $id.id;
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_1 = _ID___get_value__impl__eg5m2i(tmp0);
      if (typeof tmp_1 === 'string') {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    yield* delete$virtualSuspendBridge(tmp, $channelId, tmp$ret$0, $completion);
    return Unit_instance;
  }, 0);
}
function DiscordActionHelper$reactionComment$slambda(this$0, $channelId, $id, $reaction) {
  return constructCallableReference(function *($completion) {
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.reactions();
    var tmp_0 = $id.id;
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_1 = _ID___get_value__impl__eg5m2i(tmp0);
      if (typeof tmp_1 === 'string') {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    yield* createReaction$virtualSuspendBridge(tmp, $channelId, tmp$ret$0, $reaction, $completion);
    return Unit_instance;
  }, 0);
}
function DiscordActionHelper$unreactionComment$slambda(this$0, $channelId, $id, $reaction) {
  return constructCallableReference(function *($completion) {
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.reactions();
    var tmp_0 = $id.id;
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).w2x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_1 = _ID___get_value__impl__eg5m2i(tmp0);
      if (typeof tmp_1 === 'string') {
        tmp$ret$0 = _ID___get_value__impl__eg5m2i(tmp0);
        break $l$block;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    yield* deleteOwnReaction$virtualSuspendBridge(tmp, $channelId, tmp$ret$0, $reaction, $completion);
    return Unit_instance;
  }, 0);
}
function DiscordActionHelper$fetchSpaces$slambda($paging, this$0) {
  return constructCallableReference(function *($completion) {
    var dp = Companion_instance_3.fromPaging($paging);
    var tmp0_elvis_lhs = $paging.count;
    var limit = coerceAtMost(tmp0_elvis_lhs == null ? 200 : tmp0_elvis_lhs, 200);
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.guilds();
    // Inline function 'kotlin.also' call
    var this_0 = new GuildsListRequest();
    this_0.limit = limit;
    if (!(dp.after == null))
      this_0.after = dp.after;
    else
      this_0.before = dp.before;
    var response = yield* getCurrentUserGuilds$virtualSuspendBridge(tmp, this_0, $completion);
    dp.count = limit;
    return DiscordMapper_instance.jl2(toList(response.data), _get_service__d270n8(this$0), dp);
  }, 0);
}
function DiscordActionHelper$channels$slambda(this$0, $guildId, $paging) {
  return constructCallableReference(function *($completion) {
    var response = yield* listGuildChannels$virtualSuspendBridge(_get_auth__d3zq1v(this$0).accessor.discord.guilds(), $guildId, $completion);
    return DiscordMapper_instance.kl2(toList(response.data), _get_service__d270n8(this$0), $paging);
  }, 0);
}
function DiscordActionHelper$messageThread$slambda(this$0, $paging) {
  return constructCallableReference(function *($completion) {
    var response = yield* listDmChannels$virtualSuspendBridge(_get_auth__d3zq1v(this$0).accessor.discord.channels(), $completion);
    return DiscordMapper_instance.ll2(toList(response.data), _get_service__d270n8(this$0), $paging);
  }, 0);
}
function DiscordActionHelper$resolveChannelId$slambda(this$0, $recipientId) {
  return constructCallableReference(function *($completion) {
    var response = yield* createDm$virtualSuspendBridge(_get_auth__d3zq1v(this$0).accessor.discord.channels(), new ChannelsCreateDmRequest($recipientId), $completion);
    var tmp0_elvis_lhs = response.data.id;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SocialHubException.l3e('Failed to open DM channel for recipient ' + $recipientId + '.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }, 0);
}
function DiscordMapper$timeLine$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = b.createAt;
  var tmp$ret$2 = a.createAt;
  return compareValues(tmp, tmp$ret$2);
}
var DiscordMapper_instance;
function DiscordMapper_getInstance() {
  return DiscordMapper_instance;
}
function DiscordRequest$channelTimeLine$slambda(this$0, $id) {
  return constructCallableReference(function *(paging, $completion) {
    return yield* channelTimeLine$virtualSuspendBridge(this$0.account.action, $id, paging, $completion);
  }, 1);
}
function DiscordRequest$messageTimeLine$slambda(this$0, $id) {
  return constructCallableReference(function *(paging, $completion) {
    return yield* messageTimeLine$virtualSuspendBridge(this$0.account.action, $id, paging, $completion);
  }, 1);
}
var PlanetLinkEx_instance;
function PlanetLinkEx_getInstance() {
  return PlanetLinkEx_instance;
}
var ServiceEx_instance;
function ServiceEx_getInstance() {
  return ServiceEx_instance;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
var Companion_instance_3;
function Companion_getInstance_3() {
  return Companion_instance_3;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  return Companion_instance_4;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(DiscordAction, 'DiscordAction', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(DiscordActionHelper, 'DiscordActionHelper', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForClass(DiscordAccessor, 'DiscordAccessor');
initMetadataForClass(DiscordAuth, 'DiscordAuth', DiscordAuth, VOID, [ServiceAuth]);
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForObject(DiscordMapper, 'DiscordMapper');
initMetadataForClass(DiscordRequest, 'DiscordRequest');
protoOf(DiscordStreamListenerImpl).onReady = onReady;
protoOf(DiscordStreamListenerImpl).onGuildCreate = onGuildCreate;
protoOf(DiscordStreamListenerImpl).onPresenceUpdate = onPresenceUpdate;
protoOf(DiscordStreamListenerImpl).onUnknownEvent = onUnknownEvent;
initMetadataForClass(DiscordStreamListenerImpl, 'DiscordStreamListenerImpl', VOID, VOID, [DiscordStreamListener]);
initMetadataForObject(PlanetLinkEx, 'PlanetLinkEx');
initMetadataForObject(ServiceEx, 'ServiceEx');
initMetadataForClass(DiscordChannel, 'DiscordChannel');
initMetadataForCompanion(Companion_1);
initMetadataForClass(DiscordComment, 'DiscordComment');
initMetadataForClass(DiscordIdentify, 'DiscordIdentify');
initMetadataForCompanion(Companion_2);
initMetadataForClass(DiscordPaging, 'DiscordPaging', DiscordPaging);
initMetadataForClass(DiscordSpace, 'DiscordSpace');
initMetadataForClass(DiscordStream, 'DiscordStream', VOID, VOID, [Stream], [0]);
initMetadataForClass(DiscordThread, 'DiscordThread');
initMetadataForCompanion(Companion_3);
initMetadataForClass(DiscordUser, 'DiscordUser');
//endregion
//region block: init
Companion_instance_1 = new Companion_0();
DiscordMapper_instance = new DiscordMapper();
PlanetLinkEx_instance = new PlanetLinkEx();
ServiceEx_instance = new ServiceEx();
Companion_instance_2 = new Companion_1();
Companion_instance_3 = new Companion_2();
Companion_instance_4 = new Companion_3();
//endregion
//region block: exports
defineProp(DiscordAction, 'Companion', Companion_getInstance_0, VOID, true);
DiscordAuth.DiscordAccessor = DiscordAccessor;
var PlanetLinkEx_0 = {getInstance: PlanetLinkEx_getInstance};
var ServiceEx_0 = {getInstance: ServiceEx_getInstance};
defineProp(DiscordComment, 'Companion', Companion_getInstance_2, VOID, true);
defineProp(DiscordPaging, 'Companion', Companion_getInstance_3, VOID, true);
defineProp(DiscordUser, 'Companion', Companion_getInstance_4, VOID, true);
export {
  DiscordAction as DiscordAction,
  DiscordAuth as DiscordAuth,
  DiscordRequest as DiscordRequest,
  PlanetLinkEx_0 as PlanetLinkEx,
  ServiceEx_0 as ServiceEx,
  DiscordChannel as DiscordChannel,
  DiscordComment as DiscordComment,
  DiscordIdentify as DiscordIdentify,
  DiscordPaging as DiscordPaging,
  DiscordSpace as DiscordSpace,
  DiscordStream as DiscordStream,
  DiscordThread as DiscordThread,
  DiscordUser as DiscordUser,
};
//endregion

//# sourceMappingURL=planetlink-discord.mjs.map
