import 'package:dijital_sarf/veri/veri.dart';
import 'package:flutter_web/material.dart';

class Harekeler extends StatefulWidget {
  @override
  _HarekelerState createState() => _HarekelerState();
}

class _HarekelerState extends State<Harekeler> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Harekeler"),
        centerTitle: true,
      ),
      body: GridView.builder(
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 4,
        ),
        itemCount: Veri.hareke.length,
        itemBuilder: (ctx, i) {
          return Card(
            child: Container(
              padding: EdgeInsets.all(8.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    "Hareke ${i + 1}",
                    style: TextStyle(
                      fontSize: 20.0,
                      fontFamily: 'Lateef',
                    ),
                  ),
                  Text(
                    "بب${Veri.hareke[i]}ب",
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
