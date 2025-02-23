import React from 'react'
import { Portal } from 'react-native-paper'
import { once } from 'lodash'

import { createStackNavigator } from '../../appNavigation/stackNavigation'
import { withNavigationOptions } from '../../../lib/utils/navigation'
import { FaceVerification, FaceVerificationError, FaceVerificationIntro } from '..'
import logger from '../../../lib/logger/js-logger'

import { Support } from '../../webView/webViewInstances'
import Blurred from '../../common/view/Blurred'
import createAppContainer from '../../../lib/utils/createAppContainer'
import FVFlowProvider from './context/FVFlowContext'
import { FVFlowError, FVFlowSuccess } from '.'

const log = logger.child({ from: 'FVRouter' })

const FVFlowScreens = withNavigationOptions({
  navigationBarHidden: false,
  title: 'Face Verification',
})({
  FaceVerificationIntro,
  FaceVerification,
  FaceVerificationError,
  FVFlowSuccess,
  FVFlowError,
})

// will exec once during first render
const generateRouter = once(() => {
  const routes = {
    ...FVFlowScreens,
    Support,
  }

  const router = createStackNavigator(routes, {})

  log.debug('Generated fv router')
  return createAppContainer(router)
})

const Router = () => {
  const RouterWrapper = generateRouter()

  return (
    <>
      <FVFlowProvider>
        <Portal.Host>
          <Blurred whenDialog>
            <RouterWrapper />
          </Blurred>
        </Portal.Host>
      </FVFlowProvider>
    </>
  )
}

export default Router
