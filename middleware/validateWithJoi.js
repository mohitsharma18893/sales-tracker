import codes from "../constants/httpCodes.js";
import messages from "../constants/messages.js";

export const validateWithJoi = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(codes.BAD_REQUEST).json({
      message: messages.BAD_REQUEST,
      errors: error.details.map(err => ({
        field: err.context.key,
        message: err.message
      }))
    });
  }

  next();
};
