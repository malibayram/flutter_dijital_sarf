import 'package:dijital_sarf/widgetlar/fiil_sec.dart';
import 'package:flutter_web/material.dart';

class Anasayfa extends StatefulWidget {
  @override
  _AnasayfaState createState() => _AnasayfaState();
}

class _AnasayfaState extends State<Anasayfa> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("  Dijital Sarf"),
        centerTitle: true,
        actions: <Widget>[
          FlatButton(
            onPressed: () {
              Navigator.pushNamed(context, '/harfler');
            },
            child: Text("Harfler"),
          ),
          FlatButton(
            onPressed: () {
              Navigator.pushNamed(context, '/harekeler');
            },
            child: Text("Harekeler"),
          ),
        ],
      ),
      body: Column(
        children: <Widget>[
          FiilSec(),
          Center(
            child: MaterialButton(
              onPressed: () {
                Navigator.pushNamed(context, '/muhtelife');
              },
              child: Text(
                "صرف",
                style: TextStyle(
                  fontSize: 60.0,
                  fontFamily: 'Lateef',
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
