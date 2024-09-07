---
layout: two-column
title: Call 
description: Call
sidebar_position: 4
permalink: /docs/voice/api/call/
codeUrl:
  - code/apiReference/voice/
page_name: Call
categorization:
  - voice
nav:
  - Prerequisites
breadcrumb:
  - link: /docs/
    title: Home
  - link: /docs/voice/api/call/
    title: Call
    selected: true
---
# Call

A `Call` object is created when an outbound call is initiated or when an inbound call is received. You can use a Call object to interact with ongoing calls, retrieve details about completed calls, and transfer ongoing calls, thereby building custom call flows.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">BaseURI</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Call/</span></code></div>
## The Call object

A `Call` object is created when an outbound call is initiated or when an inbound call is received. You can use the `Call` object to interact with ongoing calls, retrieve details about completed calls, and transfer ongoing calls, thereby building custom call flows.

### Attributes

<table class="table table-striped table-markdown">
   <tbody>
      <tr>
         <td class="text-right"><strong class="name">answer_time <span>string</span></strong></td>
         <td>
            <p>The timestamp when the call was answered.<br />Timezone: Local timezone as updated in the Plivo console<br />Format: <i>yyyy-MM-dd HH:mm:ss</i></p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">bill_duration <span>integer</span></strong></td>
         <td>
            <p>The duration of the call in seconds.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">billed_duration <span>integer</span></strong></td>
         <td>
            <p>The duration for which the call was billed in seconds. This might be different from the <mark>bill_duration</mark> based on the billing interval of the prefix called.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">call_direction <span>string</span></strong></td>
         <td>
            <p>Indicates whether the call was <mark>outbound</mark> or <mark>inbound</mark>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">call_duration <span>integer</span></strong></td>
         <td>
            <p>The duration of the call in seconds.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">call_uuid <span>string</span></strong></td>
         <td>
            <p>The unique identifier used to identify the <mark>call</mark>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">end_time <span>string</span></strong></td>
         <td>
            <p>The timestamp when the call ended.<br />Timezone: Local timezone as updated in the Plivo console<br />Format: <i>yyyy-MM-dd HH:mm:ss</i></p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">from_number <span>string</span></strong></td>
         <td>
            <p>The caller ID using which the call was initiated.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">initiation_time <span>string</span></strong></td>
         <td>
            <p>The timestamp when the call was initiated.<br />Timezone: Local timezone as updated in the Plivo console<br />Format: <i>yyyy-MM-dd HH:mm:ss</i></p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">parent_call_uuid <span>string</span></strong></td>
         <td>
            <p>The call UUID of the A leg of the call.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">resource_uri <span>string</span></strong></td>
         <td>
            <p>The URI of the resource requested.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">stir_verification <span>string</span></strong></td>
         <td>
            <p><strong>For outbound calls</strong>: Gives details about the attestation assigned to the call by Plivo</p>

            <p><strong>For inbound calls</strong>: Gives details about the attestation received on the inbound call to your Plivo phone number.</p>

            <p><strong>Possible values:</strong></p>
<ul>
  <li><strong>Verified</strong> means the call is from a verified caller who has authorized access to the customer’s caller ID, and hence should be treated with confidence. Verified is equivalent to attestation level A.</li>
  <li><strong>Not Verified</strong> means that, for this call, either the caller is not verified, or it’s uncertain whether they have access to the caller ID used, or both. Not Verified means the call received attestation level B or C.</li>
  <li><strong>Not Applicable</strong> means STIR/SHAKEN doesn’t apply to this call, as would be the case if a call is not addressed to a US number or if it’s a cloud call (WebRTC or SIP).</li>
