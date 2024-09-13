const validation = (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({
            code: 400,
            status: "error",
            errors: {
                code: "REQUIRED",
                message: "Email are required!",
                field: "email"
            }
        })
    }

    if (!password) {
        return res.status(400).json({
            code: 400,
            status: "error",
            message: "Password are required!",
            errors: {
                code: "REQUIRED",
                message: "Password are required!",
                field: "password"
            }
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            code: 400,
            status: "error",
            errors: {
                code: "EMAIL_VALID",
                message: "Email invalid format",
                field: "email"
            }
        })
    }

    if (email.length < 5) {
        return res.status(400).json({
            code: 400,
            status: "error",
            errors: {
                code: "TO_SHORT",
                message: "Email must be at least 6 characters long",
                field: "email",
            }
        });
    }

    if (email.length > 50) {
        return res.status(400).json({
            code: 400,
            status: "error",
            errors: {
                code: "TO_LONG",
                message: "Email must be no more than 20 characters long",
                field: "email",
            }
        });
    }

        if (password.length < 3) {
            return res.status(400).json({
                code: 400,
                status: "error",
                errors: {
                    code: "TO_SHORT",
                    message: "Password must be at least 3 characters long",
                    field: "password",
                }
            });
        }
    
        if (password.length > 50) {
            return res.status(400).json({
                code: 400,
                status: "error",
                errors: {
                    code: "TO_LONG",
                    message: "Password must be no more than 50 characters long",
                    field: "password",
                }
            });
        }

    next();
}

export default validation;