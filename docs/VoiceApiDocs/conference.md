---
layout: two-column
title: Conference
description: Conference
slug: /voice/api/conference/
permalink: /docs/voice/api/conference/
codeUrl:
  - code/apiReference/voice/
page_name: Conference
categorization:
  - voice
nav:
  - Prerequisites
breadcrumb:
  - link: /docs/
    title: Home
  - link: /docs/voice/api/conference/
    title: Conference
    selected: true
---
# Conference

Conferences let you involve multiple participants in a single call. Using Plivo’s Conference API, you can manage ongoing and completed conferences in your account, terminate ongoing conferences, and retrieve details of an ongoing or completed conference.

Conferences are suited for traditional “meeting” use cases. If you need more control over a call, for example for advanced contact center or sales dialer use cases, consider [multiparty calls](/docs/voice/api/multiparty-call/).

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">BaseURI</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Conference/</span></code></div>
## The Conference object

### Attributes

<table class="table table-striped table-markdown"><tbody><tr><td class="text-right"><strong class="name">conference_name <span>string</span></strong></td><td><p>The name used to identify the conference.</p></td></tr><tr><td class="text-right"><strong class="name">conference_run_time <span>string</span></strong></td><td><p>Time in seconds since the conference was initiated.</p></td></tr><tr><td class="text-right"><strong class="name">conference_member_count <span>string</span></strong></td><td><p>Number of members currently active in the conference.</p></td></tr><tr><td colspan="2"><div class="notice-box-response"><strong>Note:</strong> Along with the above attributes, the response includes the following attributes for each member active in the conference.</div></td></tr><tr><td class="text-right"><strong class="name">member_id <span>string</span></strong></td><td><p>The ID of the member in the conference. This ID is unique for each conference.</p></td></tr><tr><td class="text-right"><strong class="name">muted <span>boolean</span></strong></td><td><p>Set to <mark>true</mark> if the member is currently muted.</p></td></tr><tr><td class="text-right"><strong class="name">deaf <span>boolean</span></strong></td><td><p>Set to <mark>true</mark> if the member cannot hear the conversations taking place in the conference.</p></td></tr><tr><td class="text-right"><strong class="name">from <span>string</span></strong></td><td><p>The source from which the call was made to the conference. This can either be a PSTN number or a SIP endpoint.</p></td></tr><tr><td class="text-right"><strong class="name">to <span>string</span></strong></td><td><p>The conference bridge number. This can either be a Plivo number or an application URL.</p></td></tr><tr><td class="text-right"><strong class="name">caller_name <span>string</span></strong></td><td><p>The name of the caller, if the call was made from a SIP endpoint. This field is empty if no caller name is specified while making the call.</p></td></tr><tr><td class="text-right"><strong class="name">direction <span>string</span></strong></td><td><p>The direction of the call. This can either be <mark>inbound</mark> or <mark>outbound</mark>.</p></td></tr><tr><td class="text-right"><strong class="name">call_uuid <span>string</span></strong></td><td><p>The call_uuid that uniquely identifies the call.</p></td></tr><tr><td class="text-right"><strong class="name">join_time <span>string</span></strong></td><td><p>The time in seconds since the call joined the conference.</p></td></tr></tbody></table>

### Response

~~~json
{
  "conference_name": "My Conf Room",
  "conference_run_time": "590",
  "conference_member_count": "1",
  "members": [
{
  "muted" : false,
  "member_id" : "17",
  "deaf" : false,
  "from" : "1456789903",
  "to" : "1677889900",
  "caller_name" : "John",
  "direction" : "inbound",
  "call_uuid" : "acfbf0b5-12e0-4d74-85f7-fce15f8f07ec",
  "join_time" : "590"
}
  ]
}
~~~

## Retrieve a conference

Retrieves the details of a particular conference.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">GET</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Conference/{conference_name}/</span></code></div>

### Arguments

<div class="alert alert-info">No arguments need to be passed.</div>

### Returns

Returns the details of the conference associated with the name specified.

### Response

HTTP Status Code: 200