</ul>

            <p><a href="/docs/voice/concepts/stir-shaken/">Read more about STIR/SHAKEN</a>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">to_number <span>string</span></strong></td>
         <td>
            <p>The number to which the call was initiated.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">total_amount <span>string</span></strong></td>
         <td>
            <p>The total amount charged for the call.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">total_rate <span>string</span></strong></td>
         <td>
            <p>The per-minute rate charged based on the destination number.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">hangup_cause_name</strong></td>
         <td>
            <p>The reason for the call hangup. Refer to our <a href="/docs/voice/troubleshooting/hangup-causes/">list of hangup causes and sources</a>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">hangup_cause_code</strong></td>
         <td>
            <p>The integer code for the hangup cause. Refer to our <a href="/docs/voice/troubleshooting/hangup-causes/">list of hangup causes and sources</a>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">hangup_source</strong></td>
         <td>
            <p>The entity that triggered the call hangup. Possible hangup sources are: <mark>Caller</mark>, <mark>Callee</mark>, <mark>Plivo</mark>, <mark>API Request</mark>, <mark>Answer XML</mark>, <mark>Error</mark>, and <mark>Unknown</mark>.</p>
            <p>Refer to our <a href="/docs/voice/troubleshooting/hangup-causes/">list of hangup causes and sources</a>.</p>
         </td>
      </tr>
       <tr>
         <td class="text-right"><strong class="name">source_ip<span>string</span></strong></td>
         <td>
            <p>The source_ip field returns the IP address from which the call request originated. We recommend you monitor this field as a method to identify any potential account misuse and unauthorized access attempts.</p>
         </td>
      </tr>
   </tbody>
</table>

### Example Object

~~~json
{
  "answer_time": "2022-06-28 19:39:05+05:30", // Local time zone as updated in the Plivo console
  "bill_duration": 11,
  "billed_duration": 60,
  "call_direction": "inbound",
  "call_duration": 11,
  "call_uuid": "57a1b60a-5c0b-11e7-9082-ef888d0400e9",
  "end_time": "2022-06-28 19:39:15+05:30", // Local time zone as updated in the Plivo console
  "from_number": "12025551111",
  "initiation_time": "2022-06-28 19:39:04+05:30", // Local time zone as updated in the Plivo console
  "parent_call_uuid": null,
  "resource_uri": "/v1/Account/MA2025RK4E639VJFZAGV/Call/57a1b60a-5c0b-11e7-9082-ef888d0400e9/",
  "to_number": "19172592277",
  "total_amount": "0.00850",
  "total_rate": "0.00850",
  "hangup_cause_name": "End Of XML Instructions",
  "hangup_cause_code":4010,
  "hangup_source":"Plivo",
  "source_ip": "92.168.0.1"
}
~~~


## Make an outbound call



This method lets you initiate an outbound call to a PSTN number or a SIP endpoint, and make simultaneous bulk calls.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">POST</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Call/</span></code></div>

### Arguments

