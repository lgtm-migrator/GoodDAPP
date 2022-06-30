// eslint-disable-next-line import/default
import codePush from 'react-native-code-push'

export const getCodePushStatus = status => {
  switch (status) {
    case codePush.SyncStatus.CHECKING_FOR_UPDATE:
      return 'Checking for updates.'
    case codePush.SyncStatus.DOWNLOADING_PACKAGE:
      return 'Downloading package.'
    case codePush.SyncStatus.INSTALLING_UPDATE:
      return 'Installing update.'
    case codePush.SyncStatus.UP_TO_DATE:
      return 'Up-to-date.'
    case codePush.SyncStatus.UPDATE_INSTALLED:
      return 'Update installed.'
    default:
      return JSON.stringify(status)
  }
}
