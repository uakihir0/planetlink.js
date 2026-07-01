import {
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  subtract2orl8z9upxd9l as subtract,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  toString1pkumu07cwy4m as toString,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  toShort36kaw0zjdq3ex as toShort,
  add2suhfggl4zvkk as add,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  fromInt2ii0rejb1w62w as fromInt,
  convertToInty04h231mmjoh as convertToInt,
  protoOf180f3jzyo7rfj as protoOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  multiply2k9eolhnz1bjv as multiply,
  charCodeAt1yspne1d8erbm as charCodeAt,
  Char__toInt_impl_vasixd1ka89vowck9tn as Char__toInt_impl_vasixd,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
import { UnsafeByteStringOperations_instance32go50d8u0bll as UnsafeByteStringOperations_instance } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Source {}
class Sink {}
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.i22(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.i22.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
class Buffer {
  constructor() {
    this.r20_1 = null;
    this.s20_1 = null;
    this.t20_1 = 0n;
  }
  k2() {
    return this.t20_1;
  }
  y20() {
    return this;
  }
  z20() {
    return this.k2() === 0n;
  }
  a21(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.a2(toString(message));
    }
    if (this.k2() < byteCount) {
      throw EOFException.x20("Buffer doesn't contain required number of bytes (size: " + this.k2().toString() + ', required: ' + byteCount.toString() + ')');
    }
  }
  b21(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException.a2(toString(message));
    }
    return this.k2() >= byteCount;
  }
  c21() {
    var tmp0_elvis_lhs = this.r20_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 1n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.k2();
    if (segmentSize === 0) {
      this.k21();
      return this.c21();
    }
    var v = segment.l21();
    this.t20_1 = subtract(this.t20_1, 1n);
    if (segmentSize === 1) {
      this.k21();
    }
    return v;
  }
  m21() {
    var tmp0_elvis_lhs = this.r20_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 2n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.k2();
    if (segmentSize < 2) {
      this.a21(2n);
      if (segmentSize === 0) {
        this.k21();
        return this.m21();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.c21() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.c21() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.n21();
    this.t20_1 = subtract(this.t20_1, 2n);
    if (segmentSize === 2) {
      this.k21();
    }
    return v;
  }
  o21() {
    return Unit_instance;
  }
  p21(out, startIndex, endIndex) {
    checkBounds(this.k2(), startIndex, endIndex);
    if (startIndex === endIndex)
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = subtract(endIndex, startIndex);
    out.t20_1 = add(out.t20_1, remainingByteCount);
    var s = this.r20_1;
    while (currentOffset >= fromInt(ensureNotNull(s).f21_1 - s.e21_1 | 0)) {
      currentOffset = subtract(currentOffset, fromInt(s.f21_1 - s.e21_1 | 0));
      s = s.i21_1;
    }
    while (remainingByteCount > 0n) {
      var copy = ensureNotNull(s).q21();
      copy.e21_1 = copy.e21_1 + convertToInt(currentOffset) | 0;
      var tmp = copy;
      var tmp0 = copy.e21_1 + convertToInt(remainingByteCount) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.f21_1;
      tmp.f21_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.r20_1 == null) {
        out.r20_1 = copy;
        out.s20_1 = copy;
      } else if (false) {
        out.s20_1 = ensureNotNull(out.s20_1).r21(copy).s21();
        if (ensureNotNull(out.s20_1).j21_1 == null) {
          out.r20_1 = out.s20_1;
        }
      } else {
        out.s20_1 = ensureNotNull(out.s20_1).r21(copy);
      }
      remainingByteCount = subtract(remainingByteCount, fromInt(copy.f21_1 - copy.e21_1 | 0));
      currentOffset = 0n;
      s = s.i21_1;
    }
  }
  t21() {
    var result = this.k2();
    if (result === 0n)
      return 0n;
    var tail = ensureNotNull(this.s20_1);
    if (tail.f21_1 < 8192 && tail.h21_1) {
      result = subtract(result, fromInt(tail.f21_1 - tail.e21_1 | 0));
    }
    return result;
  }
  u21(position) {
    if (position < 0n || position >= this.k2()) {
      throw IndexOutOfBoundsException.a3('position (' + position.toString() + ') is not within the range [0..size(' + this.k2().toString() + '))');
    }
    if (position === 0n) {
      return ensureNotNull(this.r20_1).v21(0);
    }
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (this.r20_1 == null) {
        return ensureNotNull(null).v21(convertToInt(subtract(position, -1n)));
      }
      if (subtract(this.k2(), position) < position) {
        var s = this.s20_1;
        var offset = this.k2();
        $l$loop: while (!(s == null) && offset > position) {
          offset = subtract(offset, fromInt(s.f21_1 - s.e21_1 | 0));
          if (offset <= position)
            break $l$loop;
          s = s.j21_1;
        }
        var tmp0 = s;
        var offset_0 = offset;
        return ensureNotNull(tmp0).v21(convertToInt(subtract(position, offset_0)));
      } else {
        var s_0 = this.r20_1;
        var offset_1 = 0n;
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_0 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other = s_0.f21_1 - s_0.e21_1 | 0;
          var nextOffset = add(tmp0_0, fromInt(other));
          if (nextOffset > position)
            break $l$loop_0;
          s_0 = s_0.i21_1;
          offset_1 = nextOffset;
        }
        var tmp0_1 = s_0;
        var offset_2 = offset_1;
        return ensureNotNull(tmp0_1).v21(convertToInt(subtract(position, offset_2)));
      }
    }
  }
  j4() {
    return this.w21(this.k2());
  }
  w21(byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.a2(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var tmp0_elvis_lhs = this.r20_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException.x20('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp0 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.f21_1 - head.e21_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = fromInt(b);
      var tmp$ret$3 = tmp0 <= b_0 ? tmp0 : b_0;
      var toSkip = convertToInt(tmp$ret$3);
      this.t20_1 = subtract(this.t20_1, fromInt(toSkip));
      remainingByteCount = subtract(remainingByteCount, fromInt(toSkip));
      head.e21_1 = head.e21_1 + toSkip | 0;
      if (head.e21_1 === head.f21_1) {
        this.k21();
      }
    }
  }
  x21(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var tmp0_elvis_lhs = this.r20_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.k2();
    var toCopy = Math.min(tmp0, b);
    s.y21(sink, startIndex, startIndex + toCopy | 0);
    this.t20_1 = subtract(this.t20_1, fromInt(toCopy));
    if (isEmpty(s)) {
      this.k21();
    }
    return toCopy;
  }
  z21(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.a2(toString(message));
    }
    if (this.k2() === 0n)
      return -1n;
    var bytesWritten = byteCount > this.k2() ? this.k2() : byteCount;
    sink.a22(this, bytesWritten);
    return bytesWritten;
  }
  b22(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.a2(toString(message));
    }
    if (this.k2() < byteCount) {
      sink.a22(this, this.k2());
      throw EOFException.x20('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.k2().toString() + ' bytes were written.');
    }
    sink.a22(this, byteCount);
  }
  c22(sink) {
    var byteCount = this.k2();
    if (byteCount > 0n) {
      sink.a22(this, byteCount);
    }
    return byteCount;
  }
  d22() {
    return buffered(new PeekSource(this));
  }
  e22(minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException.a2(toString(message));
    }
    if (this.s20_1 == null) {
      var result = SegmentPool_instance.h22();
      this.r20_1 = result;
      this.s20_1 = result;
      return result;
    }
    var t = ensureNotNull(this.s20_1);
    if ((t.f21_1 + minimumCapacity | 0) > 8192 || !t.h21_1) {
      var newTail = t.r21(SegmentPool_instance.h22());
      this.s20_1 = newTail;
      return newTail;
    }
    return t;
  }
  i22(source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.e22(1);
      var tmp0 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.j22();
      var toCopy = Math.min(tmp0, b);
      tail.k22(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp0_0 = this.t20_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.t20_1 = add(tmp0_0, fromInt(other));
  }
  m22(source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.a2(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var read = source.z21(this, remainingByteCount);
      if (read === -1n) {
        throw EOFException.x20('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + subtract(byteCount, remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = subtract(remainingByteCount, read);
    }
  }
  a22(source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException.a2(toString(message));
    }
    checkOffsetAndCount(source.t20_1, 0n, byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      if (remainingByteCount < fromInt(ensureNotNull(source.r20_1).k2())) {
        var tail = this.s20_1;
        var tmp;
        if (!(tail == null) && tail.h21_1) {
          var tmp0 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.f21_1;
          var tmp0_0 = add(tmp0, fromInt(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.n22() ? 0 : tail.e21_1;
          tmp = subtract(tmp0_0, fromInt(other_0)) <= 8192n;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.r20_1).p22(tail, convertToInt(remainingByteCount));
          source.t20_1 = subtract(source.t20_1, remainingByteCount);
          this.t20_1 = add(this.t20_1, remainingByteCount);
          return Unit_instance;
        } else {
          source.r20_1 = ensureNotNull(source.r20_1).o22(convertToInt(remainingByteCount));
        }
      }
      var segmentToMove = ensureNotNull(source.r20_1);
      var movedByteCount = fromInt(segmentToMove.k2());
      source.r20_1 = segmentToMove.q22();
      if (source.r20_1 == null) {
        source.s20_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.r20_1 == null) {
        this.r20_1 = segmentToMove;
        this.s20_1 = segmentToMove;
      } else if (true) {
        this.s20_1 = ensureNotNull(this.s20_1).r21(segmentToMove).s21();
        if (ensureNotNull(this.s20_1).j21_1 == null) {
          this.r20_1 = this.s20_1;
        }
      } else {
        this.s20_1 = ensureNotNull(this.s20_1).r21(segmentToMove);
      }
      source.t20_1 = subtract(source.t20_1, movedByteCount);
      this.t20_1 = add(this.t20_1, movedByteCount);
      remainingByteCount = subtract(remainingByteCount, movedByteCount);
    }
  }
  r22(source) {
    var totalBytesRead = 0n;
    $l$loop: while (true) {
      var readCount = source.z21(this, 8192n);
      if (readCount === -1n)
        break $l$loop;
      totalBytesRead = add(totalBytesRead, readCount);
    }
    return totalBytesRead;
  }
  s22(byte) {
    this.e22(1).t22(byte);
    this.t20_1 = add(this.t20_1, 1n);
  }
  u22(short) {
    this.e22(2).v22(short);
    this.t20_1 = add(this.t20_1, 2n);
  }
  f7() {
    return Unit_instance;
  }
  toString() {
    if (this.k2() === 0n)
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.k2();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(maxPrintableBytes);
    var tmp$ret$0 = a <= b ? a : b;
    var len = convertToInt(tmp$ret$0);
    var builder = StringBuilder.kc(imul(len, 2) + (this.k2() > fromInt(maxPrintableBytes) ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.r20_1;
    while (!(curr == null)) {
      var tmp0 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.k2()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp0.w22(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$4 = b_0 >> 4;
        var tmp_0 = builder.k1(tmp[tmp$ret$4 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$5 = b_0 & 15;
        tmp_0.k1(tmp_1[tmp$ret$5]);
      }
      curr = curr.i21_1;
    }
    if (this.k2() > fromInt(maxPrintableBytes)) {
      builder.k1(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.k2().toString() + ' hex=' + builder.toString() + ')';
  }
  k21() {
    var oldHead = ensureNotNull(this.r20_1);
    var nextHead = oldHead.i21_1;
    this.r20_1 = nextHead;
    if (nextHead == null) {
      this.s20_1 = null;
    } else {
      nextHead.j21_1 = null;
    }
    oldHead.i21_1 = null;
    SegmentPool_instance.x22(oldHead);
  }
  y22() {
    var oldTail = ensureNotNull(this.s20_1);
    var newTail = oldTail.j21_1;
    this.s20_1 = newTail;
    if (newTail == null) {
      this.r20_1 = null;
    } else {
      newTail.i21_1 = null;
    }
    oldTail.j21_1 = null;
    SegmentPool_instance.x22(oldTail);
  }
}
class PeekSource {
  constructor(upstream) {
    this.z22_1 = upstream;
    this.a23_1 = this.z22_1.y20();
    this.b23_1 = this.a23_1.r20_1;
    var tmp = this;
    var tmp0_safe_receiver = this.a23_1.r20_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e21_1;
    tmp.c23_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    this.d23_1 = false;
    this.e23_1 = 0n;
  }
  z21(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.d23_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.a2(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.b23_1 == null || (this.b23_1 === this.a23_1.r20_1 && this.c23_1 === ensureNotNull(this.a23_1.r20_1).e21_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException.o(toString(message_1));
    }
    if (byteCount === 0n)
      return 0n;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.e23_1;
    var tmp$ret$7 = add(this_0, fromInt(1));
    if (!this.z22_1.b21(tmp$ret$7))
      return -1n;
    if (this.b23_1 == null && !(this.a23_1.r20_1 == null)) {
      this.b23_1 = this.a23_1.r20_1;
      this.c23_1 = ensureNotNull(this.a23_1.r20_1).e21_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this.a23_1.k2(), this.e23_1);
    var toCopy = byteCount <= b ? byteCount : b;
    this.a23_1.p21(sink, this.e23_1, add(this.e23_1, toCopy));
    this.e23_1 = add(this.e23_1, toCopy);
    return toCopy;
  }
  f7() {
    this.d23_1 = true;
  }
}
class RealSource {
  constructor(source) {
    this.f23_1 = source;
    this.g23_1 = false;
    this.h23_1 = new Buffer();
  }
  y20() {
    return this.h23_1;
  }
  z21(sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.g23_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.a2(toString(message_0));
    }
    if (this.h23_1.k2() === 0n) {
      var read = this.f23_1.z21(this.h23_1, 8192n);
      if (read === -1n)
        return -1n;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.h23_1.k2();
    var toRead = byteCount <= b ? byteCount : b;
    return this.h23_1.z21(sink, toRead);
  }
  z20() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.g23_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    return this.h23_1.z20() && this.f23_1.z21(this.h23_1, 8192n) === -1n;
  }
  a21(byteCount) {
    if (!this.b21(byteCount))
      throw EOFException.x20("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  }
  b21(byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.g23_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.a2(toString(message_0));
    }
    while (this.h23_1.k2() < byteCount) {
      if (this.f23_1.z21(this.h23_1, 8192n) === -1n)
        return false;
    }
    return true;
  }
  c21() {
    this.a21(1n);
    return this.h23_1.c21();
  }
  x21(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    if (this.h23_1.k2() === 0n) {
      var read = this.f23_1.z21(this.h23_1, 8192n);
      if (read === -1n)
        return -1;
    }
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.h23_1.k2();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(tmp0);
    var tmp$ret$1 = a <= b ? a : b;
    var toRead = convertToInt(tmp$ret$1);
    return this.h23_1.x21(sink, startIndex, startIndex + toRead | 0);
  }
  b22(sink, byteCount) {
    try {
      this.a21(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.a22(this.h23_1, this.h23_1.k2());
        throw e;
      } else {
        throw $p;
      }
    }
    this.h23_1.b22(sink, byteCount);
  }
  c22(sink) {
    var totalBytesWritten = 0n;
    while (!(this.f23_1.z21(this.h23_1, 8192n) === -1n)) {
      var emitByteCount = this.h23_1.t21();
      if (emitByteCount > 0n) {
        totalBytesWritten = add(totalBytesWritten, emitByteCount);
        sink.a22(this.h23_1, emitByteCount);
      }
    }
    if (this.h23_1.k2() > 0n) {
      totalBytesWritten = add(totalBytesWritten, this.h23_1.k2());
      sink.a22(this.h23_1, this.h23_1.k2());
    }
    return totalBytesWritten;
  }
  m21() {
    this.a21(2n);
    return this.h23_1.m21();
  }
  d22() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.g23_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    return buffered(new PeekSource(this));
  }
  f7() {
    if (this.g23_1)
      return Unit_instance;
    this.g23_1 = true;
    this.f23_1.f7();
    this.h23_1.j4();
  }
  toString() {
    return 'buffered(' + toString(this.f23_1) + ')';
  }
}
class Companion {
  constructor() {
    this.i23_1 = 8192;
    this.j23_1 = 1024;
  }
  k23() {
    return Segment.l23();
  }
}
class Segment {
  n22() {
    var tmp0_safe_receiver = this.g21_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m23();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  static l23() {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.d21_1 = new Int8Array(8192);
    $this.h21_1 = true;
    $this.g21_1 = null;
    return $this;
  }
  static n23(data, pos, limit, shareToken, owner) {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.d21_1 = data;
    $this.e21_1 = pos;
    $this.f21_1 = limit;
    $this.g21_1 = shareToken;
    $this.h21_1 = owner;
    return $this;
  }
  q21() {
    var tmp0_elvis_lhs = this.g21_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.o23();
      this.g21_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.e21_1;
    var tmp_1 = this.f21_1;
    // Inline function 'kotlin.also' call
    t.p23();
    return Segment.n23(this.d21_1, tmp_0, tmp_1, t, false);
  }
  q22() {
    var result = this.i21_1;
    if (!(this.j21_1 == null)) {
      ensureNotNull(this.j21_1).i21_1 = this.i21_1;
    }
    if (!(this.i21_1 == null)) {
      ensureNotNull(this.i21_1).j21_1 = this.j21_1;
    }
    this.i21_1 = null;
    this.j21_1 = null;
    return result;
  }
  r21(segment) {
    segment.j21_1 = this;
    segment.i21_1 = this.i21_1;
    if (!(this.i21_1 == null)) {
      ensureNotNull(this.i21_1).j21_1 = segment;
    }
    this.i21_1 = segment;
    return segment;
  }
  o22(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.f21_1 - this.e21_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException.a2(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.q21();
    } else {
      prefix = SegmentPool_instance.h22();
      var tmp0 = this.d21_1;
      var tmp2 = prefix.d21_1;
      var tmp5 = this.e21_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.e21_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
    }
    prefix.f21_1 = prefix.e21_1 + byteCount | 0;
    this.e21_1 = this.e21_1 + byteCount | 0;
    if (!(this.j21_1 == null)) {
      ensureNotNull(this.j21_1).r21(prefix);
    } else {
      prefix.i21_1 = this;
      this.j21_1 = prefix;
    }
    return prefix;
  }
  s21() {
    // Inline function 'kotlin.check' call
    if (!!(this.j21_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException.o(toString(message));
    }
    if (!ensureNotNull(this.j21_1).h21_1)
      return this;
    var byteCount = this.f21_1 - this.e21_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.j21_1).f21_1 | 0) + (ensureNotNull(this.j21_1).n22() ? 0 : ensureNotNull(this.j21_1).e21_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.j21_1;
    this.p22(ensureNotNull(predecessor), byteCount);
    var successor = this.q22();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException.o('Check failed.');
    }
    SegmentPool_instance.x22(this);
    return predecessor;
  }
  t22(byte) {
    var _unary__edvuaz = this.f21_1;
    this.f21_1 = _unary__edvuaz + 1 | 0;
    this.d21_1[_unary__edvuaz] = byte;
  }
  v22(short) {
    var data = this.d21_1;
    var limit = this.f21_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.f21_1 = limit;
  }
  l21() {
    var _unary__edvuaz = this.e21_1;
    this.e21_1 = _unary__edvuaz + 1 | 0;
    return this.d21_1[_unary__edvuaz];
  }
  n21() {
    var data = this.d21_1;
    var pos = this.e21_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.e21_1 = pos;
    return s;
  }
  p22(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.h21_1) {
      var message = 'only owner can write';
      throw IllegalStateException.o(toString(message));
    }
    if ((sink.f21_1 + byteCount | 0) > 8192) {
      if (sink.n22())
        throw IllegalArgumentException.le();
      if (((sink.f21_1 + byteCount | 0) - sink.e21_1 | 0) > 8192)
        throw IllegalArgumentException.le();
      var tmp0 = sink.d21_1;
      var tmp2 = sink.d21_1;
      var tmp5 = sink.e21_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.f21_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
      sink.f21_1 = sink.f21_1 - sink.e21_1 | 0;
      sink.e21_1 = 0;
    }
    var tmp0_0 = this.d21_1;
    var tmp2_0 = sink.d21_1;
    var tmp4 = sink.f21_1;
    var tmp6 = this.e21_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.e21_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp2_0, tmp4, tmp6, endIndex_0);
    sink.f21_1 = sink.f21_1 + byteCount | 0;
    this.e21_1 = this.e21_1 + byteCount | 0;
  }
  y21(dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.d21_1;
    var tmp6 = this.e21_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.e21_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
    this.e21_1 = this.e21_1 + len | 0;
  }
  k22(src, srcStartOffset, srcEndOffset) {
    var tmp2 = this.d21_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.f21_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
    this.f21_1 = this.f21_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  }
  k2() {
    return this.f21_1 - this.e21_1 | 0;
  }
  j22() {
    return this.d21_1.length - this.f21_1 | 0;
  }
  q23(readOnly) {
    return this.d21_1;
  }
  v21(index) {
    return this.d21_1[this.e21_1 + index | 0];
  }
  r23(index, value) {
    this.d21_1[this.f21_1 + index | 0] = value;
  }
  s23(index, b0, b1) {
    var d = this.d21_1;
    var l = this.f21_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  }
  t23(index, b0, b1, b2) {
    var d = this.d21_1;
    var l = this.f21_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  }
  u23(index, b0, b1, b2, b3) {
    var d = this.d21_1;
    var l = this.f21_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  }
}
class SegmentCopyTracker {}
class AlwaysSharedCopyTracker extends SegmentCopyTracker {
  constructor() {
    AlwaysSharedCopyTracker_instance = null;
    super();
    AlwaysSharedCopyTracker_instance = this;
  }
  m23() {
    return true;
  }
  p23() {
    return Unit_instance;
  }
}
class UnsafeBufferOperations {}
class SegmentReadContextImpl$1 {
  w22(segment, offset) {
    return segment.v21(offset);
  }
}
class SegmentWriteContextImpl$1 {
  y23(segment, offset, value) {
    segment.r23(offset, value);
  }
  x23(segment, offset, b0, b1) {
    segment.s23(offset, b0, b1);
  }
  w23(segment, offset, b0, b1, b2) {
    segment.t23(offset, b0, b1, b2);
  }
  v23(segment, offset, b0, b1, b2, b3) {
    segment.u23(offset, b0, b1, b2, b3);
  }
}
class BufferIterationContextImpl$1 {
  w22(segment, offset) {
    return get_SegmentReadContextImpl().w22(segment, offset);
  }
}
class IOException extends Exception {
  static b24() {
    var $this = this.oe();
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static c24(message) {
    var $this = this.pe(message);
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static d24(message, cause) {
    var $this = this.qe(message, cause);
    init_kotlinx_io_IOException($this);
    return $this;
  }
}
class EOFException extends IOException {
  static e24() {
    var $this = this.b24();
    init_kotlinx_io_EOFException($this);
    return $this;
  }
  static x20(message) {
    var $this = this.c24(message);
    init_kotlinx_io_EOFException($this);
    return $this;
  }
}
class SegmentPool {
  constructor() {
    this.f22_1 = 0;
    this.g22_1 = 0;
  }
  h22() {
    return Companion_instance.k23();
  }
  x22(segment) {
  }
  o23() {
    return AlwaysSharedCopyTracker_getInstance();
  }
}
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex < 0n || endIndex > size) {
    throw IndexOutOfBoundsException.a3('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex > endIndex) {
    throw IllegalArgumentException.a2('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset < 0n || offset > size || subtract(size, offset) < byteCount || byteCount < 0n) {
    throw IllegalArgumentException.a2('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function throwEof($this, byteCount) {
  throw EOFException.x20("Buffer doesn't contain required number of bytes (size: " + $this.k2().toString() + ', required: ' + byteCount.toString() + ')');
}
function indexOf(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0n : startIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.k2() : endIndex;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = _this__u8e3s4.k2();
  var endOffset = endIndex <= b ? endIndex : b;
  checkBounds(_this__u8e3s4.k2(), startIndex, endOffset);
  if (startIndex === endOffset)
    return -1n;
  $l$block_1: {
    // Inline function 'kotlinx.io.seek' call
    if (_this__u8e3s4.r20_1 == null) {
      if (-1n === -1n) {
        return -1n;
      }
      var segment = null;
      var offset = -1n;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment);
        var tmp = segment;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = convertToInt(subtract(startIndex, offset));
        var tmp_0 = Math.max(a, 0);
        var tmp0 = segment.k2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = convertToInt(subtract(endOffset, offset));
        var tmp$ret$5 = Math.min(tmp0, b_0);
        var idx = indexOf_0(tmp, byte, tmp_0, tmp$ret$5);
        if (!(idx === -1)) {
          return add(offset, fromInt(idx));
        }
        var tmp0_0 = offset;
        // Inline function 'kotlin.Long.plus' call
        var other = segment.k2();
        offset = add(tmp0_0, fromInt(other));
        segment = segment.i21_1;
      }
       while (!(segment == null) && offset < endOffset);
      return -1n;
    }
    if (subtract(_this__u8e3s4.k2(), startIndex) < startIndex) {
      var s = _this__u8e3s4.s20_1;
      var offset_0 = _this__u8e3s4.k2();
      $l$loop: while (!(s == null) && offset_0 > startIndex) {
        offset_0 = subtract(offset_0, fromInt(s.f21_1 - s.e21_1 | 0));
        if (offset_0 <= startIndex)
          break $l$loop;
        s = s.j21_1;
      }
      var tmp0_1 = s;
      var o = offset_0;
      if (o === -1n) {
        return -1n;
      }
      var segment_0 = tmp0_1;
      var offset_1 = o;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset_1)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment_0);
        var tmp_1 = segment_0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_0 = convertToInt(subtract(startIndex, offset_1));
        var tmp_2 = Math.max(a_0, 0);
        var tmp0_2 = segment_0.k2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_1 = convertToInt(subtract(endOffset, offset_1));
        var tmp$ret$10 = Math.min(tmp0_2, b_1);
        var idx_0 = indexOf_0(tmp_1, byte, tmp_2, tmp$ret$10);
        if (!(idx_0 === -1)) {
          return add(offset_1, fromInt(idx_0));
        }
        var tmp0_3 = offset_1;
        // Inline function 'kotlin.Long.plus' call
        var other_0 = segment_0.k2();
        offset_1 = add(tmp0_3, fromInt(other_0));
        segment_0 = segment_0.i21_1;
      }
       while (!(segment_0 == null) && offset_1 < endOffset);
      return -1n;
    } else {
      var s_0 = _this__u8e3s4.r20_1;
      var offset_2 = 0n;
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0_4 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other_1 = s_0.f21_1 - s_0.e21_1 | 0;
        var nextOffset = add(tmp0_4, fromInt(other_1));
        if (nextOffset > startIndex)
          break $l$loop_0;
        s_0 = s_0.i21_1;
        offset_2 = nextOffset;
      }
      var tmp0_5 = s_0;
      var o_0 = offset_2;
      if (o_0 === -1n) {
        return -1n;
      }
      var segment_1 = tmp0_5;
      var offset_3 = o_0;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset_3)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment_1);
        var tmp_3 = segment_1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_1 = convertToInt(subtract(startIndex, offset_3));
        var tmp_4 = Math.max(a_1, 0);
        var tmp0_6 = segment_1.k2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_2 = convertToInt(subtract(endOffset, offset_3));
        var tmp$ret$16 = Math.min(tmp0_6, b_2);
        var idx_1 = indexOf_0(tmp_3, byte, tmp_4, tmp$ret$16);
        if (!(idx_1 === -1)) {
          return add(offset_3, fromInt(idx_1));
        }
        var tmp0_7 = offset_3;
        // Inline function 'kotlin.Long.plus' call
        var other_2 = segment_1.k2();
        offset_3 = add(tmp0_7, fromInt(other_2));
        segment_1 = segment_1.i21_1;
      }
       while (!(segment_1 == null) && offset_3 < endOffset);
      return -1n;
    }
  }
}
function readByteString(_this__u8e3s4, byteCount) {
  return UnsafeByteStringOperations_instance.q20(readByteArray_0(_this__u8e3s4, byteCount));
}
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function init_kotlinx_io_Segment(_this__u8e3s4) {
  _this__u8e3s4.e21_1 = 0;
  _this__u8e3s4.f21_1 = 0;
  _this__u8e3s4.g21_1 = null;
  _this__u8e3s4.h21_1 = false;
  _this__u8e3s4.i21_1 = null;
  _this__u8e3s4.j21_1 = null;
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.k2() === 0;
}
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance === VOID)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function indexOf_0(_this__u8e3s4, byte, startOffset, endOffset) {
  // Inline function 'kotlin.require' call
  if (!(0 <= startOffset ? startOffset < _this__u8e3s4.k2() : false)) {
    var message = '' + startOffset;
    throw IllegalArgumentException.a2(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(startOffset <= endOffset ? endOffset <= _this__u8e3s4.k2() : false)) {
    var message_0 = '' + endOffset;
    throw IllegalArgumentException.a2(toString(message_0));
  }
  var p = _this__u8e3s4.e21_1;
  var data = _this__u8e3s4.q23(true);
  var inductionVariable = startOffset;
  if (inductionVariable < endOffset)
    do {
      var idx = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (data[p + idx | 0] === byte) {
        return idx;
      }
    }
     while (inductionVariable < endOffset);
  return -1;
}
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = fromInt(byteCount);
  // Inline function 'kotlin.require' call
  if (!(byteCount_0 >= 0n)) {
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException.a2(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function indexOf_1(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0n : startIndex;
  endIndex = endIndex === VOID ? 9223372036854775807n : endIndex;
  // Inline function 'kotlin.require' call
  if (!(0n <= startIndex ? startIndex <= endIndex : false)) {
    var tmp;
    if (endIndex < 0n) {
      tmp = 'startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') should be non negative';
    } else {
      tmp = 'startIndex (' + startIndex.toString() + ') is not within the range [0..endIndex(' + endIndex.toString() + '))';
    }
    var message = tmp;
    throw IllegalArgumentException.a2(toString(message));
  }
  if (startIndex === endIndex)
    return -1n;
  var offset = startIndex;
  $l$loop: while (true) {
    var tmp_0;
    if (offset < endIndex) {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = offset;
      var tmp$ret$2 = add(this_0, fromInt(1));
      tmp_0 = _this__u8e3s4.b21(tmp$ret$2);
    } else {
      tmp_0 = false;
    }
    if (!tmp_0) {
      break $l$loop;
    }
    var tmp_1 = _this__u8e3s4.y20();
    var tmp_2 = offset;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = _this__u8e3s4.y20().k2();
    var tmp$ret$3 = endIndex <= b ? endIndex : b;
    var idx = indexOf(tmp_1, byte, tmp_2, tmp$ret$3);
    if (!(idx === -1n)) {
      return idx;
    }
    offset = _this__u8e3s4.y20().k2();
  }
  return -1n;
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = 2147483647n;
    while (_this__u8e3s4.y20().k2() < 2147483647n && _this__u8e3s4.b21(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      var this_0 = fetchSize;
      fetchSize = multiply(this_0, fromInt(2));
    }
    // Inline function 'kotlin.check' call
    if (!(_this__u8e3s4.y20().k2() < 2147483647n)) {
      var message = "Can't create an array of size " + _this__u8e3s4.y20().k2().toString();
      throw IllegalStateException.o(toString(message));
    }
    arraySize = convertToInt(_this__u8e3s4.y20().k2());
  } else {
    _this__u8e3s4.a21(fromInt(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.y20(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.x21(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException.x20('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readString(_this__u8e3s4, byteCount) {
  _this__u8e3s4.a21(byteCount);
  return commonReadUtf8(_this__u8e3s4.y20(), byteCount);
}
function readString_0(_this__u8e3s4) {
  _this__u8e3s4.b21(9223372036854775807n);
  return commonReadUtf8(_this__u8e3s4.y20(), _this__u8e3s4.y20().k2());
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.y20();
  var i = startIndex;
  while (i < endIndex) {
    var p0 = i;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.e22(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.j22() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.y23(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          var p0_0 = i;
          // Inline function 'kotlin.code' call
          var this_2 = charCodeAt(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.y23(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.f21_1 = tail.f21_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_3 = this_0.t20_1;
          tmp.t20_1 = add(this_3, fromInt(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.j22() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.j22();
          throw IllegalStateException.o(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.f21_1 = tail.f21_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_4 = this_0.t20_1;
          tmp_0.t20_1 = add(this_4, fromInt(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.y22();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.e22(2);
        get_SegmentWriteContextImpl().x23(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.f21_1 = tail_0.f21_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_5 = this_0.t20_1;
          tmp_1.t20_1 = add(this_5, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.j22() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.j22();
          throw IllegalStateException.o(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.f21_1 = tail_0.f21_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_6 = this_0.t20_1;
          tmp_2.t20_1 = add(this_6, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.y22();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.e22(3);
        get_SegmentWriteContextImpl().w23(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.f21_1 = tail_1.f21_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_7 = this_0.t20_1;
          tmp_3.t20_1 = add(this_7, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.j22() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.j22();
          throw IllegalStateException.o(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.f21_1 = tail_1.f21_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_8 = this_0.t20_1;
          tmp_4.t20_1 = add(this_8, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.y22();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        var p0_1 = i + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_9 = charCodeAt(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_9);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_10 = _Char___init__impl__6a9atx(63);
        var tmp$ret$29 = Char__toInt_impl_vasixd(this_10);
        this_0.s22(toByte(tmp$ret$29));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.e22(4);
          get_SegmentWriteContextImpl().v23(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.f21_1 = tail_2.f21_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_11 = this_0.t20_1;
            tmp_6.t20_1 = add(this_11, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.j22() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.j22();
            throw IllegalStateException.o(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.f21_1 = tail_2.f21_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_12 = this_0.t20_1;
            tmp_7.t20_1 = add(this_12, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.y22();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.o21();
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount === 0n)
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.r20_1;
  while (!(curr == null)) {
    get_SegmentReadContextImpl();
    if (fromInt(curr.k2()) >= byteCount) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      var tmp0 = curr.q23(true);
      var tmp2 = curr.e21_1;
      var tmp0_0 = curr.f21_1;
      // Inline function 'kotlin.math.min' call
      var b = tmp2 + convertToInt(byteCount) | 0;
      var tmp$ret$4 = Math.min(tmp0_0, b);
      result = commonToUtf8String(tmp0, tmp2, tmp$ret$4);
      _this__u8e3s4.w21(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, convertToInt(byteCount)));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException.o(toString(message));
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException.a3('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      var c = numberToChar(b0);
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = c;
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = c_0;
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp2 = index;
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp2 + 1 | 0)) {
            var c_1 = numberToChar(65533);
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = c_1;
            tmp$ret$4 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[tmp2];
          var b1 = _this__u8e3s4[tmp2 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            var c_2 = numberToChar(65533);
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = c_2;
            tmp$ret$4 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            var c_3 = numberToChar(65533);
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = c_3;
          } else {
            var c_4 = numberToChar(codePoint);
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = c_4;
          }
          tmp$ret$4 = 2;
        }
        index = tmp + tmp$ret$4 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp2_0 = index;
          var tmp$ret$16;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            if (endIndex <= (tmp2_0 + 2 | 0)) {
              var c_5 = numberToChar(65533);
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = c_5;
              var tmp_1;
              if (endIndex <= (tmp2_0 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$16 = 1;
                break $l$block_4;
              } else {
                tmp$ret$16 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[tmp2_0];
            var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              var c_6 = numberToChar(65533);
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = c_6;
              tmp$ret$16 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              var c_7 = numberToChar(65533);
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = c_7;
              tmp$ret$16 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              var c_8 = numberToChar(65533);
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = c_8;
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              var c_9 = numberToChar(65533);
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = c_9;
            } else {
              var c_10 = numberToChar(codePoint_0);
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = c_10;
            }
            tmp$ret$16 = 3;
          }
          index = tmp_0 + tmp$ret$16 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp2_1 = index;
            var tmp$ret$36;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              if (endIndex <= (tmp2_1 + 3 | 0)) {
                if (!(65533 === 65533)) {
                  var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = c_11;
                  var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = c_12;
                } else {
                  var c_13 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = c_13;
                }
                var tmp_3;
                if (endIndex <= (tmp2_1 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$36 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (tmp2_1 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$36 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$36 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[tmp2_1];
              var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = c_14;
                  var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = c_15;
                } else {
                  var c_16 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = c_16;
                }
                tmp$ret$36 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = c_17;
                  var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = c_18;
                } else {
                  var c_19 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = c_19;
                }
                tmp$ret$36 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = c_20;
                  var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = c_21;
                } else {
                  var c_22 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = c_22;
                }
                tmp$ret$36 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                if (!(65533 === 65533)) {
                  var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = c_23;
                  var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = c_24;
                } else {
                  var c_25 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = c_25;
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                if (!(65533 === 65533)) {
                  var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = c_26;
                  var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = c_27;
                } else {
                  var c_28 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = c_28;
                }
              } else if (codePoint_1 < 65536) {
                if (!(65533 === 65533)) {
                  var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = c_29;
                  var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = c_30;
                } else {
                  var c_31 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = c_31;
                }
              } else {
                if (!(codePoint_1 === 65533)) {
                  var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = c_32;
                  var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = c_33;
                } else {
                  var c_34 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = c_34;
                }
              }
              tmp$ret$36 = 4;
            }
            index = tmp_2 + tmp$ret$36 | 0;
          } else {
            var c_35 = _Char___init__impl__6a9atx(65533);
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = c_35;
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
var BufferIterationContextImpl;
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function init_kotlinx_io_IOException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.a24_1);
}
function init_kotlinx_io_EOFException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.w20_1);
}
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
//region block: post-declaration
initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
protoOf(Buffer).l22 = write$default;
initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker');
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException.b24);
initMetadataForClass(EOFException, 'EOFException', EOFException.e24);
initMetadataForObject(SegmentPool, 'SegmentPool');
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
//endregion
//region block: exports
export {
  Buffer as Buffergs925ekssbch,
  EOFException as EOFExceptionh831u25jcq9n,
  IOException as IOException1wyutdmfe71nu,
  Source as Source1shr0ps16u4p4,
  indexOf_1 as indexOf29nspdgx2e3ap,
  readByteArray_0 as readByteArray1fhzfwi2j014k,
  readByteArray as readByteArray1ri21h2rciakw,
  readByteString as readByteString2hnsbql6t4ads,
  readString_0 as readString2nvggcfaijfhd,
  readString as readString3v6duspiz33tv,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
