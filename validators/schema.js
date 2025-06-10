import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string()
    .min(5)
    .required()
    .messages({
      'string.min': 'Username must be at least 5 characters long',
      'any.required': 'Username is required',
    }),

  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/)
    .required()
    .messages({
      'string.pattern.base': 'Password must include uppercase, lowercase, number and special char',
      'any.required': 'Password is required',
    }),
});

export const salesmanSchema = Joi.object({
  firstName: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.base': 'First name must be a string',
      'string.pattern.base': 'First name must contain only letters',
      'any.required': 'First name is required',
    }),

  lastName: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.base': 'Last name must be a string',
      'string.pattern.base': 'Last name must contain only letters',
      'any.required': 'Last name is required',
    }),

  contact: Joi.string()
    .pattern(/^\+91[6-9]\d{9}$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid Indian contact number format',
      'any.required': 'Contact is required',
    }),

  username: Joi.string()
    .min(5)
    .required()
    .messages({
      'string.min': 'Username must be at least 5 characters long',
      'any.required': 'Username is required',
    }),

  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/)
    .required()
    .messages({
      'string.pattern.base': 'Password must include uppercase, lowercase, number and special char',
      'any.required': 'Password is required',
    }),
});

export const salesmanIdSchema = Joi.string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .message('Invalid MongoDB ObjectId')
  .required();

export const shopSchema = Joi.object({
  shopName: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.base': 'First name must be a string',
      'string.pattern.base': 'First name must contain only letters',
      'any.required': 'First name is required',
    }),

  shopContact: Joi.string()
    .pattern(/^\+91[6-9]\d{9}$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid Indian contact number format',
      'any.required': 'Contact is required',
    }),

  shopAddress: Joi.string()
    .min(5)
    .required()
    .messages({
      'string.min': 'Username must be at least 5 characters long',
      'any.required': 'Username is required',
    }),
});

export const shopIdSchema = Joi.string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .message('Invalid MongoDB ObjectId')
  .required();

export const saleSchema = Joi.object({
  shop: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .message('Invalid MongoDB ObjectId')
    .required(),

  salesman: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .message('Invalid MongoDB ObjectId')
    .required(),

  item: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.base': 'Item must be a string',
      'string.pattern.base': 'Item must contain only letters',
      'any.required': 'Item is required',
    }),

  quantity: Joi.number().min(0)
    .required()
    .messages({
      'number.base': 'Quantity must be a number',
      'number.min': 'Minimum quantity is 0',
      'any.required': 'Quantity is required'
    }),
});

export const shopSalesmanMapping = Joi.object({
  shop: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .message('Invalid MongoDB ObjectId')
    .required(),

  salesman: Joi.array()
    .items(
      Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/, 'valid MongoDB ObjectId')
        .messages({
          'string.pattern.name': 'Each salesman ID must be a valid MongoDB ObjectId',
          'string.base': 'Each salesman ID must be a string',
          'string.empty': 'Salesman ID cannot be empty',
        })
    )
    .min(1)
    .required()
    .messages({
      'array.base': 'Salesman must be an array',
      'array.min': 'At least one salesman ID is required',
      'any.required': 'Salesman field is required',
    })
});