define(['dart_sdk', 'packages/dijital_sarf/veri/kaliplar'], function(dart_sdk, kaliplar) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const veri__kaliplar = kaliplar.veri__kaliplar;
  const veri__veri = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const _name$ = dart.privateName(veri__veri, "_name");
  veri__veri.Kisim = class Kisim extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (veri__veri.Kisim.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = veri__veri.Kisim.prototype;
  dart.addTypeTests(veri__veri.Kisim);
  dart.setLibraryUri(veri__veri.Kisim, "package:dijital_sarf/veri/veri.dart");
  dart.setFieldSignature(veri__veri.Kisim, () => ({
    __proto__: dart.getFields(veri__veri.Kisim.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(veri__veri.Kisim, ['toString']);
  veri__veri.Kisim.SAHIH = dart.const(new veri__veri.Kisim.new(0, "Kisim.SAHIH"));
  veri__veri.Kisim.MISAL = dart.const(new veri__veri.Kisim.new(1, "Kisim.MISAL"));
  veri__veri.Kisim.ECVEF = dart.const(new veri__veri.Kisim.new(2, "Kisim.ECVEF"));
  veri__veri.Kisim.NAKIS = dart.const(new veri__veri.Kisim.new(3, "Kisim.NAKIS"));
  veri__veri.Kisim.LEFIFMKRN = dart.const(new veri__veri.Kisim.new(4, "Kisim.LEFIFMKRN"));
  veri__veri.Kisim.LEFIFMFRK = dart.const(new veri__veri.Kisim.new(5, "Kisim.LEFIFMFRK"));
  veri__veri.Kisim.MUDAAF = dart.const(new veri__veri.Kisim.new(6, "Kisim.MUDAAF"));
  veri__veri.Kisim.MEHMUZF = dart.const(new veri__veri.Kisim.new(7, "Kisim.MEHMUZF"));
  veri__veri.Kisim.MEHMUZA = dart.const(new veri__veri.Kisim.new(8, "Kisim.MEHMUZA"));
  veri__veri.Kisim.MEHMUZL = dart.const(new veri__veri.Kisim.new(9, "Kisim.MEHMUZL"));
  veri__veri.Kisim.MISALMUDAAF = dart.const(new veri__veri.Kisim.new(10, "Kisim.MISALMUDAAF"));
  veri__veri.Kisim.MEHMUZFMUDAAF = dart.const(new veri__veri.Kisim.new(11, "Kisim.MEHMUZFMUDAAF"));
  veri__veri.Kisim.MEHMUZFNAKIS = dart.const(new veri__veri.Kisim.new(12, "Kisim.MEHMUZFNAKIS"));
  veri__veri.Kisim.MEHMUZANAKIS = dart.const(new veri__veri.Kisim.new(13, "Kisim.MEHMUZANAKIS"));
  veri__veri.Kisim.MEHMUZALEFIFMFRK = dart.const(new veri__veri.Kisim.new(14, "Kisim.MEHMUZALEFIFMFRK"));
  veri__veri.Kisim.values = dart.constList([veri__veri.Kisim.SAHIH, veri__veri.Kisim.MISAL, veri__veri.Kisim.ECVEF, veri__veri.Kisim.NAKIS, veri__veri.Kisim.LEFIFMKRN, veri__veri.Kisim.LEFIFMFRK, veri__veri.Kisim.MUDAAF, veri__veri.Kisim.MEHMUZF, veri__veri.Kisim.MEHMUZA, veri__veri.Kisim.MEHMUZL, veri__veri.Kisim.MISALMUDAAF, veri__veri.Kisim.MEHMUZFMUDAAF, veri__veri.Kisim.MEHMUZFNAKIS, veri__veri.Kisim.MEHMUZANAKIS, veri__veri.Kisim.MEHMUZALEFIFMFRK], veri__veri.Kisim);
  veri__veri.Veri = class Veri extends core.Object {};
  (veri__veri.Veri.new = function() {
    ;
  }).prototype = veri__veri.Veri.prototype;
  dart.addTypeTests(veri__veri.Veri);
  dart.setLibraryUri(veri__veri.Veri, "package:dijital_sarf/veri/veri.dart");
  dart.defineLazy(veri__veri.Veri, {
    /*veri__veri.Veri.durum*/get durum() {
      return veri__veri.Kisim.SAHIH;
    },
    set durum(_) {},
    /*veri__veri.Veri.harf*/get harf() {
      return JSArrayOfString().of(["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "و", "ه", "ي", "ئ", "ء", "ؤ", "ى", "ة", "أ"]);
    },
    /*veri__veri.Veri.hareke*/get hareke() {
      return JSArrayOfString().of(["َ", "ِ", "ُ", "ً", "ٍ", "ٌ", "ْ", "إ", "أ", "آ", "ّ"]);
    },
    /*veri__veri.Veri.bab*/get bab() {
      return JSArrayOfString().of(["اَلْبَابُ الْاَوَّلُ", "اَلْبَابُ الثَّانِي", "اَلْبَابُ الثَّالِثُ", "اَلْبَابُ الرَّابِعُ", "اَلْبَابُ الْخَامِسُ", "اَلْبَابُ السّادِسُ"]);
    },
    /*veri__veri.Veri.masdar*/get masdar() {
      return JSArrayOfString().of(["فَعْلًا", "فِعَالَةً", "فِعَالًا", "فَعَلَانًا", "فُعَالًا", "فُعْلَةً", "فَعِيلًا", "فُعُولَةً", "فَعَالَةً", "فَعَلًا", "فُعُولًا", "فِعْلًا", "فُعْلًا"]);
    },
    /*veri__veri.Veri.yirmi4*/get yirmi4() {
      return [veri__kaliplar.Kalip.fiilMadi, dart.str(veri__veri.Veri.harf[$_get](27)) + dart.str(veri__kaliplar.Kalip.fiilMudari) + dart.str(veri__veri.Veri.hareke[$_get](2)), veri__kaliplar.Kalip.yMasdar, dart.str(veri__kaliplar.Kalip.ismiFail) + dart.str(veri__veri.Veri.hareke[$_get](5)), dart.str(veri__kaliplar.Kalip.ismiMeful) + dart.str(veri__veri.Veri.hareke[$_get](5)), dart.str(veri__kaliplar.Kalip.cahdiMutlak) + dart.str(veri__veri.Veri.hareke[$_get](6)), dart.str(veri__kaliplar.Kalip.cahdiMustagrak) + dart.str(veri__veri.Veri.hareke[$_get](6)), dart.str(veri__kaliplar.Kalip.nefiHal) + dart.str(veri__veri.Veri.hareke[$_get](2)), dart.str(veri__kaliplar.Kalip.nefiIstikbal) + dart.str(veri__veri.Veri.hareke[$_get](2)), dart.str(veri__kaliplar.Kalip.tekitNefiIstikbal) + dart.str(veri__veri.Veri.hareke[$_get](0)), dart.str(veri__kaliplar.Kalip.emriGaib) + dart.str(veri__veri.Veri.hareke[$_get](6)), dart.str(veri__kaliplar.Kalip.nehiGaib) + dart.str(veri__veri.Veri.hareke[$_get](6)), veri__kaliplar.Kalip.emriHadir, veri__kaliplar.Kalip.nehiHadir, veri__kaliplar.Kalip.ismiMekan, veri__kaliplar.Kalip.ismiAlet, veri__kaliplar.Kalip.merreMastar, veri__kaliplar.Kalip.neviMastar, veri__kaliplar.Kalip.ismiTasgir, veri__kaliplar.Kalip.ismiMensub, veri__kaliplar.Kalip.mubalagaIsmiFail, veri__kaliplar.Kalip.ismiTafdil, veri__kaliplar.Kalip.taaccub1, veri__kaliplar.Kalip.taaccub2];
    },
    set yirmi4(_) {}
  });
  dart.trackLibraries("packages/dijital_sarf/veri/veri", {
    "package:dijital_sarf/veri/veri.dart": veri__veri
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/dijital_sarf/veri/veri.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAkBA;;0CAhBK;;;;EAgBL;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA2GA;;;;MAxGe,qBAAK;YAAS;;;MAED,oBAAI;YAAG,uBAC/B,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA;;MAGwB,sBAAM;YAAG,uBACjC,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA;;MAGwB,mBAAG;YAAG,uBAC9B,wBACA,uBACA,wBACA,wBACA,wBACA;;MAGwB,sBAAM;YAAG,uBACjC,WACA,aACA,YACA,cACA,YACA,YACA,YACA,aACA,aACA,WACA,YACA,WACA;;MAGU,sBAAM;YAAG,EACb,+BACgD,SAA9C,AAAI,4BAAC,gBAAY,4CAAkB,AAAM,8BAAC,KAC5C,8BAC8B,SAA3B,0CAAgB,AAAM,8BAAC,KACK,SAA5B,2CAAiB,AAAM,8BAAC,KACM,SAA9B,6CAAmB,AAAM,8BAAC,KACO,SAAjC,gDAAsB,AAAM,8BAAC,KACH,SAA1B,yCAAe,AAAM,8BAAC,KACS,SAA/B,8CAAoB,AAAM,8BAAC,KACS,SAApC,mDAAyB,AAAM,8BAAC,KACL,SAA3B,0CAAgB,AAAM,8BAAC,KACI,SAA3B,0CAAgB,AAAM,8BAAC,KAC1B,gCACA,gCACA,gCACA,+BACA,kCACA,iCACA,iCACA,iCACA,uCACA,iCACA,+BACA","file":"veri.ddc.js"}');
  // Exports:
  return {
    veri__veri: veri__veri
  };
});

//# sourceMappingURL=veri.ddc.js.map
