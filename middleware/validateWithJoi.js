import codes from "../constants/httpCodes.js";
import messages from "../constants/messages.js";
import logger from '../utils/logger.js';

export const validateWithJoi = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    logger.error(error);
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