<table class="table table-striped table-markdown">
   <tbody>
      <tr>
         <td class="text-right"><strong class="name">from<span id="or">Required</span></strong></td>
         <td>
            <p>The phone number to be used as the caller ID for the call. The format should be the country code followed by the number. Example: 14157654321 (for the United States)</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">to<span id="or">Required</span></strong></td>
         <td>
            <p>The destination to be called. The destination can be either a regular number or a SIP endpoint.</p>
            <p>A regular number should be specified with the country code followed by the number. Example: 14157654321</p>
            <p>If you&rsquo;re calling a SIP endpoint, the <mark>to</mark> field should be a valid SIP URI. Example: sip:john1234@phone.plivo.com</p>
            <p>You can initiate calls to multiple numbers and endpoints at once (bulk calls) by using the delimiter &lt;. For example, if you want to call two numbers and one SIP endpoint, specify in the <mark>to</mark> field: 14157654321&lt;14153464321&lt;sip:john1234@phone.plivo.com</p>
            <div class="notice-box-response"><strong>Note:</strong> The maximum number of unique destinations accepted in the "to" field is 1000.</div>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">answer_url<span id="or">Required</span><a href="/docs/voice/concepts/callback-configurations/">Callback-retry configurable</a></strong></td>
         <td>
            <p>The URL invoked by Plivo when the call is answered. This URL should return an XML element with valid Plivo XML to perform the desired actions.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">answer_method</strong></td>
         <td>
            <p>The HTTP verb that should be used to invoke the <mark>answer_url</mark>.</p>
            <p>Defaults to POST.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">ring_url</strong><br /><a href="/docs/voice/concepts/callback-configurations/">Callback-retry configurable</a></td>
         <td>
            <p>An optional URL that Plivo notifies when the call starts ringing.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">ring_method</strong></td>
         <td>
            <p>The HTTP verb that should be used to invoke the <mark>ring_url</mark>.</p>
            <p>Defaults to POST.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">hangup_url</strong><br /><a href="/docs/voice/concepts/callback-configurations/">Callback-retry configurable</a></td>
         <td>
            <p>An optional URL that Plivo notifies when the call is hung up.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">hangup_method</strong></td>
         <td>
            <p>The HTTP verb that should be used to invoke the <mark>hangup_url</mark>.</p>
            <p>Defaults to POST.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">fallback_url</strong><br /><a href="/docs/voice/concepts/callback-configurations/">Callback-retry configurable</a></td>
         <td>
            <p>The URL that&rsquo;s tried if the <mark>answer_url</mark> is not reachable. We retry <mark>answer_url</mark> three times to fetch a valid XML file. If all three attempts fail to return a valid XML file, or after a timeout of 60 seconds, whichever is earlier, <mark>fallback_url</mark> is invoked.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">fallback_method</strong></td>
         <td>
            <p>The HTTP verb that should be used to invoke the <mark>fallback_url</mark>.</p>
            <p>Defaults to POST.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">caller_name</strong></td>
         <td>
            <p>If set to a string, caller name will be set to this string value.</p>
            <p>Allowed values: Any string. Character limit &mdash; 50 characters.</p>
            <p>Defaults to Caller's <mark>caller_name</mark>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">send_digits</strong></td>
         <td>
            <p>Flag that lets you send digits once the call is connected. The common use case is to dial to an extension. Plivo can dial a number, and when the automated system picks up, send the DTMF tones to connect to the extension.</p>
            <p>You can choose how long to wait before sending the digits. Using character <mark>w</mark> waits for 0.5 seconds and <mark>W</mark> waits for 1 seconds.</p>
            <p>For example, setting this parameter to <mark>1w2W3</mark> sends digit 1, waits for 0.5 seconds, sends digit 2, waits for 1 second, and sends digit 3.</p>
            <p>You can configure the duration of the tone when the digit is sent by appending the duration (in milliseconds) with the @ character. For example, setting 123@1000 will send the digits 123 with a tone duration of 1,000 milliseconds</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">send_on_preanswer</strong></td>
         <td>
            <p>Applicable only if <mark>send_digits</mark> is set. If set to <mark>true</mark>, the digits are sent at the preanswer stage.</p>
            <p>Defaults to <mark>false</mark>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">time_limit</strong></td>
         <td>
            <p>Sets a limit on the maximum duration of a call in seconds. The limit is calculated starting from the time the call is answered. The <mark>time_limit</mark> must be a positive integer.</p>
            <p>Defaults to 14,400 seconds (4 hours).</p>
         </td>
      </tr>
      <tr>
         <td colspan="2">
            <div class="notice-box-response"><strong>Note:</strong> If the value set is &gt;=86400 seconds, calls will be disconnected after 24 hours.</div>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">hangup_on_ring</strong></td>
         <td>
            <p>Sets a limit on the maximum duration of the call in seconds, similar to <mark>time_limit</mark>, but instead of calculating the limit from the time call is answered, this parameter calculates the limit from the time call starts ringing. The <mark>hangup_on_ring</mark> value must be a positive integer.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">machine_detection</strong></td>
         <td>
            <p>Detects whether the call has been answered by a machine.</p>
            <p>Allows values: <mark>true</mark>, <mark>hangup</mark></p>
            <p>If set to <mark>true</mark>, then if a machine is detected at the beginning of the call, any URL that is invoked by the call (<mark>answer_url</mark>, <mark>hangup_url</mark>, etc.) will be POSTed with the <mark>machine</mark> parameter set to <mark>true</mark>.</p>
            <p>If you want to hang up the call if a machine is detected, set this parameter to <mark>hangup</mark>. This will hang up the call and POST to the <mark>hangup_url</mark> with the <mark>machine</mark> parameter set to <mark>machine_detection</mark>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">machine_detection_time</strong></td>
         <td>
            <p>Defines the time allotted, in milliseconds, to decide whether a machine is detected.</p>
            <p>Allowed values: 2000 through 10000<br />Defaults to 5000.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">machine_detection_url</strong><br /><a href="/docs/voice/concepts/callback-configurations/">Callback-retry configurable</a></td>
         <td>
            <p>The URL invoked with machine detection parameters. The list of parameters sent with the request are described in asynchronous machine detection section below. These parameters should be used to make machine detection asynchronous.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">machine_detection_method</strong></td>
         <td>
            <p>The HTTP verb that should be used to invoke the <mark>machine_detection_url</mark>.</p>
            <p>Defaults to POST.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">sip_headers</strong></td>
         <td>
            <p>List of SIP headers in the form of key=value pairs, separated by commas &mdash; for example, head1=val1,head2=val2,head3=val3,...,headN=valN.</p>
            <p>The SIP headers specified are automatically prefixed with &ldquo;X-PH-&rdquo; and these headers will be present for all the HTTP requests that are being made</p>
            <p>Valid values for SIP header keys and values are integers and uppercase and lowercase letters.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">ring_timeout</strong></td>
         <td>
            <p>Defines how long in seconds an unanswered call should ring before hanging up.</p>
            <p>Defaults to 120.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">parent_call_uuid</strong></td>
         <td>
            <p>The <mark>call_uuid</mark> of the first leg in an ongoing conference. This parameter is helpful in minimizing the delay of adding a new member to a conference.</p>
         </td>
      </tr>
      <tr>
         <td colspan="2">
            <div class="notice-box-response"><strong>Note:</strong> This parameter is honored only for single calls and not for bulk calls. See this <a href="https://support.plivo.com/hc/en-us/articles/360049342911">post</a> for more information.</div>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">error_if_parent_not_found</strong></td>
         <td>
            <p>Defines the behavior of how to use <mark>parent_call_uuid</mark>. If set to <mark>true</mark>, then if <mark>parent_call_uuid</mark> is not found, the call is not initiated and it returns an error. If set to <mark>false</mark>, then the call is initiated ignoring any errors with the <mark>parent_call_uuid</mark>.</p>
            <p>Defaults to <mark>false</mark>.</p>
         </td>
      </tr>
   </tbody>
