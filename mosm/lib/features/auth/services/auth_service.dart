import '../../../shared/services/api_service.dart';

class AuthService {
  Future<Map<String, dynamic>> login(String email, String password) async {
    return await ApiService.post("/auth/login", {
      "email": email,
      "password": password,
    });
  }

  Future<Map<String, dynamic>> signup(String email, String password) async {
    return await ApiService.post("/auth/signup", {
      "email": email,
      "password": password,
    });
  }
}