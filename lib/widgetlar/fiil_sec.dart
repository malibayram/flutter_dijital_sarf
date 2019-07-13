import 'package:dijital_sarf/veri/kaliplar.dart';
import 'package:dijital_sarf/veri/veri.dart';
import 'package:flutter_web/material.dart';

class FiilSec extends StatefulWidget {
  @override
  _FiilSecState createState() => _FiilSecState();
}

class _FiilSecState extends State<FiilSec> {
  String _harf1;
  String _harf2;
  String _harf3;

  String _bab;
  String _masdar;
  String _yMasdar;

  fiilYap(String b) {
    String madiHareke = Veri.hareke[0];
    String mudariHareke = Veri.hareke[2];

    switch (b) {
      case "اَلْبَابُ الثَّانِي":
        mudariHareke = Veri.hareke[1];
        break;
      case "اَلْبَابُ الثَّالِثُ":
        mudariHareke = Veri.hareke[0];
        break;
      case "اَلْبَابُ الرَّابِعُ":
        madiHareke = Veri.hareke[1];
        mudariHareke = Veri.hareke[0];
        break;
      case "اَلْبَابُ الْخَامِسُ":
        madiHareke = Veri.hareke[2];
        break;
      case "اَلْبَابُ السّادِسُ":
        madiHareke = Veri.hareke[1];
        mudariHareke = Veri.hareke[1];
        break;
    }

    Kalip.fiilMadi =
        "${_harf1 ?? Veri.harf[19]}${Veri.hareke[0]}${_harf2 ?? Veri.harf[17]}$madiHareke${_harf3 ?? Veri.harf[22]}${Veri.hareke[0]}";

    Kalip.fiilMudari =
        "${Veri.hareke[0]}${_harf1 ?? Veri.harf[19]}${Veri.hareke[6]}${_harf2 ?? Veri.harf[17]}$mudariHareke${_harf3 ?? Veri.harf[22]}";
  }

  masdarYap(String m) {
    _yMasdar =
        "${_harf1 ?? Veri.harf[19]}${Veri.hareke[0]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[6]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[3]}${Veri.harf[0]}";
    switch (m) {
      case "فِعَالَةً":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[1]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${Veri.harf[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[32]}${Veri.hareke[3]}";
        break;
      case "فِعَالًا":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[1]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${Veri.harf[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[3]}${Veri.harf[0]}";
        break;
      case "فَعَلَانًا":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[0]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[0]}${Veri.harf[24]}${Veri.hareke[3]}${Veri.harf[0]}";
        break;
      case "فُعَالًا":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[2]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${Veri.harf[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[3]}${Veri.harf[0]}";
        break;
      case "فُعْلَةً":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[2]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[6]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[32]}${Veri.hareke[3]}";
        break;
      case "فَعِيلًا":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[0]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[1]}${_harf3 ?? Veri.harf[27]}${Veri.harf[22]}${Veri.hareke[3]}${Veri.harf[0]}";
        break;

      case "فُعُولَةً":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[2]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[2]}${Veri.harf[25]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[32]}${Veri.hareke[3]}";
        break;

      case "فَعَالَةً":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[0]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${Veri.harf[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[32]}${Veri.hareke[3]}";
        break;

      case "فَعَلًا":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[0]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[3]}${Veri.harf[0]}";
        break;

      case "فُعُولًا":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[2]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[2]}${Veri.harf[25]}${_harf3 ?? Veri.harf[22]}${Veri.harf[0]}${Veri.hareke[3]}";
        break;