</table>

### Callbacks

For every single voice call you make and receive, Plivo sends a status update to your URL configured as a callback. You can read and store the information on your server for analysis, and you can change the flow of ongoing calls based on the values received in the callback events.

Callbacks involve URLs such as <mark>answer_url</mark>, <mark>fallback_url</mark>, <mark>hangup_url</mark>, and <mark>ring_url</mark>.

#### List of parameters sent to ring_url

<table class="table table-striped table-markdown">
   <tbody>
      <tr>
         <td class="text-right"><strong class="name">From<span>string</span></strong></td>
         <td>The from number used as the caller ID to initiate the call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">To<span>string</span></strong></td>
         <td>The destination that&rsquo;s called.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">RequestUUID<span>string</span></strong></td>
         <td>An identifier that can uniquely identify a request.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">ALegRequestUUID<span>string</span></strong></td>
         <td>Identifies the first leg of the call in case there are multiple legs.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">CallUUID<span>string</span></strong></td>
         <td>The identifier of the call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">Direction<span>string</span></strong></td>
         <td>The direction of the call. This will have the value &ldquo;outbound&rdquo; since this is an outbound API call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">Event<span>string</span></strong></td>
         <td>The event that triggered this notification. This will have the value &ldquo;Ring&rdquo;.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">CallStatus<span>string</span></strong></td>
         <td>The status of the call. This will have the value &ldquo;ringing&rdquo;.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">SessionStart<span>string</span></strong></td>
         <td>A timestamp that indicates when early media started. <strong>Format</strong>: <i>YYYY-MM-DD HH:mm:ss.sssss</i> <strong>Timezone</strong>: UTC</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">STIRAttestation<span>string</span></strong></td>
         <td>Gives details about the attestation assigned to the call by Plivo.</td>
      </tr>
   </tbody>
</table>

#### List of parameters sent to answer_url and fallback_url

