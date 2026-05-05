import 'package:flutter/material.dart';
import 'core/theme.dart';
import 'routes/app_routes.dart';
import 'shared/services/storage_service.dart';
import 'shared/services/api_service.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // 🔐 Auto login check
  final token = await StorageService.getToken();
  ApiService.token = token;

  runApp(MyApp(isLoggedIn: token != null));
}

class MyApp extends StatelessWidget {
  final bool isLoggedIn;

  const MyApp({super.key, required this.isLoggedIn});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,

      // 🎨 Theme
      theme: AppTheme.darkTheme,

      // 🔀 Routes
      routes: AppRoutes.routes,

      // 🚀 Initial route (auto login)
      initialRoute: isLoggedIn ? "/dashboard" : "/",

      // ⚠️ Fallback route (pro feature)
      onUnknownRoute: (settings) {
        return MaterialPageRoute(
          builder: (_) => const Scaffold(
            body: Center(
              child: Text("Page Not Found"),
            ),
          ),
        );
      },
    );
  }
}