import 'package:flutter/material.dart';

class PartyCard extends StatelessWidget {
  final String name;
  final double due;

  const PartyCard({required this.name, required this.due});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(name),
        subtitle: Text("Due: ₹$due"),
      ),
    );
  }
}