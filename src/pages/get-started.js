import React, { useState } from 'react'
import SimpleCrypto from 'simple-crypto-js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component'
import axios from 'axios'

const BACKEND_URL = 'http://localhost:4000'
const FRONTEND_URL = 'http://localhost:3000'

const CompanyRegister = () => {
  const [step, setStep] = useState(0)
  const [body, setBody] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [companyName, setCompanyName] = useState('')
  const [code, setCode] = useState()
  const [companyDescription, setCompanyDescription] = useState('')
  if (process.browser) {
    var _secretKey = 'wlacksecret!@#'
    var simpleCrypto = new SimpleCrypto(_secretKey)
    console.log(
      simpleCrypto.encrypt(`${FRONTEND_URL}/wlack/general/general`)
    )
  }

  const onFailed = error => {
    alert(error)
  }

  const registerApp = async () => {
    var _secretKey = 'wlacksecret!@#'

    var simpleCrypto = new SimpleCrypto(_secretKey)
    setLoading(true)
    try {
      // Store the token in cookie
      await axios.post(`${BACKEND_URL}/register`, {
        tenantName: companyName,
        username: body.profile.username,
        fullname: body.profile.displayName,
        description: companyDescription,
        image: body.profile.photos[0].value,
        email: body.profile.emails[0].value,
      })

      const appid = simpleCrypto.encrypt(
        `${FRONTEND_URL}/${companyName}/general/general`
      )
      setCode(`
      <!-- wlack widget script -->
      <script>
      (function (w,d,s,o,f,js,fjs) {
      w['wlack-widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
      }(window, document, 'script', 'mw', 'https://wlack.com/widget.js'));
      mw('appid', '${appid}');
      </script>`)
      setStep(2)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const onSuccessTwitter = async response => {
    try {
      const body = await response.json()
      setBody(body)
      setStep(1)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {step === 0 && (
        <TwitterAuth
          onFailed={onFailed}
          onSuccessTwitter={onSuccessTwitter}
          error={error}
        />
      )}
      {step === 1 && (
        <WidgetScriptForm
          companyName={companyName}
          setCompanyName={setCompanyName}
          companyDescription={companyDescription}
          setCompanyDescription={setCompanyDescription}
          registerApp={registerApp}
          loading={loading}
        />
      )}

      {step === 2 && <WidgetScriptCode code={code} />}
    </div>
  )
}

const TwitterAuth = ({ onFailed, onSuccessTwitter, error }) => (
  <>
    <p>To continue, create an account</p>

    <TwitterLogin
      loginUrl={`${BACKEND_URL}/api/v1/auth/twitter`}
      onFailure={onFailed}
      onSuccess={onSuccessTwitter}
      requestTokenUrl={`${BACKEND_URL}/api/v1/auth/twitter/reverse`}
      showIcon
      forceLogin
      style={{ padding: 0 }}
    >
      <button
        type="button"
        style={{
          marginTop: 18,
          width: 350,
          height: 50,
        }}
      >
        Continue with Twitter
      </button>
    </TwitterLogin>
    {error && <p>Issue occurred while registering :(</p>}
  </>
)

const WidgetScriptForm = ({
  companyName,
  setCompanyName,
  companyDescription,
  setCompanyDescription,
  registerApp,
  loading,
}) => (
  <>
    <input
      type="text"
      id="role-name"
      name=""
      placeholder="Wlack"
      value={companyName}
      onChange={e => setCompanyName(e.target.value)}
    />

    <input
      type="text"
      id="role-desc"
      name=""
      placeholder="description"
      value={companyDescription}
      onChange={e => setCompanyDescription(e.target.value)}
    />
    <button
      type="button"
      style={{
        marginTop: 18,
        width: 350,
        height: 50,
      }}
      onClick={() => registerApp()}
      disabled={companyName === '' || loading ? true : false}
    >
      {loading ? 'Please wait' : 'Register App'}
    </button>
  </>
)

const WidgetScriptCode = ({ code }) => (
  <div className="modal-tab-content pbn" ng-show="model.activeTab === 1">
    <div>
      This tracking code is unique to <strong>wlack.com</strong>.
    </div>
    <div class="mtb">
      {' '}
      Paste this code into the <code>&lt;head&gt;</code> of every page.
    </div>
    <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
  </div>
)

export default CompanyRegister