~~~json
{
  "conference_name": "My Conf Room",
  "conference_run_time": "590",
  "conference_member_count": "1",
  "members": [
	{
	  "muted" : false,
	  "member_id" : "17",
	  "deaf" : false,
	  "from" : "1456789903",
	  "to" : "1677889900",
	  "caller_name" : "John",
	  "direction" : "inbound",
	  "call_uuid" : "acfbf0b5-12e0-4d74-85f7-fce15f8f07ec",
	  "join_time" : "590"
	}
  ],
  "api_id": "816e903e-58c4-11e1-86da-adf28403fe48"
}
~~~
## Hang up a specific conference

This method lets you hang up a conference using the conference name.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">DELETE</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Conference/{conference_name}/</span></code></div>

### Arguments

<div class="alert alert-info">No arguments need to be passed.</div>

### Response

HTTP Status Code: 204

~~~json
{
  "message": "conference hung up",
  "api_id": "2867b6e2-58c3-11e1-86da-adf28403fe48"
}
~~~
## List all conferences

Retrieves a list of all ongoing conferences for your account and returns their names.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">GET</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Conference/</span></code></div>

### Arguments

<div class="alert alert-info">No arguments need to be passed.</div>

### Returns

Returns the names of all ongoing conferences associated with the account.

### Response

HTTP Status Code: 200

~~~json
{
  "api_id": "2867b6e2-58c3-11e1-86da-adf28403fe48",
  "conferences": [
    "My Conf Room"
  ]
}
~~~
## Hang up all conferences

This API lets you hang up all ongoing conferences running on your account.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">DELETE</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Conference/</span></code></div>

### Arguments

<div class="alert alert-info">No arguments need to be passed.</div>

### Response

HTTP Status Code: 204
# Conference member

This resource lets you perform actions on members of a conference.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">BaseURI</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Conference/{conference_name}/Member</span></code></div>
## Hang up a member

This method lets you hang up a particular member of a conference. The member to be disconnected needs to be identified using the member\_id.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">DELETE</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Conference/{conference_name}/Member/{member_id}/</span></code></div>

The `member_id` attribute that’s passed in the URL can be either a `member_id` or the string `all`. In the latter case, the hangup action is performed on all members of the conference.

### Arguments

<div class="alert alert-info">No arguments need to be passed.</div>

### Response

HTTP Status Code: 204
## Disconnect a member from a conference

This method lets you disconnect a member in a conference. When the member is disconnected, the next action to be performed depends on the next element in the XML.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">POST</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Conference/{conference_name}/Member/{member_id}/Kick/</span></code></div>

Here’s an example. If the XML code below starts the conference, Plivo will play the text in the`<Speak>` tag after the member is disconnected.

```xml
<Response>
    <Conference enterSound="beep:1">MyConference</Conference>
    <Speak>You have been disconnected from the conference</Speak>
</Response>
```

The `member_id` attribute that’s passed in the URL can be either a `member_id` or the string `all`. In the latter case, the disconnect action is performed on all members of the conference.

### Attributes

<div class="alert alert-info">No arguments need to be passed.</div>

### Returns

Returns an acknowledgement that the member has been disconnected from the conference.

### Response

HTTP Status Code: 202

~~~json
{
  "message": "kicked",
  "member_id": "10",
  "api_id": "2867b6e2-58c3-11e1-86da-adf28403fe48"
}
~~~
## Mute Member

This API lets you mute members of a conference. Audio from their device will be muted, and other members in the conference will not be able to hear the caller.

#### API Endpoint

<div class="badge-combined-api"><code class="badge-primary-api">POST</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/Account/{auth_id}/Conference/{conference_name}/Member/{member_id}/Mute/</span></code></div>

The `member_id` attribute that’s passed in the URL can be a `member_id`, a comma-separated list of member IDs on which this operation will be performed, or the string `all`. In the latter case, the mute action is performed on all members of the conference.

<div class="alert alert-info">No arguments need to be passed.</div>

### Returns

Returns an acknowledgement that the member is muted.

### Response

HTTP Status Code: 202

~~~json
{
  "message": "muted",
  "member_id": "10",
  "api_id": "2867b6e2-58c3-11e1-86da-adf28403fe48"
}
~~~
