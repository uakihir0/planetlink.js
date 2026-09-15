import {
  ArrayList3it5z8td81qkl as ArrayList,
  addAll21mdhg523wnoa as addAll,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  to2cs3ny02qtbcb as to,
  listOf1jh22dvmctj1r as listOf,
  toList3jhuyej2anx2q as toList,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
  charCodeAt1yspne1d8erbm as charCodeAt,
  Char__toInt_impl_vasixd1ka89vowck9tn as Char__toInt_impl_vasixd,
  toShort36kaw0zjdq3ex as toShort,
  _UShort___init__impl__jigrne1zu56ujvuii2n as _UShort___init__impl__jigrne,
  UShort26xnqty60t7le as UShort,
  substringiqarkczpya5m as substring,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  isLowSurrogateujxcv7hjn4ma as isLowSurrogate,
  isHighSurrogate11jfjw70ar0zf as isHighSurrogate,
  createThis2j2avj17cvnv2 as createThis,
  StringBuildermazzzhj6kkai as StringBuilder,
  Enum3alwj03lh1n41 as Enum,
  setOf1u3mizs95ngxo as setOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  setOf45ia9pnfhe90 as setOf_0,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toInt5qdj874w69jh as toInt,
  NumberFormatException3bgsm2s9o4t55 as NumberFormatException,
  numberToChar93r9buh19yek as numberToChar,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  toString1h6jjoch8cjt8 as toString_0,
  charArray2ujmm1qusno00 as charArray,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class StringTranslator {
  static mcp() {
    return createThis(this);
  }
  pcp(input) {
    var stringBuilder = StringBuilder.nc(imul(input.length, 2));
    translate(this, input, stringBuilder);
    return stringBuilder.toString();
  }
}
class AggregateTranslator extends StringTranslator {
  constructor() {
    return new.target.lcp();
  }
  static lcp() {
    var $this = this.mcp();
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.kcp_1 = ArrayList.j2();
    return $this;
  }
  static ncp(translators) {
    var $this = this.lcp();
    addAll($this.kcp_1, translators);
    return $this;
  }
  ocp(input, offset, stringBuilder) {
    var _iterator__ex2g4s = this.kcp_1.l1();
    while (_iterator__ex2g4s.m1()) {
      var translator = _iterator__ex2g4s.n1();
      var consumed = translator.ocp(input, offset, stringBuilder);
      if (!(consumed === 0)) {
        return consumed;
      }
    }
    return 0;
  }
}
class EntityMaps {
  constructor() {
    EntityMaps_instance = this;
    this.qcp_1 = listOf([to('<', '&gt;'), to('>', '&lt;'), to('"', '&quot;'), to("'", '&apos;'), to('&', '&amp;')]);
    this.rcp_1 = invert(this, this.qcp_1);
    this.scp_1 = listOf([to("'", '&apos;'), to('\xA0', '&nbsp'), to('\xA0', '&nbsp;'), to('\xA1', '&iexcl'), to('\xA1', '&iexcl;'), to('\xA2', '&cent'), to('\xA2', '&cent;'), to('\xA3', '&pound'), to('\xA3', '&pound;'), to('\xA4', '&curren'), to('\xA4', '&curren;'), to('\xA5', '&yen'), to('\xA5', '&yen;'), to('\xA6', '&brvbar'), to('\xA6', '&brvbar;'), to('\xA7', '&sect'), to('\xA7', '&sect;'), to('\xA8', '&uml'), to('\xA8', '&uml;'), to('\xA9', '&copy'), to('\xA9', '&copy;'), to('\xAA', '&ordf'), to('\xAA', '&ordf;'), to('\xAB', '&laquo'), to('\xAB', '&laquo;'), to('\xAC', '&not'), to('\xAC', '&not;'), to('\xAD', '&shy'), to('\xAD', '&shy;'), to('\xAE', '&reg'), to('\xAE', '&reg;'), to('\xAF', '&macr'), to('\xAF', '&macr;'), to('\xB0', '&deg'), to('\xB0', '&deg;'), to('\xB1', '&plusmn'), to('\xB1', '&plusmn;'), to('\xB2', '&sup2'), to('\xB2', '&sup2;'), to('\xB3', '&sup3'), to('\xB3', '&sup3;'), to('\xB4', '&acute'), to('\xB4', '&acute;'), to('\xB5', '&micro'), to('\xB5', '&micro;'), to('\xB6', '&para'), to('\xB6', '&para;'), to('\xB7', '&middot'), to('\xB7', '&middot;'), to('\xB8', '&cedil'), to('\xB8', '&cedil;'), to('\xB9', '&sup1'), to('\xB9', '&sup1;'), to('\xBA', '&ordm'), to('\xBA', '&ordm;'), to('\xBB', '&raquo'), to('\xBB', '&raquo;'), to('\xBC', '&frac14'), to('\xBC', '&frac14;'), to('\xBD', '&frac12'), to('\xBD', '&frac12;'), to('\xBE', '&frac34'), to('\xBE', '&frac34;'), to('\xBF', '&iquest'), to('\xBF', '&iquest;'), to('\xC0', '&Agrave'), to('\xC0', '&Agrave;'), to('\xC1', '&Aacute'), to('\xC1', '&Aacute;'), to('\xC2', '&Acirc'), to('\xC2', '&Acirc;'), to('\xC3', '&Atilde'), to('\xC3', '&Atilde;'), to('\xC4', '&Auml'), to('\xC4', '&Auml;'), to('\xC5', '&Aring'), to('\xC5', '&Aring;'), to('\xC6', '&AElig'), to('\xC6', '&AElig;'), to('\xC7', '&Ccedil'), to('\xC7', '&Ccedil;'), to('\xC8', '&Egrave'), to('\xC8', '&Egrave;'), to('\xC9', '&Eacute'), to('\xC9', '&Eacute;'), to('\xCA', '&Ecirc'), to('\xCA', '&Ecirc;'), to('\xCB', '&Euml'), to('\xCB', '&Euml;'), to('\xCC', '&Igrave'), to('\xCC', '&Igrave;'), to('\xCD', '&Iacute'), to('\xCD', '&Iacute;'), to('\xCE', '&Icirc'), to('\xCE', '&Icirc;'), to('\xCF', '&Iuml'), to('\xCF', '&Iuml;'), to('\xD0', '&ETH'), to('\xD0', '&ETH;'), to('\xD1', '&Ntilde'), to('\xD1', '&Ntilde;'), to('\xD2', '&Ograve'), to('\xD2', '&Ograve;'), to('\xD3', '&Oacute'), to('\xD3', '&Oacute;'), to('\xD4', '&Ocirc'), to('\xD4', '&Ocirc;'), to('\xD5', '&Otilde'), to('\xD5', '&Otilde;'), to('\xD6', '&Ouml'), to('\xD6', '&Ouml;'), to('\xD7', '&times'), to('\xD7', '&times;'), to('\xD8', '&Oslash'), to('\xD8', '&Oslash;'), to('\xD9', '&Ugrave'), to('\xD9', '&Ugrave;'), to('\xDA', '&Uacute'), to('\xDA', '&Uacute;'), to('\xDB', '&Ucirc'), to('\xDB', '&Ucirc;'), to('\xDC', '&Uuml'), to('\xDC', '&Uuml;'), to('\xDD', '&Yacute'), to('\xDD', '&Yacute;'), to('\xDE', '&THORN'), to('\xDE', '&THORN;'), to('\xDF', '&szlig'), to('\xDF', '&szlig;'), to('\xE0', '&agrave'), to('\xE0', '&agrave;'), to('\xE1', '&aacute'), to('\xE1', '&aacute;'), to('\xE2', '&acirc'), to('\xE2', '&acirc;'), to('\xE3', '&atilde'), to('\xE3', '&atilde;'), to('\xE4', '&auml'), to('\xE4', '&auml;'), to('\xE5', '&aring'), to('\xE5', '&aring;'), to('\xE6', '&aelig'), to('\xE6', '&aelig;'), to('\xE7', '&ccedil'), to('\xE7', '&ccedil;'), to('\xE8', '&egrave'), to('\xE8', '&egrave;'), to('\xE9', '&eacute'), to('\xE9', '&eacute;'), to('\xEA', '&ecirc'), to('\xEA', '&ecirc;'), to('\xEB', '&euml'), to('\xEB', '&euml;'), to('\xEC', '&igrave'), to('\xEC', '&igrave;'), to('\xED', '&iacute'), to('\xED', '&iacute;'), to('\xEE', '&icirc'), to('\xEE', '&icirc;'), to('\xEF', '&iuml'), to('\xEF', '&iuml;'), to('\xF0', '&eth'), to('\xF0', '&eth;'), to('\xF1', '&ntilde'), to('\xF1', '&ntilde;'), to('\xF2', '&ograve'), to('\xF2', '&ograve;'), to('\xF3', '&oacute'), to('\xF3', '&oacute;'), to('\xF4', '&ocirc'), to('\xF4', '&ocirc;'), to('\xF5', '&otilde'), to('\xF5', '&otilde;'), to('\xF6', '&ouml'), to('\xF6', '&ouml;'), to('\xF7', '&divide'), to('\xF7', '&divide;'), to('\xF8', '&oslash'), to('\xF8', '&oslash;'), to('\xF9', '&ugrave'), to('\xF9', '&ugrave;'), to('\xFA', '&uacute'), to('\xFA', '&uacute;'), to('\xFB', '&ucirc'), to('\xFB', '&ucirc;'), to('\xFC', '&uuml'), to('\xFC', '&uuml;'), to('\xFD', '&yacute'), to('\xFD', '&yacute;'), to('\xFE', '&thorn'), to('\xFE', '&thorn;'), to('\xFF', '&yuml'), to('\xFF', '&yuml;'), to('"', '&quot'), to('"', '&quot;'), to('&', '&amp'), to('&', '&amp;'), to('<', '&lt'), to('<', '&lt;'), to('>', '&gt'), to('>', '&gt;'), to('\u0152', '&OElig;'), to('\u0153', '&oelig;'), to('\u0160', '&Scaron;'), to('\u0161', '&scaron;'), to('\u0178', '&Yuml;'), to('\u02C6', '&circ;'), to('\u02DC', '&tilde;'), to('\u2002', '&ensp;'), to('\u2003', '&emsp;'), to('\u2009', '&thinsp;'), to('\u200C', '&zwnj;'), to('\u200D', '&zwj;'), to('\u200E', '&lrm;'), to('\u200F', '&rlm;'), to('\u2013', '&ndash;'), to('\u2014', '&mdash;'), to('\u2018', '&lsquo;'), to('\u2019', '&rsquo;'), to('\u201A', '&sbquo;'), to('\u201C', '&ldquo;'), to('\u201D', '&rdquo;'), to('\u201E', '&bdquo;'), to('\u2020', '&dagger;'), to('\u2021', '&Dagger;'), to('\u2030', '&permil;'), to('\u2039', '&lsaquo;'), to('\u203A', '&rsaquo;'), to('\u20AC', '&euro;'), to('\u0192', '&fnof;'), to('\u0391', '&Alpha;'), to('\u0392', '&Beta;'), to('\u0393', '&Gamma;'), to('\u0394', '&Delta;'), to('\u0395', '&Epsilon;'), to('\u0396', '&Zeta;'), to('\u0397', '&Eta;'), to('\u0398', '&Theta;'), to('\u0399', '&Iota;'), to('\u039A', '&Kappa;'), to('\u039B', '&Lambda;'), to('\u039C', '&Mu;'), to('\u039D', '&Nu;'), to('\u039E', '&Xi;'), to('\u039F', '&Omicron;'), to('\u03A0', '&Pi;'), to('\u03A1', '&Rho;'), to('\u03A3', '&Sigma;'), to('\u03A4', '&Tau;'), to('\u03A5', '&Upsilon;'), to('\u03A6', '&Phi;'), to('\u03A7', '&Chi;'), to('\u03A8', '&Psi;'), to('\u03A9', '&Omega;'), to('\u03B1', '&alpha;'), to('\u03B2', '&beta;'), to('\u03B3', '&gamma;'), to('\u03B4', '&delta;'), to('\u03B5', '&epsilon;'), to('\u03B6', '&zeta;'), to('\u03B7', '&eta;'), to('\u03B8', '&theta;'), to('\u03B9', '&iota;'), to('\u03BA', '&kappa;'), to('\u03BB', '&lambda;'), to('\u03BC', '&mu;'), to('\u03BD', '&nu;'), to('\u03BE', '&xi;'), to('\u03BF', '&omicron;'), to('\u03C0', '&pi;'), to('\u03C1', '&rho;'), to('\u03C2', '&sigmaf;'), to('\u03C3', '&sigma;'), to('\u03C4', '&tau;'), to('\u03C5', '&upsilon;'), to('\u03C6', '&phi;'), to('\u03C7', '&chi;'), to('\u03C8', '&psi;'), to('\u03C9', '&omega;'), to('\u03D1', '&thetasym;'), to('\u03D2', '&upsih;'), to('\u03D6', '&piv;'), to('\u2022', '&bull;'), to('\u2026', '&hellip;'), to('\u2032', '&prime;'), to('\u2033', '&Prime;'), to('\u203E', '&oline;'), to('\u2044', '&frasl;'), to('\u2118', '&weierp;'), to('\u2111', '&image;'), to('\u211C', '&real;'), to('\u2122', '&trade;'), to('\u2135', '&alefsym;'), to('\u2190', '&larr;'), to('\u2191', '&uarr;'), to('\u2192', '&rarr;'), to('\u2193', '&darr;'), to('\u2194', '&harr;'), to('\u21B5', '&crarr;'), to('\u21D0', '&lArr;'), to('\u21D1', '&uArr;'), to('\u21D2', '&rArr;'), to('\u21D3', '&dArr;'), to('\u21D4', '&hArr;'), to('\u2200', '&forall;'), to('\u2202', '&part;'), to('\u2203', '&exist;'), to('\u2205', '&empty;'), to('\u2207', '&nabla;'), to('\u2208', '&isin;'), to('\u2209', '&notin;'), to('\u220B', '&ni;'), to('\u220F', '&prod;'), to('\u2211', '&sum;'), to('\u2212', '&minus;'), to('\u2217', '&lowast;'), to('\u221A', '&radic;'), to('\u221D', '&prop;'), to('\u221E', '&infin;'), to('\u2220', '&ang;'), to('\u2227', '&and;'), to('\u2228', '&or;'), to('\u2229', '&cap;'), to('\u222A', '&cup;'), to('\u222B', '&int;'), to('\u2234', '&there4;'), to('\u223C', '&sim;'), to('\u2245', '&cong;'), to('\u2248', '&asymp;'), to('\u2260', '&ne;'), to('\u2261', '&equiv;'), to('\u2264', '&le;'), to('\u2265', '&ge;'), to('\u2282', '&sub;'), to('\u2283', '&sup;'), to('\u2284', '&nsub;'), to('\u2286', '&sube;'), to('\u2287', '&supe;'), to('\u2295', '&oplus;'), to('\u2297', '&otimes;'), to('\u22A5', '&perp;'), to('\u22C5', '&sdot;'), to('\u2308', '&lceil;'), to('\u2309', '&rceil;'), to('\u230A', '&lfloor;'), to('\u230B', '&rfloor;'), to('\u2329', '&lang;'), to('\u232A', '&rang;'), to('\u25CA', '&loz;'), to('\u2660', '&spades;'), to('\u2663', '&clubs;'), to('\u2665', '&hearts;'), to('\u2666', '&diams;')]);
    this.tcp_1 = invert(this, this.scp_1);
    var tmp = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var encodeMap = ArrayList.j2();
    encodeMap.i2(to('\xC6', '&AElig'));
    encodeMap.i2(to('\xC6', '&AElig;'));
    encodeMap.i2(to('&', '&AMP'));
    encodeMap.i2(to('&', '&AMP;'));
    encodeMap.i2(to('\xC1', '&Aacute'));
    encodeMap.i2(to('\xC1', '&Aacute;'));
    encodeMap.i2(to('\u0102', '&Abreve;'));
    encodeMap.i2(to('\xC2', '&Acirc'));
    encodeMap.i2(to('\xC2', '&Acirc;'));
    encodeMap.i2(to('\u0410', '&Acy;'));
    encodeMap.i2(to('\uD835\uDD04', '&Afr;'));
    encodeMap.i2(to('\xC0', '&Agrave'));
    encodeMap.i2(to('\xC0', '&Agrave;'));
    encodeMap.i2(to('\u0391', '&Alpha;'));
    encodeMap.i2(to('\u0100', '&Amacr;'));
    encodeMap.i2(to('\u2A53', '&And;'));
    encodeMap.i2(to('\u0104', '&Aogon;'));
    encodeMap.i2(to('\uD835\uDD38', '&Aopf;'));
    encodeMap.i2(to('\u2061', '&ApplyFunction;'));
    encodeMap.i2(to('\xC5', '&Aring'));
    encodeMap.i2(to('\xC5', '&Aring;'));
    encodeMap.i2(to('\uD835\uDC9C', '&Ascr;'));
    encodeMap.i2(to('\u2254', '&Assign;'));
    encodeMap.i2(to('\xC3', '&Atilde'));
    encodeMap.i2(to('\xC3', '&Atilde;'));
    encodeMap.i2(to('\xC4', '&Auml'));
    encodeMap.i2(to('\xC4', '&Auml;'));
    encodeMap.i2(to('\u2216', '&Backslash;'));
    encodeMap.i2(to('\u2AE7', '&Barv;'));
    encodeMap.i2(to('\u2306', '&Barwed;'));
    encodeMap.i2(to('\u0411', '&Bcy;'));
    encodeMap.i2(to('\u2235', '&Because;'));
    encodeMap.i2(to('\u212C', '&Bernoullis;'));
    encodeMap.i2(to('\u0392', '&Beta;'));
    encodeMap.i2(to('\uD835\uDD05', '&Bfr;'));
    encodeMap.i2(to('\uD835\uDD39', '&Bopf;'));
    encodeMap.i2(to('\u02D8', '&Breve;'));
    encodeMap.i2(to('\u212C', '&Bscr;'));
    encodeMap.i2(to('\u224E', '&Bumpeq;'));
    encodeMap.i2(to('\u0427', '&CHcy;'));
    encodeMap.i2(to('\xA9', '&COPY'));
    encodeMap.i2(to('\xA9', '&COPY;'));
    encodeMap.i2(to('\u0106', '&Cacute;'));
    encodeMap.i2(to('\u22D2', '&Cap;'));
    encodeMap.i2(to('\u2145', '&CapitalDifferentialD;'));
    encodeMap.i2(to('\u212D', '&Cayleys;'));
    encodeMap.i2(to('\u010C', '&Ccaron;'));
    encodeMap.i2(to('\xC7', '&Ccedil'));
    encodeMap.i2(to('\xC7', '&Ccedil;'));
    encodeMap.i2(to('\u0108', '&Ccirc;'));
    encodeMap.i2(to('\u2230', '&Cconint;'));
    encodeMap.i2(to('\u010A', '&Cdot;'));
    encodeMap.i2(to('\xB8', '&Cedilla;'));
    encodeMap.i2(to('\xB7', '&CenterDot;'));
    encodeMap.i2(to('\u212D', '&Cfr;'));
    encodeMap.i2(to('\u03A7', '&Chi;'));
    encodeMap.i2(to('\u2299', '&CircleDot;'));
    encodeMap.i2(to('\u2296', '&CircleMinus;'));
    encodeMap.i2(to('\u2295', '&CirclePlus;'));
    encodeMap.i2(to('\u2297', '&CircleTimes;'));
    encodeMap.i2(to('\u2232', '&ClockwiseContourIntegral;'));
    encodeMap.i2(to('\u201D', '&CloseCurlyDoubleQuote;'));
    encodeMap.i2(to('\u2019', '&CloseCurlyQuote;'));
    encodeMap.i2(to('\u2237', '&Colon;'));
    encodeMap.i2(to('\u2A74', '&Colone;'));
    encodeMap.i2(to('\u2261', '&Congruent;'));
    encodeMap.i2(to('\u222F', '&Conint;'));
    encodeMap.i2(to('\u222E', '&ContourIntegral;'));
    encodeMap.i2(to('\u2102', '&Copf;'));
    encodeMap.i2(to('\u2210', '&Coproduct;'));
    encodeMap.i2(to('\u2233', '&CounterClockwiseContourIntegral;'));
    encodeMap.i2(to('\u2A2F', '&Cross;'));
    encodeMap.i2(to('\uD835\uDC9E', '&Cscr;'));
    encodeMap.i2(to('\u22D3', '&Cup;'));
    encodeMap.i2(to('\u224D', '&CupCap;'));
    encodeMap.i2(to('\u2145', '&DD;'));
    encodeMap.i2(to('\u2911', '&DDotrahd;'));
    encodeMap.i2(to('\u0402', '&DJcy;'));
    encodeMap.i2(to('\u0405', '&DScy;'));
    encodeMap.i2(to('\u040F', '&DZcy;'));
    encodeMap.i2(to('\u2021', '&Dagger;'));
    encodeMap.i2(to('\u21A1', '&Darr;'));
    encodeMap.i2(to('\u2AE4', '&Dashv;'));
    encodeMap.i2(to('\u010E', '&Dcaron;'));
    encodeMap.i2(to('\u0414', '&Dcy;'));
    encodeMap.i2(to('\u2207', '&Del;'));
    encodeMap.i2(to('\u0394', '&Delta;'));
    encodeMap.i2(to('\uD835\uDD07', '&Dfr;'));
    encodeMap.i2(to('\xB4', '&DiacriticalAcute;'));
    encodeMap.i2(to('\u02D9', '&DiacriticalDot;'));
    encodeMap.i2(to('\u02DD', '&DiacriticalDoubleAcute;'));
    encodeMap.i2(to('`', '&DiacriticalGrave;'));
    encodeMap.i2(to('\u02DC', '&DiacriticalTilde;'));
    encodeMap.i2(to('\u22C4', '&Diamond;'));
    encodeMap.i2(to('\u2146', '&DifferentialD;'));
    encodeMap.i2(to('\uD835\uDD3B', '&Dopf;'));
    encodeMap.i2(to('\xA8', '&Dot;'));
    encodeMap.i2(to('\u20DC', '&DotDot;'));
    encodeMap.i2(to('\u2250', '&DotEqual;'));
    encodeMap.i2(to('\u222F', '&DoubleContourIntegral;'));
    encodeMap.i2(to('\xA8', '&DoubleDot;'));
    encodeMap.i2(to('\u21D3', '&DoubleDownArrow;'));
    encodeMap.i2(to('\u21D0', '&DoubleLeftArrow;'));
    encodeMap.i2(to('\u21D4', '&DoubleLeftRightArrow;'));
    encodeMap.i2(to('\u2AE4', '&DoubleLeftTee;'));
    encodeMap.i2(to('\u27F8', '&DoubleLongLeftArrow;'));
    encodeMap.i2(to('\u27FA', '&DoubleLongLeftRightArrow;'));
    encodeMap.i2(to('\u27F9', '&DoubleLongRightArrow;'));
    encodeMap.i2(to('\u21D2', '&DoubleRightArrow;'));
    encodeMap.i2(to('\u22A8', '&DoubleRightTee;'));
    encodeMap.i2(to('\u21D1', '&DoubleUpArrow;'));
    encodeMap.i2(to('\u21D5', '&DoubleUpDownArrow;'));
    encodeMap.i2(to('\u2225', '&DoubleVerticalBar;'));
    encodeMap.i2(to('\u2193', '&DownArrow;'));
    encodeMap.i2(to('\u2913', '&DownArrowBar;'));
    encodeMap.i2(to('\u21F5', '&DownArrowUpArrow;'));
    encodeMap.i2(to('\u0311', '&DownBreve;'));
    encodeMap.i2(to('\u2950', '&DownLeftRightVector;'));
    encodeMap.i2(to('\u295E', '&DownLeftTeeVector;'));
    encodeMap.i2(to('\u21BD', '&DownLeftVector;'));
    encodeMap.i2(to('\u2956', '&DownLeftVectorBar;'));
    encodeMap.i2(to('\u295F', '&DownRightTeeVector;'));
    encodeMap.i2(to('\u21C1', '&DownRightVector;'));
    encodeMap.i2(to('\u2957', '&DownRightVectorBar;'));
    encodeMap.i2(to('\u22A4', '&DownTee;'));
    encodeMap.i2(to('\u21A7', '&DownTeeArrow;'));
    encodeMap.i2(to('\u21D3', '&Downarrow;'));
    encodeMap.i2(to('\uD835\uDC9F', '&Dscr;'));
    encodeMap.i2(to('\u0110', '&Dstrok;'));
    encodeMap.i2(to('\u014A', '&ENG;'));
    encodeMap.i2(to('\xD0', '&ETH'));
    encodeMap.i2(to('\xD0', '&ETH;'));
    encodeMap.i2(to('\xC9', '&Eacute'));
    encodeMap.i2(to('\xC9', '&Eacute;'));
    encodeMap.i2(to('\u011A', '&Ecaron;'));
    encodeMap.i2(to('\xCA', '&Ecirc'));
    encodeMap.i2(to('\xCA', '&Ecirc;'));
    encodeMap.i2(to('\u042D', '&Ecy;'));
    encodeMap.i2(to('\u0116', '&Edot;'));
    encodeMap.i2(to('\uD835\uDD08', '&Efr;'));
    encodeMap.i2(to('\xC8', '&Egrave'));
    encodeMap.i2(to('\xC8', '&Egrave;'));
    encodeMap.i2(to('\u2208', '&Element;'));
    encodeMap.i2(to('\u0112', '&Emacr;'));
    encodeMap.i2(to('\u25FB', '&EmptySmallSquare;'));
    encodeMap.i2(to('\u25AB', '&EmptyVerySmallSquare;'));
    encodeMap.i2(to('\u0118', '&Eogon;'));
    encodeMap.i2(to('\uD835\uDD3C', '&Eopf;'));
    encodeMap.i2(to('\u0395', '&Epsilon;'));
    encodeMap.i2(to('\u2A75', '&Equal;'));
    encodeMap.i2(to('\u2242', '&EqualTilde;'));
    encodeMap.i2(to('\u21CC', '&Equilibrium;'));
    encodeMap.i2(to('\u2130', '&Escr;'));
    encodeMap.i2(to('\u2A73', '&Esim;'));
    encodeMap.i2(to('\u0397', '&Eta;'));
    encodeMap.i2(to('\xCB', '&Euml'));
    encodeMap.i2(to('\xCB', '&Euml;'));
    encodeMap.i2(to('\u2203', '&Exists;'));
    encodeMap.i2(to('\u2147', '&ExponentialE;'));
    encodeMap.i2(to('\u0424', '&Fcy;'));
    encodeMap.i2(to('\uD835\uDD09', '&Ffr;'));
    encodeMap.i2(to('\u25FC', '&FilledSmallSquare;'));
    encodeMap.i2(to('\u25AA', '&FilledVerySmallSquare;'));
    encodeMap.i2(to('\uD835\uDD3D', '&Fopf;'));
    encodeMap.i2(to('\u2200', '&ForAll;'));
    encodeMap.i2(to('\u2131', '&Fouriertrf;'));
    encodeMap.i2(to('\u2131', '&Fscr;'));
    encodeMap.i2(to('\u0403', '&GJcy;'));
    encodeMap.i2(to('>', '&GT'));
    encodeMap.i2(to('>', '&GT;'));
    encodeMap.i2(to('\u0393', '&Gamma;'));
    encodeMap.i2(to('\u03DC', '&Gammad;'));
    encodeMap.i2(to('\u011E', '&Gbreve;'));
    encodeMap.i2(to('\u0122', '&Gcedil;'));
    encodeMap.i2(to('\u011C', '&Gcirc;'));
    encodeMap.i2(to('\u0413', '&Gcy;'));
    encodeMap.i2(to('\u0120', '&Gdot;'));
    encodeMap.i2(to('\uD835\uDD0A', '&Gfr;'));
    encodeMap.i2(to('\u22D9', '&Gg;'));
    encodeMap.i2(to('\uD835\uDD3E', '&Gopf;'));
    encodeMap.i2(to('\u2265', '&GreaterEqual;'));
    encodeMap.i2(to('\u22DB', '&GreaterEqualLess;'));
    encodeMap.i2(to('\u2267', '&GreaterFullEqual;'));
    encodeMap.i2(to('\u2AA2', '&GreaterGreater;'));
    encodeMap.i2(to('\u2277', '&GreaterLess;'));
    encodeMap.i2(to('\u2A7E', '&GreaterSlantEqual;'));
    encodeMap.i2(to('\u2273', '&GreaterTilde;'));
    encodeMap.i2(to('\uD835\uDCA2', '&Gscr;'));
    encodeMap.i2(to('\u226B', '&Gt;'));
    encodeMap.i2(to('\u042A', '&HARDcy;'));
    encodeMap.i2(to('\u02C7', '&Hacek;'));
    encodeMap.i2(to('^', '&Hat;'));
    encodeMap.i2(to('\u0124', '&Hcirc;'));
    encodeMap.i2(to('\u210C', '&Hfr;'));
    encodeMap.i2(to('\u210B', '&HilbertSpace;'));
    encodeMap.i2(to('\u210D', '&Hopf;'));
    encodeMap.i2(to('\u2500', '&HorizontalLine;'));
    encodeMap.i2(to('\u210B', '&Hscr;'));
    encodeMap.i2(to('\u0126', '&Hstrok;'));
    encodeMap.i2(to('\u224E', '&HumpDownHump;'));
    encodeMap.i2(to('\u224F', '&HumpEqual;'));
    encodeMap.i2(to('\u0415', '&IEcy;'));
    encodeMap.i2(to('\u0132', '&IJlig;'));
    encodeMap.i2(to('\u0401', '&IOcy;'));
    encodeMap.i2(to('\xCD', '&Iacute'));
    encodeMap.i2(to('\xCD', '&Iacute;'));
    encodeMap.i2(to('\xCE', '&Icirc'));
    encodeMap.i2(to('\xCE', '&Icirc;'));
    encodeMap.i2(to('\u0418', '&Icy;'));
    encodeMap.i2(to('\u0130', '&Idot;'));
    encodeMap.i2(to('\u2111', '&Ifr;'));
    encodeMap.i2(to('\xCC', '&Igrave'));
    encodeMap.i2(to('\xCC', '&Igrave;'));
    encodeMap.i2(to('\u2111', '&Im;'));
    encodeMap.i2(to('\u012A', '&Imacr;'));
    encodeMap.i2(to('\u2148', '&ImaginaryI;'));
    encodeMap.i2(to('\u21D2', '&Implies;'));
    encodeMap.i2(to('\u222C', '&Int;'));
    encodeMap.i2(to('\u222B', '&Integral;'));
    encodeMap.i2(to('\u22C2', '&Intersection;'));
    encodeMap.i2(to('\u2063', '&InvisibleComma;'));
    encodeMap.i2(to('\u2062', '&InvisibleTimes;'));
    encodeMap.i2(to('\u012E', '&Iogon;'));
    encodeMap.i2(to('\uD835\uDD40', '&Iopf;'));
    encodeMap.i2(to('\u0399', '&Iota;'));
    encodeMap.i2(to('\u2110', '&Iscr;'));
    encodeMap.i2(to('\u0128', '&Itilde;'));
    encodeMap.i2(to('\u0406', '&Iukcy;'));
    encodeMap.i2(to('\xCF', '&Iuml'));
    encodeMap.i2(to('\xCF', '&Iuml;'));
    encodeMap.i2(to('\u0134', '&Jcirc;'));
    encodeMap.i2(to('\u0419', '&Jcy;'));
    encodeMap.i2(to('\uD835\uDD0D', '&Jfr;'));
    encodeMap.i2(to('\uD835\uDD41', '&Jopf;'));
    encodeMap.i2(to('\uD835\uDCA5', '&Jscr;'));
    encodeMap.i2(to('\u0408', '&Jsercy;'));
    encodeMap.i2(to('\u0404', '&Jukcy;'));
    encodeMap.i2(to('\u0425', '&KHcy;'));
    encodeMap.i2(to('\u040C', '&KJcy;'));
    encodeMap.i2(to('\u039A', '&Kappa;'));
    encodeMap.i2(to('\u0136', '&Kcedil;'));
    encodeMap.i2(to('\u041A', '&Kcy;'));
    encodeMap.i2(to('\uD835\uDD0E', '&Kfr;'));
    encodeMap.i2(to('\uD835\uDD42', '&Kopf;'));
    encodeMap.i2(to('\uD835\uDCA6', '&Kscr;'));
    encodeMap.i2(to('\u0409', '&LJcy;'));
    encodeMap.i2(to('<', '&LT'));
    encodeMap.i2(to('<', '&LT;'));
    encodeMap.i2(to('\u0139', '&Lacute;'));
    encodeMap.i2(to('\u039B', '&Lambda;'));
    encodeMap.i2(to('\u27EA', '&Lang;'));
    encodeMap.i2(to('\u2112', '&Laplacetrf;'));
    encodeMap.i2(to('\u219E', '&Larr;'));
    encodeMap.i2(to('\u013D', '&Lcaron;'));
    encodeMap.i2(to('\u013B', '&Lcedil;'));
    encodeMap.i2(to('\u041B', '&Lcy;'));
    encodeMap.i2(to('\u27E8', '&LeftAngleBracket;'));
    encodeMap.i2(to('\u2190', '&LeftArrow;'));
    encodeMap.i2(to('\u21E4', '&LeftArrowBar;'));
    encodeMap.i2(to('\u21C6', '&LeftArrowRightArrow;'));
    encodeMap.i2(to('\u2308', '&LeftCeiling;'));
    encodeMap.i2(to('\u27E6', '&LeftDoubleBracket;'));
    encodeMap.i2(to('\u2961', '&LeftDownTeeVector;'));
    encodeMap.i2(to('\u21C3', '&LeftDownVector;'));
    encodeMap.i2(to('\u2959', '&LeftDownVectorBar;'));
    encodeMap.i2(to('\u230A', '&LeftFloor;'));
    encodeMap.i2(to('\u2194', '&LeftRightArrow;'));
    encodeMap.i2(to('\u294E', '&LeftRightVector;'));
    encodeMap.i2(to('\u22A3', '&LeftTee;'));
    encodeMap.i2(to('\u21A4', '&LeftTeeArrow;'));
    encodeMap.i2(to('\u295A', '&LeftTeeVector;'));
    encodeMap.i2(to('\u22B2', '&LeftTriangle;'));
    encodeMap.i2(to('\u29CF', '&LeftTriangleBar;'));
    encodeMap.i2(to('\u22B4', '&LeftTriangleEqual;'));
    encodeMap.i2(to('\u2951', '&LeftUpDownVector;'));
    encodeMap.i2(to('\u2960', '&LeftUpTeeVector;'));
    encodeMap.i2(to('\u21BF', '&LeftUpVector;'));
    encodeMap.i2(to('\u2958', '&LeftUpVectorBar;'));
    encodeMap.i2(to('\u21BC', '&LeftVector;'));
    encodeMap.i2(to('\u2952', '&LeftVectorBar;'));
    encodeMap.i2(to('\u21D0', '&Leftarrow;'));
    encodeMap.i2(to('\u21D4', '&Leftrightarrow;'));
    encodeMap.i2(to('\u22DA', '&LessEqualGreater;'));
    encodeMap.i2(to('\u2266', '&LessFullEqual;'));
    encodeMap.i2(to('\u2276', '&LessGreater;'));
    encodeMap.i2(to('\u2AA1', '&LessLess;'));
    encodeMap.i2(to('\u2A7D', '&LessSlantEqual;'));
    encodeMap.i2(to('\u2272', '&LessTilde;'));
    encodeMap.i2(to('\uD835\uDD0F', '&Lfr;'));
    encodeMap.i2(to('\u22D8', '&Ll;'));
    encodeMap.i2(to('\u21DA', '&Lleftarrow;'));
    encodeMap.i2(to('\u013F', '&Lmidot;'));
    encodeMap.i2(to('\u27F5', '&LongLeftArrow;'));
    encodeMap.i2(to('\u27F7', '&LongLeftRightArrow;'));
    encodeMap.i2(to('\u27F6', '&LongRightArrow;'));
    encodeMap.i2(to('\u27F8', '&Longleftarrow;'));
    encodeMap.i2(to('\u27FA', '&Longleftrightarrow;'));
    encodeMap.i2(to('\u27F9', '&Longrightarrow;'));
    encodeMap.i2(to('\uD835\uDD43', '&Lopf;'));
    encodeMap.i2(to('\u2199', '&LowerLeftArrow;'));
    encodeMap.i2(to('\u2198', '&LowerRightArrow;'));
    encodeMap.i2(to('\u2112', '&Lscr;'));
    encodeMap.i2(to('\u21B0', '&Lsh;'));
    encodeMap.i2(to('\u0141', '&Lstrok;'));
    encodeMap.i2(to('\u226A', '&Lt;'));
    encodeMap.i2(to('\u2905', '&Map;'));
    encodeMap.i2(to('\u041C', '&Mcy;'));
    encodeMap.i2(to('\u205F', '&MediumSpace;'));
    encodeMap.i2(to('\u2133', '&Mellintrf;'));
    encodeMap.i2(to('\uD835\uDD10', '&Mfr;'));
    encodeMap.i2(to('\u2213', '&MinusPlus;'));
    encodeMap.i2(to('\uD835\uDD44', '&Mopf;'));
    encodeMap.i2(to('\u2133', '&Mscr;'));
    encodeMap.i2(to('\u039C', '&Mu;'));
    encodeMap.i2(to('\u040A', '&NJcy;'));
    encodeMap.i2(to('\u0143', '&Nacute;'));
    encodeMap.i2(to('\u0147', '&Ncaron;'));
    encodeMap.i2(to('\u0145', '&Ncedil;'));
    encodeMap.i2(to('\u041D', '&Ncy;'));
    encodeMap.i2(to('\u200B', '&NegativeMediumSpace;'));
    encodeMap.i2(to('\u200B', '&NegativeThickSpace;'));
    encodeMap.i2(to('\u200B', '&NegativeThinSpace;'));
    encodeMap.i2(to('\u200B', '&NegativeVeryThinSpace;'));
    encodeMap.i2(to('\u226B', '&NestedGreaterGreater;'));
    encodeMap.i2(to('\u226A', '&NestedLessLess;'));
    encodeMap.i2(to('\n', '&NewLine;'));
    encodeMap.i2(to('\uD835\uDD11', '&Nfr;'));
    encodeMap.i2(to('\u2060', '&NoBreak;'));
    encodeMap.i2(to('\xA0', '&NonBreakingSpace;'));
    encodeMap.i2(to('\u2115', '&Nopf;'));
    encodeMap.i2(to('\u2AEC', '&Not;'));
    encodeMap.i2(to('\u2262', '&NotCongruent;'));
    encodeMap.i2(to('\u226D', '&NotCupCap;'));
    encodeMap.i2(to('\u2226', '&NotDoubleVerticalBar;'));
    encodeMap.i2(to('\u2209', '&NotElement;'));
    encodeMap.i2(to('\u2260', '&NotEqual;'));
    encodeMap.i2(to('\u2242\u0338', '&NotEqualTilde;'));
    encodeMap.i2(to('\u2204', '&NotExists;'));
    encodeMap.i2(to('\u226F', '&NotGreater;'));
    encodeMap.i2(to('\u2271', '&NotGreaterEqual;'));
    encodeMap.i2(to('\u2267\u0338', '&NotGreaterFullEqual;'));
    encodeMap.i2(to('\u226B\u0338', '&NotGreaterGreater;'));
    encodeMap.i2(to('\u2279', '&NotGreaterLess;'));
    encodeMap.i2(to('\u2A7E\u0338', '&NotGreaterSlantEqual;'));
    encodeMap.i2(to('\u2275', '&NotGreaterTilde;'));
    encodeMap.i2(to('\u224E\u0338', '&NotHumpDownHump;'));
    encodeMap.i2(to('\u224F\u0338', '&NotHumpEqual;'));
    encodeMap.i2(to('\u22EA', '&NotLeftTriangle;'));
    encodeMap.i2(to('\u29CF\u0338', '&NotLeftTriangleBar;'));
    encodeMap.i2(to('\u22EC', '&NotLeftTriangleEqual;'));
    encodeMap.i2(to('\u226E', '&NotLess;'));
    encodeMap.i2(to('\u2270', '&NotLessEqual;'));
    encodeMap.i2(to('\u2278', '&NotLessGreater;'));
    encodeMap.i2(to('\u226A\u0338', '&NotLessLess;'));
    encodeMap.i2(to('\u2A7D\u0338', '&NotLessSlantEqual;'));
    encodeMap.i2(to('\u2274', '&NotLessTilde;'));
    encodeMap.i2(to('\u2AA2\u0338', '&NotNestedGreaterGreater;'));
    encodeMap.i2(to('\u2AA1\u0338', '&NotNestedLessLess;'));
    encodeMap.i2(to('\u2280', '&NotPrecedes;'));
    encodeMap.i2(to('\u2AAF\u0338', '&NotPrecedesEqual;'));
    encodeMap.i2(to('\u22E0', '&NotPrecedesSlantEqual;'));
    encodeMap.i2(to('\u220C', '&NotReverseElement;'));
    encodeMap.i2(to('\u22EB', '&NotRightTriangle;'));
    encodeMap.i2(to('\u29D0\u0338', '&NotRightTriangleBar;'));
    encodeMap.i2(to('\u22ED', '&NotRightTriangleEqual;'));
    encodeMap.i2(to('\u228F\u0338', '&NotSquareSubset;'));
    encodeMap.i2(to('\u22E2', '&NotSquareSubsetEqual;'));
    encodeMap.i2(to('\u2290\u0338', '&NotSquareSuperset;'));
    encodeMap.i2(to('\u22E3', '&NotSquareSupersetEqual;'));
    encodeMap.i2(to('\u2282\u20D2', '&NotSubset;'));
    encodeMap.i2(to('\u2288', '&NotSubsetEqual;'));
    encodeMap.i2(to('\u2281', '&NotSucceeds;'));
    encodeMap.i2(to('\u2AB0\u0338', '&NotSucceedsEqual;'));
    encodeMap.i2(to('\u22E1', '&NotSucceedsSlantEqual;'));
    encodeMap.i2(to('\u227F\u0338', '&NotSucceedsTilde;'));
    encodeMap.i2(to('\u2283\u20D2', '&NotSuperset;'));
    encodeMap.i2(to('\u2289', '&NotSupersetEqual;'));
    encodeMap.i2(to('\u2241', '&NotTilde;'));
    encodeMap.i2(to('\u2244', '&NotTildeEqual;'));
    encodeMap.i2(to('\u2247', '&NotTildeFullEqual;'));
    encodeMap.i2(to('\u2249', '&NotTildeTilde;'));
    encodeMap.i2(to('\u2224', '&NotVerticalBar;'));
    encodeMap.i2(to('\uD835\uDCA9', '&Nscr;'));
    encodeMap.i2(to('\xD1', '&Ntilde'));
    encodeMap.i2(to('\xD1', '&Ntilde;'));
    encodeMap.i2(to('\u039D', '&Nu;'));
    encodeMap.i2(to('\u0152', '&OElig;'));
    encodeMap.i2(to('\xD3', '&Oacute'));
    encodeMap.i2(to('\xD3', '&Oacute;'));
    encodeMap.i2(to('\xD4', '&Ocirc'));
    encodeMap.i2(to('\xD4', '&Ocirc;'));
    encodeMap.i2(to('\u041E', '&Ocy;'));
    encodeMap.i2(to('\u0150', '&Odblac;'));
    encodeMap.i2(to('\uD835\uDD12', '&Ofr;'));
    encodeMap.i2(to('\xD2', '&Ograve'));
    encodeMap.i2(to('\xD2', '&Ograve;'));
    encodeMap.i2(to('\u014C', '&Omacr;'));
    encodeMap.i2(to('\u03A9', '&Omega;'));
    encodeMap.i2(to('\u039F', '&Omicron;'));
    encodeMap.i2(to('\uD835\uDD46', '&Oopf;'));
    encodeMap.i2(to('\u201C', '&OpenCurlyDoubleQuote;'));
    encodeMap.i2(to('\u2018', '&OpenCurlyQuote;'));
    encodeMap.i2(to('\u2A54', '&Or;'));
    encodeMap.i2(to('\uD835\uDCAA', '&Oscr;'));
    encodeMap.i2(to('\xD8', '&Oslash'));
    encodeMap.i2(to('\xD8', '&Oslash;'));
    encodeMap.i2(to('\xD5', '&Otilde'));
    encodeMap.i2(to('\xD5', '&Otilde;'));
    encodeMap.i2(to('\u2A37', '&Otimes;'));
    encodeMap.i2(to('\xD6', '&Ouml'));
    encodeMap.i2(to('\xD6', '&Ouml;'));
    encodeMap.i2(to('\u203E', '&OverBar;'));
    encodeMap.i2(to('\u23DE', '&OverBrace;'));
    encodeMap.i2(to('\u23B4', '&OverBracket;'));
    encodeMap.i2(to('\u23DC', '&OverParenthesis;'));
    encodeMap.i2(to('\u2202', '&PartialD;'));
    encodeMap.i2(to('\u041F', '&Pcy;'));
    encodeMap.i2(to('\uD835\uDD13', '&Pfr;'));
    encodeMap.i2(to('\u03A6', '&Phi;'));
    encodeMap.i2(to('\u03A0', '&Pi;'));
    encodeMap.i2(to('\xB1', '&PlusMinus;'));
    encodeMap.i2(to('\u210C', '&Poincareplane;'));
    encodeMap.i2(to('\u2119', '&Popf;'));
    encodeMap.i2(to('\u2ABB', '&Pr;'));
    encodeMap.i2(to('\u227A', '&Precedes;'));
    encodeMap.i2(to('\u2AAF', '&PrecedesEqual;'));
    encodeMap.i2(to('\u227C', '&PrecedesSlantEqual;'));
    encodeMap.i2(to('\u227E', '&PrecedesTilde;'));
    encodeMap.i2(to('\u2033', '&Prime;'));
    encodeMap.i2(to('\u220F', '&Product;'));
    encodeMap.i2(to('\u2237', '&Proportion;'));
    encodeMap.i2(to('\u221D', '&Proportional;'));
    encodeMap.i2(to('\uD835\uDCAB', '&Pscr;'));
    encodeMap.i2(to('\u03A8', '&Psi;'));
    encodeMap.i2(to('"', '&QUOT'));
    encodeMap.i2(to('"', '&QUOT;'));
    encodeMap.i2(to('\uD835\uDD14', '&Qfr;'));
    encodeMap.i2(to('\u211A', '&Qopf;'));
    encodeMap.i2(to('\uD835\uDCAC', '&Qscr;'));
    encodeMap.i2(to('\u2910', '&RBarr;'));
    encodeMap.i2(to('\xAE', '&REG'));
    encodeMap.i2(to('\xAE', '&REG;'));
    encodeMap.i2(to('\u0154', '&Racute;'));
    encodeMap.i2(to('\u27EB', '&Rang;'));
    encodeMap.i2(to('\u21A0', '&Rarr;'));
    encodeMap.i2(to('\u2916', '&Rarrtl;'));
    encodeMap.i2(to('\u0158', '&Rcaron;'));
    encodeMap.i2(to('\u0156', '&Rcedil;'));
    encodeMap.i2(to('\u0420', '&Rcy;'));
    encodeMap.i2(to('\u211C', '&Re;'));
    encodeMap.i2(to('\u220B', '&ReverseElement;'));
    encodeMap.i2(to('\u21CB', '&ReverseEquilibrium;'));
    encodeMap.i2(to('\u296F', '&ReverseUpEquilibrium;'));
    encodeMap.i2(to('\u211C', '&Rfr;'));
    encodeMap.i2(to('\u03A1', '&Rho;'));
    encodeMap.i2(to('\u27E9', '&RightAngleBracket;'));
    encodeMap.i2(to('\u2192', '&RightArrow;'));
    encodeMap.i2(to('\u21E5', '&RightArrowBar;'));
    encodeMap.i2(to('\u21C4', '&RightArrowLeftArrow;'));
    encodeMap.i2(to('\u2309', '&RightCeiling;'));
    encodeMap.i2(to('\u27E7', '&RightDoubleBracket;'));
    encodeMap.i2(to('\u295D', '&RightDownTeeVector;'));
    encodeMap.i2(to('\u21C2', '&RightDownVector;'));
    encodeMap.i2(to('\u2955', '&RightDownVectorBar;'));
    encodeMap.i2(to('\u230B', '&RightFloor;'));
    encodeMap.i2(to('\u22A2', '&RightTee;'));
    encodeMap.i2(to('\u21A6', '&RightTeeArrow;'));
    encodeMap.i2(to('\u295B', '&RightTeeVector;'));
    encodeMap.i2(to('\u22B3', '&RightTriangle;'));
    encodeMap.i2(to('\u29D0', '&RightTriangleBar;'));
    encodeMap.i2(to('\u22B5', '&RightTriangleEqual;'));
    encodeMap.i2(to('\u294F', '&RightUpDownVector;'));
    encodeMap.i2(to('\u295C', '&RightUpTeeVector;'));
    encodeMap.i2(to('\u21BE', '&RightUpVector;'));
    encodeMap.i2(to('\u2954', '&RightUpVectorBar;'));
    encodeMap.i2(to('\u21C0', '&RightVector;'));
    encodeMap.i2(to('\u2953', '&RightVectorBar;'));
    encodeMap.i2(to('\u21D2', '&Rightarrow;'));
    encodeMap.i2(to('\u211D', '&Ropf;'));
    encodeMap.i2(to('\u2970', '&RoundImplies;'));
    encodeMap.i2(to('\u21DB', '&Rrightarrow;'));
    encodeMap.i2(to('\u211B', '&Rscr;'));
    encodeMap.i2(to('\u21B1', '&Rsh;'));
    encodeMap.i2(to('\u29F4', '&RuleDelayed;'));
    encodeMap.i2(to('\u0429', '&SHCHcy;'));
    encodeMap.i2(to('\u0428', '&SHcy;'));
    encodeMap.i2(to('\u042C', '&SOFTcy;'));
    encodeMap.i2(to('\u015A', '&Sacute;'));
    encodeMap.i2(to('\u2ABC', '&Sc;'));
    encodeMap.i2(to('\u0160', '&Scaron;'));
    encodeMap.i2(to('\u015E', '&Scedil;'));
    encodeMap.i2(to('\u015C', '&Scirc;'));
    encodeMap.i2(to('\u0421', '&Scy;'));
    encodeMap.i2(to('\uD835\uDD16', '&Sfr;'));
    encodeMap.i2(to('\u2193', '&ShortDownArrow;'));
    encodeMap.i2(to('\u2190', '&ShortLeftArrow;'));
    encodeMap.i2(to('\u2192', '&ShortRightArrow;'));
    encodeMap.i2(to('\u2191', '&ShortUpArrow;'));
    encodeMap.i2(to('\u03A3', '&Sigma;'));
    encodeMap.i2(to('\u2218', '&SmallCircle;'));
    encodeMap.i2(to('\uD835\uDD4A', '&Sopf;'));
    encodeMap.i2(to('\u221A', '&Sqrt;'));
    encodeMap.i2(to('\u25A1', '&Square;'));
    encodeMap.i2(to('\u2293', '&SquareIntersection;'));
    encodeMap.i2(to('\u228F', '&SquareSubset;'));
    encodeMap.i2(to('\u2291', '&SquareSubsetEqual;'));
    encodeMap.i2(to('\u2290', '&SquareSuperset;'));
    encodeMap.i2(to('\u2292', '&SquareSupersetEqual;'));
    encodeMap.i2(to('\u2294', '&SquareUnion;'));
    encodeMap.i2(to('\uD835\uDCAE', '&Sscr;'));
    encodeMap.i2(to('\u22C6', '&Star;'));
    encodeMap.i2(to('\u22D0', '&Sub;'));
    encodeMap.i2(to('\u22D0', '&Subset;'));
    encodeMap.i2(to('\u2286', '&SubsetEqual;'));
    encodeMap.i2(to('\u227B', '&Succeeds;'));
    encodeMap.i2(to('\u2AB0', '&SucceedsEqual;'));
    encodeMap.i2(to('\u227D', '&SucceedsSlantEqual;'));
    encodeMap.i2(to('\u227F', '&SucceedsTilde;'));
    encodeMap.i2(to('\u220B', '&SuchThat;'));
    encodeMap.i2(to('\u2211', '&Sum;'));
    encodeMap.i2(to('\u22D1', '&Sup;'));
    encodeMap.i2(to('\u2283', '&Superset;'));
    encodeMap.i2(to('\u2287', '&SupersetEqual;'));
    encodeMap.i2(to('\u22D1', '&Supset;'));
    encodeMap.i2(to('\xDE', '&THORN'));
    encodeMap.i2(to('\xDE', '&THORN;'));
    encodeMap.i2(to('\u2122', '&TRADE;'));
    encodeMap.i2(to('\u040B', '&TSHcy;'));
    encodeMap.i2(to('\u0426', '&TScy;'));
    encodeMap.i2(to('\t', '&Tab;'));
    encodeMap.i2(to('\u03A4', '&Tau;'));
    encodeMap.i2(to('\u0164', '&Tcaron;'));
    encodeMap.i2(to('\u0162', '&Tcedil;'));
    encodeMap.i2(to('\u0422', '&Tcy;'));
    encodeMap.i2(to('\uD835\uDD17', '&Tfr;'));
    encodeMap.i2(to('\u2234', '&Therefore;'));
    encodeMap.i2(to('\u0398', '&Theta;'));
    encodeMap.i2(to('\u205F\u200A', '&ThickSpace;'));
    encodeMap.i2(to('\u2009', '&ThinSpace;'));
    encodeMap.i2(to('\u223C', '&Tilde;'));
    encodeMap.i2(to('\u2243', '&TildeEqual;'));
    encodeMap.i2(to('\u2245', '&TildeFullEqual;'));
    encodeMap.i2(to('\u2248', '&TildeTilde;'));
    encodeMap.i2(to('\uD835\uDD4B', '&Topf;'));
    encodeMap.i2(to('\u20DB', '&TripleDot;'));
    encodeMap.i2(to('\uD835\uDCAF', '&Tscr;'));
    encodeMap.i2(to('\u0166', '&Tstrok;'));
    encodeMap.i2(to('\xDA', '&Uacute'));
    encodeMap.i2(to('\xDA', '&Uacute;'));
    encodeMap.i2(to('\u219F', '&Uarr;'));
    encodeMap.i2(to('\u2949', '&Uarrocir;'));
    encodeMap.i2(to('\u040E', '&Ubrcy;'));
    encodeMap.i2(to('\u016C', '&Ubreve;'));
    encodeMap.i2(to('\xDB', '&Ucirc'));
    encodeMap.i2(to('\xDB', '&Ucirc;'));
    encodeMap.i2(to('\u0423', '&Ucy;'));
    encodeMap.i2(to('\u0170', '&Udblac;'));
    encodeMap.i2(to('\uD835\uDD18', '&Ufr;'));
    encodeMap.i2(to('\xD9', '&Ugrave'));
    encodeMap.i2(to('\xD9', '&Ugrave;'));
    encodeMap.i2(to('\u016A', '&Umacr;'));
    encodeMap.i2(to('_', '&UnderBar;'));
    encodeMap.i2(to('\u23DF', '&UnderBrace;'));
    encodeMap.i2(to('\u23B5', '&UnderBracket;'));
    encodeMap.i2(to('\u23DD', '&UnderParenthesis;'));
    encodeMap.i2(to('\u22C3', '&Union;'));
    encodeMap.i2(to('\u228E', '&UnionPlus;'));
    encodeMap.i2(to('\u0172', '&Uogon;'));
    encodeMap.i2(to('\uD835\uDD4C', '&Uopf;'));
    encodeMap.i2(to('\u2191', '&UpArrow;'));
    encodeMap.i2(to('\u2912', '&UpArrowBar;'));
    encodeMap.i2(to('\u21C5', '&UpArrowDownArrow;'));
    encodeMap.i2(to('\u2195', '&UpDownArrow;'));
    encodeMap.i2(to('\u296E', '&UpEquilibrium;'));
    encodeMap.i2(to('\u22A5', '&UpTee;'));
    encodeMap.i2(to('\u21A5', '&UpTeeArrow;'));
    encodeMap.i2(to('\u21D1', '&Uparrow;'));
    encodeMap.i2(to('\u21D5', '&Updownarrow;'));
    encodeMap.i2(to('\u2196', '&UpperLeftArrow;'));
    encodeMap.i2(to('\u2197', '&UpperRightArrow;'));
    encodeMap.i2(to('\u03D2', '&Upsi;'));
    encodeMap.i2(to('\u03A5', '&Upsilon;'));
    encodeMap.i2(to('\u016E', '&Uring;'));
    encodeMap.i2(to('\uD835\uDCB0', '&Uscr;'));
    encodeMap.i2(to('\u0168', '&Utilde;'));
    encodeMap.i2(to('\xDC', '&Uuml'));
    encodeMap.i2(to('\xDC', '&Uuml;'));
    encodeMap.i2(to('\u22AB', '&VDash;'));
    encodeMap.i2(to('\u2AEB', '&Vbar;'));
    encodeMap.i2(to('\u0412', '&Vcy;'));
    encodeMap.i2(to('\u22A9', '&Vdash;'));
    encodeMap.i2(to('\u2AE6', '&Vdashl;'));
    encodeMap.i2(to('\u22C1', '&Vee;'));
    encodeMap.i2(to('\u2016', '&Verbar;'));
    encodeMap.i2(to('\u2016', '&Vert;'));
    encodeMap.i2(to('\u2223', '&VerticalBar;'));
    encodeMap.i2(to('|', '&VerticalLine;'));
    encodeMap.i2(to('\u2758', '&VerticalSeparator;'));
    encodeMap.i2(to('\u2240', '&VerticalTilde;'));
    encodeMap.i2(to('\u200A', '&VeryThinSpace;'));
    encodeMap.i2(to('\uD835\uDD19', '&Vfr;'));
    encodeMap.i2(to('\uD835\uDD4D', '&Vopf;'));
    encodeMap.i2(to('\uD835\uDCB1', '&Vscr;'));
    encodeMap.i2(to('\u22AA', '&Vvdash;'));
    encodeMap.i2(to('\u0174', '&Wcirc;'));
    encodeMap.i2(to('\u22C0', '&Wedge;'));
    encodeMap.i2(to('\uD835\uDD1A', '&Wfr;'));
    encodeMap.i2(to('\uD835\uDD4E', '&Wopf;'));
    encodeMap.i2(to('\uD835\uDCB2', '&Wscr;'));
    encodeMap.i2(to('\uD835\uDD1B', '&Xfr;'));
    encodeMap.i2(to('\u039E', '&Xi;'));
    encodeMap.i2(to('\uD835\uDD4F', '&Xopf;'));
    encodeMap.i2(to('\uD835\uDCB3', '&Xscr;'));
    encodeMap.i2(to('\u042F', '&YAcy;'));
    encodeMap.i2(to('\u0407', '&YIcy;'));
    encodeMap.i2(to('\u042E', '&YUcy;'));
    encodeMap.i2(to('\xDD', '&Yacute'));
    encodeMap.i2(to('\xDD', '&Yacute;'));
    encodeMap.i2(to('\u0176', '&Ycirc;'));
    encodeMap.i2(to('\u042B', '&Ycy;'));
    encodeMap.i2(to('\uD835\uDD1C', '&Yfr;'));
    encodeMap.i2(to('\uD835\uDD50', '&Yopf;'));
    encodeMap.i2(to('\uD835\uDCB4', '&Yscr;'));
    encodeMap.i2(to('\u0178', '&Yuml;'));
    encodeMap.i2(to('\u0416', '&ZHcy;'));
    encodeMap.i2(to('\u0179', '&Zacute;'));
    encodeMap.i2(to('\u017D', '&Zcaron;'));
    encodeMap.i2(to('\u0417', '&Zcy;'));
    encodeMap.i2(to('\u017B', '&Zdot;'));
    encodeMap.i2(to('\u200B', '&ZeroWidthSpace;'));
    encodeMap.i2(to('\u0396', '&Zeta;'));
    encodeMap.i2(to('\u2128', '&Zfr;'));
    encodeMap.i2(to('\u2124', '&Zopf;'));
    encodeMap.i2(to('\uD835\uDCB5', '&Zscr;'));
    encodeMap.i2(to('\xE1', '&aacute'));
    encodeMap.i2(to('\xE1', '&aacute;'));
    encodeMap.i2(to('\u0103', '&abreve;'));
    encodeMap.i2(to('\u223E', '&ac;'));
    encodeMap.i2(to('\u223E\u0333', '&acE;'));
    encodeMap.i2(to('\u223F', '&acd;'));
    encodeMap.i2(to('\xE2', '&acirc'));
    encodeMap.i2(to('\xE2', '&acirc;'));
    encodeMap.i2(to('\xB4', '&acute'));
    encodeMap.i2(to('\xB4', '&acute;'));
    encodeMap.i2(to('\u0430', '&acy;'));
    encodeMap.i2(to('\xE6', '&aelig'));
    encodeMap.i2(to('\xE6', '&aelig;'));
    encodeMap.i2(to('\u2061', '&af;'));
    encodeMap.i2(to('\uD835\uDD1E', '&afr;'));
    encodeMap.i2(to('\xE0', '&agrave'));
    encodeMap.i2(to('\xE0', '&agrave;'));
    encodeMap.i2(to('\u2135', '&alefsym;'));
    encodeMap.i2(to('\u2135', '&aleph;'));
    encodeMap.i2(to('\u03B1', '&alpha;'));
    encodeMap.i2(to('\u0101', '&amacr;'));
    encodeMap.i2(to('\u2A3F', '&amalg;'));
    encodeMap.i2(to('&', '&amp'));
    encodeMap.i2(to('&', '&amp;'));
    encodeMap.i2(to('\u2227', '&and;'));
    encodeMap.i2(to('\u2A55', '&andand;'));
    encodeMap.i2(to('\u2A5C', '&andd;'));
    encodeMap.i2(to('\u2A58', '&andslope;'));
    encodeMap.i2(to('\u2A5A', '&andv;'));
    encodeMap.i2(to('\u2220', '&ang;'));
    encodeMap.i2(to('\u29A4', '&ange;'));
    encodeMap.i2(to('\u2220', '&angle;'));
    encodeMap.i2(to('\u2221', '&angmsd;'));
    encodeMap.i2(to('\u29A8', '&angmsdaa;'));
    encodeMap.i2(to('\u29A9', '&angmsdab;'));
    encodeMap.i2(to('\u29AA', '&angmsdac;'));
    encodeMap.i2(to('\u29AB', '&angmsdad;'));
    encodeMap.i2(to('\u29AC', '&angmsdae;'));
    encodeMap.i2(to('\u29AD', '&angmsdaf;'));
    encodeMap.i2(to('\u29AE', '&angmsdag;'));
    encodeMap.i2(to('\u29AF', '&angmsdah;'));
    encodeMap.i2(to('\u221F', '&angrt;'));
    encodeMap.i2(to('\u22BE', '&angrtvb;'));
    encodeMap.i2(to('\u299D', '&angrtvbd;'));
    encodeMap.i2(to('\u2222', '&angsph;'));
    encodeMap.i2(to('\xC5', '&angst;'));
    encodeMap.i2(to('\u237C', '&angzarr;'));
    encodeMap.i2(to('\u0105', '&aogon;'));
    encodeMap.i2(to('\uD835\uDD52', '&aopf;'));
    encodeMap.i2(to('\u2248', '&ap;'));
    encodeMap.i2(to('\u2A70', '&apE;'));
    encodeMap.i2(to('\u2A6F', '&apacir;'));
    encodeMap.i2(to('\u224A', '&ape;'));
    encodeMap.i2(to('\u224B', '&apid;'));
    encodeMap.i2(to("'", '&apos;'));
    encodeMap.i2(to('\u2248', '&approx;'));
    encodeMap.i2(to('\u224A', '&approxeq;'));
    encodeMap.i2(to('\xE5', '&aring'));
    encodeMap.i2(to('\xE5', '&aring;'));
    encodeMap.i2(to('\uD835\uDCB6', '&ascr;'));
    encodeMap.i2(to('*', '&ast;'));
    encodeMap.i2(to('\u2248', '&asymp;'));
    encodeMap.i2(to('\u224D', '&asympeq;'));
    encodeMap.i2(to('\xE3', '&atilde'));
    encodeMap.i2(to('\xE3', '&atilde;'));
    encodeMap.i2(to('\xE4', '&auml'));
    encodeMap.i2(to('\xE4', '&auml;'));
    encodeMap.i2(to('\u2233', '&awconint;'));
    encodeMap.i2(to('\u2A11', '&awint;'));
    encodeMap.i2(to('\u2AED', '&bNot;'));
    encodeMap.i2(to('\u224C', '&backcong;'));
    encodeMap.i2(to('\u03F6', '&backepsilon;'));
    encodeMap.i2(to('\u2035', '&backprime;'));
    encodeMap.i2(to('\u223D', '&backsim;'));
    encodeMap.i2(to('\u22CD', '&backsimeq;'));
    encodeMap.i2(to('\u22BD', '&barvee;'));
    encodeMap.i2(to('\u2305', '&barwed;'));
    encodeMap.i2(to('\u2305', '&barwedge;'));
    encodeMap.i2(to('\u23B5', '&bbrk;'));
    encodeMap.i2(to('\u23B6', '&bbrktbrk;'));
    encodeMap.i2(to('\u224C', '&bcong;'));
    encodeMap.i2(to('\u0431', '&bcy;'));
    encodeMap.i2(to('\u201E', '&bdquo;'));
    encodeMap.i2(to('\u2235', '&becaus;'));
    encodeMap.i2(to('\u2235', '&because;'));
    encodeMap.i2(to('\u29B0', '&bemptyv;'));
    encodeMap.i2(to('\u03F6', '&bepsi;'));
    encodeMap.i2(to('\u212C', '&bernou;'));
    encodeMap.i2(to('\u03B2', '&beta;'));
    encodeMap.i2(to('\u2136', '&beth;'));
    encodeMap.i2(to('\u226C', '&between;'));
    encodeMap.i2(to('\uD835\uDD1F', '&bfr;'));
    encodeMap.i2(to('\u22C2', '&bigcap;'));
    encodeMap.i2(to('\u25EF', '&bigcirc;'));
    encodeMap.i2(to('\u22C3', '&bigcup;'));
    encodeMap.i2(to('\u2A00', '&bigodot;'));
    encodeMap.i2(to('\u2A01', '&bigoplus;'));
    encodeMap.i2(to('\u2A02', '&bigotimes;'));
    encodeMap.i2(to('\u2A06', '&bigsqcup;'));
    encodeMap.i2(to('\u2605', '&bigstar;'));
    encodeMap.i2(to('\u25BD', '&bigtriangledown;'));
    encodeMap.i2(to('\u25B3', '&bigtriangleup;'));
    encodeMap.i2(to('\u2A04', '&biguplus;'));
    encodeMap.i2(to('\u22C1', '&bigvee;'));
    encodeMap.i2(to('\u22C0', '&bigwedge;'));
    encodeMap.i2(to('\u290D', '&bkarow;'));
    encodeMap.i2(to('\u29EB', '&blacklozenge;'));
    encodeMap.i2(to('\u25AA', '&blacksquare;'));
    encodeMap.i2(to('\u25B4', '&blacktriangle;'));
    encodeMap.i2(to('\u25BE', '&blacktriangledown;'));
    encodeMap.i2(to('\u25C2', '&blacktriangleleft;'));
    encodeMap.i2(to('\u25B8', '&blacktriangleright;'));
    encodeMap.i2(to('\u2423', '&blank;'));
    encodeMap.i2(to('\u2592', '&blk12;'));
    encodeMap.i2(to('\u2591', '&blk14;'));
    encodeMap.i2(to('\u2593', '&blk34;'));
    encodeMap.i2(to('\u2588', '&block;'));
    encodeMap.i2(to('=\u20E5', '&bne;'));
    encodeMap.i2(to('\u2261\u20E5', '&bnequiv;'));
    encodeMap.i2(to('\u2310', '&bnot;'));
    encodeMap.i2(to('\uD835\uDD53', '&bopf;'));
    encodeMap.i2(to('\u22A5', '&bot;'));
    encodeMap.i2(to('\u22A5', '&bottom;'));
    encodeMap.i2(to('\u22C8', '&bowtie;'));
    encodeMap.i2(to('\u2557', '&boxDL;'));
    encodeMap.i2(to('\u2554', '&boxDR;'));
    encodeMap.i2(to('\u2556', '&boxDl;'));
    encodeMap.i2(to('\u2553', '&boxDr;'));
    encodeMap.i2(to('\u2550', '&boxH;'));
    encodeMap.i2(to('\u2566', '&boxHD;'));
    encodeMap.i2(to('\u2569', '&boxHU;'));
    encodeMap.i2(to('\u2564', '&boxHd;'));
    encodeMap.i2(to('\u2567', '&boxHu;'));
    encodeMap.i2(to('\u255D', '&boxUL;'));
    encodeMap.i2(to('\u255A', '&boxUR;'));
    encodeMap.i2(to('\u255C', '&boxUl;'));
    encodeMap.i2(to('\u2559', '&boxUr;'));
    encodeMap.i2(to('\u2551', '&boxV;'));
    encodeMap.i2(to('\u256C', '&boxVH;'));
    encodeMap.i2(to('\u2563', '&boxVL;'));
    encodeMap.i2(to('\u2560', '&boxVR;'));
    encodeMap.i2(to('\u256B', '&boxVh;'));
    encodeMap.i2(to('\u2562', '&boxVl;'));
    encodeMap.i2(to('\u255F', '&boxVr;'));
    encodeMap.i2(to('\u29C9', '&boxbox;'));
    encodeMap.i2(to('\u2555', '&boxdL;'));
    encodeMap.i2(to('\u2552', '&boxdR;'));
    encodeMap.i2(to('\u2510', '&boxdl;'));
    encodeMap.i2(to('\u250C', '&boxdr;'));
    encodeMap.i2(to('\u2500', '&boxh;'));
    encodeMap.i2(to('\u2565', '&boxhD;'));
    encodeMap.i2(to('\u2568', '&boxhU;'));
    encodeMap.i2(to('\u252C', '&boxhd;'));
    encodeMap.i2(to('\u2534', '&boxhu;'));
    encodeMap.i2(to('\u229F', '&boxminus;'));
    encodeMap.i2(to('\u229E', '&boxplus;'));
    encodeMap.i2(to('\u22A0', '&boxtimes;'));
    encodeMap.i2(to('\u255B', '&boxuL;'));
    encodeMap.i2(to('\u2558', '&boxuR;'));
    encodeMap.i2(to('\u2518', '&boxul;'));
    encodeMap.i2(to('\u2514', '&boxur;'));
    encodeMap.i2(to('\u2502', '&boxv;'));
    encodeMap.i2(to('\u256A', '&boxvH;'));
    encodeMap.i2(to('\u2561', '&boxvL;'));
    encodeMap.i2(to('\u255E', '&boxvR;'));
    encodeMap.i2(to('\u253C', '&boxvh;'));
    encodeMap.i2(to('\u2524', '&boxvl;'));
    encodeMap.i2(to('\u251C', '&boxvr;'));
    encodeMap.i2(to('\u2035', '&bprime;'));
    encodeMap.i2(to('\u02D8', '&breve;'));
    encodeMap.i2(to('\xA6', '&brvbar'));
    encodeMap.i2(to('\xA6', '&brvbar;'));
    encodeMap.i2(to('\uD835\uDCB7', '&bscr;'));
    encodeMap.i2(to('\u204F', '&bsemi;'));
    encodeMap.i2(to('\u223D', '&bsim;'));
    encodeMap.i2(to('\u22CD', '&bsime;'));
    encodeMap.i2(to('\\', '&bsol;'));
    encodeMap.i2(to('\u29C5', '&bsolb;'));
    encodeMap.i2(to('\u27C8', '&bsolhsub;'));
    encodeMap.i2(to('\u2022', '&bull;'));
    encodeMap.i2(to('\u2022', '&bullet;'));
    encodeMap.i2(to('\u224E', '&bump;'));
    encodeMap.i2(to('\u2AAE', '&bumpE;'));
    encodeMap.i2(to('\u224F', '&bumpe;'));
    encodeMap.i2(to('\u224F', '&bumpeq;'));
    encodeMap.i2(to('\u0107', '&cacute;'));
    encodeMap.i2(to('\u2229', '&cap;'));
    encodeMap.i2(to('\u2A44', '&capand;'));
    encodeMap.i2(to('\u2A49', '&capbrcup;'));
    encodeMap.i2(to('\u2A4B', '&capcap;'));
    encodeMap.i2(to('\u2A47', '&capcup;'));
    encodeMap.i2(to('\u2A40', '&capdot;'));
    encodeMap.i2(to('\u2229\uFE00', '&caps;'));
    encodeMap.i2(to('\u2041', '&caret;'));
    encodeMap.i2(to('\u02C7', '&caron;'));
    encodeMap.i2(to('\u2A4D', '&ccaps;'));
    encodeMap.i2(to('\u010D', '&ccaron;'));
    encodeMap.i2(to('\xE7', '&ccedil'));
    encodeMap.i2(to('\xE7', '&ccedil;'));
    encodeMap.i2(to('\u0109', '&ccirc;'));
    encodeMap.i2(to('\u2A4C', '&ccups;'));
    encodeMap.i2(to('\u2A50', '&ccupssm;'));
    encodeMap.i2(to('\u010B', '&cdot;'));
    encodeMap.i2(to('\xB8', '&cedil'));
    encodeMap.i2(to('\xB8', '&cedil;'));
    encodeMap.i2(to('\u29B2', '&cemptyv;'));
    encodeMap.i2(to('\xA2', '&cent'));
    encodeMap.i2(to('\xA2', '&cent;'));
    encodeMap.i2(to('\xB7', '&centerdot;'));
    encodeMap.i2(to('\uD835\uDD20', '&cfr;'));
    encodeMap.i2(to('\u0447', '&chcy;'));
    encodeMap.i2(to('\u2713', '&check;'));
    encodeMap.i2(to('\u2713', '&checkmark;'));
    encodeMap.i2(to('\u03C7', '&chi;'));
    encodeMap.i2(to('\u25CB', '&cir;'));
    encodeMap.i2(to('\u29C3', '&cirE;'));
    encodeMap.i2(to('\u02C6', '&circ;'));
    encodeMap.i2(to('\u2257', '&circeq;'));
    encodeMap.i2(to('\u21BA', '&circlearrowleft;'));
    encodeMap.i2(to('\u21BB', '&circlearrowright;'));
    encodeMap.i2(to('\xAE', '&circledR;'));
    encodeMap.i2(to('\u24C8', '&circledS;'));
    encodeMap.i2(to('\u229B', '&circledast;'));
    encodeMap.i2(to('\u229A', '&circledcirc;'));
    encodeMap.i2(to('\u229D', '&circleddash;'));
    encodeMap.i2(to('\u2257', '&cire;'));
    encodeMap.i2(to('\u2A10', '&cirfnint;'));
    encodeMap.i2(to('\u2AEF', '&cirmid;'));
    encodeMap.i2(to('\u29C2', '&cirscir;'));
    encodeMap.i2(to('\u2663', '&clubs;'));
    encodeMap.i2(to('\u2663', '&clubsuit;'));
    encodeMap.i2(to(':', '&colon;'));
    encodeMap.i2(to('\u2254', '&colone;'));
    encodeMap.i2(to('\u2254', '&coloneq;'));
    encodeMap.i2(to(',', '&comma;'));
    encodeMap.i2(to('@', '&commat;'));
    encodeMap.i2(to('\u2201', '&comp;'));
    encodeMap.i2(to('\u2218', '&compfn;'));
    encodeMap.i2(to('\u2201', '&complement;'));
    encodeMap.i2(to('\u2102', '&complexes;'));
    encodeMap.i2(to('\u2245', '&cong;'));
    encodeMap.i2(to('\u2A6D', '&congdot;'));
    encodeMap.i2(to('\u222E', '&conint;'));
    encodeMap.i2(to('\uD835\uDD54', '&copf;'));
    encodeMap.i2(to('\u2210', '&coprod;'));
    encodeMap.i2(to('\xA9', '&copy'));
    encodeMap.i2(to('\xA9', '&copy;'));
    encodeMap.i2(to('\u2117', '&copysr;'));
    encodeMap.i2(to('\u21B5', '&crarr;'));
    encodeMap.i2(to('\u2717', '&cross;'));
    encodeMap.i2(to('\uD835\uDCB8', '&cscr;'));
    encodeMap.i2(to('\u2ACF', '&csub;'));
    encodeMap.i2(to('\u2AD1', '&csube;'));
    encodeMap.i2(to('\u2AD0', '&csup;'));
    encodeMap.i2(to('\u2AD2', '&csupe;'));
    encodeMap.i2(to('\u22EF', '&ctdot;'));
    encodeMap.i2(to('\u2938', '&cudarrl;'));
    encodeMap.i2(to('\u2935', '&cudarrr;'));
    encodeMap.i2(to('\u22DE', '&cuepr;'));
    encodeMap.i2(to('\u22DF', '&cuesc;'));
    encodeMap.i2(to('\u21B6', '&cularr;'));
    encodeMap.i2(to('\u293D', '&cularrp;'));
    encodeMap.i2(to('\u222A', '&cup;'));
    encodeMap.i2(to('\u2A48', '&cupbrcap;'));
    encodeMap.i2(to('\u2A46', '&cupcap;'));
    encodeMap.i2(to('\u2A4A', '&cupcup;'));
    encodeMap.i2(to('\u228D', '&cupdot;'));
    encodeMap.i2(to('\u2A45', '&cupor;'));
    encodeMap.i2(to('\u222A\uFE00', '&cups;'));
    encodeMap.i2(to('\u21B7', '&curarr;'));
    encodeMap.i2(to('\u293C', '&curarrm;'));
    encodeMap.i2(to('\u22DE', '&curlyeqprec;'));
    encodeMap.i2(to('\u22DF', '&curlyeqsucc;'));
    encodeMap.i2(to('\u22CE', '&curlyvee;'));
    encodeMap.i2(to('\u22CF', '&curlywedge;'));
    encodeMap.i2(to('\xA4', '&curren'));
    encodeMap.i2(to('\xA4', '&curren;'));
    encodeMap.i2(to('\u21B6', '&curvearrowleft;'));
    encodeMap.i2(to('\u21B7', '&curvearrowright;'));
    encodeMap.i2(to('\u22CE', '&cuvee;'));
    encodeMap.i2(to('\u22CF', '&cuwed;'));
    encodeMap.i2(to('\u2232', '&cwconint;'));
    encodeMap.i2(to('\u2231', '&cwint;'));
    encodeMap.i2(to('\u232D', '&cylcty;'));
    encodeMap.i2(to('\u21D3', '&dArr;'));
    encodeMap.i2(to('\u2965', '&dHar;'));
    encodeMap.i2(to('\u2020', '&dagger;'));
    encodeMap.i2(to('\u2138', '&daleth;'));
    encodeMap.i2(to('\u2193', '&darr;'));
    encodeMap.i2(to('\u2010', '&dash;'));
    encodeMap.i2(to('\u22A3', '&dashv;'));
    encodeMap.i2(to('\u290F', '&dbkarow;'));
    encodeMap.i2(to('\u02DD', '&dblac;'));
    encodeMap.i2(to('\u010F', '&dcaron;'));
    encodeMap.i2(to('\u0434', '&dcy;'));
    encodeMap.i2(to('\u2146', '&dd;'));
    encodeMap.i2(to('\u2021', '&ddagger;'));
    encodeMap.i2(to('\u21CA', '&ddarr;'));
    encodeMap.i2(to('\u2A77', '&ddotseq;'));
    encodeMap.i2(to('\xB0', '&deg'));
    encodeMap.i2(to('\xB0', '&deg;'));
    encodeMap.i2(to('\u03B4', '&delta;'));
    encodeMap.i2(to('\u29B1', '&demptyv;'));
    encodeMap.i2(to('\u297F', '&dfisht;'));
    encodeMap.i2(to('\uD835\uDD21', '&dfr;'));
    encodeMap.i2(to('\u21C3', '&dharl;'));
    encodeMap.i2(to('\u21C2', '&dharr;'));
    encodeMap.i2(to('\u22C4', '&diam;'));
    encodeMap.i2(to('\u22C4', '&diamond;'));
    encodeMap.i2(to('\u2666', '&diamondsuit;'));
    encodeMap.i2(to('\u2666', '&diams;'));
    encodeMap.i2(to('\xA8', '&die;'));
    encodeMap.i2(to('\u03DD', '&digamma;'));
    encodeMap.i2(to('\u22F2', '&disin;'));
    encodeMap.i2(to('\xF7', '&div;'));
    encodeMap.i2(to('\xF7', '&divide'));
    encodeMap.i2(to('\xF7', '&divide;'));
    encodeMap.i2(to('\u22C7', '&divideontimes;'));
    encodeMap.i2(to('\u22C7', '&divonx;'));
    encodeMap.i2(to('\u0452', '&djcy;'));
    encodeMap.i2(to('\u231E', '&dlcorn;'));
    encodeMap.i2(to('\u230D', '&dlcrop;'));
    encodeMap.i2(to('$', '&dollar;'));
    encodeMap.i2(to('\uD835\uDD55', '&dopf;'));
    encodeMap.i2(to('\u02D9', '&dot;'));
    encodeMap.i2(to('\u2250', '&doteq;'));
    encodeMap.i2(to('\u2251', '&doteqdot;'));
    encodeMap.i2(to('\u2238', '&dotminus;'));
    encodeMap.i2(to('\u2214', '&dotplus;'));
    encodeMap.i2(to('\u22A1', '&dotsquare;'));
    encodeMap.i2(to('\u2306', '&doublebarwedge;'));
    encodeMap.i2(to('\u2193', '&downarrow;'));
    encodeMap.i2(to('\u21CA', '&downdownarrows;'));
    encodeMap.i2(to('\u21C3', '&downharpoonleft;'));
    encodeMap.i2(to('\u21C2', '&downharpoonright;'));
    encodeMap.i2(to('\u2910', '&drbkarow;'));
    encodeMap.i2(to('\u231F', '&drcorn;'));
    encodeMap.i2(to('\u230C', '&drcrop;'));
    encodeMap.i2(to('\uD835\uDCB9', '&dscr;'));
    encodeMap.i2(to('\u0455', '&dscy;'));
    encodeMap.i2(to('\u29F6', '&dsol;'));
    encodeMap.i2(to('\u0111', '&dstrok;'));
    encodeMap.i2(to('\u22F1', '&dtdot;'));
    encodeMap.i2(to('\u25BF', '&dtri;'));
    encodeMap.i2(to('\u25BE', '&dtrif;'));
    encodeMap.i2(to('\u21F5', '&duarr;'));
    encodeMap.i2(to('\u296F', '&duhar;'));
    encodeMap.i2(to('\u29A6', '&dwangle;'));
    encodeMap.i2(to('\u045F', '&dzcy;'));
    encodeMap.i2(to('\u27FF', '&dzigrarr;'));
    encodeMap.i2(to('\u2A77', '&eDDot;'));
    encodeMap.i2(to('\u2251', '&eDot;'));
    encodeMap.i2(to('\xE9', '&eacute'));
    encodeMap.i2(to('\xE9', '&eacute;'));
    encodeMap.i2(to('\u2A6E', '&easter;'));
    encodeMap.i2(to('\u011B', '&ecaron;'));
    encodeMap.i2(to('\u2256', '&ecir;'));
    encodeMap.i2(to('\xEA', '&ecirc'));
    encodeMap.i2(to('\xEA', '&ecirc;'));
    encodeMap.i2(to('\u2255', '&ecolon;'));
    encodeMap.i2(to('\u044D', '&ecy;'));
    encodeMap.i2(to('\u0117', '&edot;'));
    encodeMap.i2(to('\u2147', '&ee;'));
    encodeMap.i2(to('\u2252', '&efDot;'));
    encodeMap.i2(to('\uD835\uDD22', '&efr;'));
    encodeMap.i2(to('\u2A9A', '&eg;'));
    encodeMap.i2(to('\xE8', '&egrave'));
    encodeMap.i2(to('\xE8', '&egrave;'));
    encodeMap.i2(to('\u2A96', '&egs;'));
    encodeMap.i2(to('\u2A98', '&egsdot;'));
    encodeMap.i2(to('\u2A99', '&el;'));
    encodeMap.i2(to('\u23E7', '&elinters;'));
    encodeMap.i2(to('\u2113', '&ell;'));
    encodeMap.i2(to('\u2A95', '&els;'));
    encodeMap.i2(to('\u2A97', '&elsdot;'));
    encodeMap.i2(to('\u0113', '&emacr;'));
    encodeMap.i2(to('\u2205', '&empty;'));
    encodeMap.i2(to('\u2205', '&emptyset;'));
    encodeMap.i2(to('\u2205', '&emptyv;'));
    encodeMap.i2(to('\u2004', '&emsp13;'));
    encodeMap.i2(to('\u2005', '&emsp14;'));
    encodeMap.i2(to('\u2003', '&emsp;'));
    encodeMap.i2(to('\u014B', '&eng;'));
    encodeMap.i2(to('\u2002', '&ensp;'));
    encodeMap.i2(to('\u0119', '&eogon;'));
    encodeMap.i2(to('\uD835\uDD56', '&eopf;'));
    encodeMap.i2(to('\u22D5', '&epar;'));
    encodeMap.i2(to('\u29E3', '&eparsl;'));
    encodeMap.i2(to('\u2A71', '&eplus;'));
    encodeMap.i2(to('\u03B5', '&epsi;'));
    encodeMap.i2(to('\u03B5', '&epsilon;'));
    encodeMap.i2(to('\u03F5', '&epsiv;'));
    encodeMap.i2(to('\u2256', '&eqcirc;'));
    encodeMap.i2(to('\u2255', '&eqcolon;'));
    encodeMap.i2(to('\u2242', '&eqsim;'));
    encodeMap.i2(to('\u2A96', '&eqslantgtr;'));
    encodeMap.i2(to('\u2A95', '&eqslantless;'));
    encodeMap.i2(to('=', '&equals;'));
    encodeMap.i2(to('\u225F', '&equest;'));
    encodeMap.i2(to('\u2261', '&equiv;'));
    encodeMap.i2(to('\u2A78', '&equivDD;'));
    encodeMap.i2(to('\u29E5', '&eqvparsl;'));
    encodeMap.i2(to('\u2253', '&erDot;'));
    encodeMap.i2(to('\u2971', '&erarr;'));
    encodeMap.i2(to('\u212F', '&escr;'));
    encodeMap.i2(to('\u2250', '&esdot;'));
    encodeMap.i2(to('\u2242', '&esim;'));
    encodeMap.i2(to('\u03B7', '&eta;'));
    encodeMap.i2(to('\xF0', '&eth'));
    encodeMap.i2(to('\xF0', '&eth;'));
    encodeMap.i2(to('\xEB', '&euml'));
    encodeMap.i2(to('\xEB', '&euml;'));
    encodeMap.i2(to('\u20AC', '&euro;'));
    encodeMap.i2(to('!', '&excl;'));
    encodeMap.i2(to('\u2203', '&exist;'));
    encodeMap.i2(to('\u2130', '&expectation;'));
    encodeMap.i2(to('\u2147', '&exponentiale;'));
    encodeMap.i2(to('\u2252', '&fallingdotseq;'));
    encodeMap.i2(to('\u0444', '&fcy;'));
    encodeMap.i2(to('\u2640', '&female;'));
    encodeMap.i2(to('\uFB03', '&ffilig;'));
    encodeMap.i2(to('\uFB00', '&fflig;'));
    encodeMap.i2(to('\uFB04', '&ffllig;'));
    encodeMap.i2(to('\uD835\uDD23', '&ffr;'));
    encodeMap.i2(to('\uFB01', '&filig;'));
    encodeMap.i2(to('fj', '&fjlig;'));
    encodeMap.i2(to('\u266D', '&flat;'));
    encodeMap.i2(to('\uFB02', '&fllig;'));
    encodeMap.i2(to('\u25B1', '&fltns;'));
    encodeMap.i2(to('\u0192', '&fnof;'));
    encodeMap.i2(to('\uD835\uDD57', '&fopf;'));
    encodeMap.i2(to('\u2200', '&forall;'));
    encodeMap.i2(to('\u22D4', '&fork;'));
    encodeMap.i2(to('\u2AD9', '&forkv;'));
    encodeMap.i2(to('\u2A0D', '&fpartint;'));
    encodeMap.i2(to('\xBD', '&frac12'));
    encodeMap.i2(to('\xBD', '&frac12;'));
    encodeMap.i2(to('\u2153', '&frac13;'));
    encodeMap.i2(to('\xBC', '&frac14'));
    encodeMap.i2(to('\xBC', '&frac14;'));
    encodeMap.i2(to('\u2155', '&frac15;'));
    encodeMap.i2(to('\u2159', '&frac16;'));
    encodeMap.i2(to('\u215B', '&frac18;'));
    encodeMap.i2(to('\u2154', '&frac23;'));
    encodeMap.i2(to('\u2156', '&frac25;'));
    encodeMap.i2(to('\xBE', '&frac34'));
    encodeMap.i2(to('\xBE', '&frac34;'));
    encodeMap.i2(to('\u2157', '&frac35;'));
    encodeMap.i2(to('\u215C', '&frac38;'));
    encodeMap.i2(to('\u2158', '&frac45;'));
    encodeMap.i2(to('\u215A', '&frac56;'));
    encodeMap.i2(to('\u215D', '&frac58;'));
    encodeMap.i2(to('\u215E', '&frac78;'));
    encodeMap.i2(to('\u2044', '&frasl;'));
    encodeMap.i2(to('\u2322', '&frown;'));
    encodeMap.i2(to('\uD835\uDCBB', '&fscr;'));
    encodeMap.i2(to('\u2267', '&gE;'));
    encodeMap.i2(to('\u2A8C', '&gEl;'));
    encodeMap.i2(to('\u01F5', '&gacute;'));
    encodeMap.i2(to('\u03B3', '&gamma;'));
    encodeMap.i2(to('\u03DD', '&gammad;'));
    encodeMap.i2(to('\u2A86', '&gap;'));
    encodeMap.i2(to('\u011F', '&gbreve;'));
    encodeMap.i2(to('\u011D', '&gcirc;'));
    encodeMap.i2(to('\u0433', '&gcy;'));
    encodeMap.i2(to('\u0121', '&gdot;'));
    encodeMap.i2(to('\u2265', '&ge;'));
    encodeMap.i2(to('\u22DB', '&gel;'));
    encodeMap.i2(to('\u2265', '&geq;'));
    encodeMap.i2(to('\u2267', '&geqq;'));
    encodeMap.i2(to('\u2A7E', '&geqslant;'));
    encodeMap.i2(to('\u2A7E', '&ges;'));
    encodeMap.i2(to('\u2AA9', '&gescc;'));
    encodeMap.i2(to('\u2A80', '&gesdot;'));
    encodeMap.i2(to('\u2A82', '&gesdoto;'));
    encodeMap.i2(to('\u2A84', '&gesdotol;'));
    encodeMap.i2(to('\u22DB\uFE00', '&gesl;'));
    encodeMap.i2(to('\u2A94', '&gesles;'));
    encodeMap.i2(to('\uD835\uDD24', '&gfr;'));
    encodeMap.i2(to('\u226B', '&gg;'));
    encodeMap.i2(to('\u22D9', '&ggg;'));
    encodeMap.i2(to('\u2137', '&gimel;'));
    encodeMap.i2(to('\u0453', '&gjcy;'));
    encodeMap.i2(to('\u2277', '&gl;'));
    encodeMap.i2(to('\u2A92', '&glE;'));
    encodeMap.i2(to('\u2AA5', '&gla;'));
    encodeMap.i2(to('\u2AA4', '&glj;'));
    encodeMap.i2(to('\u2269', '&gnE;'));
    encodeMap.i2(to('\u2A8A', '&gnap;'));
    encodeMap.i2(to('\u2A8A', '&gnapprox;'));
    encodeMap.i2(to('\u2A88', '&gne;'));
    encodeMap.i2(to('\u2A88', '&gneq;'));
    encodeMap.i2(to('\u2269', '&gneqq;'));
    encodeMap.i2(to('\u22E7', '&gnsim;'));
    encodeMap.i2(to('\uD835\uDD58', '&gopf;'));
    encodeMap.i2(to('`', '&grave;'));
    encodeMap.i2(to('\u210A', '&gscr;'));
    encodeMap.i2(to('\u2273', '&gsim;'));
    encodeMap.i2(to('\u2A8E', '&gsime;'));
    encodeMap.i2(to('\u2A90', '&gsiml;'));
    encodeMap.i2(to('>', '&gt'));
    encodeMap.i2(to('>', '&gt;'));
    encodeMap.i2(to('\u2AA7', '&gtcc;'));
    encodeMap.i2(to('\u2A7A', '&gtcir;'));
    encodeMap.i2(to('\u22D7', '&gtdot;'));
    encodeMap.i2(to('\u2995', '&gtlPar;'));
    encodeMap.i2(to('\u2A7C', '&gtquest;'));
    encodeMap.i2(to('\u2A86', '&gtrapprox;'));
    encodeMap.i2(to('\u2978', '&gtrarr;'));
    encodeMap.i2(to('\u22D7', '&gtrdot;'));
    encodeMap.i2(to('\u22DB', '&gtreqless;'));
    encodeMap.i2(to('\u2A8C', '&gtreqqless;'));
    encodeMap.i2(to('\u2277', '&gtrless;'));
    encodeMap.i2(to('\u2273', '&gtrsim;'));
    encodeMap.i2(to('\u2269\uFE00', '&gvertneqq;'));
    encodeMap.i2(to('\u2269\uFE00', '&gvnE;'));
    encodeMap.i2(to('\u21D4', '&hArr;'));
    encodeMap.i2(to('\u200A', '&hairsp;'));
    encodeMap.i2(to('\xBD', '&half;'));
    encodeMap.i2(to('\u210B', '&hamilt;'));
    encodeMap.i2(to('\u044A', '&hardcy;'));
    encodeMap.i2(to('\u2194', '&harr;'));
    encodeMap.i2(to('\u2948', '&harrcir;'));
    encodeMap.i2(to('\u21AD', '&harrw;'));
    encodeMap.i2(to('\u210F', '&hbar;'));
    encodeMap.i2(to('\u0125', '&hcirc;'));
    encodeMap.i2(to('\u2665', '&hearts;'));
    encodeMap.i2(to('\u2665', '&heartsuit;'));
    encodeMap.i2(to('\u2026', '&hellip;'));
    encodeMap.i2(to('\u22B9', '&hercon;'));
    encodeMap.i2(to('\uD835\uDD25', '&hfr;'));
    encodeMap.i2(to('\u2925', '&hksearow;'));
    encodeMap.i2(to('\u2926', '&hkswarow;'));
    encodeMap.i2(to('\u21FF', '&hoarr;'));
    encodeMap.i2(to('\u223B', '&homtht;'));
    encodeMap.i2(to('\u21A9', '&hookleftarrow;'));
    encodeMap.i2(to('\u21AA', '&hookrightarrow;'));
    encodeMap.i2(to('\uD835\uDD59', '&hopf;'));
    encodeMap.i2(to('\u2015', '&horbar;'));
    encodeMap.i2(to('\uD835\uDCBD', '&hscr;'));
    encodeMap.i2(to('\u210F', '&hslash;'));
    encodeMap.i2(to('\u0127', '&hstrok;'));
    encodeMap.i2(to('\u2043', '&hybull;'));
    encodeMap.i2(to('\u2010', '&hyphen;'));
    encodeMap.i2(to('\xED', '&iacute'));
    encodeMap.i2(to('\xED', '&iacute;'));
    encodeMap.i2(to('\u2063', '&ic;'));
    encodeMap.i2(to('\xEE', '&icirc'));
    encodeMap.i2(to('\xEE', '&icirc;'));
    encodeMap.i2(to('\u0438', '&icy;'));
    encodeMap.i2(to('\u0435', '&iecy;'));
    encodeMap.i2(to('\xA1', '&iexcl'));
    encodeMap.i2(to('\xA1', '&iexcl;'));
    encodeMap.i2(to('\u21D4', '&iff;'));
    encodeMap.i2(to('\uD835\uDD26', '&ifr;'));
    encodeMap.i2(to('\xEC', '&igrave'));
    encodeMap.i2(to('\xEC', '&igrave;'));
    encodeMap.i2(to('\u2148', '&ii;'));
    encodeMap.i2(to('\u2A0C', '&iiiint;'));
    encodeMap.i2(to('\u222D', '&iiint;'));
    encodeMap.i2(to('\u29DC', '&iinfin;'));
    encodeMap.i2(to('\u2129', '&iiota;'));
    encodeMap.i2(to('\u0133', '&ijlig;'));
    encodeMap.i2(to('\u012B', '&imacr;'));
    encodeMap.i2(to('\u2111', '&image;'));
    encodeMap.i2(to('\u2110', '&imagline;'));
    encodeMap.i2(to('\u2111', '&imagpart;'));
    encodeMap.i2(to('\u0131', '&imath;'));
    encodeMap.i2(to('\u22B7', '&imof;'));
    encodeMap.i2(to('\u01B5', '&imped;'));
    encodeMap.i2(to('\u2208', '&in;'));
    encodeMap.i2(to('\u2105', '&incare;'));
    encodeMap.i2(to('\u221E', '&infin;'));
    encodeMap.i2(to('\u29DD', '&infintie;'));
    encodeMap.i2(to('\u0131', '&inodot;'));
    encodeMap.i2(to('\u222B', '&int;'));
    encodeMap.i2(to('\u22BA', '&intcal;'));
    encodeMap.i2(to('\u2124', '&integers;'));
    encodeMap.i2(to('\u22BA', '&intercal;'));
    encodeMap.i2(to('\u2A17', '&intlarhk;'));
    encodeMap.i2(to('\u2A3C', '&intprod;'));
    encodeMap.i2(to('\u0451', '&iocy;'));
    encodeMap.i2(to('\u012F', '&iogon;'));
    encodeMap.i2(to('\uD835\uDD5A', '&iopf;'));
    encodeMap.i2(to('\u03B9', '&iota;'));
    encodeMap.i2(to('\u2A3C', '&iprod;'));
    encodeMap.i2(to('\xBF', '&iquest'));
    encodeMap.i2(to('\xBF', '&iquest;'));
    encodeMap.i2(to('\uD835\uDCBE', '&iscr;'));
    encodeMap.i2(to('\u2208', '&isin;'));
    encodeMap.i2(to('\u22F9', '&isinE;'));
    encodeMap.i2(to('\u22F5', '&isindot;'));
    encodeMap.i2(to('\u22F4', '&isins;'));
    encodeMap.i2(to('\u22F3', '&isinsv;'));
    encodeMap.i2(to('\u2208', '&isinv;'));
    encodeMap.i2(to('\u2062', '&it;'));
    encodeMap.i2(to('\u0129', '&itilde;'));
    encodeMap.i2(to('\u0456', '&iukcy;'));
    encodeMap.i2(to('\xEF', '&iuml'));
    encodeMap.i2(to('\xEF', '&iuml;'));
    encodeMap.i2(to('\u0135', '&jcirc;'));
    encodeMap.i2(to('\u0439', '&jcy;'));
    encodeMap.i2(to('\uD835\uDD27', '&jfr;'));
    encodeMap.i2(to('\u0237', '&jmath;'));
    encodeMap.i2(to('\uD835\uDD5B', '&jopf;'));
    encodeMap.i2(to('\uD835\uDCBF', '&jscr;'));
    encodeMap.i2(to('\u0458', '&jsercy;'));
    encodeMap.i2(to('\u0454', '&jukcy;'));
    encodeMap.i2(to('\u03BA', '&kappa;'));
    encodeMap.i2(to('\u03F0', '&kappav;'));
    encodeMap.i2(to('\u0137', '&kcedil;'));
    encodeMap.i2(to('\u043A', '&kcy;'));
    encodeMap.i2(to('\uD835\uDD28', '&kfr;'));
    encodeMap.i2(to('\u0138', '&kgreen;'));
    encodeMap.i2(to('\u0445', '&khcy;'));
    encodeMap.i2(to('\u045C', '&kjcy;'));
    encodeMap.i2(to('\uD835\uDD5C', '&kopf;'));
    encodeMap.i2(to('\uD835\uDCC0', '&kscr;'));
    encodeMap.i2(to('\u21DA', '&lAarr;'));
    encodeMap.i2(to('\u21D0', '&lArr;'));
    encodeMap.i2(to('\u291B', '&lAtail;'));
    encodeMap.i2(to('\u290E', '&lBarr;'));
    encodeMap.i2(to('\u2266', '&lE;'));
    encodeMap.i2(to('\u2A8B', '&lEg;'));
    encodeMap.i2(to('\u2962', '&lHar;'));
    encodeMap.i2(to('\u013A', '&lacute;'));
    encodeMap.i2(to('\u29B4', '&laemptyv;'));
    encodeMap.i2(to('\u2112', '&lagran;'));
    encodeMap.i2(to('\u03BB', '&lambda;'));
    encodeMap.i2(to('\u27E8', '&lang;'));
    encodeMap.i2(to('\u2991', '&langd;'));
    encodeMap.i2(to('\u27E8', '&langle;'));
    encodeMap.i2(to('\u2A85', '&lap;'));
    encodeMap.i2(to('\xAB', '&laquo'));
    encodeMap.i2(to('\xAB', '&laquo;'));
    encodeMap.i2(to('\u2190', '&larr;'));
    encodeMap.i2(to('\u21E4', '&larrb;'));
    encodeMap.i2(to('\u291F', '&larrbfs;'));
    encodeMap.i2(to('\u291D', '&larrfs;'));
    encodeMap.i2(to('\u21A9', '&larrhk;'));
    encodeMap.i2(to('\u21AB', '&larrlp;'));
    encodeMap.i2(to('\u2939', '&larrpl;'));
    encodeMap.i2(to('\u2973', '&larrsim;'));
    encodeMap.i2(to('\u21A2', '&larrtl;'));
    encodeMap.i2(to('\u2AAB', '&lat;'));
    encodeMap.i2(to('\u2919', '&latail;'));
    encodeMap.i2(to('\u2AAD', '&late;'));
    encodeMap.i2(to('\u2AAD\uFE00', '&lates;'));
    encodeMap.i2(to('\u290C', '&lbarr;'));
    encodeMap.i2(to('\u2772', '&lbbrk;'));
    encodeMap.i2(to('{', '&lbrace;'));
    encodeMap.i2(to('[', '&lbrack;'));
    encodeMap.i2(to('\u298B', '&lbrke;'));
    encodeMap.i2(to('\u298F', '&lbrksld;'));
    encodeMap.i2(to('\u298D', '&lbrkslu;'));
    encodeMap.i2(to('\u013E', '&lcaron;'));
    encodeMap.i2(to('\u013C', '&lcedil;'));
    encodeMap.i2(to('\u2308', '&lceil;'));
    encodeMap.i2(to('{', '&lcub;'));
    encodeMap.i2(to('\u043B', '&lcy;'));
    encodeMap.i2(to('\u2936', '&ldca;'));
    encodeMap.i2(to('\u201C', '&ldquo;'));
    encodeMap.i2(to('\u201E', '&ldquor;'));
    encodeMap.i2(to('\u2967', '&ldrdhar;'));
    encodeMap.i2(to('\u294B', '&ldrushar;'));
    encodeMap.i2(to('\u21B2', '&ldsh;'));
    encodeMap.i2(to('\u2264', '&le;'));
    encodeMap.i2(to('\u2190', '&leftarrow;'));
    encodeMap.i2(to('\u21A2', '&leftarrowtail;'));
    encodeMap.i2(to('\u21BD', '&leftharpoondown;'));
    encodeMap.i2(to('\u21BC', '&leftharpoonup;'));
    encodeMap.i2(to('\u21C7', '&leftleftarrows;'));
    encodeMap.i2(to('\u2194', '&leftrightarrow;'));
    encodeMap.i2(to('\u21C6', '&leftrightarrows;'));
    encodeMap.i2(to('\u21CB', '&leftrightharpoons;'));
    encodeMap.i2(to('\u21AD', '&leftrightsquigarrow;'));
    encodeMap.i2(to('\u22CB', '&leftthreetimes;'));
    encodeMap.i2(to('\u22DA', '&leg;'));
    encodeMap.i2(to('\u2264', '&leq;'));
    encodeMap.i2(to('\u2266', '&leqq;'));
    encodeMap.i2(to('\u2A7D', '&leqslant;'));
    encodeMap.i2(to('\u2A7D', '&les;'));
    encodeMap.i2(to('\u2AA8', '&lescc;'));
    encodeMap.i2(to('\u2A7F', '&lesdot;'));
    encodeMap.i2(to('\u2A81', '&lesdoto;'));
    encodeMap.i2(to('\u2A83', '&lesdotor;'));
    encodeMap.i2(to('\u22DA\uFE00', '&lesg;'));
    encodeMap.i2(to('\u2A93', '&lesges;'));
    encodeMap.i2(to('\u2A85', '&lessapprox;'));
    encodeMap.i2(to('\u22D6', '&lessdot;'));
    encodeMap.i2(to('\u22DA', '&lesseqgtr;'));
    encodeMap.i2(to('\u2A8B', '&lesseqqgtr;'));
    encodeMap.i2(to('\u2276', '&lessgtr;'));
    encodeMap.i2(to('\u2272', '&lesssim;'));
    encodeMap.i2(to('\u297C', '&lfisht;'));
    encodeMap.i2(to('\u230A', '&lfloor;'));
    encodeMap.i2(to('\uD835\uDD29', '&lfr;'));
    encodeMap.i2(to('\u2276', '&lg;'));
    encodeMap.i2(to('\u2A91', '&lgE;'));
    encodeMap.i2(to('\u21BD', '&lhard;'));
    encodeMap.i2(to('\u21BC', '&lharu;'));
    encodeMap.i2(to('\u296A', '&lharul;'));
    encodeMap.i2(to('\u2584', '&lhblk;'));
    encodeMap.i2(to('\u0459', '&ljcy;'));
    encodeMap.i2(to('\u226A', '&ll;'));
    encodeMap.i2(to('\u21C7', '&llarr;'));
    encodeMap.i2(to('\u231E', '&llcorner;'));
    encodeMap.i2(to('\u296B', '&llhard;'));
    encodeMap.i2(to('\u25FA', '&lltri;'));
    encodeMap.i2(to('\u0140', '&lmidot;'));
    encodeMap.i2(to('\u23B0', '&lmoust;'));
    encodeMap.i2(to('\u23B0', '&lmoustache;'));
    encodeMap.i2(to('\u2268', '&lnE;'));
    encodeMap.i2(to('\u2A89', '&lnap;'));
    encodeMap.i2(to('\u2A89', '&lnapprox;'));
    encodeMap.i2(to('\u2A87', '&lne;'));
    encodeMap.i2(to('\u2A87', '&lneq;'));
    encodeMap.i2(to('\u2268', '&lneqq;'));
    encodeMap.i2(to('\u22E6', '&lnsim;'));
    encodeMap.i2(to('\u27EC', '&loang;'));
    encodeMap.i2(to('\u21FD', '&loarr;'));
    encodeMap.i2(to('\u27E6', '&lobrk;'));
    encodeMap.i2(to('\u27F5', '&longleftarrow;'));
    encodeMap.i2(to('\u27F7', '&longleftrightarrow;'));
    encodeMap.i2(to('\u27FC', '&longmapsto;'));
    encodeMap.i2(to('\u27F6', '&longrightarrow;'));
    encodeMap.i2(to('\u21AB', '&looparrowleft;'));
    encodeMap.i2(to('\u21AC', '&looparrowright;'));
    encodeMap.i2(to('\u2985', '&lopar;'));
    encodeMap.i2(to('\uD835\uDD5D', '&lopf;'));
    encodeMap.i2(to('\u2A2D', '&loplus;'));
    encodeMap.i2(to('\u2A34', '&lotimes;'));
    encodeMap.i2(to('\u2217', '&lowast;'));
    encodeMap.i2(to('_', '&lowbar;'));
    encodeMap.i2(to('\u25CA', '&loz;'));
    encodeMap.i2(to('\u25CA', '&lozenge;'));
    encodeMap.i2(to('\u29EB', '&lozf;'));
    encodeMap.i2(to('(', '&lpar;'));
    encodeMap.i2(to('\u2993', '&lparlt;'));
    encodeMap.i2(to('\u21C6', '&lrarr;'));
    encodeMap.i2(to('\u231F', '&lrcorner;'));
    encodeMap.i2(to('\u21CB', '&lrhar;'));
    encodeMap.i2(to('\u296D', '&lrhard;'));
    encodeMap.i2(to('\u200E', '&lrm;'));
    encodeMap.i2(to('\u22BF', '&lrtri;'));
    encodeMap.i2(to('\u2039', '&lsaquo;'));
    encodeMap.i2(to('\uD835\uDCC1', '&lscr;'));
    encodeMap.i2(to('\u21B0', '&lsh;'));
    encodeMap.i2(to('\u2272', '&lsim;'));
    encodeMap.i2(to('\u2A8D', '&lsime;'));
    encodeMap.i2(to('\u2A8F', '&lsimg;'));
    encodeMap.i2(to('[', '&lsqb;'));
    encodeMap.i2(to('\u2018', '&lsquo;'));
    encodeMap.i2(to('\u201A', '&lsquor;'));
    encodeMap.i2(to('\u0142', '&lstrok;'));
    encodeMap.i2(to('<', '&lt'));
    encodeMap.i2(to('<', '&lt;'));
    encodeMap.i2(to('\u2AA6', '&ltcc;'));
    encodeMap.i2(to('\u2A79', '&ltcir;'));
    encodeMap.i2(to('\u22D6', '&ltdot;'));
    encodeMap.i2(to('\u22CB', '&lthree;'));
    encodeMap.i2(to('\u22C9', '&ltimes;'));
    encodeMap.i2(to('\u2976', '&ltlarr;'));
    encodeMap.i2(to('\u2A7B', '&ltquest;'));
    encodeMap.i2(to('\u2996', '&ltrPar;'));
    encodeMap.i2(to('\u25C3', '&ltri;'));
    encodeMap.i2(to('\u22B4', '&ltrie;'));
    encodeMap.i2(to('\u25C2', '&ltrif;'));
    encodeMap.i2(to('\u294A', '&lurdshar;'));
    encodeMap.i2(to('\u2966', '&luruhar;'));
    encodeMap.i2(to('\u2268\uFE00', '&lvertneqq;'));
    encodeMap.i2(to('\u2268\uFE00', '&lvnE;'));
    encodeMap.i2(to('\u223A', '&mDDot;'));
    encodeMap.i2(to('\xAF', '&macr'));
    encodeMap.i2(to('\xAF', '&macr;'));
    encodeMap.i2(to('\u2642', '&male;'));
    encodeMap.i2(to('\u2720', '&malt;'));
    encodeMap.i2(to('\u2720', '&maltese;'));
    encodeMap.i2(to('\u21A6', '&map;'));
    encodeMap.i2(to('\u21A6', '&mapsto;'));
    encodeMap.i2(to('\u21A7', '&mapstodown;'));
    encodeMap.i2(to('\u21A4', '&mapstoleft;'));
    encodeMap.i2(to('\u21A5', '&mapstoup;'));
    encodeMap.i2(to('\u25AE', '&marker;'));
    encodeMap.i2(to('\u2A29', '&mcomma;'));
    encodeMap.i2(to('\u043C', '&mcy;'));
    encodeMap.i2(to('\u2014', '&mdash;'));
    encodeMap.i2(to('\u2221', '&measuredangle;'));
    encodeMap.i2(to('\uD835\uDD2A', '&mfr;'));
    encodeMap.i2(to('\u2127', '&mho;'));
    encodeMap.i2(to('\xB5', '&micro'));
    encodeMap.i2(to('\xB5', '&micro;'));
    encodeMap.i2(to('\u2223', '&mid;'));
    encodeMap.i2(to('*', '&midast;'));
    encodeMap.i2(to('\u2AF0', '&midcir;'));
    encodeMap.i2(to('\xB7', '&middot'));
    encodeMap.i2(to('\xB7', '&middot;'));
    encodeMap.i2(to('\u2212', '&minus;'));
    encodeMap.i2(to('\u229F', '&minusb;'));
    encodeMap.i2(to('\u2238', '&minusd;'));
    encodeMap.i2(to('\u2A2A', '&minusdu;'));
    encodeMap.i2(to('\u2ADB', '&mlcp;'));
    encodeMap.i2(to('\u2026', '&mldr;'));
    encodeMap.i2(to('\u2213', '&mnplus;'));
    encodeMap.i2(to('\u22A7', '&models;'));
    encodeMap.i2(to('\uD835\uDD5E', '&mopf;'));
    encodeMap.i2(to('\u2213', '&mp;'));
    encodeMap.i2(to('\uD835\uDCC2', '&mscr;'));
    encodeMap.i2(to('\u223E', '&mstpos;'));
    encodeMap.i2(to('\u03BC', '&mu;'));
    encodeMap.i2(to('\u22B8', '&multimap;'));
    encodeMap.i2(to('\u22B8', '&mumap;'));
    encodeMap.i2(to('\u22D9\u0338', '&nGg;'));
    encodeMap.i2(to('\u226B\u20D2', '&nGt;'));
    encodeMap.i2(to('\u226B\u0338', '&nGtv;'));
    encodeMap.i2(to('\u21CD', '&nLeftarrow;'));
    encodeMap.i2(to('\u21CE', '&nLeftrightarrow;'));
    encodeMap.i2(to('\u22D8\u0338', '&nLl;'));
    encodeMap.i2(to('\u226A\u20D2', '&nLt;'));
    encodeMap.i2(to('\u226A\u0338', '&nLtv;'));
    encodeMap.i2(to('\u21CF', '&nRightarrow;'));
    encodeMap.i2(to('\u22AF', '&nVDash;'));
    encodeMap.i2(to('\u22AE', '&nVdash;'));
    encodeMap.i2(to('\u2207', '&nabla;'));
    encodeMap.i2(to('\u0144', '&nacute;'));
    encodeMap.i2(to('\u2220\u20D2', '&nang;'));
    encodeMap.i2(to('\u2249', '&nap;'));
    encodeMap.i2(to('\u2A70\u0338', '&napE;'));
    encodeMap.i2(to('\u224B\u0338', '&napid;'));
    encodeMap.i2(to('\u0149', '&napos;'));
    encodeMap.i2(to('\u2249', '&napprox;'));
    encodeMap.i2(to('\u266E', '&natur;'));
    encodeMap.i2(to('\u266E', '&natural;'));
    encodeMap.i2(to('\u2115', '&naturals;'));
    encodeMap.i2(to('\xA0', '&nbsp'));
    encodeMap.i2(to('\xA0', '&nbsp;'));
    encodeMap.i2(to('\u224E\u0338', '&nbump;'));
    encodeMap.i2(to('\u224F\u0338', '&nbumpe;'));
    encodeMap.i2(to('\u2A43', '&ncap;'));
    encodeMap.i2(to('\u0148', '&ncaron;'));
    encodeMap.i2(to('\u0146', '&ncedil;'));
    encodeMap.i2(to('\u2247', '&ncong;'));
    encodeMap.i2(to('\u2A6D\u0338', '&ncongdot;'));
    encodeMap.i2(to('\u2A42', '&ncup;'));
    encodeMap.i2(to('\u043D', '&ncy;'));
    encodeMap.i2(to('\u2013', '&ndash;'));
    encodeMap.i2(to('\u2260', '&ne;'));
    encodeMap.i2(to('\u21D7', '&neArr;'));
    encodeMap.i2(to('\u2924', '&nearhk;'));
    encodeMap.i2(to('\u2197', '&nearr;'));
    encodeMap.i2(to('\u2197', '&nearrow;'));
    encodeMap.i2(to('\u2250\u0338', '&nedot;'));
    encodeMap.i2(to('\u2262', '&nequiv;'));
    encodeMap.i2(to('\u2928', '&nesear;'));
    encodeMap.i2(to('\u2242\u0338', '&nesim;'));
    encodeMap.i2(to('\u2204', '&nexist;'));
    encodeMap.i2(to('\u2204', '&nexists;'));
    encodeMap.i2(to('\uD835\uDD2B', '&nfr;'));
    encodeMap.i2(to('\u2267\u0338', '&ngE;'));
    encodeMap.i2(to('\u2271', '&nge;'));
    encodeMap.i2(to('\u2271', '&ngeq;'));
    encodeMap.i2(to('\u2267\u0338', '&ngeqq;'));
    encodeMap.i2(to('\u2A7E\u0338', '&ngeqslant;'));
    encodeMap.i2(to('\u2A7E\u0338', '&nges;'));
    encodeMap.i2(to('\u2275', '&ngsim;'));
    encodeMap.i2(to('\u226F', '&ngt;'));
    encodeMap.i2(to('\u226F', '&ngtr;'));
    encodeMap.i2(to('\u21CE', '&nhArr;'));
    encodeMap.i2(to('\u21AE', '&nharr;'));
    encodeMap.i2(to('\u2AF2', '&nhpar;'));
    encodeMap.i2(to('\u220B', '&ni;'));
    encodeMap.i2(to('\u22FC', '&nis;'));
    encodeMap.i2(to('\u22FA', '&nisd;'));
    encodeMap.i2(to('\u220B', '&niv;'));
    encodeMap.i2(to('\u045A', '&njcy;'));
    encodeMap.i2(to('\u21CD', '&nlArr;'));
    encodeMap.i2(to('\u2266\u0338', '&nlE;'));
    encodeMap.i2(to('\u219A', '&nlarr;'));
    encodeMap.i2(to('\u2025', '&nldr;'));
    encodeMap.i2(to('\u2270', '&nle;'));
    encodeMap.i2(to('\u219A', '&nleftarrow;'));
    encodeMap.i2(to('\u21AE', '&nleftrightarrow;'));
    encodeMap.i2(to('\u2270', '&nleq;'));
    encodeMap.i2(to('\u2266\u0338', '&nleqq;'));
    encodeMap.i2(to('\u2A7D\u0338', '&nleqslant;'));
    encodeMap.i2(to('\u2A7D\u0338', '&nles;'));
    encodeMap.i2(to('\u226E', '&nless;'));
    encodeMap.i2(to('\u2274', '&nlsim;'));
    encodeMap.i2(to('\u226E', '&nlt;'));
    encodeMap.i2(to('\u22EA', '&nltri;'));
    encodeMap.i2(to('\u22EC', '&nltrie;'));
    encodeMap.i2(to('\u2224', '&nmid;'));
    encodeMap.i2(to('\uD835\uDD5F', '&nopf;'));
    encodeMap.i2(to('\xAC', '&not'));
    encodeMap.i2(to('\xAC', '&not;'));
    encodeMap.i2(to('\u2209', '&notin;'));
    encodeMap.i2(to('\u22F9\u0338', '&notinE;'));
    encodeMap.i2(to('\u22F5\u0338', '&notindot;'));
    encodeMap.i2(to('\u2209', '&notinva;'));
    encodeMap.i2(to('\u22F7', '&notinvb;'));
    encodeMap.i2(to('\u22F6', '&notinvc;'));
    encodeMap.i2(to('\u220C', '&notni;'));
    encodeMap.i2(to('\u220C', '&notniva;'));
    encodeMap.i2(to('\u22FE', '&notnivb;'));
    encodeMap.i2(to('\u22FD', '&notnivc;'));
    encodeMap.i2(to('\u2226', '&npar;'));
    encodeMap.i2(to('\u2226', '&nparallel;'));
    encodeMap.i2(to('\u2AFD\u20E5', '&nparsl;'));
    encodeMap.i2(to('\u2202\u0338', '&npart;'));
    encodeMap.i2(to('\u2A14', '&npolint;'));
    encodeMap.i2(to('\u2280', '&npr;'));
    encodeMap.i2(to('\u22E0', '&nprcue;'));
    encodeMap.i2(to('\u2AAF\u0338', '&npre;'));
    encodeMap.i2(to('\u2280', '&nprec;'));
    encodeMap.i2(to('\u2AAF\u0338', '&npreceq;'));
    encodeMap.i2(to('\u21CF', '&nrArr;'));
    encodeMap.i2(to('\u219B', '&nrarr;'));
    encodeMap.i2(to('\u2933\u0338', '&nrarrc;'));
    encodeMap.i2(to('\u219D\u0338', '&nrarrw;'));
    encodeMap.i2(to('\u219B', '&nrightarrow;'));
    encodeMap.i2(to('\u22EB', '&nrtri;'));
    encodeMap.i2(to('\u22ED', '&nrtrie;'));
    encodeMap.i2(to('\u2281', '&nsc;'));
    encodeMap.i2(to('\u22E1', '&nsccue;'));
    encodeMap.i2(to('\u2AB0\u0338', '&nsce;'));
    encodeMap.i2(to('\uD835\uDCC3', '&nscr;'));
    encodeMap.i2(to('\u2224', '&nshortmid;'));
    encodeMap.i2(to('\u2226', '&nshortparallel;'));
    encodeMap.i2(to('\u2241', '&nsim;'));
    encodeMap.i2(to('\u2244', '&nsime;'));
    encodeMap.i2(to('\u2244', '&nsimeq;'));
    encodeMap.i2(to('\u2224', '&nsmid;'));
    encodeMap.i2(to('\u2226', '&nspar;'));
    encodeMap.i2(to('\u22E2', '&nsqsube;'));
    encodeMap.i2(to('\u22E3', '&nsqsupe;'));
    encodeMap.i2(to('\u2284', '&nsub;'));
    encodeMap.i2(to('\u2AC5\u0338', '&nsubE;'));
    encodeMap.i2(to('\u2288', '&nsube;'));
    encodeMap.i2(to('\u2282\u20D2', '&nsubset;'));
    encodeMap.i2(to('\u2288', '&nsubseteq;'));
    encodeMap.i2(to('\u2AC5\u0338', '&nsubseteqq;'));
    encodeMap.i2(to('\u2281', '&nsucc;'));
    encodeMap.i2(to('\u2AB0\u0338', '&nsucceq;'));
    encodeMap.i2(to('\u2285', '&nsup;'));
    encodeMap.i2(to('\u2AC6\u0338', '&nsupE;'));
    encodeMap.i2(to('\u2289', '&nsupe;'));
    encodeMap.i2(to('\u2283\u20D2', '&nsupset;'));
    encodeMap.i2(to('\u2289', '&nsupseteq;'));
    encodeMap.i2(to('\u2AC6\u0338', '&nsupseteqq;'));
    encodeMap.i2(to('\u2279', '&ntgl;'));
    encodeMap.i2(to('\xF1', '&ntilde'));
    encodeMap.i2(to('\xF1', '&ntilde;'));
    encodeMap.i2(to('\u2278', '&ntlg;'));
    encodeMap.i2(to('\u22EA', '&ntriangleleft;'));
    encodeMap.i2(to('\u22EC', '&ntrianglelefteq;'));
    encodeMap.i2(to('\u22EB', '&ntriangleright;'));
    encodeMap.i2(to('\u22ED', '&ntrianglerighteq;'));
    encodeMap.i2(to('\u03BD', '&nu;'));
    encodeMap.i2(to('#', '&num;'));
    encodeMap.i2(to('\u2116', '&numero;'));
    encodeMap.i2(to('\u2007', '&numsp;'));
    encodeMap.i2(to('\u22AD', '&nvDash;'));
    encodeMap.i2(to('\u2904', '&nvHarr;'));
    encodeMap.i2(to('\u224D\u20D2', '&nvap;'));
    encodeMap.i2(to('\u22AC', '&nvdash;'));
    encodeMap.i2(to('\u2265\u20D2', '&nvge;'));
    encodeMap.i2(to('>\u20D2', '&nvgt;'));
    encodeMap.i2(to('\u29DE', '&nvinfin;'));
    encodeMap.i2(to('\u2902', '&nvlArr;'));
    encodeMap.i2(to('\u2264\u20D2', '&nvle;'));
    encodeMap.i2(to('<\u20D2', '&nvlt;'));
    encodeMap.i2(to('\u22B4\u20D2', '&nvltrie;'));
    encodeMap.i2(to('\u2903', '&nvrArr;'));
    encodeMap.i2(to('\u22B5\u20D2', '&nvrtrie;'));
    encodeMap.i2(to('\u223C\u20D2', '&nvsim;'));
    encodeMap.i2(to('\u21D6', '&nwArr;'));
    encodeMap.i2(to('\u2923', '&nwarhk;'));
    encodeMap.i2(to('\u2196', '&nwarr;'));
    encodeMap.i2(to('\u2196', '&nwarrow;'));
    encodeMap.i2(to('\u2927', '&nwnear;'));
    encodeMap.i2(to('\u24C8', '&oS;'));
    encodeMap.i2(to('\xF3', '&oacute'));
    encodeMap.i2(to('\xF3', '&oacute;'));
    encodeMap.i2(to('\u229B', '&oast;'));
    encodeMap.i2(to('\u229A', '&ocir;'));
    encodeMap.i2(to('\xF4', '&ocirc'));
    encodeMap.i2(to('\xF4', '&ocirc;'));
    encodeMap.i2(to('\u043E', '&ocy;'));
    encodeMap.i2(to('\u229D', '&odash;'));
    encodeMap.i2(to('\u0151', '&odblac;'));
    encodeMap.i2(to('\u2A38', '&odiv;'));
    encodeMap.i2(to('\u2299', '&odot;'));
    encodeMap.i2(to('\u29BC', '&odsold;'));
    encodeMap.i2(to('\u0153', '&oelig;'));
    encodeMap.i2(to('\u29BF', '&ofcir;'));
    encodeMap.i2(to('\uD835\uDD2C', '&ofr;'));
    encodeMap.i2(to('\u02DB', '&ogon;'));
    encodeMap.i2(to('\xF2', '&ograve'));
    encodeMap.i2(to('\xF2', '&ograve;'));
    encodeMap.i2(to('\u29C1', '&ogt;'));
    encodeMap.i2(to('\u29B5', '&ohbar;'));
    encodeMap.i2(to('\u03A9', '&ohm;'));
    encodeMap.i2(to('\u222E', '&oint;'));
    encodeMap.i2(to('\u21BA', '&olarr;'));
    encodeMap.i2(to('\u29BE', '&olcir;'));
    encodeMap.i2(to('\u29BB', '&olcross;'));
    encodeMap.i2(to('\u203E', '&oline;'));
    encodeMap.i2(to('\u29C0', '&olt;'));
    encodeMap.i2(to('\u014D', '&omacr;'));
    encodeMap.i2(to('\u03C9', '&omega;'));
    encodeMap.i2(to('\u03BF', '&omicron;'));
    encodeMap.i2(to('\u29B6', '&omid;'));
    encodeMap.i2(to('\u2296', '&ominus;'));
    encodeMap.i2(to('\uD835\uDD60', '&oopf;'));
    encodeMap.i2(to('\u29B7', '&opar;'));
    encodeMap.i2(to('\u29B9', '&operp;'));
    encodeMap.i2(to('\u2295', '&oplus;'));
    encodeMap.i2(to('\u2228', '&or;'));
    encodeMap.i2(to('\u21BB', '&orarr;'));
    encodeMap.i2(to('\u2A5D', '&ord;'));
    encodeMap.i2(to('\u2134', '&order;'));
    encodeMap.i2(to('\u2134', '&orderof;'));
    encodeMap.i2(to('\xAA', '&ordf'));
    encodeMap.i2(to('\xAA', '&ordf;'));
    encodeMap.i2(to('\xBA', '&ordm'));
    encodeMap.i2(to('\xBA', '&ordm;'));
    encodeMap.i2(to('\u22B6', '&origof;'));
    encodeMap.i2(to('\u2A56', '&oror;'));
    encodeMap.i2(to('\u2A57', '&orslope;'));
    encodeMap.i2(to('\u2A5B', '&orv;'));
    encodeMap.i2(to('\u2134', '&oscr;'));
    encodeMap.i2(to('\xF8', '&oslash'));
    encodeMap.i2(to('\xF8', '&oslash;'));
    encodeMap.i2(to('\u2298', '&osol;'));
    encodeMap.i2(to('\xF5', '&otilde'));
    encodeMap.i2(to('\xF5', '&otilde;'));
    encodeMap.i2(to('\u2297', '&otimes;'));
    encodeMap.i2(to('\u2A36', '&otimesas;'));
    encodeMap.i2(to('\xF6', '&ouml'));
    encodeMap.i2(to('\xF6', '&ouml;'));
    encodeMap.i2(to('\u233D', '&ovbar;'));
    encodeMap.i2(to('\u2225', '&par;'));
    encodeMap.i2(to('\xB6', '&para'));
    encodeMap.i2(to('\xB6', '&para;'));
    encodeMap.i2(to('\u2225', '&parallel;'));
    encodeMap.i2(to('\u2AF3', '&parsim;'));
    encodeMap.i2(to('\u2AFD', '&parsl;'));
    encodeMap.i2(to('\u2202', '&part;'));
    encodeMap.i2(to('\u043F', '&pcy;'));
    encodeMap.i2(to('%', '&percnt;'));
    encodeMap.i2(to('.', '&period;'));
    encodeMap.i2(to('\u2030', '&permil;'));
    encodeMap.i2(to('\u22A5', '&perp;'));
    encodeMap.i2(to('\u2031', '&pertenk;'));
    encodeMap.i2(to('\uD835\uDD2D', '&pfr;'));
    encodeMap.i2(to('\u03C6', '&phi;'));
    encodeMap.i2(to('\u03D5', '&phiv;'));
    encodeMap.i2(to('\u2133', '&phmmat;'));
    encodeMap.i2(to('\u260E', '&phone;'));
    encodeMap.i2(to('\u03C0', '&pi;'));
    encodeMap.i2(to('\u22D4', '&pitchfork;'));
    encodeMap.i2(to('\u03D6', '&piv;'));
    encodeMap.i2(to('\u210F', '&planck;'));
    encodeMap.i2(to('\u210E', '&planckh;'));
    encodeMap.i2(to('\u210F', '&plankv;'));
    encodeMap.i2(to('+', '&plus;'));
    encodeMap.i2(to('\u2A23', '&plusacir;'));
    encodeMap.i2(to('\u229E', '&plusb;'));
    encodeMap.i2(to('\u2A22', '&pluscir;'));
    encodeMap.i2(to('\u2214', '&plusdo;'));
    encodeMap.i2(to('\u2A25', '&plusdu;'));
    encodeMap.i2(to('\u2A72', '&pluse;'));
    encodeMap.i2(to('\xB1', '&plusmn'));
    encodeMap.i2(to('\xB1', '&plusmn;'));
    encodeMap.i2(to('\u2A26', '&plussim;'));
    encodeMap.i2(to('\u2A27', '&plustwo;'));
    encodeMap.i2(to('\xB1', '&pm;'));
    encodeMap.i2(to('\u2A15', '&pointint;'));
    encodeMap.i2(to('\uD835\uDD61', '&popf;'));
    encodeMap.i2(to('\xA3', '&pound'));
    encodeMap.i2(to('\xA3', '&pound;'));
    encodeMap.i2(to('\u227A', '&pr;'));
    encodeMap.i2(to('\u2AB3', '&prE;'));
    encodeMap.i2(to('\u2AB7', '&prap;'));
    encodeMap.i2(to('\u227C', '&prcue;'));
    encodeMap.i2(to('\u2AAF', '&pre;'));
    encodeMap.i2(to('\u227A', '&prec;'));
    encodeMap.i2(to('\u2AB7', '&precapprox;'));
    encodeMap.i2(to('\u227C', '&preccurlyeq;'));
    encodeMap.i2(to('\u2AAF', '&preceq;'));
    encodeMap.i2(to('\u2AB9', '&precnapprox;'));
    encodeMap.i2(to('\u2AB5', '&precneqq;'));
    encodeMap.i2(to('\u22E8', '&precnsim;'));
    encodeMap.i2(to('\u227E', '&precsim;'));
    encodeMap.i2(to('\u2032', '&prime;'));
    encodeMap.i2(to('\u2119', '&primes;'));
    encodeMap.i2(to('\u2AB5', '&prnE;'));
    encodeMap.i2(to('\u2AB9', '&prnap;'));
    encodeMap.i2(to('\u22E8', '&prnsim;'));
    encodeMap.i2(to('\u220F', '&prod;'));
    encodeMap.i2(to('\u232E', '&profalar;'));
    encodeMap.i2(to('\u2312', '&profline;'));
    encodeMap.i2(to('\u2313', '&profsurf;'));
    encodeMap.i2(to('\u221D', '&prop;'));
    encodeMap.i2(to('\u221D', '&propto;'));
    encodeMap.i2(to('\u227E', '&prsim;'));
    encodeMap.i2(to('\u22B0', '&prurel;'));
    encodeMap.i2(to('\uD835\uDCC5', '&pscr;'));
    encodeMap.i2(to('\u03C8', '&psi;'));
    encodeMap.i2(to('\u2008', '&puncsp;'));
    encodeMap.i2(to('\uD835\uDD2E', '&qfr;'));
    encodeMap.i2(to('\u2A0C', '&qint;'));
    encodeMap.i2(to('\uD835\uDD62', '&qopf;'));
    encodeMap.i2(to('\u2057', '&qprime;'));
    encodeMap.i2(to('\uD835\uDCC6', '&qscr;'));
    encodeMap.i2(to('\u210D', '&quaternions;'));
    encodeMap.i2(to('\u2A16', '&quatint;'));
    encodeMap.i2(to('?', '&quest;'));
    encodeMap.i2(to('\u225F', '&questeq;'));
    encodeMap.i2(to('"', '&quot'));
    encodeMap.i2(to('"', '&quot;'));
    encodeMap.i2(to('\u21DB', '&rAarr;'));
    encodeMap.i2(to('\u21D2', '&rArr;'));
    encodeMap.i2(to('\u291C', '&rAtail;'));
    encodeMap.i2(to('\u290F', '&rBarr;'));
    encodeMap.i2(to('\u2964', '&rHar;'));
    encodeMap.i2(to('\u223D\u0331', '&race;'));
    encodeMap.i2(to('\u0155', '&racute;'));
    encodeMap.i2(to('\u221A', '&radic;'));
    encodeMap.i2(to('\u29B3', '&raemptyv;'));
    encodeMap.i2(to('\u27E9', '&rang;'));
    encodeMap.i2(to('\u2992', '&rangd;'));
    encodeMap.i2(to('\u29A5', '&range;'));
    encodeMap.i2(to('\u27E9', '&rangle;'));
    encodeMap.i2(to('\xBB', '&raquo'));
    encodeMap.i2(to('\xBB', '&raquo;'));
    encodeMap.i2(to('\u2192', '&rarr;'));
    encodeMap.i2(to('\u2975', '&rarrap;'));
    encodeMap.i2(to('\u21E5', '&rarrb;'));
    encodeMap.i2(to('\u2920', '&rarrbfs;'));
    encodeMap.i2(to('\u2933', '&rarrc;'));
    encodeMap.i2(to('\u291E', '&rarrfs;'));
    encodeMap.i2(to('\u21AA', '&rarrhk;'));
    encodeMap.i2(to('\u21AC', '&rarrlp;'));
    encodeMap.i2(to('\u2945', '&rarrpl;'));
    encodeMap.i2(to('\u2974', '&rarrsim;'));
    encodeMap.i2(to('\u21A3', '&rarrtl;'));
    encodeMap.i2(to('\u219D', '&rarrw;'));
    encodeMap.i2(to('\u291A', '&ratail;'));
    encodeMap.i2(to('\u2236', '&ratio;'));
    encodeMap.i2(to('\u211A', '&rationals;'));
    encodeMap.i2(to('\u290D', '&rbarr;'));
    encodeMap.i2(to('\u2773', '&rbbrk;'));
    encodeMap.i2(to('}', '&rbrace;'));
    encodeMap.i2(to(']', '&rbrack;'));
    encodeMap.i2(to('\u298C', '&rbrke;'));
    encodeMap.i2(to('\u298E', '&rbrksld;'));
    encodeMap.i2(to('\u2990', '&rbrkslu;'));
    encodeMap.i2(to('\u0159', '&rcaron;'));
    encodeMap.i2(to('\u0157', '&rcedil;'));
    encodeMap.i2(to('\u2309', '&rceil;'));
    encodeMap.i2(to('}', '&rcub;'));
    encodeMap.i2(to('\u0440', '&rcy;'));
    encodeMap.i2(to('\u2937', '&rdca;'));
    encodeMap.i2(to('\u2969', '&rdldhar;'));
    encodeMap.i2(to('\u201D', '&rdquo;'));
    encodeMap.i2(to('\u201D', '&rdquor;'));
    encodeMap.i2(to('\u21B3', '&rdsh;'));
    encodeMap.i2(to('\u211C', '&real;'));
    encodeMap.i2(to('\u211B', '&realine;'));
    encodeMap.i2(to('\u211C', '&realpart;'));
    encodeMap.i2(to('\u211D', '&reals;'));
    encodeMap.i2(to('\u25AD', '&rect;'));
    encodeMap.i2(to('\xAE', '&reg'));
    encodeMap.i2(to('\xAE', '&reg;'));
    encodeMap.i2(to('\u297D', '&rfisht;'));
    encodeMap.i2(to('\u230B', '&rfloor;'));
    encodeMap.i2(to('\uD835\uDD2F', '&rfr;'));
    encodeMap.i2(to('\u21C1', '&rhard;'));
    encodeMap.i2(to('\u21C0', '&rharu;'));
    encodeMap.i2(to('\u296C', '&rharul;'));
    encodeMap.i2(to('\u03C1', '&rho;'));
    encodeMap.i2(to('\u03F1', '&rhov;'));
    encodeMap.i2(to('\u2192', '&rightarrow;'));
    encodeMap.i2(to('\u21A3', '&rightarrowtail;'));
    encodeMap.i2(to('\u21C1', '&rightharpoondown;'));
    encodeMap.i2(to('\u21C0', '&rightharpoonup;'));
    encodeMap.i2(to('\u21C4', '&rightleftarrows;'));
    encodeMap.i2(to('\u21CC', '&rightleftharpoons;'));
    encodeMap.i2(to('\u21C9', '&rightrightarrows;'));
    encodeMap.i2(to('\u219D', '&rightsquigarrow;'));
    encodeMap.i2(to('\u22CC', '&rightthreetimes;'));
    encodeMap.i2(to('\u02DA', '&ring;'));
    encodeMap.i2(to('\u2253', '&risingdotseq;'));
    encodeMap.i2(to('\u21C4', '&rlarr;'));
    encodeMap.i2(to('\u21CC', '&rlhar;'));
    encodeMap.i2(to('\u200F', '&rlm;'));
    encodeMap.i2(to('\u23B1', '&rmoust;'));
    encodeMap.i2(to('\u23B1', '&rmoustache;'));
    encodeMap.i2(to('\u2AEE', '&rnmid;'));
    encodeMap.i2(to('\u27ED', '&roang;'));
    encodeMap.i2(to('\u21FE', '&roarr;'));
    encodeMap.i2(to('\u27E7', '&robrk;'));
    encodeMap.i2(to('\u2986', '&ropar;'));
    encodeMap.i2(to('\uD835\uDD63', '&ropf;'));
    encodeMap.i2(to('\u2A2E', '&roplus;'));
    encodeMap.i2(to('\u2A35', '&rotimes;'));
    encodeMap.i2(to(')', '&rpar;'));
    encodeMap.i2(to('\u2994', '&rpargt;'));
    encodeMap.i2(to('\u2A12', '&rppolint;'));
    encodeMap.i2(to('\u21C9', '&rrarr;'));
    encodeMap.i2(to('\u203A', '&rsaquo;'));
    encodeMap.i2(to('\uD835\uDCC7', '&rscr;'));
    encodeMap.i2(to('\u21B1', '&rsh;'));
    encodeMap.i2(to(']', '&rsqb;'));
    encodeMap.i2(to('\u2019', '&rsquo;'));
    encodeMap.i2(to('\u2019', '&rsquor;'));
    encodeMap.i2(to('\u22CC', '&rthree;'));
    encodeMap.i2(to('\u22CA', '&rtimes;'));
    encodeMap.i2(to('\u25B9', '&rtri;'));
    encodeMap.i2(to('\u22B5', '&rtrie;'));
    encodeMap.i2(to('\u25B8', '&rtrif;'));
    encodeMap.i2(to('\u29CE', '&rtriltri;'));
    encodeMap.i2(to('\u2968', '&ruluhar;'));
    encodeMap.i2(to('\u211E', '&rx;'));
    encodeMap.i2(to('\u015B', '&sacute;'));
    encodeMap.i2(to('\u201A', '&sbquo;'));
    encodeMap.i2(to('\u227B', '&sc;'));
    encodeMap.i2(to('\u2AB4', '&scE;'));
    encodeMap.i2(to('\u2AB8', '&scap;'));
    encodeMap.i2(to('\u0161', '&scaron;'));
    encodeMap.i2(to('\u227D', '&sccue;'));
    encodeMap.i2(to('\u2AB0', '&sce;'));
    encodeMap.i2(to('\u015F', '&scedil;'));
    encodeMap.i2(to('\u015D', '&scirc;'));
    encodeMap.i2(to('\u2AB6', '&scnE;'));
    encodeMap.i2(to('\u2ABA', '&scnap;'));
    encodeMap.i2(to('\u22E9', '&scnsim;'));
    encodeMap.i2(to('\u2A13', '&scpolint;'));
    encodeMap.i2(to('\u227F', '&scsim;'));
    encodeMap.i2(to('\u0441', '&scy;'));
    encodeMap.i2(to('\u22C5', '&sdot;'));
    encodeMap.i2(to('\u22A1', '&sdotb;'));
    encodeMap.i2(to('\u2A66', '&sdote;'));
    encodeMap.i2(to('\u21D8', '&seArr;'));
    encodeMap.i2(to('\u2925', '&searhk;'));
    encodeMap.i2(to('\u2198', '&searr;'));
    encodeMap.i2(to('\u2198', '&searrow;'));
    encodeMap.i2(to('\xA7', '&sect'));
    encodeMap.i2(to('\xA7', '&sect;'));
    encodeMap.i2(to(';', '&semi;'));
    encodeMap.i2(to('\u2929', '&seswar;'));
    encodeMap.i2(to('\u2216', '&setminus;'));
    encodeMap.i2(to('\u2216', '&setmn;'));
    encodeMap.i2(to('\u2736', '&sext;'));
    encodeMap.i2(to('\uD835\uDD30', '&sfr;'));
    encodeMap.i2(to('\u2322', '&sfrown;'));
    encodeMap.i2(to('\u266F', '&sharp;'));
    encodeMap.i2(to('\u0449', '&shchcy;'));
    encodeMap.i2(to('\u0448', '&shcy;'));
    encodeMap.i2(to('\u2223', '&shortmid;'));
    encodeMap.i2(to('\u2225', '&shortparallel;'));
    encodeMap.i2(to('\xAD', '&shy'));
    encodeMap.i2(to('\xAD', '&shy;'));
    encodeMap.i2(to('\u03C3', '&sigma;'));
    encodeMap.i2(to('\u03C2', '&sigmaf;'));
    encodeMap.i2(to('\u03C2', '&sigmav;'));
    encodeMap.i2(to('\u223C', '&sim;'));
    encodeMap.i2(to('\u2A6A', '&simdot;'));
    encodeMap.i2(to('\u2243', '&sime;'));
    encodeMap.i2(to('\u2243', '&simeq;'));
    encodeMap.i2(to('\u2A9E', '&simg;'));
    encodeMap.i2(to('\u2AA0', '&simgE;'));
    encodeMap.i2(to('\u2A9D', '&siml;'));
    encodeMap.i2(to('\u2A9F', '&simlE;'));
    encodeMap.i2(to('\u2246', '&simne;'));
    encodeMap.i2(to('\u2A24', '&simplus;'));
    encodeMap.i2(to('\u2972', '&simrarr;'));
    encodeMap.i2(to('\u2190', '&slarr;'));
    encodeMap.i2(to('\u2216', '&smallsetminus;'));
    encodeMap.i2(to('\u2A33', '&smashp;'));
    encodeMap.i2(to('\u29E4', '&smeparsl;'));
    encodeMap.i2(to('\u2223', '&smid;'));
    encodeMap.i2(to('\u2323', '&smile;'));
    encodeMap.i2(to('\u2AAA', '&smt;'));
    encodeMap.i2(to('\u2AAC', '&smte;'));
    encodeMap.i2(to('\u2AAC\uFE00', '&smtes;'));
    encodeMap.i2(to('\u044C', '&softcy;'));
    encodeMap.i2(to('/', '&sol;'));
    encodeMap.i2(to('\u29C4', '&solb;'));
    encodeMap.i2(to('\u233F', '&solbar;'));
    encodeMap.i2(to('\uD835\uDD64', '&sopf;'));
    encodeMap.i2(to('\u2660', '&spades;'));
    encodeMap.i2(to('\u2660', '&spadesuit;'));
    encodeMap.i2(to('\u2225', '&spar;'));
    encodeMap.i2(to('\u2293', '&sqcap;'));
    encodeMap.i2(to('\u2293\uFE00', '&sqcaps;'));
    encodeMap.i2(to('\u2294', '&sqcup;'));
    encodeMap.i2(to('\u2294\uFE00', '&sqcups;'));
    encodeMap.i2(to('\u228F', '&sqsub;'));
    encodeMap.i2(to('\u2291', '&sqsube;'));
    encodeMap.i2(to('\u228F', '&sqsubset;'));
    encodeMap.i2(to('\u2291', '&sqsubseteq;'));
    encodeMap.i2(to('\u2290', '&sqsup;'));
    encodeMap.i2(to('\u2292', '&sqsupe;'));
    encodeMap.i2(to('\u2290', '&sqsupset;'));
    encodeMap.i2(to('\u2292', '&sqsupseteq;'));
    encodeMap.i2(to('\u25A1', '&squ;'));
    encodeMap.i2(to('\u25A1', '&square;'));
    encodeMap.i2(to('\u25AA', '&squarf;'));
    encodeMap.i2(to('\u25AA', '&squf;'));
    encodeMap.i2(to('\u2192', '&srarr;'));
    encodeMap.i2(to('\uD835\uDCC8', '&sscr;'));
    encodeMap.i2(to('\u2216', '&ssetmn;'));
    encodeMap.i2(to('\u2323', '&ssmile;'));
    encodeMap.i2(to('\u22C6', '&sstarf;'));
    encodeMap.i2(to('\u2606', '&star;'));
    encodeMap.i2(to('\u2605', '&starf;'));
    encodeMap.i2(to('\u03F5', '&straightepsilon;'));
    encodeMap.i2(to('\u03D5', '&straightphi;'));
    encodeMap.i2(to('\xAF', '&strns;'));
    encodeMap.i2(to('\u2282', '&sub;'));
    encodeMap.i2(to('\u2AC5', '&subE;'));
    encodeMap.i2(to('\u2ABD', '&subdot;'));
    encodeMap.i2(to('\u2286', '&sube;'));
    encodeMap.i2(to('\u2AC3', '&subedot;'));
    encodeMap.i2(to('\u2AC1', '&submult;'));
    encodeMap.i2(to('\u2ACB', '&subnE;'));
    encodeMap.i2(to('\u228A', '&subne;'));
    encodeMap.i2(to('\u2ABF', '&subplus;'));
    encodeMap.i2(to('\u2979', '&subrarr;'));
    encodeMap.i2(to('\u2282', '&subset;'));
    encodeMap.i2(to('\u2286', '&subseteq;'));
    encodeMap.i2(to('\u2AC5', '&subseteqq;'));
    encodeMap.i2(to('\u228A', '&subsetneq;'));
    encodeMap.i2(to('\u2ACB', '&subsetneqq;'));
    encodeMap.i2(to('\u2AC7', '&subsim;'));
    encodeMap.i2(to('\u2AD5', '&subsub;'));
    encodeMap.i2(to('\u2AD3', '&subsup;'));
    encodeMap.i2(to('\u227B', '&succ;'));
    encodeMap.i2(to('\u2AB8', '&succapprox;'));
    encodeMap.i2(to('\u227D', '&succcurlyeq;'));
    encodeMap.i2(to('\u2AB0', '&succeq;'));
    encodeMap.i2(to('\u2ABA', '&succnapprox;'));
    encodeMap.i2(to('\u2AB6', '&succneqq;'));
    encodeMap.i2(to('\u22E9', '&succnsim;'));
    encodeMap.i2(to('\u227F', '&succsim;'));
    encodeMap.i2(to('\u2211', '&sum;'));
    encodeMap.i2(to('\u266A', '&sung;'));
    encodeMap.i2(to('\xB9', '&sup1'));
    encodeMap.i2(to('\xB9', '&sup1;'));
    encodeMap.i2(to('\xB2', '&sup2'));
    encodeMap.i2(to('\xB2', '&sup2;'));
    encodeMap.i2(to('\xB3', '&sup3'));
    encodeMap.i2(to('\xB3', '&sup3;'));
    encodeMap.i2(to('\u2283', '&sup;'));
    encodeMap.i2(to('\u2AC6', '&supE;'));
    encodeMap.i2(to('\u2ABE', '&supdot;'));
    encodeMap.i2(to('\u2AD8', '&supdsub;'));
    encodeMap.i2(to('\u2287', '&supe;'));
    encodeMap.i2(to('\u2AC4', '&supedot;'));
    encodeMap.i2(to('\u27C9', '&suphsol;'));
    encodeMap.i2(to('\u2AD7', '&suphsub;'));
    encodeMap.i2(to('\u297B', '&suplarr;'));
    encodeMap.i2(to('\u2AC2', '&supmult;'));
    encodeMap.i2(to('\u2ACC', '&supnE;'));
    encodeMap.i2(to('\u228B', '&supne;'));
    encodeMap.i2(to('\u2AC0', '&supplus;'));
    encodeMap.i2(to('\u2283', '&supset;'));
    encodeMap.i2(to('\u2287', '&supseteq;'));
    encodeMap.i2(to('\u2AC6', '&supseteqq;'));
    encodeMap.i2(to('\u228B', '&supsetneq;'));
    encodeMap.i2(to('\u2ACC', '&supsetneqq;'));
    encodeMap.i2(to('\u2AC8', '&supsim;'));
    encodeMap.i2(to('\u2AD4', '&supsub;'));
    encodeMap.i2(to('\u2AD6', '&supsup;'));
    encodeMap.i2(to('\u21D9', '&swArr;'));
    encodeMap.i2(to('\u2926', '&swarhk;'));
    encodeMap.i2(to('\u2199', '&swarr;'));
    encodeMap.i2(to('\u2199', '&swarrow;'));
    encodeMap.i2(to('\u292A', '&swnwar;'));
    encodeMap.i2(to('\xDF', '&szlig'));
    encodeMap.i2(to('\xDF', '&szlig;'));
    encodeMap.i2(to('\u2316', '&target;'));
    encodeMap.i2(to('\u03C4', '&tau;'));
    encodeMap.i2(to('\u23B4', '&tbrk;'));
    encodeMap.i2(to('\u0165', '&tcaron;'));
    encodeMap.i2(to('\u0163', '&tcedil;'));
    encodeMap.i2(to('\u0442', '&tcy;'));
    encodeMap.i2(to('\u20DB', '&tdot;'));
    encodeMap.i2(to('\u2315', '&telrec;'));
    encodeMap.i2(to('\uD835\uDD31', '&tfr;'));
    encodeMap.i2(to('\u2234', '&there4;'));
    encodeMap.i2(to('\u2234', '&therefore;'));
    encodeMap.i2(to('\u03B8', '&theta;'));
    encodeMap.i2(to('\u03D1', '&thetasym;'));
    encodeMap.i2(to('\u03D1', '&thetav;'));
    encodeMap.i2(to('\u2248', '&thickapprox;'));
    encodeMap.i2(to('\u223C', '&thicksim;'));
    encodeMap.i2(to('\u2009', '&thinsp;'));
    encodeMap.i2(to('\u2248', '&thkap;'));
    encodeMap.i2(to('\u223C', '&thksim;'));
    encodeMap.i2(to('\xFE', '&thorn'));
    encodeMap.i2(to('\xFE', '&thorn;'));
    encodeMap.i2(to('\u02DC', '&tilde;'));
    encodeMap.i2(to('\xD7', '&times'));
    encodeMap.i2(to('\xD7', '&times;'));
    encodeMap.i2(to('\u22A0', '&timesb;'));
    encodeMap.i2(to('\u2A31', '&timesbar;'));
    encodeMap.i2(to('\u2A30', '&timesd;'));
    encodeMap.i2(to('\u222D', '&tint;'));
    encodeMap.i2(to('\u2928', '&toea;'));
    encodeMap.i2(to('\u22A4', '&top;'));
    encodeMap.i2(to('\u2336', '&topbot;'));
    encodeMap.i2(to('\u2AF1', '&topcir;'));
    encodeMap.i2(to('\uD835\uDD65', '&topf;'));
    encodeMap.i2(to('\u2ADA', '&topfork;'));
    encodeMap.i2(to('\u2929', '&tosa;'));
    encodeMap.i2(to('\u2034', '&tprime;'));
    encodeMap.i2(to('\u2122', '&trade;'));
    encodeMap.i2(to('\u25B5', '&triangle;'));
    encodeMap.i2(to('\u25BF', '&triangledown;'));
    encodeMap.i2(to('\u25C3', '&triangleleft;'));
    encodeMap.i2(to('\u22B4', '&trianglelefteq;'));
    encodeMap.i2(to('\u225C', '&triangleq;'));
    encodeMap.i2(to('\u25B9', '&triangleright;'));
    encodeMap.i2(to('\u22B5', '&trianglerighteq;'));
    encodeMap.i2(to('\u25EC', '&tridot;'));
    encodeMap.i2(to('\u225C', '&trie;'));
    encodeMap.i2(to('\u2A3A', '&triminus;'));
    encodeMap.i2(to('\u2A39', '&triplus;'));
    encodeMap.i2(to('\u29CD', '&trisb;'));
    encodeMap.i2(to('\u2A3B', '&tritime;'));
    encodeMap.i2(to('\u23E2', '&trpezium;'));
    encodeMap.i2(to('\uD835\uDCC9', '&tscr;'));
    encodeMap.i2(to('\u0446', '&tscy;'));
    encodeMap.i2(to('\u045B', '&tshcy;'));
    encodeMap.i2(to('\u0167', '&tstrok;'));
    encodeMap.i2(to('\u226C', '&twixt;'));
    encodeMap.i2(to('\u219E', '&twoheadleftarrow;'));
    encodeMap.i2(to('\u21A0', '&twoheadrightarrow;'));
    encodeMap.i2(to('\u21D1', '&uArr;'));
    encodeMap.i2(to('\u2963', '&uHar;'));
    encodeMap.i2(to('\xFA', '&uacute'));
    encodeMap.i2(to('\xFA', '&uacute;'));
    encodeMap.i2(to('\u2191', '&uarr;'));
    encodeMap.i2(to('\u045E', '&ubrcy;'));
    encodeMap.i2(to('\u016D', '&ubreve;'));
    encodeMap.i2(to('\xFB', '&ucirc'));
    encodeMap.i2(to('\xFB', '&ucirc;'));
    encodeMap.i2(to('\u0443', '&ucy;'));
    encodeMap.i2(to('\u21C5', '&udarr;'));
    encodeMap.i2(to('\u0171', '&udblac;'));
    encodeMap.i2(to('\u296E', '&udhar;'));
    encodeMap.i2(to('\u297E', '&ufisht;'));
    encodeMap.i2(to('\uD835\uDD32', '&ufr;'));
    encodeMap.i2(to('\xF9', '&ugrave'));
    encodeMap.i2(to('\xF9', '&ugrave;'));
    encodeMap.i2(to('\u21BF', '&uharl;'));
    encodeMap.i2(to('\u21BE', '&uharr;'));
    encodeMap.i2(to('\u2580', '&uhblk;'));
    encodeMap.i2(to('\u231C', '&ulcorn;'));
    encodeMap.i2(to('\u231C', '&ulcorner;'));
    encodeMap.i2(to('\u230F', '&ulcrop;'));
    encodeMap.i2(to('\u25F8', '&ultri;'));
    encodeMap.i2(to('\u016B', '&umacr;'));
    encodeMap.i2(to('\xA8', '&uml'));
    encodeMap.i2(to('\xA8', '&uml;'));
    encodeMap.i2(to('\u0173', '&uogon;'));
    encodeMap.i2(to('\uD835\uDD66', '&uopf;'));
    encodeMap.i2(to('\u2191', '&uparrow;'));
    encodeMap.i2(to('\u2195', '&updownarrow;'));
    encodeMap.i2(to('\u21BF', '&upharpoonleft;'));
    encodeMap.i2(to('\u21BE', '&upharpoonright;'));
    encodeMap.i2(to('\u228E', '&uplus;'));
    encodeMap.i2(to('\u03C5', '&upsi;'));
    encodeMap.i2(to('\u03D2', '&upsih;'));
    encodeMap.i2(to('\u03C5', '&upsilon;'));
    encodeMap.i2(to('\u21C8', '&upuparrows;'));
    encodeMap.i2(to('\u231D', '&urcorn;'));
    encodeMap.i2(to('\u231D', '&urcorner;'));
    encodeMap.i2(to('\u230E', '&urcrop;'));
    encodeMap.i2(to('\u016F', '&uring;'));
    encodeMap.i2(to('\u25F9', '&urtri;'));
    encodeMap.i2(to('\uD835\uDCCA', '&uscr;'));
    encodeMap.i2(to('\u22F0', '&utdot;'));
    encodeMap.i2(to('\u0169', '&utilde;'));
    encodeMap.i2(to('\u25B5', '&utri;'));
    encodeMap.i2(to('\u25B4', '&utrif;'));
    encodeMap.i2(to('\u21C8', '&uuarr;'));
    encodeMap.i2(to('\xFC', '&uuml'));
    encodeMap.i2(to('\xFC', '&uuml;'));
    encodeMap.i2(to('\u29A7', '&uwangle;'));
    encodeMap.i2(to('\u21D5', '&vArr;'));
    encodeMap.i2(to('\u2AE8', '&vBar;'));
    encodeMap.i2(to('\u2AE9', '&vBarv;'));
    encodeMap.i2(to('\u22A8', '&vDash;'));
    encodeMap.i2(to('\u299C', '&vangrt;'));
    encodeMap.i2(to('\u03F5', '&varepsilon;'));
    encodeMap.i2(to('\u03F0', '&varkappa;'));
    encodeMap.i2(to('\u2205', '&varnothing;'));
    encodeMap.i2(to('\u03D5', '&varphi;'));
    encodeMap.i2(to('\u03D6', '&varpi;'));
    encodeMap.i2(to('\u221D', '&varpropto;'));
    encodeMap.i2(to('\u2195', '&varr;'));
    encodeMap.i2(to('\u03F1', '&varrho;'));
    encodeMap.i2(to('\u03C2', '&varsigma;'));
    encodeMap.i2(to('\u228A\uFE00', '&varsubsetneq;'));
    encodeMap.i2(to('\u2ACB\uFE00', '&varsubsetneqq;'));
    encodeMap.i2(to('\u228B\uFE00', '&varsupsetneq;'));
    encodeMap.i2(to('\u2ACC\uFE00', '&varsupsetneqq;'));
    encodeMap.i2(to('\u03D1', '&vartheta;'));
    encodeMap.i2(to('\u22B2', '&vartriangleleft;'));
    encodeMap.i2(to('\u22B3', '&vartriangleright;'));
    encodeMap.i2(to('\u0432', '&vcy;'));
    encodeMap.i2(to('\u22A2', '&vdash;'));
    encodeMap.i2(to('\u2228', '&vee;'));
    encodeMap.i2(to('\u22BB', '&veebar;'));
    encodeMap.i2(to('\u225A', '&veeeq;'));
    encodeMap.i2(to('\u22EE', '&vellip;'));
    encodeMap.i2(to('|', '&verbar;'));
    encodeMap.i2(to('|', '&vert;'));
    encodeMap.i2(to('\uD835\uDD33', '&vfr;'));
    encodeMap.i2(to('\u22B2', '&vltri;'));
    encodeMap.i2(to('\u2282\u20D2', '&vnsub;'));
    encodeMap.i2(to('\u2283\u20D2', '&vnsup;'));
    encodeMap.i2(to('\uD835\uDD67', '&vopf;'));
    encodeMap.i2(to('\u221D', '&vprop;'));
    encodeMap.i2(to('\u22B3', '&vrtri;'));
    encodeMap.i2(to('\uD835\uDCCB', '&vscr;'));
    encodeMap.i2(to('\u2ACB\uFE00', '&vsubnE;'));
    encodeMap.i2(to('\u228A\uFE00', '&vsubne;'));
    encodeMap.i2(to('\u2ACC\uFE00', '&vsupnE;'));
    encodeMap.i2(to('\u228B\uFE00', '&vsupne;'));
    encodeMap.i2(to('\u299A', '&vzigzag;'));
    encodeMap.i2(to('\u0175', '&wcirc;'));
    encodeMap.i2(to('\u2A5F', '&wedbar;'));
    encodeMap.i2(to('\u2227', '&wedge;'));
    encodeMap.i2(to('\u2259', '&wedgeq;'));
    encodeMap.i2(to('\u2118', '&weierp;'));
    encodeMap.i2(to('\uD835\uDD34', '&wfr;'));
    encodeMap.i2(to('\uD835\uDD68', '&wopf;'));
    encodeMap.i2(to('\u2118', '&wp;'));
    encodeMap.i2(to('\u2240', '&wr;'));
    encodeMap.i2(to('\u2240', '&wreath;'));
    encodeMap.i2(to('\uD835\uDCCC', '&wscr;'));
    encodeMap.i2(to('\u22C2', '&xcap;'));
    encodeMap.i2(to('\u25EF', '&xcirc;'));
    encodeMap.i2(to('\u22C3', '&xcup;'));
    encodeMap.i2(to('\u25BD', '&xdtri;'));
    encodeMap.i2(to('\uD835\uDD35', '&xfr;'));
    encodeMap.i2(to('\u27FA', '&xhArr;'));
    encodeMap.i2(to('\u27F7', '&xharr;'));
    encodeMap.i2(to('\u03BE', '&xi;'));
    encodeMap.i2(to('\u27F8', '&xlArr;'));
    encodeMap.i2(to('\u27F5', '&xlarr;'));
    encodeMap.i2(to('\u27FC', '&xmap;'));
    encodeMap.i2(to('\u22FB', '&xnis;'));
    encodeMap.i2(to('\u2A00', '&xodot;'));
    encodeMap.i2(to('\uD835\uDD69', '&xopf;'));
    encodeMap.i2(to('\u2A01', '&xoplus;'));
    encodeMap.i2(to('\u2A02', '&xotime;'));
    encodeMap.i2(to('\u27F9', '&xrArr;'));
    encodeMap.i2(to('\u27F6', '&xrarr;'));
    encodeMap.i2(to('\uD835\uDCCD', '&xscr;'));
    encodeMap.i2(to('\u2A06', '&xsqcup;'));
    encodeMap.i2(to('\u2A04', '&xuplus;'));
    encodeMap.i2(to('\u25B3', '&xutri;'));
    encodeMap.i2(to('\u22C1', '&xvee;'));
    encodeMap.i2(to('\u22C0', '&xwedge;'));
    encodeMap.i2(to('\xFD', '&yacute'));
    encodeMap.i2(to('\xFD', '&yacute;'));
    encodeMap.i2(to('\u044F', '&yacy;'));
    encodeMap.i2(to('\u0177', '&ycirc;'));
    encodeMap.i2(to('\u044B', '&ycy;'));
    encodeMap.i2(to('\xA5', '&yen'));
    encodeMap.i2(to('\xA5', '&yen;'));
    encodeMap.i2(to('\uD835\uDD36', '&yfr;'));
    encodeMap.i2(to('\u0457', '&yicy;'));
    encodeMap.i2(to('\uD835\uDD6A', '&yopf;'));
    encodeMap.i2(to('\uD835\uDCCE', '&yscr;'));
    encodeMap.i2(to('\u044E', '&yucy;'));
    encodeMap.i2(to('\xFF', '&yuml'));
    encodeMap.i2(to('\xFF', '&yuml;'));
    encodeMap.i2(to('\u017A', '&zacute;'));
    encodeMap.i2(to('\u017E', '&zcaron;'));
    encodeMap.i2(to('\u0437', '&zcy;'));
    encodeMap.i2(to('\u017C', '&zdot;'));
    encodeMap.i2(to('\u2128', '&zeetrf;'));
    encodeMap.i2(to('\u03B6', '&zeta;'));
    encodeMap.i2(to('\uD835\uDD37', '&zfr;'));
    encodeMap.i2(to('\u0436', '&zhcy;'));
    encodeMap.i2(to('\u21DD', '&zigrarr;'));
    encodeMap.i2(to('\uD835\uDD6B', '&zopf;'));
    encodeMap.i2(to('\uD835\uDCCF', '&zscr;'));
    encodeMap.i2(to('\u200D', '&zwj;'));
    encodeMap.i2(to('\u200C', '&zwnj;'));
    tmp.ucp_1 = toList(encodeMap);
    this.vcp_1 = invert(this, this.ucp_1);
  }
}
class KsoupEntities {
  constructor() {
    KsoupEntities_instance = this;
    var tmp = this;
    // Inline function 'kotlin.run' call
    var encodeXml11Map = listOf([to('\x00', ''), to('\x0B', '&#11;'), to('\f', '&#12;'), to('\uFFFE', ''), to('\uFFFF', '')]);
    tmp.dcq_1 = AggregateTranslator.ncp([LookupTranslator.acq(EntityMaps_getInstance().qcp_1), LookupTranslator.acq(encodeXml11Map), Companion_instance_0.bcq(1, 8), Companion_instance_0.bcq(14, 31), Companion_instance_0.bcq(127, 132), Companion_instance_0.bcq(134, 159), UnicodeUnpairedSurrogateRemover.ccq()]);
    this.ecq_1 = AggregateTranslator.ncp([LookupTranslator.acq(EntityMaps_getInstance().scp_1)]);
    this.fcq_1 = AggregateTranslator.ncp([LookupTranslator.acq(EntityMaps_getInstance().ucp_1), Companion_instance_0.bcq(1, 8), Companion_instance_0.bcq(14, 31), Companion_instance_0.bcq(127, 132), Companion_instance_0.bcq(134, 159)]);
    this.gcq_1 = AggregateTranslator.ncp([LookupTranslator.acq(EntityMaps_getInstance().tcp_1), NumericEntityDecoder.kcq([])]);
    this.hcq_1 = AggregateTranslator.ncp([LookupTranslator.acq(EntityMaps_getInstance().vcp_1), NumericEntityDecoder.kcq([])]);
    this.icq_1 = AggregateTranslator.ncp([LookupTranslator.acq(EntityMaps_getInstance().rcp_1), NumericEntityDecoder.kcq([])]);
  }
  lcq(input) {
    return this.hcq_1.pcp(input);
  }
  mcq(input) {
    return this.lcq(input);
  }
}
class LookupTranslator extends StringTranslator {
  constructor(lookupMap) {
    return new.target.acq(lookupMap);
  }
  static acq(lookupMap) {
    var $this = this.mcp();
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.wcp_1 = LinkedHashMap.r5();
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.xcp_1 = LinkedHashSet.p2();
    var currentShortest = 2147483647;
    var currentLongest = 0;
    var _iterator__ex2g4s = lookupMap.l1();
    while (_iterator__ex2g4s.m1()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.n1();
      var key = _destruct__k2r9zo.pm();
      var value = _destruct__k2r9zo.qm();
      // Inline function 'kotlin.collections.set' call
      $this.wcp_1.o4(key, value);
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(key, 0);
      // Inline function 'kotlin.toUShort' call
      var this_1 = Char__toInt_impl_vasixd(this_0);
      var tmp$ret$4 = _UShort___init__impl__jigrne(toShort(this_1));
      $this.xcp_1.i2(new UShort(tmp$ret$4));
      var sz = key.length;
      if (sz < currentShortest) {
        currentShortest = sz;
      }
      if (sz > currentLongest) {
        currentLongest = sz;
      }
    }
    $this.ycp_1 = currentShortest;
    $this.zcp_1 = currentLongest;
    return $this;
  }
  ocp(input, offset, stringBuilder) {
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(input, offset);
    // Inline function 'kotlin.toUShort' call
    var this_1 = Char__toInt_impl_vasixd(this_0);
    var tmp$ret$1 = _UShort___init__impl__jigrne(toShort(this_1));
    if (this.xcp_1.o2(new UShort(tmp$ret$1))) {
      var max = this.zcp_1;
      if ((offset + this.zcp_1 | 0) > input.length) {
        max = input.length - offset | 0;
      }
      var inductionVariable = max;
      var last = this.ycp_1;
      if (last <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var subSeq = substring(input, offset, offset + i | 0);
          var result = this.wcp_1.v4(toString(subSeq));
          if (!(result == null)) {
            stringBuilder.i1(result);
            return charSequenceLength(subSeq);
          }
        }
         while (!(i === last));
    }
    return 0;
  }
}
class CodePointTranslator extends StringTranslator {
  static ncq() {
    return this.mcp();
  }
  ocp(input, offset, stringBuilder) {
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(input, offset);
    var codePoint = Char__toInt_impl_vasixd(this_0);
    var consumed = this.ocq(codePoint, stringBuilder);
    return consumed ? 1 : 0;
  }
}
class Option extends Enum {}
class Companion {
  constructor() {
    Companion_instance = this;
    this.pcq_1 = setOf(Option_SemiColonRequired_getInstance());
  }
}
class NumericEntityDecoder extends StringTranslator {
  constructor(options) {
    return new.target.kcq(options);
  }
  static kcq(options) {
    Companion_getInstance();
    var $this = this.mcp();
    var tmp = $this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (options.length === 0) {
      tmp_0 = Companion_getInstance().pcq_1;
    } else {
      tmp_0 = setOf_0(options.slice());
    }
    tmp.jcq_1 = tmp_0;
    return $this;
  }
  ocp(input, offset, stringBuilder) {
    var seqEnd = input.length;
    if (charCodeAt(input, offset) === _Char___init__impl__6a9atx(38) && offset < (seqEnd - 2 | 0) && charCodeAt(input, offset + 1 | 0) === _Char___init__impl__6a9atx(35)) {
      var start = offset + 2 | 0;
      var isHex = false;
      var firstChar = charCodeAt(input, start);
      if (firstChar === _Char___init__impl__6a9atx(120) || firstChar === _Char___init__impl__6a9atx(88)) {
        start = start + 1 | 0;
        isHex = true;
        if (start === seqEnd) {
          return 0;
        }
      }
      var end = start;
      $l$loop: while (true) {
        var tmp;
        if (end < seqEnd) {
          var tmp_0;
          var tmp_1;
          var containsArg = charCodeAt(input, end);
          if (_Char___init__impl__6a9atx(48) <= containsArg ? containsArg <= _Char___init__impl__6a9atx(57) : false) {
            tmp_1 = true;
          } else {
            var containsArg_0 = charCodeAt(input, end);
            tmp_1 = _Char___init__impl__6a9atx(97) <= containsArg_0 ? containsArg_0 <= _Char___init__impl__6a9atx(102) : false;
          }
          if (tmp_1) {
            tmp_0 = true;
          } else {
            var containsArg_1 = charCodeAt(input, end);
            tmp_0 = _Char___init__impl__6a9atx(65) <= containsArg_1 ? containsArg_1 <= _Char___init__impl__6a9atx(70) : false;
          }
          tmp = tmp_0;
        } else {
          tmp = false;
        }
        if (!tmp) {
          break $l$loop;
        }
        end = end + 1 | 0;
      }
      var semiNext = !(end === seqEnd) && charCodeAt(input, end) === _Char___init__impl__6a9atx(59);
      if (!semiNext) {
        if (isSet(this, Option_SemiColonRequired_getInstance())) {
          return 0;
        }
        if (isSet(this, Option_ErrorIfNoSemiColon_getInstance())) {
          throw IllegalArgumentException.a2('Semi-colon required at end of numeric entity');
        }
      }
      var tmp_2;
      try {
        var tmp_3;
        if (isHex) {
          tmp_3 = toInt(toString(substring(input, start, end)), 16);
        } else {
          tmp_3 = toInt(toString(substring(input, start, end)), 10);
        }
        tmp_2 = tmp_3;
      } catch ($p) {
        var tmp_4;
        if ($p instanceof NumberFormatException) {
          var e = $p;
          return 0;
        } else {
          throw $p;
        }
      }
      var entityValue = tmp_2;
      if (entityValue > 65535) {
        // Inline function 'kotlin.collections.forEach' call
        var indexedObject = CharsUtils_instance.scq(entityValue);
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          stringBuilder.k1(element);
        }
      } else {
        // Inline function 'kotlin.Char' call
        var tmp_5;
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(0);
        if (entityValue < Char__toInt_impl_vasixd(this_0)) {
          tmp_5 = true;
        } else {
          // Inline function 'kotlin.code' call
          var this_1 = _Char___init__impl__6a9atx(65535);
          tmp_5 = entityValue > Char__toInt_impl_vasixd(this_1);
        }
        if (tmp_5) {
          throw IllegalArgumentException.a2('Invalid Char code: ' + entityValue);
        }
        var tmp$ret$2 = numberToChar(entityValue);
        stringBuilder.k1(tmp$ret$2);
      }
      return (((2 + end | 0) - start | 0) + (isHex ? 1 : 0) | 0) + (semiNext ? 1 : 0) | 0;
    }
    return 0;
  }
}
class Companion_0 {
  bcq(codePointLow, codePointHigh) {
    return NumericEntityEncoder.vcq(numberRangeToNumber(codePointLow, codePointHigh), true);
  }
}
class NumericEntityEncoder extends CodePointTranslator {
  constructor(range, between) {
    return new.target.vcq(range, between);
  }
  static vcq(range, between) {
    var $this = this.ncq();
    $this.tcq_1 = range;
    $this.ucq_1 = between;
    return $this;
  }
  static wcq() {
    return this.vcq(numberRangeToNumber(0, 2147483647), true);
  }
  ocq(codePoint, stringBuilder) {
    if (!(this.ucq_1 === this.tcq_1.as(codePoint))) {
      return false;
    }
    stringBuilder.i1('&#');
    stringBuilder.i1(toString_0(codePoint, 10));
    stringBuilder.k1(_Char___init__impl__6a9atx(59));
    return true;
  }
}
class UnicodeUnpairedSurrogateRemover extends CodePointTranslator {
  constructor() {
    return new.target.ccq();
  }
  static ccq() {
    return this.ncq();
  }
  ocq(codePoint, stringBuilder) {
    var tmp;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(55296);
    if (codePoint >= Char__toInt_impl_vasixd(this_0)) {
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(57343);
      tmp = codePoint <= Char__toInt_impl_vasixd(this_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
}
class CharsUtils {
  constructor() {
    this.qcq_1 = 65536;
    this.rcq_1 = 1114111;
  }
  scq(codePoint) {
    var tmp;
    if (isBmpCodePoint(this, codePoint)) {
      // Inline function 'kotlin.charArrayOf' call
      tmp = charArrayOf([numberToChar(codePoint)]);
    } else if (isValidCodePoint(this, codePoint)) {
      var result = charArray(2);
      toSurrogates(this, codePoint, result, 0);
      tmp = result;
    } else {
      throw IllegalArgumentException.te();
    }
    return tmp;
  }
}
//endregion
function invert($this, list) {
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.h2(collectionSizeOrDefault(list, 10));
  var _iterator__ex2g4s = list.l1();
  while (_iterator__ex2g4s.m1()) {
    var item = _iterator__ex2g4s.n1();
    var a = item.pm();
    var b = item.qm();
    var tmp$ret$2 = to(b, a);
    destination.i2(tmp$ret$2);
  }
  return destination;
}
var EntityMaps_instance;
function EntityMaps_getInstance() {
  if (EntityMaps_instance === VOID)
    new EntityMaps();
  return EntityMaps_instance;
}
var KsoupEntities_instance;
function KsoupEntities_getInstance() {
  if (KsoupEntities_instance === VOID)
    new KsoupEntities();
  return KsoupEntities_instance;
}
function translate($this, input, stringBuilder) {
  var pos = 0;
  var len = input.length;
  $l$loop: while (pos < len) {
    var consumed = $this.ocp(input, pos, stringBuilder);
    if (consumed === 0) {
      var c1 = charCodeAt(input, pos);
      stringBuilder.k1(c1);
      pos = pos + 1 | 0;
      if (isHighSurrogate(c1) && pos < len) {
        var c2 = charCodeAt(input, pos);
        if (isLowSurrogate(c2)) {
          stringBuilder.k1(c2);
          pos = pos + 1 | 0;
        }
      }
      continue $l$loop;
    }
    var inductionVariable = 0;
    if (inductionVariable < consumed)
      do {
        var pt = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        pos = pos + 1 | 0;
      }
       while (inductionVariable < consumed);
  }
}
var Option_SemiColonRequired_instance;
var Option_SemiColonOptional_instance;
var Option_ErrorIfNoSemiColon_instance;
var Option_entriesInitialized;
function Option_initEntries() {
  if (Option_entriesInitialized)
    return Unit_instance;
  Option_entriesInitialized = true;
  Option_SemiColonRequired_instance = new Option('SemiColonRequired', 0);
  Option_SemiColonOptional_instance = new Option('SemiColonOptional', 1);
  Option_ErrorIfNoSemiColon_instance = new Option('ErrorIfNoSemiColon', 2);
}
function isSet($this, option) {
  return $this.jcq_1.o2(option);
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function Option_SemiColonRequired_getInstance() {
  Option_initEntries();
  return Option_SemiColonRequired_instance;
}
function Option_ErrorIfNoSemiColon_getInstance() {
  Option_initEntries();
  return Option_ErrorIfNoSemiColon_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
function isBmpCodePoint($this, codePoint) {
  return (codePoint >>> 16 | 0) === 0;
}
function isValidCodePoint($this, codePoint) {
  var plane = codePoint >>> 16 | 0;
  return plane < 17;
}
function toSurrogates($this, codePoint, dst, index) {
  dst[index + 1 | 0] = lowSurrogate($this, codePoint);
  dst[index] = highSurrogate($this, codePoint);
}
function highSurrogate($this, codePoint) {
  var tmp = codePoint >>> 10 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = _Char___init__impl__6a9atx(55296);
  var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
  return numberToChar(tmp + (tmp$ret$0 - 64 | 0) | 0);
}
function lowSurrogate($this, codePoint) {
  var tmp = codePoint & 1023;
  // Inline function 'kotlin.code' call
  var this_0 = _Char___init__impl__6a9atx(56320);
  var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
  return numberToChar(tmp + tmp$ret$0 | 0);
}
var CharsUtils_instance;
function CharsUtils_getInstance() {
  return CharsUtils_instance;
}
//region block: post-declaration
initMetadataForClass(StringTranslator, 'StringTranslator');
initMetadataForClass(AggregateTranslator, 'AggregateTranslator', AggregateTranslator.lcp);
initMetadataForObject(EntityMaps, 'EntityMaps');
initMetadataForObject(KsoupEntities, 'KsoupEntities');
initMetadataForClass(LookupTranslator, 'LookupTranslator');
initMetadataForClass(CodePointTranslator, 'CodePointTranslator');
initMetadataForClass(Option, 'Option');
initMetadataForCompanion(Companion);
initMetadataForClass(NumericEntityDecoder, 'NumericEntityDecoder');
initMetadataForCompanion(Companion_0);
initMetadataForClass(NumericEntityEncoder, 'NumericEntityEncoder', NumericEntityEncoder.wcq);
initMetadataForClass(UnicodeUnpairedSurrogateRemover, 'UnicodeUnpairedSurrogateRemover', UnicodeUnpairedSurrogateRemover.ccq);
initMetadataForObject(CharsUtils, 'CharsUtils');
//endregion
//region block: init
Companion_instance_0 = new Companion_0();
CharsUtils_instance = new CharsUtils();
//endregion
//region block: exports
export {
  KsoupEntities_getInstance as KsoupEntities_getInstanceu7tbn3c3x14t,
};
//endregion

//# sourceMappingURL=Ksoup-ksoup-entities.mjs.map
