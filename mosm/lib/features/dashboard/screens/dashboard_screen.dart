import 'package:flutter/material.dart';
import '../../auth/controllers/auth_controller.dart';

class DashboardScreen extends StatelessWidget {
  final AuthController controller = AuthController();

  DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Dashboard"),
        actions: [
          IconButton(
            onPressed: () => controller.logout(context),
            icon: const Icon(Icons.logout),
          )
        ],
      ),
      body: const Center(
        child: Text("Welcome to MediFlow 🚀"),
      ),
    );
  }
}