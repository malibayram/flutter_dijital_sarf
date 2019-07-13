import 'package:dijital_sarf/veri/veri.dart';
import 'package:flutter_web/material.dart';

class Harfler extends StatefulWidget {
  @override
  _HarflerState createState() => _HarflerState();
}

class _HarflerState extends State<Harfler> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("  Harfler"),
        centerTitle: true,
      ),
      body: GridView.builder(
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 5,
        ),
        itemCount: Veri.harf.length,
        itemBuilder: (ctx, i) {
          return Card(
            child: Container(
              padding: EdgeInsets.all(8.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    "Harf ${i + 1}",
                    style: TextStyle(
                      fontSize: 20.0,
                      fontFamily: 'Lateef',
                    ),
                  ),
                  Text(
                    Veri.harf[i],
                    style: TextStyle(
                      fontSize: 60.0,
                      fontFamily: 'Lateef',
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
