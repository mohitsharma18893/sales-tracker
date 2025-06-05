import codes from '../constants/httpCodes.js';
import messages from '../constants/messages.js';

export default async function checkRole(roleNeeded, userRole) {
  if (roleNeeded !== userRole) {
    const error = new Error(messages.UNAUTHORIZED);
    error.statusCode = codes.UNAUTHORIZED;
    throw error;
  }
}