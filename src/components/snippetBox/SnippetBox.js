import React, { useState } from 'react';
import './SnippetTabs.css';

const snippets = {
  Python: `
    <span class="keyword">import</span> plivo<br><br>
    client = plivo.RestClient(auth_id="<auth_id>", auth_token="<auth_token>")<br>
    <span class="comment"># Remove a specific tollfree number from Powerpack - Unlink & Unrent</span><br>
    powerpack = client.powerpacks.get(uuid='<powerpack_uuid>')<br>
    <span class="comment"># To Un-Rent while removing a number from powepack - Set flag to "True"</span><br>
    <span class="comment"># Version 1</span><br>
    response = powerpack.remove_tollfree('<tollfree_number>', <span class="keyword">True</span>)<br>
    <span class="comment"># Version 2</span><br>
    response = powerpack.numberpool.tollfree.remove('<tollfree_number>', <span class="keyword">True</span>)<br>
    print(response)
  `,
  Ruby: `
    <span class="keyword">require</span> 'net/http'<br><br>
    uri = URI('https://api.plivo.com/v1/')<br>
    Net::HTTP.post_form(uri, params: {...})
  `,
  Node: `
    <span class="keyword">const</span> axios = <span class="keyword">require</span>('axios');<br><br>
    axios.post('https://api.plivo.com/v1/', {...})
  `,
  PHP: `
    <span class="keyword">$ch</span> = curl_init('https://api.plivo.com/v1/');<br>
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(...));<br>
    curl_exec($ch);
  `,
  Java: `
    <span class="keyword">import</span> java.net.HttpURLConnection;<br>
    <span class="keyword">import</span> java.net.URL;<br><br>
    URL url = <span class="keyword">new</span> URL("https://api.plivo.com/v1/");<br>
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();<br>
    conn.setRequestMethod("POST");<br>
    conn.getOutputStream().write(...);
  `,
  ".NET": `
    <span class="keyword">using</span> System.Net.Http;<br><br>
    var client = <span class="keyword">new</span> HttpClient();<br>
    var response = <span class="keyword">await</span> client.PostAsync("https://api.plivo.com/v1/", <span class="keyword">new</span> StringContent(...));
  `,
  Go: `
    <span class="keyword">package</span> main<br><br>
    <span class="keyword">import</span> (<br>
      <span class="keyword">"bytes"</span><br>
      <span class="keyword">"net/http"</span><br>
    )<br><br>
    <span class="keyword">func</span> main() {<br>
      http.Post("https://api.plivo.com/v1/", "application/json", bytes.NewBuffer(...))<br>
    }
  `,
  cURL: `
    <span class="keyword">curl</span> -X POST https://api.plivo.com/v1/ -d '{...}'
  `
};

const SnippetTabs = () => {
  const [activeTab, setActiveTab] = useState('Python');
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    const tempElement = document.createElement('textarea');
    tempElement.value = snippets[activeTab].replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags for copying plain text
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000); // Reset after 2 seconds
  };

  return (
    <div className="snippet-tabs">
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
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <span className="copy-success">{copySuccess}</span>
        </div>
        <pre><code dangerouslySetInnerHTML={{ __html: snippets[activeTab] }}></code></pre>
      </div>
    </div>
  );
};

export default SnippetTabs;

