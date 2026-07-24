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
  static fcj() {
    return createThis(this);
  }
  icj(input) {
    var stringBuilder = StringBuilder.nc(imul(input.length, 2));
    translate(this, input, stringBuilder);
    return stringBuilder.toString();
  }
}
class AggregateTranslator extends StringTranslator {
  constructor() {
    return new.target.ecj();
  }
  static ecj() {
    var $this = this.fcj();
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.dcj_1 = ArrayList.j2();
    return $this;
  }
  static gcj(translators) {
    var $this = this.ecj();
    addAll($this.dcj_1, translators);
    return $this;
  }
  hcj(input, offset, stringBuilder) {
    var _iterator__ex2g4s = this.dcj_1.l1();
    while (_iterator__ex2g4s.m1()) {
      var translator = _iterator__ex2g4s.n1();
      var consumed = translator.hcj(input, offset, stringBuilder);
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
    this.jcj_1 = listOf([to('<', '&gt;'), to('>', '&lt;'), to('"', '&quot;'), to("'", '&apos;'), to('&', '&amp;')]);
    this.kcj_1 = invert(this, this.jcj_1);
    this.lcj_1 = listOf([to("'", '&apos;'), to('\xA0', '&nbsp'), to('\xA0', '&nbsp;'), to('\xA1', '&iexcl'), to('\xA1', '&iexcl;'), to('\xA2', '&cent'), to('\xA2', '&cent;'), to('\xA3', '&pound'), to('\xA3', '&pound;'), to('\xA4', '&curren'), to('\xA4', '&curren;'), to('\xA5', '&yen'), to('\xA5', '&yen;'), to('\xA6', '&brvbar'), to('\xA6', '&brvbar;'), to('\xA7', '&sect'), to('\xA7', '&sect;'), to('\xA8', '&uml'), to('\xA8', '&uml;'), to('\xA9', '&copy'), to('\xA9', '&copy;'), to('\xAA', '&ordf'), to('\xAA', '&ordf;'), to('\xAB', '&laquo'), to('\xAB', '&laquo;'), to('\xAC', '&not'), to('\xAC', '&not;'), to('\xAD', '&shy'), to('\xAD', '&shy;'), to('\xAE', '&reg'), to('\xAE', '&reg;'), to('\xAF', '&macr'), to('\xAF', '&macr;'), to('\xB0', '&deg'), to('\xB0', '&deg;'), to('\xB1', '&plusmn'), to('\xB1', '&plusmn;'), to('\xB2', '&sup2'), to('\xB2', '&sup2;'), to('\xB3', '&sup3'), to('\xB3', '&sup3;'), to('\xB4', '&acute'), to('\xB4', '&acute;'), to('\xB5', '&micro'), to('\xB5', '&micro;'), to('\xB6', '&para'), to('\xB6', '&para;'), to('\xB7', '&middot'), to('\xB7', '&middot;'), to('\xB8', '&cedil'), to('\xB8', '&cedil;'), to('\xB9', '&sup1'), to('\xB9', '&sup1;'), to('\xBA', '&ordm'), to('\xBA', '&ordm;'), to('\xBB', '&raquo'), to('\xBB', '&raquo;'), to('\xBC', '&frac14'), to('\xBC', '&frac14;'), to('\xBD', '&frac12'), to('\xBD', '&frac12;'), to('\xBE', '&frac34'), to('\xBE', '&frac34;'), to('\xBF', '&iquest'), to('\xBF', '&iquest;'), to('\xC0', '&Agrave'), to('\xC0', '&Agrave;'), to('\xC1', '&Aacute'), to('\xC1', '&Aacute;'), to('\xC2', '&Acirc'), to('\xC2', '&Acirc;'), to('\xC3', '&Atilde'), to('\xC3', '&Atilde;'), to('\xC4', '&Auml'), to('\xC4', '&Auml;'), to('\xC5', '&Aring'), to('\xC5', '&Aring;'), to('\xC6', '&AElig'), to('\xC6', '&AElig;'), to('\xC7', '&Ccedil'), to('\xC7', '&Ccedil;'), to('\xC8', '&Egrave'), to('\xC8', '&Egrave;'), to('\xC9', '&Eacute'), to('\xC9', '&Eacute;'), to('\xCA', '&Ecirc'), to('\xCA', '&Ecirc;'), to('\xCB', '&Euml'), to('\xCB', '&Euml;'), to('\xCC', '&Igrave'), to('\xCC', '&Igrave;'), to('\xCD', '&Iacute'), to('\xCD', '&Iacute;'), to('\xCE', '&Icirc'), to('\xCE', '&Icirc;'), to('\xCF', '&Iuml'), to('\xCF', '&Iuml;'), to('\xD0', '&ETH'), to('\xD0', '&ETH;'), to('\xD1', '&Ntilde'), to('\xD1', '&Ntilde;'), to('\xD2', '&Ograve'), to('\xD2', '&Ograve;'), to('\xD3', '&Oacute'), to('\xD3', '&Oacute;'), to('\xD4', '&Ocirc'), to('\xD4', '&Ocirc;'), to('\xD5', '&Otilde'), to('\xD5', '&Otilde;'), to('\xD6', '&Ouml'), to('\xD6', '&Ouml;'), to('\xD7', '&times'), to('\xD7', '&times;'), to('\xD8', '&Oslash'), to('\xD8', '&Oslash;'), to('\xD9', '&Ugrave'), to('\xD9', '&Ugrave;'), to('\xDA', '&Uacute'), to('\xDA', '&Uacute;'), to('\xDB', '&Ucirc'), to('\xDB', '&Ucirc;'), to('\xDC', '&Uuml'), to('\xDC', '&Uuml;'), to('\xDD', '&Yacute'), to('\xDD', '&Yacute;'), to('\xDE', '&THORN'), to('\xDE', '&THORN;'), to('\xDF', '&szlig'), to('\xDF', '&szlig;'), to('\xE0', '&agrave'), to('\xE0', '&agrave;'), to('\xE1', '&aacute'), to('\xE1', '&aacute;'), to('\xE2', '&acirc'), to('\xE2', '&acirc;'), to('\xE3', '&atilde'), to('\xE3', '&atilde;'), to('\xE4', '&auml'), to('\xE4', '&auml;'), to('\xE5', '&aring'), to('\xE5', '&aring;'), to('\xE6', '&aelig'), to('\xE6', '&aelig;'), to('\xE7', '&ccedil'), to('\xE7', '&ccedil;'), to('\xE8', '&egrave'), to('\xE8', '&egrave;'), to('\xE9', '&eacute'), to('\xE9', '&eacute;'), to('\xEA', '&ecirc'), to('\xEA', '&ecirc;'), to('\xEB', '&euml'), to('\xEB', '&euml;'), to('\xEC', '&igrave'), to('\xEC', '&igrave;'), to('\xED', '&iacute'), to('\xED', '&iacute;'), to('\xEE', '&icirc'), to('\xEE', '&icirc;'), to('\xEF', '&iuml'), to('\xEF', '&iuml;'), to('\xF0', '&eth'), to('\xF0', '&eth;'), to('\xF1', '&ntilde'), to('\xF1', '&ntilde;'), to('\xF2', '&ograve'), to('\xF2', '&ograve;'), to('\xF3', '&oacute'), to('\xF3', '&oacute;'), to('\xF4', '&ocirc'), to('\xF4', '&ocirc;'), to('\xF5', '&otilde'), to('\xF5', '&otilde;'), to('\xF6', '&ouml'), to('\xF6', '&ouml;'), to('\xF7', '&divide'), to('\xF7', '&divide;'), to('\xF8', '&oslash'), to('\xF8', '&oslash;'), to('\xF9', '&ugrave'), to('\xF9', '&ugrave;'), to('\xFA', '&uacute'), to('\xFA', '&uacute;'), to('\xFB', '&ucirc'), to('\xFB', '&ucirc;'), to('\xFC', '&uuml'), to('\xFC', '&uuml;'), to('\xFD', '&yacute'), to('\xFD', '&yacute;'), to('\xFE', '&thorn'), to('\xFE', '&thorn;'), to('\xFF', '&yuml'), to('\xFF', '&yuml;'), to('"', '&quot'), to('"', '&quot;'), to('&', '&amp'), to('&', '&amp;'), to('<', '&lt'), to('<', '&lt;'), to('>', '&gt'), to('>', '&gt;'), to('\u0152', '&OElig;'), to('\u0153', '&oelig;'), to('\u0160', '&Scaron;'), to('\u0161', '&scaron;'), to('\u0178', '&Yuml;'), to('\u02C6', '&circ;'), to('\u02DC', '&tilde;'), to('\u2002', '&ensp;'), to('\u2003', '&emsp;'), to('\u2009', '&thinsp;'), to('\u200C', '&zwnj;'), to('\u200D', '&zwj;'), to('\u200E', '&lrm;'), to('\u200F', '&rlm;'), to('\u2013', '&ndash;'), to('\u2014', '&mdash;'), to('\u2018', '&lsquo;'), to('\u2019', '&rsquo;'), to('\u201A', '&sbquo;'), to('\u201C', '&ldquo;'), to('\u201D', '&rdquo;'), to('\u201E', '&bdquo;'), to('\u2020', '&dagger;'), to('\u2021', '&Dagger;'), to('\u2030', '&permil;'), to('\u2039', '&lsaquo;'), to('\u203A', '&rsaquo;'), to('\u20AC', '&euro;'), to('\u0192', '&fnof;'), to('\u0391', '&Alpha;'), to('\u0392', '&Beta;'), to('\u0393', '&Gamma;'), to('\u0394', '&Delta;'), to('\u0395', '&Epsilon;'), to('\u0396', '&Zeta;'), to('\u0397', '&Eta;'), to('\u0398', '&Theta;'), to('\u0399', '&Iota;'), to('\u039A', '&Kappa;'), to('\u039B', '&Lambda;'), to('\u039C', '&Mu;'), to('\u039D', '&Nu;'), to('\u039E', '&Xi;'), to('\u039F', '&Omicron;'), to('\u03A0', '&Pi;'), to('\u03A1', '&Rho;'), to('\u03A3', '&Sigma;'), to('\u03A4', '&Tau;'), to('\u03A5', '&Upsilon;'), to('\u03A6', '&Phi;'), to('\u03A7', '&Chi;'), to('\u03A8', '&Psi;'), to('\u03A9', '&Omega;'), to('\u03B1', '&alpha;'), to('\u03B2', '&beta;'), to('\u03B3', '&gamma;'), to('\u03B4', '&delta;'), to('\u03B5', '&epsilon;'), to('\u03B6', '&zeta;'), to('\u03B7', '&eta;'), to('\u03B8', '&theta;'), to('\u03B9', '&iota;'), to('\u03BA', '&kappa;'), to('\u03BB', '&lambda;'), to('\u03BC', '&mu;'), to('\u03BD', '&nu;'), to('\u03BE', '&xi;'), to('\u03BF', '&omicron;'), to('\u03C0', '&pi;'), to('\u03C1', '&rho;'), to('\u03C2', '&sigmaf;'), to('\u03C3', '&sigma;'), to('\u03C4', '&tau;'), to('\u03C5', '&upsilon;'), to('\u03C6', '&phi;'), to('\u03C7', '&chi;'), to('\u03C8', '&psi;'), to('\u03C9', '&omega;'), to('\u03D1', '&thetasym;'), to('\u03D2', '&upsih;'), to('\u03D6', '&piv;'), to('\u2022', '&bull;'), to('\u2026', '&hellip;'), to('\u2032', '&prime;'), to('\u2033', '&Prime;'), to('\u203E', '&oline;'), to('\u2044', '&frasl;'), to('\u2118', '&weierp;'), to('\u2111', '&image;'), to('\u211C', '&real;'), to('\u2122', '&trade;'), to('\u2135', '&alefsym;'), to('\u2190', '&larr;'), to('\u2191', '&uarr;'), to('\u2192', '&rarr;'), to('\u2193', '&darr;'), to('\u2194', '&harr;'), to('\u21B5', '&crarr;'), to('\u21D0', '&lArr;'), to('\u21D1', '&uArr;'), to('\u21D2', '&rArr;'), to('\u21D3', '&dArr;'), to('\u21D4', '&hArr;'), to('\u2200', '&forall;'), to('\u2202', '&part;'), to('\u2203', '&exist;'), to('\u2205', '&empty;'), to('\u2207', '&nabla;'), to('\u2208', '&isin;'), to('\u2209', '&notin;'), to('\u220B', '&ni;'), to('\u220F', '&prod;'), to('\u2211', '&sum;'), to('\u2212', '&minus;'), to('\u2217', '&lowast;'), to('\u221A', '&radic;'), to('\u221D', '&prop;'), to('\u221E', '&infin;'), to('\u2220', '&ang;'), to('\u2227', '&and;'), to('\u2228', '&or;'), to('\u2229', '&cap;'), to('\u222A', '&cup;'), to('\u222B', '&int;'), to('\u2234', '&there4;'), to('\u223C', '&sim;'), to('\u2245', '&cong;'), to('\u2248', '&asymp;'), to('\u2260', '&ne;'), to('\u2261', '&equiv;'), to('\u2264', '&le;'), to('\u2265', '&ge;'), to('\u2282', '&sub;'), to('\u2283', '&sup;'), to('\u2284', '&nsub;'), to('\u2286', '&sube;'), to('\u2287', '&supe;'), to('\u2295', '&oplus;'), to('\u2297', '&otimes;'), to('\u22A5', '&perp;'), to('\u22C5', '&sdot;'), to('\u2308', '&lceil;'), to('\u2309', '&rceil;'), to('\u230A', '&lfloor;'), to('\u230B', '&rfloor;'), to('\u2329', '&lang;'), to('\u232A', '&rang;'), to('\u25CA', '&loz;'), to('\u2660', '&spades;'), to('\u2663', '&clubs;'), to('\u2665', '&hearts;'), to('\u2666', '&diams;')]);
    this.mcj_1 = invert(this, this.lcj_1);
    var tmp = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var encodeMap = ArrayList.j2();
    encodeMap.e2(to('\xC6', '&AElig'));
    encodeMap.e2(to('\xC6', '&AElig;'));
    encodeMap.e2(to('&', '&AMP'));
    encodeMap.e2(to('&', '&AMP;'));
    encodeMap.e2(to('\xC1', '&Aacute'));
    encodeMap.e2(to('\xC1', '&Aacute;'));
    encodeMap.e2(to('\u0102', '&Abreve;'));
    encodeMap.e2(to('\xC2', '&Acirc'));
    encodeMap.e2(to('\xC2', '&Acirc;'));
    encodeMap.e2(to('\u0410', '&Acy;'));
    encodeMap.e2(to('\uD835\uDD04', '&Afr;'));
    encodeMap.e2(to('\xC0', '&Agrave'));
    encodeMap.e2(to('\xC0', '&Agrave;'));
    encodeMap.e2(to('\u0391', '&Alpha;'));
    encodeMap.e2(to('\u0100', '&Amacr;'));
    encodeMap.e2(to('\u2A53', '&And;'));
    encodeMap.e2(to('\u0104', '&Aogon;'));
    encodeMap.e2(to('\uD835\uDD38', '&Aopf;'));
    encodeMap.e2(to('\u2061', '&ApplyFunction;'));
    encodeMap.e2(to('\xC5', '&Aring'));
    encodeMap.e2(to('\xC5', '&Aring;'));
    encodeMap.e2(to('\uD835\uDC9C', '&Ascr;'));
    encodeMap.e2(to('\u2254', '&Assign;'));
    encodeMap.e2(to('\xC3', '&Atilde'));
    encodeMap.e2(to('\xC3', '&Atilde;'));
    encodeMap.e2(to('\xC4', '&Auml'));
    encodeMap.e2(to('\xC4', '&Auml;'));
    encodeMap.e2(to('\u2216', '&Backslash;'));
    encodeMap.e2(to('\u2AE7', '&Barv;'));
    encodeMap.e2(to('\u2306', '&Barwed;'));
    encodeMap.e2(to('\u0411', '&Bcy;'));
    encodeMap.e2(to('\u2235', '&Because;'));
    encodeMap.e2(to('\u212C', '&Bernoullis;'));
    encodeMap.e2(to('\u0392', '&Beta;'));
    encodeMap.e2(to('\uD835\uDD05', '&Bfr;'));
    encodeMap.e2(to('\uD835\uDD39', '&Bopf;'));
    encodeMap.e2(to('\u02D8', '&Breve;'));
    encodeMap.e2(to('\u212C', '&Bscr;'));
    encodeMap.e2(to('\u224E', '&Bumpeq;'));
    encodeMap.e2(to('\u0427', '&CHcy;'));
    encodeMap.e2(to('\xA9', '&COPY'));
    encodeMap.e2(to('\xA9', '&COPY;'));
    encodeMap.e2(to('\u0106', '&Cacute;'));
    encodeMap.e2(to('\u22D2', '&Cap;'));
    encodeMap.e2(to('\u2145', '&CapitalDifferentialD;'));
    encodeMap.e2(to('\u212D', '&Cayleys;'));
    encodeMap.e2(to('\u010C', '&Ccaron;'));
    encodeMap.e2(to('\xC7', '&Ccedil'));
    encodeMap.e2(to('\xC7', '&Ccedil;'));
    encodeMap.e2(to('\u0108', '&Ccirc;'));
    encodeMap.e2(to('\u2230', '&Cconint;'));
    encodeMap.e2(to('\u010A', '&Cdot;'));
    encodeMap.e2(to('\xB8', '&Cedilla;'));
    encodeMap.e2(to('\xB7', '&CenterDot;'));
    encodeMap.e2(to('\u212D', '&Cfr;'));
    encodeMap.e2(to('\u03A7', '&Chi;'));
    encodeMap.e2(to('\u2299', '&CircleDot;'));
    encodeMap.e2(to('\u2296', '&CircleMinus;'));
    encodeMap.e2(to('\u2295', '&CirclePlus;'));
    encodeMap.e2(to('\u2297', '&CircleTimes;'));
    encodeMap.e2(to('\u2232', '&ClockwiseContourIntegral;'));
    encodeMap.e2(to('\u201D', '&CloseCurlyDoubleQuote;'));
    encodeMap.e2(to('\u2019', '&CloseCurlyQuote;'));
    encodeMap.e2(to('\u2237', '&Colon;'));
    encodeMap.e2(to('\u2A74', '&Colone;'));
    encodeMap.e2(to('\u2261', '&Congruent;'));
    encodeMap.e2(to('\u222F', '&Conint;'));
    encodeMap.e2(to('\u222E', '&ContourIntegral;'));
    encodeMap.e2(to('\u2102', '&Copf;'));
    encodeMap.e2(to('\u2210', '&Coproduct;'));
    encodeMap.e2(to('\u2233', '&CounterClockwiseContourIntegral;'));
    encodeMap.e2(to('\u2A2F', '&Cross;'));
    encodeMap.e2(to('\uD835\uDC9E', '&Cscr;'));
    encodeMap.e2(to('\u22D3', '&Cup;'));
    encodeMap.e2(to('\u224D', '&CupCap;'));
    encodeMap.e2(to('\u2145', '&DD;'));
    encodeMap.e2(to('\u2911', '&DDotrahd;'));
    encodeMap.e2(to('\u0402', '&DJcy;'));
    encodeMap.e2(to('\u0405', '&DScy;'));
    encodeMap.e2(to('\u040F', '&DZcy;'));
    encodeMap.e2(to('\u2021', '&Dagger;'));
    encodeMap.e2(to('\u21A1', '&Darr;'));
    encodeMap.e2(to('\u2AE4', '&Dashv;'));
    encodeMap.e2(to('\u010E', '&Dcaron;'));
    encodeMap.e2(to('\u0414', '&Dcy;'));
    encodeMap.e2(to('\u2207', '&Del;'));
    encodeMap.e2(to('\u0394', '&Delta;'));
    encodeMap.e2(to('\uD835\uDD07', '&Dfr;'));
    encodeMap.e2(to('\xB4', '&DiacriticalAcute;'));
    encodeMap.e2(to('\u02D9', '&DiacriticalDot;'));
    encodeMap.e2(to('\u02DD', '&DiacriticalDoubleAcute;'));
    encodeMap.e2(to('`', '&DiacriticalGrave;'));
    encodeMap.e2(to('\u02DC', '&DiacriticalTilde;'));
    encodeMap.e2(to('\u22C4', '&Diamond;'));
    encodeMap.e2(to('\u2146', '&DifferentialD;'));
    encodeMap.e2(to('\uD835\uDD3B', '&Dopf;'));
    encodeMap.e2(to('\xA8', '&Dot;'));
    encodeMap.e2(to('\u20DC', '&DotDot;'));
    encodeMap.e2(to('\u2250', '&DotEqual;'));
    encodeMap.e2(to('\u222F', '&DoubleContourIntegral;'));
    encodeMap.e2(to('\xA8', '&DoubleDot;'));
    encodeMap.e2(to('\u21D3', '&DoubleDownArrow;'));
    encodeMap.e2(to('\u21D0', '&DoubleLeftArrow;'));
    encodeMap.e2(to('\u21D4', '&DoubleLeftRightArrow;'));
    encodeMap.e2(to('\u2AE4', '&DoubleLeftTee;'));
    encodeMap.e2(to('\u27F8', '&DoubleLongLeftArrow;'));
    encodeMap.e2(to('\u27FA', '&DoubleLongLeftRightArrow;'));
    encodeMap.e2(to('\u27F9', '&DoubleLongRightArrow;'));
    encodeMap.e2(to('\u21D2', '&DoubleRightArrow;'));
    encodeMap.e2(to('\u22A8', '&DoubleRightTee;'));
    encodeMap.e2(to('\u21D1', '&DoubleUpArrow;'));
    encodeMap.e2(to('\u21D5', '&DoubleUpDownArrow;'));
    encodeMap.e2(to('\u2225', '&DoubleVerticalBar;'));
    encodeMap.e2(to('\u2193', '&DownArrow;'));
    encodeMap.e2(to('\u2913', '&DownArrowBar;'));
    encodeMap.e2(to('\u21F5', '&DownArrowUpArrow;'));
    encodeMap.e2(to('\u0311', '&DownBreve;'));
    encodeMap.e2(to('\u2950', '&DownLeftRightVector;'));
    encodeMap.e2(to('\u295E', '&DownLeftTeeVector;'));
    encodeMap.e2(to('\u21BD', '&DownLeftVector;'));
    encodeMap.e2(to('\u2956', '&DownLeftVectorBar;'));
    encodeMap.e2(to('\u295F', '&DownRightTeeVector;'));
    encodeMap.e2(to('\u21C1', '&DownRightVector;'));
    encodeMap.e2(to('\u2957', '&DownRightVectorBar;'));
    encodeMap.e2(to('\u22A4', '&DownTee;'));
    encodeMap.e2(to('\u21A7', '&DownTeeArrow;'));
    encodeMap.e2(to('\u21D3', '&Downarrow;'));
    encodeMap.e2(to('\uD835\uDC9F', '&Dscr;'));
    encodeMap.e2(to('\u0110', '&Dstrok;'));
    encodeMap.e2(to('\u014A', '&ENG;'));
    encodeMap.e2(to('\xD0', '&ETH'));
    encodeMap.e2(to('\xD0', '&ETH;'));
    encodeMap.e2(to('\xC9', '&Eacute'));
    encodeMap.e2(to('\xC9', '&Eacute;'));
    encodeMap.e2(to('\u011A', '&Ecaron;'));
    encodeMap.e2(to('\xCA', '&Ecirc'));
    encodeMap.e2(to('\xCA', '&Ecirc;'));
    encodeMap.e2(to('\u042D', '&Ecy;'));
    encodeMap.e2(to('\u0116', '&Edot;'));
    encodeMap.e2(to('\uD835\uDD08', '&Efr;'));
    encodeMap.e2(to('\xC8', '&Egrave'));
    encodeMap.e2(to('\xC8', '&Egrave;'));
    encodeMap.e2(to('\u2208', '&Element;'));
    encodeMap.e2(to('\u0112', '&Emacr;'));
    encodeMap.e2(to('\u25FB', '&EmptySmallSquare;'));
    encodeMap.e2(to('\u25AB', '&EmptyVerySmallSquare;'));
    encodeMap.e2(to('\u0118', '&Eogon;'));
    encodeMap.e2(to('\uD835\uDD3C', '&Eopf;'));
    encodeMap.e2(to('\u0395', '&Epsilon;'));
    encodeMap.e2(to('\u2A75', '&Equal;'));
    encodeMap.e2(to('\u2242', '&EqualTilde;'));
    encodeMap.e2(to('\u21CC', '&Equilibrium;'));
    encodeMap.e2(to('\u2130', '&Escr;'));
    encodeMap.e2(to('\u2A73', '&Esim;'));
    encodeMap.e2(to('\u0397', '&Eta;'));
    encodeMap.e2(to('\xCB', '&Euml'));
    encodeMap.e2(to('\xCB', '&Euml;'));
    encodeMap.e2(to('\u2203', '&Exists;'));
    encodeMap.e2(to('\u2147', '&ExponentialE;'));
    encodeMap.e2(to('\u0424', '&Fcy;'));
    encodeMap.e2(to('\uD835\uDD09', '&Ffr;'));
    encodeMap.e2(to('\u25FC', '&FilledSmallSquare;'));
    encodeMap.e2(to('\u25AA', '&FilledVerySmallSquare;'));
    encodeMap.e2(to('\uD835\uDD3D', '&Fopf;'));
    encodeMap.e2(to('\u2200', '&ForAll;'));
    encodeMap.e2(to('\u2131', '&Fouriertrf;'));
    encodeMap.e2(to('\u2131', '&Fscr;'));
    encodeMap.e2(to('\u0403', '&GJcy;'));
    encodeMap.e2(to('>', '&GT'));
    encodeMap.e2(to('>', '&GT;'));
    encodeMap.e2(to('\u0393', '&Gamma;'));
    encodeMap.e2(to('\u03DC', '&Gammad;'));
    encodeMap.e2(to('\u011E', '&Gbreve;'));
    encodeMap.e2(to('\u0122', '&Gcedil;'));
    encodeMap.e2(to('\u011C', '&Gcirc;'));
    encodeMap.e2(to('\u0413', '&Gcy;'));
    encodeMap.e2(to('\u0120', '&Gdot;'));
    encodeMap.e2(to('\uD835\uDD0A', '&Gfr;'));
    encodeMap.e2(to('\u22D9', '&Gg;'));
    encodeMap.e2(to('\uD835\uDD3E', '&Gopf;'));
    encodeMap.e2(to('\u2265', '&GreaterEqual;'));
    encodeMap.e2(to('\u22DB', '&GreaterEqualLess;'));
    encodeMap.e2(to('\u2267', '&GreaterFullEqual;'));
    encodeMap.e2(to('\u2AA2', '&GreaterGreater;'));
    encodeMap.e2(to('\u2277', '&GreaterLess;'));
    encodeMap.e2(to('\u2A7E', '&GreaterSlantEqual;'));
    encodeMap.e2(to('\u2273', '&GreaterTilde;'));
    encodeMap.e2(to('\uD835\uDCA2', '&Gscr;'));
    encodeMap.e2(to('\u226B', '&Gt;'));
    encodeMap.e2(to('\u042A', '&HARDcy;'));
    encodeMap.e2(to('\u02C7', '&Hacek;'));
    encodeMap.e2(to('^', '&Hat;'));
    encodeMap.e2(to('\u0124', '&Hcirc;'));
    encodeMap.e2(to('\u210C', '&Hfr;'));
    encodeMap.e2(to('\u210B', '&HilbertSpace;'));
    encodeMap.e2(to('\u210D', '&Hopf;'));
    encodeMap.e2(to('\u2500', '&HorizontalLine;'));
    encodeMap.e2(to('\u210B', '&Hscr;'));
    encodeMap.e2(to('\u0126', '&Hstrok;'));
    encodeMap.e2(to('\u224E', '&HumpDownHump;'));
    encodeMap.e2(to('\u224F', '&HumpEqual;'));
    encodeMap.e2(to('\u0415', '&IEcy;'));
    encodeMap.e2(to('\u0132', '&IJlig;'));
    encodeMap.e2(to('\u0401', '&IOcy;'));
    encodeMap.e2(to('\xCD', '&Iacute'));
    encodeMap.e2(to('\xCD', '&Iacute;'));
    encodeMap.e2(to('\xCE', '&Icirc'));
    encodeMap.e2(to('\xCE', '&Icirc;'));
    encodeMap.e2(to('\u0418', '&Icy;'));
    encodeMap.e2(to('\u0130', '&Idot;'));
    encodeMap.e2(to('\u2111', '&Ifr;'));
    encodeMap.e2(to('\xCC', '&Igrave'));
    encodeMap.e2(to('\xCC', '&Igrave;'));
    encodeMap.e2(to('\u2111', '&Im;'));
    encodeMap.e2(to('\u012A', '&Imacr;'));
    encodeMap.e2(to('\u2148', '&ImaginaryI;'));
    encodeMap.e2(to('\u21D2', '&Implies;'));
    encodeMap.e2(to('\u222C', '&Int;'));
    encodeMap.e2(to('\u222B', '&Integral;'));
    encodeMap.e2(to('\u22C2', '&Intersection;'));
    encodeMap.e2(to('\u2063', '&InvisibleComma;'));
    encodeMap.e2(to('\u2062', '&InvisibleTimes;'));
    encodeMap.e2(to('\u012E', '&Iogon;'));
    encodeMap.e2(to('\uD835\uDD40', '&Iopf;'));
    encodeMap.e2(to('\u0399', '&Iota;'));
    encodeMap.e2(to('\u2110', '&Iscr;'));
    encodeMap.e2(to('\u0128', '&Itilde;'));
    encodeMap.e2(to('\u0406', '&Iukcy;'));
    encodeMap.e2(to('\xCF', '&Iuml'));
    encodeMap.e2(to('\xCF', '&Iuml;'));
    encodeMap.e2(to('\u0134', '&Jcirc;'));
    encodeMap.e2(to('\u0419', '&Jcy;'));
    encodeMap.e2(to('\uD835\uDD0D', '&Jfr;'));
    encodeMap.e2(to('\uD835\uDD41', '&Jopf;'));
    encodeMap.e2(to('\uD835\uDCA5', '&Jscr;'));
    encodeMap.e2(to('\u0408', '&Jsercy;'));
    encodeMap.e2(to('\u0404', '&Jukcy;'));
    encodeMap.e2(to('\u0425', '&KHcy;'));
    encodeMap.e2(to('\u040C', '&KJcy;'));
    encodeMap.e2(to('\u039A', '&Kappa;'));
    encodeMap.e2(to('\u0136', '&Kcedil;'));
    encodeMap.e2(to('\u041A', '&Kcy;'));
    encodeMap.e2(to('\uD835\uDD0E', '&Kfr;'));
    encodeMap.e2(to('\uD835\uDD42', '&Kopf;'));
    encodeMap.e2(to('\uD835\uDCA6', '&Kscr;'));
    encodeMap.e2(to('\u0409', '&LJcy;'));
    encodeMap.e2(to('<', '&LT'));
    encodeMap.e2(to('<', '&LT;'));
    encodeMap.e2(to('\u0139', '&Lacute;'));
    encodeMap.e2(to('\u039B', '&Lambda;'));
    encodeMap.e2(to('\u27EA', '&Lang;'));
    encodeMap.e2(to('\u2112', '&Laplacetrf;'));
    encodeMap.e2(to('\u219E', '&Larr;'));
    encodeMap.e2(to('\u013D', '&Lcaron;'));
    encodeMap.e2(to('\u013B', '&Lcedil;'));
    encodeMap.e2(to('\u041B', '&Lcy;'));
    encodeMap.e2(to('\u27E8', '&LeftAngleBracket;'));
    encodeMap.e2(to('\u2190', '&LeftArrow;'));
    encodeMap.e2(to('\u21E4', '&LeftArrowBar;'));
    encodeMap.e2(to('\u21C6', '&LeftArrowRightArrow;'));
    encodeMap.e2(to('\u2308', '&LeftCeiling;'));
    encodeMap.e2(to('\u27E6', '&LeftDoubleBracket;'));
    encodeMap.e2(to('\u2961', '&LeftDownTeeVector;'));
    encodeMap.e2(to('\u21C3', '&LeftDownVector;'));
    encodeMap.e2(to('\u2959', '&LeftDownVectorBar;'));
    encodeMap.e2(to('\u230A', '&LeftFloor;'));
    encodeMap.e2(to('\u2194', '&LeftRightArrow;'));
    encodeMap.e2(to('\u294E', '&LeftRightVector;'));
    encodeMap.e2(to('\u22A3', '&LeftTee;'));
    encodeMap.e2(to('\u21A4', '&LeftTeeArrow;'));
    encodeMap.e2(to('\u295A', '&LeftTeeVector;'));
    encodeMap.e2(to('\u22B2', '&LeftTriangle;'));
    encodeMap.e2(to('\u29CF', '&LeftTriangleBar;'));
    encodeMap.e2(to('\u22B4', '&LeftTriangleEqual;'));
    encodeMap.e2(to('\u2951', '&LeftUpDownVector;'));
    encodeMap.e2(to('\u2960', '&LeftUpTeeVector;'));
    encodeMap.e2(to('\u21BF', '&LeftUpVector;'));
    encodeMap.e2(to('\u2958', '&LeftUpVectorBar;'));
    encodeMap.e2(to('\u21BC', '&LeftVector;'));
    encodeMap.e2(to('\u2952', '&LeftVectorBar;'));
    encodeMap.e2(to('\u21D0', '&Leftarrow;'));
    encodeMap.e2(to('\u21D4', '&Leftrightarrow;'));
    encodeMap.e2(to('\u22DA', '&LessEqualGreater;'));
    encodeMap.e2(to('\u2266', '&LessFullEqual;'));
    encodeMap.e2(to('\u2276', '&LessGreater;'));
    encodeMap.e2(to('\u2AA1', '&LessLess;'));
    encodeMap.e2(to('\u2A7D', '&LessSlantEqual;'));
    encodeMap.e2(to('\u2272', '&LessTilde;'));
    encodeMap.e2(to('\uD835\uDD0F', '&Lfr;'));
    encodeMap.e2(to('\u22D8', '&Ll;'));
    encodeMap.e2(to('\u21DA', '&Lleftarrow;'));
    encodeMap.e2(to('\u013F', '&Lmidot;'));
    encodeMap.e2(to('\u27F5', '&LongLeftArrow;'));
    encodeMap.e2(to('\u27F7', '&LongLeftRightArrow;'));
    encodeMap.e2(to('\u27F6', '&LongRightArrow;'));
    encodeMap.e2(to('\u27F8', '&Longleftarrow;'));
    encodeMap.e2(to('\u27FA', '&Longleftrightarrow;'));
    encodeMap.e2(to('\u27F9', '&Longrightarrow;'));
    encodeMap.e2(to('\uD835\uDD43', '&Lopf;'));
    encodeMap.e2(to('\u2199', '&LowerLeftArrow;'));
    encodeMap.e2(to('\u2198', '&LowerRightArrow;'));
    encodeMap.e2(to('\u2112', '&Lscr;'));
    encodeMap.e2(to('\u21B0', '&Lsh;'));
    encodeMap.e2(to('\u0141', '&Lstrok;'));
    encodeMap.e2(to('\u226A', '&Lt;'));
    encodeMap.e2(to('\u2905', '&Map;'));
    encodeMap.e2(to('\u041C', '&Mcy;'));
    encodeMap.e2(to('\u205F', '&MediumSpace;'));
    encodeMap.e2(to('\u2133', '&Mellintrf;'));
    encodeMap.e2(to('\uD835\uDD10', '&Mfr;'));
    encodeMap.e2(to('\u2213', '&MinusPlus;'));
    encodeMap.e2(to('\uD835\uDD44', '&Mopf;'));
    encodeMap.e2(to('\u2133', '&Mscr;'));
    encodeMap.e2(to('\u039C', '&Mu;'));
    encodeMap.e2(to('\u040A', '&NJcy;'));
    encodeMap.e2(to('\u0143', '&Nacute;'));
    encodeMap.e2(to('\u0147', '&Ncaron;'));
    encodeMap.e2(to('\u0145', '&Ncedil;'));
    encodeMap.e2(to('\u041D', '&Ncy;'));
    encodeMap.e2(to('\u200B', '&NegativeMediumSpace;'));
    encodeMap.e2(to('\u200B', '&NegativeThickSpace;'));
    encodeMap.e2(to('\u200B', '&NegativeThinSpace;'));
    encodeMap.e2(to('\u200B', '&NegativeVeryThinSpace;'));
    encodeMap.e2(to('\u226B', '&NestedGreaterGreater;'));
    encodeMap.e2(to('\u226A', '&NestedLessLess;'));
    encodeMap.e2(to('\n', '&NewLine;'));
    encodeMap.e2(to('\uD835\uDD11', '&Nfr;'));
    encodeMap.e2(to('\u2060', '&NoBreak;'));
    encodeMap.e2(to('\xA0', '&NonBreakingSpace;'));
    encodeMap.e2(to('\u2115', '&Nopf;'));
    encodeMap.e2(to('\u2AEC', '&Not;'));
    encodeMap.e2(to('\u2262', '&NotCongruent;'));
    encodeMap.e2(to('\u226D', '&NotCupCap;'));
    encodeMap.e2(to('\u2226', '&NotDoubleVerticalBar;'));
    encodeMap.e2(to('\u2209', '&NotElement;'));
    encodeMap.e2(to('\u2260', '&NotEqual;'));
    encodeMap.e2(to('\u2242\u0338', '&NotEqualTilde;'));
    encodeMap.e2(to('\u2204', '&NotExists;'));
    encodeMap.e2(to('\u226F', '&NotGreater;'));
    encodeMap.e2(to('\u2271', '&NotGreaterEqual;'));
    encodeMap.e2(to('\u2267\u0338', '&NotGreaterFullEqual;'));
    encodeMap.e2(to('\u226B\u0338', '&NotGreaterGreater;'));
    encodeMap.e2(to('\u2279', '&NotGreaterLess;'));
    encodeMap.e2(to('\u2A7E\u0338', '&NotGreaterSlantEqual;'));
    encodeMap.e2(to('\u2275', '&NotGreaterTilde;'));
    encodeMap.e2(to('\u224E\u0338', '&NotHumpDownHump;'));
    encodeMap.e2(to('\u224F\u0338', '&NotHumpEqual;'));
    encodeMap.e2(to('\u22EA', '&NotLeftTriangle;'));
    encodeMap.e2(to('\u29CF\u0338', '&NotLeftTriangleBar;'));
    encodeMap.e2(to('\u22EC', '&NotLeftTriangleEqual;'));
    encodeMap.e2(to('\u226E', '&NotLess;'));
    encodeMap.e2(to('\u2270', '&NotLessEqual;'));
    encodeMap.e2(to('\u2278', '&NotLessGreater;'));
    encodeMap.e2(to('\u226A\u0338', '&NotLessLess;'));
    encodeMap.e2(to('\u2A7D\u0338', '&NotLessSlantEqual;'));
    encodeMap.e2(to('\u2274', '&NotLessTilde;'));
    encodeMap.e2(to('\u2AA2\u0338', '&NotNestedGreaterGreater;'));
    encodeMap.e2(to('\u2AA1\u0338', '&NotNestedLessLess;'));
    encodeMap.e2(to('\u2280', '&NotPrecedes;'));
    encodeMap.e2(to('\u2AAF\u0338', '&NotPrecedesEqual;'));
    encodeMap.e2(to('\u22E0', '&NotPrecedesSlantEqual;'));
    encodeMap.e2(to('\u220C', '&NotReverseElement;'));
    encodeMap.e2(to('\u22EB', '&NotRightTriangle;'));
    encodeMap.e2(to('\u29D0\u0338', '&NotRightTriangleBar;'));
    encodeMap.e2(to('\u22ED', '&NotRightTriangleEqual;'));
    encodeMap.e2(to('\u228F\u0338', '&NotSquareSubset;'));
    encodeMap.e2(to('\u22E2', '&NotSquareSubsetEqual;'));
    encodeMap.e2(to('\u2290\u0338', '&NotSquareSuperset;'));
    encodeMap.e2(to('\u22E3', '&NotSquareSupersetEqual;'));
    encodeMap.e2(to('\u2282\u20D2', '&NotSubset;'));
    encodeMap.e2(to('\u2288', '&NotSubsetEqual;'));
    encodeMap.e2(to('\u2281', '&NotSucceeds;'));
    encodeMap.e2(to('\u2AB0\u0338', '&NotSucceedsEqual;'));
    encodeMap.e2(to('\u22E1', '&NotSucceedsSlantEqual;'));
    encodeMap.e2(to('\u227F\u0338', '&NotSucceedsTilde;'));
    encodeMap.e2(to('\u2283\u20D2', '&NotSuperset;'));
    encodeMap.e2(to('\u2289', '&NotSupersetEqual;'));
    encodeMap.e2(to('\u2241', '&NotTilde;'));
    encodeMap.e2(to('\u2244', '&NotTildeEqual;'));
    encodeMap.e2(to('\u2247', '&NotTildeFullEqual;'));
    encodeMap.e2(to('\u2249', '&NotTildeTilde;'));
    encodeMap.e2(to('\u2224', '&NotVerticalBar;'));
    encodeMap.e2(to('\uD835\uDCA9', '&Nscr;'));
    encodeMap.e2(to('\xD1', '&Ntilde'));
    encodeMap.e2(to('\xD1', '&Ntilde;'));
    encodeMap.e2(to('\u039D', '&Nu;'));
    encodeMap.e2(to('\u0152', '&OElig;'));
    encodeMap.e2(to('\xD3', '&Oacute'));
    encodeMap.e2(to('\xD3', '&Oacute;'));
    encodeMap.e2(to('\xD4', '&Ocirc'));
    encodeMap.e2(to('\xD4', '&Ocirc;'));
    encodeMap.e2(to('\u041E', '&Ocy;'));
    encodeMap.e2(to('\u0150', '&Odblac;'));
    encodeMap.e2(to('\uD835\uDD12', '&Ofr;'));
    encodeMap.e2(to('\xD2', '&Ograve'));
    encodeMap.e2(to('\xD2', '&Ograve;'));
    encodeMap.e2(to('\u014C', '&Omacr;'));
    encodeMap.e2(to('\u03A9', '&Omega;'));
    encodeMap.e2(to('\u039F', '&Omicron;'));
    encodeMap.e2(to('\uD835\uDD46', '&Oopf;'));
    encodeMap.e2(to('\u201C', '&OpenCurlyDoubleQuote;'));
    encodeMap.e2(to('\u2018', '&OpenCurlyQuote;'));
    encodeMap.e2(to('\u2A54', '&Or;'));
    encodeMap.e2(to('\uD835\uDCAA', '&Oscr;'));
    encodeMap.e2(to('\xD8', '&Oslash'));
    encodeMap.e2(to('\xD8', '&Oslash;'));
    encodeMap.e2(to('\xD5', '&Otilde'));
    encodeMap.e2(to('\xD5', '&Otilde;'));
    encodeMap.e2(to('\u2A37', '&Otimes;'));
    encodeMap.e2(to('\xD6', '&Ouml'));
    encodeMap.e2(to('\xD6', '&Ouml;'));
    encodeMap.e2(to('\u203E', '&OverBar;'));
    encodeMap.e2(to('\u23DE', '&OverBrace;'));
    encodeMap.e2(to('\u23B4', '&OverBracket;'));
    encodeMap.e2(to('\u23DC', '&OverParenthesis;'));
    encodeMap.e2(to('\u2202', '&PartialD;'));
    encodeMap.e2(to('\u041F', '&Pcy;'));
    encodeMap.e2(to('\uD835\uDD13', '&Pfr;'));
    encodeMap.e2(to('\u03A6', '&Phi;'));
    encodeMap.e2(to('\u03A0', '&Pi;'));
    encodeMap.e2(to('\xB1', '&PlusMinus;'));
    encodeMap.e2(to('\u210C', '&Poincareplane;'));
    encodeMap.e2(to('\u2119', '&Popf;'));
    encodeMap.e2(to('\u2ABB', '&Pr;'));
    encodeMap.e2(to('\u227A', '&Precedes;'));
    encodeMap.e2(to('\u2AAF', '&PrecedesEqual;'));
    encodeMap.e2(to('\u227C', '&PrecedesSlantEqual;'));
    encodeMap.e2(to('\u227E', '&PrecedesTilde;'));
    encodeMap.e2(to('\u2033', '&Prime;'));
    encodeMap.e2(to('\u220F', '&Product;'));
    encodeMap.e2(to('\u2237', '&Proportion;'));
    encodeMap.e2(to('\u221D', '&Proportional;'));
    encodeMap.e2(to('\uD835\uDCAB', '&Pscr;'));
    encodeMap.e2(to('\u03A8', '&Psi;'));
    encodeMap.e2(to('"', '&QUOT'));
    encodeMap.e2(to('"', '&QUOT;'));
    encodeMap.e2(to('\uD835\uDD14', '&Qfr;'));
    encodeMap.e2(to('\u211A', '&Qopf;'));
    encodeMap.e2(to('\uD835\uDCAC', '&Qscr;'));
    encodeMap.e2(to('\u2910', '&RBarr;'));
    encodeMap.e2(to('\xAE', '&REG'));
    encodeMap.e2(to('\xAE', '&REG;'));
    encodeMap.e2(to('\u0154', '&Racute;'));
    encodeMap.e2(to('\u27EB', '&Rang;'));
    encodeMap.e2(to('\u21A0', '&Rarr;'));
    encodeMap.e2(to('\u2916', '&Rarrtl;'));
    encodeMap.e2(to('\u0158', '&Rcaron;'));
    encodeMap.e2(to('\u0156', '&Rcedil;'));
    encodeMap.e2(to('\u0420', '&Rcy;'));
    encodeMap.e2(to('\u211C', '&Re;'));
    encodeMap.e2(to('\u220B', '&ReverseElement;'));
    encodeMap.e2(to('\u21CB', '&ReverseEquilibrium;'));
    encodeMap.e2(to('\u296F', '&ReverseUpEquilibrium;'));
    encodeMap.e2(to('\u211C', '&Rfr;'));
    encodeMap.e2(to('\u03A1', '&Rho;'));
    encodeMap.e2(to('\u27E9', '&RightAngleBracket;'));
    encodeMap.e2(to('\u2192', '&RightArrow;'));
    encodeMap.e2(to('\u21E5', '&RightArrowBar;'));
    encodeMap.e2(to('\u21C4', '&RightArrowLeftArrow;'));
    encodeMap.e2(to('\u2309', '&RightCeiling;'));
    encodeMap.e2(to('\u27E7', '&RightDoubleBracket;'));
    encodeMap.e2(to('\u295D', '&RightDownTeeVector;'));
    encodeMap.e2(to('\u21C2', '&RightDownVector;'));
    encodeMap.e2(to('\u2955', '&RightDownVectorBar;'));
    encodeMap.e2(to('\u230B', '&RightFloor;'));
    encodeMap.e2(to('\u22A2', '&RightTee;'));
    encodeMap.e2(to('\u21A6', '&RightTeeArrow;'));
    encodeMap.e2(to('\u295B', '&RightTeeVector;'));
    encodeMap.e2(to('\u22B3', '&RightTriangle;'));
    encodeMap.e2(to('\u29D0', '&RightTriangleBar;'));
    encodeMap.e2(to('\u22B5', '&RightTriangleEqual;'));
    encodeMap.e2(to('\u294F', '&RightUpDownVector;'));
    encodeMap.e2(to('\u295C', '&RightUpTeeVector;'));
    encodeMap.e2(to('\u21BE', '&RightUpVector;'));
    encodeMap.e2(to('\u2954', '&RightUpVectorBar;'));
    encodeMap.e2(to('\u21C0', '&RightVector;'));
    encodeMap.e2(to('\u2953', '&RightVectorBar;'));
    encodeMap.e2(to('\u21D2', '&Rightarrow;'));
    encodeMap.e2(to('\u211D', '&Ropf;'));
    encodeMap.e2(to('\u2970', '&RoundImplies;'));
    encodeMap.e2(to('\u21DB', '&Rrightarrow;'));
    encodeMap.e2(to('\u211B', '&Rscr;'));
    encodeMap.e2(to('\u21B1', '&Rsh;'));
    encodeMap.e2(to('\u29F4', '&RuleDelayed;'));
    encodeMap.e2(to('\u0429', '&SHCHcy;'));
    encodeMap.e2(to('\u0428', '&SHcy;'));
    encodeMap.e2(to('\u042C', '&SOFTcy;'));
    encodeMap.e2(to('\u015A', '&Sacute;'));
    encodeMap.e2(to('\u2ABC', '&Sc;'));
    encodeMap.e2(to('\u0160', '&Scaron;'));
    encodeMap.e2(to('\u015E', '&Scedil;'));
    encodeMap.e2(to('\u015C', '&Scirc;'));
    encodeMap.e2(to('\u0421', '&Scy;'));
    encodeMap.e2(to('\uD835\uDD16', '&Sfr;'));
    encodeMap.e2(to('\u2193', '&ShortDownArrow;'));
    encodeMap.e2(to('\u2190', '&ShortLeftArrow;'));
    encodeMap.e2(to('\u2192', '&ShortRightArrow;'));
    encodeMap.e2(to('\u2191', '&ShortUpArrow;'));
    encodeMap.e2(to('\u03A3', '&Sigma;'));
    encodeMap.e2(to('\u2218', '&SmallCircle;'));
    encodeMap.e2(to('\uD835\uDD4A', '&Sopf;'));
    encodeMap.e2(to('\u221A', '&Sqrt;'));
    encodeMap.e2(to('\u25A1', '&Square;'));
    encodeMap.e2(to('\u2293', '&SquareIntersection;'));
    encodeMap.e2(to('\u228F', '&SquareSubset;'));
    encodeMap.e2(to('\u2291', '&SquareSubsetEqual;'));
    encodeMap.e2(to('\u2290', '&SquareSuperset;'));
    encodeMap.e2(to('\u2292', '&SquareSupersetEqual;'));
    encodeMap.e2(to('\u2294', '&SquareUnion;'));
    encodeMap.e2(to('\uD835\uDCAE', '&Sscr;'));
    encodeMap.e2(to('\u22C6', '&Star;'));
    encodeMap.e2(to('\u22D0', '&Sub;'));
    encodeMap.e2(to('\u22D0', '&Subset;'));
    encodeMap.e2(to('\u2286', '&SubsetEqual;'));
    encodeMap.e2(to('\u227B', '&Succeeds;'));
    encodeMap.e2(to('\u2AB0', '&SucceedsEqual;'));
    encodeMap.e2(to('\u227D', '&SucceedsSlantEqual;'));
    encodeMap.e2(to('\u227F', '&SucceedsTilde;'));
    encodeMap.e2(to('\u220B', '&SuchThat;'));
    encodeMap.e2(to('\u2211', '&Sum;'));
    encodeMap.e2(to('\u22D1', '&Sup;'));
    encodeMap.e2(to('\u2283', '&Superset;'));
    encodeMap.e2(to('\u2287', '&SupersetEqual;'));
    encodeMap.e2(to('\u22D1', '&Supset;'));
    encodeMap.e2(to('\xDE', '&THORN'));
    encodeMap.e2(to('\xDE', '&THORN;'));
    encodeMap.e2(to('\u2122', '&TRADE;'));
    encodeMap.e2(to('\u040B', '&TSHcy;'));
    encodeMap.e2(to('\u0426', '&TScy;'));
    encodeMap.e2(to('\t', '&Tab;'));
    encodeMap.e2(to('\u03A4', '&Tau;'));
    encodeMap.e2(to('\u0164', '&Tcaron;'));
    encodeMap.e2(to('\u0162', '&Tcedil;'));
    encodeMap.e2(to('\u0422', '&Tcy;'));
    encodeMap.e2(to('\uD835\uDD17', '&Tfr;'));
    encodeMap.e2(to('\u2234', '&Therefore;'));
    encodeMap.e2(to('\u0398', '&Theta;'));
    encodeMap.e2(to('\u205F\u200A', '&ThickSpace;'));
    encodeMap.e2(to('\u2009', '&ThinSpace;'));
    encodeMap.e2(to('\u223C', '&Tilde;'));
    encodeMap.e2(to('\u2243', '&TildeEqual;'));
    encodeMap.e2(to('\u2245', '&TildeFullEqual;'));
    encodeMap.e2(to('\u2248', '&TildeTilde;'));
    encodeMap.e2(to('\uD835\uDD4B', '&Topf;'));
    encodeMap.e2(to('\u20DB', '&TripleDot;'));
    encodeMap.e2(to('\uD835\uDCAF', '&Tscr;'));
    encodeMap.e2(to('\u0166', '&Tstrok;'));
    encodeMap.e2(to('\xDA', '&Uacute'));
    encodeMap.e2(to('\xDA', '&Uacute;'));
    encodeMap.e2(to('\u219F', '&Uarr;'));
    encodeMap.e2(to('\u2949', '&Uarrocir;'));
    encodeMap.e2(to('\u040E', '&Ubrcy;'));
    encodeMap.e2(to('\u016C', '&Ubreve;'));
    encodeMap.e2(to('\xDB', '&Ucirc'));
    encodeMap.e2(to('\xDB', '&Ucirc;'));
    encodeMap.e2(to('\u0423', '&Ucy;'));
    encodeMap.e2(to('\u0170', '&Udblac;'));
    encodeMap.e2(to('\uD835\uDD18', '&Ufr;'));
    encodeMap.e2(to('\xD9', '&Ugrave'));
    encodeMap.e2(to('\xD9', '&Ugrave;'));
    encodeMap.e2(to('\u016A', '&Umacr;'));
    encodeMap.e2(to('_', '&UnderBar;'));
    encodeMap.e2(to('\u23DF', '&UnderBrace;'));
    encodeMap.e2(to('\u23B5', '&UnderBracket;'));
    encodeMap.e2(to('\u23DD', '&UnderParenthesis;'));
    encodeMap.e2(to('\u22C3', '&Union;'));
    encodeMap.e2(to('\u228E', '&UnionPlus;'));
    encodeMap.e2(to('\u0172', '&Uogon;'));
    encodeMap.e2(to('\uD835\uDD4C', '&Uopf;'));
    encodeMap.e2(to('\u2191', '&UpArrow;'));
    encodeMap.e2(to('\u2912', '&UpArrowBar;'));
    encodeMap.e2(to('\u21C5', '&UpArrowDownArrow;'));
    encodeMap.e2(to('\u2195', '&UpDownArrow;'));
    encodeMap.e2(to('\u296E', '&UpEquilibrium;'));
    encodeMap.e2(to('\u22A5', '&UpTee;'));
    encodeMap.e2(to('\u21A5', '&UpTeeArrow;'));
    encodeMap.e2(to('\u21D1', '&Uparrow;'));
    encodeMap.e2(to('\u21D5', '&Updownarrow;'));
    encodeMap.e2(to('\u2196', '&UpperLeftArrow;'));
    encodeMap.e2(to('\u2197', '&UpperRightArrow;'));
    encodeMap.e2(to('\u03D2', '&Upsi;'));
    encodeMap.e2(to('\u03A5', '&Upsilon;'));
    encodeMap.e2(to('\u016E', '&Uring;'));
    encodeMap.e2(to('\uD835\uDCB0', '&Uscr;'));
    encodeMap.e2(to('\u0168', '&Utilde;'));
    encodeMap.e2(to('\xDC', '&Uuml'));
    encodeMap.e2(to('\xDC', '&Uuml;'));
    encodeMap.e2(to('\u22AB', '&VDash;'));
    encodeMap.e2(to('\u2AEB', '&Vbar;'));
    encodeMap.e2(to('\u0412', '&Vcy;'));
    encodeMap.e2(to('\u22A9', '&Vdash;'));
    encodeMap.e2(to('\u2AE6', '&Vdashl;'));
    encodeMap.e2(to('\u22C1', '&Vee;'));
    encodeMap.e2(to('\u2016', '&Verbar;'));
    encodeMap.e2(to('\u2016', '&Vert;'));
    encodeMap.e2(to('\u2223', '&VerticalBar;'));
    encodeMap.e2(to('|', '&VerticalLine;'));
    encodeMap.e2(to('\u2758', '&VerticalSeparator;'));
    encodeMap.e2(to('\u2240', '&VerticalTilde;'));
    encodeMap.e2(to('\u200A', '&VeryThinSpace;'));
    encodeMap.e2(to('\uD835\uDD19', '&Vfr;'));
    encodeMap.e2(to('\uD835\uDD4D', '&Vopf;'));
    encodeMap.e2(to('\uD835\uDCB1', '&Vscr;'));
    encodeMap.e2(to('\u22AA', '&Vvdash;'));
    encodeMap.e2(to('\u0174', '&Wcirc;'));
    encodeMap.e2(to('\u22C0', '&Wedge;'));
    encodeMap.e2(to('\uD835\uDD1A', '&Wfr;'));
    encodeMap.e2(to('\uD835\uDD4E', '&Wopf;'));
    encodeMap.e2(to('\uD835\uDCB2', '&Wscr;'));
    encodeMap.e2(to('\uD835\uDD1B', '&Xfr;'));
    encodeMap.e2(to('\u039E', '&Xi;'));
    encodeMap.e2(to('\uD835\uDD4F', '&Xopf;'));
    encodeMap.e2(to('\uD835\uDCB3', '&Xscr;'));
    encodeMap.e2(to('\u042F', '&YAcy;'));
    encodeMap.e2(to('\u0407', '&YIcy;'));
    encodeMap.e2(to('\u042E', '&YUcy;'));
    encodeMap.e2(to('\xDD', '&Yacute'));
    encodeMap.e2(to('\xDD', '&Yacute;'));
    encodeMap.e2(to('\u0176', '&Ycirc;'));
    encodeMap.e2(to('\u042B', '&Ycy;'));
    encodeMap.e2(to('\uD835\uDD1C', '&Yfr;'));
    encodeMap.e2(to('\uD835\uDD50', '&Yopf;'));
    encodeMap.e2(to('\uD835\uDCB4', '&Yscr;'));
    encodeMap.e2(to('\u0178', '&Yuml;'));
    encodeMap.e2(to('\u0416', '&ZHcy;'));
    encodeMap.e2(to('\u0179', '&Zacute;'));
    encodeMap.e2(to('\u017D', '&Zcaron;'));
    encodeMap.e2(to('\u0417', '&Zcy;'));
    encodeMap.e2(to('\u017B', '&Zdot;'));
    encodeMap.e2(to('\u200B', '&ZeroWidthSpace;'));
    encodeMap.e2(to('\u0396', '&Zeta;'));
    encodeMap.e2(to('\u2128', '&Zfr;'));
    encodeMap.e2(to('\u2124', '&Zopf;'));
    encodeMap.e2(to('\uD835\uDCB5', '&Zscr;'));
    encodeMap.e2(to('\xE1', '&aacute'));
    encodeMap.e2(to('\xE1', '&aacute;'));
    encodeMap.e2(to('\u0103', '&abreve;'));
    encodeMap.e2(to('\u223E', '&ac;'));
    encodeMap.e2(to('\u223E\u0333', '&acE;'));
    encodeMap.e2(to('\u223F', '&acd;'));
    encodeMap.e2(to('\xE2', '&acirc'));
    encodeMap.e2(to('\xE2', '&acirc;'));
    encodeMap.e2(to('\xB4', '&acute'));
    encodeMap.e2(to('\xB4', '&acute;'));
    encodeMap.e2(to('\u0430', '&acy;'));
    encodeMap.e2(to('\xE6', '&aelig'));
    encodeMap.e2(to('\xE6', '&aelig;'));
    encodeMap.e2(to('\u2061', '&af;'));
    encodeMap.e2(to('\uD835\uDD1E', '&afr;'));
    encodeMap.e2(to('\xE0', '&agrave'));
    encodeMap.e2(to('\xE0', '&agrave;'));
    encodeMap.e2(to('\u2135', '&alefsym;'));
    encodeMap.e2(to('\u2135', '&aleph;'));
    encodeMap.e2(to('\u03B1', '&alpha;'));
    encodeMap.e2(to('\u0101', '&amacr;'));
    encodeMap.e2(to('\u2A3F', '&amalg;'));
    encodeMap.e2(to('&', '&amp'));
    encodeMap.e2(to('&', '&amp;'));
    encodeMap.e2(to('\u2227', '&and;'));
    encodeMap.e2(to('\u2A55', '&andand;'));
    encodeMap.e2(to('\u2A5C', '&andd;'));
    encodeMap.e2(to('\u2A58', '&andslope;'));
    encodeMap.e2(to('\u2A5A', '&andv;'));
    encodeMap.e2(to('\u2220', '&ang;'));
    encodeMap.e2(to('\u29A4', '&ange;'));
    encodeMap.e2(to('\u2220', '&angle;'));
    encodeMap.e2(to('\u2221', '&angmsd;'));
    encodeMap.e2(to('\u29A8', '&angmsdaa;'));
    encodeMap.e2(to('\u29A9', '&angmsdab;'));
    encodeMap.e2(to('\u29AA', '&angmsdac;'));
    encodeMap.e2(to('\u29AB', '&angmsdad;'));
    encodeMap.e2(to('\u29AC', '&angmsdae;'));
    encodeMap.e2(to('\u29AD', '&angmsdaf;'));
    encodeMap.e2(to('\u29AE', '&angmsdag;'));
    encodeMap.e2(to('\u29AF', '&angmsdah;'));
    encodeMap.e2(to('\u221F', '&angrt;'));
    encodeMap.e2(to('\u22BE', '&angrtvb;'));
    encodeMap.e2(to('\u299D', '&angrtvbd;'));
    encodeMap.e2(to('\u2222', '&angsph;'));
    encodeMap.e2(to('\xC5', '&angst;'));
    encodeMap.e2(to('\u237C', '&angzarr;'));
    encodeMap.e2(to('\u0105', '&aogon;'));
    encodeMap.e2(to('\uD835\uDD52', '&aopf;'));
    encodeMap.e2(to('\u2248', '&ap;'));
    encodeMap.e2(to('\u2A70', '&apE;'));
    encodeMap.e2(to('\u2A6F', '&apacir;'));
    encodeMap.e2(to('\u224A', '&ape;'));
    encodeMap.e2(to('\u224B', '&apid;'));
    encodeMap.e2(to("'", '&apos;'));
    encodeMap.e2(to('\u2248', '&approx;'));
    encodeMap.e2(to('\u224A', '&approxeq;'));
    encodeMap.e2(to('\xE5', '&aring'));
    encodeMap.e2(to('\xE5', '&aring;'));
    encodeMap.e2(to('\uD835\uDCB6', '&ascr;'));
    encodeMap.e2(to('*', '&ast;'));
    encodeMap.e2(to('\u2248', '&asymp;'));
    encodeMap.e2(to('\u224D', '&asympeq;'));
    encodeMap.e2(to('\xE3', '&atilde'));
    encodeMap.e2(to('\xE3', '&atilde;'));
    encodeMap.e2(to('\xE4', '&auml'));
    encodeMap.e2(to('\xE4', '&auml;'));
    encodeMap.e2(to('\u2233', '&awconint;'));
    encodeMap.e2(to('\u2A11', '&awint;'));
    encodeMap.e2(to('\u2AED', '&bNot;'));
    encodeMap.e2(to('\u224C', '&backcong;'));
    encodeMap.e2(to('\u03F6', '&backepsilon;'));
    encodeMap.e2(to('\u2035', '&backprime;'));
    encodeMap.e2(to('\u223D', '&backsim;'));
    encodeMap.e2(to('\u22CD', '&backsimeq;'));
    encodeMap.e2(to('\u22BD', '&barvee;'));
    encodeMap.e2(to('\u2305', '&barwed;'));
    encodeMap.e2(to('\u2305', '&barwedge;'));
    encodeMap.e2(to('\u23B5', '&bbrk;'));
    encodeMap.e2(to('\u23B6', '&bbrktbrk;'));
    encodeMap.e2(to('\u224C', '&bcong;'));
    encodeMap.e2(to('\u0431', '&bcy;'));
    encodeMap.e2(to('\u201E', '&bdquo;'));
    encodeMap.e2(to('\u2235', '&becaus;'));
    encodeMap.e2(to('\u2235', '&because;'));
    encodeMap.e2(to('\u29B0', '&bemptyv;'));
    encodeMap.e2(to('\u03F6', '&bepsi;'));
    encodeMap.e2(to('\u212C', '&bernou;'));
    encodeMap.e2(to('\u03B2', '&beta;'));
    encodeMap.e2(to('\u2136', '&beth;'));
    encodeMap.e2(to('\u226C', '&between;'));
    encodeMap.e2(to('\uD835\uDD1F', '&bfr;'));
    encodeMap.e2(to('\u22C2', '&bigcap;'));
    encodeMap.e2(to('\u25EF', '&bigcirc;'));
    encodeMap.e2(to('\u22C3', '&bigcup;'));
    encodeMap.e2(to('\u2A00', '&bigodot;'));
    encodeMap.e2(to('\u2A01', '&bigoplus;'));
    encodeMap.e2(to('\u2A02', '&bigotimes;'));
    encodeMap.e2(to('\u2A06', '&bigsqcup;'));
    encodeMap.e2(to('\u2605', '&bigstar;'));
    encodeMap.e2(to('\u25BD', '&bigtriangledown;'));
    encodeMap.e2(to('\u25B3', '&bigtriangleup;'));
    encodeMap.e2(to('\u2A04', '&biguplus;'));
    encodeMap.e2(to('\u22C1', '&bigvee;'));
    encodeMap.e2(to('\u22C0', '&bigwedge;'));
    encodeMap.e2(to('\u290D', '&bkarow;'));
    encodeMap.e2(to('\u29EB', '&blacklozenge;'));
    encodeMap.e2(to('\u25AA', '&blacksquare;'));
    encodeMap.e2(to('\u25B4', '&blacktriangle;'));
    encodeMap.e2(to('\u25BE', '&blacktriangledown;'));
    encodeMap.e2(to('\u25C2', '&blacktriangleleft;'));
    encodeMap.e2(to('\u25B8', '&blacktriangleright;'));
    encodeMap.e2(to('\u2423', '&blank;'));
    encodeMap.e2(to('\u2592', '&blk12;'));
    encodeMap.e2(to('\u2591', '&blk14;'));
    encodeMap.e2(to('\u2593', '&blk34;'));
    encodeMap.e2(to('\u2588', '&block;'));
    encodeMap.e2(to('=\u20E5', '&bne;'));
    encodeMap.e2(to('\u2261\u20E5', '&bnequiv;'));
    encodeMap.e2(to('\u2310', '&bnot;'));
    encodeMap.e2(to('\uD835\uDD53', '&bopf;'));
    encodeMap.e2(to('\u22A5', '&bot;'));
    encodeMap.e2(to('\u22A5', '&bottom;'));
    encodeMap.e2(to('\u22C8', '&bowtie;'));
    encodeMap.e2(to('\u2557', '&boxDL;'));
    encodeMap.e2(to('\u2554', '&boxDR;'));
    encodeMap.e2(to('\u2556', '&boxDl;'));
    encodeMap.e2(to('\u2553', '&boxDr;'));
    encodeMap.e2(to('\u2550', '&boxH;'));
    encodeMap.e2(to('\u2566', '&boxHD;'));
    encodeMap.e2(to('\u2569', '&boxHU;'));
    encodeMap.e2(to('\u2564', '&boxHd;'));
    encodeMap.e2(to('\u2567', '&boxHu;'));
    encodeMap.e2(to('\u255D', '&boxUL;'));
    encodeMap.e2(to('\u255A', '&boxUR;'));
    encodeMap.e2(to('\u255C', '&boxUl;'));
    encodeMap.e2(to('\u2559', '&boxUr;'));
    encodeMap.e2(to('\u2551', '&boxV;'));
    encodeMap.e2(to('\u256C', '&boxVH;'));
    encodeMap.e2(to('\u2563', '&boxVL;'));
    encodeMap.e2(to('\u2560', '&boxVR;'));
    encodeMap.e2(to('\u256B', '&boxVh;'));
    encodeMap.e2(to('\u2562', '&boxVl;'));
    encodeMap.e2(to('\u255F', '&boxVr;'));
    encodeMap.e2(to('\u29C9', '&boxbox;'));
    encodeMap.e2(to('\u2555', '&boxdL;'));
    encodeMap.e2(to('\u2552', '&boxdR;'));
    encodeMap.e2(to('\u2510', '&boxdl;'));
    encodeMap.e2(to('\u250C', '&boxdr;'));
    encodeMap.e2(to('\u2500', '&boxh;'));
    encodeMap.e2(to('\u2565', '&boxhD;'));
    encodeMap.e2(to('\u2568', '&boxhU;'));
    encodeMap.e2(to('\u252C', '&boxhd;'));
    encodeMap.e2(to('\u2534', '&boxhu;'));
    encodeMap.e2(to('\u229F', '&boxminus;'));
    encodeMap.e2(to('\u229E', '&boxplus;'));
    encodeMap.e2(to('\u22A0', '&boxtimes;'));
    encodeMap.e2(to('\u255B', '&boxuL;'));
    encodeMap.e2(to('\u2558', '&boxuR;'));
    encodeMap.e2(to('\u2518', '&boxul;'));
    encodeMap.e2(to('\u2514', '&boxur;'));
    encodeMap.e2(to('\u2502', '&boxv;'));
    encodeMap.e2(to('\u256A', '&boxvH;'));
    encodeMap.e2(to('\u2561', '&boxvL;'));
    encodeMap.e2(to('\u255E', '&boxvR;'));
    encodeMap.e2(to('\u253C', '&boxvh;'));
    encodeMap.e2(to('\u2524', '&boxvl;'));
    encodeMap.e2(to('\u251C', '&boxvr;'));
    encodeMap.e2(to('\u2035', '&bprime;'));
    encodeMap.e2(to('\u02D8', '&breve;'));
    encodeMap.e2(to('\xA6', '&brvbar'));
    encodeMap.e2(to('\xA6', '&brvbar;'));
    encodeMap.e2(to('\uD835\uDCB7', '&bscr;'));
    encodeMap.e2(to('\u204F', '&bsemi;'));
    encodeMap.e2(to('\u223D', '&bsim;'));
    encodeMap.e2(to('\u22CD', '&bsime;'));
    encodeMap.e2(to('\\', '&bsol;'));
    encodeMap.e2(to('\u29C5', '&bsolb;'));
    encodeMap.e2(to('\u27C8', '&bsolhsub;'));
    encodeMap.e2(to('\u2022', '&bull;'));
    encodeMap.e2(to('\u2022', '&bullet;'));
    encodeMap.e2(to('\u224E', '&bump;'));
    encodeMap.e2(to('\u2AAE', '&bumpE;'));
    encodeMap.e2(to('\u224F', '&bumpe;'));
    encodeMap.e2(to('\u224F', '&bumpeq;'));
    encodeMap.e2(to('\u0107', '&cacute;'));
    encodeMap.e2(to('\u2229', '&cap;'));
    encodeMap.e2(to('\u2A44', '&capand;'));
    encodeMap.e2(to('\u2A49', '&capbrcup;'));
    encodeMap.e2(to('\u2A4B', '&capcap;'));
    encodeMap.e2(to('\u2A47', '&capcup;'));
    encodeMap.e2(to('\u2A40', '&capdot;'));
    encodeMap.e2(to('\u2229\uFE00', '&caps;'));
    encodeMap.e2(to('\u2041', '&caret;'));
    encodeMap.e2(to('\u02C7', '&caron;'));
    encodeMap.e2(to('\u2A4D', '&ccaps;'));
    encodeMap.e2(to('\u010D', '&ccaron;'));
    encodeMap.e2(to('\xE7', '&ccedil'));
    encodeMap.e2(to('\xE7', '&ccedil;'));
    encodeMap.e2(to('\u0109', '&ccirc;'));
    encodeMap.e2(to('\u2A4C', '&ccups;'));
    encodeMap.e2(to('\u2A50', '&ccupssm;'));
    encodeMap.e2(to('\u010B', '&cdot;'));
    encodeMap.e2(to('\xB8', '&cedil'));
    encodeMap.e2(to('\xB8', '&cedil;'));
    encodeMap.e2(to('\u29B2', '&cemptyv;'));
    encodeMap.e2(to('\xA2', '&cent'));
    encodeMap.e2(to('\xA2', '&cent;'));
    encodeMap.e2(to('\xB7', '&centerdot;'));
    encodeMap.e2(to('\uD835\uDD20', '&cfr;'));
    encodeMap.e2(to('\u0447', '&chcy;'));
    encodeMap.e2(to('\u2713', '&check;'));
    encodeMap.e2(to('\u2713', '&checkmark;'));
    encodeMap.e2(to('\u03C7', '&chi;'));
    encodeMap.e2(to('\u25CB', '&cir;'));
    encodeMap.e2(to('\u29C3', '&cirE;'));
    encodeMap.e2(to('\u02C6', '&circ;'));
    encodeMap.e2(to('\u2257', '&circeq;'));
    encodeMap.e2(to('\u21BA', '&circlearrowleft;'));
    encodeMap.e2(to('\u21BB', '&circlearrowright;'));
    encodeMap.e2(to('\xAE', '&circledR;'));
    encodeMap.e2(to('\u24C8', '&circledS;'));
    encodeMap.e2(to('\u229B', '&circledast;'));
    encodeMap.e2(to('\u229A', '&circledcirc;'));
    encodeMap.e2(to('\u229D', '&circleddash;'));
    encodeMap.e2(to('\u2257', '&cire;'));
    encodeMap.e2(to('\u2A10', '&cirfnint;'));
    encodeMap.e2(to('\u2AEF', '&cirmid;'));
    encodeMap.e2(to('\u29C2', '&cirscir;'));
    encodeMap.e2(to('\u2663', '&clubs;'));
    encodeMap.e2(to('\u2663', '&clubsuit;'));
    encodeMap.e2(to(':', '&colon;'));
    encodeMap.e2(to('\u2254', '&colone;'));
    encodeMap.e2(to('\u2254', '&coloneq;'));
    encodeMap.e2(to(',', '&comma;'));
    encodeMap.e2(to('@', '&commat;'));
    encodeMap.e2(to('\u2201', '&comp;'));
    encodeMap.e2(to('\u2218', '&compfn;'));
    encodeMap.e2(to('\u2201', '&complement;'));
    encodeMap.e2(to('\u2102', '&complexes;'));
    encodeMap.e2(to('\u2245', '&cong;'));
    encodeMap.e2(to('\u2A6D', '&congdot;'));
    encodeMap.e2(to('\u222E', '&conint;'));
    encodeMap.e2(to('\uD835\uDD54', '&copf;'));
    encodeMap.e2(to('\u2210', '&coprod;'));
    encodeMap.e2(to('\xA9', '&copy'));
    encodeMap.e2(to('\xA9', '&copy;'));
    encodeMap.e2(to('\u2117', '&copysr;'));
    encodeMap.e2(to('\u21B5', '&crarr;'));
    encodeMap.e2(to('\u2717', '&cross;'));
    encodeMap.e2(to('\uD835\uDCB8', '&cscr;'));
    encodeMap.e2(to('\u2ACF', '&csub;'));
    encodeMap.e2(to('\u2AD1', '&csube;'));
    encodeMap.e2(to('\u2AD0', '&csup;'));
    encodeMap.e2(to('\u2AD2', '&csupe;'));
    encodeMap.e2(to('\u22EF', '&ctdot;'));
    encodeMap.e2(to('\u2938', '&cudarrl;'));
    encodeMap.e2(to('\u2935', '&cudarrr;'));
    encodeMap.e2(to('\u22DE', '&cuepr;'));
    encodeMap.e2(to('\u22DF', '&cuesc;'));
    encodeMap.e2(to('\u21B6', '&cularr;'));
    encodeMap.e2(to('\u293D', '&cularrp;'));
    encodeMap.e2(to('\u222A', '&cup;'));
    encodeMap.e2(to('\u2A48', '&cupbrcap;'));
    encodeMap.e2(to('\u2A46', '&cupcap;'));
    encodeMap.e2(to('\u2A4A', '&cupcup;'));
    encodeMap.e2(to('\u228D', '&cupdot;'));
    encodeMap.e2(to('\u2A45', '&cupor;'));
    encodeMap.e2(to('\u222A\uFE00', '&cups;'));
    encodeMap.e2(to('\u21B7', '&curarr;'));
    encodeMap.e2(to('\u293C', '&curarrm;'));
    encodeMap.e2(to('\u22DE', '&curlyeqprec;'));
    encodeMap.e2(to('\u22DF', '&curlyeqsucc;'));
    encodeMap.e2(to('\u22CE', '&curlyvee;'));
    encodeMap.e2(to('\u22CF', '&curlywedge;'));
    encodeMap.e2(to('\xA4', '&curren'));
    encodeMap.e2(to('\xA4', '&curren;'));
    encodeMap.e2(to('\u21B6', '&curvearrowleft;'));
    encodeMap.e2(to('\u21B7', '&curvearrowright;'));
    encodeMap.e2(to('\u22CE', '&cuvee;'));
    encodeMap.e2(to('\u22CF', '&cuwed;'));
    encodeMap.e2(to('\u2232', '&cwconint;'));
    encodeMap.e2(to('\u2231', '&cwint;'));
    encodeMap.e2(to('\u232D', '&cylcty;'));
    encodeMap.e2(to('\u21D3', '&dArr;'));
    encodeMap.e2(to('\u2965', '&dHar;'));
    encodeMap.e2(to('\u2020', '&dagger;'));
    encodeMap.e2(to('\u2138', '&daleth;'));
    encodeMap.e2(to('\u2193', '&darr;'));
    encodeMap.e2(to('\u2010', '&dash;'));
    encodeMap.e2(to('\u22A3', '&dashv;'));
    encodeMap.e2(to('\u290F', '&dbkarow;'));
    encodeMap.e2(to('\u02DD', '&dblac;'));
    encodeMap.e2(to('\u010F', '&dcaron;'));
    encodeMap.e2(to('\u0434', '&dcy;'));
    encodeMap.e2(to('\u2146', '&dd;'));
    encodeMap.e2(to('\u2021', '&ddagger;'));
    encodeMap.e2(to('\u21CA', '&ddarr;'));
    encodeMap.e2(to('\u2A77', '&ddotseq;'));
    encodeMap.e2(to('\xB0', '&deg'));
    encodeMap.e2(to('\xB0', '&deg;'));
    encodeMap.e2(to('\u03B4', '&delta;'));
    encodeMap.e2(to('\u29B1', '&demptyv;'));
    encodeMap.e2(to('\u297F', '&dfisht;'));
    encodeMap.e2(to('\uD835\uDD21', '&dfr;'));
    encodeMap.e2(to('\u21C3', '&dharl;'));
    encodeMap.e2(to('\u21C2', '&dharr;'));
    encodeMap.e2(to('\u22C4', '&diam;'));
    encodeMap.e2(to('\u22C4', '&diamond;'));
    encodeMap.e2(to('\u2666', '&diamondsuit;'));
    encodeMap.e2(to('\u2666', '&diams;'));
    encodeMap.e2(to('\xA8', '&die;'));
    encodeMap.e2(to('\u03DD', '&digamma;'));
    encodeMap.e2(to('\u22F2', '&disin;'));
    encodeMap.e2(to('\xF7', '&div;'));
    encodeMap.e2(to('\xF7', '&divide'));
    encodeMap.e2(to('\xF7', '&divide;'));
    encodeMap.e2(to('\u22C7', '&divideontimes;'));
    encodeMap.e2(to('\u22C7', '&divonx;'));
    encodeMap.e2(to('\u0452', '&djcy;'));
    encodeMap.e2(to('\u231E', '&dlcorn;'));
    encodeMap.e2(to('\u230D', '&dlcrop;'));
    encodeMap.e2(to('$', '&dollar;'));
    encodeMap.e2(to('\uD835\uDD55', '&dopf;'));
    encodeMap.e2(to('\u02D9', '&dot;'));
    encodeMap.e2(to('\u2250', '&doteq;'));
    encodeMap.e2(to('\u2251', '&doteqdot;'));
    encodeMap.e2(to('\u2238', '&dotminus;'));
    encodeMap.e2(to('\u2214', '&dotplus;'));
    encodeMap.e2(to('\u22A1', '&dotsquare;'));
    encodeMap.e2(to('\u2306', '&doublebarwedge;'));
    encodeMap.e2(to('\u2193', '&downarrow;'));
    encodeMap.e2(to('\u21CA', '&downdownarrows;'));
    encodeMap.e2(to('\u21C3', '&downharpoonleft;'));
    encodeMap.e2(to('\u21C2', '&downharpoonright;'));
    encodeMap.e2(to('\u2910', '&drbkarow;'));
    encodeMap.e2(to('\u231F', '&drcorn;'));
    encodeMap.e2(to('\u230C', '&drcrop;'));
    encodeMap.e2(to('\uD835\uDCB9', '&dscr;'));
    encodeMap.e2(to('\u0455', '&dscy;'));
    encodeMap.e2(to('\u29F6', '&dsol;'));
    encodeMap.e2(to('\u0111', '&dstrok;'));
    encodeMap.e2(to('\u22F1', '&dtdot;'));
    encodeMap.e2(to('\u25BF', '&dtri;'));
    encodeMap.e2(to('\u25BE', '&dtrif;'));
    encodeMap.e2(to('\u21F5', '&duarr;'));
    encodeMap.e2(to('\u296F', '&duhar;'));
    encodeMap.e2(to('\u29A6', '&dwangle;'));
    encodeMap.e2(to('\u045F', '&dzcy;'));
    encodeMap.e2(to('\u27FF', '&dzigrarr;'));
    encodeMap.e2(to('\u2A77', '&eDDot;'));
    encodeMap.e2(to('\u2251', '&eDot;'));
    encodeMap.e2(to('\xE9', '&eacute'));
    encodeMap.e2(to('\xE9', '&eacute;'));
    encodeMap.e2(to('\u2A6E', '&easter;'));
    encodeMap.e2(to('\u011B', '&ecaron;'));
    encodeMap.e2(to('\u2256', '&ecir;'));
    encodeMap.e2(to('\xEA', '&ecirc'));
    encodeMap.e2(to('\xEA', '&ecirc;'));
    encodeMap.e2(to('\u2255', '&ecolon;'));
    encodeMap.e2(to('\u044D', '&ecy;'));
    encodeMap.e2(to('\u0117', '&edot;'));
    encodeMap.e2(to('\u2147', '&ee;'));
    encodeMap.e2(to('\u2252', '&efDot;'));
    encodeMap.e2(to('\uD835\uDD22', '&efr;'));
    encodeMap.e2(to('\u2A9A', '&eg;'));
    encodeMap.e2(to('\xE8', '&egrave'));
    encodeMap.e2(to('\xE8', '&egrave;'));
    encodeMap.e2(to('\u2A96', '&egs;'));
    encodeMap.e2(to('\u2A98', '&egsdot;'));
    encodeMap.e2(to('\u2A99', '&el;'));
    encodeMap.e2(to('\u23E7', '&elinters;'));
    encodeMap.e2(to('\u2113', '&ell;'));
    encodeMap.e2(to('\u2A95', '&els;'));
    encodeMap.e2(to('\u2A97', '&elsdot;'));
    encodeMap.e2(to('\u0113', '&emacr;'));
    encodeMap.e2(to('\u2205', '&empty;'));
    encodeMap.e2(to('\u2205', '&emptyset;'));
    encodeMap.e2(to('\u2205', '&emptyv;'));
    encodeMap.e2(to('\u2004', '&emsp13;'));
    encodeMap.e2(to('\u2005', '&emsp14;'));
    encodeMap.e2(to('\u2003', '&emsp;'));
    encodeMap.e2(to('\u014B', '&eng;'));
    encodeMap.e2(to('\u2002', '&ensp;'));
    encodeMap.e2(to('\u0119', '&eogon;'));
    encodeMap.e2(to('\uD835\uDD56', '&eopf;'));
    encodeMap.e2(to('\u22D5', '&epar;'));
    encodeMap.e2(to('\u29E3', '&eparsl;'));
    encodeMap.e2(to('\u2A71', '&eplus;'));
    encodeMap.e2(to('\u03B5', '&epsi;'));
    encodeMap.e2(to('\u03B5', '&epsilon;'));
    encodeMap.e2(to('\u03F5', '&epsiv;'));
    encodeMap.e2(to('\u2256', '&eqcirc;'));
    encodeMap.e2(to('\u2255', '&eqcolon;'));
    encodeMap.e2(to('\u2242', '&eqsim;'));
    encodeMap.e2(to('\u2A96', '&eqslantgtr;'));
    encodeMap.e2(to('\u2A95', '&eqslantless;'));
    encodeMap.e2(to('=', '&equals;'));
    encodeMap.e2(to('\u225F', '&equest;'));
    encodeMap.e2(to('\u2261', '&equiv;'));
    encodeMap.e2(to('\u2A78', '&equivDD;'));
    encodeMap.e2(to('\u29E5', '&eqvparsl;'));
    encodeMap.e2(to('\u2253', '&erDot;'));
    encodeMap.e2(to('\u2971', '&erarr;'));
    encodeMap.e2(to('\u212F', '&escr;'));
    encodeMap.e2(to('\u2250', '&esdot;'));
    encodeMap.e2(to('\u2242', '&esim;'));
    encodeMap.e2(to('\u03B7', '&eta;'));
    encodeMap.e2(to('\xF0', '&eth'));
    encodeMap.e2(to('\xF0', '&eth;'));
    encodeMap.e2(to('\xEB', '&euml'));
    encodeMap.e2(to('\xEB', '&euml;'));
    encodeMap.e2(to('\u20AC', '&euro;'));
    encodeMap.e2(to('!', '&excl;'));
    encodeMap.e2(to('\u2203', '&exist;'));
    encodeMap.e2(to('\u2130', '&expectation;'));
    encodeMap.e2(to('\u2147', '&exponentiale;'));
    encodeMap.e2(to('\u2252', '&fallingdotseq;'));
    encodeMap.e2(to('\u0444', '&fcy;'));
    encodeMap.e2(to('\u2640', '&female;'));
    encodeMap.e2(to('\uFB03', '&ffilig;'));
    encodeMap.e2(to('\uFB00', '&fflig;'));
    encodeMap.e2(to('\uFB04', '&ffllig;'));
    encodeMap.e2(to('\uD835\uDD23', '&ffr;'));
    encodeMap.e2(to('\uFB01', '&filig;'));
    encodeMap.e2(to('fj', '&fjlig;'));
    encodeMap.e2(to('\u266D', '&flat;'));
    encodeMap.e2(to('\uFB02', '&fllig;'));
    encodeMap.e2(to('\u25B1', '&fltns;'));
    encodeMap.e2(to('\u0192', '&fnof;'));
    encodeMap.e2(to('\uD835\uDD57', '&fopf;'));
    encodeMap.e2(to('\u2200', '&forall;'));
    encodeMap.e2(to('\u22D4', '&fork;'));
    encodeMap.e2(to('\u2AD9', '&forkv;'));
    encodeMap.e2(to('\u2A0D', '&fpartint;'));
    encodeMap.e2(to('\xBD', '&frac12'));
    encodeMap.e2(to('\xBD', '&frac12;'));
    encodeMap.e2(to('\u2153', '&frac13;'));
    encodeMap.e2(to('\xBC', '&frac14'));
    encodeMap.e2(to('\xBC', '&frac14;'));
    encodeMap.e2(to('\u2155', '&frac15;'));
    encodeMap.e2(to('\u2159', '&frac16;'));
    encodeMap.e2(to('\u215B', '&frac18;'));
    encodeMap.e2(to('\u2154', '&frac23;'));
    encodeMap.e2(to('\u2156', '&frac25;'));
    encodeMap.e2(to('\xBE', '&frac34'));
    encodeMap.e2(to('\xBE', '&frac34;'));
    encodeMap.e2(to('\u2157', '&frac35;'));
    encodeMap.e2(to('\u215C', '&frac38;'));
    encodeMap.e2(to('\u2158', '&frac45;'));
    encodeMap.e2(to('\u215A', '&frac56;'));
    encodeMap.e2(to('\u215D', '&frac58;'));
    encodeMap.e2(to('\u215E', '&frac78;'));
    encodeMap.e2(to('\u2044', '&frasl;'));
    encodeMap.e2(to('\u2322', '&frown;'));
    encodeMap.e2(to('\uD835\uDCBB', '&fscr;'));
    encodeMap.e2(to('\u2267', '&gE;'));
    encodeMap.e2(to('\u2A8C', '&gEl;'));
    encodeMap.e2(to('\u01F5', '&gacute;'));
    encodeMap.e2(to('\u03B3', '&gamma;'));
    encodeMap.e2(to('\u03DD', '&gammad;'));
    encodeMap.e2(to('\u2A86', '&gap;'));
    encodeMap.e2(to('\u011F', '&gbreve;'));
    encodeMap.e2(to('\u011D', '&gcirc;'));
    encodeMap.e2(to('\u0433', '&gcy;'));
    encodeMap.e2(to('\u0121', '&gdot;'));
    encodeMap.e2(to('\u2265', '&ge;'));
    encodeMap.e2(to('\u22DB', '&gel;'));
    encodeMap.e2(to('\u2265', '&geq;'));
    encodeMap.e2(to('\u2267', '&geqq;'));
    encodeMap.e2(to('\u2A7E', '&geqslant;'));
    encodeMap.e2(to('\u2A7E', '&ges;'));
    encodeMap.e2(to('\u2AA9', '&gescc;'));
    encodeMap.e2(to('\u2A80', '&gesdot;'));
    encodeMap.e2(to('\u2A82', '&gesdoto;'));
    encodeMap.e2(to('\u2A84', '&gesdotol;'));
    encodeMap.e2(to('\u22DB\uFE00', '&gesl;'));
    encodeMap.e2(to('\u2A94', '&gesles;'));
    encodeMap.e2(to('\uD835\uDD24', '&gfr;'));
    encodeMap.e2(to('\u226B', '&gg;'));
    encodeMap.e2(to('\u22D9', '&ggg;'));
    encodeMap.e2(to('\u2137', '&gimel;'));
    encodeMap.e2(to('\u0453', '&gjcy;'));
    encodeMap.e2(to('\u2277', '&gl;'));
    encodeMap.e2(to('\u2A92', '&glE;'));
    encodeMap.e2(to('\u2AA5', '&gla;'));
    encodeMap.e2(to('\u2AA4', '&glj;'));
    encodeMap.e2(to('\u2269', '&gnE;'));
    encodeMap.e2(to('\u2A8A', '&gnap;'));
    encodeMap.e2(to('\u2A8A', '&gnapprox;'));
    encodeMap.e2(to('\u2A88', '&gne;'));
    encodeMap.e2(to('\u2A88', '&gneq;'));
    encodeMap.e2(to('\u2269', '&gneqq;'));
    encodeMap.e2(to('\u22E7', '&gnsim;'));
    encodeMap.e2(to('\uD835\uDD58', '&gopf;'));
    encodeMap.e2(to('`', '&grave;'));
    encodeMap.e2(to('\u210A', '&gscr;'));
    encodeMap.e2(to('\u2273', '&gsim;'));
    encodeMap.e2(to('\u2A8E', '&gsime;'));
    encodeMap.e2(to('\u2A90', '&gsiml;'));
    encodeMap.e2(to('>', '&gt'));
    encodeMap.e2(to('>', '&gt;'));
    encodeMap.e2(to('\u2AA7', '&gtcc;'));
    encodeMap.e2(to('\u2A7A', '&gtcir;'));
    encodeMap.e2(to('\u22D7', '&gtdot;'));
    encodeMap.e2(to('\u2995', '&gtlPar;'));
    encodeMap.e2(to('\u2A7C', '&gtquest;'));
    encodeMap.e2(to('\u2A86', '&gtrapprox;'));
    encodeMap.e2(to('\u2978', '&gtrarr;'));
    encodeMap.e2(to('\u22D7', '&gtrdot;'));
    encodeMap.e2(to('\u22DB', '&gtreqless;'));
    encodeMap.e2(to('\u2A8C', '&gtreqqless;'));
    encodeMap.e2(to('\u2277', '&gtrless;'));
    encodeMap.e2(to('\u2273', '&gtrsim;'));
    encodeMap.e2(to('\u2269\uFE00', '&gvertneqq;'));
    encodeMap.e2(to('\u2269\uFE00', '&gvnE;'));
    encodeMap.e2(to('\u21D4', '&hArr;'));
    encodeMap.e2(to('\u200A', '&hairsp;'));
    encodeMap.e2(to('\xBD', '&half;'));
    encodeMap.e2(to('\u210B', '&hamilt;'));
    encodeMap.e2(to('\u044A', '&hardcy;'));
    encodeMap.e2(to('\u2194', '&harr;'));
    encodeMap.e2(to('\u2948', '&harrcir;'));
    encodeMap.e2(to('\u21AD', '&harrw;'));
    encodeMap.e2(to('\u210F', '&hbar;'));
    encodeMap.e2(to('\u0125', '&hcirc;'));
    encodeMap.e2(to('\u2665', '&hearts;'));
    encodeMap.e2(to('\u2665', '&heartsuit;'));
    encodeMap.e2(to('\u2026', '&hellip;'));
    encodeMap.e2(to('\u22B9', '&hercon;'));
    encodeMap.e2(to('\uD835\uDD25', '&hfr;'));
    encodeMap.e2(to('\u2925', '&hksearow;'));
    encodeMap.e2(to('\u2926', '&hkswarow;'));
    encodeMap.e2(to('\u21FF', '&hoarr;'));
    encodeMap.e2(to('\u223B', '&homtht;'));
    encodeMap.e2(to('\u21A9', '&hookleftarrow;'));
    encodeMap.e2(to('\u21AA', '&hookrightarrow;'));
    encodeMap.e2(to('\uD835\uDD59', '&hopf;'));
    encodeMap.e2(to('\u2015', '&horbar;'));
    encodeMap.e2(to('\uD835\uDCBD', '&hscr;'));
    encodeMap.e2(to('\u210F', '&hslash;'));
    encodeMap.e2(to('\u0127', '&hstrok;'));
    encodeMap.e2(to('\u2043', '&hybull;'));
    encodeMap.e2(to('\u2010', '&hyphen;'));
    encodeMap.e2(to('\xED', '&iacute'));
    encodeMap.e2(to('\xED', '&iacute;'));
    encodeMap.e2(to('\u2063', '&ic;'));
    encodeMap.e2(to('\xEE', '&icirc'));
    encodeMap.e2(to('\xEE', '&icirc;'));
    encodeMap.e2(to('\u0438', '&icy;'));
    encodeMap.e2(to('\u0435', '&iecy;'));
    encodeMap.e2(to('\xA1', '&iexcl'));
    encodeMap.e2(to('\xA1', '&iexcl;'));
    encodeMap.e2(to('\u21D4', '&iff;'));
    encodeMap.e2(to('\uD835\uDD26', '&ifr;'));
    encodeMap.e2(to('\xEC', '&igrave'));
    encodeMap.e2(to('\xEC', '&igrave;'));
    encodeMap.e2(to('\u2148', '&ii;'));
    encodeMap.e2(to('\u2A0C', '&iiiint;'));
    encodeMap.e2(to('\u222D', '&iiint;'));
    encodeMap.e2(to('\u29DC', '&iinfin;'));
    encodeMap.e2(to('\u2129', '&iiota;'));
    encodeMap.e2(to('\u0133', '&ijlig;'));
    encodeMap.e2(to('\u012B', '&imacr;'));
    encodeMap.e2(to('\u2111', '&image;'));
    encodeMap.e2(to('\u2110', '&imagline;'));
    encodeMap.e2(to('\u2111', '&imagpart;'));
    encodeMap.e2(to('\u0131', '&imath;'));
    encodeMap.e2(to('\u22B7', '&imof;'));
    encodeMap.e2(to('\u01B5', '&imped;'));
    encodeMap.e2(to('\u2208', '&in;'));
    encodeMap.e2(to('\u2105', '&incare;'));
    encodeMap.e2(to('\u221E', '&infin;'));
    encodeMap.e2(to('\u29DD', '&infintie;'));
    encodeMap.e2(to('\u0131', '&inodot;'));
    encodeMap.e2(to('\u222B', '&int;'));
    encodeMap.e2(to('\u22BA', '&intcal;'));
    encodeMap.e2(to('\u2124', '&integers;'));
    encodeMap.e2(to('\u22BA', '&intercal;'));
    encodeMap.e2(to('\u2A17', '&intlarhk;'));
    encodeMap.e2(to('\u2A3C', '&intprod;'));
    encodeMap.e2(to('\u0451', '&iocy;'));
    encodeMap.e2(to('\u012F', '&iogon;'));
    encodeMap.e2(to('\uD835\uDD5A', '&iopf;'));
    encodeMap.e2(to('\u03B9', '&iota;'));
    encodeMap.e2(to('\u2A3C', '&iprod;'));
    encodeMap.e2(to('\xBF', '&iquest'));
    encodeMap.e2(to('\xBF', '&iquest;'));
    encodeMap.e2(to('\uD835\uDCBE', '&iscr;'));
    encodeMap.e2(to('\u2208', '&isin;'));
    encodeMap.e2(to('\u22F9', '&isinE;'));
    encodeMap.e2(to('\u22F5', '&isindot;'));
    encodeMap.e2(to('\u22F4', '&isins;'));
    encodeMap.e2(to('\u22F3', '&isinsv;'));
    encodeMap.e2(to('\u2208', '&isinv;'));
    encodeMap.e2(to('\u2062', '&it;'));
    encodeMap.e2(to('\u0129', '&itilde;'));
    encodeMap.e2(to('\u0456', '&iukcy;'));
    encodeMap.e2(to('\xEF', '&iuml'));
    encodeMap.e2(to('\xEF', '&iuml;'));
    encodeMap.e2(to('\u0135', '&jcirc;'));
    encodeMap.e2(to('\u0439', '&jcy;'));
    encodeMap.e2(to('\uD835\uDD27', '&jfr;'));
    encodeMap.e2(to('\u0237', '&jmath;'));
    encodeMap.e2(to('\uD835\uDD5B', '&jopf;'));
    encodeMap.e2(to('\uD835\uDCBF', '&jscr;'));
    encodeMap.e2(to('\u0458', '&jsercy;'));
    encodeMap.e2(to('\u0454', '&jukcy;'));
    encodeMap.e2(to('\u03BA', '&kappa;'));
    encodeMap.e2(to('\u03F0', '&kappav;'));
    encodeMap.e2(to('\u0137', '&kcedil;'));
    encodeMap.e2(to('\u043A', '&kcy;'));
    encodeMap.e2(to('\uD835\uDD28', '&kfr;'));
    encodeMap.e2(to('\u0138', '&kgreen;'));
    encodeMap.e2(to('\u0445', '&khcy;'));
    encodeMap.e2(to('\u045C', '&kjcy;'));
    encodeMap.e2(to('\uD835\uDD5C', '&kopf;'));
    encodeMap.e2(to('\uD835\uDCC0', '&kscr;'));
    encodeMap.e2(to('\u21DA', '&lAarr;'));
    encodeMap.e2(to('\u21D0', '&lArr;'));
    encodeMap.e2(to('\u291B', '&lAtail;'));
    encodeMap.e2(to('\u290E', '&lBarr;'));
    encodeMap.e2(to('\u2266', '&lE;'));
    encodeMap.e2(to('\u2A8B', '&lEg;'));
    encodeMap.e2(to('\u2962', '&lHar;'));
    encodeMap.e2(to('\u013A', '&lacute;'));
    encodeMap.e2(to('\u29B4', '&laemptyv;'));
    encodeMap.e2(to('\u2112', '&lagran;'));
    encodeMap.e2(to('\u03BB', '&lambda;'));
    encodeMap.e2(to('\u27E8', '&lang;'));
    encodeMap.e2(to('\u2991', '&langd;'));
    encodeMap.e2(to('\u27E8', '&langle;'));
    encodeMap.e2(to('\u2A85', '&lap;'));
    encodeMap.e2(to('\xAB', '&laquo'));
    encodeMap.e2(to('\xAB', '&laquo;'));
    encodeMap.e2(to('\u2190', '&larr;'));
    encodeMap.e2(to('\u21E4', '&larrb;'));
    encodeMap.e2(to('\u291F', '&larrbfs;'));
    encodeMap.e2(to('\u291D', '&larrfs;'));
    encodeMap.e2(to('\u21A9', '&larrhk;'));
    encodeMap.e2(to('\u21AB', '&larrlp;'));
    encodeMap.e2(to('\u2939', '&larrpl;'));
    encodeMap.e2(to('\u2973', '&larrsim;'));
    encodeMap.e2(to('\u21A2', '&larrtl;'));
    encodeMap.e2(to('\u2AAB', '&lat;'));
    encodeMap.e2(to('\u2919', '&latail;'));
    encodeMap.e2(to('\u2AAD', '&late;'));
    encodeMap.e2(to('\u2AAD\uFE00', '&lates;'));
    encodeMap.e2(to('\u290C', '&lbarr;'));
    encodeMap.e2(to('\u2772', '&lbbrk;'));
    encodeMap.e2(to('{', '&lbrace;'));
    encodeMap.e2(to('[', '&lbrack;'));
    encodeMap.e2(to('\u298B', '&lbrke;'));
    encodeMap.e2(to('\u298F', '&lbrksld;'));
    encodeMap.e2(to('\u298D', '&lbrkslu;'));
    encodeMap.e2(to('\u013E', '&lcaron;'));
    encodeMap.e2(to('\u013C', '&lcedil;'));
    encodeMap.e2(to('\u2308', '&lceil;'));
    encodeMap.e2(to('{', '&lcub;'));
    encodeMap.e2(to('\u043B', '&lcy;'));
    encodeMap.e2(to('\u2936', '&ldca;'));
    encodeMap.e2(to('\u201C', '&ldquo;'));
    encodeMap.e2(to('\u201E', '&ldquor;'));
    encodeMap.e2(to('\u2967', '&ldrdhar;'));
    encodeMap.e2(to('\u294B', '&ldrushar;'));
    encodeMap.e2(to('\u21B2', '&ldsh;'));
    encodeMap.e2(to('\u2264', '&le;'));
    encodeMap.e2(to('\u2190', '&leftarrow;'));
    encodeMap.e2(to('\u21A2', '&leftarrowtail;'));
    encodeMap.e2(to('\u21BD', '&leftharpoondown;'));
    encodeMap.e2(to('\u21BC', '&leftharpoonup;'));
    encodeMap.e2(to('\u21C7', '&leftleftarrows;'));
    encodeMap.e2(to('\u2194', '&leftrightarrow;'));
    encodeMap.e2(to('\u21C6', '&leftrightarrows;'));
    encodeMap.e2(to('\u21CB', '&leftrightharpoons;'));
    encodeMap.e2(to('\u21AD', '&leftrightsquigarrow;'));
    encodeMap.e2(to('\u22CB', '&leftthreetimes;'));
    encodeMap.e2(to('\u22DA', '&leg;'));
    encodeMap.e2(to('\u2264', '&leq;'));
    encodeMap.e2(to('\u2266', '&leqq;'));
    encodeMap.e2(to('\u2A7D', '&leqslant;'));
    encodeMap.e2(to('\u2A7D', '&les;'));
    encodeMap.e2(to('\u2AA8', '&lescc;'));
    encodeMap.e2(to('\u2A7F', '&lesdot;'));
    encodeMap.e2(to('\u2A81', '&lesdoto;'));
    encodeMap.e2(to('\u2A83', '&lesdotor;'));
    encodeMap.e2(to('\u22DA\uFE00', '&lesg;'));
    encodeMap.e2(to('\u2A93', '&lesges;'));
    encodeMap.e2(to('\u2A85', '&lessapprox;'));
    encodeMap.e2(to('\u22D6', '&lessdot;'));
    encodeMap.e2(to('\u22DA', '&lesseqgtr;'));
    encodeMap.e2(to('\u2A8B', '&lesseqqgtr;'));
    encodeMap.e2(to('\u2276', '&lessgtr;'));
    encodeMap.e2(to('\u2272', '&lesssim;'));
    encodeMap.e2(to('\u297C', '&lfisht;'));
    encodeMap.e2(to('\u230A', '&lfloor;'));
    encodeMap.e2(to('\uD835\uDD29', '&lfr;'));
    encodeMap.e2(to('\u2276', '&lg;'));
    encodeMap.e2(to('\u2A91', '&lgE;'));
    encodeMap.e2(to('\u21BD', '&lhard;'));
    encodeMap.e2(to('\u21BC', '&lharu;'));
    encodeMap.e2(to('\u296A', '&lharul;'));
    encodeMap.e2(to('\u2584', '&lhblk;'));
    encodeMap.e2(to('\u0459', '&ljcy;'));
    encodeMap.e2(to('\u226A', '&ll;'));
    encodeMap.e2(to('\u21C7', '&llarr;'));
    encodeMap.e2(to('\u231E', '&llcorner;'));
    encodeMap.e2(to('\u296B', '&llhard;'));
    encodeMap.e2(to('\u25FA', '&lltri;'));
    encodeMap.e2(to('\u0140', '&lmidot;'));
    encodeMap.e2(to('\u23B0', '&lmoust;'));
    encodeMap.e2(to('\u23B0', '&lmoustache;'));
    encodeMap.e2(to('\u2268', '&lnE;'));
    encodeMap.e2(to('\u2A89', '&lnap;'));
    encodeMap.e2(to('\u2A89', '&lnapprox;'));
    encodeMap.e2(to('\u2A87', '&lne;'));
    encodeMap.e2(to('\u2A87', '&lneq;'));
    encodeMap.e2(to('\u2268', '&lneqq;'));
    encodeMap.e2(to('\u22E6', '&lnsim;'));
    encodeMap.e2(to('\u27EC', '&loang;'));
    encodeMap.e2(to('\u21FD', '&loarr;'));
    encodeMap.e2(to('\u27E6', '&lobrk;'));
    encodeMap.e2(to('\u27F5', '&longleftarrow;'));
    encodeMap.e2(to('\u27F7', '&longleftrightarrow;'));
    encodeMap.e2(to('\u27FC', '&longmapsto;'));
    encodeMap.e2(to('\u27F6', '&longrightarrow;'));
    encodeMap.e2(to('\u21AB', '&looparrowleft;'));
    encodeMap.e2(to('\u21AC', '&looparrowright;'));
    encodeMap.e2(to('\u2985', '&lopar;'));
    encodeMap.e2(to('\uD835\uDD5D', '&lopf;'));
    encodeMap.e2(to('\u2A2D', '&loplus;'));
    encodeMap.e2(to('\u2A34', '&lotimes;'));
    encodeMap.e2(to('\u2217', '&lowast;'));
    encodeMap.e2(to('_', '&lowbar;'));
    encodeMap.e2(to('\u25CA', '&loz;'));
    encodeMap.e2(to('\u25CA', '&lozenge;'));
    encodeMap.e2(to('\u29EB', '&lozf;'));
    encodeMap.e2(to('(', '&lpar;'));
    encodeMap.e2(to('\u2993', '&lparlt;'));
    encodeMap.e2(to('\u21C6', '&lrarr;'));
    encodeMap.e2(to('\u231F', '&lrcorner;'));
    encodeMap.e2(to('\u21CB', '&lrhar;'));
    encodeMap.e2(to('\u296D', '&lrhard;'));
    encodeMap.e2(to('\u200E', '&lrm;'));
    encodeMap.e2(to('\u22BF', '&lrtri;'));
    encodeMap.e2(to('\u2039', '&lsaquo;'));
    encodeMap.e2(to('\uD835\uDCC1', '&lscr;'));
    encodeMap.e2(to('\u21B0', '&lsh;'));
    encodeMap.e2(to('\u2272', '&lsim;'));
    encodeMap.e2(to('\u2A8D', '&lsime;'));
    encodeMap.e2(to('\u2A8F', '&lsimg;'));
    encodeMap.e2(to('[', '&lsqb;'));
    encodeMap.e2(to('\u2018', '&lsquo;'));
    encodeMap.e2(to('\u201A', '&lsquor;'));
    encodeMap.e2(to('\u0142', '&lstrok;'));
    encodeMap.e2(to('<', '&lt'));
    encodeMap.e2(to('<', '&lt;'));
    encodeMap.e2(to('\u2AA6', '&ltcc;'));
    encodeMap.e2(to('\u2A79', '&ltcir;'));
    encodeMap.e2(to('\u22D6', '&ltdot;'));
    encodeMap.e2(to('\u22CB', '&lthree;'));
    encodeMap.e2(to('\u22C9', '&ltimes;'));
    encodeMap.e2(to('\u2976', '&ltlarr;'));
    encodeMap.e2(to('\u2A7B', '&ltquest;'));
    encodeMap.e2(to('\u2996', '&ltrPar;'));
    encodeMap.e2(to('\u25C3', '&ltri;'));
    encodeMap.e2(to('\u22B4', '&ltrie;'));
    encodeMap.e2(to('\u25C2', '&ltrif;'));
    encodeMap.e2(to('\u294A', '&lurdshar;'));
    encodeMap.e2(to('\u2966', '&luruhar;'));
    encodeMap.e2(to('\u2268\uFE00', '&lvertneqq;'));
    encodeMap.e2(to('\u2268\uFE00', '&lvnE;'));
    encodeMap.e2(to('\u223A', '&mDDot;'));
    encodeMap.e2(to('\xAF', '&macr'));
    encodeMap.e2(to('\xAF', '&macr;'));
    encodeMap.e2(to('\u2642', '&male;'));
    encodeMap.e2(to('\u2720', '&malt;'));
    encodeMap.e2(to('\u2720', '&maltese;'));
    encodeMap.e2(to('\u21A6', '&map;'));
    encodeMap.e2(to('\u21A6', '&mapsto;'));
    encodeMap.e2(to('\u21A7', '&mapstodown;'));
    encodeMap.e2(to('\u21A4', '&mapstoleft;'));
    encodeMap.e2(to('\u21A5', '&mapstoup;'));
    encodeMap.e2(to('\u25AE', '&marker;'));
    encodeMap.e2(to('\u2A29', '&mcomma;'));
    encodeMap.e2(to('\u043C', '&mcy;'));
    encodeMap.e2(to('\u2014', '&mdash;'));
    encodeMap.e2(to('\u2221', '&measuredangle;'));
    encodeMap.e2(to('\uD835\uDD2A', '&mfr;'));
    encodeMap.e2(to('\u2127', '&mho;'));
    encodeMap.e2(to('\xB5', '&micro'));
    encodeMap.e2(to('\xB5', '&micro;'));
    encodeMap.e2(to('\u2223', '&mid;'));
    encodeMap.e2(to('*', '&midast;'));
    encodeMap.e2(to('\u2AF0', '&midcir;'));
    encodeMap.e2(to('\xB7', '&middot'));
    encodeMap.e2(to('\xB7', '&middot;'));
    encodeMap.e2(to('\u2212', '&minus;'));
    encodeMap.e2(to('\u229F', '&minusb;'));
    encodeMap.e2(to('\u2238', '&minusd;'));
    encodeMap.e2(to('\u2A2A', '&minusdu;'));
    encodeMap.e2(to('\u2ADB', '&mlcp;'));
    encodeMap.e2(to('\u2026', '&mldr;'));
    encodeMap.e2(to('\u2213', '&mnplus;'));
    encodeMap.e2(to('\u22A7', '&models;'));
    encodeMap.e2(to('\uD835\uDD5E', '&mopf;'));
    encodeMap.e2(to('\u2213', '&mp;'));
    encodeMap.e2(to('\uD835\uDCC2', '&mscr;'));
    encodeMap.e2(to('\u223E', '&mstpos;'));
    encodeMap.e2(to('\u03BC', '&mu;'));
    encodeMap.e2(to('\u22B8', '&multimap;'));
    encodeMap.e2(to('\u22B8', '&mumap;'));
    encodeMap.e2(to('\u22D9\u0338', '&nGg;'));
    encodeMap.e2(to('\u226B\u20D2', '&nGt;'));
    encodeMap.e2(to('\u226B\u0338', '&nGtv;'));
    encodeMap.e2(to('\u21CD', '&nLeftarrow;'));
    encodeMap.e2(to('\u21CE', '&nLeftrightarrow;'));
    encodeMap.e2(to('\u22D8\u0338', '&nLl;'));
    encodeMap.e2(to('\u226A\u20D2', '&nLt;'));
    encodeMap.e2(to('\u226A\u0338', '&nLtv;'));
    encodeMap.e2(to('\u21CF', '&nRightarrow;'));
    encodeMap.e2(to('\u22AF', '&nVDash;'));
    encodeMap.e2(to('\u22AE', '&nVdash;'));
    encodeMap.e2(to('\u2207', '&nabla;'));
    encodeMap.e2(to('\u0144', '&nacute;'));
    encodeMap.e2(to('\u2220\u20D2', '&nang;'));
    encodeMap.e2(to('\u2249', '&nap;'));
    encodeMap.e2(to('\u2A70\u0338', '&napE;'));
    encodeMap.e2(to('\u224B\u0338', '&napid;'));
    encodeMap.e2(to('\u0149', '&napos;'));
    encodeMap.e2(to('\u2249', '&napprox;'));
    encodeMap.e2(to('\u266E', '&natur;'));
    encodeMap.e2(to('\u266E', '&natural;'));
    encodeMap.e2(to('\u2115', '&naturals;'));
    encodeMap.e2(to('\xA0', '&nbsp'));
    encodeMap.e2(to('\xA0', '&nbsp;'));
    encodeMap.e2(to('\u224E\u0338', '&nbump;'));
    encodeMap.e2(to('\u224F\u0338', '&nbumpe;'));
    encodeMap.e2(to('\u2A43', '&ncap;'));
    encodeMap.e2(to('\u0148', '&ncaron;'));
    encodeMap.e2(to('\u0146', '&ncedil;'));
    encodeMap.e2(to('\u2247', '&ncong;'));
    encodeMap.e2(to('\u2A6D\u0338', '&ncongdot;'));
    encodeMap.e2(to('\u2A42', '&ncup;'));
    encodeMap.e2(to('\u043D', '&ncy;'));
    encodeMap.e2(to('\u2013', '&ndash;'));
    encodeMap.e2(to('\u2260', '&ne;'));
    encodeMap.e2(to('\u21D7', '&neArr;'));
    encodeMap.e2(to('\u2924', '&nearhk;'));
    encodeMap.e2(to('\u2197', '&nearr;'));
    encodeMap.e2(to('\u2197', '&nearrow;'));
    encodeMap.e2(to('\u2250\u0338', '&nedot;'));
    encodeMap.e2(to('\u2262', '&nequiv;'));
    encodeMap.e2(to('\u2928', '&nesear;'));
    encodeMap.e2(to('\u2242\u0338', '&nesim;'));
    encodeMap.e2(to('\u2204', '&nexist;'));
    encodeMap.e2(to('\u2204', '&nexists;'));
    encodeMap.e2(to('\uD835\uDD2B', '&nfr;'));
    encodeMap.e2(to('\u2267\u0338', '&ngE;'));
    encodeMap.e2(to('\u2271', '&nge;'));
    encodeMap.e2(to('\u2271', '&ngeq;'));
    encodeMap.e2(to('\u2267\u0338', '&ngeqq;'));
    encodeMap.e2(to('\u2A7E\u0338', '&ngeqslant;'));
    encodeMap.e2(to('\u2A7E\u0338', '&nges;'));
    encodeMap.e2(to('\u2275', '&ngsim;'));
    encodeMap.e2(to('\u226F', '&ngt;'));
    encodeMap.e2(to('\u226F', '&ngtr;'));
    encodeMap.e2(to('\u21CE', '&nhArr;'));
    encodeMap.e2(to('\u21AE', '&nharr;'));
    encodeMap.e2(to('\u2AF2', '&nhpar;'));
    encodeMap.e2(to('\u220B', '&ni;'));
    encodeMap.e2(to('\u22FC', '&nis;'));
    encodeMap.e2(to('\u22FA', '&nisd;'));
    encodeMap.e2(to('\u220B', '&niv;'));
    encodeMap.e2(to('\u045A', '&njcy;'));
    encodeMap.e2(to('\u21CD', '&nlArr;'));
    encodeMap.e2(to('\u2266\u0338', '&nlE;'));
    encodeMap.e2(to('\u219A', '&nlarr;'));
    encodeMap.e2(to('\u2025', '&nldr;'));
    encodeMap.e2(to('\u2270', '&nle;'));
    encodeMap.e2(to('\u219A', '&nleftarrow;'));
    encodeMap.e2(to('\u21AE', '&nleftrightarrow;'));
    encodeMap.e2(to('\u2270', '&nleq;'));
    encodeMap.e2(to('\u2266\u0338', '&nleqq;'));
    encodeMap.e2(to('\u2A7D\u0338', '&nleqslant;'));
    encodeMap.e2(to('\u2A7D\u0338', '&nles;'));
    encodeMap.e2(to('\u226E', '&nless;'));
    encodeMap.e2(to('\u2274', '&nlsim;'));
    encodeMap.e2(to('\u226E', '&nlt;'));
    encodeMap.e2(to('\u22EA', '&nltri;'));
    encodeMap.e2(to('\u22EC', '&nltrie;'));
    encodeMap.e2(to('\u2224', '&nmid;'));
    encodeMap.e2(to('\uD835\uDD5F', '&nopf;'));
    encodeMap.e2(to('\xAC', '&not'));
    encodeMap.e2(to('\xAC', '&not;'));
    encodeMap.e2(to('\u2209', '&notin;'));
    encodeMap.e2(to('\u22F9\u0338', '&notinE;'));
    encodeMap.e2(to('\u22F5\u0338', '&notindot;'));
    encodeMap.e2(to('\u2209', '&notinva;'));
    encodeMap.e2(to('\u22F7', '&notinvb;'));
    encodeMap.e2(to('\u22F6', '&notinvc;'));
    encodeMap.e2(to('\u220C', '&notni;'));
    encodeMap.e2(to('\u220C', '&notniva;'));
    encodeMap.e2(to('\u22FE', '&notnivb;'));
    encodeMap.e2(to('\u22FD', '&notnivc;'));
    encodeMap.e2(to('\u2226', '&npar;'));
    encodeMap.e2(to('\u2226', '&nparallel;'));
    encodeMap.e2(to('\u2AFD\u20E5', '&nparsl;'));
    encodeMap.e2(to('\u2202\u0338', '&npart;'));
    encodeMap.e2(to('\u2A14', '&npolint;'));
    encodeMap.e2(to('\u2280', '&npr;'));
    encodeMap.e2(to('\u22E0', '&nprcue;'));
    encodeMap.e2(to('\u2AAF\u0338', '&npre;'));
    encodeMap.e2(to('\u2280', '&nprec;'));
    encodeMap.e2(to('\u2AAF\u0338', '&npreceq;'));
    encodeMap.e2(to('\u21CF', '&nrArr;'));
    encodeMap.e2(to('\u219B', '&nrarr;'));
    encodeMap.e2(to('\u2933\u0338', '&nrarrc;'));
    encodeMap.e2(to('\u219D\u0338', '&nrarrw;'));
    encodeMap.e2(to('\u219B', '&nrightarrow;'));
    encodeMap.e2(to('\u22EB', '&nrtri;'));
    encodeMap.e2(to('\u22ED', '&nrtrie;'));
    encodeMap.e2(to('\u2281', '&nsc;'));
    encodeMap.e2(to('\u22E1', '&nsccue;'));
    encodeMap.e2(to('\u2AB0\u0338', '&nsce;'));
    encodeMap.e2(to('\uD835\uDCC3', '&nscr;'));
    encodeMap.e2(to('\u2224', '&nshortmid;'));
    encodeMap.e2(to('\u2226', '&nshortparallel;'));
    encodeMap.e2(to('\u2241', '&nsim;'));
    encodeMap.e2(to('\u2244', '&nsime;'));
    encodeMap.e2(to('\u2244', '&nsimeq;'));
    encodeMap.e2(to('\u2224', '&nsmid;'));
    encodeMap.e2(to('\u2226', '&nspar;'));
    encodeMap.e2(to('\u22E2', '&nsqsube;'));
    encodeMap.e2(to('\u22E3', '&nsqsupe;'));
    encodeMap.e2(to('\u2284', '&nsub;'));
    encodeMap.e2(to('\u2AC5\u0338', '&nsubE;'));
    encodeMap.e2(to('\u2288', '&nsube;'));
    encodeMap.e2(to('\u2282\u20D2', '&nsubset;'));
    encodeMap.e2(to('\u2288', '&nsubseteq;'));
    encodeMap.e2(to('\u2AC5\u0338', '&nsubseteqq;'));
    encodeMap.e2(to('\u2281', '&nsucc;'));
    encodeMap.e2(to('\u2AB0\u0338', '&nsucceq;'));
    encodeMap.e2(to('\u2285', '&nsup;'));
    encodeMap.e2(to('\u2AC6\u0338', '&nsupE;'));
    encodeMap.e2(to('\u2289', '&nsupe;'));
    encodeMap.e2(to('\u2283\u20D2', '&nsupset;'));
    encodeMap.e2(to('\u2289', '&nsupseteq;'));
    encodeMap.e2(to('\u2AC6\u0338', '&nsupseteqq;'));
    encodeMap.e2(to('\u2279', '&ntgl;'));
    encodeMap.e2(to('\xF1', '&ntilde'));
    encodeMap.e2(to('\xF1', '&ntilde;'));
    encodeMap.e2(to('\u2278', '&ntlg;'));
    encodeMap.e2(to('\u22EA', '&ntriangleleft;'));
    encodeMap.e2(to('\u22EC', '&ntrianglelefteq;'));
    encodeMap.e2(to('\u22EB', '&ntriangleright;'));
    encodeMap.e2(to('\u22ED', '&ntrianglerighteq;'));
    encodeMap.e2(to('\u03BD', '&nu;'));
    encodeMap.e2(to('#', '&num;'));
    encodeMap.e2(to('\u2116', '&numero;'));
    encodeMap.e2(to('\u2007', '&numsp;'));
    encodeMap.e2(to('\u22AD', '&nvDash;'));
    encodeMap.e2(to('\u2904', '&nvHarr;'));
    encodeMap.e2(to('\u224D\u20D2', '&nvap;'));
    encodeMap.e2(to('\u22AC', '&nvdash;'));
    encodeMap.e2(to('\u2265\u20D2', '&nvge;'));
    encodeMap.e2(to('>\u20D2', '&nvgt;'));
    encodeMap.e2(to('\u29DE', '&nvinfin;'));
    encodeMap.e2(to('\u2902', '&nvlArr;'));
    encodeMap.e2(to('\u2264\u20D2', '&nvle;'));
    encodeMap.e2(to('<\u20D2', '&nvlt;'));
    encodeMap.e2(to('\u22B4\u20D2', '&nvltrie;'));
    encodeMap.e2(to('\u2903', '&nvrArr;'));
    encodeMap.e2(to('\u22B5\u20D2', '&nvrtrie;'));
    encodeMap.e2(to('\u223C\u20D2', '&nvsim;'));
    encodeMap.e2(to('\u21D6', '&nwArr;'));
    encodeMap.e2(to('\u2923', '&nwarhk;'));
    encodeMap.e2(to('\u2196', '&nwarr;'));
    encodeMap.e2(to('\u2196', '&nwarrow;'));
    encodeMap.e2(to('\u2927', '&nwnear;'));
    encodeMap.e2(to('\u24C8', '&oS;'));
    encodeMap.e2(to('\xF3', '&oacute'));
    encodeMap.e2(to('\xF3', '&oacute;'));
    encodeMap.e2(to('\u229B', '&oast;'));
    encodeMap.e2(to('\u229A', '&ocir;'));
    encodeMap.e2(to('\xF4', '&ocirc'));
    encodeMap.e2(to('\xF4', '&ocirc;'));
    encodeMap.e2(to('\u043E', '&ocy;'));
    encodeMap.e2(to('\u229D', '&odash;'));
    encodeMap.e2(to('\u0151', '&odblac;'));
    encodeMap.e2(to('\u2A38', '&odiv;'));
    encodeMap.e2(to('\u2299', '&odot;'));
    encodeMap.e2(to('\u29BC', '&odsold;'));
    encodeMap.e2(to('\u0153', '&oelig;'));
    encodeMap.e2(to('\u29BF', '&ofcir;'));
    encodeMap.e2(to('\uD835\uDD2C', '&ofr;'));
    encodeMap.e2(to('\u02DB', '&ogon;'));
    encodeMap.e2(to('\xF2', '&ograve'));
    encodeMap.e2(to('\xF2', '&ograve;'));
    encodeMap.e2(to('\u29C1', '&ogt;'));
    encodeMap.e2(to('\u29B5', '&ohbar;'));
    encodeMap.e2(to('\u03A9', '&ohm;'));
    encodeMap.e2(to('\u222E', '&oint;'));
    encodeMap.e2(to('\u21BA', '&olarr;'));
    encodeMap.e2(to('\u29BE', '&olcir;'));
    encodeMap.e2(to('\u29BB', '&olcross;'));
    encodeMap.e2(to('\u203E', '&oline;'));
    encodeMap.e2(to('\u29C0', '&olt;'));
    encodeMap.e2(to('\u014D', '&omacr;'));
    encodeMap.e2(to('\u03C9', '&omega;'));
    encodeMap.e2(to('\u03BF', '&omicron;'));
    encodeMap.e2(to('\u29B6', '&omid;'));
    encodeMap.e2(to('\u2296', '&ominus;'));
    encodeMap.e2(to('\uD835\uDD60', '&oopf;'));
    encodeMap.e2(to('\u29B7', '&opar;'));
    encodeMap.e2(to('\u29B9', '&operp;'));
    encodeMap.e2(to('\u2295', '&oplus;'));
    encodeMap.e2(to('\u2228', '&or;'));
    encodeMap.e2(to('\u21BB', '&orarr;'));
    encodeMap.e2(to('\u2A5D', '&ord;'));
    encodeMap.e2(to('\u2134', '&order;'));
    encodeMap.e2(to('\u2134', '&orderof;'));
    encodeMap.e2(to('\xAA', '&ordf'));
    encodeMap.e2(to('\xAA', '&ordf;'));
    encodeMap.e2(to('\xBA', '&ordm'));
    encodeMap.e2(to('\xBA', '&ordm;'));
    encodeMap.e2(to('\u22B6', '&origof;'));
    encodeMap.e2(to('\u2A56', '&oror;'));
    encodeMap.e2(to('\u2A57', '&orslope;'));
    encodeMap.e2(to('\u2A5B', '&orv;'));
    encodeMap.e2(to('\u2134', '&oscr;'));
    encodeMap.e2(to('\xF8', '&oslash'));
    encodeMap.e2(to('\xF8', '&oslash;'));
    encodeMap.e2(to('\u2298', '&osol;'));
    encodeMap.e2(to('\xF5', '&otilde'));
    encodeMap.e2(to('\xF5', '&otilde;'));
    encodeMap.e2(to('\u2297', '&otimes;'));
    encodeMap.e2(to('\u2A36', '&otimesas;'));
    encodeMap.e2(to('\xF6', '&ouml'));
    encodeMap.e2(to('\xF6', '&ouml;'));
    encodeMap.e2(to('\u233D', '&ovbar;'));
    encodeMap.e2(to('\u2225', '&par;'));
    encodeMap.e2(to('\xB6', '&para'));
    encodeMap.e2(to('\xB6', '&para;'));
    encodeMap.e2(to('\u2225', '&parallel;'));
    encodeMap.e2(to('\u2AF3', '&parsim;'));
    encodeMap.e2(to('\u2AFD', '&parsl;'));
    encodeMap.e2(to('\u2202', '&part;'));
    encodeMap.e2(to('\u043F', '&pcy;'));
    encodeMap.e2(to('%', '&percnt;'));
    encodeMap.e2(to('.', '&period;'));
    encodeMap.e2(to('\u2030', '&permil;'));
    encodeMap.e2(to('\u22A5', '&perp;'));
    encodeMap.e2(to('\u2031', '&pertenk;'));
    encodeMap.e2(to('\uD835\uDD2D', '&pfr;'));
    encodeMap.e2(to('\u03C6', '&phi;'));
    encodeMap.e2(to('\u03D5', '&phiv;'));
    encodeMap.e2(to('\u2133', '&phmmat;'));
    encodeMap.e2(to('\u260E', '&phone;'));
    encodeMap.e2(to('\u03C0', '&pi;'));
    encodeMap.e2(to('\u22D4', '&pitchfork;'));
    encodeMap.e2(to('\u03D6', '&piv;'));
    encodeMap.e2(to('\u210F', '&planck;'));
    encodeMap.e2(to('\u210E', '&planckh;'));
    encodeMap.e2(to('\u210F', '&plankv;'));
    encodeMap.e2(to('+', '&plus;'));
    encodeMap.e2(to('\u2A23', '&plusacir;'));
    encodeMap.e2(to('\u229E', '&plusb;'));
    encodeMap.e2(to('\u2A22', '&pluscir;'));
    encodeMap.e2(to('\u2214', '&plusdo;'));
    encodeMap.e2(to('\u2A25', '&plusdu;'));
    encodeMap.e2(to('\u2A72', '&pluse;'));
    encodeMap.e2(to('\xB1', '&plusmn'));
    encodeMap.e2(to('\xB1', '&plusmn;'));
    encodeMap.e2(to('\u2A26', '&plussim;'));
    encodeMap.e2(to('\u2A27', '&plustwo;'));
    encodeMap.e2(to('\xB1', '&pm;'));
    encodeMap.e2(to('\u2A15', '&pointint;'));
    encodeMap.e2(to('\uD835\uDD61', '&popf;'));
    encodeMap.e2(to('\xA3', '&pound'));
    encodeMap.e2(to('\xA3', '&pound;'));
    encodeMap.e2(to('\u227A', '&pr;'));
    encodeMap.e2(to('\u2AB3', '&prE;'));
    encodeMap.e2(to('\u2AB7', '&prap;'));
    encodeMap.e2(to('\u227C', '&prcue;'));
    encodeMap.e2(to('\u2AAF', '&pre;'));
    encodeMap.e2(to('\u227A', '&prec;'));
    encodeMap.e2(to('\u2AB7', '&precapprox;'));
    encodeMap.e2(to('\u227C', '&preccurlyeq;'));
    encodeMap.e2(to('\u2AAF', '&preceq;'));
    encodeMap.e2(to('\u2AB9', '&precnapprox;'));
    encodeMap.e2(to('\u2AB5', '&precneqq;'));
    encodeMap.e2(to('\u22E8', '&precnsim;'));
    encodeMap.e2(to('\u227E', '&precsim;'));
    encodeMap.e2(to('\u2032', '&prime;'));
    encodeMap.e2(to('\u2119', '&primes;'));
    encodeMap.e2(to('\u2AB5', '&prnE;'));
    encodeMap.e2(to('\u2AB9', '&prnap;'));
    encodeMap.e2(to('\u22E8', '&prnsim;'));
    encodeMap.e2(to('\u220F', '&prod;'));
    encodeMap.e2(to('\u232E', '&profalar;'));
    encodeMap.e2(to('\u2312', '&profline;'));
    encodeMap.e2(to('\u2313', '&profsurf;'));
    encodeMap.e2(to('\u221D', '&prop;'));
    encodeMap.e2(to('\u221D', '&propto;'));
    encodeMap.e2(to('\u227E', '&prsim;'));
    encodeMap.e2(to('\u22B0', '&prurel;'));
    encodeMap.e2(to('\uD835\uDCC5', '&pscr;'));
    encodeMap.e2(to('\u03C8', '&psi;'));
    encodeMap.e2(to('\u2008', '&puncsp;'));
    encodeMap.e2(to('\uD835\uDD2E', '&qfr;'));
    encodeMap.e2(to('\u2A0C', '&qint;'));
    encodeMap.e2(to('\uD835\uDD62', '&qopf;'));
    encodeMap.e2(to('\u2057', '&qprime;'));
    encodeMap.e2(to('\uD835\uDCC6', '&qscr;'));
    encodeMap.e2(to('\u210D', '&quaternions;'));
    encodeMap.e2(to('\u2A16', '&quatint;'));
    encodeMap.e2(to('?', '&quest;'));
    encodeMap.e2(to('\u225F', '&questeq;'));
    encodeMap.e2(to('"', '&quot'));
    encodeMap.e2(to('"', '&quot;'));
    encodeMap.e2(to('\u21DB', '&rAarr;'));
    encodeMap.e2(to('\u21D2', '&rArr;'));
    encodeMap.e2(to('\u291C', '&rAtail;'));
    encodeMap.e2(to('\u290F', '&rBarr;'));
    encodeMap.e2(to('\u2964', '&rHar;'));
    encodeMap.e2(to('\u223D\u0331', '&race;'));
    encodeMap.e2(to('\u0155', '&racute;'));
    encodeMap.e2(to('\u221A', '&radic;'));
    encodeMap.e2(to('\u29B3', '&raemptyv;'));
    encodeMap.e2(to('\u27E9', '&rang;'));
    encodeMap.e2(to('\u2992', '&rangd;'));
    encodeMap.e2(to('\u29A5', '&range;'));
    encodeMap.e2(to('\u27E9', '&rangle;'));
    encodeMap.e2(to('\xBB', '&raquo'));
    encodeMap.e2(to('\xBB', '&raquo;'));
    encodeMap.e2(to('\u2192', '&rarr;'));
    encodeMap.e2(to('\u2975', '&rarrap;'));
    encodeMap.e2(to('\u21E5', '&rarrb;'));
    encodeMap.e2(to('\u2920', '&rarrbfs;'));
    encodeMap.e2(to('\u2933', '&rarrc;'));
    encodeMap.e2(to('\u291E', '&rarrfs;'));
    encodeMap.e2(to('\u21AA', '&rarrhk;'));
    encodeMap.e2(to('\u21AC', '&rarrlp;'));
    encodeMap.e2(to('\u2945', '&rarrpl;'));
    encodeMap.e2(to('\u2974', '&rarrsim;'));
    encodeMap.e2(to('\u21A3', '&rarrtl;'));
    encodeMap.e2(to('\u219D', '&rarrw;'));
    encodeMap.e2(to('\u291A', '&ratail;'));
    encodeMap.e2(to('\u2236', '&ratio;'));
    encodeMap.e2(to('\u211A', '&rationals;'));
    encodeMap.e2(to('\u290D', '&rbarr;'));
    encodeMap.e2(to('\u2773', '&rbbrk;'));
    encodeMap.e2(to('}', '&rbrace;'));
    encodeMap.e2(to(']', '&rbrack;'));
    encodeMap.e2(to('\u298C', '&rbrke;'));
    encodeMap.e2(to('\u298E', '&rbrksld;'));
    encodeMap.e2(to('\u2990', '&rbrkslu;'));
    encodeMap.e2(to('\u0159', '&rcaron;'));
    encodeMap.e2(to('\u0157', '&rcedil;'));
    encodeMap.e2(to('\u2309', '&rceil;'));
    encodeMap.e2(to('}', '&rcub;'));
    encodeMap.e2(to('\u0440', '&rcy;'));
    encodeMap.e2(to('\u2937', '&rdca;'));
    encodeMap.e2(to('\u2969', '&rdldhar;'));
    encodeMap.e2(to('\u201D', '&rdquo;'));
    encodeMap.e2(to('\u201D', '&rdquor;'));
    encodeMap.e2(to('\u21B3', '&rdsh;'));
    encodeMap.e2(to('\u211C', '&real;'));
    encodeMap.e2(to('\u211B', '&realine;'));
    encodeMap.e2(to('\u211C', '&realpart;'));
    encodeMap.e2(to('\u211D', '&reals;'));
    encodeMap.e2(to('\u25AD', '&rect;'));
    encodeMap.e2(to('\xAE', '&reg'));
    encodeMap.e2(to('\xAE', '&reg;'));
    encodeMap.e2(to('\u297D', '&rfisht;'));
    encodeMap.e2(to('\u230B', '&rfloor;'));
    encodeMap.e2(to('\uD835\uDD2F', '&rfr;'));
    encodeMap.e2(to('\u21C1', '&rhard;'));
    encodeMap.e2(to('\u21C0', '&rharu;'));
    encodeMap.e2(to('\u296C', '&rharul;'));
    encodeMap.e2(to('\u03C1', '&rho;'));
    encodeMap.e2(to('\u03F1', '&rhov;'));
    encodeMap.e2(to('\u2192', '&rightarrow;'));
    encodeMap.e2(to('\u21A3', '&rightarrowtail;'));
    encodeMap.e2(to('\u21C1', '&rightharpoondown;'));
    encodeMap.e2(to('\u21C0', '&rightharpoonup;'));
    encodeMap.e2(to('\u21C4', '&rightleftarrows;'));
    encodeMap.e2(to('\u21CC', '&rightleftharpoons;'));
    encodeMap.e2(to('\u21C9', '&rightrightarrows;'));
    encodeMap.e2(to('\u219D', '&rightsquigarrow;'));
    encodeMap.e2(to('\u22CC', '&rightthreetimes;'));
    encodeMap.e2(to('\u02DA', '&ring;'));
    encodeMap.e2(to('\u2253', '&risingdotseq;'));
    encodeMap.e2(to('\u21C4', '&rlarr;'));
    encodeMap.e2(to('\u21CC', '&rlhar;'));
    encodeMap.e2(to('\u200F', '&rlm;'));
    encodeMap.e2(to('\u23B1', '&rmoust;'));
    encodeMap.e2(to('\u23B1', '&rmoustache;'));
    encodeMap.e2(to('\u2AEE', '&rnmid;'));
    encodeMap.e2(to('\u27ED', '&roang;'));
    encodeMap.e2(to('\u21FE', '&roarr;'));
    encodeMap.e2(to('\u27E7', '&robrk;'));
    encodeMap.e2(to('\u2986', '&ropar;'));
    encodeMap.e2(to('\uD835\uDD63', '&ropf;'));
    encodeMap.e2(to('\u2A2E', '&roplus;'));
    encodeMap.e2(to('\u2A35', '&rotimes;'));
    encodeMap.e2(to(')', '&rpar;'));
    encodeMap.e2(to('\u2994', '&rpargt;'));
    encodeMap.e2(to('\u2A12', '&rppolint;'));
    encodeMap.e2(to('\u21C9', '&rrarr;'));
    encodeMap.e2(to('\u203A', '&rsaquo;'));
    encodeMap.e2(to('\uD835\uDCC7', '&rscr;'));
    encodeMap.e2(to('\u21B1', '&rsh;'));
    encodeMap.e2(to(']', '&rsqb;'));
    encodeMap.e2(to('\u2019', '&rsquo;'));
    encodeMap.e2(to('\u2019', '&rsquor;'));
    encodeMap.e2(to('\u22CC', '&rthree;'));
    encodeMap.e2(to('\u22CA', '&rtimes;'));
    encodeMap.e2(to('\u25B9', '&rtri;'));
    encodeMap.e2(to('\u22B5', '&rtrie;'));
    encodeMap.e2(to('\u25B8', '&rtrif;'));
    encodeMap.e2(to('\u29CE', '&rtriltri;'));
    encodeMap.e2(to('\u2968', '&ruluhar;'));
    encodeMap.e2(to('\u211E', '&rx;'));
    encodeMap.e2(to('\u015B', '&sacute;'));
    encodeMap.e2(to('\u201A', '&sbquo;'));
    encodeMap.e2(to('\u227B', '&sc;'));
    encodeMap.e2(to('\u2AB4', '&scE;'));
    encodeMap.e2(to('\u2AB8', '&scap;'));
    encodeMap.e2(to('\u0161', '&scaron;'));
    encodeMap.e2(to('\u227D', '&sccue;'));
    encodeMap.e2(to('\u2AB0', '&sce;'));
    encodeMap.e2(to('\u015F', '&scedil;'));
    encodeMap.e2(to('\u015D', '&scirc;'));
    encodeMap.e2(to('\u2AB6', '&scnE;'));
    encodeMap.e2(to('\u2ABA', '&scnap;'));
    encodeMap.e2(to('\u22E9', '&scnsim;'));
    encodeMap.e2(to('\u2A13', '&scpolint;'));
    encodeMap.e2(to('\u227F', '&scsim;'));
    encodeMap.e2(to('\u0441', '&scy;'));
    encodeMap.e2(to('\u22C5', '&sdot;'));
    encodeMap.e2(to('\u22A1', '&sdotb;'));
    encodeMap.e2(to('\u2A66', '&sdote;'));
    encodeMap.e2(to('\u21D8', '&seArr;'));
    encodeMap.e2(to('\u2925', '&searhk;'));
    encodeMap.e2(to('\u2198', '&searr;'));
    encodeMap.e2(to('\u2198', '&searrow;'));
    encodeMap.e2(to('\xA7', '&sect'));
    encodeMap.e2(to('\xA7', '&sect;'));
    encodeMap.e2(to(';', '&semi;'));
    encodeMap.e2(to('\u2929', '&seswar;'));
    encodeMap.e2(to('\u2216', '&setminus;'));
    encodeMap.e2(to('\u2216', '&setmn;'));
    encodeMap.e2(to('\u2736', '&sext;'));
    encodeMap.e2(to('\uD835\uDD30', '&sfr;'));
    encodeMap.e2(to('\u2322', '&sfrown;'));
    encodeMap.e2(to('\u266F', '&sharp;'));
    encodeMap.e2(to('\u0449', '&shchcy;'));
    encodeMap.e2(to('\u0448', '&shcy;'));
    encodeMap.e2(to('\u2223', '&shortmid;'));
    encodeMap.e2(to('\u2225', '&shortparallel;'));
    encodeMap.e2(to('\xAD', '&shy'));
    encodeMap.e2(to('\xAD', '&shy;'));
    encodeMap.e2(to('\u03C3', '&sigma;'));
    encodeMap.e2(to('\u03C2', '&sigmaf;'));
    encodeMap.e2(to('\u03C2', '&sigmav;'));
    encodeMap.e2(to('\u223C', '&sim;'));
    encodeMap.e2(to('\u2A6A', '&simdot;'));
    encodeMap.e2(to('\u2243', '&sime;'));
    encodeMap.e2(to('\u2243', '&simeq;'));
    encodeMap.e2(to('\u2A9E', '&simg;'));
    encodeMap.e2(to('\u2AA0', '&simgE;'));
    encodeMap.e2(to('\u2A9D', '&siml;'));
    encodeMap.e2(to('\u2A9F', '&simlE;'));
    encodeMap.e2(to('\u2246', '&simne;'));
    encodeMap.e2(to('\u2A24', '&simplus;'));
    encodeMap.e2(to('\u2972', '&simrarr;'));
    encodeMap.e2(to('\u2190', '&slarr;'));
    encodeMap.e2(to('\u2216', '&smallsetminus;'));
    encodeMap.e2(to('\u2A33', '&smashp;'));
    encodeMap.e2(to('\u29E4', '&smeparsl;'));
    encodeMap.e2(to('\u2223', '&smid;'));
    encodeMap.e2(to('\u2323', '&smile;'));
    encodeMap.e2(to('\u2AAA', '&smt;'));
    encodeMap.e2(to('\u2AAC', '&smte;'));
    encodeMap.e2(to('\u2AAC\uFE00', '&smtes;'));
    encodeMap.e2(to('\u044C', '&softcy;'));
    encodeMap.e2(to('/', '&sol;'));
    encodeMap.e2(to('\u29C4', '&solb;'));
    encodeMap.e2(to('\u233F', '&solbar;'));
    encodeMap.e2(to('\uD835\uDD64', '&sopf;'));
    encodeMap.e2(to('\u2660', '&spades;'));
    encodeMap.e2(to('\u2660', '&spadesuit;'));
    encodeMap.e2(to('\u2225', '&spar;'));
    encodeMap.e2(to('\u2293', '&sqcap;'));
    encodeMap.e2(to('\u2293\uFE00', '&sqcaps;'));
    encodeMap.e2(to('\u2294', '&sqcup;'));
    encodeMap.e2(to('\u2294\uFE00', '&sqcups;'));
    encodeMap.e2(to('\u228F', '&sqsub;'));
    encodeMap.e2(to('\u2291', '&sqsube;'));
    encodeMap.e2(to('\u228F', '&sqsubset;'));
    encodeMap.e2(to('\u2291', '&sqsubseteq;'));
    encodeMap.e2(to('\u2290', '&sqsup;'));
    encodeMap.e2(to('\u2292', '&sqsupe;'));
    encodeMap.e2(to('\u2290', '&sqsupset;'));
    encodeMap.e2(to('\u2292', '&sqsupseteq;'));
    encodeMap.e2(to('\u25A1', '&squ;'));
    encodeMap.e2(to('\u25A1', '&square;'));
    encodeMap.e2(to('\u25AA', '&squarf;'));
    encodeMap.e2(to('\u25AA', '&squf;'));
    encodeMap.e2(to('\u2192', '&srarr;'));
    encodeMap.e2(to('\uD835\uDCC8', '&sscr;'));
    encodeMap.e2(to('\u2216', '&ssetmn;'));
    encodeMap.e2(to('\u2323', '&ssmile;'));
    encodeMap.e2(to('\u22C6', '&sstarf;'));
    encodeMap.e2(to('\u2606', '&star;'));
    encodeMap.e2(to('\u2605', '&starf;'));
    encodeMap.e2(to('\u03F5', '&straightepsilon;'));
    encodeMap.e2(to('\u03D5', '&straightphi;'));
    encodeMap.e2(to('\xAF', '&strns;'));
    encodeMap.e2(to('\u2282', '&sub;'));
    encodeMap.e2(to('\u2AC5', '&subE;'));
    encodeMap.e2(to('\u2ABD', '&subdot;'));
    encodeMap.e2(to('\u2286', '&sube;'));
    encodeMap.e2(to('\u2AC3', '&subedot;'));
    encodeMap.e2(to('\u2AC1', '&submult;'));
    encodeMap.e2(to('\u2ACB', '&subnE;'));
    encodeMap.e2(to('\u228A', '&subne;'));
    encodeMap.e2(to('\u2ABF', '&subplus;'));
    encodeMap.e2(to('\u2979', '&subrarr;'));
    encodeMap.e2(to('\u2282', '&subset;'));
    encodeMap.e2(to('\u2286', '&subseteq;'));
    encodeMap.e2(to('\u2AC5', '&subseteqq;'));
    encodeMap.e2(to('\u228A', '&subsetneq;'));
    encodeMap.e2(to('\u2ACB', '&subsetneqq;'));
    encodeMap.e2(to('\u2AC7', '&subsim;'));
    encodeMap.e2(to('\u2AD5', '&subsub;'));
    encodeMap.e2(to('\u2AD3', '&subsup;'));
    encodeMap.e2(to('\u227B', '&succ;'));
    encodeMap.e2(to('\u2AB8', '&succapprox;'));
    encodeMap.e2(to('\u227D', '&succcurlyeq;'));
    encodeMap.e2(to('\u2AB0', '&succeq;'));
    encodeMap.e2(to('\u2ABA', '&succnapprox;'));
    encodeMap.e2(to('\u2AB6', '&succneqq;'));
    encodeMap.e2(to('\u22E9', '&succnsim;'));
    encodeMap.e2(to('\u227F', '&succsim;'));
    encodeMap.e2(to('\u2211', '&sum;'));
    encodeMap.e2(to('\u266A', '&sung;'));
    encodeMap.e2(to('\xB9', '&sup1'));
    encodeMap.e2(to('\xB9', '&sup1;'));
    encodeMap.e2(to('\xB2', '&sup2'));
    encodeMap.e2(to('\xB2', '&sup2;'));
    encodeMap.e2(to('\xB3', '&sup3'));
    encodeMap.e2(to('\xB3', '&sup3;'));
    encodeMap.e2(to('\u2283', '&sup;'));
    encodeMap.e2(to('\u2AC6', '&supE;'));
    encodeMap.e2(to('\u2ABE', '&supdot;'));
    encodeMap.e2(to('\u2AD8', '&supdsub;'));
    encodeMap.e2(to('\u2287', '&supe;'));
    encodeMap.e2(to('\u2AC4', '&supedot;'));
    encodeMap.e2(to('\u27C9', '&suphsol;'));
    encodeMap.e2(to('\u2AD7', '&suphsub;'));
    encodeMap.e2(to('\u297B', '&suplarr;'));
    encodeMap.e2(to('\u2AC2', '&supmult;'));
    encodeMap.e2(to('\u2ACC', '&supnE;'));
    encodeMap.e2(to('\u228B', '&supne;'));
    encodeMap.e2(to('\u2AC0', '&supplus;'));
    encodeMap.e2(to('\u2283', '&supset;'));
    encodeMap.e2(to('\u2287', '&supseteq;'));
    encodeMap.e2(to('\u2AC6', '&supseteqq;'));
    encodeMap.e2(to('\u228B', '&supsetneq;'));
    encodeMap.e2(to('\u2ACC', '&supsetneqq;'));
    encodeMap.e2(to('\u2AC8', '&supsim;'));
    encodeMap.e2(to('\u2AD4', '&supsub;'));
    encodeMap.e2(to('\u2AD6', '&supsup;'));
    encodeMap.e2(to('\u21D9', '&swArr;'));
    encodeMap.e2(to('\u2926', '&swarhk;'));
    encodeMap.e2(to('\u2199', '&swarr;'));
    encodeMap.e2(to('\u2199', '&swarrow;'));
    encodeMap.e2(to('\u292A', '&swnwar;'));
    encodeMap.e2(to('\xDF', '&szlig'));
    encodeMap.e2(to('\xDF', '&szlig;'));
    encodeMap.e2(to('\u2316', '&target;'));
    encodeMap.e2(to('\u03C4', '&tau;'));
    encodeMap.e2(to('\u23B4', '&tbrk;'));
    encodeMap.e2(to('\u0165', '&tcaron;'));
    encodeMap.e2(to('\u0163', '&tcedil;'));
    encodeMap.e2(to('\u0442', '&tcy;'));
    encodeMap.e2(to('\u20DB', '&tdot;'));
    encodeMap.e2(to('\u2315', '&telrec;'));
    encodeMap.e2(to('\uD835\uDD31', '&tfr;'));
    encodeMap.e2(to('\u2234', '&there4;'));
    encodeMap.e2(to('\u2234', '&therefore;'));
    encodeMap.e2(to('\u03B8', '&theta;'));
    encodeMap.e2(to('\u03D1', '&thetasym;'));
    encodeMap.e2(to('\u03D1', '&thetav;'));
    encodeMap.e2(to('\u2248', '&thickapprox;'));
    encodeMap.e2(to('\u223C', '&thicksim;'));
    encodeMap.e2(to('\u2009', '&thinsp;'));
    encodeMap.e2(to('\u2248', '&thkap;'));
    encodeMap.e2(to('\u223C', '&thksim;'));
    encodeMap.e2(to('\xFE', '&thorn'));
    encodeMap.e2(to('\xFE', '&thorn;'));
    encodeMap.e2(to('\u02DC', '&tilde;'));
    encodeMap.e2(to('\xD7', '&times'));
    encodeMap.e2(to('\xD7', '&times;'));
    encodeMap.e2(to('\u22A0', '&timesb;'));
    encodeMap.e2(to('\u2A31', '&timesbar;'));
    encodeMap.e2(to('\u2A30', '&timesd;'));
    encodeMap.e2(to('\u222D', '&tint;'));
    encodeMap.e2(to('\u2928', '&toea;'));
    encodeMap.e2(to('\u22A4', '&top;'));
    encodeMap.e2(to('\u2336', '&topbot;'));
    encodeMap.e2(to('\u2AF1', '&topcir;'));
    encodeMap.e2(to('\uD835\uDD65', '&topf;'));
    encodeMap.e2(to('\u2ADA', '&topfork;'));
    encodeMap.e2(to('\u2929', '&tosa;'));
    encodeMap.e2(to('\u2034', '&tprime;'));
    encodeMap.e2(to('\u2122', '&trade;'));
    encodeMap.e2(to('\u25B5', '&triangle;'));
    encodeMap.e2(to('\u25BF', '&triangledown;'));
    encodeMap.e2(to('\u25C3', '&triangleleft;'));
    encodeMap.e2(to('\u22B4', '&trianglelefteq;'));
    encodeMap.e2(to('\u225C', '&triangleq;'));
    encodeMap.e2(to('\u25B9', '&triangleright;'));
    encodeMap.e2(to('\u22B5', '&trianglerighteq;'));
    encodeMap.e2(to('\u25EC', '&tridot;'));
    encodeMap.e2(to('\u225C', '&trie;'));
    encodeMap.e2(to('\u2A3A', '&triminus;'));
    encodeMap.e2(to('\u2A39', '&triplus;'));
    encodeMap.e2(to('\u29CD', '&trisb;'));
    encodeMap.e2(to('\u2A3B', '&tritime;'));
    encodeMap.e2(to('\u23E2', '&trpezium;'));
    encodeMap.e2(to('\uD835\uDCC9', '&tscr;'));
    encodeMap.e2(to('\u0446', '&tscy;'));
    encodeMap.e2(to('\u045B', '&tshcy;'));
    encodeMap.e2(to('\u0167', '&tstrok;'));
    encodeMap.e2(to('\u226C', '&twixt;'));
    encodeMap.e2(to('\u219E', '&twoheadleftarrow;'));
    encodeMap.e2(to('\u21A0', '&twoheadrightarrow;'));
    encodeMap.e2(to('\u21D1', '&uArr;'));
    encodeMap.e2(to('\u2963', '&uHar;'));
    encodeMap.e2(to('\xFA', '&uacute'));
    encodeMap.e2(to('\xFA', '&uacute;'));
    encodeMap.e2(to('\u2191', '&uarr;'));
    encodeMap.e2(to('\u045E', '&ubrcy;'));
    encodeMap.e2(to('\u016D', '&ubreve;'));
    encodeMap.e2(to('\xFB', '&ucirc'));
    encodeMap.e2(to('\xFB', '&ucirc;'));
    encodeMap.e2(to('\u0443', '&ucy;'));
    encodeMap.e2(to('\u21C5', '&udarr;'));
    encodeMap.e2(to('\u0171', '&udblac;'));
    encodeMap.e2(to('\u296E', '&udhar;'));
    encodeMap.e2(to('\u297E', '&ufisht;'));
    encodeMap.e2(to('\uD835\uDD32', '&ufr;'));
    encodeMap.e2(to('\xF9', '&ugrave'));
    encodeMap.e2(to('\xF9', '&ugrave;'));
    encodeMap.e2(to('\u21BF', '&uharl;'));
    encodeMap.e2(to('\u21BE', '&uharr;'));
    encodeMap.e2(to('\u2580', '&uhblk;'));
    encodeMap.e2(to('\u231C', '&ulcorn;'));
    encodeMap.e2(to('\u231C', '&ulcorner;'));
    encodeMap.e2(to('\u230F', '&ulcrop;'));
    encodeMap.e2(to('\u25F8', '&ultri;'));
    encodeMap.e2(to('\u016B', '&umacr;'));
    encodeMap.e2(to('\xA8', '&uml'));
    encodeMap.e2(to('\xA8', '&uml;'));
    encodeMap.e2(to('\u0173', '&uogon;'));
    encodeMap.e2(to('\uD835\uDD66', '&uopf;'));
    encodeMap.e2(to('\u2191', '&uparrow;'));
    encodeMap.e2(to('\u2195', '&updownarrow;'));
    encodeMap.e2(to('\u21BF', '&upharpoonleft;'));
    encodeMap.e2(to('\u21BE', '&upharpoonright;'));
    encodeMap.e2(to('\u228E', '&uplus;'));
    encodeMap.e2(to('\u03C5', '&upsi;'));
    encodeMap.e2(to('\u03D2', '&upsih;'));
    encodeMap.e2(to('\u03C5', '&upsilon;'));
    encodeMap.e2(to('\u21C8', '&upuparrows;'));
    encodeMap.e2(to('\u231D', '&urcorn;'));
    encodeMap.e2(to('\u231D', '&urcorner;'));
    encodeMap.e2(to('\u230E', '&urcrop;'));
    encodeMap.e2(to('\u016F', '&uring;'));
    encodeMap.e2(to('\u25F9', '&urtri;'));
    encodeMap.e2(to('\uD835\uDCCA', '&uscr;'));
    encodeMap.e2(to('\u22F0', '&utdot;'));
    encodeMap.e2(to('\u0169', '&utilde;'));
    encodeMap.e2(to('\u25B5', '&utri;'));
    encodeMap.e2(to('\u25B4', '&utrif;'));
    encodeMap.e2(to('\u21C8', '&uuarr;'));
    encodeMap.e2(to('\xFC', '&uuml'));
    encodeMap.e2(to('\xFC', '&uuml;'));
    encodeMap.e2(to('\u29A7', '&uwangle;'));
    encodeMap.e2(to('\u21D5', '&vArr;'));
    encodeMap.e2(to('\u2AE8', '&vBar;'));
    encodeMap.e2(to('\u2AE9', '&vBarv;'));
    encodeMap.e2(to('\u22A8', '&vDash;'));
    encodeMap.e2(to('\u299C', '&vangrt;'));
    encodeMap.e2(to('\u03F5', '&varepsilon;'));
    encodeMap.e2(to('\u03F0', '&varkappa;'));
    encodeMap.e2(to('\u2205', '&varnothing;'));
    encodeMap.e2(to('\u03D5', '&varphi;'));
    encodeMap.e2(to('\u03D6', '&varpi;'));
    encodeMap.e2(to('\u221D', '&varpropto;'));
    encodeMap.e2(to('\u2195', '&varr;'));
    encodeMap.e2(to('\u03F1', '&varrho;'));
    encodeMap.e2(to('\u03C2', '&varsigma;'));
    encodeMap.e2(to('\u228A\uFE00', '&varsubsetneq;'));
    encodeMap.e2(to('\u2ACB\uFE00', '&varsubsetneqq;'));
    encodeMap.e2(to('\u228B\uFE00', '&varsupsetneq;'));
    encodeMap.e2(to('\u2ACC\uFE00', '&varsupsetneqq;'));
    encodeMap.e2(to('\u03D1', '&vartheta;'));
    encodeMap.e2(to('\u22B2', '&vartriangleleft;'));
    encodeMap.e2(to('\u22B3', '&vartriangleright;'));
    encodeMap.e2(to('\u0432', '&vcy;'));
    encodeMap.e2(to('\u22A2', '&vdash;'));
    encodeMap.e2(to('\u2228', '&vee;'));
    encodeMap.e2(to('\u22BB', '&veebar;'));
    encodeMap.e2(to('\u225A', '&veeeq;'));
    encodeMap.e2(to('\u22EE', '&vellip;'));
    encodeMap.e2(to('|', '&verbar;'));
    encodeMap.e2(to('|', '&vert;'));
    encodeMap.e2(to('\uD835\uDD33', '&vfr;'));
    encodeMap.e2(to('\u22B2', '&vltri;'));
    encodeMap.e2(to('\u2282\u20D2', '&vnsub;'));
    encodeMap.e2(to('\u2283\u20D2', '&vnsup;'));
    encodeMap.e2(to('\uD835\uDD67', '&vopf;'));
    encodeMap.e2(to('\u221D', '&vprop;'));
    encodeMap.e2(to('\u22B3', '&vrtri;'));
    encodeMap.e2(to('\uD835\uDCCB', '&vscr;'));
    encodeMap.e2(to('\u2ACB\uFE00', '&vsubnE;'));
    encodeMap.e2(to('\u228A\uFE00', '&vsubne;'));
    encodeMap.e2(to('\u2ACC\uFE00', '&vsupnE;'));
    encodeMap.e2(to('\u228B\uFE00', '&vsupne;'));
    encodeMap.e2(to('\u299A', '&vzigzag;'));
    encodeMap.e2(to('\u0175', '&wcirc;'));
    encodeMap.e2(to('\u2A5F', '&wedbar;'));
    encodeMap.e2(to('\u2227', '&wedge;'));
    encodeMap.e2(to('\u2259', '&wedgeq;'));
    encodeMap.e2(to('\u2118', '&weierp;'));
    encodeMap.e2(to('\uD835\uDD34', '&wfr;'));
    encodeMap.e2(to('\uD835\uDD68', '&wopf;'));
    encodeMap.e2(to('\u2118', '&wp;'));
    encodeMap.e2(to('\u2240', '&wr;'));
    encodeMap.e2(to('\u2240', '&wreath;'));
    encodeMap.e2(to('\uD835\uDCCC', '&wscr;'));
    encodeMap.e2(to('\u22C2', '&xcap;'));
    encodeMap.e2(to('\u25EF', '&xcirc;'));
    encodeMap.e2(to('\u22C3', '&xcup;'));
    encodeMap.e2(to('\u25BD', '&xdtri;'));
    encodeMap.e2(to('\uD835\uDD35', '&xfr;'));
    encodeMap.e2(to('\u27FA', '&xhArr;'));
    encodeMap.e2(to('\u27F7', '&xharr;'));
    encodeMap.e2(to('\u03BE', '&xi;'));
    encodeMap.e2(to('\u27F8', '&xlArr;'));
    encodeMap.e2(to('\u27F5', '&xlarr;'));
    encodeMap.e2(to('\u27FC', '&xmap;'));
    encodeMap.e2(to('\u22FB', '&xnis;'));
    encodeMap.e2(to('\u2A00', '&xodot;'));
    encodeMap.e2(to('\uD835\uDD69', '&xopf;'));
    encodeMap.e2(to('\u2A01', '&xoplus;'));
    encodeMap.e2(to('\u2A02', '&xotime;'));
    encodeMap.e2(to('\u27F9', '&xrArr;'));
    encodeMap.e2(to('\u27F6', '&xrarr;'));
    encodeMap.e2(to('\uD835\uDCCD', '&xscr;'));
    encodeMap.e2(to('\u2A06', '&xsqcup;'));
    encodeMap.e2(to('\u2A04', '&xuplus;'));
    encodeMap.e2(to('\u25B3', '&xutri;'));
    encodeMap.e2(to('\u22C1', '&xvee;'));
    encodeMap.e2(to('\u22C0', '&xwedge;'));
    encodeMap.e2(to('\xFD', '&yacute'));
    encodeMap.e2(to('\xFD', '&yacute;'));
    encodeMap.e2(to('\u044F', '&yacy;'));
    encodeMap.e2(to('\u0177', '&ycirc;'));
    encodeMap.e2(to('\u044B', '&ycy;'));
    encodeMap.e2(to('\xA5', '&yen'));
    encodeMap.e2(to('\xA5', '&yen;'));
    encodeMap.e2(to('\uD835\uDD36', '&yfr;'));
    encodeMap.e2(to('\u0457', '&yicy;'));
    encodeMap.e2(to('\uD835\uDD6A', '&yopf;'));
    encodeMap.e2(to('\uD835\uDCCE', '&yscr;'));
    encodeMap.e2(to('\u044E', '&yucy;'));
    encodeMap.e2(to('\xFF', '&yuml'));
    encodeMap.e2(to('\xFF', '&yuml;'));
    encodeMap.e2(to('\u017A', '&zacute;'));
    encodeMap.e2(to('\u017E', '&zcaron;'));
    encodeMap.e2(to('\u0437', '&zcy;'));
    encodeMap.e2(to('\u017C', '&zdot;'));
    encodeMap.e2(to('\u2128', '&zeetrf;'));
    encodeMap.e2(to('\u03B6', '&zeta;'));
    encodeMap.e2(to('\uD835\uDD37', '&zfr;'));
    encodeMap.e2(to('\u0436', '&zhcy;'));
    encodeMap.e2(to('\u21DD', '&zigrarr;'));
    encodeMap.e2(to('\uD835\uDD6B', '&zopf;'));
    encodeMap.e2(to('\uD835\uDCCF', '&zscr;'));
    encodeMap.e2(to('\u200D', '&zwj;'));
    encodeMap.e2(to('\u200C', '&zwnj;'));
    tmp.ncj_1 = toList(encodeMap);
    this.ocj_1 = invert(this, this.ncj_1);
  }
}
class KsoupEntities {
  constructor() {
    KsoupEntities_instance = this;
    var tmp = this;
    // Inline function 'kotlin.run' call
    var encodeXml11Map = listOf([to('\x00', ''), to('\x0B', '&#11;'), to('\f', '&#12;'), to('\uFFFE', ''), to('\uFFFF', '')]);
    tmp.wcj_1 = AggregateTranslator.gcj([LookupTranslator.tcj(EntityMaps_getInstance().jcj_1), LookupTranslator.tcj(encodeXml11Map), Companion_instance_0.ucj(1, 8), Companion_instance_0.ucj(14, 31), Companion_instance_0.ucj(127, 132), Companion_instance_0.ucj(134, 159), UnicodeUnpairedSurrogateRemover.vcj()]);
    this.xcj_1 = AggregateTranslator.gcj([LookupTranslator.tcj(EntityMaps_getInstance().lcj_1)]);
    this.ycj_1 = AggregateTranslator.gcj([LookupTranslator.tcj(EntityMaps_getInstance().ncj_1), Companion_instance_0.ucj(1, 8), Companion_instance_0.ucj(14, 31), Companion_instance_0.ucj(127, 132), Companion_instance_0.ucj(134, 159)]);
    this.zcj_1 = AggregateTranslator.gcj([LookupTranslator.tcj(EntityMaps_getInstance().mcj_1), NumericEntityDecoder.dck([])]);
    this.ack_1 = AggregateTranslator.gcj([LookupTranslator.tcj(EntityMaps_getInstance().ocj_1), NumericEntityDecoder.dck([])]);
    this.bck_1 = AggregateTranslator.gcj([LookupTranslator.tcj(EntityMaps_getInstance().kcj_1), NumericEntityDecoder.dck([])]);
  }
  eck(input) {
    return this.ack_1.icj(input);
  }
  fck(input) {
    return this.eck(input);
  }
}
class LookupTranslator extends StringTranslator {
  constructor(lookupMap) {
    return new.target.tcj(lookupMap);
  }
  static tcj(lookupMap) {
    var $this = this.fcj();
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.pcj_1 = LinkedHashMap.r5();
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.qcj_1 = LinkedHashSet.p2();
    var currentShortest = 2147483647;
    var currentLongest = 0;
    var _iterator__ex2g4s = lookupMap.l1();
    while (_iterator__ex2g4s.m1()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.n1();
      var key = _destruct__k2r9zo.mm();
      var value = _destruct__k2r9zo.nm();
      // Inline function 'kotlin.collections.set' call
      $this.pcj_1.o4(key, value);
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(key, 0);
      // Inline function 'kotlin.toUShort' call
      var this_1 = Char__toInt_impl_vasixd(this_0);
      var tmp$ret$4 = _UShort___init__impl__jigrne(toShort(this_1));
      $this.qcj_1.e2(new UShort(tmp$ret$4));
      var sz = key.length;
      if (sz < currentShortest) {
        currentShortest = sz;
      }
      if (sz > currentLongest) {
        currentLongest = sz;
      }
    }
    $this.rcj_1 = currentShortest;
    $this.scj_1 = currentLongest;
    return $this;
  }
  hcj(input, offset, stringBuilder) {
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(input, offset);
    // Inline function 'kotlin.toUShort' call
    var this_1 = Char__toInt_impl_vasixd(this_0);
    var tmp$ret$1 = _UShort___init__impl__jigrne(toShort(this_1));
    if (this.qcj_1.o2(new UShort(tmp$ret$1))) {
      var max = this.scj_1;
      if ((offset + this.scj_1 | 0) > input.length) {
        max = input.length - offset | 0;
      }
      var inductionVariable = max;
      var last = this.rcj_1;
      if (last <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var subSeq = substring(input, offset, offset + i | 0);
          var result = this.pcj_1.v4(toString(subSeq));
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
  static gck() {
    return this.fcj();
  }
  hcj(input, offset, stringBuilder) {
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(input, offset);
    var codePoint = Char__toInt_impl_vasixd(this_0);
    var consumed = this.hck(codePoint, stringBuilder);
    return consumed ? 1 : 0;
  }
}
class Option extends Enum {}
class Companion {
  constructor() {
    Companion_instance = this;
    this.ick_1 = setOf(Option_SemiColonRequired_getInstance());
  }
}
class NumericEntityDecoder extends StringTranslator {
  constructor(options) {
    return new.target.dck(options);
  }
  static dck(options) {
    Companion_getInstance();
    var $this = this.fcj();
    var tmp = $this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (options.length === 0) {
      tmp_0 = Companion_getInstance().ick_1;
    } else {
      tmp_0 = setOf_0(options.slice());
    }
    tmp.cck_1 = tmp_0;
    return $this;
  }
  hcj(input, offset, stringBuilder) {
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
        var indexedObject = CharsUtils_instance.lck(entityValue);
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
  ucj(codePointLow, codePointHigh) {
    return NumericEntityEncoder.ock(numberRangeToNumber(codePointLow, codePointHigh), true);
  }
}
class NumericEntityEncoder extends CodePointTranslator {
  constructor(range, between) {
    return new.target.ock(range, between);
  }
  static ock(range, between) {
    var $this = this.gck();
    $this.mck_1 = range;
    $this.nck_1 = between;
    return $this;
  }
  static pck() {
    return this.ock(numberRangeToNumber(0, 2147483647), true);
  }
  hck(codePoint, stringBuilder) {
    if (!(this.nck_1 === this.mck_1.xr(codePoint))) {
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
    return new.target.vcj();
  }
  static vcj() {
    return this.gck();
  }
  hck(codePoint, stringBuilder) {
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
    this.jck_1 = 65536;
    this.kck_1 = 1114111;
  }
  lck(codePoint) {
    var tmp;
    if (isBmpCodePoint(this, codePoint)) {
      // Inline function 'kotlin.charArrayOf' call
      tmp = charArrayOf([numberToChar(codePoint)]);
    } else if (isValidCodePoint(this, codePoint)) {
      var result = charArray(2);
      toSurrogates(this, codePoint, result, 0);
      tmp = result;
    } else {
      throw IllegalArgumentException.re();
    }
    return tmp;
  }
}
//endregion
function invert($this, list) {
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.d2(collectionSizeOrDefault(list, 10));
  var _iterator__ex2g4s = list.l1();
  while (_iterator__ex2g4s.m1()) {
    var item = _iterator__ex2g4s.n1();
    var a = item.mm();
    var b = item.nm();
    var tmp$ret$2 = to(b, a);
    destination.e2(tmp$ret$2);
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
    var consumed = $this.hcj(input, pos, stringBuilder);
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
  return $this.cck_1.o2(option);
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
initMetadataForClass(AggregateTranslator, 'AggregateTranslator', AggregateTranslator.ecj);
initMetadataForObject(EntityMaps, 'EntityMaps');
initMetadataForObject(KsoupEntities, 'KsoupEntities');
initMetadataForClass(LookupTranslator, 'LookupTranslator');
initMetadataForClass(CodePointTranslator, 'CodePointTranslator');
initMetadataForClass(Option, 'Option');
initMetadataForCompanion(Companion);
initMetadataForClass(NumericEntityDecoder, 'NumericEntityDecoder');
initMetadataForCompanion(Companion_0);
initMetadataForClass(NumericEntityEncoder, 'NumericEntityEncoder', NumericEntityEncoder.pck);
initMetadataForClass(UnicodeUnpairedSurrogateRemover, 'UnicodeUnpairedSurrogateRemover', UnicodeUnpairedSurrogateRemover.vcj);
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
