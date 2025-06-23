import { Router} from 'express';
import { sendReminders } from '../controllers/workflow.controller.js';
import { sendReminderEmail } from '../utils/send-email.js';

const workflowRouter = Router();

workflowRouter.post('/subscription/reminder', sendReminders);

// workflowRouter.post('/test-email', async (req, res) => {
//   try {
//     await sendReminderEmail({
//       to: req.body.to || 'test@outlook.com',
//       type: '7 days before reminder',
//       subscription: {
//         user: { name: 'Test User', email: req.body.to || 'test@outlook.com' },
//         name: 'Test Subscription',
//         renewalDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//         currency: 'USD',
//         price: 10,
//         frequency: 'monthly',
//         paymentMethod: 'Credit Card',
//       },
//     });
//     res.json({ success: true, message: 'Test email attempted. Check your console for logs.' });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

export default workflowRouter;