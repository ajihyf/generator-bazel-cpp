"""
<%= title %> BUILD file
"""

load("@rules_cc//cc:defs.bzl", "cc_library")

cc_library(
    name = "<%= title %>",
    srcs = glob(["src/**/*.cc"]),
    hdrs = glob(["include/<%= title %>/**/*.h"]),
    includes = ["include"],
    visibility = ["//visibility:public"],
)
