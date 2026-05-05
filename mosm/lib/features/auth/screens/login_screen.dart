import 'package:flutter/material.dart';
import '../controllers/auth_controller.dart';
import '../../../shared/widgets/custom_button.dart';
import '../../../shared/widgets/input_field.dart';

class LoginScreen extends StatelessWidget {
  final emailCtrl = TextEditingController();
  final passCtrl = TextEditingController();
  final controller = AuthController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Login")),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            InputField(controller: emailCtrl, hint: "Email"),
            SizedBox(height: 10),
            InputField(controller: passCtrl, hint: "Password"),
            SizedBox(height: 20),

            CustomButton(
              text: "Login",
              onPressed: () {
                controller.login(
                  context,
                  emailCtrl.text,
                  passCtrl.text,
                );
              },
            ),

            TextButton(
              onPressed: () {
                Navigator.pushNamed(context, "/signup");
              },
              child: Text("Create Account"),
            )
          ],
        ),
      ),
    );
  }
}