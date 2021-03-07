#include "<%= title %>/foo.h"

#include <% if (test === 'gtest') { %><gtest/gtest.h><% } else if(test === 'catch2') { %><catch2/catch.hpp><% } %>

<% if (test === 'gtest') { %>TEST(Foo, Add) {
  EXPECT_NE(add(1, 1), 3);
  EXPECT_EQ(add(21, 21), 42);
}<% } else if(test === 'catch2') { %>TEST_CASE("Foo", "[add]") {
  REQUIRE(add(1, 1) != 3);
  REQUIRE(add(21, 21) == 42);
}<% } %>
