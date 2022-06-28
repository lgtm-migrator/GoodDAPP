import codePush from 'react-native-code-push' // eslint-disable-line import/default

const { CheckFrequency } = codePush
const defaultOptions = { checkFrequency: CheckFrequency.ON_APP_START }
const withHotCodePush = (component, options = defaultOptions) => codePush(options)(component)

export default withHotCodePush
