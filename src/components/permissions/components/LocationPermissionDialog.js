import React, { useCallback } from 'react'

import { t } from '@lingui/macro'
import ExplanationDialog from '../../common/dialogs/ExplanationDialog'
import illustration from '../../../assets/NotificationPermission.svg'

export default ({ onDismiss }) => {
  const onPrompt = useCallback(() => onDismiss(true), [onDismiss])

  return (
    <ExplanationDialog
      title={t`This application may use your location to show you content that is relevant to you.`}
      image={illustration}
      buttonsContainerStyle={{
        flexDirection: 'column',
      }}
      buttons={[
        {
          text: t`ALLOW`,
          action: onPrompt,
          style: { width: '100%', marginBottom: 8 },
        },
        {
          text: t`DECLINE`,
          action: onDismiss,
          mode: 'text',
        },
      ]}
    />
  )
}

/*
 - Usage example

const { showDialog } = useDialog()

showDialog({
  content: <CameraPermissionDialog />,
  isMinHeight: false,
  showButtons: false,
  buttons: [
    {
      text: 'OK',
      onPress: dismiss => {
        // do something
        dismiss()
      },
    },
  ],
})
*/
