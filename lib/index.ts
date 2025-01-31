'use strict';

import { SegmentAnalytics } from './index.d';

/**
 * Analytics.js
 *
 * (C) 2013-2016 Segment.io Inc.
 */

var Analytics = require('./analytics');

// Create a new `analytics` singleton.
var analytics: SegmentAnalytics.AnalyticsJS = new Analytics();

// Expose package version.
analytics.VERSION = require('../package.json').version;

/*
 * Exports.
 */

module.exports = analytics;
