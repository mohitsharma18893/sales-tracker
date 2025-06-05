import codes from '../constants/httpCodes.js';
import messages from '../constants/messages.js';

export default async function checkRole(roleNeeded, userRole) {
  if (roleNeeded !== userRole) {
    const error = new Error(messages.FORBIDDEN);
    error.statusCode = codes.FORBIDDEN;
    throw error;
  }
}