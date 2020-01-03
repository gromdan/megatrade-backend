/* **************************************************************************
 * Copyright(C) Mega Trade Website, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Abdeen Mohamed < abdeen.mohamed@outlook.com>, September 2019
 ************************************************************************** */

import { Router } from 'express'
import * as MiscellaneousController from './Controller'

const routes = new Router()

routes.post('/miscellaneous/question', MiscellaneousController.question)
routes.post('/miscellaneous/newsLetter', MiscellaneousController.newsLetter)
routes.post('/miscellaneous/twitterPost', MiscellaneousController.twitterPost)
routes.post('/miscellaneous/paypalWebhookLive', MiscellaneousController.paypalWebhookLive)
routes.post('/miscellaneous/paypalWebhookSandbox', MiscellaneousController.paypalWebhookSandbox)
routes.post('/miscellaneous/paypalPaymentSuspended', MiscellaneousController.paypalPaymentSuspended)
routes.post('/miscellaneous/paypalSubscriptionSusbended', MiscellaneousController.paypalSubscriptionSusbended)

export default routes