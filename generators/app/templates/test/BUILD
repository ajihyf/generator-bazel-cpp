"""
<%= title %> test BUILD file
"""

load("@rules_cc//cc:defs.bzl", "cc_test")
load("@com_grail_bazel_compdb//:aspects.bzl", "compilation_database")

compilation_database(
    name = "build-compdb",
    testonly = True,
    targets = [
        ":foo-test",
    ],
)

test_suite(
    name = "test",
)

cc_test(
    name = "foo-test",
    srcs = [
        "foo-test.cc",
    ],
    deps = [
        "//<%= title %>",
        "@gtest//:gtest_main",
    ],
)