<table class="table table-striped table-markdown">
   <tbody>
      <tr>
         <td class="text-right"><strong class="name">From<span>string</span></strong></td>
         <td>The from number used as the caller ID to initiate the call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">To<span>string</span></strong></td>
         <td>The destination that&rsquo;s called.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">RequestUUID<span>string</span></strong></td>
         <td>An identifier that can uniquely identify a call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">ALegRequestUUID<span>string</span></strong></td>
         <td>Identifies the first leg of the call in case there are multiple legs.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">CallUUID<span>string</span></strong></td>
         <td>The identifier of the call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">Direction<span>string</span></strong></td>
         <td>The direction of the call. This will have the value &ldquo;outbound&rdquo; since this is an outbound API call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">ALegUUID<span>string</span></strong></td>
         <td>An unique identifier for the A leg of the call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">Event<span>string</span></strong></td>
         <td>The event that triggered this notification. This will have the value &ldquo;StartApp&rdquo;.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">stir_verification <span>string</span></strong></td>
         <td>
            <p><strong>For outbound calls</strong>: Gives details about the attestation assigned to the call by Plivo</p>
            <p><strong>For inbound calls</strong>: Gives details about the attestation received on the inbound call to your Plivo phone number.</p>
            <p><strong>Possible values:</strong></p>
<ul>
  <li><strong>Verified</strong> means the call is from a verified caller who has authorized access to the customer’s caller ID, and hence should be treated with confidence. Verified is equivalent to attestation level A.</li>
  <li><strong>Not Verified</strong> means that, for this call, either the caller is not verified, or it’s uncertain whether they have access to the caller ID used, or both. Not Verified means the call received attestation level B or C.</li>
  <li><strong>Not Applicable</strong> means STIR/SHAKEN doesn’t apply to this call, as would be the case if a call is not addressed to a US number or if it’s a cloud call (WebRTC or SIP).</li>
</ul>

            <p><a href="/docs/voice/concepts/stir-shaken/">Read more about STIR/SHAKEN</a>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">CallStatus<span>string</span></strong></td>
         <td>The status of the call. This will have the value &ldquo;in-progress&rdquo;.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">SessionStart<span>string</span></strong></td>
         <td>A timestamp that indicates when early media started. <strong>Format</strong>: <i>YYYY-MM-DD HH:mm:ss.sssss</i> <strong>Timezone</strong>: UTC</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">STIRAttestation<span>string</span></strong></td>
         <td>Gives details about the attestation assigned to the call by Plivo.</td>
      </tr>
   </tbody>
</table>

#### List of parameters sent to hangup_url

<table class="table table-striped table-markdown">
   <tbody>
      <tr>
         <td class="text-right"><strong class="name">From<span>string</span></strong></td>
         <td>The from number used as the caller ID to initiate the call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">To<span>string</span></strong></td>
         <td>The destination that&rsquo;s called.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">RequestUUID<span>string</span></strong></td>
         <td>An identifier that can uniquely identify a call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">ALegRequestUUID<span>string</span></strong></td>
         <td>Identifies the first leg of the call in case there are multiple legs</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">CallUUID<span>string</span></strong></td>
         <td>The identifier of the call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">Direction<span>string</span></strong></td>
         <td>The direction of the call. This will be &ldquo;outbound&rdquo; since this is an outbound API call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">ALegUUID<span>string</span></strong></td>
         <td>An unique identifier for the A leg of the call.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">Event<span>string</span></strong></td>
         <td>The event that triggered this notification. This will have the value &ldquo;Hangup&rdquo;.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">stir_verification <span>string</span></strong></td>
         <td>
            <p><strong>For outbound calls</strong>: Gives details about the attestation assigned to the call by Plivo</p>
            <p><strong>For inbound calls</strong>: Gives details about the attestation received on the inbound call to your Plivo phone number.</p>
            <p><strong>Possible values:</strong></p>
              <ul>
                <li><strong>Verified</strong> means the call is from a verified caller who has authorized access to the customer’s caller ID, and hence should be treated with confidence. Verified is equivalent to attestation level A.</li>
                <li><strong>Not Verified</strong> means that, for this call, either the caller is not verified, or it’s uncertain whether they have access to the caller ID used, or both. Not Verified means the call received attestation level B or C.</li>
                <li><strong>Not Applicable</strong> means STIR/SHAKEN doesn’t apply to this call, as would be the case if a call is not addressed to a US number or if it’s a cloud call (WebRTC or SIP).</li>
              </ul>
            <p><a href="/docs/voice/concepts/stir-shaken/">Read more about STIR/SHAKEN</a>.</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">CallStatus<span>string</span></strong></td>
         <td>The status of the call. This will have the value &ldquo;completed&rdquo;.</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">StartTime<span>string</span></strong></td>
         <td>A timestamp that indicates when the call was initiated. <strong>Timezone</strong>: Local timezone as updated in your Plivo Console <strong>Format</strong>: <i>yyyy-MM-dd HH:mm:ss.</i></td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">AnswerTime<span>string</span></strong></td>
         <td>A timestamp that indicates when the call was answered. <strong>Timezone</strong>: Local timezone as updated in your Plivo Console <strong>Format</strong>: <i>yyyy-MM-dd HH:mm:ss.</i></td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">SessionStart<span>string</span></strong></td>
         <td>A timestamp that indicates when early media started. <strong>Format</strong>: <i>YYYY-MM-DD HH:mm:ss.sssss</i> <strong>Timezone</strong>: UTC</td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">EndTime<span>string</span></strong></td>
         <td>A timestamp that indicates when the call ended. <strong>Timezone</strong>: Local timezone as updated in your Plivo Console <strong>Format</strong>: <i>yyyy-MM-dd HH:mm:ss.</i></td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">STIRAttestation<span>string</span></strong></td>
         <td>Gives details about the attestation assigned to the call by Plivo.</td>
      </tr>
   </tbody>
