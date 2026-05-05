import 'dart:convert';
import 'package:http/http.dart' as http;
import '../../core/env.dart';

class ApiService {
  static String? token;

  static Map<String, String> _headers() {
    return {
      "Content-Type": "application/json",
      if (token != null) "Authorization": "Bearer $token!",
    };
  }

  static Future<dynamic> get(String endpoint) async {
    final res = await http.get(
      Uri.parse("${Env.baseUrl}$endpoint"),
      headers: _headers(),
    );

    return jsonDecode(res.body);
  }

  static Future<dynamic> post(String endpoint, Map body) async {
    final res = await http.post(
      Uri.parse("${Env.baseUrl}$endpoint"),
      headers: _headers(),
      body: jsonEncode(body),
    );

    return jsonDecode(res.body);
  }

  static Future<dynamic> put(String endpoint, Map body) async {
    final res = await http.put(
      Uri.parse("${Env.baseUrl}$endpoint"),
      headers: _headers(),
      body: jsonEncode(body),
    );

    return jsonDecode(res.body);
  }
}