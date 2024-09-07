---
layout: two-column
title: API Responses
description: API responses
sidebar_position: 3
permalink: /docs/voice/api/response/
codeUrl:
  - code/apiReference/messages
page_name: API Responses
categorization:
  - voice
nav:
  - Prerequisites
breadcrumb:
  - link: /docs/
    title: Home
  - link: /docs/voice/api/response/
    title: Voice
    selected: true
---
# API responses

Plivo API endpoints return responses in JSON format. Plivo sets an `api_id` in each response to uniquely identify your request. Each API call returns one of these HTTP status codes depending on whether the call succeeds or fails.

<table class="table table-striped table-markdown">
   <tbody>
      <tr>
         <td class="text-right"><strong class="name">200</strong></td>
         <td>
            <p>Request has been executed</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">201</strong></td>
         <td>
            <p>Resource created</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">202</strong></td>
         <td>
            <p>Resource changed</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">204</strong></td>
         <td>
            <p>Resource deleted</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">400</strong></td>
         <td>
            <p>A parameter is missing or is invalid</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">401</strong></td>
         <td>
            <p>Authentication failed</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">404</strong></td>
         <td>
            <p>Resource cannot be found</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">405</strong></td>
         <td>
            <p>HTTP method not allowed</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">429</strong></td>
         <td>
            <p>Too many requests, rate limited</p>
         </td>
      </tr>
      <tr>
         <td class="text-right"><strong class="name">500</strong></td>
         <td>
            <p>Server error</p>
         </td>
      </tr>
   </tbody>
</table>

<div class="notice-box"><strong>Note:</strong> Casing convention of the responses:<ul><li>Python: Snake case</li><li>Node.js: Camel case</li><li>Go: Camel case</li><li>Java: Camel case</li><li>.NET: Pascal case</li><li>Ruby: Snake case</li><li>PHP: Camel case</li></ul></div>
## Response examples

### Response attributes

<table class="table table-striped table-markdown"><tbody><tr><td class="text-right"><strong class="name">api_id<span>string</span></strong></td><td><p>Identifies the request.</p></td></tr><tr><td class="text-right"><strong class="name">error<span>string</span></strong></td><td><p>Indicates an error and provides information regarding the error.</p></td></tr><tr><td class="text-right"><strong class="name">message<span>string</span></strong></td><td><p>Provides information regarding the request.</p></td></tr></tbody></table>

### Response

### Success

~~~json
{
  "api_id": "97ceeb52-58b6-11e1-86da-77300b68f8bb",
  "message": "call fired",
  "request_uuid": "75b26856-8638-11e0-802c-6d99d509954e"
}
~~~

### Error

~~~json
{
  "api_id": "97ceeb52-58b6-11e1-86da-77300b68f8bb",
  "error": "answer_url parameter is missing",
  "request_uuid": "56hf4856-8638-11e0-802c-65j6gd39954e"
}
~~~
