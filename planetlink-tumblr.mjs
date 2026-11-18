import {
  SocialActionType_GetUserMe_getInstance3ioh7ir70w031 as SocialActionType_GetUserMe_getInstance,
  SocialActionType_GetUser_getInstance1d2zrwn05e9i1 as SocialActionType_GetUser_getInstance,
  SocialActionType_FollowUser_getInstance2sxrrvyacmnf6 as SocialActionType_FollowUser_getInstance,
  SocialActionType_UnfollowUser_getInstance16uxado8vieqi as SocialActionType_UnfollowUser_getInstance,
  SocialActionType_GetRelationship_getInstance3jfnutqy4cgn7 as SocialActionType_GetRelationship_getInstance,
  SocialActionType_GetComment_getInstance1itkvlis0wdwf as SocialActionType_GetComment_getInstance,
  SocialActionType_GetContext_getInstance1mq0m2iipe1jt as SocialActionType_GetContext_getInstance,
  SocialActionType_PostComment_getInstance27lkztsq394gr as SocialActionType_PostComment_getInstance,
  SocialActionType_DeleteComment_getInstance41ghnelmt3du as SocialActionType_DeleteComment_getInstance,
  SocialActionType_EditComment_getInstance1jpsxzflsg923 as SocialActionType_EditComment_getInstance,
  SocialActionType_LikeComment_getInstance168wa3ji5vu7l as SocialActionType_LikeComment_getInstance,
  SocialActionType_UnlikeComment_getInstance15bxz0x97p5f8 as SocialActionType_UnlikeComment_getInstance,
  SocialActionType_ShareComment_getInstance3rlv4nb3ufodn as SocialActionType_ShareComment_getInstance,
  TimeLineActionType_HomeTimeLine_getInstanceml6yi3172uow as TimeLineActionType_HomeTimeLine_getInstance,
  TimeLineActionType_UserCommentTimeLine_getInstance26zqtakp0l0aw as TimeLineActionType_UserCommentTimeLine_getInstance,
  TimeLineActionType_UserLikeTimeLine_getInstancetr1s20dp92f1 as TimeLineActionType_UserLikeTimeLine_getInstance,
  TimeLineActionType_UserMediaTimeLine_getInstance2lvuqncf5dt2d as TimeLineActionType_UserMediaTimeLine_getInstance,
  TimeLineActionType_SearchTimeLine_getInstance1pmibrzjntpr as TimeLineActionType_SearchTimeLine_getInstance,
  UsersActionType_GetFollowingUsers_getInstance2a35emfxgbupz as UsersActionType_GetFollowingUsers_getInstance,
  UsersActionType_GetFollowerUsers_getInstance6zeybm3nmr8 as UsersActionType_GetFollowerUsers_getInstance,
  Capabilities2qd6jvjbzaj20 as Capabilities,
  ID2o215ga1eida7 as ID,
  NotSupportedExceptiong4ra4o05t757 as NotSupportedException,
  _ID___get_value__impl__eg5m2invevi26vszxr as _ID___get_value__impl__eg5m2i,
  ExceptionHandler_instance1jt9ka4mdotmb as ExceptionHandler_instance,
  ServiceType_Tumblr_getInstancealqstwb9f30 as ServiceType_Tumblr_getInstance,
  SocialHubException1w6p5p0bvs9y4 as SocialHubException,
  AccountActionImpl361xdkwunj7o0 as AccountActionImpl,
  Identify2wbv914ui5ljs as Identify,
  _ID___init__impl__k1lb7e2ewhzld6fsccl as _ID___init__impl__k1lb7e,
  TupleIdentify1gf1hp0vxl7vz as TupleIdentify,
  Contextift6b7xyx9mi as Context,
  Account19jxpwhhxxgsp as Account,
  Service2pf3oiz7nlfqt as Service,
  ServiceAuth24ibq9p2skqjm as ServiceAuth,
  Companion_instance2n12mfi0niekg as Companion_instance,
  AttributedKind_IMAGE_getInstance115tbnb9lvcvk as AttributedKind_IMAGE_getInstance,
  AttributedKind_VIDEO_getInstance3hytounsajbl9 as AttributedKind_VIDEO_getInstance,
  Media11pnq4fncxvn3 as Media,
  MediaType_Image_getInstance1fablsibfjiol as MediaType_Image_getInstance,
  MediaType_Movie_getInstance1eijtd848b6s5 as MediaType_Movie_getInstance,
  Relationship2ux8ridp3g081 as Relationship,
  Pageable147sowwoeu4a1 as Pageable,
  AttributedItem3lxrbzrxkkmbd as AttributedItem,
  AttributedKind_LINK_getInstance3fim4vnluo0dj as AttributedKind_LINK_getInstance,
  AttributedKind_ACCOUNT_getInstance1s6o86731y0bg as AttributedKind_ACCOUNT_getInstance,
  AttributedKind_HASH_TAG_getInstancezw6o4nxf67gs as AttributedKind_HASH_TAG_getInstance,
  AttributedKind_PLAIN_getInstanceom010mv09h47 as AttributedKind_PLAIN_getInstance,
  AttributedString10uprndqwqycb as AttributedString,
  Comment15eejp77e2skt as Comment,
  CommentForm1j82mm6reaclz as CommentForm,
  Reactionbm6xc9haqokj as Reaction,
  ReactionType_Like_getInstance1qkh2z57xry5v as ReactionType_Like_getInstance,
  Pagingql9fhm2916f9 as Paging,
  User6vplfeiqsy4v as User,
} from './planetlink-core.mjs';
import {
  setOf45ia9pnfhe90 as setOf,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  $3l5vvh8yg0ier as $,
  Exceptiondt2hlxn7j7vw as Exception,
  CancellationException3b36o9qz53rgr as CancellationException,
  contains3ue2qo8xhmpf1 as contains,
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
  split2bvyvnrlcifjv as split,
  last1vo29oleiqj36 as last,
  ArrayList3it5z8td81qkl as ArrayList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  copyToArray2j022khrow2yi as copyToArray,
  contains1tccixv8iwdcq as contains_0,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  trim6jpmwojjgb3l as trim,
  split3d3yeauc4rm2n as split_0,
  drop3na99dw9feawf as drop,
  lastOrNull1aq5oz189qoe1 as lastOrNull,
  emptyList1g2z5xcrvp2zy as emptyList,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  defineProp3ur6h3slcvq4x as defineProp,
  promisify1z0ncraq1ipzh as promisify,
  await3n7kedgocftsv as await_0,
  protoOf180f3jzyo7rfj as protoOf,
  plus310ted5e4i90h as plus,
  Regexxgw0gjiagf4z as Regex,
  substring3saq8ornu0luv as substring,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  Comparator2b3maoeh98xtg as Comparator,
  hashCodeq5arwsb9dgti as hashCode,
  compareValues1n2ayl87ihzfk as compareValues,
  Companion_getInstance138pnyl3l6agm as Companion_getInstance,
  fromInt2ii0rejb1w62w as fromInt,
  sortedWith2csnbbb21k0lg as sortedWith,
  take3onnpy6q7ctcz as take,
  replace3le3ie7l9k8aq as replace,
  toList383f556t1dixk as toList,
  addAll1k27qatfgp3k5 as addAll,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  Enum3alwj03lh1n41 as Enum,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  plus20p0vtfmu0596 as plus_0,
  toMutableList20rdgwi7d3cwi as toMutableList,
  removeLast3759euu1xvfa3 as removeLast,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trimEnd17pt8cbotbalj as trimEnd,
  convertToInty04h231mmjoh as convertToInt,
} from './kotlin-kotlin-stdlib.mjs';
import {
  BlogReblogRequest16kn2cac1qx3o as BlogReblogRequest,
  AuthOAuth2TokenRefreshRequest2qkm0i4hhwrle as AuthOAuth2TokenRefreshRequest,
  oAuth2TokenRefresh$virtualSuspendBridge1b3222nvmx33l as oAuth2TokenRefresh$virtualSuspendBridge,
  TumblrException2t7bqi0w6h7db as TumblrException,
  user$virtualSuspendBridge2jrwek72jsodv as user$virtualSuspendBridge,
  BlogPostsRequest3p17qdnwdy8zd as BlogPostsRequest,
  blogPosts$virtualSuspendBridge1n7eeyhjnfdwq as blogPosts$virtualSuspendBridge,
  BlogInfoRequest3j5lfprbe03pd as BlogInfoRequest,
  blogInfo$virtualSuspendBridge2k9usqtjrw87f as blogInfo$virtualSuspendBridge,
  UserFollowRequest3nm4aazxmh8cv as UserFollowRequest,
  follow$virtualSuspendBridgekw50ifozysjo as follow$virtualSuspendBridge,
  UserUnfollowRequest3faqsber48sdc as UserUnfollowRequest,
  unfollow$virtualSuspendBridge1s7j1pw9u0czf as unfollow$virtualSuspendBridge,
  UserFollowingRequest2pg9sclin02zh as UserFollowingRequest,
  userFollowing$virtualSuspendBridge1uvnsgwwflhbi as userFollowing$virtualSuspendBridge,
  BlogFollowersRequest35ktshkj1hdms as BlogFollowersRequest,
  blogFollowers$virtualSuspendBridge18pwi2kiq21nl as blogFollowers$virtualSuspendBridge,
  UserDashboardRequest3u1m2pwubj7je as UserDashboardRequest,
  userDashboard$virtualSuspendBridgefpsp1xwuh8xj as userDashboard$virtualSuspendBridge,
  BlogLikesRequest6deohx2mui3s as BlogLikesRequest,
  blogLikes$virtualSuspendBridgehw71get6i6eb as blogLikes$virtualSuspendBridge,
  TaggedRequest2yd9lu1fdhwah as TaggedRequest,
  tagged$virtualSuspendBridge1nc6v1m58n5jd as tagged$virtualSuspendBridge,
  postReblog$virtualSuspendBridge2hvzrlyeug6ou as postReblog$virtualSuspendBridge,
  postCreate$virtualSuspendBridge3mq5ejahrg7t7 as postCreate$virtualSuspendBridge,
  postEdit$virtualSuspendBridge3byootvgvqgdk as postEdit$virtualSuspendBridge,
  UserLikeRequest246u0oa6fnv1n as UserLikeRequest,
  like$virtualSuspendBridgedvkfyfxyrf8 as like$virtualSuspendBridge,
  UserUnlikeRequest1e96djb7a7g8n as UserUnlikeRequest,
  unlike$virtualSuspendBridge3036bk37i1ayq as unlike$virtualSuspendBridge,
  BlogDeleteRequesth1yokpnvc6hc as BlogDeleteRequest,
  postDelete$virtualSuspendBridge8gj3kmumh8kd as postDelete$virtualSuspendBridge,
  BlogTextPostRequest19de3zr0xnjkp as BlogTextPostRequest,
  BlogPhotoPostRequestbqwgjxfjmyxo as BlogPhotoPostRequest,
  FileRequest181pf3wogsxtb as FileRequest,
  TumblrFactory_instance20ionkwd9em2j as TumblrFactory_instance,
  AuthAuthorizeUrlRequest1r499joy9rgke as AuthAuthorizeUrlRequest,
  AuthOAuth2TokenRequest2r5ifxtwyt8sb as AuthOAuth2TokenRequest,
  oAuth2Token$virtualSuspendBridge33aq9hmoe1out as oAuth2Token$virtualSuspendBridge,
  LegacyPhotoPost16fr30eel9njf as LegacyPhotoPost,
  LegacyTextPostkhli59c5h1p5 as LegacyTextPost,
  LegacyVideoPost28kswhagpgbf8 as LegacyVideoPost,
  LegacyQuotePosty2a4ox4vvfy3 as LegacyQuotePost,
} from './ktumblr-core.mjs';
import { Urlowwyg1lanrqp as Url } from './ktor-ktor-http.mjs';
import {
  Builderfc803ui7pmuo as Builder,
  KsoupHtmlParser9vxe1747wh3m as KsoupHtmlParser,
} from './Ksoup-ksoup-html.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance_0 = this;
    this.CAPABILITIES = new Capabilities(setOf([SocialActionType_GetUserMe_getInstance(), SocialActionType_GetUser_getInstance(), SocialActionType_FollowUser_getInstance(), SocialActionType_UnfollowUser_getInstance(), SocialActionType_GetRelationship_getInstance(), SocialActionType_GetComment_getInstance(), SocialActionType_GetContext_getInstance(), SocialActionType_PostComment_getInstance(), SocialActionType_DeleteComment_getInstance(), SocialActionType_EditComment_getInstance(), SocialActionType_LikeComment_getInstance(), SocialActionType_UnlikeComment_getInstance(), SocialActionType_ShareComment_getInstance(), TimeLineActionType_HomeTimeLine_getInstance(), TimeLineActionType_UserCommentTimeLine_getInstance(), TimeLineActionType_UserLikeTimeLine_getInstance(), TimeLineActionType_UserMediaTimeLine_getInstance(), TimeLineActionType_SearchTimeLine_getInstance(), UsersActionType_GetFollowingUsers_getInstance(), UsersActionType_GetFollowerUsers_getInstance()]));
  }
  r94() {
    return this.CAPABILITIES;
  }
  te5(req, blogName) {
    var tmp = req.quoteId;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = tmp == null ? null : new ID(tmp);
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
    var quoteId = tmp$ret$1.o30_1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!req.images.j1()) {
      throw NotSupportedException.a3h('Tumblr cannot attach images to a reblog (quote).');
    }
    var tmp_0 = req.params.j4('reblog_key');
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : null;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw NotSupportedException.a3h('Tumblr quote requires the reblog key in params["reblog_key"]. Use TumblrComment.quoteForm.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var reblogKey = tmp_1;
    // Inline function 'kotlin.also' call
    var this_0 = new BlogReblogRequest();
    this_0.blogName = blogName;
    var tmp_2 = this_0;
    var tmp$ret$6;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_3 = _ID___get_value__impl__eg5m2i(quoteId);
      if (typeof tmp_3 === 'string') {
        tmp$ret$6 = _ID___get_value__impl__eg5m2i(quoteId);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_2.id = tmp$ret$6;
    this_0.reblogKey = reblogKey;
    var tmp_4 = this_0;
    var tmp0_safe_receiver = req.text;
    var tmp_5;
    if (tmp0_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_6;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp0_safe_receiver) > 0) {
        tmp_6 = tmp0_safe_receiver;
      } else {
        tmp_6 = null;
      }
      tmp_5 = tmp_6;
    }
    tmp_4.comment = tmp_5;
    return this_0;
  }
}
class TumblrAction extends AccountActionImpl {
  constructor(account, auth) {
    Companion_getInstance_0();
    super(account);
    this.auth = auth;
  }
  y64() {
    return this.auth;
  }
  capabilities() {
    return Companion_getInstance_0().CAPABILITIES;
  }
  userAvatar(host) {
    var size = TumblrIconSize_S512_getInstance();
    return TumblrMapper_instance.ee6(host, size);
  }
  *g2w($completion) {
    return yield* /*#__NOINLINE__*/fetchUserMe(this, $completion);
  }
  *o2z($completion) {
    var tmp0_elvis_lhs = this.me;
    return tmp0_elvis_lhs == null ? (yield* /*#__NOINLINE__*/fetchUserMe(this, $completion)) : tmp0_elvis_lhs;
  }
  *h2w(id, $completion) {
    return yield* /*#__NOINLINE__*/fetchUser(this, id, $completion);
  }
  *i2w(url, $completion) {
    var name = last(split(url, ['/']));
    return yield* /*#__NOINLINE__*/fetchUser(this, Identify.o3a(service(this), _ID___init__impl__k1lb7e(name)), $completion);
  }
  *j2w(id, $completion) {
    yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$followUser$slambda(this, id), $completion);
    return Unit_instance;
  }
  *k2w(id, $completion) {
    yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$unfollowUser$slambda(this, id), $completion);
    return Unit_instance;
  }
  *l2w(id, $completion) {
    throw NotSupportedException.a34();
  }
  *m2w(id, $completion) {
    throw NotSupportedException.a34();
  }
  *n2w(id, $completion) {
    throw NotSupportedException.a34();
  }
  *o2w(id, $completion) {
    throw NotSupportedException.a34();
  }
  *p2w(id, $completion) {
    if (id instanceof TumblrUser) {
      return ensureNotNull(id.relationship);
    }
    var user = yield* /*#__NOINLINE__*/fetchUser(this, id, $completion);
    if (user instanceof TumblrUser) {
      return ensureNotNull(user.relationship);
    }
    throw IllegalStateException.m();
  }
  *z2w(id, paging, $completion) {
    var blogs = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$followingUsers$slambda(this, paging), $completion);
    var tmp = TumblrMapper_instance;
    // Inline function 'kotlin.checkNotNull' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (blogs == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$1 = blogs;
        break $l$block;
      }
    }
    var tmp$ret$0 = tmp$ret$1;
    return tmp.je6(tmp$ret$0, service(this), paging);
  }
  *a2x(id, paging, $completion) {
    var users = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$followerUsers$slambda(this, id, paging), $completion);
    var tmp = TumblrMapper_instance;
    // Inline function 'kotlin.checkNotNull' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (users == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$1 = users;
        break $l$block;
      }
    }
    var tmp$ret$0 = tmp$ret$1;
    return tmp.ke6(tmp$ret$0, service(this), paging);
  }
  *b2x(query, paging, $completion) {
    throw NotSupportedException.a34();
  }
  *d2x(paging, $completion) {
    throw NotSupportedException.a34();
  }
  *c2x(paging, $completion) {
    var posts = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$homeTimeLine$slambda(this, paging), $completion);
    var tmp = TumblrMapper_instance;
    // Inline function 'kotlin.checkNotNull' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (posts == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$1 = posts;
        break $l$block;
      }
    }
    var tmp$ret$0 = tmp$ret$1;
    return tmp.le6(tmp$ret$0, service(this), paging);
  }
  *e2x(id, paging, $completion) {
    var posts = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$userCommentTimeLine$slambda(this, id, paging), $completion);
    var tmp = TumblrMapper_instance;
    // Inline function 'kotlin.checkNotNull' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (posts == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$1 = posts;
        break $l$block;
      }
    }
    var tmp$ret$0 = tmp$ret$1;
    return tmp.le6(tmp$ret$0, service(this), paging);
  }
  *f2x(id, paging, $completion) {
    var posts = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$userLikeTimeLine$slambda(this, id, paging), $completion);
    var tmp = TumblrMapper_instance;
    // Inline function 'kotlin.checkNotNull' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (posts == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$1 = posts;
        break $l$block;
      }
    }
    var tmp$ret$0 = tmp$ret$1;
    return tmp.le6(tmp$ret$0, service(this), paging);
  }
  *g2x(id, paging, $completion) {
    var posts = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$userMediaTimeLine$slambda(this, id, paging), $completion);
    var tmp = TumblrMapper_instance;
    // Inline function 'kotlin.checkNotNull' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (posts == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$1 = posts;
        break $l$block;
      }
    }
    var tmp$ret$0 = tmp$ret$1;
    return tmp.le6(tmp$ret$0, service(this), paging);
  }
  *h2x(query, paging, $completion) {
    var posts = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$searchTimeLine$slambda(this, query, paging), $completion);
    var tmp = TumblrMapper_instance;
    // Inline function 'kotlin.checkNotNull' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (posts == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$1 = posts;
        break $l$block;
      }
    }
    var tmp$ret$0 = tmp$ret$1;
    return tmp.le6(tmp$ret$0, service(this), paging);
  }
  *p2x(req, $completion) {
    var me = yield* this.p2z($completion);
    var tmp = req.quoteId;
    if (!((tmp == null ? null : new ID(tmp)) == null)) {
      var tmp_0 = Companion_getInstance_0();
      // Inline function 'work.socialhub.planetlink.model.Identify.id' call
      var tmp_1 = me.id;
      var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          var message = 'id is null.';
          throw IllegalStateException.o(toString(message));
        } else {
          tmp$ret$1 = tmp0.o30_1;
          break $l$block;
        }
      }
      var tmp0_0 = tmp$ret$1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
        if (typeof tmp_2 === 'string') {
          tmp$ret$3 = _ID___get_value__impl__eg5m2i(tmp0_0);
          break $l$block_0;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      var tmp$ret$0 = tmp$ret$3;
      var reblog = tmp_0.te5(req, tmp$ret$0);
      yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$postComment$slambda(this, reblog), $completion);
      return Unit_instance;
    }
    var post;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!req.images.j1()) {
      // Inline function 'kotlin.also' call
      var this_0 = new BlogPhotoPostRequest();
      var tmp_3 = this_0;
      // Inline function 'kotlin.collections.map' call
      var this_1 = req.images;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.i2(collectionSizeOrDefault(this_1, 10));
      var _iterator__ex2g4s = this_1.l1();
      while (_iterator__ex2g4s.m1()) {
        var item = _iterator__ex2g4s.n1();
        var tmp0_data = item.data;
        var tmp1_name = item.name;
        var tmp$ret$9 = new FileRequest(tmp1_name, tmp0_data);
        destination.j2(tmp$ret$9);
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_3.data = copyToArray(destination);
      this_0.caption = req.text;
      this_0.type = 'photo';
      post = this_0;
    } else {
      // Inline function 'kotlin.also' call
      var this_2 = new BlogTextPostRequest();
      this_2.body = req.text;
      this_2.type = 'text';
      post = this_2;
    }
    var tmp_4 = post;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_5 = me.id;
    var tmp0_1 = tmp_5 == null ? null : new ID(tmp_5);
    var tmp$ret$14;
    $l$block_1: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_1 == null) {
        var message_0 = 'id is null.';
        throw IllegalStateException.o(toString(message_0));
      } else {
        tmp$ret$14 = tmp0_1.o30_1;
        break $l$block_1;
      }
    }
    var tmp0_2 = tmp$ret$14;
    var tmp$ret$16;
    $l$block_2: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_6 = _ID___get_value__impl__eg5m2i(tmp0_2);
      if (typeof tmp_6 === 'string') {
        tmp$ret$16 = _ID___get_value__impl__eg5m2i(tmp0_2);
        break $l$block_2;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_4.blogName = tmp$ret$16;
    yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$postComment$slambda_0(this, post), $completion);
    return Unit_instance;
  }
  *a2y(id, req, $completion) {
    if (id instanceof TumblrComment) {
      var me = yield* this.p2z($completion);
      var post;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!req.images.j1()) {
        // Inline function 'kotlin.also' call
        var this_0 = new BlogPhotoPostRequest();
        var tmp = this_0;
        // Inline function 'kotlin.collections.map' call
        var this_1 = req.images;
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList.i2(collectionSizeOrDefault(this_1, 10));
        var _iterator__ex2g4s = this_1.l1();
        while (_iterator__ex2g4s.m1()) {
          var item = _iterator__ex2g4s.n1();
          var tmp0_data = item.data;
          var tmp1_name = item.name;
          var tmp$ret$5 = new FileRequest(tmp1_name, tmp0_data);
          destination.j2(tmp$ret$5);
        }
        // Inline function 'kotlin.collections.toTypedArray' call
        tmp.data = copyToArray(destination);
        this_0.caption = req.text;
        this_0.type = 'photo';
        post = this_0;
      } else {
        // Inline function 'kotlin.also' call
        var this_2 = new BlogTextPostRequest();
        this_2.body = req.text;
        this_2.type = 'text';
        post = this_2;
      }
      var tmp_0 = post;
      // Inline function 'work.socialhub.planetlink.model.Identify.id' call
      var tmp_1 = id.id;
      var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
      var tmp$ret$10;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          var message = 'id is null.';
          throw IllegalStateException.o(toString(message));
        } else {
          tmp$ret$10 = tmp0.o30_1;
          break $l$block;
        }
      }
      var tmp0_0 = tmp$ret$10;
      var tmp$ret$12;
      $l$block_0: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
        if (typeof tmp_2 === 'string') {
          tmp$ret$12 = _ID___get_value__impl__eg5m2i(tmp0_0);
          break $l$block_0;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp_0.id = tmp$ret$12;
      var tmp_3 = post;
      // Inline function 'work.socialhub.planetlink.model.Identify.id' call
      var tmp_4 = me.id;
      var tmp0_1 = tmp_4 == null ? null : new ID(tmp_4);
      var tmp$ret$14;
      $l$block_1: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0_1 == null) {
          var message_0 = 'id is null.';
          throw IllegalStateException.o(toString(message_0));
        } else {
          tmp$ret$14 = tmp0_1.o30_1;
          break $l$block_1;
        }
      }
      var tmp0_2 = tmp$ret$14;
      var tmp$ret$16;
      $l$block_2: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_5 = _ID___get_value__impl__eg5m2i(tmp0_2);
        if (typeof tmp_5 === 'string') {
          tmp$ret$16 = _ID___get_value__impl__eg5m2i(tmp0_2);
          break $l$block_2;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp_3.blogName = tmp$ret$16;
      yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$editComment$slambda(this, post), $completion);
    } else {
      throw NotSupportedException.a3h('TumblrComment (id only) required.');
    }
    return Unit_instance;
  }
  *r2x(id, $completion) {
    if (id instanceof TupleIdentify) {
      var posts = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$comment$slambda(this, id), $completion);
      // Inline function 'kotlin.checkNotNull' call
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (posts == null) {
          var message = 'Required value was null.';
          throw IllegalStateException.o(toString(message));
        } else {
          break $l$block;
        }
      }
      var trails = TumblrMapper_instance.we5(posts);
      return TumblrMapper_instance.me6(posts[0], trails, service(this));
    } else {
      throw NotSupportedException.a3h('TupleIdentify required.');
    }
  }
  *s2x(url, $completion) {
    var blogName = split(url, ['/']).m2(3);
    var postId = last(split(url, ['/']));
    var posts = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$comment$slambda_0(this, blogName, postId), $completion);
    // Inline function 'kotlin.checkNotNull' call
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (posts == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        break $l$block;
      }
    }
    var trails = TumblrMapper_instance.we5(posts);
    return TumblrMapper_instance.me6(posts[0], trails, service(this));
  }
  *t2x(id, $completion) {
    yield* /*#__NOINLINE__*/doLikeComment(this, id, $completion);
    return Unit_instance;
  }
  *u2x(id, $completion) {
    yield* /*#__NOINLINE__*/doUnlikeComment(this, id, $completion);
    return Unit_instance;
  }
  *v2x(id, $completion) {
    yield* /*#__NOINLINE__*/doShareComment(this, id, $completion);
    return Unit_instance;
  }
  *w2x(id, $completion) {
    throw NotSupportedException.a34();
  }
  *x2x(id, reaction, $completion) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(reaction) > 0) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var type = reaction.toLowerCase();
      if (contains_0(TumblrReactionType_Like_getInstance().codes, type)) {
        yield* /*#__NOINLINE__*/doLikeComment(this, id, $completion);
        return Unit_instance;
      }
      if (contains_0(TumblrReactionType_Reblog_getInstance().codes, type)) {
        yield* /*#__NOINLINE__*/doShareComment(this, id, $completion);
        return Unit_instance;
      }
    }
    throw NotSupportedException.a34();
  }
  *y2x(id, reaction, $completion) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(reaction) > 0) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var type = reaction.toLowerCase();
      if (contains_0(TumblrReactionType_Like_getInstance().codes, type)) {
        yield* /*#__NOINLINE__*/doUnlikeComment(this, id, $completion);
        return Unit_instance;
      }
    }
    throw NotSupportedException.a34();
  }
  *z2x(id, $completion) {
    if (id instanceof TumblrComment) {
      var blog = yield* this.p2z($completion);
      yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$deleteComment$slambda(this, blog, id), $completion);
    } else {
      throw NotSupportedException.a3h('TumblrComment (id, blog name only) required.');
    }
    return Unit_instance;
  }
  *l2y(id, $completion) {
    var context = new Context();
    if (id instanceof TupleIdentify) {
      var posts = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$commentContexts$slambda(this, id), $completion);
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      var tmp;
      if (posts == null) {
        tmp = true;
      } else {
        // Inline function 'kotlin.collections.isEmpty' call
        tmp = posts.length === 0;
      }
      if (!tmp) {
        var post = posts[0];
        // Inline function 'kotlin.collections.mutableListOf' call
        var ancestors = ArrayList.k2();
        var currentParentUrl = post.parentPostUrl;
        while (!(currentParentUrl == null)) {
          var parentParts = split_0(trim(currentParentUrl, charArrayOf([_Char___init__impl__6a9atx(47)])), charArrayOf([_Char___init__impl__6a9atx(47)]));
          if (parentParts.l2() >= 2) {
            var parentBlog = parentParts.m2(0);
            var parentId = lastOrNull(drop(parentParts, 1));
            if (!(parentId == null)) {
              var parentPosts = yield* /*#__NOINLINE__*/validateToken(this, TumblrAction$commentContexts$slambda_0(this, parentBlog, parentId), $completion);
              // Inline function 'kotlin.collections.isNullOrEmpty' call
              var tmp_0;
              if (parentPosts == null) {
                tmp_0 = true;
              } else {
                // Inline function 'kotlin.collections.isEmpty' call
                tmp_0 = parentPosts.length === 0;
              }
              if (!tmp_0) {
                var parentTrails = TumblrMapper_instance.we5(parentPosts);
                ancestors.s4(0, TumblrMapper_instance.me6(parentPosts[0], parentTrails, service(this)));
                currentParentUrl = parentPosts[0].parentPostUrl;
              } else {
                currentParentUrl = null;
              }
            } else {
              currentParentUrl = null;
            }
          } else {
            currentParentUrl = null;
          }
        }
        context.ancestors = ancestors;
        var tmp_1 = context;
        // Inline function 'kotlin.collections.listOf' call
        tmp_1.descendants = emptyList();
      }
    }
    return context;
  }
  *o2y(id, paging, $completion) {
    throw NotSupportedException.a34();
  }
  *q2y(id, paging, $completion) {
    throw NotSupportedException.a34();
  }
  *r2y(id, paging, $completion) {
    throw NotSupportedException.a34();
  }
  *z2y(paging, $completion) {
    throw NotSupportedException.a34();
  }
  *b2z(id, paging, $completion) {
    throw NotSupportedException.a34();
  }
  *c2z(req, $completion) {
    throw NotSupportedException.a34();
  }
  *e2z(callback, $completion) {
    throw NotSupportedException.a34();
  }
  *g2z(callback, $completion) {
    throw NotSupportedException.a34();
  }
}
class TumblrAuth {
  constructor() {
    this.consumerKey = null;
    this.consumerSecret = null;
    this.accessToken = null;
    this.refreshToken = null;
    var tmp = this;
    tmp.ae6_1 = TumblrAuth$tokenRefreshCallback$lambda;
  }
  pe6(_set____db54di) {
    this.consumerKey = _set____db54di;
  }
  qe6() {
    return this.consumerKey;
  }
  re6(_set____db54di) {
    this.consumerSecret = _set____db54di;
  }
  se6() {
    return this.consumerSecret;
  }
  hak(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  iak() {
    return this.accessToken;
  }
  gc2(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  hc2() {
    return this.refreshToken;
  }
  te6(_set____db54di) {
    this.ae6_1 = _set____db54di;
  }
  ue6() {
    return this.ae6_1;
  }
  l31() {
    var tmp = TumblrFactory_instance;
    var tmp0 = this.consumerKey;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Set consumer info first.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp.instance(tmp$ret$0, this.consumerSecret, this.accessToken, this.refreshToken);
  }
  setConsumerInfo(consumerKey, consumerSecret) {
    // Inline function 'kotlin.also' call
    this.consumerKey = consumerKey;
    this.consumerSecret = consumerSecret;
    return this;
  }
  accountWithAccessToken(accessToken, refreshToken) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    // Inline function 'kotlin.also' call
    var this_0 = new Account();
    this_0.action = new TumblrAction(this_0, this);
    this_0.service = new Service('tumber', this_0);
    return this_0;
  }
  *ve6(redirectUri, state, scope, $completion) {
    var tmp = TumblrFactory_instance;
    var tmp0 = this.consumerKey;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Set consumer info first.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var tmp_0 = tmp.instance(tmp$ret$0, this.consumerSecret).auth();
    // Inline function 'kotlin.also' call
    var this_0 = new AuthAuthorizeUrlRequest();
    this_0.redirectUri = redirectUri;
    if (!(state == null)) {
      this_0.state = state;
    }
    if (!(scope == null)) {
      this_0.scope = scope;
    }
    return tmp_0.authorizeUrl(this_0);
  }
  we6(redirectUri, state, scope, $completion, $super) {
    state = state === VOID ? null : state;
    scope = scope === VOID ? null : scope;
    return $super === VOID ? this.ve6(redirectUri, state, scope, $completion) : $super.ve6.call(this, redirectUri, state, scope, $completion);
  }
  authorizationURL(redirectUri, state, scope) {
    return promisify(($completion) => this.we6(redirectUri, state, scope, $completion));
  }
  *xe6(redirectUri, state, scope, $completion) {
    return this.authorizationURL === protoOf(TumblrAuth).authorizationURL ? (yield* this.we6(redirectUri, state, scope, $completion)) : (yield* await_0(this.authorizationURL(redirectUri, state, scope), $completion));
  }
  *ye6(redirectUri, code, $completion) {
    var tmp = TumblrFactory_instance;
    var tmp0 = this.consumerKey;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Set consumer info first.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var tmp_0 = tmp.instance(tmp$ret$0, this.consumerSecret).auth();
    // Inline function 'kotlin.also' call
    var this_0 = new AuthOAuth2TokenRequest();
    this_0.clientId = this.consumerKey;
    this_0.clientSecret = this.consumerSecret;
    this_0.redirectUri = redirectUri;
    this_0.code = code;
    var response = yield* oAuth2Token$virtualSuspendBridge(tmp_0, this_0, $completion);
    var tmp0_0 = response.data.accessToken;
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_0 == null) {
        var message_0 = 'Tumblr AccessToken is missing';
        throw IllegalStateException.o(toString(message_0));
      } else {
        tmp$ret$4 = tmp0_0;
        break $l$block_0;
      }
    }
    return this.accountWithAccessToken(tmp$ret$4, response.data.refreshToken);
  }
  accountWithVerifier(redirectUri, code) {
    return promisify(($completion) => this.ye6(redirectUri, code, $completion));
  }
  *ze6(redirectUri, code, $completion) {
    return this.accountWithVerifier === protoOf(TumblrAuth).accountWithVerifier ? (yield* this.ye6(redirectUri, code, $completion)) : (yield* await_0(this.accountWithVerifier(redirectUri, code), $completion));
  }
  ae7(callback) {
    // Inline function 'kotlin.also' call
    this.ae6_1 = callback;
    return this;
  }
  get accessor() {
    return this.l31();
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.be7_1 = function_0;
  }
  wj(a, b) {
    return this.be7_1(a, b);
  }
  compare(a, b) {
    return this.wj(a, b);
  }
  d5() {
    return this.be7_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.d5(), other.d5());
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
    return hashCode(this.d5());
  }
}
class TumblrMapper {
  ve5(user, service) {
    var indexedObject = ensureNotNull(user.blogs);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var blog = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (blog.isPrimary === true) {
        return this.ze5(blog, service);
      }
    }
    throw SocialHubException.b3h('Primary blog is not found.');
  }
  ze5(blog, service) {
    // Inline function 'kotlin.also' call
    var this_0 = TumblrUser.ce7(service);
    var host = TumblrMapper_instance.de7(ensureNotNull(blog.url));
    this_0.id = _ID___init__impl__k1lb7e(host);
    this_0.y38(ensureNotNull(blog.name));
    this_0.blogTitle = blog.title;
    this_0.x37(ensureNotNull(blog.url));
    this_0.likesCount = blog.likeCount;
    this_0.followersCount = blog.followerCount;
    this_0.postsCount = blog.postCount;
    var tmp0_safe_receiver = blog.description;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.description = AttributedStringEx_instance.tumblr(Companion_instance, tmp0_safe_receiver);
    }
    var tmp = this_0;
    var tmp1_safe_receiver = blog.avatar;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[0];
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.url;
    tmp.iconImageUrl = tmp3_elvis_lhs == null ? TumblrMapper_instance.ee6(host, TumblrIconSize_S512_getInstance()) : tmp3_elvis_lhs;
    var tmp_0 = this_0;
    // Inline function 'kotlin.also' call
    var this_1 = new Relationship();
    this_1.following = blog.isFollowed === true;
    this_1.blocking = blog.isBlockedFromPrimary === true;
    tmp_0.relationship = this_1;
    return this_0;
  }
  xe5(post, trails, service) {
    // Inline function 'kotlin.also' call
    var this_0 = this.ze5(ensureNotNull(post.blog), service);
    var tmp0_safe_receiver = post.blog;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.name;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0;
        break $l$block;
      }
    }
    var name = tmp$ret$3;
    if (trails.h4(name)) {
      var trail = trails.j4(name);
      var tmp2_safe_receiver = trail == null ? null : trail.blog;
      var theme = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.theme;
      if (!(theme == null)) {
        this_0.coverImageUrl = theme.headerImage;
      }
    }
    return this_0;
  }
  ee7(user, service) {
    // Inline function 'kotlin.also' call
    var this_0 = TumblrUser.ce7(service);
    this_0.id = _ID___init__impl__k1lb7e(TumblrMapper_instance.de7(ensureNotNull(user.name)));
    this_0.y38(ensureNotNull(user.name));
    this_0.x37(ensureNotNull(user.url));
    var tmp = this_0;
    // Inline function 'kotlin.also' call
    var this_1 = new Relationship();
    this_1.following = user.following === true;
    tmp.relationship = this_1;
    return this_0;
  }
  fe7(post, trails, service) {
    // Inline function 'kotlin.also' call
    var this_0 = TumblrUser.ce7(service);
    var host = TumblrMapper_instance.de7(ensureNotNull(post.rebloggedRootUrl));
    var name = ensureNotNull(post.rebloggedRootName);
    this_0.id = _ID___init__impl__k1lb7e(host);
    this_0.y38(name);
    this_0.iconImageUrl = TumblrMapper_instance.ee6(host, TumblrIconSize_S512_getInstance());
    this_0.x37('TODO');
    if (trails.h4(name)) {
      var trail = trails.j4(name);
      var tmp1_safe_receiver = trail == null ? null : trail.blog;
      var theme = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.theme;
      if (!(theme == null)) {
        this_0.coverImageUrl = theme.headerImage;
      }
    }
    return this_0;
  }
  me6(post, trails, service) {
    // Inline function 'kotlin.also' call
    var this_0 = TumblrComment.ge7(service);
    this_0.id = _ID___init__impl__k1lb7e(ensureNotNull(post.idString));
    this_0.x37(ensureNotNull(post.postUrl));
    this_0.noteCount = post.noteCount;
    this_0.reblogKey = post.reblogKey;
    this_0.createAt = Companion_getInstance().mv(fromInt(ensureNotNull(post.timestamp)));
    this_0.user = TumblrMapper_instance.xe5(post, trails, service);
    if (!(post.parentPostUrl == null)) {
      this_0.sharedComment = TumblrMapper_instance.ie7(post, trails, service);
      var tmp = this_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp.medias = emptyList();
      var parts = split_0(trim(ensureNotNull(post.parentPostUrl), charArrayOf([_Char___init__impl__6a9atx(47)])), charArrayOf([_Char___init__impl__6a9atx(47)]));
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!parts.j1()) {
        this_0.parentId = lastOrNull(parts);
      }
      if (!(post.rebloggedRootId == null)) {
        this_0.rootId = post.rebloggedRootId;
      }
    } else {
      TumblrMapper_instance.he7(this_0, post);
      if (!(post.rebloggedRootId == null)) {
        this_0.rootId = post.rebloggedRootId;
      }
    }
    return this_0;
  }
  ie7(post, trails, service) {
    // Inline function 'kotlin.also' call
    var this_0 = TumblrComment.ge7(service);
    this_0.id = _ID___init__impl__k1lb7e(ensureNotNull(post.rebloggedRootId));
    this_0.x37(ensureNotNull(post.rebloggedRootUrl));
    this_0.noteCount = post.noteCount;
    this_0.reblogKey = post.reblogKey;
    this_0.reblogKeyPostId = post.idString;
    this_0.createAt = Companion_getInstance().mv(fromInt(ensureNotNull(post.timestamp)));
    this_0.user = TumblrMapper_instance.fe7(post, trails, service);
    TumblrMapper_instance.he7(this_0, post);
    if (!(post.idString == null)) {
      this_0.parentId = post.idString;
    }
    return this_0;
  }
  he7(model, post) {
    var tmp0_safe_receiver = post.trail;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (!(tmp0_safe_receiver.length === 0)) {
        var tmp$ret$4;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var inductionVariable = 0;
          var last = tmp0_safe_receiver.length;
          while (inductionVariable < last) {
            var element = tmp0_safe_receiver[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            if (element.isCurrentItem) {
              tmp$ret$4 = element;
              break $l$block;
            }
          }
          tmp$ret$4 = null;
        }
        var tmp0_safe_receiver_0 = tmp$ret$4;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.also' call
          textMedia(TumblrMapper_instance, model, removeSharedBlogLink(TumblrMapper_instance, ensureNotNull(tmp0_safe_receiver_0.contentRaw)));
        }
      }
    }
    if (post instanceof LegacyPhotoPost) {
      model.medias = plus(model.medias, photos(this, ensureNotNull(post.photos)));
      if (model.text == null) {
        textMedia(this, model, removeSharedBlogLink(this, ensureNotNull(post.caption)));
      }
    }
    if (post instanceof LegacyTextPost) {
      if (model.text == null) {
        textMedia(this, model, removeSharedBlogLink(this, ensureNotNull(post.se0_1)));
      }
    }
    if (post instanceof LegacyVideoPost) {
      if (model.text == null) {
        textMedia(this, model, removeSharedBlogLink(this, ensureNotNull(post.caption)));
      }
    }
    if (post instanceof LegacyQuotePost) {
      if (model.text == null) {
        var str = '' + post.text + ' / ' + post.source;
        textMedia(this, model, removeSharedBlogLink(this, str));
      }
    }
  }
  le6(posts, service, paging) {
    var trails = this.we5(posts);
    // Inline function 'kotlin.also' call
    var this_0 = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.i2(posts.length);
    var inductionVariable = 0;
    var last = posts.length;
    while (inductionVariable < last) {
      var item = posts[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$4 = TumblrMapper_instance.me6(item, trails, service);
      destination.j2(tmp$ret$4);
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = TumblrMapper$timeLine$lambda;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp);
    var tmp$ret$5 = sortedWith(destination, tmp$ret$6);
    this_0.u3b(tmp$ret$5);
    this_0.s3b(Companion_instance_1.fromPaging(paging));
    return this_0;
  }
  ke6(users, service, paging) {
    // Inline function 'kotlin.also' call
    var this_0 = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.i2(users.length);
    var inductionVariable = 0;
    var last = users.length;
    while (inductionVariable < last) {
      var item = users[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$4 = TumblrMapper_instance.ee7(item, service);
      destination.j2(tmp$ret$4);
    }
    this_0.u3b(destination);
    this_0.s3b(Companion_instance_1.fromPaging(paging));
    return this_0;
  }
  je6(blogs, service, paging) {
    // Inline function 'kotlin.also' call
    var this_0 = new Pageable();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.i2(blogs.length);
    var inductionVariable = 0;
    var last = blogs.length;
    while (inductionVariable < last) {
      var item = blogs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$4 = TumblrMapper_instance.ze5(item, service);
      destination.j2(tmp$ret$4);
    }
    this_0.u3b(destination);
    this_0.s3b(Companion_instance_1.fromPaging(paging));
    return this_0;
  }
  ue5(blogs) {
    var inductionVariable = 0;
    var last = blogs.length;
    while (inductionVariable < last) {
      var blog = blogs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (blog.isPrimary === true) {
        return this.je7(blog);
      }
    }
    throw IllegalStateException.o('Primary blog not found.');
  }
  je7(blog) {
    return this.de7(ensureNotNull(blog.url));
  }
  de7(blogUrl) {
    var host = urlHost(this, blogUrl);
    if (host === 'www.tumblr.com') {
      var tmp0 = split(blogUrl, ['/']);
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.dropLastWhile' call
        if (!tmp0.j1()) {
          var iterator = tmp0.q2(tmp0.l2());
          while (iterator.v7()) {
            // Inline function 'kotlin.text.isEmpty' call
            var this_0 = iterator.x7();
            if (!(charSequenceLength(this_0) === 0)) {
              tmp$ret$0 = take(tmp0, iterator.w7() + 1 | 0);
              break $l$block;
            }
          }
        }
        tmp$ret$0 = emptyList();
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_1 = tmp$ret$0;
      var elements = copyToArray(this_1);
      var inductionVariable = 0;
      var last = elements.length - 2 | 0;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (elements[i] === 'blog' && elements[i + 1 | 0] === 'view') {
            host = replace(host, 'www', elements[i + 2 | 0]);
          }
        }
         while (inductionVariable < last);
    }
    return host;
  }
  we5(posts) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList.k2();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = posts.length;
    while (inductionVariable < last) {
      var element = posts[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0_safe_receiver = element.trail;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.j2(tmp0_safe_receiver);
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_0 = ArrayList.k2();
    var _iterator__ex2g4s = destination.l1();
    while (_iterator__ex2g4s.m1()) {
      var element_0 = _iterator__ex2g4s.n1();
      var list = toList(element_0);
      addAll(destination_0, list);
    }
    var trails = destination_0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.o5();
    var _iterator__ex2g4s_0 = trails.l1();
    while (_iterator__ex2g4s_0.m1()) {
      var trail = _iterator__ex2g4s_0.n1();
      var tmp0_safe_receiver_0 = trail.blog;
      // Inline function 'kotlin.checkNotNull' call
      var tmp0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.name;
      var tmp$ret$14;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          var message = 'Required value was null.';
          throw IllegalStateException.o(toString(message));
        } else {
          tmp$ret$14 = tmp0;
          break $l$block;
        }
      }
      var name = tmp$ret$14;
      // Inline function 'kotlin.collections.set' call
      this_0.u4(name, trail);
    }
    return this_0;
  }
  ye5(to, from) {
    if (!(to == null) && !(from == null)) {
      to.coverImageUrl = from.coverImageUrl;
    }
  }
  ee6(host, size) {
    return 'https://api.tumblr.com/v2/blog/' + host + '/avatar/' + size.size;
  }
}
class TumblrFormKey {
  constructor() {
    this.REBLOG_KEY = 'reblog_key';
  }
  me7() {
    return this.REBLOG_KEY;
  }
}
class TumblrIconSize extends Enum {
  constructor(name, ordinal, size) {
    super(name, ordinal);
    this.size = size;
  }
  l2() {
    return this.size;
  }
  get name() {
    return this.d1();
  }
  get ordinal() {
    return this.x4();
  }
}
class TumblrReactionType extends Enum {
  constructor(name, ordinal, codes) {
    super(name, ordinal);
    this.codes = codes;
  }
  j35() {
    return this.codes;
  }
  get name() {
    return this.d1();
  }
  get ordinal() {
    return this.x4();
  }
}
class StateType extends Enum {
  get name() {
    return this.d1();
  }
  get ordinal() {
    return this.x4();
  }
}
class Tag {
  constructor(name, attributes, context) {
    var tmp;
    if (context === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = context;
    }
    context = tmp;
    this.name = name;
    this.attributes = attributes;
    this.context = context;
  }
  d1() {
    return this.name;
  }
  j4q() {
    return this.attributes;
  }
  pe7(_set____db54di) {
    this.context = _set____db54di;
  }
  od() {
    return this.context;
  }
  get(text) {
    return this.attributes.j4(text);
  }
  tm() {
    return this.name;
  }
  um() {
    return this.attributes;
  }
  gx() {
    return this.context;
  }
  qe7(name, attributes, context) {
    return new Tag(name, attributes, context);
  }
  copy(name, attributes, context, $super) {
    name = name === VOID ? this.name : name;
    attributes = attributes === VOID ? this.attributes : attributes;
    context = context === VOID ? this.context : context;
    return $super === VOID ? this.qe7(name, attributes, context) : $super.qe7.call(this, name, attributes, context);
  }
  toString() {
    return 'Tag(name=' + this.name + ', attributes=' + toString(this.attributes) + ', context=' + toString(this.context) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.name);
    result = imul(result, 31) + hashCode(this.attributes) | 0;
    result = imul(result, 31) + hashCode(this.context) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Tag))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!equals(this.attributes, other.attributes))
      return false;
    if (!equals(this.context, other.context))
      return false;
    return true;
  }
}
class State {
  constructor(type, tags, text) {
    text = text === VOID ? '' : text;
    this.type = type;
    this.tags = tags;
    this.text = text;
  }
  x3a() {
    return this.type;
  }
  bav() {
    return this.tags;
  }
  j6g(_set____db54di) {
    this.text = _set____db54di;
  }
  d37() {
    return this.text;
  }
  isVisible() {
    var tmp0 = this.tags;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        var tmp0_safe_receiver = element.attributes.j4('class');
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : contains(tmp0_safe_receiver, 'invisible');
        if (tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    return tmp$ret$0 == null;
  }
  tm() {
    return this.type;
  }
  um() {
    return this.tags;
  }
  gx() {
    return this.text;
  }
  re7(type, tags, text) {
    return new State(type, tags, text);
  }
  copy(type, tags, text, $super) {
    type = type === VOID ? this.type : type;
    tags = tags === VOID ? this.tags : tags;
    text = text === VOID ? this.text : text;
    return $super === VOID ? this.re7(type, tags, text) : $super.re7.call(this, type, tags, text);
  }
  toString() {
    return 'State(type=' + this.type.toString() + ', tags=' + toString(this.tags) + ', text=' + this.text + ')';
  }
  hashCode() {
    var result = this.type.hashCode();
    result = imul(result, 31) + hashCode(this.tags) | 0;
    result = imul(result, 31) + getStringHashCode(this.text) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof State))
      return false;
    if (!this.type.equals(other.type))
      return false;
    if (!equals(this.tags, other.tags))
      return false;
    if (!(this.text === other.text))
      return false;
    return true;
  }
}
class AttributedStringEx {
  tumblr(_this__u8e3s4, text) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var states = ArrayList.k2();
    var tmp = StateType_Init_getInstance();
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$1 = emptyList();
    states.j2(new State(tmp, tmp$ret$1));
    var tmp_0 = new Builder();
    var tmp_1 = tmp_0.dd0(AttributedStringEx$tumblr$lambda(states));
    var tmp_2 = tmp_1.ed0(AttributedStringEx$tumblr$lambda_0(states));
    var tmp_3 = tmp_2.cd0(AttributedStringEx$tumblr$lambda_1(states));
    var handler = tmp_3.bd0(AttributedStringEx$tumblr$lambda_2).l43();
    var parser = KsoupHtmlParser.ed2(handler);
    parser.l1u(text);
    parser.ud2();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.k2();
    var _iterator__ex2g4s = states.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!element.tags.j1()) {
        destination.j2(element);
      }
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList.k2();
    var _iterator__ex2g4s_0 = destination.l1();
    while (_iterator__ex2g4s_0.m1()) {
      var element_0 = _iterator__ex2g4s_0.n1();
      if (element_0.isVisible()) {
        destination_0.j2(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_1 = ArrayList.k2();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = destination_0.l1();
    while (_iterator__ex2g4s_1.m1()) {
      var element_1 = _iterator__ex2g4s_1.n1();
      var tag = last(element_1.tags);
      var attr = tag.attributes;
      var ctx = tag.context;
      var tmp_4;
      switch (tag.name) {
        case 'a':
          var tmp_5;
          // Inline function 'kotlin.text.isNotEmpty' call

          var this_0 = element_1.text;
          if (charSequenceLength(this_0) > 0) {
            var tmp_6;
            var tmp1_safe_receiver = attr.j4('class');
            if ((tmp1_safe_receiver == null ? null : contains(tmp1_safe_receiver, 'hashtag')) === true) {
              // Inline function 'kotlin.also' call
              var this_1 = new AttributedItem();
              this_1.o3e_1 = AttributedKind_HASH_TAG_getInstance();
              this_1.q3e_1 = element_1.text;
              this_1.r3e_1 = element_1.text;
              tmp_6 = this_1;
            } else {
              var tmp2_safe_receiver = attr.j4('class');
              if ((tmp2_safe_receiver == null ? null : contains(tmp2_safe_receiver, 'u-url')) === true) {
                // Inline function 'kotlin.also' call
                var this_2 = new AttributedItem();
                this_2.o3e_1 = AttributedKind_ACCOUNT_getInstance();
                this_2.q3e_1 = element_1.text;
                this_2.r3e_1 = attr.j4('href');
                tmp_6 = this_2;
              } else {
                // Inline function 'kotlin.also' call
                var this_3 = new AttributedItem();
                this_3.o3e_1 = AttributedKind_LINK_getInstance();
                this_3.q3e_1 = element_1.text;
                this_3.r3e_1 = attr.j4('href');
                tmp_6 = this_3;
              }
            }
            tmp_5 = tmp_6;
          } else {
            tmp_5 = null;
          }

          tmp_4 = tmp_5;
          break;
        case 'p':
        case 'span':
          var tmp_7;
          // Inline function 'kotlin.text.isNotEmpty' call

          var this_4 = element_1.text;
          if (charSequenceLength(this_4) > 0) {
            if (attr.j4('class') === 'ellipsis') {
              element_1.text = element_1.text + '...';
            }
            // Inline function 'kotlin.also' call
            var this_5 = new AttributedItem();
            this_5.o3e_1 = AttributedKind_PLAIN_getInstance();
            this_5.q3e_1 = element_1.text;
            this_5.r3e_1 = element_1.text;
            tmp_7 = this_5;
          } else {
            tmp_7 = null;
          }

          tmp_4 = tmp_7;
          break;
        case 'img':
          var tmp_8;
          if (element_1.type.equals(StateType_ByOpen_getInstance())) {
            // Inline function 'kotlin.text.ifEmpty' call
            var this_6 = element_1.text;
            var tmp_9;
            // Inline function 'kotlin.text.isEmpty' call
            if (charSequenceLength(this_6) === 0) {
              var tmp0_elvis_lhs = attr.j4('alt');
              tmp_9 = tmp0_elvis_lhs == null ? attr.j4('src') : tmp0_elvis_lhs;
            } else {
              tmp_9 = this_6;
            }
            var txt = tmp_9;
            // Inline function 'kotlin.also' call
            var this_7 = new AttributedItem();
            this_7.o3e_1 = AttributedKind_IMAGE_getInstance();
            this_7.q3e_1 = '';
            this_7.r3e_1 = attr.j4('src');
            tmp_8 = this_7;
          } else {
            tmp_8 = null;
          }

          tmp_4 = tmp_8;
          break;
        case 'video':
          var tmp_10;
          if (element_1.type.equals(StateType_ByOpen_getInstance())) {
            var tmp$ret$29;
            $l$block: {
              // Inline function 'kotlin.collections.firstOrNull' call
              var _iterator__ex2g4s_2 = ctx.l1();
              while (_iterator__ex2g4s_2.m1()) {
                var element_2 = _iterator__ex2g4s_2.n1();
                if (element_2.h4('src')) {
                  tmp$ret$29 = element_2;
                  break $l$block;
                }
              }
              tmp$ret$29 = null;
            }
            var tmp3_safe_receiver = tmp$ret$29;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.j4('src');
            var v = tmp4_elvis_lhs == null ? attr.j4('src') : tmp4_elvis_lhs;
            // Inline function 'kotlin.also' call
            var this_8 = new AttributedItem();
            this_8.o3e_1 = AttributedKind_VIDEO_getInstance();
            this_8.q3e_1 = '';
            this_8.r3e_1 = v;
            tmp_10 = this_8;
          } else {
            tmp_10 = null;
          }

          tmp_4 = tmp_10;
          break;
        default:
          tmp_4 = null;
          break;
      }
      var tmp0_safe_receiver = tmp_4;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination_1.j2(tmp0_safe_receiver);
      }
    }
    var elements = destination_1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!elements.j1()) {
      var last_0 = last(elements);
      if (last_0.o3e_1.equals(AttributedKind_PLAIN_getInstance())) {
        var tmp_11 = last_0;
        // Inline function 'kotlin.text.trimEnd' call
        var this_9 = last_0.displayText;
        tmp_11.q3e_1 = toString(trimEnd(isCharSequence(this_9) ? this_9 : THROW_CCE()));
        var tmp_12 = last_0;
        var tmp0_safe_receiver_0 = last_0.expandedText;
        var tmp_13;
        if (tmp0_safe_receiver_0 == null) {
          tmp_13 = null;
        } else {
          // Inline function 'kotlin.text.trimEnd' call
          tmp_13 = toString(trimEnd(isCharSequence(tmp0_safe_receiver_0) ? tmp0_safe_receiver_0 : THROW_CCE()));
        }
        tmp_12.r3e_1 = tmp_13;
      }
    }
    return AttributedString.x3e(elements);
  }
}
class PlanetLinkEx {
  tumblr(_this__u8e3s4) {
    return new TumblrAuth();
  }
}
class TumblrComment extends Comment {
  constructor(service) {
    return new.target.ge7(service);
  }
  static ge7(service) {
    var $this = this.s36(service);
    $this.noteCount = null;
    $this.liked = false;
    $this.reblogKey = null;
    $this.reblogKeyPostId = null;
    $this.parentId = null;
    $this.rootId = null;
    var tmp = $this;
    // Inline function 'kotlin.collections.listOf' call
    tmp.de6_1 = emptyList();
    return $this;
  }
  adm(_set____db54di) {
    this.noteCount = _set____db54di;
  }
  bdm() {
    return this.noteCount;
  }
  t36(_set____db54di) {
    this.liked = _set____db54di;
  }
  u36() {
    return this.liked;
  }
  cdf(_set____db54di) {
    this.reblogKey = _set____db54di;
  }
  ddf() {
    return this.reblogKey;
  }
  se7(_set____db54di) {
    this.reblogKeyPostId = _set____db54di;
  }
  te7() {
    return this.reblogKeyPostId;
  }
  eau(_set____db54di) {
    this.parentId = _set____db54di;
  }
  fau() {
    return this.parentId;
  }
  ue7(_set____db54di) {
    this.rootId = _set____db54di;
  }
  ve7() {
    return this.rootId;
  }
  u37() {
    var tmp0_elvis_lhs = this.sharedComment;
    return tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
  }
  w37() {
    var tmp = new CommentForm();
    var tmp0_safe_receiver = this.reblogKeyPostId;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = _ID___init__impl__k1lb7e(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    var tmp_2 = tmp1_elvis_lhs;
    if ((tmp_2 == null ? null : new ID(tmp_2)) == null) {
      tmp_1 = this.id;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    // Inline function 'kotlin.also' call
    var this_0 = tmp.d3l(tmp_1).q30(false);
    var tmp0_safe_receiver_0 = this.reblogKey;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.addParam('reblog_key', tmp0_safe_receiver_0);
    }
    return this_0;
  }
  s37(_set____db54di) {
    this.de6_1 = _set____db54di;
  }
  t37() {
    // Inline function 'kotlin.also' call
    var this_0 = toMutableList(this.de6_1);
    if (this.noteCount == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.also' call
      var this_1 = new Reaction();
      this_1.count = this.noteCount;
      this_1.name = 'note';
      this_0.j2(this_1);
    }
    return this_0;
  }
  applyReaction(reaction) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = reaction.name;
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
    var name = tmp$ret$1;
    if (contains(ReactionType_Like_getInstance().codes, name)) {
      if (reaction.reacting && !this.liked) {
        this.liked = true;
      }
      if (!reaction.reacting && this.liked) {
        this.liked = false;
      }
    }
  }
}
class Companion_0 {
  fromPaging(paging) {
    if (paging instanceof TumblrPaging) {
      return paging.copy();
    }
    // Inline function 'kotlin.also' call
    var this_0 = new TumblrPaging();
    if (!(paging == null) && !(paging.count == null)) {
      this_0.count = paging.count;
    }
    return this_0;
  }
}
class TumblrPaging extends Paging {
  constructor() {
    super();
    this.sinceId = null;
    this.offset = null;
  }
  l9q(_set____db54di) {
    this.sinceId = _set____db54di;
  }
  b3j() {
    return this.sinceId;
  }
  w3j(_set____db54di) {
    this.offset = _set____db54di;
  }
  x3j() {
    return this.offset;
  }
  newPage(entities) {
    // Inline function 'kotlin.also' call
    var this_0 = this.copy();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!entities.j1()) {
      var first = entities.m2(0);
      var tmp = this_0;
      // Inline function 'work.socialhub.planetlink.model.Identify.id' call
      var tmp_0 = first.id;
      var tmp0 = tmp_0 == null ? null : new ID(tmp_0);
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          var message = 'id is null.';
          throw IllegalStateException.o(toString(message));
        } else {
          tmp$ret$4 = tmp0.o30_1;
          break $l$block;
        }
      }
      var tmp0_0 = tmp$ret$4;
      var tmp$ret$6;
      $l$block_0: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_1 = _ID___get_value__impl__eg5m2i(tmp0_0);
        if (typeof tmp_1 === 'string') {
          tmp$ret$6 = _ID___get_value__impl__eg5m2i(tmp0_0);
          break $l$block_0;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp.sinceId = tmp$ret$6;
    }
    return this_0;
  }
  pastPage(entities) {
    // Inline function 'kotlin.also' call
    var this_0 = this.copy();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!entities.j1()) {
      var count = fromInt(entities.l2());
      if (this_0.offset == null) {
        this_0.offset = 0;
      }
      this_0.offset = ensureNotNull(this_0.offset) + convertToInt(count) | 0;
    }
    return this_0;
  }
  copy() {
    // Inline function 'kotlin.also' call
    var this_0 = new TumblrPaging();
    this_0.offset = this.offset;
    this_0.sinceId = this.sinceId;
    this.copyTo(this_0);
    return this_0;
  }
}
class TumblrUser extends User {
  constructor(service) {
    return new.target.ce7(service);
  }
  static ce7(service) {
    var $this = this.n38(service);
    $this.followersCount = null;
    $this.postsCount = null;
    $this.likesCount = null;
    $this.blogTitle = null;
    $this.relationship = null;
    $this.isMuted = false;
    $this.isBlocked = false;
    return $this;
  }
  w38(_set____db54di) {
    this.followersCount = _set____db54di;
  }
  x38() {
    return this.followersCount;
  }
  c66(_set____db54di) {
    this.postsCount = _set____db54di;
  }
  d66() {
    return this.postsCount;
  }
  we7(_set____db54di) {
    this.likesCount = _set____db54di;
  }
  xe7() {
    return this.likesCount;
  }
  ye7(_set____db54di) {
    this.blogTitle = _set____db54di;
  }
  ze7() {
    return this.blogTitle;
  }
  ae8(_set____db54di) {
    this.relationship = _set____db54di;
  }
  be8() {
    return this.relationship;
  }
  ib4(_set____db54di) {
    this.isMuted = _set____db54di;
  }
  jb4() {
    return this.isMuted;
  }
  gb4(_set____db54di) {
    this.isBlocked = _set____db54di;
  }
  hb4() {
    return this.isBlocked;
  }
  z38() {
    var tmp = this.id;
    var tmp0 = ensureNotNull(tmp == null ? null : new ID(tmp)).o30_1;
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
    return tmp$ret$0;
  }
}
//endregion
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion();
  return Companion_instance_0;
}
function *fetchUserMe($this, $completion) {
  var tmp0_safe_receiver = (yield* validateToken($this, TumblrAction$fetchUserMe$slambda($this), $completion)).data.response;
  var user = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.user;
  // Inline function 'kotlin.checkNotNull' call
  $l$block: {
    // Inline function 'kotlin.checkNotNull' call
    if (user == null) {
      var message = 'Required value was null.';
      throw IllegalStateException.o(toString(message));
    } else {
      break $l$block;
    }
  }
  var host = TumblrMapper_instance.ue5(ensureNotNull(user.blogs));
  var result = TumblrMapper_instance.ve5(user, service($this));
  var posts = yield* validateToken($this, TumblrAction$fetchUserMe$slambda_0($this, host), $completion);
  // Inline function 'kotlin.collections.isNullOrEmpty' call
  var tmp;
  if (posts == null) {
    tmp = true;
  } else {
    // Inline function 'kotlin.collections.isEmpty' call
    tmp = posts.length === 0;
  }
  if (!tmp) {
    var trails = TumblrMapper_instance.we5(posts);
    var cover = TumblrMapper_instance.xe5(posts[0], trails, service($this));
    TumblrMapper_instance.ye5(result, cover);
  }
  $this.me = result;
  return result;
}
function *fetchUser($this, id, $completion) {
  var blog = yield* validateToken($this, TumblrAction$fetchUser$slambda($this, id), $completion);
  var tmp = TumblrMapper_instance;
  // Inline function 'kotlin.checkNotNull' call
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.checkNotNull' call
    if (blog == null) {
      var message = 'Required value was null.';
      throw IllegalStateException.o(toString(message));
    } else {
      tmp$ret$1 = blog;
      break $l$block;
    }
  }
  var tmp$ret$0 = tmp$ret$1;
  var resultUser = tmp.ze5(tmp$ret$0, service($this));
  var posts = yield* validateToken($this, TumblrAction$fetchUser$slambda_0($this, id), $completion);
  // Inline function 'kotlin.collections.isNullOrEmpty' call
  var tmp_0;
  if (posts == null) {
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.collections.isEmpty' call
    tmp_0 = posts.length === 0;
  }
  if (!tmp_0) {
    var trails = TumblrMapper_instance.we5(posts);
    var coverUser = TumblrMapper_instance.xe5(posts[0], trails, service($this));
    TumblrMapper_instance.ye5(resultUser, coverUser);
  }
  return resultUser;
}
function *doLikeComment($this, id, $completion) {
  if (id instanceof TumblrComment) {
    yield* validateToken($this, TumblrAction$doLikeComment$slambda($this, id), $completion);
  } else {
    throw NotSupportedException.a3h('TumblrComment (id and reblog key only) required.');
  }
  return Unit_instance;
}
function *doUnlikeComment($this, id, $completion) {
  if (id instanceof TumblrComment) {
    yield* validateToken($this, TumblrAction$doUnlikeComment$slambda($this, id), $completion);
  } else {
    throw NotSupportedException.a3h('TumblrComment (id and reblog key only) required.');
  }
  return Unit_instance;
}
function *doShareComment($this, id, $completion) {
  if (id instanceof TumblrComment) {
    var blog = yield* $this.p2z($completion);
    yield* validateToken($this, TumblrAction$doShareComment$slambda($this, id, blog), $completion);
  } else {
    throw NotSupportedException.a3h('TumblrComment (id and reblog key only) required.');
  }
  return Unit_instance;
}
function limit($this, paging) {
  return paging.count;
}
function offset($this, paging) {
  var tmp;
  if (paging instanceof TumblrPaging) {
    tmp = paging.offset;
  } else {
    tmp = null;
  }
  return tmp;
}
function sinceId($this, paging) {
  var tmp;
  if (paging instanceof TumblrPaging) {
    tmp = paging.sinceId;
  } else {
    tmp = null;
  }
  return tmp;
}
function *validateToken($this, func, $completion) {
  try {
    try {
      return yield* $(func($completion), $completion);
    } catch ($p) {
      if ($p instanceof TumblrException) {
        var e = $p;
        if (e.dd8_1 === 401) {
          var tmp = $this.auth.accessor.auth();
          // Inline function 'kotlin.also' call
          var this_0 = new AuthOAuth2TokenRefreshRequest();
          this_0.clientId = $this.auth.consumerKey;
          this_0.clientSecret = $this.auth.consumerSecret;
          this_0.refreshToken = $this.auth.refreshToken;
          var refresh = yield* oAuth2TokenRefresh$virtualSuspendBridge(tmp, this_0, $completion);
          $this.auth.accessToken = refresh.data.accessToken;
          $this.auth.refreshToken = refresh.data.refreshToken;
          $this.auth.ae6_1($this.auth);
          return yield* $(func($completion), $completion);
        }
        throw e;
      } else {
        throw $p;
      }
    }
  } catch ($p_0) {
    if ($p_0 instanceof CancellationException) {
      var e_0 = $p_0;
      throw e_0;
    } else {
      if ($p_0 instanceof SocialHubException) {
        var e_1 = $p_0;
        if (e_1.serviceType == null)
          e_1.serviceType = ServiceType_Tumblr_getInstance();
        throw e_1;
      } else {
        if ($p_0 instanceof Exception) {
          var e_2 = $p_0;
          var tmp_0 = ExceptionHandler_instance;
          var tmp_1 = ServiceType_Tumblr_getInstance();
          var tmp0_safe_receiver = e_2 instanceof TumblrException ? e_2 : null;
          var tmp_2 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dd8_1;
          var tmp1_safe_receiver = e_2 instanceof TumblrException ? e_2 : null;
          throw tmp_0.g3n(e_2, tmp_1, tmp_2, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ed8_1);
        } else {
          throw $p_0;
        }
      }
    }
  }
}
function blogUrl($this, blogName) {
  return contains(blogName, '.') ? blogName : blogName + '.tumblr.com';
}
function service($this) {
  return $this.account.service;
}
function TumblrAction$fetchUserMe$slambda(this$0) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    return yield* user$virtualSuspendBridge(this$0.auth.accessor.user(), $completion);
  }), 0);
}
function TumblrAction$fetchUserMe$slambda_0(this$0, $host) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogPostsRequest();
    this_0.blogName = $host;
    this_0.limit = 1;
    var tmp0_safe_receiver = (yield* blogPosts$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.posts;
  }), 0);
}
function TumblrAction$fetchUser$slambda(this$0, $id) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogInfoRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_0.blogName = tmp$ret$5;
    var tmp0_safe_receiver = (yield* blogInfo$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.blog;
  }), 0);
}
function TumblrAction$fetchUser$slambda_0(this$0, $id) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogPostsRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_0.blogName = tmp$ret$5;
    this_0.limit = 1;
    var tmp0_safe_receiver = (yield* blogPosts$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.posts;
  }), 0);
}
function TumblrAction$followUser$slambda(this$0, $id) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.user();
    // Inline function 'kotlin.also' call
    var this_0 = new UserFollowRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    var tmp$ret$2 = tmp$ret$5;
    tmp_0.url = blogUrl(this$0, tmp$ret$2);
    return yield* follow$virtualSuspendBridge(tmp, this_0, $completion);
  }), 0);
}
function TumblrAction$unfollowUser$slambda(this$0, $id) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.user();
    // Inline function 'kotlin.also' call
    var this_0 = new UserUnfollowRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    var tmp$ret$2 = tmp$ret$5;
    tmp_0.url = blogUrl(this$0, tmp$ret$2);
    return yield* unfollow$virtualSuspendBridge(tmp, this_0, $completion);
  }), 0);
}
function TumblrAction$followingUsers$slambda(this$0, $paging) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.user();
    // Inline function 'kotlin.also' call
    var this_0 = new UserFollowingRequest();
    this_0.limit = limit(this$0, $paging);
    this_0.offset = offset(this$0, $paging);
    var tmp0_safe_receiver = (yield* userFollowing$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.blogs;
  }), 0);
}
function TumblrAction$followerUsers$slambda(this$0, $id, $paging) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogFollowersRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_0.blogName = tmp$ret$5;
    this_0.limit = limit(this$0, $paging);
    var tmp0_safe_receiver = (yield* blogFollowers$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.users;
  }), 0);
}
function TumblrAction$homeTimeLine$slambda(this$0, $paging) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.user();
    // Inline function 'kotlin.also' call
    var this_0 = new UserDashboardRequest();
    this_0.limit = limit(this$0, $paging);
    this_0.offset = offset(this$0, $paging);
    this_0.sinceId = sinceId(this$0, $paging);
    this_0.reblogInfo = true;
    this_0.notesInfo = true;
    var tmp0_safe_receiver = (yield* userDashboard$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.posts;
  }), 0);
}
function TumblrAction$userCommentTimeLine$slambda(this$0, $id, $paging) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogPostsRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_0.blogName = tmp$ret$5;
    this_0.limit = limit(this$0, $paging);
    this_0.offset = offset(this$0, $paging);
    this_0.reblogInfo = true;
    this_0.notesInfo = true;
    var tmp0_safe_receiver = (yield* blogPosts$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.posts;
  }), 0);
}
function TumblrAction$userLikeTimeLine$slambda(this$0, $id, $paging) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogLikesRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_0.blogName = tmp$ret$5;
    this_0.limit = limit(this$0, $paging);
    this_0.offset = offset(this$0, $paging);
    var tmp0_safe_receiver = (yield* blogLikes$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.likedPosts;
  }), 0);
}
function TumblrAction$userMediaTimeLine$slambda(this$0, $id, $paging) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogPostsRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_0.blogName = tmp$ret$5;
    this_0.limit = limit(this$0, $paging);
    this_0.offset = offset(this$0, $paging);
    this_0.reblogInfo = true;
    this_0.notesInfo = true;
    var tmp0_safe_receiver = (yield* blogPosts$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.posts;
  }), 0);
}
function TumblrAction$searchTimeLine$slambda(this$0, $query, $paging) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.tagged();
    // Inline function 'kotlin.also' call
    var this_0 = new TaggedRequest();
    this_0.tag = $query;
    this_0.limit = limit(this$0, $paging);
    return (yield* tagged$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
  }), 0);
}
function TumblrAction$postComment$slambda(this$0, $reblog) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    return yield* postReblog$virtualSuspendBridge(this$0.auth.accessor.blog(), $reblog, $completion);
  }), 0);
}
function TumblrAction$postComment$slambda_0(this$0, $post) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    return yield* postCreate$virtualSuspendBridge(this$0.auth.accessor.blog(), $post, $completion);
  }), 0);
}
function TumblrAction$editComment$slambda(this$0, $post) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    return yield* postEdit$virtualSuspendBridge(this$0.auth.accessor.blog(), $post, $completion);
  }), 0);
}
function TumblrAction$comment$slambda(this$0, $id) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogPostsRequest();
    var tmp_0 = this_0;
    var tmp0_safe_receiver = $id.subId;
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
    tmp_0.blogName = tmp_1;
    var tmp_4 = this_0;
    var tmp1_safe_receiver = $id.id;
    var tmp_5;
    var tmp_6 = tmp1_safe_receiver;
    if ((tmp_6 == null ? null : new ID(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_7 = _ID___get_value__impl__eg5m2i(tmp1_safe_receiver);
        if (typeof tmp_7 === 'string') {
          tmp$ret$3 = _ID___get_value__impl__eg5m2i(tmp1_safe_receiver);
          break $l$block_0;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp_5 = tmp$ret$3;
    }
    tmp_4.id = tmp_5;
    this_0.limit = 1;
    var tmp0_safe_receiver_0 = (yield* blogPosts$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.posts;
  }), 0);
}
function TumblrAction$comment$slambda_0(this$0, $blogName, $postId) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogPostsRequest();
    this_0.blogName = $blogName;
    this_0.id = $postId;
    this_0.limit = 1;
    var tmp0_safe_receiver = (yield* blogPosts$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.posts;
  }), 0);
}
function TumblrAction$doLikeComment$slambda(this$0, $id) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.user();
    // Inline function 'kotlin.also' call
    var this_0 = new UserLikeRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_0.id = tmp$ret$5;
    this_0.reblogKey = $id.reblogKey;
    return yield* like$virtualSuspendBridge(tmp, this_0, $completion);
  }), 0);
}
function TumblrAction$doUnlikeComment$slambda(this$0, $id) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.user();
    // Inline function 'kotlin.also' call
    var this_0 = new UserUnlikeRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $id.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_0.id = tmp$ret$5;
    this_0.reblogKey = $id.reblogKey;
    return yield* unlike$virtualSuspendBridge(tmp, this_0, $completion);
  }), 0);
}
function TumblrAction$doShareComment$slambda(this$0, $id, $blog) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogReblogRequest();
    var tmp_0 = this_0;
    var tmp0_elvis_lhs = $id.reblogKeyPostId;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'work.socialhub.planetlink.model.Identify.id' call
      var tmp_2 = $id.id;
      var tmp0 = tmp_2 == null ? null : new ID(tmp_2);
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          var message = 'id is null.';
          throw IllegalStateException.o(toString(message));
        } else {
          tmp$ret$3 = tmp0.o30_1;
          break $l$block;
        }
      }
      var tmp0_0 = tmp$ret$3;
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_3 = _ID___get_value__impl__eg5m2i(tmp0_0);
        if (typeof tmp_3 === 'string') {
          tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
          break $l$block_0;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp_1 = tmp$ret$5;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.id = tmp_1;
    this_0.reblogKey = $id.reblogKey;
    var tmp_4 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_5 = $blog.id;
    var tmp0_1 = tmp_5 == null ? null : new ID(tmp_5);
    var tmp$ret$7;
    $l$block_1: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_1 == null) {
        var message_0 = 'id is null.';
        throw IllegalStateException.o(toString(message_0));
      } else {
        tmp$ret$7 = tmp0_1.o30_1;
        break $l$block_1;
      }
    }
    var tmp0_2 = tmp$ret$7;
    var tmp$ret$9;
    $l$block_2: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_6 = _ID___get_value__impl__eg5m2i(tmp0_2);
      if (typeof tmp_6 === 'string') {
        tmp$ret$9 = _ID___get_value__impl__eg5m2i(tmp0_2);
        break $l$block_2;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_4.blogName = tmp$ret$9;
    return yield* postReblog$virtualSuspendBridge(tmp, this_0, $completion);
  }), 0);
}
function TumblrAction$deleteComment$slambda(this$0, $blog, $id) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogDeleteRequest();
    var tmp_0 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_1 = $blog.id;
    var tmp0 = tmp_1 == null ? null : new ID(tmp_1);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'id is null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$3 = tmp0.o30_1;
        break $l$block;
      }
    }
    var tmp0_0 = tmp$ret$3;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_2 = _ID___get_value__impl__eg5m2i(tmp0_0);
      if (typeof tmp_2 === 'string') {
        tmp$ret$5 = _ID___get_value__impl__eg5m2i(tmp0_0);
        break $l$block_0;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_0.blogName = tmp$ret$5;
    var tmp_3 = this_0;
    // Inline function 'work.socialhub.planetlink.model.Identify.id' call
    var tmp_4 = $id.id;
    var tmp0_1 = tmp_4 == null ? null : new ID(tmp_4);
    var tmp$ret$7;
    $l$block_1: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_1 == null) {
        var message_0 = 'id is null.';
        throw IllegalStateException.o(toString(message_0));
      } else {
        tmp$ret$7 = tmp0_1.o30_1;
        break $l$block_1;
      }
    }
    var tmp0_2 = tmp$ret$7;
    var tmp$ret$9;
    $l$block_2: {
      // Inline function 'work.socialhub.planetlink.model.ID.value' call
      var tmp_5 = _ID___get_value__impl__eg5m2i(tmp0_2);
      if (typeof tmp_5 === 'string') {
        tmp$ret$9 = _ID___get_value__impl__eg5m2i(tmp0_2);
        break $l$block_2;
      }
      throw IllegalStateException.o('Not supported type.');
    }
    tmp_3.id = tmp$ret$9;
    return yield* postDelete$virtualSuspendBridge(tmp, this_0, $completion);
  }), 0);
}
function TumblrAction$commentContexts$slambda(this$0, $id) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogPostsRequest();
    var tmp_0 = this_0;
    var tmp0_safe_receiver = $id.subId;
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
    tmp_0.blogName = tmp_1;
    var tmp_4 = this_0;
    var tmp1_safe_receiver = $id.id;
    var tmp_5;
    var tmp_6 = tmp1_safe_receiver;
    if ((tmp_6 == null ? null : new ID(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'work.socialhub.planetlink.model.ID.value' call
        var tmp_7 = _ID___get_value__impl__eg5m2i(tmp1_safe_receiver);
        if (typeof tmp_7 === 'string') {
          tmp$ret$3 = _ID___get_value__impl__eg5m2i(tmp1_safe_receiver);
          break $l$block_0;
        }
        throw IllegalStateException.o('Not supported type.');
      }
      tmp_5 = tmp$ret$3;
    }
    tmp_4.id = tmp_5;
    this_0.limit = 1;
    var tmp0_safe_receiver_0 = (yield* blogPosts$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.posts;
  }), 0);
}
function TumblrAction$commentContexts$slambda_0(this$0, $parentBlog, $parentId) {
  return constructCallableReference(($completion) => orPromise($completion, function *($completion) {
    var tmp = this$0.auth.accessor.blog();
    // Inline function 'kotlin.also' call
    var this_0 = new BlogPostsRequest();
    this_0.blogName = $parentBlog;
    this_0.id = $parentId;
    this_0.limit = 1;
    var tmp0_safe_receiver = (yield* blogPosts$virtualSuspendBridge(tmp, this_0, $completion)).data.response;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.posts;
  }), 0);
}
function TumblrAuth$tokenRefreshCallback$lambda(it) {
  return Unit_instance;
}
function textMedia($this, model, str) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var medias = ArrayList.k2();
  // Inline function 'kotlin.also' call
  var this_0 = AttributedStringEx_instance.tumblr(Companion_instance, str);
  model.text = this_0;
  var attr = this_0;
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = attr.elements;
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList.k2();
  var _iterator__ex2g4s = tmp0.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    if (element.kind.equals(AttributedKind_IMAGE_getInstance())) {
      destination.j2(element);
    }
  }
  var images = destination;
  // Inline function 'kotlin.collections.filter' call
  var tmp0_0 = attr.elements;
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.k2();
  var _iterator__ex2g4s_0 = tmp0_0.l1();
  while (_iterator__ex2g4s_0.m1()) {
    var element_0 = _iterator__ex2g4s_0.n1();
    if (element_0.kind.equals(AttributedKind_VIDEO_getInstance())) {
      destination_0.j2(element_0);
    }
  }
  var videos = destination_0;
  var _iterator__ex2g4s_1 = images.l1();
  while (_iterator__ex2g4s_1.m1()) {
    var image = _iterator__ex2g4s_1.n1();
    // Inline function 'kotlin.also' call
    var this_1 = new Media();
    this_1.type = MediaType_Image_getInstance();
    this_1.sourceUrl = image.expandedText;
    this_1.previewUrl = image.displayText;
    medias.j2(this_1);
  }
  var _iterator__ex2g4s_2 = videos.l1();
  while (_iterator__ex2g4s_2.m1()) {
    var video = _iterator__ex2g4s_2.n1();
    // Inline function 'kotlin.also' call
    var this_2 = new Media();
    this_2.type = MediaType_Movie_getInstance();
    this_2.sourceUrl = video.expandedText;
    this_2.previewUrl = video.displayText;
    medias.j2(this_2);
  }
  model.medias = plus(model.medias, medias);
}
function photos($this, photos) {
  // Inline function 'kotlin.collections.mutableListOf' call
  // Inline function 'kotlin.also' call
  var this_0 = ArrayList.k2();
  var inductionVariable = 0;
  var last = photos.length;
  while (inductionVariable < last) {
    var photo = photos[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    // Inline function 'kotlin.also' call
    var this_1 = new Media();
    this_1.type = MediaType_Image_getInstance();
    var tmp = this_1;
    var tmp0_safe_receiver = photo.originalSize;
    tmp.sourceUrl = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.url;
    var tmp_0 = this_1;
    var tmp1_safe_receiver = photo.originalSize;
    tmp_0.previewUrl = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.url;
    this_0.j2(this_1);
  }
  return this_0;
}
function urlHost($this, $receiver) {
  return Url($receiver).z4b_1;
}
function removeSharedBlogLink($this, text) {
  // Inline function 'kotlin.text.toRegex' call
  var this_0 = '^(<p><a(.+?)href="(.+?)"(.*?)>(.+?)<\/a>:<\/p>)';
  var regex = Regex.li(this_0);
  var result = regex.oi(text);
  if (!(result == null)) {
    var all = result.tj().m2(1);
    var v2 = result.tj().m2(2);
    var v4 = result.tj().m2(4);
    if (contains(v2, 'class="tumblr_blog"') || contains(v4, 'class="tumblr_blog"')) {
      return substring(text, all.length);
    }
  }
  return text;
}
function TumblrMapper$timeLine$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = b.createAt;
  var tmp$ret$2 = a.createAt;
  return compareValues(tmp, tmp$ret$2);
}
var TumblrMapper_instance;
function TumblrMapper_getInstance() {
  return TumblrMapper_instance;
}
var TumblrFormKey_instance;
function TumblrFormKey_getInstance() {
  return TumblrFormKey_instance;
}
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_instance;
  static_init_called = true;
  TumblrIconSize_S512_instance = new TumblrIconSize('S512', 0, 512);
}
var TumblrIconSize_S512_instance;
function values() {
  static_init();
  return [TumblrIconSize_S512_getInstance()];
}
function valueOf(value) {
  static_init();
  if (value === 'S512')
    return TumblrIconSize_S512_getInstance();
  else {
    THROW_IAE('No enum constant work.socialhub.planetlink.tumblr.define.TumblrIconSize.' + value);
  }
}
function TumblrIconSize_S512_getInstance() {
  static_init();
  return TumblrIconSize_S512_instance;
}
var static_init_called_0;
function static_init_0() {
  if (static_init_called_0)
    return Unit_instance;
  static_init_called_0 = true;
  TumblrReactionType_Like_instance = new TumblrReactionType('Like', 0, ['like', 'favorite']);
  TumblrReactionType_Reblog_instance = new TumblrReactionType('Reblog', 1, ['reblog', 'retweet', 'share']);
  TumblrReactionType_Reply_instance = new TumblrReactionType('Reply', 2, ['reply']);
}
var TumblrReactionType_Like_instance;
var TumblrReactionType_Reblog_instance;
var TumblrReactionType_Reply_instance;
function values_0() {
  static_init_0();
  return [TumblrReactionType_Like_getInstance(), TumblrReactionType_Reblog_getInstance(), TumblrReactionType_Reply_getInstance()];
}
function valueOf_0(value) {
  static_init_0();
  switch (value) {
    case 'Like':
      return TumblrReactionType_Like_getInstance();
    case 'Reblog':
      return TumblrReactionType_Reblog_getInstance();
    case 'Reply':
      return TumblrReactionType_Reply_getInstance();
    default:
      THROW_IAE('No enum constant work.socialhub.planetlink.tumblr.define.TumblrReactionType.' + value);
      break;
  }
}
function TumblrReactionType_Like_getInstance() {
  static_init_0();
  return TumblrReactionType_Like_instance;
}
function TumblrReactionType_Reblog_getInstance() {
  static_init_0();
  return TumblrReactionType_Reblog_instance;
}
function TumblrReactionType_Reply_getInstance() {
  static_init_0();
  return TumblrReactionType_Reply_instance;
}
var static_init_called_1;
function static_init_1() {
  if (static_init_called_1)
    return Unit_instance;
  static_init_called_1 = true;
  StateType_Init_instance = new StateType('Init', 0);
  StateType_ByOpen_instance = new StateType('ByOpen', 1);
  StateType_ByClose_instance = new StateType('ByClose', 2);
}
var StateType_Init_instance;
var StateType_ByOpen_instance;
var StateType_ByClose_instance;
function values_1() {
  static_init_1();
  return [StateType_Init_getInstance(), StateType_ByOpen_getInstance(), StateType_ByClose_getInstance()];
}
function valueOf_1(value) {
  static_init_1();
  switch (value) {
    case 'Init':
      return StateType_Init_getInstance();
    case 'ByOpen':
      return StateType_ByOpen_getInstance();
    case 'ByClose':
      return StateType_ByClose_getInstance();
    default:
      THROW_IAE('No enum constant work.socialhub.planetlink.tumblr.expand.AttributedStringEx.StateType.' + value);
      break;
  }
}
function AttributedStringEx$tumblr$lambda($states) {
  return (name, attributes, _unused_var__etf5q3) => {
    var tmp;
    switch (name) {
      case 'a':
      case 'p':
      case 'img':
      case 'video':
      case 'source':
      case 'span':
        var tag = new Tag(name, attributes);
        var tags = plus_0(last($states).tags, tag);
        $states.j2(new State(StateType_ByOpen_getInstance(), tags));
        tmp = Unit_instance;
        break;
    }
    return Unit_instance;
  };
}
function AttributedStringEx$tumblr$lambda_0($states) {
  return (t) => {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$states.j1()) {
      var _receiver__tnumb7 = last($states);
      _receiver__tnumb7.text = _receiver__tnumb7.text + t;
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function AttributedStringEx$tumblr$lambda_1($states) {
  return (name, _unused_var__etf5q3) => {
    var tmp;
    switch (name) {
      case 'a':
      case 'img':
      case 'video':
      case 'span':
        // Inline function 'kotlin.also' call

        var this_0 = toMutableList(last($states).tags);
        removeLast(this_0);
        var tags = this_0;
        $states.j2(new State(StateType_ByClose_getInstance(), tags));
        tmp = Unit_instance;
        break;
      case 'br':
        var tmp_0;
        // Inline function 'kotlin.collections.isNotEmpty' call

        if (!$states.j1()) {
          var _receiver__tnumb7 = last($states);
          _receiver__tnumb7.text = _receiver__tnumb7.text + '\n';
          tmp_0 = Unit_instance;
        }

        tmp = tmp_0;
        break;
      case 'p':
        var s = last($states);
        // Inline function 'kotlin.text.isNotEmpty' call

        var this_1 = s.text;
        if (charSequenceLength(this_1) > 0) {
          s.text = s.text + '\n\n';
        }

        // Inline function 'kotlin.also' call

        var this_2 = toMutableList(last($states).tags);
        removeLast(this_2);
        var tags_0 = this_2;
        $states.j2(new State(StateType_ByClose_getInstance(), tags_0));
        tmp = Unit_instance;
        break;
      case 'source':
        var tags_1 = toMutableList(last($states).tags);
        var last_0 = removeLast(tags_1);
        var _receiver__tnumb7_0 = last(tags_1);
        _receiver__tnumb7_0.context = plus_0(_receiver__tnumb7_0.context, last_0.attributes);
        $states.j2(new State(StateType_ByClose_getInstance(), tags_1));
        tmp = Unit_instance;
        break;
    }
    return Unit_instance;
  };
}
function AttributedStringEx$tumblr$lambda_2() {
  return Unit_instance;
}
function StateType_Init_getInstance() {
  static_init_1();
  return StateType_Init_instance;
}
function StateType_ByOpen_getInstance() {
  static_init_1();
  return StateType_ByOpen_instance;
}
function StateType_ByClose_getInstance() {
  static_init_1();
  return StateType_ByClose_instance;
}
var AttributedStringEx_instance;
function AttributedStringEx_getInstance() {
  return AttributedStringEx_instance;
}
var PlanetLinkEx_instance;
function PlanetLinkEx_getInstance() {
  return PlanetLinkEx_instance;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(TumblrAction, 'TumblrAction', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForClass(TumblrAuth, 'TumblrAuth', TumblrAuth, VOID, [ServiceAuth], [3, 2]);
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForObject(TumblrMapper, 'TumblrMapper');
initMetadataForObject(TumblrFormKey, 'TumblrFormKey');
initMetadataForClass(TumblrIconSize, 'TumblrIconSize');
initMetadataForClass(TumblrReactionType, 'TumblrReactionType');
initMetadataForClass(StateType, 'StateType');
initMetadataForClass(Tag, 'Tag');
initMetadataForClass(State, 'State');
initMetadataForObject(AttributedStringEx, 'AttributedStringEx');
initMetadataForObject(PlanetLinkEx, 'PlanetLinkEx');
initMetadataForClass(TumblrComment, 'TumblrComment');
initMetadataForCompanion(Companion_0);
initMetadataForClass(TumblrPaging, 'TumblrPaging', TumblrPaging);
initMetadataForClass(TumblrUser, 'TumblrUser');
//endregion
//region block: init
TumblrMapper_instance = new TumblrMapper();
TumblrFormKey_instance = new TumblrFormKey();
AttributedStringEx_instance = new AttributedStringEx();
PlanetLinkEx_instance = new PlanetLinkEx();
Companion_instance_1 = new Companion_0();
//endregion
//region block: exports
defineProp(TumblrAction, 'Companion', Companion_getInstance_0, VOID, true);
TumblrFormKey.getInstance = TumblrFormKey_getInstance;
TumblrIconSize.values = values;
TumblrIconSize.valueOf = valueOf;
defineProp(TumblrIconSize, 'S512', TumblrIconSize_S512_getInstance, VOID, true);
TumblrReactionType.values = values_0;
TumblrReactionType.valueOf = valueOf_0;
defineProp(TumblrReactionType, 'Like', TumblrReactionType_Like_getInstance, VOID, true);
defineProp(TumblrReactionType, 'Reblog', TumblrReactionType_Reblog_getInstance, VOID, true);
defineProp(TumblrReactionType, 'Reply', TumblrReactionType_Reply_getInstance, VOID, true);
AttributedStringEx.getInstance = AttributedStringEx_getInstance;
AttributedStringEx.StateType = StateType;
AttributedStringEx.StateType.values = values_1;
AttributedStringEx.StateType.valueOf = valueOf_1;
defineProp(AttributedStringEx.StateType, 'Init', StateType_Init_getInstance, VOID, true);
defineProp(AttributedStringEx.StateType, 'ByOpen', StateType_ByOpen_getInstance, VOID, true);
defineProp(AttributedStringEx.StateType, 'ByClose', StateType_ByClose_getInstance, VOID, true);
AttributedStringEx.Tag = Tag;
AttributedStringEx.State = State;
PlanetLinkEx.getInstance = PlanetLinkEx_getInstance;
defineProp(TumblrPaging, 'Companion', Companion_getInstance_1, VOID, true);
export {
  TumblrAction as TumblrAction,
  TumblrAuth as TumblrAuth,
  TumblrFormKey as TumblrFormKey,
  TumblrIconSize as TumblrIconSize,
  TumblrReactionType as TumblrReactionType,
  AttributedStringEx as AttributedStringEx,
  PlanetLinkEx as PlanetLinkEx,
  TumblrComment as TumblrComment,
  TumblrPaging as TumblrPaging,
  TumblrUser as TumblrUser,
};
//endregion

//# sourceMappingURL=planetlink-tumblr.mjs.map
