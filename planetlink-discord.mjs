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
  Companion_instance2kww6ys1v6sky as Companion_instance,
  AttributedItem3lxrbzrxkkmbd as AttributedItem,
  AttributedKind_PLAIN_getInstance1quawsi34268i as AttributedKind_PLAIN_getInstance,
  AttributedKind_ACCOUNT_getInstance3ib9absyg65lc as AttributedKind_ACCOUNT_getInstance,
  MediaType_File_getInstance2zofgndt6e3ed as MediaType_File_getInstance,
  MediaType_Image_getInstancej88zv1kosoy2 as MediaType_Image_getInstance,
  MediaType_Movie_getInstance1vsdwle8hngyn as MediaType_Movie_getInstance,
  _ID___init__impl__k1lb7e2ybobxhrzu1tp as _ID___init__impl__k1lb7e,
  Pageable147sowwoeu4a1 as Pageable,
  Reactionbm6xc9haqokj as Reaction,
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
  Media11pnq4fncxvn3 as Media,
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
  to2cs3ny02qtbcb as to,
  toMap1vec9topfei08 as toMap,
  Regexxgw0gjiagf4z as Regex,
  StringBuildermazzzhj6kkai as StringBuilder,
  isBlank1dvkhjjvox3p0 as isBlank,
  substringiqarkczpya5m as substring,
  substring3saq8ornu0luv as substring_0,
  toInt2q8uldh7sc951 as toInt,
  listOfNotNull2woi2boe01ub4 as listOfNotNull,
  joinToString1cxrrlmo0chqs as joinToString,
  emptyList1g2z5xcrvp2zy as emptyList,
  addAll1k27qatfgp3k5 as addAll,
  listOfNotNull1v4ggfackvuny as listOfNotNull_0,
  plus310ted5e4i90h as plus,
  Triple1vhi3d0dgpnjb as Triple,
  startsWith26w8qjqapeeq6 as startsWith,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  Comparator2b3maoeh98xtg as Comparator,
  hashCodeq5arwsb9dgti as hashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  compareValues1n2ayl87ihzfk as compareValues,
  sortedWith2csnbbb21k0lg as sortedWith,
  reversed22y3au42jl32b as reversed,
  toSet2orjxp16sotqu as toSet,
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
  ButtonComponent3i9z27akxdrzz as ButtonComponent,
  CheckboxGroupComponent3uq16ixkvdlhz as CheckboxGroupComponent,
  RadioGroupComponent3ps8tvcckcqz4 as RadioGroupComponent,
  LabelComponent2kiydhukp08yc as LabelComponent,
  FileComponentrs2lnhvllcg3 as FileComponent,
  MediaGalleryComponent3jr2tdyv2y969 as MediaGalleryComponent,
  ThumbnailComponent2wzerzbv7d7wu as ThumbnailComponent,
  TextDisplayComponent2czfr2izkcxac as TextDisplayComponent,
  ChannelSelectComponent3fiitqn8klle9 as ChannelSelectComponent,
  MentionableSelectComponent3je482ape8qbo as MentionableSelectComponent,
  RoleSelectComponentk9wzcq4n60t3 as RoleSelectComponent,
  UserSelectComponent3o2gnc1y4fewn as UserSelectComponent,
  TextInputComponentthw83fliz23p as TextInputComponent,
  StringSelectComponent22y0pb9in8odp as StringSelectComponent,
  ContainerComponent2ugfu1xgjmms7 as ContainerComponent,
  SectionComponentfrcfjkn9hu9k as SectionComponent,
  ActionRowComponenth7t5809lv6t0 as ActionRowComponent,
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
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance_0 = this;
    this.CAPABILITIES = new Capabilities(setOf([SocialActionType_GetUserMe_getInstance(), SocialActionType_GetUser_getInstance(), SocialActionType_GetComment_getInstance(), SocialActionType_PostComment_getInstance(), SocialActionType_DeleteComment_getInstance(), SocialActionType_ReactionComment_getInstance(), SocialActionType_UnreactionComment_getInstance(), SocialActionType_GetSpaces_getInstance(), SocialActionType_GetChannels_getInstance(), TimeLineActionType_ChannelTimeLine_getInstance(), TimeLineActionType_MessageTimeLine_getInstance(), MessageActionType_GetMessageThread_getInstance(), MessageActionType_GetMessageTimeLine_getInstance(), MessageActionType_PostMessage_getInstance(), StreamActionType_HomeTimeLineStream_getInstance()]));
  }
  b8w() {
    return this.CAPABILITIES;
  }
}
class DiscordAction extends AccountActionImpl {
  constructor(account, auth) {
    Companion_getInstance_0();
    super(account);
    this.auth = auth;
    this.tlk_1 = new DiscordActionHelper(this);
  }
  o61() {
    return this.auth;
  }
  ulk() {
    return this.tlk_1;
  }
  *w2t($completion) {
    return yield* this.tlk_1.wlk($completion);
  }
  *f2x($completion) {
    var tmp0_elvis_lhs = this.me;
    return tmp0_elvis_lhs == null ? (yield* this.tlk_1.wlk($completion)) : tmp0_elvis_lhs;
  }
  *x2t(id, $completion) {
    return yield* this.tlk_1.xlk(id, $completion);
  }
  *g2w(id, paging, $completion) {
    var tmp = id.id;
    var tmp0 = ensureNotNull(tmp == null ? null : new ID(tmp)).f2y_1;
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
    return yield* this.tlk_1.ti3(tmp$ret$0, paging, $completion);
  }
  *s2w(id, paging, $completion) {
    var tmp = id.id;
    var tmp0 = ensureNotNull(tmp == null ? null : new ID(tmp)).f2y_1;
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
    return yield* this.tlk_1.ti3(tmp$ret$0, paging, $completion);
  }
  *h2v(id, $completion) {
    return yield* this.tlk_1.ylk(id, $completion);
  }
  *f2v(req, $completion) {
    yield* this.tlk_1.f2v(req, $completion);
    return Unit_instance;
  }
  *t2w(req, $completion) {
    yield* this.tlk_1.f2v(req, $completion);
    return Unit_instance;
  }
  *p2v(id, $completion) {
    yield* this.tlk_1.p2v(id, $completion);
    return Unit_instance;
  }
  *j2v(id, $completion) {
    yield* this.tlk_1.j2v(id, $completion);
    return Unit_instance;
  }
  *k2v(id, $completion) {
    yield* this.tlk_1.k2v(id, $completion);
    return Unit_instance;
  }
  *n2v(id, reaction, $completion) {
    yield* this.tlk_1.n2v(id, reaction, $completion);
    return Unit_instance;
  }
  *o2v(id, reaction, $completion) {
    yield* this.tlk_1.o2v(id, reaction, $completion);
    return Unit_instance;
  }
  *c2w(paging, $completion) {
    return yield* this.tlk_1.zlk(paging, $completion);
  }
  *e2w(id, paging, $completion) {
    var tmp = id.id;
    var tmp0 = ensureNotNull(tmp == null ? null : new ID(tmp)).f2y_1;
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
    return yield* this.tlk_1.bll(tmp$ret$0, paging, $completion);
  }
  *q2w(paging, $completion) {
    return yield* this.tlk_1.q2w(paging, $completion);
  }
  *v2w(callback, $completion) {
    return this.tlk_1.cll(callback);
  }
  *x2w(callback, $completion) {
    throw NotSupportedException.t3e('Discord has no REST/Gateway notification stream.');
  }
  capabilities() {
    return Companion_getInstance_0().CAPABILITIES;
  }
  request() {
    return new DiscordRequest(this.account);
  }
  dll(user) {
    this.me = user;
  }
  *ell(runner, $completion) {
    var tmp = ExceptionHandler_instance;
    var tmp_0 = ServiceType_Discord_getInstance();
    var tmp_1 = DiscordAction$proceed$lambda;
    return yield* tmp.a3l(tmp_0, tmp_1, DiscordAction$proceed$lambda_0, runner, $completion);
  }
  *fll(runner, $completion) {
    var tmp = ExceptionHandler_instance;
    var tmp_0 = ServiceType_Discord_getInstance();
    var tmp_1 = DiscordAction$proceedUnit$lambda;
    yield* tmp.c3l(tmp_0, tmp_1, DiscordAction$proceedUnit$lambda_0, runner, $completion);
    return Unit_instance;
  }
}
class Companion_0 {
  constructor() {
    this.jll_1 = '\uD83D\uDC4D';
    this.kll_1 = 200;
  }
}
class DiscordActionHelper {
  constructor(action) {
    this.vlk_1 = action;
  }
  *wlk($completion) {
    return yield* this.vlk_1.ell(DiscordActionHelper$fetchUserMe$slambda(this), $completion);
  }
  *xlk(id, $completion) {
    return yield* this.vlk_1.ell(DiscordActionHelper$getUser$slambda(this, id), $completion);
  }
  *ti3(channelId, paging, $completion) {
    var userMe = yield* this.vlk_1.g2x($completion);
    return yield* this.vlk_1.ell(DiscordActionHelper$getChannelTimeLine$slambda(paging, this, channelId, userMe), $completion);
  }
  *ylk(id, $completion) {
    var channelId = getChannelId(this, id);
    var userMe = yield* this.vlk_1.g2x($completion);
    return yield* this.vlk_1.ell(DiscordActionHelper$getComment$slambda(this, channelId, id, userMe), $completion);
  }
  *f2v(req, $completion) {
    var channelId = yield* /*#__NOINLINE__*/resolveChannelId(this, req, $completion);
    yield* this.vlk_1.fll(DiscordActionHelper$postComment$slambda(this, channelId, req), $completion);
    return Unit_instance;
  }
  *p2v(id, $completion) {
    var channelId = getChannelId(this, id);
    yield* this.vlk_1.fll(DiscordActionHelper$deleteComment$slambda(this, channelId, id), $completion);
    return Unit_instance;
  }
  *j2v(id, $completion) {
    yield* this.n2v(id, '\uD83D\uDC4D', $completion);
    return Unit_instance;
  }
  *k2v(id, $completion) {
    yield* this.o2v(id, '\uD83D\uDC4D', $completion);
    return Unit_instance;
  }
  *n2v(id, reaction, $completion) {
    var channelId = getChannelId(this, id);
    yield* this.vlk_1.fll(DiscordActionHelper$reactionComment$slambda(this, channelId, id, reaction), $completion);
    return Unit_instance;
  }
  *o2v(id, reaction, $completion) {
    var channelId = getChannelId(this, id);
    yield* this.vlk_1.fll(DiscordActionHelper$unreactionComment$slambda(this, channelId, id, reaction), $completion);
    return Unit_instance;
  }
  *zlk(paging, $completion) {
    return yield* this.vlk_1.ell(DiscordActionHelper$fetchSpaces$slambda(paging, this), $completion);
  }
  *bll(guildId, paging, $completion) {
    return yield* this.vlk_1.ell(DiscordActionHelper$channels$slambda(this, guildId, paging), $completion);
  }
  *q2w(paging, $completion) {
    return yield* this.vlk_1.ell(DiscordActionHelper$messageThread$slambda(this, paging), $completion);
  }
  cll(callback) {
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
  tll() {
    return this.discord;
  }
  b75() {
    return this.token;
  }
}
class DiscordAuth {
  constructor(apiHost) {
    apiHost = apiHost === VOID ? null : apiHost;
    this.apiHost = apiHost;
    this.accessToken = null;
    this.sll_1 = null;
  }
  h3b(_set____db54di) {
    this.apiHost = _set____db54di;
  }
  i3b() {
    return this.apiHost;
  }
  oab(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  pab() {
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
    tmp.sll_1 = new DiscordAccessor(tmp1_elvis_lhs == null ? DiscordFactory_instance.instance(token) : tmp1_elvis_lhs, token);
    // Inline function 'kotlin.also' call
    var this_0 = new Account();
    this_0.a37_1 = new DiscordAction(this_0, this);
    var tmp_1 = this_0;
    // Inline function 'kotlin.also' call
    var this_1 = new Service('discord', this_0);
    this_1.host = 'https://discord.com/';
    var tmp_2 = this_1;
    var tmp0_elvis_lhs = this.apiHost;
    tmp_2.apiHost = tmp0_elvis_lhs == null ? 'https://discord.com/api/v10' : tmp0_elvis_lhs;
    tmp_1.z36_1 = this_1;
    return this_0;
  }
  c2z() {
    var tmp0 = this.sll_1;
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
    return this.c2z();
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.wll_1 = function_0;
  }
  sj(a, b) {
    return this.wll_1(a, b);
  }
  compare(a, b) {
    return this.sj(a, b);
  }
  c5() {
    return this.wll_1;
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
class DiscordMapper$attributedText$MentionInfo {
  constructor(displayName, id) {
    this.ull_1 = displayName;
    this.vll_1 = id;
  }
  toString() {
    return 'MentionInfo(displayName=' + this.ull_1 + ', id=' + this.vll_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.ull_1);
    result = imul(result, 31) + getStringHashCode(this.vll_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DiscordMapper$attributedText$MentionInfo))
      return false;
    if (!(this.ull_1 === other.ull_1))
      return false;
    if (!(this.vll_1 === other.vll_1))
      return false;
    return true;
  }
}
class DiscordMapper {
  constructor() {
    DiscordMapper_instance = this;
    var tmp = this;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '<@!?([0-9]+)>';
    tmp.lll_1 = Regex.ji(this_0);
  }
  mll(user, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordUser.blm(service);
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
    this_0.p36(tmp_0);
    this_0.username = user.username;
    this_0.discriminator = user.discriminator;
    var tmp_1 = this_0;
    var tmp4_elvis_lhs = user.bot;
    tmp_1.isBot = tmp4_elvis_lhs == null ? false : tmp4_elvis_lhs;
    this_0.flags = user.flags;
    this_0.publicFlags = user.publicFlags;
    var tmp_2 = this_0;
    var tmp5_safe_receiver = user.clan;
    var tmp_3;
    if (tmp5_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = primaryGuild(DiscordMapper_getInstance(), tmp5_safe_receiver);
    }
    tmp_2.clan = tmp_3;
    var tmp_4 = this_0;
    var tmp6_safe_receiver = user.primaryGuild;
    var tmp_5;
    if (tmp6_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_5 = primaryGuild(DiscordMapper_getInstance(), tmp6_safe_receiver);
    }
    tmp_4.primaryGuild = tmp_5;
    var tmp7_safe_receiver = user.avatar;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver = user.id;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this_0.iconImageUrl = 'https://cdn.discordapp.com/avatars/' + tmp0_safe_receiver + '/' + tmp7_safe_receiver + '.png';
      }
    }
    return this_0;
  }
  oll(message, userMe, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordComment.clm(service);
    var tmp = this_0;
    var tmp0_elvis_lhs = message.id;
    tmp.id = _ID___init__impl__k1lb7e(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    this_0.channelId = message.channelId;
    this_0.guildId = message.guildId;
    this_0.createAt = DiscordMapper_getInstance().dlm(message.timestamp);
    this_0.editedTimestamp = message.editedTimestamp;
    var tmp_0 = this_0;
    var tmp1_safe_receiver = message.author;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = DiscordMapper_getInstance().mll(tmp1_safe_receiver, service);
    }
    tmp_0.user = tmp_1;
    this_0.text = attributedText(DiscordMapper_getInstance(), message);
    this_0.directMessage = message.guildId == null;
    this_0.medias = DiscordMapper_getInstance().elm(message);
    this_0.j35(DiscordMapper_getInstance().flm(message.reactions, userMe));
    var tmp_2 = this_0;
    var tmp2_elvis_lhs = message.tts;
    tmp_2.tts = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
    var tmp_3 = this_0;
    var tmp3_elvis_lhs = message.mentionEveryone;
    tmp_3.mentionEveryone = tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
    var tmp_4 = this_0;
    var tmp4_safe_receiver = message.mentionRoles;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : toList(tmp4_safe_receiver);
    tmp_4.mentionRoleIds = tmp5_elvis_lhs == null ? emptyList() : tmp5_elvis_lhs;
    var tmp_5 = this_0;
    var tmp6_elvis_lhs = message.pinned;
    tmp_5.pinned = tmp6_elvis_lhs == null ? false : tmp6_elvis_lhs;
    this_0.webhookId = message.webhookId;
    this_0.messageType = message.type;
    this_0.messageFlags = message.flags;
    var tmp_6 = this_0;
    var tmp7_safe_receiver = message.embeds;
    var tmp_7;
    if (tmp7_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.h2(tmp7_safe_receiver.length);
      var inductionVariable = 0;
      var last = tmp7_safe_receiver.length;
      while (inductionVariable < last) {
        var item = tmp7_safe_receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$6 = DiscordMapper_getInstance().glm(item);
        destination.i2(tmp$ret$6);
      }
      tmp_7 = destination;
    }
    var tmp8_elvis_lhs = tmp_7;
    tmp_6.embeds = tmp8_elvis_lhs == null ? emptyList() : tmp8_elvis_lhs;
    var tmp_8 = this_0;
    var tmp9_safe_receiver = message.components;
    var tmp_9;
    if (tmp9_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList.h2(tmp9_safe_receiver.length);
      var inductionVariable_0 = 0;
      var last_0 = tmp9_safe_receiver.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = tmp9_safe_receiver[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$9 = DiscordMapper_getInstance().hlm(item_0);
        destination_0.i2(tmp$ret$9);
      }
      tmp_9 = destination_0;
    }
    var tmp10_elvis_lhs = tmp_9;
    tmp_8.components = tmp10_elvis_lhs == null ? emptyList() : tmp10_elvis_lhs;
    this_0.reactionDetails = DiscordMapper_getInstance().ilm(message.reactions);
    return this_0;
  }
  nll(messages, userMe, service, paging) {
    var model = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.h2(collectionSizeOrDefault(messages, 10));
    var _iterator__ex2g4s = messages.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$2 = DiscordMapper_getInstance().oll(item, userMe, service);
      destination.i2(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = DiscordMapper$timeLine$lambda;
    var tmp$ret$4 = new sam$kotlin_Comparator$0(tmp);
    var tmp$ret$3 = sortedWith(destination, tmp$ret$4);
    model.n39(tmp$ret$3);
    model.l39(Companion_instance_3.fromPaging(paging));
    return model;
  }
  jlm(guild, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordSpace.klm(service);
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
  pll(guilds, service, paging) {
    var model = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.h2(collectionSizeOrDefault(guilds, 10));
    var _iterator__ex2g4s = guilds.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$2 = DiscordMapper_getInstance().jlm(item, service);
      destination.i2(tmp$ret$2);
    }
    model.n39(reversed(destination));
    model.l39(Companion_instance_3.fromPaging(paging));
    return model;
  }
  llm(channel, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordChannel.mlm(service);
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
  qll(channels, service, paging) {
    var model = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.h2(collectionSizeOrDefault(channels, 10));
    var _iterator__ex2g4s = channels.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$2 = DiscordMapper_getInstance().llm(item, service);
      destination.i2(tmp$ret$2);
    }
    model.n39(destination);
    model.l39(Companion_instance_3.fromPaging(paging));
    return model;
  }
  nlm(channel, service) {
    // Inline function 'kotlin.apply' call
    var this_0 = DiscordThread.olm(service);
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
            destination.i2(tmp0_safe_receiver);
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
      var destination_0 = ArrayList.h2(tmp4_safe_receiver.length);
      var inductionVariable_0 = 0;
      var last_0 = tmp4_safe_receiver.length;
      while (inductionVariable_0 < last_0) {
        var item = tmp4_safe_receiver[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$11 = DiscordMapper_getInstance().mll(item, service);
        destination_0.i2(tmp$ret$11);
      }
      tmp_4 = destination_0;
    }
    tmp_3.users = tmp_4;
    return this_0;
  }
  rll(channels, service, paging) {
    var model = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.h2(collectionSizeOrDefault(channels, 10));
    var _iterator__ex2g4s = channels.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$2 = DiscordMapper_getInstance().nlm(item, service);
      destination.i2(tmp$ret$2);
    }
    model.n39(destination);
    model.l39(Companion_instance_3.fromPaging(paging));
    return model;
  }
  glm(source) {
    // Inline function 'kotlin.apply' call
    var this_0 = new DiscordEmbed();
    this_0.title = source.title;
    this_0.type = source.type;
    this_0.description = source.description;
    this_0.url = source.url;
    this_0.timestamp = source.timestamp;
    this_0.color = source.color;
    var tmp = this_0;
    var tmp0_safe_receiver = source.footer;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.apply' call
      var this_1 = new DiscordEmbedFooter();
      this_1.text = tmp0_safe_receiver.text;
      this_1.iconUrl = tmp0_safe_receiver.iconUrl;
      this_1.proxyIconUrl = tmp0_safe_receiver.proxyIconUrl;
      tmp_0 = this_1;
    }
    tmp.footer = tmp_0;
    var tmp_1 = this_0;
    var tmp1_safe_receiver = source.image;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = embedMedia(DiscordMapper_getInstance(), tmp1_safe_receiver, MediaType_Image_getInstance());
    }
    tmp_1.image = tmp_2;
    var tmp_3 = this_0;
    var tmp2_safe_receiver = source.thumbnail;
    var tmp_4;
    if (tmp2_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_4 = embedMedia(DiscordMapper_getInstance(), tmp2_safe_receiver, MediaType_Image_getInstance());
    }
    tmp_3.thumbnail = tmp_4;
    var tmp_5 = this_0;
    var tmp3_safe_receiver = source.video;
    var tmp_6;
    if (tmp3_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_6 = embedMedia(DiscordMapper_getInstance(), tmp3_safe_receiver, MediaType_Movie_getInstance());
    }
    tmp_5.video = tmp_6;
    var tmp_7 = this_0;
    var tmp4_safe_receiver = source.provider;
    var tmp_8;
    if (tmp4_safe_receiver == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.apply' call
      var this_2 = new DiscordEmbedProvider();
      this_2.name = tmp4_safe_receiver.name;
      this_2.url = tmp4_safe_receiver.url;
      tmp_8 = this_2;
    }
    tmp_7.provider = tmp_8;
    var tmp_9 = this_0;
    var tmp5_safe_receiver = source.author;
    var tmp_10;
    if (tmp5_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.apply' call
      var this_3 = new DiscordEmbedAuthor();
      this_3.name = tmp5_safe_receiver.name;
      this_3.url = tmp5_safe_receiver.url;
      this_3.iconUrl = tmp5_safe_receiver.iconUrl;
      this_3.proxyIconUrl = tmp5_safe_receiver.proxyIconUrl;
      tmp_10 = this_3;
    }
    tmp_9.author = tmp_10;
    var tmp_11 = this_0;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = source.fields;
    var tmp_12;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp_12 = [];
    } else {
      tmp_12 = tmp0_elvis_lhs;
    }
    // Inline function 'kotlin.collections.map' call
    var this_4 = tmp_12;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.h2(this_4.length);
    var inductionVariable = 0;
    var last = this_4.length;
    while (inductionVariable < last) {
      var item = this_4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.apply' call
      var this_5 = new DiscordEmbedField();
      this_5.name = item.name;
      this_5.value = Companion_instance.g3c(item.value);
      var tmp_13 = this_5;
      var tmp0_elvis_lhs_0 = item.inline;
      tmp_13.inline = tmp0_elvis_lhs_0 == null ? false : tmp0_elvis_lhs_0;
      destination.i2(this_5);
    }
    tmp_11.fields = destination;
    this_0.contentScanVersion = source.contentScanVersion;
    return this_0;
  }
  hlm(source) {
    return component(this, source, false);
  }
  flm(reactions, userMe) {
    var tmp;
    if (reactions == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.h2(reactions.length);
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
        this_0.reacting = item.me === true || item.meBurst === true || item.burstMe === true;
        if (!((emoji == null ? null : emoji.id) == null)) {
          var ext = emoji.animated === true ? 'gif' : 'png';
          this_0.iconUrl = 'https://cdn.discordapp.com/emojis/' + emoji.id + '.' + ext;
        } else {
          var tmp_1 = this_0;
          tmp_1.emoji = emoji == null ? null : emoji.name;
        }
        destination.i2(this_0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  }
  ilm(reactions) {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp;
    if (reactions == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = reactions;
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = tmp;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.h2(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.apply' call
      var this_1 = new DiscordReactionDetails();
      var tmp_0 = this_1;
      var tmp0_safe_receiver = item.emoji;
      tmp_0.name = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.name;
      var tmp_1 = this_1;
      var tmp1_safe_receiver = item.emoji;
      tmp_1.emojiId = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.id;
      var tmp_2 = this_1;
      var tmp2_safe_receiver = item.countDetails;
      tmp_2.normalCount = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.normal;
      var tmp_3 = this_1;
      var tmp3_safe_receiver = item.countDetails;
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.burst;
      tmp_3.burstCount = tmp4_elvis_lhs == null ? item.burstCount : tmp4_elvis_lhs;
      var tmp_4 = this_1;
      var tmp5_safe_receiver = item.burstColors;
      var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : toList(tmp5_safe_receiver);
      tmp_4.burstColors = tmp6_elvis_lhs == null ? emptyList() : tmp6_elvis_lhs;
      var tmp_5 = this_1;
      var tmp7_elvis_lhs = item.me;
      tmp_5.reactingNormally = tmp7_elvis_lhs == null ? false : tmp7_elvis_lhs;
      this_1.reactingWithBurst = item.meBurst === true || item.burstMe === true;
      destination.i2(this_1);
    }
    return destination;
  }
  elm(message) {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = message.attachments;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = tmp0_elvis_lhs;
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = tmp;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.h2(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$4 = DiscordMapper_getInstance().plm(item);
      destination.i2(tmp$ret$4);
    }
    var attachmentMedias = destination;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.h2(collectionSizeOrDefault(attachmentMedias, 10));
    var _iterator__ex2g4s = attachmentMedias.l1();
    while (_iterator__ex2g4s.m1()) {
      var item_0 = _iterator__ex2g4s.n1();
      var tmp$ret$7 = mediaLocationKey(DiscordMapper_getInstance(), item_0);
      destination_0.i2(tmp$ret$7);
    }
    var attachmentKeys = toSet(destination_0);
    // Inline function 'kotlin.collections.mutableListOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = ArrayList.j2();
    this_1.m2(attachmentMedias);
    var models = this_1;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs_0 = message.embeds;
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp_0 = [];
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = tmp_0;
    var inductionVariable_0 = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable_0 < last_0) {
      var element = indexedObject[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var tmp0_safe_receiver = element.image;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_1 = embedMedia(DiscordMapper_getInstance(), tmp0_safe_receiver, MediaType_Image_getInstance());
      }
      var tmp_2 = tmp_1;
      var tmp1_safe_receiver = element.thumbnail;
      var tmp_3;
      if (tmp1_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_3 = embedMedia(DiscordMapper_getInstance(), tmp1_safe_receiver, MediaType_Image_getInstance());
      }
      var tmp_4 = tmp_3;
      var tmp2_safe_receiver = element.video;
      var tmp_5;
      if (tmp2_safe_receiver == null) {
        tmp_5 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_5 = embedMedia(DiscordMapper_getInstance(), tmp2_safe_receiver, MediaType_Movie_getInstance());
      }
      // Inline function 'kotlin.collections.filterNot' call
      var tmp0 = listOfNotNull([tmp_2, tmp_4, tmp_5]);
      // Inline function 'kotlin.collections.filterNotTo' call
      var destination_1 = ArrayList.j2();
      var _iterator__ex2g4s_0 = tmp0.l1();
      while (_iterator__ex2g4s_0.m1()) {
        var element_0 = _iterator__ex2g4s_0.n1();
        if (!attachmentKeys.o2(mediaLocationKey(DiscordMapper_getInstance(), element_0))) {
          destination_1.i2(element_0);
        }
      }
      // Inline function 'kotlin.let' call
      models.m2(destination_1);
    }
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs_1 = message.components;
    var tmp_6;
    if (tmp0_elvis_lhs_1 == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp_6 = [];
    } else {
      tmp_6 = tmp0_elvis_lhs_1;
    }
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject_0 = tmp_6;
    var inductionVariable_1 = 0;
    var last_1 = indexedObject_0.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = indexedObject_0[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      collectComponentMedias(DiscordMapper_getInstance(), element_1, models);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList.j2();
    var _iterator__ex2g4s_1 = models.l1();
    while (_iterator__ex2g4s_1.m1()) {
      var element_2 = _iterator__ex2g4s_1.n1();
      if (!(element_2.sourceUrl == null) || !(element_2.previewUrl == null)) {
        destination_2.i2(element_2);
      }
    }
    return destination_2;
  }
  plm(attachment) {
    // Inline function 'kotlin.also' call
    var this_0 = new DiscordMedia();
    this_0.sourceUrl = attachment.url;
    var tmp = this_0;
    var tmp0_elvis_lhs = attachment.proxyUrl;
    tmp.previewUrl = tmp0_elvis_lhs == null ? attachment.url : tmp0_elvis_lhs;
    this_0.type = mediaType(DiscordMapper_getInstance(), attachment.contentType, MediaType_File_getInstance());
    this_0.width = attachment.width;
    this_0.height = attachment.height;
    this_0.description = attachment.description;
    this_0.contentType = attachment.contentType;
    var tmp_0 = this_0;
    var tmp1_safe_receiver = attachment.filename;
    tmp_0.spoiler = (tmp1_safe_receiver == null ? null : startsWith(tmp1_safe_receiver, 'SPOILER_')) === true;
    this_0.attachmentId = attachment.id;
    return this_0;
  }
  dlm(timestamp) {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (timestamp == null || charSequenceLength(timestamp) === 0)
      return null;
    var tmp;
    try {
      tmp = Companion_getInstance().zu(timestamp);
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
    var tmp_1 = SerializedRequest.d2y(TimeLineActionType_ChannelTimeLine_getInstance());
    var tmp_2 = id.id;
    var request = this.g2y(tmp, tmp_0, tmp_1.add('id', ID__toSerializedString_impl_rjdote(ensureNotNull(tmp_2 == null ? null : new ID(tmp_2)).f2y_1)));
    var tmp_3 = request.commentFrom();
    var tmp_4 = id.id;
    var tmp0 = ensureNotNull(tmp_4 == null ? null : new ID(tmp_4)).f2y_1;
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
    var tmp_1 = SerializedRequest.d2y(TimeLineActionType_MessageTimeLine_getInstance());
    var tmp_2 = id.id;
    var request = this.g2y(tmp, tmp_0, tmp_1.add('id', ID__toSerializedString_impl_rjdote(ensureNotNull(tmp_2 == null ? null : new ID(tmp_2)).f2y_1)));
    var tmp_3 = request.commentFrom();
    var tmp_4 = id.id;
    var tmp0 = ensureNotNull(tmp_4 == null ? null : new ID(tmp_4)).f2y_1;
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
    tmp_3.addParam('channel', tmp$ret$0).h2y(true);
    return request;
  }
}
class DiscordStreamListenerImpl {
  constructor(callback, service) {
    this.qlm_1 = callback;
    this.rlm_1 = service;
  }
  onMessageCreate(message) {
    var tmp = this.qlm_1;
    if (isInterface(tmp, UpdateCommentCallback)) {
      var comment = DiscordMapper_getInstance().oll(message, null, this.rlm_1);
      this.qlm_1.onUpdate(new CommentEvent(comment));
    }
  }
  onMessageUpdate(message) {
    var tmp = this.qlm_1;
    if (isInterface(tmp, UpdateCommentCallback)) {
      var comment = DiscordMapper_getInstance().oll(message, null, this.rlm_1);
      this.qlm_1.onUpdate(new CommentEvent(comment));
    }
  }
  onMessageDelete(event) {
    var tmp = this.qlm_1;
    if (isInterface(tmp, DeleteCommentCallback)) {
      var tmp0_safe_receiver = event.id;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this.qlm_1.onDelete(new IdentifyEvent(tmp0_safe_receiver));
      }
    }
  }
  onOpen() {
    var tmp = this.qlm_1;
    if (isInterface(tmp, ConnectCallback)) {
      this.qlm_1.onConnect();
    }
  }
  onClose() {
    var tmp = this.qlm_1;
    if (isInterface(tmp, DisconnectCallback)) {
      this.qlm_1.onDisconnect();
    }
  }
  onError(error) {
    var tmp = this.qlm_1;
    if (isInterface(tmp, ErrorCallback)) {
      this.qlm_1.onError(ExceptionHandler_instance.z3k(error, ServiceType_Discord_getInstance()));
    }
  }
}
class PlanetLinkEx {
  slm(_this__u8e3s4, apiHost) {
    return new DiscordAuth(apiHost);
  }
  discord(_this__u8e3s4, apiHost, $super) {
    apiHost = apiHost === VOID ? null : apiHost;
    return $super === VOID ? this.slm(_this__u8e3s4, apiHost) : $super.slm.call(this, _this__u8e3s4, apiHost);
  }
}
class ServiceEx {
  tlm(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'discord' === _this__u8e3s4.type.toLowerCase();
  }
}
class DiscordChannel extends Channel {
  constructor(service) {
    return new.target.mlm(service);
  }
  static mlm(service) {
    var $this = this.h37(service);
    $this.guildId = null;
    $this.type = null;
    $this.topic = null;
    $this.position = null;
    return $this;
  }
  kl0(_set____db54di) {
    this.guildId = _set____db54di;
  }
  ll0() {
    return this.guildId;
  }
  jl0(_set____db54di) {
    this.type = _set____db54di;
  }
  q38() {
    return this.type;
  }
  ef3(_set____db54di) {
    this.topic = _set____db54di;
  }
  ff3() {
    return this.topic;
  }
  ml0(_set____db54di) {
    this.position = _set____db54di;
  }
  nl0() {
    return this.position;
  }
}
class Companion_1 {
  constructor() {
    this.CHANNEL_KEY = 'channel';
  }
  ji5() {
    return this.CHANNEL_KEY;
  }
}
class DiscordComment extends Comment {
  constructor(service) {
    return new.target.clm(service);
  }
  static clm(service) {
    var $this = this.j34(service);
    $this.channelId = null;
    $this.guildId = null;
    $this.editedTimestamp = null;
    $this.tts = false;
    $this.mentionEveryone = false;
    var tmp = $this;
    // Inline function 'kotlin.collections.listOf' call
    tmp.mentionRoleIds = emptyList();
    $this.pinned = false;
    $this.webhookId = null;
    $this.messageType = null;
    $this.messageFlags = null;
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.listOf' call
    tmp_0.embeds = emptyList();
    var tmp_1 = $this;
    // Inline function 'kotlin.collections.listOf' call
    tmp_1.components = emptyList();
    var tmp_2 = $this;
    // Inline function 'kotlin.collections.listOf' call
    tmp_2.reactionDetails = emptyList();
    $this.ill_1 = null;
    return $this;
  }
  p9l(_set____db54di) {
    this.channelId = _set____db54di;
  }
  q9l() {
    return this.channelId;
  }
  kl0(_set____db54di) {
    this.guildId = _set____db54di;
  }
  ll0() {
    return this.guildId;
  }
  yl4(_set____db54di) {
    this.editedTimestamp = _set____db54di;
  }
  zl4() {
    return this.editedTimestamp;
  }
  ulm(_set____db54di) {
    this.tts = _set____db54di;
  }
  mkz() {
    return this.tts;
  }
  vlm(_set____db54di) {
    this.mentionEveryone = _set____db54di;
  }
  bl5() {
    return this.mentionEveryone;
  }
  wlm(_set____db54di) {
    this.mentionRoleIds = _set____db54di;
  }
  xlm() {
    return this.mentionRoleIds;
  }
  ylm(_set____db54di) {
    this.pinned = _set____db54di;
  }
  f7c() {
    return this.pinned;
  }
  maa(_set____db54di) {
    this.webhookId = _set____db54di;
  }
  naa() {
    return this.webhookId;
  }
  zlm(_set____db54di) {
    this.messageType = _set____db54di;
  }
  aln() {
    return this.messageType;
  }
  bln(_set____db54di) {
    this.messageFlags = _set____db54di;
  }
  cln() {
    return this.messageFlags;
  }
  dln(_set____db54di) {
    this.embeds = _set____db54di;
  }
  b7l() {
    return this.embeds;
  }
  eln(_set____db54di) {
    this.components = _set____db54di;
  }
  jl5() {
    return this.components;
  }
  fln(_set____db54di) {
    this.reactionDetails = _set____db54di;
  }
  gln() {
    return this.reactionDetails;
  }
  o35(_) {
  }
  p35() {
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
  j35(value) {
    this.ill_1 = toMutableList(value);
  }
  k35() {
    var tmp0_elvis_lhs = this.ill_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  }
  applyReaction(reaction) {
    if (this.ill_1 == null) {
      this.ill_1 = mutableListOf([reaction]);
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.find' call
    var tmp0 = ensureNotNull(this.ill_1);
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
    ensureNotNull(this.ill_1).i2(reaction);
  }
  m35() {
    // Inline function 'kotlin.also' call
    var this_0 = new CommentForm();
    var tmp0_elvis_lhs = this.channelId;
    this_0.addParam('channel', tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    this_0.h2y(this.directMessage);
    this_0.i2y(this.id);
    return this_0;
  }
}
class DiscordIdentify extends Identify {
  constructor(service) {
    return new.target.hln(service);
  }
  static hln(service) {
    var $this = this.k2y(service);
    $this.channelId = null;
    return $this;
  }
  p9l(_set____db54di) {
    this.channelId = _set____db54di;
  }
  q9l() {
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
  hkz(_set____db54di) {
    this.before = _set____db54di;
  }
  wd3() {
    return this.before;
  }
  ikz(_set____db54di) {
    this.after = _set____db54di;
  }
  yd3() {
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
class DiscordEmbed {
  constructor() {
    this.title = null;
    this.type = null;
    this.description = null;
    this.url = null;
    this.timestamp = null;
    this.color = null;
    this.footer = null;
    this.image = null;
    this.thumbnail = null;
    this.video = null;
    this.provider = null;
    this.author = null;
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    tmp.fields = emptyList();
    this.contentScanVersion = null;
  }
  kam(_set____db54di) {
    this.title = _set____db54di;
  }
  g3j() {
    return this.title;
  }
  d39(_set____db54di) {
    this.type = _set____db54di;
  }
  q38() {
    return this.type;
  }
  i37(_set____db54di) {
    this.description = _set____db54di;
  }
  s36() {
    return this.description;
  }
  g9o(_set____db54di) {
    this.url = _set____db54di;
  }
  s4n() {
    return this.url;
  }
  af6(_set____db54di) {
    this.timestamp = _set____db54di;
  }
  zd9() {
    return this.timestamp;
  }
  gl1(_set____db54di) {
    this.color = _set____db54di;
  }
  hai() {
    return this.color;
  }
  iln(_set____db54di) {
    this.footer = _set____db54di;
  }
  sgb() {
    return this.footer;
  }
  jln(_set____db54di) {
    this.image = _set____db54di;
  }
  f7h() {
    return this.image;
  }
  kln(_set____db54di) {
    this.thumbnail = _set____db54di;
  }
  j3j() {
    return this.thumbnail;
  }
  lln(_set____db54di) {
    this.video = _set____db54di;
  }
  a7m() {
    return this.video;
  }
  mln(_set____db54di) {
    this.provider = _set____db54di;
  }
  ml1() {
    return this.provider;
  }
  nln(_set____db54di) {
    this.author = _set____db54di;
  }
  q7k() {
    return this.author;
  }
  oln(_set____db54di) {
    this.fields = _set____db54di;
  }
  z9t() {
    return this.fields;
  }
  pl1(_set____db54di) {
    this.contentScanVersion = _set____db54di;
  }
  ql1() {
    return this.contentScanVersion;
  }
}
class DiscordEmbedFooter {
  constructor() {
    this.text = null;
    this.iconUrl = null;
    this.proxyIconUrl = null;
  }
  z3h(_set____db54di) {
    this.text = _set____db54di;
  }
  u34() {
    return this.text;
  }
  s3a(_set____db54di) {
    this.iconUrl = _set____db54di;
  }
  t3a() {
    return this.iconUrl;
  }
  ul1(_set____db54di) {
    this.proxyIconUrl = _set____db54di;
  }
  vl1() {
    return this.proxyIconUrl;
  }
}
class DiscordEmbedProvider {
  constructor() {
    this.name = null;
    this.url = null;
  }
  e37(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  g9o(_set____db54di) {
    this.url = _set____db54di;
  }
  s4n() {
    return this.url;
  }
}
class DiscordEmbedAuthor {
  constructor() {
    this.name = null;
    this.url = null;
    this.iconUrl = null;
    this.proxyIconUrl = null;
  }
  e37(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  g9o(_set____db54di) {
    this.url = _set____db54di;
  }
  s4n() {
    return this.url;
  }
  s3a(_set____db54di) {
    this.iconUrl = _set____db54di;
  }
  t3a() {
    return this.iconUrl;
  }
  ul1(_set____db54di) {
    this.proxyIconUrl = _set____db54di;
  }
  vl1() {
    return this.proxyIconUrl;
  }
}
class DiscordEmbedField {
  constructor() {
    this.name = null;
    this.value = null;
    this.inline = false;
  }
  e37(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  d3c(_set____db54di) {
    this.value = _set____db54di;
  }
  d3() {
    return this.value;
  }
  pln(_set____db54di) {
    this.inline = _set____db54di;
  }
  ll2() {
    return this.inline;
  }
}
class DiscordMessageComponent {
  constructor() {
    this.type = null;
    this.id = null;
    this.text = null;
    this.url = null;
    this.disabled = false;
    this.spoiler = false;
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    tmp.medias = emptyList();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.listOf' call
    tmp_0.children = emptyList();
  }
  jl0(_set____db54di) {
    this.type = _set____db54di;
  }
  q38() {
    return this.type;
  }
  q3k(_set____db54di) {
    this.id = _set____db54di;
  }
  p3f() {
    return this.id;
  }
  t34(_set____db54di) {
    this.text = _set____db54di;
  }
  u34() {
    return this.text;
  }
  g9o(_set____db54di) {
    this.url = _set____db54di;
  }
  s4n() {
    return this.url;
  }
  qln(_set____db54di) {
    this.disabled = _set____db54di;
  }
  ml6() {
    return this.disabled;
  }
  rln(_set____db54di) {
    this.spoiler = _set____db54di;
  }
  cl9() {
    return this.spoiler;
  }
  z34(_set____db54di) {
    this.medias = _set____db54di;
  }
  a35() {
    return this.medias;
  }
  sln(_set____db54di) {
    this.children = _set____db54di;
  }
  tln() {
    return this.children;
  }
}
class DiscordMedia extends Media {
  constructor() {
    super();
    this.contentType = null;
    this.placeholder = null;
    this.placeholderVersion = null;
    this.spoiler = false;
    this.attachmentId = null;
  }
  mjs(_set____db54di) {
    this.contentType = _set____db54di;
  }
  i4b() {
    return this.contentType;
  }
  ogy(_set____db54di) {
    this.placeholder = _set____db54di;
  }
  rgr() {
    return this.placeholder;
  }
  zl1(_set____db54di) {
    this.placeholderVersion = _set____db54di;
  }
  al2() {
    return this.placeholderVersion;
  }
  rln(_set____db54di) {
    this.spoiler = _set____db54di;
  }
  cl9() {
    return this.spoiler;
  }
  klc(_set____db54di) {
    this.attachmentId = _set____db54di;
  }
  llc() {
    return this.attachmentId;
  }
}
class DiscordReactionDetails {
  constructor() {
    this.name = null;
    this.emojiId = null;
    this.normalCount = null;
    this.burstCount = null;
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    tmp.burstColors = emptyList();
    this.reactingNormally = false;
    this.reactingWithBurst = false;
  }
  e37(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  uln(_set____db54di) {
    this.emojiId = _set____db54di;
  }
  vln() {
    return this.emojiId;
  }
  wln(_set____db54di) {
    this.normalCount = _set____db54di;
  }
  xln() {
    return this.normalCount;
  }
  xlc(_set____db54di) {
    this.burstCount = _set____db54di;
  }
  ylc() {
    return this.burstCount;
  }
  yln(_set____db54di) {
    this.burstColors = _set____db54di;
  }
  wlc() {
    return this.burstColors;
  }
  zln(_set____db54di) {
    this.reactingNormally = _set____db54di;
  }
  alo() {
    return this.reactingNormally;
  }
  blo(_set____db54di) {
    this.reactingWithBurst = _set____db54di;
  }
  clo() {
    return this.reactingWithBurst;
  }
}
class DiscordUserPrimaryGuild {
  constructor() {
    this.identityGuildId = null;
    this.identityEnabled = false;
    this.tag = null;
    this.badge = null;
  }
  sle(_set____db54di) {
    this.identityGuildId = _set____db54di;
  }
  tle() {
    return this.identityGuildId;
  }
  dlo(_set____db54di) {
    this.identityEnabled = _set____db54di;
  }
  vle() {
    return this.identityEnabled;
  }
  b37(_set____db54di) {
    this.tag = _set____db54di;
  }
  c37() {
    return this.tag;
  }
  wle(_set____db54di) {
    this.badge = _set____db54di;
  }
  xle() {
    return this.badge;
  }
}
class DiscordSpace extends Space {
  constructor(service) {
    return new.target.klm(service);
  }
  static klm(service) {
    var $this = this.l3b(service);
    $this.owner = null;
    $this.approximateMemberCount = null;
    return $this;
  }
  el3(_set____db54di) {
    this.owner = _set____db54di;
  }
  i8b() {
    return this.owner;
  }
  tl3(_set____db54di) {
    this.approximateMemberCount = _set____db54di;
  }
  ul3() {
    return this.approximateMemberCount;
  }
}
class DiscordStream {
  constructor(stream) {
    this.stream = stream;
    this.elo_1 = false;
  }
  lbi() {
    return this.stream;
  }
  *p37($completion) {
    this.elo_1 = true;
    yield* start$virtualSuspendBridge(this.stream, $completion);
    return Unit_instance;
  }
  open() {
    return promisify(($completion) => this.p37($completion));
  }
  *m3b($completion) {
    if (this.open === protoOf(DiscordStream).open)
      yield* this.p37($completion);
    else
      yield* await_0(this.open(), $completion);
    return Unit_instance;
  }
  close() {
    this.elo_1 = false;
    this.stream.stop();
  }
  q37() {
    return this.stream.isConnected();
  }
  get isOpened() {
    return this.q37();
  }
}
class DiscordThread extends Thread {
  constructor(service) {
    return new.target.olm(service);
  }
  static olm(service) {
    var $this = this.n3b(service);
    $this.channelId = null;
    return $this;
  }
  p9l(_set____db54di) {
    this.channelId = _set____db54di;
  }
  q9l() {
    return this.channelId;
  }
}
class Companion_3 {
  constructor() {
    this.RECIPIENT_KEY = 'recipient';
  }
  flo() {
    return this.RECIPIENT_KEY;
  }
}
class DiscordUser extends User {
  constructor(service) {
    return new.target.blm(service);
  }
  static blm(service) {
    var $this = this.e36(service);
    $this.username = null;
    $this.discriminator = null;
    $this.isBot = false;
    $this.flags = null;
    $this.publicFlags = null;
    $this.clan = null;
    $this.primaryGuild = null;
    return $this;
  }
  aa8(_set____db54di) {
    this.username = _set____db54di;
  }
  ba8() {
    return this.username;
  }
  wld(_set____db54di) {
    this.discriminator = _set____db54di;
  }
  xld() {
    return this.discriminator;
  }
  gb5(_set____db54di) {
    this.isBot = _set____db54di;
  }
  q9u() {
    return this.isBot;
  }
  nl4(_set____db54di) {
    this.flags = _set____db54di;
  }
  ol4() {
    return this.flags;
  }
  jle(_set____db54di) {
    this.publicFlags = _set____db54di;
  }
  kle() {
    return this.publicFlags;
  }
  glo(_set____db54di) {
    this.clan = _set____db54di;
  }
  mle() {
    return this.clan;
  }
  hlo(_set____db54di) {
    this.primaryGuild = _set____db54di;
  }
  ole() {
    return this.primaryGuild;
  }
  o35(_) {
  }
  p35() {
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
  q36() {
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
  y36() {
    // Inline function 'kotlin.also' call
    var this_0 = new CommentForm();
    this_0.h2y(true);
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
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.akx_1;
}
function DiscordAction$proceed$lambda_0(e) {
  var tmp0_safe_receiver = e instanceof DiscordException ? e : null;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bkx_1;
}
function DiscordAction$proceedUnit$lambda(e) {
  var tmp0_safe_receiver = e instanceof DiscordException ? e : null;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.akx_1;
}
function DiscordAction$proceedUnit$lambda_0(e) {
  var tmp0_safe_receiver = e instanceof DiscordException ? e : null;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bkx_1;
}
function _get_auth__d3zq1v($this) {
  return $this.vlk_1.auth;
}
function _get_service__d270n8($this) {
  return $this.vlk_1.account.service;
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
    throw SocialHubException.u3e('Channel id is required. Pass a DiscordComment or DiscordIdentify carrying channelId.');
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
    return yield* $this.vlk_1.ell(DiscordActionHelper$resolveChannelId$slambda($this, recipientId), $completion);
  }
  throw SocialHubException.u3e('Channel id is required. Provide params["channel"] or a recipient via User.messageForm.');
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
function DiscordActionHelper$fetchUserMe$slambda(this$0) {
  return constructCallableReference(function *($completion) {
    var response = yield* getMe$virtualSuspendBridge(_get_auth__d3zq1v(this$0).accessor.discord.users(), $completion);
    var user = DiscordMapper_getInstance().mll(response.data, _get_service__d270n8(this$0));
    this$0.vlk_1.dll(user);
    return user;
  }, 0);
}
function DiscordActionHelper$getUser$slambda(this$0, $id) {
  return constructCallableReference(function *($completion) {
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.users();
    var tmp_0 = $id.id;
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).f2y_1;
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
    return DiscordMapper_getInstance().mll(response.data, _get_service__d270n8(this$0));
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
    return DiscordMapper_getInstance().nll(toList(response.data), $userMe, _get_service__d270n8(this$0), $paging);
  }, 0);
}
function DiscordActionHelper$getComment$slambda(this$0, $channelId, $id, $userMe) {
  return constructCallableReference(function *($completion) {
    var tmp = _get_auth__d3zq1v(this$0).accessor.discord.messages();
    var tmp_0 = $id.id;
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).f2y_1;
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
    return DiscordMapper_getInstance().oll(response.data, $userMe, _get_service__d270n8(this$0));
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
      var destination = ArrayList.h2(collectionSizeOrDefault(this_1, 10));
      var _iterator__ex2g4s = this_1.l1();
      while (_iterator__ex2g4s.m1()) {
        var item = _iterator__ex2g4s.n1();
        // Inline function 'kotlin.also' call
        var this_2 = new FileContent(item.name, item.data);
        this_2.description = item.description;
        destination.i2(this_2);
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
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).f2y_1;
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
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).f2y_1;
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
    var tmp0 = ensureNotNull(tmp_0 == null ? null : new ID(tmp_0)).f2y_1;
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
    return DiscordMapper_getInstance().pll(toList(response.data), _get_service__d270n8(this$0), dp);
  }, 0);
}
function DiscordActionHelper$channels$slambda(this$0, $guildId, $paging) {
  return constructCallableReference(function *($completion) {
    var response = yield* listGuildChannels$virtualSuspendBridge(_get_auth__d3zq1v(this$0).accessor.discord.guilds(), $guildId, $completion);
    return DiscordMapper_getInstance().qll(toList(response.data), _get_service__d270n8(this$0), $paging);
  }, 0);
}
function DiscordActionHelper$messageThread$slambda(this$0, $paging) {
  return constructCallableReference(function *($completion) {
    var response = yield* listDmChannels$virtualSuspendBridge(_get_auth__d3zq1v(this$0).accessor.discord.channels(), $completion);
    return DiscordMapper_getInstance().rll(toList(response.data), _get_service__d270n8(this$0), $paging);
  }, 0);
}
function DiscordActionHelper$resolveChannelId$slambda(this$0, $recipientId) {
  return constructCallableReference(function *($completion) {
    var response = yield* createDm$virtualSuspendBridge(_get_auth__d3zq1v(this$0).accessor.discord.channels(), new ChannelsCreateDmRequest($recipientId), $completion);
    var tmp0_elvis_lhs = response.data.id;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SocialHubException.u3e('Failed to open DM channel for recipient ' + $recipientId + '.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }, 0);
}
function attributedText($this, message) {
  var content = displayText($this, message);
  // Inline function 'kotlin.collections.orEmpty' call
  var tmp0_elvis_lhs = message.mentions;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.emptyArray' call
    tmp = [];
  } else {
    tmp = tmp0_elvis_lhs;
  }
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = tmp;
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList.j2();
  // Inline function 'kotlin.collections.forEach' call
  var inductionVariable = 0;
  var last = tmp0.length;
  while (inductionVariable < last) {
    var element = tmp0[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp0_safe_receiver = element.id;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = to(tmp0_safe_receiver, element);
    }
    var tmp0_safe_receiver_0 = tmp_0;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.i2(tmp0_safe_receiver_0);
    }
  }
  var mentionsById = toMap(destination);
  if (mentionsById.j1())
    return Companion_instance.g3c(content);
  // Inline function 'kotlin.collections.mutableListOf' call
  var resolved = ArrayList.j2();
  // Inline function 'kotlin.text.toRegex' call
  var this_0 = '\x00(\\d+)\x00';
  var markerRegex = Regex.ji(this_0);
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_1 = StringBuilder.h1();
  var last_0 = 0;
  var _iterator__ex2g4s = DiscordMapper_getInstance().lll_1.oi(content).l1();
  while (_iterator__ex2g4s.m1()) {
    var match = _iterator__ex2g4s.n1();
    var mentionId = match.qj().n2(1);
    var mention = mentionsById.v4(mentionId);
    var tmp1_safe_receiver = mention == null ? null : mention.globalName;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp1_safe_receiver)) {
        tmp_2 = tmp1_safe_receiver;
      } else {
        tmp_2 = null;
      }
      tmp_1 = tmp_2;
    }
    var tmp2_elvis_lhs = tmp_1;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp4_safe_receiver = mention == null ? null : mention.username;
      var tmp_4;
      if (tmp4_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_5;
        // Inline function 'kotlin.text.isNotBlank' call
        if (!isBlank(tmp4_safe_receiver)) {
          tmp_5 = tmp4_safe_receiver;
        } else {
          tmp_5 = null;
        }
        tmp_4 = tmp_5;
      }
      tmp_3 = tmp_4;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var displayName = tmp_3;
    if (!(displayName == null)) {
      this_1.i1(substring(content, last_0, match.ri().f3_1));
      this_1.i1('\x00' + resolved.l2() + '\x00');
      resolved.i2(new DiscordMapper$attributedText$MentionInfo(displayName, mentionId));
      last_0 = match.ri().g3_1 + 1 | 0;
    }
  }
  this_1.i1(substring_0(content, last_0));
  var cleaned = this_1.toString();
  if (resolved.j1())
    return Companion_instance.g3c(content);
  var parsed = Companion_instance.g3c(cleaned);
  // Inline function 'kotlin.collections.mutableListOf' call
  var newElements = ArrayList.j2();
  var _iterator__ex2g4s_0 = parsed.elements.l1();
  while (_iterator__ex2g4s_0.m1()) {
    var element_0 = _iterator__ex2g4s_0.n1();
    if (element_0.kind.equals(AttributedKind_PLAIN_getInstance())) {
      var text = element_0.displayText;
      var readIndex = 0;
      var changed = false;
      var _iterator__ex2g4s_1 = markerRegex.oi(text).l1();
      while (_iterator__ex2g4s_1.m1()) {
        var match_0 = _iterator__ex2g4s_1.n1();
        var index = toInt(match_0.qj().n2(1));
        var info = resolved.n2(index);
        var before = substring(text, readIndex, match_0.ri().f3_1);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(before) > 0) {
          // Inline function 'kotlin.also' call
          var this_2 = new AttributedItem();
          this_2.h3c_1 = AttributedKind_PLAIN_getInstance();
          this_2.j3c_1 = before;
          newElements.i2(this_2);
        }
        // Inline function 'kotlin.also' call
        var this_3 = new AttributedItem();
        this_3.h3c_1 = AttributedKind_ACCOUNT_getInstance();
        this_3.j3c_1 = '@' + info.ull_1;
        this_3.k3c_1 = info.vll_1;
        newElements.i2(this_3);
        readIndex = match_0.ri().g3_1 + 1 | 0;
        changed = true;
      }
      if (changed) {
        var after = substring_0(text, readIndex);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(after) > 0) {
          // Inline function 'kotlin.also' call
          var this_4 = new AttributedItem();
          this_4.h3c_1 = AttributedKind_PLAIN_getInstance();
          this_4.j3c_1 = after;
          newElements.i2(this_4);
        }
      } else {
        newElements.i2(element_0);
      }
    } else {
      newElements.i2(element_0);
    }
  }
  return Companion_instance.elements(newElements);
}
function displayText($this, message) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var parts = ArrayList.j2();
  var tmp0_safe_receiver = message.content;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(tmp0_safe_receiver)) {
      tmp_0 = tmp0_safe_receiver;
    } else {
      tmp_0 = null;
    }
    tmp = tmp_0;
  }
  var tmp1_safe_receiver = tmp;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    parts.i2(tmp1_safe_receiver);
  }
  // Inline function 'kotlin.collections.orEmpty' call
  var tmp0_elvis_lhs = message.embeds;
  var tmp_1;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.emptyArray' call
    tmp_1 = [];
  } else {
    tmp_1 = tmp0_elvis_lhs;
  }
  // Inline function 'kotlin.collections.forEach' call
  var indexedObject = tmp_1;
  var inductionVariable = 0;
  var last = indexedObject.length;
  while (inductionVariable < last) {
    var element = indexedObject[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp0_safe_receiver_0 = element.author;
    var tmp1_safe_receiver_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.name;
    var tmp_2;
    if (tmp1_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_3;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp1_safe_receiver_0)) {
        tmp_3 = tmp1_safe_receiver_0;
      } else {
        tmp_3 = null;
      }
      tmp_2 = tmp_3;
    }
    var tmp2_safe_receiver = tmp_2;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      parts.i2(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = element.title;
    var tmp_4;
    if (tmp3_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_5;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp3_safe_receiver)) {
        tmp_5 = tmp3_safe_receiver;
      } else {
        tmp_5 = null;
      }
      tmp_4 = tmp_5;
    }
    var tmp4_safe_receiver = tmp_4;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      parts.i2(tmp4_safe_receiver);
    }
    var tmp5_safe_receiver = element.description;
    var tmp_6;
    if (tmp5_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_7;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp5_safe_receiver)) {
        tmp_7 = tmp5_safe_receiver;
      } else {
        tmp_7 = null;
      }
      tmp_6 = tmp_7;
    }
    var tmp6_safe_receiver = tmp_6;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      parts.i2(tmp6_safe_receiver);
    }
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs_0 = element.fields;
    var tmp_8;
    if (tmp0_elvis_lhs_0 == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp_8 = [];
    } else {
      tmp_8 = tmp0_elvis_lhs_0;
    }
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject_0 = tmp_8;
    var inductionVariable_0 = 0;
    var last_0 = indexedObject_0.length;
    while (inductionVariable_0 < last_0) {
      var element_0 = indexedObject_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var tmp0_safe_receiver_1 = element_0.name;
      var tmp_9;
      if (tmp0_safe_receiver_1 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_10;
        // Inline function 'kotlin.text.isNotBlank' call
        if (!isBlank(tmp0_safe_receiver_1)) {
          tmp_10 = tmp0_safe_receiver_1;
        } else {
          tmp_10 = null;
        }
        tmp_9 = tmp_10;
      }
      var tmp_11 = tmp_9;
      var tmp1_safe_receiver_1 = element_0.value;
      var tmp_12;
      if (tmp1_safe_receiver_1 == null) {
        tmp_12 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_13;
        // Inline function 'kotlin.text.isNotBlank' call
        if (!isBlank(tmp1_safe_receiver_1)) {
          tmp_13 = tmp1_safe_receiver_1;
        } else {
          tmp_13 = null;
        }
        tmp_12 = tmp_13;
      }
      // Inline function 'kotlin.takeIf' call
      var this_0 = joinToString(listOfNotNull([tmp_11, tmp_12]), '\n');
      var tmp_14;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(this_0)) {
        tmp_14 = this_0;
      } else {
        tmp_14 = null;
      }
      var tmp2_safe_receiver_0 = tmp_14;
      if (tmp2_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        parts.i2(tmp2_safe_receiver_0);
      }
    }
    var tmp7_safe_receiver = element.footer;
    var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.text;
    var tmp_15;
    if (tmp8_safe_receiver == null) {
      tmp_15 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_16;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp8_safe_receiver)) {
        tmp_16 = tmp8_safe_receiver;
      } else {
        tmp_16 = null;
      }
      tmp_15 = tmp_16;
    }
    var tmp9_safe_receiver = tmp_15;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      parts.i2(tmp9_safe_receiver);
    }
    var tmp10_safe_receiver = element.provider;
    var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.name;
    var tmp_17;
    if (tmp11_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_18;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp11_safe_receiver)) {
        tmp_18 = tmp11_safe_receiver;
      } else {
        tmp_18 = null;
      }
      tmp_17 = tmp_18;
    }
    var tmp12_safe_receiver = tmp_17;
    if (tmp12_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      parts.i2(tmp12_safe_receiver);
    }
  }
  // Inline function 'kotlin.collections.orEmpty' call
  var tmp0_elvis_lhs_1 = message.components;
  var tmp_19;
  if (tmp0_elvis_lhs_1 == null) {
    // Inline function 'kotlin.emptyArray' call
    tmp_19 = [];
  } else {
    tmp_19 = tmp0_elvis_lhs_1;
  }
  // Inline function 'kotlin.collections.forEach' call
  var indexedObject_1 = tmp_19;
  var inductionVariable_1 = 0;
  var last_1 = indexedObject_1.length;
  while (inductionVariable_1 < last_1) {
    var element_1 = indexedObject_1[inductionVariable_1];
    inductionVariable_1 = inductionVariable_1 + 1 | 0;
    componentTextParts(DiscordMapper_getInstance(), element_1, parts);
  }
  return joinToString(parts, '\n\n');
}
function primaryGuild($this, source) {
  // Inline function 'kotlin.apply' call
  var this_0 = new DiscordUserPrimaryGuild();
  this_0.identityGuildId = source.identityGuildId;
  var tmp = this_0;
  var tmp0_elvis_lhs = source.identityEnabled;
  tmp.identityEnabled = tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  this_0.tag = source.tag;
  this_0.badge = source.badge;
  return this_0;
}
function component($this, source, inheritedSpoiler) {
  var ownText = joinToString(componentOwnText($this, source), '\n');
  var spoiler = inheritedSpoiler || componentSpoiler($this, source);
  // Inline function 'kotlin.apply' call
  var this_0 = new DiscordMessageComponent();
  this_0.type = source.type;
  this_0.id = source.id;
  var tmp = this_0;
  // Inline function 'kotlin.takeIf' call
  var tmp_0;
  // Inline function 'kotlin.text.isNotBlank' call
  if (!isBlank(ownText)) {
    tmp_0 = ownText;
  } else {
    tmp_0 = null;
  }
  var tmp0_safe_receiver = tmp_0;
  var tmp_1;
  if (tmp0_safe_receiver == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_1 = Companion_instance.g3c(tmp0_safe_receiver);
  }
  tmp.text = tmp_1;
  var tmp_2 = this_0;
  var tmp1_safe_receiver = source instanceof ButtonComponent ? source : null;
  tmp_2.url = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.url;
  this_0.disabled = componentDisabled(DiscordMapper_getInstance(), source);
  this_0.spoiler = spoiler;
  this_0.medias = componentOwnMedias(DiscordMapper_getInstance(), source, inheritedSpoiler);
  var tmp_3 = this_0;
  // Inline function 'kotlin.collections.map' call
  var this_1 = componentChildren(DiscordMapper_getInstance(), source);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.h2(collectionSizeOrDefault(this_1, 10));
  var _iterator__ex2g4s = this_1.l1();
  while (_iterator__ex2g4s.m1()) {
    var item = _iterator__ex2g4s.n1();
    var tmp$ret$9 = component(DiscordMapper_getInstance(), item, spoiler);
    destination.i2(tmp$ret$9);
  }
  tmp_3.children = destination;
  return this_0;
}
function componentTextParts($this, component, destination, inheritedSpoiler) {
  inheritedSpoiler = inheritedSpoiler === VOID ? false : inheritedSpoiler;
  var spoiler = inheritedSpoiler || componentSpoiler($this, component);
  if (spoiler)
    return Unit_instance;
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = componentOwnText($this, component);
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.j2();
  var _iterator__ex2g4s = tmp0.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(element)) {
      destination_0.i2(element);
    }
  }
  destination.m2(destination_0);
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s_0 = componentChildren($this, component).l1();
  while (_iterator__ex2g4s_0.m1()) {
    var element_0 = _iterator__ex2g4s_0.n1();
    componentTextParts(DiscordMapper_getInstance(), element_0, destination, spoiler);
  }
}
function componentOwnText($this, component) {
  var tmp;
  if (component instanceof ButtonComponent) {
    tmp = listOfNotNull_0(component.label);
  } else {
    if (component instanceof StringSelectComponent) {
      var tmp_0 = listOfNotNull_0(component.placeholder);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = component.options;
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_1 = [];
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      // Inline function 'kotlin.collections.flatMap' call
      var tmp0 = tmp_1;
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList.j2();
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var list = listOfNotNull([element.label, element.description]);
        addAll(destination, list);
      }
      tmp = plus(tmp_0, destination);
    } else {
      if (component instanceof TextInputComponent) {
        tmp = listOfNotNull([component.label, component.value]);
      } else {
        if (component instanceof UserSelectComponent) {
          tmp = listOfNotNull_0(component.placeholder);
        } else {
          if (component instanceof RoleSelectComponent) {
            tmp = listOfNotNull_0(component.placeholder);
          } else {
            if (component instanceof MentionableSelectComponent) {
              tmp = listOfNotNull_0(component.placeholder);
            } else {
              if (component instanceof ChannelSelectComponent) {
                tmp = listOfNotNull_0(component.placeholder);
              } else {
                if (component instanceof TextDisplayComponent) {
                  tmp = listOfNotNull_0(component.content);
                } else {
                  if (component instanceof ThumbnailComponent) {
                    tmp = listOfNotNull_0(component.description);
                  } else {
                    if (component instanceof MediaGalleryComponent) {
                      // Inline function 'kotlin.collections.orEmpty' call
                      var tmp0_elvis_lhs_0 = component.items;
                      var tmp_2;
                      if (tmp0_elvis_lhs_0 == null) {
                        // Inline function 'kotlin.emptyArray' call
                        tmp_2 = [];
                      } else {
                        tmp_2 = tmp0_elvis_lhs_0;
                      }
                      // Inline function 'kotlin.collections.filterNot' call
                      var tmp0_0 = tmp_2;
                      // Inline function 'kotlin.collections.filterNotTo' call
                      var destination_0 = ArrayList.j2();
                      var inductionVariable_0 = 0;
                      var last_0 = tmp0_0.length;
                      while (inductionVariable_0 < last_0) {
                        var element_0 = tmp0_0[inductionVariable_0];
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        if (!(element_0.spoiler === true)) {
                          destination_0.i2(element_0);
                        }
                      }
                      // Inline function 'kotlin.collections.mapNotNull' call
                      // Inline function 'kotlin.collections.mapNotNullTo' call
                      var destination_1 = ArrayList.j2();
                      // Inline function 'kotlin.collections.forEach' call
                      var _iterator__ex2g4s = destination_0.l1();
                      while (_iterator__ex2g4s.m1()) {
                        var element_1 = _iterator__ex2g4s.n1();
                        var tmp0_safe_receiver = element_1.description;
                        if (tmp0_safe_receiver == null)
                          null;
                        else {
                          // Inline function 'kotlin.let' call
                          destination_1.i2(tmp0_safe_receiver);
                        }
                      }
                      tmp = destination_1;
                    } else {
                      if (component instanceof FileComponent) {
                        tmp = listOfNotNull_0(component.name);
                      } else {
                        if (component instanceof LabelComponent) {
                          tmp = listOfNotNull([component.label, component.description]);
                        } else {
                          if (component instanceof RadioGroupComponent) {
                            // Inline function 'kotlin.collections.orEmpty' call
                            var tmp0_elvis_lhs_1 = component.options;
                            var tmp_3;
                            if (tmp0_elvis_lhs_1 == null) {
                              // Inline function 'kotlin.emptyArray' call
                              tmp_3 = [];
                            } else {
                              tmp_3 = tmp0_elvis_lhs_1;
                            }
                            // Inline function 'kotlin.collections.flatMap' call
                            var tmp0_1 = tmp_3;
                            // Inline function 'kotlin.collections.flatMapTo' call
                            var destination_2 = ArrayList.j2();
                            var inductionVariable_1 = 0;
                            var last_1 = tmp0_1.length;
                            while (inductionVariable_1 < last_1) {
                              var element_2 = tmp0_1[inductionVariable_1];
                              inductionVariable_1 = inductionVariable_1 + 1 | 0;
                              var list_0 = listOfNotNull([element_2.label, element_2.description]);
                              addAll(destination_2, list_0);
                            }
                            tmp = destination_2;
                          } else {
                            if (component instanceof CheckboxGroupComponent) {
                              // Inline function 'kotlin.collections.orEmpty' call
                              var tmp0_elvis_lhs_2 = component.options;
                              var tmp_4;
                              if (tmp0_elvis_lhs_2 == null) {
                                // Inline function 'kotlin.emptyArray' call
                                tmp_4 = [];
                              } else {
                                tmp_4 = tmp0_elvis_lhs_2;
                              }
                              // Inline function 'kotlin.collections.flatMap' call
                              var tmp0_2 = tmp_4;
                              // Inline function 'kotlin.collections.flatMapTo' call
                              var destination_3 = ArrayList.j2();
                              var inductionVariable_2 = 0;
                              var last_2 = tmp0_2.length;
                              while (inductionVariable_2 < last_2) {
                                var element_3 = tmp0_2[inductionVariable_2];
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                var list_1 = listOfNotNull([element_3.label, element_3.description]);
                                addAll(destination_3, list_1);
                              }
                              tmp = destination_3;
                            } else {
                              tmp = emptyList();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return tmp;
}
function componentChildren($this, component) {
  var tmp;
  if (component instanceof ActionRowComponent) {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = component.components;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp_0 = [];
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp$ret$0 = tmp_0;
    tmp = toList(tmp$ret$0);
  } else {
    if (component instanceof SectionComponent) {
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs_0 = component.components;
      var tmp_1;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_1 = [];
      } else {
        tmp_1 = tmp0_elvis_lhs_0;
      }
      var tmp$ret$2 = tmp_1;
      tmp = plus(toList(tmp$ret$2), listOfNotNull_0(component.accessory));
    } else {
      if (component instanceof ContainerComponent) {
        // Inline function 'kotlin.collections.orEmpty' call
        var tmp0_elvis_lhs_1 = component.components;
        var tmp_2;
        if (tmp0_elvis_lhs_1 == null) {
          // Inline function 'kotlin.emptyArray' call
          tmp_2 = [];
        } else {
          tmp_2 = tmp0_elvis_lhs_1;
        }
        var tmp$ret$4 = tmp_2;
        tmp = toList(tmp$ret$4);
      } else {
        if (component instanceof LabelComponent) {
          tmp = listOfNotNull_0(component.component);
        } else {
          tmp = emptyList();
        }
      }
    }
  }
  return tmp;
}
function componentDisabled($this, component) {
  var tmp;
  if (component instanceof ButtonComponent) {
    tmp = component.disabled;
  } else {
    if (component instanceof StringSelectComponent) {
      tmp = component.disabled;
    } else {
      if (component instanceof UserSelectComponent) {
        tmp = component.disabled;
      } else {
        if (component instanceof RoleSelectComponent) {
          tmp = component.disabled;
        } else {
          if (component instanceof MentionableSelectComponent) {
            tmp = component.disabled;
          } else {
            if (component instanceof ChannelSelectComponent) {
              tmp = component.disabled;
            } else {
              tmp = null;
            }
          }
        }
      }
    }
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
}
function componentSpoiler($this, component) {
  var tmp;
  if (component instanceof ThumbnailComponent) {
    tmp = component.spoiler;
  } else {
    if (component instanceof FileComponent) {
      tmp = component.spoiler;
    } else {
      if (component instanceof ContainerComponent) {
        tmp = component.spoiler;
      } else {
        tmp = null;
      }
    }
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
}
function componentOwnMedias($this, component, inheritedSpoiler) {
  var tmp;
  if (component instanceof ThumbnailComponent) {
    var tmp1_safe_receiver = component.media;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = componentMedia(DiscordMapper_getInstance(), tmp1_safe_receiver, MediaType_Image_getInstance(), component.description, inheritedSpoiler || component.spoiler === true);
    }
    tmp = listOfNotNull_0(tmp_0);
  } else {
    if (component instanceof MediaGalleryComponent) {
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = component.items;
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_1 = [];
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      // Inline function 'kotlin.collections.mapNotNull' call
      var tmp0 = tmp_1;
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList.j2();
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_safe_receiver = element.media;
        var tmp_2;
        if (tmp0_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_2 = componentMedia(DiscordMapper_getInstance(), tmp0_safe_receiver, MediaType_Image_getInstance(), element.description, inheritedSpoiler || element.spoiler === true);
        }
        var tmp0_safe_receiver_0 = tmp_2;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.i2(tmp0_safe_receiver_0);
        }
      }
      tmp = destination;
    } else {
      if (component instanceof FileComponent) {
        var tmp2_safe_receiver = component.file;
        var tmp_3;
        if (tmp2_safe_receiver == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_3 = componentMedia(DiscordMapper_getInstance(), tmp2_safe_receiver, MediaType_File_getInstance(), component.name, inheritedSpoiler || component.spoiler === true);
        }
        tmp = listOfNotNull_0(tmp_3);
      } else {
        tmp = emptyList();
      }
    }
  }
  return tmp;
}
function embedMedia($this, source, fallbackType) {
  // Inline function 'kotlin.also' call
  var this_0 = new DiscordMedia();
  this_0.sourceUrl = source.url;
  var tmp = this_0;
  var tmp0_elvis_lhs = source.proxyUrl;
  tmp.previewUrl = tmp0_elvis_lhs == null ? source.url : tmp0_elvis_lhs;
  this_0.type = mediaType(DiscordMapper_getInstance(), source.contentType, fallbackType);
  this_0.width = source.width;
  this_0.height = source.height;
  this_0.contentType = source.contentType;
  this_0.placeholder = source.placeholder;
  this_0.placeholderVersion = source.placeholderVersion;
  return this_0;
}
function componentMedia($this, source, fallbackType, description, spoiler) {
  // Inline function 'kotlin.also' call
  var this_0 = new DiscordMedia();
  this_0.sourceUrl = source.url;
  var tmp = this_0;
  var tmp0_elvis_lhs = source.proxyUrl;
  tmp.previewUrl = tmp0_elvis_lhs == null ? source.url : tmp0_elvis_lhs;
  this_0.type = mediaType(DiscordMapper_getInstance(), source.contentType, fallbackType);
  this_0.width = source.width;
  this_0.height = source.height;
  this_0.description = description;
  this_0.contentType = source.contentType;
  this_0.placeholder = source.placeholder;
  this_0.placeholderVersion = source.placeholderVersion;
  this_0.spoiler = spoiler;
  this_0.attachmentId = source.attachmentId;
  return this_0;
}
function collectComponentMedias($this, component, destination, inheritedSpoiler) {
  inheritedSpoiler = inheritedSpoiler === VOID ? false : inheritedSpoiler;
  var spoiler = inheritedSpoiler || componentSpoiler($this, component);
  destination.m2(componentOwnMedias($this, component, inheritedSpoiler));
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = componentChildren($this, component).l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    collectComponentMedias(DiscordMapper_getInstance(), element, destination, spoiler);
  }
}
function mediaLocationKey($this, media) {
  return new Triple(media.type, media.sourceUrl, media.previewUrl);
}
function mediaType($this, contentType, fallbackType) {
  var tmp;
  if ((contentType == null ? null : startsWith(contentType, 'image/')) === true) {
    tmp = MediaType_Image_getInstance();
  } else {
    if ((contentType == null ? null : startsWith(contentType, 'video/')) === true) {
      tmp = MediaType_Movie_getInstance();
    } else {
      tmp = fallbackType;
    }
  }
  return tmp;
}
function DiscordMapper$timeLine$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = b.createAt;
  var tmp$ret$2 = a.createAt;
  return compareValues(tmp, tmp$ret$2);
}
var DiscordMapper_instance;
function DiscordMapper_getInstance() {
  if (DiscordMapper_instance === VOID)
    new DiscordMapper();
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
initMetadataForClass(DiscordMapper$attributedText$MentionInfo, 'MentionInfo');
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
initMetadataForClass(DiscordEmbed, 'DiscordEmbed', DiscordEmbed);
initMetadataForClass(DiscordEmbedFooter, 'DiscordEmbedFooter', DiscordEmbedFooter);
initMetadataForClass(DiscordEmbedProvider, 'DiscordEmbedProvider', DiscordEmbedProvider);
initMetadataForClass(DiscordEmbedAuthor, 'DiscordEmbedAuthor', DiscordEmbedAuthor);
initMetadataForClass(DiscordEmbedField, 'DiscordEmbedField', DiscordEmbedField);
initMetadataForClass(DiscordMessageComponent, 'DiscordMessageComponent', DiscordMessageComponent);
initMetadataForClass(DiscordMedia, 'DiscordMedia', DiscordMedia);
initMetadataForClass(DiscordReactionDetails, 'DiscordReactionDetails', DiscordReactionDetails);
initMetadataForClass(DiscordUserPrimaryGuild, 'DiscordUserPrimaryGuild', DiscordUserPrimaryGuild);
initMetadataForClass(DiscordSpace, 'DiscordSpace');
initMetadataForClass(DiscordStream, 'DiscordStream', VOID, VOID, [Stream], [0]);
initMetadataForClass(DiscordThread, 'DiscordThread');
initMetadataForCompanion(Companion_3);
initMetadataForClass(DiscordUser, 'DiscordUser');
//endregion
//region block: init
Companion_instance_1 = new Companion_0();
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
  DiscordEmbed as DiscordEmbed,
  DiscordEmbedFooter as DiscordEmbedFooter,
  DiscordEmbedProvider as DiscordEmbedProvider,
  DiscordEmbedAuthor as DiscordEmbedAuthor,
  DiscordEmbedField as DiscordEmbedField,
  DiscordMessageComponent as DiscordMessageComponent,
  DiscordMedia as DiscordMedia,
  DiscordReactionDetails as DiscordReactionDetails,
  DiscordUserPrimaryGuild as DiscordUserPrimaryGuild,
  DiscordSpace as DiscordSpace,
  DiscordStream as DiscordStream,
  DiscordThread as DiscordThread,
  DiscordUser as DiscordUser,
};
//endregion

//# sourceMappingURL=planetlink-discord.mjs.map
