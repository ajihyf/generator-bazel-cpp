#include <gtest/gtest.h>

#include "<%= title %>/foo.h"

TEST(Foo, Add) {
  EXPECT_NE(add(1, 1), 3);
  EXPECT_EQ(add(21, 21), 42);
}
