// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": "google.com.ng"
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }],
            "tags": [{
                "function": "__gct",
                "vtp_trackingId": "G-2SJ29ZK43S",
                "vtp_sessionDuration": 0,
                "tag_id": 1
            }, {
                "function": "__ccd_em_outbound_click",
                "priority": 0,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-2SJ29ZK43S",
                "tag_id": 3
            }, {
                "function": "__ccd_em_download",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-2SJ29ZK43S",
                "tag_id": 5
            }, {
                "function": "__ccd_em_video",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-2SJ29ZK43S",
                "tag_id": 6
            }, {
                "function": "__ccd_em_site_search",
                "vtp_searchQueryParams": "q,s,search,query,keyword",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-2SJ29ZK43S",
                "tag_id": 7
            }, {
                "function": "__ccd_em_scroll",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-2SJ29ZK43S",
                "tag_id": 8
            }, {
                "function": "__ccd_em_page_view",
                "vtp_historyEvents": true,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-2SJ29ZK43S",
                "tag_id": 9
            }, {
                "function": "__ccd_conversion_marking",
                "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
                "vtp_instanceDestinationId": "G-2SJ29ZK43S",
                "tag_id": 10
            }, {
                "function": "__set_product_settings",
                "vtp_instanceDestinationId": "G-2SJ29ZK43S",
                "vtp_foreignTldMacroResult": ["macro", 1],
                "vtp_isChinaVipRegionMacroResult": ["macro", 2],
                "tag_id": 11
            }, {
                "function": "__ogt_google_signals",
                "vtp_googleSignals": "DISABLED",
                "vtp_instanceDestinationId": "G-2SJ29ZK43S",
                "vtp_serverMacroResult": ["macro", 3],
                "tag_id": 12
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [[["if", 0], ["add", 0]], [["if", 1], ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9]]]
        },
        "runtime": [[50, "__ccd_em_download", [46, "a"], [50, "i", [46, "o"], [36, [1, [15, "o"], [21, [2, [2, [15, "o"], "toLowerCase", [7]], "match", [7, [15, "h"]]], [45]]]]], [50, "j", [46, "o"], [52, "p", [2, [17, [15, "o"], "pathname"], "split", [7, "."]]], [52, "q", [39, [18, [17, [15, "p"], "length"], 1], [16, [15, "p"], [37, [17, [15, "p"], "length"], 1]], ""]], [36, [16, [2, [15, "q"], "split", [7, "/"]], 0]]], [50, "k", [46, "o"], [36, [39, [12, [2, [17, [15, "o"], "pathname"], "substring", [7, 0, 1]], "/"], [17, [15, "o"], "pathname"], [0, "/", [17, [15, "o"], "pathname"]]]]], [50, "l", [46, "o"], [41, "p"], [3, "p", ""], [22, [1, [15, "o"], [17, [15, "o"], "href"]], [46, [53, [41, "q"], [3, "q", [2, [17, [15, "o"], "href"], "indexOf", [7, "#"]]], [3, "p", [39, [23, [15, "q"], 0], [17, [15, "o"], "href"], [2, [17, [15, "o"], "href"], "substring", [7, 0, [15, "q"]]]]]]]], [36, [15, "p"]]], [52, "b", ["require", "internal.addDataLayerEventListener"]], [52, "c", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "d", ["require", "getContainerVersion"]], [52, "e", ["require", "internal.getProductSettingsParameter"]], [52, "f", ["require", "parseUrl"]], [52, "g", ["require", "internal.sendGtagEvent"]], [52, "h", [0, "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|", "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma"]], [52, "m", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [22, ["e", [15, "m"], "ae_block_downloads"], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "n", ["c", [8, "checkValidation", true]]], [22, [28, [15, "n"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["b", "gtm.linkClick", [51, "", [7, "o", "p"], ["p"], [52, "q", [16, [15, "o"], "gtm.elementUrl"]], [52, "r", ["f", [15, "q"]]], [22, [28, [15, "r"]], [46, [36]]], [52, "s", ["j", [15, "r"]]], [22, ["i", [15, "s"]], [46, [53, [52, "t", [39, [28, [28, [17, [15, "a"], "includeParams"]]], [8, "link_id", [16, [15, "o"], "gtm.elementId"], "link_url", ["l", [15, "r"]], "link_text", [16, [15, "o"], "gtm.elementText"], "file_name", ["k", [15, "r"]], "file_extension", [15, "s"]], [8]]], ["g", [15, "m"], "file_download", [15, "t"]]]]]], [15, "n"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_scroll", [46, "a"], [52, "b", ["require", "internal.addDataLayerEventListener"]], [52, "c", ["require", "internal.enableAutoEventOnScroll"]], [52, "d", ["require", "getContainerVersion"]], [52, "e", ["require", "internal.getProductSettingsParameter"]], [52, "f", ["require", "internal.sendGtagEvent"]], [52, "g", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [22, ["e", [15, "g"], "ae_block_scroll"], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "h", ["c", [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90]]], [22, [28, [15, "h"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["b", "gtm.scrollDepth", [51, "", [7, "i", "j"], ["j"], [52, "k", [39, [28, [28, [17, [15, "a"], "includeParams"]]], [8, "percent_scrolled", [16, [15, "i"], "gtm.scrollThreshold"]], [8]]], ["f", [15, "g"], "scroll", [15, "k"]]], [15, "h"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]], ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_page_view", [46, "a"], [22, [28, [17, [15, "a"], "historyEvents"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "internal.addDataLayerEventListener"]], [52, "c", ["require", "internal.enableAutoEventOnHistoryChange"]], [52, "d", ["require", "getContainerVersion"]], [52, "e", ["require", "internal.getProductSettingsParameter"]], [52, "f", ["require", "internal.sendGtagEvent"]], [52, "g", ["require", "internal.setRemoteConfigParameter"]], [52, "h", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [22, ["e", [15, "h"], "ae_block_history"], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "i", ["c", [8, "interval", 1000]]], [22, [28, [15, "i"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["b", "gtm.historyChange-v2", [51, "", [7, "j", "k"], ["k"], [52, "l", [16, [15, "j"], "gtm.oldUrl"]], [22, [20, [16, [15, "j"], "gtm.newUrl"], [15, "l"]], [46, [36]]], [52, "m", [16, [15, "j"], "gtm.historyChangeSource"]], [22, [1, [1, [21, [15, "m"], "pushState"], [21, [15, "m"], "popstate"]], [21, [15, "m"], "replaceState"]], [46, [36]]], [52, "n", [39, [28, [28, [17, [15, "a"], "includeParams"]]], [8, "page_location", [16, [15, "j"], "gtm.newUrl"], "page_referrer", [15, "l"]], [8]]], ["f", [15, "h"], "page_view", [15, "n"]], ["g", [15, "h"], "page_referrer", [15, "l"]]], [15, "i"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_site_search", [46, "a"], [50, "e", [46, "i"], [52, "j", [2, [30, [15, "i"], ""], "split", [7, ","]]], [53, [41, "k"], [3, "k", 0], [63, [7, "k"], [23, [15, "k"], [17, [15, "j"], "length"]], [33, [15, "k"], [3, "k", [0, [15, "k"], 1]]], [46, [53, [52, "l", ["b", [2, [16, [15, "j"], [15, "k"]], "trim", [7]]]], [22, [21, [15, "l"], [44]], [46, [36, [15, "l"]]]]]]]]], [50, "f", [46, "i", "j"], [52, "k", [8, "search_term", [15, "i"]]], [52, "l", [2, [30, [15, "j"], ""], "split", [7, ","]]], [53, [41, "m"], [3, "m", 0], [63, [7, "m"], [23, [15, "m"], [17, [15, "l"], "length"]], [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]], [46, [53, [52, "n", [2, [16, [15, "l"], [15, "m"]], "trim", [7]]], [52, "o", ["b", [15, "n"]]], [22, [21, [15, "o"], [44]], [46, [43, [15, "k"], [0, "q_", [15, "n"]], [15, "o"]]]]]]]], [36, [15, "k"]]], [52, "b", ["require", "getQueryParameters"]], [52, "c", ["require", "internal.sendGtagEvent"]], [52, "d", ["require", "getContainerVersion"]], [52, "g", ["e", [17, [15, "a"], "searchQueryParams"]]], [52, "h", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [22, [15, "g"], [46, [53, [52, "i", [39, [28, [28, [17, [15, "a"], "includeParams"]]], ["f", [15, "g"], [17, [15, "a"], "additionalQueryParams"]], [8]]], ["c", [15, "h"], "view_search_results", [15, "i"], [8, "deferrable", true]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_conversion_marking", [46, "a"], [50, "h", [46, "i"], [52, "j", [2, [15, "e"], "parse", [7, [15, "i"]]]], [22, [30, [30, [28, [15, "j"]], [28, [16, [15, "j"], "args"]]], [21, [17, [16, [15, "j"], "args"], "length"], 2]], [46, [36]]], [52, "k", [16, [16, [16, [15, "j"], "args"], 1], "contextValue"]], [22, [30, [30, [30, [28, [15, "k"]], [21, [16, [15, "k"], "namespaceType"], 1]], [21, [17, [16, [15, "k"], "keyParts"], "length"], 1]], [21, [16, [16, [15, "k"], "keyParts"], 0], "eventName"]], [46, [36, [44]]]], [52, "l", [16, [16, [15, "j"], "args"], 0]], [36, [1, [15, "l"], [16, [15, "l"], "stringValue"]]]], [22, [30, [28, [17, [15, "a"], "conversionRules"]], [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]], [46, [2, [15, "a"], "gtmOnSuccess", [7]]]], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "getContainerVersion"]], [52, "e", ["require", "JSON"]], [52, "f", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [52, "g", [30, ["c", [15, "f"], "event_settings"], [8]]], [53, [41, "i"], [3, "i", 0], [63, [7, "i"], [23, [15, "i"], [17, [17, [15, "a"], "conversionRules"], "length"]], [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]], [46, [53, [52, "j", ["h", [16, [16, [17, [15, "a"], "conversionRules"], [15, "i"]], "matchingRules"]]], [22, [28, [15, "j"]], [46, [6]]], [41, "k"], [3, "k", [16, [15, "g"], [15, "j"]]], [22, [28, [15, "k"]], [46, [3, "k", [8]], [43, [15, "g"], [15, "j"], [15, "k"]]]], [43, [15, "k"], "conversion", true]]]]], ["b", [15, "f"], "event_settings", [15, "g"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], [22, [17, [15, "d"], "enableGa4OnoRemarketing"], [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_video", [46, "a"], [52, "b", ["require", "internal.addDataLayerEventListener"]], [52, "c", ["require", "internal.enableAutoEventOnYouTubeActivity"]], [52, "d", ["require", "getContainerVersion"]], [52, "e", ["require", "internal.getProductSettingsParameter"]], [52, "f", ["require", "internal.sendGtagEvent"]], [52, "g", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [22, ["e", [15, "g"], "ae_block_video"], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "h", ["c", [8, "captureComplete", true, "captureStart", true, "progressThresholdsPercent", [7, 10, 25, 50, 75]]]], [22, [28, [15, "h"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["b", "gtm.video", [51, "", [7, "i", "j"], ["j"], [52, "k", [16, [15, "i"], "gtm.videoStatus"]], [41, "l"], [22, [20, [15, "k"], "start"], [46, [3, "l", "video_start"]], [46, [22, [20, [15, "k"], "progress"], [46, [3, "l", "video_progress"]], [46, [22, [20, [15, "k"], "complete"], [46, [3, "l", "video_complete"]]]]]]], [52, "m", [39, [28, [28, [17, [15, "a"], "includeParams"]]], [8, "video_current_time", [16, [15, "i"], "gtm.videoCurrentTime"], "video_duration", [16, [15, "i"], "gtm.videoDuration"], "video_percent", [16, [15, "i"], "gtm.videoPercent"], "video_provider", [16, [15, "i"], "gtm.videoProvider"], "video_title", [16, [15, "i"], "gtm.videoTitle"], "video_url", [16, [15, "i"], "gtm.videoUrl"], "visible", [16, [15, "i"], "gtm.videoVisible"]], [8]]], [22, [21, [15, "l"], [44]], [46, ["f", [15, "g"], [15, "l"], [15, "m"]]]]], [15, "h"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_outbound_click", [46, "a"], [50, "j", [46, "p"], [22, [28, [15, "p"]], [46, [36, [44]]]], [41, "q"], [3, "q", ""], [22, [1, [15, "p"], [17, [15, "p"], "href"]], [46, [53, [41, "r"], [3, "r", [2, [17, [15, "p"], "href"], "indexOf", [7, "#"]]], [3, "q", [39, [23, [15, "r"], 0], [17, [15, "p"], "href"], [2, [17, [15, "p"], "href"], "substring", [7, 0, [15, "r"]]]]]]]], [36, [15, "q"]]], [50, "k", [46, "p"], [22, [28, [15, "p"]], [46, [36, [44]]]], [41, "q"], [3, "q", [17, [15, "p"], "hostname"]], [52, "r", [2, [15, "q"], "match", [7, "^www\\d*\\."]]], [22, [1, [15, "r"], [16, [15, "r"], 0]], [46, [3, "q", [2, [15, "q"], "substring", [7, [17, [16, [15, "r"], 0], "length"]]]]]], [36, [15, "q"]]], [50, "l", [46, "p"], [22, [28, [15, "p"]], [46, [36, false]]], [52, "q", [2, [17, [15, "p"], "hostname"], "toLowerCase", [7]]], [41, "r"], [3, "r", [2, ["k", ["h", ["g"]]], "toLowerCase", [7]]], [41, "s"], [3, "s", [37, [17, [15, "q"], "length"], [17, [15, "r"], "length"]]], [22, [1, [18, [15, "s"], 0], [29, [2, [15, "r"], "charAt", [7, 0]], "."]], [46, [32, [15, "s"], [3, "s", [37, [15, "s"], 1]]], [3, "r", [0, ".", [15, "r"]]]]], [22, [1, [19, [15, "s"], 0], [12, [2, [15, "q"], "indexOf", [7, [15, "r"], [15, "s"]]], [15, "s"]]], [46, [36, false]]], [36, true]], [52, "b", ["require", "internal.addDataLayerEventListener"]], [52, "c", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "d", ["require", "getContainerVersion"]], [52, "e", ["require", "internal.getProductSettingsParameter"]], [52, "f", ["require", "internal.getRemoteConfigParameter"]], [52, "g", ["require", "getUrl"]], [52, "h", ["require", "parseUrl"]], [52, "i", ["require", "internal.sendGtagEvent"]], [52, "m", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [52, "n", ["f", [15, "m"], "cross_domain_conditions"]], [22, ["e", [15, "m"], "ae_block_outbound_click"], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "o", ["c", [8, "affiliateDomains", [15, "n"], "checkValidation", true, "waitForTags", false]]], [22, [28, [15, "o"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], ["b", "gtm.linkClick", [51, "", [7, "p", "q"], [52, "r", ["h", [16, [15, "p"], "gtm.elementUrl"]]], [22, ["l", [15, "r"]], [46, [53, [52, "s", [39, [28, [28, [17, [15, "a"], "includeParams"]]], [8, "link_id", [16, [15, "p"], "gtm.elementId"], "link_classes", [16, [15, "p"], "gtm.elementClasses"], "link_url", ["j", [15, "r"]], "link_domain", ["k", [15, "r"]], "outbound", true], [8]]], [43, [15, "s"], "event_callback", [15, "q"]], ["i", [15, "m"], "click", [15, "s"]]]], [46, ["q"]]]], [15, "o"]], [2, [15, "a"], "gtmOnSuccess", [7]]]],
        "permissions": {
            "__ccd_em_download": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.linkClick"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "document",
                        "eventName": "click"
                    }, {
                        "targetType": "document",
                        "eventName": "auxclick"
                    }]
                },
                "read_container_data": {}
            },
            "__ccd_em_scroll": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.scrollDepth"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "window",
                        "eventName": "resize"
                    }, {
                        "targetType": "window",
                        "eventName": "scroll"
                    }]
                },
                "read_container_data": {}
            },
            "__set_product_settings": {
                "read_container_data": {}
            },
            "__ccd_em_page_view": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.historyChange-v2"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "window",
                        "eventName": "pushstate"
                    }, {
                        "targetType": "window",
                        "eventName": "popstate"
                    }]
                },
                "read_container_data": {}
            },
            "__ccd_em_site_search": {
                "get_url": {
                    "urlParts": "any",
                    "queriesAllowed": "any"
                },
                "read_container_data": {}
            },
            "__ccd_conversion_marking": {
                "read_container_data": {}
            },
            "__ogt_google_signals": {
                "read_container_data": {}
            },
            "__ccd_em_video": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.video"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "element",
                        "eventName": "onStateChange"
                    }, {
                        "targetType": "element",
                        "eventName": "onPlaybackRateChange"
                    }]
                },
                "read_container_data": {}
            },
            "__ccd_em_outbound_click": {
                "get_url": {
                    "urlParts": "any",
                    "queriesAllowed": "any"
                },
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.linkClick"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "document",
                        "eventName": "click"
                    }, {
                        "targetType": "document",
                        "eventName": "auxclick"
                    }]
                },
                "read_container_data": {}
            }
        }
        ,
        "security_groups": {
            "google": ["__ccd_em_download", "__ccd_em_scroll", "__set_product_settings", "__ccd_em_page_view", "__ccd_em_site_search", "__ccd_conversion_marking", "__ogt_google_signals", "__ccd_em_video", "__ccd_em_outbound_click"]
        }

    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var l, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ca = function(a) {
        return a.raw = a
    }, da = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ea;
    if ("function" == typeof Object.setPrototypeOf)
        ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                a: !0
            }
              , ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.a;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ja = ea
      , ka = function(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja)
            ja(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.ul = b.prototype
    }
      , la = this || self
      , ma = function(a) {
        return a
    };
    var oa = function(a, b) {
        this.h = a;
        this.s = b
    };
    var pa = function(a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }
      , qa = function() {
        this.D = {};
        this.H = !1;
        this.J = {}
    }
      , ra = function(a, b) {
        var c = [], d;
        for (d in a.D)
            if (a.D.hasOwnProperty(d))
                switch (d = d.substr(5),
                b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
                }
        return c
    };
    qa.prototype.get = function(a) {
        return this.D["dust." + a]
    }
    ;
    qa.prototype.set = function(a, b) {
        this.H || (a = "dust." + a,
        this.J.hasOwnProperty(a) || (this.D[a] = b))
    }
    ;
    qa.prototype.has = function(a) {
        return this.D.hasOwnProperty("dust." + a)
    }
    ;
    var sa = function(a, b) {
        b = "dust." + b;
        a.H || a.J.hasOwnProperty(b) || delete a.D[b]
    };
    qa.prototype.Pb = function() {
        this.H = !0
    }
    ;
    qa.prototype.Ne = function() {
        return this.H
    }
    ;
    var ta = function(a) {
        this.s = new qa;
        this.h = [];
        this.D = !1;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) && (pa(b) ? this.h[Number(b)] = a[Number(b)] : this.s.set(b, a[b]))
    };
    l = ta.prototype;
    l.toString = function(a) {
        if (a && 0 <= a.indexOf(this))
            return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof ta ? (a = a || [],
            a.push(this),
            b.push(d.toString(a)),
            a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    }
    ;
    l.set = function(a, b) {
        if (!this.D)
            if ("length" === a) {
                if (!pa(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else
                pa(a) ? this.h[Number(a)] = b : this.s.set(a, b)
    }
    ;
    l.get = function(a) {
        return "length" === a ? this.length() : pa(a) ? this.h[Number(a)] : this.s.get(a)
    }
    ;
    l.length = function() {
        return this.h.length
    }
    ;
    l.Ob = function() {
        for (var a = ra(this.s, 1), b = 0; b < this.h.length; b++)
            a.push(b + "");
        return new ta(a)
    }
    ;
    var ua = function(a, b) {
        pa(b) ? delete a.h[Number(b)] : sa(a.s, b)
    };
    l = ta.prototype;
    l.pop = function() {
        return this.h.pop()
    }
    ;
    l.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    l.shift = function() {
        return this.h.shift()
    }
    ;
    l.splice = function(a, b, c) {
        return new ta(this.h.splice.apply(this.h, arguments))
    }
    ;
    l.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    l.has = function(a) {
        return pa(a) && this.h.hasOwnProperty(a) || this.s.has(a)
    }
    ;
    l.Pb = function() {
        this.D = !0;
        Object.freeze(this.h);
        this.s.Pb()
    }
    ;
    l.Ne = function() {
        return this.D
    }
    ;
    var va = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].De + g > b[f].max)
                    throw Error("Quota exceeded");
                b[f].De += g
            }
        }
        var b = {}
          , c = void 0
          , d = void 0
          , e = {
            yk: function(f) {
                c = f
            },
            Rh: function() {
                c && a(c, 1)
            },
            Ak: function(f) {
                d = f
            },
            Rb: function(f) {
                d && a(d, f)
            },
            Wk: function(f, g) {
                b[f] = b[f] || {
                    De: 0
                };
                b[f].max = g
            },
            Tj: function(f) {
                return b[f] && b[f].De || 0
            },
            reset: function() {
                b = {}
            },
            Gj: a
        };
        e.onFnConsume = e.yk;
        e.consumeFn = e.Rh;
        e.onStorageConsume = e.Ak;
        e.consumeStorage = e.Rb;
        e.setMax = e.Wk;
        e.getConsumed = e.Tj;
        e.reset = e.reset;
        e.consume = e.Gj;
        return e
    };
    var wa = function(a, b) {
        this.D = a;
        this.U = function(c, d, e) {
            return c.apply(d, e)
        }
        ;
        this.H = b;
        this.s = new qa;
        this.h = this.J = void 0
    };
    wa.prototype.add = function(a, b) {
        xa(this, a, b, !1)
    }
    ;
    var xa = function(a, b, c, d) {
        if (!a.s.Ne())
            if (a.D.Rb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)),
            d) {
                var e = a.s;
                e.set(b, c);
                e.J["dust." + b] = !0
            } else
                a.s.set(b, c)
    };
    wa.prototype.set = function(a, b) {
        this.s.Ne() || (!this.s.has(a) && this.H && this.H.has(a) ? this.H.set(a, b) : (this.D.Rb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)),
        this.s.set(a, b)))
    }
    ;
    wa.prototype.get = function(a) {
        return this.s.has(a) ? this.s.get(a) : this.H ? this.H.get(a) : void 0
    }
    ;
    wa.prototype.has = function(a) {
        return !!this.s.has(a) || !(!this.H || !this.H.has(a))
    }
    ;
    var ya = function(a) {
        var b = new wa(a.D,a);
        a.J && (b.J = a.J);
        b.U = a.U;
        b.h = a.h;
        return b
    };
    var za = function() {}
      , Aa = function(a) {
        return "function" === typeof a
    }
      , m = function(a) {
        return "string" === typeof a
    }
      , Ba = function(a) {
        return "number" === typeof a && !isNaN(a)
    }
      , Ca = Array.isArray
      , Ea = function(a, b) {
        if (a && Ca(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , Fa = function(a, b) {
        if (!Ba(a) || !Ba(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , Ia = function(a, b) {
        for (var c = new Ha, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , Ja = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Ka = function(a) {
        return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , La = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Ma = function(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
      , Na = function(a) {
        var b = [];
        if (Ca(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Oa = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Qa = function() {
        return new Date(Date.now())
    }
      , Ra = function() {
        return Qa().getTime()
    }
      , Ha = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    Ha.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    Ha.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Sa = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Ta = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Ua = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Va = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , Wa = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , Xa = function(a, b) {
        var c = y;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e]))
                return;
            d = d[a[e]];
            if (0 <= b.indexOf(d))
                return
        }
        return d
    }
      , Ya = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , Za = /^\w{1,9}$/
      , $a = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        Ja(a, function(d, e) {
            Za.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
      , ab = function(a, b) {
        function c() {
            ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    };
    var bb = function(a, b) {
        qa.call(this);
        this.U = a;
        this.sa = b
    };
    ka(bb, qa);
    bb.prototype.toString = function() {
        return this.U
    }
    ;
    bb.prototype.Ob = function() {
        return new ta(ra(this, 1))
    }
    ;
    bb.prototype.h = function(a, b) {
        a.D.Rh();
        return this.sa.apply(new cb(this,a), Array.prototype.slice.call(arguments, 1))
    }
    ;
    bb.prototype.s = function(a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    }
    ;
    var fb = function(a, b) {
        for (var c, d = 0; d < b.length && !(c = eb(a, b[d]),
        c instanceof oa); d++)
            ;
        return c
    }
      , eb = function(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!(c && c instanceof bb))
                throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.h.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.J;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    }
      , cb = function(a, b) {
        this.s = a;
        this.h = b
    }
      , G = function(a, b) {
        return Ca(b) ? eb(a.h, b) : b
    }
      , H = function(a) {
        return a.s.U
    };
    var gb = function() {
        qa.call(this)
    };
    ka(gb, qa);
    gb.prototype.Ob = function() {
        return new ta(ra(this, 1))
    }
    ;
    var hb = {
        control: function(a, b) {
            return new oa(a,G(this, b))
        },
        fn: function(a, b, c) {
            var d = this.h
              , e = G(this, b);
            if (!(e instanceof ta))
                throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.h.D.Rb(a.length + f.length);
            return new bb(a,function() {
                return function(g) {
                    var h = ya(d);
                    void 0 === h.h && (h.h = this.h.h);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                        if (k[n] = G(this, k[n]),
                        k[n]instanceof oa)
                            return k[n];
                    for (var p = e.get("length"), q = 0; q < p; q++)
                        q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new ta(k));
                    var r = fb(h, f);
                    if (r instanceof oa)
                        return "return" === r.h ? r.s : r
                }
            }())
        },
        list: function(a) {
            var b = this.h.D;
            b.Rb(arguments.length);
            for (var c = new ta, d = 0; d < arguments.length; d++) {
                var e = G(this, arguments[d]);
                "string" === typeof e && b.Rb(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.h.D, c = new gb, d = 0; d < arguments.length - 1; d += 2) {
                var e = G(this, arguments[d]) + ""
                  , f = G(this, arguments[d + 1])
                  , g = e.length;
                g += "string" === typeof f ? f.length : 1;
                b.Rb(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var ib = function() {
        this.D = va();
        this.h = new wa(this.D)
    }
      , jb = function(a, b, c) {
        var d = new bb(b,c);
        d.Pb();
        a.h.set(b, d)
    }
      , kb = function(a, b, c) {
        hb.hasOwnProperty(b) && jb(a, c || b, hb[b])
    };
    ib.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.s(c)
    }
    ;
    ib.prototype.s = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = eb(this.h, arguments[c]);
        return b
    }
    ;
    ib.prototype.H = function(a, b) {
        var c = ya(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++)
            d = d = eb(c, arguments[e]);
        return d
    }
    ;
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var lb, mb = function() {
        if (void 0 === lb) {
            var a = null
              , b = la.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ma,
                        createScript: ma,
                        createScriptURL: ma
                    })
                } catch (c) {
                    la.console && la.console.error(c.message)
                }
                lb = a
            } else
                lb = a
        }
        return lb
    };
    var ob = function(a, b) {
        this.h = b === nb ? a : ""
    };
    ob.prototype.toString = function() {
        return this.h + ""
    }
    ;
    var pb = function(a) {
        return a instanceof ob && a.constructor === ob ? a.h : "type_error:TrustedResourceUrl"
    }
      , nb = {}
      , qb = function(a) {
        var b = a
          , c = mb()
          , d = c ? c.createScriptURL(b) : b;
        return new ob(d,nb)
    };
    var rb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function sb() {
        var a = la.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    function tb(a) {
        return -1 != sb().indexOf(a)
    }
    ;function ub() {
        return tb("Firefox") || tb("FxiOS")
    }
    function vb() {
        return (tb("Chrome") || tb("CriOS")) && !tb("Edge") || tb("Silk")
    }
    ;var wb = {}
      , xb = function(a, b) {
        this.h = b === wb ? a : ""
    };
    xb.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var yb = function(a) {
        return a instanceof xb && a.constructor === xb ? a.h : "type_error:SafeHtml"
    }
      , zb = function(a) {
        var b = a
          , c = mb()
          , d = c ? c.createHTML(b) : b;
        return new xb(d,wb)
    };
    var Ab = {};
    var Bb = function() {}
      , Cb = function(a) {
        this.h = a
    };
    ka(Cb, Bb);
    Cb.prototype.toString = function() {
        return this.h
    }
    ;
    function Db(a, b) {
        var c = [new Cb(Eb[0].toLowerCase(),Ab)];
        if (0 === c.length)
            throw Error("No prefixes are provided");
        var d = c.map(function(f) {
            var g;
            if (f instanceof Cb)
                g = f.h;
            else
                throw Error("");
            return g
        })
          , e = b.toLowerCase();
        if (d.every(function(f) {
            return 0 !== e.indexOf(f)
        }))
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }
    function Fb(a) {
        if ("script" === a.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeStyleSheet.");
    }
    ;var y = window
      , I = document
      , Gb = navigator
      , Hb = I.currentScript && I.currentScript.src
      , Ib = function(a, b) {
        var c = y[a];
        y[a] = void 0 === c ? b : c;
        return y[a]
    }
      , Jb = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , Kb = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , Lb = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function Mb(a, b, c) {
        b && Ja(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Nb = function(a, b, c, d, e) {
        var f = I.createElement("script");
        Mb(f, d, Kb);
        f.type = "text/javascript";
        f.async = !0;
        var g = qb(a);
        f.src = pb(g);
        var h, k, n, p = null == (n = (k = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(k, "script[nonce]");
        (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
        Jb(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var q = I.getElementsByTagName("script")[0] || I.body || I.head;
            q.parentNode.insertBefore(f, q)
        }
        return f
    }
      , Ob = function() {
        if (Hb) {
            var a = Hb.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , Pb = function(a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var g = e
          , h = !1;
        g || (g = I.createElement("iframe"),
        h = !0);
        Mb(g, c, Lb);
        d && Ja(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0",
        g.width = "0",
        g.style.display = "none",
        g.style.visibility = "hidden");
        if (h) {
            var k = I.body && I.body.lastChild || I.body || I.head;
            k.parentNode.insertBefore(g, k)
        }
        Jb(g, b);
        void 0 !== a && (g.src = a);
        return g
    }
      , Qb = function(a, b, c) {
        var d = new Image(1,1);
        d.onload = function() {
            d.onload = null;
            b && b()
        }
        ;
        d.onerror = function() {
            d.onerror = null;
            c && c()
        }
        ;
        d.src = a;
        return d
    }
      , Rb = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , Sb = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , J = function(a) {
        y.setTimeout(a, 0)
    }
      , Tb = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , Ub = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , Vb = function(a) {
        var b = I.createElement("div")
          , c = b
          , d = zb("A<div>" + a + "</div>");
        void 0 !== c.tagName && Fb(c);
        c.innerHTML = yb(d);
        b = b.lastChild;
        for (var e = []; b.firstChild; )
            e.push(b.removeChild(b.firstChild));
        return e
    }
      , Wb = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , Xb = function(a) {
        var b;
        try {
            b = Gb.sendBeacon && Gb.sendBeacon(a)
        } catch (c) {}
        b || Qb(a)
    }
      , Yb = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    };
    var Zb = function(a, b) {
        return G(this, a) && G(this, b)
    }
      , $b = function(a, b) {
        return G(this, a) === G(this, b)
    }
      , ac = function(a, b) {
        return G(this, a) || G(this, b)
    }
      , bc = function(a, b) {
        a = G(this, a);
        b = G(this, b);
        return -1 < String(a).indexOf(String(b))
    }
      , dc = function(a, b) {
        a = String(G(this, a));
        b = String(G(this, b));
        return a.substring(0, b.length) === b
    }
      , ec = function(a, b) {
        a = G(this, a);
        b = G(this, b);
        switch (a) {
        case "pageLocation":
            var c = y.location.href;
            b instanceof gb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
            return c
        }
    };
    var gc = function() {
        this.h = new ib;
        fc(this)
    };
    gc.prototype.execute = function(a) {
        return this.h.s(a)
    }
    ;
    var fc = function(a) {
        kb(a.h, "map");
        var b = function(c, d) {
            jb(a.h, c, d)
        };
        b("and", Zb);
        b("contains", bc);
        b("equals", $b);
        b("or", ac);
        b("startsWith", dc);
        b("variable", ec)
    };
    var hc = function(a) {
        if (a instanceof hc)
            return a;
        this.cb = a
    };
    hc.prototype.toString = function() {
        return String(this.cb)
    }
    ;
    var jc = function(a) {
        qa.call(this);
        this.h = a;
        this.set("then", ic(this));
        this.set("catch", ic(this, !0));
        this.set("finally", ic(this, !1, !0))
    };
    ka(jc, gb);
    var ic = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new bb("",function(d, e) {
            b && (e = d,
            d = void 0);
            c && (e = d);
            d instanceof bb || (d = void 0);
            e instanceof bb || (e = void 0);
            var f = ya(this.h)
              , g = function(k) {
                return function(n) {
                    return c ? (k.h(f),
                    a.h) : k.h(f, n)
                }
            }
              , h = a.h.then(d && g(d), e && g(e));
            return new jc(h)
        }
        )
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var kc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , lc = function(a) {
        if (null == a)
            return String(a);
        var b = kc.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , mc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , nc = function(a) {
        if (!a || "object" != lc(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !mc(a, "constructor") && !mc(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || mc(a, b)
    }
      , L = function(a, b) {
        var c = b || ("array" == lc(a) ? [] : {}), d;
        for (d in a)
            if (mc(a, d)) {
                var e = a[d];
                "array" == lc(e) ? ("array" != lc(c[d]) && (c[d] = []),
                c[d] = L(e, c[d])) : nc(e) ? (nc(c[d]) || (c[d] = {}),
                c[d] = L(e, c[d])) : c[d] = e
            }
        return c
    };
    var qc = function(a, b, c) {
        var d = []
          , e = []
          , f = function(h, k) {
            for (var n = ra(h, 1), p = 0; p < n.length; p++)
                k[n[p]] = g(h.get(n[p]))
        }
          , g = function(h) {
            var k = d.indexOf(h);
            if (-1 < k)
                return e[k];
            if (h instanceof ta) {
                var n = [];
                d.push(h);
                e.push(n);
                for (var p = h.Ob(), q = 0; q < p.length(); q++)
                    n[p.get(q)] = g(h.get(p.get(q)));
                return n
            }
            if (h instanceof jc)
                return h.h;
            if (h instanceof gb) {
                var r = {};
                d.push(h);
                e.push(r);
                f(h, r);
                return r
            }
            if (h instanceof bb) {
                var t = function() {
                    for (var v = Array.prototype.slice.call(arguments, 0), x = 0; x < v.length; x++)
                        v[x] = oc(v[x], b, c);
                    var z = b ? b.D : va()
                      , w = new wa(z);
                    b && (w.h = b.h);
                    return g(h.h.apply(h, [w].concat(v)))
                };
                d.push(h);
                e.push(t);
                f(h, t);
                return t
            }
            var u = !1;
            switch (c) {
            case 1:
                u = !0;
                break;
            case 2:
                u = !1;
                break;
            case 3:
                u = !1;
                break;
            default:
            }
            if (h instanceof hc && u)
                return h.cb;
            switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return h;
            case "object":
                if (null === h)
                    return null
            }
        };
        return g(a)
    }
      , oc = function(a, b, c) {
        var d = []
          , e = []
          , f = function(h, k) {
            for (var n in h)
                h.hasOwnProperty(n) && k.set(n, g(h[n]))
        }
          , g = function(h) {
            var k = d.indexOf(h);
            if (-1 < k)
                return e[k];
            if (Ca(h) || Ka(h)) {
                var n = new ta([]);
                d.push(h);
                e.push(n);
                for (var p in h)
                    h.hasOwnProperty(p) && n.set(p, g(h[p]));
                return n
            }
            if (nc(h)) {
                var q = new gb;
                d.push(h);
                e.push(q);
                f(h, q);
                return q
            }
            if ("function" === typeof h) {
                var r = new bb("",function(w) {
                    for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++)
                        A[B] = qc(G(this, A[B]), b, c);
                    return g((0,
                    this.h.U)(h, h, A))
                }
                );
                d.push(h);
                e.push(r);
                f(h, r);
                return r
            }
            var x = typeof h;
            if (null === h || "string" === x || "number" === x || "boolean" === x)
                return h;
            var z = !1;
            switch (c) {
            case 1:
                z = !0;
                break;
            case 2:
                z = !1;
                break;
            default:
            }
            if (void 0 !== h && z)
                return new hc(h)
        };
        return g(a)
    };
    var rc = function(a) {
        for (var b = [], c = 0; c < a.length(); c++)
            a.has(c) && (b[c] = a.get(c));
        return b
    }
      , sc = function(a) {
        if (void 0 === a || Ca(a) || nc(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var tc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e]instanceof ta)
                    for (var f = arguments[e], g = 0; g < f.length(); g++)
                        c.push(f.get(g));
                else
                    c.push(arguments[e]);
            return new ta(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this))
                    return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new ta(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length()
              , e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length()
              , e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new ta(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(), e, f = 0;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d)
                    throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = rc(this), b = a.length - 1, c = 0; 0 <= b; b--,
            c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : ua(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new ta(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this))
                    return !0;
            return !1
        },
        sort: function(a, b) {
            var c = rc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : ua(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var uc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" ")
      , vc = new oa("break")
      , wc = new oa("continue")
      , xc = function(a, b) {
        return G(this, a) + G(this, b)
    }
      , yc = function(a, b) {
        return G(this, a) && G(this, b)
    }
      , zc = function(a, b, c) {
        a = G(this, a);
        b = G(this, b);
        c = G(this, c);
        if (!(c instanceof ta))
            throw Error("Error: Non-List argument given to Apply instruction.");
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't read property " + b + " of " + a + ".");
        var d = "number" === typeof a;
        if ("boolean" === typeof a || d) {
            if ("toString" === b) {
                if (d && c.length()) {
                    var e = qc(c.get(0));
                    try {
                        return a.toString(e)
                    } catch (q) {}
                }
                return a.toString()
            }
            throw Error("TypeError: " + a + "." + b + " is not a function.");
        }
        if ("string" === typeof a) {
            if (0 <= uc.indexOf(b)) {
                var f = qc(c);
                return oc(a[b].apply(a, f), this.h)
            }
            throw Error("TypeError: " + b + " is not a function");
        }
        if (a instanceof ta) {
            if (a.has(b)) {
                var g = a.get(b);
                if (g instanceof bb) {
                    var h = rc(c);
                    h.unshift(this.h);
                    return g.h.apply(g, h)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (0 <= tc.supportedMethods.indexOf(b)) {
                var k = rc(c);
                k.unshift(this.h);
                return tc[b].apply(a, k)
            }
        }
        if (a instanceof bb || a instanceof gb) {
            if (a.has(b)) {
                var n = a.get(b);
                if (n instanceof bb) {
                    var p = rc(c);
                    p.unshift(this.h);
                    return n.h.apply(n, p)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if ("toString" === b)
                return a instanceof bb ? a.U : a.toString();
            if ("hasOwnProperty" === b)
                return a.has.apply(a, rc(c))
        }
        if (a instanceof hc && "toString" === b)
            return a.toString();
        throw Error("TypeError: Object has no '" + b + "' property.");
    }
      , Ac = function(a, b) {
        a = G(this, a);
        if ("string" !== typeof a)
            throw Error("Invalid key name given for assignment.");
        var c = this.h;
        if (!c.has(a))
            throw Error("Attempting to assign to undefined value " + b);
        var d = G(this, b);
        c.set(a, d);
        return d
    }
      , Bc = function(a) {
        var b = ya(this.h)
          , c = fb(b, Array.prototype.slice.apply(arguments));
        if (c instanceof oa)
            return c
    }
      , Cc = function() {
        return vc
    }
      , Dc = function(a) {
        for (var b = G(this, a), c = 0; c < b.length; c++) {
            var d = G(this, b[c]);
            if (d instanceof oa)
                return d
        }
    }
      , Ec = function(a) {
        for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
            var d = arguments[c];
            if ("string" === typeof d) {
                var e = G(this, arguments[c + 1]);
                xa(b, d, e, !0)
            }
        }
    }
      , Fc = function() {
        return wc
    }
      , Ic = function(a, b, c) {
        var d = new ta;
        b = G(this, b);
        for (var e = 0; e < b.length; e++)
            d.push(b[e]);
        var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.h.add(a, G(this, f))
    }
      , Jc = function(a, b) {
        return G(this, a) / G(this, b)
    }
      , Kc = function(a, b) {
        a = G(this, a);
        b = G(this, b);
        var c = a instanceof hc
          , d = b instanceof hc;
        return c || d ? c && d ? a.cb == b.cb : !1 : a == b
    }
      , Lc = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = G(this, arguments[c]);
        return b
    };
    function Mc(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e))
              , g = fb(f, d);
            if (g instanceof oa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
        }
    }
    function Nc(a, b, c) {
        if ("string" === typeof b)
            return Mc(a, function() {
                return b.length
            }, function(f) {
                return f
            }, c);
        if (b instanceof gb || b instanceof ta || b instanceof bb) {
            var d = b.Ob()
              , e = d.length();
            return Mc(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Oc = function(a, b, c) {
        a = G(this, a);
        b = G(this, b);
        c = G(this, c);
        var d = this.h;
        return Nc(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , Pc = function(a, b, c) {
        a = G(this, a);
        b = G(this, b);
        c = G(this, c);
        var d = this.h;
        return Nc(function(e) {
            var f = ya(d);
            xa(f, a, e, !0);
            return f
        }, b, c)
    }
      , Qc = function(a, b, c) {
        a = G(this, a);
        b = G(this, b);
        c = G(this, c);
        var d = this.h;
        return Nc(function(e) {
            var f = ya(d);
            f.add(a, e);
            return f
        }, b, c)
    }
      , Sc = function(a, b, c) {
        a = G(this, a);
        b = G(this, b);
        c = G(this, c);
        var d = this.h;
        return Rc(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , Tc = function(a, b, c) {
        a = G(this, a);
        b = G(this, b);
        c = G(this, c);
        var d = this.h;
        return Rc(function(e) {
            var f = ya(d);
            xa(f, a, e, !0);
            return f
        }, b, c)
    }
      , Uc = function(a, b, c) {
        a = G(this, a);
        b = G(this, b);
        c = G(this, c);
        var d = this.h;
        return Rc(function(e) {
            var f = ya(d);
            f.add(a, e);
            return f
        }, b, c)
    };
    function Rc(a, b, c) {
        if ("string" === typeof b)
            return Mc(a, function() {
                return b.length
            }, function(d) {
                return b[d]
            }, c);
        if (b instanceof ta)
            return Mc(a, function() {
                return b.length()
            }, function(d) {
                return b.get(d)
            }, c);
        throw new TypeError("The value is not iterable.");
    }
    var Vc = function(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = G(this, a);
        if (!(f instanceof ta))
            throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.h;
        d = G(this, d);
        var h = ya(g);
        for (e(g, h); eb(h, b); ) {
            var k = fb(h, d);
            if (k instanceof oa) {
                if ("break" === k.h)
                    break;
                if ("return" === k.h)
                    return k
            }
            var n = ya(g);
            e(h, n);
            eb(n, c);
            h = n
        }
    }
      , Wc = function(a) {
        a = G(this, a);
        var b = this.h
          , c = !1;
        if (c && !b.has(a))
            throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }
      , Xc = function(a, b) {
        var c;
        a = G(this, a);
        b = G(this, b);
        if (void 0 === a || null === a)
            throw Error("TypeError: cannot access property of " + a + ".");
        if (a instanceof gb || a instanceof ta || a instanceof bb)
            c = a.get(b);
        else if ("string" === typeof a)
            "length" === b ? c = a.length : pa(b) && (c = a[b]);
        else if (a instanceof hc)
            return;
        return c
    }
      , Yc = function(a, b) {
        return G(this, a) > G(this, b)
    }
      , Zc = function(a, b) {
        return G(this, a) >= G(this, b)
    }
      , $c = function(a, b) {
        a = G(this, a);
        b = G(this, b);
        a instanceof hc && (a = a.cb);
        b instanceof hc && (b = b.cb);
        return a === b
    }
      , ad = function(a, b) {
        return !$c.call(this, a, b)
    }
      , bd = function(a, b, c) {
        var d = [];
        G(this, a) ? d = G(this, b) : c && (d = G(this, c));
        var e = fb(this.h, d);
        if (e instanceof oa)
            return e
    }
      , cd = function(a, b) {
        return G(this, a) < G(this, b)
    }
      , dd = function(a, b) {
        return G(this, a) <= G(this, b)
    }
      , ed = function(a, b) {
        return G(this, a) % G(this, b)
    }
      , fd = function(a, b) {
        return G(this, a) * G(this, b)
    }
      , hd = function(a) {
        return -G(this, a)
    }
      , id = function(a) {
        return !G(this, a)
    }
      , jd = function(a, b) {
        return !Kc.call(this, a, b)
    }
      , kd = function() {
        return null
    }
      , ld = function(a, b) {
        return G(this, a) || G(this, b)
    }
      , md = function(a, b) {
        var c = G(this, a);
        G(this, b);
        return c
    }
      , nd = function(a) {
        return G(this, a)
    }
      , od = function(a) {
        return Array.prototype.slice.apply(arguments)
    }
      , pd = function(a) {
        return new oa("return",G(this, a))
    }
      , qd = function(a, b, c) {
        a = G(this, a);
        b = G(this, b);
        c = G(this, c);
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't set property " + b + " of " + a + ".");
        (a instanceof bb || a instanceof ta || a instanceof gb) && a.set(b, c);
        return c
    }
      , rd = function(a, b) {
        return G(this, a) - G(this, b)
    }
      , sd = function(a, b, c) {
        a = G(this, a);
        var d = G(this, b)
          , e = G(this, c);
        if (!Ca(d) || !Ca(e))
            throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === G(this, d[h]))
                if (f = G(this, e[h]),
                f instanceof oa) {
                    var k = f.h;
                    if ("break" === k)
                        return;
                    if ("return" === k || "continue" === k)
                        return f
                } else
                    g = !0;
        if (e.length === d.length + 1 && (f = G(this, e[e.length - 1]),
        f instanceof oa && ("return" === f.h || "continue" === f.h)))
            return f
    }
      , td = function(a, b, c) {
        return G(this, a) ? G(this, b) : G(this, c)
    }
      , ud = function(a) {
        a = G(this, a);
        return a instanceof bb ? "function" : typeof a
    }
      , vd = function(a) {
        for (var b = this.h, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" !== typeof d || b.add(d, void 0)
        }
    }
      , wd = function(a, b, c, d) {
        var e = G(this, d);
        if (G(this, c)) {
            var f = fb(this.h, e);
            if (f instanceof oa) {
                if ("break" === f.h)
                    return;
                if ("return" === f.h)
                    return f
            }
        }
        for (; G(this, a); ) {
            var g = fb(this.h, e);
            if (g instanceof oa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
            G(this, b)
        }
    }
      , xd = function(a) {
        return ~Number(G(this, a))
    }
      , yd = function(a, b) {
        return Number(G(this, a)) << Number(G(this, b))
    }
      , zd = function(a, b) {
        return Number(G(this, a)) >> Number(G(this, b))
    }
      , Ad = function(a, b) {
        return Number(G(this, a)) >>> Number(G(this, b))
    }
      , Bd = function(a, b) {
        return Number(G(this, a)) & Number(G(this, b))
    }
      , Cd = function(a, b) {
        return Number(G(this, a)) ^ Number(G(this, b))
    }
      , Dd = function(a, b) {
        return Number(G(this, a)) | Number(G(this, b))
    };
    var Fd = function() {
        this.h = new ib;
        Ed(this)
    };
    Fd.prototype.execute = function(a) {
        return Hd(this.h.s(a))
    }
    ;
    var Id = function(a, b, c) {
        return Hd(a.h.H(b, c))
    }
      , Ed = function(a) {
        var b = function(d, e) {
            kb(a.h, d, String(e))
        };
        b("control", 49);
        b("fn", 51);
        b("list", 7);
        b("map", 8);
        b("undefined", 44);
        var c = function(d, e) {
            jb(a.h, String(d), e)
        };
        c(0, xc);
        c(1, yc);
        c(2, zc);
        c(3, Ac);
        c(53, Bc);
        c(4, Cc);
        c(5, Dc);
        c(52, Ec);
        c(6, Fc);
        c(9, Dc);
        c(50, Ic);
        c(10, Jc);
        c(12, Kc);
        c(13, Lc);
        c(47, Oc);
        c(54, Pc);
        c(55, Qc);
        c(63, Vc);
        c(64, Sc);
        c(65, Tc);
        c(66, Uc);
        c(15, Wc);
        c(16, Xc);
        c(17, Xc);
        c(18, Yc);
        c(19, Zc);
        c(20, $c);
        c(21, ad);
        c(22, bd);
        c(23, cd);
        c(24, dd);
        c(25, ed);
        c(26, fd);
        c(27, hd);
        c(28, id);
        c(29, jd);
        c(45, kd);
        c(30, ld);
        c(32, md);
        c(33, md);
        c(34, nd);
        c(35, nd);
        c(46, od);
        c(36, pd);
        c(43, qd);
        c(37, rd);
        c(38, sd);
        c(39, td);
        c(40, ud);
        c(41, vd);
        c(42, wd);
        c(58, xd);
        c(57, yd);
        c(60, zd);
        c(61, Ad);
        c(56, Bd);
        c(62, Cd);
        c(59, Dd)
    };
    function Hd(a) {
        if (a instanceof oa || a instanceof bb || a instanceof ta || a instanceof gb || a instanceof hc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
            return a
    }
    ;var Jd = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Di: a("consent"),
            Ve: a("consent_always_fire"),
            pg: a("convert_case_to"),
            qg: a("convert_false_to"),
            rg: a("convert_null_to"),
            sg: a("convert_true_to"),
            ug: a("convert_undefined_to"),
            kl: a("debug_mode_metadata"),
            Nb: a("function"),
            tf: a("instance_name"),
            pj: a("live_only"),
            qj: a("malware_disabled"),
            rj: a("metadata"),
            uj: a("original_activity_id"),
            ol: a("original_vendor_template_id"),
            nl: a("once_on_load"),
            tj: a("once_per_event"),
            zh: a("once_per_load"),
            pl: a("priority_override"),
            ql: a("respected_consent_types"),
            Fh: a("setup_tags"),
            Hh: a("tag_id"),
            Ih: a("teardown_tags")
        }
    }();
    var ee;
    var fe = [], ge = [], he = [], ie = [], je = [], ke = {}, le, me, ne, oe = function(a, b) {
        var c = {};
        c["function"] = "__" + a;
        for (var d in b)
            b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, pe = function(a, b) {
        var c = a["function"]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = ke[c], f = {}, g;
        for (g in a)
            if (a.hasOwnProperty(g))
                if (0 === g.indexOf("vtp_"))
                    e && d && d.Qh && d.Qh(a[g]),
                    f[void 0 !== e ? g : g.substr(4)] = a[g];
                else if (g === Jd.Ve.toString() && a[g]) {}
        e && d && d.Ph && (f.vtp_gtmCachedValues = d.Ph);
        if (b) {
            if (null == b.name) {
                var h;
                a: {
                    var k = b.index;
                    if (null == k)
                        h = "";
                    else {
                        var n;
                        switch (b.type) {
                        case 2:
                            n = fe[k];
                            break;
                        case 1:
                            n = ie[k];
                            break;
                        default:
                            h = "";
                            break a
                        }
                        var p = n && n[Jd.tf];
                        h = p ? String(p) : ""
                    }
                }
                b.name = h
            }
            e && (f.vtp_gtmEntityIndex = b.index,
            f.vtp_gtmEntityName = b.name)
        }
        return void 0 !== e ? e(f) : ee(c, f, b)
    }, re = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = qe(a[e], b, c));
        return d
    }, qe = function(a, b, c) {
        if (Ca(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(qe(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = fe[f];
                if (!g || b.Pf(g))
                    return;
                c[f] = !0;
                var h = String(g[Jd.tf]);
                try {
                    var k = re(g, b, c);
                    k.vtp_gtmEventId = b.id;
                    b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
                    d = pe(k, {
                        event: b,
                        index: f,
                        type: 2,
                        name: h
                    });
                    ne && (d = ne.Hj(d, k))
                } catch (w) {
                    b.di && b.di(w, Number(f), h),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[qe(a[n], b, c)] = qe(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var r = qe(a[q], b, c);
                    me && (p = p || r === me.qe);
                    d.push(r)
                }
                return me && p ? me.Ij(d) : d.join("");
            case "escape":
                d = qe(a[1], b, c);
                if (me && Ca(a[1]) && "macro" === a[1][0] && me.jk(a))
                    return me.Gk(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    Kd[a[t]] && (d = Kd[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!ie[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    Wh: a[2],
                    index: u
                };
            case "zb":
                var v = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                v["function"] = a[1];
                var x = se(v, b, c)
                  , z = !!a[4];
                return z || 2 !== x ? z !== (1 === x) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, se = function(a, b, c) {
        try {
            return le(re(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var te = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.s = a;
        this.h = c
    };
    ka(te, Error);
    function ue(a, b) {
        if (Ca(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++)
                ue(a[c], b[c])
        }
    }
    ;var we = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack"in c && (this.stack = c.stack);
        this.Bk = a;
        this.s = b;
        this.h = []
    };
    ka(we, Error);
    var ye = function() {
        return function(a, b) {
            a instanceof we || (a = new we(a,xe));
            b && a.h.push(b);
            throw a;
        }
    };
    function xe(a) {
        if (!a.length)
            return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--)
            Ba(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--)
            a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    }
    ;var Be = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        for (var c = [], d = [], e = ze(a), f = 0; f < ge.length; f++) {
            var g = ge[f]
              , h = Ae(g, e);
            if (h) {
                for (var k = g.add || [], n = 0; n < k.length; n++)
                    c[k[n]] = !0;
                b(g.block || [])
            } else
                null === h && b(g.block || []);
        }
        for (var p = [], q = 0; q < ie.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , Ae = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , ze = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = se(he[c], a));
            return b[c]
        }
    };
    var Ce = {
        Hj: function(a, b) {
            b[Jd.pg] && "string" === typeof a && (a = 1 == b[Jd.pg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Jd.rg) && null === a && (a = b[Jd.rg]);
            b.hasOwnProperty(Jd.ug) && void 0 === a && (a = b[Jd.ug]);
            b.hasOwnProperty(Jd.sg) && !0 === a && (a = b[Jd.sg]);
            b.hasOwnProperty(Jd.qg) && !1 === a && (a = b[Jd.qg]);
            return a
        }
    };
    var De = function() {
        this.h = {}
    };
    function Ee(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0
                  , g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d),
                    g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f)
                    throw new te(c,d,g);
            }
    }
    function Fe(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d]
                  , f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Ee(e, b, d, g);
                    Ee(f, b, d, g)
                }
            }
        }
    }
    ;var Je = function() {
        var a = data.permissions || {}
          , b = Ge.P
          , c = this;
        this.s = new De;
        this.h = {};
        var d = {}
          , e = Fe(this.s, b, function() {
            var f = arguments[0];
            return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        Ja(a, function(f, g) {
            var h = {};
            Ja(g, function(k, n) {
                var p = He(k, n);
                h[k] = p.assert;
                d[k] || (d[k] = p.aa)
            });
            c.h[f] = function(k, n) {
                var p = h[k];
                if (!p)
                    throw Ie(k, {}, "The requested permission " + k + " is not configured.");
                var q = Array.prototype.slice.call(arguments, 0);
                p.apply(void 0, q);
                e.apply(void 0, q)
            }
        })
    }
      , Le = function(a) {
        return Ke.h[a] || function() {}
    };
    function He(a, b) {
        var c = oe(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Ie;
        try {
            return pe(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new te(e,{},"Permission " + e + " is unknown.");
                },
                aa: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f)
                        e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }
    function Ie(a, b, c) {
        return new te(a,b,c)
    }
    ;var Me = !1;
    var Ne = {};
    Ne.jl = Ma('');
    Ne.Kj = Ma('');
    var Oe = Me
      , Pe = Ne.Kj
      , Qe = Ne.jl;
    var Re = function(a, b) {
        var c = String(a);
        return c
    };
    var We = function(a) {
        var b = {}
          , c = 0;
        Ja(a, function(e, f) {
            if (void 0 !== f)
                if (f = Re(f, 100),
                Se.hasOwnProperty(e))
                    b[Se[e]] = Te(f);
                else if (Ue.hasOwnProperty(e)) {
                    var g = Ue[e]
                      , h = Te(f);
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if ("category" === e)
                    for (var k = Te(f).split("/", 5), n = 0; n < k.length; n++) {
                        var p = Ve[n]
                          , q = k[n];
                        b.hasOwnProperty(p) || (b[p] = q)
                    }
                else
                    10 > c && (b["k" + c] = Te(Re(e, 40)),
                    b["v" + c] = Te(f),
                    c++)
        });
        var d = [];
        Ja(b, function(e, f) {
            d.push("" + e + f)
        });
        return d.join("~")
    }
      , Te = function(a) {
        return ("" + a).replace(/~/g, function() {
            return "~~"
        })
    }
      , Se = {
        item_id: "id",
        item_name: "nm",
        item_brand: "br",
        item_category: "ca",
        item_category2: "c2",
        item_category3: "c3",
        item_category4: "c4",
        item_category5: "c5",
        item_variant: "va",
        price: "pr",
        quantity: "qt",
        coupon: "cp",
        item_list_name: "ln",
        index: "lp",
        item_list_id: "li",
        discount: "ds",
        affiliation: "af",
        promotion_id: "pi",
        promotion_name: "pn",
        creative_name: "cn",
        creative_slot: "cs",
        location_id: "lo"
    }
      , Ue = {
        id: "id",
        name: "nm",
        brand: "br",
        variant: "va",
        list_name: "ln",
        list_position: "lp",
        list: "ln",
        position: "lp",
        creative: "cn"
    }
      , Ve = ["ca", "c2", "c3", "c4", "c5"];
    var Xe = function(a) {
        var b = [];
        Ja(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        });
        return b.join("&")
    }
      , Ye = function(a, b, c, d) {
        this.Ka = a.Ka;
        this.Zb = a.Zb;
        this.ia = a.ia;
        this.h = b;
        this.H = c;
        this.D = Xe(a.Ka);
        this.s = Xe(a.ia);
        this.J = this.s.length;
        if (d && 16384 < this.J)
            throw Error("EVENT_TOO_LARGE");
    };
    var Ze = function() {
        this.events = [];
        this.h = this.Ka = "";
        this.D = 0;
        this.s = !1
    };
    Ze.prototype.add = function(a) {
        return this.H(a) ? (this.events.push(a),
        this.Ka = a.D,
        this.h = a.h,
        this.D += a.J,
        this.s = a.H,
        !0) : !1
    }
    ;
    Ze.prototype.H = function(a) {
        var b = 20 > this.events.length && 16384 > a.J + this.D
          , c = this.Ka === a.D && this.h === a.h && this.s === a.H;
        return 0 == this.events.length || b && c
    }
    ;
    var $e = function(a, b) {
        Ja(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        })
    }
      , af = function(a, b) {
        var c = [];
        a.D && c.push(a.D);
        b && c.push("_s=" + b);
        $e(a.Zb, c);
        var d = !1;
        a.s && (c.push(a.s),
        d = !0);
        var e = c.join("&")
          , f = ""
          , g = e.length + a.h.length + 1;
        d && 2048 < g && (f = c.pop(),
        e = c.join("&"));
        return {
            ag: e,
            body: f
        }
    }
      , bf = function(a, b) {
        var c = a.events;
        if (1 == c.length)
            return af(c[0], b);
        var d = [];
        a.Ka && d.push(a.Ka);
        for (var e = {}, f = 0; f < c.length; f++)
            Ja(c[f].Zb, function(t, u) {
                null != u && (e[t] = e[t] || {},
                e[t][String(u)] = e[t][String(u)] + 1 || 1)
            });
        var g = {};
        Ja(e, function(t, u) {
            var v, x = -1, z = 0;
            Ja(u, function(w, A) {
                z += A;
                var B = (w.length + t.length + 2) * (A - 1);
                B > x && (v = w,
                x = B)
            });
            z == c.length && (g[t] = v)
        });
        $e(g, d);
        b && d.push("_s=" + b);
        for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = {
            Rd: n.Rd
        },
        p++) {
            var q = [];
            n.Rd = {};
            Ja(c[p].Zb, function(t) {
                return function(u, v) {
                    g[u] != "" + v && (t.Rd[u] = v)
                }
            }(n));
            c[p].s && q.push(c[p].s);
            $e(n.Rd, q);
            k.push(q.join("&"))
        }
        var r = k.join("\r\n");
        return {
            ag: h,
            body: r
        }
    };
    var mf = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i
      , nf = {
        Fn: "function",
        DustMap: "Object",
        List: "Array"
    }
      , N = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = mf.exec(b[d]);
            if (!e)
                throw Error("Internal Error in " + a);
            var f = e[1]
              , g = "!" === e[2]
              , h = e[3]
              , k = c[d];
            if (null == k) {
                if (g)
                    throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof k;
                k instanceof bb ? n = "Fn" : k instanceof ta ? n = "List" : k instanceof gb ? n = "DustMap" : k instanceof hc && (n = "OpaqueValue");
                if (n != h)
                    throw Error("Error in " + a + ". Argument " + f + " has type " + (nf[n] || n) + ", which does not match required type " + (nf[h] || h) + ".");
            }
        }
    };
    function of(a) {
        return "" + a
    }
    function pf(a, b) {
        var c = [];
        return c
    }
    ;var qf = function(a, b) {
        var c = new bb(a,function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                d[e] = G(this, d[e]);
            return b.apply(this, d)
        }
        );
        c.Pb();
        return c
    }
      , rf = function(a, b) {
        var c = new gb, d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                Aa(e) ? c.set(d, qf(a + "_" + d, e)) : (Ba(e) || m(e) || "boolean" === typeof e) && c.set(d, e)
            }
        c.Pb();
        return c
    };
    var sf = function(a, b) {
        N(H(this), ["apiName:!string", "message:?string"], arguments);
        var c = {}
          , d = new gb;
        return d = rf("AssertApiSubject", c)
    };
    var tf = function(a, b) {
        N(H(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof jc)
            throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {}
          , d = new gb;
        return d = rf("AssertThatSubject", c)
    };
    function uf(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
                b.push(qc(arguments[d], c));
            return oc(a.apply(null, b))
        }
    }
    var wf = function() {
        for (var a = Math, b = vf, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = uf(a[e].bind(a)))
        }
        return c
    };
    var xf = function(a) {
        var b;
        return b
    };
    var yf = function(a) {
        var b;
        return b
    };
    var zf = function(a) {
        return encodeURI(a)
    };
    var Af = function(a) {
        return encodeURIComponent(a)
    };
    var Gf = function(a) {
        N(H(this), ["message:?string"], arguments);
    };
    var Hf = function(a, b) {
        N(H(this), ["min:!number", "max:!number"], arguments);
        return Fa(a, b)
    };
    var O = function(a, b, c) {
        var d = a.h.h;
        if (!d)
            throw Error("Missing program state.");
        d.Cj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var If = function() {
        O(this, "read_container_data");
        var a = new gb;
        a.set("containerId", 'G-2SJ29ZK43S');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", Oe);
        a.set("previewMode", Qe);
        a.set("environmentMode", Pe);
        a.Pb();
        return a
    };
    var Jf = {};
    Jf.enable1pScripts = !0;
    Jf.enableGlobalEventDeveloperIds = !1;
    Jf.enableGlobalEventDeveloperIds = !0;
    Jf.enableGa4OnoRemarketing = !1;
    Jf.omitAuidIfWbraidPresent = !1;
    Jf.reconcileCampaignFields = !1;
    Jf.reconcileCampaignFields = !0;
    Jf.enableEmFormCcd = !1;
    Jf.enableEmFormCcd = !0;
    Jf.enableEmFormCcdPart2 = !1;
    Jf.enableLandingPageDeduplication = !0;
    Jf.enableFloodlightPrerenderingBypass = !1;
    Jf.analyticsPrivateParamsExcluded = !1;
    Jf.ipOverrideExperiment = !1;
    Jf.ipOverrideExperiment = !0;
    Jf.enableAdsConsentedConversionsOnly = !1;
    Jf.enableAdsConsentedConversionsOnly = !0;
    Jf.enableFlConsentedConversionsOnly = !1;
    Jf.enableFlConsentedConversionsOnly = !0;
    Jf.enableAdsHistoryChangeEvents = !1;
    Jf.enableAdsHistoryChangeEvents = !0;
    Jf.enableEValue = !1;
    Jf.enableEuidAutoMode = !1;
    Jf.requireGtagUserDataTos = !0;
    Jf.sendBeaconEnableExperimentPercentage = Number('0') || 0;
    function Kf() {
        return oc(Jf)
    }
    Kf.M = "internal.getFlags";
    var Lf = function() {
        return (new Date).getTime()
    };
    var Mf = function(a) {
        if (null === a)
            return "null";
        if (a instanceof ta)
            return "array";
        if (a instanceof bb)
            return "function";
        if (a instanceof hc) {
            a = a.cb;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Nf = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Oe || Qe) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return oc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(qc(c))
            })
        }
    };
    var Of = function(a) {
        return La(qc(a, this.h))
    };
    var Pf = function(a) {
        return Number(qc(a, this.h))
    };
    var Qf = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Rf = function(a, b, c) {
        var d = null
          , e = !1;
        return e ? d : null
    };
    var vf = "floor ceil round max min abs pow sqrt".split(" ");
    var Sf = function() {
        var a = {};
        return {
            Vj: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            Xk: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }
      , Tf = function(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return bb.prototype.h.apply(a, c)
        }
    }
      , Uf = function(a, b) {
        N(H(this), ["apiName:!string", "mock:?*"], arguments);
    };
    var Vf = {};
    Vf.keys = function(a) {
        return new ta
    }
    ;
    Vf.values = function(a) {
        return new ta
    }
    ;
    Vf.entries = function(a) {
        return new ta
    }
    ;
    Vf.freeze = function(a) {
        return a
    }
    ;
    Vf.delete = function(a, b) {
        return !1
    }
    ;
    var Xf = function() {
        this.h = {};
        this.s = {};
    };
    Xf.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    }
    ;
    Xf.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.s.hasOwnProperty(a))
            throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Aa(b) ? qf(a, b) : rf(a, b)
    }
    ;
    function Yf(a, b) {
        var c = void 0;
        return c
    }
    ;function Zf() {
        var a = {};
        return a
    }
    ;var ag = function(a) {
        return $f ? I.querySelectorAll(a) : null
    }
      , bg = function(a, b) {
        if (!$f)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!I.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , cg = !1;
    if (I.querySelectorAll)
        try {
            var dg = I.querySelectorAll(":root");
            dg && 1 == dg.length && dg[0] == I.documentElement && (cg = !0)
        } catch (a) {}
    var $f = cg;
    var eg = {}
      , fg = function(a, b) {
        eg[a] = eg[a] || [];
        eg[a][b] = !0
    }
      , gg = function(a) {
        for (var b = [], c = eg[a] || [], d = 0; d < c.length; d++)
            c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++)
            b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    }
      , hg = function() {
        for (var a = [], b = eg.GA4_EVENT || [], c = 0; c < b.length; c++)
            b[c] && a.push(c);
        return 0 < a.length ? a : void 0
    };
    var ig = function(a) {
        fg("GTM", a)
    };
    var jg = function(a) {
        return null == a ? "" : m(a) ? Oa(String(a)) : "e0"
    }
      , lg = function(a) {
        return a.replace(kg, "")
    }
      , ng = function(a) {
        return mg(a.replace(/\s/g, ""))
    }
      , mg = function(a) {
        return Oa(a.replace(og, "").toLowerCase())
    }
      , qg = function(a) {
        a = a.replace(/[\s-()/.]/g, "");
        "+" !== a.charAt(0) && (a = "+" + a);
        return pg.test(a) ? a : "e0"
    }
      , sg = function(a) {
        var b = a.toLowerCase().split("@");
        if (2 == b.length) {
            var c = b[0];
            /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
            c = c + "@" + b[1];
            if (rg.test(c))
                return c
        }
        return "e0"
    }, vg = function(a, b) {
        window.Promise || b([]);
        Promise.all(a.map(function(c) {
            return c.value && -1 !== tg.indexOf(c.name) ? ug(c.value).then(function(d) {
                c.value = d
            }) : Promise.resolve()
        })).then(function() {
            b(a)
        }).catch(function() {
            b([])
        })
    }
      , ug = function(a) {
        if ("" === a || "e0" === a)
            return Promise.resolve(a);
        if (y.crypto && y.crypto.subtle)
            try {
                var b = wg(a);
                return y.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return y.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            }
        else
            return Promise.resolve("e1")
    }
      , wg = function(a) {
        var b;
        if (y.TextEncoder)
            b = (new y.TextEncoder("utf-8")).encode(a);
        else {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023),
                c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
            }
            b = new Uint8Array(c)
        }
        return b
    }
      , og = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g
      , rg = /^\S+@\S+\.\S+$/
      , pg = /^\+\d{10,15}$/
      , kg = /[.~]/g
      , xg = {}
      , yg = (xg.email = "em",
    xg.phone_number = "pn",
    xg.first_name = "fn",
    xg.last_name = "ln",
    xg.street = "sa",
    xg.city = "ct",
    xg.region = "rg",
    xg.country = "co",
    xg.postal_code = "pc",
    xg.error_code = "ec",
    xg)
      , zg = function(a, b) {
        function c(n, p, q) {
            var r = n[p];
            Ca(r) || (r = [r]);
            for (var t = 0; t < r.length; ++t) {
                var u = jg(r[t]);
                "" !== u && f.push({
                    name: p,
                    value: q(u),
                    index: void 0
                })
            }
        }
        function d(n, p, q, r) {
            var t = jg(n[p]);
            "" !== t && f.push({
                name: p,
                value: q(t),
                index: r
            })
        }
        function e(n) {
            return function(p) {
                ig(64);
                return n(p)
            }
        }
        var f = [];
        if ("https:" === y.location.protocol) {
            c(a, "email", sg);
            c(a, "phone_number", qg);
            c(a, "first_name", e(ng));
            c(a, "last_name", e(ng));
            var g = a.home_address || {};
            c(g, "street", e(mg));
            c(g, "city", e(mg));
            c(g, "postal_code", e(lg));
            c(g, "region", e(mg));
            c(g, "country", e(lg));
            var h = a.address || {};
            Ca(h) || (h = [h]);
            for (var k = 0; k < h.length; k++)
                d(h[k], "first_name", ng, k),
                d(h[k], "last_name", ng, k),
                d(h[k], "street", mg, k),
                d(h[k], "city", mg, k),
                d(h[k], "postal_code", lg, k),
                d(h[k], "region", mg, k),
                d(h[k], "country", lg, k);
            vg(f, b)
        } else
            f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }),
            b(f)
    }
      , Ag = function(a, b) {
        zg(a, function(c) {
            for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                var g = c[f].name
                  , h = c[f].value
                  , k = c[f].index
                  , n = yg[g];
                n && h && (-1 === tg.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k),
                d.push(n + "." + h),
                e++)
            }
            1 === c.length && "error_code" === c[0].name && (e = 0);
            b(encodeURIComponent(d.join("~")), e)
        })
    }
      , Bg = function(a) {
        if (y.Promise)
            try {
                return new Promise(function(b) {
                    Ag(a, function(c, d) {
                        b({
                            Dd: c,
                            Fk: d
                        })
                    })
                }
                )
            } catch (b) {}
    }
      , tg = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var R = {
        g: {
            I: "ad_storage",
            V: "analytics_storage",
            We: "region",
            ng: "consent_updated",
            og: "wait_for_update",
            Gi: "app_remove",
            Hi: "app_store_refund",
            Ii: "app_store_subscription_cancel",
            Ji: "app_store_subscription_convert",
            Ki: "app_store_subscription_renew",
            vg: "add_payment_info",
            Li: "add_shipping_info",
            fc: "add_to_cart",
            hc: "remove_from_cart",
            Mi: "view_cart",
            Gb: "begin_checkout",
            Ye: "select_item",
            Hb: "view_item_list",
            Ze: "select_promotion",
            ic: "view_promotion",
            Da: "purchase",
            jc: "refund",
            Ma: "view_item",
            wg: "add_to_wishlist",
            Ni: "first_open",
            Oi: "first_visit",
            Ea: "gtag.config",
            Na: "gtag.get",
            Pi: "in_app_purchase",
            Mc: "page_view",
            Qi: "session_start",
            af: "user_engagement",
            kc: "gclid",
            ka: "ads_data_redaction",
            ba: "allow_ad_personalization_signals",
            bf: "allow_custom_scripts",
            Ri: "allow_display_features",
            Nc: "allow_enhanced_conversions",
            Oc: "allow_google_signals",
            Fa: "allow_interest_groups",
            Ud: "auid",
            Si: "auto_detection_enabled",
            lb: "aw_remarketing",
            Vd: "aw_remarketing_only",
            Pc: "discount",
            Qc: "aw_feed_country",
            Rc: "aw_feed_language",
            ca: "items",
            Sc: "aw_merchant_id",
            xg: "aw_basket_type",
            Wd: "campaign_content",
            Xd: "campaign_id",
            Yd: "campaign_medium",
            Zd: "campaign_name",
            Tc: "campaign",
            ae: "campaign_source",
            be: "campaign_term",
            Ga: "client_id",
            Ti: "content_group",
            Ui: "content_type",
            Oa: "conversion_cookie_prefix",
            Uc: "conversion_id",
            nb: "conversion_label",
            xa: "conversion_linker",
            cf: "conversion_api",
            ya: "cookie_domain",
            Ha: "cookie_expires",
            Ta: "cookie_flags",
            mc: "cookie_name",
            wb: "cookie_path",
            Pa: "cookie_prefix",
            Ib: "cookie_update",
            nc: "country",
            va: "currency",
            Vc: "customer_lifetime_value",
            Wc: "custom_map",
            Vi: "debug_mode",
            da: "developer_id",
            yg: "disable_merchant_reported_purchases",
            Wi: "dc_custom_params",
            Xi: "dc_natural_search",
            df: "dynamic_event_settings",
            Yi: "affiliation",
            zg: "checkout_option",
            Ag: "checkout_step",
            Zi: "coupon",
            ef: "list_name",
            aj: "promotions",
            Xc: "shipping",
            Bg: "tax",
            ce: "engagement_time_msec",
            xb: "enhanced_client_id",
            Yc: "enhanced_conversions",
            Cg: "enhanced_conversions_automatic_settings",
            Dg: "enhanced_conversions_mode",
            Zc: "estimated_delivery_date",
            ad: "euid_logged_in_state",
            oc: "event_callback",
            qc: "event_developer_id_string",
            Eg: "event",
            de: "event_settings",
            ee: "event_timeout",
            bj: "experiments",
            ff: "firebase_id",
            bd: "first_party_collection",
            fe: "_x_20",
            Jb: "_x_19",
            Fg: "fledge",
            Gg: "gac_gclid",
            he: "gac_wbraid",
            Hg: "gac_wbraid_multiple_conversions",
            cd: "ga_restrict_domain",
            hf: "ga_temp_client_id",
            Ig: "gdpr_applies",
            Jg: "geo_granularity",
            ob: "value_callback",
            eb: "value_key",
            sc: "global_developer_id_string",
            ml: "google_ono",
            yb: "google_signals",
            ie: "google_tld",
            je: "groups",
            Kg: "gsa_experiment_id",
            Lg: "iframe_state",
            ke: "ignore_referrer",
            jf: "internal_traffic_results",
            Mg: "is_passthrough",
            Ua: "language",
            kf: "legacy_developer_id_string",
            za: "linker",
            uc: "accept_incoming",
            vc: "decorate_forms",
            X: "domains",
            dd: "url_position",
            Ng: "method",
            wc: "new_customer",
            Og: "non_interaction",
            cj: "optimize_id",
            Va: "page_location",
            lf: "page_path",
            fb: "page_referrer",
            xc: "page_title",
            Pg: "passengers",
            Qg: "phone_conversion_callback",
            dj: "phone_conversion_country_code",
            Rg: "phone_conversion_css_class",
            ej: "phone_conversion_ids",
            Sg: "phone_conversion_number",
            Tg: "phone_conversion_options",
            Ug: "quantity",
            me: "redact_device_info",
            Vg: "redact_enhanced_user_id",
            fj: "redact_ga_client_id",
            gj: "redact_user_id",
            ne: "referral_exclusion_definition",
            zb: "restricted_data_processing",
            ij: "retoken",
            Wg: "screen_name",
            Kb: "screen_resolution",
            jj: "search_term",
            Aa: "send_page_view",
            Lb: "send_to",
            ed: "session_duration",
            fd: "session_engaged",
            oe: "session_engaged_time",
            pb: "session_id",
            gd: "session_number",
            yc: "delivery_postal_code",
            Xg: "tc_privacy_string",
            Yg: "temporary_client_id",
            kj: "tracking_id",
            nf: "traffic_type",
            Qa: "transaction_id",
            fa: "transport_url",
            Zg: "trip_type",
            hd: "update",
            qb: "url_passthrough",
            ah: "_user_agent_architecture",
            bh: "_user_agent_bitness",
            dh: "_user_agent_full_version_list",
            eh: "_user_agent_model",
            fh: "_user_agent_platform",
            gh: "_user_agent_platform_version",
            hh: "_user_agent_wow64",
            Ba: "user_data",
            ih: "user_data_auto_latency",
            jh: "user_data_auto_meta",
            kh: "user_data_auto_multi",
            lh: "user_data_auto_selectors",
            mh: "user_data_auto_status",
            Mb: "user_data_settings",
            Ia: "user_id",
            Wa: "user_properties",
            nh: "us_privacy_string",
            qa: "value",
            pe: "wbraid",
            oh: "wbraid_multiple_conversions",
            qh: "_host_name",
            rh: "_in_page_command",
            sh: "_is_linker_valid",
            th: "_is_passthrough_cid",
            xh: "non_personalized_ads"
        }
    }
      , Cg = {}
      , Dg = Object.freeze((Cg[R.g.ba] = 1,
    Cg[R.g.Nc] = 1,
    Cg[R.g.Oc] = 1,
    Cg[R.g.ca] = 1,
    Cg[R.g.ya] = 1,
    Cg[R.g.Ha] = 1,
    Cg[R.g.Ta] = 1,
    Cg[R.g.mc] = 1,
    Cg[R.g.wb] = 1,
    Cg[R.g.Pa] = 1,
    Cg[R.g.Ib] = 1,
    Cg[R.g.Wc] = 1,
    Cg[R.g.da] = 1,
    Cg[R.g.df] = 1,
    Cg[R.g.oc] = 1,
    Cg[R.g.de] = 1,
    Cg[R.g.ee] = 1,
    Cg[R.g.bd] = 1,
    Cg[R.g.cd] = 1,
    Cg[R.g.yb] = 1,
    Cg[R.g.ie] = 1,
    Cg[R.g.je] = 1,
    Cg[R.g.jf] = 1,
    Cg[R.g.za] = 1,
    Cg[R.g.ne] = 1,
    Cg[R.g.zb] = 1,
    Cg[R.g.Aa] = 1,
    Cg[R.g.Lb] = 1,
    Cg[R.g.ed] = 1,
    Cg[R.g.oe] = 1,
    Cg[R.g.yc] = 1,
    Cg[R.g.fa] = 1,
    Cg[R.g.hd] = 1,
    Cg[R.g.Mb] = 1,
    Cg[R.g.Wa] = 1,
    Cg))
      , Eg = Object.freeze([R.g.Va, R.g.fb, R.g.xc, R.g.Ua, R.g.Wg, R.g.Ia, R.g.ff, R.g.Ti])
      , Fg = {}
      , Gg = Object.freeze((Fg[R.g.Gi] = 1,
    Fg[R.g.Hi] = 1,
    Fg[R.g.Ii] = 1,
    Fg[R.g.Ji] = 1,
    Fg[R.g.Ki] = 1,
    Fg[R.g.Ni] = 1,
    Fg[R.g.Oi] = 1,
    Fg[R.g.Pi] = 1,
    Fg[R.g.Qi] = 1,
    Fg[R.g.af] = 1,
    Fg))
      , Hg = {}
      , Ig = Object.freeze((Hg[R.g.vg] = 1,
    Hg[R.g.Li] = 1,
    Hg[R.g.fc] = 1,
    Hg[R.g.hc] = 1,
    Hg[R.g.Mi] = 1,
    Hg[R.g.Gb] = 1,
    Hg[R.g.Ye] = 1,
    Hg[R.g.Hb] = 1,
    Hg[R.g.Ze] = 1,
    Hg[R.g.ic] = 1,
    Hg[R.g.Da] = 1,
    Hg[R.g.jc] = 1,
    Hg[R.g.Ma] = 1,
    Hg[R.g.wg] = 1,
    Hg))
      , Jg = Object.freeze([R.g.ba, R.g.Oc, R.g.Ib])
      , Kg = Object.freeze([].concat(Jg))
      , Lg = Object.freeze([R.g.Ha, R.g.ee, R.g.ed, R.g.oe, R.g.ce])
      , Mg = Object.freeze([].concat(Lg))
      , Ng = {}
      , Og = (Ng[R.g.I] = "1",
    Ng[R.g.V] = "2",
    Ng)
      , Pg = {}
      , Qg = Object.freeze((Pg[R.g.ba] = 1,
    Pg[R.g.Nc] = 1,
    Pg[R.g.Fa] = 1,
    Pg[R.g.lb] = 1,
    Pg[R.g.Vd] = 1,
    Pg[R.g.Pc] = 1,
    Pg[R.g.Qc] = 1,
    Pg[R.g.Rc] = 1,
    Pg[R.g.ca] = 1,
    Pg[R.g.Sc] = 1,
    Pg[R.g.Oa] = 1,
    Pg[R.g.xa] = 1,
    Pg[R.g.ya] = 1,
    Pg[R.g.Ha] = 1,
    Pg[R.g.Ta] = 1,
    Pg[R.g.Pa] = 1,
    Pg[R.g.va] = 1,
    Pg[R.g.Vc] = 1,
    Pg[R.g.da] = 1,
    Pg[R.g.yg] = 1,
    Pg[R.g.Yc] = 1,
    Pg[R.g.Zc] = 1,
    Pg[R.g.ff] = 1,
    Pg[R.g.bd] = 1,
    Pg[R.g.Ua] = 1,
    Pg[R.g.wc] = 1,
    Pg[R.g.Va] = 1,
    Pg[R.g.fb] = 1,
    Pg[R.g.Qg] = 1,
    Pg[R.g.Rg] = 1,
    Pg[R.g.Sg] = 1,
    Pg[R.g.Tg] = 1,
    Pg[R.g.zb] = 1,
    Pg[R.g.Aa] = 1,
    Pg[R.g.Lb] = 1,
    Pg[R.g.yc] = 1,
    Pg[R.g.Qa] = 1,
    Pg[R.g.fa] = 1,
    Pg[R.g.hd] = 1,
    Pg[R.g.qb] = 1,
    Pg[R.g.Ba] = 1,
    Pg[R.g.Ia] = 1,
    Pg[R.g.qa] = 1,
    Pg));
    Object.freeze(R.g);
    var Rg = {}
      , Sg = y.google_tag_manager = y.google_tag_manager || {}
      , Tg = Math.random();
    Rg.ve = "830";
    Rg.ja = "dataLayer";
    Rg.Fi = "ChEI8KK4lwYQk/zVz9uzo5LLARIlAEfpgV7xKrLYT4Fjzf0vdqWo7tiL2vp5WFXdyWr36b4ohARDyBoC1dk\x3d";
    var Ug = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, Vg = {
        __paused: !0,
        __tg: !0
    }, Wg;
    for (Wg in Ug)
        Ug.hasOwnProperty(Wg) && (Vg[Wg] = !0);
    Rg.Lc = "www.googletagmanager.com";
    var Xg, Yg = Rg.Lc + "/gtm.js";
    Yg = Rg.Lc + "/gtag/js";
    Xg = Yg;
    var Zg = Ma("")
      , $g = Ma("")
      , ah = null
      , bh = null
      , ch = {}
      , dh = {}
      , eh = function() {
        var a = Sg.sequence || 1;
        Sg.sequence = a + 1;
        return a
    };
    Rg.Ei = "true";
    var fh = "";
    Rg.we = fh;
    var gh = new Ha
      , hh = {}
      , ih = {}
      , lh = {
        name: Rg.ja,
        set: function(a, b) {
            L(Ya(a, b), hh);
            jh()
        },
        get: function(a) {
            return kh(a, 2)
        },
        reset: function() {
            gh = new Ha;
            hh = {};
            jh()
        }
    }
      , kh = function(a, b) {
        return 2 != b ? gh.get(a) : mh(a)
    }
      , mh = function(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = hh, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , nh = function(a, b) {
        ih.hasOwnProperty(a) || (gh.set(a, b),
        L(Ya(a, b), hh),
        jh())
    }
      , oh = function() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b]
              , d = kh(c, 1);
            if (Ca(d) || nc(d))
                d = L(d);
            ih[c] = d
        }
    }
      , jh = function(a) {
        Ja(ih, function(b, c) {
            gh.set(b, c);
            L(Ya(b), hh);
            L(Ya(b, c), hh);
            a && delete ih[b]
        })
    }
      , ph = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? mh(a) : gh.get(a);
        "array" === lc(d) || "object" === lc(d) ? c = L(d) : c = d;
        return c
    };
    var qh, rh = !1;
    function sh() {
        rh = !0;
        qh = qh || {}
    }
    var th = function(a) {
        rh || sh();
        return qh[a]
    };
    var uh = function() {
        var a = y.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
      , vh = function(a) {
        if (I.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !y.getComputedStyle)
            return !0;
        var c = y.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = y.getComputedStyle(d, null))
        }
        return !1
    };
    var wh = function() {
        var a = I.body, b = I.documentElement || a && a.parentElement, c, d;
        if (I.compatMode && "BackCompat" !== I.compatMode)
            c = b ? b.clientHeight : 0,
            d = b ? b.clientWidth : 0;
        else {
            var e = function(f, g) {
                return f && g ? Math.min(f, g) : Math.max(f, g)
            };
            ig(7);
            c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
            d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
        }
        return {
            width: d,
            height: c
        }
    }
      , xh = function(a) {
        var b = wh()
          , c = b.height
          , d = b.width
          , e = a.getBoundingClientRect()
          , f = e.bottom - e.top
          , g = e.right - e.left;
        return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
    };
    var yh = []
      , zh = !(!y.IntersectionObserver || !y.IntersectionObserverEntry)
      , Ah = function(a, b, c) {
        for (var d = new y.IntersectionObserver(a,{
            threshold: c
        }), e = 0; e < b.length; e++)
            d.observe(b[e]);
        for (var f = 0; f < yh.length; f++)
            if (!yh[f])
                return yh[f] = d,
                f;
        return yh.push(d) - 1
    }
      , Bh = function(a, b, c) {
        function d(h, k) {
            var n = {
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: 0,
                height: 0
            }
              , p = {
                boundingClientRect: h.getBoundingClientRect(),
                intersectionRatio: k,
                intersectionRect: n,
                isIntersecting: 0 < k,
                rootBounds: n,
                target: h,
                time: Ra()
            };
            J(function() {
                return a(p)
            })
        }
        for (var e = [], f = [], g = 0; g < b.length; g++)
            e.push(0),
            f.push(-1);
        c.sort(function(h, k) {
            return h - k
        });
        return function() {
            for (var h = 0; h < b.length; h++) {
                var k = xh(b[h]);
                if (k > e[h])
                    for (; f[h] < c.length - 1 && k >= c[f[h] + 1]; )
                        d(b[h], k),
                        f[h]++;
                else if (k < e[h])
                    for (; 0 <= f[h] && k <= c[f[h]]; )
                        d(b[h], k),
                        f[h]--;
                e[h] = k
            }
        }
    }
      , Ch = function(a, b, c) {
        for (var d = 0; d < c.length; d++)
            1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
        if (zh) {
            var e = !1;
            J(function() {
                e || Bh(a, b, c)()
            });
            return Ah(function(f) {
                e = !0;
                for (var g = {
                    Gc: 0
                }; g.Gc < f.length; g = {
                    Gc: g.Gc
                },
                g.Gc++)
                    J(function(h) {
                        return function() {
                            return a(f[h.Gc])
                        }
                    }(g))
            }, b, c)
        }
        return y.setInterval(Bh(a, b, c), 1E3)
    }
      , Lh = function(a) {
        zh ? 0 <= a && a < yh.length && yh[a] && (yh[a].disconnect(),
        yh[a] = void 0) : y.clearInterval(a)
    };
    var Mh = /:[0-9]+$/
      , Nh = function(a, b, c, d) {
        for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
            var h = f[g].split("=");
            if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                var k = h.slice(1).join("=");
                if (!c)
                    return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
            }
        }
        return c ? e : void 0
    }
      , Qh = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = Oh(a.protocol) || Oh(y.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : y.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || y.location.hostname).replace(Mh, "").toLowerCase());
        return Ph(a, b, c, d, e)
    }
      , Ph = function(a, b, c, d, e) {
        var f, g = Oh(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = Rh(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(Mh, "").toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || fg("TAGGING", 1);
            f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var k = f.split("/");
            0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
            f = k.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = Nh(f, e, !1));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , Oh = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , Rh = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , Sh = function(a) {
        var b = I.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || fg("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(Mh, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , Th = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = Sh(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var k = "" + f + g + h;
        "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
        return k
    };
    var Uh = {};
    var Wh = function(a, b, c) {
        if (a) {
            var d = a.element
              , e = {
                ab: a.ab,
                tagName: d.tagName,
                type: 1
            };
            b && (e.querySelector = Vh(d));
            c && (e.isVisible = !vh(d));
            return e
        }
    }
      , Zh = function(a) {
        if (0 != a.length) {
            var b;
            b = Xh(a, function(c) {
                return !Yh.test(c.ab)
            });
            b = Xh(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = Xh(b, function(c) {
                return !vh(c.element)
            });
            return b[0]
        }
    }
      , Xh = function(a, b) {
        if (1 >= a.length)
            return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }
      , Vh = function(a) {
        var b;
        if (a === I.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else
                            e = 1
                    }
                    d = Vh(a.parentElement) + ">:nth-child(" + e + ")"
                } else
                    d = "";
                c = d
            }
            b = c
        }
        return b
    }
      , $h = !0
      , ai = !1;
    Uh.Bi = "true";
    var bi = function(a) {
        if ("false" === Uh.Bi || !$h)
            return !1;
        if (ai)
            return !0;
        var b = th("AW-" + a);
        return !!b && !!b.preAutoPii
    }
      , ci = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
      , di = new RegExp(/@(gmail|googlemail)\./i)
      , Yh = new RegExp(/support|noreply/i)
      , ei = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" ")
      , fi = ["BR"]
      , gi = {}
      , hi = function(a) {
        a = a || {
            Tb: !0,
            Ub: !0
        };
        a.Db = a.Db || {
            email: !0,
            phone: !0,
            address: !0
        };
        var b, c = a, d = !!c.Tb + "." + !!c.Ub;
        c && c.sd && c.sd.length && (d += "." + c.sd.join("."));
        c && c.Db && (d += "." + c.Db.email + "." + c.Db.phone + "." + c.Db.address);
        b = d;
        var e = gi[b];
        if (e && 200 > Ra() - e.timestamp)
            return e.result;
        var f;
        var g = []
          , h = I.body;
        if (h) {
            for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                var p = k[n];
                if (!(0 <= ei.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                    for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                        if (!(0 <= fi.indexOf(p.children[r].tagName.toUpperCase()))) {
                            q = !0;
                            break
                        }
                    q || g.push(p)
                }
            }
            f = {
                elements: g,
                status: 1E4 < k.length ? "2" : "1"
            }
        } else
            f = {
                elements: g,
                status: "4"
            };
        var t = f, u = t.status, v = [], x;
        if (a.Db && a.Db.email) {
            for (var z = t.elements, w = [], A = 0; A < z.length; A++) {
                var B = z[A]
                  , C = B.textContent;
                "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
                if (C) {
                    var E = C.match(ci);
                    if (E) {
                        var D = E[0], F;
                        if (y.location) {
                            var Q = Ph(y.location, "host", !0);
                            F = 0 <= D.toLowerCase().indexOf(Q)
                        } else
                            F = !1;
                        F || w.push({
                            element: B,
                            ab: D
                        })
                    }
                }
            }
            var M = a && a.sd;
            if (M && 0 !== M.length) {
                for (var S = [], X = 0; X < w.length; X++) {
                    for (var P = !0, K = 0; K < M.length; K++) {
                        var Y = M[K];
                        if (Y && bg(w[X].element, Y)) {
                            P = !1;
                            break
                        }
                    }
                    P && S.push(w[X])
                }
                v = S
            } else
                v = w;
            x = Zh(v);
            10 < w.length && (u = "3")
        }
        var ba = [];
        !a.oi && x && (v = [x]);
        for (var V = 0; V < v.length; V++)
            ba.push(Wh(v[V], a.Tb, a.Ub));
        var na = {
            elements: ba.slice(0, 10),
            gi: Wh(x, a.Tb, a.Ub),
            status: u
        };
        gi[b] = {
            timestamp: Ra(),
            result: na
        };
        return na
    }
      , ii = function(a) {
        return a.tagName + ":" + a.isVisible + ":" + a.ab.length + ":" + di.test(a.ab)
    };
    var ji = function(a, b, c) {
        if (c) {
            var d = c.selector_type, e = String(c.value), f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), h = 0; h < g.length; h++) {
                    var k = g[h].trim();
                    if (k) {
                        if (0 === k.indexOf("dataLayer."))
                            f = kh(k.substring(10));
                        else {
                            var n = k.split(".");
                            f = y[n.shift()];
                            for (var p = 0; p < n.length; p++)
                                f = f && f[n[p]]
                        }
                        if (void 0 !== f)
                            break
                    }
                }
            } else if ("css_selector" === d && $f) {
                var q = ag(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++)
                        f.push(Ub(q[r]) || Oa(q[r].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            f && (a[b] = f)
        }
    }
      , ki = function(a) {
        if (a) {
            var b = {};
            ji(b, "email", a.email);
            ji(b, "phone_number", a.phone);
            b.address = [];
            for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                var e = {};
                ji(e, "first_name", c[d].first_name);
                ji(e, "last_name", c[d].last_name);
                ji(e, "street", c[d].street);
                ji(e, "city", c[d].city);
                ji(e, "region", c[d].region);
                ji(e, "country", c[d].country);
                ji(e, "postal_code", c[d].postal_code);
                b.address.push(e)
            }
            return b
        }
    }
      , li = function(a) {
        var b = a.remoteConfig[R.g.Mb];
        return b ? "auto_detect" === b.mode || "selectors" === b.mode || "code" === b.mode : !1
    }
      , mi = function(a) {
        if (a)
            switch (a.mode) {
            case "selectors":
                return ki(a.selectors);
            case "auto_detect":
                var b;
                var c = a.auto_detect;
                if (c) {
                    var d = hi({
                        Tb: !1,
                        Ub: !1,
                        sd: c.exclude_element_selectors,
                        Db: {
                            email: !!c.email,
                            phone: !!c.phone,
                            address: !!c.address
                        }
                    }).elements
                      , e = {};
                    if (0 < d.length)
                        for (var f = 0; f < d.length; f++) {
                            var g = d[f];
                            if (1 === g.type) {
                                e.email = g.ab;
                                break
                            }
                        }
                    b = e
                } else
                    b = void 0;
                return b
            }
    };
    var ui = {}
      , vi = function(a, b) {
        if (y._gtmexpgrp && y._gtmexpgrp.hasOwnProperty(a))
            return y._gtmexpgrp[a];
        void 0 === ui[a] && (ui[a] = Math.floor(Math.random() * b));
        return ui[a]
    };
    var xi = {
        Ef: "NG",
        ki: "NG-LA"
    };
    var yi = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var zi = function(a) {
        zi[" "](a);
        return a
    };
    zi[" "] = function() {}
    ;
    var Bi = function() {
        var a = Ai
          , b = "Nf";
        if (a.Nf && a.hasOwnProperty(b))
            return a.Nf;
        var c = new a;
        return a.Nf = c
    };
    var Ai = function() {
        var a = {};
        this.h = function() {
            var b = yi.h
              , c = yi.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.s = function() {
            a[yi.h] = !0
        }
    };
    var Ci = [];
    function Di() {
        var a = Ib("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ei,
            update: Fi,
            addListener: Gi,
            notifyListeners: Hi,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }
    function Ei(a, b, c, d, e, f) {
        var g = Di();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries
              , k = h[a] || {}
              , n = k.region
              , p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === k.update)
                  , r = {
                    region: p,
                    initial: "granted" === b,
                    update: k.update,
                    quiet: q
                };
                if ("" !== d || !1 !== k.initial)
                    h[a] = r;
                q && y.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1,
                    Ii(a),
                    Hi(),
                    fg("TAGGING", 2))
                }, f)
            }
        }
    }
    function Fi(a, b) {
        var c = Di();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Ji(c, a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Ji(c, a);
            f.quiet ? (f.quiet = !1,
            Ii(a)) : g !== d && Ii(a)
        }
    }
    function Gi(a, b) {
        Ci.push({
            Cf: a,
            Oj: b
        })
    }
    function Ii(a) {
        for (var b = 0; b < Ci.length; ++b) {
            var c = Ci[b];
            Ca(c.Cf) && -1 !== c.Cf.indexOf(a) && (c.hi = !0)
        }
    }
    function Hi(a, b) {
        for (var c = 0; c < Ci.length; ++c) {
            var d = Ci[c];
            if (d.hi) {
                d.hi = !1;
                try {
                    d.Oj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    function Ji(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var Ki = function(a) {
        var b = Di();
        b.accessedAny = !0;
        return Ji(b, a)
    }
      , Li = function(a) {
        var b = Di();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }
      , Mi = function(a) {
        var b = Di();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , Ni = function() {
        if (!Bi().h())
            return !1;
        var a = Di();
        a.accessedAny = !0;
        return a.active
    }
      , Oi = function() {
        var a = Di();
        a.accessedDefault = !0;
        return a.usedDefault
    }
      , Pi = function(a, b) {
        Di().addListener(a, b)
    }
      , Qi = function(a, b) {
        Di().notifyListeners(a, b)
    }
      , Ri = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Mi(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Pi(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , Si = function(a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var h = d[g];
                !1 === Ki(h) || e[h] || (f.push(h),
                e[h] = !0)
            }
            return f
        }
        var d = m(b) ? [b] : b
          , e = {};
        c().length !== d.length && Pi(d, function(f) {
            var g = c();
            0 < g.length && (f.Cf = g,
            a(f))
        })
    };
    function Ti() {}
    function Ui() {}
    ;function Vi(a) {
        for (var b = [], c = 0; c < Wi.length; c++) {
            var d = a(Wi[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Wi = [R.g.I, R.g.V]
      , Xi = function(a) {
        var b = a[R.g.We];
        b && ig(40);
        var c = a[R.g.og];
        c && ig(41);
        for (var d = Ca(b) ? b : [b], e = {
            Hc: 0
        }; e.Hc < d.length; e = {
            Hc: e.Hc
        },
        ++e.Hc)
            Ja(a, function(f) {
                return function(g, h) {
                    if (g !== R.g.We && g !== R.g.og) {
                        var k = d[f.Hc]
                          , n = xi.Ef
                          , p = xi.ki;
                        Di().set(g, h, k, n, p, c)
                    }
                }
            }(e))
    }
      , Yi = 0
      , Zi = function(a, b) {
        Ja(a, function(e, f) {
            Di().update(e, f)
        });
        Qi(b.eventId, b.priorityId);
        var c = Ra()
          , d = c - Yi;
        Yi && 0 <= d && 1E3 > d && ig(66);
        Yi = c
    }
      , $i = function(a) {
        var b = Ki(a);
        return void 0 != b ? b : !0
    }
      , aj = function() {
        return "G1" + Vi(Ki)
    }
      , bj = function(a, b) {
        Pi(a, b)
    }
      , cj = function(a, b) {
        Si(a, b)
    }
      , dj = function(a, b) {
        Ri(a, b)
    };
    var ej = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var fj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };
    var gj = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , hj = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    function ij(a) {
        return "null" !== a.origin
    }
    ;var lj = function(a, b, c, d) {
        return jj(d) ? fj(a, String(b || kj()), c) : []
    }
      , oj = function(a, b, c, d, e) {
        if (jj(e)) {
            var f = mj(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = nj(f, function(g) {
                    return g.Ee
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = nj(f, function(g) {
                    return g.Ed
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function pj(a, b, c, d) {
        var e = kj()
          , f = window;
        ij(f) && (f.document.cookie = a);
        var g = kj();
        return e != g || void 0 != c && 0 <= lj(b, g, !1, d).indexOf(c)
    }
    var tj = function(a, b, c, d) {
        function e(x, z, w) {
            if (null == w)
                return delete h[z],
                x;
            h[z] = w;
            return x + "; " + z + "=" + w
        }
        function f(x, z) {
            if (null == z)
                return delete h[z],
                x;
            h[z] = !0;
            return x + "; " + z
        }
        if (!jj(c.ib))
            return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = qj(b),
        g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        g = e(g, "expires", k);
        g = e(g, "max-age", c.vk);
        g = e(g, "samesite", c.Pk);
        c.Rk && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = rj(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = "none" !== p[t] ? p[t] : void 0
                  , v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (x) {
                    q = x;
                    continue
                }
                r = !0;
                if (!sj(u, c.path) && pj(v, a, b, c.ib))
                    return 0
            }
            if (q && !r)
                throw q;
            return 1
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return sj(n, c.path) ? 1 : pj(g, a, b, c.ib) ? 0 : 1
    }
      , uj = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return tj(a, b, c)
    };
    function nj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g]
              , k = b(h);
            k === c ? d.push(h) : void 0 === f || k < f ? (e = [h],
            f = k) : k === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }
    function mj(a, b, c) {
        for (var d = [], e = lj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"),
                d.push({
                    id: g.join("."),
                    Ee: 1 * k[0] || 1,
                    Ed: 1 * k[1] || 1
                }))
            }
        }
        return d
    }
    var qj = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , vj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , wj = /(^|\.)doubleclick\.net$/i
      , sj = function(a, b) {
        return wj.test(window.document.location.hostname) || "/" === b && vj.test(a)
    }
      , kj = function() {
        return ij(window) ? window.document.cookie : ""
    }
      , rj = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        wj.test(e) || vj.test(e) || a.push("none");
        return a
    }
      , jj = function(a) {
        if (!Bi().h() || !a || !Ni())
            return !0;
        if (!Mi(a))
            return !1;
        var b = Ki(a);
        return null == b ? !0 : !!b
    };
    var xj = function(a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ ej(a) & 2147483647) : String(b)
    }
      , yj = function(a) {
        return [xj(a), Math.round(Ra() / 1E3)].join(".")
    }
      , Bj = function(a, b, c, d, e) {
        var f = zj(b);
        return oj(a, f, Aj(c), d, e)
    }
      , Cj = function(a, b, c, d) {
        var e = "" + zj(c)
          , f = Aj(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , zj = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Aj = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    var Dj = function() {
        Sg.dedupe_gclid || (Sg.dedupe_gclid = "" + yj());
        return Sg.dedupe_gclid
    };
    var Ej = function() {
        var a = !1;
        return a
    };
    var Ge = {
        P: "G-2SJ29ZK43S",
        Kc: "81747284"
    }
      , Fj = {
        ei: "G-2SJ29ZK43S",
        fi: "G-2SJ29ZK43S"
    }
      , Gj = function() {
        return Fj.ei ? Fj.ei.split("|") : [Ge.P]
    }
      , Hj = function() {
        if (Fj.fi)
            return Fj.fi.split("|");
        ig(84);
        return []
    }
      , Ij = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {}
    }
      , Kj = function(a) {
        return Jj().container.hasOwnProperty(a)
    };
    function Jj() {
        var a = Sg.tidr;
        a || (a = new Ij,
        Sg.tidr = a);
        return a
    }
    var Lj;
    if (3 === Rg.ve.length)
        Lj = "g";
    else {
        var Mj = "G";
        Mj = "g";
        Lj = Mj
    }
    var Nj = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        GT: "t",
        HA: "h",
        MC: "m",
        GTM: Lj,
        OPT: "o"
    }
      , Oj = function(a) {
        var b = Ge.P.split("-"), c = b[0].toUpperCase(), d = Nj[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === Rg.ve.length) {
            var g = "w";
            g = Ej() ? "s" : "o";
            f = "2" + g
        } else
            f = "";
        return f + d + Rg.ve + e
    };
    function Pj(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var Qj = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    function Rj() {
        return tb("iPhone") && !tb("iPod") && !tb("iPad")
    }
    function Sj() {
        Rj() || tb("iPad") || tb("iPod")
    }
    ;tb("Opera");
    tb("Trident") || tb("MSIE");
    tb("Edge");
    !tb("Gecko") || -1 != sb().toLowerCase().indexOf("webkit") && !tb("Edge") || tb("Trident") || tb("MSIE") || tb("Edge");
    -1 != sb().toLowerCase().indexOf("webkit") && !tb("Edge") && tb("Mobile");
    tb("Macintosh");
    tb("Windows");
    tb("Linux") || tb("CrOS");
    var Tj = la.navigator || null;
    Tj && (Tj.appVersion || "").indexOf("X11");
    tb("Android");
    Rj();
    tb("iPad");
    tb("iPod");
    Sj();
    sb().toLowerCase().indexOf("kaios");
    var Uj = function(a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
            var g = a.charCodeAt(e - 1);
            if (38 == g || 63 == g) {
                var h = a.charCodeAt(e + f);
                if (!h || 61 == h || 38 == h || 35 == h)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , Vj = /#|$/
      , Wj = function(a, b) {
        var c = a.search(Vj)
          , d = Uj(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
      , Xj = /[?&]($|#)/
      , Yj = function(a, b, c) {
        for (var d, e = a.search(Vj), f = 0, g, h = []; 0 <= (g = Uj(a, f, b, e)); )
            h.push(a.substring(f, g)),
            f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.slice(f));
        d = h.join("").replace(Xj, "$1");
        var k, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            0 > r && (r = d.length);
            var t = d.indexOf("?"), u;
            0 > t || t > r ? (t = r,
            u = "") : u = d.substring(t + 1, r);
            q = [d.slice(0, t), u, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            k = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            k = d;
        return k
    };
    function Zj(a) {
        if (!a || !I.head)
            return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        I.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var ak = function() {
        var a = y;
        if (a.top == a)
            return 0;
        var b = a.location.ancestorOrigins;
        if (b)
            return b[b.length - 1] == a.location.origin ? 1 : 2;
        var c;
        var d = a.top;
        try {
            var e;
            if (e = !!d && null != d.location.href)
                b: {
                    try {
                        zi(d.foo);
                        e = !0;
                        break b
                    } catch (f) {}
                    e = !1
                }
            c = e
        } catch (f) {
            c = !1
        }
        return c ? 1 : 2
    };
    var bk = function() {};
    var ck = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , dk = function(a, b, c) {
        this.s = a;
        this.h = null;
        this.J = {};
        this.sa = 0;
        this.U = void 0 === b ? 500 : b;
        this.H = void 0 === c ? !1 : c;
        this.D = null
    };
    ka(dk, bk);
    dk.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.H
        }
          , d = hj(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.U && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.U));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = ck(c),
            c.internalBlockOnErrors = b.H,
            h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            ek(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    dk.prototype.removeEventListener = function(a) {
        a && a.listenerId && ek(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var gk = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var h = c;
        2 === c ? (h = 0,
        2 === g && (h = 1)) : 3 === c && (h = 1,
        1 === g && (h = 0));
        var k;
        if (0 === h)
            if (a.purpose && a.vendor) {
                var n = fk(a.vendor.consents, void 0 === d ? "755" : d);
                k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && fk(a.purpose.consents, b)
            } else
                k = !0;
        else
            k = 1 === h ? a.purpose && a.vendor ? fk(a.purpose.legitimateInterests, b) && fk(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return k
    }
      , fk = function(a, b) {
        return !(!a || !a[b])
    }
      , ek = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.s.__tcfapi) {
            var e = a.s.__tcfapi;
            e(b, 2, c, d)
        } else if (hk(a)) {
            ik(a);
            var f = ++a.sa;
            a.J[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , hk = function(a) {
        if (a.h)
            return a.h;
        var b;
        a: {
            for (var c = a.s, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.h = b;
        return a.h
    }
      , ik = function(a) {
        a.D || (a.D = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.J[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Qj(a.s, a.D))
    };
    var jk = !0;
    jk = !1;
    var kk = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , lk = Pj("", 550)
      , mk = Pj("", 500);
    function nk() {
        var a = Sg.tcf || {};
        return Sg.tcf = a
    }
    var sk = function() {
        var a = nk()
          , b = new dk(y,jk ? 3E3 : -1);
        if (!0 === y.gtag_enable_tcf_support && !a.active && ("function" === typeof y.__tcfapi || "function" === typeof b.s.__tcfapi || null != hk(b))) {
            a.active = !0;
            a.Hd = {};
            ok();
            var c = null;
            jk ? c = y.setTimeout(function() {
                pk(a);
                qk(a);
                c = null
            }, mk) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c),
                    c = null);
                    if (0 !== d.internalErrorState)
                        pk(a),
                        qk(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies)
                            e = rk(),
                            b.removeEventListener(d);
                        else if ("tcloaded" === d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {}, g;
                            for (g in kk)
                                if (kk.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var h = d
                                          , k = !0;
                                        k = void 0 === k ? !1 : k;
                                        var n;
                                        var p = h;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = ck(p)),
                                        n = "error" === p.cmpStatus || 0 !== p.internalErrorState ? !p.internalBlockOnErrors : "loaded" !== p.cmpStatus || "tcloaded" !== p.eventStatus && "useractioncomplete" !== p.eventStatus ? !1 : !0);
                                        f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies && !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : gk(h, "1", 0) : !1
                                    } else
                                        f[g] = gk(d, g, kk[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty",
                        a.Hd = e,
                        qk(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c),
                c = null),
                pk(a),
                qk(a)
            }
        }
    };
    function pk(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        jk && (a.Hd = rk())
    }
    function ok() {
        var a = {}
          , b = (a.ad_storage = "denied",
        a.wait_for_update = lk,
        a);
        Xi(b)
    }
    function rk() {
        var a = {}, b;
        for (b in kk)
            kk.hasOwnProperty(b) && (a[b] = !0);
        return a
    }
    function qk(a) {
        var b = {}
          , c = (b.ad_storage = a.Hd["1"] ? "granted" : "denied",
        b);
        Zi(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: tk()
        })
    }
    var tk = function() {
        var a = nk();
        return a.active ? a.tcString || "" : ""
    }
      , uk = function() {
        var a = nk();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , vk = function(a) {
        if (!kk.hasOwnProperty(String(a)))
            return !0;
        var b = nk();
        return b.active && b.Hd ? !!b.Hd[String(a)] : !0
    };
    function wk(a, b, c) {
        var d, e = Number(null != a.Xb ? a.Xb : void 0);
        0 !== e && (d = new Date((b || Ra()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    }
    ;var xk = ["1"]
      , yk = {}
      , zk = {}
      , Bk = function(a) {
        return yk[Ak(a)]
    }
      , Ek = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Ak(a.prefix);
        if (!yk[c] && !Ck(c, a.path, a.domain) && b) {
            var d = Ak(a.prefix)
              , e = yj();
            if (0 === Dk(d, e, a)) {
                var f = Ib("google_tag_data", {});
                f._gcl_au ? fg("GTM", 57) : f._gcl_au = e
            }
            Ck(c, a.path, a.domain)
        }
    };
    function Dk(a, b, c, d) {
        var e = Cj(b, "1", c.domain, c.path)
          , f = wk(c, d);
        f.ib = "ad_storage";
        return uj(a, e, f)
    }
    function Ck(a, b, c) {
        var d = Bj(a, b, c, xk, "ad_storage");
        if (!d)
            return !1;
        var e = d.split(".");
        5 === e.length ? (yk[a] = e.slice(0, 2).join("."),
        zk[a] = {
            id: e.slice(2, 4).join("."),
            ci: Number(e[4]) || 0
        }) : 3 === e.length ? zk[a] = {
            id: e.slice(0, 2).join("."),
            ci: Number(e[2]) || 0
        } : yk[a] = d;
        return !0
    }
    function Ak(a) {
        return (a || "_gcl") + "_au"
    }
    ;function Fk() {
        for (var a = Gk, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function Hk() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Gk, Ik;
    function Jk(a) {
        function b(k) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = Ik[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        Gk = Gk || Hk();
        Ik = Ik || Fk();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , h = b(64);
            if (64 === h && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    }
    ;var Kk;
    var Ok = function() {
        var a = Lk
          , b = Mk
          , c = Nk()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            Rb(I, "mousedown", d);
            Rb(I, "keyup", d);
            Rb(I, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , Pk = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        Nk().decorators.push(f)
    }
      , Qk = function(a, b, c) {
        for (var d = Nk().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms)
                a: {
                    var k = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (k && (p || n !== I.location.hostname))
                        for (var q = 0; q < k.length; q++)
                            if (k[q]instanceof RegExp) {
                                if (k[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) {
                                h = !0;
                                break a
                            }
                    h = !1
                }
            if (h) {
                var r = g.placement;
                void 0 == r && (r = g.fragment ? 2 : 1);
                r === b && Ua(e, g.callback())
            }
        }
        return e
    };
    function Nk() {
        var a = Ib("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var Rk = /(.*?)\*(.*?)\*(.*)/
      , Sk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , Tk = /^(?:www\.|m\.|amp\.)+/
      , Uk = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function Vk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Xk = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b, f = e.push, g, h = String(d);
                    Gk = Gk || Hk();
                    Ik = Ik || Fk();
                    for (var k = [], n = 0; n < h.length; n += 3) {
                        var p = n + 1 < h.length
                          , q = n + 2 < h.length
                          , r = h.charCodeAt(n)
                          , t = p ? h.charCodeAt(n + 1) : 0
                          , u = q ? h.charCodeAt(n + 2) : 0
                          , v = r >> 2
                          , x = (r & 3) << 4 | t >> 4
                          , z = (t & 15) << 2 | u >> 6
                          , w = u & 63;
                        q || (w = 64,
                        p || (z = 64));
                        k.push(Gk[v], Gk[x], Gk[z], Gk[w])
                    }
                    g = k.join("");
                    f.call(e, g)
                }
            }
        var A = b.join("*");
        return ["1", Wk(A), A].join("*")
    };
    function Wk(a, b) {
        var c = [y.navigator.userAgent, (new Date).getTimezoneOffset(), Gb.userLanguage || Gb.language, Math.floor(Ra() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = Kk)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Kk = d;
        for (var k = 4294967295, n = 0; n < c.length; n++)
            k = k >>> 8 ^ Kk[(k ^ c.charCodeAt(n)) & 255];
        return ((k ^ -1) >>> 0).toString(36)
    }
    function Yk() {
        return function(a) {
            var b = Sh(y.location.href)
              , c = b.search.replace("?", "")
              , d = Nh(c, "_gl", !1, !0) || "";
            a.query = Zk(d) || {};
            var e = Qh(b, "fragment").match(Vk("_gl"));
            a.fragment = Zk(e && e[3] || "") || {}
        }
    }
    function $k(a, b) {
        var c = Vk(a).exec(b)
          , d = b;
        if (c) {
            var e = c[2]
              , f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var al = function(a, b) {
        b || (b = "_gl");
        var c = Uk.exec(a);
        if (!c)
            return "";
        var d = c[1]
          , e = $k(b, (c[2] || "").slice(1))
          , f = $k(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }
      , bl = function(a) {
        var b = Yk()
          , c = Nk();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Ua(d, e.query),
        a && Ua(d, e.fragment));
        return d
    }
      , Zk = function(a) {
        try {
            var b = cl(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = Jk(d[e + 1]);
                    c[f] = g
                }
                fg("TAGGING", 6);
                return c
            }
        } catch (h) {
            fg("TAGGING", 8)
        }
    };
    function cl(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Rk.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3], k;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Wk(h, p)) {
                            k = !0;
                            break a
                        }
                    k = !1
                }
                if (k)
                    return h;
                fg("TAGGING", 7)
            }
        }
    }
    function dl(a, b, c, d) {
        function e(p) {
            p = $k(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Uk.exec(c);
        if (!f)
            return "";
        var g = f[1]
          , h = f[2] || ""
          , k = f[3] || ""
          , n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + k
    }
    function el(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = Qk(b, 1, c)
          , e = Qk(b, 2, c)
          , f = Qk(b, 3, c);
        if (Va(d)) {
            var g = Xk(d);
            c ? fl("_gl", g, a) : gl("_gl", g, a, !1)
        }
        if (!c && Va(e)) {
            var h = Xk(e);
            gl("_gl", h, a, !0)
        }
        for (var k in f)
            if (f.hasOwnProperty(k))
                a: {
                    var n = k
                      , p = f[k]
                      , q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            gl(n, p, q);
                            break a
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            fl(n, p, q);
                            break a
                        }
                    }
                    "string" == typeof q && dl(n, p, q)
                }
    }
    function gl(a, b, c, d) {
        if (c.href) {
            var e = dl(a, b, c.href, void 0 === d ? !1 : d);
            rb.test(e) && (c.href = e)
        }
    }
    function fl(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = I.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = dl(a, b, c.action);
                rb.test(n) && (c.action = n)
            }
        }
    }
    function Lk(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || el(e, e.hostname)
            }
        } catch (g) {}
    }
    function Mk(a) {
        try {
            if (a.action) {
                var b = Qh(Sh(a.action), "host");
                el(a, b)
            }
        } catch (c) {}
    }
    var hl = function(a, b, c, d) {
        Ok();
        Pk(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , il = function(a, b) {
        Ok();
        Pk(a, [Ph(y.location, "host", !0)], b, !0, !0)
    }
      , jl = function() {
        var a = I.location.hostname
          , b = Sk.exec(I.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(Tk, ""), k = e.replace(Tk, ""), n;
        if (!(n = h === k)) {
            var p = "." + k;
            n = h.substring(h.length - p.length, h.length) === p
        }
        return n
    }
      , kl = function(a, b) {
        return !1 === a ? !1 : a || b || jl()
    };
    var ll = {};
    var ml = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                kg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };
    function nl(a, b) {
        var c = ml(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].kg] || (d[c[e].kg] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    na: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].kg].push(g)
            }
        }
        return d
    }
    ;var ol = /^\w+$/
      , pl = /^[\w-]+$/
      , ql = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , rl = function() {
        if (!Bi().h() || !Ni())
            return !0;
        var a = Ki("ad_storage");
        return null == a ? !0 : !!a
    }
      , sl = function(a, b) {
        Mi("ad_storage") ? rl() ? a() : Si(a, "ad_storage") : b ? fg("TAGGING", 3) : Ri(function() {
            sl(a, !0)
        }, ["ad_storage"])
    }
      , ul = function(a) {
        return tl(a).map(function(b) {
            return b.na
        })
    }
      , tl = function(a) {
        var b = [];
        if (!ij(y) || !I.cookie)
            return b;
        var c = lj(a, I.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            Pd: d.Pd
        },
        e++) {
            var f = vl(c[e]);
            if (null != f) {
                var g = f
                  , h = g.version;
                d.Pd = g.na;
                var k = g.timestamp
                  , n = g.labels
                  , p = Ea(b, function(q) {
                    return function(r) {
                        return r.na === q.Pd
                    }
                }(d));
                p ? (p.timestamp = Math.max(p.timestamp, k),
                p.labels = wl(p.labels, n || [])) : b.push({
                    version: h,
                    na: d.Pd,
                    timestamp: k,
                    labels: n
                })
            }
        }
        b.sort(function(q, r) {
            return r.timestamp - q.timestamp
        });
        return xl(b)
    };
    function wl(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function yl(a) {
        return a && "string" == typeof a && a.match(ol) ? a : "_gcl"
    }
    var Rl = function() {
        var a = Sh(y.location.href)
          , b = Qh(a, "query", !1, void 0, "gclid")
          , c = Qh(a, "query", !1, void 0, "gclsrc")
          , d = Qh(a, "query", !1, void 0, "wbraid")
          , e = Qh(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || Nh(f, "gclid", !1);
            c = c || Nh(f, "gclsrc", !1);
            d = d || Nh(f, "wbraid", !1)
        }
        return zl(b, c, e, d)
    }
      , zl = function(a, b, c, d) {
        var e = {}
          , f = function(g, h) {
            e[h] || (e[h] = []);
            e[h].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && pl.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(pl))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , Tl = function(a) {
        var b = Rl();
        sl(function() {
            Sl(b, !1, a)
        })
    };
    function Sl(a, b, c, d, e) {
        function f(x, z) {
            var w = Ul(x, g);
            w && (uj(w, z, h),
            k = !0)
        }
        c = c || {};
        e = e || [];
        var g = yl(c.prefix);
        d = d || Ra();
        var h = wk(c, d, !0);
        h.ib = "ad_storage";
        var k = !1
          , n = Math.round(d / 1E3)
          , p = function(x) {
            var z = ["GCL", n, x];
            0 < e.length && z.push(e.join("."));
            return z.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == ll.enable_gbraid_cookie_write ? 0 : ll.enable_gbraid_cookie_write) && !k && a.gb) {
            var q = a.gb[0]
              , r = Ul("gb", g)
              , t = !1;
            if (!b)
                for (var u = tl(r), v = 0; v < u.length; v++)
                    u[v].na === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var Wl = function(a, b) {
        var c = bl(!0);
        sl(function() {
            for (var d = yl(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== ql[f]) {
                    var g = Ul(f, d)
                      , h = c[g];
                    if (h) {
                        var k = Math.min(Vl(h), Ra()), n;
                        b: {
                            var p = k;
                            if (ij(y))
                                for (var q = lj(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                    if (Vl(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                            n = !1
                        }
                        if (!n) {
                            var t = wk(b, k, !0);
                            t.ib = "ad_storage";
                            uj(g, h, t)
                        }
                    }
                }
            }
            Sl(zl(c.gclid, c.gclsrc), !1, b)
        })
    }
      , Ul = function(a, b) {
        var c = ql[a];
        if (void 0 !== c)
            return b + c
    }
      , Vl = function(a) {
        return 0 !== Xl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function vl(a) {
        var b = Xl(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            na: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function Xl(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !pl.test(a[2]) ? [] : a
    }
    var Yl = function(a, b, c, d, e) {
        if (Ca(b) && ij(y)) {
            var f = yl(e)
              , g = function() {
                for (var h = {}, k = 0; k < a.length; ++k) {
                    var n = Ul(a[k], f);
                    if (n) {
                        var p = lj(n, I.cookie, void 0, "ad_storage");
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            sl(function() {
                hl(g, b, c, d)
            })
        }
    }
      , xl = function(a) {
        return a.filter(function(b) {
            return pl.test(b.na)
        })
    }
      , Zl = function(a, b) {
        if (ij(y)) {
            for (var c = yl(b.prefix), d = {}, e = 0; e < a.length; e++)
                ql[a[e]] && (d[a[e]] = ql[a[e]]);
            sl(function() {
                Ja(d, function(f, g) {
                    var h = lj(c + g, I.cookie, void 0, "ad_storage");
                    h.sort(function(t, u) {
                        return Vl(u) - Vl(t)
                    });
                    if (h.length) {
                        var k = h[0], n = Vl(k), p = 0 !== Xl(k.split(".")).length ? k.split(".").slice(3) : [], q = {}, r;
                        r = 0 !== Xl(k.split(".")).length ? k.split(".")[2] : void 0;
                        q[f] = [r];
                        Sl(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function $l(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var am = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Ni()) {
            var c = Rl();
            if ($l(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                il(function() {
                    return d
                }, 3);
                il(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , bm = function(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!rl())
            return e;
        var f = tl(a);
        if (!f.length)
            return e;
        for (var g = 0; g < f.length; g++)
            -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d)
            return e;
        if (1 !== e[0]) {
            var h = f[0]
              , k = f[0].timestamp
              , n = [h.version, Math.round(k / 1E3), h.na].concat(h.labels || [], [b]).join(".")
              , p = wk(c, k, !0);
            p.ib = "ad_storage";
            uj(a, n, p)
        }
        return e
    };
    function cm(a, b) {
        var c = yl(b)
          , d = Ul(a, c);
        if (!d)
            return 0;
        for (var e = tl(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function dm(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var em = function(a) {
        var b = Math.max(cm("aw", a), dm(rl() ? nl() : {}));
        return Math.max(cm("gb", a), dm(rl() ? nl("_gac_gb", !0) : {})) > b
    };
    var km = /[A-Z]+/
      , lm = /\s/
      , mm = function(a) {
        if (m(a)) {
            a = Oa(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (km.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e] || lm.test(d[e]) && ("AW" !== c || 1 !== e))
                            return;
                    return {
                        id: a,
                        prefix: c,
                        containerId: c + "-" + d[0],
                        O: d
                    }
                }
            }
        }
    }
      , om = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = mm(a[c]);
            d && (b[d.id] = d)
        }
        nm(b);
        var e = [];
        Ja(b, function(f, g) {
            e.push(g)
        });
        return e
    };
    function nm(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.O[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var qm = function(a, b, c, d) {
        return (2 === pm() || d || "http:" != y.location.protocol ? a : b) + c
    }
      , pm = function() {
        var a = Ob(), b;
        if (1 === a)
            a: {
                var c = Xg;
                c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var k = g[h].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
        else
            b = a;
        return b
    };
    var Cm = function(a, b, c) {
        this.la = a;
        this.eventName = b;
        this.B = c;
        this.C = {};
        this.metadata = L(c.eventMetadata || {});
        this.R = !1
    }
      , Dm = function(a, b, c) {
        var d = a.B.getWithConfig(b);
        void 0 !== d ? a.C[b] = d : void 0 !== c && (a.C[b] = c)
    }
      , Em = function(a, b, c) {
        var d = th(a.la);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };
    function Fm(a) {
        return {
            getDestinationId: function() {
                return a.la
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void (a.eventName = b)
            },
            getHitData: function(b) {
                return a.C[b]
            },
            setHitData: function(b, c) {
                return void (a.C[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.C[b] && (a.C[b] = c)
            },
            copyToHitData: function(b, c) {
                Dm(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void (a.metadata[b] = c)
            },
            abort: function() {
                return void (a.R = !0)
            },
            getProcessedEvent: function() {
                return a
            }
        }
    }
    ;var Hm = function(a) {
        var b = Gm[a.la];
        if (!a.R && b)
            for (var c = Fm(a), d = 0; d < b.length; ++d) {
                try {
                    b[d](c)
                } catch (e) {
                    a.R = !0
                }
                if (a.R)
                    break
            }
    }
      , Im = function(a, b) {
        var c = Gm[a];
        c || (c = Gm[a] = []);
        c.push(b)
    }
      , Gm = {};
    var Mm = [];
    Mm[20] = !0;
    Mm[21] = !0;
    Mm[22] = !0;
    Mm[19] = !0;
    Mm[24] = !0;
    Mm[26] = !0;
    function cn() {
        return "attribution-reporting"
    }
    function dn(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    ;var en = !1;
    function fn() {
        if (dn("join-ad-interest-group") && Aa(Gb.joinAdInterestGroup))
            return !0;
        en || (Zj('A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
        en = !0);
        return dn("join-ad-interest-group") && Aa(Gb.joinAdInterestGroup)
    }
    function gn(a, b) {
        var c = void 0;
        try {
            c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ra() - d) {
                fg("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    fg("TAGGING", 10);
                    return
                }
            } catch (e) {}
        Pb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ra()
        }, c)
    }
    ;var hn = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , jn = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , kn = /^\d+\.fls\.doubleclick\.net$/
      , ln = /;gac=([^;?]+)/
      , mn = /;gacgb=([^;?]+)/
      , nn = /;gclaw=([^;?]+)/
      , on = /;gclgb=([^;?]+)/;
    function pn(a, b) {
        if (kn.test(I.location.host)) {
            var c = I.location.href.match(b);
            return c && 2 == c.length && c[1].match(hn) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++)
                f.push(g[h].na);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var qn = function(a, b, c) {
        var d = rl() ? nl("_gac_gb", !0) : {}, e = [], f = !1, g;
        for (g in d) {
            var h = bm("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(k) {
                return 1 === k
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            Rj: f ? e.join(";") : "",
            Qj: pn(d, mn)
        }
    };
    function rn(a, b, c) {
        if (kn.test(I.location.host)) {
            var d = I.location.href.match(c);
            if (d && 2 == d.length && d[1].match(jn))
                return [{
                    na: d[1]
                }]
        } else
            return tl((a || "_gcl") + b);
        return []
    }
    var sn = function(a) {
        return rn(a, "_aw", nn).map(function(b) {
            return b.na
        }).join(".")
    }
      , tn = function(a) {
        return rn(a, "_gb", on).map(function(b) {
            return b.na
        }).join(".")
    }
      , un = function(a, b) {
        var c = bm((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function(d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var vn = function() {
        if (Aa(y.__uspapi)) {
            var a = "";
            try {
                y.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var eo = function(a) {
        var b = !1;
        if (!bo || !co[bo])
            return !1;
        b = a || "C"in co[bo];
        return b
    }, ho = function(a, b) {
        var c;
        if (!bo || !eo(b))
            return "";
        var d = co[bo];
        c = "&al=" + fo.filter(function(e) {
            return void 0 !== d[e]
        }).map(function(e) {
            return e + Math.floor(d[e])
        }).join(".") + (".Z" + go[bo]);
        a && delete co[bo];
        return c
    }, ko = function(a) {}, oo = function(a) {}, po = function() {
        return "&tc=" + ie.filter(function(a) {
            return a
        }).length
    }, so = function() {
        2022 <= qo().length && ro()
    }, to = function(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }, vo = function() {
        uo || (uo = y.setTimeout(ro, 500))
    }, ro = function(a) {
        uo && (y.clearTimeout(uo),
        uo = void 0);
        if (void 0 !== bo && (!wo[bo] || xo || yo || eo(a)))
            if (void 0 === go[bo] && (zo[bo] || Ao.lk() || 0 >= Bo--))
                ig(1),
                zo[bo] = !0;
            else {
                void 0 === go[bo] && Ao.Kk();
                var b = qo(!0, a);
                a ? Xb(b) : Qb(b);
                if (Co || Do && 0 < Eo.length) {
                    var c = b.replace("/a?", "/td?");
                    Qb(c)
                }
                wo[bo] = !0;
                Do = Co = Fo = Go = yo = xo = "";
                Eo = []
            }
    }, qo = function(a, b) {
        var c = bo;
        if (void 0 === c)
            return "";
        var d = gg("GTM")
          , e = gg("TAGGING");
        return [Ho, wo[c] ? "" : "&es=1", Io[c], ko(c), d ? "&u=" + d : "", e ? "&ut=" + e : "", po(), xo, yo, Go, oo(a), Fo, Co, ho(a, b), Do ? "&dl=" + encodeURIComponent(Do) : "", 0 < Eo.length ? "&tdp=" + Eo.join(".") : "", "&z=0"].join("")
    }, Ko = function() {
        Ho = Jo()
    }, Jo = function() {
        return [Lo, "&v=3&t=t", "&pid=" + Fa(), "&rv=" + Rg.ve].join("")
    }, no = ["L", "S", "Y"], jo = ["S", "E"], Mo = {
        sampleRate: "0.005000",
        yi: "",
        xi: Number("5")
    }, No = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="), Oo;
    if (!(Oo = No)) {
        var Po = Math.random()
          , Qo = Mo.sampleRate;
        Oo = Po < Qo
    }
    var Ro = Oo
      , Lo = "https://www.googletagmanager.com/a?id=" + Ge.P + "&cv=1"
      , So = {
        label: Ge.P + " Container",
        children: [{
            label: "Initialization",
            children: []
        }]
    }
      , Ho = Jo()
      , wo = {}
      , xo = ""
      , yo = ""
      , Fo = ""
      , Co = ""
      , Eo = []
      , Do = ""
      , mo = {}
      , lo = !1
      , io = {}
      , To = {}
      , Go = ""
      , bo = void 0
      , Io = {}
      , zo = {}
      , uo = void 0
      , Uo = 5;
    0 < Mo.xi && (Uo = Mo.xi);
    var Ao = function(a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e)
            d.push(0);
        return {
            lk: function() {
                return c < a ? !1 : Ra() - d[c % a] < b
            },
            Kk: function() {
                var f = c++ % a;
                d[f] = Ra()
            }
        }
    }(Uo, 1E3)
      , Bo = 1E3
      , Wo = function(a, b) {
        if (Ro && void 0 !== a && !zo[a] && bo !== a) {
            ro();
            bo = a;
            Fo = xo = "";
            Io[a] = "&e=" + to(b) + "&eid=" + a;
            vo();
        }
    }
      , Xo = function(a, b, c, d) {
        if (Ro && b) {
            var e, f = String(b[Jd.Nb] || "").replace(/_/g, "");
            0 === f.indexOf("cvt") && (f = "cvt");
            e = f;
            var g = c + e;
            if (!zo[a]) {
                a !== bo && (ro(),
                bo = a);
                xo = xo ? xo + "." + g : "&tr=" + g;
                var h = b["function"];
                if (!h)
                    throw Error("Error: No function name given for function call.");
                var k = (ke[h] ? "1" : "2") + e;
                Fo = Fo ? Fo + "." + k : "&ti=" + k;
                vo();
                so()
            }
        }
    };
    var dp = function(a, b, c) {
        if (Ro && void 0 !== a && !zo[a]) {
            a !== bo && (ro(),
            bo = a);
            var d = c + b;
            yo = yo ? yo + "." + d : "&epr=" + d;
            vo();
            so()
        }
    }
      , ep = function(a, b, c) {}
      , fo = ["S", "P", "C", "Z"]
      , fp = {}
      , gp = (fp[1] = 5,
    fp[2] = 5,
    fp[3] = 5,
    fp)
      , co = {}
      , go = {}
      , hp = function(a, b) {
        var c = !1;
        if (!Ro || go[a] || 0 === gp[b])
            return !1;
        --gp[b];
        go[a] = b;
        c = !0;
        return c
    }
      , ip = function(a, b, c) {
        if (!Ro || !go[a])
            return;
        var d = co[a];
        d || (co[a] = d = {});
        d[b] = c;
    }
      , jp = function() {
        if (Ro) {
            y.setInterval(Ko, 864E5);
            Rb(y, "pagehide", function() {
                bo && go[bo] && ro(!0);
                for (var a in co)
                    co.hasOwnProperty(a) && (bo = Number(a),
                    ro(!0));
            });
        }
    };
    var kp = function(a, b, c) {
        var d, e = a.GooglebQhCsO;
        e || (e = {},
        a.GooglebQhCsO = e);
        d = e;
        if (d[b])
            return !1;
        d[b] = [];
        d[b][0] = c;
        return !0
    };
    var lp = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
            b[c++] = e >> 18 | 240,
            b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
            b[c++] = e >> 6 & 63 | 128),
            b[c++] = e & 63 | 128)
        }
        return b
    };
    ub();
    Rj() || tb("iPod");
    tb("iPad");
    !tb("Android") || vb() || ub() || tb("Opera") || tb("Silk");
    vb();
    !tb("Safari") || vb() || tb("Coast") || tb("Opera") || tb("Edge") || tb("Edg/") || tb("OPR") || ub() || tb("Silk") || tb("Android") || Sj();
    var mp = {}
      , np = null
      , op = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!np) {
            np = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], k = 0; 5 > k; k++) {
                var n = g.concat(h[k].split(""));
                mp[k] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === np[q] && (np[q] = p)
                }
            }
        }
        for (var r = mp[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, x = 0; v < b.length - 2; v += 3) {
            var z = b[v]
              , w = b[v + 1]
              , A = b[v + 2]
              , B = r[z >> 2]
              , C = r[(z & 3) << 4 | w >> 4]
              , E = r[(w & 15) << 2 | A >> 6]
              , D = r[A & 63];
            t[x++] = "" + B + C + E + D
        }
        var F = 0
          , Q = u;
        switch (b.length - v) {
        case 2:
            F = b[v + 1],
            Q = r[(F & 15) << 2] || u;
        case 1:
            var M = b[v];
            t[x] = "" + r[M >> 2] + r[(M & 3) << 4 | F >> 4] + Q + u
        }
        return t.join("")
    };
    var pp = function(a, b) {
        var c = y
          , d = Wj(a, "fmt");
        if (b) {
            var e = Wj(a, "random")
              , f = Wj(a, "label") || "";
            if (!e)
                return !1;
            var g = op(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!kp(c, g, b))
                return !1
        }
        d && 4 != d && (a = Yj(a, "rfmt", d));
        var h = Yj(a, "fmt", 4);
        Nb(h, function() {
            c.google_noFurtherRedirects && b && b.call && (c.google_noFurtherRedirects = null,
            b())
        }, void 0, void 0, I.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Fp = !1;
    var Gp = function() {
        this.h = {}
    }
      , Hp = function(a, b, c) {
        null != c && (a.h[b] = c)
    }
      , Ip = function(a) {
        return Object.keys(a.h).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }
      , Kp = function(a, b, c, d, e) {};
    var Mp = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Np = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Op = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Pp = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Qp = function() {
        var a = !1;
        a = !0;
        return a
    }
      , Sp = function(a) {
        var b = kh("gtm.allowlist") || kh("gtm.whitelist");
        b && ig(9);
        Qp() && (b = ["google", "gtagfl", "lcl", "zone"]);
        var c = b && Wa(Na(b), Np)
          , d = kh("gtm.blocklist") || kh("gtm.blacklist");
        d || (d = kh("tagTypeBlacklist")) && ig(3);
        d ? ig(8) : d = [];
        Rp() && (d = Na(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Na(d).indexOf("google") && ig(2);
        var e = d && Wa(Na(d), Op)
          , f = {};
        return function(g) {
            var h = g && g[Jd.Nb];
            if (!h || "string" != typeof h)
                return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h])
                return f[h];
            var k = dh[h] || []
              , n = a(h, k);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(h))
                            if (k && 0 < k.length)
                                for (var q = 0; q < k.length; q++) {
                                    if (0 > c.indexOf(k[q])) {
                                        ig(11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                n = p
            }
            var r = !1;
            if (d) {
                var t = 0 <= e.indexOf(h);
                if (t)
                    r = t;
                else {
                    var u = Ia(e, k || []);
                    u && ig(10);
                    r = u
                }
            }
            var v = !n || r;
            v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ia(e, Pp));
            return f[h] = v
        }
    }
      , Rp = function() {
        return Mp.test(y.location && y.location.hostname)
    };
    var Tp = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , Up = {}
      , Vp = Object.freeze((Up[R.g.Aa] = !0,
    Up))
      , Wp = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics=")
      , Yp = function(a, b, c) {
        if ("config" !== a || 1 < mm(b).O.length)
            return;
        var d, e = Ib("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = L(c.globalConfig);
        L(c.eventModel, f);
        var g = [], h;
        for (h in d) {
            var k = Xp(d[h], f);
            k.length && (Wp && console.log(k),
            g.push(h))
        }
        if (g.length) {
            if (g.length) {
                var n = b + "*" + g.join(".");
                Co = Co ? Co + "!" + n : "&tdc=" + n
            }
            fg("TAGGING", Tp[I.readyState] || 14)
        }
        d[b] = f;
    };
    function Zp(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function Xp(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, r) {
            var t = r[q];
            return void 0 === t ? Vp[q] : t
        }, f;
        for (f in Zp(a, b)) {
            var g = (d ? d + "." : "") + f
              , h = e(f, a)
              , k = e(f, b)
              , n = "object" === lc(h) || "array" === lc(h)
              , p = "object" === lc(k) || "array" === lc(k);
            if (n && p)
                Xp(h, k, c, g);
            else if (n || p || h !== k)
                c[g] = !0
        }
        return Object.keys(c)
    }
    ;var $p = !1
      , aq = 0
      , bq = [];
    function cq(a) {
        if (!$p) {
            var b = I.createEventObject
              , c = "complete" == I.readyState
              , d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                $p = !0;
                for (var e = 0; e < bq.length; e++)
                    J(bq[e])
            }
            bq.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    J(arguments[f]);
                return 0
            }
        }
    }
    function dq() {
        if (!$p && 140 > aq) {
            aq++;
            try {
                I.documentElement.doScroll("left"),
                cq()
            } catch (a) {
                y.setTimeout(dq, 50)
            }
        }
    }
    var eq = function(a) {
        $p ? a() : bq.push(a)
    };
    var fq = function() {
        this.J = 0;
        this.h = {}
    };
    fq.prototype.s = function(a, b, c) {
        var d = ++this.J;
        this.h[a] = this.h[a] || {};
        this.h[a][String(d)] = {
            listener: b,
            jb: c
        };
        return d
    }
    ;
    fq.prototype.D = function(a, b) {
        var c = this.h[a]
          , d = String(b);
        if (!c || !c[d])
            return !1;
        delete c[d];
        return !0
    }
    ;
    fq.prototype.H = function(a, b) {
        var c = [];
        Ja(this.h[a], function(d, e) {
            0 > c.indexOf(e.listener) && (void 0 === e.jb || 0 <= b.indexOf(e.jb)) && c.push(e.listener)
        });
        return c
    }
    ;
    var gq = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Ge.P
        }
    };
    var iq = function(a, b) {
        this.h = !1;
        this.H = [];
        this.J = {
            tags: []
        };
        this.U = !1;
        this.s = this.D = 0;
        hq(this, a, b)
    }
      , jq = function(a, b, c, d) {
        if (Vg.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        nc(d) && (e = L(d, e));
        e.id = c;
        e.status = "timeout";
        return a.J.tags.push(e) - 1
    }
      , kq = function(a, b, c, d) {
        var e = a.J.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , lq = function(a) {
        if (!a.h) {
            for (var b = a.H, c = 0; c < b.length; c++)
                b[c]();
            a.h = !0;
            a.H.length = 0
        }
    }
      , hq = function(a, b, c) {
        void 0 !== b && a.ye(b);
        c && y.setTimeout(function() {
            return lq(a)
        }, Number(c))
    };
    iq.prototype.ye = function(a) {
        var b = this
          , c = Ta(function() {
            return J(function() {
                a(Ge.P, b.J)
            })
        });
        this.h ? c() : this.H.push(c)
    }
    ;
    var mq = function(a) {
        a.D++;
        return Ta(function() {
            a.s++;
            a.U && a.s >= a.D && lq(a)
        })
    }
      , nq = function(a) {
        a.U = !0;
        a.s >= a.D && lq(a)
    };
    var oq = function() {
        function a(d) {
            return !Ba(d) || 0 > d ? 0 : d
        }
        if (!Sg._li && y.performance && y.performance.timing) {
            var b = y.performance.timing.navigationStart
              , c = Ba(lh.get("gtm.start")) ? lh.get("gtm.start") : 0;
            Sg._li = {
                cst: a(c - b),
                cbt: a(bh - b)
            }
        }
    }
      , pq = function(a) {
        y.performance && y.performance.mark(Ge.P + "_" + a + "_start")
    }
      , qq = function(a) {
        if (y.performance) {
            var b = Ge.P + "_" + a + "_start"
              , c = Ge.P + "_" + a + "_duration";
            y.performance.measure(c, b);
            var d = y.performance.getEntriesByName(c)[0];
            y.performance.clearMarks(b);
            y.performance.clearMeasures(c);
            var e = Sg._p || {};
            void 0 === e[a] && (e[a] = d.duration,
            Sg._p = e);
            return d.duration
        }
    }
      , rq = function() {
        if (y.performance && y.performance.now) {
            var a = Sg._p || {};
            a.PAGEVIEW = y.performance.now();
            Sg._p = a
        }
    };
    var sq = {}
      , tq = function() {
        return y.GoogleAnalyticsObject && y[y.GoogleAnalyticsObject]
    }
      , uq = !1;
    function xq() {
        return y.GoogleAnalyticsObject || "ga"
    }
    var yq = function(a) {}
      , zq = function(a, b) {
        return function() {
            var c = tq()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , h = f.get("hitCallback")
                      , k = 0 > g.indexOf("&tid=" + b);
                    k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    k && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", h, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    function Eq(a, b, c, d) {
        var e = ie[a]
          , f = Fq(a, b, c, d);
        if (!f)
            return null;
        var g = qe(e[Jd.Fh], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Eq(h.index, {
                onSuccess: f,
                onFailure: 1 === h.Wh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function Fq(a, b, c, d) {
        function e() {
            if (f[Jd.qj])
                h();
            else {
                var x = re(f, c, []);
                var z = x[Jd.Di];
                if (null != z)
                    for (var w = 0; w < z.length; w++)
                        if (!$i(z[w])) {
                            h();
                            return
                        }
                var A = jq(c.Bb, String(f[Jd.Nb]), Number(f[Jd.Hh]), x[Jd.rj])
                  , B = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var D = Ra() - E;
                        Xo(c.id, ie[a], "5", D);
                        kq(c.Bb, A, "success", D);
                        g()
                    }
                }
                ;
                x.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var D = Ra() - E;
                        Xo(c.id, ie[a], "6", D);
                        kq(c.Bb, A, "failure", D);
                        h()
                    }
                }
                ;
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                Xo(c.id, f, "1");
                var C = function() {
                    var D = Ra() - E;
                    Xo(c.id, f, "7", D);
                    kq(c.Bb, A, "exception", D);
                    B || (B = !0,
                    h())
                };
                var E = Ra();
                try {
                    pe(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = ie[a]
          , g = b.onSuccess
          , h = b.onFailure
          , k = b.terminate;
        if (c.Pf(f))
            return null;
        var n = qe(f[Jd.Ih], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = Eq(p.index, {
                onSuccess: g,
                onFailure: h,
                terminate: k
            }, c, d);
            if (!q)
                return null;
            g = q;
            h = 2 === p.Wh ? k : q
        }
        if (f[Jd.zh] || f[Jd.tj]) {
            var r = f[Jd.zh] ? je : c.Yk
              , t = g
              , u = h;
            if (!r[a]) {
                e = Ta(e);
                var v = Gq(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }
    function Gq(a, b, c) {
        var d = []
          , e = [];
        b[a] = Hq(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Iq;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = Jq;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function Hq(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function Iq(a) {
        a()
    }
    function Jq(a, b) {
        b()
    }
    ;function Kq(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Sh("" + c + b).href
        }
    }
    function Lq(a, b) {
        return Mq() ? Kq(a, b) : void 0
    }
    function Mq() {
        var a = !1;
        return a
    }
    function Nq() {
        return !!Rg.we && "SGTM_TOKEN" !== Rg.we.split("@@").join("")
    }
    ;var Pq = function(a, b, c) {
        if (!Oq() && !Kj(a)) {
            var d = c ? "/gtag/js" : "/gtm.js"
              , e = "?id=" + encodeURIComponent(a) + "&l=" + Rg.ja
              , f = 0 === a.indexOf("GTM-");
            f || (e += "&cx=c");
            var g = Nq();
            g && (e += "&sign=" + Rg.we);
            var h = Lq(b, d + e);
            if (!h) {
                var k = Rg.Lc + d;
                g && Hb && f && (k = Hb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                h = qm("https://", "http://", k + e)
            }
            Jj().container[a] = !0;
            Nb(h)
        }
    }
      , Qq = function(a, b) {
        var c;
        if (c = !Oq())
            c = !Jj().destination.hasOwnProperty(a);
        if (c) {
            var d = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Rg.ja + "&cx=c";
            Nq() && (d += "&sign=" + Rg.we);
            var e = Lq(b, d);
            e || (e = qm("https://", "http://", Rg.Lc + d));
            Jj().destination[a] = !0;
            Nb(e)
        }
    };
    function Oq() {
        if (Ej()) {
            return !0
        }
        return !1
    }
    ;var Sq = function(a, b) {
        return 1 === arguments.length ? Rq("set", a) : Rq("set", a, b)
    }
      , Tq = function(a, b) {
        return 1 === arguments.length ? Rq("config", a) : Rq("config", a, b)
    }
      , Uq = function(a, b, c) {
        c = c || {};
        c[R.g.Lb] = a;
        return Rq("event", b, c)
    };
    function Rq(a) {
        return arguments
    }
    var Vq = function() {
        this.h = [];
        this.s = []
    };
    Vq.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++)
            try {
                this.s[f](e)
            } catch (g) {}
    }
    ;
    Vq.prototype.listen = function(a) {
        this.s.push(a)
    }
    ;
    Vq.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    Vq.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    }
    ;
    var Xq = function(a, b, c) {
        Wq().enqueue(a, b, c)
    }
      , Zq = function() {
        var a = Yq;
        Wq().listen(a)
    };
    function Wq() {
        var a = Sg.mb;
        a || (a = new Vq,
        Sg.mb = a);
        return a
    }
    var gr = function(a) {
        var b = Sg.zones;
        return b ? b.getIsAllowedFn(Gj(), a) : function() {
            return !0
        }
    }
      , hr = function(a) {
        var b = Sg.zones;
        return b ? b.isActive(Gj(), a) : !0
    };
    var kr = function(a, b) {
        for (var c = [], d = 0; d < ie.length; d++)
            if (a[d]) {
                var e = ie[d];
                var f = mq(b.Bb);
                try {
                    var g = Eq(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c
                          , k = h.push
                          , n = d
                          , p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var q = ke[p];
                        k.call(h, {
                            ui: n,
                            ii: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else
                        ir(d, b),
                        f()
                } catch (t) {
                    f()
                }
            }
        c.sort(jr);
        for (var r = 0; r < c.length; r++)
            c[r].execute();
        return 0 < c.length
    };
    var mr = function(a, b) {
        if (!lr)
            return !1;
        var c = a["gtm.triggers"] && String(a["gtm.triggers"])
          , d = lr.H(a.event, c ? String(c).split(",") : []);
        if (!d.length)
            return !1;
        for (var e = 0; e < d.length; ++e) {
            var f = mq(b);
            try {
                d[e](a, f)
            } catch (g) {
                f()
            }
        }
        return !0
    };
    function jr(a, b) {
        var c, d = b.ii, e = a.ii;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.ui
              , h = b.ui;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }
    function ir(a, b) {
        if (!Ro)
            return;
        var c = function(d) {
            var e = b.Pf(ie[d]) ? "3" : "4"
              , f = qe(ie[d][Jd.Fh], b, []);
            f && f.length && c(f[0].index);
            Xo(b.id, ie[d], e);
            var g = qe(ie[d][Jd.Ih], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var nr = !1, lr;
    var or = function() {
        lr || (lr = new fq);
        return lr
    };
    var tr = function(a) {
        var b = Ra()
          , c = a["gtm.uniqueEventId"]
          , d = a["gtm.priorityId"]
          , e = a.event;
        if ("gtm.js" === e) {
            if (nr)
                return !1;
            nr = !0;
        }
        var h, k = !1;
        if (hr(c))
            h = gr(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
                return !1;
            k = !0;
            h = gr(Number.MAX_SAFE_INTEGER)
        }
        Wo(c, e);
        var n = a.eventCallback
          , p = a.eventTimeout
          , q = n;
        var r = {
            id: c,
            priorityId: d,
            name: e,
            Pf: Sp(h),
            Yk: [],
            di: function() {
                ig(6)
            },
            Ph: pr(),
            Qh: qr(c),
            Bb: new iq(q,p)
        }
          , t = Be(r);
        k && (t = rr(t));
        var u = kr(t, r)
          , v = !1;
        v = mr(a, r.Bb);
        nq(r.Bb);
        "gtm.js" !== e && "gtm.sync" !== e || yq(Ge.P);
        return sr(t, u) || v
    };
    function qr(a) {
        return function(b) {
            Ro && (sc(b) || ep(a, "input", b))
        }
    }
    function pr() {
        var a = {};
        a.event = ph("event", 1);
        a.ecommerce = ph("ecommerce", 1);
        a.gtm = ph("gtm");
        a.eventModel = ph("eventModel");
        return a
    }
    function rr(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(ie[c][Jd.Nb]);
                if (Ug[d] || void 0 !== ie[c][Jd.uj] || Mm[26] && (0 === d.indexOf("__ccd") || 0 === d.indexOf("__ogt") || "__set_product_settings" === d))
                    b[c] = !0
            }
        return b
    }
    function sr(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && ie[c] && !Vg[String(ie[c][Jd.Nb])])
                return !0;
        return !1
    }
    var ur = function(a, b) {
        this.eventId = a;
        this.priorityId = b;
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.globalConfig = {};
        this.dataLayerConfig = {};
        this.remoteConfig = {};
        this.eventMetadata = {};
        this.onSuccess = function() {}
        ;
        this.onFailure = function() {}
        ;
        this.setContainerTypeLoaded = function() {}
        ;
        this.getContainerTypeLoaded = function() {}
        ;
        this.isGtmEvent = !1
    }
      , vr = function(a, b) {
        a.eventModel = b;
        return a
    }
      , wr = function(a, b) {
        a.targetConfig = b;
        return a
    }
      , xr = function(a, b) {
        a.containerConfig = b;
        return a
    }
      , yr = function(a, b) {
        a.globalConfig = b;
        return a
    }
      , zr = function(a, b) {
        a.dataLayerConfig = b;
        return a
    }
      , Ar = function(a, b) {
        a.remoteConfig = b;
        return a
    }
      , Br = function(a, b) {
        a.eventMetadata = b || {};
        return a
    }
      , Cr = function(a, b) {
        a.onSuccess = b;
        return a
    }
      , Dr = function(a, b) {
        a.setContainerTypeLoaded = b;
        return a
    }
      , Er = function(a, b) {
        a.getContainerTypeLoaded = b;
        return a
    }
      , Fr = function(a, b) {
        a.onFailure = b;
        return a
    };
    ur.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a])
            return this.eventModel[a];
        if (void 0 !== this.targetConfig[a])
            return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a])
            return this.containerConfig[a];
        Gr(this, this.globalConfig[a], this.dataLayerConfig[a]) && (ig(71),
        ig(79));
        if (void 0 !== this.globalConfig[a])
            return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a])
            return this.remoteConfig[a]
    }
    ;
    ur.prototype.getTopLevelKeys = function() {
        function a(f) {
            for (var g = Object.keys(f), h = 0; h < g.length; ++h)
                b[g[h]] = 1
        }
        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
            var e = c[d];
            if ("event" !== e && "gtm" !== e && "tagTypeBlacklist" !== e && !b.hasOwnProperty(e)) {
                ig(71);
                ig(80);
                break
            }
        }
        return Object.keys(b)
    }
    ;
    ur.prototype.getMergedValues = function(a, b) {
        function c(h) {
            nc(h) && Ja(h, function(k, n) {
                e = !0;
                d[k] = n
            })
        }
        var d = {}
          , e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]),
        c(this.globalConfig[a]),
        c(this.containerConfig[a]),
        c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        var f = e
          , g = d;
        d = {};
        e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]),
        c(this.dataLayerConfig[a]),
        c(this.containerConfig[a]),
        c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        if (e !== f || Gr(this, d, g))
            ig(71),
            ig(81);
        e = f;
        d = g;
        return e ? d : void 0
    }
    ;
    ur.prototype.getKeysFromFirstOfAnyScope = function(a) {
        var b = {}
          , c = !1
          , d = function(g) {
            for (var h = 0; h < a.length; h++)
                void 0 !== g[a[h]] && (b[a[h]] = g[a[h]],
                c = !0);
            return c
        };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
            return b;
        d(this.globalConfig);
        var e = b
          , f = c;
        b = {};
        c = !1;
        d(this.dataLayerConfig);
        Gr(this, b, e) && (ig(71),
        ig(82));
        b = e;
        c = f;
        if (c)
            return b;
        d(this.remoteConfig);
        return b
    }
    ;
    var Gr = function(a, b, c) {
        try {
            if (b === c)
                return !1;
            var d = lc(b);
            if (d !== lc(c) || !(nc(b) && nc(c) || "array" === d))
                return !0;
            if ("array" === d) {
                if (b.length !== c.length)
                    return !0;
                for (var e = 0; e < b.length; e++)
                    if (Gr(a, b[e], c[e]))
                        return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f))
                        return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || Gr(a, b[g], c[g]))
                        return !0
            }
        } catch (h) {
            ig(72)
        }
        return !1
    };
    var Hs = function() {
        var a = !0;
        vk(7) && vk(9) && vk(10) || (a = !1);
        return a
    }
      , Is = function() {
        var a = !0;
        vk(3) && vk(4) || (a = !1);
        return a
    };
    var cu = null;
    function du() {
        return cu = cu || new eu
    }
    var fu = function(a, b, c, d) {
        du().push("event", [b, a], c, d)
    }
      , gu = function(a, b, c) {
        du().push("config", [a], b, c)
    }
      , hu = function(a, b, c, d) {
        du().push("get", [a, b], c, d)
    }
      , iu = function(a) {
        return du().getRemoteConfig(a)
    }
      , ju = function() {
        var a = R.g.fa;
        return du().getGlobalConfigValue && du().getGlobalConfigValue(a)
    }
      , ku = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.remoteConfig = {};
        this.s = {};
        this.D = null;
        this.h = !1
    }
      , lu = function(a, b, c, d, e) {
        this.type = a;
        this.s = b;
        this.W = c || "";
        this.h = d;
        this.messageContext = e
    }
      , eu = function() {
        this.s = {};
        this.D = {};
        this.h = [];
        this.H = {
            AW: !1,
            UA: !1
        }
    }
      , mu = function(a, b) {
        var c = mm(b);
        return a.s[c.containerId] = a.s[c.containerId] || new ku
    }
      , nu = function(a, b, c, d) {
        if (d.W) {
            var e = mu(a, d.W)
              , f = e.D;
            if (f) {
                var g = L(c)
                  , h = L(e.targetConfig[d.W])
                  , k = L(e.containerConfig)
                  , n = L(e.remoteConfig)
                  , p = L(a.D)
                  , q = {};
                try {
                    q = L(hh)
                } catch (v) {
                    ig(72)
                }
                var r = mm(d.W).prefix
                  , t = function(v) {
                    dp(d.messageContext.eventId, r, v);
                    var x = g[R.g.oc];
                    x && J(x)
                }
                  , u = Er(Dr(Fr(Cr(Br(zr(yr(Ar(xr(wr(vr(new ur(d.messageContext.eventId,d.messageContext.priorityId), g), h), k), n), p), q), d.messageContext.eventMetadata), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("2")
                    }
                }), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("3")
                    }
                }), function(v, x) {
                    a.H[v] = x
                }), function(v) {
                    return a.H[v]
                });
                try {
                    dp(d.messageContext.eventId, r, "1"),
                    Yp(d.type, d.W, u);
                    f(d.W, b, d.s, u)
                } catch (v) {
                    dp(d.messageContext.eventId, r, "4");
                }
            }
        }
    };
    l = eu.prototype;
    l.register = function(a, b, c) {
        var d = mu(this, a);
        3 !== d.status && (d.D = b,
        d.status = 3,
        c && (L(d.remoteConfig, c),
        d.remoteConfig = c),
        this.flush())
    }
    ;
    l.notifyContainerLoaded = function() {}
    ;
    l.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!mm(c))
                return;
            a: {
                var e = b[0][R.g.fa] || this.D[R.g.fa]
                  , f = "event" === a ? 2 : 1;
                if (c) {
                    var g = mm(c);
                    if (g && 1 === mu(this, c).status)
                        if (mu(this, c).status = 2,
                        this.push("require", [{}], g.containerId, {}),
                        Ej()) {} else
                            Mm[24] || (2 === f ? Qq(g.containerId, e) : Pq(g.containerId, e, !0))
                }
            }
            mu(this, c).h && (d.deferrable = !1)
        }
        this.h.push(new lu(a,Math.floor(Ra() / 1E3),c,b,d));
        d.deferrable || this.flush()
    }
    ;
    l.insert = function(a, b, c, d) {
        var e = Math.floor(Ra() / 1E3);
        0 < this.h.length ? this.h.splice(1, 0, new lu(a,e,c,b,d)) : this.h.push(new lu(a,e,c,b,d))
    }
    ;
    l.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
            var f = this.h[0];
            if (f.messageContext.deferrable)
                !f.W || mu(this, f.W).h ? (f.messageContext.deferrable = !1,
                this.h.push(f)) : c.push(f),
                this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                case "require":
                    g = mu(this, f.W);
                    if (3 !== g.status && !a) {
                        this.h.push.apply(this.h, c);
                        return
                    }
                    break;
                case "set":
                    Ja(f.h[0], function(r, t) {
                        L(Ya(r, t), b.D)
                    });
                    break;
                case "config":
                    g = mu(this, f.W);
                    e.tb = {};
                    Ja(f.h[0], function(r) {
                        return function(t, u) {
                            L(Ya(t, u), r.tb)
                        }
                    }(e));
                    var h = !!e.tb[R.g.hd];
                    delete e.tb[R.g.hd];
                    var k = mm(f.W)
                      , n = k.containerId === k.id;
                    h || (n ? g.containerConfig = {} : g.targetConfig[f.W] = {});
                    g.h && h || nu(this, R.g.Ea, e.tb, f);
                    g.h = !0;
                    n ? L(e.tb, g.containerConfig) : (L(e.tb, g.targetConfig[f.W]),
                    ig(70));
                    d = !0;
                    break;
                case "event":
                    g = mu(this, f.W);
                    e.Od = {};
                    Ja(f.h[0], function(r) {
                        return function(t, u) {
                            L(Ya(t, u), r.Od)
                        }
                    }(e));
                    nu(this, f.h[1], e.Od, f);
                    break;
                case "get":
                    g = mu(this, f.W);
                    var p = {}
                      , q = (p[R.g.eb] = f.h[0],
                    p[R.g.ob] = f.h[1],
                    p);
                    nu(this, R.g.Na, q, f)
                }
                this.h.shift();
                ou(this, f)
            }
            e = {
                tb: e.tb,
                Od: e.Od
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    }
    ;
    var ou = function(a, b) {
        if ("require" !== b.type)
            if (b.W)
                for (var c = a.getCommandListeners(b.W)[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.s)
                    if (a.s.hasOwnProperty(e)) {
                        var f = a.s[e];
                        if (f && f.s)
                            for (var g = f.s[b.type] || [], h = 0; h < g.length; h++)
                                g[h]()
                    }
    };
    eu.prototype.getRemoteConfig = function(a) {
        return mu(this, a).remoteConfig
    }
    ;
    eu.prototype.getCommandListeners = function(a) {
        return mu(this, a).s
    }
    ;
    eu.prototype.getGlobalConfigValue = function(a) {
        return this.D[a]
    }
    ;
    var Ke;
    var pu = {}
      , qu = {}
      , ru = function(a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++) {
            var d = pu[b[c]] || [];
            pu[b[c]] = d;
            0 > d.indexOf(a) && d.push(a)
        }
    }
      , su = function(a, b) {
        b = String(b).split(",");
        for (var c = 0; c < b.length; c++) {
            var d = qu[b[c]] || [];
            qu[b[c]] = d;
            0 > d.indexOf(a) && d.push(a)
        }
    }
      , tu = function(a) {
        for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
            Td: d.Td,
            Qd: d.Qd
        },
        e++) {
            var f = a[e];
            if (0 <= f.indexOf("-")) {
                if (d.Td = mm(f),
                d.Td) {
                    var g = Hj();
                    Ea(g, function(q) {
                        return function(r) {
                            return q.Td.containerId === r
                        }
                    }(d)) ? b.push(f) : c.push(f)
                }
            } else {
                var h = pu[f] || [];
                d.Qd = {};
                h.forEach(function(q) {
                    return function(r) {
                        return q.Qd[r] = !0
                    }
                }(d));
                for (var k = Gj(), n = 0; n < k.length; n++)
                    if (d.Qd[k[n]]) {
                        b = b.concat(Hj());
                        break
                    }
                var p = qu[f] || [];
                p.length && (b = b.concat(p))
            }
        }
        return {
            uk: b,
            xk: c
        }
    }
      , uu = function(a) {
        Ja(pu, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }
      , vu = function(a) {
        Ja(qu, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var wu = "HA GF G UA AW DC MC".split(" ")
      , xu = !1
      , yu = !1;
    function zu(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: eh()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Au = {
        config: function(a, b) {
            var c = zu(a, b);
            if (!(2 > a.length) && m(a[1])) {
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !nc(a[2]) || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = mm(a[1]);
                if (e) {
                    Wo(c.eventId, "gtag.config");
                    var f = e.id !== e.containerId
                      , g = !1
                      , h = !!d[R.g.hd]
                      , k = !f && -1 !== Gj().indexOf(e.containerId);
                    k && !h && (g = yu,
                    yu = !0);
                    if (!$g || f || !g) {
                        var n = d[R.g.fa] || ju();
                        if (f) {
                            if (!Ea(Hj(), function(x) {
                                return x === e.containerId
                            })) {
                                Qq(e.containerId, n);
                                return
                            }
                        } else if (!k && !Ej()) {
                            Pq(e.containerId, n, !0);
                            return
                        }
                        b.noTargetGroup || (f ? (vu(e.id),
                        su(e.id, d[R.g.je] || "default")) : (uu(e.id),
                        ru(e.id, d[R.g.je] || "default")));
                        delete d[R.g.je];
                        xu || ig(43);
                        var p = [e.id];
                        f || (p = Hj());
                        for (var q = !1, r = 0; r < p.length; r++) {
                            var t = mm(p[r])
                              , u = L(b);
                            if (t && -1 !== wu.indexOf(t.prefix)) {
                                var v = u.eventMetadata || {};
                                v.hasOwnProperty("is_external_event") || (v.is_external_event = !u.fromContainerExecution);
                                u.eventMetadata = v;
                                delete d[R.g.oc];
                                gu(d, t.id, u);
                                q = !0
                            }
                        }
                        q || (nh("gtag.targets." + e.id),
                        nh("gtag.targets." + e.id, L(d)))
                    }
                }
            }
        },
        consent: function(a, b) {
            if (3 === a.length) {
                ig(39);
                var c = zu(a, b)
                  , d = a[1];
                "default" === d ? Xi(a[2]) : "update" === d && Zi(a[2], c)
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(2 > a.length) && m(c)) {
                var d;
                if (2 < a.length) {
                    if (!nc(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , g = (f.event = c,
                f);
                e && (g.eventModel = L(e),
                e[R.g.oc] && (g.eventCallback = e[R.g.oc]),
                e[R.g.ee] && (g.eventTimeout = e[R.g.ee]));
                var h = zu(a, b)
                  , k = h.eventId
                  , n = h.priorityId;
                g["gtm.uniqueEventId"] = k;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c)
                    return g.eventModel = g.eventModel || {},
                    g;
                var p;
                var q = d
                  , r = q && q[R.g.Lb];
                void 0 === r && (r = kh(R.g.Lb, 2),
                void 0 === r && (r = "default"));
                if (m(r) || Ca(r)) {
                    var t = r.toString().replace(/\s+/g, "").split(",")
                      , u = tu(t)
                      , v = u.uk
                      , x = u.xk;
                    if (x.length)
                        for (var z = q && q[R.g.fa] || ju(), w = 0; w < x.length; w++) {
                            var A = mm(x[w]);
                            A && Qq(A.containerId, z)
                        }
                    p = om(v)
                } else
                    p = void 0;
                var B = p;
                if (B) {
                    Wo(k, c);
                    for (var C = [], E = 0; E < B.length; E++) {
                        var D = B[E]
                          , F = L(b);
                        if (-1 !== wu.indexOf(D.prefix)) {
                            var Q = L(d)
                              , M = F.eventMetadata || {};
                            M.hasOwnProperty("is_external_event") || (M.is_external_event = !F.fromContainerExecution);
                            F.eventMetadata = M;
                            delete Q[R.g.oc];
                            fu(c, Q, D.id, F)
                        }
                        C.push(D.id)
                    }
                    g.eventModel = g.eventModel || {};
                    0 < B.length ? g.eventModel[R.g.Lb] = C.join() : delete g.eventModel[R.g.Lb];
                    xu || ig(43);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        },
        get: function(a, b) {
            ig(53);
            if (4 === a.length && m(a[1]) && m(a[2]) && Aa(a[3])) {
                var c = mm(a[1])
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    xu || ig(43);
                    var f = ju();
                    if (!Ea(Hj(), function(h) {
                        return c.containerId === h
                    }))
                        Qq(c.containerId, f);
                    else if (-1 !== wu.indexOf(c.prefix)) {
                        zu(a, b);
                        var g = {};
                        Ti(L((g[R.g.eb] = d,
                        g[R.g.ob] = e,
                        g)));
                        hu(d, function(h) {
                            J(function() {
                                return e(h)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (2 == a.length && a[1].getTime) {
                xu = !0;
                var c = zu(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function(a) {
            if (3 === a.length && m(a[1]) && Aa(a[2])) {
                var b = a[1]
                  , c = a[2]
                  , d = Ke.s;
                d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                if (ig(74),
                "all" === a[1]) {
                    ig(75);
                    var e = !1;
                    try {
                        e = a[2](Ge.P, "unknown", {})
                    } catch (f) {}
                    e || ig(76)
                }
            } else {
                ig(73);
            }
        },
        set: function(a, b) {
            var c;
            2 == a.length && nc(a[1]) ? c = L(a[1]) : 3 == a.length && m(a[1]) && (c = {},
            nc(a[2]) || Ca(a[2]) ? c[a[1]] = L(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = zu(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                L(c);
                var g = L(c);
                du().push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , Bu = {
        policy: !0
    };
    var Cu = function(a) {
        var b = y[Rg.ja].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , Du = function(a) {
        var b = y[Rg.ja]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var Eu = !1
      , Fu = [];
    function Gu() {
        if (!Eu) {
            Eu = !0;
            for (var a = 0; a < Fu.length; a++)
                J(Fu[a])
        }
    }
    var Hu = function(a) {
        Eu ? J(a) : Fu.push(a)
    };
    var Yu = function(a) {
        if (Xu(a))
            return a;
        this.cb = a
    };
    Yu.prototype.getUntrustedMessageValue = function() {
        return this.cb
    }
    ;
    var Xu = function(a) {
        return !a || "object" !== lc(a) || nc(a) ? !1 : "getUntrustedMessageValue"in a
    };
    Yu.prototype.getUntrustedMessageValue = Yu.prototype.getUntrustedMessageValue;
    var Zu = 0
      , $u = {}
      , av = []
      , bv = []
      , cv = !1
      , dv = !1;
    function ev(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var fv = function(a) {
        return y[Rg.ja].push(a)
    }
      , gv = function(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return fv(a)
    }
      , hv = function(a, b) {
        var c = Sg[Rg.ja]
          , d = c ? c.subscribers : 1
          , e = 0
          , f = !1
          , g = void 0;
        b && (g = y.setTimeout(function() {
            f || (f = !0,
            a());
            g = void 0
        }, b));
        return function() {
            ++e === d && (g && (y.clearTimeout(g),
            g = void 0),
            f || (a(),
            f = !0))
        }
    };
    function iv(a, b) {
        var c = a._clear || b.overwriteModelFields;
        Ja(a, function(e, f) {
            "_clear" !== e && (c && nh(e),
            nh(e, f))
        });
        ah || (ah = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        "number" !== typeof d && (d = eh(),
        a["gtm.uniqueEventId"] = d,
        nh("gtm.uniqueEventId", d));
        return tr(a)
    }
    function jv(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Ka(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
                return !0
        }
        return !1
    }
    function kv() {
        var a;
        if (bv.length)
            a = bv.shift();
        else if (av.length)
            a = av.shift();
        else
            return;
        var b;
        var c = a;
        if (cv || !jv(c.message))
            b = c;
        else {
            cv = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = eh());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , g = {}
              , h = {
                message: (g.event = "gtm.init",
                g["gtm.uniqueEventId"] = d - 1,
                g),
                messageContext: {
                    eventId: d - 1
                }
            };
            av.unshift(h, c);
            b = f
        }
        return b
    }
    function lv() {
        for (var a = !1, b; !dv && (b = kv()); ) {
            dv = !0;
            delete hh.eventModel;
            jh();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (null == d)
                dv = !1;
            else {
                e.fromContainerExecution && oh();
                try {
                    if (Aa(d))
                        try {
                            d.call(lh)
                        } catch (v) {}
                    else if (Ca(d)) {
                        var f = d;
                        if (m(f[0])) {
                            var g = f[0].split(".")
                              , h = g.pop()
                              , k = f.slice(1)
                              , n = kh(g.join("."), 2);
                            if (null != n)
                                try {
                                    n[h].apply(n, k)
                                } catch (v) {}
                        }
                    } else {
                        var p = void 0;
                        if (Ka(d))
                            a: {
                                if (d.length && m(d[0])) {
                                    var q = Au[d[0]];
                                    if (q && (!e.fromContainerExecution || !Bu[d[0]])) {
                                        p = q(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                        else
                            p = d;
                        p && (a = iv(p, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && jh(!0);
                    var r = d["gtm.uniqueEventId"];
                    if ("number" === typeof r) {
                        for (var t = $u[String(r)] || [], u = 0; u < t.length; u++)
                            bv.push(mv(t[u]));
                        t.length && bv.sort(ev);
                        delete $u[String(r)];
                        Zu = r
                    }
                    dv = !1
                }
            }
        }
        return !a
    }
    function nv() {
        var b = lv();
        try {
            Cu(Ge.P)
        } catch (c) {}
        return b
    }
    function Yq(a) {
        if (Zu < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            $u[b] = $u[b] || [];
            $u[b].push(a)
        } else
            bv.push(mv(a)),
            bv.sort(ev),
            J(function() {
                dv || lv()
            })
    }
    function mv(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var pv = function() {
        function a(f) {
            var g = {};
            if (Xu(f)) {
                var h = f;
                f = Xu(h) ? h.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = Ib(Rg.ja, [])
          , c = Sg[Rg.ja] = Sg[Rg.ja] || {};
        !0 === c.pruned && ig(83);
        $u = Wq().get();
        Zq();
        eq(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom",
                f))
            }
        });
        Hu(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load",
                f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (0 < Sg.SANDBOXED_JS_SEMAPHORE) {
                f = [];
                for (var g = 0; g < arguments.length; g++)
                    f[g] = new Yu(arguments[g])
            } else
                f = [].slice.call(arguments, 0);
            var h = f.map(function(q) {
                return a(q)
            });
            av.push.apply(av, h);
            var k = d.apply(b, f)
              , n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (ig(4),
                c.pruned = !0; this.length > n; )
                    this.shift();
            var p = "boolean" !== typeof k || k;
            return lv() && p
        }
        ;
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        av.push.apply(av, e);
        if (ov()) {
            J(nv)
        }
    }
      , ov = function() {
        var a = !0;
        return a
    };
    function qv(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Ra();
        return b < c + 3E5 && b > c - 9E5
    }
    ;var rv = {};
    rv.qe = new String("undefined");
    var uv = function(a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": Yb(a, "className"),
            "gtm.elementId": a["for"] || Tb(a, "id") || "",
            "gtm.elementTarget": a.formTarget || Yb(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Yb(a, "href") || a.src || a.code || a.codebase || "";
        return d
    }
      , vv = function(a) {
        Sg.hasOwnProperty("autoEventsSettings") || (Sg.autoEventsSettings = {});
        var b = Sg.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }
      , wv = function(a, b, c) {
        vv(a)[b] = c
    }
      , xv = function(a, b, c, d) {
        var e = vv(a)
          , f = Sa(e, b, d);
        e[b] = c(f)
    }
      , yv = function(a, b, c) {
        var d = vv(a);
        return Sa(d, b, c)
    }
      , zv = function(a) {
        return "string" === typeof a ? a : String(eh())
    };
    var Fv = !!y.MutationObserver
      , Gv = void 0
      , Hv = function(a) {
        if (!Gv) {
            var b = function() {
                var c = I.body;
                if (c)
                    if (Fv)
                        (new MutationObserver(function() {
                            for (var e = 0; e < Gv.length; e++)
                                J(Gv[e])
                        }
                        )).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                    else {
                        var d = !1;
                        Rb(c, "DOMNodeInserted", function() {
                            d || (d = !0,
                            J(function() {
                                d = !1;
                                for (var e = 0; e < Gv.length; e++)
                                    J(Gv[e])
                            }))
                        })
                    }
            };
            Gv = [];
            I.body ? b() : J(b)
        }
        Gv.push(a)
    };
    var Sv = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Ra() - e) * g.playbackRate / 1E3 : 0;
            e = Ra()
        }
        var e = 0
          , f = 0;
        return {
            createEvent: function(g, h, k) {
                var n = a()
                  , p = n.If
                  , q = void 0 !== k ? Math.round(k) : void 0 !== h ? Math.round(n.If * h) : Math.round(n.Uh)
                  , r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100)
                  , t = I.hidden ? !1 : .5 <= xh(c);
                d();
                var u = void 0;
                void 0 !== b && (u = [b]);
                var v = uv(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] = Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = t;
                return v
            },
            ni: function() {
                e = Ra()
            },
            Bc: function() {
                d()
            }
        }
    };
    var Tv = y.clearTimeout
      , Uv = y.setTimeout
      , T = function(a, b, c, d) {
        if (Ej()) {
            b && J(b)
        } else
            return Nb(a, b, c, d)
    }
      , Vv = function() {
        return new Date
    }
      , Wv = function() {
        return y.location.href
    }
      , Xv = function(a) {
        return Qh(Sh(a), "fragment")
    }
      , Yv = function(a) {
        return Rh(Sh(a))
    }
      , Zv = function(a, b) {
        return kh(a, b || 2)
    }
      , $v = function(a, b, c) {
        return b ? gv(a, b, c) : fv(a)
    }
      , aw = function(a, b) {
        y[a] = b
    }
      , U = function(a, b, c) {
        b && (void 0 === y[a] || c && !y[a]) && (y[a] = b);
        return y[a]
    }
      , bw = function(a, b, c) {
        return lj(a, b, void 0 === c ? !0 : !!c)
    }
      , cw = function(a, b, c) {
        return 0 === uj(a, b, c)
    }
      , dw = function(a, b) {
        if (Ej()) {
            b && J(b)
        } else
            Pb(a, b)
    }
      , ew = function(a) {
        return !!yv(a, "init", !1)
    }
      , fw = function(a) {
        wv(a, "init", !0)
    }
      , gw = function(a, b, c) {
        Ro && (sc(a) || ep(c, b, a))
    };
    var Ew = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function Fw(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Gw = new Ha;
    function Hw(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = Gw.get(e);
            f || (f = new RegExp(b,d),
            Gw.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function Iw(a, b) {
        function c(g) {
            var h = Sh(g)
              , k = Qh(h, "protocol")
              , n = Qh(h, "host", !0)
              , p = Qh(h, "port")
              , q = Qh(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p)
                k = "web",
                p = "default";
            return [k, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function Jw(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }
    function Kw(a, b) {
        return String(a) === String(b)
    }
    function Lw(a, b) {
        return Number(a) >= Number(b)
    }
    function Mw(a, b) {
        return Number(a) <= Number(b)
    }
    function Nw(a, b) {
        return Number(a) > Number(b)
    }
    function Ow(a, b) {
        return Number(a) < Number(b)
    }
    function Pw(a, b) {
        return 0 === String(a).indexOf(String(b))
    }
    function Qw(a) {
        return Rw(a) ? 1 : 0
    }
    function Rw(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = L(a, {});
                L({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Qw(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return Jw(b, c);
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < Ew.length; g++) {
                            var h = Ew[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (k) {}
                f = !1
            }
            return f;
        case "_ew":
            return Fw(b, c);
        case "_eq":
            return Kw(b, c);
        case "_ge":
            return Lw(b, c);
        case "_gt":
            return Nw(b, c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Mw(b, c);
        case "_lt":
            return Ow(b, c);
        case "_re":
            return Hw(b, c, a.ignore_case);
        case "_sw":
            return Pw(b, c);
        case "_um":
            return Iw(b, c)
        }
        return !1
    }
    ;function Sw(a, b) {
        var c = this;
    }
    Sw.N = "addConsentListener";
    var Tw;
    var Uw = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (Tw)
                try {
                    a[b]()
                } catch (c) {
                    ig(77)
                }
            else
                a[b]()
    };
    function Vw(a, b, c) {
        var d = this, e;
        N(H(this), ["eventName:!string", "callback:!Fn", "triggerId:?string"], arguments),
        Uw([function() {
            return O(d, "listen_data_layer", a)
        }
        ]),
        e = or().s(a, qc(b), c);
        return e
    }
    Vw.M = "internal.addDataLayerEventListener";
    function Ww(a, b, c) {}
    Ww.N = "addDocumentEventListener";
    function Xw(a, b, c, d) {}
    Xw.N = "addElementEventListener";
    function Yw(a) {}
    Yw.N = "addEventCallback";
    function bx(a) {}
    bx.M = "internal.addFormAbandonmentListener";
    var cx = {}
      , dx = []
      , ex = {}
      , fx = 0
      , gx = 0;
    function nx(a, b) {}
    nx.M = "internal.addFormInteractionListener";
    function ux(a, b) {}
    ux.M = "internal.addFormSubmitListener";
    function zx(a) {}
    zx.M = "internal.addGaSendListener";
    var Ax = {}
      , Bx = [];
    var Ix = function(a, b) {};
    Ix.M = "internal.addHistoryChangeListener";
    function Jx(a, b, c) {}
    Jx.N = "addWindowEventListener";
    function Kx(a, b) {
        return !0
    }
    Kx.N = "aliasInWindow";
    function Lx(a, b, c) {}
    Lx.M = "internal.appendRemoteConfigParameter";
    function Mx() {
        var a = 2;
        return a
    }
    ;function Nx(a, b) {
        var c;
        return c
    }
    Nx.N = "callInWindow";
    function Ox(a) {}
    Ox.N = "callLater";
    function Px(a) {}
    Px.M = "callOnDomReady";
    function Qx(a) {}
    Qx.M = "callOnWindowLoad";
    function Rx(a) {
        var b;
        return b
    }
    Rx.M = "internal.computeGtmParameter";
    function Sx(a, b) {
        var c;
        var d = oc(c, this.h, Mx());
        void 0 === d && void 0 !== c && ig(45);
        return d
    }
    Sx.N = "copyFromDataLayer";
    function Tx(a) {
        var b;
        return b
    }
    Tx.N = "copyFromWindow";
    function Ux(a, b) {
        var c;
        return c
    }
    Ux.M = "internal.copyPreHit";
    function Vx(a, b) {
        var c = null
          , d = Mx();
        return oc(c, this.h, d)
    }
    Vx.N = "createArgumentsQueue";
    function Wx(a) {
        var b;
        return oc(b, this.h, Mx())
    }
    Wx.N = "createQueue";
    var Xx = {}
      , Yx = []
      , Zx = {}
      , $x = 0
      , ay = 0;
    function gy(a, b) {
        var c = this;
        return b
    }
    gy.M = "internal.enableAutoEventOnFormInteraction";
    function ly(a, b) {
        var c = this;
        return b
    }
    ly.M = "internal.enableAutoEventOnFormSubmit";
    function qy() {
        var a = this;
    }
    qy.M = "internal.enableAutoEventOnGaSend";
    var ry = {}
      , sy = [];
    var uy = function(a, b) {
        var c = "" + b;
        if (ry[c])
            ry[c].push(a);
        else {
            var d = [a];
            ry[c] = d;
            var e = ty()
              , f = -1;
            sy.push(function(g) {
                0 <= f && y.clearTimeout(f);
                b ? f = y.setTimeout(function() {
                    e(g, d);
                    f = -1
                }, b) : e(g, d)
            })
        }
    }
      , ty = function() {
        var a = y.location.href
          , b = {
            source: null,
            state: y.history.state || null,
            url: Rh(Sh(a)),
            T: Qh(Sh(a), "fragment")
        };
        return function(c, d) {
            var e = b
              , f = {};
            f[e.source] = !0;
            f[c.source] = !0;
            if (!f.popstate || !f.hashchange || e.T != c.T) {
                var g = {}
                  , h = (g.event = "gtm.historyChange-v2",
                g["gtm.historyChangeSource"] = c.source,
                g["gtm.oldUrlFragment"] = b.T,
                g["gtm.newUrlFragment"] = c.T,
                g["gtm.oldHistoryState"] = b.state,
                g["gtm.newHistoryState"] = c.state,
                g["gtm.oldUrl"] = b.url,
                g["gtm.newUrl"] = c.url,
                g["gtm.triggers"] = d.join(","),
                g);
                b = c;
                fv(h)
            }
        }
    }
      , vy = function(a, b) {
        var c = y.history
          , d = c[a];
        if (Aa(d))
            try {
                c[a] = function(e, f, g) {
                    d.apply(c, [].slice.call(arguments, 0));
                    var h = y.location.href;
                    b({
                        source: a,
                        state: e,
                        url: Rh(Sh(h)),
                        T: Qh(Sh(h), "fragment")
                    })
                }
            } catch (e) {}
    }
      , xy = function(a) {
        y.addEventListener("popstate", function(b) {
            var c = wy(b);
            a({
                source: "popstate",
                state: b.state,
                url: Rh(Sh(c)),
                T: Qh(Sh(c), "fragment")
            })
        })
    }
      , yy = function(a) {
        y.addEventListener("hashchange", function(b) {
            var c = wy(b);
            a({
                source: "hashchange",
                state: null,
                url: Rh(Sh(c)),
                T: Qh(Sh(c), "fragment")
            })
        })
    }
      , wy = function(a) {
        return a.target && a.target.location && a.target.location.href ? a.target.location.href : y.location.href
    };
    function zy(a, b) {
        var c = this;
        N(H(this), ["options:?DustMap", "triggerId:?*"], arguments);
        Uw([function() {
            return O(c, "process_dom_events", "window", "popstate")
        }
        , function() {
            return O(c, "process_dom_events", "window", "pushstate")
        }
        ]);
        b = zv(b);
        var d = Number(a && a.get("interval"));
        0 < d && isFinite(d) || (d = 0);
        if (yv("ehl", "init", !1)) {
            var e = yv("ehl", "reg");
            e && e(b, d)
        } else {
            var f = function(g) {
                for (var h = 0; h < sy.length; h++)
                    sy[h](g)
            };
            yy(f);
            xy(f);
            vy("pushState", f);
            vy("replaceState", f);
            uy(b, d);
            wv("ehl", "reg", uy);
            wv("ehl", "init", !0)
        }
        return b
    }
    zy.M = "internal.enableAutoEventOnHistoryChange";
    var Ay = function(a, b) {
        if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
            return !1;
        var c = Yb(b, "href")
          , d = c.indexOf("#")
          , e = Yb(b, "target");
        if (e && "_self" !== e && "_parent" !== e && "_top" !== e || 0 === d)
            return !1;
        if (0 < d) {
            var f = Rh(Sh(c))
              , g = Rh(Sh(y.location.href));
            return f !== g
        }
        return !0
    }
      , By = function(a, b) {
        for (var c = Qh(Sh((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || Yb(b, "href") || b.src || b.code || b.codebase || ""), "host"), d = 0; d < a.length; d++)
            try {
                if ((new RegExp(a[d])).test(c))
                    return !1
            } catch (e) {}
        return !0
    }
      , Cy = function() {
        var a = 0
          , b = function(c) {
            var d = c.target;
            if (d && 3 !== c.which && !(c.Qf || c.timeStamp && c.timeStamp === a)) {
                a = c.timeStamp;
                d = Wb(d, ["a", "area"], 100);
                if (!d)
                    return c.returnValue;
                var e = c.defaultPrevented || !1 === c.returnValue, f = yv("aelc", e ? "nv.mwt" : "mwt", 0), g;
                g = e ? yv("aelc", "nv.ids", []) : yv("aelc", "ids", []);
                for (var h = [], k = 0; k < g.length; k++) {
                    var n = g[k]
                      , p = yv("aelc", "aff.map", {})[n];
                    p && !By(p, d) || h.push(n)
                }
                if (h.length) {
                    var q = Ay(c, d)
                      , r = uv(d, "gtm.linkClick", h);
                    r["gtm.elementText"] = Ub(d);
                    r["gtm.willOpenInNewWindow"] = !q;
                    if (q && !e && f && d.href) {
                        var t = !!Ea(String(Yb(d, "rel") || "").split(" "), function(z) {
                            return "noreferrer" === z.toLowerCase()
                        });
                        t && ig(36);
                        var u = y[(Yb(d, "target") || "_self").substring(1)]
                          , v = !0
                          , x = hv(function() {
                            var z;
                            if (z = v && u) {
                                var w;
                                a: if (t) {
                                    var A;
                                    try {
                                        A = new MouseEvent(c.type,{
                                            bubbles: !0
                                        })
                                    } catch (B) {
                                        if (!I.createEvent) {
                                            w = !1;
                                            break a
                                        }
                                        A = I.createEvent("MouseEvents");
                                        A.initEvent(c.type, !0, !0)
                                    }
                                    A.Qf = !0;
                                    c.target.dispatchEvent(A);
                                    w = !0
                                } else
                                    w = !1;
                                z = !w
                            }
                            z && (u.location.href = Yb(d, "href"))
                        }, f);
                        if (gv(r, x, f))
                            v = !1;
                        else
                            return c.preventDefault && c.preventDefault(),
                            c.returnValue = !1
                    } else
                        gv(r, function() {}, f || 2E3);
                    return !0
                }
            }
        };
        Rb(I, "click", b, !1);
        Rb(I, "auxclick", b, !1)
    };
    function Dy(a, b) {
        var c = this;
        N(H(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
        Uw([function() {
            return O(c, "process_dom_events", "document", "click")
        }
        , function() {
            return O(c, "process_dom_events", "document", "auxclick")
        }
        ]);
        var d = qc(a)
          , e = d && !!d.waitForTags
          , f = d && !!d.checkValidation
          , g = d ? d.affiliateDomains : void 0;
        b = zv(b);
        if (e) {
            var h = Number(d.waitForTagsTimeout);
            0 < h && isFinite(h) || (h = 2E3);
            var k = function(p) {
                return Math.max(h, p)
            };
            xv("aelc", "mwt", k, 0);
            f || xv("aelc", "nv.mwt", k, 0)
        }
        var n = function(p) {
            p.push(b);
            return p
        };
        xv("aelc", "ids", n, []);
        f || xv("aelc", "nv.ids", n, []);
        g && xv("aelc", "aff.map", function(p) {
            p[b] = g;
            return p
        }, {});
        yv("aelc", "init", !1) || (Cy(),
        wv("aelc", "init", !0));
        return b
    }
    Dy.M = "internal.enableAutoEventOnLinkClick";
    var Ey, Fy;
    var Gy = function(a) {
        return yv("sdl", a, {})
    }
      , Hy = function(a, b, c) {
        b && (Array.isArray(a) || (a = [a]),
        xv("sdl", c, function(d) {
            for (var e = 0; e < a.length; e++) {
                var f = String(a[e]);
                d.hasOwnProperty(f) || (d[f] = []);
                d[f].push(b)
            }
            return d
        }, {}))
    }
      , Ky = function() {
        var a = 250
          , b = !1;
        I.scrollingElement && I.documentElement && y.addEventListener && (a = 50,
        b = !0);
        var c = 0
          , d = !1
          , e = function() {
            d ? c = y.setTimeout(e, a) : (c = 0,
            Iy(),
            yv("sdl", "init", !1) && !Jy() && (Sb(y, "scroll", f),
            Sb(y, "resize", f),
            wv("sdl", "init", !1)));
            d = !1
        }
          , f = function() {
            b && Ey();
            c ? d = !0 : (c = y.setTimeout(e, a),
            wv("sdl", "pending", !0))
        };
        return f
    }
      , Iy = function() {
        var a = Ey()
          , b = a.Gf
          , c = a.Hf
          , d = b / Fy.scrollWidth * 100
          , e = c / Fy.scrollHeight * 100;
        Ly(b, "horiz.pix", "PIXELS", "horizontal");
        Ly(d, "horiz.pct", "PERCENT", "horizontal");
        Ly(c, "vert.pix", "PIXELS", "vertical");
        Ly(e, "vert.pct", "PERCENT", "vertical");
        wv("sdl", "pending", !1)
    }
      , Ly = function(a, b, c, d) {
        var e = Gy(b), f = {}, g;
        for (g in e) {
            f.bc = g;
            if (e.hasOwnProperty(f.bc)) {
                var h = Number(f.bc);
                if (!(a < h)) {
                    var k = {};
                    fv((k.event = "gtm.scrollDepth",
                    k["gtm.scrollThreshold"] = h,
                    k["gtm.scrollUnits"] = c.toLowerCase(),
                    k["gtm.scrollDirection"] = d,
                    k["gtm.triggers"] = e[f.bc].join(","),
                    k));
                    xv("sdl", b, function(n) {
                        return function(p) {
                            delete p[n.bc];
                            return p
                        }
                    }(f), {})
                }
            }
            f = {
                bc: f.bc
            }
        }
    }
      , Ny = function() {
        xv("sdl", "scr", function(a) {
            a || (a = I.scrollingElement || I.body && I.body.parentNode);
            return Fy = a
        }, !1);
        xv("sdl", "depth", function(a) {
            a || (a = My());
            return Ey = a
        }, !1)
    }
      , My = function() {
        var a = 0
          , b = 0;
        return function() {
            var c = wh()
              , d = c.height;
            a = Math.max(Fy.scrollLeft + c.width, a);
            b = Math.max(Fy.scrollTop + d, b);
            return {
                Gf: a,
                Hf: b
            }
        }
    }
      , Jy = function() {
        return !!(Object.keys(Gy("horiz.pix")).length || Object.keys(Gy("horiz.pct")).length || Object.keys(Gy("vert.pix")).length || Object.keys(Gy("vert.pct")).length)
    };
    function Oy(a, b) {
        var c = this;
        N(H(this), ["options:!DustMap", "triggerId:?*"], arguments);
        Uw([function() {
            return O(c, "process_dom_events", "window", "resize")
        }
        , function() {
            return O(c, "process_dom_events", "window", "scroll")
        }
        ]);
        Ny();
        if (!Fy)
            return;
        b = zv(b);
        var d = qc(a);
        switch (d.horizontalThresholdUnits) {
        case "PIXELS":
            Hy(d.horizontalThresholds, b, "horiz.pix");
            break;
        case "PERCENT":
            Hy(d.horizontalThresholds, b, "horiz.pct")
        }
        switch (d.verticalThresholdUnits) {
        case "PIXELS":
            Hy(d.verticalThresholds, b, "vert.pix");
            break;
        case "PERCENT":
            Hy(d.verticalThresholds, b, "vert.pct")
        }
        yv("sdl", "init", !1) ? yv("sdl", "pending", !1) || J(function() {
            return Iy()
        }) : (wv("sdl", "init", !0),
        wv("sdl", "pending", !0),
        J(function() {
            Iy();
            if (Jy()) {
                var e = Ky();
                Rb(y, "scroll", e);
                Rb(y, "resize", e)
            } else
                wv("sdl", "init", !1)
        }));
        return b
    }
    Oy.M = "internal.enableAutoEventOnScroll";
    var Eb = ca(["data-gtm-yt-inspected-"]), Py = ["www.youtube.com", "www.youtube-nocookie.com"], Qy, Ry = !1;
    var Sy = function(a, b, c) {
        var d = a.map(function(g) {
            return {
                wa: g,
                Id: g,
                Fd: void 0
            }
        });
        if (!b.length)
            return d;
        var e = b.map(function(g) {
            return {
                wa: g * c,
                Id: void 0,
                Fd: g
            }
        });
        if (!d.length)
            return e;
        var f = d.concat(e);
        f.sort(function(g, h) {
            return g.wa - h.wa
        });
        return f
    }
      , Ty = function(a) {
        a = void 0 === a ? [] : a;
        for (var b = [], c = 0; c < a.length; c++)
            0 > a[c] || b.push(a[c]);
        b.sort(function(d, e) {
            return d - e
        });
        return b
    }
      , Uy = function(a) {
        a = void 0 === a ? [] : a;
        for (var b = [], c = 0; c < a.length; c++)
            100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
        b.sort(function(d, e) {
            return d - e
        });
        return b
    }
      , Vy = function(a, b) {
        var c, d;
        function e() {
            t = Sv(function() {
                return {
                    url: x,
                    title: z,
                    If: v,
                    Uh: a.getCurrentTime(),
                    playbackRate: w
                }
            }, b.jb, a.getIframe());
            v = 0;
            z = x = "";
            w = 1;
            return f
        }
        function f(E) {
            switch (E) {
            case 1:
                v = Math.round(a.getDuration());
                x = a.getVideoUrl();
                if (a.getVideoData) {
                    var D = a.getVideoData();
                    z = D ? D.title : ""
                }
                w = a.getPlaybackRate();
                b.Bf ? fv(t.createEvent("start")) : t.Bc();
                u = Sy(b.eg, b.dg, a.getDuration());
                return g(E);
            default:
                return f
            }
        }
        function g() {
            A = a.getCurrentTime();
            B = Qa().getTime();
            t.ni();
            r();
            return h
        }
        function h(E) {
            var D;
            switch (E) {
            case 0:
                return n(E);
            case 2:
                D = "pause";
            case 3:
                var F = a.getCurrentTime() - A;
                D = 1 < Math.abs((Qa().getTime() - B) / 1E3 * w - F) ? "seek" : D || "buffering";
                a.getCurrentTime() && (b.Af ? fv(t.createEvent(D)) : t.Bc());
                q();
                return k;
            case -1:
                return e(E);
            default:
                return h
            }
        }
        function k(E) {
            switch (E) {
            case 0:
                return n(E);
            case 1:
                return g(E);
            case -1:
                return e(E);
            default:
                return k
            }
        }
        function n() {
            for (; d; ) {
                var E = c;
                y.clearTimeout(d);
                E()
            }
            b.zf && fv(t.createEvent("complete", 1));
            return e(-1)
        }
        function p() {}
        function q() {
            d && (y.clearTimeout(d),
            d = 0,
            c = p)
        }
        function r() {
            if (u.length && 0 !== w) {
                var E = -1, D;
                do {
                    D = u[0];
                    if (D.wa > a.getDuration())
                        return;
                    E = (D.wa - a.getCurrentTime()) / w;
                    if (0 > E && (u.shift(),
                    0 === u.length))
                        return
                } while (0 > E);
                c = function() {
                    d = 0;
                    c = p;
                    0 < u.length && u[0].wa === D.wa && (u.shift(),
                    fv(t.createEvent("progress", D.Fd, D.Id)));
                    r()
                }
                ;
                d = y.setTimeout(c, 1E3 * E)
            }
        }
        var t, u = [], v, x, z, w, A, B, C = e(-1);
        d = 0;
        c = p;
        return {
            onStateChange: function(E) {
                C = C(E)
            },
            onPlaybackRateChange: function(E) {
                A = a.getCurrentTime();
                B = Qa().getTime();
                t.Bc();
                w = E;
                q();
                r()
            }
        }
    }
      , Xy = function(a) {
        J(function() {
            function b() {
                for (var d = c.getElementsByTagName("iframe"), e = d.length, f = 0; f < e; f++)
                    Wy(d[f], a)
            }
            var c = I;
            b();
            Hv(b)
        })
    }
      , Wy = function(a, b) {
        if (!a.getAttribute("data-gtm-yt-inspected-" + b.jb) && (Db(a, "data-gtm-yt-inspected-" + b.jb),
        Yy(a, b.wd))) {
            a.id || (a.id = Zy());
            var c = y.YT
              , d = c.get(a.id);
            d || (d = new c.Player(a.id));
            var e = Vy(d, b), f = {}, g;
            for (g in e)
                f.Ic = g,
                e.hasOwnProperty(f.Ic) && d.addEventListener(f.Ic, function(h) {
                    return function(k) {
                        return e[h.Ic](k.data)
                    }
                }(f)),
                f = {
                    Ic: f.Ic
                }
        }
    }
      , Yy = function(a, b) {
        var c = a.getAttribute("src");
        if ($y(c, "embed/")) {
            if (0 < c.indexOf("enablejsapi=1"))
                return !0;
            if (b) {
                var d;
                var e = -1 !== c.indexOf("?") ? "&" : "?";
                -1 < c.indexOf("origin=") ? d = c + e + "enablejsapi=1" : (Qy || (Qy = I.location.protocol + "//" + I.location.hostname,
                I.location.port && (Qy += ":" + I.location.port)),
                d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(Qy));
                var f;
                f = qb(d);
                a.src = pb(f).toString();
                return !0
            }
        }
        return !1
    }
      , $y = function(a, b) {
        if (!a)
            return !1;
        for (var c = 0; c < Py.length; c++)
            if (0 <= a.indexOf("//" + Py[c] + "/" + b))
                return !0;
        return !1
    }
      , Zy = function() {
        var a = Math.round(1E9 * Math.random()) + "";
        return I.getElementById(a) ? Zy() : a
    };
    function az(a, b) {
        var c = this;
        N(H(this), ["dustOptions:!DustMap", "triggerId:?*"], arguments);
        Uw([function() {
            return O(c, "process_dom_events", "element", "onStateChange")
        }
        , function() {
            return O(c, "process_dom_events", "element", "onPlaybackRateChange")
        }
        ]);
        b = zv(b);
        var d = !!a.get("captureStart")
          , e = !!a.get("captureComplete")
          , f = !!a.get("capturePause")
          , g = Uy(qc(a.get("progressThresholdsPercent")))
          , h = Ty(qc(a.get("progressThresholdsTimeInSeconds")))
          , k = !!a.get("fixMissingApi");
        if (!(d || e || f || g.length || h.length))
            return;
        var n = {
            Bf: d,
            zf: e,
            Af: f,
            dg: g,
            eg: h,
            wd: k,
            jb: b
        }
          , p = y.YT
          , q = function() {
            Xy(n)
        };
        if (p)
            return p.ready && p.ready(q),
            b;
        var r = y.onYouTubeIframeAPIReady;
        y.onYouTubeIframeAPIReady = function() {
            r && r();
            q()
        }
        ;
        J(function() {
            for (var t = I.getElementsByTagName("script"), u = t.length, v = 0; v < u; v++) {
                var x = t[v].getAttribute("src");
                if ($y(x, "iframe_api") || $y(x, "player_api"))
                    return b
            }
            for (var z = I.getElementsByTagName("iframe"), w = z.length, A = 0; A < w; A++)
                if (!Ry && Yy(z[A], n.wd))
                    return Nb("https://www.youtube.com/iframe_api"),
                    Ry = !0,
                    b
        });
        return b
    }
    az.M = "internal.enableAutoEventOnYouTubeActivity";
    function bz(a, b) {
        var c = !1;
        return c
    }
    bz.M = "internal.evaluateBooleanExpression";
    function gz(a) {
        return !1
    }
    gz.M = "internal.evaluateFilteringRules";
    var hz;
    function iz(a) {
        var b = !1;
        return b
    }
    iz.M = "internal.evaluateMatchingRules";
    var kz = function(a, b, c) {
        if (c)
            switch (c.type) {
            case "event_name":
                return a;
            case "const":
                return c.const_value;
            case "event_param":
                var d = c.event_param.param_name;
                return b[d]
            }
    }
      , nz = function(a, b, c, d) {
        if (c && !lz(a, b, c))
            return !1;
        if (!d || 0 === d.length)
            return !0;
        for (var e = 0; e < d.length; e++)
            if (mz(a, b, d[e].predicates || []))
                return !0;
        return !1
    }
      , mz = function(a, b, c) {
        for (var d = 0; d < c.length; d++)
            if (!lz(a, b, c[d]))
                return !1;
        return !0
    }
      , lz = function(a, b, c) {
        var d = c.values || []
          , e = kz(a, b, d[0])
          , f = kz(a, b, d[1])
          , g = c.type;
        if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g)
            m(e) && (e = e.toLowerCase()),
            m(f) && (f = f.toLowerCase());
        var h = !1;
        switch (g) {
        case "eq":
        case "eqi":
            h = Kw(e, f);
            break;
        case "sw":
        case "swi":
            h = Pw(e, f);
            break;
        case "ew":
        case "ewi":
            h = Fw(e, f);
            break;
        case "cn":
        case "cni":
            h = Jw(e, f);
            break;
        case "lt":
            h = Ow(e, f);
            break;
        case "le":
            h = Mw(e, f);
            break;
        case "gt":
            h = Nw(e, f);
            break;
        case "ge":
            h = Lw(e, f);
            break;
        case "re":
        case "rei":
            h = Hw(e, f, "rei" === g)
        }
        return !!c.negate !== h
    };
    function oz(a, b) {
        var c = !1;
        return c
    }
    oz.M = "internal.evaluatePredicates";
    var pz = function(a) {
        var b;
        return b
    };
    function qz(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    qz.N = "getCookieValues";
    function rz() {
        return xi.Ef
    }
    rz.M = "internal.getCountryCode";
    function sz() {
        var a = [];
        return oc(a)
    }
    sz.M = "internal.getDestinationIds";
    function tz(a) {
        var b = null;
        return b
    }
    tz.N = "getElementById";
    function uz(a, b) {
        var c;
        N(H(this), ["targetId:!string", "name:!string"], arguments);
        var d = th(a) || {};
        c = oc(d[b], this.h);
        return c
    }
    uz.M = "internal.getProductSettingsParameter";
    function vz(a, b) {
        var c;
        N(H(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
        O(this, "get_url", "query", a);
        var d = Qh(Sh(y.location.href), "query")
          , e = Nh(d, a, b);
        c = oc(e, this.h);
        return c
    }
    vz.N = "getQueryParameters";
    function wz(a, b) {
        var c;
        return c
    }
    wz.N = "getReferrerQueryParameters";
    function xz(a) {
        var b = "";
        return b
    }
    xz.N = "getReferrerUrl";
    function yz() {
        return xi.ki
    }
    yz.M = "internal.getRegionCode";
    function zz(a, b) {
        var c;
        N(H(this), ["targetId:!string", "name:!string"], arguments);
        var d = iu(a);
        c = oc(d[b], this.h);
        return c
    }
    zz.M = "internal.getRemoteConfigParameter";
    function Az(a) {
        var b = "";
        N(H(this), ["component:?string"], arguments),
        O(this, "get_url", a),
        b = Qh(Sh(y.location.href), a);
        return b
    }
    Az.N = "getUrl";
    function Bz() {
        O(this, "get_user_agent");
        return y.navigator.userAgent
    }
    Bz.N = "getUserAgent";
    function Cz(a) {
        if (!a)
            return {};
        var b = a.Nj;
        return gq(b.type, b.index, b.name)
    }
    function Dz(a) {
        return a ? {
            originatingEntity: Cz(a)
        } : {}
    }
    ;function Fz(a, b) {}
    Fz.N = "gtagSet";
    function Gz(a, b) {}
    Gz.N = "injectHiddenIframe";
    var Hz = {};
    function Jz(a, b, c, d) {}
    var Kz = Object.freeze({
        dl: 1,
        id: 1
    })
      , Lz = {};
    function Mz(a, b, c, d) {}
    Jz.N = "injectScript";
    Mz.M = "internal.injectScript";
    function Nz(a) {
        var b = !0;
        return b
    }
    Nz.N = "isConsentGranted";
    var Oz = function() {
        var a = Nf(function(b) {
            this.h.h.log("error", b)
        });
        a.N = "JSON";
        return a
    };
    var Pz = function() {
        return !1
    }
      , Qz = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };
    var Rz = ["textContent", "value", "tagName", "children", "childElementCount"];
    function Sz(a) {
        var b;
        return b
    }
    Sz.M = "internal.locateUserData";
    function Tz() {}
    Tz.N = "logToConsole";
    function Uz(a) {
        var b = void 0;
        if ("function" === typeof URL) {
            var c;
            a: {
                var d;
                try {
                    d = new URL(a)
                } catch (x) {
                    c = void 0;
                    break a
                }
                for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) {
                    var h = f[g][0]
                      , k = f[g][1];
                    e.hasOwnProperty(h) ? "string" === typeof e[h] ? e[h] = [e[h], k] : e[h].push(k) : e[h] = k
                }
                c = oc({
                    href: d.href,
                    origin: d.origin,
                    protocol: d.protocol,
                    username: d.username,
                    password: d.password,
                    host: d.host,
                    hostname: d.hostname,
                    port: d.port,
                    pathname: d.pathname,
                    search: d.search,
                    searchParams: e,
                    hash: d.hash
                })
            }
            return c
        }
        var n;
        try {
            n = Sh(a)
        } catch (x) {
            return
        }
        if (!n.protocol || !n.host)
            return;
        var p = {};
        if (n.search)
            for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) {
                var t = q[r].split("=")
                  , u = t[0]
                  , v = decodeURIComponent(t.splice(1).join("="));
                p.hasOwnProperty(u) ? "string" === typeof p[u] ? p[u] = [p[u], v] : p[u].push(v) : p[u] = v
            }
        n.searchParams = p;
        n.origin = n.protocol + "//" + n.host;
        n.username = "";
        n.password = "";
        b = oc(n);
        return b
    }
    Uz.N = "parseUrl";
    function Vz(a) {}
    Vz.M = "internal.processAsNewEvent";
    function Wz(a, b) {
        var c = !1;
        return c
    }
    Wz.N = "queryPermission";
    function Xz() {
        var a = "";
        return a
    }
    Xz.N = "readCharacterSet";
    function Yz() {
        var a = "";
        return a
    }
    Yz.N = "readTitle";
    function Zz(a, b) {
        var c = this;
    }
    Zz.M = "internal.registerCcdCallback";
    var $z = Object.freeze(["config", "event", "get", "set"]);
    function aA(a, b, c) {}
    aA.M = "internal.registerGtagCommandListener";
    function bA(a, b) {
        var c = !1;
        return c
    }
    bA.M = "internal.removeDataLayerEventListener";
    function cA() {}
    cA.N = "resetDataLayer";
    var dA = !1;
    dA = !0;
    var eA = !1;
    eA = !0;
    var fA = !1;
    fA = !0;
    var gA = {};
    gA[R.g.mc] = "";
    gA[R.g.Pa] = "";
    gA[R.g.Ta] = "";
    gA[R.g.ya] = "auto";
    gA[R.g.wb] = "/";
    gA[R.g.Ha] = 63072E3;
    gA[R.g.ed] = 30;
    gA[R.g.oe] = 1E4;
    gA[R.g.Aa] = !0;
    var hA = function(a, b, c, d, e) {
        Cm.call(this, a, b, d);
        this.s = c;
        this.ia = d.eventModel;
        this.uh = d.containerConfig;
        dA || (this.J = d.getWithConfig(R.g.Ga) ? 1 : 8,
        this.yh = this.zc = !1);
        dA || (this.rf = d.getWithConfig(R.g.xb) ? 1 : 8);
        this.H = e;
        this.U = this.qf = this.Jh = this.D = this.Ah = !1;
        this.Vb = 0;
        this.Fb = !1;
        this.sa = 0;
        this.Gh = this.h = this.uf = void 0;
        fA || (this.Ch = !1);
        eA || (this.vh = this.wh = void 0)
    };
    ka(hA, Cm);
    l = hA.prototype;
    l.ze = function(a, b) {
        void 0 === this.F(a) && (this.ia[a] = b)
    }
    ;
    l.F = function(a) {
        return void 0 !== this.ia[a] ? this.ia[a] : void 0 !== this.B.getWithConfig(a) ? this.B.getWithConfig(a) : void 0 !== this.H[a] ? this.H[a] : gA[a]
    }
    ;
    l.getRemoteConfig = function(a) {
        return void 0 !== this.B.remoteConfig[a] ? this.B.remoteConfig[a] : this.H[a]
    }
    ;
    l.Sb = function(a) {
        var b = Em(this, R.g.de, this.H[R.g.de]);
        if (b && void 0 !== b[a || this.eventName])
            return b[a || this.eventName]
    }
    ;
    l.Zh = function() {
        var a;
        a = dA ? this.metadata.user_data : this.F(R.g.Ba);
        if ("object" === typeof a)
            return a
    }
    ;
    l.dk = function() {
        return !!this.Zh()
    }
    ;
    l.abort = function() {
        throw "ABORT";
    }
    ;
    l.Ra = function() {
        return this.metadata.is_merchant_center ? !1 : !(!0 !== this.F(R.g.bd) && "true" !== this.F(R.g.bd) || !this.F(R.g.fa))
    }
    ;
    var iA = !1
      , jA = function(a) {
        var b = a.eventName === R.g.Mc && Ni() && a.Ra()
          , c = a.metadata.is_conversion || a.Fb
          , d = a.metadata.is_session_start || a.D
          , e = a.metadata.create_dc_join || a.qf
          , f = a.metadata.create_google_join || a.U
          , g = (a.h || a.metadata.euid_mode_enabled) && a.dk();
        return !(!Gb.sendBeacon || c || g || d || e || f || b || iA)
    };
    var kA = function(a) {
        fg("GA4_EVENT", a)
    };
    var mA = function(a) {
        return !a || lA.test(a) || Gg.hasOwnProperty(a)
    }
      , nA = function(a, b, c) {
        for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
            var f = d[e];
            if (f.edit_param) {
                var g = f.edit_param.param_name, h = kz(a, b, f.edit_param.param_value), k;
                if (h) {
                    var n = Number(h);
                    k = isNaN(n) ? h : n
                } else
                    k = h;
                b[g] = k
            } else
                f.delete_param && delete b[f.delete_param.param_name]
        }
    }
      , lA = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    var oA = function(a) {
        var b = 0
          , c = 0;
        return {
            start: function() {
                b = Ra()
            },
            stop: function() {
                c = this.get()
            },
            get: function() {
                var d = 0;
                a.Rf() && (d = Ra() - b);
                return d + c
            }
        }
    }
      , pA = !1;
    pA = !0;
    var qA = function() {
        this.h = void 0;
        this.s = 0;
        this.isActive = this.isVisible = this.D = !1;
        this.J = this.H = void 0
    };
    l = qA.prototype;
    l.mj = function(a) {
        var b = this;
        if (!this.h) {
            this.D = I.hasFocus();
            this.isVisible = !I.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                Rb(d, e, function(g) {
                    b.h.stop();
                    f(g);
                    b.Rf() && b.h.start()
                })
            };
            c(y, "focus", function() {
                b.D = !0
            });
            c(y, "blur", function() {
                b.D = !1
            });
            c(y, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && ig(56);
                b.J && b.J()
            });
            c(y, "pagehide", function() {
                b.isActive = !1;
                b.H && b.H()
            });
            c(I, "visibilitychange", function() {
                b.isVisible = !I.hidden
            });
            a.Ra() && -1 === (Gb.userAgent || "").indexOf("Firefox") && -1 === (Gb.userAgent || "").indexOf("FxiOS") && c(y, "beforeunload", function() {
                iA = !0
            });
            this.gg();
            this.s = 0
        }
    }
    ;
    l.gg = function() {
        this.s += this.Ke();
        this.h = oA(this);
        this.Rf() && this.h.start()
    }
    ;
    l.bl = function(a) {
        var b = this.Ke();
        if (pA && 0 < b) {
            a.C[R.g.ce] = b;
            return
        }
        a.sa = b
    }
    ;
    l.ck = function(a) {
        pA ? a.C[R.g.ce] = void 0 : a.sa = 0;
        this.gg();
        this.s = 0
    }
    ;
    l.Rf = function() {
        return this.D && this.isVisible && this.isActive
    }
    ;
    l.Yj = function() {
        return this.s + this.Ke()
    }
    ;
    l.Ke = function() {
        return this.h && this.h.get() || 0
    }
    ;
    l.Mk = function(a) {
        this.H = a
    }
    ;
    l.li = function(a) {
        this.J = a
    }
    ;
    function rA() {
        var a = y;
        return a.gaGlobal = a.gaGlobal || {}
    }
    var sA = function() {
        var a = rA();
        a.hid = a.hid || Fa();
        return a.hid
    }
      , tA = function(a, b) {
        var c = rA();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var vA = function(a, b, c) {
        if (uA) {
            var d = a.metadata.client_id_source;
            if (void 0 === d || c <= d)
                a.C[R.g.Ga] = b,
                a.ia[R.g.Ga] = void 0,
                a.metadata.client_id_source = c
        } else
            c <= a.J && (a.ia[R.g.Ga] = b,
            a.J = c)
    }
      , zA = function(a, b) {
        var c;
        var d = wA(b)
          , e = String(b.F(R.g.ya))
          , f = String(b.F(R.g.wb))
          , g = Number(b.F(R.g.Ha))
          , h = b.F(R.g.Ib)
          , k = {
            ib: R.g.V,
            domain: e,
            path: f,
            expires: g ? new Date(Ra() + 1E3 * g) : void 0,
            flags: "" + b.F(R.g.Ta)
        };
        if (!1 === h && xA(b) === a)
            c = !0;
        else {
            var n = Cj(a, yA[0], e, f);
            c = 1 !== uj(d, n, k)
        }
        return c
    }
      , xA = function(a) {
        var b = wA(a)
          , c = "" + a.F(R.g.ya)
          , d = "" + a.F(R.g.wb)
          , e = Bj(b, c, d, yA, R.g.V);
        if (!e) {
            var f = String(a.F(R.g.mc));
            f && f != b && (e = Bj(f, c, d, yA, R.g.V))
        }
        return e
    }
      , wA = function(a) {
        return String(a.F(R.g.Pa)) + "_ga"
    }
      , uA = !1;
    uA = !0;
    var yA = ["GA1"];
    var CA = function(a, b) {
        var c = AA(b)
          , d = String(b.F(R.g.ya))
          , e = String(b.F(R.g.wb))
          , f = Number(b.F(R.g.Ha))
          , g = Cj(a, BA[0], d, e)
          , h = {
            ib: R.g.V,
            domain: d,
            path: e,
            expires: f ? new Date(Ra() + 1E3 * f) : void 0,
            flags: String(b.F(R.g.Ta))
        };
        return 1 !== uj(c, g, h)
    }
      , DA = function(a) {
        var b = AA(a)
          , c = String(a.F(R.g.ya))
          , d = String(a.F(R.g.wb));
        return Bj(b, c, d, BA, R.g.V)
    }
      , EA = function(a, b, c, d, e, f, g) {
        if (a && b) {
            var h = [a, b, La(c), d, e];
            return h.join(".")
        }
    }
      , FA = !1;
    FA = !0;
    var BA = ["GS1"]
      , AA = function(a) {
        return String(a.F(R.g.Pa)) + "_ga_" + a.la.substr(2)
    }
      , GA = function(a) {
        return FA ? EA(a.C[R.g.pb], a.C[R.g.gd], a.C[R.g.fd], a.s, a.metadata.join_timer_sec || 0, !!a.metadata[R.g.ad], a.C[R.g.xb]) : EA(a.ia[R.g.pb], a.ia[R.g.gd], a.ia[R.g.fd], a.s, a.Vb, !!a.ia[R.g.ad], a.ia[R.g.xb])
    };

    var HA = function(a) {
        var b = a.F(R.g.za)
          , c = a.getRemoteConfig(R.g.za);
        if (c === b)
            return c;
        var d = L(b);
        c && c[R.g.X] && (d[R.g.X] = (d[R.g.X] || []).concat(c[R.g.X]));
        return d
    }
      , IA = function(a, b) {
        var c = bl(!0);
        return "1" !== c._up ? {} : {
            clientId: c[a],
            ri: c[b]
        }
    }
      , JA = function(a, b, c) {
        var d = bl(!0)
          , e = d[b];
        e && (vA(a, e, 2),
        zA(e, a));
        var f = d[c];
        f && CA(f, a);
        return !(!e || !f)
    }
      , KA = !1;
    KA = !0;
    var LA = !1;
    LA = !0;
    var MA = !1
      , NA = function(a) {
        var b = HA(a) || {}
          , c = wA(a)
          , d = AA(a);
        kl(b[R.g.uc], !!b[R.g.X]) && JA(a, c, d) && (MA = !0);
        b[R.g.X] && hl(function() {
            var e = {}
              , f = xA(a);
            f && (e[c] = f);
            var g = DA(a);
            g && (e[d] = g);
            var h = lj("FPLC", void 0, void 0, R.g.V);
            h.length && (e._fplc = h[0]);
            return e
        }, b[R.g.X], b[R.g.dd], !!b[R.g.vc])
    }
      , PA = function(a) {
        if (!a.F(R.g.qb))
            return {};
        var b = wA(a)
          , c = AA(a);
        il(function() {
            var d;
            if ($i("analytics_storage"))
                d = {};
            else {
                var e = {};
                d = (e._up = "1",
                e[b] = KA ? a.C[R.g.Ga] : a.ia[R.g.Ga],
                e[c] = GA(a),
                e)
            }
            return d
        }, 1);
        return !$i("analytics_storage") && OA() ? IA(b, c) : {}
    }
      , OA = function() {
        var a = Ph(y.location, "host")
          , b = Ph(Sh(I.referrer), "host");
        return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
    }
      , QA = function(a) {
        if (!a)
            return a;
        var b = String(a);
        b = al(b);
        return b = al(b, "_ga")
    };
    var RA = function(a) {
        var b = !1;
        return b
    };
    var SA = function() {
        var a = Ra()
          , b = a + 864E5
          , c = 20
          , d = 5E3;
        return function() {
            var e = Ra();
            e >= b && (b = e + 864E5,
            d = 5E3);
            if (1 > d)
                return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c)
                return !1;
            d--;
            c--;
            return !0
        }
    };
    var TA = function(a) {
        return Qh(Sh(a.C[R.g.fb]), "host", !0)
    }
      , UA = !1;
    UA = !0;
    var VA = "" + Fa()
      , WA = !1
      , XA = void 0;
    var YA = function(a, b) {
        if (b.Ra()) {
            var c = vn();
            c && (a.us_privacy = c);
            var d = uk();
            d && (a.gdpr = d);
            var e = tk();
            e && (a.gdpr_consent = e)
        }
    }
      , $A = function(a, b) {
        if (Ni()) {
            a.gcs = aj();
            var c = ZA ? b.metadata.is_consent_update : b.wh;
            c && (a.gcu = "1");
            if (b.Ra()) {
                Oi() && (a.gcd = "G1" + Vi(Li));
                var d = b.F(R.g.ka);
                a.adr = void 0 !== d && !1 !== d ? "1" : "0";
                if (c) {
                    var e;
                    ZA ? e = b.metadata.consent_update_type : e = b.vh;
                    a.gcut = Og[e || ""]
                }
            }
        }
    }
      , aB = function(a, b, c) {
        void 0 === c && (c = {});
        if ("object" === typeof b)
            for (var d in b)
                aB(a + "." + d, b[d], c);
        else
            c[a] = b;
        return c
    }
      , dB = function(a) {
        if (a.metadata.is_merchant_center)
            return "https://www.merchant-center-analytics.goog/g/collect";
        var b = Kq(a.F(R.g.fa), "/g/collect");
        if (b)
            return b;
        var c = Em(a, R.g.yb, a.F(R.g.yb));
        return c && !Em(a, R.g.cd, !1) && !1 !== a.F(R.g.Oc) && Hs() && $i(R.g.I) && $i(R.g.V) ? bB() : cB()
    }
      , eB = !1;
    eB = !0;
    var ZA = !1;
    ZA = !0;
    var fB = !1;
    fB = !0;
    var gB = ""
      , hB = !1;
    hB = !0;
    var iB = {};
    iB[R.g.kj] = "tid";
    iB[R.g.Ga] = "cid";
    iB[R.g.Ua] = "ul";
    iB[R.g.ff] = "_fid";
    iB[R.g.nf] = "tt";
    iB[R.g.ke] = "ir";
    iB[R.g.Kb] = "sr";
    iB[R.g.sc] = "gdid";
    iB[R.g.me] = "_rdi";
    iB[R.g.Jg] = "_geo";
    iB[R.g.th] = "gtm_up";
    iB[R.g.sh] = "_glv";
    var jB = {};
    jB[R.g.pb] = "sid";
    jB[R.g.gd] = "sct";
    jB[R.g.fd] = "seg";
    jB[R.g.Va] = "dl";
    jB[R.g.fb] = "dr";
    jB[R.g.xc] = "dt";
    jB[R.g.va] = "cu";
    jB[R.g.Ia] = "uid";
    jB[R.g.Wd] = "cc";
    jB[R.g.Xd] = "ci";
    jB[R.g.Yd] = "cm";
    jB[R.g.Zd] = "cn";
    jB[R.g.ae] = "cs";
    jB[R.g.be] = "ck";
    var kB = {};
    kB[R.g.ce] = "_et";
    kB[R.g.qc] = "edid";
    var lB = {};
    lB[R.g.Wd] = "cc";
    lB[R.g.Xd] = "ci";
    lB[R.g.Yd] = "cm";
    lB[R.g.Zd] = "cn";
    lB[R.g.ae] = "cs";
    lB[R.g.be] = "ck";
    var cB = function() {
        var a = "www";
        hB && gB && (a = gB);
        return "https://" + a + ".google-analytics.com/g/collect"
    }
      , bB = function() {
        var a;
        hB && gB && (a = gB);
        return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
    }
      , mB = function(a, b, c) {
        function d(A, B) {
            if (void 0 !== B && !Dg.hasOwnProperty(A)) {
                null === B && (B = "");
                var E = B;
                !0 === B && (E = "1");
                !1 === B && (E = "0");
                var D;
                if (iB[A])
                    D = iB[A],
                    e[D] = Re(E, 420);
                else if (jB[A])
                    D = jB[A],
                    g[D] = Re(E, 420);
                else if (kB[A])
                    D = kB[A],
                    f[D] = Re(E, 420);
                else if ("_" === A.charAt(0))
                    e[A] = Re(E, 420);
                else {
                    var F;
                    (F = u(A, B)) || (lB[A] ? F = !0 : A !== R.g.Tc ? F = !1 : ("object" !== typeof B && t(A, B),
                    F = !0));
                    F || t(A, B)
                }
            }
        }
        var e = {}
          , f = {}
          , g = {};
        e.v = "2";
        e.tid = a.la;
        e.gtm = Oj();
        e._p = sA();
        a.uf && (e._z = a.uf);
        c && (e.em = c);
        if (eB ? a.metadata.create_google_join : a.U)
            e._gaz = 1;
        $A(e, a);
        YA(e, a);
        a.Gh && !eB && (e.gtm_up = "1");
        a.Ra() && a.Ch && !fB && (e._glv = "1");
        var h = a.C[R.g.sc];
        h && (e.gdid = h);
        f.en = Re(a.eventName, 40);
        var k = eB ? a.metadata.is_first_visit_conversion : a.Ah;
        eB ? a.metadata.is_first_visit && (f._fv = k ? 2 : 1) : a.zc && (f._fv = k ? 2 : 1);
        eB ? a.metadata.is_new_to_site && (f._nsi = 1) : a.yh && (f._nsi = 1);
        var n = eB ? a.metadata.is_session_start_conversion : a.Jh;
        eB ? a.metadata.is_session_start && (f._ss = n ? 2 : 1) : a.D && (f._ss = n ? 2 : 1);
        eB ? a.metadata.is_conversion && (f._c = 1) : a.Fb && (f._c = 1);
        a.metadata.is_external_event && (f._ee = 1);
        0 < a.sa && !eB && (f._et = a.sa);
        if (a.metadata.is_ecommerce) {
            var p = a.C[R.g.ca] || a.F(R.g.ca);
            if (Ca(p))
                for (var q = 0; q < p.length && 200 > q; q++)
                    f["pr" + (q + 1)] = We(p[q])
        }
        var r = a.C[R.g.qc];
        r && (f.edid = r);
        for (var t = function(A, B) {
            A = Re(A, 40);
            var C = "ep." + A
              , E = "epn." + A;
            A = Ba(B) ? E : C;
            var D = Ba(B) ? C : E;
            f.hasOwnProperty(D) && delete f[D];
            f[A] = Re(B, 100)
        }, u = function(A, B) {
            var C = A.split(".");
            if (A === R.g.Ba && "object" !== typeof B)
                return t(A, B),
                !0;
            if (C[0] === R.g.Ba) {
                if ((1 < C.length || "object" === typeof B) && a.Ra()) {
                    var E = aB(A, B);
                    Ja(E, function(D, F) {
                        return void t(D, F)
                    })
                }
                return !0
            }
            return !1
        }, v = 0; v < Eg.length; ++v) {
            var x = Eg[v];
            d(x, a.F(x))
        }
        Ja(a.uh, d);
        Ja(a.ia, d);
        Ja(a.C, d);
        a.metadata.user_data && u("user_data", a.metadata.user_data);
        var z = a.C[R.g.Wa] || a.F(R.g.Wa) || {};
        !1 !== a.F(R.g.ba) && Is() || (z._npa = "1");
        Ja(z, function(A, B) {
            if (void 0 !== B)
                if (null === B && (B = ""),
                A === R.g.Ia && !g.uid)
                    g.uid = Re(B, 36);
                else if (b[A] !== B) {
                    var C = (Ba(B) ? "upn." : "up.") + Re(A, 24);
                    f[C] = Re(B, 36);
                    b[A] = B
                }
        });
        var w = !1;
        return Ye.call(this, {
            Ka: e,
            Zb: g,
            ia: f
        }, dB(a), a.Ra(), w) || this
    };
    ka(mB, Ye);
    var nB = function(a, b) {
        return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
            return b[d] || c
        })
    }
      , oB = function(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }
      , pB = function(a) {
        var b = {}
          , c = ""
          , d = a.pathname.indexOf("/g/collect");
        0 <= d && (c = a.pathname.substring(0, d));
        b.transport_url = a.protocol + "//" + a.hostname + c;
        return b
    }
      , qB = function(a, b) {
        var c = new y.XMLHttpRequest;
        c.withCredentials = !0;
        var d = b ? "POST" : "GET"
          , e = ""
          , f = 0
          , g = Sh(a)
          , h = pB(g)
          , k = oB(g);
        c.onprogress = function(n) {
            if (200 === c.status) {
                e += c.responseText.substring(f);
                f = n.loaded;
                for (var p = nB(e, h), q = p.indexOf("\n\n"); -1 !== q; ) {
                    var r;
                    a: {
                        var t, u = p.substring(0, q).split("\n"), v = "undefined" != typeof Symbol && Symbol.iterator && u[Symbol.iterator];
                        t = v ? v.call(u) : {
                            next: aa(u)
                        };
                        var x = t.next().value
                          , z = t.next().value;
                        if (x.startsWith("event: message") && z.startsWith("data: "))
                            try {
                                r = JSON.parse(z.substring(z.indexOf(":") + 1));
                                break a
                            } catch (K) {}
                        r = void 0
                    }
                    var w = r;
                    if (w) {
                        var A = w.send_pixel || [];
                        if (Array.isArray(A))
                            for (var B = 0; B < A.length; B++) {
                                var C = A[B]
                                  , E = Pj('', 0);
                                if (1 === E) {
                                    var D = Math.floor(2 * Math.random()) + 1, F, Q = C, M = D, S = 0 < Q.indexOf("?") ? "&" : "?";
                                    F = "" + Q + S + "gtmexpsb=" + M;
                                    2 === D ? Xb(F) : Qb(F)
                                } else
                                    2 === E ? Xb(C) : Qb(C)
                            }
                        var X = w.send_beacon || [];
                        if (Array.isArray(X))
                            for (var P = 0; P < X.length; P++)
                                Xb(X[P])
                    }
                    p = p.substring(q + 2);
                    q = p.indexOf("\n\n")
                }
                e = p
            }
        }
        ;
        c.open(d, k);
        c.send(b)
    };
    var tB = function(a, b, c, d) {
        var e = a + "?" + b;
        rB && (d = !(0 === e.indexOf(cB()) || 0 === e.indexOf(bB())));
        d && !iA ? qB(e, c) : sB(a, b, c)
    }
      , uB = function(a) {}
      , vB = function(a, b) {
        function c(t) {
            q.push(t + "=" + encodeURIComponent("" + a.Ka[t]))
        }
        var d = b.Sk
          , e = b.Tk
          , f = b.bk
          , g = b.zj
          , h = b.yj
          , k = b.ik
          , n = b.Uk
          , p = b.hk;
        if (d || e || n) {
            var q = [];
            c("tid");
            c("cid");
            c("gtm");
            q.push("aip=1");
            a.Zb.uid && !p && q.push("uid=" + encodeURIComponent("" + a.Zb.uid));
            d && (sB("https://stats.g.doubleclick.net/g/collect", "v=2&" + q.join("&")),
            Ui("https://stats.g.doubleclick.net/g/collect?v=2&" + q.join("&")));
            if (e) {
                q.push("z=" + Fa());
                if (!k) {
                    var r = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                    r && Qb(r + q.join("&"))
                }
            }
            n && uB(a)
        }
    }
      , rB = !1;
    var wB = function() {
        this.H = 1;
        this.J = {};
        this.h = new Ze;
        this.s = -1
    };
    wB.prototype.D = function(a, b) {
        var c = this, d;
        try {
            d = new mB(a,this.J,b)
        } catch (v) {
            a.abort()
        }
        var e = jA(a);
        e && this.h.H(d) || this.flush();
        if (e && this.h.add(d)) {
            if (0 > this.s) {
                var f = y, g = f.setTimeout, h;
                a.Ra() ? xB ? (xB = !1,
                h = yB) : h = zB : h = 5E3;
                this.s = g.call(f, function() {
                    return c.flush()
                }, h)
            }
        } else {
            var k = af(d, this.H++);
            tB(d.h, k.ag, k.body, d.H);
            var n = a.metadata.create_dc_join || a.qf
              , p = a.metadata.create_google_join || a.U
              , q = !1 !== a.F(R.g.Fa)
              , r = !1 !== a.F(R.g.ba)
              , t = {
                eventId: a.B.eventId,
                priorityId: a.B.priorityId
            }
              , u = {
                Sk: n,
                Tk: p,
                bk: String(Em(a, R.g.ie, a.F(R.g.ie))),
                zj: q,
                yj: r,
                ik: Em(a, R.g.cd, !1),
                hk: a.metadata.euid_mode_enabled,
                sl: t
            };
            vB(d, u)
        }
    }
    ;
    wB.prototype.add = function(a) {
        a.metadata.euid_mode_enabled && !iA ? this.U(a) : this.D(a)
    }
    ;
    wB.prototype.flush = function() {
        if (this.h.events.length) {
            var a = bf(this.h, this.H++);
            tB(this.h.h, a.ag, a.body, this.h.s);
            this.h = new Ze;
            0 <= this.s && (y.clearTimeout(this.s),
            this.s = -1)
        }
    }
    ;
    wB.prototype.U = function(a) {
        var b = this
          , c = a.Zh();
        c ? Ag(c, function(d) {
            b.D(a, 1 === d.split("~").length ? void 0 : d)
        }) : this.D(a)
    }
    ;
    var sB = function(a, b, c) {
        var d = a + "?" + b;
        c ? Gb.sendBeacon && Gb.sendBeacon(d, c) : Xb(d)
    }
      , yB = Pj('', 500)
      , zB = Pj('', 5E3)
      , xB = !0;
    var AB = window
      , BB = document
      , CB = function(a) {
        var b = AB._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === AB["ga-disable-" + a])
            return !0;
        try {
            var c = AB.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = fj("AMP_TOKEN", String(BB.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return BB.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var DB = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function EB(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function FB() {
        var a = y.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function GB() {
        var a = y, b, c;
        if ("function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)) {
            var d = EB(a);
            if (!d.uach_promise) {
                var e = a.navigator.userAgentData.getHighEntropyValues(DB).then(function(f) {
                    null != d.uach || (d.uach = f);
                    return f
                });
                d.uach_promise = e
            }
        }
    }
    ;var HB = {};
    var IB = function(a, b, c) {
        c || (c = function() {}
        );
        var d = function(e) {
            void 0 !== e[b] && (e[b] = c(e[b]))
        };
        d(a.C);
        d(a.ia);
        d(a.uh);
        d(a.B.globalConfig)
    }
      , KB = function(a, b) {
        var c = R.g.I;
        $i(c) || cj(function() {
            JB[11] ? (b.metadata.is_consent_update = !0,
            b.metadata.consent_update_type = c) : (b.wh = !0,
            b.vh = c);
            a.Nh(b)
        }, c)
    }
      , JB = {
        0: !0,
        9: !0,
        6: !0,
        5: !0,
        10: !0,
        3: !0,
        2: !0
    };
    JB[1] = !0;
    JB[8] = !0;
    JB[11] = !0;
    JB[12] = !0;
    var LB = !1;
    HB.lj = "";
    var MB = {}
      , NB = (MB[R.g.Wd] = !0,
    MB[R.g.Xd] = !0,
    MB[R.g.Yd] = !0,
    MB[R.g.Zd] = !0,
    MB[R.g.ae] = !0,
    MB[R.g.be] = !0,
    MB)
      , OB = function(a, b) {
        this.sa = a;
        this.zc = b;
        this.U = new wB;
        this.h = void 0;
        this.H = new qA;
        this.s = this.D = void 0;
        this.J = !1;
        this.Fb = void 0
    };
    l = OB.prototype;
    l.Hk = function(a, b, c) {
        var d = this;
        if (!c.eventMetadata.is_external_event || "_" !== a.charAt(0)) {
            a !== R.g.Ea && a !== R.g.Na && mA(a) && ig(58);
            PB(c.eventModel);
            var e = new hA(this.sa,a,b,c,this.zc)
              , f = [R.g.V]
              , g = !1;
            g = e.Ra();
            (Em(e, R.g.yb, e.F(R.g.yb)) || g) && f.push(R.g.I);
            dj(function() {
                d.Ik(e)
            }, f)
        }
    }
    ;
    l.Ik = function(a) {
        this.s = a;
        try {
            CB(a.la) && (ig(28),
            a.abort());
            0 <= HB.lj.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (ig(33),
            a.abort());
            var b = a.Sb();
            b && b.blacklisted && (ig(34),
            a.abort());
            var c = I.location.protocol;
            "http:" != c && "https:" != c && (ig(29),
            a.abort());
            Gb && "preview" == Gb.loadPurpose && (ig(30),
            a.abort());
            var d = Sg.grl;
            d || (d = SA(),
            Sg.grl = d);
            d() || (ig(35),
            a.abort());
            QB(a);
            this.nj(a);
            this.H.bl(a);
            var h = this.ji, k;
            !a.F(R.g.qb) || $i(R.g.V) || (KA ? a.B.getWithConfig(R.g.Ga) : 1 === a.J) || (KA ? a.C[R.g.th] = !0 : a.Gh = !0);
            var n;
            var p;
            p = void 0 === p ? 3 : p;
            var q = y.location.href;
            if (q) {
                var r = Sh(q).search.replace("?", "")
                  , t = Nh(r, "_gl", !1, !0) || "";
                n = t ? void 0 !== cl(t, p) : !1
            } else
                n = !1;
            var u = n;
            LA ? u && a.Ra() && (a.C[R.g.sh] = !0) : a.Ch = u;
            a.eventName === R.g.Ea ? (a.F(R.g.qb) && am(["aw", "dc"]),
            NA(a),
            k = PA(a)) : k = {};
            h.call(this, k);
            a.eventName == R.g.Ea && (a.F(R.g.Aa) || a.abort(),
            a.B.eventModel[R.g.da] && (a.B.containerConfig[R.g.da] = a.B.eventModel[R.g.da],
            a.B.eventModel[R.g.da] = void 0,
            JB[8] && (a.C[R.g.da] = void 0)),
            a.eventName = R.g.Mc);
            var v = $a(a.B.getMergedValues(R.g.da, 1), ".");
            v && (a.C[R.g.sc] = v);
            var x = $a(a.B.getMergedValues(R.g.da, 2), ".");
            x && (a.C[R.g.qc] = x);
            var z = this.h
              , w = this.D
              , A = this.H
              , B = DA(a);
            B || (B = w);
            var C = La(a.F(R.g.ed)), E;
            E = La(a.F(R.g.oe));
            var D;
            a: {
                if (B) {
                    var F = B.split(".");
                    if (!(5 > F.length || 7 < F.length)) {
                        D = {
                            sessionId: F[0],
                            Qe: Number(F[1]),
                            Jd: !!Number(F[2]),
                            Sf: Number(F[3]),
                            Vb: Number(F[4] || 0),
                            Wb: "1" === F[5],
                            Ge: "0" !== F[6] ? F[6] : void 0
                        };
                        break a
                    }
                }
                D = void 0
            }
            FA && (a.metadata.is_first_visit = !1,
            a.metadata.is_session_start = !1,
            a.metadata.join_timer_sec = 0);
            if (D && D.Vb) {
                var Q = Math.max(0, D.Vb - Math.max(0, a.s - D.Sf));
                FA ? a.metadata.join_timer_sec = Q : a.Vb = Q
            }
            var M = !1;
            D || (FA ? a.metadata.is_first_visit = !0 : a.zc = !0,
            M = !0,
            D = {
                sessionId: String(a.s),
                Qe: 1,
                Jd: !1,
                Sf: a.s,
                Wb: !1,
                Ge: void 0
            });
            a.s > D.Sf + 60 * C && (M = !0,
            D.sessionId = String(a.s),
            D.Qe++,
            D.Jd = !1,
            D.Ge = void 0);
            if (M)
                FA ? a.metadata.is_session_start = !0 : a.D = !0,
                A.ck(a);
            else if (A.Yj() > E || a.eventName == R.g.Mc)
                D.Jd = !0;
            if (FA) {
                Dm(a, R.g.pb, D.sessionId);
                Dm(a, R.g.gd, D.Qe);
                Dm(a, R.g.fd, D.Jd ? 1 : 0);
            } else {
                a.ze(R.g.pb, D.sessionId);
                a.ze(R.g.gd, D.Qe);
                a.ze(R.g.fd, D.Jd ? 1 : 0);
            }
            var na = a.F(R.g.Ga), Ga;
            uA ? (a.metadata.is_new_to_site = !1,
            Ga = na ? 1 : 8) : Ga = a.J;
            na || (na = xA(a),
            Ga = 3);
            na || (na = z,
            Ga = 5);
            if (!na) {
                var Da = $i(R.g.V)
                  , Pa = rA();
                na = !Pa.from_cookie || Da ? Pa.vid : void 0;
                Ga = 6
            }
            na ? na = "" + na : (na = yj(),
            Ga = 7,
            uA ? a.metadata.is_first_visit = a.metadata.is_new_to_site = !0 : a.zc = a.yh = !0);
            vA(a, na, Ga);
            SB(a);
            var db = ""
              , cc = I.location;
            if (cc) {
                var pc = cc.pathname || "";
                "/" != pc.charAt(0) && (pc = "/" + pc);
                db = cc.protocol + "//" + cc.hostname + pc + cc.search
            }
            Dm(a, R.g.Va, db);
            var Bf = R.g.fb, Dh;
            a: {
                var yt = lj("_opt_expid", void 0, void 0, R.g.V)[0];
                if (yt) {
                    var zt = decodeURIComponent(yt).split("$");
                    if (3 === zt.length) {
                        Dh = zt[2];
                        break a
                    }
                }
                if (void 0 !== Sg.ga4_referrer_override)
                    Dh = Sg.ga4_referrer_override;
                else {
                    var At = kh("gtm.gtagReferrer." + a.la);
                    Dh = At ? "" + At : I.referrer
                }
            }
            Dm(a, Bf, Dh || void 0);
            Dm(a, R.g.xc, I.title);
            Dm(a, R.g.Ua, (Gb.language || "").toLowerCase());
            var Bt = uh();
            Dm(a, R.g.Kb, Bt.width + "x" + Bt.height);
            JB[1] && (a.metadata.create_dc_join = !1,
            a.metadata.create_google_join = !1);
            if (!a.metadata.is_merchant_center && !1 !== a.F(R.g.Oc) && Hs() && $i(R.g.I)) {
                var Cf = Em(a, R.g.yb, a.F(R.g.yb));
                if ((JB[1] ? a.metadata.is_session_start : a.D) || a.F(R.g.hf)) {
                    JB[1] ? a.metadata.create_dc_join = !!Cf : a.qf = !!Cf;
                }
                var Al;
                JB[1] ? Al = a.metadata.join_timer_sec : Al = a.Vb;
                var sD = Al;
                Cf && 0 === (sD || 0) && (JB[1] ? (a.metadata.join_timer_sec = 60,
                a.metadata.create_google_join = !0) : (a.Vb = 60,
                a.U = !0))
            }
            TB(a);
            Ig.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0,
            Dm(a, R.g.ca),
            Dm(a, R.g.va));
            Dm(a, R.g.nf);
            for (var Ct = a.F(R.g.jf) || [], Bl = 0; Bl < Ct.length; Bl++) {
                var Dt = Ct[Bl];
                if (Dt.rule_result) {
                    Dm(a, R.g.nf, Dt.traffic_type);
                    kA(3);
                    break
                }
            }
            if (!a.metadata.is_merchant_center && a.F(R.g.fa)) {
                var Et = HA(a) || {}
                  , uD = (kl(Et[R.g.uc], !!Et[R.g.X]) ? bl(!0)._fplc : void 0) || (0 < lj("FPLC", void 0, void 0, R.g.V).length ? void 0 : "0");
                a.C._fplc = uD
            }
            if (void 0 !== a.F(R.g.ke))
                Dm(a, R.g.ke);
            else {
                var Ft = a.F(R.g.ne), Cl, Eh;
                a: {
                    if (MA) {
                        var Dl = HA(a) || {};
                        if (Dl && Dl[R.g.X])
                            for (var Gt = TA(a), Fh = Dl[R.g.X], Df = 0; Df < Fh.length; Df++)
                                if (Fh[Df]instanceof RegExp) {
                                    if (Fh[Df].test(Gt)) {
                                        Eh = !0;
                                        break a
                                    }
                                } else if (0 <= Gt.indexOf(Fh[Df])) {
                                    Eh = !0;
                                    break a
                                }
                    }
                    Eh = !1
                }
                var Gh;
                if (!(Gh = Eh))
                    if (UA)
                        Gh = !1;
                    else {
                        var vD = TA(a), Hh;
                        var El = String(a.F(R.g.ya));
                        if ("none" !== El)
                            if ("auto" !== El)
                                Hh = El;
                            else {
                                if (!WA) {
                                    for (var Ht = String(a.F(R.g.wb)), Ef = rj(), ve = 0; ve < Ef.length; ve++)
                                        if ("none" !== Ef[ve]) {
                                            var It = String(a.F(R.g.Pa)) + "_ga_autodomain";
                                            if (0 === uj(It, VA, {
                                                ib: R.g.V,
                                                domain: Ef[ve],
                                                path: Ht
                                            })) {
                                                uj(It, void 0, {
                                                    ib: R.g.V,
                                                    domain: Ef[ve],
                                                    path: Ht
                                                });
                                                XA = Ef[ve];
                                                break
                                            }
                                        }
                                    WA = !0
                                }
                                Hh = XA
                            }
                        else
                            Hh = void 0;
                        var Jt = Hh;
                        Gh = Jt ? 0 <= vD.indexOf(Jt) : !1
                    }
                if (!(Cl = Gh)) {
                    var Ih;
                    if (Ih = Ft)
                        a: {
                            for (var Kt = Ft.include_conditions || [], wD = TA(a), Fl = 0; Fl < Kt.length; Fl++)
                                if (Kt[Fl].test(wD)) {
                                    Ih = !0;
                                    break a
                                }
                            Ih = !1
                        }
                    Cl = Ih
                }
                Cl && (a.C[R.g.ke] = "1",
                kA(4))
            }
            if (a.Ra() && (Mm[17] && (Nq() || (a.C._uc = xi.Ef)),
            Ni())) {
                a.C._rnd = Dj();
            }
            UB(a);
            if (a.eventName == R.g.Na) {
                var Lt = a.F(R.g.eb)
                  , yD = a.F(R.g.ob)
                  , Mt = void 0;
                Mt = a.C[Lt];
                yD(Mt || a.F(Lt));
                a.abort()
            }
            if (!a.B.eventMetadata.syn_or_mod) {
                var Gl = a.F(R.g.df);
                if (Gl) {
                    var gd = L(a.ia);
                    L(a.C, gd);
                    for (var Nt = Gl.edit_rules || [], Ot = !1, Hl = 0; Hl < Nt.length; Hl++) {
                        var Jh;
                        a: {
                            var Gc = a
                              , Gd = Nt[Hl];
                            if (nz(Gc.eventName, gd, Gd.event_name_predicate, Gd.conditions || [])) {
                                if (Gd.new_event_name) {
                                    var Pt = m(Gd.new_event_name) ? String(Gd.new_event_name) : kz(Gc.eventName, gd, Gd.new_event_name);
                                    if (mA(Pt)) {
                                        Jh = !1;
                                        break a
                                    }
                                    Gc.eventName = String(Pt)
                                }
                                nA(Gc.eventName, gd, Gd);
                                var Qt = !0;
                                Qt = !1;
                                kA(2);
                                if (Qt) {
                                    var Il = {}
                                      , Rt = {
                                        eventMetadata: (Il.syn_or_mod = !0,
                                        Il.is_external_event = !!Gc.B.eventMetadata.is_external_event,
                                        Il)
                                    }
                                      , St = hg();
                                    St && (Rt.eventMetadata.event_usage = St);
                                    var zD = Uq(Gc.la, Gc.eventName, gd);
                                    Xq(zD, Gc.B.eventId, Rt);
                                    Gc.abort()
                                }
                                Jh = !0
                            } else
                                Jh = !1
                        }
                        Jh && (Ot = !0)
                    }
                    for (var Tt = Gl.synthesis_rules || [], Jl = 0; Jl < Tt.length; Jl++) {
                        var Kl = a
                          , Ff = Tt[Jl];
                        if (nz(Kl.eventName, gd, Ff.event_name_predicate, Ff.conditions || [])) {
                            var Ll = Ff.new_event_name;
                            if (!mA(Ll)) {
                                var Ut = Ff.merge_source_event_params ? L(gd) : {};
                                nA(Ll, Ut, Ff);
                                var Vt = {}
                                  , AD = {
                                    eventMetadata: (Vt.syn_or_mod = !0,
                                    Vt)
                                }
                                  , BD = Uq(Kl.la, Ll, Ut);
                                Xq(BD, Kl.B.eventId, AD);
                                kA(1)
                            }
                        }
                    }
                    if (Ot) {
                        var Ml = {}
                          , Wt = {
                            eventMetadata: (Ml.syn_or_mod = !0,
                            Ml.is_external_event = !!a.B.eventMetadata.is_external_event,
                            Ml)
                        }
                          , Xt = hg();
                        Xt && (Wt.eventMetadata.event_usage = Xt);
                        var CD = Uq(a.la, a.eventName, gd);
                        Xq(CD, a.B.eventId, Wt);
                        a.abort()
                    }
                }
            }
            Hm(a);
            var Nl = a.metadata.event_usage;
            if (Ca(Nl))
                for (var Ol = 0; Ol < Nl.length; Ol++)
                    kA(Nl[Ol]);
            var Yt = gg("GA4_EVENT");
            Yt && (a.C._eu = Yt);
            VB(a);
            var ED = this.ji, Zt = this.h, Pl;
            var Ql = GA(a);
            Ql ? (CA(Ql, a) || (ig(25),
            a.abort()),
            Pl = Ql) : Pl = void 0;
            var FD = Pl, Kh;
            var Hc;
            Hc = uA ? a.C[R.g.Ga] : a.ia[R.g.Ga];
            Zt && Hc === Zt ? Kh = Hc : Hc ? (Hc = "" + Hc,
            zA(Hc, a) || (ig(31),
            a.abort()),
            tA(Hc, $i(R.g.V)),
            Kh = Hc) : (ig(32),
            a.abort(),
            Kh = "");
            ED.call(this, {
                clientId: Kh,
                ri: FD
            });
            this.Zk(a);
            if (a.Ra()) {
                var GD = JB[1] ? a.metadata.is_conversion : a.Fb;
                ("page_view" === a.eventName || GD) && KB(this, a)
            }
            this.H.gg();
            this.Fb = WB(a, this.Fb);
            a.F(R.g.me) && (a.C[R.g.me] = !0,
            IB(a, R.g.Kb));
            Dm(a, R.g.Jg);
            this.Nh(a);
            a.B.onSuccess()
        } catch (fE) {
            a.B.onFailure()
        }
        delete eg.GA4_EVENT
    }
    ;
    l.Nh = function(a) {
        this.U.add(a)
    }
    ;
    l.ji = function(a) {
        var b = a.clientId
          , c = a.ri;
        b && c && (this.h = b,
        this.D = c)
    }
    ;
    l.flush = function() {
        this.U.flush()
    }
    ;
    l.Zk = function(a) {
        var b = this;
        if (!this.J) {
            var c = $i(R.g.V);
            bj([R.g.V], function() {
                var d = $i(R.g.V);
                if (c ^ d && b.s && b.D && b.h) {
                    var e = b.h;
                    if (d) {
                        var f = !0;
                        f = !1;
                        var g = xA(b.s);
                        if (g) {
                            b.h = g;
                            var h = DA(b.s);
                            f || h ? b.D = h : CA(b.D, b.s)
                        } else
                            zA(b.h, b.s),
                            tA(b.h, !0),
                            CA(b.D, b.s);
                        var k = {};
                        k[R.g.hf] = e;
                        var n = Uq(b.sa, R.g.af, k);
                        Xq(n, a.B.eventId, {});
                    } else {
                        b.D = void 0;
                        b.h = void 0;
                        y.gaGlobal = {};
                    }
                    c = d
                }
            });
            this.J = !0
        }
    }
    ;
    l.nj = function(a) {
        a.eventName !== R.g.Na && this.H.mj(a)
    }
    ;
    var RB = function(a) {
        if (a.metadata.is_merchant_center || a.F(R.g.Vg))
            a.h = !1,
            a.metadata.euid_mode_enabled = !1;
        else {
            var b = function(c) {
                return !!c && ("auto_detect" === c.mode || "selectors" === c.mode || "code" === c.mode)
            };
            JB[1] ? a.metadata.euid_mode_enabled = b(a.getRemoteConfig(R.g.Mb)) : a.h = b(a.getRemoteConfig(R.g.Mb))
        }
    }
      , UB = function(a) {
        if (Mm[25] && !a.F(R.g.me)) {
            var b = FB();
            ig(85);
            b ? (a.C[R.g.ah] = b.architecture,
            a.C[R.g.bh] = b.bitness,
            b.fullVersionList && (a.C[R.g.dh] = b.fullVersionList.map(function(c) {
                return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
            }).join("|")),
            a.C[R.g.eh] = b.model,
            a.C[R.g.fh] = b.platform,
            a.C[R.g.gh] = b.platformVersion,
            a.C[R.g.hh] = b.wow64 ? "1" : "0") : ig(86)
        }
    }
      , QB = function(a) {
        if (JB[8]) {
            var b = function(c, d) {
                Dg[c] || (a.C[c] = d)
            };
            Ja(a.B.containerConfig, b);
            Ja(a.B.eventModel, b)
        }
    }
      , SB = function(a) {
        var b = a.B.getKeysFromFirstOfAnyScope([R.g.Tc, R.g.Wd, R.g.Xd, R.g.Yd, R.g.Zd, R.g.ae, R.g.be])
          , c = function(d, e) {
            NB[d] && (a.C[d] = e)
        };
        nc(b[R.g.Tc]) ? Ja(b[R.g.Tc], function(d, e) {
            c((R.g.Tc + "_" + d).toLowerCase(), e)
        }) : Ja(b, c)
    }
      , TB = function(a) {
        var b = function(c) {
            return !!c && c.conversion
        };
        JB[1] ? a.metadata.is_conversion = b(a.Sb()) : a.Fb = b(a.Sb());
        if (JB[1] ? a.metadata.is_first_visit : a.zc)
            JB[1] ? a.metadata.is_first_visit_conversion = b(a.Sb("first_visit")) : a.Ah = b(a.Sb("first_visit"));
        if (JB[1] ? a.metadata.is_session_start : a.D)
            JB[1] ? a.metadata.is_session_start_conversion = b(a.Sb("session_start")) : a.Jh = b(a.Sb("session_start"))
    }
      , VB = function(a) {
        var b = Object.keys(JB);
        if (b.length) {
            b.forEach(function(d) {
                JB[d] && fg("CCD", Number(d))
            });
            var c = gg("CCD");
            c && (a.uf = "ccd." + c)
        }
    }
      , WB = function(a, b) {
        var c = void 0;
        return c
    };
    function PB(a) {
        Ja(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[R.g.Wa] || {};
        Ja(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    }
    ;var XB = function(a) {
        if ("prerender" == I.visibilityState)
            return !1;
        a();
        return !0
    }
      , YB = function(a) {
        if (!XB(a)) {
            var b = !1
              , c = function() {
                !b && XB(a) && (b = !0,
                Sb(I, "visibilitychange", c),
                ig(55))
            };
            Rb(I, "visibilitychange", c);
            ig(54)
        }
    };
    var ZB = function(a, b, c, d, e) {
        var f = Uq(a, b, d);
        e = e || {};
        Xq(f, c, e)
    }
      , $B = function(a, b, c, d, e) {
        var f = Uq(a, b, d);
        e = e || {};
        e.deferrable = !0;
        Xq(f, c, e)
    }
      , bC = function(a, b, c) {
        YB(function() {
            var d = mm(a);
            if (d) {
                var e = aC(d, c, b);
                du().register(a, e, void 0)
            }
        });
    };
    function aC(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = function() {};
        var e = cC(a, c)
          , f = "MC" === a.prefix;
        d = function(g, h, k, n) {
            f && (n.eventMetadata.is_merchant_center = !0);
            e.Hk(h, k, n)
        }
        ;
        dC(a, e, b);
        return d
    }
    function dC(a, b, c) {
        var d = b.H
          , e = {
            eventId: c
        };
        d.Mk(function() {
            du().flush();
            1E3 <= d.Ke() && Gb.sendBeacon && fu(R.g.af, {}, a.id, e);
            iA = !0;
            b.flush();
            d.li(function() {
                iA = !1;
                d.li()
            })
        });
    }
    var cC = function(a, b) {
        b = b || {};
        return new OB(a.id,b)
    };
    var hC = aC;
    function jC(a, b, c, d) {
        N(H(this), ["target:!*", "eventName:!*", "eventParameters:?DustMap", "messageContext:?DustMap"], arguments);
        var e = c ? qc(c) : {}
          , f = qc(a);
        Array.isArray(f) || (f = [f]);
        b = String(b);
        var g = d ? qc(d) : {}
          , h = this.h.h;
        g.originatingEntity = Cz(h);
        for (var k = 0; k < f.length; k++) {
            var n = f[k];
            if ("string" === typeof n) {
                var p = L(e)
                  , q = L(g)
                  , r = Uq(n, b, p);
                Xq(r, h.eventId, q)
            }
        }
    }
    jC.M = "internal.sendGtagEvent";
    function kC(a, b, c) {}
    kC.N = "sendPixel";
    function lC(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    lC.N = "setCookie";
    var mC = !1;
    mC = !0;
    function nC(a) {
        N(H(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Ob(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== R.g.We && O(this, "access_consent", e, "write")
        }
        var f = this.h.h
          , g = f.eventId
          , h = Dz(f);
        if (mC) {
            var k = Rq("consent", "default", qc(a));
            Xq(k, g, h)
        } else
            Xi(qc(a))
    }
    nC.N = "setDefaultConsentState";
    function oC(a, b, c) {
        return !1
    }
    oC.N = "setInWindow";
    function pC(a, b, c) {
        N(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = th(a) || {};
        d[b] = qc(c, this.h);
        var e = a;
        rh || sh();
        qh[e] = d;
    }
    pC.M = "internal.setProductSettingsParameter";
    function qC(a, b, c) {
        N(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        for (var d = b.split("."), e = iu(a), f = 0; f < d.length - 1; f++) {
            if (void 0 === e[d[f]])
                e[d[f]] = {};
            else if (!nc(e[d[f]]))
                throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]]
        }
        e[d[f]] = qc(c, this.h);
    }
    qC.M = "internal.setRemoteConfigParameter";
    function rC(a, b, c, d) {
        var e = this;
    }
    rC.N = "sha256";
    function sC(a, b, c) {}
    sC.M = "internal.sortRemoteConfigParameters";
    var tC = {}
      , uC = {};
    tC.N = "templateStorage";
    tC.getItem = function(a) {
        var b = null;
        return b
    }
    ;
    tC.setItem = function(a, b) {}
    ;
    tC.removeItem = function(a) {}
    ;
    tC.clear = function() {}
    ;
    var vC = function(a) {
        var b;
        return b
    };
    var wC = !1;
    wC = !0;
    function xC(a) {
        N(H(this), ["consentSettings:!DustMap"], arguments);
        var b = qc(a), c;
        for (c in b)
            b.hasOwnProperty(c) && O(this, "access_consent", c, "write");
        var d = this.h.h
          , e = d.eventId
          , f = Dz(d);
        wC ? Xq(Rq("consent", "update", b), e, f) : Zi(b, {
            eventId: e
        })
    }
    xC.N = "updateConsentState";
    var yC = function() {
        var a = new Xf
          , b = function(d) {
            var e = d.M;
            if (a.s.hasOwnProperty(e))
                throw "Attempting to add a private function which already exists: " + e + ".";
            if (a.h.hasOwnProperty(e))
                throw "Attempting to add a private function with an existing API name: " + e + ".";
            a.s[e] = Aa(d) ? qf(e, d) : rf(e, d)
        }
          , c = function(d) {
            return a.add(d.N, d)
        };
        c(Sw);
        c(Yw);
        c(Kx);
        c(Nx);
        c(Ox);
        c(Sx);
        c(Tx);
        c(Vx);
        c(Oz());
        c(Wx);
        c(qz);
        c(vz);
        c(wz);
        c(xz);
        c(Az);
        c(Gz);
        c(Jz);
        c(Nz);
        c(Tz);
        c(Uz);
        c(Wz);
        c(Xz);
        c(Yz);
        c(kC);
        c(lC);
        c(nC);
        c(oC);
        c(rC);
        c(tC);
        c(xC);
        a.add("Math", wf());
        a.add("Object", Vf);
        a.add("TestHelper", Zf());
        a.add("assertApi", sf);
        a.add("assertThat", tf);
        a.add("decodeUri", xf);
        a.add("decodeUriComponent", yf);
        a.add("encodeUri", zf);
        a.add("encodeUriComponent", Af);
        a.add("fail", Gf);
        a.add("generateRandom", Hf);
        a.add("getContainerVersion", If);
        a.add("getTimestamp", Lf);
        a.add("getTimestampMillis", Lf);
        a.add("getType", Mf);
        a.add("makeInteger", Of);
        a.add("makeNumber", Pf);
        a.add("makeString", Qf);
        a.add("makeTableMap", Rf);
        a.add("mock", Uf);
        a.add("fromBase64", pz, !("atob"in y));
        a.add("localStorage", Qz, !Pz());
        a.add("toBase64", vC, !("btoa"in y));
        b(Vw);
        b(nx);
        b(ux);
        b(zx);
        b(Ix);
        b(Qx);
        b(gy);
        b(ly);
        b(qy);
        b(zy);
        b(Dy);
        b(Oy);
        b(az);
        b(gz);
        b(iz);
        b(rz);
        b(sz);
        b(Kf);
        b(yz);
        b(Mz);
        b(Sz);
        b(aA);
        b(bA);
        b(jC);
        c(Fz);
        b(Lx);
        b(zz);
        b(qC);
        b(sC);
        b(uz);
        b(pC);
        return function(d) {
            var e;
            if (a.h.hasOwnProperty(d))
                e = a.get(d, this);
            else {
                var f;
                if (f = a.s.hasOwnProperty(d)) {
                    var g = !1
                      , h = this.h.h;
                    if (h) {
                        var k = h.xd();
                        if (k) {
                            0 !== k.indexOf("__cvt_") && (g = !0);
                        }
                    }
                    f = g
                }
                if (f) {
                    var n = a.s.hasOwnProperty(d) ? a.s[d] : void 0;
                    e = n
                } else
                    throw Error(d + " is not a valid API name.");
            }
            return e
        }
    };
    var zC = function() {
        return !1
    }
      , AC = function() {
        var a = {};
        return function(b, c, d) {}
    };
    var BC;
    function CC() {
        var a = BC;
        return function(b, c, d) {
            var e = d && d.event;
            DC(c);
            var f = new gb;
            Ja(c, function(q, r) {
                var t = oc(r);
                void 0 === t && void 0 !== r && ig(44);
                f.set(q, t)
            });
            a.h.h.J = ye();
            var g = {
                Cj: Le(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                ye: void 0 !== e ? function(q) {
                    return e.Bb.ye(q)
                }
                : void 0,
                xd: function() {
                    return b
                },
                log: function() {},
                Nj: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                }
            };
            if (zC()) {
                var h = AC()
                  , k = void 0
                  , n = void 0;
                g.Za = {
                    jg: [],
                    ld: {},
                    hb: function(q, r, t) {
                        1 === r && (k = q);
                        7 === r && (n = t);
                        h(q, r, t)
                    },
                    Vf: Sf()
                };
                g.log = function(q, r) {
                    if (k) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, {
                            level: q,
                            source: n,
                            message: t
                        })
                    }
                }
            }
            var p = Id(a, g, [b, f]);
            a.h.h.J = void 0;
            p instanceof oa && "return" === p.h && (p = p.s);
            return qc(p)
        }
    }
    function DC(a) {
        var b = a.gtmOnSuccess
          , c = a.gtmOnFailure;
        Aa(b) && (a.gtmOnSuccess = function() {
            J(b)
        }
        );
        Aa(c) && (a.gtmOnFailure = function() {
            J(c)
        }
        )
    }
    function EC() {
        BC.h.h.U = function(a, b, c) {
            Sg.SANDBOXED_JS_SEMAPHORE = Sg.SANDBOXED_JS_SEMAPHORE || 0;
            Sg.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Sg.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }
    function FC(a) {
        void 0 !== a && Ja(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                dh[e] = dh[e] || [];
                dh[e].push(b)
            }
        })
    }
    ;var GC = encodeURI
      , W = encodeURIComponent
      , HC = Qb;
    var IC = function(a, b) {
        if (!a)
            return !1;
        var c = Qh(Sh(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , JC = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var Z = {
        m: {}
    };

    Z.m.read_container_data = ["google"],
    function() {
        (function(a) {
            Z.__read_container_data = a;
            Z.__read_container_data.o = "read_container_data";
            Z.__read_container_data.isVendorTemplate = !0;
            Z.__read_container_data.priorityOverride = 0
        }
        )(function() {
            return {
                assert: function() {},
                aa: function() {
                    return {}
                }
            }
        })
    }();
    Z.m.c = ["google"],
    function() {
        (function(a) {
            Z.__c = a;
            Z.__c.o = "c";
            Z.__c.isVendorTemplate = !0;
            Z.__c.priorityOverride = 0
        }
        )(function(a) {
            gw(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value
        })
    }();
    Z.m.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.o = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Z.m.listen_data_layer = ["google"],
    function() {
        function a(b, c) {
            return {
                eventName: c
            }
        }
        (function(b) {
            Z.__listen_data_layer = b;
            Z.__listen_data_layer.o = "listen_data_layer";
            Z.__listen_data_layer.isVendorTemplate = !0;
            Z.__listen_data_layer.priorityOverride = 0
        }
        )(function(b) {
            var c = b.vtp_accessType
              , d = b.vtp_allowedEvents || []
              , e = b.vtp_createPermissionError;
            return {
                assert: function(f, g) {
                    if (!m(g))
                        throw e(f, {
                            eventName: g
                        }, "Event name must be a string.");
                    if (!("any" === c || "specific" === c && 0 <= d.indexOf(g)))
                        throw e(f, {
                            eventName: g
                        }, "Prohibited listen on data layer event.");
                },
                aa: a
            }
        })
    }();

    Z.m.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.o = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = Zv(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            gw(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();
    Z.m.get_url = ["google"],
    function() {
        function a(b, c, d) {
            return {
                component: c,
                queryKey: d
            }
        }
        (function(b) {
            Z.__get_url = b;
            Z.__get_url.o = "get_url";
            Z.__get_url.isVendorTemplate = !0;
            Z.__get_url.priorityOverride = 0
        }
        )(function(b) {
            var c = "any" === b.vtp_urlParts ? null : [];
            c && (b.vtp_protocol && c.push("protocol"),
            b.vtp_host && c.push("host"),
            b.vtp_port && c.push("port"),
            b.vtp_path && c.push("path"),
            b.vtp_extension && c.push("extension"),
            b.vtp_query && c.push("query"),
            b.vtp_fragment && c.push("fragment"));
            var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null
              , e = b.vtp_createPermissionError;
            return {
                assert: function(f, g, h) {
                    if (g) {
                        if (!m(g))
                            throw e(f, {}, "URL component must be a string.");
                        if (c && 0 > c.indexOf(g))
                            throw e(f, {}, "Prohibited URL component: " + g);
                        if ("query" === g && d) {
                            if (!h)
                                throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                            if (!m(h))
                                throw e(f, {}, "Query key must be a string.");
                            if (0 > d.indexOf(h))
                                throw e(f, {}, "Prohibited query key: " + h);
                        }
                    } else if (c)
                        throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
                },
                aa: a
            }
        })
    }();

    Z.m.process_dom_events = ["google"],
    function() {
        function a(b, c, d) {
            return {
                targetType: c,
                eventName: d
            }
        }
        (function(b) {
            Z.__process_dom_events = b;
            Z.__process_dom_events.o = "process_dom_events";
            Z.__process_dom_events.isVendorTemplate = !0;
            Z.__process_dom_events.priorityOverride = 0
        }
        )(function(b) {
            for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
                var g = c[f];
                e[g.targetType] = e[g.targetType] || [];
                e[g.targetType].push(g.eventName)
            }
            return {
                assert: function(h, k, n) {
                    if (!e[k])
                        throw d(h, {}, "Prohibited event target " + k + ".");
                    if (-1 === e[k].indexOf(n))
                        throw d(h, {}, "Prohibited listener registration for DOM event " + n + ".");
                },
                aa: a
            }
        })
    }();

    Z.m.gct = ["google"],
    function() {
        function a(d) {
            for (var e = [], f = 0; f < d.length; f++)
                try {
                    e.push(new RegExp(d[f]))
                } catch (g) {}
            return e
        }
        function b(d) {
            return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        }
        function c(d) {
            for (var e = [], f = 0; f < d.length; f++) {
                var g = d[f].matchValue, h;
                switch (d[f].matchType) {
                case "BEGINS_WITH":
                    h = "^" + b(g);
                    break;
                case "ENDS_WITH":
                    h = b(g) + "$";
                    break;
                case "EQUALS":
                    h = "^" + b(g) + "$";
                    break;
                case "REGEX":
                    h = g;
                    break;
                default:
                    h = b(g)
                }
                e.push(h)
            }
            return e
        }
        (function(d) {
            Z.__gct = d;
            Z.__gct.o = "gct";
            Z.__gct.isVendorTemplate = !0;
            Z.__gct.priorityOverride = 0
        }
        )(function(d) {
            var e = {}
              , f = d.vtp_sessionDuration;
            0 < f && (e[R.g.ed] = f);
            e[R.g.de] = d.vtp_eventSettings;
            e[R.g.df] = d.vtp_dynamicEventSettings;
            e[R.g.yb] = 1 === d.vtp_googleSignals;
            e[R.g.ie] = d.vtp_foreignTld;
            e[R.g.cd] = 1 === d.vtp_restrictDomain;
            e[R.g.jf] = d.vtp_internalTrafficResults;
            var g = R.g.za
              , h = d.vtp_linker;
            h && h[R.g.X] && (h[R.g.X] = a(h[R.g.X]));
            e[g] = h;
            var k = R.g.ne
              , n = d.vtp_referralExclusionDefinition;
            n && n.include_conditions && (n.include_conditions = a(n.include_conditions));
            e[k] = n;
            var p = d.vtp_trackingId
              , q = iu(p)
              , r = q.referral_exclusion_conditions;
            r && (r.length && "object" === typeof r[0] && (r = c(r)),
            e[R.g.ne] = {
                include_conditions: a(r)
            });
            var t = q.cross_domain_conditions;
            if (t) {
                t.length && "object" === typeof t[0] && (t = c(t));
                var u = {};
                e[R.g.za] = (u[R.g.X] = a(t),
                u[R.g.vc] = !0,
                u[R.g.uc] = !0,
                u[R.g.dd] = "query",
                u)
            }
            bC(p, e, d.vtp_gtmEventId);
            J(d.vtp_gtmOnSuccess)
        })
    }();

    Z.m.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.o = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_settings
              , c = b.eventParameters || {}
              , d = String(a.vtp_eventName)
              , e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            (a.vtp_deferrable ? $B : ZB)(String(b.streamId), d, e.eventId, c, e);
            a.vtp_gtmOnSuccess()
        })
    }();

    var eE = {};
    eE.dataLayer = lh;
    eE.callback = function(a) {
        ch.hasOwnProperty(a) && Aa(ch[a]) && ch[a]();
        delete ch[a]
    }
    ;
    eE.bootstrap = 0;
    eE._spx = !1;
    (function(a) {
        if (!y["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (I.referrer) {
                var c = Sh(I.referrer);
                b = "cct.google" === Ph(c, "host")
            }
            if (!b) {
                var d = lj("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (y["__TAGGY_INSTALLED"] = !0,
            Nb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
            var r = "GTM"
              , t = "GTM";
            r = "OGT",
            t = "GTAG";
            var u = y["google.tagmanager.debugui2.queue"];
            u || (u = [],
            y["google.tagmanager.debugui2.queue"] = u,
            Nb("https://" + Rg.Lc + "/debug/bootstrap?id=" + Ge.P + "&src=" + t + "&cond=" + q + "&gtm=" + Oj()));
            var v = {
                messageType: "CONTAINER_STARTING",
                data: {
                    scriptSource: Hb,
                    containerProduct: r,
                    debug: !1,
                    id: Ge.P,
                    isGte: $g
                }
            };
            v.data.resume = function() {
                a()
            }
            ;
            Rg.Ei && (v.data.initialPublish = !0);
            u.push(v)
        }
          , g = void 0
          , h = Qh(y.location, "query", !1, void 0, "gtm_debug");
        qv(h) && (g = 2);
        if (!g && I.referrer) {
            var k = Sh(I.referrer);
            "tagassistant.google.com" === Ph(k, "host") && (g = 3)
        }
        if (!g) {
            var n = lj("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = I.documentElement.getAttribute("data-tag-assistant-present");
            qv(p) && (g = 5)
        }
        g && Hb ? f(g) : a()
    }
    )(function() {
        GB();
        var a = !1;
        a && pq("INIT");
        Bi().s();
        sk();
        ll.enable_gbraid_cookie_write = !0;
        var b = !!Sg[Ge.P];
        !b && Ge.Kc && (b = !!Sg["ctid_" + Ge.Kc]);
        if (b) {
            var c = Sg.zones;
            c && c.unregisterChild(Gj());
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++)
                fe.push(e[f]);
            for (var g = d.tags || [], h = 0; h < g.length; h++)
                ie.push(g[h]);
            for (var k = d.predicates || [], n = 0; n < k.length; n++)
                he.push(k[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], t = {}, u = 0; u < r.length; u++)
                    t[r[u][0]] = Array.prototype.slice.call(r[u], 1);
                ge.push(t)
            }
            ke = Z;
            le = Qw;
            Ke = new Je;
            var v = data.sandboxed_scripts
              , x = data.security_groups
              , z = data.runtime || []
              , w = data.runtime_lines;
            BC = new Fd;
            EC();
            ee = CC();
            var A = BC
              , B = yC();
            jb(A.h, "require", B);
            for (var C = 0; C < z.length; C++) {
                var E = z[C];
                if (!Ca(E) || 3 > E.length) {
                    if (0 === E.length)
                        continue;
                    break
                }
                w && w[C] && w[C].length && ue(E, w[C]);
                BC.execute(E)
            }
            if (void 0 !== v)
                for (var D = ["sandboxedScripts"], F = 0; F < v.length; F++) {
                    var Q = v[F].replace(/^_*/, "");
                    dh[Q] = D
                }
            FC(x);
            Sg[Ge.P] = eE;
            Ge.Kc && (Sg["ctid_" + Ge.Kc] = eE);
            for (var M = Jj(), S = Gj(), X = 0; X < S.length; X++)
                M.container[S[X]] = !0;
            for (var P = Hj(), K = 0; K < P.length; K++)
                M.destination[P[K]] = !0;
            M.canonical[Ge.Kc] = !0;
            Ua(dh, Z.m);
            ne = Ce;
            pv();
            $p = !1;
            aq = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState)
                cq();
            else {
                Rb(I, "DOMContentLoaded", cq);
                Rb(I, "readystatechange", cq);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var Y = !0;
                    try {
                        Y = !y.frameElement
                    } catch (Da) {}
                    Y && dq()
                }
                Rb(y, "load", cq)
            }
            Eu = !1;
            "complete" === I.readyState ? Gu() : Rb(y, "load", Gu);
            jp();
            bh = Ra();
            eE.bootstrap = bh;
            if (a) {
                var Ga = qq("INIT");
            }
        }
    });

}
)()