</table>
### Asynchronous machine detection

You can take action on detecting an answering machine during a call by setting the `machine_detection_url` parameter when firing an outbound call API. Plivo will detect an answering machine in the background and invoke the `machine_detection_url` with these parameters.

### Parameters sent to machine\_detection\_url

<table class="table table-striped table-markdown"><tbody><tr><td class="text-right"><strong class="name">From <span>string</span></strong></td><td><p>The from number used to initiate the call.</p></td></tr>
<tr><td class="text-right"><strong class="name">Machine <span>boolean</span></strong></td><td><p>Set to <mark>true</mark> if a machine is detected.</p></td></tr>
<tr><td class="text-right"><strong class="name">To <span>string</span></strong></td><td><p>The destination of the call.</p></td></tr>
<tr><td class="text-right"><strong class="name">RequestUUID <span>string</span></strong></td><td><p>An identifier that can uniquely identify a call.</p></td></tr>
<tr><td class="text-right"><strong class="name">ALegRequestUUID <span>string</span></strong></td><td><p>Identifies the first leg of the call in case there are multiple legs.</p></td></tr>
<tr><td class="text-right"><strong class="name">CallUUID <span>string</span></strong></td><td><p>The identifier used to identify the call.</p></td></tr>
<tr><td class="text-right"><strong class="name">IfMachine <span>string</span></strong></td><td><p>This parameter can be either <mark>continue</mark> or <mark>hangup</mark> depending on the <mark>machine_detection</mark> parameter set while initiating the call.</p></td></tr>
<tr><td class="text-right"><strong class="name">Direction <span>string</span></strong></td><td><p>The direction of the call. This will be &ldquo;outbound&rdquo; since we support machine detection only on outbound calls.</p></td></tr>
<tr><td class="text-right"><strong class="name">ALegUUID <span>string</span></strong></td><td><p>An unique identifier for the A leg of the call</p></td></tr>
<tr><td class="text-right"><strong class="name">Event <span>string</span></strong></td><td><p>The event that triggered this notification. This will have the value &ldquo;MachineDetection&rdquo;.</p></td></tr>
<tr><td class="text-right"><strong class="name">CallStatus <span>string</span></strong></td><td><p>The status of the call. This will have the value &ldquo;in-progress&rdquo;.</p></td></tr></tbody></table>

### Returns

If successful, this endpoint returns a unique identifier that can be used to identify the call.

### Response

HTTP Status Code: 200

Response for a successful call

~~~json
{
  "message": "call fired",
  "request_uuid": "9834029e-58b6-11e1-b8b7-a5bd0e4e126f",
  "api_id": "97ceeb52-58b6-11e1-86da-77300b68f8bb"
}
~~~

