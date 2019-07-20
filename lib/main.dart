import 'package:dijital_sarf/anasayfa.dart';
import 'package:dijital_sarf/sayfalar/harekeler.dart';
import 'package:dijital_sarf/sayfalar/harfler.dart';
import 'package:dijital_sarf/sayfalar/muhtelife.dart';
import 'package:flutter_web/material.dart';
//Süleyman Bal
void main() => runApp(MyApp());

var rotalar = {
  '/harfler': (context) => Harfler(),
  '/harekeler': (context) => Harekeler(),
  '/muhtelife': (context) => Muhtelife(),
};

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Dijital Sarf',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Anasayfa(),
      routes: rotalar,
      builder: (BuildContext context, Widget child) {
        return Directionality(
          textDirection: TextDirection.rtl,
          child: Builder(
            builder: (BuildContext context) {
              return MediaQuery(
                data: MediaQuery.of(context).copyWith(
                  textScaleFactor: 1.0,
                ),
                child: child,
              );
            },
          ),
        );
      },
    );
  }
}
