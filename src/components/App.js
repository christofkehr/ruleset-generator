import React, { Component } from 'react'
import AppHeader from './AppHeader'
import Main from './Main'
import CssBaseline from 'material-ui/CssBaseline'
import { appTitle } from '../utils/Texts'
import { fetchRuleset } from '../utils/ZgifApi'
import updateActiveRuleset from '../actions/updateActiveRuleset'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ruleset: null
    }
  }

  componentDidMount() {
    document.title = appTitle
  }

  onRulesetChange = (rulesetUrl) => {
    (rulesetUrl ? fetchRuleset(rulesetUrl) : Promise.resolve())
      .then(ruleset => {
        this.setState({ ruleset })
        this.props.dispatch(updateActiveRuleset(ruleset ? ruleset : {}));
      })
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <AppHeader />
        <Main ruleset={ this.state.ruleset }
              onRulesetChange={ this.onRulesetChange } />
      </div>
    )
  }
}

export default App
