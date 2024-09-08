import React, { useState } from 'react';
import './SnippetTabs.css';
import { FiCopy } from 'react-icons/fi'; 

const snippets = {
  Python: `
<span class="line-number">1</span>  <span class="comment"># List all messages</span><br>
<span class="line-number">2</span>  <span class="keyword">client</span> = <span class="keyword">plivo</span>.RestClient(auth_id="<auth_id>", auth_token="<auth_token>")<br>
<span class="line-number">3</span>  <span class="comment"># List MDR</span><br>
<span class="line-number">4</span>  <span class="keyword">response</span> = <span class="keyword">client</span>.messages.list(limit=<span class="number">1</span>,offset=<span class="number">0</span>)<br>
<span class="line-number">5</span>  <span class="built_in">print</span>(<span class="keyword">response</span>)
  `,
  Ruby: `
<span class="line-number">1</span>  <span class="keyword">require</span> 'net/http'<br><br>
<span class="line-number">2</span>  <span class="keyword">uri</span> = URI('https://api.plivo.com/v1/')<br>
<span class="line-number">3</span>  Net::HTTP.post_form(<span class="keyword">uri</span>, params: {...})
  `,
  Node: `
<span class="line-number">1</span>  <span class="keyword">const</span> axios = <span class="keyword">require</span>('axios');<br><br>
<span class="line-number">2</span>  axios.post('https://api.plivo.com/v1/', {...})
  `,
  PHP: `
<span class="line-number">1</span>  <span class="keyword">$ch</span> = curl_init('https://api.plivo.com/v1/');<br>
<span class="line-number">2</span>  curl_setopt(<span class="keyword">$ch</span>, CURLOPT_POSTFIELDS, json_encode(...));<br>
<span class="line-number">3</span>  curl_exec(<span class="keyword">$ch</span>);
  `,
  Java: `
<span class="line-number">1</span>  <span class="keyword">import</span> java.net.HttpURLConnection;<br>
<span class="line-number">2</span>  <span class="keyword">import</span> java.net.URL;<br><br>
<span class="line-number">3</span>  URL url = <span class="keyword">new</span> URL("https://api.plivo.com/v1/");<br>
<span class="line-number">4</span>  HttpURLConnection conn = (HttpURLConnection) url.openConnection();<br>
<span class="line-number">5</span>  conn.setRequestMethod("POST");<br>
<span class="line-number">6</span>  conn.getOutputStream().write(...);
  `,
  ".NET": `
<span class="line-number">1</span>  <span class="keyword">using</span> System.Net.Http;<br><br>
<span class="line-number">2</span>  <span class="keyword">var</span> client = <span class="keyword">new</span> HttpClient();<br>
<span class="line-number">3</span>  <span class="keyword">var</span> response = <span class="keyword">await</span> client.PostAsync("https://api.plivo.com/v1/", <span class="keyword">new</span> StringContent(...));
  `,
  Go: `
<span class="line-number">1</span>  <span class="keyword">package</span> main<br><br>
<span class="line-number">2</span>  <span class="keyword">import</span> (<br>
<span class="line-number">3</span>    <span class="keyword">"bytes"</span><br>
<span class="line-number">4</span>    <span class="keyword">"net/http"</span><br>
<span class="line-number">5</span>  )<br><br>
<span class="line-number">6</span>  <span class="keyword">func</span> main() {<br>
<span class="line-number">7</span>    http.Post("https://api.plivo.com/v1/", "application/json", bytes.NewBuffer(...))<br>
<span class="line-number">8</span>  }
  `,
  cURL: `
<span class="line-number">1</span>  <span class="keyword">curl</span> -X POST https://api.plivo.com/v1/ -d '{...}'
  `
};

const SnippetTabs = () => {
  const [activeTab, setActiveTab] = useState('Python');
  const [copySuccess, setCopySuccess] = useState('');
  const [activeVersion, setActiveVersion] = useState('LATEST'); 

  const copyToClipboard = () => {
    const tempElement = document.createElement('textarea');
    tempElement.value = snippets[activeTab].replace(/<\/?[^>]+(>|$)/g, ""); 
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000); 
  };

  return (
    <div className='snippit-main'>
      <div className="snippet-tabs">
        <div className="version-tabs"> 
          <button 
            className={`version-tab-button ${activeVersion === 'LATEST' ? 'active' : ''}`}
            onClick={() => setActiveVersion('LATEST')}
          >
            LATEST
          </button>
          <button 
            className={`version-tab-button ${activeVersion === 'LEGACY' ? 'active' : ''}`}
            onClick={() => setActiveVersion('LEGACY')}
          >
            LEGACY
          </button>
        </div>
        <div className="tabs">
          {Object.keys(snippets).map(lang => (
            <button
              key={lang}
              className={`tab-button ${activeTab === lang ? 'active' : ''}`}
              onClick={() => setActiveTab(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <div className="snippet-content">
          <div className="snippet-header">
            {/* ... (Your title and description remain the same) */}
          </div>

          <div className="code-wrapper"> 
            <pre><code dangerouslySetInnerHTML={{ __html: snippets[activeTab] }}></code></pre>
            <button className="copy-button" onClick={copyToClipboard}>
              <FiCopy /> 
              <span className="copy-success">{copySuccess}</span> 
            </button>
          </div>

          <div className="response-section">
            <h3>Response</h3>
            <p>HTTP Status Code: 200</p>
            <pre>
              <code>
                {JSON.stringify({
                  "Api_id": "f237ffbd-e1b1-4bd3-a2cb-874hebb",
                  "meta": {
                    "limit": 1,
                    "offset": 0,
                    "next": "/v1/Account/<AUTH_ID>/Message/?limit=1&offset=1",
                    "previous": null
                  }
                }, null, 2)}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="rating-section">
        <h3>Rate this page</h3>
        <div className="stars">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </div>
      </div>
    </div>
  );
};

export default SnippetTabs;