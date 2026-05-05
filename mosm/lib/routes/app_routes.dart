import 'package:flutter/material.dart';

import '../features/auth/screens/login_screen.dart';
import '../features/auth/screens/signup_screen.dart';
import '../features/dashboard/screens/dashboard_screen.dart';

class AppRoutes {
  static Map<String, WidgetBuilder> routes = {
    "/": (context) => LoginScreen(),
    "/signup": (context) => SignupScreen(),
    "/dashboard": (context) => DashboardScreen(),
  };
}