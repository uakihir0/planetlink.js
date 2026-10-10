import {
  Companion_instance1co2nkledm2ru as Companion_instance,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  _Result___init__impl__xyqfz810za1hm0unrcw as _Result___init__impl__xyqfz8,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString30pk9tzaqopn as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  createFailure8paxfkfa5dc7 as createFailure,
  Result3t1vadv16kmzk as Result,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  toString1h6jjoch8cjt8 as toString_0,
  newThrowablezl37abp36p5f as newThrowable,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
  protoOf180f3jzyo7rfj as protoOf,
  isInterface3d6p8outrmvmk as isInterface,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  CancellationException3b36o9qz53rgr as CancellationException,
  fromInt2ii0rejb1w62w as fromInt,
  numberToLong2pakxeg38estk as numberToLong,
  add2suhfggl4zvkk as add,
  intercepted2ogpsikxxj4u0 as intercepted,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  convertToInty04h231mmjoh as convertToInt,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString_1,
  captureStack1fzi4aczwc4hg as captureStack,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_ONEazvfdh9ju3d4 as get_ONE,
  replace3le3ie7l9k8aq as replace,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  subtract2orl8z9upxd9l as subtract,
  constructCallableReference23y65rf941mch as constructCallableReference,
  EmptyCoroutineContext_instancegbhtm9svfl3r as EmptyCoroutineContext_instance,
  Continuation1aa2oekvx7jm7 as Continuation,
  Enum3alwj03lh1n41 as Enum,
  ArrayList3it5z8td81qkl as ArrayList,
  listOf1jh22dvmctj1r as listOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  encodeToByteArray1onwao0uakjfh as encodeToByteArray,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  replaceqbix900hl8kl as replace_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toByte4i43936u611k as toByte,
  decodeToString1x4faah2liw2p as decodeToString,
  setOf45ia9pnfhe90 as setOf,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd1ka89vowck9tn as Char__toInt_impl_vasixd,
} from './kotlin-kotlin-stdlib.mjs';
import {
  DisposableHandle1uzxt8frdchxn as DisposableHandle,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
  CancellableContinuationImpl1cx201opicavg as CancellableContinuationImpl,
  launch1c91vkjzdi9sd as launch,
  startCoroutineCancellable18shtfwdieib as startCoroutineCancellable,
  get_job2zvlvce9o9a29 as get_job,
  Job13y4jkazwjho0 as Job,
  cancel1xim2hrvjmwpn as cancel,
  Dispatchers_getInstance20p7pyqnrepag as Dispatchers_getInstance,
} from './kotlinx-coroutines-core.mjs';
import {
  Buffergs925ekssbch as Buffer,
  indexOf29nspdgx2e3ap as indexOf,
  IOException1wyutdmfe71nu as IOException,
  EOFExceptionh831u25jcq9n as EOFException,
  readByteString2hnsbql6t4ads as readByteString,
  readStringo8i62qxt5m4m as readString,
  readString3v6duspiz33tv as readString_0,
  readString2nvggcfaijfhd as readString_1,
  readByteArray1fhzfwi2j014k as readByteArray,
  writeString33ca4btrgctw7 as writeString,
  readByteArray1ri21h2rciakw as readByteArray_0,
} from './kotlinx-io-kotlinx-io-core.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
import { decodeToString2ede220pr5xir as decodeToString_0 } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance_0 = this;
    this.g3l_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.h3l_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
}
class Empty {
  toString() {
    return 'Empty';
  }
  hashCode() {
    return -231472095;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  }
}
class Closed {
  constructor(cause) {
    this.i3l_1 = cause;
  }
  toString() {
    return 'Closed(cause=' + toString(this.i3l_1) + ')';
  }
  hashCode() {
    return this.i3l_1 == null ? 0 : hashCode(this.i3l_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.i3l_1, other.i3l_1))
      return false;
    return true;
  }
}
class Task {}
function resume() {
  return this.k3l().pd(Companion_getInstance().h3l_1);
}
function resume_0(throwable) {
  var tmp = this.k3l();
  var tmp_0;
  if (throwable == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(throwable));
    tmp_0 = new Result(tmp$ret$0);
  }
  var tmp1_elvis_lhs = tmp_0;
  return tmp.pd(tmp1_elvis_lhs == null ? Companion_getInstance().h3l_1 : tmp1_elvis_lhs.mw_1);
}
class Read {
  constructor(continuation) {
    this.o3l_1 = continuation;
    this.p3l_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.o3l_1), 16));
      stackTraceToString(this_0);
      tmp.p3l_1 = this_0;
    }
  }
  k3l() {
    return this.o3l_1;
  }
  j3l() {
    return this.p3l_1;
  }
  l3l() {
    return 'read';
  }
}
class Write {
  constructor(continuation) {
    this.q3l_1 = continuation;
    this.r3l_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.q3l_1), 16));
      stackTraceToString(this_0);
      tmp.r3l_1 = this_0;
    }
  }
  k3l() {
    return this.q3l_1;
  }
  j3l() {
    return this.r3l_1;
  }
  l3l() {
    return 'write';
  }
}
class sam$kotlinx_coroutines_DisposableHandle$0 {
  constructor(function_0) {
    this.b3m_1 = function_0;
  }
  h28() {
    return this.b3m_1();
  }
  c5() {
    return this.b3m_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
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
class ByteReadChannel {}
function awaitContent$default(min, $completion, $super) {
  min = min === VOID ? 1 : min;
  return $super === VOID ? this.x3m(min, $completion) : $super.x3m.call(this, min, $completion);
}
class ByteWriteChannel {}
function get_autoFlush() {
  return false;
}
class ByteChannel {
  constructor(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.s3l_1 = autoFlush;
    this.t3l_1 = new Buffer();
    this.u3l_1 = 0;
    this.v3l_1 = new Object();
    this.w3l_1 = atomic$ref$1(Empty_instance);
    this.x3l_1 = new Buffer();
    this.y3l_1 = new Buffer();
    this.z3l_1 = atomic$ref$1(null);
    this.a3m_1 = atomic$ref$1(null);
  }
  c3m() {
    return this.s3l_1;
  }
  d3m() {
    return this.u3l_1 < 1048576;
  }
  e3m() {
    var tmp0_safe_receiver = this.z3l_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(tmp0_safe_receiver).n2d();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException.p(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp = ClosedReadChannelException.j3m(p0);
          }
        }
      }
      var tmp0_safe_receiver_0 = tmp;
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        throw tmp0_safe_receiver_0;
      }
    }
    if (this.x3l_1.y21()) {
      moveFlushToReadBuffer(this);
    }
    return this.x3l_1;
  }
  k3m() {
    if (this.q3m()) {
      var tmp0_safe_receiver = this.z3l_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
        // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
        var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
        var tmp_0;
        if (tmp0_subject == null) {
          tmp_0 = null;
        } else {
          if (isInterface(tmp0_subject, CopyableThrowable)) {
            tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).n2d();
          } else {
            if (tmp0_subject instanceof CancellationException) {
              tmp_0 = CancellationException.p(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
            } else {
              var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
              tmp_0 = ClosedWriteChannelException.p3m(p0);
            }
          }
        }
        var tmp0_safe_receiver_0 = tmp_0;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          throw tmp0_safe_receiver_0;
        }
        tmp = tmp_1;
      }
      if (tmp == null)
        throw ClosedWriteChannelException.p3m();
    }
    return this.y3l_1;
  }
  r3m() {
    var tmp0_safe_receiver = this.z3l_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).n2d();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException.p(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = ClosedByteChannelException.v3m(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  q3m() {
    return !(this.z3l_1.kotlinx$atomicfu$value == null);
  }
  w3m() {
    return !(this.r3m() == null) || (this.q3m() && this.u3l_1 === 0 && this.x3l_1.y21());
  }
  *x3m(min, $completion) {
    rethrowCloseCauseIfNeeded_0(this);
    if (this.x3l_1.l2() >= fromInt(min))
      return true;
    // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
    var this_0 = this;
    $l$loop: while (add(numberToLong(this.u3l_1), this.x3l_1.l2()) < fromInt(min) && this.z3l_1.kotlinx$atomicfu$value == null) {
      // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
      // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
      (yield () => {
        var uCont = $completion;
        var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
        cancellable.h29();
        var tmp0 = this_0;
        var tmp2 = new Read(cancellable);
        $l$block_0: {
          // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
          var previous = tmp0.w3l_1.kotlinx$atomicfu$value;
          if (!(previous instanceof Closed)) {
            if (!tmp0.w3l_1.atomicfu$compareAndSet(previous, tmp2)) {
              tmp2.m3l();
              break $l$block_0;
            }
          }
          if (previous instanceof Read) {
            previous.n3l(ConcurrentIOException.c3n(tmp2.l3l(), previous.j3l()));
          } else {
            if (isInterface(previous, Task)) {
              previous.m3l();
            } else {
              if (previous instanceof Closed) {
                tmp2.n3l(previous.i3l_1);
                break $l$block_0;
              } else {
                if (!equals(previous, Empty_instance)) {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
          if (!(add(numberToLong(this.u3l_1), this.x3l_1.l2()) < fromInt(min) && this.z3l_1.kotlinx$atomicfu$value == null)) {
            // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
            var current = tmp0.w3l_1.kotlinx$atomicfu$value;
            var tmp;
            if (current instanceof Read) {
              tmp = tmp0.w3l_1.atomicfu$compareAndSet(current, Empty_instance);
            } else {
              tmp = false;
            }
            if (tmp) {
              current.m3l();
            }
          }
        }
        return cancellable.i29();
      });
    }
    if (this.x3l_1.l2() < 1048576n) {
      moveFlushToReadBuffer(this);
    }
    return this.x3l_1.l2() >= fromInt(min);
  }
  *e3n($completion) {
    rethrowCloseCauseIfNeeded_0(this);
    this.f3n();
    if (this.d3m())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
    var this_0 = this;
    $l$loop: while (!this.d3m() && this.z3l_1.kotlinx$atomicfu$value == null) {
      // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
      // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
      (yield () => {
        var uCont = $completion;
        var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
        cancellable.h29();
        var tmp0 = this_0;
        var tmp2 = new Write(cancellable);
        $l$block_0: {
          // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
          var previous = tmp0.w3l_1.kotlinx$atomicfu$value;
          if (!(previous instanceof Closed)) {
            if (!tmp0.w3l_1.atomicfu$compareAndSet(previous, tmp2)) {
              tmp2.m3l();
              break $l$block_0;
            }
          }
          if (previous instanceof Write) {
            previous.n3l(ConcurrentIOException.c3n(tmp2.l3l(), previous.j3l()));
          } else {
            if (isInterface(previous, Task)) {
              previous.m3l();
            } else {
              if (previous instanceof Closed) {
                tmp2.n3l(previous.i3l_1);
                break $l$block_0;
              } else {
                if (!equals(previous, Empty_instance)) {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
          if (!(!this.d3m() && this.z3l_1.kotlinx$atomicfu$value == null)) {
            // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
            var current = tmp0.w3l_1.kotlinx$atomicfu$value;
            var tmp;
            if (current instanceof Write) {
              tmp = tmp0.w3l_1.atomicfu$compareAndSet(current, Empty_instance);
            } else {
              tmp = false;
            }
            if (tmp) {
              current.m3l();
            }
          }
        }
        return cancellable.i29();
      });
    }
    return Unit_instance;
  }
  f3n() {
    if (this.y3l_1.y21())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.v3l_1;
    var count = convertToInt(this.y3l_1.l2());
    this.t3l_1.q23(this.y3l_1);
    this.u3l_1 = this.u3l_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.w3l_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.w3l_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.m3l();
    }
  }
  f7() {
    this.f3n();
    if (!this.z3l_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  }
  *g3n($completion) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      yield* this.e3n($completion);
      // Inline function 'kotlin.Companion.success' call
      tmp = _Result___init__impl__xyqfz8(Unit_instance);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    if (!this.z3l_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
    return Unit_instance;
  }
  h3n(cause) {
    if (!(this.z3l_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.z3l_1.atomicfu$compareAndSet(null, closedToken);
    // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
    var tmp0_subject = access$_get_origin__hdh1qz(closedToken);
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = access$_get_origin__hdh1qz(closedToken).n2d();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException.p(access$_get_origin__hdh1qz(closedToken).message, access$_get_origin__hdh1qz(closedToken));
        } else {
          var p0 = access$_get_origin__hdh1qz(closedToken);
          tmp = ClosedByteChannelException.v3m(p0);
        }
      }
    }
    var wrappedCause = tmp;
    closeSlot(this, wrappedCause);
  }
  i3n(handler) {
    var existingCause = this.z3l_1.kotlinx$atomicfu$value;
    if (!(existingCause == null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(existingCause);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(existingCause).n2d();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException.p(access$_get_origin__hdh1qz(existingCause).message, access$_get_origin__hdh1qz(existingCause));
          } else {
            var p0 = access$_get_origin__hdh1qz(existingCause);
            tmp = ClosedByteChannelException.v3m(p0);
          }
        }
      }
      handler(tmp);
      var tmp_0 = ByteChannel$invokeOnClose$lambda;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_0);
    }
    if (!this.a3m_1.atomicfu$compareAndSet(null, handler)) {
      // Inline function 'kotlin.error' call
      var message = 'Only one invokeOnClose handler is supported per channel';
      throw IllegalStateException.o(toString_1(message));
    }
    var cause = this.z3l_1.kotlinx$atomicfu$value;
    if (!(cause == null) && this.a3m_1.atomicfu$compareAndSet(handler, null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject_0 = access$_get_origin__hdh1qz(cause);
      var tmp_1;
      if (tmp0_subject_0 == null) {
        tmp_1 = null;
      } else {
        if (isInterface(tmp0_subject_0, CopyableThrowable)) {
          tmp_1 = access$_get_origin__hdh1qz(cause).n2d();
        } else {
          if (tmp0_subject_0 instanceof CancellationException) {
            tmp_1 = CancellationException.p(access$_get_origin__hdh1qz(cause).message, access$_get_origin__hdh1qz(cause));
          } else {
            var p0_0 = access$_get_origin__hdh1qz(cause);
            tmp_1 = ClosedByteChannelException.v3m(p0_0);
          }
        }
      }
      handler(tmp_1);
      var tmp_2 = ByteChannel$invokeOnClose$lambda_0;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_2);
    }
    var tmp_3 = ByteChannel$invokeOnClose$lambda_1(this, handler);
    return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_3);
  }
  toString() {
    return 'ByteChannel[' + hashCode(this) + ']';
  }
}
class ConcurrentIOException extends IllegalStateException {
  constructor(taskName, cause) {
    return new.target.c3n(taskName, cause);
  }
  static c3n(taskName, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.q('Concurrent ' + taskName + ' attempts', cause);
    captureStack($this, $this.b3n_1);
    return $this;
  }
}
class ByteChannelScanner {
  constructor(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    this.j3n_1 = channel;
    this.k3n_1 = matchString;
    this.l3n_1 = writeChannel;
    this.m3n_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.k3n_1.l2() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException.b2(toString_1(message));
    }
    this.n3n_1 = this.j3n_1.e3m();
    this.o3n_1 = buildPartialMatchTable(this);
    this.p3n_1 = new Buffer();
    this.q3n_1 = 0n;
    this.r3n_1 = 0;
  }
  *s3n(ignoreMissing, $completion) {
    this.q3n_1 = 0n;
    while (!this.n3n_1.y21() || (yield* this.j3n_1.d3n(VOID, $completion))) {
      yield* /*#__NOINLINE__*/advanceToNextPotentialMatch(this, $completion);
      if (yield* /*#__NOINLINE__*/checkFullMatch(this, $completion)) {
        return this.q3n_1;
      }
    }
    if (!ignoreMissing) {
      throw IOException.b25('Expected "' + toSingleLineString(this, this.k3n_1) + '" but encountered end of input');
    }
    this.q3n_1 = add(this.q3n_1, this.p3n_1.b23(this.l3n_1.k3m()));
    yield* this.l3n_1.e3n($completion);
    return this.q3n_1;
  }
}
class ByteReadChannel$Companion$Empty$1 {
  constructor() {
    this.v3n_1 = null;
    this.w3n_1 = new Buffer();
  }
  r3m() {
    return this.v3n_1;
  }
  w3m() {
    return true;
  }
  e3m() {
    return this.w3n_1;
  }
  *x3m(min, $completion) {
    return false;
  }
  h3n(cause) {
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.x3n_1 = new ByteReadChannel$Companion$Empty$1();
  }
}
class WriterJob {
  constructor(channel, job) {
    this.t3n_1 = channel;
    this.u3n_1 = job;
  }
  t28() {
    return this.u3n_1;
  }
}
class WriterScope {
  constructor(channel, coroutineContext) {
    this.d3o_1 = channel;
    this.e3o_1 = coroutineContext;
  }
  r25() {
    return this.e3o_1;
  }
}
class NO_CALLBACK$1 {
  constructor() {
    this.f3o_1 = EmptyCoroutineContext_instance;
  }
  nd() {
    return this.f3o_1;
  }
  od(result) {
    return Unit_instance;
  }
  pd(result) {
    return this.od(result);
  }
}
class Companion_1 {}
class CloseToken {
  constructor(origin) {
    this.g3o_1 = origin;
  }
}
class CountedByteReadChannel {
  constructor(delegate) {
    this.h3o_1 = delegate;
    this.i3o_1 = new Buffer();
    this.j3o_1 = 0n;
    this.k3o_1 = 0n;
  }
  l3o() {
    updateConsumed(this);
    return this.k3o_1;
  }
  r3m() {
    return this.h3o_1.r3m();
  }
  w3m() {
    return this.i3o_1.y21() && this.h3o_1.w3m();
  }
  e3m() {
    transferFromDelegate(this);
    return this.i3o_1;
  }
  *x3m(min, $completion) {
    if (this.e3m().l2() >= fromInt(min)) {
      return true;
    }
    if (yield* this.h3o_1.x3m(min, $completion)) {
      transferFromDelegate(this);
      return true;
    }
    return false;
  }
  h3n(cause) {
    this.h3o_1.h3n(cause);
    this.i3o_1.f7();
  }
}
class ClosedByteChannelException extends IOException {
  constructor(cause) {
    return new.target.v3m(cause);
  }
  static v3m(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.c25(cause == null ? null : cause.message, cause);
    captureStack($this, $this.u3m_1);
    return $this;
  }
}
class ClosedReadChannelException extends ClosedByteChannelException {
  constructor(cause) {
    return new.target.j3m(cause);
  }
  static j3m(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.v3m(cause);
    captureStack($this, $this.i3m_1);
    return $this;
  }
}
class ClosedWriteChannelException extends ClosedByteChannelException {
  constructor(cause) {
    return new.target.p3m(cause);
  }
  static p3m(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.v3m(cause);
    captureStack($this, $this.o3m_1);
    return $this;
  }
}
class LineEnding extends Enum {}
class Companion_2 {
  constructor() {
    Companion_instance_3 = this;
    this.m3o_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.n3o_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.o3o_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.p3o_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.q3o_1 = listOf([new LineEndingMode(this.m3o_1), new LineEndingMode(this.n3o_1), new LineEndingMode(this.o3o_1)]);
  }
}
class LineEndingMode {
  constructor(mode) {
    Companion_getInstance_2();
    this.r3o_1 = mode;
  }
  toString() {
    return LineEndingMode__toString_impl_j4h76r(this.r3o_1);
  }
  hashCode() {
    return LineEndingMode__hashCode_impl_2mopm4(this.r3o_1);
  }
  equals(other) {
    return LineEndingMode__equals_impl_qyr4nk(this.r3o_1, other);
  }
}
class SourceByteReadChannel {
  constructor(source) {
    this.s3o_1 = source;
    this.t3o_1 = null;
  }
  r3m() {
    var tmp0_safe_receiver = this.t3o_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).n2d();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException.p(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = ClosedByteChannelException.v3m(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  w3m() {
    return this.s3o_1.y21();
  }
  e3m() {
    var tmp0_safe_receiver = this.r3m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s3o_1.x21();
  }
  *x3m(min, $completion) {
    var tmp0_safe_receiver = this.r3m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s3o_1.a22(fromInt(min));
  }
  h3n(cause) {
    if (!(this.t3o_1 == null))
      return Unit_instance;
    this.s3o_1.f7();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.t3o_1 = new CloseToken(IOException.c25(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  }
}
class MalformedInputException extends IOException {
  constructor(message) {
    return new.target.x3o(message);
  }
  static x3o(message) {
    var $this = this.b25(message);
    captureStack($this, $this.w3o_1);
    return $this;
  }
}
class TooLongLineException extends MalformedInputException {
  constructor(message) {
    return new.target.c3o(message);
  }
  static c3o(message) {
    var $this = this.x3o(message);
    captureStack($this, $this.b3o_1);
    return $this;
  }
}
class ObjectPool {}
function close() {
  this.h28();
}
class DefaultPool {
  constructor(capacity) {
    this.g3p_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.g3p_1;
    tmp.h3p_1 = Array(size);
    this.i3p_1 = 0;
  }
  j3p(instance) {
  }
  k3p(instance) {
    return instance;
  }
  l3p(instance) {
  }
  m3p() {
    if (this.i3p_1 === 0)
      return this.f3p();
    this.i3p_1 = this.i3p_1 - 1 | 0;
    var idx = this.i3p_1;
    var tmp = this.h3p_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.h3p_1[idx] = null;
    return this.k3p(instance);
  }
  n3p(instance) {
    this.l3p(instance);
    if (this.i3p_1 === this.g3p_1) {
      this.j3p(instance);
    } else {
      var _unary__edvuaz = this.i3p_1;
      this.i3p_1 = _unary__edvuaz + 1 | 0;
      this.h3p_1[_unary__edvuaz] = instance;
    }
  }
  h28() {
    var inductionVariable = 0;
    var last = this.i3p_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.h3p_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.h3p_1[i] = null;
        this.j3p(instance);
      }
       while (inductionVariable < last);
    this.i3p_1 = 0;
  }
}
class ByteArrayPool$1 extends DefaultPool {
  constructor() {
    super(128);
  }
  f3p() {
    return new Int8Array(4096);
  }
}
class NoPoolImpl {
  n3p(instance) {
    return Unit_instance;
  }
  h28() {
    return Unit_instance;
  }
}
class Companion_3 {
  o3p(name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().y3o_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().z3o_1;
    }
    throw IllegalArgumentException.b2('Charset ' + name + ' is not supported');
  }
}
class Charset {
  constructor(_name) {
    this.a3p_1 = _name;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.a3p_1 === other.a3p_1;
  }
  hashCode() {
    return getStringHashCode(this.a3p_1);
  }
  toString() {
    return this.a3p_1;
  }
}
class Charsets {
  constructor() {
    Charsets_instance = this;
    this.y3o_1 = new CharsetImpl('UTF-8');
    this.z3o_1 = new CharsetImpl('ISO-8859-1');
  }
}
class CharsetDecoder {
  constructor(_charset) {
    this.q3p_1 = _charset;
  }
}
class CharsetEncoder {
  constructor(_charset) {
    this.r3p_1 = _charset;
  }
}
class CharsetImpl extends Charset {
  b3p() {
    return new CharsetEncoderImpl(this);
  }
  p3p() {
    return new CharsetDecoderImpl(this);
  }
}
class CharsetEncoderImpl extends CharsetEncoder {
  constructor(charset) {
    super(charset);
    this.v3p_1 = charset;
  }
  toString() {
    return 'CharsetEncoderImpl(charset=' + this.v3p_1.toString() + ')';
  }
  hashCode() {
    return this.v3p_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.v3p_1.equals(other.v3p_1))
      return false;
    return true;
  }
}
class CharsetDecoderImpl extends CharsetDecoder {
  constructor(charset) {
    super(charset);
    this.x3p_1 = charset;
  }
  toString() {
    return 'CharsetDecoderImpl(charset=' + this.x3p_1.toString() + ')';
  }
  hashCode() {
    return this.x3p_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.x3p_1.equals(other.x3p_1))
      return false;
    return true;
  }
}
class toKtor$1 {
  constructor($this_toKtor) {
    this.y3p_1 = $this_toKtor;
  }
  s3p(buffer) {
    return this.y3p_1.decode(buffer);
  }
}
class TextDecoderFallback {
  constructor(encoding, fatal) {
    this.z3p_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().o2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException.o(toString_1(message));
    }
  }
  s3p(buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.z3p_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException.o(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.r23(toByte(point >> 8));
        }
        builder.r23(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString(readByteArray_0(builder));
  }
}
//endregion
var Companion_instance_0;
function Companion_getInstance() {
  if (Companion_instance_0 === VOID)
    new Companion();
  return Companion_instance_0;
}
var Empty_instance;
function Empty_getInstance() {
  return Empty_instance;
}
function moveFlushToReadBuffer($this) {
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  $this.v3l_1;
  $this.t3l_1.b23($this.x3l_1);
  $this.u3l_1 = 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = $this.w3l_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Write) {
    tmp = $this.w3l_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.m3l();
  }
}
function closeSlot($this, cause) {
  var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().g3l_1;
  var continuation = $this.w3l_1.atomicfu$getAndSet(closeContinuation);
  if (isInterface(continuation, Task)) {
    continuation.n3l(cause);
  }
  var tmp0_safe_receiver = $this.a3m_1.atomicfu$getAndSet(null);
  if (tmp0_safe_receiver == null)
    null;
  else
    tmp0_safe_receiver(cause);
}
function ByteChannel$invokeOnClose$lambda() {
  return Unit_instance;
}
function ByteChannel$invokeOnClose$lambda_0() {
  return Unit_instance;
}
function ByteChannel$invokeOnClose$lambda_1(this$0, $handler) {
  return () => {
    this$0.a3m_1.atomicfu$compareAndSet($handler, null);
    return Unit_instance;
  };
}
function ByteReadChannel_0(content, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? content.length : length;
  // Inline function 'kotlin.also' call
  var this_0 = new Buffer();
  this_0.h23(content, offset, offset + length | 0);
  var source = this_0;
  return ByteReadChannel_1(source);
}
function ByteReadChannel_1(source) {
  return new SourceByteReadChannel(source);
}
function buildPartialMatchTable($this) {
  var table = new Int32Array($this.k3n_1.l2());
  var j = 0;
  var inductionVariable = 1;
  var last = $this.k3n_1.l2();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      while (j > 0 && !($this.k3n_1.n2(i) === $this.k3n_1.n2(j))) {
        j = table[j - 1 | 0];
      }
      if ($this.k3n_1.n2(i) === $this.k3n_1.n2(j)) {
        j = j + 1 | 0;
      }
      table[i] = j;
    }
     while (inductionVariable < last);
  return table;
}
function *advanceToNextPotentialMatch($this, $completion) {
  while (!$this.n3n_1.y21() || (yield* $this.j3n_1.d3n(VOID, $completion))) {
    var nextMatch = indexOf($this.n3n_1, $this.k3n_1.n2(0));
    if (nextMatch === -1n) {
      var tmp = $this.n3n_1;
      checkBounds($this, (tmp instanceof Buffer ? tmp : THROW_CCE()).l2());
      $this.q3n_1 = add($this.q3n_1, $this.n3n_1.b23($this.l3n_1.k3m()));
      yield* flushIfNeeded($this.l3n_1, $completion);
    } else {
      checkBounds($this, nextMatch);
      var tmp_0 = $this;
      var tmp_1 = $this.q3n_1;
      var tmp_2 = $this.l3n_1.k3m();
      tmp_0.q3n_1 = add(tmp_1, $this.n3n_1.y22(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), nextMatch));
      yield* flushIfNeeded($this.l3n_1, $completion);
      return Unit_instance;
    }
  }
  return Unit_instance;
}
function *checkFullMatch($this, $completion) {
  while (!$this.n3n_1.y21() || (yield* $this.j3n_1.d3n(VOID, $completion))) {
    var byte = $this.n3n_1.b22();
    if ($this.r3n_1 > 0 && !(byte === $this.k3n_1.n2($this.r3n_1))) {
      var oldMatchIndex = $this.r3n_1;
      while ($this.r3n_1 > 0 && !(byte === $this.k3n_1.n2($this.r3n_1))) {
        $this.r3n_1 = $this.o3n_1[$this.r3n_1 - 1 | 0];
      }
      var retained = fromInt(oldMatchIndex - $this.r3n_1 | 0);
      checkBounds($this, retained);
      var tmp = $this;
      var tmp_0 = $this.q3n_1;
      var tmp_1 = $this.l3n_1.k3m();
      tmp.q3n_1 = add(tmp_0, $this.p3n_1.y22(tmp_1 instanceof Buffer ? tmp_1 : THROW_CCE(), retained));
      if ($this.r3n_1 === 0 && !(byte === $this.k3n_1.n2($this.r3n_1))) {
        yield* writeByte($this.l3n_1, byte, $completion);
        var _unary__edvuaz = $this.q3n_1;
        $this.q3n_1 = add(_unary__edvuaz, get_ONE());
        return false;
      }
    }
    $this.r3n_1 = $this.r3n_1 + 1 | 0;
    if ($this.r3n_1 === $this.k3n_1.l2()) {
      return true;
    }
    $this.p3n_1.r23(byte);
  }
  return false;
}
function checkBounds($this, extra) {
  if (add($this.q3n_1, extra) > $this.m3n_1) {
    throw IOException.b25('Limit of ' + $this.m3n_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.k3n_1) + '"'));
  }
}
function toSingleLineString($this, $receiver) {
  return replace(decodeToString_0($receiver), '\n', '\\n');
}
function attachWriterJob(_this__u8e3s4, writerJob) {
  var tmp = writerJob.t3n_1;
  var tmp0_safe_receiver = tmp instanceof ByteChannel ? tmp : null;
  if (tmp0_safe_receiver == null)
    null;
  else {
    tmp0_safe_receiver.i3n(attachWriterJob$lambda(_this__u8e3s4));
  }
}
function attachWriterJob$lambda($this_attachWriterJob) {
  return (cause) => {
    var tmp;
    if (!(cause == null)) {
      $this_attachWriterJob.h3n(cause);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var Companion_instance_1;
function Companion_getInstance_0() {
  if (Companion_instance_1 === VOID)
    new Companion_0();
  return Companion_instance_1;
}
function cancel_0(_this__u8e3s4) {
  _this__u8e3s4.h3n(IOException.b25('Channel was cancelled'));
}
function *readRemaining(_this__u8e3s4, $completion) {
  var result = BytePacketBuilder();
  while (!_this__u8e3s4.w3m()) {
    result.q23(_this__u8e3s4.e3m());
    yield* _this__u8e3s4.d3n(VOID, $completion);
  }
  rethrowCloseCauseIfNeeded(_this__u8e3s4);
  return result.x21();
}
function *toByteArray(_this__u8e3s4, $completion) {
  return readBytes(yield* readBuffer(_this__u8e3s4, $completion));
}
function *copyTo(_this__u8e3s4, channel, limit, $completion) {
  var remaining = limit;
  try {
    while (!_this__u8e3s4.w3m() && remaining > 0n) {
      if (_this__u8e3s4.e3m().y21()) {
        yield* _this__u8e3s4.d3n(VOID, $completion);
      }
      var tmp0 = remaining;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = get_remaining(_this__u8e3s4.e3m());
      var count = tmp0 <= b ? tmp0 : b;
      _this__u8e3s4.e3m().a23(channel.k3m(), count);
      remaining = subtract(remaining, count);
      yield* channel.e3n($completion);
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.h3n(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    yield* channel.e3n($completion);
  }
  return subtract(limit, remaining);
}
function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.r3m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function *discard(_this__u8e3s4, max, $completion) {
  max = max === VOID ? 9223372036854775807n : max;
  var remaining = max;
  while (remaining > 0n && !_this__u8e3s4.w3m()) {
    if (get_availableForRead(_this__u8e3s4) === 0) {
      yield* _this__u8e3s4.d3n(VOID, $completion);
    }
    var tmp0 = remaining;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4.e3m());
    var count = tmp0 <= b ? tmp0 : b;
    discard_0(_this__u8e3s4.e3m(), count);
    remaining = subtract(remaining, count);
  }
  return subtract(max, remaining);
}
function *copyTo_0(_this__u8e3s4, channel, $completion) {
  var result = 0n;
  try {
    while (!_this__u8e3s4.w3m()) {
      result = add(result, _this__u8e3s4.e3m().b23(channel.k3m()));
      yield* channel.e3n($completion);
      yield* _this__u8e3s4.d3n(VOID, $completion);
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.h3n(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    yield* channel.e3n($completion);
  }
  return result;
}
function *readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  if (_this__u8e3s4.w3m())
    return -1;
  if (_this__u8e3s4.e3m().y21()) {
    yield* _this__u8e3s4.d3n(VOID, $completion);
  }
  if (_this__u8e3s4.w3m())
    return -1;
  return readAvailable_0(_this__u8e3s4.e3m(), buffer, offset, length);
}
function *skipIfFound(_this__u8e3s4, byteString, $completion) {
  if (equals(yield* peek(_this__u8e3s4, byteString.l2(), $completion), byteString)) {
    yield* /*#__NOINLINE__*/discard(_this__u8e3s4, fromInt(byteString.l2()), $completion);
    return true;
  }
  return false;
}
function *readPacket(_this__u8e3s4, packet, $completion) {
  var result = new Buffer();
  $l$loop: while (result.l2() < fromInt(packet)) {
    if (_this__u8e3s4.e3m().y21()) {
      yield* _this__u8e3s4.d3n(VOID, $completion);
    }
    if (_this__u8e3s4.w3m())
      break $l$loop;
    if (get_remaining(_this__u8e3s4.e3m()) > subtract(numberToLong(packet), result.l2())) {
      _this__u8e3s4.e3m().a23(result, subtract(numberToLong(packet), result.l2()));
    } else {
      _this__u8e3s4.e3m().b23(result);
    }
  }
  if (result.l2() < fromInt(packet)) {
    throw EOFException.w21('Not enough data available, required ' + packet + ' bytes but only ' + result.l2().toString() + ' available');
  }
  return result;
}
function *readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
  return yield* (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).s3n(ignoreMissing, $completion);
}
function *readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
  // Inline function 'kotlin.require' call
  if (!(limit >= 0n)) {
    var message = 'Limit (' + limit.toString() + ') should be non-negative';
    throw IllegalArgumentException.b2(toString_1(message));
  }
  return yield* internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
}
function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.r3m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function *readBuffer(_this__u8e3s4, $completion) {
  var result = new Buffer();
  while (!_this__u8e3s4.w3m()) {
    result.q23(_this__u8e3s4.e3m());
    yield* _this__u8e3s4.d3n(VOID, $completion);
  }
  var tmp0_safe_receiver = _this__u8e3s4.r3m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  return result;
}
function get_availableForRead(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.e3m().x21().l2());
}
function *peek(_this__u8e3s4, count, $completion) {
  if (_this__u8e3s4.w3m())
    return null;
  if (!(yield* _this__u8e3s4.x3m(count, $completion)))
    return null;
  return readByteString(_this__u8e3s4.e3m().c23(), count);
}
function *internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
  var readBuffer = _this__u8e3s4.e3m();
  if (readBuffer.y21()) {
    yield* _this__u8e3s4.d3n(VOID, $completion);
  }
  if (_this__u8e3s4.w3m())
    return -1n;
  var consumed = {_v: 0n};
  var outBuffer = {_v: null};
  try {
    $l$loop: while (consumed._v < limit && !_this__u8e3s4.w3m()) {
      var limitLeft = subtract(limit, consumed._v);
      var lfIndex = indexOf(readBuffer, 10, VOID, limitLeft);
      var crIndex = internalReadLineTo$scanForSoleCr(readBuffer, lenientLineEnding, lfIndex, limitLeft);
      if (crIndex >= 0n) {
        internalReadLineTo$appendOrBuffer(outBuffer, out, readBuffer, consumed, crIndex);
        discard_0(readBuffer, 1n);
        return consumed._v;
      }
      if (lfIndex === 0n) {
        discard_0(readBuffer, 1n);
        return consumed._v;
      }
      if (lfIndex > 0n) {
        var tmp;
        var tmp_0 = readBuffer.x21();
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0 = subtract(lfIndex, fromInt(1));
        if (tmp_0.t22(tmp$ret$0) === 13) {
          tmp = 1n;
        } else {
          tmp = 0n;
        }
        var isCrlf = tmp;
        internalReadLineTo$appendOrBuffer(outBuffer, out, readBuffer, consumed, subtract(lfIndex, isCrlf));
        discard_0(readBuffer, add(numberToLong(1), isCrlf));
        return consumed._v;
      }
      // Inline function 'kotlin.comparisons.minOf' call
      var b = get_remaining(readBuffer);
      var count = limitLeft <= b ? limitLeft : b;
      var tmp_1 = readBuffer.x21();
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$2 = subtract(count, fromInt(1));
      if (tmp_1.t22(tmp$ret$2) === 13) {
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$3 = subtract(count, fromInt(1));
        internalReadLineTo$appendOrBuffer(outBuffer, out, readBuffer, consumed, tmp$ret$3);
        if (yield* internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion)) {
          return consumed._v;
        } else {
          internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, 1n);
        }
      } else {
        internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, count);
      }
      if (consumed._v < limit && get_remaining(readBuffer) === 0n && !(yield* _this__u8e3s4.d3n(VOID, $completion)))
        break $l$loop;
    }
    if (consumed._v === 0n && _this__u8e3s4.w3m())
      return -1n;
    // Inline function 'kotlin.check' call
    if (!(consumed._v <= limit)) {
      var message = 'Consumed bytes exceed the limit: ' + consumed._v.toString() + ' > ' + limit.toString() + ". It's an implementation bug, please report it.";
      throw IllegalStateException.o(toString_1(message));
    }
    if (consumed._v === limit) {
      if (limit === 9223372036854775807n)
        throw TooLongLineException.c3o('Max line length exceeded');
      if (get_remaining(readBuffer) === 0n && !(yield* _this__u8e3s4.d3n(VOID, $completion))) {
        throwEndOfStreamException(consumed._v);
      }
      var tmp0_subject = readBuffer.x21().t22(0n);
      if (tmp0_subject === 10) {
        discard_0(readBuffer, 1n);
        return consumed._v;
      } else if (tmp0_subject === 13)
        if (yield* internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion)) {
          return consumed._v;
        }
      throwTooLongLineException(limit);
    }
    if (throwOnIncompleteLine) {
      throwEndOfStreamException(consumed._v);
    }
    return consumed._v;
  }finally {
    if (!(outBuffer._v == null)) {
      out.t1(readString(outBuffer._v));
    }
  }
}
function throwEndOfStreamException(consumed) {
  throw EOFException.w21('Unexpected end of stream after reading ' + consumed.toString() + ' bytes');
}
function throwTooLongLineException(limit) {
  throw TooLongLineException.c3o('Line exceeds limit of ' + limit.toString() + ' bytes');
}
function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.r3m();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, count) {
  if (count > 0n) {
    if (outBuffer._v == null) {
      outBuffer._v = new Buffer();
    }
    outBuffer._v.l23(readBuffer, count);
    consumed._v = add(consumed._v, count);
  }
}
function internalReadLineTo$appendOrBuffer(outBuffer, $out, readBuffer, consumed, count) {
  if (outBuffer._v == null) {
    if (count > 0n) {
      $out.t1(readString_0(readBuffer, count));
      consumed._v = add(consumed._v, count);
    }
  } else {
    internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, count);
  }
}
function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
  if (!$lenientLineEnding)
    return -1n;
  var tmp;
  if (lfIndex === -1n) {
    // Inline function 'kotlin.Long.minus' call
    var this_0 = get_remaining(_this__u8e3s4);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this_0, fromInt(1));
    tmp = limitLeft <= b ? limitLeft : b;
  } else if (lfIndex === 0n) {
    tmp = 0n;
  } else {
    // Inline function 'kotlin.Long.minus' call
    tmp = subtract(lfIndex, fromInt(1));
  }
  var endIndex = tmp;
  return indexOf(_this__u8e3s4, 13, VOID, endIndex);
}
function *internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
  if ((get_remaining(_this__u8e3s4) >= 2n || (yield* $this_internalReadLineTo.x3m(2, $completion))) && _this__u8e3s4.x21().t22(1n) === 10) {
    discard_0(_this__u8e3s4, 2n);
    return true;
  }
  if ($lenientLineEnding) {
    discard_0(_this__u8e3s4, 1n);
    return true;
  }
  return false;
}
function *flushIfNeeded(_this__u8e3s4, $completion) {
  rethrowCloseCauseIfNeeded_1(_this__u8e3s4);
  if (_this__u8e3s4.c3m() || get_size(_this__u8e3s4.k3m()) >= 1048576)
    yield* _this__u8e3s4.e3n($completion);
  return Unit_instance;
}
function ByteWriteChannel$flushAndClose$ref(p0) {
  return constructCallableReference(function *($completion) {
    return yield* p0.g3n($completion);
  }, 0, 1, 19, 'flushAndClose', [p0]);
}
function get_NO_CALLBACK() {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return NO_CALLBACK;
}
var NO_CALLBACK;
function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
  autoFlush = autoFlush === VOID ? false : autoFlush;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
}
function invokeOnCompletion(_this__u8e3s4, block) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return _this__u8e3s4.t28().u26(block);
}
function *writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? value.length : endIndex;
  _this__u8e3s4.k3m().h23(value, startIndex, endIndex);
  yield* flushIfNeeded(_this__u8e3s4, $completion);
  return Unit_instance;
}
function close_0(_this__u8e3s4, cause) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  if (cause == null) {
    fireAndForget(ByteWriteChannel$flushAndClose$ref(_this__u8e3s4));
  } else {
    _this__u8e3s4.h3n(cause);
  }
}
function *writePacket(_this__u8e3s4, source, $completion) {
  while (!source.y21()) {
    _this__u8e3s4.k3m().l23(source, get_remaining(source));
    yield* flushIfNeeded(_this__u8e3s4, $completion);
  }
  return Unit_instance;
}
function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  // Inline function 'kotlin.apply' call
  var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda(block, channel));
  this_0.u26(writer$lambda(channel));
  var job = this_0;
  return new WriterJob(channel, job);
}
function fireAndForget(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
}
function *writeByte(_this__u8e3s4, value, $completion) {
  _this__u8e3s4.k3m().r23(value);
  yield* flushIfNeeded(_this__u8e3s4, $completion);
  return Unit_instance;
}
function writer$slambda($block, $channel) {
  return constructCallableReference(function *($this$launch, $completion) {
    var nested = Job(get_job($this$launch.r25()));
    var tmp;
    try {
      yield* $block(new WriterScope($channel, $this$launch.r25().np(nested)), $completion);
      nested.b2d();
      var tmp_0;
      if (get_job($this$launch.r25()).o26()) {
        $channel.h3n(get_job($this$launch.r25()).r26());
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var cause = $p;
        cancel(nested, 'Exception thrown while writing to channel', cause);
        $channel.h3n(cause);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    finally {
      yield* nested.y26($completion);
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        yield* $channel.g3n($completion);
        // Inline function 'kotlin.Companion.success' call
        tmp_2 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p_0) {
        var tmp_3;
        if ($p_0 instanceof Error) {
          var e = $p_0;
          // Inline function 'kotlin.Companion.failure' call
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p_0;
        }
        tmp_2 = tmp_3;
      }
    }
    return Unit_instance;
  }, 1);
}
function writer$lambda($channel) {
  return (it) => {
    var tmp;
    if (!(it == null) && !$channel.q3m()) {
      $channel.h3n(it);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
  if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
    properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
    NO_CALLBACK = new NO_CALLBACK$1();
  }
}
function get_CLOSED() {
  _init_properties_CloseToken_kt__9ucr41();
  return CLOSED;
}
var CLOSED;
var Companion_instance_2;
function Companion_getInstance_1() {
  return Companion_instance_2;
}
function access$_get_origin__hdh1qz($this) {
  return $this.g3o_1;
}
var properties_initialized_CloseToken_kt_lgg8zn;
function _init_properties_CloseToken_kt__9ucr41() {
  if (!properties_initialized_CloseToken_kt_lgg8zn) {
    properties_initialized_CloseToken_kt_lgg8zn = true;
    CLOSED = new CloseToken(null);
  }
}
function transferFromDelegate($this) {
  updateConsumed($this);
  var appended = $this.i3o_1.q23($this.h3o_1.e3m());
  $this.j3o_1 = add($this.j3o_1, appended);
}
function updateConsumed($this) {
  $this.k3o_1 = add($this.k3o_1, subtract($this.j3o_1, $this.i3o_1.l2()));
  $this.j3o_1 = $this.i3o_1.l2();
}
function counted(_this__u8e3s4) {
  return new CountedByteReadChannel(_this__u8e3s4);
}
function readText(_this__u8e3s4) {
  return readString_1(_this__u8e3s4);
}
var LineEnding_Default_instance;
var LineEnding_Lenient_instance;
var LineEnding_entriesInitialized;
function LineEnding_initEntries() {
  if (LineEnding_entriesInitialized)
    return Unit_instance;
  LineEnding_entriesInitialized = true;
  LineEnding_Default_instance = new LineEnding('Default', 0);
  LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
}
function LineEnding_Default_getInstance() {
  LineEnding_initEntries();
  return LineEnding_Default_instance;
}
function LineEnding_Lenient_getInstance() {
  LineEnding_initEntries();
  return LineEnding_Lenient_instance;
}
function _LineEndingMode___init__impl__jo5bul(mode) {
  return mode;
}
function _get_mode__dah3bc($this) {
  return $this;
}
function LineEndingMode__contains_impl_q5pr68($this, other) {
  return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
}
function LineEndingMode__plus_impl_ttpz2j($this, other) {
  return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
}
function LineEndingMode__toString_impl_j4h76r($this) {
  var tmp;
  if ($this === Companion_getInstance_2().m3o_1) {
    tmp = 'CR';
  } else if ($this === Companion_getInstance_2().n3o_1) {
    tmp = 'LF';
  } else if ($this === Companion_getInstance_2().o3o_1) {
    tmp = 'CRLF';
  } else {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = Companion_getInstance_2().q3o_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.k2();
    var _iterator__ex2g4s = tmp0.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      var it = element.r3o_1;
      if (LineEndingMode__contains_impl_q5pr68($this, it)) {
        destination.j2(element);
      }
    }
    tmp = toString_1(destination);
  }
  return tmp;
}
var Companion_instance_3;
function Companion_getInstance_2() {
  if (Companion_instance_3 === VOID)
    new Companion_2();
  return Companion_instance_3;
}
function LineEndingMode__hashCode_impl_2mopm4($this) {
  return $this;
}
function LineEndingMode__equals_impl_qyr4nk($this, other) {
  if (!(other instanceof LineEndingMode))
    return false;
  if (!($this === other.r3o_1))
    return false;
  return true;
}
function decode(_this__u8e3s4, input, max) {
  max = max === VOID ? 2147483647 : max;
  var tmp0 = fromInt(max);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = input.x21().l2();
  var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
  // Inline function 'kotlin.text.buildString' call
  var capacity = convertToInt(tmp$ret$0);
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.nc(capacity);
  decode_0(_this__u8e3s4, input, this_0, max);
  return this_0.toString();
}
function encode(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
  return builder;
}
function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
  var start = fromIndex;
  if (start >= toIndex)
    return Unit_instance;
  $l$loop: while (true) {
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
    // Inline function 'kotlin.check' call
    if (!(rc >= 0)) {
      throw IllegalStateException.o('Check failed.');
    }
    start = start + rc | 0;
    if (start >= toIndex)
      break $l$loop;
  }
}
function canRead(_this__u8e3s4) {
  return !_this__u8e3s4.y21();
}
function readBytes(_this__u8e3s4, count) {
  count = count === VOID ? convertToInt(_this__u8e3s4.l2()) : count;
  return readByteArray(_this__u8e3s4, count);
}
function BytePacketBuilder() {
  return new Buffer();
}
function writeFully_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  _this__u8e3s4.h23(buffer, offset, offset + length | 0);
}
function build(_this__u8e3s4) {
  return _this__u8e3s4.x21();
}
function get_size(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.x21().l2());
}
var ByteReadPacketEmpty;
function ByteReadPacket(array, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? array.length : length;
  _init_properties_ByteReadPacket_kt__28475y();
  // Inline function 'kotlin.apply' call
  var this_0 = new Buffer();
  this_0.h23(array, offset, offset + length | 0);
  return this_0;
}
function get_remaining(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.x21().l2();
}
function discard_0(_this__u8e3s4, count) {
  count = count === VOID ? 9223372036854775807n : count;
  _init_properties_ByteReadPacket_kt__28475y();
  _this__u8e3s4.a22(count);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = get_remaining(_this__u8e3s4);
  var countToDiscard = count <= b ? count : b;
  _this__u8e3s4.x21().v22(countToDiscard);
  return countToDiscard;
}
function takeWhile(_this__u8e3s4, block) {
  _init_properties_ByteReadPacket_kt__28475y();
  while (!_this__u8e3s4.y21() && block(_this__u8e3s4.x21())) {
  }
}
var properties_initialized_ByteReadPacket_kt_hw4st4;
function _init_properties_ByteReadPacket_kt__28475y() {
  if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
    properties_initialized_ByteReadPacket_kt_hw4st4 = true;
    ByteReadPacketEmpty = new Buffer();
  }
}
function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  var result = _this__u8e3s4.w22(buffer, offset, offset + length | 0);
  return result === -1 ? 0 : result;
}
function toByteArray_0(_this__u8e3s4, charset) {
  charset = charset === VOID ? Charsets_getInstance().y3o_1 : charset;
  if (charset.equals(Charsets_getInstance().y3o_1))
    return encodeToByteArray(_this__u8e3s4);
  return encodeToByteArray_0(charset.b3p(), _this__u8e3s4, 0, _this__u8e3s4.length);
}
function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
  charset = charset === VOID ? Charsets_getInstance().y3o_1 : charset;
  if (charset === Charsets_getInstance().y3o_1) {
    return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
  }
  encodeToImpl(charset.b3p(), _this__u8e3s4, text, fromIndex, toIndex);
}
function get_ByteArrayPool() {
  _init_properties_ByteArrayPool_kt__kfi3uj();
  return ByteArrayPool;
}
var ByteArrayPool;
var properties_initialized_ByteArrayPool_kt_td6pfh;
function _init_properties_ByteArrayPool_kt__kfi3uj() {
  if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
    properties_initialized_ByteArrayPool_kt_td6pfh = true;
    ByteArrayPool = new ByteArrayPool$1();
  }
}
var Companion_instance_4;
function Companion_getInstance_3() {
  return Companion_instance_4;
}
var Charsets_instance;
function Charsets_getInstance() {
  if (Charsets_instance === VOID)
    new Charsets();
  return Charsets_instance;
}
function get_name(_this__u8e3s4) {
  return _this__u8e3s4.a3p_1;
}
function forName(_this__u8e3s4, name) {
  return Companion_instance_4.o3p(name);
}
function decode_0(_this__u8e3s4, input, dst, max) {
  var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
  var tmp0 = input.x21().l2();
  // Inline function 'kotlin.comparisons.minOf' call
  var b = fromInt(max);
  var count = tmp0 <= b ? tmp0 : b;
  var array = readByteArray(input, convertToInt(count));
  var tmp;
  try {
    // Inline function 'org.khronos.webgl.toInt8Array' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = decoder.s3p(array);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      var tmp0_elvis_lhs = cause.message;
      throw MalformedInputException.x3o('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
    } else {
      throw $p;
    }
  }
  var result = tmp;
  dst.t1(result);
  return result.length;
}
function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(fromIndex <= toIndex)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException.b2(toString_1(message));
  }
  if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().z3o_1)) {
    return encodeISO88591(input, fromIndex, toIndex, dst);
  }
  // Inline function 'kotlin.require' call
  if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().y3o_1)) {
    var message_0 = 'Only UTF-8 encoding is supported in JS';
    throw IllegalArgumentException.b2(toString_1(message_0));
  }
  var encoder = new TextEncoder();
  // Inline function 'kotlin.text.substring' call
  var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
  var result = encoder.encode(tmp$ret$5);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  dst.k23(result);
  return result.length;
}
function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
}
function get_charset(_this__u8e3s4) {
  return _this__u8e3s4.q3p_1;
}
function get_charset_0(_this__u8e3s4) {
  return _this__u8e3s4.r3p_1;
}
function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  var start = fromIndex;
  if (start >= toIndex)
    return new Int8Array(0);
  var dst = new Buffer();
  var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
  start = start + rc | 0;
  if (start === toIndex) {
    return readByteArray_0(dst);
  }
  encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
  return readByteArray_0(dst);
}
function Decoder(encoding, fatal) {
  fatal = fatal === VOID ? true : fatal;
  var tmp;
  try {
    tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      tmp_0 = new TextDecoderFallback(encoding, fatal);
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function toKtor(_this__u8e3s4) {
  return new toKtor$1(_this__u8e3s4);
}
function textDecoderOptions(fatal) {
  fatal = fatal === VOID ? false : fatal;
  // Inline function 'kotlin.apply' call
  var this_0 = new Object();
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.with' call
  this_0.fatal = fatal;
  return this_0;
}
function get_ENCODING_ALIASES() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return ENCODING_ALIASES;
}
var ENCODING_ALIASES;
function get_REPLACEMENT() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return REPLACEMENT;
}
var REPLACEMENT;
function toCodePoint(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  var value = _this__u8e3s4 & 255;
  if (isASCII(value)) {
    return value;
  }
  return get_WIN1252_TABLE()[value - 128 | 0];
}
function isASCII(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
}
var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
  if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
    properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
    ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
    // Inline function 'kotlin.byteArrayOf' call
    REPLACEMENT = new Int8Array([-17, -65, -67]);
  }
}
function readText_0(_this__u8e3s4, charset, max) {
  charset = charset === VOID ? Charsets_getInstance().y3o_1 : charset;
  max = max === VOID ? 2147483647 : max;
  if (charset.equals(Charsets_getInstance().y3o_1)) {
    if (max === 2147483647)
      return readString_1(_this__u8e3s4);
    var tmp0 = _this__u8e3s4.x21().l2();
    // Inline function 'kotlin.math.min' call
    var b = fromInt(max);
    var count = tmp0 <= b ? tmp0 : b;
    return readString_0(_this__u8e3s4, count);
  }
  return decode(charset.p3p(), _this__u8e3s4, max);
}
function get_DEVELOPMENT_MODE() {
  return false;
}
function ioDispatcher() {
  return Dispatchers_getInstance().l2h_1;
}
function encodeISO88591(input, fromIndex, toIndex, dst) {
  if (fromIndex >= toIndex)
    return 0;
  var inductionVariable = fromIndex;
  if (inductionVariable < toIndex)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(input, index);
      var character = Char__toInt_impl_vasixd(this_0);
      if (character > 255) {
        failedToMapError(character);
      }
      dst.r23(toByte(character));
    }
     while (inductionVariable < toIndex);
  return toIndex - fromIndex | 0;
}
function failedToMapError(ch) {
  throw MalformedInputException.x3o('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
}
function get_WIN1252_TABLE() {
  _init_properties_Win1252Table_kt__tl0v64();
  return WIN1252_TABLE;
}
var WIN1252_TABLE;
var properties_initialized_Win1252Table_kt_pkmjoq;
function _init_properties_Win1252Table_kt__tl0v64() {
  if (!properties_initialized_Win1252Table_kt_pkmjoq) {
    properties_initialized_Win1252Table_kt_pkmjoq = true;
    // Inline function 'kotlin.intArrayOf' call
    WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
  }
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForObject(Empty, 'Empty');
initMetadataForClass(Closed, 'Closed');
initMetadataForInterface(Task, 'Task');
protoOf(Read).m3l = resume;
protoOf(Read).n3l = resume_0;
initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
protoOf(Write).m3l = resume;
protoOf(Write).n3l = resume_0;
initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
initMetadataForInterface(ByteReadChannel, 'ByteReadChannel', VOID, VOID, VOID, [1]);
initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
protoOf(ByteChannel).d3n = awaitContent$default;
initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel, ByteWriteChannel], [1, 0]);
initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException');
initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
protoOf(ByteReadChannel$Companion$Empty$1).d3n = awaitContent$default;
initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel], [1]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(WriterJob, 'WriterJob');
initMetadataForClass(WriterScope, 'WriterScope');
initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
initMetadataForCompanion(Companion_1);
initMetadataForClass(CloseToken, 'CloseToken');
protoOf(CountedByteReadChannel).d3n = awaitContent$default;
initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException.v3m);
initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException.j3m);
initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException.p3m);
initMetadataForClass(LineEnding, 'LineEnding');
initMetadataForCompanion(Companion_2);
initMetadataForClass(LineEndingMode, 'LineEndingMode');
protoOf(SourceByteReadChannel).d3n = awaitContent$default;
initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(MalformedInputException, 'MalformedInputException');
initMetadataForClass(TooLongLineException, 'TooLongLineException');
initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
protoOf(DefaultPool).f7 = close;
initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
initMetadataForClass(ByteArrayPool$1);
protoOf(NoPoolImpl).f7 = close;
initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
initMetadataForCompanion(Companion_3);
initMetadataForClass(Charset, 'Charset');
initMetadataForObject(Charsets, 'Charsets');
initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
initMetadataForClass(CharsetImpl, 'CharsetImpl');
initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl');
initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl');
initMetadataForClass(toKtor$1);
initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
//endregion
//region block: init
Empty_instance = new Empty();
Companion_instance_2 = new Companion_1();
Companion_instance_4 = new Companion_3();
//endregion
//region block: exports
export {
  LineEndingMode__plus_impl_ttpz2j as LineEndingMode__plus_impl_ttpz2j3u2ebrlepd29o,
  Charsets_getInstance as Charsets_getInstance3jooo7e4x0j2x,
  Companion_getInstance_0 as Companion_getInstance25751un9ltd4f,
  Companion_getInstance_2 as Companion_getInstance33j3lym6q7yx7,
  copyTo as copyTo1e8cxw3cmqjst,
  copyTo_0 as copyTo3qvfg88wirbvt,
  readAvailable as readAvailable2yaaricqompas,
  readLineStrictTo as readLineStrictTo30g42df56og5l,
  readPacket as readPacket25aqlhslm04t6,
  readRemaining as readRemaining1kbpbgdrq25q1,
  readUntil as readUntil13nwpwqdlw2vo,
  skipIfFound as skipIfFound2z2la3mzzpubl,
  toByteArray as toByteArray1nbmiiav9igm0,
  writeFully as writeFullyuc6cd2hh6ex3,
  writePacket as writePacket3icztho1wkb6k,
  MalformedInputException as MalformedInputExceptionbvc6h5ij0ias,
  decode as decode1t43jmuxrxpmo,
  encode as encode35e4rpnc94tb5,
  forName as forName2faodmskqnoz5,
  get_name as get_name2f11g4r0d5pxp,
  BytePacketBuilder as BytePacketBuilder2biodf4wxvlba,
  ByteReadPacket as ByteReadPacket24tdckgvuvatn,
  build as buildjygoh729rhy8,
  canRead as canRead1guo8vbveth0f,
  discard_0 as discard3ugntd47xyll6,
  readText_0 as readText27783kyxjxi1g,
  get_remaining as get_remaining1lapv95kcmm0y,
  get_size as get_size2imoy2jq11jxl,
  takeWhile as takeWhile34751tcfg6owx,
  toByteArray_0 as toByteArray1i3ns5jnoqlv6,
  writeFully_0 as writeFully359t6q8kam2g5,
  writeText as writeText19qfzm98fbm4l,
  get_ByteArrayPool as get_ByteArrayPool3f7yrgvqxz9ct,
  DefaultPool as DefaultPool2gb1fm4epwgu9,
  NoPoolImpl as NoPoolImplgos9n8jphzjp,
  ByteChannel as ByteChannel3cxdguezl3lu7,
  ByteReadChannel_1 as ByteReadChannel2ndu7k90iil3s,
  ByteReadChannel_0 as ByteReadChannel1cb89sbyipkce,
  ByteReadChannel as ByteReadChannel2wzou76jce72d,
  ClosedByteChannelException as ClosedByteChannelException3il8gfpye60w,
  attachWriterJob as attachWriterJob2dr3tee7atoa9,
  cancel_0 as canceldn4b3cdqcfny,
  close_0 as close3semq7pafb42g,
  counted as counted3iniv3aql3f9n,
  invokeOnCompletion as invokeOnCompletion1ziuxzoag0iwj,
  ioDispatcher as ioDispatcher3b9pa3x0duop,
  readText as readText3frapgncbqrcg,
  rethrowCloseCauseIfNeeded as rethrowCloseCauseIfNeeded3ixo8wl4o3bz4,
  writer as writer1eia5its2a1fh,
};
//endregion

//# sourceMappingURL=ktor-ktor-io.mjs.map
