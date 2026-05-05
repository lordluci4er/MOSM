import 'package:flutter/material.dart';
import '../controllers/auth_controller.dart';
import '../../../shared/widgets/custom_button.dart';
import '../../../shared/widgets/input_field.dart';

class SignupScreen extends StatelessWidget {
  final emailCtrl = TextEditingController();
  final passCtrl = TextEditingController();
  final controller = AuthController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Signup")),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            InputField(controller: emailCtrl, hint: "Email"),
            SizedBox(height: 10),
            InputField(controller: passCtrl, hint: "Password"),
            SizedBox(height: 20),

            CustomButton(
              text: "Signup",
              onPressed: () {
                controller.signup(
                  context,
                  emailCtrl.text,
                  passCtrl.text,
                );
              },
            )
          ],
        ),
      ),
    );
  }
}