Response for a queued call

~~~json
{
  "message": "call queued",
  "request_uuid": "9834029e-58b6-11e1-b8b7-a5bd0e4e126f",
  "api_id": "97ceeb52-58b6-11e1-86da-77300b68f8bb"
}
~~~
## Get call detail record (CDR) of a call

This method lets you retrieve the call detail record (CDR) of a call.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">GET</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Call/{call_uuid}/</span></code></div>

### Arguments

<div class="alert alert-info">No arguments need to be passed.</div>

### Returns

Returns the call detail record of the call identified using the given call UUID as the `Call` object.

### Response

HTTP Status Code: 200

~~~json
{
    "answer_time": "2022-10-12 21:57:47+05:30",
    "api_id": "52cd2e1d-2bfd-11ec-a7bd-0242ac110005",
    "bill_duration": 1,
    "billed_duration": 1,
    "call_direction": "outbound",
    "call_duration": 1,
    "call_state": "ANSWER",
    "call_uuid": "5607532d-5037-4066-befc-a8b40218dd4f",
    "conference_uuid": null,
    "end_time": "2022-10-12 21:57:47+05:30",
    "from_number": "+12025551111",
    "hangup_cause_code": 8011,
    "hangup_cause_name": "Invalid Answer XML",
    "hangup_source": "Error",
    "initiation_time": "2022-10-12 21:57:40+05:30",
    "parent_call_uuid": null,
    "resource_uri": "/v1/Account/MA2025RK4E639VJFZAGV/Call/5607532d-5037-4066-befc-a8b40218dd4f/",
    "stir_verification": "Not Applicable",
    "to_number": "sip:sam9461399937766203278@phone.plivo.com",
    "total_amount": "0.01667",
    "total_rate": "1.00000",
    "Stir_attestation":"A",
    "voice_network_group": "",
    "source_ip": "92.168.0.1"
}
~~~
## Transfer a call

This API enables an in-progress or ongoing call to fetch and execute XML from a different URL. If the call (the A leg) is in a Dial, you can also transfer the other party (the B leg) at the same time, or only transfer the B leg to a URL. This is useful for applications where you want to asynchronously change the behavior of a live call. For example, you can play music while a call is on hold, queue calls, or transfer calls.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">POST</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Call/{call_uuid}/</span></code></div>

### Arguments

<table class="table table-striped table-markdown"><tbody><tr><td class="text-right"><strong class="name">legs </strong></td><td><p>Valid values are <mark>aleg</mark>, <mark>bleg</mark>, or <mark>both</mark>. <mark>aleg</mark> transfers call_uuid. <mark>bleg</mark> transfers the bridged leg of call_uuid. <mark>both</mark> transfers both legs.</p></td></tr><tr><td class="text-right"><strong class="name">aleg_url <span><a href="/docs/voice/concepts/callback-configurations/">Callback-retry configurable</a></span></strong></td><td><p>The URL to fetch XML from for the A leg. This argument needs to be specified if the <mark>legs </mark>parameter is either <mark>aleg</mark> or <mark>both</mark>.</p></td></tr><tr><td class="text-right"><strong class="name">aleg_method </strong></td><td><p>The HTTP verb to invoke the <mark>aleg_url</mark>.</p><p>Defaults to POST.</p></td></tr><tr><td class="text-right"><strong class="name">bleg_url <span><a href="/docs/voice/concepts/callback-configurations/">Callback-retry configurable</a></span></strong></td><td><p>The URL to fetch XML from for the B leg. This need to be specified if the <mark>legs</mark> parameter is either <mark>bleg</mark> or <mark>both.</mark></p></td></tr><tr><td class="text-right"><strong class="name">bleg_method </strong></td><td><p>The HTTP verb to invoke the <mark>bleg_url</mark>.</p><p>Defaults to POST.</p></td></tr></tbody></table>

### Returns

Returns an acknowledgement that the call is transferred.

### Response

HTTP Status Code: 202

~~~json
{
"message": "call transferred",
"api_id": "08c94608-58bd-11e1-86da-adf28403fe48"
}
~~~
