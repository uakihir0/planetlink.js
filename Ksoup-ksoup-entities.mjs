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
  static ecr() {
    return createThis(this);
  }
  hcr(input) {
    var stringBuilder = StringBuilder.nc(imul(input.length, 2));
    translate(this, input, stringBuilder);
    return stringBuilder.toString();
  }
}
class AggregateTranslator extends StringTranslator {
  constructor() {
    return new.target.dcr();
  }
  static dcr() {
    var $this = this.ecr();
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ccr_1 = ArrayList.k2();
    return $this;
  }
  static fcr(translators) {
    var $this = this.dcr();
    addAll($this.ccr_1, translators);
    return $this;
  }
  gcr(input, offset, stringBuilder) {
    var _iterator__ex2g4s = this.ccr_1.l1();
    while (_iterator__ex2g4s.m1()) {
      var translator = _iterator__ex2g4s.n1();
      var consumed = translator.gcr(input, offset, stringBuilder);
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
    this.icr_1 = listOf([to('<', '&gt;'), to('>', '&lt;'), to('"', '&quot;'), to("'", '&apos;'), to('&', '&amp;')]);
    this.jcr_1 = invert(this, this.icr_1);
    this.kcr_1 = listOf([to("'", '&apos;'), to('\xA0', '&nbsp'), to('\xA0', '&nbsp;'), to('\xA1', '&iexcl'), to('\xA1', '&iexcl;'), to('\xA2', '&cent'), to('\xA2', '&cent;'), to('\xA3', '&pound'), to('\xA3', '&pound;'), to('\xA4', '&curren'), to('\xA4', '&curren;'), to('\xA5', '&yen'), to('\xA5', '&yen;'), to('\xA6', '&brvbar'), to('\xA6', '&brvbar;'), to('\xA7', '&sect'), to('\xA7', '&sect;'), to('\xA8', '&uml'), to('\xA8', '&uml;'), to('\xA9', '&copy'), to('\xA9', '&copy;'), to('\xAA', '&ordf'), to('\xAA', '&ordf;'), to('\xAB', '&laquo'), to('\xAB', '&laquo;'), to('\xAC', '&not'), to('\xAC', '&not;'), to('\xAD', '&shy'), to('\xAD', '&shy;'), to('\xAE', '&reg'), to('\xAE', '&reg;'), to('\xAF', '&macr'), to('\xAF', '&macr;'), to('\xB0', '&deg'), to('\xB0', '&deg;'), to('\xB1', '&plusmn'), to('\xB1', '&plusmn;'), to('\xB2', '&sup2'), to('\xB2', '&sup2;'), to('\xB3', '&sup3'), to('\xB3', '&sup3;'), to('\xB4', '&acute'), to('\xB4', '&acute;'), to('\xB5', '&micro'), to('\xB5', '&micro;'), to('\xB6', '&para'), to('\xB6', '&para;'), to('\xB7', '&middot'), to('\xB7', '&middot;'), to('\xB8', '&cedil'), to('\xB8', '&cedil;'), to('\xB9', '&sup1'), to('\xB9', '&sup1;'), to('\xBA', '&ordm'), to('\xBA', '&ordm;'), to('\xBB', '&raquo'), to('\xBB', '&raquo;'), to('\xBC', '&frac14'), to('\xBC', '&frac14;'), to('\xBD', '&frac12'), to('\xBD', '&frac12;'), to('\xBE', '&frac34'), to('\xBE', '&frac34;'), to('\xBF', '&iquest'), to('\xBF', '&iquest;'), to('\xC0', '&Agrave'), to('\xC0', '&Agrave;'), to('\xC1', '&Aacute'), to('\xC1', '&Aacute;'), to('\xC2', '&Acirc'), to('\xC2', '&Acirc;'), to('\xC3', '&Atilde'), to('\xC3', '&Atilde;'), to('\xC4', '&Auml'), to('\xC4', '&Auml;'), to('\xC5', '&Aring'), to('\xC5', '&Aring;'), to('\xC6', '&AElig'), to('\xC6', '&AElig;'), to('\xC7', '&Ccedil'), to('\xC7', '&Ccedil;'), to('\xC8', '&Egrave'), to('\xC8', '&Egrave;'), to('\xC9', '&Eacute'), to('\xC9', '&Eacute;'), to('\xCA', '&Ecirc'), to('\xCA', '&Ecirc;'), to('\xCB', '&Euml'), to('\xCB', '&Euml;'), to('\xCC', '&Igrave'), to('\xCC', '&Igrave;'), to('\xCD', '&Iacute'), to('\xCD', '&Iacute;'), to('\xCE', '&Icirc'), to('\xCE', '&Icirc;'), to('\xCF', '&Iuml'), to('\xCF', '&Iuml;'), to('\xD0', '&ETH'), to('\xD0', '&ETH;'), to('\xD1', '&Ntilde'), to('\xD1', '&Ntilde;'), to('\xD2', '&Ograve'), to('\xD2', '&Ograve;'), to('\xD3', '&Oacute'), to('\xD3', '&Oacute;'), to('\xD4', '&Ocirc'), to('\xD4', '&Ocirc;'), to('\xD5', '&Otilde'), to('\xD5', '&Otilde;'), to('\xD6', '&Ouml'), to('\xD6', '&Ouml;'), to('\xD7', '&times'), to('\xD7', '&times;'), to('\xD8', '&Oslash'), to('\xD8', '&Oslash;'), to('\xD9', '&Ugrave'), to('\xD9', '&Ugrave;'), to('\xDA', '&Uacute'), to('\xDA', '&Uacute;'), to('\xDB', '&Ucirc'), to('\xDB', '&Ucirc;'), to('\xDC', '&Uuml'), to('\xDC', '&Uuml;'), to('\xDD', '&Yacute'), to('\xDD', '&Yacute;'), to('\xDE', '&THORN'), to('\xDE', '&THORN;'), to('\xDF', '&szlig'), to('\xDF', '&szlig;'), to('\xE0', '&agrave'), to('\xE0', '&agrave;'), to('\xE1', '&aacute'), to('\xE1', '&aacute;'), to('\xE2', '&acirc'), to('\xE2', '&acirc;'), to('\xE3', '&atilde'), to('\xE3', '&atilde;'), to('\xE4', '&auml'), to('\xE4', '&auml;'), to('\xE5', '&aring'), to('\xE5', '&aring;'), to('\xE6', '&aelig'), to('\xE6', '&aelig;'), to('\xE7', '&ccedil'), to('\xE7', '&ccedil;'), to('\xE8', '&egrave'), to('\xE8', '&egrave;'), to('\xE9', '&eacute'), to('\xE9', '&eacute;'), to('\xEA', '&ecirc'), to('\xEA', '&ecirc;'), to('\xEB', '&euml'), to('\xEB', '&euml;'), to('\xEC', '&igrave'), to('\xEC', '&igrave;'), to('\xED', '&iacute'), to('\xED', '&iacute;'), to('\xEE', '&icirc'), to('\xEE', '&icirc;'), to('\xEF', '&iuml'), to('\xEF', '&iuml;'), to('\xF0', '&eth'), to('\xF0', '&eth;'), to('\xF1', '&ntilde'), to('\xF1', '&ntilde;'), to('\xF2', '&ograve'), to('\xF2', '&ograve;'), to('\xF3', '&oacute'), to('\xF3', '&oacute;'), to('\xF4', '&ocirc'), to('\xF4', '&ocirc;'), to('\xF5', '&otilde'), to('\xF5', '&otilde;'), to('\xF6', '&ouml'), to('\xF6', '&ouml;'), to('\xF7', '&divide'), to('\xF7', '&divide;'), to('\xF8', '&oslash'), to('\xF8', '&oslash;'), to('\xF9', '&ugrave'), to('\xF9', '&ugrave;'), to('\xFA', '&uacute'), to('\xFA', '&uacute;'), to('\xFB', '&ucirc'), to('\xFB', '&ucirc;'), to('\xFC', '&uuml'), to('\xFC', '&uuml;'), to('\xFD', '&yacute'), to('\xFD', '&yacute;'), to('\xFE', '&thorn'), to('\xFE', '&thorn;'), to('\xFF', '&yuml'), to('\xFF', '&yuml;'), to('"', '&quot'), to('"', '&quot;'), to('&', '&amp'), to('&', '&amp;'), to('<', '&lt'), to('<', '&lt;'), to('>', '&gt'), to('>', '&gt;'), to('\u0152', '&OElig;'), to('\u0153', '&oelig;'), to('\u0160', '&Scaron;'), to('\u0161', '&scaron;'), to('\u0178', '&Yuml;'), to('\u02C6', '&circ;'), to('\u02DC', '&tilde;'), to('\u2002', '&ensp;'), to('\u2003', '&emsp;'), to('\u2009', '&thinsp;'), to('\u200C', '&zwnj;'), to('\u200D', '&zwj;'), to('\u200E', '&lrm;'), to('\u200F', '&rlm;'), to('\u2013', '&ndash;'), to('\u2014', '&mdash;'), to('\u2018', '&lsquo;'), to('\u2019', '&rsquo;'), to('\u201A', '&sbquo;'), to('\u201C', '&ldquo;'), to('\u201D', '&rdquo;'), to('\u201E', '&bdquo;'), to('\u2020', '&dagger;'), to('\u2021', '&Dagger;'), to('\u2030', '&permil;'), to('\u2039', '&lsaquo;'), to('\u203A', '&rsaquo;'), to('\u20AC', '&euro;'), to('\u0192', '&fnof;'), to('\u0391', '&Alpha;'), to('\u0392', '&Beta;'), to('\u0393', '&Gamma;'), to('\u0394', '&Delta;'), to('\u0395', '&Epsilon;'), to('\u0396', '&Zeta;'), to('\u0397', '&Eta;'), to('\u0398', '&Theta;'), to('\u0399', '&Iota;'), to('\u039A', '&Kappa;'), to('\u039B', '&Lambda;'), to('\u039C', '&Mu;'), to('\u039D', '&Nu;'), to('\u039E', '&Xi;'), to('\u039F', '&Omicron;'), to('\u03A0', '&Pi;'), to('\u03A1', '&Rho;'), to('\u03A3', '&Sigma;'), to('\u03A4', '&Tau;'), to('\u03A5', '&Upsilon;'), to('\u03A6', '&Phi;'), to('\u03A7', '&Chi;'), to('\u03A8', '&Psi;'), to('\u03A9', '&Omega;'), to('\u03B1', '&alpha;'), to('\u03B2', '&beta;'), to('\u03B3', '&gamma;'), to('\u03B4', '&delta;'), to('\u03B5', '&epsilon;'), to('\u03B6', '&zeta;'), to('\u03B7', '&eta;'), to('\u03B8', '&theta;'), to('\u03B9', '&iota;'), to('\u03BA', '&kappa;'), to('\u03BB', '&lambda;'), to('\u03BC', '&mu;'), to('\u03BD', '&nu;'), to('\u03BE', '&xi;'), to('\u03BF', '&omicron;'), to('\u03C0', '&pi;'), to('\u03C1', '&rho;'), to('\u03C2', '&sigmaf;'), to('\u03C3', '&sigma;'), to('\u03C4', '&tau;'), to('\u03C5', '&upsilon;'), to('\u03C6', '&phi;'), to('\u03C7', '&chi;'), to('\u03C8', '&psi;'), to('\u03C9', '&omega;'), to('\u03D1', '&thetasym;'), to('\u03D2', '&upsih;'), to('\u03D6', '&piv;'), to('\u2022', '&bull;'), to('\u2026', '&hellip;'), to('\u2032', '&prime;'), to('\u2033', '&Prime;'), to('\u203E', '&oline;'), to('\u2044', '&frasl;'), to('\u2118', '&weierp;'), to('\u2111', '&image;'), to('\u211C', '&real;'), to('\u2122', '&trade;'), to('\u2135', '&alefsym;'), to('\u2190', '&larr;'), to('\u2191', '&uarr;'), to('\u2192', '&rarr;'), to('\u2193', '&darr;'), to('\u2194', '&harr;'), to('\u21B5', '&crarr;'), to('\u21D0', '&lArr;'), to('\u21D1', '&uArr;'), to('\u21D2', '&rArr;'), to('\u21D3', '&dArr;'), to('\u21D4', '&hArr;'), to('\u2200', '&forall;'), to('\u2202', '&part;'), to('\u2203', '&exist;'), to('\u2205', '&empty;'), to('\u2207', '&nabla;'), to('\u2208', '&isin;'), to('\u2209', '&notin;'), to('\u220B', '&ni;'), to('\u220F', '&prod;'), to('\u2211', '&sum;'), to('\u2212', '&minus;'), to('\u2217', '&lowast;'), to('\u221A', '&radic;'), to('\u221D', '&prop;'), to('\u221E', '&infin;'), to('\u2220', '&ang;'), to('\u2227', '&and;'), to('\u2228', '&or;'), to('\u2229', '&cap;'), to('\u222A', '&cup;'), to('\u222B', '&int;'), to('\u2234', '&there4;'), to('\u223C', '&sim;'), to('\u2245', '&cong;'), to('\u2248', '&asymp;'), to('\u2260', '&ne;'), to('\u2261', '&equiv;'), to('\u2264', '&le;'), to('\u2265', '&ge;'), to('\u2282', '&sub;'), to('\u2283', '&sup;'), to('\u2284', '&nsub;'), to('\u2286', '&sube;'), to('\u2287', '&supe;'), to('\u2295', '&oplus;'), to('\u2297', '&otimes;'), to('\u22A5', '&perp;'), to('\u22C5', '&sdot;'), to('\u2308', '&lceil;'), to('\u2309', '&rceil;'), to('\u230A', '&lfloor;'), to('\u230B', '&rfloor;'), to('\u2329', '&lang;'), to('\u232A', '&rang;'), to('\u25CA', '&loz;'), to('\u2660', '&spades;'), to('\u2663', '&clubs;'), to('\u2665', '&hearts;'), to('\u2666', '&diams;')]);
    this.lcr_1 = invert(this, this.kcr_1);
    var tmp = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var encodeMap = ArrayList.k2();
    encodeMap.j2(to('\xC6', '&AElig'));
    encodeMap.j2(to('\xC6', '&AElig;'));
    encodeMap.j2(to('&', '&AMP'));
    encodeMap.j2(to('&', '&AMP;'));
    encodeMap.j2(to('\xC1', '&Aacute'));
    encodeMap.j2(to('\xC1', '&Aacute;'));
    encodeMap.j2(to('\u0102', '&Abreve;'));
    encodeMap.j2(to('\xC2', '&Acirc'));
    encodeMap.j2(to('\xC2', '&Acirc;'));
    encodeMap.j2(to('\u0410', '&Acy;'));
    encodeMap.j2(to('\uD835\uDD04', '&Afr;'));
    encodeMap.j2(to('\xC0', '&Agrave'));
    encodeMap.j2(to('\xC0', '&Agrave;'));
    encodeMap.j2(to('\u0391', '&Alpha;'));
    encodeMap.j2(to('\u0100', '&Amacr;'));
    encodeMap.j2(to('\u2A53', '&And;'));
    encodeMap.j2(to('\u0104', '&Aogon;'));
    encodeMap.j2(to('\uD835\uDD38', '&Aopf;'));
    encodeMap.j2(to('\u2061', '&ApplyFunction;'));
    encodeMap.j2(to('\xC5', '&Aring'));
    encodeMap.j2(to('\xC5', '&Aring;'));
    encodeMap.j2(to('\uD835\uDC9C', '&Ascr;'));
    encodeMap.j2(to('\u2254', '&Assign;'));
    encodeMap.j2(to('\xC3', '&Atilde'));
    encodeMap.j2(to('\xC3', '&Atilde;'));
    encodeMap.j2(to('\xC4', '&Auml'));
    encodeMap.j2(to('\xC4', '&Auml;'));
    encodeMap.j2(to('\u2216', '&Backslash;'));
    encodeMap.j2(to('\u2AE7', '&Barv;'));
    encodeMap.j2(to('\u2306', '&Barwed;'));
    encodeMap.j2(to('\u0411', '&Bcy;'));
    encodeMap.j2(to('\u2235', '&Because;'));
    encodeMap.j2(to('\u212C', '&Bernoullis;'));
    encodeMap.j2(to('\u0392', '&Beta;'));
    encodeMap.j2(to('\uD835\uDD05', '&Bfr;'));
    encodeMap.j2(to('\uD835\uDD39', '&Bopf;'));
    encodeMap.j2(to('\u02D8', '&Breve;'));
    encodeMap.j2(to('\u212C', '&Bscr;'));
    encodeMap.j2(to('\u224E', '&Bumpeq;'));
    encodeMap.j2(to('\u0427', '&CHcy;'));
    encodeMap.j2(to('\xA9', '&COPY'));
    encodeMap.j2(to('\xA9', '&COPY;'));
    encodeMap.j2(to('\u0106', '&Cacute;'));
    encodeMap.j2(to('\u22D2', '&Cap;'));
    encodeMap.j2(to('\u2145', '&CapitalDifferentialD;'));
    encodeMap.j2(to('\u212D', '&Cayleys;'));
    encodeMap.j2(to('\u010C', '&Ccaron;'));
    encodeMap.j2(to('\xC7', '&Ccedil'));
    encodeMap.j2(to('\xC7', '&Ccedil;'));
    encodeMap.j2(to('\u0108', '&Ccirc;'));
    encodeMap.j2(to('\u2230', '&Cconint;'));
    encodeMap.j2(to('\u010A', '&Cdot;'));
    encodeMap.j2(to('\xB8', '&Cedilla;'));
    encodeMap.j2(to('\xB7', '&CenterDot;'));
    encodeMap.j2(to('\u212D', '&Cfr;'));
    encodeMap.j2(to('\u03A7', '&Chi;'));
    encodeMap.j2(to('\u2299', '&CircleDot;'));
    encodeMap.j2(to('\u2296', '&CircleMinus;'));
    encodeMap.j2(to('\u2295', '&CirclePlus;'));
    encodeMap.j2(to('\u2297', '&CircleTimes;'));
    encodeMap.j2(to('\u2232', '&ClockwiseContourIntegral;'));
    encodeMap.j2(to('\u201D', '&CloseCurlyDoubleQuote;'));
    encodeMap.j2(to('\u2019', '&CloseCurlyQuote;'));
    encodeMap.j2(to('\u2237', '&Colon;'));
    encodeMap.j2(to('\u2A74', '&Colone;'));
    encodeMap.j2(to('\u2261', '&Congruent;'));
    encodeMap.j2(to('\u222F', '&Conint;'));
    encodeMap.j2(to('\u222E', '&ContourIntegral;'));
    encodeMap.j2(to('\u2102', '&Copf;'));
    encodeMap.j2(to('\u2210', '&Coproduct;'));
    encodeMap.j2(to('\u2233', '&CounterClockwiseContourIntegral;'));
    encodeMap.j2(to('\u2A2F', '&Cross;'));
    encodeMap.j2(to('\uD835\uDC9E', '&Cscr;'));
    encodeMap.j2(to('\u22D3', '&Cup;'));
    encodeMap.j2(to('\u224D', '&CupCap;'));
    encodeMap.j2(to('\u2145', '&DD;'));
    encodeMap.j2(to('\u2911', '&DDotrahd;'));
    encodeMap.j2(to('\u0402', '&DJcy;'));
    encodeMap.j2(to('\u0405', '&DScy;'));
    encodeMap.j2(to('\u040F', '&DZcy;'));
    encodeMap.j2(to('\u2021', '&Dagger;'));
    encodeMap.j2(to('\u21A1', '&Darr;'));
    encodeMap.j2(to('\u2AE4', '&Dashv;'));
    encodeMap.j2(to('\u010E', '&Dcaron;'));
    encodeMap.j2(to('\u0414', '&Dcy;'));
    encodeMap.j2(to('\u2207', '&Del;'));
    encodeMap.j2(to('\u0394', '&Delta;'));
    encodeMap.j2(to('\uD835\uDD07', '&Dfr;'));
    encodeMap.j2(to('\xB4', '&DiacriticalAcute;'));
    encodeMap.j2(to('\u02D9', '&DiacriticalDot;'));
    encodeMap.j2(to('\u02DD', '&DiacriticalDoubleAcute;'));
    encodeMap.j2(to('`', '&DiacriticalGrave;'));
    encodeMap.j2(to('\u02DC', '&DiacriticalTilde;'));
    encodeMap.j2(to('\u22C4', '&Diamond;'));
    encodeMap.j2(to('\u2146', '&DifferentialD;'));
    encodeMap.j2(to('\uD835\uDD3B', '&Dopf;'));
    encodeMap.j2(to('\xA8', '&Dot;'));
    encodeMap.j2(to('\u20DC', '&DotDot;'));
    encodeMap.j2(to('\u2250', '&DotEqual;'));
    encodeMap.j2(to('\u222F', '&DoubleContourIntegral;'));
    encodeMap.j2(to('\xA8', '&DoubleDot;'));
    encodeMap.j2(to('\u21D3', '&DoubleDownArrow;'));
    encodeMap.j2(to('\u21D0', '&DoubleLeftArrow;'));
    encodeMap.j2(to('\u21D4', '&DoubleLeftRightArrow;'));
    encodeMap.j2(to('\u2AE4', '&DoubleLeftTee;'));
    encodeMap.j2(to('\u27F8', '&DoubleLongLeftArrow;'));
    encodeMap.j2(to('\u27FA', '&DoubleLongLeftRightArrow;'));
    encodeMap.j2(to('\u27F9', '&DoubleLongRightArrow;'));
    encodeMap.j2(to('\u21D2', '&DoubleRightArrow;'));
    encodeMap.j2(to('\u22A8', '&DoubleRightTee;'));
    encodeMap.j2(to('\u21D1', '&DoubleUpArrow;'));
    encodeMap.j2(to('\u21D5', '&DoubleUpDownArrow;'));
    encodeMap.j2(to('\u2225', '&DoubleVerticalBar;'));
    encodeMap.j2(to('\u2193', '&DownArrow;'));
    encodeMap.j2(to('\u2913', '&DownArrowBar;'));
    encodeMap.j2(to('\u21F5', '&DownArrowUpArrow;'));
    encodeMap.j2(to('\u0311', '&DownBreve;'));
    encodeMap.j2(to('\u2950', '&DownLeftRightVector;'));
    encodeMap.j2(to('\u295E', '&DownLeftTeeVector;'));
    encodeMap.j2(to('\u21BD', '&DownLeftVector;'));
    encodeMap.j2(to('\u2956', '&DownLeftVectorBar;'));
    encodeMap.j2(to('\u295F', '&DownRightTeeVector;'));
    encodeMap.j2(to('\u21C1', '&DownRightVector;'));
    encodeMap.j2(to('\u2957', '&DownRightVectorBar;'));
    encodeMap.j2(to('\u22A4', '&DownTee;'));
    encodeMap.j2(to('\u21A7', '&DownTeeArrow;'));
    encodeMap.j2(to('\u21D3', '&Downarrow;'));
    encodeMap.j2(to('\uD835\uDC9F', '&Dscr;'));
    encodeMap.j2(to('\u0110', '&Dstrok;'));
    encodeMap.j2(to('\u014A', '&ENG;'));
    encodeMap.j2(to('\xD0', '&ETH'));
    encodeMap.j2(to('\xD0', '&ETH;'));
    encodeMap.j2(to('\xC9', '&Eacute'));
    encodeMap.j2(to('\xC9', '&Eacute;'));
    encodeMap.j2(to('\u011A', '&Ecaron;'));
    encodeMap.j2(to('\xCA', '&Ecirc'));
    encodeMap.j2(to('\xCA', '&Ecirc;'));
    encodeMap.j2(to('\u042D', '&Ecy;'));
    encodeMap.j2(to('\u0116', '&Edot;'));
    encodeMap.j2(to('\uD835\uDD08', '&Efr;'));
    encodeMap.j2(to('\xC8', '&Egrave'));
    encodeMap.j2(to('\xC8', '&Egrave;'));
    encodeMap.j2(to('\u2208', '&Element;'));
    encodeMap.j2(to('\u0112', '&Emacr;'));
    encodeMap.j2(to('\u25FB', '&EmptySmallSquare;'));
    encodeMap.j2(to('\u25AB', '&EmptyVerySmallSquare;'));
    encodeMap.j2(to('\u0118', '&Eogon;'));
    encodeMap.j2(to('\uD835\uDD3C', '&Eopf;'));
    encodeMap.j2(to('\u0395', '&Epsilon;'));
    encodeMap.j2(to('\u2A75', '&Equal;'));
    encodeMap.j2(to('\u2242', '&EqualTilde;'));
    encodeMap.j2(to('\u21CC', '&Equilibrium;'));
    encodeMap.j2(to('\u2130', '&Escr;'));
    encodeMap.j2(to('\u2A73', '&Esim;'));
    encodeMap.j2(to('\u0397', '&Eta;'));
    encodeMap.j2(to('\xCB', '&Euml'));
    encodeMap.j2(to('\xCB', '&Euml;'));
    encodeMap.j2(to('\u2203', '&Exists;'));
    encodeMap.j2(to('\u2147', '&ExponentialE;'));
    encodeMap.j2(to('\u0424', '&Fcy;'));
    encodeMap.j2(to('\uD835\uDD09', '&Ffr;'));
    encodeMap.j2(to('\u25FC', '&FilledSmallSquare;'));
    encodeMap.j2(to('\u25AA', '&FilledVerySmallSquare;'));
    encodeMap.j2(to('\uD835\uDD3D', '&Fopf;'));
    encodeMap.j2(to('\u2200', '&ForAll;'));
    encodeMap.j2(to('\u2131', '&Fouriertrf;'));
    encodeMap.j2(to('\u2131', '&Fscr;'));
    encodeMap.j2(to('\u0403', '&GJcy;'));
    encodeMap.j2(to('>', '&GT'));
    encodeMap.j2(to('>', '&GT;'));
    encodeMap.j2(to('\u0393', '&Gamma;'));
    encodeMap.j2(to('\u03DC', '&Gammad;'));
    encodeMap.j2(to('\u011E', '&Gbreve;'));
    encodeMap.j2(to('\u0122', '&Gcedil;'));
    encodeMap.j2(to('\u011C', '&Gcirc;'));
    encodeMap.j2(to('\u0413', '&Gcy;'));
    encodeMap.j2(to('\u0120', '&Gdot;'));
    encodeMap.j2(to('\uD835\uDD0A', '&Gfr;'));
    encodeMap.j2(to('\u22D9', '&Gg;'));
    encodeMap.j2(to('\uD835\uDD3E', '&Gopf;'));
    encodeMap.j2(to('\u2265', '&GreaterEqual;'));
    encodeMap.j2(to('\u22DB', '&GreaterEqualLess;'));
    encodeMap.j2(to('\u2267', '&GreaterFullEqual;'));
    encodeMap.j2(to('\u2AA2', '&GreaterGreater;'));
    encodeMap.j2(to('\u2277', '&GreaterLess;'));
    encodeMap.j2(to('\u2A7E', '&GreaterSlantEqual;'));
    encodeMap.j2(to('\u2273', '&GreaterTilde;'));
    encodeMap.j2(to('\uD835\uDCA2', '&Gscr;'));
    encodeMap.j2(to('\u226B', '&Gt;'));
    encodeMap.j2(to('\u042A', '&HARDcy;'));
    encodeMap.j2(to('\u02C7', '&Hacek;'));
    encodeMap.j2(to('^', '&Hat;'));
    encodeMap.j2(to('\u0124', '&Hcirc;'));
    encodeMap.j2(to('\u210C', '&Hfr;'));
    encodeMap.j2(to('\u210B', '&HilbertSpace;'));
    encodeMap.j2(to('\u210D', '&Hopf;'));
    encodeMap.j2(to('\u2500', '&HorizontalLine;'));
    encodeMap.j2(to('\u210B', '&Hscr;'));
    encodeMap.j2(to('\u0126', '&Hstrok;'));
    encodeMap.j2(to('\u224E', '&HumpDownHump;'));
    encodeMap.j2(to('\u224F', '&HumpEqual;'));
    encodeMap.j2(to('\u0415', '&IEcy;'));
    encodeMap.j2(to('\u0132', '&IJlig;'));
    encodeMap.j2(to('\u0401', '&IOcy;'));
    encodeMap.j2(to('\xCD', '&Iacute'));
    encodeMap.j2(to('\xCD', '&Iacute;'));
    encodeMap.j2(to('\xCE', '&Icirc'));
    encodeMap.j2(to('\xCE', '&Icirc;'));
    encodeMap.j2(to('\u0418', '&Icy;'));
    encodeMap.j2(to('\u0130', '&Idot;'));
    encodeMap.j2(to('\u2111', '&Ifr;'));
    encodeMap.j2(to('\xCC', '&Igrave'));
    encodeMap.j2(to('\xCC', '&Igrave;'));
    encodeMap.j2(to('\u2111', '&Im;'));
    encodeMap.j2(to('\u012A', '&Imacr;'));
    encodeMap.j2(to('\u2148', '&ImaginaryI;'));
    encodeMap.j2(to('\u21D2', '&Implies;'));
    encodeMap.j2(to('\u222C', '&Int;'));
    encodeMap.j2(to('\u222B', '&Integral;'));
    encodeMap.j2(to('\u22C2', '&Intersection;'));
    encodeMap.j2(to('\u2063', '&InvisibleComma;'));
    encodeMap.j2(to('\u2062', '&InvisibleTimes;'));
    encodeMap.j2(to('\u012E', '&Iogon;'));
    encodeMap.j2(to('\uD835\uDD40', '&Iopf;'));
    encodeMap.j2(to('\u0399', '&Iota;'));
    encodeMap.j2(to('\u2110', '&Iscr;'));
    encodeMap.j2(to('\u0128', '&Itilde;'));
    encodeMap.j2(to('\u0406', '&Iukcy;'));
    encodeMap.j2(to('\xCF', '&Iuml'));
    encodeMap.j2(to('\xCF', '&Iuml;'));
    encodeMap.j2(to('\u0134', '&Jcirc;'));
    encodeMap.j2(to('\u0419', '&Jcy;'));
    encodeMap.j2(to('\uD835\uDD0D', '&Jfr;'));
    encodeMap.j2(to('\uD835\uDD41', '&Jopf;'));
    encodeMap.j2(to('\uD835\uDCA5', '&Jscr;'));
    encodeMap.j2(to('\u0408', '&Jsercy;'));
    encodeMap.j2(to('\u0404', '&Jukcy;'));
    encodeMap.j2(to('\u0425', '&KHcy;'));
    encodeMap.j2(to('\u040C', '&KJcy;'));
    encodeMap.j2(to('\u039A', '&Kappa;'));
    encodeMap.j2(to('\u0136', '&Kcedil;'));
    encodeMap.j2(to('\u041A', '&Kcy;'));
    encodeMap.j2(to('\uD835\uDD0E', '&Kfr;'));
    encodeMap.j2(to('\uD835\uDD42', '&Kopf;'));
    encodeMap.j2(to('\uD835\uDCA6', '&Kscr;'));
    encodeMap.j2(to('\u0409', '&LJcy;'));
    encodeMap.j2(to('<', '&LT'));
    encodeMap.j2(to('<', '&LT;'));
    encodeMap.j2(to('\u0139', '&Lacute;'));
    encodeMap.j2(to('\u039B', '&Lambda;'));
    encodeMap.j2(to('\u27EA', '&Lang;'));
    encodeMap.j2(to('\u2112', '&Laplacetrf;'));
    encodeMap.j2(to('\u219E', '&Larr;'));
    encodeMap.j2(to('\u013D', '&Lcaron;'));
    encodeMap.j2(to('\u013B', '&Lcedil;'));
    encodeMap.j2(to('\u041B', '&Lcy;'));
    encodeMap.j2(to('\u27E8', '&LeftAngleBracket;'));
    encodeMap.j2(to('\u2190', '&LeftArrow;'));
    encodeMap.j2(to('\u21E4', '&LeftArrowBar;'));
    encodeMap.j2(to('\u21C6', '&LeftArrowRightArrow;'));
    encodeMap.j2(to('\u2308', '&LeftCeiling;'));
    encodeMap.j2(to('\u27E6', '&LeftDoubleBracket;'));
    encodeMap.j2(to('\u2961', '&LeftDownTeeVector;'));
    encodeMap.j2(to('\u21C3', '&LeftDownVector;'));
    encodeMap.j2(to('\u2959', '&LeftDownVectorBar;'));
    encodeMap.j2(to('\u230A', '&LeftFloor;'));
    encodeMap.j2(to('\u2194', '&LeftRightArrow;'));
    encodeMap.j2(to('\u294E', '&LeftRightVector;'));
    encodeMap.j2(to('\u22A3', '&LeftTee;'));
    encodeMap.j2(to('\u21A4', '&LeftTeeArrow;'));
    encodeMap.j2(to('\u295A', '&LeftTeeVector;'));
    encodeMap.j2(to('\u22B2', '&LeftTriangle;'));
    encodeMap.j2(to('\u29CF', '&LeftTriangleBar;'));
    encodeMap.j2(to('\u22B4', '&LeftTriangleEqual;'));
    encodeMap.j2(to('\u2951', '&LeftUpDownVector;'));
    encodeMap.j2(to('\u2960', '&LeftUpTeeVector;'));
    encodeMap.j2(to('\u21BF', '&LeftUpVector;'));
    encodeMap.j2(to('\u2958', '&LeftUpVectorBar;'));
    encodeMap.j2(to('\u21BC', '&LeftVector;'));
    encodeMap.j2(to('\u2952', '&LeftVectorBar;'));
    encodeMap.j2(to('\u21D0', '&Leftarrow;'));
    encodeMap.j2(to('\u21D4', '&Leftrightarrow;'));
    encodeMap.j2(to('\u22DA', '&LessEqualGreater;'));
    encodeMap.j2(to('\u2266', '&LessFullEqual;'));
    encodeMap.j2(to('\u2276', '&LessGreater;'));
    encodeMap.j2(to('\u2AA1', '&LessLess;'));
    encodeMap.j2(to('\u2A7D', '&LessSlantEqual;'));
    encodeMap.j2(to('\u2272', '&LessTilde;'));
    encodeMap.j2(to('\uD835\uDD0F', '&Lfr;'));
    encodeMap.j2(to('\u22D8', '&Ll;'));
    encodeMap.j2(to('\u21DA', '&Lleftarrow;'));
    encodeMap.j2(to('\u013F', '&Lmidot;'));
    encodeMap.j2(to('\u27F5', '&LongLeftArrow;'));
    encodeMap.j2(to('\u27F7', '&LongLeftRightArrow;'));
    encodeMap.j2(to('\u27F6', '&LongRightArrow;'));
    encodeMap.j2(to('\u27F8', '&Longleftarrow;'));
    encodeMap.j2(to('\u27FA', '&Longleftrightarrow;'));
    encodeMap.j2(to('\u27F9', '&Longrightarrow;'));
    encodeMap.j2(to('\uD835\uDD43', '&Lopf;'));
    encodeMap.j2(to('\u2199', '&LowerLeftArrow;'));
    encodeMap.j2(to('\u2198', '&LowerRightArrow;'));
    encodeMap.j2(to('\u2112', '&Lscr;'));
    encodeMap.j2(to('\u21B0', '&Lsh;'));
    encodeMap.j2(to('\u0141', '&Lstrok;'));
    encodeMap.j2(to('\u226A', '&Lt;'));
    encodeMap.j2(to('\u2905', '&Map;'));
    encodeMap.j2(to('\u041C', '&Mcy;'));
    encodeMap.j2(to('\u205F', '&MediumSpace;'));
    encodeMap.j2(to('\u2133', '&Mellintrf;'));
    encodeMap.j2(to('\uD835\uDD10', '&Mfr;'));
    encodeMap.j2(to('\u2213', '&MinusPlus;'));
    encodeMap.j2(to('\uD835\uDD44', '&Mopf;'));
    encodeMap.j2(to('\u2133', '&Mscr;'));
    encodeMap.j2(to('\u039C', '&Mu;'));
    encodeMap.j2(to('\u040A', '&NJcy;'));
    encodeMap.j2(to('\u0143', '&Nacute;'));
    encodeMap.j2(to('\u0147', '&Ncaron;'));
    encodeMap.j2(to('\u0145', '&Ncedil;'));
    encodeMap.j2(to('\u041D', '&Ncy;'));
    encodeMap.j2(to('\u200B', '&NegativeMediumSpace;'));
    encodeMap.j2(to('\u200B', '&NegativeThickSpace;'));
    encodeMap.j2(to('\u200B', '&NegativeThinSpace;'));
    encodeMap.j2(to('\u200B', '&NegativeVeryThinSpace;'));
    encodeMap.j2(to('\u226B', '&NestedGreaterGreater;'));
    encodeMap.j2(to('\u226A', '&NestedLessLess;'));
    encodeMap.j2(to('\n', '&NewLine;'));
    encodeMap.j2(to('\uD835\uDD11', '&Nfr;'));
    encodeMap.j2(to('\u2060', '&NoBreak;'));
    encodeMap.j2(to('\xA0', '&NonBreakingSpace;'));
    encodeMap.j2(to('\u2115', '&Nopf;'));
    encodeMap.j2(to('\u2AEC', '&Not;'));
    encodeMap.j2(to('\u2262', '&NotCongruent;'));
    encodeMap.j2(to('\u226D', '&NotCupCap;'));
    encodeMap.j2(to('\u2226', '&NotDoubleVerticalBar;'));
    encodeMap.j2(to('\u2209', '&NotElement;'));
    encodeMap.j2(to('\u2260', '&NotEqual;'));
    encodeMap.j2(to('\u2242\u0338', '&NotEqualTilde;'));
    encodeMap.j2(to('\u2204', '&NotExists;'));
    encodeMap.j2(to('\u226F', '&NotGreater;'));
    encodeMap.j2(to('\u2271', '&NotGreaterEqual;'));
    encodeMap.j2(to('\u2267\u0338', '&NotGreaterFullEqual;'));
    encodeMap.j2(to('\u226B\u0338', '&NotGreaterGreater;'));
    encodeMap.j2(to('\u2279', '&NotGreaterLess;'));
    encodeMap.j2(to('\u2A7E\u0338', '&NotGreaterSlantEqual;'));
    encodeMap.j2(to('\u2275', '&NotGreaterTilde;'));
    encodeMap.j2(to('\u224E\u0338', '&NotHumpDownHump;'));
    encodeMap.j2(to('\u224F\u0338', '&NotHumpEqual;'));
    encodeMap.j2(to('\u22EA', '&NotLeftTriangle;'));
    encodeMap.j2(to('\u29CF\u0338', '&NotLeftTriangleBar;'));
    encodeMap.j2(to('\u22EC', '&NotLeftTriangleEqual;'));
    encodeMap.j2(to('\u226E', '&NotLess;'));
    encodeMap.j2(to('\u2270', '&NotLessEqual;'));
    encodeMap.j2(to('\u2278', '&NotLessGreater;'));
    encodeMap.j2(to('\u226A\u0338', '&NotLessLess;'));
    encodeMap.j2(to('\u2A7D\u0338', '&NotLessSlantEqual;'));
    encodeMap.j2(to('\u2274', '&NotLessTilde;'));
    encodeMap.j2(to('\u2AA2\u0338', '&NotNestedGreaterGreater;'));
    encodeMap.j2(to('\u2AA1\u0338', '&NotNestedLessLess;'));
    encodeMap.j2(to('\u2280', '&NotPrecedes;'));
    encodeMap.j2(to('\u2AAF\u0338', '&NotPrecedesEqual;'));
    encodeMap.j2(to('\u22E0', '&NotPrecedesSlantEqual;'));
    encodeMap.j2(to('\u220C', '&NotReverseElement;'));
    encodeMap.j2(to('\u22EB', '&NotRightTriangle;'));
    encodeMap.j2(to('\u29D0\u0338', '&NotRightTriangleBar;'));
    encodeMap.j2(to('\u22ED', '&NotRightTriangleEqual;'));
    encodeMap.j2(to('\u228F\u0338', '&NotSquareSubset;'));
    encodeMap.j2(to('\u22E2', '&NotSquareSubsetEqual;'));
    encodeMap.j2(to('\u2290\u0338', '&NotSquareSuperset;'));
    encodeMap.j2(to('\u22E3', '&NotSquareSupersetEqual;'));
    encodeMap.j2(to('\u2282\u20D2', '&NotSubset;'));
    encodeMap.j2(to('\u2288', '&NotSubsetEqual;'));
    encodeMap.j2(to('\u2281', '&NotSucceeds;'));
    encodeMap.j2(to('\u2AB0\u0338', '&NotSucceedsEqual;'));
    encodeMap.j2(to('\u22E1', '&NotSucceedsSlantEqual;'));
    encodeMap.j2(to('\u227F\u0338', '&NotSucceedsTilde;'));
    encodeMap.j2(to('\u2283\u20D2', '&NotSuperset;'));
    encodeMap.j2(to('\u2289', '&NotSupersetEqual;'));
    encodeMap.j2(to('\u2241', '&NotTilde;'));
    encodeMap.j2(to('\u2244', '&NotTildeEqual;'));
    encodeMap.j2(to('\u2247', '&NotTildeFullEqual;'));
    encodeMap.j2(to('\u2249', '&NotTildeTilde;'));
    encodeMap.j2(to('\u2224', '&NotVerticalBar;'));
    encodeMap.j2(to('\uD835\uDCA9', '&Nscr;'));
    encodeMap.j2(to('\xD1', '&Ntilde'));
    encodeMap.j2(to('\xD1', '&Ntilde;'));
    encodeMap.j2(to('\u039D', '&Nu;'));
    encodeMap.j2(to('\u0152', '&OElig;'));
    encodeMap.j2(to('\xD3', '&Oacute'));
    encodeMap.j2(to('\xD3', '&Oacute;'));
    encodeMap.j2(to('\xD4', '&Ocirc'));
    encodeMap.j2(to('\xD4', '&Ocirc;'));
    encodeMap.j2(to('\u041E', '&Ocy;'));
    encodeMap.j2(to('\u0150', '&Odblac;'));
    encodeMap.j2(to('\uD835\uDD12', '&Ofr;'));
    encodeMap.j2(to('\xD2', '&Ograve'));
    encodeMap.j2(to('\xD2', '&Ograve;'));
    encodeMap.j2(to('\u014C', '&Omacr;'));
    encodeMap.j2(to('\u03A9', '&Omega;'));
    encodeMap.j2(to('\u039F', '&Omicron;'));
    encodeMap.j2(to('\uD835\uDD46', '&Oopf;'));
    encodeMap.j2(to('\u201C', '&OpenCurlyDoubleQuote;'));
    encodeMap.j2(to('\u2018', '&OpenCurlyQuote;'));
    encodeMap.j2(to('\u2A54', '&Or;'));
    encodeMap.j2(to('\uD835\uDCAA', '&Oscr;'));
    encodeMap.j2(to('\xD8', '&Oslash'));
    encodeMap.j2(to('\xD8', '&Oslash;'));
    encodeMap.j2(to('\xD5', '&Otilde'));
    encodeMap.j2(to('\xD5', '&Otilde;'));
    encodeMap.j2(to('\u2A37', '&Otimes;'));
    encodeMap.j2(to('\xD6', '&Ouml'));
    encodeMap.j2(to('\xD6', '&Ouml;'));
    encodeMap.j2(to('\u203E', '&OverBar;'));
    encodeMap.j2(to('\u23DE', '&OverBrace;'));
    encodeMap.j2(to('\u23B4', '&OverBracket;'));
    encodeMap.j2(to('\u23DC', '&OverParenthesis;'));
    encodeMap.j2(to('\u2202', '&PartialD;'));
    encodeMap.j2(to('\u041F', '&Pcy;'));
    encodeMap.j2(to('\uD835\uDD13', '&Pfr;'));
    encodeMap.j2(to('\u03A6', '&Phi;'));
    encodeMap.j2(to('\u03A0', '&Pi;'));
    encodeMap.j2(to('\xB1', '&PlusMinus;'));
    encodeMap.j2(to('\u210C', '&Poincareplane;'));
    encodeMap.j2(to('\u2119', '&Popf;'));
    encodeMap.j2(to('\u2ABB', '&Pr;'));
    encodeMap.j2(to('\u227A', '&Precedes;'));
    encodeMap.j2(to('\u2AAF', '&PrecedesEqual;'));
    encodeMap.j2(to('\u227C', '&PrecedesSlantEqual;'));
    encodeMap.j2(to('\u227E', '&PrecedesTilde;'));
    encodeMap.j2(to('\u2033', '&Prime;'));
    encodeMap.j2(to('\u220F', '&Product;'));
    encodeMap.j2(to('\u2237', '&Proportion;'));
    encodeMap.j2(to('\u221D', '&Proportional;'));
    encodeMap.j2(to('\uD835\uDCAB', '&Pscr;'));
    encodeMap.j2(to('\u03A8', '&Psi;'));
    encodeMap.j2(to('"', '&QUOT'));
    encodeMap.j2(to('"', '&QUOT;'));
    encodeMap.j2(to('\uD835\uDD14', '&Qfr;'));
    encodeMap.j2(to('\u211A', '&Qopf;'));
    encodeMap.j2(to('\uD835\uDCAC', '&Qscr;'));
    encodeMap.j2(to('\u2910', '&RBarr;'));
    encodeMap.j2(to('\xAE', '&REG'));
    encodeMap.j2(to('\xAE', '&REG;'));
    encodeMap.j2(to('\u0154', '&Racute;'));
    encodeMap.j2(to('\u27EB', '&Rang;'));
    encodeMap.j2(to('\u21A0', '&Rarr;'));
    encodeMap.j2(to('\u2916', '&Rarrtl;'));
    encodeMap.j2(to('\u0158', '&Rcaron;'));
    encodeMap.j2(to('\u0156', '&Rcedil;'));
    encodeMap.j2(to('\u0420', '&Rcy;'));
    encodeMap.j2(to('\u211C', '&Re;'));
    encodeMap.j2(to('\u220B', '&ReverseElement;'));
    encodeMap.j2(to('\u21CB', '&ReverseEquilibrium;'));
    encodeMap.j2(to('\u296F', '&ReverseUpEquilibrium;'));
    encodeMap.j2(to('\u211C', '&Rfr;'));
    encodeMap.j2(to('\u03A1', '&Rho;'));
    encodeMap.j2(to('\u27E9', '&RightAngleBracket;'));
    encodeMap.j2(to('\u2192', '&RightArrow;'));
    encodeMap.j2(to('\u21E5', '&RightArrowBar;'));
    encodeMap.j2(to('\u21C4', '&RightArrowLeftArrow;'));
    encodeMap.j2(to('\u2309', '&RightCeiling;'));
    encodeMap.j2(to('\u27E7', '&RightDoubleBracket;'));
    encodeMap.j2(to('\u295D', '&RightDownTeeVector;'));
    encodeMap.j2(to('\u21C2', '&RightDownVector;'));
    encodeMap.j2(to('\u2955', '&RightDownVectorBar;'));
    encodeMap.j2(to('\u230B', '&RightFloor;'));
    encodeMap.j2(to('\u22A2', '&RightTee;'));
    encodeMap.j2(to('\u21A6', '&RightTeeArrow;'));
    encodeMap.j2(to('\u295B', '&RightTeeVector;'));
    encodeMap.j2(to('\u22B3', '&RightTriangle;'));
    encodeMap.j2(to('\u29D0', '&RightTriangleBar;'));
    encodeMap.j2(to('\u22B5', '&RightTriangleEqual;'));
    encodeMap.j2(to('\u294F', '&RightUpDownVector;'));
    encodeMap.j2(to('\u295C', '&RightUpTeeVector;'));
    encodeMap.j2(to('\u21BE', '&RightUpVector;'));
    encodeMap.j2(to('\u2954', '&RightUpVectorBar;'));
    encodeMap.j2(to('\u21C0', '&RightVector;'));
    encodeMap.j2(to('\u2953', '&RightVectorBar;'));
    encodeMap.j2(to('\u21D2', '&Rightarrow;'));
    encodeMap.j2(to('\u211D', '&Ropf;'));
    encodeMap.j2(to('\u2970', '&RoundImplies;'));
    encodeMap.j2(to('\u21DB', '&Rrightarrow;'));
    encodeMap.j2(to('\u211B', '&Rscr;'));
    encodeMap.j2(to('\u21B1', '&Rsh;'));
    encodeMap.j2(to('\u29F4', '&RuleDelayed;'));
    encodeMap.j2(to('\u0429', '&SHCHcy;'));
    encodeMap.j2(to('\u0428', '&SHcy;'));
    encodeMap.j2(to('\u042C', '&SOFTcy;'));
    encodeMap.j2(to('\u015A', '&Sacute;'));
    encodeMap.j2(to('\u2ABC', '&Sc;'));
    encodeMap.j2(to('\u0160', '&Scaron;'));
    encodeMap.j2(to('\u015E', '&Scedil;'));
    encodeMap.j2(to('\u015C', '&Scirc;'));
    encodeMap.j2(to('\u0421', '&Scy;'));
    encodeMap.j2(to('\uD835\uDD16', '&Sfr;'));
    encodeMap.j2(to('\u2193', '&ShortDownArrow;'));
    encodeMap.j2(to('\u2190', '&ShortLeftArrow;'));
    encodeMap.j2(to('\u2192', '&ShortRightArrow;'));
    encodeMap.j2(to('\u2191', '&ShortUpArrow;'));
    encodeMap.j2(to('\u03A3', '&Sigma;'));
    encodeMap.j2(to('\u2218', '&SmallCircle;'));
    encodeMap.j2(to('\uD835\uDD4A', '&Sopf;'));
    encodeMap.j2(to('\u221A', '&Sqrt;'));
    encodeMap.j2(to('\u25A1', '&Square;'));
    encodeMap.j2(to('\u2293', '&SquareIntersection;'));
    encodeMap.j2(to('\u228F', '&SquareSubset;'));
    encodeMap.j2(to('\u2291', '&SquareSubsetEqual;'));
    encodeMap.j2(to('\u2290', '&SquareSuperset;'));
    encodeMap.j2(to('\u2292', '&SquareSupersetEqual;'));
    encodeMap.j2(to('\u2294', '&SquareUnion;'));
    encodeMap.j2(to('\uD835\uDCAE', '&Sscr;'));
    encodeMap.j2(to('\u22C6', '&Star;'));
    encodeMap.j2(to('\u22D0', '&Sub;'));
    encodeMap.j2(to('\u22D0', '&Subset;'));
    encodeMap.j2(to('\u2286', '&SubsetEqual;'));
    encodeMap.j2(to('\u227B', '&Succeeds;'));
    encodeMap.j2(to('\u2AB0', '&SucceedsEqual;'));
    encodeMap.j2(to('\u227D', '&SucceedsSlantEqual;'));
    encodeMap.j2(to('\u227F', '&SucceedsTilde;'));
    encodeMap.j2(to('\u220B', '&SuchThat;'));
    encodeMap.j2(to('\u2211', '&Sum;'));
    encodeMap.j2(to('\u22D1', '&Sup;'));
    encodeMap.j2(to('\u2283', '&Superset;'));
    encodeMap.j2(to('\u2287', '&SupersetEqual;'));
    encodeMap.j2(to('\u22D1', '&Supset;'));
    encodeMap.j2(to('\xDE', '&THORN'));
    encodeMap.j2(to('\xDE', '&THORN;'));
    encodeMap.j2(to('\u2122', '&TRADE;'));
    encodeMap.j2(to('\u040B', '&TSHcy;'));
    encodeMap.j2(to('\u0426', '&TScy;'));
    encodeMap.j2(to('\t', '&Tab;'));
    encodeMap.j2(to('\u03A4', '&Tau;'));
    encodeMap.j2(to('\u0164', '&Tcaron;'));
    encodeMap.j2(to('\u0162', '&Tcedil;'));
    encodeMap.j2(to('\u0422', '&Tcy;'));
    encodeMap.j2(to('\uD835\uDD17', '&Tfr;'));
    encodeMap.j2(to('\u2234', '&Therefore;'));
    encodeMap.j2(to('\u0398', '&Theta;'));
    encodeMap.j2(to('\u205F\u200A', '&ThickSpace;'));
    encodeMap.j2(to('\u2009', '&ThinSpace;'));
    encodeMap.j2(to('\u223C', '&Tilde;'));
    encodeMap.j2(to('\u2243', '&TildeEqual;'));
    encodeMap.j2(to('\u2245', '&TildeFullEqual;'));
    encodeMap.j2(to('\u2248', '&TildeTilde;'));
    encodeMap.j2(to('\uD835\uDD4B', '&Topf;'));
    encodeMap.j2(to('\u20DB', '&TripleDot;'));
    encodeMap.j2(to('\uD835\uDCAF', '&Tscr;'));
    encodeMap.j2(to('\u0166', '&Tstrok;'));
    encodeMap.j2(to('\xDA', '&Uacute'));
    encodeMap.j2(to('\xDA', '&Uacute;'));
    encodeMap.j2(to('\u219F', '&Uarr;'));
    encodeMap.j2(to('\u2949', '&Uarrocir;'));
    encodeMap.j2(to('\u040E', '&Ubrcy;'));
    encodeMap.j2(to('\u016C', '&Ubreve;'));
    encodeMap.j2(to('\xDB', '&Ucirc'));
    encodeMap.j2(to('\xDB', '&Ucirc;'));
    encodeMap.j2(to('\u0423', '&Ucy;'));
    encodeMap.j2(to('\u0170', '&Udblac;'));
    encodeMap.j2(to('\uD835\uDD18', '&Ufr;'));
    encodeMap.j2(to('\xD9', '&Ugrave'));
    encodeMap.j2(to('\xD9', '&Ugrave;'));
    encodeMap.j2(to('\u016A', '&Umacr;'));
    encodeMap.j2(to('_', '&UnderBar;'));
    encodeMap.j2(to('\u23DF', '&UnderBrace;'));
    encodeMap.j2(to('\u23B5', '&UnderBracket;'));
    encodeMap.j2(to('\u23DD', '&UnderParenthesis;'));
    encodeMap.j2(to('\u22C3', '&Union;'));
    encodeMap.j2(to('\u228E', '&UnionPlus;'));
    encodeMap.j2(to('\u0172', '&Uogon;'));
    encodeMap.j2(to('\uD835\uDD4C', '&Uopf;'));
    encodeMap.j2(to('\u2191', '&UpArrow;'));
    encodeMap.j2(to('\u2912', '&UpArrowBar;'));
    encodeMap.j2(to('\u21C5', '&UpArrowDownArrow;'));
    encodeMap.j2(to('\u2195', '&UpDownArrow;'));
    encodeMap.j2(to('\u296E', '&UpEquilibrium;'));
    encodeMap.j2(to('\u22A5', '&UpTee;'));
    encodeMap.j2(to('\u21A5', '&UpTeeArrow;'));
    encodeMap.j2(to('\u21D1', '&Uparrow;'));
    encodeMap.j2(to('\u21D5', '&Updownarrow;'));
    encodeMap.j2(to('\u2196', '&UpperLeftArrow;'));
    encodeMap.j2(to('\u2197', '&UpperRightArrow;'));
    encodeMap.j2(to('\u03D2', '&Upsi;'));
    encodeMap.j2(to('\u03A5', '&Upsilon;'));
    encodeMap.j2(to('\u016E', '&Uring;'));
    encodeMap.j2(to('\uD835\uDCB0', '&Uscr;'));
    encodeMap.j2(to('\u0168', '&Utilde;'));
    encodeMap.j2(to('\xDC', '&Uuml'));
    encodeMap.j2(to('\xDC', '&Uuml;'));
    encodeMap.j2(to('\u22AB', '&VDash;'));
    encodeMap.j2(to('\u2AEB', '&Vbar;'));
    encodeMap.j2(to('\u0412', '&Vcy;'));
    encodeMap.j2(to('\u22A9', '&Vdash;'));
    encodeMap.j2(to('\u2AE6', '&Vdashl;'));
    encodeMap.j2(to('\u22C1', '&Vee;'));
    encodeMap.j2(to('\u2016', '&Verbar;'));
    encodeMap.j2(to('\u2016', '&Vert;'));
    encodeMap.j2(to('\u2223', '&VerticalBar;'));
    encodeMap.j2(to('|', '&VerticalLine;'));
    encodeMap.j2(to('\u2758', '&VerticalSeparator;'));
    encodeMap.j2(to('\u2240', '&VerticalTilde;'));
    encodeMap.j2(to('\u200A', '&VeryThinSpace;'));
    encodeMap.j2(to('\uD835\uDD19', '&Vfr;'));
    encodeMap.j2(to('\uD835\uDD4D', '&Vopf;'));
    encodeMap.j2(to('\uD835\uDCB1', '&Vscr;'));
    encodeMap.j2(to('\u22AA', '&Vvdash;'));
    encodeMap.j2(to('\u0174', '&Wcirc;'));
    encodeMap.j2(to('\u22C0', '&Wedge;'));
    encodeMap.j2(to('\uD835\uDD1A', '&Wfr;'));
    encodeMap.j2(to('\uD835\uDD4E', '&Wopf;'));
    encodeMap.j2(to('\uD835\uDCB2', '&Wscr;'));
    encodeMap.j2(to('\uD835\uDD1B', '&Xfr;'));
    encodeMap.j2(to('\u039E', '&Xi;'));
    encodeMap.j2(to('\uD835\uDD4F', '&Xopf;'));
    encodeMap.j2(to('\uD835\uDCB3', '&Xscr;'));
    encodeMap.j2(to('\u042F', '&YAcy;'));
    encodeMap.j2(to('\u0407', '&YIcy;'));
    encodeMap.j2(to('\u042E', '&YUcy;'));
    encodeMap.j2(to('\xDD', '&Yacute'));
    encodeMap.j2(to('\xDD', '&Yacute;'));
    encodeMap.j2(to('\u0176', '&Ycirc;'));
    encodeMap.j2(to('\u042B', '&Ycy;'));
    encodeMap.j2(to('\uD835\uDD1C', '&Yfr;'));
    encodeMap.j2(to('\uD835\uDD50', '&Yopf;'));
    encodeMap.j2(to('\uD835\uDCB4', '&Yscr;'));
    encodeMap.j2(to('\u0178', '&Yuml;'));
    encodeMap.j2(to('\u0416', '&ZHcy;'));
    encodeMap.j2(to('\u0179', '&Zacute;'));
    encodeMap.j2(to('\u017D', '&Zcaron;'));
    encodeMap.j2(to('\u0417', '&Zcy;'));
    encodeMap.j2(to('\u017B', '&Zdot;'));
    encodeMap.j2(to('\u200B', '&ZeroWidthSpace;'));
    encodeMap.j2(to('\u0396', '&Zeta;'));
    encodeMap.j2(to('\u2128', '&Zfr;'));
    encodeMap.j2(to('\u2124', '&Zopf;'));
    encodeMap.j2(to('\uD835\uDCB5', '&Zscr;'));
    encodeMap.j2(to('\xE1', '&aacute'));
    encodeMap.j2(to('\xE1', '&aacute;'));
    encodeMap.j2(to('\u0103', '&abreve;'));
    encodeMap.j2(to('\u223E', '&ac;'));
    encodeMap.j2(to('\u223E\u0333', '&acE;'));
    encodeMap.j2(to('\u223F', '&acd;'));
    encodeMap.j2(to('\xE2', '&acirc'));
    encodeMap.j2(to('\xE2', '&acirc;'));
    encodeMap.j2(to('\xB4', '&acute'));
    encodeMap.j2(to('\xB4', '&acute;'));
    encodeMap.j2(to('\u0430', '&acy;'));
    encodeMap.j2(to('\xE6', '&aelig'));
    encodeMap.j2(to('\xE6', '&aelig;'));
    encodeMap.j2(to('\u2061', '&af;'));
    encodeMap.j2(to('\uD835\uDD1E', '&afr;'));
    encodeMap.j2(to('\xE0', '&agrave'));
    encodeMap.j2(to('\xE0', '&agrave;'));
    encodeMap.j2(to('\u2135', '&alefsym;'));
    encodeMap.j2(to('\u2135', '&aleph;'));
    encodeMap.j2(to('\u03B1', '&alpha;'));
    encodeMap.j2(to('\u0101', '&amacr;'));
    encodeMap.j2(to('\u2A3F', '&amalg;'));
    encodeMap.j2(to('&', '&amp'));
    encodeMap.j2(to('&', '&amp;'));
    encodeMap.j2(to('\u2227', '&and;'));
    encodeMap.j2(to('\u2A55', '&andand;'));
    encodeMap.j2(to('\u2A5C', '&andd;'));
    encodeMap.j2(to('\u2A58', '&andslope;'));
    encodeMap.j2(to('\u2A5A', '&andv;'));
    encodeMap.j2(to('\u2220', '&ang;'));
    encodeMap.j2(to('\u29A4', '&ange;'));
    encodeMap.j2(to('\u2220', '&angle;'));
    encodeMap.j2(to('\u2221', '&angmsd;'));
    encodeMap.j2(to('\u29A8', '&angmsdaa;'));
    encodeMap.j2(to('\u29A9', '&angmsdab;'));
    encodeMap.j2(to('\u29AA', '&angmsdac;'));
    encodeMap.j2(to('\u29AB', '&angmsdad;'));
    encodeMap.j2(to('\u29AC', '&angmsdae;'));
    encodeMap.j2(to('\u29AD', '&angmsdaf;'));
    encodeMap.j2(to('\u29AE', '&angmsdag;'));
    encodeMap.j2(to('\u29AF', '&angmsdah;'));
    encodeMap.j2(to('\u221F', '&angrt;'));
    encodeMap.j2(to('\u22BE', '&angrtvb;'));
    encodeMap.j2(to('\u299D', '&angrtvbd;'));
    encodeMap.j2(to('\u2222', '&angsph;'));
    encodeMap.j2(to('\xC5', '&angst;'));
    encodeMap.j2(to('\u237C', '&angzarr;'));
    encodeMap.j2(to('\u0105', '&aogon;'));
    encodeMap.j2(to('\uD835\uDD52', '&aopf;'));
    encodeMap.j2(to('\u2248', '&ap;'));
    encodeMap.j2(to('\u2A70', '&apE;'));
    encodeMap.j2(to('\u2A6F', '&apacir;'));
    encodeMap.j2(to('\u224A', '&ape;'));
    encodeMap.j2(to('\u224B', '&apid;'));
    encodeMap.j2(to("'", '&apos;'));
    encodeMap.j2(to('\u2248', '&approx;'));
    encodeMap.j2(to('\u224A', '&approxeq;'));
    encodeMap.j2(to('\xE5', '&aring'));
    encodeMap.j2(to('\xE5', '&aring;'));
    encodeMap.j2(to('\uD835\uDCB6', '&ascr;'));
    encodeMap.j2(to('*', '&ast;'));
    encodeMap.j2(to('\u2248', '&asymp;'));
    encodeMap.j2(to('\u224D', '&asympeq;'));
    encodeMap.j2(to('\xE3', '&atilde'));
    encodeMap.j2(to('\xE3', '&atilde;'));
    encodeMap.j2(to('\xE4', '&auml'));
    encodeMap.j2(to('\xE4', '&auml;'));
    encodeMap.j2(to('\u2233', '&awconint;'));
    encodeMap.j2(to('\u2A11', '&awint;'));
    encodeMap.j2(to('\u2AED', '&bNot;'));
    encodeMap.j2(to('\u224C', '&backcong;'));
    encodeMap.j2(to('\u03F6', '&backepsilon;'));
    encodeMap.j2(to('\u2035', '&backprime;'));
    encodeMap.j2(to('\u223D', '&backsim;'));
    encodeMap.j2(to('\u22CD', '&backsimeq;'));
    encodeMap.j2(to('\u22BD', '&barvee;'));
    encodeMap.j2(to('\u2305', '&barwed;'));
    encodeMap.j2(to('\u2305', '&barwedge;'));
    encodeMap.j2(to('\u23B5', '&bbrk;'));
    encodeMap.j2(to('\u23B6', '&bbrktbrk;'));
    encodeMap.j2(to('\u224C', '&bcong;'));
    encodeMap.j2(to('\u0431', '&bcy;'));
    encodeMap.j2(to('\u201E', '&bdquo;'));
    encodeMap.j2(to('\u2235', '&becaus;'));
    encodeMap.j2(to('\u2235', '&because;'));
    encodeMap.j2(to('\u29B0', '&bemptyv;'));
    encodeMap.j2(to('\u03F6', '&bepsi;'));
    encodeMap.j2(to('\u212C', '&bernou;'));
    encodeMap.j2(to('\u03B2', '&beta;'));
    encodeMap.j2(to('\u2136', '&beth;'));
    encodeMap.j2(to('\u226C', '&between;'));
    encodeMap.j2(to('\uD835\uDD1F', '&bfr;'));
    encodeMap.j2(to('\u22C2', '&bigcap;'));
    encodeMap.j2(to('\u25EF', '&bigcirc;'));
    encodeMap.j2(to('\u22C3', '&bigcup;'));
    encodeMap.j2(to('\u2A00', '&bigodot;'));
    encodeMap.j2(to('\u2A01', '&bigoplus;'));
    encodeMap.j2(to('\u2A02', '&bigotimes;'));
    encodeMap.j2(to('\u2A06', '&bigsqcup;'));
    encodeMap.j2(to('\u2605', '&bigstar;'));
    encodeMap.j2(to('\u25BD', '&bigtriangledown;'));
    encodeMap.j2(to('\u25B3', '&bigtriangleup;'));
    encodeMap.j2(to('\u2A04', '&biguplus;'));
    encodeMap.j2(to('\u22C1', '&bigvee;'));
    encodeMap.j2(to('\u22C0', '&bigwedge;'));
    encodeMap.j2(to('\u290D', '&bkarow;'));
    encodeMap.j2(to('\u29EB', '&blacklozenge;'));
    encodeMap.j2(to('\u25AA', '&blacksquare;'));
    encodeMap.j2(to('\u25B4', '&blacktriangle;'));
    encodeMap.j2(to('\u25BE', '&blacktriangledown;'));
    encodeMap.j2(to('\u25C2', '&blacktriangleleft;'));
    encodeMap.j2(to('\u25B8', '&blacktriangleright;'));
    encodeMap.j2(to('\u2423', '&blank;'));
    encodeMap.j2(to('\u2592', '&blk12;'));
    encodeMap.j2(to('\u2591', '&blk14;'));
    encodeMap.j2(to('\u2593', '&blk34;'));
    encodeMap.j2(to('\u2588', '&block;'));
    encodeMap.j2(to('=\u20E5', '&bne;'));
    encodeMap.j2(to('\u2261\u20E5', '&bnequiv;'));
    encodeMap.j2(to('\u2310', '&bnot;'));
    encodeMap.j2(to('\uD835\uDD53', '&bopf;'));
    encodeMap.j2(to('\u22A5', '&bot;'));
    encodeMap.j2(to('\u22A5', '&bottom;'));
    encodeMap.j2(to('\u22C8', '&bowtie;'));
    encodeMap.j2(to('\u2557', '&boxDL;'));
    encodeMap.j2(to('\u2554', '&boxDR;'));
    encodeMap.j2(to('\u2556', '&boxDl;'));
    encodeMap.j2(to('\u2553', '&boxDr;'));
    encodeMap.j2(to('\u2550', '&boxH;'));
    encodeMap.j2(to('\u2566', '&boxHD;'));
    encodeMap.j2(to('\u2569', '&boxHU;'));
    encodeMap.j2(to('\u2564', '&boxHd;'));
    encodeMap.j2(to('\u2567', '&boxHu;'));
    encodeMap.j2(to('\u255D', '&boxUL;'));
    encodeMap.j2(to('\u255A', '&boxUR;'));
    encodeMap.j2(to('\u255C', '&boxUl;'));
    encodeMap.j2(to('\u2559', '&boxUr;'));
    encodeMap.j2(to('\u2551', '&boxV;'));
    encodeMap.j2(to('\u256C', '&boxVH;'));
    encodeMap.j2(to('\u2563', '&boxVL;'));
    encodeMap.j2(to('\u2560', '&boxVR;'));
    encodeMap.j2(to('\u256B', '&boxVh;'));
    encodeMap.j2(to('\u2562', '&boxVl;'));
    encodeMap.j2(to('\u255F', '&boxVr;'));
    encodeMap.j2(to('\u29C9', '&boxbox;'));
    encodeMap.j2(to('\u2555', '&boxdL;'));
    encodeMap.j2(to('\u2552', '&boxdR;'));
    encodeMap.j2(to('\u2510', '&boxdl;'));
    encodeMap.j2(to('\u250C', '&boxdr;'));
    encodeMap.j2(to('\u2500', '&boxh;'));
    encodeMap.j2(to('\u2565', '&boxhD;'));
    encodeMap.j2(to('\u2568', '&boxhU;'));
    encodeMap.j2(to('\u252C', '&boxhd;'));
    encodeMap.j2(to('\u2534', '&boxhu;'));
    encodeMap.j2(to('\u229F', '&boxminus;'));
    encodeMap.j2(to('\u229E', '&boxplus;'));
    encodeMap.j2(to('\u22A0', '&boxtimes;'));
    encodeMap.j2(to('\u255B', '&boxuL;'));
    encodeMap.j2(to('\u2558', '&boxuR;'));
    encodeMap.j2(to('\u2518', '&boxul;'));
    encodeMap.j2(to('\u2514', '&boxur;'));
    encodeMap.j2(to('\u2502', '&boxv;'));
    encodeMap.j2(to('\u256A', '&boxvH;'));
    encodeMap.j2(to('\u2561', '&boxvL;'));
    encodeMap.j2(to('\u255E', '&boxvR;'));
    encodeMap.j2(to('\u253C', '&boxvh;'));
    encodeMap.j2(to('\u2524', '&boxvl;'));
    encodeMap.j2(to('\u251C', '&boxvr;'));
    encodeMap.j2(to('\u2035', '&bprime;'));
    encodeMap.j2(to('\u02D8', '&breve;'));
    encodeMap.j2(to('\xA6', '&brvbar'));
    encodeMap.j2(to('\xA6', '&brvbar;'));
    encodeMap.j2(to('\uD835\uDCB7', '&bscr;'));
    encodeMap.j2(to('\u204F', '&bsemi;'));
    encodeMap.j2(to('\u223D', '&bsim;'));
    encodeMap.j2(to('\u22CD', '&bsime;'));
    encodeMap.j2(to('\\', '&bsol;'));
    encodeMap.j2(to('\u29C5', '&bsolb;'));
    encodeMap.j2(to('\u27C8', '&bsolhsub;'));
    encodeMap.j2(to('\u2022', '&bull;'));
    encodeMap.j2(to('\u2022', '&bullet;'));
    encodeMap.j2(to('\u224E', '&bump;'));
    encodeMap.j2(to('\u2AAE', '&bumpE;'));
    encodeMap.j2(to('\u224F', '&bumpe;'));
    encodeMap.j2(to('\u224F', '&bumpeq;'));
    encodeMap.j2(to('\u0107', '&cacute;'));
    encodeMap.j2(to('\u2229', '&cap;'));
    encodeMap.j2(to('\u2A44', '&capand;'));
    encodeMap.j2(to('\u2A49', '&capbrcup;'));
    encodeMap.j2(to('\u2A4B', '&capcap;'));
    encodeMap.j2(to('\u2A47', '&capcup;'));
    encodeMap.j2(to('\u2A40', '&capdot;'));
    encodeMap.j2(to('\u2229\uFE00', '&caps;'));
    encodeMap.j2(to('\u2041', '&caret;'));
    encodeMap.j2(to('\u02C7', '&caron;'));
    encodeMap.j2(to('\u2A4D', '&ccaps;'));
    encodeMap.j2(to('\u010D', '&ccaron;'));
    encodeMap.j2(to('\xE7', '&ccedil'));
    encodeMap.j2(to('\xE7', '&ccedil;'));
    encodeMap.j2(to('\u0109', '&ccirc;'));
    encodeMap.j2(to('\u2A4C', '&ccups;'));
    encodeMap.j2(to('\u2A50', '&ccupssm;'));
    encodeMap.j2(to('\u010B', '&cdot;'));
    encodeMap.j2(to('\xB8', '&cedil'));
    encodeMap.j2(to('\xB8', '&cedil;'));
    encodeMap.j2(to('\u29B2', '&cemptyv;'));
    encodeMap.j2(to('\xA2', '&cent'));
    encodeMap.j2(to('\xA2', '&cent;'));
    encodeMap.j2(to('\xB7', '&centerdot;'));
    encodeMap.j2(to('\uD835\uDD20', '&cfr;'));
    encodeMap.j2(to('\u0447', '&chcy;'));
    encodeMap.j2(to('\u2713', '&check;'));
    encodeMap.j2(to('\u2713', '&checkmark;'));
    encodeMap.j2(to('\u03C7', '&chi;'));
    encodeMap.j2(to('\u25CB', '&cir;'));
    encodeMap.j2(to('\u29C3', '&cirE;'));
    encodeMap.j2(to('\u02C6', '&circ;'));
    encodeMap.j2(to('\u2257', '&circeq;'));
    encodeMap.j2(to('\u21BA', '&circlearrowleft;'));
    encodeMap.j2(to('\u21BB', '&circlearrowright;'));
    encodeMap.j2(to('\xAE', '&circledR;'));
    encodeMap.j2(to('\u24C8', '&circledS;'));
    encodeMap.j2(to('\u229B', '&circledast;'));
    encodeMap.j2(to('\u229A', '&circledcirc;'));
    encodeMap.j2(to('\u229D', '&circleddash;'));
    encodeMap.j2(to('\u2257', '&cire;'));
    encodeMap.j2(to('\u2A10', '&cirfnint;'));
    encodeMap.j2(to('\u2AEF', '&cirmid;'));
    encodeMap.j2(to('\u29C2', '&cirscir;'));
    encodeMap.j2(to('\u2663', '&clubs;'));
    encodeMap.j2(to('\u2663', '&clubsuit;'));
    encodeMap.j2(to(':', '&colon;'));
    encodeMap.j2(to('\u2254', '&colone;'));
    encodeMap.j2(to('\u2254', '&coloneq;'));
    encodeMap.j2(to(',', '&comma;'));
    encodeMap.j2(to('@', '&commat;'));
    encodeMap.j2(to('\u2201', '&comp;'));
    encodeMap.j2(to('\u2218', '&compfn;'));
    encodeMap.j2(to('\u2201', '&complement;'));
    encodeMap.j2(to('\u2102', '&complexes;'));
    encodeMap.j2(to('\u2245', '&cong;'));
    encodeMap.j2(to('\u2A6D', '&congdot;'));
    encodeMap.j2(to('\u222E', '&conint;'));
    encodeMap.j2(to('\uD835\uDD54', '&copf;'));
    encodeMap.j2(to('\u2210', '&coprod;'));
    encodeMap.j2(to('\xA9', '&copy'));
    encodeMap.j2(to('\xA9', '&copy;'));
    encodeMap.j2(to('\u2117', '&copysr;'));
    encodeMap.j2(to('\u21B5', '&crarr;'));
    encodeMap.j2(to('\u2717', '&cross;'));
    encodeMap.j2(to('\uD835\uDCB8', '&cscr;'));
    encodeMap.j2(to('\u2ACF', '&csub;'));
    encodeMap.j2(to('\u2AD1', '&csube;'));
    encodeMap.j2(to('\u2AD0', '&csup;'));
    encodeMap.j2(to('\u2AD2', '&csupe;'));
    encodeMap.j2(to('\u22EF', '&ctdot;'));
    encodeMap.j2(to('\u2938', '&cudarrl;'));
    encodeMap.j2(to('\u2935', '&cudarrr;'));
    encodeMap.j2(to('\u22DE', '&cuepr;'));
    encodeMap.j2(to('\u22DF', '&cuesc;'));
    encodeMap.j2(to('\u21B6', '&cularr;'));
    encodeMap.j2(to('\u293D', '&cularrp;'));
    encodeMap.j2(to('\u222A', '&cup;'));
    encodeMap.j2(to('\u2A48', '&cupbrcap;'));
    encodeMap.j2(to('\u2A46', '&cupcap;'));
    encodeMap.j2(to('\u2A4A', '&cupcup;'));
    encodeMap.j2(to('\u228D', '&cupdot;'));
    encodeMap.j2(to('\u2A45', '&cupor;'));
    encodeMap.j2(to('\u222A\uFE00', '&cups;'));
    encodeMap.j2(to('\u21B7', '&curarr;'));
    encodeMap.j2(to('\u293C', '&curarrm;'));
    encodeMap.j2(to('\u22DE', '&curlyeqprec;'));
    encodeMap.j2(to('\u22DF', '&curlyeqsucc;'));
    encodeMap.j2(to('\u22CE', '&curlyvee;'));
    encodeMap.j2(to('\u22CF', '&curlywedge;'));
    encodeMap.j2(to('\xA4', '&curren'));
    encodeMap.j2(to('\xA4', '&curren;'));
    encodeMap.j2(to('\u21B6', '&curvearrowleft;'));
    encodeMap.j2(to('\u21B7', '&curvearrowright;'));
    encodeMap.j2(to('\u22CE', '&cuvee;'));
    encodeMap.j2(to('\u22CF', '&cuwed;'));
    encodeMap.j2(to('\u2232', '&cwconint;'));
    encodeMap.j2(to('\u2231', '&cwint;'));
    encodeMap.j2(to('\u232D', '&cylcty;'));
    encodeMap.j2(to('\u21D3', '&dArr;'));
    encodeMap.j2(to('\u2965', '&dHar;'));
    encodeMap.j2(to('\u2020', '&dagger;'));
    encodeMap.j2(to('\u2138', '&daleth;'));
    encodeMap.j2(to('\u2193', '&darr;'));
    encodeMap.j2(to('\u2010', '&dash;'));
    encodeMap.j2(to('\u22A3', '&dashv;'));
    encodeMap.j2(to('\u290F', '&dbkarow;'));
    encodeMap.j2(to('\u02DD', '&dblac;'));
    encodeMap.j2(to('\u010F', '&dcaron;'));
    encodeMap.j2(to('\u0434', '&dcy;'));
    encodeMap.j2(to('\u2146', '&dd;'));
    encodeMap.j2(to('\u2021', '&ddagger;'));
    encodeMap.j2(to('\u21CA', '&ddarr;'));
    encodeMap.j2(to('\u2A77', '&ddotseq;'));
    encodeMap.j2(to('\xB0', '&deg'));
    encodeMap.j2(to('\xB0', '&deg;'));
    encodeMap.j2(to('\u03B4', '&delta;'));
    encodeMap.j2(to('\u29B1', '&demptyv;'));
    encodeMap.j2(to('\u297F', '&dfisht;'));
    encodeMap.j2(to('\uD835\uDD21', '&dfr;'));
    encodeMap.j2(to('\u21C3', '&dharl;'));
    encodeMap.j2(to('\u21C2', '&dharr;'));
    encodeMap.j2(to('\u22C4', '&diam;'));
    encodeMap.j2(to('\u22C4', '&diamond;'));
    encodeMap.j2(to('\u2666', '&diamondsuit;'));
    encodeMap.j2(to('\u2666', '&diams;'));
    encodeMap.j2(to('\xA8', '&die;'));
    encodeMap.j2(to('\u03DD', '&digamma;'));
    encodeMap.j2(to('\u22F2', '&disin;'));
    encodeMap.j2(to('\xF7', '&div;'));
    encodeMap.j2(to('\xF7', '&divide'));
    encodeMap.j2(to('\xF7', '&divide;'));
    encodeMap.j2(to('\u22C7', '&divideontimes;'));
    encodeMap.j2(to('\u22C7', '&divonx;'));
    encodeMap.j2(to('\u0452', '&djcy;'));
    encodeMap.j2(to('\u231E', '&dlcorn;'));
    encodeMap.j2(to('\u230D', '&dlcrop;'));
    encodeMap.j2(to('$', '&dollar;'));
    encodeMap.j2(to('\uD835\uDD55', '&dopf;'));
    encodeMap.j2(to('\u02D9', '&dot;'));
    encodeMap.j2(to('\u2250', '&doteq;'));
    encodeMap.j2(to('\u2251', '&doteqdot;'));
    encodeMap.j2(to('\u2238', '&dotminus;'));
    encodeMap.j2(to('\u2214', '&dotplus;'));
    encodeMap.j2(to('\u22A1', '&dotsquare;'));
    encodeMap.j2(to('\u2306', '&doublebarwedge;'));
    encodeMap.j2(to('\u2193', '&downarrow;'));
    encodeMap.j2(to('\u21CA', '&downdownarrows;'));
    encodeMap.j2(to('\u21C3', '&downharpoonleft;'));
    encodeMap.j2(to('\u21C2', '&downharpoonright;'));
    encodeMap.j2(to('\u2910', '&drbkarow;'));
    encodeMap.j2(to('\u231F', '&drcorn;'));
    encodeMap.j2(to('\u230C', '&drcrop;'));
    encodeMap.j2(to('\uD835\uDCB9', '&dscr;'));
    encodeMap.j2(to('\u0455', '&dscy;'));
    encodeMap.j2(to('\u29F6', '&dsol;'));
    encodeMap.j2(to('\u0111', '&dstrok;'));
    encodeMap.j2(to('\u22F1', '&dtdot;'));
    encodeMap.j2(to('\u25BF', '&dtri;'));
    encodeMap.j2(to('\u25BE', '&dtrif;'));
    encodeMap.j2(to('\u21F5', '&duarr;'));
    encodeMap.j2(to('\u296F', '&duhar;'));
    encodeMap.j2(to('\u29A6', '&dwangle;'));
    encodeMap.j2(to('\u045F', '&dzcy;'));
    encodeMap.j2(to('\u27FF', '&dzigrarr;'));
    encodeMap.j2(to('\u2A77', '&eDDot;'));
    encodeMap.j2(to('\u2251', '&eDot;'));
    encodeMap.j2(to('\xE9', '&eacute'));
    encodeMap.j2(to('\xE9', '&eacute;'));
    encodeMap.j2(to('\u2A6E', '&easter;'));
    encodeMap.j2(to('\u011B', '&ecaron;'));
    encodeMap.j2(to('\u2256', '&ecir;'));
    encodeMap.j2(to('\xEA', '&ecirc'));
    encodeMap.j2(to('\xEA', '&ecirc;'));
    encodeMap.j2(to('\u2255', '&ecolon;'));
    encodeMap.j2(to('\u044D', '&ecy;'));
    encodeMap.j2(to('\u0117', '&edot;'));
    encodeMap.j2(to('\u2147', '&ee;'));
    encodeMap.j2(to('\u2252', '&efDot;'));
    encodeMap.j2(to('\uD835\uDD22', '&efr;'));
    encodeMap.j2(to('\u2A9A', '&eg;'));
    encodeMap.j2(to('\xE8', '&egrave'));
    encodeMap.j2(to('\xE8', '&egrave;'));
    encodeMap.j2(to('\u2A96', '&egs;'));
    encodeMap.j2(to('\u2A98', '&egsdot;'));
    encodeMap.j2(to('\u2A99', '&el;'));
    encodeMap.j2(to('\u23E7', '&elinters;'));
    encodeMap.j2(to('\u2113', '&ell;'));
    encodeMap.j2(to('\u2A95', '&els;'));
    encodeMap.j2(to('\u2A97', '&elsdot;'));
    encodeMap.j2(to('\u0113', '&emacr;'));
    encodeMap.j2(to('\u2205', '&empty;'));
    encodeMap.j2(to('\u2205', '&emptyset;'));
    encodeMap.j2(to('\u2205', '&emptyv;'));
    encodeMap.j2(to('\u2004', '&emsp13;'));
    encodeMap.j2(to('\u2005', '&emsp14;'));
    encodeMap.j2(to('\u2003', '&emsp;'));
    encodeMap.j2(to('\u014B', '&eng;'));
    encodeMap.j2(to('\u2002', '&ensp;'));
    encodeMap.j2(to('\u0119', '&eogon;'));
    encodeMap.j2(to('\uD835\uDD56', '&eopf;'));
    encodeMap.j2(to('\u22D5', '&epar;'));
    encodeMap.j2(to('\u29E3', '&eparsl;'));
    encodeMap.j2(to('\u2A71', '&eplus;'));
    encodeMap.j2(to('\u03B5', '&epsi;'));
    encodeMap.j2(to('\u03B5', '&epsilon;'));
    encodeMap.j2(to('\u03F5', '&epsiv;'));
    encodeMap.j2(to('\u2256', '&eqcirc;'));
    encodeMap.j2(to('\u2255', '&eqcolon;'));
    encodeMap.j2(to('\u2242', '&eqsim;'));
    encodeMap.j2(to('\u2A96', '&eqslantgtr;'));
    encodeMap.j2(to('\u2A95', '&eqslantless;'));
    encodeMap.j2(to('=', '&equals;'));
    encodeMap.j2(to('\u225F', '&equest;'));
    encodeMap.j2(to('\u2261', '&equiv;'));
    encodeMap.j2(to('\u2A78', '&equivDD;'));
    encodeMap.j2(to('\u29E5', '&eqvparsl;'));
    encodeMap.j2(to('\u2253', '&erDot;'));
    encodeMap.j2(to('\u2971', '&erarr;'));
    encodeMap.j2(to('\u212F', '&escr;'));
    encodeMap.j2(to('\u2250', '&esdot;'));
    encodeMap.j2(to('\u2242', '&esim;'));
    encodeMap.j2(to('\u03B7', '&eta;'));
    encodeMap.j2(to('\xF0', '&eth'));
    encodeMap.j2(to('\xF0', '&eth;'));
    encodeMap.j2(to('\xEB', '&euml'));
    encodeMap.j2(to('\xEB', '&euml;'));
    encodeMap.j2(to('\u20AC', '&euro;'));
    encodeMap.j2(to('!', '&excl;'));
    encodeMap.j2(to('\u2203', '&exist;'));
    encodeMap.j2(to('\u2130', '&expectation;'));
    encodeMap.j2(to('\u2147', '&exponentiale;'));
    encodeMap.j2(to('\u2252', '&fallingdotseq;'));
    encodeMap.j2(to('\u0444', '&fcy;'));
    encodeMap.j2(to('\u2640', '&female;'));
    encodeMap.j2(to('\uFB03', '&ffilig;'));
    encodeMap.j2(to('\uFB00', '&fflig;'));
    encodeMap.j2(to('\uFB04', '&ffllig;'));
    encodeMap.j2(to('\uD835\uDD23', '&ffr;'));
    encodeMap.j2(to('\uFB01', '&filig;'));
    encodeMap.j2(to('fj', '&fjlig;'));
    encodeMap.j2(to('\u266D', '&flat;'));
    encodeMap.j2(to('\uFB02', '&fllig;'));
    encodeMap.j2(to('\u25B1', '&fltns;'));
    encodeMap.j2(to('\u0192', '&fnof;'));
    encodeMap.j2(to('\uD835\uDD57', '&fopf;'));
    encodeMap.j2(to('\u2200', '&forall;'));
    encodeMap.j2(to('\u22D4', '&fork;'));
    encodeMap.j2(to('\u2AD9', '&forkv;'));
    encodeMap.j2(to('\u2A0D', '&fpartint;'));
    encodeMap.j2(to('\xBD', '&frac12'));
    encodeMap.j2(to('\xBD', '&frac12;'));
    encodeMap.j2(to('\u2153', '&frac13;'));
    encodeMap.j2(to('\xBC', '&frac14'));
    encodeMap.j2(to('\xBC', '&frac14;'));
    encodeMap.j2(to('\u2155', '&frac15;'));
    encodeMap.j2(to('\u2159', '&frac16;'));
    encodeMap.j2(to('\u215B', '&frac18;'));
    encodeMap.j2(to('\u2154', '&frac23;'));
    encodeMap.j2(to('\u2156', '&frac25;'));
    encodeMap.j2(to('\xBE', '&frac34'));
    encodeMap.j2(to('\xBE', '&frac34;'));
    encodeMap.j2(to('\u2157', '&frac35;'));
    encodeMap.j2(to('\u215C', '&frac38;'));
    encodeMap.j2(to('\u2158', '&frac45;'));
    encodeMap.j2(to('\u215A', '&frac56;'));
    encodeMap.j2(to('\u215D', '&frac58;'));
    encodeMap.j2(to('\u215E', '&frac78;'));
    encodeMap.j2(to('\u2044', '&frasl;'));
    encodeMap.j2(to('\u2322', '&frown;'));
    encodeMap.j2(to('\uD835\uDCBB', '&fscr;'));
    encodeMap.j2(to('\u2267', '&gE;'));
    encodeMap.j2(to('\u2A8C', '&gEl;'));
    encodeMap.j2(to('\u01F5', '&gacute;'));
    encodeMap.j2(to('\u03B3', '&gamma;'));
    encodeMap.j2(to('\u03DD', '&gammad;'));
    encodeMap.j2(to('\u2A86', '&gap;'));
    encodeMap.j2(to('\u011F', '&gbreve;'));
    encodeMap.j2(to('\u011D', '&gcirc;'));
    encodeMap.j2(to('\u0433', '&gcy;'));
    encodeMap.j2(to('\u0121', '&gdot;'));
    encodeMap.j2(to('\u2265', '&ge;'));
    encodeMap.j2(to('\u22DB', '&gel;'));
    encodeMap.j2(to('\u2265', '&geq;'));
    encodeMap.j2(to('\u2267', '&geqq;'));
    encodeMap.j2(to('\u2A7E', '&geqslant;'));
    encodeMap.j2(to('\u2A7E', '&ges;'));
    encodeMap.j2(to('\u2AA9', '&gescc;'));
    encodeMap.j2(to('\u2A80', '&gesdot;'));
    encodeMap.j2(to('\u2A82', '&gesdoto;'));
    encodeMap.j2(to('\u2A84', '&gesdotol;'));
    encodeMap.j2(to('\u22DB\uFE00', '&gesl;'));
    encodeMap.j2(to('\u2A94', '&gesles;'));
    encodeMap.j2(to('\uD835\uDD24', '&gfr;'));
    encodeMap.j2(to('\u226B', '&gg;'));
    encodeMap.j2(to('\u22D9', '&ggg;'));
    encodeMap.j2(to('\u2137', '&gimel;'));
    encodeMap.j2(to('\u0453', '&gjcy;'));
    encodeMap.j2(to('\u2277', '&gl;'));
    encodeMap.j2(to('\u2A92', '&glE;'));
    encodeMap.j2(to('\u2AA5', '&gla;'));
    encodeMap.j2(to('\u2AA4', '&glj;'));
    encodeMap.j2(to('\u2269', '&gnE;'));
    encodeMap.j2(to('\u2A8A', '&gnap;'));
    encodeMap.j2(to('\u2A8A', '&gnapprox;'));
    encodeMap.j2(to('\u2A88', '&gne;'));
    encodeMap.j2(to('\u2A88', '&gneq;'));
    encodeMap.j2(to('\u2269', '&gneqq;'));
    encodeMap.j2(to('\u22E7', '&gnsim;'));
    encodeMap.j2(to('\uD835\uDD58', '&gopf;'));
    encodeMap.j2(to('`', '&grave;'));
    encodeMap.j2(to('\u210A', '&gscr;'));
    encodeMap.j2(to('\u2273', '&gsim;'));
    encodeMap.j2(to('\u2A8E', '&gsime;'));
    encodeMap.j2(to('\u2A90', '&gsiml;'));
    encodeMap.j2(to('>', '&gt'));
    encodeMap.j2(to('>', '&gt;'));
    encodeMap.j2(to('\u2AA7', '&gtcc;'));
    encodeMap.j2(to('\u2A7A', '&gtcir;'));
    encodeMap.j2(to('\u22D7', '&gtdot;'));
    encodeMap.j2(to('\u2995', '&gtlPar;'));
    encodeMap.j2(to('\u2A7C', '&gtquest;'));
    encodeMap.j2(to('\u2A86', '&gtrapprox;'));
    encodeMap.j2(to('\u2978', '&gtrarr;'));
    encodeMap.j2(to('\u22D7', '&gtrdot;'));
    encodeMap.j2(to('\u22DB', '&gtreqless;'));
    encodeMap.j2(to('\u2A8C', '&gtreqqless;'));
    encodeMap.j2(to('\u2277', '&gtrless;'));
    encodeMap.j2(to('\u2273', '&gtrsim;'));
    encodeMap.j2(to('\u2269\uFE00', '&gvertneqq;'));
    encodeMap.j2(to('\u2269\uFE00', '&gvnE;'));
    encodeMap.j2(to('\u21D4', '&hArr;'));
    encodeMap.j2(to('\u200A', '&hairsp;'));
    encodeMap.j2(to('\xBD', '&half;'));
    encodeMap.j2(to('\u210B', '&hamilt;'));
    encodeMap.j2(to('\u044A', '&hardcy;'));
    encodeMap.j2(to('\u2194', '&harr;'));
    encodeMap.j2(to('\u2948', '&harrcir;'));
    encodeMap.j2(to('\u21AD', '&harrw;'));
    encodeMap.j2(to('\u210F', '&hbar;'));
    encodeMap.j2(to('\u0125', '&hcirc;'));
    encodeMap.j2(to('\u2665', '&hearts;'));
    encodeMap.j2(to('\u2665', '&heartsuit;'));
    encodeMap.j2(to('\u2026', '&hellip;'));
    encodeMap.j2(to('\u22B9', '&hercon;'));
    encodeMap.j2(to('\uD835\uDD25', '&hfr;'));
    encodeMap.j2(to('\u2925', '&hksearow;'));
    encodeMap.j2(to('\u2926', '&hkswarow;'));
    encodeMap.j2(to('\u21FF', '&hoarr;'));
    encodeMap.j2(to('\u223B', '&homtht;'));
    encodeMap.j2(to('\u21A9', '&hookleftarrow;'));
    encodeMap.j2(to('\u21AA', '&hookrightarrow;'));
    encodeMap.j2(to('\uD835\uDD59', '&hopf;'));
    encodeMap.j2(to('\u2015', '&horbar;'));
    encodeMap.j2(to('\uD835\uDCBD', '&hscr;'));
    encodeMap.j2(to('\u210F', '&hslash;'));
    encodeMap.j2(to('\u0127', '&hstrok;'));
    encodeMap.j2(to('\u2043', '&hybull;'));
    encodeMap.j2(to('\u2010', '&hyphen;'));
    encodeMap.j2(to('\xED', '&iacute'));
    encodeMap.j2(to('\xED', '&iacute;'));
    encodeMap.j2(to('\u2063', '&ic;'));
    encodeMap.j2(to('\xEE', '&icirc'));
    encodeMap.j2(to('\xEE', '&icirc;'));
    encodeMap.j2(to('\u0438', '&icy;'));
    encodeMap.j2(to('\u0435', '&iecy;'));
    encodeMap.j2(to('\xA1', '&iexcl'));
    encodeMap.j2(to('\xA1', '&iexcl;'));
    encodeMap.j2(to('\u21D4', '&iff;'));
    encodeMap.j2(to('\uD835\uDD26', '&ifr;'));
    encodeMap.j2(to('\xEC', '&igrave'));
    encodeMap.j2(to('\xEC', '&igrave;'));
    encodeMap.j2(to('\u2148', '&ii;'));
    encodeMap.j2(to('\u2A0C', '&iiiint;'));
    encodeMap.j2(to('\u222D', '&iiint;'));
    encodeMap.j2(to('\u29DC', '&iinfin;'));
    encodeMap.j2(to('\u2129', '&iiota;'));
    encodeMap.j2(to('\u0133', '&ijlig;'));
    encodeMap.j2(to('\u012B', '&imacr;'));
    encodeMap.j2(to('\u2111', '&image;'));
    encodeMap.j2(to('\u2110', '&imagline;'));
    encodeMap.j2(to('\u2111', '&imagpart;'));
    encodeMap.j2(to('\u0131', '&imath;'));
    encodeMap.j2(to('\u22B7', '&imof;'));
    encodeMap.j2(to('\u01B5', '&imped;'));
    encodeMap.j2(to('\u2208', '&in;'));
    encodeMap.j2(to('\u2105', '&incare;'));
    encodeMap.j2(to('\u221E', '&infin;'));
    encodeMap.j2(to('\u29DD', '&infintie;'));
    encodeMap.j2(to('\u0131', '&inodot;'));
    encodeMap.j2(to('\u222B', '&int;'));
    encodeMap.j2(to('\u22BA', '&intcal;'));
    encodeMap.j2(to('\u2124', '&integers;'));
    encodeMap.j2(to('\u22BA', '&intercal;'));
    encodeMap.j2(to('\u2A17', '&intlarhk;'));
    encodeMap.j2(to('\u2A3C', '&intprod;'));
    encodeMap.j2(to('\u0451', '&iocy;'));
    encodeMap.j2(to('\u012F', '&iogon;'));
    encodeMap.j2(to('\uD835\uDD5A', '&iopf;'));
    encodeMap.j2(to('\u03B9', '&iota;'));
    encodeMap.j2(to('\u2A3C', '&iprod;'));
    encodeMap.j2(to('\xBF', '&iquest'));
    encodeMap.j2(to('\xBF', '&iquest;'));
    encodeMap.j2(to('\uD835\uDCBE', '&iscr;'));
    encodeMap.j2(to('\u2208', '&isin;'));
    encodeMap.j2(to('\u22F9', '&isinE;'));
    encodeMap.j2(to('\u22F5', '&isindot;'));
    encodeMap.j2(to('\u22F4', '&isins;'));
    encodeMap.j2(to('\u22F3', '&isinsv;'));
    encodeMap.j2(to('\u2208', '&isinv;'));
    encodeMap.j2(to('\u2062', '&it;'));
    encodeMap.j2(to('\u0129', '&itilde;'));
    encodeMap.j2(to('\u0456', '&iukcy;'));
    encodeMap.j2(to('\xEF', '&iuml'));
    encodeMap.j2(to('\xEF', '&iuml;'));
    encodeMap.j2(to('\u0135', '&jcirc;'));
    encodeMap.j2(to('\u0439', '&jcy;'));
    encodeMap.j2(to('\uD835\uDD27', '&jfr;'));
    encodeMap.j2(to('\u0237', '&jmath;'));
    encodeMap.j2(to('\uD835\uDD5B', '&jopf;'));
    encodeMap.j2(to('\uD835\uDCBF', '&jscr;'));
    encodeMap.j2(to('\u0458', '&jsercy;'));
    encodeMap.j2(to('\u0454', '&jukcy;'));
    encodeMap.j2(to('\u03BA', '&kappa;'));
    encodeMap.j2(to('\u03F0', '&kappav;'));
    encodeMap.j2(to('\u0137', '&kcedil;'));
    encodeMap.j2(to('\u043A', '&kcy;'));
    encodeMap.j2(to('\uD835\uDD28', '&kfr;'));
    encodeMap.j2(to('\u0138', '&kgreen;'));
    encodeMap.j2(to('\u0445', '&khcy;'));
    encodeMap.j2(to('\u045C', '&kjcy;'));
    encodeMap.j2(to('\uD835\uDD5C', '&kopf;'));
    encodeMap.j2(to('\uD835\uDCC0', '&kscr;'));
    encodeMap.j2(to('\u21DA', '&lAarr;'));
    encodeMap.j2(to('\u21D0', '&lArr;'));
    encodeMap.j2(to('\u291B', '&lAtail;'));
    encodeMap.j2(to('\u290E', '&lBarr;'));
    encodeMap.j2(to('\u2266', '&lE;'));
    encodeMap.j2(to('\u2A8B', '&lEg;'));
    encodeMap.j2(to('\u2962', '&lHar;'));
    encodeMap.j2(to('\u013A', '&lacute;'));
    encodeMap.j2(to('\u29B4', '&laemptyv;'));
    encodeMap.j2(to('\u2112', '&lagran;'));
    encodeMap.j2(to('\u03BB', '&lambda;'));
    encodeMap.j2(to('\u27E8', '&lang;'));
    encodeMap.j2(to('\u2991', '&langd;'));
    encodeMap.j2(to('\u27E8', '&langle;'));
    encodeMap.j2(to('\u2A85', '&lap;'));
    encodeMap.j2(to('\xAB', '&laquo'));
    encodeMap.j2(to('\xAB', '&laquo;'));
    encodeMap.j2(to('\u2190', '&larr;'));
    encodeMap.j2(to('\u21E4', '&larrb;'));
    encodeMap.j2(to('\u291F', '&larrbfs;'));
    encodeMap.j2(to('\u291D', '&larrfs;'));
    encodeMap.j2(to('\u21A9', '&larrhk;'));
    encodeMap.j2(to('\u21AB', '&larrlp;'));
    encodeMap.j2(to('\u2939', '&larrpl;'));
    encodeMap.j2(to('\u2973', '&larrsim;'));
    encodeMap.j2(to('\u21A2', '&larrtl;'));
    encodeMap.j2(to('\u2AAB', '&lat;'));
    encodeMap.j2(to('\u2919', '&latail;'));
    encodeMap.j2(to('\u2AAD', '&late;'));
    encodeMap.j2(to('\u2AAD\uFE00', '&lates;'));
    encodeMap.j2(to('\u290C', '&lbarr;'));
    encodeMap.j2(to('\u2772', '&lbbrk;'));
    encodeMap.j2(to('{', '&lbrace;'));
    encodeMap.j2(to('[', '&lbrack;'));
    encodeMap.j2(to('\u298B', '&lbrke;'));
    encodeMap.j2(to('\u298F', '&lbrksld;'));
    encodeMap.j2(to('\u298D', '&lbrkslu;'));
    encodeMap.j2(to('\u013E', '&lcaron;'));
    encodeMap.j2(to('\u013C', '&lcedil;'));
    encodeMap.j2(to('\u2308', '&lceil;'));
    encodeMap.j2(to('{', '&lcub;'));
    encodeMap.j2(to('\u043B', '&lcy;'));
    encodeMap.j2(to('\u2936', '&ldca;'));
    encodeMap.j2(to('\u201C', '&ldquo;'));
    encodeMap.j2(to('\u201E', '&ldquor;'));
    encodeMap.j2(to('\u2967', '&ldrdhar;'));
    encodeMap.j2(to('\u294B', '&ldrushar;'));
    encodeMap.j2(to('\u21B2', '&ldsh;'));
    encodeMap.j2(to('\u2264', '&le;'));
    encodeMap.j2(to('\u2190', '&leftarrow;'));
    encodeMap.j2(to('\u21A2', '&leftarrowtail;'));
    encodeMap.j2(to('\u21BD', '&leftharpoondown;'));
    encodeMap.j2(to('\u21BC', '&leftharpoonup;'));
    encodeMap.j2(to('\u21C7', '&leftleftarrows;'));
    encodeMap.j2(to('\u2194', '&leftrightarrow;'));
    encodeMap.j2(to('\u21C6', '&leftrightarrows;'));
    encodeMap.j2(to('\u21CB', '&leftrightharpoons;'));
    encodeMap.j2(to('\u21AD', '&leftrightsquigarrow;'));
    encodeMap.j2(to('\u22CB', '&leftthreetimes;'));
    encodeMap.j2(to('\u22DA', '&leg;'));
    encodeMap.j2(to('\u2264', '&leq;'));
    encodeMap.j2(to('\u2266', '&leqq;'));
    encodeMap.j2(to('\u2A7D', '&leqslant;'));
    encodeMap.j2(to('\u2A7D', '&les;'));
    encodeMap.j2(to('\u2AA8', '&lescc;'));
    encodeMap.j2(to('\u2A7F', '&lesdot;'));
    encodeMap.j2(to('\u2A81', '&lesdoto;'));
    encodeMap.j2(to('\u2A83', '&lesdotor;'));
    encodeMap.j2(to('\u22DA\uFE00', '&lesg;'));
    encodeMap.j2(to('\u2A93', '&lesges;'));
    encodeMap.j2(to('\u2A85', '&lessapprox;'));
    encodeMap.j2(to('\u22D6', '&lessdot;'));
    encodeMap.j2(to('\u22DA', '&lesseqgtr;'));
    encodeMap.j2(to('\u2A8B', '&lesseqqgtr;'));
    encodeMap.j2(to('\u2276', '&lessgtr;'));
    encodeMap.j2(to('\u2272', '&lesssim;'));
    encodeMap.j2(to('\u297C', '&lfisht;'));
    encodeMap.j2(to('\u230A', '&lfloor;'));
    encodeMap.j2(to('\uD835\uDD29', '&lfr;'));
    encodeMap.j2(to('\u2276', '&lg;'));
    encodeMap.j2(to('\u2A91', '&lgE;'));
    encodeMap.j2(to('\u21BD', '&lhard;'));
    encodeMap.j2(to('\u21BC', '&lharu;'));
    encodeMap.j2(to('\u296A', '&lharul;'));
    encodeMap.j2(to('\u2584', '&lhblk;'));
    encodeMap.j2(to('\u0459', '&ljcy;'));
    encodeMap.j2(to('\u226A', '&ll;'));
    encodeMap.j2(to('\u21C7', '&llarr;'));
    encodeMap.j2(to('\u231E', '&llcorner;'));
    encodeMap.j2(to('\u296B', '&llhard;'));
    encodeMap.j2(to('\u25FA', '&lltri;'));
    encodeMap.j2(to('\u0140', '&lmidot;'));
    encodeMap.j2(to('\u23B0', '&lmoust;'));
    encodeMap.j2(to('\u23B0', '&lmoustache;'));
    encodeMap.j2(to('\u2268', '&lnE;'));
    encodeMap.j2(to('\u2A89', '&lnap;'));
    encodeMap.j2(to('\u2A89', '&lnapprox;'));
    encodeMap.j2(to('\u2A87', '&lne;'));
    encodeMap.j2(to('\u2A87', '&lneq;'));
    encodeMap.j2(to('\u2268', '&lneqq;'));
    encodeMap.j2(to('\u22E6', '&lnsim;'));
    encodeMap.j2(to('\u27EC', '&loang;'));
    encodeMap.j2(to('\u21FD', '&loarr;'));
    encodeMap.j2(to('\u27E6', '&lobrk;'));
    encodeMap.j2(to('\u27F5', '&longleftarrow;'));
    encodeMap.j2(to('\u27F7', '&longleftrightarrow;'));
    encodeMap.j2(to('\u27FC', '&longmapsto;'));
    encodeMap.j2(to('\u27F6', '&longrightarrow;'));
    encodeMap.j2(to('\u21AB', '&looparrowleft;'));
    encodeMap.j2(to('\u21AC', '&looparrowright;'));
    encodeMap.j2(to('\u2985', '&lopar;'));
    encodeMap.j2(to('\uD835\uDD5D', '&lopf;'));
    encodeMap.j2(to('\u2A2D', '&loplus;'));
    encodeMap.j2(to('\u2A34', '&lotimes;'));
    encodeMap.j2(to('\u2217', '&lowast;'));
    encodeMap.j2(to('_', '&lowbar;'));
    encodeMap.j2(to('\u25CA', '&loz;'));
    encodeMap.j2(to('\u25CA', '&lozenge;'));
    encodeMap.j2(to('\u29EB', '&lozf;'));
    encodeMap.j2(to('(', '&lpar;'));
    encodeMap.j2(to('\u2993', '&lparlt;'));
    encodeMap.j2(to('\u21C6', '&lrarr;'));
    encodeMap.j2(to('\u231F', '&lrcorner;'));
    encodeMap.j2(to('\u21CB', '&lrhar;'));
    encodeMap.j2(to('\u296D', '&lrhard;'));
    encodeMap.j2(to('\u200E', '&lrm;'));
    encodeMap.j2(to('\u22BF', '&lrtri;'));
    encodeMap.j2(to('\u2039', '&lsaquo;'));
    encodeMap.j2(to('\uD835\uDCC1', '&lscr;'));
    encodeMap.j2(to('\u21B0', '&lsh;'));
    encodeMap.j2(to('\u2272', '&lsim;'));
    encodeMap.j2(to('\u2A8D', '&lsime;'));
    encodeMap.j2(to('\u2A8F', '&lsimg;'));
    encodeMap.j2(to('[', '&lsqb;'));
    encodeMap.j2(to('\u2018', '&lsquo;'));
    encodeMap.j2(to('\u201A', '&lsquor;'));
    encodeMap.j2(to('\u0142', '&lstrok;'));
    encodeMap.j2(to('<', '&lt'));
    encodeMap.j2(to('<', '&lt;'));
    encodeMap.j2(to('\u2AA6', '&ltcc;'));
    encodeMap.j2(to('\u2A79', '&ltcir;'));
    encodeMap.j2(to('\u22D6', '&ltdot;'));
    encodeMap.j2(to('\u22CB', '&lthree;'));
    encodeMap.j2(to('\u22C9', '&ltimes;'));
    encodeMap.j2(to('\u2976', '&ltlarr;'));
    encodeMap.j2(to('\u2A7B', '&ltquest;'));
    encodeMap.j2(to('\u2996', '&ltrPar;'));
    encodeMap.j2(to('\u25C3', '&ltri;'));
    encodeMap.j2(to('\u22B4', '&ltrie;'));
    encodeMap.j2(to('\u25C2', '&ltrif;'));
    encodeMap.j2(to('\u294A', '&lurdshar;'));
    encodeMap.j2(to('\u2966', '&luruhar;'));
    encodeMap.j2(to('\u2268\uFE00', '&lvertneqq;'));
    encodeMap.j2(to('\u2268\uFE00', '&lvnE;'));
    encodeMap.j2(to('\u223A', '&mDDot;'));
    encodeMap.j2(to('\xAF', '&macr'));
    encodeMap.j2(to('\xAF', '&macr;'));
    encodeMap.j2(to('\u2642', '&male;'));
    encodeMap.j2(to('\u2720', '&malt;'));
    encodeMap.j2(to('\u2720', '&maltese;'));
    encodeMap.j2(to('\u21A6', '&map;'));
    encodeMap.j2(to('\u21A6', '&mapsto;'));
    encodeMap.j2(to('\u21A7', '&mapstodown;'));
    encodeMap.j2(to('\u21A4', '&mapstoleft;'));
    encodeMap.j2(to('\u21A5', '&mapstoup;'));
    encodeMap.j2(to('\u25AE', '&marker;'));
    encodeMap.j2(to('\u2A29', '&mcomma;'));
    encodeMap.j2(to('\u043C', '&mcy;'));
    encodeMap.j2(to('\u2014', '&mdash;'));
    encodeMap.j2(to('\u2221', '&measuredangle;'));
    encodeMap.j2(to('\uD835\uDD2A', '&mfr;'));
    encodeMap.j2(to('\u2127', '&mho;'));
    encodeMap.j2(to('\xB5', '&micro'));
    encodeMap.j2(to('\xB5', '&micro;'));
    encodeMap.j2(to('\u2223', '&mid;'));
    encodeMap.j2(to('*', '&midast;'));
    encodeMap.j2(to('\u2AF0', '&midcir;'));
    encodeMap.j2(to('\xB7', '&middot'));
    encodeMap.j2(to('\xB7', '&middot;'));
    encodeMap.j2(to('\u2212', '&minus;'));
    encodeMap.j2(to('\u229F', '&minusb;'));
    encodeMap.j2(to('\u2238', '&minusd;'));
    encodeMap.j2(to('\u2A2A', '&minusdu;'));
    encodeMap.j2(to('\u2ADB', '&mlcp;'));
    encodeMap.j2(to('\u2026', '&mldr;'));
    encodeMap.j2(to('\u2213', '&mnplus;'));
    encodeMap.j2(to('\u22A7', '&models;'));
    encodeMap.j2(to('\uD835\uDD5E', '&mopf;'));
    encodeMap.j2(to('\u2213', '&mp;'));
    encodeMap.j2(to('\uD835\uDCC2', '&mscr;'));
    encodeMap.j2(to('\u223E', '&mstpos;'));
    encodeMap.j2(to('\u03BC', '&mu;'));
    encodeMap.j2(to('\u22B8', '&multimap;'));
    encodeMap.j2(to('\u22B8', '&mumap;'));
    encodeMap.j2(to('\u22D9\u0338', '&nGg;'));
    encodeMap.j2(to('\u226B\u20D2', '&nGt;'));
    encodeMap.j2(to('\u226B\u0338', '&nGtv;'));
    encodeMap.j2(to('\u21CD', '&nLeftarrow;'));
    encodeMap.j2(to('\u21CE', '&nLeftrightarrow;'));
    encodeMap.j2(to('\u22D8\u0338', '&nLl;'));
    encodeMap.j2(to('\u226A\u20D2', '&nLt;'));
    encodeMap.j2(to('\u226A\u0338', '&nLtv;'));
    encodeMap.j2(to('\u21CF', '&nRightarrow;'));
    encodeMap.j2(to('\u22AF', '&nVDash;'));
    encodeMap.j2(to('\u22AE', '&nVdash;'));
    encodeMap.j2(to('\u2207', '&nabla;'));
    encodeMap.j2(to('\u0144', '&nacute;'));
    encodeMap.j2(to('\u2220\u20D2', '&nang;'));
    encodeMap.j2(to('\u2249', '&nap;'));
    encodeMap.j2(to('\u2A70\u0338', '&napE;'));
    encodeMap.j2(to('\u224B\u0338', '&napid;'));
    encodeMap.j2(to('\u0149', '&napos;'));
    encodeMap.j2(to('\u2249', '&napprox;'));
    encodeMap.j2(to('\u266E', '&natur;'));
    encodeMap.j2(to('\u266E', '&natural;'));
    encodeMap.j2(to('\u2115', '&naturals;'));
    encodeMap.j2(to('\xA0', '&nbsp'));
    encodeMap.j2(to('\xA0', '&nbsp;'));
    encodeMap.j2(to('\u224E\u0338', '&nbump;'));
    encodeMap.j2(to('\u224F\u0338', '&nbumpe;'));
    encodeMap.j2(to('\u2A43', '&ncap;'));
    encodeMap.j2(to('\u0148', '&ncaron;'));
    encodeMap.j2(to('\u0146', '&ncedil;'));
    encodeMap.j2(to('\u2247', '&ncong;'));
    encodeMap.j2(to('\u2A6D\u0338', '&ncongdot;'));
    encodeMap.j2(to('\u2A42', '&ncup;'));
    encodeMap.j2(to('\u043D', '&ncy;'));
    encodeMap.j2(to('\u2013', '&ndash;'));
    encodeMap.j2(to('\u2260', '&ne;'));
    encodeMap.j2(to('\u21D7', '&neArr;'));
    encodeMap.j2(to('\u2924', '&nearhk;'));
    encodeMap.j2(to('\u2197', '&nearr;'));
    encodeMap.j2(to('\u2197', '&nearrow;'));
    encodeMap.j2(to('\u2250\u0338', '&nedot;'));
    encodeMap.j2(to('\u2262', '&nequiv;'));
    encodeMap.j2(to('\u2928', '&nesear;'));
    encodeMap.j2(to('\u2242\u0338', '&nesim;'));
    encodeMap.j2(to('\u2204', '&nexist;'));
    encodeMap.j2(to('\u2204', '&nexists;'));
    encodeMap.j2(to('\uD835\uDD2B', '&nfr;'));
    encodeMap.j2(to('\u2267\u0338', '&ngE;'));
    encodeMap.j2(to('\u2271', '&nge;'));
    encodeMap.j2(to('\u2271', '&ngeq;'));
    encodeMap.j2(to('\u2267\u0338', '&ngeqq;'));
    encodeMap.j2(to('\u2A7E\u0338', '&ngeqslant;'));
    encodeMap.j2(to('\u2A7E\u0338', '&nges;'));
    encodeMap.j2(to('\u2275', '&ngsim;'));
    encodeMap.j2(to('\u226F', '&ngt;'));
    encodeMap.j2(to('\u226F', '&ngtr;'));
    encodeMap.j2(to('\u21CE', '&nhArr;'));
    encodeMap.j2(to('\u21AE', '&nharr;'));
    encodeMap.j2(to('\u2AF2', '&nhpar;'));
    encodeMap.j2(to('\u220B', '&ni;'));
    encodeMap.j2(to('\u22FC', '&nis;'));
    encodeMap.j2(to('\u22FA', '&nisd;'));
    encodeMap.j2(to('\u220B', '&niv;'));
    encodeMap.j2(to('\u045A', '&njcy;'));
    encodeMap.j2(to('\u21CD', '&nlArr;'));
    encodeMap.j2(to('\u2266\u0338', '&nlE;'));
    encodeMap.j2(to('\u219A', '&nlarr;'));
    encodeMap.j2(to('\u2025', '&nldr;'));
    encodeMap.j2(to('\u2270', '&nle;'));
    encodeMap.j2(to('\u219A', '&nleftarrow;'));
    encodeMap.j2(to('\u21AE', '&nleftrightarrow;'));
    encodeMap.j2(to('\u2270', '&nleq;'));
    encodeMap.j2(to('\u2266\u0338', '&nleqq;'));
    encodeMap.j2(to('\u2A7D\u0338', '&nleqslant;'));
    encodeMap.j2(to('\u2A7D\u0338', '&nles;'));
    encodeMap.j2(to('\u226E', '&nless;'));
    encodeMap.j2(to('\u2274', '&nlsim;'));
    encodeMap.j2(to('\u226E', '&nlt;'));
    encodeMap.j2(to('\u22EA', '&nltri;'));
    encodeMap.j2(to('\u22EC', '&nltrie;'));
    encodeMap.j2(to('\u2224', '&nmid;'));
    encodeMap.j2(to('\uD835\uDD5F', '&nopf;'));
    encodeMap.j2(to('\xAC', '&not'));
    encodeMap.j2(to('\xAC', '&not;'));
    encodeMap.j2(to('\u2209', '&notin;'));
    encodeMap.j2(to('\u22F9\u0338', '&notinE;'));
    encodeMap.j2(to('\u22F5\u0338', '&notindot;'));
    encodeMap.j2(to('\u2209', '&notinva;'));
    encodeMap.j2(to('\u22F7', '&notinvb;'));
    encodeMap.j2(to('\u22F6', '&notinvc;'));
    encodeMap.j2(to('\u220C', '&notni;'));
    encodeMap.j2(to('\u220C', '&notniva;'));
    encodeMap.j2(to('\u22FE', '&notnivb;'));
    encodeMap.j2(to('\u22FD', '&notnivc;'));
    encodeMap.j2(to('\u2226', '&npar;'));
    encodeMap.j2(to('\u2226', '&nparallel;'));
    encodeMap.j2(to('\u2AFD\u20E5', '&nparsl;'));
    encodeMap.j2(to('\u2202\u0338', '&npart;'));
    encodeMap.j2(to('\u2A14', '&npolint;'));
    encodeMap.j2(to('\u2280', '&npr;'));
    encodeMap.j2(to('\u22E0', '&nprcue;'));
    encodeMap.j2(to('\u2AAF\u0338', '&npre;'));
    encodeMap.j2(to('\u2280', '&nprec;'));
    encodeMap.j2(to('\u2AAF\u0338', '&npreceq;'));
    encodeMap.j2(to('\u21CF', '&nrArr;'));
    encodeMap.j2(to('\u219B', '&nrarr;'));
    encodeMap.j2(to('\u2933\u0338', '&nrarrc;'));
    encodeMap.j2(to('\u219D\u0338', '&nrarrw;'));
    encodeMap.j2(to('\u219B', '&nrightarrow;'));
    encodeMap.j2(to('\u22EB', '&nrtri;'));
    encodeMap.j2(to('\u22ED', '&nrtrie;'));
    encodeMap.j2(to('\u2281', '&nsc;'));
    encodeMap.j2(to('\u22E1', '&nsccue;'));
    encodeMap.j2(to('\u2AB0\u0338', '&nsce;'));
    encodeMap.j2(to('\uD835\uDCC3', '&nscr;'));
    encodeMap.j2(to('\u2224', '&nshortmid;'));
    encodeMap.j2(to('\u2226', '&nshortparallel;'));
    encodeMap.j2(to('\u2241', '&nsim;'));
    encodeMap.j2(to('\u2244', '&nsime;'));
    encodeMap.j2(to('\u2244', '&nsimeq;'));
    encodeMap.j2(to('\u2224', '&nsmid;'));
    encodeMap.j2(to('\u2226', '&nspar;'));
    encodeMap.j2(to('\u22E2', '&nsqsube;'));
    encodeMap.j2(to('\u22E3', '&nsqsupe;'));
    encodeMap.j2(to('\u2284', '&nsub;'));
    encodeMap.j2(to('\u2AC5\u0338', '&nsubE;'));
    encodeMap.j2(to('\u2288', '&nsube;'));
    encodeMap.j2(to('\u2282\u20D2', '&nsubset;'));
    encodeMap.j2(to('\u2288', '&nsubseteq;'));
    encodeMap.j2(to('\u2AC5\u0338', '&nsubseteqq;'));
    encodeMap.j2(to('\u2281', '&nsucc;'));
    encodeMap.j2(to('\u2AB0\u0338', '&nsucceq;'));
    encodeMap.j2(to('\u2285', '&nsup;'));
    encodeMap.j2(to('\u2AC6\u0338', '&nsupE;'));
    encodeMap.j2(to('\u2289', '&nsupe;'));
    encodeMap.j2(to('\u2283\u20D2', '&nsupset;'));
    encodeMap.j2(to('\u2289', '&nsupseteq;'));
    encodeMap.j2(to('\u2AC6\u0338', '&nsupseteqq;'));
    encodeMap.j2(to('\u2279', '&ntgl;'));
    encodeMap.j2(to('\xF1', '&ntilde'));
    encodeMap.j2(to('\xF1', '&ntilde;'));
    encodeMap.j2(to('\u2278', '&ntlg;'));
    encodeMap.j2(to('\u22EA', '&ntriangleleft;'));
    encodeMap.j2(to('\u22EC', '&ntrianglelefteq;'));
    encodeMap.j2(to('\u22EB', '&ntriangleright;'));
    encodeMap.j2(to('\u22ED', '&ntrianglerighteq;'));
    encodeMap.j2(to('\u03BD', '&nu;'));
    encodeMap.j2(to('#', '&num;'));
    encodeMap.j2(to('\u2116', '&numero;'));
    encodeMap.j2(to('\u2007', '&numsp;'));
    encodeMap.j2(to('\u22AD', '&nvDash;'));
    encodeMap.j2(to('\u2904', '&nvHarr;'));
    encodeMap.j2(to('\u224D\u20D2', '&nvap;'));
    encodeMap.j2(to('\u22AC', '&nvdash;'));
    encodeMap.j2(to('\u2265\u20D2', '&nvge;'));
    encodeMap.j2(to('>\u20D2', '&nvgt;'));
    encodeMap.j2(to('\u29DE', '&nvinfin;'));
    encodeMap.j2(to('\u2902', '&nvlArr;'));
    encodeMap.j2(to('\u2264\u20D2', '&nvle;'));
    encodeMap.j2(to('<\u20D2', '&nvlt;'));
    encodeMap.j2(to('\u22B4\u20D2', '&nvltrie;'));
    encodeMap.j2(to('\u2903', '&nvrArr;'));
    encodeMap.j2(to('\u22B5\u20D2', '&nvrtrie;'));
    encodeMap.j2(to('\u223C\u20D2', '&nvsim;'));
    encodeMap.j2(to('\u21D6', '&nwArr;'));
    encodeMap.j2(to('\u2923', '&nwarhk;'));
    encodeMap.j2(to('\u2196', '&nwarr;'));
    encodeMap.j2(to('\u2196', '&nwarrow;'));
    encodeMap.j2(to('\u2927', '&nwnear;'));
    encodeMap.j2(to('\u24C8', '&oS;'));
    encodeMap.j2(to('\xF3', '&oacute'));
    encodeMap.j2(to('\xF3', '&oacute;'));
    encodeMap.j2(to('\u229B', '&oast;'));
    encodeMap.j2(to('\u229A', '&ocir;'));
    encodeMap.j2(to('\xF4', '&ocirc'));
    encodeMap.j2(to('\xF4', '&ocirc;'));
    encodeMap.j2(to('\u043E', '&ocy;'));
    encodeMap.j2(to('\u229D', '&odash;'));
    encodeMap.j2(to('\u0151', '&odblac;'));
    encodeMap.j2(to('\u2A38', '&odiv;'));
    encodeMap.j2(to('\u2299', '&odot;'));
    encodeMap.j2(to('\u29BC', '&odsold;'));
    encodeMap.j2(to('\u0153', '&oelig;'));
    encodeMap.j2(to('\u29BF', '&ofcir;'));
    encodeMap.j2(to('\uD835\uDD2C', '&ofr;'));
    encodeMap.j2(to('\u02DB', '&ogon;'));
    encodeMap.j2(to('\xF2', '&ograve'));
    encodeMap.j2(to('\xF2', '&ograve;'));
    encodeMap.j2(to('\u29C1', '&ogt;'));
    encodeMap.j2(to('\u29B5', '&ohbar;'));
    encodeMap.j2(to('\u03A9', '&ohm;'));
    encodeMap.j2(to('\u222E', '&oint;'));
    encodeMap.j2(to('\u21BA', '&olarr;'));
    encodeMap.j2(to('\u29BE', '&olcir;'));
    encodeMap.j2(to('\u29BB', '&olcross;'));
    encodeMap.j2(to('\u203E', '&oline;'));
    encodeMap.j2(to('\u29C0', '&olt;'));
    encodeMap.j2(to('\u014D', '&omacr;'));
    encodeMap.j2(to('\u03C9', '&omega;'));
    encodeMap.j2(to('\u03BF', '&omicron;'));
    encodeMap.j2(to('\u29B6', '&omid;'));
    encodeMap.j2(to('\u2296', '&ominus;'));
    encodeMap.j2(to('\uD835\uDD60', '&oopf;'));
    encodeMap.j2(to('\u29B7', '&opar;'));
    encodeMap.j2(to('\u29B9', '&operp;'));
    encodeMap.j2(to('\u2295', '&oplus;'));
    encodeMap.j2(to('\u2228', '&or;'));
    encodeMap.j2(to('\u21BB', '&orarr;'));
    encodeMap.j2(to('\u2A5D', '&ord;'));
    encodeMap.j2(to('\u2134', '&order;'));
    encodeMap.j2(to('\u2134', '&orderof;'));
    encodeMap.j2(to('\xAA', '&ordf'));
    encodeMap.j2(to('\xAA', '&ordf;'));
    encodeMap.j2(to('\xBA', '&ordm'));
    encodeMap.j2(to('\xBA', '&ordm;'));
    encodeMap.j2(to('\u22B6', '&origof;'));
    encodeMap.j2(to('\u2A56', '&oror;'));
    encodeMap.j2(to('\u2A57', '&orslope;'));
    encodeMap.j2(to('\u2A5B', '&orv;'));
    encodeMap.j2(to('\u2134', '&oscr;'));
    encodeMap.j2(to('\xF8', '&oslash'));
    encodeMap.j2(to('\xF8', '&oslash;'));
    encodeMap.j2(to('\u2298', '&osol;'));
    encodeMap.j2(to('\xF5', '&otilde'));
    encodeMap.j2(to('\xF5', '&otilde;'));
    encodeMap.j2(to('\u2297', '&otimes;'));
    encodeMap.j2(to('\u2A36', '&otimesas;'));
    encodeMap.j2(to('\xF6', '&ouml'));
    encodeMap.j2(to('\xF6', '&ouml;'));
    encodeMap.j2(to('\u233D', '&ovbar;'));
    encodeMap.j2(to('\u2225', '&par;'));
    encodeMap.j2(to('\xB6', '&para'));
    encodeMap.j2(to('\xB6', '&para;'));
    encodeMap.j2(to('\u2225', '&parallel;'));
    encodeMap.j2(to('\u2AF3', '&parsim;'));
    encodeMap.j2(to('\u2AFD', '&parsl;'));
    encodeMap.j2(to('\u2202', '&part;'));
    encodeMap.j2(to('\u043F', '&pcy;'));
    encodeMap.j2(to('%', '&percnt;'));
    encodeMap.j2(to('.', '&period;'));
    encodeMap.j2(to('\u2030', '&permil;'));
    encodeMap.j2(to('\u22A5', '&perp;'));
    encodeMap.j2(to('\u2031', '&pertenk;'));
    encodeMap.j2(to('\uD835\uDD2D', '&pfr;'));
    encodeMap.j2(to('\u03C6', '&phi;'));
    encodeMap.j2(to('\u03D5', '&phiv;'));
    encodeMap.j2(to('\u2133', '&phmmat;'));
    encodeMap.j2(to('\u260E', '&phone;'));
    encodeMap.j2(to('\u03C0', '&pi;'));
    encodeMap.j2(to('\u22D4', '&pitchfork;'));
    encodeMap.j2(to('\u03D6', '&piv;'));
    encodeMap.j2(to('\u210F', '&planck;'));
    encodeMap.j2(to('\u210E', '&planckh;'));
    encodeMap.j2(to('\u210F', '&plankv;'));
    encodeMap.j2(to('+', '&plus;'));
    encodeMap.j2(to('\u2A23', '&plusacir;'));
    encodeMap.j2(to('\u229E', '&plusb;'));
    encodeMap.j2(to('\u2A22', '&pluscir;'));
    encodeMap.j2(to('\u2214', '&plusdo;'));
    encodeMap.j2(to('\u2A25', '&plusdu;'));
    encodeMap.j2(to('\u2A72', '&pluse;'));
    encodeMap.j2(to('\xB1', '&plusmn'));
    encodeMap.j2(to('\xB1', '&plusmn;'));
    encodeMap.j2(to('\u2A26', '&plussim;'));
    encodeMap.j2(to('\u2A27', '&plustwo;'));
    encodeMap.j2(to('\xB1', '&pm;'));
    encodeMap.j2(to('\u2A15', '&pointint;'));
    encodeMap.j2(to('\uD835\uDD61', '&popf;'));
    encodeMap.j2(to('\xA3', '&pound'));
    encodeMap.j2(to('\xA3', '&pound;'));
    encodeMap.j2(to('\u227A', '&pr;'));
    encodeMap.j2(to('\u2AB3', '&prE;'));
    encodeMap.j2(to('\u2AB7', '&prap;'));
    encodeMap.j2(to('\u227C', '&prcue;'));
    encodeMap.j2(to('\u2AAF', '&pre;'));
    encodeMap.j2(to('\u227A', '&prec;'));
    encodeMap.j2(to('\u2AB7', '&precapprox;'));
    encodeMap.j2(to('\u227C', '&preccurlyeq;'));
    encodeMap.j2(to('\u2AAF', '&preceq;'));
    encodeMap.j2(to('\u2AB9', '&precnapprox;'));
    encodeMap.j2(to('\u2AB5', '&precneqq;'));
    encodeMap.j2(to('\u22E8', '&precnsim;'));
    encodeMap.j2(to('\u227E', '&precsim;'));
    encodeMap.j2(to('\u2032', '&prime;'));
    encodeMap.j2(to('\u2119', '&primes;'));
    encodeMap.j2(to('\u2AB5', '&prnE;'));
    encodeMap.j2(to('\u2AB9', '&prnap;'));
    encodeMap.j2(to('\u22E8', '&prnsim;'));
    encodeMap.j2(to('\u220F', '&prod;'));
    encodeMap.j2(to('\u232E', '&profalar;'));
    encodeMap.j2(to('\u2312', '&profline;'));
    encodeMap.j2(to('\u2313', '&profsurf;'));
    encodeMap.j2(to('\u221D', '&prop;'));
    encodeMap.j2(to('\u221D', '&propto;'));
    encodeMap.j2(to('\u227E', '&prsim;'));
    encodeMap.j2(to('\u22B0', '&prurel;'));
    encodeMap.j2(to('\uD835\uDCC5', '&pscr;'));
    encodeMap.j2(to('\u03C8', '&psi;'));
    encodeMap.j2(to('\u2008', '&puncsp;'));
    encodeMap.j2(to('\uD835\uDD2E', '&qfr;'));
    encodeMap.j2(to('\u2A0C', '&qint;'));
    encodeMap.j2(to('\uD835\uDD62', '&qopf;'));
    encodeMap.j2(to('\u2057', '&qprime;'));
    encodeMap.j2(to('\uD835\uDCC6', '&qscr;'));
    encodeMap.j2(to('\u210D', '&quaternions;'));
    encodeMap.j2(to('\u2A16', '&quatint;'));
    encodeMap.j2(to('?', '&quest;'));
    encodeMap.j2(to('\u225F', '&questeq;'));
    encodeMap.j2(to('"', '&quot'));
    encodeMap.j2(to('"', '&quot;'));
    encodeMap.j2(to('\u21DB', '&rAarr;'));
    encodeMap.j2(to('\u21D2', '&rArr;'));
    encodeMap.j2(to('\u291C', '&rAtail;'));
    encodeMap.j2(to('\u290F', '&rBarr;'));
    encodeMap.j2(to('\u2964', '&rHar;'));
    encodeMap.j2(to('\u223D\u0331', '&race;'));
    encodeMap.j2(to('\u0155', '&racute;'));
    encodeMap.j2(to('\u221A', '&radic;'));
    encodeMap.j2(to('\u29B3', '&raemptyv;'));
    encodeMap.j2(to('\u27E9', '&rang;'));
    encodeMap.j2(to('\u2992', '&rangd;'));
    encodeMap.j2(to('\u29A5', '&range;'));
    encodeMap.j2(to('\u27E9', '&rangle;'));
    encodeMap.j2(to('\xBB', '&raquo'));
    encodeMap.j2(to('\xBB', '&raquo;'));
    encodeMap.j2(to('\u2192', '&rarr;'));
    encodeMap.j2(to('\u2975', '&rarrap;'));
    encodeMap.j2(to('\u21E5', '&rarrb;'));
    encodeMap.j2(to('\u2920', '&rarrbfs;'));
    encodeMap.j2(to('\u2933', '&rarrc;'));
    encodeMap.j2(to('\u291E', '&rarrfs;'));
    encodeMap.j2(to('\u21AA', '&rarrhk;'));
    encodeMap.j2(to('\u21AC', '&rarrlp;'));
    encodeMap.j2(to('\u2945', '&rarrpl;'));
    encodeMap.j2(to('\u2974', '&rarrsim;'));
    encodeMap.j2(to('\u21A3', '&rarrtl;'));
    encodeMap.j2(to('\u219D', '&rarrw;'));
    encodeMap.j2(to('\u291A', '&ratail;'));
    encodeMap.j2(to('\u2236', '&ratio;'));
    encodeMap.j2(to('\u211A', '&rationals;'));
    encodeMap.j2(to('\u290D', '&rbarr;'));
    encodeMap.j2(to('\u2773', '&rbbrk;'));
    encodeMap.j2(to('}', '&rbrace;'));
    encodeMap.j2(to(']', '&rbrack;'));
    encodeMap.j2(to('\u298C', '&rbrke;'));
    encodeMap.j2(to('\u298E', '&rbrksld;'));
    encodeMap.j2(to('\u2990', '&rbrkslu;'));
    encodeMap.j2(to('\u0159', '&rcaron;'));
    encodeMap.j2(to('\u0157', '&rcedil;'));
    encodeMap.j2(to('\u2309', '&rceil;'));
    encodeMap.j2(to('}', '&rcub;'));
    encodeMap.j2(to('\u0440', '&rcy;'));
    encodeMap.j2(to('\u2937', '&rdca;'));
    encodeMap.j2(to('\u2969', '&rdldhar;'));
    encodeMap.j2(to('\u201D', '&rdquo;'));
    encodeMap.j2(to('\u201D', '&rdquor;'));
    encodeMap.j2(to('\u21B3', '&rdsh;'));
    encodeMap.j2(to('\u211C', '&real;'));
    encodeMap.j2(to('\u211B', '&realine;'));
    encodeMap.j2(to('\u211C', '&realpart;'));
    encodeMap.j2(to('\u211D', '&reals;'));
    encodeMap.j2(to('\u25AD', '&rect;'));
    encodeMap.j2(to('\xAE', '&reg'));
    encodeMap.j2(to('\xAE', '&reg;'));
    encodeMap.j2(to('\u297D', '&rfisht;'));
    encodeMap.j2(to('\u230B', '&rfloor;'));
    encodeMap.j2(to('\uD835\uDD2F', '&rfr;'));
    encodeMap.j2(to('\u21C1', '&rhard;'));
    encodeMap.j2(to('\u21C0', '&rharu;'));
    encodeMap.j2(to('\u296C', '&rharul;'));
    encodeMap.j2(to('\u03C1', '&rho;'));
    encodeMap.j2(to('\u03F1', '&rhov;'));
    encodeMap.j2(to('\u2192', '&rightarrow;'));
    encodeMap.j2(to('\u21A3', '&rightarrowtail;'));
    encodeMap.j2(to('\u21C1', '&rightharpoondown;'));
    encodeMap.j2(to('\u21C0', '&rightharpoonup;'));
    encodeMap.j2(to('\u21C4', '&rightleftarrows;'));
    encodeMap.j2(to('\u21CC', '&rightleftharpoons;'));
    encodeMap.j2(to('\u21C9', '&rightrightarrows;'));
    encodeMap.j2(to('\u219D', '&rightsquigarrow;'));
    encodeMap.j2(to('\u22CC', '&rightthreetimes;'));
    encodeMap.j2(to('\u02DA', '&ring;'));
    encodeMap.j2(to('\u2253', '&risingdotseq;'));
    encodeMap.j2(to('\u21C4', '&rlarr;'));
    encodeMap.j2(to('\u21CC', '&rlhar;'));
    encodeMap.j2(to('\u200F', '&rlm;'));
    encodeMap.j2(to('\u23B1', '&rmoust;'));
    encodeMap.j2(to('\u23B1', '&rmoustache;'));
    encodeMap.j2(to('\u2AEE', '&rnmid;'));
    encodeMap.j2(to('\u27ED', '&roang;'));
    encodeMap.j2(to('\u21FE', '&roarr;'));
    encodeMap.j2(to('\u27E7', '&robrk;'));
    encodeMap.j2(to('\u2986', '&ropar;'));
    encodeMap.j2(to('\uD835\uDD63', '&ropf;'));
    encodeMap.j2(to('\u2A2E', '&roplus;'));
    encodeMap.j2(to('\u2A35', '&rotimes;'));
    encodeMap.j2(to(')', '&rpar;'));
    encodeMap.j2(to('\u2994', '&rpargt;'));
    encodeMap.j2(to('\u2A12', '&rppolint;'));
    encodeMap.j2(to('\u21C9', '&rrarr;'));
    encodeMap.j2(to('\u203A', '&rsaquo;'));
    encodeMap.j2(to('\uD835\uDCC7', '&rscr;'));
    encodeMap.j2(to('\u21B1', '&rsh;'));
    encodeMap.j2(to(']', '&rsqb;'));
    encodeMap.j2(to('\u2019', '&rsquo;'));
    encodeMap.j2(to('\u2019', '&rsquor;'));
    encodeMap.j2(to('\u22CC', '&rthree;'));
    encodeMap.j2(to('\u22CA', '&rtimes;'));
    encodeMap.j2(to('\u25B9', '&rtri;'));
    encodeMap.j2(to('\u22B5', '&rtrie;'));
    encodeMap.j2(to('\u25B8', '&rtrif;'));
    encodeMap.j2(to('\u29CE', '&rtriltri;'));
    encodeMap.j2(to('\u2968', '&ruluhar;'));
    encodeMap.j2(to('\u211E', '&rx;'));
    encodeMap.j2(to('\u015B', '&sacute;'));
    encodeMap.j2(to('\u201A', '&sbquo;'));
    encodeMap.j2(to('\u227B', '&sc;'));
    encodeMap.j2(to('\u2AB4', '&scE;'));
    encodeMap.j2(to('\u2AB8', '&scap;'));
    encodeMap.j2(to('\u0161', '&scaron;'));
    encodeMap.j2(to('\u227D', '&sccue;'));
    encodeMap.j2(to('\u2AB0', '&sce;'));
    encodeMap.j2(to('\u015F', '&scedil;'));
    encodeMap.j2(to('\u015D', '&scirc;'));
    encodeMap.j2(to('\u2AB6', '&scnE;'));
    encodeMap.j2(to('\u2ABA', '&scnap;'));
    encodeMap.j2(to('\u22E9', '&scnsim;'));
    encodeMap.j2(to('\u2A13', '&scpolint;'));
    encodeMap.j2(to('\u227F', '&scsim;'));
    encodeMap.j2(to('\u0441', '&scy;'));
    encodeMap.j2(to('\u22C5', '&sdot;'));
    encodeMap.j2(to('\u22A1', '&sdotb;'));
    encodeMap.j2(to('\u2A66', '&sdote;'));
    encodeMap.j2(to('\u21D8', '&seArr;'));
    encodeMap.j2(to('\u2925', '&searhk;'));
    encodeMap.j2(to('\u2198', '&searr;'));
    encodeMap.j2(to('\u2198', '&searrow;'));
    encodeMap.j2(to('\xA7', '&sect'));
    encodeMap.j2(to('\xA7', '&sect;'));
    encodeMap.j2(to(';', '&semi;'));
    encodeMap.j2(to('\u2929', '&seswar;'));
    encodeMap.j2(to('\u2216', '&setminus;'));
    encodeMap.j2(to('\u2216', '&setmn;'));
    encodeMap.j2(to('\u2736', '&sext;'));
    encodeMap.j2(to('\uD835\uDD30', '&sfr;'));
    encodeMap.j2(to('\u2322', '&sfrown;'));
    encodeMap.j2(to('\u266F', '&sharp;'));
    encodeMap.j2(to('\u0449', '&shchcy;'));
    encodeMap.j2(to('\u0448', '&shcy;'));
    encodeMap.j2(to('\u2223', '&shortmid;'));
    encodeMap.j2(to('\u2225', '&shortparallel;'));
    encodeMap.j2(to('\xAD', '&shy'));
    encodeMap.j2(to('\xAD', '&shy;'));
    encodeMap.j2(to('\u03C3', '&sigma;'));
    encodeMap.j2(to('\u03C2', '&sigmaf;'));
    encodeMap.j2(to('\u03C2', '&sigmav;'));
    encodeMap.j2(to('\u223C', '&sim;'));
    encodeMap.j2(to('\u2A6A', '&simdot;'));
    encodeMap.j2(to('\u2243', '&sime;'));
    encodeMap.j2(to('\u2243', '&simeq;'));
    encodeMap.j2(to('\u2A9E', '&simg;'));
    encodeMap.j2(to('\u2AA0', '&simgE;'));
    encodeMap.j2(to('\u2A9D', '&siml;'));
    encodeMap.j2(to('\u2A9F', '&simlE;'));
    encodeMap.j2(to('\u2246', '&simne;'));
    encodeMap.j2(to('\u2A24', '&simplus;'));
    encodeMap.j2(to('\u2972', '&simrarr;'));
    encodeMap.j2(to('\u2190', '&slarr;'));
    encodeMap.j2(to('\u2216', '&smallsetminus;'));
    encodeMap.j2(to('\u2A33', '&smashp;'));
    encodeMap.j2(to('\u29E4', '&smeparsl;'));
    encodeMap.j2(to('\u2223', '&smid;'));
    encodeMap.j2(to('\u2323', '&smile;'));
    encodeMap.j2(to('\u2AAA', '&smt;'));
    encodeMap.j2(to('\u2AAC', '&smte;'));
    encodeMap.j2(to('\u2AAC\uFE00', '&smtes;'));
    encodeMap.j2(to('\u044C', '&softcy;'));
    encodeMap.j2(to('/', '&sol;'));
    encodeMap.j2(to('\u29C4', '&solb;'));
    encodeMap.j2(to('\u233F', '&solbar;'));
    encodeMap.j2(to('\uD835\uDD64', '&sopf;'));
    encodeMap.j2(to('\u2660', '&spades;'));
    encodeMap.j2(to('\u2660', '&spadesuit;'));
    encodeMap.j2(to('\u2225', '&spar;'));
    encodeMap.j2(to('\u2293', '&sqcap;'));
    encodeMap.j2(to('\u2293\uFE00', '&sqcaps;'));
    encodeMap.j2(to('\u2294', '&sqcup;'));
    encodeMap.j2(to('\u2294\uFE00', '&sqcups;'));
    encodeMap.j2(to('\u228F', '&sqsub;'));
    encodeMap.j2(to('\u2291', '&sqsube;'));
    encodeMap.j2(to('\u228F', '&sqsubset;'));
    encodeMap.j2(to('\u2291', '&sqsubseteq;'));
    encodeMap.j2(to('\u2290', '&sqsup;'));
    encodeMap.j2(to('\u2292', '&sqsupe;'));
    encodeMap.j2(to('\u2290', '&sqsupset;'));
    encodeMap.j2(to('\u2292', '&sqsupseteq;'));
    encodeMap.j2(to('\u25A1', '&squ;'));
    encodeMap.j2(to('\u25A1', '&square;'));
    encodeMap.j2(to('\u25AA', '&squarf;'));
    encodeMap.j2(to('\u25AA', '&squf;'));
    encodeMap.j2(to('\u2192', '&srarr;'));
    encodeMap.j2(to('\uD835\uDCC8', '&sscr;'));
    encodeMap.j2(to('\u2216', '&ssetmn;'));
    encodeMap.j2(to('\u2323', '&ssmile;'));
    encodeMap.j2(to('\u22C6', '&sstarf;'));
    encodeMap.j2(to('\u2606', '&star;'));
    encodeMap.j2(to('\u2605', '&starf;'));
    encodeMap.j2(to('\u03F5', '&straightepsilon;'));
    encodeMap.j2(to('\u03D5', '&straightphi;'));
    encodeMap.j2(to('\xAF', '&strns;'));
    encodeMap.j2(to('\u2282', '&sub;'));
    encodeMap.j2(to('\u2AC5', '&subE;'));
    encodeMap.j2(to('\u2ABD', '&subdot;'));
    encodeMap.j2(to('\u2286', '&sube;'));
    encodeMap.j2(to('\u2AC3', '&subedot;'));
    encodeMap.j2(to('\u2AC1', '&submult;'));
    encodeMap.j2(to('\u2ACB', '&subnE;'));
    encodeMap.j2(to('\u228A', '&subne;'));
    encodeMap.j2(to('\u2ABF', '&subplus;'));
    encodeMap.j2(to('\u2979', '&subrarr;'));
    encodeMap.j2(to('\u2282', '&subset;'));
    encodeMap.j2(to('\u2286', '&subseteq;'));
    encodeMap.j2(to('\u2AC5', '&subseteqq;'));
    encodeMap.j2(to('\u228A', '&subsetneq;'));
    encodeMap.j2(to('\u2ACB', '&subsetneqq;'));
    encodeMap.j2(to('\u2AC7', '&subsim;'));
    encodeMap.j2(to('\u2AD5', '&subsub;'));
    encodeMap.j2(to('\u2AD3', '&subsup;'));
    encodeMap.j2(to('\u227B', '&succ;'));
    encodeMap.j2(to('\u2AB8', '&succapprox;'));
    encodeMap.j2(to('\u227D', '&succcurlyeq;'));
    encodeMap.j2(to('\u2AB0', '&succeq;'));
    encodeMap.j2(to('\u2ABA', '&succnapprox;'));
    encodeMap.j2(to('\u2AB6', '&succneqq;'));
    encodeMap.j2(to('\u22E9', '&succnsim;'));
    encodeMap.j2(to('\u227F', '&succsim;'));
    encodeMap.j2(to('\u2211', '&sum;'));
    encodeMap.j2(to('\u266A', '&sung;'));
    encodeMap.j2(to('\xB9', '&sup1'));
    encodeMap.j2(to('\xB9', '&sup1;'));
    encodeMap.j2(to('\xB2', '&sup2'));
    encodeMap.j2(to('\xB2', '&sup2;'));
    encodeMap.j2(to('\xB3', '&sup3'));
    encodeMap.j2(to('\xB3', '&sup3;'));
    encodeMap.j2(to('\u2283', '&sup;'));
    encodeMap.j2(to('\u2AC6', '&supE;'));
    encodeMap.j2(to('\u2ABE', '&supdot;'));
    encodeMap.j2(to('\u2AD8', '&supdsub;'));
    encodeMap.j2(to('\u2287', '&supe;'));
    encodeMap.j2(to('\u2AC4', '&supedot;'));
    encodeMap.j2(to('\u27C9', '&suphsol;'));
    encodeMap.j2(to('\u2AD7', '&suphsub;'));
    encodeMap.j2(to('\u297B', '&suplarr;'));
    encodeMap.j2(to('\u2AC2', '&supmult;'));
    encodeMap.j2(to('\u2ACC', '&supnE;'));
    encodeMap.j2(to('\u228B', '&supne;'));
    encodeMap.j2(to('\u2AC0', '&supplus;'));
    encodeMap.j2(to('\u2283', '&supset;'));
    encodeMap.j2(to('\u2287', '&supseteq;'));
    encodeMap.j2(to('\u2AC6', '&supseteqq;'));
    encodeMap.j2(to('\u228B', '&supsetneq;'));
    encodeMap.j2(to('\u2ACC', '&supsetneqq;'));
    encodeMap.j2(to('\u2AC8', '&supsim;'));
    encodeMap.j2(to('\u2AD4', '&supsub;'));
    encodeMap.j2(to('\u2AD6', '&supsup;'));
    encodeMap.j2(to('\u21D9', '&swArr;'));
    encodeMap.j2(to('\u2926', '&swarhk;'));
    encodeMap.j2(to('\u2199', '&swarr;'));
    encodeMap.j2(to('\u2199', '&swarrow;'));
    encodeMap.j2(to('\u292A', '&swnwar;'));
    encodeMap.j2(to('\xDF', '&szlig'));
    encodeMap.j2(to('\xDF', '&szlig;'));
    encodeMap.j2(to('\u2316', '&target;'));
    encodeMap.j2(to('\u03C4', '&tau;'));
    encodeMap.j2(to('\u23B4', '&tbrk;'));
    encodeMap.j2(to('\u0165', '&tcaron;'));
    encodeMap.j2(to('\u0163', '&tcedil;'));
    encodeMap.j2(to('\u0442', '&tcy;'));
    encodeMap.j2(to('\u20DB', '&tdot;'));
    encodeMap.j2(to('\u2315', '&telrec;'));
    encodeMap.j2(to('\uD835\uDD31', '&tfr;'));
    encodeMap.j2(to('\u2234', '&there4;'));
    encodeMap.j2(to('\u2234', '&therefore;'));
    encodeMap.j2(to('\u03B8', '&theta;'));
    encodeMap.j2(to('\u03D1', '&thetasym;'));
    encodeMap.j2(to('\u03D1', '&thetav;'));
    encodeMap.j2(to('\u2248', '&thickapprox;'));
    encodeMap.j2(to('\u223C', '&thicksim;'));
    encodeMap.j2(to('\u2009', '&thinsp;'));
    encodeMap.j2(to('\u2248', '&thkap;'));
    encodeMap.j2(to('\u223C', '&thksim;'));
    encodeMap.j2(to('\xFE', '&thorn'));
    encodeMap.j2(to('\xFE', '&thorn;'));
    encodeMap.j2(to('\u02DC', '&tilde;'));
    encodeMap.j2(to('\xD7', '&times'));
    encodeMap.j2(to('\xD7', '&times;'));
    encodeMap.j2(to('\u22A0', '&timesb;'));
    encodeMap.j2(to('\u2A31', '&timesbar;'));
    encodeMap.j2(to('\u2A30', '&timesd;'));
    encodeMap.j2(to('\u222D', '&tint;'));
    encodeMap.j2(to('\u2928', '&toea;'));
    encodeMap.j2(to('\u22A4', '&top;'));
    encodeMap.j2(to('\u2336', '&topbot;'));
    encodeMap.j2(to('\u2AF1', '&topcir;'));
    encodeMap.j2(to('\uD835\uDD65', '&topf;'));
    encodeMap.j2(to('\u2ADA', '&topfork;'));
    encodeMap.j2(to('\u2929', '&tosa;'));
    encodeMap.j2(to('\u2034', '&tprime;'));
    encodeMap.j2(to('\u2122', '&trade;'));
    encodeMap.j2(to('\u25B5', '&triangle;'));
    encodeMap.j2(to('\u25BF', '&triangledown;'));
    encodeMap.j2(to('\u25C3', '&triangleleft;'));
    encodeMap.j2(to('\u22B4', '&trianglelefteq;'));
    encodeMap.j2(to('\u225C', '&triangleq;'));
    encodeMap.j2(to('\u25B9', '&triangleright;'));
    encodeMap.j2(to('\u22B5', '&trianglerighteq;'));
    encodeMap.j2(to('\u25EC', '&tridot;'));
    encodeMap.j2(to('\u225C', '&trie;'));
    encodeMap.j2(to('\u2A3A', '&triminus;'));
    encodeMap.j2(to('\u2A39', '&triplus;'));
    encodeMap.j2(to('\u29CD', '&trisb;'));
    encodeMap.j2(to('\u2A3B', '&tritime;'));
    encodeMap.j2(to('\u23E2', '&trpezium;'));
    encodeMap.j2(to('\uD835\uDCC9', '&tscr;'));
    encodeMap.j2(to('\u0446', '&tscy;'));
    encodeMap.j2(to('\u045B', '&tshcy;'));
    encodeMap.j2(to('\u0167', '&tstrok;'));
    encodeMap.j2(to('\u226C', '&twixt;'));
    encodeMap.j2(to('\u219E', '&twoheadleftarrow;'));
    encodeMap.j2(to('\u21A0', '&twoheadrightarrow;'));
    encodeMap.j2(to('\u21D1', '&uArr;'));
    encodeMap.j2(to('\u2963', '&uHar;'));
    encodeMap.j2(to('\xFA', '&uacute'));
    encodeMap.j2(to('\xFA', '&uacute;'));
    encodeMap.j2(to('\u2191', '&uarr;'));
    encodeMap.j2(to('\u045E', '&ubrcy;'));
    encodeMap.j2(to('\u016D', '&ubreve;'));
    encodeMap.j2(to('\xFB', '&ucirc'));
    encodeMap.j2(to('\xFB', '&ucirc;'));
    encodeMap.j2(to('\u0443', '&ucy;'));
    encodeMap.j2(to('\u21C5', '&udarr;'));
    encodeMap.j2(to('\u0171', '&udblac;'));
    encodeMap.j2(to('\u296E', '&udhar;'));
    encodeMap.j2(to('\u297E', '&ufisht;'));
    encodeMap.j2(to('\uD835\uDD32', '&ufr;'));
    encodeMap.j2(to('\xF9', '&ugrave'));
    encodeMap.j2(to('\xF9', '&ugrave;'));
    encodeMap.j2(to('\u21BF', '&uharl;'));
    encodeMap.j2(to('\u21BE', '&uharr;'));
    encodeMap.j2(to('\u2580', '&uhblk;'));
    encodeMap.j2(to('\u231C', '&ulcorn;'));
    encodeMap.j2(to('\u231C', '&ulcorner;'));
    encodeMap.j2(to('\u230F', '&ulcrop;'));
    encodeMap.j2(to('\u25F8', '&ultri;'));
    encodeMap.j2(to('\u016B', '&umacr;'));
    encodeMap.j2(to('\xA8', '&uml'));
    encodeMap.j2(to('\xA8', '&uml;'));
    encodeMap.j2(to('\u0173', '&uogon;'));
    encodeMap.j2(to('\uD835\uDD66', '&uopf;'));
    encodeMap.j2(to('\u2191', '&uparrow;'));
    encodeMap.j2(to('\u2195', '&updownarrow;'));
    encodeMap.j2(to('\u21BF', '&upharpoonleft;'));
    encodeMap.j2(to('\u21BE', '&upharpoonright;'));
    encodeMap.j2(to('\u228E', '&uplus;'));
    encodeMap.j2(to('\u03C5', '&upsi;'));
    encodeMap.j2(to('\u03D2', '&upsih;'));
    encodeMap.j2(to('\u03C5', '&upsilon;'));
    encodeMap.j2(to('\u21C8', '&upuparrows;'));
    encodeMap.j2(to('\u231D', '&urcorn;'));
    encodeMap.j2(to('\u231D', '&urcorner;'));
    encodeMap.j2(to('\u230E', '&urcrop;'));
    encodeMap.j2(to('\u016F', '&uring;'));
    encodeMap.j2(to('\u25F9', '&urtri;'));
    encodeMap.j2(to('\uD835\uDCCA', '&uscr;'));
    encodeMap.j2(to('\u22F0', '&utdot;'));
    encodeMap.j2(to('\u0169', '&utilde;'));
    encodeMap.j2(to('\u25B5', '&utri;'));
    encodeMap.j2(to('\u25B4', '&utrif;'));
    encodeMap.j2(to('\u21C8', '&uuarr;'));
    encodeMap.j2(to('\xFC', '&uuml'));
    encodeMap.j2(to('\xFC', '&uuml;'));
    encodeMap.j2(to('\u29A7', '&uwangle;'));
    encodeMap.j2(to('\u21D5', '&vArr;'));
    encodeMap.j2(to('\u2AE8', '&vBar;'));
    encodeMap.j2(to('\u2AE9', '&vBarv;'));
    encodeMap.j2(to('\u22A8', '&vDash;'));
    encodeMap.j2(to('\u299C', '&vangrt;'));
    encodeMap.j2(to('\u03F5', '&varepsilon;'));
    encodeMap.j2(to('\u03F0', '&varkappa;'));
    encodeMap.j2(to('\u2205', '&varnothing;'));
    encodeMap.j2(to('\u03D5', '&varphi;'));
    encodeMap.j2(to('\u03D6', '&varpi;'));
    encodeMap.j2(to('\u221D', '&varpropto;'));
    encodeMap.j2(to('\u2195', '&varr;'));
    encodeMap.j2(to('\u03F1', '&varrho;'));
    encodeMap.j2(to('\u03C2', '&varsigma;'));
    encodeMap.j2(to('\u228A\uFE00', '&varsubsetneq;'));
    encodeMap.j2(to('\u2ACB\uFE00', '&varsubsetneqq;'));
    encodeMap.j2(to('\u228B\uFE00', '&varsupsetneq;'));
    encodeMap.j2(to('\u2ACC\uFE00', '&varsupsetneqq;'));
    encodeMap.j2(to('\u03D1', '&vartheta;'));
    encodeMap.j2(to('\u22B2', '&vartriangleleft;'));
    encodeMap.j2(to('\u22B3', '&vartriangleright;'));
    encodeMap.j2(to('\u0432', '&vcy;'));
    encodeMap.j2(to('\u22A2', '&vdash;'));
    encodeMap.j2(to('\u2228', '&vee;'));
    encodeMap.j2(to('\u22BB', '&veebar;'));
    encodeMap.j2(to('\u225A', '&veeeq;'));
    encodeMap.j2(to('\u22EE', '&vellip;'));
    encodeMap.j2(to('|', '&verbar;'));
    encodeMap.j2(to('|', '&vert;'));
    encodeMap.j2(to('\uD835\uDD33', '&vfr;'));
    encodeMap.j2(to('\u22B2', '&vltri;'));
    encodeMap.j2(to('\u2282\u20D2', '&vnsub;'));
    encodeMap.j2(to('\u2283\u20D2', '&vnsup;'));
    encodeMap.j2(to('\uD835\uDD67', '&vopf;'));
    encodeMap.j2(to('\u221D', '&vprop;'));
    encodeMap.j2(to('\u22B3', '&vrtri;'));
    encodeMap.j2(to('\uD835\uDCCB', '&vscr;'));
    encodeMap.j2(to('\u2ACB\uFE00', '&vsubnE;'));
    encodeMap.j2(to('\u228A\uFE00', '&vsubne;'));
    encodeMap.j2(to('\u2ACC\uFE00', '&vsupnE;'));
    encodeMap.j2(to('\u228B\uFE00', '&vsupne;'));
    encodeMap.j2(to('\u299A', '&vzigzag;'));
    encodeMap.j2(to('\u0175', '&wcirc;'));
    encodeMap.j2(to('\u2A5F', '&wedbar;'));
    encodeMap.j2(to('\u2227', '&wedge;'));
    encodeMap.j2(to('\u2259', '&wedgeq;'));
    encodeMap.j2(to('\u2118', '&weierp;'));
    encodeMap.j2(to('\uD835\uDD34', '&wfr;'));
    encodeMap.j2(to('\uD835\uDD68', '&wopf;'));
    encodeMap.j2(to('\u2118', '&wp;'));
    encodeMap.j2(to('\u2240', '&wr;'));
    encodeMap.j2(to('\u2240', '&wreath;'));
    encodeMap.j2(to('\uD835\uDCCC', '&wscr;'));
    encodeMap.j2(to('\u22C2', '&xcap;'));
    encodeMap.j2(to('\u25EF', '&xcirc;'));
    encodeMap.j2(to('\u22C3', '&xcup;'));
    encodeMap.j2(to('\u25BD', '&xdtri;'));
    encodeMap.j2(to('\uD835\uDD35', '&xfr;'));
    encodeMap.j2(to('\u27FA', '&xhArr;'));
    encodeMap.j2(to('\u27F7', '&xharr;'));
    encodeMap.j2(to('\u03BE', '&xi;'));
    encodeMap.j2(to('\u27F8', '&xlArr;'));
    encodeMap.j2(to('\u27F5', '&xlarr;'));
    encodeMap.j2(to('\u27FC', '&xmap;'));
    encodeMap.j2(to('\u22FB', '&xnis;'));
    encodeMap.j2(to('\u2A00', '&xodot;'));
    encodeMap.j2(to('\uD835\uDD69', '&xopf;'));
    encodeMap.j2(to('\u2A01', '&xoplus;'));
    encodeMap.j2(to('\u2A02', '&xotime;'));
    encodeMap.j2(to('\u27F9', '&xrArr;'));
    encodeMap.j2(to('\u27F6', '&xrarr;'));
    encodeMap.j2(to('\uD835\uDCCD', '&xscr;'));
    encodeMap.j2(to('\u2A06', '&xsqcup;'));
    encodeMap.j2(to('\u2A04', '&xuplus;'));
    encodeMap.j2(to('\u25B3', '&xutri;'));
    encodeMap.j2(to('\u22C1', '&xvee;'));
    encodeMap.j2(to('\u22C0', '&xwedge;'));
    encodeMap.j2(to('\xFD', '&yacute'));
    encodeMap.j2(to('\xFD', '&yacute;'));
    encodeMap.j2(to('\u044F', '&yacy;'));
    encodeMap.j2(to('\u0177', '&ycirc;'));
    encodeMap.j2(to('\u044B', '&ycy;'));
    encodeMap.j2(to('\xA5', '&yen'));
    encodeMap.j2(to('\xA5', '&yen;'));
    encodeMap.j2(to('\uD835\uDD36', '&yfr;'));
    encodeMap.j2(to('\u0457', '&yicy;'));
    encodeMap.j2(to('\uD835\uDD6A', '&yopf;'));
    encodeMap.j2(to('\uD835\uDCCE', '&yscr;'));
    encodeMap.j2(to('\u044E', '&yucy;'));
    encodeMap.j2(to('\xFF', '&yuml'));
    encodeMap.j2(to('\xFF', '&yuml;'));
    encodeMap.j2(to('\u017A', '&zacute;'));
    encodeMap.j2(to('\u017E', '&zcaron;'));
    encodeMap.j2(to('\u0437', '&zcy;'));
    encodeMap.j2(to('\u017C', '&zdot;'));
    encodeMap.j2(to('\u2128', '&zeetrf;'));
    encodeMap.j2(to('\u03B6', '&zeta;'));
    encodeMap.j2(to('\uD835\uDD37', '&zfr;'));
    encodeMap.j2(to('\u0436', '&zhcy;'));
    encodeMap.j2(to('\u21DD', '&zigrarr;'));
    encodeMap.j2(to('\uD835\uDD6B', '&zopf;'));
    encodeMap.j2(to('\uD835\uDCCF', '&zscr;'));
    encodeMap.j2(to('\u200D', '&zwj;'));
    encodeMap.j2(to('\u200C', '&zwnj;'));
    tmp.mcr_1 = toList(encodeMap);
    this.ncr_1 = invert(this, this.mcr_1);
  }
}
class KsoupEntities {
  constructor() {
    KsoupEntities_instance = this;
    var tmp = this;
    // Inline function 'kotlin.run' call
    var encodeXml11Map = listOf([to('\x00', ''), to('\x0B', '&#11;'), to('\f', '&#12;'), to('\uFFFE', ''), to('\uFFFF', '')]);
    tmp.vcr_1 = AggregateTranslator.fcr([LookupTranslator.scr(EntityMaps_getInstance().icr_1), LookupTranslator.scr(encodeXml11Map), Companion_instance_0.tcr(1, 8), Companion_instance_0.tcr(14, 31), Companion_instance_0.tcr(127, 132), Companion_instance_0.tcr(134, 159), UnicodeUnpairedSurrogateRemover.ucr()]);
    this.wcr_1 = AggregateTranslator.fcr([LookupTranslator.scr(EntityMaps_getInstance().kcr_1)]);
    this.xcr_1 = AggregateTranslator.fcr([LookupTranslator.scr(EntityMaps_getInstance().mcr_1), Companion_instance_0.tcr(1, 8), Companion_instance_0.tcr(14, 31), Companion_instance_0.tcr(127, 132), Companion_instance_0.tcr(134, 159)]);
    this.ycr_1 = AggregateTranslator.fcr([LookupTranslator.scr(EntityMaps_getInstance().lcr_1), NumericEntityDecoder.ccs([])]);
    this.zcr_1 = AggregateTranslator.fcr([LookupTranslator.scr(EntityMaps_getInstance().ncr_1), NumericEntityDecoder.ccs([])]);
    this.acs_1 = AggregateTranslator.fcr([LookupTranslator.scr(EntityMaps_getInstance().jcr_1), NumericEntityDecoder.ccs([])]);
  }
  dcs(input) {
    return this.zcr_1.hcr(input);
  }
  ecs(input) {
    return this.dcs(input);
  }
}
class LookupTranslator extends StringTranslator {
  constructor(lookupMap) {
    return new.target.scr(lookupMap);
  }
  static scr(lookupMap) {
    var $this = this.ecr();
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ocr_1 = LinkedHashMap.r5();
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.pcr_1 = LinkedHashSet.p2();
    var currentShortest = 2147483647;
    var currentLongest = 0;
    var _iterator__ex2g4s = lookupMap.l1();
    while (_iterator__ex2g4s.m1()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.n1();
      var key = _destruct__k2r9zo.qm();
      var value = _destruct__k2r9zo.rm();
      // Inline function 'kotlin.collections.set' call
      $this.ocr_1.o4(key, value);
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(key, 0);
      // Inline function 'kotlin.toUShort' call
      var this_1 = Char__toInt_impl_vasixd(this_0);
      var tmp$ret$4 = _UShort___init__impl__jigrne(toShort(this_1));
      $this.pcr_1.j2(new UShort(tmp$ret$4));
      var sz = key.length;
      if (sz < currentShortest) {
        currentShortest = sz;
      }
      if (sz > currentLongest) {
        currentLongest = sz;
      }
    }
    $this.qcr_1 = currentShortest;
    $this.rcr_1 = currentLongest;
    return $this;
  }
  gcr(input, offset, stringBuilder) {
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(input, offset);
    // Inline function 'kotlin.toUShort' call
    var this_1 = Char__toInt_impl_vasixd(this_0);
    var tmp$ret$1 = _UShort___init__impl__jigrne(toShort(this_1));
    if (this.pcr_1.o2(new UShort(tmp$ret$1))) {
      var max = this.rcr_1;
      if ((offset + this.rcr_1 | 0) > input.length) {
        max = input.length - offset | 0;
      }
      var inductionVariable = max;
      var last = this.qcr_1;
      if (last <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var subSeq = substring(input, offset, offset + i | 0);
          var result = this.ocr_1.v4(toString(subSeq));
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
  static fcs() {
    return this.ecr();
  }
  gcr(input, offset, stringBuilder) {
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(input, offset);
    var codePoint = Char__toInt_impl_vasixd(this_0);
    var consumed = this.gcs(codePoint, stringBuilder);
    return consumed ? 1 : 0;
  }
}
class Option extends Enum {}
class Companion {
  constructor() {
    Companion_instance = this;
    this.hcs_1 = setOf(Option_SemiColonRequired_getInstance());
  }
}
class NumericEntityDecoder extends StringTranslator {
  constructor(options) {
    return new.target.ccs(options);
  }
  static ccs(options) {
    Companion_getInstance();
    var $this = this.ecr();
    var tmp = $this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (options.length === 0) {
      tmp_0 = Companion_getInstance().hcs_1;
    } else {
      tmp_0 = setOf_0(options.slice());
    }
    tmp.bcs_1 = tmp_0;
    return $this;
  }
  gcr(input, offset, stringBuilder) {
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
          throw IllegalArgumentException.b2('Semi-colon required at end of numeric entity');
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
        var indexedObject = CharsUtils_instance.kcs(entityValue);
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
          throw IllegalArgumentException.b2('Invalid Char code: ' + entityValue);
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
  tcr(codePointLow, codePointHigh) {
    return NumericEntityEncoder.ncs(numberRangeToNumber(codePointLow, codePointHigh), true);
  }
}
class NumericEntityEncoder extends CodePointTranslator {
  constructor(range, between) {
    return new.target.ncs(range, between);
  }
  static ncs(range, between) {
    var $this = this.fcs();
    $this.lcs_1 = range;
    $this.mcs_1 = between;
    return $this;
  }
  static ocs() {
    return this.ncs(numberRangeToNumber(0, 2147483647), true);
  }
  gcs(codePoint, stringBuilder) {
    if (!(this.mcs_1 === this.lcs_1.bs(codePoint))) {
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
    return new.target.ucr();
  }
  static ucr() {
    return this.fcs();
  }
  gcs(codePoint, stringBuilder) {
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
    this.ics_1 = 65536;
    this.jcs_1 = 1114111;
  }
  kcs(codePoint) {
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
  var destination = ArrayList.i2(collectionSizeOrDefault(list, 10));
  var _iterator__ex2g4s = list.l1();
  while (_iterator__ex2g4s.m1()) {
    var item = _iterator__ex2g4s.n1();
    var a = item.qm();
    var b = item.rm();
    var tmp$ret$2 = to(b, a);
    destination.j2(tmp$ret$2);
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
    var consumed = $this.gcr(input, pos, stringBuilder);
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
  return $this.bcs_1.o2(option);
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
initMetadataForClass(AggregateTranslator, 'AggregateTranslator', AggregateTranslator.dcr);
initMetadataForObject(EntityMaps, 'EntityMaps');
initMetadataForObject(KsoupEntities, 'KsoupEntities');
initMetadataForClass(LookupTranslator, 'LookupTranslator');
initMetadataForClass(CodePointTranslator, 'CodePointTranslator');
initMetadataForClass(Option, 'Option');
initMetadataForCompanion(Companion);
initMetadataForClass(NumericEntityDecoder, 'NumericEntityDecoder');
initMetadataForCompanion(Companion_0);
initMetadataForClass(NumericEntityEncoder, 'NumericEntityEncoder', NumericEntityEncoder.ocs);
initMetadataForClass(UnicodeUnpairedSurrogateRemover, 'UnicodeUnpairedSurrogateRemover', UnicodeUnpairedSurrogateRemover.ucr);
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
