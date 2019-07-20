define(['dart_sdk', 'packages/flutter_web/material', 'packages/dijital_sarf/anasayfa', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/dijital_sarf/sayfalar/harfler', 'packages/dijital_sarf/sayfalar/harekeler', 'packages/dijital_sarf/sayfalar/muhtelife'], function(dart_sdk, material, anasayfa, animation, ui, harfler, harekeler, muhtelife) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const anasayfa$ = anasayfa.anasayfa;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__binding = animation.src__widgets__binding;
  const ui$ = ui.ui;
  const sayfalar__harfler = harfler.sayfalar__harfler;
  const sayfalar__harekeler = harekeler.sayfalar__harekeler;
  const sayfalar__muhtelife = muhtelife.sayfalar__muhtelife;
  const main = Object.create(dart.library);
  let BuildContextToMediaQuery = () => (BuildContextToMediaQuery = dart.constFn(dart.fnType(src__widgets__media_query.MediaQuery, [src__widgets__framework.BuildContext])))();
  let BuildContextAndWidgetToDirectionality = () => (BuildContextAndWidgetToDirectionality = dart.constFn(dart.fnType(src__widgets__basic.Directionality, [src__widgets__framework.BuildContext, src__widgets__framework.Widget])))();
  let dynamicToHarfler = () => (dynamicToHarfler = dart.constFn(dart.fnType(sayfalar__harfler.Harfler, [dart.dynamic])))();
  let dynamicToHarekeler = () => (dynamicToHarekeler = dart.constFn(dart.fnType(sayfalar__harekeler.Harekeler, [dart.dynamic])))();
  let dynamicToMuhtelife = () => (dynamicToMuhtelife = dart.constFn(dart.fnType(sayfalar__muhtelife.Muhtelife, [dart.dynamic])))();
  let dynamicToStatefulWidget = () => (dynamicToStatefulWidget = dart.constFn(dart.fnType(src__widgets__framework.StatefulWidget, [dart.dynamic])))();
  let IdentityMapOfString$dynamicToStatefulWidget = () => (IdentityMapOfString$dynamicToStatefulWidget = dart.constFn(_js_helper.IdentityMap$(core.String, dynamicToStatefulWidget())))();
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
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Dijital Sarf", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.blue}), home: new anasayfa$.Anasayfa.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 13, file: "org-dartlang-app:///packages/dijital_sarf/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), routes: main.rotalar, builder: dart.fn((context, child) => new src__widgets__basic.Directionality.new({textDirection: ui$.TextDirection.rtl, child: new src__widgets__basic.Builder.new({builder: dart.fn(context => new src__widgets__media_query.MediaQuery.new({data: src__widgets__media_query.MediaQuery.of(context).copyWith({textScaleFactor: 1.0}), child: child, $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 22, file: "org-dartlang-app:///packages/dijital_sarf/main.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 17, name: "data"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), BuildContextToMediaQuery()), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 18, file: "org-dartlang-app:///packages/dijital_sarf/main.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 13, name: "builder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 16, file: "org-dartlang-app:///packages/dijital_sarf/main.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 11, name: "textDirection"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndWidgetToDirectionality()), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 12, file: "org-dartlang-app:///packages/dijital_sarf/main.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "debugShowCheckedModeBanner"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "title"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 7, name: "theme"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 7, name: "home"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 7, name: "routes"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 7, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:dijital_sarf/main.dart");
  let const$20;
  let const$21;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 23, file: "org-dartlang-app:///packages/dijital_sarf/main.dart", parameterLocations: const$20 || (const$20 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  dart.defineLazy(main, {
    /*main.rotalar*/get rotalar() {
      return new (IdentityMapOfString$dynamicToStatefulWidget()).from(["/harfler", dart.fn(context => new sayfalar__harfler.Harfler.new({$creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 28, file: "org-dartlang-app:///packages/dijital_sarf/main.dart", parameterLocations: const$22 || (const$22 = dart.constList([], src__widgets__widget_inspector._Location))})))}), dynamicToHarfler()), "/harekeler", dart.fn(context => new sayfalar__harekeler.Harekeler.new({$creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 30, file: "org-dartlang-app:///packages/dijital_sarf/main.dart", parameterLocations: const$24 || (const$24 = dart.constList([], src__widgets__widget_inspector._Location))})))}), dynamicToHarekeler()), "/muhtelife", dart.fn(context => new sayfalar__muhtelife.Muhtelife.new({$creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 30, file: "org-dartlang-app:///packages/dijital_sarf/main.dart", parameterLocations: const$26 || (const$26 = dart.constList([], src__widgets__widget_inspector._Location))})))}), dynamicToMuhtelife())]);
    },
    set rotalar(_) {}
  });
  dart.trackLibraries("packages/dijital_sarf/main", {
    "package:dijital_sarf/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/dijital_sarf/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAgB4B;AACxB,YAAO,qEACuB,cACrB,uBACA,wDACiB,2CAElB,+VACE,uBACC,SAAc,SAAgB,UAC9B,2DACwB,8BACtB,8CACI,QAAc,WACd,oDACY,AAAY,wCAAT,OAAO,6BACR,cAEZ,KAAK;IAO1B;;;;;;EACF;;;;;;;;;;AApCe,wCAAO;EAAQ;;;;;;;;MAE1B,YAAO;YAAG,2DACZ,YAAY,QAAC,WAAY,yXACzB,cAAc,QAAC,WAAY,+XAC3B,cAAc,QAAC,WAAY","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
