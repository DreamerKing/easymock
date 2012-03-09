var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":138,"id":5496,"methods":[{"el":40,"sc":13,"sl":38},{"el":54,"sc":5,"sl":32},{"el":64,"sc":13,"sl":62},{"el":78,"sc":5,"sl":56},{"el":86,"sc":13,"sl":84},{"el":100,"sc":5,"sl":80},{"el":115,"sc":5,"sl":102},{"el":126,"sc":5,"sl":117},{"el":137,"sc":5,"sl":128}],"name":"DelegateToTest","sl":26},{"el":30,"id":5496,"methods":[],"name":"DelegateToTest.IMyInterface","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1011":{"methods":[{"sl":56},{"sl":62}],"name":"testStubDelegate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":63},{"sl":66},{"sl":67},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_1117":{"methods":[{"sl":56},{"sl":62}],"name":"testStubDelegate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":63},{"sl":66},{"sl":67},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_1169":{"methods":[{"sl":32},{"sl":38}],"name":"testDelegate","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":39},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1198":{"methods":[{"sl":102}],"name":"testWrongClass","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":111}]},"test_12":{"methods":[{"sl":117}],"name":"nullDelegationNotAllowed","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":121},{"sl":124}]},"test_1365":{"methods":[{"sl":117}],"name":"nullDelegationNotAllowed","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":121},{"sl":124}]},"test_1455":{"methods":[{"sl":32},{"sl":38}],"name":"testDelegate","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":39},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1456":{"methods":[{"sl":102}],"name":"testWrongClass","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":111}]},"test_1531":{"methods":[{"sl":102}],"name":"testWrongClass","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":111}]},"test_1591":{"methods":[{"sl":128}],"name":"nullStubDelegationNotAllowed","pass":true,"statements":[{"sl":130},{"sl":131},{"sl":132},{"sl":135}]},"test_1684":{"methods":[{"sl":32},{"sl":38}],"name":"testDelegate","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":39},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_1716":{"methods":[{"sl":56},{"sl":62}],"name":"testStubDelegate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":63},{"sl":66},{"sl":67},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_1717":{"methods":[{"sl":117}],"name":"nullDelegationNotAllowed","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":121},{"sl":124}]},"test_1744":{"methods":[{"sl":80},{"sl":84}],"name":"testReturnException","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":85},{"sl":88},{"sl":90},{"sl":92},{"sl":93},{"sl":96},{"sl":99}]},"test_2079":{"methods":[{"sl":56},{"sl":62}],"name":"testStubDelegate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":63},{"sl":66},{"sl":67},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_208":{"methods":[{"sl":80},{"sl":84}],"name":"testReturnException","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":85},{"sl":88},{"sl":90},{"sl":92},{"sl":93},{"sl":96},{"sl":99}]},"test_2260":{"methods":[{"sl":56},{"sl":62}],"name":"testStubDelegate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":63},{"sl":66},{"sl":67},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77}]},"test_2351":{"methods":[{"sl":102}],"name":"testWrongClass","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":111}]},"test_2877":{"methods":[{"sl":32},{"sl":38}],"name":"testDelegate","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":39},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_522":{"methods":[{"sl":128}],"name":"nullStubDelegationNotAllowed","pass":true,"statements":[{"sl":130},{"sl":131},{"sl":132},{"sl":135}]},"test_594":{"methods":[{"sl":128}],"name":"nullStubDelegationNotAllowed","pass":true,"statements":[{"sl":130},{"sl":131},{"sl":132},{"sl":135}]},"test_752":{"methods":[{"sl":117}],"name":"nullDelegationNotAllowed","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":121},{"sl":124}]},"test_76":{"methods":[{"sl":128}],"name":"nullStubDelegationNotAllowed","pass":true,"statements":[{"sl":130},{"sl":131},{"sl":132},{"sl":135}]},"test_764":{"methods":[{"sl":80},{"sl":84}],"name":"testReturnException","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":85},{"sl":88},{"sl":90},{"sl":92},{"sl":93},{"sl":96},{"sl":99}]},"test_771":{"methods":[{"sl":117}],"name":"nullDelegationNotAllowed","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":121},{"sl":124}]},"test_797":{"methods":[{"sl":102}],"name":"testWrongClass","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":111}]},"test_832":{"methods":[{"sl":32},{"sl":38}],"name":"testDelegate","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":39},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":53}]},"test_867":{"methods":[{"sl":80},{"sl":84}],"name":"testReturnException","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":85},{"sl":88},{"sl":90},{"sl":92},{"sl":93},{"sl":96},{"sl":99}]},"test_925":{"methods":[{"sl":80},{"sl":84}],"name":"testReturnException","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":85},{"sl":88},{"sl":90},{"sl":92},{"sl":93},{"sl":96},{"sl":99}]},"test_986":{"methods":[{"sl":128}],"name":"nullStubDelegationNotAllowed","pass":true,"statements":[{"sl":130},{"sl":131},{"sl":132},{"sl":135}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1169, 1455, 1684, 2877, 832], [], [1169, 1455, 1684, 2877, 832], [1169, 1455, 1684, 2877, 832], [], [], [1169, 1455, 1684, 2877, 832], [1169, 1455, 1684, 2877, 832], [], [], [], [1169, 1455, 1684, 2877, 832], [1169, 1455, 1684, 2877, 832], [], [1169, 1455, 1684, 2877, 832], [], [1169, 1455, 1684, 2877, 832], [1169, 1455, 1684, 2877, 832], [1169, 1455, 1684, 2877, 832], [1169, 1455, 1684, 2877, 832], [], [1169, 1455, 1684, 2877, 832], [], [], [1117, 1011, 1716, 2260, 2079], [], [1117, 1011, 1716, 2260, 2079], [1117, 1011, 1716, 2260, 2079], [], [], [1117, 1011, 1716, 2260, 2079], [1117, 1011, 1716, 2260, 2079], [], [], [1117, 1011, 1716, 2260, 2079], [1117, 1011, 1716, 2260, 2079], [], [1117, 1011, 1716, 2260, 2079], [], [1117, 1011, 1716, 2260, 2079], [1117, 1011, 1716, 2260, 2079], [1117, 1011, 1716, 2260, 2079], [1117, 1011, 1716, 2260, 2079], [1117, 1011, 1716, 2260, 2079], [], [1117, 1011, 1716, 2260, 2079], [], [], [867, 925, 764, 1744, 208], [], [867, 925, 764, 1744, 208], [867, 925, 764, 1744, 208], [867, 925, 764, 1744, 208], [867, 925, 764, 1744, 208], [], [], [867, 925, 764, 1744, 208], [], [867, 925, 764, 1744, 208], [], [867, 925, 764, 1744, 208], [867, 925, 764, 1744, 208], [], [], [867, 925, 764, 1744, 208], [], [], [867, 925, 764, 1744, 208], [], [], [1198, 1456, 2351, 1531, 797], [], [1198, 1456, 2351, 1531, 797], [1198, 1456, 2351, 1531, 797], [1198, 1456, 2351, 1531, 797], [1198, 1456, 2351, 1531, 797], [1198, 1456, 2351, 1531, 797], [], [], [1198, 1456, 2351, 1531, 797], [], [], [], [], [], [12, 1365, 1717, 752, 771], [], [12, 1365, 1717, 752, 771], [12, 1365, 1717, 752, 771], [12, 1365, 1717, 752, 771], [], [], [12, 1365, 1717, 752, 771], [], [], [], [76, 594, 1591, 986, 522], [], [76, 594, 1591, 986, 522], [76, 594, 1591, 986, 522], [76, 594, 1591, 986, 522], [], [], [76, 594, 1591, 986, 522], [], [], []]