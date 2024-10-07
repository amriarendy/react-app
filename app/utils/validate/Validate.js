import bcrypt from "bcrypt"; // Note: bcrypt is unused here, consider removing if not needed

// Interface for Validator
class Validator {
  validate(data) {
    throw new Error("Method 'validate()' must be implemented.");
  }
}

class Required extends Validator {
  validate(field) {
    if (!field) {
      return {
        valid: false,
        error: {
          code: 400,
          errors: {
            code: "REQUIRED",
            field: "input",
            message: "Email is required!",
          },
        },
      };
    }
    return { valid: true }; // Return valid response if no error
  }
}

export { Required };

// class emailRegex extends Validator {
//   validate(field) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(field) || field.length < 5 || field.length > 50) {
//       return {
//         valid: false,
//         error: createErrorResponse(
//           "Invalid email format or length!",
//           "EMAIL_VALID",
//           "email"
//         ),
//       };
//     }
//     return { valid: true };
//   }
// }
