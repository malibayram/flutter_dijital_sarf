define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/dijital_sarf/veri/veri', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, material, veri, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__rendering__sliver_grid = animation.src__rendering__sliver_grid;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__card = material.src__material__card;
  const veri__veri = veri.veri__veri;
  const src__painting__text_style = animation$.src__painting__text_style;
  const sayfalar__harekeler = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let BuildContextAndintToCard = () => (BuildContextAndintToCard = dart.constFn(dart.fnType(src__material__card.Card, [src__widgets__framework.BuildContext, core.int])))();
  sayfalar__harekeler.Harekeler = class Harekeler extends src__widgets__framework.StatefulWidget {
    createState() {
      return new sayfalar__harekeler._HarekelerState.new();
    }
  };
  (sayfalar__harekeler.Harekeler.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sayfalar__harekeler.Harekeler.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sayfalar__harekeler.Harekeler.prototype;
  dart.addTypeTests(sayfalar__harekeler.Harekeler);
  dart.setMethodSignature(sayfalar__harekeler.Harekeler, () => ({
    __proto__: dart.getMethods(sayfalar__harekeler.Harekeler.__proto__),
    createState: dart.fnType(sayfalar__harekeler._HarekelerState, [])
  }));
  dart.setLibraryUri(sayfalar__harekeler.Harekeler, "package:dijital_sarf/sayfalar/harekeler.dart");
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
  sayfalar__harekeler._HarekelerState = class _HarekelerState extends src__widgets__framework.State$(sayfalar__harekeler.Harekeler) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("Harekeler", {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 16, file: "org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), centerTitle: true, $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 15, file: "org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "title"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "centerTitle"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__scroll_view.GridView.builder({gridDelegate: new src__rendering__sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 4}), itemCount: veri__veri.Veri.hareke[$length], itemBuilder: dart.fn((ctx, i) => new src__material__card.Card.new({child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(8.0), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Hareke " + dart.str(dart.notNull(i) + 1), {style: new src__painting__text_style.TextStyle.new({fontSize: 20.0, fontFamily: "Lateef"}), $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 19, file: "org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 38, name: "data"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 21, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("بب" + dart.str(veri__veri.Veri.hareke[$_get](i)) + "ب", {style: new src__painting__text_style.TextStyle.new({fontSize: 60.0, fontFamily: "Lateef"}), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 19, file: "org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 43, name: "data"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 21, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 22, file: "org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 17, name: "mainAxisAlignment"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 20, file: "org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 15, name: "padding"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 18, file: "org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndintToCard()), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 22, file: "org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 9, name: "gridDelegate"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 9, name: "itemCount"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 9, name: "itemBuilder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 12, file: "org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "appBar"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (sayfalar__harekeler._HarekelerState.new = function() {
    sayfalar__harekeler._HarekelerState.__proto__.new.call(this);
    ;
  }).prototype = sayfalar__harekeler._HarekelerState.prototype;
  dart.addTypeTests(sayfalar__harekeler._HarekelerState);
  dart.setMethodSignature(sayfalar__harekeler._HarekelerState, () => ({
    __proto__: dart.getMethods(sayfalar__harekeler._HarekelerState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(sayfalar__harekeler._HarekelerState, "package:dijital_sarf/sayfalar/harekeler.dart");
  dart.trackLibraries("packages/dijital_sarf/sayfalar/harekeler", {
    "package:dijital_sarf/sayfalar/harekeler.dart": sayfalar__harekeler
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/dijital_sarf/sayfalar/harekeler.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AAKmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,mDACG,8CACC,gCAAK,6dACC,ilBAEA,8DACC,+FACI,gBAEF,AAAO,8CACV,SAAC,KAAK,MACV,yCACE,oDACe,8CAAI,aACjB,uDACgC,yDACnB,sBAChB,gCACE,AAAiB,qBAAL,aAAF,CAAC,IAAG,YACP,uDACK,kBACE,4kBAGhB,gCACE,AAAsB,gBAAZ,AAAM,8BAAC,CAAC,KAAE,aACb,uDACK,kBACE;IAUhC;;;;;EACF","file":"harekeler.ddc.js"}');
  // Exports:
  return {
    sayfalar__harekeler: sayfalar__harekeler
  };
});

//# sourceMappingURL=harekeler.ddc.js.map
