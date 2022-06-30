import React, { createContext, useContext } from 'react'
// eslint-disable-next-line import/default
import codePush from 'react-native-code-push'

const CodePushContext = createContext({})

export const useCodePush = () => useContext(CodePushContext)

export const CodePushProvider = codePush()(
  class extends React.Component {
    state = {
      status: null,
      progress: null,
    }

    codePushStatusDidChange(status) {
      this.setState({ status })
    }

    codePushDownloadDidProgress(progress) {
      this.setState({ progress: progress.receivedBytes / progress.totalBytes })
    }

    render() {
      return (
        <CodePushContext.Provider
          value={{
            status: this.state.status,
            progress: this.state.progress,
          }}
        >
          {this.props.children}
        </CodePushContext.Provider>
      )
    }
  },
)

export default CodePushProvider
