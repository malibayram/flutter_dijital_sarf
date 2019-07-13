define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/dijital_sarf/widgetlar/fiil_sec', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, material, fiil_sec, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__flat_button = material.src__material__flat_button;
  const src__material__material_button = material.src__material__material_button;
  const widgetlar__fiil_sec = fiil_sec.widgetlar__fiil_sec;
  const src__painting__text_style = animation$.src__painting__text_style;
  const anasayfa = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  anasayfa.Anasayfa = class Anasayfa extends src__widgets__framework.StatefulWidget {
    createState() {
      return new anasayfa._AnasayfaState.new();
    }
  };
  (anasayfa.Anasayfa.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    anasayfa.Anasayfa.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = anasayfa.Anasayfa.prototype;
  dart.addTypeTests(anasayfa.Anasayfa);
  dart.setMethodSignature(anasayfa.Anasayfa, () => ({
    __proto__: dart.getMethods(anasayfa.Anasayfa.__proto__),
    createState: dart.fnType(anasayfa._AnasayfaState, [])
  }));
  dart.setLibraryUri(anasayfa.Anasayfa, "package:dijital_sarf/anasayfa.dart");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  anasayfa._AnasayfaState = class _AnasayfaState extends src__widgets__framework.State$(anasayfa.Anasayfa) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("  Dijital Sarf", {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 16, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), centerTitle: true, actions: JSArrayOfWidget().of([new src__material__flat_button.FlatButton.new({onPressed: dart.fn(() => {
                src__widgets__navigator.Navigator.pushNamed(core.Object, context, "/harfler");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Harfler", {$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 20, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 11, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 13, name: "onPressed"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__flat_button.FlatButton.new({onPressed: dart.fn(() => {
                src__widgets__navigator.Navigator.pushNamed(core.Object, context, "/harekeler");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Harekeler", {$creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 20, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 11, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 13, name: "onPressed"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 15, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "title"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "centerTitle"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 9, name: "actions"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new widgetlar__fiil_sec.FiilSec.new({$creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 11, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$21 || (const$21 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Center.new({child: new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                  src__widgets__navigator.Navigator.pushNamed(core.Object, context, "/muhtelife");
                }, VoidToNull()), child: new src__widgets__text.Text.new("صرف", {style: new src__painting__text_style.TextStyle.new({fontSize: 60.0, fontFamily: "Lateef"}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 22, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 17, name: "data"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 17, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 20, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 15, name: "onPressed"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 11, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 13, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 12, file: "org-dartlang-app:///packages/dijital_sarf/anasayfa.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "appBar"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (anasayfa._AnasayfaState.new = function() {
    anasayfa._AnasayfaState.__proto__.new.call(this);
    ;
  }).prototype = anasayfa._AnasayfaState.prototype;
  dart.addTypeTests(anasayfa._AnasayfaState);
  dart.setMethodSignature(anasayfa._AnasayfaState, () => ({
    __proto__: dart.getMethods(anasayfa._AnasayfaState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(anasayfa._AnasayfaState, "package:dijital_sarf/anasayfa.dart");
  dart.trackLibraries("packages/dijital_sarf/anasayfa", {
    "package:dijital_sarf/anasayfa.dart": anasayfa
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["anasayfa.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAKkC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,mDACG,8CACC,gCAAK,wdACC,eACI,sBACf,0DACa;gBACC,yDAAU,OAAO,EAAE;uCAExB,gCAAK,igCAEd,0DACa;gBACC,yDAAU,OAAO,EAAE;uCAExB,gCAAK,ytDAIZ,8CACc,sBAChB,0WACA,2CACS,kEACM;kBACC,yDAAU,OAAO,EAAE;yCAExB,gCACL,eACO,uDACK,kBACE;IAQ5B;;;;;EACF","file":"anasayfa.ddc.js"}');
  // Exports:
  return {
    anasayfa: anasayfa
  };
});

//# sourceMappingURL=anasayfa.ddc.js.map