      case "فِعْلًا":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[1]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[6]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[3]}${Veri.harf[0]}";
        break;

      case "فُعْلًا":
        _yMasdar =
            "${_harf1 ?? Veri.harf[19]}${Veri.hareke[2]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[6]}${Veri.harf[22]}${Veri.hareke[3]}${Veri.harf[0]}";
        break;
    }
    Kalip.yMasdar = _yMasdar;
  }

  yirmiDort() {
    fiilYap(_bab ?? Veri.bab[0]);
    masdarYap(_masdar ?? Veri.masdar[0]);
    Kalip.ismiFail =
        "${_harf1 ?? Veri.harf[19]}${Veri.hareke[0]}${Veri.harf[0]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[1]}${_harf3 ?? Veri.harf[22]}";
    Kalip.ismiMeful =
        "${Veri.harf[23]}${Veri.hareke[0]}${_harf1 ?? Veri.harf[19]}${Veri.hareke[6]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[2]}${Veri.harf[25]}${_harf3 ?? Veri.harf[22]}";
    Kalip.cahdiMutlak =
        "${Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[23]}${Veri.hareke[6]} ${Veri.harf[27]}${Kalip.fiilMudari}";
    Kalip.cahdiMustagrak =
        "${Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[23]}${Veri.hareke[10]}${Veri.hareke[0]}${Veri.harf[0]} ${Veri.harf[27]}${Kalip.fiilMudari}";
    Kalip.nefiHal =
        "${Veri.harf[23]}${Veri.hareke[0]}${Veri.harf[0]} ${Veri.harf[27]}${Kalip.fiilMudari}";
    Kalip.nefiIstikbal =
        "${Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[0]} ${Veri.harf[27]}${Kalip.fiilMudari}";
    Kalip.tekitNefiIstikbal =
        "${Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[24]}${Veri.hareke[6]} ${Veri.harf[27]}${Kalip.fiilMudari}";

    Kalip.emriGaib =
        "${Veri.harf[22]}${Veri.hareke[1]}${Veri.harf[27]}${Kalip.fiilMudari}";
    Kalip.nehiGaib =
        "${Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[0]} ${Veri.harf[27]}${Kalip.fiilMudari}";
    Kalip.emriHadir =
        "${Veri.harf[0]}${Veri.hareke[2]}${Kalip.fiilMudari.substring(1)}${Veri.hareke[6]}";
    Kalip.nehiHadir =
        "${Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[0]} ${Veri.harf[2]}${Kalip.fiilMudari}${Veri.hareke[6]}";

    Kalip.ismiMekan =
        "${Veri.harf[23]}${Veri.hareke[0]}${_harf1 ?? Veri.harf[19]}${Veri.hareke[6]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[5]}";
    Kalip.ismiAlet =
        "${Veri.harf[23]}${Veri.hareke[1]}${_harf1 ?? Veri.harf[19]}${Veri.hareke[6]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[5]}";
    Kalip.merreMastar =
        "${_harf1 ?? Veri.harf[19]}${Veri.hareke[0]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[6]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[32]}${Veri.hareke[3]}";
    Kalip.neviMastar =
        "${_harf1 ?? Veri.harf[19]}${Veri.hareke[1]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[6]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[32]}${Veri.hareke[3]}";

    Kalip.ismiTasgir =
        "${_harf1 ?? Veri.harf[19]}${Veri.hareke[2]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${Veri.harf[27]}${Veri.hareke[6]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[5]}";
    Kalip.ismiMensub =
        "${_yMasdar.substring(0, _yMasdar.length - 2)}${Veri.hareke[1]}${Veri.harf[27]}${Veri.hareke[10]}${Veri.hareke[5]}";
    Kalip.mubalagaIsmiFail =
        "${_harf1 ?? Veri.harf[19]}${Veri.hareke[0]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[10]}${Veri.hareke[0]}${Veri.harf[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[5]}";
    Kalip.ismiTafdil =
        "${Veri.hareke[8]}${Veri.hareke[0]}${_harf1 ?? Veri.harf[19]}${Veri.hareke[6]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[2]}";

    Kalip.taaccub1 =
        "${Veri.harf[23]}${Veri.hareke[0]}${Veri.harf[0]} ${Veri.hareke[8]}${Veri.hareke[0]}${_harf1 ?? Veri.harf[19]}${Veri.hareke[6]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[0]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[0]}${Veri.harf[26]}${Veri.hareke[2]}";

    Kalip.taaccub2 =
        "${Veri.harf[25]}${Veri.hareke[0]}${Veri.hareke[8]}${Veri.hareke[0]}${_harf1 ?? Veri.harf[19]}${Veri.hareke[6]}${_harf2 ?? Veri.harf[17]}${Veri.hareke[1]}${_harf3 ?? Veri.harf[22]}${Veri.hareke[6]} ${Veri.harf[1]}${Veri.hareke[1]}${Veri.harf[26]}${Veri.hareke[1]}";
  }

  @override
  Widget build(BuildContext context) {
    yirmiDort();
    return Padding(
      padding: EdgeInsets.all(12.0),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SizedBox(height: 12.0),
            Text(
              "${Kalip.fiilMadi} ${Veri.harf[27]}${Kalip.fiilMudari}${Veri.hareke[2]} ${Kalip.yMasdar}",
              style: TextStyle(
                fontSize: 60.0,
                fontFamily: 'Lateef',
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(": اختر الحروف"),
                SizedBox(width: 12.0),
                DropdownButton(
                  items: Veri.harf.map((String harf) {
                    return DropdownMenuItem(
                      value: harf,
                      child: Text(
                        harf,
                        style: TextStyle(
                          fontSize: 30.0,
                          fontFamily: 'Lateef',
                        ),
                      ),
                    );
                  }).toList(),
                  onChanged: (s) {
                    _harf1 = s;
                    setState(() {});
                  },
                  value: _harf1,
                  hint: Text("ف"),
                ),
                DropdownButton(
                  items: Veri.harf.map((String harf) {
                    return DropdownMenuItem(
                      value: harf,
                      child: Text(
                        harf,
                        style: TextStyle(
                          fontSize: 30.0,
                          fontFamily: 'Lateef',
                        ),
                      ),
                    );
                  }).toList(),
                  onChanged: (s) {
                    _harf2 = s;
                    setState(() {});
                  },
                  value: _harf2,
                  hint: Text("ع"),
                ),
                DropdownButton(
                  items: Veri.harf.map((String harf) {
                    return DropdownMenuItem(
                      value: harf,
                      child: Text(
                        harf,
                        style: TextStyle(
                          fontSize: 30.0,
                          fontFamily: 'Lateef',
                        ),
                      ),
                    );
                  }).toList(),
                  onChanged: (s) {
                    _harf3 = s;
                    setState(() {});
                  },
                  value: _harf3,
                  hint: Text("ل"),
                ),
                SizedBox(width: 12.0),
                Text(": اختر الباب"),
                SizedBox(width: 12.0),
                DropdownButton(
                  items: Veri.bab.map((String bab) {
                    return DropdownMenuItem(
                      value: bab,
                      child: Text(
                        bab,
                        style: TextStyle(
                          fontSize: 30.0,
                          fontFamily: 'Lateef',
                        ),
                      ),
                    );
                  }).toList(),
                  onChanged: (s) {
                    _bab = s;
                    setState(() {});
                  },
                  value: _bab,
                  hint: Text(_bab ?? Veri.bab[0]),
                ),
                SizedBox(width: 12.0),
                Text(": اختر المصدر"),
                SizedBox(width: 12.0),
                DropdownButton(
                  items: Veri.masdar.map((String masdar) {
                    return DropdownMenuItem(
                      value: masdar,
                      child: Text(
                        masdar,
                        style: TextStyle(
                          fontSize: 30.0,
                          fontFamily: 'Lateef',
                        ),
                      ),
                    );
                  }).toList(),
                  onChanged: (s) {
                    _masdar = s;
                    setState(() {});
                  },
                  value: _masdar,
                  hint: Text(_masdar ?? Veri.masdar[0]),
                ),
                SizedBox(height: 12.0),
              ],
            ),
            SizedBox(width: 12.0),
          ],
        ),
      ),
    );
  }
}
