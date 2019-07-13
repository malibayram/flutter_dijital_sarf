import 'package:dijital_sarf/veri/veri.dart';
import 'package:flutter_web/material.dart';

class Muhtelife extends StatefulWidget {
  @override
  _MuhtelifeState createState() => _MuhtelifeState();
}

class _MuhtelifeState extends State<Muhtelife> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("أمثلة مختلفة"),
        centerTitle: true,
      ),
      body: Container(
        child: GridView.builder(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 4,
          ),
          itemCount: 24,
          itemBuilder: (ctx, i) {
            return Card(
              child: Column(
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.all(12.0),
                    child: Text(
                      Veri.yirmi4[i],
                      style: TextStyle(
                        fontSize: 60.0,
                        fontFamily: 'Lateef',
                      ),
                    ),
                  ),
                  Expanded(
                    child: Container(color: Colors.amber),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}
