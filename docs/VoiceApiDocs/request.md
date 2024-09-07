---
layout: two-column
title: API Request
description: API Request
sidebar_position: 2
permalink: /docs/voice/api/request/
codeUrl:
  - code/apiReference/messages
page_name: API Request
categorization:
  - voice
nav:
  - Prerequisites
breadcrumb:
  - link: /docs/
    title: Home
  - link: /docs/voice/api/request/
    title: Voice
    selected: true
slug : /voice/api/request/
---
# API requests

Plivo exposes a list of REST APIs to perform various actions. You can use these APIs in combination with XML documents to create voice and SMS applications.

<div class="badge-combined-api"><code class="badge-primary-api">POST</code> <code class="badge-secondary-api"><span>https://api.plivo.com/v1/</span></code></div>

## Authentication

All requests to Plivo API are authenticated with `BasicAuth` using the values of `AUTH ID` and `AUTH TOKEN` that appear on the Overview page of the [console](https://console.plivo.com/dashboard/).

## Content-Type

Plivo only accepts input of the type `application/json`.

All `POST` request arguments must be passed as text in JSON format with the Content-Type set as `application/json`.

All `GET` and `DELETE` request arguments must be passed in the query string.

## Timeouts and proxies

Plivo’s server SDKs let you specify timeouts and proxy settings to be used when making API requests. Select the programming language of your choice and view the latest version to see how to specify these settings.

## Pagination

Plivo uses offset-based pagination to list resources.

For instance, if your search request has a result of 100 objects with limit = 10 and offset = 5, then objects with indices 51 through 60 are returned.

### Parameters used for pagination

<table class="table table-striped table-markdown"><tbody><tr><td class="text-right"><strong class="name">limit <span>integer</span></strong></td><td><p>A limit on the number of results to be returned. <mark>limit</mark> can range between 1 and 20, and the default is 20.</p></td></tr><tr><td class="text-right"><strong class="name">offset <span>integer</span></strong></td><td><p>A pagination cursor to denote the number of objects by which the results should be offset.</p></td></tr></tbody></table>

## Asynchronous requests

All requests to Plivo APIs can be made asynchronous by adding the parameters listed below. When you make an asynchronous API call, Plivo returns a generic response with the api\_id, and sends the API responses to the specified callback URL.

### Arguments

<table class="table table-striped table-markdown"><tbody><tr><td class="text-right"><strong class="name">callback_url</strong></td><td><p>The URL notified by the API response is available and to which the response is sent.</p></td></tr><tr><td class="text-right"><strong class="name">callback_method</strong></td><td><p>The method used to notify the callback_url.</p><p>Defaults to POST.</p></td></tr></tbody></table>

### Response

~~~json
{
"message": "async api spawned",
"api_id": "63f0761a-e0ed-11e1-8ea7-12313924e3a6"
}
~~~
