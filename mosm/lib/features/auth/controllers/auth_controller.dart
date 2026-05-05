import 'package:flutter/material.dart';
import '../services/auth_service.dart';
import '../../../shared/services/api_service.dart';
import '../../../shared/services/storage_service.dart';
import '../../../core/utils.dart';

class AuthController {
  final AuthService _service = AuthService();

  // 🔐 LOGIN
  Future<void> login(
      BuildContext context, String email, String password) async {
    final res = await _service.login(email, password);

    if (res["success"]) {
      final token = res["data"]["token"];

      // Save token in memory
      ApiService.token = token;

      // Save token permanently
      await StorageService.saveToken(token);

      Utils.showSnack(context, "Login Success");

      Navigator.pushReplacementNamed(context, "/dashboard");
    } else {
      Utils.showSnack(context, res["message"]);
    }
  }

  // 📝 SIGNUP
  Future<void> signup(
      BuildContext context, String email, String password) async {
    final res = await _service.signup(email, password);

    if (res["success"]) {
      Utils.showSnack(context, "Signup Success");

      Navigator.pop(context); // back to login
    } else {
      Utils.showSnack(context, res["message"]);
    }
  }

  // 🚪 LOGOUT
  Future<void> logout(BuildContext context) async {
    await StorageService.clear();
    ApiService.token = null;

    Navigator.pushReplacementNamed(context, "/");
  }
}