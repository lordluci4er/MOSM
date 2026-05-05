import 'package:flutter/material.dart';

class MedicineTile extends StatelessWidget {
  final String name;

  const MedicineTile({required this.name});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(name),
    );
  }
}